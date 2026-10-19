function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    /* =====================================================
       Build one question
       ===================================================== */

    function buildSingleQuestion(tmpObj, questionIndex) {
      var questionHtml = "";
      var qStr = "";

      questionHtml +=
        '<div class="que_group">' +
        '<div class="question_number_label">' +
        (questionIndex + 1) +
        "." +
        "</div>";

      questionHtml +=
        '<div class="que img_fillin_gr d-flex flex-column" ' +
        'data-qno="' +
        (questionIndex + 1) +
        '">';

      questionHtml +=
        '<div class="audioIcon textFront txt-audioIcon off d-flex contant min_w_fit_contant" ' +
        'data-audio="' +
        tmpObj.textaudios[0] +
        '">';

      questionHtml += tmpObj.textFront;

      questionHtml += "</div>";

      /* ===================================================
         Question image
         =================================================== */

      if (tmpObj.image !== "" && tmpObj.image !== "no") {
        questionHtml += '<div class="image_space">';

        questionHtml += '<img src="' + tmpObj.image + '" alt="">';

        questionHtml += "</div>";
      }

      /* ===================================================
         Build question text and inputs
         =================================================== */

      if (tmpObj.singleword) {
        var str = tmpObj.text;

        qStr =
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          tmpObj.textaudios[0] +
          '">';

        qStr +=
          '<img src="../images/icons/sound-wave.png" ' + 'class="audio_icon">';

        qStr += "</div>";

        qStr += str.replace(
          /\[_]/g,
          "<input " +
            'class="text_input_area" ' +
            'type="text" ' +
            'maxlength="' +
            tmpObj.maxlength +
            '" ' +
            'autocomplete="off" ' +
            'spellcheck="false" ' +
            'data-type="' +
            tmpObj.type +
            '">',
        );
      } else {
        var wordIndex = -1;

        var words = tmpObj.text.split("[_]");

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
                'data-audio="' +
                tmpObj.textaudios[wordIndex] +
                '">' +
                word +
                "</div>"
              );
            }

            return "";
          })
          .join(
            "<input " +
              'class="text_input_area" ' +
              'type="text" ' +
              'maxlength="' +
              tmpObj.maxlength +
              '" ' +
              'autocomplete="off" ' +
              'spellcheck="false" ' +
              'data-type="' +
              tmpObj.type +
              '">',
          );
      }

      /* ===================================================
         Answer area
         =================================================== */

      questionHtml += '<div class="fillin_gr d-flex">';

      questionHtml += '<div class="q_space">';

      var ans = tmpObj.text.includes("[_]") ? "true" : "false";

      /* ===================================================
         Feedback icons
         =================================================== */

      if (ans === "true") {
        questionHtml += '<div class="icon_wrap_holder">';

        questionHtml += '<div class="icon_wrap">';

        questionHtml += '<div class="tick">';

        questionHtml += '<img src="../images/icons/check_btn.png" alt="">';

        questionHtml += "</div>";

        questionHtml += '<div class="cross">';

        questionHtml += '<img src="../images/icons/cross_btn.png" alt="">';

        questionHtml += "</div>";

        questionHtml += "</div>";
        questionHtml += "</div>";
      } else {
        questionHtml += '<div class="icon_wrap_holder">';

        questionHtml += '<div class="icon_wrap">';

        questionHtml += '<div class="tick"></div>';

        questionHtml += '<div class="cross"></div>';

        questionHtml += "</div>";
        questionHtml += "</div>";
      }

      questionHtml +=
        '<div class="fillin_set d-flex flex-wrap background_audio">';

      questionHtml += qStr;

      questionHtml += "</div>";
      questionHtml += "</div>";
      questionHtml += "</div>";
      questionHtml += "</div>";
      questionHtml += "</div>";

      return questionHtml;
    }

    /* =====================================================
       Back button
       ===================================================== */

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" alt="Back">';

    htmlStmt += "</a>";
    htmlStmt += "</div>";

    /* =====================================================
       Next button
       ===================================================== */

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" alt="Next">';

    htmlStmt += "</a>";
    htmlStmt += "</div>";

    /* =====================================================
       Heading
       ===================================================== */

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' + 'src="' + aObj.mainTitle + '" alt="">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        aObj.mainTitleIconPos.right +
        ';" alt="">';
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

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "' alt=''>";
    }

    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    /* =====================================================
       Main activity
       ===================================================== */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    /* =====================================================
       Word options
       ===================================================== */

    if (typeof aObj.options !== "undefined" && aObj.options !== null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';

        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" ' +
            'data-audio="' +
            aObj.optionsAudios[key] +
            '">';

          htmlStmt += '<div class="clue_word">' + value + "</div>";

          htmlStmt += "</div>";
        });

        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }
    }

    /* =====================================================
       Three-column layout
       ===================================================== */

    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm mb-70">';

    /* =====================================================
       Left column: Questions 1 and 2
       ===================================================== */

    htmlStmt += '<div class="questions_column left_questions">';

    for (
      var leftIndex = 0;
      leftIndex < 2 && leftIndex < numOfQuestions;
      leftIndex++
    ) {
      htmlStmt += buildSingleQuestion(aObj.questions[leftIndex], leftIndex);
    }

    htmlStmt += "</div>";

    /* =====================================================
       Center image
       ===================================================== */

    if (aObj.image !== "no" && aObj.image !== "") {
      if (aObj.imageposition === "front") {
        htmlStmt += '<div class="img_space">';

        htmlStmt += '<img src="' + aObj.image + '" alt="">';

        htmlStmt += "</div>";
      }
    }

    /* =====================================================
       Right column: Questions 3 and 4
       ===================================================== */

    htmlStmt += '<div class="questions_column right_questions">';

    for (var rightIndex = 2; rightIndex < numOfQuestions; rightIndex++) {
      htmlStmt += buildSingleQuestion(aObj.questions[rightIndex], rightIndex);
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  /*
    نطبّق حرفًا واحدًا والانتقال التلقائي
    على الخانات الصغيرة فقط.
  */

  bindLetterInputs();

  showSentenceImg();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Small letter inputs only
   ========================================================= */

function bindLetterInputs() {
  /*
    نتعامل مع كل سؤال لوحده،
    حتى لا ينتقل الطالب من سؤال إلى سؤال آخر.
  */

  $(".que_group").each(function () {
    var $question = $(this);

    var $allInputs = $question.find(".text_input_area");

    /*
      آخر input في السؤال هو سطر كتابة الكلمة الكاملة.
      لذلك نأخذ كل الخانات ما عدا آخر واحدة.
    */

    var $letterInputs = $allInputs.not(":last");

    /*
      آخر input يبقى كما هو ويقبل كلمة طويلة.
    */

    var $longInput = $allInputs.last();

    $letterInputs.attr("maxlength", "1");

    /*
      نضمن أن input الكلمة الكاملة لا يصبح حرفًا واحدًا.
    */

    if ($longInput.length) {
      var originalMaxlength = $longInput.attr("data-original-maxlength");

      if (originalMaxlength) {
        $longInput.attr("maxlength", originalMaxlength);
      }
    }

    /*
      منع تكرار الأحداث إذا أعيد بناء السؤال.
    */

    $letterInputs.off(".letterInput");

    /* =====================================================
       Input
       ===================================================== */

    $letterInputs.on("input.letterInput", function () {
      var $currentInput = $(this);

      var value = $currentInput.val() || "";

      /*
          الاحتفاظ بأول حرف فقط.
        */

      if (value.length > 1) {
        value = value.charAt(0);

        $currentInput.val(value);
      }

      /*
          بعد كتابة حرف ننتقل للخانة الصغيرة التالية فقط.
          لا ننتقل إلى input الكلمة الطويلة.
        */

      if (value.length === 1) {
        var currentIndex = $letterInputs.index(this);

        var $nextLetterInput = $letterInputs.eq(currentIndex + 1);

        if ($nextLetterInput.length) {
          $nextLetterInput.focus();
          $nextLetterInput.select();
        }
      }
    });

    /* =====================================================
       Backspace
       ===================================================== */

    $letterInputs.on("keydown.letterInput", function (event) {
      var $currentInput = $(this);

      if (event.key === "Backspace" && $currentInput.val() === "") {
        var currentIndex = $letterInputs.index(this);

        var $previousInput = $letterInputs.eq(currentIndex - 1);

        if ($previousInput.length) {
          event.preventDefault();

          $previousInput.focus();
          $previousInput.select();
        }
      }
    });

    /* =====================================================
       Paste
       ===================================================== */

    $letterInputs.on("paste.letterInput", function (event) {
      event.preventDefault();

      var originalEvent = event.originalEvent;

      var clipboardData =
        originalEvent && originalEvent.clipboardData
          ? originalEvent.clipboardData
          : window.clipboardData;

      var pastedText = clipboardData ? clipboardData.getData("text") : "";

      var firstCharacter = pastedText.charAt(0);

      $(this).val(firstCharacter);

      if (firstCharacter !== "") {
        $(this).trigger("input");
      }
    });

    /* =====================================================
       Focus
       ===================================================== */

    $letterInputs.on("focus.letterInput", function () {
      this.select();
    });
  });
}

/* =========================================================
   Next character
   ========================================================= */

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

/* =========================================================
   Show sentence image
   ========================================================= */

function showSentenceImg() {
  $(document).ready(function () {
    $(".imgToggle").click(function () {
      var imgName = $(this).data("img");

      $("." + imgName).fadeToggle(1000);
    });
  });
}
