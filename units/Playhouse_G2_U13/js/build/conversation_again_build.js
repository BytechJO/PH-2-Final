function buildReadingHTML(aObj) {
  var slideHtml = "";

  slideHtml +=
    "<div class='container content_wrap reading_container conversation_again_page'>";

  // =========================================================
  // Footer navigation
  // =========================================================

  slideHtml +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  slideHtml +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  // =========================================================
  // Header
  // =========================================================

  slideHtml += '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    slideHtml +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    slideHtml += '<div class="q-type-img-container">';

    slideHtml += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      slideHtml +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    slideHtml += "</div>";
    slideHtml += "</div>";
  }

  slideHtml += '<div class="activityHeading">';

  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  slideHtml += "<div class='page_sub_title d-flex'>";

  slideHtml += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons !== undefined && aObj.subTitleIcons.length > 0) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      slideHtml += "<img src='" + aObj.subTitleIcons[iconIndex] + "'>";
    }
  }

  slideHtml +=
    "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  // =========================================================
  // Page content
  // =========================================================

  slideHtml += "<div class='options cont_ht_sf mx-auto'>";

  slideHtml += "<div class='all_cont'>";

  slideHtml += "<div class='group_elm'>";

  if (
    aObj !== undefined &&
    aObj !== null &&
    aObj.slides !== undefined &&
    aObj.slides.length > 0
  ) {
    for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
      var slide = aObj.slides[slideIndex];

      if (slide.layout === "conversation_again") {
        slideHtml += "<div class='conversation_again_content'>";

        for (
          var sectionIndex = 0;
          sectionIndex < slide.sections.length;
          sectionIndex++
        ) {
          var section = slide.sections[sectionIndex];

          var reverseClass =
            section.imagePosition === "right" ? " conversation_reverse" : "";

          slideHtml += "<div class='" + section.className + reverseClass + "'>";

          // Image
          slideHtml += "<div class='conversation_image_holder'>";

          slideHtml +=
            "<img " +
            "class='conversation_image' " +
            "src='" +
            section.image +
            "' " +
            "alt='" +
            section.imageAlt +
            "'" +
            ">";

          slideHtml += "</div>";

          // Sentences
          slideHtml += "<div class='conversation_text_holder'>";

          for (
            var sentenceIndex = 0;
            sentenceIndex < section.sentences.length;
            sentenceIndex++
          ) {
            var sentence = section.sentences[sentenceIndex];

            slideHtml +=
              "<div " +
              "class='conversation_sentence " +
              "snap_card audioIcon' " +
              "data-slideNum='" +
              Number(slideIndex + 1) +
              "' " +
              "data-audio='" +
              sentence.audio +
              "' " +
              "data-onaudioplay='color:#e43b6d'" +
              ">";

            slideHtml += "<p>" + sentence.text + "</p>";

            slideHtml += "</div>";
          }

          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        slideHtml += "</div>";
      }
    }
  }

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  $(".mainContent").append(slideHtml);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
