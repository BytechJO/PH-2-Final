var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var mcq_data = {
  layout: 1,

  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: {
    right: "-25px",
  },
  mainTitleAudio: "../audios/page_14/PHONICS.mp3",

  subTitleTextLeft:
    "<span class='red_text'>2</span> Underline the nouns and circle the verbs.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  activityheading: "",
  activitysubheading: "",

  numbering: "number",
  numberstartfrom: 1,

  questions: [
    {
      image: "../images/pages/activities/p14_4_1.png",

      answers: {
        underline: [1, 3], // Max + football
        circle: [2], // plays
      },

      options: [
        {
          text: "Max",
        },
        {
          text: "plays",
        },
        {
          text: "football.",
        },
      ],
    },

    {
      image: "../images/pages/activities/p14_4_2.png",

      answers: {
        underline: [2, 5], // teacher + book
        circle: [3], // reads
      },

      options: [
        {
          text: "The",
        },
        {
          text: "teacher",
        },
        {
          text: "reads",
        },
        {
          text: "a",
        },
        {
          text: "book.",
        },
      ],
    },
  ],
};
