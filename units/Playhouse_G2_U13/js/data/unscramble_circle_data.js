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

var unscramble_circle_data = {
  mainTitle: "../images/icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_102/PHONICS.mp3",

  firstQuestion: {
    title:
      '<span class="red_text">1</span> ' +
      "Unscramble the sentences. Add ‘" +
      '<span class="red_text">in</span>’ ' +
      "in the correct place.",

    titleAudio: "../audios/under.mp3",

    checkText: "Check Answer",

    resetText: "Reset",

    questions: [
      {
        scrambled: "my office dad’s city is the",

        answer: "My dad’s office is in the city.",

        audio: "../audios/under.mp3",

        maxlength: 100,
      },

      {
        scrambled: "house Shelly lives a",

        answer: "Shelly lives in a house.",

        audio: "../audios/under.mp3",

        maxlength: 100,
      },

      {
        scrambled: "coach gym my is the",

        answer: "My coach is in the gym.",

        audio: "../audios/under.mp3",

        maxlength: 100,
      },

      {
        scrambled: "I born was Australia",

        answer: "I was born in Australia.",

        audio: "../audios/under.mp3",

        maxlength: 100,
      },
    ],
  },

  secondQuestion: {
    title:
      '<span class="red_text">2</span> ' +
      "Read the sentences you wrote and circle " +
      'the noun ‘<span class="red_text">in</span>’ ' +
      "talks about.",

    titleAudio: "../audios/under.mp3",

    checkText: "Check Answer",

    resetText: "Reset",

    /*
      الإجابة الصحيحة المقصودة في كل جملة.
    */
    answers: ["city", "house", "gym", "australia"],
  },
};
