// @ts-nocheck
/* eslint-disable */
// https :https://esm.sh/v135/@motionone/utils@10.18.0/esnext/utils.mjs
function h(o, r,) {
  o.indexOf(r,) === -1 && o.push(r,);
}
var x = (o, r, e2,) => Math.min(Math.max(e2, o,), r,);
var b = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease', };
var s = (o,) => typeof o == 'number';
var a = (o,) => Array.isArray(o,) && !s(o[0],);
var l = (o, r, e2,) => {
  let t2 = r - o;
  return ((e2 - o) % t2 + t2) % t2 + o;
};
function g(o, r,) {
  return a(o,) ? o[l(0, o.length, r,)] : o;
}
var i = (o, r, e2,) => -e2 * o + e2 * r + o;
var O = () => {
};
var u = (o,) => o;
var f = (o, r, e2,) => r - o === 0 ? 1 : (e2 - o) / (r - o);
function m(o, r,) {
  let e2 = o[o.length - 1];
  for (let t2 = 1; t2 <= r; t2++) {
    let p = f(0, r, t2,);
    o.push(i(e2, 1, p,),);
  }
}
function d(o,) {
  let r = [0,];
  return m(r, o - 1,), r;
}
function S(o, r = d(o.length,), e2 = u,) {
  let t2 = o.length, p = t2 - r.length;
  return p > 0 && m(r, p,), (y,) => {
    let n = 0;
    for (; n < t2 - 2 && !(y < r[n + 1]); n++);
    let c = x(0, 1, f(r[n], r[n + 1], y,),);
    return c = g(e2, n,)(c,), i(o[n], o[n + 1], c,);
  };
}
var A = (o,) => Array.isArray(o,) && s(o[0],);
var F = (o,) => typeof o == 'object' && !!o.createAnimation;
var I = (o,) => typeof o == 'function';
var v = (o,) => typeof o == 'string';
var N = { ms: (o,) => o * 1e3, s: (o,) => o / 1e3, };
function R(o, r,) {
  return r ? o * (1e3 / r) : 0;
}

// https :https://esm.sh/v135/@motionone/easing@10.18.0/esnext/easing.mjs
var s2 = (n, e2, t2,) => (((1 - 3 * t2 + 3 * e2) * n + (3 * t2 - 6 * e2)) * n + 3 * e2) * n;
var f2 = 1e-7;
var d2 = 12;
function b2(n, e2, t2, r, o,) {
  let i2, c, u2 = 0;
  do c = e2 + (t2 - e2) / 2, i2 = s2(c, r, o,) - n, i2 > 0 ? t2 = c : e2 = c; while (Math.abs(i2,) > f2 && ++u2 < d2);
  return c;
}
function l2(n, e2, t2, r,) {
  if (n === e2 && t2 === r) return u;
  let o = (i2,) => b2(i2, 0, 1, n, t2,);
  return (i2,) => i2 === 0 || i2 === 1 ? i2 : s2(o(i2,), e2, r,);
}
var h2 = (n, e2 = 'end',) => (t2,) => {
  t2 = e2 === 'end' ? Math.min(t2, 0.999,) : Math.max(t2, 1e-3,);
  let r = t2 * n, o = e2 === 'end' ? Math.floor(r,) : Math.ceil(r,);
  return x(0, 1, o / n,);
};

