function buildReadingHTML(aObj) {
  var slideHtml = "";

  slideHtml +=
    "<div class='container content_wrap reading_container you_do_it_page'>";

  // =========================================================
  // Footer Navigation
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
  // Main Header
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

    slideHtml += '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '">';

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

  slideHtml += "</div>";

  // =========================================================
  // Page Content
  // =========================================================

  slideHtml += "<div class='options cont_ht_sf mx-auto'>";

  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center'>";

  slideHtml +=
    "<div class='group_elm d-flex justify-content-center align-items-center'>";

  if (
    aObj !== undefined &&
    aObj !== null &&
    aObj.slides !== undefined &&
    aObj.slides.length > 0
  ) {
    for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
      var slide = aObj.slides[slideIndex];

      if (slide.layout === "you_do_it") {
        slideHtml += "<div class='you_do_it_content'>";

        slideHtml +=
          "<div class='you_do_it_audio snap_card audioIcon' " +
          "data-slideNum='" +
          Number(slideIndex + 1) +
          "' " +
          "data-audio='" +
          slide.audio +
          "' " +
          "data-onaudioplay='color:#df2f35'" +
          ">";

        slideHtml +=
          "<span class='you_do_it_number'>" + slide.number + "</span>";

        slideHtml += "<span class='you_do_it_title'>" + slide.title + "</span>";

        slideHtml +=
          "<img " +
          "class='you_do_it_icon' " +
          "src='" +
          slide.icon +
          "' " +
          "alt='" +
          slide.iconAlt +
          "'" +
          ">";

        slideHtml +=
          "<span class='you_do_it_instruction'>" +
          slide.instruction +
          "</span>";

        slideHtml += "</div>";
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
