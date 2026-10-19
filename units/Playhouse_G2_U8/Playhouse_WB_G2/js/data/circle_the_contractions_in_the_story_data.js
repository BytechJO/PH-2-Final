var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_42/PLAYHOUSE_2_WB_UNIT_8_TRACK_06_01.mp3",
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

var contractions_story_data = {
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_2_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../../../../../audios/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    "<span class='title-order'>2</span> Circle the contractions in the story. Write out each in a box.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_42/PLAYHOUSE_2_WB_UNIT_8_TRACK_06_01.mp3",

  image: "../images/pages/activities/combined-image.jpg",

  imageAlt: "David standing inside the City Town Mall",

  numbering: "none",

  numberstartfrom: 1,

  parentClassName: "circle_contractions_group",

  questions: [
    {
      question: "",

      /*
       * أرقام الكلمات الصحيحة داخل words.
       *
       * 2  = doesn’t
       * 16 = aren’t
       * 22 = don’t
       * 29 = can’t
       * 38 = isn’t
       */
      correctWordIndexes: [2, 16, 22, 29, 38],

      audio: "",

      audioenable: "default",

      /*
       * الإجابات المقبولة لكل contraction.
       *
       * أول إجابة مثال جاهز في الكتاب.
       */
      contractionAnswers: [
        ["does not", "doesn't", "doesnt"],

        ["are not", "aren't", "arent"],

        ["do not", "don't", "dont"],

        ["cannot", "can not", "can't", "cant"],

        ["is not", "isn't", "isnt"],
      ],

      /*
       * أول حقل جاهز وreadonly.
       * باقي الحقول يكتبها الطالب.
       */
      presetInputValues: ["does not", "", "", "", ""],

      inputMaxLength: 20,

      words: [
        {
          text: "David",
        },
        {
          text: "doesn’t",
          preset: true,
        },
        {
          text: "like",
        },
        {
          text: "going",
        },
        {
          text: "to",
        },
        {
          text: "the",
        },
        {
          text: "City",
        },
        {
          text: "Town",
        },
        {
          text: "Mall.",
        },
        {
          text: "The",
        },
        {
          text: "malls",
        },
        {
          text: "are",
        },
        {
          text: "very",
        },
        {
          text: "busy.",
          breakAfter: true,
        },

        {
          text: "There",
        },
        {
          text: "aren’t",
        },
        {
          text: "many",
        },
        {
          text: "nice",
        },
        {
          text: "shops.",
        },
        {
          text: "The",
        },
        {
          text: "shops",
        },
        {
          text: "don’t",
        },
        {
          text: "sell",
        },
        {
          text: "the",
        },
        {
          text: "things",
        },
        {
          text: "he",
        },
        {
          text: "likes.",
          breakAfter: true,
        },

        {
          text: "He",
        },
        {
          text: "can’t",
        },
        {
          text: "find",
        },
        {
          text: "any",
        },
        {
          text: "clothes",
        },
        {
          text: "or",
        },
        {
          text: "shoes",
        },
        {
          text: "he",
        },
        {
          text: "likes.",
          breakAfter: true,
        },

        {
          text: "There",
        },
        {
          text: "isn’t",
        },
        {
          text: "anything",
        },
        {
          text: "in",
        },
        {
          text: "the",
        },
        {
          text: "mall",
        },
        {
          text: "for",
        },
        {
          text: "David.",
        },
      ],
    },
  ],
};
