class Confetti {
	constructor({ name: a, p: b, count: c }) {
		for (a = new PIXI.Container(), b.addChild(a), i = 0; i < c; i++) {
			(a["mcConfCont" + i] = new PIXI.Container()),
				a.addChild(a["mcConfCont" + i]);
			var d =
					"0x" +
					((16777215 * Math.random()) << 0).toString(16).padStart(6, "0"),
				e = 300 - 600 * Math.random(),
				f = 30 + 20 * Math.random(),
				g = 10 + 10 * Math.random();
			(a["mcConfS" + i] = new PIXI.Graphics()),
				a["mcConfS" + i].beginFill(d, 1),
				a["mcConfS" + i].drawRect(0.5 * -f, 0.5 * -g, f, g),
				a["mcConfS" + i].endFill(),
				(a["mcConfS" + i].alpha = 1),
				(a["mcConfS" + i].rSpeed = 0.5 - 0.4 * Math.random()),
				(a["mcConfS" + i].rotation = 1 * Math.random() * Math.PI),
				a["mcConfCont" + i].addChild(a["mcConfS" + i]),
				a["mcConfCont" + i].position.set(e, 300 - 600 * Math.random()),
				(a["mcConfCont" + i].sX = -1 * Math.random()),
				(a["mcConfCont" + i].sY = 1 * Math.random()),
				(a["mcConfCont" + i].dy = 10 - 38 * Math.random()),
				(a["mcConfCont" + i].dx = 20 - 40 * Math.random()),
				(a["mcConfCont" + i].minX = RandomInteger(0, 1)),
				(a["mcConfCont" + i].minY = RandomInteger(0, 1));
		}
		return (
			(a.update = () => {
				for (let b, c = 0; c < a.children.length; c++)
					(b = a.children[c]),
						700 > b.y
							? ((a["mcConfS" + c].rotation += a["mcConfS" + c].rSpeed),
							  (b.dy += 0.41),
							  (b.dx *= 0.96),
							  (b.scale.x = b.sX),
							  (b.scale.y = b.sY),
							  (b.y += b.dy),
							  (b.x += b.dx),
							  0 == b.minX
									? ((b.sX -= 0.05), -1 >= b.sX && (b.minX = 1))
									: ((b.sX += 0.05), 1 <= b.sX && (b.minX = 0)),
							  0 == b.minY
									? ((b.sY -= 0.03), -1 >= b.sY && (b.minY = 1))
									: ((b.sY += 0.03), 1 <= b.sY && (b.minY = 0)))
							: a.removeChild(b);
				0 >= a.children.length && (a.ticker.destroy(), b.removeChild(a));
			}),
			(a.ticker = PIXI.Ticker.shared),
			(a.ticker.maxFPS = 30),
			a.ticker.add(() => {
				a.update();
			}),
			a
		);
	}
}
class itemSparkle {
	constructor({
		name: a,
		p: b,
		tex: c,
		count: d,
		t: e,
		dx: f = 15,
		dy: g = 15,
		s: h = 0.4,
	}) {
		let j = [];
		(a = {}), null != b.name && b.removeChild(a);
		for (let k = 0; k < d; k++)
			(a["mcSparkl" + k] = new createSprite({
				p: b,
				x: 0,
				y: 0,
				tex: c,
				visible: !1,
			})),
				(a["mcSparkl" + k].dx = f - 2 * f * Math.random()),
				(a["mcSparkl" + k].dy = g - 2 * g * Math.random()),
				(a["mcSparkl" + k].ss = h + h * Math.random()),
				j.push(a["mcSparkl" + k]),
				setTimeout(() => {
					a["mcSparkl" + k].visible = !0;
				}, e * k);
		return (
			(a.update = () => {
				j.forEach((a) => {
					a.visible &&
						(a.scale.set(a.ss),
						(a.ss *= 0.94),
						(a.x += a.dx),
						(a.y += a.dy),
						(a.dx *= 0.94),
						(a.dy *= 0.94),
						0.01 >= a.ss &&
							((a.visible = !1),
							(j = j.filter((b) => b != a)),
							b.removeChild(a)));
				}),
					0 >= j.length && (a.ticker.destroy(), b.removeChild(a));
			}),
			(a.ticker = PIXI.Ticker.shared),
			(a.ticker.maxFPS = 30),
			a.ticker.add(() => {
				a.update();
			}),
			a
		);
	}
}
class createContainer {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		scale: g = 1,
	}) {
		return (
			(a = new PIXI.Container()),
			a.position.set(e, f),
			b.addChild(a),
			(a.visible = c),
			(a.alpha = d),
			a.scale.set(g),
			a
		);
	}
}
class createSprite {
	constructor({
		name: a,
		p: b,
		tex: c,
		x: d = 0,
		y: e = 0,
		anchor: f = [0.5, 0.5],
		scale: g = 1,
		visible: h = !0,
		alpha: j = 1,
		ph: k = !1,
		mass: l = 0,
	}) {
		return (
			(a = new PIXI.Sprite()),
			(a.texture = moduleTexture.pixiTextures[c]),
			a.position.set(d, e),
			a.anchor.set(f[0], f[1]),
			a.scale.set(g),
			(a.visible = h),
			(a.alpha = j),
			b.addChild(a),
			physics &&
				k &&
				((a.boxShape = new p2.Box({ width: a.width, height: a.height })),
				(a.boxBody = new p2.Body({
					mass: l,
					position: [d - a.width / 2, e - a.height / 2],
					angularVelocity: 1,
				})),
				a.boxBody.addShape(a.boxShape),
				appMc.p2world.addBody(a.boxBody),
				(a.ticker = PIXI.Ticker.shared),
				(a.ticker.maxFPS = 30),
				a.ticker.add(() => {
					a.update();
				})),
			(a.update = () => {
				physics &&
					k &&
					((a.x = a.boxBody.position[0]),
					(a.y = -a.boxBody.position[1]),
					(a.rotation = a.boxBody.angle));
			}),
			a
		);
	}
}
class createRect {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		width: g = 0,
		height: h = 0,
		color: j = "0x000000",
		fill: k = 1,
		radius: l = 0,
		lineColor: m = "0x000000",
		lineWeigth: n = 0,
		ph: o = !1,
		mass: p = 0,
	}) {
		return (
			(a = new PIXI.Graphics()),
			a.beginFill(j, k),
			a.lineStyle(n, m, 1),
			a.drawRoundedRect(e, f, g, h, l),
			a.endFill(),
			(a.alpha = d),
			(a.visible = c),
			b.addChild(a),
			physics &&
				o &&
				((a.boxShape = new p2.Box({ width: g, height: h })),
				(a.boxBody = new p2.Body({
					mass: p,
					position: [e + g / 2, f + h / 2],
					angularVelocity: 1,
				})),
				a.boxBody.addShape(a.boxShape),
				appMc.p2world.addBody(a.boxBody),
				(a.ticker = PIXI.Ticker.shared),
				(a.ticker.maxFPS = 30),
				a.ticker.add(() => {
					a.update();
				})),
			(a.update = () => {
				physics &&
					o &&
					((a.x = a.boxBody.position[0]),
					(a.y = -a.boxBody.position[1]),
					(a.rotation = a.boxBody.angle));
			}),
			a
		);
	}
}
class createCircle {
	constructor({
		name: a,
		p: b,
		visible: c = !0,
		alpha: d = 1,
		x: e = 0,
		y: f = 0,
		radius: g = 5,
		color: h = "0x000000",
		fill: j = 1,
	}) {
		return (
			(a = new PIXI.Graphics()),
			a.beginFill(h, j),
			a.drawCircle(0, 0, g),
			a.position.set(e, f),
			a.endFill(),
			(a.alpha = d),
			(a.visible = c),
			b.addChild(a),
			a
		);
	}
}
class createSequence {
	constructor({
		name: a,
		p: b,
		tex: c,
		data: d,
		prefix: e,
		frame: f = 0,
		seq: g = 0,
		totalFrame: h = 0,
		x: j = 0,
		y: k = 0,
		scale: l = 1,
		alpha: m = 1,
		visible: n = !0,
		loop: o = !1,
		slow: p = 0,
		reverse: q = !1,
		stopFrame: r = !1,
	}) {
		let s;
		return (
			(a = new createContainer({ p: b })),
			a.position.set(j, k),
			(s = d[0].frames[e + "" + f + ".png"].frame),
			(appMc[c + "S" + g] = new createSprite({
				p: a,
				tex: c,
				x: -0.5 * s.w - s.x,
				y: -1 * s.h - s.y,
				anchor: [0, 0],
			})),
			(appMc[c + "M" + g] = new createRect({
				p: a,
				x: -0.5 * s.w,
				y: -1 * s.h,
				width: s.w,
				height: s.h,
			})),
			(appMc[c + "S" + g].mask = appMc[c + "M" + g]),
			a.scale.set(l),
			(a.visible = n),
			(a.alpha = m),
			(a.frame = 0),
			(a.playF = 0),
			(a.pF = !0),
			(a.update = () => {
				var b;
				a.visible &&
					((b = d[0].frames[e + "" + a.frame + ".png"].frame),
					(appMc[c + "S" + g].x = -0.5 * b.w - b.x),
					(appMc[c + "S" + g].y = -1 * b.h - b.y),
					a.playF++,
					0 == p
						? q
							? a.pF
								? a.frame++
								: a.frame--
							: a.frame++
						: 0 == a.playF % p &&
						  (q ? (a.pF ? a.frame++ : a.frame--) : a.frame++),
					q
						? (a.frame >= h && a.pF && (a.pF = !1),
						  0 >= a.frame && !a.pF && (a.pF = !0))
						: a.frame >= h &&
						  (o
								? ((a.frame = 0), (a.playF = 0))
								: r
								? ((a.frame = h), (a.playF = 0))
								: (a.visible = !1)));
			}),
			a
		);
	}
}
class createDigit {
	constructor({
		name: a,
		p: b,
		num: e = 0,
		x: f = 0,
		y: g = 0,
		scale: h = 1,
		tex: c,
		data: d,
		tint: j = !1,
		tintColor: k = "0xffffff",
		spacing: l = 0,
		align: m = "left",
		separate: o = "false",
		snum: p = 0,
		pref: q = "empty",
		prefX: r = 0,
		prefY: s = 0,
	}) {
		let t,
			n,
			u = ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9"],
			v = c,
			w = 0,
			x = 0;
		a = new PIXI.Container();
		let y = d[0].frames[u[0] + ".png"].frame.w,
			z = l * u.length - 1 + y * u.length;
		for (t = 0; t < u.length; t++)
			(appMc["DigG" + t] = new createContainer({ p: a })),
				(n = d[0].frames[u[t] + ".png"].frame),
				(appMc["DigS" + t] = new createSprite({
					p: appMc["DigG" + t],
					tex: v,
					x: -0.5 * n.w - n.x,
					y: -1 * n.h - n.y,
					anchor: [0, 0],
				})),
				j && (appMc["DigS" + t].tint = k),
				(appMc["DigM" + t] = new createRect({
					p: appMc["DigG" + t],
					x: -0.5 * n.w,
					y: -1 * n.h,
					width: n.w,
					height: n.h,
				})),
				(appMc["DigS" + t].mask = appMc["DigM" + t]),
				appMc["DigG" + t].position.set(l + x + n.w, 0),
				(x = l + x + n.w),
				(w += n.w + 0);
		if (
			(o &&
				((appMc.DigSeparate = new createContainer({ p: a })),
				(n = d[0].frames["dot.png"].frame),
				(appMc.DigSeparateS = new createSprite({
					p: appMc.DigSeparate,
					tex: v,
					x: -0.5 * n.w - n.x,
					y: -1 * n.h - n.y,
					anchor: [0, 0],
				})),
				j && (appMc.DigSeparateS.tint = k),
				(appMc.DigSeparateM = new createRect({
					p: appMc.DigSeparate,
					x: -0.5 * n.w,
					y: -1 * n.h,
					width: n.w,
					height: n.h,
				})),
				(appMc.DigSeparateS.mask = appMc.DigSeparateM),
				(appMc.DigSeparate.x = l + x + n.w),
				(x = l + x + n.w / 1.5),
				(z += n.w / 1.5)),
			0 < p)
		) {
			for (t = 0; t < p; t++)
				(appMc["DigGS" + t] = new createContainer({ p: a })),
					(n = d[0].frames[u[t] + ".png"].frame),
					(appMc["DigSS" + t] = new createSprite({
						p: appMc["DigGS" + t],
						tex: v,
						x: -0.5 * n.w - n.x,
						y: -1 * n.h - n.y,
						anchor: [0, 0],
					})),
					j && (appMc["DigSS" + t].tint = k),
					(appMc["DigSM" + t] = new createRect({
						p: appMc["DigGS" + t],
						x: -0.5 * n.w,
						y: -1 * n.h,
						width: n.w,
						height: n.h,
					})),
					(appMc["DigSS" + t].mask = appMc["DigSM" + t]),
					appMc["DigGS" + t].position.set(l + x + n.w, 0),
					(x = l + x + n.w),
					(w += n.w + 0);
			z = z + l * p + y * p;
		}
		return (
			"empty" !== q &&
				((appMc.DigPref = new createContainer({ p: a })),
				(appMc.DigPref._x = r),
				(appMc.DigPref._y = s),
				(appMc.DigPrefS = new createSprite({
					p: appMc.DigPref,
					tex: q,
					anchor: [0, 1],
				})),
				(appMc.DigPref.x = l + x + appMc.DigPrefS.width),
				(x = l + x + appMc.DigPrefS.width),
				(z += appMc.DigPrefS.width)),
			"left" == m
				? a.position.set(f - l, g)
				: "center" == m
				? a.position.set(f - l - z / 2, g)
				: a.position.set(f - l - z, g),
			a.scale.set(h),
			(a.snum = p),
			b.addChild(a),
			(a.update = (b) => {
				let c = b.toFixed(a.snum).toString(),
					e = c.substr(c.length - a.snum);
				0 < a.snum && (c = Math.floor(c));
				let h,
					j,
					k,
					n = ("" + c).split(""),
					r = ("" + e).split(""),
					s = a.children,
					t = 0,
					u = d[0].frames[n[0] + ".png"].frame.w,
					v = l * n.length - 1 + u * n.length;
				for (t = "left" == m ? 0 : 0, h = 0; h < s.length; h++)
					(s[h].visible = !1), s[h].position.set(0, 0);
				for (h = 0; h < n.length; h++)
					(j = d[0].frames[n[h] + ".png"].frame),
						(s[h].visible = !0),
						(s[h].children[0].x = -0.5 * j.w - j.x),
						(s[h].children[0].y = -1 * j.h - j.y),
						s[h].children[1].clear(),
						s[h].children[1].beginFill(16777215, 1),
						s[h].children[1].drawRect(-0.5 * j.w, -1 * j.h, j.w, j.h - 2),
						s[h].children[1].endFill(),
						(s[h].children[0].mask = s[h].children[1]),
						s[h].position.set(l + t + j.w, 0),
						(t = l + t + j.w);
				if (
					(o &&
						((s[10].visible = !0),
						(s[10].x = l + t + j.w / 1.5),
						(t = l + t + j.w / 3),
						(v += j.w / 1.5)),
					0 < a.snum)
				) {
					for (h = 0; h < r.length; h++)
						(j = d[0].frames[r[h] + ".png"].frame),
							(k = s[h + n.length]),
							(k.visible = !0),
							(k.children[0].x = -0.5 * j.w - j.x),
							(k.children[0].y = -1 * j.h - j.y),
							k.children[1].clear(),
							k.children[1].beginFill(16777215, 1),
							k.children[1].drawRect(-0.5 * j.w, -1 * j.h, j.w, j.h - 2),
							k.children[1].endFill(),
							(k.children[0].mask = k.children[1]),
							k.position.set(l + t + j.w, 0),
							(t = l + t + j.w);
					v = v + l * p + u * a.snum;
				}
				"empty" !== q &&
					((s[s.length - 1].visible = !0),
					(s[s.length - 1].x = u + t + s[s.length - 1]._x),
					(s[s.length - 1].y = s[s.length - 1]._y),
					(t = l + t + s[s.length - 1].width),
					(v += s[s.length - 1].width)),
					"left" == m
						? a.position.set(f - l, g)
						: "center" == m
						? a.position.set(f - l - v / 2, g)
						: a.position.set(f - l - v, g);
			}),
			a
		);
	}
}
class createGradient {
	constructor({
		name: a,
		p: b,
		points: c = [0, 1],
		colors: d = ["#000000"],
		x: e = 0,
		y: f = 0,
		w: g = 200,
		h: j = 200,
	}) {
		let h = document.createElement("canvas");
		(h.width = g), (h.height = j);
		let k = h.getContext("2d"),
			l = k.createLinearGradient(g / 2, 0, g / 2, j),
			m = "#000000";
		c.forEach((a, b) => {
			void 0 !== d[b] && (m = d[b]), l.addColorStop(a, m);
		}),
			(k.fillStyle = l),
			k.fillRect(0, 0, g, j);
		let n = PIXI.Texture.from(h);
		return (
			(a = new PIXI.Sprite(n)),
			a.anchor.set(0.5, 0.5),
			a.position.set(e, f),
			b.addChild(a),
			a
		);
	}
}
class createRadialGradient {
	constructor({
		name: a,
		p: b,
		center: c = [0, 0],
		radius: d = 100,
		w: e = 200,
		h: f = 200,
		points: g = [0, 1],
		colors: h = ["#000000"],
		x: j = 0,
		y: k = 0,
		alpha: l = 1,
		visible: m = !0,
	}) {
		let n = document.createElement("canvas");
		(n.width = e), (n.height = f);
		let o = n.getContext("2d"),
			p = o.createRadialGradient(c[0], c[1], 0, c[0], c[1], d),
			q = "#000000";
		g.forEach((a, b) => {
			void 0 !== h[b] && (q = h[b]), p.addColorStop(a, q);
		}),
			(o.fillStyle = p),
			o.fillRect(0, 0, n.width, n.height);
		let r = PIXI.Texture.from(n);
		return (
			(a = new PIXI.Sprite(r)),
			a.anchor.set(0.5, 0.5),
			a.position.set(j, k),
			(a.alpha = l),
			(a.visible = m),
			b.addChild(a),
			a
		);
	}
}
const SaveObject = (a) => {
		(a.m_x = a.x),
			(a.m_y = a.y),
			(a.m_scaleX = a.scale.x),
			(a.m_scaleY = a.scale.y),
			(a.m_rotation = a.rotation),
			(a.m_alpha = a.alpha),
			(a.m_visible = a.visible),
			(a.gs_an_x = 0),
			(a.gs_an_y = 0),
			(a.gs_an_scaleX = 0),
			(a.gs_an_scaleY = 0),
			(a.gs_an_rotation = 0);
	},
	RebootObject = (a) => {
		gsap.killTweensOf(a),
			gsap.killTweensOf(a.scale),
			(a.x = a.m_x),
			(a.y = a.m_y),
			(a.scale.x = a.m_scaleX),
			(a.scale.y = a.m_scaleY),
			(a.rotation = a.rotation),
			(a.alpha = a.m_alpha),
			(a.visible = a.m_visible);
	},
	DistancePointToPoint = (a, b, c, d) =>
		Math.sqrt((a - c) * (a - c) + (b - d) * (b - d)),
	PlaySound = (a) => {
		appSounds[a].play();
	},
	SortZ = (c, a) => (c._z < a._z ? -1 : c._z > a._z ? 1 : 0),
	InitPixi = () => {
		(appObj.canvasWidth = Math.ceil(window.innerWidth)),
			(appObj.canvasHeight = Math.ceil(window.innerHeight)),
			(AppCanvas.id = "AppCanvas"),
			(AppCanvas.width = appObj.canvasWidth),
			(AppCanvas.height = appObj.canvasHeight),
			(renderer = new PIXI.autoDetectRenderer({
				width: appObj.canvasWidth,
				height: appObj.canvasHeight,
				view: AppCanvas,
				transparent: !0,
				antialias: !1,
			})),
			document.getElementById("pixi").append(renderer.view),
			(stage = new PIXI.Container()),
			stage.position.set(
				Math.ceil(0.5 * appObj.canvasWidth),
				Math.ceil(0.5 * appObj.canvasHeight)
			);
	},
	RandomInteger = (a, b) => {
		let c = a + Math.random() * (b + 1 - a);
		return Math.floor(c);
	};
