//  ****************************************************
//  Read and choose the correct adjective
//  Inline MCQ activity
//  ****************************************************

window.MCQ = function (obj, dataObj) {
  var optionsArea = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsArea[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

MCQ.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  /* =====================================================
       Click events
    ===================================================== */

  listen: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    if (!activityArea) {
      return;
    }

    var picks = activityArea.querySelectorAll(".pick");

    for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
      picks[pickIndex].addEventListener("click", function () {
        var question = this.closest(".que");

        if (!question) {
          return;
        }

        self.clearQuestionSelection(question);

        this.classList.add("selected");

        this.setAttribute("aria-pressed", "true");

        self.hideQuestionFeedback(question);

        self.updateButtons();
      });
    }
  },

  /* =====================================================
       Remove selection from one question
    ===================================================== */

  clearQuestionSelection: function (questionElement) {
    var questionPicks = questionElement.querySelectorAll(".pick");

    for (var pickIndex = 0; pickIndex < questionPicks.length; pickIndex++) {
      questionPicks[pickIndex].classList.remove("selected");

      questionPicks[pickIndex].setAttribute("aria-pressed", "false");
    }
  },

  /* =====================================================
       Get choice data from content
    ===================================================== */

  getChoiceQuestions: function () {
    var content = this.ob.data_obj.content || [];

    var choices = [];

    for (var contentIndex = 0; contentIndex < content.length; contentIndex++) {
      if (content[contentIndex].type == "choice") {
        choices.push(content[contentIndex]);
      }
    }

    return choices;
  },

  /* =====================================================
       Validate
    ===================================================== */

  validate: function () {
    var activityArea = this.ob.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var choiceData = this.getChoiceQuestions();

    var allCorrect = true;

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var questionElement = questions[questionIndex];

      var selected = questionElement.querySelector(".pick.selected");

      var selectedAnswer = 0;

      if (selected) {
        selectedAnswer = parseInt(selected.getAttribute("data-option"), 10);
      }

      var correctAnswer = parseInt(choiceData[questionIndex].answer, 10);

      var isCorrect = selectedAnswer === correctAnswer;

      this.showQuestionFeedback(questionElement, isCorrect);

      if (!isCorrect) {
        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }

    return allCorrect;
  },

  /* =====================================================
       Feedback
    ===================================================== */

  showQuestionFeedback: function (questionElement, isCorrect) {
    var iconWrap = questionElement.querySelector(".icon_wrap");

    var tick = questionElement.querySelector(".tick");

    var cross = questionElement.querySelector(".cross");

    if (iconWrap) {
      iconWrap.style.display = "inline-flex";
    }

    if (tick) {
      tick.style.display = isCorrect ? "inline-flex" : "none";
    }

    if (cross) {
      cross.style.display = isCorrect ? "none" : "inline-flex";
    }
  },

  hideQuestionFeedback: function (questionElement) {
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

  hideAllFeedback: function () {
    var questions = this.ob.activity_area.querySelectorAll(".que");

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      this.hideQuestionFeedback(questions[questionIndex]);
    }
  },

  /* =====================================================
       Buttons
    ===================================================== */

  updateButtons: function () {
    var selected = this.ob.activity_area.querySelectorAll(".pick.selected");

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (selected.length > 0) {
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

  /* =====================================================
       Reset
    ===================================================== */

  reset: function () {
    var picks = this.ob.activity_area.querySelectorAll(".pick");

    for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
      picks[pickIndex].classList.remove("selected");

      picks[pickIndex].setAttribute("aria-pressed", "false");
    }

    this.hideAllFeedback();

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  /* =====================================================
       Initial settings
    ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