// https :https://esm.sh/v135/@motionone/animation@10.18.0/esnext/animation.mjs
var w = {
  ease: l2(0.25, 0.1, 0.25, 1,),
  'ease-in': l2(0.42, 0, 1, 1,),
  'ease-in-out': l2(0.42, 0, 0.58, 1,),
  'ease-out': l2(0, 0, 0.58, 1,),
};
var M = /\((.*?)\)/;
function m2(s3,) {
  if (I(s3,)) return s3;
  if (A(s3,)) return l2(...s3,);
  let t2 = w[s3];
  if (t2) return t2;
  if (s3.startsWith('steps',)) {
    let a2 = M.exec(s3,);
    if (a2) {
      let e2 = a2[1].split(',',);
      return h2(parseFloat(e2[0],), e2[1].trim(),);
    }
  }
  return u;
}
var T = class {
  constructor(
    t2,
    a2 = [0, 1,],
    {
      easing: e2,
      duration: l3 = b.duration,
      delay: p = b.delay,
      endDelay: S4 = b.endDelay,
      repeat: R3 = b.repeat,
      offset: A2,
      direction: c = 'normal',
      autoplay: x3 = true,
    } = {},
  ) {
    if (
      this.startTime = null,
        this.rate = 1,
        this.t = 0,
        this.cancelTimestamp = null,
        this.easing = u,
        this.duration = 0,
        this.totalDuration = 0,
        this.repeat = 0,
        this.playState = 'idle',
        this.finished = new Promise((r, h4,) => {
          this.resolve = r, this.reject = h4;
        },),
        e2 = e2 || b.easing,
        F(e2,)
    ) {
      let r = e2.createAnimation(a2,);
      e2 = r.easing, a2 = r.keyframes || a2, l3 = r.duration || l3;
    }
    this.repeat = R3, this.easing = a(e2,) ? u : m2(e2,), this.updateDuration(l3,);
    let E2 = S(a2, A2, a(e2,) ? e2.map(m2,) : u,);
    this.tick = (r,) => {
      var h4;
      p = p;
      let i2 = 0;
      this.pauseTime !== void 0 ? i2 = this.pauseTime : i2 = (r - this.startTime) * this.rate,
        this.t = i2,
        i2 /= 1e3,
        i2 = Math.max(i2 - p, 0,),
        this.playState === 'finished' && this.pauseTime === void 0 && (i2 = this.totalDuration);
      let f3 = i2 / this.duration, g2 = Math.floor(f3,), n = f3 % 1;
      !n && f3 >= 1 && (n = 1), n === 1 && g2--;
      let y = g2 % 2;
      (c === 'reverse' || c === 'alternate' && y || c === 'alternate-reverse' && !y) && (n = 1 - n);
      let q3 = i2 >= this.totalDuration ? 1 : Math.min(n, 1,), v2 = E2(this.easing(q3,),);
      t2(v2,),
        this.pauseTime === void 0 && (this.playState === 'finished' || i2 >= this.totalDuration + S4)
          ? (this.playState = 'finished', (h4 = this.resolve) === null || h4 === void 0 || h4.call(this, v2,))
          : this.playState !== 'idle' && (this.frameRequestId = requestAnimationFrame(this.tick,));
    }, x3 && this.play();
  }
  play() {
    let t2 = performance.now();
    this.playState = 'running',
      this.pauseTime !== void 0 ? this.startTime = t2 - this.pauseTime : this.startTime || (this.startTime = t2),
      this.cancelTimestamp = this.startTime,
      this.pauseTime = void 0,
      this.frameRequestId = requestAnimationFrame(this.tick,);
  }
  pause() {
    this.playState = 'paused', this.pauseTime = this.t;
  }
  finish() {
    this.playState = 'finished', this.tick(0,);
  }
  stop() {
    var t2;
    this.playState = 'idle',
      this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId,),
      (t2 = this.reject) === null || t2 === void 0 || t2.call(this, false,);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp,);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(t2,) {
    this.duration = t2, this.totalDuration = t2 * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2,) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t2 : this.startTime = performance.now() - t2 / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t2,) {
    this.rate = t2;
  }
};

// https :https://esm.sh/v135/hey-listen@1.0.8/esnext/hey-listen.mjs
var e = function () {
};

