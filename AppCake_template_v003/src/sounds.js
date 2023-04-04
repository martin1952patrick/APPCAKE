//- Sound
			
const aLoadSounds = [
	{name:"bg", 	/*sprite:{main:[200, 9500]},*/ loop:true, volume:0.3, path:""},
];
let appSounds = {};

for(i=0; i<aLoadSounds.length; i++){
	if(aLoadSounds[i].sprite){
		appSounds[aLoadSounds[i].name] = new Howl({src: [aLoadSounds[i].path], sprite:aLoadSounds[i].sprite, volume:aLoadSounds[i].volume, loop:aLoadSounds[i].loop});
	}else{
		appSounds[aLoadSounds[i].name] = new Howl({src: [aLoadSounds[i].path], volume:aLoadSounds[i].volume, loop:aLoadSounds[i].loop});
	}
}

let isGlobalActive = false;			
let isGlobalSound = false;
Howler.mute(true);
