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
		
		appMc.mcLogo.x = 130-appObj.canvasWidth*0.5/appMc.mcUI.scale.y;
		appMc.mcLogo.y = 130-appObj.canvasHeight*0.5/appMc.mcUI.scale.y;
		
		
	}
}			
// Resize	