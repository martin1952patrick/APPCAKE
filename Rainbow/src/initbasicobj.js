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

	//Back
	// appSounds.bg.play()
	// appSounds.allsounds.play()
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });
	appMc.mcBg = new createSprite({p: appMc.mcWorldCamera, tex: "bg",});

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// Main container
	appMc.mcMainContainer = new createContainer({ p: appMc.mcUI });

	appMc.mcHeader = new createContainer({ p: appMc.mcMainContainer });

	appMc.mcCantRunText = new createSprite({p: appMc.mcHeader, tex: "cantrun",
		scale: 0.4, visible: false,});

	appMc.mcChooseWhoToHideFromText = new createSprite({p: appMc.mcHeader, tex: "header", visible: true,});

	// Bottom container for text and choose btn
	appMc.mcBottomContainer = new createContainer({ p: appMc.mcMainContainer });

	appMc.mcRectangle = new createSprite({p: appMc.mcBottomContainer,
    tex: "rectangle",scale: 0.2,});

	//appMc mcAvartar
	appMc.mcAvatarMain = new createSprite({ p: appMc.mcMainContainer });
	appMc.mcAvatarA = new createSprite({p: appMc.mcAvatarMain, tex: "avatarA",
		scale: 0.3, visible: false,});

	appMc.mcAvatarB = new createSprite({p: appMc.mcAvatarMain,tex: "avatarB",
		scale: 0.23, visible: false,});

	appMc.mcAvatarE = new createSprite({p: appMc.mcAvatarMain, tex: "avatarE",
		scale: 0.26, visible: false,});

	appMc.mcAvatarF = new createSprite({p: appMc.mcAvatarMain,tex: "avatarF",
		scale: 0.25, visible: true,});

	//Loading  the footer choices
	appMc.mcChooseA = new createSprite({p: appMc.mcBottomContainer,tex: "chooseA",
		scale: 0.2,visible: true,});

	appMc.mcChooseB = new createSprite({p: appMc.mcBottomContainer,tex: "chooseB",
		scale: 1.2, visible: false,});

	appMc.mcChooseE = new createSprite({p: appMc.mcBottomContainer,tex: "chooseE",
		scale: 1.2, visible: false,});

	appMc.mcChooseF = new createSprite({p: appMc.mcBottomContainer,tex: "chooseF",
		scale: 1.2, visible: false,});

	appMc.mcTry = new createSprite({p: appMc.mcBottomContainer,tex: "try",
		scale: 1.2, visible: false,});

	appMc.mcLater = new createSprite({p: appMc.mcBottomContainer,tex: "later",scale: 1.2, visible: false,});

	appMc.mcHome = new createSprite({p: appMc.mcBottomContainer, tex: "hme",scale: 1.2, visible: false,});

	//Left and Right clicking.
	appMc.mcRight = new createSprite({p:appMc.mcMainContainer, tex: "b-right", scale:0.2});
	appMc.mcLeft = new createSprite({p:appMc.mcMainContainer, tex:"b-left", scale:0.2})

	appMc.mcAvatarMain.a0 = RandomInteger(0, 360);
	appMc.mcAvatarMain.a1 = RandomInteger(0, 360);

	// McChooseA interactiveness =>
	appMc.mcChooseA.interactive = true;
	appMc.mcChooseA.on("pointerdown", onChooseA);

	//- mcBgOverlay
	appMc.mcBgOverlay = new createRect({
		p: appMc.mcUI,
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
	// appMc.mcBgOverlay.on('pointerdown', StageDown);
	// appMc.mcBgOverlay.on('pointermove', StageMove);
	// appMc.mcBgOverlay.on('pointerup', StageUp);
	// appMc.mcBgFS.interactive = true;
	// appMc.mcBgFS.on('pointerup', ClickAd);

	//- mcBtnSound
	appMc.mcBtnSound = new createContainer({ p: appMc.mcUI });
	appMc.mcBtnSoundB = new createSprite({
		p: appMc.mcBtnSound,
		tex: "btn_sound_on",
	});
  

	
};