let idRandomCash = 0;
const aRandomCash = [
		0.55, 0.86, 0.065, 0.408, 0.423, 0.628, 0.672, 0.634, 0.671, 0.794, 0.328,
		0.649, 0.172, 0.531, 0.803, 0.583, 0.528, 0.527, 0.396, 0.153, 0.198, 0.418,
		0.021, 0.712, 0.553, 0.03, 0.811, 0.495, 0.186, 0.119, 0.421, 0.039, 0.889,
		0.345, 0.889, 0.161, 0.931, 0.358, 0.762, 0.254, 0.729, 0.568, 0.979, 0.607,
		0.894, 0.616, 0.841, 0.128, 0.05, 0.856, 0.997, 0.543, 0.841, 0.877, 0.563,
		0.358, 0.853, 0.906, 0.115, 0.339, 0.788, 0.988, 0.326, 0.123, 0.413, 0.308,
		0.723, 0.121, 0.762, 0.916, 0.406, 0.491, 0.942, 0.7, 0.554, 0.958, 0.562,
		0.182, 0.956, 0.056, 0.867, 0.692, 0.26, 0.215, 0.801, 0.668, 0.168, 0.17,
		0.977, 0.876, 0.088, 0.296, 0.116, 0.904, 0.498, 0.056, 0.062, 0.008, 0.335,
		0.392, 0.67, 0.697, 0.647, 0.87, 0.648, 0.529, 0.6, 0.583, 0.689, 0.176,
		0.722, 0.612, 0.005, 0.218, 0.33, 0.401, 0.004, 0.344, 0.066, 0.517, 0.038,
		0.307, 0.183, 0.03, 0.272, 0.591, 0.846, 0.403, 0.581, 0.34, 0.094, 0.49,
		0.167, 0.26, 0.676, 0.344, 0.657, 0.147, 0.134, 0.662, 0.813, 0.213, 0.435,
		0.548, 0.676, 0.628, 0.986, 0.265, 0.539, 0.633, 0.33, 0.947, 0.354, 0.183,
		0.413, 0.479, 0.015, 0.576, 0.606, 0.723, 0.313, 0.43, 0.976, 0.37, 0.745,
		0.328, 0.599, 0.654, 0.037, 0.36, 0.826, 0.725, 0.921, 0.868, 0.503, 0.144,
		0.956, 0.281, 0.961, 0.808, 0.001, 0.206, 0.602, 0.137, 0.587, 0.848, 0.819,
		0.804, 0.857, 0.319, 0.431, 0.723, 0.993, 0.37, 0.738, 0.313, 0.331, 0.728,
		0.809, 0.101, 0.711, 0.482, 0.494, 0.545, 0.502, 0.047, 0.495, 0.224, 0.749,
		0.826, 0.554, 0.459, 0.329, 0.834, 0.239, 0.645, 0.695, 0.824, 0.651, 0.341,
		0.82, 0.724, 0.233, 0.52, 0.968, 0.035, 0.778, 0.7, 0.454, 0.153, 0.677,
		0.025, 0.825, 0.909, 0.027, 0.731, 0.616, 0.158, 0.46, 0.467, 0.23, 0.998,
		0.429, 0.481, 0.028, 0.511, 0.742, 0.379, 0.022, 0.629, 0.039, 0.985, 0.931,
		0.491, 0.057, 0.929, 0.91, 0.599, 0.741, 0.073, 0.388, 0.745, 0.359, 0.581,
		0.065, 0.633, 0.211, 0.005, 0.738, 0.992, 0.621, 0.493, 0.497, 0.575, 0.247,
		0.139, 0.549, 0.122, 0.191, 0.168, 0.329, 0.278, 0.279, 0.706, 0.252, 0.823,
		0.027, 0.592, 0.197, 0.87, 0.498, 0.903, 0.563, 0.043, 0.868, 0.648, 0.123,
		0.171, 0.982, 0.154, 0.758, 0.61, 0.301, 0.385, 0.981, 0.714, 0.69, 0.721,
		0.434, 0.857, 0.814, 0.361, 0.036, 0.672, 0.239, 0.021, 0.22, 0.871, 0.928,
		0.276, 0.846, 0.267, 0.215, 0.05, 0.422, 0.857, 0.279, 0.86, 0.676, 0.134,
		0.908, 0.738, 0.73, 0.094, 0.218, 0.978, 0.873, 0.8, 0.235, 0.059, 0.684,
		0.255, 0.584, 0.392, 0.917, 0.787, 0.431, 0.323, 0.945, 0.568, 0.5, 0.383,
		0.271, 0.613, 0.344, 0.695, 0.652, 0.22, 0.743, 0.022, 0.016, 0.269, 0.242,
		0.022, 0.826, 0.917, 0.338, 0.066, 0.126, 0.048, 0.595, 0.426, 0.604, 0.256,
		0.51, 0.574, 0.895, 0.766, 0.681, 0.717, 0.479, 0.484, 0.879, 0.666, 0.439,
		0.969, 0.542, 0.896, 0.326, 0.402, 0.232, 0.052, 0.913, 0.793, 0.446, 0.535,
		0.939, 0.125, 0.868, 0.393, 0.925, 0.771, 0.685, 0.542, 0.219, 0.051, 0.038,
		0.189, 0.994, 0.14, 0.992, 0.115, 0.046, 0.05, 0.363, 0.524, 0.793, 0.819,
		0.542, 0.173, 0.65, 0.26, 0.743, 0.773, 0.068, 0.141, 0.714, 0.836, 0.83,
		0.592, 0.086, 0.721, 0.87, 0.251, 0.849, 0.812, 0.806, 0.643, 0.878, 0.62,
		0.539, 0.51, 0.632, 0.839, 0.211, 0.838, 0.626, 0.107, 0.478, 0.753, 0.215,
		0.273, 0.647, 0.778, 0.776, 0.108, 0.66, 0.925, 0.751, 0.075, 0.369, 0.463,
		0.319, 0.841, 0.141, 0.064, 0.465, 0.152, 0.768, 0.869, 0.497, 0.822, 0.568,
		0.865, 0.725, 0.22, 0.356, 0.062, 0.843, 0.321, 0.426, 0.662, 0.772, 0.334,
		0.919, 0.747, 0.527, 0.192, 0.754, 0.442, 0.904, 0.029, 0.679, 0.975, 0.326,
		0.481, 0.661, 0.143, 0.21, 0.011, 0.476, 0.648, 0.268, 0.781, 0.262, 0.65,
		0.502, 0.917, 0.833, 0.148, 0.626, 0.898, 0.399, 0.03, 0.201, 0.92, 0.801,
		0.363, 0.354, 0.639, 0.158, 0.039, 0.196, 0.093, 0.677, 0.416, 0.954, 0.379,
		0.276, 0.701, 0.733, 0.148, 0.305, 0.48, 0.8, 0.808, 0.274, 0.553, 0.268,
		0.895, 0.703, 0.979, 0.243, 0.967, 0.857, 0.73, 0.605, 0.2, 0.415, 0.398,
		0.658, 0.363, 0.839, 0.366, 0.451, 0.375, 0.998, 0.532, 0.685, 0.289, 0.649,
		0.125, 0.299, 0.718, 0.903, 0.16, 0.284, 0.114, 0.748, 0.684, 0.455, 0.313,
		0.815, 0.831, 0.83, 0.146, 0.646, 0.707, 0.545, 0.091, 0.143, 0.174, 0.081,
		0.246, 0.001, 0.166, 0.95, 0.891, 0.58, 0.323, 0.56, 0.184, 0.185, 0.703,
		0.286, 0.035, 0.76, 0.255, 0.089, 0.083, 0.193, 0.091, 1, 0.824, 0.326,
		0.029, 0.866, 0.6, 0.905, 0.253, 0.911, 0.529, 0.023, 0.996, 0.21, 0.431,
		0.456, 0.616, 0.087, 0.126, 0.055, 0.023, 0.751, 0.807, 0.437, 0.94, 0.502,
		0.271, 0.267, 0.886, 0.195, 0.342, 0.569, 0.899, 0.421, 0.87, 0.941, 0.83,
		0.111, 0.886, 0.461, 0.165, 0.295, 0.67, 0.298, 0.719, 0.896, 0.266, 0.126,
		0.677, 0.694, 0.098, 0.764, 0.027, 0.182, 0.526, 0.218, 0.07, 0.912, 0.535,
		0.931, 0.717, 0.979, 0.827, 0.827, 0.068, 0.018, 0.99, 0.404, 0.378, 0.121,
		0.266, 0.722, 0.22, 0.333, 0.029, 0.603, 0.372, 0.881, 0.345, 0.35, 0.177,
		0.375, 0.33, 0.697, 0.364, 0.875, 0.976, 0.139, 0.895, 0.083, 0.883, 0.795,
		0.639, 0.53, 0.467, 0.437, 0.556, 0.781, 0.505, 0.956, 0.445, 0.971, 0.077,
		0.065, 0.786, 0.157, 0.039, 0.114, 0.211, 0.929, 0.19, 0.379, 0.797, 0.001,
		0.91, 0.543, 0.792, 0.364, 0.49, 0.534, 0.954, 0.01, 0.484, 0.641, 0.922,
		0.216, 0.732, 0.87, 0.808, 0.07, 0.591, 0.823, 0.805, 0.859, 0.414, 0.789,
		0.791, 0.727, 0.532, 0.296, 0.002, 0.463, 0.877, 0.969, 0.158, 0.27, 0.922,
		0.691, 0.964, 0.59, 0.67, 0.084, 0.435, 0.628, 0.037, 0.631, 0.795, 0.448,
		0.502, 0.568, 0.417, 0.049, 0.154, 0.257, 0.182, 0.536, 0.678, 0.351, 0.3,
		0.5, 0.301, 0.779, 0.8, 0.685, 0.458, 0.576, 0.888, 0.04, 0.053, 0.855,
		0.171, 0.872, 0.521, 0.118, 0.972, 0.301, 0.651, 0.863, 0.009, 0.907, 0.447,
		0.981, 0.534, 0.559, 0.508, 0.216, 0.098, 0.583, 0.792, 0.659, 0.357, 0.819,
		0.334, 0.256, 0.553, 0.675, 0.158, 0.637, 0.748, 0.297, 0.17, 0.332, 0.817,
		0.057, 0.154, 0.282, 0.299, 0.678, 0.626, 0.731, 0.134, 0.882, 0.562, 0.817,
		0.672, 0.819, 0.671, 0.607, 0.219, 0.399, 0.51, 0.179, 0.821, 0.612, 0.646,
		0.204, 0.769, 0.489, 0.177, 0.654, 0.021, 0.178, 0.393, 0.732, 0.203, 0.43,
		0.645, 0.917, 0.325, 0.209, 0.221, 0.947, 0.158, 0.922, 0.072, 0.153, 0.07,
		0.734, 0.316, 0.871, 0.067, 0.295, 0.244, 0.217, 0.109, 0.83, 0.736, 0.042,
		0.332, 0.623, 0.625, 0.697, 0.032, 0.809, 0.861, 0.385, 0.562, 0.76, 0.171,
		0.8, 0.947, 0.059, 0.243, 0.445, 0.924, 0.884, 0.616, 0.612, 0.027, 0.721,
		0.611, 0.736, 0.658, 0.352, 0.82, 0.71, 0.245, 0.656, 0.456, 0.766, 0.513,
		0.596, 0.467, 0.29, 0.532, 0.562, 0.985, 0.314, 0.099, 0.204, 0.014, 0.084,
		0.543, 0.6, 0.238, 0.714, 0.015, 0.928, 0.493, 0.127, 0.78, 0.68, 0.88,
		0.198, 0.113, 0.857, 0.371, 0.153, 0.344, 0.36, 0.653, 0.731, 0.845, 0.651,
		0.532, 0.894, 0.321, 0.23, 0.876, 0.117, 0.52, 0.128, 0.793, 0.323, 0.999,
		0.732, 0.45, 0.348, 0.995, 0.014, 0.554, 0.474, 0.121, 0.803, 0.247, 0.929,
		0.398, 0.298, 0.871, 0.287, 0.055, 0.082, 0.89, 0.892, 0.467, 0.132, 0.251,
		0.212, 0.999, 0.773, 0.556, 0.621, 0.014, 0.875, 0.694, 0.3, 0.165, 0.552,
		0.574, 0.911, 0.708, 0.714, 0.328, 0.756, 0.658, 0.752, 0.126, 0.762, 0.631,
		0.198, 0.154, 0.797, 0.717, 0.764, 0.654, 0.559, 0.127, 0.543, 0.669,
	],
	RandomCash = () => (
		idRandomCash++,
		idRandomCash == aRandomCash.length && (idRandomCash = 0),
		aRandomCash[idRandomCash]
	);
