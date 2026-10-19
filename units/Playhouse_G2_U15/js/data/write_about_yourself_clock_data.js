var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",
  playListData: [
    { audiourl: "../audios/demo.mp3" },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var write_about_clock_data = {
  layout: 1,
  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_112/GRAMMAR.mp3",
  mainTitleIconPos: { right: "-18px" },

  subTitleTextLeft:
    '<span class="red_text">3</span> Write about yourself. Then fill in the clock.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  defaultHour: 12,

  questions: [
    {
      number: 1,
      text: "I wake up every morning at",
      placeholder: "",
      defaultHour: 12,
    },
    {
      number: 2,
      text: "I go to school at",
      placeholder: "",
      defaultHour: 12,
    },
    {
      number: 3,
      text: "I go to bed at",
      placeholder: "",
      defaultHour: 12,
    },
  ],
};
