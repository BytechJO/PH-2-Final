var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_69/demo.mp3",
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

var fillin_data = {
  layout: 1,

  /*
   * ترتيب الأسئلة سيتم من خلال CSS على شكل 2 × 2.
   * نخليها هنا متوافقة مع بنية FillIn.
   */
  numinrow: [[2], [2]],

  mainTitle: "../images/icons/gramprac_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "80px",
  },

  mainTitleAudio: "../audios/page_69/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft:
    "<span class='red_text'>1</span> Look and complete the conversation.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_69/1_Look_and_complete_the_conversation.mp3",

  image: "",

  imageposition: "back",

  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  parentClassName: "conversation_fillin_grid",

  questions: [
    {
      singleword: false,

      questionText: "How many cats have you got?",

      answerText: "I have got [_].",

      image: "../images/pages/activities/6.jpg",

      textaudios: [
        "../audios/page_69/How_many_cats_have_you_got.mp3",
        "../audios/page_69/I_have_got_three_cats.mp3",
      ],

      audio: "",

      audioenable: "default",

      answer: ["three cats"],

      alternateanswer: [["3 cats", "three", "3"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 50,

      type: "text",
    },

    {
      singleword: false,

      questionText: "[_] are in the field?",

      answerText: "There are [_].",

      image: "../images/pages/activities/4.jpg",

      textaudios: [
        "../audios/page_69/How_many_cows_are_in_the_field.mp3",
        "../audios/page_69/There_are_three_cows.mp3",
      ],

      audio: "",

      audioenable: "default",

      answer: ["How many cows", "two cows"],

      alternateanswer: [[], ["2 cows", "two", "2"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 100,

      type: "text",
    },

    {
      singleword: false,

      questionText: "[_] are barking?",

      answerText: "[_] are barking.",

      image: "../images/pages/activities/7.jpg",

      textaudios: [
        "../audios/page_69/How_many_dogs_are_barking.mp3",
        "../audios/page_69/Two_dogs_are_barking.mp3",
      ],

      audio: "",

      audioenable: "default",

      answer: ["How many dogs", "Two dogs"],

      alternateanswer: [[], ["2 dogs", "two", "2"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 100,

      type: "text",
    },

    {
      singleword: false,

      questionText: "[_] have they got?",

      answerText: "They have got [_].",

      image: "../images/pages/activities/5.jpg",

      textaudios: [
        "../audios/page_69/How_many_horses_have_they_got.mp3",
        "../audios/page_69/They_have_got_three_horses.mp3",
      ],

      audio: "",

      audioenable: "default",

      answer: ["How many horses", "three horses"],

      alternateanswer: [[], ["3 horses", "three", "3"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 100,

      type: "text",
    },
  ],
};