// https :https://esm.sh/v135/@motionone/types@10.17.1/esnext/types.mjs
var t = class {
  setAnimation(i2,) {
    this.animation = i2,
      i2?.finished.then(() => this.clearAnimation()).catch(() => {
      },);
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// https :https://esm.sh/v135/tslib@2.6.2/esnext/tslib.mjs
function S2(e2, t2,) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r,) && t2.indexOf(r,) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == 'function') {
    for (var i2 = 0, r = Object.getOwnPropertySymbols(e2,); i2 < r.length; i2++) {
      t2.indexOf(r[i2],) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[i2],) && (n[r[i2]] = e2[r[i2]]);
    }
  }
  return n;
}

// https :https://esm.sh/v135/@motionone/generators@10.18.0/esnext/generators.mjs
var S3 = 5;
function x2(t2, o, r,) {
  let s3 = Math.max(o - S3, 0,);
  return R(r - t2(s3,), o - s3,);
}
var h3 = { stiffness: 100, damping: 10, mass: 1, };
var w2 = (t2 = h3.stiffness, o = h3.damping, r = h3.mass,) => o / (2 * Math.sqrt(t2 * r,));
function k(t2, o, r,) {
  return t2 < o && r >= o || t2 > o && r <= o;
}
var V = (
  {
    stiffness: t2 = h3.stiffness,
    damping: o = h3.damping,
    mass: r = h3.mass,
    from: s3 = 0,
    to: n = 1,
    velocity: u2 = 0,
    restSpeed: l3,
    restDistance: d3,
  } = {},
) => {
  u2 = u2 ? N.s(u2,) : 0;
  let c = { done: false, hasReachedTarget: false, current: s3, target: n, },
    p = n - s3,
    m3 = Math.sqrt(t2 / r,) / 1e3,
    a2 = w2(t2, o, r,),
    T2 = Math.abs(p,) < 5;
  l3 || (l3 = T2 ? 0.01 : 2), d3 || (d3 = T2 ? 5e-3 : 0.5);
  let M3;
  if (a2 < 1) {
    let i2 = m3 * Math.sqrt(1 - a2 * a2,);
    M3 = (f3,) => n - Math.exp(-a2 * m3 * f3,) * ((-u2 + a2 * m3 * p) / i2 * Math.sin(i2 * f3,) + p * Math.cos(i2 * f3,));
  } else M3 = (i2,) => n - Math.exp(-m3 * i2,) * (p + (-u2 + m3 * p) * i2);
  return (i2,) => {
    c.current = M3(i2,);
    let f3 = i2 === 0 ? u2 : x2(M3, i2, c.current,), g2 = Math.abs(f3,) <= l3, y = Math.abs(n - c.current,) <= d3;
    return c.done = g2 && y, c.hasReachedTarget = k(s3, n, c.current,), c;
  };
};
var L = (
  {
    from: t2 = 0,
    velocity: o = 0,
    power: r = 0.8,
    decay: s3 = 0.325,
    bounceDamping: n,
    bounceStiffness: u2,
    changeTarget: l3,
    min: d3,
    max: c,
    restDistance: p = 0.5,
    restSpeed: m3,
  },
) => {
  s3 = N.ms(s3,);
  let a2 = { hasReachedTarget: false, done: false, current: t2, target: t2, },
    T2 = (e2,) => d3 !== void 0 && e2 < d3 || c !== void 0 && e2 > c,
    M3 = (e2,) => d3 === void 0 ? c : c === void 0 || Math.abs(d3 - e2,) < Math.abs(c - e2,) ? d3 : c,
    i2 = r * o,
    f3 = t2 + i2,
    g2 = l3 === void 0 ? f3 : l3(f3,);
  a2.target = g2, g2 !== f3 && (i2 = g2 - t2);
  let y = (e2,) => -i2 * Math.exp(-e2 / s3,),
    D = (e2,) => g2 + y(e2,),
    G = (e2,) => {
      let b3 = y(e2,), K2 = D(e2,);
      a2.done = Math.abs(b3,) <= p, a2.current = a2.done ? g2 : K2;
    },
    R3,
    B2,
    F2 = (e2,) => {
      T2(a2.current,) &&
        (R3 = e2,
          B2 = V({
            from: a2.current,
            to: M3(a2.current,),
            velocity: x2(D, e2, a2.current,),
            damping: n,
            stiffness: u2,
            restDistance: p,
            restSpeed: m3,
          },));
    };
  return F2(0,), (e2,) => {
    let b3 = false;
    return !B2 && R3 === void 0 && (b3 = true, G(e2,), F2(e2,)),
      R3 !== void 0 && e2 > R3 ? (a2.hasReachedTarget = true, B2(e2 - R3,)) : (a2.hasReachedTarget = false, !b3 && G(e2,), a2);
  };
};
var q = 10;
var $ = 1e4;
function j(t2, o = u,) {
  let r, s3 = q, n = t2(0,), u2 = [o(n.current,),];
  for (; !n.done && s3 < $;) {
    n = t2(s3,), u2.push(o(n.done ? n.target : n.current,),), r === void 0 && n.hasReachedTarget && (r = s3), s3 += q;
  }
  let l3 = s3 - q;
  return u2.length === 1 && u2.push(n.current,), { keyframes: u2, duration: l3 / 1e3, overshootDuration: (r ?? l3) / 1e3, };
}

