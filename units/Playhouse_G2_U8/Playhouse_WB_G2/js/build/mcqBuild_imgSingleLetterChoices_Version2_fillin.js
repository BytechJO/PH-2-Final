function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;
    var alphabetNumber = aObj.numberstartfrom;

    // =========================================================
    // Navigation
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png">';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png">';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =========================================================
    // Heading
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + (aObj.mainTitle || "") + '">';

    if (
      typeof aObj.mainTitleIcon !== "undefined" &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "-18px";

      if (
        aObj.mainTitleIconPos &&
        typeof aObj.mainTitleIconPos.right !== "undefined"
      ) {
        iconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Subtitle
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (Array.isArray(aObj.subTitleIcons) && aObj.subTitleIcons.length > 0) {
      for (
        var subtitleIconIndex = 0;
        subtitleIconIndex < aObj.subTitleIcons.length;
        subtitleIconIndex++
      ) {
        if (aObj.subTitleIcons[subtitleIconIndex]) {
          htmlStmt +=
            "<img src='" + aObj.subTitleIcons[subtitleIconIndex] + "'>";
        }
      }
    }

    if (aObj.subTitleTextRight) {
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Activity
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont h-100 justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-column justify-content-center align-items-center">';

    // =========================================================
    // Story
    // =========================================================

    htmlStmt += '<div class="ques_part_space my-2">';

    for (
      var questionIndex = 0;
      questionIndex < numOfQuestions;
      questionIndex++
    ) {
      var questionData = aObj.questions[questionIndex];

      htmlStmt +=
        '<div id="que_' +
        (questionIndex + 1) +
        '" ' +
        'class="que story_question align-items-baseline d-flex" ' +
        'data-qno="' +
        (questionIndex + 1) +
        '">';

      // =======================================================
      // Numbering
      // =======================================================

      if (aObj.numbering && aObj.numbering !== "none") {
        var displayedNumber = "";

        if (aObj.numbering === "alphabet") {
          if (questionIndex === 0) {
            alphabetNumber = aObj.numberstartfrom || "a";
          } else {
            alphabetNumber = nextChar(alphabetNumber);
          }

          displayedNumber = alphabetNumber;
        } else if (aObj.numbering === "number") {
          displayedNumber =
            questionIndex + parseInt(aObj.numberstartfrom || 1, 10);
        }

        htmlStmt += '<div class="q_num_space">' + displayedNumber + ". </div>";
      }

      htmlStmt += '<div class="picks_grp background_audio">';

      htmlStmt +=
        '<div class="story_words d-flex flex-wrap justify-content-start">';

      var storyOptions = questionData.options || [];

      // =======================================================
      // Story words
      // =======================================================

      for (
        var optionIndex = 0;
        optionIndex < storyOptions.length;
        optionIndex++
      ) {
        var optionData = storyOptions[optionIndex];

        var needSpaceClass =
          optionData.needspaceafter === "yes" ? "right_space" : "";

        htmlStmt +=
          '<div id="pick_' +
          (questionIndex + 1) +
          "_" +
          (optionIndex + 1) +
          '" ' +
          'class="mcq_1_5_q_group pick ' +
          needSpaceClass +
          '" ' +
          'data-option-number="' +
          (optionIndex + 1) +
          '">';

        htmlStmt +=
          '<div class="txt_box d-flex justify-content-center align-items-center" ' +
          'data-type="text">';

        htmlStmt += "<span>" + (optionData.text || "") + "</span>";

        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      // =======================================================
      // Result icon for selected story words
      // =======================================================

      htmlStmt += '<div class="icon_wrap_holder story_result_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt += '<div class="tick story_tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross story_cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // Bottom section: image + unordered inputs
    // =========================================================

    htmlStmt += '<div class="story_bottom_section">';

    // Image
    if (typeof aObj.image !== "undefined" && aObj.image !== "") {
      htmlStmt += '<div class="story_image_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    var firstQuestion =
      aObj.questions && aObj.questions.length > 0 ? aObj.questions[0] : null;

    var fillinAnswers =
      firstQuestion && Array.isArray(firstQuestion.contractionAnswers)
        ? firstQuestion.contractionAnswers
        : [];

    // =========================================================
    // Inputs
    // =========================================================

    if (fillinAnswers.length > 0) {
      htmlStmt += '<div class="contractions_answer_area">';

      htmlStmt += '<div class="contractions_fill_group">';

      for (
        var inputIndex = 0;
        inputIndex < fillinAnswers.length;
        inputIndex++
      ) {
        htmlStmt += '<div class="contraction_input_wrap">';

        htmlStmt +=
          "<input " +
          'class="contraction_input" ' +
          'type="text" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          'data-input-index="' +
          inputIndex +
          '">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // نتيجة الخانات كلها
      htmlStmt += '<div class="inputs_group_result">';

      htmlStmt += '<div class="inputs_group_tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="inputs_group_cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  // إخفاء جميع أيقونات النتائج عند البداية
  hideContractionResults();

  activateContractionInputs();
  activateCustomMcqCheck(aObj);
  activateContractionReset();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// ===========================================================
// Normalize user answer
// ===========================================================

function normalizeContractionAnswer(value) {
  return (
    String(value || "")
      .toLowerCase()
      .trim()

      // توحيد جميع أنواع apostrophe
      .replace(/[’‘`´]/g, "'")

      // حذف علامات الترقيم
      .replace(/[.,!?;:"()[\]{}\-–—]/g, "")

      // حذف apostrophe
      .replace(/'/g, "")

      // توحيد المسافات
      .replace(/\s+/g, " ")
  );
}

// ===========================================================
// Hide all result icons
// ===========================================================

function hideContractionResults() {
  $(".activity_area .story_tick").hide();
  $(".activity_area .story_cross").hide();

  $(".activity_area .inputs_group_tick").hide();
  $(".activity_area .inputs_group_cross").hide();
}

// ===========================================================
// Get accepted answer groups
// ===========================================================

function getContractionAnswerGroups(aObj) {
  if (!aObj || !Array.isArray(aObj.questions) || !aObj.questions.length) {
    return [];
  }

  var fillinAnswers = aObj.questions[0].contractionAnswers;

  if (!Array.isArray(fillinAnswers)) {
    return [];
  }

  return fillinAnswers.map(function (answerGroup) {
    if (Array.isArray(answerGroup)) {
      return answerGroup;
    }

    return [answerGroup];
  });
}

// ===========================================================
// Check all inputs without depending on order
// ===========================================================

function checkAllContractionInputs(aObj) {
  var answerGroups = getContractionAnswerGroups(aObj);

  var $answerArea = $(".activity_area .contractions_answer_area");

  var $inputs = $answerArea.find(".contraction_input");

  var $tick = $answerArea.find(".inputs_group_tick");

  var $cross = $answerArea.find(".inputs_group_cross");

  $tick.hide();
  $cross.hide();

  // لا يوجد Answers أو عدد الخانات غير مطابق
  if (answerGroups.length === 0 || $inputs.length !== answerGroups.length) {
    $cross.show();
    return false;
  }

  var userAnswers = [];

  $inputs.each(function () {
    userAnswers.push(normalizeContractionAnswer($(this).val()));
  });

  // أي خانة فاضية = خطأ
  var hasEmptyInput = userAnswers.some(function (answer) {
    return answer === "";
  });

  if (hasEmptyInput) {
    $tick.hide();
    $cross.show();

    return false;
  }

  /*
    نخزن المجموعات التي استُخدمت حتى لا يقبل
    نفس الجواب مرتين بدل جوابين مختلفين.
  */

  var usedGroups = [];
  var allInputsCorrect = true;

  for (
    var userAnswerIndex = 0;
    userAnswerIndex < userAnswers.length;
    userAnswerIndex++
  ) {
    var currentUserAnswer = userAnswers[userAnswerIndex];

    var matchingGroupIndex = -1;

    for (var groupIndex = 0; groupIndex < answerGroups.length; groupIndex++) {
      // لا نستخدم نفس مجموعة الإجابة مرتين
      if (usedGroups.indexOf(groupIndex) !== -1) {
        continue;
      }

      var acceptedAnswers = answerGroups[groupIndex];

      var answerMatches = acceptedAnswers.some(function (acceptedAnswer) {
        return normalizeContractionAnswer(acceptedAnswer) === currentUserAnswer;
      });

      if (answerMatches) {
        matchingGroupIndex = groupIndex;
        break;
      }
    }

    // لم نجد إجابة مطابقة
    if (matchingGroupIndex === -1) {
      allInputsCorrect = false;
      break;
    }

    usedGroups.push(matchingGroupIndex);
  }

  var completeCorrectAnswer =
    allInputsCorrect && usedGroups.length === answerGroups.length;

  if (completeCorrectAnswer) {
    $cross.hide();
    $tick.show();

    return true;
  }

  $tick.hide();
  $cross.show();

  return false;
}

// ===========================================================
// Check selected contractions in story
// ===========================================================

function checkSelectedContractions($question, questionData) {
  var correctAnswers = (questionData.answer || [])
    .map(function (answerNumber) {
      return parseInt(answerNumber, 10);
    })
    .filter(function (answerNumber) {
      return !isNaN(answerNumber);
    })
    .sort(function (a, b) {
      return a - b;
    });

  var selectedAnswers = [];

  $question.find(".pick").each(function (index) {
    var $pick = $(this);

    /*
        أضفنا selectedDefault لأنها الكلاس
        المستخدمة في تمبلتك عند تحديد الكلمة.
      */

    var isSelected =
      $pick.hasClass("selectedDefault") ||
      $pick.hasClass("selected") ||
      $pick.hasClass("active") ||
      $pick.hasClass("picked") ||
      $pick.hasClass("select") ||
      $pick.attr("data-selected") === "true";

    if (isSelected) {
      var optionNumber = parseInt($pick.attr("data-option-number"), 10);

      if (isNaN(optionNumber)) {
        optionNumber = index + 1;
      }

      selectedAnswers.push(optionNumber);
    }
  });

  selectedAnswers.sort(function (a, b) {
    return a - b;
  });

  return JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);
}

// ===========================================================
// Check complete activity
// ===========================================================

function checkContractionActivity(aObj) {
  var allStoryAnswersCorrect = true;

  // فحص الكلمات المحددة
  $(".activity_area .story_question").each(function (questionIndex) {
    var $question = $(this);

    var questionData = aObj.questions[questionIndex];

    if (!questionData) {
      allStoryAnswersCorrect = false;
      return;
    }

    var storyCorrect = checkSelectedContractions($question, questionData);

    $question.find(".story_tick").toggle(storyCorrect);

    $question.find(".story_cross").toggle(!storyCorrect);

    if (!storyCorrect) {
      allStoryAnswersCorrect = false;
    }
  });

  // فحص الخانات بدون ترتيب
  var allInputsCorrect = checkAllContractionInputs(aObj);

  return allStoryAnswersCorrect && allInputsCorrect;
}

// ===========================================================
// Input events
// ===========================================================

function activateContractionInputs() {
  $(document).off(".contractionInputs");

  // عند تعديل أي input نخفي النتيجة القديمة
  $(document).on("input.contractionInputs", ".contraction_input", function () {
    var $answerArea = $(this).closest(".contractions_answer_area");

    $answerArea.find(".inputs_group_tick, .inputs_group_cross").hide();
  });

  // Enter ينتقل للخانة التالية
  $(document).on(
    "keydown.contractionInputs",
    ".contraction_input",
    function (event) {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();

      var $inputs = $(this)
        .closest(".contractions_answer_area")
        .find(".contraction_input");

      var currentInputIndex = $inputs.index(this);

      if (currentInputIndex >= 0 && currentInputIndex < $inputs.length - 1) {
        $inputs.eq(currentInputIndex + 1).focus();
      }
    },
  );
}

// ===========================================================
// Connect with Check button
// ===========================================================

var customContractionCheckHandler = null;

function activateCustomMcqCheck(aObj) {
  var checkSelectors = [
    ".check",
    ".check_btn",
    ".checkBtn",
    ".check_answer",
    ".checkAnswer",
    ".activity_check",
    ".checkActivity",
    "[data-action='check']",
  ].join(",");

  // حذف الـlistener السابق إن وجد
  if (customContractionCheckHandler) {
    document.removeEventListener("click", customContractionCheckHandler, true);
  }

  customContractionCheckHandler = function (event) {
    var checkButton = event.target.closest(checkSelectors);

    if (!checkButton) {
      return;
    }

    // نتأكد أننا داخل هذا النشاط فقط
    if ($(".activity_area .contractions_answer_area").length === 0) {
      return;
    }

    /*
      منع التشييك الأصلي بالكامل؛
      لأنه هو الذي يفتح نافذة Try Again.
    */
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    checkContractionActivity(aObj);
  };

  /*
    true تعني Capture Mode،
    وبذلك يعمل كودنا قبل كود التشييك الأصلي.
  */
  document.addEventListener("click", customContractionCheckHandler, true);
}
// ===========================================================
// Reset
// ===========================================================

function activateContractionReset() {
  var resetSelectors = [
    ".reset",
    ".reset_btn",
    ".resetBtn",
    ".reset_answer",
    ".resetAnswer",
    ".activity_reset",
    ".resetActivity",
    "[data-action='reset']",
  ].join(",");

  $(document).off("click.customContractionReset", resetSelectors);

  $(document).on("click.customContractionReset", resetSelectors, function () {
    setTimeout(function () {
      $(".activity_area .contraction_input").val("");

      $(".activity_area .pick")
        .removeClass("selectedDefault selected active picked select")
        .removeAttr("data-selected");

      hideContractionResults();
    }, 0);
  });
}

// ===========================================================
// Helper
// ===========================================================

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
