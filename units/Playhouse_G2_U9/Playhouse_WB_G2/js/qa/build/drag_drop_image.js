function initActivity(activity) {
  // =========================================================
  // OPTIONS
  // =========================================================

  var drag_drop_options = '<div class="drag_drop_options sticky-top">';

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
    '<div class="drag_drop_questions">' + '<ul class="d-flex flex-column">';

  var img_array = activity.images;

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions +=
      '<li class="d-flex flex-wrap" style="width: 950px;">' + "<ul>";

    // =====================================================
    // STRING
    // =====================================================

    if (typeof values == "string") {
      var has_single_text = "";

      if ((values[0] == "_") == true) {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li style="width: 100%;" class="' + has_single_text + '">';

      drag_drop_questions += '<div class="droppable_label">';

      drag_drop_questions +=
        '<div class="i_container">' +
        '<div class="i_row d-flex flex-wrap">' +
        '<div class="l_col"></div>' +
        '<div class="r_col">' +
        '<div class="droppable_text_div">';

      drag_drop_questions += values.replace(
        /___/g,

        "<input readonly " +
          'type="text" ' +
          'class="droppable_div" />' +
          "</div>" +
          '<div class="droppable_label">',
      );

      drag_drop_questions += "</div>" + "</div>" + "</div>" + "</div>";

      drag_drop_questions += "</div>";

      drag_drop_questions += "</li>";
    } else {
      // =================================================
      // MULTIPLE
      // =================================================

      jQuery.each(values, function (k, v) {
        var v = v + "";

        drag_drop_questions +=
          '<li class="drag_drop_multiple">' +
          v.replace(
            "___",

            " <input readonly " + 'type="text" ' + 'class="droppable_div" />',
          ) +
          "</li>";
      });
    }

    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul></div>";

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

  // =========================================================
  // ACTIVITY IMAGE
  // =========================================================

  if (activity.image != undefined && activity.image != "") {
    html += '<div class="image_container">';

    html += '<img src="../images/pages/activities/' + activity.image + '" />';

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
  // MOBILE
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
  // MAKE DRAGGABLE
  // =========================================================

  function makeDraggable(element) {
    jQuery(element).draggable({
      container: jQuery(".activity-content"),

      revert: true,

      placeholder: true,

      droptarget: ".drag_drop_questions input.droppable_div",

      // =================================================
      // DROP
      // =================================================

      drop: function (evt, droptarget) {
        var $dragged = jQuery(this);

        var $drop = jQuery(droptarget);

        var value = $dragged.attr("data-value");

        if (value == undefined || value == null || value == "") {
          value = evt.target.innerText;
        }

        // =============================================
        // PUT VALUE IN INPUT
        // =============================================

        $drop.val(value);

        // =============================================
        // INPUT صار filled
        // =============================================

        $drop
          .removeClass("droppable_div")
          .addClass("filled_drop")
          .attr("data-value", value);

        // =============================================
        // REMOVE OPTION FROM TOP
        // =============================================

        $dragged.remove();

        // =============================================
        // DETECT
        // =============================================

        detectDragend();
      },
    });
  }

  // =========================================================
  // INITIAL OPTIONS
  // =========================================================

  makeDraggable(jQuery(".drag_drop_options div.draggable_div"));

  // =========================================================
  // CLICK FILLED INPUT
  // RETURN OPTION TO TOP
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

        // =============================================
        // CREATE OPTION AGAIN
        // =============================================

        var $newOption = jQuery(
          '<div class="draggable_div" ' +
            'data-value="' +
            value +
            '" ' +
            'style="background-color: transparent;">' +
            value +
            "</div>",
        );

        // =============================================
        // RETURN TO OPTIONS
        // =============================================

        jQuery(".drag_drop_options").append($newOption);

        // =============================================
        // DRAGGABLE AGAIN
        // =============================================

        makeDraggable($newOption);

        // =============================================
        // CLEAR INPUT
        // =============================================

        $input.val("");

        $input.removeAttr("data-value");

        // =============================================
        // MAKE DROPPABLE AGAIN
        // =============================================

        $input.removeClass("filled_drop").addClass("droppable_div");

        // =============================================
        // DETECT
        // =============================================

        detectDragend();
      },
    );
}
