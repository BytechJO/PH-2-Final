// ***************************************************************
// Colour each letter and write the simple past form
// ***************************************************************

window.ColourCvcPast = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : obj,

    data_obj: dataObj,
  };

  this.currentColour = dataObj.defaultColour || "#ef5350";

  this.init(this.settings);
};

ColourCvcPast.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("ColourCvcPast: activity area not found.");

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

    this.colourButtons = area.querySelectorAll(".cvc_colour_button");

    this.letters = area.querySelectorAll(".cvc_letter");

    this.inputs = area.querySelectorAll(".cvc_answer_input");
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

    Array.prototype.forEach.call(this.letters, function (letter) {
      letter.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        self.colourLetter(this);
      });
    });

    Array.prototype.forEach.call(this.inputs, function (input) {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z .'-]/g, "");

        var question = this.closest(".cvc_question");

        self.hideQuestionIcon(question);

        self.enableButtons();
      });
    });
  },

  /* =====================================================
     Select toolbar colour
  ===================================================== */

  selectColour: function (button) {
    this.currentColour = button.getAttribute("data-colour");

    Array.prototype.forEach.call(this.colourButtons, function (colourButton) {
      colourButton.classList.remove("selected");
    });

    button.classList.add("selected");
  },

  /* =====================================================
     Colour one letter
  ===================================================== */

  colourLetter: function (letter) {
    letter.style.color = this.currentColour;

    letter.setAttribute("data-selected-colour", this.currentColour);

    this.enableButtons();
  },

  /* =====================================================
     Normalize answer
  ===================================================== */

  normalize: function (value) {
    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[.!?]+$/g, "")
      .replace(/\s+/g, " ");
  },

  /* =====================================================
     Hide one question icon
  ===================================================== */

  hideQuestionIcon: function (question) {
    if (!question) {
      return;
    }

    var iconWrap = question.querySelector(".icon_wrap");

    var tick = question.querySelector(".tick");

    var cross = question.querySelector(".cross");

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
     Validation
  ===================================================== */

  validate: function () {
    var activityArea = this.ob.activity_area;

    var dataObj = this.ob.data_obj;

    var questions = activityArea.querySelectorAll(".cvc_question");

    var allCorrect = true;

    for (var i = 0; i < questions.length; i++) {
      var questionNumber = parseInt(questions[i].getAttribute("data-qno"));

      var questionData = dataObj.questions[questionNumber - 1];

      var input = questions[i].querySelector(".cvc_answer_input");

      var iconWrap = questions[i].querySelector(".icon_wrap");

      var tick = questions[i].querySelector(".tick");

      var cross = questions[i].querySelector(".cross");

      var userAnswer = this.normalize(input.value);

      var correctAnswer = this.normalize(questionData.answer);

      iconWrap.style.display = "block";

      tick.style.display = "none";
      cross.style.display = "none";

      input.classList.remove("correct_input", "wrong_input");

      if (userAnswer === correctAnswer) {
        tick.style.display = "block";

        input.classList.add("correct_input");
      } else {
        cross.style.display = "block";

        input.classList.add("wrong_input");

        allCorrect = false;
      }
    }

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");
    }
  },

  /* =====================================================
     Enable buttons
  ===================================================== */

  enableButtons: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  /* =====================================================
     Reset
  ===================================================== */

  reset: function () {
    this.currentColour = this.ob.data_obj.defaultColour || "#ef5350";

    Array.prototype.forEach.call(
      this.colourButtons,
      function (button) {
        button.classList.remove("selected");

        if (button.getAttribute("data-colour") === this.currentColour) {
          button.classList.add("selected");
        }
      },
      this,
    );

    Array.prototype.forEach.call(this.letters, function (letter) {
      letter.style.color = "#ffffff";

      letter.removeAttribute("data-selected-colour");
    });

    Array.prototype.forEach.call(this.inputs, function (input) {
      input.value = "";

      input.style.color = "#000000";

      input.classList.remove("correct_input", "wrong_input");
    });

    var questions = this.ob.activity_area.querySelectorAll(".cvc_question");

    for (var i = 0; i < questions.length; i++) {
      this.hideQuestionIcon(questions[i]);
    }

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
