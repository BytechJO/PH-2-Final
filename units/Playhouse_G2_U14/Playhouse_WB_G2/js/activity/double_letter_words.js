window.DoubleLetterWords = function (obj, dataObj) {
  var activityArea = obj;

  if (obj && obj.jquery) {
    activityArea = obj[0];
  }

  this.settings = {
    activity_area: activityArea,
    data_obj: dataObj,
  };

  this.init(this.settings);
};

DoubleLetterWords.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen();
  },

  listen: function () {
    var self = this;
    var activityArea = this.ob.activity_area;

    $(activityArea)
      .off("input.doubleLetter", ".missing_letter_input")
      .on("input.doubleLetter", ".missing_letter_input", function () {
        if (this.readOnly) {
          return;
        }

        this.value = this.value.replace(/[^a-zA-Z]/g, "").slice(0, 1);

        $(this)
          .closest(".double_letter_question")
          .find(".icon_wrap, .tick, .cross")
          .hide();

        self.enableButtons();
      });

    $(activityArea)
      .off("click.doubleLetter", ".word_choice")
      .on("click.doubleLetter", ".word_choice", function () {
        if (this.disabled) {
          return;
        }

        var question = $(this).closest(".double_letter_question");

        question.find(".word_choice").removeClass("selected");

        $(this).addClass("selected");

        question.find(".icon_wrap, .tick, .cross").hide();

        self.enableButtons();
      });
  },

  normalize: function (value) {
    return String(value || "")
      .toLowerCase()
      .trim();
  },

  validate: function () {
    var activityArea = this.ob.activity_area;
    var dataObj = this.ob.data_obj;

    var questions = activityArea.querySelectorAll(".double_letter_question");

    var allCorrect = true;

    for (var i = 0; i < questions.length; i++) {
      var questionNumber = parseInt(questions[i].dataset.qno);

      var questionData = dataObj.questions[questionNumber - 1];

      var iconWrap = questions[i].querySelector(".icon_wrap");

      var tick = questions[i].querySelector(".tick");

      var cross = questions[i].querySelector(".cross");

      iconWrap.style.display = "none";
      tick.style.display = "none";
      cross.style.display = "none";

      // السؤال المحلول لا يتم فحصه ولا يظهر عليه رمز

      if (parseInt(dataObj.defaultAnswer) === questionNumber) {
        continue;
      }

      var input = questions[i].querySelector(".missing_letter_input");

      var selectedOption = questions[i].querySelector(".word_choice.selected");

      var userLetter = this.normalize(input.value);
      var correctLetter = this.normalize(questionData.missingLetter);

      var selectedNumber = selectedOption
        ? parseInt(selectedOption.dataset.option)
        : 0;

      var letterCorrect = userLetter === correctLetter;

      var optionCorrect =
        selectedNumber === parseInt(questionData.correctOption);

      if (letterCorrect && optionCorrect) {
        iconWrap.style.display = "block";
        tick.style.display = "block";
      } else {
        iconWrap.style.display = "block";
        cross.style.display = "block";
        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");
    }
  },

  reset: function () {
    var activityArea = this.ob.activity_area;
    var dataObj = this.ob.data_obj;

    var questions = activityArea.querySelectorAll(".double_letter_question");

    for (var i = 0; i < questions.length; i++) {
      var questionNumber = parseInt(questions[i].dataset.qno);

      var questionData = dataObj.questions[questionNumber - 1];

      var input = questions[i].querySelector(".missing_letter_input");

      var choices = questions[i].querySelectorAll(".word_choice");

      var iconWrap = questions[i].querySelector(".icon_wrap");

      var tick = questions[i].querySelector(".tick");

      var cross = questions[i].querySelector(".cross");

      iconWrap.style.display = "none";
      tick.style.display = "none";
      cross.style.display = "none";

      for (var j = 0; j < choices.length; j++) {
        choices[j].classList.remove("selected");
        choices[j].disabled = false;
      }

      if (parseInt(dataObj.defaultAnswer) === questionNumber) {
        input.value = questionData.missingLetter;
        input.readOnly = true;

        choices[questionData.correctOption - 1].classList.add("selected");

        choices[questionData.correctOption - 1].disabled = true;

        for (var k = 0; k < choices.length; k++) {
          choices[k].disabled = true;
        }
      } else {
        input.value = "";
        input.readOnly = false;
      }
    }

    $(".checkBtn").addClass("disabled");
    $(".resetBtn").addClass("disabled");
  },

  enableButtons: function () {
    $(".checkBtn").removeClass("disabled");
    $(".resetBtn").removeClass("disabled");
  },

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
