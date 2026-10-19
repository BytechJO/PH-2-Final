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
var linedraw_data = {
  layout: 1,
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_107/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft: "<span class='red_text'>3</span> Match.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  connect: "single", // single (or) multiple
  linecolor: "red",
  path: "line",
  strokewidth: "4",
  nodecolor: "red",
  nodeselectioncolor: "#f6967d",
  questions: {
    drags: [
      {
        text: "Yesterday I fixed",
        image: "no",
        audio: "../audios/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "The kids played",
        image: "no",
        audio: "../audios/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "She washed",
        image: "no",
        audio: "../audios/under.mp3",
        audioenable: "default", // correct (or) default
      },
      {
        text: "They walked",
        image: "no",
        audio: "../audios/under.mp3",
        audioenable: "default", // correct (or) default
      },
    ],
    drops: [
      {
        text: "on their bikes and skateboards.",
        image: "no",
        answer: [2],
        audio: "../audios/under.mp3",
        audioenable: "default",
      },
      {
        text: "all of the dishes.",
        image: "no",
        answer: [3],
        audio: "../audios/under.mp3",
        audioenable: "default",
      },
      {
        text: "all day in the park.",
        image: "no",
        answer: [4],
        audio: "../audios/under.mp3",
        audioenable: "default",
      },
      {
        text: "my broken toy.",
        image: "no",
        answer: [1],
        audio: "../audios/under.mp3",
        audioenable: "default",
      },
    ],
  },
};
