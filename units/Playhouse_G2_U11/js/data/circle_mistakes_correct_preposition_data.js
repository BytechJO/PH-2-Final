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

var circle_mistakes_data = {
  layout: 1,

  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_85/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    "<span class='circle_mistakes_number'>2</span> Look and read. Circle the mistakes and write the correct preposition.",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "",

  image: "../images/pages/activities/6.jpg",

  /*
   * كل عنصر من نوع preposition قابل للكبس.
   *
   * isMistake: true
   * تعني أن الطالب يجب أن يحدد الكلمة ويكتب التصحيح.
   *
   * isMistake: false
   * تعني أن الكلمة صحيحة ويجب ألا يحددها.
   */
  storyParts: [
    {
      type: "text",
      text: "My mum took the picture. That is a sea turtle sleeping ",
    },

    {
      type: "preposition",
      text: "above",

      isMistake: true,

      answers: ["near", "next to", "beside"],

      inputPosition: {
        top: "0",
        left: "50%",
      },
    },

    {
      type: "text",
      text: " the rock. The octopus is swimming ",
    },

    {
      type: "preposition",
      text: "above",

      isMistake: true,

      answers: ["under"],

      inputPosition: {
        top: "0",
        left: "50%",
      },
    },

    {
      type: "text",
      text: " the whale. There is the starfish ",
    },

    {
      type: "preposition",
      text: "under",

      isMistake: true,

      answers: ["near", "next to", "beside"],

      inputPosition: {
        top: "0",
        left: "50%",
      },
    },

    {
      type: "text",
      text: " the rock. That is a shark swimming ",
    },

    {
      type: "preposition",
      text: "above",

      isMistake: true,

      answers: ["under", "below"],

      inputPosition: {
        top: "0",
        left: "50%",
      },
    },

    {
      type: "text",
      text: " the whale, and there is a white fish ",
    },

    {
      type: "preposition",
      text: "under",

      isMistake: true,

      answers: ["near", "next to", "beside"],

      inputPosition: {
        top: "0",
        left: "50%",
      },
    },

    {
      type: "text",
      text: " the octopus. I love sea animals!",
    },
  ],
};
