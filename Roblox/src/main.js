//-

const AppCanvas = document.createElement("canvas");
let renderer;
let stage;
			
let i,j,k,n;

let appObj={   
	time_old		: 0,
	time_current	: 0,
	tm_resize		: 0,
	mainWidth		: 0,
	mainHeight		: 0	
}
let tmDebug = 0;

//-

let appMc={};

let lvlScore = 0;

const lvlButtons =[
	{lvl:1, btns:["hair1","hair2","hair3"], label:"hair_text"},
	{lvl:2, btns:["shirt1", "shirt2", "shirt4"], label:"shirt_text"},
	{lvl:3, btns:["pants1", "pants2", "pants3"], label:"pants_text"},
	{lvl:4, btns:["shoes1", "shoes2", "shoes3"], label:"shoes_text"},
];		

			
let gameScore = 0;								
let toRAD=Math.PI/180;								
let stateGame = 0;
let mouse = {x:0, y:0};
let itemDrag = false;
let scratch = false;
let drawItem = 0;
let itemScratch = null;
let scratchSize = 40;

let physics = true;

	
//---------------------------------------------------------------------------------
			
window.onload = () =>{					
	try{
		if (mraid.getState() === 'loading') {
			mraid.addEventListener('ready', mraidIsReady);
		}else{
			LoadTextures();
		}
	}catch(e){
		LoadTextures();
	}	
}
const Orientation =(e) => {				
	AppResize();
		
	renderer.render(stage);
}
const mraidIsReady = () => {
	try{
		mraid.addEventListener("orientationchange", Orientation); 
		if (mraid.isViewable()){
		}else{
			mraid.addEventListener("viewableChange", mraidIsViewable); 
		}
	}catch(e){}	
	
	mraid.removeEventListener("ready", mraidIsReady); 
	LoadTextures();
}			
const mraidIsViewable = (viewable) =>{
	if (viewable) {
		mraid.removeEventListener('viewableChange', mraidIsViewable);
	}else{
	
	}
}

//---------------------------------------------------------------------------------

const LoadTextures =()=>{
	try{
		var mraidGetMaxSize = mraid.getMaxSize();
	}catch(e){}
	
	moduleTexture.load(CompleteLoadAllMaterials);
}
			
const CompleteLoadAllMaterials =()=>{
	//- InitPixi
	
	InitPixi();

	//- InitBasicObj
	
	InitBasicObj();
	
	//- Resize
	
	AppResize();
	
	window.addEventListener('resize', AppResize);
	
	//- Animation
	InitAnimation();
	
	//- EF
	StageEF();
	
}