function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // Navigation
    // =========================================================

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" alt="Back">';

    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" alt="Next">';

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

    htmlStmt +=
      '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '" alt="">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      var iconRight = "-20px";

      if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right !== undefined) {
        iconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';" alt="">';
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

    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (Array.isArray(aObj.subTitleIcons)) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '" alt="">';
      }
    }

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Main activity content
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont conversation_activity_cont">';

    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm conversation_fillin_grid">';

    // =========================================================
    // Questions
    // =========================================================

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que conversation_card" ' + 'data-qno="' + (x + 1) + '">';

      // =====================================================
      // Question number and question line
      // =====================================================

      htmlStmt += '<div class="conversation_question_row">';

      if (aObj.numbering !== "none") {
        htmlStmt += '<div class="q_num_space conversation_number">';

        if (aObj.numbering === "alphabet") {
          htmlStmt +=
            String.fromCharCode(96 + x + parseInt(aObj.numberstartfrom)) + ".";
        } else {
          htmlStmt += x + parseInt(aObj.numberstartfrom) + ".";
        }

        htmlStmt += "</div>";
      }

      htmlStmt +=
        '<div class="conversation_sentence question_sentence background_audio">';

      htmlStmt += buildConversationText(
        tmpObj.questionText || "",
        tmpObj,
        0,
        "question_input",
      );

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      // =====================================================
      // Image
      // =====================================================

      if (
        tmpObj.image !== undefined &&
        tmpObj.image !== "" &&
        tmpObj.image !== "no"
      ) {
        htmlStmt += '<div class="conversation_image_space">';

        htmlStmt += '<img src="' + tmpObj.image + '" alt="">';

        htmlStmt += "</div>";
      }

      // =====================================================
      // Answer line
      // =====================================================

      htmlStmt += '<div class="conversation_answer_row">';

      htmlStmt +=
        '<div class="conversation_sentence answer_sentence background_audio">';

      var questionBlankCount = countConversationBlanks(
        tmpObj.questionText || "",
      );

      htmlStmt += buildConversationText(
        tmpObj.answerText || "",
        tmpObj,
        questionBlankCount,
        "answer_input",
      );

      htmlStmt += "</div>";

      // =====================================================
      // Tick and cross required by fillin.js
      // =====================================================

      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png" alt="">' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png" alt="">' +
        "</div>";

      htmlStmt += "</div>";
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

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =============================================================
// Build text and replace [_] with inputs
// =============================================================

function buildConversationText(text, questionObj, inputStartIndex, inputClass) {
  var html = "";
  var parts = text.split("[_]");
  var currentInputIndex = inputStartIndex;

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] !== "") {
      var audioPath = "";

      if (Array.isArray(questionObj.textaudios)) {
        if (inputClass === "question_input") {
          audioPath = questionObj.textaudios[0] || "";
        } else {
          audioPath = questionObj.textaudios[1] || "";
        }
      }

      html +=
        '<span class="audioIcon txt-audioIcon off contant conversation_text_part" ' +
        'data-audio="' +
        audioPath +
        '">';

      html += parts[i];

      html += "</span>";
    }

    if (i < parts.length - 1) {
      html +=
        "<input " +
        'class="text_input_area conversation_input ' +
        inputClass +
        '" ' +
        'type="text" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        'maxlength="' +
        (questionObj.maxlength || 100) +
        '" ' +
        'data-type="' +
        (questionObj.type || "text") +
        '" ' +
        'data-input-index="' +
        currentInputIndex +
        '">';

      currentInputIndex++;
    }
  }

  return html;
}

// =============================================================
// Count placeholders
// =============================================================

function countConversationBlanks(text) {
  var matches = text.match(/\[_]/g);

  return matches ? matches.length : 0;
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
