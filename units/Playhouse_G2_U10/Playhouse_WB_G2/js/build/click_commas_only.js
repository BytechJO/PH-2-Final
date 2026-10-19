function buildClickCommasOnlyBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    /*
    =========================================================
    Previous and Next
    =========================================================
    */

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

    /*
    =========================================================
    Heading
    =========================================================
    */

    htmlStmt += '<div class="act_head_group justify-content-center">';

    /*
    =========================================================
    Main title
    =========================================================
    */

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="' +
        1 +
        '" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt += '<div class="q-type-img-container">';

      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

      if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
        htmlStmt +=
          '<img class="mainTitleIcon" ' +
          'src="' +
          aObj.mainTitleIcon +
          '" ' +
          'style="right: ' +
          aObj.mainTitleIconPos.right +
          ';">';
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    /*
    =========================================================
    Subtitle
    =========================================================
    */

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="' +
      1 +
      '" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";

      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

      if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";

      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

      if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /*
    =========================================================
    Activity content
    =========================================================
    */

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto click_commas_only_options">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center click_commas_only_all_cont">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-wrap justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm click_commas_only_wrapper">';

    htmlStmt += '<div class="ques click_commas_only_questions">';

    /*
    =========================================================
    Questions
    =========================================================
    */

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      var words = tmpObj.sentence.trim().split(/\s+/);

      htmlStmt +=
        '<div class="que click_commas_only_question" ' +
        'data-qno="' +
        (x + 1) +
        '" ' +
        'data-question-id="' +
        tmpObj.id +
        '">';

      /*
      =======================================================
      Question content
      =======================================================
      */

      htmlStmt += '<div class="click_commas_only_question_content">';

      /*
      =======================================================
      Number
      =======================================================
      */

      htmlStmt += '<div class="q_num_space click_commas_question_number">';

      htmlStmt += tmpObj.id + ".";

      htmlStmt += "</div>";

      /*
      =======================================================
      Sentence
      =======================================================
      */

      htmlStmt += '<div class="click_commas_only_sentence">';

      for (var wordIndex = 0; wordIndex < words.length; wordIndex++) {
        htmlStmt +=
          '<span class="click_commas_only_word">' +
          words[wordIndex] +
          "</span>";

        /*
        لا نضيف مساحة فاصلة بعد آخر كلمة
        */

        if (wordIndex < words.length - 1) {
          htmlStmt +=
            "<button " +
            'type="button" ' +
            'class="comma_click_space" ' +
            'data-question-id="' +
            tmpObj.id +
            '" ' +
            'data-after-index="' +
            wordIndex +
            '">';

          htmlStmt += '<span class="comma_symbol">,</span>';

          htmlStmt += "</button>";
        }
      }

      htmlStmt += "</div>";

      /*
      =======================================================
      Tick and Cross
      =======================================================
      */

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

      /*
      =======================================================
      Optional image
      =======================================================
      */

      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
        htmlStmt +=
          '<div class="click_commas_only_image_holder ' +
          (tmpObj.imageClass || "") +
          '">';

        htmlStmt += '<img src="' + tmpObj.image + '" alt="">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> click commas only Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
