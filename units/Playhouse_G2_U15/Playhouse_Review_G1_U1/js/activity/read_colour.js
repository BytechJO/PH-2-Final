// ******************************************
// Read and Colour Activity
// ******************************************

window.ReadColour = function (obj, dataObj) {
  var options =
    obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.canvas = null;
  this.context = null;

  this.isDrawing = false;
  this.isEraser = false;

  this.lastX = 0;
  this.lastY = 0;

  this.selectedColor =
    dataObj.colors &&
    dataObj.colors.length > 0
      ? dataObj.colors[0]
      : "#ed1c24";

  this.brushSize =
    dataObj.brushSize || 5;

  this.init(this.settings);
};

ReadColour.prototype = {
  /* =========================================================
     Init
     ========================================================= */

  init: function (ob) {
    this.ob = ob;

    this.canvas =
      ob.activity_area.querySelector(
        "#readColourCanvas",
      );

    if (!this.canvas) {
      console.error(
        "readColourCanvas was not found",
      );

      initialSettingsDone(1);
      return;
    }

    this.context =
      this.canvas.getContext("2d");

    this.listen();
  },

  /* =========================================================
     Events
     ========================================================= */

  listen: function () {
    var self = this;
    var canvas = this.canvas;

    var swatches =
      this.ob.activity_area.querySelectorAll(
        ".read_colour_swatch",
      );

    var eraserButton =
      this.ob.activity_area.querySelector(
        ".read_colour_eraser",
      );

    var resetButton =
      this.ob.activity_area.querySelector(
        ".read_colour_clear",
      );

    /* اختيار اللون */

    for (
      var i = 0;
      i < swatches.length;
      i++
    ) {
      swatches[i].addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          self.selectColour(
            this.dataset.color,
            this,
            swatches,
          );
        },
      );
    }

    /* تشغيل أو إيقاف الممحاة */

    if (eraserButton) {
      eraserButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          self.isEraser =
            !self.isEraser;

          this.classList.toggle(
            "active",
            self.isEraser,
          );
        },
      );
    }

    /* Reset الداخلي */

    if (resetButton) {
      resetButton.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          self.reset();
        },
      );
    }

    /* Mouse */

    canvas.addEventListener(
      "mousedown",
      function (event) {
        self.startDrawing(event);
      },
    );

    canvas.addEventListener(
      "mousemove",
      function (event) {
        self.draw(event);
      },
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        self.stopDrawing();
      },
    );

    canvas.addEventListener(
      "mouseleave",
      function () {
        self.stopDrawing();
      },
    );

    /* Touch */

    canvas.addEventListener(
      "touchstart",
      function (event) {
        event.preventDefault();

        if (
          event.touches &&
          event.touches.length > 0
        ) {
          self.startDrawing(
            event.touches[0],
          );
        }
      },
      {
        passive: false,
      },
    );

    canvas.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();

        if (
          event.touches &&
          event.touches.length > 0
        ) {
          self.draw(
            event.touches[0],
          );
        }
      },
      {
        passive: false,
      },
    );

    canvas.addEventListener(
      "touchend",
      function (event) {
        event.preventDefault();
        self.stopDrawing();
      },
      {
        passive: false,
      },
    );

    canvas.addEventListener(
      "touchcancel",
      function (event) {
        event.preventDefault();
        self.stopDrawing();
      },
      {
        passive: false,
      },
    );
  },

  /* =========================================================
     Select colour
     ========================================================= */

  selectColour: function (
    color,
    button,
    buttons,
  ) {
    this.selectedColor =
      color || "#ed1c24";

    this.isEraser = false;

    for (
      var i = 0;
      i < buttons.length;
      i++
    ) {
      buttons[i].classList.remove(
        "active",
      );
    }

    if (button) {
      button.classList.add("active");
    }

    var eraserButton =
      this.ob.activity_area.querySelector(
        ".read_colour_eraser",
      );

    if (eraserButton) {
      eraserButton.classList.remove(
        "active",
      );
    }
  },

  /* =========================================================
     Canvas position
     ========================================================= */

  getPosition: function (event) {
    var rect =
      this.canvas.getBoundingClientRect();

    var scaleX =
      this.canvas.width / rect.width;

    var scaleY =
      this.canvas.height / rect.height;

    return {
      x:
        (event.clientX - rect.left) *
        scaleX,

      y:
        (event.clientY - rect.top) *
        scaleY,
    };
  },

  /* =========================================================
     Start drawing
     ========================================================= */

  startDrawing: function (event) {
    var position =
      this.getPosition(event);

    this.isDrawing = true;

    this.lastX = position.x;
    this.lastY = position.y;

    /*
      نرسم نقطة صغيرة حتى الضغط المفرد
      يظهر كلون ولا يحتاج حركة.
    */

    this.drawPoint(
      position.x,
      position.y,
    );

    this.enableResetButton();
  },

  /* =========================================================
     Draw point
     ========================================================= */

  drawPoint: function (x, y) {
    var ctx = this.context;

    ctx.save();

    if (this.isEraser) {
      ctx.globalCompositeOperation =
        "destination-out";

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        this.brushSize,
        0,
        Math.PI * 2,
      );

      ctx.fill();
    } else {
      ctx.globalCompositeOperation =
        "source-over";

      ctx.globalAlpha = 0.3;
      ctx.fillStyle =
        this.selectedColor;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        this.brushSize / 2,
        0,
        Math.PI * 2,
      );

      ctx.fill();
    }

    ctx.restore();
  },

  /* =========================================================
     Drawing
     ========================================================= */

  draw: function (event) {
    if (!this.isDrawing) {
      return;
    }

    var position =
      this.getPosition(event);

    var ctx = this.context;

    ctx.save();

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (this.isEraser) {
      /*
        destination-out يحذف فقط ما هو مرسوم
        داخل الـCanvas.

        الصورة الأصلية عنصر img مستقل،
        لذلك لن تُحذف.
      */

      ctx.globalCompositeOperation =
        "destination-out";

      ctx.lineWidth =
        this.brushSize * 2;
    } else {
      ctx.globalCompositeOperation =
        "source-over";

      ctx.strokeStyle =
        this.selectedColor;

      ctx.globalAlpha = 0.3;

      ctx.lineWidth =
        this.brushSize;
    }

    ctx.beginPath();

    ctx.moveTo(
      this.lastX,
      this.lastY,
    );

    ctx.lineTo(
      position.x,
      position.y,
    );

    ctx.stroke();
    ctx.restore();

    this.lastX = position.x;
    this.lastY = position.y;
  },

  /* =========================================================
     Stop drawing
     ========================================================= */

  stopDrawing: function () {
    this.isDrawing = false;
  },

  /* =========================================================
     No Check
     ========================================================= */

  validate: function () {
    /*
      النشاط لا يحتوي زر Check.
      الدالة موجودة فقط حتى لا يحدث خطأ
      إذا تم استدعاؤها من النظام العام.
    */
  },

  /* =========================================================
     Reset
     ========================================================= */

  reset: function () {
    this.isDrawing = false;
    this.isEraser = false;

    /*
      نمسح الـCanvas فقط.
      الصورة الأصلية تبقى لأنها img مستقلة.
    */

    this.context.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );

    var eraserButton =
      this.ob.activity_area.querySelector(
        ".read_colour_eraser",
      );

    if (eraserButton) {
      eraserButton.classList.remove(
        "active",
      );
    }

    var swatches =
      this.ob.activity_area.querySelectorAll(
        ".read_colour_swatch",
      );

    for (
      var i = 0;
      i < swatches.length;
      i++
    ) {
      swatches[i].classList.remove(
        "active",
      );
    }

    if (swatches.length > 0) {
      swatches[0].classList.add(
        "active",
      );

      this.selectedColor =
        swatches[0].dataset.color ||
        "#ed1c24";
    }

    this.disableResetButton();
  },

  /* =========================================================
     Footer reset button
     ========================================================= */

  enableResetButton: function () {
    var resetButton =
      document.getElementsByClassName(
        "resetBtn",
      )[0];

    if (resetButton) {
      resetButton.classList.remove(
        "disabled",
      );
    }
  },

  disableResetButton: function () {
    var resetButton =
      document.getElementsByClassName(
        "resetBtn",
      )[0];

    if (resetButton) {
      resetButton.classList.add(
        "disabled",
      );
    }
  },

  /* =========================================================
     Initial settings
     ========================================================= */

  initialSettings: function () {
    /*
      نخفي زر Check نهائيًا.
    */

    var checkButton =
      document.getElementsByClassName(
        "checkBtn",
      )[0];

    if (checkButton) {
      checkButton.style.display =
        "none";

      checkButton.classList.add(
        "disabled",
      );
    }

    /*
      نخفي الحاوية إذا كان لها wrapper مستقل.
    */

    var checkButtonHolder =
      document.querySelector(
        ".checkBtnHolder",
      );

    if (checkButtonHolder) {
      checkButtonHolder.style.display =
        "none";
    }

    this.disableResetButton();

    initialSettingsDone(1);
  },
};