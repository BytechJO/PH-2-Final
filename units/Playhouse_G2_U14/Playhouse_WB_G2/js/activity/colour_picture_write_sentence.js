// ***************************************************************
// Two drawing canvases with open sentence inputs
// Tools:
// Brush, Eraser, Line, Rectangle, Square and Circle
// Reset only - no validation
// ***************************************************************

window.ColourPictureWriteSentence = function (
  obj,
  dataObj
) {
  this.settings = {
    activity_area:
      obj && obj[0]
        ? obj[0]
        : obj,

    data_obj: dataObj,
  };

  this.currentTool = "brush";

  this.currentColour =
    dataObj.defaultColour || "#000000";

  this.brushSize =
    parseInt(dataObj.defaultBrushSize) ||
    8;

  this.canvasItems = [];

  this.resizeTimer = null;

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
      console.error(
        "ColourPictureWriteSentence: activity area not found."
      );

      return;
    }

    this.cacheElements();
    this.prepareCanvases();
    this.listen();
  },

  /* =====================================================
     Cache elements
  ===================================================== */

  cacheElements: function () {
    var area =
      this.ob.activity_area;

    this.canvases =
      area.querySelectorAll(
        ".colour_drawing_canvas"
      );

    this.canvasWraps =
      area.querySelectorAll(
        ".colour_canvas_wrap"
      );

    this.colourButtons =
      area.querySelectorAll(
        ".drawing_colour"
      );

    this.toolButtons =
      area.querySelectorAll(
        ".drawing_tool"
      );

    this.brushSizeInput =
      area.querySelector(
        ".brush_size_input"
      );

    this.sentenceInputs =
      area.querySelectorAll(
        ".sentence_input"
      );
  },

  /* =====================================================
     Prepare canvases
  ===================================================== */

  prepareCanvases: function () {
    this.canvasItems = [];

    for (
      var i = 0;
      i < this.canvases.length;
      i++
    ) {
      var canvas =
        this.canvases[i];

      var canvasWrap =
        this.canvasWraps[i];

      var context =
        canvas.getContext("2d");

      var canvasItem = {
        canvas: canvas,

        wrap: canvasWrap,

        context: context,

        ratio:
          window.devicePixelRatio || 1,

        isDrawing: false,

        lastX: 0,

        lastY: 0,

        startX: 0,

        startY: 0,

        snapshotCanvas: null,
      };

      this.canvasItems.push(
        canvasItem
      );

      this.resizeCanvasItem(
        canvasItem
      );
    }
  },

  /* =====================================================
     Resize one canvas
  ===================================================== */

  resizeCanvasItem: function (
    canvasItem
  ) {
    if (
      !canvasItem ||
      !canvasItem.canvas ||
      !canvasItem.wrap
    ) {
      return;
    }

    var canvas =
      canvasItem.canvas;

    var oldCanvas =
      document.createElement("canvas");

    oldCanvas.width =
      canvas.width;

    oldCanvas.height =
      canvas.height;

    if (
      canvas.width > 0 &&
      canvas.height > 0
    ) {
      var oldContext =
        oldCanvas.getContext("2d");

      oldContext.drawImage(
        canvas,
        0,
        0
      );
    }

    var rect =
      canvasItem.wrap.getBoundingClientRect();

    var ratio =
      window.devicePixelRatio || 1;

    canvasItem.ratio =
      ratio;

    canvas.width =
      Math.max(
        1,
        Math.round(rect.width * ratio)
      );

    canvas.height =
      Math.max(
        1,
        Math.round(rect.height * ratio)
      );

    canvas.style.width =
      rect.width + "px";

    canvas.style.height =
      rect.height + "px";

    canvasItem.context =
      canvas.getContext("2d");

    canvasItem.context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    canvasItem.context.lineCap =
      "round";

    canvasItem.context.lineJoin =
      "round";

    if (
      oldCanvas.width > 0 &&
      oldCanvas.height > 0
    ) {
      canvasItem.context.drawImage(
        oldCanvas,
        0,
        0,
        oldCanvas.width,
        oldCanvas.height,
        0,
        0,
        rect.width,
        rect.height
      );
    }
  },

  /* =====================================================
     Resize all canvases
  ===================================================== */

  resizeCanvases: function () {
    for (
      var i = 0;
      i < this.canvasItems.length;
      i++
    ) {
      this.resizeCanvasItem(
        this.canvasItems[i]
      );
    }
  },

  /* =====================================================
     Listen
  ===================================================== */

  listen: function () {
    var self = this;

    Array.prototype.forEach.call(
      this.colourButtons,
      function (button) {
        button.addEventListener(
          "click",
          function () {
            self.selectColour(this);
          }
        );
      }
    );

    Array.prototype.forEach.call(
      this.toolButtons,
      function (button) {
        button.addEventListener(
          "click",
          function () {
            self.selectTool(this);
          }
        );
      }
    );

    if (this.brushSizeInput) {
      this.brushSizeInput.addEventListener(
        "input",
        function () {
          self.brushSize =
            parseInt(this.value) || 8;
        }
      );
    }

    Array.prototype.forEach.call(
      this.sentenceInputs,
      function (input) {
        input.addEventListener(
          "input",
          function () {
            self.enableReset();
          }
        );
      }
    );

    for (
      var i = 0;
      i < this.canvasItems.length;
      i++
    ) {
      this.bindCanvasEvents(
        this.canvasItems[i]
      );
    }

    window.addEventListener(
      "resize",
      function () {
        clearTimeout(
          self.resizeTimer
        );

        self.resizeTimer =
          setTimeout(function () {
            self.resizeCanvases();
          }, 150);
      }
    );
  },

  /* =====================================================
     Canvas events
  ===================================================== */

  bindCanvasEvents: function (
    canvasItem
  ) {
    var self = this;

    canvasItem.canvas.addEventListener(
      "pointerdown",
      function (event) {
        self.startDrawing(
          event,
          canvasItem
        );
      }
    );

    canvasItem.canvas.addEventListener(
      "pointermove",
      function (event) {
        self.draw(
          event,
          canvasItem
        );
      }
    );

    canvasItem.canvas.addEventListener(
      "pointerup",
      function (event) {
        self.stopDrawing(
          event,
          canvasItem
        );
      }
    );

    canvasItem.canvas.addEventListener(
      "pointercancel",
      function (event) {
        self.stopDrawing(
          event,
          canvasItem
        );
      }
    );

    canvasItem.canvas.addEventListener(
      "pointerleave",
      function (event) {
        if (
          canvasItem.isDrawing &&
          !canvasItem.canvas.hasPointerCapture(
            event.pointerId
          )
        ) {
          self.stopDrawing(
            event,
            canvasItem
          );
        }
      }
    );
  },

  /* =====================================================
     Select colour
  ===================================================== */

  selectColour: function (button) {
    this.currentColour =
      button.getAttribute(
        "data-colour"
      );

    this.currentTool =
      "brush";

    Array.prototype.forEach.call(
      this.colourButtons,
      function (colourButton) {
        colourButton.classList.remove(
          "selected"
        );
      }
    );

    button.classList.add(
      "selected"
    );

    Array.prototype.forEach.call(
      this.toolButtons,
      function (toolButton) {
        toolButton.classList.remove(
          "selected"
        );

        if (
          toolButton.getAttribute(
            "data-tool"
          ) === "brush"
        ) {
          toolButton.classList.add(
            "selected"
          );
        }
      }
    );
  },

  /* =====================================================
     Select tool
  ===================================================== */

  selectTool: function (button) {
    this.currentTool =
      button.getAttribute(
        "data-tool"
      );

    Array.prototype.forEach.call(
      this.toolButtons,
      function (toolButton) {
        toolButton.classList.remove(
          "selected"
        );
      }
    );

    button.classList.add(
      "selected"
    );
  },

  /* =====================================================
     Pointer position
  ===================================================== */

  getPointerPosition: function (
    event,
    canvas
  ) {
    var rect =
      canvas.getBoundingClientRect();

    return {
      x:
        event.clientX -
        rect.left,

      y:
        event.clientY -
        rect.top,
    };
  },

  /* =====================================================
     Start drawing
  ===================================================== */

  startDrawing: function (
    event,
    canvasItem
  ) {
    event.preventDefault();

    var point =
      this.getPointerPosition(
        event,
        canvasItem.canvas
      );

    canvasItem.isDrawing =
      true;

    canvasItem.lastX =
      point.x;

    canvasItem.lastY =
      point.y;

    canvasItem.startX =
      point.x;

    canvasItem.startY =
      point.y;

    this.saveCanvasSnapshot(
      canvasItem
    );

    try {
      canvasItem.canvas.setPointerCapture(
        event.pointerId
      );
    } catch (error) {
      console.warn(
        "Pointer capture unavailable.",
        error
      );
    }

    if (
      this.currentTool === "brush" ||
      this.currentTool === "eraser"
    ) {
      this.drawDot(
        point.x,
        point.y,
        canvasItem
      );
    }

    this.enableReset();
  },

  /* =====================================================
     Save canvas before shape preview
  ===================================================== */

  saveCanvasSnapshot: function (
    canvasItem
  ) {
    var snapshotCanvas =
      document.createElement(
        "canvas"
      );

    snapshotCanvas.width =
      canvasItem.canvas.width;

    snapshotCanvas.height =
      canvasItem.canvas.height;

    var snapshotContext =
      snapshotCanvas.getContext("2d");

    snapshotContext.drawImage(
      canvasItem.canvas,
      0,
      0
    );

    canvasItem.snapshotCanvas =
      snapshotCanvas;
  },

  /* =====================================================
     Restore canvas snapshot
  ===================================================== */

  restoreCanvasSnapshot: function (
    canvasItem
  ) {
    if (
      !canvasItem.snapshotCanvas
    ) {
      return;
    }

    var context =
      canvasItem.context;

    var rect =
      canvasItem.canvas.getBoundingClientRect();

    context.save();

    context.setTransform(
      1,
      0,
      0,
      1,
      0,
      0
    );

    context.clearRect(
      0,
      0,
      canvasItem.canvas.width,
      canvasItem.canvas.height
    );

    context.drawImage(
      canvasItem.snapshotCanvas,
      0,
      0
    );

    context.restore();

    context.setTransform(
      canvasItem.ratio,
      0,
      0,
      canvasItem.ratio,
      0,
      0
    );

    context.lineCap =
      "round";

    context.lineJoin =
      "round";
  },

  /* =====================================================
     Draw
  ===================================================== */

  draw: function (
    event,
    canvasItem
  ) {
    if (
      !canvasItem.isDrawing
    ) {
      return;
    }

    event.preventDefault();

    var point =
      this.getPointerPosition(
        event,
        canvasItem.canvas
      );

    if (
      this.currentTool === "brush" ||
      this.currentTool === "eraser"
    ) {
      this.drawFreehand(
        point,
        canvasItem
      );
    } else {
      this.previewShape(
        point,
        canvasItem
      );
    }

    this.enableReset();
  },

  /* =====================================================
     Freehand drawing
  ===================================================== */

  drawFreehand: function (
    point,
    canvasItem
  ) {
    var context =
      canvasItem.context;

    context.save();

    if (
      this.currentTool ===
      "eraser"
    ) {
      context.globalCompositeOperation =
        "destination-out";

      context.strokeStyle =
        "rgba(0,0,0,1)";

      context.lineWidth =
        this.brushSize * 2.2;
    } else {
      context.globalCompositeOperation =
        "source-over";

      context.strokeStyle =
        this.currentColour;

      context.lineWidth =
        this.brushSize;
    }

    context.beginPath();

    context.moveTo(
      canvasItem.lastX,
      canvasItem.lastY
    );

    context.lineTo(
      point.x,
      point.y
    );

    context.stroke();
    context.restore();

    canvasItem.lastX =
      point.x;

    canvasItem.lastY =
      point.y;
  },

  /* =====================================================
     Shape preview
  ===================================================== */

  previewShape: function (
    point,
    canvasItem
  ) {
    this.restoreCanvasSnapshot(
      canvasItem
    );

    var context =
      canvasItem.context;

    var startX =
      canvasItem.startX;

    var startY =
      canvasItem.startY;

    var width =
      point.x - startX;

    var height =
      point.y - startY;

    context.save();

    context.globalCompositeOperation =
      "source-over";

    context.strokeStyle =
      this.currentColour;

    context.lineWidth =
      this.brushSize;

    context.lineCap =
      "round";

    context.lineJoin =
      "round";

    context.beginPath();

    if (
      this.currentTool ===
      "line"
    ) {
      context.moveTo(
        startX,
        startY
      );

      context.lineTo(
        point.x,
        point.y
      );
    } else if (
      this.currentTool ===
      "rectangle"
    ) {
      context.rect(
        startX,
        startY,
        width,
        height
      );
    } else if (
      this.currentTool ===
      "square"
    ) {
      var squareSize =
        Math.max(
          Math.abs(width),
          Math.abs(height)
        );

      var squareWidth =
        width < 0
          ? -squareSize
          : squareSize;

      var squareHeight =
        height < 0
          ? -squareSize
          : squareSize;

      context.rect(
        startX,
        startY,
        squareWidth,
        squareHeight
      );
    } else if (
      this.currentTool ===
      "circle"
    ) {
      var centerX =
        startX + width / 2;

      var centerY =
        startY + height / 2;

      var radiusX =
        Math.abs(width / 2);

      var radiusY =
        Math.abs(height / 2);

      if (
        radiusX > 0 &&
        radiusY > 0
      ) {
        context.ellipse(
          centerX,
          centerY,
          radiusX,
          radiusY,
          0,
          0,
          Math.PI * 2
        );
      }
    }

    context.stroke();
    context.restore();
  },

  /* =====================================================
     Draw dot
  ===================================================== */

  drawDot: function (
    x,
    y,
    canvasItem
  ) {
    var context =
      canvasItem.context;

    context.save();

    if (
      this.currentTool ===
      "eraser"
    ) {
      context.globalCompositeOperation =
        "destination-out";

      context.fillStyle =
        "rgba(0,0,0,1)";
    } else {
      context.globalCompositeOperation =
        "source-over";

      context.fillStyle =
        this.currentColour;
    }

    var radius =
      this.currentTool === "eraser"
        ? this.brushSize * 1.1
        : this.brushSize / 2;

    context.beginPath();

    context.arc(
      x,
      y,
      radius,
      0,
      Math.PI * 2
    );

    context.fill();
    context.restore();
  },

  /* =====================================================
     Stop drawing
  ===================================================== */

  stopDrawing: function (
    event,
    canvasItem
  ) {
    if (
      !canvasItem.isDrawing
    ) {
      return;
    }

    canvasItem.isDrawing =
      false;

    canvasItem.snapshotCanvas =
      null;

    try {
      if (
        event &&
        canvasItem.canvas.hasPointerCapture(
          event.pointerId
        )
      ) {
        canvasItem.canvas.releasePointerCapture(
          event.pointerId
        );
      }
    } catch (error) {
      console.warn(
        "Pointer release unavailable.",
        error
      );
    }
  },

  /* =====================================================
     Enable reset
  ===================================================== */

  enableReset: function () {
    $(".resetBtn").removeClass(
      "disabled"
    );
  },

  /* =====================================================
     No validation
  ===================================================== */

  validate: function () {
    return;
  },

  /* =====================================================
     Clear one canvas
  ===================================================== */

  clearCanvasItem: function (
    canvasItem
  ) {
    if (
      !canvasItem ||
      !canvasItem.canvas ||
      !canvasItem.context
    ) {
      return;
    }

    var context =
      canvasItem.context;

    context.save();

    context.setTransform(
      1,
      0,
      0,
      1,
      0,
      0
    );

    context.clearRect(
      0,
      0,
      canvasItem.canvas.width,
      canvasItem.canvas.height
    );

    context.restore();

    context.setTransform(
      canvasItem.ratio,
      0,
      0,
      canvasItem.ratio,
      0,
      0
    );

    context.lineCap =
      "round";

    context.lineJoin =
      "round";

    canvasItem.isDrawing =
      false;

    canvasItem.snapshotCanvas =
      null;
  },

  /* =====================================================
     Reset
  ===================================================== */

  reset: function () {
    for (
      var i = 0;
      i < this.canvasItems.length;
      i++
    ) {
      this.clearCanvasItem(
        this.canvasItems[i]
      );
    }

    Array.prototype.forEach.call(
      this.sentenceInputs,
      function (input) {
        input.value = "";
      }
    );

    this.currentTool =
      "brush";

    this.currentColour =
      this.ob.data_obj.defaultColour ||
      "#000000";

    this.brushSize =
      parseInt(
        this.ob.data_obj.defaultBrushSize
      ) || 8;

    if (this.brushSizeInput) {
      this.brushSizeInput.value =
        this.brushSize;
    }

    Array.prototype.forEach.call(
      this.colourButtons,
      function (button) {
        button.classList.remove(
          "selected"
        );

        if (
          button.getAttribute(
            "data-colour"
          ) === this.currentColour
        ) {
          button.classList.add(
            "selected"
          );
        }
      },
      this
    );

    Array.prototype.forEach.call(
      this.toolButtons,
      function (button) {
        button.classList.remove(
          "selected"
        );

        if (
          button.getAttribute(
            "data-tool"
          ) === "brush"
        ) {
          button.classList.add(
            "selected"
          );
        }
      }
    );

    $(".checkBtn").addClass(
      "disabled"
    );

    $(".resetBtn").addClass(
      "disabled"
    );
  },

  /* =====================================================
     Initial settings
  ===================================================== */

  initialSettings: function () {
    this.reset();

    if (
      typeof initialSettingsDone ===
      "function"
    ) {
      initialSettingsDone(1);
    }
  },
};