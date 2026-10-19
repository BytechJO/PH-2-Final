//  ***************************************************************
//  Choose Circle or Underline, then apply it to a word
//  ***************************************************************

window.CircleAdverbUnderlineVerb = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.selectedTool = "circle";

  this.init(this.settings);
};

CircleAdverbUnderlineVerb.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("CircleAdverbUnderlineVerb: activity area not found.");

      return;
    }

    this.cacheElements();

    this.listen();
  },

  /* =====================================================
     Cache elements
  ===================================================== */

  cacheElements: function () {
    var area = this.ob.activity_area;

    this.toolButtons = area.querySelectorAll(".marking_tool");

    this.questionCards = area.querySelectorAll(".circle_adverb_question");

    this.words = area.querySelectorAll(".selectable_word");
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.toolButtons, function (button) {
      button.addEventListener("click", function () {
        self.selectTool(this);
      });
    });

    Array.prototype.forEach.call(this.words, function (word) {
      word.addEventListener("click", function () {
        self.markWord(this);
      });

      word.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();

          self.markWord(this);
        }
      });

      word.setAttribute("tabindex", "0");
    });
  },

  /* =====================================================
     Select tool
  ===================================================== */

  selectTool: function (button) {
    var tool = button.getAttribute("data-tool");

    this.selectedTool = tool;

    Array.prototype.forEach.call(this.toolButtons, function (toolButton) {
      toolButton.classList.remove("selected");
    });

    button.classList.add("selected");
  },

  /* =====================================================
     Mark word
  ===================================================== */

  markWord: function (word) {
    if (!this.selectedTool) {
      return;
    }

    var currentMark = word.getAttribute("data-selected-mark") || "none";

    word.classList.remove("marked_circle", "marked_underline");

    if (currentMark === this.selectedTool) {
      word.setAttribute("data-selected-mark", "none");
    } else {
      word.setAttribute("data-selected-mark", this.selectedTool);

      if (this.selectedTool === "circle") {
        word.classList.add("marked_circle");
      } else {
        word.classList.add("marked_underline");
      }
    }

    var questionCard = word.closest(".circle_adverb_question");

    this.clearQuestionResult(questionCard);

    this.enableControls();
  },

  /* =====================================================
     Enable controls
  ===================================================== */

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  /* =====================================================
     Clear one question result
  ===================================================== */

  clearQuestionResult: function (questionCard) {
    if (!questionCard) {
      return;
    }

    questionCard.classList.remove("correct", "wrong");

    var resultWrap = questionCard.querySelector(".question_result_wrap");

    var tick = questionCard.querySelector(".question_tick");

    var cross = questionCard.querySelector(".question_cross");

    if (resultWrap) {
      resultWrap.style.display = "none";
    }

    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "none";
    }
  },

  /* =====================================================
     Clear all results
  ===================================================== */

  clearAllResults: function () {
    var self = this;

    Array.prototype.forEach.call(this.questionCards, function (questionCard) {
      self.clearQuestionResult(questionCard);
    });
  },

  /* =====================================================
     Validate
  ===================================================== */

  validate: function () {
    var self = this;

    var allCorrect = true;

    this.clearAllResults();

    Array.prototype.forEach.call(this.questionCards, function (questionCard) {
      var questionIndex = parseInt(
        questionCard.getAttribute("data-question-index"),
      );

      var questionData = self.ob.data_obj.questions[questionIndex];

      var wordElements = questionCard.querySelectorAll(".selectable_word");

      var questionCorrect = true;

      Array.prototype.forEach.call(
        wordElements,
        function (wordElement, wordIndex) {
          var expectedMark = questionData.words[wordIndex].answer;

          var selectedMark =
            wordElement.getAttribute("data-selected-mark") || "none";

          wordElement.classList.remove("word_correct", "word_wrong");

          if (selectedMark === expectedMark) {
            wordElement.classList.add("word_correct");
          } else {
            wordElement.classList.add("word_wrong");

            questionCorrect = false;

            allCorrect = false;
          }
        },
      );

      var resultWrap = questionCard.querySelector(".question_result_wrap");

      var tick = questionCard.querySelector(".question_tick");

      var cross = questionCard.querySelector(".question_cross");

      if (resultWrap) {
        resultWrap.style.display = "block";
      }

      if (questionCorrect) {
        questionCard.classList.add("correct");

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        questionCard.classList.add("wrong");

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    });

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");
    }
  },

  /* =====================================================
     Reset
  ===================================================== */

  reset: function () {
    var self = this;

    this.selectedTool = "circle";

    Array.prototype.forEach.call(this.toolButtons, function (button) {
      button.classList.remove("selected");

      if (button.getAttribute("data-tool") === "circle") {
        button.classList.add("selected");
      }
    });

    Array.prototype.forEach.call(this.words, function (word) {
      word.setAttribute("data-selected-mark", "none");

      word.classList.remove(
        "marked_circle",
        "marked_underline",
        "word_correct",
        "word_wrong",
      );
    });

    Array.prototype.forEach.call(this.questionCards, function (questionCard) {
      self.clearQuestionResult(questionCard);
    });

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  /* =====================================================
     Initial settings
  ===================================================== */

  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
