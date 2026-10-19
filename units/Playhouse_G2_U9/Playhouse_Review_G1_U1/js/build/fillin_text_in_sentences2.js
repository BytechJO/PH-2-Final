function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

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

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
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

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    /* =====================================================
           Activity body
        ===================================================== */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

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

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "front"
    ) {
      htmlStmt +=
        '<div class="img_space">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    if (aObj.text != undefined && aObj.text != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-audio="' +
        aObj.textAudio +
        '">';

      htmlStmt += '<div class="text">' + aObj.text + "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += '<div class="ques">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      var queClass = tmpObj.answer && tmpObj.answer.length > 0 ? "que" : "";

      htmlStmt +=
        '<div class="' +
        queClass +
        ' img_fillin_gr d-flex" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      if (tmpObj.textFront != undefined && tmpObj.textFront != "") {
        htmlStmt +=
          '<div class="audioIcon off contant" ' +
          'data-audio="' +
          (tmpObj.textFrontAudio || "") +
          '">';

        htmlStmt += '<div class="text_Front">' + tmpObj.textFront + "</div>";

        htmlStmt += "</div>";
      }

      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      /* =================================================
               Create one input for every [_]
            ================================================= */

      var qStr = "";
      var parts = tmpObj.text.split("[_]");

      for (var p = 0; p < parts.length; p++) {
        if (parts[p] != "") {
          qStr +=
            '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant">' +
            parts[p] +
            "</div>";
        }

        if (p < parts.length - 1) {
          qStr +=
            "<input " +
            'class="text_input_area letter_input" ' +
            'type="text" ' +
            'maxlength="1" ' +
            'autocomplete="off" ' +
            'spellcheck="false" ' +
            'data-type="' +
            (tmpObj.type || "text") +
            '">';
        }
      }

      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex align-items-center">';

      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "number") {
          htmlStmt += x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += "</div>";
      }

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      if (tmpObj.textEnd != undefined && tmpObj.textEnd != "") {
        htmlStmt +=
          '<div class="text_End" style="' +
          (tmpObj.postion || "") +
          '">' +
          tmpObj.textEnd +
          "</div>";
      }

      htmlStmt += "</div>";

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
      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.imageposition == "back"
    ) {
      htmlStmt +=
        '<div class="q_image">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  initLetterBoxInputs();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Letter inputs
========================================================= */

function initLetterBoxInputs() {
  var $activity = $(".activity_area");

  $activity.off(".letterBoxes");

  /* عند كتابة حرف ينتقل للمربع التالي */

  $activity.on("input.letterBoxes", ".letter_input", function () {
    var $currentInput = $(this);

    var value = $currentInput.val().replace(/[^a-zA-Z]/g, "");

    if (value.length > 1) {
      value = value.charAt(value.length - 1);
    }

    $currentInput.val(value);

    if (value !== "") {
      var $inputs = $currentInput.closest(".fillin_set").find(".letter_input");

      var currentIndex = $inputs.index(this);

      if (currentIndex < $inputs.length - 1) {
        $inputs
          .eq(currentIndex + 1)
          .focus()
          .select();
      }
    }
  });

  /* Backspace يرجع للمربع السابق */

  $activity.on("keydown.letterBoxes", ".letter_input", function (event) {
    var $currentInput = $(this);

    var $inputs = $currentInput.closest(".fillin_set").find(".letter_input");

    var currentIndex = $inputs.index(this);

    if (
      event.key === "Backspace" &&
      $currentInput.val() === "" &&
      currentIndex > 0
    ) {
      event.preventDefault();

      $inputs
        .eq(currentIndex - 1)
        .val("")
        .focus();
    }

    if (event.key === "ArrowLeft" && currentIndex > 0) {
      event.preventDefault();

      $inputs
        .eq(currentIndex - 1)
        .focus()
        .select();
    }

    if (event.key === "ArrowRight" && currentIndex < $inputs.length - 1) {
      event.preventDefault();

      $inputs
        .eq(currentIndex + 1)
        .focus()
        .select();
    }
  });

  /* لصق كلمة كاملة وتوزيعها على المربعات */

  $activity.on("paste.letterBoxes", ".letter_input", function (event) {
    event.preventDefault();

    var clipboard = event.originalEvent.clipboardData || window.clipboardData;

    var pastedText = clipboard.getData("text").replace(/[^a-zA-Z]/g, "");

    var $inputs = $(this).closest(".fillin_set").find(".letter_input");

    var startIndex = $inputs.index(this);

    for (
      var i = 0;
      i < pastedText.length && startIndex + i < $inputs.length;
      i++
    ) {
      $inputs.eq(startIndex + i).val(pastedText.charAt(i));
    }

    var focusIndex = Math.min(
      startIndex + pastedText.length,
      $inputs.length - 1,
    );

    $inputs.eq(focusIndex).focus().select();
  });
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
