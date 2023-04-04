//- Resize

const AppResize = (e) => {
	appObj.mainWidth = Math.ceil(window.innerWidth);
	appObj.mainHeight = Math.ceil(window.innerHeight);
	appObj.canvasWidth = Math.ceil(1.4 * window.innerWidth);
	appObj.canvasHeight = Math.ceil(1.4 * window.innerHeight);

	renderer.view.style.width = appObj.mainWidth + "px";
	renderer.view.style.height = appObj.mainHeight + "px";
	renderer.view.width = appObj.canvasWidth;
	renderer.view.height = appObj.canvasHeight;

	renderer.resize(appObj.canvasWidth, appObj.canvasHeight);

	stage.position.set(
		Math.ceil(appObj.canvasWidth * 0.5),
		Math.ceil(appObj.canvasHeight * 0.5)
	);

	//- POSITION OBJ

	appMc.mcGame.scale.set(1, 1);
	appMc.mcUI.scale.set(1, 1);

	// common resize of the default skin
	// appMc.mcDefaultSkin.y = appObj.canvasHeight / 2 / appMc.mcUI.scale.y - 300;

	// Setting the active cell

	if (appObj.mainWidth < appObj.mainHeight) {
		appMc.mcGame.scale.x = appObj.canvasWidth / 1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if (appMc.mcGame.scale.y * 1280 < appObj.canvasHeight) {
			appMc.mcGame.scale.y = appObj.canvasHeight / 1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}

		appMc.mcUI.scale.x = appObj.canvasWidth / 720;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if (appMc.mcUI.scale.y * 1280 > appObj.canvasHeight) {
			appMc.mcUI.scale.y = appObj.canvasHeight / 1280;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBgOverlay.scale.x =
			0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		appMc.mcHorizontalChooseSkinText.visible = false;
		appMc.mcChooseSkinText.visible = true;

		appMc.mcChooseSkinText.y = -(
			(0.4 * appObj.canvasHeight) /
			appMc.mcUI.scale.y
		);
		for (let x = 2; x < 6; x++) {
			let position = (-0.75 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			if (x === 3) {
				position = (-0.25 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			if (x === 4) {
				position = (0.25 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			if (x === 5) {
				position = (0.75 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			appMc[`bgC-${x}`].x = position;
			appMc[`bgC-${x}`].y = -(
				(0.4 * appObj.canvasHeight * 0.5) /
				appMc.mcUI.scale.y
			);
			appMc[`bgC-${x}`].scale.set(1);
			appMc[`skin-${x}`].scale.x = 0.25;
		}
		appMc.mcSelectBtnContainer.y =
			((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 0.75;

		appMc.mcSelectBtnContainer.scale.y = 1.3;
		appMc.mcSelectBtnContainer.scale.x = 1.3;

		appMc.mcDefaultSkin.scale.set(1.1);

		if (appMc.mcStage2Container.visible) {
			appMc.mcStageTwoTopContainer.y =
				80 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;

			appMc.mcBackArrow.x =
				50 + (-appObj.canvasWidth * 0.5) / appMc.mcUI.scale.x;

			// Resizing the take the skin btn
			appMc.mcTakeTheSkinText.y =
				-150 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;

			appMc.mcTakeTheSkinText.scale.set(1);

			gsap.from(appMc.mcTakeTheSkinText.scale, 0.5, {
				x: 0.9,
				y: 0.9,
				overwrite: "none",
				ease: "Sine.easeInOut",
				delay: 0,
				yoyo: true,
				repeat: -1,
			});

			// if ("mcEnlargedImg" in appMc) {
			// 	appMc.mcEnlargedImg.scale.set(1.2);
			// }
		}
	} else {
		appMc.mcGame.scale.x = appObj.canvasWidth / 1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if (appMc.mcGame.scale.y * 1280 < appObj.canvasHeight) {
			appMc.mcGame.scale.y = appObj.canvasHeight / 1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}

		appMc.mcUI.scale.x = appObj.canvasWidth / 1280;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if (appMc.mcUI.scale.y * 720 > appObj.canvasHeight) {
			appMc.mcUI.scale.y = appObj.canvasHeight / 720;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBgOverlay.scale.x =
			0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -60 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		appMc.mcChooseSkinText.visible = false;
		appMc.mcHorizontalChooseSkinText.visible = true;

		gsap.from(appMc.mcHorizontalChooseSkinText.scale, 0.5, {
			overwrite: "none",
			delay: 0,
			x: 0.9,
			y: 0.9,
			yoyo: true,
			repeat: -1,
			ease: "Sine.easeInOut",
		});

		appMc.mcHorizontalChooseSkinText.y = -(
			(0.37 * appObj.canvasHeight) /
			appMc.mcUI.scale.y
		);

		for (let x = 2; x < 6; x++) {
			let position = (-0.6 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			if (x === 3) {
				position = (-0.2 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			if (x === 4) {
				position = (0.2 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			if (x === 5) {
				position = (0.6 * appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
			}
			appMc[`bgC-${x}`].x = position;
			appMc[`bgC-${x}`].y = -(
				(0.32 * appObj.canvasHeight * 0.5) /
				appMc.mcUI.scale.y
			);
			appMc[`bgC-${x}`].scale.x = 1.5;
			appMc[`bgC-${x}`].scale.x = 1.5;
			appMc[`skin-${x}`].scale.x = 0.25;
		}

		appMc.mcSelectBtnContainer.y =
			((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 0.85;

		appMc.mcSelectBtnContainer.scale.set(1.4 / appMc.mcUI.scale.y);

		// appMc.mcDefaultSkin.scale.set(1 / appMc.mcUI.scale.y);
		appMc.mcDefaultSkin.scale.set(0.6);

		appMc.mcStageTwoTopContainer.y =
			80 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;

		appMc.mcBackArrow.x = 50 + (-appObj.canvasWidth * 0.5) / appMc.mcUI.scale.x;

		// Resizing the take the skin btn
		// appMc.mcTakeTheSkinText.scale.set(0.6);

		appMc.mcTakeTheSkinText.y =
			-80 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;

		if (appMc.mcStage2Container.visible) {
			gsap.from(appMc.mcTakeTheSkinText.scale, 0.5, {
				x: 0.75,
				y: 0.75,
				overwrite: "none",
				ease: "Sine.easeInOut",
				delay: 0,
				yoyo: true,
				repeat: -1,
			});
		}
	}
};
// Resize
