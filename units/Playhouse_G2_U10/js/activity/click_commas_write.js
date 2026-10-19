// ******************************************
// Click Commas and Write
// ******************************************

window.ClickCommasWrite = function (obj, dataObj) {
  var activityOptions = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: activityOptions[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ClickCommasWrite.prototype = {
  /*
  =========================================================
  Initialize
  =========================================================
  */

  init: function (ob) {
    this.ob = ob;

    /*
      selectedCommas:

      {
        1: [1],
        2: [1, 7, 8],
        3: [5, 6]
      }
    */

    this.selectedCommas = {};

    this.listen(ob);
  },

  /*
  =========================================================
  Events
  =========================================================
  */

  listen: function (ob) {
    var self = this;

    var activityArea = ob.activity_area;

    /*
    =====================================================
    Comma click
    =====================================================
    */

    var commaSpaces = activityArea.querySelectorAll(".comma_click_space");

    for (var commaIndex = 0; commaIndex < commaSpaces.length; commaIndex++) {
      commaSpaces[commaIndex].addEventListener("click", function () {
        self.toggleComma(this);
      });
    }

    /*
    =====================================================
    Textarea input
    =====================================================
    */

    var textareas = activityArea.querySelectorAll(".click_commas_textarea");

    for (
      var textareaIndex = 0;
      textareaIndex < textareas.length;
      textareaIndex++
    ) {
      textareas[textareaIndex].addEventListener("input", function () {
        var questionId = parseInt(this.dataset.questionId);

        self.hideQuestionResult(questionId);

        self.updateButtons();
      });
    }
  },

  /*
  =========================================================
  Toggle comma
  =========================================================
  */

  toggleComma: function (commaButton) {
    var questionId = parseInt(commaButton.dataset.questionId);

    var afterIndex = parseInt(commaButton.dataset.afterIndex);

    if (!this.selectedCommas.hasOwnProperty(questionId)) {
      this.selectedCommas[questionId] = [];
    }

    var selectedIndex = this.selectedCommas[questionId].indexOf(afterIndex);

    /*
      إذا موجودة نشيلها
    */

    if (selectedIndex !== -1) {
      this.selectedCommas[questionId].splice(selectedIndex, 1);

      commaButton.classList.remove("selected");
    } else {
      /*
        إذا مش موجودة نضيفها
      */

      this.selectedCommas[questionId].push(afterIndex);

      commaButton.classList.add("selected");
    }

    this.hideQuestionResult(questionId);

    this.updateButtons();
  },

  /*
  =========================================================
  Validate
  =========================================================
  */

  validate: function () {
    var questions = this.ob.data_obj.questions;

    var resultArray = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var question = questions[questionIndex];

      var questionId = parseInt(question.id);

      /*
      =====================================================
      Validate selected comma positions
      =====================================================
      */

      var userCommaPositions = [];

      if (this.selectedCommas.hasOwnProperty(questionId)) {
        userCommaPositions = this.selectedCommas[questionId].slice();
      }

      var correctCommaPositions = question.commaAfter.slice();

      userCommaPositions.sort(function (a, b) {
        return a - b;
      });

      correctCommaPositions.sort(function (a, b) {
        return a - b;
      });

      var commasCorrect = this.compareArrays(
        userCommaPositions,
        correctCommaPositions,
      );

      /*
      =====================================================
      Validate written sentence
      =====================================================
      */

      var textarea = this.ob.activity_area.querySelector(
        ".click_commas_textarea" + '[data-question-id="' + questionId + '"]',
      );

      var userWrittenAnswer = textarea ? textarea.value : "";

      var normalizedUserAnswer = this.normalizeSentence(userWrittenAnswer);

      var normalizedCorrectAnswer = this.normalizeSentence(
        question.writeAnswer,
      );

      var writingCorrect = normalizedUserAnswer === normalizedCorrectAnswer;

      /*
      =====================================================
      Show result
      =====================================================
      */

      var questionElement = this.ob.activity_area.querySelector(
        ".click_commas_write_question" +
          '[data-question-id="' +
          questionId +
          '"]',
      );

      var iconWrap = questionElement.querySelector(".icon_wrap");

      var tick = questionElement.querySelector(".tick");

      var cross = questionElement.querySelector(".cross");

      iconWrap.style.display = "block";

      tick.style.display = "none";

      cross.style.display = "none";

      /*
        لازم الفواصل والكتابة يكونوا صح
      */

      if (commasCorrect && writingCorrect) {
        tick.style.display = "block";

        resultArray[questionIndex] = 1;
      } else {
        cross.style.display = "block";

        resultArray[questionIndex] = 0;
      }
    }

    var allCorrect = resultArray.indexOf(0) === -1;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /*
  =========================================================
  Compare arrays
  =========================================================
  */

  compareArrays: function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
      return false;
    }

    for (var arrayIndex = 0; arrayIndex < firstArray.length; arrayIndex++) {
      if (
        parseInt(firstArray[arrayIndex]) !== parseInt(secondArray[arrayIndex])
      ) {
        return false;
      }
    }

    return true;
  },

  /*
  =========================================================
  Normalize written sentence
  =========================================================
  */

  normalizeSentence: function (sentence) {
    if (sentence == undefined || sentence == null) {
      return "";
    }

    return (
      sentence
        .toString()

        /*
        نحذف المسافات قبل الفواصل والنقطة
      */

        .replace(/\s+([,.!?])/g, "$1")

        /*
        نوحد المسافة بعد الفاصلة
      */

        .replace(/,\s*/g, ", ")

        /*
        نوحد المسافات العادية
      */

        .replace(/\s+/g, " ")

        .trim()

        .toLowerCase()
    );
  },

  /*
  =========================================================
  Hide question result
  =========================================================
  */

  hideQuestionResult: function (questionId) {
    var questionElement = this.ob.activity_area.querySelector(
      ".click_commas_write_question" +
        '[data-question-id="' +
        questionId +
        '"]',
    );

    if (!questionElement) {
      return;
    }

    var iconWrap = questionElement.querySelector(".icon_wrap");

    var tick = questionElement.querySelector(".tick");

    var cross = questionElement.querySelector(".cross");

    if (iconWrap) {
      iconWrap.style.display = "none";
    }

    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "none";
    }
  },

  /*
  =========================================================
  Check if activity has an answer
  =========================================================
  */

  hasAnyAnswer: function () {
    /*
      Check comma selections
    */

    for (var questionId in this.selectedCommas) {
      if (
        this.selectedCommas.hasOwnProperty(questionId) &&
        this.selectedCommas[questionId].length > 0
      ) {
        return true;
      }
    }

    /*
      Check textareas
    */

    var textareas = this.ob.activity_area.querySelectorAll(
      ".click_commas_textarea",
    );

    for (
      var textareaIndex = 0;
      textareaIndex < textareas.length;
      textareaIndex++
    ) {
      if (textareas[textareaIndex].value.trim() !== "") {
        return true;
      }
    }

    return false;
  },

  /*
  =========================================================
  Enable or disable buttons
  =========================================================
  */

  updateButtons: function () {
    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    var hasAnswer = this.hasAnyAnswer();

    if (hasAnswer) {
      if (checkButton) {
        checkButton.classList.remove("disabled");
      }

      if (resetButton) {
        resetButton.classList.remove("disabled");
      }
    } else {
      if (checkButton) {
        checkButton.classList.add("disabled");
      }

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /*
  =========================================================
  Reset
  =========================================================
  */

  reset: function () {
    this.selectedCommas = {};

    /*
      Remove selected commas
    */

    var commaSpaces =
      this.ob.activity_area.querySelectorAll(".comma_click_space");

    for (var commaIndex = 0; commaIndex < commaSpaces.length; commaIndex++) {
      commaSpaces[commaIndex].classList.remove("selected");
    }

    /*
      Clear textareas
    */

    var textareas = this.ob.activity_area.querySelectorAll(
      ".click_commas_textarea",
    );

    for (
      var textareaIndex = 0;
      textareaIndex < textareas.length;
      textareaIndex++
    ) {
      textareas[textareaIndex].value = "";
    }

    /*
      Hide results
    */

    var questions = this.ob.activity_area.querySelectorAll(
      ".click_commas_write_question",
    );

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var iconWrap = questions[questionIndex].querySelector(".icon_wrap");

      var tick = questions[questionIndex].querySelector(".tick");

      var cross = questions[questionIndex].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    this.updateButtons();
  },

  /*
  =========================================================
  Initial settings
  =========================================================
  */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
