function buildUnderlineCircleBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    return;
  }

  /* =========================================================
     Back / Next
     ========================================================= */

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

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons) {
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

  htmlStmt += '<div class="screen_elements d-flex flex-column">';

  htmlStmt += '<div class="underline_circle_activity">';

  /* =========================================================
     Tools
     ========================================================= */

  htmlStmt += '<div class="underline_circle_tools">';

  htmlStmt +=
    '<button type="button" ' +
    'class="mark_tool active" ' +
    'data-tool="underline">';

  htmlStmt += '<span class="underline_tool_sample">' + "Underline" + "</span>";

  htmlStmt += "</button>";

  htmlStmt +=
    '<button type="button" ' + 'class="mark_tool" ' + 'data-tool="circle">';

  htmlStmt += '<span class="circle_tool_sample">' + "Circle" + "</span>";

  htmlStmt += "</button>";

  htmlStmt += "</div>";

  /* =========================================================
     Sentences
     ========================================================= */

  htmlStmt += '<div class="underline_circle_sentences">';

  for (var i = 0; i < aObj.sentences.length; i++) {
    var sentence = aObj.sentences[i];

    htmlStmt +=
      '<div class="que underline_circle_sentence" ' +
      'data-qno="' +
      (i + 1) +
      '">';

    htmlStmt +=
      '<span class="underline_circle_number">' + sentence.number + "</span>";

    htmlStmt +=
      '<span class="underline_circle_text" ' +
      'data-answer="' +
      sentence.answer +
      '" ' +
      'data-selected="">' +
      sentence.text +
      "</span>";

    /* Tick / Cross */

    htmlStmt += '<div class="theIcons">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png" />';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png" />';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  console.log("htmlStmt >> underline circle Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
