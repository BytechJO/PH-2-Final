function audio(stereo_data) {
  var playListData, playListTpl;
  playListData = stereo_data.playListData;

  playListTpl = {
    "<>": "li",
    audiourl: "${audiourl}",
  };
  $(".playlist").jsonRender(playListData, playListTpl);
  $(document).ready(function () {
    var initAudio, playAudio, song, stopAudio, tracker, volume;
    song = void 0;
    tracker = $(".tracker");
    volume = $(".volume");
    initAudio = function (elem) {
      var url;
      url = elem.attr("audiourl");

      if (song) {
        song.pause();
      }

      song = new Audio(url);

      song.addEventListener("loadedmetadata", function () {
        tracker.slider("option", "max", song.duration);
      });

      song.addEventListener("timeupdate", function () {
        var curtime = parseInt(song.currentTime, 10);
        tracker.slider("value", curtime);
      });

      $(".playlist li").removeClass("active");
      elem.addClass("active");
    };
    playAudio = function (reset) {
      if (reset) {
        song.currentTime = 0;
      }
      song.play();
      tracker.slider("option", "max", song.duration);
      $(".play").addClass("hidden");
      $(".pause").addClass("visible");
      make_change_when_audio_play(song);
    };
    stopAudio = function () {
      song.pause();
      $(".play").removeClass("hidden");
      $(".pause").removeClass("visible");
    };
    $(".play").click(function (e) {
      e.preventDefault();
      playAudio(false);
    });
    $(".pause").click(function (e) {
      e.preventDefault();
      stopAudio();
    });
    $(".restart").click(function (e) {
      e.preventDefault();
      stopAudio();
      playAudio(true);
    });
    $(".fa-forward, .fwd").click(function (e) {
      e.preventDefault();

      if (!song) return;

      song.currentTime = Math.min(song.currentTime + 5, song.duration);
    });

    $(".rew").click(function (e) {
      e.preventDefault();

      if (!song) return;

      song.currentTime = Math.max(song.currentTime - 5, 0);
    });
    // $('.pl').click(function(e) {
    //   e.preventDefault();
    //   $('.play-item').fadeToggle(300);
    // });
    $(".playlist li").click(function () {
      stopAudio();
      initAudio($(this));
    });
    initAudio($(".playlist li:first-child"));
    song.volume = 0.8;
    volume.slider({
      range: "min",
      min: 1,
      max: 100,
      value: 80,
      start: function (event, ui) {},
      slide: function (event, ui) {
        song.volume = ui.value / 100;
      },
      stop: function (event, ui) {},
    });
    tracker.slider({
      range: "min",
      min: 0,
      max: 10,
      start: function (event, ui) {},
      slide: function (event, ui) {
        song.currentTime = ui.value;
      },
      stop: function (event, ui) {},
    });
  });
}
