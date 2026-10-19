function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

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
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			if(aObj.title_position !=undefined && aObj.title_position =="under"){
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}else {
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

  // =========================================================
  // Main content
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt +=
    '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';

  // =========================================================
  // Optional top text
  // =========================================================

  if (typeof aObj.text !== "undefined" && aObj.text !== "") {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-audio="' +
      (aObj.textAudio || "") +
      '">';

    htmlStmt += '<div class="text">' + aObj.text + "</div>";

    htmlStmt += "</div>";
  }

  // =========================================================
  // Word options
  // =========================================================

  if (Array.isArray(aObj.options) && aObj.options.length > 0) {
    htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

    htmlStmt +=
      '<div class="word_options d-flex flex-wrap justify-content-around">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      var optionAudio = "";

      if (
        aObj.optionsAudios &&
        typeof aObj.optionsAudios[optionIndex] !== "undefined"
      ) {
        optionAudio = aObj.optionsAudios[optionIndex];
      }

      htmlStmt +=
        '<div class="audioIcon textEnd off d-flex contant" ' +
        'data-audio="' +
        optionAudio +
        '">';

      htmlStmt +=
        '<div class="clue_word">' + aObj.options[optionIndex] + "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  // =========================================================
  // Questions
  // =========================================================

  htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

  if (
    aObj.image !== "no" &&
    aObj.image !== "" &&
    aObj.imageposition === "front"
  ) {
    htmlStmt += '<div class="img_space">';

    htmlStmt += '<img src="' + aObj.image + '">';

    htmlStmt += "</div>";
  }

  for (var questionIndex = 0; questionIndex < numOfQuestions; questionIndex++) {
    var question = aObj.questions[questionIndex];

    var questionNumber = questionIndex + 1;

    htmlStmt +=
      '<div class="que img_fillin_gr d-flex flex-column" ' +
      'id="que_' +
      questionNumber +
      '" ' +
      'data-qno="' +
      questionNumber +
      '">';

    // =======================================================
    // Build sentence
    // =======================================================

    var qStr = "";

    if (question.singleword === true) {
      qStr =
        '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
        'data-audio="' +
        getQuestionAudio(question, 0) +
        '">';

      qStr += '<img src="../images/icons/sound-wave.png" class="audio_icon">';

      qStr += "</div>";

      qStr += String(question.text || "").replace(
        /\[_]/g,
        createApostropheInput(question, questionNumber),
      );
    } else {
      var sentenceParts = String(question.text || "").split("[_]");

      var sentenceHtmlParts = [];

      for (var partIndex = 0; partIndex < sentenceParts.length; partIndex++) {
        var sentencePart = sentenceParts[partIndex];

        if (sentencePart !== "") {
          sentenceHtmlParts.push(
            '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
              'data-audio="' +
              getQuestionAudio(question, partIndex) +
              '">' +
              sentencePart +
              "</div>",
          );
        } else {
          sentenceHtmlParts.push("");
        }
      }

      qStr = sentenceHtmlParts.join(
        createApostropheInput(question, questionNumber),
      );
    }

    htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

    htmlStmt += '<div class="q_space d-flex">';

    // =======================================================
    // Numbering
    // =======================================================

    if (aObj.numbering !== "none") {
      var numberLabel = "";

      if (aObj.numbering === "alphabet") {
        var startLetter = String(aObj.numberstartfrom || "a");

        numberLabel = String.fromCharCode(
          startLetter.charCodeAt(0) + questionIndex,
        );
      } else {
        numberLabel = parseInt(aObj.numberstartfrom, 10) + questionIndex;
      }

      htmlStmt += '<div class="q_num_space">' + numberLabel + ".</div>";
    }

    // =======================================================
    // Sentence content
    // =======================================================

    htmlStmt += '<div class="fillin_set d-flex flex-wrap background_audio">';

    htmlStmt += qStr;

    if (
      Array.isArray(question.options_words) &&
      question.options_words.length > 0
    ) {
      htmlStmt += '<div class="options_words d-flex flex-wrap">';

      for (
        var wordIndex = 0;
        wordIndex < question.options_words.length;
        wordIndex++
      ) {
        var wordAudio = "";

        if (
          question.options_words_audios &&
          typeof question.options_words_audios[wordIndex] !== "undefined"
        ) {
          wordAudio = question.options_words_audios[wordIndex];
        }

        htmlStmt +=
          '<div class="audioIcon txt-audioIcon off d-flex contant" ' +
          'data-audio="' +
          wordAudio +
          '">';

        htmlStmt += question.options_words[wordIndex];

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =======================================================
    // Tick / Cross
    // =======================================================

    htmlStmt += '<div class="icon_wrap_holder">';

    htmlStmt += '<div class="icon_wrap">';

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

    htmlStmt += "</div>";

    if (question.image !== "" && question.image !== "no") {
      htmlStmt += '<div class="image_space">';

      htmlStmt += '<img src="' + question.image + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  if (
    aObj.image !== "no" &&
    aObj.image !== "" &&
    aObj.imageposition === "back"
  ) {
    htmlStmt += '<div class="image-container">';

    htmlStmt += '<img src="' + aObj.image + '">';

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  bindApostropheInputs();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* ========================================================= */
/*          Create clickable apostrophe space                */
/* ========================================================= */

function createApostropheInput(question, questionNumber) {
  return (
    '<span class="apostrophe_click_wrapper">' +
    "<button " +
    'type="button" ' +
    'class="apostrophe_click_box" ' +
    'data-question="' +
    questionNumber +
    '" ' +
    'aria-label="Add an apostrophe">' +
    "</button>" +
    /*
     * هذا الحقل مخفي، لكنه ضروري حتى
     * fillin.js يستطيع قراءة الإجابة وتصحيحها.
     */
    "<input " +
    'type="text" ' +
    'class="text_input_area apostrophe_hidden_input" ' +
    'maxlength="1" ' +
    'data-type="" ' +
    'value="" ' +
    'tabindex="-1" ' +
    'autocomplete="off" ' +
    'spellcheck="false">' +
    "</span>"
  );
}

/* ========================================================= */
/*                    Question audio                         */
/* ========================================================= */

function getQuestionAudio(question, index) {
  if (!question.textaudios || !question.textaudios.length) {
    return "";
  }

  if (typeof question.textaudios[index] !== "undefined") {
    return question.textaudios[index];
  }

  return question.textaudios[0] || "";
}

/* ========================================================= */
/*           Clickable apostrophe behavior                   */
/* ========================================================= */

function bindApostropheInputs() {
  // إزالة أي ربط قديم
  $(document).off(".addApostrophe");

  // =======================================================
  // الضغط على فراغ الـ apostrophe
  // =======================================================

  $(document).on(
    "click.addApostrophe",
    ".apostrophe_click_box",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      var $button = $(this);

      var $wrapper = $button.closest(".apostrophe_click_wrapper");

      var $hiddenInput = $wrapper.find(".apostrophe_hidden_input");

      var currentValue = $hiddenInput.val();

      /*
       * أول ضغطة:
       * نضع apostrophe.
       *
       * ثاني ضغطة:
       * نمسح apostrophe.
       */
      if (currentValue === "'") {
        $hiddenInput.val("");

        $button.text("");

        $button.removeClass("has-apostrophe");
      } else {
        $hiddenInput.val("'");

        $button.text("'");

        $button.addClass("has-apostrophe");
      }

      /*
       * تشغيل حدث input يدويًا حتى
       * fillin.js يفعّل Check وReset.
       */
      $hiddenInput.trigger("input");

      /*
       * إخفاء نتيجة التصحيح القديمة
       * عند تغيير الإجابة.
       */
      var $question = $button.closest(".que");

      $question.find(".icon_wrap").hide();

      $question.find(".tick, .cross").hide();

      /*
       * تفعيل أزرار القالب.
       */
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    },
  );

  // =======================================================
  // منع الكتابة داخل الحقل المخفي
  // =======================================================

  $(document).on(
    "keydown.addApostrophe",
    ".apostrophe_hidden_input",
    function (event) {
      event.preventDefault();
      return false;
    },
  );

  $(document).on(
    "paste.addApostrophe",
    ".apostrophe_hidden_input",
    function (event) {
      event.preventDefault();
      return false;
    },
  );

  // =======================================================
  // Reset العام
  // =======================================================

  $(document).on("click.addApostrophe", ".resetBtn", function () {
    /*
     * ننتظر انتهاء reset الموجود
     * في fillin.js ثم نمسح شكل الأزرار.
     */
    setTimeout(function () {
      $(".apostrophe_hidden_input").val("");

      $(".apostrophe_click_box").text("").removeClass("has-apostrophe");

      $(".add_apostrophes_questions").find(".icon_wrap").hide();

      $(".add_apostrophes_questions").find(".tick, .cross").hide();
    }, 0);
  });
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
