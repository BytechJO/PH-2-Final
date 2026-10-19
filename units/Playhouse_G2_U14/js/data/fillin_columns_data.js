var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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

var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: {
    right: "80px",
  },
  mainTitleAudio: "../audios/page_107/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft:
    '<span class="red_text">1</span> Add ‘<span class="red_text">-ed</span>’ to the verbs. Rewrite the sentences.',

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  defaultAnswer: "",
  leftList: "",
  image: "",

  questions: [
    {
      textfront: "We play football, baseball and volleyball on Saturday.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["We played football, baseball and volleyball on Saturday."],

      strictcase: "no",
      type: "text",
    },
    {
      textfront: "Last month, I clean my room every day except Monday.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["Last month, I cleaned my room every day except Monday."],

      strictcase: "no",
      type: "text",
    },
    {
      textfront: "I listen to my mum.",

      audio: "../audios/under.mp3",
      audioenable: "default",
      image: "",

      answer: ["I listened to my mum."],

      strictcase: "no",
      type: "text",
    },
  ],
};
