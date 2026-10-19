//  ***************************************************************
//  Fill missing letters and tick the correct picture
//  ***************************************************************

window.FillLettersTickPicture = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.selectedPictures = {};

  this.init(this.settings);
};

FillLettersTickPicture.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("FillLettersTickPicture: activity area not found.");

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

    this.questionCards = area.querySelectorAll(".fill_letters_question");

    this.letterInputs = area.querySelectorAll(".missing_letter_input");

    this.pictureCards = area.querySelectorAll(".tick_picture_card");
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.letterInputs, function (input) {
      input.addEventListener("input", function (event) {
        self.handleLetterInput(this, event);
      });

      input.addEventListener("keydown", function (event) {
        self.handleLetterKeydown(this, event);
      });

      input.addEventListener("paste", function (event) {
        self.handleLetterPaste(this, event);
      });
    });

    Array.prototype.forEach.call(this.pictureCards, function (card) {
      card.addEventListener("click", function () {
        self.selectPicture(this);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();

          self.selectPicture(this);
        }
      });
    });
  },

  /* =====================================================
     Letter input
  ===================================================== */

  handleLetterInput: function (input, event) {
    input.value = input.value
      .replace(/[^a-zA-Z]/g, "")
      .slice(0, 1)
      .toLowerCase();

    var questionCard = input.closest(".fill_letters_question");

    this.clearQuestionResult(questionCard);

    if (input.value !== "") {
      var nextInput = input.nextElementSibling;

      if (nextInput && nextInput.classList.contains("missing_letter_input")) {
        nextInput.focus();
        nextInput.select();
      }
    }

    this.enableControls();
  },

  /* =====================================================
     Backspace and arrows
  ===================================================== */

  handleLetterKeydown: function (input, event) {
    var previousInput = input.previousElementSibling;

    var nextInput = input.nextElementSibling;

    if (
      event.key === "Backspace" &&
      input.value === "" &&
      previousInput &&
      previousInput.classList.contains("missing_letter_input")
    ) {
      event.preventDefault();

      previousInput.focus();
      previousInput.value = "";
    }

    if (
      event.key === "ArrowLeft" &&
      previousInput &&
      previousInput.classList.contains("missing_letter_input")
    ) {
      event.preventDefault();

      previousInput.focus();
    }

    if (
      event.key === "ArrowRight" &&
      nextInput &&
      nextInput.classList.contains("missing_letter_input")
    ) {
      event.preventDefault();

      nextInput.focus();
    }
  },

  /* =====================================================
     Paste full word
  ===================================================== */

  handleLetterPaste: function (input, event) {
    event.preventDefault();

    var pastedText = (event.clipboardData || window.clipboardData)
      .getData("text")
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase();

    if (pastedText === "") {
      return;
    }

    var inputsWrap = input.closest(".letters_inputs_wrap");

    var inputs = inputsWrap.querySelectorAll(".missing_letter_input");

    var startIndex = parseInt(input.getAttribute("data-letter-index"));

    for (var i = 0; i < pastedText.length; i++) {
      var targetIndex = startIndex + i;

      if (targetIndex >= inputs.length) {
        break;
      }

      inputs[targetIndex].value = pastedText.charAt(i);
    }

    var focusIndex = Math.min(
      startIndex + pastedText.length,
      inputs.length - 1,
    );

    inputs[focusIndex].focus();

    var questionCard = input.closest(".fill_letters_question");

    this.clearQuestionResult(questionCard);

    this.enableControls();
  },

  /* =====================================================
     Select picture
  ===================================================== */

  selectPicture: function (card) {
    var questionCard = card.closest(".fill_letters_question");

    var qno = questionCard.getAttribute("data-qno");

    var pictureIndex = parseInt(card.getAttribute("data-picture-index"));

    var cards = questionCard.querySelectorAll(".tick_picture_card");

    Array.prototype.forEach.call(cards, function (pictureCard) {
      pictureCard.classList.remove("selected", "correct", "wrong");

      var resultWrap = pictureCard.querySelector(".picture_result_wrap");

      var tick = pictureCard.querySelector(".picture_result_tick");

      var cross = pictureCard.querySelector(".picture_result_cross");

      if (resultWrap) {
        resultWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    });

    card.classList.add("selected");

    this.selectedPictures[qno] = pictureIndex;

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
     Clear question result
  ===================================================== */

  clearQuestionResult: function (questionCard) {
    if (!questionCard) {
      return;
    }

    questionCard.classList.remove("correct", "wrong");

    var wordResult = questionCard.querySelector(".word_result_wrap");

    var wordTick = questionCard.querySelector(".word_tick");

    var wordCross = questionCard.querySelector(".word_cross");

    if (wordResult) {
      wordResult.style.display = "none";
    }

    if (wordTick) {
      wordTick.style.display = "none";
    }

    if (wordCross) {
      wordCross.style.display = "none";
    }
  },

  /* =====================================================
     Get entered letters
  ===================================================== */

  getEnteredLetters: function (questionCard) {
    var inputs = questionCard.querySelectorAll(".missing_letter_input");

    var entered = "";

    Array.prototype.forEach.call(inputs, function (input) {
      entered += String(input.value || "").toLowerCase();
    });

    return entered;
  },

  /* =====================================================
     Validate
  ===================================================== */

  validate: function () {
    var self = this;

    var allCorrect = true;

    Array.prototype.forEach.call(this.questionCards, function (questionCard) {
      var questionIndex = parseInt(
        questionCard.getAttribute("data-question-index"),
      );

      var qno = questionCard.getAttribute("data-qno");

      var questionData = self.ob.data_obj.questions[questionIndex];

      /* Check letters */

      var enteredLetters = self.getEnteredLetters(questionCard);

      var correctLetters = String(questionData.missingLetters).toLowerCase();

      var lettersCorrect =
        enteredLetters !== "" && enteredLetters === correctLetters;

      var wordResult = questionCard.querySelector(".word_result_wrap");

      var wordTick = questionCard.querySelector(".word_tick");

      var wordCross = questionCard.querySelector(".word_cross");

      if (wordResult) {
        wordResult.style.display = "block";
      }

      if (lettersCorrect) {
        if (wordTick) {
          wordTick.style.display = "block";
        }

        if (wordCross) {
          wordCross.style.display = "none";
        }
      } else {
        if (wordTick) {
          wordTick.style.display = "none";
        }

        if (wordCross) {
          wordCross.style.display = "block";
        }

        allCorrect = false;
      }

      /* Check picture */

      var selectedIndex = self.selectedPictures[qno];

      var pictureCorrect = false;

      if (selectedIndex !== undefined && questionData.pictures[selectedIndex]) {
        pictureCorrect = questionData.pictures[selectedIndex].correct === true;
      }

      var pictureCards = questionCard.querySelectorAll(".tick_picture_card");

      Array.prototype.forEach.call(pictureCards, function (pictureCard) {
        pictureCard.classList.remove("correct", "wrong");

        var resultWrap = pictureCard.querySelector(".picture_result_wrap");

        var tick = pictureCard.querySelector(".picture_result_tick");

        var cross = pictureCard.querySelector(".picture_result_cross");

        resultWrap.style.display = "none";

        tick.style.display = "none";

        cross.style.display = "none";
      });

      if (selectedIndex !== undefined) {
        var selectedCard = pictureCards[selectedIndex];

        var selectedResult = selectedCard.querySelector(".picture_result_wrap");

        var selectedTick = selectedCard.querySelector(".picture_result_tick");

        var selectedCross = selectedCard.querySelector(".picture_result_cross");

        selectedResult.style.display = "block";

        if (pictureCorrect) {
          selectedCard.classList.add("correct");

          selectedTick.style.display = "block";

          selectedCross.style.display = "none";
        } else {
          selectedCard.classList.add("wrong");

          selectedTick.style.display = "none";

          selectedCross.style.display = "block";

          allCorrect = false;
        }
      } else {
        allCorrect = false;
      }

      if (lettersCorrect && pictureCorrect) {
        questionCard.classList.add("correct");
      } else {
        questionCard.classList.add("wrong");
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

    this.selectedPictures = {};

    Array.prototype.forEach.call(this.letterInputs, function (input) {
      input.value = "";
    });

    Array.prototype.forEach.call(this.questionCards, function (questionCard) {
      self.clearQuestionResult(questionCard);

      questionCard.classList.remove("correct", "wrong");
    });

    Array.prototype.forEach.call(this.pictureCards, function (card) {
      card.classList.remove("selected", "correct", "wrong");

      var resultWrap = card.querySelector(".picture_result_wrap");

      var tick = card.querySelector(".picture_result_tick");

      var cross = card.querySelector(".picture_result_cross");

      if (resultWrap) {
        resultWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
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
