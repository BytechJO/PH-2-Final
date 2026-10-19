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

  // ثلاثة أسئلة في صف واحد
  numinrow: [[1, 1, 1]],

  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_92/PHONICS.mp3",

  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;" +
    "Write '<span class='red_text'>or</span>' to complete the words. " +
    "Then write the words.",

  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/under.mp3",

  image: "",
  imageposition: "back",

  // لا يوجد ترقيم ظاهر بجانب الصور
  numbering: "none",
  numberstartfrom: "a",

  options: [],
  optionsAudios: [],

  questions: [
    {
      singleword: false,

      // sh + or + ts = shorts
      text: "sh[_][_]ts",
      textFront: "",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-1.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["o", "r", "shorts"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,

      // p + or + ch = porch
      text: "p[_][_]ch",
      textFront: "",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-2.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["o", "r", "porch"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,

      // t + or + ch = torch
      text: "t[_][_]ch",
      textFront: "",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-3.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["o", "r", "torch"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },
  ],

  main_title_text: [
    "S",
    "e",
    "n",
    "t",
    "e",
    "n",
    "c",
    "e",
    "&nbsp;",
    "B",
    "u",
    "i",
    "l",
    "d",
    "i",
    "n",
    "g",
  ],

  sentenceTitleAudio: "../audios/page_92/Sentence_Building.mp3",

  items: [
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_92/You_can_make_many_adverbs_by_adding_-ly_to_an_adjective.mp3'" +
      ">",

    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1 sentence_building_image' " +
      "data-audio='../audios/page_80/Commas_keep_sentences_in_order.mp3'" +
      ">",

    "<span class='text sentence_building_text'>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_92/The_lion_leaped_from_the_bush_quickly.mp3'>" +
      "The lion leaped from<br>" +
      "the bush <span class='red_text'>quickly</span>." +
      "</span><br><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_92/The_lion_quickly_leaped_from_the_bush.mp3'>" +
      "The lion <span class='red_text'>quickly</span> leaped<br>" +
      "from the bush." +
      "</span>" +
      "</span>",

    "<img " +
      "src='../images/pages/page-3/Sen-3-img.png' " +
      "class='text_img showImg2 sentence_building_image' " +
      "data-audio='../audios/page_80/Without_commas,_sentences_can_get_confusing.mp3'" +
      ">",

    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview.png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg2' " +
      "data-audio='../audios/page_92/That‘s_right!_And_they_can_go_before_the_verb_or_after_the_verb.mp3'" +
      ">",
  ],
};
