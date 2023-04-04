const InitBasicObj = () => {
	//- mcMain

	appMc.mcMain = new createContainer({ p: stage, visible: false });
	appMc.mcGame = new createContainer({ p: appMc.mcMain });

	appMc.mcGame.twistFilter = new PIXI.filters.TwistFilter({
		angle: 4,
		offset: { x: 640, y: 640 },
		radius: 800,
		padding: 20,
	});

	appMc.mcWorldShake = new createContainer({ p: appMc.mcGame });
	appMc.mcWorldShake.shakeAX = 0;
	appMc.mcWorldShake.shakeAY = 0;
	appMc.mcWorldShake.shakeD = 0;

	if (physics) {
		appMc.p2world = new p2.World({ gravity: [0, -500] });

		// Add a plane
		planeShape = new p2.Plane();
		planeBody = new p2.Body({ position: [0, -100] });
		planeBody.addShape(planeShape);
		appMc.p2world.addBody(planeBody);
	}

	//Back
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });

	appMc.mcBg = new createSprite({ p: appMc.mcWorldCamera, tex: "bg" });

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });
	appMc.mcStage1Container = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});

	// Choose skin text vertical
	appMc.mcChooseSkinText = new createSprite({
		p: appMc.mcStage1Container,
		tex: "choose-skin-text",
		visible: false,
	});
	// choose skin text horizontal
	appMc.mcHorizontalChooseSkinText = new createSprite({
		p: appMc.mcStage1Container,
		tex: "horizontal-choose-skin-text",
		visible: false,
	});

	// Buttons container
	appMc.mcButtonContainer = new createContainer({
		p: appMc.mcStage1Container,
	});

	// Buttons container and actual buttons
	for (let k = 2; k < 6; k++) {
		appMc[`bgC-${k}`] = new createContainer({
			p: appMc.mcButtonContainer,
		});
		if (k === 2) {
			appMc[`bg-${k}`] = new createSprite({
				p: appMc[`bgC-${k}`],
				tex: "non-active-skin-bg",
				y: 0,
				x: 0,
				visible: false,
			});
			appMc[`bg-active-${k}`] = new createSprite({
				p: appMc[`bgC-${k}`],
				tex: "active-skin-bg",
				y: 20,
				x: 0,
				visible: true,
			});
		} else {
			appMc[`bg-${k}`] = new createSprite({
				p: appMc[`bgC-${k}`],
				tex: "non-active-skin-bg",
				y: 0,
				x: 0,
			});
			appMc[`bg-active-${k}`] = new createSprite({
				p: appMc[`bgC-${k}`],
				tex: "active-skin-bg",
				y: 20,
				x: 0,
				visible: false,
			});
		}

		appMc[`skin-${k}`] = new createSprite({
			p: appMc[`bgC-${k}`],
			tex: `skin-${k}`,
			x: 0,
			y: 0,
			scale: 0.25,
		});
		gsap.from(appMc[`skin-${k}`].scale, 0.3, {
			x: 0,
			y: 0,
			ease: "Sine.easeIn",
			overwrite: "none",
			delay: 0.0 + k / 10,
		});
		appMc[`skin-${k}`].interactive = true;
		appMc[`skin-${k}`].on("pointerdown", () => onClickSkin(k));
	}

	// default skin
	appMc.mcDefaultSkin = new createSprite({
		p: appMc.mcStage1Container,
		tex: "skin-1",
		x: 0,
		y: 125,
	});

	// Select btn container and the next,previous btns
	appMc.mcSelectBtnContainer = new createContainer({
		p: appMc.mcStage1Container,
		x: 0,
		y: 0,
	});

	appMc.mcTapToSelectBtn = new createSprite({
		p: appMc.mcSelectBtnContainer,
		tex: "tap-to-select-btn",
		scale: 0.7,
	});
	appMc.mcTapToSelectBtn.interactive = true;
	appMc.mcTapToSelectBtn.on("pointerdown", onSelect);

	appMc.mcNextBtn = new createSprite({
		p: appMc.mcSelectBtnContainer,
		tex: "next-btn",
		y: 0,
		x: appMc.mcTapToSelectBtn.width / 2 + 20,
		anchor: [0, 0.5],
		scale: 0.7,
	});
	appMc.mcNextBtn.interactive = true;
	appMc.mcNextBtn.on("pointerdown", onClickNext);

	appMc.mcPreviousBtn = new createSprite({
		p: appMc.mcSelectBtnContainer,
		tex: "back-btn",
		y: 0,
		x: -appMc.mcTapToSelectBtn.width / 2 - 20,
		anchor: [1, 0.5],
		scale: 0.7,
	});
	appMc.mcPreviousBtn.interactive = true;
	appMc.mcPreviousBtn.on("pointerdown", onClickPrevious);

	// Stage two container and sprites
	appMc.mcStage2Container = new createContainer({
		p: appMc.mcUI,
		visible: false,
	});
	appMc.mcStageTwoTopContainer = new createSprite({
		p: appMc.mcStage2Container,
	});
	appMc.mcBackArrow = new createSprite({
		p: appMc.mcStageTwoTopContainer,
		tex: "back-arrow",
	});
	appMc.mcBackArrow.interactive = true;
	appMc.mcBackArrow.on("pointerdown", goBack);

	appMc.mcSelectedSkinText = new createSprite({
		p: appMc.mcStageTwoTopContainer,
		tex: "selected-skin",
	});

	appMc.mcTakeTheSkinText = new createSprite({
		p: appMc.mcStage2Container,
		tex: "take-the-skin-btn",
		scale: 0.7,
	});

	appMc.mcTakeTheSkinText.interactive = true;
	appMc.mcTakeTheSkinText.on("pointerdown", ClickAd);

	// BEGINNING STAGE TWO

	// END OF STAGE TWO

	appMc.mcBgOverlay = new createRect({
		p: appMc.mcUI,

		//- mcBgOverlay
		x: -1280 * 0.5,
		y: -1280 * 0.5,
		width: 1280,
		height: 1280,
		color: 0x000000,
		alpha: 0.0,
		fill: 1,
		radius: 0,
	});

	//- mcBgFS
	appMc.mcBgFS = new createRect({
		p: appMc.mcUI,
		x: -1280 * 0.5,
		y: -1280 * 0.5,
		width: 1280,
		height: 1280,
		color: 0x121214,
		alpha: 0,
		visible: false,
	});

	// appMc.mcBgOverlay.interactive = true;
	// appMc.mcBgOverlay.on("pointerdown", StageDown);
	// appMc.mcBgOverlay.on("pointermove", StageMove);
	// appMc.mcBgOverlay.on("pointerup", StageUp);
	// appMc.mcBgFS.interactive = true;
	// appMc.mcBgFS.on("pointerup", ClickAd);

	//- mcBtnSound
	appMc.mcBtnSound = new createContainer({ p: appMc.mcUI });
	appMc.mcBtnSoundB = new createSprite({
		p: appMc.mcBtnSound,
		tex: "btn_sound_on",
	});

	appMc.mcBtnSound.interactive = true;
	appMc.mcBtnSound.on("pointerup", BtnGlobalSound);
};

