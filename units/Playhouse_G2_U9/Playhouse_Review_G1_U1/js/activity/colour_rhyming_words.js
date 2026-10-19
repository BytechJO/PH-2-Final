//  ****************************************** //
//  Colour Rhyming Words - Version no: 1
//  ****************************************** //

window.ColourRhymingWords = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  console.log("ColourRhymingWords > ", $(".activity_area"));

  this.settings = {
    activity_area: ob[0],
    has_audio:
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",
    data_obj: dataObj,
    parent_holder: obj[0],
    selected_colour:
      dataObj.defaultColour !== undefined &&
      dataObj.defaultColour !== null &&
      dataObj.defaultColour !== ""
        ? dataObj.defaultColour
        : "green",
  };

  this.init(this.settings);
};

ColourRhymingWords.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    var colourButtons = e.querySelectorAll(".colour_button");
    var wordItems = e.querySelectorAll(".rhyming_word_item");

    // Choose colour
    for (var i = 0; i < colourButtons.length; i++) {
      colourButtons[i].addEventListener("click", function () {
        self.ob.selected_colour = this.dataset.colour;

        for (var c = 0; c < colourButtons.length; c++) {
          colourButtons[c].classList.remove("active");
        }

        this.classList.add("active");
      });
    }

    // Colour a word
    for (var w = 0; w < wordItems.length; w++) {
      wordItems[w].addEventListener("click", function () {
        var selectedColour = self.ob.selected_colour;

        this.dataset.selectedColour = selectedColour;

        this.classList.remove(
          "selected_green",
          "selected_blue",
          "selected_yellow",
          "selected_red",
        );

        this.classList.add("selected_" + selectedColour);

        var iconWrap = this.querySelector(".icon_wrap");
        var tick = this.querySelector(".tick");
        var cross = this.querySelector(".cross");

        if (iconWrap) {
          iconWrap.style.display = "none";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "none";
        }

        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");

        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var wordItems = e.querySelectorAll(".rhyming_word_item");
    var groups = {};
    var groupColours = {};
    var allCorrect = true;

    // جمع الكلمات حسب مجموعة القافية
    for (var i = 0; i < wordItems.length; i++) {
      var groupName = wordItems[i].dataset.group;

      if (!groups[groupName]) {
        groups[groupName] = [];
      }

      groups[groupName].push(wordItems[i]);

      var iconWrap = wordItems[i].querySelector(".icon_wrap");
      var tick = wordItems[i].querySelector(".tick");
      var cross = wordItems[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    // فحص أن كلمات المجموعة الواحدة تحمل اللون نفسه
    for (var groupName in groups) {
      var groupItems = groups[groupName];
      var firstColour = groupItems[0].dataset.selectedColour || "";

      var groupCorrect = firstColour !== "";

      for (var g = 0; g < groupItems.length; g++) {
        var selectedColour = groupItems[g].dataset.selectedColour || "";

        if (selectedColour === "" || selectedColour !== firstColour) {
          groupCorrect = false;
        }
      }

      groupColours[groupName] = firstColour;

      if (!groupCorrect) {
        allCorrect = false;
      }
    }

    // فحص أن كل مجموعة استُخدم لها لون مختلف
    var usedColours = [];

    for (var groupKey in groupColours) {
      var colour = groupColours[groupKey];

      if (colour === "" || usedColours.indexOf(colour) !== -1) {
        allCorrect = false;
      } else {
        usedColours.push(colour);
      }
    }

    // إظهار صح أو خطأ لكل مجموعة كاملة
    for (var currentGroup in groups) {
      var currentItems = groups[currentGroup];
      var currentColour = currentItems[0].dataset.selectedColour || "";

      var currentGroupCorrect = currentColour !== "";

      for (var x = 0; x < currentItems.length; x++) {
        if (currentItems[x].dataset.selectedColour !== currentColour) {
          currentGroupCorrect = false;
        }
      }

      var colourRepeated = false;

      for (var otherGroup in groupColours) {
        if (
          otherGroup !== currentGroup &&
          currentColour !== "" &&
          groupColours[otherGroup] === currentColour
        ) {
          colourRepeated = true;
        }
      }

      if (colourRepeated) {
        currentGroupCorrect = false;
      }

      for (var y = 0; y < currentItems.length; y++) {
        var itemIconWrap = currentItems[y].querySelector(".icon_wrap");

        var itemTick = currentItems[y].querySelector(".tick");

        var itemCross = currentItems[y].querySelector(".cross");

        if (itemIconWrap) {
          itemIconWrap.style.display = "block";
        }

        if (currentGroupCorrect) {
          if (itemTick) {
            itemTick.style.display = "block";
          }
        } else {
          if (itemCross) {
            itemCross.style.display = "block";
          }
        }
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },
  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var wordItems = e.querySelectorAll(".rhyming_word_item");
    var colourButtons = e.querySelectorAll(".colour_button");

    ob.selected_colour =
      ob.data_obj.defaultColour !== undefined &&
      ob.data_obj.defaultColour !== null &&
      ob.data_obj.defaultColour !== ""
        ? ob.data_obj.defaultColour
        : "green";

    for (var i = 0; i < wordItems.length; i++) {
      wordItems[i].dataset.selectedColour = "";

      wordItems[i].classList.remove(
        "selected_green",
        "selected_blue",
        "selected_yellow",
        "selected_red",
      );

      var iconWrap = wordItems[i].querySelector(".icon_wrap");
      var tick = wordItems[i].querySelector(".tick");
      var cross = wordItems[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    for (var c = 0; c < colourButtons.length; c++) {
      colourButtons[c].classList.remove("active");

      if (colourButtons[c].dataset.colour === ob.selected_colour) {
        colourButtons[c].classList.add("active");
      }
    }

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");

    document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
  },

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
