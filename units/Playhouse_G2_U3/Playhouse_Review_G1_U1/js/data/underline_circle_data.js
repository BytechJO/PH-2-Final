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
    "<span class='question_number'>5</span>" +
    "<span>Underline the regular plurals.</span><br>" +
    "<span class='second_instruction'>Circle the irregular plurals.</span>",

  sentences: [
    {
      number: 1,
      words: [
        { text: "We" },
        { text: "saw" },
        {
          text: "men",
          answer: "circle",
        },
        { text: "building" },
        {
          text: "houses.",
          answer: "underline",
        },
      ],
    },

    {
      number: 2,
      words: [
        { text: "There" },
        { text: "were" },
        {
          text: "children",
          answer: "circle",
        },
        { text: "playing" },
        { text: "with" },
        {
          text: "toys.",
          answer: "underline",
        },
      ],
    },

    {
      number: 3,
      words: [
        { text: "They" },
        { text: "saw" },
        {
          text: "mice",
          answer: "circle",
        },
        { text: "in" },
        { text: "the" },
        {
          text: "gardens.",
          answer: "underline",
        },
      ],
    },

    {
      number: 4,
      words: [
        { text: "That" },
        { text: "man" },
        { text: "has" },
        { text: "got" },
        { text: "many" },
        {
          text: "geese.",
          answer: "circle",
        },
      ],
    },

    {
      number: 5,
      words: [
        { text: "The" },
        { text: "child" },
        { text: "ate" },
        { text: "all" },
        { text: "the" },
        {
          text: "doughnuts.",
          answer: "underline",
        },
      ],
    },
  ],
};