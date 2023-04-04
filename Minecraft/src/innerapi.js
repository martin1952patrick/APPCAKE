class Confetti{constructor({name:a,p:b,count:c}){for(a=new PIXI.Container,b.addChild(a),i=0;i<c;i++){a["mcConfCont"+i]=new PIXI.Container,a.addChild(a["mcConfCont"+i]);var d="0x"+(16777215*Math.random()<<0).toString(16).padStart(6,"0"),e=300-600*Math.random(),f=30+20*Math.random(),g=10+10*Math.random();a["mcConfS"+i]=new PIXI.Graphics,a["mcConfS"+i].beginFill(d,1),a["mcConfS"+i].drawRect(.5*-f,.5*-g,f,g),a["mcConfS"+i].endFill(),a["mcConfS"+i].alpha=1,a["mcConfS"+i].rSpeed=.5-.4*Math.random(),a["mcConfS"+i].rotation=1*Math.random()*Math.PI,a["mcConfCont"+i].addChild(a["mcConfS"+i]),a["mcConfCont"+i].position.set(e,300-600*Math.random()),a["mcConfCont"+i].sX=-1*Math.random(),a["mcConfCont"+i].sY=1*Math.random(),a["mcConfCont"+i].dy=10-38*Math.random(),a["mcConfCont"+i].dx=20-40*Math.random(),a["mcConfCont"+i].minX=RandomInteger(0,1),a["mcConfCont"+i].minY=RandomInteger(0,1)}return a.update=()=>{for(let b,c=0;c<a.children.length;c++)b=a.children[c],700>b.y?(a["mcConfS"+c].rotation+=a["mcConfS"+c].rSpeed,b.dy+=.41,b.dx*=.96,b.scale.x=b.sX,b.scale.y=b.sY,b.y+=b.dy,b.x+=b.dx,0==b.minX?(b.sX-=.05,-1>=b.sX&&(b.minX=1)):(b.sX+=.05,1<=b.sX&&(b.minX=0)),0==b.minY?(b.sY-=.03,-1>=b.sY&&(b.minY=1)):(b.sY+=.03,1<=b.sY&&(b.minY=0))):a.removeChild(b);0>=a.children.length&&(a.ticker.destroy(),b.removeChild(a))},a.ticker=PIXI.Ticker.shared,a.ticker.maxFPS=30,a.ticker.add(()=>{a.update()}),a}}class itemSparkle{constructor({name:a,p:b,tex:c,count:d,t:e,dx:f=15,dy:g=15,s:h=.4}){let j=[];a={},null!=b.name&&b.removeChild(a);for(let k=0;k<d;k++)a["mcSparkl"+k]=new createSprite({p:b,x:0,y:0,tex:c,visible:!1}),a["mcSparkl"+k].dx=f-2*f*Math.random(),a["mcSparkl"+k].dy=g-2*g*Math.random(),a["mcSparkl"+k].ss=h+h*Math.random(),j.push(a["mcSparkl"+k]),setTimeout(()=>{a["mcSparkl"+k].visible=!0},e*k);return a.update=()=>{j.forEach(a=>{a.visible&&(a.scale.set(a.ss),a.ss*=.94,a.x+=a.dx,a.y+=a.dy,a.dx*=.94,a.dy*=.94,.01>=a.ss&&(a.visible=!1,j=j.filter(b=>b!=a),b.removeChild(a)))}),0>=j.length&&(a.ticker.destroy(),b.removeChild(a))},a.ticker=PIXI.Ticker.shared,a.ticker.maxFPS=30,a.ticker.add(()=>{a.update()}),a}}class createContainer{constructor({name:a,p:b,visible:c=!0,alpha:d=1,x:e=0,y:f=0,scale:g=1}){return a=new PIXI.Container,a.position.set(e,f),b.addChild(a),a.visible=c,a.alpha=d,a.scale.set(g),a}}class createSprite{constructor({name:a,p:b,tex:c,x:d=0,y:e=0,anchor:f=[.5,.5],scale:g=1,visible:h=!0,alpha:j=1,ph:k=!1,mass:l=0}){return a=new PIXI.Sprite,a.texture=moduleTexture.pixiTextures[c],a.position.set(d,e),a.anchor.set(f[0],f[1]),a.scale.set(g),a.visible=h,a.alpha=j,b.addChild(a),physics&&k&&(a.boxShape=new p2.Box({width:a.width,height:a.height}),a.boxBody=new p2.Body({mass:l,position:[d-a.width/2,e-a.height/2],angularVelocity:1}),a.boxBody.addShape(a.boxShape),appMc.p2world.addBody(a.boxBody),a.ticker=PIXI.Ticker.shared,a.ticker.maxFPS=30,a.ticker.add(()=>{a.update()})),a.update=()=>{physics&&k&&(a.x=a.boxBody.position[0],a.y=-a.boxBody.position[1],a.rotation=a.boxBody.angle)},a}}class createRect{constructor({name:a,p:b,visible:c=!0,alpha:d=1,x:e=0,y:f=0,width:g=0,height:h=0,color:j="0x000000",fill:k=1,radius:l=0,lineColor:m="0x000000",lineWeigth:n=0,ph:o=!1,isStatic:p=!0,restitution:q=.8}){return a=new PIXI.Graphics,a.beginFill(j,k),a.lineStyle(n,m,1),a.drawRoundedRect(e,f,g,h,l),a.endFill(),a.alpha=d,a.visible=c,b.addChild(a),physics&&o&&(a.phBody=Matter.Bodies.rectangle(e+.5*g,f,g,h,{isStatic:p,restitution:q}),Matter.Composite.add(appMc.Engine.world,[a.phBody])),a}}class createCircle{constructor({name:a,p:b,visible:c=!0,alpha:d=1,x:e=0,y:f=0,radius:g=5,color:h="0x000000",fill:j=1}){return a=new PIXI.Graphics,a.beginFill(h,j),a.drawCircle(0,0,g),a.position.set(e,f),a.endFill(),a.alpha=d,a.visible=c,b.addChild(a),a}}class createSequence{constructor({name:a,p:b,tex:c,data:d,prefix:e,frame:f=0,seq:g=0,totalFrame:h=0,x:j=0,y:k=0,scale:l=1,alpha:m=1,visible:n=!0,loop:o=!1,slow:p=0,reverse:q=!1,stopFrame:r=!1}){let s;return a=new createContainer({p:b}),a.position.set(j,k),s=d[0].frames[e+""+f+".png"].frame,appMc[c+"S"+g]=new createSprite({p:a,tex:c,x:-.5*s.w-s.x,y:-1*s.h-s.y,anchor:[0,0]}),appMc[c+"M"+g]=new createRect({p:a,x:-.5*s.w,y:-1*s.h,width:s.w,height:s.h}),appMc[c+"S"+g].mask=appMc[c+"M"+g],a.scale.set(l),a.visible=n,a.alpha=m,a.frame=0,a.playF=0,a.pF=!0,a.update=()=>{var b;a.visible&&(b=d[0].frames[e+""+a.frame+".png"].frame,appMc[c+"S"+g].x=-.5*b.w-b.x,appMc[c+"S"+g].y=-1*b.h-b.y,a.playF++,0==p?q?a.pF?a.frame++:a.frame--:a.frame++:0==a.playF%p&&(q?a.pF?a.frame++:a.frame--:a.frame++),q?(a.frame>=h&&a.pF&&(a.pF=!1),0>=a.frame&&!a.pF&&(a.pF=!0)):a.frame>=h&&(o?(a.frame=0,a.playF=0):r?(a.frame=h,a.playF=0):a.visible=!1))},a}}class createDigit{constructor({name:a,p:b,num:e=0,x:f=0,y:g=0,scale:h=1,tex:c,data:d,tint:j=!1,tintColor:k="0xffffff",spacing:l=0,align:m="left",separate:o="false",snum:p=0,pref:q="empty",prefX:r=0,prefY:s=0}){let t,n,u=["9","9","9","9","9","9","9","9","9","9"],v=c,w=0,x=0;a=new PIXI.Container;let y=d[0].frames[u[0]+".png"].frame.w,z=l*u.length-1+y*u.length;for(t=0;t<u.length;t++)appMc["DigG"+t]=new createContainer({p:a}),n=d[0].frames[u[t]+".png"].frame,appMc["DigS"+t]=new createSprite({p:appMc["DigG"+t],tex:v,x:-.5*n.w-n.x,y:-1*n.h-n.y,anchor:[0,0]}),j&&(appMc["DigS"+t].tint=k),appMc["DigM"+t]=new createRect({p:appMc["DigG"+t],x:-.5*n.w,y:-1*n.h,width:n.w,height:n.h}),appMc["DigS"+t].mask=appMc["DigM"+t],appMc["DigG"+t].position.set(l+x+n.w,0),x=l+x+n.w,w+=n.w+0;if(o&&(appMc.DigSeparate=new createContainer({p:a}),n=d[0].frames["dot.png"].frame,appMc.DigSeparateS=new createSprite({p:appMc.DigSeparate,tex:v,x:-.5*n.w-n.x,y:-1*n.h-n.y,anchor:[0,0]}),j&&(appMc.DigSeparateS.tint=k),appMc.DigSeparateM=new createRect({p:appMc.DigSeparate,x:-.5*n.w,y:-1*n.h,width:n.w,height:n.h}),appMc.DigSeparateS.mask=appMc.DigSeparateM,appMc.DigSeparate.x=l+x+n.w,x=l+x+n.w/1.5,z+=n.w/1.5),0<p){for(t=0;t<p;t++)appMc["DigGS"+t]=new createContainer({p:a}),n=d[0].frames[u[t]+".png"].frame,appMc["DigSS"+t]=new createSprite({p:appMc["DigGS"+t],tex:v,x:-.5*n.w-n.x,y:-1*n.h-n.y,anchor:[0,0]}),j&&(appMc["DigSS"+t].tint=k),appMc["DigSM"+t]=new createRect({p:appMc["DigGS"+t],x:-.5*n.w,y:-1*n.h,width:n.w,height:n.h}),appMc["DigSS"+t].mask=appMc["DigSM"+t],appMc["DigGS"+t].position.set(l+x+n.w,0),x=l+x+n.w,w+=n.w+0;z=z+l*p+y*p}return"empty"!==q&&(appMc.DigPref=new createContainer({p:a}),appMc.DigPref._x=r,appMc.DigPref._y=s,appMc.DigPrefS=new createSprite({p:appMc.DigPref,tex:q,anchor:[0,1]}),appMc.DigPref.x=l+x+appMc.DigPrefS.width,x=l+x+appMc.DigPrefS.width,z+=appMc.DigPrefS.width),"left"==m?a.position.set(f-l,g):"center"==m?a.position.set(f-l-z/2,g):a.position.set(f-l-z,g),a.scale.set(h),a.snum=p,b.addChild(a),a.update=b=>{let c=b.toFixed(a.snum).toString(),e=c.substr(c.length-a.snum);0<a.snum&&(c=Math.floor(c));let h,j,k,n=(""+c).split(""),r=(""+e).split(""),s=a.children,t=0,u=d[0].frames[n[0]+".png"].frame.w,v=l*n.length-1+u*n.length;for(t="left"==m?0:0,h=0;h<s.length;h++)s[h].visible=!1,s[h].position.set(0,0);for(h=0;h<n.length;h++)j=d[0].frames[n[h]+".png"].frame,s[h].visible=!0,s[h].children[0].x=-.5*j.w-j.x,s[h].children[0].y=-1*j.h-j.y,s[h].children[1].clear(),s[h].children[1].beginFill(16777215,1),s[h].children[1].drawRect(-.5*j.w,-1*j.h,j.w,j.h-2),s[h].children[1].endFill(),s[h].children[0].mask=s[h].children[1],s[h].position.set(l+t+j.w,0),t=l+t+j.w;if(o&&(s[10].visible=!0,s[10].x=l+t+j.w/1.5,t=l+t+j.w/3,v+=j.w/1.5),0<a.snum){for(h=0;h<r.length;h++)j=d[0].frames[r[h]+".png"].frame,k=s[h+n.length],k.visible=!0,k.children[0].x=-.5*j.w-j.x,k.children[0].y=-1*j.h-j.y,k.children[1].clear(),k.children[1].beginFill(16777215,1),k.children[1].drawRect(-.5*j.w,-1*j.h,j.w,j.h-2),k.children[1].endFill(),k.children[0].mask=k.children[1],k.position.set(l+t+j.w,0),t=l+t+j.w;v=v+l*p+u*a.snum}"empty"!==q&&(s[s.length-1].visible=!0,s[s.length-1].x=u+t+s[s.length-1]._x,s[s.length-1].y=s[s.length-1]._y,t=l+t+s[s.length-1].width,v+=s[s.length-1].width),"left"==m?a.position.set(f-l,g):"center"==m?a.position.set(f-l-v/2,g):a.position.set(f-l-v,g)},a}}class createGradient{constructor({name:a,p:b,points:c=[0,1],colors:d=["#000000"],x:e=0,y:f=0,w:g=200,h:j=200}){let h=document.createElement("canvas");h.width=g,h.height=j;let k=h.getContext("2d"),l=k.createLinearGradient(g/2,0,g/2,j),m="#000000";c.forEach((a,b)=>{void 0!==d[b]&&(m=d[b]),l.addColorStop(a,m)}),k.fillStyle=l,k.fillRect(0,0,g,j);let n=PIXI.Texture.from(h);return a=new PIXI.Sprite(n),a.anchor.set(.5,.5),a.position.set(e,f),b.addChild(a),a}}class createRadialGradient{constructor({name:a,p:b,center:c=[0,0],radius:d=100,w:e=200,h:f=200,points:g=[0,1],colors:h=["#000000"],x:j=0,y:k=0,alpha:l=1,visible:m=!0}){let n=document.createElement("canvas");n.width=e,n.height=f;let o=n.getContext("2d"),p=o.createRadialGradient(c[0],c[1],0,c[0],c[1],d),q="#000000";g.forEach((a,b)=>{void 0!==h[b]&&(q=h[b]),p.addColorStop(a,q)}),o.fillStyle=p,o.fillRect(0,0,n.width,n.height);let r=PIXI.Texture.from(n);return a=new PIXI.Sprite(r),a.anchor.set(.5,.5),a.position.set(j,k),a.alpha=l,a.visible=m,b.addChild(a),a}}const SaveObject=a=>{a.m_x=a.x,a.m_y=a.y,a.m_scaleX=a.scale.x,a.m_scaleY=a.scale.y,a.m_rotation=a.rotation,a.m_alpha=a.alpha,a.m_visible=a.visible,a.gs_an_x=0,a.gs_an_y=0,a.gs_an_scaleX=0,a.gs_an_scaleY=0,a.gs_an_rotation=0},RebootObject=a=>{gsap.killTweensOf(a),gsap.killTweensOf(a.scale),a.x=a.m_x,a.y=a.m_y,a.scale.x=a.m_scaleX,a.scale.y=a.m_scaleY,a.rotation=a.rotation,a.alpha=a.m_alpha,a.visible=a.m_visible},DistancePointToPoint=(a,b,c,d)=>Math.sqrt((a-c)*(a-c)+(b-d)*(b-d)),PlaySound=a=>{appSounds[a].play()},SortZ=(c,a)=>c._z<a._z?-1:c._z>a._z?1:0,InitPixi=()=>{appObj.canvasWidth=Math.ceil(window.innerWidth),appObj.canvasHeight=Math.ceil(window.innerHeight),AppCanvas.id="AppCanvas",AppCanvas.width=appObj.canvasWidth,AppCanvas.height=appObj.canvasHeight,renderer=new PIXI.autoDetectRenderer({width:appObj.canvasWidth,height:appObj.canvasHeight,view:AppCanvas,transparent:!0,antialias:!1}),document.getElementById("pixi").append(renderer.view),stage=new PIXI.Container,stage.position.set(Math.ceil(.5*appObj.canvasWidth),Math.ceil(.5*appObj.canvasHeight))},RandomInteger=(a,b)=>{let c=a+Math.random()*(b+1-a);return Math.floor(c)};let idRandomCash=0;const aRandomCash=[.55,.86,.065,.408,.423,.628,.672,.634,.671,.794,.328,.649,.172,.531,.803,.583,.528,.527,.396,.153,.198,.418,.021,.712,.553,.03,.811,.495,.186,.119,.421,.039,.889,.345,.889,.161,.931,.358,.762,.254,.729,.568,.979,.607,.894,.616,.841,.128,.05,.856,.997,.543,.841,.877,.563,.358,.853,.906,.115,.339,.788,.988,.326,.123,.413,.308,.723,.121,.762,.916,.406,.491,.942,.7,.554,.958,.562,.182,.956,.056,.867,.692,.26,.215,.801,.668,.168,.17,.977,.876,.088,.296,.116,.904,.498,.056,.062,.008,.335,.392,.67,.697,.647,.87,.648,.529,.6,.583,.689,.176,.722,.612,.005,.218,.33,.401,.004,.344,.066,.517,.038,.307,.183,.03,.272,.591,.846,.403,.581,.34,.094,.49,.167,.26,.676,.344,.657,.147,.134,.662,.813,.213,.435,.548,.676,.628,.986,.265,.539,.633,.33,.947,.354,.183,.413,.479,.015,.576,.606,.723,.313,.43,.976,.37,.745,.328,.599,.654,.037,.36,.826,.725,.921,.868,.503,.144,.956,.281,.961,.808,.001,.206,.602,.137,.587,.848,.819,.804,.857,.319,.431,.723,.993,.37,.738,.313,.331,.728,.809,.101,.711,.482,.494,.545,.502,.047,.495,.224,.749,.826,.554,.459,.329,.834,.239,.645,.695,.824,.651,.341,.82,.724,.233,.52,.968,.035,.778,.7,.454,.153,.677,.025,.825,.909,.027,.731,.616,.158,.46,.467,.23,.998,.429,.481,.028,.511,.742,.379,.022,.629,.039,.985,.931,.491,.057,.929,.91,.599,.741,.073,.388,.745,.359,.581,.065,.633,.211,.005,.738,.992,.621,.493,.497,.575,.247,.139,.549,.122,.191,.168,.329,.278,.279,.706,.252,.823,.027,.592,.197,.87,.498,.903,.563,.043,.868,.648,.123,.171,.982,.154,.758,.61,.301,.385,.981,.714,.69,.721,.434,.857,.814,.361,.036,.672,.239,.021,.22,.871,.928,.276,.846,.267,.215,.05,.422,.857,.279,.86,.676,.134,.908,.738,.73,.094,.218,.978,.873,.8,.235,.059,.684,.255,.584,.392,.917,.787,.431,.323,.945,.568,.5,.383,.271,.613,.344,.695,.652,.22,.743,.022,.016,.269,.242,.022,.826,.917,.338,.066,.126,.048,.595,.426,.604,.256,.51,.574,.895,.766,.681,.717,.479,.484,.879,.666,.439,.969,.542,.896,.326,.402,.232,.052,.913,.793,.446,.535,.939,.125,.868,.393,.925,.771,.685,.542,.219,.051,.038,.189,.994,.14,.992,.115,.046,.05,.363,.524,.793,.819,.542,.173,.65,.26,.743,.773,.068,.141,.714,.836,.83,.592,.086,.721,.87,.251,.849,.812,.806,.643,.878,.62,.539,.51,.632,.839,.211,.838,.626,.107,.478,.753,.215,.273,.647,.778,.776,.108,.66,.925,.751,.075,.369,.463,.319,.841,.141,.064,.465,.152,.768,.869,.497,.822,.568,.865,.725,.22,.356,.062,.843,.321,.426,.662,.772,.334,.919,.747,.527,.192,.754,.442,.904,.029,.679,.975,.326,.481,.661,.143,.21,.011,.476,.648,.268,.781,.262,.65,.502,.917,.833,.148,.626,.898,.399,.03,.201,.92,.801,.363,.354,.639,.158,.039,.196,.093,.677,.416,.954,.379,.276,.701,.733,.148,.305,.48,.8,.808,.274,.553,.268,.895,.703,.979,.243,.967,.857,.73,.605,.2,.415,.398,.658,.363,.839,.366,.451,.375,.998,.532,.685,.289,.649,.125,.299,.718,.903,.16,.284,.114,.748,.684,.455,.313,.815,.831,.83,.146,.646,.707,.545,.091,.143,.174,.081,.246,.001,.166,.95,.891,.58,.323,.56,.184,.185,.703,.286,.035,.76,.255,.089,.083,.193,.091,1,.824,.326,.029,.866,.6,.905,.253,.911,.529,.023,.996,.21,.431,.456,.616,.087,.126,.055,.023,.751,.807,.437,.94,.502,.271,.267,.886,.195,.342,.569,.899,.421,.87,.941,.83,.111,.886,.461,.165,.295,.67,.298,.719,.896,.266,.126,.677,.694,.098,.764,.027,.182,.526,.218,.07,.912,.535,.931,.717,.979,.827,.827,.068,.018,.99,.404,.378,.121,.266,.722,.22,.333,.029,.603,.372,.881,.345,.35,.177,.375,.33,.697,.364,.875,.976,.139,.895,.083,.883,.795,.639,.53,.467,.437,.556,.781,.505,.956,.445,.971,.077,.065,.786,.157,.039,.114,.211,.929,.19,.379,.797,.001,.91,.543,.792,.364,.49,.534,.954,.01,.484,.641,.922,.216,.732,.87,.808,.07,.591,.823,.805,.859,.414,.789,.791,.727,.532,.296,.002,.463,.877,.969,.158,.27,.922,.691,.964,.59,.67,.084,.435,.628,.037,.631,.795,.448,.502,.568,.417,.049,.154,.257,.182,.536,.678,.351,.3,.5,.301,.779,.8,.685,.458,.576,.888,.04,.053,.855,.171,.872,.521,.118,.972,.301,.651,.863,.009,.907,.447,.981,.534,.559,.508,.216,.098,.583,.792,.659,.357,.819,.334,.256,.553,.675,.158,.637,.748,.297,.17,.332,.817,.057,.154,.282,.299,.678,.626,.731,.134,.882,.562,.817,.672,.819,.671,.607,.219,.399,.51,.179,.821,.612,.646,.204,.769,.489,.177,.654,.021,.178,.393,.732,.203,.43,.645,.917,.325,.209,.221,.947,.158,.922,.072,.153,.07,.734,.316,.871,.067,.295,.244,.217,.109,.83,.736,.042,.332,.623,.625,.697,.032,.809,.861,.385,.562,.76,.171,.8,.947,.059,.243,.445,.924,.884,.616,.612,.027,.721,.611,.736,.658,.352,.82,.71,.245,.656,.456,.766,.513,.596,.467,.29,.532,.562,.985,.314,.099,.204,.014,.084,.543,.6,.238,.714,.015,.928,.493,.127,.78,.68,.88,.198,.113,.857,.371,.153,.344,.36,.653,.731,.845,.651,.532,.894,.321,.23,.876,.117,.52,.128,.793,.323,.999,.732,.45,.348,.995,.014,.554,.474,.121,.803,.247,.929,.398,.298,.871,.287,.055,.082,.89,.892,.467,.132,.251,.212,.999,.773,.556,.621,.014,.875,.694,.3,.165,.552,.574,.911,.708,.714,.328,.756,.658,.752,.126,.762,.631,.198,.154,.797,.717,.764,.654,.559,.127,.543,.669],RandomCash=()=>(idRandomCash++,idRandomCash==aRandomCash.length&&(idRandomCash=0),aRandomCash[idRandomCash]);let seedRandom=6;const Random=a=>{a=a||1,seedRandom=(9301*seedRandom+49297)%233280;let b=seedRandom/233280;return b=Math.round(b*a),b==a&&b--,b},MixArray=a=>{for(let b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a},isSafari=()=>{let a=navigator.userAgent.toLowerCase();return-1!=a.indexOf("safari")&&!(-1<a.indexOf("chrome"))};let raf_lastTime=0,raf_vendors=["ms","moz","webkit","o"];for(var x=0;x<raf_vendors.length&&!window.requestAnimationFrame;++x)window.requestAnimationFrame=window[raf_vendors[x]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[raf_vendors[x]+"CancelAnimationFrame"]||window[raf_vendors[x]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){let b=new Date().getTime(),c=Math.max(0,16-(b-raf_lastTime)),d=window.setTimeout(function(){a(b+c)},c);return raf_lastTime=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});let hidden,state,visibilityChange;"undefined"==typeof document.hidden?"undefined"==typeof document.mozHidden?"undefined"==typeof document.msHidden?"undefined"!=typeof document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange",state="webkitVisibilityState"):(hidden="msHidden",visibilityChange="msvisibilitychange",state="msVisibilityState"):(hidden="mozHidden",visibilityChange="mozvisibilitychange",state="mozVisibilityState"):(hidden="hidden",visibilityChange="visibilitychange",state="visibilityState");const canvasVisibilityChange=()=>{if(document[hidden]||"hidden"==document[state])try{Howler.mute(!0)}catch(a){}else isGlobalSound&&Howler.mute(!1)};document.addEventListener(visibilityChange,canvasVisibilityChange,!1),window.addEventListener(visibilityChange,canvasVisibilityChange,!1);