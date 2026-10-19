function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // Back button
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png">';
    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // Next button
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png">';
    htmlStmt += "</a>";

    htmlStmt += "</div>";

    // =========================================================
    // Main heading
    // =========================================================

    htmlStmt +=
      '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" src="' +
      aObj.mainTitle +
      '">';

    if (
      typeof aObj.mainTitleIcon !== "undefined" &&
      aObj.mainTitleIcon !== ""
    ) {
      var mainTitleIconRight = "";

      if (
        aObj.mainTitleIconPos &&
        typeof aObj.mainTitleIconPos.right !== "undefined"
      ) {
        mainTitleIconRight = aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        mainTitleIconRight +
        ';">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Subtitle
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";

    htmlStmt +=
      "<p>" +
      (aObj.subTitleTextLeft || "") +
      "</p>";

    if (
      aObj.subTitleIcons &&
      aObj.subTitleIcons.length > 0
    ) {
      for (
        var iconIndex = 0;
        iconIndex < aObj.subTitleIcons.length;
        iconIndex++
      ) {
        htmlStmt +=
          "<img src='" +
          aObj.subTitleIcons[iconIndex] +
          "'>";
      }
    }

    htmlStmt +=
      "<p>" +
      (aObj.subTitleTextRight || "") +
      "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // Main activity wrapper
    // =========================================================

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // Word options
    // =========================================================

    if (
      typeof aObj.options !== "undefined" &&
      aObj.options !== null &&
      aObj.options.length > 0
    ) {
      htmlStmt +=
        '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(
        aObj.options,
        function (key, value) {
          var optionAudio = "";

          if (
            aObj.optionsAudios &&
            typeof aObj.optionsAudios[key] !== "undefined"
          ) {
            optionAudio = aObj.optionsAudios[key];
          }

          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" ' +
            'data-audio="' +
            optionAudio +
            '">';

          htmlStmt +=
            '<div class="clue_word">' +
            value +
            "</div>";

          htmlStmt += "</div>";
        }
      );

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    // =========================================================
    // Questions wrapper
    // =========================================================

    htmlStmt +=
      '<div class="screen_elements d-flex flex-wrap">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    if (
      aObj.image !== "no" &&
      aObj.image !== ""
    ) {
      if (aObj.imageposition === "front") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
    }

    // =========================================================
    // Build questions
    // =========================================================

    for (
      var questionIndex = 0;
      questionIndex < numOfQuestions;
      questionIndex++
    ) {
      var tmpObj = aObj.questions[questionIndex];

      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-column" ' +
        'data-qno="' +
        (questionIndex + 1) +
        '">';

      // =======================================================
      // Text before image/input
      // =======================================================

      var firstTextAudio = "";

      if (
        tmpObj.textaudios &&
        tmpObj.textaudios.length > 0
      ) {
        firstTextAudio = tmpObj.textaudios[0] || "";
      }

      htmlStmt +=
        '<div class="audioIcon textFront txt-audioIcon off d-flex contant min_w_fit_contant" ' +
        'data-audio="' +
        firstTextAudio +
        '">';

      htmlStmt += tmpObj.textFront || "";

      htmlStmt += "</div>";

      // =======================================================
      // Question image
      // =======================================================

      if (
        tmpObj.image !== "" &&
        tmpObj.image !== "no"
      ) {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      var qStr = "";

      // =======================================================
      // Single-word input
      // =======================================================

      if (tmpObj.singleword) {
        var singleWordText = tmpObj.text || "";

        qStr +=
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          firstTextAudio +
          '">';

        qStr +=
          '<img src="../images/icons/sound-wave.png" ' +
          'class="audio_icon">';

        qStr += "</div>";

        qStr += singleWordText.replace(
          /\[_]/g,
          '<input ' +
            'class="text_input_area" ' +
            'type="text" ' +
            'autocomplete="off" ' +
            'spellcheck="false" ' +
            'maxlength="' +
            (tmpObj.maxlength || 20) +
            '" ' +
            'data-type="' +
            (tmpObj.type || "text") +
            '">'
        );
      } else {
        // =====================================================
        // Multiple inputs
        // =====================================================

        var wordIndex = -1;
        var words = (tmpObj.text || "").split("[_]");

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              var currentTextAudio = "";

              if (
                tmpObj.textaudios &&
                typeof tmpObj.textaudios[wordIndex] !== "undefined"
              ) {
                currentTextAudio =
                  tmpObj.textaudios[wordIndex] || "";
              }

              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
                'data-audio="' +
                currentTextAudio +
                '">' +
                word +
                "</div>"
              );
            }

            return "";
          })
          .join(
            '<input ' +
              'class="text_input_area" ' +
              'type="text" ' +
              'autocomplete="off" ' +
              'spellcheck="false" ' +
              'maxlength="' +
              (tmpObj.maxlength || 20) +
              '" ' +
              'data-type="' +
              (tmpObj.type || "text") +
              '">'
          );
      }

      // =======================================================
      // Answer icons
      // =======================================================

      htmlStmt +=
        '<div class="fillin_gr d-flex">';

      htmlStmt += '<div class="q_space">';

      var hasAnswer =
        (tmpObj.text || "").indexOf("[_]") !== -1;

      htmlStmt +=
        '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      if (hasAnswer) {
        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";
      } else {
        htmlStmt += '<div class="tick"></div>';
        htmlStmt += '<div class="cross"></div>';
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      // =======================================================
      // Inputs
      // =======================================================

      htmlStmt +=
        '<div class="fillin_set d-flex flex-wrap background_audio">';

      htmlStmt += qStr;

      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  // =========================================================
  // Sentence Building
  // =========================================================

  if (
    typeof aObj.main_title_text !== "undefined" &&
    typeof aObj.items !== "undefined"
  ) {
    htmlStmt +=
      '<div class="SentenceBuilding_container">';

    htmlStmt +=
      '<div class="cont_items d-flex flex-wrap">';

    var sentenceTitleAudio =
      aObj.sentenceTitleAudio ||
      aObj.sentenceTitle_audio ||
      aObj.mainTitleAudio ||
      aObj.mainTitle_audio ||
      aObj.main_title_audio ||
      "";

    htmlStmt +=
      '<div class="main_title_container sentence_title_audio" ' +
      'data-audio="' +
      sentenceTitleAudio +
      '">';

    htmlStmt +=
      '<div class="main_title_text">';

    if (aObj.main_title_text.length > 1) {
      for (
        var titleIndex = 0;
        titleIndex < aObj.main_title_text.length;
        titleIndex++
      ) {
        htmlStmt +=
          "<div class='letter letter-" +
          titleIndex +
          " pulse'>" +
          aObj.main_title_text[titleIndex] +
          "</div>";
      }
    } else {
      htmlStmt +=
        "<div>" +
        aObj.main_title_text +
        "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    for (
      var itemIndex = 0;
      itemIndex < aObj.items.length;
      itemIndex++
    ) {
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

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  activateAutoNextInputs();
  activateSentenceBuildingAudio();
  showSentenceImg();

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}

// ===========================================================
// Automatic movement between inputs
// ===========================================================

function activateAutoNextInputs() {
  $(".que").each(function () {
    var $question = $(this);
    var $inputs =
      $question.find(".text_input_area");

    if (!$inputs.length) {
      return;
    }

    $inputs.each(function (index) {
      var $input = $(this);

      // آخر input للكلمة كاملة
      if (index === $inputs.length - 1) {
        $input
          .attr("maxlength", 20)
          .removeClass("single_letter_input")
          .addClass("full_word_input");
      } else {
        // جميع inputs السابقة حرف واحد
        $input
          .attr("maxlength", 1)
          .removeClass("full_word_input")
          .addClass("single_letter_input");
      }
    });
  });

  $(document).off(".autoNextFillin");

  // =========================================================
  // Write one letter then move
  // =========================================================

  $(document).on(
    "input.autoNextFillin",
    ".single_letter_input",
    function () {
      var $currentInput = $(this);
      var value = $currentInput.val();

      if (value.length > 1) {
        value = value.charAt(0);
        $currentInput.val(value);
      }

      if (value.length === 1) {
        var $question =
          $currentInput.closest(".que");

        var $inputs =
          $question.find(".text_input_area");

        var currentIndex =
          $inputs.index(this);

        if (
          currentIndex >= 0 &&
          currentIndex < $inputs.length - 1
        ) {
          $inputs
            .eq(currentIndex + 1)
            .focus();
        }
      }
    }
  );

  // =========================================================
  // Backspace returns to previous input
  // =========================================================

  $(document).on(
    "keydown.autoNextFillin",
    ".text_input_area",
    function (event) {
      if (event.key !== "Backspace") {
        return;
      }

      var $currentInput = $(this);

      if ($currentInput.val() !== "") {
        return;
      }

      var $question =
        $currentInput.closest(".que");

      var $inputs =
        $question.find(".text_input_area");

      var currentIndex =
        $inputs.index(this);

      if (currentIndex > 0) {
        event.preventDefault();

        var $previousInput =
          $inputs.eq(currentIndex - 1);

        $previousInput.focus();

        if (
          $previousInput[0] &&
          typeof $previousInput[0].select === "function"
        ) {
          $previousInput[0].select();
        }
      }
    }
  );

  // =========================================================
  // Paste letters into small inputs
  // =========================================================

  $(document).on(
    "paste.autoNextFillin",
    ".single_letter_input",
    function (event) {
      event.preventDefault();

      var originalEvent =
        event.originalEvent || event;

      var clipboardData =
        originalEvent.clipboardData ||
        window.clipboardData;

      if (!clipboardData) {
        return;
      }

      var pastedText =
        clipboardData
          .getData("text")
          .trim();

      if (!pastedText) {
        return;
      }

      var $currentInput = $(this);

      var $question =
        $currentInput.closest(".que");

      var $letterInputs =
        $question.find(".single_letter_input");

      var startIndex =
        $letterInputs.index(this);

      if (startIndex < 0) {
        return;
      }

      var characters =
        pastedText.split("");

      var lastFilledIndex = startIndex;

      for (
        var characterIndex = 0;
        characterIndex < characters.length;
        characterIndex++
      ) {
        var targetIndex =
          startIndex + characterIndex;

        if (
          targetIndex >=
          $letterInputs.length
        ) {
          break;
        }

        $letterInputs
          .eq(targetIndex)
          .val(characters[characterIndex]);

        lastFilledIndex = targetIndex;
      }

      if (
        lastFilledIndex <
        $letterInputs.length - 1
      ) {
        $letterInputs
          .eq(lastFilledIndex + 1)
          .focus();
      } else {
        $question
          .find(".full_word_input")
          .first()
          .focus();
      }
    }
  );
}

// ===========================================================
// Sentence Building shared audio
// ===========================================================

var currentSentenceAudio = null;

function stopCurrentSentenceAudio() {
  if (currentSentenceAudio) {
    currentSentenceAudio.pause();
    currentSentenceAudio.currentTime = 0;
    currentSentenceAudio = null;
  }

  // إيقاف أي عناصر audio موجودة بالصفحة
  $("audio").each(function () {
    try {
      this.pause();
      this.currentTime = 0;
    } catch (error) {
      console.log(error);
    }
  });
}

function playSentenceAudio(audioUrl) {
  if (!audioUrl) {
    return;
  }

  stopCurrentSentenceAudio();

  currentSentenceAudio =
    new Audio(audioUrl);

  currentSentenceAudio
    .play()
    .catch(function (error) {
      console.error(
        "Audio error:",
        error
      );

      currentSentenceAudio = null;
    });

  currentSentenceAudio.addEventListener(
    "ended",
    function () {
      currentSentenceAudio = null;
    }
  );
}

// ===========================================================
// Sentence Building title and sentences audio
// ===========================================================

function activateSentenceBuildingAudio() {
  // عنوان Sentence Building
  $(document).off(
    "click.sentenceBuildingTitle",
    ".sentence_title_audio"
  );

  $(document).on(
    "click.sentenceBuildingTitle",
    ".sentence_title_audio",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioUrl =
        $(this).attr("data-audio");

      playSentenceAudio(audioUrl);
    }
  );

  // الجمل في المنتصف
  $(document).off(
    "click.middleSentenceAudio",
    ".middle_sentence_audio"
  );

  $(document).on(
    "click.middleSentenceAudio",
    ".middle_sentence_audio",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioUrl =
        $(this).attr("data-audio");

      playSentenceAudio(audioUrl);
    }
  );

  // أي جملة مرتبطة بصورة
  $(document).off(
    "click.imageSentenceAudio",
    ".image_sentence_audio"
  );

  $(document).on(
    "click.imageSentenceAudio",
    ".image_sentence_audio",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioUrl =
        $(this).attr("data-audio");

      playSentenceAudio(audioUrl);
    }
  );
}

