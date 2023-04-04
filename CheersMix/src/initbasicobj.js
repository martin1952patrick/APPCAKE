const InitBasicObj = () =>{

//- mcMain

appMc.mcMain = new createContainer({p:stage, visible:false});					
	appMc.mcGame = new createContainer({p:appMc.mcMain});					
	
	appMc.mcGame.twistFilter = new PIXI.filters.TwistFilter({
		angle:4,
		offset:{x:640,y:640},						
		radius:800,
		padding:20
		});
		 
		appMc.mcWorldShake = new createContainer({p:appMc.mcGame});						
		appMc.mcWorldShake.shakeAX = 0;
		appMc.mcWorldShake.shakeAY = 0;
		appMc.mcWorldShake.shakeD = 0;
		
		//Back
			appMc.mcWorldCamera = new createContainer({p:appMc.mcWorldShake});	
				appMc.mcBg = new createSprite({p:appMc.mcWorldCamera,tex:"bg"});
				
								
		//UI							
			appMc.mcUI = new createContainer({p:appMc.mcMain});	
			
			//Logo
			appMc.mcLogo = new createSprite({p:appMc.mcUI,tex:"logo", scale:0.4});

			//Loading Cows
			appMc.mcCow0 = new createSprite({p:appMc.mcUI,tex:"cow0",y:00, x:00, scale:0.4});
			appMc.mcCow1 = new createSprite({p:appMc.mcUI,tex:"cow1",y:100, x:500, scale:0.4});
			appMc.mcCow2 = new createSprite({p:appMc.mcUI,tex:"cow2",y:250, x:400, scale:0.4});
			// appMc.mcCow3 = new createSprite({p:appMc.mcUI,tex:"cow3", y:50, x:-350, scale:1});

			// appMc.mcGrind = new createSprite({p:appMc.mcUI,tex:"cow", y:50, x:-350, scale:0.6})
			
			appMc.Farm =  new createSprite({p:appMc.mcUI, tex:"crusher", y:-180, x:130, scale:1});
			appMc.Home = new createSprite({p:appMc.mcUI, tex:"wfield", y:50, x:-300, scale:0.6});
			appMc.Machine =  new createSprite({p:appMc.mcUI, tex:"wfarm", y:40, x:-300, scale:0.5});
			// appMc.Fam =  new createSprite({p:appMc.mcUI, tex:"fam", y:-140, x:-300, scale:5});


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
	appMc.mcBtnSoundB = new createSprite({p:appMc.mcBtnSound,tex:"btn_sound_on"});

appMc.mcBtnSound.interactive = true;				
appMc.mcBtnSound.on('pointerup', BtnGlobalSound);
}