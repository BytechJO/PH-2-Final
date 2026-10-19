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
  mainTitleAudio: "../audios/page_114/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write the ‘<span class='red_text'>-ck</span>’ to complete the words. Then write the words.",
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
      text: "du[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/7-img-1.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["c", "k", "duck"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,
      text: "si[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/7-img-2.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["c", "k", "sick"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,
      text: "so[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/7-img-3.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["c", "k", "sock"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,
      text: "o'clo[_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/7-img-4.png",

      writeFullWord: true,
      fullWordMaxlength: 15,

      answer: ["c", "k", "o'clock"],
      alternateanswer: [[], [], ["o’clock"]],

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
  sentenceTitleAudio: "../audios/page_114/Sentence_Building.mp3",

  items: [
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_114/information.mp3'" +
      ">",

    // الصورة الأولى
    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1 sentence_building_image' " +
      "data-audio='../audios/page_80/Commas_keep_sentences_in_order.mp3'" +
      ">",

    "<span class='text'>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_114/information_questions.mp3'>" +
      "<span class='red_text'>Information</span> questions <br>" +
      "and <span class='red_text'>Yes</span> / " +
      "<span class='red_text'>No</span> questions<br>" +
      "What's the time?" +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_114/information_question.mp3'>" +
      "(Information question)" +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_114/Do_you_go_.mp3'>" +
      "Do you go to bed at eight o'clock?" +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_114/Yes_-_No_question.mp3'>" +
      "(<span class='red_text'>Yes</span> / " +
      "<span class='red_text'>No</span> question)" +
      "</span>" +
      "</span>",
    // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",
    "<img " +
      "src='../images/pages/page-3/Sen-3-img.png' " +
      "class='text_img showImg2 sentence_building_image' " +
      "data-audio='../audios/page_80/Without_commas,_sentences_can_get_confusing.mp3'" +
      ">",

    // الأيقونة الثانية
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview.png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg2' " +
      "data-audio='../audios/page_114/Yes_-_No_questions_ask_for_either_a_yes_or_a_no_They_usually_begin_with_a_verb.mp3'" +
      ">",
  ],
};
