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
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
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

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

      var _case =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var _uAns = [];

      var _isReadOnly = [];

      var _corr = 0;

      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          console.log(a, inputBoxes[a].dataset.type);

          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            if (inputBoxes[a].dataset.type != "number") {
              _uAns[a] =
                _case == "yes"
                  ? inputBoxes[a].value
                  : inputBoxes[a].value.toLowerCase();
            } else {
              _uAns[a] = inputBoxes[a].value;
            }
          }
        }
      }

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      console.log(
        _uAns,
        _cAns,
        _isReadOnly.join("").split("1")[0].length == _cAns.length,
        i,
        elsQue[i].dataset.showIcon,
      );

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        /*
         * دعم أكثر من إجابة.
         * يعمل فقط على الأسئلة التي تحتوي:
         * allowMultipleAnswers: true
         */
        if (fDataObj.allowMultipleAnswers === true) {
          var alternateAnswers = Array.isArray(fDataObj.alternateanswer)
            ? fDataObj.alternateanswer
            : [];

          for (var cc = 0; cc < _cAns.length; cc++) {
            var userAnswer = normalizeFillInAnswer(_uAns[cc], _case);

            var acceptedAnswers = [normalizeFillInAnswer(_cAns[cc], _case)];

            /*
             * كل index داخل alternateanswer
             * يعود إلى الفراغ بنفس الـ index.
             */
            if (Array.isArray(alternateAnswers[cc])) {
              for (
                var altIndex = 0;
                altIndex < alternateAnswers[cc].length;
                altIndex++
              ) {
                acceptedAnswers.push(
                  normalizeFillInAnswer(alternateAnswers[cc][altIndex], _case),
                );
              }
            }

            if (acceptedAnswers.indexOf(userAnswer) !== -1) {
              _corr++;
            } else {
              _wrong++;
            }
          }
        } else {
          /*
           * التصحيح القديم بدون أي تغيير.
           */
          for (var cc = 0; cc < _cAns.length; cc++) {
            _cAns[cc] = _case == "yes" ? _cAns[cc] : _cAns[cc].toLowerCase();

            _cAns[cc] = _cAns[cc].replace(/\s/g, "");

            _uAns[cc] = _uAns[cc].replace(/\s/g, "");

            if (_cAns[cc] == _uAns[cc]) {
              _corr++;
            } else {
              _wrong++;
            }
          }
        }
      } else {
        _wrong++;
      }

      if (_corr == _uAns.length && _wrong == 0) {
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
      } else {
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

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    console.log(resultArr, numOfFillIns);

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

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      elsQue[i].querySelector(".icon_wrap").style.display = "none";

      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

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
          // لا يوجد صوت
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

/*
 * توحيد الإجابة قبل المقارنة:
 * - تجاهل حالة الأحرف عند strictcase: "no"
 * - تجاهل المسافات
 * - حذف المسافات من البداية والنهاية
 */
function normalizeFillInAnswer(value, strictCase) {
  if (value === undefined || value === null) {
    return "";
  }

  var normalizedValue = String(value).trim();

  if (strictCase !== "yes") {
    normalizedValue = normalizedValue.toLowerCase();
  }

  normalizedValue = normalizedValue.replace(/\s+/g, "");

  return normalizedValue;
}
