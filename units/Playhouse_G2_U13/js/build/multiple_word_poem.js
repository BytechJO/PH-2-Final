function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  /* =========================================================
     Navigation
  ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    'sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =========================================================
     Heading
  ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
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

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons !== undefined && aObj.subTitleIcons.length > 0) {
    for (
      var titleIconIndex = 0;
      titleIconIndex < aObj.subTitleIcons.length;
      titleIconIndex++
    ) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[titleIconIndex] + "'>";
    }
  }

  htmlStmt += '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Content
  ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont d-flex ' +
    'justify-content-center align-items-center">';

  htmlStmt += '<div class="hard_s_page_content">';

  /* =========================================================
     Image
  ========================================================= */

  if (aObj.image !== undefined && aObj.image !== "" && aObj.image !== "no") {
    htmlStmt += '<div class="hard_s_image_holder">';

    htmlStmt += '<img class="hard_s_image" ' + 'src="' + aObj.image + '">';

    htmlStmt += "</div>";
  }

  /* =========================================================
     Poem
  ========================================================= */

  htmlStmt += '<div class="hard_s_poem">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var question = aObj.questions[questionIndex];

    var emptyAnswerClass =
      question.answer.length === 0 ? " no_correct_answer" : "";

    htmlStmt +=
      '<div class="hard_s_line' +
      emptyAnswerClass +
      '" ' +
      'data-question-index="' +
      questionIndex +
      '">';

    if (question.question !== undefined && question.question !== "") {
      htmlStmt +=
        '<div class="hard_s_question_text">' + question.question + "</div>";
    }

    htmlStmt += '<div class="hard_s_options">';

    for (
      var optionIndex = 0;
      optionIndex < question.options.length;
      optionIndex++
    ) {
      var option = question.options[optionIndex];

      htmlStmt +=
        '<button type="button" ' +
        'class="hard_s_option" ' +
        'data-option-number="' +
        Number(optionIndex + 1) +
        '" ' +
        'aria-pressed="false">';

      htmlStmt += option.text;

      htmlStmt += "</button>";
    }

    htmlStmt += "</div>";

    htmlStmt += '<div class="hard_s_line_feedback">';

    htmlStmt +=
      '<div class="hard_s_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="hard_s_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  initializeHardSPoem(aObj);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Initialisation
========================================================= */

function initializeHardSPoem(aObj) {
  var activityArea = document.querySelector(".activity_area");

  if (!activityArea) {
    return;
  }

  var options = activityArea.querySelectorAll(".hard_s_option");

  for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
    options[optionIndex].addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.classList.toggle("selected");

      this.setAttribute(
        "aria-pressed",
        this.classList.contains("selected") ? "true" : "false",
      );

      clearHardSFeedback();

      var checkButton = document.querySelector(".checkBtn");

      var resetButton = document.querySelector(".resetBtn");

      if (checkButton) {
        checkButton.classList.remove("disabled");
      }

      if (resetButton) {
        resetButton.classList.remove("disabled");
      }
    });
  }

  /*
    Capture phase:
    هذا الكود يعمل قبل validate الموجودة
    في ملف mcq.js.
  */

  document.addEventListener(
    "click",
    function hardSCheckHandler(event) {
      var checkButton = event.target.closest(".checkBtn");

      if (!checkButton) {
        return;
      }

      /*
        منع ملف MCQ العام من تنفيذ تصحيح ثانٍ.
      */

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (checkButton.classList.contains("disabled")) {
        return;
      }

      validateHardSPoem(aObj);
    },
    true,
  );

  document.addEventListener(
    "click",
    function hardSResetHandler(event) {
      var resetButton = event.target.closest(".resetBtn");

      if (!resetButton) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      resetHardSPoem();
    },
    true,
  );
}

/* =========================================================
   Validation
========================================================= */

function validateHardSPoem(aObj) {
  var lines = document.querySelectorAll(".hard_s_line");

  var allCorrect = true;

  for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    var line = lines[lineIndex];

    var questionIndex = parseInt(line.dataset.questionIndex, 10);

    var question = aObj.questions[questionIndex];

    var selectedOptions = line.querySelectorAll(".hard_s_option.selected");

    var selectedAnswers = [];

    for (
      var selectedIndex = 0;
      selectedIndex < selectedOptions.length;
      selectedIndex++
    ) {
      selectedAnswers.push(
        parseInt(selectedOptions[selectedIndex].dataset.optionNumber, 10),
      );
    }

    selectedAnswers.sort(function (a, b) {
      return a - b;
    });

    var correctAnswers = Array.isArray(question.answer)
      ? question.answer.slice()
      : [];

    correctAnswers.sort(function (a, b) {
      return a - b;
    });

    /*
      answer: []

      لا يوجد اختيار صحيح في هذا السطر:
      - لا يوجد تحديد = صحيح.
      - يوجد أي تحديد = خطأ.
    */

    var lineCorrect;

    if (correctAnswers.length === 0) {
      lineCorrect = selectedAnswers.length === 0;
    } else {
      lineCorrect = arraysAreEqual(selectedAnswers, correctAnswers);
    }

    showHardSLineFeedback(line, lineCorrect);

    if (!lineCorrect) {
      allCorrect = false;
    }
  }

  showFeedback(true, allCorrect);

  if (allCorrect) {
    var resetButton = document.querySelector(".resetBtn");

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  }
}

/* =========================================================
   Compare arrays
========================================================= */

function arraysAreEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (var arrayIndex = 0; arrayIndex < firstArray.length; arrayIndex++) {
    if (firstArray[arrayIndex] !== secondArray[arrayIndex]) {
      return false;
    }
  }

  return true;
}

/* =========================================================
   Per-line feedback
========================================================= */

function showHardSLineFeedback(line, isCorrect) {
  var tick = line.querySelector(".hard_s_tick");

  var cross = line.querySelector(".hard_s_cross");

  if (tick) {
    tick.style.display = isCorrect ? "block" : "none";
  }

  if (cross) {
    cross.style.display = isCorrect ? "none" : "block";
  }
}

/* =========================================================
   Clear feedback
========================================================= */

function clearHardSFeedback() {
  var feedbackIcons = document.querySelectorAll(".hard_s_tick, .hard_s_cross");

  for (var iconIndex = 0; iconIndex < feedbackIcons.length; iconIndex++) {
    feedbackIcons[iconIndex].style.display = "none";
  }
}

/* =========================================================
   Reset
========================================================= */

function resetHardSPoem() {
  var options = document.querySelectorAll(".hard_s_option");

  for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
    options[optionIndex].classList.remove("selected");

    options[optionIndex].setAttribute("aria-pressed", "false");
  }

  clearHardSFeedback();

  var checkButton = document.querySelector(".checkBtn");

  var resetButton = document.querySelector(".resetBtn");

  if (checkButton) {
    checkButton.classList.add("disabled");
  }

  if (resetButton) {
    resetButton.classList.add("disabled");
  }
}
