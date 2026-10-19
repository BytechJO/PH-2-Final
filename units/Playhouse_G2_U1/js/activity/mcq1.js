//  ****************************************** //
//  MCQ - Version no: 2
//  Supports normal MCQ + Underline / Circle
//  ****************************************** //

window.MCQ1 = function (obj, dataObj) {
  var optionsElements = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsElements[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

MCQ1.prototype = {
  /* =========================================================
       INIT
    ========================================================= */

  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  /* =========================================================
       CHECK ACTIVITY TYPE
    ========================================================= */

  isUnderlineCircleActivity: function () {
    var questions = this.ob.data_obj.questions;

    return (
      questions &&
      questions.length > 0 &&
      questions[0].answers &&
      typeof questions[0].answers === "object"
    );
  },

  /* =========================================================
       LISTEN
    ========================================================= */

  listen: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    if (!activityArea) {
      return;
    }

    /*
     * نشاط الخط والدائرة له أحداث خاصة.
     */
    if (self.isUnderlineCircleActivity()) {
      self.listenUnderlineCircle(ob);
      return;
    }

    /*
     * نشاط MCQ العادي.
     */
    self.listenNormalMcq(ob);
  },

  /* =========================================================
       NORMAL MCQ LISTEN
    ========================================================= */

  listenNormalMcq: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    var selectType = ob.data_obj.select;
    var selectBgColor = ob.data_obj.bgcolor;
    var selectShape = ob.data_obj.shape;

    var picks = activityArea.querySelectorAll(".pick");

    for (var i = 0; i < picks.length; i++) {
      picks[i].addEventListener("click", function () {
        var currentPick = this;
        var currentId = currentPick.getAttribute("id");

        if (!currentId) {
          return;
        }

        var parentNumber = currentId.split("_")[1];
        var currentQuestion = $("#que_" + parentNumber);
        var questionPicks = currentQuestion.find(".pick");

        self.showIcons(false);

        var isSelected = !currentPick.classList.contains("selected");

        if (selectType === "single") {
          self.resetAllPicks(currentQuestion, questionPicks);
        } else {
          self.resetAllPicks(currentQuestion, [$(currentPick)]);
        }

        if (isSelected) {
          currentPick.classList.add("selected");

          if (selectShape === "cross") {
            $(currentPick).find(".selX").show();
          } else if (selectShape === "svg") {
            $(currentPick)
              .find("svg")
              .removeClass("fillWhite")
              .addClass("fillBlue");
          } else if (selectShape === "tickbox") {
            $(currentPick).find(".selectTick").css("display", "block");
          } else if (selectBgColor !== "none") {
            currentPick.style.backgroundColor = selectBgColor;
          } else {
            currentPick.classList.add("selectedDefault");
          }
        }

        self.enableActivityButtons();
      });
    }
  },

  /* =========================================================
       UNDERLINE / CIRCLE LISTEN
    ========================================================= */

  listenUnderlineCircle: function (ob) {
    var self = this;
    var activityArea = ob.activity_area;

    /*
     * الأداة الافتراضية.
     */
    window.selectedMarkTool = "underline";

    $(".mark_tool")
      .off("click.underlineCircleTool")
      .on("click.underlineCircleTool", function () {
        window.selectedMarkTool = $(this).attr("data-tool");

        $(".mark_tool").removeClass("active");
        $(this).addClass("active");
      });

    $(activityArea)
      .find(".pick")
      .off("click.underlineCircleWord")
      .on("click.underlineCircleWord", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var currentPick = $(this);
        var currentMark = currentPick.attr("data-mark") || "";

        /*
         * الضغط بنفس الأداة يلغي العلامة.
         */
        if (currentMark === window.selectedMarkTool) {
          self.clearUnderlineCirclePick(currentPick);

          self.hideQuestionIcon(currentPick.closest(".que"));

          self.enableActivityButtons();
          return;
        }

        /*
         * تغيير العلامة من خط إلى دائرة أو العكس.
         */
        self.clearUnderlineCirclePick(currentPick);

        currentPick.attr("data-mark", window.selectedMarkTool);

        currentPick.addClass("selected_word");

        if (window.selectedMarkTool === "underline") {
          currentPick.addClass("mark_underline");
        }

        if (window.selectedMarkTool === "circle") {
          currentPick.addClass("mark_circle");
        }

        self.hideQuestionIcon(currentPick.closest(".que"));

        self.enableActivityButtons();
      });
  },

  /* =========================================================
       ENABLE BUTTONS
    ========================================================= */

  enableActivityButtons: function () {
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
       RESET NORMAL PICKS
    ========================================================= */

  resetAllPicks: function (questionObject, picksArray) {
    var ob = this.ob;
    var selectShape = ob.data_obj.shape;

    for (var i = 0; i < picksArray.length; i++) {
      var currentPick =
        picksArray[i].classList === undefined
          ? picksArray[i][0]
          : picksArray[i];

      if (!currentPick) {
        continue;
      }

      currentPick.classList.remove("selected");
      currentPick.classList.remove("selectedDefault");
      currentPick.classList.remove("isCorrect");
      currentPick.classList.remove("isNotCorrect");

      currentPick.style.backgroundColor = "transparent";

      var selectX = currentPick.querySelector(".selX");

      if (selectX) {
        selectX.style.display = "none";
      }

      var selectTick = currentPick.querySelector(".selectTick");

      if (selectTick) {
        selectTick.style.display = "none";
      }

      if (selectShape === "svg") {
        var svgs = currentPick.querySelectorAll("svg");

        for (var svgIndex = 0; svgIndex < svgs.length; svgIndex++) {
          svgs[svgIndex].classList.remove("fillBlue");

          svgs[svgIndex].classList.remove("fillGreen");

          svgs[svgIndex].classList.remove("fillRed");

          svgs[svgIndex].classList.add("fillWhite");
        }
      }
    }
  },

  /* =========================================================
       CLEAR UNDERLINE / CIRCLE PICK
    ========================================================= */

  clearUnderlineCirclePick: function (pick) {
    pick
      .attr("data-mark", "")
      .removeClass(
        "selected selectedDefault selected_word " +
          "mark_underline mark_circle " +
          "answer_correct answer_wrong " +
          "isCorrect isNotCorrect",
      )
      .css("background-color", "transparent");
  },

  /* =========================================================
       VALIDATE
    ========================================================= */

  validate: function () {
    if (this.isUnderlineCircleActivity()) {
      return this.validateUnderlineCircle();
    }

    return this.validateNormalMcq();
  },

  /* =========================================================
       VALIDATE NORMAL MCQ
    ========================================================= */

  validateNormalMcq: function () {
    var self = this;
    var ob = self.ob;

    var selectBgColor = ob.data_obj.bgcolor;

    var selectShape = ob.data_obj.shape;

    var activityArea = ob.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var numberOfQuestions = questions.length;

    var resultArray = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      resultArray[questionIndex] = 0;

      var questionNumber = parseInt(questions[questionIndex].dataset.qno);

      var questionData = ob.data_obj.questions[questionNumber - 1];

      var tick = questions[questionIndex].querySelector(".tick");

      var cross = questions[questionIndex].querySelector(".cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var correctAnswers = getIntArray(questionData.answer);

      var userAnswers = [];

      var picks = questions[questionIndex].querySelectorAll(".pick");

      for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
        if (picks[pickIndex].classList.contains("selected")) {
          var optionNumber = pickIndex + 1;

          userAnswers.push(optionNumber);

          var isAnswer = $.inArray(optionNumber, correctAnswers) >= 0;

          if (isAnswer) {
            if (selectShape === "cross") {
              picks[pickIndex].classList.add("isCorrect");
            } else if (selectShape === "svg") {
              $(picks[pickIndex])
                .find("svg")
                .removeClass("fillBlue")
                .addClass("fillGreen");
            }
          } else {
            if (selectShape === "cross") {
              picks[pickIndex].classList.add("isNotCorrect");
            } else if (selectShape === "svg") {
              $(picks[pickIndex])
                .find("svg")
                .removeClass("fillBlue")
                .addClass("fillRed");
            }
          }
        }
      }

      if (
        userAnswers.length > 0 &&
        correctAnswers.length === userAnswers.length
      ) {
        resultArray[questionIndex] = compareArrays(userAnswers, correctAnswers)
          ? 1
          : 0;
      }
    }

    var allCorrect =
      resultArray.indexOf(0) === -1 && resultArray.length === numberOfQuestions;

    self.showIcons(true, resultArray, allCorrect);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }

    return allCorrect;
  },

  /* =========================================================
       VALIDATE UNDERLINE / CIRCLE
    ========================================================= */

  validateUnderlineCircle: function () {
    var self = this;
    var ob = self.ob;
    var activityArea = ob.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var resultArray = [];
    var allCorrect = true;

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var questionElement = questions[questionIndex];

      var questionNumber = parseInt(questionElement.dataset.qno);

      var questionData = ob.data_obj.questions[questionNumber - 1];

      var answers = questionData.answers || {};

      var correctUnderline = answers.underline || [];

      var correctCircle = answers.circle || [];

      correctUnderline = correctUnderline.map(Number);

      correctCircle = correctCircle.map(Number);

      var picks = questionElement.querySelectorAll(".pick");

      var questionCorrect = true;

      questionElement.classList.remove("question_correct", "question_wrong");

      for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
        var pick = picks[pickIndex];
        var optionNumber = pickIndex + 1;

        var selectedMark = pick.getAttribute("data-mark") || "";

        var correctMark = "";

        if (correctUnderline.indexOf(optionNumber) !== -1) {
          correctMark = "underline";
        }

        if (correctCircle.indexOf(optionNumber) !== -1) {
          correctMark = "circle";
        }

        if (selectedMark !== correctMark) {
          questionCorrect = false;
        }
      }

      resultArray[questionIndex] = questionCorrect ? 1 : 0;

      if (questionCorrect) {
        questionElement.classList.add("question_correct");
      } else {
        questionElement.classList.add("question_wrong");

        allCorrect = false;
      }
    }

    self.showIcons(true, resultArray, allCorrect);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }

    return allCorrect;
  },

  /* =========================================================
       SHOW / HIDE QUESTION ICONS
    ========================================================= */

  showIcons: function (show, values, finalResult) {
    var ob = this.ob;
    var activityArea = ob.activity_area;

    var needIcon =
      typeof ob.data_obj.showicon !== "undefined" &&
      ob.data_obj.showicon !== null
        ? ob.data_obj.showicon
        : "true";

    var questions = activityArea.querySelectorAll(".que");

    for (var i = 0; i < questions.length; i++) {
      var iconWrap = questions[i].querySelector(".icon_wrap");

      var tick = questions[i].querySelector(".tick");

      var cross = questions[i].querySelector(".cross");

      if (show) {
        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = values && values[i] === 1 ? "block" : "none";
        }

        if (cross) {
          cross.style.display = values && values[i] === 1 ? "none" : "block";
        }
      } else {
        if (iconWrap) {
          iconWrap.style.display = "none";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "none";
        }
      }
    }
  },

  hideQuestionIcon: function (question) {
    if (!question || !question.length) {
      return;
    }

    var iconWrap = question.find(".icon_wrap");

    var tick = question.find(".tick");

    var cross = question.find(".cross");

    iconWrap.hide();
    tick.hide();
    cross.hide();

    question.removeClass("question_correct question_wrong");
  },

  /* =========================================================
       RESET
    ========================================================= */

  reset: function () {
    if (this.isUnderlineCircleActivity()) {
      this.resetUnderlineCircle();
      return;
    }

    this.resetNormalMcq();
  },

  /* =========================================================
       RESET UNDERLINE / CIRCLE
    ========================================================= */

  resetUnderlineCircle: function () {
    var self = this;
    var activityArea = self.ob.activity_area;

    var picks = activityArea.querySelectorAll(".pick");

    var questions = activityArea.querySelectorAll(".que");

    for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
      self.clearUnderlineCirclePick($(picks[pickIndex]));
    }

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      questions[questionIndex].classList.remove(
        "question_correct",
        "question_wrong",
      );
    }

    self.showIcons(false);

    window.selectedMarkTool = "underline";

    $(".mark_tool").removeClass("active");

    $('.mark_tool[data-tool="underline"]').addClass("active");

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }
  },

  /* =========================================================
       RESET NORMAL MCQ
    ========================================================= */

  resetNormalMcq: function () {
    var self = this;
    var ob = self.ob;
    var activityArea = ob.activity_area;

    var selectShape = ob.data_obj.shape;

    var questions = activityArea.querySelectorAll(".que");

    self.showIcons(false);

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var questionNumber = parseInt(questions[questionIndex].dataset.qno);

      var questionData = ob.data_obj.questions[questionNumber - 1];

      var picks = questions[questionIndex].querySelectorAll(".pick");

      self.resetAllPicks(questions[questionIndex], picks);

      for (var pickIndex = 0; pickIndex < picks.length; pickIndex++) {
        var optionData = questionData.options[pickIndex];

        if (optionData && optionData.audio !== "") {
          var audioIcon = picks[pickIndex].querySelector(".audioIcon");

          if (audioIcon) {
            if (optionData.audio === "no") {
              audioIcon.style.display = "none";
            } else {
              audioIcon.style.display = "block";

              if (optionData.audioenable === "correct") {
                audioIcon.classList.add("disabled");
              } else {
                audioIcon.classList.remove("disabled");
              }
            }
          }
        }

        if (selectShape === "roundrect") {
          picks[pickIndex].classList.add("roundedCorners");
        } else if (selectShape === "circle") {
          picks[pickIndex].classList.add("noCorners");
        } else if (selectShape === "rectangle") {
          picks[pickIndex].classList.add("sharpCorners");
        }

        picks[pickIndex].classList.remove("selected");

        picks[pickIndex].style.cursor = "pointer";
      }
    }

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }
  },

  /* =========================================================
       INITIAL SETTINGS
    ========================================================= */

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
