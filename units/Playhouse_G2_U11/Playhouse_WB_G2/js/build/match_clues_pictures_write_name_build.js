function buildMatchCluesPicturesWriteNameBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null ||
    !Array.isArray(aObj.questions) ||
    !Array.isArray(aObj.pictures)
  ) {
    console.error("Invalid match_clues_pictures_write_name_data");
    return;
  }

  var leftQuestions = aObj.questions.filter(function (question) {
    return question.side === "left";
  });

  var rightQuestions = aObj.questions.filter(function (question) {
    return question.side === "right";
  });

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_left " +
    "subFooterNav backNav mx-1" +
    '">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/back_btn.png">';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_right " +
    "subFooterNav nextNav mx-1" +
    '">';

  htmlStmt += '<a href="">';
  htmlStmt += '<img src="../images/icons/next_btn.png">';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

  htmlStmt += '<div class="' + "act_head_group justify-content-center" + '">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (
    aObj.mainTitleIcon !== undefined &&
    aObj.mainTitleIcon !== null &&
    aObj.mainTitleIcon !== ""
  ) {
    var iconRight = "-18px";

    if (
      aObj.mainTitleIconPos !== undefined &&
      aObj.mainTitleIconPos !== null &&
      aObj.mainTitleIconPos.right !== undefined
    ) {
      iconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      iconRight +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Subtitle
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant audioQuestionTitle" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Main wrappers
  ===================================================== */

  htmlStmt += '<div class="' + "options cont_ht_sf mx-auto" + '">';

  htmlStmt +=
    '<div class="' +
    "all_cont justify-content-start " +
    "justify-content-sm-center" +
    '">';

  htmlStmt +=
    '<div class="' +
    "screen_elements " +
    "match_clues_screen " +
    "d-flex flex-wrap " +
    "justify-content-center " +
    "align-items-center h-100" +
    '">';

  htmlStmt += '<div class="match_clues_workspace">';

  /* =====================================================
     Left questions
  ===================================================== */

  htmlStmt +=
    '<div class="' + "clues_side_column_left left_clues_column" + '">';

  for (var leftIndex = 0; leftIndex < leftQuestions.length; leftIndex++) {
    htmlStmt += buildClueQuestion(leftQuestions[leftIndex]);
  }

  htmlStmt += "</div>";

  /* =====================================================
     Pictures
  ===================================================== */

  htmlStmt += '<div class="pictures_middle_column">';

  for (
    var pictureIndex = 0;
    pictureIndex < aObj.pictures.length;
    pictureIndex++
  ) {
    htmlStmt += buildPictureWithNumber(
      aObj.pictures[pictureIndex],
      pictureIndex,
    );
  }

  htmlStmt += "</div>";

  /* =====================================================
     Right questions
  ===================================================== */

  htmlStmt +=
    '<div class="' + "clues_side_column_right right_clues_column" + '">';

  for (var rightIndex = 0; rightIndex < rightQuestions.length; rightIndex++) {
    htmlStmt += buildClueQuestion(rightQuestions[rightIndex]);
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  console.log("Match clues pictures write name built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Build one question
========================================================= */

function buildClueQuestion(question) {
  var htmlStmt = "";

  htmlStmt +=
    '<div class="' + "clue_question que" + '" data-qno="' + question.qno + '">';

  htmlStmt += '<div class="clue_sentence_row">';

  htmlStmt += '<span class="clue_question_number">' + question.qno + "</span>";

  htmlStmt += '<span class="clue_question_text">' + question.text + "</span>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="clue_answer_row">';

  htmlStmt +=
    "<input " +
    'type="text" ' +
    'class="clue_answer_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false" ' +
    'data-type="text"' +
    ' aria-label="Answer for clue ' +
    question.qno +
    '">';

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
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  return htmlStmt;
}

/* =========================================================
   Build one picture
========================================================= */

function buildPictureWithNumber(picture, index) {
  var htmlStmt = "";

  htmlStmt +=
    '<div class="' +
    "picture_number_card" +
    '" data-picture-index="' +
    index +
    '" data-picture-id="' +
    picture.id +
    '">';

  htmlStmt +=
    "<input " +
    'type="text" ' +
    'class="picture_number_input" ' +
    'maxlength="1" ' +
    'inputmode="numeric" ' +
    'autocomplete="off" ' +
    'data-type="number"' +
    ' aria-label="Clue number for ' +
    picture.id +
    '">';

  htmlStmt += '<div class="picture_image_wrap">';

  htmlStmt += '<img src="' + picture.image + '" alt="' + picture.id + '">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="picture_number_result">';

  htmlStmt += '<div class="picture_tick">';

  htmlStmt += '<img src="../images/icons/check_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += '<div class="picture_cross">';

  htmlStmt += '<img src="../images/icons/cross_btn.png">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  return htmlStmt;
}
