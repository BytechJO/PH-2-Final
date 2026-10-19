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

  numinrow: [[1], [1], [1]],

  mainTitle: "../images/icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_36/PHONICS.mp3",

  subTitleTextLeft:
    '<span class="red_text">1</span> Rewrite the sentences correctly.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  image: "",

  imageposition: "back",

  /*
    السؤال الأول يظهر محلولًا وreadonly
  */
  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  questions: [
    {
      singleword: false,
      text: "[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      options_words: ["Yoshi", "speak", "English."],
      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],
      audioenable: "default",
      image: "",
      answer: ["Yoshi speaks English."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
    {
      singleword: false,
      text: "[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      options_words: ["The", "cat", "like", "milk."],
      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],
      audioenable: "default",
      image: "",
      answer: ["The cat likes milk."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
    {
      singleword: false,
      text: "[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      options_words: ["They", "rides", "a", "bike."],
      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],
      audioenable: "default",
      image: "",
      answer: ["They ride a bike."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
  ],
};