// ===========================================================
// Show/hide Sentence Building images with audio
// ===========================================================

function showSentenceImg() {
  $(document).off(
    "click.sentenceImageToggle",
    ".imgToggle"
  );

  $(document).on(
    "click.sentenceImageToggle",
    ".imgToggle",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      var imgName =
        $(this).attr("data-img");

      if (!imgName) {
        return;
      }

      var $container =
        $(this).closest(
          ".SentenceBuilding_container"
        );

      var $targetImage =
        $container.find("." + imgName);

      if (!$targetImage.length) {
        $targetImage = $("." + imgName);
      }

      if (!$targetImage.length) {
        return;
      }

      var willShow =
        !$targetImage.is(":visible");

      var audioUrl =
        $targetImage.attr("data-audio");

      var $allSentenceImages =
        $container.find(
          ".showImg1, .showImg2"
        );

      // وقف أي صوت سابق
      stopCurrentSentenceAudio();

      // إخفاء الصورة الثانية
      $allSentenceImages
        .not($targetImage)
        .stop(true, true)
        .fadeOut(250);

      if (willShow) {
        $targetImage
          .stop(true, true)
          .fadeIn(700);

        playSentenceAudio(audioUrl);
      } else {
        $targetImage
          .stop(true, true)
          .fadeOut(350);
      }
    }
  );
}

// ===========================================================
// Helper
// ===========================================================

function nextChar(c) {
  return String.fromCharCode(
    c.charCodeAt(0) + 1
  );
}