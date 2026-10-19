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
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="red_text">1</span> Unscramble the sentences. Add ‘<span class="red_text">in</span>’ in the correct place.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  questions: [
    {
      singleword: false,
      text: "my office dad’s city is the[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["My dad’s office is in the city."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "house Shelly lives a[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["Shelly lives in a house."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "coach gym my is the[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["My coach is in the gym."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "I born was Australia[_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: ["I was born in Australia."],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },
  ],
};
