var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "phonics",
  playListData: [
    {
      audiourl: "../audios/page_70/demo.mp3",
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
var reading_data = {
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-20px" },
  mainTitleAudio: "../audios/page_70/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>1</span> Listen, read and practise.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/phonics_1_icon.png"],
  subTitleAudio: "../audios/page_70/1_Listen_read_and_practise.mp3",
  slides: [
    {
      layout: "grid_columns",
      parentClassName: "textImg phonics",
      image: "../images/pages/page-img/phonics-img.png",
      mainImage: [""],
      audio: [
        "../audios/page_70/‘-bl’_words.mp3",
        "../audios/page_70/Bluebird_bluebird_where_will_you_go.mp3",
        "../audios/page_70/I’m_off_to_the_country_where_the_wind_does_blow.mp3",
        "../audios/page_70/If_the_wind_blows_cold_put_a_blanket_on_your_back.mp3",
        "../audios/page_70/Make_sure_to_wear_a_blue_one_not_black.mp3",
      ],
      word: [
        "‘-<span class='red_text'>bl</span>’ words",
        "<span class='red_text'>Bl</span>uebird, <span class='red_text'>bl</span>uebird where will you go?",
        "I’m off to the country where the wind does <span class='red_text'>bl</span>ow!",
        "If the wind <span class='red_text'>bl</span>ows cold, put a <span class='red_text'>bl</span>anket on your back.",
        "Make sure to wear a <span class='red_text'>bl</span>ue one, not <span class='red_text'>bl</span>ack!",
      ],

      imagePlacePos: [
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
      ],
    },
  ],
};
