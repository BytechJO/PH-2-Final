var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_78/Look_and_write.mp3",
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

var linkedwriting_data = {
  layout: 1,

  /* =====================================================
     Main title
  ===================================================== */

  mainTitle: "../images/icons/gram_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_78/GRAMMAR.mp3",

  /* =====================================================
     Question title
  ===================================================== */

  subTitleText: '<span class="red_text">3</span> Look and write.',

  subTitleIcons: ["../images/pages/sb-icons/gram_2_icon.png"],

  subTitleAudio: "../audios/page_78/Look_and_write.mp3",

  /* =====================================================
     Separate instruction
  ===================================================== */

  instructionText:
    "Look at the dinosaurs in the pictures and write an adjective to describe each one.",

  instructionAudio: "../audios/page_78/Look_and_write.mp3",

  /* =====================================================
     Writing settings
  ===================================================== */

  linesPerCard: 3,

  /*
    عدد الأحرف في كل سطر.
    عند الوصول إليه ينتقل للسطر التالي.
  */

  lineMaxlength: 18,

  questions: [
    {
      image: "../images/pages/activities/dinosaur_2.png",

      alt: "Meat-eating dinosaur",

      cardClass: "dinosaur_card_1",
    },

    {
      image: "../images/pages/activities/dinosaur_3.png",

      alt: "Long-neck dinosaur",

      cardClass: "dinosaur_card_2",
    },

    {
      image: "../images/pages/activities/dinosaur_1.png",

      alt: "Flying dinosaur",

      cardClass: "dinosaur_card_3",
    },
  ],
};
