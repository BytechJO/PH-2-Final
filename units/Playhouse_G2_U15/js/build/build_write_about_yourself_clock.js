//  ****************************************** //
//  WRITE ABOUT YOURSELF CLOCK - Build
//  Builds the heading, sentences, inputs and clocks.
//  ****************************************** //

function buildWriteAboutYourselfClockBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return htmlStmt;
  }

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
  htmlStmt += '  <a href=""><img src="../images/icons/back_btn.png"></a>';
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
  htmlStmt += '  <a href=""><img src="../images/icons/next_btn.png"></a>';
  htmlStmt += "</div>";

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '" alt="">';
  }

  if (aObj.mainTitleIcon) {
    var iconRight =
      aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
        ? aObj.mainTitleIconPos.right
        : "0px";

    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      iconRight +
      ';" alt="">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';
  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title d-flex">';
  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
    for (var s = 0; s < aObj.subTitleIcons.length; s++) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[s] + '" alt="">';
    }
  }

  htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';
  htmlStmt += '<div class="all_cont">';
  htmlStmt += '<div class="write_clock_questions">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var question = aObj.questions[i];
    var qNo = i + 1;
    var defaultHour = parseInt(
      question.defaultHour || aObj.defaultHour || 12,
      10,
    );

    htmlStmt +=
      '<div class="que write_clock_que" id="que_' +
      qNo +
      '" data-qno="' +
      qNo +
      '">';

    htmlStmt += '<div class="write_clock_sentence">';

    htmlStmt +=
      '<span class="write_clock_number">' +
      (question.number || qNo) +
      "</span>";

    htmlStmt += '<span class="write_clock_text">' + question.text + "</span>";

    htmlStmt +=
      '<input type="text" class="write_clock_input" ' +
      'maxlength="100" autocomplete="off" spellcheck="false" ' +
      'placeholder="' +
      (question.placeholder || "") +
      '">';

    htmlStmt += '<span class="write_clock_period">.</span>';
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="student_clock" tabindex="0" role="slider" ' +
      'data-hour="' +
      defaultHour +
      '" aria-valuemin="1" aria-valuemax="12" aria-valuenow="' +
      defaultHour +
      '" aria-label="Choose the hour">';

    htmlStmt += '<div class="clock_inner_ring"></div>';

    for (var mark = 0; mark < 60; mark++) {
      htmlStmt +=
        '<span class="clock_mark ' +
        (mark % 5 === 0 ? "clock_mark_big" : "") +
        '" style="transform:rotate(' +
        mark * 6 +
        'deg);"></span>';
    }

    for (var number = 1; number <= 12; number++) {
      var angle = (number * 30 - 90) * (Math.PI / 180);
      var radius = 37;
      var left = 50 + radius * Math.cos(angle);
      var top = 50 + radius * Math.sin(angle);

      htmlStmt +=
        '<span class="clock_number clock_number_' +
        number +
        '" style="left:' +
        left +
        "%;top:" +
        top +
        '%;">' +
        number +
        "</span>";
    }

    // Minute hand is always fixed at 12.
    htmlStmt += '<div class="clock_hand minute_hand"></div>';

    // Only this hour hand moves.
    htmlStmt += '<div class="clock_hand hour_hand"></div>';

    htmlStmt += '<div class="clock_center_dot"></div>';
    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").html(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
