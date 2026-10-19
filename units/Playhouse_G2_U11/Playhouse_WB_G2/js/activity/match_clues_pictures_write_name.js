//  ***************************************************************
//  Match clue numbers to pictures and write the names
//  ***************************************************************

window.MatchCluesPicturesWriteName = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.init(this.settings);
};

MatchCluesPicturesWriteName.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("MatchCluesPicturesWriteName: activity area not found.");

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

    this.clueCards = area.querySelectorAll(".clue_question");

    this.pictureCards = area.querySelectorAll(".picture_number_card");

    this.numberInputs = area.querySelectorAll(".picture_number_input");

    this.wordInputs = area.querySelectorAll(".clue_answer_input");
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.numberInputs, function (input) {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        var card = this.closest(".picture_number_card");

        self.clearPictureResult(card);

        self.enableControls();
      });
    });

    Array.prototype.forEach.call(this.wordInputs, function (input) {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z ]/g, "");

        this.style.color = "black";

        var card = this.closest(".clue_question");

        self.clearClueResult(card);

        self.enableControls();
      });
    });
  },

  /* =====================================================
     Enable controls
  ===================================================== */

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  /* =====================================================
     Normalize text
  ===================================================== */

  normalize: function (value) {
    return String(value || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  },

  /* =====================================================
     Get question data
  ===================================================== */

  getQuestionByNumber: function (qno) {
    var questions = this.ob.data_obj.questions;

    for (var i = 0; i < questions.length; i++) {
      if (parseInt(questions[i].qno) === parseInt(qno)) {
        return questions[i];
      }
    }

    return null;
  },

  /* =====================================================
     Check word answer
  ===================================================== */

  isWordCorrect: function (questionData, userValue) {
    if (!questionData) {
      return false;
    }

    var acceptedAnswers = [questionData.answer];

    if (Array.isArray(questionData.alternateAnswers)) {
      acceptedAnswers = acceptedAnswers.concat(questionData.alternateAnswers);
    }

    var normalizedUser = this.normalize(userValue);

    if (normalizedUser === "") {
      return false;
    }

    for (var i = 0; i < acceptedAnswers.length; i++) {
      if (this.normalize(acceptedAnswers[i]) === normalizedUser) {
        return true;
      }
    }

    return false;
  },

  /* =====================================================
     Clear clue result
  ===================================================== */

  clearClueResult: function (card) {
    if (!card) {
      return;
    }

    card.classList.remove("correct", "wrong");

    var iconWrap = card.querySelector(".icon_wrap");

    var tick = card.querySelector(".tick");

    var cross = card.querySelector(".cross");

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

  /* =====================================================
     Clear picture result
  ===================================================== */

  clearPictureResult: function (card) {
    if (!card) {
      return;
    }

    card.classList.remove("correct", "wrong");

    var resultWrap = card.querySelector(".picture_number_result");

    var tick = card.querySelector(".picture_tick");

    var cross = card.querySelector(".picture_cross");

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

    Array.prototype.forEach.call(this.clueCards, function (card) {
      self.clearClueResult(card);
    });

    Array.prototype.forEach.call(this.pictureCards, function (card) {
      self.clearPictureResult(card);
    });
  },

  /* =====================================================
     Validate
  ===================================================== */

  validate: function () {
    var self = this;

    var allCorrect = true;

    this.clearAllResults();

    /* =========================================
       Validate words under clues
    ========================================= */

    Array.prototype.forEach.call(this.clueCards, function (card) {
      var qno = parseInt(card.getAttribute("data-qno"));

      var questionData = self.getQuestionByNumber(qno);

      var input = card.querySelector(".clue_answer_input");

      var iconWrap = card.querySelector(".icon_wrap");

      var tick = card.querySelector(".tick");

      var cross = card.querySelector(".cross");

      var wordCorrect = self.isWordCorrect(
        questionData,
        input ? input.value : "",
      );

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (wordCorrect) {
        card.classList.add("correct");

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        card.classList.add("wrong");

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        allCorrect = false;
      }
    });

    /* =========================================
       Validate numbers on pictures
    ========================================= */

    Array.prototype.forEach.call(this.pictureCards, function (card) {
      var pictureIndex = parseInt(card.getAttribute("data-picture-index"));

      var pictureData = self.ob.data_obj.pictures[pictureIndex];

      var input = card.querySelector(".picture_number_input");

      var resultWrap = card.querySelector(".picture_number_result");

      var tick = card.querySelector(".picture_tick");

      var cross = card.querySelector(".picture_cross");

      var inputValue = input ? String(input.value).trim() : "";

      var userNumber = parseInt(inputValue);

      var correctNumber = parseInt(pictureData.answerNumber);

      var numberCorrect = inputValue !== "" && userNumber === correctNumber;

      if (resultWrap) {
        resultWrap.style.display = "block";
      }

      if (numberCorrect) {
        card.classList.add("correct");

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        card.classList.add("wrong");

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        allCorrect = false;
      }
    });

    /* =========================================
       Feedback
    ========================================= */

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

    Array.prototype.forEach.call(this.numberInputs, function (input) {
      input.value = "";
    });

    Array.prototype.forEach.call(this.wordInputs, function (input) {
      input.value = "";
      input.style.color = "black";
    });

    Array.prototype.forEach.call(this.clueCards, function (card) {
      self.clearClueResult(card);
    });

    Array.prototype.forEach.call(this.pictureCards, function (card) {
      self.clearPictureResult(card);
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
