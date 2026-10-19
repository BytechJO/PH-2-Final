function buildFillInBody(aObj) {	
	var htmlStmt = '';

	if (typeof aObj != undefined && aObj != null) {		
       
		var layOut = parseInt(aObj.layout);
		var numOfQuestions = aObj.questions.length;
		var numInRowArray = aObj.numinrow;
		var numOfRows = numInRowArray.length;
		var currentQue = 1;			
		
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

		// =========================================================
		// Heading
		// =========================================================

		htmlStmt += '<div class="act_head_group justify-content-center">';

		htmlStmt += '<div class="audioIcon off contant" ';
		htmlStmt += 'data-slideNum="1" ';
		htmlStmt += 'data-audio="' + (aObj.mainTitleAudio || '') + '">';

		htmlStmt += '<div class="q-type-img-container">';

		if (aObj.mainTitle != undefined && aObj.mainTitle != '') {
			htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
		}

		if (
			aObj.mainTitleIcon != undefined &&
			aObj.mainTitleIcon != ''
		) {
			htmlStmt += '<img class="mainTitleIcon" ';
			htmlStmt += 'src="' + aObj.mainTitleIcon + '" ';
			htmlStmt += 'style="right:' +
				(
					aObj.mainTitleIconPos != undefined
						? aObj.mainTitleIconPos.right
						: '0px'
				) +
			';">';
		}

		htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">';

		htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" ';
		htmlStmt += 'data-slideNum="1" ';
		htmlStmt += 'data-audio="' + (aObj.subTitleAudio || '') + '">';

		if (
			aObj.title_position != undefined &&
			aObj.title_position == 'under'
		) {
			htmlStmt += '<div class="page_sub_title">';

			htmlStmt += '<p>' +
				(aObj.subTitleTextLeft || '') +
			'</p>';

			if (
				aObj.subTitleIcons != undefined &&
				aObj.subTitleIcons != null
			) {
				for (
					var sicons = 0;
					sicons < aObj.subTitleIcons.length;
					sicons++
				) {
					if (aObj.subTitleIcons[sicons] != '') {
						htmlStmt += '<img src="' +
							aObj.subTitleIcons[sicons] +
						'"/>';
					}
				}
			}

			htmlStmt += '<br>';

			htmlStmt += '<p class="subTitleTextRight">' +
				(aObj.subTitleTextRight || '') +
			'</p>';

			htmlStmt += '</div>';
		} else {
			htmlStmt += '<div class="page_sub_title d-flex">';

			htmlStmt += '<p>' +
				(aObj.subTitleTextLeft || '') +
			'</p>';

			if (
				aObj.subTitleIcons != undefined &&
				aObj.subTitleIcons != null
			) {
				for (
					var iconIndex = 0;
					iconIndex < aObj.subTitleIcons.length;
					iconIndex++
				) {
					if (aObj.subTitleIcons[iconIndex] != '') {
						htmlStmt += '<img src="' +
							aObj.subTitleIcons[iconIndex] +
						'"/>';
					}
				}
			}

			htmlStmt += '<p class="subTitleTextRight">' +
				(aObj.subTitleTextRight || '') +
			'</p>';

			htmlStmt += '</div>';
		}

		htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// =========================================================
		// Main content
		// =========================================================

		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		// =========================================================
		// Word options
		// =========================================================

		if (
			aObj.options != undefined &&
			aObj.options != null &&
			aObj.options.length > 0
		) {
			htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

			htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';

			jQuery.each(aObj.options, function (key, value) {

				var optionAudio = '';

				if (
					aObj.optionsAudios != undefined &&
					aObj.optionsAudios[key] != undefined
				) {
					optionAudio = aObj.optionsAudios[key];
				}

				htmlStmt += '<div class="audioIcon textEnd off d-flex contant" ';
				htmlStmt += 'data-audio="' + optionAudio + '">';

				htmlStmt += '<div class="clue_word">' +
					value +
				'</div>';

				htmlStmt += '</div>';
			});

			htmlStmt += '</div>';
			htmlStmt += '</div>';
		}

		// =========================================================
		// Screen elements
		// =========================================================

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

		htmlStmt += '<div class="group_elm ' +
			(aObj.parentClassName || '') +
		'">';

		// صورة عامة أمام المحتوى
		if (
			aObj.image != undefined &&
			aObj.image != 'no' &&
			aObj.image != '' &&
			aObj.imageposition == 'front'
		) {
			htmlStmt += '<div class="img_space">';
			htmlStmt += '<img src="' + aObj.image + '">';
			htmlStmt += '</div>';
		}

		// النص العام
		if (
			aObj.text != undefined &&
			aObj.text != ''
		) {
			htmlStmt += '<div class="audioIcon off contant" ';
			htmlStmt += 'data-audio="' + (aObj.textAudio || '') + '">';

			htmlStmt += '<div class="text">' +
				aObj.text +
			'</div>';

			htmlStmt += '</div>';
		}

		/*
			الحاوية الجديدة:
			الأسئلة على اليسار
			الصور على اليمين
		*/
		htmlStmt += '<div class="questions_and_side_images">';

		// =========================================================
		// Questions
		// =========================================================

		htmlStmt += '<div class="ques">';

		for (var x = 0; x < numOfQuestions; x++) {

			var tmpObj = aObj.questions[x];
			var que = '';

			if (
				tmpObj.answer != undefined &&
				tmpObj.answer.length > 0
			) {
				que = 'que';
			}

			htmlStmt += '<div class="' +
				que +
				' img_fillin_gr d-flex" ' +
				'data-qno="' +
				(x + 1) +
			'">';

			// Text front
			if (
				tmpObj.textFront != undefined &&
				tmpObj.textFront != ''
			) {
				htmlStmt += '<div class="audioIcon off contant" ';
				htmlStmt += 'data-audio="' +
					(tmpObj.textFrontAudio || aObj.textFrontAudio || '') +
				'">';

				htmlStmt += '<div class="text_Front">' +
					tmpObj.textFront +
				'</div>';

				htmlStmt += '</div>';
			}

			// Question image
			if (
				tmpObj.image != undefined &&
				tmpObj.image != '' &&
				tmpObj.image != 'no'
			) {
				htmlStmt += '<div class="image_space">';

				htmlStmt += '<img src="' +
					tmpObj.image +
				'">';

				htmlStmt += '</div>';
			}

			var qStr = '';

			// =====================================================
			// Single word
			// =====================================================

			if (tmpObj.singleword) {

				var str = tmpObj.text || '';
				var singleAudio = '';

				if (
					tmpObj.textaudios != undefined &&
					tmpObj.textaudios[0] != undefined
				) {
					singleAudio = tmpObj.textaudios[0];
				}

				qStr += '<div class="audioIcon txt-audioIcon off ';
				qStr += 'd-flex contant min_w_fit_contant" ';
				qStr += 'data-audio="' + singleAudio + '">';

				qStr += '<img src="../images/icons/sound-wave.png" ';
				qStr += 'class="audio_icon">';

				qStr += '</div>';

				qStr += str.replace(
					/\[_]/g,
					'<input class="text_input_area" ' +
					'type="text" ' +
					'maxlength="' +
					(tmpObj.maxlength || 200) +
					'" data-type="' +
					(tmpObj.type || '') +
					'">'
				);

			} else {

				// =================================================
				// Sentence split around input
				// =================================================

				var wordIndex = -1;
				var words = (tmpObj.text || '').split('[_]');

				var sentenceParts = words.map(function (word) {

					if (word !== '') {

						wordIndex++;

						var textAudio = '';

						if (
							tmpObj.textaudios != undefined &&
							tmpObj.textaudios[wordIndex] != undefined
						) {
							textAudio =
								tmpObj.textaudios[wordIndex];
						}

						return (
							'<div class="audioIcon txt-audioIcon off ' +
							'd-flex contant min_w_fit_contant" ' +
							'data-audio="' +
							textAudio +
							'">' +
							word +
							'</div>'
						);
					}

					return '';
				});

				qStr = sentenceParts.join(
					'<input class="text_input_area" ' +
					'type="text" ' +
					'maxlength="' +
					(tmpObj.maxlength || 200) +
					'" data-type="' +
					(tmpObj.type || '') +
					'">'
				);
			}

			// =====================================================
			// Fillin container
			// =====================================================

			htmlStmt += '<div class="fillin_gr d-flex align-items-center">';
			htmlStmt += '<div class="q_space d-flex">';

			// Numbering
			if (aObj.numbering != 'none') {

				htmlStmt += '<div class="q_num_space">';

				if (aObj.numbering == 'alphabet') {

					var alphabetStart =
						aObj.numberstartfrom || 'a';

					var alphabetValue =
						String.fromCharCode(
							alphabetStart.toString().charCodeAt(0) + x
						);

					htmlStmt += alphabetValue;

				} else if (aObj.numbering == 'number') {

					htmlStmt +=
						x + parseInt(aObj.numberstartfrom || 1);
				}

				htmlStmt += '</div>';
			}

			htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

			htmlStmt += qStr;

			// Text end
			if (
				tmpObj.textEnd != undefined &&
				tmpObj.textEnd != ''
			) {
				htmlStmt += '<div class="text_End" style="' +
					(tmpObj.postion || '') +
				'">';

				htmlStmt += tmpObj.textEnd;

				htmlStmt += '</div>';
			}

			// Options words per question
			if (
				tmpObj.options_words != undefined &&
				tmpObj.options_words != '' &&
				tmpObj.options_words.length > 0
			) {
				htmlStmt += '<div class="options_words d-flex flex-wrap">';

				for (
					var y = 0;
					y < tmpObj.options_words.length;
					y++
				) {
					var optionWordAudio = '';

					if (
						tmpObj.options_words_audios != undefined &&
						tmpObj.options_words_audios[y] != undefined
					) {
						optionWordAudio =
							tmpObj.options_words_audios[y];
					}

					htmlStmt += '<div class="audioIcon txt-audioIcon off ';
					htmlStmt += 'd-flex contant" ';
					htmlStmt += 'data-audio="' +
						optionWordAudio +
					'">';

					htmlStmt += tmpObj.options_words[y];

					htmlStmt += '</div>';
				}

				htmlStmt += '</div>';
			}

			htmlStmt += '</div>';
			// end fillin_set

			var hasAnswerInput =
				tmpObj.text != undefined &&
				tmpObj.text.includes('[_]');

			htmlStmt += '<div class="icon_wrap_holder">';
			htmlStmt += '<div class="icon_wrap">';

			if (hasAnswerInput) {

				htmlStmt += '<div class="tick">';
				htmlStmt += '<img src="../images/icons/check_btn.png">';
				htmlStmt += '</div>';

				htmlStmt += '<div class="cross">';
				htmlStmt += '<img src="../images/icons/cross_btn.png">';
				htmlStmt += '</div>';

			} else {

				htmlStmt += '<div class="tick"></div>';
				htmlStmt += '<div class="cross"></div>';
			}

			htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '</div>';
			htmlStmt += '</div>';
			htmlStmt += '</div>';
		}

		htmlStmt += '</div>';
		// end ques

		// =========================================================
		// Four images on the right
		// =========================================================

		if (
			aObj.sideImages != undefined &&
			aObj.sideImages != null &&
			aObj.sideImages.length > 0
		) {
			htmlStmt += '<div class="side_images">';

			for (
				var sideImageIndex = 0;
				sideImageIndex < aObj.sideImages.length;
				sideImageIndex++
			) {
				if (aObj.sideImages[sideImageIndex] != '') {

					htmlStmt += '<div class="side_image_item">';

					htmlStmt += '<img src="' +
						aObj.sideImages[sideImageIndex] +
					'" alt="">';

					htmlStmt += '</div>';
				}
			}

			htmlStmt += '</div>';
		}

		htmlStmt += '</div>';
		// end questions_and_side_images

		// صورة عامة بالخلف أو على الجنب
		if (
			aObj.image != undefined &&
			aObj.image != '' &&
			aObj.image != 'no' &&
			aObj.imageposition != 'front'
		) {
			htmlStmt += '<div class="q_image">';

			htmlStmt += '<img src="' +
				aObj.image +
			'"/>';

			htmlStmt += '</div>';
		}

		htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
	}

	console.log('htmlStmt >> fillin Built');

	$('.activity_area').append(htmlStmt);	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}

function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}