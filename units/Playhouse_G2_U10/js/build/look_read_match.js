function buildLookReadMatchBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    /*
        =========================================================
        Previous and Next buttons
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
        Activity heading
        =========================================================
        */

    htmlStmt += '<div class="act_head_group justify-content-center">';

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

    htmlStmt += '<div class="options look_read_match_options">';

    htmlStmt += '<div class="look_read_match_workspace">';

    /*
                =================================================
                SVG lines
                =================================================
                */

    htmlStmt +=
      '<svg class="look_read_match_svg" ' +
      'xmlns="http://www.w3.org/2000/svg">';

    htmlStmt += '<g class="look_read_match_saved_lines"></g>';

    htmlStmt +=
      "<line " +
      'class="look_read_match_preview_line" ' +
      'x1="0" ' +
      'y1="0" ' +
      'x2="0" ' +
      'y2="0">' +
      "</line>";

    htmlStmt += "</svg>";

    /*
                =================================================
                Left questions
                =================================================
                */

    htmlStmt += '<div class="look_read_match_questions">';

    for (
      var questionIndex = 0;
      questionIndex < aObj.questions.length;
      questionIndex++
    ) {
      var question = aObj.questions[questionIndex];

      htmlStmt +=
        '<div class="que look_read_match_question" ' +
        'data-qno="' +
        question.id +
        '" ' +
        'data-question-id="' +
        question.id +
        '">';

      /*
                            Person image
                            */

      htmlStmt += '<div class="look_read_match_person_holder">';

      htmlStmt +=
        "<img " +
        'class="look_read_match_person_image" ' +
        'src="' +
        question.personImage +
        '">';

      htmlStmt += "</div>";

      /*
                            Sentence and input
                            */

      htmlStmt += '<div class="look_read_match_sentence">';

      htmlStmt +=
        '<span class="look_read_match_text">' + question.text + "</span>";

      htmlStmt += '<span class="look_read_match_answer_holder">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="look_read_match_input" ' +
        'data-question-id="' +
        question.id +
        '" ' +
        'data-type="number" ' +
        'inputmode="numeric" ' +
        'maxlength="1" ' +
        'autocomplete="off">';

      /*
                                    Existing Playhouse tick and cross
                                    */

      htmlStmt += '<span class="icon_wrap_holder">';

      htmlStmt += '<span class="icon_wrap">';

      htmlStmt +=
        '<span class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</span>";

      htmlStmt +=
        '<span class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</span>";

      htmlStmt += "</span>";

      htmlStmt += "</span>";

      htmlStmt += "</span>";

      htmlStmt += "</div>";

      /*
                            Left connection point
                            */

      htmlStmt +=
        "<button " +
        'type="button" ' +
        'class="look_read_match_dot look_read_match_left_dot" ' +
        'data-side="left" ' +
        'data-question-id="' +
        question.id +
        '">' +
        "</button>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    /*
                =================================================
                Right options
                =================================================
                */

    htmlStmt += '<div class="look_read_match_images">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      var option = aObj.options[optionIndex];

      htmlStmt +=
        '<div class="look_read_match_option" ' +
        'data-option-number="' +
        option.number +
        '">';

      /*
                            Right connection point
                            */

      htmlStmt +=
        "<button " +
        'type="button" ' +
        'class="look_read_match_dot look_read_match_right_dot" ' +
        'data-side="right" ' +
        'data-option-number="' +
        option.number +
        '">' +
        "</button>";

      /*
                            Image card
                            */

      htmlStmt += '<div class="look_read_match_image_card">';

      htmlStmt +=
        '<span class="look_read_match_image_number">' +
        option.number +
        "</span>";

      htmlStmt +=
        "<img " +
        'class="look_read_match_option_image" ' +
        'src="' +
        option.image +
        '" ' +
        'alt="' +
        option.alt +
        '">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> Look Read Match Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
