var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(32, 183, 238)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_54/PLAYHOUSE_2_WB_UNIT_11_TRACK_01_01.mp3",
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

var match_clues_pictures_write_name_data = {
  activityName: "match_clues_pictures_write_name",

  layout: 1,

  mainTitle: "../images/pages/sb-icons/word_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../../../../../audios/WORD_POWER.mp3",

  subTitleAudio: "../audios/page_54/read_the_clues.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>1</span> Read the clues and match them to the pictures. Then write the name.",

  subTitleTextRight: "",

  subTitleIcons: [],

  title_position: "beside",

  /* =====================================================
       Questions
    ===================================================== */

  questions: [
    {
      qno: 1,

      side: "left",

      text: "I have lots of legs.",

      answer: "octopus",

      alternateAnswers: [],
    },

    {
      qno: 2,

      side: "left",

      text: "I look like a star.",

      answer: "starfish",

      alternateAnswers: ["star fish"],
    },

    {
      qno: 3,

      side: "left",

      text: "Kids build castles with me.",

      answer: "sand",

      alternateAnswers: [],
    },

    {
      qno: 4,

      side: "left",

      text: "I have a lot of water in me.",

      answer: "sea",

      alternateAnswers: [],
    },

    {
      qno: 5,

      side: "left",

      text: "I'm a place people like to visit.",

      answer: "beach",

      alternateAnswers: [],
    },

    {
      qno: 6,

      side: "right",

      text: "I'm a type of house.",

      answer: "lighthouse",

      alternateAnswers: ["light house"],
    },

    {
      qno: 7,

      side: "right",

      text: "I can be very dangerous.",

      answer: "shark",

      alternateAnswers: [],
    },

    {
      qno: 8,

      side: "right",

      text: "People like to catch me in the water. I can be very little.",

      answer: "fish",

      alternateAnswers: [],
    },

    {
      qno: 9,

      side: "right",

      text: "I'm very big. I live in the sea.",

      answer: "whale",

      alternateAnswers: [],
    },
  ],

  /* =====================================================
       Pictures

       answerNumber = الرقم الصحيح داخل مربع الصورة
    ===================================================== */

  pictures: [
    {
      id: "sea",

      image: "../images/pages/page_1/2.jpg",

      answerNumber: 4,
    },

    {
      id: "fish",

      image: "../images/pages/page_1/3.jpg",

      answerNumber: 8,
    },

    {
      id: "whale",

      image: "../images/pages/page_1/7.jpg",

      answerNumber: 9,
    },

    {
      id: "lighthouse",

      image: "../images/pages/page_1/5.jpg",

      answerNumber: 6,
    },

    {
      id: "sand",

      image: "../images/pages/page_1/8.jpg",

      answerNumber: 3,
    },

    {
      id: "shark",

      image: "../images/pages/page_1/6.jpg",

      answerNumber: 7,
    },

    {
      id: "starfish",

      image: "../images/pages/page_1/9.jpg",

      answerNumber: 2,
    },

    {
      id: "octopus",

      image: "../images/pages/page_1/10.jpg",

      answerNumber: 1,
    },

    {
      id: "beach",

      image: "../images/pages/page_1/4.jpg",

      answerNumber: 5,
    },
  ],
};
