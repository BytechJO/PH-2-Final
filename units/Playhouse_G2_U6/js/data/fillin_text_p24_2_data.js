var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3"
    },
    {
      url: ""
    },
    {
      url: ""
    },
    {
      url: ""
    }
  ]
};

var fillin_data = {
  layout: 1,

  numinrow: [[1], [1], [1]],

  mainTitle: "../images/icons/phonics_main_title.png",

  mainTitleIcon:
    "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px"
  },

  mainTitleAudio: "../audios/page_48/PHONICS.mp3",

  subTitleTextLeft:
    '<span class="red_text">1</span> Unscramble the sentences.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  image: "",

  imageposition: "back",

  // السؤال الأول محلول تلقائيًا
  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  questions: [
    {
      singleword: false,

      text: "[_]",

      textaudios: [
        "../audios/under.mp3"
      ],

      audio: "",

      options_words: [
        "sleepy",
        "sometimes",
        "Brenda",
        "feels"
      ],

      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3"
      ],

      audioenable: "default",

      image: "",

      answer: [
        "Brenda sometimes feels sleepy"
      ],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: ""
    },

    {
      singleword: false,

      text: "[_]",

      textaudios: [
        "../audios/under.mp3"
      ],

      audio: "",

      options_words: [
        "never",
        "feels",
        "with",
        "her",
        "sister",
        "angry",
        "She"
      ],

      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3"
      ],

      audioenable: "default",

      image: "",

      answer: [
        "She never feels angry with her sister"
      ],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: ""
    },

    {
      singleword: false,

      text: "[_]",

      textaudios: [
        "../audios/under.mp3"
      ],

      audio: "",

      options_words: [
        "mother",
        "My",
        "loses",
        "keys",
        "always",
        "her",
        "car"
      ],

      options_words_audios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3"
      ],

      audioenable: "default",

      image: "",

      answer: [
        "My mother always loses her car keys"
      ],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: ""
    }
  ]
};