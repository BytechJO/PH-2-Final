function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
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

    // =====================================================================
    // title + content in same row
    // =====================================================================

    htmlStmt += '<div class="title_content_row">';

    // ================= Heading =================
    htmlStmt += '<div class="title_side">';

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    if (aObj.mainTitle && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '" style="right:' +
        aObj.mainTitleIconPos.right +
        '">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }

    htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ================= End Heading =================

    // ================= Content =================
    htmlStmt += '<div class="content_side">';

    htmlStmt += '<div class="options cont_ht_sf">';
    htmlStmt += '<div class="magic_color_all_cont">';

    htmlStmt += '<div class="magic_tools">';

    htmlStmt +=
      '<button type="button" class="magic_tool_btn active" data-tool="noun">Noun Red</button>';

    htmlStmt +=
      '<button type="button" class="magic_tool_btn" data-tool="verb">Verb Blue</button>';

    htmlStmt +=
      '<button type="button" class="magic_tool_btn" data-tool="magic">Circle Magic E</button>';

    htmlStmt +=
      '<button type="button" class="magic_tool_btn" data-tool="erase">Erase</button>';

    htmlStmt += "</div>";

    htmlStmt += '<div class="magic_words_grid">';

    for (var i = 0; i < aObj.words.length; i++) {
      var item = aObj.words[i];

      htmlStmt +=
        '<div class="magic_word_item" data-index="' +
        i +
        '" data-type="' +
        item.type +
        '" data-magic="' +
        item.magicE +
        '" data-color="none" data-circle="false">';

      htmlStmt += '<div class="word_icon_wrap">';

      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';

      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';

      htmlStmt += "</div>";

      htmlStmt += '<span class="magic_word_text">' + item.text + "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    // ================= End Content =================

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> ColourVerbsBlueNounsRedMagicE Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function loadThisObject() {
  buildMcqBody(mcq_data);
}

$(document).ready(function () {
  setTimeout(function () {
    if (window.MCQ && window.MCQ.prototype) {
      window.MCQ.prototype.listen = function () {};

      window.MCQ.prototype.reset = function () {
        $(".magic_word_item")
          .attr("data-color", "none")
          .attr("data-circle", "false")
          .removeClass(
            "noun_red verb_blue magic_circle isCorrect isNotCorrect",
          );

        $(".word_icon_wrap").hide();
        $(".tick").hide();
        $(".cross").hide();

        $(".checkBtn").addClass("disabled");
        $(".resetBtn").addClass("disabled");
      };

      window.MCQ.prototype.validate = function () {
        var allCorrect = true;

        $(".word_icon_wrap").hide();
        $(".tick").hide();
        $(".cross").hide();

        $(".magic_word_item").each(function () {
          var correctType = $(this).attr("data-type");
          var isMagic = $(this).attr("data-magic") === "true";

          var userColor = $(this).attr("data-color");
          var userCircle = $(this).attr("data-circle") === "true";

          var colorCorrect = userColor === correctType;
          var circleCorrect = userCircle === isMagic;

          var isCorrect = colorCorrect && circleCorrect;

          $(this).find(".word_icon_wrap").show();

          if (isCorrect) {
            $(this).find(".tick").show();
            $(this).find(".cross").hide();
          } else {
            $(this).find(".tick").hide();
            $(this).find(".cross").show();
            allCorrect = false;
          }
        });

        showFeedback(true, allCorrect);

        if (allCorrect) {
          $(".resetBtn").addClass("disabled");
        }
      };
    }

    var currentTool = "noun";

    $(document).off("click.magicTool");
    $(document).on("click.magicTool", ".magic_tool_btn", function () {
      currentTool = $(this).attr("data-tool");

      $(".magic_tool_btn").removeClass("active");
      $(this).addClass("active");
    });

    $(document).off("click.magicWord");
    $(document).on("click.magicWord", ".magic_word_item", function (e) {
      e.preventDefault();
      e.stopPropagation();

      $(".word_icon_wrap").hide();
      $(".tick").hide();
      $(".cross").hide();

      if (currentTool === "noun") {
        $(this)
          .attr("data-color", "noun")
          .removeClass("verb_blue")
          .addClass("noun_red");
      }

      if (currentTool === "verb") {
        $(this)
          .attr("data-color", "verb")
          .removeClass("noun_red")
          .addClass("verb_blue");
      }

      if (currentTool === "magic") {
        var currentCircle = $(this).attr("data-circle") === "true";

        if (currentCircle) {
          $(this).attr("data-circle", "false").removeClass("magic_circle");
        } else {
          $(this).attr("data-circle", "true").addClass("magic_circle");
        }
      }

      if (currentTool === "erase") {
        $(this)
          .attr("data-color", "none")
          .attr("data-circle", "false")
          .removeClass("noun_red verb_blue magic_circle");
      }

      $(".checkBtn").removeClass("disabled");
      $(".resetBtn").removeClass("disabled");
    });
  }, 0);
});
