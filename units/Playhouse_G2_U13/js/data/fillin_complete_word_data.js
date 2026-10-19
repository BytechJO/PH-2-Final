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
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_102/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write the words. Say the sounds.",
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
      text: "[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/6-img-1.png",
      answer: ["eyes"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/6-img-2.png",
      answer: ["toes"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/6-img-3.png",
      answer: ["nose"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
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

  sentenceTitleAudio: "../audios/page_102/Sentence_Building.mp3",

  items: [
    "<img " +
      "src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle sentence_building_toggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_102/Use_the_word_‘in‘_when_talking_about_a_place.mp3'" +
      ">",

    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1 sentence_building_image' " +
      "data-audio='../audios/page_80/Commas_keep_sentences_in_order.mp3'" +
      ">",

    "<span class='text sentence_building_text'>" +
      "<span class='sentenceAudio sentence_line sentence_audio_text' " +
      "data-audio='../audios/page_102/Maggie_lives_in_New_Zealand.mp3'>" +
      "Maggie lives <span class='red_text'>in</span> New Zealand." +
      "</span>" +
      "<br>" +
      "<span class='sentenceAudio sentence_line sentence_audio_text' " +
      "data-audio='../audios/page_102/Im_standing_in_the_classroom.mp3'>" +
      "I'm standing <span class='red_text'>in</span> the classroom." +
      "</span>" +
      "<br>" +
      "<span class='sentenceAudio sentence_line sentence_audio_text' " +
      "data-audio='../audios/page_102/I_was_born_in_China.mp3'>" +
      "I was born <span class='red_text'>in</span> China." +
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
      "data-audio='../audios/page_102/‘in‘_comes_before_a_noun.mp3'" +
      ">",
  ],
};
