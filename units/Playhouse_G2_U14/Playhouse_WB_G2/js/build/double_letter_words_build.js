function buildDoubleLetterWordsBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    // =========================================================
    // Navigation
    // =========================================================

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

    // =========================================================
    // Header
    // =========================================================

    htmlStmt +=
      '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" src="' +
      aObj.mainTitle +
      '">';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== ""
    ) {
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
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt +=
      "<p> " +
      aObj.subTitleTextLeft +
      " </p>";

    for (
      var sicons = 0;
      sicons < aObj.subTitleIcons.length;
      sicons++
    ) {
      htmlStmt +=
        "<img src='" +
        aObj.subTitleIcons[sicons] +
        "'>";
    }

    htmlStmt +=
      "<p> " +
      aObj.subTitleTextRight +
      " </p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Activity
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements">';

    htmlStmt +=
      '<div class="group_elm double_letter_activity">';

    for (var i = 0; i < aObj.questions.length; i++) {
      var question = aObj.questions[i];
      var questionNumber = i + 1;

      var isDefault =
        parseInt(aObj.defaultAnswer) === questionNumber;

      var firstInputValue = isDefault
        ? question.missingLetter
        : "";

      var secondInputValue = isDefault
        ? question.suffix
        : "";

      var readonlyValue = isDefault
        ? " readonly"
        : "";

      htmlStmt +=
        '<div class="double_letter_question" ' +
        'data-qno="' +
        questionNumber +
        '">';

      // Number
      htmlStmt += '<div class="question_number">';
      htmlStmt += questionNumber;
      htmlStmt += "</div>";

      // Base word
      htmlStmt +=
        '<div class="base_word audioIcon off contant" ' +
        'data-audio="' +
        question.audio +
        '">';

      htmlStmt += question.baseWord;
      htmlStmt += "</div>";

      // =====================================================
      // First arrow + missing letter input
      // =====================================================

      htmlStmt += '<div class="arrow_part first_arrow_part">';

      htmlStmt += '<div class="arrow_input_row">';

      htmlStmt += '<span class="plus_sign">+</span>';

      htmlStmt +=
        '<input class="missing_letter_input first_input" ' +
        'type="text" ' +
        'maxlength="1" ' +
        'value="' +
        firstInputValue +
        '"' +
        readonlyValue +
        ' autocomplete="off" ' +
        'spellcheck="false">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="arrow_line">';
      htmlStmt += '<span class="arrow_head"></span>';
      htmlStmt += "</div>";

      htmlStmt += "</div>";

      // =====================================================
      // Second arrow + suffix input
      // =====================================================

      htmlStmt += '<div class="arrow_part second_arrow_part">';

      htmlStmt += '<div class="arrow_input_row">';

      htmlStmt += '<span class="plus_sign">+</span>';

      htmlStmt +=
        '<input class="suffix_input second_input" ' +
        'type="text" ' +
        'maxlength="3" ' +
        'value="' +
        secondInputValue +
        '"' +
        readonlyValue +
        ' autocomplete="off" ' +
        'spellcheck="false">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="arrow_line">';
      htmlStmt += '<span class="arrow_head"></span>';
      htmlStmt += "</div>";

      htmlStmt += "</div>";

      // =====================================================
      // Word options
      // =====================================================

      htmlStmt += '<div class="word_choices">';

      for (
        var j = 0;
        j < question.options.length;
        j++
      ) {
        var option = question.options[j];

        var defaultSelected =
          isDefault &&
          parseInt(question.correctOption) === j + 1
            ? " selected"
            : "";

        var disabledAttr = isDefault
          ? " disabled"
          : "";

        htmlStmt +=
          '<button type="button" ' +
          'class="word_choice' +
          defaultSelected +
          '" ' +
          'data-option="' +
          (j + 1) +
          '"' +
          disabledAttr +
          ">";

        htmlStmt += option.text;

        htmlStmt += "</button>";
      }

      htmlStmt += "</div>";

      // =====================================================
      // Tick and cross
      // =====================================================

      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';

      htmlStmt += '<div class="tick">';
      htmlStmt +=
        '<img src="../images/icons/check_btn.png">';
      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';
      htmlStmt +=
        '<img src="../images/icons/cross_btn.png">';
      htmlStmt += "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}