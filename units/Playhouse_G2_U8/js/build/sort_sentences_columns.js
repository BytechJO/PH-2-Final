function buildSortSentencesColumnsBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.conversation) ||
    !Array.isArray(aObj.columns)
  ) {
    return;
  }

  // =========================================================
  // Back navigation
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Next navigation
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Heading
  // =========================================================

  htmlStmt +=
    '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt +=
    '<img class="mainTitle" src="' +
    (aObj.mainTitle || "") +
    '">';

  if (aObj.mainTitleIcon) {
    var iconRight = "";

    if (
      aObj.mainTitleIconPos &&
      typeof aObj.mainTitleIconPos.right !==
        "undefined"
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

  htmlStmt += '<div class="activityHeading">';

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

  htmlStmt +=
    '<p class="subTitleTextRight">' +
    (aObj.subTitleTextRight || "") +
    "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // Main content
  // =========================================================

  htmlStmt +=
    '<div class="sort_sentences_content cont_ht_sf">';

  htmlStmt +=
    '<div class="sort_main_layout">';

  // =========================================================
  // Conversation section
  // =========================================================

  htmlStmt +=
    '<div class="conversation_section">';

  htmlStmt +=
    '<div class="small_conversation_card">';

  for (
    var rowIndex = 0;
    rowIndex < aObj.conversation.length;
    rowIndex++
  ) {
    var row = aObj.conversation[rowIndex];

    htmlStmt +=
      '<div class="small_conversation_row">';

    htmlStmt +=
      '<span class="small_speaker">' +
      escapeSortSentenceHtml(row.speaker || "") +
      "</span>";

    htmlStmt +=
      '<span class="small_conversation_text">';

    if (Array.isArray(row.parts)) {
      for (
        var partIndex = 0;
        partIndex < row.parts.length;
        partIndex++
      ) {
        var part = row.parts[partIndex];

        if (part.draggable === true) {
          htmlStmt +=
            '<span class="conversation_part draggable_sentence" ' +
            'id="source_' +
            escapeSortSentenceHtml(part.id) +
            '" ' +
            'data-sentence-id="' +
            escapeSortSentenceHtml(part.id) +
            '" ' +
            'data-answer="' +
            escapeSortSentenceHtml(
              part.answer || "",
            ) +
            '">';

          htmlStmt +=
            escapeSortSentenceHtml(part.text || "");

          htmlStmt += "</span>";
        } else {
          htmlStmt +=
            '<span class="conversation_part static_sentence">';

          htmlStmt +=
            escapeSortSentenceHtml(part.text || "");

          htmlStmt += "</span>";
        }

        if (partIndex < row.parts.length - 1) {
          htmlStmt += " ";
        }
      }
    }

    htmlStmt += "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // Columns
  // =========================================================

  htmlStmt +=
    '<div class="sentence_columns">';

  for (
    var columnIndex = 0;
    columnIndex < aObj.columns.length;
    columnIndex++
  ) {
    var column = aObj.columns[columnIndex];

    htmlStmt +=
      '<div class="sentence_column" ' +
      'data-column-id="' +
      escapeSortSentenceHtml(column.id) +
      '">';

    htmlStmt +=
      '<div class="sentence_column_title">' +
      escapeSortSentenceHtml(column.title || "") +
      "</div>";

    htmlStmt +=
      '<div class="sentence_drop_zone" ' +
      'data-column-id="' +
      escapeSortSentenceHtml(column.id) +
      '">';

    htmlStmt +=
      '<div class="empty_column_message">' +
      "Drop sentences here" +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(
    getCurrFileOrDirectory("file"),
  );
}

function escapeSortSentenceHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}