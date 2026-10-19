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

var mcq_data = {
  layout: 1,

  numinrow: [[1]],

  mainTitle: "../images/icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-20px",
  },

  mainTitleAudio: "../audios/page_58/PHONICS.mp3",

  subTitleTextLeft:
    "<span class='red_text'>2</span> Circle the ‘<span class='red_text'>th</span>’ words in the poem.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  select: "multiple",

  shape: "roundrect",

  bgcolor: "none",

  numbering: "number",

  numberstartfrom: 1,

  numberofcolumns: 1,

  image: "../images/pages/page-img/phonics-img.png",

  questions: [
    // =========================================================
    // Sentence 1
    // =========================================================

    {
      question: "hard ‘<span class='red_text'>th</span>’ words",

      image: "We",

      answer: [4],

      audio: "no",

      audioenable: "default",

      options: [
        {
          text: "I",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "have",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "two",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "fea<span class='red_text'>th</span>ers",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "in",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "a vase.",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // =========================================================
    // Sentence 2
    // =========================================================

    {
      question: " ",

      image: "no",

      answer: [6],

      audio: "no",

      audioenable: "default",

      options: [
        {
          text: "'You",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "must",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "pick",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "one,'",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "said",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "Mo<span class='red_text'>th</span>er.",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // =========================================================
    // Sentence 3
    // لا تحتوي أي كلمة th
    // عدم الاختيار هو الإجابة الصحيحة
    // =========================================================

    {
      question: "",

      image: "no",

      /*
       * هذا السؤال فقط يستخدم المنطق الخاص.
       */
      answer: [],

      allowEmptyAnswer: true,

      audio: "no",

      audioenable: "default",

      options: [
        {
          text: "I",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "cannot",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "choose",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "between",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "red",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "and",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "blue,",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // =========================================================
    // Sentence 4
    // =========================================================

    {
      question: "",

      image: "no",

      answer: [3, 5, 7],

      audio: "no",

      audioenable: "default",

      options: [
        {
          text: "If",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "not",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "<span class='red_text'>th</span>is",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "one,",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "<span class='red_text'>th</span>en",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "the",
          image: "",
          audio: "no",
          audioenable: "default",
        },
        {
          text: "o<span class='red_text'>th</span>er!",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },
  ],
};
