function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;
    var numberOfCols = parseInt(aObj.numberofcolumns, 10) || 2;

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
      '<a href="">' +
      '<img src="../images/icons/back_btn.png" />' +
      "</a>" +
      "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
      '<a href="">' +
      '<img src="../images/icons/next_btn.png" />' +
      "</a>" +
      "</div>";

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

    if (
      typeof aObj.mainTitleIcon !== "undefined" &&
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

    if (aObj.subTitleIcons && Array.isArray(aObj.subTitleIcons)) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
      }
    }

    htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // Content
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont justify-content-center">';

    htmlStmt += '<div class="mcq-content-wrapper mb-70">';

    // Main image before questions
    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "front"
    ) {
      htmlStmt +=
        '<div class="main-question-image img_space">' +
        '<img src="' +
        aObj.image +
        '">' +
        "</div>";
    }

    /*
     * جميع الأسئلة داخل Grid واحد.
     * قيمة numberofcolumns من الـ data تحدد عدد الأعمدة.
     */
    htmlStmt +=
      '<div class="question_group" ' +
      'style="--mcq-columns:' +
      numberOfCols +
      ';">';

    for (var currQueNum = 1; currQueNum <= numOfQuestions; currQueNum++) {
      var tpOb = aObj.questions[currQueNum - 1];

      if (typeof tpOb === "undefined" || tpOb === null) {
        continue;
      }

      htmlStmt +=
        '<div class="que" ' +
        'id="que_' +
        currQueNum +
        '" ' +
        'data-qno="' +
        currQueNum +
        '">';

      htmlStmt += '<div class="ques_line">';

      htmlStmt += '<div class="q_grp">';

      // Top sentence
      if (typeof tpOb.sentence !== "undefined" && tpOb.sentence !== "") {
        htmlStmt +=
          '<div class="top-sentence">' +
          "<p>" +
          tpOb.sentence +
          "</p>" +
          "</div>";
      }

      htmlStmt += '<div class="q_part">';

      // Numbering
      if (aObj.numbering !== "none") {
        var questionLabel = "";

        if (aObj.numbering === "alphabet") {
          var startLetter = aObj.numberstartfrom || "a";

          questionLabel =
            String.fromCharCode(
              startLetter.toString().charCodeAt(0) + currQueNum - 1,
            ) + ".";
        } else if (aObj.numbering === "number") {
          questionLabel =
            parseInt(aObj.numberstartfrom, 10) + currQueNum - 1 + ".";
        }

        htmlStmt += '<div class="q_num_space">' + questionLabel + "</div>";
      }

      // Question image
      if (
        typeof tpOb.image !== "undefined" &&
        tpOb.image !== "" &&
        tpOb.image !== "no"
      ) {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          tpOb.image +
          '">' +
          "</div>";
      }

      var str = tpOb.question || "";
      var opts = tpOb.options || [];
      var count = (str.match(/\[_\]/g) || []).length;

      var fillBoxesArr = [];

      for (var rr = 0; rr < opts.length; rr++) {
        var tmphtml =
          '<span class="pick_set" ' +
          'id="pick_set_' +
          currQueNum +
          "_" +
          (rr + 1) +
          '">';

        if (tpOb.inputbox !== "no") {
          tmphtml +=
            '<input class="text_input_area d-none" ' +
            'type="text" readonly disabled>';
        }

        var tmpOpt = opts[rr];

        for (var aa = 0; aa < tmpOpt.length; aa++) {
          tmphtml +=
            '<span class="pick" ' +
            'id="pick_' +
            currQueNum +
            "_" +
            (rr + 1) +
            "_" +
            (aa + 1) +
            '" ' +
            'data-opttext="' +
            tmpOpt[aa] +
            '">' +
            tmpOpt[aa] +
            "</span>";
        }

        tmphtml += "</span>";

        fillBoxesArr.push(tmphtml);
      }

      var resultParts = str.split("[_]");
      var finalQuestionHtml = "";

      for (var partIndex = 0; partIndex < resultParts.length; partIndex++) {
        var questionText = resultParts[partIndex];

        if (questionText !== "") {
          finalQuestionHtml +=
            '<span class="audioIcon off contant not-disapled question-audio-text" ' +
            'data-audio="' +
            (tpOb.audio || "") +
            '">' +
            questionText +
            "</span>";
        }

        if (partIndex < resultParts.length - 1) {
          finalQuestionHtml += fillBoxesArr[partIndex] || "";
        }
      }

      htmlStmt +=
        '<div class="text_container">' +
        '<div class="text_part">' +
        finalQuestionHtml +
        "</div>" +
        "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      // Feedback icons
      htmlStmt +=
        '<div class="icon_wrap">' +
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>" +
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>" +
        "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // Main image after questions
    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "back"
    ) {
      htmlStmt +=
        '<div class="main-question-image img_space">' +
        '<img src="' +
        aObj.image +
        '">' +
        "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> MCQ Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
