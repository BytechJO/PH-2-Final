var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(159, 210, 236)",
  type: "text",

  playListData: [
    {
      audiourl: "",
    },
  ],
};

var look_and_write_body_parts_data = {
  layout: 1,

  // =====================================================
  // Header
  // =====================================================
  mainTitle: "",
  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "0px",
  },

  mainTitleAudio: "",
  subTitleAudio: "",

  subTitleTextLeft: '<span>1</span> Look and write.',

  subTitleIcons: [],
  subTitleTextRight: "",

  // =====================================================
  // Word bank
  // =====================================================
  words: ["toes", "knee", "neck", "stomach", "shoulder", "back", "foot"],

  // =====================================================
  // Images and inputs
  // كل position بالنسبة المئوية
  // =====================================================
  questions: [
    {
      image: "../images/pages/activities/Asset_11.png",

      lines: [
        {
          answer: "neck",
          side: "right",
          top: 18,
          left: 65,
          width: 30,
          maxlength: 10,
        },

        {
          answer: "stomach",
          side: "left",
          top: 34,
          left: 9,
          width: 30,
          maxlength: 10,
        },

        {
          answer: "knee",
          side: "right",
          top: 63,
          left: 69,
          width: 30,
          maxlength: 10,
        },

        {
          answer: "toes",
          side: "right",
          top: 86,
          left: 76,
          width: 23,
          maxlength: 10,
        },
      ],
    },

    {
      image: "../images/pages/activities/Asset_12.png",

      lines: [
        {
          answer: "shoulder",
          side: "left",
          top: 22,
          left: 2,
          width: 27,
          maxlength: 10,
        },

        {
          answer: "back",
          side: "right",
          top: 33,
          left: 57,
          width: 34,
          maxlength: 10,
        },

        {
          answer: "foot",
          side: "right",
          top: 86,
          left: 66,
          width: 28,
          maxlength: 10,
        },
      ],
    },
  ],
};
