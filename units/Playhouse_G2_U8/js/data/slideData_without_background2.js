var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(210, 35, 42)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demo.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};

var reading_data = {
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_62/GRAMMAR_PRACTICE.mp3",
  mainTitleIconPos: { right: "80px" },

  subTitleTextLeft:
    "<span class='red_text'>2</span> Practise the conversation with a friend.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  slides: [
    {
      layout: "grid_columns",

      mainImage: [""],

      parentClassName: "full_grid_without_background_image",

      group_styles: "",

      audio: ["../audios/under.mp3"],

      word: [
        `
        <div class="conversation_card">

          <div class="conversation_row">
            <span class="speaker">A:</span>

            <span class="conversation_text">
              Hi, Tony. Do you want to go to the arcade after school?
            </span>
          </div>

          <div class="conversation_row">
            <span class="speaker">B:</span>

            <span class="conversation_text">
              Hmm. I <b>don’t</b> think so. I do <b>not</b> like the arcade.
            </span>
          </div>

          <div class="conversation_row">
            <span class="speaker">A:</span>

            <span class="conversation_text">
              I always like to go to the arcade!<br>
              You <b>never</b> like to go to the arcade!
            </span>
          </div>

          <div class="conversation_row">
            <span class="speaker">B:</span>

            <span class="conversation_text">
              Sorry, today I have <b>no</b> money.
            </span>
          </div>

          <div class="conversation_row">
            <span class="speaker">A:</span>

            <span class="conversation_text">
              <b>Nobody</b> has money today!
            </span>
          </div>

          <div class="conversation_row">
            <span class="speaker">B:</span>

            <span class="conversation_text">
              Well, then. Let’s go to my house!
            </span>
          </div>

        </div>
        `,
      ],

      imagePlacePos: [
        {
          colWidth: [1, 10, 1],

          colData: [0, 1, 0],
        },
      ],
    },
  ],
};
