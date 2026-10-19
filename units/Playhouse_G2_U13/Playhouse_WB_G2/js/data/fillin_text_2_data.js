var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_68/PLAYHOUSE_2_WB_UNIT_13_TRACK_08_01.mp3",
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
function buildLocationAnswers(name, pronoun, positivePlaces, negativePlaces) {
  var answers = [];

  positivePlaces.forEach(function (positivePlace) {
    negativePlaces.forEach(function (negativePlace) {
      answers.push(
        name +
          " was in " +
          positivePlace +
          ". " +
          pronoun +
          " wasn't in " +
          negativePlace +
          ".",
      );

      answers.push(
        name +
          " was in " +
          positivePlace +
          ". " +
          pronoun +
          " was not in " +
          negativePlace +
          ".",
      );
    });
  });

  return answers;
}

var megAnswers = buildLocationAnswers(
  "Meg",
  "She",
  ["Europe", "North America"],
  ["Africa", "Asia", "Australia"],
);

var rickAnswers = buildLocationAnswers(
  "Rick",
  "He",
  ["Africa", "Australia"],
  ["Europe", "Asia", "North America"],
);

var timAnswers = buildLocationAnswers(
  "Tim",
  "He",
  ["Asia", "North America"],
  ["Europe", "Africa", "Australia"],
);

var rosyAnswers = buildLocationAnswers(
  "Rosy",
  "She",
  ["Europe", "Australia"],
  ["Africa", "Asia", "North America"],
);
var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../../../../../audios/WRITING.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span> Look at the table. Write a correct positive sentence and a negative sentence about each person. Use <span class="black_text">was</span>  and <span class="black_text">wasn’t</span> .',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  image: "../images/pages/activities/5-img-1.png",
  imageposition: "front", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  text: "Example: Meg was in Europe. She wasn’t in Australia.",
  questions: [
    {
      singleword: false,
      text: "Meg: [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: [megAnswers[0]],
      alternateanswer: [megAnswers.slice(1)],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "Rick: [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: [rickAnswers[0]],
      alternateanswer: [rickAnswers.slice(1)],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "Tim: [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: [timAnswers[0]],
      alternateanswer: [timAnswers.slice(1)],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },

    {
      singleword: false,
      text: "Rosy: [_]",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: [rosyAnswers[0]],
      alternateanswer: [rosyAnswers.slice(1)],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "text",
    },
  ],
};
