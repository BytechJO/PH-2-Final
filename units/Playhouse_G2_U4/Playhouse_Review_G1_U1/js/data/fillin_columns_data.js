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
    "numinrow"              : [[1,1,1,1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">1</span> Read and write.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "options"               : ["wife", "nephew", "husband", "aunt", "neighbour", "uncle", "niece"],
    "optionsAudios"         : ["","","","","","",""],
    "image"                 :"../images/pages/activities/Asset_1.png",
    "questions": [
        {
            "textfront": "Uncle John is Aunt Jane’s",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["husband"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "My brother’s daughter is my",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["niece"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "Amy lives next door, and she is my",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["neighbour"],
          "strictcase": "no", // yes (or) no              
          "type": "text", // text (or) number
        },
        {
            "textfront": "Aunt Polly is Uncle Dave’s",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["wife"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
          "textfront": "My mum’s sister is my",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["aunt"],
          "strictcase": "no", // yes (or) no              
          "type": "text", // text (or) number
        },
        {
            "textfront": "Our father’s brother is our",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["uncle"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "My sister’s son is my",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["nephew"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}