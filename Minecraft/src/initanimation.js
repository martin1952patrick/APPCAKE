const InitAnimation = () =>{
	let i, objTemp;			
	appMc.mcMain.visible=true;			
	document.getElementById('main').style.visibility = "visible";
	document.getElementById('progress').style.display = "none";	
//	appSounds["bg"].play();
	stateGame = 0;
	// appMc.mcBg.filters =  [appMc.mcBg.blurFilter];
	// appMc.mcGameField.filters = [appMc.mcGameField.blurFilter]

	gameItems.forEach((c,i)=>{
		gsap.from(c.scale, 0.5,{delay:0.5+0.01*i, overwrite:"none", x:0,y:0, ease:Back.easeOut});
		gsap.to(c.mcCell, 0.5,{delay:1.0, overwrite:"none", alpha:0, ease:"none"});
		gsap.to(c.mcSprite, 0.5,{delay:1.0, overwrite:"none", alpha:1, ease:"none"});
		gsap.to(c.mcGreen, 0.5,{delay:1.0, overwrite:"none", alpha:1, ease:"none"});
	});
	gsap.from(appMc.mcIntent.scale, 0.5,{delay:0.8, overwrite:"none", x:0,y:0, ease:Back.easeOut});	
	
	tutorialItem = appMc['mcSkin_'+0]
	setTimeout(()=>{
		appMc.mcBgOverlay.interactive = false;
		tutorialItem.hit.interactive = true;
		handShow (tutorialItem);	
	},3500);

	setTimeout(()=>{
		gameItems.forEach((c,i)=>{
			gsap.to(c.mcCell, 0.5,{delay:0.0, overwrite:"none", alpha:1, ease:"none"});
			gsap.to(c.mcSprite, 0.5,{delay:0.0, overwrite:"none", alpha:0, ease:"none"});
			gsap.to(c.mcGreen, 0.5,{delay:1.0, overwrite:"none", alpha:0, ease:"none"});
		});
	},2500);
	
	gsap.from(appMc.mcSame.scale, 0.5, {delay:3.2, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.from(appMc.mcRem.scale, 0.5, {delay:0.7, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.to(appMc.mcRem.scale, 0.2, {delay:3.0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
}