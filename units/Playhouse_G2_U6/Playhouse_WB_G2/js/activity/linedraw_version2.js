//  ****************************************** //
//  LINE DRAW (revamped) - Version no: 1.2
//  Date created - July 25, 2020
//  Date updated - August 06, 2020
//  Date updated - August 20, 2020
//  ****************************************** //

window.LineDraw = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";

  this.init(this.settings);
};

LineDraw.prototype = {
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    ob.startDraw = false;

    ob.dropConnections = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
    ob.resultArr = [];

    ob.lineObjects = [];
    ob.lineOb = {};

    ob.lineOb.startNode;
    ob.lineOb.endNode;

    ob.lineOb.startX = 0;
    ob.lineOb.startY = 0;

    ob.lineOb.endX = 0;
    ob.lineOb.endY = 0;

    ob.lineOb.distance = 0;
    ob.lineOb.angle = 0;

    ob.lineOb.startElement = "";
    ob.lineOb.color = "";

    ob.lineColor = "";
    ob.lineThickness = 0;
    ob.connectType = "";
    ob.selectionColor = "";
    ob.transformPerc = "";

    ob.rightOffset;
    ob.containerRight = 0;
    ob.topOffset = 0;
    ob.setI;

    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // SCREEN RESIZE
  // =========================================================

  screenPoseAdjustments: function () {
    var self = this;
    var ob = this.ob;

    if (ob.lineObjects.length > 0) {
      // امسح الخطوط من الشاشة
      // وبعدين ارسمهم من جديد حسب المواقع الجديدة
      $(ob.activity_area).find(".lines").empty();

      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);

        self.drawRect(ob.lineObjects[ln], "draw", "");
      }
    }
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    // =====================================================
    // SETTINGS
    // =====================================================

    ob.lineColor =
      typeof ob.data_obj.linecolor != undefined && ob.data_obj.linecolor != null
        ? ob.data_obj.linecolor
        : "blue";

    ob.nodeColor =
      typeof ob.data_obj.nodecolor != undefined && ob.data_obj.nodecolor != null
        ? ob.data_obj.nodecolor
        : "#5d5d5d";

    ob.lineThickness =
      typeof ob.data_obj.strokewidth != undefined &&
      ob.data_obj.strokewidth != null
        ? parseInt(ob.data_obj.strokewidth)
        : 4;

    // كل نقطة خط واحد فقط
    ob.connectType = "single";

    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";

    ob.transformPerc = parseInt(ob.lineThickness) / 2;

    // =====================================================
    // REMOVE CONNECTION
    // =====================================================

    function removeConnection(nodeID) {
      for (var i = ob.lineObjects.length - 1; i >= 0; i--) {
        var lineObj = ob.lineObjects[i];

        if (lineObj.startID === nodeID || lineObj.endID === nodeID) {
          var otherID =
            lineObj.startID === nodeID ? lineObj.endID : lineObj.startID;

          // =============================================
          // REMOVE LINE FROM HTML
          // =============================================

          $area.find("#" + lineObj.name).remove();

          // =============================================
          // CLEAR OTHER NODE
          // =============================================

          var $otherNode = $area.find("#" + otherID).find(".node");

          if ($otherNode.length) {
            $otherNode.data("connected", "");

            $otherNode.css("border-color", "transparent");

            $otherNode.removeClass("selected-node");
          }

          // =============================================
          // REMOVE FROM ARRAY
          // =============================================

          ob.lineObjects.splice(i, 1);
        }
      }

      // =================================================
      // CLEAR CURRENT NODE
      // =================================================

      var $currentNode = $area.find("#" + nodeID).find(".node");

      if ($currentNode.length) {
        $currentNode.data("connected", "");

        $currentNode.css("border-color", "transparent");

        $currentNode.removeClass("selected-node");
      }
    }

    // =====================================================
    // REMOVE OLD EVENTS
    // =====================================================

    $area.find(".node").off("click.lineDraw");

    // =====================================================
    // CLICK
    // =====================================================

    $area.find(".node").on("click.lineDraw", function () {
      var $thisNode = $(this);

      var classes = $thisNode.attr("class").split(" ");

      var thisNode =
        classes.indexOf("dragPoint") !== -1 ? "dragPoint" : "dropPoint";

      var thisID = $thisNode.parent().attr("id");

      // =================================================
      // FIRST CLICK
      // =================================================

      if (!ob.startDraw) {
        var existingConnection = $thisNode.data("connected");

        // إذا عليها خط قديم
        // احذفه حتى نقدر نعدل
        if (
          existingConnection != undefined &&
          existingConnection != null &&
          existingConnection.toString() !== ""
        ) {
          removeConnection(thisID);
        }

        ob.lineOb = {};

        ob.lineOb.startNode = $thisNode;

        ob.lineOb.startID = thisID;

        ob.lineOb.startElement = thisNode;

        $area.find(".node").removeClass("selected-node");

        $thisNode.addClass("selected-node");

        $thisNode.css("border-color", ob.selectionColor);

        ob.startDraw = true;

        return;
      }

      // =================================================
      // SECOND CLICK
      // =================================================

      var connectCondition =
        ob.lineOb.startElement === "dragPoint"
          ? thisNode === "dropPoint"
          : thisNode === "dragPoint";

      // =================================================
      // SAME SIDE
      // =================================================

      if (!connectCondition) {
        $area.find(".node").removeClass("selected-node");

        self.resetNodes("draw", true);

        ob.startDraw = false;

        ob.lineOb = {};

        return;
      }

      // =================================================
      // END NODE ALREADY CONNECTED
      // =================================================

      var existingEndConnection = $thisNode.data("connected");

      if (
        existingEndConnection != undefined &&
        existingEndConnection != null &&
        existingEndConnection.toString() !== ""
      ) {
        removeConnection(thisID);
      }

      // =================================================
      // START NODE SAFETY
      // =================================================

      var startID = ob.lineOb.startID;

      for (var s = ob.lineObjects.length - 1; s >= 0; s--) {
        if (
          ob.lineObjects[s].startID === startID ||
          ob.lineObjects[s].endID === startID
        ) {
          removeConnection(startID);

          break;
        }
      }

      // =================================================
      // CREATE END
      // =================================================

      ob.lineOb.endNode = $thisNode;

      ob.lineOb.endID = thisID;

      // =================================================
      // GET START NODE
      // =================================================

      var $startNode = $area.find("#" + startID).find(".node");

      // =================================================
      // SAVE CONNECTION
      // =================================================

      $startNode.data("connected", thisID);

      $thisNode.data("connected", startID);

      // =================================================
      // LINE COLOR
      // =================================================

      ob.lineOb.color = ob.lineColor;

      // =================================================
      // CALCULATE
      // =================================================

      self.setValuesForLine(ob.lineOb);

      // =================================================
      // DRAW
      // =================================================

      self.drawRect(ob.lineOb, "draw", "");

      // =================================================
      // BORDER
      // =================================================

      $startNode.css("border-color", ob.selectionColor);

      $thisNode.css("border-color", ob.selectionColor);

      // =================================================
      // SAVE LINE
      // =================================================

      ob.lineObjects.push(ob.lineOb);

      // =================================================
      // RESET CURRENT
      // =================================================

      $area.find(".node").removeClass("selected-node");

      ob.lineOb = {};

      ob.startDraw = false;

      // =================================================
      // RESET BORDER
      // =================================================

      setTimeout(function () {
        self.resetNodes("draw", true);
      }, 300);

      // =================================================
      // ENABLE BUTTONS
      // =================================================

      if (ob.lineObjects.length > 0) {
        var checkBtn = document.getElementsByClassName("checkBtn")[0];

        var resetBtn = document.getElementsByClassName("resetBtn")[0];

        if (checkBtn) {
          checkBtn.classList.remove("disabled");
        }

        if (resetBtn) {
          resetBtn.classList.remove("disabled");
        }
      }
    });
  },

  // =========================================================
  // SET VALUES
  // الخط من CENTER إلى CENTER
  // =========================================================

  setValuesForLine: function (lineOb) {
    var ob = this.ob;

    var $area = $(ob.activity_area);
    var $lines = $area.find(".lines");

    // مكان container تبع الخطوط بالنسبة للصفحة
    var linesOffset = $lines.offset();

    // مكان النقطتين بالنسبة للصفحة
    var startOffset = lineOb.startNode.offset();
    var endOffset = lineOb.endNode.offset();

    var startWidth = lineOb.startNode.outerWidth();
    var startHeight = lineOb.startNode.outerHeight();

    var endWidth = lineOb.endNode.outerWidth();
    var endHeight = lineOb.endNode.outerHeight();

    lineOb.height = ob.lineThickness;

    // =====================================================
    // START CENTER relative to .lines
    // =====================================================

    lineOb.startX = startOffset.left - linesOffset.left + startWidth / 2;

    lineOb.startY = startOffset.top - linesOffset.top + startHeight / 2;

    // =====================================================
    // END CENTER relative to .lines
    // =====================================================

    lineOb.endX = endOffset.left - linesOffset.left + endWidth / 2;

    lineOb.endY = endOffset.top - linesOffset.top + endHeight / 2;

    // =====================================================
    // DISTANCE
    // =====================================================

    var deltaX = lineOb.endX - lineOb.startX;

    var deltaY = lineOb.endY - lineOb.startY;

    lineOb.distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // =====================================================
    // ANGLE
    // =====================================================

    lineOb.angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

    // =====================================================
    // NAME
    // =====================================================

    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },

  // =========================================================
  // DRAW RECT
  // =========================================================

  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    var $lines = $area.find(".lines");

    var obj = lineOb;

    // إذا نفس الخط موجود
    // احذفه قبل إعادة الرسم
    $lines.find("#" + obj.name).remove();

    // =====================================================
    // CREATE LINE
    // =====================================================

    $lines.append('<div class="line" id="' + obj.name + '"></div>');

    var rect = $lines.find("#" + obj.name);

    // =====================================================
    // POSITION
    // =====================================================

    if (axn == "draw") {
      rect.css({
        position: "absolute",

        top: obj.startY - obj.height / 2 + "px",

        left: obj.startX + "px",

        width: obj.distance + "px",

        height: obj.height + "px",

        transform: "rotate(" + obj.angle + "deg)",

        // مهم:
        // بداية الدوران من أول الخط
        "transform-origin": "0 50%",
      });
    }

    // =====================================================
    // STYLE
    // =====================================================

    rect.css({
      "border-color": obj.color || ob.lineColor,

      "background-color": obj.color || ob.lineColor,

      display: "block",
    });
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    var self = this;

    var dataQuestion = ob.data_obj.questions;

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    var numOfDrops = dataQuestion.drops.length;

    // =====================================================
    // EMPTY ARRAYS
    // =====================================================

    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }

    // =====================================================
    // CHECK LINES
    // =====================================================

    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var tOb = ob.lineObjects[ll];

      var dropElement =
        tOb.startElement == "dropPoint" ? tOb.startID : tOb.endID;

      var dragElement = dropElement == tOb.startID ? tOb.endID : tOb.startID;

      var dropArr = dropElement.split("_");

      var dragArr = dragElement.split("_");

      var correctAns = dataQuestion.drops[parseInt(dropArr[2]) - 1].answer;

      ob.dropConnections[parseInt(dropArr[2]) - 1].push(parseInt(dragArr[2]));

      // =================================================
      // LINE RESULT COLOR
      // =================================================

      if (correctAns.length > 0) {
        var isAns =
          $.inArray(parseInt(dragArr[2]), getIntArray(correctAns)) >= 0;

        tOb.color = isAns ? "green" : "red";

        ob.lineObjects[ll].color = tOb.color;

        $area.find("#" + tOb.name).css({
          "border-color": tOb.color,

          "background-color": tOb.color,
        });
      }
    }

    // =====================================================
    // EVALUATE DROPS
    // =====================================================

    for (var dp1 = 0; dp1 < numOfDrops; dp1++) {
      var thisIsCorr = compareArrays(
        ob.dropConnections[dp1],

        dataQuestion.drops[dp1].answer,
      );

      if (
        ob.dropConnections[dp1][0] == undefined &&
        dataQuestion.drops[dp1].answer[0] == "0"
      ) {
        thisIsCorr = true;
      }

      if (thisIsCorr) {
        ob.correctCount++;

        ob.resultArr[dp1] = 1;
      } else {
        ob.wrongCount++;

        ob.resultArr[dp1] = 0;
      }
    }

    // =====================================================
    // KEEP EDITABLE AFTER CHECK
    // =====================================================

    self.resetNodes("draw", true);

    $area.find(".node").css("cursor", "pointer");

    // =====================================================
    // SHOW RESULT
    // =====================================================

    self.showIcons(true, ob.resultArr);

    var allCorrect = ob.correctCount == numOfDrops && ob.wrongCount == 0;

    showFeedback(true, allCorrect);
  },

  // =========================================================
  // SHOW ICONS
  // =========================================================

  showIcons: function (aBoo, aResult) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    $area.find(".drop").each(function () {
      var thisDrp = parseInt($(this).attr("id").split("_")[2]) - 1;

      var $iconWrap = $(this).find(".icon_wrap");

      var $tick = $(this).find(".tick");

      var $cross = $(this).find(".cross");

      if (aBoo) {
        $iconWrap.css("display", "block");

        // امسح نتيجة Check القديمة
        $tick.css("display", "none");

        $cross.css("display", "none");

        if (aResult[thisDrp] == 1) {
          $tick.css("display", "block");
        } else {
          $cross.css("display", "block");
        }
      } else {
        $iconWrap.css("display", "none");

        $tick.css("display", "none");

        $cross.css("display", "none");
      }
    });
  },

  // =========================================================
  // RESET NODES
  // =========================================================

  resetNodes: function (aVal, aBoo) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    clearInterval(ob.setI);

    $area.find(".node").each(function () {
      $(this).css("background-color", ob.nodeColor);

      if (aVal == "all") {
        if (aBoo) {
          $(this).css("cursor", "pointer");

          $(this).data("connected", "");
        } else {
          $(this).css("cursor", "default");
        }

        $(this).css("border-color", "transparent");
      } else {
        $(this).css("border-color", "transparent");
      }
    });
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var self = this;

    var ob = this.ob;

    var $area = $(ob.activity_area);

    $area.find(".lines").empty();

    ob.lineObjects = [];

    self.showIcons(false, []);

    self.resetNodes("all", true);

    ob.startDraw = false;

    ob.lineOb = {};

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
