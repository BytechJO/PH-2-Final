var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(45 190 240)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_29/demo.mp3',
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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/word_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/word_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../../../../../audios/WORD_POWER.mp3",
    "subTitleTextLeft"      : '<span class="red_text">2</span> How do you feel today?',
    "subTitleTextRight"     : '',
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "options_words":[],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Yoshi speaks English."],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
     
      ]
    }