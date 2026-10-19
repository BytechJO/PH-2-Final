var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_68/fullQ2.mp3",
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
var linedraw_data = {
  layout: 1,
  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "-20px" },
  mainTitleAudio: "../audios/page_68/GRAMMAR.mp3",
  subTitleTextLeft: "<span class='red_text'>2</span> Listen, read and match.",
  subTitleTextRight: "",
  subTitleIcons: [
    "../images/pages/sb-icons/conv_1_icon.png",
    "../images/pages/sb-icons/gram_2_icon.png",
  ],
  subTitleAudio: "../audios/page_68/2_Listen_read_and_match.mp3",
  image: "",
  connect: "multiple", // single (or) multiple
  linecolor: "#6d6d6d",
  path: "line",
  strokewidth: "4",
  nodecolor: "#d2232a",
  nodeselectioncolor: "#6d6d6d",
  questions: {
    drags: [
      {
        text: "<b>1</b> &nbsp; How many chickens has the farmer got?",
        image: "no",
        audio: "../audios/page_68/1_How_many_chickens_has_the_farmer_got.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<b>2</b> &nbsp; How many ducks are in the pond?",
        image: "no",
        audio: "../audios/page_68/2_How_many_dukes_are_in_the_pond.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<b>3</b> &nbsp; How many cows are on the grass?",
        image: "no",
        audio: "../audios/page_68/3_How_many_cows_are_on_the_grass.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "<b>4</b> &nbsp; How many horses have the children got?",
        image: "no",
        audio: "../audios/page_68/4_How_many_horses_have_the_children_got.mp3",
        audioenable: "default", // correct (or) default
      },
    ],
    drops: [
      {
        text: "There are two on the grass.",
        image: "no",
        answer: [3],
        audio: "../audios/page_68/There_are_two_on_the_grass.mp3",
        audioenable: "default",
      },
      {
        text: "The farmer has got three on the farm.",
        image: "no",
        answer: [1],
        audio: "../audios/page_68/The_farmer_has_got_three_on_the_farm.mp3",
        audioenable: "default",
      },
      {
        text: "They’ve got one each.",
        image: "no",
        answer: [4],
        audio: "../audios/page_68/They’ve_got_one_each.mp3",
        audioenable: "default",
      },
      {
        text: "Only one is in the pond.",
        image: "no",
        answer: [2],
        audio: "../audios/page_68/Only_one_is_in_the_pond.mp3",
        audioenable: "default",
      },
    ],
  },
};
