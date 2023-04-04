const InitBasicObj = () =>{

//- mcMain

appMc.mcMain = new createContainer({p:stage, visible:false});					
	appMc.mcGame = new createContainer({p:appMc.mcMain});					
	
		 
		appMc.mcWorldShake = new createContainer({p:appMc.mcGame});						
		appMc.mcWorldShake.shakeAX = 0;
		appMc.mcWorldShake.shakeAY = 0;
		appMc.mcWorldShake.shakeD = 0;

		//Back
			appMc.mcWorldCamera = new createContainer({p:appMc.mcWorldShake});	
				appMc.mcBg = new createSprite({p:appMc.mcWorldCamera,tex:"bg"});

		//Later A
			appMc.mcLaterA = new createContainer({p:appMc.mcWorldShake, scale:0.8});				
				appMc.mcLaterShadow = new createCircle({
					p:appMc.mcLaterA,
					x:0,
					y:0, 					
					color:0x000000, 
					alpha:1.0,
					fill:0.3,
					radius:250
				});
				appMc.mcLaterShadow.scale.y = 0.25;	
				appMc.mcLaterShadow.y = 280;
				appMc.mcLaterShadow.blurFilter = new PIXI.filters.BlurFilter();
				appMc.mcLaterShadow.blurFilter.blur = 15;
				appMc.mcLaterShadow.blurFilter.quality = 3;
				appMc.mcLaterShadow.filters = [appMc.mcLaterShadow.blurFilter];	

				appMc.mcLaterANormal = new createSprite({p:appMc.mcLaterA,tex:"later_normal", y:230, anchor:[0.5,0.9]});
				appMc.mcLaterAKick = new createSprite({p:appMc.mcLaterA,tex:"later_2", y:230, anchor:[0.5,0.9], alpha:0});	
				appMc.mcLaterADie = new createSprite({p:appMc.mcLaterA,tex:"later_3", y:230, anchor:[0.5,0.9], alpha:0});	

				appMc.mcLaterANormal.a0 = RandomInteger(0,360);
				appMc.mcLaterANormal.a1 = RandomInteger(0,360);	

			appMc.mcBloodC = new createContainer({p:appMc.mcWorldShake, scale:1.0});
			
		//UI	

			appMc.mcUI = new createContainer({p:appMc.mcMain});	

			//Gradient						
			appMc.mcGradient = new createGradient({p:appMc.mcUI, points:[0,1], colors:["rgba(0, 0, 0, 0.5)", "transparent"], w:1280, h:200});	
			


			//Later name
			let n = 0;
			appMc.mcLaterName = new createContainer({p:appMc.mcUI});	
				latterData.forEach((c,i)=>{
					if(i == 6)n += 20;
					appMc["mcChar_"+c] = new createSprite({p:appMc.mcLaterName,tex:c, x:-70+n, scale:1.0});
					appMc["mcChar_"+c].a0 = 0 + i*50;
					appMc["mcChar_"+c].speed = 15;
					latter.push(appMc["mcChar_"+c]);
					n += 20;
				});
			
			//Logo
			appMc.mcBar = new createContainer({p:appMc.mcUI});	
				appMc.mcBarBG = new createSprite({p:appMc.mcBar,tex:"bar_bg", scale:1.0});
				appMc.mcBarFill = new createSprite({p:appMc.mcBar,tex:"bar_fill", x:0, y:0, scale:1.0});
				appMc.mcBarFillMask = new createRect({
					p:appMc.mcBar,
					x:-502*0.5,
					y:-50*0.5, 
					width:502,
					height:50,
					color:0x0000ff, 
					alpha:0.6,
					fill:1,
					radius:0
				});
				appMc.mcBarFill.mask = appMc.mcBarFillMask;
				
				
			//Kill Btn
			appMc.mcKillBtn = new createContainer({p:appMc.mcUI});	
			appMc.mcKillBtnBG = new createSprite({p:appMc.mcKillBtn,tex:"kill_btn", scale:1.0});	
			appMc.mcKillBtnText = new createSprite({p:appMc.mcKillBtn,tex:"kill_text", scale:1.0});

			//Try Btn
			appMc.mcTryBtn = new createContainer({p:appMc.mcUI, visible:false});	
			appMc.mcTryBtnBG = new createSprite({p:appMc.mcTryBtn,tex:"try_btn", scale:1.0});	
			appMc.mcTryBtnText = new createSprite({p:appMc.mcTryBtn,tex:"try_text", scale:1.0});	


												
			//- mcBgOverlay						
				appMc.mcBgOverlay = new createRect({
					p:appMc.mcUI,
					x:-1280*0.5,
					y:-1280*0.5, 
					width:1280,
					height:1280,
					color:0x000000, 
					alpha:0.0,
					fill:1,
					radius:0
				});	
			
			
			//- mcBgFS					
			appMc.mcBgFS = new createRect({
				p:appMc.mcUI,
				x:-1280*0.5,
				y:-1280*0.5, 
				width:1280,
				height:1280,
				color:0x121214, 
				alpha:0,
				visible:false
			});	

	appMc.mcBgOverlay.interactive = true;		
	appMc.mcBgOverlay.on('pointerdown', StageDown);	
	appMc.mcBgOverlay.on('pointermove', StageMove);
	appMc.mcBgOverlay.on('pointerup', StageUp);			
	appMc.mcBgFS.interactive = true;	
	appMc.mcBgFS.on('pointerup', ClickAd);

	//- mcBtnSound			
	appMc.mcBtnSound  = new createContainer({p:appMc.mcUI});			
	appMc.mcBtnSoundB = new createSprite({p:appMc.mcBtnSound,tex:"btn_sound_off"});

	appMc.mcBtnSound.interactive = true;				
	appMc.mcBtnSound.on('pointerup', BtnGlobalSound);


}

