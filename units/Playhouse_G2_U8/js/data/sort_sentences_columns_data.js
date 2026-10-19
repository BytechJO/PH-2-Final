var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [],
};

var sort_sentences_columns_data = {
  layout: 1,

  mainTitle: "../images/icons/gram_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_62/GRAMMAR.mp3",

  subTitleTextLeft:
    '<span class="red_text">3</span> ' +
    "Put the sentences from the conversation above in the correct column.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  columns: [
    {
      id: "positive",
      title: "Positive Sentences",
    },
    {
      id: "negative",
      title: "Negative Sentences",
    },
  ],

  conversation: [
    {
      speaker: "A:",

      parts: [
        {
          text: "Hi, Tony.",
          draggable: false,
        },
        {
          id: "sentence_1",
          text: "Do you want to go to the arcade after school?",
          answer: "positive",
          draggable: true,
        },
      ],
    },

    {
      speaker: "B:",

      parts: [
        {
          text: "Hmm.",
          draggable: false,
        },
        {
          id: "sentence_2",
          text: "I don’t think so.",
          answer: "negative",
          draggable: true,
        },
        {
          id: "sentence_3",
          text: "I do not like the arcade.",
          answer: "negative",
          draggable: true,
        },
      ],
    },

    {
      speaker: "A:",

      parts: [
        {
          id: "sentence_4",
          text: "I always like to go to the arcade!",
          answer: "positive",
          draggable: true,
        },
        {
          id: "sentence_5",
          text: "You never like to go to the arcade!",
          answer: "negative",
          draggable: true,
        },
      ],
    },

    {
      speaker: "B:",

      parts: [
        {
          text: "Sorry,",
          draggable: false,
        },
        {
          id: "sentence_6",
          text: "today I have no money.",
          answer: "negative",
          draggable: true,
        },
      ],
    },

    {
      speaker: "A:",

      parts: [
        {
          id: "sentence_7",
          text: "Nobody has money today!",
          answer: "negative",
          draggable: true,
        },
      ],
    },

    {
      speaker: "B:",

      parts: [
        {
          text: "Well, then.",
          draggable: false,
        },
        {
          id: "sentence_8",
          text: "Let’s go to my house!",
          answer: "positive",
          draggable: true,
        },
      ],
    },
  ],
};
