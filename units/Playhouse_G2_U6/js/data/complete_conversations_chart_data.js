var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "slider",

  playListData: [
    {
      audiourl: "../audios/page_47/PLAYHOUSE_2_SB_UNIT_6_TRACK_05_01.mp3",
    },
    {
      audiourl: "",
    },
    {
      audiourl: "",
    },
    {
      audiourl: "",
    },
  ],
};
var fillin_data = {
  layout: 1,

  mainTitle: "../images/icons/gramprac_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "90px",
  },

  mainTitleAudio: "../audios/page_47/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft:
    "<span class='red_text'>1</span> Read the chart. Complete the conversations.",

  subTitleTextRight: "",

  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],

  subTitleAudio:
    "../audios/page_47/1_Read_the_chart._Complete_the_conversations.mp3",

  // =====================================================
  // Chart
  // =====================================================

  chart: {
    columns: [
      {
        key: "always",
        title: "ALWAYS",
      },
      {
        key: "never",
        title: "NEVER",
      },
      {
        key: "sometimes",
        title: "SOMETIMES",
      },
    ],

    rows: [
      {
        name: "Jake",

        image: "../images/pages/page-7/15.jpg",

        values: {
          always: "hungry",
          never: "cold",
          sometimes: "bored",
        },
      },

      {
        name: "Teddy",

        image: "../images/pages/page-7/5.jpg",

        values: {
          always: "sleepy",
          never: "angry",
          sometimes: "sad",
        },
      },

      {
        name: "Karen",

        image: "../images/pages/page-7/4.jpg",

        values: {
          always: "happy",
          never: "cold",
          sometimes: "thirsty",
        },
      },
    ],
  },

  // =====================================================
  // Conversations
  // =====================================================

  questions: [
    {
      number: 1,

      leftImage: "../images/pages/page-7/10.png",

      rightImage: "../images/pages/page-7/7.png",

      leftBubble: {
        type: "input",
        before: "",
        after: "",
        answer: "How does Jake never feel",
        maxlength: 40,
      },

      rightBubble: {
        type: "input",
        before: "Jake never feels",
        after: ".",
        answer: "cold",
        maxlength: 15,
      },

      answer: "How does Jake never feel?,cold",

      strictcase: "no",
      type: "text",
      audio: "",
      audioenable: "default",
    },

    {
      number: 2,

      leftImage: "../images/pages/page-7/12.png",

      rightImage: "../images/pages/page-7/11.png",

      leftBubble: {
        type: "text",
        text: "How does Karen always feel?",
      },

      rightBubble: {
        type: "input",
        before: "Karen always",
        after: ".",
        answer: "feels happy",
        maxlength: 22,
      },

      answer: "feels happy",

      strictcase: "no",
      type: "text",
      audio: "",
      audioenable: "default",
    },

    {
      number: 3,

      leftImage: "../images/pages/page-7/9.png",

      rightImage: "../images/pages/page-7/8.png",

      leftBubble: {
        type: "text",
        text: "How does Teddy sometimes feel?",
      },

      rightBubble: {
        type: "input",
        before: "",
        after: "",
        answer: "Teddy sometimes feels sad",
        maxlength: 40,
      },

      answer: "Teddy sometimes feels sad.",

      strictcase: "no",
      type: "text",
      audio: "",
      audioenable: "default",
    },

    {
      number: 4,

      leftImage: "../images/pages/page-7/14.png",

      rightImage: "../images/pages/page-7/10.png",

      leftBubble: {
        type: "input",
        before: "",
        after: "",
        answer: "How does Karen sometimes feel",
        maxlength: 42,
      },

      rightBubble: {
        type: "input",
        before: "Karen sometimes",
        after: ".",
        answer: "feels thirsty",
        maxlength: 22,
      },

      answer: "How does Karen sometimes feel?,feels thirsty",

      strictcase: "no",
      type: "text",
      audio: "",
      audioenable: "default",
    },
  ],
};
