var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_41/demo.mp3",
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
  mainTitleAudio: "../audios/page_41/PHONICS.mp3",
  subTitleTextLeft:
    "<span class='red_text'>1</span> Listen, read and practise.",
  subTitleTextRight: "",
  subTitleIcons: ["../images/pages/sb-icons/phonics_1_icon.png"],
  subTitleAudio: "../audios/page_41/1_Listen_read_and_practise.mp3",
  slides: [
    {
      layout: "grid_columns",
      parentClassName: "textImg",
      image: "../images/pages/page-img/phonics-img.png",
      mainImage: [""],
      audio: [
        "../audios/page_41/Short_‘oo’_words.mp3",
        "../audios/page_41/My_mother_has_a_special_book.mp3",
        "../audios/page_41/from_where_she_learns_how_to_cook.mp3",
        "../audios/page_41/She_lets_me_stand_on_a_block_of_wood.mp3",
      ],
      word: [
        "Short ‘<span class='red_text'>oo</span>’ words",
        "My mother has a special b<span class='red_text'>oo</span>k,",
        "from where she learns how to c<span class='red_text'>oo</span>k.",
        "She lets me stand on a block of w<span class='red_text'>oo</span>d,<br>" +
          "and help her only if I’m g<span class='red_text'>oo</span>d.",
      ],

      imagePlacePos: [
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
        // {"colWidth": [12], "colData": [1] },
      ],
    },
  ],
};
