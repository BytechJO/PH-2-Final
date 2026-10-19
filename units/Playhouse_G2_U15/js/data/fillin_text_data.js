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
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_111/CONVERSATION.mp3",
  subTitleTextLeft: '<span class="red_text">3</span> Write the missing time.',
  subTitleTextRight: "",
  subTitleIcons: [],
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
      text: "four o’clock &nbsp; five o’clock[_] seven o’clock",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["six o’clock"],
      alternateanswer: [["six o'clock"]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 200,
      type: "", // text (or) number
    },
  ],
};
