function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    setLoadedStatus(getCurrFileOrDirectory("file"));

    return;
  }

  // =====================================================
  // Back / Next
  // =====================================================

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

  // =====================================================
  // Header wrapper
  // =====================================================

  htmlStmt += '<div class="adverb_header_wrapper">';

  htmlStmt += '<div class="act_head_group justify-content-center">';

  // Main title
  htmlStmt +=
    '<div class="audioIcon off contant main_title_audio" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    htmlStmt += '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '">';
  }

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    var titleIconRight = "0px";

    if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right) {
      titleIconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      titleIconRight +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // Subtitle
  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (aObj.subTitleIcons[iconIndex] !== "") {
        htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // Content wrapper
  // =====================================================

  htmlStmt += '<div class="adverb_content_wrapper">';

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont d-flex justify-content-center">';

  htmlStmt += '<div class="screen_elements">';

  htmlStmt += '<div class="group_elm adverb_questions_group">';

  // =====================================================
  // Questions
  // =====================================================

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var questionObj = aObj.questions[questionIndex];

    var questionNumber = questionIndex + 1;

    htmlStmt +=
      '<div class="que adverb_question_card" ' +
      'id="que_' +
      questionNumber +
      '" ' +
      'data-qno="' +
      questionNumber +
      '">';

    // Main bordered box
    htmlStmt += '<div class="adverb_visual_box">';

    // Image and days
    htmlStmt += '<div class="adverb_top_row">';

    htmlStmt += '<div class="adverb_image_wrap">';

    htmlStmt +=
      '<img class="adverb_question_image" ' +
      'src="' +
      questionObj.image +
      '" ' +
      'alt="">';

    htmlStmt += "</div>";

    // Days
    htmlStmt += '<div class="days_list">';

    for (var dayIndex = 0; dayIndex < questionObj.days.length; dayIndex++) {
      var dayObj = questionObj.days[dayIndex];

      htmlStmt += '<div class="day_item">';

      htmlStmt += '<span class="day_name">' + dayObj.text + "</span>";

      if (dayObj.checked === true) {
        htmlStmt += '<span class="day_check">✓</span>';
      } else {
        htmlStmt += '<span class="day_check day_check_empty"></span>';
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===================================================
    // Options
    // ===================================================

    htmlStmt += '<div class="pick_set adverb_options">';

    for (
      var optionIndex = 0;
      optionIndex < questionObj.options.length;
      optionIndex++
    ) {
      htmlStmt +=
        '<div class="pick adverb_pick" ' +
        'data-option="' +
        (optionIndex + 1) +
        '">';

      htmlStmt +=
        '<span class="adverb_text">' +
        questionObj.options[optionIndex] +
        "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // ===================================================
    // Feedback
    // ===================================================

    htmlStmt += '<div class="icon_wrap_holder">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // Label
    htmlStmt +=
      '<div class="adverb_action_label">' + questionObj.label + "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // Bottom text
  // =====================================================

  if (aObj.bottomText !== undefined && aObj.bottomText !== "") {
    htmlStmt += '<div class="adverb_bottom_text">' + aObj.bottomText + "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // Option click
  // دائرة سوداء واحدة فقط
  // =====================================================

  $(".activity_area").on("click", ".adverb_pick", function () {
    var currentQuestion = $(this).closest(".que");

    // إزالة الدائرة والنتائج القديمة
    currentQuestion
      .find(".adverb_pick")
      .removeClass(
        "selected " +
          "correct " +
          "wrong " +
          "correct_answer " +
          "wrong_answer " +
          "right " +
          "wrongAns",
      )
      .css({
        borderColor: "transparent",
        backgroundColor: "transparent",
        color: "#000000",
      });

    currentQuestion.find(".adverb_text").css("color", "#000000");

    // دائرة سوداء على الاختيار الحالي
    $(this).addClass("selected").css({
      borderColor: "#000000",
      backgroundColor: "transparent",
      color: "#000000",
    });

    // إخفاء نتيجة المحاولة القديمة
    currentQuestion.find(".icon_wrap, .tick, .cross").hide();

    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  });

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
