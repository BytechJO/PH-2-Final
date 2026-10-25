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

var colour_cvc_past_data = {
  layout: 1,

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "<span class='red_text'>3</span> Look at the words. Colour the CVC. Then write the words again in simple past.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  colours: [
    "#ef5350",
    "#42a5f5",
    "#66bb6a",
    "#ffca28",
    "#ab47bc",
    "#ff8a65",
    "#8d6e63",
    "#000000",
  ],

  defaultColour: "#ef5350",

  questions: [
    {
      word: "stop",
      cvcIndices: [1, 2, 3],
      answer: "stopped",
      audio: "../audios/under.mp3",
    },
    {
      word: "skip",
      cvcIndices: [1, 2, 3],
      answer: "skipped",
      audio: "../audios/under.mp3",
    },
    {
      word: "hop",
      cvcIndices: [0, 1, 2],
      answer: "hopped",
      audio: "../audios/under.mp3",
    },
  ],
};
