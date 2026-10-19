// ******************************************
// Circle The Contractions In The Story
// Activity
// ******************************************

window.CircleTheContractionsInTheStoryActivity = function (obj, dataObj) {
  var parentElement = null;

  if (obj && obj.jquery && obj.length > 0) {
    parentElement = obj[0];
  } else if (obj instanceof HTMLElement) {
    parentElement = obj;
  }

  if (!parentElement) {
    console.error(
      "CircleTheContractionsInTheStoryActivity: activity element not found",
    );
    return;
  }

  var optionsElements = parentElement.getElementsByClassName("options");

  this.settings = {
    activity_area:
      optionsElements.length > 0 ? optionsElements[0] : parentElement,

    data_obj: dataObj,
    parent_holder: parentElement,
  };

  this.init(this.settings);
};

CircleTheContractionsInTheStoryActivity.prototype = {
  // =========================================================
  // Init
  // =========================================================

  init: function (settings) {
    this.ob = settings;
    this.listen(settings);
  },

  // =========================================================
  // Events
  // =========================================================

  listen: function (settings) {
    var self = this;
    var activityArea = settings.activity_area;

    if (!activityArea) {
      return;
    }

    // تحديد كلمات القصة
    activityArea.addEventListener("click", function (event) {
      var wordButton = event.target.closest(".contraction_word");

      if (!wordButton) {
        return;
      }

      /*
       * الكلمة المحددة مسبقًا لا يستطيع الطالب إلغاء تحديدها.
       */
      if (wordButton.dataset.preset === "true") {
        return;
      }

      var selected = wordButton.classList.toggle("selected");

      wordButton.setAttribute("aria-pressed", selected ? "true" : "false");

      self.hideStoryResult();
      self.enableControls();
    });

    // الكتابة داخل الحقول
    activityArea.addEventListener("input", function (event) {
      var input = event.target;

      if (!input.classList.contains("contraction_input")) {
        return;
      }

      input.style.color = "black";

      self.hideInputResult();
      self.enableControls();
    });

    // الانتقال للحقل التالي عند Enter
    activityArea.addEventListener("keydown", function (event) {
      var input = event.target;

      if (
        event.key !== "Enter" ||
        !input.classList.contains("contraction_input")
      ) {
        return;
      }

      event.preventDefault();

      var editableInputs = Array.prototype.slice.call(
        activityArea.querySelectorAll(
          ".contraction_input:not([readonly]):not([disabled])",
        ),
      );

      var currentIndex = editableInputs.indexOf(input);

      if (currentIndex >= 0 && currentIndex < editableInputs.length - 1) {
        editableInputs[currentIndex + 1].focus();
      }
    });
  },

  // =========================================================
  // Helpers
  // =========================================================

  normalizeAnswer: function (value) {
    return (
      String(value == null ? "" : value)
        .toLowerCase()
        .trim()

        // توحيد أشكال apostrophe
        .replace(/[’‘`´]/g, "'")

        // حذف علامات الترقيم والفواصل
        .replace(/[.,،!?؟;؛:"()[\]{}\-–—_/\\]/g, "")

        // حذف apostrophe
        .replace(/'/g, "")

        // توحيد المسافات
        .replace(/\s+/g, " ")
    );
  },
  uniqueSortedNumbers: function (values) {
    return values
      .filter(function (value, index, array) {
        return array.indexOf(value) === index;
      })
      .sort(function (a, b) {
        return a - b;
      });
  },

  getQuestionData: function () {
    var dataObject = this.ob.data_obj;

    if (
      !dataObject ||
      !Array.isArray(dataObject.questions) ||
      dataObject.questions.length === 0
    ) {
      return {};
    }

    return dataObject.questions[0];
  },

  getSelectedWordIndexes: function () {
    var activityArea = this.ob.activity_area;

    var selectedIndexes = [];

    activityArea
      .querySelectorAll(".contraction_word.selected")
      .forEach(function (wordButton) {
        var wordNumber = parseInt(wordButton.dataset.wordNumber, 10);

        if (!isNaN(wordNumber)) {
          selectedIndexes.push(wordNumber);
        }
      });

    return this.uniqueSortedNumbers(selectedIndexes);
  },

  // =========================================================
  // Story validation
  // =========================================================

  checkStory: function () {
    var activityArea = this.ob.activity_area;

    var questionData = this.getQuestionData();

    var correctIndexes = this.uniqueSortedNumbers(
      (questionData.correctWordIndexes || [])
        .map(function (value) {
          return parseInt(value, 10);
        })
        .filter(function (value) {
          return !isNaN(value);
        }),
    );

    var selectedIndexes = this.getSelectedWordIndexes();

    var isCorrect =
      JSON.stringify(selectedIndexes) === JSON.stringify(correctIndexes);

    var storyTick = activityArea.querySelector(".story_tick");

    var storyCross = activityArea.querySelector(".story_cross");

    if (storyTick) {
      storyTick.style.display = isCorrect ? "block" : "none";
    }

    if (storyCross) {
      storyCross.style.display = isCorrect ? "none" : "block";
    }

    return isCorrect;
  },

  // =========================================================
  // Input validation
  // =========================================================

  checkInputs: function () {
    var self = this;
    var activityArea = this.ob.activity_area;
    var questionData = this.getQuestionData();

    var rawAnswerGroups = questionData.contractionAnswers || [];

    /*
     * كل عنصر داخل contractionAnswers يمثل جوابًا واحدًا،
     * ويمكن أن يحتوي أكثر من صيغة مقبولة.
     */
    var answerGroups = rawAnswerGroups.map(function (answerGroup) {
      return Array.isArray(answerGroup) ? answerGroup : [answerGroup];
    });

    var inputs = Array.prototype.slice.call(
      activityArea.querySelectorAll(".contraction_input"),
    );

    if (answerGroups.length === 0 || inputs.length !== answerGroups.length) {
      this.showInputResult(false);
      return false;
    }

    var userAnswers = inputs.map(function (input) {
      return self.normalizeAnswer(input.value);
    });

    /*
     * لا نقبل وجود مربع فارغ.
     */
    var hasEmptyAnswer = userAnswers.some(function (answer) {
      return answer === "";
    });

    if (hasEmptyAnswer) {
      this.showInputResult(false);
      return false;
    }

    /*
     * ترتيب الإجابات غير مهم.
     *
     * كل جواب يطابق مجموعة واحدة فقط،
     * ولا يمكن استخدام نفس مجموعة الإجابات مرتين.
     */
    var usedGroupIndexes = [];

    var allCorrect = userAnswers.every(function (userAnswer) {
      var matchingGroupIndex = -1;

      for (var groupIndex = 0; groupIndex < answerGroups.length; groupIndex++) {
        /*
         * منع استخدام نفس الجواب الصحيح مرتين.
         */
        if (usedGroupIndexes.indexOf(groupIndex) !== -1) {
          continue;
        }

        var acceptedAnswers = answerGroups[groupIndex];

        var matches = acceptedAnswers.some(function (acceptedAnswer) {
          return self.normalizeAnswer(acceptedAnswer) === userAnswer;
        });

        if (matches) {
          matchingGroupIndex = groupIndex;
          break;
        }
      }

      if (matchingGroupIndex === -1) {
        return false;
      }

      usedGroupIndexes.push(matchingGroupIndex);

      return true;
    });

    allCorrect = allCorrect && usedGroupIndexes.length === answerGroups.length;

    this.showInputResult(allCorrect);

    return allCorrect;
  },

  showInputResult: function (isCorrect) {
    var activityArea = this.ob.activity_area;

    var inputTick = activityArea.querySelector(".inputs_group_tick");

    var inputCross = activityArea.querySelector(".inputs_group_cross");

    if (inputTick) {
      inputTick.style.display = isCorrect ? "block" : "none";
    }

    if (inputCross) {
      inputCross.style.display = isCorrect ? "none" : "block";
    }
  },

  // =========================================================
  // Check button
  // =========================================================

  validate: function () {
    var storyCorrect = this.checkStory();

    var inputsCorrect = this.checkInputs();

    var allCorrect = storyCorrect && inputsCorrect;

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    /*
     * مثل FillIn:
     * إذا كانت الإجابة كاملة صحيحة، نعطل Reset.
     */
    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }

    return allCorrect;
  },

  // =========================================================
  // Reset button
  // =========================================================

  reset: function () {
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    // إعادة الكلمات للحالة الأصلية
    activityArea
      .querySelectorAll(".contraction_word")
      .forEach(function (wordButton) {
        var isPreset = wordButton.dataset.preset === "true";

        wordButton.classList.toggle("selected", isPreset);

        wordButton.setAttribute("aria-pressed", isPreset ? "true" : "false");
      });

    // إعادة الحقول للحالة الأصلية
    activityArea
      .querySelectorAll(".contraction_input")
      .forEach(function (input) {
        input.value = input.dataset.presetValue || "";

        input.style.color = "black";
      });

    this.hideResults();

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  // =========================================================
  // Hide result icons
  // =========================================================

  hideStoryResult: function () {
    var activityArea = this.ob.activity_area;

    activityArea
      .querySelectorAll(".story_tick, .story_cross")
      .forEach(function (element) {
        element.style.display = "none";
      });
  },

  hideInputResult: function () {
    var activityArea = this.ob.activity_area;

    activityArea
      .querySelectorAll(".inputs_group_tick, .inputs_group_cross")
      .forEach(function (element) {
        element.style.display = "none";
      });
  },

  hideResults: function () {
    this.hideStoryResult();
    this.hideInputResult();
  },

  // =========================================================
  // Controls
  // =========================================================

  enableControls: function () {
    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  },

  // =========================================================
  // Initial settings
  // =========================================================

  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
