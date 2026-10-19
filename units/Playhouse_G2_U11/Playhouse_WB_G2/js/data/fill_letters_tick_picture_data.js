var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_56/PHONICS_AND_SENTENCE_BUILDING.mp3",
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

var fill_letters_tick_picture_data = {
  activityName: "fill_letters_tick_picture",

  layout: 1,

  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "../images/pages/sb-icons/readwrite_main_title_icon.png",
  mainTitleIconPos: { right: "-38px" },
  mainTitleAudio: "../../../../../audios/PHONICS_and_Sentence_Building.mp3",

  subTitleAudio: "../audios/page_56/fill_in_the_missing_letters.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>1</span> Fill in the missing letters. Look and tick ✓ the correct picture for the missing word in the sentence.",

  subTitleTextRight: "",

  subTitleIcons: [],

  title_position: "under",

  questions: [
    {
      qno: 1,

      sentenceBefore: "This room is very n",

      missingLetters: "ea",

      sentenceAfter: "t.",

      pictures: [
        {
          image: "../images/pages/page_3/2.jpg",

          correct: false,
        },
        {
          image: "../images/pages/page_3/1.jpg",

          correct: true,
        },
      ],
    },

    {
      qno: 2,

      sentenceBefore: "They ",

      missingLetters: "ea",

      sentenceAfter: "t lunch.",

      pictures: [
        {
          image: "../images/pages/page_3/4.png",

          correct: false,
        },
        {
          image: "../images/pages/page_3/3.png",

          correct: true,
        },
      ],
    },

    {
      qno: 3,

      sentenceBefore: "They eat m",

      missingLetters: "ea",

      sentenceAfter: "t on Sunday.",

      pictures: [
        {
          image: "../images/pages/page_3/6.png",

          correct: false,
        },
        {
          image: "../images/pages/page_3/5.png",

          correct: true,
        },
      ],
    },

    {
      qno: 4,

      sentenceBefore: "Yoshi sits on a s",

      missingLetters: "ea",

      sentenceAfter: "t.",

      pictures: [
        {
          image: "../images/pages/page_3/8.png",

          correct: true,
        },
        {
          image: "../images/pages/page_3/7.png",

          correct: false,
        },
      ],
    },
  ],
};
