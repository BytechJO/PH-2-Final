var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",
  playListData: [],
};

var mcq_data = {
  layout: 1,

  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "<span class='red_text'>2</span> Colour the verbs blue. Colour the nouns red. Circle the ‘<span class='red_text'>a magic e</span>’ words.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  words: [
    { text: "plays", type: "verb", magicE: false },
    { text: "trainers", type: "noun", magicE: false },
    { text: "cane", type: "noun", magicE: true },

    { text: "cape", type: "noun", magicE: true },
    { text: "textbook", type: "noun", magicE: false },
    { text: "glue", type: "noun", magicE: false },

    { text: "reads", type: "verb", magicE: false },
    { text: "mane", type: "noun", magicE: true },
    { text: "lunch", type: "noun", magicE: false },

    { text: "wear", type: "verb", magicE: false },
    { text: "pencil case", type: "noun", magicE: false },
  ],
};
