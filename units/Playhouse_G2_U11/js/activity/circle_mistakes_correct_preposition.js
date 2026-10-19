//  ****************************************** //
//  Circle Mistakes and Correct Preposition
//  Custom Playhouse Activity
//  ****************************************** //

window.CircleMistakesCorrectPreposition =
    function (obj, dataObj) {
        this.settings = {
            activity_area: obj[0],
            data_obj: dataObj,
            parent_holder: obj[0]
        };

        this.init(this.settings);
    };

CircleMistakesCorrectPreposition.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen();
        this.initialSettings();
    },

    listen: function () {
        var self = this;
        var activity = $(this.ob.activity_area);

        /*
         * الضغط على كلمة الجر:
         * - يحددها بدائرة.
         * - يظهر input.
         * - الضغط مرة ثانية يلغي التحديد.
         */
        activity.on(
            "click",
            ".preposition_word",
            function (event) {
                event.preventDefault();
                event.stopPropagation();

                var item = $(this).closest(
                    ".preposition_item"
                );

                item.toggleClass("selected");

                item.removeClass(
                    "correct wrong missed"
                );

                if (item.hasClass("selected")) {
                    item.find(
                        ".correction_input"
                    ).trigger("focus");
                } else {
                    item.find(
                        ".correction_input"
                    ).val("");
                }

                self.enableControls();
            }
        );

        /*
         * يمنع كبسة الـ input من إلغاء تحديد الكلمة.
         */
        activity.on(
            "click",
            ".correction_input",
            function (event) {
                event.stopPropagation();
            }
        );

        activity.on(
            "input",
            ".correction_input",
            function () {
                $(this).css("color", "black");

                $(this)
                    .closest(".preposition_item")
                    .removeClass(
                        "correct wrong missed"
                    );

                self.enableControls();
            }
        );
    },

    validate: function () {
        var self = this;
        var allCorrect = true;

        var items = $(this.ob.activity_area).find(
            ".preposition_item"
        );

        items.each(function () {
            var item = $(this);

            var dataIndex =
                parseInt(
                    item.attr(
                        "data-preposition-index"
                    ),
                    10
                ) - 1;

            var prepositionData =
                self.getPrepositionData(dataIndex);

            var isMistake =
                prepositionData &&
                prepositionData.isMistake === true;

            var isSelected =
                item.hasClass("selected");

            var userAnswer =
                self.normalizeAnswer(
                    item.find(
                        ".correction_input"
                    ).val()
                );

            item.removeClass(
                "correct wrong missed"
            );

            /*
             * الكلمة الخاطئة:
             * يجب تحديدها وكتابة أحد التصحيحات المقبولة.
             */
            if (isMistake) {
                var acceptedAnswers =
                    Array.isArray(
                        prepositionData.answers
                    )
                        ? prepositionData.answers
                        : [];

                var answerIsCorrect =
                    acceptedAnswers.some(
                        function (answer) {
                            return (
                                self.normalizeAnswer(
                                    answer
                                ) === userAnswer
                            );
                        }
                    );

                if (
                    isSelected &&
                    userAnswer !== "" &&
                    answerIsCorrect
                ) {
                    item.addClass("correct");
                } else {
                    allCorrect = false;

                    if (isSelected) {
                        item.addClass("wrong");
                    } else {
                        item.addClass("missed");
                    }
                }
            }

            /*
             * الكلمة الصحيحة:
             * يجب ألا يحددها الطالب.
             */
            else {
                if (isSelected) {
                    allCorrect = false;
                    item.addClass("wrong");
                }
            }
        });

        if (
            typeof showFeedback === "function"
        ) {
            showFeedback(true, allCorrect);
        }

        if (allCorrect) {
            $(".checkBtn").addClass(
                "disabled"
            );
        }
    },

    reset: function () {
        var activity = $(
            this.ob.activity_area
        );

        activity
            .find(".preposition_item")
            .removeClass(
                "selected correct wrong missed"
            );

        activity
            .find(".correction_input")
            .val("")
            .css("color", "black");

        $(".checkBtn").addClass(
            "disabled"
        );

        $(".resetBtn").addClass(
            "disabled"
        );
    },

    initialSettings: function () {
        this.reset();

        if (
            typeof initialSettingsDone ===
            "function"
        ) {
            initialSettingsDone(1);
        }
    },

    enableControls: function () {
        $(".checkBtn").removeClass(
            "disabled"
        );

        $(".resetBtn").removeClass(
            "disabled"
        );
    },

    getPrepositionData: function (
        targetIndex
    ) {
        var parts =
            this.ob.data_obj.storyParts || [];

        var currentIndex = -1;

        for (
            var i = 0;
            i < parts.length;
            i++
        ) {
            if (
                parts[i].type ===
                "preposition"
            ) {
                currentIndex++;

                if (
                    currentIndex ===
                    targetIndex
                ) {
                    return parts[i];
                }
            }
        }

        return null;
    },

    normalizeAnswer: function (value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");
    }
};
