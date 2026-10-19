// ******************************************
// Click Commas Only
// ******************************************

window.ClickCommasOnly = function (obj, dataObj) {
  var activityOptions = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: activityOptions[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ClickCommasOnly.prototype = {
  /*
  =========================================================
  Initialize
  =========================================================
  */

  init: function (ob) {
    this.ob = ob;

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

    var commaButtons = ob.activity_area.querySelectorAll(".comma_click_space");

    for (
      var buttonIndex = 0;
      buttonIndex < commaButtons.length;
      buttonIndex++
    ) {
      commaButtons[buttonIndex].addEventListener("click", function () {
        self.toggleComma(this);
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

    var existingIndex = this.selectedCommas[questionId].indexOf(afterIndex);

    if (existingIndex !== -1) {
      this.selectedCommas[questionId].splice(existingIndex, 1);

      commaButton.classList.remove("selected");
    } else {
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

      var userAnswers = [];

      if (this.selectedCommas.hasOwnProperty(questionId)) {
        userAnswers = this.selectedCommas[questionId].slice();
      }

      var correctAnswers = question.commaAfter.slice();

      userAnswers.sort(function (a, b) {
        return a - b;
      });

      correctAnswers.sort(function (a, b) {
        return a - b;
      });

      var isCorrect = this.compareArrays(userAnswers, correctAnswers);

      var questionElement = this.ob.activity_area.querySelector(
        ".click_commas_only_question" +
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

      if (isCorrect) {
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

    for (var index = 0; index < firstArray.length; index++) {
      if (parseInt(firstArray[index]) !== parseInt(secondArray[index])) {
        return false;
      }
    }

    return true;
  },

  /*
  =========================================================
  Hide one result
  =========================================================
  */

  hideQuestionResult: function (questionId) {
    var questionElement = this.ob.activity_area.querySelector(
      ".click_commas_only_question" + '[data-question-id="' + questionId + '"]',
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
  Enable controls
  =========================================================
  */

  updateButtons: function () {
    var hasAnswer = false;

    for (var questionId in this.selectedCommas) {
      if (
        this.selectedCommas.hasOwnProperty(questionId) &&
        this.selectedCommas[questionId].length > 0
      ) {
        hasAnswer = true;

        break;
      }
    }

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

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

    var commaButtons =
      this.ob.activity_area.querySelectorAll(".comma_click_space");

    for (
      var buttonIndex = 0;
      buttonIndex < commaButtons.length;
      buttonIndex++
    ) {
      commaButtons[buttonIndex].classList.remove("selected");
    }

    var questions = this.ob.activity_area.querySelectorAll(
      ".click_commas_only_question",
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
