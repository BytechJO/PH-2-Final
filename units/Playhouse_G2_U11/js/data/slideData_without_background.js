var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl:
        "../audios/page_86/a-is-the-bee-on-the-flower_Ng0Z8kN3.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};

var reading_data = {
  mainTitle:
    "../images/icons/phonics_main_title.png",

  mainTitleIcon:
    "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio:
    "../audios/page_86/PHONICS.mp3",

  subTitleTextLeft:
    "<span class='red_text'>4</span> Read and say with a friend. Then draw the bee.",

  subTitleTextRight: "",

  subTitleIcons: [""],

  subTitleAudio:
    "../audios/page_86/4_Read_and_say_with_a_friend_Then_draw_the_bee.mp3",

  slides: [
    {
      layout: "grid_columns",

      mainImage: [],

      parentClassName:
        "full_grid_without_background_image",

      group_styles: "",

      audio: [
        "../audios/page_86/A_Is_the_bee_on_the_flower.mp3",

        "../audios/page_86/B_Yes_the_bee_is_on_the_flower.mp3",

        "../audios/page_86/A_Where_is_the_bee_now.mp3",

        "../audios/page_86/B_The_bee_is_above_the_flower.mp3",

        "../audios/page_86/A_Where_is_the_bee_now_-_1.mp3",

        "../audios/page_86/B_Now_the_bee_is_in_the_hive.mp3",

        /*
         * العنصر السابع هو منطقة الرسم،
         * لذلك لا يحتاج صوت.
         */
        "",
      ],

      word: [
        "<span class='red_text'>A:</span> Is the bee on the flower?",

        "<span class='red_text'>B:</span> Yes, the bee is on the flower.",

        "<span class='red_text'>A:</span> Where is the bee now?",

        "<span class='red_text'>B:</span> The bee is above the flower.",

        "<span class='red_text'>A:</span> Where is the bee now?",

        "<span class='red_text'>B:</span> Now, the bee is in the hive.",

        /*
         * نفس مكان الصورة القديم داخل word،
         * لكن أضفنا canvas فوقها وأزرار الرسم.
         */
        "<div class='bee_drawing_activity' " +
          "style='margin-top:-375px; height:410px;'>" +

          "<div class='bee_drawing_toolbar'>" +

            "<button " +
              "type='button' " +
              "class='bee_draw_tool active' " +
              "data-tool='pencil'>" +
              "Pencil" +
            "</button>" +

            "<button " +
              "type='button' " +
              "class='bee_draw_tool' " +
              "data-tool='eraser'>" +
              "Eraser" +
            "</button>" +

            "<button " +
              "type='button' " +
              "class='bee_clear_drawing'>" +
              "Clear" +
            "</button>" +

          "</div>" +

          "<div class='bee_drawing_stage'>" +

            "<img " +
              "src='../images/pages/activities/7-img-1.png' " +
              "class='bee_drawing_image' " +
              "draggable='false' " +
              "alt='Draw the bee'>" +

            "<canvas class='bee_drawing_canvas'></canvas>" +

          "</div>" +

        "</div>",
      ],

      /*
       * نفس الترتيب القديم تمامًا:
       * 6 أسطر للمحادثة + السطر السابع للصورة.
       */
      imagePlacePos: [
        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [8, 4],
          colData: [1, 0],
        },

        {
          colWidth: [7, 5],
          colData: [0, 1],
        },
      ],
    },
  ],
};