window.LookAndWriteBodyParts = function (obj, dataObj) {
  var activityArea =
    obj[0].getElementsByClassName("options")[0];

  this.settings = {
    activity_area: activityArea,
    data_obj: dataObj,
    parent_holder: obj[0]
  };

  this.init(this.settings);
};

LookAndWriteBodyParts.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen();
  },

  listen: function () {
    var self = this;

    $(this.ob.activity_area)
      .find(".body_part_input")
      .on("input", function () {
        $(this)
          .removeClass("correct_answer wrong_answer");

        $(this)
          .closest(".answer_line")
          .find(".input_result_icon .tick, .input_result_icon .cross")
          .hide();

        $(".checkBtn").removeClass("disabled");
        $(".resetBtn").removeClass("disabled");
      });
  },

  validate: function () {
    var allCorrect = true;

    $(this.ob.activity_area)
      .find(".body_part_input")
      .each(function () {
        var userAnswer = $.trim(
          $(this).val()
        ).toLowerCase();

        var correctAnswer = $.trim(
          $(this).attr("data-answer")
        ).toLowerCase();

        var answerLine =
          $(this).closest(".answer_line");

        answerLine
          .find(".input_result_icon .tick, .input_result_icon .cross")
          .hide();

        $(this).removeClass(
          "correct_answer wrong_answer"
        );

        if (
          userAnswer !== "" &&
          userAnswer === correctAnswer
        ) {
          $(this).addClass("correct_answer");

          answerLine
            .find(".input_result_icon .tick")
            .show();
        } else {
          allCorrect = false;

          $(this).addClass("wrong_answer");

          answerLine
            .find(".input_result_icon .cross")
            .show();
        }
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".resetBtn").addClass("disabled");
    }
  },

  reset: function () {
    $(this.ob.activity_area)
      .find(".body_part_input")
      .val("")
      .removeClass("correct_answer wrong_answer");

    $(this.ob.activity_area)
      .find(".input_result_icon .tick, .input_result_icon .cross")
      .hide();

    $(".checkBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  }
};