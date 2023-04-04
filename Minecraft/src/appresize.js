//- Resize	

const AppResize = (e) =>{
	appObj.mainWidth		= Math.ceil(window.innerWidth);
	appObj.mainHeight		= Math.ceil(window.innerHeight); 
	appObj.canvasWidth		= Math.ceil(1.4*window.innerWidth);
	appObj.canvasHeight		= Math.ceil(1.4*window.innerHeight); 
	
	renderer.view.style.width	= appObj.mainWidth+"px";
	renderer.view.style.height	= appObj.mainHeight+"px";							
	renderer.view.width			= appObj.canvasWidth;
	renderer.view.height		= appObj.canvasHeight;
	
	renderer.resize(appObj.canvasWidth, appObj.canvasHeight);
	
	stage.position.set(Math.ceil(appObj.canvasWidth*0.5), Math.ceil(appObj.canvasHeight*0.5));
					
			
	//- POSITION OBJ
	
	appMc.mcGame.scale.set(1, 1);	
	appMc.mcUI.scale.set(1, 1);	
	
	if(appObj.mainWidth<appObj.mainHeight){	
		appMc.mcGame.scale.x = appObj.canvasWidth/1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if(appMc.mcGame.scale.y*1280 < appObj.canvasHeight){
			appMc.mcGame.scale.y = appObj.canvasHeight/1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}
		
		appMc.mcUI.scale.x = appObj.canvasWidth/720;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if(appMc.mcUI.scale.y*1280 > appObj.canvasHeight){
			appMc.mcUI.scale.y = appObj.canvasHeight/1280;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}
		
							
		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBgOverlay.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);
		
		appMc.mcLogo.x = 130-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcLogo.y = 130-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;

		appMc.mcGameField.x = 0;
		appMc.mcGameField.y = -100;
		appMc.mcGameField.scale.set(1);

		appMc.mcIntent.y = -150+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcIntent.x = 0;

		appMc.mcWin.y = 0;
		appMc.mcWin.x = 0;
		appMc.mcWineV.visible = true;
		appMc.mcWineG.visible = false;
		appMc.mcGetBtn.y = 250;
		appMc.mcWinItems.y = -200;
		appMc.mcWinItems.x = -150;
		appMc.mcWinItems.scale.set(1.5);

		appMc.mcRem.y = -500;
		appMc.mcRem.x = 0;
        appMc.mcSame.y = -500;
		appMc.mcSame.x = 0; 
		appMc.mcCard.y = -500;
		appMc.mcCard.x = 0;

		appMc.mcChear.scale.set(1.5);

		let _y = 0;
		let _x = 0;
		appMc.mcSkins.x = -250;
		gameItems.forEach((c,i)=>{
			if(i%4 == 0){
				_y++;
				_x =0;
			}
			c.x = 170*_x;
			c.y = 200*_y;
			_x++;			
		});


		appMc.mcWineV.visible = true;
		appMc.mcWineG.visible = false;
		
							
	}else{
		
		appMc.mcGame.scale.x = appObj.canvasWidth/1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if(appMc.mcGame.scale.y*1280 < appObj.canvasHeight){
			appMc.mcGame.scale.y = appObj.canvasHeight/1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}
		
		appMc.mcUI.scale.x = appObj.canvasWidth/1280;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;	
		if(appMc.mcUI.scale.y*720 > appObj.canvasHeight){
			appMc.mcUI.scale.y = appObj.canvasHeight/720;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}
												
		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBgOverlay.scale.x = 0.1 + appObj.canvasWidth/1280/appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y = 0.1 + appObj.canvasHeight/1280/appMc.mcUI.scale.x;
		
		appMc.mcBtnSound.x = -60+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -60+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		appMc.mcGameField.x = 0;
		appMc.mcGameField.y = 80;
		appMc.mcGameField.scale.set(0.87);
		
		appMc.mcIntent.y = -100+appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		appMc.mcIntent.x = 0;

		appMc.mcWin.y = 0;
		appMc.mcWin.x = 0;
		appMc.mcWineV.visible = false;
		appMc.mcWineG.visible = true;
		appMc.mcGetBtn.y = 150;
		appMc.mcWinItems.y = -150;
		appMc.mcWinItems.x = -100;
		appMc.mcWinItems.scale.set(1);

		appMc.mcRem.y = -280;
		appMc.mcRem.x = 0;
		appMc.mcSame.y = -280;
		appMc.mcSame.x = 0; 
		appMc.mcCard.y = -280;
		appMc.mcCard.x = 0;

		appMc.mcChear.scale.set(1.1);



		let _y = 0;
		let _x = 0;
		appMc.mcSkins.x = -600;
		gameItems.forEach((c,i)=>{
			if(i%8 == 0){
				_y++;
				_x =0;
			}
			c.x = 170*_x;
			c.y = 200*_y;
			_x++;			
		});
	}
}			
// Resize	