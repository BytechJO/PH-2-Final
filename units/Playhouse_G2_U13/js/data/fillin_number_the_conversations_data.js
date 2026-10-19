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

  numinrow: [[3], [3]],

  mainTitle: "../images/icons/gramprac_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "80px",
  },

  mainTitleAudio: "../audios/page_101/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft:
    '<span class="red_text">2</span> Number the conversations in order.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  image: "",

  imageposition: "back",

  defaultAnswer: 1,

  numbering: "none",

  numberstartfrom: 1,

  options: [],

  questions: [
    {
      singleword: false,

      text:
        "<span class='conversation_group_number'>1</span>" +
        "<span class='speech_text'>I was born in France.</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["3"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },

    {
      singleword: false,

      text:
        "<span class='speech_text'>" +
        "Hi! Where were<br>you born?" +
        "</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["1"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },

    {
      singleword: false,

      text:
        "<span class='speech_text'>" +
        "I was born in Canada.<br>" +
        "Where were you born?" +
        "</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["2"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },

    {
      singleword: false,

      text:
        "<span class='conversation_group_number'>2</span>" +
        "<span class='speech_text'>" +
        "I was born in<br>Japan." +
        "</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["3"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },

    {
      singleword: false,

      text:
        "<span class='speech_text'>" +
        "I was born in New<br>" +
        "Zealand. How<br>" +
        "about you?" +
        "</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["2"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },

    {
      singleword: false,

      text:
        "<span class='speech_text'>" +
        "Hi! Where were<br>you born?" +
        "</span>[_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["1"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "number",
    },
  ],
};
