//  ****************************************** //
//  WRITE ABOUT YOURSELF CLOCK - Activity
//  The learner moves only the hour hand.
//  There is no answer checking. Reset only.
//  ****************************************** //

window.WriteAboutYourselfClock = function (obj, dataObj) {
    var options = obj[0].getElementsByClassName("options");

    this.settings = {
        activity_area: options[0],
        data_obj: dataObj,
        parent_holder: obj[0]
    };

    this.init(this.settings);
};

WriteAboutYourselfClock.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.clockStates = [];
        this.listen();
    },

    listen: function () {
        var self = this;
        var area = this.ob.activity_area;

        if (!area) {
            return;
        }

        this.clocks = area.querySelectorAll(".student_clock");
        this.inputs = area.querySelectorAll(".write_clock_input");

        for (var i = 0; i < this.clocks.length; i++) {
            this.clockStates[i] = {
                hour: parseInt(this.clocks[i].dataset.hour, 10) || 12,
                dragging: false
            };

            this.setClockHour(i, this.clockStates[i].hour, false);
            this.addClockEvents(this.clocks[i], i);
        }

        for (var j = 0; j < this.inputs.length; j++) {
            this.inputs[j].addEventListener("input", function () {
                this.style.color = "black";
                self.enableReset();
            });
        }

        // This activity has no Check button.
        $(".checkBtn").hide();

        // Keep only Reset visible.
        $(".resetBtn").show();
    },

    addClockEvents: function (clock, index) {
        var self = this;

        clock.addEventListener("pointerdown", function (event) {
            event.preventDefault();

            self.clockStates[index].dragging = true;
            clock.classList.add("is_dragging");

            if (clock.setPointerCapture) {
                clock.setPointerCapture(event.pointerId);
            }

            self.updateHourFromPointer(event, index);
        });

        clock.addEventListener("pointermove", function (event) {
            if (!self.clockStates[index].dragging) {
                return;
            }

            event.preventDefault();
            self.updateHourFromPointer(event, index);
        });

        function stopDragging(event) {
            self.clockStates[index].dragging = false;
            clock.classList.remove("is_dragging");

            if (
                event &&
                clock.releasePointerCapture &&
                clock.hasPointerCapture &&
                clock.hasPointerCapture(event.pointerId)
            ) {
                clock.releasePointerCapture(event.pointerId);
            }
        }

        clock.addEventListener("pointerup", stopDragging);
        clock.addEventListener("pointercancel", stopDragging);
        clock.addEventListener("lostpointercapture", function () {
            self.clockStates[index].dragging = false;
            clock.classList.remove("is_dragging");
        });

        clock.addEventListener("keydown", function (event) {
            var currentHour = self.clockStates[index].hour;
            var newHour = currentHour;

            if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                newHour = currentHour === 12 ? 1 : currentHour + 1;
            } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                newHour = currentHour === 1 ? 12 : currentHour - 1;
            } else {
                return;
            }

            event.preventDefault();
            self.setClockHour(index, newHour, true);
        });
    },

    updateHourFromPointer: function (event, index) {
        var clock = this.clocks[index];
        var rect = clock.getBoundingClientRect();

        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;

        var pointerX = event.clientX - centerX;
        var pointerY = event.clientY - centerY;

        var angle = Math.atan2(pointerY, pointerX) * (180 / Math.PI);
        angle += 90;

        if (angle < 0) {
            angle += 360;
        }

        var hour = Math.round(angle / 30);

        if (hour === 0) {
            hour = 12;
        }

        this.setClockHour(index, hour, true);
    },

    setClockHour: function (index, hour, userAction) {
        var clock = this.clocks[index];

        if (!clock) {
            return;
        }

        hour = parseInt(hour, 10);

        if (hour < 1 || hour > 12) {
            hour = 12;
        }

        this.clockStates[index].hour = hour;
        clock.dataset.hour = hour;
        clock.setAttribute("aria-valuenow", hour);

        var hourHand = clock.querySelector(".hour_hand");

        if (hourHand) {
            hourHand.style.transform =
                "translateX(-50%) rotate(" + hour * 30 + "deg)";
        }

        this.highlightNumber(clock, hour);

        if (userAction) {
            clock.classList.add("clock_changed");
            this.enableReset();
        }
    },

    highlightNumber: function (clock, hour) {
        var numbers = clock.querySelectorAll(".clock_number");

        for (var i = 0; i < numbers.length; i++) {
            numbers[i].classList.remove("selected_hour");
        }

        var selected = clock.querySelector(".clock_number_" + hour);

        if (selected) {
            selected.classList.add("selected_hour");
        }
    },

    enableReset: function () {
        var resetButton = document.getElementsByClassName("resetBtn")[0];

        if (resetButton) {
            resetButton.classList.remove("disabled");
        }
    },

    validate: function () {
        // Intentionally empty: this activity has no Check Answer.
    },

    reset: function () {
        var data = this.ob.data_obj;

        for (var i = 0; i < this.inputs.length; i++) {
            this.inputs[i].value = "";
            this.inputs[i].style.color = "black";
        }

        for (var j = 0; j < this.clocks.length; j++) {
            var question = data.questions[j] || {};
            var defaultHour =
                parseInt(question.defaultHour || data.defaultHour || 12, 10);

            this.clocks[j].classList.remove("clock_changed");
            this.clocks[j].classList.add("clock_resetting");

            this.setClockHour(j, defaultHour, false);
        }

        var self = this;

        window.setTimeout(function () {
            for (var k = 0; k < self.clocks.length; k++) {
                self.clocks[k].classList.remove("clock_resetting");
            }
        }, 350);

        var resetButton = document.getElementsByClassName("resetBtn")[0];

        if (resetButton) {
            resetButton.classList.add("disabled");
        }
    },

    initialSettings: function () {
        this.reset();
        $(".checkBtn").hide();
        $(".resetBtn").show();
        initialSettingsDone(1);
    }
};
