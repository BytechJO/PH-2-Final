function bindUnderlineThApostropheEvents(aObj) {
  // =========================================================
  // الضغط على th
  // =========================================================

  $(document)
    .off("click.underlineThApostrophe", ".underline_target")
    .on(
      "click.underlineThApostrophe",
      ".underline_target",
      function () {
        $(this).toggleClass("selected");

        clearUnderlineQuestionFeedback(
          $(this).closest(".underline_apostrophe_question")
        );

        // إعادة تفعيل الأزرار بعد تغيير الإجابة
        $(".checkBtn").removeClass("disabled");
        $(".resetBtn").removeClass("disabled");
      }
    );

  // =========================================================
  // الضغط على مكان apostrophe
  // =========================================================

  $(document)
    .off("click.underlineApostrophe", ".apostrophe_target")
    .on(
      "click.underlineApostrophe",
      ".apostrophe_target",
      function () {
        $(this).toggleClass("selected");

        clearUnderlineQuestionFeedback(
          $(this).closest(".underline_apostrophe_question")
        );

        // إعادة تفعيل الأزرار بعد تغيير الإجابة
        $(".checkBtn").removeClass("disabled");
        $(".resetBtn").removeClass("disabled");
      }
    );
}

function checkUnderlineThApostrophe(aObj) {
  var allCorrect = true;

  $(".underline_apostrophe_question").each(function () {
    var $question = $(this);

    var questionIndex = parseInt($question.attr("data-question-index"));

    var questionData = aObj.questions[questionIndex];

    var selectedUnderline = [];

    var selectedApostrophes = [];

    $question.find(".underline_target.selected").each(function () {
      selectedUnderline.push($(this).attr("data-answer-id"));
    });

    $question.find(".apostrophe_target.selected").each(function () {
      selectedApostrophes.push($(this).attr("data-answer-id"));
    });

    var underlineCorrect = compareUnderlineAnswerArrays(
      selectedUnderline,
      questionData.correctUnderline || [],
    );

    var apostropheCorrect = compareUnderlineAnswerArrays(
      selectedApostrophes,
      questionData.correctApostrophes || [],
    );

    var questionCorrect = underlineCorrect && apostropheCorrect;

    $question.find(".underline_question_feedback").css("display", "flex");

    if (questionCorrect) {
      $question.find(".underline_feedback_tick").show();

      $question.find(".underline_feedback_cross").hide();
    } else {
      allCorrect = false;

      $question.find(".underline_feedback_tick").hide();

      $question.find(".underline_feedback_cross").show();
    }
  });

  showUnderlineThFeedback(allCorrect);
}

function compareUnderlineAnswerArrays(selectedArray, correctArray) {
  if (selectedArray.length !== correctArray.length) {
    return false;
  }

  var selectedSorted = selectedArray.slice().sort();

  var correctSorted = correctArray.slice().sort();

  for (
    var answerIndex = 0;
    answerIndex < selectedSorted.length;
    answerIndex++
  ) {
    if (selectedSorted[answerIndex] !== correctSorted[answerIndex]) {
      return false;
    }
  }

  return true;
}

function clearUnderlineQuestionFeedback($question) {
  $question.find(".underline_question_feedback").hide();

  $question.find(".underline_feedback_tick, .underline_feedback_cross").hide();
}

function resetUnderlineThApostrophe() {
  $(".underline_target").removeClass("selected");

  $(".apostrophe_target").removeClass("selected");

  $(".underline_question_feedback").hide();

  $(".underline_feedback_tick, .underline_feedback_cross").hide();

  $("#feedbackPopup").modal("hide");

  $("#feedbackPopup video").each(function () {
    this.pause();

    this.currentTime = 0;

    $(this).hide();
  });
}

function showUnderlineThFeedback(isCorrect) {
  var selectedVideo = isCorrect ? "#video_1" : "#video_2";

  $("#feedbackPopup video").each(function () {
    this.pause();

    this.currentTime = 0;

    $(this).hide();
  });

  $(selectedVideo).show();

  $("#feedbackPopup").modal("show");

  var videoElement = $(selectedVideo).get(0);

  if (videoElement) {
    var playPromise = videoElement.play();

    if (playPromise !== undefined && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }
}
