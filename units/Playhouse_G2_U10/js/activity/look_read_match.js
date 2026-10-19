// ******************************************
// Look Read Match
// Bidirectional matching activity
// ******************************************

window.LookReadMatch = function (obj, dataObj) {
  var activityOptions = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: activityOptions[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

LookReadMatch.prototype = {
  /*
    =========================================================
    Initialize
    =========================================================
    */

  init: function (ob) {
    this.ob = ob;

    this.matches = {};

    this.dragData = null;

    this.selectedDot = null;

    this.ignoreClick = false;

    this.workspace = ob.activity_area.querySelector(
      ".look_read_match_workspace",
    );

    this.svg = ob.activity_area.querySelector(".look_read_match_svg");

    this.savedLinesGroup = ob.activity_area.querySelector(
      ".look_read_match_saved_lines",
    );

    this.previewLine = ob.activity_area.querySelector(
      ".look_read_match_preview_line",
    );

    this.listen(ob);
  },

  /*
    =========================================================
    Events
    =========================================================
    */

  listen: function (ob) {
    var self = this;

    var activityArea = ob.activity_area;

    /*
        =====================================================
        Input events
        =====================================================
        */

    var inputs = activityArea.querySelectorAll(".look_read_match_input");

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      inputs[inputIndex].addEventListener("keydown", function (event) {
        var allowedKeys = [
          "Backspace",
          "Delete",
          "Tab",
          "ArrowLeft",
          "ArrowRight",
        ];

        if (allowedKeys.indexOf(event.key) !== -1) {
          return;
        }

        if (!/^[1-4]$/.test(event.key)) {
          event.preventDefault();
        }
      });

      inputs[inputIndex].addEventListener("input", function () {
        self.inputChanged(this);
      });
    }

    /*
        =====================================================
        Connection dot events
        =====================================================
        */

    var dots = activityArea.querySelectorAll(".look_read_match_dot");

    for (var dotIndex = 0; dotIndex < dots.length; dotIndex++) {
      dots[dotIndex].addEventListener("pointerdown", function (event) {
        self.startDrag(event, this);
      });

      dots[dotIndex].addEventListener("click", function () {
        self.dotClicked(this);
      });
    }

    document.addEventListener("pointermove", function (event) {
      self.moveDrag(event);
    });

    document.addEventListener("pointerup", function (event) {
      self.endDrag(event);
    });

    window.addEventListener("resize", function () {
      self.drawAllLines();
    });
  },

  /*
    =========================================================
    Input changed
    =========================================================
    */

  inputChanged: function (input) {
    var questionId = parseInt(input.dataset.questionId);

    input.value = input.value.replace(/[^1-4]/g, "").substring(0, 1);

    this.hideQuestionResult(questionId);

    if (input.value === "") {
      this.removeMatch(questionId);

      this.updateButtons();

      return;
    }

    var optionNumber = parseInt(input.value);

    /*
        Writing the number draws the line.
        */

    this.setMatch(questionId, optionNumber, false);

    this.updateButtons();
  },

  /*
    =========================================================
    Set match
    =========================================================
    */

  setMatch: function (questionId, optionNumber, writeNumber) {
    questionId = parseInt(questionId);

    optionNumber = parseInt(optionNumber);

    if (isNaN(questionId) || isNaN(optionNumber)) {
      return;
    }

    /*
        Each image can only be connected to one question.
        */

    for (var savedQuestionId in this.matches) {
      if (!this.matches.hasOwnProperty(savedQuestionId)) {
        continue;
      }

      if (
        parseInt(savedQuestionId) !== questionId &&
        parseInt(this.matches[savedQuestionId]) === optionNumber
      ) {
        delete this.matches[savedQuestionId];

        this.setInputValue(savedQuestionId, "");

        this.hideQuestionResult(savedQuestionId);
      }
    }

    this.matches[questionId] = optionNumber;

    /*
        Drawing the line writes the number.
        */

    if (writeNumber === true) {
      this.setInputValue(questionId, optionNumber);
    }

    this.hideQuestionResult(questionId);

    this.drawAllLines();

    this.updateButtons();
  },

  /*
    =========================================================
    Remove match
    =========================================================
    */

  removeMatch: function (questionId) {
    if (this.matches.hasOwnProperty(questionId)) {
      delete this.matches[questionId];
    }

    this.drawAllLines();
  },

  /*
    =========================================================
    Set input value
    =========================================================
    */

  setInputValue: function (questionId, value) {
    var input = this.ob.activity_area.querySelector(
      ".look_read_match_input" + '[data-question-id="' + questionId + '"]',
    );

    if (input) {
      input.value = value;
    }
  },

  /*
    =========================================================
    Start drag
    =========================================================
    */

  startDrag: function (event, dot) {
    event.preventDefault();

    var side = dot.dataset.side;

    var dotPosition = this.getDotCenter(dot);

    this.dragData = {
      side: side,

      questionId: side === "left" ? parseInt(dot.dataset.questionId) : null,

      optionNumber:
        side === "right" ? parseInt(dot.dataset.optionNumber) : null,

      startX: dotPosition.x,

      startY: dotPosition.y,

      pointerStartX: event.clientX,

      pointerStartY: event.clientY,

      moved: false,
    };

    this.showPreviewLine(
      dotPosition.x,

      dotPosition.y,

      dotPosition.x,

      dotPosition.y,
    );
  },

  /*
    =========================================================
    Move drag
    =========================================================
    */

  moveDrag: function (event) {
    if (!this.dragData) {
      return;
    }

    var workspaceRect = this.workspace.getBoundingClientRect();

    var currentX = event.clientX - workspaceRect.left;

    var currentY = event.clientY - workspaceRect.top;

    var moveX = Math.abs(event.clientX - this.dragData.pointerStartX);

    var moveY = Math.abs(event.clientY - this.dragData.pointerStartY);

    if (moveX > 5 || moveY > 5) {
      this.dragData.moved = true;
    }

    this.showPreviewLine(
      this.dragData.startX,

      this.dragData.startY,

      currentX,

      currentY,
    );
  },

  /*
    =========================================================
    End drag
    =========================================================
    */

  endDrag: function (event) {
    if (!this.dragData) {
      return;
    }

    var currentDrag = this.dragData;

    this.dragData = null;

    this.hidePreviewLine();

    if (currentDrag.moved !== true) {
      return;
    }

    this.ignoreClick = true;

    var self = this;

    setTimeout(function () {
      self.ignoreClick = false;
    }, 100);

    var elementUnderPointer = document.elementFromPoint(
      event.clientX,
      event.clientY,
    );

    if (!elementUnderPointer) {
      return;
    }

    var targetDot = elementUnderPointer.closest(".look_read_match_dot");

    if (!targetDot || !this.ob.activity_area.contains(targetDot)) {
      return;
    }

    var targetSide = targetDot.dataset.side;

    if (currentDrag.side === targetSide) {
      return;
    }

    var questionId;

    var optionNumber;

    if (currentDrag.side === "left") {
      questionId = currentDrag.questionId;

      optionNumber = parseInt(targetDot.dataset.optionNumber);
    } else {
      questionId = parseInt(targetDot.dataset.questionId);

      optionNumber = currentDrag.optionNumber;
    }

    this.setMatch(
      questionId,

      optionNumber,

      true,
    );
  },

  /*
    =========================================================
    Click connection
    =========================================================
    */

  dotClicked: function (dot) {
    if (this.ignoreClick) {
      return;
    }

    var side = dot.dataset.side;

    /*
        First selected point.
        */

    if (this.selectedDot === null) {
      this.selectedDot = {
        element: dot,

        side: side,

        questionId: side === "left" ? parseInt(dot.dataset.questionId) : null,

        optionNumber:
          side === "right" ? parseInt(dot.dataset.optionNumber) : null,
      };

      dot.classList.add("selected");

      return;
    }

    /*
        Cancel same point.
        */

    if (this.selectedDot.element === dot) {
      dot.classList.remove("selected");

      this.selectedDot = null;

      return;
    }

    /*
        Select another point on same side.
        */

    if (this.selectedDot.side === side) {
      this.selectedDot.element.classList.remove("selected");

      this.selectedDot = {
        element: dot,

        side: side,

        questionId: side === "left" ? parseInt(dot.dataset.questionId) : null,

        optionNumber:
          side === "right" ? parseInt(dot.dataset.optionNumber) : null,
      };

      dot.classList.add("selected");

      return;
    }

    var questionId;

    var optionNumber;

    if (this.selectedDot.side === "left") {
      questionId = this.selectedDot.questionId;

      optionNumber = parseInt(dot.dataset.optionNumber);
    } else {
      questionId = parseInt(dot.dataset.questionId);

      optionNumber = this.selectedDot.optionNumber;
    }

    this.selectedDot.element.classList.remove("selected");

    this.selectedDot = null;

    this.setMatch(
      questionId,

      optionNumber,

      true,
    );
  },

  /*
    =========================================================
    Get point center
    =========================================================
    */

  getDotCenter: function (dot) {
    var workspaceRect = this.workspace.getBoundingClientRect();

    var dotRect = dot.getBoundingClientRect();

    return {
      x: dotRect.left - workspaceRect.left + dotRect.width / 2,

      y: dotRect.top - workspaceRect.top + dotRect.height / 2,
    };
  },

  /*
    =========================================================
    Draw all lines
    =========================================================
    */

  drawAllLines: function () {
    if (!this.savedLinesGroup) {
      return;
    }

    this.savedLinesGroup.innerHTML = "";

    for (var questionId in this.matches) {
      if (!this.matches.hasOwnProperty(questionId)) {
        continue;
      }

      this.drawLine(
        parseInt(questionId),

        parseInt(this.matches[questionId]),
      );
    }
  },

  /*
    =========================================================
    Draw one line
    =========================================================
    */

  drawLine: function (questionId, optionNumber) {
    var leftDot = this.ob.activity_area.querySelector(
      ".look_read_match_left_dot" + '[data-question-id="' + questionId + '"]',
    );

    var rightDot = this.ob.activity_area.querySelector(
      ".look_read_match_right_dot" +
        '[data-option-number="' +
        optionNumber +
        '"]',
    );

    if (!leftDot || !rightDot) {
      return;
    }

    var startPoint = this.getDotCenter(leftDot);

    var endPoint = this.getDotCenter(rightDot);

    var line = document.createElementNS(
      "http://www.w3.org/2000/svg",

      "line",
    );

    line.setAttribute("class", "look_read_match_line");

    line.setAttribute("x1", startPoint.x);

    line.setAttribute("y1", startPoint.y);

    line.setAttribute("x2", endPoint.x);

    line.setAttribute("y2", endPoint.y);

    this.savedLinesGroup.appendChild(line);
  },

  /*
    =========================================================
    Preview line
    =========================================================
    */

  showPreviewLine: function (x1, y1, x2, y2) {
    if (!this.previewLine) {
      return;
    }

    this.previewLine.style.display = "block";

    this.previewLine.setAttribute("x1", x1);

    this.previewLine.setAttribute("y1", y1);

    this.previewLine.setAttribute("x2", x2);

    this.previewLine.setAttribute("y2", y2);
  },

  hidePreviewLine: function () {
    if (this.previewLine) {
      this.previewLine.style.display = "none";
    }
  },

  /*
    =========================================================
    Validate
    =========================================================
    */

  validate: function () {
    var questions = this.ob.data_obj.questions;

    var resultArray = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var question = questions[questionIndex];

      var questionId = parseInt(question.id);

      var correctAnswer = parseInt(question.answer);

      var selectedAnswer = null;

      if (this.matches.hasOwnProperty(questionId)) {
        selectedAnswer = parseInt(this.matches[questionId]);
      }

      var questionElement = this.ob.activity_area.querySelector(
        ".look_read_match_question" + '[data-question-id="' + questionId + '"]',
      );

      var tick = questionElement.querySelector(".tick");

      var cross = questionElement.querySelector(".cross");

      var iconWrap = questionElement.querySelector(".icon_wrap");

      tick.style.display = "none";

      cross.style.display = "none";

      iconWrap.style.display = "block";

      if (selectedAnswer === correctAnswer) {
        tick.style.display = "block";

        resultArray[questionIndex] = 1;
      } else {
        cross.style.display = "block";

        resultArray[questionIndex] = 0;
      }
    }

    var allCorrect = resultArray.indexOf(0) === -1;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  /*
    =========================================================
    Hide one question result
    =========================================================
    */

  hideQuestionResult: function (questionId) {
    var questionElement = this.ob.activity_area.querySelector(
      ".look_read_match_question" + '[data-question-id="' + questionId + '"]',
    );

    if (!questionElement) {
      return;
    }

    var iconWrap = questionElement.querySelector(".icon_wrap");

    var tick = questionElement.querySelector(".tick");

    var cross = questionElement.querySelector(".cross");

    if (iconWrap) {
      iconWrap.style.display = "none";
    }

    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "none";
    }
  },

  /*
    =========================================================
    Enable check and reset
    =========================================================
    */

  updateButtons: function () {
    var hasAnswer = Object.keys(this.matches).length > 0;

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (hasAnswer) {
      if (checkButton) {
        checkButton.classList.remove("disabled");
      }

      if (resetButton) {
        resetButton.classList.remove("disabled");
      }
    } else {
      if (checkButton) {
        checkButton.classList.add("disabled");
      }

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /*
    =========================================================
    Reset
    =========================================================
    */

  reset: function () {
    this.matches = {};

    this.dragData = null;

    this.hidePreviewLine();

    var inputs = this.ob.activity_area.querySelectorAll(
      ".look_read_match_input",
    );

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      inputs[inputIndex].value = "";
    }

    var questions = this.ob.activity_area.querySelectorAll(
      ".look_read_match_question",
    );

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var iconWrap = questions[questionIndex].querySelector(".icon_wrap");

      var tick = questions[questionIndex].querySelector(".tick");

      var cross = questions[questionIndex].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    var selectedDots = this.ob.activity_area.querySelectorAll(
      ".look_read_match_dot.selected",
    );

    for (var dotIndex = 0; dotIndex < selectedDots.length; dotIndex++) {
      selectedDots[dotIndex].classList.remove("selected");
    }

    this.selectedDot = null;

    this.drawAllLines();

    this.updateButtons();
  },

  /*
    =========================================================
    Initial settings
    =========================================================
    */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
