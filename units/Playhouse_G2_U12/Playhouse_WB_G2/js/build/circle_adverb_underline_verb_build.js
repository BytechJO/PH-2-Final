function buildCircleAdverbUnderlineVerbBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions)
  ) {
    console.error("Invalid circle_adverb_underline_verb_data");

    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_left " +
    "subFooterNav backNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_right " +
    "subFooterNav nextNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (
    aObj.mainTitleIcon !== undefined &&
    aObj.mainTitleIcon !== null &&
    aObj.mainTitleIcon !== ""
  ) {
    var iconRight = "-18px";

    if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right !== undefined) {
      iconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      iconRight +
      ';">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Subtitle
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant audioQuestionTitle" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  if (aObj.title_position === "under") {
    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  } else {
    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Main wrappers
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="' +
    "all_cont justify-content-start " +
    "justify-content-sm-center" +
    '">';

  htmlStmt +=
    '<div class="' +
    "screen_elements " +
    "circle_adverb_screen " +
    "d-flex flex-wrap " +
    "justify-content-center " +
    "align-items-center h-100" +
    '">';

  /* =====================================================
     Tool buttons
  ===================================================== */

  htmlStmt += '<div class="marking_tools">';

  for (var toolIndex = 0; toolIndex < aObj.tools.length; toolIndex++) {
    var tool = aObj.tools[toolIndex];

    var selectedClass = toolIndex === 0 ? " selected" : "";

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="marking_tool' +
      selectedClass +
      '" data-tool="' +
      tool.id +
      '">';

    htmlStmt += '<span class="tool_label">' + tool.label + "</span>";

    if (tool.id === "circle") {
      htmlStmt +=
        '<span class="circle_tool_example">' + tool.exampleText + "</span>";
    } else {
      htmlStmt +=
        '<span class="underline_tool_example">' + tool.exampleText + "</span>";
    }

    htmlStmt += "</button>";
  }

  htmlStmt += "</div>";

  /* =====================================================
     Questions grid
  ===================================================== */

  htmlStmt += '<div class="circle_adverb_questions">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    htmlStmt += buildCircleAdverbQuestion(
      aObj.questions[questionIndex],
      questionIndex,
    );
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  console.log("Circle adverb underline verb built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Build one question
========================================================= */

function buildCircleAdverbQuestion(question, questionIndex) {
  var htmlStmt = "";

  htmlStmt +=
    '<div class="' +
    "circle_adverb_question que" +
    '" data-qno="' +
    question.qno +
    '" data-question-index="' +
    questionIndex +
    '">';

  /* Number */

  htmlStmt += '<div class="circle_adverb_qno">' + question.qno + "</div>";

  /* Image */

  htmlStmt += '<div class="circle_adverb_image_wrap">';

  htmlStmt += '<img src="' + question.image + '" alt="">';

  htmlStmt += "</div>";

  /* Sentence */

  htmlStmt += '<div class="circle_adverb_sentence">';

  for (var wordIndex = 0; wordIndex < question.words.length; wordIndex++) {
    var word = question.words[wordIndex];

    htmlStmt +=
      "<span " +
      'class="selectable_word" ' +
      'data-word-index="' +
      wordIndex +
      '" data-selected-mark="none">' +
      word.text +
      "</span>";
  }

  htmlStmt += "</div>";

  /* Result */

  htmlStmt += '<div class="question_result_wrap">';

  htmlStmt += '<div class="question_tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="question_cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  return htmlStmt;
}
