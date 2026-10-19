function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    // =====================================================
    // Back / Next
    // =====================================================

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =====================================================
    // Heading
    // =====================================================

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
      var iconRight =
        aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
          ? aObj.mainTitleIconPos.right
          : "0px";

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
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

    // =====================================================
    // Main activity
    // =====================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements d-flex flex-column">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    for (var x = 0; x < numOfRows; x++) {
      htmlStmt += '<div class="ques w-80 d-flex flex-wrap">';

      for (var y = 0; y < numInRowArray[x].length; y++) {
        var question = aObj.questions[currentQue - 1];

        if (!question) {
          continue;
        }

        var imagesText = question.imagesText || [];

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

        // Main image
        htmlStmt += '<div class="image_space">';

        htmlStmt += '<img src="' + question.image + '">';

        htmlStmt += "</div>";

        // Question number
        htmlStmt += '<span class="q_order">' + currentQue + ".</span>";

        // Draggable images
        for (var i = 0; i < imagesText.length; i++) {
          var item = imagesText[i];

          var imageSrc = typeof item === "object" ? item.src : item;

          var imageWord =
            typeof item === "object"
              ? item.text
              : getWordFromImagePath(imageSrc);

          htmlStmt +=
            '<div class="audioIcon txt-audioIcon imagesText d-flex off contant min_w_fit_contant" ' +
            'data-audio="' +
            (question.audio || "") +
            '" ' +
            'data-word="' +
            escapeAttribute(imageWord) +
            '" ' +
            'data-original-index="' +
            i +
            '" ' +
            'draggable="true">';

          htmlStmt +=
            '<img src="' +
            imageSrc +
            '" ' +
            'alt="' +
            escapeAttribute(imageWord) +
            '" ' +
            'draggable="false">';

          htmlStmt += "</div>";
        }

        // Answer area
        htmlStmt += '<div class="fillin_back">';

        htmlStmt +=
          '<div class="image_answer_dropzone" ' +
          'data-question-index="' +
          (currentQue - 1) +
          '"></div>';

        /*
         * input عادي وليس hidden حتى يراه كود FillIn القديم.
         * نخفيه بصريًا فقط عن طريق style.
         */
        htmlStmt +=
          "<input " +
          'class="answer_value" ' +
          'type="text" ' +
          'data-type="text" ' +
          'maxlength="300" ' +
          'autocomplete="off" ' +
          'value="" ' +
          'style="' +
          "position:absolute;" +
          "width:1px;" +
          "height:1px;" +
          "opacity:0;" +
          "pointer-events:none;" +
          "padding:0;" +
          "margin:0;" +
          "border:0;" +
          '">';

        htmlStmt += "</div>";
        htmlStmt += "</div>";

        // =================================================
        // Correct / wrong feedback
        // =================================================

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

  $(".activity_area").append(htmlStmt);

  addSentenceDragStyles();
  initSentenceImageDragDrop(aObj);
  initSentenceImageReset();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// =============================================================
// Drag and drop
// =============================================================

function initSentenceImageDragDrop(aObj) {
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
    dropzone.addEventListener("dragover", function (event) {
      event.preventDefault();

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
       * منع سحب كلمات سؤال إلى سؤال آخر.
       */
      if (
        !sourceQuestion ||
        !targetQuestion ||
        sourceQuestion !== targetQuestion
      ) {
        draggedItem = null;
        return;
      }

      addDroppedWord(dropzone, draggedItem, aObj);

      draggedItem = null;
    });

    dropzone.addEventListener("click", function (event) {
      var removeButton = event.target.closest(".remove_answer_item");

      if (!removeButton) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      var answerItem = removeButton.closest(".dropped_answer_item");

      if (!answerItem) {
        return;
      }

      restoreSourceWord(dropzone, answerItem);

      answerItem.remove();

      updateSentenceAnswer(dropzone, aObj);
    });
  });
}

