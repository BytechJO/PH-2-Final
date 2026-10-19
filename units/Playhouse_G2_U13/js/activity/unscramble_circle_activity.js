function initUnscrambleCircleActivity(aObj) {
  var activity = document.querySelector(".unscramble_circle_activity");

  if (!activity) {
    return;
  }

  if (activity.dataset.initialized === "true") {
    return;
  }

  activity.dataset.initialized = "true";

  createLocalActivityControls();

  var inputs = activity.querySelectorAll(".unscramble_input");

  /* =========================================================
     Live writing
  ========================================================= */

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var index = parseInt(this.dataset.index, 10);

      renderLiveSentence(activity, index, this.value);

      clearFirstRowFeedback(activity, index);

      clearSecondRowFeedback(activity, index);

      /*
        إذا تغيّرت الجملة،
        نشيل التحديد القديم من نفس السطر.
      */

      var secondRow = activity.querySelector(
        '.circle_sentence_row[data-index="' + index + '"]',
      );

      if (secondRow) {
        secondRow
          .querySelectorAll(".circle_word.selected")
          .forEach(function (word) {
            word.classList.remove("selected");

            word.setAttribute("aria-pressed", "false");
          });
      }

      updateFirstControlsState(activity);
      updateSecondControlsState(activity);
    });
  });

  /* =========================================================
     Delegated click events
  ========================================================= */

  activity.addEventListener("click", function (event) {
    /* ================= Question 1 Check ================= */

    var firstCheckButton = event.target.closest(".first_check_btn");

    if (firstCheckButton) {
      event.preventDefault();
      event.stopPropagation();

      if (firstCheckButton.classList.contains("disabled")) {
        return;
      }

      checkFirstQuestion(activity, aObj);

      return;
    }

    /* ================= Question 1 Reset ================= */

    var firstResetButton = event.target.closest(".first_reset_btn");

    if (firstResetButton) {
      event.preventDefault();
      event.stopPropagation();

      if (firstResetButton.classList.contains("disabled")) {
        return;
      }

      resetFirstQuestion(activity, aObj);

      return;
    }

    /* ================= Question 2 Check ================= */

    var secondCheckButton = event.target.closest(".second_check_btn");

    if (secondCheckButton) {
      event.preventDefault();
      event.stopPropagation();

      if (secondCheckButton.classList.contains("disabled")) {
        return;
      }

      checkSecondQuestion(activity, aObj);

      return;
    }

    /* ================= Question 2 Reset ================= */

    var secondResetButton = event.target.closest(".second_reset_btn");

    if (secondResetButton) {
      event.preventDefault();
      event.stopPropagation();

      if (secondResetButton.classList.contains("disabled")) {
        return;
      }

      resetSecondQuestion(activity);

      return;
    }

    /* ================= Select word ================= */

    var wordButton = event.target.closest(".circle_word");

    if (!wordButton) {
      return;
    }

    event.preventDefault();

    var sentenceRow = wordButton.closest(".circle_sentence_row");

    if (!sentenceRow) {
      return;
    }

    /*
        يسمح بتحديد كلمة واحدة فقط
        في كل جملة.
      */

    var rowWords = sentenceRow.querySelectorAll(".circle_word");

    rowWords.forEach(function (word) {
      if (word !== wordButton) {
        word.classList.remove("selected");

        word.setAttribute("aria-pressed", "false");
      }
    });

    var willSelect = !wordButton.classList.contains("selected");

    wordButton.classList.toggle("selected", willSelect);

    wordButton.setAttribute("aria-pressed", willSelect ? "true" : "false");

    var rowIndex = parseInt(sentenceRow.dataset.index, 10);

    clearSecondRowFeedback(activity, rowIndex);

    updateSecondControlsState(activity);
  });
}

/* =========================================================
   Copy original controls
========================================================= */

