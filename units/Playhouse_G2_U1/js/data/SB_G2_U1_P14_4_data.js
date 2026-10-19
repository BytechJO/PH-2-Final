var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(210, 35, 42)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_36/demo.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1],[1]],
    "mainTitle"             : "../images/icons/phonics_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-25px"},
    "mainTitleAudio"        : "../audios/page_14/PHONICS.mp3",
    "subTitleTextLeft"      : '<span class="red_text">1</span> Unscramble the words to make a complete sentence.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "activityheading"       : "",
    "activityheading_audio" : "../audios/under.mp3",
    "activityicon"          : "../images/icons/key_icon.png",
    "main_activityheading"  :"../images/pages/activities/WORD_POWER.jpg",
    "main_activityheading_audio" : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "imageposition"         :"front",
    "questions": [
        {
            "textfront": "<span>football</span> <span>plays</span> <span>Max</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "correct", // correct (or) default
            "image": "../images/pages/activities/p14_4_1.png",
            "answer": ["Max plays football"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "<span>teacher</span> <span>a book</span> <span>reads</span> <span>the</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "correct", // correct (or) default
            "image": "../images/pages/activities/p14_4_2.png",
            "answer": ["The teacher reads a book"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
       
    ]
}