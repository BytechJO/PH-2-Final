var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"phonics",
    "playListData" : [
        {
          'audiourl': '../audios/page_86/demo.mp3',
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
var reading_data = {
    "mainTitle": "../images/icons/phonics_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/page_86/PHONICS.mp3",
    "subTitleTextLeft": "<span class='red_text'>1</span> Listen, read and practise.",
    "subTitleTextRight": "",
    "subTitleIcons": ["../images/pages/sb-icons/phonics_1_icon.png"],
    "subTitleAudio": "../audios/page_86/1_Listen_read_and_practise.mp3",
    "slides": [
        {
            "layout": "grid_columns",
            "parentClassName":"textImg phonics",
            "image":"../images/pages/page-img/phonics-img.png",
            "mainImage": [""],
            "audio": ["../audios/page_86/Long_e_‘ea’_words.mp3",
                      "../audios/page_86/Sally_Sue_sat_so_neat_Every_time_she_took_a_seat.mp3",
                      "../audios/page_86/Except_on_Sunday_when_she_would_eat_Lots_of_sauce_with_her_meat.mp3"],
            "word": ["Long e‘<span class='red_text'>ea</span>’ words",
                        "Sally Sue sat so n<span class='red_text'>ea</span>t,<br>"+
                        "Every time she took a s<span class='red_text'>ea</span>t.",
                        "Except on Sunday when she would <span class='red_text'>ea</span>t<br>"+
                        "Lots of sauce with her m<span class='red_text'>ea</span>t.",
                    ],
                    
            "imagePlacePos":[
                {"colWidth": [12], "colData": [1] },
                {"colWidth": [12], "colData": [1] },
                {"colWidth": [12], "colData": [1] }
            ]
        },
    ]
}
