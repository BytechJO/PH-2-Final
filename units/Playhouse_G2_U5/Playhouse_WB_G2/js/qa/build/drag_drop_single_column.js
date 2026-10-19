function initActivity(activity) {
  // =========================================================
  // OPTIONS
  // =========================================================

  var drag_drop_options =
    '<div class="drag_drop_options sticky-top center_item">';

  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" ' +
      'data-value="' +
      value +
      '" ' +
      'style="background-color: transparent;">' +
      value +
      "</div>";
  });

  drag_drop_options += "</div>";

  // =========================================================
  // QUESTIONS
  // =========================================================

  var drag_drop_questions =
    '<div class="drag_drop_questions d-flex flex-wrap center_item">' +
    '<ul class="container">';

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions += '<li><ul class="d-flex flex-wrap">';

    // =====================================================
    // SINGLE STRING
    // =====================================================

    if (typeof values == "string") {
      var has_single_text = "";

      if ((values[0] == "_") == true) {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li class="' +
        has_single_text +
        '">' +
        '<div class="droppable_label">' +
        values.replace(
          /___/g,

          "<input readonly " +
            'type="text" ' +
            'class="droppable_div" />' +
            "</div>" +
            '<div class="droppable_label">',
        ) +
        "</div></li>";
    } else {
      // =====================================================
      // MULTIPLE STRINGS
      // =====================================================

      jQuery.each(values, function (k, v) {
        var v = v + "";

        drag_drop_questions +=
          '<li class="drag_drop_multiple" style="margin:0px">' +
          v.replace(
            "___",

            " <input readonly " + 'type="text" ' + 'class="droppable_div" />',
          ) +
          "</li>";
      });
    }

    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul>";

  // =========================================================
  // IMAGE
  // =========================================================

  if (activity.image != undefined && activity.image != "") {
    drag_drop_questions += '<div class="image_container">';

    drag_drop_questions += '<img src="' + activity.image + '" />';

    drag_drop_questions += "</div>";
  }

  drag_drop_questions += "</div>";

  // =========================================================
  // HTML
  // =========================================================

  var html = "";

  html += "<div>";

  html += drag_drop_options + drag_drop_questions;

  // =========================================================
  // BACKGROUND IMAGE
  // =========================================================

  if (
    typeof activity.background_image != "undefined" &&
    activity.background_image != ""
  ) {
    html += '<div class="image_container">';

    html +=
      '<img src="../images/pages/activities/' +
      activity.background_image +
      '" />';

    html += "</div>";
  }

  html += "</div>";

  // =========================================================
  // WRITE HTML
  // =========================================================

  writeHtml(activity, html);

  // =========================================================
  // DEFAULT ANSWERS
  // =========================================================

  setDefaultAnswerDragDrop(activity);

  // =========================================================
  // MAKE DRAGGABLE FUNCTION
  // =========================================================

  function makeDraggable(element) {
    jQuery(element).draggable({
      container: jQuery(".activity-content"),

      revert: true,

      placeholder: true,

      droptarget: ".drag_drop_questions input.droppable_div",

      // =====================================================
      // DROP
      // =====================================================

      drop: function (evt, droptarget) {
        var value = jQuery(this).attr("data-value");

        if (value == undefined || value == null) {
          value = evt.target.innerText;
        }

        // =================================================
        // PUT VALUE INSIDE INPUT
        // =================================================

        jQuery(droptarget).val(value);

        // =================================================
        // CHANGE CLASS
        // filled_drop = input فيه إجابة
        // =================================================

        jQuery(droptarget).removeClass("droppable_div").addClass("filled_drop");

        // =================================================
        // SAVE VALUE
        // =================================================

        jQuery(droptarget).attr("data-value", value);

        // =================================================
        // REMOVE OPTION FROM TOP
        // =================================================

        jQuery(this).remove();

        // =================================================
        // DETECT
        // =================================================

        detectDragend();
      },
    });
  }

  // =========================================================
  // MAKE INITIAL OPTIONS DRAGGABLE
  // =========================================================

  makeDraggable(jQuery(".drag_drop_options div.draggable_div"));

  // =========================================================
  // CLICK FILLED INPUT
  // RETURN ITEM TO OPTIONS
  // =========================================================

  jQuery(document)
    .off("click.returnDragOption", ".drag_drop_questions .filled_drop")
    .on(
      "click.returnDragOption",
      ".drag_drop_questions .filled_drop",
      function () {
        var $input = jQuery(this);

        var value = $input.attr("data-value");

        if (value == undefined || value == null || value == "") {
          value = $input.val();
        }

        if (value == undefined || value == null || value == "") {
          return;
        }

        // =================================================
        // CREATE OPTION AGAIN
        // =================================================

        var $newOption = jQuery(
          '<div class="draggable_div" ' +
            'data-value="' +
            value +
            '" ' +
            'style="background-color: transparent;">' +
            value +
            "</div>",
        );

        // =================================================
        // RETURN IT TO OPTIONS
        // =================================================

        jQuery(".drag_drop_options").append($newOption);

        // =================================================
        // MAKE RETURNED ITEM DRAGGABLE AGAIN
        // =================================================

        makeDraggable($newOption);

        // =================================================
        // CLEAR INPUT
        // =================================================

        $input.val("");

        $input.removeAttr("data-value");

        // =================================================
        // MAKE INPUT DROPPABLE AGAIN
        // =================================================

        $input.removeClass("filled_drop").addClass("droppable_div");

        // =================================================
        // DETECT CHANGE
        // =================================================

        detectDragend();
      },
    );

  // =========================================================
  // MOBILE VIEW
  // =========================================================

  if (window.outerWidth <= 600) {
    /*
    jQuery('.drag_drop_options').css(
      'top',
      (
        jQuery('.activity-heading').offset().top +
        jQuery('.activity-heading').height()
      ) + 20
    );
    */
  }

  // =========================================================
  // SCROLL
  // =========================================================

  jQuery(".content_wrap")
    .off("scroll.dragDrop")
    .on("scroll.dragDrop", function () {
      console.log(jQuery(this).scrollTop());

      if (jQuery(this).scrollTop() > 72) {
        jQuery(".drag_drop_options").addClass("drag_drop_options_fixed");
      } else {
        jQuery(".drag_drop_options").removeClass("drag_drop_options_fixed");
      }
    });

  // =========================================================
  // BUTTONS
  // =========================================================

  disableBtns();
}
