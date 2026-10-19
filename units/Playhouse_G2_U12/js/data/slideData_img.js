var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "phonics",
  playListData: [
    {
      audiourl: "../audios/page_92/demo.mp3",
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
  mainTitleAudio: "../audios/page_92/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>1</span> Listen, read and practise.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/phonics_1_icon.png"],
  subTitleAudio: "../audios/page_92/1_Listen_read_and_practise.mp3",
  slides: [
    {
      layout: "grid_columns",
      parentClassName: "textImg phonics",
      image: "../images/pages/page-img/phonics-img.png",
      mainImage: [""],
      audio: [
        "../audios/page_92/‘or’_words.mp3",
        "../audios/page_92/There_once_was_a_man_named_Mr_Mort.mp3",
        "../audios/page_92/He_was_not_tall_He_was_not_short.mp3",
        "../audios/page_92/He_sat_all_day_on_his_porch_Turning_off_and_on_his_torch.mp3",
      ],
      word: [
        "‘<span class='red_text'>or</span>’ words",
        "There once was a man named Mr. M<span class='red_text'>or</span>t.",
        "He was not tall. He was not sh<span class='red_text'>or</span>t.",
        "He sat all day on his p<span class='red_text'>or</span>ch,<br>" +
          "Turning off and on his t<span class='red_text'>or</span>ch.",
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