// function to change the previous active item to the current
function changeActiveItem(prevItemId, nextItemId) {
	appMc[`bg-active-${prevItemId}`].visible = false;
	appMc[`bg-${prevItemId}`].visible = true;

	appMc[`bg-active-${nextItemId}`].visible = true;
	appMc[`bg-${nextItemId}`].visible = false;
}

// function to find the active skin
function findTheActiveSkin() {
	for (let i = 2; i < 6; i++) {
		if (appMc[`bg-active-${i}`].visible === true) {
			return i;
		}
	}
}

// function to show stage2
function showStage2(id) {
	appMc.mcStage2Container.visible = true;
	if ("mcEnlargedImg" in appMc) {
		appMc.mcStage2Container.removeChild(appMc.mcEnlargedImg);
	}

	if ("mcLightening" in appMc) {
		appMc.mcStage2Container.removeChild(appMc.mcLightening);
	}
	appMc.mcLightening = new createSprite({
		p: appMc.mcStage2Container,
		tex: "lightening",
		x: 0,
		y: 0,
		scale: 0.8,
		alpha: 0.7,
	});
	appMc.mcEnlargedImg = new createSprite({
		p: appMc.mcStage2Container,
		tex: `enlarged-skin-${id}`,
		x: 0,
		y: 0,
		scale: 0.7,
	});

	gsap.from(appMc.mcEnlargedImg.scale, 0.5, {
		delay: 0,
		overwrite: "none",
		ease: "Sine.easeIn",
		x: 0,
		y: 0,
	});
	gsap.from(appMc.mcLightening.scale, 0.5, {
		delay: 0.5,
		overwrite: "none",
		ease: "Elastic.easeOut",
		x: 0,
		y: 0,
	});
	appMc.mcStage2Container.setChildIndex(appMc.mcLightening, 0);

	AppResize();
}

// gsap animation for the next and previous btns
function gsapAnimation(btn) {
	gsap.to(appMc[btn].scale, 0.4, {
		overwrite: "none",
		x: 0.6,
		y: 0.6,
		ease: "Sine.easeOut",
		duration: 0,
	});
	gsap.from(appMc[btn].scale, 0.3, {
		overwrite: "none",
		x: 0.6,
		y: 0.6,
		ease: "Sine.easeIn",
		duration: 0,
	});
}