let seedRandom = 6;
const Random = (a) => {
		(a = a || 1), (seedRandom = (9301 * seedRandom + 49297) % 233280);
		let b = seedRandom / 233280;
		return (b = Math.round(b * a)), b == a && b--, b;
	},
	MixArray = (a) => {
		for (let b, c, d = a.length; 0 !== d; )
			(c = Math.floor(Math.random() * d)),
				(d -= 1),
				(b = a[d]),
				(a[d] = a[c]),
				(a[c] = b);
		return a;
	},
	isSafari = () => {
		let a = navigator.userAgent.toLowerCase();
		return -1 != a.indexOf("safari") && !(-1 < a.indexOf("chrome"));
	};
let raf_lastTime = 0,
	raf_vendors = ["ms", "moz", "webkit", "o"];
for (var x = 0; x < raf_vendors.length && !window.requestAnimationFrame; ++x)
	(window.requestAnimationFrame =
		window[raf_vendors[x] + "RequestAnimationFrame"]),
		(window.cancelAnimationFrame =
			window[raf_vendors[x] + "CancelAnimationFrame"] ||
			window[raf_vendors[x] + "CancelRequestAnimationFrame"]);
window.requestAnimationFrame ||
	(window.requestAnimationFrame = function (a) {
		let b = new Date().getTime(),
			c = Math.max(0, 16 - (b - raf_lastTime)),
			d = window.setTimeout(function () {
				a(b + c);
			}, c);
		return (raf_lastTime = b + c), d;
	}),
	window.cancelAnimationFrame ||
		(window.cancelAnimationFrame = function (a) {
			clearTimeout(a);
		});
let hidden, state, visibilityChange;
"undefined" == typeof document.hidden
	? "undefined" == typeof document.mozHidden
		? "undefined" == typeof document.msHidden
			? "undefined" != typeof document.webkitHidden &&
			  ((hidden = "webkitHidden"),
			  (visibilityChange = "webkitvisibilitychange"),
			  (state = "webkitVisibilityState"))
			: ((hidden = "msHidden"),
			  (visibilityChange = "msvisibilitychange"),
			  (state = "msVisibilityState"))
		: ((hidden = "mozHidden"),
		  (visibilityChange = "mozvisibilitychange"),
		  (state = "mozVisibilityState"))
	: ((hidden = "hidden"),
	  (visibilityChange = "visibilitychange"),
	  (state = "visibilityState"));
const canvasVisibilityChange = () => {
	if (document[hidden] || "hidden" == document[state])
		try {
			Howler.mute(!0);
		} catch (a) {}
	else isGlobalSound && Howler.mute(!1);
};
document.addEventListener(visibilityChange, canvasVisibilityChange, !1),
	window.addEventListener(visibilityChange, canvasVisibilityChange, !1);
