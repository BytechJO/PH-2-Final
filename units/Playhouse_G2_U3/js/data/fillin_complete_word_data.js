var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_36/demo.mp3",
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
  mainTitleAudio: "../audios/page_26/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘<span class='red_text'>o</span>’ and the ‘<span class='red_text'>magic e</span>’ to complete the words. Then write the words.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/under.mp3",
  activityheading: "",
  sentenceTitleAudio: "../audios/page_26/Sentence_Building.mp3",
  activityheading_audio: "",
  activitysubheading: "",
  activityicon: "",
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
      text: "h[_]m[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p26_3_1.png",
      answer: ["o", "e", "home"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "r[_]s[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p26_3_2.png",
      answer: ["o", "e", "rose"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 10,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "r[_]p[_][_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/p26_3_3.png",
      answer: ["o", "e", "rope"],
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
      "data-img='showImg1'>",

    "<img src='../images/pages/activities/conv3.png' " +
      "class='showImg1 bubble_img left_bubble_img' " +
      "data-audio='../audios/page_26/Regular_plural_nouns_end_in_-s.mp3'>",

    "<div class='middle_sentence person_people_titles'>" +
      "<span class='person_title person_audio_trigger' " +
      "data-audio='../audios/page_26/person.mp3'>person</span>" +
      "<span class='people_title people_audio_trigger' " +
      "data-audio='../audios/page_26/people.mp3'>people</span>" +
      "</div>",

    "<div class='person_people_images'>" +
      "<img src='../images/pages/activities/conv1.png' " +
      "class='inner_img person_img person_audio_trigger' " +
      "data-audio='../audios/page_26/person.mp3'>" +
      "<img src='../images/pages/activities/conv2.png' " +
      "class='inner_img people_img people_audio_trigger' " +
      "data-audio='../audios/page_26/people.mp3'>" +
      "</div>",

    "<img src='../images/pages/activities/conv4.png' " +
      "class='showImg2 bubble_img right_bubble_img' " +
      "data-audio='../audios/page_26/Irregular_plural.mp3'>",

    "<img src='../images/pages/sb-icons/conv_main_title_icon.png' " +
      "class='readHighlightsBtn imgToggle gelatine' " +
      "data-img='showImg2'>",
  ],
};
