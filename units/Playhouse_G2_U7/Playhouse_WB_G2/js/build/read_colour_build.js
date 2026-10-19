function buildReadColourBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    console.error("read_colour_data is missing");
    return;
  }

  /* =========================================================
     Back / Next
     ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt +=
    '<img src="../images/icons/back_btn.png" alt="Back" />';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';
  htmlStmt +=
    '<img src="../images/icons/next_btn.png" alt="Next" />';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =========================================================
     Header
     ========================================================= */

  htmlStmt +=
    '<div class="act_head_group justify-content-center">';

  if (aObj.mainTitle) {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '" alt="" />';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "0px";

      if (
        aObj.mainTitleIconPos &&
        aObj.mainTitleIconPos.right
      ) {
        iconRight =
          aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';" alt="" />';
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt +=
    '<div class="page_sub_title d-flex">';

  htmlStmt +=
    "<p>" +
    (aObj.subTitleTextLeft || "") +
    "</p>";

  if (
    aObj.subTitleIcons &&
    aObj.subTitleIcons.length > 0
  ) {
    for (
      var sicons = 0;
      sicons < aObj.subTitleIcons.length;
      sicons++
    ) {
      if (aObj.subTitleIcons[sicons]) {
        htmlStmt +=
          '<img src="' +
          aObj.subTitleIcons[sicons] +
          '" alt="" />';
      }
    }
  }

  if (aObj.subTitleTextRight) {
    htmlStmt +=
      '<p class="subTitleTextRight">' +
      aObj.subTitleTextRight +
      "</p>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Main activity area
     ========================================================= */

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto read_colour_options">';

  htmlStmt +=
    '<div class="all_cont read_colour_all_cont">';

  htmlStmt +=
    '<div class="screen_elements read_colour_screen">';

  htmlStmt +=
    '<div class="read_colour_activity">';

  /* =========================================================
     Left side: image + transparent canvas
     ========================================================= */

  htmlStmt +=
    '<div class="read_colour_canvas_side">';

  htmlStmt +=
    '<div class="read_colour_canvas_frame">';

  /*
    الصورة الأصلية مستقلة عن الـCanvas.
    الممحاة لن تستطيع حذفها.
  */

  htmlStmt +=
    '<img class="read_colour_background" ' +
    'src="' +
    (aObj.image || "") +
    '" ' +
    'alt="Colouring picture" ' +
    'draggable="false" />';

  /*
    الـCanvas شفاف وموجود فوق الصورة.
  */

  htmlStmt +=
    '<canvas id="readColourCanvas" ' +
    'width="' +
    (aObj.canvasWidth || 720) +
    '" ' +
    'height="' +
    (aObj.canvasHeight || 570) +
    '"></canvas>';

  htmlStmt += "</div>";

  /* =========================================================
     Colours and tools
     ========================================================= */

  htmlStmt +=
    '<div class="read_colour_toolbar">';

  htmlStmt +=
    '<div class="read_colour_palette">';

  var colors =
    aObj.colors && aObj.colors.length
      ? aObj.colors
      : [
          "#ed1c24",
          "#f7941d",
          "#fff200",
          "#39b54a",
          "#00aeef",
          "#2e3192",
          "#92278f",
          "#f49ac2",
          "#8b5a2b",
          "#000000",
        ];

  for (var i = 0; i < colors.length; i++) {
    htmlStmt +=
      '<button type="button" ' +
      'class="read_colour_swatch' +
      (i === 0 ? " active" : "") +
      '" ' +
      'data-color="' +
      colors[i] +
      '" ' +
      'style="background-color:' +
      colors[i] +
      ';" ' +
      'aria-label="Choose colour">' +
      "</button>";
  }

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="read_colour_tools">';

  htmlStmt +=
    '<button type="button" ' +
    'class="read_colour_tool read_colour_eraser">' +
    '<i class="fa fa-eraser" aria-hidden="true"></i>' +
    "<span>Eraser</span>" +
    "</button>";

  htmlStmt +=
    '<button type="button" ' +
    'class="read_colour_tool read_colour_clear">' +
    '<i class="fa fa-refresh" aria-hidden="true"></i>' +
    "<span>Reset</span>" +
    "</button>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Right side: four writing inputs
     ========================================================= */

  htmlStmt +=
    '<div class="read_colour_text_side">';

  htmlStmt +=
    '<div class="read_colour_inputs">';

  var inputs = aObj.inputs || [
    { placeholder: "" },
    { placeholder: "" },
    { placeholder: "" },
    { placeholder: "" },
  ];

  for (var p = 0; p < inputs.length; p++) {
    var inputObj = inputs[p] || {};

    htmlStmt +=
      '<div class="read_colour_input_row">' +
      '<span class="read_colour_input_number">' +
      (p + 1) +
      '.</span>' +
      '<input type="text" ' +
      'class="read_colour_student_input" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'placeholder="' +
      (inputObj.placeholder || "") +
      '" ' +
      'aria-label="Answer ' +
      (p + 1) +
      '" />' +
      "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Close elements
     ========================================================= */

  htmlStmt += "</div>"; // read_colour_activity
  htmlStmt += "</div>"; // read_colour_screen
  htmlStmt += "</div>"; // read_colour_all_cont
  htmlStmt += "</div>"; // options

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> read colour Built");

  setLoadedStatus(
    getCurrFileOrDirectory("file"),
  );
}