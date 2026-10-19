//  ****************************************************
//  Listen to the dinosaurs - Colour the correct boxes
//  Custom multiple-selection MCQ activity
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
       User interactions
    ===================================================== */

  listen: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    if (!activityArea) {
      return;
    }

    var picks = activityArea.querySelectorAll(".pick");

    for (var i = 0; i < picks.length; i++) {
      picks[i].addEventListener("click", function () {
        var isSelected = this.classList.contains("selected");

        self.hideQuestionFeedback(this.closest(".que"));

        if (isSelected) {
          this.classList.remove("selected");
          this.setAttribute("aria-pressed", "false");
        } else {
          this.classList.add("selected");
          this.setAttribute("aria-pressed", "true");
        }

        self.updateButtons();
      });
    }
  },

  /* =====================================================
       Check answers
    ===================================================== */

  validate: function () {
    var self = this;
    var ob = this.ob;
    var activityArea = ob.activity_area;
    var questions = activityArea.querySelectorAll(".que");

    var resultArr = [];
    var allCorrect = true;

    for (var i = 0; i < questions.length; i++) {
      var questionElement = questions[i];
      var questionIndex = parseInt(
        questionElement.getAttribute("data-qno"),
        10,
      );

      var questionData = ob.data_obj.questions[questionIndex - 1];
      var correctAnswers = self.normaliseAnswer(questionData.answer);

      var selectedElements = questionElement.querySelectorAll(".pick.selected");

      var selectedAnswers = [];

      for (var s = 0; s < selectedElements.length; s++) {
        selectedAnswers.push(
          parseInt(selectedElements[s].getAttribute("data-option"), 10),
        );
      }

      selectedAnswers.sort(function (a, b) {
        return a - b;
      });

      correctAnswers.sort(function (a, b) {
        return a - b;
      });

      var isCorrect = self.arraysAreEqual(selectedAnswers, correctAnswers);

      resultArr.push(isCorrect ? 1 : 0);

      self.showQuestionFeedback(questionElement, isCorrect);

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
       Convert answer to number array
    ===================================================== */

  normaliseAnswer: function (answer) {
    if (Array.isArray(answer)) {
      return answer.map(function (item) {
        return parseInt(item, 10);
      });
    }

    if (typeof answer === "number") {
      return [answer];
    }

    if (typeof answer === "string") {
      return answer
        .split(",")
        .map(function (item) {
          return parseInt(item.trim(), 10);
        })
        .filter(function (item) {
          return !isNaN(item);
        });
    }

    return [];
  },

  /* =====================================================
       Compare selected and correct answer arrays
    ===================================================== */

  arraysAreEqual: function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
      return false;
    }

    for (var i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }

    return true;
  },

  /* =====================================================
       Feedback icons
    ===================================================== */

  showQuestionFeedback: function (questionElement, isCorrect) {
    if (!questionElement) {
      return;
    }

    var iconWrap = questionElement.querySelector(".icon_wrap");

    var tick = questionElement.querySelector(".tick");

    var cross = questionElement.querySelector(".cross");

    if (iconWrap) {
      iconWrap.style.display = "flex";
    }

    if (tick) {
      tick.style.display = isCorrect ? "block" : "none";
    }

    if (cross) {
      cross.style.display = isCorrect ? "none" : "block";
    }
  },

  hideQuestionFeedback: function (questionElement) {
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

  hideAllFeedback: function () {
    var activityArea = this.ob.activity_area;
    var questions = activityArea.querySelectorAll(".que");

    for (var i = 0; i < questions.length; i++) {
      this.hideQuestionFeedback(questions[i]);
    }
  },

  /* =====================================================
       Enable / disable toolbar buttons
    ===================================================== */

  updateButtons: function () {
    var activityArea = this.ob.activity_area;
    var selected = activityArea.querySelectorAll(".pick.selected");

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
       Reset activity
    ===================================================== */

  reset: function () {
    var activityArea = this.ob.activity_area;
    var picks = activityArea.querySelectorAll(".pick");

    for (var i = 0; i < picks.length; i++) {
      picks[i].classList.remove("selected");
      picks[i].setAttribute("aria-pressed", "false");
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
       Initial settings called by activities.js
    ===================================================== */

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
