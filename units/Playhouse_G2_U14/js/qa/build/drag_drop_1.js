function initActivity(activity) {

  // =========================================================
  // OPTIONS TEXT
  // =========================================================

  var drag_drop_options = "";

  if (
    activity.text != undefined &&
    activity.text != ""
  ) {

    drag_drop_options += '<div class="">';

    drag_drop_options += activity.text;

    drag_drop_options += "</div>";
  }


  // =========================================================
  // OPTIONS
  // =========================================================

  drag_drop_options +=
    '<div class="drag_drop_options sticky-top">';


  jQuery.each(
    activity.options,
    function (key, value) {

      drag_drop_options +=
        '<div class="draggable_div" ' +
        'data-qno="' + key + '" ' +
        'data-value="' + value + '" ' +
        'style="background-color: transparent;">' +
        value +
        "</div>";
    }
  );


  drag_drop_options +=
    "</div>";


  // =========================================================
  // QUESTIONS
  // =========================================================

  var drag_drop_questions =
    '<div class="drag_drop_questions">' +
    '<ul class="d-flex flex-column q_group">';


  var img_array =
    activity.images;


  jQuery.each(
    activity.questions,
    function (key, values) {

      drag_drop_questions +=
        '<li class="que d-flex flex-wrap" style="width:950px;">' +
        '<ul>';


      // =====================================================
      // STRING QUESTION
      // =====================================================

      if (
        typeof values == "string"
      ) {

        var has_single_text =
          "";


        if (
          values[0] == "_"
        ) {

          has_single_text =
            "has_single_text";
        }


        drag_drop_questions +=
          '<li style="width:100%;" class="' +
          has_single_text +
          '">';


        drag_drop_questions +=
          '<div class="droppable_label">';


        drag_drop_questions +=
          '<div class="i_container">' +

          '<div class="i_row d-flex flex-wrap">' +

          '<div class="l_col"></div>' +

          '<div class="r_col">' +

          '<div class="droppable_text_div">';


        drag_drop_questions +=
          values.replace(
            /___/g,

            '<input readonly ' +
            'type="text" ' +
            'class="droppable_div" />' +

            '</div>' +

            '<div class="droppable_label">'
          );


        drag_drop_questions +=
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";


        drag_drop_questions +=
          "</div>";


        drag_drop_questions +=
          "</li>";


      } else {

        // ===================================================
        // MULTIPLE QUESTION
        // ===================================================

        jQuery.each(
          values,
          function (k, v) {

            var value =
              v + "";


            drag_drop_questions +=
              '<li class="drag_drop_multiple">' +

              value.replace(
                "___",

                ' <input readonly ' +
                'type="text" ' +
                'class="droppable_div" />'
              )

              +

              "</li>";
          }
        );
      }


      drag_drop_questions +=
        "</ul></li>";
    }
  );


  drag_drop_questions +=
    "</ul></div>";


  // =========================================================
  // HTML
  // =========================================================

  var html =
    "";


  html +=
    '<div class="main d-flex flex-column" style="height:100%;">';


  html +=
    drag_drop_options +
    drag_drop_questions;


  // =========================================================
  // BACKGROUND IMAGE
  // =========================================================

  if (
    typeof activity.background_image != "undefined" &&
    activity.background_image != ""
  ) {

    html +=
      '<div class="image_container">';


    html +=
      '<img src="../images/pages/activities/' +
      activity.background_image +
      '" />';


    html +=
      "</div>";
  }


  html +=
    "</div>";


  // =========================================================
  // WRITE HTML
  // =========================================================

  writeHtml(
    activity,
    html
  );


  // =========================================================
  // DEFAULT ANSWERS
  // =========================================================

  setDefaultAnswerDragDrop(
    activity
  );


  // =========================================================
  // MOBILE
  // =========================================================

  if (
    window.outerWidth <= 600
  ) {

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
  // MAKE OPTIONS DRAGGABLE
  // =========================================================

  function makeDraggable(element) {

    jQuery(element).draggable({

      container:
        jQuery(
          ".activity-content"
        ),

      revert:
        true,

      placeholder:
        true,

      // كل الـ inputs تضل تستقبل drag
      droptarget:
        ".drag_drop_questions input.droppable_div",


      // =====================================================
      // DROP
      // =====================================================

      drop: function (
        evt,
        droptarget
      ) {

        var $newWord =
          jQuery(this);


        var $input =
          jQuery(
            droptarget
          );


        var newWordValue =
          $newWord.attr(
            "data-value"
          );


        var newWordQno =
          $newWord.attr(
            "data-qno"
          );


        // =================================================
        // إذا الخانة فيها كلمة قديمة
        // رجعها للخيارات أولًا
        // =================================================

        var oldWordQno =
          $input.attr(
            "data-word-qno"
          );


        if (
          oldWordQno !== undefined &&
          oldWordQno !== null &&
          oldWordQno !== ""
        ) {

          jQuery(
            '.drag_drop_options .draggable_div[data-qno="' +
            oldWordQno +
            '"]'
          ).css({

            visibility:
              "visible",

            pointerEvents:
              "auto"
          });
        }


        // =================================================
        // حط الكلمة الجديدة بالخانة
        // =================================================

        $input
          .val(
            newWordValue
          )
          .addClass(
            "filled"
          )
          .attr(
            "data-word-qno",
            newWordQno
          )
          .attr(
            "data-dropped-value",
            newWordValue
          );


        // =================================================
        // اخفي الكلمة من الخيارات
        // ما بنحذفها حتى ترجع بنفس مكانها
        // =================================================

        setTimeout(
          function () {

            $newWord.css({

              visibility:
                "hidden",

              pointerEvents:
                "none"
            });


            detectDragend();

          },
          0
        );
      }
    });
  }


  // =========================================================
  // INITIAL DRAGGABLE
  // =========================================================

  makeDraggable(
    jQuery(
      ".drag_drop_options .draggable_div"
    )
  );


  // =========================================================
  // CLICK ON FILLED INPUT
  // RETURN WORD TO OPTIONS
  // =========================================================

  jQuery(
    ".drag_drop_questions"
  )
    .off(
      "click.returnDragOption",
      "input.droppable_div.filled"
    )
    .on(
      "click.returnDragOption",
      "input.droppable_div.filled",
      function () {

        var $input =
          jQuery(this);


        var wordQno =
          $input.attr(
            "data-word-qno"
          );


        // ===============================================
        // رجع الكلمة للخيارات
        // ===============================================

        if (
          wordQno !== undefined &&
          wordQno !== null &&
          wordQno !== ""
        ) {

          jQuery(
            '.drag_drop_options .draggable_div[data-qno="' +
            wordQno +
            '"]'
          ).css({

            visibility:
              "visible",

            pointerEvents:
              "auto"
          });
        }


        // ===============================================
        // فضي الخانة
        // ===============================================

        $input
          .val(
            ""
          )
          .removeClass(
            "filled"
          )
          .removeAttr(
            "data-word-qno"
          )
          .removeAttr(
            "data-dropped-value"
          );


        // ===============================================
        // شيل نتيجة check القديمة لو موجودة
        // ===============================================

        jQuery(
          ".activity_result"
        ).remove();


        // ===============================================
        // UPDATE
        // ===============================================

        detectDragend();
      }
    );


  // =========================================================
  // SENTENCE IMAGE
  // =========================================================

  showSentenceImg();
}



// ===========================================================
// SHOW SENTENCE IMAGE
// ===========================================================

function showSentenceImg() {

  $(document).ready(
    function () {

      $(".imgToggle")
        .off(
          "click.sentenceImg"
        )
        .on(
          "click.sentenceImg",
          function () {

            var imgName =
              $(this).data(
                "img"
              );


            $("." + imgName)
              .fadeToggle(
                1000
              );
          }
        );
    }
  );
}