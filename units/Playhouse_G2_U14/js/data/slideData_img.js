var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "phonics",
  playListData: [
    {
      audiourl: "../audios/page_108/demo.mp3",
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
  mainTitleAudio: "../audios/page_108/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>1</span> Listen, read and practise.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/phonics_1_icon.png"],
  subTitleAudio: "../audios/page_108/1_Listen_read_and_practise.mp3",
  slides: [
    {
      layout: "grid_columns",
      parentClassName: "textImg phonics",
      image: "../images/pages/page-img/phonics-img.png",
      mainImage: [""],
      audio: [
        "../audios/page_108/‘-old’_words.mp3",
        "../audios/page_108/There_is_a_bold_lady_who_lives_in_a_house.mp3",
        "../audios/page_108/That_is_made_of_silver_and_gold.mp3",
        "../audios/page_108/Because_she_is_old_and_will_never_leave_To_this_day_it_has_never_been_sold.mp3",
      ],
      word: [
        "‘<span class='red_text'>-old</span>’ words.",
        "There is a b<span class='red_text'>old</span> lady who lives in a house.",
        "That is made of silver and g<span class='red_text'>old</span>.",
        "Because she is <span class='red_text'>old</span> and will never leave,<br>" +
          "To this day it has never been s<span class='red_text'>old</span>.",
      ],

      imagePlacePos: [
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
      ],
    },
  ],
};
