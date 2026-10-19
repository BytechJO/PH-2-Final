// ******************************************
// Look And Colour The Correct Size
// Activity
// ******************************************

window.LookAndColourCorrectSize = function (obj, dataObj) {
  var parentElement = null;

  if (obj && obj.jquery && obj.length > 0) {
    parentElement = obj[0];
  } else if (obj instanceof HTMLElement) {
    parentElement = obj;
  }

  if (!parentElement) {
    console.error("LookAndColourCorrectSize: activity element not found");

    return;
  }

  var optionsElements = parentElement.getElementsByClassName("options");

  this.settings = {
    activity_area:
      optionsElements.length > 0 ? optionsElements[0] : parentElement,

    data_obj: dataObj,

    parent_holder: parentElement,
  };

  this.init(this.settings);
};

LookAndColourCorrectSize.prototype = {
  init: function (settings) {
    this.ob = settings;
    this.listen(settings);
  },

  listen: function (settings) {
    var self = this;
    var activityArea = settings.activity_area;

    activityArea.addEventListener("click", function (event) {
      var optionButton = event.target.closest(".size_option");

      if (!optionButton) {
        return;
      }

      var questionRow = optionButton.closest(".size_question_row");

      if (!questionRow) {
        return;
      }

      questionRow.querySelectorAll(".size_option").forEach(function (button) {
        button.classList.remove("selected");

        button.setAttribute("aria-pressed", "false");
      });

      optionButton.classList.add("selected");

      optionButton.setAttribute("aria-pressed", "true");

      self.hideQuestionResult(questionRow);

      self.enableControls();
    });
  },

  validate: function () {
    var activityArea = this.ob.activity_area;

    var dataObject = this.ob.data_obj;

    var questionRows = activityArea.querySelectorAll(".size_question_row");

    var resultArray = [];

    questionRows.forEach(function (questionRow, questionIndex) {
      var questionData = dataObject.questions[questionIndex];

      var selectedOption = questionRow.querySelector(".size_option.selected");

      var selectedNumber = selectedOption
        ? parseInt(selectedOption.dataset.optionNumber, 10)
        : 0;

      var correctAnswer = parseInt(questionData.answer, 10);

      var isCorrect = selectedNumber === correctAnswer;

      resultArray.push(isCorrect ? 1 : 0);

      var tick = questionRow.querySelector(".size_tick");

      var cross = questionRow.querySelector(".size_cross");

      if (tick) {
        tick.style.display = isCorrect ? "block" : "none";
      }

      if (cross) {
        cross.style.display = isCorrect ? "none" : "block";
      }
    });

    var allCorrect =
      resultArray.length === dataObject.questions.length &&
      resultArray.indexOf(0) === -1;

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }

    return allCorrect;
  },

  reset: function () {
    var activityArea = this.ob.activity_area;

    activityArea
      .querySelectorAll(".size_option")
      .forEach(function (optionButton) {
        optionButton.classList.remove("selected");

        optionButton.setAttribute("aria-pressed", "false");
      });

    activityArea
      .querySelectorAll(".size_tick, .size_cross")
      .forEach(function (resultIcon) {
        resultIcon.style.display = "none";
      });

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  hideQuestionResult: function (questionRow) {
    questionRow
      .querySelectorAll(".size_tick, .size_cross")
      .forEach(function (resultIcon) {
        resultIcon.style.display = "none";
      });
  },

  enableControls: function () {
    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  },

  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
