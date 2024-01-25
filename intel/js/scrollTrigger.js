/*!
 * ScrollTrigger 3.4.2
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
  "use strict";
  function H(e) {
      return e
  }
  function I() {
      return "undefined" != typeof window
  }
  function J() {
      return _e || I() && (_e = window.gsap) && _e.registerPlugin && _e
  }
  function K(e) {
      return !!~i.indexOf(e)
  }
  function L(e, t) {
      return ~He.indexOf(e) && He[He.indexOf(e) + 1][t]
  }
  function M(t, e) {
      var r = e.s
        , n = e.sc
        , o = h.indexOf(t)
        , i = ~o ? h[o + 1] : L(t, r) || (K(t) ? n : function(e) {
          return arguments.length ? t[r] = e : t[r]
      }
      );
      return ~o || h.push(t, i),
      i
  }
  function N(e) {
      return L(e, "getBoundingClientRect") || (K(e) ? function() {
          return ut.width = Pe.innerWidth,
          ut.height = Pe.innerHeight,
          ut
      }
      : function() {
          return ot(e)
      }
      )
  }
  function Q(e, t) {
      var r = t.s
        , n = t.d2
        , o = t.d
        , i = t.a;
      return (r = "scroll" + n) && (i = L(e, r)) ? i() - N(e)()[o] : K(e) ? Math.max(Me[r], Ee[r]) - (Pe["inner" + n] || Me["client" + n] || Ee["client" + n]) : e[r] - e["offset" + n]
  }
  function R(e, t) {
      for (var r = 0; r < p.length; r += 3)
          t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2])
  }
  function S(e) {
      return "string" == typeof e
  }
  function T(e) {
      return "function" == typeof e
  }
  function U(e) {
      return "number" == typeof e
  }
  function V(e) {
      return "object" == typeof e
  }
  function W(e) {
      return T(e) && e()
  }
  function X(r, n) {
      return function() {
          var e = W(r)
            , t = W(n);
          return function() {
              W(e),
              W(t)
          }
      }
  }
  function qa(e) {
      return Pe.getComputedStyle(e)
  }
  function sa(e, t) {
      for (var r in t)
          r in e || (e[r] = t[r]);
      return e
  }
  function ua(e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0
  }
  function wa(t, r, e, n) {
      return e.split(",").forEach(function(e) {
          return t(r, e, n)
      })
  }
  function xa(e, t, r) {
      return e.addEventListener(t, r, {
          passive: !0
      })
  }
  function ya(e, t, r) {
      return e.removeEventListener(t, r)
  }
  function Ca(e, t) {
      if (S(e)) {
          var r = e.indexOf("=")
            , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
          n && (e.indexOf("%") > r && (n *= t / 100),
          e = e.substr(0, r - 1)),
          e = n + (e in b ? b[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
      }
      return e
  }
  function Da(e, t, r, n, o, i, a) {
      var s = o.startColor
        , l = o.endColor
        , c = o.fontSize
        , f = o.indent
        , u = o.fontWeight
        , d = Oe.createElement("div")
        , p = K(r) || "fixed" === L(r, "pinType")
        , g = -1 !== e.indexOf("scroller")
        , h = p ? Ee : r
        , v = -1 !== e.indexOf("start")
        , m = v ? s : l
        , b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return b += "position:" + (g && p ? "fixed;" : "absolute;"),
      !g && p || (b += (n === nt ? x : y) + ":" + (i + parseFloat(f)) + "px;"),
      a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
      d._isStart = v,
      d.setAttribute("class", "gsap-marker-" + e),
      d.style.cssText = b,
      d.innerText = t || 0 === t ? e + "-" + t : e,
      h.insertBefore(d, h.children[0]),
      d._offset = d["offset" + n.op.d2],
      w(d, 0, n, v),
      d
  }
  function Ha() {
      return l = l || s(B)
  }
  function Ia() {
      l || (l = s(B),
      Je || P("scrollStart"),
      Je = De())
  }
  function Ja() {
      return !Ae && a.restart(!0)
  }
  function Pa(e) {
      var t = _e.ticker.frame
        , r = []
        , n = 0;
      if (g !== t || We) {
          for (A(); n < _.length; n += 3)
              Pe.matchMedia(_[n]).matches ? r.push(n) : A(1, _[n]) || T(_[n + 2]) && _[n + 2]();
          for (E(),
          n = 0; n < r.length; n++)
              Fe = _[r[n]],
              _[r[n] + 2] = _[r[n] + 1](e);
          z(Fe = 0, 1),
          g = t
      }
  }
  function Qa() {
      return ya(Y, "scrollEnd", Qa) || z(!0)
  }
  function ab(e, t, r, n) {
      if (e.parentNode !== t) {
          for (var o, i = F.length, a = t.style, s = e.style; i--; )
              a[o = F[i]] = r[o];
          a.position = "absolute" === r.position ? "absolute" : "relative",
          "inline" === r.display && (a.display = "inline-block"),
          s[y] = s[x] = "auto",
          a.overflow = "visible",
          a.boxSizing = "border-box",
          a[je] = ua(e, rt) + tt,
          a[Xe] = ua(e, nt) + tt,
          a[$e] = s[Ge] = s.top = s[m] = "0",
          ft(n),
          s[je] = r[je],
          s[Xe] = r[Xe],
          s[$e] = r[$e],
          e.parentNode.insertBefore(t, e),
          t.appendChild(e)
      }
  }
  function db(e) {
      for (var t = D.length, r = e.style, n = [], o = 0; o < t; o++)
          n.push(D[o], r[D[o]]);
      return n.t = e,
      n
  }
  function gb(e, t, r, n, o, i, a, s, l, c, f, u) {
      if (T(e) && (e = e(s)),
      S(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ca("0" + e.substr(3), r) : 0)),
      U(e))
          a && w(a, r, n, !0);
      else {
          T(t) && (t = t(s));
          var d, p, g, h = Le(t)[0] || Ee, v = ot(h) || {}, m = e.split(" ");
          v && (v.left || v.top) || "none" !== qa(h).display || (g = h.style.display,
          h.style.display = "block",
          v = ot(h),
          g ? h.style.display = g : h.style.removeProperty("display")),
          d = Ca(m[0], v[n.d]),
          p = Ca(m[1] || "0", r),
          e = v[n.p] - l[n.p] - c + d + o - p,
          a && w(a, p, n, r - p < 20 || a._isStart && 20 < p),
          r -= r - p
      }
      if (i) {
          var b = e + r
            , x = i._isStart;
          u = "scroll" + n.d2,
          w(i, b, n, x && 20 < b || !x && (f ? Math.max(Ee[u], Me[u]) : i.parentNode[u]) <= b + 1),
          f && (l = ot(a),
          f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + tt))
      }
      return Math.round(e)
  }
  function jb(l, e) {
      var c, f = M(l, e), u = "_scroll" + e.p2;
      return l[u] = f,
      function getTween(e, t, r, n, o) {
          var i = getTween.tween
            , a = t.onComplete
            , s = {};
          return i && i.kill(),
          c = f(),
          t[u] = e,
          (t.modifiers = s)[u] = function(e) {
              return 7 < Math.abs(f() - c) ? (i.kill(),
              getTween.tween = 0,
              e = f()) : n && (e = r + n * i.ratio + o * i.ratio * i.ratio),
              c = Math.round(e)
          }
          ,
          t.onComplete = function() {
              getTween.tween = 0,
              a && a.call(i)
          }
          ,
          i = getTween.tween = _e.to(l, t)
      }
  }
  var _e, o, Pe, Oe, Me, Ee, i, a, s, l, Le, Ie, Re, c, Ae, ze, f, Ne, u, d, p, qe, Be, Fe, g, We = 1, He = [], h = [], De = Date.now, v = De(), Je = 0, Qe = 1, Ke = Math.abs, t = "scrollLeft", r = "scrollTop", m = "left", x = "right", y = "bottom", je = "width", Xe = "height", Ue = "Right", Ve = "Left", Ye = "Top", Ze = "Bottom", $e = "padding", Ge = "margin", et = "Width", n = "Height", tt = "px", rt = {
      s: t,
      p: m,
      p2: Ve,
      os: x,
      os2: Ue,
      d: je,
      d2: et,
      a: "x",
      sc: function sc(e) {
          return arguments.length ? Pe.scrollTo(e, nt.sc()) : Pe.pageXOffset || Oe[t] || Me[t] || Ee[t] || 0
      }
  }, nt = {
      s: r,
      p: "top",
      p2: Ye,
      os: y,
      os2: Ze,
      d: Xe,
      d2: n,
      a: "y",
      op: rt,
      sc: function sc(e) {
          return arguments.length ? Pe.scrollTo(rt.sc(), e) : Pe.pageYOffset || Oe[r] || Me[r] || Ee[r] || 0
      }
  }, ot = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== qa(e)[f] && _e.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
      }).progress(1)
        , n = e.getBoundingClientRect();
      return r && r.progress(0).kill(),
      n
  }, it = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
  }, at = {
      toggleActions: "play",
      anticipatePin: 0
  }, b = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
  }, w = function _positionMarker(e, t, r, n) {
      var o = {
          display: "block"
      }
        , i = r[n ? "os2" : "p2"]
        , a = r[n ? "p2" : "os2"];
      e._isFlipped = n,
      o[r.a + "Percent"] = n ? -100 : 0,
      o[r.a] = n ? 1 : 0,
      o["border" + i + et] = 1,
      o["border" + a + et] = 0,
      o[r.p] = t,
      _e.set(e, o)
  }, st = [], lt = {}, C = {}, k = [], _ = [], P = function _dispatch(e) {
      return C[e] && C[e].map(function(e) {
          return e()
      }) || k
  }, O = [], E = function _revertRecorded(e) {
      for (var t = 0; t < O.length; t += 4)
          e && O[t + 3] !== e || (O[t].style.cssText = O[t + 1],
          O[t + 2].uncache = 1)
  }, A = function _revertAll(e, t) {
      var r;
      for (Ne = 0; Ne < st.length; Ne++)
          r = st[Ne],
          t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()),
          r.revert()));
      E(t),
      t || P("revert")
  }, z = function _refreshAll(e, t) {
      if (!Je || e) {
          var r = P("refreshInit");
          for (qe && Y.sort(),
          t || A(),
          Ne = 0; Ne < st.length; Ne++)
              st[Ne].refresh();
          for (r.forEach(function(e) {
              return e && e.render && e.render(-1)
          }),
          Ne = st.length; Ne--; )
              st[Ne].scroll.rec = 0;
          P("refresh")
      } else
          xa(Y, "scrollEnd", Qa)
  }, q = 0, ct = 1, B = function _updateAll() {
      var e = st.length
        , t = De()
        , r = 50 <= t - v
        , n = e && st[0].scroll();
      if (ct = n < q ? -1 : 1,
      q = n,
      r && (Je && !ze && 200 < t - Je && (Je = 0,
      P("scrollEnd")),
      Re = v,
      v = t),
      ct < 0) {
          for (Ne = e; Ne--; )
              st[Ne].update(0, r);
          ct = 1
      } else
          for (Ne = 0; Ne < e; Ne++)
              st[Ne] && st[Ne].update(0, r);
      l = 0
  }, F = [m, "top", y, x, Ge + Ze, Ge + Ue, Ge + Ye, Ge + Ve, "display", "flexShrink", "float"], D = F.concat([je, Xe, "boxSizing", "max" + et, "max" + n, "position", Ge, $e, $e + Ye, $e + Ue, $e + Ze, $e + Ve]), j = /([A-Z])/g, ft = function _setState(e) {
      if (e)
          for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2)
              r = e[i + 1],
              t = e[i],
              r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase())
  }, ut = {
      left: 0,
      top: 0
  }, dt = /(?:webkit|moz|length)/i;
  rt.op = nt;
  var Y = (ScrollTrigger.prototype.init = function init(b, x) {
      if (this.progress = 0,
      this.vars && this.kill(1),
      Qe) {
          var p, n, c, y, w, C, k, _, P, O, E, I, e, R, A, z, q, B, t, F, g, W, D, h, J, v, m, r, j, X, Y, Z, o, f, $, G, ee, te, re = (b = sa(S(b) || U(b) || b.nodeType ? {
              trigger: b
          } : b, at)).horizontal ? rt : nt, ne = b.onUpdate, oe = b.toggleClass, i = b.id, ie = b.onToggle, ae = b.onRefresh, a = b.scrub, se = b.trigger, le = b.pin, ce = b.pinSpacing, fe = b.invalidateOnRefresh, ue = b.anticipatePin, s = b.onScrubComplete, u = b.onSnapComplete, de = b.once, pe = b.snap, ge = b.pinReparent, he = !a && 0 !== a, ve = Le(b.scroller || Pe)[0], l = _e.core.getCache(ve), d = K(ve), me = d || "fixed" === L(ve, "pinType"), be = [b.onEnter, b.onLeave, b.onEnterBack, b.onLeaveBack], xe = he && (de ? "play" : b.toggleActions).split(" "), ye = "markers"in b ? b.markers : at.markers, Te = d ? 0 : parseFloat(qa(ve)["border" + re.p2 + et]) || 0, we = this, Se = b.onRefreshInit && function() {
              return b.onRefreshInit(we)
          }
          , Ce = function _getSizeFunc(e, t, r) {
              var n = r.d
                , o = r.d2
                , i = r.a;
              return (i = L(e, "getBoundingClientRect")) ? function() {
                  return i()[n]
              }
              : function() {
                  return (t ? Pe["inner" + o] : e["client" + o]) || 0
              }
          }(ve, d, re), ke = function _getOffsetsFunc(e, t) {
              return !t || ~He.indexOf(e) ? N(e) : function() {
                  return ut
              }
          }(ve, d);
          we.media = Fe,
          ue *= 45,
          st.push(we),
          we.scroller = ve,
          we.scroll = M(ve, re),
          w = we.scroll(),
          we.vars = b,
          x = x || b.animation,
          "refreshPriority"in b && (qe = 1),
          l.tweenScroll = l.tweenScroll || {
              top: jb(ve, nt),
              left: jb(ve, rt)
          },
          we.tweenTo = p = l.tweenScroll[re.p],
          x && (x.vars.lazy = !1,
          x._initted || !1 !== x.vars.immediateRender && !1 !== b.immediateRender && x.render(0, !0, !0),
          we.animation = x.pause(),
          x.scrollTrigger = we,
          (o = U(a) && a) && (Z = _e.to(x, {
              ease: "power3",
              duration: o,
              onComplete: function onComplete() {
                  return s && s(we)
              }
          })),
          j = 0,
          i = i || x.vars.id),
          pe && (V(pe) || (pe = {
              snapTo: pe
          }),
          _e.set(d ? [Ee, Me] : ve, {
              scrollBehavior: "auto"
          }),
          c = T(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? function _getLabels(i) {
              return function(e) {
                  var t, r = [], n = i.labels, o = i.duration();
                  for (t in n)
                      r.push(n[t] / o);
                  return _e.utils.snap(r, e)
              }
          }(x) : _e.utils.snap(pe.snapTo),
          f = pe.duration || {
              min: .1,
              max: 2
          },
          f = V(f) ? Ie(f.min, f.max) : Ie(f, f),
          $ = _e.delayedCall(pe.delay || o / 2 || .1, function() {
              if (!Je || Je === Y && !ze) {
                  var e = x && !he ? x.totalProgress() : we.progress
                    , t = (e - X) / (De() - Re) * 1e3 || 0
                    , r = Ke(t / 2) * t / .185
                    , n = e + r
                    , o = Ie(0, 1, c(n, we))
                    , i = o - e - r
                    , a = we.scroll()
                    , s = Math.round(k + o * R)
                    , l = p.tween;
                  if (a <= _ && k <= a) {
                      if (l && !l._initted) {
                          if (l.data <= Math.abs(s - a))
                              return;
                          l.kill()
                      }
                      p(s, {
                          duration: f(Ke(.185 * Math.max(Ke(n - e), Ke(o - e)) / t / .05 || 0)),
                          ease: pe.ease || "power3",
                          data: Math.abs(s - a),
                          onComplete: function onComplete() {
                              j = X = x && !he ? x.totalProgress() : we.progress,
                              u && u(we)
                          }
                      }, k + e * R, r * R, i * R)
                  }
              } else
                  $.restart(!0)
          }).pause()),
          i && (lt[i] = we),
          se = we.trigger = Le(se || le)[0],
          le = !0 === le ? se : Le(le)[0],
          S(oe) && (oe = {
              targets: se,
              className: oe
          }),
          le && (!1 === ce || ce === Ge || (ce = "flex" !== qa(le.parentNode).display && $e),
          we.pin = le,
          !1 !== b.force3D && _e.set(le, {
              force3D: !0
          }),
          (n = _e.core.getCache(le)).spacer ? A = n.pinState : (n.spacer = B = Oe.createElement("div"),
          B.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")),
          n.pinState = A = db(le)),
          we.spacer = B = n.spacer,
          r = qa(le),
          h = r[ce + re.os2],
          F = _e.getProperty(le),
          g = _e.quickSetter(le, re.a, tt),
          le.firstChild && !Q(le, re) && (le.style.overflow = "hidden"),
          ab(le, B, r),
          q = db(le)),
          ye && (e = V(ye) ? sa(ye, it) : it,
          E = Da("scroller-start", i, ve, re, e, 0),
          I = Da("scroller-end", i, ve, re, e, 0, E),
          t = E["offset" + re.op.d2],
          P = Da("start", i, ve, re, e, t),
          O = Da("end", i, ve, re, e, t),
          me || (function _makePositionable(e) {
              e.style.position = "absolute" === qa(e).position ? "absolute" : "relative"
          }(ve),
          _e.set([E, I], {
              force3D: !0
          }),
          v = _e.quickSetter(E, re.a, tt),
          m = _e.quickSetter(I, re.a, tt))),
          we.revert = function(e) {
              var t = !1 !== e || !we.enabled
                , r = Ae;
              t !== y && (t && (ee = Math.max(we.scroll(), we.scroll.rec || 0),
              G = we.progress,
              te = x && x.progress()),
              P && [P, O, E, I].forEach(function(e) {
                  return e.style.display = t ? "none" : "block"
              }),
              Ae = 1,
              we.update(t),
              Ae = r,
              le && (t ? function _swapPinOut(e, t, r) {
                  if (ft(r),
                  e.parentNode === t) {
                      var n = t.parentNode;
                      n && (n.insertBefore(e, t),
                      n.removeChild(t))
                  }
              }(le, B, A) : ab(le, B, qa(le), J)),
              y = t)
          }
          ,
          we.refresh = function(e) {
              if (!Ae && we.enabled)
                  if (le && e && Je)
                      xa(ScrollTrigger, "scrollEnd", Qa);
                  else {
                      Ae = 1,
                      Z && Z.kill(),
                      fe && x && x.progress(0).invalidate(),
                      y || we.revert();
                      for (var t, r, n, o, i, a, s, l = Ce(), c = ke(), f = Q(ve, re), u = 0, d = 0, p = b.end, g = b.endTrigger || se, h = b.start || (le || !se ? "0 0" : "0 100%"), v = se && Math.max(0, st.indexOf(we)) || 0, m = v; m--; )
                          !(s = st[m].pin) || s !== se && s !== le || st[m].revert();
                      for (k = gb(h, se, l, re, we.scroll(), P, E, we, c, Te, me, f) || (le ? -.001 : 0),
                      T(p) && (p = p(we)),
                      S(p) && !p.indexOf("+=") && (~p.indexOf(" ") ? p = (S(h) ? h.split(" ")[0] : "") + p : (u = Ca(p.substr(2), l),
                      p = S(h) ? h : k + u,
                      g = se)),
                      _ = Math.max(k, gb(p || (g ? "100% 0" : f), g, l, re, we.scroll() + u, O, I, we, c, Te, me, f)) || -.001,
                      R = _ - k || (k -= .01) && .001,
                      u = 0,
                      m = v; m--; )
                          (s = (a = st[m]).pin) && a.start - a._pinPush < k && (t = a.end - a.start,
                          s === se && (u += t),
                          s === le && (d += t));
                      if (k += u,
                      _ += u,
                      we._pinPush = d,
                      P && u && ((t = {})[re.a] = "+=" + u,
                      _e.set([P, O], t)),
                      le)
                          t = qa(le),
                          o = re === nt,
                          n = we.scroll(),
                          W = parseFloat(F(re.a)) + d,
                          ab(le, B, t),
                          q = db(le),
                          r = ot(le, !0),
                          ce && ((J = [ce + re.os2, R + d + tt]).t = B,
                          (m = ce === $e ? ua(le, re) + R + d : 0) && J.push(re.d, m + tt),
                          ft(J),
                          me && we.scroll(ee)),
                          me && ((i = {
                              top: r.top + (o ? n - k : 0) + tt,
                              left: r.left + (o ? 0 : n - k) + tt,
                              boxSizing: "border-box",
                              position: "fixed"
                          })[je] = i.maxWidth = Math.ceil(r.width) + tt,
                          i[Xe] = i.maxHeight = Math.ceil(r.height) + tt,
                          i[Ge] = i[Ge + Ye] = i[Ge + Ue] = i[Ge + Ze] = i[Ge + Ve] = "0",
                          i[$e] = t[$e],
                          i[$e + Ye] = t[$e + Ye],
                          i[$e + Ue] = t[$e + Ue],
                          i[$e + Ze] = t[$e + Ze],
                          i[$e + Ve] = t[$e + Ve],
                          z = function _copyState(e, t, r) {
                              for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)
                                  n = e[a],
                                  o.push(n, n in t ? t[n] : e[a + 1]);
                              return o.t = e.t,
                              o
                          }(A, i, ge)),
                          x ? (x.progress(1, !0),
                          D = F(re.a) - W + R + d,
                          R !== D && z.splice(z.length - 2, 2),
                          x.progress(0, !0)) : D = R;
                      else if (se && we.scroll())
                          for (r = se.parentNode; r && r !== Ee; )
                              r._pinOffset && (k -= r._pinOffset,
                              _ -= r._pinOffset),
                              r = r.parentNode;
                      for (m = 0; m < v; m++)
                          !(a = st[m].pin) || a !== se && a !== le || st[m].revert(!1);
                      we.start = k,
                      we.end = _,
                      (w = C = we.scroll()) < ee && we.scroll(ee),
                      we.revert(!1),
                      Ae = 0,
                      te && he && x.progress(te, !0),
                      G !== we.progress && (Z && x.totalProgress(G, !0),
                      we.progress = G,
                      we.update()),
                      le && ce && (B._pinOffset = Math.round(we.progress * D)),
                      ae && ae(we)
                  }
          }
          ,
          we.getVelocity = function() {
              return (we.scroll() - C) / (De() - Re) * 1e3 || 0
          }
          ,
          we.update = function(e, t) {
              var r, n, o, i, a, s = we.scroll(), l = e ? 0 : (s - k) / R, c = l < 0 ? 0 : 1 < l ? 1 : l || 0, f = we.progress;
              if (t && (C = w,
              w = s,
              pe && (X = j,
              j = x && !he ? x.totalProgress() : c)),
              ue && !c && le && !Ae && !We && Je && k < s + (s - C) / (De() - Re) * ue && (c = 1e-4),
              c !== f && we.enabled) {
                  if (i = (a = (r = we.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f,
                  we.direction = f < c ? 1 : -1,
                  we.progress = c,
                  he || (!Z || Ae || We ? x && x.totalProgress(c, !!Ae) : (Z.vars.totalProgress = c,
                  Z.invalidate().restart())),
                  le)
                      if (e && ce && (B.style[ce + re.os2] = h),
                      me) {
                          if (i) {
                              if (o = !e && f < c && s < _ + 1 && s + 1 >= Q(ve, re),
                              ge) {
                                  if (!Ae && (r || o)) {
                                      var u = ot(le, !0)
                                        , d = s - k;
                                      le.style.top = u.top + (re === nt ? d : 0) + tt,
                                      le.style.left = u.left + (re === nt ? 0 : d) + tt
                                  }
                                  !function _reparent(e, t) {
                                      if (e.parentNode !== t) {
                                          var r, n, o = e.style;
                                          if (t === Ee)
                                              for (r in e._stOrig = o.cssText,
                                              n = qa(e))
                                                  +r || dt.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);
                                          else
                                              o.cssText = e._stOrig;
                                          t.appendChild(e)
                                      }
                                  }(le, Ae || !r && !o ? B : Ee)
                              }
                              ft(r || o ? z : q),
                              D !== R && c < 1 && r || g(W + (1 !== c || o ? 0 : D))
                          }
                      } else
                          g(W + D * c);
                  !pe || p.tween || Ae || We || (Y = Je,
                  $.restart(!0)),
                  oe && a && (!de || r) && Le(oe.targets).forEach(function(e) {
                      return e.classList[r ? "add" : "remove"](oe.className)
                  }),
                  !ne || he || e || ne(we),
                  i && !Ae ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3,
                  he && (o = !a && "none" !== xe[n + 1] && xe[n + 1] || xe[n],
                  x && ("complete" === o || "reset" === o || o in x) && ("complete" === o ? x.pause().totalProgress(1) : "reset" === o ? x.restart(!0).pause() : x[o]()),
                  ne && ne(we)),
                  !a && Be || (ie && a && ie(we),
                  be[n] && be[n](we),
                  de && (1 === c ? we.kill(!1, 1) : be[n] = 0),
                  a || be[n = 1 === c ? 1 : 3] && be[n](we))) : he && ne && !Ae && ne(we)
              }
              m && (v(s + (E._isFlipped ? 1 : 0)),
              m(s))
          }
          ,
          we.enable = function() {
              we.enabled || (we.enabled = !0,
              xa(ve, "resize", Ja),
              xa(ve, "scroll", Ia),
              Se && xa(ScrollTrigger, "refreshInit", Se),
              x && x.add ? _e.delayedCall(.01, we.refresh) && (R = .01) && (k = _ = 0) : we.refresh())
          }
          ,
          we.disable = function(e, t) {
              if (we.enabled && (!1 !== e && we.revert(),
              we.enabled = we.isActive = !1,
              t || Z && Z.pause(),
              ee = 0,
              n && (n.uncache = 1),
              Se && ya(ScrollTrigger, "refreshInit", Se),
              $ && ($.pause(),
              p.tween && p.tween.kill()),
              !d)) {
                  for (var r = st.length; r--; )
                      if (st[r].scroller === ve && st[r] !== we)
                          return;
                  ya(ve, "resize", Ja),
                  ya(ve, "scroll", Ia)
              }
          }
          ,
          we.kill = function(e, t) {
              we.disable(e, t),
              i && delete lt[i];
              var r = st.indexOf(we);
              st.splice(r, 1),
              r === Ne && 0 < ct && Ne--,
              x && (x.scrollTrigger = null,
              e && x.render(-1),
              t && Z || x.kill()),
              P && [P, O, E, I].forEach(function(e) {
                  return e.parentNode.removeChild(e)
              }),
              n && (n.uncache = 1)
          }
          ,
          we.enable()
      } else
          this.update = this.refresh = this.kill = H
  }
  ,
  ScrollTrigger.register = function register(e) {
      if (!o && (_e = e || J(),
      I() && window.document && (Pe = window,
      Oe = document,
      Me = Oe.documentElement,
      Ee = Oe.body),
      _e && (Le = _e.utils.toArray,
      Ie = _e.utils.clamp,
      _e.core.globals("ScrollTrigger", ScrollTrigger),
      Ee))) {
          s = Pe.requestAnimationFrame || function(e) {
              return setTimeout(e, 16)
          }
          ,
          xa(Pe, "mousewheel", Ia),
          i = [Pe, Oe, Me, Ee],
          xa(Oe, "scroll", Ia);
          var t, r = Ee.style, n = r.borderTop;
          r.borderTop = "1px solid #000",
          t = ot(Ee),
          nt.m = Math.round(t.top + nt.sc()) || 0,
          rt.m = Math.round(t.left + rt.sc()) || 0,
          n ? r.borderTop = n : r.removeProperty("border-top"),
          c = setInterval(Ha, 200),
          _e.delayedCall(.5, function() {
              return We = 0
          }),
          xa(Oe, "touchcancel", H),
          xa(Ee, "touchstart", H),
          wa(xa, Oe, "pointerdown,touchstart,mousedown", function() {
              return ze = 1
          }),
          wa(xa, Oe, "pointerup,touchend,mouseup", function() {
              return ze = 0
          }),
          f = _e.utils.checkPrefix("transform"),
          D.push(f),
          o = De(),
          a = _e.delayedCall(.2, z).pause(),
          p = [Oe, "visibilitychange", function() {
              var e = Pe.innerWidth
                , t = Pe.innerHeight;
              Oe.hidden ? (u = e,
              d = t) : u === e && d === t || Ja()
          }
          , Oe, "DOMContentLoaded", z, Pe, "load", function() {
              return Je || z()
          }
          , Pe, "resize", Ja],
          R(xa)
      }
      return o
  }
  ,
  ScrollTrigger.defaults = function defaults(e) {
      for (var t in e)
          at[t] = e[t]
  }
  ,
  ScrollTrigger.kill = function kill() {
      Qe = 0,
      st.slice(0).forEach(function(e) {
          return e.kill(1)
      })
  }
  ,
  ScrollTrigger.config = function config(e) {
      "limitCallbacks"in e && (Be = !!e.limitCallbacks);
      var t = e.syncInterval;
      t && clearInterval(c) || (c = t) && setInterval(Ha, t),
      "autoRefreshEvents"in e && (R(ya) || R(xa, e.autoRefreshEvents || "none"))
  }
  ,
  ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = Le(e)[0];
      K(r) ? He.unshift(Pe, t, Ee, t, Me, t) : He.unshift(r, t)
  }
  ,
  ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, o, i;
      for (r in e)
          n = _.indexOf(r),
          o = e[r],
          "all" === (Fe = r) ? o() : (t = Pe.matchMedia(r)) && (t.matches && (i = o()),
          ~n ? (_[n + 1] = X(_[n + 1], o),
          _[n + 2] = X(_[n + 2], i)) : (n = _.length,
          _.push(r, o, i),
          t.addListener ? t.addListener(Pa) : t.addEventListener("change", Pa))),
          Fe = 0;
      return _
  }
  ,
  ScrollTrigger);
  function ScrollTrigger(e, t) {
      o || ScrollTrigger.register(_e) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t)
  }
  Y.version = "3.4.2",
  Y.saveStyles = function(e) {
      return e ? Le(e).forEach(function(e) {
          var t = O.indexOf(e);
          0 <= t && O.splice(t, 4),
          O.push(e, e.style.cssText, _e.core.getCache(e), Fe)
      }) : O
  }
  ,
  Y.revert = function(e, t) {
      return A(!e, t)
  }
  ,
  Y.create = function(e, t) {
      return new Y(e,t)
  }
  ,
  Y.refresh = function(e) {
      return e ? Ja() : z(!0)
  }
  ,
  Y.update = B,
  Y.maxScroll = function(e, t) {
      return Q(e, t ? rt : nt)
  }
  ,
  Y.getScrollFunc = function(e, t) {
      return M(Le(e)[0], t ? rt : nt)
  }
  ,
  Y.getById = function(e) {
      return lt[e]
  }
  ,
  Y.getAll = function() {
      return st.slice(0)
  }
  ,
  Y.isScrolling = function() {
      return !!Je
  }
  ,
  Y.addEventListener = function(e, t) {
      var r = C[e] || (C[e] = []);
      ~r.indexOf(t) || r.push(t)
  }
  ,
  Y.removeEventListener = function(e, t) {
      var r = C[e]
        , n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1)
  }
  ,
  Y.batch = function(e, t) {
      function Zh(e, t) {
          var r = []
            , n = []
            , o = _e.delayedCall(i, function() {
              t(r, n),
              r = [],
              n = []
          }).pause();
          return function(e) {
              r.length || o.restart(!0),
              r.push(e.trigger),
              n.push(e),
              a <= r.length && o.progress(1)
          }
      }
      var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
      for (r in t)
          o[r] = "on" === r.substr(0, 2) && T(t[r]) && "onRefreshInit" !== r ? Zh(0, t[r]) : t[r];
      return T(a) && (a = a(),
      xa(Y, "refresh", function() {
          return a = t.batchMax()
      })),
      Le(e).forEach(function(e) {
          var t = {};
          for (r in o)
              t[r] = o[r];
          t.trigger = e,
          n.push(Y.create(t))
      }),
      n
  }
  ,
  Y.sort = function(e) {
      return st.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
      }
      )
  }
  ,
  J() && _e.registerPlugin(Y),
  e.ScrollTrigger = Y,
  e.default = Y;
  if (typeof (window) === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  } else {
      delete e.default
  }
});
