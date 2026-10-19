var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(45, 190, 240)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/under.mp3",
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

var click_commas_only_data = {
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "90px" },

  mainTitleAudio: "../../../../../audios/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    '<span class="blue_text">2</span> Write the missing commas in the sentences.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  questions: [
    {
      id: 1,

      sentence: "My uncle has got an old big red car.",

      /*
        My     0
        uncle  1
        has    2
        got    3
        an     4
        old    5
        big    6
        red    7
        car.   8
      */

      commaAfter: [5, 6],

      image: "../images/pages/activities/5.png",

      imageClass: "car_image",
    },

    {
      id: 2,

      sentence: "Our cat ate from the small round clean dish.",

      /*
        Our    0
        cat    1
        ate    2
        from   3
        the    4
        small  5
        round  6
        clean  7
        dish.  8
      */

      commaAfter: [5, 6],

      image: "",

      imageClass: "",
    },

    {
      id: 3,

      sentence: "My sister has got a soft large brown teddy bear.",

      /*
        My      0
        sister  1
        has     2
        got     3
        a       4
        soft    5
        large   6
        brown   7
        teddy   8
        bear.   9
      */

      commaAfter: [5, 6],

      image: "../images/pages/activities/6.jpg",

      imageClass: "teddy_image",
    },

    {
      id: 4,

      sentence: "This dress is new long and pretty.",

      /*
        This    0
        dress   1
        is      2
        new     3
        long    4
        and     5
        pretty. 6
      */

      commaAfter: [3],

      image: "",

      imageClass: "",
    },
  ],
};
