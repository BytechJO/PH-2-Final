var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_78/Good_morning,.mp3",
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

var mcq_inline_adjective_data = {
  layout: 1,

  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_78/GRAMMAR.mp3",
  mainTitleIconPos: { right: "-18px" },

  subTitleTextLeft: '<span class="red_text">2</span> Read and choose.',

  subTitleTextRight: "",

  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],

  subTitleAudio:
    "../audios/page_78/PLAYHOUSE_2_SB_UNIT_10_TRACK_06_01_[cut_3sec].mp3",

  instruction:
    "Ms. Lopez is talking about the museum visit. " +
    "Choose the correct adjective.<br>" +
    "Then compare with a partner.",
  instructionAudio:
    "../audios/page_78/Ms._Lopez_is_talking_about_the_museum_visit._Choose_the_correct_adjective_Then_compare_with_a_partner.mp3",
  content: [
    {
      type: "text",
      html:
        "Good morning, class. Today we are here at the " +
        "museum of natural history. The museum is very ",
    },

    {
      type: "choice",
      options: ["big", "small"],
      answer: 1,
    },

    {
      type: "text",
      html:
        ", so don’t get lost! There are many rooms to explore. " +
        "Let’s start in the meat-eater hall. Meat-eating dinosaurs " +
        "have ",
    },

    {
      type: "choice",
      options: ["sharp", "round"],
      answer: 1,
    },

    {
      type: "text",
      html: " teeth. Do you think that meat-eating dinosaurs are ",
    },

    {
      type: "choice",
      options: ["scary", "flat"],
      answer: 1,
    },

    {
      type: "text",
      html:
        "? Here is another kind of dinosaur. These dinosaurs " +
        "do not eat meat. They eat plants. They especially like " +
        "leaves from trees. They can eat the leaves because " +
        "they have ",
    },

    {
      type: "choice",
      options: ["long", "short"],
      answer: 1,
    },

    {
      type: "text",
      html: " necks to reach the tops of the trees.",
    },
  ],
};
