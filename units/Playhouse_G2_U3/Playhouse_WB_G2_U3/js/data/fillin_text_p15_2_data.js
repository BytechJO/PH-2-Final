var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(45 190 240)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_15/PLAYHOUSE_2_WB_UNIT_3_TRACK_03_01.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../../../../../audios/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="red_text">2</span> Write the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/readwrite_main_title_icon.png"],
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
          "text": "[_]? Yes, he does.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "options_words":["he","want","eggs"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Does he want eggs"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? No, they don’t.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["like","they","mayonnaise"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Do they like mayonnaise"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? We buy juice.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["What","you","buy"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["What do you buy"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? They play at the park.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["Where","they","play"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Where do they play"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },       
      ]
    }