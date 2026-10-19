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

var look_read_match_data = {
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_79/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft: '<span class="red_text">1</span> Look, read and match.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  /*
        الإجابات:

        السؤال الأول  → الصورة رقم 3
        السؤال الثاني → الصورة رقم 4
        السؤال الثالث → الصورة رقم 2
        السؤال الرابع → الصورة رقم 1
    */

  questions: [
    {
      id: 1,

      text: "I’m looking at something that is<br>long and scary.",

      personImage: "../images/pages/look_read_match/person_1.png",

      answer: 3,
    },

    {
      id: 2,

      text: "I’m looking at something that is<br>flat and wide.",

      personImage: "../images/pages/look_read_match/person_2.png",

      answer: 4,
    },

    {
      id: 3,

      text: "I’m looking at something that<br>is big.",

      personImage: "../images/pages/look_read_match/person_3.png",

      answer: 2,
    },

    {
      id: 4,

      text: "I’m looking at something that is<br>small.",

      personImage: "../images/pages/look_read_match/person_4.png",

      answer: 1,
    },
  ],

  options: [
    {
      number: 1,

      image: "../images/pages/look_read_match/pencil.jpg",

      alt: "pencil",
    },

    {
      number: 2,

      image: "../images/pages/look_read_match/building.jpg",

      alt: "building",
    },

    {
      number: 3,

      image: "../images/pages/look_read_match/snake.jpg",

      alt: "snake",
    },

    {
      number: 4,

      image: "../images/pages/look_read_match/tv.jpg",

      alt: "television",
    },
  ],
};
