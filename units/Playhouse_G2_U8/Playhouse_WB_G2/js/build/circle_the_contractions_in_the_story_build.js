// ******************************************
// Circle The Contractions In The Story
// Build
// ******************************************

(function (window, document, $) {
  "use strict";

  // =========================================================
  // Escape HTML
  // =========================================================

  function escapeHtml(value) {
    return String(
      value == null ? "" : value,
    )
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================================================
  // Audio wrapper
  // =========================================================

  function wrapAudio(
    content,
    audioPath,
    extraClass,
  ) {
    if (
      !audioPath ||
      audioPath === "no"
    ) {
      return content;
    }

    var html = "";

    html +=
      '<div class="audioIcon off contant ' +
      escapeHtml(extraClass || "") +
      '" ';

    html +=
      'data-slideNum="1" ';

    html +=
      'data-audio="' +
      escapeHtml(audioPath) +
      '">';

    html += content;
    html += "</div>";

    return html;
  }

  // =========================================================
  // Heading
  // =========================================================

  function buildHeading(data) {
    var html = "";

    html +=
      '<div class="act_head_group justify-content-center">';

    // Main title
    if (
      data.mainTitle &&
      data.mainTitle !== "no"
    ) {
      var mainTitleHtml = "";

      mainTitleHtml +=
        '<div class="q-type-img-container">';

      mainTitleHtml +=
        '<img class="mainTitle" ' +
        'src="' +
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

        mainTitleHtml +=
          '<img class="mainTitleIcon" ' +
          'src="' +
          escapeHtml(
            data.mainTitleIcon,
          ) +
          '" alt="" ' +
          'style="right:' +
          escapeHtml(iconRight) +
          ';">';
      }

      mainTitleHtml += "</div>";

      html += wrapAudio(
        mainTitleHtml,
        data.mainTitleAudio,
        "",
      );
    }

    // Activity subtitle
    html +=
      '<div class="activityHeading">';

    var subtitleHtml = "";

    if (
      data.title_position === "under"
    ) {
      subtitleHtml +=
        '<div class="page_sub_title">';

      subtitleHtml +=
        "<p>" +
        (data.subTitleTextLeft ||
          "") +
        "</p>";

      if (
        Array.isArray(
          data.subTitleIcons,
        )
      ) {
        data.subTitleIcons.forEach(
          function (iconPath) {
            if (iconPath) {
              subtitleHtml +=
                '<img src="' +
                escapeHtml(iconPath) +
                '" alt="">';
            }
          },
        );
      }

      if (data.subTitleTextRight) {
        subtitleHtml += "<br>";

        subtitleHtml +=
          '<p class="subTitleTextRight">' +
          data.subTitleTextRight +
          "</p>";
      }

      subtitleHtml += "</div>";
    } else {
      subtitleHtml +=
        '<div class="page_sub_title d-flex">';

      subtitleHtml +=
        "<p>" +
        (data.subTitleTextLeft ||
          "") +
        "</p>";

      if (
        Array.isArray(
          data.subTitleIcons,
        )
      ) {
        data.subTitleIcons.forEach(
          function (iconPath) {
            if (iconPath) {
              subtitleHtml +=
                '<img src="' +
                escapeHtml(iconPath) +
                '" alt="">';
            }
          },
        );
      }

      if (data.subTitleTextRight) {
        subtitleHtml +=
          '<p class="subTitleTextRight">' +
          data.subTitleTextRight +
          "</p>";
      }

      subtitleHtml += "</div>";
    }

    html += wrapAudio(
      subtitleHtml,
      data.subTitleAudio,
      "audioQuestionTitle",
    );

    html += "</div>";
    html += "</div>";

    return html;
  }

  // =========================================================
  // Story
  // =========================================================

  function buildStory(questionData) {
    var html = "";

    html +=
      '<div class="ques_part_space my-2">';

    html +=
      '<div class="contractions_story_question que" ' +
      'data-qno="1">';

    html +=
      '<div class="contractions_story_words_wrap">';

    html +=
      '<div class="contractions_story_words">';

    var words = Array.isArray(
      questionData.words,
    )
      ? questionData.words
      : [];

    words.forEach(function (
      wordData,
      wordIndex,
    ) {
      var wordNumber =
        wordIndex + 1;

      var isPreset =
        wordData.preset === true;

      var presetClass = isPreset
        ? " selected preset_answer"
        : "";

      html +=
        '<button type="button" ' +
        'class="contraction_word' +
        presetClass +
        '" ';

      html +=
        'data-word-number="' +
        wordNumber +
        '" ';

      if (isPreset) {
        html +=
          'data-preset="true" ' +
          'aria-pressed="true">';
      } else {
        html +=
          'aria-pressed="false">';
      }

      html +=
        '<span class="txt_box">';

      html +=
        "<span>" +
        escapeHtml(
          wordData.text || "",
        ) +
        "</span>";

      html += "</span>";
      html += "</button>";

      if (wordData.breakAfter) {
        html +=
          '<span class="story_line_break" ' +
          'aria-hidden="true"></span>';
      }
    });

    html += "</div>";
    html += "</div>";

    // Story result
    html +=
      '<div class="story_result_holder" ' +
      'aria-live="polite">';

    html +=
      '<div class="icon_wrap">';

    html +=
      '<div class="story_tick tick">';

    html +=
      '<img src="../images/icons/check_btn.png" ' +
      'alt="Correct">';

    html += "</div>";

    html +=
      '<div class="story_cross cross">';

    html +=
      '<img src="../images/icons/cross_btn.png" ' +
      'alt="Try again">';

    html += "</div>";

    html += "</div>";
    html += "</div>";

    html += "</div>";
    html += "</div>";

    return html;
  }

  // =========================================================
  // Image and answer inputs
  // =========================================================

  function buildAnswers(
    data,
    questionData,
  ) {
    var html = "";

    html +=
      '<div class="story_bottom_section">';

    // Image
    if (
      data.image &&
      data.image !== "no"
    ) {
      html +=
        '<div class="story_image_space">';

      html +=
        '<img src="' +
        escapeHtml(data.image) +
        '" alt="' +
        escapeHtml(
          data.imageAlt || "",
        ) +
        '">';

      html += "</div>";
    }

    var answerGroups =
      Array.isArray(
        questionData.contractionAnswers,
      )
        ? questionData.contractionAnswers
        : [];

    var presetValues =
      Array.isArray(
        questionData.presetInputValues,
      )
        ? questionData.presetInputValues
        : [];

    html +=
      '<div class="contractions_answer_area">';

    html +=
      '<div class="contractions_fill_group">';

    answerGroups.forEach(function (
      answerGroup,
      inputIndex,
    ) {
      var presetValue =
        presetValues[inputIndex] ||
        "";

      var isPreset =
        presetValue !== "";

      var maxLength = 30;

      if (
        questionData.inputMaxLength
      ) {
        maxLength = parseInt(
          questionData.inputMaxLength,
          10,
        );

        if (isNaN(maxLength)) {
          maxLength = 30;
        }
      }

      html +=
        '<div class="contraction_input_wrap">';

      html +=
        '<input ' +
        'class="contraction_input text_input_area" ' +
        'type="text" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        'maxlength="' +
        maxLength +
        '" ';

      html +=
        'data-input-index="' +
        inputIndex +
        '" ';

      html +=
        'value="' +
        escapeHtml(presetValue) +
        '" ';

      if (isPreset) {
        html +=
          'readonly ' +
          'data-preset-value="' +
          escapeHtml(presetValue) +
          '" ';
      }

      html +=
        'aria-label="Expanded contraction ' +
        (inputIndex + 1) +
        '">';

      html += "</div>";
    });

    html += "</div>";

    // Inputs result
    html +=
      '<div class="inputs_group_result" ' +
      'aria-live="polite">';

    html +=
      '<div class="icon_wrap">';

    html +=
      '<div class="inputs_group_tick tick">';

    html +=
      '<img src="../images/icons/check_btn.png" ' +
      'alt="Correct">';

    html += "</div>";

    html +=
      '<div class="inputs_group_cross cross">';

    html +=
      '<img src="../images/icons/cross_btn.png" ' +
      'alt="Try again">';

    html += "</div>";

    html += "</div>";
    html += "</div>";

    html += "</div>";
    html += "</div>";

    return html;
  }

  // =========================================================
  // Main build
  // =========================================================

  function buildCircleTheContractionsInTheStory(
    data,
  ) {
    var activityArea =
      document.querySelector(
        ".activity_area",
      );

    if (!activityArea) {
      console.error(
        "Circle contractions: .activity_area not found",
      );

      return;
    }

    if (
      !data ||
      !Array.isArray(data.questions) ||
      data.questions.length === 0
    ) {
      console.error(
        "Circle contractions: activity data is missing",
      );

      return;
    }

    /*
     * منع بناء النشاط أكثر من مرة.
     */
    var oldActivity =
      activityArea.querySelector(
        ".contractions_activity",
      );

    if (oldActivity) {
      oldActivity.remove();
    }

    var questionData =
      data.questions[0];

    var html = "";

    html +=
      '<div class="contractions_activity">';

    // Back
    html +=
      '<div class="sub_footer_icon ' +
      'sub_footer_icon_left ' +
      'subFooterNav backNav mx-1">';

    html += '<a href="">';

    html +=
      '<img src="../images/icons/back_btn.png" ' +
      'alt="Back">';

    html += "</a>";
    html += "</div>";

    // Next
    html +=
      '<div class="sub_footer_icon ' +
      'sub_footer_icon_right ' +
      'subFooterNav nextNav mx-1">';

    html += '<a href="">';

    html +=
      '<img src="../images/icons/next_btn.png" ' +
      'alt="Next">';

    html += "</a>";
    html += "</div>";

    // Heading
    html += buildHeading(data);

    // Content
    html +=
      '<div class="options cont_ht_sf mx-auto">';

    html +=
      '<div class="all_cont ' +
      'justify-content-start ' +
      'justify-content-sm-center">';

    html +=
      '<div class="screen_elements ' +
      'flex-wrap ' +
      'justify-content-center ' +
      'align-items-center h-100">';

    html +=
      '<div class="group_elm ' +
      escapeHtml(
        data.parentClassName || "",
      ) +
      '">';

    html += buildStory(
      questionData,
    );

    html += buildAnswers(
      data,
      questionData,
    );

    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    html += "</div>";

    activityArea.insertAdjacentHTML(
      "beforeend",
      html,
    );

    /*
     * لا ننشئ theActivity هنا.
     *
     * initiateActivityType() هو الذي سينشئ:
     *
     * new CircleTheContractionsInTheStoryActivity(...)
     */
    if (
      typeof setLoadedStatus ===
        "function" &&
      typeof getCurrFileOrDirectory ===
        "function"
    ) {
      setLoadedStatus(
        getCurrFileOrDirectory(
          "file",
        ),
      );
    }
  }

  // إتاحة الفنكشن للتمبلت العام
  window.buildCircleTheContractionsInTheStory =
    buildCircleTheContractionsInTheStory;
})(window, document, jQuery);