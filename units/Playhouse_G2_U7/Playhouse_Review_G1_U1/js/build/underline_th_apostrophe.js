function buildUnderlineThApostropheBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

  // =========================================================
  // Back button
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Next button
  // =========================================================

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
			htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				}
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
  // =========================================================
  // Main content
  // =========================================================

  htmlStmt += '<div class="underline_apostrophe_questions">';

  for (var questionIndex = 0; questionIndex < numOfQuestions; questionIndex++) {
    var question = aObj.questions[questionIndex];

    htmlStmt +=
      '<div class="underline_apostrophe_question" ' +
      'data-question-index="' +
      questionIndex +
      '">';

    htmlStmt +=
      '<div class="underline_question_number">' + question.number + "</div>";

    htmlStmt += '<div class="underline_apostrophe_sentence">';

    for (var partIndex = 0; partIndex < question.parts.length; partIndex++) {
      var part = question.parts[partIndex];

      if (part.type === "text") {
        htmlStmt +=
          '<span class="normal_text">' +
          escapeUnderlineThHtml(part.text) +
          "</span>";
      }

      if (part.type === "underline") {
        htmlStmt +=
          '<span class="underline_target" ' +
          'data-answer-id="' +
          part.id +
          '">' +
          escapeUnderlineThHtml(part.text) +
          "</span>";
      }

      if (part.type === "apostrophe") {
        htmlStmt +=
          '<span class="apostrophe_target" ' +
          'data-answer-id="' +
          part.id +
          '">' +
          '<span class="apostrophe_value">’</span>' +
          "</span>";
      }
    }

    htmlStmt += "</div>";

    // =======================================================
    // Feedback
    // =======================================================

    htmlStmt += '<div class="underline_question_feedback">';

    htmlStmt +=
      '<div class="underline_feedback_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="underline_feedback_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  console.log("htmlStmt >> underline_th_apostrophe Built");

  $(".activity_area").append(htmlStmt);

  bindUnderlineThApostropheEvents(underline_th_apostrophe_data);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function escapeUnderlineThHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
