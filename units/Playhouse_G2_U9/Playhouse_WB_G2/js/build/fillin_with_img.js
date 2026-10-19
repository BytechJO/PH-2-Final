function buildFillInBody(aObj) {
	var htmlStmt = '';

	if (typeof aObj !== "undefined" && aObj !== null) {

		var layOut = parseInt(aObj.layout);
		var numOfQuestions = aObj.questions.length;
		var numInRowArray = aObj.numinrow;
		var numOfRows = numInRowArray.length;
		var currentQue = 1;

		/* ========================================== */
		/* Navigation Buttons */
		/* ========================================== */

		htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
			htmlStmt += '<a href="">';
				htmlStmt += '<img src="../images/icons/back_btn.png" />';
			htmlStmt += '</a>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
			htmlStmt += '<a href="">';
				htmlStmt += '<img src="../images/icons/next_btn.png" />';
			htmlStmt += '</a>';
		htmlStmt += '</div>';

		/* ========================================== */
		/* Activity Header */
		/* ========================================== */

		htmlStmt += '<div class="act_head_group justify-content-center">';

			htmlStmt += '<div class="audioIcon off contant"';
			htmlStmt += ' data-slideNum="1"';
			htmlStmt += ' data-audio="' + (aObj.mainTitleAudio || "") + '">';

				htmlStmt += '<div class="q-type-img-container">';

					htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

					if (
						typeof aObj.mainTitleIcon !== "undefined" &&
						aObj.mainTitleIcon !== ""
					) {
						var iconRight = "";

						if (
							aObj.mainTitleIconPos &&
							typeof aObj.mainTitleIconPos.right !== "undefined"
						) {
							iconRight = aObj.mainTitleIconPos.right;
						}

						htmlStmt += '<img class="mainTitleIcon"';
						htmlStmt += ' src="' + aObj.mainTitleIcon + '"';
						htmlStmt += ' style="right:' + iconRight + ';">';
					}

				htmlStmt += '</div>';

			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">';

				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle"';
				htmlStmt += ' data-slideNum="1"';
				htmlStmt += ' data-audio="' + (aObj.subTitleAudio || "") + '">';

					htmlStmt += '<div class="page_sub_title d-flex">';

						htmlStmt += '<p>' + (aObj.subTitleTextLeft || "") + '</p>';

						if (
							Array.isArray(aObj.subTitleIcons) &&
							aObj.subTitleIcons.length > 0
						) {
							for (
								var sicons = 0;
								sicons < aObj.subTitleIcons.length;
								sicons++
							) {
								htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
							}
						}

						htmlStmt += '<p>' + (aObj.subTitleTextRight || "") + '</p>';

					htmlStmt += '</div>';

				htmlStmt += '</div>';

			htmlStmt += '</div>';

		htmlStmt += '</div>';

		/* ========================================== */
		/* Activity Content */
		/* ========================================== */

		htmlStmt += '<div class="options cont_ht_sf mx-auto">';

			htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

				/* ========================================== */
				/* Word Options */
				/* ========================================== */

				if (
					typeof aObj.options !== "undefined" &&
					aObj.options !== null &&
					aObj.options.length > 0
				) {
					htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

						htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';

							jQuery.each(aObj.options, function (key, value) {

								var optionAudio = "";

								if (
									Array.isArray(aObj.optionsAudios) &&
									typeof aObj.optionsAudios[key] !== "undefined"
								) {
									optionAudio = aObj.optionsAudios[key];
								}

								htmlStmt += '<div class="audioIcon textEnd off d-flex contant"';
								htmlStmt += ' data-audio="' + optionAudio + '">';

									htmlStmt += '<div class="clue_word">';
										htmlStmt += value;
									htmlStmt += '</div>';

								htmlStmt += '</div>';
							});

						htmlStmt += '</div>';

					htmlStmt += '</div>';
				}

				/* ========================================== */
				/* Screen Elements */
				/* ========================================== */

				htmlStmt += '<div class="screen_elements d-flex flex-wrap">';

					htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

						/* Main Image Before Questions */

						if (
							aObj.image !== "no" &&
							aObj.image !== "" &&
							aObj.imageposition === "front"
						) {
							htmlStmt += '<div class="img_space">';
								htmlStmt += '<img src="' + aObj.image + '">';
							htmlStmt += '</div>';
						}

						/* ========================================== */
						/* Questions */
						/* ========================================== */

						for (var x = 0; x < numOfRows; x++) {

							htmlStmt += '<div class="ques w-80 d-flex flex-column">';

								for (
									var y = 0;
									y < numInRowArray[x].length;
									y++
								) {

									if (currentQue > numOfQuestions) {
										break;
									}

									var currentQuestion = aObj.questions[currentQue - 1];

									htmlStmt += '<div class="p-0 q_box align-content-between flex-wrap">';

										htmlStmt += '<div class="que que_' + currentQue + ' h-100 d-flex flex-wrap"';
										htmlStmt += ' data-qno="' + currentQue + '">';

											/* Question Number */

											htmlStmt += '<span class="q_order">';
												htmlStmt += currentQue;
											htmlStmt += '</span>';

											/* Text, Input and Image */

											htmlStmt += '<div class="txt_wrap align-content-between flex-wrap justify-content-center">';

												var inputboxstmt =
													'<input type="text" maxlength="300" autocomplete="off">';

												console.log(
													"aObj.defaultAnswer",
													aObj.defaultAnswer,
													currentQue
												);

												if (
													parseInt(aObj.defaultAnswer) === currentQue
												) {
													var defaultValue = "";

													if (
														currentQuestion.answer &&
														currentQuestion.answer.length > 0
													) {
														defaultValue =
															currentQuestion.answer[0];
													}

													inputboxstmt =
														'<input type="text"' +
														' maxlength="1"' +
														' readonly' +
														' value="' + defaultValue + '">';
												}

												var textFront =
													currentQuestion.textfront || "";

												htmlStmt += '<div class="txtBox d-flex flex-wrap" data-type="text">';

													/* Question Text */

													if (textFront !== "") {
														htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant"';
														htmlStmt += ' data-audio="' + (currentQuestion.audio || "") + '">';

															htmlStmt += textFront;

														htmlStmt += '</div>';
													}

													/* Input and Image Together */

													htmlStmt += '<div class="answer_image_group">';

														htmlStmt += inputboxstmt;

														if (
															currentQuestion.image &&
															currentQuestion.image !== ""
														) {
															htmlStmt += '<div class="image_space">';

																htmlStmt += '<img src="' + currentQuestion.image + '">';

															htmlStmt += '</div>';
														}

													htmlStmt += '</div>';

												htmlStmt += '</div>';

												/* Check and Cross Icons */

												htmlStmt += '<div class="theIcons">';

													htmlStmt += '<div class="icon_wrap">';

														htmlStmt += '<div class="tick">';
															htmlStmt += '<img src="../images/icons/check_btn.png">';
														htmlStmt += '</div>';

														htmlStmt += '<div class="cross">';
															htmlStmt += '<img src="../images/icons/cross_btn.png">';
														htmlStmt += '</div>';

													htmlStmt += '</div>';

												htmlStmt += '</div>';

											htmlStmt += '</div>';

										htmlStmt += '</div>';

									htmlStmt += '</div>';

									currentQue++;
								}

							htmlStmt += '</div>';
						}

					htmlStmt += '</div>';

				htmlStmt += '</div>';

			htmlStmt += '</div>';

		htmlStmt += '</div>';
	}

	console.log("htmlStmt >> fillin Built");

	$(".activity_area").append(htmlStmt);

	setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}