var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
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
    "numinrow"              : [[1,1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">1</span> Look and write.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "options"               : ["escalator","toy shop","clothes shop","food court"],
    "optionsAudios"         : ["","","","","","",""],
    "image"                 :"../images/pages/activities/Asset_20.png",
    "questions": [
        {
            "textfront": "The man is at the",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["clothes shop"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Lilly is at the",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["toy shop"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "Max is at the",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["food court"],
          "strictcase": "no", // yes (or) no              
          "type": "text", // text (or) number
        },
        {
            "textfront": "The girl is on the",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["escalator"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}