function addDroppedWord(dropzone, sourceItem, aObj) {
  var word = String(sourceItem.dataset.word || "").trim();

  var sourceImage = sourceItem.querySelector("img");

  if (!word || !sourceImage) {
    return;
  }

  /*
   * منع استخدام نفس العنصر مرتين.
   */
  if (sourceItem.classList.contains("word-used")) {
    return;
  }

  var answerItem = document.createElement("div");

  answerItem.className = "dropped_answer_item";

  answerItem.dataset.word = word;

  answerItem.dataset.originalIndex = sourceItem.dataset.originalIndex;

  var answerImage = document.createElement("img");

  answerImage.src = sourceImage.src;
  answerImage.alt = word;
  answerImage.draggable = false;

  var removeButton = document.createElement("button");

  removeButton.type = "button";

  removeButton.className = "remove_answer_item";

  removeButton.innerHTML = "×";

  removeButton.setAttribute("aria-label", "Remove word");

  answerItem.appendChild(answerImage);
  answerItem.appendChild(removeButton);

  dropzone.appendChild(answerItem);

  sourceItem.classList.add("word-used");

  sourceItem.setAttribute("draggable", "false");

  updateSentenceAnswer(dropzone, aObj);
}

function restoreSourceWord(dropzone, answerItem) {
  var question = dropzone.closest(".que");

  if (!question) {
    return;
  }

  var originalIndex = answerItem.dataset.originalIndex;

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
// Update input value
// =============================================================

function updateSentenceAnswer(dropzone, aObj) {
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

  var userAnswer = normalizeSentence(words.join(" "));

  var questionIndex = parseInt(dropzone.dataset.questionIndex, 10);

  var questionData = aObj.questions[questionIndex];

  var correctAnswer = "";

  if (questionData && questionData.answer && questionData.answer.length > 0) {
    correctAnswer = normalizeSentence(questionData.answer[0]);
  }

  /*
   * عندما يكون ترتيب الدروب صحيحًا، نضع داخل input
   * نفس الإجابة الأصلية من ملف البيانات تمامًا.
   *
   * هذا يمنع اختلاف الأحرف الكبيرة والصغيرة أو المسافات
   * من جعل الإجابة الصحيحة تظهر خطأ.
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

  hideQuestionFeedback(question);

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

function normalizeSentence(value) {
  return String(value === undefined || value === null ? "" : value)
    .trim()
    .replace(/\s+/g, " ");
}

function hideQuestionFeedback(question) {
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
// Styles injected from this JS file
// =============================================================

function addSentenceDragStyles() {
  if (document.getElementById("sentence-drag-page-styles")) {
    return;
  }

  var style = document.createElement("style");

  style.id = "sentence-drag-page-styles";

  style.textContent = `
        .fill_in .que {
            position: relative;
        }

        .fillin_back {
            position: absolute;
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
            overflow-x: auto;
            overflow-y: visible;
            position: relative;
            z-index: 20;
            background: transparent;
            box-sizing: border-box;
        }

        .image_answer_dropzone.drag-over {
            background: rgba(30, 110, 210, 0.08);
        }

        .imagesText {
            cursor: grab;
            user-select: none;
            transition:
                opacity 0.2s ease,
                transform 0.2s ease;
        }

        .imagesText.is-dragging {
            opacity: 0.4;
            transform: scale(0.94);
        }

        .imagesText.word-used {
            opacity: 0.35;
            pointer-events: none;
        }

        .dropped_answer_item {
            height: 66px;
            min-width: max-content;
            flex: 0 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 21;
        }

        .dropped_answer_item img {
            width: auto;
            height: 100%;
            max-width: 190px;
            object-fit: contain;
            pointer-events: none;
        }

        .remove_answer_item {
            width: 22px;
            height: 22px;
            padding: 0;
            border: none;
            border-radius: 50%;
            position: absolute;
            top: -10px;
            right: -8px;
            z-index: 40;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background: #d2232a;
            font-size: 16px;
            font-weight: bold;
            line-height: 1;
            cursor: pointer;
        }

        /*
         * علامة الصح أو الخطأ الخاصة بنتيجة السؤال.
         * تظهر فوق عناصر الإجابة كلها.
         */
        .answer_feedback_icon {
            position: absolute;
            top: 42px;
            right: 15px;
            z-index: 100;
            width: 42px;
            height: 42px;
            pointer-events: none;
        }

        .answer_feedback_icon .icon_wrap {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            margin: 0 !important;
            width: 42px;
            height: 42px;
            z-index: 100;
        }

        .answer_feedback_icon .tick,
        .answer_feedback_icon .cross {
            position: absolute;
            top: 0;
            right: 0;
            width: 42px;
            height: 42px;
            z-index: 101;
        }

        .answer_feedback_icon .tick img,
        .answer_feedback_icon .cross img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .answer_value {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            opacity: 0 !important;
            pointer-events: none !important;
            padding: 0 !important;
            margin: 0 !important;
            border: 0 !important;
        }
    `;

  document.head.appendChild(style);
}

// =============================================================
// Helpers
// =============================================================

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/*
 * احتياط فقط إذا كانت imagesText ما تزال مسارات نصية.
 * الأفضل أن يكون كل عنصر:
 *
 * {
 *   src: "../images/...png",
 *   text: "climbing"
 * }
 */
function getWordFromImagePath(path) {
  if (!path) {
    return "";
  }

  var filename = String(path)
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");

  return filename;
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
// =============================================================
// Reset drag-and-drop activity
// =============================================================

function initSentenceImageReset() {
    /*
     * نحذف الحدث القديم قبل إضافته حتى لا يتكرر
     * عند فتح الصفحة أكثر من مرة.
     */
    $(document)
        .off("click.sentenceImageReset", ".resetBtn")
        .on(
            "click.sentenceImageReset",
            ".resetBtn",
            function () {
                /*
                 * ننتظر انتهاء Reset الأساسي للنشاط،
                 * ثم نعيد حالة الدروب بالكامل.
                 */
                setTimeout(function () {
                    resetSentenceImageActivity();
                }, 30);
            }
        );
}

function resetSentenceImageActivity() {
    var activityArea =
        document.querySelector(".activity_area");

    if (!activityArea) {
        return;
    }

    var questions =
        activityArea.querySelectorAll(".que");

    questions.forEach(function (question) {
        var dropzone =
            question.querySelector(
                ".image_answer_dropzone"
            );

        var answerInput =
            question.querySelector(
                ".answer_value"
            );

        // =====================================================
        // 1. إزالة الصور الموجودة داخل منطقة الإجابة
        // =====================================================

        if (dropzone) {
            dropzone.innerHTML = "";

            dropzone.classList.remove(
                "drag-over"
            );

            dropzone.style.background = "";
        }

        // =====================================================
        // 2. إعادة جميع الصور الأصلية قابلة للسحب
        // =====================================================

        var originalItems =
            question.querySelectorAll(
                ".imagesText"
            );

        originalItems.forEach(function (item) {
            item.classList.remove(
                "word-used",
                "is-dragging"
            );

            item.setAttribute(
                "draggable",
                "true"
            );

            item.style.opacity = "";
            item.style.pointerEvents = "";
            item.style.transform = "";
        });

        // =====================================================
        // 3. تفريغ قيمة input التي يستخدمها FillIn للفحص
        // =====================================================

        if (answerInput) {
            answerInput.value = "";

            answerInput.style.color = "black";

            /*
             * لا نطلق input event هنا حتى لا يعيد
             * تفعيل أزرار Check وReset بعد تفريغها.
             */
        }

        // =====================================================
        // 4. إخفاء علامة الصح والخطأ
        // =====================================================

        var iconWrap =
            question.querySelector(
                ".icon_wrap"
            );

        var tick =
            question.querySelector(
                ".tick"
            );

        var cross =
            question.querySelector(
                ".cross"
            );

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

    // =========================================================
    // 5. إخفاء الـfeedback العام إن كان ظاهرًا
    // =========================================================

    var feedbackElements =
        document.querySelectorAll(
            ".feedback, " +
            ".feedback_holder, " +
            ".feedbackHolder, " +
            ".correct_feedback, " +
            ".wrong_feedback"
        );

    feedbackElements.forEach(function (element) {
        element.style.display = "none";

        element.classList.remove(
            "show",
            "active",
            "correct",
            "wrong"
        );
    });

    // =========================================================
    // 6. تعطيل Check وReset بعد الرجوع للبداية
    // =========================================================

    var checkButton =
        document.querySelector(".checkBtn");

    var resetButton =
        document.querySelector(".resetBtn");

    if (checkButton) {
        checkButton.classList.add(
            "disabled"
        );
    }

    if (resetButton) {
        resetButton.classList.add(
            "disabled"
        );
    }
}