var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"toggle_slide",
    "playListData" : [
        {
          'audiourl': '../audios/page_26/.mp3',
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
    "mainTitleAudio": "../audios/page_26/PHONICS.mp3",
    "subTitleTextLeft": "<span class='red_text'>1</span> Listen, read and practise.",
    "subTitleTextRight": "",
    "subTitleIcons": ["../images/pages/sb-icons/phonics_1_icon.png"],
    "subTitleAudio": "../audios/page_26/1_Listen.mp3",
    "slides": [
        {
            "layout": "grid_columns",
            "parentClassName":"textImg",
            "image":"../images/pages/page-img/phonics-img.png",
            "mainImage": [""],
            "audio": ["../audios/page_26/A_‘magic_e’_makes_the_vowel_say_its_name!.mp3",
                      "../audios/page_26/There_was_an_old_king_who_sat_on_a_throne_Not_with_others_but_all_alone.mp3",
                      "../audios/page_26/He_took_a_pen_and_made_a_note.mp3",
                      "../audios/page_26/I_am_fine_is_all_he_wrote.mp3"],
            "word": ["A ‘<span class='red_text'>magic e</span>’ makes the vowel say its name!",
                     "There was an old king who sat on a thr<span class='red_text'>o</span>n<span class='red_text'>e</span>"+
                     "<br>Not with others, but all al<span class='red_text'>o</span>n<span class='red_text'>e</span>",
                     "He took a pen and made a n<span class='red_text'>o</span>t<span class='red_text'>e</span>.",
                     "'I am fine' is all he wr<span class='red_text'>o</span>t<span class='red_text'>e</span>!",
                    ],
                    
            "imagePlacePos":[
                {"colWidth": [12], "colData": [1] },
                {"colWidth": [12], "colData": [1] },
                {"colWidth": [12], "colData": [1] },
                {"colWidth": [12], "colData": [1] },
                // {"colWidth": [12], "colData": [1] },
            ]
        },
    ]
}
