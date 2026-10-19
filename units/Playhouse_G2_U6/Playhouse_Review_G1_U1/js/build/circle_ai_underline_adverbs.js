var currentMarkTool = "underline";

function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("circle_ai_underline_adverbs: invalid mcq_data");

    setLoadedStatus(getCurrFileOrDirectory("file"));

    return;
  }

  var numberOfQuestions = aObj.questions.length;

  // =========================================
  // Back Button
  // =========================================

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_left " +
    "subFooterNav " +
    "backNav " +
    "mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================
  // Next Button
  // =========================================

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_right " +
    "subFooterNav " +
    "nextNav " +
    "mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================
  // Heading
  // =========================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        '">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================
  // Main Options Container
  // =========================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  // =========================================
  // Mark Toolbar
  // =========================================

  htmlStmt += '<div class="mark_tools">';

  htmlStmt +=
    '<button type="button" ' +
    'class="mark_tool active" ' +
    'data-tool="underline">';

  htmlStmt += '<span class="underline_example">' + "Underline" + "</span>";

  htmlStmt += "</button>";

  htmlStmt +=
    '<button type="button" ' + 'class="mark_tool" ' + 'data-tool="circle">';

  htmlStmt += '<span class="circle_example">' + "Circle" + "</span>";

  htmlStmt += "</button>";

  htmlStmt += "</div>";

  // =========================================
  // Questions
  // =========================================

  htmlStmt += '<div class="all_cont justify-content-center">';

  htmlStmt += '<div class="questions_wrapper">';

  for (
    var questionIndex = 0;
    questionIndex < numberOfQuestions;
    questionIndex++
  ) {
    var question = aObj.questions[questionIndex];

    var questionNumber = questionIndex + parseInt(aObj.numberstartfrom || 1);

    htmlStmt +=
      '<div class="que" ' +
      'id="que_' +
      (questionIndex + 1) +
      '" ' +
      'data-qno="' +
      (questionIndex + 1) +
      '">';

    htmlStmt += '<div class="sentence_row">';

    htmlStmt += '<div class="q_num_space">' + questionNumber + "</div>";

    htmlStmt += '<div class="sentence_words">';

    for (
      var optionIndex = 0;
      optionIndex < question.options.length;
      optionIndex++
    ) {
      var option = question.options[optionIndex];

      /*
       * يقرأ answer أولًا،
       * وإذا لم تكن موجودة يقرأ mark.
       */
      var expectedMark =
        option.answer !== undefined
          ? option.answer
          : option.mark !== undefined
            ? option.mark
            : "none";

      htmlStmt +=
        '<span class="pick word_pick" ' +
        'id="pick_' +
        (questionIndex + 1) +
        "_1_" +
        (optionIndex + 1) +
        '" ' +
        'data-answer-mark="' +
        expectedMark +
        '" ' +
        'data-selected-mark="" ' +
        'data-option-number="' +
        (optionIndex + 1) +
        '" ' +
        'data-opttext="' +
        option.text +
        '">';

      htmlStmt += '<span class="txt_box">' + option.text + "</span>";

      htmlStmt += "</span>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================
    // Result icon on the side
    // =====================================

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").empty().append(htmlStmt);

  configureCircleAiAdverbsPlayer();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// Compatibility
function buildMCQBody(aObj) {
  buildMcqBody(aObj);
}

// =========================================
// Configure Existing MCQ Player
// =========================================

function configureCircleAiAdverbsPlayer() {
  if (typeof window.MCQ === "undefined") {
    return;
  }

  // =========================================
  // Click Listeners
  // =========================================

  window.MCQ.prototype.listen = function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    currentMarkTool = "underline";

    // Tools
    $area
      .find(".mark_tool")
      .off("click.circleAi")
      .on("click.circleAi", function (event) {
        event.preventDefault();

        event.stopPropagation();

        currentMarkTool = $(this).attr("data-tool");

        $area.find(".mark_tool").removeClass("active");

        $(this).addClass("active");
      });

    // Words
    $area
      .find(".word_pick")
      .off("click.circleAi")
      .on("click.circleAi", function (event) {
        event.preventDefault();

        event.stopPropagation();

        var $word = $(this);

        var previousMark = $word.attr("data-selected-mark");

        $word.removeClass(
          "marked_circle " +
            "marked_underline " +
            "selectedDefault " +
            "isCorrect " +
            "isNotCorrect",
        );

        /*
         * إذا ضغط على نفس الكلمة
         * بنفس الأداة، يلغي التحديد.
         */
        if (previousMark === currentMarkTool) {
          $word.removeClass("selected").attr("data-selected-mark", "");
        } else {
          $word
            .addClass("selected")
            .attr("data-selected-mark", currentMarkTool);

          if (currentMarkTool === "circle") {
            $word.addClass("marked_circle");
          } else {
            $word.addClass("marked_underline");
          }
        }

        self.hideResultIcons();

        self.enableActivityButtons();
      });
  };

  // =========================================
  // Enable Check And Reset
  // =========================================

  window.MCQ.prototype.enableActivityButtons = function () {
    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  };

  // =========================================
  // Hide Result Icons
  // =========================================

  window.MCQ.prototype.hideResultIcons = function () {
    var $area = $(this.ob.activity_area);

    $area.find(".icon_wrap").hide();

    $area.find(".tick, .cross").hide();
  };

  // =========================================
  // Validate
  // Shows only ✓ or ✕ beside sentence
  // Does not reveal correct words
  // =========================================

  window.MCQ.prototype.validate = function () {
    var $area = $(this.ob.activity_area);

    var allCorrect = true;

    var resultArr = [];

    this.hideResultIcons();

    /*
     * لا نضيف أي لون أو تصحيح
     * على الكلمات.
     */
    $area.find(".word_pick").removeClass("isCorrect isNotCorrect");

    $area.find(".que").each(function (questionIndex) {
      var questionCorrect = true;

      var $question = $(this);

      $question.find(".word_pick").each(function () {
        var $word = $(this);

        var expectedMark = $word.attr("data-answer-mark") || "none";

        var selectedMark = $word.attr("data-selected-mark") || "";

        /*
         * كلمة لا تحتاج تحديد.
         */
        if (expectedMark === "none") {
          if (selectedMark !== "") {
            questionCorrect = false;
          }
        } else {
          /*
           * الكلمة المطلوبة يجب
           * تحديدها بالنوع الصحيح.
           */
          if (selectedMark !== expectedMark) {
            questionCorrect = false;
          }
        }
      });

      resultArr[questionIndex] = questionCorrect ? 1 : 0;

      // النتيجة فقط على جنب الجملة
      $question.find(".icon_wrap").show();

      $question.find(".tick, .cross").hide();

      if (questionCorrect) {
        $question.find(".tick").show();
      } else {
        $question.find(".cross").show();

        allCorrect = false;
      }
    });

    // Good Job / Try Again video
    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    return allCorrect;
  };

  // =========================================
  // Reset
  // =========================================

  window.MCQ.prototype.reset = function () {
    var $area = $(this.ob.activity_area);

    $area
      .find(".word_pick")
      .removeClass(
        "selected " +
          "marked_circle " +
          "marked_underline " +
          "selectedDefault " +
          "isCorrect " +
          "isNotCorrect",
      )
      .attr("data-selected-mark", "");

    this.hideResultIcons();

    currentMarkTool = "underline";

    $area.find(".mark_tool").removeClass("active");

    $area.find('.mark_tool[data-tool="underline"]').addClass("active");

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  };

  // =========================================
  // Initial Settings
  // =========================================

  window.MCQ.prototype.initialSettings = function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  };
}
