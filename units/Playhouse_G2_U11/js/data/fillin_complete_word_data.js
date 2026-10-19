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
  mainTitleAudio: "../audios/page_86/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write '<span class='red_text'>ea</span>' to complete the words. Then write the words.",
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
      text: "n[_][_]t",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-1.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["e", "a", "neat"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,
      text: "[_][_]t",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-2.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["e", "a", "eat"],
      alternateanswer: [[], [], []],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 1,
      type: "text",
    },

    {
      singleword: false,
      text: "m[_][_]t",
      textFront: "",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/6-img-3.png",

      writeFullWord: true,
      fullWordMaxlength: 10,

      answer: ["e", "a", "meat"],
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

  sentenceTitleAudio: "../audios/page_86/Sentence_Building.mp3",

  items: [
    // الأيقونة الأولى
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_86/Prepositions_of_place_tell_us_where_nouns_are_at_in_the_sentence.mp3'" +
      ">",

    // الصورة الأولى
    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1 sentence_building_image' " +
      "data-audio='../audios/page_80/Commas_keep_sentences_in_order.mp3'" +
      ">",

    // الجمل الوسطية
    // الجمل الوسطية
    "<span class='text sentence_building_text'>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_86/Prepositions_come_before_the_noun.mp3'>" +
      "Prepositions come before the noun." +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_86/Preposition_+_noun.mp3'>" +
      "<span class='red_text'>Preposition</span> + " +
      "<span class='red_text'>noun</span>" +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_86/The_bee_is_in_the_hive.mp3'>" +
      "The bee is " +
      "<span class='red_text'>in</span> the " +
      "<span class='red_text'>hive</span>." +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_86/The_bee_is_on_this_flower.mp3'>" +
      "The bee is " +
      "<span class='red_text'>on</span> this " +
      "<span class='red_text'>flower</span>." +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_86/The_bee_is_above_that_lefe.mp3'>" +
      "The bee is " +
      "<span class='red_text'>above</span> that " +
      "<span class='red_text'>leaf</span>." +
      "</span><br>" +
      "</span>",
    // الصورة الثانية
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
      "data-audio='../audios/page_86/Without_commasPrepositions_come_before_the_nouns_they_talk_about.mp3'" +
      ">",
  ],
};
