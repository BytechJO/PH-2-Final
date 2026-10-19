function buildListenDinosaursColourBoxesBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  var questions = aObj.questions || [];

  /* =====================================================
       Navigation buttons
    ===================================================== */

  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/back_btn.png" />';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/next_btn.png" />';
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
      '<img class="mainTitle" src="' +
      aObj.mainTitle +
      '" alt="Activity title">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon !== "") {
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
  htmlStmt += aObj.subTitleTextLeft || "";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (var i = 0; i < aObj.subTitleIcons.length; i++) {
      htmlStmt +=
        '<img class="subtitle_icon" src="' +
        aObj.subTitleIcons[i] +
        '" alt="">';
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

  /* =====================================================
       Questions
    ===================================================== */

  htmlStmt += '<div class="options dinosaurs_colour_activity">';
  htmlStmt += '<div class="dinosaurs_questions">';

  for (var q = 0; q < questions.length; q++) {
    var question = questions[q];
    var options = question.options || [];

    htmlStmt +=
      '<div class="que dinosaur_question" ' +
      'id="que_' +
      (q + 1) +
      '" ' +
      'data-qno="' +
      (q + 1) +
      '">';

    /* Image */

    htmlStmt += '<div class="dinosaur_image_holder">';

    htmlStmt +=
      '<img class="dinosaur_image" ' +
      'src="' +
      question.image +
      '" ' +
      'alt="' +
      (question.alt || "Dinosaur") +
      '">';

    htmlStmt += "</div>";

    /* Choices */

    htmlStmt += '<div class="dinosaur_options">';

    for (var o = 0; o < options.length; o++) {
      htmlStmt +=
        '<button type="button" ' +
        'class="pick dinosaur_option" ' +
        'id="pick_' +
        (q + 1) +
        "_" +
        (o + 1) +
        '" ' +
        'data-question="' +
        (q + 1) +
        '" ' +
        'data-option="' +
        (o + 1) +
        '" ' +
        'aria-pressed="false">';

      htmlStmt += '<span class="option_text">' + options[o].text + "</span>";

      htmlStmt += "</button>";
    }

    htmlStmt += "</div>";

    /* Feedback icon */

    htmlStmt += '<div class="icon_wrap_holder">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick iconcontainer">';
    htmlStmt += '<img src="../images/icons/check_btn.png" alt="Correct">';
    htmlStmt += "</div>";

    htmlStmt += '<div class="cross iconcontainer">';
    htmlStmt += '<img src="../images/icons/cross_btn.png" alt="Incorrect">';
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
