var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_77/PLAYHOUSE_2_SB_UNIT_10_TRACK_03_01.mp3",
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

var mcq_dinosaurs_data = {
  layout: 1,

  mainTitle: "../images/icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/page_77/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="red_text">2</span> ' +
    "Listen to the dinosaurs. " +
    "<b>Colour the correct boxes.</b>",

  subTitleTextRight: "",

  subTitleIcons: ["../images/pages/sb-icons/conv_1_icon.png"],

  subTitleAudio: "../audios/page_77/2_Listen_to_the_dinosaurs._Colour_the_correct_boxes.mp3",

  questions: [
    {
      image: "../images/pages/activities/10.png",

      alt: "Flying dinosaur",

      options: [
        { text: "long" },
        { text: "round" },
        { text: "flat" },
        { text: "big" },
      ],

      answer: [1, 2],
    },

    {
      image: "../images/pages/activities/12.png",

      alt: "Long-neck dinosaur",

      options: [
        { text: "round" },
        { text: "long" },
        { text: "short" },
        { text: "flat" },
      ],

      answer: [2,4],
    },

    {
      image: "../images/pages/activities/11.png",

      alt: "Large dinosaur",

      options: [
        { text: "big" },
        { text: "short" },
        { text: "scary" },
        { text: "flat" },
      ],

      answer: [1, 3],
    },

    {
      image: "../images/pages/activities/13.png",

      alt: "Armoured dinosaur",

      options: [
        { text: "short" },
        { text: "long" },
        { text: "scary" },
        { text: "round" },
      ],

      answer: [1, 2],
    },
  ],
};
