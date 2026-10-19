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
    htmlStmt += '<div class="magic_e_all_cont">';

    for (var q = 0; q < aObj.questions.length; q++) {
      var question = aObj.questions[q];

      htmlStmt +=
        '<div class="que magic_e_question" id="que_' +
        (q + 1) +
        '" data-qno="' +
        (q + 1) +
        '">';

      htmlStmt += '<div class="magic_e_words">';

      for (var i = 0; i < question.options.length; i++) {
        var opt = question.options[i];
        var optText = opt.text || "";
        var optAudio = opt.audio || "";

        htmlStmt +=
          '<div class="magic_e_word" id="pick_' +
          (q + 1) +
          "_" +
          (i + 1) +
          '">';

        htmlStmt += '<div class="word_icon_wrap">';
        htmlStmt +=
          '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
        htmlStmt +=
          '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
        htmlStmt += "</div>";

        htmlStmt += '<div class="word_text_holder" data-audio="' + optAudio + '">';
        htmlStmt += '<span class="txt_box">' + optText + "</span>";
        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> WB_G2_U1_P7_1 Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function loadThisObject() {
  buildMcqBody(mcq_data);
}

/* custom click + reset + validate */
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
          .find(".magic_e_word")
          .removeClass("selected selectedDefault isCorrect isNotCorrect");

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
          var qNo = parseInt(elsQue[i].dataset.qno);
          var qData = ob.data_obj.questions[qNo - 1];

          var correctAnswers = getIntArray(qData.answer);
          var userAnswers = [];

          var words = elsQue[i].querySelectorAll(".magic_e_word");

          for (var p = 0; p < words.length; p++) {
            var wordIndex = p + 1;
            var isCorrectWord = $.inArray(wordIndex, correctAnswers) >= 0;
            var isSelected = words[p].classList.contains("selected");

            if (isSelected) {
              userAnswers.push(wordIndex);

              $(words[p]).find(".word_icon_wrap").show();

              if (isCorrectWord) {
                $(words[p]).find(".tick").show();
                $(words[p]).find(".cross").hide();
              } else {
                $(words[p]).find(".tick").hide();
                $(words[p]).find(".cross").show();
              }
            }
          }

          resultArr[i] = compareArrays(userAnswers, correctAnswers) ? 1 : 0;
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

    $(document).off("click.magicE", ".magic_e_word");

    $(document).on("click.magicE", ".magic_e_word", function (e) {
      e.preventDefault();
      e.stopPropagation();

      $(this).toggleClass("selected selectedDefault");

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