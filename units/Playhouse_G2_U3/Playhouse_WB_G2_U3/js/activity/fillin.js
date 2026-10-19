//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020
//  ****************************************** //
window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");
  console.log("FillIn > ", $(".activity_area"));
  this.settings = {
    activity_area: ob[0],
    has_audio:
      obj[0].dataset.audio != undefined && obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",
    data_obj: dataObj,
    parent_holder: obj[0],
  };
  this.init(this.settings);
};
FillIn.prototype = {
  init: function (ob) {
    this.ob = ob;
    // this.reset();
    this.listen(ob);
  },
  listen: function (ob) {
    var e = ob.activity_area;
    var inputs = e.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");
        console.log($(this).data("type"));
        var v = this.value;
        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },
  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    var numOfFillIns = elsQue.length;
    var resultArr = [];

    function normalizeAnswer(value, strictCase) {
      value = String(value == null ? "" : value);

      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      return (
        value
          // توحيد كل أشكال الـ apostrophe
          .replace(/[’‘`´ʼ＇]/g, "'")

          // توحيد صيغة does not مع doesn't
          .replace(/\bdoes\s+not\b/gi, "doesn't")

          // توحيد صيغة do not مع don't
          .replace(/\bdo\s+not\b/gi, "don't")

          // تجاهل الفواصل والنقاط وعلامات السؤال
          .replace(/[\s,،﹐﹑，､٫.!?؟;:]/g, "")
      );
    }

    function flattenAnswers(value, result) {
      result = result || [];

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          flattenAnswers(value[i], result);
        }
      } else if (value !== undefined && value !== null && value !== "") {
        result.push(String(value));
      }

      return result;
    }

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var questionNumber = parseInt(elsQue[i].dataset.qno, 10);
      var questionData = ob.data_obj.questions[questionNumber - 1];
      var tick = elsQue[i].querySelector(".tick");
      var cross = elsQue[i].querySelector(".cross");
      var iconWrap = elsQue[i].querySelector(".icon_wrap");
      var inputBoxes = elsQue[i].querySelectorAll("input");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      var strictCase =
        questionData.strictcase !== undefined &&
        questionData.strictcase !== null
          ? String(questionData.strictcase).toLowerCase()
          : "no";

      /*
      نجمع:
      answer
      alternateanswer

      حتى لو alternateanswer كانت:
      [array.slice(1)]
      رح تنفرد بشكل صحيح.
    */
      var acceptedAnswers = [];

      flattenAnswers(questionData.answer, acceptedAnswers);
      flattenAnswers(questionData.alternateanswer, acceptedAnswers);

      var userAnswer = "";

      if (inputBoxes.length > 0) {
        userAnswer = inputBoxes[0].value;
      }

      var normalizedUserAnswer = normalizeAnswer(userAnswer, strictCase);
      var isCorrect = false;

      if (normalizedUserAnswer !== "") {
        for (var a = 0; a < acceptedAnswers.length; a++) {
          var normalizedCorrectAnswer = normalizeAnswer(
            acceptedAnswers[a],
            strictCase,
          );

          if (normalizedUserAnswer === normalizedCorrectAnswer) {
            isCorrect = true;
            break;
          }
        }
      }

      /*
      السؤال الافتراضي readonly يعتبر صحيحًا،
      لأنه معبأ مسبقًا من answer[0].
    */
      if (
        inputBoxes.length > 0 &&
        inputBoxes[0].hasAttribute("readonly") &&
        normalizedUserAnswer !== ""
      ) {
        isCorrect = true;
      }

      elsQue[i].dataset.showIcon = "true";

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (isCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        if (
          questionData.audio !== "" &&
          questionData.audio !== "no" &&
          questionData.audioenable === "correct" &&
          elsQue[i].querySelector(".audioIcon")
        ) {
          elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
        }
      } else {
        resultArr[i] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        if (
          questionData.audio !== "" &&
          questionData.audio !== "no" &&
          questionData.audioenable === "correct" &&
          elsQue[i].querySelector(".audioIcon")
        ) {
          elsQue[i].querySelector(".audioIcon").classList.add("disabled");
        }
      }
    }

    var allCorrect = resultArr.indexOf(0) === -1;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },
  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    // console.log('reset function >> ', elsQue.length, (ob.data_obj));
    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];
      elsQue[i].querySelector(".icon_wrap").style.display = "none";
      elsQue[i].querySelector(".tick").style.display = "none";
      elsQue[i].querySelector(".cross").style.display = "none";
      // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          if (fDataObj.audioenable == "correct") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          } else if (fDataObj.audioenable == "default") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
        }
      }
      var inputBoxes = elsQue[i].querySelectorAll("input");
      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          if (
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
          ) {
            inputBoxes[a].value = "";
            inputBoxes[a].style.color = "black";
          }
        }
      }
    }
    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
