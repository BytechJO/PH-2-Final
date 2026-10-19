function buildUnscrambleCircleBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  /* =========================================================
     Back / Next navigation
  ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =========================================================
     Main title
  ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Activity wrapper
  ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="unscramble_circle_activity">';

  /* =========================================================
     Question 1
  ========================================================= */

  htmlStmt += '<section class="activity_section first_activity_section">';

  htmlStmt +=
    '<div class="section_title audioIcon off contant" ' +
    'data-audio="' +
    aObj.firstQuestion.titleAudio +
    '">';

  htmlStmt += aObj.firstQuestion.title;

  htmlStmt += "</div>";

  htmlStmt += '<div class="first_question_rows">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.firstQuestion.questions.length;
    questionIndex++
  ) {
    var question = aObj.firstQuestion.questions[questionIndex];

    htmlStmt +=
      '<div class="unscramble_row" ' +
      'data-row-index="' +
      questionIndex +
      '">';

    htmlStmt +=
      '<div class="sentence_number">' + Number(questionIndex + 1) + "</div>";

    htmlStmt +=
      '<div class="scrambled_sentence audioIcon off contant" ' +
      'data-audio="' +
      question.audio +
      '">';

    htmlStmt += question.scrambled;

    htmlStmt += "</div>";

    htmlStmt += '<div class="writing_area">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="unscramble_input" ' +
      'data-index="' +
      questionIndex +
      '" ' +
      'maxlength="' +
      question.maxlength +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'aria-label="Write sentence ' +
      Number(questionIndex + 1) +
      '"' +
      ">";

    htmlStmt += "</div>";

    htmlStmt += '<div class="first_feedback row_feedback">';

    htmlStmt +=
      "<img " +
      'class="feedback_tick" ' +
      'src="../images/icons/check_btn.png" ' +
      'alt="Correct"' +
      ">";

    htmlStmt +=
      "<img " +
      'class="feedback_cross" ' +
      'src="../images/icons/cross_btn.png" ' +
      'alt="Incorrect"' +
      ">";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  /* =========================================================
     Question 1 old-style controls
  ========================================================= */

  htmlStmt += '<div class="section_old_controls first_old_controls">';

  htmlStmt += '<div class="local_check_holder"></div>';

  htmlStmt += '<div class="local_reset_holder"></div>';

  htmlStmt += "</div>";

  htmlStmt += "</section>";

  /* =========================================================
     Divider
  ========================================================= */

  htmlStmt += '<div class="activity_divider"></div>';

  /* =========================================================
     Question 2
  ========================================================= */

  htmlStmt += '<section class="activity_section second_activity_section">';

  htmlStmt +=
    '<div class="section_title audioIcon off contant" ' +
    'data-audio="' +
    aObj.secondQuestion.titleAudio +
    '">';

  htmlStmt += aObj.secondQuestion.title;

  htmlStmt += "</div>";

  htmlStmt += '<div class="circle_sentences_holder">';

  for (
    var secondIndex = 0;
    secondIndex < aObj.firstQuestion.questions.length;
    secondIndex++
  ) {
    htmlStmt +=
      '<div class="circle_sentence_row" ' + 'data-index="' + secondIndex + '">';

    htmlStmt +=
      '<div class="sentence_number">' + Number(secondIndex + 1) + "</div>";

    htmlStmt +=
      '<div class="live_sentence_words" ' + 'data-index="' + secondIndex + '">';

    htmlStmt +=
      '<span class="live_placeholder">' +
      "Write the sentence above." +
      "</span>";

    htmlStmt += "</div>";

    htmlStmt += '<div class="second_feedback row_feedback">';

    htmlStmt +=
      "<img " +
      'class="feedback_tick" ' +
      'src="../images/icons/check_btn.png" ' +
      'alt="Correct"' +
      ">";

    htmlStmt +=
      "<img " +
      'class="feedback_cross" ' +
      'src="../images/icons/cross_btn.png" ' +
      'alt="Incorrect"' +
      ">";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  /* =========================================================
     Question 2 old-style controls
  ========================================================= */

  htmlStmt += '<div class="section_old_controls second_old_controls">';

  htmlStmt += '<div class="local_check_holder"></div>';

  htmlStmt += '<div class="local_reset_holder"></div>';

  htmlStmt += "</div>";

  htmlStmt += "</section>";

  /* =========================================================
     Close wrappers
  ========================================================= */

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  /*
    تشغيل منطق النشاط بعد بناء العناصر.
  */

  initUnscrambleCircleActivity(aObj);

  /*
    إبلاغ النظام أن بناء الصفحة انتهى.
  */

  if (
    typeof setLoadedStatus === "function" &&
    typeof getCurrFileOrDirectory === "function"
  ) {
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
