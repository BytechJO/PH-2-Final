function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    // =========================================================
    // Back button
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =========================================================
    // Next button
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";
    htmlStmt += "</div>";

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

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      var titleIconRight =
        aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
          ? aObj.mainTitleIconPos.right
          : "0px";

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        titleIconRight +
        '">';
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

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }

    htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Main content
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // General options
    // =========================================================

    if (
      aObj.options !== undefined &&
      aObj.options !== null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        var optionAudio =
          aObj.optionsAudios && aObj.optionsAudios[key]
            ? aObj.optionsAudios[key]
            : "";

        htmlStmt +=
          '<div class="audioIcon textEnd off d-flex contant" ' +
          'data-audio="' +
          optionAudio +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += '<div class="screen_elements d-flex flex-column">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================================
    // Questions
    // =========================================================

    for (var x = 0; x < numOfRows; x++) {
      htmlStmt += '<div class="ques w-80 d-flex flex-wrap">';

      for (var y = 0; y < numInRowArray[x].length; y++) {
        var questionData = aObj.questions[currentQue - 1];

        if (!questionData) {
          continue;
        }

        var imagesText = questionData.imagesText || [];

        htmlStmt += '<div class="p-0 q_box align-content-between flex-wrap">';

        htmlStmt +=
          '<div class="que que_' +
          currentQue +
          ' h-100" ' +
          'data-qno="' +
          currentQue +
          '">';

        htmlStmt +=
          '<div class="txt_wrap align-content-between flex-wrap justify-content-center">';

        htmlStmt += '<div class="txtBox" data-type="text">';

        // Main question image

        htmlStmt += '<div class="image_space">';

        htmlStmt += '<img src="' + questionData.image + '">';

        htmlStmt += "</div>";

        // Question number

        htmlStmt += '<span class="q_order">' + currentQue + ".</span>";

        // =====================================================
        // Draggable word images
        // =====================================================

        if (imagesText.length > 0) {
          for (var i = 0; i < imagesText.length; i++) {
            var imageItem = imagesText[i];

            var imageSrc =
              typeof imageItem === "object" ? imageItem.src : imageItem;

            var imageWord = typeof imageItem === "object" ? imageItem.text : "";

            htmlStmt +=
              "<div " +
              'class="audioIcon txt-audioIcon imagesText d-flex off contant min_w_fit_contant" ' +
              'data-audio="' +
              (questionData.audio || "") +
              '" ' +
              'data-word="' +
              escapeP19Attribute(imageWord) +
              '" ' +
              'data-original-index="' +
              i +
              '" ' +
              'draggable="true">';

            htmlStmt +=
              "<img " +
              'src="' +
              imageSrc +
              '" ' +
              'alt="' +
              escapeP19Attribute(imageWord) +
              '" ' +
              'draggable="false">';

            htmlStmt += "</div>";
          }
        }

        // =====================================================
        // Answer dropzone
        // =====================================================

        htmlStmt += '<div class="fillin_back">';

        htmlStmt +=
          "<div " +
          'class="image_answer_dropzone" ' +
          'data-question-index="' +
          (currentQue - 1) +
          '">' +
          "</div>";

        /*
         * الـFillIn القديم يحتاج input عادي.
         * نخفيه بصريًا فقط ولا نستخدم type="hidden".
         */

        htmlStmt +=
          "<input " +
          'class="answer_value" ' +
          'type="text" ' +
          'data-type="' +
          (questionData.type || "text") +
          '" ' +
          'maxlength="300" ' +
          'autocomplete="off" ' +
          'value="">';

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        // =====================================================
        // Correct / wrong icons
        // =====================================================

        htmlStmt += '<div class="theIcons answer_feedback_icon">';

        htmlStmt += '<div class="icon_wrap">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png"/>' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png"/>' +
          "</div>";

        htmlStmt += "</div>";
        htmlStmt += "</div>";

        htmlStmt += "</div>";
        htmlStmt += "</div>";
        htmlStmt += "</div>";

        currentQue++;
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  addP19DragStyles();

  initP19ImageDragDrop(aObj);

  initP19ResetButton();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =============================================================
// Initialize drag and drop
// =============================================================

function initP19ImageDragDrop(aObj) {
  var activityArea = document.querySelector(".activity_area");

  if (!activityArea) {
    return;
  }

  var draggedItem = null;

  var draggableItems = activityArea.querySelectorAll(".imagesText");

  var dropzones = activityArea.querySelectorAll(".image_answer_dropzone");

  draggableItems.forEach(function (item) {
    item.addEventListener("dragstart", function (event) {
      if (item.classList.contains("word-used")) {
        event.preventDefault();
        return;
      }

      draggedItem = item;

      item.classList.add("is-dragging");

      event.dataTransfer.effectAllowed = "move";

      event.dataTransfer.setData("text/plain", item.dataset.word || "");
    });

    item.addEventListener("dragend", function () {
      item.classList.remove("is-dragging");

      draggedItem = null;

      dropzones.forEach(function (dropzone) {
        dropzone.classList.remove("drag-over");
      });
    });
  });

  dropzones.forEach(function (dropzone) {
    dropzone.addEventListener("dragenter", function (event) {
      event.preventDefault();

      if (draggedItem) {
        dropzone.classList.add("drag-over");
      }
    });

    dropzone.addEventListener("dragover", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!draggedItem) {
        return;
      }

      event.dataTransfer.dropEffect = "move";

      dropzone.classList.add("drag-over");
    });

    dropzone.addEventListener("dragleave", function (event) {
      if (event.relatedTarget && dropzone.contains(event.relatedTarget)) {
        return;
      }

      dropzone.classList.remove("drag-over");
    });

    dropzone.addEventListener("drop", function (event) {
      event.preventDefault();
      event.stopPropagation();

      dropzone.classList.remove("drag-over");

      if (!draggedItem) {
        return;
      }

      var sourceQuestion = draggedItem.closest(".que");

      var targetQuestion = dropzone.closest(".que");

      /*
       * منع نقل كلمات سؤال إلى سؤال آخر.
       */

      if (
        !sourceQuestion ||
        !targetQuestion ||
        sourceQuestion !== targetQuestion
      ) {
        draggedItem = null;
        return;
      }

      addP19DroppedImage(dropzone, draggedItem, aObj);

      draggedItem = null;
    });

    /*
     * حذف العنصر المسحوب عند الضغط على ×.
     */

    dropzone.addEventListener("click", function (event) {
      var removeButton = event.target.closest(".remove_answer_item");

      if (!removeButton) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      var droppedItem = removeButton.closest(".dropped_answer_item");

      if (!droppedItem) {
        return;
      }

      restoreP19SourceImage(dropzone, droppedItem);

      droppedItem.remove();

      updateP19Answer(dropzone, aObj);
    });
  });
}

// =============================================================
// Add dropped image
// =============================================================

function addP19DroppedImage(dropzone, sourceItem, aObj) {
  if (sourceItem.classList.contains("word-used")) {
    return;
  }

  var word = String(sourceItem.dataset.word || "").trim();

  var sourceImage = sourceItem.querySelector("img");

  if (!word || !sourceImage) {
    return;
  }

  var droppedItem = document.createElement("div");

  droppedItem.className = "dropped_answer_item";

  droppedItem.dataset.word = word;

  droppedItem.dataset.originalIndex = sourceItem.dataset.originalIndex;

  var droppedImage = document.createElement("img");

  droppedImage.src = sourceImage.src;
  droppedImage.alt = word;
  droppedImage.draggable = false;

  var removeButton = document.createElement("button");

  removeButton.type = "button";

  removeButton.className = "remove_answer_item";

  removeButton.innerHTML = "×";

  removeButton.setAttribute("aria-label", "Remove word");

  droppedItem.appendChild(droppedImage);

  droppedItem.appendChild(removeButton);

  dropzone.appendChild(droppedItem);

  sourceItem.classList.add("word-used");

  sourceItem.setAttribute("draggable", "false");

  updateP19Answer(dropzone, aObj);
}

// =============================================================
// Restore source image
// =============================================================

function restoreP19SourceImage(dropzone, droppedItem) {
  var question = dropzone.closest(".que");

  if (!question) {
    return;
  }

  var originalIndex = droppedItem.dataset.originalIndex;

  var sourceItem = question.querySelector(
    '.imagesText[data-original-index="' + originalIndex + '"]',
  );

  if (!sourceItem) {
    return;
  }

  sourceItem.classList.remove("word-used");

  sourceItem.setAttribute("draggable", "true");
}

// =============================================================
// Update answer input
// =============================================================

function updateP19Answer(dropzone, aObj) {
  var question = dropzone.closest(".que");

  if (!question) {
    return;
  }

  var answerInput = question.querySelector(".answer_value");

  if (!answerInput) {
    return;
  }

  var words = [];

  dropzone.querySelectorAll(".dropped_answer_item").forEach(function (item) {
    var word = String(item.dataset.word || "").trim();

    if (word) {
      words.push(word);
    }
  });

  var userAnswer = normalizeP19Answer(words.join(" "));

  var questionIndex = parseInt(dropzone.dataset.questionIndex, 10);

  var questionData = aObj.questions[questionIndex];

  var correctAnswer = "";

  if (questionData && questionData.answer && questionData.answer.length > 0) {
    correctAnswer = normalizeP19Answer(questionData.answer[0]);
  }

  /*
   * عندما تكون الجملة صحيحة، نضع نفس الإجابة
   * الموجودة في answer حتى ينجح فحص FillIn القديم.
   */

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    answerInput.value = questionData.answer[0];
  } else {
    answerInput.value = userAnswer;
  }

  answerInput.dispatchEvent(
    new Event("input", {
      bubbles: true,
    }),
  );

  hideP19Feedback(question);

  var checkButton = document.querySelector(".checkBtn");

  var resetButton = document.querySelector(".resetBtn");

  if (words.length > 0) {
    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  }
}

