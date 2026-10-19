function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

  var numberofCols = parseInt(aObj.numberofcolumns || 1, 10);

  var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

  var currQueNum = 0;

  /* =========================================================
     Back
     ========================================================= */

  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =========================================================
     Next
     ========================================================= */

  htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =========================================================
     Heading
     ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
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

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += "<div class='page_sub_title d-flex'>";

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
  }

  htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
     Activity area
     ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt +=
    '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

  /* =========================================================
     Columns
     ========================================================= */

  for (var x = 0; x < numberofCols; x++) {
    htmlStmt += '<div class="tick_group d-flex flex-column">';

    for (var y = 0; y < numOfQinCol; y++) {
      if (currQueNum >= numOfQuestions) {
        break;
      }

      currQueNum++;

      var question = aObj.questions[currQueNum - 1];

      if (question === undefined || question === null) {
        continue;
      }

      /* =========================================================
         Single question
         ========================================================= */

      htmlStmt +=
        '<div class="que ck_question_row background_audio" ' +
        'id="que_' +
        currQueNum +
        '" ' +
        'data-qno="' +
        currQueNum +
        '">';

      /* =========================================================
         Image
         ========================================================= */

      htmlStmt += '<div class="ck_image_holder">';

      htmlStmt +=
        '<span class="ck_question_number">' +
        (question.number || currQueNum) +
        "</span>";

      if (
        question.image !== undefined &&
        question.image !== "" &&
        question.image !== "no"
      ) {
        htmlStmt +=
          '<img class="ck_question_image" ' +
          'src="' +
          question.image +
          '" ' +
          'alt="">';
      }

      htmlStmt += "</div>";

      /* =========================================================
         Picks
         ========================================================= */

      htmlStmt += '<div class="picks_grp ck_picks_group">';

      if (question.options && question.options.length > 0) {
        for (var opt = 0; opt < question.options.length; opt++) {
          var option = question.options[opt];

          htmlStmt +=
            "<div " +
            'id="pick_' +
            currQueNum +
            "_" +
            (opt + 1) +
            '" ' +
            'class="pick magic_e_word">';

          htmlStmt += '<div class="txt word_text_holder">';

          htmlStmt +=
            '<span class="txt_box">' + (option.text || "") + "</span>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";

      /* =========================================================
         Tick / Cross
         الـActivity الرئيسي يتحكم فيهم
         ========================================================= */

      htmlStmt += '<div class="icon_wrap p-2">';

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

  console.log("htmlStmt >> CK Words MCQ Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
