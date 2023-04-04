const InitBasicObj = () =>{
	//mcMain

	appMc.mcMain = new createContainer({p:stage, visible:false});
	appMc.mcGame = new createContainer({p:appMc.mcMain});
	appMc.mcTest = new createContainer({p:appMc.mcMain});
	appMc.mcPlot = new createContainer({p:appMc.mcMain});

	appMc.mcWorldShake = new createContainer({P:appMc.mcGame});
	appMc.mcWorldShake.shakeAX = 0;
	appMc.mcWorldShake.shakeAY = 0;
	appMc.mcWorldShake.shakeD = 0;


	//Back
	appMc.mcWorldCamera = new createContainer({p:appMc.mcWorldShake});
	appMc.mcBg = new createSprite({p:appMc.mcWorldCamera, tex: "bg"});
	appMc.mcBg.width = 1280;
	appMc.mcBg.height = 1280;

	//Gradient
	appMc.mcGradient = new createGradient({p:appMc.mcWorldCamera, points:[0,1], colors:["transparent", "rgba(0, 0, 0, 0.5)"], w:1280, h:1280});

	//UI
	//UI stuff goess here
    appMc.mcUI = new createContainer({p:appMc.mcMain, visible:true});

	appMc.mcNewUI = new createContainer({p:appMc.mcUI, visible:true});

	// load Home Avatar
	appMc.mcAvatarContainer = new createContainer({p:appMc.mcUI, visible:true});
	appMc.mcAvatarBG = new createSprite({p:appMc.mcAvatarContainer, tex:"avatar", anchor:[0.5,0.5], scale:1});

	//We load the texture to be implemented
	appMc["mcDefault+"+4] = new createSprite({p:appMc.mcUI, tex: "box", anchor:[0.5,0.5], y:140, x:100});
	appMc["box0"] = new createSprite({p:appMc.mcAvatarContainer, tex:"box0", visible:false, anchor:[0.5,0.5], y:70, x:-30});
	
	appMc["box1"] = new createSprite({p:appMc.mcAvatarContainer, tex:"box1", visible:false,y:70,x:-30, anchor:[0.5,0.5 ]});
	
	appMc["box2"] = new createSprite({p:appMc.mcAvatarContainer, tex:"box2", visible:false, anchor:[0.5,0.5],visible:false, visible:false, y:70,x:-30});

	appMc["box3"] = new createSprite({p:appMc.mcAvatarContainer, tex:"box3", visible:false, anchor:[0.5,0.5], y:70,x:-30});

	appMc["box4"] = new createSprite  ({p:appMc.mcAvatarContainer, tex:"box4",visible:false, anchor:[0.5, 0.5], y:70, x: -30});


   //Loading home
	appMc["mcDefault+"+5] = new createSprite({p:appMc.mcUI, tex: "home", anchor:[0.5, 0.5], y:-50, x:20 });
	appMc["home0"] = new createSprite({p:appMc.mcAvatarContainer, tex:"home0", anchor:[0.5,0.5], visible:false, y:60, x:-28});

	appMc["home1"] = new createSprite({p:appMc.mcAvatarContainer,tex: "home1", anchor:[0.5, 0.5], visible:false, y:60, x:-28});

	appMc["home2"] = new createSprite({p:appMc.mcAvatarContainer, tex:"home2", anchor:[0.5,0.5],  visible:false, y:60, x:-28});

	appMc["home3"] = new createSprite({p:appMc.mcAvatarContainer, tex:"home3", anchor:[0.5,0.5], visible:false, y:60, x:-28});
	
	appMc["home4"] = new createSprite({p:appMc.AvatarContainer, tex:"home4", anchor:[0.5,0.5], visible:false, y:60, x:-28});

	//Load Shoes

	appMc["mcDefault+"+6] = new createSprite({p:appMc.AvatarContainer, tex:"shoes", anchor:[0.5,0.5], visible:false, y:60, x:-28});

	appMc["shoes0"] = new createSprite({p:appMc.AvatarContainer, tex:"shoes0", anchor:[0.5,0.5], visible:false, y:60, x:-28});

	appMc["shoes1"] = new createSprite({p:appMc.AvatarContainer, tex:"shoes1", anchor:[0.5,0.5], visible:false, y:60, x:-28});

	appMc["shoes2"] = new createSprite({p:appMc.AvatarContainer, tex:"shoes2", anchor:[0.5,0.5], visible:false, y:60, x:-28});
    
	appMc["shoes3"] = new createSprite({p:appMc.AvatarContainer, tex:"shoes3",visible:false, anchor:[0.5, 0.5], y:60, x:-28});

	appMc["shoes4"] = new createSprite({p:appMc.AvatarContainer,});

	//Adding hair saloon
    
    appMc["mcDefault+"+7] = new createSprite({p:appMc.mcUI,tex:"saloon", visible:false, anchor:[0.5, 0.5], y:40,x:-60});

	appMc["saloon0"] = new createSprite({p:appMc.AvatarContainer,tex})

}