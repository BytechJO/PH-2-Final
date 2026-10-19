function buildMcqBody(aObj) {
  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var htmlStmt = "";

  /* =========================================================
       Navigation
    ========================================================= */

  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =========================================================
       Heading
    ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  /* Main title */

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt +=
    '<img class="mainTitle" ' + 'src="' + (aObj.mainTitle || "") + '">';

  if (typeof aObj.mainTitleIcon !== "undefined" && aObj.mainTitleIcon !== "") {
    var iconRight = "-25px";

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

  /* Subtitle */

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
      htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
    }
  }

  htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
       Activity Content
    ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="group_elm">';

  /* =========================================================
       Mark Tools
    ========================================================= */

  htmlStmt += '<div class="mark_tools">';

  /* Underline tool */

  htmlStmt +=
    '<button type="button" ' +
    'class="mark_tool active" ' +
    'data-tool="underline">';

  htmlStmt += '<span class="underline_example">noun</span>';

  htmlStmt += '<span class="tool_title">Underline</span>';

  htmlStmt += "</button>";

  /* Circle tool */

  htmlStmt +=
    '<button type="button" ' + 'class="mark_tool" ' + 'data-tool="circle">';

  htmlStmt += '<span class="circle_example">verb</span>';

  htmlStmt += '<span class="tool_title">Circle</span>';

  htmlStmt += "</button>";

  htmlStmt += "</div>";

  /* =========================================================
       Questions
    ========================================================= */

  htmlStmt += '<div class="tick_group">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var question = aObj.questions[questionIndex];

    var questionNumber = questionIndex + parseInt(aObj.numberstartfrom || 1);

    htmlStmt +=
      '<div class="que" ' +
      'id="que_' +
      questionNumber +
      '" ' +
      'data-qno="' +
      questionNumber +
      '">';

    /* Question number */

    htmlStmt += '<div class="q_num_space">';

    htmlStmt += questionNumber + ".";

    htmlStmt += "</div>";

    /* Words */

    htmlStmt += '<div class="picks_grp">';

    if (question.options && question.options.length > 0) {
      for (
        var optionIndex = 0;
        optionIndex < question.options.length;
        optionIndex++
      ) {
        var option = question.options[optionIndex];

        var optionNumber = optionIndex + 1;

        htmlStmt +=
          '<button type="button" ' +
          'id="pick_' +
          questionNumber +
          "_" +
          optionNumber +
          '" ' +
          'class="pick word_pick" ' +
          'data-question="' +
          questionNumber +
          '" ' +
          'data-option="' +
          optionNumber +
          '" ' +
          'data-mark="">';

        htmlStmt += '<span class="txt">' + (option.text || "") + "</span>";

        htmlStmt += "</button>";
      }
    }

    htmlStmt += "</div>";

    /* Question image */

    htmlStmt += '<div class="img_space">';

    htmlStmt += '<img src="' + (question.image || "") + '" alt="">';

    htmlStmt += "</div>";

    /* Correct / wrong icon */

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* End question */

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
       Add Activity To Page
    ========================================================= */

  $(".activity_area").empty();
  $(".activity_area").append(htmlStmt);

  /*
   * لا نضع هنا أي click events.
   * جميع الأحداث موجودة داخل mcq1.js.
   */

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
