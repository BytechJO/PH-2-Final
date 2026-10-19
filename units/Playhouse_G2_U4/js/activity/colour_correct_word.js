// ******************************************
// Colour Correct Word Activity
// ******************************************

window.ColourCorrectWord = function (
  obj,
  dataObj,
) {
  var options =
    obj[0].getElementsByClassName(
      "options",
    );

  this.settings = {
    activity_area: options[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.selectedColor =
    dataObj.selectedColor ||
    "#f6a6cf";

  this.init(this.settings);
};

ColourCorrectWord.prototype = {
  /* =========================================================
     Init
     ========================================================= */

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  /* =========================================================
     Events
     ========================================================= */

  listen: function () {
    var self = this;

    var activityArea =
      this.ob.activity_area;

    var questions =
      activityArea.querySelectorAll(
        ".colour_correct_word_question",
      );

    for (
      var i = 0;
      i < questions.length;
      i++
    ) {
      var options =
        questions[
          i
        ].querySelectorAll(
          ".colour_correct_word_option",
        );

      for (
        var j = 0;
        j < options.length;
        j++
      ) {
        options[j].addEventListener(
          "click",
          function (event) {
            event.preventDefault();

            var question =
              this.closest(
                ".colour_correct_word_question",
              );

            var questionOptions =
              question.querySelectorAll(
                ".colour_correct_word_option",
              );

            /*
              إلغاء اختيار باقي الكلمات
              داخل نفس السؤال.
            */

            for (
              var x = 0;
              x <
              questionOptions.length;
              x++
            ) {
              questionOptions[
                x
              ].classList.remove(
                "selected",
                "answer_correct",
                "answer_wrong",
              );

              questionOptions[
                x
              ].style.backgroundColor =
                "";
            }

            /*
              اختيار الكلمة الحالية.
            */

            this.classList.add(
              "selected",
            );

            this.style.backgroundColor =
              self.selectedColor;

            /*
              إخفاء نتيجة التصحيح القديمة.
            */

            self.hideQuestionFeedback(
              question,
            );

            self.enableFooterButtons();
          },
        );
      }
    }
  },

  /* =========================================================
     Validate
     يظهر فقط صح أو خطأ بجانب السؤال
     ولا يكشف الإجابة الصحيحة
     ========================================================= */

  validate: function () {
    var activityArea =
      this.ob.activity_area;

    var questions =
      activityArea.querySelectorAll(
        ".colour_correct_word_question",
      );

    var allCorrect = true;

    for (
      var i = 0;
      i < questions.length;
      i++
    ) {
      var question =
        questions[i];

      var correctAnswer =
        question.dataset.answer || "";

      var selectedOption =
        question.querySelector(
          ".colour_correct_word_option.selected",
        );

      var tick =
        question.querySelector(
          ".tick",
        );

      var cross =
        question.querySelector(
          ".cross",
        );

      var iconWrap =
        question.querySelector(
          ".icon_wrap",
        );

      var questionCorrect = false;

      if (
        selectedOption &&
        selectedOption.dataset.value ===
          correctAnswer
      ) {
        questionCorrect = true;
      }

      /*
        لا نلوّن أخضر أو أحمر.
        نخلي لون اختيار الطالب كما هو.
      */

      if (iconWrap) {
        iconWrap.style.display =
          "block";
      }

      if (questionCorrect) {
        if (tick) {
          tick.style.display =
            "block";
        }

        if (cross) {
          cross.style.display =
            "none";
        }
      } else {
        if (tick) {
          tick.style.display =
            "none";
        }

        if (cross) {
          cross.style.display =
            "block";
        }

        allCorrect = false;
      }
    }

    showFeedback(
      true,
      allCorrect,
    );
  },

  /* =========================================================
     Reset
     ========================================================= */

  reset: function () {
    var activityArea =
      this.ob.activity_area;

    var options =
      activityArea.querySelectorAll(
        ".colour_correct_word_option",
      );

    for (
      var i = 0;
      i < options.length;
      i++
    ) {
      options[i].classList.remove(
        "selected",
        "answer_correct",
        "answer_wrong",
      );

      options[
        i
      ].style.backgroundColor = "";
    }

    this.hideAllFeedback();

    var checkButton =
      document.getElementsByClassName(
        "checkBtn",
      )[0];

    var resetButton =
      document.getElementsByClassName(
        "resetBtn",
      )[0];

    if (checkButton) {
      checkButton.classList.add(
        "disabled",
      );
    }

    if (resetButton) {
      resetButton.classList.add(
        "disabled",
      );
    }
  },

  /* =========================================================
     Hide one question feedback
     ========================================================= */

  hideQuestionFeedback: function (
    question,
  ) {
    var iconWrap =
      question.querySelector(
        ".icon_wrap",
      );

    var tick =
      question.querySelector(
        ".tick",
      );

    var cross =
      question.querySelector(
        ".cross",
      );

    if (iconWrap) {
      iconWrap.style.display =
        "none";
    }

    if (tick) {
      tick.style.display =
        "none";
    }

    if (cross) {
      cross.style.display =
        "none";
    }
  },

  /* =========================================================
     Hide all feedback
     ========================================================= */

  hideAllFeedback: function () {
    var activityArea =
      this.ob.activity_area;

    var iconWraps =
      activityArea.querySelectorAll(
        ".icon_wrap",
      );

    var ticks =
      activityArea.querySelectorAll(
        ".tick",
      );

    var crosses =
      activityArea.querySelectorAll(
        ".cross",
      );

    for (
      var i = 0;
      i < iconWraps.length;
      i++
    ) {
      iconWraps[
        i
      ].style.display = "none";
    }

    for (
      var j = 0;
      j < ticks.length;
      j++
    ) {
      ticks[
        j
      ].style.display = "none";
    }

    for (
      var x = 0;
      x < crosses.length;
      x++
    ) {
      crosses[
        x
      ].style.display = "none";
    }
  },

  /* =========================================================
     Enable footer buttons
     ========================================================= */

  enableFooterButtons: function () {
    var checkButton =
      document.getElementsByClassName(
        "checkBtn",
      )[0];

    var resetButton =
      document.getElementsByClassName(
        "resetBtn",
      )[0];

    if (checkButton) {
      checkButton.classList.remove(
        "disabled",
      );
    }

    if (resetButton) {
      resetButton.classList.remove(
        "disabled",
      );
    }
  },

  /* =========================================================
     Initial settings
     ========================================================= */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};