function createLocalActivityControls() {
  var activity = document.querySelector(".unscramble_circle_activity");

  if (!activity) {
    return;
  }

  var originalCheck = document.querySelector(
    ".sub_footer_buttons_wrap .checkBtn",
  );

  var originalReset = document.querySelector(
    ".sub_footer_buttons_wrap .resetBtn",
  );

  /*
    أزرار الفوتر قد لا تكون انبنت بعد.
  */

  if (!originalCheck || !originalReset) {
    setTimeout(createLocalActivityControls, 100);

    return;
  }

  var controlSections = activity.querySelectorAll(".section_old_controls");

  controlSections.forEach(function (section, sectionIndex) {
    var checkHolder = section.querySelector(".local_check_holder");

    var resetHolder = section.querySelector(".local_reset_holder");

    if (!checkHolder || !resetHolder) {
      return;
    }

    if (checkHolder.children.length > 0 || resetHolder.children.length > 0) {
      return;
    }

    var checkClone = originalCheck.cloneNode(true);

    var resetClone = originalReset.cloneNode(true);

    /*
        إزالة كلاسات الأحداث العامة،
        لكن نخلي disabled بالبداية.
      */

    checkClone.classList.remove("checkBtn");

    resetClone.classList.remove("resetBtn");

    checkClone.classList.add(
      "local_activity_btn",
      "local_check_btn",
      "disabled",
    );

    resetClone.classList.add(
      "local_activity_btn",
      "local_reset_btn",
      "disabled",
    );

    checkClone.setAttribute("aria-disabled", "true");

    resetClone.setAttribute("aria-disabled", "true");

    if (sectionIndex === 0) {
      checkClone.classList.add("first_check_btn");

      resetClone.classList.add("first_reset_btn");
    } else {
      checkClone.classList.add("second_check_btn");

      resetClone.classList.add("second_reset_btn");
    }

    removeIdsFromClone(checkClone);
    removeIdsFromClone(resetClone);

    checkHolder.appendChild(checkClone);

    resetHolder.appendChild(resetClone);
  });

  /*
    إخفاء أزرار الفوتر الأصلية.
  */

  originalCheck.style.display = "none";
  originalReset.style.display = "none";

  updateFirstControlsState(activity);
  updateSecondControlsState(activity);
}

/* =========================================================
   Remove duplicate IDs
========================================================= */

function removeIdsFromClone(element) {
  if (!element) {
    return;
  }

  element.removeAttribute("id");

  element.querySelectorAll("[id]").forEach(function (child) {
    child.removeAttribute("id");
  });
}

/* =========================================================
   Render live sentence
========================================================= */

function renderLiveSentence(activity, index, sentenceValue) {
  var liveContainer = activity.querySelector(
    '.live_sentence_words[data-index="' + index + '"]',
  );

  if (!liveContainer) {
    return;
  }

  var sentence = String(sentenceValue || "").trim();

  liveContainer.innerHTML = "";

  if (sentence === "") {
    liveContainer.innerHTML =
      '<span class="live_placeholder">' +
      "Write the sentence above." +
      "</span>";

    return;
  }

  var words = sentence.split(/\s+/);

  words.forEach(function (word) {
    var wordButton = document.createElement("button");

    wordButton.type = "button";
    wordButton.className = "circle_word";

    wordButton.textContent = word;

    wordButton.dataset.cleanWord = normalizeActivityWord(word);

    wordButton.setAttribute("aria-pressed", "false");

    liveContainer.appendChild(wordButton);
  });
}

/* =========================================================
   Check question 1
========================================================= */

function checkFirstQuestion(activity, aObj) {
  var allCorrect = true;

  aObj.firstQuestion.questions.forEach(function (question, index) {
    var input = activity.querySelector(
      '.unscramble_input[data-index="' + index + '"]',
    );

    var row = activity.querySelector(
      '.unscramble_row[data-row-index="' + index + '"]',
    );

    if (!input || !row) {
      allCorrect = false;
      return;
    }

    var userAnswer = normalizeSentenceForCheck(input.value);

    var correctAnswer = normalizeSentenceForCheck(question.answer);

    var isCorrect = userAnswer !== "" && userAnswer === correctAnswer;

    showRowFeedback(row, "first", isCorrect);

    if (!isCorrect) {
      allCorrect = false;
    }
  });

  playSectionFeedback(allCorrect);
}

/* =========================================================
   Reset question 1
========================================================= */

function resetFirstQuestion(activity, aObj) {
  var inputs = activity.querySelectorAll(".unscramble_input");

  inputs.forEach(function (input) {
    input.value = "";
  });

  aObj.firstQuestion.questions.forEach(function (question, index) {
    renderLiveSentence(activity, index, "");
  });

  clearAllFirstFeedback(activity);
  clearAllSecondFeedback(activity);
  clearAllWordSelections(activity);

  closeFeedbackPopup();

  updateFirstControlsState(activity);
  updateSecondControlsState(activity);

  if (inputs.length > 0) {
    inputs[0].focus();
  }
}

/* =========================================================
   Check question 2
========================================================= */

function checkSecondQuestion(activity, aObj) {
  var allCorrect = true;

  aObj.secondQuestion.answers.forEach(function (correctWord, index) {
    var row = activity.querySelector(
      '.circle_sentence_row[data-index="' + index + '"]',
    );

    if (!row) {
      allCorrect = false;
      return;
    }

    var selectedWord = row.querySelector(".circle_word.selected");

    var selectedAnswer = selectedWord
      ? normalizeActivityWord(
          selectedWord.dataset.cleanWord || selectedWord.textContent,
        )
      : "";

    var expectedAnswer = normalizeActivityWord(correctWord);

    var isCorrect = selectedAnswer !== "" && selectedAnswer === expectedAnswer;

    showRowFeedback(row, "second", isCorrect);

    if (!isCorrect) {
      allCorrect = false;
    }
  });

  playSectionFeedback(allCorrect);
}

