function buildReadChooseAdjectiveBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  var content = aObj.content || [];
  var questionNumber = 0;

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
       Heading
    ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '" alt="">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        ';" alt="">';
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

  htmlStmt += '<div class="page_sub_title d-flex align-items-center">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      htmlStmt +=
        '<img class="subtitle_icon" ' +
        'src="' +
        aObj.subTitleIcons[iconIndex] +
        '" alt="">';
    }
  }

  if (aObj.subTitleTextRight) {
    htmlStmt +=
      '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
       Activity content
    ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf read_choose_activity">';

  htmlStmt += '<div class="all_cont read_choose_all_cont">';

  htmlStmt += '<div class="read_choose_wrapper">';

  /* Instruction */

  htmlStmt +=
    '<div class="read_choose_instruction audioTile" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += aObj.instruction || "";

  htmlStmt += "</div>";

  /* Paragraph */

  htmlStmt += '<div class="read_choose_paragraph">';

  for (var contentIndex = 0; contentIndex < content.length; contentIndex++) {
    var contentItem = content[contentIndex];

    if (contentItem.type == "text") {
      htmlStmt +=
        '<span class="paragraph_text">' + contentItem.html + "</span>";
    }

    if (contentItem.type == "choice") {
      questionNumber++;

      htmlStmt +=
        '<span class="que inline_question" ' +
        'id="que_' +
        questionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      htmlStmt += '<span class="inline_choice_group">';

      for (
        var optionIndex = 0;
        optionIndex < contentItem.options.length;
        optionIndex++
      ) {
        htmlStmt +=
          '<button type="button" ' +
          'class="pick inline_choice" ' +
          'id="pick_' +
          questionNumber +
          "_" +
          (optionIndex + 1) +
          '" ' +
          'data-option="' +
          (optionIndex + 1) +
          '" ' +
          'aria-pressed="false">';

        htmlStmt += contentItem.options[optionIndex];

        htmlStmt += "</button>";

        if (optionIndex < contentItem.options.length - 1) {
          htmlStmt += '<span class="choice_separator"> / </span>';
        }
      }

      htmlStmt += "</span>";

      /* Feedback icon */

      htmlStmt += '<span class="icon_wrap_holder">';

      htmlStmt += '<span class="icon_wrap">';

      htmlStmt += '<span class="tick iconcontainer">';

      htmlStmt +=
        '<img src="../images/icons/check_btn.png" ' + 'alt="Correct">';

      htmlStmt += "</span>";

      htmlStmt += '<span class="cross iconcontainer">';

      htmlStmt +=
        '<img src="../images/icons/cross_btn.png" ' + 'alt="Incorrect">';

      htmlStmt += "</span>";

      htmlStmt += "</span>";
      htmlStmt += "</span>";

      htmlStmt += "</span>";
    }
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
