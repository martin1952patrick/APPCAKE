const EndGame = () => {
  let i, objTemp;
  if (stateGame != 10) {
    stateGame = 10;

    appMc.mcBgFS.visible = true;

    appMc.mcLaterANormal.visible = false;
    appMc.mcLaterADie.alpha = 1;
    gsap.to(appMc.mcLaterADie, 0.25, {
      delay: 0.0,
      overwrite: "none",
      y: "-=100",
      ease: Sine.easeOut,
    });
    gsap.to(appMc.mcLaterADie, 0.25, {
      delay: 0.25,
      overwrite: "none",
      y: "+=50",
      ease: Sine.easeIn,
    });

    appMc.mcLaterAKick.visible = false;
    gsap.to(appMc.mcLaterADie, 0.25, {
      delay: 0.25,
      overwrite: "none",
      rotation: -0.5 * Math.PI,
      x: "+=250",
      ease: Sine.easeInOut,
    });
    gsap.to(appMc.mcLaterADie.skew, 0.25, {
      delay: 0.25,
      overwrite: "none",
      y: 0.5,
      ease: Sine.easeInOut,
    });
    gsap.to(appMc.mcLaterADie.scale, 0.25, {
      delay: 0.25,
      overwrite: "none",
      x: 0.6,
      ease: Sine.easeInOut,
    });

    gsap.to(appMc.mcLaterADie, 0.5, {
      delay: 0.5,
      overwrite: "none",
      alpha: 0.0,
      ease: "none",
    });
    gsap.to(appMc.mcLaterShadow, 0.5, {
      delay: 0.5,
      overwrite: "none",
      alpha: 0.0,
      ease: "none",
    });

    setTimeout(() => {
      appMc.mcExp = new itemSparkle({
        p: appMc.mcLaterA,
        tex: "blood",
        count: 50,
        t: 0.05,
        dx: 50,
        dy: 50,
        s: 1.5,
        m: 1.5,
      });
      appMc.mcSmoke = new itemSmoke({
        p: appMc.mcLaterA,
        tex: "smoke",
        count: 50,
        t: 0.5,
        dx: 50,
        dy: 50,
        s: 1.5,
        m: 2.5,
        alpha: 0.5,
      });
      appMc.mcKillBtn.visible = false;
      appMc.mcWorldShake.shakeD = 7;
      appSounds["win"].play();
    }, 500);
    gsap.to(appMc.mcKillBtn.scale, 0.5, {
      delay: 0.0,
      overwrite: "none",
      x: 0,
      y: 0,
      ease: Back.easeIn,
    });
    appMc.mcTryBtn.visible = true;
    gsap.from(appMc.mcTryBtnBG.scale, 0.5, {
      delay: 0.5,
      overwrite: "none",
      x: 0,
      y: 0,
      ease: Back.easeOut,
    });
    gsap.from(appMc.mcTryBtnText.scale, 0.5, {
      delay: 0.7,
      overwrite: "none",
      x: 0,
      y: 0,
      ease: Back.easeOut,
    });
  }
};
class itemSmoke {
  constructor({
    name,
    p,
    tex,
    count,
    t,
    dx = 15,
    dy = 15,
    m = 0.5,
    s = 0.4,
    alpha = 1,
  }) {
    let sparkle = [];
    name = {};
    if (p.name != undefined) {
      p.removeChild(name);
    }
    for (let i = 0; i < count; i++) {
      name["mcSparkl" + i] = new createSprite({
        p: p,
        x: 0,
        y: 0,
        tex: tex,
        visible: false,
      });
      name["mcSparkl" + i].dx = dx - dx * 2 * Math.random();
      name["mcSparkl" + i].dy = dy - dy * 2 * Math.random();
      name["mcSparkl" + i].ss = s + s * Math.random();
      name["mcSparkl" + i].m = m;
      name["mcSparkl" + i].d = 200 + 200 * Math.random();
      name["mcSparkl" + i].alpha = alpha;
      sparkle.push(name["mcSparkl" + i]);
      setTimeout(() => {
        name["mcSparkl" + i].visible = true;
      }, t * i);
    }

    name.update = () => {
      sparkle.forEach((c, i) => {
        if (c.visible && c.y <= c.d) {
          c.scale.set(c.ss);
          c.ss *= 0.98;
          c.x += c.dx;
          c.y += c.dy + c.m;
          c.m *= 1.1;
          c.dx *= 0.94;
          c.dy *= 0.94;
        } else {
          c.alpha -= 0.01;
          if (c.alpha <= 0.0) {
            c.visible = false;
            sparkle = sparkle.filter((item) => item != c);
            p.removeChild(c);
          }
        }
      });
      if (sparkle.length <= 0) {
        name.ticker.destroy();
        p.removeChild(name);
      }
    };
    name.ticker = PIXI.Ticker.shared;
    name.ticker.maxFPS = 30;
    name.ticker.add(() => {
      name.update();
    });
    return name;
  }
}
const bodyDown = (e) => {
  mouse.isDown = true;
  //	console.log("body");
};
const StageDown = (e) => {
  if (stateGame == 0) {
    stateGame = 1;
    // if(!isGlobalActive){
    // 	isGlobalActive = true;
    // 	isGlobalSound = true;
    // 	Howler.mute(!isGlobalSound);
    // }
  }
  mouse.isDown = true;
  appMc.mcKillBtn.scale.set(appMc.mcKillBtn.s);
  gsap.to(appMc.mcKillBtn.scale, 0.2, {
    delay: 0.0,
    overwrite: "none",
    x: "-=0.05",
    y: "-=0.05",
    ease: Sine.easeIn,
  });
  appSounds["click"].play();
};
const StageMove = (e) => {
  if (mouse.isDown) {
    mouse.x = e.data.getLocalPosition(appMc.mcUI).x;
    mouse.y = e.data.getLocalPosition(appMc.mcUI).y;

    // console.log(mouse);

    // appMc.upperBody.position[0] = mouse.x/100;
    // appMc.upperBody.position[1] = mouse.y/100;
  }
};
const StageUp = (e) => {
  mouse.isDown = false;

  appMc.mcExp = new itemSparkle({
    p: appMc.mcBloodC,
    tex: "blood",
    count: 50,
    t: 0.05,
    dx: 25,
    dy: 25,
    s: 1,
    m: 2.5,
  });
  appSounds["later"].play();
  appMc.mcWorldShake.shakeD = 7;

  appMc.mcBarFill.mask.x -= 35.86;
  gameScore++;

  latterA = false;
  latterNameSpeed = 155;

  TweenLite.killTweensOf(appMc.mcLaterANormal);
  TweenLite.killTweensOf(appMc.mcKillBtn.scale);
  gsap.to(appMc.mcKillBtn.scale, 0.2, {
    delay: 0.0,
    overwrite: "none",
    x: appMc.mcKillBtn.s,
    y: appMc.mcKillBtn.s,
    ease: Sine.easeOut,
  });
  TweenLite.killTweensOf(appMc.mcLaterAKick);
  appMc.mcLaterAKick.y = 230;
  gsap.to(appMc.mcLaterAKick, 0.25, {
    delay: 0.0,
    yoyo: true,
    repeat: 1,
    overwrite: "none",
    y: "-=100",
    ease: Sine.easeInOut,
  });

  appMc.mcLaterANormal.alpha = 0;
  appMc.mcLaterAKick.alpha = 1;
  gsap.set(appMc.mcLaterANormal, { delay: 0.5, overwrite: "none", alpha: 1 });
  gsap.set(appMc.mcLaterAKick, { delay: 0.5, overwrite: "none", alpha: 0 });

  TweenLite.killTweensOf(appMc.mcLaterShadow);
  TweenLite.killTweensOf(appMc.mcLaterShadow.scale);
  appMc.mcLaterShadow.alpha = 1.0;
  appMc.mcLaterShadow.scale.y = 0.25;
  appMc.mcLaterShadow.scale.x = 1.0;
  gsap.to(appMc.mcLaterShadow, 0.25, {
    delay: 0.0,
    yoyo: true,
    repeat: 1,
    overwrite: "none",
    alpha: 0.2,
    ease: Sine.easeInOut,
  });
  gsap.to(appMc.mcLaterShadow.scale, 0.25, {
    delay: 0.0,
    yoyo: true,
    repeat: 1,
    overwrite: "none",
    x: 1.5,
    y: 0.3,
    ease: Sine.easeInOut,
  });

  if (gameScore == 14) {
    appSounds["die"].play();
    EndGame();
  }
};
const BtnGlobalSound = (e) => {
  if (isGlobalSound) {
    isGlobalSound = false;

    appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];

    Howler.mute(true);
  } else {
    isGlobalSound = true;

    appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];

    Howler.mute(false);
  }
};
