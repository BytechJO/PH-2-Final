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

var fillin_data = {
  layout: 1,

  /*
   * 3 صفوف، في كل صف سؤالان.
   */
  numinrow: [[2], [2], [2]],

  mainTitle: "../images/icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "-20px",
  },

  mainTitleAudio: "../audios/page_58/PHONICS.mp3",

  subTitleTextLeft: '<span class="red_text">1</span> Add the apostrophes.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_58/Add_the_apostrophes.mp3",

  image: "",

  imageposition: "back",

  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  optionsAudios: [],

  parentClassName: "add_apostrophes_questions",

  questions: [
    {
      singleword: false,

      text: "What[_]s that over there?",

      textaudios: [
        "../audios/page_58/Whats_that_over_there.mp3",
        "../audios/page_58/Whats_that_over_there.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      /*
       * نخليها فارغة حتى fillin_version2
       * ما يحذف علامة apostrophe.
       */
      type: "",
    },

    {
      singleword: false,

      text: "It[_]s my new bike.",

      textaudios: [
        "../audios/page_58/Its_my_new_bike.mp3",
        "../audios/page_58/Its_my_new_bike.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "",
    },

    {
      singleword: false,

      text: "On Tuesday, we[_]re going on a field trip.",

      textaudios: [
        "../audios/page_58/On_Tuesday_were_going_on_a_field_trip.mp3",
        "../audios/page_58/On_Tuesday_were_going_on_a_field_trip.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "",
    },

    {
      singleword: false,

      text: "I think he[_]s very nice.",

      textaudios: [
        "../audios/page_58/I_think_hes_very_nice.mp3",
        "../audios/page_58/I_think_hes_very_nice.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "",
    },

    {
      singleword: false,

      text: "I[_]m helping my mum in the house today.",

      textaudios: [
        "../audios/page_58/Im_helping_my_mum_in_the_house_today.mp3",
        "../audios/page_58/Im_helping_my_mum_in_the_house_today.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "",
    },

    {
      singleword: false,

      text: "Where[_]s Mindy?",

      textaudios: [
        "../audios/page_58/Wheres_Mindy.mp3",
        "../audios/page_58/Wheres_Mindy.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "no",

      answer: ["'"],

      alternateanswer: [["’", "‘", "`", "´"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 1,

      type: "",
    },
  ],
};
