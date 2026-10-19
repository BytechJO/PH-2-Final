var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "phonics",
  playListData: [
    {
      audiourl: "../audios/page_58/demo.mp3",
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
  mainTitleAudio: "../audios/page_58/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>1</span> Listen, read and practise.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/phonics_1_icon.png"],
  subTitleAudio: "../audios/page_58/1_Listen_read_and_practise.mp3",
  slides: [
    {
      layout: "grid_columns",
      parentClassName: "textImg phonics",
      image: "../images/pages/page-img/phonics-img.png",
      mainImage: [""],
      audio: [
        "../audios/page_58/hard_‘th’_words.mp3",
        "../audios/page_58/I_have_two_feathers_in_a_vase.mp3",
        "../audios/page_58/You_must_pick_one_said_Mother.mp3",
        "../audios/page_58/I_cannot_choose_between_red_and_blue_If_not_this_one_then_the_other!.mp3",
      ],
      word: [
        "hard ‘<span class='red_text'>th</span>’ words",
        "I have two fea<span class='red_text'>th</span>ers in a vase.",
        "'You must pick one,' said Mo<span class='red_text'>th</span>er.",
        "I cannot choose between red and blue,<br>" +
          "If not <span class='red_text'>th</span>is one, <span class='red_text'>th</span>en the o<span class='red_text'>th</span>er! ",
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
