// ******************************************
// Old Words Activity
// ******************************************

window.OldWordsActivity = function (obj, dataObj) {
  var activityArea = obj;

  if (obj && obj.jquery) {
    activityArea = obj[0];
  }

  this.settings = {
    activity_area: activityArea,
    data_obj: dataObj,
  };

  this.init(this.settings);
};

OldWordsActivity.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen();
  },

  // =====================================================
  // Events
  // =====================================================
  listen: function () {
    var self = this;
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    // اختيار وإلغاء اختيار الكلمات
    $(activityArea)
      .off("click.oldWords", ".old_word")
      .on("click.oldWords", ".old_word", function () {
        if ($(this).prop("disabled")) {
          return;
        }

        $(this).toggleClass("selected");

        self.clearWordResult($(this));
        self.enableButtons();
      });

    // الكتابة داخل الحقول
    $(activityArea)
      .off("input.oldWords", ".old_words_input")
      .on("input.oldWords", ".old_words_input", function () {
        if (this.readOnly) {
          return;
        }

        this.value = this.value.replace(/[^a-zA-Z]/g, "").slice(0, 30);

        self.clearInputResult($(this));
        self.enableButtons();
      });
  },

  // =====================================================
  // Normalize values
  // =====================================================
  normalize: function (value) {
    return String(value || "")
      .toLowerCase()
      .trim();
  },

  // =====================================================
  // Clear word state
  // =====================================================
  clearWordResult: function (word) {
    word.removeClass("correct_answer wrong_answer correct wrong");
  },

  // =====================================================
  // Clear input state
  // =====================================================
  clearInputResult: function (input) {
    input
      .removeClass("correct_answer wrong_answer correct wrong")
      .css("color", "");
  },

  // =====================================================
  // Validate activity
  // =====================================================
  validate: function () {
    var activityArea = this.ob.activity_area;
    var dataObj = this.ob.data_obj;

    if (!activityArea || !dataObj) {
      return;
    }

    var self = this;
    var allCorrect = true;

    var words = activityArea.querySelectorAll(".old_word");

    var inputs = activityArea.querySelectorAll(".old_words_input");

    // إخفاء الصح والإكس قبل الفحص
    $(activityArea).find(".old_words_tick").hide();

    $(activityArea).find(".old_words_cross").hide();

    // =====================================================
    // فحص الكلمات المختارة
    // =====================================================
    for (var i = 0; i < words.length; i++) {
      var word = $(words[i]);

      var shouldBeSelected = String(word.attr("data-correct")) === "true";

      var isSelected = word.hasClass("selected");

      if (shouldBeSelected !== isSelected) {
        allCorrect = false;
      }
    }

    // =====================================================
    // فحص الكلمات المكتوبة بأي ترتيب
    // =====================================================
    var correctAnswers = [];

    for (
      var answerIndex = 0;
      answerIndex < dataObj.answers.length;
      answerIndex++
    ) {
      correctAnswers.push(self.normalize(dataObj.answers[answerIndex]));
    }

    var usedAnswers = [];

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      var userAnswer = self.normalize(inputs[inputIndex].value);

      var matchingAnswerIndex = -1;

      if (userAnswer !== "") {
        for (
          var correctIndex = 0;
          correctIndex < correctAnswers.length;
          correctIndex++
        ) {
          if (
            correctAnswers[correctIndex] === userAnswer &&
            usedAnswers.indexOf(correctIndex) === -1
          ) {
            matchingAnswerIndex = correctIndex;
            break;
          }
        }
      }

      if (matchingAnswerIndex !== -1) {
        usedAnswers.push(matchingAnswerIndex);
      } else {
        allCorrect = false;
      }
    }

    if (usedAnswers.length !== correctAnswers.length) {
      allCorrect = false;
    }

    // =====================================================
    // إظهار أيقونة النتيجة
    // =====================================================
    if (allCorrect) {
      $(activityArea).find(".old_words_tick").show();

      $(activityArea).find(".old_words_cross").hide();

      $(".checkBtn").addClass("disabled");
    } else {
      $(activityArea).find(".old_words_tick").hide();

      $(activityArea).find(".old_words_cross").show();
    }

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }
  },

  // =====================================================
  // Reset activity
  // =====================================================
  reset: function () {
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    $(activityArea)
      .find(".old_word")
      .removeClass("selected correct_answer wrong_answer correct wrong")
      .prop("disabled", false);

    $(activityArea)
      .find(".old_words_input")
      .val("")
      .prop("readOnly", false)
      .removeClass("correct_answer wrong_answer correct wrong")
      .css("color", "");

    $(activityArea).find(".old_words_tick").hide();

    $(activityArea).find(".old_words_cross").hide();

    $(".checkBtn").addClass("disabled");
    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // Enable buttons
  // =====================================================
  enableButtons: function () {
    $(".checkBtn").removeClass("disabled");
    $(".resetBtn").removeClass("disabled");
  },

  // =====================================================
  // Initial settings
  // =====================================================
  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
