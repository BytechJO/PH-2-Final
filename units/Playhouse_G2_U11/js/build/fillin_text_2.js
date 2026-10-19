function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = Array.isArray(aObj.questions)
      ? aObj.questions.length
      : 0;

    // =========================================================
    // Back button
    // =========================================================
    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // Next button
    // =========================================================
    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" />';

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

    if (aObj.mainTitle) {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      var iconRight = "-18px";

      if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right) {
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

    // =========================================================
    // Activity title
    // =========================================================
    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    if (aObj.title_position === "under") {
      htmlStmt += '<div class="page_sub_title">';

      htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

      if (Array.isArray(aObj.subTitleIcons)) {
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
          if (aObj.subTitleIcons[sicons]) {
            htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
          }
        }
      }

      htmlStmt +=
        '<br><p class="subTitleTextRight">' +
        (aObj.subTitleTextRight || "") +
        "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += '<div class="page_sub_title d-flex">';

      htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

      if (Array.isArray(aObj.subTitleIcons)) {
        for (var i = 0; i < aObj.subTitleIcons.length; i++) {
          if (aObj.subTitleIcons[i]) {
            htmlStmt += '<img src="' + aObj.subTitleIcons[i] + '">';
          }
        }
      }

      htmlStmt +=
        '<p class="subTitleTextRight">' +
        (aObj.subTitleTextRight || "") +
        "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Main activity body
    // =========================================================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // Word options
    // =========================================================
    if (Array.isArray(aObj.options) && aObj.options.length > 0) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        var optionAudio = "";

        if (Array.isArray(aObj.optionsAudios) && aObj.optionsAudios[key]) {
          optionAudio = aObj.optionsAudios[key];
        }

        htmlStmt +=
          '<div class="audioIcon textEnd off d-flex contant" ' +
          'data-audio="' +
          optionAudio +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =========================================================
    // Screen content
    // =========================================================
    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    // Main image in front
    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "front"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '" class="pulse">';

      htmlStmt += "</div>";
    }

    var parentClassName = aObj.parentClassName || "";

    htmlStmt += '<div class="group_elm ' + parentClassName + '">';

    // =========================================================
    // Optional activity text
    // =========================================================
    if (aObj.text !== undefined && aObj.text !== "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-audio="' +
        (aObj.textAudio || "") +
        '">';

      htmlStmt += '<div class="text">' + aObj.text + "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // Questions
    // =========================================================
    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-wrap" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // Question image
      if (tmpObj.image !== "" && tmpObj.image !== "no") {
        htmlStmt += '<div class="image_space">';

        htmlStmt += '<img src="' + tmpObj.image + '">';

        htmlStmt += "</div>";
      }

      var maxLength = tmpObj.maxlength || 200;

      var inputType = tmpObj.type || "text";

      var inputHtml =
        '<input class="text_input_area" ' +
        'type="text" ' +
        'maxlength="' +
        maxLength +
        '" ' +
        'data-type="' +
        inputType +
        '">';

      var qStr = "";

      // =======================================================
      // Single word mode
      // =======================================================
      if (tmpObj.singleword === true) {
        var singleAudio = "";

        if (Array.isArray(tmpObj.textaudios) && tmpObj.textaudios[0]) {
          singleAudio = tmpObj.textaudios[0];
        }

        qStr +=
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          singleAudio +
          '">';

        qStr += '<img src="../images/icons/sound-wave.png" class="audio_icon">';

        qStr += "</div>";

        qStr += String(tmpObj.text || "").replace(/\[_]/g, inputHtml);
      } else {
        // =====================================================
        // Sentence mode
        // =====================================================
        var sentenceText = tmpObj.text || "";

        var sentenceParts = sentenceText.split("[_]");

        for (var partIndex = 0; partIndex < sentenceParts.length; partIndex++) {
          var part = sentenceParts[partIndex];

          var partAudio = "";

          if (
            Array.isArray(tmpObj.textaudios) &&
            tmpObj.textaudios[partIndex]
          ) {
            partAudio = tmpObj.textaudios[partIndex];
          }

          if (part !== "") {
            qStr +=
              '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
              'data-audio="' +
              partAudio +
              '">';

            qStr += part;

            qStr += "</div>";
          }

          if (partIndex < sentenceParts.length - 1) {
            qStr += inputHtml;
          }
        }
      }

      // =======================================================
      // Fill-in content
      // =======================================================
      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // =======================================================
      // Numbering
      // =======================================================
      if (aObj.numbering !== "none") {
        htmlStmt += '<div class="q_num_space">';

        var questionNumber = "";

        if (aObj.numbering === "alphabet") {
          var startCharacter = String(aObj.numberstartfrom || "a").charCodeAt(
            0,
          );

          questionNumber = String.fromCharCode(startCharacter + x);
        } else if (aObj.numbering === "number") {
          questionNumber = x + parseInt(aObj.numberstartfrom || 1, 10);
        }

        htmlStmt += questionNumber + " ";

        htmlStmt += "</div>";
      }

      htmlStmt += '<div class="fillin_set d-flex flex-wrap background_audio">';

      htmlStmt += qStr;

      // =======================================================
      // Optional words beside question
      // =======================================================
      if (
        Array.isArray(tmpObj.options_words) &&
        tmpObj.options_words.length > 0
      ) {
        htmlStmt += '<div class="options_words d-flex flex-wrap">';

        for (var y = 0; y < tmpObj.options_words.length; y++) {
          var optionWordAudio = "";

          if (
            Array.isArray(tmpObj.options_words_audios) &&
            tmpObj.options_words_audios[y]
          ) {
            optionWordAudio = tmpObj.options_words_audios[y];
          }

          htmlStmt +=
            '<div class="audioIcon txt-audioIcon off d-flex contant" ' +
            'data-audio="' +
            optionWordAudio +
            '">';

          htmlStmt += tmpObj.options_words[y];

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =======================================================
      // Correct / Wrong icons
      // =======================================================
      if (String(tmpObj.text || "").includes("[_]")) {
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
      } else {
        htmlStmt += '<div class="icon_wrap_holder">';

        htmlStmt += '<div class="icon_wrap">';

        htmlStmt += '<div class="tick"></div>';

        htmlStmt += '<div class="cross"></div>';

        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // Main image in back
    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "back"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '" class="pulse">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