/* =========================================================
   Reset question 2
========================================================= */

function resetSecondQuestion(activity) {
  clearAllWordSelections(activity);
  clearAllSecondFeedback(activity);

  closeFeedbackPopup();

  updateSecondControlsState(activity);
}

/* =========================================================
   Enable / disable first controls
========================================================= */

function updateFirstControlsState(activity) {
  var hasWriting = false;

  activity.querySelectorAll(".unscramble_input").forEach(function (input) {
    if (input.value.trim() !== "") {
      hasWriting = true;
    }
  });

  setLocalControlsDisabled(activity, ".first_old_controls", !hasWriting);
}

/* =========================================================
   Enable / disable second controls
========================================================= */

function updateSecondControlsState(activity) {
  var hasSelectedWord =
    activity.querySelector(".circle_word.selected") !== null;

  setLocalControlsDisabled(activity, ".second_old_controls", !hasSelectedWord);
}

/* =========================================================
   Apply disabled state
========================================================= */

function setLocalControlsDisabled(activity, controlsSelector, disabled) {
  var controls = activity.querySelector(controlsSelector);

  if (!controls) {
    return;
  }

  controls.querySelectorAll(".local_activity_btn").forEach(function (button) {
    button.classList.toggle("disabled", disabled);

    button.setAttribute("aria-disabled", disabled ? "true" : "false");
  });
}

/* =========================================================
   Play feedback video
========================================================= */

function playSectionFeedback(isCorrect) {
  if (typeof showFeedback === "function") {
    showFeedback(true, isCorrect);
  }
}

/* =========================================================
   Close feedback popup
========================================================= */

function closeFeedbackPopup() {
  if (typeof $ !== "undefined" && $("#feedbackPopup").length > 0) {
    $("#feedbackPopup").modal("hide");
  }
}

/* =========================================================
   Normalize sentence
========================================================= */

function normalizeSentenceForCheck(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[’‘`´ʼ＇]/g, "'")
    .replace(/[.,!?;:]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   Normalize word
========================================================= */

function normalizeActivityWord(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[’‘`´ʼ＇]/g, "'")
    .replace(/[.,!?;:'"()[\]{}]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   Show row feedback
========================================================= */

function showRowFeedback(row, feedbackType, isCorrect) {
  var feedback = row.querySelector("." + feedbackType + "_feedback");

  if (!feedback) {
    return;
  }

  var tick = feedback.querySelector(".feedback_tick");

  var cross = feedback.querySelector(".feedback_cross");

  if (tick) {
    tick.style.display = isCorrect ? "block" : "none";
  }

  if (cross) {
    cross.style.display = isCorrect ? "none" : "block";
  }
}

/* =========================================================
   Clear first row feedback
========================================================= */

function clearFirstRowFeedback(activity, index) {
  var row = activity.querySelector(
    '.unscramble_row[data-row-index="' + index + '"]',
  );

  clearRowFeedback(row, "first");
}

/* =========================================================
   Clear second row feedback
========================================================= */

function clearSecondRowFeedback(activity, index) {
  var row = activity.querySelector(
    '.circle_sentence_row[data-index="' + index + '"]',
  );

  clearRowFeedback(row, "second");
}

/* =========================================================
   Clear row feedback
========================================================= */

function clearRowFeedback(row, feedbackType) {
  if (!row) {
    return;
  }

  var feedback = row.querySelector("." + feedbackType + "_feedback");

  if (!feedback) {
    return;
  }

  feedback
    .querySelectorAll(".feedback_tick, .feedback_cross")
    .forEach(function (icon) {
      icon.style.display = "none";
    });
}

/* =========================================================
   Clear all first feedback
========================================================= */

function clearAllFirstFeedback(activity) {
  activity
    .querySelectorAll(
      ".first_feedback .feedback_tick, " + ".first_feedback .feedback_cross",
    )
    .forEach(function (icon) {
      icon.style.display = "none";
    });
}

/* =========================================================
   Clear all second feedback
========================================================= */

function clearAllSecondFeedback(activity) {
  activity
    .querySelectorAll(
      ".second_feedback .feedback_tick, " + ".second_feedback .feedback_cross",
    )
    .forEach(function (icon) {
      icon.style.display = "none";
    });
}

/* =========================================================
   Clear selected words
========================================================= */

function clearAllWordSelections(activity) {
  activity.querySelectorAll(".circle_word.selected").forEach(function (word) {
    word.classList.remove("selected");

    word.setAttribute("aria-pressed", "false");
  });
}
