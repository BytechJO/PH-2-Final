function buildFillInBody(aObj) {
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
    htmlStmt += '<div class="draw_write_all_cont">';

    htmlStmt += '<div class="draw_area">';

    htmlStmt += '<div class="draw_tools">';
    htmlStmt +=
      '<input type="color" id="drawColor" value="#111111" class="draw_color">';
    htmlStmt +=
      '<input type="range" id="drawSize" min="2" max="18" value="4" class="draw_size">';
    htmlStmt +=
      '<button type="button" id="penTool" class="draw_tool_btn active">Pen</button>';
    htmlStmt +=
      '<button type="button" id="eraserTool" class="draw_tool_btn">Eraser</button>';
    htmlStmt +=
      '<button type="button" id="clearCanvas" class="draw_tool_btn">Clear</button>';
    htmlStmt += "</div>";

    htmlStmt += '<div class="draw_box_wrap">';
    htmlStmt += '<canvas id="backpackCanvas" class="backpack_canvas"></canvas>';
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += '<div class="writing_box_wrap">';

    htmlStmt += '<div class="writing_first_line">';
    htmlStmt += "<span>" + (aObj.writingStartText || "My name is") + "</span>";
    htmlStmt +=
      '<input class="name_input writing_auto_next" type="text" maxlength="20">';
    htmlStmt += "</div>";

    htmlStmt += '<div class="writing_lines">';

    var linesCount = aObj.linesCount || 10;

    for (var i = 0; i < linesCount; i++) {
      htmlStmt +=
        '<input class="writing_line_input writing_auto_next" type="text" maxlength="34">';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> WB_G2_U1_P8_2 Built");
  $(".activity_area").append(htmlStmt);

  initBackpackCanvas();

  setLoadedStatus(getCurrFileOrDirectory("file"));

  hideCheckKeepOnlyReset();
}

function loadThisObject() {
  buildFillInBody(fillin_data);
}

function initBackpackCanvas() {
  var canvas = document.getElementById("backpackCanvas");
  if (!canvas) return;

  var wrap = canvas.parentElement;
  var ctx = canvas.getContext("2d");

  var currentColor = "#111111";
  var currentSize = 4;
  var isEraser = false;

  function resizeCanvas() {
    var rect = wrap.getBoundingClientRect();

    var tempCanvas = document.createElement("canvas");
    var tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    if (canvas.width && canvas.height) {
      tempCtx.drawImage(canvas, 0, 0);
    }

    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tempCanvas.width && tempCanvas.height) {
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
  }

  resizeCanvas();

  var drawing = false;
  var lastX = 0;
  var lastY = 0;

  function applyTool() {
    ctx.lineWidth = currentSize;

    if (isEraser) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = currentSize * 2.2;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = currentColor;
    }
  }

  function getPos(e) {
    var rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function enableReset() {
    if (document.getElementsByClassName("resetBtn")[0]) {
      document
        .getElementsByClassName("resetBtn")[0]
        .classList.remove("disabled");
    }
  }

  function startDraw(e) {
    e.preventDefault();

    var pos = getPos(e);
    drawing = true;
    lastX = pos.x;
    lastY = pos.y;

    applyTool();

    ctx.beginPath();
    ctx.arc(lastX, lastY, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = isEraser ? "rgba(0,0,0,1)" : currentColor;

    if (isEraser) {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }

    ctx.fill();

    enableReset();
  }

  function draw(e) {
    if (!drawing) return;

    e.preventDefault();

    var pos = getPos(e);

    applyTool();

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    lastX = pos.x;
    lastY = pos.y;

    enableReset();
  }

  function stopDraw(e) {
    if (e) e.preventDefault();

    drawing = false;
    ctx.globalCompositeOperation = "source-over";
  }

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);

  canvas.addEventListener("touchstart", startDraw, { passive: false });
  canvas.addEventListener("touchmove", draw, { passive: false });
  canvas.addEventListener("touchend", stopDraw, { passive: false });
  canvas.addEventListener("touchcancel", stopDraw, { passive: false });

  // ================= Drawing tools =================

  $(document).off("input.p8Color");
  $(document).on("input.p8Color", "#drawColor", function () {
    currentColor = $(this).val();
    isEraser = false;

    $("#penTool").addClass("active");
    $("#eraserTool").removeClass("active");
  });

  $(document).off("input.p8Size");
  $(document).on("input.p8Size", "#drawSize", function () {
    currentSize = parseInt($(this).val(), 10) || 4;
  });

  $(document).off("click.p8Pen");
  $(document).on("click.p8Pen", "#penTool", function () {
    isEraser = false;

    $("#penTool").addClass("active");
    $("#eraserTool").removeClass("active");
  });

  $(document).off("click.p8Eraser");
  $(document).on("click.p8Eraser", "#eraserTool", function () {
    isEraser = true;

    $("#eraserTool").addClass("active");
    $("#penTool").removeClass("active");
  });

  $(document).off("click.p8Clear");
  $(document).on("click.p8Clear", "#clearCanvas", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enableReset();
  });

  // ================= Reset =================

  $(document).off("click.p8CanvasReset");
  $(document).on("click.p8CanvasReset", ".resetBtn", function (e) {
    e.preventDefault();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    $(".name_input").val("");
    $(".writing_line_input").val("");

    $(".resetBtn").removeClass("disabled");
  });
  // ================= Writing auto next line =================

  $(document).off("input.p8Writing");
  $(document).on(
    "input.p8Writing",
    ".name_input, .writing_line_input",
    function () {
      enableReset();

      var max = parseInt($(this).attr("maxlength"), 10);
      var val = $(this).val();

      if (max && val.length >= max) {
        var inputs = $(".writing_auto_next");
        var currentIndex = inputs.index(this);
        var nextInput = inputs.eq(currentIndex + 1);

        if (nextInput.length) {
          nextInput.focus();
        }
      }
    },
  );

  $(document).off("keydown.p8WritingNext");
  $(document).on("keydown.p8WritingNext", ".writing_auto_next", function (e) {
    var inputs = $(".writing_auto_next");
    var currentIndex = inputs.index(this);

    if (e.key === "Enter") {
      e.preventDefault();

      var nextInput = inputs.eq(currentIndex + 1);

      if (nextInput.length) {
        nextInput.focus();
      }
    }

    if (e.key === "Backspace" && $(this).val() === "") {
      var prevInput = inputs.eq(currentIndex - 1);

      if (prevInput.length) {
        e.preventDefault();

        prevInput.focus();

        var oldVal = prevInput.val();
        prevInput.val(oldVal);

        prevInput[0].setSelectionRange(oldVal.length, oldVal.length);
      }
    }
  });
}
function hideCheckKeepOnlyReset() {
  setTimeout(function () {
    $(".checkBtn").hide();
    $(".checkBtn").addClass("disabled");

    $(".resetBtn").show();
    $(".resetBtn").removeClass("d-none");
    $(".resetBtn").removeClass("disabled");
  }, 400);
}
