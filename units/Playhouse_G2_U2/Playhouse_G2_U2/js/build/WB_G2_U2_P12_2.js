function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // Back / Next buttons
    // =========================================================
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

    // =========================================================
    // Heading
    // نفس الهيدر ونفس أسماء الكلاسات
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
    // Main activity area
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements d-flex flex-column">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-column justify-content-center">';

    // =========================================================
    // Questions
    // =========================================================
    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];
      var questionNumber = x + 1;

      htmlStmt +=
        '<div class="que mcq_word_group d-flex align-items-center" ' +
        'id="que_' +
        questionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      // Question number
      htmlStmt += '<div class="q_num_space">' + questionNumber + "</div>";

      // Options row
      htmlStmt +=
        '<div class="pick_set ans_grup d-flex justify-content-between align-items-center" ' +
        'id="pick_set_' +
        questionNumber +
        '">';

      for (
        var optionIndex = 0;
        optionIndex < tmpObj.options.length;
        optionIndex++
      ) {
        var optionObj = tmpObj.options[optionIndex];
        var optionNumber = optionIndex + 1;

        htmlStmt +=
          '<div class="pick word_pick roundedCorners" ' +
          'id="pick_' +
          questionNumber +
          "_" +
          optionNumber +
          '">';

        htmlStmt += '<div class="txt_box">' + optionObj.text + "</div>";

        if (
          optionObj.audio != undefined &&
          optionObj.audio != "" &&
          optionObj.audio != "no"
        ) {
          htmlStmt +=
            '<div class="audioIcon off contant option_audio" ' +
            'data-audio="' +
            optionObj.audio +
            '">';

          htmlStmt +=
            '<img src="../images/icons/sound-wave.png" ' +
            'class="audio_icon">';

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // Tick / Cross
      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> mcq Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
