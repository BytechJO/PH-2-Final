function buildReadingHTML(aObj) {
  var slide = "";
  var slideHtml = "";

  slideHtml =
    "<div class='container content_wrap reading_container'>";

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  /* =========================================================
     Header
  ========================================================= */

  slideHtml +=
    '<div class="act_head_group justify-content-center">';

  slideHtml +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  slideHtml +=
    '<div class="q-type-img-container">';

  slideHtml +=
    '<img class="mainTitle" src="' +
    aObj.mainTitle +
    '">';

  if (
    aObj.mainTitleIcon != undefined &&
    aObj.mainTitleIcon != ""
  ) {
    slideHtml +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  slideHtml += "</div>";
  slideHtml += "</div>";

  /* =========================================================
     Subtitle
  ========================================================= */

  slideHtml +=
    '<div class="activityHeading">';

  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  slideHtml +=
    "<div class='page_sub_title d-flex'>";

  slideHtml +=
    "<p>" +
    aObj.subTitleTextLeft +
    "</p>";

  if (
    aObj.subTitleIcons != undefined &&
    aObj.subTitleIcons != null
  ) {
    for (
      var sicons = 0;
      sicons < aObj.subTitleIcons.length;
      sicons++
    ) {
      if (aObj.subTitleIcons[sicons] != "") {
        slideHtml +=
          "<img src='" +
          aObj.subTitleIcons[sicons] +
          "'/>";
      }
    }
  }

  slideHtml +=
    "<p class='subTitleTextRight'>" +
    (aObj.subTitleTextRight || "") +
    "</p>";

  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "</div>";

  /* =========================================================
     Main content
  ========================================================= */

  slideHtml +=
    "<div class='options cont_ht_sf mx-auto'>";

  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center'>";

  if (
    aObj != undefined &&
    aObj != null &&
    aObj.slides != undefined &&
    aObj.slides.length != 0
  ) {
    for (
      var slideIndex = 0;
      slideIndex < aObj.slides.length;
      slideIndex++
    ) {
      slide = aObj.slides[slideIndex];

      /* =====================================================
         Text on image
      ===================================================== */

      if (slide.layout == "text_on_image") {
        if (
          slide.wordsBackground != undefined &&
          slide.wordsBackground != ""
        ) {
          slideHtml +=
            "<div class='d-flex read_grammer' " +
            "style='text-align:center;'>";

          var allWords = slide.words;

          slideHtml +=
            "<div class='grammer_container'>";

          slideHtml +=
            "<img src='" +
            slide.wordsBackground +
            "'/>";

          slideHtml +=
            "<div class='words_container d-flex justify-content-around'>";

          for (
            var wordsIndex = 0;
            wordsIndex < allWords.length;
            wordsIndex++
          ) {
            slideHtml +=
              "<div class='snap_card audioIcon mx-0 mx-md-auto audioTile' " +
              "data-slideNum='" +
              Number(slideIndex + 1) +
              "' " +
              "data-audio='" +
              slide.audios[wordsIndex] +
              "' " +
              "data-onaudioplay='color:#e43b6d'>";

            slideHtml +=
              "<p>" +
              allWords[wordsIndex] +
              "</p>";

            slideHtml += "</div>";
          }

          slideHtml += "</div>";
          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        slideHtml +=
          "<div class='image_with_text'>";

        slideHtml +=
          "<div class='main_image'>";

        slideHtml +=
          "<img src='" +
          slide.mainImage +
          "'/>";

        slideHtml += "</div>";

        if (
          slide.convImage != undefined &&
          slide.convImage != null
        ) {
          for (
            var convIndex = 0;
            convIndex < slide.convImage.length;
            convIndex++
          ) {
            var conv =
              slide.convImage[convIndex];

            slideHtml +=
              "<div class='image_audio pulse' " +
              "style='top:" +
              conv.imgPos.top +
              "; left:" +
              conv.imgPos.left +
              ";'>";

            if (
              conv.songText != undefined &&
              conv.songText != ""
            ) {
              slideHtml +=
                "<p class='song_text'>" +
                conv.songText +
                "</p>";
            } else {
              slideHtml +=
                "<img src='" +
                conv.img +
                "'/>";
            }

            slideHtml += "</div>";
          }
        }

        slideHtml += "</div>";
      }

      /* =====================================================
         Grammar slide
      ===================================================== */

      else if (
        slide.layout == "grammar_slide"
      ) {
        var curIndex = 0;
        var wordStyle = 0;

        var audioArry =
          slide.audio || [];

        var wordArray =
          slide.word || [];

        var wordArray_examples =
          slide.example_word || [];

        slideHtml +=
          "<div class='d-flex justify-content-center align-items-center " +
          "grid_columns_container " +
          slide.parentClassName +
          "'>";

        slideHtml +=
          "<div class='letters_container d-flex flex-wrap justify-content-center'>";

        if (
          slide.letters != undefined &&
          slide.letters != null
        ) {
          for (
            var letterIndex = 0;
            letterIndex < slide.letters.length;
            letterIndex++
          ) {
            slideHtml +=
              "<div class='letter letter-" +
              letterIndex +
              " bounce2'>" +
              slide.letters[letterIndex] +
              "</div>";
          }
        }

        slideHtml += "</div>";

        slideHtml +=
          "<div class='col_grid_container'>";

        slideHtml +=
          "<div class='gram_title d-flex justify-content-center'>" +
          (slide.gram_title || "") +
          "</div>";

        slideHtml +=
          "<div class='buttons_container d-flex flex-wrap'>";

        slideHtml +=
          "<div class='gram_btn rule pulse rule_toggle_btn'>" +
          "Rule" +
          "</div>";

        slideHtml +=
          "<div class='gram_btn Example pulse example_toggle_btn'>" +
          "Example" +
          "</div>";

        slideHtml += "</div>";

        if (
          slide.welcomeImage != undefined &&
          slide.welcomeImage != ""
        ) {
          slideHtml +=
            "<img src='" +
            slide.welcomeImage +
            "' class='welcomeImage'/>";
        }

        slideHtml +=
          "<div class='div_border top_border'></div>";

        slideHtml +=
          "<div class='div_border left_border'></div>";

        slideHtml +=
          "<div class='div_border right_border'></div>";

        slideHtml +=
          "<div class='div_border bottom_border'></div>";

        slideHtml +=
          "<div class='snap_group_all cont_group'>";

        slideHtml +=
          "<div class='slide_rule' style='display:none'>";

        var ImagePos =
          slide.imagePlacePos;

        if (
          ImagePos != undefined &&
          ImagePos != null
        ) {
          for (
            var snapIndex = 0;
            snapIndex < ImagePos.length;
            snapIndex++
          ) {
            slideHtml +=
              "<div class='snap_group_" +
              Number(snapIndex + 1) +
              " row mx-0 rule_text'>";

            for (
              var imgIndex = 0;
              imgIndex <
              ImagePos[snapIndex].colData.length;
              imgIndex++
            ) {
              slideHtml +=
                "<div class='col-12 col-md-" +
                ImagePos[snapIndex]
                  .colWidth[imgIndex] +
                " col_card'>";

              slideHtml +=
                "<div class='snap_card mx-0 mx-md-auto audioIcon' " +
                "data-slideNum='" +
                Number(slideIndex + 1) +
                "' " +
                "data-audio='" +
                (audioArry[curIndex] || "") +
                "' " +
                "data-onaudioplay='color:#e43b6d'>";

              if (
                ImagePos[snapIndex]
                  .colData[imgIndex] != 0
              ) {
                wordStyle =
                  curIndex + 1;

                slideHtml +=
                  "<div class='ss_word ss_t_" +
                  wordStyle +
                  "'>" +
                  "<div class='ss_text background_audio'>" +
                  (wordArray[curIndex] || "") +
                  "</div>" +
                  "</div>";

                curIndex++;
              }

              slideHtml += "</div>";
              slideHtml += "</div>";
            }

            slideHtml += "</div>";
          }
        }

        slideHtml += "</div>";

        slideHtml +=
          "<div class='slide_example' style='display:none'>";

        var examplesTextPos =
          slide.examplesTextPos;

        if (
          examplesTextPos != undefined &&
          examplesTextPos != null
        ) {
          curIndex = 0;

          for (
            var exampleIndex = 0;
            exampleIndex <
            examplesTextPos.length;
            exampleIndex++
          ) {
            slideHtml +=
              "<div class='snap_group_" +
              Number(exampleIndex + 1) +
              " row mx-0 example_text'>";

            for (
              var exampleColIndex = 0;
              exampleColIndex <
              examplesTextPos[exampleIndex]
                .colData.length;
              exampleColIndex++
            ) {
              slideHtml +=
                "<div class='col-12 col-md-" +
                examplesTextPos[exampleIndex]
                  .colWidth[exampleColIndex] +
                " col_card'>";

              slideHtml +=
                "<div class='snap_card mx-0 mx-md-auto audioIcon' " +
                "data-slideNum='" +
                Number(slideIndex + 1) +
                "' " +
                "data-audio='" +
                (audioArry[curIndex] || "") +
                "' " +
                "data-onaudioplay='color:#e43b6d'>";

              if (
                examplesTextPos[exampleIndex]
                  .colData[exampleColIndex] != 0
              ) {
                wordStyle =
                  curIndex + 1;

                slideHtml +=
                  "<div class='ss_word ss_t_" +
                  wordStyle +
                  "'>" +
                  "<div class='ss_text background_audio'>" +
                  (wordArray_examples[curIndex] || "") +
                  "</div>" +
                  "</div>";

                curIndex++;
              }

              slideHtml += "</div>";
              slideHtml += "</div>";
            }

            slideHtml += "</div>";
          }
        }

        slideHtml += "</div>";
        slideHtml += "</div>";
        slideHtml += "</div>";
        slideHtml += "</div>";
      }

      /* =====================================================
         Grid columns
      ===================================================== */

      else if (
        slide.layout == "grid_columns"
      ) {
        var curIndex = 0;
        var wordStyle = 0;

        var audioArry =
          slide.audio || [];

        var wordArray =
          slide.word || [];

        slideHtml +=
          "<div class='d-flex justify-content-center align-items-center " +
          "grid_columns_container " +
          slide.parentClassName +
          "'>";

        slideHtml +=
          "<div class='col_grid_container'>";

        /*
         * مهم:
         * [] تعتبر true في JavaScript،
         * لذلك نتحقق أيضًا أن mainImage ليست Array فارغة.
         */
        if (
          slide.mainImage != undefined &&
          slide.mainImage != "" &&
          !(
            Array.isArray(slide.mainImage) &&
            slide.mainImage.length === 0
          )
        ) {
          slideHtml +=
            "<img src='" +
            slide.mainImage +
            "' style='height:500px;'/>";
        }

        if (
          slide.middleImage != undefined &&
          slide.middleImage != ""
        ) {
          slideHtml +=
            "<img src='" +
            slide.middleImage +
            "' class='middle_image'/>";
        }

        slideHtml +=
          "<div class='snap_group_all cont_group'>";

        /* =================================================
           Grid main title
        ================================================= */

        if (
          slide.grid_main_title_text != undefined &&
          slide.grid_main_title_text != ""
        ) {
          slideHtml +=
            "<div class='grid_main_title_container'>";

          slideHtml +=
            "<div class='snap_card audioIcon grid_main_title_text' " +
            "data-slideNum='" +
            Number(slideIndex + 1) +
            "' " +
            "data-audio='" +
            (slide.grid_main_title_text_audio ||
              "") +
            "' " +
            "data-onaudioplay='color:#e43b6d'>";

          if (
            Array.isArray(
              slide.grid_main_title_text
            )
          ) {
            for (
              var gridLetterIndex = 0;
              gridLetterIndex <
              slide.grid_main_title_text.length;
              gridLetterIndex++
            ) {
              slideHtml +=
                "<div class='letter letter-" +
                gridLetterIndex +
                " pulse'>" +
                slide.grid_main_title_text[
                  gridLetterIndex
                ] +
                "</div>";
            }
          } else {
            slideHtml +=
              "<div>" +
              slide.grid_main_title_text +
              "</div>";
          }

          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        /* =================================================
           Top text
        ================================================= */

        if (
          slide.topText != undefined &&
          slide.topText != ""
        ) {
          slideHtml +=
            "<div class='top_image_text d-flex'>";

          if (
            slide.topImage != undefined &&
            slide.topImage != ""
          ) {
            slideHtml +=
              "<img src='" +
              slide.topImage +
              "' class='top_image'/>";
          }

          slideHtml +=
            "<div class='snap_card audioIcon' " +
            "data-slideNum='" +
            Number(slideIndex + 1) +
            "' " +
            "data-audio='" +
            (slide.topText_audio || "") +
            "' " +
            "data-onaudioplay='color:#e43b6d'>";

          slideHtml +=
            "<div class='ss_text'>" +
            slide.topText +
            "</div>";

          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        if (
          slide.top_right_image != undefined &&
          slide.top_right_image != ""
        ) {
          slideHtml +=
            "<img src='" +
            slide.top_right_image +
            "' class='top_right_image'/>";
        }

        /* =================================================
           Rows and columns
        ================================================= */

        var ImagePos =
          slide.imagePlacePos;

        if (
          ImagePos != undefined &&
          ImagePos != null
        ) {
          for (
            var snapIndex = 0;
            snapIndex < ImagePos.length;
            snapIndex++
          ) {
            slideHtml +=
              "<div class='snap_group_" +
              Number(snapIndex + 1) +
              " row mx-0'>";

            for (
              var imgIndex = 0;
              imgIndex <
              ImagePos[snapIndex]
                .colData.length;
              imgIndex++
            ) {
              slideHtml +=
                "<div class='col-12 col-md-" +
                ImagePos[snapIndex]
                  .colWidth[imgIndex] +
                " col_card'>";

              if (
                ImagePos[snapIndex]
                  .colData[imgIndex] != 0
              ) {
                wordStyle =
                  curIndex + 1;

                var currentWord =
                  wordArray[curIndex] || "";

                /*
                 * منطقة الرسم لا تدخل داخل:
                 *
                 * snap_card
                 * audioIcon
                 * background_audio
                 *
                 * حتى لا تتأثر بأي hover أو transform عام.
                 */
                if (
                  typeof currentWord ===
                    "string" &&
                  currentWord.indexOf(
                    "bee_drawing_activity"
                  ) !== -1
                ) {
                  slideHtml +=
                    "<div class='bee_drawing_cell'>" +
                    currentWord +
                    "</div>";
                } else {
                  slideHtml +=
                    "<div class='snap_card mx-0 mx-md-auto audioIcon' " +
                    "data-slideNum='" +
                    Number(slideIndex + 1) +
                    "' " +
                    "data-audio='" +
                    (audioArry[curIndex] || "") +
                    "' " +
                    "data-onaudioplay='color:#e43b6d'>";

                  slideHtml +=
                    "<div class='ss_word ss_t_" +
                    wordStyle +
                    "'>" +
                    "<div class='ss_text background_audio'>" +
                    currentWord +
                    "</div>" +
                    "</div>";

                  slideHtml += "</div>";
                }

                curIndex++;
              }

              slideHtml += "</div>";
            }

            slideHtml += "</div>";
          }
        }

        if (
          slide.image != undefined &&
          slide.image != ""
        ) {
          slideHtml +=
            '<img class="text_img" src="' +
            slide.image +
            '">';
        }

        slideHtml += "</div>";
        slideHtml += "</div>";
        slideHtml += "</div>";
      }

      /* =====================================================
         Writing tips
      ===================================================== */

      else if (
        slide.layout == "writing_tips"
      ) {
        slideHtml +=
          "<div class='writing_tips_content_holder'>";

        slideHtml +=
          "<div class='writing_tips'>";

        slideHtml +=
          "<div class='writing_tips_background_image_container'>";

        slideHtml +=
          "<img src='" +
          slide.background_image +
          "' class='writing_tips_background_image'/>";

        slideHtml += "</div>";

        slideHtml +=
          "<div class='writing_tips_top_right_image_image_container'>";

        slideHtml +=
          "<img src='" +
          slide.top_right_image +
          "' class='writing_tips_top_right_image'/>";

        slideHtml += "</div>";

        slideHtml +=
          "<div class='writing_tips_container'>";

        slideHtml +=
          "<div class='writing_tips_header'>";

        slideHtml +=
          "<div class='snap_card audioIcon' " +
          "data-slideNum='" +
          Number(slideIndex + 1) +
          "' " +
          "data-audio='aa' " +
          "data-onaudioplay='color:#e43b6d'>";

        slideHtml +=
          "<p>" +
          slide.header +
          "</p>";

        slideHtml += "</div>";
        slideHtml += "</div>";

        slideHtml +=
          "<div class='snap_card audioIcon' " +
          "data-slideNum='" +
          Number(slideIndex + 1) +
          "' " +
          "data-audio='aa' " +
          "data-onaudioplay='color:#e43b6d'>";

        slideHtml +=
          slide.paragraph;

        slideHtml += "</div>";
        slideHtml += "</div>";
        slideHtml += "</div>";
        slideHtml += "</div>";
      }

      /* =====================================================
         Multiple grid containers
      ===================================================== */

      else if (
        slide.layout ==
        "multiple_grid_containers"
      ) {
        slideHtml +=
          "<div class='" +
          slide.parent_class_name +
          "'>";

        slideHtml +=
          "<div class='snap_card audioTile audioIcon' " +
          "data-slideNum='" +
          Number(slideIndex + 1) +
          "' " +
          "data-audio='" +
          slide.mainTextAudio +
          "' " +
          "data-onaudioplay='color:#e43b6d'>";

        slideHtml +=
          "<div class='main_text'>" +
          slide.mainText +
          "</div>";

        slideHtml += "</div>";

        slideHtml +=
          "<div class='all_cont boxes_container d-flex justify-content-center align-items-center'>";

        if (
          slide.arrowsImages != undefined &&
          slide.arrowsImages != null
        ) {
          for (
            var arrows = 0;
            arrows <
            slide.arrowsImages.length;
            arrows++
          ) {
            slideHtml +=
              "<img src='" +
              slide.arrowsImages[arrows] +
              "' class='arrows_images_" +
              Number(slideIndex + 1) +
              "_" +
              arrows +
              "'/>";
          }
        }

        for (
          var box = 0;
          box <
          slide.imagePlacePos.length;
          box++
        ) {
          var curIndex = 0;
          var wordStyle = 0;

          slideHtml +=
            "<div class='box_with_text'>";

          if (
            slide.mainImage[box] !=
            undefined
          ) {
            slideHtml +=
              "<img src='" +
              slide.mainImage[box] +
              "' class='grammer_background'/>";
          }

          if (
            slide.boxTitle[box] !=
            undefined
          ) {
            slideHtml +=
              "<div class='snap_card audioTile audioIcon box_title' " +
              "data-slideNum='" +
              Number(slideIndex + 1) +
              "' " +
              "data-audio='" +
              slide.boxTitleAudio[box] +
              "' " +
              "data-onaudioplay='color:#e43b6d'>";

            slideHtml +=
              "<p>" +
              slide.boxTitle[box] +
              "</p>";

            slideHtml += "</div>";
          }

          var groupClass =
            slide.word[box][curIndex]
              .charAt(0) == "."
              ? "snap_group_single_images"
              : "snap_group_single";

          slideHtml +=
            "<div class='" +
            groupClass +
            " cont_group'>";

          var BoxImagePos =
            slide.imagePlacePos[box];

          var BoxAudioArray =
            slide.audio[box];

          var BoxWordArray =
            slide.word[box];

          if (
            BoxImagePos != undefined &&
            BoxImagePos != null
          ) {
            for (
              var boxSnapIndex = 0;
              boxSnapIndex <
              BoxImagePos.length;
              boxSnapIndex++
            ) {
              slideHtml +=
                "<div class='snap_group_" +
                Number(boxSnapIndex + 1) +
                " row'>";

              for (
                var boxImgIndex = 0;
                boxImgIndex <
                BoxImagePos[boxSnapIndex]
                  .colData.length;
                boxImgIndex++
              ) {
                slideHtml +=
                  "<div class='col-12 col-md-" +
                  BoxImagePos[boxSnapIndex]
                    .colWidth[boxImgIndex] +
                  "'>";

                slideHtml +=
                  "<div class='snap_card audioTile audioIcon' " +
                  "data-slideNum='" +
                  Number(slideIndex + 1) +
                  "' " +
                  "data-audio='" +
                  (BoxAudioArray[
                    curIndex
                  ] || "") +
                  "' " +
                  "data-onaudioplay='color:#e43b6d'>";

                if (
                  BoxImagePos[boxSnapIndex]
                    .colData[boxImgIndex] != 0
                ) {
                  wordStyle =
                    curIndex + 1;

                  if (
                    BoxWordArray[curIndex]
                      .charAt(0) == "."
                  ) {
                    slideHtml +=
                      "<img src='" +
                      BoxWordArray[curIndex] +
                      "' class='ss_image'/>";
                  } else {
                    slideHtml +=
                      "<div class='ss_word ss_t_" +
                      wordStyle +
                      "'>" +
                      "<div class='ss_text'>" +
                      BoxWordArray[curIndex] +
                      "</div>" +
                      "</div>";
                  }

                  curIndex++;
                }

                slideHtml += "</div>";
                slideHtml += "</div>";
              }

              slideHtml += "</div>";
            }
          }

          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        slideHtml += "</div>";
        slideHtml += "</div>";
      }

      /* =====================================================
         Multiple flex containers with list
      ===================================================== */

      else if (
        slide.layout ==
        "multible_flex_containers_with_list"
      ) {
        slideHtml +=
          "<div class='boxes_with_list_container d-flex'>";

        for (
          var boxnum = 0;
          boxnum < slide.boxes.length;
          boxnum++
        ) {
          slideHtml +=
            "<div class='boxe_list_container box_list_" +
            Number(boxnum + 1) +
            "'>";

          slideHtml +=
            "<div class='list_container'>";

          slideHtml +=
            '<div class="flip-container">';

          slideHtml +=
            '<div class="flipper">';

          slideHtml +=
            '<div class="front">';

          slideHtml +=
            '<img src="' +
            slide.boxes[boxnum].image +
            '" alt="Front Image">';

          slideHtml += "</div>";

          slideHtml +=
            '<div class="back">';

          slideHtml +=
            '<img src="' +
            slide.boxes[boxnum].image +
            '" alt="Back Image">';

          slideHtml +=
            "<ul class='list_under_image'>";

          for (
            var item = 0;
            item <
            slide.boxes[boxnum].list.length;
            item++
          ) {
            slideHtml += "<li>";

            slideHtml +=
              "<div class='snap_card audioIcon' " +
              "data-slideNum='" +
              Number(slideIndex + 1) +
              "' " +
              "data-audio='" +
              slide.boxes[boxnum]
                .audio[item] +
              "' " +
              "data-onaudioplay='color:#e43b6d'>";

            slideHtml +=
              "<p>" +
              slide.boxes[boxnum]
                .list[item] +
              "</p>";

            slideHtml += "</div>";
            slideHtml += "</li>";
          }

          slideHtml += "</ul>";
          slideHtml += "</div>";
          slideHtml += "</div>";
          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        slideHtml += "</div>";
      }

      /* =====================================================
         Multiple image with text
      ===================================================== */

      else if (
        slide.layout ==
        "multible_image_with_text"
      ) {
        slideHtml +=
          "<div class='image_with_text'>";

        slideHtml +=
          "<img src='" +
          slide.secondImage +
          "' class='image_floating_right'/>";

        slideHtml +=
          "<div class='main_image'>";

        slideHtml +=
          "<img src='" +
          slide.mainImage +
          "' class='main_image_background'/>";

        slideHtml += "</div>";

        slideHtml +=
          "<div class='snap_card audioTile audioIcon title_text' " +
          "data-slideNum='" +
          Number(slideIndex + 1) +
          "' " +
          "data-audio='" +
          slide.titleAudio +
          "' " +
          "data-onaudioplay='color:#e43b6d'>";

        slideHtml +=
          "<p>" +
          slide.titleText +
          "</p>";

        slideHtml += "</div>";

        for (
          var convIndex = 0;
          convIndex <
          slide.convImage.length;
          convIndex++
        ) {
          var conv =
            slide.convImage[convIndex];

          slideHtml +=
            "<div class='image_audio' " +
            "style='top:" +
            conv.imgPos.top +
            "; left:" +
            conv.imgPos.left +
            ";'>";

          slideHtml +=
            "<div class='snap_card mx-0 mx-md-auto audioTile audioIcon' " +
            "data-slideNum='" +
            Number(slideIndex + 1) +
            "' " +
            "data-audio='" +
            conv.audio +
            "' " +
            "data-onaudioplay='color:#e43b6d'>";

          slideHtml +=
            "<p class='song_text'>" +
            conv.songText +
            "</p>";

          slideHtml += "</div>";
          slideHtml += "</div>";
        }

        slideHtml += "</div>";
      }

      /* =====================================================
         Adventure images with text
      ===================================================== */

      else if (
        slide.layout ==
        "adventure_images_with_text"
      ) {
        slideHtml +=
          "<div class='image_with_text " +
          slide.parent_class_name +
          "'>";

        if (
          slide.secondImage != undefined &&
          slide.secondImage != ""
        ) {
          slideHtml +=
            "<img src='" +
            slide.secondImage +
            "' class='image_floating_right'/>";
        }

        slideHtml +=
          "<div class='main_image'>";

        if (
          slide.mainImage != undefined &&
          slide.mainImage != ""
        ) {
          slideHtml +=
            "<img src='" +
            slide.mainImage +
            "' class='main_image_background'/>";
        }

        slideHtml += "</div>";

        if (
          slide.titleText != undefined &&
          slide.titleText != ""
        ) {
          slideHtml +=
            "<div class='title_text_container'>";

          slideHtml +=
            "<div class='snap_card audioIcon title_text' " +
            "data-slideNum='" +
            Number(slideIndex + 1) +
            "' " +
            "data-audio='" +
            slide.titleAudio +
            "' " +
            "data-onaudioplay='color:#e43b6d'>";

          slideHtml +=
            "<p class='title_text'>" +
            slide.titleText +
            "</p>";

          slideHtml += "</div>";

          slideHtml +=
            "<img src='" +
            slide.titleImage +
            "' class='title_right_image_background'/>";

          slideHtml += "</div>";
        } else {
          slideHtml +=
            "<div class='snap_card audioIcon title_image' " +
            "data-slideNum='" +
            Number(slideIndex + 1) +
            "' " +
            "data-audio='" +
            slide.titleAudio +
            "' " +
            "data-onaudioplay='color:#e43b6d'>";

          slideHtml +=
            "<img src='" +
            slide.titleImage +
            "' class='title_image_background'/>";

          slideHtml += "</div>";
        }

        if (
          slide.convImage != undefined &&
          slide.convImage != null
        ) {
          for (
            var convIndex = 0;
            convIndex <
            slide.convImage.length;
            convIndex++
          ) {
            var conv =
              slide.convImage[convIndex];

            slideHtml +=
              "<div class='image_audio' " +
              "style='top:" +
              conv.imgPos.top +
              "; left:" +
              conv.imgPos.left +
              ";'>";

            slideHtml +=
              "<div class='snap_card mx-0 mx-md-auto audioIcon' " +
              "data-slideNum='" +
              Number(slideIndex + 1) +
              "' " +
              "data-audio='" +
              conv.audio +
              "' " +
              "data-onaudioplay='color:#e43b6d'>";

            slideHtml +=
              "<p class='song_text'>" +
              conv.songText +
              "</p>";

            slideHtml += "</div>";
            slideHtml += "</div>";
          }
        }

        slideHtml += "</div>";
      }
    }

    slideHtml +=
      "</div>" +
      "</div>" +
      "</div>";

    $(".mainContent").append(
      slideHtml
    );

    showRuleSlide();
    showExampleSlide();
    showSentenceImg();

    /*
     * تشغيل الرسم بعد ما تنبني عناصر الصفحة.
     */
    setTimeout(function () {
      if (
        typeof initBeeDrawing ===
        "function"
      ) {
        initBeeDrawing();
      }
    }, 0);

    setLoadedStatus(
      getCurrFileOrDirectory("file")
    );
  }
}

/* =========================================================
   Sentence image toggle
========================================================= */

function showSentenceImg() {
  $(document)
    .off(
      "click.readingSentenceImage",
      ".imgToggle"
    )
    .on(
      "click.readingSentenceImage",
      ".imgToggle",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        var imgName =
          $(this).data("img");

        $("." + imgName).fadeToggle(
          1000
        );
      }
    );
}

/* =========================================================
   Rule slide
========================================================= */

function showRuleSlide() {
  $(document)
    .off(
      "click.readingRule",
      ".rule_toggle_btn"
    )
    .on(
      "click.readingRule",
      ".rule_toggle_btn",
      function (event) {
        event.preventDefault();

        $(".welcomeImage").fadeOut(
          1000
        );

        $(".slide_example").hide();

        $(".slide_rule").fadeIn(
          1000
        );

        $(".example_toggle_btn")
          .removeClass(
            "selected_btn"
          );

        $(this).addClass(
          "selected_btn"
        );
      }
    );
}

/* =========================================================
   Example slide
========================================================= */

function showExampleSlide() {
  $(document)
    .off(
      "click.readingExample",
      ".example_toggle_btn"
    )
    .on(
      "click.readingExample",
      ".example_toggle_btn",
      function (event) {
        event.preventDefault();

        $(".welcomeImage").fadeOut(
          1000
        );

        $(".slide_rule").hide();

        $(".slide_example").fadeIn(
          1000
        );

        $(".rule_toggle_btn")
          .removeClass(
            "selected_btn"
          );

        $(this).addClass(
          "selected_btn"
        );
      }
    );
}