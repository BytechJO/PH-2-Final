var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_7/PLAYHOUSE_2_WB_UNIT_1_TRACK_08_01.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var mcq_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "../images/pages/sb-icons/readwrite_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../../../../../audios/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>3</span> Circle the nouns and underline the verbs.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  questions: [
    {
      leftImage: "../images/pages/activities/girl.png",
      rightImage: "../images/pages/activities/boy.png",

      lines: [
        [
          { text: "She", answer: "none" },
          { text: "writes", answer: "verb" },
          { text: "a letter.", answer: "noun" },
        ],
        [
          { text: "Max", answer: "noun" },
          { text: "plays", answer: "verb" },
          { text: "football.", answer: "noun" },
        ],
      ],
    },
  ],
};
