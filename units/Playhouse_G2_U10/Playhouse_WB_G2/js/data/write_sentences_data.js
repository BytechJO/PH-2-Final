var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(45 190 240)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_53/PLAYHOUSE_2_WB_UNIT_10_TRACK_07_01.mp3",
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

var write_sentences_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/WRITING.jpg",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../../../../../audios/WRITING.mp3",

  subTitleTextLeft:
    '<span class="blue_text">1</span> ' +
    "Look at each picture and write two sentences about it. " +
    "You can use the adjectives given. See the example below.",

  subTitleTextRight: "",

  subTitleAudio: "../audios/page_53/WRITING.mp3",

  /* =====================================================
       Example
    ===================================================== */

  example: {
    image: "../images/pages/activities/example.png",

    adjectives: ["pretty", "long"],

    sentences: ["The shirt is pretty.", "This is a long shirt."],
  },

  /* =====================================================
       Questions

       كل answerGroup يمثل معنى جملة مختلفة.

       ترتيب answerGroups غير مرتبط بترتيب الخانات.
       الطالب يستطيع كتابة أي مجموعة أولًا أو ثانيًا.
    ===================================================== */

  questions: [
    {
      number: 1,

      image: "../images/pages/activities/6-img-1.png",

      imageAlt: "A big new house",

      adjectives: ["big", "new"],

      maxlength: 100,

      answerGroups: [
        {
          id: "big",

          answers: [
            "The house is big.",
            "The house is big",
            "This house is big.",
            "This house is big",
            "It is a big house.",
            "It is a big house",
            "This is a big house.",
            "This is a big house",
          ],
        },

        {
          id: "new",

          answers: [
            "The house is new.",
            "The house is new",
            "This house is new.",
            "This house is new",
            "It is a new house.",
            "It is a new house",
            "This is a new house.",
            "This is a new house",
          ],
        },
      ],
    },

    {
      number: 2,

      image: "../images/pages/activities/6-img-3.png",

      imageAlt: "A pretty little bird",

      adjectives: ["pretty", "little"],

      maxlength: 100,

      answerGroups: [
        {
          id: "pretty",

          answers: [
            "The bird is pretty.",
            "The bird is pretty",
            "This bird is pretty.",
            "This bird is pretty",
            "It is a pretty bird.",
            "It is a pretty bird",
            "This is a pretty bird.",
            "This is a pretty bird",
          ],
        },

        {
          id: "little",

          answers: [
            "The bird is little.",
            "The bird is little",
            "This bird is little.",
            "This bird is little",
            "It is a little bird.",
            "It is a little bird",
            "This is a little bird.",
            "This is a little bird",
          ],
        },
      ],
    },

    {
      number: 3,

      image: "../images/pages/activities/6-img-2.png",

      imageAlt: "A scary tiger with sharp teeth",

      adjectives: ["sharp", "scary"],

      maxlength: 100,

      answerGroups: [
        {
          id: "sharp",

          answers: [
            "The tiger has sharp teeth.",
            "The tiger has sharp teeth",
            "The tiger has got sharp teeth.",
            "The tiger has got sharp teeth",
            "It has sharp teeth.",
            "It has sharp teeth",
            "Its teeth are sharp.",
            "Its teeth are sharp",
            "The tiger's teeth are sharp.",
            "The tiger's teeth are sharp",
          ],
        },

        {
          id: "scary",

          answers: [
            "The tiger is scary.",
            "The tiger is scary",
            "This tiger is scary.",
            "This tiger is scary",
            "It is a scary tiger.",
            "It is a scary tiger",
            "This is a scary tiger.",
            "This is a scary tiger",
          ],
        },
      ],
    },

    {
      number: 4,

      image: "../images/pages/activities/6-img-4.png",

      imageAlt: "A snowy cold day",

      adjectives: ["snowy", "cold"],

      maxlength: 100,

      answerGroups: [
        {
          id: "snowy",

          answers: [
            "It is snowy.",
            "It is snowy",
            "The weather is snowy.",
            "The weather is snowy",
            "It is a snowy day.",
            "It is a snowy day",
            "This is a snowy day.",
            "This is a snowy day",
            "The day is snowy.",
            "The day is snowy",
          ],
        },

        {
          id: "cold",

          answers: [
            "It is cold.",
            "It is cold",
            "The weather is cold.",
            "The weather is cold",
            "It is a cold day.",
            "It is a cold day",
            "This is a cold day.",
            "This is a cold day",
            "The day is cold.",
            "The day is cold",
          ],
        },
      ],
    },
  ],
};
