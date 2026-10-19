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
  mainTitleAudio: "../audios/page_63/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write ‘-<span class='red_text'>ss</span>’ to complete the words. Then write the words.",
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
      text: "dre[_][_]&nbsp;&nbsp;[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/4-img-1.png",
      answer: ["s", "s", "dress"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "gla[_][_]&nbsp;&nbsp;[_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/4-img-2.png",
      answer: ["s", "s", "glass"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "cla[_][_]&nbsp;&nbsp;[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/4-img-3.png",
      answer: ["s", "s", "class"],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },
    {
      singleword: false,
      text: "mi[_][_]&nbsp;&nbsp;[_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/4-img-4.png",
      answer: ["s", "s", "miss"],
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
  sentenceTitleAudio: "../audios/page_63/Sentence_Building.mp3",
  items: [
    // الزر اليسار
    "<img " +
      "src='../images/pages/sb-icons/phonics_main_title_icon.png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg1'>",

    // الصورة اليسار + صوتها
    "<img " +
      "src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1' " +
      "data-audio='../audios/page_63/When_we_speak,_we_sometimes_make_a_verb_and_‘not‘_into_one_word.mp3'>",

    // الجمل الموجودة بالنص
    "<span class='text'>" +
      "<span class='middle_sentence_audio' " +
      "data-audio='../audios/page_63/Contractions_with_‘not.mp3'>" +
      "Contractions with ‘<span class='red_text'>not</span>’" +
      "</span><br>" +
      "<span class='middle_sentence_audio' " +
      "data-audio='../audios/page_63/I_dont_like_rogs.mp3'>" +
      "I do<span class='red_text'>n't</span> like frogs!" +
      "</span><br>" +
      "<span class='middle_sentence_audio' " +
      "data-audio='../audios/page_63/do_not_=_dont.mp3'>" +
      "do not = do<span class='red_text'>n't</span>" +
      "</span><br>" +
      "</span>",

    // الصورة اليمين + صوتها
    "<img " +
      "src='../images/pages/page-3/Sen-3-img.png' " +
      "class='text_img showImg2' " +
      "data-audio='../audios/page_63/We_take_out_a_letter_and_put_in_an_apostrophe.mp3'>",

    // الزر اليمين
    "<img " +
      "src='../images/pages/sb-icons/phonics_main_title_icon.png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg2'>",
  ],
};
