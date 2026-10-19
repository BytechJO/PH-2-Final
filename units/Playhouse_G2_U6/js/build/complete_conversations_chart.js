// =====================================================
// Normalize answers
// خاص بهذا السؤال فقط
// =====================================================

function normalizeConversationAnswer(value) {
  if (
    value === undefined ||
    value === null
  ) {
    return "";
  }

  return value
    .toString()
    .toLowerCase()

    // حذف علامات الترقيم والرموز
    // والإبقاء على الأحرف والأرقام والمسافات
    .replace(/[^a-z0-9\s]/g, "")

    // تحويل المسافات المتكررة إلى مسافة واحدة
    .replace(/\s+/g, " ")

    // حذف المسافات من البداية والنهاية
    .trim();
}

// =====================================================
// Normalize correct answers from data
// =====================================================

function normalizeConversationCorrectAnswers(aObj) {
  if (
    !aObj ||
    !aObj.questions ||
    !Array.isArray(aObj.questions)
  ) {
    return;
  }

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var questionObj =
      aObj.questions[questionIndex];

    if (
      questionObj.answer === undefined ||
      questionObj.answer === null
    ) {
      continue;
    }

    // كل سؤال قد يحتوي أكثر من input
    // والإجابات مفصولة بفاصلة
    var answers = questionObj.answer
      .toString()
      .split(",");

    for (
      var answerIndex = 0;
      answerIndex < answers.length;
      answerIndex++
    ) {
      answers[answerIndex] =
        normalizeConversationAnswer(
          answers[answerIndex]
        );
    }

    questionObj.answer =
      answers.join(",");
  }
}

// =====================================================
// Build bubble content
// =====================================================

function buildConversationBubbleContent(
  bubbleObj
) {
  var bubbleHtml = "";

  if (
    bubbleObj === undefined ||
    bubbleObj === null
  ) {
    return bubbleHtml;
  }

  // ===================================================
  // Ready text
  // ===================================================

  if (bubbleObj.type === "text") {
    bubbleHtml +=
      '<span class="bubble_text">' +
      (bubbleObj.text || "") +
      "</span>";

    return bubbleHtml;
  }

  // ===================================================
  // Input
  // ===================================================

  if (bubbleObj.type === "input") {
    if (
      bubbleObj.before !== undefined &&
      bubbleObj.before !== ""
    ) {
      bubbleHtml +=
        '<span class="bubble_text bubble_before">' +
        bubbleObj.before +
        "</span>";
    }

    bubbleHtml +=
      '<input ' +
      'class="conversation_input text_input_area" ' +
      'type="text" ' +
      'data-type="text" ' +
      'maxlength="' +
      (bubbleObj.maxlength || 40) +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false">';

    if (
      bubbleObj.after !== undefined &&
      bubbleObj.after !== ""
    ) {
      bubbleHtml +=
        '<span class="bubble_text bubble_after">' +
        bubbleObj.after +
        "</span>";
    }
  }

  return bubbleHtml;
}

// =====================================================
// Main builder
// =====================================================

