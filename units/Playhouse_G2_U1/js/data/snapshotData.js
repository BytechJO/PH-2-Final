var snapshot_data = {
  snapshot: [
    {
      audio: [
        "../audios/page_10/pizza.mp3",
        "../audios/page_10/dough.mp3",
        "../audios/page_10/sauce.mp3",
        "../audios/page_10/sprinkle.mp3",
        "../audios/page_10/cheese.mp3",
        "../audios/page_10/add.mp3",
        "../audios/page_10/pepperoni.mp3",
        "../audios/page_10/slice.mp3",
      ],
      image: [
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png",
      ],
      word: [
        "<span>pizza</span>",
        "<span>dough</span>",
        "<span>sauce</span>",
        "<span>sprinkle</span>",
        "<span>cheese</span>",
        "<span>add</span>",
        "<span>pepperoni</span>",
        "<span>slice</span>",
      ],
      imagePlacePos: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
    },
  ],
  popuptitle: "What I Want To Know:",
};

var snapshotPopup_data =
  "<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

// var Popups_data = {
//   "popups": [{
//     "squirrelPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": "../audios/page_10/pizza.mp3"
//     }],
//     "vocabularyPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3"],
//       "word": ["<span>pizza</span>","<span>dough</span>"],
//     }],
//     "listenPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3"],
//       "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png"],
//       "word": ["<span>pizza</span>","<span>dough</span>"],
//     }]
//   }]
// }

// var Popups_data = {
//   'apk': {
//     "text": ["<div><p>Do you help your family with cooking?</p><p>What is your family’s favorite food? Who cooks it for you?</p></div>"],
//     "audio": ["../audios/page_10/pizza.mp3"]},
//   'ccss': {
//     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>"],
//     "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3"]},
//   'listen': {
//     "leftImage": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>"],
//     "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png"],
//     "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3"]},
//   // 'highlights' : "<div>    Author: Dawn King<br>Illustrator: Mary Sullivan</div>",
//   // 'welcomecontent': "<div class='wel_scr_cont' style='color:rgb(227, 32, 44);'> Pizza is fun to make and tasty for the young and old alike.</div>"
// }

