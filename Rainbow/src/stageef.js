const StageEF = () => {				

	appObj.time_current = performance.now();				
	if(appObj.time_current - appObj.time_old > 25){
		appObj.time_old = appObj.time_current;
		// 33 - 30 fps
		// 16 - 60 fps
		
		let i,j,k;
		let objTemp;
		let objTempExtra;	
		
		//later A					
		if(appMc.mcAvatarMain.visible){
			objTemp = appMc.mcAvatarMain;
			objTemp.a0 +=5;
			if(objTemp.a0 >=360)objTemp.a0 = -360;
			objTemp.scale.x = 0.6+0.015*Math.cos(objTemp.a0*toRAD);
			objTemp.scale.y = 0.48/objTemp.scale.x;
		}
		

	//- Camera

		if(appMc.mcWorldShake.shakeD != 0){
			appMc.mcWorldShake.shakeAX += 70;
			appMc.mcWorldShake.shakeAY += 90;
			if(appMc.mcWorldShake.shakeAX >= 360){ appMc.mcWorldShake.shakeAX -= 360; }
			if(appMc.mcWorldShake.shakeAY >= 360){ appMc.mcWorldShake.shakeAY -= 360; }						
			appMc.mcWorldShake.x = appMc.mcWorldShake.shakeD*Math.cos(appMc.mcWorldShake.shakeAX*toRAD);
			appMc.mcWorldShake.y = appMc.mcWorldShake.shakeD*Math.cos(appMc.mcWorldShake.shakeAY*toRAD);						
			appMc.mcWorldShake.shakeD *= 0.85;
			if(appMc.mcWorldShake.shakeD < 0.5){
				appMc.mcWorldShake.shakeD = 0;
				appMc.mcWorldShake.x = 0;
				appMc.mcWorldShake.y = 0;
			}			
		}

		tmDebug++
		if(tmDebug==100){					
			tmDebug = 0;						
		}					
					
		//- PIXI RENDER
		
		renderer.render(stage);
		
		//- RESIZE
		
		objTemp = appObj;					
		objTemp.tm_resize++;
		if(objTemp.tm_resize == 10){
			objTemp.tm_resize = 0;
			
			if(objTemp.mainWidth != Math.ceil(window.innerWidth) || objTemp.mainHeight != Math.ceil(window.innerHeight)){
				AppResize();							
			}
		}
	}

	
}