function buildFillInBody(aObj) {
  var htmlStmt = "";

  // =========================================================
  // Main wrapper
  // =========================================================

  htmlStmt +=
    '<div class="container content_wrap activity_wrap ' + 'where_gina_page">';

  // =========================================================
  // Navigation
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  // =========================================================
  // Heading
  // =========================================================
 htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

  // =========================================================
  // Activity
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont d-flex ' +
    'justify-content-center align-items-center">';

  htmlStmt += '<div class="where_gina_content">';

  htmlStmt +=
    '<div class="where_gina_question audioIcon off contant" ' +
    'data-audio="' +
    aObj.questionAudio +
    '">';

  htmlStmt += "<span>" + aObj.questionText + "</span>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="where_gina_answer_row">';

  htmlStmt +=
    "<input " +
    'class="where_gina_input" ' +
    'type="text" ' +
    'autocomplete="off" ' +
    'maxlength="' +
    aObj.maxlength +
    '"' +
    ">";

  htmlStmt +=
    '<div class="where_gina_result">' +
    '<div class="gina_tick">' +
    '<img src="../images/icons/check_btn.png">' +
    "</div>" +
    '<div class="gina_cross">' +
    '<img src="../images/icons/cross_btn.png">' +
    "</div>" +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  initialiseWhereGinaActivity(aObj);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Activity behaviour
========================================================= */

function initialiseWhereGinaActivity(aObj) {
  var input = document.querySelector(".where_gina_input");

  var tick = document.querySelector(".gina_tick");

  var cross = document.querySelector(".gina_cross");

  if (!input) {
    return;
  }

  tick.style.display = "none";
  cross.style.display = "none";

  input.addEventListener("input", function () {
    this.style.color = "black";

    tick.style.display = "none";
    cross.style.display = "none";

    var checkButton = document.querySelector(".checkBtn");

    var resetButton = document.querySelector(".resetBtn");

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  });

  $(document)
    .off("click.whereGinaCheck", ".checkBtn")
    .on("click.whereGinaCheck", ".checkBtn", function () {
      if ($(this).hasClass("disabled")) {
        return;
      }

      validateWhereGinaAnswer(input, tick, cross, aObj);
    });

  $(document)
    .off("click.whereGinaReset", ".resetBtn")
    .on("click.whereGinaReset", ".resetBtn", function () {
      input.value = "";
      input.style.color = "black";

      tick.style.display = "none";
      cross.style.display = "none";

      var checkButton = document.querySelector(".checkBtn");

      if (checkButton) {
        checkButton.classList.add("disabled");
      }
    });
}

/* =========================================================
   Validation
========================================================= */

function validateWhereGinaAnswer(input, tick, cross, aObj) {
  var userAnswer = normalizeWhereGinaAnswer(input.value);

  var acceptedAnswers = [aObj.answer].concat(aObj.alternateAnswers || []);

  var isCorrect = acceptedAnswers.some(function (answer) {
    return normalizeWhereGinaAnswer(answer) === userAnswer;
  });

  tick.style.display = isCorrect ? "block" : "none";

  cross.style.display = isCorrect ? "none" : "block";

  showFeedback(true, isCorrect);
}

/* =========================================================
   Ignore punctuation, spaces and letter case
========================================================= */

function normalizeWhereGinaAnswer(value) {
  return (
    String(value || "")
      .toLowerCase()

      // توحيد الفواصل
      .replace(/[،,;:.\-_]/g, " ")

      // حذف المسافات الزائدة
      .replace(/\s+/g, " ")

      .trim()
  );
}
