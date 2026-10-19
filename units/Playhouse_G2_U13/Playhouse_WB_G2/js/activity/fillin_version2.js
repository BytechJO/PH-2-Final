//  ****************************************** //
//  FillIn - Version no: 1.2
//  Date updated - June 3, 2020
//  Date updated - August 12, 2020
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
    var self = this;
    var e = ob.activity_area;
    var inputs = e.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");
        console.log($(this).data("type"));
        var v = this.value;
        /*if($(this).data('type') == 'number'){
                    if($.isNumeric(v) === false) {               
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }*/
        if (
          typeof $(this).data("type") != undefined &&
          $(this).data("type") != null
        ) {
          var typ = $(this).data("type");
          if (typ == "text") {
            $(this).val(
              $(this)
                .val()
                .replace(/[^a-z ]/gi, ""),
            );
          } else if (typ == "number") {
            if ($.isNumeric(v) === false) {
              this.value = this.value.replace(/\D/g, "");
            }
          }
        }
        self.showTickCross();
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
    var self = this;
    var ob = this.ob;
    var $area = $(ob.activity_area);

    self.showTickCross(false);

    // نفحص حقول fill فقط
    var $fillQuestions = $area.find('.que[status="fill"]');
    var numOfFillQuestions = $fillQuestions.length;

    var resultArr = [];
    var allCorrect = false;

    if (numOfFillQuestions === 0) {
      showFeedback(true, false);
      return;
    }

    $fillQuestions.each(function (index) {
      var $question = $(this);

      var thisQNum = parseInt($question.attr("data-qno"), 10);
      var fDataObj = ob.data_obj.questions[thisQNum - 1];

      var $inputs = $question.find("input");
      var correctAnswers = getStrArray(fDataObj.answer || [], "activity");

      var strictCase =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? String(fDataObj.strictcase).toLowerCase()
          : "no";

      var questionCorrect = true;

      // سؤال بدون input أو عدد الإجابات مختلف = خطأ
      if ($inputs.length === 0 || $inputs.length !== correctAnswers.length) {
        questionCorrect = false;
      }

      $inputs.each(function (inputIndex) {
        var userAnswer = $.trim($(this).val());
        var correctAnswer =
          correctAnswers[inputIndex] !== undefined
            ? $.trim(String(correctAnswers[inputIndex]))
            : "";

        // الفراغ خطأ
        if (userAnswer === "") {
          questionCorrect = false;
          return;
        }

        userAnswer = userAnswer.replace(/\s/g, "");
        correctAnswer = correctAnswer.replace(/\s/g, "");

        if (strictCase !== "yes") {
          userAnswer = userAnswer.toLowerCase();
          correctAnswer = correctAnswer.toLowerCase();
        }

        if (userAnswer !== correctAnswer) {
          questionCorrect = false;
        }
      });

      resultArr[index] = questionCorrect ? 1 : 0;
    });

    allCorrect =
      resultArr.length === numOfFillQuestions &&
      resultArr.every(function (value) {
        return value === 1;
      });

    self.showTickCross(true, resultArr);
    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },
  showTickCross: function (aBool, aArr) {
    var ob = this.ob;
    var e = ob.activity_area;

    // العلامات لحقول fill فقط
    var elsQue = e.querySelectorAll('.que[status="fill"]');

    for (var i = 0; i < elsQue.length; i++) {
      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (!aBool) {
        if (iconWrap) {
          iconWrap.style.display = "none";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (aArr[i] === 1) {
          if (tick) {
            tick.style.display = "block";
          }

          if (cross) {
            cross.style.display = "none";
          }
        } else {
          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "block";
          }
        }
      }
    }
  },
  reset: function () {
    var self = this;
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
    self.showTickCross(false);
    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
