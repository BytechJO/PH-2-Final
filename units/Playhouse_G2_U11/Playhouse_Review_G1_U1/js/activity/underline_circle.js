// ******************************************
// Underline Circle Activity
// ******************************************

window.UnderlineCircle = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    has_audio:
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.selectedTool = "underline";

  this.init(this.settings);
};

UnderlineCircle.prototype = {
  /* =========================================================
     Init
     ========================================================= */

  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  /* =========================================================
     Events
     ========================================================= */

  listen: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    var toolButtons = activityArea.querySelectorAll(".mark_tool");

    var words = activityArea.querySelectorAll(".underline_circle_word");

    /* اختيار Underline أو Circle */

    for (var i = 0; i < toolButtons.length; i++) {
      toolButtons[i].addEventListener("click", function (event) {
        event.preventDefault();

        self.selectedTool = this.dataset.tool || "underline";

        for (var x = 0; x < toolButtons.length; x++) {
          toolButtons[x].classList.remove("active");
        }

        this.classList.add("active");
      });
    }

    /* اختيار الكلمات */

    for (var j = 0; j < words.length; j++) {
      words[j].addEventListener("click", function () {
        var oldSelection = this.dataset.selected || "";

        this.classList.remove(
          "selected_underline",
          "selected_circle",
          "answer_correct",
          "answer_wrong",
        );

        self.hideAllIcons();

        /*
            الضغط بنفس الأداة مرة ثانية
            يلغي تحديد الكلمة
          */

        if (oldSelection === self.selectedTool) {
          this.dataset.selected = "";
        } else {
          this.dataset.selected = self.selectedTool;

          if (self.selectedTool === "underline") {
            this.classList.add("selected_underline");
          } else {
            this.classList.add("selected_circle");
          }
        }

        self.enableFooterButtons();
      });
    }
  },

  /* =========================================================
     Validate
     يتم استدعاؤها من زر Check الأساسي
     ========================================================= */

  validate: function () {
    var ob = this.ob;
    var activityArea = ob.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var allCorrect = true;
    var resultArr = [];

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var words = question.querySelectorAll(".underline_circle_word");

      var tick = question.querySelector(".tick");
      var cross = question.querySelector(".cross");

      var iconWrap = question.querySelector(".icon_wrap");

      var sentenceCorrect = true;
      var hasRequiredAnswer = false;

      tick.style.display = "none";
      cross.style.display = "none";

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      for (var j = 0; j < words.length; j++) {
        var word = words[j];

        var correctAnswer = word.dataset.answer || "";

        var selectedAnswer = word.dataset.selected || "";

        word.classList.remove("answer_correct", "answer_wrong");

        if (correctAnswer !== "") {
          hasRequiredAnswer = true;

          if (selectedAnswer !== correctAnswer) {
            sentenceCorrect = false;
          }
        }

        if (correctAnswer === "" && selectedAnswer !== "") {
          sentenceCorrect = false;
        }
      }

      if (!hasRequiredAnswer) {
        sentenceCorrect = false;
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (sentenceCorrect) {
        tick.style.display = "block";
        cross.style.display = "none";

        resultArr[i] = 1;
      } else {
        tick.style.display = "none";
        cross.style.display = "block";

        resultArr[i] = 0;
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
  },

  /* =========================================================
     Reset
     يتم استدعاؤها من زر Reset الأساسي
     ========================================================= */

  reset: function () {
    var ob = this.ob;
    var activityArea = ob.activity_area;

    this.selectedTool = "underline";

    var toolButtons = activityArea.querySelectorAll(".mark_tool");

    var words = activityArea.querySelectorAll(".underline_circle_word");

    for (var i = 0; i < toolButtons.length; i++) {
      toolButtons[i].classList.remove("active");

      if (toolButtons[i].dataset.tool === "underline") {
        toolButtons[i].classList.add("active");
      }
    }

    for (var j = 0; j < words.length; j++) {
      words[j].dataset.selected = "";

      words[j].classList.remove(
        "selected_underline",
        "selected_circle",
        "answer_correct",
        "answer_wrong",
      );
    }

    this.hideAllIcons();

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  /* =========================================================
     Hide icons
     ========================================================= */

  hideAllIcons: function () {
    var activityArea = this.ob.activity_area;

    var iconWraps = activityArea.querySelectorAll(".icon_wrap");

    var ticks = activityArea.querySelectorAll(".tick");

    var crosses = activityArea.querySelectorAll(".cross");

    for (var i = 0; i < iconWraps.length; i++) {
      iconWraps[i].style.display = "none";
    }

    for (var j = 0; j < ticks.length; j++) {
      ticks[j].style.display = "none";
    }

    for (var x = 0; x < crosses.length; x++) {
      crosses[x].style.display = "none";
    }
  },

  /* =========================================================
     Enable footer buttons
     ========================================================= */

  enableFooterButtons: function () {
    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  },

  /* =========================================================
     Initial settings
     ========================================================= */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
