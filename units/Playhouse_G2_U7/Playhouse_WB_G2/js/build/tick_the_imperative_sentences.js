function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

  // =========================================================
  // Back button
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // Next button
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";
  // =========================================================
  // Heading
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (typeof aObj.mainTitleIcon !== "undefined" && aObj.mainTitleIcon !== "") {
    var iconRight = "";

    if (
      aObj.mainTitleIconPos &&
      typeof aObj.mainTitleIconPos.right !== "undefined"
    ) {
      iconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      iconRight +
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

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // Main content
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="imperative_questions">';

  for (var questionIndex = 0; questionIndex < numOfQuestions; questionIndex++) {
    var question = aObj.questions[questionIndex];

    var questionNumber = questionIndex + 1;

    htmlStmt +=
      '<div class="que imperative_question" ' +
      'id="que_' +
      questionNumber +
      '" ' +
      'data-qno="' +
      questionNumber +
      '">';

    // =======================================================
    // Number
    // =======================================================

    htmlStmt += '<div class="imperative_number">' + questionNumber + "</div>";

    // =======================================================
    // Sentences
    // =======================================================

    htmlStmt += '<div class="imperative_options">';

    for (
      var optionIndex = 0;
      optionIndex < question.options.length;
      optionIndex++
    ) {
      var option = question.options[optionIndex];

      var optionNumber = optionIndex + 1;

      htmlStmt +=
        '<div class="pick imperative_pick" ' +
        'id="pick_' +
        questionNumber +
        "_" +
        optionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      htmlStmt += '<div class="imperative_sentence">' + option.text + "</div>";

      htmlStmt += '<div class="tick_line">';

      htmlStmt += '<span class="line"></span>';

      htmlStmt += '<span class="selectTick">✓</span>';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =======================================================
    // Image
    // =======================================================

    htmlStmt += '<div class="imperative_image">';

    if (question.image && question.image !== "no") {
      htmlStmt += '<img src="' + question.image + '">';
    }

    htmlStmt += "</div>";

    // =======================================================
    // Feedback
    // =======================================================

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

  console.log("htmlStmt >> imperative MCQ Built");

  $(".activity_area").append(htmlStmt);

  bindImperativePageEvents();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* ========================================================= */
/*             Local behavior for this page                  */
/* ========================================================= */

function bindImperativePageEvents() {
  /*
   * نخفي نتيجة التصحيح القديمة عند تغيير الاختيار.
   */

  $(document)
    .off("click.imperativePage", ".imperative_pick")
    .on("click.imperativePage", ".imperative_pick", function () {
      var $question = $(this).closest(".que");

      $question.find(".icon_wrap").hide();

      $question.find(".tick, .cross").hide();
    });

  /*
   * Reset:
   * نمسح علامات الاختيار.
   */

  $(document)
    .off("click.imperativeReset", ".resetBtn")
    .on("click.imperativeReset", ".resetBtn", function () {
      setTimeout(function () {
        $(".imperative_pick").removeClass("selected selectedDefault");

        $(".imperative_pick").find(".selectTick").hide();

        $(".imperative_question").find(".icon_wrap").hide();

        $(".imperative_question").find(".tick, .cross").hide();
      }, 0);
    });
}
