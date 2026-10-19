function buildLookWritePrepositionsBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("Invalid look_write_prepositions_data");
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

  htmlStmt += '<div class="act_head_group justify-content-center">';

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

    if (
      aObj.mainTitleIconPos !== undefined &&
      aObj.mainTitleIconPos !== null &&
      aObj.mainTitleIconPos.right !== undefined
    ) {
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

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
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
    "look_write_screen " +
    "d-flex flex-wrap " +
    "justify-content-center " +
    "align-items-center h-100" +
    '">';

  /* =====================================================
     Word bank
  ===================================================== */

  if (Array.isArray(aObj.wordBank) && aObj.wordBank.length > 0) {
    htmlStmt += '<div class="preposition_word_bank">';

    for (var wordIndex = 0; wordIndex < aObj.wordBank.length; wordIndex++) {
      htmlStmt +=
        '<span class="preposition_word">' +
        aObj.wordBank[wordIndex] +
        "</span>";
    }

    htmlStmt += "</div>";
  }

  /* =====================================================
     Questions
  ===================================================== */

  htmlStmt += '<div class="look_write_questions">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    htmlStmt += buildLookWriteQuestion(aObj.questions[questionIndex]);
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  console.log("Look write prepositions built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Build one question row
========================================================= */

function buildLookWriteQuestion(question) {
  var htmlStmt = "";

  var exampleClass = question.example === true ? " example_question" : "";

  htmlStmt +=
    '<div class="' +
    "look_write_question que" +
    exampleClass +
    '" data-qno="' +
    question.qno +
    '">';

  /* Question number */

  htmlStmt += '<div class="look_write_qno">' + question.qno + "</div>";

  /* Picture */

  htmlStmt += '<div class="look_write_image_wrap">';

  htmlStmt += '<img src="' + question.image + '" alt="">';

  htmlStmt += "</div>";

  /* Question bubble */

  htmlStmt += '<div class="speech_bubble question_bubble">';

  htmlStmt += '<span class="speech_text">' + question.question + "</span>";

  htmlStmt += "</div>";

  /* Answer bubble */

  htmlStmt += '<div class="speech_bubble answer_bubble">';

  if (question.example === true) {
    htmlStmt += '<span class="example_answer">' + question.answer + "</span>";
  } else {
    htmlStmt +=
      "<textarea " +
      'class="preposition_answer_input" ' +
      'rows="2" ' +
      'placeholder="Write your answer" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'data-type="text" ' +
      'aria-label="Answer for question ' +
      question.qno +
      '">' +
      "</textarea>";
  }

  htmlStmt += '<div class="icon_wrap_holder">';

  htmlStmt += '<div class="icon_wrap">';

  htmlStmt += '<div class="tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  return htmlStmt;
}
