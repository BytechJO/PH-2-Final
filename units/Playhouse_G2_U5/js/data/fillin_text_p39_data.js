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
  numinrow: [[1]],
  mainTitle: "../images/icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "95px" },
  mainTitleAudio: "../audios/page_39/CONVERSATION.mp3",
  subTitleTextLeft: '<span class="red_text">3</span> You do it.',
  subTitleTextRight:
    "<span class='red_text'>What’s wrong with Lilly? Write a sentence about her.</span>",
  subTitleIcons: ["../images/pages/sb-icons/conv_3_icon.png"],
  subTitleAudio: "../audios/under.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  question: "",
  imageposition: "front",
  images: [""],
  textAudios: [],
  questions: [
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "correct", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
