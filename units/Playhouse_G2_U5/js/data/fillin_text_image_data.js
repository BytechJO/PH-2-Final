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
        "textFront":"<b>a</b> &nbsp; What’s the matter with you? ",
        "text": "<b>b</b> &nbsp; I fell down in the playground. Now[_]knee hurts.",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_1.png",
        "answer": ["my"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "textFront":"<b>a</b> &nbsp; What’s the matter with Max?",
        "text": "<b>b</b> &nbsp; The ball hit him in the back. Now[_] head hurts",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_2.png",
        "answer": ["his"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "textFront":"<b>a</b> &nbsp; What’s the matter with them?",
        "text": "<b>b</b> &nbsp; The books fell on[_]toes.",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/fillin_img_3.png",
        "answer": ["their"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 50,
        "type": "text", // text (or) number
      },
      
    ]
  }