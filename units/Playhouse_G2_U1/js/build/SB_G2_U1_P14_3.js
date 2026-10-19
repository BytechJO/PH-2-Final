function buildFillInBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';
    // options
    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';
        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';
        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" data-audio="' +
            aObj.optionsAudios[key] +
            '">';
          htmlStmt += '<div class="clue_word">' + value + "</div>";
          htmlStmt += "</div>";
        });
        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }
    }
    // =======
    htmlStmt += '<div class="screen_elements d-flex flex-wrap">';
    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt +=
          '<div class="img_space"><img src="' + aObj.image + '"></img></div>';
      }
    }

    for (x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];
      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-column" data-qno="' +
        (x + 1) +
        '">';
      htmlStmt +=
        '<div class="audioIcon textFront txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' +
        tmpObj.textaudios[0] +
        '">';
      htmlStmt += tmpObj.textFront;
      htmlStmt += "</div>";
      if (tmpObj.image != "" && tmpObj.image != "no") {
        htmlStmt +=
          '<div class="image_space"><img src="' + tmpObj.image + '"></div>';
      }
      if (tmpObj.singleword) {
        var str = tmpObj.text;
        var qStr =
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' +
          tmpObj.textaudios[0] +
          '">' +
          '<img src="../images/icons/sound-wave.png" class="audio_icon">' +
          "</div>";
        qStr += str.replace(
          /\[_]/g,
          '<input class="text_input_area" type="text" maxlength="' +
            tmpObj.maxlength +
            '" data-type="' +
            tmpObj.type +
            '">',
        );
      } else {
        var wordIndex = -1;
        words = tmpObj.text.split("[_]");
        qStr = words
          .map((word, index) => {
            if (word !== "") {
              wordIndex++;
              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' +
                tmpObj.textaudios[wordIndex] +
                '">' +
                word +
                "</div>"
              );
            }
          })
          .join(
            '<input class="text_input_area" type="text" maxlength="' +
              tmpObj.maxlength +
              '" data-type="' +
              tmpObj.type +
              '">',
          );
      }

      htmlStmt += '<div class="fillin_gr d-flex">';
      htmlStmt += '<div class="q_space">';
      var ans = tmpObj.text.includes("[_]") ? "true" : "false";
      if (ans == "true") {
        htmlStmt += '<div class="icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt +=
          '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
        htmlStmt +=
          '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
        htmlStmt += "</div></div>"; // - end icon_wrap_holder / icon_wrap
      } else {
        htmlStmt += '<div class="icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt += '<div class="tick"></div>';
        htmlStmt += '<div class="cross"></div>';
        htmlStmt += "</div></div>"; // - end icon_wrap_holder / icon_wrap
      }

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';
      htmlStmt += qStr;
      htmlStmt += "</div>"; // - end fillin_1
      htmlStmt += "</div>";
      htmlStmt += "</div></div>"; // - end  - fillin_gr / img_fillin_gr
    }

    htmlStmt += "</div>";
    // ================================================================ [ SentenceBuilding ]
    // ================================================================ [ SentenceBuilding ]
    if (aObj.main_title_text != undefined && aObj.items != undefined) {
      htmlStmt += '<div class="SentenceBuilding_container">';
      htmlStmt += '<div class="cont_items d-flex flex-wrap">';

      var sentenceTitleAudio =
        aObj.sentenceTitleAudio ||
        aObj.sentenceTitle_audio ||
        aObj.mainTitleAudio ||
        aObj.mainTitle_audio ||
        aObj.main_title_audio ||
        "";

      htmlStmt +=
        '<div class="main_title_container sentence_title_audio" data-audio="' +
        sentenceTitleAudio +
        '">';

      htmlStmt += '<div class="main_title_text">';

      if (aObj.main_title_text.length > 1) {
        for (let x = 0; x < aObj.main_title_text.length; x++) {
          htmlStmt +=
            "<div class='letter letter-" +
            x +
            " pulse'>" +
            aObj.main_title_text[x] +
            "</div>";
        }
      } else {
        htmlStmt += "<div>" + aObj.main_title_text + "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      for (let i = 0; i < aObj.items.length; i++) {
        htmlStmt +=
          '<div class="item item-' + i + '">' + aObj.items[i] + "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }
    // ================================================================ [ / SentenceBuilding ]
    // ================================================================ [ / SentenceBuilding ]
    htmlStmt += "</div></div></div>"; // end - all_cont / options
  }

  console.log("htmlStmt >> fillin Built");
  $(".activity_area").append(htmlStmt);

  showSentenceImg();
  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

var currentSentenceAudio = null;

function playSentenceAudio(audioUrl) {
  if (!audioUrl) return;

  if (currentSentenceAudio) {
    currentSentenceAudio.pause();
    currentSentenceAudio.currentTime = 0;
  }

  currentSentenceAudio = new Audio(audioUrl);

  currentSentenceAudio.play().catch(function (error) {
    console.log("Audio play error:", error);
  });

  currentSentenceAudio.addEventListener("ended", function () {
    currentSentenceAudio = null;
  });
}

function showSentenceImg() {
  $(document).off("click", ".imgToggle");

  $(document).on("click", ".imgToggle", function (e) {
    e.preventDefault();
    e.stopPropagation();

    var imgName = $(this).attr("data-img");
    var $targetImage = $("." + imgName);
    var audioUrl = $targetImage.attr("data-audio");

    if (!$targetImage.length) return;

    var willShow = !$targetImage.is(":visible");

    $targetImage.stop(true, true).fadeToggle(1000);

    if (willShow && audioUrl) {
      playSentenceAudio(audioUrl);
    }

    if (!willShow && currentSentenceAudio) {
      currentSentenceAudio.pause();
      currentSentenceAudio.currentTime = 0;
      currentSentenceAudio = null;
    }
  });
}

// صوت عنوان Sentence Building
$(document).off("click", ".sentence_title_audio");

$(document).on("click", ".sentence_title_audio", function (e) {
  e.preventDefault();
  e.stopPropagation();

  var audioUrl = $(this).attr("data-audio");

  playSentenceAudio(audioUrl);
});

// صوت صور الـ conv عند الضغط عليها
$(document).off("click", ".conv_audio_img");

$(document).on("click", ".conv_audio_img", function (e) {
  e.preventDefault();
  e.stopPropagation();

  var audioUrl = $(this).attr("data-audio");

  playSentenceAudio(audioUrl);
});
