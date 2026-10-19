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
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_41/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘<span class='red_text'>oo</span>’ to complete the words. Then write the words.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/under.mp3",
  image: "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  // "defaultAnswer": [],
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "f[_][_]t[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/word_1.png",
      answer: ["o", "o", "foot"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "b[_][_]k[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/word_2.png",
      answer: ["o", "o", "book"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "w[_][_]d[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/word_3.png",
      answer: ["o", "o", "wood"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "c[_][_]k[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/word_4.png",
      answer: ["o", "o", "cook"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
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
  main_title_audio: "../audios/page_41/Sentence_Building.mp3",
  items: [
    // الضفدع الأول
    "<img src='../images/pages/page-3/Sen-1-img.png' " +
      "class='sentenceTrigger' " +
      "data-target='sentenceImage1' " +
      "data-audio='../audios/page_41/We_use_adjectives_with_FEEL.mp3'>",

    // الصورة الأولى
    "<img src='../images/pages/page-3/Sen-2-img.png' " +
      "id='sentenceImage1' " +
      "class='sentenceToggleImage text_img_1'>",

    "<div class='sentenceAudioGroup'>" +
      "<div class='clickableSentence bold_text' " +
      "data-audio='../audios/page_41/Feel_vs._have_got.mp3'>" +
      "feel vs. have got" +
      "</div>" +
      "<div class='clickableSentence bold_text' " +
      "data-audio='../audios/page_41/I__feel_sick.mp3'>" +
      "I <span class='red_text'>feel</span> " +
      "<span class='green_text'>sick</span>." +
      "</div>" +
      "<div class='clickableSentence bold_text' " +
      "data-audio='../audios/page_41/I_have_got_a_headache.mp3'>" +
      "I <span class='red_text'>have got</span> " +
      "<span class='green_text'>a headache</span>." +
      "</div>" +
      "</div>",

    // الصورة الثانية التي تظهر وتختفي
    "<img src='../images/pages/page-3/Sen-3-img.png' " +
      "id='sentenceImage2' " +
      "class='sentenceToggleImage text_img_2'>",

    // الضفدع الثاني
    "<img src='../images/pages/page-3/Sen-4-img.png' " +
      "class='sentenceTrigger' " +
      "data-target='sentenceImage2' " +
      "data-audio='../audios/page_41/We_use_nouns_with_have_-_has_got.mp3'>",
  ],
};
