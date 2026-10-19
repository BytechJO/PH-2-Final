
var click_commas_only_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "90px" },

  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    '<span class="red_text">4</span> Write in the missing commas.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  questions: [
    {
      id: 1,

      sentence: "Megan likes apples drinks ice cream and potatoes.",

      /*
        Megan      0
        likes      1
        apples     2
        drinks     3
        ice        4
        cream      5
        and        6
        potatoes.  7
      */

      commaAfter: [2, 3],

      image: "",
      imageClass: "",
    },

    {
      id: 2,

      sentence: "We went to the shoe shop clothes shop and toy shop.",

      /*
        We       0
        went     1
        to       2
        the      3
        shoe     4
        shop     5
        clothes  6
        shop     7
        and      8
        toy      9
        shop.    10
      */

      commaAfter: [5],

      image: "",
      imageClass: "",
    },

    {
      id: 3,

      sentence: "It was a short round dirty and scary monster.",

      /*
        It       0
        was      1
        a        2
        short    3
        round    4
        dirty    5
        and      6
        scary    7
        monster. 8
      */

      commaAfter: [3, 4],

      image: "",
      imageClass: "",
    },

    {
      id: 4,

      sentence: "Don’t eat drink and talk at the same time.",

      /*
        Don’t  0
        eat    1
        drink  2
        and    3
        talk   4
        at     5
        the    6
        same   7
        time.  8
      */

      commaAfter: [1],

      image: "",
      imageClass: "",
    },
  ],
};
