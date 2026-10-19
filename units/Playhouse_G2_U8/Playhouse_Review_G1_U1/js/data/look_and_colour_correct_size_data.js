var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",
  playListData: [],
};

var look_and_colour_size_data = {
  mainTitle: "../images/icons/grammar_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_2_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "",

  subTitleTextLeft:
    "<span class='title-order'>2</span> Look and colour the correct size.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "",

  parentClassName: "look_colour_size_group",

  // صورة واحدة تُستخدم في جميع الخيارات
  image: "../images/pages/activities/4-removebg-preview.png",

  questions: [
    {
      label: "small",
      answer: 1,
      selectedColor: "#ffd54f",

      options: [
        {
          scale: 0.58,
          imageAlt: "Small T-shirt",
        },
        {
          scale: 0.88,
          imageAlt: "Large T-shirt",
        },
      ],
    },

    {
      label: "medium",
      answer: 2,
      selectedColor: "#81d4fa",

      options: [
        {
          scale: 0.88,
          imageAlt: "Large T-shirt",
        },
        {
          scale: 0.72,
          imageAlt: "Medium T-shirt",
        },
      ],
    },

    {
      label: "large",
      answer: 2,
      selectedColor: "#ce93d8",

      options: [
        {
          scale: 0.72,
          imageAlt: "Medium T-shirt",
        },
        {
          scale: 0.95,
          imageAlt: "Large T-shirt",
        },
      ],
    },
  ],
};
