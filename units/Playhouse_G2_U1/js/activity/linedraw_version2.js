//  ****************************************** //
//  LINE DRAW - Single connection per node
//  Editable after Check
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

  /* =========================================================
     INIT
  ========================================================= */

  init: function (ob) {

    ob.startDraw = false;

    ob.dropConnections = [];

    ob.correctCount = 0;
    ob.wrongCount = 0;

    ob.resultArr = [];

    ob.lineObjects = [];

    ob.lineOb = {};

    ob.lineOb.startNode = null;
    ob.lineOb.endNode = null;

    ob.lineOb.startX = 0;
    ob.lineOb.startY = 0;

    ob.lineOb.endX = 0;
    ob.lineOb.endY = 0;

    ob.lineOb.distance = 0;
    ob.lineOb.angle = 0;

    ob.lineOb.startElement = "";
    ob.lineOb.color = "";

    ob.lineColor = "";
    ob.nodeColor = "";

    ob.lineThickness = 0;

    ob.connectType = "";

    ob.selectionColor = "";

    ob.transformPerc = "";

    ob.rightOffset = 0;
    ob.containerRight = 0;
    ob.topOffset = 0;

    ob.setI = null;

    this.ob = ob;

    this.listen(ob);
  },


  /* =========================================================
     RESIZE
  ========================================================= */

  screenPoseAdjustments: function () {

    var self = this;
    var ob = this.ob;

    if (ob.lineObjects.length > 0) {

      for (
        var ln = 0;
        ln < ob.lineObjects.length;
        ln++
      ) {

        self.setValuesForLine(
          ob.lineObjects[ln]
        );

        /*
          نحذف العنصر القديم قبل إعادة رسمه
          عشان ما يتكرر الخط
        */

        $(ob.activity_area)
          .find("#" + ob.lineObjects[ln].name)
          .remove();

        self.drawRect(
          ob.lineObjects[ln],
          "draw",
          ""
        );
      }
    }
  },


  /* =========================================================
     LISTEN
  ========================================================= */

  listen: function (ob) {

    var self = this;

    var $area = $(ob.activity_area);

    ob.lineColor =
      typeof ob.data_obj.linecolor != undefined &&
      ob.data_obj.linecolor != null
        ? ob.data_obj.linecolor
        : "blue";

    ob.nodeColor =
      typeof ob.data_obj.nodecolor != undefined &&
      ob.data_obj.nodecolor != null
        ? ob.data_obj.nodecolor
        : "#5d5d5d";

    ob.lineThickness =
      typeof ob.data_obj.strokewidth != undefined &&
      ob.data_obj.strokewidth != null
        ? parseInt(ob.data_obj.strokewidth)
        : 4;

    ob.connectType =
      typeof ob.data_obj.connect != undefined &&
      ob.data_obj.connect != null
        ? ob.data_obj.connect
        : "single";

    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";

    ob.transformPerc =
      parseInt(ob.lineThickness) / 2;


    /* =====================================================
       CLICK NODE
    ===================================================== */

    $area.find(".node").click(function () {

      var $thisNode = $(this);

      var thisNodeType =
        $thisNode
          .attr("class")
          .split(" ")[1];

      var thisID =
        $thisNode
          .parent()
          .attr("id");


      /*
        مهم:
        ما عاد نمنع النقطة لأنها connected.
        أي نقطة تظل قابلة للتعديل.
      */

      if (
        $thisNode.css("cursor") != "pointer"
      ) {
        return;
      }


      /* ===================================================
         SECOND NODE
      =================================================== */

      if (ob.startDraw) {

        var startType =
          ob.lineOb.startElement;


        /*
          drag لازم يروح لـ drop
          و drop لازم يروح لـ drag
        */

        var connectCondition =
          startType == "dragPoint"
            ? thisNodeType == "dropPoint"
            : thisNodeType == "dragPoint";


        if (!connectCondition) {

          /*
            إذا ضغط على نقطة من نفس النوع
            نغيّر نقطة البداية بدل ما نعلق
          */

          self.resetNodes(
            "draw",
            true
          );

          ob.lineOb = {};

          ob.lineOb.startNode =
            $thisNode;

          ob.lineOb.startID =
            thisID;

          ob.lineOb.startElement =
            thisNodeType;

          $thisNode.css(
            "border-color",
            ob.selectionColor
          );

          ob.startDraw = true;

          return;
        }


        /* =================================================
           END NODE
        ================================================= */

        ob.lineOb.endNode =
          $thisNode;

        ob.lineOb.endID =
          thisID;


        /*
          قبل إنشاء الخط الجديد:

          إذا نقطة البداية عليها خط قديم → احذفه.
          إذا نقطة النهاية عليها خط قديم → احذفه.

          هيك كل نقطة بتضل بخط واحد فقط.
        */

        self.removeConnectionsForNode(
          ob.lineOb.startID
        );

        self.removeConnectionsForNode(
          ob.lineOb.endID
        );


        /* =================================================
           SAVE CONNECTION DATA
        ================================================= */

        var $startParent =
          $area.find(
            "#" + ob.lineOb.startID
          );

        var $endParent =
          $area.find(
            "#" + ob.lineOb.endID
          );


        $startParent
          .find(".node")
          .data(
            "connected",
            ob.lineOb.endID
          );


        $endParent
          .find(".node")
          .data(
            "connected",
            ob.lineOb.startID
          );


        /* =================================================
           DRAW NEW LINE
        ================================================= */

        ob.lineOb.color =
          ob.lineColor;


        self.setValuesForLine(
          ob.lineOb
        );


        self.drawRect(
          ob.lineOb,
          "draw",
          ""
        );


        $thisNode.css(
          "border-color",
          ob.selectionColor
        );


        ob.lineObjects.push(
          ob.lineOb
        );


        /*
          نبدأ lineOb جديد
        */

        ob.lineOb = {};


        /* =================================================
           RESET NODE BORDER ONLY
        ================================================= */

        clearInterval(ob.setI);

        ob.setI = setTimeout(
          function () {

            self.resetNodes(
              "draw",
              true
            );

          },
          300
        );


        /* =================================================
           Enable Check / Reset
        ================================================= */

        if (
          ob.lineObjects.length > 0
        ) {

          var checkBtn =
            document.getElementsByClassName(
              "checkBtn"
            )[0];

          var resetBtn =
            document.getElementsByClassName(
              "resetBtn"
            )[0];


          if (checkBtn) {

            checkBtn.classList.remove(
              "disabled"
            );
          }


          if (resetBtn) {

            resetBtn.classList.remove(
              "disabled"
            );
          }
        }


        ob.startDraw = false;
      }


      /* ===================================================
         FIRST NODE
      =================================================== */

      else {

        ob.lineOb = {};

        ob.lineOb.startNode =
          $thisNode;

        ob.lineOb.startID =
          thisID;

        ob.lineOb.startElement =
          thisNodeType;

        $thisNode.css(
          "border-color",
          ob.selectionColor
        );

        ob.startDraw = true;
      }
    });
  },


  /* =========================================================
     REMOVE OLD CONNECTIONS FOR NODE

     أي خط مرتبط بالنقطة ينحذف.
  ========================================================= */

  removeConnectionsForNode: function (
    nodeID
  ) {

    var ob = this.ob;

    var $area =
      $(ob.activity_area);


    for (
      var i = ob.lineObjects.length - 1;
      i >= 0;
      i--
    ) {

      var line =
        ob.lineObjects[i];


      if (
        line.startID == nodeID ||
        line.endID == nodeID
      ) {

        /*
          الطرف الثاني من الخط
        */

        var otherID =
          line.startID == nodeID
            ? line.endID
            : line.startID;


        /*
          احذف الخط من الشاشة
        */

        $area
          .find(
            "#" + line.name
          )
          .remove();


        /*
          امسح connected من الطرف الثاني
        */

        var $otherNode =
          $area
            .find(
              "#" + otherID
            )
            .find(".node");


        if ($otherNode.length) {

          $otherNode.data(
            "connected",
            ""
          );

          $otherNode.css(
            "border-color",
            "transparent"
          );
        }


        /*
          امسحه من lineObjects
        */

        ob.lineObjects.splice(
          i,
          1
        );
      }
    }


    /*
      امسح connected من النقطة نفسها
    */

    var $node =
      $area
        .find(
          "#" + nodeID
        )
        .find(".node");


    if ($node.length) {

      $node.data(
        "connected",
        ""
      );
    }
  },


  /* =========================================================
     CALCULATE LINE
  ========================================================= */

  setValuesForLine: function (lineOb) {

    var ob = this.ob;


    var halfWidth =
      parseInt(
        lineOb.startNode.outerWidth()
      ) / 2;


    lineOb.height =
      ob.lineThickness;


    var lineHalfHeight =
      lineOb.height / 2;


    var st_margin_left =
      parseInt(
        lineOb.startNode.css(
          "margin-left"
        )
      ) || 0;


    var st_margin_top =
      parseInt(
        lineOb.startNode.css(
          "margin-top"
        )
      ) || 0;


    lineOb.startY =
      lineOb.startNode.position().top +
      st_margin_top +
      halfWidth -
      lineHalfHeight;


    lineOb.startX =
      lineOb.startNode.position().left +
      st_margin_left +
      halfWidth -
      lineHalfHeight;


    var ed_margin_left =
      parseInt(
        lineOb.endNode.css(
          "margin-left"
        )
      ) || 0;


    var ed_margin_top =
      parseInt(
        lineOb.endNode.css(
          "margin-top"
        )
      ) || 0;


    lineOb.endY =
      lineOb.endNode.position().top +
      ed_margin_top +
      halfWidth -
      lineHalfHeight;


    lineOb.endX =
      lineOb.endNode.position().left +
      ed_margin_left +
      halfWidth -
      lineHalfHeight;


    lineOb.distance =
      Math.sqrt(
        (
          lineOb.endX -
          lineOb.startX
        ) *
        (
          lineOb.endX -
          lineOb.startX
        ) +
        (
          lineOb.endY -
          lineOb.startY
        ) *
        (
          lineOb.endY -
          lineOb.startY
        )
      );


    lineOb.distance =
      lineOb.distance +
      lineOb.height;


    lineOb.angle =
      Math.atan2(
        lineOb.endY -
          lineOb.startY,

        lineOb.endX -
          lineOb.startX
      ) *
      180 /
      Math.PI;


    lineOb.name =
      "line-" +
      lineOb.startID +
      "-" +
      lineOb.endID;
  },


  /* =========================================================
     DRAW
  ========================================================= */

  drawRect: function (
    lineOb,
    axn,
    nam
  ) {

    var ob = this.ob;

    var e =
      $(ob.activity_area);

    var $lines =
      e.find(".lines");

    var obj =
      lineOb;


    /*
      نتأكد إنه نفس الخط مش موجود
    */

    $lines
      .find(
        "#" + obj.name
      )
      .remove();


    $lines.append(
      '<div class="line" id="' +
        obj.name +
        '"><div></div></div>'
    );


    var rect =
      $lines.find(
        "#" + obj.name
      );


    if (axn == "draw") {

      rect.css({

        top:
          obj.startY +
          "px",

        left:
          obj.startX +
          "px",

        width:
          obj.distance +
          "px",

        height:
          obj.height +
          "px",

        transform:
          "rotate(" +
          obj.angle +
          "deg)",

      });


      rect.css({

        "transform-origin":
          ob.transformPerc +
          "px " +
          ob.transformPerc +
          "px 0px",

      });
    }


    rect.css({

      "border-color":
        obj.color,

      "background-color":
        obj.color,

      display:
        "block",

    });
  },


  /* =========================================================
     VALIDATE

     التقييم يصير فقط عند Check.
  ========================================================= */

  validate: function () {

    var ob =
      this.ob;

    var $area =
      $(ob.activity_area);

    var self =
      this;

    var dataQuestion =
      ob.data_obj.questions;


    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;


    var numOfDrops =
      dataQuestion.drops.length;


    for (
      var dp = 0;
      dp < numOfDrops;
      dp++
    ) {

      ob.dropConnections[dp] = [];
    }


    /* =====================================================
       EVALUATE LINES
    ===================================================== */

    for (
      var ll = 0;
      ll < ob.lineObjects.length;
      ll++
    ) {

      var tOb =
        ob.lineObjects[ll];


      var dropElement =
        tOb.startElement ==
        "dropPoint"
          ? tOb.startID
          : tOb.endID;


      var dragElement =
        dropElement ==
        tOb.startID
          ? tOb.endID
          : tOb.startID;


      var dropArr =
        dropElement.split("_");

      var dragArr =
        dragElement.split("_");


      var dropIndex =
        parseInt(
          dropArr[2]
        ) - 1;


      var dragIndex =
        parseInt(
          dragArr[2]
        );


      var correctAns =
        dataQuestion
          .drops[dropIndex]
          .answer;


      ob.dropConnections[
        dropIndex
      ].push(
        dragIndex
      );


      if (
        correctAns.length > 0
      ) {

        var isAns =
          $.inArray(
            dragIndex,
            getIntArray(
              correctAns
            )
          ) >= 0;


        tOb.color =
          isAns
            ? "green"
            : "red";


        ob.lineObjects[
          ll
        ].color =
          tOb.color;


        $area
          .find(
            "#" + tOb.name
          )
          .css({

            "border-color":
              tOb.color,

            "background-color":
              tOb.color,

          });
      }
    }


    /* =====================================================
       EVALUATE DROPS
    ===================================================== */

    for (
      var dp1 = 0;
      dp1 < numOfDrops;
      dp1++
    ) {

      var thisIsCorr =
        compareArrays(
          ob.dropConnections[dp1],
          dataQuestion.drops[dp1].answer
        );


      /*
        answer: [0]
        يعني ما لازم يكون عليها توصيل
      */

      if (
        ob.dropConnections[
          dp1
        ][0] == undefined &&
        dataQuestion
          .drops[dp1]
          .answer[0] == "0"
      ) {

        thisIsCorr = true;
      }


      if (thisIsCorr) {

        ob.correctCount++;

        ob.resultArr[
          dp1
        ] = 1;

      } else {

        ob.wrongCount++;

        ob.resultArr[
          dp1
        ] = 0;
      }
    }


    /*
      نخفي borders بس،
      لكن ما نقفل التوصيل.

      مهم:
      true بدل false
    */

    self.resetNodes(
      "all",
      true
    );


    /*
      ✓ / ✕ تتحدث فقط هنا عند Check
    */

    self.showIcons(
      true,
      ob.resultArr
    );


    var allCorrect =
      ob.correctCount ==
        numOfDrops &&
      ob.wrongCount ==
        0;


    showFeedback(
      true,
      allCorrect
    );


    /*
      نخلي Reset شغال حتى لو صح
      لأنك بدك تقدر تعدّل بعد Check
    */

    var resetBtn =
      document.getElementsByClassName(
        "resetBtn"
      )[0];


    if (resetBtn) {

      resetBtn.classList.remove(
        "disabled"
      );
    }
  },


  /* =========================================================
     SHOW ICONS
  ========================================================= */

  showIcons: function (
    aBoo,
    aResult
  ) {

    var ob =
      this.ob;

    var $area =
      $(ob.activity_area);


    $area
      .find(".drop")
      .each(function () {

        var thisDrp =
          parseInt(
            $(this)
              .attr("id")
              .split("_")[2]
          ) - 1;


        /*
          ننظف القديم أول
        */

        $(this)
          .find(".tick")
          .css(
            "display",
            "none"
          );

        $(this)
          .find(".cross")
          .css(
            "display",
            "none"
          );


        if (aBoo) {

          $(this)
            .find(".icon_wrap")
            .css(
              "display",
              "block"
            );


          if (
            aResult[thisDrp] ==
            1
          ) {

            $(this)
              .find(".tick")
              .css(
                "display",
                "block"
              );

          } else {

            $(this)
              .find(".cross")
              .css(
                "display",
                "block"
              );
          }

        } else {

          $(this)
            .find(".icon_wrap")
            .css(
              "display",
              "none"
            );
        }
      });
  },


  /* =========================================================
     RESET NODE STYLE
  ========================================================= */

  resetNodes: function (
    aVal,
    aBoo
  ) {

    var ob =
      this.ob;

    var $area =
      $(ob.activity_area);


    clearTimeout(
      ob.setI
    );


    $area
      .find(".node")
      .each(function () {

        $(this).css(
          "background-color",
          ob.nodeColor
        );


        if (aVal == "all") {

          if (aBoo) {

            /*
              نخليها قابلة للتعديل
            */

            $(this).css(
              "cursor",
              "pointer"
            );

          } else {

            $(this).css(
              "cursor",
              "default"
            );
          }


          $(this).css(
            "border-color",
            "transparent"
          );

        } else {

          $(this).css(
            "border-color",
            "transparent"
          );
        }
      });
  },


  /* =========================================================
     RESET
  ========================================================= */

  reset: function () {

    var self =
      this;

    var ob =
      this.ob;

    var $area =
      $(ob.activity_area);


    $area
      .find(".lines")
      .empty();


    ob.lineObjects = [];


    /*
      نمسح connected من كل النقاط
    */

    $area
      .find(".node")
      .each(function () {

        $(this).data(
          "connected",
          ""
        );
      });


    self.showIcons(
      false,
      []
    );


    self.resetNodes(
      "all",
      true
    );


    ob.startDraw = false;

    ob.lineOb = {};

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;


    var checkBtn =
      document.getElementsByClassName(
        "checkBtn"
      )[0];


    if (checkBtn) {

      checkBtn.classList.add(
        "disabled"
      );
    }
  },


  /* =========================================================
     INITIAL SETTINGS
  ========================================================= */

  initialSettings: function () {

    this.reset();

    initialSettingsDone(1);
  },
};