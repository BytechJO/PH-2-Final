var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "",
    },
  ],
};

var mcq_data = {
  layout: 1,

  shape: "cross",
  bgcolor: "none",
  showicon: "true",

  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "0px",
  },

  mainTitleAudio: "../audios/page_46/GRAMMAR.mp3",

  subTitleTextLeft:
    "<span>2</span> Read and circle the correct adverb.",

  subTitleTextRight: "",

  subTitleIcons: ["../images/pages/sb-icons/adv_icon_1.png"],

  subTitleAudio: "",

  bottomText:
    "What about you? How often do you do the things in the pictures above?",

  questions: [
    {
      image: "../images/pages/activities/adverb_picture_1.jpg",

      label: "eat pizza",

      days: [
        {
          text: "Sunday",
          checked: true,
        },
        {
          text: "Monday",
          checked: true,
        },
        {
          text: "Tuesday",
          checked: true,
        },
        {
          text: "Wednesday",
          checked: true,
        },
        {
          text: "Thursday",
          checked: true,
        },
        {
          text: "Friday",
          checked: true,
        },
        {
          text: "Saturday",
          checked: true,
        },
      ],

      options: ["always", "sometimes", "never"],

      answer: "1",

      audio: "",
      audioenable: "default",
    },

    {
      image: "../images/pages/activities/adverb_picture_2.png",

      label: "watch football matches",

      days: [
        {
          text: "Sunday",
          checked: false,
        },
        {
          text: "Monday",
          checked: false,
        },
        {
          text: "Tuesday",
          checked: false,
        },
        {
          text: "Wednesday",
          checked: false,
        },
        {
          text: "Thursday",
          checked: false,
        },
        {
          text: "Friday",
          checked: false,
        },
        {
          text: "Saturday",
          checked: false,
        },
      ],

      options: ["always", "sometimes", "never"],

      answer: "3",

      audio: "",
      audioenable: "default",
    },

    {
      image: "../images/pages/activities/adverb_picture_3.jpg",

      label: "buy lunch at school",

      days: [
        {
          text: "Sunday",
          checked: true,
        },
        {
          text: "Monday",
          checked: true,
        },
        {
          text: "Tuesday",
          checked: false,
        },
        {
          text: "Wednesday",
          checked: false,
        },
        {
          text: "Thursday",
          checked: true,
        },
        {
          text: "Friday",
          checked: false,
        },
        {
          text: "Saturday",
          checked: false,
        },
      ],

      options: ["always", "sometimes", "never"],

      answer: "2",

      audio: "",
      audioenable: "default",
    },
  ],
};
