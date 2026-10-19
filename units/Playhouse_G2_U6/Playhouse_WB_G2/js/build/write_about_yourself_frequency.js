function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("write_about_yourself_frequency: invalid fillin_data");

    setLoadedStatus(getCurrFileOrDirectory("file"));
    return;
  }

  var numOfQuestions = aObj.questions.length;

  // =========================================================
  // Back button
  // =========================================================
  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/back_btn.png" alt="Back">';
  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Next button
  // =========================================================
  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/next_btn.png" alt="Next">';
  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Heading
  // =========================================================
  htmlStmt +=
    '<div class="act_head_group justify-content-center frequency_heading">';

  // Main title
  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt +=
      '<div class="audioIcon off contant frequency_main_title_audio" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      escapeFrequencyAttribute(aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' +
      'src="' +
      escapeFrequencyAttribute(aObj.mainTitle) +
      '" alt="">';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== null &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "-18px";

      if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right !== undefined) {
        iconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        escapeFrequencyAttribute(aObj.mainTitleIcon) +
        '" ' +
        'style="right:' +
        escapeFrequencyAttribute(iconRight) +
        ';" alt="">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  // Activity heading
  htmlStmt += '<div class="activityHeading frequency_activity_heading">';

  htmlStmt += '<div class="frequency_header_layout">';

  // =========================================================
  // Left side: question and instructions
  // =========================================================
  htmlStmt += '<div class="frequency_question_side">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle frequency_question_audio" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    escapeFrequencyAttribute(aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="frequency_question_content">';

  htmlStmt +=
    '<div class="frequency_main_instruction">' +
    (aObj.subTitleTextLeft || "") +
    "</div>";

  if (
    aObj.subTitleTextRight !== undefined &&
    aObj.subTitleTextRight !== null &&
    aObj.subTitleTextRight !== ""
  ) {
    htmlStmt +=
      '<div class="frequency_sub_instruction">' +
      aObj.subTitleTextRight +
      "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =========================================================
  // Right side: example
  // =========================================================
  htmlStmt += '<div class="frequency_example_side">';

  if (aObj.example !== undefined && aObj.example !== null) {
    if (
      aObj.example.image !== undefined &&
      aObj.example.image !== null &&
      aObj.example.image !== ""
    ) {
      htmlStmt +=
        '<img class="frequency_example_image" ' +
        'src="' +
        escapeFrequencyAttribute(aObj.example.image) +
        '" alt="Example">';
    }

    if (
      aObj.example.text !== undefined &&
      aObj.example.text !== null &&
      aObj.example.text !== ""
    ) {
      htmlStmt +=
        '<div class="frequency_example_text">' + aObj.example.text + "</div>";
    }
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =========================================================
  // Main activity content
  // =========================================================
  htmlStmt += '<div class="options cont_ht_sf mx-auto frequency_options">';

  htmlStmt += '<div class="all_cont frequency_all_cont">';

  htmlStmt += '<div class="screen_elements frequency_screen_elements">';

  htmlStmt += '<div class="group_elm frequency_group">';

  // =========================================================
  // Questions
  // =========================================================
  for (var x = 0; x < numOfQuestions; x++) {
    var tmpObj = aObj.questions[x] || {};

    var label = tmpObj.label || "";

    var maxLength =
      tmpObj.maxlength !== undefined && parseInt(tmpObj.maxlength, 10) > 0
        ? parseInt(tmpObj.maxlength, 10)
        : 500;

    htmlStmt +=
      '<div class="que frequency_section" ' + 'data-qno="' + (x + 1) + '">';

    // =======================================================
    // Left picture box
    // =======================================================
    htmlStmt += '<div class="frequency_picture_box">';

    htmlStmt += '<div class="frequency_label">' + label + "</div>";

    if (
      tmpObj.image !== undefined &&
      tmpObj.image !== null &&
      tmpObj.image !== "" &&
      tmpObj.image !== "no"
    ) {
      htmlStmt +=
        '<img class="frequency_picture" ' +
        'src="' +
        escapeFrequencyAttribute(tmpObj.image) +
        '" ' +
        'alt="' +
        escapeFrequencyAttribute(label) +
        '">';
    }

    htmlStmt += "</div>";

    // =======================================================
    // Right connected textarea
    // =======================================================
    htmlStmt += '<div class="frequency_writing_box">';

    htmlStmt +=
      "<textarea " +
      'class="frequency_textarea" ' +
      'data-qno="' +
      (x + 1) +
      '" ' +
      'data-label="' +
      escapeFrequencyAttribute(label) +
      '" ' +
      'maxlength="' +
      maxLength +
      '" ' +
      'autocomplete="off" ' +
      'autocapitalize="sentences" ' +
      'spellcheck="false"></textarea>';

    htmlStmt += "</div>";

    // =======================================================
    // Hidden elements required by fillin.js
    // =======================================================
    htmlStmt += '<div class="icon_wrap_holder frequency_hidden_icons">';

    htmlStmt += '<div class="icon_wrap">';
    htmlStmt += '<div class="tick"></div>';
    htmlStmt += '<div class="cross"></div>';
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =========================================================
  // Append activity
  // =========================================================
  $(".activity_area").empty().append(htmlStmt);

  initFrequencyWriting();

  console.log("htmlStmt >> frequency writing built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =============================================================
// Initialize activity
// =============================================================
function initFrequencyWriting() {
  var $activity = $(".frequency_options");

  if (!$activity.length) {
    return;
  }

  hideFrequencyCheckButton();

  $(".resetBtn").addClass("disabled").attr("aria-disabled", "true");

  $activity
    .find(".frequency_textarea")
    .off(".frequencyWriting")
    .on("input.frequencyWriting", function () {
      $(this).removeClass(
        "correctAnswer wrongAnswer selected selectedDefault " +
          "isCorrect isNotCorrect",
      );

      $(this)
        .closest(".frequency_section")
        .removeClass(
          "correctAnswer wrongAnswer selected selectedDefault " +
            "isCorrect isNotCorrect",
        );

      updateFrequencyResetButton();
    });

  bindFrequencyResetButton();
}

// =============================================================
// Hide Check button
// =============================================================
function hideFrequencyCheckButton() {
  $(".checkBtn")
    .addClass("d-none frequency_check_hidden")
    .attr("aria-hidden", "true")
    .hide();
}

// =============================================================
// Bind Reset reliably
// =============================================================
function bindFrequencyResetButton() {
  if (window._frequencyResetListenerAdded) {
    return;
  }

  window._frequencyResetListenerAdded = true;

  document.addEventListener(
    "click",
    function (event) {
      var resetButton = event.target.closest(".resetBtn");

      if (!resetButton) {
        return;
      }

      if (!document.querySelector(".frequency_options")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (resetButton.classList.contains("disabled")) {
        return false;
      }

      resetFrequencyWritingState();

      return false;
    },
    true,
  );
}

// =============================================================
// Enable or disable Reset
// =============================================================
function updateFrequencyResetButton() {
  var hasText = false;

  $(".frequency_options .frequency_textarea").each(function () {
    if ($.trim($(this).val()) !== "") {
      hasText = true;
      return false;
    }
  });

  if (hasText) {
    $(".resetBtn").removeClass("disabled").attr("aria-disabled", "false");
  } else {
    $(".resetBtn").addClass("disabled").attr("aria-disabled", "true");
  }
}

// =============================================================
// Reset everything
// =============================================================
function resetFrequencyWritingState() {
  var $activity = $(".frequency_options");
  var $textareas = $activity.find(".frequency_textarea");

  // مسح كل النصوص
  $textareas.each(function () {
    this.value = "";
    this.scrollTop = 0;
    this.scrollLeft = 0;

    $(this)
      .removeAttr("style")
      .removeClass(
        "correctAnswer wrongAnswer selected selectedDefault " +
          "isCorrect isNotCorrect",
      );
  });

  // تنظيف الصفوف
  $activity
    .find(".frequency_section")
    .removeAttr("style")
    .removeClass(
      "correctAnswer wrongAnswer selected selectedDefault " +
        "isCorrect isNotCorrect",
    )
    .removeAttr("data-result");

  // تنظيف أيقونات fillin
  $activity.find(".tick, .cross").each(function () {
    $(this)
      .removeAttr("style")
      .removeClass("show correct wrong isCorrect isNotCorrect")
      .empty();
  });

  $activity
    .find(".icon_wrap, .icon_wrap_holder")
    .removeAttr("style")
    .removeClass("show correct wrong isCorrect isNotCorrect");

  // تعطيل Reset بعد المسح
  $(".resetBtn").addClass("disabled").attr("aria-disabled", "true");

  // إبقاء Check مخفي
  hideFrequencyCheckButton();

  // إزالة التركيز
  if (
    document.activeElement &&
    typeof document.activeElement.blur === "function"
  ) {
    document.activeElement.blur();
  }

  // رجوع كل textarea لأول السطر
  $textareas.each(function () {
    this.scrollTop = 0;
    this.scrollLeft = 0;
  });
}

// =============================================================
// Escape attribute values
// =============================================================
function escapeFrequencyAttribute(value) {
  return String(value === undefined || value === null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// =============================================================
// Required by old builders
// =============================================================
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
