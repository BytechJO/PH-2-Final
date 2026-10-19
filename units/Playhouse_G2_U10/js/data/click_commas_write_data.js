var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_80/FILL_IN_THE_MISSING_COMMAS.mp3",
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

var click_commas_write_data = {
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_80/PHONICS.mp3",

  subTitleTextLeft:
    '<span class="red_text">1</span> Fill in the missing commas. Then write.',

  subTitleTextRight: "",

  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],

  subTitleAudio: "../audios/page_80/FILL_IN_THE_MISSING_COMMAS.mp3",

  questions: [
    {
      id: 1,

      image: "../images/pages/activities/round_bumpy_dinosaur.png",

      sentence: "The round and bumpy dinosaur is my favourite dinosaur.",

      /*
        الفاصلة بعد كلمة round
        index يبدأ من صفر

        The      = 0
        round    = 1
        and      = 2
        bumpy    = 3
      */

      commaAfter: [1],

      writeAnswer: "The round, and bumpy dinosaur is my favourite dinosaur.",
    },

    {
      id: 2,

      image: "../images/pages/activities/big_tall_tree.png",

      sentence: "The big tall tree stood among the short brown old trees.",

      /*
        The   = 0
        big   = 1
        tall  = 2
        tree  = 3
        stood = 4
        among = 5
        the   = 6
        short = 7
        brown = 8
        old   = 9
      */

      commaAfter: [1, 7, 8],

      writeAnswer:
        "The big, tall tree stood among the short, brown, old trees.",
    },

    {
      id: 3,

      image: "../images/pages/activities/study_practise_clean.png",

      sentence:
        "After school I need to study practise clean up and have a bath.",

      /*
        After    = 0
        school   = 1
        I        = 2
        need     = 3
        to       = 4
        study    = 5
        practise = 6
        clean    = 7
        up       = 8
        and      = 9
      */

      commaAfter: [5, 6],

      writeAnswer:
        "After school I need to study, practise, clean up and have a bath.",
    },
  ],
};
