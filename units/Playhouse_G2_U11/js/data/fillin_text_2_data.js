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

  numinrow: [[1], [1], [1], [1]],

  mainTitle: "../images/icons/gram_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_84/GRAMMAR.mp3",

  subTitleTextLeft:
    '<span class="red_text">3</span> Complete the sentences with the correct prepositions of place.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  image: "../images/pages/activities/4-img-1.png",

  imageposition: "front",

  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  optionsAudios: [],

  questions: [
    {
      singleword: false,

      text: "The starfish is[_]the octopus.",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      /*
       * الإجابة الأساسية
       */
      answer: ["next to"],

      /*
       * إجابات أخرى صحيحة لنفس الفراغ
       */
      alternateanswer: [["near", "beside"]],

      /*
       * يفعّل نظام الإجابات المتعددة
       * لهذا السؤال فقط
       */
      allowMultipleAnswers: true,

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "The octopus is not[_]the whale.",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["above"],

      alternateanswer: [["over","in","","near","next to"]],

      allowMultipleAnswers: true,

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "The shark is[_]the water.",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["under"],

      alternateanswer: [["in", "below"]],

      allowMultipleAnswers: true,

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "The sea animals are[_]the ocean.",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["in"],

      alternateanswer: [["inside"]],

      allowMultipleAnswers: true,

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },
  ],
};
