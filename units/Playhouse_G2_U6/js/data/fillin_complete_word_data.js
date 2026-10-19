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
  mainTitleAudio: "../audios/page_48/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘ai’ to complete the words. Then write the words.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/under.mp3",
  image: "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "sp[_]n[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-1.png",
      answer: ["ai", "Spain"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "r[_]n[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-2.png",
      answer: ["ai", "rain"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "p[_]l[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-3.png",
      answer: ["ai", "pail"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "t[_]l[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-4.png",
      answer: ["ai", "tail"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
  ],
  sentenceTitleAudio: "../audios/page_48/Sentence_Building.mp3",

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
  items: [
    "<img src='../images/pages/sb-icons/conv_main_title_icon.png' class='readHighlightsBtn imgToggle gelatine' data-img='showImg1'>",

    "<img src='../images/pages/page-3/Sen-2-img.png' " +
      "class='showImg1 bubble_img left_bubble_img' " +
      "data-audio='../audios/page_48/Adverbs_an_requency_tell_how_often_somethin_happens.mp3'>",

    "<span class='middle_sentence'>" +
      "<span class='middle_sentence_audio' " +
      "data-audio='../audios/page_48/Adverbs_anFrequency.mp3'>" +
      "<span class='frequency_title'>Adverbs of Frequency</span>" +
      "</span>" +
      "</span>",

    "<div class='sentence_image_block'>" +
      "<div class='image_sentence image_sentence_audio' " +
      "data-audio='../audios/page_48/She_always_feels_happy.mp3'>" +
      "<b>She </b>" +
      "<span class='word_red'>always</span>" +
      "<b> feels happy!</b>" +
      "</div>" +
      "</div>",

    "<img src='../images/pages/page-3/Sen-3-img.png' " +
      "class='showImg2 bubble_img right_bubble_img' " +
      "data-audio='../audios/page_48/Adverbs_an_requency_go_before_the_verb.mp3'>",
    "<img src='../images/pages/sb-icons/conv_main_title_icon.png' class='readHighlightsBtn imgToggle gelatine' data-img='showImg2'>",
  ],
};
