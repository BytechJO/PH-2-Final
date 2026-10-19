//  ******************************************
//  Linked Writing Activity
//  Three connected writing lines per card
//  ******************************************

window.LinkedWriting = function (obj, dataObj) {
  var optionsArea = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsArea[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

LinkedWriting.prototype = {
  /* =====================================================
     Initialise
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function (ob) {
    var self = this;

    var activityArea = ob.activity_area;

    if (!activityArea) {
      return;
    }

    var cards = activityArea.querySelectorAll(".linked_writing_card");

    for (var cardIndex = 0; cardIndex < cards.length; cardIndex++) {
      self.bindCardInputs(cards[cardIndex]);
    }
  },

  /* =====================================================
     Link inputs inside one card
  ===================================================== */

  bindCardInputs: function (cardElement) {
    var self = this;

    var inputs = cardElement.querySelectorAll(".linked_writing_input");

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      (function (currentIndex) {
        var currentInput = inputs[currentIndex];

        currentInput.addEventListener("input", function () {
          self.handleInput(inputs, currentIndex);
        });

        currentInput.addEventListener("keydown", function (event) {
          self.handleKeydown(event, inputs, currentIndex);
        });

        currentInput.addEventListener("paste", function (event) {
          self.handlePaste(event, inputs, currentIndex);
        });
      })(inputIndex);
    }
  },

  /* =====================================================
     Normal input
  ===================================================== */

  handleInput: function (inputs, currentIndex) {
    var currentInput = inputs[currentIndex];

    var maxLength = parseInt(currentInput.getAttribute("maxlength"), 10);

    if (
      currentInput.value.length >= maxLength &&
      currentIndex < inputs.length - 1
    ) {
      inputs[currentIndex + 1].focus();
    }

    this.updateResetButton();
  },

  /* =====================================================
     Keyboard navigation
  ===================================================== */

  handleKeydown: function (event, inputs, currentIndex) {
    var currentInput = inputs[currentIndex];

    /* Enter */

    if (event.key === "Enter") {
      event.preventDefault();

      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }

      return;
    }

    /* Backspace on empty line */

    if (
      event.key === "Backspace" &&
      currentInput.value.length === 0 &&
      currentIndex > 0
    ) {
      event.preventDefault();

      var previousInput = inputs[currentIndex - 1];

      previousInput.focus();

      var previousLength = previousInput.value.length;

      previousInput.setSelectionRange(previousLength, previousLength);

      return;
    }

    /* Arrow down */

    if (event.key === "ArrowDown" && currentIndex < inputs.length - 1) {
      event.preventDefault();

      inputs[currentIndex + 1].focus();

      return;
    }

    /* Arrow up */

    if (event.key === "ArrowUp" && currentIndex > 0) {
      event.preventDefault();

      inputs[currentIndex - 1].focus();
    }
  },

  /* =====================================================
     Paste text across lines
  ===================================================== */

  handlePaste: function (event, inputs, currentIndex) {
    var clipboardData = event.clipboardData || window.clipboardData;

    if (!clipboardData) {
      return;
    }

    var pastedText = clipboardData.getData("text");

    if (!pastedText) {
      return;
    }

    event.preventDefault();

    var remainingText = pastedText;

    for (var index = currentIndex; index < inputs.length; index++) {
      var input = inputs[index];

      var maxLength = parseInt(input.getAttribute("maxlength"), 10);

      var currentValue = index === currentIndex ? input.value : "";

      var availableLength = maxLength - currentValue.length;

      var inputPart = remainingText.slice(0, availableLength);

      input.value = currentValue + inputPart;

      remainingText = remainingText.slice(inputPart.length);

      if (remainingText.length === 0) {
        input.focus();

        input.setSelectionRange(input.value.length, input.value.length);

        break;
      }
    }

    this.updateResetButton();
  },

  /* =====================================================
     Reset button state
  ===================================================== */

  updateResetButton: function () {
    var activityArea = this.ob.activity_area;

    var inputs = activityArea.querySelectorAll(".linked_writing_input");

    var hasValue = false;

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      if (inputs[inputIndex].value.trim() !== "") {
        hasValue = true;
        break;
      }
    }

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (!resetButton) {
      return;
    }

    if (hasValue) {
      resetButton.classList.remove("disabled");
    } else {
      resetButton.classList.add("disabled");
    }
  },

  /* =====================================================
     No validation
  ===================================================== */

  validate: function () {
    /*
      هذا النشاط لا يحتوي على Check.
      الدالة موجودة فقط لحماية النظام.
    */

    return true;
  },

  /* =====================================================
     Reset
  ===================================================== */

  reset: function () {
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    var inputs = activityArea.querySelectorAll(".linked_writing_input");

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      inputs[inputIndex].value = "";

      inputs[inputIndex].style.color = "black";
    }

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (resetButton) {
      resetButton.classList.add("disabled");
    }

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (inputs.length > 0) {
      inputs[0].focus();
    }
  },

  /* =====================================================
     Initial settings
  ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
