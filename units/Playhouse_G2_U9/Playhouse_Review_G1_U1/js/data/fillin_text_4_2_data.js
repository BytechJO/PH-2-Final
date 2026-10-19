var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1]],
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft: "<span class='red_text'>3</span> Look and write.",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  image: "",
  imageposition: "back",

  defaultAnswer: 1,
  numbering: "none",
  numberstartfrom: 1,

  options: [],

  parentClassName: "letter_boxes_activity",

  questions: [
    {
      singleword: false,

      // خمس مربعات لكلمة paint
      text: "[_][_][_][_][_]",

      textaudios: [],
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/Asset_30.png",

      // كل حرف جواب لحاله
      answer: ["b", "l", "a", "c", "k"],

      alternateanswer: [[], [], [], [], []],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,

      // أربع مربعات لكلمة chew
      text: "[_][_][_][_]",

      textaudios: [],
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/Asset_31.png",

      answer: ["b", "l", "o", "w"],

      alternateanswer: [[], [], [], []],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,

      // سبع مربعات لكلمة blanket
      text: "[_][_][_][_][_][_][_]",

      textaudios: [],
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/Asset_32.png",

      answer: ["b", "l", "a", "n", "k", "e", "t"],

      alternateanswer: [[], [], [], [], [], [], []],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",
    },
  ],
};
