function buildFillLettersTickPictureBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("Invalid fill_letters_tick_picture_data");

    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_left " +
    "subFooterNav backNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_right " +
    "subFooterNav nextNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

  htmlStmt += '<div class="' + "act_head_group justify-content-center" + '">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

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
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      iconRight +
      ';">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Subtitle
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant audioQuestionTitle" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  if (aObj.title_position === "under") {
    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  } else {
    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Main wrappers
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="' +
    "all_cont justify-content-start " +
    "justify-content-sm-center" +
    '">';

  htmlStmt +=
    '<div class="' +
    "screen_elements " +
    "fill_letters_tick_screen " +
    "d-flex flex-wrap " +
    "justify-content-center " +
    "align-items-center h-100" +
    '">';

  htmlStmt += '<div class="fill_letters_questions">';

  /* =====================================================
     Questions
  ===================================================== */

  for (var qIndex = 0; qIndex < aObj.questions.length; qIndex++) {
    htmlStmt += buildFillLettersTickQuestion(aObj.questions[qIndex], qIndex);
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  console.log("Fill letters tick picture built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Build one question
========================================================= */

function buildFillLettersTickQuestion(question, questionIndex) {
  var htmlStmt = "";

  htmlStmt +=
    '<div class="' +
    "fill_letters_question que" +
    '" data-qno="' +
    question.qno +
    '" data-question-index="' +
    questionIndex +
    '">';

  /* Question number */

  htmlStmt += '<div class="fill_letters_qno">' + question.qno + "</div>";

  /* Sentence */

  htmlStmt += '<div class="fill_letters_sentence_wrap">';

  htmlStmt += '<div class="fill_letters_sentence">';

  htmlStmt +=
    '<span class="sentence_before">' + question.sentenceBefore + "</span>";

  htmlStmt += '<span class="letters_inputs_wrap">';

  for (
    var letterIndex = 0;
    letterIndex < question.missingLetters.length;
    letterIndex++
  ) {
    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="missing_letter_input" ' +
      'maxlength="1" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'data-letter-index="' +
      letterIndex +
      '" data-type="text" ' +
      'aria-label="Missing letter ' +
      (letterIndex + 1) +
      " for question " +
      question.qno +
      '">';
  }

  htmlStmt += "</span>";

  htmlStmt +=
    '<span class="sentence_after">' + question.sentenceAfter + "</span>";

  htmlStmt += "</div>";

  /* Word result */

  htmlStmt += '<div class="word_result_wrap">';

  htmlStmt += '<div class="word_tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="word_cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* Pictures */

  htmlStmt += '<div class="fill_letters_pictures">';

  for (
    var pictureIndex = 0;
    pictureIndex < question.pictures.length;
    pictureIndex++
  ) {
    var picture = question.pictures[pictureIndex];

    htmlStmt +=
      '<div class="' +
      "tick_picture_card" +
      '" data-picture-index="' +
      pictureIndex +
      '" tabindex="0" ' +
      'role="button">';

    htmlStmt += '<div class="tick_picture_box">';

    htmlStmt += '<img src="' + picture.image + '" alt="">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="picture_tick_box">';

    htmlStmt += '<span class="picture_tick_mark">✓</span>';

    htmlStmt += "</div>";

    htmlStmt += '<div class="picture_result_wrap">';

    htmlStmt += '<div class="picture_result_tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="picture_result_cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  return htmlStmt;
}
