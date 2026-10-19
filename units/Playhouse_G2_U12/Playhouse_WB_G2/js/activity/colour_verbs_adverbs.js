//  ***************************************************************
//  Colour verbs red and adverbs blue
//  ***************************************************************

window.ColourVerbsAdverbs = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.selectedColour = "red";

  this.init(this.settings);
};

ColourVerbsAdverbs.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("ColourVerbsAdverbs: activity area not found.");

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

    this.colourButtons = area.querySelectorAll(".colour_tool");

    this.questionCards = area.querySelectorAll(".colour_verbs_question");

    this.words = area.querySelectorAll(".colour_selectable_word");
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.colourButtons, function (button) {
      button.addEventListener("click", function () {
        self.selectColour(this);
      });
    });

    Array.prototype.forEach.call(this.words, function (word) {
      word.addEventListener("click", function () {
        self.colourWord(this);
      });

      word.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();

          self.colourWord(this);
        }
      });
    });
  },

  /* =====================================================
     Select colour
  ===================================================== */

  selectColour: function (button) {
    var colour = button.getAttribute("data-colour");

    this.selectedColour = colour;

    Array.prototype.forEach.call(this.colourButtons, function (colourButton) {
      colourButton.classList.remove("selected");
    });

    button.classList.add("selected");
  },

  /* =====================================================
     Colour word
  ===================================================== */

  colourWord: function (word) {
    if (!this.selectedColour) {
      return;
    }

    var currentColour = word.getAttribute("data-selected-colour") || "none";

    word.classList.remove(
      "coloured_red",
      "coloured_blue",
      "word_correct",
      "word_wrong",
    );

    if (currentColour === this.selectedColour) {
      word.setAttribute("data-selected-colour", "none");
    } else {
      word.setAttribute("data-selected-colour", this.selectedColour);

      if (this.selectedColour === "red") {
        word.classList.add("coloured_red");
      } else {
        word.classList.add("coloured_blue");
      }
    }

    var questionCard = word.closest(".colour_verbs_question");

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

    var resultWrap = questionCard.querySelector(".colour_question_result_wrap");

    var tick = questionCard.querySelector(".colour_question_tick");

    var cross = questionCard.querySelector(".colour_question_cross");

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

    Array.prototype.forEach.call(this.words, function (word) {
      word.classList.remove("word_correct", "word_wrong");
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

      var wordElements = questionCard.querySelectorAll(
        ".colour_selectable_word",
      );

      var questionCorrect = true;

      Array.prototype.forEach.call(
        wordElements,
        function (wordElement, wordIndex) {
          var expectedColour = questionData.words[wordIndex].answer;

          var selectedColour =
            wordElement.getAttribute("data-selected-colour") || "none";

          wordElement.classList.remove("word_correct", "word_wrong");

          if (selectedColour === expectedColour) {
            wordElement.classList.add("word_correct");
          } else {
            wordElement.classList.add("word_wrong");

            questionCorrect = false;

            allCorrect = false;
          }
        },
      );

      var resultWrap = questionCard.querySelector(
        ".colour_question_result_wrap",
      );

      var tick = questionCard.querySelector(".colour_question_tick");

      var cross = questionCard.querySelector(".colour_question_cross");

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

    this.selectedColour = "red";

    Array.prototype.forEach.call(this.colourButtons, function (button) {
      button.classList.remove("selected");

      if (button.getAttribute("data-colour") === "red") {
        button.classList.add("selected");
      }
    });

    Array.prototype.forEach.call(this.words, function (word) {
      word.setAttribute("data-selected-colour", "none");

      word.classList.remove(
        "coloured_red",
        "coloured_blue",
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
