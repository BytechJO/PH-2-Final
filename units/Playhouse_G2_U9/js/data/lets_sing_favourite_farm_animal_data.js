var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_67/farm_song.mp3",
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

var mcq_data = {
  layout: 1,

  numinrow: [[1]],

  mainTitle: "../images/icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/page_67/CONVERSATION.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> " +
    "Let’s sing! Then circle your favourite farm animal!",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_67/farm_song.mp3",

  // اختيار واحد فقط
  select: "single",

  shape: "circle",

  bgcolor: "none",

  numbering: "none",

  numberstartfrom: 1,

  numberofcolumns: 1,

  image: "no",

  imageposition: "back",

  questions: [
    {
      question:
        "<div class='song_lines'>" +
        "<div class='song_line'>" +
        "The cows on the farm go " +
        "moo, moo, moo ..." +
        "</div>" +
        "<div class='song_line song_indent'>" +
        "Moo, moo, moo ... Moo, moo, moo." +
        "</div>" +
        "<div class='song_line'>" +
        "The cows on the farm go " +
        "moo, moo, moo," +
        "</div>" +
        "<div class='song_line'>" +
        "all around the farm." +
        "</div>" +
        "</div>",

      image: "no",

      /*
       * قيمة وهمية فقط حتى يبقى mcq.js متوافقًا.
       * لا يوجد Check ولا تقييم فعلي في الصفحة.
       */
      answer: [1],

      audio: "../audios/page_67/farm_song.mp3",

      audioenable: "default",

      options: [
        {
          text: "moo",

          image: "../images/pages/activities/cow.png",

          audio: "no",

          audioenable: "default",
        },

        {
          text: "cluck",

          image: "../images/pages/activities/chick.png",

          audio: "no",

          audioenable: "default",
        },

        {
          text: "quack",

          image: "../images/pages/activities/duck.png",

          audio: "no",

          audioenable: "default",
        },

        {
          text: "miaow",

          image: "../images/pages/activities/cat.png",

          audio: "no",

          audioenable: "default",
        },

        {
          text: "baa",

          image: "../images/pages/activities/baa.png",

          audio: "no",

          audioenable: "default",
        },
      ],
    },
  ],
};
