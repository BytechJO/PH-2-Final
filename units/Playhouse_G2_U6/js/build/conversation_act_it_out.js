function buildReadingHTML(aObj) {
  var slideHtml = "";

  slideHtml = "<div class='container content_wrap reading_container'>";

  // =====================================================
  // Back / Next
  // =====================================================
  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  // =====================================================
  // Header
  // =====================================================
  slideHtml += '<div class="act_head_group justify-content-center">';

  slideHtml +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  slideHtml += '<div class="q-type-img-container">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    slideHtml += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

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

  slideHtml += '<div class="activityHeading">';

  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  slideHtml += "<div class='page_sub_title d-flex'>";

  slideHtml += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons !== undefined && aObj.subTitleIcons !== null) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
  }

  slideHtml +=
    "<p class='subTitleTextRight'>" + (aObj.subTitleTextRight || "") + "</p>";

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  // =====================================================
  // Content
  // =====================================================
  slideHtml += "<div class='options cont_ht_sf mx-auto'>";

  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center ht_100'>";

  slideHtml += '<div class="group_elm conversation_group">';

  if (
    aObj !== undefined &&
    aObj !== null &&
    aObj.slides !== undefined &&
    aObj.slides !== null &&
    aObj.slides.length > 0
  ) {
    for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
      var slide = aObj.slides[slideIndex];

      slideHtml += '<div class="conversation_card">';

      slideHtml +=
        '<div class="conversation_number">' + slide.number + "</div>";

      slideHtml +=
        '<img class="conversation_image" ' +
        'src="' +
        slide.mainImage +
        '" ' +
        'alt="Conversation panel ' +
        slide.number +
        '">';

      slideHtml += "</div>";
    }
  }

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  $(".mainContent").append(slideHtml);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function findTimeRange(timeToCheck, targetTime) {
  for (let i = 0; i < targetTime.length; i++) {
    let [startTime, endTime] = targetTime[i];

    if (timeToCheck >= startTime && timeToCheck <= endTime) {
      return i;
    }
  }

  return -1;
}
