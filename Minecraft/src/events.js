//const { click } = require("wd/lib/commands");

const EndGame = () =>{
	let i, objTemp;
	if(stateGame !=10){
		stateGame = 10;	

		console.log(winItem);

		gsap.to(appMc, 0.5,{delay:0.5, overwrite:"none", blurStrenght:15, ease:"none"});

		appMc.mcBgFS.visible = true;
		appMc.mcWin.visible = true;
		appMc.mcChear.visible = true;
		appMc.mcCard.visible = true;
		gsap.to(appMc.mcSame.scale, 0.5, {delay:0.0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
		gsap.from(appMc.mcChear.scale, 0.5,{delay:0.7, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.from(appMc.mcWin.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.from(appMc.mcGetBtn.scale, 0.5,{delay:1.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.to(appMc.mcGetBtn.scale, 0.5,{delay:2.0, yoyo:true, repeat:-1, overwrite:"none", x:0.95, y:0.95, ease:Sine.easeInOut});

		let _x = 0;
		let _y = 0;
		winItem.forEach((c,i)=>{
			if(_x%4==0){
				_y++;
				_x=0;
			}	
			appMc['mcWinSkin_'+i] = new createSprite({p:appMc.mcWinItems,tex:c, scale:0.12, x:67*_x, y:100*_y});
			gsap.from(appMc['mcWinSkin_'+i].scale,0.5,{delay:1.0+i*0.05, overwrite:"none", x:0,y:0, ease:Back.easeOut});
			_x++;
		});
		
		setTimeout(()=>{
			appMc.mcConfetti = new Confetti({
				p:appMc.mcVFX, 
				count:500, 
			});
		},1500);						
	}			
}	

//Button for the Cells and Skins (Logic)

const btnClick = (e)=>{

	let objTemp = e.target.parent;
	appMc.mcBtnsHand.alpha = 0;
	if(tutorial){
		tutorialItem.hit.interactive = false;
		for(let i = 0;i< gameItems.length; i++){
			if(tutorialItem.name == gameItems[i].name){
				tutorialItem = gameItems[i];
			}
		}
		handShow (tutorialItem);
		tutorial = false;
    
	}

	if(objTemp.status){
		SaveObject(objTemp.mcCell);
		objTemp.status = false;
		appMc.mcFlyAvatarFirst.visible = true;
		

		gsap.to(objTemp.mcCell.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});
	
		if(firstItem == null){
			firstItem = objTemp;
			appMc.mcFlyAvatarFirst.texture = moduleTexture.pixiTextures[firstItem.name];
			appMc.mcFlyAvatarFirst.x = (firstItem.x+appMc.mcSkins.x+appMc.mcGameField.x)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.y = (firstItem.y+appMc.mcSkins.y+appMc.mcGameField.y+30)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.scale.x = firstItem.scale.x*firstItem.mcSprite.scale.x*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.scale.y = appMc.mcFlyAvatarFirst.scale.x;
			gsap.from(appMc.mcFlyAvatarFirst.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		}
		else{
			appMc.mcBgOverlay.interactive = true;		
			secondItem = objTemp;
			appMc.mcFlyAvatarSecond.texture = moduleTexture.pixiTextures[secondItem.name];
			appMc.mcFlyAvatarSecond.x = (secondItem.x+appMc.mcSkins.x+appMc.mcGameField.x)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.y = (secondItem.y+appMc.mcSkins.y+appMc.mcGameField.y+30)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.scale.x = secondItem.scale.x*secondItem.mcSprite.scale.x*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.scale.y = appMc.mcFlyAvatarSecond.scale.x;
			gsap.from(appMc.mcFlyAvatarSecond.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});

			setTimeout(()=>{
				checkItem();
			},200);
		}
	}	
}
const handShow = (item) =>{
	console.log("hand");
	appMc.mcBtnsHand.alpha = 1;
	appMc.mcBtnsHand.scale.set(1);
	item.hit.interactive = true;
	appMc.mcBtnsHand.position.set(item.x+20,item.y+100);
	gsap.from(appMc.mcBtnsHand.scale, 0.5,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.to(appMc.mcBtnsHand.scale, 0.5,{delay:0.5, yoyo:true, repeat:-1, overwrite:"none", x:0.9, y:0.9, ease:Sine.easeInOut});
	
}
const createInventiryItem = (tex) =>{
	appMc.mcIntent["mcItem"+matchScore] = new createSprite({p:appMc.mcIntent, tex:tex, x:-200+matchScore*57, scale:0.13});
	gsap.from(appMc.mcIntent["mcItem"+matchScore].scale, 0.5,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	items.push(appMc.mcIntent["mcItem"+matchScore]);
	matchScore++;
	gsap.to(appMc.mcCormes.scale, 0.2, {delay:0.0, overwrite:"none", x:0, y:0, ease:Sine.easeIn});

	if(gameScore == 8){
		EndGame();
	}
}

const createWinItem = (tex) => {
	appMc.mcWin["mcItem"+matchScore] = new createSprite({p:appMc.mcWin, tex:tex, x:-200+matchScore*57, scale:0.13, visible:true});
	gsap.from(appMc.mcWin["mcItem"+matchScore].scale, 0.5,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	items.push(appMc.mcWin["mcItem"+matchScore]);	
	// winItem.push(tex);
	matchScore++;	
}

const checkItem = () =>{
	gameScore++;
	if(firstItem.name == secondItem.name){	
		appMc.mcCormes.visible = true;
		appMc.mcCormes.alpha = 1;
		appMc.mcCormes.scale.set(1);
 		firstItem.mcSprite.alpha = 1;
		secondItem.mcSprite.alpha = 1;	
       	firstItem.mcGreen.alpha = 1;
       	secondItem.mcGreen.alpha = 1;

		gsap.from(firstItem.mcGreen.scale, 0.5,{delay:0.0, overwrite:"none", x:0,y:0, ease:Back.easeOut});
		gsap.from(secondItem.mcGreen.scale, 0.5,{delay:0.0, overwrite:"none", x:0,y:0, ease:Back.easeOut});
		gsap.from(firstItem.mcSprite, 0.5,{delay:0.5, overwrite:"none", alpha:0,ease:"none"});
		gsap.from(secondItem.mcSprite, 0.5,{delay:0.5, overwrite:"none", alpha:0,ease:"none"});	
     	
     	gsap.to(appMc.mcFlyAvatarFirst.scale, 0.5,{delay:0.5, overwrite:"none", x:0.51, y:0.51, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarFirst, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Sine.easeInOut});

     	gsap.to(appMc.mcFlyAvatarSecond.scale, 0.5,{delay:0.5, overwrite:"none", x:0.51, y:0.51, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarSecond, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Sine.easeInOut});

     	gsap.set(appMc.mcFlyAvatarFirst, {delay:1.0, overwrite:"none", visible:false});

     	gsap.to(appMc.mcFlyAvatarSecond.scale, 0.5,{delay:1.5, overwrite:"none", x:0.0, y:0.0, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarSecond, 0.5,{delay:1.5, overwrite:"none", x:appMc.mcIntent.x+matchScore*57-200, y:appMc.mcIntent.y, ease:Sine.easeInOut});
       
	    
     	gameItems.forEach((c,i)=>{
     		if(c.status){
     			c.hit.interactive = true;
     		}			
     	});

     	gsap.to(appMc, 0.5,{delay:0.5, overwrite:"none", blurStrenght:15, ease:"none"});
		gsap.from(appMc.mcCormes.scale, 0.5, {delay:0.2, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.to(appMc, 0.5,{delay:1.5, overwrite:"none", blurStrenght:0.01, ease:"none"});

      	winItem.push(firstItem.name);
		// do something
		setTimeout(()=>{
			createInventiryItem(firstItem.name);
			firstItem = null;
			secondItem = null;
			appMc.mcBgOverlay.interactive = false;
			// EndGame ();	
		},2000);		
	}
	
	else{

	//	RebootObject(firstItem.mcCell);		
		RebootObject(secondItem.mcCell);
		appMc.mcCormese.visible = true;
		appMc.mcCormese.alpha = 1;
		appMc.mcSkins.interactive = false;
		// appMc.mcSkins.interactive = false;

		let validItem;

		for(let i = 0;i< gameItems.length; i++){
			let objTemp = gameItems[i];
			if(objTemp.status && firstItem.name == objTemp.name){
				validItem = objTemp;
			}			
		}

		firstItem.mcSprite.alpha = 1;
		validItem.mcSprite.alpha = 1;
		firstItem.mcGreen.alpha = 1;
		validItem.mcGreen.alpha = 1;

		appMc.mcCormese.visible = true;		
		appMc.mcCormese.scale.set(1);
		appMc.mcCormese.alpha = 1;	

		gsap.from(appMc.mcCormese.scale, 0.5, {delay:0.2, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.to(appMc.mcCormese.scale, 0.5, {delay:1.2, overwrite:"none", x:0, y:0, ease:Sine.easeIn});

		appMc.mcFlyAvatarFirst.visible = false;

		gsap.from(firstItem.mcGreen.scale, 0.5,{delay:0.0, overwrite:"none", x:0,y:0, ease:Back.easeOut});
	
		gsap.from(validItem.mcGreen.scale, 0.5,{delay:0.5, overwrite:"none", x:0,y:0, ease:Back.easeOut});		
		gsap.from(validItem.mcSprite, 0.5,{delay:0.5, overwrite:"none", alpha:0, ease:"none"});
		gsap.to(validItem.mcCell.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Sine.easeIn});	
	    		
		gsap.from(secondItem.mcCell.scale, 0.2,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});

		gsap.to(appMc.mcFlyAvatarSecond.scale, 0.2,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeIn});
		
		firstItem.status = false;
		validItem.status = false;
		secondItem.status = true;
		firstItem = null;
		secondItem = null;

		gsap.set(appMc.mcBgOverlay, {delay:2.0, overwrite:"none", interactive:false});
		


		gameItems.forEach((c,i)=>{
			if(c.status){
				c.hit.interactive = true;
			}
		});
		gsap.to(appMc, 0.5,{delay:0.7, overwrite:"none", blurStrenght:15, ease:"none"});	
		gsap.to(appMc, 0.5,{delay:1.7, overwrite:"none", blurStrenght:0.01, ease:"none"});		
	}

}
const StageDown = (e) =>{			
	if(stateGame == 0){
		stateGame = 1;	
		if(!isGlobalActive){
			isGlobalActive = true;
			isGlobalSound = true;
			Howler.mute(!isGlobalSound);	
		}	
	}
	mouse.isDown = true;				
}
const StageMove = (e) =>{
	if(mouse.isDown){				
		mouse.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;	
		mouse.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;					
	}								
}



const StageUp = (e) =>{
	mouse.isDown = false;				
}


const BtnGlobalSound =(e) =>{
	if(isGlobalSound){
		isGlobalSound = false;
		
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];
		
		Howler.mute(true);
		
	}else{
		isGlobalSound = true;
	
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];
		
		Howler.mute(false);
	}			
}