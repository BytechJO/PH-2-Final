function buildColourCvcPastBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("Invalid colour_cvc_past_data");
    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/back_btn.png">';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/next_btn.png">';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =====================================================
     Header
  ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (aObj.mainTitleIcon) {
    var iconRight = "-18px";

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

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  for (var iconIndex = 0; iconIndex < aObj.subTitleIcons.length; iconIndex++) {
    htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
  }

  htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Main wrappers
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt += '<div class="screen_elements cvc_colour_screen">';

  /* =====================================================
     Colour toolbar
  ===================================================== */

  htmlStmt += '<div class="cvc_colour_toolbar">';

  htmlStmt += '<span class="toolbar_title">Colours</span>';

  htmlStmt += '<div class="cvc_colour_palette">';

  for (var colourIndex = 0; colourIndex < aObj.colours.length; colourIndex++) {
    var colour = aObj.colours[colourIndex];

    var selectedClass = colour === aObj.defaultColour ? " selected" : "";

    htmlStmt +=
      '<button type="button" ' +
      'class="cvc_colour_button' +
      selectedClass +
      '" ' +
      'data-colour="' +
      colour +
      '" ' +
      'style="background-color:' +
      colour +
      ';" ' +
      'aria-label="Select colour">' +
      "</button>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Questions
  ===================================================== */

  htmlStmt += '<div class="cvc_questions_group">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var question = aObj.questions[questionIndex];

    htmlStmt +=
      '<div class="cvc_question" ' + 'data-qno="' + (questionIndex + 1) + '">';

    htmlStmt +=
      '<div class="cvc_word audioIcon off contant" ' +
      'data-audio="' +
      (question.audio || "") +
      '">';

    var letters = question.word.split("");

    for (var letterIndex = 0; letterIndex < letters.length; letterIndex++) {
      htmlStmt +=
        '<button type="button" ' +
        'class="cvc_letter" ' +
        'data-letter-index="' +
        letterIndex +
        '">' +
        letters[letterIndex] +
        "</button>";
    }

    htmlStmt += "</div>";

    htmlStmt += '<div class="cvc_answer_row">';

    htmlStmt +=
      '<input type="text" ' +
      'class="cvc_answer_input" ' +
      'maxlength="50" ' +
      'autocomplete="off" ' +
      'spellcheck="false">';

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
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
