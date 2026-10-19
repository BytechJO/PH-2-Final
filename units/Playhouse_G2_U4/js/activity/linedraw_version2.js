//  ****************************************** //
//  LINE DRAW (revamped) - Version no: 1.2
//  Date created - July 25, 2020
//  Date updated - August 06, 2020 (startDraw reset)
//  Date updated - August 20, 2020 (line color maintained at screen resize)
//  Written by - Karthika. G
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

  screenPoseAdjustments: function () {
    var self = this;
    var ob = this.ob;

    if (ob.lineObjects.length > 0) {
      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);

        self.drawRect(ob.lineObjects[ln], "draw", "");
      }
    }
  },

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

    ob.connectType =
      typeof ob.data_obj.connect != undefined && ob.data_obj.connect != null
        ? ob.data_obj.connect
        : "multiple";

    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";

    ob.transformPerc = parseInt(ob.lineThickness) / 2;

    // =====================================================
    // REMOVE DRAG CONNECTION
    // يحذف خط dragPoint فقط
    // ويحافظ على باقي خطوط الـ dropPoint
    // =====================================================

    function removeStartConnection(nodeID) {
      for (var i = ob.lineObjects.length - 1; i >= 0; i--) {
        var lineObj = ob.lineObjects[i];

        if (lineObj.startID === nodeID || lineObj.endID === nodeID) {
          var otherID =
            lineObj.startID === nodeID ? lineObj.endID : lineObj.startID;

          // =========================================
          // DELETE LINE
          // =========================================

          $area.find("#" + lineObj.name).remove();

          // =========================================
          // CURRENT NODE
          // =========================================

          var $currentNode = $area.find("#" + nodeID).find(".node");

          $currentNode.data("connected", "");

          $currentNode.css("border-color", "transparent");

          // =========================================
          // OTHER NODE
          // مهم:
          // ما نمسح كل اتصالاتها
          // فقط نشيل nodeID منها
          // =========================================

          var $otherNode = $area.find("#" + otherID).find(".node");

          var otherConnectedData = $otherNode.data("connected") || "";

          var otherConnections = otherConnectedData
            .toString()
            .split(",")
            .filter(function (id) {
              return id !== "" && id !== nodeID;
            });

          $otherNode.data("connected", otherConnections.join(","));

          // =========================================
          // REMOVE FROM ARRAY
          // =========================================

          ob.lineObjects.splice(i, 1);

          // dragPoint مفروض إلها خط واحد فقط
          break;
        }
      }
    }

    // =====================================================
    // REMOVE OLD EVENT
    // =====================================================

    $area.find(".node").off("click.lineDraw");

    // =====================================================
    // NODE CLICK
    // =====================================================

    $area.find(".node").on("click.lineDraw", function (e) {
      var $thisNode = $(this);

      var classes = $thisNode.attr("class").split(" ");

      var thisNode =
        classes.indexOf("dragPoint") !== -1 ? "dragPoint" : "dropPoint";

      var thisID = $thisNode.parent().attr("id");

      // =================================================
      // KEEP CLICKABLE AFTER CHECK
      // =================================================

      if ($thisNode.css("cursor") != "pointer") {
        return;
      }

      // =================================================
      // FIRST CLICK
      // =================================================

      if (!ob.startDraw) {
        // =============================================
        // إذا كبسنا dragPoint وعليها خط قديم
        // احذفه حتى نعدل مكانها
        // =============================================

        if (thisNode === "dragPoint") {
          var existingConnection = (
            $thisNode.data("connected") || ""
          ).toString();

          if (existingConnection !== "") {
            removeStartConnection(thisID);
          }
        }

        // =============================================
        // START NEW LINE
        // =============================================

        ob.lineOb = {};

        ob.lineOb.startNode = $thisNode;

        ob.lineOb.startID = thisID;

        ob.lineOb.startElement = thisNode;

        $thisNode.css("border-color", ob.selectionColor);

        ob.startDraw = true;

        return;
      }

      // =================================================
      // SECOND CLICK
      // =================================================

      var startNodeType = ob.lineOb.startElement;

      var startID = ob.lineOb.startID;

      var $startNode = ob.lineOb.startNode;

      // =================================================
      // SAME NODE
      // =================================================

      if (startID === thisID) {
        $startNode.css("border-color", "transparent");

        ob.startDraw = false;

        ob.lineOb = {};

        return;
      }

      // =================================================
      // drag <-> drop ONLY
      // =================================================

      var connectCondition =
        startNodeType === "dragPoint"
          ? thisNode === "dropPoint"
          : thisNode === "dragPoint";

      if (!connectCondition) {
        self.resetNodes("draw", true);

        ob.startDraw = false;

        ob.lineOb = {};

        return;
      }

      // =================================================
      // IMPORTANT
      //
      // إذا البداية كانت dropPoint
      // والنهاية dragPoint عليها خط قديم
      // احذف خط الـ dragPoint القديم أولًا
      // =================================================

      if (thisNode === "dragPoint") {
        var endExistingConnection = (
          $thisNode.data("connected") || ""
        ).toString();

        if (endExistingConnection !== "") {
          removeStartConnection(thisID);
        }
      }

      // =================================================
      // GET EXISTING CONNECTIONS
      // =================================================

      var startConnectedData = $startNode.data("connected") || "";

      var endConnectedData = $thisNode.data("connected") || "";

      var startConnectedArr =
        startConnectedData !== ""
          ? startConnectedData.toString().split(",")
          : [];

      var endConnectedArr =
        endConnectedData !== "" ? endConnectedData.toString().split(",") : [];

      // =================================================
      // PREVENT SAME CONNECTION TWICE
      // =================================================

      var alreadyConnected =
        $.inArray(thisID.toString(), startConnectedArr) > -1;

      if (alreadyConnected) {
        self.resetNodes("draw", true);

        ob.startDraw = false;

        ob.lineOb = {};

        return;
      }

      // =================================================
      // CREATE END
      // =================================================

      ob.lineOb.endNode = $thisNode;

      ob.lineOb.endID = thisID;

      // =================================================
      // SAVE CONNECTION
      // =================================================

      startConnectedArr.push(thisID);

      $startNode.data("connected", startConnectedArr.join(","));

      if ($.inArray(startID.toString(), endConnectedArr) === -1) {
        endConnectedArr.push(startID);
      }

      $thisNode.data("connected", endConnectedArr.join(","));

      // =================================================
      // COLOR
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
      // SAVE LINE
      // =================================================

      ob.lineObjects.push(ob.lineOb);

      // =================================================
      // NODE BORDER
      // =================================================

      $startNode.css("border-color", ob.selectionColor);

      $thisNode.css("border-color", ob.selectionColor);

      // =================================================
      // RESET CURRENT DRAW
      // =================================================

      ob.lineOb = {};

      ob.startDraw = false;

      // =================================================
      // RESET BORDERS
      // =================================================

      clearTimeout(ob.setI);

      ob.setI = setTimeout(function () {
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
  // =========================================================

  setValuesForLine: function (lineOb) {
    var ob = this.ob;

    var halfWidth = parseInt(lineOb.startNode.outerWidth()) / 2;

    lineOb.height = ob.lineThickness;

    var lineHalfHeight = lineOb.height / 2;

    var st_margin_left = parseInt(lineOb.startNode.css("margin-left")) || 0;

    var st_margin_top = parseInt(lineOb.startNode.css("margin-top")) || 0;

    lineOb.startY =
      lineOb.startNode.position().top +
      (st_margin_top + halfWidth) -
      lineHalfHeight;

    lineOb.startX =
      lineOb.startNode.position().left +
      (st_margin_left + halfWidth) -
      lineHalfHeight;

    var ed_margin_left = parseInt(lineOb.endNode.css("margin-left")) || 0;

    var ed_margin_top = parseInt(lineOb.endNode.css("margin-top")) || 0;

    lineOb.endY =
      lineOb.endNode.position().top +
      (ed_margin_top + halfWidth) -
      lineHalfHeight;

    lineOb.endX =
      lineOb.endNode.position().left +
      (ed_margin_left + halfWidth) -
      lineHalfHeight;

    lineOb.distance = Math.sqrt(
      (lineOb.endX - lineOb.startX) * (lineOb.endX - lineOb.startX) +
        (lineOb.endY - lineOb.startY) * (lineOb.endY - lineOb.startY),
    );

    lineOb.distance = lineOb.distance + lineOb.height;

    lineOb.angle =
      (Math.atan2(
        lineOb.endY - lineOb.startY,

        lineOb.endX - lineOb.startX,
      ) *
        180) /
      Math.PI;

    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },

  // =========================================================
  // DRAW
  // =========================================================

  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;

    var e = $(ob.activity_area);

    var $lines = e.find(".lines");

    var obj = lineOb;

    if ($lines.find("#" + obj.name).length > 0) {
      return;
    }

    $lines.append('<div class="line" id="' + obj.name + '"><div>');

    var rect = $lines.find("#" + obj.name);

    if (axn == "draw") {
      rect.css({
        top: obj.startY + "px",

        left: obj.startX + "px",

        width: obj.distance + "px",

        height: obj.height + "px",

        transform: "rotate(" + obj.angle + "deg)",
      });

      rect.css({
        "transform-origin":
          ob.transformPerc + "px " + ob.transformPerc + "px 0px",
      });
    }

    rect.css({
      "border-color": obj.color,

      "background-color": obj.color,

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

    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }

    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var tOb = ob.lineObjects[ll];

      var dropElement =
        tOb.startElement == "dropPoint" ? tOb.startID : tOb.endID;

      var dragElement = dropElement == tOb.startID ? tOb.endID : tOb.startID;

      var dropArr = dropElement.split("_");

      var dragArr = dragElement.split("_");

      var correctAns = dataQuestion.drops[parseInt(dropArr[2]) - 1].answer;

      ob.dropConnections[parseInt(dropArr[2]) - 1].push(parseInt(dragArr[2]));

      if (correctAns.length > 0) {
        var isAns =
          $.inArray(
            parseInt(dragArr[2]),

            getIntArray(correctAns),
          ) >= 0;

        tOb.color = isAns ? "green" : "red";

        ob.lineObjects[ll].color = tOb.color;

        $area.find("#" + tOb.name).css({
          "border-color": tOb.color,

          "background-color": tOb.color,
        });
      }
    }

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

      var $tick = $(this).find(".tick");

      var $cross = $(this).find(".cross");

      if (aBoo) {
        $(this).find(".icon_wrap").css("display", "block");

        // امسح نتيجة Check السابقة فقط
        $tick.css("display", "none");

        $cross.css("display", "none");

        if (aResult[thisDrp] == 1) {
          $tick.css("display", "block");
        } else {
          $cross.css("display", "block");
        }
      } else {
        $(this).find(".icon_wrap").css("display", "none");

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

    clearTimeout(ob.setI);

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

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
