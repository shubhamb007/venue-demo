! function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) { var l = "function" == typeof require && require; if (!a && l) return l(s, !0); if (r) return r(s, !0); var c = new Error("Cannot find module '" + s + "'"); throw c.code = "MODULE_NOT_FOUND", c }
            var u = n[s] = { exports: {} };
            t[s][0].call(u.exports, (function(e) { return o(t[s][1][e] || e) }), u, u.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
    return o
}({
    1: [function(e, t, n) {
        var i = Object.defineProperty;

        function o(e) { return e.includes("full") ? .99 : e.includes("half") ? .5 : 0 }
        i(n, "__esModule", { value: !0 }), ((e, t) => { for (var n in t) i(e, n, { get: t[n], enumerable: !0 }) })(n, { default: () => r });
        var r = function(e) {
            e.directive("intersect", ((e, { value: t, expression: n, modifiers: i }, { evaluateLater: r, cleanup: s }) => {
                let a = r(n),
                    l = { threshold: o(i) },
                    c = new IntersectionObserver((e => { e.forEach((e => {!e.isIntersecting && "enter" === t || e.isIntersecting && "leave" === t || 0 === e.intersectionRatio && !t || (a(), i.includes("once") && c.disconnect()) })) }), l);
                c.observe(e), s((() => { c.disconnect() }))
            }))
        }
    }, {}],
    2: [function(e, t, n) {
        /*!
         * Glide.js v3.4.1
         * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
         * Released under the MIT License.
         */
        ! function(e, i) { "object" == typeof n && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : e.Glide = i() }(this, (function() {
            "use strict";
            var e = { type: "slider", startAt: 0, perView: 1, focusAt: 0, gap: 10, autoplay: !1, hoverpause: !0, keyboard: !0, bound: !1, swipeThreshold: 80, dragThreshold: 120, perTouch: !1, touchRatio: .5, touchAngle: 45, animationDuration: 400, rewind: !0, rewindDuration: 800, animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)", throttle: 10, direction: "ltr", peek: 0, breakpoints: {}, classes: { direction: { ltr: "glide--ltr", rtl: "glide--rtl" }, slider: "glide--slider", carousel: "glide--carousel", swipeable: "glide--swipeable", dragging: "glide--dragging", cloneSlide: "glide__slide--clone", activeNav: "glide__bullet--active", activeSlide: "glide__slide--active", disabledArrow: "glide__arrow--disabled" } };

            function t(e) { console.error("[Glide warn]: " + e) }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                i = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
                s = function e(t, n, i) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var r = Object.getPrototypeOf(t); return null === r ? void 0 : e(r, n, i) } if ("value" in o) return o.value; var s = o.get; return void 0 !== s ? s.call(i) : void 0 },
                a = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t };

            function l(e) { return parseInt(e) }

            function c(e) { return "string" == typeof e }

            function u(e) { var t = void 0 === e ? "undefined" : n(e); return "function" === t || "object" === t && !!e }

            function d(e) { return "function" == typeof e }

            function h(e) { return void 0 === e }

            function p(e) { return e.constructor === Array }

            function f(e, n, i) { var o = {}; for (var r in n) d(n[r]) ? o[r] = n[r](e, o, i) : t("Extension must be a function"); for (var s in o) d(o[s].mount) && o[s].mount(); return o }

            function m(e, t, n) { Object.defineProperty(e, t, n) }

            function g(e, t) { var n = r({}, e, t); return t.hasOwnProperty("classes") && (n.classes = r({}, e.classes, t.classes), t.classes.hasOwnProperty("direction") && (n.classes.direction = r({}, e.classes.direction, t.classes.direction))), t.hasOwnProperty("breakpoints") && (n.breakpoints = r({}, e.breakpoints, t.breakpoints)), n }
            var y = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e), this.events = t, this.hop = t.hasOwnProperty
                    }
                    return o(e, [{
                        key: "on",
                        value: function(e, t) {
                            if (p(e))
                                for (var n = 0; n < e.length; n++) this.on(e[n], t);
                            this.hop.call(this.events, e) || (this.events[e] = []);
                            var i = this.events[e].push(t) - 1;
                            return { remove: function() { delete this.events[e][i] } }
                        }
                    }, {
                        key: "emit",
                        value: function(e, t) {
                            if (p(e))
                                for (var n = 0; n < e.length; n++) this.emit(e[n], t);
                            this.hop.call(this.events, e) && this.events[e].forEach((function(e) { e(t || {}) }))
                        }
                    }]), e
                }(),
                v = function() {
                    function n(t) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, n), this._c = {}, this._t = [], this._e = new y, this.disabled = !1, this.selector = t, this.settings = g(e, o), this.index = this.settings.startAt
                    }
                    return o(n, [{ key: "mount", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this._e.emit("mount.before"), u(e) ? this._c = f(this, e, this._e) : t("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this } }, { key: "mutate", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return p(e) ? this._t = e : t("You need to provide a array on `mutate()`"), this } }, { key: "update", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.settings = g(this.settings, e), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this } }, { key: "go", value: function(e) { return this._c.Run.make(e), this } }, { key: "move", value: function(e) { return this._c.Transition.disable(), this._c.Move.make(e), this } }, { key: "destroy", value: function() { return this._e.emit("destroy"), this } }, { key: "play", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return e && (this.settings.autoplay = e), this._e.emit("play"), this } }, { key: "pause", value: function() { return this._e.emit("pause"), this } }, { key: "disable", value: function() { return this.disabled = !0, this } }, { key: "enable", value: function() { return this.disabled = !1, this } }, { key: "on", value: function(e, t) { return this._e.on(e, t), this } }, { key: "isType", value: function(e) { return this.settings.type === e } }, { key: "settings", get: function() { return this._o }, set: function(e) { u(e) ? this._o = e : t("Options must be an `object` instance.") } }, { key: "index", get: function() { return this._i }, set: function(e) { this._i = l(e) } }, { key: "type", get: function() { return this.settings.type } }, { key: "disabled", get: function() { return this._d }, set: function(e) { this._d = !!e } }]), n
                }();

            function b() { return (new Date).getTime() }

            function w(e, t, n) {
                var i = void 0,
                    o = void 0,
                    r = void 0,
                    s = void 0,
                    a = 0;
                n || (n = {});
                var l = function() { a = !1 === n.leading ? 0 : b(), i = null, s = e.apply(o, r), i || (o = r = null) },
                    c = function() {
                        var c = b();
                        a || !1 !== n.leading || (a = c);
                        var u = t - (c - a);
                        return o = this, r = arguments, u <= 0 || u > t ? (i && (clearTimeout(i), i = null), a = c, s = e.apply(o, r), i || (o = r = null)) : i || !1 === n.trailing || (i = setTimeout(l, u)), s
                    };
                return c.cancel = function() { clearTimeout(i), a = 0, i = o = r = null }, c
            }
            var _ = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] };

            function x(e) { if (e && e.parentNode) { for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n } return [] }

            function k(e) { return !!(e && e instanceof window.HTMLElement) }
            var j = '[data-glide-el="track"]';
            var S = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e), this.listeners = t
                }
                return o(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        c(e) && (e = [e]);
                        for (var o = 0; o < e.length; o++) this.listeners[e[o]] = n, t.addEventListener(e[o], this.listeners[e[o]], i)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        c(e) && (e = [e]);
                        for (var i = 0; i < e.length; i++) t.removeEventListener(e[i], this.listeners[e[i]], n)
                    }
                }, { key: "destroy", value: function() { delete this.listeners } }]), e
            }();
            var T = ["ltr", "rtl"],
                A = { ">": "<", "<": ">", "=": "=" };

            function E(e, t) { return { modify: function(e) { return t.Direction.is("rtl") ? -e : e } } }

            function M(e, t) { return { modify: function(n) { return n + t.Gaps.value * e.index } } }

            function C(e, t) { return { modify: function(e) { return e + t.Clones.grow / 2 } } }

            function O(e, t) { return { modify: function(n) { if (e.settings.focusAt >= 0) { var i = t.Peek.value; return u(i) ? n - i.before : n - i } return n } } }

            function L(e, t) {
                return {
                    modify: function(n) {
                        var i = t.Gaps.value,
                            o = t.Sizes.width,
                            r = e.settings.focusAt,
                            s = t.Sizes.slideWidth;
                        return "center" === r ? n - (o / 2 - s / 2) : n - s * r - i * r
                    }
                }
            }
            var P = !1;
            try {
                var I = Object.defineProperty({}, "passive", { get: function() { P = !0 } });
                window.addEventListener("testPassive", null, I), window.removeEventListener("testPassive", null, I)
            } catch (e) {}
            var D = P,
                N = ["touchstart", "mousedown"],
                F = ["touchmove", "mousemove"],
                H = ["touchend", "touchcancel", "mouseup", "mouseleave"],
                q = ["mousedown", "mousemove", "mouseup", "mouseleave"];

            function z(e) { return u(e) ? (n = e, Object.keys(n).sort().reduce((function(e, t) { return e[t] = n[t], e[t], e }), {})) : (t("Breakpoints option must be an object"), {}); var n }
            var R = {
                    Html: function(e, n) { var i = { mount: function() { this.root = e.selector, this.track = this.root.querySelector(j), this.slides = Array.prototype.slice.call(this.wrapper.children).filter((function(t) { return !t.classList.contains(e.settings.classes.cloneSlide) })) } }; return m(i, "root", { get: function() { return i._r }, set: function(e) { c(e) && (e = document.querySelector(e)), k(e) ? i._r = e : t("Root element must be a existing Html node") } }), m(i, "track", { get: function() { return i._t }, set: function(e) { k(e) ? i._t = e : t("Could not find track element. Please use " + j + " attribute.") } }), m(i, "wrapper", { get: function() { return i.track.children[0] } }), i },
                    Translate: function(e, n, i) {
                        var o = {
                            set: function(i) {
                                var o = function(e, n, i) {
                                    var o = [M, C, O, L].concat(e._t, [E]);
                                    return {
                                        mutate: function(r) {
                                            for (var s = 0; s < o.length; s++) {
                                                var a = o[s];
                                                d(a) && d(a().modify) ? r = a(e, n, i).modify(r) : t("Transformer should be a function that returns an object with `modify()` method")
                                            }
                                            return r
                                        }
                                    }
                                }(e, n).mutate(i);
                                n.Html.wrapper.style.transform = "translate3d(" + -1 * o + "px, 0px, 0px)"
                            },
                            remove: function() { n.Html.wrapper.style.transform = "" }
                        };
                        return i.on("move", (function(t) {
                            var r = n.Gaps.value,
                                s = n.Sizes.length,
                                a = n.Sizes.slideWidth;
                            return e.isType("carousel") && n.Run.isOffset("<") ? (n.Transition.after((function() { i.emit("translate.jump"), o.set(a * (s - 1)) })), o.set(-a - r * s)) : e.isType("carousel") && n.Run.isOffset(">") ? (n.Transition.after((function() { i.emit("translate.jump"), o.set(0) })), o.set(a * s + r * s)) : o.set(t.movement)
                        })), i.on("destroy", (function() { o.remove() })), o
                    },
                    Transition: function(e, t, n) {
                        var i = !1,
                            o = {
                                compose: function(t) { var n = e.settings; return i ? t + " 0ms " + n.animationTimingFunc : t + " " + this.duration + "ms " + n.animationTimingFunc },
                                set: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                                    t.Html.wrapper.style.transition = this.compose(e)
                                },
                                remove: function() { t.Html.wrapper.style.transition = "" },
                                after: function(e) { setTimeout((function() { e() }), this.duration) },
                                enable: function() { i = !1, this.set() },
                                disable: function() { i = !0, this.set() }
                            };
                        return m(o, "duration", { get: function() { var n = e.settings; return e.isType("slider") && t.Run.offset ? n.rewindDuration : n.animationDuration } }), n.on("move", (function() { o.set() })), n.on(["build.before", "resize", "translate.jump"], (function() { o.disable() })), n.on("run", (function() { o.enable() })), n.on("destroy", (function() { o.remove() })), o
                    },
                    Direction: function(e, n, i) { var o = { mount: function() { this.value = e.settings.direction }, resolve: function(e) { var t = e.slice(0, 1); return this.is("rtl") ? e.split(t).join(A[t]) : e }, is: function(e) { return this.value === e }, addClass: function() { n.Html.root.classList.add(e.settings.classes.direction[this.value]) }, removeClass: function() { n.Html.root.classList.remove(e.settings.classes.direction[this.value]) } }; return m(o, "value", { get: function() { return o._v }, set: function(e) { T.indexOf(e) > -1 ? o._v = e : t("Direction value must be `ltr` or `rtl`") } }), i.on(["destroy", "update"], (function() { o.removeClass() })), i.on("update", (function() { o.mount() })), i.on(["build.before", "update"], (function() { o.addClass() })), o },
                    Peek: function(e, t, n) {
                        var i = { mount: function() { this.value = e.settings.peek } };
                        return m(i, "value", { get: function() { return i._v }, set: function(e) { u(e) ? (e.before = l(e.before), e.after = l(e.after)) : e = l(e), i._v = e } }), m(i, "reductor", {
                            get: function() {
                                var t = i.value,
                                    n = e.settings.perView;
                                return u(t) ? t.before / n + t.after / n : 2 * t / n
                            }
                        }), n.on(["resize", "update"], (function() { i.mount() })), i
                    },
                    Sizes: function(e, t, n) {
                        var i = {
                            setupSlides: function() { for (var e = this.slideWidth + "px", n = t.Html.slides, i = 0; i < n.length; i++) n[i].style.width = e },
                            setupWrapper: function(e) { t.Html.wrapper.style.width = this.wrapperSize + "px" },
                            remove: function() {
                                for (var e = t.Html.slides, n = 0; n < e.length; n++) e[n].style.width = "";
                                t.Html.wrapper.style.width = ""
                            }
                        };
                        return m(i, "length", { get: function() { return t.Html.slides.length } }), m(i, "width", { get: function() { return t.Html.root.offsetWidth } }), m(i, "wrapperSize", { get: function() { return i.slideWidth * i.length + t.Gaps.grow + t.Clones.grow } }), m(i, "slideWidth", { get: function() { return i.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor } }), n.on(["build.before", "resize", "update"], (function() { i.setupSlides(), i.setupWrapper() })), n.on("destroy", (function() { i.remove() })), i
                    },
                    Gaps: function(e, t, n) {
                        var i = {
                            apply: function(e) {
                                for (var n = 0, i = e.length; n < i; n++) {
                                    var o = e[n].style,
                                        r = t.Direction.value;
                                    o[_[r][0]] = 0 !== n ? this.value / 2 + "px" : "", n !== e.length - 1 ? o[_[r][1]] = this.value / 2 + "px" : o[_[r][1]] = ""
                                }
                            },
                            remove: function(e) {
                                for (var t = 0, n = e.length; t < n; t++) {
                                    var i = e[t].style;
                                    i.marginLeft = "", i.marginRight = ""
                                }
                            }
                        };
                        return m(i, "value", { get: function() { return l(e.settings.gap) } }), m(i, "grow", { get: function() { return i.value * (t.Sizes.length - 1) } }), m(i, "reductor", { get: function() { var t = e.settings.perView; return i.value * (t - 1) / t } }), n.on(["build.after", "update"], w((function() { i.apply(t.Html.wrapper.children) }), 30)), n.on("destroy", (function() { i.remove(t.Html.wrapper.children) })), i
                    },
                    Move: function(e, t, n) {
                        var i = {
                            mount: function() { this._o = 0 },
                            make: function() {
                                var e = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this.offset = i, n.emit("move", { movement: this.value }), t.Transition.after((function() { n.emit("move.after", { movement: e.value }) }))
                            }
                        };
                        return m(i, "offset", { get: function() { return i._o }, set: function(e) { i._o = h(e) ? 0 : l(e) } }), m(i, "translate", { get: function() { return t.Sizes.slideWidth * e.index } }), m(i, "value", {
                            get: function() {
                                var e = this.offset,
                                    n = this.translate;
                                return t.Direction.is("rtl") ? n + e : n - e
                            }
                        }), n.on(["build.before", "run"], (function() { i.make() })), i
                    },
                    Clones: function(e, t, n) {
                        var i = {
                            mount: function() { this.items = [], e.isType("carousel") && (this.items = this.collect()) },
                            collect: function() {
                                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = t.Html.slides, o = e.settings, r = o.perView, s = o.classes, a = +!!e.settings.peek, l = r + a, c = i.slice(0, l), u = i.slice(-l), d = 0; d < Math.max(1, Math.floor(r / i.length)); d++) {
                                    for (var h = 0; h < c.length; h++) {
                                        var p = c[h].cloneNode(!0);
                                        p.classList.add(s.cloneSlide), n.push(p)
                                    }
                                    for (var f = 0; f < u.length; f++) {
                                        var m = u[f].cloneNode(!0);
                                        m.classList.add(s.cloneSlide), n.unshift(m)
                                    }
                                }
                                return n
                            },
                            append: function() { for (var e = this.items, n = t.Html, i = n.wrapper, o = n.slides, r = Math.floor(e.length / 2), s = e.slice(0, r).reverse(), a = e.slice(r, e.length), l = t.Sizes.slideWidth + "px", c = 0; c < a.length; c++) i.appendChild(a[c]); for (var u = 0; u < s.length; u++) i.insertBefore(s[u], o[0]); for (var d = 0; d < e.length; d++) e[d].style.width = l },
                            remove: function() { for (var e = this.items, n = 0; n < e.length; n++) t.Html.wrapper.removeChild(e[n]) }
                        };
                        return m(i, "grow", { get: function() { return (t.Sizes.slideWidth + t.Gaps.value) * i.items.length } }), n.on("update", (function() { i.remove(), i.mount(), i.append() })), n.on("build.before", (function() { e.isType("carousel") && i.append() })), n.on("destroy", (function() { i.remove() })), i
                    },
                    Resize: function(e, t, n) {
                        var i = new S,
                            o = { mount: function() { this.bind() }, bind: function() { i.on("resize", window, w((function() { n.emit("resize") }), e.settings.throttle)) }, unbind: function() { i.off("resize", window) } };
                        return n.on("destroy", (function() { o.unbind(), i.destroy() })), o
                    },
                    Build: function(e, t, n) {
                        var i = {
                            mount: function() { n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after") },
                            typeClass: function() { t.Html.root.classList.add(e.settings.classes[e.settings.type]) },
                            activeClass: function() {
                                var n = e.settings.classes,
                                    i = t.Html.slides[e.index];
                                i && (i.classList.add(n.activeSlide), x(i).forEach((function(e) { e.classList.remove(n.activeSlide) })))
                            },
                            removeClasses: function() {
                                var n = e.settings.classes;
                                t.Html.root.classList.remove(n[e.settings.type]), t.Html.slides.forEach((function(e) { e.classList.remove(n.activeSlide) }))
                            }
                        };
                        return n.on(["destroy", "update"], (function() { i.removeClasses() })), n.on(["resize", "update"], (function() { i.mount() })), n.on("move.after", (function() { i.activeClass() })), i
                    },
                    Run: function(e, n, i) {
                        var o = {
                            mount: function() { this._o = !1 },
                            make: function(t) {
                                var o = this;
                                e.disabled || (e.disable(), this.move = t, i.emit("run.before", this.move), this.calculate(), i.emit("run", this.move), n.Transition.after((function() { o.isStart() && i.emit("run.start", o.move), o.isEnd() && i.emit("run.end", o.move), (o.isOffset("<") || o.isOffset(">")) && (o._o = !1, i.emit("run.offset", o.move)), i.emit("run.after", o.move), e.enable() })))
                            },
                            calculate: function() {
                                var n = this.move,
                                    i = this.length,
                                    o = n.steps,
                                    r = n.direction,
                                    s = "number" == typeof l(o) && 0 !== l(o);
                                switch (r) {
                                    case ">":
                                        ">" === o ? e.index = i : this.isEnd() ? e.isType("slider") && !e.settings.rewind || (this._o = !0, e.index = 0) : s ? e.index += Math.min(i - e.index, -l(o)) : e.index++;
                                        break;
                                    case "<":
                                        "<" === o ? e.index = 0 : this.isStart() ? e.isType("slider") && !e.settings.rewind || (this._o = !0, e.index = i) : s ? e.index -= Math.min(e.index, l(o)) : e.index--;
                                        break;
                                    case "=":
                                        e.index = o;
                                        break;
                                    default:
                                        t("Invalid direction pattern [" + r + o + "] has been used")
                                }
                            },
                            isStart: function() { return 0 === e.index },
                            isEnd: function() { return e.index === this.length },
                            isOffset: function(e) { return this._o && this.move.direction === e }
                        };
                        return m(o, "move", {
                            get: function() { return this._m },
                            set: function(e) {
                                var t = e.substr(1);
                                this._m = { direction: e.substr(0, 1), steps: t ? l(t) ? l(t) : t : 0 }
                            }
                        }), m(o, "length", {
                            get: function() {
                                var t = e.settings,
                                    i = n.Html.slides.length;
                                return e.isType("slider") && "center" !== t.focusAt && t.bound ? i - 1 - (l(t.perView) - 1) + l(t.focusAt) : i - 1
                            }
                        }), m(o, "offset", { get: function() { return this._o } }), o
                    },
                    Swipe: function(e, t, n) {
                        var i = new S,
                            o = 0,
                            r = 0,
                            s = 0,
                            a = !1,
                            c = !!D && { passive: !0 },
                            u = {
                                mount: function() { this.bindSwipeStart() },
                                start: function(t) {
                                    if (!a && !e.disabled) {
                                        this.disable();
                                        var i = this.touches(t);
                                        o = null, r = l(i.pageX), s = l(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start")
                                    }
                                },
                                move: function(i) {
                                    if (!e.disabled) {
                                        var a = e.settings,
                                            c = a.touchAngle,
                                            u = a.touchRatio,
                                            d = a.classes,
                                            h = this.touches(i),
                                            p = l(h.pageX) - r,
                                            f = l(h.pageY) - s,
                                            m = Math.abs(p << 2),
                                            g = Math.abs(f << 2),
                                            y = Math.sqrt(m + g),
                                            v = Math.sqrt(g);
                                        if (!(180 * (o = Math.asin(v / y)) / Math.PI < c)) return !1;
                                        i.stopPropagation(), t.Move.make(p * parseFloat(u)), t.Html.root.classList.add(d.dragging), n.emit("swipe.move")
                                    }
                                },
                                end: function(i) {
                                    if (!e.disabled) {
                                        var s = e.settings,
                                            a = this.touches(i),
                                            c = this.threshold(i),
                                            u = a.pageX - r,
                                            d = 180 * o / Math.PI,
                                            h = Math.round(u / t.Sizes.slideWidth);
                                        this.enable(), u > c && d < s.touchAngle ? (s.perTouch && (h = Math.min(h, l(s.perTouch))), t.Direction.is("rtl") && (h = -h), t.Run.make(t.Direction.resolve("<" + h))) : u < -c && d < s.touchAngle ? (s.perTouch && (h = Math.max(h, -l(s.perTouch))), t.Direction.is("rtl") && (h = -h), t.Run.make(t.Direction.resolve(">" + h))) : t.Move.make(), t.Html.root.classList.remove(s.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end")
                                    }
                                },
                                bindSwipeStart: function() {
                                    var n = this,
                                        o = e.settings;
                                    o.swipeThreshold && i.on(N[0], t.Html.wrapper, (function(e) { n.start(e) }), c), o.dragThreshold && i.on(N[1], t.Html.wrapper, (function(e) { n.start(e) }), c)
                                },
                                unbindSwipeStart: function() { i.off(N[0], t.Html.wrapper, c), i.off(N[1], t.Html.wrapper, c) },
                                bindSwipeMove: function() {
                                    var n = this;
                                    i.on(F, t.Html.wrapper, w((function(e) { n.move(e) }), e.settings.throttle), c)
                                },
                                unbindSwipeMove: function() { i.off(F, t.Html.wrapper, c) },
                                bindSwipeEnd: function() {
                                    var e = this;
                                    i.on(H, t.Html.wrapper, (function(t) { e.end(t) }))
                                },
                                unbindSwipeEnd: function() { i.off(H, t.Html.wrapper) },
                                touches: function(e) { return q.indexOf(e.type) > -1 ? e : e.touches[0] || e.changedTouches[0] },
                                threshold: function(t) { var n = e.settings; return q.indexOf(t.type) > -1 ? n.dragThreshold : n.swipeThreshold },
                                enable: function() { return a = !1, t.Transition.enable(), this },
                                disable: function() { return a = !0, t.Transition.disable(), this }
                            };
                        return n.on("build.after", (function() { t.Html.root.classList.add(e.settings.classes.swipeable) })), n.on("destroy", (function() { u.unbindSwipeStart(), u.unbindSwipeMove(), u.unbindSwipeEnd(), i.destroy() })), u
                    },
                    Images: function(e, t, n) {
                        var i = new S,
                            o = { mount: function() { this.bind() }, bind: function() { i.on("dragstart", t.Html.wrapper, this.dragstart) }, unbind: function() { i.off("dragstart", t.Html.wrapper) }, dragstart: function(e) { e.preventDefault() } };
                        return n.on("destroy", (function() { o.unbind(), i.destroy() })), o
                    },
                    Anchors: function(e, t, n) {
                        var i = new S,
                            o = !1,
                            r = !1,
                            s = {
                                mount: function() { this._a = t.Html.wrapper.querySelectorAll("a"), this.bind() },
                                bind: function() { i.on("click", t.Html.wrapper, this.click) },
                                unbind: function() { i.off("click", t.Html.wrapper) },
                                click: function(e) { r && (e.stopPropagation(), e.preventDefault()) },
                                detach: function() {
                                    if (r = !0, !o) {
                                        for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !1, this.items[e].setAttribute("data-href", this.items[e].getAttribute("href")), this.items[e].removeAttribute("href");
                                        o = !0
                                    }
                                    return this
                                },
                                attach: function() {
                                    if (r = !1, o) {
                                        for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !0, this.items[e].setAttribute("href", this.items[e].getAttribute("data-href"));
                                        o = !1
                                    }
                                    return this
                                }
                            };
                        return m(s, "items", { get: function() { return s._a } }), n.on("swipe.move", (function() { s.detach() })), n.on("swipe.end", (function() { t.Transition.after((function() { s.attach() })) })), n.on("destroy", (function() { s.attach(), s.unbind(), i.destroy() })), s
                    },
                    Controls: function(e, t, n) {
                        var i = new S,
                            o = !!D && { passive: !0 },
                            r = {
                                mount: function() { this._n = t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = t.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings() },
                                setActive: function() { for (var e = 0; e < this._n.length; e++) this.addClass(this._n[e].children) },
                                removeActive: function() { for (var e = 0; e < this._n.length; e++) this.removeClass(this._n[e].children) },
                                addClass: function(t) {
                                    var n = e.settings,
                                        i = t[e.index];
                                    i && (i.classList.add(n.classes.activeNav), x(i).forEach((function(e) { e.classList.remove(n.classes.activeNav) })))
                                },
                                removeClass: function(t) {
                                    var n = t[e.index];
                                    n && n.classList.remove(e.settings.classes.activeNav)
                                },
                                addBindings: function() { for (var e = 0; e < this._c.length; e++) this.bind(this._c[e].children) },
                                removeBindings: function() { for (var e = 0; e < this._c.length; e++) this.unbind(this._c[e].children) },
                                bind: function(e) { for (var t = 0; t < e.length; t++) i.on("click", e[t], this.click), i.on("touchstart", e[t], this.click, o) },
                                unbind: function(e) { for (var t = 0; t < e.length; t++) i.off(["click", "touchstart"], e[t]) },
                                click: function(e) { e.preventDefault(), t.Run.make(t.Direction.resolve(e.currentTarget.getAttribute("data-glide-dir"))) }
                            };
                        return m(r, "items", { get: function() { return r._c } }), n.on(["mount.after", "move.after"], (function() { r.setActive() })), n.on("destroy", (function() { r.removeBindings(), r.removeActive(), i.destroy() })), r
                    },
                    Keyboard: function(e, t, n) {
                        var i = new S,
                            o = { mount: function() { e.settings.keyboard && this.bind() }, bind: function() { i.on("keyup", document, this.press) }, unbind: function() { i.off("keyup", document) }, press: function(e) { 39 === e.keyCode && t.Run.make(t.Direction.resolve(">")), 37 === e.keyCode && t.Run.make(t.Direction.resolve("<")) } };
                        return n.on(["destroy", "update"], (function() { o.unbind() })), n.on("update", (function() { o.mount() })), n.on("destroy", (function() { i.destroy() })), o
                    },
                    Autoplay: function(e, t, n) {
                        var i = new S,
                            o = {
                                mount: function() { this.start(), e.settings.hoverpause && this.bind() },
                                start: function() {
                                    var n = this;
                                    e.settings.autoplay && h(this._i) && (this._i = setInterval((function() { n.stop(), t.Run.make(">"), n.start() }), this.time))
                                },
                                stop: function() { this._i = clearInterval(this._i) },
                                bind: function() {
                                    var e = this;
                                    i.on("mouseover", t.Html.root, (function() { e.stop() })), i.on("mouseout", t.Html.root, (function() { e.start() }))
                                },
                                unbind: function() { i.off(["mouseover", "mouseout"], t.Html.root) }
                            };
                        return m(o, "time", { get: function() { var n = t.Html.slides[e.index].getAttribute("data-glide-autoplay"); return l(n || e.settings.autoplay) } }), n.on(["destroy", "update"], (function() { o.unbind() })), n.on(["run.before", "pause", "destroy", "swipe.start", "update"], (function() { o.stop() })), n.on(["run.after", "play", "swipe.end"], (function() { o.start() })), n.on("update", (function() { o.mount() })), n.on("destroy", (function() { i.destroy() })), o
                    },
                    Breakpoints: function(e, t, n) {
                        var i = new S,
                            o = e.settings,
                            s = z(o.breakpoints),
                            a = r({}, o),
                            l = {
                                match: function(e) {
                                    if (void 0 !== window.matchMedia)
                                        for (var t in e)
                                            if (e.hasOwnProperty(t) && window.matchMedia("(max-width: " + t + "px)").matches) return e[t];
                                    return a
                                }
                            };
                        return r(o, l.match(s)), i.on("resize", window, w((function() { e.settings = g(o, l.match(s)) }), e.settings.throttle)), n.on("update", (function() { s = z(s), a = r({}, o) })), n.on("destroy", (function() { i.off("resize", window) })), l
                    }
                },
                V = function(e) {
                    function t() { return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), o(t, [{ key: "mount", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "mount", this).call(this, r({}, R, e)) } }]), t
                }(v);
            return V
        }))
    }, {}],
    3: [function(e, t, n) {
        var i = Object.defineProperty;
        i(n, "__esModule", { value: !0 }), ((e, t) => { for (var n in t) i(e, n, { get: t[n], enumerable: !0 }) })(n, { default: () => o });
        var o = function(e) {
            e.hasOwnProperty("persistedStored") && "function" == typeof e.persistedStore || (window.__ferns = {}, e.persistedStore = function(t, n) {
                let i = localStorage.getItem(`__fern_${t}`);
                if (![null, void 0].includes(i)) {
                    const e = JSON.parse(i),
                        t = Object.entries(n).reduce(((t, [n, i]) => (e.hasOwnProperty(n) || (t[n] = i), t)), {});
                    n = Object.assign(e, t)
                }
                e.store(t, n), window.__ferns[t] = e.effect((() => {
                    const n = JSON.stringify(e.store(t));
                    localStorage.setItem(`__fern_${t}`, n)
                }))
            })
        }
    }, {}],
    4: [function(e, t, n) {
        (function(e) {
            (function() {
                var t = Object.create,
                    i = Object.defineProperty,
                    o = Object.getPrototypeOf,
                    r = Object.prototype.hasOwnProperty,
                    s = Object.getOwnPropertyNames,
                    a = Object.getOwnPropertyDescriptor,
                    l = e => i(e, "__esModule", { value: !0 }),
                    c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
                    u = c((t => {
                        "use strict";

                        function n(e, t) {
                            const n = Object.create(null),
                                i = e.split(",");
                            for (let e = 0; e < i.length; e++) n[i[e]] = !0;
                            return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
                        }
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i = { 1: "TEXT", 2: "CLASS", 4: "STYLE", 8: "PROPS", 16: "FULL_PROPS", 32: "HYDRATE_EVENTS", 64: "STABLE_FRAGMENT", 128: "KEYED_FRAGMENT", 256: "UNKEYED_FRAGMENT", 512: "NEED_PATCH", 1024: "DYNAMIC_SLOTS", 2048: "DEV_ROOT_FRAGMENT", [-1]: "HOISTED", [-2]: "BAIL" },
                            o = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" },
                            r = n("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");
                        var s = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
                            a = n(s),
                            l = n(s + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),
                            c = /[>/="'\u0009\u000a\u000c\u0020]/,
                            u = {};
                        var d = n("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"),
                            h = n("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
                        var p = /;(?![^(]*\))/g,
                            f = /:(.+)/;

                        function m(e) {
                            const t = {};
                            return e.split(p).forEach((e => {
                                if (e) {
                                    const n = e.split(f);
                                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                                }
                            })), t
                        }
                        var g = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),
                            y = n("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),
                            v = n("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),
                            b = /["'&<>]/;
                        var w = /^-?>|<!--|-->|--!>|<!-$/g;

                        function _(e, t) {
                            if (e === t) return !0;
                            let n = L(e),
                                i = L(t);
                            if (n || i) return !(!n || !i) && e.getTime() === t.getTime();
                            if (n = M(e), i = M(t), n || i) return !(!n || !i) && function(e, t) { if (e.length !== t.length) return !1; let n = !0; for (let i = 0; n && i < e.length; i++) n = _(e[i], t[i]); return n }(e, t);
                            if (n = D(e), i = D(t), n || i) {
                                if (!n || !i) return !1;
                                if (Object.keys(e).length !== Object.keys(t).length) return !1;
                                for (const n in e) {
                                    const i = e.hasOwnProperty(n),
                                        o = t.hasOwnProperty(n);
                                    if (i && !o || !i && o || !_(e[n], t[n])) return !1
                                }
                            }
                            return String(e) === String(t)
                        }
                        var x, k = (e, t) => C(t) ? {
                                [`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n]) => (e[`${t} =>`] = n, e)), {})
                            } : O(t) ? {
                                [`Set(${t.size})`]: [...t.values()]
                            } : !D(t) || M(t) || H(t) ? t : String(t),
                            j = Object.freeze({}),
                            S = Object.freeze([]),
                            T = /^on[^a-z]/,
                            A = Object.assign,
                            E = Object.prototype.hasOwnProperty,
                            M = Array.isArray,
                            C = e => "[object Map]" === F(e),
                            O = e => "[object Set]" === F(e),
                            L = e => e instanceof Date,
                            P = e => "function" == typeof e,
                            I = e => "string" == typeof e,
                            D = e => null !== e && "object" == typeof e,
                            N = Object.prototype.toString,
                            F = e => N.call(e),
                            H = e => "[object Object]" === F(e),
                            q = n(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
                            z = e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) },
                            R = /-(\w)/g,
                            V = z((e => e.replace(R, ((e, t) => t ? t.toUpperCase() : "")))),
                            B = /\B([A-Z])/g,
                            W = z((e => e.replace(B, "-$1").toLowerCase())),
                            U = z((e => e.charAt(0).toUpperCase() + e.slice(1))),
                            G = z((e => e ? `on${U(e)}` : ""));
                        t.EMPTY_ARR = S, t.EMPTY_OBJ = j, t.NO = () => !1, t.NOOP = () => {}, t.PatchFlagNames = i, t.babelParserDefaultPlugins = ["bigInt", "optionalChaining", "nullishCoalescingOperator"], t.camelize = V, t.capitalize = U, t.def = (e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) }, t.escapeHtml = function(e) {
                            const t = "" + e,
                                n = b.exec(t);
                            if (!n) return t;
                            let i, o, r = "",
                                s = 0;
                            for (o = n.index; o < t.length; o++) {
                                switch (t.charCodeAt(o)) {
                                    case 34:
                                        i = "&quot;";
                                        break;
                                    case 38:
                                        i = "&amp;";
                                        break;
                                    case 39:
                                        i = "&#39;";
                                        break;
                                    case 60:
                                        i = "&lt;";
                                        break;
                                    case 62:
                                        i = "&gt;";
                                        break;
                                    default:
                                        continue
                                }
                                s !== o && (r += t.substring(s, o)), s = o + 1, r += i
                            }
                            return s !== o ? r + t.substring(s, o) : r
                        }, t.escapeHtmlComment = function(e) { return e.replace(w, "") }, t.extend = A, t.generateCodeFrame = function(e, t = 0, n = e.length) {
                            const i = e.split(/\r?\n/);
                            let o = 0;
                            const r = [];
                            for (let e = 0; e < i.length; e++)
                                if (o += i[e].length + 1, o >= t) {
                                    for (let s = e - 2; s <= e + 2 || n > o; s++) {
                                        if (s < 0 || s >= i.length) continue;
                                        const a = s + 1;
                                        r.push(`${a}${" ".repeat(Math.max(3-String(a).length,0))}|  ${i[s]}`);
                                        const l = i[s].length;
                                        if (s === e) {
                                            const e = t - (o - l) + 1,
                                                i = Math.max(1, n > o ? l - e : n - t);
                                            r.push("   |  " + " ".repeat(e) + "^".repeat(i))
                                        } else if (s > e) {
                                            if (n > o) {
                                                const e = Math.max(Math.min(n - o, l), 1);
                                                r.push("   |  " + "^".repeat(e))
                                            }
                                            o += l + 1
                                        }
                                    }
                                    break
                                }
                            return r.join("\n")
                        }, t.getGlobalThis = () => x || (x = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {}), t.hasChanged = (e, t) => e !== t && (e == e || t == t), t.hasOwn = (e, t) => E.call(e, t), t.hyphenate = W, t.invokeArrayFns = (e, t) => { for (let n = 0; n < e.length; n++) e[n](t) }, t.isArray = M, t.isBooleanAttr = l, t.isDate = L, t.isFunction = P, t.isGloballyWhitelisted = r, t.isHTMLTag = g, t.isIntegerKey = e => I(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, t.isKnownAttr = h, t.isMap = C, t.isModelListener = e => e.startsWith("onUpdate:"), t.isNoUnitNumericStyleProp = d, t.isObject = D, t.isOn = e => T.test(e), t.isPlainObject = H, t.isPromise = e => D(e) && P(e.then) && P(e.catch), t.isReservedProp = q, t.isSSRSafeAttrName = function(e) { if (u.hasOwnProperty(e)) return u[e]; const t = c.test(e); return t && console.error(`unsafe attribute name: ${e}`), u[e] = !t }, t.isSVGTag = y, t.isSet = O, t.isSpecialBooleanAttr = a, t.isString = I, t.isSymbol = e => "symbol" == typeof e, t.isVoidTag = v, t.looseEqual = _, t.looseIndexOf = function(e, t) { return e.findIndex((e => _(e, t))) }, t.makeMap = n, t.normalizeClass = function e(t) {
                            let n = "";
                            if (I(t)) n = t;
                            else if (M(t))
                                for (let i = 0; i < t.length; i++) {
                                    const o = e(t[i]);
                                    o && (n += o + " ")
                                } else if (D(t))
                                    for (const e in t) t[e] && (n += e + " ");
                            return n.trim()
                        }, t.normalizeStyle = function e(t) {
                            if (M(t)) {
                                const n = {};
                                for (let i = 0; i < t.length; i++) {
                                    const o = t[i],
                                        r = e(I(o) ? m(o) : o);
                                    if (r)
                                        for (const e in r) n[e] = r[e]
                                }
                                return n
                            }
                            if (D(t)) return t
                        }, t.objectToString = N, t.parseStringStyle = m, t.propsToAttrMap = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, t.remove = (e, t) => {
                            const n = e.indexOf(t);
                            n > -1 && e.splice(n, 1)
                        }, t.slotFlagsText = o, t.stringifyStyle = function(e) {
                            let t = "";
                            if (!e) return t;
                            for (const n in e) {
                                const i = e[n],
                                    o = n.startsWith("--") ? n : W(n);
                                (I(i) || "number" == typeof i && d(o)) && (t += `${o}:${i};`)
                            }
                            return t
                        }, t.toDisplayString = e => null == e ? "" : D(e) ? JSON.stringify(e, k, 2) : String(e), t.toHandlerKey = G, t.toNumber = e => { const t = parseFloat(e); return isNaN(t) ? e : t }, t.toRawType = e => F(e).slice(8, -1), t.toTypeString = F
                    })),
                    d = c(((e, t) => {
                        "use strict";
                        t.exports = u()
                    })),
                    h = c((e => {
                        "use strict";
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var t, n = d(),
                            i = new WeakMap,
                            o = [],
                            r = Symbol("iterate"),
                            s = Symbol("Map key iterate");

                        function a(e, i = n.EMPTY_OBJ) {
                            (function(e) { return e && !0 === e._isEffect })(e) && (e = e.raw);
                            const r = function(e, n) { const i = function() { if (!i.active) return e(); if (!o.includes(i)) { c(i); try { return f(), o.push(i), t = i, e() } finally { o.pop(), m(), t = o[o.length - 1] } } }; return i.id = l++, i.allowRecurse = !!n.allowRecurse, i._isEffect = !0, i.active = !0, i.raw = e, i.deps = [], i.options = n, i }(e, i);
                            return i.lazy || r(), r
                        }
                        var l = 0;

                        function c(e) {
                            const { deps: t } = e;
                            if (t.length) {
                                for (let n = 0; n < t.length; n++) t[n].delete(e);
                                t.length = 0
                            }
                        }
                        var u = !0,
                            h = [];

                        function p() { h.push(u), u = !1 }

                        function f() { h.push(u), u = !0 }

                        function m() {
                            const e = h.pop();
                            u = void 0 === e || e
                        }

                        function g(e, n, o) {
                            if (!u || void 0 === t) return;
                            let r = i.get(e);
                            r || i.set(e, r = new Map);
                            let s = r.get(o);
                            s || r.set(o, s = new Set), s.has(t) || (s.add(t), t.deps.push(s), t.options.onTrack && t.options.onTrack({ effect: t, target: e, type: n, key: o }))
                        }

                        function y(e, o, a, l, c, u) {
                            const d = i.get(e);
                            if (!d) return;
                            const h = new Set,
                                p = e => {
                                    e && e.forEach((e => {
                                        (e !== t || e.allowRecurse) && h.add(e)
                                    }))
                                };
                            if ("clear" === o) d.forEach(p);
                            else if ("length" === a && n.isArray(e)) d.forEach(((e, t) => {
                                ("length" === t || t >= l) && p(e)
                            }));
                            else switch (void 0 !== a && p(d.get(a)), o) {
                                case "add":
                                    n.isArray(e) ? n.isIntegerKey(a) && p(d.get("length")) : (p(d.get(r)), n.isMap(e) && p(d.get(s)));
                                    break;
                                case "delete":
                                    n.isArray(e) || (p(d.get(r)), n.isMap(e) && p(d.get(s)));
                                    break;
                                case "set":
                                    n.isMap(e) && p(d.get(r))
                            }
                            h.forEach((t => { t.options.onTrigger && t.options.onTrigger({ effect: t, target: e, key: a, type: o, newValue: l, oldValue: c, oldTarget: u }), t.options.scheduler ? t.options.scheduler(t) : t() }))
                        }
                        var v = n.makeMap("__proto__,__v_isRef,__isVue"),
                            b = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter(n.isSymbol)),
                            w = S(),
                            _ = S(!1, !0),
                            x = S(!0),
                            k = S(!0, !0),
                            j = {};

                        function S(e = !1, t = !1) { return function(i, o, r) { if ("__v_isReactive" === o) return !e; if ("__v_isReadonly" === o) return e; if ("__v_raw" === o && r === (e ? t ? se : re : t ? oe : ie).get(i)) return i; const s = n.isArray(i); if (!e && s && n.hasOwn(j, o)) return Reflect.get(j, o, r); const a = Reflect.get(i, o, r); if (n.isSymbol(o) ? b.has(o) : v(o)) return a; if (e || g(i, "get", o), t) return a; if (me(a)) { return !s || !n.isIntegerKey(o) ? a.value : a } return n.isObject(a) ? e ? le(a) : ae(a) : a } }["includes", "indexOf", "lastIndexOf"].forEach((e => {
                            const t = Array.prototype[e];
                            j[e] = function(...e) { const n = pe(this); for (let e = 0, t = this.length; e < t; e++) g(n, "get", e + ""); const i = t.apply(n, e); return -1 === i || !1 === i ? t.apply(n, e.map(pe)) : i }
                        })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
                            const t = Array.prototype[e];
                            j[e] = function(...e) { p(); const n = t.apply(this, e); return m(), n }
                        }));
                        var T = E(),
                            A = E(!0);

                        function E(e = !1) {
                            return function(t, i, o, r) {
                                let s = t[i];
                                if (!e && (o = pe(o), s = pe(s), !n.isArray(t) && me(s) && !me(o))) return s.value = o, !0;
                                const a = n.isArray(t) && n.isIntegerKey(i) ? Number(i) < t.length : n.hasOwn(t, i),
                                    l = Reflect.set(t, i, o, r);
                                return t === pe(r) && (a ? n.hasChanged(o, s) && y(t, "set", i, o, s) : y(t, "add", i, o)), l
                            }
                        }
                        var M = {
                                get: w,
                                set: T,
                                deleteProperty: function(e, t) {
                                    const i = n.hasOwn(e, t),
                                        o = e[t],
                                        r = Reflect.deleteProperty(e, t);
                                    return r && i && y(e, "delete", t, void 0, o), r
                                },
                                has: function(e, t) { const i = Reflect.has(e, t); return n.isSymbol(t) && b.has(t) || g(e, "has", t), i },
                                ownKeys: function(e) { return g(e, "iterate", n.isArray(e) ? "length" : r), Reflect.ownKeys(e) }
                            },
                            C = { get: x, set: (e, t) => (console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0), deleteProperty: (e, t) => (console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0) },
                            O = n.extend({}, M, { get: _, set: A }),
                            L = n.extend({}, C, { get: k }),
                            P = e => n.isObject(e) ? ae(e) : e,
                            I = e => n.isObject(e) ? le(e) : e,
                            D = e => e,
                            N = e => Reflect.getPrototypeOf(e);

                        function F(e, t, n = !1, i = !1) {
                            const o = pe(e = e.__v_raw),
                                r = pe(t);
                            t !== r && !n && g(o, "get", t), !n && g(o, "get", r);
                            const { has: s } = N(o), a = i ? D : n ? I : P;
                            return s.call(o, t) ? a(e.get(t)) : s.call(o, r) ? a(e.get(r)) : void(e !== o && e.get(t))
                        }

                        function H(e, t = !1) {
                            const n = this.__v_raw,
                                i = pe(n),
                                o = pe(e);
                            return e !== o && !t && g(i, "has", e), !t && g(i, "has", o), e === o ? n.has(e) : n.has(e) || n.has(o)
                        }

                        function q(e, t = !1) { return e = e.__v_raw, !t && g(pe(e), "iterate", r), Reflect.get(e, "size", e) }

                        function z(e) { e = pe(e); const t = pe(this); return N(t).has.call(t, e) || (t.add(e), y(t, "add", e, e)), this }

                        function R(e, t) {
                            t = pe(t);
                            const i = pe(this),
                                { has: o, get: r } = N(i);
                            let s = o.call(i, e);
                            s ? ne(i, o, e) : (e = pe(e), s = o.call(i, e));
                            const a = r.call(i, e);
                            return i.set(e, t), s ? n.hasChanged(t, a) && y(i, "set", e, t, a) : y(i, "add", e, t), this
                        }

                        function V(e) {
                            const t = pe(this),
                                { has: n, get: i } = N(t);
                            let o = n.call(t, e);
                            o ? ne(t, n, e) : (e = pe(e), o = n.call(t, e));
                            const r = i ? i.call(t, e) : void 0,
                                s = t.delete(e);
                            return o && y(t, "delete", e, void 0, r), s
                        }

                        function B() {
                            const e = pe(this),
                                t = 0 !== e.size,
                                i = n.isMap(e) ? new Map(e) : new Set(e),
                                o = e.clear();
                            return t && y(e, "clear", void 0, void 0, i), o
                        }

                        function W(e, t) {
                            return function(n, i) {
                                const o = this,
                                    s = o.__v_raw,
                                    a = pe(s),
                                    l = t ? D : e ? I : P;
                                return !e && g(a, "iterate", r), s.forEach(((e, t) => n.call(i, l(e), l(t), o)))
                            }
                        }

                        function U(e, t, i) {
                            return function(...o) {
                                const a = this.__v_raw,
                                    l = pe(a),
                                    c = n.isMap(l),
                                    u = "entries" === e || e === Symbol.iterator && c,
                                    d = "keys" === e && c,
                                    h = a[e](...o),
                                    p = i ? D : t ? I : P;
                                return !t && g(l, "iterate", d ? s : r), { next() { const { value: e, done: t } = h.next(); return t ? { value: e, done: t } : { value: u ? [p(e[0]), p(e[1])] : p(e), done: t } }, [Symbol.iterator]() { return this } }
                            }
                        }

                        function G(e) {
                            return function(...t) {
                                {
                                    const i = t[0] ? `on key "${t[0]}" ` : "";
                                    console.warn(`${n.capitalize(e)} operation ${i}failed: target is readonly.`, pe(this))
                                }
                                return "delete" !== e && this
                            }
                        }
                        var K = {get(e) { return F(this, e) }, get size() { return q(this) }, has: H, add: z, set: R, delete: V, clear: B, forEach: W(!1, !1) },
                            Y = {get(e) { return F(this, e, !1, !0) }, get size() { return q(this) }, has: H, add: z, set: R, delete: V, clear: B, forEach: W(!1, !0) },
                            $ = {get(e) { return F(this, e, !0) }, get size() { return q(this, !0) }, has(e) { return H.call(this, e, !0) }, add: G("add"), set: G("set"), delete: G("delete"), clear: G("clear"), forEach: W(!0, !1) },
                            J = {get(e) { return F(this, e, !0, !0) }, get size() { return q(this, !0) }, has(e) { return H.call(this, e, !0) }, add: G("add"), set: G("set"), delete: G("delete"), clear: G("clear"), forEach: W(!0, !0) };

                        function X(e, t) { const i = t ? e ? J : Y : e ? $ : K; return (t, o, r) => "__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(n.hasOwn(i, o) && o in t ? i : t, o, r) }["keys", "values", "entries", Symbol.iterator].forEach((e => { K[e] = U(e, !1, !1), $[e] = U(e, !0, !1), Y[e] = U(e, !1, !0), J[e] = U(e, !0, !0) }));
                        var Z = { get: X(!1, !1) },
                            Q = { get: X(!1, !0) },
                            ee = { get: X(!0, !1) },
                            te = { get: X(!0, !0) };

                        function ne(e, t, i) {
                            const o = pe(i);
                            if (o !== i && t.call(e, o)) {
                                const t = n.toRawType(e);
                                console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
                            }
                        }
                        var ie = new WeakMap,
                            oe = new WeakMap,
                            re = new WeakMap,
                            se = new WeakMap;

                        function ae(e) { return e && e.__v_isReadonly ? e : ce(e, !1, M, Z, ie) }

                        function le(e) { return ce(e, !0, C, ee, re) }

                        function ce(e, t, i, o, r) {
                            if (!n.isObject(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
                            if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
                            const s = r.get(e);
                            if (s) return s;
                            const a = (l = e).__v_skip || !Object.isExtensible(l) ? 0 : function(e) {
                                switch (e) {
                                    case "Object":
                                    case "Array":
                                        return 1;
                                    case "Map":
                                    case "Set":
                                    case "WeakMap":
                                    case "WeakSet":
                                        return 2;
                                    default:
                                        return 0
                                }
                            }(n.toRawType(l));
                            var l;
                            if (0 === a) return e;
                            const c = new Proxy(e, 2 === a ? o : i);
                            return r.set(e, c), c
                        }

                        function ue(e) { return de(e) ? ue(e.__v_raw) : !(!e || !e.__v_isReactive) }

                        function de(e) { return !(!e || !e.__v_isReadonly) }

                        function he(e) { return ue(e) || de(e) }

                        function pe(e) { return e && pe(e.__v_raw) || e }
                        var fe = e => n.isObject(e) ? ae(e) : e;

                        function me(e) { return Boolean(e && !0 === e.__v_isRef) }

                        function ge(e, t = !1) {
                            return me(e) ? e : new class {
                                constructor(e, t = !1) { this._rawValue = e, this._shallow = t, this.__v_isRef = !0, this._value = t ? e : fe(e) }
                                get value() { return g(pe(this), "get", "value"), this._value }
                                set value(e) { n.hasChanged(pe(e), this._rawValue) && (this._rawValue = e, this._value = this._shallow ? e : fe(e), y(pe(this), "set", "value", e)) }
                            }(e, t)
                        }

                        function ye(e) { return me(e) ? e.value : e }
                        var ve = { get: (e, t, n) => ye(Reflect.get(e, t, n)), set: (e, t, n, i) => { const o = e[t]; return me(o) && !me(n) ? (o.value = n, !0) : Reflect.set(e, t, n, i) } };

                        function be(e, t) {
                            return me(e[t]) ? e[t] : new class {
                                constructor(e, t) { this._object = e, this._key = t, this.__v_isRef = !0 }
                                get value() { return this._object[this._key] }
                                set value(e) { this._object[this._key] = e }
                            }(e, t)
                        }
                        e.ITERATE_KEY = r, e.computed = function(e) {
                            let t, i;
                            return n.isFunction(e) ? (t = e, i = () => { console.warn("Write operation failed: computed value is readonly") }) : (t = e.get, i = e.set), new class {
                                constructor(e, t, n) { this._setter = t, this._dirty = !0, this.__v_isRef = !0, this.effect = a(e, { lazy: !0, scheduler: () => { this._dirty || (this._dirty = !0, y(pe(this), "set", "value")) } }), this.__v_isReadonly = n }
                                get value() { const e = pe(this); return e._dirty && (e._value = this.effect(), e._dirty = !1), g(e, "get", "value"), e._value }
                                set value(e) { this._setter(e) }
                            }(t, i, n.isFunction(e) || !e.set)
                        }, e.customRef = function(e) {
                            return new class {
                                constructor(e) {
                                    this.__v_isRef = !0;
                                    const { get: t, set: n } = e((() => g(this, "get", "value")), (() => y(this, "set", "value")));
                                    this._get = t, this._set = n
                                }
                                get value() { return this._get() }
                                set value(e) { this._set(e) }
                            }(e)
                        }, e.effect = a, e.enableTracking = f, e.isProxy = he, e.isReactive = ue, e.isReadonly = de, e.isRef = me, e.markRaw = function(e) { return n.def(e, "__v_skip", !0), e }, e.pauseTracking = p, e.proxyRefs = function(e) { return ue(e) ? e : new Proxy(e, ve) }, e.reactive = ae, e.readonly = le, e.ref = function(e) { return ge(e) }, e.resetTracking = m, e.shallowReactive = function(e) { return ce(e, !1, O, Q, oe) }, e.shallowReadonly = function(e) { return ce(e, !0, L, te, se) }, e.shallowRef = function(e) { return ge(e, !0) }, e.stop = function(e) { e.active && (c(e), e.options.onStop && e.options.onStop(), e.active = !1) }, e.toRaw = pe, e.toRef = be, e.toRefs = function(e) { he(e) || console.warn("toRefs() expects a reactive object but received a plain one."); const t = n.isArray(e) ? new Array(e.length) : {}; for (const n in e) t[n] = be(e, n); return t }, e.track = g, e.trigger = y, e.triggerRef = function(e) { y(pe(e), "set", "value", e.value) }, e.unref = ye
                    })),
                    p = c(((e, t) => {
                        "use strict";
                        t.exports = h()
                    }));
                l(n), ((e, t) => { for (var n in t) i(e, n, { get: t[n], enumerable: !0 }) })(n, { default: () => ot });
                var f, m, g, y, v = !1,
                    b = !1,
                    w = [];

                function _(e) {
                    ! function(e) {
                        w.includes(e) || w.push(e);
                        b || v || (v = !0, queueMicrotask(x))
                    }(e)
                }

                function x() {
                    v = !1, b = !0;
                    for (let e = 0; e < w.length; e++) w[e]();
                    w.length = 0, b = !1
                }
                var k = !0;

                function j(e) { m = e }
                var S = [],
                    T = [],
                    A = [];

                function E(e, t) {
                    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach((([n, i]) => {
                        (void 0 === t || t.includes(n)) && i.forEach((e => e())), delete e._x_attributeCleanups[n]
                    }))
                }
                var M = new MutationObserver(N),
                    C = !1;

                function O() { M.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), C = !0 }
                var L = [],
                    P = !1;

                function I() {
                    (L = L.concat(M.takeRecords())).length && !P && (P = !0, queueMicrotask((() => { N(L), L.length = 0, P = !1 })))
                }

                function D(e) {
                    if (!C) return e();
                    I(), M.disconnect(), C = !1;
                    let t = e();
                    return O(), t
                }

                function N(e) {
                    let t = [],
                        n = [],
                        i = new Map,
                        o = new Map;
                    for (let r = 0; r < e.length; r++)
                        if (!e[r].target._x_ignoreMutationObserver && ("childList" === e[r].type && (e[r].addedNodes.forEach((e => 1 === e.nodeType && t.push(e))), e[r].removedNodes.forEach((e => 1 === e.nodeType && n.push(e)))), "attributes" === e[r].type)) {
                            let t = e[r].target,
                                n = e[r].attributeName,
                                s = e[r].oldValue,
                                a = () => { i.has(t) || i.set(t, []), i.get(t).push({ name: n, value: t.getAttribute(n) }) },
                                l = () => { o.has(t) || o.set(t, []), o.get(t).push(n) };
                            t.hasAttribute(n) && null === s ? a() : t.hasAttribute(n) ? (l(), a()) : l()
                        }
                    o.forEach(((e, t) => { E(t, e) })), i.forEach(((e, t) => { S.forEach((n => n(t, e))) }));
                    for (let e of t) n.includes(e) || A.forEach((t => t(e)));
                    for (let e of n) t.includes(e) || T.forEach((t => t(e)));
                    t = null, n = null, i = null, o = null
                }

                function F(e, t, n) { return e._x_dataStack = [t, ...q(n || e)], () => { e._x_dataStack = e._x_dataStack.filter((e => e !== t)) } }

                function H(e, t) {
                    let n = e._x_dataStack[0];
                    Object.entries(t).forEach((([e, t]) => { n[e] = t }))
                }

                function q(e) { return e._x_dataStack ? e._x_dataStack : e instanceof ShadowRoot ? q(e.host) : e.parentNode ? q(e.parentNode) : [] }

                function z(e) { return new Proxy({}, { ownKeys: () => Array.from(new Set(e.flatMap((e => Object.keys(e))))), has: (t, n) => e.some((e => e.hasOwnProperty(n))), get: (t, n) => (e.find((e => e.hasOwnProperty(n))) || {})[n], set: (t, n, i) => { let o = e.find((e => e.hasOwnProperty(n))); return o ? o[n] = i : e[e.length - 1][n] = i, !0 } }) }

                function R(e) { let t = (n, i = "") => { Object.entries(n).forEach((([o, r]) => { let s = "" === i ? o : `${i}.${o}`; var a; "object" == typeof r && null !== r && r._x_interceptor ? n[o] = r.initialize(e, s, o) : "object" != typeof(a = r) || Array.isArray(a) || null === a || r === n || r instanceof Element || t(r, s) })) }; return t(e) }

                function V(e, t = (() => {})) {
                    let n = { initialValue: void 0, _x_interceptor: !0, initialize(t, n, i) { return e(this.initialValue, (() => function(e, t) { return t.split(".").reduce(((e, t) => e[t]), e) }(t, n)), (e => B(t, n, e)), n, i) } };
                    return t(n), e => {
                        if ("object" == typeof e && null !== e && e._x_interceptor) {
                            let t = n.initialize.bind(n);
                            n.initialize = (i, o, r) => { let s = e.initialize(i, o, r); return n.initialValue = s, t(i, o, r) }
                        } else n.initialValue = e;
                        return n
                    }
                }

                function B(e, t, n) {
                    if ("string" == typeof t && (t = t.split(".")), 1 !== t.length) { if (0 === t.length) throw error; return e[t[0]] || (e[t[0]] = {}), B(e[t[0]], t.slice(1), n) }
                    e[t[0]] = n
                }
                var W = {};

                function U(e, t) { W[e] = t }

                function G(e, t) { return Object.entries(W).forEach((([n, i]) => { Object.defineProperty(e, `$${n}`, { get: () => i(t, { Alpine: He, interceptor: V }), enumerable: !1 }) })), e }

                function K(e, t, n = {}) { let i; return Y(e, t)((e => i = e), n), i }

                function Y(...e) { return $(...e) }
                var $ = J;

                function J(e, t) {
                    let n = {};
                    G(n, e);
                    let i = [n, ...q(e)];
                    if ("function" == typeof t) return function(e, t) { return (n = (() => {}), { scope: i = {}, params: o = [] } = {}) => { Z(n, t.apply(z([i, ...e]), o)) } }(i, t);
                    let o = function(e, t) {
                        let n = function(e) {
                            if (X[e]) return X[e];
                            let t = Object.getPrototypeOf((async function() {})).constructor,
                                n = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)/.test(e) ? `(() => { ${e} })()` : e,
                                i = new t(["__self", "scope"], `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);
                            return X[e] = i, i
                        }(t);
                        return (t = (() => {}), { scope: i = {}, params: o = [] } = {}) => {
                            n.result = void 0, n.finished = !1;
                            let r = z([i, ...e]),
                                s = n(n, r);
                            n.finished ? Z(t, n.result, r, o) : s.then((e => { Z(t, e, r, o) }))
                        }
                    }(i, t);
                    return Q.bind(null, e, t, o)
                }
                var X = {};

                function Z(e, t, n, i) {
                    if ("function" == typeof t) {
                        let o = t.apply(n, i);
                        o instanceof Promise ? o.then((t => Z(e, t, n, i))) : e(o)
                    } else e(t)
                }

                function Q(e, t, n, ...i) { try { return n(...i) } catch (n) { throw console.warn(`Alpine Expression Error: ${n.message}\n\nExpression: "${t}"\n\n`, e), n } }
                var ee = "x-";

                function te(e = "") { return ee + e }
                var ne = {};

                function ie(e, t) { ne[e] = t }

                function oe(e, t, n) {
                    let i = {},
                        o = Array.from(t).map(ce(((e, t) => i[e] = t))).filter(he).map(function(e, t) {
                            return ({ name: n, value: i }) => {
                                let o = n.match(pe()),
                                    r = n.match(/:([a-zA-Z0-9\-:]+)/),
                                    s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                                    a = t || e[n] || n;
                                return { type: o ? o[1] : null, value: r ? r[1] : null, modifiers: s.map((e => e.replace(".", ""))), expression: i, original: a }
                            }
                        }(i, n)).sort(ge);
                    return o.map((t => function(e, t) {
                        let n = () => {},
                            i = ne[t.type] || n,
                            o = [],
                            r = e => o.push(e),
                            [s, a] = function(e) {
                                let t = () => {};
                                return [n => {
                                    let i = m(n);
                                    e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => { e._x_effects.forEach((e => e())) }), e._x_effects.add(i), t = () => { void 0 !== i && (e._x_effects.delete(i), g(i)) }
                                }, () => { t() }]
                            }(e);
                        o.push(a);
                        let l = { Alpine: He, effect: s, cleanup: r, evaluateLater: Y.bind(Y, e), evaluate: K.bind(K, e) },
                            c = () => o.forEach((e => e()));
                        ! function(e, t, n) { e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n) }(e, t.original, c);
                        let u = () => { e._x_ignore || e._x_ignoreSelf || (i.inline && i.inline(e, t, l), i = i.bind(i, e, t, l), re ? se.get(ae).push(i) : i()) };
                        return u.runCleanups = c, u
                    }(e, t)))
                }
                var re = !1,
                    se = new Map,
                    ae = Symbol();
                var le = (e, t) => ({ name: n, value: i }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: i });

                function ce(e = (() => {})) { return ({ name: t, value: n }) => { let { name: i, value: o } = ue.reduce(((e, t) => t(e)), { name: t, value: n }); return i !== t && e(i, t), { name: i, value: o } } }
                var ue = [];

                function de(e) { ue.push(e) }

                function he({ name: e }) { return pe().test(e) }
                var pe = () => new RegExp(`^${ee}([^:^.]+)\\b`);
                var fe = "DEFAULT",
                    me = ["ignore", "ref", "data", "bind", "init", "for", "model", "transition", "show", "if", fe, "element"];

                function ge(e, t) {
                    let n = -1 === me.indexOf(e.type) ? fe : e.type,
                        i = -1 === me.indexOf(t.type) ? fe : t.type;
                    return me.indexOf(n) - me.indexOf(i)
                }

                function ye(e, t, n = {}) { e.dispatchEvent(new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 })) }
                var ve = [],
                    be = !1;

                function we(e) { ve.push(e), queueMicrotask((() => { be || setTimeout((() => { _e() })) })) }

                function _e() { for (be = !1; ve.length;) ve.shift()() }

                function xe(e, t) { if (e instanceof ShadowRoot) return void Array.from(e.children).forEach((e => xe(e, t))); let n = !1; if (t(e, (() => n = !0)), n) return; let i = e.firstElementChild; for (; i;) xe(i, t), i = i.nextElementSibling }

                function ke(e, ...t) { console.warn(`Alpine Warning: ${e}`, ...t) }
                var je = [],
                    Se = [];

                function Te() { return je.map((e => e())) }

                function Ae(e) { je.push(e) }

                function Ee(e) { if (e) { if (Te().some((t => e.matches(t)))) return e; if (e.parentElement) return Ee(e.parentElement) } }

                function Me(e, t = xe) {
                    ! function(e) {
                        re = !0;
                        let t = Symbol();
                        ae = t, se.set(t, []);
                        let n = () => {
                            for (; se.get(t).length;) se.get(t).shift()();
                            se.delete(t)
                        };
                        e(n), re = !1, n()
                    }((() => { t(e, ((e, t) => { oe(e, e.attributes).forEach((e => e())), e._x_ignore && t() })) }))
                }

                function Ce(e, t) {
                    var n;
                    return function() {
                        var i = this,
                            o = arguments,
                            r = function() { n = null, e.apply(i, o) };
                        clearTimeout(n), n = setTimeout(r, t)
                    }
                }

                function Oe(e, t) {
                    let n;
                    return function() {
                        let i = this,
                            o = arguments;
                        n || (e.apply(i, o), n = !0, setTimeout((() => n = !1), t))
                    }
                }
                var Le = {},
                    Pe = !1;
                var Ie = !1;

                function De(e) { return (...t) => Ie || e(...t) }
                var Ne = {};
                var Fe, He = {get reactive() { return f },
                        get release() { return g },
                        get effect() { return m },
                        get raw() { return y },
                        version: "3.3.2",
                        disableEffectScheduling: function(e) { k = !1, e(), k = !0 },
                        setReactivityEngine: function(e) { f = e.reactive, g = e.release, m = t => e.effect(t, { scheduler: e => { k ? _(e) : e() } }), y = e.raw },
                        addRootSelector: Ae,
                        mapAttributes: de,
                        evaluateLater: Y,
                        setEvaluator: function(e) { $ = e },
                        closestRoot: Ee,
                        interceptor: V,
                        mutateDom: D,
                        directive: ie,
                        throttle: Oe,
                        debounce: Ce,
                        evaluate: K,
                        initTree: Me,
                        nextTick: we,
                        prefix: function(e) { ee = e },
                        plugin: function(e) { e(He) },
                        magic: U,
                        store: function(e, t) {
                            if (Pe || (Le = f(Le), Pe = !0), void 0 === t) return Le[e];
                            Le[e] = t, "object" == typeof t && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && Le[e].init()
                        },
                        start: function() {
                            var e;
                            document.body || ke("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), ye(document, "alpine:init"), ye(document, "alpine:initializing"), O(), e = e => Me(e, xe), A.push(e),
                                function(e) { T.push(e) }((e => we((() => { xe(e, (e => E(e))) })))),
                                function(e) { S.push(e) }(((e, t) => { oe(e, t).forEach((e => e())) })), Array.from(document.querySelectorAll(je.concat(Se).map((e => e())))).filter((e => !Ee(e.parentElement))).forEach((e => { Me(e) })), ye(document, "alpine:initialized")
                        },
                        clone: function(e, t) {
                            t._x_dataStack = e._x_dataStack, Ie = !0,
                                function(e) {
                                    let t = m;
                                    j(((e, n) => { let i = t(e); return g(i), () => {} })), e(), j(t)
                                }((() => {
                                    ! function(e) {
                                        let t = !1;
                                        Me(e, ((e, n) => {
                                            xe(e, ((e, i) => {
                                                if (t && function(e) { return Te().some((t => e.matches(t))) }(e)) return i();
                                                t = !0, n(e, i)
                                            }))
                                        }))
                                    }(t)
                                })), Ie = !1
                        },
                        data: function(e, t) { Ne[e] = t }
                    },
                    qe = (Fe = p(), ((e, t, n) => {
                        if (t && "object" == typeof t || "function" == typeof t)
                            for (let o of s(t)) r.call(e, o) || "default" === o || i(e, o, { get: () => t[o], enumerable: !(n = a(t, o)) || n.enumerable });
                        return e
                    })(l(i(null != Fe ? t(o(Fe)) : {}, "default", Fe && Fe.__esModule && "default" in Fe ? { get: () => Fe.default, enumerable: !0 } : { value: Fe, enumerable: !0 })), Fe));

                function ze(e, t) {
                    return Array.isArray(t) ? Re(e, t.join(" ")) : "object" == typeof t && null !== t ? function(e, t) {
                        let n = e => e.split(" ").filter(Boolean),
                            i = Object.entries(t).flatMap((([e, t]) => !!t && n(e))).filter(Boolean),
                            o = Object.entries(t).flatMap((([e, t]) => !t && n(e))).filter(Boolean),
                            r = [],
                            s = [];
                        return o.forEach((t => { e.classList.contains(t) && (e.classList.remove(t), s.push(t)) })), i.forEach((t => { e.classList.contains(t) || (e.classList.add(t), r.push(t)) })), () => { s.forEach((t => e.classList.add(t))), r.forEach((t => e.classList.remove(t))) }
                    }(e, t) : "function" == typeof t ? ze(e, t()) : Re(e, t)
                }

                function Re(e, t) { return t = !0 === t ? t = "" : t || "", n = t.split(" ").filter((t => !e.classList.contains(t))).filter(Boolean), e.classList.add(...n), () => { e.classList.remove(...n) }; var n }

                function Ve(e, t) { return "object" == typeof t && null !== t ? function(e, t) { let n = {}; return Object.entries(t).forEach((([t, i]) => { n[t] = e.style[t], e.style.setProperty(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i) })), setTimeout((() => { 0 === e.style.length && e.removeAttribute("style") })), () => { Ve(e, n) } }(e, t) : function(e, t) { let n = e.getAttribute("style", t); return e.setAttribute("style", t), () => { e.setAttribute("style", n) } }(e, t) }

                function Be(e, t = (() => {})) { let n = !1; return function() { n ? t.apply(this, arguments) : (n = !0, e.apply(this, arguments)) } }

                function We(e, t, n = {}) { e._x_transition || (e._x_transition = { enter: { during: n, start: n, end: n }, leave: { during: n, start: n, end: n }, in (n = (() => {}), i = (() => {})) { Ge(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end, entering: !0 }, n, i) }, out(n = (() => {}), i = (() => {})) { Ge(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end, entering: !1 }, n, i) } }) }

                function Ue(e) { let t = e.parentNode; if (t) return t._x_hidePromise ? t : Ue(t) }

                function Ge(e, t, { during: n, start: i, end: o, entering: r } = {}, s = (() => {}), a = (() => {})) {
                    if (e._x_transitioning && e._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(i).length && 0 === Object.keys(o).length) return s(), void a();
                    let l, c, u;
                    ! function(e, t, n) {
                        let i, o, r, s = Be((() => { D((() => { i = !0, o || t.before(), r || (t.end(), _e()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning })) }));
                        e._x_transitioning = {
                            beforeCancels: [],
                            beforeCancel(e) { this.beforeCancels.push(e) },
                            cancel: Be((function() {
                                for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                                s()
                            })),
                            finish: s,
                            entering: n
                        }, D((() => { t.start(), t.during() })), be = !0, requestAnimationFrame((() => {
                            if (i) return;
                            let n = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")),
                                s = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                            0 === n && (n = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), D((() => { t.before() })), o = !0, requestAnimationFrame((() => { i || (D((() => { t.end() })), _e(), setTimeout(e._x_transitioning.finish, n + s), r = !0) }))
                        }))
                    }(e, { start() { l = t(e, i) }, during() { c = t(e, n) }, before: s, end() { l(), u = t(e, o) }, after: a, cleanup() { c(), u() } }, r)
                }

                function Ke(e, t, n) { if (-1 === e.indexOf(t)) return n; const i = e[e.indexOf(t) + 1]; if (!i) return n; if ("scale" === t && isNaN(i)) return n; if ("duration" === t) { let e = i.match(/([0-9]+)ms/); if (e) return e[1] } return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i }
                U("nextTick", (() => we)), U("dispatch", (e => ye.bind(ye, e))), U("watch", (e => (t, n) => {
                    let i, o = Y(e, t),
                        r = !0;
                    m((() => o((e => { document.createElement("div").dataset.throwAway = e, r ? i = e : queueMicrotask((() => { n(e, i), i = e })), r = !1 }))))
                })), U("store", (function() { return Le })), U("root", (e => Ee(e))), U("refs", (e => Ee(e)._x_refs || {})), U("el", (e => e)), ie("transition", ((e, { value: t, modifiers: n, expression: i }, { evaluate: o }) => {
                    "function" == typeof i && (i = o(i)), i ? function(e, t, n) { We(e, ze, ""), { enter: t => { e._x_transition.enter.during = t }, "enter-start": t => { e._x_transition.enter.start = t }, "enter-end": t => { e._x_transition.enter.end = t }, leave: t => { e._x_transition.leave.during = t }, "leave-start": t => { e._x_transition.leave.start = t }, "leave-end": t => { e._x_transition.leave.end = t } }[n](t) }(e, i, t) : function(e, t, n) {
                        We(e, Ve);
                        let i = !t.includes("in") && !t.includes("out") && !n,
                            o = i || t.includes("in") || ["enter"].includes(n),
                            r = i || t.includes("out") || ["leave"].includes(n);
                        t.includes("in") && !i && (t = t.filter(((e, n) => n < t.indexOf("out"))));
                        t.includes("out") && !i && (t = t.filter(((e, n) => n > t.indexOf("out"))));
                        let s = !t.includes("opacity") && !t.includes("scale"),
                            a = s || t.includes("opacity"),
                            l = s || t.includes("scale"),
                            c = a ? 0 : 1,
                            u = l ? Ke(t, "scale", 95) / 100 : 1,
                            d = Ke(t, "delay", 0),
                            h = Ke(t, "origin", "center"),
                            p = "opacity, transform",
                            f = Ke(t, "duration", 150) / 1e3,
                            m = Ke(t, "duration", 75) / 1e3,
                            g = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                        o && (e._x_transition.enter.during = { transformOrigin: h, transitionDelay: d, transitionProperty: p, transitionDuration: `${f}s`, transitionTimingFunction: g }, e._x_transition.enter.start = { opacity: c, transform: `scale(${u})` }, e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" });
                        r && (e._x_transition.leave.during = { transformOrigin: h, transitionDelay: d, transitionProperty: p, transitionDuration: `${m}s`, transitionTimingFunction: g }, e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, e._x_transition.leave.end = { opacity: c, transform: `scale(${u})` })
                    }(e, n, t)
                })), window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, i) {
                    t ? e._x_transition ? e._x_transition.in(n) : requestAnimationFrame(n) : (e._x_hidePromise = e._x_transition ? new Promise(((t, n) => { e._x_transition.out((() => {}), (() => t(i))), e._x_transitioning.beforeCancel((() => n({ isFromCancelledTransition: !0 }))) })) : Promise.resolve(i), queueMicrotask((() => {
                        let t = Ue(e);
                        t ? (t._x_hideChildren || (t._x_hideChildren = []), t._x_hideChildren.push(e)) : queueMicrotask((() => {
                            let t = e => { let n = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then((([e]) => e())); return delete e._x_hidePromise, delete e._x_hideChildren, n };
                            t(e).catch((e => { if (!e.isFromCancelledTransition) throw e }))
                        }))
                    })))
                };
                var Ye, $e = () => {};

                function Je(e, t, n, i = []) {
                    switch (e._x_bindings || (e._x_bindings = f({})), e._x_bindings[t] = n, t = i.includes("camel") ? t.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase())) : t) {
                        case "value":
                            ! function(e, t) {
                                if ("radio" === e.type) void 0 === e.attributes.value && (e.value = t), window.fromModel && (e.checked = Xe(e.value, t));
                                else if ("checkbox" === e.type) Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((t => Xe(t, e.value))) : e.checked = !!t : e.value = String(t);
                                else if ("SELECT" === e.tagName) ! function(e, t) {
                                    const n = [].concat(t).map((e => e + ""));
                                    Array.from(e.options).forEach((e => { e.selected = n.includes(e.value) }))
                                }(e, t);
                                else {
                                    if (e.value === t) return;
                                    e.value = t
                                }
                            }(e, n);
                            break;
                        case "style":
                            ! function(e, t) {
                                e._x_undoAddedStyles && e._x_undoAddedStyles();
                                e._x_undoAddedStyles = Ve(e, t)
                            }(e, n);
                            break;
                        case "class":
                            ! function(e, t) {
                                e._x_undoAddedClasses && e._x_undoAddedClasses();
                                e._x_undoAddedClasses = ze(e, t)
                            }(e, n);
                            break;
                        default:
                            ! function(e, t, n) {
                                [null, void 0, !1].includes(n) && function(e) { return !["aria-pressed", "aria-checked"].includes(e) }(t) ? e.removeAttribute(t) : (["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(t) && (n = t), function(e, t, n) { e.getAttribute(t) != n && e.setAttribute(t, n) }(e, t, n))
                            }(e, t, n)
                    }
                }

                function Xe(e, t) { return e == t }

                function Ze(e, t, n, i) {
                    let o = e,
                        r = e => i(e),
                        s = {},
                        a = (e, t) => n => t(e, n);
                    if (n.includes("dot") && (t = t.replace(/-/g, ".")), n.includes("camel") && (t = function(e) { return e.toLowerCase().replace(/-(\w)/g, ((e, t) => t.toUpperCase())) }(t)), n.includes("passive") && (s.passive = !0), n.includes("window") && (o = window), n.includes("document") && (o = document), n.includes("prevent") && (r = a(r, ((e, t) => { t.preventDefault(), e(t) }))), n.includes("stop") && (r = a(r, ((e, t) => { t.stopPropagation(), e(t) }))), n.includes("self") && (r = a(r, ((t, n) => { n.target === e && t(n) }))), (n.includes("away") || n.includes("outside")) && (o = document, r = a(r, ((t, n) => { e.contains(n.target) || e.offsetWidth < 1 && e.offsetHeight < 1 || t(n) }))), r = a(r, ((e, i) => {
                            (function(e) { return ["keydown", "keyup"].includes(e) })(t) && function(e, t) {
                                let n = t.filter((e => !["window", "document", "prevent", "stop", "once"].includes(e)));
                                if (n.includes("debounce")) {
                                    let e = n.indexOf("debounce");
                                    n.splice(e, Qe((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                                }
                                if (0 === n.length) return !1;
                                if (1 === n.length && et(e.key).includes(n[0])) return !1;
                                const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e => n.includes(e)));
                                if (n = n.filter((e => !i.includes(e))), i.length > 0) { if (i.filter((t => ("cmd" !== t && "super" !== t || (t = "meta"), e[`${t}Key`]))).length === i.length && et(e.key).includes(n[0])) return !1 }
                                return !0
                            }(i, n) || e(i)
                        })), n.includes("debounce")) {
                        let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
                            t = Qe(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                        r = Ce(r, t)
                    }
                    if (n.includes("throttle")) {
                        let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
                            t = Qe(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                        r = Oe(r, t)
                    }
                    return n.includes("once") && (r = a(r, ((e, n) => { e(n), o.removeEventListener(t, r, s) }))), o.addEventListener(t, r, s), () => { o.removeEventListener(t, r, s) }
                }

                function Qe(e) { return !Array.isArray(e) && !isNaN(e) }

                function et(e) {
                    if (!e) return [];
                    e = e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
                    let t = { ctrl: "control", slash: "/", space: "-", spacebar: "-", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", equal: "=" };
                    return t[e] = e, Object.keys(t).map((n => { if (t[n] === e) return n })).filter((e => e))
                }

                function tt(e) { let t = e ? parseFloat(e) : null; return n = t, Array.isArray(n) || isNaN(n) ? e : t; var n }

                function nt(e, t, n, i) { let o = {}; if (/^\[.*\]$/.test(e.item) && Array.isArray(t)) { e.item.replace("[", "").replace("]", "").split(",").map((e => e.trim())).forEach(((e, n) => { o[e] = t[n] })) } else if (/^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t) { e.item.replace("{", "").replace("}", "").split(",").map((e => e.trim())).forEach((e => { o[e] = t[e] })) } else o[e.item] = t; return e.index && (o[e.index] = n), e.collection && (o[e.collection] = i), o }

                function it() {}
                $e.inline = (e, { modifiers: t }, { cleanup: n }) => { t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, n((() => { t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore })) }, ie("ignore", $e), ie("effect", ((e, { expression: t }, { effect: n }) => n(Y(e, t)))), ie("model", ((e, { modifiers: t, expression: n }, { effect: i, cleanup: o }) => {
                    let r = Y(e, n),
                        s = Y(e, `${n} = rightSideOfExpression($event, ${n})`);
                    var a = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
                    let l = function(e, t, n) { "radio" === e.type && D((() => { e.hasAttribute("name") || e.setAttribute("name", n) })); return (n, i) => D((() => { if (n instanceof CustomEvent && void 0 !== n.detail) return n.detail || n.target.value; if ("checkbox" === e.type) { if (Array.isArray(i)) { let e = t.includes("number") ? tt(n.target.value) : n.target.value; return n.target.checked ? i.concat([e]) : i.filter((t => !(t == e))) } return n.target.checked } if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map((e => tt(e.value || e.text))) : Array.from(n.target.selectedOptions).map((e => e.value || e.text)); { let e = n.target.value; return t.includes("number") ? tt(e) : t.includes("trim") ? e.trim() : e } })) }(e, t, n),
                        c = Ze(e, a, t, (e => { s((() => {}), { scope: { $event: e, rightSideOfExpression: l } }) }));
                    o((() => c())), e._x_forceModelUpdate = () => { r((t => { void 0 === t && n.match(/\./) && (t = ""), window.fromModel = !0, D((() => Je(e, "value", t))), delete window.fromModel })) }, i((() => { t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate() }))
                })), ie("cloak", (e => queueMicrotask((() => D((() => e.removeAttribute(te("cloak")))))))), Ye = () => `[${te("init")}]`, Se.push(Ye), ie("init", De(((e, { expression: t }) => !!t.trim() && K(e, t, {})))), ie("text", ((e, { expression: t }, { effect: n, evaluateLater: i }) => {
                    let o = i(t);
                    n((() => { o((t => { D((() => { e.textContent = t })) })) }))
                })), ie("html", ((e, { expression: t }, { effect: n, evaluateLater: i }) => {
                    let o = i(t);
                    n((() => { o((t => { e.innerHTML = t })) }))
                })), de(le(":", te("bind:"))), ie("bind", ((e, { value: t, modifiers: n, expression: i, original: o }, { effect: r }) => {
                    if (!t) return function(e, t, n, i) {
                        let o = Y(e, t),
                            r = [];
                        i((() => {
                            for (; r.length;) r.pop()();
                            o((t => {
                                let i = Object.entries(t).map((([e, t]) => ({ name: e, value: t })));
                                (function(e) { return Array.from(e).map(ce()).filter((e => !he(e))) })(i).forEach((({ name: e, value: t }, n) => { i[n] = { name: `x-bind:${e}`, value: `"${t}"` } })), oe(e, i, n).map((e => { r.push(e.runCleanups), e() }))
                            }))
                        }))
                    }(e, i, o, r);
                    if ("key" === t) return function(e, t) { e._x_keyExpression = t }(e, i);
                    let s = Y(e, i);
                    r((() => s((o => { void 0 === o && i.match(/\./) && (o = ""), D((() => Je(e, t, o, n))) }))))
                })), Ae((() => `[${te("data")}]`)), ie("data", De(((e, { expression: t }, { cleanup: n }) => {
                    t = "" === t ? "{}" : t;
                    let i = {};
                    G(i, e);
                    let o = {};
                    var r, s;
                    r = o, s = i, Object.entries(Ne).forEach((([e, t]) => { Object.defineProperty(r, e, { get: () => (...e) => t.bind(s)(...e), enumerable: !1 }) }));
                    let a = K(e, t, { scope: o });
                    G(a, e);
                    let l = f(a);
                    R(l);
                    let c = F(e, l);
                    l.init && K(e, l.init), n((() => { c(), l.destroy && K(e, l.destroy) }))
                }))), ie("show", ((e, { modifiers: t, expression: n }, { effect: i }) => {
                    let o, r = Y(e, n),
                        s = () => D((() => { e.style.display = "none", e._x_isShown = !1 })),
                        a = () => D((() => { 1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display"), e._x_isShown = !0 })),
                        l = () => setTimeout(a),
                        c = Be((e => e ? a() : s()), (t => { "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, a, s) : t ? l() : s() })),
                        u = !0;
                    i((() => r((e => {
                        (u || e !== o) && (t.includes("immediate") && (e ? l() : s()), c(e), o = e, u = !1)
                    }))))
                })), ie("for", ((e, { expression: t }, { effect: n, cleanup: i }) => {
                    let o = function(e) {
                            let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                                n = /^\s*\(|\)\s*$/g,
                                i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                                o = e.match(i);
                            if (!o) return;
                            let r = {};
                            r.items = o[2].trim();
                            let s = o[1].replace(n, "").trim(),
                                a = s.match(t);
                            a ? (r.item = s.replace(t, "").trim(), r.index = a[1].trim(), a[2] && (r.collection = a[2].trim())) : r.item = s;
                            return r
                        }(t),
                        r = Y(e, o.items),
                        s = Y(e, e._x_keyExpression || "index");
                    e._x_prevKeys = [], e._x_lookup = {}, n((() => function(e, t, n, i) {
                        let o = e => "object" == typeof e && !Array.isArray(e),
                            r = e;
                        n((n => {
                            var s;
                            s = n, !Array.isArray(s) && !isNaN(s) && n >= 0 && (n = Array.from(Array(n).keys(), (e => e + 1))), void 0 === n && (n = []);
                            let a = e._x_lookup,
                                l = e._x_prevKeys,
                                c = [],
                                u = [];
                            if (o(n)) n = Object.entries(n).map((([e, o]) => {
                                let r = nt(t, o, e, n);
                                i((e => u.push(e)), { scope: { index: e, ...r } }), c.push(r)
                            }));
                            else
                                for (let e = 0; e < n.length; e++) {
                                    let o = nt(t, n[e], e, n);
                                    i((e => u.push(e)), { scope: { index: e, ...o } }), c.push(o)
                                }
                            let d = [],
                                h = [],
                                p = [],
                                m = [];
                            for (let e = 0; e < l.length; e++) { let t = l[e]; - 1 === u.indexOf(t) && p.push(t) }
                            l = l.filter((e => !p.includes(e)));
                            let g = "template";
                            for (let e = 0; e < u.length; e++) {
                                let t = u[e],
                                    n = l.indexOf(t);
                                if (-1 === n) l.splice(e, 0, t), d.push([g, e]);
                                else if (n !== e) {
                                    let t = l.splice(e, 1)[0],
                                        i = l.splice(n - 1, 1)[0];
                                    l.splice(e, 0, i), l.splice(n, 0, t), h.push([t, i])
                                } else m.push(t);
                                g = t
                            }
                            for (let e = 0; e < p.length; e++) {
                                let t = p[e];
                                a[t].remove(), a[t] = null, delete a[t]
                            }
                            for (let e = 0; e < h.length; e++) {
                                let [t, n] = h[e], i = a[t], o = a[n], r = document.createElement("div");
                                D((() => { o.after(r), i.after(o), r.before(i), r.remove() })), H(o, c[u.indexOf(n)])
                            }
                            for (let e = 0; e < d.length; e++) {
                                let [t, n] = d[e], i = "template" === t ? r : a[t], o = c[n], s = u[n], l = document.importNode(r.content, !0).firstElementChild;
                                F(l, f(o), r), D((() => { i.after(l), Me(l) })), "object" == typeof s && ke("x-for key cannot be an object, it must be a string or an integer", r), a[s] = l
                            }
                            for (let e = 0; e < m.length; e++) H(a[m[e]], c[u.indexOf(m[e])]);
                            r._x_prevKeys = u
                        }))
                    }(e, o, r, s))), i((() => { Object.values(e._x_lookup).forEach((e => e.remove())), delete e._x_prevKeys, delete e._x_lookup }))
                })), it.inline = (e, { expression: t }, { cleanup: n }) => {
                    let i = Ee(e);
                    i._x_refs || (i._x_refs = {}), i._x_refs[t] = e, n((() => delete i._x_refs[t]))
                }, ie("ref", it), ie("if", ((e, { expression: t }, { effect: n, cleanup: i }) => {
                    let o = Y(e, t);
                    n((() => o((t => {
                        t ? (() => {
                            if (e._x_currentIfEl) return e._x_currentIfEl;
                            let t = e.content.cloneNode(!0).firstElementChild;
                            F(t, {}, e), D((() => { e.after(t), Me(t) })), e._x_currentIfEl = t, e._x_undoIf = () => { t.remove(), delete e._x_currentIfEl }
                        })() : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf)
                    })))), i((() => e._x_undoIf && e._x_undoIf()))
                })), de(le("@", te("on:"))), ie("on", De(((e, { value: t, modifiers: n, expression: i }, { cleanup: o }) => {
                    let r = i ? Y(e, i) : () => {},
                        s = Ze(e, t, n, (e => { r((() => {}), { scope: { $event: e }, params: [e] }) }));
                    o((() => s()))
                }))), He.setEvaluator(J), He.setReactivityEngine({ reactive: qe.reactive, effect: qe.effect, release: qe.stop, raw: qe.toRaw });
                var ot = He
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    5: [function(e, t, n) {
        /*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
        var i, o;
        i = window, o = function() {
            return function(e) {
                var t = {};

                function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                return n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var i = Object.create(null);
                    if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
                    return i
                }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/public/assets/scripts/", n(n.s = 4)
            }([function(e, t, n) {
                "use strict";
                var i = function(e) { return function(e) { return !!e && "object" == typeof e }(e) && ! function(e) { var t = Object.prototype.toString.call(e); return "[object RegExp]" === t || "[object Date]" === t || function(e) { return e.$$typeof === o }(e) }(e) },
                    o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

                function r(e, t) { return !1 !== t.clone && t.isMergeableObject(e) ? c((n = e, Array.isArray(n) ? [] : {}), e, t) : e; var n }

                function s(e, t, n) { return e.concat(t).map((function(e) { return r(e, n) })) }

                function a(e) { return Object.keys(e).concat(function(e) { return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) { return e.propertyIsEnumerable(t) })) : [] }(e)) }

                function l(e, t, n) {
                    var i = {};
                    return n.isMergeableObject(e) && a(e).forEach((function(t) { i[t] = r(e[t], n) })), a(t).forEach((function(o) {
                        (function(e, t) { try { return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)) } catch (e) { return !1 } })(e, o) || (n.isMergeableObject(t[o]) && e[o] ? i[o] = function(e, t) { if (!t.customMerge) return c; var n = t.customMerge(e); return "function" == typeof n ? n : c }(o, n)(e[o], t[o], n) : i[o] = r(t[o], n))
                    })), i
                }

                function c(e, t, n) {
                    (n = n || {}).arrayMerge = n.arrayMerge || s, n.isMergeableObject = n.isMergeableObject || i, n.cloneUnlessOtherwiseSpecified = r;
                    var o = Array.isArray(t);
                    return o === Array.isArray(e) ? o ? n.arrayMerge(e, t, n) : l(e, t, n) : r(t, n)
                }
                c.all = function(e, t) { if (!Array.isArray(e)) throw new Error("first argument should be an array"); return e.reduce((function(e, n) { return c(e, n, t) }), {}) };
                var u = c;
                e.exports = u
            }, function(e, t, n) {
                "use strict";
                (function(e, i) {
                    var o, r = n(3);
                    o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : i;
                    var s = Object(r.a)(o);
                    t.a = s
                }).call(this, n(5), n(6)(e))
            }, function(e, t, n) {
                /*!
                 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
                 * 
                 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
                 * All Rights Reserved. Apache Software License 2.0
                 * 
                 * http://www.apache.org/licenses/LICENSE-2.0
                 */
                e.exports = function(e) {
                    var t = {};

                    function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                    return n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var i = Object.create(null);
                        if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                            for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
                        return i
                    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 1)
                }([function(e, t) { e.exports = function(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e) } }, function(e, t, n) {
                    function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                    function o(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    var r = n(2),
                        s = n(8),
                        a = n(0),
                        l = function() {
                            function e(t, n) {
                                var i = n.location,
                                    o = void 0 === i ? 0 : i,
                                    r = n.distance,
                                    a = void 0 === r ? 100 : r,
                                    l = n.threshold,
                                    c = void 0 === l ? .6 : l,
                                    u = n.maxPatternLength,
                                    d = void 0 === u ? 32 : u,
                                    h = n.caseSensitive,
                                    p = void 0 !== h && h,
                                    f = n.tokenSeparator,
                                    m = void 0 === f ? / +/g : f,
                                    g = n.findAllMatches,
                                    y = void 0 !== g && g,
                                    v = n.minMatchCharLength,
                                    b = void 0 === v ? 1 : v,
                                    w = n.id,
                                    _ = void 0 === w ? null : w,
                                    x = n.keys,
                                    k = void 0 === x ? [] : x,
                                    j = n.shouldSort,
                                    S = void 0 === j || j,
                                    T = n.getFn,
                                    A = void 0 === T ? s : T,
                                    E = n.sortFn,
                                    M = void 0 === E ? function(e, t) { return e.score - t.score } : E,
                                    C = n.tokenize,
                                    O = void 0 !== C && C,
                                    L = n.matchAllTokens,
                                    P = void 0 !== L && L,
                                    I = n.includeMatches,
                                    D = void 0 !== I && I,
                                    N = n.includeScore,
                                    F = void 0 !== N && N,
                                    H = n.verbose,
                                    q = void 0 !== H && H;
                                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.options = { location: o, distance: a, threshold: c, maxPatternLength: d, isCaseSensitive: p, tokenSeparator: m, findAllMatches: y, minMatchCharLength: b, id: _, keys: k, includeMatches: D, includeScore: F, shouldSort: S, getFn: A, sortFn: M, verbose: q, tokenize: O, matchAllTokens: P }, this.setCollection(t)
                            }
                            var t, n, l;
                            return t = e, (n = [{ key: "setCollection", value: function(e) { return this.list = e, e } }, {
                                key: "search",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 };
                                    this._log('---------\nSearch pattern: "'.concat(e, '"'));
                                    var n = this._prepareSearchers(e),
                                        i = n.tokenSearchers,
                                        o = n.fullSearcher,
                                        r = this._search(i, o),
                                        s = r.weights,
                                        a = r.results;
                                    return this._computeScore(s, a), this.options.shouldSort && this._sort(a), t.limit && "number" == typeof t.limit && (a = a.slice(0, t.limit)), this._format(a)
                                }
                            }, {
                                key: "_prepareSearchers",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        t = [];
                                    if (this.options.tokenize)
                                        for (var n = e.split(this.options.tokenSeparator), i = 0, o = n.length; i < o; i += 1) t.push(new r(n[i], this.options));
                                    return { tokenSearchers: t, fullSearcher: new r(e, this.options) }
                                }
                            }, {
                                key: "_search",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        t = arguments.length > 1 ? arguments[1] : void 0,
                                        n = this.list,
                                        i = {},
                                        o = [];
                                    if ("string" == typeof n[0]) { for (var r = 0, s = n.length; r < s; r += 1) this._analyze({ key: "", value: n[r], record: r, index: r }, { resultMap: i, results: o, tokenSearchers: e, fullSearcher: t }); return { weights: null, results: o } }
                                    for (var a = {}, l = 0, c = n.length; l < c; l += 1)
                                        for (var u = n[l], d = 0, h = this.options.keys.length; d < h; d += 1) {
                                            var p = this.options.keys[d];
                                            if ("string" != typeof p) {
                                                if (a[p.name] = { weight: 1 - p.weight || 1 }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                                p = p.name
                                            } else a[p] = { weight: 1 };
                                            this._analyze({ key: p, value: this.options.getFn(u, p), record: u, index: l }, { resultMap: i, results: o, tokenSearchers: e, fullSearcher: t })
                                        }
                                    return { weights: a, results: o }
                                }
                            }, {
                                key: "_analyze",
                                value: function(e, t) {
                                    var n = e.key,
                                        i = e.arrayIndex,
                                        o = void 0 === i ? -1 : i,
                                        r = e.value,
                                        s = e.record,
                                        l = e.index,
                                        c = t.tokenSearchers,
                                        u = void 0 === c ? [] : c,
                                        d = t.fullSearcher,
                                        h = void 0 === d ? [] : d,
                                        p = t.resultMap,
                                        f = void 0 === p ? {} : p,
                                        m = t.results,
                                        g = void 0 === m ? [] : m;
                                    if (null != r) {
                                        var y = !1,
                                            v = -1,
                                            b = 0;
                                        if ("string" == typeof r) {
                                            this._log("\nKey: ".concat("" === n ? "-" : n));
                                            var w = h.search(r);
                                            if (this._log('Full text: "'.concat(r, '", score: ').concat(w.score)), this.options.tokenize) {
                                                for (var _ = r.split(this.options.tokenSeparator), x = [], k = 0; k < u.length; k += 1) {
                                                    var j = u[k];
                                                    this._log('\nPattern: "'.concat(j.pattern, '"'));
                                                    for (var S = !1, T = 0; T < _.length; T += 1) {
                                                        var A = _[T],
                                                            E = j.search(A),
                                                            M = {};
                                                        E.isMatch ? (M[A] = E.score, y = !0, S = !0, x.push(E.score)) : (M[A] = 1, this.options.matchAllTokens || x.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(M[A]))
                                                    }
                                                    S && (b += 1)
                                                }
                                                v = x[0];
                                                for (var C = x.length, O = 1; O < C; O += 1) v += x[O];
                                                v /= C, this._log("Token score average:", v)
                                            }
                                            var L = w.score;
                                            v > -1 && (L = (L + v) / 2), this._log("Score average:", L);
                                            var P = !this.options.tokenize || !this.options.matchAllTokens || b >= u.length;
                                            if (this._log("\nCheck Matches: ".concat(P)), (y || w.isMatch) && P) {
                                                var I = f[l];
                                                I ? I.output.push({ key: n, arrayIndex: o, value: r, score: L, matchedIndices: w.matchedIndices }) : (f[l] = { item: s, output: [{ key: n, arrayIndex: o, value: r, score: L, matchedIndices: w.matchedIndices }] }, g.push(f[l]))
                                            }
                                        } else if (a(r))
                                            for (var D = 0, N = r.length; D < N; D += 1) this._analyze({ key: n, arrayIndex: D, value: r[D], record: s, index: l }, { resultMap: f, results: g, tokenSearchers: u, fullSearcher: h })
                                    }
                                }
                            }, {
                                key: "_computeScore",
                                value: function(e, t) {
                                    this._log("\n\nComputing score:\n");
                                    for (var n = 0, i = t.length; n < i; n += 1) {
                                        for (var o = t[n].output, r = o.length, s = 1, a = 1, l = 0; l < r; l += 1) {
                                            var c = e ? e[o[l].key].weight : 1,
                                                u = (1 === c ? o[l].score : o[l].score || .001) * c;
                                            1 !== c ? a = Math.min(a, u) : (o[l].nScore = u, s *= u)
                                        }
                                        t[n].score = 1 === a ? s : a, this._log(t[n])
                                    }
                                }
                            }, { key: "_sort", value: function(e) { this._log("\n\nSorting...."), e.sort(this.options.sortFn) } }, {
                                key: "_format",
                                value: function(e) {
                                    var t = [];
                                    if (this.options.verbose) {
                                        var n = [];
                                        this._log("\n\nOutput:\n\n", JSON.stringify(e, (function(e, t) {
                                            if ("object" === i(t) && null !== t) {
                                                if (-1 !== n.indexOf(t)) return;
                                                n.push(t)
                                            }
                                            return t
                                        }))), n = null
                                    }
                                    var o = [];
                                    this.options.includeMatches && o.push((function(e, t) {
                                        var n = e.output;
                                        t.matches = [];
                                        for (var i = 0, o = n.length; i < o; i += 1) {
                                            var r = n[i];
                                            if (0 !== r.matchedIndices.length) {
                                                var s = { indices: r.matchedIndices, value: r.value };
                                                r.key && (s.key = r.key), r.hasOwnProperty("arrayIndex") && r.arrayIndex > -1 && (s.arrayIndex = r.arrayIndex), t.matches.push(s)
                                            }
                                        }
                                    })), this.options.includeScore && o.push((function(e, t) { t.score = e.score }));
                                    for (var r = 0, s = e.length; r < s; r += 1) {
                                        var a = e[r];
                                        if (this.options.id && (a.item = this.options.getFn(a.item, this.options.id)[0]), o.length) {
                                            for (var l = { item: a.item }, c = 0, u = o.length; c < u; c += 1) o[c](a, l);
                                            t.push(l)
                                        } else t.push(a.item)
                                    }
                                    return t
                                }
                            }, {
                                key: "_log",
                                value: function() {
                                    var e;
                                    this.options.verbose && (e = console).log.apply(e, arguments)
                                }
                            }]) && o(t.prototype, n), l && o(t, l), e
                        }();
                    e.exports = l
                }, function(e, t, n) {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    var o = n(3),
                        r = n(4),
                        s = n(7),
                        a = function() {
                            function e(t, n) {
                                var i = n.location,
                                    o = void 0 === i ? 0 : i,
                                    r = n.distance,
                                    a = void 0 === r ? 100 : r,
                                    l = n.threshold,
                                    c = void 0 === l ? .6 : l,
                                    u = n.maxPatternLength,
                                    d = void 0 === u ? 32 : u,
                                    h = n.isCaseSensitive,
                                    p = void 0 !== h && h,
                                    f = n.tokenSeparator,
                                    m = void 0 === f ? / +/g : f,
                                    g = n.findAllMatches,
                                    y = void 0 !== g && g,
                                    v = n.minMatchCharLength,
                                    b = void 0 === v ? 1 : v;
                                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.options = { location: o, distance: a, threshold: c, maxPatternLength: d, isCaseSensitive: p, tokenSeparator: m, findAllMatches: y, minMatchCharLength: b }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= d && (this.patternAlphabet = s(this.pattern))
                            }
                            var t, n, a;
                            return t = e, (n = [{
                                key: "search",
                                value: function(e) {
                                    if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                                        isMatch: !0,
                                        score: 0,
                                        matchedIndices: [
                                            [0, e.length - 1]
                                        ]
                                    };
                                    var t = this.options,
                                        n = t.maxPatternLength,
                                        i = t.tokenSeparator;
                                    if (this.pattern.length > n) return o(e, this.pattern, i);
                                    var s = this.options,
                                        a = s.location,
                                        l = s.distance,
                                        c = s.threshold,
                                        u = s.findAllMatches,
                                        d = s.minMatchCharLength;
                                    return r(e, this.pattern, this.patternAlphabet, { location: a, distance: l, threshold: c, findAllMatches: u, minMatchCharLength: d })
                                }
                            }]) && i(t.prototype, n), a && i(t, a), e
                        }();
                    e.exports = a
                }, function(e, t) {
                    var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                    e.exports = function(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                            o = new RegExp(t.replace(n, "\\$&").replace(i, "|")),
                            r = e.match(o),
                            s = !!r,
                            a = [];
                        if (s)
                            for (var l = 0, c = r.length; l < c; l += 1) {
                                var u = r[l];
                                a.push([e.indexOf(u), u.length - 1])
                            }
                        return { score: s ? .5 : 1, isMatch: s, matchedIndices: a }
                    }
                }, function(e, t, n) {
                    var i = n(5),
                        o = n(6);
                    e.exports = function(e, t, n, r) {
                        for (var s = r.location, a = void 0 === s ? 0 : s, l = r.distance, c = void 0 === l ? 100 : l, u = r.threshold, d = void 0 === u ? .6 : u, h = r.findAllMatches, p = void 0 !== h && h, f = r.minMatchCharLength, m = void 0 === f ? 1 : f, g = a, y = e.length, v = d, b = e.indexOf(t, g), w = t.length, _ = [], x = 0; x < y; x += 1) _[x] = 0;
                        if (-1 !== b) {
                            var k = i(t, { errors: 0, currentLocation: b, expectedLocation: g, distance: c });
                            if (v = Math.min(k, v), -1 !== (b = e.lastIndexOf(t, g + w))) {
                                var j = i(t, { errors: 0, currentLocation: b, expectedLocation: g, distance: c });
                                v = Math.min(j, v)
                            }
                        }
                        b = -1;
                        for (var S = [], T = 1, A = w + y, E = 1 << w - 1, M = 0; M < w; M += 1) {
                            for (var C = 0, O = A; C < O;) i(t, { errors: M, currentLocation: g + O, expectedLocation: g, distance: c }) <= v ? C = O : A = O, O = Math.floor((A - C) / 2 + C);
                            A = O;
                            var L = Math.max(1, g - O + 1),
                                P = p ? y : Math.min(g + O, y) + w,
                                I = Array(P + 2);
                            I[P + 1] = (1 << M) - 1;
                            for (var D = P; D >= L; D -= 1) {
                                var N = D - 1,
                                    F = n[e.charAt(N)];
                                if (F && (_[N] = 1), I[D] = (I[D + 1] << 1 | 1) & F, 0 !== M && (I[D] |= (S[D + 1] | S[D]) << 1 | 1 | S[D + 1]), I[D] & E && (T = i(t, { errors: M, currentLocation: N, expectedLocation: g, distance: c })) <= v) {
                                    if (v = T, (b = N) <= g) break;
                                    L = Math.max(1, 2 * g - b)
                                }
                            }
                            if (i(t, { errors: M + 1, currentLocation: g, expectedLocation: g, distance: c }) > v) break;
                            S = I
                        }
                        return { isMatch: b >= 0, score: 0 === T ? .001 : T, matchedIndices: o(_, m) }
                    }
                }, function(e, t) {
                    e.exports = function(e, t) {
                        var n = t.errors,
                            i = void 0 === n ? 0 : n,
                            o = t.currentLocation,
                            r = void 0 === o ? 0 : o,
                            s = t.expectedLocation,
                            a = void 0 === s ? 0 : s,
                            l = t.distance,
                            c = void 0 === l ? 100 : l,
                            u = i / e.length,
                            d = Math.abs(a - r);
                        return c ? u + d / c : d ? 1 : u
                    }
                }, function(e, t) {
                    e.exports = function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], i = -1, o = -1, r = 0, s = e.length; r < s; r += 1) {
                            var a = e[r];
                            a && -1 === i ? i = r : a || -1 === i || ((o = r - 1) - i + 1 >= t && n.push([i, o]), i = -1)
                        }
                        return e[r - 1] && r - i >= t && n.push([i, r - 1]), n
                    }
                }, function(e, t) { e.exports = function(e) { for (var t = {}, n = e.length, i = 0; i < n; i += 1) t[e.charAt(i)] = 0; for (var o = 0; o < n; o += 1) t[e.charAt(o)] |= 1 << n - o - 1; return t } }, function(e, t, n) {
                    var i = n(0);
                    e.exports = function(e, t) {
                        return function e(t, n, o) {
                            if (n) {
                                var r = n.indexOf("."),
                                    s = n,
                                    a = null; - 1 !== r && (s = n.slice(0, r), a = n.slice(r + 1));
                                var l = t[s];
                                if (null != l)
                                    if (a || "string" != typeof l && "number" != typeof l)
                                        if (i(l))
                                            for (var c = 0, u = l.length; c < u; c += 1) e(l[c], a, o);
                                        else a && e(l, a, o);
                                else o.push(l.toString())
                            } else o.push(t);
                            return o
                        }(e, t, [])
                    }
                }])
            }, function(e, t, n) {
                "use strict";

                function i(e) { var t, n = e.Symbol; return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t }
                n.d(t, "a", (function() { return i }))
            }, function(e, t, n) { e.exports = n(7) }, function(e, t) {
                var n;
                n = function() { return this }();
                try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
                e.exports = n
            }, function(e, t) {
                e.exports = function(e) {
                    if (!e.webpackPolyfill) {
                        var t = Object.create(e);
                        t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), Object.defineProperty(t, "exports", { enumerable: !0 }), t.webpackPolyfill = 1
                    }
                    return t
                }
            }, function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n(2),
                    o = n.n(i),
                    r = n(0),
                    s = n.n(r),
                    a = n(1),
                    l = function() { return Math.random().toString(36).substring(7).split("").join(".") },
                    c = { INIT: "@@redux/INIT" + l(), REPLACE: "@@redux/REPLACE" + l(), PROBE_UNKNOWN_ACTION: function() { return "@@redux/PROBE_UNKNOWN_ACTION" + l() } };

                function u(e) { if ("object" != typeof e || null === e) return !1; for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t); return Object.getPrototypeOf(e) === t }

                function d(e, t, n) {
                    var i;
                    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) { if ("function" != typeof n) throw new Error("Expected the enhancer to be a function."); return n(d)(e, t) }
                    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
                    var o = e,
                        r = t,
                        s = [],
                        l = s,
                        h = !1;

                    function p() { l === s && (l = s.slice()) }

                    function f() { if (h) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."); return r }

                    function m(e) {
                        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
                        if (h) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        var t = !0;
                        return p(), l.push(e),
                            function() {
                                if (t) {
                                    if (h) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                                    t = !1, p();
                                    var n = l.indexOf(e);
                                    l.splice(n, 1)
                                }
                            }
                    }

                    function g(e) { if (!u(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions."); if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); if (h) throw new Error("Reducers may not dispatch actions."); try { h = !0, r = o(r, e) } finally { h = !1 } for (var t = s = l, n = 0; n < t.length; n++)(0, t[n])(); return e }

                    function y(e) {
                        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                        o = e, g({ type: c.REPLACE })
                    }

                    function v() {
                        var e, t = m;
                        return (e = {
                            subscribe: function(e) {
                                if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                                function n() { e.next && e.next(f()) }
                                return n(), { unsubscribe: t(n) }
                            }
                        })[a.a] = function() { return this }, e
                    }
                    return g({ type: c.INIT }), (i = { dispatch: g, subscribe: m, getState: f, replaceReducer: y })[a.a] = v, i
                }

                function h(e, t) { var n = t && t.type; return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.' }
                var p, f = [],
                    m = [],
                    g = [],
                    y = { loading: !1 },
                    v = function(e, t) { return void 0 === e && (e = y), "SET_IS_LOADING" === t.type ? { loading: t.isLoading } : e },
                    b = function(e) { return Array.from({ length: e }, (function() { return (e = 0, t = 36, Math.floor(Math.random() * (t - e) + e)).toString(36); var e, t })).join("") },
                    w = function(e) { return Object.prototype.toString.call(e).slice(8, -1) },
                    _ = function(e, t) { return null != t && w(t) === e },
                    x = function(e) { return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") },
                    k = (p = document.createElement("div"), function(e) {
                        var t = e.trim();
                        p.innerHTML = t;
                        for (var n = p.children[0]; p.firstChild;) p.removeChild(p.firstChild);
                        return n
                    }),
                    j = function(e, t) { return e.score - t.score },
                    S = function(e) { return JSON.parse(JSON.stringify(e)) },
                    T = function(e) {
                        for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) { var o = t[i]; "function" == typeof e[o] && (n[o] = e[o]) }
                        var r, s = Object.keys(n);
                        try {! function(e) { Object.keys(e).forEach((function(t) { var n = e[t]; if (void 0 === n(void 0, { type: c.INIT })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."); if (void 0 === n(void 0, { type: c.PROBE_UNKNOWN_ACTION() })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.') })) }(n) } catch (e) { r = e }
                        return function(e, t) {
                            if (void 0 === e && (e = {}), r) throw r;
                            for (var i = !1, o = {}, a = 0; a < s.length; a++) {
                                var l = s[a],
                                    c = n[l],
                                    u = e[l],
                                    d = c(u, t);
                                if (void 0 === d) { var p = h(l, t); throw new Error(p) }
                                o[l] = d, i = i || d !== u
                            }
                            return i ? o : e
                        }
                    }({
                        items: function(e, t) {
                            switch (void 0 === e && (e = f), t.type) {
                                case "ADD_ITEM":
                                    return [].concat(e, [{ id: t.id, choiceId: t.choiceId, groupId: t.groupId, value: t.value, label: t.label, active: !0, highlighted: !1, customProperties: t.customProperties, placeholder: t.placeholder || !1, keyCode: null }]).map((function(e) { var t = e; return t.highlighted = !1, t }));
                                case "REMOVE_ITEM":
                                    return e.map((function(e) { var n = e; return n.id === t.id && (n.active = !1), n }));
                                case "HIGHLIGHT_ITEM":
                                    return e.map((function(e) { var n = e; return n.id === t.id && (n.highlighted = t.highlighted), n }));
                                default:
                                    return e
                            }
                        },
                        groups: function(e, t) {
                            switch (void 0 === e && (e = m), t.type) {
                                case "ADD_GROUP":
                                    return [].concat(e, [{ id: t.id, value: t.value, active: t.active, disabled: t.disabled }]);
                                case "CLEAR_CHOICES":
                                    return [];
                                default:
                                    return e
                            }
                        },
                        choices: function(e, t) {
                            switch (void 0 === e && (e = g), t.type) {
                                case "ADD_CHOICE":
                                    return [].concat(e, [{ id: t.id, elementId: t.elementId, groupId: t.groupId, value: t.value, label: t.label || t.value, disabled: t.disabled || !1, selected: !1, active: !0, score: 9999, customProperties: t.customProperties, placeholder: t.placeholder || !1, keyCode: null }]);
                                case "ADD_ITEM":
                                    return t.activateOptions ? e.map((function(e) { var n = e; return n.active = t.active, n })) : t.choiceId > -1 ? e.map((function(e) { var n = e; return n.id === parseInt(t.choiceId, 10) && (n.selected = !0), n })) : e;
                                case "REMOVE_ITEM":
                                    return t.choiceId > -1 ? e.map((function(e) { var n = e; return n.id === parseInt(t.choiceId, 10) && (n.selected = !1), n })) : e;
                                case "FILTER_CHOICES":
                                    return e.map((function(e) {
                                        var n = e;
                                        return n.active = t.results.some((function(e) {
                                            var t = e.item,
                                                i = e.score;
                                            return t.id === n.id && (n.score = i, !0)
                                        })), n
                                    }));
                                case "ACTIVATE_CHOICES":
                                    return e.map((function(e) { var n = e; return n.active = t.active, n }));
                                case "CLEAR_CHOICES":
                                    return g;
                                default:
                                    return e
                            }
                        },
                        general: v
                    }),
                    A = function(e, t) {
                        var n = e;
                        if ("CLEAR_ALL" === t.type) n = void 0;
                        else if ("RESET_TO" === t.type) return S(t.state);
                        return T(n, t)
                    };

                function E(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var M = function() {
                    function e() { this._store = d(A, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }
                    var t, n, i, o = e.prototype;
                    return o.subscribe = function(e) { this._store.subscribe(e) }, o.dispatch = function(e) { this._store.dispatch(e) }, o.isLoading = function() { return this.state.general.loading }, o.getChoiceById = function(e) { return this.activeChoices.find((function(t) { return t.id === parseInt(e, 10) })) }, o.getGroupById = function(e) { return this.groups.find((function(t) { return t.id === e })) }, t = e, n = [{ key: "state", get: function() { return this._store.getState() } }, { key: "items", get: function() { return this.state.items } }, { key: "activeItems", get: function() { return this.items.filter((function(e) { return !0 === e.active })) } }, { key: "highlightedActiveItems", get: function() { return this.items.filter((function(e) { return e.active && e.highlighted })) } }, { key: "choices", get: function() { return this.state.choices } }, { key: "activeChoices", get: function() { return this.choices.filter((function(e) { return !0 === e.active })) } }, { key: "selectableChoices", get: function() { return this.choices.filter((function(e) { return !0 !== e.disabled })) } }, { key: "searchableChoices", get: function() { return this.selectableChoices.filter((function(e) { return !0 !== e.placeholder })) } }, { key: "placeholderChoice", get: function() { return [].concat(this.choices).reverse().find((function(e) { return !0 === e.placeholder })) } }, { key: "groups", get: function() { return this.state.groups } }, {
                        key: "activeGroups",
                        get: function() {
                            var e = this.groups,
                                t = this.choices;
                            return e.filter((function(e) {
                                var n = !0 === e.active && !1 === e.disabled,
                                    i = t.some((function(e) { return !0 === e.active && !1 === e.disabled }));
                                return n && i
                            }), [])
                        }
                    }], n && E(t.prototype, n), i && E(t, i), e
                }();

                function C(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var O = function() {
                        function e(e) {
                            var t = e.element,
                                n = e.type,
                                i = e.classNames;
                            this.element = t, this.classNames = i, this.type = n, this.isActive = !1
                        }
                        var t, n, i, o = e.prototype;
                        return o.getChild = function(e) { return this.element.querySelector(e) }, o.show = function() { return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this }, o.hide = function() { return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this }, t = e, (n = [{ key: "distanceFromTopWindow", get: function() { return this.element.getBoundingClientRect().bottom } }]) && C(t.prototype, n), i && C(t, i), e
                    }(),
                    L = {
                        items: [],
                        choices: [],
                        silent: !1,
                        renderChoiceLimit: -1,
                        maxItemCount: -1,
                        addItems: !0,
                        addItemFilter: null,
                        removeItems: !0,
                        removeItemButton: !1,
                        editItems: !1,
                        duplicateItemsAllowed: !0,
                        delimiter: ",",
                        paste: !0,
                        searchEnabled: !0,
                        searchChoices: !0,
                        searchFloor: 1,
                        searchResultLimit: 4,
                        searchFields: ["label", "value"],
                        position: "auto",
                        resetScrollPosition: !0,
                        shouldSort: !0,
                        shouldSortItems: !1,
                        sorter: function(e, t) {
                            var n = e.value,
                                i = e.label,
                                o = void 0 === i ? n : i,
                                r = t.value,
                                s = t.label,
                                a = void 0 === s ? r : s;
                            return o.localeCompare(a, [], { sensitivity: "base", ignorePunctuation: !0, numeric: !0 })
                        },
                        placeholder: !0,
                        placeholderValue: null,
                        searchPlaceholderValue: null,
                        prependValue: null,
                        appendValue: null,
                        renderSelectedChoices: "auto",
                        loadingText: "Loading...",
                        noResultsText: "No results found",
                        noChoicesText: "No choices to choose from",
                        itemSelectText: "Press to select",
                        uniqueItemText: "Only unique values can be added",
                        customAddItemText: "Only values matching specific conditions can be added",
                        addItemText: function(e) { return 'Press Enter to add <b>"' + x(e) + '"</b>' },
                        maxItemText: function(e) { return "Only " + e + " values can be added" },
                        valueComparer: function(e, t) { return e === t },
                        fuseOptions: { includeScore: !0 },
                        callbackOnInit: null,
                        callbackOnCreateTemplates: null,
                        classNames: { containerOuter: "choices", containerInner: "choices__inner", input: "choices__input", inputCloned: "choices__input--cloned", list: "choices__list", listItems: "choices__list--multiple", listSingle: "choices__list--single", listDropdown: "choices__list--dropdown", item: "choices__item", itemSelectable: "choices__item--selectable", itemDisabled: "choices__item--disabled", itemChoice: "choices__item--choice", placeholder: "choices__placeholder", group: "choices__group", groupHeading: "choices__heading", button: "choices__button", activeState: "is-active", focusState: "is-focused", openState: "is-open", disabledState: "is-disabled", highlightedState: "is-highlighted", selectedState: "is-selected", flippedState: "is-flipped", loadingState: "is-loading", noResults: "has-no-results", noChoices: "has-no-choices" }
                    },
                    P = "showDropdown",
                    I = "hideDropdown",
                    D = "change",
                    N = "choice",
                    F = "search",
                    H = "addItem",
                    q = "removeItem",
                    z = "highlightItem",
                    R = "highlightChoice",
                    V = "ADD_CHOICE",
                    B = "FILTER_CHOICES",
                    W = "ACTIVATE_CHOICES",
                    U = "CLEAR_CHOICES",
                    G = "ADD_GROUP",
                    K = "ADD_ITEM",
                    Y = "REMOVE_ITEM",
                    $ = "HIGHLIGHT_ITEM",
                    J = 46,
                    X = 8,
                    Z = 13,
                    Q = 65,
                    ee = 27,
                    te = 38,
                    ne = 40,
                    ie = 33,
                    oe = 34,
                    re = "text",
                    se = "select-one",
                    ae = "select-multiple",
                    le = function() {
                        function e(e) {
                            var t = e.element,
                                n = e.type,
                                i = e.classNames,
                                o = e.position;
                            this.element = t, this.classNames = i, this.type = n, this.position = o, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                        }
                        var t = e.prototype;
                        return t.addEventListeners = function() { this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur) }, t.removeEventListeners = function() { this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur) }, t.shouldFlip = function(e) { if ("number" != typeof e) return !1; var t = !1; return "auto" === this.position ? t = !window.matchMedia("(min-height: " + (e + 1) + "px)").matches : "top" === this.position && (t = !0), t }, t.setActiveDescendant = function(e) { this.element.setAttribute("aria-activedescendant", e) }, t.removeActiveDescendant = function() { this.element.removeAttribute("aria-activedescendant") }, t.open = function(e) { this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0) }, t.close = function() { this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1) }, t.focus = function() { this.isFocussed || this.element.focus() }, t.addFocusState = function() { this.element.classList.add(this.classNames.focusState) }, t.removeFocusState = function() { this.element.classList.remove(this.classNames.focusState) }, t.enable = function() { this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === se && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1 }, t.disable = function() { this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === se && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0 }, t.wrap = function(e) {! function(e, t) { void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e) }(e, this.element) }, t.unwrap = function(e) { this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element) }, t.addLoadingState = function() { this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0 }, t.removeLoadingState = function() { this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1 }, t._onFocus = function() { this.isFocussed = !0 }, t._onBlur = function() { this.isFocussed = !1 }, e
                    }();

                function ce(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var ue = function() {
                        function e(e) {
                            var t = e.element,
                                n = e.type,
                                i = e.classNames,
                                o = e.preventPaste;
                            this.element = t, this.type = n, this.classNames = i, this.preventPaste = o, this.isFocussed = this.element === document.activeElement, this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
                        }
                        var t, n, i, o = e.prototype;
                        return o.addEventListeners = function() { this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, { passive: !0 }), this.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.element.addEventListener("blur", this._onBlur, { passive: !0 }) }, o.removeEventListeners = function() { this.element.removeEventListener("input", this._onInput, { passive: !0 }), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus, { passive: !0 }), this.element.removeEventListener("blur", this._onBlur, { passive: !0 }) }, o.enable = function() { this.element.removeAttribute("disabled"), this.isDisabled = !1 }, o.disable = function() { this.element.setAttribute("disabled", ""), this.isDisabled = !0 }, o.focus = function() { this.isFocussed || this.element.focus() }, o.blur = function() { this.isFocussed && this.element.blur() }, o.clear = function(e) { return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this }, o.setWidth = function() {
                            var e = this.element,
                                t = e.style,
                                n = e.value,
                                i = e.placeholder;
                            t.minWidth = i.length + 1 + "ch", t.width = n.length + 1 + "ch"
                        }, o.setActiveDescendant = function(e) { this.element.setAttribute("aria-activedescendant", e) }, o.removeActiveDescendant = function() { this.element.removeAttribute("aria-activedescendant") }, o._onInput = function() { this.type !== se && this.setWidth() }, o._onPaste = function(e) { this.preventPaste && e.preventDefault() }, o._onFocus = function() { this.isFocussed = !0 }, o._onBlur = function() { this.isFocussed = !1 }, t = e, (n = [{ key: "placeholder", set: function(e) { this.element.placeholder = e } }, { key: "value", get: function() { return x(this.element.value) }, set: function(e) { this.element.value = e } }]) && ce(t.prototype, n), i && ce(t, i), e
                    }(),
                    de = function() {
                        function e(e) {
                            var t = e.element;
                            this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight
                        }
                        var t = e.prototype;
                        return t.clear = function() { this.element.innerHTML = "" }, t.append = function(e) { this.element.appendChild(e) }, t.getChild = function(e) { return this.element.querySelector(e) }, t.hasChildren = function() { return this.element.hasChildNodes() }, t.scrollToTop = function() { this.element.scrollTop = 0 }, t.scrollToChildElement = function(e, t) {
                            var n = this;
                            if (e) {
                                var i = this.element.offsetHeight,
                                    o = this.element.scrollTop + i,
                                    r = e.offsetHeight,
                                    s = e.offsetTop + r,
                                    a = t > 0 ? this.element.scrollTop + s - o : e.offsetTop;
                                requestAnimationFrame((function() { n._animateScroll(a, t) }))
                            }
                        }, t._scrollDown = function(e, t, n) {
                            var i = (n - e) / t,
                                o = i > 1 ? i : 1;
                            this.element.scrollTop = e + o
                        }, t._scrollUp = function(e, t, n) {
                            var i = (e - n) / t,
                                o = i > 1 ? i : 1;
                            this.element.scrollTop = e - o
                        }, t._animateScroll = function(e, t) {
                            var n = this,
                                i = this.element.scrollTop,
                                o = !1;
                            t > 0 ? (this._scrollDown(i, 4, e), i < e && (o = !0)) : (this._scrollUp(i, 4, e), i > e && (o = !0)), o && requestAnimationFrame((function() { n._animateScroll(e, t) }))
                        }, e
                    }();

                function he(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var pe = function() {
                    function e(e) {
                        var t = e.element,
                            n = e.classNames;
                        if (this.element = t, this.classNames = n, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                        this.isDisabled = !1
                    }
                    var t, n, i, o = e.prototype;
                    return o.conceal = function() {
                        this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
                        var e = this.element.getAttribute("style");
                        e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active")
                    }, o.reveal = function() {
                        this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
                        var e = this.element.getAttribute("data-choice-orig-style");
                        e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value
                    }, o.enable = function() { this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1 }, o.disable = function() { this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0 }, o.triggerEvent = function(e, t) {
                        ! function(e, t, n) {
                            void 0 === n && (n = null);
                            var i = new CustomEvent(t, { detail: n, bubbles: !0, cancelable: !0 });
                            e.dispatchEvent(i)
                        }(this.element, e, t)
                    }, t = e, (n = [{ key: "isActive", get: function() { return "active" === this.element.dataset.choice } }, { key: "dir", get: function() { return this.element.dir } }, { key: "value", get: function() { return this.element.value }, set: function(e) { this.element.value = e } }]) && he(t.prototype, n), i && he(t, i), e
                }();

                function fe(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var me = function(e) {
                    var t, n, i, o, r;

                    function s(t) {
                        var n, i = t.element,
                            o = t.classNames,
                            r = t.delimiter;
                        return (n = e.call(this, { element: i, classNames: o }) || this).delimiter = r, n
                    }
                    return n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i = s, (o = [{
                        key: "value",
                        get: function() { return this.element.value },
                        set: function(e) {
                            var t = e.map((function(e) { return e.value })).join(this.delimiter);
                            this.element.setAttribute("value", t), this.element.value = t
                        }
                    }]) && fe(i.prototype, o), r && fe(i, r), s
                }(pe);

                function ge(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var ye = function(e) {
                        var t, n, i, o, r;

                        function s(t) {
                            var n, i = t.element,
                                o = t.classNames,
                                r = t.template;
                            return (n = e.call(this, { element: i, classNames: o }) || this).template = r, n
                        }
                        return n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, s.prototype.appendDocFragment = function(e) { this.element.innerHTML = "", this.element.appendChild(e) }, i = s, (o = [{ key: "placeholderOption", get: function() { return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]") } }, { key: "optionGroups", get: function() { return Array.from(this.element.getElementsByTagName("OPTGROUP")) } }, {
                            key: "options",
                            get: function() { return Array.from(this.element.options) },
                            set: function(e) {
                                var t = this,
                                    n = document.createDocumentFragment();
                                e.forEach((function(e) { return i = e, o = t.template(i), void n.appendChild(o); var i, o })), this.appendDocFragment(n)
                            }
                        }]) && ge(i.prototype, o), r && ge(i, r), s
                    }(pe),
                    ve = {
                        containerOuter: function(e, t, n, i, o, r) {
                            var s = e.containerOuter,
                                a = Object.assign(document.createElement("div"), { className: s });
                            return a.dataset.type = r, t && (a.dir = t), i && (a.tabIndex = 0), n && (a.setAttribute("role", o ? "combobox" : "listbox"), o && a.setAttribute("aria-autocomplete", "list")), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", "false"), a
                        },
                        containerInner: function(e) { var t = e.containerInner; return Object.assign(document.createElement("div"), { className: t }) },
                        itemList: function(e, t) {
                            var n = e.list,
                                i = e.listSingle,
                                o = e.listItems;
                            return Object.assign(document.createElement("div"), { className: n + " " + (t ? i : o) })
                        },
                        placeholder: function(e, t) { var n = e.placeholder; return Object.assign(document.createElement("div"), { className: n, innerHTML: t }) },
                        item: function(e, t, n) {
                            var i = e.item,
                                o = e.button,
                                r = e.highlightedState,
                                s = e.itemSelectable,
                                a = e.placeholder,
                                l = t.id,
                                c = t.value,
                                u = t.label,
                                d = t.customProperties,
                                h = t.active,
                                p = t.disabled,
                                f = t.highlighted,
                                m = t.placeholder,
                                g = Object.assign(document.createElement("div"), { className: i, innerHTML: u });
                            if (Object.assign(g.dataset, { item: "", id: l, value: c, customProperties: d }), h && g.setAttribute("aria-selected", "true"), p && g.setAttribute("aria-disabled", "true"), m && g.classList.add(a), g.classList.add(f ? r : s), n) {
                                p && g.classList.remove(s), g.dataset.deletable = "";
                                var y = "Remove item",
                                    v = Object.assign(document.createElement("button"), { type: "button", className: o, innerHTML: y });
                                v.setAttribute("aria-label", "Remove item: '" + c + "'"), v.dataset.button = "", g.appendChild(v)
                            }
                            return g
                        },
                        choiceList: function(e, t) {
                            var n = e.list,
                                i = Object.assign(document.createElement("div"), { className: n });
                            return t || i.setAttribute("aria-multiselectable", "true"), i.setAttribute("role", "listbox"), i
                        },
                        choiceGroup: function(e, t) {
                            var n = e.group,
                                i = e.groupHeading,
                                o = e.itemDisabled,
                                r = t.id,
                                s = t.value,
                                a = t.disabled,
                                l = Object.assign(document.createElement("div"), { className: n + " " + (a ? o : "") });
                            return l.setAttribute("role", "group"), Object.assign(l.dataset, { group: "", id: r, value: s }), a && l.setAttribute("aria-disabled", "true"), l.appendChild(Object.assign(document.createElement("div"), { className: i, innerHTML: s })), l
                        },
                        choice: function(e, t, n) {
                            var i = e.item,
                                o = e.itemChoice,
                                r = e.itemSelectable,
                                s = e.selectedState,
                                a = e.itemDisabled,
                                l = e.placeholder,
                                c = t.id,
                                u = t.value,
                                d = t.label,
                                h = t.groupId,
                                p = t.elementId,
                                f = t.disabled,
                                m = t.selected,
                                g = t.placeholder,
                                y = Object.assign(document.createElement("div"), { id: p, innerHTML: d, className: i + " " + o });
                            return m && y.classList.add(s), g && y.classList.add(l), y.setAttribute("role", h > 0 ? "treeitem" : "option"), Object.assign(y.dataset, { choice: "", id: c, value: u, selectText: n }), f ? (y.classList.add(a), y.dataset.choiceDisabled = "", y.setAttribute("aria-disabled", "true")) : (y.classList.add(r), y.dataset.choiceSelectable = ""), y
                        },
                        input: function(e, t) {
                            var n = e.input,
                                i = e.inputCloned,
                                o = Object.assign(document.createElement("input"), { type: "text", className: n + " " + i, autocomplete: "off", autocapitalize: "off", spellcheck: !1 });
                            return o.setAttribute("role", "textbox"), o.setAttribute("aria-autocomplete", "list"), o.setAttribute("aria-label", t), o
                        },
                        dropdown: function(e) {
                            var t = e.list,
                                n = e.listDropdown,
                                i = document.createElement("div");
                            return i.classList.add(t, n), i.setAttribute("aria-expanded", "false"), i
                        },
                        notice: function(e, t, n) {
                            var i = e.item,
                                o = e.itemChoice,
                                r = e.noResults,
                                s = e.noChoices;
                            void 0 === n && (n = "");
                            var a = [i, o];
                            return "no-choices" === n ? a.push(s) : "no-results" === n && a.push(r), Object.assign(document.createElement("div"), { innerHTML: t, className: a.join(" ") })
                        },
                        option: function(e) {
                            var t = e.label,
                                n = e.value,
                                i = e.customProperties,
                                o = e.active,
                                r = e.disabled,
                                s = new Option(t, n, !1, o);
                            return i && (s.dataset.customProperties = i), s.disabled = r, s
                        }
                    },
                    be = function(e) { return void 0 === e && (e = !0), { type: W, active: e } },
                    we = function(e, t) { return { type: $, id: e, highlighted: t } },
                    _e = function(e) {
                        var t = e.value,
                            n = e.id,
                            i = e.active,
                            o = e.disabled;
                        return { type: G, value: t, id: n, active: i, disabled: o }
                    },
                    xe = function(e) { return { type: "SET_IS_LOADING", isLoading: e } };

                function ke(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var je = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
                    Se = {},
                    Te = function() {
                        var e, t, n;

                        function i(e, t) {
                            var n = this;
                            void 0 === e && (e = "[data-choice]"), void 0 === t && (t = {}), this.config = s.a.all([L, i.defaults.options, t], { arrayMerge: function(e, t) { return [].concat(t) } });
                            var o, r, a, l, c = (o = this.config, r = L, a = Object.keys(o).sort(), l = Object.keys(r).sort(), a.filter((function(e) { return l.indexOf(e) < 0 })));
                            c.length && console.warn("Unknown config option(s) passed", c.join(", "));
                            var u = "string" == typeof e ? document.querySelector(e) : e;
                            if (!(u instanceof HTMLInputElement || u instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                            if (this._isTextElement = u.type === re, this._isSelectOneElement = u.type === se, this._isSelectMultipleElement = u.type === ae, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto"), t.addItemFilter && "function" != typeof t.addItemFilter) {
                                var d = t.addItemFilter instanceof RegExp ? t.addItemFilter : new RegExp(t.addItemFilter);
                                this.config.addItemFilter = d.test.bind(d)
                            }
                            if (this._isTextElement ? this.passedElement = new me({ element: u, classNames: this.config.classNames, delimiter: this.config.delimiter }) : this.passedElement = new ye({ element: u, classNames: this.config.classNames, template: function(e) { return n._templates.option(e) } }), this.initialised = !1, this._store = new M, this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = function(e, t) { var n = e.id || e.name && e.name + "-" + b(2) || b(4); return t + "-" + n.replace(/(:|\.|\[|\]|,)/g, "") }(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                                var h = window.getComputedStyle(this.passedElement.element).direction;
                                h !== window.getComputedStyle(document.documentElement).direction && (this._direction = h)
                            }
                            if (this._idNames = { itemChoice: "item-choice" }, this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this.passedElement.options && this.passedElement.options.forEach((function(e) { n._presetChoices.push({ value: e.value, label: e.innerHTML, selected: e.selected, disabled: e.disabled || e.parentNode.disabled, placeholder: "" === e.value || e.hasAttribute("placeholder"), customProperties: e.getAttribute("data-custom-properties") }) })), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised"), void(this.initialised = !0);
                            this.init()
                        }
                        e = i, n = [{ key: "defaults", get: function() { return Object.preventExtensions({get options() { return Se }, get templates() { return ve } }) } }], (t = null) && ke(e.prototype, t), n && ke(e, n);
                        var r = i.prototype;
                        return r.init = function() {
                            if (!this.initialised) {
                                this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = S(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                                var e = this.config.callbackOnInit;
                                e && "function" == typeof e && e.call(this)
                            }
                        }, r.destroy = function() { this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = null, this.initialised = !1) }, r.enable = function() { return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this }, r.disable = function() { return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this }, r.highlightItem = function(e, t) {
                            if (void 0 === t && (t = !0), !e) return this;
                            var n = e.id,
                                i = e.groupId,
                                o = void 0 === i ? -1 : i,
                                r = e.value,
                                s = void 0 === r ? "" : r,
                                a = e.label,
                                l = void 0 === a ? "" : a,
                                c = o >= 0 ? this._store.getGroupById(o) : null;
                            return this._store.dispatch(we(n, !0)), t && this.passedElement.triggerEvent(z, { id: n, value: s, label: l, groupValue: c && c.value ? c.value : null }), this
                        }, r.unhighlightItem = function(e) {
                            if (!e) return this;
                            var t = e.id,
                                n = e.groupId,
                                i = void 0 === n ? -1 : n,
                                o = e.value,
                                r = void 0 === o ? "" : o,
                                s = e.label,
                                a = void 0 === s ? "" : s,
                                l = i >= 0 ? this._store.getGroupById(i) : null;
                            return this._store.dispatch(we(t, !1)), this.passedElement.triggerEvent(z, { id: t, value: r, label: a, groupValue: l && l.value ? l.value : null }), this
                        }, r.highlightAll = function() { var e = this; return this._store.items.forEach((function(t) { return e.highlightItem(t) })), this }, r.unhighlightAll = function() { var e = this; return this._store.items.forEach((function(t) { return e.unhighlightItem(t) })), this }, r.removeActiveItemsByValue = function(e) { var t = this; return this._store.activeItems.filter((function(t) { return t.value === e })).forEach((function(e) { return t._removeItem(e) })), this }, r.removeActiveItems = function(e) { var t = this; return this._store.activeItems.filter((function(t) { return t.id !== e })).forEach((function(e) { return t._removeItem(e) })), this }, r.removeHighlightedItems = function(e) { var t = this; return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach((function(n) { t._removeItem(n), e && t._triggerChange(n.value) })), this }, r.showDropdown = function(e) { var t = this; return this.dropdown.isActive || requestAnimationFrame((function() { t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(P, {}) })), this }, r.hideDropdown = function(e) { var t = this; return this.dropdown.isActive ? (requestAnimationFrame((function() { t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(I, {}) })), this) : this }, r.getValue = function(e) { void 0 === e && (e = !1); var t = this._store.activeItems.reduce((function(t, n) { var i = e ? n.value : n; return t.push(i), t }), []); return this._isSelectOneElement ? t[0] : t }, r.setValue = function(e) { var t = this; return this.initialised ? (e.forEach((function(e) { return t._setChoiceOrItem(e) })), this) : this }, r.setChoiceByValue = function(e) { var t = this; return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach((function(e) { return t._findAndSelectChoiceByValue(e) })), this }, r.setChoices = function(e, t, n, i) { var o = this; if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === n && (n = "label"), void 0 === i && (i = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices"); if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices"); if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects"); if (i && this.clearChoices(), "function" == typeof e) { var r = e(this); if ("function" == typeof Promise && r instanceof Promise) return new Promise((function(e) { return requestAnimationFrame(e) })).then((function() { return o._handleLoadingState(!0) })).then((function() { return r })).then((function(e) { return o.setChoices(e, t, n, i) })).catch((function(e) { o.config.silent || console.error(e) })).then((function() { return o._handleLoadingState(!1) })).then((function() { return o })); if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof r); return this.setChoices(r, t, n, !1) } if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices"); return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach((function(e) { e.choices ? o._addGroup({ id: parseInt(e.id, 10) || null, group: e, valueKey: t, labelKey: n }) : o._addChoice({ value: e[t], label: e[n], isSelected: e.selected, isDisabled: e.disabled, customProperties: e.customProperties, placeholder: e.placeholder }) })), this._stopLoading(), this }, r.clearChoices = function() { return this._store.dispatch({ type: U }), this }, r.clearStore = function() { return this._store.dispatch({ type: "CLEAR_ALL" }), this }, r.clearInput = function() { var e = !this._isSelectOneElement; return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(be(!0))), this }, r._render = function() {
                            if (!this._store.isLoading()) {
                                this._currentState = this._store.state;
                                var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                                    t = this._isSelectElement,
                                    n = this._currentState.items !== this._prevState.items;
                                e && (t && this._renderChoices(), n && this._renderItems(), this._prevState = this._currentState)
                            }
                        }, r._renderChoices = function() {
                            var e = this,
                                t = this._store,
                                n = t.activeGroups,
                                i = t.activeChoices,
                                o = document.createDocumentFragment();
                            if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame((function() { return e.choiceList.scrollToTop() })), n.length >= 1 && !this._isSearching) {
                                var r = i.filter((function(e) { return !0 === e.placeholder && -1 === e.groupId }));
                                r.length >= 1 && (o = this._createChoicesFragment(r, o)), o = this._createGroupsFragment(n, i, o)
                            } else i.length >= 1 && (o = this._createChoicesFragment(i, o));
                            if (o.childNodes && o.childNodes.length > 0) {
                                var s = this._store.activeItems,
                                    a = this._canAddItem(s, this.input.value);
                                a.response ? (this.choiceList.append(o), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", a.notice))
                            } else {
                                var l, c;
                                this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l)
                            }
                        }, r._renderItems = function() {
                            var e = this._store.activeItems || [];
                            this.itemList.clear();
                            var t = this._createItemsFragment(e);
                            t.childNodes && this.itemList.append(t)
                        }, r._createGroupsFragment = function(e, t, n) {
                            var i = this;
                            return void 0 === n && (n = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach((function(e) {
                                var o = function(e) { return t.filter((function(t) { return i._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === i.config.renderSelectedChoices || !t.selected) })) }(e);
                                if (o.length >= 1) {
                                    var r = i._getTemplate("choiceGroup", e);
                                    n.appendChild(r), i._createChoicesFragment(o, n, !0)
                                }
                            })), n
                        }, r._createChoicesFragment = function(e, t, n) {
                            var i = this;
                            void 0 === t && (t = document.createDocumentFragment()), void 0 === n && (n = !1);
                            var o = this.config,
                                r = o.renderSelectedChoices,
                                s = o.searchResultLimit,
                                a = o.renderChoiceLimit,
                                l = this._isSearching ? j : this.config.sorter,
                                c = function(e) {
                                    if ("auto" !== r || i._isSelectOneElement || !e.selected) {
                                        var n = i._getTemplate("choice", e, i.config.itemSelectText);
                                        t.appendChild(n)
                                    }
                                },
                                u = e;
                            "auto" !== r || this._isSelectOneElement || (u = e.filter((function(e) { return !e.selected })));
                            var d = u.reduce((function(e, t) { return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e }), { placeholderChoices: [], normalChoices: [] }),
                                h = d.placeholderChoices,
                                p = d.normalChoices;
                            (this.config.shouldSort || this._isSearching) && p.sort(l);
                            var f = u.length,
                                m = this._isSelectOneElement ? [].concat(h, p) : p;
                            this._isSearching ? f = s : a && a > 0 && !n && (f = a);
                            for (var g = 0; g < f; g += 1) m[g] && c(m[g]);
                            return t
                        }, r._createItemsFragment = function(e, t) {
                            var n = this;
                            void 0 === t && (t = document.createDocumentFragment());
                            var i = this.config,
                                o = i.shouldSortItems,
                                r = i.sorter,
                                s = i.removeItemButton;
                            return o && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e, e.forEach((function(e) {
                                var i = n._getTemplate("item", e, s);
                                t.appendChild(i)
                            })), t
                        }, r._triggerChange = function(e) { null != e && this.passedElement.triggerEvent(D, { value: e }) }, r._selectPlaceholderChoice = function() {
                            var e = this._store.placeholderChoice;
                            e && (this._addItem({ value: e.value, label: e.label, choiceId: e.id, groupId: e.groupId, placeholder: e.placeholder }), this._triggerChange(e.value))
                        }, r._handleButtonAction = function(e, t) {
                            if (e && t && this.config.removeItems && this.config.removeItemButton) {
                                var n = t.parentNode.getAttribute("data-id"),
                                    i = e.find((function(e) { return e.id === parseInt(n, 10) }));
                                this._removeItem(i), this._triggerChange(i.value), this._isSelectOneElement && this._selectPlaceholderChoice()
                            }
                        }, r._handleItemAction = function(e, t, n) {
                            var i = this;
                            if (void 0 === n && (n = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                                var o = t.getAttribute("data-id");
                                e.forEach((function(e) { e.id !== parseInt(o, 10) || e.highlighted ? !n && e.highlighted && i.unhighlightItem(e) : i.highlightItem(e) })), this.input.focus()
                            }
                        }, r._handleChoiceAction = function(e, t) {
                            if (e && t) {
                                var n = t.dataset.id,
                                    i = this._store.getChoiceById(n);
                                if (i) {
                                    var o = e[0] && e[0].keyCode ? e[0].keyCode : null,
                                        r = this.dropdown.isActive;
                                    i.keyCode = o, this.passedElement.triggerEvent(N, { choice: i }), i.selected || i.disabled || this._canAddItem(e, i.value).response && (this._addItem({ value: i.value, label: i.label, choiceId: i.id, groupId: i.groupId, customProperties: i.customProperties, placeholder: i.placeholder, keyCode: i.keyCode }), this._triggerChange(i.value)), this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus())
                                }
                            }
                        }, r._handleBackspace = function(e) {
                            if (this.config.removeItems && e) {
                                var t = e[e.length - 1],
                                    n = e.some((function(e) { return e.highlighted }));
                                this.config.editItems && !n && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (n || this.highlightItem(t, !1), this.removeHighlightedItems(!0))
                            }
                        }, r._startLoading = function() { this._store.dispatch(xe(!0)) }, r._stopLoading = function() { this._store.dispatch(xe(!1)) }, r._handleLoadingState = function(e) {
                            void 0 === e && (e = !0);
                            var t = this.itemList.getChild("." + this.config.classNames.placeholder);
                            e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "")
                        }, r._handleSearch = function(e) {
                            if (e && this.input.isFocussed) {
                                var t = this._store.choices,
                                    n = this.config,
                                    i = n.searchFloor,
                                    o = n.searchChoices,
                                    r = t.some((function(e) { return !e.active }));
                                if (e && e.length >= i) {
                                    var s = o ? this._searchChoices(e) : 0;
                                    this.passedElement.triggerEvent(F, { value: e, resultCount: s })
                                } else r && (this._isSearching = !1, this._store.dispatch(be(!0)))
                            }
                        }, r._canAddItem = function(e, t) {
                            var n = !0,
                                i = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
                            if (!this._isSelectOneElement) {
                                var o = function(e, t, n) { return void 0 === n && (n = "value"), e.some((function(e) { return "string" == typeof t ? e[n] === t.trim() : e[n] === t })) }(e, t);
                                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (n = !1, i = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && o && n && (n = !1, i = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && n && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (n = !1, i = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText)
                            }
                            return { response: n, notice: i }
                        }, r._searchChoices = function(e) {
                            var t = "string" == typeof e ? e.trim() : e,
                                n = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                            if (t.length < 1 && t === n + " ") return 0;
                            var i = this._store.searchableChoices,
                                r = t,
                                s = [].concat(this.config.searchFields),
                                a = Object.assign(this.config.fuseOptions, { keys: s }),
                                l = new o.a(i, a).search(r);
                            return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function(e) { return { type: B, results: e } }(l)), l.length
                        }, r._addEventListeners = function() {
                            var e = document.documentElement;
                            e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, { passive: !0 }), e.addEventListener("touchmove", this._onTouchMove, { passive: !0 }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, { passive: !0 }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.containerOuter.element.addEventListener("blur", this._onBlur, { passive: !0 })), this.input.element.addEventListener("keyup", this._onKeyUp, { passive: !0 }), this.input.element.addEventListener("focus", this._onFocus, { passive: !0 }), this.input.element.addEventListener("blur", this._onBlur, { passive: !0 }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, { passive: !0 }), this.input.addEventListeners()
                        }, r._removeEventListeners = function() {
                            var e = document.documentElement;
                            e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners()
                        }, r._onKeyDown = function(e) {
                            var t, n = e.target,
                                i = e.keyCode,
                                o = e.ctrlKey,
                                r = e.metaKey,
                                s = this._store.activeItems,
                                a = this.input.isFocussed,
                                l = this.dropdown.isActive,
                                c = this.itemList.hasChildren(),
                                u = String.fromCharCode(i),
                                d = J,
                                h = X,
                                p = Z,
                                f = Q,
                                m = ee,
                                g = te,
                                y = ne,
                                v = ie,
                                b = oe,
                                w = o || r;
                            !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(u) && this.showDropdown();
                            var _ = ((t = {})[f] = this._onAKey, t[p] = this._onEnterKey, t[m] = this._onEscapeKey, t[g] = this._onDirectionKey, t[v] = this._onDirectionKey, t[y] = this._onDirectionKey, t[b] = this._onDirectionKey, t[h] = this._onDeleteKey, t[d] = this._onDeleteKey, t);
                            _[i] && _[i]({ event: e, target: n, keyCode: i, metaKey: r, activeItems: s, hasFocusedInput: a, hasActiveDropdown: l, hasItems: c, hasCtrlDownKeyPressed: w })
                        }, r._onKeyUp = function(e) {
                            var t = e.target,
                                n = e.keyCode,
                                i = this.input.value,
                                o = this._store.activeItems,
                                r = this._canAddItem(o, i),
                                s = J,
                                a = X;
                            if (this._isTextElement)
                                if (r.notice && i) {
                                    var l = this._getTemplate("notice", r.notice);
                                    this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0)
                                } else this.hideDropdown(!0);
                            else {
                                var c = (n === s || n === a) && !t.value,
                                    u = !this._isTextElement && this._isSearching,
                                    d = this._canSearch && r.response;
                                c && u ? (this._isSearching = !1, this._store.dispatch(be(!0))) : d && this._handleSearch(this.input.value)
                            }
                            this._canSearch = this.config.searchEnabled
                        }, r._onAKey = function(e) {
                            var t = e.hasItems;
                            e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll())
                        }, r._onEnterKey = function(e) {
                            var t = e.event,
                                n = e.target,
                                i = e.activeItems,
                                o = e.hasActiveDropdown,
                                r = Z,
                                s = n.hasAttribute("data-button");
                            if (this._isTextElement && n.value) {
                                var a = this.input.value;
                                this._canAddItem(i, a).response && (this.hideDropdown(!0), this._addItem({ value: a }), this._triggerChange(a), this.clearInput())
                            }
                            if (s && (this._handleButtonAction(i, n), t.preventDefault()), o) {
                                var l = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                                l && (i[0] && (i[0].keyCode = r), this._handleChoiceAction(i, l)), t.preventDefault()
                            } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault())
                        }, r._onEscapeKey = function(e) { e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus()) }, r._onDirectionKey = function(e) {
                            var t, n, i, o = e.event,
                                r = e.hasActiveDropdown,
                                s = e.keyCode,
                                a = e.metaKey,
                                l = ne,
                                c = ie,
                                u = oe;
                            if (r || this._isSelectOneElement) {
                                this.showDropdown(), this._canSearch = !1;
                                var d, h = s === l || s === u ? 1 : -1,
                                    p = "[data-choice-selectable]";
                                if (a || s === u || s === c) d = h > 0 ? this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type") : this.dropdown.element.querySelector(p);
                                else {
                                    var f = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                                    d = f ? function(e, t, n) {
                                        if (void 0 === n && (n = 1), e instanceof Element && "string" == typeof t) {
                                            for (var i = (n > 0 ? "next" : "previous") + "ElementSibling", o = e[i]; o;) {
                                                if (o.matches(t)) return o;
                                                o = o[i]
                                            }
                                            return o
                                        }
                                    }(f, p, h) : this.dropdown.element.querySelector(p)
                                }
                                d && (t = d, n = this.choiceList.element, void 0 === (i = h) && (i = 1), t && (i > 0 ? n.scrollTop + n.offsetHeight >= t.offsetTop + t.offsetHeight : t.offsetTop >= n.scrollTop) || this.choiceList.scrollToChildElement(d, h), this._highlightChoice(d)), o.preventDefault()
                            }
                        }, r._onDeleteKey = function(e) {
                            var t = e.event,
                                n = e.target,
                                i = e.hasFocusedInput,
                                o = e.activeItems;
                            !i || n.value || this._isSelectOneElement || (this._handleBackspace(o), t.preventDefault())
                        }, r._onTouchMove = function() { this._wasTap && (this._wasTap = !1) }, r._onTouchEnd = function(e) {
                            var t = (e || e.touches[0]).target;
                            this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0
                        }, r._onMouseDown = function(e) {
                            var t = e.target;
                            if (t instanceof HTMLElement) {
                                if (je && this.choiceList.element.contains(t)) {
                                    var n = this.choiceList.element.firstElementChild,
                                        i = "ltr" === this._direction ? e.offsetX >= n.offsetWidth : e.offsetX < n.offsetLeft;
                                    this._isScrollingOnIe = i
                                }
                                if (t !== this.input.element) {
                                    var o = t.closest("[data-button],[data-item],[data-choice]");
                                    if (o instanceof HTMLElement) {
                                        var r = e.shiftKey,
                                            s = this._store.activeItems,
                                            a = o.dataset;
                                        "button" in a ? this._handleButtonAction(s, o) : "item" in a ? this._handleItemAction(s, o, r) : "choice" in a && this._handleChoiceAction(s, o)
                                    }
                                    e.preventDefault()
                                }
                            }
                        }, r._onMouseOver = function(e) {
                            var t = e.target;
                            t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t)
                        }, r._onClick = function(e) {
                            var t = e.target;
                            this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0))
                        }, r._onFocus = function(e) {
                            var t, n = this,
                                i = e.target;
                            this.containerOuter.element.contains(i) && ((t = {}).text = function() { i === n.input.element && n.containerOuter.addFocusState() }, t["select-one"] = function() { n.containerOuter.addFocusState(), i === n.input.element && n.showDropdown(!0) }, t["select-multiple"] = function() { i === n.input.element && (n.showDropdown(!0), n.containerOuter.addFocusState()) }, t)[this.passedElement.element.type]()
                        }, r._onBlur = function(e) {
                            var t = this,
                                n = e.target;
                            if (this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
                                var i, o = this._store.activeItems.some((function(e) { return e.highlighted }));
                                ((i = {}).text = function() { n === t.input.element && (t.containerOuter.removeFocusState(), o && t.unhighlightAll(), t.hideDropdown(!0)) }, i["select-one"] = function() { t.containerOuter.removeFocusState(), (n === t.input.element || n === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0) }, i["select-multiple"] = function() { n === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), o && t.unhighlightAll()) }, i)[this.passedElement.element.type]()
                            } else this._isScrollingOnIe = !1, this.input.element.focus()
                        }, r._onFormReset = function() { this._store.dispatch({ type: "RESET_TO", state: this._initialState }) }, r._highlightChoice = function(e) {
                            var t = this;
                            void 0 === e && (e = null);
                            var n = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                            if (n.length) {
                                var i = e;
                                Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach((function(e) { e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false") })), i ? this._highlightPosition = n.indexOf(i) : (i = n.length > this._highlightPosition ? n[this._highlightPosition] : n[n.length - 1]) || (i = n[0]), i.classList.add(this.config.classNames.highlightedState), i.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(R, { el: i }), this.dropdown.isActive && (this.input.setActiveDescendant(i.id), this.containerOuter.setActiveDescendant(i.id))
                            }
                        }, r._addItem = function(e) {
                            var t = e.value,
                                n = e.label,
                                i = void 0 === n ? null : n,
                                o = e.choiceId,
                                r = void 0 === o ? -1 : o,
                                s = e.groupId,
                                a = void 0 === s ? -1 : s,
                                l = e.customProperties,
                                c = void 0 === l ? null : l,
                                u = e.placeholder,
                                d = void 0 !== u && u,
                                h = e.keyCode,
                                p = void 0 === h ? null : h,
                                f = "string" == typeof t ? t.trim() : t,
                                m = p,
                                g = c,
                                y = this._store.items,
                                v = i || f,
                                b = r || -1,
                                w = a >= 0 ? this._store.getGroupById(a) : null,
                                _ = y ? y.length + 1 : 1;
                            return this.config.prependValue && (f = this.config.prependValue + f.toString()), this.config.appendValue && (f += this.config.appendValue.toString()), this._store.dispatch(function(e) {
                                var t = e.value,
                                    n = e.label,
                                    i = e.id,
                                    o = e.choiceId,
                                    r = e.groupId,
                                    s = e.customProperties,
                                    a = e.placeholder,
                                    l = e.keyCode;
                                return { type: K, value: t, label: n, id: i, choiceId: o, groupId: r, customProperties: s, placeholder: a, keyCode: l }
                            }({ value: f, label: v, id: _, choiceId: b, groupId: a, customProperties: c, placeholder: d, keyCode: m })), this._isSelectOneElement && this.removeActiveItems(_), this.passedElement.triggerEvent(H, { id: _, value: f, label: v, customProperties: g, groupValue: w && w.value ? w.value : void 0, keyCode: m }), this
                        }, r._removeItem = function(e) {
                            if (!e || !_("Object", e)) return this;
                            var t = e.id,
                                n = e.value,
                                i = e.label,
                                o = e.choiceId,
                                r = e.groupId,
                                s = r >= 0 ? this._store.getGroupById(r) : null;
                            return this._store.dispatch(function(e, t) { return { type: Y, id: e, choiceId: t } }(t, o)), s && s.value ? this.passedElement.triggerEvent(q, { id: t, value: n, label: i, groupValue: s.value }) : this.passedElement.triggerEvent(q, { id: t, value: n, label: i }), this
                        }, r._addChoice = function(e) {
                            var t = e.value,
                                n = e.label,
                                i = void 0 === n ? null : n,
                                o = e.isSelected,
                                r = void 0 !== o && o,
                                s = e.isDisabled,
                                a = void 0 !== s && s,
                                l = e.groupId,
                                c = void 0 === l ? -1 : l,
                                u = e.customProperties,
                                d = void 0 === u ? null : u,
                                h = e.placeholder,
                                p = void 0 !== h && h,
                                f = e.keyCode,
                                m = void 0 === f ? null : f;
                            if (null != t) {
                                var g = this._store.choices,
                                    y = i || t,
                                    v = g ? g.length + 1 : 1,
                                    b = this._baseId + "-" + this._idNames.itemChoice + "-" + v;
                                this._store.dispatch(function(e) {
                                    var t = e.value,
                                        n = e.label,
                                        i = e.id,
                                        o = e.groupId,
                                        r = e.disabled,
                                        s = e.elementId,
                                        a = e.customProperties,
                                        l = e.placeholder,
                                        c = e.keyCode;
                                    return { type: V, value: t, label: n, id: i, groupId: o, disabled: r, elementId: s, customProperties: a, placeholder: l, keyCode: c }
                                }({ id: v, groupId: c, elementId: b, value: t, label: y, disabled: a, customProperties: d, placeholder: p, keyCode: m })), r && this._addItem({ value: t, label: y, choiceId: v, customProperties: d, placeholder: p, keyCode: m })
                            }
                        }, r._addGroup = function(e) {
                            var t = this,
                                n = e.group,
                                i = e.id,
                                o = e.valueKey,
                                r = void 0 === o ? "value" : o,
                                s = e.labelKey,
                                a = void 0 === s ? "label" : s,
                                l = _("Object", n) ? n.choices : Array.from(n.getElementsByTagName("OPTION")),
                                c = i || Math.floor((new Date).valueOf() * Math.random()),
                                u = !!n.disabled && n.disabled;
                            l ? (this._store.dispatch(_e({ value: n.label, id: c, active: !0, disabled: u })), l.forEach((function(e) {
                                var n = e.disabled || e.parentNode && e.parentNode.disabled;
                                t._addChoice({ value: e[r], label: _("Object", e) ? e[a] : e.innerHTML, isSelected: e.selected, isDisabled: n, groupId: c, customProperties: e.customProperties, placeholder: e.placeholder })
                            }))) : this._store.dispatch(_e({ value: n.label, id: n.id, active: !1, disabled: n.disabled }))
                        }, r._getTemplate = function(e) { var t; if (!e) return null; for (var n = this.config.classNames, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r]; return (t = this._templates[e]).call.apply(t, [this, n].concat(o)) }, r._createTemplates = function() {
                            var e = this.config.callbackOnCreateTemplates,
                                t = {};
                            e && "function" == typeof e && (t = e.call(this, k)), this._templates = s()(ve, t)
                        }, r._createElements = function() { this.containerOuter = new le({ element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.containerInner = new le({ element: this._getTemplate("containerInner"), classNames: this.config.classNames, type: this.passedElement.element.type, position: this.config.position }), this.input = new ue({ element: this._getTemplate("input", this._placeholderValue), classNames: this.config.classNames, type: this.passedElement.element.type, preventPaste: !this.config.paste }), this.choiceList = new de({ element: this._getTemplate("choiceList", this._isSelectOneElement) }), this.itemList = new de({ element: this._getTemplate("itemList", this._isSelectOneElement) }), this.dropdown = new O({ element: this._getTemplate("dropdown"), classNames: this.config.classNames, type: this.passedElement.element.type }) }, r._createStructure = function() { this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems) }, r._addPredefinedGroups = function(e) {
                            var t = this,
                                n = this.passedElement.placeholderOption;
                            n && "SELECT" === n.parentNode.tagName && this._addChoice({ value: n.value, label: n.innerHTML, isSelected: n.selected, isDisabled: n.disabled, placeholder: !0 }), e.forEach((function(e) { return t._addGroup({ group: e, id: e.id || null }) }))
                        }, r._addPredefinedChoices = function(e) {
                            var t = this;
                            this.config.shouldSort && e.sort(this.config.sorter);
                            var n = e.some((function(e) { return e.selected })),
                                i = e.findIndex((function(e) { return void 0 === e.disabled || !e.disabled }));
                            e.forEach((function(e, o) {
                                var r = e.value,
                                    s = e.label,
                                    a = e.customProperties,
                                    l = e.placeholder;
                                if (t._isSelectElement)
                                    if (e.choices) t._addGroup({ group: e, id: e.id || null });
                                    else {
                                        var c = !(!t._isSelectOneElement || n || o !== i) || e.selected,
                                            u = e.disabled;
                                        t._addChoice({ value: r, label: s, isSelected: c, isDisabled: u, customProperties: a, placeholder: l })
                                    }
                                else t._addChoice({ value: r, label: s, isSelected: e.selected, isDisabled: e.disabled, customProperties: a, placeholder: l })
                            }))
                        }, r._addPredefinedItems = function(e) {
                            var t = this;
                            e.forEach((function(e) { "object" == typeof e && e.value && t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }), "string" == typeof e && t._addItem({ value: e }) }))
                        }, r._setChoiceOrItem = function(e) {
                            var t = this;
                            ({ object: function() { e.value && (t._isTextElement ? t._addItem({ value: e.value, label: e.label, choiceId: e.id, customProperties: e.customProperties, placeholder: e.placeholder }) : t._addChoice({ value: e.value, label: e.label, isSelected: !0, isDisabled: !1, customProperties: e.customProperties, placeholder: e.placeholder })) }, string: function() { t._isTextElement ? t._addItem({ value: e }) : t._addChoice({ value: e, label: e, isSelected: !0, isDisabled: !1 }) } })[w(e).toLowerCase()]()
                        }, r._findAndSelectChoiceByValue = function(e) {
                            var t = this,
                                n = this._store.choices.find((function(n) { return t.config.valueComparer(n.value, e) }));
                            n && !n.selected && this._addItem({ value: n.value, label: n.label, choiceId: n.id, groupId: n.groupId, customProperties: n.customProperties, placeholder: n.placeholder, keyCode: n.keyCode })
                        }, r._generatePlaceholderValue = function() {
                            if (this._isSelectElement) { var e = this.passedElement.placeholderOption; return !!e && e.text }
                            var t = this.config,
                                n = t.placeholder,
                                i = t.placeholderValue,
                                o = this.passedElement.element.dataset;
                            if (n) { if (i) return i; if (o.placeholder) return o.placeholder }
                            return !1
                        }, i
                    }();
                t.default = Te
            }]).default
        }, "object" == typeof n && "object" == typeof t ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? n.Choices = o() : i.Choices = o()
    }, {}],
    6: [function(e, t, n) {
        var i, o;
        i = "undefined" != typeof self ? self : this, o = function() {
            return function(e) {
                var t = {};

                function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                return n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: i }) }, n.r = function(e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
            }({
                "./dist/icons.json":
                /*!*************************!*\
                  !*** ./dist/icons.json ***!
                  \*************************/
                /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, download-cloud, download, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
                    function(e) { e.exports = { activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', check: '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', circle: '<circle cx="12" cy="12" r="10"></circle>', clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>', cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>', hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>', hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>', instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>', italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>', loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', minus: '<line x1="5" y1="12" x2="19" y2="12"></line>', monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>', settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>', smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>', square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>', tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>', target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>', wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>', wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' } },
                "./node_modules/classnames/dedupe.js":
                /*!*******************************************!*\
                  !*** ./node_modules/classnames/dedupe.js ***!
                  \*******************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i;
                    /*!
                      Copyright (c) 2016 Jed Watson.
                      Licensed under the MIT License (MIT), see
                      http://jedwatson.github.io/classnames
                    */
                    ! function() {
                        "use strict";
                        var n = function() {
                            function e() {}

                            function t(e, t) { for (var n = t.length, i = 0; i < n; ++i) o(e, t[i]) }
                            e.prototype = Object.create(null);
                            var n = {}.hasOwnProperty,
                                i = /\s+/;

                            function o(e, o) { if (o) { var r = typeof o; "string" === r ? function(e, t) { for (var n = t.split(i), o = n.length, r = 0; r < o; ++r) e[n[r]] = !0 }(e, o) : Array.isArray(o) ? t(e, o) : "object" === r ? function(e, t) { for (var i in t) n.call(t, i) && (e[i] = !!t[i]) }(e, o) : "number" === r && function(e, t) { e[t] = !0 }(e, o) } }
                            return function() {
                                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                                var r = new e;
                                t(r, i);
                                var s = [];
                                for (var a in r) r[a] && s.push(a);
                                return s.join(" ")
                            }
                        }();
                        void 0 !== e && e.exports ? e.exports = n : void 0 === (i = function() { return n }.apply(t, [])) || (e.exports = i)
                    }()
                },
                "./node_modules/core-js/es/array/from.js":
                /*!***********************************************!*\
                  !*** ./node_modules/core-js/es/array/from.js ***!
                  \***********************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    n( /*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js"), n( /*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
                    var i = n( /*! ../../internals/path */ "./node_modules/core-js/internals/path.js");
                    e.exports = i.Array.from
                },
                "./node_modules/core-js/internals/a-function.js":
                /*!******************************************************!*\
                  !*** ./node_modules/core-js/internals/a-function.js ***!
                  \******************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(String(e) + " is not a function"); return e } },
                "./node_modules/core-js/internals/an-object.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/an-object.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
                    e.exports = function(e) { if (!i(e)) throw TypeError(String(e) + " is not an object"); return e }
                },
                "./node_modules/core-js/internals/array-from.js":
                /*!******************************************************!*\
                  !*** ./node_modules/core-js/internals/array-from.js ***!
                  \******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = n( /*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js"),
                        o = n( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"),
                        r = n( /*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),
                        s = n( /*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js"),
                        a = n( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"),
                        l = n( /*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js"),
                        c = n( /*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
                    e.exports = function(e) {
                        var t, n, u, d, h = o(e),
                            p = "function" == typeof this ? this : Array,
                            f = arguments.length,
                            m = f > 1 ? arguments[1] : void 0,
                            g = void 0 !== m,
                            y = 0,
                            v = c(h);
                        if (g && (m = i(m, f > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && s(v))
                            for (n = new p(t = a(h.length)); t > y; y++) l(n, y, g ? m(h[y], y) : h[y]);
                        else
                            for (d = v.call(h), n = new p; !(u = d.next()).done; y++) l(n, y, g ? r(d, m, [u.value, y], !0) : u.value);
                        return n.length = y, n
                    }
                },
                "./node_modules/core-js/internals/array-includes.js":
                /*!**********************************************************!*\
                  !*** ./node_modules/core-js/internals/array-includes.js ***!
                  \**********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"),
                        o = n( /*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"),
                        r = n( /*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
                    e.exports = function(e) {
                        return function(t, n, s) {
                            var a, l = i(t),
                                c = o(l.length),
                                u = r(s, c);
                            if (e && n != n) {
                                for (; c > u;)
                                    if ((a = l[u++]) != a) return !0
                            } else
                                for (; c > u; u++)
                                    if ((e || u in l) && l[u] === n) return e || u || 0; return !e && -1
                        }
                    }
                },
                "./node_modules/core-js/internals/bind-context.js":
                /*!********************************************************!*\
                  !*** ./node_modules/core-js/internals/bind-context.js ***!
                  \********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
                    e.exports = function(e, t, n) {
                        if (i(e), void 0 === t) return e;
                        switch (n) {
                            case 0:
                                return function() { return e.call(t) };
                            case 1:
                                return function(n) { return e.call(t, n) };
                            case 2:
                                return function(n, i) { return e.call(t, n, i) };
                            case 3:
                                return function(n, i, o) { return e.call(t, n, i, o) }
                        }
                        return function() { return e.apply(t, arguments) }
                    }
                },
                "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
                /*!****************************************************************************!*\
                  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
                  \****************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
                    e.exports = function(e, t, n, o) { try { return o ? t(i(n)[0], n[1]) : t(n) } catch (t) { var r = e.return; throw void 0 !== r && i(r.call(e)), t } }
                },
                "./node_modules/core-js/internals/check-correctness-of-iteration.js":
                /*!**************************************************************************!*\
                  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
                  \**************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")("iterator"),
                        o = !1;
                    try {
                        var r = 0,
                            s = { next: function() { return { done: !!r++ } }, return: function() { o = !0 } };
                        s[i] = function() { return this }, Array.from(s, (function() { throw 2 }))
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !o) return !1;
                        var n = !1;
                        try {
                            var r = {};
                            r[i] = function() { return { next: function() { return { done: n = !0 } } } }, e(r)
                        } catch (e) {}
                        return n
                    }
                },
                "./node_modules/core-js/internals/classof-raw.js":
                /*!*******************************************************!*\
                  !*** ./node_modules/core-js/internals/classof-raw.js ***!
                  \*******************************************************/
                /*! no static exports found */
                    function(e, t) {
                    var n = {}.toString;
                    e.exports = function(e) { return n.call(e).slice(8, -1) }
                },
                "./node_modules/core-js/internals/classof.js":
                /*!***************************************************!*\
                  !*** ./node_modules/core-js/internals/classof.js ***!
                  \***************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"),
                        o = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),
                        r = "Arguments" == i(function() { return arguments }());
                    e.exports = function(e) { var t, n, s; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s }
                },
                "./node_modules/core-js/internals/copy-constructor-properties.js":
                /*!***********************************************************************!*\
                  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
                  \***********************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        o = n( /*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js"),
                        r = n( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js"),
                        s = n( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
                    e.exports = function(e, t) {
                        for (var n = o(t), a = s.f, l = r.f, c = 0; c < n.length; c++) {
                            var u = n[c];
                            i(e, u) || a(e, u, l(t, u))
                        }
                    }
                },
                "./node_modules/core-js/internals/correct-prototype-getter.js":
                /*!********************************************************************!*\
                  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
                  \********************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
                    e.exports = !i((function() {
                        function e() {}
                        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                    }))
                },
                "./node_modules/core-js/internals/create-iterator-constructor.js":
                /*!***********************************************************************!*\
                  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
                  \***********************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = n( /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,
                        o = n( /*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js"),
                        r = n( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"),
                        s = n( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"),
                        a = n( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"),
                        l = function() { return this };
                    e.exports = function(e, t, n) { var c = t + " Iterator"; return e.prototype = o(i, { next: r(1, n) }), s(e, c, !1, !0), a[c] = l, e }
                },
                "./node_modules/core-js/internals/create-property-descriptor.js":
                /*!**********************************************************************!*\
                  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
                  \**********************************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } },
                "./node_modules/core-js/internals/create-property.js":
                /*!***********************************************************!*\
                  !*** ./node_modules/core-js/internals/create-property.js ***!
                  \***********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = n( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"),
                        o = n( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"),
                        r = n( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
                    e.exports = function(e, t, n) {
                        var s = i(t);
                        s in e ? o.f(e, s, r(0, n)) : e[s] = n
                    }
                },
                "./node_modules/core-js/internals/define-iterator.js":
                /*!***********************************************************!*\
                  !*** ./node_modules/core-js/internals/define-iterator.js ***!
                  \***********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = n( /*! ../internals/export */ "./node_modules/core-js/internals/export.js"),
                        o = n( /*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js"),
                        r = n( /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js"),
                        s = n( /*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js"),
                        a = n( /*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js"),
                        l = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js"),
                        c = n( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"),
                        u = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"),
                        d = n( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"),
                        h = n( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"),
                        p = n( /*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js"),
                        f = p.IteratorPrototype,
                        m = p.BUGGY_SAFARI_ITERATORS,
                        g = u("iterator"),
                        y = "keys",
                        v = "values",
                        b = "entries",
                        w = function() { return this };
                    e.exports = function(e, t, n, u, p, _, x) {
                        o(n, t, u);
                        var k, j, S, T = function(e) {
                                if (e === p && O) return O;
                                if (!m && e in M) return M[e];
                                switch (e) {
                                    case y:
                                    case v:
                                    case b:
                                        return function() { return new n(this, e) }
                                }
                                return function() { return new n(this) }
                            },
                            A = t + " Iterator",
                            E = !1,
                            M = e.prototype,
                            C = M[g] || M["@@iterator"] || p && M[p],
                            O = !m && C || T(p),
                            L = "Array" == t && M.entries || C;
                        if (L && (k = r(L.call(new e)), f !== Object.prototype && k.next && (d || r(k) === f || (s ? s(k, f) : "function" != typeof k[g] && l(k, g, w)), a(k, A, !0, !0), d && (h[A] = w))), p == v && C && C.name !== v && (E = !0, O = function() { return C.call(this) }), d && !x || M[g] === O || l(M, g, O), h[t] = O, p)
                            if (j = { values: T(v), keys: _ ? O : T(y), entries: T(b) }, x)
                                for (S in j)(m || E || !(S in M)) && c(M, S, j[S]);
                            else i({ target: t, proto: !0, forced: m || E }, j);
                        return j
                    }
                },
                "./node_modules/core-js/internals/descriptors.js":
                /*!*******************************************************!*\
                  !*** ./node_modules/core-js/internals/descriptors.js ***!
                  \*******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
                    e.exports = !i((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }))
                },
                "./node_modules/core-js/internals/document-create-element.js":
                /*!*******************************************************************!*\
                  !*** ./node_modules/core-js/internals/document-create-element.js ***!
                  \*******************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"),
                        r = i.document,
                        s = o(r) && o(r.createElement);
                    e.exports = function(e) { return s ? r.createElement(e) : {} }
                },
                "./node_modules/core-js/internals/enum-bug-keys.js":
                /*!*********************************************************!*\
                  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
                  \*********************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] },
                "./node_modules/core-js/internals/export.js":
                /*!**************************************************!*\
                  !*** ./node_modules/core-js/internals/export.js ***!
                  \**************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,
                        r = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js"),
                        s = n( /*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js"),
                        a = n( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"),
                        l = n( /*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js"),
                        c = n( /*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
                    e.exports = function(e, t) {
                        var n, u, d, h, p, f = e.target,
                            m = e.global,
                            g = e.stat;
                        if (n = m ? i : g ? i[f] || a(f, {}) : (i[f] || {}).prototype)
                            for (u in t) {
                                if (h = t[u], d = e.noTargetGet ? (p = o(n, u)) && p.value : n[u], !c(m ? u : f + (g ? "." : "#") + u, e.forced) && void 0 !== d) {
                                    if (typeof h == typeof d) continue;
                                    l(h, d)
                                }(e.sham || d && d.sham) && r(h, "sham", !0), s(n, u, h, e)
                            }
                    }
                },
                "./node_modules/core-js/internals/fails.js":
                /*!*************************************************!*\
                  !*** ./node_modules/core-js/internals/fails.js ***!
                  \*************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } },
                "./node_modules/core-js/internals/function-to-string.js":
                /*!**************************************************************!*\
                  !*** ./node_modules/core-js/internals/function-to-string.js ***!
                  \**************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
                    e.exports = i("native-function-to-string", Function.toString)
                },
                "./node_modules/core-js/internals/get-iterator-method.js":
                /*!***************************************************************!*\
                  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
                  \***************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"),
                        o = n( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"),
                        r = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")("iterator");
                    e.exports = function(e) { if (null != e) return e[r] || e["@@iterator"] || o[i(e)] }
                },
                "./node_modules/core-js/internals/global.js":
                /*!**************************************************!*\
                  !*** ./node_modules/core-js/internals/global.js ***!
                  \**************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    (function(t) {
                        var n = "object",
                            i = function(e) { return e && e.Math == Math && e };
                        e.exports = i(typeof globalThis == n && globalThis) || i(typeof window == n && window) || i(typeof self == n && self) || i(typeof t == n && t) || Function("return this")()
                    }).call(this, n( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"))
                },
                "./node_modules/core-js/internals/has.js":
                /*!***********************************************!*\
                  !*** ./node_modules/core-js/internals/has.js ***!
                  \***********************************************/
                /*! no static exports found */
                    function(e, t) {
                    var n = {}.hasOwnProperty;
                    e.exports = function(e, t) { return n.call(e, t) }
                },
                "./node_modules/core-js/internals/hidden-keys.js":
                /*!*******************************************************!*\
                  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
                  \*******************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = {} },
                "./node_modules/core-js/internals/hide.js":
                /*!************************************************!*\
                  !*** ./node_modules/core-js/internals/hide.js ***!
                  \************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"),
                        o = n( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"),
                        r = n( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
                    e.exports = i ? function(e, t, n) { return o.f(e, t, r(1, n)) } : function(e, t, n) { return e[t] = n, e }
                },
                "./node_modules/core-js/internals/html.js":
                /*!************************************************!*\
                  !*** ./node_modules/core-js/internals/html.js ***!
                  \************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js").document;
                    e.exports = i && i.documentElement
                },
                "./node_modules/core-js/internals/ie8-dom-define.js":
                /*!**********************************************************!*\
                  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
                  \**********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"),
                        o = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"),
                        r = n( /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
                    e.exports = !i && !o((function() { return 7 != Object.defineProperty(r("div"), "a", { get: function() { return 7 } }).a }))
                },
                "./node_modules/core-js/internals/indexed-object.js":
                /*!**********************************************************!*\
                  !*** ./node_modules/core-js/internals/indexed-object.js ***!
                  \**********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"),
                        o = n( /*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"),
                        r = "".split;
                    e.exports = i((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(e) { return "String" == o(e) ? r.call(e, "") : Object(e) } : Object
                },
                "./node_modules/core-js/internals/internal-state.js":
                /*!**********************************************************!*\
                  !*** ./node_modules/core-js/internals/internal-state.js ***!
                  \**********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i, o, r, s = n( /*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js"),
                        a = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        l = n( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"),
                        c = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js"),
                        u = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        d = n( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"),
                        h = n( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"),
                        p = a.WeakMap;
                    if (s) {
                        var f = new p,
                            m = f.get,
                            g = f.has,
                            y = f.set;
                        i = function(e, t) { return y.call(f, e, t), t }, o = function(e) { return m.call(f, e) || {} }, r = function(e) { return g.call(f, e) }
                    } else {
                        var v = d("state");
                        h[v] = !0, i = function(e, t) { return c(e, v, t), t }, o = function(e) { return u(e, v) ? e[v] : {} }, r = function(e) { return u(e, v) }
                    }
                    e.exports = { set: i, get: o, has: r, enforce: function(e) { return r(e) ? o(e) : i(e, {}) }, getterFor: function(e) { return function(t) { var n; if (!l(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } } }
                },
                "./node_modules/core-js/internals/is-array-iterator-method.js":
                /*!********************************************************************!*\
                  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
                  \********************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"),
                        o = n( /*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js"),
                        r = i("iterator"),
                        s = Array.prototype;
                    e.exports = function(e) { return void 0 !== e && (o.Array === e || s[r] === e) }
                },
                "./node_modules/core-js/internals/is-forced.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/is-forced.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"),
                        o = /#|\.prototype\./,
                        r = function(e, t) { var n = a[s(e)]; return n == c || n != l && ("function" == typeof t ? i(t) : !!t) },
                        s = r.normalize = function(e) { return String(e).replace(o, ".").toLowerCase() },
                        a = r.data = {},
                        l = r.NATIVE = "N",
                        c = r.POLYFILL = "P";
                    e.exports = r
                },
                "./node_modules/core-js/internals/is-object.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/is-object.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } },
                "./node_modules/core-js/internals/is-pure.js":
                /*!***************************************************!*\
                  !*** ./node_modules/core-js/internals/is-pure.js ***!
                  \***************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = !1 },
                "./node_modules/core-js/internals/iterators-core.js":
                /*!**********************************************************!*\
                  !*** ./node_modules/core-js/internals/iterators-core.js ***!
                  \**********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i, o, r, s = n( /*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js"),
                        a = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js"),
                        l = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        c = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js"),
                        u = n( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"),
                        d = c("iterator"),
                        h = !1;
                    [].keys && ("next" in (r = [].keys()) ? (o = s(s(r))) !== Object.prototype && (i = o) : h = !0), null == i && (i = {}), u || l(i, d) || a(i, d, (function() { return this })), e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h }
                },
                "./node_modules/core-js/internals/iterators.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/iterators.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = {} },
                "./node_modules/core-js/internals/native-symbol.js":
                /*!*********************************************************!*\
                  !*** ./node_modules/core-js/internals/native-symbol.js ***!
                  \*********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
                    e.exports = !!Object.getOwnPropertySymbols && !i((function() { return !String(Symbol()) }))
                },
                "./node_modules/core-js/internals/native-weak-map.js":
                /*!***********************************************************!*\
                  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
                  \***********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js"),
                        r = i.WeakMap;
                    e.exports = "function" == typeof r && /native code/.test(o.call(r))
                },
                "./node_modules/core-js/internals/object-create.js":
                /*!*********************************************************!*\
                  !*** ./node_modules/core-js/internals/object-create.js ***!
                  \*********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"),
                        o = n( /*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js"),
                        r = n( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"),
                        s = n( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"),
                        a = n( /*! ../internals/html */ "./node_modules/core-js/internals/html.js"),
                        l = n( /*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"),
                        c = n( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),
                        u = function() {},
                        d = function() {
                            var e, t = l("iframe"),
                                n = r.length;
                            for (t.style.display = "none", a.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d.prototype[r[n]];
                            return d()
                        };
                    e.exports = Object.create || function(e, t) { var n; return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[c] = e) : n = d(), void 0 === t ? n : o(n, t) }, s[c] = !0
                },
                "./node_modules/core-js/internals/object-define-properties.js":
                /*!********************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
                  \********************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"),
                        o = n( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js"),
                        r = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"),
                        s = n( /*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
                    e.exports = i ? Object.defineProperties : function(e, t) { r(e); for (var n, i = s(t), a = i.length, l = 0; a > l;) o.f(e, n = i[l++], t[n]); return e }
                },
                "./node_modules/core-js/internals/object-define-property.js":
                /*!******************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-define-property.js ***!
                  \******************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"),
                        o = n( /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"),
                        r = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"),
                        s = n( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"),
                        a = Object.defineProperty;
                    t.f = i ? a : function(e, t, n) {
                        if (r(e), t = s(t, !0), r(n), o) try { return a(e, t, n) } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                        return "value" in n && (e[t] = n.value), e
                    }
                },
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
                /*!******************************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
                  \******************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js"),
                        o = n( /*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js"),
                        r = n( /*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js"),
                        s = n( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"),
                        a = n( /*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js"),
                        l = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        c = n( /*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js"),
                        u = Object.getOwnPropertyDescriptor;
                    t.f = i ? u : function(e, t) {
                        if (e = s(e), t = a(t, !0), c) try { return u(e, t) } catch (e) {}
                        if (l(e, t)) return r(!o.f.call(e, t), e[t])
                    }
                },
                "./node_modules/core-js/internals/object-get-own-property-names.js":
                /*!*************************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
                  \*************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js"),
                        o = n( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js").concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) { return i(e, o) }
                },
                "./node_modules/core-js/internals/object-get-own-property-symbols.js":
                /*!***************************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
                  \***************************************************************************/
                /*! no static exports found */
                    function(e, t) { t.f = Object.getOwnPropertySymbols },
                "./node_modules/core-js/internals/object-get-prototype-of.js":
                /*!*******************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
                  \*******************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        o = n( /*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js"),
                        r = n( /*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js"),
                        s = n( /*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js"),
                        a = r("IE_PROTO"),
                        l = Object.prototype;
                    e.exports = s ? Object.getPrototypeOf : function(e) { return e = o(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null }
                },
                "./node_modules/core-js/internals/object-keys-internal.js":
                /*!****************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
                  \****************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        o = n( /*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js"),
                        r = n( /*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js"),
                        s = n( /*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js"),
                        a = r(!1);
                    e.exports = function(e, t) {
                        var n, r = o(e),
                            l = 0,
                            c = [];
                        for (n in r) !i(s, n) && i(r, n) && c.push(n);
                        for (; t.length > l;) i(r, n = t[l++]) && (~a(c, n) || c.push(n));
                        return c
                    }
                },
                "./node_modules/core-js/internals/object-keys.js":
                /*!*******************************************************!*\
                  !*** ./node_modules/core-js/internals/object-keys.js ***!
                  \*******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js"),
                        o = n( /*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
                    e.exports = Object.keys || function(e) { return i(e, o) }
                },
                "./node_modules/core-js/internals/object-property-is-enumerable.js":
                /*!*************************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
                  \*************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = {}.propertyIsEnumerable,
                        o = Object.getOwnPropertyDescriptor,
                        r = o && !i.call({ 1: 2 }, 1);
                    t.f = r ? function(e) { var t = o(this, e); return !!t && t.enumerable } : i
                },
                "./node_modules/core-js/internals/object-set-prototype-of.js":
                /*!*******************************************************************!*\
                  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
                  \*******************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
                    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                        var e, t = !1,
                            n = {};
                        try {
                            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                        } catch (e) {}
                        return function(n, o) { return i(n, o), t ? e.call(n, o) : n.__proto__ = o, n }
                    }() : void 0)
                },
                "./node_modules/core-js/internals/own-keys.js":
                /*!****************************************************!*\
                  !*** ./node_modules/core-js/internals/own-keys.js ***!
                  \****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js"),
                        r = n( /*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js"),
                        s = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"),
                        a = i.Reflect;
                    e.exports = a && a.ownKeys || function(e) {
                        var t = o.f(s(e)),
                            n = r.f;
                        return n ? t.concat(n(e)) : t
                    }
                },
                "./node_modules/core-js/internals/path.js":
                /*!************************************************!*\
                  !*** ./node_modules/core-js/internals/path.js ***!
                  \************************************************/
                /*! no static exports found */
                    function(e, t, n) { e.exports = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js") },
                "./node_modules/core-js/internals/redefine.js":
                /*!****************************************************!*\
                  !*** ./node_modules/core-js/internals/redefine.js ***!
                  \****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"),
                        r = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js"),
                        s = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        a = n( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"),
                        l = n( /*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js"),
                        c = n( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"),
                        u = c.get,
                        d = c.enforce,
                        h = String(l).split("toString");
                    o("inspectSource", (function(e) { return l.call(e) })), (e.exports = function(e, t, n, o) {
                        var l = !!o && !!o.unsafe,
                            c = !!o && !!o.enumerable,
                            u = !!o && !!o.noTargetGet;
                        "function" == typeof n && ("string" != typeof t || s(n, "name") || r(n, "name", t), d(n).source = h.join("string" == typeof t ? t : "")), e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = n : r(e, t, n)) : c ? e[t] = n : a(t, n)
                    })(Function.prototype, "toString", (function() { return "function" == typeof this && u(this).source || l.call(this) }))
                },
                "./node_modules/core-js/internals/require-object-coercible.js":
                /*!********************************************************************!*\
                  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
                  \********************************************************************/
                /*! no static exports found */
                    function(e, t) { e.exports = function(e) { if (null == e) throw TypeError("Can't call method on " + e); return e } },
                "./node_modules/core-js/internals/set-global.js":
                /*!******************************************************!*\
                  !*** ./node_modules/core-js/internals/set-global.js ***!
                  \******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
                    e.exports = function(e, t) { try { o(i, e, t) } catch (n) { i[e] = t } return t }
                },
                "./node_modules/core-js/internals/set-to-string-tag.js":
                /*!*************************************************************!*\
                  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
                  \*************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f,
                        o = n( /*! ../internals/has */ "./node_modules/core-js/internals/has.js"),
                        r = n( /*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");
                    e.exports = function(e, t, n) { e && !o(e = n ? e : e.prototype, r) && i(e, r, { configurable: !0, value: t }) }
                },
                "./node_modules/core-js/internals/shared-key.js":
                /*!******************************************************!*\
                  !*** ./node_modules/core-js/internals/shared-key.js ***!
                  \******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"),
                        o = n( /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"),
                        r = i("keys");
                    e.exports = function(e) { return r[e] || (r[e] = o(e)) }
                },
                "./node_modules/core-js/internals/shared.js":
                /*!**************************************************!*\
                  !*** ./node_modules/core-js/internals/shared.js ***!
                  \**************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js"),
                        r = n( /*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js"),
                        s = "__core-js_shared__",
                        a = i[s] || o(s, {});
                    (e.exports = function(e, t) { return a[e] || (a[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.1.3", mode: r ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" })
                },
                "./node_modules/core-js/internals/string-at.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/string-at.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"),
                        o = n( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
                    e.exports = function(e, t, n) {
                        var r, s, a = String(o(e)),
                            l = i(t),
                            c = a.length;
                        return l < 0 || l >= c ? n ? "" : void 0 : (r = a.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? n ? a.charAt(l) : r : n ? a.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
                    }
                },
                "./node_modules/core-js/internals/to-absolute-index.js":
                /*!*************************************************************!*\
                  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
                  \*************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"),
                        o = Math.max,
                        r = Math.min;
                    e.exports = function(e, t) { var n = i(e); return n < 0 ? o(n + t, 0) : r(n, t) }
                },
                "./node_modules/core-js/internals/to-indexed-object.js":
                /*!*************************************************************!*\
                  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
                  \*************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js"),
                        o = n( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
                    e.exports = function(e) { return i(o(e)) }
                },
                "./node_modules/core-js/internals/to-integer.js":
                /*!******************************************************!*\
                  !*** ./node_modules/core-js/internals/to-integer.js ***!
                  \******************************************************/
                /*! no static exports found */
                    function(e, t) {
                    var n = Math.ceil,
                        i = Math.floor;
                    e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e) }
                },
                "./node_modules/core-js/internals/to-length.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/to-length.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js"),
                        o = Math.min;
                    e.exports = function(e) { return e > 0 ? o(i(e), 9007199254740991) : 0 }
                },
                "./node_modules/core-js/internals/to-object.js":
                /*!*****************************************************!*\
                  !*** ./node_modules/core-js/internals/to-object.js ***!
                  \*****************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
                    e.exports = function(e) { return Object(i(e)) }
                },
                "./node_modules/core-js/internals/to-primitive.js":
                /*!********************************************************!*\
                  !*** ./node_modules/core-js/internals/to-primitive.js ***!
                  \********************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
                    e.exports = function(e, t) { if (!i(e)) return e; var n, o; if (t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o; if ("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o; if (!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o; throw TypeError("Can't convert object to primitive value") }
                },
                "./node_modules/core-js/internals/uid.js":
                /*!***********************************************!*\
                  !*** ./node_modules/core-js/internals/uid.js ***!
                  \***********************************************/
                /*! no static exports found */
                    function(e, t) {
                    var n = 0,
                        i = Math.random();
                    e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36)) }
                },
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
                /*!*******************************************************************************!*\
                  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
                  \*******************************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"),
                        o = n( /*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
                    e.exports = function(e, t) { if (o(e), !i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype") }
                },
                "./node_modules/core-js/internals/well-known-symbol.js":
                /*!*************************************************************!*\
                  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
                  \*************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/global */ "./node_modules/core-js/internals/global.js"),
                        o = n( /*! ../internals/shared */ "./node_modules/core-js/internals/shared.js"),
                        r = n( /*! ../internals/uid */ "./node_modules/core-js/internals/uid.js"),
                        s = n( /*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js"),
                        a = i.Symbol,
                        l = o("wks");
                    e.exports = function(e) { return l[e] || (l[e] = s && a[e] || (s ? a : r)("Symbol." + e)) }
                },
                "./node_modules/core-js/modules/es.array.from.js":
                /*!*******************************************************!*\
                  !*** ./node_modules/core-js/modules/es.array.from.js ***!
                  \*******************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    var i = n( /*! ../internals/export */ "./node_modules/core-js/internals/export.js"),
                        o = n( /*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
                    i({ target: "Array", stat: !0, forced: !n( /*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(e) { Array.from(e) })) }, { from: o })
                },
                "./node_modules/core-js/modules/es.string.iterator.js":
                /*!************************************************************!*\
                  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
                  \************************************************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = n( /*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js"),
                        o = n( /*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js"),
                        r = n( /*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js"),
                        s = "String Iterator",
                        a = o.set,
                        l = o.getterFor(s);
                    r(String, "String", (function(e) { a(this, { type: s, string: String(e), index: 0 }) }), (function() {
                        var e, t = l(this),
                            n = t.string,
                            o = t.index;
                        return o >= n.length ? { value: void 0, done: !0 } : (e = i(n, o, !0), t.index += e.length, { value: e, done: !1 })
                    }))
                },
                "./node_modules/webpack/buildin/global.js":
                /*!***********************************!*\
                  !*** (webpack)/buildin/global.js ***!
                  \***********************************/
                /*! no static exports found */
                    function(e, t) {
                    var n;
                    n = function() { return this }();
                    try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
                    e.exports = n
                },
                "./src/default-attrs.json":
                /*!********************************!*\
                  !*** ./src/default-attrs.json ***!
                  \********************************/
                /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
                    function(e) { e.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" } },
                "./src/icon.js":
                /*!*********************!*\
                  !*** ./src/icon.js ***!
                  \*********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
                        o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                        }(),
                        r = a(n( /*! classnames/dedupe */ "./node_modules/classnames/dedupe.js")),
                        s = a(n( /*! ./default-attrs.json */ "./src/default-attrs.json"));

                    function a(e) { return e && e.__esModule ? e : { default: e } }

                    function l(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
                    var c = function() {
                        function e(t, n) {
                            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            l(this, e), this.name = t, this.contents = n, this.tags = o, this.attrs = i({}, s.default, { class: "feather feather-" + t })
                        }
                        return o(e, [{
                            key: "toSvg",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = i({}, this.attrs, e, { class: (0, r.default)(this.attrs.class, e.class) });
                                return "<svg " + u(t) + ">" + this.contents + "</svg>"
                            }
                        }, { key: "toString", value: function() { return this.contents } }]), e
                    }();

                    function u(e) { return Object.keys(e).map((function(t) { return t + '="' + e[t] + '"' })).join(" ") }
                    t.default = c
                },
                "./src/icons.js":
                /*!**********************!*\
                  !*** ./src/icons.js ***!
                  \**********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var i = s(n( /*! ./icon */ "./src/icon.js")),
                        o = s(n( /*! ../dist/icons.json */ "./dist/icons.json")),
                        r = s(n( /*! ./tags.json */ "./src/tags.json"));

                    function s(e) { return e && e.__esModule ? e : { default: e } }
                    t.default = Object.keys(o.default).map((function(e) { return new i.default(e, o.default[e], r.default[e]) })).reduce((function(e, t) { return e[t.name] = t, e }), {})
                },
                "./src/index.js":
                /*!**********************!*\
                  !*** ./src/index.js ***!
                  \**********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    var i = s(n( /*! ./icons */ "./src/icons.js")),
                        o = s(n( /*! ./to-svg */ "./src/to-svg.js")),
                        r = s(n( /*! ./replace */ "./src/replace.js"));

                    function s(e) { return e && e.__esModule ? e : { default: e } }
                    e.exports = { icons: i.default, toSvg: o.default, replace: r.default }
                },
                "./src/replace.js":
                /*!************************!*\
                  !*** ./src/replace.js ***!
                  \************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
                        o = s(n( /*! classnames/dedupe */ "./node_modules/classnames/dedupe.js")),
                        r = s(n( /*! ./icons */ "./src/icons.js"));

                    function s(e) { return e && e.__esModule ? e : { default: e } }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = l(e),
                            s = n["data-feather"];
                        delete n["data-feather"];
                        var a = r.default[s].toSvg(i({}, t, n, { class: (0, o.default)(t.class, n.class) })),
                            c = (new DOMParser).parseFromString(a, "image/svg+xml"),
                            u = c.querySelector("svg");
                        e.parentNode.replaceChild(u, e)
                    }

                    function l(e) { return Array.from(e.attributes).reduce((function(e, t) { return e[t.name] = t.value, e }), {}) }
                    t.default = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                        var t = document.querySelectorAll("[data-feather]");
                        Array.from(t).forEach((function(t) { return a(t, e) }))
                    }
                },
                "./src/tags.json":
                /*!***********************!*\
                  !*** ./src/tags.json ***!
                  \***********************/
                /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, at-sign, award, aperture, bell, bell-off, bluetooth, book-open, book, bookmark, briefcase, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, coffee, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, film, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, global, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, life-bouy, linkedin, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, play, play-circle, plus, plus-circle, plus-square, pocket, power, radio, rewind, rss, save, search, send, settings, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slash, sliders, smile, speaker, star, sun, sunrise, sunset, tag, target, terminal, thumbs-down, thumbs-up, toggle-left, toggle-right, trash, trash-2, triangle, truck, twitter, umbrella, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, default */
                    function(e) { e.exports = { activity: ["pulse", "health", "action", "motion"], airplay: ["stream", "cast", "mirroring"], "alert-circle": ["warning"], "alert-octagon": ["warning"], "alert-triangle": ["warning"], "at-sign": ["mention"], award: ["achievement", "badge"], aperture: ["camera", "photo"], bell: ["alarm", "notification"], "bell-off": ["alarm", "notification", "silent"], bluetooth: ["wireless"], "book-open": ["read"], book: ["read", "dictionary", "booklet", "magazine"], bookmark: ["read", "clip", "marker", "tag"], briefcase: ["work", "bag", "baggage", "folder"], clipboard: ["copy"], clock: ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], cloud: ["weather"], codepen: ["logo"], codesandbox: ["logo"], coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], command: ["keyboard", "cmd"], compass: ["navigation", "safari", "travel"], copy: ["clone", "duplicate"], "corner-down-left": ["arrow"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "credit-card": ["purchase", "payment", "cc"], crop: ["photo", "image"], crosshair: ["aim", "target"], database: ["storage"], delete: ["remove"], disc: ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], droplet: ["water"], edit: ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], eye: ["view", "watch"], "eye-off": ["view", "watch"], "external-link": ["outbound"], facebook: ["logo"], "fast-forward": ["music"], figma: ["logo", "design", "tool"], film: ["movie", "video"], "folder-minus": ["directory"], "folder-plus": ["directory"], folder: ["directory"], framer: ["logo", "design", "tool"], frown: ["emoji", "face", "bad", "sad", "emotion"], gift: ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], github: ["logo", "version control"], gitlab: ["logo", "version control"], global: ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server"], hash: ["hashtag", "number", "pound"], headphones: ["music", "audio"], heart: ["like", "love"], "help-circle": ["question mark"], hexagon: ["shape", "node.js", "logo"], home: ["house"], image: ["picture"], inbox: ["email"], instagram: ["logo", "camera"], key: ["password", "login", "authentication"], "life-bouy": ["help", "life ring", "support"], linkedin: ["logo"], lock: ["security", "password"], "log-in": ["sign in", "arrow"], "log-out": ["sign out", "arrow"], mail: ["email"], "map-pin": ["location", "navigation", "travel", "marker"], map: ["location", "navigation", "travel"], maximize: ["fullscreen"], "maximize-2": ["fullscreen", "arrows"], meh: ["emoji", "face", "neutral", "emotion"], menu: ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record"], mic: ["record"], minimize: ["exit fullscreen"], "minimize-2": ["exit fullscreen", "arrows"], monitor: ["tv"], moon: ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], move: ["arrows"], navigation: ["location", "travel"], "navigation-2": ["location", "travel"], octagon: ["stop"], package: ["box"], paperclip: ["attachment"], pause: ["music", "stop"], "pause-circle": ["music", "stop"], "pen-tool": ["vector", "drawing"], play: ["music", "start"], "play-circle": ["music", "start"], plus: ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], pocket: ["logo", "save"], power: ["on", "off"], radio: ["signal"], rewind: ["music"], rss: ["feed", "subscribe"], save: ["floppy disk"], search: ["find", "magnifier", "magnifying glass"], send: ["message", "mail", "paper airplane"], settings: ["cog", "edit", "gear", "preferences"], shield: ["security"], "shield-off": ["security"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], shuffle: ["music"], "skip-back": ["music"], "skip-forward": ["music"], slash: ["ban", "no"], sliders: ["settings", "controls"], smile: ["emoji", "face", "happy", "good", "emotion"], speaker: ["music"], star: ["bookmark", "favorite", "like"], sun: ["brightness", "weather", "light"], sunrise: ["weather"], sunset: ["weather"], tag: ["label"], target: ["bullseye"], terminal: ["code", "command line"], "thumbs-down": ["dislike", "bad"], "thumbs-up": ["like", "good"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], trash: ["garbage", "delete", "remove"], "trash-2": ["garbage", "delete", "remove"], triangle: ["delta"], truck: ["delivery", "van", "shipping"], twitter: ["logo"], umbrella: ["rain", "weather"], "video-off": ["camera", "movie", "film"], video: ["camera", "movie", "film"], voicemail: ["phone"], volume: ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], watch: ["clock", "time"], wind: ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times"], "x-octagon": ["delete", "stop", "alert", "warning", "times"], "x-square": ["cancel", "close", "delete", "remove", "times"], x: ["cancel", "close", "delete", "remove", "times"], youtube: ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], zap: ["flash", "camera", "lightning"] } },
                "./src/to-svg.js":
                /*!***********************!*\
                  !*** ./src/to-svg.js ***!
                  \***********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var i, o = n( /*! ./icons */ "./src/icons.js"),
                        r = (i = o) && i.__esModule ? i : { default: i };
                    t.default = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing."); if (!r.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com"); return r.default[e].toSvg(t) }
                },
                0:
                /*!**************************************************!*\
                  !*** multi core-js/es/array/from ./src/index.js ***!
                  \**************************************************/
                /*! no static exports found */
                    function(e, t, n) { n( /*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js"), e.exports = n( /*! /home/travis/build/feathericons/feather/src/index.js */ "./src/index.js") }
            })
        }, "object" == typeof n && "object" == typeof t ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? n.feather = o() : i.feather = o()
    }, {}],
    7: [function(e, t, n) {
        var i, o;
        i = window, o = function() {
            return function(e) {
                var t = {};

                function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
                return n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var i = Object.create(null);
                    if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
                    return i
                }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
            }([function(e, t, n) {
                "use strict";
                n.r(t), n(1);
                var i = [],
                    o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    s = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" };

                function a() {}
                var l = ["click", "focusin", "keydown", "input"];

                function c(e) { l.forEach((function(t) { e.addEventListener(t, e === document ? E : M) })) }

                function u(e) { return Array.isArray(e) ? e.map(u) : "[object Object]" === T(e) ? Object.keys(e).reduce((function(t, n) { return t[n] = u(e[n]), t }), {}) : e }

                function d(e, t) {
                    var n = e.calendar.querySelector(".qs-overlay"),
                        i = n && !n.classList.contains("qs-hidden");
                    t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [h(t, e, i), p(t, e, i), f(e, i)].join(""), i && window.requestAnimationFrame((function() { j(!0, e) }))
                }

                function h(e, t, n) { return ['<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("") }

                function p(e, t, n) {
                    var i = t.currentMonth,
                        o = t.currentYear,
                        r = t.dateSelected,
                        s = t.maxDate,
                        a = t.minDate,
                        l = t.showAllDates,
                        c = t.days,
                        u = t.disabledDates,
                        d = t.startDay,
                        h = (t.weekendIndices, t.events),
                        p = t.getRange ? t.getRange() : {},
                        f = +p.start,
                        m = +p.end,
                        g = _(new Date(e).setDate(1)),
                        y = g.getDay() - d,
                        v = y < 0 ? 7 : 0;
                    g.setMonth(g.getMonth() + 1), g.setDate(0);
                    var b = g.getDate(),
                        w = [],
                        x = v + 7 * ((y + b) / 7 | 0);
                    x += (y + b) % 7 ? 7 : 0;
                    for (var k = 1; k <= x; k++) {
                        var j = (k - 1) % 7,
                            S = c[j],
                            T = k - (y >= 0 ? y : 7 + y),
                            A = new Date(o, i, T),
                            E = h[+A],
                            M = T < 1 || T > b,
                            C = M ? T < 1 ? -1 : 1 : 0,
                            O = M && !l,
                            L = O ? "" : A.getDate(),
                            P = 0 === j || 6 === j,
                            I = f !== m,
                            D = "qs-square " + S;
                        E && !O && (D += " qs-event"), M && (D += " qs-outside-current-month"), !l && M || (D += " qs-num"), +A == +r && (D += " qs-active"), (u[+A] || t.disabler(A) || P && t.noWeekends || a && +A < +a || s && +A > +s) && !O && (D += " qs-disabled"), +_(new Date) == +A && (D += " qs-current"), +A === f && m && I && (D += " qs-range-start"), +A > f && +A < m && (D += " qs-range-middle"), +A === m && f && I && (D += " qs-range-end"), O && (D += " qs-empty", L = ""), w.push('<div class="' + D + '" data-direction="' + C + '">' + L + "</div>")
                    }
                    var N = c.map((function(e) { return '<div class="qs-square qs-day">' + e + "</div>" })).concat(w);
                    return N.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), N.push("</div>"), N.join("")
                }

                function f(e, t) {
                    var n = e.overlayPlaceholder,
                        i = e.overlayButton;
                    return ['<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) { return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>" })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + i + "</div>", "</div>"].join("")
                }

                function m(e, t, n) {
                    var i = t.el,
                        o = t.calendar.querySelector(".qs-active"),
                        r = e.textContent,
                        s = t.sibling;
                    (i.disabled || i.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, r), o && o.classList.remove("qs-active"), n || e.classList.add("qs-active"), y(i, t, n), n || x(t), s && (g({ instance: t, deselect: n }), t.first && !s.dateSelected && (s.currentYear = t.currentYear, s.currentMonth = t.currentMonth, s.currentMonthName = t.currentMonthName), d(t), d(s)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)))
                }

                function g(e) {
                    var t = e.instance.first ? e.instance : e.instance.sibling,
                        n = t.sibling;
                    t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected
                }

                function y(e, t, n) { if (!t.nonInput) return n ? e.value = "" : t.formatter !== a ? t.formatter(e, t.dateSelected, t) : void(e.value = t.dateSelected.toDateString()) }

                function v(e, t, n, i) { n || i ? (n && (t.currentYear = +n), i && (t.currentMonth = +i)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], d(t), t.onMonthChange(t) }

                function b(e) {
                    if (!e.noPosition) {
                        var t = e.position.top,
                            n = e.position.right;
                        if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                        var i = e.positionedEl.getBoundingClientRect(),
                            o = e.el.getBoundingClientRect(),
                            r = e.calendarContainer.getBoundingClientRect(),
                            s = o.top - i.top + (t ? -1 * r.height : o.height) + "px",
                            a = o.left - i.left + (n ? o.width - r.width : 0) + "px";
                        e.calendarContainer.style.setProperty("top", s), e.calendarContainer.style.setProperty("left", a)
                    }
                }

                function w(e) { return "[object Date]" === T(e) && "Invalid Date" !== e.toString() }

                function _(e) { if (w(e) || "number" == typeof e && !isNaN(e)) { var t = new Date(+e); return new Date(t.getFullYear(), t.getMonth(), t.getDate()) } }

                function x(e) { e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && (j(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e)) }

                function k(e) { e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), b(e), e.onShow(e)) }

                function j(e, t) {
                    var n = t.calendar,
                        i = n.querySelector(".qs-overlay"),
                        o = i.querySelector(".qs-overlay-year"),
                        r = n.querySelector(".qs-controls"),
                        s = n.querySelector(".qs-squares");
                    e ? (i.classList.add("qs-hidden"), r.classList.remove("qs-blur"), s.classList.remove("qs-blur"), o.value = "") : (i.classList.remove("qs-hidden"), r.classList.add("qs-blur"), s.classList.add("qs-blur"), o.focus())
                }

                function S(e, t, n, i) {
                    var o = isNaN(+(new Date).setFullYear(t.value || void 0)),
                        r = o ? null : t.value;
                    13 === e.which || 13 === e.keyCode || "click" === e.type ? i ? v(null, n, r, i) : o || t.classList.contains("qs-disabled") || v(null, n, r) : n.calendar.contains(t) && n.calendar.querySelector(".qs-submit").classList[o ? "add" : "remove"]("qs-disabled")
                }

                function T(e) { return {}.toString.call(e) }

                function A(e) { i.forEach((function(t) { t !== e && x(t) })) }

                function E(e) {
                    if (!e.__qs_shadow_dom) {
                        var t = e.which || e.keyCode,
                            n = e.type,
                            o = e.target,
                            s = o.classList,
                            a = i.filter((function(e) { return e.calendar.contains(o) || e.el === o }))[0],
                            l = a && a.calendar.contains(o);
                        if (!(a && a.isMobile && a.disableMobile))
                            if ("click" === n) {
                                if (!a) return i.forEach(x);
                                if (a.disabled) return;
                                var c = a.calendar,
                                    u = a.calendarContainer,
                                    h = a.disableYearOverlay,
                                    p = a.nonInput,
                                    f = c.querySelector(".qs-overlay-year"),
                                    g = !!c.querySelector(".qs-hidden"),
                                    y = c.querySelector(".qs-month-year").contains(o),
                                    b = o.dataset.monthNum;
                                if (a.noPosition && !l)(u.classList.contains("qs-hidden") ? k : x)(a);
                                else if (s.contains("qs-arrow")) v(s, a);
                                else if (y || s.contains("qs-close")) h || j(!g, a);
                                else if (b) S(e, f, a, b);
                                else {
                                    if (s.contains("qs-disabled")) return;
                                    if (s.contains("qs-num")) {
                                        var w = o.textContent,
                                            _ = +o.dataset.direction,
                                            T = new Date(a.currentYear, a.currentMonth + _, w);
                                        if (_) {
                                            a.currentYear = T.getFullYear(), a.currentMonth = T.getMonth(), a.currentMonthName = r[a.currentMonth], d(a);
                                            for (var E, M = a.calendar.querySelectorAll('[data-direction="0"]'), C = 0; !E;) {
                                                var O = M[C];
                                                O.textContent === w && (E = O), C++
                                            }
                                            o = E
                                        }
                                        return void(+T == +a.dateSelected ? m(o, a, !0) : o.classList.contains("qs-disabled") || m(o, a))
                                    }
                                    s.contains("qs-submit") ? S(e, f, a) : p && o === a.el && (k(a), A(a))
                                }
                            } else if ("focusin" === n && a) k(a), A(a);
                        else if ("keydown" === n && 9 === t && a) x(a);
                        else if ("keydown" === n && a && !a.disabled) {
                            var L = !a.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                            13 === t && L && l ? S(e, o, a) : 27 === t && L && l && j(!0, a)
                        } else if ("input" === n) {
                            if (!a || !a.calendar.contains(o)) return;
                            var P = a.calendar.querySelector(".qs-submit"),
                                I = o.value.split("").reduce((function(e, t) { return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "" }), "").slice(0, 4);
                            o.value = I, P.classList[4 === I.length ? "remove" : "add"]("qs-disabled")
                        }
                    }
                }

                function M(e) { E(e), e.__qs_shadow_dom = !0 }

                function C(e, t) { l.forEach((function(n) { e.removeEventListener(n, t) })) }

                function O() { k(this) }

                function L() { x(this) }

                function P(e, t) {
                    var n = _(e),
                        i = this.currentYear,
                        o = this.currentMonth,
                        r = this.sibling;
                    if (null == e) return this.dateSelected = void 0, y(this.el, this, !0), r && (g({ instance: this, deselect: !0 }), d(r)), d(this), this;
                    if (!w(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                    if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                    this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), y(this.el, this), r && (g({ instance: this }), d(r));
                    var s = i === n.getFullYear() && o === n.getMonth();
                    return s || t ? d(this, n) : s || d(this, new Date(i, o, 1)), this
                }

                function I(e) { return N(this, e, !0) }

                function D(e) { return N(this, e) }

                function N(e, t, n) {
                    var i = e.dateSelected,
                        o = e.first,
                        r = e.sibling,
                        s = e.minDate,
                        a = e.maxDate,
                        l = _(t),
                        c = n ? "Min" : "Max";

                    function u() { return "original" + c + "Date" }

                    function h() { return c.toLowerCase() + "Date" }

                    function p() { return "set" + c }

                    function f() { throw new Error("Out-of-range date passed to " + p()) }
                    if (null == t) e[u()] = void 0, r ? (r[u()] = void 0, n ? (o && !i || !o && !r.dateSelected) && (e.minDate = void 0, r.minDate = void 0) : (o && !r.dateSelected || !o && !i) && (e.maxDate = void 0, r.maxDate = void 0)) : e[h()] = void 0;
                    else {
                        if (!w(t)) throw new Error("Invalid date passed to " + p());
                        r ? ((o && n && l > (i || a) || o && !n && l < (r.dateSelected || s) || !o && n && l > (r.dateSelected || a) || !o && !n && l < (i || s)) && f(), e[u()] = l, r[u()] = l, (n && (o && !i || !o && !r.dateSelected) || !n && (o && !r.dateSelected || !o && !i)) && (e[h()] = l, r[h()] = l)) : ((n && l > (i || a) || !n && l < (i || s)) && f(), e[h()] = l)
                    }
                    return r && d(r), d(e), e
                }

                function F() {
                    var e = this.first ? this : this.sibling,
                        t = e.sibling;
                    return { start: e.dateSelected, end: t.dateSelected }
                }

                function H() {
                    var e = this.shadowDom,
                        t = this.positionedEl,
                        n = this.calendarContainer,
                        o = this.sibling,
                        r = this;
                    this.inlinePosition && (i.some((function(e) { return e !== r && e.positionedEl === t })) || t.style.setProperty("position", null)), n.remove(), i = i.filter((function(e) { return e !== r })), o && delete o.sibling, i.length || C(document, E);
                    var s = i.some((function(t) { return t.shadowDom === e }));
                    for (var a in e && !s && C(e, M), this) delete this[a];
                    i.length || l.forEach((function(e) { document.removeEventListener(e, E) }))
                }

                function q(e, t) {
                    var n = new Date(e);
                    if (!w(n)) throw new Error("`navigate` needs a JavaScript Date object.");
                    this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), d(this), t && this.onMonthChange(this)
                }
                t.default = function(e, t) {
                    var n = function(e, t) {
                        var n, l, c = function(e) {
                                var t = u(e);
                                t.events && (t.events = t.events.reduce((function(e, t) { if (!w(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.'); return e[+_(t)] = !0, e }), {})), ["startDate", "dateSelected", "minDate", "maxDate"].forEach((function(e) {
                                    var n = t[e];
                                    if (n && !w(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                    t[e] = _(n)
                                }));
                                var n = t.position,
                                    r = t.maxDate,
                                    l = t.minDate,
                                    c = t.dateSelected,
                                    d = t.overlayPlaceholder,
                                    h = t.overlayButton,
                                    p = t.startDay,
                                    f = t.id;
                                if (t.startDate = _(t.startDate || c || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) { var n = +_(t); if (!w(t)) throw new Error('You supplied an invalid date to "options.disabledDates".'); if (n === +_(c)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".'); return e[n] = 1, e }), {}), t.hasOwnProperty("id") && null == f) throw new Error("Id cannot be `null` or `undefined`");
                                if (null != f) {
                                    var m = i.filter((function(e) { return e.id === f }));
                                    if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                    m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0
                                }
                                var g = ["tr", "tl", "br", "bl", "c"].some((function(e) { return n === e }));
                                if (n && !g) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');

                                function y(e) { throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".') }
                                if (t.position = function(e) {
                                        var t = e[0],
                                            n = e[1],
                                            i = {};
                                        return i[s[t]] = 1, n && (i[s[n]] = 1), i
                                    }(n || "bl"), r < l) throw new Error('"maxDate" in options is less than "minDate".');
                                if (c && (l > c && y("min"), r < c && y()), ["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach((function(e) { "function" != typeof t[e] && (t[e] = a) })), ["customDays", "customMonths", "customOverlayMonths"].forEach((function(e, n) {
                                        var i = t[e],
                                            o = n ? 12 : 7;
                                        if (i) {
                                            if (!Array.isArray(i) || i.length !== o || i.some((function(e) { return "string" != typeof e }))) throw new Error('"' + e + '" must be an array with ${num} strings.');
                                            t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = i
                                        }
                                    })), p && p > 0 && p < 7) {
                                    var v = (t.customDays || o).slice(),
                                        b = v.splice(0, p);
                                    t.customDays = v.concat(b), t.startDay = +p, t.weekendIndices = [v.length - 1, v.length]
                                } else t.startDay = 0, t.weekendIndices = [6, 0];
                                return "string" != typeof d && delete t.overlayPlaceholder, "string" != typeof h && delete t.overlayButton, t
                            }(t || { startDate: _(new Date), position: "bl" }),
                            d = e;
                        if ("string" == typeof d) d = "#" === d[0] ? document.getElementById(d.slice(1)) : document.querySelector(d);
                        else {
                            if ("[object ShadowRoot]" === T(d)) throw new Error("Using a shadow DOM as your selector is not supported.");
                            for (var h, p = ("getRootNode" in window.Node.prototype), f = d.parentNode; !h;) {
                                var m = T(f);
                                if ("[object HTMLDocument]" === m) h = !0;
                                else if ("[object ShadowRoot]" === m) {
                                    if (h = !0, !p) throw new Error("The shadow DOM is not supported in your browser.");
                                    n = f, l = f.host
                                } else f = f.parentNode
                            }
                        }
                        if (!d) throw new Error("No selector / element found.");
                        if (i.some((function(e) { return e.el === d }))) throw new Error("A datepicker already exists on that element.");
                        var g = d === document.body,
                            v = n ? d.parentElement || n : g ? document.body : d.parentElement,
                            b = n ? d.parentElement || l : v,
                            x = document.createElement("div"),
                            j = document.createElement("div");
                        x.className = "qs-datepicker-container qs-hidden", j.className = "qs-datepicker";
                        var S = { shadowDom: n, customElement: l, positionedEl: b, el: d, parent: v, nonInput: "INPUT" !== d.nodeName, noPosition: g, position: !g && c.position, startDate: c.startDate, dateSelected: c.dateSelected, disabledDates: c.disabledDates, minDate: c.minDate, maxDate: c.maxDate, noWeekends: !!c.noWeekends, weekendIndices: c.weekendIndices, calendarContainer: x, calendar: j, currentMonth: (c.startDate || c.dateSelected).getMonth(), currentMonthName: (c.months || r)[(c.startDate || c.dateSelected).getMonth()], currentYear: (c.startDate || c.dateSelected).getFullYear(), events: c.events || {}, setDate: P, remove: H, setMin: I, setMax: D, show: O, hide: L, navigate: q, onSelect: c.onSelect, onShow: c.onShow, onHide: c.onHide, onMonthChange: c.onMonthChange, formatter: c.formatter, disabler: c.disabler, months: c.months || r, days: c.customDays || o, startDay: c.startDay, overlayMonths: c.overlayMonths || (c.months || r).map((function(e) { return e.slice(0, 3) })), overlayPlaceholder: c.overlayPlaceholder || "4-digit year", overlayButton: c.overlayButton || "Submit", disableYearOverlay: !!c.disableYearOverlay, disableMobile: !!c.disableMobile, isMobile: "ontouchstart" in window, alwaysShow: !!c.alwaysShow, id: c.id, showAllDates: !!c.showAllDates, respectDisabledReadOnly: !!c.respectDisabledReadOnly, first: c.first, second: c.second };
                        if (c.sibling) {
                            var A = c.sibling,
                                E = S,
                                M = A.minDate || E.minDate,
                                C = A.maxDate || E.maxDate;
                            E.sibling = A, A.sibling = E, A.minDate = M, A.maxDate = C, E.minDate = M, E.maxDate = C, A.originalMinDate = M, A.originalMaxDate = C, E.originalMinDate = M, E.originalMaxDate = C, A.getRange = F, E.getRange = F
                        }
                        c.dateSelected && y(d, S);
                        var N = getComputedStyle(b).position;
                        g || N && "static" !== N || (S.inlinePosition = !0, b.style.setProperty("position", "relative"));
                        var z = i.filter((function(e) { return e.positionedEl === S.positionedEl }));
                        return z.some((function(e) { return e.inlinePosition })) && (S.inlinePosition = !0, z.forEach((function(e) { e.inlinePosition = !0 }))), x.appendChild(j), v.appendChild(x), S.alwaysShow && k(S), S
                    }(e, t);
                    if (i.length || c(document), n.shadowDom && (i.some((function(e) { return e.shadowDom === n.shadowDom })) || c(n.shadowDom)), i.push(n), n.second) {
                        var l = n.sibling;
                        g({ instance: n, deselect: !n.dateSelected }), g({ instance: l, deselect: !l.dateSelected }), d(l)
                    }
                    return d(n, n.startDate || n.dateSelected), n.alwaysShow && b(n), n
                }
            }, function(e, t, n) {}]).default
        }, "object" == typeof n && "object" == typeof t ? t.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? n.datepicker = o() : i.datepicker = o()
    }, {}],
    8: [function(e, t, n) {
        ! function(e, t) {
            if ("function" == typeof define && define.amd) define(["exports"], t);
            else if (void 0 !== n) t(n);
            else {
                var i = { exports: {} };
                t(i.exports), e.lgUtils = i.exports
            }
        }(this, (function(e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var t = {
                getAttribute: function(e, t) { return e[t] },
                setAttribute: function(e, t, n) { e[t] = n },
                wrap: function(e, t) {
                    if (e) {
                        var n = document.createElement("div");
                        n.className = t, e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), n.appendChild(e)
                    }
                },
                addClass: function(e, t) { e && (e.classList ? e.classList.add(t) : e.className += " " + t) },
                removeClass: function(e, t) { e && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")) },
                hasClass: function(e, t) { return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) },
                setVendor: function(e, t, n) { e && (e.style[t.charAt(0).toLowerCase() + t.slice(1)] = n, e.style["webkit" + t] = n, e.style["moz" + t] = n, e.style["ms" + t] = n, e.style["o" + t] = n) },
                trigger: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (e) {
                        var i = new CustomEvent(t, { detail: n });
                        e.dispatchEvent(i)
                    }
                },
                Listener: { uid: 0 },
                on: function(e, n, i) {
                    var o = this;
                    e && n.split(" ").forEach((function(n) {
                        var r = o.getAttribute(e, "lg-event-uid") || "";
                        t.Listener.uid++, r += "&" + t.Listener.uid, o.setAttribute(e, "lg-event-uid", r), t.Listener[n + t.Listener.uid] = i, e.addEventListener(n.split(".")[0], i, !1)
                    }))
                },
                off: function(e, n) {
                    if (e) {
                        var i = this.getAttribute(e, "lg-event-uid");
                        if (i) {
                            i = i.split("&");
                            for (var o = 0; o < i.length; o++)
                                if (i[o]) {
                                    var r = n + i[o];
                                    if ("." === r.substring(0, 1))
                                        for (var s in t.Listener) t.Listener.hasOwnProperty(s) && s.split(".").indexOf(r.split(".")[1]) > -1 && (e.removeEventListener(s.split(".")[0], t.Listener[s]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[s]);
                                    else e.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[r]
                                }
                        }
                    }
                },
                param: function(e) { return Object.keys(e).map((function(t) { return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]) })).join("&") }
            };
            e.default = t
        }))
    }, {}],
    9: [function(e, t, n) {
        ! function(t, i) {
            if ("function" == typeof define && define.amd) define(["./lg-utils"], i);
            else if (void 0 !== n) i(e("./lg-utils"));
            else { i(t.lgUtils), t.lightgallery = {} }
        }(this, (function(e) {
            "use strict";
            var t, n = (t = e) && t.__esModule ? t : { default: t };
            var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e };
            ! function() {
                if ("function" == typeof window.CustomEvent) return !1;

                function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), window.utils = n.default, window.lgData = { uid: 0 }, window.lgModules = {};
            var o = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, ariaLabelledby: "", ariaDescribedby: "", closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !1, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1, supportLegacyBrowser: !0 };

            function r(e, t) { if (this.el = e, this.s = i({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this }
            r.prototype.init = function() {
                var e = this;
                e.s.preload > e.items.length && (e.s.preload = e.items.length);
                var t = window.location.hash;
                if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), n.default.addClass(document.body, "lg-from-hash"), n.default.hasClass(document.body, "lg-on") || (n.default.addClass(document.body, "lg-on"), setTimeout((function() { e.build(e.index) })))), e.s.dynamic) n.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, n.default.hasClass(document.body, "lg-on") || (n.default.addClass(document.body, "lg-on"), setTimeout((function() { e.build(e.index) })));
                else
                    for (var i = 0; i < e.items.length; i++) ! function(t) { n.default.on(e.items[t], "click.lgcustom", (function(i) { i.preventDefault(), n.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, n.default.hasClass(document.body, "lg-on") || (e.build(e.index), n.default.addClass(document.body, "lg-on")) })) }(i)
            }, r.prototype.build = function(e) {
                var t = this;
                for (var i in t.structure(), window.lgModules) t.modules[i] = new window.lgModules[i](t.el);
                if (t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout((function() { t.enableDrag(), t.enableSwipe() }), 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), n.default.trigger(t.el, "onAfterOpen"), t.s.hideBarsDelay > 0) {
                    var o = setTimeout((function() { n.default.addClass(t.outer, "lg-hide-items") }), t.s.hideBarsDelay);
                    n.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", (function() { clearTimeout(o), n.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout((function() { n.default.addClass(t.outer, "lg-hide-items") }), t.s.hideBarsDelay) }))
                }
            }, r.prototype.structure = function() {
                var e, t = "",
                    i = "",
                    o = 0,
                    r = "",
                    s = this;
                for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), n.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), o = 0; o < this.items.length; o++) t += '<div class="lg-item"></div>';
                if (this.s.controls && this.items.length > 1 && (i = '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (r = '<div role="status" aria-live="polite" class="lg-sub-html"></div>'), e = '<div tabindex="-1" aria-modal="true" ' + (this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "") + " " + (this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "") + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + i + r + "</div></div>", document.body.insertAdjacentHTML("beforeend", e), this.outer = document.querySelector(".lg-outer"), this.outer.focus(), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (n.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : n.default.addClass(this.outer, "lg-use-css3"), s.setTop(), n.default.on(window, "resize.lg orientationchange.lg", (function() { setTimeout((function() { s.setTop() }), 100) })), n.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? n.default.addClass(this.outer, "lg-css3") : (n.default.addClass(this.outer, "lg-css"), this.s.speed = 0), n.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && n.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && n.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) {
                    var a = this.outer.querySelector(".lg-inner");
                    n.default.setVendor(a, "TransitionTimingFunction", this.s.cssEasing), n.default.setVendor(a, "TransitionDuration", this.s.speed + "ms")
                }
                setTimeout((function() { n.default.addClass(document.querySelector(".lg-backdrop"), "in") })), setTimeout((function() { n.default.addClass(s.outer, "lg-visible") }), this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop
            }, r.prototype.setTop = function() {
                if ("100%" !== this.s.height) {
                    var e = window.innerHeight,
                        t = (e - parseInt(this.s.height, 10)) / 2,
                        n = this.outer.querySelector(".lg");
                    e >= parseInt(this.s.height, 10) ? n.style.top = t + "px" : n.style.top = "0px"
                }
            }, r.prototype.doCss = function() {
                return !! function() {
                    var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        t = document.documentElement,
                        n = 0;
                    for (n = 0; n < e.length; n++)
                        if (e[n] in t.style) return !0
                }()
            }, r.prototype.isVideo = function(e, t) {
                var n;
                if (n = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && n) return { html5: !0 };
                var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    s = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return i ? { youtube: i } : o ? { vimeo: o } : r ? { dailymotion: r } : s ? { vk: s } : void 0
            }, r.prototype.counter = function() { this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>") }, r.prototype.addHtml = function(e) { var t, i = null; if (this.s.dynamic ? i = this.s.dynamicEl[e].subHtml : (i = (t = this.items[e]).getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !i && (i = t.getAttribute("title")) && t.querySelector("img") && (i = t.querySelector("img").getAttribute("alt"))), null != i) { var o = i.substring(0, 1); "." !== o && "#" !== o || (i = this.s.subHtmlSelectorRelative && !this.s.dynamic ? t.querySelector(i).innerHTML : document.querySelector(i).innerHTML) } else i = ""; ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = i : this.___slide[e].insertAdjacentHTML("beforeend", i), null != i && ("" === i ? n.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : n.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), n.default.trigger(this.el, "onAfterAppendSubHtml", { index: e }) }, r.prototype.preload = function(e) {
                var t = 1,
                    n = 1;
                for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++) this.loadContent(e + t, !1, 0);
                for (n = 1; n <= this.s.preload && !(e - n < 0); n++) this.loadContent(e - n, !1, 0)
            }, r.prototype.loadContent = function(e, t, i) {
                var o, r, s, a, l, c, u, d = this,
                    h = !1,
                    p = function(e) {
                        for (var t = [], n = [], i = 0; i < e.length; i++) { var o = e[i].split(" "); "" === o[0] && o.splice(0, 1), n.push(o[0]), t.push(o[1]) }
                        for (var s = window.innerWidth, a = 0; a < t.length; a++)
                            if (parseInt(t[a], 10) > s) { r = n[a]; break }
                    };
                if (d.s.dynamic) {
                    if (d.s.dynamicEl[e].poster && (h = !0, s = d.s.dynamicEl[e].poster), c = d.s.dynamicEl[e].html, r = d.s.dynamicEl[e].src, u = d.s.dynamicEl[e].alt, d.s.dynamicEl[e].responsive) p(d.s.dynamicEl[e].responsive.split(","));
                    a = d.s.dynamicEl[e].srcset, l = d.s.dynamicEl[e].sizes
                } else {
                    if (d.items[e].getAttribute("data-poster") && (h = !0, s = d.items[e].getAttribute("data-poster")), c = d.items[e].getAttribute("data-html"), r = d.items[e].getAttribute("href") || d.items[e].getAttribute("data-src"), u = d.items[e].getAttribute("title"), d.items[e].querySelector("img") && (u = u || d.items[e].querySelector("img").getAttribute("alt")), d.items[e].getAttribute("data-responsive")) p(d.items[e].getAttribute("data-responsive").split(","));
                    a = d.items[e].getAttribute("data-srcset"), l = d.items[e].getAttribute("data-sizes")
                }
                var f = !1;
                d.s.dynamic ? d.s.dynamicEl[e].iframe && (f = !0) : "true" === d.items[e].getAttribute("data-iframe") && (f = !0);
                var m = d.isVideo(r, e);
                if (!n.default.hasClass(d.___slide[e], "lg-loaded")) {
                    if (f) d.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + d.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + r + '"  allowfullscreen="true"></iframe></div></div>');
                    else if (h) {
                        var g = "";
                        g = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", d.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + g + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + s + '" /></div></div>')
                    } else m ? (d.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), n.default.trigger(d.el, "hasVideo", { index: e, src: r, html: c })) : (u = u ? 'alt="' + u + '"' : "", d.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" ' + u + ' src="' + r + '" /></div>'));
                    if (n.default.trigger(d.el, "onAferAppendSlide", { index: e }), o = d.___slide[e].querySelector(".lg-object"), l && o.setAttribute("sizes", l), a && (o.setAttribute("srcset", a), this.s.supportLegacyBrowser)) try { picturefill({ elements: [o[0]] }) } catch (e) { console.warn("If you want srcset to be supported for older browsers, please include picturefil javascript library in your document.") }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && d.addHtml(e), n.default.addClass(d.___slide[e], "lg-loaded")
                }
                n.default.on(d.___slide[e].querySelector(".lg-object"), "load.lg error.lg", (function() {
                    var t = 0;
                    i && !n.default.hasClass(document.body, "lg-from-hash") && (t = i), setTimeout((function() { n.default.addClass(d.___slide[e], "lg-complete"), n.default.trigger(d.el, "onSlideItemLoad", { index: e, delay: i || 0 }) }), t)
                })), m && m.html5 && !h && n.default.addClass(d.___slide[e], "lg-complete"), !0 === t && (n.default.hasClass(d.___slide[e], "lg-complete") ? d.preload(e) : n.default.on(d.___slide[e].querySelector(".lg-object"), "load.lg error.lg", (function() { d.preload(e) })))
            }, r.prototype.slide = function(e, t, i) {
                for (var o = 0, r = 0; r < this.___slide.length; r++)
                    if (n.default.hasClass(this.___slide[r], "lg-current")) { o = r; break }
                var s = this;
                if (!s.lGalleryOn || o !== e) {
                    var a = this.___slide.length,
                        l = s.lGalleryOn ? this.s.speed : 0,
                        c = !1,
                        u = !1;
                    if (!s.lgBusy) {
                        var d;
                        if (this.s.download)(d = s.s.dynamic ? !1 !== s.s.dynamicEl[e].downloadUrl && (s.s.dynamicEl[e].downloadUrl || s.s.dynamicEl[e].src) : "false" !== s.items[e].getAttribute("data-download-url") && (s.items[e].getAttribute("data-download-url") || s.items[e].getAttribute("href") || s.items[e].getAttribute("data-src"))) ? (document.getElementById("lg-download").setAttribute("href", d), n.default.removeClass(s.outer, "lg-hide-download")) : n.default.addClass(s.outer, "lg-hide-download");
                        if (n.default.trigger(s.el, "onBeforeSlide", { prevIndex: o, index: e, fromTouch: t, fromThumb: i }), s.lgBusy = !0, clearTimeout(s.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function() { s.addHtml(e) }), l), this.arrowDisable(e), t) {
                            var h = e - 1,
                                p = e + 1;
                            (0 === e && o === a - 1 || e === a - 1 && 0 === o) && (p = 0, h = a - 1), n.default.removeClass(s.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), n.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"), n.default.removeClass(s.outer.querySelector(".lg-next-slide"), "lg-next-slide"), n.default.addClass(s.___slide[h], "lg-prev-slide"), n.default.addClass(s.___slide[p], "lg-next-slide"), n.default.addClass(s.___slide[e], "lg-current")
                        } else {
                            n.default.addClass(s.outer, "lg-no-trans");
                            for (var f = 0; f < this.___slide.length; f++) n.default.removeClass(this.___slide[f], "lg-prev-slide"), n.default.removeClass(this.___slide[f], "lg-next-slide");
                            e < o ? (u = !0, 0 !== e || o !== a - 1 || i || (u = !1, c = !0)) : e > o && (c = !0, e !== a - 1 || 0 !== o || i || (u = !0, c = !1)), u ? (n.default.addClass(this.___slide[e], "lg-prev-slide"), n.default.addClass(this.___slide[o], "lg-next-slide")) : c && (n.default.addClass(this.___slide[e], "lg-next-slide"), n.default.addClass(this.___slide[o], "lg-prev-slide")), setTimeout((function() { n.default.removeClass(s.outer.querySelector(".lg-current"), "lg-current"), n.default.addClass(s.___slide[e], "lg-current"), n.default.removeClass(s.outer, "lg-no-trans") }), 50)
                        }
                        s.lGalleryOn ? (setTimeout((function() { s.loadContent(e, !0, 0) }), this.s.speed + 50), setTimeout((function() { s.lgBusy = !1, n.default.trigger(s.el, "onAfterSlide", { prevIndex: o, index: e, fromTouch: t, fromThumb: i }) }), this.s.speed)) : (s.loadContent(e, !0, s.s.backdropDuration), s.lgBusy = !1, n.default.trigger(s.el, "onAfterSlide", { prevIndex: o, index: e, fromTouch: t, fromThumb: i })), s.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1)
                    }
                }
            }, r.prototype.goToNextSlide = function(e) {
                var t = this;
                t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, n.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, n.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (n.default.addClass(t.outer, "lg-right-end"), setTimeout((function() { n.default.removeClass(t.outer, "lg-right-end") }), 400)))
            }, r.prototype.goToPrevSlide = function(e) {
                var t = this;
                t.lgBusy || (t.index > 0 ? (t.index--, n.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, n.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (n.default.addClass(t.outer, "lg-left-end"), setTimeout((function() { n.default.removeClass(t.outer, "lg-left-end") }), 400)))
            }, r.prototype.keyPress = function() {
                var e = this;
                this.items.length > 1 && n.default.on(window, "keyup.lg", (function(t) { e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide())) })), n.default.on(window, "keydown.lg", (function(t) {!0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), n.default.hasClass(e.outer, "lg-thumb-open") ? n.default.removeClass(e.outer, "lg-thumb-open") : e.destroy()) }))
            }, r.prototype.arrow = function() {
                var e = this;
                n.default.on(this.outer.querySelector(".lg-prev"), "click.lg", (function() { e.goToPrevSlide() })), n.default.on(this.outer.querySelector(".lg-next"), "click.lg", (function() { e.goToNextSlide() }))
            }, r.prototype.arrowDisable = function(e) {
                if (!this.s.loop && this.s.hideControlOnEnd) {
                    var t = this.outer.querySelector(".lg-next"),
                        i = this.outer.querySelector(".lg-prev");
                    e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), n.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), n.default.addClass(t, "disabled")), e > 0 ? (i.removeAttribute("disabled"), n.default.removeClass(i, "disabled")) : (i.setAttribute("disabled", "disabled"), n.default.addClass(i, "disabled"))
                }
            }, r.prototype.setTranslate = function(e, t, i) { this.s.useLeft ? e.style.left = t : n.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + i + "px, 0px)") }, r.prototype.touchMove = function(e, t) {
                var i = t - e;
                Math.abs(i) > 15 && (n.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], i, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + i, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + i, 0))
            }, r.prototype.touchEnd = function(e) {
                var t = this;
                "lg-slide" !== t.s.mode && n.default.addClass(t.outer, "lg-slide");
                for (var i = 0; i < this.___slide.length; i++) n.default.hasClass(this.___slide[i], "lg-current") || n.default.hasClass(this.___slide[i], "lg-prev-slide") || n.default.hasClass(this.___slide[i], "lg-next-slide") || (this.___slide[i].style.opacity = "0");
                setTimeout((function() { n.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && n.default.trigger(t.el, "onSlideClick"); for (var i = 0; i < t.___slide.length; i++) t.___slide[i].removeAttribute("style") })), setTimeout((function() { n.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || n.default.removeClass(t.outer, "lg-slide") }), t.s.speed + 100)
            }, r.prototype.enableSwipe = function() {
                var e = this,
                    t = 0,
                    i = 0,
                    o = !1;
                if (e.s.enableSwipe && e.isTouch && e.doCss()) { for (var r = 0; r < e.___slide.length; r++) n.default.on(e.___slide[r], "touchstart.lg", (function(i) { n.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (i.preventDefault(), e.manageSwipeClass(), t = i.targetTouches[0].pageX) })); for (var s = 0; s < e.___slide.length; s++) n.default.on(e.___slide[s], "touchmove.lg", (function(r) { n.default.hasClass(e.outer, "lg-zoomed") || (r.preventDefault(), i = r.targetTouches[0].pageX, e.touchMove(t, i), o = !0) })); for (var a = 0; a < e.___slide.length; a++) n.default.on(e.___slide[a], "touchend.lg", (function() { n.default.hasClass(e.outer, "lg-zoomed") || (o ? (o = !1, e.touchEnd(i - t)) : n.default.trigger(e.el, "onSlideClick")) })) }
            }, r.prototype.enableDrag = function() {
                var e = this,
                    t = 0,
                    i = 0,
                    o = !1,
                    r = !1;
                if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                    for (var s = 0; s < e.___slide.length; s++) n.default.on(e.___slide[s], "mousedown.lg", (function(i) { n.default.hasClass(e.outer, "lg-zoomed") || (n.default.hasClass(i.target, "lg-object") || n.default.hasClass(i.target, "lg-video-play")) && (i.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = i.pageX, o = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, n.default.removeClass(e.outer, "lg-grab"), n.default.addClass(e.outer, "lg-grabbing"), n.default.trigger(e.el, "onDragstart"))) }));
                    n.default.on(window, "mousemove.lg", (function(s) { o && (r = !0, i = s.pageX, e.touchMove(t, i), n.default.trigger(e.el, "onDragmove")) })), n.default.on(window, "mouseup.lg", (function(s) { r ? (r = !1, e.touchEnd(i - t), n.default.trigger(e.el, "onDragend")) : (n.default.hasClass(s.target, "lg-object") || n.default.hasClass(s.target, "lg-video-play")) && n.default.trigger(e.el, "onSlideClick"), o && (o = !1, n.default.removeClass(e.outer, "lg-grabbing"), n.default.addClass(e.outer, "lg-grab")) }))
                }
            }, r.prototype.manageSwipeClass = function() {
                var e = this.index + 1,
                    t = this.index - 1,
                    i = this.___slide.length;
                this.s.loop && (0 === this.index ? t = i - 1 : this.index === i - 1 && (e = 0));
                for (var o = 0; o < this.___slide.length; o++) n.default.removeClass(this.___slide[o], "lg-next-slide"), n.default.removeClass(this.___slide[o], "lg-prev-slide");
                t > -1 && n.default.addClass(this.___slide[t], "lg-prev-slide"), n.default.addClass(this.___slide[e], "lg-next-slide")
            }, r.prototype.mousewheel = function() {
                var e = this;
                n.default.on(e.outer, "mousewheel.lg", (function(t) { t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault()) }))
            }, r.prototype.closeGallery = function() {
                var e = this,
                    t = !1;
                n.default.on(this.outer.querySelector(".lg-close"), "click.lg", (function() { e.destroy() })), e.s.closable && (n.default.on(e.outer, "mousedown.lg", (function(e) { t = !!(n.default.hasClass(e.target, "lg-outer") || n.default.hasClass(e.target, "lg-item") || n.default.hasClass(e.target, "lg-img-wrap")) })), n.default.on(e.outer, "mouseup.lg", (function(i) {
                    (n.default.hasClass(i.target, "lg-outer") || n.default.hasClass(i.target, "lg-item") || n.default.hasClass(i.target, "lg-img-wrap") && t) && (n.default.hasClass(e.outer, "lg-dragging") || e.destroy())
                })))
            }, r.prototype.destroy = function(e) {
                var t = this;
                if (e || n.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) {
                    if (!t.s.dynamic)
                        for (var i = 0; i < this.items.length; i++) n.default.off(this.items[i], ".lg"), n.default.off(this.items[i], ".lgcustom");
                    var o = t.el.getAttribute("lg-uid");
                    delete window.lgData[o], t.el.removeAttribute("lg-uid")
                }
                for (var r in n.default.off(this.el, ".lgtm"), window.lgModules) t.modules[r] && t.modules[r].destroy(e);
                this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, n.default.off(window, ".lg"), n.default.removeClass(document.body, "lg-on"), n.default.removeClass(document.body, "lg-from-hash"), t.outer && n.default.removeClass(t.outer, "lg-visible"), n.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout((function() { try { t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || n.default.trigger(t.el, "onCloseAfter"), t.el.focus() } catch (e) {} }), t.s.backdropDuration + 50)
            }, window.lightGallery = function(e, t) {
                if (e) try {
                    if (e.getAttribute("lg-uid")) window.lgData[e.getAttribute("lg-uid")].init();
                    else {
                        var n = "lg" + window.lgData.uid++;
                        window.lgData[n] = new r(e, t), e.setAttribute("lg-uid", n)
                    }
                } catch (e) { console.error("lightGallery has not initiated properly", e) }
            }
        }))
    }, { "./lg-utils": 8 }],
    10: [function(e, t, n) {
        var i, o;
        i = this, o = function() {
            "use strict";
            var e = "undefined" != typeof document && document.documentMode,
                t = {
                    rootMargin: "0px",
                    threshold: 0,
                    load: function(t) {
                        if ("picture" === t.nodeName.toLowerCase()) {
                            var n = t.querySelector("img"),
                                i = !1;
                            null === n && (n = document.createElement("img"), i = !0), e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")), i && t.append(n)
                        }
                        if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                            for (var o = t.children, r = void 0, s = 0; s <= o.length - 1; s++)(r = o[s].getAttribute("data-src")) && (o[s].src = r);
                            t.load()
                        }
                        t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
                        var a = ",";
                        if (t.getAttribute("data-background-delimiter") && (a = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(a).join("'),url('") + "')";
                        else if (t.getAttribute("data-background-image-set")) {
                            var l = t.getAttribute("data-background-image-set").split(a),
                                c = l[0].substr(0, l[0].indexOf(" ")) || l[0];
                            c = -1 === c.indexOf("url(") ? "url(" + c + ")" : c, 1 === l.length ? t.style.backgroundImage = c : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + c + "; background-image: -webkit-image-set(" + l + "); background-image: image-set(" + l + ")")
                        }
                        t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
                    },
                    loaded: function() {}
                };

            function n(e) { e.setAttribute("data-loaded", !0) }
            var i = function(e) { return "true" === e.getAttribute("data-loaded") },
                o = function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document; return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e) };
            return function() {
                var e, r, s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
                    a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    l = Object.assign({}, t, a),
                    c = l.root,
                    u = l.rootMargin,
                    d = l.threshold,
                    h = l.load,
                    p = l.loaded,
                    f = void 0;
                "undefined" != typeof window && window.IntersectionObserver && (f = new IntersectionObserver((e = h, r = p, function(t, o) {
                    t.forEach((function(t) {
                        (0 < t.intersectionRatio || t.isIntersecting) && (o.unobserve(t.target), i(t.target) || (e(t.target), n(t.target), r(t.target)))
                    }))
                }), { root: c, rootMargin: u, threshold: d }));
                for (var m, g = o(s, c), y = 0; y < g.length; y++)(m = g[y]).getAttribute("data-placeholder-background") && (m.style.background = m.getAttribute("data-placeholder-background"));
                return { observe: function() { for (var e = o(s, c), t = 0; t < e.length; t++) i(e[t]) || (f ? f.observe(e[t]) : (h(e[t]), n(e[t]), p(e[t]))) }, triggerLoad: function(e) { i(e) || (h(e), n(e), p(e)) }, observer: f }
            }
        }, "object" == typeof n && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : i.lozad = o()
    }, {}],
    11: [function(e, t, n) {
        (function(e) {
            (function() {
                var i, o;
                "object" == typeof navigator && (i = this, o = function() {
                    "use strict";

                    function t(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                    function n(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function i(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e }

                    function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                    function r(e, t) {
                        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                            var n = [],
                                i = !0,
                                o = !1,
                                r = void 0;
                            try { for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (e) { o = !0, r = e } finally { try { i || null == a.return || a.return() } finally { if (o) throw r } }
                            return n
                        }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
                    }

                    function s(e) { return function(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }(e) || function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }
                    var a, l, c, u = { addCSS: !0, thumbWidth: 15, watch: !0 },
                        d = function(e) { return null != e ? e.constructor : null },
                        h = function(e, t) { return Boolean(e && t && e instanceof t) },
                        p = function(e) { return null == e },
                        f = function(e) { return d(e) === Object },
                        m = function(e) { return d(e) === String },
                        g = function(e) { return Array.isArray(e) },
                        y = function(e) { return h(e, NodeList) },
                        v = m,
                        b = g,
                        w = y,
                        _ = function(e) { return h(e, Element) },
                        x = function(e) { return h(e, Event) },
                        k = function(e) { return p(e) || (m(e) || g(e) || y(e)) && !e.length || f(e) && !Object.keys(e).length },
                        j = function() {
                            function e(n, i) { t(this, e), _(n) ? this.element = n : v(n) && (this.element = document.querySelector(n)), _(this.element) && k(this.element.rangeTouch) && (this.config = Object.assign({}, u, i), this.init()) }
                            return i(e, [{ key: "init", value: function() { e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this) } }, { key: "destroy", value: function() { e.enabled && (this.listeners(!1), this.element.rangeTouch = null) } }, {
                                key: "listeners",
                                value: function(e) {
                                    var t = this,
                                        n = e ? "addEventListener" : "removeEventListener";
                                    ["touchstart", "touchmove", "touchend"].forEach((function(e) { t.element[n](e, (function(e) { return t.set(e) }), !1) }))
                                }
                            }, {
                                key: "get",
                                value: function(t) {
                                    if (!e.enabled || !x(t)) return null;
                                    var n, i = t.target,
                                        o = t.changedTouches[0],
                                        r = parseFloat(i.getAttribute("min")) || 0,
                                        s = parseFloat(i.getAttribute("max")) || 100,
                                        a = parseFloat(i.getAttribute("step")) || 1,
                                        l = s - r,
                                        c = i.getBoundingClientRect(),
                                        u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
                                    return (n = 100 / c.width * (o.clientX - c.left)) < 0 ? n = 0 : n > 100 && (n = 100), n < 50 ? n -= (100 - 2 * n) * u : n > 50 && (n += 2 * (n - 50) * u), r + function(e, t) { if (t < 1) { var n = (i = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0; return parseFloat(e.toFixed(n)) } var i; return Math.round(e / t) * t }(l * (n / 100), a)
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    e.enabled && x(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                                        if (e && t) {
                                            var n = new Event(t);
                                            e.dispatchEvent(n)
                                        }
                                    }(t.target, "touchend" === t.type ? "change" : "input"))
                                }
                            }], [{
                                key: "setup",
                                value: function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    if (k(t) || v(t) ? i = Array.from(document.querySelectorAll(v(t) ? t : 'input[type="range"]')) : _(t) ? i = [t] : w(t) ? i = Array.from(t) : b(t) && (i = t.filter(_)), k(i)) return null;
                                    var o = Object.assign({}, u, n);
                                    return v(t) && o.watch && new MutationObserver((function(n) {
                                        Array.from(n).forEach((function(n) {
                                            Array.from(n.addedNodes).forEach((function(n) {
                                                var i;
                                                _(n) && function() { return Array.from(document.querySelectorAll(i)).includes(this) }.call(n, i = t) && new e(n, o)
                                            }))
                                        }))
                                    })).observe(document.body, { childList: !0, subtree: !0 }), i.map((function(t) { return new e(t, n) }))
                                }
                            }, { key: "enabled", get: function() { return "ontouchstart" in document.documentElement } }]), e
                        }(),
                        S = function(e) { return null != e ? e.constructor : null },
                        T = function(e, t) { return Boolean(e && t && e instanceof t) },
                        A = function(e) { return null == e },
                        E = function(e) { return S(e) === Object },
                        M = function(e) { return S(e) === String },
                        C = function(e) { return Array.isArray(e) },
                        O = function(e) { return T(e, NodeList) },
                        L = function(e) { return A(e) || (M(e) || C(e) || O(e)) && !e.length || E(e) && !Object.keys(e).length },
                        P = A,
                        I = E,
                        D = function(e) { return S(e) === Number && !Number.isNaN(e) },
                        N = M,
                        F = function(e) { return S(e) === Boolean },
                        H = function(e) { return S(e) === Function },
                        q = C,
                        z = O,
                        R = function(e) { return T(e, Element) },
                        V = function(e) { return T(e, Event) },
                        B = function(e) { return T(e, KeyboardEvent) },
                        W = function(e) { return T(e, TextTrack) || !A(e) && M(e.kind) },
                        U = function(e) {
                            if (T(e, window.URL)) return !0;
                            if (!M(e)) return !1;
                            var t = e;
                            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                            try { return !L(new URL(t).hostname) } catch (e) { return !1 }
                        },
                        G = L,
                        K = (a = document.createElement("span"), l = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, c = Object.keys(l).find((function(e) { return void 0 !== a.style[e] })), !!N(c) && l[c]);

                    function Y(e, t) { setTimeout((function() { try { e.hidden = !0, e.offsetHeight, e.hidden = !1 } catch (e) {} }), t) }
                    var $ = { isIE: !!document.documentMode, isEdge: window.navigator.userAgent.includes("Edge"), isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform) },
                        J = function() {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({}, "passive", { get: function() { return e = !0, null } });
                                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                            } catch (e) {}
                            return e
                        }();

                    function X(e, t, n) {
                        var i = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (e && "addEventListener" in e && !G(t) && H(n)) {
                            var a = t.split(" "),
                                l = s;
                            J && (l = { passive: r, capture: s }), a.forEach((function(t) { i && i.eventListeners && o && i.eventListeners.push({ element: e, type: t, callback: n, options: l }), e[o ? "addEventListener" : "removeEventListener"](t, n, l) }))
                        }
                    }

                    function Z(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        X.call(this, e, t, n, !0, i, o)
                    }

                    function Q(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        X.call(this, e, t, n, !1, i, o)
                    }

                    function ee(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        X.call(this, e, n, (function s() {
                            Q(e, n, s, o, r);
                            for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                            i.apply(t, l)
                        }), !0, o, r)
                    }

                    function te(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (R(e) && !G(t)) {
                            var o = new CustomEvent(t, { bubbles: n, detail: Object.assign({}, i, { plyr: this }) });
                            e.dispatchEvent(o)
                        }
                    }

                    function ne(e, t) { return t.split(".").reduce((function(e, t) { return e && e[t] }), e) }

                    function ie() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; if (!n.length) return e; var r = n.shift(); return I(r) ? (Object.keys(r).forEach((function(t) { I(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, o({}, t, {})), ie(e[t], r[t])) : Object.assign(e, o({}, t, r[t])) })), ie.apply(void 0, [e].concat(n))) : e }

                    function oe(e, t) {
                        var n = e.length ? e : [e];
                        Array.from(n).reverse().forEach((function(e, n) {
                            var i = n > 0 ? t.cloneNode(!0) : t,
                                o = e.parentNode,
                                r = e.nextSibling;
                            i.appendChild(e), r ? o.insertBefore(i, r) : o.appendChild(i)
                        }))
                    }

                    function re(e, t) {
                        R(e) && !G(t) && Object.entries(t).filter((function(e) { var t = r(e, 2)[1]; return !P(t) })).forEach((function(t) {
                            var n = r(t, 2),
                                i = n[0],
                                o = n[1];
                            return e.setAttribute(i, o)
                        }))
                    }

                    function se(e, t, n) { var i = document.createElement(e); return I(t) && re(i, t), N(n) && (i.innerText = n), i }

                    function ae(e, t, n, i) { R(t) && t.appendChild(se(e, n, i)) }

                    function le(e) { z(e) || q(e) ? Array.from(e).forEach(le) : R(e) && R(e.parentNode) && e.parentNode.removeChild(e) }

                    function ce(e) {
                        if (R(e))
                            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
                    }

                    function ue(e, t) { return R(t) && R(t.parentNode) && R(e) ? (t.parentNode.replaceChild(e, t), e) : null }

                    function de(e, t) {
                        if (!N(e) || G(e)) return {};
                        var n = {},
                            i = ie({}, t);
                        return e.split(",").forEach((function(e) {
                            var t = e.trim(),
                                o = t.replace(".", ""),
                                s = t.replace(/[[\]]/g, "").split("="),
                                a = r(s, 1)[0],
                                l = s.length > 1 ? s[1].replace(/["']/g, "") : "";
                            switch (t.charAt(0)) {
                                case ".":
                                    N(i.class) ? n.class = "".concat(i.class, " ").concat(o) : n.class = o;
                                    break;
                                case "#":
                                    n.id = t.replace("#", "");
                                    break;
                                case "[":
                                    n[a] = l
                            }
                        })), ie(i, n)
                    }

                    function he(e, t) {
                        if (R(e)) {
                            var n = t;
                            F(n) || (n = !e.hidden), e.hidden = n
                        }
                    }

                    function pe(e, t, n) { if (z(e)) return Array.from(e).map((function(e) { return pe(e, t, n) })); if (R(e)) { var i = "toggle"; return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t) } return !1 }

                    function fe(e, t) { return R(e) && e.classList.contains(t) }

                    function me(e, t) { return function() { return Array.from(document.querySelectorAll(t)).includes(this) }.call(e, t) }

                    function ge(e) { return this.elements.container.querySelectorAll(e) }

                    function ye(e) { return this.elements.container.querySelector(e) }

                    function ve() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        R(e) && (e.focus({ preventScroll: !0 }), t && pe(e, this.config.classNames.tabFocus))
                    }
                    var be, we = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" },
                        _e = {
                            audio: "canPlayType" in document.createElement("audio"),
                            video: "canPlayType" in document.createElement("video"),
                            check: function(e, t, n) {
                                var i = $.isIPhone && n && _e.playsinline,
                                    o = _e[e] || "html5" !== t;
                                return { api: o, ui: o && _e.rangeInput && ("video" !== e || !$.isIPhone || i) }
                            },
                            pip: !($.isIPhone || !H(se("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || se("video").disablePictureInPicture)),
                            airplay: H(window.WebKitPlaybackTargetAvailabilityEvent),
                            playsinline: "playsInline" in document.createElement("video"),
                            mime: function(e) {
                                if (G(e)) return !1;
                                var t = r(e.split("/"), 1)[0],
                                    n = e;
                                if (!this.isHTML5 || t !== this.type) return !1;
                                Object.keys(we).includes(n) && (n += '; codecs="'.concat(we[e], '"'));
                                try { return Boolean(n && this.media.canPlayType(n).replace(/no/, "")) } catch (e) { return !1 }
                            },
                            textTracks: "textTracks" in document.createElement("video"),
                            rangeInput: (be = document.createElement("input"), be.type = "range", "range" === be.type),
                            touch: "ontouchstart" in document.documentElement,
                            transitions: !1 !== K,
                            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                        };

                    function xe(e) { return !!(q(e) || N(e) && e.includes(":")) && (q(e) ? e : e.split(":")).map(Number).every(D) }

                    function ke(e) {
                        if (!q(e) || !e.every(D)) return null;
                        var t = r(e, 2),
                            n = t[0],
                            i = t[1],
                            o = function e(t, n) { return 0 === n ? t : e(n, t % n) }(n, i);
                        return [n / o, i / o]
                    }

                    function je(e) {
                        var t = function(e) { return xe(e) ? e.split(":").map(Number) : null },
                            n = t(e);
                        if (null === n && (n = t(this.config.ratio)), null === n && !G(this.embed) && q(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                            var i = this.media;
                            n = ke([i.videoWidth, i.videoHeight])
                        }
                        return n
                    }

                    function Se(e) {
                        if (!this.isVideo) return {};
                        var t = je.call(this, e),
                            n = r(q(t) ? t : [0, 0], 2),
                            i = 100 / n[0] * n[1];
                        if (this.elements.wrapper.style.paddingBottom = "".concat(i, "%"), this.isVimeo && this.supported.ui) {
                            var o = (240 - i) / 4.8;
                            this.media.style.transform = "translateY(-".concat(o, "%)")
                        } else this.isHTML5 && this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio, null !== t);
                        return { padding: i, ratio: t }
                    }
                    var Te = {
                        getSources: function() { var e = this; return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) { var n = t.getAttribute("type"); return !!G(n) || _e.mime.call(e, n) })) : [] },
                        getQualityOptions: function() { return Te.getSources.call(this).map((function(e) { return Number(e.getAttribute("size")) })).filter(Boolean) },
                        extend: function() {
                            if (this.isHTML5) {
                                var e = this;
                                G(this.config.ratio) || Se.call(e), Object.defineProperty(e.media, "quality", {
                                    get: function() { var t = Te.getSources.call(e).find((function(t) { return t.getAttribute("src") === e.source })); return t && Number(t.getAttribute("size")) },
                                    set: function(t) {
                                        var n = Te.getSources.call(e).find((function(e) { return Number(e.getAttribute("size")) === t }));
                                        if (n) {
                                            var i = e.media,
                                                o = i.currentTime,
                                                r = i.paused,
                                                s = i.preload,
                                                a = i.readyState;
                                            e.media.src = n.getAttribute("src"), ("none" !== s || a) && (e.once("loadedmetadata", (function() { e.currentTime = o, r || e.play() })), e.media.load()), te.call(e, e.media, "qualitychange", !1, { quality: t })
                                        }
                                    }
                                })
                            }
                        },
                        cancelRequests: function() { this.isHTML5 && (le(Te.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests")) }
                    };

                    function Ae(e) { return q(e) ? e.filter((function(t, n) { return e.indexOf(t) === n })) : e }

                    function Ee(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; return G(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) { return n[t].toString() })) }

                    function Me() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
                    }

                    function Ce() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, (function(e) { return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() })) }

                    function Oe(e) { var t = document.createElement("div"); return t.appendChild(e), t.innerHTML }
                    var Le = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" },
                        Pe = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (G(e) || G(t)) return "";
                            var n = ne(t.i18n, e);
                            if (G(n)) return Object.keys(Le).includes(e) ? Le[e] : "";
                            var i = { "{seektime}": t.seekTime, "{title}": t.title };
                            return Object.entries(i).forEach((function(e) {
                                var t = r(e, 2),
                                    i = t[0],
                                    o = t[1];
                                n = Me(n, i, o)
                            })), n
                        },
                        Ie = function() {
                            function e(n) { t(this, e), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key }
                            return i(e, [{ key: "get", value: function(t) { if (!e.supported || !this.enabled) return null; var n = window.localStorage.getItem(this.key); if (G(n)) return null; var i = JSON.parse(n); return N(t) && t.length ? i[t] : i } }, {
                                key: "set",
                                value: function(t) {
                                    if (e.supported && this.enabled && I(t)) {
                                        var n = this.get();
                                        G(n) && (n = {}), ie(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                                    }
                                }
                            }], [{ key: "supported", get: function() { try { return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0) } catch (e) { return !1 } } }]), e
                        }();

                    function De(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                        return new Promise((function(n, i) {
                            try {
                                var o = new XMLHttpRequest;
                                if (!("withCredentials" in o)) return;
                                o.addEventListener("load", (function() { if ("text" === t) try { n(JSON.parse(o.responseText)) } catch (e) { n(o.responseText) } else n(o.response) })), o.addEventListener("error", (function() { throw new Error(o.status) })), o.open("GET", e, !0), o.responseType = t, o.send()
                            } catch (e) { i(e) }
                        }))
                    }

                    function Ne(e, t) {
                        if (N(e)) {
                            var n = N(t),
                                i = function() { return null !== document.getElementById(t) },
                                o = function(e, t) { e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e) };
                            if (!n || !i()) {
                                var r = Ie.supported,
                                    s = document.createElement("div");
                                if (s.setAttribute("hidden", ""), n && s.setAttribute("id", t), r) {
                                    var a = window.localStorage.getItem("".concat("cache", "-").concat(t));
                                    if (null !== a) {
                                        var l = JSON.parse(a);
                                        o(s, l.content)
                                    }
                                }
                                De(e).then((function(e) { G(e) || (r && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({ content: e })), o(s, e)) })).catch((function() {}))
                            }
                        }
                    }
                    var Fe = function(e) { return Math.trunc(e / 60 / 60 % 60, 10) },
                        He = function(e) { return Math.trunc(e / 60 % 60, 10) },
                        qe = function(e) { return Math.trunc(e % 60, 10) };

                    function ze() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!D(e)) return ze(null, t, n);
                        var i = function(e) { return "0".concat(e).slice(-2) },
                            o = Fe(e),
                            r = He(e),
                            s = qe(e);
                        return o = t || o > 0 ? "".concat(o, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(o).concat(i(r), ":").concat(i(s))
                    }
                    var Re = {
                        getIconUrl: function() { var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || $.isIE && !window.svg4everybody; return { url: this.config.iconUrl, cors: e } },
                        findElements: function() { try { return this.elements.controls = ye.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: ge.call(this, this.config.selectors.buttons.play), pause: ye.call(this, this.config.selectors.buttons.pause), restart: ye.call(this, this.config.selectors.buttons.restart), rewind: ye.call(this, this.config.selectors.buttons.rewind), fastForward: ye.call(this, this.config.selectors.buttons.fastForward), mute: ye.call(this, this.config.selectors.buttons.mute), pip: ye.call(this, this.config.selectors.buttons.pip), airplay: ye.call(this, this.config.selectors.buttons.airplay), settings: ye.call(this, this.config.selectors.buttons.settings), captions: ye.call(this, this.config.selectors.buttons.captions), fullscreen: ye.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = ye.call(this, this.config.selectors.progress), this.elements.inputs = { seek: ye.call(this, this.config.selectors.inputs.seek), volume: ye.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: ye.call(this, this.config.selectors.display.buffer), currentTime: ye.call(this, this.config.selectors.display.currentTime), duration: ye.call(this, this.config.selectors.display.duration) }, R(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0 } catch (e) { return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1 } },
                        createIcon: function(e, t) {
                            var n = Re.getIconUrl.call(this),
                                i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                                o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            re(o, ie(t, { role: "presentation", focusable: "false" }));
                            var r = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                                s = "".concat(i, "-").concat(e);
                            return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(r), o
                        },
                        createLabel: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = Pe(e, this.config);
                            return se("span", Object.assign({}, t, { class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), n)
                        },
                        createBadge: function(e) { if (G(e)) return null; var t = se("span", { class: this.config.classNames.menu.value }); return t.appendChild(se("span", { class: this.config.classNames.menu.badge }, e)), t },
                        createButton: function(e, t) {
                            var n = this,
                                i = ie({}, t),
                                o = function() { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString(); return (e = function() { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString(); return e = Me(e, "-", " "), e = Me(e, "_", " "), Me(e = Ce(e), " ", "") }(e)).charAt(0).toLowerCase() + e.slice(1) }(e),
                                r = { element: "button", toggle: !1, label: null, icon: null, labelPressed: null, iconPressed: null };
                            switch (["element", "icon", "label"].forEach((function(e) { Object.keys(i).includes(e) && (r[e] = i[e], delete i[e]) })), "button" !== r.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(e) { return e === n.config.classNames.control })) || ie(i, { class: "".concat(i.class, " ").concat(this.config.classNames.control) }) : i.class = this.config.classNames.control, e) {
                                case "play":
                                    r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
                                    break;
                                case "mute":
                                    r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
                                    break;
                                case "captions":
                                    r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
                                    break;
                                case "fullscreen":
                                    r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
                                    break;
                                case "play-large":
                                    i.class += " ".concat(this.config.classNames.control, "--overlaid"), o = "play", r.label = "play", r.icon = "play";
                                    break;
                                default:
                                    G(r.label) && (r.label = o), G(r.icon) && (r.icon = e)
                            }
                            var s = se(r.element);
                            return r.toggle ? (s.appendChild(Re.createIcon.call(this, r.iconPressed, { class: "icon--pressed" })), s.appendChild(Re.createIcon.call(this, r.icon, { class: "icon--not-pressed" })), s.appendChild(Re.createLabel.call(this, r.labelPressed, { class: "label--pressed" })), s.appendChild(Re.createLabel.call(this, r.label, { class: "label--not-pressed" }))) : (s.appendChild(Re.createIcon.call(this, r.icon)), s.appendChild(Re.createLabel.call(this, r.label))), ie(i, de(this.config.selectors.buttons[o], i)), re(s, i), "play" === o ? (q(this.elements.buttons[o]) || (this.elements.buttons[o] = []), this.elements.buttons[o].push(s)) : this.elements.buttons[o] = s, s
                        },
                        createRange: function(e, t) { var n = se("input", ie(de(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-label": Pe(e, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t)); return this.elements.inputs[e] = n, Re.updateRangeFill.call(this, n), j.setup(n), n },
                        createProgress: function(e, t) {
                            var n = se("progress", ie(de(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": !0 }, t));
                            if ("volume" !== e) {
                                n.appendChild(se("span", null, "0"));
                                var i = { played: "played", buffer: "buffered" }[e],
                                    o = i ? Pe(i, this.config) : "";
                                n.innerText = "% ".concat(o.toLowerCase())
                            }
                            return this.elements.display[e] = n, n
                        },
                        createTime: function(e, t) {
                            var n = de(this.config.selectors.display[e], t),
                                i = se("div", ie(n, { class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(), "aria-label": Pe(e, this.config) }), "00:00");
                            return this.elements.display[e] = i, i
                        },
                        bindMenuItemShortcuts: function(e, t) {
                            var n = this;
                            Z(e, "keydown keyup", (function(i) { if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) { var o, r = me(e, '[role="menuitemradio"]');!r && [32, 39].includes(i.which) ? Re.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || r && 39 === i.which ? (o = e.nextElementSibling, R(o) || (o = e.parentNode.firstElementChild)) : (o = e.previousElementSibling, R(o) || (o = e.parentNode.lastElementChild)), ve.call(n, o, !0)) } }), !1), Z(e, "keyup", (function(e) { 13 === e.which && Re.focusFirstMenuItem.call(n, null, !0) }))
                        },
                        createMenuItem: function(e) {
                            var t = this,
                                n = e.value,
                                i = e.list,
                                o = e.type,
                                r = e.title,
                                s = e.badge,
                                a = void 0 === s ? null : s,
                                l = e.checked,
                                c = void 0 !== l && l,
                                u = de(this.config.selectors.inputs[o]),
                                d = se("button", ie(u, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(), "aria-checked": c, value: n })),
                                h = se("span");
                            h.innerHTML = r, R(a) && h.appendChild(a), d.appendChild(h), Object.defineProperty(d, "checked", { enumerable: !0, get: function() { return "true" === d.getAttribute("aria-checked") }, set: function(e) { e && Array.from(d.parentNode.children).filter((function(e) { return me(e, '[role="menuitemradio"]') })).forEach((function(e) { return e.setAttribute("aria-checked", "false") })), d.setAttribute("aria-checked", e ? "true" : "false") } }), this.listeners.bind(d, "click keyup", (function(e) {
                                if (!B(e) || 32 === e.which) {
                                    switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, o) {
                                        case "language":
                                            t.currentTrack = Number(n);
                                            break;
                                        case "quality":
                                            t.quality = n;
                                            break;
                                        case "speed":
                                            t.speed = parseFloat(n)
                                    }
                                    Re.showMenuPanel.call(t, "home", B(e))
                                }
                            }), o, !1), Re.bindMenuItemShortcuts.call(this, d, o), i.appendChild(d)
                        },
                        formatTime: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return D(e) ? ze(e, Fe(this.duration) > 0, t) : e
                        },
                        updateTimeDisplay: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            R(e) && D(t) && (e.innerText = Re.formatTime(t, n))
                        },
                        updateVolume: function() { this.supported.ui && (R(this.elements.inputs.volume) && Re.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), R(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume)) },
                        setRange: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            R(e) && (e.value = t, Re.updateRangeFill.call(this, e))
                        },
                        updateProgress: function(e) {
                            var t = this;
                            if (this.supported.ui && V(e)) {
                                var n, i, o = 0;
                                if (e) switch (e.type) {
                                    case "timeupdate":
                                    case "seeking":
                                    case "seeked":
                                        n = this.currentTime, i = this.duration, o = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && Re.setRange.call(this, this.elements.inputs.seek, o);
                                        break;
                                    case "playing":
                                    case "progress":
                                        ! function(e, n) {
                                            var i = D(n) ? n : 0,
                                                o = R(e) ? e : t.elements.display.buffer;
                                            if (R(o)) {
                                                o.value = i;
                                                var r = o.getElementsByTagName("span")[0];
                                                R(r) && (r.childNodes[0].nodeValue = i)
                                            }
                                        }(this.elements.display.buffer, 100 * this.buffered)
                                }
                            }
                        },
                        updateRangeFill: function(e) {
                            var t = V(e) ? e.target : e;
                            if (R(t) && "range" === t.getAttribute("type")) {
                                if (me(t, this.config.selectors.inputs.seek)) {
                                    t.setAttribute("aria-valuenow", this.currentTime);
                                    var n = Re.formatTime(this.currentTime),
                                        i = Re.formatTime(this.duration),
                                        o = Pe("seekLabel", this.config);
                                    t.setAttribute("aria-valuetext", o.replace("{currentTime}", n).replace("{duration}", i))
                                } else if (me(t, this.config.selectors.inputs.volume)) {
                                    var r = 100 * t.value;
                                    t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"))
                                } else t.setAttribute("aria-valuenow", t.value);
                                $.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
                            }
                        },
                        updateSeekTooltip: function(e) {
                            var t = this;
                            if (this.config.tooltips.seek && R(this.elements.inputs.seek) && R(this.elements.display.seekTooltip) && 0 !== this.duration) {
                                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                                    i = function(e) { return pe(t.elements.display.seekTooltip, n, e) };
                                if (this.touch) i(!1);
                                else {
                                    var o = 0,
                                        r = this.elements.progress.getBoundingClientRect();
                                    if (V(e)) o = 100 / r.width * (e.pageX - r.left);
                                    else {
                                        if (!fe(this.elements.display.seekTooltip, n)) return;
                                        o = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                                    }
                                    o < 0 ? o = 0 : o > 100 && (o = 100), Re.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * o), this.elements.display.seekTooltip.style.left = "".concat(o, "%"), V(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                                }
                            }
                        },
                        timeUpdate: function(e) {
                            var t = !R(this.elements.display.duration) && this.config.invertTime;
                            Re.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Re.updateProgress.call(this, e)
                        },
                        durationUpdate: function() {
                            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                                if (this.duration >= Math.pow(2, 32)) return he(this.elements.display.currentTime, !0), void he(this.elements.progress, !0);
                                R(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                                var e = R(this.elements.display.duration);
                                !e && this.config.displayDuration && this.paused && Re.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Re.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Re.updateSeekTooltip.call(this)
                            }
                        },
                        toggleMenuButton: function(e, t) { he(this.elements.settings.buttons[e], !t) },
                        updateSetting: function(e, t, n) {
                            var i = this.elements.settings.panels[e],
                                o = null,
                                r = t;
                            if ("captions" === e) o = this.currentTrack;
                            else { if (o = G(n) ? this[e] : n, G(o) && (o = this.config[e].default), !G(this.options[e]) && !this.options[e].includes(o)) return void this.debug.warn("Unsupported value of '".concat(o, "' for ").concat(e)); if (!this.config[e].options.includes(o)) return void this.debug.warn("Disabled value of '".concat(o, "' for ").concat(e)) }
                            if (R(r) || (r = i && i.querySelector('[role="menu"]')), R(r)) {
                                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Re.getLabel.call(this, e, o);
                                var s = r && r.querySelector('[value="'.concat(o, '"]'));
                                R(s) && (s.checked = !0)
                            }
                        },
                        getLabel: function(e, t) {
                            switch (e) {
                                case "speed":
                                    return 1 === t ? Pe("normal", this.config) : "".concat(t, "&times;");
                                case "quality":
                                    if (D(t)) { var n = Pe("qualityLabel.".concat(t), this.config); return n.length ? n : "".concat(t, "p") }
                                    return Ce(t);
                                case "captions":
                                    return We.getLabel.call(this);
                                default:
                                    return null
                            }
                        },
                        setQualityMenu: function(e) {
                            var t = this;
                            if (R(this.elements.settings.panels.quality)) {
                                var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                                q(e) && (this.options.quality = Ae(e).filter((function(e) { return t.config.quality.options.includes(e) })));
                                var i = !G(this.options.quality) && this.options.quality.length > 1;
                                if (Re.toggleMenuButton.call(this, "quality", i), ce(n), Re.checkMenu.call(this), i) {
                                    var o = function(e) { var n = Pe("qualityBadge.".concat(e), t.config); return n.length ? Re.createBadge.call(t, n) : null };
                                    this.options.quality.sort((function(e, n) { var i = t.config.quality.options; return i.indexOf(e) > i.indexOf(n) ? 1 : -1 })).forEach((function(e) { Re.createMenuItem.call(t, { value: e, list: n, type: "quality", title: Re.getLabel.call(t, "quality", e), badge: o(e) }) })), Re.updateSetting.call(this, "quality", n)
                                }
                            }
                        },
                        setCaptionsMenu: function() {
                            var e = this;
                            if (R(this.elements.settings.panels.captions)) {
                                var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                                    n = We.getTracks.call(this),
                                    i = Boolean(n.length);
                                if (Re.toggleMenuButton.call(this, "captions", i), ce(t), Re.checkMenu.call(this), i) {
                                    var o = n.map((function(n, i) { return { value: i, checked: e.captions.toggled && e.currentTrack === i, title: We.getLabel.call(e, n), badge: n.language && Re.createBadge.call(e, n.language.toUpperCase()), list: t, type: "language" } }));
                                    o.unshift({ value: -1, checked: !this.captions.toggled, title: Pe("disabled", this.config), list: t, type: "language" }), o.forEach(Re.createMenuItem.bind(this)), Re.updateSetting.call(this, "captions", t)
                                }
                            }
                        },
                        setSpeedMenu: function(e) {
                            var t = this;
                            if (R(this.elements.settings.panels.speed)) {
                                var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                                q(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter((function(e) { return t.config.speed.options.includes(e) }));
                                var i = !G(this.options.speed) && this.options.speed.length > 1;
                                Re.toggleMenuButton.call(this, "speed", i), ce(n), Re.checkMenu.call(this), i && (this.options.speed.forEach((function(e) { Re.createMenuItem.call(t, { value: e, list: n, type: "speed", title: Re.getLabel.call(t, "speed", e) }) })), Re.updateSetting.call(this, "speed", n))
                            }
                        },
                        checkMenu: function() {
                            var e = this.elements.settings.buttons,
                                t = !G(e) && Object.values(e).some((function(e) { return !e.hidden }));
                            he(this.elements.settings.menu, !t)
                        },
                        focusFirstMenuItem: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!this.elements.settings.popup.hidden) {
                                var n = e;
                                R(n) || (n = Object.values(this.elements.settings.panels).find((function(e) { return !e.hidden })));
                                var i = n.querySelector('[role^="menuitem"]');
                                ve.call(this, i, t)
                            }
                        },
                        toggleMenu: function(e) {
                            var t = this.elements.settings.popup,
                                n = this.elements.buttons.settings;
                            if (R(t) && R(n)) {
                                var i = t.hidden,
                                    o = i;
                                if (F(e)) o = e;
                                else if (B(e) && 27 === e.which) o = !1;
                                else if (V(e)) {
                                    var r = H(e.composedPath) ? e.composedPath()[0] : e.target,
                                        s = t.contains(r);
                                    if (s || !s && e.target !== n && o) return
                                }
                                n.setAttribute("aria-expanded", o), he(t, !o), pe(this.elements.container, this.config.classNames.menu.open, o), o && B(e) ? Re.focusFirstMenuItem.call(this, null, !0) : o || i || ve.call(this, n, B(e))
                            }
                        },
                        getMenuSize: function(e) {
                            var t = e.cloneNode(!0);
                            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                            var n = t.scrollWidth,
                                i = t.scrollHeight;
                            return le(t), { width: n, height: i }
                        },
                        showMenuPanel: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                            if (R(i)) {
                                var o = i.parentNode,
                                    r = Array.from(o.children).find((function(e) { return !e.hidden }));
                                if (_e.transitions && !_e.reducedMotion) {
                                    o.style.width = "".concat(r.scrollWidth, "px"), o.style.height = "".concat(r.scrollHeight, "px");
                                    var s = Re.getMenuSize.call(this, i);
                                    Z.call(this, o, K, (function t(n) { n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", Q.call(e, o, K, t)) })), o.style.width = "".concat(s.width, "px"), o.style.height = "".concat(s.height, "px")
                                }
                                he(r, !0), he(i, !1), Re.focusFirstMenuItem.call(this, i, n)
                            }
                        },
                        setDownloadUrl: function() {
                            var e = this.elements.buttons.download;
                            R(e) && e.setAttribute("href", this.download)
                        },
                        create: function(e) {
                            var t = this,
                                n = Re.bindMenuItemShortcuts,
                                i = Re.createButton,
                                o = Re.createProgress,
                                r = Re.createRange,
                                s = Re.createTime,
                                a = Re.setQualityMenu,
                                l = Re.setSpeedMenu,
                                c = Re.showMenuPanel;
                            this.elements.controls = null, this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                            var u = se("div", de(this.config.selectors.controls.wrapper));
                            this.elements.controls = u;
                            var d = { class: "plyr__controls__item" };
                            return Ae(this.config.controls).forEach((function(a) {
                                if ("restart" === a && u.appendChild(i.call(t, "restart", d)), "rewind" === a && u.appendChild(i.call(t, "rewind", d)), "play" === a && u.appendChild(i.call(t, "play", d)), "fast-forward" === a && u.appendChild(i.call(t, "fast-forward", d)), "progress" === a) {
                                    var l = se("div", { class: "".concat(d.class, " plyr__progress__container") }),
                                        h = se("div", de(t.config.selectors.progress));
                                    if (h.appendChild(r.call(t, "seek", { id: "plyr-seek-".concat(e.id) })), h.appendChild(o.call(t, "buffer")), t.config.tooltips.seek) {
                                        var p = se("span", { class: t.config.classNames.tooltip }, "00:00");
                                        h.appendChild(p), t.elements.display.seekTooltip = p
                                    }
                                    t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l)
                                }
                                if ("current-time" === a && u.appendChild(s.call(t, "currentTime", d)), "duration" === a && u.appendChild(s.call(t, "duration", d)), "mute" === a || "volume" === a) {
                                    var f = t.elements.volume;
                                    if (R(f) && u.contains(f) || (f = se("div", ie({}, d, { class: "".concat(d.class, " plyr__volume").trim() })), t.elements.volume = f, u.appendChild(f)), "mute" === a && f.appendChild(i.call(t, "mute")), "volume" === a) {
                                        var m = { max: 1, step: .05, value: t.config.volume };
                                        f.appendChild(r.call(t, "volume", ie(m, { id: "plyr-volume-".concat(e.id) })))
                                    }
                                }
                                if ("captions" === a && u.appendChild(i.call(t, "captions", d)), "settings" === a && !G(t.config.settings)) {
                                    var g = se("div", ie({}, d, { class: "".concat(d.class, " plyr__menu").trim(), hidden: "" }));
                                    g.appendChild(i.call(t, "settings", { "aria-haspopup": !0, "aria-controls": "plyr-settings-".concat(e.id), "aria-expanded": !1 }));
                                    var y = se("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e.id), hidden: "" }),
                                        v = se("div"),
                                        b = se("div", { id: "plyr-settings-".concat(e.id, "-home") }),
                                        w = se("div", { role: "menu" });
                                    b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(i) {
                                        var o = se("button", ie(de(t.config.selectors.buttons.settings), { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": !0, hidden: "" }));
                                        n.call(t, o, i), Z(o, "click", (function() { c.call(t, i, !1) }));
                                        var r = se("span", null, Pe(i, t.config)),
                                            s = se("span", { class: t.config.classNames.menu.value });
                                        s.innerHTML = e[i], r.appendChild(s), o.appendChild(r), w.appendChild(o);
                                        var a = se("div", { id: "plyr-settings-".concat(e.id, "-").concat(i), hidden: "" }),
                                            l = se("button", { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back") });
                                        l.appendChild(se("span", { "aria-hidden": !0 }, Pe(i, t.config))), l.appendChild(se("span", { class: t.config.classNames.hidden }, Pe("menuBack", t.config))), Z(a, "keydown", (function(e) { 37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0)) }), !1), Z(l, "click", (function() { c.call(t, "home", !1) })), a.appendChild(l), a.appendChild(se("div", { role: "menu" })), v.appendChild(a), t.elements.settings.buttons[i] = o, t.elements.settings.panels[i] = a
                                    })), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g
                                }
                                if ("pip" === a && _e.pip && u.appendChild(i.call(t, "pip", d)), "airplay" === a && _e.airplay && u.appendChild(i.call(t, "airplay", d)), "download" === a) {
                                    var _ = ie({}, d, { element: "a", href: t.download, target: "_blank" }),
                                        x = t.config.urls.download;
                                    !U(x) && t.isEmbed && ie(_, { icon: "logo-".concat(t.provider), label: t.provider }), u.appendChild(i.call(t, "download", _))
                                }
                                "fullscreen" === a && u.appendChild(i.call(t, "fullscreen", d))
                            })), this.isHTML5 && a.call(this, Te.getQualityOptions.call(this)), l.call(this), u
                        },
                        inject: function() {
                            var e = this;
                            if (this.config.loadSprite) {
                                var t = Re.getIconUrl.call(this);
                                t.cors && Ne(t.url, "sprite-plyr")
                            }
                            this.id = Math.floor(1e4 * Math.random());
                            var n = null;
                            this.elements.controls = null;
                            var i = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
                                o = !0;
                            H(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), R(this.config.controls) || N(this.config.controls) ? n = this.config.controls : (n = Re.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: We.getLabel.call(this) }), o = !1);
                            var s, a = function(e) {
                                var t = e;
                                return Object.entries(i).forEach((function(e) {
                                    var n = r(e, 2),
                                        i = n[0],
                                        o = n[1];
                                    t = Me(t, "{".concat(i, "}"), o)
                                })), t
                            };
                            if (o && (N(this.config.controls) ? n = a(n) : R(n) && (n.innerHTML = a(n.innerHTML))), N(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), R(s) || (s = this.elements.container), s[R(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), R(this.elements.controls) || Re.findElements.call(this), !G(this.elements.buttons)) {
                                var l = function(t) {
                                    var n = e.config.classNames.controlPressed;
                                    Object.defineProperty(t, "pressed", {
                                        enumerable: !0,
                                        get: function() { return fe(t, n) },
                                        set: function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                            pe(t, n, e)
                                        }
                                    })
                                };
                                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) { q(e) || z(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e) }))
                            }
                            if ($.isEdge && Y(s), this.config.tooltips.controls) {
                                var c = this.config,
                                    u = c.classNames,
                                    d = c.selectors,
                                    h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                                    p = ge.call(this, h);
                                Array.from(p).forEach((function(t) { pe(t, e.config.classNames.hidden, !1), pe(t, e.config.classNames.tooltip, !0) }))
                            }
                        }
                    };

                    function Ve(e) {
                        var t = e;
                        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
                            var n = document.createElement("a");
                            n.href = t, t = n.href
                        }
                        try { return new URL(t) } catch (e) { return null }
                    }

                    function Be(e) {
                        var t = new URLSearchParams;
                        return I(e) && Object.entries(e).forEach((function(e) {
                            var n = r(e, 2),
                                i = n[0],
                                o = n[1];
                            t.set(i, o)
                        })), t
                    }
                    var We = {
                            setup: function() {
                                if (this.supported.ui)
                                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !_e.textTracks) q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Re.setCaptionsMenu.call(this);
                                    else {
                                        if (R(this.elements.captions) || (this.elements.captions = se("div", de(this.config.selectors.captions)), function(e, t) { R(e) && R(t) && t.parentNode.insertBefore(e, t.nextSibling) }(this.elements.captions, this.elements.wrapper)), $.isIE && window.URL) {
                                            var e = this.media.querySelectorAll("track");
                                            Array.from(e).forEach((function(e) {
                                                var t = e.getAttribute("src"),
                                                    n = Ve(t);
                                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && De(t, "blob").then((function(t) { e.setAttribute("src", window.URL.createObjectURL(t)) })).catch((function() { le(e) }))
                                            }))
                                        }
                                        var t = Ae((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) { return e.split("-")[0] }))),
                                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                        "auto" === n && (n = r(t, 1)[0]);
                                        var i = this.storage.get("captions");
                                        if (F(i) || (i = this.config.captions.active), Object.assign(this.captions, { toggled: !1, active: i, language: n, languages: t }), this.isHTML5) {
                                            var o = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                            Z.call(this, this.media.textTracks, o, We.update.bind(this))
                                        }
                                        setTimeout(We.update.bind(this), 0)
                                    }
                            },
                            update: function() {
                                var e = this,
                                    t = We.getTracks.call(this, !0),
                                    n = this.captions,
                                    i = n.active,
                                    o = n.language,
                                    r = n.meta,
                                    s = n.currentTrackNode,
                                    a = Boolean(t.find((function(e) { return e.language === o })));
                                this.isHTML5 && this.isVideo && t.filter((function(e) { return !r.get(e) })).forEach((function(t) { e.debug.log("Track added", t), r.set(t, { default: "showing" === t.mode }), t.mode = "hidden", Z.call(e, t, "cuechange", (function() { return We.updateCues.call(e) })) })), (a && this.language !== o || !t.includes(s)) && (We.setLanguage.call(this, o), We.toggle.call(this, i && a)), pe(this.elements.container, this.config.classNames.captions.enabled, !G(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && Re.setCaptionsMenu.call(this)
                            },
                            toggle: function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (this.supported.ui) {
                                    var n = this.captions.toggled,
                                        i = this.config.classNames.captions.active,
                                        o = P(e) ? !n : e;
                                    if (o !== n) {
                                        if (t || (this.captions.active = o, this.storage.set({ captions: o })), !this.language && o && !t) {
                                            var r = We.getTracks.call(this),
                                                a = We.findTrack.call(this, [this.captions.language].concat(s(this.captions.languages)), !0);
                                            return this.captions.language = a.language, void We.set.call(this, r.indexOf(a))
                                        }
                                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), pe(this.elements.container, i, o), this.captions.toggled = o, Re.updateSetting.call(this, "captions"), te.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                                    }
                                }
                            },
                            set: function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    n = We.getTracks.call(this);
                                if (-1 !== e)
                                    if (D(e))
                                        if (e in n) {
                                            if (this.captions.currentTrack !== e) {
                                                this.captions.currentTrack = e;
                                                var i = n[e],
                                                    o = (i || {}).language;
                                                this.captions.currentTrackNode = i, Re.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({ language: o })), this.isVimeo && this.embed.enableTextTrack(o), te.call(this, this.media, "languagechange")
                                            }
                                            We.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && We.updateCues.call(this)
                                        } else this.debug.warn("Track not found", e);
                                else this.debug.warn("Invalid caption argument", e);
                                else We.toggle.call(this, !1, t)
                            },
                            setLanguage: function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (N(e)) {
                                    var n = e.toLowerCase();
                                    this.captions.language = n;
                                    var i = We.getTracks.call(this),
                                        o = We.findTrack.call(this, [n]);
                                    We.set.call(this, i.indexOf(o), t)
                                } else this.debug.warn("Invalid language argument", e)
                            },
                            getTracks: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return Array.from((this.media || {}).textTracks || []).filter((function(n) { return !e.isHTML5 || t || e.captions.meta.has(n) })).filter((function(e) { return ["captions", "subtitles"].includes(e.kind) }))
                            },
                            findTrack: function(e) {
                                var t, n = this,
                                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    o = We.getTracks.call(this),
                                    r = function(e) { return Number((n.captions.meta.get(e) || {}).default) },
                                    s = Array.from(o).sort((function(e, t) { return r(t) - r(e) }));
                                return e.every((function(e) { return !(t = s.find((function(t) { return t.language === e }))) })), t || (i ? s[0] : void 0)
                            },
                            getCurrentTrack: function() { return We.getTracks.call(this)[this.currentTrack] },
                            getLabel: function(e) { var t = e; return !W(t) && _e.textTracks && this.captions.toggled && (t = We.getCurrentTrack.call(this)), W(t) ? G(t.label) ? G(t.language) ? Pe("enabled", this.config) : e.language.toUpperCase() : t.label : Pe("disabled", this.config) },
                            updateCues: function(e) {
                                if (this.supported.ui)
                                    if (R(this.elements.captions))
                                        if (P(e) || Array.isArray(e)) {
                                            var t = e;
                                            if (!t) {
                                                var n = We.getCurrentTrack.call(this);
                                                t = Array.from((n || {}).activeCues || []).map((function(e) { return e.getCueAsHTML() })).map(Oe)
                                            }
                                            var i = t.map((function(e) { return e.trim() })).join("\n");
                                            if (i !== this.elements.captions.innerHTML) {
                                                ce(this.elements.captions);
                                                var o = se("span", de(this.config.selectors.caption));
                                                o.innerHTML = i, this.elements.captions.appendChild(o), te.call(this, this.media, "cuechange")
                                            }
                                        } else this.debug.warn("updateCues: Invalid input", e);
                                else this.debug.warn("No captions element to render to")
                            }
                        },
                        Ue = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, playsinline: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: null, clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.5.6/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/v2/video/{0}.json" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus", previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, ads: { enabled: !1, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: !1, src: "" }, vimeo: { byline: !1, portrait: !1, title: !1, speed: !0, transparent: !1 }, youtube: { noCookie: !1, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 } },
                        Ge = "picture-in-picture",
                        Ke = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
                        Ye = "audio",
                        $e = "video",
                        Je = function() {},
                        Xe = function() {
                            function e() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                t(this, e), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
                            }
                            return i(e, [{ key: "log", get: function() { return this.enabled ? Function.prototype.bind.call(console.log, console) : Je } }, { key: "warn", get: function() { return this.enabled ? Function.prototype.bind.call(console.warn, console) : Je } }, { key: "error", get: function() { return this.enabled ? Function.prototype.bind.call(console.error, console) : Je } }]), e
                        }();

                    function Ze() {
                        if (this.enabled) {
                            var e = this.player.elements.buttons.fullscreen;
                            R(e) && (e.pressed = this.active), te.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), $.isIos || function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (R(e)) {
                                    var n = ge.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                                        i = n[0],
                                        o = n[n.length - 1];
                                    X.call(this, this.elements.container, "keydown", (function(e) {
                                        if ("Tab" === e.key && 9 === e.keyCode) {
                                            var t = document.activeElement;
                                            t !== o || e.shiftKey ? t === i && e.shiftKey && (o.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                                        }
                                    }), t, !1)
                                }
                            }.call(this.player, this.target, this.active)
                        }
                    }

                    function Qe() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", pe(this.target, this.player.config.classNames.fullscreen.fallback, e), $.isIos) {
                            var t = document.head.querySelector('meta[name="viewport"]'),
                                n = "viewport-fit=cover";
                            t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                            var i = N(t.content) && t.content.includes(n);
                            e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) { return e.trim() !== n })).join(","))
                        }
                        Ze.call(this)
                    }
                    var et = function() {
                        function e(n) {
                            var i = this;
                            t(this, e), this.player = n, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === n.config.fullscreen.fallback, Z.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() { Ze.call(i) })), Z.call(this.player, this.player.elements.container, "dblclick", (function(e) { R(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle() })), this.update()
                        }
                        return i(e, [{
                            key: "update",
                            value: function() {
                                var t;
                                this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), pe(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                            }
                        }, { key: "enter", value: function() { this.enabled && ($.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? Qe.call(this, !0) : this.prefix ? G(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen()) } }, {
                            key: "exit",
                            value: function() {
                                if (this.enabled)
                                    if ($.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                                    else if (!e.native || this.forceFallback) Qe.call(this, !1);
                                else if (this.prefix) {
                                    if (!G(this.prefix)) {
                                        var t = "moz" === this.prefix ? "Cancel" : "Exit";
                                        document["".concat(this.prefix).concat(t).concat(this.property)]()
                                    }
                                } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                            }
                        }, { key: "toggle", value: function() { this.active ? this.exit() : this.enter() } }, { key: "usingNative", get: function() { return e.native && !this.forceFallback } }, { key: "enabled", get: function() { return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo } }, { key: "active", get: function() { return !!this.enabled && (!e.native || this.forceFallback ? fe(this.target, this.player.config.classNames.fullscreen.fallback) : (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target) } }, { key: "target", get: function() { return $.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container } }], [{ key: "native", get: function() { return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) } }, { key: "prefix", get: function() { if (H(document.exitFullscreen)) return ""; var e = ""; return ["webkit", "moz", "ms"].some((function(t) { return !(!H(document["".concat(t, "ExitFullscreen")]) && !H(document["".concat(t, "CancelFullScreen")]) || (e = t, 0)) })), e } }, { key: "property", get: function() { return "moz" === this.prefix ? "FullScreen" : "Fullscreen" } }]), e
                    }();

                    function tt(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return new Promise((function(n, i) {
                            var o = new Image,
                                r = function() { delete o.onload, delete o.onerror, (o.naturalWidth >= t ? n : i)(o) };
                            Object.assign(o, { onload: r, onerror: r, src: e })
                        }))
                    }
                    var nt = {
                            addStyleHook: function() { pe(this.elements.container, this.config.selectors.container.replace(".", ""), !0), pe(this.elements.container, this.config.classNames.uiSupported, this.supported.ui) },
                            toggleNativeControls: function() { arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls") },
                            build: function() {
                                var e = this;
                                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void nt.toggleNativeControls.call(this, !0);
                                R(this.elements.controls) || (Re.inject.call(this), this.listeners.controls()), nt.toggleNativeControls.call(this), this.isHTML5 && We.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Re.updateVolume.call(this), Re.timeUpdate.call(this), nt.checkPlaying.call(this), pe(this.elements.container, this.config.classNames.pip.supported, _e.pip && this.isHTML5 && this.isVideo), pe(this.elements.container, this.config.classNames.airplay.supported, _e.airplay && this.isHTML5), pe(this.elements.container, this.config.classNames.isIos, $.isIos), pe(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() { te.call(e, e.media, "ready") }), 0), nt.setTitle.call(this), this.poster && nt.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && Re.durationUpdate.call(this)
                            },
                            setTitle: function() {
                                var e = Pe("play", this.config);
                                if (N(this.config.title) && !G(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) { t.setAttribute("aria-label", e) })), this.isEmbed) {
                                    var t = ye.call(this, "iframe");
                                    if (!R(t)) return;
                                    var n = G(this.config.title) ? "video" : this.config.title,
                                        i = Pe("frameTitle", this.config);
                                    t.setAttribute("title", i.replace("{title}", n))
                                }
                            },
                            togglePoster: function(e) { pe(this.elements.container, this.config.classNames.posterEnabled, e) },
                            setPoster: function(e) { var t = this; return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function() { var e = this; return new Promise((function(t) { return e.ready ? setTimeout(t, 0) : Z.call(e, e.elements.container, "ready", t) })).then((function() {})) }.call(this).then((function() { return tt(e) })).catch((function(n) { throw e === t.poster && nt.togglePoster.call(t, !1), n })).then((function() { if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster") })).then((function() { return Object.assign(t.elements.poster.style, { backgroundImage: "url('".concat(e, "')"), backgroundSize: "" }), nt.togglePoster.call(t, !0), e }))) : Promise.reject(new Error("Poster already set")) },
                            checkPlaying: function(e) {
                                var t = this;
                                pe(this.elements.container, this.config.classNames.playing, this.playing), pe(this.elements.container, this.config.classNames.paused, this.paused), pe(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) { Object.assign(e, { pressed: t.playing }) })), V(e) && "timeupdate" === e.type || nt.toggleControls.call(this)
                            },
                            checkLoading: function(e) {
                                var t = this;
                                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() { pe(t.elements.container, t.config.classNames.loading, t.loading), nt.toggleControls.call(t) }), this.loading ? 250 : 0)
                            },
                            toggleControls: function(e) {
                                var t = this.elements.controls;
                                if (t && this.config.hideControls) {
                                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                                }
                            }
                        },
                        it = function() {
                            function e(n) { t(this, e), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this) }
                            return i(e, [{
                                key: "handleKey",
                                value: function(e) {
                                    var t = this.player,
                                        n = t.elements,
                                        i = e.keyCode ? e.keyCode : e.which,
                                        o = "keydown" === e.type,
                                        r = o && i === this.lastKey;
                                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && D(i))
                                        if (o) {
                                            var s = document.activeElement;
                                            if (R(s)) { var a = t.config.selectors.editable; if (s !== n.inputs.seek && me(s, a)) return; if (32 === e.which && me(s, 'button, [role^="menuitem"]')) return }
                                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                                case 48:
                                                case 49:
                                                case 50:
                                                case 51:
                                                case 52:
                                                case 53:
                                                case 54:
                                                case 55:
                                                case 56:
                                                case 57:
                                                    r || (t.currentTime = t.duration / 10 * (i - 48));
                                                    break;
                                                case 32:
                                                case 75:
                                                    r || t.togglePlay();
                                                    break;
                                                case 38:
                                                    t.increaseVolume(.1);
                                                    break;
                                                case 40:
                                                    t.decreaseVolume(.1);
                                                    break;
                                                case 77:
                                                    r || (t.muted = !t.muted);
                                                    break;
                                                case 39:
                                                    t.forward();
                                                    break;
                                                case 37:
                                                    t.rewind();
                                                    break;
                                                case 70:
                                                    t.fullscreen.toggle();
                                                    break;
                                                case 67:
                                                    r || t.toggleCaptions();
                                                    break;
                                                case 76:
                                                    t.loop = !t.loop
                                            }
                                            27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
                                        } else this.lastKey = null
                                }
                            }, { key: "toggleMenu", value: function(e) { Re.toggleMenu.call(this.player, e) } }, {
                                key: "firstTouch",
                                value: function() {
                                    var e = this.player,
                                        t = e.elements;
                                    e.touch = !0, pe(t.container, e.config.classNames.isTouch, !0)
                                }
                            }, {
                                key: "setTabFocus",
                                value: function(e) {
                                    var t = this.player,
                                        n = t.elements;
                                    if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                                        "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                                        var i, o = e.timeStamp - this.lastKeyDown <= 20;
                                        ("focus" !== e.type || o) && (i = t.config.classNames.tabFocus, pe(ge.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout((function() {
                                            var e = document.activeElement;
                                            n.container.contains(e) && pe(document.activeElement, t.config.classNames.tabFocus, !0)
                                        }), 10))
                                    }
                                }
                            }, {
                                key: "global",
                                value: function() {
                                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                        t = this.player;
                                    t.config.keyboard.global && X.call(t, window, "keydown keyup", this.handleKey, e, !1), X.call(t, document.body, "click", this.toggleMenu, e), ee.call(t, document.body, "touchstart", this.firstTouch), X.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
                                }
                            }, {
                                key: "container",
                                value: function() {
                                    var e = this.player,
                                        t = e.config,
                                        n = e.elements,
                                        i = e.timers;
                                    !t.keyboard.global && t.keyboard.focused && Z.call(e, n.container, "keydown keyup", this.handleKey, !1), Z.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                                        var o = n.controls;
                                        o && "enterfullscreen" === t.type && (o.pressed = !1, o.hover = !1);
                                        var r = 0;
                                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (nt.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() { return nt.toggleControls.call(e, !1) }), r)
                                    }));
                                    var o = function(t) {
                                            if (!t) return Se.call(e);
                                            var i = n.container.getBoundingClientRect(),
                                                o = i.width,
                                                r = i.height;
                                            return Se.call(e, "".concat(o, ":").concat(r))
                                        },
                                        s = function() { clearTimeout(i.resized), i.resized = setTimeout(o, 50) };
                                    Z.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                                        var i = e.fullscreen,
                                            a = i.target,
                                            l = i.usingNative;
                                        if (a === n.container && (e.isEmbed || !G(e.config.ratio))) {
                                            var c = "enterfullscreen" === t.type,
                                                u = o(c);
                                            u.padding,
                                                function(t, n, i) {
                                                    if (e.isVimeo) {
                                                        var o = e.elements.wrapper.firstChild,
                                                            s = r(t, 2)[1],
                                                            a = r(je.call(e), 2),
                                                            l = a[0],
                                                            c = a[1];
                                                        o.style.maxWidth = i ? "".concat(s / c * l, "px") : null, o.style.margin = i ? "0 auto" : null
                                                    }
                                                }(u.ratio, 0, c), l || (c ? Z.call(e, window, "resize", s) : Q.call(e, window, "resize", s))
                                        }
                                    }))
                                }
                            }, {
                                key: "media",
                                value: function() {
                                    var e = this,
                                        t = this.player,
                                        n = t.elements;
                                    if (Z.call(t, t.media, "timeupdate seeking seeked", (function(e) { return Re.timeUpdate.call(t, e) })), Z.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) { return Re.durationUpdate.call(t, e) })), Z.call(t, t.media, "canplay loadeddata", (function() { he(n.volume, !t.hasAudio), he(n.buttons.mute, !t.hasAudio) })), Z.call(t, t.media, "ended", (function() { t.isHTML5 && t.isVideo && t.config.resetOnEnd && t.restart() })), Z.call(t, t.media, "progress playing seeking seeked", (function(e) { return Re.updateProgress.call(t, e) })), Z.call(t, t.media, "volumechange", (function(e) { return Re.updateVolume.call(t, e) })), Z.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) { return nt.checkPlaying.call(t, e) })), Z.call(t, t.media, "waiting canplay seeked playing", (function(e) { return nt.checkLoading.call(t, e) })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                        var i = ye.call(t, ".".concat(t.config.classNames.video));
                                        if (!R(i)) return;
                                        Z.call(t, n.container, "click", (function(o) {
                                            ([n.container, i].includes(o.target) || i.contains(o.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(o, t.restart, "restart"), e.proxy(o, t.play, "play")) : e.proxy(o, t.togglePlay, "play")))
                                        }))
                                    }
                                    t.supported.ui && t.config.disableContextMenu && Z.call(t, n.wrapper, "contextmenu", (function(e) { e.preventDefault() }), !1), Z.call(t, t.media, "volumechange", (function() { t.storage.set({ volume: t.volume, muted: t.muted }) })), Z.call(t, t.media, "ratechange", (function() { Re.updateSetting.call(t, "speed"), t.storage.set({ speed: t.speed }) })), Z.call(t, t.media, "qualitychange", (function(e) { Re.updateSetting.call(t, "quality", null, e.detail.quality) })), Z.call(t, t.media, "ready qualitychange", (function() { Re.setDownloadUrl.call(t) }));
                                    var o = t.config.events.concat(["keyup", "keydown"]).join(" ");
                                    Z.call(t, t.media, o, (function(e) {
                                        var i = e.detail,
                                            o = void 0 === i ? {} : i;
                                        "error" === e.type && (o = t.media.error), te.call(t, n.container, e.type, !0, o)
                                    }))
                                }
                            }, {
                                key: "proxy",
                                value: function(e, t, n) {
                                    var i = this.player,
                                        o = i.config.listeners[n],
                                        r = !0;
                                    H(o) && (r = o.call(i, e)), r && H(t) && t.call(i, e)
                                }
                            }, {
                                key: "bind",
                                value: function(e, t, n, i) {
                                    var o = this,
                                        r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                        s = this.player,
                                        a = s.config.listeners[i],
                                        l = H(a);
                                    Z.call(s, e, t, (function(e) { return o.proxy(e, n, i) }), r && !l)
                                }
                            }, {
                                key: "controls",
                                value: function() {
                                    var e = this,
                                        t = this.player,
                                        n = t.elements,
                                        i = $.isIE ? "change" : "input";
                                    if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) { e.bind(n, "click", t.togglePlay, "play") })), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", (function() { t.muted = !t.muted }), "mute"), this.bind(n.buttons.captions, "click", (function() { return t.toggleCaptions() })), this.bind(n.buttons.download, "click", (function() { te.call(t, t.media, "download") }), "download"), this.bind(n.buttons.fullscreen, "click", (function() { t.fullscreen.toggle() }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() { t.pip = "toggle" }), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) { e.stopPropagation(), Re.toggleMenu.call(t, e) })), this.bind(n.buttons.settings, "keyup", (function(e) {
                                            var n = e.which;
                                            [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), Re.toggleMenu.call(t, e)) : Re.focusFirstMenuItem.call(t, null, !0))
                                        }), null, !1), this.bind(n.settings.menu, "keydown", (function(e) { 27 === e.which && Re.toggleMenu.call(t, e) })), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                                            var t = n.progress.getBoundingClientRect(),
                                                i = 100 / t.width * (e.pageX - t.left);
                                            e.currentTarget.setAttribute("seek-value", i)
                                        })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                                            var n = e.currentTarget,
                                                i = e.keyCode ? e.keyCode : e.which;
                                            if (!B(e) || 39 === i || 37 === i) {
                                                t.lastSeekTime = Date.now();
                                                var o = n.hasAttribute("play-on-seeked"),
                                                    r = ["mouseup", "touchend", "keyup"].includes(e.type);
                                                o && r ? (n.removeAttribute("play-on-seeked"), t.play()) : !r && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
                                            }
                                        })), $.isIos) {
                                        var o = ge.call(t, 'input[type="range"]');
                                        Array.from(o).forEach((function(t) { return e.bind(t, i, (function(e) { return Y(e.target) })) }))
                                    }
                                    this.bind(n.inputs.seek, i, (function(e) {
                                        var n = e.currentTarget,
                                            i = n.getAttribute("seek-value");
                                        G(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                                    }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) { return Re.updateSeekTooltip.call(t, e) })), this.bind(n.progress, "mousemove touchmove", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.startMove(e)
                                    })), this.bind(n.progress, "mouseleave click", (function() {
                                        var e = t.previewThumbnails;
                                        e && e.loaded && e.endMove(!1, !0)
                                    })), this.bind(n.progress, "mousedown touchstart", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.startScrubbing(e)
                                    })), this.bind(n.progress, "mouseup touchend", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.endScrubbing(e)
                                    })), $.isWebkit && Array.from(ge.call(t, 'input[type="range"]')).forEach((function(n) { e.bind(n, "input", (function(e) { return Re.updateRangeFill.call(t, e.target) })) })), t.config.toggleInvert && !R(n.display.duration) && this.bind(n.display.currentTime, "click", (function() { 0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, Re.timeUpdate.call(t)) })), this.bind(n.inputs.volume, i, (function(e) { t.volume = e.target.value }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) { n.controls.hover = !t.touch && "mouseenter" === e.type })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) { n.controls.pressed = ["mousedown", "touchstart"].includes(e.type) })), this.bind(n.controls, "focusin", (function() {
                                        var i = t.config,
                                            o = t.timers;
                                        pe(n.controls, i.classNames.noTransition, !0), nt.toggleControls.call(t, !0), setTimeout((function() { pe(n.controls, i.classNames.noTransition, !1) }), 0);
                                        var r = e.touch ? 3e3 : 4e3;
                                        clearTimeout(o.controls), o.controls = setTimeout((function() { return nt.toggleControls.call(t, !1) }), r)
                                    })), this.bind(n.inputs.volume, "wheel", (function(e) {
                                        var n = e.webkitDirectionInvertedFromDevice,
                                            i = r([e.deltaX, -e.deltaY].map((function(e) { return n ? -e : e })), 2),
                                            o = i[0],
                                            s = i[1],
                                            a = Math.sign(Math.abs(o) > Math.abs(s) ? o : s);
                                        t.increaseVolume(a / 50);
                                        var l = t.media.volume;
                                        (1 === a && l < 1 || -1 === a && l > 0) && e.preventDefault()
                                    }), "volume", !1)
                                }
                            }]), e
                        }();
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
                    var ot = function(e, t) {
                        return function(e, t) {
                            e.exports = function() {
                                var e = function() {},
                                    t = {},
                                    n = {},
                                    i = {};

                                function o(e, t) {
                                    if (e) {
                                        var o = i[e];
                                        if (n[e] = t, o)
                                            for (; o.length;) o[0](e, t), o.splice(0, 1)
                                    }
                                }

                                function r(t, n) { t.call && (t = { success: t }), n.length ? (t.error || e)(n) : (t.success || e)(t) }

                                function s(t, n, i, o) {
                                    var r, a, l = document,
                                        c = i.async,
                                        u = (i.numRetries || 0) + 1,
                                        d = i.before || e,
                                        h = t.replace(/^(css|img)!/, "");
                                    o = o || 0, /(^css!|\.css$)/.test(t) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = h, (r = "hideFocus" in a) && a.relList && (r = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function(e) {
                                        var l = e.type[0];
                                        if (r) try { a.sheet.cssText.length || (l = "e") } catch (e) { 18 != e.code && (l = "e") }
                                        if ("e" == l) { if ((o += 1) < u) return s(t, n, i, o) } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                                        n(t, l, e.defaultPrevented)
                                    }, !1 !== d(t, a) && l.head.appendChild(a)
                                }

                                function a(e, n, i) {
                                    var a, l;
                                    if (n && n.trim && (a = n), l = (a ? i : n) || {}, a) {
                                        if (a in t) throw "LoadJS";
                                        t[a] = !0
                                    }

                                    function c(t, n) {
                                        ! function(e, t, n) {
                                            var i, o, r = (e = e.push ? e : [e]).length,
                                                a = r,
                                                l = [];
                                            for (i = function(e, n, i) {
                                                    if ("e" == n && l.push(e), "b" == n) {
                                                        if (!i) return;
                                                        l.push(e)
                                                    }--r || t(l)
                                                }, o = 0; o < a; o++) s(e[o], i, n)
                                        }(e, (function(e) { r(l, e), t && r({ success: t, error: n }, e), o(a, e) }), l)
                                    }
                                    if (l.returnPromise) return new Promise(c);
                                    c()
                                }
                                return a.ready = function(e, t) {
                                    return function(e, t) {
                                        e = e.push ? e : [e];
                                        var o, r, s, a = [],
                                            l = e.length,
                                            c = l;
                                        for (o = function(e, n) { n.length && a.push(e), --c || t(a) }; l--;) r = e[l], (s = n[r]) ? o(r, s) : (i[r] = i[r] || []).push(o)
                                    }(e, (function(e) { r(t, e) })), a
                                }, a.done = function(e) { o(e, []) }, a.reset = function() { t = {}, n = {}, i = {} }, a.isDefined = function(e) { return e in t }, a
                            }()
                        }(t = { exports: {} }), t.exports
                    }();

                    function rt(e) { return new Promise((function(t, n) { ot(e, { success: t, error: n }) })) }

                    function st(e) { e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, te.call(this, this.media, e ? "play" : "pause")) }
                    var at = {
                        setup: function() {
                            var e = this;
                            pe(this.elements.wrapper, this.config.classNames.embed, !0), Se.call(this), I(window.Vimeo) ? at.ready.call(this) : rt(this.config.urls.vimeo.sdk).then((function() { at.ready.call(e) })).catch((function(t) { e.debug.warn("Vimeo SDK (player.js) failed to load", t) }))
                        },
                        ready: function() {
                            var e = this,
                                t = this,
                                n = t.config.vimeo,
                                i = Be(ie({}, { loop: t.config.loop.active, autoplay: t.autoplay, muted: t.muted, gesture: "media", playsinline: !this.config.fullscreen.iosNative }, n)),
                                o = t.media.getAttribute("src");
                            G(o) && (o = t.media.getAttribute(t.config.attributes.embed.id));
                            var s, a = G(s = o) ? null : D(Number(s)) ? s : s.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : s,
                                l = se("iframe"),
                                c = Ee(t.config.urls.vimeo.iframe, a, i);
                            l.setAttribute("src", c), l.setAttribute("allowfullscreen", ""), l.setAttribute("allowtransparency", ""), l.setAttribute("allow", "autoplay");
                            var u = se("div", { poster: t.poster, class: t.config.classNames.embedContainer });
                            u.appendChild(l), t.media = ue(u, t.media), De(Ee(t.config.urls.vimeo.api, a), "json").then((function(e) {
                                if (!G(e)) {
                                    var n = new URL(e[0].thumbnail_large);
                                    n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), nt.setPoster.call(t, n.href).catch((function() {}))
                                }
                            })), t.embed = new window.Vimeo.Player(l, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() { return st.call(t, !0), t.embed.play() }, t.media.pause = function() { return st.call(t, !1), t.embed.pause() }, t.media.stop = function() { t.pause(), t.currentTime = 0 };
                            var d = t.media.currentTime;
                            Object.defineProperty(t.media, "currentTime", {
                                get: function() { return d },
                                set: function(e) {
                                    var n = t.embed,
                                        i = t.media,
                                        o = t.paused,
                                        r = t.volume,
                                        s = o && !n.hasPlayed;
                                    i.seeking = !0, te.call(t, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then((function() { return n.setCurrentTime(e) })).then((function() { return s && n.pause() })).then((function() { return s && n.setVolume(r) })).catch((function() {}))
                                }
                            });
                            var h = t.config.speed.selected;
                            Object.defineProperty(t.media, "playbackRate", { get: function() { return h }, set: function(e) { t.embed.setPlaybackRate(e).then((function() { h = e, te.call(t, t.media, "ratechange") })).catch((function(e) { "Error" === e.name && Re.setSpeedMenu.call(t, []) })) } });
                            var p = t.config.volume;
                            Object.defineProperty(t.media, "volume", { get: function() { return p }, set: function(e) { t.embed.setVolume(e).then((function() { p = e, te.call(t, t.media, "volumechange") })) } });
                            var f = t.config.muted;
                            Object.defineProperty(t.media, "muted", {
                                get: function() { return f },
                                set: function(e) {
                                    var n = !!F(e) && e;
                                    t.embed.setVolume(n ? 0 : t.config.volume).then((function() { f = n, te.call(t, t.media, "volumechange") }))
                                }
                            });
                            var m, g = t.config.loop;
                            Object.defineProperty(t.media, "loop", {
                                get: function() { return g },
                                set: function(e) {
                                    var n = F(e) ? e : t.config.loop.active;
                                    t.embed.setLoop(n).then((function() { g = n }))
                                }
                            }), t.embed.getVideoUrl().then((function(e) { m = e, Re.setDownloadUrl.call(t) })).catch((function(t) { e.debug.warn(t) })), Object.defineProperty(t.media, "currentSrc", { get: function() { return m } }), Object.defineProperty(t.media, "ended", { get: function() { return t.currentTime === t.duration } }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                                var i = r(n, 2),
                                    o = i[0],
                                    s = i[1];
                                t.embed.ratio = [o, s], Se.call(e)
                            })), t.embed.setAutopause(t.config.autopause).then((function(e) { t.config.autopause = e })), t.embed.getVideoTitle().then((function(n) { t.config.title = n, nt.setTitle.call(e) })), t.embed.getCurrentTime().then((function(e) { d = e, te.call(t, t.media, "timeupdate") })), t.embed.getDuration().then((function(e) { t.media.duration = e, te.call(t, t.media, "durationchange") })), t.embed.getTextTracks().then((function(e) { t.media.textTracks = e, We.setup.call(t) })), t.embed.on("cuechange", (function(e) {
                                var n = e.cues,
                                    i = (void 0 === n ? [] : n).map((function(e) {
                                        return function(e) {
                                            var t = document.createDocumentFragment(),
                                                n = document.createElement("div");
                                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                                        }(e.text)
                                    }));
                                We.updateCues.call(t, i)
                            })), t.embed.on("loaded", (function() { t.embed.getPaused().then((function(e) { st.call(t, !e), e || te.call(t, t.media, "playing") })), R(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1) })), t.embed.on("play", (function() { st.call(t, !0), te.call(t, t.media, "playing") })), t.embed.on("pause", (function() { st.call(t, !1) })), t.embed.on("timeupdate", (function(e) { t.media.seeking = !1, d = e.seconds, te.call(t, t.media, "timeupdate") })), t.embed.on("progress", (function(e) { t.media.buffered = e.percent, te.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && te.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) { e !== t.media.duration && (t.media.duration = e, te.call(t, t.media, "durationchange")) })) })), t.embed.on("seeked", (function() { t.media.seeking = !1, te.call(t, t.media, "seeked") })), t.embed.on("ended", (function() { t.media.paused = !0, te.call(t, t.media, "ended") })), t.embed.on("error", (function(e) { t.media.error = e, te.call(t, t.media, "error") })), setTimeout((function() { return nt.build.call(t) }), 0)
                        }
                    };

                    function lt(e) { e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, te.call(this, this.media, e ? "play" : "pause")) }

                    function ct(e) { return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0 }
                    var ut, dt = {
                            setup: function() {
                                var e = this;
                                if (pe(this.elements.wrapper, this.config.classNames.embed, !0), I(window.YT) && H(window.YT.Player)) dt.ready.call(this);
                                else {
                                    var t = window.onYouTubeIframeAPIReady;
                                    window.onYouTubeIframeAPIReady = function() { H(t) && t(), dt.ready.call(e) }, rt(this.config.urls.youtube.sdk).catch((function(t) { e.debug.warn("YouTube API failed to load", t) }))
                                }
                            },
                            getTitle: function(e) {
                                var t = this;
                                De(Ee(this.config.urls.youtube.api, e)).then((function(e) {
                                    if (I(e)) {
                                        var n = e.title,
                                            i = e.height,
                                            o = e.width;
                                        t.config.title = n, nt.setTitle.call(t), t.embed.ratio = [o, i]
                                    }
                                    Se.call(t)
                                })).catch((function() { Se.call(t) }))
                            },
                            ready: function() {
                                var e = this,
                                    t = e.media && e.media.getAttribute("id");
                                if (G(t) || !t.startsWith("youtube-")) {
                                    var n = e.media.getAttribute("src");
                                    G(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                                    var i, o, r = G(i = n) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                                        s = (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
                                        a = se("div", { id: s, poster: e.poster });
                                    e.media = ue(a, e.media);
                                    var l = function(e) { return "https://i.ytimg.com/vi/".concat(r, "/").concat(e, "default.jpg") };
                                    tt(l("maxres"), 121).catch((function() { return tt(l("sd"), 121) })).catch((function() { return tt(l("hq")) })).then((function(t) { return nt.setPoster.call(e, t.src) })).then((function(t) { t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover") })).catch((function() {}));
                                    var c = e.config.youtube;
                                    e.embed = new window.YT.Player(s, {
                                        videoId: r,
                                        host: ct(c),
                                        playerVars: ie({}, { autoplay: e.config.autoplay ? 1 : 0, hl: e.config.hl, controls: e.supported.ui ? 0 : 1, disablekb: 1, playsinline: e.config.fullscreen.iosNative ? 0 : 1, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language, widget_referrer: window ? window.location.href : null }, c),
                                        events: {
                                            onError: function(t) {
                                                if (!e.media.error) {
                                                    var n = t.data,
                                                        i = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[n] || "An unknown error occured";
                                                    e.media.error = { code: n, message: i }, te.call(e, e.media, "error")
                                                }
                                            },
                                            onPlaybackRateChange: function(t) {
                                                var n = t.target;
                                                e.media.playbackRate = n.getPlaybackRate(), te.call(e, e.media, "ratechange")
                                            },
                                            onReady: function(t) {
                                                if (!H(e.media.play)) {
                                                    var n = t.target;
                                                    dt.getTitle.call(e, r), e.media.play = function() { lt.call(e, !0), n.playVideo() }, e.media.pause = function() { lt.call(e, !1), n.pauseVideo() }, e.media.stop = function() { n.stopVideo() }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function() { return Number(n.getCurrentTime()) }, set: function(t) { e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, te.call(e, e.media, "seeking"), n.seekTo(t) } }), Object.defineProperty(e.media, "playbackRate", { get: function() { return n.getPlaybackRate() }, set: function(e) { n.setPlaybackRate(e) } });
                                                    var i = e.config.volume;
                                                    Object.defineProperty(e.media, "volume", { get: function() { return i }, set: function(t) { i = t, n.setVolume(100 * i), te.call(e, e.media, "volumechange") } });
                                                    var o = e.config.muted;
                                                    Object.defineProperty(e.media, "muted", {
                                                        get: function() { return o },
                                                        set: function(t) {
                                                            var i = F(t) ? t : o;
                                                            o = i, n[i ? "mute" : "unMute"](), te.call(e, e.media, "volumechange")
                                                        }
                                                    }), Object.defineProperty(e.media, "currentSrc", { get: function() { return n.getVideoUrl() } }), Object.defineProperty(e.media, "ended", { get: function() { return e.currentTime === e.duration } }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), te.call(e, e.media, "timeupdate"), te.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() { e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && te.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), te.call(e, e.media, "canplaythrough")) }), 200), setTimeout((function() { return nt.build.call(e) }), 50)
                                                }
                                            },
                                            onStateChange: function(t) {
                                                var n = t.target;
                                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, te.call(e, e.media, "seeked")), t.data) {
                                                    case -1:
                                                        te.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), te.call(e, e.media, "progress");
                                                        break;
                                                    case 0:
                                                        lt.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : te.call(e, e.media, "ended");
                                                        break;
                                                    case 1:
                                                        e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (lt.call(e, !0), te.call(e, e.media, "playing"), e.timers.playing = setInterval((function() { te.call(e, e.media, "timeupdate") }), 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), te.call(e, e.media, "durationchange"))) : e.media.pause();
                                                        break;
                                                    case 2:
                                                        e.muted || e.embed.unMute(), lt.call(e, !1)
                                                }
                                                te.call(e, e.elements.container, "statechange", !1, { code: t.data })
                                            }
                                        }
                                    })
                                }
                            }
                        },
                        ht = { setup: function() { this.media ? (pe(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), pe(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && pe(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = se("div", { class: this.config.classNames.video }), oe(this.media, this.elements.wrapper), this.elements.poster = se("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Te.extend.call(this) : this.isYouTube ? dt.setup.call(this) : this.isVimeo && at.setup.call(this)) : this.debug.warn("No media element found!") } },
                        pt = function() {
                            function e(n) {
                                var i = this;
                                t(this, e), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) { i.on("loaded", e), i.on("error", t) })), this.load()
                            }
                            return i(e, [{
                                key: "load",
                                value: function() {
                                    var e = this;
                                    this.enabled && (I(window.google) && I(window.google.ima) ? this.ready() : rt(this.player.config.urls.googleIMA.sdk).then((function() { e.ready() })).catch((function() { e.trigger("error", new Error("Google IMA SDK failed to load")) })))
                                }
                            }, {
                                key: "ready",
                                value: function() {
                                    var e, t = this;
                                    this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() { t.clearSafetyTimer("onAdsManagerLoaded()") })), this.listeners(), this.setupIMA()
                                }
                            }, { key: "setupIMA", value: function() { this.elements.container = se("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.requestAds() } }, {
                                key: "requestAds",
                                value: function() {
                                    var e = this,
                                        t = this.player.elements.container;
                                    try {
                                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) { return e.onAdsManagerLoaded(t) }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) { return e.onAdError(t) }), !1);
                                        var n = new google.ima.AdsRequest;
                                        n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                                    } catch (e) { this.onAdError(e) }
                                }
                            }, {
                                key: "pollCountdown",
                                value: function() {
                                    var e = this;
                                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                                    this.countdownTimer = setInterval((function() {
                                        var t = ze(Math.max(e.manager.getRemainingTime(), 0)),
                                            n = "".concat(Pe("advertisement", e.player.config), " - ").concat(t);
                                        e.elements.container.setAttribute("data-badge-text", n)
                                    }), 100)
                                }
                            }, {
                                key: "onAdsManagerLoaded",
                                value: function(e) {
                                    var t = this;
                                    if (this.enabled) {
                                        var n = new google.ima.AdsRenderingSettings;
                                        n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) { return t.onAdError(e) })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) { t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) { return t.onAdEvent(e) })) })), this.trigger("loaded")
                                    }
                                }
                            }, {
                                key: "addCuePoints",
                                value: function() {
                                    var e = this;
                                    G(this.cuePoints) || this.cuePoints.forEach((function(t) {
                                        if (0 !== t && -1 !== t && t < e.player.duration) {
                                            var n = e.player.elements.progress;
                                            if (R(n)) {
                                                var i = 100 / e.player.duration * t,
                                                    o = se("span", { class: e.player.config.classNames.cues });
                                                o.style.left = "".concat(i.toString(), "%"), n.appendChild(o)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "onAdEvent",
                                value: function(e) {
                                    var t = this,
                                        n = this.player.elements.container,
                                        i = e.getAd(),
                                        o = e.getAdData();
                                    switch (function(e) { te.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase())) }(e.type), e.type) {
                                        case google.ima.AdEvent.Type.LOADED:
                                            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                            break;
                                        case google.ima.AdEvent.Type.STARTED:
                                            this.manager.setVolume(this.player.volume);
                                            break;
                                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                            this.loadAds();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                            this.pauseContent();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                            this.pollCountdown(), this.resumeContent();
                                            break;
                                        case google.ima.AdEvent.Type.LOG:
                                            o.adError && this.player.debug.warn("Non-fatal ad error: ".concat(o.adError.getMessage()))
                                    }
                                }
                            }, { key: "onAdError", value: function(e) { this.cancel(), this.player.debug.warn("Ads error", e) } }, {
                                key: "listeners",
                                value: function() {
                                    var e, t = this,
                                        n = this.player.elements.container;
                                    this.player.on("canplay", (function() { t.addCuePoints() })), this.player.on("ended", (function() { t.loader.contentComplete() })), this.player.on("timeupdate", (function() { e = t.player.currentTime })), this.player.on("seeked", (function() {
                                        var n = t.player.currentTime;
                                        G(t.cuePoints) || t.cuePoints.forEach((function(i, o) { e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(o, 1)) }))
                                    })), window.addEventListener("resize", (function() { t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL) }))
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var e = this,
                                        t = this.player.elements.container;
                                    this.managerPromise || this.resumeContent(), this.managerPromise.then((function() { e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize(); try { e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0 } catch (t) { e.onAdError(t) } })).catch((function() {}))
                                }
                            }, { key: "resumeContent", value: function() { this.elements.container.style.zIndex = "", this.playing = !1, this.player.media.play() } }, { key: "pauseContent", value: function() { this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause() } }, { key: "cancel", value: function() { this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds() } }, {
                                key: "loadAds",
                                value: function() {
                                    var e = this;
                                    this.managerPromise.then((function() { e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) { e.on("loaded", t), e.player.debug.log(e.manager) })), e.requestAds() })).catch((function() {}))
                                }
                            }, {
                                key: "trigger",
                                value: function(e) {
                                    for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    var r = this.events[e];
                                    q(r) && r.forEach((function(e) { H(e) && e.apply(t, i) }))
                                }
                            }, { key: "on", value: function(e, t) { return q(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this } }, {
                                key: "startSafetyTimer",
                                value: function(e, t) {
                                    var n = this;
                                    this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() { n.cancel(), n.clearSafetyTimer("startSafetyTimer()") }), e)
                                }
                            }, { key: "clearSafetyTimer", value: function(e) { P(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null) } }, { key: "enabled", get: function() { var e = this.config; return this.player.isHTML5 && this.player.isVideo && e.enabled && (!G(e.publisherId) || U(e.tagUrl)) } }, { key: "tagUrl", get: function() { var e = this.config; if (U(e.tagUrl)) return e.tagUrl; var t = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: this.publisherId }; return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Be(t)) } }]), e
                        }(),
                        ft = function() {
                            function e(n) { t(this, e), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load() }
                            return i(e, [{
                                key: "load",
                                value: function() {
                                    var e = this;
                                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() { e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0) }))
                                }
                            }, {
                                key: "getThumbnails",
                                value: function() {
                                    var e = this;
                                    return new Promise((function(t) {
                                        var n = e.player.config.previewThumbnails.src;
                                        if (G(n)) throw new Error("Missing previewThumbnails.src config attribute");
                                        var i = (N(n) ? [n] : n).map((function(t) { return e.getThumbnail(t) }));
                                        Promise.all(i).then((function() { e.thumbnails.sort((function(e, t) { return e.height - t.height })), e.player.debug.log("Preview thumbnails", e.thumbnails), t() }))
                                    }))
                                }
                            }, {
                                key: "getThumbnail",
                                value: function(e) {
                                    var t = this;
                                    return new Promise((function(n) {
                                        De(e).then((function(i) {
                                            var o, s, a = {
                                                frames: (o = i, s = [], o.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                                    var t = {};
                                                    e.split(/\r\n|\n|\r/).forEach((function(e) {
                                                        if (D(t.startTime)) {
                                                            if (!G(e.trim()) && G(t.text)) {
                                                                var n = e.trim().split("#xywh="),
                                                                    i = r(n, 1);
                                                                if (t.text = i[0], n[1]) {
                                                                    var o = r(n[1].split(","), 4);
                                                                    t.x = o[0], t.y = o[1], t.w = o[2], t.h = o[3]
                                                                }
                                                            }
                                                        } else {
                                                            var s = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                                            s && (t.startTime = 60 * Number(s[1] || 0) * 60 + 60 * Number(s[2]) + Number(s[3]) + Number("0.".concat(s[4])), t.endTime = 60 * Number(s[6] || 0) * 60 + 60 * Number(s[7]) + Number(s[8]) + Number("0.".concat(s[9])))
                                                        }
                                                    })), t.text && s.push(t)
                                                })), s),
                                                height: null,
                                                urlPrefix: ""
                                            };
                                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                            var l = new Image;
                                            l.onload = function() { a.height = l.naturalHeight, a.width = l.naturalWidth, t.thumbnails.push(a), n() }, l.src = a.urlPrefix + a.frames[0].text
                                        }))
                                    }))
                                }
                            }, {
                                key: "startMove",
                                value: function(e) {
                                    if (this.loaded && V(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                        if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                        else {
                                            var t = this.player.elements.progress.getBoundingClientRect(),
                                                n = 100 / t.width * (e.pageX - t.left);
                                            this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = ze(this.seekTime)
                                        }
                                        this.showImageAtCurrentTime()
                                    }
                                }
                            }, { key: "endMove", value: function() { this.toggleThumbContainer(!1, !0) } }, { key: "startScrubbing", value: function(e) {!1 !== e.button && 0 !== e.button || (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime())) } }, {
                                key: "endScrubbing",
                                value: function() {
                                    var e = this;
                                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ee.call(this.player, this.player.media, "timeupdate", (function() { e.mouseDown || e.toggleScrubbingContainer(!1) }))
                                }
                            }, {
                                key: "listeners",
                                value: function() {
                                    var e = this;
                                    this.player.on("play", (function() { e.toggleThumbContainer(!1, !0) })), this.player.on("seeked", (function() { e.toggleThumbContainer(!1) })), this.player.on("timeupdate", (function() { e.lastTime = e.player.media.currentTime }))
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    this.elements.thumb.container = se("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = se("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                                    var e = se("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
                                    this.elements.thumb.time = se("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), R(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = se("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                                }
                            }, {
                                key: "showImageAtCurrentTime",
                                value: function() {
                                    var e = this;
                                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                                    var t = this.thumbnails[0].frames.findIndex((function(t) { return e.seekTime >= t.startTime && e.seekTime <= t.endTime })),
                                        n = t >= 0,
                                        i = 0;
                                    this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, o) { e.loadedImages.includes(n.frames[t].text) && (i = o) })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
                                }
                            }, {
                                key: "loadImage",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        n = this.showingThumb,
                                        i = this.thumbnails[t],
                                        o = i.urlPrefix,
                                        r = i.frames[n],
                                        s = i.frames[n].text,
                                        a = o + s;
                                    if (this.currentImageElement && this.currentImageElement.dataset.filename === s) this.showImage(this.currentImageElement, r, t, n, s, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                                    else {
                                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                        var l = new Image;
                                        l.src = a, l.dataset.index = n, l.dataset.filename = s, this.showingThumbFilename = s, this.player.debug.log("Loading image: ".concat(a)), l.onload = function() { return e.showImage(l, r, t, n, s, !0) }, this.loadingImage = l, this.removeOldImages(l)
                                    }
                                }
                            }, {
                                key: "showImage",
                                value: function(e, t, n, i, o) {
                                    var r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                                    this.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(r)), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(o) || this.loadedImages.push(o)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, o))
                                }
                            }, {
                                key: "removeOldImages",
                                value: function(e) {
                                    var t = this;
                                    Array.from(this.currentImageContainer.children).forEach((function(n) {
                                        if ("img" === n.tagName.toLowerCase()) {
                                            var i = t.usingSprites ? 500 : 1e3;
                                            if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                                                n.dataset.deleting = !0;
                                                var o = t.currentImageContainer;
                                                setTimeout((function() { o.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename)) }), i)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "preloadNearby",
                                value: function(e) {
                                    var t = this,
                                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return new Promise((function(i) {
                                        setTimeout((function() {
                                            var o = t.thumbnails[0].frames[e].text;
                                            if (t.showingThumbFilename === o) {
                                                var r;
                                                r = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                                var s = !1;
                                                r.forEach((function(e) {
                                                    var n = e.text;
                                                    if (n !== o && !t.loadedImages.includes(n)) {
                                                        s = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                                                        var r = t.thumbnails[0].urlPrefix + n,
                                                            a = new Image;
                                                        a.src = r, a.onload = function() { t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i() }
                                                    }
                                                })), s || i()
                                            }
                                        }), 300)
                                    }))
                                }
                            }, {
                                key: "getHigherQuality",
                                value: function(e, t, n, i) {
                                    var o = this;
                                    if (e < this.thumbnails.length - 1) {
                                        var r = t.naturalHeight;
                                        this.usingSprites && (r = n.h), r < this.thumbContainerHeight && setTimeout((function() { o.showingThumbFilename === i && (o.player.debug.log("Showing higher quality thumb for: ".concat(i)), o.loadImage(e + 1)) }), 300)
                                    }
                                }
                            }, {
                                key: "toggleThumbContainer",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                                    this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, {
                                key: "toggleScrubbingContainer",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                                    this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, { key: "determineContainerAutoSizing", value: function() { this.elements.thumb.imageContainer.clientHeight > 20 && (this.sizeSpecifiedInCSS = !0) } }, {
                                key: "setThumbContainerSizeAndPos",
                                value: function() {
                                    if (!this.sizeSpecifiedInCSS) {
                                        var e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                        this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                                    }
                                    this.setThumbContainerPos()
                                }
                            }, {
                                key: "setThumbContainerPos",
                                value: function() {
                                    var e = this.player.elements.progress.getBoundingClientRect(),
                                        t = this.player.elements.container.getBoundingClientRect(),
                                        n = this.elements.thumb.container,
                                        i = t.left - e.left + 10,
                                        o = t.right - e.left - n.clientWidth - 10,
                                        r = this.mousePosX - e.left - n.clientWidth / 2;
                                    r < i && (r = i), r > o && (r = o), n.style.left = "".concat(r, "px")
                                }
                            }, { key: "setScrubbingContainerSize", value: function() { this.elements.scrubbing.container.style.width = "".concat(this.player.media.clientWidth, "px"), this.elements.scrubbing.container.style.height = "".concat(this.player.media.clientWidth / this.thumbAspectRatio, "px") } }, {
                                key: "setImageSizeAndOffset",
                                value: function(e, t) {
                                    if (this.usingSprites) {
                                        var n = this.thumbContainerHeight / t.h;
                                        e.style.height = "".concat(Math.floor(e.naturalHeight * n), "px"), e.style.width = "".concat(Math.floor(e.naturalWidth * n), "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                                    }
                                }
                            }, { key: "enabled", get: function() { return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled } }, { key: "currentImageContainer", get: function() { return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer } }, { key: "usingSprites", get: function() { return Object.keys(this.thumbnails[0].frames[0]).includes("w") } }, { key: "thumbAspectRatio", get: function() { return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height } }, { key: "thumbContainerHeight", get: function() { return this.mouseDown ? Math.floor(this.player.media.clientWidth / this.thumbAspectRatio) : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4) } }, { key: "currentImageElement", get: function() { return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement }, set: function(e) { this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e } }]), e
                        }(),
                        mt = {
                            insertElements: function(e, t) {
                                var n = this;
                                N(t) ? ae(e, this.media, { src: t }) : q(t) && t.forEach((function(t) { ae(e, n.media, t) }))
                            },
                            change: function(e) {
                                var t = this;
                                ne(e, "sources.length") ? (Te.cancelRequests.call(this), this.destroy.call(this, (function() {
                                    t.options.quality = [], le(t.media), t.media = null, R(t.elements.container) && t.elements.container.removeAttribute("class");
                                    var n = e.sources,
                                        i = e.type,
                                        o = r(n, 1)[0],
                                        s = o.provider,
                                        a = void 0 === s ? Ke.html5 : s,
                                        l = o.src,
                                        c = "html5" === a ? i : "div",
                                        u = "html5" === a ? {} : { src: l };
                                    Object.assign(t, { provider: a, type: i, supported: _e.check(i, a, t.config.playsinline), media: se(c, u) }), t.elements.container.appendChild(t.media), F(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), G(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), nt.addStyleHook.call(t), t.isHTML5 && mt.insertElements.call(t, "source", n), t.config.title = e.title, ht.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && mt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && nt.build.call(t), t.isHTML5 && t.media.load(), t.previewThumbnails && t.previewThumbnails.load(), t.fullscreen.update()
                                }), !0)) : this.debug.warn("Invalid source format")
                            }
                        },
                        gt = function() {
                            function e(n, i) {
                                var o = this;
                                if (t(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = _e.touch, this.media = n, N(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || z(this.media) || q(this.media)) && (this.media = this.media[0]), this.config = ie({}, Ue, e.defaults, i || {}, function() { try { return JSON.parse(o.media.getAttribute("data-plyr-config")) } catch (e) { return {} } }()), this.elements = { container: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [] }, this.debug = new Xe(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", _e), !P(this.media) && R(this.media))
                                    if (this.media.plyr) this.debug.warn("Target already setup");
                                    else if (this.config.enabled)
                                    if (_e.check().api) {
                                        var r = this.media.cloneNode(!0);
                                        r.autoplay = !1, this.elements.original = r;
                                        var s = this.media.tagName.toLowerCase(),
                                            a = null,
                                            l = null;
                                        switch (s) {
                                            case "div":
                                                if (a = this.media.querySelector("iframe"), R(a)) {
                                                    if (l = Ve(a.getAttribute("src")), this.provider = function(e) { return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Ke.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Ke.vimeo : null }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                                                        var c = ["1", "true"];
                                                        c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                                    }
                                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                                if (G(this.provider) || !Object.keys(Ke).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                                this.type = $e;
                                                break;
                                            case "video":
                                            case "audio":
                                                this.type = s, this.provider = Ke.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                                break;
                                            default:
                                                return void this.debug.error("Setup failed: unsupported type")
                                        }
                                        this.supported = _e.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new it(this), this.storage = new Ie(this), this.media.plyr = this, R(this.elements.container) || (this.elements.container = se("div", { tabindex: 0 }), oe(this.media, this.elements.container)), nt.addStyleHook.call(this), ht.setup.call(this), this.config.debug && Z.call(this, this.elements.container, this.config.events.join(" "), (function(e) { o.debug.log("event: ".concat(e.type)) })), (this.isHTML5 || this.isEmbed && !this.supported.ui) && nt.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new et(this), this.config.ads.enabled && (this.ads = new pt(this)), this.isHTML5 && this.config.autoplay && setTimeout((function() { return o.play() }), 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new ft(this))) : this.debug.error("Setup failed: no support")
                                    } else this.debug.error("Setup failed: no support");
                                else this.debug.error("Setup failed: disabled by config");
                                else this.debug.error("Setup failed: no suitable element passed")
                            }
                            return i(e, [{ key: "play", value: function() { var e = this; return H(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() { return e.ads.play() })).catch((function() { return e.media.play() })), this.media.play()) : null } }, { key: "pause", value: function() { this.playing && H(this.media.pause) && this.media.pause() } }, {
                                key: "togglePlay",
                                value: function(e) {
                                    (F(e) ? e : !this.playing) ? this.play(): this.pause()
                                }
                            }, { key: "stop", value: function() { this.isHTML5 ? (this.pause(), this.restart()) : H(this.media.stop) && this.media.stop() } }, { key: "restart", value: function() { this.currentTime = 0 } }, { key: "rewind", value: function(e) { this.currentTime = this.currentTime - (D(e) ? e : this.config.seekTime) } }, { key: "forward", value: function(e) { this.currentTime = this.currentTime + (D(e) ? e : this.config.seekTime) } }, {
                                key: "increaseVolume",
                                value: function(e) {
                                    var t = this.media.muted ? 0 : this.volume;
                                    this.volume = t + (D(e) ? e : 0)
                                }
                            }, { key: "decreaseVolume", value: function(e) { this.increaseVolume(-e) } }, { key: "toggleCaptions", value: function(e) { We.toggle.call(this, e, !1) } }, { key: "airplay", value: function() { _e.airplay && this.media.webkitShowPlaybackTargetPicker() } }, {
                                key: "toggleControls",
                                value: function(e) {
                                    if (this.supported.ui && !this.isAudio) {
                                        var t = fe(this.elements.container, this.config.classNames.hideControls),
                                            n = void 0 === e ? void 0 : !e,
                                            i = pe(this.elements.container, this.config.classNames.hideControls, n);
                                        if (i && this.config.controls.includes("settings") && !G(this.config.settings) && Re.toggleMenu.call(this, !1), i !== t) {
                                            var o = i ? "controlshidden" : "controlsshown";
                                            te.call(this, this.media, o)
                                        }
                                        return !i
                                    }
                                    return !1
                                }
                            }, { key: "on", value: function(e, t) { Z.call(this, this.elements.container, e, t) } }, { key: "once", value: function(e, t) { ee.call(this, this.elements.container, e, t) } }, { key: "off", value: function(e, t) { Q(this.elements.container, e, t) } }, {
                                key: "destroy",
                                value: function(e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (this.ready) {
                                        var i = function() {
                                            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (le(t.elements.buttons.play), le(t.elements.captions), le(t.elements.controls), le(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), H(e) && e()) : (function() {
                                                this && this.eventListeners && (this.eventListeners.forEach((function(e) {
                                                    var t = e.element,
                                                        n = e.type,
                                                        i = e.callback,
                                                        o = e.options;
                                                    t.removeEventListener(n, i, o)
                                                })), this.eventListeners = [])
                                            }.call(t), ue(t.elements.original, t.elements.container), te.call(t, t.elements.original, "destroyed", !0), H(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() { t.elements = null, t.media = null }), 200))
                                        };
                                        this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (nt.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && H(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                                    }
                                }
                            }, { key: "supports", value: function(e) { return _e.mime.call(this, e) } }, { key: "isHTML5", get: function() { return this.provider === Ke.html5 } }, { key: "isEmbed", get: function() { return this.isYouTube || this.isVimeo } }, { key: "isYouTube", get: function() { return this.provider === Ke.youtube } }, { key: "isVimeo", get: function() { return this.provider === Ke.vimeo } }, { key: "isVideo", get: function() { return this.type === $e } }, { key: "isAudio", get: function() { return this.type === Ye } }, { key: "playing", get: function() { return Boolean(this.ready && !this.paused && !this.ended) } }, { key: "paused", get: function() { return Boolean(this.media.paused) } }, { key: "stopped", get: function() { return Boolean(this.paused && 0 === this.currentTime) } }, { key: "ended", get: function() { return Boolean(this.media.ended) } }, {
                                key: "currentTime",
                                set: function(e) {
                                    if (this.duration) {
                                        var t = D(e) && e > 0;
                                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                                    }
                                },
                                get: function() { return Number(this.media.currentTime) }
                            }, { key: "buffered", get: function() { var e = this.media.buffered; return D(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0 } }, { key: "seeking", get: function() { return Boolean(this.media.seeking) } }, {
                                key: "duration",
                                get: function() {
                                    var e = parseFloat(this.config.duration),
                                        t = (this.media || {}).duration,
                                        n = D(t) && t !== 1 / 0 ? t : 0;
                                    return e || n
                                }
                            }, {
                                key: "volume",
                                set: function(e) {
                                    var t = e;
                                    N(t) && (t = Number(t)), D(t) || (t = this.storage.get("volume")), D(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !G(e) && this.muted && t > 0 && (this.muted = !1)
                                },
                                get: function() { return Number(this.media.volume) }
                            }, {
                                key: "muted",
                                set: function(e) {
                                    var t = e;
                                    F(t) || (t = this.storage.get("muted")), F(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                                },
                                get: function() { return Boolean(this.media.muted) }
                            }, { key: "hasAudio", get: function() { return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length) } }, {
                                key: "speed",
                                set: function(e) {
                                    var t = this,
                                        n = null;
                                    D(e) && (n = e), D(n) || (n = this.storage.get("speed")), D(n) || (n = this.config.speed.selected);
                                    var i = this.minimumSpeed,
                                        o = this.maximumSpeed;
                                    n = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                        return Math.min(Math.max(e, t), n)
                                    }(n, i, o), this.config.speed.selected = n, setTimeout((function() { t.media.playbackRate = n }), 0)
                                },
                                get: function() { return Number(this.media.playbackRate) }
                            }, { key: "minimumSpeed", get: function() { return this.isYouTube ? Math.min.apply(Math, s(this.options.speed)) : this.isVimeo ? .5 : .0625 } }, { key: "maximumSpeed", get: function() { return this.isYouTube ? Math.max.apply(Math, s(this.options.speed)) : this.isVimeo ? 2 : 16 } }, {
                                key: "quality",
                                set: function(e) {
                                    var t = this.config.quality,
                                        n = this.options.quality;
                                    if (n.length) {
                                        var i = [!G(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(D),
                                            o = !0;
                                        if (!n.includes(i)) {
                                            var r = function(e, t) { return q(e) && e.length ? e.reduce((function(e, n) { return Math.abs(n - t) < Math.abs(e - t) ? n : e })) : null }(n, i);
                                            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(r, " instead")), i = r, o = !1
                                        }
                                        t.selected = i, this.media.quality = i, o && this.storage.set({ quality: i })
                                    }
                                },
                                get: function() { return this.media.quality }
                            }, {
                                key: "loop",
                                set: function(e) {
                                    var t = F(e) ? e : this.config.loop.active;
                                    this.config.loop.active = t, this.media.loop = t
                                },
                                get: function() { return Boolean(this.media.loop) }
                            }, { key: "source", set: function(e) { mt.change.call(this, e) }, get: function() { return this.media.currentSrc } }, { key: "download", get: function() { var e = this.config.urls.download; return U(e) ? e : this.source }, set: function(e) { U(e) && (this.config.urls.download = e, Re.setDownloadUrl.call(this)) } }, { key: "poster", set: function(e) { this.isVideo ? nt.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video") }, get: function() { return this.isVideo ? this.media.getAttribute("poster") : null } }, { key: "ratio", get: function() { if (!this.isVideo) return null; var e = ke(je.call(this)); return q(e) ? e.join(":") : e }, set: function(e) { this.isVideo ? N(e) && xe(e) ? (this.config.ratio = e, Se.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video") } }, {
                                key: "autoplay",
                                set: function(e) {
                                    var t = F(e) ? e : this.config.autoplay;
                                    this.config.autoplay = t
                                },
                                get: function() { return Boolean(this.config.autoplay) }
                            }, {
                                key: "currentTrack",
                                set: function(e) { We.set.call(this, e, !1) },
                                get: function() {
                                    var e = this.captions,
                                        t = e.toggled,
                                        n = e.currentTrack;
                                    return t ? n : -1
                                }
                            }, { key: "language", set: function(e) { We.setLanguage.call(this, e, !1) }, get: function() { return (We.getCurrentTrack.call(this) || {}).language } }, {
                                key: "pip",
                                set: function(e) {
                                    if (_e.pip) {
                                        var t = F(e) ? e : !this.pip;
                                        H(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ge : "inline"), H(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                                    }
                                },
                                get: function() { return _e.pip ? G(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ge : null }
                            }], [{ key: "supported", value: function(e, t, n) { return _e.check(e, t, n) } }, { key: "loadSprite", value: function(e, t) { return Ne(e, t) } }, {
                                key: "setup",
                                value: function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    return N(t) ? i = Array.from(document.querySelectorAll(t)) : z(t) ? i = Array.from(t) : q(t) && (i = t.filter(R)), G(i) ? null : i.map((function(t) { return new e(t, n) }))
                                }
                            }]), e
                        }();
                    return gt.defaults = (ut = Ue, JSON.parse(JSON.stringify(ut))), gt
                }, "object" == typeof n && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define("Plyr", o) : (i = i || self).Plyr = o())
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    12: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initAccordion = function() {
            return {
                setup: function() {
                    var e = document.querySelectorAll(".accordion button");

                    function t() { for (var t = this.getAttribute("aria-expanded"), n = 0; n < e.length; n++) e[n].setAttribute("aria-expanded", "false"); "false" == t && this.setAttribute("aria-expanded", "true") }
                    e.forEach((function(e) { return e.addEventListener("click", t) }))
                }
            }
        }
    }, {}],
    13: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initBackToTop = function() {
            return {
                scrolled: !1,
                height: 60,
                mobileOpen: !1,
                setup: function() { o.style.transition = o.style.WebkitTransition = "none", o.style.strokeDasharray = r + " " + r, o.style.strokeDashoffset = r, o.getBoundingClientRect(), o.style.transition = o.style.WebkitTransition = "stroke-dashoffset 10ms linear" },
                updateProgress: function() {
                    var e = window.scrollY,
                        t = document.body.scrollHeight - 700,
                        n = r - e * r / t;
                    o.style.strokeDashoffset = n
                },
                scroll: function() { this.updateProgress(), window.scrollY >= this.height ? (this.scrolled = !0, i.classList.add("active-progress")) : (this.scrolled = !1, i.classList.remove("active-progress")) },
                scrollTop: function() { return window.scrollTo({ top: 0, behavior: "smooth" }), !1 }
            }
        };
        var i = document.querySelector(".progress-wrap"),
            o = document.querySelector(".progress-wrap path"),
            r = o.getTotalLength()
    }, {}],
    14: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initBestRatedListingsGlide = function() { new o.default(".best-rated-events-glide", { type: "carousel", startAt: 0, perView: 5, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 3 }, 1024: { perView: 4 } } }).mount() }, n.initFlatCarouselsGlide = function() {
            var e = document.querySelectorAll(".flat-carousel"),
                t = { type: "carousel", startAt: 0, perView: 3, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 2 }, 1024: { perView: 2 }, 1250: { perView: 2 } } };
            e.forEach((function(e) { new o.default(e, t).mount() }))
        }, n.initGlide = function() { new o.default(".glide", { type: "carousel", startAt: 0, perView: 4, autoplay: 2e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 2 }, 1024: { perView: 3 } } }).mount() }, n.initListingCategoriesGlide = function() { new o.default(".categories-events-glide", { type: "carousel", startAt: 0, perView: 2.8, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 2 }, 1024: { perView: 2 }, 1250: { perView: 2 } } }).mount() }, n.initListingGlide = function() { new o.default(".available-dates-glide", { type: "carousel", startAt: 0, perView: 5, autoplay: 2e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 3 }, 1024: { perView: 4 } } }).mount() }, n.initMoreListingsGlide = function() { new o.default(".more-events-glide", { type: "carousel", startAt: 0, perView: 5, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 3 }, 1024: { perView: 4 } } }).mount() }, n.initSuggestedListingsGlide = function() { new o.default(".suggested-events-glide", { type: "carousel", startAt: 0, perView: 3, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 2 }, 1024: { perView: 2 }, 1250: { perView: 2 } } }).mount() }, n.initUpcomingListingsGlide = function() { new o.default(".upcoming-events-glide", { type: "carousel", startAt: 0, perView: 3, autoplay: 3e3, breakpoints: { 767: { perView: 1 }, 900: { perView: 2 }, 1024: { perView: 2 }, 1250: { perView: 2 } } }).mount() };
        var i, o = (i = e("@glidejs/glide")) && i.__esModule ? i : { default: i }
    }, { "@glidejs/glide": 2 }],
    15: [function(e, t, n) {
        "use strict";
        var i = e("./navbar/navbar-landing"),
            o = e("./navbar/navbar"),
            r = e("./navbar/navbar-mobile"),
            s = e("./navbar/navbar-bottom"),
            a = e("./backtotop/backtotop"),
            l = e("./accordion/accordion");
        window.initLandingNavbar = i.initLandingNavbar, window.initNavbar = o.initNavbar, window.initNavbarLight = o.initNavbarLight, window.initNavbarMobile = r.initNavbarMobile, window.initNavbarBottom = s.initNavbarBottom, window.initBackToTop = a.initBackToTop, window.initAccordion = l.initAccordion
    }, { "./accordion/accordion": 12, "./backtotop/backtotop": 13, "./navbar/navbar": 19, "./navbar/navbar-bottom": 16, "./navbar/navbar-landing": 17, "./navbar/navbar-mobile": 18 }],
    16: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initNavbarBottom = function() { return { isBottomNavActive: !0, scroll: function() { document.body.offsetHeight - (window.pageYOffset + window.innerHeight) < 100 ? this.isBottomNavActive = !1 : this.isBottomNavActive = !0 } } }
    }, {}],
    17: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initLandingNavbar = function() {
            return {
                scrolled: !1,
                height: 60,
                mobileOpen: !1,
                scroll: function() { window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1, this.searchExpanded = !1 },
                openMobileMenu: function() { this.mobileOpen = !this.mobileOpen },
                initScrollAnchors: function() {
                    document.querySelectorAll('.scroll-link[href^="#"]').forEach((function(e) {
                        e.onclick = function(e) {
                            e.preventDefault();
                            var t = this.getAttribute("href"),
                                n = document.querySelector(t).offsetTop - 0;
                            window.scrollTo({ top: n, behavior: "smooth" })
                        }
                    }))
                }
            }
        }
    }, {}],
    18: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initNavbarMobile = function() {
            return {
                scrolled: !1,
                height: 60,
                scroll: function() { window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1, this.searchExpanded = !1 },
                mobileSearchOpened: !1,
                toggleMobileSearch: function() { this.mobileSearchOpened = !this.mobileSearchOpened },
                mobileSearchPanelOpened: !1,
                toggleMobileSearchPanel: function() { this.mobileSearchPanelOpened = !this.mobileSearchPanelOpened, !1 === this.mobileSearchPanelOpened && (this.activeWizardStep = 0) },
                activeWizardStep: 0,
                wizardForward: function(e) {
                    var t = this;
                    e.target.classList.add("is-loading"), setTimeout((function() { e.target.classList.remove("is-loading"), t.activeWizardStep = t.activeWizardStep + 1, 2 === t.activeWizardStep ? e.target.innerHTML = "Search" : 3 === t.activeWizardStep ? window.location.href = "/home-2.html" : e.target.innerHTML = "Next" }), 800)
                },
                wizardBack: function(e) {
                    var t = this;
                    e.target.classList.add("is-loading"), setTimeout((function() { e.target.classList.remove("is-loading"), t.activeWizardStep > 0 ? t.activeWizardStep = t.activeWizardStep - 1 : t.toggleMobileSearchPanel() }), 800)
                }
            }
        };
        e("../../forms/datepicker")
    }, { "../../forms/datepicker": 22 }],
    19: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initNavbar = function() {
            return {
                scrolled: !1,
                height: 60,
                mobileOpen: !1,
                scroll: function() { window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1, this.searchExpanded = !1 },
                searchExpanded: !1,
                expandSearch: function() { this.searchExpanded = !0 },
                foldSearch: function() { this.searchExpanded = !1 },
                searchActive: !1,
                disableSearch: function() { this.searchActive = !1 },
                locationDropOpened: !1,
                startDatepicker: i.searchStartDatepicker,
                endDatepicker: i.searchEndDatepicker,
                startDateDropOpened: !1,
                endDateDropOpened: !1,
                typeDropOpened: !1,
                accountDropOpened: !1,
                openDrop: function(e) {
                    switch (e) {
                        case "location-drop":
                            this.locationDropOpened = !0, this.searchActive = !0;
                            break;
                        case "start-date-drop":
                            this.searchActive = !0, this.startDateDropOpened = !0;
                            break;
                        case "end-date-drop":
                            this.searchActive = !0, this.endDateDropOpened = !0;
                            break;
                        case "type-drop":
                            this.typeDropOpened = !0, this.searchActive = !0;
                            break;
                        case "account-drop":
                            this.accountDropOpened = !0;
                            break;
                        default:
                            console.log("Sorry, something went wrong.")
                    }
                },
                closeDrop: function(e) {
                    switch (e) {
                        case "location-drop":
                            this.locationDropOpened = !1;
                            break;
                        case "start-date-drop":
                            this.startDateDropOpened = !1;
                            break;
                        case "end-date-drop":
                            this.endDateDropOpened = !1;
                            break;
                        case "type-drop":
                            this.typeDropOpened = !1;
                            break;
                        case "account-drop":
                            this.accountDropOpened = !1;
                            break;
                        default:
                            console.log("Sorry, something went wrong.")
                    }
                },
                megamenuOpened: !1,
                openedMegamenu: "megamenu-1",
                logout: function() { this.$store.app.isLoggedIn = !1, window.location.href = "/" }
            }
        }, n.initNavbarLight = function() {
            return {
                scrolled: !1,
                height: 60,
                mobileOpen: !1,
                scroll: function() { window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1 },
                accountDropOpened: !1,
                openDrop: function(e) {
                    if ("account-drop" === e) this.accountDropOpened = !0;
                    else console.log("Sorry, something went wrong.")
                },
                closeDrop: function(e) {
                    if ("account-drop" === e) this.accountDropOpened = !1;
                    else console.log("Sorry, something went wrong.")
                },
                megamenuOpened: !1,
                openedMegamenu: "megamenu-1",
                logout: function() { this.$store.app.isLoggedIn = !1, window.location.href = "/" }
            }
        };
        var i = e("../../forms/datepicker")
    }, { "../../forms/datepicker": 22 }],
    20: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initPageLoader = function() {
            window.addEventListener("load", (function() {
                var e = document.getElementById("pageloader"),
                    t = document.getElementById("infraloader");
                e.classList.toggle("is-active");
                var n = setTimeout((function() { t.classList.remove("is-active"), e.classList.toggle("is-active"), clearTimeout(n) }), 1200)
            }))
        }
    }, {}],
    21: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initBookingForm = function() { return { startDatepickerEvent: (0, i.listingStartDatepicker)(), endDatepickerEvent: (0, i.listingEndDatepicker)(), dateValue: "", getDateValue: function(e) { this.dateValue = e.target.getAttribute("data-value") }, bookingFormExpanded: !1, dateFormActive: !1, participantsFormActive: !1, openDatesPanel: function() { this.bookingFormExpanded = !0, this.participantsFormActive = !1, this.dateFormActive = !0 }, openParticipantsPanel: function() { this.bookingFormExpanded = !0, this.dateFormActive = !1, this.participantsFormActive = !0 }, closeBookingPanel: function() { this.bookingFormExpanded = !1, this.dateFormActive = !1, this.participantsFormActive = !1 } } };
        var i = e("../forms/datepicker")
    }, { "../forms/datepicker": 22 }],
    22: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.listingEndDatepicker = function() {
            var e = document.querySelector(".event-datepicker-end");
            void 0 !== e && null != e && (0, o.default)(".event-datepicker-end", {
                id: 3,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                alwaysShow: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i, e.setAttribute("data-value", i)
                }
            })
        }, n.listingStartDatepicker = function() {
            var e = document.querySelector(".event-datepicker-start");
            void 0 !== e && null != e && (0, o.default)(".event-datepicker-start", {
                id: 3,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                alwaysShow: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i, e.setAttribute("data-value", i)
                }
            })
        }, n.searchEndDatepicker = function() {
            var e = document.querySelector(".search-datepicker-end");
            void 0 !== e && null != e && (0, o.default)(".search-datepicker-end", {
                id: 1,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i
                }
            })
        }, n.searchEndDatepickerMobile = function() {
            (0, o.default)(".search-datepicker-end-mobile", {
                id: 2,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                alwaysShow: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i, e.setAttribute("data-value", i)
                }
            })
        }, n.searchStartDatepicker = function() {
            var e = document.querySelector(".search-datepicker-start");
            void 0 !== e && null != e && (0, o.default)(".search-datepicker-start", {
                id: 1,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i
                }
            })
        }, n.searchStartDatepickerMobile = function() {
            (0, o.default)(".search-datepicker-start-mobile", {
                id: 2,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                alwaysShow: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i, e.setAttribute("data-value", i)
                }
            })
        }, n.staticEndDatepicker = function() {
            var e = document.querySelector(".static-datepicker-end");
            void 0 !== e && null != e && (0, o.default)(".static-datepicker-end", {
                id: 4,
                alwaysShow: !0,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i
                }
            })
        }, n.staticStartDatepicker = function() {
            var e = document.querySelector(".static-datepicker-start");
            void 0 !== e && null != e && (0, o.default)(".static-datepicker-start", {
                id: 4,
                alwaysShow: !0,
                overlayButton: "Confirm",
                minDate: new Date,
                startDate: new Date,
                showAllDates: !0,
                formatter: function(e, t, n) {
                    var i = t.toLocaleDateString("en-EN", { month: "short", day: "numeric" });
                    e.value = i
                }
            })
        };
        var i, o = (i = e("js-datepicker")) && i.__esModule ? i : { default: i }
    }, { "js-datepicker": 7 }],
    23: [function(e, t, n) {
        "use strict";
        var i = e("./booking-form"),
            o = e("./listing-form"),
            r = e("./login-form");
        window.initBookingForm = i.initBookingForm, window.initHeroCreateListingForm = o.initHeroCreateListingForm, window.initLogin = r.initLogin
    }, { "./booking-form": 21, "./listing-form": 24, "./login-form": 25 }],
    24: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initHeroCreateListingForm = function() {
            return {
                initSelects: function() {
                    for (var e = document.querySelectorAll("[data-choice-select]"), t = 0; t < e.length; ++t) {
                        var n = e[t];
                        new o.default(n, { placeholder: !0, placeholderValue: "Select an option", searchPlaceholderValue: "Search..." })
                    }
                }
            }
        };
        var i, o = (i = e("choices.js")) && i.__esModule ? i : { default: i }
    }, { "choices.js": 5 }],
    25: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initLogin = function() {
            return {
                isLoading: !1,
                login: function() {
                    var e = this;
                    this.isLoading = !0, setTimeout((function() { e.$store.app.isLoggedIn = !0, window.location.href = "/" }), 1500)
                }
            }
        }
    }, {}],
    26: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initCareerTabs = function() {
            return {
                activeTab: "tab-1",
                switchTabs: function(e) {
                    var t = e.target.getAttribute("data-tab");
                    this.activeTab = t
                }
            }
        }, n.initJobTabs = function() {
            return {
                activeTab: "all",
                switchTabs: function(e) {
                    var t = e.target.getAttribute("data-tab");
                    this.activeTab = t
                }
            }
        }
    }, {}],
    27: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initContactMap = function() {
            var e = { color: "red" };
            return {
                initHeroMap: function() {
                    mapboxgl.accessToken = "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
                    var t = parseFloat(document.getElementById("hero-map").getAttribute("data-long")),
                        n = parseFloat(document.getElementById("hero-map").getAttribute("data-lat")),
                        i = new mapboxgl.Map({ container: "hero-map", style: "mapbox://styles/mapbox/light-v10", center: [t, n], zoom: 12 });
                    i.addControl(new mapboxgl.NavigationControl);
                    new mapboxgl.Marker(e).setLngLat([t, n]).addTo(i)
                }
            }
        }
    }, {}],
    28: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initRenderDemos = function() { return { screenshots: i } };
        var i = [{ name: "Events", screenshot: "img/screenshots/events.png", link: "/events.html", new: !1 }, { name: "Events v2", screenshot: "img/screenshots/events-2.png", link: "/events-2.html", new: !1 }, { name: "How to", screenshot: "img/screenshots/how.png", link: "/how.html", new: !1 }, { name: "Home v1", screenshot: "img/screenshots/home-1.png", link: "/home-1.html", new: !1 }, { name: "Home v5", screenshot: "img/screenshots/home-5.png", link: "/home-5.html", new: !1 }, { name: "Home v6", screenshot: "img/screenshots/home-6.png", link: "/home-6.html", new: !1 }, { name: "Home v2", screenshot: "img/screenshots/home-2.png", link: "/home-2.html", new: !1 }, { name: "Home v3", screenshot: "img/screenshots/home-3.png", link: "/home-3.html", new: !1 }, { name: "Home v4", screenshot: "img/screenshots/home-4.png", link: "/home-4.html", new: !1 }, { name: "Trips", screenshot: "img/screenshots/trips.png", link: "/trips.html", new: !1 }, { name: "Trips v2", screenshot: "img/screenshots/trips-2.png", link: "/trips-2.html", new: !1 }, { name: "Trips v3", screenshot: "img/screenshots/trips-3.png", link: "/trips-3.html", new: !1 }, { name: "Flats", screenshot: "img/screenshots/flats.png", link: "/flats.html", new: !1 }, { name: "Event v1", screenshot: "img/screenshots/event.png", link: "/event.html", new: !1 }, { name: "Event v2", screenshot: "img/screenshots/event-2.png", link: "/event-2.html", new: !1 }, { name: "Event v3", screenshot: "img/screenshots/event-3.png", link: "/event-3.html", new: !1 }, { name: "Event v4", screenshot: "img/screenshots/event-4.png", link: "/event-4.html", new: !1 }, { name: "Event v5", screenshot: "img/screenshots/event-5.png", link: "/event-5.html", new: !1 }, { name: "Flat v1", screenshot: "img/screenshots/flat.png", link: "/flat.html", new: !1 }, { name: "Flat v2", screenshot: "img/screenshots/flat-2.png", link: "/flat-2.html", new: !1 }, { name: "Flat v3", screenshot: "img/screenshots/flat-3.png", link: "/flat-3.html", new: !1 }, { name: "Flat v4", screenshot: "img/screenshots/flat-4.png", link: "/flat-4.html", new: !1 }, { name: "Flat v5", screenshot: "img/screenshots/flat-5.png", link: "/flat-5.html", new: !1 }, { name: "Trip v1", screenshot: "img/screenshots/trip.png", link: "/trip.html", new: !1 }, { name: "Trip v2", screenshot: "img/screenshots/trip-2.png", link: "/trip-2.html", new: !1 }, { name: "Trip v3", screenshot: "img/screenshots/trip-3.png", link: "/trip-3.html", new: !1 }, { name: "Trip v4", screenshot: "img/screenshots/trip-4.png", link: "/trip-4.html", new: !1 }, { name: "Trip v5", screenshot: "img/screenshots/trip-5.png", link: "/trip-5.html", new: !1 }, { name: "Pricing", screenshot: "img/screenshots/pricing.png", link: "/pricing.html", new: !1 }, { name: "Corporate", screenshot: "img/screenshots/corporate.png", link: "/corporate.html", new: !1 }, { name: "Support", screenshot: "img/screenshots/support.png", link: "/support.html", new: !1 }, { name: "Host", screenshot: "img/screenshots/host.png", link: "/host.html", new: !1 }, { name: "Careers", screenshot: "img/screenshots/careers.png", link: "/careers.html", new: !1 }, { name: "Careers v2", screenshot: "img/screenshots/careers-2.png", link: "/careers-2.html", new: !1 }, { name: "Help Center", screenshot: "img/screenshots/help-center.png", link: "/help-center.html", new: !1 }, { name: "Blog", screenshot: "img/screenshots/blog.png", link: "/blog.html", new: !1 }, { name: "Post", screenshot: "img/screenshots/post.png", link: "/post.html", new: !1 }, { name: "Account", screenshot: "img/screenshots/account-main.png", link: "/account-main.html", new: !1 }, { name: "Account Layout", screenshot: "img/screenshots/account-personal.png", link: "/account-personal.html", new: !1 }, { name: "Schedule", screenshot: "img/screenshots/account-schedule.png", link: "/account-schedule.html", new: !1 }, { name: "Contact", screenshot: "img/screenshots/contact.png", link: "/contact.html", new: !1 }, { name: "Login", screenshot: "img/screenshots/login.png", link: "/login.html", new: !1 }, { name: "Signup", screenshot: "img/screenshots/signup.png", link: "/signup.html", new: !1 }, { name: "Signup v2", screenshot: "img/screenshots/signup-2.png", link: "/signup-2.html", new: !1 }, { name: "Error 404", screenshot: "img/screenshots/error-1.png", link: "/error-1.html", new: !1 }, { name: "Terms Of Service", screenshot: "img/screenshots/terms.png", link: "/terms.html", new: !1 }]
    }, {}],
    29: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initFlatsMap = function() {
            var e = "",
                t = { type: "FeatureCollection", features: [{ type: "Feature", properties: { name: "Cosy and classy house for your parties in Marbella", logo: "img/photo/content/spaces/carousel/19.jpg", location: "Marbella, Spain", price: 210, rating: 3.72 }, geometry: { type: "Point", coordinates: [-4.88670575899504, 36.50964517637638] } }, { type: "Feature", properties: { name: "Outstanding beach house for your family vacations", logo: "img/photo/content/spaces/carousel/20.jpg", location: "Fuengirola, Spain", price: 140, rating: 4.69 }, geometry: { type: "Point", coordinates: [-4.617030185890998, 36.55385937954381] } }, { type: "Feature", properties: { name: "Outstanding beach house for your family vacations", logo: "img/photo/content/spaces/carousel/21.jpg", location: "Torremolinos, Spain", price: 125, rating: 4.87 }, geometry: { type: "Point", coordinates: [-4.497416530048158, 36.62464985814558] } }, { type: "Feature", properties: { name: "Lone beach house with barbecue and all conveniences", logo: "img/photo/content/spaces/carousel/22.jpg", location: "Malaga, Spain", price: 90, rating: 4.12 }, geometry: { type: "Point", coordinates: [-4.4226909, 36.7347491] } }, { type: "Feature", properties: { name: "Personal palace located on the beach for a family trip", logo: "img/photo/content/spaces/carousel/23.jpg", location: "Malaga, Spain", price: 210, rating: 4.55 }, geometry: { type: "Point", coordinates: [-4.4376186, 36.7300552] } }, { type: "Feature", properties: { name: "Piloti beach house for friends or family trips", logo: "img/photo/content/spaces/carousel/24.jpg", location: "Benalmadena, Spain", price: 150, rating: 4.61 }, geometry: { type: "Point", coordinates: [-4.5722935, 36.5939182] } }, { type: "Feature", properties: { name: "Classy house on a cliff with all conveniences", logo: "img/photo/content/spaces/carousel/25.jpg", location: "Marbella, Spain", price: 260, rating: 4.97 }, geometry: { type: "Point", coordinates: [-4.888929, 36.5097577] } }, { type: "Feature", properties: { name: "Incredible loft green house for a group of tourists", logo: "img/photo/content/spaces/carousel/26.jpg", location: "Torremolinos, Spain", price: 190, rating: 4.65 }, geometry: { type: "Point", coordinates: [-4.4940587, 36.6274412] } }, { type: "Feature", properties: { name: "Modern ranch near the see for a friends or family trip", logo: "img/photo/content/spaces/carousel/27.jpg", location: "Malaga, Spain", price: 230, rating: 4.99 }, geometry: { type: "Point", coordinates: [-4.4266601, 36.7229522] } }, { type: "Feature", properties: { name: "Outstanding beach side villa with swimming pool", logo: "img/photo/content/spaces/carousel/10.jpg", location: "Nazare, Portugal", price: 190, rating: 4.92 }, geometry: { type: "Point", coordinates: [-9.0701572, 39.6029108] } }, { type: "Feature", properties: { name: "Superb luxury house in the outskirts of New York", logo: "img/photo/content/spaces/carousel/11.jpg", location: "New York, NY", price: 240, rating: 4.38 }, geometry: { type: "Point", coordinates: [-73.9612343, 41.9565822] } }, { type: "Feature", properties: { name: "Cosy indoor for a perfect family weekend", logo: "img/photo/content/spaces/carousel/11.jpg", location: "Miami, FL", price: 95, rating: 4.87 }, geometry: { type: "Point", coordinates: [-80.19362, 25.7741728] } }, { type: "Feature", properties: { name: "Modern villa in the heart of Copacabana", logo: "img/photo/content/spaces/carousel/16.jpg", location: "Copacabana, Brazil", price: 165, rating: 4.26 }, geometry: { type: "Point", coordinates: [-43.1843432, -22.9719642] } }, { type: "Feature", properties: { name: "Multifunctionnal studio for a few days stay", logo: "img/photo/content/spaces/carousel/13.jpg", location: "Toronto, Canada", price: 105, rating: 4.89 }, geometry: { type: "Point", coordinates: [-79.40578719642933, 43.66259741682194] } }, { type: "Feature", properties: { name: "Very classy apartment in the heart of Paris XVIe", logo: "img/photo/content/spaces/carousel/14.jpg", location: "Paris, France", price: 245, rating: 4.88 }, geometry: { type: "Point", coordinates: [2.3471571901870947, 48.85807197014847] } }, { type: "Feature", properties: { name: "Nice and cosy apartment near the Prado Museum", logo: "img/photo/content/spaces/carousel/15.jpg", location: "Madrid, Spain", price: 190, rating: 4.55 }, geometry: { type: "Point", coordinates: [-3.6910245, 40.4132156] } }, { type: "Feature", properties: { name: "Ideal and perfectly decorated studio", logo: "img/photo/content/spaces/carousel/17.jpg", location: "Paris, France", price: 80, rating: 3.84 }, geometry: { type: "Point", coordinates: [2.353487202152569, 48.832882708589736] } }, { type: "Feature", properties: { name: "Nice and cosy beach house with all conveniences", logo: "img/photo/content/spaces/carousel/18.jpg", location: "Berlin, Germany", price: 220, rating: 4.99 }, geometry: { type: "Point", coordinates: [13.424531132035366, 52.51791395654149] } }, { type: "Feature", properties: { name: "Very classy residence, private pool and all conveniences", logo: "img/photo/content/spaces/carousel/28.jpg", location: "Torremolinos, Spain", price: 180, rating: 4.81 }, geometry: { type: "Point", coordinates: [-4.4978799, 36.6269517] } }, { type: "Feature", properties: { name: "Incredible loft house with pool and conveniences", logo: "img/photo/content/spaces/carousel/29.jpg", location: "Benalmadena, Spain", price: 240, rating: 4.72 }, geometry: { type: "Point", coordinates: [-4.5764915, 36.59119] } }, { type: "Feature", properties: { name: "Jet set beach house near Benalmadena puerto", logo: "img/photo/content/spaces/carousel/30.jpg", location: "Benalmadena, Spain", price: 310, rating: 4.81 }, geometry: { type: "Point", coordinates: [-4.5540789, 36.5832913] } }, { type: "Feature", properties: { name: "Beautiful traditional house in the heart of Fuengirola", logo: "img/photo/content/spaces/carousel/31.jpg", location: "Fuengirola, Spain", price: 145, rating: 4.74 }, geometry: { type: "Point", coordinates: [-4.6244682, 36.5364203] } }, { type: "Feature", properties: { name: "Modern duplex apartment in the center of Torremolinos", logo: "img/photo/content/spaces/carousel/32.jpg", location: "Torremolinos, Spain", price: 190, rating: 4.89 }, geometry: { type: "Point", coordinates: [-4.5005679, 36.6192463] } }, { type: "Feature", properties: { name: "Nice and modern villa in the outskirts of Malaga", logo: "img/photo/content/spaces/carousel/33.jpg", location: "Malaga, Spain", price: 130, rating: 4.21 }, geometry: { type: "Point", coordinates: [-4.4367895, 36.7019358] } }, { type: "Feature", properties: { name: "Incredible modern decorated apartment in the town center", logo: "img/photo/content/spaces/carousel/34.jpg", location: "Torremolinos, Spain", price: 160, rating: 4.97 }, geometry: { type: "Point", coordinates: [-4.4900123, 36.6340517] } }, { type: "Feature", properties: { name: "Nice and cosy apartment in the center of Benalmadena", logo: "img/photo/content/spaces/carousel/35.jpg", location: "Benalmadena, Spain", price: 150, rating: 4.84 }, geometry: { type: "Point", coordinates: [-4.5642026, 36.581256] } }, { type: "Feature", properties: { name: "Impressive beach house right in front of the sea", logo: "img/photo/content/spaces/carousel/36.jpg", location: "Fuengirola, Spain", price: 280, rating: 4.99 }, geometry: { type: "Point", coordinates: [-4.6239707, 36.5336136] } }, { type: "Feature", properties: { name: "Great apartment in the center of the town", logo: "img/photo/content/spaces/carousel/37.jpg", location: "Torremolinos, Spain", price: 130, rating: 4.96 }, geometry: { type: "Point", coordinates: [-4.5027098, 36.6198327] } }, { type: "Feature", properties: { name: "Luxuous apartment with all conveniences", logo: "img/photo/content/spaces/carousel/38.jpg", location: "Benalmadena, Spain", price: 210, rating: 4.67 }, geometry: { type: "Point", coordinates: [-4.568619, 36.579123] } }, { type: "Feature", properties: { name: "Nice and cosy house in the center of the town", logo: "img/photo/content/spaces/carousel/39.jpg", location: "Benalmadena, Spain", price: 180, rating: 4.47 }, geometry: { type: "Point", coordinates: [-4.5654727, 36.5796826] } }, { type: "Feature", properties: { name: "Nice studio for and ideal trip in Fuengirola", logo: "img/photo/content/spaces/carousel/40.jpg", location: "Fuengirola, Spain", price: 110, rating: 4.69 }, geometry: { type: "Point", coordinates: [-4.6262738, 36.5389143] } }, { type: "Feature", properties: { name: "Vegetal house in the outskirts of Mijas", logo: "img/photo/content/spaces/carousel/41.jpg", location: "Mijas, Spain", price: 240, rating: 4.78 }, geometry: { type: "Point", coordinates: [-4.6388349, 36.5952274] } }, { type: "Feature", properties: { name: "Incredible garden house in the center of Malaga", logo: "img/photo/content/spaces/carousel/42.jpg", location: "Malaga, Spain", price: 210, rating: 4.77 }, geometry: { type: "Point", coordinates: [-4.4163478, 36.7238185] } }, { type: "Feature", properties: { name: "Sea facing villa with a private pool", logo: "img/photo/content/spaces/carousel/43.jpg", location: "Torremolinos, Spain", price: 160, rating: 4.21 }, geometry: { type: "Point", coordinates: [-4.5051925, 36.6181362] } }, { type: "Feature", properties: { name: "Magnificent garden house in the outskirts of the city", logo: "img/photo/content/spaces/carousel/44.jpg", location: "Fuengirola, Spain", price: 130, rating: 4.22 }, geometry: { type: "Point", coordinates: [-4.6251984, 36.5334152] } }, { type: "Feature", properties: { name: "Great post colonial house in the center of Malaga", logo: "img/photo/content/spaces/carousel/45.jpg", location: "Malaga, Spain", price: 310, rating: 4.87 }, geometry: { type: "Point", coordinates: [-4.4065624, 36.7258946] } }, { type: "Feature", properties: { name: "Hobbit-like house in the outskirts of Mijas", logo: "img/photo/content/spaces/carousel/46.jpg", location: "Mijas, Spain", price: 175, rating: 4.92 }, geometry: { type: "Point", coordinates: [-4.6388349, 36.5952274] } }, { type: "Feature", properties: { name: "Nice family house in the close suburbs", logo: "img/photo/content/spaces/carousel/47.jpg", location: "Benalmadena, Spain", price: 160, rating: 4.89 }, geometry: { type: "Point", coordinates: [-4.5654727, 36.5796826] } }, { type: "Feature", properties: { name: "Cosy family house for an ideal nature trip", logo: "img/photo/content/spaces/carousel/48.jpg", location: "Malaga, Spain", price: 200, rating: 4.95 }, geometry: { type: "Point", coordinates: [-4.4065624, 36.7258946] } }, { type: "Feature", properties: { name: "Very cute beach house with all conveniences", logo: "img/photo/content/spaces/carousel/49.jpg", location: "Torremolinos, Spain", price: 140, rating: 4.99 }, geometry: { type: "Point", coordinates: [-4.4988311, 36.6204633] } }, { type: "Feature", properties: { name: "Nice residence in the center with private pool", logo: "img/photo/content/spaces/carousel/50.jpg", location: "Torremolinos, Spain", price: 110, rating: 4.49 }, geometry: { type: "Point", coordinates: [-4.5035089, 36.6202753] } }, { type: "Feature", properties: { name: "Luxury house in the center of Fuengirola", logo: "img/photo/content/spaces/carousel/51.jpg", location: "Fuengirola, Spain", price: 280, rating: 4.94 }, geometry: { type: "Point", coordinates: [-4.6285352, 36.5315709] } }, { type: "Feature", properties: { name: "Cosy house in the center of Fuengirola", logo: "img/photo/content/spaces/carousel/52.jpg", location: "Fuengirola, Spain", price: 240, rating: 4.87 }, geometry: { type: "Point", coordinates: [-4.6238834, 36.5371292] } }, { type: "Feature", properties: { name: "Nice little house close to the beach and the center", logo: "img/photo/content/spaces/carousel/53.jpg", location: "Benalmadena, Spain", price: 160, rating: 4.38 }, geometry: { type: "Point", coordinates: [-4.561925, 36.5810589] } }, { type: "Feature", properties: { name: "Garden villa with barbecue and private pool", logo: "img/photo/content/spaces/carousel/54.jpg", location: "Benalmadena, Spain", price: 190, rating: 4.59 }, geometry: { type: "Point", coordinates: [-4.5506613, 36.5824784] } }, { type: "Feature", properties: { name: "Post colonial house with a private pool and tennis court", logo: "img/photo/content/spaces/carousel/55.jpg", location: "Torremolinos, Spain", price: 360, rating: 4.92 }, geometry: { type: "Point", coordinates: [-4.4979584, 36.6237396] } }, { type: "Feature", properties: { name: "Downtown private residence near to the town center", logo: "img/photo/content/spaces/carousel/56.jpg", location: "Malaga, Spain", price: 160, rating: 4.43 }, geometry: { type: "Point", coordinates: [-4.3996901, 36.7264069] } }] };
            return {
                init: function() {
                    var n = this;
                    mapboxgl.accessToken = "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
                    var i = parseFloat(document.getElementById("places-map").getAttribute("data-long")),
                        o = parseFloat(document.getElementById("places-map").getAttribute("data-lat"));
                    (e = new mapboxgl.Map({ container: "places-map", style: "mapbox://styles/mapbox/light-v10", center: [i, o], zoom: 10 })).addControl(new mapboxgl.NavigationControl), e.on("styledata", (function() {! function t() { e.isStyleLoaded() ? n.loadLayers() : setTimeout(t, 1500) }() })), document.querySelectorAll(".map-popup-trigger").forEach((function(e) {
                        e.addEventListener("click", (function(i) {
                            var o = e.closest(".map-popup-item"),
                                r = parseInt(o.getAttribute("data-location")),
                                s = t.features[r].geometry.coordinates,
                                a = t.features[r].properties.name,
                                l = t.features[r].properties.logo,
                                c = t.features[r].properties.location,
                                u = t.features[r].properties.price,
                                d = t.features[r].properties.rating;
                            n.displayPopup({ coordinates: s, name: a, price: u, logo: l, location: c, rating: d })
                        }))
                    }))
                },
                displayPopup: function(t) {
                    var n = document.getElementsByClassName("mapboxgl-popup");
                    n.length && n[0].remove(), e.flyTo({ center: t.coordinates, zoom: 15, bearing: 0, essential: !0 });
                    var i = '<div class="map-box-location">\n        <div class="map-box-header">\n          <div class="location-pic">\n            <div class="rating-badge">\n              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>\n              <span>'.concat(t.rating, '</span>\n            </div>\n            <img\n              src="').concat(t.logo, '"\n              alt=""\n            />\n          </div>\n        </div>\n        <div class="map-box-body">\n          <div class="location-meta">\n            <span>').concat(t.name, "</span>\n            <span>").concat(t.location, "</span>\n          </div>\n          <p>Starting from <b>$").concat(t.price, "</b>/night</p>\n        </div>\n      </div>");
                    (new mapboxgl.Popup).setLngLat(t.coordinates).setHTML(i).addTo(e)
                },
                loadLayers: function() {
                    var n = this;
                    e.getSource("places") || (e.addSource("places", { type: "geojson", data: t }), e.addLayer({ id: "places", type: "circle", source: "places", paint: { "circle-color": "#671cc9", "circle-radius": 6, "circle-stroke-width": 2, "circle-stroke-color": "#fff" } }), e.on("click", "places", (function(e) {
                        for (var t = e.features[0].geometry.coordinates.slice(), i = e.features[0].properties.price, o = e.features[0].properties.logo, r = e.features[0].properties.name, s = e.features[0].properties.location, a = e.features[0].properties.rating; Math.abs(e.lngLat.lng - t[0]) > 180;) t[0] += e.lngLat.lng > t[0] ? 360 : -360;
                        n.displayPopup({ coordinates: t, name: r, price: i, logo: o, location: s, rating: a })
                    })), e.on("mouseenter", "places", (function() { e.getCanvas().style.cursor = "pointer" })), e.on("mouseleave", "places", (function() { e.getCanvas().style.cursor = "" })))
                }
            }
        }
    }, {}],
    30: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initFeaturedHosts = function() { return { init: (0, i.initGlide)() } };
        var i = e("../../components/glider/glider")
    }, { "../../components/glider/glider": 14 }],
    31: [function(e, t, n) {
        "use strict";
        var i = e("./demo/landing-demos"),
            o = e("./listing/listing-navbar"),
            r = e("./listing/listing-dates"),
            s = e("./listing/listing-glides"),
            a = e("./listing/listing-map"),
            l = e("./listing/listing-content"),
            c = e("./listing/listing-calendar"),
            u = e("./listing/listing-cover"),
            d = e("./testimonials/testimonials"),
            h = e("./flat/flats-map"),
            p = e("./hosts/featured-hosts"),
            f = e("./careers/career-tabs"),
            m = e("./contact/contact-map");
        window.initRenderDemos = i.initRenderDemos, window.initListingNavbar = o.initListingNavbar, window.initCover = u.initCover, window.initListingDates = r.initListingDates, window.initMoreListings = s.initMoreListings, window.initUpcomingListings = s.initUpcomingListings, window.initBestRatedListings = s.initBestRatedListings, window.initSuggestedListings = s.initSuggestedListings, window.initListingCategories = s.initListingCategories, window.initListingMap = a.initListingMap, window.initListingContent = l.initListingContent, window.initListingCalendar = c.initListingCalendar, window.initFlatCarousels = s.initFlatCarousels, window.initFlatsMap = h.initFlatsMap, window.initFeaturedHosts = p.initFeaturedHosts, window.initCareerTabs = f.initCareerTabs, window.initJobTabs = f.initJobTabs, window.initTestimonials = d.initTestimonials, window.initContactMap = m.initContactMap
    }, { "./careers/career-tabs": 26, "./contact/contact-map": 27, "./demo/landing-demos": 28, "./flat/flats-map": 29, "./hosts/featured-hosts": 30, "./listing/listing-calendar": 32, "./listing/listing-content": 33, "./listing/listing-cover": 34, "./listing/listing-dates": 35, "./listing/listing-glides": 36, "./listing/listing-map": 37, "./listing/listing-navbar": 38, "./testimonials/testimonials": 39 }],
    32: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initListingCalendar = function() {
            return {
                init: function() {
                    (0, i.staticStartDatepicker)(), (0, i.staticEndDatepicker)()
                }
            }
        };
        var i = e("../../forms/datepicker")
    }, { "../../forms/datepicker": 22 }],
    33: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initListingContent = function() { return { isDescriptionExpanded: !1, toggleListingDescription: function() { this.isDescriptionExpanded = !this.isDescriptionExpanded } } }
    }, {}],
    34: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initCover = function() { return { gallery: lightGallery(document.getElementById("lightgallery"), { selector: "a" }) } }, e("lightgallery.js")
    }, { "lightgallery.js": 9 }],
    35: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initListingDates = function() { return { dateGlides: (0, i.initListingGlide)() } };
        var i = e("../../components/glider/glider")
    }, { "../../components/glider/glider": 14 }],
    36: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initBestRatedListings = function() { return { bestRatedEvents: (0, i.initBestRatedListingsGlide)() } }, n.initFlatCarousels = function() { return { flatCarousels: (0, i.initFlatCarouselsGlide)() } }, n.initListingCategories = function() { return { eventCategories: (0, i.initListingCategoriesGlide)() } }, n.initMoreListings = function() { return { moreGlides: (0, i.initMoreListingsGlide)() } }, n.initSuggestedListings = function() { return { suggestedEvents: (0, i.initSuggestedListingsGlide)() } }, n.initUpcomingListings = function() { return { upcomingEvents: (0, i.initUpcomingListingsGlide)() } };
        var i = e("../../components/glider/glider")
    }, { "../../components/glider/glider": 14 }],
    37: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initListingMap = function() {
            var e = { color: "red" };
            return {
                initMainMap: function() {
                    mapboxgl.accessToken = "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
                    var t = parseFloat(document.getElementById("main-map").getAttribute("data-long")),
                        n = parseFloat(document.getElementById("main-map").getAttribute("data-lat")),
                        i = new mapboxgl.Map({ container: "main-map", style: "mapbox://styles/mapbox/light-v10", center: [t, n], zoom: 12 }),
                        o = new mapboxgl.Map({ container: "sub-map", style: "mapbox://styles/mapbox/light-v10", center: [t, n], zoom: 12 });
                    i.addControl(new mapboxgl.NavigationControl), o.addControl(new mapboxgl.NavigationControl);
                    new mapboxgl.Marker(e).setLngLat([t, n]).addTo(i), new mapboxgl.Marker(e).setLngLat([t, n]).addTo(o)
                }
            }
        }
    }, {}],
    38: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initListingNavbar = function() {
            return {
                scrolled: !1,
                scrolledFull: !1,
                height: 160,
                bookingHeight: 2500,
                init: function() {
                    var e = document.querySelector("[data-listing]").getAttribute("data-listing"),
                        t = document.getElementById("listing-navigation-action");
                    "event" === e ? t.innerText = "Book this event" : "flat" === e ? t.innerText = "Book this venue" : "trip" === e && (t.innerText = "Book this trip")
                },
                scroll: function() {
                    var e = window.scrollY;
                    e >= this.height ? this.scrolled = !0 : this.scrolled = !1, e >= this.bookingHeight ? this.scrolledFull = !0 : this.scrolledFull = !1, this.searchExpanded = !1
                },
                initScrollAnchors: function() {
                    document.querySelectorAll('.scroll-link[href^="#"]').forEach((function(e) {
                        e.onclick = function(e) {
                            e.preventDefault();
                            var t = this.getAttribute("href"),
                                n = document.querySelector(t).offsetTop - 0;
                            window.scrollTo({ top: n, behavior: "smooth" })
                        }
                    }))
                }
            }
        }
    }, {}],
    39: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initTestimonials = function() {
            return {
                setup: function() {
                    ! function() {
                        var e = document.querySelectorAll(".author"),
                            t = document.querySelector(".testimonials-wrapper"),
                            n = (document.querySelector(".testimonials-block"), document.querySelector(".name")),
                            i = document.querySelector(".text"),
                            o = [{ text: "I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!", name: "Selena Martinez", color: "rgba(103, 28, 201,1.0)" }, { text: "Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough.", name: "Karie Hehn", color: "rgba(123, 34, 224,1.0)" }, { text: "Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.", name: "Steve P. Huard", color: "rgba(73, 17, 138,1.0)" }, { text: "Florin has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.", name: "Matt Dilon", color: "rgba(121, 0, 196,1.0)" }, { text: "I hired Florin Pop based on others positive experiences, and I understand why he's so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.", name: "Corina Sparks", color: "rgba(85, 34, 153,1.0)" }];

                        function r(r) {
                            var s = o[r];
                            n.innerHTML = s.name, i.innerHTML = s.text, t.style.background = s.color, e.forEach((function(e) { e.classList.remove("selected") }))
                        }
                        e.forEach((function(e, t) { e.addEventListener("click", (function(n) { r(t), e.classList.add("selected") })) })), r(0)
                    }()
                }
            }
        }
    }, {}],
    40: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.env = void 0;
        n.env = ""
    }, {}],
    41: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.initLazyLoading = function() {
            var e = document.querySelectorAll("[data-lazy-load]");
            if (void 0 !== e && null != e) {
                var t = (0, o.default)(e, { loaded: function(e) { e.parentNode.classList.add("loaded") } });
                t.observe()
            }
        };
        var i, o = (i = e("lozad")) && i.__esModule ? i : { default: i }
    }, { lozad: 10 }],
    42: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.getUrlParams = function(e) { var t = window.location.search; return new URLSearchParams(t).get(e) }, n.initModals = function() {
            var e = document.querySelector(".main-navigation"),
                t = document.querySelectorAll(".modal-trigger");
            if (void 0 !== t && null != t)
                for (var n = 0, i = t.length; n < i; n++) t[n].addEventListener("click", (function(t) {
                    var n = this.getAttribute("data-modal");
                    document.querySelector("#" + n).classList.add("is-active");
                    var i = document.documentElement.style.getPropertyValue("--scroll-y"),
                        o = document.body;
                    o.style.width = "100%", o.style.paddingRight = "15px", o.style.position = "fixed", o.style.top = "-".concat(i), void 0 !== e && null != e && e.classList.add("backdropped")
                }));
            if (void 0 !== (t = document.querySelectorAll(".modal-dismiss")) && null != t)
                for (n = 0, i = t.length; n < i; n++) t[n].addEventListener("click", (function(t) {
                    var n = document.body,
                        i = n.style.top;
                    n.style.position = "", n.style.paddingRight = "", n.style.width = "", n.style.top = "", window.scrollTo(0, -1 * parseInt(i || "0")), this.closest(".modal").classList.remove("is-active"), void 0 !== e && null != e && e.classList.remove("backdropped")
                }));
            window.addEventListener("scroll", (function() { document.documentElement.style.setProperty("--scroll-y", "".concat(window.scrollY, "px")) }))
        }, n.initVideoPlayers = function(e) {
            var t = document.querySelector(".video-player");
            if (void 0 !== t && null != t)
                if ("development" === e) {
                    for (var n = document.querySelectorAll("[data-demo-poster]"), i = 0, r = n.length; i < r; i++) {
                        var s = n[i].getAttribute("data-demo-poster");
                        void 0 !== s && n[i].setAttribute("data-poster", s)
                    }
                    Array.from(document.querySelectorAll(".video-player")).map((function(e) { return new o.default(e) }))
                } else Array.from(document.querySelectorAll(".video-player")).map((function(e) { return new o.default(e) }))
        }, n.insertBgImages = function(e) {
            if ("development" != e) {
                var t = document.querySelectorAll("[data-background]");
                if (void 0 !== t && null != t)
                    for (var n = 0, i = t.length; n < i; n++) {
                        var o = t[n].getAttribute("data-background");
                        t[n].style.backgroundSize = "cover", t[n].style.backgroundRepeat = "no-repeat", t[n].style.backgroundImage = "url(".concat(o, ")")
                    }
            } else {
                var r = document.querySelectorAll("[data-demo-background]");
                if (void 0 !== r && null != r)
                    for (n = 0, i = r.length; n < i; n++) {
                        var s = r[n].getAttribute("data-demo-background");
                        r[n].style.backgroundSize = "cover", r[n].style.backgroundRepeat = "no-repeat", r[n].style.backgroundImage = "url(".concat(s, ")")
                    }
            }
        }, n.insertHrefs = function(e) {
            if ("development" === e) {
                var t = document.querySelectorAll("[data-demo-href]");
                if (void 0 !== t && null != t)
                    for (var n = 0, i = t.length; n < i; n++) {
                        var o = t[n].getAttribute("data-demo-href");
                        t[n].setAttribute("href", o)
                    }
            }
        }, n.insertPosters = function(e) {
            if ("development" === e) {
                var t = document.querySelectorAll("[data-demo-poster]");
                if (void 0 !== t && null != t)
                    for (var n = 0, i = t.length; n < i; n++) {
                        var o = t[n].getAttribute("data-demo-poster");
                        t[n].setAttribute("poster", o)
                    }
            }
        }, n.switchDemoImages = function(e) {
            if ("development" === e) {
                var t = document.querySelectorAll("[data-demo-src]");
                if (void 0 !== t && null != t)
                    for (var n = 0, i = t.length; n < i; n++) {
                        var o = t[n].getAttribute("data-demo-src");
                        t[n].setAttribute("src", o)
                    }
            }
        };
        var i, o = (i = e("plyr")) && i.__esModule ? i : { default: i }
    }, { plyr: 11 }],
    43: [function(e, t, n) {
        "use strict";
        var i = u(e("alpinejs")),
            o = u(e("@alpinejs/intersect")),
            r = u(e("@ryangjchandler/fern")),
            s = e("./libs/utils/constants");
        e("./libs/components"), e("./libs/forms"), e("./libs/sections");
        var a = e("./libs/components/pageloader/pageloader"),
            l = e("./libs/utils/lazyload"),
            c = e("./libs/utils/utils");

        function u(e) { return e && e.__esModule ? e : { default: e } }
        var d = e("feather-icons");
        window.Alpine = i.default, i.default.plugin(o.default), i.default.plugin(r.default), i.default.persistedStore("app", { isLoggedIn: !1 }), i.default.start();
        (0, a.initPageLoader)();
        document.onreadystatechange = function() { if ("complete" == document.readyState)(0, c.switchDemoImages)(s.env), (0, l.initLazyLoading)(), (0, c.insertBgImages)(s.env), (0, c.insertHrefs)(s.env), (0, c.insertPosters)(s.env), d.replace(), (0, c.initModals)(), (0, c.initVideoPlayers)(s.env) }
    }, { "./libs/components": 15, "./libs/components/pageloader/pageloader": 20, "./libs/forms": 23, "./libs/sections": 31, "./libs/utils/constants": 40, "./libs/utils/lazyload": 41, "./libs/utils/utils": 42, "@alpinejs/intersect": 1, "@ryangjchandler/fern": 3, alpinejs: 4, "feather-icons": 6 }]
}, {}, [43]);