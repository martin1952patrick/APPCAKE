const InitAnimation = () =>{
	let i, objTemp;			
	appMc.mcMain.visible=true;			
	document.getElementById('main').style.visibility = "visible";
	document.getElementById('progress').style.display = "none";	
	appSounds["bg"].play();
	stateGame = 0;	

   gsap.from(appMc.mcKillBtnBG.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});
   gsap.from(appMc.mcKillBtnText.scale, 0.5,{delay:0.7, overwrite:"none", x:0, y:0, ease:Back.easeOut});	
			
}