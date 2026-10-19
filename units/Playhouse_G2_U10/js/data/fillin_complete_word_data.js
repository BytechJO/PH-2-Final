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
  mainTitleAudio: "../audios/page_80/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>3</span> &nbsp;  Write 'ump' to complete the words. Then write each word.",
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
      text: "j[_][_][_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-1.png",

      answer: ["u", "m", "p", "jump"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },

    {
      singleword: false,
      text: "st[_][_][_][_]",
      textFront: "",
      textaudios: ["../audios/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-2.png",

      answer: ["u", "m", "p", "stump"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 10,
      type: "text",
    },

    {
      singleword: false,
      text: "b[_][_][_][_]",
      textFront: "",
      textaudios: [""],
      textEndAudio: "",
      audio: "",
      audioenable: "default",
      image: "../images/pages/activities/2-img-3.png",

      answer: ["u", "m", "p", "bump"],
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

  sentenceTitleAudio: "../audios/page_80/Sentence_Building.mp3",

  items: [
    "<img src='../images/pages/sb-icons/9-removebg-preview (1).png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg1' " +
      "data-audio='../audios/page_80/Commas_keep_sentences_in_order.mp3'>",

    "<img src='../images/pages/page-3/Sen-2-img.png' " +
      "class='text_img showImg1'>",
    "<span class='text'>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_80/Use_commas_to_make_a_list.mp3'>" +
      "Use commas to make a list." +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_80/I_dont_like_big,_dangerous_and_scary_dinosaurs.mp3'>" +
      "<span class='blue_text'>X</span> I don't like big dangerous <br>" +
      "&nbsp; and scary dinosaurs." +
      "</span><br>" +
      "<span class='sentenceAudio sentence_audio_text' " +
      "data-audio='../audios/page_80/I_dont_like_big_dangerous_and_scary_dinosaurs.mp3'>" +
      "<span class='red_text'>✓</span> I don't like big, dangerous <br>" +
      "&nbsp; and scary dinosaurs." +
      "</span><br>" +
      "</span>",

    // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",

    "<img src='../images/pages/page-3/Sen-3-img.png' " +
      "class='text_img showImg2'>",

    "<img src='../images/pages/sb-icons/9-removebg-preview.png' " +
      "class='readHighlightsBtn imgToggle' " +
      "data-img='showImg2' " +
      "data-audio='../audios/page_80/Without_commas,_sentences_can_get_confusing.mp3'>",
  ],
};