// =============================================================
// Hide old feedback after answer change
// =============================================================

function hideP19Feedback(question) {
  var iconWrap = question.querySelector(".icon_wrap");

  var tick = question.querySelector(".tick");

  var cross = question.querySelector(".cross");

  if (iconWrap) {
    iconWrap.style.display = "none";
  }

  if (tick) {
    tick.style.display = "none";
  }

  if (cross) {
    cross.style.display = "none";
  }
}

// =============================================================
// Normalize answer
// =============================================================

function normalizeP19Answer(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

// =============================================================
// Inject styles
// =============================================================

function addP19DragStyles() {
  if (document.getElementById("p19-image-drag-styles")) {
    return;
  }

  var style = document.createElement("style");

  style.id = "p19-image-drag-styles";

  style.textContent = `
    .fill_in .que {
      position: relative;
    }

    .imagesText {
      cursor: grab;
      user-select: none;
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    }

    .imagesText:active {
      cursor: grabbing;
    }

    .imagesText.is-dragging {
      opacity: 0.4;
      transform: scale(0.94);
    }

    .imagesText.word-used {
      opacity: 0.35;
      pointer-events: none;
    }

    .fillin_back {
      overflow: visible !important;
    }

    .image_answer_dropzone {
      width: 100%;
      height: 105px;
      min-height: 105px;

      margin: -18px 20px 0;
      padding: 8px 18px 6px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      gap: 12px;

      position: relative;
      z-index: 20;

      overflow-x: auto;
      overflow-y: visible;

      box-sizing: border-box;

      background-color: transparent;
    }

    .image_answer_dropzone.drag-over {
      background-color:
        rgba(30, 110, 210, 0.1);
    }

    .dropped_answer_item {
      height: 66px;
      min-width: max-content;

      flex: 0 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      z-index: 30;
    }

    .dropped_answer_item img {
      width: auto;
      height: 100%;
      max-width: 190px;

      display: block;

      object-fit: contain;

      pointer-events: none;
      user-select: none;
    }

    .remove_answer_item {
      width: 22px;
      height: 22px;

      padding: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -11px;
      right: -9px;
      z-index: 100;

      border: none;
      border-radius: 50%;

      color: white;
      background-color: #d2232a;

      font-family: Arial, sans-serif;
      font-size: 17px;
      font-weight: bold;
      line-height: 1;

      cursor: pointer;
    }

    /*
     * نخفي input بصريًا فقط،
     * لكنه يظل موجودًا حتى يقرأه FillIn.
     */

    .answer_value {
      position: absolute !important;

      width: 1px !important;
      height: 1px !important;

      margin: 0 !important;
      padding: 0 !important;

      opacity: 0 !important;

      border: none !important;

      pointer-events: none !important;
    }

    /*
     * علامة الصح أو الخطأ فوق العناصر.
     */

    .answer_feedback_icon {
      width: 45px;
      height: 45px;

      position: absolute;
      top: 35px;
      right: 5px;
      z-index: 500;

      pointer-events: none;
    }

    .answer_feedback_icon .icon_wrap {
      width: 45px !important;
      height: 45px !important;

      position: relative !important;

      top: auto !important;
      right: auto !important;
      left: auto !important;

      margin: 0 !important;

      z-index: 500;
    }

    .answer_feedback_icon .tick,
    .answer_feedback_icon .cross {
      width: 45px !important;
      height: 45px !important;

      position: absolute !important;

      top: 0 !important;
      right: 0 !important;

      z-index: 501;
    }

    .answer_feedback_icon .tick img,
    .answer_feedback_icon .cross img {
      width: 100% !important;
      height: 100% !important;

      object-fit: contain;
    }
  `;

  document.head.appendChild(style);
}

// =============================================================
// Escape HTML attributes
// =============================================================

function escapeP19Attribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
// =============================================================
// Reset button
// =============================================================

function initP19ResetButton() {
  /*
   * نحذف listener السابق حتى لا يتكرر
   * عند فتح الصفحة أكثر من مرة.
   */
  $(document)
    .off("click.p19ImageReset", ".resetBtn")
    .on("click.p19ImageReset", ".resetBtn", function () {
      /*
       * ننتظر حتى ينتهي reset الأساسي،
       * ثم نرجع عناصر الدروب لحالتها الأولى.
       */
      setTimeout(function () {
        resetP19ImageDragActivity();
      }, 30);
    });
}

function resetP19ImageDragActivity() {
  var activityArea = document.querySelector(".activity_area");

  if (!activityArea) {
    return;
  }

  var questions = activityArea.querySelectorAll(".que");

  questions.forEach(function (question) {
    var dropzone = question.querySelector(
      ".image_answer_dropzone",
    );

    var answerInput = question.querySelector(
      ".answer_value",
    );

    // =========================================================
    // 1. حذف الصور الموجودة داخل منطقة الإجابة
    // =========================================================

    if (dropzone) {
      dropzone.innerHTML = "";

      dropzone.classList.remove("drag-over");

      dropzone.style.backgroundColor = "";
    }

    // =========================================================
    // 2. إعادة الصور الأصلية قابلة للسحب
    // =========================================================

    var sourceItems = question.querySelectorAll(
      ".imagesText",
    );

    sourceItems.forEach(function (item) {
      item.classList.remove(
        "word-used",
        "is-dragging",
      );

      item.setAttribute("draggable", "true");

      item.style.opacity = "";
      item.style.pointerEvents = "";
      item.style.transform = "";
    });

    // =========================================================
    // 3. تفريغ input المستخدم في التحقق
    // =========================================================

    if (answerInput) {
      answerInput.value = "";

      answerInput.style.color = "black";

      answerInput.classList.remove(
        "isCorrect",
        "isNotCorrect",
        "correct",
        "wrong",
      );
    }

    // =========================================================
    // 4. إخفاء الصح والخطأ
    // =========================================================

    hideP19Feedback(question);

    var iconWrap = question.querySelector(
      ".icon_wrap",
    );

    var tick = question.querySelector(".tick");

    var cross = question.querySelector(".cross");

    if (iconWrap) {
      iconWrap.style.display = "none";
    }

    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "none";
    }
  });

  // ===========================================================
  // 5. إخفاء feedback العام
  // ===========================================================

  var feedbackElements = document.querySelectorAll(
    ".feedback, " +
      ".feedback_holder, " +
      ".feedbackHolder, " +
      ".correct_feedback, " +
      ".wrong_feedback",
  );

  feedbackElements.forEach(function (element) {
    element.style.display = "none";

    element.classList.remove(
      "show",
      "active",
      "correct",
      "wrong",
    );
  });

  // ===========================================================
  // 6. تعطيل Check وReset بعد التفريغ
  // ===========================================================

  var checkButton = document.querySelector(
    ".checkBtn",
  );

  var resetButton = document.querySelector(
    ".resetBtn",
  );

  if (checkButton) {
    checkButton.classList.add("disabled");
  }

  if (resetButton) {
    resetButton.classList.add("disabled");
  }
}