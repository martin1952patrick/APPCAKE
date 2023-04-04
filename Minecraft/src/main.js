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
			
let gameScore = 0;	
let matchScore = 0;							
let toRAD=Math.PI/180;								
let stateGame = 0;
let mouse = {x:0, y:0};
let itemDrag = false;
let scratch = false;
let drawItem = 0;
let itemScratch = null;
physics = false;

appMc.blurStrenght = 0.01;
appMc.blurFilter = new PIXI.filters.BlurFilter();
appMc.blurFilter.blur = appMc.blurStrenght;
appMc.blurFilter.quality = 3;


let items = [];
let gameItems = [];
let tutorial = true;
let tutorialItem = appMc['mcSkin_'+0];


	
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

let skinData = [];
let firstItem = null;
let secondItem = null;
let winItem = [];

const LVL_DATA = [
	{tex:"skin0", status:true},
	{tex:"skin0", status:true},
	{tex:"skin1", status:true},
	{tex:"skin1", status:true},
	{tex:"skin2", status:true},
	{tex:"skin2", status:true},
	{tex:"skin3", status:true},
	{tex:"skin3", status:true},
	{tex:"skin4", status:true},
	{tex:"skin4", status:true},
	{tex:"skin5", status:true},
	{tex:"skin5", status:true},
	{tex:"skin6", status:true},
	{tex:"skin6", status:true},
	{tex:"skin7", status:true},
	{tex:"skin7", status:true},
];
