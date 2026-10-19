function buildMcqTickBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

  /* =========================================================
     Back
     ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =========================================================
     Next
     ========================================================= */

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

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
  }

  htmlStmt +=
    "<p class='subTitleTextRight'>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
     Activity area
     ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-center align-items-center">';

  htmlStmt += '<div class="question_type_activity">';

  /* =========================================================
     Column headings
     ========================================================= */

  htmlStmt += '<div class="question_type_header">';

  htmlStmt += '<div class="question_header_empty"></div>';

  htmlStmt += '<div class="question_type_heading information_heading">';

  htmlStmt +=
    aObj.columnHeadings && aObj.columnHeadings[0]
      ? aObj.columnHeadings[0]
      : "Information<br>question";

  htmlStmt += "</div>";

  htmlStmt += '<div class="question_type_heading yes_no_heading">';

  htmlStmt +=
    aObj.columnHeadings && aObj.columnHeadings[1]
      ? aObj.columnHeadings[1]
      : "Yes/No<br>question";

  htmlStmt += "</div>";

  htmlStmt += '<div class="result_header_empty"></div>';

  htmlStmt += "</div>";

  /* =========================================================
     Questions
     ========================================================= */

  htmlStmt += '<div class="tick_group">';

  for (var x = 0; x < numOfQuestions; x++) {
    var question = aObj.questions[x];

    htmlStmt +=
      "<div " +
      'id="que_' +
      (x + 1) +
      '" ' +
      'class="que question_type_row" ' +
      'data-qno="' +
      (x + 1) +
      '">';

    /* Question text */

    htmlStmt += '<div class="question_text">';

    htmlStmt += question.question || "";

    htmlStmt += "</div>";

    /* Options */

    htmlStmt += '<div class="question_options">';

    for (var y = 0; y < question.options.length; y++) {
      htmlStmt +=
        "<div " +
        'id="pick_' +
        (x + 1) +
        "_" +
        (y + 1) +
        '" ' +
        'class="tick_field pick">';

      htmlStmt += '<div class="tickBox">';

      htmlStmt += '<span class="selectTick" style="display:none;">';

      htmlStmt += '<i class="fa fa-check" aria-hidden="true"></i>';

      htmlStmt += "</span>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    /* Tick / Cross result */

    htmlStmt += '<div class="icon_wrap_holder">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick iconcontainer">';

    htmlStmt += '<img src="../images/icons/check_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross iconcontainer">';

    htmlStmt += '<img src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function loadThisObject() {
  buildMcqTickBody(mcq_tick_data);
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
