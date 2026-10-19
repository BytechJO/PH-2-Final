function buildColourRhymingWordsBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '  <a href="">';
    htmlStmt += '    <img src="../images/icons/back_btn.png" />';
    htmlStmt += "  </a>";
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '  <a href="">';
    htmlStmt += '    <img src="../images/icons/next_btn.png" />';
    htmlStmt += "  </a>";
    htmlStmt += "</div>";

    // =========================================================
    // Heading
    // =========================================================
    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt += '<div class="audioIcon off contant" ';
    htmlStmt += 'data-slideNum="1" ';
    htmlStmt += 'data-audio="' + (aObj.mainTitleAudio || "") + '">';

    htmlStmt += '  <div class="q-type-img-container">';
    htmlStmt +=
      '    <img class="mainTitle" src="' + (aObj.mainTitle || "") + '">';

    if (
      typeof aObj.mainTitleIcon !== "undefined" &&
      aObj.mainTitleIcon !== null &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "";

      if (
        aObj.mainTitleIconPos &&
        typeof aObj.mainTitleIconPos.right !== "undefined"
      ) {
        iconRight = ' style="right:' + aObj.mainTitleIconPos.right + ';"';
      }

      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '"' +
        iconRight +
        ">";
    }

    htmlStmt += "  </div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt += '  <div class="audioIcon off contant audioQuestionTitle" ';
    htmlStmt += '       data-slideNum="1" ';
    htmlStmt += '       data-audio="' + (aObj.subTitleAudio || "") + '">';

    htmlStmt += '    <div class="page_sub_title d-flex">';
    htmlStmt += "      <p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (Array.isArray(aObj.subTitleIcons) && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '" />';
      }
    }

    htmlStmt +=
      '      <p class="subTitleTextRight">' +
      (aObj.subTitleTextRight || "") +
      "</p>";

    htmlStmt += "    </div>";
    htmlStmt += "  </div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // Activity content
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '  <div class="all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '    <div class="rhyming_activity_wrapper">';

    // Colour palette
    htmlStmt += '      <div class="colour_palette">';

    if (Array.isArray(aObj.colours)) {
      for (var c = 0; c < aObj.colours.length; c++) {
        var colourObj = aObj.colours[c];
        var activeClass =
          colourObj.name === aObj.defaultColour ? " active" : "";

        htmlStmt +=
          '<button type="button" ' +
          'class="colour_button' +
          activeClass +
          '" ' +
          'data-colour="' +
          colourObj.name +
          '" ' +
          'title="' +
          (colourObj.label || colourObj.name) +
          '">' +
          '<span class="colour_circle colour_' +
          colourObj.name +
          '"></span>' +
          '<span class="colour_name">' +
          (colourObj.label || colourObj.name) +
          "</span>" +
          "</button>";
      }
    }

    htmlStmt += "      </div>";

    // Words
    htmlStmt += '      <div class="rhyming_words_area">';

    if (Array.isArray(aObj.words)) {
      for (var x = 0; x < aObj.words.length; x++) {
        var tmpObj = aObj.words[x];
        var shapeClass = tmpObj.shape || "rectangle";
        var positionStyle = "";

        if (tmpObj.position) {
          positionStyle = ' style="' + tmpObj.position + '"';
        }

        htmlStmt +=
          '<div class="rhyming_word_item shape_' +
          shapeClass +
          '" ' +
          'data-qno="' +
          (x + 1) +
          '" ' +
          'data-group="' +
          tmpObj.group +
          '" ' +
          'data-selected-colour=""' +
          positionStyle +
          ">";

        htmlStmt += '  <div class="rhyming_shape"></div>';
        htmlStmt +=
          '  <div class="rhyming_word_text">' + tmpObj.word + "</div>";

        htmlStmt += '  <div class="icon_wrap_holder">';
        htmlStmt += '    <div class="icon_wrap">';
        htmlStmt +=
          '      <div class="tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '      <div class="cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";

        htmlStmt += "    </div>";
        htmlStmt += "  </div>";

        htmlStmt += "</div>";
      }
    }

    htmlStmt += "      </div>";
    htmlStmt += "    </div>";
    htmlStmt += "  </div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> Colour Rhyming Words Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