// https :https://esm.sh/v135/@motionone/dom@10.18.0/esnext/dom.mjs
var ft = /* @__PURE__ */ new WeakMap();
function j2(t2,) {
  return ft.has(t2,) || ft.set(t2, { transforms: [], values: /* @__PURE__ */ new Map(), },), ft.get(t2,);
}
function Vt(t2, e2,) {
  return t2.has(e2,) || t2.set(e2, new t(),), t2.get(e2,);
}
var he = ['', 'X', 'Y', 'Z',];
var ve = ['translate', 'scale', 'rotate', 'skew',];
var z = { x: 'translateX', y: 'translateY', z: 'translateZ', };
var Wt = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t2,) => t2 + 'deg', };
var ye = {
  translate: { syntax: '<length-percentage>', initialValue: '0px', toDefaultUnit: (t2,) => t2 + 'px', },
  rotate: Wt,
  scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: u, },
  skew: Wt,
};
var L2 = /* @__PURE__ */ new Map();
var H = (t2,) => `--motion-${t2}`;
var Y = ['x', 'y', 'z',];
ve.forEach((t2,) => {
  he.forEach((e2,) => {
    Y.push(t2 + e2,), L2.set(H(t2 + e2,), ye[t2],);
  },);
},);
var xe = (t2, e2,) => Y.indexOf(t2,) - Y.indexOf(e2,);
var we = new Set(Y,);
var $2 = (t2,) => we.has(t2,);
var Mt = (t2, e2,) => {
  z[e2] && (e2 = z[e2]);
  let { transforms: n, } = j2(t2,);
  h(n, e2,), t2.style.transform = lt(n,);
};
var lt = (t2,) => t2.sort(xe,).reduce(Ee, '',).trim();
var Ee = (t2, e2,) => `${t2} ${e2}(var(${H(e2,)}))`;
var R2 = (t2,) => t2.startsWith('--',);
var Pt = /* @__PURE__ */ new Set();
function Nt(t2,) {
  if (!Pt.has(t2,)) {
    Pt.add(t2,);
    try {
      let { syntax: e2, initialValue: n, } = L2.has(t2,) ? L2.get(t2,) : {};
      CSS.registerProperty({ name: t2, inherits: false, syntax: e2, initialValue: n, },);
    } catch {
    }
  }
}
var mt = (t2, e2,) => document.createElement('div',).animate(t2, e2,);
var It = {
  cssRegisterProperty: () => typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty',),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate',),
  partialKeyframes: () => {
    try {
      mt({ opacity: [1,], },);
    } catch {
      return false;
    }
    return true;
  },
  finished: () => !!mt({ opacity: [0, 1,], }, { duration: 1e-3, },).finished,
  linearEasing: () => {
    try {
      mt({ opacity: 0, }, { easing: 'linear(0, 1)', },);
    } catch {
      return false;
    }
    return true;
  },
};
var ut = {};
var V2 = {};
for (let t2 in It) V2[t2] = () => (ut[t2] === void 0 && (ut[t2] = It[t2]()), ut[t2]);
var Te = 0.015;
var Le = (t2, e2,) => {
  let n = '', r = Math.round(e2 / Te,);
  for (let o = 0; o < r; o++) n += t2(f(0, r - 1, o,),) + ', ';
  return n.substring(0, n.length - 2,);
};
var pt = (t2, e2,) => I(t2,) ? V2.linearEasing() ? `linear(${Le(t2, e2,)})` : b.easing : A(t2,) ? De(t2,) : t2;
var De = ([t2, e2, n, r,],) => `cubic-bezier(${t2}, ${e2}, ${n}, ${r})`;
function _t(t2, e2,) {
  for (let n = 0; n < t2.length; n++) t2[n] === null && (t2[n] = n ? t2[n - 1] : e2());
  return t2;
}
var J = (t2,) => Array.isArray(t2,) ? t2 : [t2,];
function W(t2,) {
  return z[t2] && (t2 = z[t2]), $2(t2,) ? H(t2,) : t2;
}
var M2 = {
  get: (t2, e2,) => {
    e2 = W(e2,);
    let n = R2(e2,) ? t2.style.getPropertyValue(e2,) : getComputedStyle(t2,)[e2];
    if (!n && n !== 0) {
      let r = L2.get(e2,);
      r && (n = r.initialValue);
    }
    return n;
  },
  set: (t2, e2, n,) => {
    e2 = W(e2,), R2(e2,) ? t2.style.setProperty(e2, n,) : t2.style[e2] = n;
  },
};
function Q(t2, e2 = true,) {
  if (!(!t2 || t2.playState === 'finished')) {
    try {
      t2.stop ? t2.stop() : (e2 && t2.commitStyles(), t2.cancel());
    } catch {
    }
  }
}
function tt(t2, e2,) {
  var n;
  let r = e2?.toDefaultUnit || u, o = t2[t2.length - 1];
  if (v(o,)) {
    let i2 = ((n = o.match(/(-?[\d.]+)([a-z%]*)/,)) === null || n === void 0 ? void 0 : n[2]) || '';
    i2 && (r = (s3,) => s3 + i2);
  }
  return r;
}
function We() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function B(t2, e2, n, r = {}, o,) {
  let i2 = We(),
    s3 = r.record !== false && i2,
    l3,
    {
      duration: u2 = b.duration,
      delay: a2 = b.delay,
      endDelay: c = b.endDelay,
      repeat: d3 = b.repeat,
      easing: f3 = b.easing,
      persist: O2 = false,
      direction: S4,
      offset: m3,
      allowWebkitAcceleration: g2 = false,
      autoplay: x3 = true,
    } = r,
    A2 = j2(t2,),
    w3 = $2(e2,),
    T2 = V2.waapi();
  w3 && Mt(t2, e2,);
  let E2 = W(e2,), b3 = Vt(A2.values, E2,), p = L2.get(E2,);
  return Q(b3.animation, !(F(f3,) && b3.generator) && r.record !== false,), () => {
    let v2 = () => {
        var y, C;
        return (C = (y = M2.get(t2, E2,)) !== null && y !== void 0 ? y : p?.initialValue) !== null && C !== void 0 ? C : 0;
      },
      h4 = _t(J(n,), v2,),
      _ = tt(h4, p,);
    if (F(f3,)) {
      let y = f3.createAnimation(h4, e2 !== 'opacity', v2, E2, b3,);
      f3 = y.easing, h4 = y.keyframes || h4, u2 = y.duration || u2;
    }
    if (
      R2(E2,) && (V2.cssRegisterProperty() ? Nt(E2,) : T2 = false),
        w3 && !V2.linearEasing() && (I(f3,) || a(f3,) && f3.some(I,)) && (T2 = false),
        T2
    ) {
      p && (h4 = h4.map((D,) => s(D,) ? p.toDefaultUnit(D,) : D)), h4.length === 1 && (!V2.partialKeyframes() || s3) && h4.unshift(v2(),);
      let y = {
        delay: N.ms(a2,),
        duration: N.ms(u2,),
        endDelay: N.ms(c,),
        easing: a(f3,) ? void 0 : pt(f3, u2,),
        direction: S4,
        iterations: d3 + 1,
        fill: 'both',
      };
      l3 = t2.animate({ [E2]: h4, offset: m3, easing: a(f3,) ? f3.map((D,) => pt(D, u2,)) : void 0, }, y,),
        l3.finished || (l3.finished = new Promise((D, X,) => {
          l3.onfinish = D, l3.oncancel = X;
        },));
      let C = h4[h4.length - 1];
      l3.finished.then(() => {
        O2 || (M2.set(t2, E2, C,), l3.cancel());
      },).catch(O,), g2 || (l3.playbackRate = 1.000001);
    } else if (o && w3) {
      h4 = h4.map((y,) => typeof y == 'string' ? parseFloat(y,) : y),
        h4.length === 1 && h4.unshift(parseFloat(v2(),),),
        l3 = new o(
          (y,) => {
            M2.set(t2, E2, _ ? _(y,) : y,);
          },
          h4,
          Object.assign(Object.assign({}, r,), { duration: u2, easing: f3, },),
        );
    } else {
      let y = h4[h4.length - 1];
      M2.set(t2, E2, p && s(y,) ? p.toDefaultUnit(y,) : y,);
    }
    return s3 && i2(t2, e2, h4, { duration: u2, delay: a2, easing: f3, repeat: d3, offset: m3, }, 'motion-one',),
      b3.setAnimation(l3,),
      l3 && !x3 && l3.pause(),
      l3;
  };
}
var U = (t2, e2,) => t2[e2] ? Object.assign(Object.assign({}, t2,), t2[e2],) : Object.assign({}, t2,);
function P(t2, e2,) {
  var n;
  return typeof t2 == 'string'
    ? e2
      ? ((n = e2[t2]) !== null && n !== void 0 || (e2[t2] = document.querySelectorAll(t2,)), t2 = e2[t2])
      : t2 = document.querySelectorAll(t2,)
    : t2 instanceof Element && (t2 = [t2,]),
    Array.from(t2 || [],);
}
var Ne = (t2,) => t2();
var K = (t2, e2, n = b.duration,) => new Proxy({ animations: t2.map(Ne,).filter(Boolean,), duration: n, options: e2, }, _e,);
var Ie = (t2,) => t2.animations[0];
var _e = {
  get: (t2, e2,) => {
    let n = Ie(t2,);
    switch (e2) {
      case 'duration':
        return t2.duration;
      case 'currentTime':
        return N.s(n?.[e2] || 0,);
      case 'playbackRate':
      case 'playState':
        return n?.[e2];
      case 'finished':
        return t2.finished || (t2.finished = Promise.all(t2.animations.map(Be,),).catch(O,)), t2.finished;
      case 'stop':
        return () => {
          t2.animations.forEach((r,) => Q(r,));
        };
      case 'forEachNative':
        return (r,) => {
          t2.animations.forEach((o,) => r(o, t2,));
        };
      default:
        return typeof n?.[e2] > 'u' ? void 0 : () => t2.animations.forEach((r,) => r[e2]());
    }
  },
  set: (t2, e2, n,) => {
    switch (e2) {
      case 'currentTime':
        n = N.ms(n,);
      case 'playbackRate':
        for (let r = 0; r < t2.animations.length; r++) t2.animations[r][e2] = n;
        return true;
    }
    return false;
  },
};
var Be = (t2,) => t2.finished;
function et(t2, e2, n,) {
  return I(t2,) ? t2(e2, n,) : t2;
}
function ht(t2,) {
  return function (n, r, o = {},) {
    n = P(n,);
    let i2 = n.length;
    e(!!i2, 'No valid element provided.',), e(!!r, 'No keyframes defined.',);
    let s3 = [];
    for (let l3 = 0; l3 < i2; l3++) {
      let u2 = n[l3];
      for (let a2 in r) {
        let c = U(o, a2,);
        c.delay = et(c.delay, l3, i2,);
        let d3 = B(u2, a2, r[a2], c, t2,);
        s3.push(d3,);
      }
    }
    return K(s3, o, o.duration,);
  };
}
var Ge = ht(T,);
function Gt(t2,) {
  return s(t2,) && !isNaN(t2,);
}
function xt(t2,) {
  return v(t2,) ? parseFloat(t2,) : t2;
}
function nt(t2,) {
  let e2 = /* @__PURE__ */ new WeakMap();
  return (n = {},) => {
    let r = /* @__PURE__ */ new Map(),
      o = (s3 = 0, l3 = 100, u2 = 0, a2 = false,) => {
        let c = `${s3}-${l3}-${u2}-${a2}`;
        return r.has(c,) || r.set(c, t2(Object.assign({ from: s3, to: l3, velocity: u2, }, n,),),), r.get(c,);
      },
      i2 = (s3, l3,) => (e2.has(s3,) || e2.set(s3, j(s3, l3,),), e2.get(s3,));
    return {
      createAnimation: (s3, l3 = true, u2, a2, c,) => {
        let d3, f3, O2, S4 = 0, m3 = u, g2 = s3.length;
        if (l3) {
          m3 = tt(s3, a2 ? L2.get(W(a2,),) : void 0,);
          let x3 = s3[g2 - 1];
          if (O2 = xt(x3,), g2 > 1 && s3[0] !== null) f3 = xt(s3[0],);
          else {
            let A2 = c?.generator;
            if (A2) {
              let { animation: w3, generatorStartTime: T2, } = c,
                E2 = w3?.startTime || T2 || 0,
                b3 = w3?.currentTime || performance.now() - E2,
                p = A2(b3,).current;
              f3 = p, S4 = x2((v2,) => A2(v2,).current, b3, p,);
            } else u2 && (f3 = xt(u2(),));
          }
        }
        if (Gt(f3,) && Gt(O2,)) {
          let x3 = o(f3, O2, S4, a2?.includes('scale',),);
          d3 = Object.assign(Object.assign({}, i2(x3, m3,),), { easing: 'linear', },),
            c && (c.generator = x3, c.generatorStartTime = performance.now());
        }
        return d3 || (d3 = { easing: 'ease', duration: i2(o(0, 100,),).overshootDuration, }), d3;
      },
    };
  };
}
var hn = nt(V,);
var yn = nt(L,);
var wn = { any: 0, all: 1, };
function wt(t2, e2, { root: n, margin: r, amount: o = 'any', } = {},) {
  if (typeof IntersectionObserver > 'u') {
    return () => {
    };
  }
  let i2 = P(t2,),
    s3 = /* @__PURE__ */ new WeakMap(),
    l3 = (a2,) => {
      a2.forEach((c,) => {
        let d3 = s3.get(c.target,);
        if (c.isIntersecting !== !!d3) {
          if (c.isIntersecting) {
            let f3 = e2(c,);
            I(f3,) ? s3.set(c.target, f3,) : u2.unobserve(c.target,);
          } else d3 && (d3(c,), s3.delete(c.target,));
        }
      },);
    },
    u2 = new IntersectionObserver(l3, { root: n, rootMargin: r, threshold: typeof o == 'number' ? o : wn[o], },);
  return i2.forEach((a2,) => u2.observe(a2,)), () => u2.disconnect();
}
var rt = /* @__PURE__ */ new WeakMap();
var N2;
function En(t2, e2,) {
  if (e2) {
    let { inlineSize: n, blockSize: r, } = e2[0];
    return { width: n, height: r, };
  } else return t2 instanceof SVGElement && 'getBBox' in t2 ? t2.getBBox() : { width: t2.offsetWidth, height: t2.offsetHeight, };
}
function Sn({ target: t2, contentRect: e2, borderBoxSize: n, },) {
  var r;
  (r = rt.get(t2,)) === null || r === void 0 || r.forEach((o,) => {
    o({
      target: t2,
      contentSize: e2,
      get size() {
        return En(t2, n,);
      },
    },);
  },);
}
function bn(t2,) {
  t2.forEach(Sn,);
}
function On() {
  typeof ResizeObserver > 'u' || (N2 = new ResizeObserver(bn,));
}
function Kt(t2, e2,) {
  N2 || On();
  let n = P(t2,);
  return n.forEach((r,) => {
    let o = rt.get(r,);
    o || (o = /* @__PURE__ */ new Set(), rt.set(r, o,)), o.add(e2,), N2?.observe(r,);
  },),
    () => {
      n.forEach((r,) => {
        let o = rt.get(r,);
        o?.delete(e2,), o?.size || N2?.unobserve(r,);
      },);
    };
}
var ot = /* @__PURE__ */ new Set();
var q2;
function An() {
  q2 = () => {
    let t2 = { width: window.innerWidth, height: window.innerHeight, }, e2 = { target: window, size: t2, contentSize: t2, };
    ot.forEach((n,) => n(e2,));
  }, window.addEventListener('resize', q2,);
}
function qt(t2,) {
  return ot.add(t2,), q2 || An(), () => {
    ot.delete(t2,), !ot.size && q2 && (q2 = void 0);
  };
}
function Et(t2, e2,) {
  return I(t2,) ? qt(t2,) : Kt(t2, e2,);
}
function Z(t2, e2, n,) {
  t2.dispatchEvent(new CustomEvent(e2, { detail: { originalEvent: n, }, },),);
}
function Lt(t2, e2, n,) {
  t2.dispatchEvent(new CustomEvent(e2, { detail: { originalEntry: n, }, },),);
}
var ce = {
  isActive: (t2,) => !!t2.inView,
  subscribe: (t2, { enable: e2, disable: n, }, { inViewOptions: r = {}, },) => {
    let { once: o, } = r, i2 = S2(r, ['once',],);
    return wt(t2, (s3,) => {
      if (e2(), Lt(t2, 'viewenter', s3,), !o) {
        return (l3,) => {
          n(), Lt(t2, 'viewleave', l3,);
        };
      }
    }, i2,);
  },
};
var fe = (t2, e2, n,) => (r,) => {
  r.pointerType && r.pointerType !== 'mouse' || (n(), Z(t2, e2, r,));
};
var le = {
  isActive: (t2,) => !!t2.hover,
  subscribe: (t2, { enable: e2, disable: n, },) => {
    let r = fe(t2, 'hoverstart', e2,), o = fe(t2, 'hoverend', n,);
    return t2.addEventListener('pointerenter', r,), t2.addEventListener('pointerleave', o,), () => {
      t2.removeEventListener('pointerenter', r,), t2.removeEventListener('pointerleave', o,);
    };
  },
};
var me = {
  isActive: (t2,) => !!t2.press,
  subscribe: (t2, { enable: e2, disable: n, },) => {
    let r = (i2,) => {
        n(), Z(t2, 'pressend', i2,), window.removeEventListener('pointerup', r,);
      },
      o = (i2,) => {
        e2(), Z(t2, 'pressstart', i2,), window.addEventListener('pointerup', r,);
      };
    return t2.addEventListener('pointerdown', o,), () => {
      t2.removeEventListener('pointerdown', o,), window.removeEventListener('pointerup', r,);
    };
  },
};
var at = { inView: ce, hover: le, press: me, };
var ue = ['initial', 'animate', ...Object.keys(at,), 'exit',];

export { Et, };