function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null
  ) {
    setLoadedStatus(
      getCurrFileOrDirectory("file")
    );

    return;
  }

  // تنظيف الإجابات الصحيحة قبل تشغيل fillin.js
  normalizeConversationCorrectAnswers(
    aObj
  );

  // =====================================================
  // Back / Next
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  // =====================================================
  // Header
  // =====================================================

  htmlStmt +=
    '<div class="conversation_header_wrapper">';

  htmlStmt +=
    '<div class="act_head_group justify-content-center">';

  // ===================================================
  // Main title
  // ===================================================

  htmlStmt +=
    '<div class="audioIcon off contant main_title_audio" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt +=
    '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt +=
      '<img class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '">';
  }

  if (
    aObj.mainTitleIcon !== undefined &&
    aObj.mainTitleIcon !== ""
  ) {
    var iconRight = "0px";

    if (
      aObj.mainTitleIconPos &&
      aObj.mainTitleIconPos.right
    ) {
      iconRight =
        aObj.mainTitleIconPos.right;
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

  // ===================================================
  // Subtitle
  // ===================================================

  htmlStmt +=
    '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt +=
    '<div class="page_sub_title d-flex">';

  htmlStmt +=
    "<p>" +
    (aObj.subTitleTextLeft || "") +
    "</p>";

  if (
    aObj.subTitleIcons &&
    Array.isArray(aObj.subTitleIcons) &&
    aObj.subTitleIcons.length > 0
  ) {
    for (
      var iconIndex = 0;
      iconIndex <
      aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (
        aObj.subTitleIcons[iconIndex] !==
        ""
      ) {
        htmlStmt +=
          '<img src="' +
          aObj.subTitleIcons[iconIndex] +
          '">';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' +
    (aObj.subTitleTextRight || "") +
    "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // Content
  // =====================================================

  htmlStmt +=
    '<div class="conversation_content_wrapper">';

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont d-flex justify-content-center">';

  htmlStmt +=
    '<div class="screen_elements">';

  // =====================================================
  // Chart
  // =====================================================

  htmlStmt +=
    '<div class="frequency_chart">';

  // ===================================================
  // Chart header
  // ===================================================

  htmlStmt +=
    '<div class="chart_header_row">';

  htmlStmt +=
    '<div class="chart_corner"></div>';

  if (
    aObj.chart &&
    Array.isArray(aObj.chart.columns)
  ) {
    for (
      var columnIndex = 0;
      columnIndex <
      aObj.chart.columns.length;
      columnIndex++
    ) {
      var columnObj =
        aObj.chart.columns[columnIndex];

      htmlStmt +=
        '<div class="chart_column_header">' +
        columnObj.title +
        "</div>";
    }
  }

  htmlStmt += "</div>";

  // ===================================================
  // Chart rows
  // ===================================================

  if (
    aObj.chart &&
    Array.isArray(aObj.chart.rows)
  ) {
    for (
      var rowIndex = 0;
      rowIndex <
      aObj.chart.rows.length;
      rowIndex++
    ) {
      var rowObj =
        aObj.chart.rows[rowIndex];

      htmlStmt +=
        '<div class="chart_data_row">';

      // Person cell
      htmlStmt +=
        '<div class="chart_person_cell">';

      htmlStmt +=
        '<span class="chart_person_name">' +
        rowObj.name +
        "</span>";

      htmlStmt +=
        '<div class="chart_person_image_wrap">';

      htmlStmt +=
        '<img class="chart_person_image" ' +
        'src="' +
        rowObj.image +
        '" ' +
        'alt="' +
        rowObj.name +
        '">';

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      // Values
      for (
        var valueIndex = 0;
        valueIndex <
        aObj.chart.columns.length;
        valueIndex++
      ) {
        var valueColumn =
          aObj.chart.columns[valueIndex];

        htmlStmt +=
          '<div class="chart_value_cell">' +
          rowObj.values[
            valueColumn.key
          ] +
          "</div>";
      }

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  // =====================================================
  // Conversations
  // =====================================================

  htmlStmt +=
    '<div class="conversations_list">';

  if (
    Array.isArray(aObj.questions)
  ) {
    for (
      var questionIndex = 0;
      questionIndex <
      aObj.questions.length;
      questionIndex++
    ) {
      var questionObj =
        aObj.questions[questionIndex];

      var questionNumber =
        questionIndex + 1;

      htmlStmt +=
        '<div class="que conversation_row" ' +
        'id="que_' +
        questionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      // =================================================
      // Number
      // =================================================

      htmlStmt +=
        '<div class="conversation_number">' +
        questionObj.number +
        "</div>";

      // =================================================
      // Left person
      // =================================================

      htmlStmt +=
        '<div class="conversation_person conversation_person_left">';

      htmlStmt +=
        '<img src="' +
        questionObj.leftImage +
        '" alt="">';

      htmlStmt += "</div>";

      // =================================================
      // Left bubble
      // =================================================

      htmlStmt +=
        '<div class="speech_bubble speech_bubble_left">';

      htmlStmt +=
        buildConversationBubbleContent(
          questionObj.leftBubble
        );

      htmlStmt += "</div>";

      // =================================================
      // Right bubble
      // =================================================

      htmlStmt +=
        '<div class="speech_bubble speech_bubble_right">';

      htmlStmt +=
        buildConversationBubbleContent(
          questionObj.rightBubble
        );

      htmlStmt += "</div>";

      // =================================================
      // Right person
      // =================================================

      htmlStmt +=
        '<div class="conversation_person conversation_person_right">';

      htmlStmt +=
        '<img src="' +
        questionObj.rightImage +
        '" alt="">';

      htmlStmt += "</div>";

      // =================================================
      // Tick / Cross required by fillin.js
      // =================================================

      htmlStmt +=
        '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="tick">';

      htmlStmt +=
        '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt +=
        '<div class="cross">';

      htmlStmt +=
        '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // Append HTML
  // =====================================================

  $(".activity_area").append(
    htmlStmt
  );

  // =====================================================
  // Normalize student answers before Check Answer
  // Capture phase حتى يشتغل قبل fillin.js
  // =====================================================

  if (
    !window
      .conversationNormalizeListenerAdded
  ) {
    window
      .conversationNormalizeListenerAdded =
      true;

    document.addEventListener(
      "click",
      function (event) {
        var clickedElement =
          event.target;

        if (!clickedElement) {
          return;
        }

        var checkButton = null;

        if (
          clickedElement.closest
        ) {
          checkButton =
            clickedElement.closest(
              ".checkBtn"
            );
        }

        if (!checkButton) {
          return;
        }

        $(".activity_area")
          .find(
            ".conversation_input"
          )
          .each(function () {
            var normalizedValue =
              normalizeConversationAnswer(
                $(this).val()
              );

            $(this).val(
              normalizedValue
            );
          });
      },

      // Capture mode:
      // ينفذ قبل click handler الخاص بـfillin.js
      true
    );
  }

  // =====================================================
  // Loaded
  // =====================================================

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}