

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
				appMc.mcBg.width = 1280;
				appMc.mcBg.height = 1280;
				appMc.mcBg.filters = [appMc.blurFilter];
				
								
		       //UI							
			   appMc.mcUI = new createContainer({p:appMc.mcMain});	
			
			   //Logo
				appMc.mcLogo = new createSprite({p:appMc.mcUI,tex:"", scale:0.2});

                 //Rem
				 appMc.mcRem = new createSprite({p:appMc.mcUI, tex:"rem",scale:1.3});

		
				 //Find Same Skin
				 appMc.mcSame = new createSprite({p:appMc.mcUI, tex:"same",scale:1.0,alpha:1});
       
				        

				//Main game field
				appMc.mcGameField = new createContainer({p:appMc.mcUI});	
				appMc.mcGameField.filters = [appMc.blurFilter];
				//SKINS
				appMc.mcSkins = new createContainer({p:appMc.mcGameField, x:-250, y:-500});	

				let _y = 0;
				let _x = 0;


				//INVETORY
			  
			    appMc.mcIntent = new createContainer({p:appMc.mcUI}); 
				appMc.mcIntent.filters = [appMc.blurFilter];
			
			    appMc.mcIntentBg = new createSprite({p:appMc.mcIntent,tex:"intent", scale:1.5, alpha:1});
				// appMc.mcGreen = new createSprite({p:appMc.mcUI, tex:"greenb", scale:1.8, visible:false});



				MixArray(LVL_DATA);
				LVL_DATA.forEach((c,i)=>{	
					if(i%4 == 0){
						_y++;
						_x =0;
					}
                   
					appMc['mcSkin_'+i] = new createContainer({p:appMc.mcSkins, x:170*_x, y:200*_y, scale:0.20});

					//Brown Background
					appMc['mcSkin_'+i].mcBrownb = new createSprite({p:appMc['mcSkin_'+i], tex:"brownb",y:150, scale:7, alpha:0});
					
	

					//Green Background
					appMc['mcSkin_'+i].mcGreen = new createSprite({p:appMc['mcSkin_'+i], tex:"greenb",y:200, scale:10, alpha:0});
					
	
					// CLOSED CELLS
					appMc['mcSkin_'+i].mcCell = new createSprite({p:appMc['mcSkin_'+i],tex:"closedcell", scale:10, alpha:1});

					//Time Out
					setTimeout(()=>{
						appMc['mcSkin_'+i].mcCell.visible = true;
					},2500);
					
					appMc['mcSkin_'+i].hit = new createCircle({p:appMc['mcSkin_'+i],x:0,y:200,color:0xff0000,	radius:350, alpha:0.0});	
					appMc['mcSkin_'+i].hit.interactive = false;
					appMc['mcSkin_'+i].hit.on('pointerup',btnClick);

					appMc['mcSkin_'+i].mcSprite = new createSprite({p:appMc['mcSkin_'+i],tex:c.tex, y:+150, scale:0.9, alpha:0});
					appMc['mcSkin_'+i].name = c.tex;
					appMc['mcSkin_'+i].status = c.status;
		
					_x++;  

					gameItems.push(appMc['mcSkin_'+i]);
					
				});

			 //Showing Hand 
			 appMc.mcBtnsHand = new createSprite({p:appMc.mcSkins,tex:"hand", alpha:0});

			 //Match Correct
			appMc.mcCormes = new createContainer({p:appMc.mcUI,x:0, y:0,visible:false});
			appMc.mcCorwt = new createSprite({p:appMc.mcCormes, tex:"corwt",scale:0.8,x:0, y:0});
			appMc.mcCorw = new createSprite({p:appMc.mcCormes, tex:"match",scale:0.8,x:0, y:0});
				// appMc.mcWrong = new createSprite({p:appMc.mcCormes, tex:"wrong",scale:1.0,x:0, y:0});

	        				
             //Load Avatar
			 appMc.mcAvatarContainer = new createContainer({p:appMc.mcUI, visible:true});
						
			 appMc.mcFlyAvatarFirst = new createSprite({p:appMc.mcUI, tex:"", visible: true});
			 appMc.mcFlyAvatarSecond = new createSprite({p:appMc.mcUI, tex:"", visible: true});

			 //Match Wrong
			appMc.mcCormese = new createContainer({p:appMc.mcUI,x:0, y:0,visible:false});
			appMc.mcCorwt = new createSprite({p:appMc.mcCormese, tex:"corwt",scale:0.8,x:0, y:0});
			appMc.mcCorw = new createSprite({p:appMc.mcCormese, tex:"wrong",scale:0.8,x:0, y:0});
			
			
			 appMc.mcVFX = new createContainer({p:appMc.mcUI, visible:true}); 
			 
			 //Load Title
			 appMc.mcRSC = new createContainer({p:appMc.mcUI, visible:true});

			 //WIN

			 appMc.mcWin = new createContainer({p:appMc.mcUI, visible:false}); 
			 appMc.mcWineV = new createSprite({p:appMc.mcWin, tex:"win_v", scale:1});
			 appMc.mcWineG = new createSprite({p:appMc.mcWin, tex:"win_g", scale:1});
			 appMc.mcWinItems = new createContainer({p:appMc.mcWin}); 
			 appMc.mcGetBtn = new createSprite({p:appMc.mcWin, tex:"get_btn", scale:1});

			
				
			    //Celebration

			appMc.mcCele = new createSprite({p:appMc.mcUI, tex:"celebrate", scale:2, visible:false});

			appMc.mcChear = new createSprite({p:appMc.mcUI, tex:"chear", visible:false});

			//Final Card
			appMc.mcCard = new createSprite({p:appMc.mcUI, tex:"card",scale:1.0,visible:false});
            
			
      //Blur filter
      appMc.mcBg.blurFilter = new PIXI.filters.BlurFilter();
      appMc.mcBg.blurFilter.blur = 15
      appMc.mcBg.blurFilter.quality= 2

			appMc.mcGameField.blurFilter = new PIXI.filters.BlurFilter();
			appMc.mcGameField.blurFilter.blur = 15
			appMc.mcGameField.blurFilter.quality = 2

			appMc.mcCele.blurFilter = new PIXI.filters.BlurFilter();
			appMc.mcCele.blurFilter.blur = 6
			appMc.mcCele.blurFilter.quality= 2


                // appMc.mcBgFS
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