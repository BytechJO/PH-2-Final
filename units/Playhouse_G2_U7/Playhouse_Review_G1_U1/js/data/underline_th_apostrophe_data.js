var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(45, 190, 240)",
  type: "text",
  playListData: [],
};

var underline_th_apostrophe_data = {
  layout: 1,

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-20px",
  },

  mainTitleAudio: "../audios/grammar.mp3",

  subTitleTextLeft:
    '<span0>3</span> ' +
    "Underline the <span class='red_th'>‘th’</span> in the words and<br>" +
    '<span class="subtitle_second_line">put in the apostrophes.</span>',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "",

  questions: [
    {
      number: 1,

      parts: [
        {
          type: "text",
          text: "I",
        },
        {
          type: "apostrophe",
          id: "apostrophe_1",
        },
        {
          type: "text",
          text: "m painting ",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_1_1",
        },
        {
          type: "text",
          text: "is hat yellow.",
        },
      ],

      correctUnderline: ["underline_1_1"],

      correctApostrophes: ["apostrophe_1"],
    },

    {
      number: 2,

      parts: [
        {
          type: "text",
          text: "It",
        },
        {
          type: "apostrophe",
          id: "apostrophe_2",
        },
        {
          type: "text",
          text: "s not your fea",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_2_1",
        },
        {
          type: "text",
          text: "er.",
        },
      ],

      correctUnderline: ["underline_2_1"],

      correctApostrophes: ["apostrophe_2"],
    },

    {
      number: 3,

      parts: [
        {
          type: "underline",
          text: "Th",
          id: "underline_3_1",
        },
        {
          type: "text",
          text: "ey",
        },
        {
          type: "apostrophe",
          id: "apostrophe_3",
        },
        {
          type: "text",
          text: "re going to ",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_3_2",
        },
        {
          type: "text",
          text: "e o",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_3_3",
        },
        {
          type: "text",
          text: "er park.",
        },
      ],

      correctUnderline: ["underline_3_1", "underline_3_2", "underline_3_3"],

      correctApostrophes: ["apostrophe_3"],
    },

    {
      number: 4,

      parts: [
        {
          type: "text",
          text: "What",
        },
        {
          type: "apostrophe",
          id: "apostrophe_4",
        },
        {
          type: "text",
          text: "s ",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_4_1",
        },
        {
          type: "text",
          text: "is?",
        },
      ],

      correctUnderline: ["underline_4_1"],

      correctApostrophes: ["apostrophe_4"],
    },

    {
      number: 5,

      parts: [
        {
          type: "text",
          text: "We",
        },
        {
          type: "apostrophe",
          id: "apostrophe_5",
        },
        {
          type: "text",
          text: "re going wi",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_5_1",
        },
        {
          type: "text",
          text: " my mo",
        },
        {
          type: "underline",
          text: "th",
          id: "underline_5_2",
        },
        {
          type: "text",
          text: "er.",
        },
      ],

      correctUnderline: ["underline_5_1", "underline_5_2"],

      correctApostrophes: ["apostrophe_5"],
    },
  ],
};
