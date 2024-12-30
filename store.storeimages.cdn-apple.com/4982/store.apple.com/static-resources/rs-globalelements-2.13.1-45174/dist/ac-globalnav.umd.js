! function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
            "use strict";
            var e, t, s, n, i, a, o, l = {},
                r = [],
                u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function c(e, t) {
                for (var s in t) e[s] = t[s];
                return e
            }

            function h(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function m(t, s, n) {
                var i, a, o, l = {};
                for (o in s) "key" == o ? i = s[o] : "ref" == o ? a = s[o] : l[o] = s[o];
                if (arguments.length > 2 && (l.children = arguments.length > 3 ? e.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (o in t.defaultProps) void 0 === l[o] && (l[o] = t.defaultProps[o]);
                return d(t, l, i, a, null)
            }

            function d(e, n, i, a, o) {
                var l = {
                    type: e,
                    props: n,
                    key: i,
                    ref: a,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == o ? ++s : o
                };
                return null == o && null != t.vnode && t.vnode(l), l
            }

            function p(e) {
                return e.children
            }

            function g(e, t) {
                this.props = e, this.context = t
            }

            function _(e, t) {
                if (null == t) return e.__ ? _(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var s; t < e.__k.length; t++)
                    if (null != (s = e.__k[t]) && null != s.__e) return s.__e;
                return "function" == typeof e.type ? _(e) : null
            }

            function b(e) {
                var t, s;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (s = e.__k[t]) && null != s.__e) {
                            e.__e = e.__c.base = s.__e;
                            break
                        }
                    return b(e)
                }
            }

            function v(e) {
                (!e.__d && (e.__d = !0) && i.push(e) && !f.__r++ || a !== t.debounceRendering) && ((a = t.debounceRendering) || setTimeout)(f)
            }

            function f() {
                for (var e; f.__r = i.length;) e = i.sort((function(e, t) {
                    return e.__v.__b - t.__v.__b
                })), i = [], e.some((function(e) {
                    var t, s, n, i, a, o;
                    e.__d && (a = (i = (t = e).__v).__e, (o = t.__P) && (s = [], (n = c({}, i)).__v = i.__v + 1, k(o, i, n, t.__n, void 0 !== o.ownerSVGElement, null != i.__h ? [a] : null, s, null == a ? _(i) : a, i.__h), M(s, i), i.__e != a && b(i)))
                }))
            }

            function y(e, t, s, n, i, a, o, u, c, h) {
                var m, g, b, v, f, y, E, N = n && n.__k || r,
                    L = N.length;
                for (s.__k = [], m = 0; m < t.length; m++)
                    if (null != (v = s.__k[m] = null == (v = t[m]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? d(null, v, null, null, v) : Array.isArray(v) ? d(p, {
                            children: v
                        }, null, null, null) : v.__b > 0 ? d(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
                        if (v.__ = s, v.__b = s.__b + 1, null === (b = N[m]) || b && v.key == b.key && v.type === b.type) N[m] = void 0;
                        else
                            for (g = 0; g < L; g++) {
                                if ((b = N[g]) && v.key == b.key && v.type === b.type) {
                                    N[g] = void 0;
                                    break
                                }
                                b = null
                            }
                        k(e, v, b = b || l, i, a, o, u, c, h), f = v.__e, (g = v.ref) && b.ref != g && (E || (E = []), b.ref && E.push(b.ref, null, v), E.push(g, v.__c || f, v)), null != f ? (null == y && (y = f), "function" == typeof v.type && v.__k === b.__k ? v.__d = c = S(v, c, e) : c = w(e, v, b, N, f, c), "function" == typeof s.type && (s.__d = c)) : c && b.__e == c && c.parentNode != e && (c = _(b))
                    }
                for (s.__e = y, m = L; m--;) null != N[m] && O(N[m], N[m]);
                if (E)
                    for (m = 0; m < E.length; m++) F(E[m], E[++m], E[++m])
            }

            function S(e, t, s) {
                for (var n, i = e.__k, a = 0; i && a < i.length; a++)(n = i[a]) && (n.__ = e, t = "function" == typeof n.type ? S(n, t, s) : w(s, n, n, i, n.__e, t));
                return t
            }

            function E(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                    E(e, t)
                })) : t.push(e)), t
            }

            function w(e, t, s, n, i, a) {
                var o, l, r;
                if (void 0 !== t.__d) o = t.__d, t.__d = void 0;
                else if (null == s || i != a || null == i.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(i), o = null;
                    else {
                        for (l = a, r = 0;
                            (l = l.nextSibling) && r < n.length; r += 2)
                            if (l == i) break e;
                        e.insertBefore(i, a), o = a
                    }
                return void 0 !== o ? o : i.nextSibling
            }

            function N(e, t, s) {
                "-" === t[0] ? e.setProperty(t, s) : e[t] = null == s ? "" : "number" != typeof s || u.test(t) ? s : s + "px"
            }

            function L(e, t, s, n, i) {
                var a;
                e: if ("style" === t)
                    if ("string" == typeof s) e.style.cssText = s;
                    else {
                        if ("string" == typeof n && (e.style.cssText = n = ""), n)
                            for (t in n) s && t in s || N(e.style, t, "");
                        if (s)
                            for (t in s) n && s[t] === n[t] || N(e.style, t, s[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = s, s ? n || e.addEventListener(t, a ? C : A, a) : e.removeEventListener(t, a ? C : A, a);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == s ? "" : s;
                        break e
                    } catch {}
                    "function" == typeof s || (null == s || !1 === s && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, s))
                }
            }

            function A(e) {
                this.l[e.type + !1](t.event ? t.event(e) : e)
            }

            function C(e) {
                this.l[e.type + !0](t.event ? t.event(e) : e)
            }

            function k(s, n, i, a, o, r, u, m, d) {
                var b, v, f, S, E, w, N, A, C, k, M, F, O, x, T, I = n.type;
                if (void 0 !== n.constructor) return null;
                null != i.__h && (d = i.__h, m = n.__e = i.__e, n.__h = null, r = [m]), (b = t.__b) && b(n);
                try {
                    e: if ("function" == typeof I) {
                        if (A = n.props, C = (b = I.contextType) && a[b.__c], k = b ? C ? C.props.value : b.__ : a, i.__c ? N = (v = n.__c = i.__c).__ = v.__E : ("prototype" in I && I.prototype.render ? n.__c = v = new I(A, k) : (n.__c = v = new g(A, k), v.constructor = I, v.render = $), C && C.sub(v), v.props = A, v.state || (v.state = {}), v.context = k, v.__n = a, f = v.__d = !0, v.__h = [], v._sb = []), null == v.__s && (v.__s = v.state), null != I.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, I.getDerivedStateFromProps(A, v.__s))), S = v.props, E = v.state, f) null == I.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
                        else {
                            if (null == I.getDerivedStateFromProps && A !== S && null != v.componentWillReceiveProps && v.componentWillReceiveProps(A, k), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(A, v.__s, k) || n.__v === i.__v) {
                                for (v.props = A, v.state = v.__s, n.__v !== i.__v && (v.__d = !1), v.__v = n, n.__e = i.__e, n.__k = i.__k, n.__k.forEach((function(e) {
                                        e && (e.__ = n)
                                    })), M = 0; M < v._sb.length; M++) v.__h.push(v._sb[M]);
                                v._sb = [], v.__h.length && u.push(v);
                                break e
                            }
                            null != v.componentWillUpdate && v.componentWillUpdate(A, v.__s, k), null != v.componentDidUpdate && v.__h.push((function() {
                                v.componentDidUpdate(S, E, w)
                            }))
                        }
                        if (v.context = k, v.props = A, v.__v = n, v.__P = s, F = t.__r, O = 0, "prototype" in I && I.prototype.render) {
                            for (v.state = v.__s, v.__d = !1, F && F(n), b = v.render(v.props, v.state, v.context), x = 0; x < v._sb.length; x++) v.__h.push(v._sb[x]);
                            v._sb = []
                        } else
                            do {
                                v.__d = !1, F && F(n), b = v.render(v.props, v.state, v.context), v.state = v.__s
                            } while (v.__d && ++O < 25);
                        v.state = v.__s, null != v.getChildContext && (a = c(c({}, a), v.getChildContext())), f || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(S, E)), T = null != b && b.type === p && null == b.key ? b.props.children : b, y(s, Array.isArray(T) ? T : [T], n, i, a, o, r, u, m, d), v.base = n.__e, n.__h = null, v.__h.length && u.push(v), N && (v.__E = v.__ = null), v.__e = !1
                    } else null == r && n.__v === i.__v ? (n.__k = i.__k, n.__e = i.__e) : n.__e = function(t, s, n, i, a, o, r, u) {
                        var c, m, d, p = n.props,
                            g = s.props,
                            b = s.type,
                            v = 0;
                        if ("svg" === b && (a = !0), null != o)
                            for (; v < o.length; v++)
                                if ((c = o[v]) && "setAttribute" in c == !!b && (b ? c.localName === b : 3 === c.nodeType)) {
                                    t = c, o[v] = null;
                                    break
                                }
                        if (null == t) {
                            if (null === b) return document.createTextNode(g);
                            t = a ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, g.is && g), o = null, u = !1
                        }
                        if (null === b) p === g || u && t.data === g || (t.data = g);
                        else {
                            if (o = o && e.call(t.childNodes), m = (p = n.props || l).dangerouslySetInnerHTML, d = g.dangerouslySetInnerHTML, !u) {
                                if (null != o)
                                    for (p = {}, v = 0; v < t.attributes.length; v++) p[t.attributes[v].name] = t.attributes[v].value;
                                (d || m) && (d && (m && d.__html == m.__html || d.__html === t.innerHTML) || (t.innerHTML = d && d.__html || ""))
                            }
                            if (function(e, t, s, n, i) {
                                    var a;
                                    for (a in s) "children" === a || "key" === a || a in t || L(e, a, null, s[a], n);
                                    for (a in t) i && "function" != typeof t[a] || "children" === a || "key" === a || "value" === a || "checked" === a || s[a] === t[a] || L(e, a, t[a], s[a], n)
                                }(t, g, p, a, u), d) s.__k = [];
                            else if (v = s.props.children, y(t, Array.isArray(v) ? v : [v], s, n, i, a && "foreignObject" !== b, o, r, o ? o[0] : n.__k && _(n, 0), u), null != o)
                                for (v = o.length; v--;) null != o[v] && h(o[v]);
                            u || ("value" in g && void 0 !== (v = g.value) && (v !== t.value || "progress" === b && !v || "option" === b && v !== p.value) && L(t, "value", v, p.value, !1), "checked" in g && void 0 !== (v = g.checked) && v !== t.checked && L(t, "checked", v, p.checked, !1))
                        }
                        return t
                    }(i.__e, n, i, a, o, r, u, d);
                    (b = t.diffed) && b(n)
                }
                catch (e) {
                    n.__v = null, (d || null != r) && (n.__e = m, n.__h = !!d, r[r.indexOf(m)] = null), t.__e(e, n, i)
                }
            }

            function M(e, s) {
                t.__c && t.__c(s, e), e.some((function(s) {
                    try {
                        e = s.__h, s.__h = [], e.some((function(e) {
                            e.call(s)
                        }))
                    } catch (e) {
                        t.__e(e, s.__v)
                    }
                }))
            }

            function F(e, s, n) {
                try {
                    "function" == typeof e ? e(s) : e.current = s
                } catch (e) {
                    t.__e(e, n)
                }
            }

            function O(e, s, n) {
                var i, a;
                if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || F(i, null, s)), null != (i = e.__c)) {
                    if (i.componentWillUnmount) try {
                        i.componentWillUnmount()
                    } catch (e) {
                        t.__e(e, s)
                    }
                    i.base = i.__P = null, e.__c = void 0
                }
                if (i = e.__k)
                    for (a = 0; a < i.length; a++) i[a] && O(i[a], s, n || "function" != typeof e.type);
                n || null == e.__e || h(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function $(e, t, s) {
                return this.constructor(e, s)
            }

            function x(s, n, i) {
                var a, o, r;
                t.__ && t.__(s, n), o = (a = "function" == typeof i) ? null : i && i.__k || n.__k, r = [], k(n, s = (!a && i || n).__k = m(p, null, [s]), o || l, l, void 0 !== n.ownerSVGElement, !a && i ? [i] : o ? null : n.firstChild ? e.call(n.childNodes) : null, r, !a && i ? i : o ? o.__e : n.firstChild, a), M(r, s)
            }

            function T(e, t) {
                x(e, t, T)
            }

            function I(e, t) {
                var s = {
                    __c: t = "__cC" + o++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var s, n;
                        return this.getChildContext || (s = [], (n = {})[t] = this, this.getChildContext = function() {
                            return n
                        }, this.shouldComponentUpdate = function(e) {
                            this.props.value !== e.value && s.some(v)
                        }, this.sub = function(e) {
                            s.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                s.splice(s.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return s.Provider.__ = s.Consumer.contextType = s
            }
            e = r.slice, t = {
                __e: function(e, t, s, n) {
                    for (var i, a, o; t = t.__;)
                        if ((i = t.__c) && !i.__) try {
                            if ((a = i.constructor) && null != a.getDerivedStateFromError && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, n || {}), o = i.__d), o) return i.__E = i
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, s = 0, n = function(e) {
                return null != e && void 0 === e.constructor
            }, g.prototype.setState = function(e, t) {
                var s;
                s = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof e && (e = e(c({}, s), this.props)), e && c(s, e), null != e && this.__v && (t && this._sb.push(t), v(this))
            }, g.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), v(this))
            }, g.prototype.render = p, i = [], f.__r = 0, o = 0;
            var R, P, D, B, H = Object.freeze(Object.defineProperty({
                    __proto__: null,
                    Component: g,
                    Fragment: p,
                    cloneElement: function(t, s, n) {
                        var i, a, o, l = c({}, t.props);
                        for (o in s) "key" == o ? i = s[o] : "ref" == o ? a = s[o] : l[o] = s[o];
                        return arguments.length > 2 && (l.children = arguments.length > 3 ? e.call(arguments, 2) : n), d(t.type, l, i || t.key, a || t.ref, null)
                    },
                    createContext: I,
                    createElement: m,
                    createRef: function() {
                        return {
                            current: null
                        }
                    },
                    h: m,
                    hydrate: T,
                    get isValidElement() {
                        return n
                    },
                    get options() {
                        return t
                    },
                    render: x,
                    toChildArray: E
                }, Symbol.toStringTag, {
                    value: "Module"
                })),
                W = 0,
                U = [],
                q = [],
                V = t.__b,
                j = t.__r,
                Z = t.diffed,
                z = t.__c,
                G = t.unmount;

            function K(e, s) {
                t.__h && t.__h(P, e, W || s), W = 0;
                var n = P.__H || (P.__H = {
                    __: [],
                    __h: []
                });
                return e >= n.__.length && n.__.push({
                    __V: q
                }), n.__[e]
            }

            function Q(e) {
                return W = 1, Y(ce, e)
            }

            function Y(e, t, s) {
                var n = K(R++, 2);
                if (n.t = e, !n.__c && (n.__ = [s ? s(t) : ce(void 0, t), function(e) {
                        var t = n.__N ? n.__N[0] : n.__[0],
                            s = n.t(t, e);
                        t !== s && (n.__N = [s, n.__[1]], n.__c.setState({}))
                    }], n.__c = P, !P.u)) {
                    P.u = !0;
                    var i = P.shouldComponentUpdate;
                    P.shouldComponentUpdate = function(e, t, s) {
                        if (!n.__c.__H) return !0;
                        var a = n.__c.__H.__.filter((function(e) {
                            return e.__c
                        }));
                        if (a.every((function(e) {
                                return !e.__N
                            }))) return !i || i.call(this, e, t, s);
                        var o = !1;
                        return a.forEach((function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
                            }
                        })), !(!o && n.__c.props === e) && (!i || i.call(this, e, t, s))
                    }
                }
                return n.__N || n.__
            }

            function J(e, s) {
                var n = K(R++, 3);
                !t.__s && ue(n.__H, s) && (n.__ = e, n.i = s, P.__H.__h.push(n))
            }

            function X(e, s) {
                var n = K(R++, 4);
                !t.__s && ue(n.__H, s) && (n.__ = e, n.i = s, P.__h.push(n))
            }

            function ee(e) {
                return W = 5, te((function() {
                    return {
                        current: e
                    }
                }), [])
            }

            function te(e, t) {
                var s = K(R++, 7);
                return ue(s.__H, t) ? (s.__V = e(), s.i = t, s.__h = e, s.__V) : s.__
            }

            function se(e, t) {
                return W = 8, te((function() {
                    return e
                }), t)
            }

            function ne(e) {
                var t = P.context[e.__c],
                    s = K(R++, 9);
                return s.c = e, t ? (null == s.__ && (s.__ = !0, t.sub(P)), t.props.value) : e.__
            }

            function ie() {
                for (var e; e = U.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(le), e.__H.__h.forEach(re), e.__H.__h = []
                    } catch (s) {
                        e.__H.__h = [], t.__e(s, e.__v)
                    }
            }
            t.__b = function(e) {
                "function" != typeof e.type || e.__m || null === e.__ ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0), P = null, V && V(e)
            }, t.__r = function(e) {
                j && j(e), R = 0;
                var t = (P = e.__c).__H;
                t && (D === P ? (t.__h = [], P.__h = [], t.__.forEach((function(e) {
                    e.__N && (e.__ = e.__N), e.__V = q, e.__N = e.i = void 0
                }))) : (t.__h.forEach(le), t.__h.forEach(re), t.__h = [])), D = P
            }, t.diffed = function(e) {
                Z && Z(e);
                var s = e.__c;
                s && s.__H && (s.__H.__h.length && (1 !== U.push(s) && B === t.requestAnimationFrame || ((B = t.requestAnimationFrame) || oe)(ie)), s.__H.__.forEach((function(e) {
                    e.i && (e.__H = e.i), e.__V !== q && (e.__ = e.__V), e.i = void 0, e.__V = q
                }))), D = P = null
            }, t.__c = function(e, s) {
                s.some((function(e) {
                    try {
                        e.__h.forEach(le), e.__h = e.__h.filter((function(e) {
                            return !e.__ || re(e)
                        }))
                    } catch (n) {
                        s.some((function(e) {
                            e.__h && (e.__h = [])
                        })), s = [], t.__e(n, e.__v)
                    }
                })), z && z(e, s)
            }, t.unmount = function(e) {
                G && G(e);
                var s, n = e.__c;
                n && n.__H && (n.__H.__.forEach((function(e) {
                    try {
                        le(e)
                    } catch (e) {
                        s = e
                    }
                })), n.__H = void 0, s && t.__e(s, n.__v))
            };
            var ae = "function" == typeof requestAnimationFrame;

            function oe(e) {
                var t, s = function() {
                        clearTimeout(n), ae && cancelAnimationFrame(t), setTimeout(e)
                    },
                    n = setTimeout(s, 100);
                ae && (t = requestAnimationFrame(s))
            }

            function le(e) {
                var t = P,
                    s = e.__c;
                "function" == typeof s && (e.__c = void 0, s()), P = t
            }

            function re(e) {
                var t = P;
                e.__c = e.__(), P = t
            }

            function ue(e, t) {
                return !e || e.length !== t.length || t.some((function(t, s) {
                    return t !== e[s]
                }))
            }

            function ce(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            var he = Object.freeze(Object.defineProperty({
                __proto__: null,
                useCallback: se,
                useContext: ne,
                useDebugValue: function(e, s) {
                    t.useDebugValue && t.useDebugValue(s ? s(e) : e)
                },
                useEffect: J,
                useErrorBoundary: function(e) {
                    var t = K(R++, 10),
                        s = Q();
                    return t.__ = e, P.componentDidCatch || (P.componentDidCatch = function(e, n) {
                        t.__ && t.__(e, n), s[1](e)
                    }), [s[0], function() {
                        s[1](void 0)
                    }]
                },
                useId: function() {
                    var e = K(R++, 11);
                    return e.__ || (e.__ = "P" + function(e) {
                        for (var t = 0, s = e.length; s > 0;) t = (t << 5) - t + e.charCodeAt(--s) | 0;
                        return t
                    }(P.__v.__m) + R), e.__
                },
                useImperativeHandle: function(e, t, s) {
                    W = 6, X((function() {
                        return "function" == typeof e ? (e(t()), function() {
                            return e(null)
                        }) : e ? (e.current = t(), function() {
                            return e.current = null
                        }) : void 0
                    }), null == s ? s : s.concat(e))
                },
                useLayoutEffect: X,
                useMemo: te,
                useReducer: Y,
                useRef: ee,
                useState: Q
            }, Symbol.toStringTag, {
                value: "Module"
            }));

            function me(e) {
                return "true" === e
            }

            function de(e, t) {
                const s = {},
                    n = {};
                return e.forEach((e => {
                    const {
                        name: i,
                        content: a
                    } = e, o = function(e) {
                        return e.split("-").map(((e, t) => 0 === t ? e.toLowerCase() : e.charAt(0).toUpperCase() + e.slice(1))).join("")
                    }(i.replace(t, "")), l = function(e) {
                        return "true" === e || "false" === e ? me(e) : e
                    }(a), r = o.match(/\[(.*)\]$/i);
                    if (null !== r) {
                        const e = o.replace(r[0], ""),
                            t = r[1];
                        n[t] = l, s[e] = n
                    } else s[o] = l
                })), s
            }
            const pe = I(void 0),
                ge = pe.Provider,
                _e = pe.Consumer,
                be = "data-segment-code",
                ve = "globalmessage-segment-visible",
                fe = "ac-gn-segmentbar-visible",
                ye = (e, t) => {
                    var s, n;
                    e.showBanner ? (t(!0), null == (s = document.querySelector("html")) || s.classList.add(`${ve}`, `${fe}`), document.documentElement.setAttribute(`${be}`, e.segmentCode.toLowerCase())) : (t(!1), null == (n = document.querySelector("html")) || n.classList.remove(`${ve}`, `${fe}`), document.documentElement.removeAttribute(`${be}`))
                };
            var Se = 0;

            function Ee(e, s, n, i, a) {
                var o, l, r = {};
                for (l in s) "ref" == l ? o = s[l] : r[l] = s[l];
                var u = {
                    type: e,
                    props: r,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --Se,
                    __source: a,
                    __self: i
                };
                if ("function" == typeof e && (o = e.defaultProps))
                    for (l in o) void 0 === r[l] && (r[l] = o[l]);
                return t.vnode && t.vnode(u), u
            }
            const we = "/shop/goto/home",
                Ne = "/shop/goto/exitstore",
                Le = (e, t, s, n) => {
                    if (void 0 !== e.name && "" !== e.name) {
                        s(t.view.replace("{%STOREFRONT%}", e.name))
                    } else {
                        const n = ((e, t) => {
                            if (t in e && "" !== e[t]) return e[t];
                            const s = Object.keys(e);
                            let n = "";
                            return s.forEach((s => {
                                void 0 !== t && 0 === t.indexOf(`${s}-`) && "" !== e[s] && (n = e[s])
                            })), "" !== n ? n : e.other
                        })(t.segments, e.segmentCode);
                        s(n)
                    }
                    ye(e, n)
                };

            function Ae({
                view: e,
                segments: t,
                exit: s,
                exitRedirect: n = !1,
                wwwDomain: i,
                storeUrlPath: a
            }) {
                const o = ne(pe),
                    l = ee(null),
                    [r, u] = Q(""),
                    [c, h] = Q(!1),
                    m = `https://${i}${a}${we}`,
                    d = `https://${i}${a}${Ne}`;
                J((() => {
                    var e, t;
                    if (void 0 !== (null == (e = l.current) ? void 0 : e.dataset.strings)) {
                        const e = JSON.parse(String(null == (t = l.current) ? void 0 : t.dataset.strings));
                        null == o || o.getStorefront().then((t => {
                            Le(t, e, u, h)
                        }), (() => {})), null == o || o.on("storefrontChange", (t => {
                            Le(t, e, u, h)
                        }))
                    }
                }), [o]);
                return Ee(p, {
                    children: Ee("ul", {
                        class: "globalmessage-segment-content",
                        "data-strings": JSON.stringify({
                            view: e,
                            segments: t,
                            exit: s
                        }),
                        ref: l,
                        children: c && Ee(p, {
                            children: [Ee("li", {
                                class: "globalmessage-segment-item",
                                children: Ee("a", {
                                    href: m,
                                    class: "globalmessage-segment-link globalmessage-segment-view",
                                    children: r
                                })
                            }), Ee("li", {
                                class: "globalmessage-segment-item",
                                children: Ee("a", {
                                    href: d,
                                    class: "globalmessage-segment-link globalmessage-segment-exit",
                                    onClick: e => ((e, t) => {
                                        null == o || o.exitStorefront(e), e || (t.preventDefault(), null == o || o.getStorefront().then((e => {
                                            ye(e, h)
                                        }), (() => {}))), window.dispatchEvent(new CustomEvent("resize")), window.dispatchEvent(new CustomEvent("segmentExit"))
                                    })(n, e),
                                    children: s
                                })
                            })]
                        })
                    })
                })
            }

            function Ce({
                locale: e = "en-US",
                textDirection: t = "ltr",
                dataStrings: s,
                exitRedirect: n = !1,
                wwwDomain: i,
                storeUrlPath: a
            }) {
                return Ee("aside", {
                    id: "globalmessage-segment",
                    className: "globalmessage-segment",
                    lang: e,
                    dir: t,
                    children: Ee(Ae, { ...s,
                        exitRedirect: n,
                        wwwDomain: i,
                        storeUrlPath: a
                    })
                })
            }

            function ke({
                segmentData: e,
                isoLocale: t,
                textDirection: s = "ltr",
                wwwDomain: n,
                storeUrlPath: i
            }) {
                const a = ee(!1);
                return J((() => {
                    const e = document.querySelectorAll('meta[name^="globalmessage-"]'),
                        t = de(Array.from(e), "globalmessage-");
                    a.current = t.segmentRedirect
                }), []), Ee(p, {
                    children: void 0 !== e && void 0 !== i && Ee(Ce, {
                        locale: t,
                        textDirection: s,
                        exitRedirect: a.current,
                        dataStrings: e.dataStrings,
                        wwwDomain: n,
                        storeUrlPath: i
                    })
                })
            }
            var Me = {
                    _attachEvents() {
                        for (let e of this.events) Object.defineProperty(this.options.ref, e, {
                            value: (...t) => this.__triggerEvent(e, ...t),
                            configurable: !0,
                            enumerable: !1,
                            writable: !1
                        })
                    },
                    _attachMethods() {
                        for (let e of this.mixinsList)
                            for (let t in e) {
                                const s = Object.getOwnPropertyDescriptor(e, t);
                                switch (!0) {
                                    case "function" == typeof e[t] && !this.events.includes(t):
                                        Object.defineProperty(this.options.ref, t, {
                                            value: (...e) => this.__triggerMethod(t, ...e),
                                            enumerable: "_" !== t[0],
                                            configurable: !0,
                                            writable: !0
                                        });
                                        break;
                                    case !!s.set:
                                        Object.defineProperty(this.options.ref, t, {
                                            set: t => this._enabledMixins.includes(e) && s.set.call(this.options.ref, t)
                                        });
                                        break;
                                    case !!s.get:
                                        Object.defineProperty(this.options.ref, t, {
                                            get: () => this._enabledMixins.includes(e) && s.get.call(this.options.ref)
                                        })
                                }
                            }
                    },
                    _attachDefaultMethods(e) {
                        for (let t in e) this.options.ref[t] = (...s) => e[t].call(this, ...s)
                    }
                },
                Fe = {
                    _destroy() {
                        if (this.isDestroyed = !0, this.options.ref._viewportInfo = null, this.options.viewportEvents) {
                            for (const e of this.options.breakpoints) e.viewportQuery.removeEventListener("change", e._viewportChangeHandler);
                            this.orientationQuery.removeEventListener("change", this._orientationChangeHandler), this.retinaQuery.removeEventListener("change", this._retinaChangeHandler)
                        }
                    }
                },
                Oe = {
                    _proxifyReference(e, t = []) {
                        for (let [s, n] of Object.entries(e))
                            if (n && "object" == typeof n && !Array.isArray(n) && !n.nodeType) {
                                const i = t.concat([s]);
                                Object.defineProperty(n, "__isProxy", {
                                    value: !0
                                }), Object.defineProperty(n, "__path", {
                                    value: i
                                }), e[s] = new Proxy(n, this._proxyHandler()), this._proxifyReference(n, i)
                            }
                        return Object.defineProperty(e, "__isProxy", {
                            value: !0
                        }), Object.defineProperty(e, "__path", {
                            value: t
                        }), new Proxy(e, this._proxyHandler())
                    },
                    _proxyHandler() {
                        return {
                            get: (e, t, s) => {
                                if (this.currentMixin) {
                                    const s = e.__path ? e.__path.concat(t).join(".") : t;
                                    this.autoWatchedProps[s] = [...new Set(this.autoWatchedProps[s] ? this.autoWatchedProps[s].concat(this.currentMixin) : [this.currentMixin])]
                                }
                                return Reflect.get(e, t, s)
                            },
                            set: (e, t, s) => {
                                const n = e[t];
                                if (n !== s) {
                                    const i = s && "object" == typeof s && !Array.isArray(s) && !s.nodeType && !s instanceof NodeList && !s.__isProxy,
                                        a = e.__path ? e.__path.concat(t).join(".") : t;
                                    Reflect.set(e, t, i ? this._proxifyReference(s, a.split(".")) : s), Object.keys(this.autoWatchedProps).includes(a) && this._toggleMixins(a), Object.keys(this.options.watch).includes(a) && this.__triggerEvent(this.options.watch[a], {
                                        from: n,
                                        to: s
                                    })
                                }
                                return !0
                            }
                        }
                    }
                },
                $e = {
                    _toggleMixins(e) {
                        const t = [],
                            s = [];
                        for (let n of e ? this.autoWatchedProps[e] || [] : this.mixinsList) {
                            this.currentMixin = n;
                            const e = !n.isEnabledWhen || !0 === n.isEnabledWhen.call(this.options.ref);
                            switch (this.currentMixin = null, !0) {
                                case !1 === n._isEnabled && e:
                                    t.push(n), n._isEnabled = !0;
                                    break;
                                case !0 === n._isEnabled && !e:
                                    s.push(n), n._isEnabled = !1;
                                    break;
                                default:
                                    n._isEnabled = e
                            }
                        }
                        for (let e of s.reverse()) e.destroy && e.destroy.call(this.options.ref);
                        this._enabledMixins = this._getEnabledMixins();
                        for (let e of t) {
                            e._isEnabled = !0;
                            for (let t of this.options.setupEvents) e[t] && e[t].call(this.options.ref)
                        }
                    },
                    _getEnabledMixins() {
                        const e = [];
                        if (this.isDestroyed) return e;
                        const t = this.mixinsList.length;
                        for (let s = 0; s < t; s++) this.mixinsList[s]._isEnabled && e.push(this.mixinsList[s]);
                        return e
                    }
                },
                xe = {
                    __triggerEvent(e, ...t) {
                        if (this.isDestroyed) return this.options.ref;
                        for (this.queue.unshift({
                                event: e,
                                data: t
                            }); this.queue.length;) {
                            const {
                                event: e,
                                data: t
                            } = this.queue[0];
                            this.queue.shift();
                            const s = this._enabledMixins.length;
                            for (let n = 0; n < s; n++) {
                                const s = this._enabledMixins[n][e];
                                s && s.call(this.options.ref, ...t)
                            }
                        }
                        return "destroy" == e && this._destroy(), this.options.ref
                    },
                    __triggerMethod(e, ...t) {
                        if (this.isDestroyed) return;
                        let s = {
                            [e]: () => {}
                        };
                        for (let t = this._enabledMixins.length - 1; t >= 0; t--)
                            if (this._enabledMixins[t][e]) {
                                s = this._enabledMixins[t];
                                break
                            }
                        return s[e].call(this.options.ref, ...t)
                    }
                },
                Te = {
                    _setupViewportEvents(e, t, s) {
                        if (this.options.viewportEvents) {
                            this.events = [...new Set(this.events.concat(e))], this.options.ref._viewportInfo = {};
                            for (const e of this.options.breakpoints) {
                                const {
                                    name: t,
                                    mediaQuery: s
                                } = e;
                                e.viewportQuery = window.matchMedia(s), e.viewportQuery.matches && (this.options.ref._viewportInfo.viewport = t), e._viewportChangeHandler = this._viewportChangeHandler.bind(this, t), e.viewportQuery.addEventListener("change", e._viewportChangeHandler)
                            }
                            this.retinaQuery = window.matchMedia(s), this.orientationQuery = window.matchMedia(t), this.options.ref._viewportInfo.retina = this.retinaQuery.matches, this.options.ref._viewportInfo.orientation = this.orientationQuery.matches ? "portrait" : "landscape", this._retinaChangeHandler = this._retinaChangeHandler.bind(this), this._orientationChangeHandler = this._orientationChangeHandler.bind(this), this.retinaQuery.addEventListener("change", this._retinaChangeHandler), this.orientationQuery.addEventListener("change", this._orientationChangeHandler)
                        }
                    },
                    _viewportChangeHandler(e, {
                        matches: t
                    }) {
                        if (!t) return;
                        const s = {
                            type: "viewport",
                            from: this.options.ref._viewportInfo.viewport,
                            to: e
                        };
                        this.options.ref._viewportInfo.viewport = e, this.options.ref.onViewportChange(s), this.options.ref.onScreenChange(s)
                    },
                    _orientationChangeHandler({
                        matches: e
                    }) {
                        const t = e ? "portrait" : "landscape";
                        this.options.ref._viewportInfo.orientation = t;
                        const s = {
                            type: "orientation",
                            orientation: t
                        };
                        this.options.ref.onOrientationChange(s), this.options.ref.onScreenChange(s)
                    },
                    _retinaChangeHandler({
                        matches: e
                    }) {
                        this.options.ref._viewportInfo.retina = e;
                        const t = {
                            type: "retina",
                            retina: e
                        };
                        this.options.ref.onRetinaChange(t), this.options.ref.onScreenChange(t)
                    }
                };
            const Ie = {
                    breakpoints: [{
                        name: "S",
                        mediaQuery: "only screen and (max-width: 734px)"
                    }, {
                        name: "M",
                        mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
                    }, {
                        name: "L",
                        mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
                    }, {
                        name: "X",
                        mediaQuery: "only screen and (min-width: 1441px)"
                    }],
                    events: [],
                    ref: {},
                    setupEvents: [],
                    viewportEvents: !1,
                    watch: {}
                },
                Re = ["destroy"],
                Pe = ["onViewportChange", "onOrientationChange", "onRetinaChange", "onScreenChange"],
                De = {
                    __addEvents: function(...e) {
                        this.events = [...new Set(this.events.concat(...e))], this._attachEvents()
                    },
                    __forceUpdate: function(e) {
                        this._toggleMixins(e)
                    }
                };
            class Be {
                constructor(e, ...t) {
                    return Object.assign(Be.prototype, Oe, Te, xe, Me, $e, Fe), this.options = Object.assign({}, Ie, e), this.events = [...new Set(this.options.events.concat(Object.values(this.options.watch), Re))], this.mixinsList = [...new Set(t.flat(9999).map((e => e.default && e.default() || "function" == typeof e && e() || e)))], this.isDestroyed = !1, this.queue = [], this.autoWatchedProps = {}, this.currentMixin = null, this._enabledMixins = [], this._setupViewportEvents(Pe, "only screen and (orientation: portrait)", "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"), this._attachEvents(), this._attachMethods(), this._attachDefaultMethods(De), this.options.ref = this._proxifyReference(this.options.ref, []), this._toggleMixins(), this.options.ref
                }
            }
            var He = {
                onViewportChange(e) {
                    this._isLayoutChange(e) && this.onLayoutChange(this._isBreakpointWithMenu(), e)
                },
                _isLayoutChange(e) {
                    return this._isBreakpointWithMenu(e.from) != this._isBreakpointWithMenu(e.to)
                },
                _isBreakpointWithMenu(e = this._viewportInfo.viewport) {
                    return this._viewportsWithMenu.includes(e)
                },
                _getCurrentLayout() {
                    return this._isBreakpointWithMenu() ? "compact" : "regular"
                },
                _isTouch: () => document.documentElement.classList.contains("touch")
            };
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

            function We(e) {
                if (e.__esModule) return e;
                var t = Object.defineProperty({}, "__esModule", {
                    value: !0
                });
                return Object.keys(e).forEach((function(s) {
                    var n = Object.getOwnPropertyDescriptor(e, s);
                    Object.defineProperty(t, s, n.get ? n : {
                        enumerable: !0,
                        get: function() {
                            return e[s]
                        }
                    })
                })), t
            }
            var Ue = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CONTROL: 17,
                    ALT: 18,
                    COMMAND: 91,
                    CAPSLOCK: 20,
                    ESCAPE: 27,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    ARROW_LEFT: 37,
                    ARROW_UP: 38,
                    ARROW_RIGHT: 39,
                    ARROW_DOWN: 40,
                    DELETE: 46,
                    ZERO: 48,
                    ONE: 49,
                    TWO: 50,
                    THREE: 51,
                    FOUR: 52,
                    FIVE: 53,
                    SIX: 54,
                    SEVEN: 55,
                    EIGHT: 56,
                    NINE: 57,
                    A: 65,
                    B: 66,
                    C: 67,
                    D: 68,
                    E: 69,
                    F: 70,
                    G: 71,
                    H: 72,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    M: 77,
                    N: 78,
                    O: 79,
                    P: 80,
                    Q: 81,
                    R: 82,
                    S: 83,
                    T: 84,
                    U: 85,
                    V: 86,
                    W: 87,
                    X: 88,
                    Y: 89,
                    Z: 90,
                    NUMPAD_ZERO: 96,
                    NUMPAD_ONE: 97,
                    NUMPAD_TWO: 98,
                    NUMPAD_THREE: 99,
                    NUMPAD_FOUR: 100,
                    NUMPAD_FIVE: 101,
                    NUMPAD_SIX: 102,
                    NUMPAD_SEVEN: 103,
                    NUMPAD_EIGHT: 104,
                    NUMPAD_NINE: 105,
                    NUMPAD_ASTERISK: 106,
                    NUMPAD_PLUS: 107,
                    NUMPAD_DASH: 109,
                    NUMPAD_DOT: 110,
                    NUMPAD_SLASH: 111,
                    NUMPAD_EQUALS: 187,
                    TICK: 192,
                    LEFT_BRACKET: 219,
                    RIGHT_BRACKET: 221,
                    BACKSLASH: 220,
                    SEMICOLON: 186,
                    APOSTRAPHE: 222,
                    APOSTROPHE: 222,
                    SPACEBAR: 32,
                    CLEAR: 12,
                    COMMA: 188,
                    DOT: 190,
                    SLASH: 191
                },
                qe = {
                    selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
                    nodeName: {
                        INPUT: "input",
                        SELECT: "select",
                        TEXTAREA: "textarea",
                        BUTTON: "button",
                        OPTGROUP: "optgroup",
                        OPTION: "option",
                        MENUITEM: "menuitem",
                        FIELDSET: "fieldset",
                        OBJECT: "object",
                        A: "a"
                    }
                },
                Ve = function() {
                    this.focusableSelectors = qe.selectors
                },
                je = Ve.prototype;
            je.isFocusableElement = function(e, t, s) {
                return !(t && !this._isDisplayed(e)) && (qe.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || (s = s || parseFloat(e.getAttribute("tabindex")), !isNaN(s)))
            }, je.isTabbableElement = function(e, t) {
                if (t && !this._isDisplayed(e)) return !1;
                var s = e.getAttribute("tabindex");
                return s = parseFloat(s), isNaN(s) ? this.isFocusableElement(e, t, s) : s >= 0
            }, je._isDisplayed = function(e) {
                var t = e.getBoundingClientRect();
                return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
            }, je.getTabbableElements = function(e, t) {
                for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, i = [], a = 0; a < n; a++) this.isTabbableElement(s[a], t) && i.push(s[a]);
                return i
            }, je.getFocusableElements = function(e, t) {
                for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, i = [], a = 0; a < n; a++) this.isFocusableElement(s[a], t) && i.push(s[a]);
                return i
            };
            var Ze = new Ve,
                ze = {
                    AUTOCOMPLETE: "aria-autocomplete",
                    CHECKED: "aria-checked",
                    DISABLED: "aria-disabled",
                    EXPANDED: "aria-expanded",
                    HASPOPUP: "aria-haspopup",
                    HIDDEN: "aria-hidden",
                    INVALID: "aria-invalid",
                    LABEL: "aria-label",
                    LEVEL: "aria-level",
                    MULTILINE: "aria-multiline",
                    MULTISELECTABLE: "aria-multiselectable",
                    ORIENTATION: "aria-orientation",
                    PRESSED: "aria-pressed",
                    READONLY: "aria-readonly",
                    REQUIRED: "aria-required",
                    SELECTED: "aria-selected",
                    SORT: "aria-sort",
                    VALUEMAX: "aria-valuemax",
                    VALUEMIN: "aria-valuemin",
                    VALUENOW: "aria-valuenow",
                    VALUETEXT: "aria-valuetext",
                    ATOMIC: "aria-atomic",
                    BUSY: "aria-busy",
                    LIVE: "aria-live",
                    RELEVANT: "aria-relevant",
                    DROPEFFECT: "aria-dropeffect",
                    GRABBED: "aria-grabbed",
                    ACTIVEDESCENDANT: "aria-activedescendant",
                    CONTROLS: "aria-controls",
                    DESCRIBEDBY: "aria-describedby",
                    FLOWTO: "aria-flowto",
                    LABELLEDBY: "aria-labelledby",
                    OWNS: "aria-owns",
                    POSINSET: "aria-posinset",
                    SETSIZE: "aria-setsize"
                },
                Ge = ze,
                Ke = Ze,
                Qe = "data-original-",
                Ye = "tabindex",
                Je = function(e, t) {
                    var s = e.getAttribute(Qe + t);
                    s || (s = e.getAttribute(t) || "", e.setAttribute(Qe + t, s))
                },
                Xe = function(e, t) {
                    if (Ke.isFocusableElement(e, t)) Je(e, Ye), e.setAttribute(Ye, "-1");
                    else
                        for (var s = Ke.getTabbableElements(e, t), n = s.length; n--;) Je(s[n], Ye), s[n].setAttribute(Ye, "-1");
                    Je(e, Ge.HIDDEN), e.setAttribute(Ge.HIDDEN, "true")
                },
                et = function(e, t) {
                    let s;
                    s = e instanceof NodeList ? e : [].concat(e), t = Array.isArray(t) ? t : [].concat(t), s.forEach((e => {
                        t.forEach((t => {
                            e.removeAttribute(t)
                        }))
                    }))
                },
                tt = et,
                st = ze,
                nt = "data-original-",
                it = "tabindex",
                at = function(e, t) {
                    var s = e.getAttribute(nt + t);
                    null !== s && ("" === s ? tt(e, t) : e.setAttribute(t, s), tt(e, nt + t))
                },
                ot = function(e) {
                    at(e, it), at(e, st.HIDDEN);
                    for (var t = e.querySelectorAll(`[${nt+it}]`), s = t.length; s--;) at(t[s], it)
                },
                lt = Ze,
                rt = function e(t, s, n) {
                    s = s || document.body;
                    for (var i = t, a = t; i = i.previousElementSibling;) Xe(i, n);
                    for (; a = a.nextElementSibling;) Xe(a, n);
                    t.parentElement && t.parentElement !== s && e(t.parentElement, s, n)
                },
                ut = function e(t, s) {
                    s = s || document.body;
                    for (var n = t, i = t; n = n.previousElementSibling;) ot(n);
                    for (; i = i.nextElementSibling;) ot(i);
                    t.parentElement && t.parentElement !== s && e(t.parentElement, s)
                },
                ct = function(e, t) {
                    t = t || {}, this._tabbables = null, this._excludeHidden = t.excludeHidden, this._firstTabbableElement = t.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = e, this._handleOnFocus = this._handleOnFocus.bind(this)
                },
                ht = ct.prototype;
            ht.start = function(e) {
                this.updateTabbables(), rt(this.el, null, this._excludeHidden);
                let t = document.activeElement;
                this._firstTabbableElement ? !this.el.contains(document.activeElement) && !e && (this._firstTabbableElement.focus(), t = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = t, document.addEventListener("focus", this._handleOnFocus, !0)
            }, ht.stop = function() {
                ut(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
            }, ht.updateTabbables = function() {
                this._tabbables = lt.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
            }, ht._handleOnFocus = function(e) {
                if (this.el.contains(e.target)) this._relatedTarget = e.target;
                else {
                    if (e.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
                    if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
                }
            }, ht.destroy = function() {
                this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
            };
            var mt = ct,
                dt = {
                    onLayoutChange() {
                        const {
                            _currentFlyout: e,
                            curtain: t
                        } = this;
                        this._setFlyoutHeights(), e && (this.el.classList.add(this.classNames.blockTransitions), t.classList.add(this.classNames.blockTransitions), this.onFlyoutWillClose(e, !1).onFlyoutClose(e), requestAnimationFrame((() => {
                            this.el.classList.remove(this.classNames.blockTransitions), t.classList.remove(this.classNames.blockTransitions)
                        })))
                    },
                    created() {
                        this._currentFlyout = null, this._lastFlyoutTrigger = null, this._closingFlyout = null, this._flyoutTimeouts = [], this._isFlyoutActiveClick = !1, this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`)
                    },
                    mounted() {
                        this.initiateElements(), this.initiateListeners(), this.initiateFlyouts(), this.el.classList.remove(this.classNames.blockTransitions)
                    },
                    onMenuItemMouseLeave() {
                        this._isBreakpointWithMenu() || !0 === this._preventFlyoutClose || !0 === this._usesTouchEvents || this.closeFlyout(this._currentFlyout)
                    },
                    onFlyoutWillOpen(e, t) {
                        var s, n, i, a, o;
                        this.el.addEventListener("mouseleave", this.onMenuItemMouseLeave, {
                            once: !0
                        }), this._currentFlyout = e, this._lastFlyoutTrigger = this._getFlyoutItem(e).trigger ? this._getFlyoutItem(e).trigger[this._getCurrentLayout()] : null, this.flyoutAbortController = new AbortController, this.flyoutAbortControllerSignal = {
                            signal: this.flyoutAbortController.signal
                        }, this.el.classList.add(this.classNames.animating), document.documentElement.setAttribute(`data-${this.classNames.el}-flyout-open`, "true"), t ? e.classList.add(this.classNames.itemFlyoutChangeNext) : (e.classList.add(this.classNames.itemFlyoutOpen), this.el.classList.add(this.classNames.withFlyoutOpen), document.addEventListener("keydown", this._onFlyoutDocumentKeyDown, this.flyoutAbortControllerSignal), !this._isBreakpointWithMenu() && !this._isTouch() && document.addEventListener("scroll", (() => this.closeFlyout(this._currentFlyout)), this.flyoutAbortControllerSignal)), this._isBreakpointWithMenu() ? (this._setFlyoutHeight(e), this.el.classList.contains(this.classNames.withMenuOpen) || (null == (n = (s = this.menuButtonAnimation.open.top).beginElement) || n.call(s), null == (a = (i = this.menuButtonAnimation.open.bottom).beginElement) || a.call(i)), this._flyoutTimeouts.push(setTimeout((() => {
                            this.content.setAttribute("role", "dialog"), this.content.setAttribute("aria-modal", "true"), this.content.setAttribute("tabindex", "-1"), this.content.setAttribute("aria-label", e.getAttribute("data-topnav-flyout-label"))
                        }), 300))) : null == (o = this._lastFlyoutTrigger) || o.setAttribute("aria-expanded", !0)
                    },
                    onFlyoutWillClose(e, t) {
                        var s, n, i, a, o;
                        this.el.classList.add(this.classNames.withFlyoutClosing, this.classNames.animating), e.classList.add(this.classNames.itemFlyoutClosing), e.classList.remove(this.classNames.itemFlyoutOpen), t ? e.classList.add(this.classNames.itemFlyoutChangePrevious) : (this.el.classList.remove(this.classNames.withFlyoutOpen), this.flyoutAbortController && this.flyoutAbortController.abort(), document.documentElement.removeAttribute(`data-${this.classNames.el}-flyout-open`), this._currentFlyout = null), this._flyoutTimeouts.push(setTimeout((() => {
                            this.content.removeAttribute("role"), this.content.removeAttribute("aria-modal"), this.content.removeAttribute("tabindex"), this.content.removeAttribute("aria-label")
                        }), 300)), this._isBreakpointWithMenu() || null == (s = this._lastFlyoutTrigger) || s.setAttribute("aria-expanded", !1), t || (!this._isBreakpointWithMenu() && this._getFlyout(e).classList.remove(this.classNames.flyoutShort), null == (i = (n = this.menuButtonAnimation.close.top).beginElement) || i.call(n), null == (o = (a = this.menuButtonAnimation.close.bottom).beginElement) || o.call(a)), this.circTab.stop()
                    },
                    onFlyoutOpen(e, t) {
                        this._getFlyoutItem(e), this.el.classList.remove(this.classNames.animating), t && (e.classList.add(this.classNames.itemFlyoutOpen), e.classList.remove(this.classNames.itemFlyoutChangeNext)), this._isBreakpointWithMenu() ? this.circTab.start() : requestAnimationFrame((() => this._checkFlyoutHeight(e))), addEventListener("pagehide", this._onWindowPagehide, {
                            once: !0
                        }), this._isFlyoutActiveClick = !1, this._closingFlyout && this.closeFlyout(this._closingFlyout, !0)
                    },
                    onFlyoutClose(e, t) {
                        const s = this._getFlyoutItem(e);
                        s.scrollContainer && (s.scrollContainer.scrollTop = 0), this.el.classList.remove(this.classNames.withFlyoutClosing, this.classNames.animating), e.classList.remove(this.classNames.itemFlyoutClosing), t && (s.flyout.classList.remove(this.classNames.flyoutShort), e.classList.remove(this.classNames.itemFlyoutChangePrevious, this.classNames.itemFlyoutOpen)), this._isFlyoutActiveClick = !1, this._shouldDelayIconFlyoutOpen && (this._delayFlyoutTarget && this.openFlyout(this._delayFlyoutTarget), this._shouldDelayIconFlyoutOpen = !1), this._closingFlyout = null
                    },
                    onTextZoomResize() {
                        this._setFlyoutHeights()
                    },
                    openFlyout(e) {
                        const t = this.flyouts.find((t => t.item === e));
                        let s, n, i;
                        if (this._currentFlyout) {
                            const {
                                _currentFlyout: a
                            } = this, o = this.flyouts.find((e => e.item === a));
                            this._handleCompactMenuChangeTriggers(o, t), this.el.style.setProperty(this.cssVariables.flyoutNextHeight, getComputedStyle(this._getFlyout(e)).getPropertyValue(this.cssVariables.flyoutHeight)), this.el.style.setProperty(this.cssVariables.flyoutPreviousHeight, getComputedStyle(this._getFlyout(a)).getPropertyValue(this.cssVariables.flyoutHeight)), this.onFlyoutWillClose(a, !0), this.onFlyoutWillOpen(e, !0), n = "animationend", i = e, s = e => {
                                this.onFlyoutOpen(e, !0), this.onFlyoutClose(a, !0)
                            }
                        } else this._handleCompactMenuChangeTriggers(t), this.onFlyoutWillOpen(e), n = "transitionend", i = this._isBreakpointWithMenu() ? this.content : e, s = e => {
                            this.onFlyoutOpen(e)
                        };
                        this._listenForAnimationChangeEnd(e, i, n, s)
                    },
                    closeFlyout(e = this._currentFlyout, t) {
                        (e !== this._currentFlyout || !this._currentFlyout) && !t || (this._closingFlyout = e, this.onFlyoutWillClose(e), this._listenForAnimationChangeEnd(e, this._isBreakpointWithMenu() ? this.content : e, "transitionend", (() => this.onFlyoutClose(e))))
                    },
                    initiateElements() {
                        this.topNavList = this.topNavList || this.el.querySelector(`.${this.classNames.list}`), this.curtain = this.curtain || this.el.querySelector(`.${this.classNames.curtain}`), this.content = this.content || this.el.querySelector(`.${this.classNames.content}`), this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`), this.menuButtonAnimation = {
                            open: {
                                top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-open`),
                                bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-open`)
                            },
                            close: {
                                top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-close`),
                                bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-close`)
                            }
                        }
                    },
                    initiateListeners() {
                        const e = new AbortController,
                            {
                                signal: t
                            } = e;
                        this.el.addEventListener("focusout", this._onTopNavFocusOut), this._isBreakpointWithMenu() || (document.addEventListener("mousemove", (t => {
                            t.target.closest(`.${this.classNames.list}`) || e.abort()
                        }), {
                            once: !0
                        }), this.topNavList.addEventListener("mouseover", (e => {
                            e.stopPropagation()
                        }), {
                            capture: !0,
                            signal: t
                        }), this.topNavList.addEventListener("mouseout", (() => {
                            e.abort()
                        }), {
                            signal: t
                        })), this.curtain && this.curtain.addEventListener("click", this._onFlyoutCurtainClick)
                    },
                    initiateFlyouts() {
                        var e, t, s;
                        this.flyouts = [];
                        const n = [...this.el.querySelectorAll(`.${this.classNames.flyout}`)].map(this._getItemAncestor);
                        for (const i of n) {
                            let n = {};
                            n.item = i, n.flyout = null == (e = n.item) ? void 0 : e.querySelector(`.${this.classNames.flyout}`), n.scrollContainer = null == (t = n.flyout) ? void 0 : t.querySelector(`:scope > .${this.classNames.flyoutScrollContainer}`), n.content = null == (s = n.scrollContainer) ? void 0 : s.querySelector(`:scope > .${this.classNames.flyoutContent}`), n.trigger = n.content && {
                                regular: i.querySelector("[data-topnav-flyout-trigger-regular]"),
                                compact: i.querySelector("[data-topnav-flyout-trigger-compact]")
                            }, this.flyouts.push(n)
                        }
                        this.setFlyoutItems(), this._setFlyoutHeights(), this.circTab = new mt(this.el)
                    },
                    setFlyoutItems() {
                        const e = (e, t = 0) => {
                            const s = e.querySelectorAll(`.${this.classNames.flyoutItem}`);
                            s.forEach(((e, t) => {
                                e.style.setProperty(this.cssVariables.flyoutItemNumber, t)
                            })), e.style.setProperty(this.cssVariables.flyoutItemTotal, s.length), e.style.setProperty(this.cssVariables.flyoutGroupNumber, t)
                        };
                        this.flyouts.forEach((t => {
                            const {
                                flyout: s
                            } = t, n = s.querySelectorAll(`.${this.classNames.flyoutItemGroup}`);
                            n.length ? n.forEach(e) : e(s)
                        }))
                    },
                    onCurtainClick() {
                        this.closeFlyout()
                    },
                    pagehide(e) {
                        var t;
                        const {
                            _currentFlyout: s
                        } = this;
                        !s || (this.el.classList.add(this.classNames.blockTransitions), null == (t = this.onFlyoutWillClose(s).onFlyoutClose(s)) || t.closeMenu(), this.el.classList.remove(this.classNames.blockTransitions))
                    },
                    destroy() {
                        this.closeFlyout(), this._destroyTimeouts(), this.flyoutAbortController && this.flyoutAbortController.abort(), this.el.removeEventListener("focusout", this._onTopNavFocusOut), this.curtain && this.curtain.removeEventListener("click", this._onFlyoutCurtainClick)
                    },
                    _checkFlyoutHeight(e) {
                        var t;
                        const s = this._getFlyoutItem(e),
                            {
                                flyout: n,
                                scrollContainer: i
                            } = s,
                            a = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.flyoutSpacing)),
                            o = parseInt(getComputedStyle(n).getPropertyValue(this.cssVariables.flyoutHeight)),
                            l = window.innerWidth - i.clientWidth;
                        window.innerHeight - a < o ? (n.classList.add(this.classNames.flyoutShort), null == (t = this.flyoutAbortController) || t.abort()) : n.classList.remove(this.classNames.flyoutShort), n.style.setProperty(this.cssVariables.scrollbarWidth, `${l}px`)
                    },
                    _listenForAnimationChangeEnd(e, t, s, n) {
                        const i = new AbortController,
                            a = i.signal,
                            o = this.flyouts.find((t => t.item === e)),
                            l = ({
                                animationName: s,
                                propertyName: a
                            }) => {
                                [s === `${this.options.className}-scrim-height-change`, s === `${this.options.className}-flyout-slide-forward-next`, s === `${this.options.className}-flyout-slide-back-next`, "height" === a && o, "height" === a && t === this.content].some((e => !!e)) && (i.abort(), n(e))
                            };
                        t.addEventListener(s, l, {
                            signal: a
                        }), t.addEventListener("transitioncancel", l, {
                            signal: a
                        }), t.addEventListener("animationcancel", l, {
                            signal: a
                        })
                    },
                    _handleCompactMenuChangeTriggers(e, t) {
                        if (!this._isBreakpointWithMenu()) return;
                        const s = e => {
                            const t = Ze.getFocusableElements(e),
                                s = t[0];
                            s && !t.includes(document.activeElement) && s.focus()
                        };
                        this._listenForAnimationChangeEnd(e.flyout, this.content, (t ? "animation" : "transition") + "start", (e => {
                            setTimeout(s.bind(this, e), 300)
                        })), t && this._listenForAnimationChangeEnd(t.flyout, this.content, "animationstart", (t => {
                            var n;
                            t.classList.contains(this.classNames.subMenu) ? s(t) : e.trigger && (null == (n = e.trigger[this._getCurrentLayout()]) || n.focus())
                        }))
                    },
                    _destroyTimeouts() {
                        this._flyoutTimeouts.forEach((e => clearTimeout(e)))
                    },
                    _getFlyout(e) {
                        var t;
                        return null == (t = this._getFlyoutItem(e)) ? void 0 : t.flyout
                    },
                    _getFlyoutItem(e) {
                        return this.flyouts.find((t => t.item === e))
                    },
                    _getItemAncestor(e) {
                        return e.closest(`.${this.classNames.item}`)
                    },
                    _setFlyoutHeight(e, t = 0) {
                        const s = e => `${Math.min(480,Math.max(240,parseInt(e)/2))}ms`;
                        if (this._isBreakpointWithMenu()) {
                            const e = this.content,
                                t = s(window.innerHeight);
                            e.style.setProperty(this.cssVariables.flyoutRateOfChange, t)
                        } else {
                            const n = this._getFlyoutItem(e),
                                {
                                    content: i,
                                    flyout: a
                                } = n;
                            if (i) {
                                const e = parseInt(getComputedStyle(i).height),
                                    n = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.topnavHeight));
                                a.style.setProperty(this.cssVariables.flyoutHeight, `${e+n+t}px`), a.style.setProperty(this.cssVariables.flyoutRateOfChange, s(e + t))
                            }
                        }
                    },
                    _setFlyoutHeights() {
                        var e;
                        null == (e = this.flyouts) || e.forEach((e => this._setFlyoutHeight(e.item)))
                    },
                    _getFlyoutAnimationDuration(e) {
                        const t = (this._isBreakpointWithMenu() ? this.content : this._getFlyout(e || this._currentFlyout)).style.getPropertyValue(this.cssVariables.flyoutRateOfChange);
                        return parseInt(t)
                    },
                    _isFlyoutOpen(e) {
                        return this._currentFlyout === e
                    },
                    _onFlyoutDocumentKeyDown(e) {
                        var t, s;
                        const {
                            keyCode: n,
                            target: i
                        } = e;
                        if (n === Ue.ESCAPE) {
                            const e = this._lastFlyoutTrigger,
                                n = null == (t = i.closest) ? void 0 : t.call(i, `.${this.classNames.flyout}`),
                                a = null == (s = this.flyouts.find((t => t.trigger && t.trigger[this._getCurrentLayout()] === e))) ? void 0 : s.flyout;
                            this.closeFlyout(), n === a && this._flyoutTimeouts.push(setTimeout((() => {
                                e.focus()
                            }), 300))
                        }
                    },
                    _onFlyoutCurtainClick() {
                        this.onCurtainClick()
                    },
                    _onTopNavFocusOut(e) {
                        var t, s;
                        e.relatedTarget && e.relatedTarget !== document.documentElement && this._currentFlyout && (t = this.el, s = e.relatedTarget, t !== s && ("contains" in t ? t.contains(s) : t.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY) || this.closeFlyout())
                    },
                    _onWindowPagehide(e) {
                        this.pagehide()
                    }
                },
                pt = [dt, {
                    created() {
                        this.iconFlyoutAbortController = new AbortController, this._shouldDelayIconFlyoutOpen = !1, this._delayFlyoutTarget = null
                    },
                    mounted() {
                        this.initiateIconFlyouts(), this.addIconFlyoutEvents()
                    },
                    destroy() {
                        var e;
                        null == (e = this.iconFlyoutAbortController) || e.abort()
                    },
                    onIconFlyoutFocusIn({
                        currentTarget: e
                    }) {
                        e.addEventListener("keydown", this.onIconFlyoutKeyDown, !0)
                    },
                    onIconFlyoutFocusOut({
                        currentTarget: e
                    }) {
                        e.removeEventListener("keydown", this.onIconFlyoutKeyDown, !0)
                    },
                    onIconFlyoutKeyDown(e) {
                        if (e.keyCode === Ue.SPACEBAR) this.onIconFlyoutClick(e)
                    },
                    onIconFlyoutClick(e) {
                        e.preventDefault();
                        const t = this._getItemAncestor(e.currentTarget),
                            s = this.el.classList.contains(this.classNames.animating),
                            n = this._isFlyoutOpen(t);
                        s ? (this._shouldDelayIconFlyoutOpen = !n, this._delayFlyoutTarget = t) : this[n ? "closeFlyout" : "openFlyout"](t)
                    },
                    onFlyoutOpen(e) {
                        for (const e of this.iconFlyouts)
                            if (this._currentFlyout === e) {
                                this.el.classList.add(this.classNames.withIconFlyoutOpen);
                                break
                            }
                    },
                    onFlyoutWillClose() {
                        this.el.classList.remove(this.classNames.withIconFlyoutOpen)
                    },
                    onMenuButtonClick() {
                        for (const e of this.iconFlyouts) this._isFlyoutOpen(e) && this.closeFlyout(e)
                    },
                    initiateIconFlyouts() {
                        this.iconFlyouts = [...this.el.querySelectorAll(`[${this.dataAttributes.iconFlyoutEnabled}]`)]
                    },
                    addIconFlyoutEvents() {
                        const {
                            signal: e
                        } = this.iconFlyoutAbortController;
                        for (const t of this.iconFlyouts) {
                            const s = t.querySelector(`.${this.classNames.link}`);
                            s.addEventListener("focusin", this.onIconFlyoutFocusIn, {
                                signal: e
                            }), s.addEventListener("focusout", this.onIconFlyoutFocusOut, {
                                signal: e
                            }), s.addEventListener("click", this.onIconFlyoutClick, {
                                signal: e
                            })
                        }
                    }
                }],
                gt = [dt, {
                    onLayoutChange(e) {
                        this.el.classList.contains(this.classNames.withMenuOpen) && this.closeMenu(), this._updateMenuListenersForViewport(e), this._updateMenuAttributesForViewport(e)
                    },
                    created() {
                        this.menu = {}, this.initiateMenuElements(), this._onMenuDocumentKeyDown = this._onMenuDocumentKeyDown.bind(this)
                    },
                    initiateMenuElements() {
                        this.menu.elements = {
                            list: this.el.querySelector(`.${this.classNames.list}`),
                            menuList: this.el.querySelector(`.${this.classNames.menuList}`),
                            itemMenus: this.el.querySelectorAll(`.${this.classNames.itemMenu}`),
                            scrim: document.querySelector(`.${this.classNames.el}.${this.classNames.scrim}`),
                            curtain: document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),
                            menu: this.el.querySelector(`.${this.classNames.menu}`),
                            menuButton: this.el.querySelector(`.${this.classNames.menuButton}`),
                            menuBackButton: this.el.querySelector(`.${this.classNames.menuBackButton}`),
                            menuFlyout: this.el.querySelector('[data-topnav-flyout-item="menu"]'),
                            menuLabels: {
                                open: this.menuButton.dataset.topnavMenuLabelOpen,
                                close: this.menuButton.dataset.topnavMenuLabelClose
                            }
                        }
                    },
                    onMenuButtonClick(e) {
                        if (this._isFlyoutActiveClick) return e.preventDefault();
                        if (this._isFlyoutActiveClick = !0, this.el.classList.contains(this.classNames.withMenuOpen)) this.closeMenu();
                        else {
                            if (this.el.classList.contains(this.classNames.withFlyoutOpen)) return this.menu.elements.menuButton.blur(), void(this._flyoutFocusTimeout = setTimeout((() => {
                                this._lastFlyoutTrigger.focus()
                            }), 300));
                            this.openMenu()
                        }
                    },
                    beforeMount() {
                        !this.options.curtainBlur && this.removeCurtainBlur(), !this.options.scrimBlur && this.removeScrimBlur()
                    },
                    mounted() {
                        this._updateMenuListenersForViewport(this._isBreakpointWithMenu()), this._updateMenuAttributesForViewport(this._isBreakpointWithMenu()), this._setItemNumbers()
                    },
                    onFlyoutWillOpen(e) {
                        this._isBreakpointWithMenu() && "menu" === e.dataset.topnavFlyoutItem && (this.el.classList.contains(this.classNames.withMenuOpen) || (this.menu.elements.menuList.scrollTop = 0))
                    },
                    onFlyoutOpen(e) {
                        this._isBreakpointWithMenu() && this.menu.elements.menuButton.setAttribute("aria-label", this.menu.elements.menuLabels.close)
                    },
                    onFlyoutWillClose() {
                        this.menu.elements.menuButton.setAttribute("aria-label", this.menu.elements.menuLabels.open)
                    },
                    openMenu() {
                        this._isBreakpointWithMenu() && this._setFlyoutHeight(this.menu.elements.menuFlyout), this.openFlyout(this.menu.elements.menuFlyout), this.el.classList.add(this.classNames.withMenuOpen), document.addEventListener("keydown", this._onMenuDocumentKeyDown)
                    },
                    closeMenu() {
                        this.el.classList.remove(this.classNames.withMenuOpen), this.closeFlyout(), document.removeEventListener("keydown", this._onMenuDocumentKeyDown)
                    },
                    toggleMenu() {
                        this.el.classList.contains(this.classNames.menuOpen) ? this.closeMenu() : this.openMenu()
                    },
                    onCurtainClick() {
                        this.closeMenu()
                    },
                    pagehide(e) {
                        this.closeMenu()
                    },
                    destroy() {
                        this.closeMenu(), this._removeMenuEvents()
                    },
                    addCurtainBlur() {
                        this.menu.elements.curtain && this.menu.elements.curtain.classList.remove(this.classNames.curtainNoBlur)
                    },
                    removeCurtainBlur() {
                        this.menu.elements.curtain && this.menu.elements.curtain.classList.add(this.classNames.curtainNoBlur)
                    },
                    addScrimBlur() {
                        this.menu.elements.scrim && this.menu.elements.scrim.classList.remove(this.classNames.scrimNoBlur)
                    },
                    removeScrimBlur() {
                        this.menu.elements.scrim && this.menu.elements.scrim.classList.add(this.classNames.scrimNoBlur)
                    },
                    _addMenuEvents() {
                        this.curtain && this.curtain.addEventListener("click", this._onMenuCurtainClick), this.menu.elements.menuButton.addEventListener("click", this.onMenuButtonClick), this.menu.elements.menuBackButton.addEventListener("click", this.onMenuBackButtonClick)
                    },
                    _removeMenuEvents() {
                        this.curtain && this.curtain.removeEventListener("click", this._onMenuCurtainClick), this.menu.elements.menuButton.removeEventListener("click", this.onMenuButtonClick), this.menu.elements.menuBackButton.removeEventListener("click", this.onMenuBackButtonClick)
                    },
                    _updateMenuListenersForViewport(e) {
                        e ? this._addMenuEvents() : this._removeMenuEvents()
                    },
                    _updateMenuAttributesForViewport(e) {
                        e ? (this.menu.elements.list.setAttribute("role", "none"), this.menu.elements.menuList.setAttribute("role", "list"), [...this.menu.elements.menuList.children].forEach((e => e.setAttribute("role", "listitem")))) : (this.menu.elements.menu.removeAttribute("role"), this.menu.elements.list.removeAttribute("role"), this.menu.elements.menuList.removeAttribute("role"), [...this.menu.elements.menuList.children].forEach((e => e.removeAttribute("role"))))
                    },
                    _onMenuCurtainClick() {
                        this.onCurtainClick()
                    },
                    _setItemNumbers() {
                        let e = 0;
                        this.menu.elements.itemMenus.forEach(((t, s) => {
                            t.style.setProperty(this.cssVariables.flyoutItemNumber, s), ++e
                        })), this.menu.elements.menuList.style.setProperty(this.cssVariables.flyoutItemTotal, e)
                    },
                    _onMenuDocumentKeyDown(e) {
                        const {
                            keyCode: t,
                            target: s
                        } = e;
                        switch (t) {
                            case Ue.SPACEBAR:
                                s.hasAttribute("data-topnav-flyout-trigger-compact") && (e.preventDefault(), s.click());
                                break;
                            case Ue.ESCAPE:
                                e.preventDefault(), this.closeMenu(), this._flyoutFocusTimeout = setTimeout((() => {
                                    this.menu.elements.menuButton.focus()
                                }), 300)
                        }
                    }
                }],
                _t = [dt, {
                    isEnabledWhen() {
                        return !1 !== this.submenuEnabled
                    },
                    onLayoutChange() {
                        this.el.classList.remove(this.classNames.withSubMenuOpen), this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()), this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu()), this._setSubMenuItemCounts(), clearTimeout(this._currentSubMenuMouseOverTimeout)
                    },
                    mounted() {
                        this.el.classList.remove(this.classNames.subMenusDisabled), this._findTopNavList(), this.initiateSubMenus()
                    },
                    onMenuBackButtonClick() {
                        this._isFlyoutActiveClick = !0, this.openFlyout(this.menu.elements.menuFlyout)
                    },
                    onFlyoutWillClose(e, t) {
                        this.subMenuEls.includes(e) && this.el.classList.remove(this.classNames.withSubMenuOpen)
                    },
                    onHiddenMenuItemClick(e) {
                        if (this._isFlyoutActiveClick) return e.preventDefault();
                        const t = e.target.closest(`.${this.classNames.itemSubMenu}`),
                            s = this.flyouts.map((e => e.item));
                        this._isFlyoutOpen(t) || (e.preventDefault(), s.includes(t) && (this._isFlyoutActiveClick = !0, this.openFlyout(t)))
                    },
                    onMenuItemMouseOver({
                        target: e
                    }) {
                        if (this._usesTouchEvents) return;
                        const t = this._getItemAncestor(e);
                        clearTimeout(this._currentSubMenuMouseOverTimeout), this._currentSubMenuMouseOverTimeout = setTimeout((() => {
                            t && t !== this._currentFlyout && t !== this.menu.elements.menuFlyout && (this.subMenuEls.includes(t) ? this.openFlyout(t) : this.closeFlyout(this._currentFlyout))
                        }), 120), this.el.addEventListener("mouseleave", this.onMenuItemMouseLeave, {
                            once: !0
                        }), this._flyoutTimeouts.push(this._currentSubMenuMouseOverTimeout)
                    },
                    onMenuItemButtonClick(e) {
                        const {
                            target: t
                        } = e, s = !!t.closest(`.${this.classNames.subMenuTriggerGroup}`);
                        if (t.closest(`.${this.classNames.subMenuTriggerButton}`) || s && this._usesTouchEvents) {
                            const s = t.closest(`.${this.classNames.itemSubMenu}`),
                                n = this._isFlyoutOpen(s),
                                i = this._getItemAncestor(t),
                                a = this._currentFlyout && this._getItemAncestor(this._currentFlyout),
                                o = void 0 !== this._getFlyout(s);
                            i !== a && o && e.preventDefault(), n ? this.closeFlyout(this._currentFlyout) : this.openFlyout(s)
                        }
                    },
                    onNavListTouchStart(e) {
                        this._usesTouchEvents = !0
                    },
                    onMenuItemMouseLeave() {
                        clearTimeout(this._currentSubMenuMouseOverTimeout)
                    },
                    initiateSubMenus() {
                        this.submenus = this.flyouts.filter((e => e.item.classList.contains(this.classNames.itemSubMenu))).map((e => {
                            const {
                                item: t
                            } = e, s = t.querySelector(`.${this.classNames.subMenuContent}`), n = t.querySelector(`.${this.classNames.subMenuTriggerGroup}`), i = t.querySelector(`.${this.classNames.subMenuTriggerLink}`), a = i.getAttribute("aria-label"), o = t.querySelector(`.${this.classNames.subMenuTriggerButton}`), l = o.getAttribute("aria-label"), r = {
                                group: n,
                                link: i,
                                linkLabel: a,
                                button: o,
                                buttonLabel: l
                            }, u = [...t.querySelectorAll(`.${this.classNames.subMenuGroup}`)].map((e => {
                                const t = e.classList.contains(this.classNames.subMenuGroupElevated),
                                    s = e.querySelector(`.${this.classNames.subMenuHeader}`),
                                    n = e.querySelector(`.${this.classNames.subMenuList}`);
                                return {
                                    isElevated: t,
                                    group: e,
                                    header: s,
                                    list: n
                                }
                            }));
                            return { ...e,
                                trigger: r,
                                content: s,
                                groups: u
                            }
                        })), this._findSubMenus(), this._setSubMenuItemCounts(), this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()), this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu())
                    },
                    onFlyoutWillOpen(e) {
                        !this.subMenuEls.includes(e) || this.el.classList.add(this.classNames.withSubMenuOpen)
                    },
                    destroy() {
                        this.closeFlyout(this._currentFlyout), this.el.classList.add(this.classNames.subMenusDisabled), this._removeSubMenuEvents(), clearTimeout(this._compactSubMenuItemFocus)
                    },
                    _getSubMenu(e) {
                        return [...e.children].find((e => e.classList.contains(this.classNames.subMenu)))
                    },
                    _findTopNavList() {
                        return this.topNavList = this.el.querySelector(`.${this.classNames.list}`), this.topNavList
                    },
                    _findSubMenus() {
                        return this.subMenuEls = [...this.el.querySelectorAll(`.${this.classNames.itemSubMenu}`)], this.subMenuEls
                    },
                    _setSubMenuItemCounts() {
                        const e = this._isBreakpointWithMenu();
                        this.submenus.forEach((t => {
                            const {
                                content: s,
                                groups: n
                            } = t;
                            let i = 0,
                                a = 0,
                                o = 0;
                            e || (a = 0), n.forEach(((t, s) => {
                                const {
                                    isElevated: n,
                                    header: l,
                                    list: r,
                                    group: u
                                } = t;
                                u.style.setProperty(this.cssVariables.flyoutGroupNumber, s), e || (o = 0), [l, ...r.children].forEach(((t, n) => {
                                    t.style.setProperty(this.cssVariables.flyoutItemNumber, ++o), (!s || e) && ++a
                                })), n && ++i
                            })), s.style.setProperty(this.cssVariables.flyoutElevatedGroupCount, i), s.style.setProperty(this.cssVariables.flyoutGroupTotal, n.length - 1), s.style.setProperty(this.cssVariables.flyoutItemTotal, a)
                        }))
                    },
                    _addSubMenuEvents() {
                        this.topNavList.addEventListener("touchstart", this.onNavListTouchStart, {
                            once: !0,
                            passive: !0
                        }), this.topNavList.addEventListener("mouseover", this.onMenuItemMouseOver), this.topNavList.addEventListener("click", this.onMenuItemButtonClick);
                        for (let e of this.subMenuEls) e.removeEventListener("click", this.onHiddenMenuItemClick)
                    },
                    _removeSubMenuEvents() {
                        this.topNavList.removeEventListener("touchstart", this.onNavListTouchStart), this.topNavList.removeEventListener("mouseover", this.onMenuItemMouseOver), this.topNavList.removeEventListener("click", this.onMenuItemButtonClick);
                        for (let e of this.subMenuEls) e.addEventListener("click", this.onHiddenMenuItemClick)
                    },
                    _updateSubMenuListenersForViewport(e) {
                        e ? this._removeSubMenuEvents() : this._addSubMenuEvents()
                    },
                    _updateSubMenuAttributesForViewport(e) {
                        this.submenus.forEach((({
                            trigger: t
                        }) => {
                            e ? (t.group.setAttribute("role", "none"), t.link.setAttribute("role", "button"), t.buttonLabel && t.link.setAttribute("aria-label", t.buttonLabel)) : (t.group.removeAttribute("role"), t.link.removeAttribute("role"), t.linkLabel && t.link.setAttribute("aria-label", t.linkLabel))
                        }))
                    }
                }],
                bt = {
                    browser: [{
                        name: "edge",
                        userAgent: "Edge",
                        version: ["rv", "Edge"],
                        test: function(e) {
                            return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                        }
                    }, {
                        name: "edgeChromium",
                        userAgent: "Edge",
                        version: ["rv", "Edg"],
                        test: function(e) {
                            return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
                        }
                    }, {
                        name: "chrome",
                        userAgent: "Chrome"
                    }, {
                        name: "firefox",
                        test: function(e) {
                            return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                        },
                        version: "Firefox"
                    }, {
                        name: "android",
                        userAgent: "Android"
                    }, {
                        name: "safari",
                        test: function(e) {
                            return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                        },
                        version: "Version"
                    }, {
                        name: "ie",
                        test: function(e) {
                            return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                        },
                        version: ["MSIE", "rv"],
                        parseDocumentMode: function() {
                            let e = !1;
                            return document.documentMode && (e = parseInt(document.documentMode, 10)), e
                        }
                    }, {
                        name: "opera",
                        userAgent: "Opera",
                        version: ["Version", "Opera"]
                    }, {
                        name: "samsung",
                        userAgent: "SamsungBrowser"
                    }],
                    os: [{
                        name: "windows",
                        test: function(e) {
                            return e.ua.indexOf("Windows") > -1
                        },
                        version: "Windows NT"
                    }, {
                        name: "osx",
                        userAgent: "Mac",
                        test: function(e) {
                            return e.ua.indexOf("Macintosh") > -1
                        }
                    }, {
                        name: "ios",
                        test: function(e) {
                            return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                        },
                        version: ["iPhone OS", "CPU OS"]
                    }, {
                        name: "linux",
                        userAgent: "Linux",
                        test: function(e) {
                            return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
                        }
                    }, {
                        name: "fireos",
                        test: function(e) {
                            return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                        },
                        version: "rv"
                    }, {
                        name: "android",
                        userAgent: "Android",
                        test: function(e) {
                            return e.ua.indexOf("Android") > -1
                        }
                    }, {
                        name: "chromeos",
                        userAgent: "CrOS"
                    }]
                };
            const vt = function(e) {
                    const t = {};
                    for (const s in e) t[s] = e[s].reduce((function(e, t) {
                        return e[t.name] = !1, e
                    }), {
                        version: {
                            string: "",
                            major: 0,
                            minor: 0,
                            patch: 0,
                            documentMode: !1
                        }
                    });
                    return t
                },
                ft = bt;

            function yt(e) {
                return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
            }

            function St(e, t) {
                if ("function" == typeof e.parseVersion) return e.parseVersion(t); {
                    let s = e.version || e.userAgent;
                    "string" == typeof s && (s = [s]);
                    const n = s.length;
                    let i;
                    for (let e = 0; e < n; e++)
                        if (i = t.match(yt(s[e])), i && i.length > 1) return i[1].replace(/_/g, ".")
                }
                return !1
            }

            function Et(e, t, s) {
                const n = e.length;
                let i, a;
                for (let o = 0; o < n; o++)
                    if ("function" == typeof e[o].test ? !0 === e[o].test(s) && (i = e[o].name) : s.ua.indexOf(e[o].userAgent) > -1 && (i = e[o].name), i) {
                        if (t[i] = !0, a = St(e[o], s.ua), "string" == typeof a) {
                            const e = a.split(".");
                            t.version.string = a, e && e.length > 0 && (t.version.major = parseInt(e[0] || 0), t.version.minor = parseInt(e[1] || 0), t.version.patch = parseInt(e[2] || 0))
                        } else "edge" === i && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                        return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t
                    }
                return t
            }
            var wt = function(e) {
                const t = {},
                    s = vt(ft);
                return t.browser = Et(ft.browser, s.browser, e), t.os = Et(ft.os, s.os, e), t
            };
            const Nt = "undefined" != typeof window ? window.navigator : {
                userAgent: "",
                platform: "",
                vendor: ""
            };
            var Lt = wt({
                ua: Nt.userAgent,
                platform: Nt.platform,
                vendor: Nt.vendor
            });
            let At;
            var Ct = {
                    created() {
                        this.viewportMeta = document.querySelector("meta[name=viewport]"), this.DISABLE_ZOOM_TOKEN = ", maximum-scale=1, user-scalable=0", this._setZoomClass = this._debounce(this._setZoomClass)
                    },
                    onLayoutChange() {
                        this.scrollSwitchUnlock()
                    },
                    onFlyoutWillOpen(e, t) {
                        this._isBreakpointWithMenu() && !t && this.scrollSwitchLock()
                    },
                    onFlyoutWillClose(e, t) {
                        this._isBreakpointWithMenu() && !t && this.scrollSwitchUnlock()
                    },
                    scrollSwitchLock() {
                        const e = window.innerWidth - document.documentElement.clientWidth,
                            t = Boolean(e);
                        document.documentElement.style.setProperty(this.cssVariables.scrollbarWidth, `${e}px`), document.documentElement.classList.add(this.classNames.noScroll), document.documentElement.classList.toggle(this.classNames.noScrollLong, t), this._setZoomClass(), window.visualViewport.addEventListener("resize", this._setZoomClass), this._shouldManageZoom() && this.viewportMeta.setAttribute("content", `${this.viewportMeta.getAttribute("content")}${this.DISABLE_ZOOM_TOKEN}`)
                    },
                    scrollSwitchUnlock() {
                        document.documentElement.style.removeProperty(this.cssVariables.scrollbarWidth), document.documentElement.classList.remove(this.classNames.noScroll), document.documentElement.classList.remove(this.classNames.noScrollLong), document.documentElement.classList.remove(this.classNames.noScrollY), window.removeEventListener("resize", this._setZoomClass), this._shouldManageZoom() && this.viewportMeta.setAttribute("content", this.viewportMeta.getAttribute("content").replace(this.DISABLE_ZOOM_TOKEN, ""))
                    },
                    _debounce(e, t = 300) {
                        let s;
                        return (...n) => {
                            window.clearTimeout(s), s = window.setTimeout(e.bind(this, ...n), t)
                        }
                    },
                    _setZoomClass() {
                        Math.floor(this.el.scrollWidth) > window.visualViewport.width ? document.documentElement.classList.add(this.classNames.noScrollY) : document.documentElement.classList.remove(this.classNames.noScrollY)
                    },
                    _shouldManageZoom() {
                        return !(!(At || (At = Lt), At).browser.android || !this.viewportMeta)
                    }
                },
                kt = {
                    created() {
                        this.textZoom = {}
                    },
                    mounted() {
                        this.textZoom.topNavStyles = getComputedStyle(this.el), this.textZoom.topNavBaseFontSize = parseInt(this.textZoom.topNavStyles.getPropertyValue(this.cssVariables.fontSize)), this._createfontSizeObserverElement(), this._createfontSizeObserver()
                    },
                    onTextZoomResize(e) {
                        const t = parseInt(this.textZoom.topNavStyles.fontSize) / this.textZoom.topNavBaseFontSize;
                        this.el.classList[t <= 1 ? "remove" : "add"](this.classNames.textZoomIn), this.el.style.setProperty(this.cssVariables.textZoomScale, t)
                    },
                    destroy() {
                        this.textZoom.fontSizeObserver.unobserve(this.textZoom.fontSizeObserverElement), this.el.removeChild(this.textZoom.fontSizeObserverElement), this.textZoom = null
                    },
                    _createfontSizeObserverElement() {
                        this.textZoom.fontSizeObserverElement = document.createElement("span"), this.textZoom.fontSizeObserverElement.innerHTML = "&nbsp;", this.textZoom.fontSizeObserverElement.style.visibility = "hidden", this.textZoom.fontSizeObserverElement.style.position = "absolute", this.textZoom.fontSizeObserverElement.style.top = "0", this.textZoom.fontSizeObserverElement.style.zIndex = "-1", this.el.appendChild(this.textZoom.fontSizeObserverElement)
                    },
                    _createfontSizeObserver() {
                        this.textZoom.fontSizeObserver = new ResizeObserver(this.onTextZoomResize), this.textZoom.fontSizeObserver.observe(this.textZoom.fontSizeObserverElement)
                    }
                };
            Object.prototype.hasOwnProperty;

            function Mt(e, t, s, n) {
                return !!e && {
                    key: t ? "[" + t + "]" : "",
                    val1: s,
                    val2: n
                }
            }
            Object.prototype.hasOwnProperty;
            var Ft = function e(t, s, n) {
                    var i;
                    if (!t || !s || "object" != typeof t || "object" != typeof s) return t === s || Mt(n, i, t, s);
                    var a = Object.keys(t),
                        o = a.length;
                    if (o !== Object.keys(s).length) return Mt(n, i, t, s);
                    for (var l = 0; l < o; l++) {
                        var r = t[i = a[l]],
                            u = s[i];
                        if ("object" == typeof r && "object" == typeof u) {
                            var c = e(r, u, n);
                            if ("boolean" != typeof c && (c.key = "[" + i + "]" + c.key), !0 !== c) return c
                        } else if (r !== u) return Mt(n, i, r, u)
                    }
                    return !0
                },
                Ot = [pt, {
                    isEnabledWhen() {
                        return !1 !== this.searchEnabled
                    },
                    created() {
                        this.search = {}, this.search.state = {
                            isOpening: !1,
                            activeState: 0,
                            isAnimating: !1,
                            lastAnimatedItem: null,
                            count: {
                                textContent: ""
                            }
                        }, this.search.elements = {
                            results: {},
                            initialResults: null
                        }, this.search.templateFunction = this._createSearchResultsTemplate, this.curtain = this.curtain || document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`), this.topNavList = this.topNavList || this.el.querySelector(`.${this.classNames.list}`)
                    },
                    beforeMount() {
                        this._setupSearchElements(), this._addSearchEvents()
                    },
                    destroy() {
                        clearTimeout(this.search.searchDebounce), this.closeFlyout(this.search.el), this._removeSearchEvents()
                    },
                    onFlyoutWillOpen(e) {
                        e === this.search.elements.el && (this.clearSearch(), this.search.state.isOpening = !0, this.search.state.activeState = 0, this.search.elements.initialResults ? this._renderSearchResults(this.search.templateFunction(this.search.initialResults)) : this.onSearchUpdate(), this._addSearchAnimationEvents())
                    },
                    onFlyoutOpen(e) {
                        e === this.search.elements.el && (this.search.elements.input.focus(), this._getFlyoutItem(e).scrollContainer.scrollTop = 0, this.search.state.isOpening = !1)
                    },
                    onFlyoutClose(e) {
                        if (e !== this.search.elements.el) return;
                        this.clearSearch();
                        this.search.elements.el.classList.forEach(((e, t) => {
                            "shift" === t.substr(0, 5) && e.classList.remove(t)
                        }).bind(this, this.search.elements.el)), [...this.search.elements.results.querySelectorAll(`.${this.classNames.searchResultsContainer}`)].forEach(((e, t) => {
                            t && e.remove()
                        })), this._setFlyoutHeight(this.search.elements.el), this._preventFlyoutClose = !1, clearTimeout(this.search.countTimeoutId), this._removeSearchAnimationEvents()
                    },
                    onSearchMouseMove(e) {
                        this._preventFlyoutClose = !1
                    },
                    onSearchInputKeyDown(e) {
                        const {
                            keyCode: t
                        } = e;
                        switch (t) {
                            case Ue.SHIFT:
                            case Ue.CONTROL:
                            case Ue.ALT:
                            case Ue.COMMAND:
                            case Ue.CAPSLOCK:
                                break;
                            case Ue.ARROW_UP:
                                e.preventDefault(), this.search.selectionController.active >= 0 && (--this.search.selectionController.active, this._highlightSearchSelection());
                                break;
                            case Ue.ARROW_DOWN:
                                e.preventDefault(), this.search.selectionController.active < this.search.selectionController.links.length - 1 && (++this.search.selectionController.active, this._highlightSearchSelection());
                                break;
                            case Ue.ENTER:
                                "" === this.search.elements.input.value.trim() && -1 === this.search.selectionController.active ? (e.preventDefault(), e.stopPropagation()) : this.search.selectionController.active > -1 ? this.search.selectionController.links[this.search.selectionController.active].click() : this.onSearchInputChange(e);
                                break;
                            case Ue.ESCAPE:
                                e.preventDefault();
                                break;
                            default:
                                this._preventFlyoutClose = !0;
                                const t = getComputedStyle(this.search.elements.el).getPropertyValue(this.cssVariables.searchResultsTimeoutDuration),
                                    s = t.includes("ms") ? parseInt(t) : t.includes("s") ? 1e3 * parseFloat(t) : 0;
                                clearTimeout(this.search.searchDebounce), this.search.searchDebounce = setTimeout((() => this.onSearchInputChange(e)), s)
                        }
                    },
                    onSearchInputChange(e) {
                        var t, s;
                        const {
                            keyCode: n
                        } = e, i = (null == (s = null == (t = e.target) ? void 0 : t.value) ? void 0 : s.trim()) || "";
                        i.length < 2 && !this.search.previousSearchTerm || this.search.previousSearchTerm === i || n === Ue.ENTER ? this._updateSearchFieldButtons() : (this.search.previousSearchTerm = i, this.onSearchUpdate(e))
                    },
                    onSearchResultsRendered() {
                        var e, t;
                        const {
                            value: s
                        } = this.search.elements.input, n = null == (e = this.search.elements.results) ? void 0 : e.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsContainer}`).length, i = `${null==(t=this.search.elements.results)?void 0:t.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsListItem}`).length} ${this.search.state.resultsLabel}`;
                        this._flyoutTimeouts.push(setTimeout((() => {
                            this.search.elements.count.textContent = i, this._flyoutTimeouts.push(setTimeout((() => {
                                this.search.elements.count.textContent = ""
                            }), this.search.state.countResetDelayTime))
                        }), this.search.state.countSetDelayTime)), this._updateSearchFieldButtons(), this.search.elements.el.classList[s.length > 1 ? "add" : "remove"](this.classNames.searchWithResults), this.search.elements.el.classList[n ? "remove" : "add"](this.classNames.searchNoResults), this._setFlyoutHeight(this.search.elements.el, this._getSearchFlyoutHeightOffset())
                    },
                    blurSearchInput(e) {
                        const t = "touchmove" === e.type;
                        this.menu.elements.menuButton.contains(e.target) || t && this.search.elements.input.blur()
                    },
                    addSearchInputFocusEvents() {
                        this.content.addEventListener("touchstart", this.blurSearchInput, {
                            once: !0
                        }), this.content.addEventListener("touchmove", this.blurSearchInput, {
                            once: !0
                        })
                    },
                    removeSearchInputFocusEvents() {
                        this.content.removeEventListener("touchstart", this.blurSearchInput), this.content.removeEventListener("touchmove", this.blurSearchInput)
                    },
                    onSearchResetClick(e) {
                        e.preventDefault(), this.clearSearch(), this.search.elements.input.focus(), this.onSearchUpdate()
                    },
                    clearSearch() {
                        this.search.elements.formButtons.forEach((e => e.setAttribute("tabindex", "-1"))), this.search.elements.input.value = "", this.search.previousSearchTerm = "", this.search.elements.cachedResults = "", clearTimeout(this.search.elements.countTimeoutId)
                    },
                    setInitialSearchResults(e) {
                        this.search.initialResults = e, this._renderSearchResults(this.search.templateFunction(this.search.initialResults))
                    },
                    setSearchResults(e = []) {
                        var t, s, n;
                        const i = Ft(e, this.search.elements.initialResults);
                        let a = !1;
                        if (this.search.elements.cachedResults && e.length) {
                            const t = e => e.reduce(((e, t) => (e.push({ ...t,
                                    results: t.results.map((e => ({ ...e,
                                        highlight: null
                                    })))
                                }), e)), []),
                                s = t(e),
                                n = t(this.search.elements.cachedResults);
                            a = Ft(s, n)
                        }
                        if (!i || this.search.elements.cachedResults) {
                            if (!e.length && this.search.elements.cachedResults) return this.search.elements.el.classList.add(this.classNames.searchResultsOverrideHighlight), void this._updateSearchFieldButtons();
                            if (a) {
                                const {
                                    cachedSearchValue: e
                                } = this.search, {
                                    value: t
                                } = this.search.elements.input, s = !(e.includes(t) || t.includes(e));
                                this.search.elements.el.classList[s ? "add" : "remove"](this.classNames.searchResultsOverrideHighlight)
                            } else this.search.elements.cachedResults = (null == (s = null == (t = this.search.elements.input) ? void 0 : t.value) ? void 0 : s.length) > 1 ? e : null, this.search.elements.el.classList.remove(this.classNames.searchResultsOverrideHighlight);
                            this.search.cachedSearchValue = null == (n = this.search.elements.input) ? void 0 : n.value, this._renderSearchResults(this.search.templateFunction(e), a)
                        } else this._updateSearchFieldButtons()
                    },
                    _addSearchEvents() {
                        this.search.elements.flyout.addEventListener("mousemove", this.onSearchMouseMove), this.search.elements.reset.addEventListener("click", this.onSearchResetClick), this.search.elements.input.addEventListener("keydown", this.onSearchInputKeyDown), this.search.elements.input.addEventListener("paste", this.onSearchInputKeyDown), this.search.elements.el.addEventListener("focusin", this._onSearchFocusin), this.search.elements.el.addEventListener("focusout", this._onSearchFocusout)
                    },
                    _removeSearchEvents() {
                        this.search.elements.flyout.removeEventListener("mousemove", this.onSearchMouseMove), this.search.elements.reset.removeEventListener("click", this.onSearchResetClick), this.search.elements.input.removeEventListener("keydown", this.onSearchInputKeyDown), this.search.elements.input.removeEventListener("paste", this.onSearchInputKeyDown), this.search.elements.el.removeEventListener("focusin", this._onSearchFocusin), this.search.elements.el.removeEventListener("focusout", this._onSearchFocusout)
                    },
                    _addSearchAnimationEvents() {
                        this.el.addEventListener("transitionstart", this._onFlyoutTransitionStart), this.el.addEventListener("transitionend", this._onFlyoutTransitionEnd), this.search.elements.results.addEventListener("animationstart", this._onResultsAnimationStart), this.search.elements.results.addEventListener("animationend", this._onResultsAnimationEnd)
                    },
                    _removeSearchAnimationEvents() {
                        this.el.removeEventListener("transitionstart", this._onFlyoutTransitionStart), this.el.removeEventListener("transitionend", this._onFlyoutTransitionEnd), this.search.elements.results.removeEventListener("animationstart", this._onResultsAnimationStart), this.search.elements.results.removeEventListener("animationend", this._onResultsAnimationEnd)
                    },
                    _onSearchFocusin({
                        target: e
                    }) {
                        e === this.search.elements.input && this.addSearchInputFocusEvents()
                    },
                    _onSearchFocusout({
                        target: e
                    }) {
                        e === this.search.elements.input && this.removeSearchInputFocusEvents()
                    },
                    _onSearchAnimationEnd() {
                        var e;
                        this.search.state.activeState || this.search.elements.results.container.remove(), null == (e = this.search.elements.results.containerPrevious) || e.remove(), this.el.classList.remove(this.classNames.animating), this.search.state.isAnimating = !1, this.search.state.lastAnimatedItem = null
                    },
                    _onResultsAnimationStart({
                        animationName: e,
                        target: t
                    }) {
                        e.includes("-search-") && (this.search.state.lastAnimatedItem = t)
                    },
                    _onResultsAnimationEnd({
                        animationName: e,
                        elapsedTime: t,
                        target: s
                    }) {
                        e.includes("-search-") && t && s === this.search.state.lastAnimatedItem && !this.search.state.isAnimating && this._onSearchAnimationEnd()
                    },
                    _onFlyoutTransitionStart({
                        propertyName: e,
                        target: t
                    }) {
                        t === (this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout) && "height" === e && (this.search.state.isAnimating = !0)
                    },
                    _onFlyoutTransitionEnd({
                        propertyName: e,
                        target: t
                    }) {
                        t === (this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout) && "height" === e && this._onSearchAnimationEnd()
                    },
                    _getSearchFlyoutHeightOffset() {
                        const {
                            marginTop: e
                        } = getComputedStyle(this.search.elements.results);
                        let t = 0;
                        return this.search.elements.el.classList.contains(this.classNames.searchNoResults) && (t = -1 * parseInt(e)), t
                    },
                    _setSearchItemNumbers(e) {
                        const t = e || this.search.elements.flyout,
                            s = t.querySelector(`.${this.classNames.searchResultsCurrent}`),
                            n = t.querySelector(`.${this.classNames.searchResultsPrevious}`),
                            i = null != s && s.children.length ? s : n;
                        if (!i) return;
                        const a = [`.${this.classNames.searchResultsHeader}`, `.${this.classNames.searchResultsListItem}`],
                            o = [...i.querySelectorAll(`.${this.classNames.searchResultsContainer}`)],
                            l = [...i.querySelectorAll(a.join(", "))];
                        o.forEach(((e, t) => e.style.setProperty(this.cssVariables.flyoutGroupNumber, t))), l.forEach(((e, t) => e.style.setProperty(this.cssVariables.flyoutItemNumber, t))), this.search.elements.flyout.style.setProperty(this.cssVariables.flyoutItemTotal, l.length - 1)
                    },
                    _setupSearchElements() {
                        this.search.elements.el = this.topNavList.querySelector(`.${this.classNames.search}`), this.search.elements.link = this.search.elements.el.querySelector(`.${this.classNames.linkSearch}`), this.search.elements.flyout = this.search.elements.el.querySelector(`.${this.classNames.subMenu}`), this.search.elements.content = this.search.elements.el.querySelector(`.${this.classNames.flyoutContent}`), this.search.elements.form = this.search.elements.flyout.querySelector(`.${this.classNames.searchForm}`), this.search.elements.input = this.search.elements.flyout.querySelector(`.${this.classNames.searchInput}`), this.search.elements.submit = this.search.elements.flyout.querySelector(`.${this.classNames.searchSubmit}`), this.search.elements.reset = this.search.elements.flyout.querySelector(`.${this.classNames.searchReset}`), this.search.elements.results = this.search.elements.flyout.querySelector(`.${this.classNames.searchResults}`), this.search.elements.count = this.search.elements.flyout.querySelector(`.${this.classNames.searchResultsCount}`), this.search.elements.resultsListText = Array.from(this.search.elements.flyout.querySelectorAll(`.${this.classNames.searchResultsListText}`)), this.search.elements.formButtons = [this.search.elements.submit, this.search.elements.reset], this.search.elements.currentResults = null, this.search.state.resultsLabel = this.search.elements.count.getAttribute("data-topnav-searchresults-label"), this.search.state.countSetDelayTime = 300, this.search.state.countResetDelayTime = 1e4, this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled, !0)
                    },
                    _updateSearchFieldButtons() {
                        const {
                            value: e
                        } = this.search.elements.input;
                        this.search.elements.formButtons.forEach((t => {
                            e ? (t.setAttribute("tabindex", "0"), t.removeAttribute("disabled"), t.removeAttribute("aria-hidden")) : (t.setAttribute("tabindex", "-1"), t.setAttribute("disabled", ""), t.setAttribute("aria-hidden", "true"))
                        }))
                    },
                    _highlightSearchSelection() {
                        this.search.selectionController, this.search.selectionController.links.forEach(((e, t) => {
                            e.classList[t === this.search.selectionController.active ? "add" : "remove"](this.classNames.searchResultsHover)
                        }))
                    },
                    _initSearchResultsSelectionController() {
                        var e;
                        this.search.selectionController = {}, this.search.selectionController.links = [], this.search.selectionController.active = -1, this.search.selectionController.links = (null == (e = this.search.elements.results.container) ? void 0 : e.querySelectorAll(`.${this.classNames.searchResultsListLink}`)) || []
                    },
                    _createSearchResultsTemplate(e) {
                        const t = this._getCurrentLayout(),
                            s = "compact" === t ? 13 : 9,
                            n = "compact" === t ? 25 : 16;
                        return `${e.map((e=>{const{title:i,results:a,icon:o}=e;return`\
                        n\ t\ t\ t\ t < div class = "${this.classNames.searchResultsContainer}" > \n\ t\ t\ t\ t\ t < h2 class = "${this.classNames.searchResultsHeader}" > $ {
                            i
                        } < /h2>\n\t\t\t\t\t<ul class="${this.classNames.searchResultsList}">\n\n\t\t\t\t\t\t${a.map((e=>{const{url:i,highlight:a}=e;let{label:l}=e;if(a){const[e,t]=Object.entries(a)[0],s=Number(e)+Number(t),n=l.slice(0,e),i=l.slice(e,s),o=l.slice(s),{searchResultsTextHighlight:r}=this.classNames;l=`${n}<span class="${r}">${i}</span > $ {
                            o
                        }
                        `}return`\
                        n\ t\ t\ t\ t\ t\ t\ t\ t < li class = "${this.classNames.searchResultsListItem}" > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t < a class = "${this.classNames.searchResultsListLink}"
                        href = "${i}" > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t < span class = "${this.classNames.searchResultsListIcon}" > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t < svg width = "${s}"
                        height = "${n}" > < use href = "#${this.options.className}-list-icon-${o}-${t}" / > < /svg>\n\t\t\t\t\t\t\t\t\t\t</span > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t < span class = "${this.classNames.searchResultsListText}" > $ {
                            l
                        } < /span>\n\t\t\t\t\t\t\t\t\t</a > \n\ t\ t\ t\ t\ t\ t\ t\ t < /li>`})).join("")}\n\t\t\t\t\t</ul > \n\ t\ t\ t\ t < /div>`})).join("")}`},_appendSearchResultsContent(e){const t=document.createElement("div");return t.classList.add(this.classNames.searchResultsCurrent),t.innerHTML=e,this.search.elements.currentResults=t,t},_renderSearchResults(e,t=!1){var s,n,i;const a=this.search.elements.el.querySelector(`.${this.classNames.searchResults}`),o=this._appendSearchResultsContent(e),l=this.search.elements.currentResults.querySelectorAll(`.${this.classNames.searchResultsContainer}`);if(this._currentFlyout==this.search.elements.el&&!t&&this.el.classList.add(this.classNames.animating),null==(s=this.search.elements.results.containerPrevious)||s.remove(),this.search.elements.results.containerPrevious=this.search.elements.results.container,null==(n=this.search.elements.results.containerPrevious)||n.classList.remove(`${this.classNames.searchResultsCurrent}`),null==(i=this.search.elements.results.containerPrevious)||i.classList.add(`${this.classNames.searchResultsPrevious}`),a.appendChild(o),this.search.elements.results.container=o,this._initSearchResultsSelectionController(),this.search.previousState=this.search.state.activeState||0,this.search.state.activeState=l.length,this.search.previousShift=this.search.currentShift,this.search.currentShift=`shift-${this.search.previousState}-${this.search.state.activeState}`,2===this.search.previousState&&1===this.search.state.activeState){const e=[...this.search.elements.results.containerPrevious.querySelectorAll(`.${this.classNames.searchResultsHeader}`),...this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsHeader}`)],[t,s,n]=e;s.textContent===n.textContent&&(this.search.currentShift+="-slide")}if(2===this.search.state.activeState){const[e,t]=this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsContainer}`),s=e.scrollHeight,{marginTop:n}=getComputedStyle(t),i=parseInt(n);this.search.elements.flyout.style.setProperty(this.cssVariables.searchSuggestedLinksHeight,`${s+i}px`)}this.search.elements.el.classList.remove(this.search.previousShift),requestAnimationFrame((()=>{this.search.elements.el.classList.add(this.search.currentShift),this._setFlyoutHeight(this.search.elements.el,this._getSearchFlyoutHeightOffset()),this._setSearchItemNumbers(),this.onSearchResultsRendered(),t&&this._onSearchAnimationEnd()}))}}];const $t={className:"topnav",mixins:[],curtainBlur:!0,scrimBlur:!0};class xt{constructor(e,t={}){this.el=e,this.options=Object.assign({},$t,t),this._viewportsWithMenu=["xsmall","small","medium"];const s={ref:this,events:["beforeCreate","created","beforeMount","mounted","pagehide","destroy","onLayoutChange","onTextZoomResize","onMenuTransitionEnd","onMenuWillOpen","onMenuWillClose","onMenuOpen","onMenuClose","onFlyoutWillOpen","onFlyoutWillClose","onFlyoutOpen","onFlyoutClose","onMenuButtonClick","onMenuBackButtonClick","onHiddenMenuItemClick","onMenuItemMouseOver","onMenuItemMouseLeave","onSearchUpdate","onSearchResultsRendered","onCurtainClick","onIconFlyoutFocusIn","onIconFlyoutFocusOut","onIconFlyoutClick","onIconFlyoutKeyDown"],viewportEvents:!0,breakpoints:[{name:"xsmall",mediaQuery:"only screen and (max-width: 480px)"},{name:"small",mediaQuery:"only screen and (min-width: 481px) and (max-width: 640px)"},{name:"medium",mediaQuery:"only screen and (min-width: 641px) and (max-width: 833px)"},{name:"large",mediaQuery:"only screen and (min-width: 834px)"}],setupEvents:["beforeCreate","created","beforeMount","mounted"]};return this.classNames={el:this.options.className,content:`${this.options.className}-content`,list:`${this.options.className}-list`,link:`${this.options.className}-link`,linkSearch:`${this.options.className}-link-search`,curtain:`${this.options.className}-curtain`,curtainNoBlur:`${this.options.className}-curtain-noblur`,scrim:`${this.options.className}-scrim`,scrimNoBlur:`${this.options.className}-scrim-noblur`,animating:`${this.options.className}-animating`,menuButton:`${this.options.className}-menutrigger-button`,menuBackButton:`${this.options.className}-menuback-button`,withMenuOpen:`${this.options.className}-with-menu-open`,menu:`${this.options.className}-menu`,menuList:`${this.options.className}-menu-list`,item:`${this.options.className}-item`,itemMenu:`${this.options.className}-item-menu`,itemSubMenu:`${this.options.className}-item-submenu`,itemFlyoutOpen:`${this.options.className}-item-flyout-open`,itemFlyoutChangePrevious:`${this.options.className}-item-flyout-change-previous`,itemFlyoutChangeNext:`${this.options.className}-item-flyout-change-next`,itemFlyoutClosing:`${this.options.className}-item-flyout-closing`,withFlyoutOpen:`${this.options.className}-with-flyout-open`,withFlyoutClosing:`${this.options.className}-with-flyout-closing`,flyout:`${this.options.className}-flyout`,flyoutContent:`${this.options.className}-flyout-content`,flyoutScrollContainer:`${this.options.className}-flyout-scroll-container`,flyoutShort:`${this.options.className}-flyout-short`,flyoutItem:`${this.options.className}-flyout-item`,flyoutItemGroup:`${this.options.className}-flyout-item-group`,withSubMenuOpen:`${this.options.className}-with-submenu-open`,withIconFlyoutOpen:`${this.options.className}-with-iconflyout-open`,subMenu:`${this.options.className}-submenu`,subMenuShort:`${this.options.className}-submenu-short`,subMenuLink:`${this.options.className}-submenu-link`,subMenuContent:`${this.options.className}-submenu-content`,subMenuTriggerGroup:`${this.options.className}-submenu-trigger-group`,subMenuTriggerLink:`${this.options.className}-submenu-trigger-link`,subMenuTriggerButton:`${this.options.className}-submenu-trigger-button`,subMenuGroup:`${this.options.className}-submenu-group`,subMenuGroupElevated:`${this.options.className}-submenu-group-elevated`,subMenuHeader:`${this.options.className}-submenu-header`,subMenuList:`${this.options.className}-submenu-list`,subMenusDisabled:`${this.options.className}-submenus-disabled`,blockTransitions:`${this.options.className}-block-transitions`,noScroll:`${this.options.className}-noscroll`,noScrollLong:`${this.options.className}-noscroll-long`,noScrollY:`${this.options.className}-noscroll-y`,search:`${this.options.className}-search`,searchForm:`${this.options.className}-searchfield`,searchInput:`${this.options.className}-searchfield-input`,searchSubmit:`${this.options.className}-searchfield-submit`,searchReset:`${this.options.className}-searchfield-reset`,searchResults:`${this.options.className}-searchresults`,searchResultsCount:`${this.options.className}-searchresults-count`,searchResultsCurrent:`${this.options.className}-searchresults-current`,searchResultsPrevious:`${this.options.className}-searchresults-previous`,searchResultsContainer:`${this.options.className}-searchresults-container`,searchResultsHeader:`${this.options.className}-searchresults-header`,searchResultsList:`${this.options.className}-searchresults-list`,searchResultsListLink:`${this.options.className}-searchresults-list-link`,searchResultsListIcon:`${this.options.className}-searchresults-list-icon`,searchResultsListItem:`${this.options.className}-searchresults-list-item`,searchResultsListText:`${this.options.className}-searchresults-list-text`,searchResultsHover:`${this.options.className}-searchresults-hover`,searchResultsTextHighlight:`${this.options.className}-searchresults-list-text-highlight`,searchWithResults:`${this.options.className}-search-with-results`,searchNoResults:`${this.options.className}-search-no-results`,searchResultsOverrideHighlight:`${this.options.className}-searchresults-override-highlight`,textZoomIn:`${this.options.className}-text-zoom-in`},this.cssVariables={topnavHeight:`--r-${this.options.className}-height`,flyoutItemNumber:`--r-${this.options.className}-flyout-item-number`,flyoutItemTotal:`--r-${this.options.className}-flyout-item-total`,flyoutGroupNumber:`--r-${this.options.className}-flyout-group-number`,flyoutGroupTotal:`--r-${this.options.className}-flyout-group-total`,flyoutElevatedGroupCount:`--r-${this.options.className}-flyout-elevated-group-count`,flyoutSpacing:`--r-${this.options.className}-flyout-spacing`,flyoutHeight:`--r-${this.options.className}-flyout-height`,flyoutPreviousHeight:`--r-${this.options.className}-previous-flyout-height`,flyoutNextHeight:`--r-${this.options.className}-next-flyout-height`,flyoutRateOfChange:`--r-${this.options.className}-flyout-rate`,flyoutCloseDelay:`--r-${this.options.className}-flyout-close-delay`,scrollbarWidth:`--r-${this.options.className}-scrollbar-width`,textZoomScale:`--r-${this.options.className}-text-zoom-scale`,fontSize:`--r-${this.options.className}-font-size`,searchResultsTimeoutDuration:`--r-${this.options.className}-searchresults-timeout`,searchSuggestedLinksHeight:`--r-${this.options.className}-suggested-links-height`},this.dataAttributes={iconFlyoutEnabled:`data-${this.options.className}-iconFlyout-enabled`},new Be(s,He,...this.options.mixins),this.options.manuallyInitLifecycles?this:this.beforeCreate().created().beforeMount().mounted()}}const Tt=I(null),It=Tt.Provider,Rt=I(null),Pt=Rt.Provider,Dt="touch";const Bt=(e,t)=>{const s=ee(null),n=ee(null);J((()=>{const i=null==e?void 0:e.current,a=null!=i?i:document.body,o=null!=t?t:"data-focus-method",l={keydown:function(e){return function(e,t){t.current="key"}(0,n)},mousedown:function(e){return function(e,t){t.current!==Dt&&(t.current="mouse")}(0,n)},touchstart:function(e){return function(e,t){t.current=Dt}(0,n)},focus:function(e){return function(e,t,s,n){const i=e.target;null==s.current&&(s.current=n.current),i.setAttribute(t,s.current),n.current=s.current,s.current=null}(e,o,n,s)},blur:function(e){return function(e,t){e.target.removeAttribute(t)}(e,o)},windowBlur:function(){return function(e){e.current=null}(n)}};return null!==i&&(Object.entries(l).forEach((([e,t])=>{a.addEventListener(`${e}`,t,{capture:!0,passive:!0})})),window.addEventListener("blur",l.windowBlur)),()=>{null!==i&&(Object.entries(l).forEach((([e,t])=>{a.removeEventListener(`${e}`,t)})),window.removeEventListener("blur",l.windowBlur))}}),[t,e])},Ht=e=>{if(void 0!==e)return e.reduce(((e,t)=>(e[t.name]=t.value,e)),{})},Wt=(e,t)=>{void 0!==t&&void 0!==e&&t.forEach((({name:t,value:s})=>{e.setAttribute(t,s)}))},Ut=(e,t)=>{void 0!==t&&void 0!==e&&t.forEach((({name:t,value:s})=>{e.removeAttribute(t)}))};var qt={isEnabledWhen(){return!1!==this.searchEnabled},created(){this.amlSearch={},this.amlSearch.requestId="",this.amlSearch.requestType="";const{hasAbsoluteUrls:e,useRelativeSearchRequest:t,wwwDomain:s,searchSettings:n,locale:i}=this.options.amlSearch;this.amlSearch.apiRequestDomain=e&&!t?`https:/ / $ {
                            s
                        }
                        `:"",this.amlSearch.locale=n.searchFieldLocale||i,!1!==n.searchSuggestionsEnabled?this.search.templateFunction=this._createAMLSearchTemplate:this.search.templateFunction=this._createAMLSearchDisabledTemplate},beforeMount(){this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled,!0),Wt(this.search.elements.el,this.options.amlSearch.searchSettings.analyticsAttributes),Ut(this.search.elements.el,this.options.amlSearch.searchSettings.open.analyticsAttributes),!1!==this.options.amlSearch.searchSettings.searchSuggestionsEnabled?async function({searchLocale:e,apiRequestDomain:t,apiRequestURL:s,searchSrc:n}){const i=await fetch(`
                        $ {
                            t
                        }
                        $ {
                            s
                        } ? src = $ {
                            n
                        } & locale = $ {
                            e
                        }
                        `);return i.ok?await i.json():await Promise.reject(new Error("no default links"))}({searchLocale:this.amlSearch.locale,apiRequestDomain:this.amlSearch.apiRequestDomain,apiRequestURL:this.options.amlSearch.searchSettings.defaultLinksApiUrl,searchSrc:this.options.amlSearch.searchSettings.searchFieldSrc}).then((e=>{const{id:t,results:s}=e;this.amlSearch.requestId=t;const n=this._transformData(s,{quickLinks:this.options.amlSearch.searchSettings.defaultLinks});this.setInitialSearchResults(n),this._setPlaceHolderText(),Wt(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes)})).catch((()=>{})):this.setInitialSearchResults()},onLayoutChange(){Wt(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this._setPlaceHolderText()},onFlyoutOpen(e){e===this.search.elements.el&&(Ut(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.amlSearch.searchSettings.close.ariaLabel))},onFlyoutClose(e){e===this.search.elements.el&&(Wt(this.search.elements.link,this.options.amlSearch.searchSettings.open.analyticsAttributes),this.search.elements.form.setAttribute("action",this.options.amlSearch.searchSettings.searchFieldAction))},onSearchUpdate(e){if(!e&&!1===this.options.amlSearch.searchSettings.searchSuggestionsEnabled)return;const{value:t}=this.search.elements.input;t.length>=2?(this.amlSearch.requestType="suggestions",async function({query:e,id:t,searchLocale:s,apiRequestDomain:n,apiRequestURL:i,searchSrc:a}){const o=await fetch(`
                        $ {
                            n
                        }
                        $ {
                            i
                        }
                        `,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:e,src:a,id:t,locale:s})});return o.ok?await o.json():await Promise.reject(new Error("no default links"))}({query:t,id:this.amlSearch.requestId,searchLocale:this.amlSearch.locale,apiRequestDomain:this.amlSearch.apiRequestDomain,apiRequestURL:this.options.amlSearch.searchSettings.suggestionsApiUrl,searchSrc:this.options.amlSearch.searchSettings.searchFieldSrc}).then((e=>{const{results:t}=e,s=this._transformData(t,{quickLinks:this.options.amlSearch.searchSettings.suggestedLinks,suggestions:this.options.amlSearch.searchSettings.suggestedSearches});this.setSearchResults(s)})).catch((()=>{}))):(this.amlSearch.requestType="defaultlinks",this.setSearchResults(this.search.initialResults))},_setPlaceHolderText(){this._isBreakpointWithMenu()?this.search.elements.input.setAttribute("placeholder",this.options.amlSearch.searchSettings.searchFieldPlaceholderCompact):this.search.elements.input.setAttribute("placeholder",this.options.amlSearch.searchSettings.searchFieldPlaceholderRegular)},_transformData(e,t){const s=[];for(const n of e){if(!n.sectionResults.length)continue;const e=t[n.sectionName],i={title:e.title,icon:e.images,sectionName:n.sectionName,analyticsAttributes:e.analyticsAttributes,results:n.sectionResults};"quickLinks"===n.sectionName?s.unshift(i):s.push(i)}return s},_createAMLSearchTemplate(e){const t={quickLinks:{label:"defaultlinks",event:50},suggestedLinks:{label:"quicklinks",event:38},suggestedSearches:{label:"suggestions",event:39}};return`
                        $ {
                            e.map((e => {
                                const {
                                    title: s,
                                    icon: n,
                                    analyticsAttributes: i,
                                    results: a
                                } = e, o = "defaultlinks" === this.amlSearch.requestType ? "quickLinks" : "quickLinks" === e.sectionName ? "suggestedLinks" : "suggestedSearches", l = i.map((e => `${e.name}="${e.value}"`)).join("");
                                return `<div\n\t\t\t\t\tclass="${this.classNames.searchResultsContainer}"\n\t\t\t\t\t${l}\n\t\t\t\t>\n\t\t\t\t\t<h2 class="${this.classNames.searchResultsHeader}">${s}</h2>\n\t\t\t\t\t<ul class="${this.classNames.searchResultsList}" role="list">\n\n\t\t\t\t\t\t${a.map(((e,s)=>{const{url:i,highlight:l}=e,r=void 0!==l&&Object.keys(l).length>0;let{label:u}=e;if(r){const[e,t]=Object.entries(l)[0],s=Number(e)+Number(t),n=u.slice(0,e),i=u.slice(e,s),a=u.slice(s),{searchResultsTextHighlight:o}=this.classNames;u=`
                                $ {
                                    n
                                } < span class = "${o}" > $ {
                                    i
                                } < /span>${a}`}const c=t[o].label;const h=[{name:"query",value:this.search.elements.input.value||"no keyword"},{name:"section",value:c},{name:"items",value:a.length},{name:"index",value:s},{name:"label",value:e.label}];return`\n\t\t\t\t\t\t\t\t<li class="${this.classNames.searchResultsListItem}" role="listitem">\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\tclass="${this.classNames.searchResultsListLink}"\n\t\t\t\t\t\t\t\t\t\thref="${i}"\n\t\t\t\t\t\t\t\t\t\t${h.map((({name:e,value:t})=>`data-${e}="${function(e){return e.toString().replace(/ & /g,"&amp;").replace(/ < /g,"&lt;").replace(/ > /g,"&gt;").replace(/
                                "/g," & quot;
                                ").replace(/'/g," & #039;")}(t)}"`)).join(" ")}\n\t\t\t\t\t\t\t\t\t\tdata-analytics-click= "eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},\n\t\t\t\t\t\t\t\t\t\t\tevents:event${t[o].event}"\
                                n\ t\ t\ t\ t\ t\ t\ t\ t\ t > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t < span class = "${this.classNames.searchResultsListIcon}" > \n\ n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t$ {
                                    n.map((e => {
                                        const {
                                            name: t,
                                            assetInline: s
                                        } = e;
                                        return `<span class="globalnav-image-${t} globalnav-link-image">${s}</span>`
                                    })).join("")
                                }\
                                n\ n\ n\ t\ t\ t\ t\ t\ t\ t\ t\ t\ t < /span>\n\t\t\t\t\t\t\t\t\t\t<span class="${this.classNames.searchResultsListText}">${u}</span > \n\ t\ t\ t\ t\ t\ t\ t\ t\ t < /a>\n\t\t\t\t\t\t\t\t</li > `})).join("")}\n\t\t\t\t\t</ul>\n\t\t\t\t</div>`
                            })).join("")
                        }
                        `},_createAMLSearchDisabledTemplate(){return` < div class = "${this.classNames.searchResultsContainer}" > < div > `}},Vt=[pt,{isEnabledWhen(){return!1!==this.bagEnabled},created(){this.bag={},this.classNames.bag="globalnav-bag",this.classNames.linkBag="globalnav-link-bag",this.classNames.bagBadge="globalnav-bag-badge"},beforeMount(){document.getElementById(this.classNames.bag).setAttribute(this.dataAttributes.iconFlyoutEnabled,!0)},mounted(){this._setupBagElements();const e=this.bag.link.getAttribute("href").replace(this.options.bagData.bagHref,this.options.bagData.data.open.url);this.bag.link.setAttribute("href",e)},onLayoutChange(){this._isBreakpointWithMenu()&&Ut(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes),this.bag.link.setAttribute("aria-label",this.options.bagData.data.open.ariaLabel),Wt(this.bag.link,this.options.bagData.data.open.analyticsAttributes),Wt(this.bag.bagBadge,this.options.bagData.data.open.analyticsAttributes)},onFlyoutWillOpen(e){e===this.bag.el&&window.acStore.isDisabled&&this.pagehide()},onFlyoutOpen(e){e===this.bag.el&&(Wt(this.bag.link,this.options.bagData.data.close.analyticsAttributes),Wt(this.bag.bagBadge,this.options.bagData.data.close.analyticsAttributes),this._isBreakpointWithMenu()&&(this.menu.elements.menuButton.setAttribute("aria-label",this.options.bagData.data.close.ariaLabel),Wt(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes)))},onFlyoutClose(e){e===this.bag.el&&(this.bag.link.setAttribute("aria-label",this.options.bagData.data.open.ariaLabel),Wt(this.bag.link,this.options.bagData.data.open.analyticsAttributes),Wt(this.bag.bagBadge,this.options.bagData.data.open.analyticsAttributes),this._isBreakpointWithMenu()&&Ut(this.menu.elements.menuButton,this.options.bagData.data.close.analyticsAttributes))},onIconFlyoutClick(e){!this.bag.el.contains(e.target)||e.target.dispatchEvent(new window.CustomEvent("clickbag",{bubbles:!0,cancelable:!0,detail:{originalTarget:e.target}}))},_setupBagElements(){this.bag.el=this.topNavList.querySelector(`.$ {
                            this.classNames.bag
                        }
                        `),this.bag.link=this.bag.el.querySelector(`.$ {
                            this.classNames.linkBag
                        }
                        `),this.bag.flyout=this.bag.el.querySelector(`.$ {
                            this.classNames.subMenu
                        }
                        `),this.bag.bagBadge=this.bag.el.querySelector(`.$ {
                            this.classNames.bagBadge
                        }
                        `)}}],jt={mounted(){window.dispatchEvent(new window.CustomEvent("globalnav:mounted",{detail:{target:this.el}}))},onFlyoutWillOpen(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillOpen",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutOpen(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutOpen",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutWillClose(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillClose",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))},onFlyoutClose(e){this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutClose",{detail:{target:e,layout:this._isBreakpointWithMenu()?"compact":"regular"}}))}},Zt=[dt,{mounted(){this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.open.ariaLabel)},onFlyoutOpen(e){!this.menu.elements.menuFlyout.contains(e)||this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.close.ariaLabel)},onFlyoutClose(e){!this.menu.elements.menuFlyout.contains(e)||!this._currentFlyout&&this._isBreakpointWithMenu()&&this.menu.elements.menuButton.setAttribute("aria-label",this.options.menuData.data.open.ariaLabel)}}];function zt(e,t){return null!=e.match(/^http[s]?/)?e:void 0!==t&&e.startsWith("/")?`
                        https: //${t}${e}`:e}const Gt=["consumer"],Kt=(e,t,s)=>{void 0!==e.segmentCode&&!Gt.includes(e.segmentCode)&&t(!1),void 0===e.segmentCode&&!1!==s&&t(!0)};function Qt(e,t){for(var s in t)e[s]=t[s];return e}function Yt(e,t){for(var s in e)if("__source"!==s&&!(s in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function Jt(e){this.props=e}(Jt.prototype=new g).isPureReactComponent=!0,Jt.prototype.shouldComponentUpdate=function(e,t){return Yt(this.props,e)||Yt(this.state,t)};var Xt=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Xt&&Xt(e)};var es="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ts(e){function t(t){var s=Qt({},t);return delete s.ref,e(s,t.ref||null)}return t.$$typeof=es,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var ss=t.__e;t.__e=function(e,t,s,n){if(e.then)for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return null==t.__e&&(t.__e=s.__e,t.__k=s.__k),i.__c(e,t);ss(e,t,s,n)};var ns=t.unmount;function is(e,t,s){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=Qt({},e)).__c&&(e.__c.__P===s&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return is(e,t,s)}))),e}function as(e,t,s){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return as(e,t,s)})),e.__c&&e.__c.__P===t&&(e.__e&&s.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=s)),e}function os(){this.__u=0,this.t=null,this.__b=null}function ls(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function rs(){this.u=null,this.o=null}t.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),ns&&ns(e)},(os.prototype=new g).__c=function(e,t){var s=t.__c,n=this;null==n.t&&(n.t=[]),n.t.push(s);var i=ls(n.__v),a=!1,o=function(){a||(a=!0,s.__R=null,i?i(l):l())};s.__R=o;var l=function(){if(! --n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=as(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.t.pop();)t.forceUpdate()}},r=!0===t.__h;n.__u++||r||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(o,o)},os.prototype.componentWillUnmount=function(){this.t=[]},os.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=is(this.__b,s,n.__O=n.__P)}this.__b=null}var i=t.__a&&m(p,null,e.fallback);return i&&(i.__h=null),[m(p,null,t.__a?null:e.children),i]};var us=function(e,t,s){if(++s[1]===s[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(s=e.u;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;e.u=s=s[2]}};(rs.prototype=new g).__a=function(e){var t=this,s=ls(t.__v),n=t.o.get(e);return n[0]++,function(i){var a=function(){t.props.revealOrder?(n.push(i),us(t,e,n)):i()};s?s(a):a()}},rs.prototype.render=function(e){this.u=null,this.o=new Map;var t=E(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var s=t.length;s--;)this.o.set(t[s],this.u=[1,0,this.u]);return e.children},rs.prototype.componentDidUpdate=rs.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,s){us(e,s,t)}))};var cs="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,hs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ms="undefined"!=typeof document,ds=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};g.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(g.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var ps=t.event;function gs(){}function _s(){return this.cancelBubble}function bs(){return this.defaultPrevented}t.event=function(e){return ps&&(e=ps(e)),e.persist=gs,e.isPropagationStopped=_s,e.isDefaultPrevented=bs,e.nativeEvent=e};var vs={configurable:!0,get:function(){return this.class}},fs=t.vnode;t.vnode=function(e){var t=e.type,s=e.props,n=s;if("string"==typeof t){var i=-1===t.indexOf("-");for(var a in n={},s){var o=s[a];ms&&"children"===a&&"noscript"===t||"value"===a&&"defaultValue"in s&&null==o||("defaultValue"===a&&"value"in s&&null==s.value?a="value":"download"===a&&!0===o?o="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!ds(s.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)?a=a.toLowerCase():i&&hs.test(a)?a=a.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===o&&(o=void 0),/^oninput$/i.test(a)&&(a=a.toLowerCase(),n[a]&&(a="oninputCapture")),n[a]=o)}"select"==t&&n.multiple&&Array.isArray(n.value)&&(n.value=E(s.children).forEach((function(e){e.props.selected=-1!=n.value.indexOf(e.props.value)}))),"select"==t&&null!=n.defaultValue&&(n.value=E(s.children).forEach((function(e){e.props.selected=n.multiple?-1!=n.defaultValue.indexOf(e.props.value):n.defaultValue==e.props.value}))),e.props=n,s.class!=s.className&&(vs.enumerable="className"in s,null!=s.className&&(n.class=s.className),Object.defineProperty(n,"className",vs))}e.$$typeof=cs,fs&&fs(e)};var ys=t.__r;t.__r=function(e){ys&&ys(e),e.__c};const Ss=({children:e})=>Ee("div",{className:"globalnav-flyout-content globalnav-submenu-content",children:e}),Es=({children:e})=>Ee(p,{children:Ee("div",{class:"globalnav-flyout-scroll-container",children:e})});function ws({analyticsAttributes:e,count:t,unit:s}){return Ee("span",{class:"globalnav-bag-badge","aria-hidden":"true",...Ht(e),children:[Ee("span",{class:"globalnav-bag-badge-separator"}),Ee("span",{class:"globalnav-bag-badge-number",children:t}),Ee("span",{class:"globalnav-bag-badge-unit",children:s})]})}const Ns=({children:e})=>Ee("div",{id:"globalnav-submenu-bag",class:"globalnav-flyout globalnav-submenu","aria-labelledby":"globalnav-menubutton-link-bag",children:e});var Ls=ts((({children:e,count:t,analyticsAttributes:s},n)=>Ee("li",{class:t>0?"globalnav-item globalnav-bag with-badge":"globalnav-item globalnav-bag",id:"globalnav-bag",ref:n,...Ht(s),children:e})));const As=({images:e})=>Ee(p,{children:null==e?void 0:e.map((e=>{const{name:t,assetInline:s}=e;return Ee("span",{className:`globalnav-image-${t}`,dangerouslySetInnerHTML:{__html:s}})}))}),Cs=({href:e,ariaLabel:t,images:s,analyticsAttributes:n})=>Ee("a",{role:"button",id:"globalnav-menubutton-link-bag",className:"globalnav-link globalnav-link-bag",href:e,"aria-label":t,"data-globalnav-item-name":"bag","data-topnav-flyout-trigger-regular":!0,"data-topnav-flyout-trigger-compact":!0,...Ht(n),children:Ee(As,{images:s})}),ks=({children:e})=>Ee("div",{className:"globalnav-bag-wrapper",children:e});var Ms=ts((({href:e,bag:t,bagFlyout:s,badgeCount:n},i)=>{const[a,o]=Q("");function l(e){return e>99?99:e}return o(0!==l(n)?`${t.badge.ariaLabel.replace("{%BAGITEMCOUNT%}",(r=n,(r>99?"99+":r).toString()))}`:`${t.open.ariaLabel}`),Ee(p,{children:Ee(Ls,{ref:i,count:n,analyticsAttributes:t.analyticsAttributes,children:[Ee(ks,{children:[Ee(Cs,{href:e,ariaLabel:a,images:t.open.images,analyticsAttributes:t.open.analyticsAttributes}),Ee(ws,{count:l(n),unit:"+",analyticsAttributes:t.open.analyticsAttributes})]}),Ee(Ns,{children:Ee(Es,{children:Ee(Ss,{children:s})})})]})});var r}));const Fs=({id:e,title:t})=>Ee("h2",{class:"globalnav-submenu-header",id:e,children:t}),Os=({text:e,url:t,analyticsAttributes:s,ariaLabel:n})=>{const i=ne(Rt),a=Ht(s),o=""!==n?n:null;return Ee("a",{href:zt(t,!0===(null==i?void 0:i.hasAbsoluteUrls)?i.wwwDomain:void 0),className:"globalnav-submenu-link",...a,"aria-label":o,children:e})},$s=({type:e,text:t,url:s,ariaLabel:n,analyticsAttributes:i})=>Ee("li",{className:"globalnav-submenu-list-item"+(void 0!==e?"-"+e:""),children:Ee(Os,{text:t,url:s,ariaLabel:n,analyticsAttributes:i})}),xs=({data:e})=>{var t,s;return Ee("ul",{class:"globalnav-submenu-list","aria-labelledby":e.id,children:[null==(t=e.elevatedLinks)?void 0:t.map((({id:e,text:t,url:s,ariaLabel:n,analyticsAttributes:i})=>Ee($s,{type:"elevated",text:t,url:s,ariaLabel:n,analyticsAttributes:i},e))),null==(s=e.baseLinks)?void 0:s.map((({id:e,text:t,url:s,ariaLabel:n,analyticsAttributes:i})=>Ee($s,{text:t,url:s,ariaLabel:n,analyticsAttributes:i},e)))]})},Ts=({data:e})=>Ee("div",{className:"globalnav-submenu-group "+(null!=e.elevatedLinks&&e.elevatedLinks.length>0?"globalnav-submenu-group-elevated":""),...Ht(e.analyticsAttributes),children:[Ee(Fs,{id:e.id,title:e.title}),Ee(xs,{data:e})]}),Is=({name:e,elevatedGroups:t,baseGroups:s})=>Ee("div",{id:`globalnav-submenu-link-${e}`,className:"globalnav-flyout globalnav-submenu","aria-labelledby":`globalnav-menubutton-link-${e}`,children:Ee("div",{class:"globalnav-flyout-scroll-container",children:Ee(Ss,{children:[null==t?void 0:t.map((e=>{const{id:t}=e;return Ee(Ts,{data:e},t)})),null==s?void 0:s.map((e=>{const{id:t}=e;return Ee(Ts,{data:e},t)}))]})})}),Rs=({name:e,text:t,url:s,submenuChevron:n,isMenuItem:i,hasSubMenu:a=!1,analyticsAttributes:o,ariaLabel:l,submenuAriaLabel:r,images:u})=>{const c=ne(Rt),h=u.filter((e=>i?"regular"===e.name:e)),m=Ht(o);return i?Ee("ul",{class:"globalnav-submenu-trigger-group",role:"none",children:[Ee("li",{class:"globalnav-submenu-trigger-item",children:Ee("a",{className:`globalnav-link globalnav-submenu-trigger-link globalnav-link-${e}`,href:zt(s,!0===(null==c?void 0:c.hasAbsoluteUrls)?c.wwwDomain:void 0),"data-globalnav-item-name":e,"data-topnav-flyout-trigger-compact":!0,...m,"aria-label":l,children:[Ee("span",{class:"globalnav-link-text-container",children:[h.map((e=>Ee("span",{className:`globalnav-image-${e.name} globalnav-link-image`,dangerouslySetInnerHTML:{__html:e.assetInline}}))),Ee("span",{className:"globalnav-link-text",children:t})]}),a&&Ee("span",{class:"globalnav-link-chevron",children:Ee("svg",{height:"48",viewBox:"0 0 9 48",width:"9",xmlns:"http://www.w3.org/2000/svg",children:Ee("path",{d:"m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z"})})})]})}),a&&Ee("li",{class:"globalnav-submenu-trigger-item",children:Ee("button",{id:`globalnav-menubutton-link-${e}`,class:"globalnav-submenu-trigger-button","aria-expanded":"false","aria-controls":`globalnav-submenu-link-${e}`,"aria-label":r,"data-topnav-flyout-trigger-regular":!0,children:null==n?void 0:n.open.images.map((e=>Ee("span",{className:`globalnav-image-${e.name} globalnav-submenu-button-icon`,dangerouslySetInnerHTML:{__html:e.assetInline}})))})})]}):Ee("a",{className:`globalnav-link globalnav-link-${e}`,href:zt(s,!0===(null==c?void 0:c.hasAbsoluteUrls)?c.wwwDomain:void 0),"data-globalnav-item-name":e,...m,"aria-label":t,children:[h.map((e=>Ee("span",{className:`globalnav-image-${e.name} globalnav-link-image`,dangerouslySetInnerHTML:{__html:e.assetInline}}))),Ee("span",{className:"globalnav-link-text",children:t})]})},Ps=({id:e,isMenuItem:t,name:s,text:n,url:i,images:a,submenuChevron:o,ariaLabel:l,submenuAriaLabel:r,analyticsAttributes:u,linksData:c})=>{var h,m;const d=null!=(null==(h=null==c?void 0:c.baseGroups)?void 0:h.length)||null!=(null==(m=null==c?void 0:c.elevatedGroups)?void 0:m.length);return Ee(t?"div":"li",{className:`\n\t\t\t\tglobalnav-item\n\t\t\t\tglobalnav-item-${s}\n\t\t\t\t${t?"globalnav-item-menu":""}\n\t\t\t\t${d?"globalnav-item-submenu":""}\n\t\t\t`,"data-analytics-element-engagement":`globalnav hover - ${s}`,children:[Ee(Rs,{name:s,isMenuItem:t,text:n,url:i,submenuChevron:o,hasSubMenu:d,ariaLabel:l,submenuAriaLabel:r,analyticsAttributes:u,images:a}),d&&Ee(Is,{name:c.name,elevatedGroups:c.elevatedGroups,baseGroups:c.baseGroups},e)]})},Ds=["apple","search","bag"];const Bs=(e,t)=>{let s;return Array.isArray(t)&&(s=t.find((t=>t.name===e&&t))),s};async function Hs(e){let t=e;try{let{AosLinkReplacer:s}=await Promise.resolve().then((function(){return kn}));s.shouldReplaceSubMenuLinks()&&(t=await s.replaceSubMenuLinks(e))}catch{t=e}return t}const Ws=({links:e,submenuChevron:t,locale:s,submenuApiUrl:n,subMenuData:i=[],submenusEnabled:a=!0})=>{var o,l;const[r,u]=Q([]),c=ne(Tt),h=null==e?void 0:e.reduce(((e,t)=>(Ds.includes(t.name)?e.nonMenuItems.push(t):e.menuItems.push(t),e)),{nonMenuItems:[],menuItems:[]});return J((()=>{let e=!1;return async function(e,t){return await(await fetch(`${t}?locale=${e}`)).json()}(s,n).then(Hs).then((t=>{e||u(t)})).catch((()=>{})),()=>{e=!0}}),[]),J((()=>{Object.keys(r).length>0&&(null==c||c.initiateFlyouts(),null==c||c.initiateSubMenus()),null!==c&&(c.submenuEnabled=a)}),[c,r,a]),Ee(p,{children:[null==(o=null==h?void 0:h.nonMenuItems)?void 0:o.map((e=>{const{id:t,name:s,text:n,url:i,images:a,analyticsAttributes:o}=e,l=Bs(s,r);return Ee(Ps,{id:t,isMenuItem:!1,name:s,linksData:l,text:n,url:i,images:a,analyticsAttributes:o})})),Ee("li",{class:"globalnav-item globalnav-menu","data-topnav-flyout-item":"menu","data-topnav-flyout-label":"Menu",role:"none",children:Ee("div",{class:"globalnav-flyout","data-topnav-flyout":"menu",children:Ee("div",{class:"globalnav-menu-list",children:null==(l=null==h?void 0:h.menuItems)?void 0:l.map((e=>{const{id:s,name:n,text:i,url:a,ariaLabel:o,submenuAriaLabel:l,images:u,analyticsAttributes:c}=e,h=Bs(n,r);return Ee(Ps,{id:s,isMenuItem:!0,name:n,linksData:h,submenuChevron:t,text:i,url:a,ariaLabel:o,submenuAriaLabel:l,images:u,analyticsAttributes:c})}))})})})]})};function Us({openLabel:e="Menu",closeLabel:t="Close"}){return Ee("div",{class:"globalnav-menutrigger",children:Ee("button",{id:"globalnav-menutrigger-button",class:"globalnav-menutrigger-button","aria-controls":"globalnav-list","aria-label":e,"data-topnav-menu-label-open":e,"data-topnav-menu-label-close":t,"data-topnav-flyout-trigger-compact":"menu",children:Ee("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[Ee("polyline",{id:"globalnav-menutrigger-bread-bottom",class:"globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom",fill:"none",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round",points:"2 12, 16 12",children:[Ee("animate",{id:"globalnav-anim-menutrigger-bread-bottom-open",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"}),Ee("animate",{id:"globalnav-anim-menutrigger-bread-bottom-close",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"})]}),Ee("polyline",{id:"globalnav-menutrigger-bread-top",class:"globalnav-menutrigger-bread globalnav-menutrigger-bread-top",fill:"none",stroke:"currentColor","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round",points:"2 5, 16 5",children:[Ee("animate",{id:"globalnav-anim-menutrigger-bread-top-open",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"}),Ee("animate",{id:"globalnav-anim-menutrigger-bread-top-close",attributeName:"points",keyTimes:"0;0.5;1",dur:"0.24s",begin:"indefinite",fill:"freeze",calcMode:"spline",keySplines:"0.42, 0, 1, 1;0, 0, 0.58, 1",values:" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"})]})]})})})}function qs({placeholder:e,name:t,ariaLabel:s,onInput:n=(e=>{}),onBlur:i=(e=>{}),onFocus:a=(e=>{})}){return Ee("input",{class:"globalnav-searchfield-input",placeholder:e,name:t,"aria-label":s,autoCorrect:"off",autoCapitalize:"off",autoComplete:"off",spellCheck:!1,onInput:e=>n(e),onBlur:e=>i(e),onFocus:e=>a(e)})}function Vs({ariaLabel:e,resultsAriaLabel:t,action:s,input:n,placeholder:i,submit:a,reset:o,src:l,name:r,type:u,page:c,locale:h,onInput:m=(e=>{}),onBlur:d=(e=>{}),onFocus:p=(e=>{})}){var g,_;const b=ee(null),[v,f]=Q(s);return J((()=>{f(s)}),[s]),Ee("form",{class:"globalnav-searchfield",action:v,ref:b,method:"get",children:[Ee("div",{class:"globalnav-searchfield-wrapper",children:[Ee(qs,{placeholder:i,ariaLabel:e,name:r,onInput:e=>{void 0===r&&(function(e,t,s){const n=e.target,{value:i}=n;let a=encodeURIComponent(i.replace(/\s+/g,"-"));a.startsWith(" ")&&a.trim(),a.startsWith("-")&&(a=a.replace("-",""));const o=""!==a?"/":"",l=t.indexOf("?");let r;r=l>=0?`${t.substring(0,l)}${o}${a}${t.substring(l)}`:`${t}${o}${a}`;s(r)}(e,s,f),m(e))},onBlur:e=>d(e),onFocus:e=>p(e),autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false","aria-label":n.ariaLabel}),Ee("input",{id:"globalnav-searchfield-src",type:"hidden",name:"src",value:l}),void 0!==u&&Ee("input",{type:"hidden",name:"type",value:u}),void 0!==c&&Ee("input",{type:"hidden",name:"page",value:c}),void 0!==h&&Ee("input",{type:"hidden",name:"locale",value:h}),Ee("button",{class:"globalnav-searchfield-reset","aria-label":o.ariaLabel,tabIndex:-1,type:"button",onClick:e=>{e.preventDefault(),f(s)},children:null==(g=o.images)?void 0:g.map((e=>{const{name:t,assetInline:s}=e;return Ee("span",{className:`globalnav-image-${t}`,dangerouslySetInnerHTML:{__html:s}})}))}),Ee("button",{class:"globalnav-searchfield-submit","aria-label":a.ariaLabel,tabIndex:-1,"aria-hidden":"true",type:"submit",children:null==(_=a.images)?void 0:_.map((e=>{const{name:t,assetInline:s}=e;return Ee("span",{className:`globalnav-image-${t}`,dangerouslySetInnerHTML:{__html:s}})}))})]}),Ee("div",{class:"globalnav-searchresults-count",role:"status","aria-live":"polite","data-topnav-searchresults-label":t})]})}const js=({ariaLabel:e,href:t,analyticsAttributes:s,images:n})=>Ee(p,{children:Ee("a",{role:"button",id:"globalnav-menubutton-link-search",class:"globalnav-link globalnav-link-search",href:t,"data-topnav-flyout-trigger-regular":!0,"data-topnav-flyout-trigger-compact":!0,"aria-label":e,...Ht(s),children:Ee(As,{images:n})})}),Zs=()=>Ee("div",{class:"globalnav-searchresults"}),zs=({children:e})=>Ee(p,{children:Ee("div",{id:"globalnav-submenu-search",class:"globalnav-flyout globalnav-submenu","aria-labelledby":"globalnav-menubutton-link-search",children:e})}),Gs=({ariaLabel:e,analyticsAttributes:t,children:s})=>Ee(p,{children:Ee("li",{class:"globalnav-item globalnav-search","data-topnav-flyout-label":e,...Ht(t),children:s})});function Ks({ariaLabel:e,resultsAriaLabel:t,analyticsAttributes:s,href:n,images:i,suggestionsApiUrl:a,defaultLinksApiUrl:o,input:l,placeholder:r,submit:u,reset:c,action:h,src:m,name:d,type:g,page:_,locale:b}){return Ee(p,{children:Ee(Gs,{ariaLabel:e,analyticsAttributes:s,children:[Ee(js,{ariaLabel:e,href:n,analyticsAttributes:s,images:i}),Ee(zs,{children:Ee(Es,{children:Ee(Ss,{children:[Ee(Vs,{ariaLabel:e,resultsAriaLabel:t,suggestionsApiUrl:a,defaultLinksApiUrl:o,input:l,placeholder:r,submit:u,reset:c,action:h,src:m,name:d,type:g,page:_,locale:b}),Ee(Zs,{})]})})})]})})}const Qs="bagitem-adding",Ys="bagitem-removing",Js="with-bag-count",Xs="with-bag-count-onload",en=`${Js}-double`,tn=`${Js}-triple`;function sn({locale:e="en_US",textDirection:t="ltr",ariaLabel:s,bag:n,menu:i,links:a,submenu:o,submenuApiUrl:l,search:r,storeUrlPath:u,analyticsAttributes:c,analyticsType:h,wwwDomain:m="www.apple.com",hasAbsoluteUrls:d=!1,useRelativeSearchRequest:p=!1,hasShopRedirectUrls:g=!0,subMenuData:_,setAcStoreInstance:b}){var v;"string"==typeof d&&(d=me(d)),"string"==typeof p&&(p=me(p));const f=ee(null),y=ee(null),S=ee(void 0),E=ee(void 0),w=ee(void 0),N=ee(""),L=ee(void 0),A=ee(""),C=ee(""),k=ee(""),M=ee(""),F=ee(""),O=ee(void 0),$=ee(void 0),x=ee(void 0),[T,I]=Q(null),[R,P]=Q(),[D,B]=Q(!0),[H,W]=Q(0),[U,q]=Q(""),[V,j]=Q(""),[Z,z]=Q(""),[G,K]=Q(!1),Y=se((()=>{null!==T&&(T.setFlyoutItems(),T._setFlyoutHeight(T.bag.el),T._checkFlyoutHeight(T.bag.el))}),[T]),X=e.replace("_","-");let te=null==u?void 0:u.replace("/","");"zh_CN"===e&&(te="cn");const ne=null!=(null==(v=null==r?void 0:r.open)?void 0:v.url)&&null!=(null==r?void 0:r.suggestionsApiUrl)&&null!=(null==r?void 0:r.defaultLinksApiUrl),ie=void 0!==n&&void 0!==u;Bt(f),J((()=>{var e,t,s,n,i,a,o,l,r,u,c,h,m;const d=document.querySelectorAll('meta[name^="globalnav-"]'),p=de(Array.from(d),"globalnav-");w.current=null==(e=p.searchField)?void 0:e.action,N.current=void 0!==(null==(t=p.searchField)?void 0:t.src)?p.searchField.src:"globalnav",M.current=void 0!==(null==(s=p.searchField)?void 0:s.placeholderRegular)?null==(n=p.searchField)?void 0:n.placeholderRegular:void 0!==(null==(i=p.searchField)?void 0:i.placeholder)?null==(a=p.searchField)?void 0:a.placeholder:"",F.current=void 0!==(null==(o=p.searchField)?void 0:o.placeholderCompact)?null==(l=p.searchField)?void 0:l.placeholderCompact:"",L.current=null==(r=p.searchField)?void 0:r.name,A.current=null==(u=p.searchField)?void 0:u.type,C.current=null==(c=p.searchField)?void 0:c.page,k.current=null==(h=p.searchField)?void 0:h.locale,O.current=null==(m=p.searchField)?void 0:m.href,E.current=p.storeKey,S.current=p.bagFlyoutEnabled;const g=p.submenusEnabled;$.current=p.submenusEnabled,x.current=p.searchSuggestionsEnabled,B(g)}),[]),J((()=>{const t=null==f?void 0:f.current,s={className:"globalnav",mixins:[gt,_t,Ct,kt,jt,Zt],amlSearch:{},bagData:{},menuData:{data:i}};ne&&(s.mixins.push(Ot,qt),r.searchFieldSrc=N.current,r.searchFieldAction=void 0!==w.current?w.current:zt(r.open.url,!0===d?m:void 0),r.searchFieldLocale=k.current,r.searchFieldPlaceholderRegular=""!==M.current?M.current:r.input.placeholderTextRegular,r.searchFieldPlaceholderCompact=""!==F.current?F.current:r.input.placeholderTextCompact,r.searchAriaLabel=""!==M.current?M.current:r.open.ariaLabel,r.searchSuggestionsEnabled=void 0!==x.current?x.current:void 0,s.amlSearch={searchSettings:r,locale:e,wwwDomain:m,hasAbsoluteUrls:d,useRelativeSearchRequest:p}),ie&&void 0!==E.current&&!1!==S.current&&(s.mixins.push(Vt),s.bagData={data:n,bagHref:`${u}/shop/goto${n.open.url}`});const a=new xt(t,s);return I(a),null!==t&&K(!0),()=>{null!==t&&(K(!1),a.destroy(),I(null))}}),[n,d,p,ie,ne,e,i,r,u,m]),J((()=>{const e=null==f?void 0:f.current,t=null==y?void 0:y.current,s=e=>{0===e?q(""):e>0&&e<10?q(Js):e>=10&&e<100?q(`${Js} ${en}`):e>=100&&q(`${Js} ${tn}`)};return null!==t&&void 0!==E.current&&!1!==S.current&&Promise.all([Promise.resolve().then((function(){return kn}))]).then((n=>{let[{AcStore:i,AcBagFlyout:a}]=n;const o=null==e?void 0:e.dataset.storeApi,l=null==o?void 0:o.replace("[storefront]",String(te));let r=window.acStore;void 0===r&&(r=new i(t,te,E.current,l),void 0!==r&&(r.getStoreState().then((e=>{null==r||r.getItemCount().then((e=>{(e=>{0===H&&0!==e&&j(Xs)})(e),s(e),W(e)})),null==r||r.on("itemCountChange",(e=>{s(e),(e=>{j(""),z(e>0&&0===H?Qs:H>0&&0===e?Ys:"")})(e),W(e)}))}),(e=>{window.acStore.isDisabled=!0,null!==f.current&&(null==f||f.current.addEventListener("clickbag",(e=>{const t=e.detail.originalTarget.href;""!==t&&(window.location.href=t)})))})),null==r||r.getStorefront().then((e=>{Kt(e,B,$.current)}),(()=>{})),r.on("storefrontChange",(e=>{Kt(e,B,$.current)})))),window.acStore=r,b(r),P(Ee(_e,{children:t=>Ee(a,{acStoreInstance:t,globalNavEl:e,onFlyoutContentUpdate:Y})})),null!==f.current&&window.addEventListener("segmentExit",(e=>{null==r||r.getStorefront().then((e=>{Kt(e,B,$.current)}),(()=>{}))}))})).catch((e=>{})),()=>{null!==e&&window.removeEventListener("segmentExit",(e=>{}))}}),[H,E,u,te,Y,b]);const ae=Ht(c);return Ee(It,{value:T,children:[Ee("nav",{id:"globalnav",className:`globalnav ${G?"js":"no-js"} ${V} ${U} ${Z}`,lang:X,dir:t,ref:f,"aria-label":s,"data-analytics-element-engagement-start":"globalnav:onFlyoutOpen","data-analytics-element-engagement-end":"globalnav:onFlyoutClose","data-store-api":void 0!==n?zt(n.storeApiUrl,d?m:void 0):null,...ae,children:Ee("div",{className:"globalnav-content",children:[Ee("div",{class:"globalnav-item globalnav-menuback",children:Ee("button",{class:"globalnav-menuback-button","aria-label":i.back.ariaLabel,children:i.back.images.map((({name:e,assetInline:t})=>"compact"===e?Ee("span",{class:"globalnav-chevron-icon",dangerouslySetInnerHTML:{__html:t}}):null))})}),Ee("ul",{id:"globalnav-list",class:"globalnav-list",children:[Ee(Pt,{value:{hasAbsoluteUrls:d,wwwDomain:m},children:Ee(Ws,{links:a,locale:e,submenuChevron:o,submenuApiUrl:l,subMenuData:_,submenusEnabled:D})}),ne&&Ee(Ks,{href:void 0!==O.current?O.current:zt(r.open.url,d?m:void 0),ariaLabel:void 0!==r.searchAriaLabel?r.searchAriaLabel:r.open.ariaLabel,analyticsAttributes:r.open.analyticsAttributes,resultsAriaLabel:r.results.ariaLabel,images:r.open.images,action:void 0!==w.current?w.current:zt(r.open.url,d?m:void 0),input:r.input,placeholder:void 0!==r.searchFieldPlaceholderRegular?r.searchFieldPlaceholderRegular:r.input.placeholderTextRegular,submit:r.submit,reset:r.reset,src:N.current,name:L.current,type:A.current,page:C.current,locale:k.current,suggestionsApiUrl:r.suggestionsApiUrl,defaultLinksApiUrl:r.defaultLinksApiUrl}),ie&&Ee(Ms,{ref:y,bag:n,bagFlyout:R,badgeCount:H,href:zt(n.open.url,d?m:void 0)})]}),Ee(Us,{})]})}),Ee("div",{id:"globalnav-curtain",class:"globalnav-curtain"}),Ee("div",{id:"globalnav-placeholder",class:"globalnav-placeholder"})]})}const nn="globalheader",an=document.getElementById(nn);if(null===an)throw new Error(`Could not find root node ID: ${nn}`);const on=document.getElementById("__ACGH_DATA__");if(null===on)throw new Error("Can't find the data globalheaderDataElement");const ln=JSON.parse(on.textContent);(e=>{var t;const s=null==(t=null==e?void 0:e.props)?void 0:t.globalNavData;"string"==typeof(null==s?void 0:s.hasAbsoluteUrls)&&(s.hasAbsoluteUrls="true"===s.hasAbsoluteUrls)})(ln);const{props:rn}=ln;T(Ee((function({globalNavData:e,subMenuData:t,config:s}){const[n,i]=Q(void 0),a=void 0!==e.locale?e.locale.replace("_","-"):"en-US";return Ee(p,{children:Ee(ge,{value:n,children:[Ee(ke,{isoLocale:a,textDirection:void 0!==e.textDirection?e.textDirection:"ltr",segmentData:e.segmentbar,wwwDomain:e.wwwDomain,storeUrlPath:e.storeUrlPath}),Ee(sn,{...e,subMenuData:t,setAcStoreInstance:i})]})})}),{...rn}),an);var un,cn,hn,mn,dn,pn,gn,_n,bn,vn,fn,yn,Sn,En,wn,Nn={exports:{}},Ln=We(H),An=We(he);un=Nn.exports,cn=Object.defineProperty,hn=Object.defineProperties,mn=Object.getOwnPropertyDescriptors,dn=Object.getOwnPropertySymbols,pn=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable,_n=(e,t,s)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,bn=(e,t)=>{for(var s in t||(t={}))pn.call(t,s)&&_n(e,s,t[s]);if(dn)for(var s of dn(t))gn.call(t,s)&&_n(e,s,t[s]);return e},vn=(e,t,s)=>(_n(e,"symbol"!=typeof t?t+"":t,s),s),fn=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},yn=(e,t,s)=>(fn(e,t,"read from private field"),s?s.call(e):t.get(e)),Sn=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},En=(e,t,s,n)=>(fn(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),wn=(e,t,s)=>new Promise(((n,i)=>{var a=e=>{try{l(s.next(e))}catch(e){i(e)}},o=e=>{try{l(s.throw(e))}catch(e){i(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,o);l((s=s.apply(e,t)).next())})),function(e,t,s){var n,i,a,o,l,r,u,c,h,m,d,p,g,_,b,v,f,y,S,E,w,N,L,A,C,k,M,F,O,$,x,T,I,R;const P=({message:e,data:t={},level:s=P.LEVELS.LOG})=>{};P.LEVELS={LOG:"log",INFO:"info",ERROR:"error"};const D="bag",B="savedIphonePreOrder",H="checkout",W="preOrderBag",U="covers",q=class{constructor({bagContent:e}){Sn(this,n,void 0),Sn(this,i,{});const{message:t}=e,s=Boolean(t&&t.type===U);if(En(this,n,e),s)yn(this,i).covers=q.createCoversSection({covers:e});else{const{bag:t,preOrderBag:s,buttons:n}=e;t&&(yn(this,i).bag=q.createBagSection({bag:t,buttons:n})),s&&(yn(this,i).preOrderBag=q.createPreOrderBagSection({preOrderBag:s,buttons:n})),yn(this,i).profile=q.createProfileSection({profile:e})}return P({message:"BagFlyoutModel",level:"info",data:{model:yn(this,i),server:yn(this,n)}}),yn(this,i)}};let V=q;n=new WeakMap,i=new WeakMap,vn(V,"createCoversSection",(({covers:e})=>{const{message:t}=e;return{title:t.text,showCovers:!0}})),vn(V,"createBagSection",(({bag:e,buttons:t})=>{const{title:s,emptyBagMsg:n,extraItemsMsg:i,subHeader:a,items:o=[]}=e;return{title:n||s,emptyBagMsg:n,subHeader:a,lineMessage:i,items:o,hasItems:Boolean(o&&o.length),button:t&&t.find((({section:e,type:t})=>e===D||t===H))}})),vn(V,"createPreOrderBagSection",(({preOrderBag:e,buttons:t})=>{const{title:s,subHeader:n,mode:i,items:a}=e;return{title:s,subHeader:n,mode:i,items:a,hasItems:Boolean(a&&a.length),button:t&&t.find((({section:e})=>e===W))}})),vn(V,"createProfileSection",(({profile:e})=>{const{linksHeader:t,links:s}=e;return{title:t,links:s.filter((({type:e})=>e!==D&&e!==B)),hasLinks:Boolean(s&&s.length)}}));var j=0;function Z(e,s,n,i,a){var o,l,r={};for(l in s)"ref"==l?o=s[l]:r[l]=s[l];var u={type:e,props:r,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--j,__source:a,__self:i};if("function"==typeof e&&(o=e.defaultProps))for(l in o)void 0===r[l]&&(r[l]=o[l]);return t.options.vnode&&t.options.vnode(u),u}const z={FLYOUT_WILL_OPEN:"globalnav:onFlyoutWillOpen",FLYOUT_OPEN:"globalnav:onFlyoutOpen",FLYOUT_WILL_CLOSE:"globalnav:onFlyoutWillClose",FLYOUT_CLOSE:"globalnav:onFlyoutClose"},G={isOpen:!1,isLoading:!1,showCovers:!1,flyoutItemClass:"",flyoutData:null},K=t.createContext(G),Q=({acStoreInstance:e,globalNavEl:t,onFlyoutContentUpdate:n,children:i})=>{const[a,o]=s.useState(G.isOpen),[l,r]=s.useState(G.isLoading),[u,c]=s.useState(G.flyoutData),h=s.useRef(!1),m={isOpen:a,isClosed:!a,isLoading:l,showCovers:u&&u.covers&&u.covers.showCovers,flyoutItemClass:"globalnav-flyout-item",flyoutData:u},d=s.useCallback((()=>wn(this,null,(function*(){h.current=!0,r(!0);try{const t=yield e.updateBagFlyout();if(t){const{bagContent:e}=t;c(new V({bagContent:e}))}}catch(e){P({message:e,level:P.LEVELS.ERROR,data:e})}h.current=!1,r(!1)}))),[r,e,c]),p=s.useCallback((t=>wn(this,[t],(function*({event:t,callback:s}){const{detail:{target:n}}=t;if(n===e.getDomElement()){if(s)try{yield s()}catch(e){P({message:e,level:P.LEVELS.ERROR,data:e})}o((e=>!e))}}))),[e,o]),g=s.useCallback((e=>{h.current||p({event:e,callback:d})}),[p,d]),_=s.useCallback((e=>{p({event:e})}),[p]);return s.useEffect((()=>{if(t)return t.addEventListener(z.FLYOUT_WILL_OPEN,g),t.addEventListener(z.FLYOUT_OPEN,g),t.addEventListener(z.FLYOUT_WILL_CLOSE,_),t.addEventListener(z.FLYOUT_CLOSE,_),()=>{t.removeEventListener(z.FLYOUT_WILL_OPEN,g),t.removeEventListener(z.FLYOUT_OPEN,g),t.removeEventListener(z.FLYOUT_WILL_CLOSE,_),t.removeEventListener(z.FLYOUT_CLOSE,_)}}),[t,g,_]),s.useEffect(n),Z(K.Provider,{value:m,children:i})};Q.defaultProps={onFlyoutContentUpdate:()=>{}};const Y=()=>s.useContext(K),J='<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="person.crop.circle_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"/></g></svg>',X='<svg class="ac-gn-bagview-bagitem-svgicon" height="75" viewBox="0 0 75 75" width="75" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h75v75h-75z" fill="none"/><path class="ac-gn-bagview-bagitem-svgpath" d="m31.2633 60c.2877 1.1112.8029 2.1304 1.5016 3h-9.7649c-3.3137 0-6-2.6863-6-6v-39c0-3.3137 2.6863-6 6-6h19c3.3137 0 6 2.6863 6 6v2h-3v-2c0-1.6542-1.3458-3-3-3h-19c-1.6542 0-3 1.3458-3 3v39c0 1.6542 1.3458 3 3 3zm-.7634-42.5c-.8286 0-1.5.6719-1.5 1.5s.6714 1.5 1.5 1.5h5c.8286 0 1.5-.6719 1.5-1.5s-.6714-1.5-1.5-1.5zm27.5001 10.5v30c0 2.7615-2.2385 5-5 5h-14c-2.0493 0-3.8057-1.2356-4.5779-3-.2683-.6133-.4221-1.2878-.4221-2v-30c0-2.7615 2.2385-5 5-5h14c2.7615 0 5 2.2385 5 5zm-3 0c0-1.1028-.8972-2-2-2h-14c-1.1028 0-2 .8972-2 2v30c0 1.1028.8972 2 2 2h14c1.1028 0 2-.8972 2-2zm-7 .5h-4.0001c-.8286 0-1.5.6719-1.5 1.5s.6714 1.5 1.5 1.5h4.0001c.8286-.0001 1.4999-.6719 1.4999-1.5s-.6713-1.4999-1.4999-1.5z" fill="#1D1D1F"/></svg>',ee={account:'<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="gear_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"/></g></svg>',bag:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 17 25" class="ac-gn-bagview-nav-svgicon">\n  <g>\n    <rect  width="21" height="21" fill="none"/>\n    <path d="M14.934,5.017H13.828A3.413,3.413,0,0,0,10.5,2,3.413,3.413,0,0,0,7.172,5.017H6.066A2.058,2.058,0,0,0,4.011,7.072v7.865a2.058,2.058,0,0,0,2.056,2.055h8.867a2.058,2.058,0,0,0,2.056-2.055V7.072A2.058,2.058,0,0,0,14.934,5.017ZM10.5,3a2.413,2.413,0,0,1,2.328,2.017H8.172A2.413,2.413,0,0,1,10.5,3Zm5.511,11.938a1.079,1.079,0,0,1-1.077,1.078H6.066a1.079,1.079,0,0,1-1.077-1.078V7.072A1.079,1.079,0,0,1,6.066,5.995h8.867a1.079,1.079,0,0,1,1.077,1.078Z" fill="6E6E73"/>\n  </g>\n</svg>\n',favorites:'<?xml version="1.0" encoding="UTF-8"?><svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="heart-regular"><path id="art_" d="M8,19.125c-.2673,0-.5174-.1035-.7053-.2922L1.4688,12.9838c-.8266-.8295-1.2699-1.9824-1.2141-3.162,.0558-1.1765,.6055-2.281,1.5093-3.0312,1.6382-1.3631,4.1641-1.185,5.7497,.407l.4863,.4874,.4863-.488c1.5834-1.5904,4.1104-1.7695,5.7497-.4064,.9039,.7502,1.4535,1.8548,1.5093,3.0312,.0558,1.1797-.3875,2.3325-1.2141,3.1626l-5.8259,5.8485c-.1879,.1887-.438,.2922-.7053,.2922ZM4.3544,7.0801c-.657,0-1.3011,.2102-1.8174,.6392-.6572,.5459-1.0391,1.3196-1.0743,2.1771-.0371,.9032,.393,1.7639,1.0313,2.4046l5.4234,5.4445c.0456,.0458,.1198,.0458,.1653,0l5.4227-5.4433c.6385-.641,1.0689-1.5019,1.032-2.4054-.0351-.8577-.4169-1.6315-1.0743-2.1775h0c-1.1637-.9663-2.9725-.8204-4.1201,.3298l-1.1871,1.1921c-.0859,.0863-.2257,.0863-.3117,0l-1.1871-1.1916c-.6377-.6402-1.4804-.9695-2.3027-.9695Z" fill="6E6E73"/></g></svg>',orders:'<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="shippingbox_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"/></g></svg>',signIn:J,signOut:J,yoursaves:'<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="bookmark_compact"><rect id="box_" width="16" height="25" fill="none"/>\n<path id="art_" d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"/></g></svg>'},te=({url:e,text:t,type:s,analyticsValue:n,flyoutItemClass:i})=>{const a=ee[s];return Z("li",{className:`${i} ac-gn-bagview-nav-item ac-gn-bagview-nav-item-${s}`,children:Z("a",{href:e,"data-analytics-title":n,className:`ac-gn-bagview-nav-link ac-gn-bagview-nav-link-${s.toLowerCase()}`,"data-ac-autom":`gn-bagview-link-${s}`,children:[Z("div",{className:"ac-gn-bagview-nav-image-container",dangerouslySetInnerHTML:{__html:a}}),Z("span",{className:"ac-gn-bagview-nav-text",children:t})]})})},se=(e={},t={})=>{const s=t?Object.assign(e,t):e;return Object.keys(s).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(s[e])}`)).join("&").replace(/^/,"?")},ne=(e="")=>{if(!e)return null;const t={};return e.split("&").forEach((e=>{const[s,n=""]=e.split("="),i=decodeURIComponent(n.replace(/\+/g," "));t[s]=i})),t},ie=e=>{let t=null;if(!e)return t;const s=(document.cookie||"").split(";");for(let n=0;n<s.length;n+=1){const i=(s[n]||"").trim();if(i.substring(0,e.length+1)===`${e}=`){t=decodeURIComponent(i.substring(e.length+1));break}}if(t&&t.match(/^\s*\{/))try{t=JSON.parse(t)}catch(e){P({message:e,level:P.LEVELS.ERROR,data:e})}return t},ae=()=>{const e=ie("pxro");return(e?parseInt(e,10):2)>=2},oe=(e="",t,s)=>{if(!e)return{};const[n,i]=e.split("?"),a=ne(i),o=ne(t),l=ne(s),r=s?n.concat(i.replace(/^/,"?")):n.concat(se(a,o)),u=t?n.concat(i.replace(/^/,"?")):n.concat(se(a,l));return{imgSrc:ae()?u:r,srcSet:r||u?`${r}, ${u} 2x`:null}},le=({src:e,width:t,height:s,alt:n,scaleParams1:i,scaleParams2:a})=>{const{imgSrc:o="",srcSet:l=""}=oe(e,i,a);return Z("img",{src:e||o,srcSet:l,width:t,height:s,alt:n,className:"ac-gn-bagview-bagitem-picture"})},re=({name:e,qty:s,orderInfo:n,qtyLabelA11y:i})=>Z(t.Fragment,{children:[e,s>1&&Z(t.Fragment,{children:Z("span",{"aria-label":`${i} ${s}`,className:"ac-gn-bagview-bagitem-qty",children:s})}),n&&Z("span",{className:"ac-gn-bagview-bagitem-info",children:n})]}),ue=({url:e,text:t,type:s,onClick:n,buttonLabelA11y:i,flyoutItemClass:a,dataAnalyticsTitle:o})=>Z("a",{onClick:n,href:e,className:`${a} ac-gn-bagview-button ac-gn-bagview-button-pill`,"data-ac-autom":`gn-bagview-button-${s}`,"data-autom":"globalnav-reviewBag","data-analytics-title":o,"aria-label":i,children:t}),ce=()=>Z("div",{className:"ac-gn-loading-indicator",children:Z("div",{"data-progress-indicator":"",className:"progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain","aria-label":"aria-label-from-constructor",children:Z("svg",{className:"progress-indicator-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56 56","aria-hidden":"true",children:Z("g",{className:"progress-indicator-spokes",children:[Z("path",{className:"progress-indicator-spoke",d:"M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z"}),Z("path",{className:"progress-indicator-spoke",d:"M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z"}),Z("path",{className:"progress-indicator-spoke",d:"M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z"}),Z("path",{className:"progress-indicator-spoke",d:"M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z"}),Z("path",{className:"progress-indicator-spoke",d:"M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z"}),Z("path",{className:"progress-indicator-spoke",d:"M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z"}),Z("path",{className:"progress-indicator-spoke",d:"M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z"}),Z("path",{className:"progress-indicator-spoke",d:"M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z"})]})})})}),he=()=>{const{flyoutData:{covers:{title:e}}}=Y();return Z("h2",{className:"ac-gn-bagview-header",children:e})};var me,de={exports:{}};
                            /*!
                            	Copyright (c) 2018 Jed Watson.
                            	Licensed under the MIT License (MIT), see
                            	http://jedwatson.github.io/classnames
                            */
                            me = de,
                            function() {
                                var e = {}.hasOwnProperty;

                                function t() {
                                    for (var s = [], n = 0; n < arguments.length; n++) {
                                        var i = arguments[n];
                                        if (i) {
                                            var a = typeof i;
                                            if ("string" === a || "number" === a) s.push(i);
                                            else if (Array.isArray(i)) {
                                                if (i.length) {
                                                    var o = t.apply(null, i);
                                                    o && s.push(o)
                                                }
                                            } else if ("object" === a) {
                                                if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                                    s.push(i.toString());
                                                    continue
                                                }
                                                for (var l in i) e.call(i, l) && i[l] && s.push(l)
                                            }
                                        }
                                    }
                                    return s.join(" ")
                                }
                                me.exports ? (t.default = t, me.exports = t) : window.classNames = t
                            }();
                        const pe = de.exports,
                            ge = ({
                                header: e,
                                subHeader: t,
                                mode: s,
                                lineMessage: n,
                                product: i,
                                flyoutButton: a,
                                flyoutItemClass: o,
                                isEmpty: l
                            }) => {
                                const r = "preorder" === s,
                                    u = r ? "pre-order" : s,
                                    c = r ? "pre-order" : "view";
                                return Z("div", {
                                    className: pe("ac-bag-flyout-content ac-get-ready-bag", {
                                        "ac-bag-flyout-content-isempty": l
                                    }),
                                    "data-analytics-region": `get ready ${u}`,
                                    children: [Z("div", {
                                        className: "ac-bag-flyout-content-left",
                                        children: [Z("h2", {
                                            className: `${o} ac-gn-bagview-header`,
                                            children: e
                                        }), t && Z("div", {
                                            className: `${o} ac-gn-bagview-subheader`,
                                            dangerouslySetInnerHTML: {
                                                __html: t
                                            }
                                        }), i && Z("div", {
                                            className: "ac-gn-bagview-bagitem-wrapper",
                                            children: i
                                        }), n && Z("div", {
                                            className: `${o} ac-gn-bagview-message`,
                                            children: Z("span", {
                                                className: "ac-gn-bagview-message-text",
                                                children: n
                                            })
                                        })]
                                    }), a && Z("div", {
                                        className: "ac-bag-flyout-content-right",
                                        children: Z(ue, {
                                            url: a.url,
                                            text: a.text,
                                            dataAnalyticsTitle: c,
                                            type: a.type,
                                            buttonLabelA11y: a.buttonLabelA11y,
                                            flyoutItemClass: o
                                        })
                                    })]
                                })
                            },
                            _e = ({
                                name: e,
                                productUrl: t,
                                imageProps: s,
                                qty: n,
                                orderInfo: i,
                                qtyLabelA11y: a,
                                index: o,
                                flyoutItemClass: l
                            }) => Z("li", {
                                className: `${l} ac-gn-bagview-bagitem`,
                                children: Z("a", {
                                    className: "ac-gn-bagview-bagitem-link",
                                    href: t,
                                    "data-analytics-title": e,
                                    children: [Z("span", {
                                        className: "ac-gn-bagview-bagitem-column1",
                                        children: Boolean(Object.keys(s).length) && s.src ? Z(le, bn({}, s)) : Z("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: X
                                            }
                                        })
                                    }), Z("span", {
                                        className: "ac-gn-bagview-bagitem-column2",
                                        "data-ac-autom": `gn-bagview-itemname-${o}`,
                                        children: Z(re, {
                                            name: e,
                                            qty: n,
                                            orderInfo: i,
                                            qtyLabelA11y: a
                                        })
                                    })]
                                })
                            }, e),
                            be = () => {
                                const {
                                    flyoutData: {
                                        preOrderBag: e
                                    },
                                    flyoutItemClass: t
                                } = Y(), {
                                    title: s,
                                    subHeader: n,
                                    mode: i,
                                    hasItems: a,
                                    items: o,
                                    button: l
                                } = e, r = a && o.map(((e, s) => {
                                    const {
                                        name: n,
                                        productUrl: i,
                                        productImg: a = {},
                                        qty: o,
                                        orderInfo: l,
                                        qtyLabelA11y: r
                                    } = e, u = a && {
                                        src: a.src,
                                        width: a.width,
                                        height: a.height,
                                        alt: a.alt,
                                        scaleParams1: a.scaleParams1,
                                        scaleParams2: a.scaleParams2
                                    };
                                    return Z(_e, {
                                        name: n,
                                        productUrl: i,
                                        imageProps: u,
                                        qty: o,
                                        orderInfo: l,
                                        qtyLabelA11y: r,
                                        index: s,
                                        flyoutItemClass: t
                                    }, n)
                                }));
                                return Z(ge, {
                                    header: s,
                                    subHeader: n,
                                    mode: i,
                                    lineMessage: void 0,
                                    product: r,
                                    flyoutButton: l,
                                    flyoutItemClass: t,
                                    isEmpty: Boolean(!a)
                                })
                            },
                            ve = ({
                                header: e,
                                subHeader: t,
                                lineMessage: s,
                                product: n,
                                flyoutButton: i,
                                flyoutItemClass: a,
                                isEmpty: o
                            }) => Z("div", {
                                className: "ac-bag-flyout-content",
                                "data-analytics-region": "bag items",
                                children: [Z("div", {
                                    className: pe("ac-bag-flyout-content-left", {
                                        "ac-bag-flyout-content-isempty": o
                                    }),
                                    children: [Z("h2", {
                                        className: `${a} ac-gn-bagview-header`,
                                        children: e
                                    }), t && Z("div", {
                                        className: `${a} ac-gn-bagview-subheader`,
                                        dangerouslySetInnerHTML: {
                                            __html: t
                                        }
                                    }), n && Z("div", {
                                        className: "ac-gn-bagview-bagitem-wrapper",
                                        children: n
                                    }), s && Z("div", {
                                        className: `${a} ac-gn-bagview-message`,
                                        children: Z("span", {
                                            className: "ac-gn-bagview-message-text",
                                            children: s
                                        })
                                    })]
                                }), i && Z("div", {
                                    className: "ac-bag-flyout-content-right",
                                    children: Z(ue, {
                                        url: i.url,
                                        text: i.text,
                                        dataAnalyticsTitle: "Review Bag",
                                        type: i.type,
                                        buttonLabelA11y: i.buttonLabelA11y,
                                        flyoutItemClass: a
                                    })
                                })]
                            }),
                            fe = ({
                                name: e,
                                productUrl: t,
                                imageProps: s,
                                qty: n,
                                qtyLabelA11y: i,
                                index: a,
                                flyoutItemClass: o
                            }) => Z("li", {
                                className: `${o} ac-gn-bagview-bagitem`,
                                children: Z("a", {
                                    className: "ac-gn-bagview-bagitem-link",
                                    href: t,
                                    "data-analytics-title": e,
                                    children: [Z("span", {
                                        className: "ac-gn-bagview-bagitem-column1",
                                        children: Z(le, bn({}, s))
                                    }), Z("span", {
                                        className: "ac-gn-bagview-bagitem-column2",
                                        "data-ac-autom": `gn-bagview-itemname-${a}`,
                                        children: Z(re, {
                                            name: e,
                                            qty: n,
                                            qtyLabelA11y: i
                                        })
                                    })]
                                })
                            }, e),
                            ye = () => {
                                const {
                                    flyoutData: {
                                        bag: e
                                    },
                                    flyoutItemClass: t
                                } = Y(), {
                                    title: s,
                                    lineMessage: n,
                                    emptyBagMsg: i,
                                    subHeader: a,
                                    hasItems: o,
                                    items: l,
                                    button: r
                                } = e, u = o && l.map(((e, s) => {
                                    const {
                                        name: n,
                                        productUrl: i,
                                        productImg: a = {},
                                        qty: o,
                                        qtyLabelA11y: l
                                    } = e, r = a && {
                                        src: a.src,
                                        width: a.width,
                                        height: a.height,
                                        alt: a.alt,
                                        scaleParams1: a.scaleParams1,
                                        scaleParams2: a.scaleParams2
                                    };
                                    return Z(fe, {
                                        name: n,
                                        productUrl: i,
                                        imageProps: r,
                                        qty: o,
                                        qtyLabelA11y: l,
                                        index: s,
                                        flyoutItemClass: t
                                    }, n)
                                }));
                                return Z(ve, {
                                    header: s,
                                    subHeader: a,
                                    lineMessage: n,
                                    product: u,
                                    flyoutButton: r,
                                    flyoutItemClass: t,
                                    isEmpty: Boolean(i)
                                })
                            },
                            Se = ({
                                linksHeader: e,
                                menuLinks: t,
                                flyoutItemClass: s
                            }) => Z("div", {
                                className: "ac-gn-bagview-nav-item-wrapper",
                                "data-analytics-region": "my profile",
                                children: [Z("h3", {
                                    className: `${s} ac-gn-bagview-nav-item-header`,
                                    children: e
                                }), Z("ul", {
                                    children: t
                                })]
                            }),
                            Ee = () => {
                                const {
                                    flyoutItemClass: e,
                                    flyoutData: {
                                        profile: {
                                            title: t,
                                            hasLinks: s,
                                            links: n
                                        }
                                    }
                                } = Y(), i = s && n.map((t => Z(te, {
                                    text: t.text,
                                    url: t.url,
                                    type: t.type,
                                    analyticsValue: "yoursaves" === t.type ? "saved items" : t.type,
                                    flyoutItemClass: e
                                }, t.url)));
                                return Z(Se, {
                                    linksHeader: t,
                                    menuLinks: i,
                                    flyoutItemClass: e
                                })
                            },
                            we = () => {
                                const {
                                    flyoutData: {
                                        preOrderBag: e,
                                        bag: s,
                                        profile: n
                                    }
                                } = Y();
                                return Z(t.Fragment, {
                                    children: [e && Z(be, {}), s && Z(ye, {}), n && Z(Ee, {})]
                                })
                            };

                        function Ne() {
                            const {
                                flyoutData: e,
                                showCovers: t
                            } = Y();
                            return e ? Z("div", {
                                className: "ac-bag-flyout-container ac-gn-bagview-content",
                                "data-autom": "ac-gn-bagview",
                                children: Z(t ? he : we, {})
                            }) : Z(ce, {})
                        }

                        function Le({
                            acStoreInstance: e,
                            globalNavEl: t,
                            onFlyoutContentUpdate: s
                        }) {
                            return Z(Q, {
                                acStoreInstance: e,
                                globalNavEl: t,
                                onFlyoutContentUpdate: s,
                                children: Z(Ne, {})
                            })
                        }

                        function Ae() {
                            this._events = {}
                        }
                        var Ce = Ae.prototype;
                        Ce.on = function(e, t) {
                            this._events[e] = this._events[e] || [], this._events[e].unshift(t)
                        }, Ce.once = function(e, t) {
                            var s = this;

                            function n(i) {
                                s.off(e, n), void 0 !== i ? t(i) : t()
                            }
                            this.on(e, n)
                        }, Ce.off = function(e, t) {
                            if (this.has(e)) {
                                if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
                                var s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
                            }
                        }, Ce.trigger = function(e, t) {
                            if (this.has(e))
                                for (var s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
                        }, Ce.has = function(e) {
                            return !(!(e in this._events) || 0 === this._events[e].length)
                        }, Ce.destroy = function() {
                            for (var e in this._events) this._events[e] = null;
                            this._events = null
                        };
                        var ke = {
                            EventEmitterMicro: Ae
                        };
                        const Me = "string",
                            {
                                localStorage: Fe,
                                JSON: Oe
                            } = window,
                            $e = {
                                getItem: e => {
                                    let t = null;
                                    try {
                                        t = Fe.getItem(e);
                                        try {
                                            t = Oe.parse(t)
                                        } catch (e) {
                                            P({
                                                message: e,
                                                level: P.LEVELS.ERROR,
                                                data: e
                                            })
                                        }
                                    } catch (e) {
                                        P({
                                            message: e,
                                            level: P.LEVELS.ERROR,
                                            data: e
                                        })
                                    }
                                    return t
                                },
                                setItem: (e, t) => {
                                    try {
                                        return typeof t !== Me && (t = Oe.stringify(t)), Fe.setItem(e, t), !0
                                    } catch (e) {
                                        return P({
                                            message: e,
                                            level: P.LEVELS.ERROR,
                                            data: e
                                        }), !1
                                    }
                                },
                                removeItem: e => {
                                    try {
                                        return Fe.removeItem(e), !0
                                    } catch (e) {
                                        return P({
                                            message: e,
                                            level: P.LEVELS.ERROR,
                                            data: e
                                        }), !1
                                    }
                                }
                            },
                            xe = "as_",
                            Te = ["", "_stag", "_ce01aws", "_ce02aws", "_ce03aws", "_ce04aws", "_ce05aws", "_ce06aws", "_ce07aws", "_xe01aws", "_xe02aws", "_xe03aws", "_xe04aws", "_xe05aws", "_xe06aws", "_xe07aws", "_ce01", "_ce02", "_ce03", "_ce04", "_ce05", "_ce06", "_ce07", "_xe01", "_xe02", "_xe03", "_xe04", "_xe05", "_xe06", "_xe07", "_dv01aws", "_dev01", "_dv01"],
                            Ie = {
                                get: e => {
                                    const {
                                        document: {
                                            cookie: t
                                        }
                                    } = window;
                                    let s = "";
                                    try {
                                        const n = encodeURIComponent(e).replace(/[-.+*]/g, "\\$&"),
                                            i = new RegExp(`(?:(?:^|.*;)\\s*${n}\\s*\\=\\s*([^;]*).*$)|^.*$`);
                                        s = decodeURIComponent(t.replace(i, "$1"))
                                    } catch (e) {
                                        P({
                                            message: e,
                                            level: P.LEVELS.ERROR,
                                            data: e
                                        })
                                    }
                                    return s
                                },
                                getPrefixedAs: e => {
                                    const {
                                        cookieMap: t = {}
                                    } = window, s = t[`as_${e}`];
                                    let n;
                                    if (s) n = Ie.get(s);
                                    else
                                        for (const t of Te)
                                            if (n = Ie.get(`${xe}${e}${t}`), n) break;
                                    return n
                                },
                                has: e => {
                                    const {
                                        document: {
                                            cookie: t
                                        }
                                    } = window;
                                    let s = !1;
                                    if (e) try {
                                        const n = encodeURIComponent(e).replace(/[-.+*]/g, "\\$&");
                                        s = new RegExp(`(?:^|;\\s*)${n}\\s*\\=`).test(t)
                                    } catch (e) {
                                        P({
                                            message: e,
                                            level: P.LEVELS.ERROR,
                                            data: e
                                        })
                                    }
                                    return s
                                },
                                remove: (e, t, s) => {
                                    const {
                                        document: n
                                    } = window, i = s ? `; domain=${s}` : "", a = s ? `; path=${t}` : "";
                                    let o = !1;
                                    return Ie.has(e) && (n.cookie = `${encodeURIComponent(e)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${i}${a}`, o = !0), o
                                },
                                removePrefixedAs: (e, t, s) => {
                                    const {
                                        envCookieSuffix: n
                                    } = window;
                                    let i;
                                    if (n) i = Ie.remove(`${xe}${e}${n}`, t, s);
                                    else {
                                        for (const n of Te) Ie.remove(`${xe}${e}${n}`, t, s);
                                        i = !0
                                    }
                                    return i
                                }
                            },
                            Re = class extends Error {
                                constructor(e, t) {
                                    super(e), this.type = t, this.name = Re.name
                                }
                            };
                        let Pe = Re;
                        vn(Pe, "name", "AcStoreError"), vn(Pe, "Types", {
                            BAD_JSON_RESPONSE: 0,
                            MISSING_API_ADD_TO_BAG: 1,
                            MISSING_API_FLYOUT: 2,
                            ITEM_NOT_ADDED: 3
                        });
                        const De = "globalnav",
                            Be = "ac-store-cache",
                            He = {
                                FAVORITE_ADDED: "favoriteAdded",
                                STATE_CHANGE: "Change"
                            },
                            We = () => {};
                        class Ue extends ke.EventEmitterMicro {
                            constructor(e, t, s, n) {
                                super(), Sn(this, a, void 0), Sn(this, o, void 0), Sn(this, l, void 0), Sn(this, r, void 0), Sn(this, u, null), Sn(this, c, null), Sn(this, h, null), Sn(this, m, 0), Sn(this, d, 200), Sn(this, p, {
                                    storeState: {
                                        bag: null,
                                        segmentNav: null,
                                        covers: null
                                    },
                                    itemCount: -1,
                                    storefront: {},
                                    bagContent: yn(this, u)
                                }), Sn(this, g, null), Sn(this, _, !1), Sn(this, b, /([^/]*)\/\/([^/]*)\/.*/), Sn(this, v, void 0), Sn(this, f, !1), Sn(this, y, ((e, t) => {
                                    const s = yn(this, p)[e];
                                    let n = s !== t;
                                    if (n && "object" == typeof s && "object" == typeof t) {
                                        n = !1;
                                        for (const e in t)
                                            if (n = t[e] !== s[e], n) break;
                                        if (!n)
                                            for (const e in s)
                                                if (n = !(e in t), n) break
                                    }
                                    n && (yn(this, p)[e] = t, this.trigger(`${e}${He.STATE_CHANGE}`, t))
                                })), Sn(this, S, ((e, t, s, n) => {
                                    let i = e;
                                    const a = -1 === i.indexOf("?") ? "?" : "&";
                                    s = s || {};
                                    for (const e in t) {
                                        const s = new RegExp(`(%5B|\\[)${e}(%5D|\\])`, "g");
                                        i = i.replace(s, encodeURIComponent(t[e]))
                                    }
                                    i = 0 === i.indexOf("//") ? window.location.protocol + i : i, i += `${a}apikey=${encodeURIComponent(yn(this,l))}`, i += n ? `&l=${encodeURIComponent(`${window.location}`)}` : "";
                                    for (const e in s) i += e && s[e] ? `&${e}=${encodeURIComponent(s[e])}` : "";
                                    return new Promise(((e, t) => {
                                        const s = new XMLHttpRequest;
                                        s.onreadystatechange = () => {
                                            if (4 === s.readyState) try {
                                                const t = JSON.parse(s.responseText);
                                                e(t)
                                            } catch (e) {
                                                const s = "Response is not JSON.",
                                                    n = new Pe(s, Pe.Types.BAD_JSON_RESPONSE);
                                                P({
                                                    message: s,
                                                    level: P.LEVELS.ERROR,
                                                    data: {
                                                        error: n,
                                                        exception: e
                                                    }
                                                }), t(n)
                                            }
                                        }, s.open("GET", i), s.withCredentials = !0, s.send()
                                    }))
                                })), Sn(this, E, (() => {
                                    const e = window.decodeURIComponent(window.escape(window.atob(Ie.getPrefixedAs("sfa")))).split("|"),
                                        [t, s, n] = e,
                                        i = s => {
                                            if ("2" === t) {
                                                if (9 === s) return n;
                                                if (s > 1) return e[s + 1]
                                            }
                                            return e[s]
                                        };
                                    return yn(this, h) || En(this, h, {
                                        version: i(0),
                                        storefront: i(1),
                                        name: i(2),
                                        locale: i(3),
                                        segmentCode: i(4),
                                        channelCode: i(5),
                                        showBanner: "1" === i(6) || "true" === i(6),
                                        persistBanner: "1" === i(7) || "true" === i(7),
                                        bagEnabled: "0" !== i(8) && "false" !== i(8),
                                        consumerStorefront: i(9)
                                    }), yn(this, h)
                                })), Sn(this, w, (() => Ie.get("as_atb").split("|").slice(2).join(""))), Sn(this, N, (() => new Promise((e => {
                                    const t = yn(this, E).call(this);
                                    yn(this, y).call(this, "storefront", t), e(t)
                                })))), Sn(this, L, (() => {
                                    const e = (new Date).getTime();
                                    let t = !1,
                                        s = null,
                                        n = !0,
                                        i = !0;
                                    return yn(this, g) || En(this, g, yn(this, N).call(this).then((a => {
                                        const u = Ie.getPrefixedAs("cn"),
                                            h = a.storefront || yn(this, o),
                                            m = `${document.location}`.replace(yn(this, b), "$2");
                                        if (En(this, c, yn(this, c) || $e.getItem(Be)), n = a.bagEnabled, i = a.showBanner, yn(this, c) && (t = yn(this, _) && 0 === yn(this, c).ttl || e < yn(this, c).ttl && u === yn(this, c).cn && yn(this, l) === yn(this, c).key && h === yn(this, c).sfLoc && (!yn(this, v) || yn(this, v) === m)), En(this, v, m), t) return Promise.resolve();
                                        const d = {
                                            storefront: h
                                        };
                                        return yn(this, S).call(this, yn(this, r), d, {}, !1).then((t => {
                                            s = isNaN(parseInt(t.items, 10)), En(this, c, {
                                                ttl: 1e3 * parseInt(t.ttl, 10) + e || 0,
                                                items: s ? 0 : parseInt(t.items, 10),
                                                cn: u,
                                                api: t.api,
                                                key: yn(this, l),
                                                sfLoc: h
                                            }), $e.setItem(Be, yn(this, c)), En(this, _, !!t.api && !t.disabled)
                                        }))
                                    })).then(We, We).then((() => new Promise(((e, a) => {
                                        const o = n && (t || yn(this, _));
                                        yn(this, y).call(this, "storeState", {
                                            bag: o,
                                            segmentNav: i,
                                            covers: s
                                        });
                                        const l = o && yn(this, c) && yn(this, c).items || 0;
                                        yn(this, y).call(this, "itemCount", l), En(this, g, null), o ? e() : this.isDisabled || a()
                                    }))))), yn(this, g)
                                })), Sn(this, A, (() => {
                                    const e = window.location.host;
                                    return e.slice(e.indexOf("."))
                                })), Sn(this, C, (e => new Promise((t => {
                                    setTimeout(t, e)
                                })))), Sn(this, k, ((e, t) => yn(this, N).call(this).then((s => {
                                    const n = yn(this, c) && yn(this, c).api && yn(this, c).api.addToBag;
                                    if (!n) throw new Pe("No add to bag API URL on page.", Pe.Types.MISSING_API_ADD_TO_BAG);
                                    const i = {
                                            storefront: s.storefront || yn(this, o),
                                            part: e
                                        },
                                        a = ((e, t) => hn(e, mn(t)))(bn({}, t), {
                                            atbtoken: yn(this, w).call(this)
                                        });
                                    return yn(this, S).call(this, n, i, a, !1)
                                })).then((s => {
                                    const {
                                        addedToBag: n,
                                        bagQuantity: i,
                                        errorCode: a,
                                        message: o
                                    } = s;
                                    return n ? (this.__setItemCount(i || 0), this.clearBagCache(), Promise.resolve(o)) : "CSRF_TOKEN_EXPIRED" === a && yn(this, m) > 0 ? (((e, t, s, n) => ({
                                        set _(n) {
                                            En(e, t, n, s)
                                        },
                                        get _() {
                                            return yn(e, t, n)
                                        }
                                    }))(this, m)._--, yn(this, C).call(this, yn(this, d)).then((() => yn(this, k).call(this, e, t)))) : Promise.reject(new Pe(o, Pe.Types.ITEM_NOT_ADDED))
                                })))), vn(this, "getDomElement", (() => yn(this, a))), vn(this, "getState", (() => ({
                                    storeState: yn(this, p).storeState,
                                    bagContent: "object" == typeof yn(this, u) ? yn(this, u) : null
                                }))), vn(this, "getStoreState", (() => yn(this, L).call(this).then((() => yn(this, p).storeState)))), vn(this, "getItemCount", (() => yn(this, L).call(this).then((() => yn(this, p).itemCount)))), vn(this, "__setItemCount", (e => {
                                    En(this, u, null), yn(this, y).call(this, "itemCount", e), yn(this, c) && (yn(this, c).items = e, $e.setItem(Be, yn(this, c)))
                                })), vn(this, "getStorefront", (() => new Promise((e => {
                                    const t = yn(this, E).call(this);
                                    yn(this, y).call(this, "storefront", t), e(t)
                                })))), vn(this, "exitStorefront", ((e = !1) => {
                                    const t = document.getElementById(De);
                                    if (t && "zh-CN" === t.getAttribute("lang")) {
                                        const e = yn(this, A).call(this);
                                        Ie.removePrefixedAs("sfa", "/", e), Ie.remove("as_sfa", "/", ".apple.com.cn")
                                    } else Ie.removePrefixedAs("sfa", "/", ".apple.com");
                                    $e.removeItem(Be), En(this, c, null), En(this, h, null), yn(this, E).call(this), e || yn(this, L).call(this)
                                })), vn(this, "addItem", ((e, t, s) => new Promise((n => {
                                    En(this, m, t || 1);
                                    const i = s || {};
                                    n(yn(this, k).call(this, e, i))
                                })))), vn(this, "addFavorite", (e => new Promise((e => {
                                    this.trigger(He.FAVORITE_ADDED), e()
                                })))), vn(this, "updateBagFlyout", (() => new Promise((e => {
                                    null === yn(this, u) ? (En(this, u, !0), (yn(this, c) && yn(this, c).api ? Promise.resolve() : yn(this, L).call(this)).then(yn(this, N)).then((e => {
                                        const t = yn(this, c) && yn(this, c).api && yn(this, c).api.flyout,
                                            s = {
                                                storefront: e.storefront || yn(this, o)
                                            };
                                        if (!t) throw new Pe("No flyout API URL on page.", Pe.Types.MISSING_API_FLYOUT);
                                        return yn(this, S).call(this, t, s, {}, !0)
                                    })).then((e => {
                                        En(this, u, e)
                                    }), (() => {
                                        En(this, u, null)
                                    })).finally((() => {
                                        e(this.getState())
                                    }))) : e(this.getState())
                                })))), vn(this, "clearCache", ((e = !1) => {
                                    if (!e || !yn(this, _)) return $e.removeItem(Be), En(this, c, null), En(this, h, null), yn(this, L).call(this)
                                })), vn(this, "clearBagCache", (() => {
                                    En(this, u, null)
                                })), Object.getPrototypeOf(this).AcStoreError = Pe, En(this, a, e), En(this, o, t), En(this, l, s), En(this, r, n), En(this, v, window.document.referrer.replace(yn(this, b), "$2"));
                                const i = yn(this, E).call(this).consumerStorefront;
                                i && t && i !== t && this.exitStorefront(!0)
                            }
                            get isDisabled() {
                                return yn(this, f)
                            }
                            set isDisabled(e) {
                                En(this, f, e)
                            }
                        }
                        a = new WeakMap, o = new WeakMap, l = new WeakMap, r = new WeakMap, u = new WeakMap, c = new WeakMap, h = new WeakMap, m = new WeakMap, d = new WeakMap, p = new WeakMap, g = new WeakMap, _ = new WeakMap, b = new WeakMap, v = new WeakMap, f = new WeakMap, y = new WeakMap, S = new WeakMap, E = new WeakMap, w = new WeakMap, N = new WeakMap, L = new WeakMap, A = new WeakMap, C = new WeakMap, k = new WeakMap, vn(Ue, "name", "AcStore"), vn(Ue, "AcStoreError", Pe), vn(Ue, "staticClearCache", (() => $e.removeItem(Be)));
                        class qe {
                            constructor() {
                                Sn(this, M, "aos-gn-links"), Sn(this, F, null), Sn(this, O, null), Sn(this, $, "AosLinkReplacer"), Sn(this, x, (({
                                    message: e = "",
                                    type: t = "log",
                                    data: s
                                }) => {})), Sn(this, T, (e => {
                                    for (const [t, s] of Object.entries(yn(this, F))) {
                                        const n = new RegExp(`${t}$`);
                                        if (e.match(n)) return yn(this, x).call(this, {
                                            type: "info",
                                            message: "replaced with AOS value",
                                            data: {
                                                marcomUrl: e,
                                                aosUrl: s
                                            }
                                        }), s
                                    }
                                    return e
                                })), Sn(this, I, (e => {
                                    const {
                                        url: t
                                    } = e;
                                    e.url = yn(this, T).call(this, t)
                                })), Sn(this, R, (({
                                    baseLinks: e,
                                    elevatedLinks: t
                                }) => {
                                    e && e.forEach(yn(this, I)), t && t.forEach(yn(this, I))
                                })), vn(this, "shouldReplaceSubMenuLinks", (() => {
                                    let e = !1;
                                    const t = document.getElementById(yn(this, M));
                                    if (t) try {
                                        En(this, F, JSON.parse(t.innerHTML)), yn(this, x).call(this, {
                                            message: "AOS Replacement map loaded.",
                                            type: "info",
                                            data: yn(this, F)
                                        }), e = !0
                                    } catch (t) {
                                        yn(this, x).call(this, {
                                            message: t.message,
                                            type: "warn",
                                            data: t
                                        }), e = !1
                                    }
                                    return e
                                })), vn(this, "replaceSubMenuLinks", (e => new Promise((t => {
                                    let s;
                                    try {
                                        if (!this.shouldReplaceSubMenuLinks()) throw new Error("AOS URL replacement map is not defined.");
                                        En(this, O, JSON.parse(JSON.stringify(e))), yn(this, O).forEach((({
                                            baseGroups: e,
                                            elevatedGroups: t
                                        }) => {
                                            Array.isArray(e) && e.forEach(yn(this, R)), Array.isArray(t) && t.forEach(yn(this, R))
                                        })), s = yn(this, O), yn(this, x).call(this, {
                                            message: "replacement completed",
                                            type: "info",
                                            data: s
                                        })
                                    } catch (t) {
                                        s = e, yn(this, x).call(this, {
                                            message: "replacement failed",
                                            type: "warn",
                                            data: {
                                                result: s,
                                                error: t
                                            }
                                        })
                                    } finally {
                                        t(s)
                                    }
                                }))))
                            }
                        }
                        M = new WeakMap, F = new WeakMap, O = new WeakMap, $ = new WeakMap, x = new WeakMap, T = new WeakMap, I = new WeakMap, R = new WeakMap;
                        const Ve = new qe;
                        e.AcBagFlyout = Le, e.AcStore = Ue, e.AcStoreError = Pe, e.AosLinkReplacer = Ve, Object.defineProperties(e, {
                            __esModule: {
                                value: !0
                            },
                            [Symbol.toStringTag]: {
                                value: "Module"
                            }
                        })
                    }(un, Ln, An);
                    var Cn, kn = function(e, t) {
                        return t.forEach((function(t) {
                            t && "string" != typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(s) {
                                if ("default" !== s && !(s in e)) {
                                    var n = Object.getOwnPropertyDescriptor(t, s);
                                    Object.defineProperty(e, s, n.get ? n : {
                                        enumerable: !0,
                                        get: function() {
                                            return t[s]
                                        }
                                    })
                                }
                            }))
                        })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }))
                    }({
                        __proto__: null,
                        default: (Cn = Nn.exports) && Cn.__esModule && Object.prototype.hasOwnProperty.call(Cn, "default") ? Cn.default : Cn
                    }, [Nn.exports])
                }));
        /*!
        preact@10.10.6
        https://preactjs.com
        Licensed under MIT

        The MIT License (MIT)

        Copyright (c) 2015-present Jason Miller

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE. */
        /*! 7.3.5 | ..:: AOS Capture ::.. | Wed Oct 23 2024 13:50:57 GMT-0700 (Pacific Daylight Time) */