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
  mainTitleAudio: "../audios/page_70/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘<span class='red_text'>bl</span>’ to complete the words. Then write the words.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "[_]anket[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-1.png",

      answer: ["bl", "blanket"],
      alternateanswer: [[], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "[_]ack[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-2.png",

      answer: ["bl", "black"],
      alternateanswer: [[], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "[_]ow[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-3.png",

      answer: ["bl", "blow"],
      alternateanswer: [[], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
  ],
  main_title_audio: "../audios/page_70/Sentence_Building.mp3",

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
    // الزر الموجود على الجهة الأولى
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_70/Rhyming.mp3'>",

    // الصورة الأولى
    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1 sentence_toggle_img'>",

    // الجملة الأولى في المنتصف
    "<span " +
      "<span class='text sentence_audio_item middle_sentence_audio' " +
      "data-audio='../audios/page_70/There_is_a_bee_and_aflea_on_me.mp3'>" +
      "There is a b<span class='red_text'>ee</span> and " +
      "a flea on me!" +
      "</span>" +
      // صورة الجملة
      "<img " +
      "src='../images/pages/page-3/Sen-0-img.png' " +
      "class='text_img showImg0'>",

    // الصورة الثانية
    "<img " +
      "src='../images/pages/page-3/Sen-3-img.png' " +
      "class='text_img showImg2 sentence_toggle_img'>",

    // الزر الموجود على الجهة الثانية
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview.png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg2' " +
      "data-audio='../audios/page_70/Sometimes_they_are_not_spelt_the_same,_but_they_always_have_the_same_ending_sound_-.mp3'>",
  ],
};
