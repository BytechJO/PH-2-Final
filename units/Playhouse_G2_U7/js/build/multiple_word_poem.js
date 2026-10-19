function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;

    var numberofCols = parseInt(aObj.numberofcolumns, 10) || 1;

    /*
     * نستخدم Math.ceil حتى لا يضيع آخر سؤال
     * إذا لم يكن عدد الأسئلة قابلًا للقسمة على الأعمدة.
     */
    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

    var currQueNum = 0;

    // =========================================================
    // Back button
    // =========================================================

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // Next button
    // =========================================================

    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // Heading
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    // Main title audio

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (
      typeof aObj.mainTitleIcon !== "undefined" &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "";

      if (
        aObj.mainTitleIconPos &&
        typeof aObj.mainTitleIconPos.right !== "undefined"
      ) {
        iconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // Subtitle audio

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    if (aObj.subTitleIcons && Array.isArray(aObj.subTitleIcons)) {
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
      '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    // =========================================================
    // Front image
    // =========================================================

    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "front"
    ) {
      htmlStmt += '<div class="img_space">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    // =========================================================
    // Questions
    // =========================================================

    for (var x = 0; x < numberofCols; x++) {
      htmlStmt += '<div class="tick_group d-flex flex-column">';

      for (var y = 0; y < numOfQinCol; y++) {
        /*
         * لا نزيد الرقم إذا انتهت الأسئلة.
         */
        if (currQueNum >= numOfQuestions) {
          break;
        }

        currQueNum++;

        var tpOb = aObj.questions[currQueNum - 1];

        if (typeof tpOb !== "undefined" && tpOb !== null) {
          var allowEmpty = tpOb.allowEmptyAnswer === true ? "true" : "false";

          htmlStmt +=
            '<div class="que d-flex flex-column background_audio" ' +
            'id="que_' +
            currQueNum +
            '" ' +
            'data-qno="' +
            currQueNum +
            '" ' +
            'data-allow-empty="' +
            allowEmpty +
            '">';

          // =====================================================
          // Question title
          // =====================================================

          if (typeof tpOb.question !== "undefined" && tpOb.question !== "") {
            htmlStmt += '<div class="d-flex q_part">';

            htmlStmt += '<div class="question">' + tpOb.question + "</div>";

            htmlStmt += "</div>";
          }

          // =====================================================
          // Options
          // =====================================================

          htmlStmt += '<div class="d-flex flex-wrap picks_grp">';

          if (tpOb.options && tpOb.options.length > 0) {
            for (var opt = 0; opt < tpOb.options.length; opt++) {
              htmlStmt +=
                '<div id="pick_' +
                currQueNum +
                "_" +
                (opt + 1) +
                '" ' +
                'class="pick" ' +
                'data-qno="' +
                currQueNum +
                '" ' +
                'data-option="' +
                (opt + 1) +
                '">';

              htmlStmt +=
                '<div class="txt">' + tpOb.options[opt].text + "</div>";

              htmlStmt += "</div>";
            }
          }

          htmlStmt += "</div>";

          // =====================================================
          // Tick and cross
          // =====================================================

          htmlStmt += '<div class="icon_wrap p-2">';

          htmlStmt +=
            '<div class="tick">' +
            '<img src="../images/icons/check_btn.png">' +
            "</div>";

          htmlStmt +=
            '<div class="cross">' +
            '<img src="../images/icons/cross_btn.png">' +
            "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";
    }

    // =========================================================
    // Side image
    // =========================================================

    if (aObj.image !== "no" && aObj.image !== "") {
      htmlStmt += '<div class="image-container">';

      htmlStmt += '<img src="' + aObj.image + '"/>';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // Sentence Building
    // =========================================================

    if (typeof aObj.items !== "undefined" && aObj.items !== null) {
      htmlStmt += '<div class="SentenceBuilding_container">';

      htmlStmt += '<div class="cont_items d-flex flex-wrap">';

      htmlStmt += '<div class="main_title_container">';

      htmlStmt +=
        '<div class="main_title_text sentenceBuildingAudio" ' +
        'data-audio="' +
        (aObj.main_title_audio || "") +
        '">';

      if (aObj.main_title_text && aObj.main_title_text.length > 1) {
        for (
          var letterIndex = 0;
          letterIndex < aObj.main_title_text.length;
          letterIndex++
        ) {
          htmlStmt +=
            "<div class='letter letter-" +
            letterIndex +
            " pulse'>" +
            aObj.main_title_text[letterIndex] +
            "</div>";
        }
      } else {
        htmlStmt += "<div>" + (aObj.main_title_text || "") + "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      for (var itemIndex = 0; itemIndex < aObj.items.length; itemIndex++) {
        htmlStmt +=
          '<div class="item item-' +
          itemIndex +
          '">' +
          aObj.items[itemIndex] +
          "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> MCQ Built");

  $(".activity_area").append(htmlStmt);

  /*
   * المنطق الخاص موجود داخل هذا الملف فقط.
   * لا يغير فانكشن التصحيح الرئيسية.
   */
  setupEmptyAnswerQuestions(aObj);

  showSentenceImg();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* ========================================================= */
/*        Empty-answer logic for this activity only          */
/* ========================================================= */

function setupEmptyAnswerQuestions(aObj) {
  var $emptyQuestions = $(".activity_area .que[data-allow-empty='true']");

  if (!$emptyQuestions.length) {
    return;
  }

  $emptyQuestions.each(function () {
    var $question = $(this);

    var questionNumber = parseInt($question.attr("data-qno"), 10);

    var questionData = aObj.questions[questionNumber - 1];

    if (!questionData || questionData.allowEmptyAnswer !== true) {
      return;
    }

    /*
     * نخزن اختيار الطالب بشكل مستقل عن
     * نظام الـ MCQ الرئيسي.
     */
    $question
      .find(".pick")
      .off("click.emptyAnswerQuestion")
      .on("click.emptyAnswerQuestion", function () {
        var $pick = $(this);

        /*
         * ننتظر تنفيذ كود الاختيار الرئيسي أولًا.
         */
        setTimeout(function () {
          /*
           * هذا الكلاس خاص بهذه الصفحة فقط.
           * يتم تبديله مع كل ضغطة.
           */
          $pick.toggleClass("empty-answer-selected");

          /*
           * نخفي نتيجة التصحيح القديمة عند تغيير الاختيار.
           */
          $question.find(".tick, .cross").hide();
        }, 0);
      });

    /*
     * نراقب ظهور علامة الصح أو الخطأ الناتجة
     * عن فانكشن التصحيح الرئيسية.
     *
     * عندما تظهر النتيجة، نصحح فقط هذا السؤال:
     *
     * لا يوجد اختيار = صح
     * يوجد اختيار = خطأ
     */
    observeEmptyAnswerResult($question);
  });
}

function observeEmptyAnswerResult($question) {
  var questionElement = $question.get(0);

  if (!questionElement) {
    return;
  }

  var isApplyingResult = false;

  var observer = new MutationObserver(function () {
    if (isApplyingResult) {
      return;
    }

    var $tick = $question.find(".tick");

    var $cross = $question.find(".cross");

    /*
     * لا نغير أي شيء إلا بعد أن يحاول
     * نظام التصحيح إظهار نتيجة.
     */
    var resultWasShown = $tick.is(":visible") || $cross.is(":visible");

    if (!resultWasShown) {
      return;
    }

    isApplyingResult = true;

    var selectedCount = $question.find(".pick.empty-answer-selected").length;

    $tick.hide();

    $cross.hide();

    if (selectedCount === 0) {
      /*
       * السؤال الثالث:
       * عدم اختيار أي كلمة = صح.
       */
      $tick.show();
    } else {
      /*
       * اختيار أي كلمة = خطأ.
       */
      $cross.show();
    }

    setTimeout(function () {
      isApplyingResult = false;
    }, 0);
  });

  observer.observe(questionElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["class", "style"],
  });

  /*
   * نخزن الـ observer على العنصر حتى لا يتم
   * حذفه من الذاكرة.
   */
  questionElement.emptyAnswerObserver = observer;
}

/* ========================================================= */
/*                        Helpers                            */
/* ========================================================= */

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
var sentenceBuildingAudioPlayer = null;

function stopSentenceBuildingAudio() {
  if (sentenceBuildingAudioPlayer) {
    sentenceBuildingAudioPlayer.pause();
    sentenceBuildingAudioPlayer.currentTime = 0;
    sentenceBuildingAudioPlayer = null;
  }
}

function playSentenceBuildingAudio(audioPath) {
  if (!audioPath || audioPath === "" || audioPath === "no") {
    return;
  }

  stopSentenceBuildingAudio();

  sentenceBuildingAudioPlayer = new Audio(audioPath);

  sentenceBuildingAudioPlayer.play().catch(function (error) {
    console.error("Audio could not play:", audioPath, error);
  });
}

function showSentenceImg() {
  /*
   * زر إظهار الصورة.
   */
  $(document)
    .off("click.sentenceImage", ".imgToggle")
    .on("click.sentenceImage", ".imgToggle", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var $button = $(this);

      var imgName = $button.attr("data-img");

      var audioPath = $button.attr("data-audio");

      var $targetImage = $("." + imgName);

      /*
       * نخفي الصورة الثانية عندما تظهر الأولى،
       * ونخفي الأولى عندما تظهر الثانية.
       */
      $(".sentenceToggleImage").not($targetImage).stop(true, true).fadeOut(300);

      if ($targetImage.is(":visible")) {
        $targetImage.stop(true, true).fadeOut(300);

        stopSentenceBuildingAudio();
      } else {
        $targetImage.stop(true, true).fadeIn(500);

        /*
         * الصوت يشتغل عند ظهور الصورة.
         */
        playSentenceBuildingAudio(audioPath);
      }
    });

  /*
   * صوت عنوان Sentence Building.
   */
  $(document)
    .off("click.sentenceBuildingTitle", ".sentenceBuildingAudio")
    .on(
      "click.sentenceBuildingTitle",
      ".sentenceBuildingAudio",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        var audioPath = $(this).attr("data-audio");

        playSentenceBuildingAudio(audioPath);
      },
    );

  /*
   * صوت الجمل الثلاثة بالنص.
   */
  $(document)
    .off("click.middleSentenceAudio", ".sentenceAudio")
    .on("click.middleSentenceAudio", ".sentenceAudio", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioPath = $(this).attr("data-audio");

      playSentenceBuildingAudio(audioPath);
    });
}
