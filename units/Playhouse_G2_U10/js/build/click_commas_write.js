function buildClickCommasWriteBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    /*
    =========================================================
    Back and next buttons
    =========================================================
    */

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

    /*
    =========================================================
    Heading
    =========================================================
    */

    htmlStmt += '<div class="act_head_group justify-content-center">';

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt += '<div class="q-type-img-container">';

      htmlStmt += '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '">';

      if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
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
      aObj.subTitleAudio +
      '">';

    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
      for (
        var iconIndex = 0;
        iconIndex < aObj.subTitleIcons.length;
        iconIndex++
      ) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
      }
    }

    htmlStmt +=
      '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /*
    =========================================================
    Activity content
    =========================================================
    */

    htmlStmt += '<div class="options cont_ht_sf click_commas_write_options">';

    htmlStmt += '<div class="all_cont click_commas_write_all_cont">';

    htmlStmt += '<div class="click_commas_write_wrapper">';

    for (
      var questionIndex = 0;
      questionIndex < aObj.questions.length;
      questionIndex++
    ) {
      var question = aObj.questions[questionIndex];

      var cleanSentence = question.sentence.replace(/([.,!?])/g, " $1");

      var words = cleanSentence.split(/\s+/);

      htmlStmt +=
        '<div class="que click_commas_write_question" ' +
        'data-qno="' +
        question.id +
        '" ' +
        'data-question-id="' +
        question.id +
        '">';

      /*
              ===============================================
              Top row
              ===============================================
              */

      htmlStmt += '<div class="click_commas_top_row">';

      /*
                Image
                */

      htmlStmt += '<div class="click_commas_image_holder">';

      htmlStmt +=
        '<img src="' + question.image + '" ' + 'class="click_commas_image">';

      htmlStmt += "</div>";

      /*
                Clickable sentence
                */

      htmlStmt +=
        '<div class="click_commas_sentence" ' +
        'data-question-id="' +
        question.id +
        '">';

      for (var wordIndex = 0; wordIndex < words.length; wordIndex++) {
        var currentWord = words[wordIndex];

        htmlStmt +=
          '<span class="click_commas_word">' + currentWord + "</span>";

        /*
                    لا نضيف مكان كبس بعد آخر كلمة
                    */

        if (wordIndex < words.length - 1) {
          htmlStmt +=
            "<button " +
            'type="button" ' +
            'class="comma_click_space" ' +
            'data-question-id="' +
            question.id +
            '" ' +
            'data-after-index="' +
            wordIndex +
            '">' +
            '<span class="comma_symbol">,</span>' +
            "</button>";
        }
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      /*
              ===============================================
              Writing row
              ===============================================
              */

      htmlStmt += '<div class="click_commas_write_row">';

      htmlStmt +=
        "<textarea " +
        'class="click_commas_textarea" ' +
        'data-question-id="' +
        question.id +
        '" ' +
        'rows="2" ' +
        'maxlength="250" ' +
        'spellcheck="false" ' +
        'placeholder="Write the sentence here...">' +
        "</textarea>";

      /*
                Tick and cross
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

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> Click Commas Write Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
