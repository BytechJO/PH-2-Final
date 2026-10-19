var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_72/PLAYHOUSE_2_WB_UNIT_14_TRACK_06_01.mp3",
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

var double_letter_data = {
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",

  mainTitleIcon: "../images/pages/sb-icons/readwrite_main_title_icon.png",

  mainTitleIconPos: {
    right: "-30px",
  },

  mainTitleAudio: "../../../../../audios/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>2</span> Read and write the missing letters. Then circle the correct word.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  // السؤال الأول محلول
  defaultAnswer: 1,

  questions: [
    {
      baseWord: "hop",

      // Input الأول
      missingLetter: "p",

      // Input الثاني
      suffix: "ing",

      options: [
        {
          text: "hopping",
        },
        {
          text: "hoping",
        },
      ],

      correctOption: 1,
      audio: "../audios/under.mp3",
    },

    {
      baseWord: "stop",
      missingLetter: "p",
      suffix: "ed",

      options: [
        {
          text: "stoped",
        },
        {
          text: "stopped",
        },
      ],

      correctOption: 2,
      audio: "../audios/under.mp3",
    },

    {
      baseWord: "sit",
      missingLetter: "t",
      suffix: "ing",

      options: [
        {
          text: "siting",
        },
        {
          text: "sitting",
        },
      ],

      correctOption: 2,
      audio: "../audios/under.mp3",
    },

    {
      baseWord: "skip",
      missingLetter: "p",
      suffix: "ed",

      options: [
        {
          text: "skiped",
        },
        {
          text: "skipped",
        },
      ],

      correctOption: 2,
      audio: "../audios/under.mp3",
    },
  ],
};
