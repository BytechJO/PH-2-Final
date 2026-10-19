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
    "mainTitle"             : "../images/icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_24/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "-18px"},
    "subTitleTextLeft"      : '<span class="red_text">2</span> Write the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "activityheading"       : 'Practise it! Complete the conversation using the Word Power words',
    "activityheading_audio" : "../audios/under.mp3",
    "main_activityheading"  :"../images/pages/activities/conversation.jpg",
    "main_activityheading_audio" : "../audios/under.mp3",
    "activitysubheading"    : "",
    "activityicon"          : "../images/icons/key_icon.png",
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
          "text": "[_]? Yes, she does.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "options_words":["she","like","rice"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Does she like rice"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? No, he doesn’t drink juice.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["he","drink","juice"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Does he drink juice"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? They eat cereal.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["What","they","eat"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["What do they eat"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]? I buy food at the supermarket.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["Where","you","buy","food"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Where do you buy food"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },       
      ]
    }