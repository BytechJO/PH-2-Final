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

      htmlStmt += '<div class="fillin_set d-flex flex-wrap background_audio">';
      htmlStmt += qStr;
      htmlStmt += "</div>"; // - end fillin_1
      htmlStmt += "</div>";
      htmlStmt += "</div></div>"; // - end  - fillin_gr / img_fillin_gr
    }
    htmlStmt += "</div>";

    // ================================================================ [ SentenceBuilding ]
    htmlStmt += '<div class="SentenceBuilding_container">';
    htmlStmt += '<div class="cont_items d-flex flex-wrap">';
    htmlStmt +=
      '<div class="main_title_container sentenceTitleAudio" ' +
      'data-audio="' +
      (aObj.sentenceTitleAudio || "") +
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
      htmlStmt += "<div class=''>" + aObj.main_title_text + "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    for (let i = 0; i < aObj.items.length; i++) {
      htmlStmt +=
        '<div class="item item-' + i + '">' + aObj.items[i] + "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
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

var sentenceBuildingAudio = new Audio();

function playSentenceBuildingAudio(audioPath) {
  if (!audioPath) {
    return;
  }

  sentenceBuildingAudio.pause();
  sentenceBuildingAudio.currentTime = 0;

  sentenceBuildingAudio.src = audioPath;

  var playPromise = sentenceBuildingAudio.play();

  if (playPromise !== undefined) {
    playPromise.catch(function (error) {
      console.log("Audio could not play:", error);
    });
  }
}

function stopSentenceBuildingAudio() {
  sentenceBuildingAudio.pause();
  sentenceBuildingAudio.currentTime = 0;
}

function showSentenceImg() {
  $(document)
    .off("click.sentenceBuilding")
    .on("click.sentenceBuilding", ".imgToggle", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var button = $(this);
      var imgName = button.attr("data-img");
      var audioPath = button.attr("data-audio");
      var targetImage = $("." + imgName);

      var imageIsVisible = targetImage.is(":visible");

      // إخفاء الصورة الأخرى
      $(".text_img").not(targetImage).stop(true, true).fadeOut(300);

      $(".imgToggle").not(button).removeClass("active");

      stopSentenceBuildingAudio();

      if (imageIsVisible) {
        targetImage.stop(true, true).fadeOut(300);

        button.removeClass("active");
      } else {
        targetImage.stop(true, true).fadeIn(600);

        button.addClass("active");

        playSentenceBuildingAudio(audioPath);
      }
    });

  // أصوات الجمل الموجودة في المنتصف
  $(document)
    .off("click.sentenceText")
    .on("click.sentenceText", ".sentenceAudio", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioPath = $(this).attr("data-audio");

      $(".sentenceAudio").removeClass("audio-playing");
      $(this).addClass("audio-playing");

      playSentenceBuildingAudio(audioPath);
    });

  // صوت عنوان Sentence Building
  $(document)
    .off("click.sentenceTitle")
    .on("click.sentenceTitle", ".sentenceTitleAudio", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var audioPath = $(this).attr("data-audio");

      playSentenceBuildingAudio(audioPath);
    });

  sentenceBuildingAudio.onended = function () {
    $(".sentenceAudio").removeClass("audio-playing");
  };
}
