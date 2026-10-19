//  ***************************************************************
//  Colour picture using canvas and write an open sentence
//  Reset only - no validation
//  ***************************************************************

window.ColourPictureWriteSentence = function (obj, dataObj) {
  this.settings = {
    activity_area: obj && obj[0] ? obj[0] : null,

    data_obj: dataObj,
  };

  this.isDrawing = false;

  this.currentTool = "brush";

  this.currentColour = dataObj.defaultColour || "#ef5350";

  this.brushSize = parseInt(dataObj.defaultBrushSize) || 8;

  this.lastX = 0;
  this.lastY = 0;

  this.init(this.settings);
};

ColourPictureWriteSentence.prototype = {
  /* =====================================================
     Initialize
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.orientationAdjust = "no";

    if (!ob.activity_area) {
      console.error("ColourPictureWriteSentence: activity area not found.");

      return;
    }

    this.cacheElements();
    this.prepareCanvas();
    this.listen();
  },

  /* =====================================================
     Cache elements
  ===================================================== */

  cacheElements: function () {
    var area = this.ob.activity_area;

    this.canvas = area.querySelector(".colour_drawing_canvas");

    this.canvasWrap = area.querySelector(".colour_canvas_wrap");

    this.backgroundImage = area.querySelector(".colour_background_image");

    this.colourButtons = area.querySelectorAll(".drawing_colour");

    this.toolButtons = area.querySelectorAll(".drawing_tool");

    this.brushSizeInput = area.querySelector(".brush_size_input");

    this.sentenceInput = area.querySelector(".sentence_input");
  },

  /* =====================================================
     Prepare canvas
  ===================================================== */

  prepareCanvas: function () {
    if (!this.canvas || !this.canvasWrap) {
      return;
    }

    this.context = this.canvas.getContext("2d");

    this.resizeCanvas();
  },

  /* =====================================================
     Resize canvas
  ===================================================== */

  resizeCanvas: function () {
    if (!this.canvas || !this.canvasWrap) {
      return;
    }

    var oldCanvas = document.createElement("canvas");

    oldCanvas.width = this.canvas.width;

    oldCanvas.height = this.canvas.height;

    if (this.canvas.width > 0 && this.canvas.height > 0) {
      oldCanvas.getContext("2d").drawImage(this.canvas, 0, 0);
    }

    var rect = this.canvasWrap.getBoundingClientRect();

    var ratio = window.devicePixelRatio || 1;

    this.canvas.width = Math.round(rect.width * ratio);

    this.canvas.height = Math.round(rect.height * ratio);

    this.canvas.style.width = rect.width + "px";

    this.canvas.style.height = rect.height + "px";

    this.context = this.canvas.getContext("2d");

    this.context.setTransform(ratio, 0, 0, ratio, 0, 0);

    this.context.lineCap = "round";

    this.context.lineJoin = "round";

    if (oldCanvas.width > 0 && oldCanvas.height > 0) {
      this.context.drawImage(
        oldCanvas,
        0,
        0,
        oldCanvas.width,
        oldCanvas.height,
        0,
        0,
        rect.width,
        rect.height,
      );
    }
  },

  /* =====================================================
     Events
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(this.colourButtons, function (button) {
      button.addEventListener("click", function () {
        self.selectColour(this);
      });
    });

    Array.prototype.forEach.call(this.toolButtons, function (button) {
      button.addEventListener("click", function () {
        self.selectTool(this);
      });
    });

    if (this.brushSizeInput) {
      this.brushSizeInput.addEventListener("input", function () {
        self.brushSize = parseInt(this.value) || 8;
      });
    }

    if (this.sentenceInput) {
      this.sentenceInput.addEventListener("input", function () {
        self.enableReset();
      });
    }

    this.canvas.addEventListener("pointerdown", function (event) {
      self.startDrawing(event);
    });

    this.canvas.addEventListener("pointermove", function (event) {
      self.draw(event);
    });

    this.canvas.addEventListener("pointerup", function () {
      self.stopDrawing();
    });

    this.canvas.addEventListener("pointercancel", function () {
      self.stopDrawing();
    });

    this.canvas.addEventListener("pointerleave", function () {
      self.stopDrawing();
    });

    window.addEventListener("resize", function () {
      self.resizeCanvas();
    });
  },

  /* =====================================================
     Select colour
  ===================================================== */

  selectColour: function (button) {
    this.currentColour = button.getAttribute("data-colour");

    this.currentTool = "brush";

    Array.prototype.forEach.call(this.colourButtons, function (colourButton) {
      colourButton.classList.remove("selected");
    });

    button.classList.add("selected");

    Array.prototype.forEach.call(this.toolButtons, function (toolButton) {
      toolButton.classList.remove("selected");

      if (toolButton.getAttribute("data-tool") === "brush") {
        toolButton.classList.add("selected");
      }
    });
  },

  /* =====================================================
     Select tool
  ===================================================== */

  selectTool: function (button) {
    this.currentTool = button.getAttribute("data-tool");

    Array.prototype.forEach.call(this.toolButtons, function (toolButton) {
      toolButton.classList.remove("selected");
    });

    button.classList.add("selected");
  },

  /* =====================================================
     Pointer position
  ===================================================== */

  getPointerPosition: function (event) {
    var rect = this.canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,

      y: event.clientY - rect.top,
    };
  },

  /* =====================================================
     Start drawing
  ===================================================== */

  startDrawing: function (event) {
    event.preventDefault();

    var point = this.getPointerPosition(event);

    this.isDrawing = true;

    this.lastX = point.x;
    this.lastY = point.y;

    this.canvas.setPointerCapture(event.pointerId);

    this.drawDot(point.x, point.y);

    this.enableReset();
  },

  /* =====================================================
     Draw
  ===================================================== */

  draw: function (event) {
    if (!this.isDrawing) {
      return;
    }

    event.preventDefault();

    var point = this.getPointerPosition(event);

    this.context.save();

    if (this.currentTool === "eraser") {
      /*
       * Removes only canvas paint.
       * The background image is a separate img,
       * so it remains visible.
       */
      this.context.globalCompositeOperation = "destination-out";

      this.context.strokeStyle = "rgba(0,0,0,1)";

      this.context.lineWidth = this.brushSize * 2.2;
    } else {
      this.context.globalCompositeOperation = "source-over";

      this.context.strokeStyle = this.currentColour;

      this.context.lineWidth = this.brushSize;
    }

    this.context.beginPath();

    this.context.moveTo(this.lastX, this.lastY);

    this.context.lineTo(point.x, point.y);

    this.context.stroke();

    this.context.restore();

    this.lastX = point.x;
    this.lastY = point.y;

    this.enableReset();
  },

  /* =====================================================
     Draw dot
  ===================================================== */

  drawDot: function (x, y) {
    this.context.save();

    if (this.currentTool === "eraser") {
      this.context.globalCompositeOperation = "destination-out";

      this.context.fillStyle = "rgba(0,0,0,1)";
    } else {
      this.context.globalCompositeOperation = "source-over";

      this.context.fillStyle = this.currentColour;
    }

    var radius =
      this.currentTool === "eraser" ? this.brushSize * 1.1 : this.brushSize / 2;

    this.context.beginPath();

    this.context.arc(x, y, radius, 0, Math.PI * 2);

    this.context.fill();

    this.context.restore();
  },

  /* =====================================================
     Stop drawing
  ===================================================== */

  stopDrawing: function () {
    this.isDrawing = false;
  },

  /* =====================================================
     Enable Reset only
  ===================================================== */

  enableReset: function () {
    $(".resetBtn").removeClass("disabled");
  },

  /* =====================================================
     No validation for this activity
  ===================================================== */

  validate: function () {
    return;
  },

  /* =====================================================
     Reset
  ===================================================== */

  reset: function () {
    if (this.canvas && this.context) {
      var rect = this.canvas.getBoundingClientRect();

      this.context.clearRect(0, 0, rect.width, rect.height);
    }

    if (this.sentenceInput) {
      this.sentenceInput.value = "";
    }

    this.currentTool = "brush";

    this.currentColour = this.ob.data_obj.defaultColour || "#ef5350";

    this.brushSize = parseInt(this.ob.data_obj.defaultBrushSize) || 8;

    if (this.brushSizeInput) {
      this.brushSizeInput.value = this.brushSize;
    }

    Array.prototype.forEach.call(
      this.colourButtons,
      function (button) {
        button.classList.remove("selected");

        if (button.getAttribute("data-colour") === this.currentColour) {
          button.classList.add("selected");
        }
      },
      this,
    );

    Array.prototype.forEach.call(this.toolButtons, function (button) {
      button.classList.remove("selected");

      if (button.getAttribute("data-tool") === "brush") {
        button.classList.add("selected");
      }
    });

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  /* =====================================================
     Initial settings
  ===================================================== */

  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
