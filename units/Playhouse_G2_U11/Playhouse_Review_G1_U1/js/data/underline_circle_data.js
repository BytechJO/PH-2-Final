var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [],
};

var underline_circle_data = {
  mainTitle: "../images/icons/grammar_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_2_icon.png",
  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/under.mp3",
  subTitleAudio: "../audios/under.mp3",

  subTitleText:
    "<span class='red_text'>4 </span>" +
    "<span>Circle the <span class='red_text'>‘ea’</span> words.</span><br>" +
    "<span class='second_instruction'>" +
    "Underline <span class='red_text'>above</span>, " +
    "<span class='red_text'>in</span>, " +
    "<span class='red_text'>under</span> and " +
    "<span class='red_text'>near</span>." +
    "</span>",

  sentences: [
    {
      number: 1,
      words: [
        { text: "The" },
        { text: "kids" },
        { text: "are" },
        { text: "going" },
        { text: "to" },
        {
          text: "eat",
          answer: "circle",
        },
        {
          text: "near",
          answer: "underline",
        },
        { text: "the" },
        { text: "water." },
      ],
    },

    {
      number: 2,
      words: [
        { text: "My" },
        { text: "dad" },
        { text: "likes" },
        { text: "lots" },
        { text: "of" },
        {
          text: "meat",
          answer: "circle",
        },
        {
          text: "in",
          answer: "underline",
        },
        { text: "his" },
        { text: "burger." },
      ],
    },

    {
      number: 3,
      words: [
        { text: "There" },
        { text: "are" },
        { text: "lots" },
        { text: "of" },
        {
          text: "seats",
          answer: "circle",
        },
        {
          text: "under",
          answer: "underline",
        },
        { text: "the" },
        { text: "stage." },
      ],
    },

    {
      number: 4,
      words: [
        { text: "The" },
        {
          text: "mean",
          answer: "circle",
        },
        {
          text: "queen",
        },
        { text: "sat" },
        {
          text: "in",
          answer: "underline",
        },
        { text: "her" },
        { text: "castle." },
      ],
    },
  ],
};
