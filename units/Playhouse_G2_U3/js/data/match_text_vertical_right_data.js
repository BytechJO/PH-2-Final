var stereo_data = {
    "audio":"",
    "exist":true,
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
var linedraw_data = {    
    "layout"                : 1,
    "mainTitle"             : "../images/icons/adv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-20px"},
    "mainTitleAudio"        : "../audios/page_27/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='red_text'>2</span> Read and choose",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/phonics_3_icon.png"],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> Definitely!","<span class='red_text'>✓</span> bottle of juice"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "red",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#ffcbbe84",
    "nodeselectioncolor"    : '#f6967d', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "Who has got crisps?",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "Who wants to bring juice?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "Who has got a loaf of bread?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "Yoshi",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Max",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Lilly",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Jenny",
                "image"         : "no",
                "answer"        : [0],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ]
    }
}               