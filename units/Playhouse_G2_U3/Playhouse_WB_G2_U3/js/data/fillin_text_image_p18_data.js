var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_18/PLAYHOUSE_2_WB_UNIT_3_TRACK_08_01.mp3",
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

/* =========================================================
   Build all accepted answers
========================================================= */

function buildLikeAnswers(name, pronoun, positiveItems, negativeItems) {
  var answers = [];

  positiveItems.forEach(function (item) {
    answers.push(
      "Does " + name + " like " + item + "? Yes, " + pronoun + " does.",
    );

    answers.push(
      "Does " + name + " like " + item + "? Yes " + pronoun + " does.",
    );
  });

  negativeItems.forEach(function (item) {
    answers.push(
      "Does " + name + " like " + item + "? No, " + pronoun + " doesn't.",
    );

    answers.push(
      "Does " + name + " like " + item + "? No " + pronoun + " doesn't.",
    );

    answers.push(
      "Does " + name + " like " + item + "? No, " + pronoun + " does not.",
    );

    answers.push(
      "Does " + name + " like " + item + "? No " + pronoun + " does not.",
    );
  });

  return answers;
}

/* =========================================================
   Answers according to the table
========================================================= */

var yoshiAnswers = buildLikeAnswers(
  "Yoshi",
  "he",
  ["chocolate", "crisps"],
  ["pasta", "biscuits"],
);

var maxAnswers = buildLikeAnswers(
  "Max",
  "he",
  ["pasta", "biscuits"],
  ["chocolate", "crisps"],
);

var lillyAnswers = buildLikeAnswers(
  "Lilly",
  "she",
  ["chocolate", "crisps"],
  ["pasta", "biscuits"],
);

var jennyAnswers = buildLikeAnswers(
  "Jenny",
  "she",
  ["chocolate", "pasta"],
  ["biscuits", "crisps"],
);

/* =========================================================
   Activity data
========================================================= */

var fillin_data = {
  layout: 1,

  numinrow: [[1, 1, 1, 1]],

  mainTitle: "../images/pages/sb-icons/writing.jpg",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../../../../../audios/WRITING.mp3",

  subTitleTextLeft:
    '<span class="blue_text">1</span> Look at the table and see what each person likes. Write a question and an answer for each.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  activityheading: "",

  activityheading_audio: "../audios/under.mp3",

  activityicon: "../images/icons/key_icon.png",

  main_activityheading: "../images/pages/activities/WORD_POWER.jpg",

  main_activityheading_audio: "../audios/under.mp3",

  /*
    السؤال الأول Example جاهز وreadonly
  */
  defaultAnswer: 1,

  leftList: "",

  image: "../images/pages/activities/p18.png",

  title: "",

  questions: [
    {
      textfront: "Yoshi:",

      audio: "../audios/under.mp3",

      audioenable: "default",

      image: "",

      answer: ["Does Yoshi like pasta? No, he doesn't."],

      alternateanswer: [yoshiAnswers],

      strictcase: "no",

      type: "text",
    },

    {
      textfront: "Max:",

      audio: "../audios/under.mp3",

      audioenable: "default",

      image: "",

      answer: [maxAnswers[0]],

      alternateanswer: [maxAnswers.slice(1)],

      strictcase: "no",

      type: "text",
    },

    {
      textfront: "Lilly:",

      audio: "../audios/under.mp3",

      audioenable: "default",

      image: "",

      answer: [lillyAnswers[0]],

      alternateanswer: [lillyAnswers.slice(1)],

      strictcase: "no",

      type: "text",
    },

    {
      textfront: "Jenny:",

      audio: "../audios/under.mp3",

      audioenable: "default",

      image: "",

      answer: [jennyAnswers[0]],

      alternateanswer: [jennyAnswers.slice(1)],

      strictcase: "no",

      type: "text",
    },
  ],
};
