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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_25/GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="red_text">2</span> You do it.',
    "subTitleTextRight"     : "Ask a friend. Then write.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    // "activityheading"       : '',
    // "activityheading_audio" : "../audios/under.mp3",
    // "main_activityheading"  :"../images/pages/activities/conversation.jpg",
    // "main_activityheading_audio" : "../audios/under.mp3",
    // "activitysubheading"    : "",
    // "activityicon"          : "../images/icons/key_icon.png",
    "image"                 : ["../images/pages/page-3/p25_2_img_1.png","../images/pages/page-3/p25_2_img_2.png"],
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "Q[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image":"",
          "answer": ["potatoes","soup"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "A[_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image":"",
          "answer": ["potatoes","soup"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }