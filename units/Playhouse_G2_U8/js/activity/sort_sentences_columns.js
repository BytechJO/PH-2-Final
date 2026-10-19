function SortSentencesColumns(aContainer, aData) {
  var self = this;

  this.container = aContainer;
  this.data = aData;

  this.orientationAdjust = "no";

  this.placements = {};
  this.isDragging = false;

  // =========================================================
  // Initial settings
  // =========================================================

  this.initialSettings = function () {
    self.placements = {};
    self.isDragging = false;

    self.makeSourceSentencesDraggable();
    self.makeDropZonesDroppable();
    self.bindPlacedSentenceClick();

    self.refreshEmptyMessages();
    self.updateButtons();

    initialSettingsDone(1);
  };

  // =========================================================
  // Original sentences draggable
  // =========================================================

  this.makeSourceSentencesDraggable = function () {
    $(".draggable_sentence").each(function () {
      var $sentence = $(this);

      if ($sentence.hasClass("ui-draggable")) {
        $sentence.draggable("destroy");
      }

      $sentence.draggable({
        helper: function () {
          return $(
            '<div class="sentence_drag_helper"></div>',
          ).text($(this).text());
        },

        appendTo: "body",
        revert: "invalid",
        revertDuration: 180,

        cursor: "grabbing",

        cursorAt: {
          left: 20,
          top: 15,
        },

        zIndex: 99999,

        start: function () {
          self.isDragging = true;

          $(".sentence_drop_zone").addClass(
            "drag_active",
          );

          $(this).addClass("being_dragged");
        },

        stop: function () {
          $(".sentence_drop_zone")
            .removeClass("drag_active")
            .removeClass("drop_hover");

          $(this).removeClass("being_dragged");

          setTimeout(function () {
            self.isDragging = false;
          }, 150);
        },
      });
    });
  };

  // =========================================================
  // Placed sentences draggable
  // =========================================================

  this.makePlacedSentencesDraggable = function () {
    $(".placed_sentence").each(function () {
      var $sentence = $(this);

      if ($sentence.hasClass("ui-draggable")) {
        $sentence.draggable("destroy");
      }

      $sentence.draggable({
        helper: function () {
          return $(
            '<div class="sentence_drag_helper"></div>',
          ).text(
            $(this)
              .find(".placed_sentence_text")
              .text(),
          );
        },

        appendTo: "body",
        revert: "invalid",
        revertDuration: 180,

        cursor: "grabbing",

        cursorAt: {
          left: 20,
          top: 15,
        },

        zIndex: 99999,

        start: function () {
          self.isDragging = true;

          $(".sentence_drop_zone").addClass(
            "drag_active",
          );

          $(this).addClass("being_dragged");
        },

        stop: function () {
          $(".sentence_drop_zone")
            .removeClass("drag_active")
            .removeClass("drop_hover");

          $(this).removeClass("being_dragged");

          setTimeout(function () {
            self.isDragging = false;
          }, 150);
        },
      });
    });
  };

  // =========================================================
  // Drop zones
  // =========================================================

  this.makeDropZonesDroppable = function () {
    $(".sentence_drop_zone").each(function () {
      var $dropZone = $(this);

      if ($dropZone.hasClass("ui-droppable")) {
        $dropZone.droppable("destroy");
      }

      $dropZone.droppable({
        accept:
          ".draggable_sentence, .placed_sentence",

        tolerance: "pointer",

        hoverClass: "drop_hover",

        drop: function (event, ui) {
          var sentenceId =
            ui.draggable.attr(
              "data-sentence-id",
            );

          var columnId =
            $dropZone.attr("data-column-id");

          if (!sentenceId || !columnId) {
            return;
          }

          self.placeSentence(
            sentenceId,
            columnId,
          );
        },
      });
    });
  };

  // =========================================================
  // Place sentence
  // =========================================================

  this.placeSentence = function (
    sentenceId,
    columnId,
  ) {
    var sentenceData =
      self.getSentenceById(sentenceId);

    if (!sentenceData) {
      return;
    }

    $(
      '.placed_sentence[data-sentence-id="' +
        sentenceId +
        '"]',
    ).remove();

    var placedHtml = "";

    placedHtml +=
      '<div class="placed_sentence" ' +
      'data-sentence-id="' +
      sentenceId +
      '" ' +
      'data-column-id="' +
      columnId +
      '" ' +
      'title="Click to return">';

    placedHtml +=
      '<span class="placed_sentence_text">' +
      escapeSortSentenceHtml(
        sentenceData.text,
      ) +
      "</span>";

    placedHtml +=
      '<span class="placed_sentence_feedback">';

    placedHtml +=
      '<span class="placed_tick">✓</span>';

    placedHtml +=
      '<span class="placed_cross">✕</span>';

    placedHtml += "</span>";

    placedHtml += "</div>";

    $(
      '.sentence_drop_zone[data-column-id="' +
        columnId +
        '"]',
    ).append(placedHtml);

    self.placements[sentenceId] = columnId;

    $("#source_" + sentenceId)
      .addClass("used")
      .attr("aria-disabled", "true");

    self.refreshEmptyMessages();
    self.makePlacedSentencesDraggable();
    self.clearFeedback();
    self.updateButtons();
  };

  // =========================================================
  // Click placed sentence to return
  // =========================================================

  this.bindPlacedSentenceClick = function () {
    $(document)
      .off(
        "click.sortSentences",
        ".placed_sentence",
      )
      .on(
        "click.sortSentences",
        ".placed_sentence",
        function (event) {
          if (self.isDragging) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          var sentenceId = $(this).attr(
            "data-sentence-id",
          );

          self.returnSentence(sentenceId);
        },
      );
  };

  // =========================================================
  // Return sentence
  // =========================================================

  this.returnSentence = function (sentenceId) {
    if (!sentenceId) {
      return;
    }

    $(
      '.placed_sentence[data-sentence-id="' +
        sentenceId +
        '"]',
    ).remove();

    delete self.placements[sentenceId];

    $("#source_" + sentenceId)
      .removeClass("used")
      .removeAttr("aria-disabled");

    self.refreshEmptyMessages();
    self.clearFeedback();
    self.updateButtons();
  };

  // =========================================================
  // Find draggable sentence
  // =========================================================

  this.getSentenceById = function (sentenceId) {
    if (
      !self.data ||
      !Array.isArray(self.data.conversation)
    ) {
      return null;
    }

    for (
      var rowIndex = 0;
      rowIndex < self.data.conversation.length;
      rowIndex++
    ) {
      var row =
        self.data.conversation[rowIndex];

      if (!Array.isArray(row.parts)) {
        continue;
      }

      for (
        var partIndex = 0;
        partIndex < row.parts.length;
        partIndex++
      ) {
        var part = row.parts[partIndex];

        if (
          part.draggable === true &&
          String(part.id) ===
            String(sentenceId)
        ) {
          return part;
        }
      }
    }

    return null;
  };

  // =========================================================
  // Total draggable sentences
  // =========================================================

  this.getTotalSentences = function () {
    var total = 0;

    if (
      !self.data ||
      !Array.isArray(self.data.conversation)
    ) {
      return total;
    }

    for (
      var rowIndex = 0;
      rowIndex < self.data.conversation.length;
      rowIndex++
    ) {
      var row =
        self.data.conversation[rowIndex];

      if (!Array.isArray(row.parts)) {
        continue;
      }

      for (
        var partIndex = 0;
        partIndex < row.parts.length;
        partIndex++
      ) {
        if (
          row.parts[partIndex].draggable ===
          true
        ) {
          total++;
        }
      }
    }

    return total;
  };

  // =========================================================
  // Empty messages
  // =========================================================

  this.refreshEmptyMessages = function () {
    $(".sentence_drop_zone").each(function () {
      var placedCount = $(this).find(
        ".placed_sentence",
      ).length;

      $(this)
        .find(".empty_column_message")
        .toggle(placedCount === 0);
    });
  };

  // =========================================================
  // Buttons
  // =========================================================

  this.updateButtons = function () {
    var placedCount = Object.keys(
      self.placements,
    ).length;

    var totalSentences =
      self.getTotalSentences();

    if (placedCount > 0) {
      $(".resetBtn").removeClass("disabled");
    } else {
      $(".resetBtn").addClass("disabled");
    }

    if (
      placedCount === totalSentences &&
      totalSentences > 0
    ) {
      $(".checkBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");
    }
  };

  // =========================================================
  // Clear feedback
  // =========================================================

  this.clearFeedback = function () {
    $(".placed_sentence")
      .removeClass("correct wrong");

    $(".placed_tick, .placed_cross").hide();
  };

  // =========================================================
  // Validate
  // =========================================================

  this.validate = function () {
    var allCorrect = true;

    var totalSentences =
      self.getTotalSentences();

    var placedCount = Object.keys(
      self.placements,
    ).length;

    self.clearFeedback();

    if (placedCount !== totalSentences) {
      allCorrect = false;
    }

    for (
      var rowIndex = 0;
      rowIndex < self.data.conversation.length;
      rowIndex++
    ) {
      var row =
        self.data.conversation[rowIndex];

      if (!Array.isArray(row.parts)) {
        continue;
      }

      for (
        var partIndex = 0;
        partIndex < row.parts.length;
        partIndex++
      ) {
        var part = row.parts[partIndex];

        if (part.draggable !== true) {
          continue;
        }

        var placedColumn =
          self.placements[part.id];

        var $placed = $(
          '.placed_sentence[data-sentence-id="' +
            part.id +
            '"]',
        );

        if (
          placedColumn &&
          String(placedColumn) ===
            String(part.answer)
        ) {
          $placed.addClass("correct");

          $placed
            .find(".placed_tick")
            .show();
        } else {
          allCorrect = false;

          if ($placed.length > 0) {
            $placed.addClass("wrong");

            $placed
              .find(".placed_cross")
              .show();
          }
        }
      }
    }

    showFeedback(true, allCorrect);

    $(".resetBtn").removeClass("disabled");
  };

  // =========================================================
  // Reset
  // =========================================================

  this.reset = function () {
    self.placements = {};
    self.isDragging = false;

    $(".placed_sentence").remove();

    $(".draggable_sentence")
      .removeClass(
        "used being_dragged",
      )
      .removeAttr("aria-disabled");

    $(".sentence_drop_zone")
      .removeClass(
        "drag_active drop_hover",
      );

    self.refreshEmptyMessages();
    self.clearFeedback();
    self.updateButtons();

    $("#feedbackPopup").modal("hide");
  };

  this.screenPoseAdjustments =
    function () {};
}