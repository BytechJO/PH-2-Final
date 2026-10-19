function buildOldWordsBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    /*
     * Previous and next buttons
     */
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

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right: ' +
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

    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    /*
     * Main activity area
     */
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="old_words_activity">';

    /*
     * Word cloud
     */
    htmlStmt += '<div class="old_words_cloud">';

    for (var i = 0; i < aObj.words.length; i++) {
      var wordObj = aObj.words[i];

      htmlStmt +=
        '<button type="button" ' +
        'class="old_word old_word_' +
        (i + 1) +
        '" ' +
        'data-word-index="' +
        i +
        '" ' +
        'data-correct="' +
        wordObj.correct +
        '">';

      htmlStmt +=
        '<span class="audioIcon off contant" data-audio="' +
        wordObj.audio +
        '">';

      htmlStmt += wordObj.text;

      htmlStmt += "</span>";
      htmlStmt += "</button>";
    }

    htmlStmt += "</div>";

    /*
     * Writing inputs
     */
    htmlStmt += '<div class="old_words_inputs">';

    for (var j = 0; j < aObj.numberOfInputs; j++) {
      htmlStmt += '<div class="old_words_input_group">';

      htmlStmt += '<span class="old_words_input_number">' + (j + 1) + "</span>";

      htmlStmt +=
        '<input type="text" ' +
        'class="old_words_input" ' +
        'maxlength="30" ' +
        'autocomplete="off" ' +
        'spellcheck="false">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    /*
     * Overall result icon
     */
    htmlStmt += '<div class="old_words_result">';

    htmlStmt += '<div class="old_words_tick">';
    htmlStmt += '<img src="../images/icons/check_btn.png">';
    htmlStmt += "</div>";

    htmlStmt += '<div class="old_words_cross">';
    htmlStmt += '<img src="../images/icons/cross_btn.png">';
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  if (typeof setLoadedStatus === "function") {
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
