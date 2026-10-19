var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(45 190 240)",
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
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/grammer.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../../../../../audios/GRAMMAR.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Write a sentence about you.',
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/readwrite_main_titleIcone.png"],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "none", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  questions: [
    {
      singleword: false,
      text: "[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["does"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
