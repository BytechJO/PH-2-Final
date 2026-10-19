function buildColourPictureWriteSentenceBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null || !aObj.image) {
    console.error("Invalid colour_picture_write_sentence_data");

    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_left " +
    "subFooterNav backNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="' +
    "sub_footer_icon " +
    "sub_footer_icon_right " +
    "subFooterNav nextNav mx-1" +
    '">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (
    aObj.mainTitleIcon !== undefined &&
    aObj.mainTitleIcon !== null &&
    aObj.mainTitleIcon !== ""
  ) {
    var iconRight = "-18px";

    if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right !== undefined) {
      iconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      iconRight +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Subtitle
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="' +
    "audioIcon off contant audioQuestionTitle" +
    '" data-slideNum="1"' +
    ' data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  if (aObj.title_position === "under") {
    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  } else {
    htmlStmt += '<div class="page_sub_title d-flex">';

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
     Main wrappers
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="' +
    "all_cont justify-content-start " +
    "justify-content-sm-center" +
    '">';

  htmlStmt +=
    '<div class="' +
    "screen_elements " +
    "colour_picture_screen " +
    "d-flex flex-wrap " +
    "justify-content-center " +
    "align-items-center h-100" +
    '">';

  /* =====================================================
     Drawing toolbar
  ===================================================== */

  htmlStmt += '<div class="drawing_toolbar">';

  htmlStmt += '<div class="colour_palette">';

  for (var colourIndex = 0; colourIndex < aObj.colours.length; colourIndex++) {
    var colour = aObj.colours[colourIndex];

    var selectedClass = colour === aObj.defaultColour ? " selected" : "";

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="drawing_colour' +
      selectedClass +
      '" data-colour="' +
      colour +
      '" style="background-color:' +
      colour +
      ';" aria-label="Select colour">' +
      "</button>";
  }

  htmlStmt += "</div>";

  htmlStmt +=
    "<button " +
    'type="button" ' +
    'class="drawing_tool brush_tool selected" ' +
    'data-tool="brush">' +
    '<span class="tool_icon">✎</span>' +
    '<span class="tool_text">Brush</span>' +
    "</button>";

  htmlStmt +=
    "<button " +
    'type="button" ' +
    'class="drawing_tool eraser_tool" ' +
    'data-tool="eraser">' +
    '<span class="tool_icon">⌫</span>' +
    '<span class="tool_text">Eraser</span>' +
    "</button>";

  htmlStmt += '<label class="brush_size_wrap">';

  htmlStmt += "<span>Size</span>";

  htmlStmt +=
    "<input " +
    'type="range" ' +
    'class="brush_size_input" ' +
    'min="2" ' +
    'max="30" ' +
    'value="' +
    (aObj.defaultBrushSize || 8) +
    '">';

  htmlStmt += "</label>";

  htmlStmt += "</div>";

  /* =====================================================
     Image and canvas
  ===================================================== */

  htmlStmt += '<div class="colour_picture_workspace">';

  htmlStmt += '<div class="colour_canvas_wrap">';

  htmlStmt +=
    "<img " +
    'class="colour_background_image" ' +
    'src="' +
    aObj.image +
    '" alt="">';

  htmlStmt += '<canvas class="colour_drawing_canvas"></canvas>';

  htmlStmt += "</div>";

  /* =====================================================
     Sentence input
  ===================================================== */

  htmlStmt += '<div class="sentence_input_wrap">';

  htmlStmt +=
    "<input " +
    'type="text" ' +
    'class="sentence_input" ' +
    'maxlength="200" ' +
    'autocomplete="off" ' +
    'spellcheck="false" ' +
    'placeholder="' +
    (aObj.placeholder || "") +
    '" aria-label="Write a sentence about the picture">';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  console.log("Colour picture write sentence built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
