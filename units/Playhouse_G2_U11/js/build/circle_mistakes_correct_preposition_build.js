function buildCircleMistakesCorrectPreposition(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    console.error("circle_mistakes_data is missing");

    return;
  }

  // =========================================================
  // Navigation
  // =========================================================

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

  // =========================================================
  // Activity heading
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  /*
   * Main title is optional.
   * If mainTitle is empty, only the subtitle appears.
   */
  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      escapeCircleAttribute(aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" src="' +
      escapeCircleAttribute(aObj.mainTitle) +
      '">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      var iconRight = "-18px";

      if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right) {
        iconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        escapeCircleAttribute(aObj.mainTitleIcon) +
        '" ' +
        'style="right:' +
        escapeCircleAttribute(iconRight) +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += '<div class="activityHeading circle_activity_heading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    escapeCircleAttribute(aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (aObj.subTitleIcons[iconIndex]) {
        htmlStmt +=
          '<img src="' +
          escapeCircleAttribute(aObj.subTitleIcons[iconIndex]) +
          '">';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // Main activity body
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt += '<div class="circle_mistakes_wrapper">';

  // =========================================================
  // Main image
  // =========================================================

  if (aObj.image !== undefined && aObj.image !== "") {
    htmlStmt += '<div class="circle_mistakes_image_holder">';

    htmlStmt += '<img src="' + escapeCircleAttribute(aObj.image) + '" alt="">';

    htmlStmt += "</div>";
  }

  // =========================================================
  // Story
  // =========================================================

  htmlStmt += '<div class="circle_story_holder">';

  htmlStmt += '<div class="circle_story_text">';

  var prepositionIndex = 0;

  if (Array.isArray(aObj.storyParts)) {
    for (var partIndex = 0; partIndex < aObj.storyParts.length; partIndex++) {
      var part = aObj.storyParts[partIndex];

      if (part.type === "preposition") {
        prepositionIndex++;

        htmlStmt +=
          '<span class="preposition_item" ' +
          'data-preposition-index="' +
          prepositionIndex +
          '" ' +
          'data-is-mistake="' +
          (part.isMistake === true ? "true" : "false") +
          '">';

        // Input above the circled word
        var inputTop =
          part.inputPosition && part.inputPosition.top
            ? part.inputPosition.top
            : "-45px";

        var inputLeft =
          part.inputPosition && part.inputPosition.left
            ? part.inputPosition.left
            : "50%";

        htmlStmt +=
          '<span class="correction_box" ' +
          'style="top:' +
          escapeCircleAttribute(inputTop) +
          "; left:" +
          escapeCircleAttribute(inputLeft) +
          ';">';
        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="correction_input" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          'maxlength="30">';

        htmlStmt += "</span>";

        // Selectable preposition
        htmlStmt +=
          '<span class="preposition_word">' +
          escapeCircleHtml(part.text || "") +
          "</span>";

        // Correct icon
        htmlStmt += '<span class="preposition_result result_tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</span>";

        // Wrong icon
        htmlStmt += '<span class="preposition_result result_cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</span>";

        htmlStmt += "</span>";
      } else {
        htmlStmt +=
          '<span class="story_plain_text">' +
          escapeCircleHtml(part.text || "") +
          "</span>";
      }
    }
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // Render into Playhouse activity area
  // =========================================================

  $(".activity_area").empty().append(htmlStmt);

  console.log("Circle mistakes activity built", aObj);

  // =========================================================
  // Notify Playhouse loader
  // =========================================================

  if (
    typeof setLoadedStatus === "function" &&
    typeof getCurrFileOrDirectory === "function"
  ) {
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}

/*
 * Escapes normal text before inserting it into HTML.
 */
function escapeCircleHtml(value) {
  return String(value === undefined || value === null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
 * Escapes attribute values.
 */
function escapeCircleAttribute(value) {
  return escapeCircleHtml(value);
}
