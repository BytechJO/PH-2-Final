function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;
    var numberofCols = parseInt(aObj.numberofcolumns) || 1;
    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);
    var currQueNum = 0;

    // =========================================================
    // Navigation
    // =========================================================

    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" alt="Back">';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" alt="Next">';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =========================================================
    // Heading
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
      '<img class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '" alt="">';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "0px";

      if (
        aObj.mainTitleIconPos &&
        aObj.mainTitleIconPos.right !== undefined
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
        ';" alt="">';
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

    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt +=
      "<p>" +
      (aObj.subTitleTextLeft || "") +
      "</p>";

    if (
      Array.isArray(aObj.subTitleIcons) &&
      aObj.subTitleIcons.length > 0
    ) {
      for (
        var sicons = 0;
        sicons < aObj.subTitleIcons.length;
        sicons++
      ) {
        htmlStmt +=
          '<img src="' +
          aObj.subTitleIcons[sicons] +
          '" alt="">';
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
    // Activity Content
    // =========================================================

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont farm_activity_cont ' +
      'justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm farm_group d-flex ' +
      'flex-wrap justify-content-center align-items-center">';

    // =========================================================
    // Optional front image
    // =========================================================

    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition === "front"
    ) {
      htmlStmt += '<div class="img_space">';
      htmlStmt +=
        '<img src="' +
        aObj.image +
        '" alt="">';
      htmlStmt += "</div>";
    }

    // =========================================================
    // Questions
    // =========================================================

    for (var x = 0; x < numberofCols; x++) {
      htmlStmt +=
        '<div class="tick_group farm_tick_group d-flex flex-column">';

      for (var y = 0; y < numOfQinCol; y++) {
        if (currQueNum >= numOfQuestions) {
          break;
        }

        currQueNum++;

        var tpOb = aObj.questions[currQueNum - 1];

        if (
          typeof tpOb === "undefined" ||
          tpOb === null
        ) {
          continue;
        }

        htmlStmt +=
          '<div class="que farm_question background_audio" ' +
          'id="que_' +
          currQueNum +
          '" ' +
          'data-qno="' +
          currQueNum +
          '">';

        // =====================================================
        // Song text
        // =====================================================

        if (
          tpOb.question !== undefined &&
          tpOb.question !== ""
        ) {
          htmlStmt +=
            '<div class="q_part farm_song_side">';

          htmlStmt +=
            '<div class="question farm_song_text">' +
            tpOb.question +
            "</div>";

          htmlStmt += "</div>";
        }

        // =====================================================
        // Animal options
        // =====================================================

        htmlStmt +=
          '<div class="picks_grp farm_animals_group">';

        if (
          Array.isArray(tpOb.options) &&
          tpOb.options.length > 0
        ) {
          for (
            var opt = 0;
            opt < tpOb.options.length;
            opt++
          ) {
            var optionObj = tpOb.options[opt];

            htmlStmt +=
              '<div ' +
              'id="pick_' +
              currQueNum +
              "_" +
              (opt + 1) +
              '" ' +
              'class="pick farm_animal_pick" ' +
              'data-question="' +
              currQueNum +
              '" ' +
              'data-option="' +
              (opt + 1) +
              '" ' +
              'tabindex="0" ' +
              'role="button" ' +
              'aria-pressed="false">';

            htmlStmt +=
              '<div class="animal_circle_holder">';

            if (
              optionObj.image !== undefined &&
              optionObj.image !== ""
            ) {
              htmlStmt +=
                '<img class="animal_image" ' +
                'src="' +
                optionObj.image +
                '" ' +
                'alt="' +
                removeHtmlTags(optionObj.text || "") +
                '">';
            }

            htmlStmt += "</div>";

            if (
              optionObj.text !== undefined &&
              optionObj.text !== ""
            ) {
              htmlStmt +=
                '<div class="txt animal_name">' +
                optionObj.text +
                "</div>";
            }

            htmlStmt += "</div>";
          }
        }

        htmlStmt += "</div>";

        // =====================================================
        // Required by mcq.js
        // موجودة لمنع الخطأ فقط ومخفية بالـCSS
        // =====================================================

        htmlStmt +=
          '<div class="icon_wrap p-2 farm_feedback">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png" alt="">' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png" alt="">' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    // =========================================================
    // Optional back image
    // =========================================================

    if (
      aObj.image !== "no" &&
      aObj.image !== "" &&
      aObj.imageposition !== "front"
    ) {
      htmlStmt += '<div class="image-container">';

      htmlStmt +=
        '<img src="' +
        aObj.image +
        '" alt="">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  initializeFarmAnimalActivity();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}


// =============================================================
// Initialize activity
// =============================================================

function initializeFarmAnimalActivity() {
  // اختيار الحيوان بالماوس
  $(document)
    .off("click.farmAnimal", ".farm_animal_pick")
    .on(
      "click.farmAnimal",
      ".farm_animal_pick",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        selectFarmAnimal($(this));
      }
    );

  // اختيار الحيوان باستخدام Enter أو Space
  $(document)
    .off("keydown.farmAnimal", ".farm_animal_pick")
    .on(
      "keydown.farmAnimal",
      ".farm_animal_pick",
      function (event) {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          event.stopPropagation();

          selectFarmAnimal($(this));
        }
      }
    );

  // زر Reset الموجود في القالب
  $(document)
    .off("click.farmAnimalReset")
    .on(
      "click.farmAnimalReset",
      [
        ".reset",
        ".resetBtn",
        ".reset_btn",
        ".resetButton",
        ".activityReset",
        ".activity_reset",
        ".resetActivity",
        ".reset_activity",
        "[data-action='reset']"
      ].join(","),
      function () {
        resetFarmAnimalActivity();
      }
    );
}


// =============================================================
// Select one animal
// =============================================================

function selectFarmAnimal($selectedPick) {
  if (
    !$selectedPick ||
    $selectedPick.length === 0
  ) {
    return;
  }

  var $question =
    $selectedPick.closest(".farm_question");

  $question
    .find(".farm_animal_pick")
    .removeClass(
      "selected active checked pick_selected right wrong"
    )
    .attr("aria-pressed", "false")
    .removeAttr("style");

  $selectedPick
    .addClass("selected")
    .attr("aria-pressed", "true");
}


// =============================================================
// Reset activity
// =============================================================

function resetFarmAnimalActivity() {
  $(".farm_animal_pick")
    .removeClass(
      "selected active checked pick_selected right wrong"
    )
    .attr("aria-pressed", "false")
    .removeAttr("style");

  $(".farm_feedback .tick").hide();
  $(".farm_feedback .cross").hide();
}


// =============================================================
// Remove HTML tags from alt text
// =============================================================

function removeHtmlTags(value) {
  return $("<div>")
    .html(value)
    .text()
    .replace(/"/g, "&quot;");
}


function nextChar(c) {
  return String.fromCharCode(
    c.charCodeAt(0) + 1
  );
}