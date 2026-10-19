function buildLookAndWriteBodyParts(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    // =====================================================
    // Back / Next
    // =====================================================
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =====================================================
    // Header
    // نفس أسماء الكلاسات الموجودة عندك
    // =====================================================
    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        '">';
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

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
      for (
        var iconIndex = 0;
        iconIndex < aObj.subTitleIcons.length;
        iconIndex++
      ) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[iconIndex] + "'/>";
      }
    }

    htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =====================================================
    // Activity wrapper
    // =====================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-column align-items-center">';

    // =====================================================
    // Word bank
    // =====================================================
    if (
      aObj.words != undefined &&
      aObj.words != null &&
      aObj.words.length > 0
    ) {
      htmlStmt +=
        '<div class="word_opt_sticky d-flex flex-wrap justify-content-center">';

      htmlStmt += '<div class="word_options">';

      for (var wordIndex = 0; wordIndex < aObj.words.length; wordIndex++) {
        htmlStmt +=
          '<div class="clue_word">' + aObj.words[wordIndex] + "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =====================================================
    // Images group
    // =====================================================
    htmlStmt +=
      '<div class="group_elm body_images_group d-flex justify-content-center align-items-start">';

    for (
      var questionIndex = 0;
      questionIndex < numOfQuestions;
      questionIndex++
    ) {
      var questionObj = aObj.questions[questionIndex];

      var questionNumber = questionIndex + 1;

      htmlStmt +=
        '<div class="que body_image_card" ' +
        'id="que_' +
        questionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      // الصورة
      htmlStmt +=
        '<img class="body_person_image" ' +
        'src="' +
        questionObj.image +
        '" ' +
        'alt="">';

      // ===================================================
      // Inputs
      // ===================================================
      for (
        var lineIndex = 0;
        lineIndex < questionObj.lines.length;
        lineIndex++
      ) {
        var lineObj = questionObj.lines[lineIndex];

        htmlStmt +=
          '<div class="answer_line answer_line_' +
          lineObj.side +
          '" ' +
          'style="' +
          "top:" +
          lineObj.top +
          "%;" +
          "left:" +
          lineObj.left +
          "%;" +
          "width:" +
          lineObj.width +
          "%;" +
          '">';

        htmlStmt +=
          "<input " +
          'class="body_part_input text_input_area" ' +
          'type="text" ' +
          'maxlength="' +
          lineObj.maxlength +
          '" ' +
          'data-type="text" ' +
          'data-answer="' +
          lineObj.answer +
          '" ' +
          'autocomplete="off" ' +
          'spellcheck="false">';

        htmlStmt += '<span class="line_border"></span>';

        // أيقونة مستقلة لكل input
        htmlStmt += '<div class="input_result_icon">';

        htmlStmt += '<div class="tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += '<div class="cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> look and write body parts Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
