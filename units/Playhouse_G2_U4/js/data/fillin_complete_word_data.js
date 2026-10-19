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
  sentenceTitleAudio: "../audios/page_36/Sentence_Building.mp3",

  mainTitleAudio: "../audios/page_36/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘<span class='red_text'>u</span>’ and the ‘<span class='red_text'>magic e</span>’ to complete the words. Then write the words.",
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
      text: "t[_]n[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p36_3_0.png",
      answer: ["u", "e", "tune"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "r[_]l[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p36_3_1.png",
      answer: ["u", "e", "rule"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "m[_]l[_][_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p36_3_2.png",
      answer: ["u", "e", "mule"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "pr[_]n[_][_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p36_3_3.png",
      answer: ["u", "e", "prune"],
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

  items: [
    "<img src='../images/pages/sb-icons/conv_main_title_icon.png' " +
      "class='readHighlightsBtn imgToggle gelatine' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_36/PLAYHOUSE_2_SB_UNIT_4_TRACK_06_01.mp3'>",

    "<img src='../images/pages/page-6/conv1.png' class='showImg1 bubble_img left_bubble_img'>",

    "<span class='middle_sentence'>" +
      "<span class='sentence_audio_box' data-audio='../audios/page_36/Sentences_must_have_a_subject_and_a_verb.mp3'>" +
      "Sentences must have a subject and a verb." +
      "</span>" +
      "</span>",

    "<div class='sentence_examples'>" +
      "<div class='example_audio_sentence' data-audio='../audios/page_36/My_cousins_play_a_tune.mp3'>" +
      "My cousin<span style='color: #D1232A;'>s</span>&nbsp;" +
      "<span style='color: #D1232A;'>play</span>&nbsp;a tune." +
      "</div>" +
      "<div class='example_audio_sentence' data-audio='../audios/page_36/My_cousin_plays_a_tune.mp3'>" +
      "My cousin&nbsp;<span style='color: #D1232A;'>plays</span>&nbsp;a tune." +
      "</div>" +
      "</div>",

    "<img src='../images/pages/page-6/conv2.png' class='showImg2 bubble_img right_bubble_img'>",

    "<img src='../images/pages/sb-icons/conv_main_title_icon.png' " +
      "class='readHighlightsBtn imgToggle gelatine' " +
      "data-img='showImg2' " +
      "data-audio='../audios/page_36/i_rhe_supject_-_an_to_the_verb.mp3'>",
  ],
};
