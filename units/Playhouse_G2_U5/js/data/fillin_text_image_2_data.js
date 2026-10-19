var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(210, 35, 42)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/demo.mp3',
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
  "numinrow"              : [[1,1,1]],
  "mainTitle"             : "../images/icons/gram_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleAudio"        : "../audios/page_40/GRAMMAR.mp3",
  "mainTitleIconPos"      : {"right": "-18px"},
  "subTitleTextLeft"      : "<span class='red_text'>2</span> Read and write.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/under.mp3",
  "image"                 : "",
  "imageposition"         : "",// "front" (or) "back"
  "numbering"             : "none", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  // "defaultAnswer": [],
  "options": [],
  "optionsAudios":[],
  "questions":
    [
      {
        "singleword": false,
        "textFront":"<b>a</b> &nbsp; What’s the matter with me?",
        "text": "<b>b</b> &nbsp; You skip a lot. Now[_]muscles hurt.",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_4.png",
        "answer": ["your"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "textFront":"<b>a</b> &nbsp; What’s the matter with you and me?",
        "text": "<b>b</b> &nbsp; We ate too many sweets. Now[_] stomachs hurt.",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_5.png",
        "answer": ["our"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "textFront":"<b>a</b> &nbsp; What’s the matter with Jenny?",
        "text": "<b>b</b> &nbsp; She walked into the table leg. Now[_]foot hurts.",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_6.png",
        "answer": ["her"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      
    ]
  }