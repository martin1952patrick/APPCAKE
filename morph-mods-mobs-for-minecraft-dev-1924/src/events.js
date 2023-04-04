// fuction to handle the direct user on click the skin => stage moves to the final stage
function onClickSkin(skinId) {
	previousActiveId = findTheActiveSkin();
	changeActiveItem(previousActiveId, skinId);
	setTimeout(() => {
		appMc.mcStage1Container.visible = false;
		showStage2(skinId);
	}, 300);
}

// function to handle the on select a specific skin => stage moves to the next page
function onSelect() {
	let id = findTheActiveSkin();
	appMc.mcStage1Container.visible = false;
	showStage2(id);
}

// Function to handle on click back btn
function onClickPrevious() {
	gsapAnimation("mcPreviousBtn");
	currentItemId = findTheActiveSkin();
	prevItemId = currentItemId - 1;
	if (currentItemId === 2) prevItemId = 5;
	changeActiveItem(currentItemId, prevItemId);
}

// Function to handle on Click next button
function onClickNext() {
	gsapAnimation("mcNextBtn");
	prevItemId = findTheActiveSkin();
	nextItemId = prevItemId + 1;
	if (prevItemId === 5) nextItemId = 2;
	changeActiveItem(prevItemId, nextItemId);
}

// Function to handle the arrow back click
function goBack() {
	appMc.mcStage2Container.visible = false;
	appMc.mcStage1Container.visible = true;
}

const EndGame = () => {
	let i, objTemp;
	if (stateGame != 10) {
		stateGame = 10;

		appMc.mcBgFS.visible = true;
	}
};

const StageDown = (e) => {
	if (stateGame == 0) {
		stateGame = 1;
		if (!isGlobalActive) {
			isGlobalActive = true;
			isGlobalSound = true;
			Howler.mute(!isGlobalSound);
		}
	}
	mouse.isDown = true;
};
const StageMove = (e) => {
	if (mouse.isDown) {
		mouse.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		mouse.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;
	}
};
const StageUp = (e) => {
	mouse.isDown = false;

	//	appMc.mcConfetti = new Confetti({p:appMc.mcUI, count:100});

	appMc.mcSparkle = new itemSparkle({
		p: appMc.mcUI,
		tex: "flare",
		count: 100,
		t: 10,
		dx: 15,
		dy: 15,
		s: 0.5,
	});
};
const BtnGlobalSound = (e) => {
	if (isGlobalSound) {
		isGlobalSound = false;

		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];

		Howler.mute(true);
	} else {
		isGlobalSound = true;

		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];

		Howler.mute(false);
	}
};
