//  ***************************************************************
//  Look and write prepositions
//  ***************************************************************

window.LookWritePrepositions = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.init(this.settings);
};

LookWritePrepositions.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("LookWritePrepositions: activity area not found.");

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

    this.questionCards = area.querySelectorAll(
      ".look_write_question:not(.example_question)",
    );

    this.inputs = area.querySelectorAll(".preposition_answer_input");
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.inputs, function (input) {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z'. ]/g, "");

        this.style.color = "black";

        var card = this.closest(".look_write_question");

        self.clearQuestionResult(card);

        self.enableControls();
      });
    });
  },

  /* =====================================================
     Enable Playhouse controls
  ===================================================== */

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  /* =====================================================
     Normalize answer
  ===================================================== */

  normalize: function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[’]/g, "'")
      .replace(/[.,!?]/g, "")
      .replace(/\s+/g, " ");
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
     Check answer
  ===================================================== */

  isAnswerCorrect: function (questionData, userValue) {
    if (!questionData) {
      return false;
    }

    var normalizedUser = this.normalize(userValue);

    if (normalizedUser === "") {
      return false;
    }

    var acceptedAnswers = [questionData.answer];

    if (Array.isArray(questionData.alternateAnswers)) {
      acceptedAnswers = acceptedAnswers.concat(questionData.alternateAnswers);
    }

    for (var i = 0; i < acceptedAnswers.length; i++) {
      if (this.normalize(acceptedAnswers[i]) === normalizedUser) {
        return true;
      }
    }

    return false;
  },

  /* =====================================================
     Clear one question result
  ===================================================== */

  clearQuestionResult: function (card) {
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
     Clear all results
  ===================================================== */

  clearAllResults: function () {
    var self = this;

    Array.prototype.forEach.call(this.questionCards, function (card) {
      self.clearQuestionResult(card);
    });
  },

  /* =====================================================
     Validate
  ===================================================== */

  validate: function () {
    var self = this;

    var allCorrect = true;

    this.clearAllResults();

    Array.prototype.forEach.call(this.questionCards, function (card) {
      var qno = parseInt(card.getAttribute("data-qno"));

      var questionData = self.getQuestionByNumber(qno);

      var input = card.querySelector(".preposition_answer_input");

      var iconWrap = card.querySelector(".icon_wrap");

      var tick = card.querySelector(".tick");

      var cross = card.querySelector(".cross");

      var answerCorrect = self.isAnswerCorrect(
        questionData,
        input ? input.value : "",
      );

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (answerCorrect) {
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

    Array.prototype.forEach.call(this.inputs, function (input) {
      input.value = "";
      input.style.color = "black";
    });

    Array.prototype.forEach.call(this.questionCards, function (card) {
      self.clearQuestionResult(card);
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
