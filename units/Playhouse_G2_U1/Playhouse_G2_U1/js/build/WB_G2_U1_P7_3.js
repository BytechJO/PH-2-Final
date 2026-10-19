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

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

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
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

    if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }

    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // =====================================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="nounverb_all_cont">';

    for (var q = 0; q < aObj.questions.length; q++) {
      var question = aObj.questions[q];

      htmlStmt +=
        '<div class="que nounverb_question" id="que_' +
        (q + 1) +
        '" data-qno="' +
        (q + 1) +
        '">';

      htmlStmt += '<div class="nounverb_img left_img">';
      htmlStmt += '<img src="' + question.leftImage + '">';
      htmlStmt += "</div>";

      htmlStmt += '<div class="nounverb_lines">';

      for (var l = 0; l < question.lines.length; l++) {
        htmlStmt += '<div class="nounverb_line">';

        for (var w = 0; w < question.lines[l].length; w++) {
          var wordObj = question.lines[l][w];

          htmlStmt +=
            '<div class="nounverb_word" data-answer="' +
            wordObj.answer +
            '" data-state="none">';

          htmlStmt += '<div class="word_icon_wrap">';
          htmlStmt +=
            '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
          htmlStmt +=
            '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
          htmlStmt += "</div>";

          htmlStmt += '<span class="nounverb_text">' + wordObj.text + "</span>";
          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += '<div class="nounverb_img right_img">';
      htmlStmt += '<img src="' + question.rightImage + '">';
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> WB_G2_U1_P7_2 Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function loadThisObject() {
  buildMcqBody(mcq_data);
}

/*
  Click states:
  1st click = circle / noun
  2nd click = underline / verb
  3rd click = remove
*/
$(document).ready(function () {
  setTimeout(function () {
    if (window.MCQ && window.MCQ.prototype) {
      window.MCQ.prototype.listen = function () {};

      window.MCQ.prototype.showIcons = function () {
        var ob = this.ob;
        var e = ob.activity_area;

        $(e).find(".word_icon_wrap").hide();
        $(e).find(".tick").hide();
        $(e).find(".cross").hide();
      };

      window.MCQ.prototype.reset = function () {
        var ob = this.ob;
        var e = ob.activity_area;

        $(e)
          .find(".nounverb_word")
          .attr("data-state", "none")
          .removeClass("noun_selected verb_selected isCorrect isNotCorrect");

        $(e).find(".word_icon_wrap").hide();
        $(e).find(".tick").hide();
        $(e).find(".cross").hide();

        if (document.getElementsByClassName("checkBtn")[0]) {
          document
            .getElementsByClassName("checkBtn")[0]
            .classList.add("disabled");
        }

        if (document.getElementsByClassName("resetBtn")[0]) {
          document
            .getElementsByClassName("resetBtn")[0]
            .classList.add("disabled");
        }
      };

      window.MCQ.prototype.validate = function () {
        var ob = this.ob;
        var e = ob.activity_area;
        var resultArr = [];
        var elsQue = e.querySelectorAll(".que");

        $(e).find(".word_icon_wrap").hide();
        $(e).find(".tick").hide();
        $(e).find(".cross").hide();

        for (var i = 0; i < elsQue.length; i++) {
          var words = elsQue[i].querySelectorAll(".nounverb_word");
          var allWordsCorrect = true;

          for (var w = 0; w < words.length; w++) {
            var correctAnswer = $(words[w]).attr("data-answer");
            var userState = $(words[w]).attr("data-state");

            if (userState !== "none") {
              $(words[w]).find(".word_icon_wrap").show();

              if (userState === correctAnswer) {
                $(words[w]).find(".tick").show();
                $(words[w]).find(".cross").hide();
              } else {
                $(words[w]).find(".tick").hide();
                $(words[w]).find(".cross").show();
              }
            }

            if (userState !== correctAnswer) {
              allWordsCorrect = false;
            }
          }

          resultArr[i] = allWordsCorrect ? 1 : 0;
        }

        var allCorrect =
          resultArr.length > 0 && resultArr.join("").indexOf("0") === -1;

        showFeedback(true, allCorrect);

        if (allCorrect && document.getElementsByClassName("resetBtn")[0]) {
          document
            .getElementsByClassName("resetBtn")[0]
            .classList.add("disabled");
        }
      };
    }

    $(document).off("click.nounVerb", ".nounverb_word");

    $(document).on("click.nounVerb", ".nounverb_word", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var currentState = $(this).attr("data-state");

      $(this).removeClass("noun_selected verb_selected");

      if (currentState === "none") {
        $(this).attr("data-state", "noun");
        $(this).addClass("noun_selected");
      } else if (currentState === "noun") {
        $(this).attr("data-state", "verb");
        $(this).addClass("verb_selected");
      } else {
        $(this).attr("data-state", "none");
      }

      $(".word_icon_wrap").hide();
      $(".tick").hide();
      $(".cross").hide();

      if (document.getElementsByClassName("checkBtn")[0]) {
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");
      }

      if (document.getElementsByClassName("resetBtn")[0]) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      }
    });
  }, 0);
});
