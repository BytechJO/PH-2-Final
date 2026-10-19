//  ****************************************** //
//  Write Sentences - Version no: 1
//  ****************************************** //

window.WriteSentences = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],

    has_audio:
      obj[0].dataset.audio !== undefined &&
      obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WriteSentences.prototype = {
  /* =====================================================
     INIT
  ===================================================== */

  init: function (settings) {
    this.ob = settings;

    this.listen(settings);
  },

  /* =====================================================
     EVENTS
  ===================================================== */

  listen: function (settings) {
    var activityArea = settings.activity_area;

    var inputs =
      activityArea.querySelectorAll(
        ".write_sentence_input"
      );

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener(
        "input",
        function () {
          this.style.color = "black";

          /*
            نخفي نتيجة نفس الجملة فقط
            لما الطالب يعدل عليها
          */

          var row =
            this.closest(
              ".write_input_row"
            );

          if (row) {
            var tick =
              row.querySelector(
                ".sentence_tick"
              );

            var cross =
              row.querySelector(
                ".sentence_cross"
              );

            if (tick) {
              tick.style.display =
                "none";
            }

            if (cross) {
              cross.style.display =
                "none";
            }
          }

          var checkButton =
            document.getElementsByClassName(
              "checkBtn"
            )[0];

          var resetButton =
            document.getElementsByClassName(
              "resetBtn"
            )[0];

          if (checkButton) {
            checkButton.classList.remove(
              "disabled"
            );
          }

          if (resetButton) {
            resetButton.classList.remove(
              "disabled"
            );
          }
        }
      );
    }
  },

  /* =====================================================
     NORMALIZE SENTENCE

     يتجاهل:
     - Capital letters
     - punctuation
     - repeated spaces
     - spaces before punctuation
  ===================================================== */

  normalizeSentence: function (value) {
    return String(value || "")
      .toLowerCase()

      // توحيد apostrophe
      .replace(/[’‘`]/g, "'")

      // حذف punctuation
      .replace(
        /[.,!?;:"()[\]{}]/g,
        ""
      )

      // توحيد الفراغات
      .replace(/\s+/g, " ")

      .trim();
  },

  /* =====================================================
     CHECK ANSWER GROUP
  ===================================================== */

  matchesAnswerGroup: function (
    value,
    answerGroup
  ) {
    var normalizedValue =
      this.normalizeSentence(value);

    if (
      normalizedValue === "" ||
      !answerGroup ||
      !Array.isArray(
        answerGroup.answers
      )
    ) {
      return false;
    }

    for (
      var i = 0;
      i < answerGroup.answers.length;
      i++
    ) {
      var normalizedAnswer =
        this.normalizeSentence(
          answerGroup.answers[i]
        );

      if (
        normalizedValue ===
        normalizedAnswer
      ) {
        return true;
      }
    }

    return false;
  },

  /* =====================================================
     VALIDATE
  ===================================================== */

  validate: function () {
    var settings = this.ob;

    var activityArea =
      settings.activity_area;

    var questions =
      activityArea.querySelectorAll(
        ".que"
      );

    var resultArr = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      resultArr[questionIndex] = 0;

      var questionElement =
        questions[questionIndex];

      var questionNumber =
        parseInt(
          questionElement.dataset.qno,
          10
        );

      var questionData =
        settings.data_obj.questions[
          questionNumber - 1
        ];

      var inputs =
        questionElement.querySelectorAll(
          ".write_sentence_input"
        );

      var rows =
        questionElement.querySelectorAll(
          ".write_input_row"
        );

      var answerGroups =
        questionData.answerGroups || [];

      var firstValue =
        inputs[0]
          ? inputs[0].value
          : "";

      var secondValue =
        inputs[1]
          ? inputs[1].value
          : "";

      /* =====================================================
         نخفي نتيجة التشيك القديمة
      ===================================================== */

      for (
        var r = 0;
        r < rows.length;
        r++
      ) {
        var oldTick =
          rows[r].querySelector(
            ".sentence_tick"
          );

        var oldCross =
          rows[r].querySelector(
            ".sentence_cross"
          );

        if (oldTick) {
          oldTick.style.display =
            "none";
        }

        if (oldCross) {
          oldCross.style.display =
            "none";
        }
      }

      /* =====================================================
         فحص الجملة الأولى
      ===================================================== */

      var firstGroup0 =
        answerGroups[0]
          ? this.matchesAnswerGroup(
              firstValue,
              answerGroups[0]
            )
          : false;

      var firstGroup1 =
        answerGroups[1]
          ? this.matchesAnswerGroup(
              firstValue,
              answerGroups[1]
            )
          : false;

      /* =====================================================
         فحص الجملة الثانية
      ===================================================== */

      var secondGroup0 =
        answerGroups[0]
          ? this.matchesAnswerGroup(
              secondValue,
              answerGroups[0]
            )
          : false;

      var secondGroup1 =
        answerGroups[1]
          ? this.matchesAnswerGroup(
              secondValue,
              answerGroups[1]
            )
          : false;

      /* =====================================================
         الترتيب الطبيعي

         input 1 = group 0
         input 2 = group 1
      ===================================================== */

      var normalOrder =
        firstGroup0 &&
        secondGroup1;

      /* =====================================================
         الترتيب المعكوس

         input 1 = group 1
         input 2 = group 0
      ===================================================== */

      var reversedOrder =
        firstGroup1 &&
        secondGroup0;

      /* =====================================================
         تقييم كل جملة منفصلة
      ===================================================== */

      var firstCorrect =
        firstGroup0 ||
        firstGroup1;

      var secondCorrect =
        secondGroup0 ||
        secondGroup1;

      /* =====================================================
         ممنوع نفس الصفة مرتين

         مثال غلط:

         The house is big.
         This is a big house.

         الاثنين نفس group
      ===================================================== */

      if (
        firstGroup0 &&
        secondGroup0
      ) {
        firstCorrect = true;

        secondCorrect = false;
      }

      if (
        firstGroup1 &&
        secondGroup1
      ) {
        firstCorrect = true;

        secondCorrect = false;
      }

      /* =====================================================
         FIRST SENTENCE ICON
      ===================================================== */

      if (rows[0]) {
        var firstTick =
          rows[0].querySelector(
            ".sentence_tick"
          );

        var firstCross =
          rows[0].querySelector(
            ".sentence_cross"
          );

        /*
          إذا الطالب كتب جملة
          نظهر نتيجتها
        */

        if (
          firstValue.trim() !== ""
        ) {
          if (firstCorrect) {
            if (firstTick) {
              firstTick.style.display =
                "block";
            }

            if (firstCross) {
              firstCross.style.display =
                "none";
            }
          } else {
            if (firstTick) {
              firstTick.style.display =
                "none";
            }

            if (firstCross) {
              firstCross.style.display =
                "block";
            }
          }
        }
      }

      /* =====================================================
         SECOND SENTENCE ICON
      ===================================================== */

      if (rows[1]) {
        var secondTick =
          rows[1].querySelector(
            ".sentence_tick"
          );

        var secondCross =
          rows[1].querySelector(
            ".sentence_cross"
          );

        if (
          secondValue.trim() !== ""
        ) {
          if (secondCorrect) {
            if (secondTick) {
              secondTick.style.display =
                "block";
            }

            if (secondCross) {
              secondCross.style.display =
                "none";
            }
          } else {
            if (secondTick) {
              secondTick.style.display =
                "none";
            }

            if (secondCross) {
              secondCross.style.display =
                "block";
            }
          }
        }
      }

      /* =====================================================
         QUESTION RESULT

         السؤال كامل صح فقط إذا:
         - الجملتين مكتوبات
         - وكل جملة من group مختلف
      ===================================================== */

      if (
        firstValue.trim() !== "" &&
        secondValue.trim() !== "" &&
        (
          normalOrder ||
          reversedOrder
        )
      ) {
        resultArr[
          questionIndex
        ] = 1;
      } else {
        resultArr[
          questionIndex
        ] = 0;
      }
    }

    /* =====================================================
       ALL CORRECT
    ===================================================== */

    var allCorrect =
      resultArr.length > 0 &&
      resultArr.indexOf(0) === -1;

    showFeedback(
      true,
      allCorrect
    );

    if (allCorrect) {
      var resetButton =
        document.getElementsByClassName(
          "resetBtn"
        )[0];

      if (resetButton) {
        resetButton.classList.add(
          "disabled"
        );
      }
    }
  },

  /* =====================================================
     RESET
  ===================================================== */

  reset: function () {
    var settings = this.ob;

    var activityArea =
      settings.activity_area;

    var questions =
      activityArea.querySelectorAll(
        ".que"
      );

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var questionElement =
        questions[questionIndex];

      var inputs =
        questionElement.querySelectorAll(
          ".write_sentence_input"
        );

      var rows =
        questionElement.querySelectorAll(
          ".write_input_row"
        );

      /* =====================================================
         Hide sentence icons
      ===================================================== */

      for (
        var r = 0;
        r < rows.length;
        r++
      ) {
        var tick =
          rows[r].querySelector(
            ".sentence_tick"
          );

        var cross =
          rows[r].querySelector(
            ".sentence_cross"
          );

        if (tick) {
          tick.style.display =
            "none";
        }

        if (cross) {
          cross.style.display =
            "none";
        }
      }

      /* =====================================================
         Clear inputs
      ===================================================== */

      for (
        var inputIndex = 0;
        inputIndex < inputs.length;
        inputIndex++
      ) {
        inputs[
          inputIndex
        ].value = "";

        inputs[
          inputIndex
        ].style.color =
          "black";
      }
    }

    var checkButton =
      document.getElementsByClassName(
        "checkBtn"
      )[0];

    var resetButton =
      document.getElementsByClassName(
        "resetBtn"
      )[0];

    if (checkButton) {
      checkButton.classList.add(
        "disabled"
      );
    }

    if (resetButton) {
      resetButton.classList.add(
        "disabled"
      );
    }
  },

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};