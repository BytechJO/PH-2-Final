var _data = {
    "title":{
        "grade": "Playhouse 2nd Edition",
        "unit" : "Grade 1"
    },
    "header": {
       // "bgimage": "./images/ARC_2_1_SB_U1_header.png", 
       "bgcolor": "linear-gradient(180deg, #efbaa7 0%, rgba(255,255,255,0) 100%)",
       "icon": "./images/unit-icon.png",   
       // "rightIcon": "./images/unit-icon.png", 

       "grammer_icon":"./images/icons/gram-icon.png",
       "grammer_link":"./views/slide_7.html", 

       "vocabulary_icon":"./images/icons/voc-icon.png", 
       "vocabulary_link":"./views/slide_img.html",

       "poster_icon":"./images/icons/poster-icon.png", 
       "poster_link":"./views/playhouse_intro.html", 

       "homebutton" : {
        'visible'   : 'yes', // yes (or) no
        'link'      : 'main.html'
       },   
       "audio": "./audios/page_38/UNIT_5_-_What’s_the_Matter.mp3",
       "title":{
           "text": "What’s the Matter?",
           "color":"rgb(255, 255, 255);",
           "text-align": "center",
           "font-size": "44px",
           // "font-family": "RifficFree",
           // "letter-spacing": "4px",
           // "margin": "10px auto 1px",
           "text-shadow": "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",            
           "max-width": "894px",
           "width": "60vw",
       },
       "readingPageOne":{
           "audio":"./audios/ARC_2_1_SB_U1_TitleAudio.mp3"           
       }
    },
    "body":{
        "background-color": "#fff"
    },
    "footer": {
        "unitno"       :"1",
        // "bgimage"    : "./images/AGW_1_SB_U15_footer.png",  
        "bgcolor": "linear-gradient(0deg, #efbaa7 0%, rgba(255,255,255,0) 100%)",       
        "buttons"    : [],
        "filetoload" : [],
        "reviewbutton" : {
            'visible'   : 'yes', // yes (or) no
            'link'      : './Playhouse_Review_G1_U1/views/look_and_write_body_parts.html'
        },
        "booksbutton" : {
            "workbook": {
                'icon'   : '../images/icons/book-2.png',
                'link'      : '../Playhouse_WB_G2/views/fill_number_or_letter.html'
            },
            "studentbook": {
                'icon'   : '../images/icons/book-1.png',
                'link'      : './playhouse_intro.html'
            }
        }
    },
    "subfooter" : {
        "activitybuttons"   : [ "CCSS", "Link", "Homework", "Tips" ],        
        "navigationbuttons" : [ "back", "next" ],    
        "functionbuttons"   : [ "check", "reset" ]    
    }
}

var _templateMediaList = {
    "image" : [],
    "audio" : [],
    "video" : []
}
