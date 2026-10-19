function buildLinkedWritingBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  var questions = aObj.questions || [];

  var linesPerCard = parseInt(aObj.linesPerCard, 10) || 3;

  var lineMaxlength = parseInt(aObj.lineMaxlength, 10) || 18;

  /* =====================================================
     Navigation
  ===================================================== */

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

  /* =====================================================
   Activity heading
===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle != undefined && aObj.mainTitle !== "") {
    htmlStmt +=
      '<div class="audioIcon off contant main_title_audio" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '" ' +
      'alt="Activity title">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon !== "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
          ? aObj.mainTitleIconPos.right
          : "-18px") +
        ';">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>";

  htmlStmt += aObj.subTitleTextLeft || aObj.subTitleText || "";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      htmlStmt +=
        '<img class="subtitle_icon" ' +
        'src="' +
        aObj.subTitleIcons[iconIndex] +
        '" ' +
        'alt="">';
    }
  }

  htmlStmt += "</p>";

  if (aObj.subTitleTextRight) {
    htmlStmt +=
      '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  /* Separate instruction */

  if (aObj.instructionText != undefined && aObj.instructionText != "") {
    htmlStmt += '<div class="instruction_title_container">';

    htmlStmt +=
      '<p class="instruction_title_text">' + aObj.instructionText + "</p>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>"; // إغلاق act_head_group

  /* =====================================================
     Activity body
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf linked_writing_options mx-auto">';

  htmlStmt += '<div class="all_cont linked_writing_all_cont">';

  htmlStmt += '<div class="linked_writing_cards">';

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var question = questions[questionIndex];

    var cardClass =
      question.cardClass || "dinosaur_card_" + (questionIndex + 1);

    htmlStmt +=
      '<div class="linked_writing_card ' +
      cardClass +
      '" ' +
      'data-card-index="' +
      questionIndex +
      '">';

    /* Image */

    if (question.image != undefined && question.image != "") {
      htmlStmt += '<div class="linked_dinosaur_image_holder">';

      htmlStmt +=
        '<img class="linked_dinosaur_image" ' +
        'src="' +
        question.image +
        '" ' +
        'alt="' +
        (question.alt || "Dinosaur") +
        '">';

      htmlStmt += "</div>";
    }

    /* Inputs */

    htmlStmt += '<div class="linked_inputs_group">';

    for (var lineIndex = 0; lineIndex < linesPerCard; lineIndex++) {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="linked_writing_input" ' +
        'maxlength="' +
        lineMaxlength +
        '" ' +
        'data-card-index="' +
        questionIndex +
        '" ' +
        'data-line-index="' +
        lineIndex +
        '" ' +
        'autocomplete="off" ' +
        'autocapitalize="none" ' +
        'spellcheck="false" ' +
        'aria-label="Writing line ' +
        (lineIndex + 1) +
        '">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
