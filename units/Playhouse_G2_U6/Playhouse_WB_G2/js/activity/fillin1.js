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
    var allCorrect = false;
    var resultArr = [];

    // =========================================================
    // Helper: normalize answer
    // =========================================================
    function normalizeAnswer(value, strictCase) {
      value = value == null ? "" : String(value);

      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      return value
        .trim()
        .replace(/\s+/g, "") // ignore spaces
        .replace(/\.$/, ""); // ignore final dot
    }

    // =========================================================
    // Helper: convert answer / alternateanswer to arrays
    // =========================================================
    function prepareAnswerSet(answer) {
      if (answer == null) return [];

      if (Array.isArray(answer)) {
        return answer;
      }

      return [answer];
    }

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      elsQue[i].querySelector(".tick").style.display = "none";
      elsQue[i].querySelector(".cross").style.display = "none";

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      // =========================================================
      // MAIN ANSWER
      // =========================================================
      var mainAnswer = prepareAnswerSet(fDataObj.answer);

      // =========================================================
      // ALTERNATE ANSWERS
      // =========================================================
      var alternateAnswers = [];

      if (
        fDataObj.alternateanswer != undefined &&
        fDataObj.alternateanswer != null &&
        Array.isArray(fDataObj.alternateanswer)
      ) {
        for (var alt = 0; alt < fDataObj.alternateanswer.length; alt++) {
          var altAnswer = fDataObj.alternateanswer[alt];

          // Ignore empty arrays []
          if (Array.isArray(altAnswer)) {
            if (altAnswer.length > 0) {
              alternateAnswers.push(altAnswer);
            }
          }
          // Also allow alternateanswer: ["answer 1", "answer 2"]
          else if (altAnswer != null && String(altAnswer).trim() !== "") {
            alternateAnswers.push([altAnswer]);
          }
        }
      }

      // All valid answer possibilities
      var allPossibleAnswers = [];

      if (mainAnswer.length > 0) {
        allPossibleAnswers.push(mainAnswer);
      }

      for (var aa = 0; aa < alternateAnswers.length; aa++) {
        allPossibleAnswers.push(alternateAnswers[aa]);
      }

      var _uAns = [];
      var _isReadOnly = [];

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // =========================================================
      // GET USER ANSWER
      // =========================================================
      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            _uAns[a] = inputBoxes[a].value;
          } else {
            _uAns[a] = "";
          }
        }
      }

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == mainAnswer.length;

      // =========================================================
      // CHECK MAIN + ALTERNATE ANSWERS
      // =========================================================
      var isCorrect = false;

      for (var p = 0; p < allPossibleAnswers.length; p++) {
        var possibleAnswer = allPossibleAnswers[p];

        if (possibleAnswer.length != _uAns.length) {
          continue;
        }

        var thisAnswerCorrect = true;

        for (var cc = 0; cc < possibleAnswer.length; cc++) {
          var correctValue = normalizeAnswer(possibleAnswer[cc], _case);

          var userValue = normalizeAnswer(_uAns[cc], _case);

          if (correctValue !== userValue) {
            thisAnswerCorrect = false;
            break;
          }
        }

        if (thisAnswerCorrect) {
          isCorrect = true;
          break;
        }
      }

      // =========================================================
      // CORRECT
      // =========================================================
      if (isCorrect) {
        resultArr[i] = 1;

        elsQue[i].querySelector(".tick").style.display = "block";

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      }

      // =========================================================
      // WRONG
      // =========================================================
      else {
        resultArr[i] = 0;

        elsQue[i].querySelector(".cross").style.display = "block";

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      // =========================================================
      // ICON
      // =========================================================
      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    // =========================================================
    // FINAL RESULT
    // =========================================================
    allCorrect = resultArr.join("").split("0")[0].length == numOfFillIns;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
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
