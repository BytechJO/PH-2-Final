function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    setLoadedStatus(getCurrFileOrDirectory("file"));

    return;
  }

  // =====================================================
  // Back button
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  // =====================================================
  // Next button
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  // =====================================================
  // Header
  // =====================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
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
  }

  // =====================================================
  // Subtitle
  // =====================================================

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

  // =====================================================
  // Content
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont justify-content-center">';

  htmlStmt += '<div class="story_activity_layout">';

  // =====================================================
  // Question side
  // مهم: هذا التركيب مطلوب لـ mcq.js
  // =====================================================

  htmlStmt += '<div class="story_text_side">';

  var questionObj = aObj.questions[0];

  htmlStmt += '<div class="tick_group">';

  htmlStmt +=
    '<div class="que story_question" ' + 'id="que_1" ' + 'data-qno="1">';

  // السؤال مخفي لأن العنوان موجود فوق
  htmlStmt += '<div class="q_part">';

  htmlStmt +=
    '<div class="question">' + (questionObj.question || "") + "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // Words
  // كل كلمة pick حتى mcq.js يتعامل معها
  // =====================================================

  htmlStmt += '<div class="picks_grp story_words_group">';

  for (
    var optionIndex = 0;
    optionIndex < questionObj.options.length;
    optionIndex++
  ) {
    var optionObj = questionObj.options[optionIndex];

    htmlStmt +=
      "<div " +
      'id="pick_1_' +
      (optionIndex + 1) +
      '" ' +
      'class="pick story_word">';

    htmlStmt += '<div class="txt">' + optionObj.text + "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // Tick / Cross
  // =====================================================

  htmlStmt += '<div class="icon_wrap story_icon_wrap">';

  htmlStmt += '<div class="tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // Image side
  // =====================================================

  htmlStmt += '<div class="story_image_side">';

  if (aObj.storyImage !== undefined && aObj.storyImage !== "") {
    htmlStmt +=
      '<img class="story_main_image" ' +
      'src="' +
      aObj.storyImage +
      '" ' +
      'alt="">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // Append
  // =====================================================

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
