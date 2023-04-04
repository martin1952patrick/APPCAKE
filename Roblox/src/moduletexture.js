const moduleTexture = {
	texture:[
		//will contain the specific work textures/Images



	],

	baseTextures: {},
	threeTextures: {},
	pixiTextures: {},
	funComplete: null,
	load    :function(_funComplete){
		moduleTexture.funComplete = this.funComplete;
		moduleTexture.loadTexture();
	},

	idLoadTexture : 0,
	loadTexture   : function(){
    if(moduleTexture.idLoadTexture < moduleTexture.textures.length){
		moduleTexture.baseTextures[moduleTexture.textures[moduleTexture.idLoadTexture].name] = new Image();

		moduleTexture.baseTextures[moduleTexture.textures[moduleTexture.idLoadTexture].name].onload = moduleTexture.loadTextureComplete;
		moduleTexture.baseTextures[moduleTexture.textures[moduleTexture.idLoadTexture].name].onerror = moduleTexture.loadTextureError;
		moduleTexture.baseTextures[moduleTexture.textures[moduleTexture.idLoadTexture].name].src = moduleTexture.textures[moduleTexture.idLoadTexture].path;
	}else{
		moduleTexture.funComplete();
	}
	},
	loadTextureComplete  : function(){
		moduleTexture.pixiTexture[moduleTexture.textures[moduleTexture.idLoadTexture]] = PIXI.Texture.from(moduleTexture.textures[moduleTexture.idloadTexture].path);

		moduleTexture.idLoadTexture++;
		moduleTexture.loadTexture();
	},
	loadTextureError        : function(){
		setTimeout(moduleTexture.loadTexture, 200);

	}
}

const AppCanvas = document.createElement("canvas");
let renderer;
let stage;