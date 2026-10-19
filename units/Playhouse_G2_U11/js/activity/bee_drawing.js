// =========================================================
// Bee Drawing Activity
// ثابت بدون تحريك الصورة أو إعادة تحجيم أثناء الرسم
// =========================================================

function initBeeDrawing() {
  var activities = document.querySelectorAll(
    ".bee_drawing_activity"
  );

  for (var i = 0; i < activities.length; i++) {
    setupBeeDrawing(activities[i]);
  }
}

function setupBeeDrawing(activity) {
  if (!activity) {
    return;
  }

  // منع تهيئة النشاط أكثر من مرة
  if (activity.dataset.drawingInitialized === "true") {
    return;
  }

  activity.dataset.drawingInitialized = "true";

  var stage = activity.querySelector(
    ".bee_drawing_stage"
  );

  var image = activity.querySelector(
    ".bee_drawing_image"
  );

  var canvas = activity.querySelector(
    ".bee_drawing_canvas"
  );

  var pencilButton = activity.querySelector(
    '[data-tool="pencil"]'
  );

  var eraserButton = activity.querySelector(
    '[data-tool="eraser"]'
  );

  var clearButton = activity.querySelector(
    ".bee_clear_drawing"
  );

  if (!stage || !image || !canvas) {
    return;
  }

  var context = canvas.getContext("2d");

  var drawing = false;
  var currentTool = "pencil";

  var previousPoint = {
    x: 0,
    y: 0,
  };

  // =======================================================
  // تثبيت حجم الـ canvas مرة واحدة
  // =======================================================

  function setCanvasSize() {
    var rect = stage.getBoundingClientRect();

    if (rect.width <= 0 || rect.height <= 0) {
      return;
    }

    var ratio = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);

    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    context.lineCap = "round";
    context.lineJoin = "round";
  }

  // =======================================================
  // مكان المؤشر داخل الـ canvas
  // =======================================================

  function getPointerPosition(event) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // =======================================================
  // إعداد القلم أو الممحاة
  // =======================================================

  function applyTool() {
    context.lineCap = "round";
    context.lineJoin = "round";

    if (currentTool === "eraser") {
      context.globalCompositeOperation =
        "destination-out";

      context.lineWidth = 25;
    } else {
      context.globalCompositeOperation =
        "source-over";

      context.strokeStyle = "#222222";
      context.lineWidth = 4;
    }
  }

  // =======================================================
  // بدء الرسم
  // =======================================================

  function startDrawing(event) {
    event.preventDefault();
    event.stopPropagation();

    drawing = true;

    canvas.setPointerCapture(
      event.pointerId
    );

    previousPoint =
      getPointerPosition(event);

    applyTool();

    // نقطة عند الضغطة السريعة
    context.beginPath();

    context.arc(
      previousPoint.x,
      previousPoint.y,
      currentTool === "eraser" ? 12 : 2,
      0,
      Math.PI * 2
    );

    if (currentTool === "eraser") {
      context.fill();
    } else {
      context.fillStyle = "#222222";
      context.fill();
    }

    enableResetButton();
  }

  // =======================================================
  // الرسم
  // =======================================================

  function draw(event) {
    if (!drawing) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    var currentPoint =
      getPointerPosition(event);

    applyTool();

    context.beginPath();

    context.moveTo(
      previousPoint.x,
      previousPoint.y
    );

    context.lineTo(
      currentPoint.x,
      currentPoint.y
    );

    context.stroke();

    previousPoint = currentPoint;
  }

  // =======================================================
  // إيقاف الرسم
  // =======================================================

  function stopDrawing(event) {
    if (!drawing) {
      return;
    }

    drawing = false;

    if (
      event &&
      canvas.hasPointerCapture(event.pointerId)
    ) {
      canvas.releasePointerCapture(
        event.pointerId
      );
    }

    context.beginPath();
  }

  // =======================================================
  // اختيار الأداة
  // =======================================================

  function setTool(toolName) {
    currentTool = toolName;

    if (pencilButton) {
      pencilButton.classList.toggle(
        "active",
        toolName === "pencil"
      );
    }

    if (eraserButton) {
      eraserButton.classList.toggle(
        "active",
        toolName === "eraser"
      );
    }

    canvas.classList.toggle(
      "eraser_active",
      toolName === "eraser"
    );
  }

  // =======================================================
  // مسح الرسم
  // =======================================================

  function clearDrawing() {
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
      canvas.width,
      canvas.height
    );

    context.restore();

    setTool("pencil");
  }

  function enableResetButton() {
    var resetButton =
      document.querySelector(".resetBtn");

    if (resetButton) {
      resetButton.classList.remove(
        "disabled"
      );
    }
  }

  // =======================================================
  // Pointer Events
  // أفضل من فصل mouse وtouch
  // =======================================================

  canvas.addEventListener(
    "pointerdown",
    startDrawing
  );

  canvas.addEventListener(
    "pointermove",
    draw
  );

  canvas.addEventListener(
    "pointerup",
    stopDrawing
  );

  canvas.addEventListener(
    "pointercancel",
    stopDrawing
  );

  canvas.addEventListener(
    "lostpointercapture",
    stopDrawing
  );

  // =======================================================
  // الأزرار
  // =======================================================

  if (pencilButton) {
    pencilButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        setTool("pencil");
      }
    );
  }

  if (eraserButton) {
    eraserButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        setTool("eraser");
      }
    );
  }

  if (clearButton) {
    clearButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        clearDrawing();
      }
    );
  }

  // =======================================================
  // تهيئة الحجم بعد تحميل الصورة
  // لا يوجد resize مستمر
  // =======================================================

  if (image.complete) {
    requestAnimationFrame(function () {
      setCanvasSize();
    });
  } else {
    image.addEventListener(
      "load",
      function () {
        requestAnimationFrame(function () {
          setCanvasSize();
        });
      },
      {
        once: true,
      }
    );
  }

  activity.clearBeeDrawing =
    clearDrawing;

  setTool("pencil");
}

// =========================================================
// Reset all drawings
// =========================================================

function resetAllBeeDrawings() {
  var activities =
    document.querySelectorAll(
      ".bee_drawing_activity"
    );

  for (
    var i = 0;
    i < activities.length;
    i++
  ) {
    if (
      typeof activities[i].clearBeeDrawing ===
      "function"
    ) {
      activities[i].clearBeeDrawing();
    }
  }
}

// =========================================================
// Playhouse Reset
// =========================================================

$(document)
  .off(
    "click.beeDrawingReset",
    ".resetBtn"
  )
  .on(
    "click.beeDrawingReset",
    ".resetBtn",
    function () {
      resetAllBeeDrawings();
    }
  );