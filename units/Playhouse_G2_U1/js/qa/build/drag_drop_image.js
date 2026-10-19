function initActivity(activity) {
  //Options
  drag_drop_options = '<div class="drag_drop_options sticky-top">';
  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" data-value="' +
      value +
      '" style="background-color: transparent;">' +
      value +
      "</div>";
  });
  drag_drop_options += "</div>";

  //Questions
  drag_drop_questions =
    '<div class="drag_drop_questions"><ul  class="que d-flex flex-wrap">';
  img_array = activity.images;
  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions +=
      '<li class="item d-flex flex-column"><ul style="padding: 20px;">';
    if (typeof values == "string") {
      var has_single_text = "";
      if ((values[0] == "_") == true) {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li style="width: 100%;" class="' +
        has_single_text +
        '"><div class="droppable_label">';
      drag_drop_questions +=
        '<div class="i_container"><div class="i_row"><div class="l_col"><img src="' +
        img_array[key] +
        '" class="qus_img"></div><div class="r_col"><div class="droppable_text_div">';
      drag_drop_questions += values.replace(
        /___/g,
        '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">',
      );
      drag_drop_questions += "</div></div></div></div>";
      drag_drop_questions += "</div></li>";
    } else {
      jQuery.each(values, function (k, v) {
        var v = v + "";
        drag_drop_questions +=
          '<li class="drag_drop_multiple">' +
          v.replace(
            "___",
            ' <input readonly type="text" class="droppable_div" />',
          ) +
          "</li>";
      });
    }
    drag_drop_questions += "</ul></li>";
  });
  drag_drop_questions += "</ul></div>";

  var html = "";
  html += '<div class="">';

  /*if(
		(typeof(_activity_json.layout)!="undefined")&&
		(_activity_json.layout=="top")
	){
		html += drag_drop_options + drag_drop_questions;
	} else {
		html += drag_drop_questions + drag_drop_options;
	}*/

  html += drag_drop_options + drag_drop_questions;

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
  writeHtml(activity, html);
  setDefaultAnswerDragDrop(activity);

  //for mobile view
  if (window.outerWidth <= 600) {
    //jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
  }

  function makeOptionsDraggable() {
    jQuery(".drag_drop_options .draggable_div").draggable({
      container: jQuery(".activity-content"),
      revert: true,
      placeholder: true,
      droptarget: ".drag_drop_questions input.droppable_div",

      drop: function (evt, droptarget) {
        var $option = jQuery(this);
        var $dropTarget = jQuery(droptarget);
        var value = $option.attr("data-value") || $option.text().trim();

        // وضع الكلمة داخل الفراغ
        $dropTarget.val(value);

        // تخزين القيمة داخل الفراغ
        $dropTarget.attr("data-value", value);

        // منع وضع كلمة ثانية داخل نفس الفراغ
        $dropTarget
          .removeClass("droppable_div")
          .addClass("filled_droppable_div");

        // حذف الكلمة من قائمة الخيارات
        $option.remove();

        detectDragend();
      },
    });
  }

  // تشغيل السحب أول مرة
  makeOptionsDraggable();

  // عند الضغط على كلمة موضوعة داخل الفراغ
  jQuery(document)
    .off("click.returnDroppedWord")
    .on(
      "click.returnDroppedWord",
      ".drag_drop_questions input.filled_droppable_div",
      function () {
        var $input = jQuery(this);
        var value = $input.attr("data-value") || $input.val().trim();

        if (value === "") {
          return;
        }

        // إعادة الكلمة إلى قائمة الخيارات
        var $returnedOption = jQuery(
          '<div class="draggable_div" ' +
            'data-value="' +
            value +
            '" ' +
            'style="background-color: transparent;">' +
            value +
            "</div>",
        );

        jQuery(".drag_drop_options").append($returnedOption);

        // تفريغ الفراغ وإعادة تفعيله
        $input
          .val("")
          .removeAttr("data-value")
          .removeClass("filled_droppable_div")
          .addClass("droppable_div");

        // تفعيل السحب للكلمة التي رجعت
        $returnedOption.draggable({
          container: jQuery(".activity-content"),
          revert: true,
          placeholder: true,
          droptarget: ".drag_drop_questions input.droppable_div",

          drop: function (evt, droptarget) {
            var $option = jQuery(this);
            var $dropTarget = jQuery(droptarget);
            var droppedValue =
              $option.attr("data-value") || $option.text().trim();

            $dropTarget
              .val(droppedValue)
              .attr("data-value", droppedValue)
              .removeClass("droppable_div")
              .addClass("filled_droppable_div");

            $option.remove();

            detectDragend();
          },
        });

        detectDragend();
      },
    );

  // jQuery('.content_wrap').scroll(function(){
  // 	console.log(jQuery(this).scrollTop());
  //      if(jQuery(this).scrollTop()>72){
  //      	jQuery('.drag_drop_options').addClass('drag_drop_options_fixed');
  //      } else {
  //      	jQuery('.drag_drop_options').removeClass('drag_drop_options_fixed');
  //      }
  // });

  // disableBtns();    //may be returned me
}

//Example 1
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the rhyme",
"type":"drag_drop",
"questions":[
				[
					["Pizza, pizza, pizza,<br /> We like it hot or ___."],
					["Pizza, pizza, pizza,<br /> For people young and ___."]
				],
				[
					["Pizza, pizza, pizza,<br /> Have a slice or ___."],
					["Pizza, pizza, pizza,<br /> Enough for me and ___!"]
				]
			],
"options": ["cold", "two", "old", "you"],
"answers": ["cold", "old", "two", "you"],
"default_answer": {1:"cold"}
};
*/

//Example 2
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the sentences.",
"type":"drag_drop",
"questions":[
				"The girl’s body ___ the sun from shining on the ground",
				"ometimes your shadow is in ___ of, in ___ of, or ___you"
			],
"options": ["back", "stops", "beside", "front","back", "stops", "beside", "front"],
"answers": ["stops", "front", "back", "beside"],
"default_answer":{2:"front"}
};
*/

//Example 3
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete",
"type":"drag_drop",
"questions":[
				"___ choo-choo",
				"___ Rabbit",
				"___ cricket",
				"___ airplane",
				"___ Bear",
				"___ cat",
				"___ pine tree"
			],
"options": ["Oliver", "speedy", "green", "fuzzy gray", "ding-a-ling", "little black", "Bubby"],
"answers": ["ding-a-ling", "Oliver", "little black", "speedy", "Bubby", "fuzzy gray", "green"],
"default_answer": {3:"little black"}
};
*/
