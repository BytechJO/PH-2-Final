function buildMcqBody(aObj) {

	var htmlStmt = '';

	if (
		typeof aObj != undefined &&
		aObj != null
	) {

		var numOfQuestions =
			aObj.questions.length;

		var numberofCols =
			parseInt(aObj.numberofcolumns);

		var numOfQinCol =
			Math.ceil(
				numOfQuestions / numberofCols
			);

		var currQueNum = 0;


		/* =====================================================
		   Back navigation
		===================================================== */

		htmlStmt +=
			'<div class="' +
				'sub_footer_icon ' +
				'sub_footer_icon_left ' +
				'subFooterNav ' +
				'backNav ' +
				'mx-1' +
			'">';

		htmlStmt += '<a href="">';

		htmlStmt +=
			'<img src="../images/icons/back_btn.png" />';

		htmlStmt += '</a>';

		htmlStmt += '</div>';


		/* =====================================================
		   Next navigation
		===================================================== */

		htmlStmt +=
			'<div class="' +
				'sub_footer_icon ' +
				'sub_footer_icon_right ' +
				'subFooterNav ' +
				'nextNav ' +
				'mx-1' +
			'">';

		htmlStmt += '<a href="">';

		htmlStmt +=
			'<img src="../images/icons/next_btn.png" />';

		htmlStmt += '</a>';

		htmlStmt += '</div>';


		/* =====================================================
		   Heading
		===================================================== */

		htmlStmt +=
			'<div class="' +
				'act_head_group ' +
				'justify-content-center' +
			'">';


			/* Main title */

			htmlStmt +=
				'<div class="' +
					'audioIcon off contant' +
				'" ' +
				'data-slideNum="1" ' +
				'data-audio="' +
					aObj.mainTitleAudio +
				'">';

				htmlStmt +=
					'<div class="q-type-img-container">';

					htmlStmt +=
						'<img class="mainTitle" ' +
						'src="' +
							aObj.mainTitle +
						'">';


					if (
						aObj.mainTitleIcon != undefined &&
						aObj.mainTitleIcon != ''
					) {

						htmlStmt +=
							'<img class="mainTitleIcon" ' +
							'src="' +
								aObj.mainTitleIcon +
							'" ' +
							'style="right:' +
								aObj.mainTitleIconPos.right +
							'">';
					}


				htmlStmt += '</div>';

			htmlStmt += '</div>';


			/* Subtitle */

			htmlStmt +=
				'<div class="activityHeading">';

				htmlStmt +=
					'<div class="' +
						'audioIcon off contant ' +
						'audioQuestionTitle' +
					'" ' +
					'data-slideNum="1" ' +
					'data-audio="' +
						aObj.subTitleAudio +
					'">';

					htmlStmt +=
						"<div class='page_sub_title d-flex'>";

						htmlStmt +=
							'<p>' +
								aObj.subTitleTextLeft +
							'</p>';


						for (
							var sicons = 0;
							sicons <
								aObj.subTitleIcons.length;
							sicons++
						) {

							htmlStmt +=
								'<img src="' +
									aObj.subTitleIcons[sicons] +
								'"/>';
						}


						htmlStmt +=
							'<p>' +
								aObj.subTitleTextRight +
							'</p>';

					htmlStmt += '</div>';

				htmlStmt += '</div>';

			htmlStmt += '</div>';


		htmlStmt += '</div>';


		/* =====================================================
		   Main activity body
		===================================================== */

		htmlStmt +=
			'<div class="options cont_ht_sf mx-auto">';

		htmlStmt +=
			'<div class="' +
				'all_cont ' +
				'justify-content-start ' +
				'justify-content-sm-center ' +
				'read_look_all_cont' +
			'">';

		htmlStmt +=
			'<div class="' +
				'h-100 ' +
				'd-flex ' +
				'flex-wrap ' +
				'justify-content-center ' +
				'align-items-center ' +
				'mb-70 ' +
				'read_look_questions_wrapper' +
			'">';


		/* =====================================================
		   General front image
		===================================================== */

		if (
			aObj.image != 'no' &&
			aObj.image != ''
		) {

			if (
				aObj.imageposition == 'front'
			) {

				htmlStmt +=
					'<div class="img_space">';

				htmlStmt +=
					'<img src="' +
						aObj.image +
					'">';

				htmlStmt += '</div>';
			}
		}


		/* =====================================================
		   Question columns
		===================================================== */

		for (
			var col = 0;
			col < numberofCols;
			col++
		) {

			htmlStmt +=
				'<div class="' +
					'question_group ' +
					'read_look_question_group ' +
					'd-flex ' +
					'flex-column' +
				'">';


			/* =================================================
			   Questions in column
			================================================= */

			for (
				var row = 0;
				row < numOfQinCol;
				row++
			) {

				if (
					currQueNum >= numOfQuestions
				) {
					break;
				}


				var tpOb =
					aObj.questions[currQueNum];

				var questionNumber =
					currQueNum +
					parseInt(aObj.numberstartfrom);


				if (
					typeof tpOb != undefined &&
					tpOb != null
				) {

					var className = '';

					if (
						tpOb.options == 0
					) {
						className = 'no_que';
					} else {
						className = 'que';
					}


					/* =========================================
					   Question item
					========================================= */

					htmlStmt +=
						'<div class="' +
							className +
							' que_item ' +
							'read_look_que' +
						'" ' +
						'id="que_' +
							(currQueNum + 1) +
						'" ' +
						'data-qno="' +
							(currQueNum + 1) +
						'">';


						htmlStmt +=
							'<div class="' +
								'ques_line ' +
								'd-flex ' +
								'read_look_ques_line' +
							'">';


							htmlStmt +=
								'<div class="' +
									'q_grp ' +
									'd-flex ' +
									'flex-wrap ' +
									'read_look_q_grp' +
								'">';


								/* =================================
								   Question title
								================================= */

								htmlStmt +=
									'<div class="' +
										'read_look_question_title ' +
										'd-flex' +
									'">';


									if (
										aObj.numbering != 'none'
									) {

										htmlStmt +=
											'<div class="q_num_space">';


										if (
											aObj.numbering ==
											'alphabet'
										) {

											htmlStmt +=
												String.fromCharCode(
													aObj.numberstartfrom
														.charCodeAt(0) +
													currQueNum
												);

										} else if (
											aObj.numbering ==
											'number'
										) {

											htmlStmt +=
												questionNumber;
										}


										htmlStmt += '</div>';
									}


									htmlStmt +=
										'<div class="' +
											'question_text ' +
											'audioIcon off contant ' +
											'not-disapled' +
										'" ' +
										'data-audio="' +
											tpOb.audio +
										'">';

										htmlStmt +=
											tpOb.question;

									htmlStmt += '</div>';


								htmlStmt += '</div>';


								/* =================================
								   Question blue box
								================================= */

								htmlStmt +=
									'<div class="' +
										'q_part ' +
										'read_look_question_box' +
									'">';


									/* =============================
									   Choices
									============================= */

									htmlStmt +=
										'<div class="read_look_choices">';


									var opts =
										tpOb.options;


									for (
										var rr = 0;
										rr < opts.length;
										rr++
									) {

										if (
											tpOb.inputbox == 'no'
										) {

											htmlStmt +=
												'<span class="' +
													'pick_set ' +
													'd-flex ' +
													'flex-wrap ' +
													'read_look_pick_set' +
												'" ' +
												'id="pick_set_' +
													(currQueNum + 1) +
													'_' +
													(rr + 1) +
												'">';

										} else {

											htmlStmt +=
												'<span class="' +
													'pick_set ' +
													'd-flex ' +
													'flex-wrap ' +
													'read_look_pick_set' +
												'" ' +
												'id="pick_set_' +
													(currQueNum + 1) +
													'_' +
													(rr + 1) +
												'">';

											htmlStmt +=
												'<input ' +
												'class="' +
													'text_input_area ' +
													'd-none' +
												'" ' +
												'type="text" ' +
												'readonly ' +
												'disabled>';
										}


										var tmpOpt =
											opts[rr];


										for (
											var aa = 0;
											aa < tmpOpt.length;
											aa++
										) {

											htmlStmt +=
												'<span class="' +
													'pick ' +
													'read_look_pick' +
												'" ' +
												'id="pick_' +
													(currQueNum + 1) +
													'_' +
													(rr + 1) +
													'_' +
													(aa + 1) +
												'" ' +
												'data-opttext="' +
													tmpOpt[aa] +
												'">';

												htmlStmt +=
													tmpOpt[aa];

											htmlStmt += '</span>';
										}


										htmlStmt += '</span>';
									}


									htmlStmt += '</div>';


									/* =============================
									   Animal image
									============================= */

									if (
										tpOb.image != undefined &&
										tpOb.image != '' &&
										tpOb.image != 'no'
									) {

										htmlStmt +=
											'<div class="' +
												'img_space ' +
												'read_look_image_space' +
											'">';

											htmlStmt +=
												'<img ' +
												'src="' +
													tpOb.image +
												'" ' +
												'alt="' +
													(
														tpOb.imageAlt ||
														''
													) +
												'">';

										htmlStmt += '</div>';
									}


								htmlStmt += '</div>';


							htmlStmt += '</div>';


						htmlStmt += '</div>';


						/* =========================================
						   Tick and cross from project
						========================================= */

						htmlStmt +=
							'<div class="icon_wrap p-2">';

							htmlStmt +=
								'<div class="tick">';

								htmlStmt +=
									'<img src="' +
										'../images/icons/check_btn.png' +
									'">';

							htmlStmt += '</div>';


							htmlStmt +=
								'<div class="cross">';

								htmlStmt +=
									'<img src="' +
										'../images/icons/cross_btn.png' +
									'">';

							htmlStmt += '</div>';

						htmlStmt += '</div>';


					htmlStmt += '</div>';
				}


				currQueNum++;
			}


			htmlStmt += '</div>';
		}


		/* =====================================================
		   General back image
		===================================================== */

		if (
			aObj.image != 'no' &&
			aObj.image != ''
		) {

			if (
				aObj.imageposition == 'back'
			) {

				htmlStmt +=
					'<div class="img_space">';

				htmlStmt +=
					'<img src="' +
						aObj.image +
					'">';

				htmlStmt += '</div>';
			}
		}


		htmlStmt += '</div>';

		htmlStmt += '</div>';

		htmlStmt += '</div>';
	}


	console.log(
		'htmlStmt >> MCQ Built'
	);


	$('.activity_area').append(
		htmlStmt
	);

/* =====================================================
   Allow only one choice in each question
===================================================== */

$(document)
	.off("click.readLookSingle", ".read_look_pick")
	.on("click.readLookSingle", ".read_look_pick", function () {

		var clickedPick = $(this);
		var currentPickSet = clickedPick.closest(".pick_set");

		setTimeout(function () {

			currentPickSet
				.find(".pick")
				.not(clickedPick)
				.removeClass(
					"selected active pick_selected optionSelected ui-selected"
				)
				.css({
					"background": "",
					"background-color": ""
				});

		}, 0);

	});
	setLoadedStatus(
		getCurrFileOrDirectory('file')
	);
}


function nextChar(c) {

	return String.fromCharCode(
		c.charCodeAt(0) + 1
	);
}