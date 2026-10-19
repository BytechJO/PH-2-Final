// ******************************************
// Look And Colour The Correct Size
// Build
// ******************************************

(function (window, document, $) {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function wrapAudio(content, audioPath, extraClass) {
    if (!audioPath || audioPath === "no") {
      return content;
    }

    return (
      '<div class="audioIcon off contant ' +
      escapeHtml(extraClass || "") +
      '" data-slideNum="1" data-audio="' +
      escapeHtml(audioPath) +
      '">' +
      content +
      "</div>"
    );
  }

  function buildHeading(data) {
    var html = "";

    html +=
      '<div class="act_head_group justify-content-center">';

    if (data.mainTitle && data.mainTitle !== "no") {
      var titleHtml = "";

      titleHtml +=
        '<div class="q-type-img-container">';

      titleHtml +=
        '<img class="mainTitle" src="' +
        escapeHtml(data.mainTitle) +
        '" alt="">';

      if (
        data.mainTitleIcon &&
        data.mainTitleIcon !== "no"
      ) {
        var iconRight = "-18px";

        if (
          data.mainTitleIconPos &&
          data.mainTitleIconPos.right
        ) {
          iconRight =
            data.mainTitleIconPos.right;
        }

        titleHtml +=
          '<img class="mainTitleIcon" src="' +
          escapeHtml(data.mainTitleIcon) +
          '" alt="" style="right:' +
          escapeHtml(iconRight) +
          ';">';
      }

      titleHtml += "</div>";

      html += wrapAudio(
        titleHtml,
        data.mainTitleAudio,
        "",
      );
    }

    html += '<div class="activityHeading">';

    var subtitleHtml = "";

    subtitleHtml +=
      '<div class="page_sub_title d-flex">';

    subtitleHtml +=
      "<p>" +
      (data.subTitleTextLeft || "") +
      "</p>";

    if (Array.isArray(data.subTitleIcons)) {
      data.subTitleIcons.forEach(function (iconPath) {
        if (iconPath) {
          subtitleHtml +=
            '<img src="' +
            escapeHtml(iconPath) +
            '" alt="">';
        }
      });
    }

    if (data.subTitleTextRight) {
      subtitleHtml +=
        '<p class="subTitleTextRight">' +
        data.subTitleTextRight +
        "</p>";
    }

    subtitleHtml += "</div>";

    html += wrapAudio(
      subtitleHtml,
      data.subTitleAudio,
      "audioQuestionTitle",
    );

    html += "</div>";
    html += "</div>";

    return html;
  }

  function buildQuestionRow(
    data,
    questionData,
    questionIndex,
  ) {
    var html = "";

    var imagePath =
      questionData.image ||
      data.image ||
      "";

    var shirtColor =
      questionData.selectedColor ||
      data.selectedColor ||
      "#20b7f3";

    html +=
      '<div class="size_question_row que" ' +
      'data-qno="' +
      (questionIndex + 1) +
      '">';

    html +=
      '<div class="size_label">' +
      escapeHtml(questionData.label || "") +
      "</div>";

    html +=
      '<div class="size_options_group">';

    var options = Array.isArray(
      questionData.options,
    )
      ? questionData.options
      : [];

    options.forEach(function (
      optionData,
      optionIndex,
    ) {
      var optionScale = parseFloat(
        optionData.scale,
      );

      if (isNaN(optionScale)) {
        optionScale = 1;
      }

      html +=
        '<button type="button" ' +
        'class="size_option" ' +
        'data-option-number="' +
        (optionIndex + 1) +
        '" ' +
        'aria-pressed="false" ' +
        'style="--shirt-color:' +
        escapeHtml(shirtColor) +
        ';">';

      html +=
        '<div class="size_option_image_wrap">';

      html +=
        '<div class="size_tshirt_visual" ' +
        'style="--shirt-scale:' +
        optionScale +
        ';">';

      /*
       * طبقة التعبئة.
       * تظهر فقط عند اختيار الخيار.
       */
      html +=
        '<span class="size_tshirt_body"></span>';

      /*
       * صورة خطوط البلوزة.
       * تظل فوق طبقة التعبئة.
       */
      html +=
        '<img class="size_tshirt_outline" ' +
        'src="' +
        escapeHtml(imagePath) +
        '" ' +
        'alt="' +
        escapeHtml(
          optionData.imageAlt || "",
        ) +
        '">';

      html += "</div>";
      html += "</div>";
      html += "</button>";
    });

    html += "</div>";

    html +=
      '<div class="size_result_holder">';

    html +=
      '<div class="size_tick">' +
      '<img src="../images/icons/check_btn.png" alt="Correct">' +
      "</div>";

    html +=
      '<div class="size_cross">' +
      '<img src="../images/icons/cross_btn.png" alt="Try again">' +
      "</div>";

    html += "</div>";
    html += "</div>";

    return html;
  }

  function buildLookAndColourCorrectSize(data) {
    var activityArea =
      document.querySelector(
        ".activity_area",
      );

    if (!activityArea) {
      console.error(
        "Look and colour size: .activity_area not found",
      );

      return;
    }

    if (
      !data ||
      !Array.isArray(data.questions) ||
      data.questions.length === 0
    ) {
      console.error(
        "Look and colour size: activity data missing",
      );

      return;
    }

    var oldActivity =
      activityArea.querySelector(
        ".look_colour_size_activity",
      );

    if (oldActivity) {
      oldActivity.remove();
    }

    var html = "";

    html +=
      '<div class="look_colour_size_activity">';

    html +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    html +=
      '<a href="">' +
      '<img src="../images/icons/back_btn.png" alt="Back">' +
      "</a>";

    html += "</div>";

    html +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    html +=
      '<a href="">' +
      '<img src="../images/icons/next_btn.png" alt="Next">' +
      "</a>";

    html += "</div>";

    html += buildHeading(data);

    html +=
      '<div class="options cont_ht_sf mx-auto">';

    html +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    html +=
      '<div class="screen_elements flex-wrap justify-content-center align-items-center h-100">';

    html +=
      '<div class="group_elm ' +
      escapeHtml(
        data.parentClassName || "",
      ) +
      '">';

    data.questions.forEach(function (
      questionData,
      questionIndex,
    ) {
      html += buildQuestionRow(
        data,
        questionData,
        questionIndex,
      );
    });

    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    activityArea.insertAdjacentHTML(
      "beforeend",
      html,
    );

    if (
      typeof setLoadedStatus ===
        "function" &&
      typeof getCurrFileOrDirectory ===
        "function"
    ) {
      setLoadedStatus(
        getCurrFileOrDirectory("file"),
      );
    }
  }

  window.buildLookAndColourCorrectSize =
    buildLookAndColourCorrectSize;
})(window, document, jQuery);