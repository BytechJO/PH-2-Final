function buildColourCorrectWordBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    console.error("colour_correct_word_data is missing");

    return;
  }

  /* =========================================================
     Back / Next
     ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" alt="Back" />';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" alt="Next" />';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =========================================================
     Header
     نفس buildReadingHTML
     ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant " ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    htmlStmt += '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '">';
  }

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    var iconRight = "0px";

    if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right) {
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

  htmlStmt += "<div class='page_sub_title d-flex'>";

  htmlStmt += "<p> " + (aObj.subTitleTextLeft || "") + " </p>";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons]) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }
  }

  htmlStmt +=
    "<p class='subTitleTextRight'>" + (aObj.subTitleTextRight || "") + " </p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Activity area
     ========================================================= */

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto colour_correct_word_options">';

  htmlStmt += '<div class="all_cont colour_correct_word_all_cont">';

  htmlStmt += '<div class="screen_elements colour_correct_word_screen">';

  htmlStmt += '<div class="colour_correct_word_activity">';

  /* =========================================================
     Questions
     ========================================================= */

  for (var i = 0; i < aObj.questions.length; i++) {
    var question = aObj.questions[i];

    htmlStmt +=
      '<div class="que colour_correct_word_question" ' +
      'data-qno="' +
      (i + 1) +
      '" ' +
      'data-answer="' +
      (question.answer || "") +
      '">';

    /* Question number */

    htmlStmt +=
      '<div class="colour_correct_word_number">' +
      (question.number || i + 1) +
      "</div>";

    /* Sentence */

    htmlStmt +=
      '<div class="colour_correct_word_sentence">' +
      (question.text || "") +
      "</div>";

    /* Options */

    htmlStmt += '<div class="colour_correct_word_answers">';

    var options = question.options || [];

    for (var j = 0; j < options.length; j++) {
      var option = options[j];

      var optionText = typeof option === "string" ? option : option.text;

      htmlStmt +=
        '<button type="button" ' +
        'class="colour_correct_word_option" ' +
        'data-value="' +
        optionText +
        '">';

      htmlStmt += optionText;

      htmlStmt += "</button>";

      if (j < options.length - 1) {
        htmlStmt += '<span class="colour_correct_word_separator">/</span>';
      }
    }

    htmlStmt += '<span class="colour_correct_word_period">.</span>';

    htmlStmt += "</div>";

    /* =======================================================
       Tick / Cross
       ======================================================= */

    htmlStmt += '<div class="colour_correct_word_feedback">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png" alt="Correct" />';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png" alt="Wrong" />';

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  /* =========================================================
     Close containers
     ========================================================= */

  htmlStmt += "</div>"; // colour_correct_word_activity
  htmlStmt += "</div>"; // screen_elements
  htmlStmt += "</div>"; // all_cont
  htmlStmt += "</div>"; // options

  /* =========================================================
     Append
     ========================================================= */

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> colour correct word Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