var Popups_data = {
  slides: [
    {
      // 'apk': {
      //   "text": ["<div><p>I need your help.<br />Can you help me find the restaurant in the picture?</p></div>"],
      //   "audio": ["../audios/page_10/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/page_10/Pg4_Vocabulary_Adult Lady.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3"]},
      listen: {
        backgroundImage: "../images/pages/page-1/1-word-background.png",
        mainTitle: "../images/icons/word-power.png",
        mainTitle_audio: "../audios/page_10/word.mp3",
        titleTexts: [
          "<span class='blue_text'>1</span> Listen and say.",
          "<span class='blue_text'>2</span> Listen and point.",
          "<span class='blue_text'>3</span> Read.",
        ],
        titleIcons: [
          "../images/pages/sb-icons/conv_1_icon.png",
          "../images/pages/sb-icons/conv_1_icon.png",
          "../images/pages/page-1/q-1-icon-3.png",
        ],
        titlesAudio: [
          "../audios/page_10/1_Listen_and_say.mp3",
          "../audios/page_10/PLAYHOUSE_1_SB_UNIT_1_TRACK_02_02.mp3",
        ],
        image: [
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
        ],
        words: [
          "1 computer",
          "2 lunch",
          "3 uniform",
          "4 glue",
          "5 keys",
          "6 homework",
          "7 pencil case",
          "8 trainers",
          "9 scissors",
          "10 textbook",
        ],
        audio: [
          "../audios/page_10/1_computer.mp3",
          "../audios/page_10/2_lunch.mp3",
          "../audios/page_10/3_uniform.mp3",
          "../audios/page_10/4_glue.mp3",
          "../audios/page_10/5_keys.mp3",
          "../audios/page_10/6_homework.mp3",
          "../audios/page_10/7_pencil_case.mp3",
          "../audios/page_10/8_trainers.mp3",
          "../audios/page_10/9_scissors.mp3",
          "../audios/page_10/10_textbook.mp3",
        ],
      },
      listen2: {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        mainTitle: "../images/icons/word-power.png",
        mainTitle_audio: "../audios/page_10/word.mp3",
        titleTexts: ["<span class='blue_text'>4</span> You do it."],
        titleIcons: ["../images/pages/sb-icons/conv_1_icon.png"],
        titleTextRight: "<span class='blue_text'> Ask and answer.</span>",
        titlesAudio: ["../audios/page_10/Pg4_1.2_Adult_Lady.mp3"],
        image: [
          "../images/pages/page-1/2-img-1.png",
          "../images/pages/page-1/2-img-2.png",
        ],
        audio: [
          "../audios/page_10/Pg5_2.2_Adult Lady.mp3",
          "../audios/page_10/Pg5_2.3_Adult Lady.mp3",
        ],
      },
      // 'read': {
      //   "leftImage": "../images/pages/snapshots/page-2/popup-1-icon.png",
      //   "image": ["../images/pages/snapshots/page-2/popup-1-elem-1.png","../images/pages/snapshots/page-2/popup-1-elem-2.png"],
      //   "audio": ["../audios/page_10/Pg6_1.3_Adult Lady.mp3","../audios/page_10/Pg6_1.4_Adult Lady.mp3"]},
      // 'rightSection': {
      //   "mainImage": ["../images/pages/snapshots/page-2/image page 2.png"],
      //   "convImage": ["../images/pages/snapshots/page-2/conv page 2.png", "../audios/page_10/Pg5_1.1_Stella.mp3"],
      //   "bottomSqu": ["../images/pages/snapshots/page-2/squirrel.png", "../audios/page_10/pizza.mp3"]
      // }
    },
    // {
    //   'apk': {
    //     "text": ["<div><p>Do you help your family with cooking?</p></div>"],
    //     "audio": ["../audios/page_10/pizza.mp3"]},
    //   'ccss': {
    //     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>"],
    //     "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3"]},
    //   'listen': {
    //     "leftImage": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
    //     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>"],
    //     "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png"],
    //     "audio": ["../audios/page_10/pizza.mp3","../audios/page_10/dough.mp3", "../audios/page_10/pizza.mp3"]},
    // }
  ],
  class_name: ["", "", "", "", "", "", "", "", "", "", "", ""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  words: [
    "computer",
    "lunch",
    "uniform",
    "glue",
    "keys",
    "homework",
    "pencil case",
    "trainers",
    "scissors",
    "textbook",
  ],

  points: [
    "../images/pages/page-1/intro-1.png",
    "../images/pages/page-1/intro-2.png",
    "../images/pages/page-1/intro-3.png",
    "../images/pages/page-1/intro-4.png",
    "../images/pages/page-1/intro-5.png",
    "../images/pages/page-1/intro-6.png",
    "../images/pages/page-1/intro-7.png",
    "../images/pages/page-1/intro-8.png",
    "../images/pages/page-1/intro-9.png",
    "../images/pages/page-1/intro-10.png",
    // "../images/pages/page-1/intro-11.png",
    // "../images/pages/page-1/intro-12.png",
  ],
  postions: [
    "left: 22%; top: 30%;",
    "left: 45.31%; top: 31.25%;",
    "left: 37.50%; top: 47.50%;",
    "left: 51.5%;  top: 12%;",
    "left: 59.31%; top: 12%;",
    "left: 65.47%; top: 10%;",
    "left: 58%; top: 50.5%;",
    "left: 44.22%; top: 87%;",
    "left: 53.5%; top: 87%;",
    "left: 63%; top: 87%;",
  ],
  imagesAudio: [
    "../audios/page_10/1_computer.mp3",
    "../audios/page_10/2_lunch.mp3",
    "../audios/page_10/3_uniform.mp3",
    "../audios/page_10/4_glue.mp3",
    "../audios/page_10/5_keys.mp3",
    "../audios/page_10/6_homework.mp3",
    "../audios/page_10/7_pencil_case.mp3",
    "../audios/page_10/8_trainers.mp3",
    "../audios/page_10/9_scissors.mp3",
    "../audios/page_10/10_textbook.mp3",
  ],
};
