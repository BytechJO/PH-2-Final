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

    var sentences = activityArea.querySelectorAll(".underline_circle_text");

    /* =========================================================
       اختيار Underline أو Circle
       ========================================================= */

    for (var i = 0; i < toolButtons.length; i++) {
      toolButtons[i].addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        self.selectedTool = this.dataset.tool || "underline";

        for (var x = 0; x < toolButtons.length; x++) {
          toolButtons[x].classList.remove("active");
        }

        this.classList.add("active");
      });
    }

    /* =========================================================
       تحديد الجملة كاملة
       ========================================================= */

    for (var j = 0; j < sentences.length; j++) {
      sentences[j].addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        var oldSelection = this.dataset.selected || "";

        this.classList.remove("selected_underline", "selected_circle");

        self.hideAllIcons();

        /*
          عند الضغط مرة ثانية بنفس الأداة
          يتم إلغاء تحديد الجملة
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
    var activityArea = this.ob.activity_area;

    var questions = activityArea.querySelectorAll(".underline_circle_sentence");

    var allCorrect = true;
    var resultArr = [];

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var sentence = question.querySelector(".underline_circle_text");

      var tick = question.querySelector(".tick");

      var cross = question.querySelector(".cross");

      var iconWrap = question.querySelector(".icon_wrap");

      if (!sentence) {
        allCorrect = false;
        resultArr[i] = 0;
        continue;
      }

      var correctAnswer = sentence.dataset.answer || "";

      var selectedAnswer = sentence.dataset.selected || "";

      var sentenceCorrect =
        selectedAnswer !== "" && selectedAnswer === correctAnswer;

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (sentenceCorrect) {
        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        resultArr[i] = 1;
      } else {
        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

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
    var activityArea = this.ob.activity_area;

    this.selectedTool = "underline";

    var toolButtons = activityArea.querySelectorAll(".mark_tool");

    var sentences = activityArea.querySelectorAll(".underline_circle_text");

    /* إعادة الأداة الافتراضية إلى Underline */

    for (var i = 0; i < toolButtons.length; i++) {
      toolButtons[i].classList.remove("active");

      if (toolButtons[i].dataset.tool === "underline") {
        toolButtons[i].classList.add("active");
      }
    }

    /* حذف التحديد عن جميع الجمل */

    for (var j = 0; j < sentences.length; j++) {
      sentences[j].dataset.selected = "";

      sentences[j].classList.remove("selected_underline", "selected_circle");
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
