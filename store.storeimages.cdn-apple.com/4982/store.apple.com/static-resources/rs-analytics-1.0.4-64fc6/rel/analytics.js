(() => {
        "use strict";
        var e = {
                d: (t, n) => {
                    for (var a in n) e.o(n, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: n[a]
                    })
                },
                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                r: e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
            },
            t = {};
        e.r(t), e.d(t, {
            formatPrice: () => ee,
            getPartNumber: () => ye,
            getRawNumberFromString: () => Z,
            guessPartNumber: () => ne,
            isBeacon: () => re,
            isNotEmpty: () => ie,
            isValidBeaconKey: () => fe,
            setValue: () => ce,
            toBeaconSafeVal: () => se
        });
        var n = {};
        e.r(n), e.d(n, {
            get: () => Xe,
            set: () => Je
        });
        var a = {};
        e.r(a), e.d(a, {
            CLICK_TIMER: () => da,
            DEFERRED_BEACON: () => sa,
            METADATA: () => na,
            PAGE_DATA_MODEL: () => aa,
            PAGE_DATA_MODEL_LEGACY: () => ra,
            PAGE_LOAD: () => ca,
            PATHS: () => ga,
            PERSISTED: () => oa,
            PURCHASE_JOURNEY: () => la,
            REFERRER: () => pa,
            RELAY: () => ua,
            SESSION_STORE: () => ia
        });
        var r = {};
        e.r(r), e.d(r, {
            KEYS: () => a,
            get: () => Ba,
            init: () => ja,
            remove: () => Ha,
            set: () => xa
        });
        var o = {};
        e.r(o), e.d(o, {
            init: () => qa,
            registerProduct: () => Ka,
            updateProduct: () => Fa
        });
        var i = {};
        e.r(i), e.d(i, {
            fn: () => ao,
            name: () => no
        });
        var s = {};
        e.r(s), e.d(s, {
            fn: () => io,
            name: () => oo
        });
        var c = {};
        e.r(c), e.d(c, {
            fn: () => lo,
            name: () => co
        });
        var l = {};
        e.r(l), e.d(l, {
            fn: () => go,
            name: () => po
        });
        var d = {};
        e.r(d), e.d(d, {
            fn: () => Eo,
            name: () => fo
        });
        var u = {};
        e.r(u), e.d(u, {
            error: () => d,
            events: () => l,
            hier1: () => i,
            products: () => c,
            prop12: () => s
        });
        var p = {};
        e.r(p), e.d(p, {
            config: () => Vo,
            implementation: () => Mo
        });
        var g = {};
        e.r(g), e.d(g, {
            implementation: () => xo
        });
        var m = {};
        e.r(m), e.d(m, {
            implementation: () => $o
        });
        var f = {};
        e.r(f), e.d(f, {
            implementation: () => Xo
        });
        var E = {};
        e.r(E), e.d(E, {
            config: () => Qo
        });
        var y = {};
        e.r(y), e.d(y, {
            config: () => Zo
        });
        var b = {};
        e.r(b), e.d(b, {
            implementation: () => ei
        });
        var _ = {};
        e.r(_), e.d(_, {
            config: () => ti
        });
        var v = {};
        e.r(v), e.d(v, {
            implementation: () => ni
        });
        var h = {};
        e.r(h), e.d(h, {
            config: () => ai
        });
        var A = {};
        e.r(A), e.d(A, {
            config: () => ri
        });
        var S = {};
        e.r(S), e.d(S, {
            implementation: () => oi
        });
        var T = {};
        e.r(T), e.d(T, {
            KEY_ACTIVATION_TYPE: () => gc,
            KEY_PRE_AUTH_DATA: () => pc,
            setActivationType: () => uc
        });
        var N = {};
        e.r(N), e.d(N, {
            getProductCategory: () => bc,
            getProductString: () => fc,
            getRawNumberFromString: () => hc,
            guessPartNumber: () => Ac,
            omnitureCollection: () => _c,
            updateHeroProduct: () => vc
        });
        var k = {};
        e.r(k), e.d(k, {
            BEACON_EVENT: () => _l,
            BEACON_EVENT_MERCH_IMPRESSION: () => vl,
            BEACON_EVENT_TIME_ENGAGED: () => bl,
            BEACON_NAME: () => ml,
            BEACON_VAR: () => fl,
            BEACON_VAR_POSITION_NUMBER: () => yl,
            BEACON_VAR_TIME_ENGAGED: () => El,
            DISENGAGE_THRESHOLD: () => ul,
            ENGAGE_THRESHOLD: () => pl,
            ENGAGE_TIME_THRESHOLD: () => gl,
            PRECISION: () => Al,
            RE_MZONE: () => Sl,
            SCROLL_DEBOUNCE_DELAY: () => hl,
            SELECTOR: () => dl
        });
        var O = {};
        e.r(O), e.d(O, {
            init: () => Yl,
            update: () => Jl
        });
        var w = {};
        e.r(w), e.d(w, {
            onConfigurationSelected: () => zd,
            onConfigurationsLoaded: () => Yd,
            onListSaveError: () => Wd,
            onListSaved: () => Kd,
            onProductSaved: () => qd
        });
        var R = {};
        e.r(R), e.d(R, {
            onItemSelected: () => Xd
        });
        var C = {};
        e.r(C), e.d(C, {
            onLinkClicked: () => Zd,
            onOverlayClosed: () => eu,
            onTabClick: () => Qd
        });
        var I = {};
        e.r(I), e.d(I, {
            onBagIconSelected: () => tu,
            onFlyoutEngaged: () => nu
        });
        var P = {};
        e.r(P), e.d(P, {
            DEVICE: () => au,
            FEATURE: () => ru,
            TYPE: () => ou,
            loanConfirmationDetails: () => cu,
            onLoanVerification: () => lu,
            onSelectionChanged: () => uu
        });
        var D = {};
        e.r(D), e.d(D, {
            onPageViewed: () => vu,
            onTabViewed: () => yu
        });
        var L = {};
        e.r(L), e.d(L, {
            applecare: () => Nu,
            engraving: () => Tu,
            formatProductSelections: () => mp,
            getPriceByPartNumber: () => hp,
            keys: () => hu,
            onHandoffInitiated: () => _p,
            onIUpExistingMember: () => bp,
            onSelectionChanged: () => gp,
            payment: () => Su
        });
        var V = {};
        e.r(V), e.d(V, {
            onAvailablityBannerClicked: () => Op,
            onDateSelected: () => Np,
            onFilterReset: () => $p,
            onFilterSelection: () => Bp,
            onFilterSelectionMow: () => Hp,
            onFilterShowMoreColors: () => Gp,
            onLocationSelectorApplyClicked: () => Wp,
            onLocationSelectorCancelClicked: () => Kp,
            onLocationSelectorExpanded: () => Fp,
            onOverlayClosed: () => Jp,
            onPickupAvailableClicked: () => qp,
            onProductSelected: () => Lp,
            onProductsShown: () => Vp,
            onRecommendationIdChanged: () => xp,
            onShowMore: () => Mp,
            onSortApplied: () => zp,
            onStoreSelected: () => Yp
        });
        var M = {};
        e.r(M), e.d(M, {
            track: () => jg
        });
        var x = {};
        e.r(x), e.d(x, {
            onDataChanged: () => Xg
        });
        const $ = (e = "") => e || !1 === e || 0 === e ? String(e) : "",
            U = e => $(e).replace(/[^ -~]+/g, ""),
            j = e => $(e).replace(/\s+/g, " "),
            B = (e, t) => $(e).slice(0, t).trim(),
            H = (...e) => t => e.reduce(((e, t) => t(e)), t),
            G = e => e.replace(/\b([\w+.-]|%2B)+(@|%40)+[\w.-]+\.\w{2,63}/g, "******"),
            F = [{
                expression: /\/order\/detail\/.*/i,
                value: "/order/detail"
            }, {
                expression: /\/order\/cancel\/.*/i,
                value: "/order/cancel"
            }, {
                expression: /\/order\/guest\/.*/i,
                value: "/order/guest/******"
            }, {
                expression: /\/order\/applynow\/ep_payments\/.*/i,
                value: "/order/applynow/ep_payments/******"
            }, {
                expression: /\/onMyWay\/.*/i,
                value: "/onMyWay/******"
            }, {
                expression: /\/startPickup\/.*/i,
                value: "/startPickup/******"
            }, {
                expression: /W[0-9-]+/,
                value: "WXXXXXXXX"
            }],
            K = H($, (e => {
                const t = F.find((({
                    expression: t
                }) => t.test(e)));
                return t ? e.replace(t.expression, t.value) : e
            }), G),
            W = (e, t) => H(U, K, j, (e => t => B(t, e))(t))(e).toLowerCase(),
            q = e => W(e, 40),
            z = ({
                text: e,
                href: t,
                region: n
            }) => {
                const a = W(e, 50),
                    r = q(n),
                    o = 128 - (a.length + r.length + 6);
                return `${a} | ${W(t,o)} | ${r}`
            },
            Y = e => {
                if (null == e) return null;
                const t = (document.cookie || "").split(";");
                for (let n = 0; n < t.length; n++) {
                    const a = (t[n] || "").trim();
                    if (a.slice(0, e.length + 1) === `${e}=`) return decodeURIComponent(a.slice(e.length + 1))
                }
                return null
            },
            J = H(((e = "") => {
                if (!e) return "";
                const {
                    cookieMap: t
                } = window;
                return t && "object" == typeof t && t[e] || e
            }), Y),
            X = (e, t, n = {}) => {
                const a = (e => {
                        if ("number" == typeof e) {
                            const t = new Date,
                                n = 24 * (e || 0) * 60 * 60 * 1e3;
                            return t.setTime(t.getTime() + n), t
                        }
                        return e
                    })(null == t ? -1 : n.expires),
                    r = a ? "; expires=" + a.toUTCString() : "",
                    o = n.path ? "; path=" + n.path : "",
                    i = n.domain ? "; domain=" + n.domain : "",
                    s = n.secure ? "; secure" : "";
                document.cookie = e + "=" + encodeURIComponent(t || "") + r + o + i + s
            },
            Q = e => {
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            Z = (H(J, Q), e => {
                if ("number" == typeof e) return e;
                if (!e) return null;
                if ("string" != typeof e) return null;
                const t = e.replace(/[^\d.,]/g, "").split(/[.,](\d{1,2})$/),
                    [n = "0", a = "00"] = t,
                    r = parseFloat(n.replace(/[^\d/]/g, "") + "." + a);
                return isNaN(r) ? null : r
            }),
            ee = (e, t = "0.00") => {
                const n = Z(e);
                return null === n ? t : n.toFixed(2)
            },
            te = [/^APPLE/, /^HOMEPOD/, /^IMAC/, /^IPAD/, /^IPHONE/, /^IPOD/, /^MAC/, /^PRO/, /^W\d\d_/, /^Z/, /\+/, /GIFT_CARDS/, /SURPRISE/, /^AOS/, /_/],
            ne = e => {
                if (!e || "string" != typeof e) return "";
                const t = e.toUpperCase();
                return te.some((e => e.test(t))) ? e : e.substring(0, 5)
            },
            ae = e => !(!e || "object" != typeof e || Array.isArray(e)),
            re = ae,
            oe = e => !(!ae(e) || !Object.keys(e).length),
            ie = e => re(e) && oe(e),
            se = e => e && "object" != typeof e ? String(e) : null,
            ce = (e, t, n) => {
                if (!re(e) || !t) return e;
                const a = se(n);
                return a ? e[t] = a : delete e[t], e
            },
            le = ({
                keyPrefix: e = "",
                valuePrefix: t = "",
                count: n = 0
            } = {}) => {
                const a = {};
                for (let r = 1; r <= n; r++) a[`${e}${r}`] = `${t}${r}`;
                return a
            },
            de = {
                CAMPAIGN: "campaign",
                CHANNEL: "channel",
                CHAR_SET: "charSet",
                CITY: "city",
                CURRENCY_CODE: "currencyCode",
                EVENTS: "events",
                HIER1: "hier1",
                LINK_INTERNAL_FILTERS: "linkInternalFilters",
                LINK_TRACK_EVENTS: "linkTrackEvents",
                LINK_TRACK_VARS: "linkTrackVars",
                LIST_1: "list1",
                LIST_2: "list2",
                LIST_3: "list3",
                PAGE_NAME: "pageName",
                PAGE_TYPE: "pageType",
                PAGE_URL: "pageURL",
                PRODUCTS: "products",
                PROVINCE: "province",
                PURCHASE_ID: "purchaseID",
                REFERRER: "referrer",
                SERVER: "server",
                STATE: "state",
                TRACKING_SERVER: "trackingServer",
                TRACKING_SERVER_SECURE: "trackingServerSecure",
                ZIP: "zip",
                ...le({
                    keyPrefix: "PROP_",
                    valuePrefix: "prop",
                    count: 75
                }),
                ...le({
                    keyPrefix: "EVAR_",
                    valuePrefix: "eVar",
                    count: 159
                })
            },
            ue = le({
                keyPrefix: "EVENT_",
                valuePrefix: "event",
                count: 520
            });
        ue.SC_ADD = "scAdd", ue.PROD_VIEW = "prodView";
        const pe = "e",
            ge = "o",
            me = Object.values(de),
            fe = e => me.includes(e),
            Ee = null,
            ye = ({
                element: e = null,
                parent: t = null
            } = {}) => {
                const n = (({
                    element: e,
                    parent: t
                }) => {
                    if (e) {
                        const {
                            basePartNumber: t
                        } = e.dataset || {};
                        if (t) return t
                    }
                    if (t) {
                        const {
                            basePartNumber: e
                        } = t.dataset || {};
                        if (e) return e
                    }
                    return Ee
                })({
                    element: e,
                    parent: t
                });
                if (n) return n;
                const a = (({
                    element: e,
                    parent: t
                }) => {
                    if (e) {
                        const {
                            partNumber: t
                        } = e.dataset || {};
                        if (t) return ne(t)
                    }
                    if (t) {
                        const {
                            partNumber: e
                        } = t.dataset || {};
                        if (e) return ne(e)
                    }
                    return Ee
                })({
                    element: e,
                    parent: t
                });
                return a || Ee
            },
            be = H(Y, Q),
            _e = e => {
                if (!e) return null;
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return null
                }
            },
            ve = (e, t, n) => X(e, _e(t), n),
            he = (e, t) => e instanceof Element && t instanceof Event && (setTimeout((() => {
                e.dispatchEvent(t)
            }), 0), !0),
            Ae = (e, t = 100) => {
                let n = null;
                return (...a) => {
                    clearTimeout(n), n = setTimeout((() => {
                        n = null, e(...a)
                    }), t)
                }
            },
            Se = () => window.s,
            Te = e => {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    return ""
                }
            },
            Ne = (e, t) => {
                try {
                    return window.localStorage.setItem(e, t || ""), !0
                } catch (e) {
                    return !1
                }
            },
            ke = e => {
                try {
                    return window.localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            },
            Oe = H(Te, Q),
            we = ".",
            Re = (...e) => e.map((e => Array.isArray(e) ? Re(...e) : $(e).split(we))).reduce(((e, t) => e.concat(t)), []),
            Ce = Re,
            Ie = (e, t) => t && t.length ? t.reduce(((e, t) => e && "object" == typeof e ? e[t] : null), e) : e,
            Pe = (e, t, n) => {
                if (!t.length) return n;
                if ("object" == typeof e) {
                    const a = t.pop(),
                        r = Array.isArray(e) ? [...e] : { ...e
                        };
                    return r[a] = Pe(r[a], t, n), r
                }
                return Pe({}, t, n)
            },
            De = (e, t) => {
                const n = t.pop(),
                    a = Array.isArray(e) ? [...e] : { ...e
                    };
                return t.length ? ("object" == typeof a[n] && (a[n] = De(a[n], t)), a) : (Array.isArray(a) ? a.splice(Number(n) || a.length, 1) : delete a[n], a)
            },
            Le = H((e => {
                try {
                    return window.sessionStorage.getItem(e)
                } catch (e) {
                    return ""
                }
            }), Q),
            Ve = (e, t) => ((e, t) => {
                try {
                    return window.sessionStorage.setItem(e, t || ""), !0
                } catch (e) {
                    return !1
                }
            })(e, _e(t)),
            Me = e => $(e).trim(),
            xe = e => {
                const t = new RegExp(" ", "g");
                return e.replace(t, " ")
            },
            $e = (e, ...t) => e instanceof HTMLElement && t.some((t => e.classList.contains(t))),
            Ue = e => e ? "origin" in e ? e.origin : `${e.protocol}//${e.hostname}` : "",
            je = e => window.URL ? new URL(window.location).searchParams.get(e) : null,
            Be = e => {
                if (!e) return !1;
                if ("A" !== e.tagName) return !1;
                const t = (e.getAttribute("href") || "").trim();
                return t.length > 0 && 0 !== t.indexOf("#") && 0 !== t.indexOf("about:") && 0 !== t.indexOf("javascript:") && 0 !== t.indexOf("mailto:") && 0 !== t.indexOf("tel:") && !e.dataset.analyticsIntrapageLink
            },
            He = e => (e => Be(e) && Ue(e) !== Ue(window.document.location))(e) || (e => (e => !(!e || "A" !== e.tagName))(e) && "analyticsCrossorigin" in e.dataset)(e),
            Ge = e => Be(e) && void 0 !== e.dataset.analyticsExitLink,
            Fe = e => !(!Be(e) || !e.hostname) && ((Se() || {}).linkInternalFilters || "").split(",").every((t => e.hostname.indexOf(t.trim()) < 0)),
            Ke = ({
                url: e,
                pageType: t,
                isReferrerUrl: n
            } = {}) => {
                let a = Me(e);
                if (!a) return "";
                (n || "string" == typeof t && "errorpage" === t.toLowerCase()) && (a = a.replace(/\/vieworder\/.*/, "/vieworder/******")), a = a.replace(/\/order\/guest\/.*/, "/order/guest/******"), a = a.replace(/\/order\/applynow\/ep_payments\/.*/, "/order/applynow/ep_payments/******"), a = a.replace(/\/onMyWay\/.*/, "/onMyWay/******"), a = a.replace(/\/startPickup\/.*/, "/startPickup/******"), a = a.replace(/\/order\/detail\/.*/, "/order/detail/******"), a = a.replace(/\/order\/gift\/recipient\/W[0-9-]+/, "/order/gift/recipient/******"), a = a.replace(/\/order\/return\/selectaddress\/.*/, "/order/return/selectaddress/******"), a = a.replace(/\/order\/return\/address\/.*/, "/order/return/address/******"), a = a.replace(/\/order\/upload\/.*/, "/order/upload/******"), a = a.replace(/\/order\/link\/verify\?.*/, "/order/link/verify/******"), a = a.replace(/\/order\/storepickup\/instructions\/.*/, "/order/storepickup/instructions/******"), a = a.replace(/\/order\/exchange\/select\/.*/, "/order/exchange/select/******"), a = a.replace(/&ordernumber=W[0-9]{9,12}/, "&ordernumber=******"), a = a.replace(/\/order\/edit\/payment\/.*/, "/order/edit/payment/******"), a = a.replace(/\/order\/edit\/fapiao\/.*/, "/order/edit/fapiao/******"), a = a.replace(/\/order\/schedule\/pickupform\/.*/, "/order/schedule/pickupform/******"), a = G(a);
                const r = new URL(a);
                /(\/shop(\/[^/\n\r]*)?\/(sign|log)_?in)/i.test(r.pathname) && (r.search = "");
                const o = new URLSearchParams(r.search);
                return o.delete("fnode"), r.search = o.toString(), r.toString()
            },
            We = e => {
                if (!e) throw new Error("moduleName parameter required for Logger");
                const t = {
                    TRACE: 4,
                    DEBUG: 3,
                    INFO: 2,
                    WARN: 1,
                    ERROR: 0
                };
                let n, a;
                const r = r => o => {
                    if (a = window.sessionStorage.getItem("AS_LOG_LEVEL") || window.AS_LOG_LEVEL || t.ERROR, n = a in t ? t[a] : t.ERROR, t[r] <= n) try {
                        let t;
                        t = "string" == typeof o || "number" == typeof o || "boolean" == typeof o || "bigint" == typeof o ? {
                            message: o
                        } : Array.isArray(o) ? {
                            message: o.toString()
                        } : function(e) {
                            const t = {
                                message: e.message,
                                colno: e.colno,
                                lineno: e.lineno,
                                stack: e.stack || e.error && e.error.stack,
                                name: e.name,
                                code: e.code
                            };
                            return { ...e,
                                ...t
                            }
                        }(o), (e => {
                            const t = new CustomEvent("echoLogEvent", {
                                detail: e
                            });
                            window.dispatchEvent(t)
                        })({ ...t,
                            id: e,
                            type: r.toLowerCase(),
                            currentScriptSrc: document && document.currentScript && document.currentScript.src
                        }), console[r.toLowerCase()](o)
                    } catch (e) {
                        console.error("as-utilities/logger: could not log message", e)
                    }
                };
                return {
                    error: r("ERROR"),
                    warn: r("WARN"),
                    info: r("INFO"),
                    debug: r("DEBUG"),
                    trace: r("TRACE")
                }
            },
            qe = e => e && Object.keys(e).length > 0,
            ze = ({
                root: e,
                selector: t
            }) => {
                const n = (({
                        selector: e
                    }) => be(e) || null)({
                        root: e,
                        selector: t
                    }),
                    a = (({
                        root: e,
                        selector: t
                    }) => {
                        if (!e.localStorage) return null;
                        const n = e.localStorage.getItem(t);
                        if (((e = 0) => Number(e) < Date.now())(e.localStorage.getItem(`${t}_expiry`))) return null;
                        let a = null;
                        try {
                            n && (a = JSON.parse(n))
                        } catch (e) {
                            We("analytics/deferredBeaconLoad").error(e)
                        }
                        return a
                    })({
                        root: e,
                        selector: t
                    });
                return qe(n) && (!(r = a) || 0 === Object.keys(r).length) || qe(n) && n.btuid !== a.deferredBeacon.btuid ? {
                    deferredBeacon: n
                } : a;
                var r
            },
            Ye = {
                userAgent: e => {
                    const t = /(AppleWebkit)/i.test(e),
                        n = /Chrome/.test(e) && /Google Inc/.test(navigator.vendor),
                        a = /Android.*Mobile|Mobile.*Android/i.test(e),
                        r = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(e),
                        o = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(e),
                        i = r && r[1] || o && o[1],
                        s = /(ipad)/i.test(e),
                        c = /(iphone|ipod)/i.test(e) && t,
                        l = c || s ? e.match(/os ([\d_]*)/i) : null,
                        d = /CriOS/.test(e) && c,
                        u = l && l[1] || "0";
                    return {
                        isMobileIos: c,
                        isIpad: s,
                        isAndroidMobile: a,
                        isIosChrome: d,
                        userAgent: e,
                        isPhantom: /Phantom/i.test(e),
                        isFirefox: /(Firefox)/i.test(e),
                        isChrome: /(Chrome)/i.test(e),
                        isSafari: /(Safari)/i.test(e) && !/(Chrome)/i.test(e),
                        isHandheldPhone: c || a,
                        iosVersion: parseFloat(u.replace("_", ".")),
                        isIe: Boolean(i),
                        ieVersion: parseFloat(i || "0"),
                        isAndroidInternet: a && !n && t,
                        androidVersion: a ? parseFloat(e.slice(e.indexOf("Android") + 8)) : 0
                    }
                },
                getReferrer: () => document.referrer,
                getUrlHash: () => window.location.hash,
                setUrlHash: e => {
                    window.location.hash = e
                },
                doRedirect: e => {
                    window.location.href = e
                },
                isOnline: () => window.navigator.onLine,
                getWindowQueryString: () => window.location.search,
                getCurrentPathname: () => window.location.pathname,
                getViewportScrollX: () => window.scrollX,
                getViewportScrollY: () => window.scrollY,
                getViewportHeight: () => window.innerHeight || document.documentElement.clientHeight,
                getViewportWidth: () => window.innerWidth || document.documentElement.clientWidth,
                submit: e => {
                    (e && "get" in e ? e.get(0) : e).submit()
                },
                getFocused: () => document.activeElement,
                focus: e => e.focus(),
                pixelRatio: window.devicePixelRatio,
                devicePixelRatio: e => (Ye.pixelRatio = void 0 !== e ? e : Ye.pixelRatio, Ye.pixelRatio),
                selectedText: () => {
                    const e = window.getSelection();
                    return e ? e.toString() : ""
                },
                getCookies: () => document.cookie || "",
                setCookie: e => {
                    document.cookie = e
                },
                getLocalStorage: e => window && window.localStorage ? window.localStorage.getItem(e) : null,
                setLocalStorage: (e, t) => {
                    window && window.localStorage && window.localStorage.setItem(e, t)
                },
                removeLocalStorage: e => {
                    window && window.localStorage && window.localStorage.removeItem(e)
                },
                getSessionStorage: e => window && window.sessionStorage ? window.sessionStorage.getItem(e) : null,
                setSessionStorage: (e, t) => {
                    window && window.sessionStorage && window.sessionStorage.setItem(e, t)
                },
                removeSessionStorage: e => {
                    window && window.sessionStorage && window.sessionStorage.removeItem(e)
                }
            },
            Je = (e, t, n = {}) => {
                const a = (e => {
                    if ("number" == typeof e) {
                        const t = new Date;
                        return t.setTime(t.getTime() + 24 * (e || 0) * 60 * 60 * 1e3), t
                    }
                    return e
                })(null === t ? -1 : n.expires);
                t = "object" == typeof(t = null === t ? "" : t) ? JSON.stringify(t) : t;
                const r = a ? "; expires=" + a.toUTCString() : "",
                    o = n.path ? "; path=" + n.path : "",
                    i = n.domain ? "; domain=" + n.domain : "",
                    s = n.secure ? "; secure" : "",
                    c = n.sameSite ? "; samesite=" + n.sameSite : "";
                Ye.setCookie(e + "=" + encodeURIComponent(t) + r + o + i + s + c)
            },
            Xe = e => {
                let t = null;
                if (!e) return t;
                const n = (Ye.getCookies() || "").split(";");
                for (let a = 0; a < n.length; a++) {
                    const r = (n[a] || "").trim();
                    if (r.substring(0, e.length + 1) === e + "=") {
                        t = decodeURIComponent(r.substring(e.length + 1));
                        break
                    }
                }
                if (t && t.match(/^\s*\{/)) try {
                    t = JSON.parse(t)
                } catch (e) {}
                return t
            },
            Qe = e => e,
            Ze = (...e) => t => e.reduce(((e, t) => t(e)), t),
            et = () => Math.random().toString(36).slice(2, 6),
            tt = (e = et()) => e.slice(0, 4) + et(),
            nt = e => ({
                global: e.slice(0, 4),
                session: e.slice(4)
            }),
            at = e => t => t.slice(0, e),
            rt = e => "string" != typeof e ? "" : Object.values(ot).reduce(((e, t) => e.replaceAll(t, "")), e),
            ot = {
                primary: "~",
                secondary: "^",
                tertiary: "::"
            },
            it = {
                v1: {
                    prefix: "v1",
                    data: [{
                        key: "uuid",
                        map: "x",
                        mergeDefault: "override",
                        validStorage: ["session", "cookie"],
                        syncTabs: !1,
                        clean: e => e
                    }, {
                        key: "minor",
                        map: "m",
                        mergeDefault: "override",
                        validStorage: ["session", "cookie"],
                        syncTabs: !0,
                        clean: rt
                    }, {
                        key: "pageName",
                        map: "n",
                        mergeDefault: "override",
                        validStorage: ["session", "cookie"],
                        syncTabs: !1,
                        clean: Ze(rt, at(120))
                    }, {
                        key: "area",
                        map: "r",
                        mergeDefault: "override",
                        validStorage: ["session", "cookie"],
                        syncTabs: !1,
                        clean: rt
                    }, {
                        key: "entryPoint",
                        map: "ep",
                        mergeDefault: "override",
                        validStorage: ["session"],
                        syncTabs: !1,
                        clean: rt
                    }, {
                        key: "api",
                        map: "a",
                        mergeDefault: "append",
                        validStorage: ["session"],
                        syncTabs: !0,
                        prePack: e => e.map((({
                            type: e,
                            value: t
                        }) => e + ot.tertiary + rt(t))).join(ot.secondary),
                        clean: at(600),
                        postPack: e => e.split(ot.secondary).map((e => {
                            const [t, n] = e.split(ot.tertiary);
                            return {
                                type: t,
                                value: n
                            }
                        }))
                    }, {
                        key: "beacon",
                        map: "b",
                        mergeDefault: "merge",
                        validStorage: ["session"],
                        syncTabs: !0,
                        prePack: e => Object.entries(e).filter((([e]) => /^[eVar|prop|events|products]/.test(e))).map((([e, t]) => e + ot.tertiary + rt(t))).join(ot.secondary),
                        clean: e => e,
                        postPack: e => e.split(ot.secondary).reduce(((e, t) => {
                            const [n, a] = t.split(ot.tertiary);
                            return e[n] = a, e
                        }), {})
                    }],
                    settings: {
                        sessionName: "pt-dm",
                        cookieName: "pt-dm",
                        separator: ot.primary,
                        transformers: ["mergeExisting", "mapToSchema", "compress"]
                    }
                }
            },
            st = e => e ? it.hasOwnProperty(e) ? it[e] : null : it,
            ct = e => (e.options && e.options.version ? e.schema = st(e.options.version) : e.allSchemas = st(), e),
            lt = e => {
                if (!e) return {
                    prefix: "",
                    number: 0
                };
                const t = e.match(/\d+$/);
                if (!t) return {
                    prefix: e,
                    number: 0
                };
                const {
                    index: n
                } = t;
                return {
                    prefix: e.slice(0, n),
                    number: parseInt(e.slice(n), 10)
                }
            };
        class dt {
            constructor(e) {
                this.key = Me(e)
            }
            merge(e) {
                return e instanceof dt && (this.key = e.key), this
            }
            toString() {
                return this.key
            }
            compareKeys(e) {
                if (!(e instanceof dt)) return 0;
                const {
                    prefix: t,
                    number: n
                } = lt(this.key), {
                    prefix: a,
                    number: r
                } = lt(e.key);
                return n === r && t && a ? t.localeCompare(a) : n - r
            }
        }
        const ut = dt,
            pt = ",",
            gt = ";";
        class mt extends Map {
            constructor(...e) {
                super(), this.merge(...e)
            }
            add(e) {
                return e instanceof ut ? this.set(e.key, e) : this
            }
            merge(...e) {
                const t = ((...e) => e.reduce(((e, t) => (t instanceof mt ? e.push(...t.values()) : e.push(t), e)), []).filter((e => e instanceof ut)))(...e);
                return t.forEach((e => {
                    if (!(e instanceof ut)) return;
                    const t = this.get(e.key);
                    t ? t.merge(e) : this.add(e)
                })), this
            }
            toString(e = pt) {
                const t = [...this.values()].map((e => e.toString())).filter(Boolean).join(e);
                return B(t, 65536)
            }
            sort() {
                const e = [...this.values()];
                this.clear(), e.sort(((e, t) => e.compareKeys(t))), this.merge(...e)
            }
        }
        const ft = mt;
        class Et extends ut {
            constructor(e, t) {
                super(e), this.value = t
            }
            merge(e) {
                return e instanceof Et && e.key === this.key && (this.value = e.value), this
            }
            toString() {
                if (!this.key) return "";
                const e = Me(this.value);
                return e && "true" !== e ? `${this.key}=${e}` : this.key
            }
        }
        const yt = Et;
        class bt extends ut {
            constructor(e, t) {
                super(e), this.value = t
            }
            merge(e) {
                return e instanceof bt && e.key === this.key && (this.value = e.value), this
            }
            toString() {
                const e = Me(this.value);
                return this.key && e ? `${this.key}=${e}` : ""
            }
        }
        const _t = bt,
            vt = (e, t = pt) => {
                const n = new ft;
                return e && "string" == typeof e ? (e.split(t).forEach((e => {
                    const [t, a] = e.split("=");
                    t && n.add(new yt(t, a))
                })), n) : n
            },
            ht = e => {
                const t = new ft;
                return e && "string" == typeof e ? (e.split("|").forEach((e => {
                    const [n, a] = e.split("=");
                    n && a && t.add(new _t(n, a))
                })), t) : t
            };
        class At extends ut {
            constructor(e = {}) {
                const t = {
                    sku: "",
                    category: "",
                    qty: 0,
                    price: 0,
                    events: new ft,
                    variables: new ft,
                    ...e
                };
                t.sku = ne(t.sku), super(t.sku), this.sku = B(t.sku, 100), this.category = B(t.category, 100), this.qty = t.qty, this.price = t.price, this.events = t.events instanceof ft ? t.events : vt(t.events), this.variables = t.variables instanceof ft ? t.variables : ht(t.variables)
            }
            merge(e) {
                return e instanceof At && e.key === this.key && (this.category = e.category || this.category, this.qty = e.qty || this.qty, this.price = e.price || this.price, this.events.merge(e.events), this.variables.merge(e.variables)), this
            }
            toString() {
                return [Me(this.category), Me(this.sku), this.qty ? Me(this.qty) : "", this.price ? ee(this.price) : "", this.events ? this.events.toString("|") : "", this.variables ? this.variables.toString("|") : ""].join(gt).replace(",", "")
            }
        }
        const St = At;
        class Tt extends ut {
            constructor(e = {}) {
                const t = {
                    moduleId: "",
                    events: new ft,
                    variables: new ft,
                    ...e
                };
                super(t.moduleId), this.moduleId = B(t.moduleId, 100), this.category = "content", this.events = t.events instanceof ft ? t.events : vt(t.events), this.variables = t.variables instanceof ft ? t.variables : ht(t.variables)
            }
            merge(e) {
                return e instanceof Tt && e.key === this.key && (this.events.merge(e.events), this.variables.merge(e.variables)), this
            }
            toString() {
                return [Me(this.category), Me(this.moduleId), "", "", this.events ? this.events.toString("|") : "", this.variables ? this.variables.toString("|") : ""].join(gt).replace(",", "")
            }
        }
        const Nt = Tt,
            kt = (e, t = pt) => {
                const n = new ft;
                return e && "string" == typeof e ? (e.split(t).forEach((e => {
                    e && n.add(new ut(e))
                })), n) : n
            },
            Ot = e => {
                const t = new ft;
                return e && Array.isArray(e) ? (e.forEach((e => {
                    e && t.add(new ut(e))
                })), t) : t
            },
            wt = ue.EVENT_101,
            Rt = ue.EVENT_102,
            Ct = Z,
            It = ee,
            Pt = e => {
                const t = new ft;
                return e && "string" == typeof e ? ((e => e && "string" == typeof e ? e.split(pt).filter(Boolean).reduce(((e, t) => (e.length && !t.includes(gt) ? e[e.length - 1] += pt + t : e.push(t), e)), []) : [])(e).forEach((e => {
                    ((e, t) => {
                        if (!(e instanceof ft && t instanceof St)) return e;
                        const n = e.get(t.sku);
                        if (!n) return e.add(t);
                        const a = Ct(n.qty) + Ct(t.qty),
                            r = It(Ct(n.price) * a);
                        n.qty = a, n.variables.merge(t.variables), n.events.merge(t.events, new yt(wt, a), new yt(Rt, r))
                    })(t, (e => {
                        if (!e || "string" != typeof e) return null;
                        const [t, n, a, r, o, i] = e.split(gt), s = {
                            category: t,
                            sku: n,
                            qty: a,
                            price: r,
                            events: vt(o, "|"),
                            variables: ht(i)
                        };
                        return new St(s)
                    })(e))
                })), t) : t
            },
            Dt = (e = {}) => (e.options = {
                origin: "same",
                version: "v1",
                minor: "2",
                ...e.options
            }, e),
            Lt = ({
                key: e,
                value: t
            }) => Ye.setSessionStorage(e, t),
            Vt = ({
                key: e,
                value: t
            }) => Ye.setLocalStorage(e, t),
            Mt = ({
                key: e,
                cookie: t
            }) => t ? t.get(e) : null,
            xt = ({
                key: e
            }) => Ye.getSessionStorage(e),
            $t = ({
                key: e
            }) => Ye.removeSessionStorage(e),
            Ut = ({
                key: e
            }) => Ye.removeLocalStorage(e),
            jt = "sync",
            Bt = "onNewPage",
            Ht = "clearAll",
            Gt = e => {
                if (!e || !e.transformed || "" === e.transformed) return !1;
                switch (e.destination) {
                    case "cookie":
                        {
                            const t = {
                                cookie: e.cookie,
                                key: e.schema.settings.cookieName,
                                value: e.transformed
                            };e.options && e.options.cookieDomain && (t.cookieDomain = e.options.cookieDomain),
                            (({
                                key: e,
                                value: t,
                                cookieDomain: n,
                                cookie: a
                            }) => {
                                const r = {
                                    secure: !0,
                                    sameSite: "strict",
                                    path: "/"
                                };
                                n && (r.domain = n), a.set(e, t, r)
                            })(t);
                            break
                        }
                    default:
                        Lt({
                            window: e.window,
                            key: e.schema.settings.sessionName,
                            value: e.transformed
                        }), e.transformedSync && "" !== e.transformedSync && (({
                            value: e
                        }) => {
                            Vt({
                                key: jt,
                                value: e
                            }), Ut({
                                key: jt
                            })
                        })({
                            value: e.transformedSync
                        })
                }
                return !0
            },
            Ft = ({
                schema: e,
                sessionData: t,
                cookieData: n
            }) => {
                let a = null;
                const r = e => null !== e,
                    o = r(t) ? un({
                        schema: e,
                        data: t
                    }) : null,
                    i = r(n) ? un({
                        schema: e,
                        data: n
                    }) : null,
                    s = r(o) ? nt(o.uuid) : null,
                    c = r(i) ? nt(i.uuid) : null,
                    l = r(t) && r(n),
                    d = r(s) && r(c) && s.global === c.global,
                    u = d && s.session === c.session;
                switch (!0) {
                    case !r(t) && r(n):
                        a = i;
                        break;
                    case r(t) && !r(n):
                        a = o;
                        break;
                    case l && u:
                        a = { ...o,
                            ...i
                        };
                        break;
                    case l && !u && d:
                        {
                            const t = { ...i
                            };e.data.filter((({
                                syncTabs: e
                            }) => !e)).forEach((({
                                key: e
                            }) => {
                                delete t[e]
                            })),
                            a = { ...o,
                                ...t
                            }
                        }
                        break;
                    case l && !d:
                        a = o;
                    case !r(t) && !r(n):
                }
                return a
            },
            Kt = ({
                cookie: e
            }) => {
                const t = ct({
                    options: {}
                });
                if (!t.allSchemas) return;
                const n = Object.keys(t.allSchemas).sort(((e, t) => e < t ? 1 : -1));
                let a = {};
                for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                        i = t.allSchemas[o],
                        {
                            cookieName: s,
                            sessionName: c
                        } = i.settings,
                        l = Mt({
                            cookie: e,
                            key: s
                        }),
                        d = xt({
                            key: c
                        }),
                        u = Ft({
                            schema: i,
                            cookieData: l,
                            sessionData: d
                        });
                    if (null !== u && (a = u), 0 !== Object.keys(a).length) break
                }
                return 0 === Object.keys(a).length ? null : a
            },
            Wt = Kt,
            qt = e => {
                const t = Wt({
                    cookie: e.cookie
                });
                return t ? zt(e, t) : e.data && (e.data.uuid || Yt(e)), e
            },
            zt = (e, t) => {
                Object.keys(t).forEach((n => {
                    const a = t[n],
                        r = e.data[n],
                        o = Xt(e, n);
                    e.data[n] = Jt({
                        storedValue: a,
                        newValue: r,
                        mergePolicy: o
                    })
                }))
            },
            Yt = e => {
                e.data.uuid = tt()
            },
            Jt = ({
                storedValue: e,
                newValue: t,
                mergePolicy: n
            }) => {
                switch (n) {
                    case "keep":
                        return e;
                    case "override":
                        return t || e;
                    case "append":
                        return Zt(t, e);
                    case "merge":
                        return en(t, e);
                    default:
                        return t
                }
            },
            Xt = (e, t) => e.isSync ? "override" : Qt(e.schema, t),
            Qt = (e, t) => {
                const {
                    mergeDefault: n
                } = e.data.find((e => e.key === t));
                return n
            },
            Zt = (e, t) => e ? t.concat(e) : t,
            en = (e, t) => ({ ...t,
                ...e,
                ...tn(e, t)
            }),
            tn = (e, t) => {
                const n = {};
                if (!e || !t) return;
                const a = (a, r) => {
                    if (t[a] && e[a]) {
                        const o = r(t[a]),
                            i = r(e[a]);
                        n[a] = o.merge(i).toString()
                    }
                };
                return a(de.EVENTS, vt), a(de.PRODUCTS, Pt), n
            },
            nn = e => e,
            an = e => {
                const {
                    schema: t
                } = e;
                return e.transformed = {}, e.transformedSync = {}, e.destination = e.options && "cross" === e.options.origin ? "cookie" : "session", null === e.data || (!e.data.hasOwnProperty("minor") && e.options && e.options.hasOwnProperty("minor") && (e.data.minor = e.options.minor), t.data.forEach((({
                    key: t,
                    map: n,
                    validStorage: a,
                    clean: r,
                    prePack: o = Qe,
                    syncTabs: i = !1
                }) => {
                    if (!a.includes(e.destination)) return;
                    if (!e.data[t]) return;
                    const s = e.data[t],
                        c = Ze(o, r)(s);
                    if (c && "" !== c)
                        if (e.transformed[n] = c, i) e.transformedSync[n] = c;
                        else if ("uuid" === t) {
                        const {
                            global: t
                        } = nt(c);
                        e.transformedSync[n] = tt(t)
                    }
                }))), e
            },
            rn = e => {
                const t = {};
                return e.data && null !== e.data ? (Object.keys(e.data).forEach((n => {
                    const a = e.schema.data.find((e => e.map === n));
                    if (!a) return;
                    const {
                        key: r,
                        postPack: o
                    } = a, i = e.data[n];
                    t[r] = o ? o(i) : i
                })), 0 === Object.keys(t).length ? null : t) : null
            },
            on = e => {
                const t = [],
                    n = [],
                    {
                        separator: a
                    } = e.schema.settings;
                if (e.transformed && Object.entries(e.transformed).forEach((([e, n]) => {
                        t.push(e + a + n)
                    })), e.transformedSync && Object.entries(e.transformedSync).forEach((([e, t]) => {
                        n.push(e + a + t)
                    })), e.transformed = t.join(a), e.transformedSync = n.join(a), "" === e.transformed) return e;
                if (e.schema.prefix) {
                    const t = [e.schema.prefix, a, e.transformed];
                    if (e.transformed = t.join(""), "" !== e.transformedSync) {
                        const t = [e.schema.prefix, a, e.transformedSync];
                        e.transformedSync = t.join("")
                    }
                }
                return e
            },
            sn = e => {
                const {
                    data: t,
                    schema: n
                } = e, {
                    separator: a
                } = n.settings;
                let r = t;
                if (null === r) return e;
                const o = new RegExp(`^${n.prefix}${i=a,i.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}`);
                var i;
                r = r.replace(o, "");
                const s = r.split(n.settings.separator),
                    c = {};
                for (let e = 0; e < s.length; e += 2) {
                    const t = s[e],
                        n = s[e + 1];
                    c[t] = n
                }
                return e.data = c, e
            },
            cn = {
                mergeExisting: e => e ? qt : nn,
                mapToSchema: e => e ? an : rn,
                compress: e => e ? on : sn
            },
            ln = e => t => {
                if (!t || !t.schema) return null;
                const n = t.schema.settings.transformers.map((e => t => cn[t](e))(e)),
                    a = e ? n : [...n].reverse();
                return Ze(...a)(t)
            },
            dn = ln(!0),
            un = ln(!1),
            pn = Ze(Dt, ct, dn, Gt),
            gn = Kt,
            mn = ({
                window: e,
                cookie: t,
                options: n = {}
            } = {}) => {
                let a = {
                    window: e,
                    cookie: t,
                    options: n
                };
                if (a = ct(a), !a.allSchemas) return null;
                const r = Kt({
                    cookie: t
                });
                Object.values(a.allSchemas).forEach((({
                    settings: e
                }) => {
                    const {
                        cookieName: n,
                        sessionName: r
                    } = e, o = {
                        cookie: t,
                        key: n
                    };
                    a.options && a.options.cookieDomain && (o.cookieDomain = a.options.cookieDomain), (({
                        key: e,
                        cookieDomain: t,
                        cookie: n
                    }) => {
                        const a = {
                            secure: !0,
                            sameSite: "strict",
                            path: "/",
                            expires: new Date("Thu, 01 Jan 1970 00:00:01 GMT")
                        };
                        t && (a.domain = t), n.set(e, "", a)
                    })(o), $t({
                        key: r
                    }), Vt({
                        key: Ht,
                        value: "sync-clear-all"
                    }), Ut({
                        key: Ht
                    })
                })), r && r.uuid && Ze(Dt, ct, dn, Gt)({
                    window: e,
                    cookie: t,
                    data: {
                        uuid: r.uuid
                    },
                    options: n
                })
            },
            fn = ({
                window: e = globalThis.window,
                cookie: t = n,
                data: a,
                options: r
            } = {}) => pn({
                window: e,
                cookie: t,
                data: { ...a
                },
                options: { ...r
                }
            }),
            En = ({
                cookie: e = n
            } = {}) => gn({
                cookie: e
            }),
            yn = ({
                window: e = globalThis.window,
                cookie: t = n,
                ...a
            } = {}) => mn({
                window: e,
                cookie: t,
                options: a
            }),
            bn = ({
                root: e,
                name: t
            }) => e.document.cookie && (e.document.cookie.split("; ").find((e => e.startsWith(t))) || "").split("=")[1] || null,
            _n = ({
                root: e,
                selector: t,
                cookieDomain: n
            }) => {
                (({
                    root: e
                }) => {
                    const t = We("analytics/storedData");
                    for (const n of ["mk_epub", "pt-dm"]) e.localStorage && t.debug(`${n} [localStorage]: "${e.localStorage.getItem(n)}"`), e.sessionStorage && t.debug(`${n} [sessionStorage]: "${e.sessionStorage.getItem(n)}"`), t.debug(`${n} [cookie]: "${bn({root:e,name:n})}"`)
                })({
                    root: e
                });
                const a = (() => {
                        const e = En();
                        return null === e || (delete e.uuid, delete e.minor), e
                    })(),
                    r = ze({
                        root: e,
                        selector: t
                    });
                (({
                    root: e,
                    cookieDomain: t
                }) => {
                    e.localStorage && yn({
                        cookieDomain: t
                    })
                })({
                    root: e,
                    cookieDomain: n
                }), (({
                    root: e,
                    selector: t,
                    cookieDomain: n
                }) => {
                    (({
                        root: e,
                        selector: t
                    }) => {
                        if (e.localStorage) try {
                            const n = JSON.parse(e.localStorage.getItem(t)) || {};
                            delete n.deferredBeacon, qe(n) ? e.localStorage.setItem(t, JSON.stringify(n)) : (e.localStorage.removeItem(t), e.localStorage.removeItem(`${t}_expiry`))
                        } catch (e) {
                            We("analytics/deferredBeaconClear").error(e)
                        }
                    })({
                        root: e,
                        selector: t
                    }), (({
                        selector: e,
                        cookieDomain: t
                    }) => {
                        ve(e, null, {
                            path: "/",
                            secure: !0,
                            domain: t
                        })
                    })({
                        selector: t,
                        cookieDomain: n
                    })
                })({
                    root: e,
                    selector: t,
                    cookieDomain: n
                });
                const o = r ? .deferredBeacon || {},
                    i = r ? .purchaseJourney,
                    s = {};
                let c = {};
                return a && (c = a), i && (s.persisted = {
                    purchaseJourney: i
                }), {
                    storedAdobeVars: o,
                    previousPage: c,
                    otherStoredData: s
                }
            },
            vn = (e, t) => t || e.data ? .area || "shop",
            hn = e => {
                if (e ? .api) return `D=${e.api.map((({type:e,value:t})=>`
                c14 + "::${e}::${t}`)).join('^" + ')}"`},An=e=>e?.api,Sn=e=>e?.beacon?.[de.EVAR_35],Tn=e=>e?.beacon?.[de.EVAR_5],Nn=(e,t)=>!(!e||-1!==e.split("?")[0].indexOf(t)),kn=(e,t,n,a)=>{if((e=>"warm"===e.data?.buyflow?.state)(e)){const r=e.data?.buyflow?.entryPoint,o=!0===e.config?.asMetrics?.storedEntryPointEnabled&&t?.entryPoint,i=Nn(n,a)?"external":"";return r||o||i}},On=(e,t,n,a)=>({dimensionOrder:e.data?.buyflow?.dimensionOrder?.at(0),entryPoint:kn(e,t,n,a),entryPointRules:e.data?.buyflow?.entryPointRules,lineOfBusiness:e.data?.buyflow?.lineOfBusiness,name:e.data?.buyflow?.name,selectionOrder:e.data?.buyflow?.selectionOrder?.at(0),state:e.data?.buyflow?.state,step:e.data?.buyflow?.step}),wn=(e,t)=>{const n=(e||0)>=2?" 2x":"";return t.platform.toLowerCase()+n},Rn=(e,t)=>e.data?.properties?.langAttribute||t.toLowerCase(),Cn=(e,t,n)=>n?.beacon?.[de.EVAR_20]||e.data?.properties?.leadQuoteTime||e.data?.properties?.[de.EVAR_20]||t[de.EVAR_20],In=e=>{const t=e.config?.omniture?.internalDomains;return t?[...new Set(["#","javascript:"].concat(t))].join(","):""},Pn=(e,t,n,a)=>{const r=vt(e.data?.properties?.eventType);1===r.size&&r.has(ue.EVENT_4)&&r.clear();const o=vt(t.events),i=vt(n?.beacon?.events);return r.merge(o).merge(i).merge(a).toString()},Dn=e=>e?.beacon?.[de.PROP_37],Ln=({data:e,key:t,defaultValue:n})=>{if(!e||!Array.isArray(e))return n;const a=e.find((e=>e.key===t));return a&&a.value?a.value:n},Vn=(e,t)=>Ln({data:e.data?.mvt,key:de.EVAR_52,defaultValue:t.beacon?.[de.EVAR_52]}),Mn=(e,t,n)=>{const a=n.beacon?.[de.EVAR_53],r=t[de.EVAR_53],o=a||r;return Ln({data:e.data?.mvt,key:de.EVAR_53,defaultValue:o})},xn=(e,t,n)=>{const a=n.beacon?.[de.EVAR_57],r=t[de.EVAR_57],o=a||r;return Ln({data:e.data?.mvt,key:de.EVAR_57,defaultValue:o})},$n=e=>{let t;if(e.match(/windows/i))return"windows";if(e.match(/(kindle|silk-accelerated)/i))return e.match(/(kindle fire|silk-accelerated)/i)?"kindle fire":"kindle";if(e.match(/(iphone|ipod|ipad)/i))return t=e.match(/OS [0-9_]+/i),"i"+t[0].replace(/_/g,".");if(e.match(/android/i))return e.match(/android [0-9]\.?[0-9]?\.?[0-9]?/i);if(e.match(/webos\/[0-9\.]+/i))return t=e.match(/webos\/[0-9]\.?[0-9]?\.?[0-9]?/i),t[0].replace(/webos\//i,"web os ");if(e.match(/rim tablet os [0-9\.]+/i))return t=e.match(/rim tablet os [0-9]\.?[0-9]?\.?[0-9]?/i),t[0].replace(/rim tablet os/i,"rim os ");if((e.match(/firefox\/(\d{2}||[3-9])/i)||e.match(/AppleWebKit\//))&&e.match(/Mac OS X [0-9_\.]+/)){let t=e.match(/[0-9_\.]+/g);return t=t[1].split(/_|\./),t[0]+"."+t[1]+".x"}const n=e.match(/AppleWebKit\/\d*/i)&&e.match(/AppleWebKit\/\d*/i).toString().replace(/AppleWebKit\//i,"");return n>522?"10.5.x":n>400?"10.4.x":n>99?"10.3.x":n>80?"10.2.x":"mac unknown or non-safari"},Un=(e,t)=>xe(e||t.data?.pageName||""),jn=(e,t)=>Ke({url:t,pageType:e.data?.properties?.pageType}),Bn=e=>e.data?.prefix||"aos",Hn=e=>({contentGroup2:e[de.PROP_2],featureId:e[de.EVAR_59],leadQuoteLegacy:e[de.PROP_42],linkClicked:e[de.EVAR_1],loadTime:e[de.EVAR_9],microEvent:e[de.PROP_3],numberOfClicks:e[de.EVAR_93],region:e[de.EVAR_30],timeToClick:e[de.EVAR_94]}),Gn=(e,t)=>{const n=Pt(e.data?.properties?.productsString);return Pt(t.products).merge(((e,t)=>(e.size&&t&&[...e.values()][e.size-1].variables.add(new _t(de.EVAR_31,t)),e))(n,t.eVar31)).toString()},Fn=e=>({cartId:e.data?.properties?.cartId,characterSetForCountry:e.data?.properties?.characterSetForCountry,computedChannel:e.data?.properties?.computedChannel,computedCustomStoreName:e.data?.properties?.computedCustomStoreName,currencyCode:e.data?.properties?.currencyCode,fastLane:e.data?.properties?.fastLane,pageType:e.data?.properties?.pageType,paymentType:e.data?.properties?.paymentType,serverName:e.data?.properties?.serverName,shipMethod:e.data?.properties?.shipMethod,state:e.data?.properties?.state,storeFrontId:e.data?.properties?.storeFrontId,storeSegmentVariable:e.data?.properties?.storeSegmentVariable,userType:e.data?.properties?.userType,zipCode:e.data?.properties?.zipCode}),Kn=e=>e.data?.properties?.eCommercePage&&e.data?.properties?.metricsReportWebOrderNumberString,Wn=e=>{if(e)return"D=r"},qn=(e,t)=>{if(!(e=>Boolean(e.data?.search))(e))return(e=>{const t={searchEvents:new ft},n=vt(e[de.EVENTS]);return e[de.PROP_7]&&!n.has(ue.EVENT_364)&&t.searchEvents.add(new yt(ue.EVENT_7)),t.search=(e=>({suggestions:e[de.EVAR_23],searchTermClone:e[de.EVAR_2],searchTerm:e[de.PROP_7],clickPosition:e[de.PROP_29],nullSearchClickPosition:e[de.PROP_30]}))(e),t})(t);const n=e.data.search.selectedTab,a=e.data.search.categories[n],r=!t[de.EVAR_15],o=Z(a.totalCountText),i=(({hasResults:e,isCuratedKit:t,isDirectLanding:n})=>{const a=new ft(new yt(ue.EVENT_8));return e||a.add(new yt(ue.EVENT_49)),t&&a.add(new yt(ue.EVENT_370)),n&&a.add(new yt(ue.EVENT_372)),a})({hasResults:o,isCuratedKit:a.curated,isDirectLanding:r}),s=Me(e.data.search.searchTerm).toLowerCase(),c=Me(o)||"0",l=s?"D=c7":"",d=`${r?"external (direct)":t[de.EVAR_15]}|${n}`,u=t[de.EVAR_23];return{pageName:`${Me(Bn(e))}:search:${Me(n)}`,area:"search",searchEvents:i,search:{isSERP:!0,suggestions:u,selectedTab:n,searchTerm:s,searchTermClone:l,categories:e.data.search.categories,initialResultCount:c,methodAndIntent:d,nullSearchClickPosition:t[de.PROP_30]}}},zn=e=>e.data?.sectionEngagement,Yn=e=>e.data?.category,Jn=e=>e.data?.coversModeType,Xn=e=>e.data?.products,Qn=e=>void 0===e||""===e||(e=>"object"==typeof e&&0===Object.keys(e).length)(e),Zn=e=>Object.fromEntries(Object.entries(e).filter((([e,t])=>!Qn(t)))),ea=(e,t)=>{const{omniture:n}=e||{};return Qn(n)||Qn(n.trackingServer)&&(n.trackingServer=t),{...e,...Zn({omniture:n})}},ta=({products:e,events:t,purchaseJourney:n,triggerEvents:a,newEvent:r})=>{let o=!1;if(a.some((e=>t.has(e)))&&0!==Object.keys(n).length)return Object.entries(n).forEach((([n,a])=>{e.forEach((e=>{e.sku===n&&(e.variables.add(new _t("eVar11",a)),t.add(new yt(r)),o=!0)}))})),o},na="metaData",aa="pageDataModel",ra="pageDataModel.data.properties",oa="persisted",ia="sessionStore",sa="deferredBeacon",ca="pageLoad",la="purchaseJourney",da="clickTimer",ua="relay",pa="referrer",ga={CONFIG:[aa,"config"],PAGE_DATA:[aa,"data"],DEFERRED_BEACON:[oa,sa]},ma="mk_epub",fa="mk_epub_expiry",Ea=()=>{ke(fa),ke(ma)},ya=()=>(Number(Te(fa))||0)<Date.now();let ba;const _a=e=>{!e&&ya()||(Ne(fa,Date.now()+72e5),ba=setTimeout(_a,3e5))},va=()=>{clearTimeout(ba),_a(!0)},ha=e=>{e&&"object"==typeof e&&Object.keys(e).length?(va(),Ne(ma,_e(e))):Ea()},Aa=e=>!(!e||"object"!=typeof e||Array.isArray(e));let Sa={};const Ta="analytics",Na=()=>{const e=Sa?.pageDataModel?.config?.asMetrics?.asMetricsFeatures?.includes("sharedDataLayer");return e},ka=e=>{let t;if(Na()&&window.aosDataLayer){const n=window.aosDataLayer.get(),a=[Ta].concat(e||[]);t=Ie(n,a)}else t=Ie(Sa,e);return t},Oa=(e,t)=>{if(Na()&&window.aosDataLayer){const n=[Ta].concat(e||[]);window.aosDataLayer.set(n,t)}else Sa=((e,t,n)=>t&&t.length?Pe(e,[...t].reverse(),n):e)(Sa,e,t)},wa={},Ra={pageDataModel:["key","selector"],meta:["key","selector","keyAttribute","valueAttribute"],state:["defaultState"],persisted:["key"],sessionStore:["key"]},Ca=e=>{Aa(e)&&Object.keys(Ra).forEach((t=>{var n,a;n=e[t],a=Ra[t],Aa(n)&&Array.isArray(a)&&a.every((e=>n[e]))&&(wa[t]={...e[t]})}))},Ia=()=>{wa.persisted&&Oa([wa.persisted.key],(()=>{if(ya())return Ea(),{};const e=Oe(ma);return e?(va(),e):(Ea(),{})})())},Pa=()=>{wa.persisted&&ha(ka([wa.persisted.key]))},Da="mk_epub",La=()=>{(e=>{try{return window.sessionStorage.removeItem(e),!0}catch(e){return!1}})(Da)},Va=()=>{wa.sessionStore&&Oa([wa.sessionStore.key],Le(Da)||(La(),{}))},Ma=()=>{var e;wa.sessionStore&&((e=ka([wa.sessionStore.key]))&&"object"==typeof e&&Object.keys(e).length?Ve(Da,e):La())},xa=(e,t)=>{const n=Ce(e);Oa(n,t),wa.persisted&&n[0]===wa.persisted.key&&Pa(),wa.sessionStore&&n[0]===wa.sessionStore.key&&Ma()},$a=()=>{var e;e=wa.state&&wa.state.defaultState,Aa(e)?(Sa=e,Na()&&window.aosDataLayer&&window.aosDataLayer.set(Ta,e)):Sa={},(()=>{if(!wa.meta)return;const{key:e,selector:t,keyAttribute:n,keyPrefix:a,valueAttribute:r}=wa.meta,o={},i=document.querySelectorAll(t);for(let e=0;e<i.length;e++)o[i[e].getAttribute(n).replace(a,"")]=i[e].getAttribute(r);xa(e,o)})(),(()=>{if(!wa.pageDataModel)return;let e={};const t=window.document.querySelector(wa.pageDataModel.selector);try{e=JSON.parse(t.textContent)}catch(e){}xa(wa.pageDataModel.key,e)})(),Ia(),Va()};let Ua=!1;const ja=e=>{var t;Ua||(Ua=!0,Ca(e),$a(),wa.persisted&&("function"==typeof(t=Ia)&&window.addEventListener("storage",(e=>t=>{t.key===ma&&e()})(t))))},Ba=e=>e?ka(Ce(e)):ka(),Ha=e=>{const t=Ce(e);(e=>{if(Na()&&window.aosDataLayer){const t=[Ta].concat(e||[]);window.aosDataLayer.remove(t)}else Sa=((e,t)=>t&&t.length&&"object"==typeof e?De(e,[...t].reverse()):e)(Sa,e)})(t),wa.persisted&&t[0]===wa.persisted.key&&Pa(),wa.sessionStore&&t[0]===wa.sessionStore.key&&Ma()},Ga=e=>e?e.indexOf("_")<0?e:e.split("_")[1]:"",Fa=({sku:e,newSku:t,newOrigin:n}={})=>{const a=ne(Ga(e)),r=ne(Ga(t)),o=[oa,la];if(!a||!r&&!n)return;let i=n;const s=Ba(o)||{};s[a]&&(i=i||s[a],delete s[a]),i&&(s[r||a]=i),xa(o,s)},Ka=(e,t)=>Fa({sku:e,newOrigin:t}),Wa=[...ga.DEFERRED_BEACON,"pj"],qa=()=>{const e=Ba(Wa);e&&(Ka(...e.split("|")),Ha(Wa))};let za=null;const Ya=e=>{za=e},Ja=()=>za,Xa=(e={})=>({type:"next",...e}),Qa={};let Za="v1";const er=()=>{const e={...Qa},t=En();return t&&null!==t&&(e.page=t),e},tr=({type:e,key:t,data:n})=>{if("page"===e){const e={version:Za},a={...e,origin:"cross"},r=Ja();return null!==r&&(a.cookieDomain=r),void fn({data:{[t]:n},options:e})}Qa.hasOwnProperty(e)||(Qa[e]={}),Qa[e][t]=n},nr=({type:e,key:t=null}={})=>{if("page"===e){const e=En();return null===e?null:null===t?e:e[t]||null}return Qa.hasOwnProperty(e)?null===t?Qa[e]||null:Qa[e][t]||null:null},ar=({type:e})=>{if("page"===e){const e=Ja(),t={};null!==e&&(t.cookieDomain=e),yn(t)}Qa[e]&&delete Qa[e]},rr=()=>{["next","exit"].forEach((e=>{const t=nr({type:e});null!==t&&(Object.keys(t).forEach((e=>{const n=t[e];"beacon"===e&&"object"==typeof n&&Object.keys(n).forEach((e=>{const t=n[e];"string"==typeof t&&(n[e]=t.replace(/pageName/g,"c14"))})),tr({type:"page",key:e,data:n})})),ar({type:e}))})),(()=>{const e={version:Za,origin:"cross"},t=Ja();null!==t&&(e.cookieDomain=t),fn({data:{},options:e})})()},or=({muleVersion:e=null,cookieDomain:t=null}={})=>{(({mule:e=null}={})=>{null!==e&&e.version&&(Za=e.version)})({mule:{version:e||"v1"}}),null!==t&&Ya(t);const n=(({window:e=globalThis.window}={})=>(({window:e})=>{Vt({key:Bt,value:"handle-new-page-save"}),Ut({key:Bt});const t=(({schema:e})=>t=>{const n=e.settings.sessionName;switch(t.key){case Bt:{const t=xt({key:n}),a=un({schema:e,data:t}),r=dn({schema:e,data:a,isSync:!0}).transformedSync;r&&(Vt({key:jt,value:r}),Ut({key:jt}));break}case jt:if(t.newValue){const a=xt({key:n});let r=t.newValue;if(a){const n=un({schema:e,data:a}),o=un({schema:e,data:t.newValue}),i=nt(n.uuid),s=nt(o.uuid),c=i.global===s.global?n.uuid:o.uuid;e.data.forEach((e=>{e.syncTabs&&delete n[e.key]}));const l={...n,...o,uuid:c};r=dn({schema:e,data:l,isSync:!0}).transformed}Lt({key:n,value:r})}break;case Ht:$t({key:n})}})({schema:ct(Dt()).schema}),n=e=>{t(e)};return e.addEventListener("storage",n),()=>{e.removeEventListener("storage",n)}})({window:e}))();return window.addEventListener("pagehide",rr),window.addEventListener("beforeunload",rr),()=>{n(),window.removeEventListener("pagehide",rr),window.removeEventListener("beforeunload",rr)}},ir=({type:e=null,message:t="Unknown error"}={})=>new Error(`[PASSIVE TRACKER${e?":"+e.toUpperCase():""}] ${t}`),sr=(e,t,n={})=>{if(!e||"string"!=typeof e)throw ir("set");if(!t)return;const{type:a}=Xa(n);tr({type:a,key:e,data:t})},cr=(e,t,n=!1)=>{const a={...e,...t};return n&&e.hasOwnProperty("events")&&t.hasOwnProperty("events")&&(a.events=((e,t)=>vt(e).merge(vt(t)).toString())(e.events,t.events)),n&&e.hasOwnProperty("products")&&t.hasOwnProperty("products")&&(a.products=((e,t)=>Pt(e).merge(Pt(t)).toString())(e.products,t.products)),a},lr=e=>"object"==typeof e,dr=(e,t)=>["events","products"].includes(e)&&"string"==typeof t,ur=(e,t,n={})=>{if(!e||"string"!=typeof e)throw ir("merge");if(!t)return;const a=Xa(n),{type:r}=a,o=nr({type:r,key:e}),i=null===o||lr(o)||dr(e,o),s=lr(t)||dr(e,t);if(!i||!s)throw ir("merge");null!==o?Array.isArray(o)?tr({type:r,key:e,data:Array.from(new Set([...o,...t]))}):tr({type:r,key:e,data:cr(o,t,"beacon"===e)}):sr(e,t,a)},pr=(e,t,n={})=>{if(!e||"string"!=typeof e)throw ir("append");if(!t)return;const a=Xa(n),{type:r}=a,o=nr({type:r,key:e});if(null!==o&&"function"!=typeof o.concat||"function"!=typeof t.concat)throw ir("append");null!==o?tr({type:r,key:e,data:o.concat(t)}):sr(e,t,a)},gr={dataAttrRegister:"data-purchase-journey",dataAttrRegisterDepr:"data-evar11",varOrigin:de.EVAR_11,eventView:ue.EVENT_114,eventAdd:ue.EVENT_115,eventTriggerView:[ue.EVENT_52,ue.EVENT_55,ue.PROD_VIEW],eventTriggerAdd:[ue.SC_ADD],dataLayerKey:[oa,la],crossDomainProp:"pj"},mr=e=>t=>"string"==typeof t?t.slice(0,e):null,fr=250,Er=100,yr="mk_epub",br={path:"/",secure:!0},_r=[oa,sa],vr="btuid",hr=[{name:vr,sanitizers:[se,mr(7)]},{name:de.EVENTS,sanitizers:[se,mr(150)]},{name:de.EVAR_1,sanitizers:[se,mr(fr)]},{name:de.PROP_14,sanitizers:[se,mr(Er)]},{name:de.PROP_57,sanitizers:[se,mr(Er)]},{name:de.PROP_7,sanitizers:[se,mr(Er)]},{name:de.EVAR_15,sanitizers:[se,mr(fr)]},{name:de.EVAR_23,sanitizers:[se,mr(fr)]},{name:de.PROP_25,sanitizers:[se,mr(Er)]},{name:de.EVAR_2,sanitizers:[se,mr(fr)]},{name:"pj",sanitizers:[mr(100)]}],Ar=[...ga.CONFIG,"global","cookieDomain"],Sr=()=>Ba(Ar),Tr=H((()=>{const e=be(yr);return ve(yr,null,{...br,domain:Sr()}),e}),(e=>{const t=Ba(_r);!ie(e)||ie(t)&&e[vr]===t[vr]||xa(_r,e),Ha([..._r,vr])})),Nr=H((e=>ie(e)?hr.reduce(((t,n)=>{const a=n.sanitizers||[],r=H(...a)(e[n.name]);return r&&(t[n.name]=r),t}),{}):null),(e=>ie(e)?hr.reduce((({beacon:t,beaconLength:n},a)=>{const r=a.name,o=$(e[r]),i=r.length+o.length+6;return o&&n+i<=500?(t[r]=o,{beacon:t,beaconLength:n+i}):{beacon:t,beaconLength:n}}),{beacon:{},beaconLength:0}).beacon:null)),kr=H((()=>{const e=Ba(_r);return ie(e)&&(e[vr]=window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36),xa(_r,e)),e}),Nr,(e=>{ie(e)&&ve(yr,e,{...br,domain:Sr()})})),Or=(e={})=>{const{beacon:t,element:n,crossDomain:a}=e,r=(e=>{if(!(e instanceof HTMLElement))return"";const t=e.getAttribute(gr.dataAttrRegister)||e.getAttribute(gr.dataAttrRegisterDepr);return t?(Ka(...t.split("|")),t):""})(n);r&&a&&(({deferred:e}={},t)=>{if(!0===e)xa(ga.DEFERRED_BEACON,{...Ba(ga.DEFERRED_BEACON)||{},[gr.crossDomainProp]:t});else{const e=Ba(ga.DEFERRED_BEACON);xa(ga.DEFERRED_BEACON,{[gr.crossDomainProp]:t}),kr(),xa(ga.DEFERRED_BEACON,e)}})(e,r);const o=t[de.EVENTS],i=gr.eventTriggerView.some((e=>o.has(e))),s=gr.eventTriggerAdd.some((e=>o.has(e)));if(!i&&!s)return e;const c=Ba(gr.dataLayerKey)||{};if(!oe(c))return e;const l=t[de.PRODUCTS],d=i?gr.eventView:gr.eventAdd;return l.forEach((e=>{c[e.sku]&&(e.variables.add(new _t(gr.varOrigin,c[e.sku])),o.add(new yt(d)))})),s&&Ha(gr.dataLayerKey),e},wr=(e,t="")=>"function"==typeof e?((e,t)=>(...n)=>(We("analytics/deprecated").warn(`${e.name}: ${t}`),e(...n)))(e,t):"object"!=typeof e||Array.isArray(e)?e:((e,t)=>Object.keys(e).reduce(((n,a)=>(n[a]=wr(e[a],t),n)),{}))(e,t),Rr=wr,Cr={...a};Cr.PATHS.DEFERRED_BEACON=[Cr.PERSISTED,Cr.DEFERRED_BEACON],Cr.PATHS.CONFIG_AS_METRICS=[...Cr.PATHS.CONFIG,"asMetrics"],Cr.PATHS.CONFIG_OMNITURE=[...Cr.PATHS.CONFIG,"omniture"],Cr.PATHS.CONFIG_GLOBAL=[...Cr.PATHS.CONFIG,"global"],Cr.PATHS.COOKIE_DOMAIN=[...Cr.PATHS.CONFIG_GLOBAL,"cookieDomain"],Cr.PATHS.TRACKING_SERVER=[...Cr.PATHS.CONFIG_OMNITURE,"trackingServer"];const Ir=Cr,Pr="AOS: ",Dr={PAGE_LOAD:"pageLoad",USER_INTERACTION:"userInteraction",EVENT:"event"},Lr="any",Vr="sectionEngagement",Mr=[...Ir.PATHS.CONFIG,"omniture"],xr=()=>Boolean(Ba(Mr)),$r=[...Ir.PATHS.CONFIG_AS_METRICS,"graffitiEnabled"],Ur=[...Ir.PATHS.CONFIG_AS_METRICS,"graffitiFeatures"],jr=(e=Lr)=>{const t=Ba($r),n=Ba(Ur);return!(!t||n&&(!(!n||Array.isArray(n)&&n.length)||e!==Lr&&!n.includes(e)))},Br=(e=Lr)=>{let t=e;return e===Lr?t="all":"all"===e&&(t=Lr),xr()&&!jr(t)},Hr=(e,t)=>e instanceof ft?e:t(e),Gr=["account:account_links:view_saved_items"],Fr=[/^(\/[^/\n\r]*)?\/shop\/open\/salespolicies$/i,/^\/jp\/shop\/browse\/sitemap$/i,/^\/jp\/store\//i],Kr=e=>e instanceof HTMLElement&&(Fe(e)||Ge(e)||He(e)||(e=>$e(e,"ac-gn-bagview-nav-link-favorites","ac-gn-bagview-nav-link-orders","ac-gn-bagview-nav-link-account","ac-gn-bagview-nav-link-signIn"))(e)||(e=>$e(e,"ac-gn-bagview-nav-link-signOut"))(e)||(e=>$e(e,"as-analytics-sendimmediately"))(e)||(e=>$e(e,"ac-gn-link-support"))(e)||(e=>Be(e)&&Fr.some((t=>t.test(e.pathname))))(e)),Wr=["a","button","form"],qr=((...e)=>(t={})=>{let n=null,a=0;for(;null===n;)n=e[a](n,t),a++;return n})(((e,t)=>t.type===Dr.PAGE_LOAD?(t.deferred=!1,t):e),((e,t)=>{const{deferred:n=null}=t;return!0===n||!1===n?t:e}),((e,t)=>{const{element:n}=t;return n instanceof HTMLElement&&Wr.includes(n.tagName.toLowerCase())&&("button"!==n.tagName.toLowerCase()||"submit"===n.type)?e:(t.deferred=!1,t)}),((e,t)=>{const{element:n,globalTracking:a=!1}=t;return n instanceof HTMLElement&&a&&!He(n)?(t.deferred=!0,t):e}),((e,t)=>{const{element:n,beacon:a}=t;return t.deferred=!Kr(n)&&!(e=>Boolean(e&&"object"==typeof e&&e[de.EVENTS].has(ue.SC_ADD)))(a),t})),zr=({target:e={},source:t={},mergers:n={}})=>(Object.keys(t).forEach((a=>{n[a]?e[a]=n[a](e[a],t[a]):e[a]instanceof ft&&t[a]instanceof ft?e[a].merge(t[a]):e[a]=t[a]})),e),Yr=(e,t)=>t,Jr=(e={})=>{const t={...e};return e.hasOwnProperty(de.EVENTS)&&(t[de.EVENTS]=vt(e[de.EVENTS])),e.hasOwnProperty(de.PRODUCTS)&&(t[de.PRODUCTS]=Pt(e[de.PRODUCTS])),t},Xr=[(e={})=>{const{current:t={},previous:n={}}=e;return zr({target:Jr(n.beacon),source:Jr(t.beacon)})},(e={})=>{const t=Object.keys(e).reduce(((t,n)=>{const a=e[n];if(!a||!a.api)return t;const{api:r}=a,o=("current"===n?"pageName":"c14")+' + "';return t.concat(r.map((({type:e,value:t})=>o+"::"+e+"::"+t)))}),[]).join('^" + ');return 0===t.length?null:{[de.LIST_2]:"D="+t+'
                "'}},(e={})=>{const{previous:t}=e;if(!t||!t.pageName)return null;const{pageName:n}=t;return{[de.PROP_14]:n}},(e={})=>{const{previous:t}=e;if(!t||!t.area)return null;const{area:n}=t;return{[de.PROP_57]:n}}],Qr={pageLoad:"
                page ",userInteraction:"
                next "},Zr=e=>{const{type:t,globalTracking:n,element:a}=e;if(!Object.keys(Qr).includes(t)||n&&(e=>{if(!e)return!1;const t=e.closest("
                a ");return null!==t&&!(!t.dataset.aseLoader&&!t.dataset.aseTabsLoader&&"#
                "!==t.getAttribute("
                href "))})(a)||e.deferred&&!0===e.deferred)return e;const r=((e="
                next ")=>{const t=((e="
                next ")=>{const t={current:nr({type:"
                next "})};return ar({type:"
                next "}),"
                page "===e&&(t.previous=nr({type:"
                page "}),ar({type:"
                page "})),null===t.current&&delete t.current,null===t.previous&&delete t.previous,0===Object.entries(t).length?null:t})(e);return null===t?null:Xr.reduce(((e,n)=>{const a=n(t);return a&&zr({target:e,source:a}),e}),{})})(Qr[t]);return null!==r&&(e.beacon=zr({target:e.beacon,source:r})),e};Zr.label="
                analytics - bp - passive - tracker - loader ";const eo=[...ga.PAGE_DATA,"
                area "],to=[...ga.PAGE_DATA,"
                prefix "],no=de.HIER1,ao=()=>`${Ba(to)||"
                aos "}:${Ba(eo)||"
                shop "}`,ro=[aa,"
                data ","
                buyflow "],oo=de.PROP_12,io=()=>{const{state:e,entryPoint:t="
                "}=Ba(ro)||{};return e?[e,t].join(": "):null},so=[...ga.PAGE_DATA,"
                productsString "],co=de.PRODUCTS,lo=()=>Pt(Ba(so)),uo=[...ga.PAGE_DATA,"
                eventsString "],po=de.EVENTS,go=()=>vt(Ba(uo)),mo=[...ga.PAGE_DATA,"
                error "],fo=de.EVAR_152,Eo=()=>{const e=Ba(mo);return e&&"
                object "==typeof e?`D=pageName+|${e.category||"
                "}|${e.message||"
                "}`:null},yo=ga.CONFIG.join(".
                "),bo=ga.PAGE_DATA.join(".
                "),_o=Ir.PATHS.CONFIG_OMNITURE.join(".
                "),vo=`${bo}.previousPage`,ho={[de.CHANNEL]:"
                D = h1 ",[de.EVAR_4]:"
                D = pageName ",[de.EVAR_54]:"
                D = g ",[de.EVAR_97]:"
                s.t - p ",[de.LIST_1]:"
                D = as_xs ",[de.LIST_3]:"
                D = as_tex ",[de.PROP_4]:"
                D = g "},Ao={[de.CHAR_SET]:`${ra}.characterSetForCountry`,[de.CURRENCY_CODE]:`${ra}.currencyCode`,[de.EVAR_12]:`${ra}.cartId`,[de.EVAR_14]:`${bo}.languageAttribute`,[de.EVAR_15]:`${bo}.search.methodAndIntent`,[de.EVAR_1]:`${vo}.linkClicked`,[de.EVAR_20]:`${bo}.leadQuoteTime`,[de.EVAR_23]:`${bo}.search.suggestions`,[de.EVAR_25]:`${ra}.fastLane`,[de.EVAR_26]:`${ra}.shipMethod`,[de.EVAR_27]:`${ra}.paymentType`,[de.EVAR_28]:`${ra}.userType`,[de.EVAR_2]:`${bo}.search.searchTermClone`,[de.EVAR_30]:`${vo}.region`,[de.EVAR_35]:`${vo}.appleCard`,[de.EVAR_3]:`${ra}.computedCustomStoreName`,[de.EVAR_49]:`${bo}.referrerClone`,[de.EVAR_52]:`${bo}.mvt1`,[de.EVAR_53]:`${bo}.mvt2`,[de.EVAR_57]:`${bo}.mvt3`,[de.EVAR_59]:`${vo}.featureId`,[de.EVAR_5]:`${vo}.applePay`,[de.EVAR_93]:`${vo}.numberOfClicks`,[de.EVAR_94]:`${vo}.timeToClick`,[de.EVAR_9]:`${vo}.loadTime`,[de.LINK_INTERNAL_FILTERS]:`${yo}.linkInternalFilters`,[de.LIST_2]:`${vo}.apisCalledString`,[de.PAGE_NAME]:`${bo}.pageName`,[de.PAGE_TYPE]:`${ra}.pageType`,[de.PROP_14]:`${vo}.pageName`,[de.PROP_20]:`${ra}.storeSegmentVariable`,[de.PROP_25]:`${bo}.referrerType`,[de.PROP_21]:`${bo}.search.initialResultCount`,[de.PROP_29]:`${bo}.search.clickPosition`,[de.PROP_2]:`${vo}.contentGroup2`,[de.PROP_30]:`${bo}.search.nullSearchClickPosition`,[de.PROP_37]:`${vo}.microEvent3`,[de.PROP_3]:`${vo}.microEvent`,[de.PROP_40]:`${ra}.storeFrontId`,[de.PROP_42]:`${vo}.leadQuoteLegacy`,[de.PROP_57]:`${vo}.area`,[de.PROP_5]:`${bo}.devicePixelRatio`,[de.PROP_7]:`${bo}.search.searchTerm`,[de.PROP_8]:`${ra}.computedChannel`,[de.PROP_9]:`${bo}.osVersion`,[de.PAGE_URL]:`${bo}.pageUrl`,[de.PURCHASE_ID]:`${bo}.purchaseId`,[de.STATE]:`${ra}.state`,[de.TRACKING_SERVER]:`${_o}.trackingServer`,[de.TRACKING_SERVER_SECURE]:`${_o}.trackingServer`,[de.ZIP]:`${ra}.zipCode`},So=(Object.entries(u).map((([e])=>e)),(e,[t,n])=>(e[t]=Ba(n),e)),To=(e,{name:t,fn:n})=>{const a=n();return a&&(e[t]=a),e},No=(e={})=>{const{beacon:t={},type:n,overwriteProducts:a}=e;if(n!==Dr.PAGE_LOAD)return e;const r={...ho,...Object.entries(Ao).reduce(So,{}),...Object.values(u).reduce(To,{})};Ha(Ir.PATHS.DEFERRED_BEACON);const o={};return a&&(o[de.PRODUCTS]=Yr),{...e,beacon:zr({target:r,source:t,mergers:o})}},ko=[".pinwheel ",".as - pinwheel ",".billboard ",".pd - billboard ",".dd - billboard ",".dd - compare ",".as - segment - banner ",".as - ribbon ",".as - pinwheel - carousel ",".as - pdp - othersalsobought ",".as - producttiles ",".as - watch - grid ",".as - similar - styles ",'[data-analytics-type^="
                recommendations " i]',".as - bagrecommendations - recommendations ",".as - bagrecommendations - spotlight ",'[data-analytics-section^="
                mzone " i]','[data-analytics-type="
                list " i]'].join(),Oo=[".tile ",".as - pinwheel - tile ",".plate ",".pd - l - plate ",".pd - l - plate - scale ",".as - ribbon - container ",".as - segment - banner - content ",".as - pdp - othersalsobought - tile ",".as - producttile - title ",".rs - wuipselect - grid - tile ",'[role="
                listitem "]','[data-analytics-type="
                list - item " i]'].join(),wo=({element:e,parent:t,registerPurchaseJourney:n,assetType:a,position:r}={})=>{let o=(e=>e.dataset.basePartNumber||e.dataset.partNumber||"
                ")(e),i=(e=>e.dataset.category||"
                ")(e);const s=(e=>e.dataset?.recoId||"
                ")(e);if("
                "===o)if(e.dataset.moduleId)o=e.dataset.moduleId,i="
                content ";else{const t=e.closest('[role="
                listitem "]');t&&t.dataset.moduleId&&(o=t.dataset.moduleId,i="
                content ")}const c="
                content "===i?new Nt({moduleId:o,category:i}):new St({sku:o,category:i});return a&&c.variables.add(new _t(de.EVAR_60,a)),s&&c.variables.add(new _t(de.EVAR_64,s)),c.variables.add(new _t(de.EVAR_65,r||(({element:e,parent:t}={})=>{const n=e.closest(Oo);if(!n)return"
                1 / 1 ";const a=Array.from(t.querySelectorAll(Oo));return`${a.indexOf(n)+1||1}/${a.length||1}`})({element:e,parent:t}))),n&&(({element:e,product:t,assetType:n})=>{!t.sku||e.dataset.evar11||e.dataset.purchaseJourney||Ka(t.sku,n)})({element:e,product:c,assetType:a}),c},{getPartNumber:Ro}=t,Co=/^mZone:/i,Io=[(e={})=>e.parent.classList.contains("
                as - ribbon ")?wo({...e,assetType:"
                ribbon "}):null,(e={})=>{const{parent:t}=e;if(!t.classList.contains("
                pinwheel ")&&!t.classList.contains("
                as - pinwheel ")&&!t.classList.contains("
                as - pinwheel - carousel "))return null;const n=wo({...e,assetType:"
                pinwheel "});return t.dataset.template&&n.variables.add(new _t(de.EVAR_61,t.dataset.template)),n},(e={})=>{const{element:t,parent:n}=e;if(!n.dataset.analyticsType)return null;const[a,r]=n.dataset.analyticsType.toLowerCase().split(": ",2);if("
                recommendations "!==a||!r)return null;const o=n.dataset.mzone?n.dataset.mzone.toLowerCase():"
                aos_ "+r+"
                _recommendations ",i=wo({...e,assetType:o}),s="
                bag - spotlight "===r||"
                pdp - spotlight "===r?"
                curated ":t.dataset.algorithmType;s&&i.variables.add(new _t(de.EVAR_61,s));const c=Ro({element:t,parent:n});return"
                pdp "===r&&c&&i.variables.add(new _t(de.EVAR_69,c)),i},(e={})=>{const{element:t,parent:n=null}=e;if(!(t&&n&&n.dataset.analyticsSection&&Co.test(n.dataset.analyticsSection)))return null;const a=n.dataset.analyticsSection.split(": ")[1],r=wo({...e,assetType:a}),o=t.closest('[role="
                listitem "]'),i=t.dataset.ruleId||o.dataset.ruleId;return i&&r.variables.add(new _t(de.EVAR_61,i)),r},(e={})=>{const{element:t,parent:n}=e;if(!n.classList.contains("
                as - pdp - othersalsobought "))return null;const a=wo({...e,assetType:"
                aos_pdp_recommendations "});return t.dataset.algorithmType&&a.variables.add(new _t(de.EVAR_61,t.dataset.algorithmType)),n.dataset.basePartNumber&&a.variables.add(new _t(de.EVAR_69,n.dataset.basePartNumber)),a},(e={})=>{const{element:t,parent:n}=e;if(!n.classList.contains("
                as - bagrecommendations - recommendations "))return null;const a=wo({...e,assetType:"
                aos_bag_recommendations "});return t.dataset.algorithmType&&a.variables.add(new _t(de.EVAR_61,t.dataset.algorithmType)),a},(e={})=>{if(!e.parent.classList.contains("
                as - bagrecommendations - spotlight "))return null;const t=wo({...e,assetType:"
                aos_configurable_spotlight "});return t.variables.add(new _t(de.EVAR_61,"
                curated ")),t},(e={})=>{const t=e.parent.classList.contains("
                as - watch - grid "),n="
                grid: watch "===e.parent.dataset.analyticsType;return t||n?wo({...e,assetType:"
                watch grid ",registerPurchaseJourney:!1}):null},(e={})=>e.parent.classList.contains("
                as - similar - styles ")?wo({...e,assetType:"
                watch_styles ",registerPurchaseJourney:!1}):null,(e={})=>e.parent.classList.contains("
                pd - billboard ")||e.parent.classList.contains("
                dd - billboard ")||e.parent.classList.contains("
                dd - compare ")?wo({...e,assetType:"
                billboard "}):null,(e={})=>wo({...e,assetType:"
                unknown "})],Po=(e={})=>e.element instanceof HTMLElement&&e.parent instanceof HTMLElement?Io.reduce(((t,n)=>t||n(e)),null):null,Do=()=>{function e(e){var t=this;t.version="
                2.23 .0 ";var n=window;n.s_c_in||(n.s_c_il=[],n.s_c_in=0),t._il=n.s_c_il,t._in=n.s_c_in,t._il[t._in]=t,n.s_c_in++,t._c="
                s_c ";var a=n.AppMeasurement.mc;a||(a=null);var r,o,i,s=n;try{for(r=s.parent,o=s.location;r&&r.location&&o&&"
                "+r.location!="
                "+o&&s.location&&"
                "+r.location!="
                "+s.location&&r.location.host===o.host;)r=(s=r).parent}catch(e){}t.log=function(e){try{console.log(e)}catch(e){}},t.Sa=function(e){return"
                "+parseInt(e)=="
                "+e},t.replace=function(e,t,n){return!e||0>e.indexOf(t)?e:e.split(t).join(n)},t.escape=function(e){var n,a;if(!e)return e;for(e=encodeURIComponent(e),n=0;7>n;n++)a=" + ~! * ()
                '".substring(n,n+1),0<=e.indexOf(a)&&(e=t.replace(e,a,"%"+a.charCodeAt(0).toString(16).toUpperCase()));return e},t.unescape=function(e){if(!e)return e;e=0<=e.indexOf("+")?t.replace(e,"+"," "):e;try{return decodeURIComponent(e)}catch(e){}return unescape(e)},t.Rb=function(){var e,a=n.location.hostname,r=t.fpCookieDomainPeriods;if(r||(r=t.cookieDomainPeriods),a&&!t.La&&!/^[0-9.]+$/.test(a)&&(r=2<(r=r?parseInt(r):2)?r:2,0<=(e=a.lastIndexOf(".")))){for(;0<=e&&1<r;)e=a.lastIndexOf(".",e-1),r--;t.La=0<e?a.substring(e):a}return t.La},t.c_r=t.cookieRead=function(e){e=t.escape(e);var n=" "+t.d.cookie,a=n.indexOf(" "+e+"="),r=0>a?a:n.indexOf(";",a);return"[[B]]"!=(e=0>a?"":t.unescape(n.substring(a+2+e.length,0>r?n.length:r)))?e:""},t.c_w=t.cookieWrite=function(e,n,a){var r,o=t.Rb(),i=t.cookieLifetime;return n=""+n,i=i?(""+i).toUpperCase():"",a&&"SESSION"!=i&&"NONE"!=i&&((r=""!=n?parseInt(i||0):-60)?(a=new Date).setTime(a.getTime()+1e3*r):1===a&&(r=(a=new Date).getYear(),a.setYear(r+2+(1900>r?1900:0)))),e&&"NONE"!=i?(t.d.cookie=t.escape(e)+"="+t.escape(""!=n?n:"[[B]]")+"; path=/;"+(a&&"SESSION"!=i?" expires="+a.toUTCString()+";":"")+(o?" domain="+o+";":"")+(t.writeSecureCookies?" secure;":""),t.cookieRead(e)==n):0},t.Ob=function(){var e=t.Util.getIeVersion();"number"==typeof e&&10>e&&(t.unsupportedBrowser=!0,t.Bb(t,(function(){})))},t.za=function(){var e=navigator.userAgent;return"Microsoft Internet Explorer"===navigator.appName||0<=e.indexOf("MSIE ")||0<=e.indexOf("Trident/")&&0<=e.indexOf("Windows NT 6")},t.Bb=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&"function"==typeof e[n]&&(e[n]=t)},t.K=[],t.fa=function(e,n,a){if(t.Ma)return 0;t.maxDelay||(t.maxDelay=250);var r=0,o=(new Date).getTime()+t.maxDelay,i=t.d.visibilityState,s=["webkitvisibilitychange","visibilitychange"];if(i||(i=t.d.webkitVisibilityState),i&&"prerender"==i){if(!t.ga)for(t.ga=1,a=0;a<s.length;a++)t.d.addEventListener(s[a],(function(){var e=t.d.visibilityState;e||(e=t.d.webkitVisibilityState),"visible"==e&&(t.ga=0,t.delayReady())}));r=1,o=0}else a||t.u("_d")&&(r=1);return r&&(t.K.push({m:e,a:n,t:o}),t.ga||setTimeout(t.delayReady,t.maxDelay)),r},t.delayReady=function(){var e,n=(new Date).getTime(),a=0;for(t.u("_d")?a=1:t.Ba();0<t.K.length;){if(e=t.K.shift(),a&&!e.t&&e.t>n){t.K.unshift(e),setTimeout(t.delayReady,parseInt(t.maxDelay/2));break}t.Ma=1,t[e.m].apply(t,e.a),t.Ma=0}},t.setAccount=t.sa=function(e){var n,a;if(!t.fa("setAccount",arguments))if(t.account=e,t.allAccounts)for(n=t.allAccounts.concat(e.split(",")),t.allAccounts=[],n.sort(),a=0;a<n.length;a++)0!=a&&n[a-1]==n[a]||t.allAccounts.push(n[a]);else t.allAccounts=e.split(",")},t.foreachVar=function(e,n){var a,r,o,i,s="";for(o=r="",t.lightProfileID?(a=t.O,(s=t.lightTrackVars)&&(s=","+s+","+t.la.join(",")+",")):(a=t.g,(t.pe||t.linkType)&&(s=t.linkTrackVars,r=t.linkTrackEvents,t.pe&&(o=t.pe.substring(0,1).toUpperCase()+t.pe.substring(1),t[o]&&(s=t[o].ic,r=t[o].hc))),s&&(s=","+s+","+t.D.join(",")+","),r&&s&&(s+=",events,")),n&&(n=","+n+","),r=0;r<a.length;r++)o=a[r],(i=t[o])&&(!s||0<=s.indexOf(","+o+","))&&(!n||0<=n.indexOf(","+o+","))&&e(o,i)},t.l=function(e,n,a,r,o){var i,s,c,l,d="",u=0;if("contextData"==e&&(e="c"),"clientHints"==e&&(e="h"),n){for(i in n)if(!(Object.prototype[i]||o&&i.substring(0,o.length)!=o)&&n[i]&&(!a||0<=a.indexOf(","+(r?r+".":"")+i+","))){if(c=!1,u)for(s=0;s<u.length;s++)if(i.substring(0,u[s].length)==u[s]){c=!0;break}if(!c&&(""==d&&(d+="&"+e+"."),s=n[i],o&&(i=i.substring(o.length)),0<i.length))if(0<(c=i.indexOf(".")))c=(o||"")+(s=i.substring(0,c))+".",u||(u=[]),u.push(c),d+=t.l(s,n,a,r,c);else if("boolean"==typeof s&&(s=s?"true":"false"),s){if("retrieveLightData"==r&&0>o.indexOf(".contextData."))switch(c=i.substring(0,4),l=i.substring(4),i){case"transactionID":i="xact";break;case"channel":i="ch";break;case"campaign":i="v0";break;default:t.Sa(l)&&("prop"==c?i="c"+l:"eVar"==c?i="v"+l:"list"==c?i="l"+l:"hier"==c&&(i="h"+l,s=s.substring(0,255)))}d+="&"+t.escape(i)+"="+t.escape(s)}}""!=d&&(d+="&."+e)}return d},t.usePostbacks=0,t.Ub=function(){var e,n,r,o,i,s,c,l,d="",u="",p="",g=o="",m=t.T();if(t.lightProfileID?(e=t.O,(u=t.lightTrackVars)&&(u=","+u+","+t.la.join(",")+",")):(e=t.g,(t.pe||t.linkType)&&(u=t.linkTrackVars,p=t.linkTrackEvents,t.pe&&(o=t.pe.substring(0,1).toUpperCase()+t.pe.substring(1),t[o]&&(u=t[o].ic,p=t[o].hc))),u&&(u=","+u+","+t.D.join(",")+","),p&&(p=","+p+",",u&&(u+=",events,")),t.events2&&(g+=(""!=g?",":"")+t.events2)),m&&m.getCustomerIDs){if(o=a,i=m.getCustomerIDs())for(n in i)Object.prototype[n]||"object"==typeof(r=i[n])&&(o||(o={}),r.id&&(o[n+".id"]=r.id),r.authState&&(o[n+".as"]=r.authState));o&&(d+=t.l("cid",o))}for(t.AudienceManagement&&t.AudienceManagement.isReady()&&(d+=t.l("d",t.AudienceManagement.getEventCallConfigParams())),n=0;n<e.length;n++){if(o=e[n],i=t[o],r=o.substring(0,4),s=o.substring(4),i||("events"==o&&g?(i=g,g=""):"marketingCloudOrgID"==o&&m&&t.V("ECID")&&(i=m.marketingCloudOrgID)),i&&(!u||0<=u.indexOf(","+o+","))){switch(o){case"customerPerspective":o="cp";break;case"marketingCloudOrgID":o="mcorgid";break;case"supplementalDataID":o="sdid";break;case"timestamp":o="ts";break;case"dynamicVariablePrefix":o="D";break;case"visitorID":o="vid";break;case"marketingCloudVisitorID":o="mid";break;case"analyticsVisitorID":o="aid";break;case"audienceManagerLocationHint":o="aamlh";break;case"audienceManagerBlob":o="aamb";break;case"authState":o="as";break;case"pageURL":o="g",255<i.length&&(t.pageURLRest=i.substring(255),i=i.substring(0,255));break;case"pageURLRest":o="-g";break;case"referrer":o="r";break;case"vmk":case"visitorMigrationKey":o="vmt";break;case"visitorMigrationServer":o="vmf",t.ssl&&t.visitorMigrationServerSecure&&(i="");break;case"visitorMigrationServerSecure":o="vmf",!t.ssl&&t.visitorMigrationServer&&(i="");break;case"charSet":o="ce";break;case"visitorNamespace":o="ns";break;case"cookieDomainPeriods":o="cdp";break;case"cookieLifetime":o="cl";break;case"variableProvider":o="vvp";break;case"currencyCode":o="cc";break;case"channel":o="ch";break;case"transactionID":o="xact";break;case"campaign":o="v0";break;case"latitude":o="lat";break;case"longitude":o="lon";break;case"resolution":o="s";break;case"colorDepth":o="c";break;case"javascriptVersion":o="j";break;case"javaEnabled":o="v";break;case"cookiesEnabled":o="k";break;case"browserWidth":o="bw";break;case"browserHeight":o="bh";break;case"connectionType":o="ct";break;case"homepage":o="hp";break;case"events":if(g&&(i+=(""!=i?",":"")+g),p)for(s=i.split(","),i="",r=0;r<s.length;r++)0<=(l=(c=s[r]).indexOf("="))&&(c=c.substring(0,l)),0<=(l=c.indexOf(":"))&&(c=c.substring(0,l)),0<=p.indexOf(","+c+",")&&(i+=(i?",":"")+s[r]);break;case"events2":i="";break;case"contextData":d+=t.l("c",t[o],u,o),i="";break;case"clientHints":d+=t.l("h",t[o],u,o),i="";break;case"lightProfileID":o="mtp";break;case"lightStoreForSeconds":o="mtss",t.lightProfileID||(i="");break;case"lightIncrementBy":o="mti",t.lightProfileID||(i="");break;case"retrieveLightProfiles":o="mtsr";break;case"deleteLightProfiles":o="mtsd";break;case"retrieveLightData":t.retrieveLightProfiles&&(d+=t.l("mts",t[o],u,o)),i="";break;default:t.Sa(s)&&("prop"==r?o="c"+s:"eVar"==r?o="v"+s:"list"==r?o="l"+s:"hier"==r&&(o="h"+s,i=i.substring(0,255)))}i&&(d+="&"+o+"="+("pev"!=o.substring(0,3)?t.escape(i):i))}"pev3"==o&&t.e&&(d+=t.e)}return t.ka&&(d+="&lrt="+t.ka,t.ka=null),d},t.B=function(e){var t=e.tagName;return"undefined"!=""+e.pc||"undefined"!=""+e.cc&&"HTML"!=(""+e.cc).toUpperCase()?"":("SHAPE"==(t=t&&t.toUpperCase?t.toUpperCase():"")&&(t=""),t&&(("INPUT"==t||"BUTTON"==t)&&e.type&&e.type.toUpperCase?t=e.type.toUpperCase():!t&&e.href&&(t="A")),t)},t.Oa=function(e){var t,a,r,o=n.location,i=e.href?e.href:"";return"string"!=typeof i&&(i=""),t=i.indexOf(":"),a=i.indexOf("?"),r=i.indexOf("/"),i&&(0>t||0<=a&&t>a||0<=r&&t>r)&&(a=e.protocol&&1<e.protocol.length?e.protocol:o.protocol?o.protocol:"",t=o.pathname.lastIndexOf("/"),i=(a?a+"//":"")+(e.host?e.host:o.host?o.host:"")+("/"!=i.substring(0,1)?o.pathname.substring(0,0>t?0:t)+"/":"")+i),i},t.L=function(e){var n,a,r=t.B(e),o="",i=0;return r&&(n=e.protocol,a=e.onclick,!e.href||"A"!=r&&"AREA"!=r||a&&n&&!(0>n.toLowerCase().indexOf("javascript"))?a?(o=t.replace(t.replace(t.replace(t.replace(""+a,"\r",""),"\n",""),"\t","")," ",""),i=2):"INPUT"==r||"SUBMIT"==r?(e.value?o=e.value:e.innerText?o=e.innerText:e.textContent&&(o=e.textContent),i=3):"IMAGE"==r&&e.src&&(o=e.src):o=t.Oa(e),o)?{id:o.substring(0,100),type:i}:0},t.nc=function(e){for(var n=t.B(e),a=t.L(e);e&&!a&&"BODY"!=n;)(e=e.parentElement?e.parentElement:e.parentNode)&&(n=t.B(e),a=t.L(e));return a&&"BODY"!=n||(e=0),e&&(0<=(n=e.onclick?""+e.onclick:"").indexOf(".tl(")||0<=n.indexOf(".trackLink("))&&(e=0),e},t.bc=function(){var e,a,r,o,i=t.linkObject,s=t.linkType,c=t.linkURL;if(t.ma=1,i||(t.ma=0,i=t.clickObject),i){for(e=t.B(i),a=t.L(i);i&&!a&&"BODY"!=e;)(i=i.parentElement?i.parentElement:i.parentNode)&&(e=t.B(i),a=t.L(i));if(a&&"BODY"!=e||(i=0),i&&!t.linkObject){var l=i.onclick?""+i.onclick:"";(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))&&(i=0)}}else t.ma=1;if(!c&&i&&(c=t.Oa(i)),c&&!t.linkLeaveQueryString&&0<=(r=c.indexOf("?"))&&(c=c.substring(0,r)),!s&&c){var d,u=0,p=0;if(t.trackDownloadLinks&&t.linkDownloadFileTypes)for(r=(l=c.toLowerCase()).indexOf("?"),o=l.indexOf("#"),0<=r?0<=o&&o<r&&(r=o):r=o,0<=r&&(l=l.substring(0,r)),r=t.linkDownloadFileTypes.toLowerCase().split(","),o=0;o<r.length;o++)(d=r[o])&&l.substring(l.length-(d.length+1))=="."+d&&(s="d");if(t.trackExternalLinks&&!s&&(l=c.toLowerCase(),t.Ra(l)&&(t.linkInternalFilters||(t.linkInternalFilters=n.location.hostname),r=0,t.linkExternalFilters?(r=t.linkExternalFilters.toLowerCase().split(","),u=1):t.linkInternalFilters&&(r=t.linkInternalFilters.toLowerCase().split(",")),r))){for(o=0;o<r.length;o++)d=r[o],0<=l.indexOf(d)&&(p=1);p?u&&(s="e"):u||(s="e")}}t.linkObject=i,t.linkURL=c,t.linkType=s,(t.trackClickMap||t.trackInlineStats)&&(t.e="",i&&(s=t.pageName,c=1,i=i.sourceIndex,s||(s=t.pageURL,c=0),n.s_objectID&&(a.id=n.s_objectID,i=a.type=1),s&&a&&a.id&&e&&(t.e="&pid="+t.escape(s.substring(0,255))+(c?"&pidt="+c:"")+"&oid="+t.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+e+(i?"&oi="+i:""))))},t.Vb=function(){var e=t.ma,n=t.linkType,a=t.linkURL,r=t.linkName;if(n&&(a||r)&&("d"!=(n=n.toLowerCase())&&"e"!=n&&(n="o"),t.pe="lnk_"+n,t.pev1=a?t.escape(a):"",t.pev2=r?t.escape(r):"",e=1),t.abort&&(e=0),t.trackClickMap||t.trackInlineStats||t.Yb()){n={},a=0;var o,i,s,c=(l=t.vb())?l.split("&"):0,l=0;if(c)for(o=0;o<c.length;o++)i=c[o].split("="),r=t.unescape(i[0]).split(","),n[i=t.unescape(i[1])]=r;for(s in r=t.account.split(","),o={},t.contextData)s&&!Object.prototype[s]&&"a.activitymap."==s.substring(0,14)&&(o[s]=t.contextData[s],t.contextData[s]="");if(t.e=t.l("c",o)+(t.e?t.e:""),e||t.e){for(i in e&&!t.e&&(l=1),n)if(!Object.prototype[i])for(s=0;s<r.length;s++)for(l&&(c=n[i].join(","))==t.account&&(t.e+=("&"!=i.charAt(0)?"&":"")+i,n[i]=[],a=1),o=0;o<n[i].length;o++)(c=n[i][o])==r[s]&&(l&&(t.e+="&u="+t.escape(c)+("&"!=i.charAt(0)?"&":"")+i+"&u=0"),n[i].splice(o,1),a=1);if(e||(a=1),a){for(i in l="",o=2,!e&&t.e&&(l=t.escape(r.join(","))+"="+t.escape(t.e),o=1),n)!Object.prototype[i]&&0<o&&0<n[i].length&&(l+=(l?"&":"")+t.escape(n[i].join(","))+"="+t.escape(i),o--);t.Db(l)}}}return e},t.vb=function(){return t.useLinkTrackSessionStorage?t.Fa()?n.sessionStorage.getItem(t.P):void 0:t.cookieRead(t.P)},t.Fa=function(){return!!n.sessionStorage},t.Db=function(e){t.useLinkTrackSessionStorage?t.Fa()&&n.sessionStorage.setItem(t.P,e):t.cookieWrite(t.P,e)},t.Wb=function(){if(!t.gc){var e,n,a,r,o=new Date,i=s.location,c=n=e="",l="1.2",d=t.cookieWrite("s_cc","true",0)?"Y":"N",u="",p="";if(o.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",(o=[]).forEach))){l="1.6",n=0,e={};try{(n=new Iterator(e)).next&&(l="1.7",o.reduce&&(l="1.8").trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5"))))}catch(e){}}e=screen.width+"x"+screen.height,c=navigator.javaEnabled()?"Y":"N",n=screen.pixelDepth?screen.pixelDepth:screen.colorDepth,a=t.w.innerWidth?t.w.innerWidth:t.d.documentElement.offsetWidth,r=t.w.innerHeight?t.w.innerHeight:t.d.documentElement.offsetHeight;try{t.b.addBehavior("#default#homePage"),u=t.b.oc(i)?"Y":"N"}catch(e){}try{t.b.addBehavior("#default#clientCaps"),p=t.b.connectionType}catch(e){}t.resolution=e,t.colorDepth=n,t.javascriptVersion=l,t.javaEnabled=c,t.cookiesEnabled=d,t.browserWidth=a,t.browserHeight=r,t.connectionType=p,t.homepage=u,t.gc=1}},t.ib=function(){if(t.collectHighEntropyUserAgentHints&&!t.H&&t.cb()){t.H=!0;try{navigator.userAgentData.getHighEntropyValues(t.ta).then((function(e){t.clientHints={},t.ta.forEach((function(n){Object.prototype.hasOwnProperty.call(e,n)&&(t.clientHints[n]=e[n])}))})).catch((function(e){t.H=!1,t.clientHints={},t.debugTracking&&t.log(e.message)}))}catch(e){t.H=!1,t.clientHints={},t.debugTracking&&t.log(e.message)}}else t.clientHints={}},t.cb=function(){return void 0!==navigator.userAgentData},t.Q={},t.loadModule=function(e,a){var r=t.Q[e];if(!r){r=n["AppMeasurement_Module_"+e]?new n["AppMeasurement_Module_"+e](t):{},t.Q[e]=t[e]=r,r.ob=function(){return r.yb},r.Eb=function(n){(r.yb=n)&&(t[e+"_onLoad"]=n,t.fa(e+"_onLoad",[t,r],1)||n(t,r))};try{Object.defineProperty?Object.defineProperty(r,"onLoad",{get:r.ob,set:r.Eb}):r._olc=1}catch(e){r._olc=1}}a&&(t[e+"_onLoad"]=a,t.fa(e+"_onLoad",[t,r],1)||a(t,r))},t.u=function(e){var n,a;for(n in t.Q)if(!Object.prototype[n]&&(a=t.Q[n])&&(a._olc&&a.onLoad&&(a._olc=0,a.onLoad(t,a)),a[e]&&a[e]()))return 1;return 0},t.Yb=function(){return!(!t.ActivityMap||!t.ActivityMap._c)},t.Zb=function(){var e=Math.floor(1e13*Math.random()),n=t.visitorSampling,a=t.visitorSamplingGroup,r=(a="s_vsn_"+(t.visitorNamespace?t.visitorNamespace:t.account)+(a?"_"+a:""),t.cookieRead(a));if(n){if(n*=100,r&&(r=parseInt(r)),!r){if(!t.cookieWrite(a,e))return 0;r=e}if(r%1e4>n)return 0}return 1},t.S=function(e,n){var a,r,o,i,s,c,l;for(l={},a=0;2>a;a++)for(r=0<a?t.Ha:t.g,o=0;o<r.length;o++)if((s=e[i=r[o]])||e["!"+i]){if(s&&!n&&("contextData"==i||"retrieveLightData"==i)&&t[i])for(c in t[i])s[c]||(s[c]=t[i][c]);t[i]||(l["!"+i]=1),l[i]=t[i],t[i]=s}return l},t.lc=function(e){var n,a,r,o;for(n=0;2>n;n++)for(a=0<n?t.Ha:t.g,r=0;r<a.length;r++)e[o=a[r]]=t[o],e[o]||"prop"!==o.substring(0,4)&&"eVar"!==o.substring(0,4)&&"hier"!==o.substring(0,4)&&"list"!==o.substring(0,4)&&"channel"!==o&&"events"!==o&&"eventList"!==o&&"products"!==o&&"productList"!==o&&"purchaseID"!==o&&"transactionID"!==o&&"state"!==o&&"zip"!==o&&"campaign"!==o&&"events2"!==o&&"latitude"!==o&&"longitude"!==o&&"ms_a"!==o&&"contextData"!==o&&"supplementalDataID"!==o&&"tnt"!==o&&"timestamp"!==o&&"abort"!==o&&"useBeacon"!==o&&"linkObject"!==o&&"clickObject"!==o&&"linkType"!==o&&"linkName"!==o&&"linkURL"!==o&&"bodyClickTarget"!==o&&"bodyClickFunction"!==o||(e["!"+o]=1)},t.Qb=function(e){var t,n,a,r,o,i,s=0,c="",l="";if(e&&255<e.length&&0<(n=(t=""+e).indexOf("?"))&&(i=t.substring(n+1),a=0,"http://"==(r=(t=t.substring(0,n)).toLowerCase()).substring(0,7)?a+=7:"https://"==r.substring(0,8)&&(a+=8),0<(n=r.indexOf("/",a))&&(r=r.substring(a,n),o=t.substring(n),t=t.substring(0,n),0<=r.indexOf("google")?s=",q,ie,start,search_key,word,kw,cd,":0<=r.indexOf("yahoo.co")?s=",p,ei,":0<=r.indexOf("baidu.")&&(s=",wd,word,"),s&&i))){if((e=i.split("&"))&&1<e.length){for(a=0;a<e.length;a++)0<(n=(r=e[a]).indexOf("="))&&0<=s.indexOf(","+r.substring(0,n)+",")?c+=(c?"&":"")+r:l+=(l?"&":"")+r;c&&l?i=c+"&"+l:l=""}e=t+(0<(n=253-(i.length-l.length)-t.length)?o.substring(0,n):"")+"?"+i}return e},t.gb=function(e){var n=t.d.visibilityState,a=["webkitvisibilitychange","visibilitychange"];if(n||(n=t.d.webkitVisibilityState),n&&"prerender"==n){if(e)for(n=0;n<a.length;n++)t.d.addEventListener(a[n],(function(){var n=t.d.visibilityState;n||(n=t.d.webkitVisibilityState),"visible"==n&&e()}));return!1}return!0},t.ca=!1,t.G=!1,t.Gb=function(){t.G=!0,t.p()},t.I=!1,t.Hb=function(e){t.marketingCloudVisitorID=e.MCMID,t.visitorOptedOut=e.MCOPTOUT,t.analyticsVisitorID=e.MCAID,t.audienceManagerLocationHint=e.MCAAMLH,t.audienceManagerBlob=e.MCAAMB,t.I=!1,t.p()},t.fb=function(e){return t.maxDelay||(t.maxDelay=250),!t.u("_d")||(e&&setTimeout((function(){e()}),t.maxDelay),!1)},t.aa=!1,t.F=!1,t.Ba=function(){t.F=!0,t.p()},t.isReadyToTrack=function(){var e=!0;return!(!t.sb()||!t.qb())&&(t.ub()||(e=!1),t.xb()||(e=!1),t.hb()||(e=!1),e)},t.sb=function(){return t.ca||t.G||(t.gb(t.Gb)?t.G=!0:t.ca=!0),!(t.ca&&!t.G)},t.qb=function(){var e=t.xa();if(e){if(!t.ua&&!t.ba)return e.fetchPermissions(t.zb,!0),t.ba=!0,!1;if(!t.ua)return!1;if(!e.isApproved(e.Categories.ANALYTICS))return!1}return!0},t.V=function(e){var n=t.xa();return!(n&&!n.isApproved(n.Categories[e]))},t.xa=function(){return n.adobe&&n.adobe.optIn?n.adobe.optIn:null},t.Y=!0,t.ub=function(){var e=t.T();return!e||!e.getVisitorValues||(t.Y&&(t.Y=!1,t.I||(t.I=!0,e.getVisitorValues(t.Hb))),!t.I)},t.T=function(){var e=t.visitor;return e&&!e.isAllowed()&&(e=null),e},t.xb=function(){return t.aa||t.F||(t.fb(t.Ba)?t.F=!0:t.aa=!0),!(t.aa&&!t.F)},t.hb=function(){return t.H||t.clientHints||t.ib(),t.clientHints},t.ba=!1,t.zb=function(){t.ba=!1,t.ua=!0},t.j=a,t.q=0,t.callbackWhenReadyToTrack=function(e,n,r){var o;(o={}).Lb=e,o.Kb=n,o.Ib=r,t.j==a&&(t.j=[]),t.j.push(o),0==t.q&&(t.q=setInterval(t.p,100))},t.p=function(){var e;if(t.isReadyToTrack()&&(t.Fb(),t.j!=a))for(;0<t.j.length;)(e=t.j.shift()).Kb.apply(e.Lb,e.Ib)},t.Fb=function(){t.q&&(clearInterval(t.q),t.q=0)},t.va=function(e){var n,r={};if(t.lc(r),e!=a)for(n in e)r[n]=e[n];t.callbackWhenReadyToTrack(t,t.Ga,[r]),t.Ea()},t.Sb=function(){var e,n=t.cookieRead("s_fid"),a="",r="";e=8;var o=4;if(!n||0>n.indexOf("-")){for(n=0;16>n;n++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*o),r+="0123456789ABCDEF".substring(e,e+1),e=o=16;n=a+"-"+r}return t.cookieWrite("s_fid",n,1)||(n=0),n},t.Ga=function(e){var a,r=new Date,o="s"+Math.floor(r.getTime()/108e5)%10+Math.floor(1e13*Math.random()),i=r.getYear(),c=(i="t="+t.escape(r.getDate()+"/"+r.getMonth()+"/"+(1900>i?i+1900:i)+" "+r.getHours()+":"+r.getMinutes()+":"+r.getSeconds()+" "+r.getDay()+" "+r.getTimezoneOffset()),t.T());e&&(a=t.S(e,1)),t.Zb()&&!t.visitorOptedOut&&(t.ya()||(t.fid=t.Sb()),t.bc(),t.usePlugins&&t.doPlugins&&t.doPlugins(t),t.account&&(t.abort||(t.trackOffline&&!t.timestamp&&(t.timestamp=Math.floor(r.getTime()/1e3)),e=n.location,t.pageURL||(t.pageURL=e.href?e.href:e),t.referrer||t.ab||(e=t.Util.getQueryParam("adobe_mc_ref",null,null,!0),t.referrer=e||void 0===e?void 0===e?"":e:s.document.referrer),t.ab=1,!t.referrer&&t.Z&&(t.referrer=t.Z),t.Z=0,t.referrer=t.Qb(t.referrer),t.u("_g")),t.Vb()&&!t.abort&&(c&&t.V("TARGET")&&!t.supplementalDataID&&c.getSupplementalDataID&&(t.supplementalDataID=c.getSupplementalDataID("AppMeasurement:"+t._in,!t.expectSupplementalData)),t.V("AAM")||(t.contextData["cm.ssf"]=1),t.Wb(),t.Ab(),i+=t.Ub(),t.wb(o,i),t.u("_t"),t.referrer="",t.contextData&&t.contextData.excCodes&&(t.contextData.excCodes=0)))),t.referrer&&(t.Z=t.referrer),t.Ea(),a&&t.S(a,1)},t.t=t.track=function(e,n){n&&t.S(n),t.Y=!0,t.isReadyToTrack()?null!=t.j&&0<t.j.length?(t.va(e),t.p()):t.Ga(e):t.va(e)},t.Ab=function(){t.writeSecureCookies&&!t.ssl&&t.bb()},t.bb=function(){t.contextData.excCodes=t.contextData.excCodes||[],t.contextData.excCodes.push(1)},t.Ea=function(){t.abort=t.supplementalDataID=t.timestamp=t.pageURLRest=t.linkObject=t.clickObject=t.linkURL=t.linkName=t.linkType=n.s_objectID=t.pe=t.pev1=t.pev2=t.pev3=t.e=t.lightProfileID=t.useBeacon=t.referrer=0},t.Da=[],t.registerPreTrackCallback=function(e){for(var n=[],a=1;a<arguments.length;a++)n.push(arguments[a]);"function"==typeof e?t.Da.push([e,n]):t.debugTracking&&t.log("Warning, Non function type passed to registerPreTrackCallback")},t.lb=function(e){t.wa(t.Da,e)},t.Ca=[],t.registerPostTrackCallback=function(e){for(var n=[],a=1;a<arguments.length;a++)n.push(arguments[a]);"function"==typeof e?t.Ca.push([e,n]):t.debugTracking&&t.log("Warning, Non function type passed to registerPostTrackCallback")},t.kb=function(e){t.wa(t.Ca,e)},t.wa=function(e,n){if("object"==typeof e)for(var a=0;a<e.length;a++){var r=e[a][0],o=e[a][1].slice();if(o.unshift(n),"function"==typeof r)try{r.apply(null,o)}catch(e){t.debugTracking&&t.log(e.message)}}},t.tl=t.trackLink=function(e,n,a,r,o){return t.linkObject=e,t.linkType=n,t.linkName=a,o&&(t.bodyClickTarget=e,t.bodyClickFunction=o),t.track(r)},t.trackLight=function(e,n,a,r){return t.lightProfileID=e,t.lightStoreForSeconds=n,t.lightIncrementBy=a,t.track(r)},t.clearVars=function(){var e,n;for(e=0;e<t.g.length;e++)("prop"==(n=t.g[e]).substring(0,4)||"eVar"==n.substring(0,4)||"hier"==n.substring(0,4)||"list"==n.substring(0,4)||"channel"==n||"events"==n||"eventList"==n||"products"==n||"productList"==n||"purchaseID"==n||"transactionID"==n||"state"==n||"zip"==n||"campaign"==n)&&(t[n]=void 0)},t.tagContainerMarker="",t.wb=function(e,n){var a=t.mb()+"/"+e+"?AQB=1&ndh=1&pf=1&"+(t.Aa()?"callback=s_c_il["+t._in+"].doPostbacks&et=1&":"")+n+"&AQE=1";t.lb(a),t.jb(a),t.U()},t.mb=function(){var e=t.nb();return"http"+(t.ssl?"s":"")+"://"+e+"/b/ss/"+t.account+"/"+(t.mobile?"5.":"")+(t.Aa()?"10":"1")+"/JS-"+t.version+(t.fc?"T":"")+(t.tagContainerMarker?"-"+t.tagContainerMarker:"")},t.Aa=function(){return t.AudienceManagement&&t.AudienceManagement.isReady()||0!=t.usePostbacks},t.nb=function(){var e=t.dc,n=t.trackingServer;return n?t.trackingServerSecure&&t.ssl&&(n=t.trackingServerSecure):("d1"==(e=e?(""+e).toLowerCase():"d1")?e="112":"d2"==e&&(e="122"),n=t.pb()+"."+e+".2o7.net"),n},t.pb=function(){var e=t.visitorNamespace;return e||(e=(e=t.account.split(",")[0]).replace(/[^0-9a-z]/gi,"")),e},t.$a=/{(%?)(.*?)(%?)}/,t.kc=RegExp(t.$a.source,"g"),t.Pb=function(e){if("object"==typeof e.dests)for(var n=0;n<e.dests.length;++n){var a=e.dests[n];if("string"==typeof a.c&&"aa."==a.id.substr(0,3))for(var r=a.c.match(t.kc),o=0;o<r.length;++o){var i=r[o],s=i.match(t.$a),c="";"%"==s[1]&&"timezone_offset"==s[2]?c=(new Date).getTimezoneOffset():"%"==s[1]&&"timestampz"==s[2]&&(c=t.Tb()),a.c=a.c.replace(i,t.escape(c))}}},t.Tb=function(){var e=new Date,n=new Date(6e4*Math.abs(e.getTimezoneOffset()));return t.k(4,e.getFullYear())+"-"+t.k(2,e.getMonth()+1)+"-"+t.k(2,e.getDate())+"T"+t.k(2,e.getHours())+":"+t.k(2,e.getMinutes())+":"+t.k(2,e.getSeconds())+(0<e.getTimezoneOffset()?"-":"+")+t.k(2,n.getUTCHours())+":"+t.k(2,n.getUTCMinutes())},t.k=function(e,t){return(Array(e+1).join(0)+t).slice(-e)},t.qa={},t.doPostbacks=function(e){if("object"==typeof e)if(t.Pb(e),"object"==typeof t.AudienceManagement&&"function"==typeof t.AudienceManagement.isReady&&t.AudienceManagement.isReady()&&"function"==typeof t.AudienceManagement.passData)t.AudienceManagement.passData(e);else if("object"==typeof e&&"object"==typeof e.dests)for(var n=0;n<e.dests.length;++n){var a=e.dests[n];"object"==typeof a&&"string"==typeof a.c&&"string"==typeof a.id&&"aa."==a.id.substr(0,3)&&(t.qa[a.id]=new Image,t.qa[a.id].alt="",t.qa[a.id].src=a.c)}},t.jb=function(e){t.i||t.Xb(),t.i.push(e),t.ja=t.A(),t.Za()},t.Xb=function(){t.i=t.$b(),t.i||(t.i=[])},t.$b=function(){var e,a;if(t.pa()){try{(a=n.localStorage.getItem(t.na()))&&(e=n.JSON.parse(a))}catch(e){}return e}},t.pa=function(){var e=!0;return t.trackOffline&&t.offlineFilename&&n.localStorage&&n.JSON||(e=!1),e},t.Pa=function(){var e=0;return t.i&&(e=t.i.length),t.o&&e++,e},t.U=function(){if(!t.o||(t.v&&t.v.complete&&t.v.C&&t.v.R(),!t.o))if(t.Qa=a,t.oa)t.ja>t.N&&t.Xa(t.i),t.ra(500);else{var e=t.Jb();0<e?t.ra(e):(e=t.Na())&&(t.o=1,t.ac(e),t.ec(e))}},t.ra=function(e){t.Qa||(e||(e=0),t.Qa=setTimeout(t.U,e))},t.Jb=function(){var e;return!t.trackOffline||0>=t.offlineThrottleDelay?0:(e=t.A()-t.Va,t.offlineThrottleDelay<e?0:t.offlineThrottleDelay-e)},t.Na=function(){if(0<t.i.length)return t.i.shift()},t.ac=function(e){if(t.debugTracking){var n,a="AppMeasurement Debug: "+e;for(e=e.split("&"),n=0;n<e.length;n++)a+="\n\t"+t.unescape(e[n]);t.log(a)}},t.ya=function(){return t.marketingCloudVisitorID||t.analyticsVisitorID},t.X=!1;try{i=JSON.parse(' {
                    "x": "y"
                }
                ')}catch(e){i=null}for(i&&"y"==i.x?(t.X=!0,t.W=function(e){return JSON.parse(e)}):n.$&&n.$.parseJSON?(t.W=function(e){return n.$.parseJSON(e)},t.X=!0):t.W=function(){return null},t.ec=function(e){var r,o,i;if(t.rb(e)&&(o=1,r={send:function(e){t.useBeacon=!1,navigator.sendBeacon(e)?r.R():r.ha()}}),!r&&t.ya()&&2047<e.length&&(t.eb()&&(o=2,r=new XMLHttpRequest),r&&(t.AudienceManagement&&t.AudienceManagement.isReady()||0!=t.usePostbacks)&&(t.X?r.Ia=!0:r=0)),!r&&t.jc&&(e=e.substring(0,2047)),!r&&t.d.createElement&&(0!=t.usePostbacks||t.AudienceManagement&&t.AudienceManagement.isReady())&&(r=t.d.createElement("SCRIPT"))&&"async"in r&&((i=(i=t.d.getElementsByTagName("HEAD"))&&i[0]?i[0]:t.d.body)?(r.type="text/javascript",r.setAttribute("async","async"),o=3):r=0),r||(o=4,(r=new Image).alt="",r.abort||void 0===n.InstallTrigger||(r.abort=function(){r.src=a})),r.Wa=Date.now(),r.Ka=function(){try{r.C&&(clearTimeout(r.C),r.C=0)}catch(e){}},r.onload=r.R=function(){if(r.Wa&&(t.ka=Date.now()-r.Wa),t.kb(e),r.Ka(),t.Nb(),t.da(),t.o=0,t.U(),r.Ia){r.Ia=!1;try{t.doPostbacks(t.W(r.responseText))}catch(e){}}},r.onabort=r.onerror=r.ha=function(){r.Ka(),(t.trackOffline||t.oa)&&t.o&&t.i.unshift(t.Mb),t.o=0,t.ja>t.N&&t.Xa(t.i),t.da(),t.ra(500)},r.onreadystatechange=function(){4==r.readyState&&(200==r.status?r.R():r.ha())},t.Va=t.A(),1===o)r.send(e);else if(2===o)i=e.indexOf("?"),o=e.substring(0,i),i=(i=e.substring(i+1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),r.open("POST",o,!0),r.withCredentials=!0,r.send(i);else if(r.src=e,3===o){if(t.Ta)try{i.removeChild(t.Ta)}catch(e){}i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),t.Ta=t.v}r.C=setTimeout((function(){r.C&&(r.complete?r.R():(t.trackOffline&&r.abort&&r.abort(),r.ha()))}),5e3),t.Mb=e,t.v=n["s_i_"+t.replace(t.account,",","_")]=r,(t.useForcedLinkTracking&&t.J||t.bodyClickFunction)&&(t.forcedLinkTrackingTimeout||(t.forcedLinkTrackingTimeout=250),t.ea=setTimeout(t.da,t.forcedLinkTrackingTimeout))},t.rb=function(e){var n=!1;return navigator.sendBeacon&&(t.tb(e)||t.useBeacon)&&(n=!0),t.Cb(e)&&(n=!1),n},t.tb=function(e){return!!(e&&0<e.indexOf("pe=lnk_e"))},t.Cb=function(e){return 64e3<=e.length},t.eb=function(){return"undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest},t.Nb=function(){if(t.pa()&&!(t.Ua>t.N))try{n.localStorage.removeItem(t.na()),t.Ua=t.A()}catch(e){}},t.Xa=function(e){if(t.pa()){t.Za();try{n.localStorage.setItem(t.na(),n.JSON.stringify(e)),t.N=t.A()}catch(e){}}},t.Za=function(){if(t.trackOffline)for((!t.offlineLimit||0>=t.offlineLimit)&&(t.offlineLimit=10);t.i.length>t.offlineLimit;)t.Na()},t.forceOffline=function(){t.oa=!0},t.forceOnline=function(){t.oa=!1},t.na=function(){return t.offlineFilename+"-"+t.visitorNamespace+t.account},t.A=function(){return(new Date).getTime()},t.Ra=function(e){return 0!=(e=e.toLowerCase()).indexOf("#")&&0!=e.indexOf("about:")&&0!=e.indexOf("opera:")&&0!=e.indexOf("javascript:")},t.setTagContainer=function(e){var n,a,r;for(t.fc=e,n=0;n<t._il.length;n++)if((a=t._il[n])&&"s_l"==a._c&&a.tagContainerName==e){if(t.S(a),a.lmq)for(n=0;n<a.lmq.length;n++)r=a.lmq[n],t.loadModule(r.n);if(a.ml)for(r in a.ml)if(t[r])for(n in e=t[r],r=a.ml[r])!Object.prototype[n]&&("function"!=typeof r[n]||0>(""+r[n]).indexOf("s_c_il"))&&(e[n]=r[n]);if(a.mmq)for(n=0;n<a.mmq.length;n++)r=a.mmq[n],t[r.m]&&(e=t[r.m])[r.f]&&"function"==typeof e[r.f]&&(r.a?e[r.f].apply(e,r.a):e[r.f].apply(e));if(a.tq)for(n=0;n<a.tq.length;n++)t.track(a.tq[n]);a.s=t;break}},t.Util={urlEncode:t.escape,urlDecode:t.unescape,cookieRead:t.cookieRead,cookieWrite:t.cookieWrite,getQueryParam:function(e,a,r,o){var i,s="";return a||(a=t.pageURL?t.pageURL:n.location),r=r||"&",e&&a?0>(i=(a=""+a).indexOf("?"))?s:(a=r+a.substring(i+1)+r,o&&(0<=a.indexOf(r+e+r)||0<=a.indexOf(r+e+"="+r))?void 0:(0<=(i=a.indexOf("#"))&&(a=a.substr(0,i)+r),0>(i=a.indexOf(r+e+"="))||(0<=(i=(a=a.substring(i+r.length+e.length+1)).indexOf(r))&&(a=a.substring(0,i)),0<a.length&&(s=t.unescape(a))),s)):s},getIeVersion:function(){return document.documentMode?document.documentMode:t.za()?7:null}},t.D="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell clientHints currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "),t.g=t.D.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")),t.la="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "),t.O=t.la.slice(0),t.Ha="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage collectHighEntropyUserAgentHints trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "),r=0;250>=r;r++)76>r&&(t.g.push("prop"+r),t.O.push("prop"+r)),t.g.push("eVar"+r),t.O.push("eVar"+r),6>r&&t.g.push("hier"+r),4>r&&t.g.push("list"+r);r="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "),t.g=t.g.concat(r),t.D=t.D.concat(r),t.ssl=0<=n.location.protocol.toLowerCase().indexOf("https"),t.charSet="UTF-8",t.contextData={},t.ta=["architecture","bitness","model","platformVersion","wow64"],t.writeSecureCookies=!1,t.collectHighEntropyUserAgentHints=!1,t.offlineThrottleDelay=0,t.offlineFilename="AppMeasurement.offline",t.P="s_sq",t.Va=0,t.ja=0,t.N=0,t.Ua=0,t.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx",t.w=n,t.d=n.document,t.da=function(){t.ea&&(n.clearTimeout(t.ea),t.ea=a),t.bodyClickTarget&&t.J&&t.bodyClickTarget.dispatchEvent(t.J),t.bodyClickFunction&&("function"==typeof t.bodyClickFunction?t.bodyClickFunction():t.bodyClickTarget&&t.bodyClickTarget.href&&(t.d.location=t.bodyClickTarget.href)),t.bodyClickTarget=t.J=t.bodyClickFunction=0},t.Ya=function(){t.b=t.d.body,t.b?(t.r=function(e){var a,r,o,i,s;if(!(t.d&&t.d.getElementById("cppXYctnr")||e&&e["s_fe_"+t._in])){if(t.Ja){if(!t.useForcedLinkTracking)return t.b.removeEventListener("click",t.r,!0),void(t.Ja=t.useForcedLinkTracking=0);t.b.removeEventListener("click",t.r,!1)}else t.useForcedLinkTracking=0;t.clickObject=e.srcElement?e.srcElement:e.target;try{if(!t.clickObject||t.M&&t.M==t.clickObject||!(t.clickObject.tagName||t.clickObject.parentElement||t.clickObject.parentNode))t.clickObject=0;else{var c=t.M=t.clickObject;if(t.ia&&(clearTimeout(t.ia),t.ia=0),t.ia=setTimeout((function(){t.M==c&&(t.M=0)}),1e4),o=t.Pa(),t.track(),o<t.Pa()&&t.useForcedLinkTracking&&e.target){for(i=e.target;i&&i!=t.b&&"A"!=i.tagName.toUpperCase()&&"AREA"!=i.tagName.toUpperCase();)i=i.parentNode;if(i&&(s=i.href,t.Ra(s)||(s=0),r=i.target,e.target.dispatchEvent&&s&&(!r||"_self"==r||"_top"==r||"_parent"==r||n.name&&r==n.name))){try{a=t.d.createEvent("MouseEvents")}catch(e){a=new n.MouseEvent}if(a){try{a.initMouseEvent("click",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(e){a=0}a&&(a["s_fe_"+t._in]=a.s_fe=1,e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),t.bodyClickTarget=e.target,t.J=a)}}}}}catch(e){t.clickObject=0}}},t.b&&t.b.attachEvent?t.b.attachEvent("onclick",t.r):t.b&&t.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&t.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&n.MouseEvent)&&(t.Ja=1,t.useForcedLinkTracking=1,t.b.addEventListener("click",t.r,!0)),t.b.addEventListener("click",t.r,!1))):setTimeout(t.Ya,30)},t.jc=t.za(),t.Ob(),t.qc||(e?t.setAccount(e):t.log("Error, missing Report Suite ID in AppMeasurement initialization"),t.Ya(),t.loadModule("ActivityMap"))}function t(t){var n,a,r,o,i,s=window.s_c_il,c=t.split(","),l=0;if(s)for(a=0;!l&&a<s.length;){if("s_c"==(n=s[a])._c&&(n.account||n.oun))if(n.account&&n.account==t)l=1;else for(r=n.account?n.account:n.oun,r=n.allAccounts?n.allAccounts:r.split(","),o=0;o<c.length;o++)for(i=0;i<r.length;i++)c[o]==r[i]&&(l=1);a++}return l?n.setAccount&&n.setAccount(t):n=new e(t),n}return e.getInstance=t,window.s_objectID||(window.s_objectID=0),function(){var e,n,a,r=window,o=r.s_giq;if(o)for(e=0;e<o.length;e++)(a=t((n=o[e]).oun)).setAccount(n.un),a.setTagContainer(n.tagContainerName);r.s_giq=0}(),e},Lo=[{key:"AppMeasurement_Module_ActivityMap",value:function(e){function t(){var e=l.pageYOffset+(l.innerHeight||0);e&&e>+u&&(u=e)}function n(){if(c.scrollReachSelector){var t=e.d.querySelector&&e.d.querySelector(c.scrollReachSelector);t?(u=t.scrollTop||0,t.addEventListener("scroll",(function(){var e;(e=t&&t.scrollTop+t.clientHeight||0)>u&&(u=e)}))):0<p--&&setTimeout(n,1e3)}}function a(e,t){var n,a,r;if(e&&t&&(n=c.c[t]||(c.c[t]=t.split(","))))for(r=0;r<n.length&&(a=n[r++]);)if(-1<e.indexOf(a))return null;return e}function r(t,n,a,r,o){var i,s;if((t.dataset&&(s=t.dataset[n])||t.getAttribute&&((s=t.getAttribute("data-"+a))||(s=t.getAttribute(a))))&&(i=s),!i&&e.useForcedLinkTracking&&o){var c;if(t=t.onclick?""+t.onclick:"",n="",r&&t&&0<=(a=t.indexOf(r))){for(a+=r.length;a<t.length;)if(s=t.charAt(a++),0<="'\
                "".indexOf(s)) {
                c = s;
                break
            }
        for (var l = !1; a < t.length && c && (s = t.charAt(a), l || s !== c);) "\\" === s ? l = !0 : (n += s, l = !1), a++
    }(c = n) && (e.w[r] = c)
}
return i || o && e.w[r]
}

function o(e, t, n) {
    var r;
    return (r = c[t](e, n)) && a(s(r), c[t + "Exclusions"])
}

function i(e, t, n) {
    var a;
    if (e && !(1 === (a = e.nodeType) && (a = e.nodeName) && (a = a.toUpperCase()) && g[a]) && (1 === e.nodeType && (a = e.nodeValue) && (t[t.length] = a), n.a || n.t || n.s || !e.getAttribute || ((a = e.getAttribute("alt")) ? n.a = a : (a = e.getAttribute("title")) ? n.t = a : "IMG" == ("" + e.nodeName).toUpperCase() && (a = e.getAttribute("src") || e.src) && (n.s = a)), (a = e.childNodes) && a.length))
        for (e = 0; e < a.length; e++) i(a[e], t, n)
}

function s(e) {
    if (null == e || null == e) return e;
    try {
        return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]{1,}", "mg"), " ").substring(0, 254)
    } catch (e) {}
}
var c = this;
c.s = e;
var l = window;
l.s_c_in || (l.s_c_il = [], l.s_c_in = 0), c._il = l.s_c_il, c._in = l.s_c_in, c._il[c._in] = c, l.s_c_in++, c._c = "s_m";
var d, u = 0,
    p = 60;
c.c = {};
var g = {
    SCRIPT: 1,
    STYLE: 1,
    LINK: 1,
    CANVAS: 1
};
c._g = function() {
var t, n, a, r = e.contextData,
    i = e.linkObject;
(t = e.pageName || e.pageURL) && (n = o(i, "link", e.linkName)) && (a = o(i, "region")) && (r["a.activitymap.page"] = t.substring(0, 255), r["a.activitymap.link"] = 128 < n.length ? n.substring(0, 128) : n, r["a.activitymap.region"] = 127 < a.length ? a.substring(0, 127) : a, 0 < u && (r["a.activitymap.xy"] = 10 * Math.floor(u / 10)), r["a.activitymap.pageIDType"] = e.pageName ? 1 : 0)
}, c._d = function() {
c.trackScrollReach && !d && (c.scrollReachSelector ? n() : (t(), l.addEventListener && l.addEventListener("scroll", t, !1)), d = !0)
}, c.link = function(e, t) {
var n;
if (t) n = a(s(t), c.linkExclusions);
else if ((n = e) && !(n = r(e, "sObjectId", "s-object-id", "s_objectID", 1))) {
    var o, l;
    (l = a(s(e.innerText || e.textContent), c.linkExclusions)) || (i(e, o = [], n = {
        a: void 0,
        t: void 0,
        s: void 0
    }), (l = a(s(o.join("")))) || (l = a(s(n.a ? n.a : n.t ? n.t : n.s ? n.s : void 0))) || !(o = (o = e.tagName) && o.toUpperCase ? o.toUpperCase() : "") || ("INPUT" == o || "SUBMIT" == o && e.value ? l = a(s(e.value)) : "IMAGE" == o && e.src && (l = a(s(e.src))))), n = l
}
return n
}, c.region = function(e) {
for (var t, n = c.regionIDAttribute || "id"; e && (e = e.parentNode);) {
    if (t = r(e, n, n, n)) return t;
    if ("BODY" == e.nodeName) return "BODY"
}
}
}
}], Vo = function(e) {
    if (!e.prop17) {
        var t = e.getPercentPageViewed();
        if (t && t.length >= 4 && void 0 !== t[1] && (e.prop17 = t[1] + ":" + t[2], e.prop28 = 10 * Math.round(t[3] / 10), e.eVar18 = "", t[4])) {
            for (var n = t[4].split(/\|/g), a = "", r = n.length, o = 0; o < r; o++)
                if (o !== r - 1) {
                    var i = n[o + 1].split(/:/)[0] - n[o].split(/:/)[0];
                    if (i > 100) {
                        a += n[o].split(/:/)[1];
                        for (var s = i / 100; s > 1;) a += "0", s--
                    } else a += n[o].split(/:/)[1]
                } else a += n[o].split(/:/)[1];
            a.length > 254 && (e.eVar18 = a.substring(255, a.length))
        }
    }
}, Mo = function(e) {
    e.getPercentPageViewed = function() {
        return void 0 === e.linkType ? (e.ppv.previous = sessionStorage.getItem(e.ppv.sessionStorageKey) ? sessionStorage.getItem(e.ppv.sessionStorageKey) : "", e.ppv.init(), e.ppv.previous.split(",")) : e.ppv.previous ? void 0 : (e.ppv.previous = sessionStorage.getItem(e.ppv.sessionStorageKey) || "", e.ppv.init(), e.ppv.previous.split(","))
    }, e.ppv = {
        initialPercent: 0,
        maxPercent: 0,
        throttleAmount: 500,
        sessionStorageKey: "s_ppv",
        init: function() {
            window.addEventListener("load", e.ppv.scroll, !1), window.addEventListener("scroll", e.ppv.throttle(e.ppv.scroll, e.ppv.throttleAmount), !1), window.addEventListener("resize", e.ppv.throttle(e.ppv.scroll, e.ppv.throttleAmount), !1), window.addEventListener("beforeunload", e.ppv.unload, !1)
        },
        scroll: function() {
            var t = e.ppv;
            if (100 != t.maxPercent) {
                var n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
                    a = document.clientHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    r = t.getDocHeight();
                if (r = Math.round((n + a) / r * 100), t.initialPercent || (t.initialPercent = r), r > t.maxPercent) {
                    t.maxPercent = r;
                    var o = [];
                    o.push(null), o.push(r), o.push(t.initialPercent), o.push(n + a), sessionStorage.setItem(t.sessionStorageKey, o.join(","))
                }
            }
        },
        getDocHeight: function() {
            var e = document;
            return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight), window.innerHeight)
        },
        unload: function() {
            sessionStorage.getItem(e.ppv.sessionStorageKey) && sessionStorage.setItem(e.ppv.sessionStorageKey, sessionStorage.getItem(e.ppv.sessionStorageKey))
        },
        throttle: function(e, t) {
            var n, a, r, o = null,
                i = 0,
                s = function() {
                    i = new Date, o = null, r = e.apply(n, a)
                };
            return function() {
                var c = new Date;
                i || (i = c);
                var l = t - (c - i);
                return n = this, a = arguments, 0 >= l ? (clearTimeout(o), o = null, i = c, r = e.apply(n, a)) : o || (o = setTimeout(s, l)), r
            }
        }
    }
}, xo = function(e) {
    e.getValOnce = function(e, t, n, a) {
        var r = new Date,
            o = (e = e || "", t = t || "s_gvo", n = n || 0, "m" == a ? 6e4 : 864e5),
            i = this.c_r(t);
        return e && (r.setTime(r.getTime() + n * o), this.c_w(t, e, 0 == n ? 0 : r)), e == i ? "" : e
    }
}, $o = function(e) {
    e.split = function(e, t) {
        for (var n, a = 0, r = new Array; e;) n = (n = e.indexOf(t)) > -1 ? n : e.length, r[a++] = e.substring(0, n), e = e.substring(n + t.length);
        return r
    }
}, Uo = [p, g, m], jo = e => {
    const t = e.href;
    if (!t) return "no href";
    const n = Ke({
        url: t
    });
    return n.startsWith(window.location.origin) ? n.substring(window.location.origin.length) : n
}, Bo = e => e.classList && e.classList.contains("a11y"), Ho = ({
    element: e
} = {}) => {
    if ((e => "#text" === e.nodeName)(e)) return e.nodeValue;
    let t = "";
    if (e.hasChildNodes())
        for (const n of e.childNodes) Bo(n) || (t += Ho({
            element: n
        }));
    return t
}, Go = e => W(e.dataset.analyticsActivitymapLinkId, 50) || W(e.dataset.analyticsTitle, 50) || `${W(Ho({element:e}),37)} (inner text)`.trim(), Fo = "body", Ko = e => {
    if (e.classList.contains("ac-gn-link")) return "global nav";
    const t = e.closest("[data-analytics-activitymap-region-id]") || e.closest("[data-analytics-region]") || e.closest("[data-analytics-section-engagement]");
    return t ? t.dataset.analyticsActivitymapRegionId || t.dataset.analyticsRegion || t.dataset.analyticsSectionEngagement : Fo
}, Wo = e => e.classList.contains("globalnav-searchresults-list-link"), qo = e => e instanceof HTMLElement && !e.hasAttribute("data-analytics-no-activitymap"), zo = e => (e => e.closest(".globalnav-link-search"))(e) ? Ko(e) : (e => {
    const t = e.closest("[data-analytics-region]");
    return t ? t.dataset.analyticsRegion : Fo
})(e), Yo = e => {
    if (!qo(e)) return !1;
    if (Wo(e)) {
        const t = e.dataset.section || "";
        return z({
            text: "suggestions" === t ? "suggested" : t,
            href: "/",
            region: "global nav - search"
        })
    }
    return z({
        text: Go(e),
        href: jo(e),
        region: zo(e)
    })
}, Jo = e => !!qo(e) && (Wo(e) ? q("global nav - search") : q(Ko(e))), Xo = e => {
    "object" == typeof e && "object" == typeof e.ActivityMap && (e.ActivityMap.link = Yo, e.ActivityMap.region = Jo)
}, Qo = e => {
    e.eVar10 || (e.eVar10 = e.getValOnce(je("afid"), "s_afc"))
}, Zo = function(e) {
    e.eVar7 && (e.eVar7.match(/CONFIGURE/) ? (e.eVar16 = e.prop16 = "Configure Orders", e.events = "event14") : e.eVar7.match(/BUYNOW/) && (e.eVar16 = e.prop16 = "Buy Nows", e.events = "event9"))
}, ei = e => {
    e.deregisterPostTrackCallback = t => {
        if ("function" != typeof t) return;
        const n = e.ya.findIndex((([e]) => t === e));
        n >= 0 && e.ya.splice(n, 1)
    }
}, ti = e => {
    e.campaign || (e.campaign = e.getValOnce(je("cid"), "s_campaign", 0))
}, ni = e => {
    e.findLink = t => ((e, t) => t instanceof HTMLElement && e.fc(t) || null)(e, t)
}, ai = function(e) {
    (e.c_r("rtsid") || e.c_r("rtsidInt")) && (e.events ? -1 === e.events.indexOf("event37") && (e.events += ",event37") : e.events = "event37")
}, ri = e => {
    e.eVar7 || (e.eVar7 = e.getValOnce(je("aid"), "s_aid"))
}, oi = e => {
    let t = null;
    e.trackPageLoad = function(n) {
        e.deregisterPostTrackCallback(t), "function" == typeof n && (t = (n => a => {
            /[&?]pe=/.test(a) || (e.deregisterPostTrackCallback(t), n())
        })(n), e.registerPostTrackCallback(t)), e.t()
    }
}, ii = [f, E, y, b, _, v, h, A, S], si = () => window.s, ci = ({
    page: e,
    items: t = [],
    deferred: n
} = {}) => {
    const a = si().pageName,
        r = (e => {
            const t = We("analytics/getMicroEventValue");
            return "string" != typeof e ? (t.warn("Missing page name"), Pr) : e.toUpperCase().startsWith(Pr.trim()) ? e : Pr + e
        })(e || a),
        o = t.map((e => Me(e))).join("|"),
        i = o ? `|${o}` : "";
    return n || r !== a ? `${r}${i}` : `D=pageName+"${i}"`
}, li = (e, t = []) => {
    const n = e.parentNode ? e.parentNode.closest("[data-analytics-region]") : null;
    return n ? li(n, [n.dataset.analyticsRegion, ...t]) : t
}, di = e => {
    const {
        analyticsTitle: t,
        displayName: n
    } = e.dataset;
    return (t || n || e.textContent || "").replace(/\s\s+/g, " ").replace(/[\t\f\n\r\b]/g, "").substring(0, 50).trim()
}, ui = ({
    name: e,
    element: t,
    deferred: n
} = {}) => {
    const a = (t.dataset[e.toLowerCase()] || "").replace(/\[pageName\]/g, si().pageName || "");
    switch (e) {
        case de.EVAR_1:
            return a || (({
                element: e,
                deferred: t
            } = {}) => {
                const {
                    featureName: n,
                    partNumber: a,
                    slotName: r
                } = e.dataset, o = di(e);
                return (e => (e => e.closest("#globalnav a"))(e) && !(e => e.closest("globalnav-searchresults"))(e))(e) || (e => e.closest('[data-analytics-region="banner"]'))(e) || (e => e.closest('\n        [data-analytics-region="alp-product-browser"],\n        [data-analytics-region="alp-category-browser"]\n    '))(e) ? (({
                    element: e,
                    deferred: t
                }) => {
                    const n = (e => {
                            const t = e.closest("[data-analytics-region]") || null;
                            if (!t) return "";
                            const n = t.dataset.analyticsRegion;
                            return li(t, [n]).join("|")
                        })(e),
                        a = di(e);
                    return ci({
                        items: [n, a],
                        deferred: t
                    })
                })({
                    element: e,
                    deferred: t
                }) : ((e, t) => e || t)(r, n) ? (({
                    deferred: e,
                    element: t,
                    featureName: n,
                    partNumber: a,
                    slotName: r,
                    title: o
                }) => {
                    const i = (e => {
                            const {
                                slotName: t,
                                featureName: n
                            } = e.dataset, a = t ? `[data-slot-name="${t}"]` : `[data-feature-name="${n}"]`;
                            return Array.from(document.querySelectorAll(a)).indexOf(e)
                        })(t),
                        s = [r, n, i, o];
                    return a && s.push(a), ci({
                        items: s,
                        deferred: e
                    })
                })({
                    deferred: t,
                    element: e,
                    featureName: n,
                    partNumber: a,
                    slotName: r,
                    title: o
                }) : null
            })({
                element: t,
                deferred: n
            });
        case de.EVENTS:
            return vt(a);
        case de.PRODUCTS:
            return Pt(a);
        default:
            return a
    }
}, pi = [de.EVAR_1, de.EVAR_5, de.EVAR_6, de.EVAR_20, de.EVAR_21, de.EVAR_30, de.EVAR_31, de.PROP_37, de.PROP_42, de.EVENTS, de.PRODUCTS], gi = {
    COMPLETE: ue.EVENT_7,
    SEARCH: ue.EVENT_8,
    EXIT: ue.EVENT_364,
    BEGIN: ue.EVENT_366,
    QUICK_LINK: ue.EVENT_38,
    SUGGESTED: ue.EVENT_39,
    NO_RESULTS: ue.EVENT_49,
    NO_RESULTS_CLICK: ue.EVENT_67,
    DEFAULT_LINK: ue.EVENT_50,
    ACCESSORIES_LINK: ue.EVENT_52,
    STORE_LINK: ue.EVENT_288,
    ACCESSORIES_FILTER: ue.EVENT_369,
    CURATED: ue.EVENT_370,
    PAGINATION: ue.EVENT_371,
    SERP_DIRECT: ue.EVENT_372
}, mi = [{
    protocol: "applenewss:",
    token: "nws-0-int_srch-apl",
    event: ue.EVENT_285
}, {
    protocol: "itms-apps:",
    token: "arc-0-int_srch-apl",
    event: ue.EVENT_288
}, {
    origin: "https://news.apple.com",
    token: "nws-0-int_srch-apl",
    event: ue.EVENT_285
}, {
    origin: "https://music.apple.com",
    token: "mus-0-int_srch-apl",
    event: ue.EVENT_286
}, {
    origin: "https://wallet.apple.com",
    token: "ccd-0-int_srch-apl",
    event: ue.EVENT_287
}, {
    origin: "https://apps.apple.com",
    token: "app_store-0-int_srch-apl",
    event: ue.EVENT_288
}, {
    origin: "https://tv.apple.com",
    token: "atv-0-int_srch-apl",
    event: ue.EVENT_289
}, {
    origin: "https://books.apple.com",
    token: "books-0-int_srch-apl",
    event: ue.EVENT_294
}, {
    origin: "https://fitness.apple.com",
    token: "fitness-0-int_srch-apl",
    event: ue.EVENT_299
}, {
    origin: "https://podcasts.apple.com",
    token: "podcasts-0-int_srch-apl",
    event: ue.EVENT_300
}], fi = ({
    action: e = ""
} = {}) => ({
    [de.PROP_3]: `${Me(e)||"engage"} - search field`,
    [de.EVENTS]: new ft(new yt(gi.BEGIN))
}), Ei = "suggestions", yi = ["quicklinks", Ei, "defaultlinks"], bi = ({
    keyword: e,
    method: t,
    position: n,
    results: a,
    source: r,
    suggestedValue: o,
    type: i
} = {}) => {
    const s = Me(e).toLowerCase(),
        c = "no keyword" === s ? "" : s,
        l = Me(o).toLowerCase(),
        d = (e => {
            const t = new ft;
            switch (e) {
                case "quicklinks":
                    t.add(new yt(gi.COMPLETE)), t.add(new yt(gi.QUICK_LINK));
                    break;
                case "suggestions":
                    t.add(new yt(gi.SUGGESTED));
                    break;
                case "defaultlinks":
                    t.add(new yt(gi.COMPLETE)), t.add(new yt(gi.DEFAULT_LINK))
            }
            return t
        })(i),
        u = i === Ei ? "suggested" : t;
    return { ...void 0 !== n ? {
            [de.EVAR_23]: [c, l, u, a, n].map(Me).join("|")
        } : {},
        [de.PROP_7]: yi.includes(i) ? l : s || "___blank___",
        [de.EVAR_2]: "D=c7",
        [de.EVAR_15]: `${Me(r)} (${i===Ei?"typed":Me(t)})`,
        [de.EVENTS]: d.add(new yt(gi.SEARCH))
    }
}, _i = ({
    directLanding: e,
    keyword: t,
    intent: n,
    results: a,
    channelPrefix: r,
    curatedKit: o
} = {}) => {
    const i = new ft(new yt(gi.SEARCH));
    a || i.add(new yt(gi.NO_RESULTS)), o && i.add(new yt(gi.CURATED));
    const s = `${Me(r)}:search`,
        c = {
            [de.PAGE_NAME]: `${s}:${Me(n)}`,
            [de.EVAR_2]: "D=c7",
            [de.PROP_7]: Me(t).toLowerCase(),
            [de.PROP_21]: Me(a) || "0"
        };
    return e ? { ...c,
        [de.EVAR_15]: `external (direct)|${Me(n)}`,
        [de.EVENTS]: i.add(new yt(gi.SERP_DIRECT))
    } : { ...c,
        [de.EVAR_15]: `|${Me(n)}`,
        [de.EVENTS]: i
    }
}, vi = ({
    currentPage: e,
    nextPage: t,
    action: n = "click"
} = {}) => ({
    [de.PROP_2]: `${Me(n)} - page ${Me(e)}`,
    [de.PROP_3]: `${Me(n)} - page ${Me(t)}`,
    [de.EVAR_15]: "search (search)",
    [de.EVENTS]: new ft(new yt(gi.SEARCH), new yt(gi.PAGINATION))
}), hi = e => /^\d{3}$/.test(e), Ai = e => /^[0-9A-Za-z-_]+$/.test(e), Si = e => /^cid%3D[0-9A-Za-z-_]+$/.test(e), Ti = e => (Object.keys(e).forEach(((t, n) => {
    var a;
    ((e, t, n) => {
        return !hi(e) || "string" != typeof t[e] || (a = t[e], !Ai(a) && !Si(a)) || n >= 5;
        var a
    })(t, e, n) ? delete e[t]: (a = e[t], Si(a) && a.length > 100 ? e[t] = e[t].slice(0, 100) : (e => e.length > 50)(e[t]) && (e[t] = e[t].slice(0, 50)))
})), e), Ni = (e, t) => `${e}:${encodeURIComponent(t[e])}`, ki = e => "string" != typeof e ? {} : e.split("|").reduce(((e, t) => {
    const [n, a] = t.split(":"), r = decodeURIComponent(a), o = !hi(n), i = !(Ai(r) || Si(r));
    return o || i || (e[n] = r), e
}), {}), Oi = e => URLSearchParams ? new URLSearchParams(e) : (e => {
    const t = e.split("&").reduce(((e, t) => {
        if ("" === t) return e;
        const [n, a] = t.split("=");
        return e[n] = a, e
    }), {});
    return {
        set: (e, n) => {
            t[e] = n
        },
        get: e => t[e],
        toString: () => Object.keys(t).reduce(((e, n) => "" === e ? `${n}=${t[n]}` : `${e}&${n}=${t[n]}`), "")
    }
})(e), wi = (e, t) => e ? `${e},event${t}` : `event${t}`, Ri = (e, t) => e ? `${e}|${t}` : t, Ci = ({
    key: e,
    cookieData: t
}) => ki(t)[e] || null, Ii = "aos_search_result", Pi = e => e.map(Me).join("|"), Di = ({
    accessoriesLink: e,
    storeLink: t,
    serviceLink: n,
    bannerLink: a,
    keyword: r,
    intent: o,
    position: i,
    relayId: s,
    region: c,
    URLObject: l,
    results: d,
    currentPage: u
} = {}) => {
    const p = Me(r).toLowerCase(),
        g = 0 === d,
        m = n || !g,
        f = (({
            URLObject: e,
            serviceLink: t,
            relayId: n
        }) => {
            let a;
            const r = new ft;
            if (e) {
                const t = (e => mi.find((t => t.origin ? t.origin === e.origin : t.protocol === e.protocol)))(e);
                t && (a = Ci(t.token) || Ii, r.add(new yt(t.event)))
            }
            return a || (a = t ? n || Ii : ""), {
                eVar17: a,
                events: r
            }
        })({
            URLObject: l,
            serviceLink: n,
            relayId: s
        }),
        E = (({
            accessoriesLink: e,
            storeLink: t,
            relay: n,
            results: a,
            isComplete: r
        }) => {
            const o = new ft(new yt(r ? gi.COMPLETE : gi.SEARCH));
            return 0 === a && o.add(new yt(gi.NO_RESULTS_CLICK)), e && o.add(new yt(gi.ACCESSORIES_LINK)), t && o.add(new yt(gi.STORE_LINK)), o.merge(n.events), o
        })({
            accessoriesLink: e,
            storeLink: t,
            relay: f,
            results: d,
            isComplete: m
        }),
        y = {
            [de.PROP_7]: p,
            [de.EVAR_2]: "D=c7",
            [de.EVENTS]: E
        };
    return f.eVar17 && (y[de.EVAR_17] = f.eVar17), !a && m && (y[de.PROP_29] = Pi([p, o, d, u, i])), g && (y[de.PROP_30] = Pi([p, o, d, c, i])), g && !n && (y[de.EVAR_15] = "null (clicked)"), y
}, Li = ({
    keyword: e
} = {}) => ({
    [de.PROP_7]: Me(e).toLowerCase(),
    [de.PROP_29]: null,
    [de.EVAR_2]: "D=c7",
    [de.EVENTS]: new ft(new yt(gi.EXIT))
}), Vi = ({
    keyword: e,
    action: t,
    text: n,
    analyticsPrefix: a
} = {}) => ({
    [de.EVAR_2]: Me(e).toLowerCase(),
    [de.EVAR_4]: `${Me(a)}:search:accessories`,
    [de.PROP_3]: `filter - ${Me(t)} - ${Me(n)}`,
    [de.PROP_7]: Me(e).toLowerCase(),
    [de.EVENTS]: new ft(new yt(gi.ACCESSORIES_FILTER))
}), Mi = {
    errorPageTrack: {
        pageType: "errorPage",
        id: "site-search"
    },
    submitEvents: ["analytics-form-submit", "submit", "keypress"],
    clickEvent: "click",
    globalNav: "globalnav-searchfield",
    globalNavOld: "ac-gn-searchform",
    globalNavLink: "globalnav-searchresults-list-link",
    globalNavLinkOld: "ac-gn-searchresults-link",
    searchSource: {
        ERROR: "error",
        ACCESSORIES: "accessories",
        SEARCH: "search",
        AOS: "aos"
    },
    searchMethod: {
        TYPED: "typed",
        DEFAULT: "default",
        TAB: "tab"
    },
    areaIds: {
        serp: "serp",
        errorPage: "pnf",
        accessories: "aalp"
    },
    keywordSelectors: ".globalnav-searchfield-input, #ac-gn-searchform-input"
}, xi = () => Boolean(Ba([aa, "data", "search", "isSERP"])), $i = e => e.classList.contains(Mi.globalNavLink) || e.classList.contains(Mi.globalNavLinkOld), Ui = e => (e => e.classList.contains(Mi.globalNav))(e) || (e => e.id === Mi.globalNavOld)(e), ji = [ra, "pageType"], Bi = e => Ui(e) || $i(e) ? Mi.searchSource.AOS : Ba(ji) === Mi.errorPageTrack.pageType ? Mi.searchSource.ERROR : xi() ? Mi.searchSource.SEARCH : e.closest("[data-analytics-id]") && e.closest("[data-analytics-id]").dataset.analyticsId === Mi.areaIds.accessories ? Mi.searchSource.ACCESSORIES : Mi.searchSource.AOS, Hi = e => {
    if (Ui(e)) return e.querySelector(Mi.keywordSelectors).value || null;
    const t = e.querySelector('input[name="search"], input');
    return t ? t.value : null
}, Gi = (e, t) => e.dataset[t] || null, Fi = (e = {}) => {
    const {
        element: t,
        customData: n
    } = e;
    if ($i(t)) {
        e.crossDomain = !0, e.deferred = !0;
        const n = Gi(t, "section");
        return {
            keyword: Gi(t, "query"),
            method: n,
            position: Gi(t, "index"),
            results: Gi(t, "items"),
            source: Bi(t),
            suggestedValue: Gi(t, "label"),
            type: n
        }
    }
    if ("search" === Gi(t, "analyticsRegion") && Gi(t.closest("[data-analytics-id]"), "analyticsId") === Mi.areaIds.accessories && n) {
        const e = parseInt(n.rank, 10);
        return {
            keyword: n.q,
            method: "suggestions",
            position: e ? e - 1 : null,
            results: n.resultCount,
            source: Bi(t),
            suggestedValue: n.term,
            type: "suggestions"
        }
    }
    return null
}, Ki = [aa, "data", "search"], Wi = [...Ki, "searchTerm"], qi = [...Ki, "selectedTab"], zi = ({
    element: e
}) => {
    const t = Bi(e);
    if (t !== Mi.searchSource.SEARCH) return null;
    let n = null;
    if (e.hasAttribute("role") && "tab" === e.getAttribute("role")) n = e;
    else {
        const t = e.querySelector('[role="tab"]');
        t && (n = t)
    }
    return n ? (xa(qi, n.dataset.analyticsTitle), {
        keyword: Ba(Wi),
        method: Mi.searchMethod.TAB,
        source: t
    }) : null
}, Yi = [...ga.PAGE_DATA, "area"], Ji = "aos:", Xi = `${Ji}search`, Qi = ({
    beacon: e
} = {}) => {
    e[de.CHANNEL] = Xi, e[de.HIER1] = `${Ji}${Ba(Yi)||"search"}`
}, Zi = "open", es = "engage", ts = "globalnav-menubutton-link-search", ns = {
    trackEvents: ["click", "keypress", "keyup"],
    nextLink: "next",
    prevLink: "prev",
    inputField: "pageinput"
}, as = [aa, "data", "search"], rs = [...as, "categories"], os = {
    pageNumber: 1,
    maxPageNumber: 1
}, is = () => {
    const e = Ba([...as, "selectedTab"]);
    if (!e) return os;
    const t = t => Ba([...rs, e, t]),
        n = t("pageNumber"),
        a = parseInt(n, 10) || 1,
        r = t("numOfPages");
    return {
        pageNumber: a,
        maxPageNumber: parseInt(r, 10) || 1
    }
}, ss = (e = 1) => {
    const t = is().pageNumber;
    return {
        currentPage: t,
        nextPage: t + e
    }
}, cs = {
    trackEvents: ["click", "tap"],
    supportTab: "support",
    resultSelectors: {
        accessories: '[data-analytics-id="accessories"] a',
        explore: '[data-analytics-id="explore"] a',
        support: '[data-analytics-id="support"] a',
        retail: '[data-analytics-id="retail"] a'
    },
    tileSelector: '[role="listitem"], li'
}, ls = [aa, "data", "search"], ds = [...ls, "searchTerm"], us = [...ls, "selectedTab"], ps = [...ls, "categories"], gs = ["applenews:", "itms-apps:"], ms = ["apps.apple.com", "books.apple.com", "fitness.apple.com", "music.apple.com", "news.apple.com", "podcasts.apple.com", "tv.apple.com", "wallet.apple.com"], fs = ({
    element: e,
    property: t,
    values: n = []
} = {}) => !!e && n.includes(e[t]), Es = e => Be(e) && (fs({
    element: e,
    property: "protocol",
    values: gs
}) || fs({
    element: e,
    property: "hostname",
    values: ms
})), ys = e => Boolean(e.closest('[data-analytics-region="highlight"]')), bs = e => (e => Be(e) && (({
    element: e,
    property: t,
    values: n = []
} = {}) => !!e && n.includes(e[t]))({
    element: e,
    property: "hostname",
    values: ["apps.apple.com"]
}))(e), _s = {
    trackEvents: ["click"],
    parent: ".as-searchlinks",
    notParent: ".as-search-wrapper"
}, vs = [aa, "data", "search", "searchTerm"], hs = '[data-analytics-region="filters"]', As = {
    FILTER: `${hs} [data-analytics-filter]`,
    FILTER_ACTIVE: '[data-analytics-filter="active"]',
    ACCORDION: `${hs} [data-analytics-accordion], ${hs} [data-core-accordion-button]`,
    ACCORDION_EXPANDED: '[data-analytics-accordion="expanded"], [data-core-accordion-button-expanded]',
    SELECT: "select",
    REMOVE: "remove",
    EXPAND: "expand",
    COLLAPSE: "collapse"
}, Ss = [...ga.PAGE_DATA, "search", "searchTerm"], Ts = [(e = {}) => {
    const {
        element: t
    } = e, n = (({
        element: e,
        event: t
    }) => t ? ts === e.id || "ac-gn-link-search" === e.id ? "click" === t.type ? (e => e.matches("[data-analytics-title]") ? {
        action: Zi
    } : null)(e) : null : "ac-gn-link-search-small" === e.id ? "click" === t.type ? {
        action: es
    } : null : e.matches('input[name="search"]') && e.closest('[data-analytics-region="search"]') && "focusin" === t.type ? {
        action: es
    } : null : null)(e);
    return n ? (e.deferred = !1, t.id === ts && xi() && Qi(e), zr({
        target: e.beacon,
        source: fi(n)
    }), e) : null
}, (e = {}) => {
    const t = (({
        element: e,
        event: t
    } = {}) => t && ns.trackEvents.includes(t.type) ? e.dataset.analyticsPagination === ns.nextLink ? ss(1) : e.dataset.analyticsPagination === ns.prevLink ? ss(-1) : t.target && t.target.dataset.analyticsPagination === ns.inputField ? (e => {
        let t = parseInt(e, 10);
        if (!t) return null;
        const {
            pageNumber: n,
            maxPageNumber: a
        } = is();
        return t > a ? t = a : t < 1 && (t = 1), {
            nextPage: t,
            action: "typed",
            currentPage: n
        }
    })(e.value) : null : null)(e);
    return t ? (e.deferred = !0, zr({
        target: e.beacon,
        source: vi(t)
    }), e) : null
}, (e = {}) => {
    const t = ((e = {}) => {
        const {
            event: t
        } = e;
        if (!t) return null;
        if (Mi.submitEvents.includes(t.type)) return e.deferred = !0, ((e = {}) => {
            const {
                element: t
            } = e;
            return Ui(t) && (e.crossDomain = !0), Ui(n = t) || "search" === n.dataset.analyticsRegion ? {
                keyword: Hi(t),
                method: Mi.searchMethod.TYPED,
                source: Bi(t)
            } : null;
            var n
        })(e);
        if (Mi.clickEvent === t.type) {
            const t = { ...zi(e),
                ...Fi(e)
            };
            return Object.keys(t).length ? t : null
        }
        return null
    })(e);
    return t ? (zr({
        target: e.beacon,
        source: bi(t)
    }), e) : null
}, (e = {}) => {
    const t = (({
        element: e,
        event: t
    } = {}) => t && cs.trackEvents.includes(t.type) && xi() && Object.values(cs.resultSelectors).some((t => e.matches(t))) ? (({
        element: e
    }) => {
        const t = (() => {
                const e = Ba(us),
                    t = [...ps, e];
                return {
                    keyword: Ba(ds),
                    intent: e,
                    results: Z(Ba([...t, "totalCountText"])),
                    curated: Ba([...t, "curated"]),
                    currentPage: Ba([...t, "pageNumber"])
                }
            })(),
            n = "accesories" === t.intent && (e => Boolean(e.closest('[data-analytics-id="accessories"], #accessories')))(e),
            a = e.closest("[data-analytics-region]"),
            r = a ? a.dataset.analyticsRegion : "",
            o = t.intent ? ((e, t) => Array.from(t.querySelectorAll(cs.tileSelector)).filter((e => e.parentElement === t)).indexOf(e) + 1)(e.closest(cs.tileSelector) || e, a || document) : null,
            i = 0 === t.results ? "null" : t.intent;
        return { ...t,
            intent: i,
            position: o,
            accessoriesLink: n,
            storeLink: bs(e),
            serviceLink: Es(e),
            bannerLink: ys(e),
            URLObject: e.href ? new URL(e.href) : null,
            region: r
        }
    })({
        element: e
    }) : null)(e);
    return t ? (Qi(e), zr({
        target: e.beacon,
        source: Di(t)
    }), 0 !== t.results || t.serviceLink || (e.deferred = !0), e) : null
}, (e = {}) => {
    const {
        element: t,
        event: n
    } = e;
    if (!(t instanceof HTMLElement && n && "click" === n.type && xi())) return null;
    const a = (({
        element: e
    } = {}) => {
        if (!e.matches(As.FILTER) && !e.matches(As.ACCORDION)) return null;
        const {
            action: t,
            text: n
        } = (e => {
            const t = e.dataset.analyticsTitle || "";
            return e.matches(As.FILTER) ? {
                text: t,
                action: e.matches(As.FILTER_ACTIVE) ? As.REMOVE : As.SELECT
            } : {
                text: t,
                action: e.matches(As.ACCORDION_EXPANDED) ? As.EXPAND : As.COLLAPSE
            }
        })(e);
        return t === As.COLLAPSE ? null : {
            analyticsPrefix: "aos",
            keyword: Ba(Ss) || "",
            action: t,
            text: n
        }
    })(e);
    return a ? (e.deferred = !0, e.beacon[de.EVAR_15] = "search (search)", zr({
        target: e.beacon,
        source: Vi(a)
    }), e) : null
}, (e = {}) => {
    const t = (({
        element: e,
        event: t
    } = {}) => t && _s.trackEvents.includes(t.type) && xi() && (e.closest(_s.parent) || !e.closest(_s.notParent)) ? {
        keyword: Ba(vs)
    } : null)(e);
    return t ? (Qi(e), zr({
        target: e.beacon,
        source: Li(t)
    }), e) : null
}], Ns = e => {
    const {
        element: t
    } = e;
    return "pageLoad" === e.type ? e : t instanceof HTMLElement && Ts.reduce(((t, n) => t || n(e)), null) || e
};
Ns.label = "analytics-bp-search";
const ks = { ...Object.freeze({
            ACCOUNT_HOME_LOADED: "account:general:loaded",
            ACCOUNT_NUMBER_OF_CARTS: "account:general:number_of_carts",
            ACCOUNT_BALANCE: "account:general:account_balance",
            ACCOUNT_LOCALNAV_SIGN_OUT_CLICKED: "account:localnav:sign_out_clicked",
            ACCOUNT_DEVICE_DETAILS: "account:devices:device_details",
            ACCOUNT_DEVICE_TILE_SHOWN: "account:devices:device_tile_shown",
            ACCOUNT_DEVICE_TILE_CLICKED: "account:devices:device_tile_clicked",
            ACCOUNT_DEVICE_GET_SUPPORT: "account:devices:get_support",
            ACCOUNT_VIEW_APPLE_ID_SETTINGS: "account:devices:view_apple_id_settings",
            ACCOUNT_TRADE_IN_INFO_CLICKED: "account:trade_in:trade_in_info",
            ACCOUNT_MANAGE_BALANCE_CLICKED: "account:account_links:manage_balance",
            ACCOUNT_VIEW_SAVED_ITEMS: "account:account_links:view_saved_items",
            ACCOUNT_EDIT_SHIPPING_ADDRESS_CLICKED: "account:settings:shipping_address_edit",
            ACCOUNT_SAVE_SHIPPING_ADDRESS_CLICKED: "account:settings:shipping_address_save",
            ACCOUNT_EDIT_CONTACT_INFORMATION_CLICKED: "account:settings:contact_information_edit",
            ACCOUNT_SAVE_CONTACT_INFORMATION_CLICKED: "account:settings:contact_information_save",
            ACCOUNT_MANAGE_PERSONAL_INFORMATION_CLICKED: "account:settings:manage_personal_information",
            ACCOUNT_MANGE_APPLE_ID_CLICKED: "account:settings:manage_apple_id",
            ACCOUNT_DASHBOARD_TILE_SHOWN: "account:dashboard:dashboard_tile_shown",
            ACCOUNT_DASHBOARD_TILE_CLICKED: "account:dashboard:dashboard_tile_clicked",
            ACCOUNT_PRE_ORDER_LINK_CLICKED: "account:general:pre_order_link",
            ACCOUNT_MANAGE_FAVOURITES_LINK_CLICKED: "account:general:see_your_favourites",
            ACCOUNT_MANAGE_ORDERS_LINK_CLICKED: "account:general:manage_orders_link",
            ACCOUNT_2FA_INFO_SHOWN: "account:general:2fa_info",
            ACCOUNT_VIEW_UPGRADE_LINK_CLICKED: "account:general:vew_elgibility_link",
            ACCOUNT_CITIZENS_ONE_LINK_CLICKED: "account:general:citizens_one_link",
            ACCOUNT_APPLECARE_LINK_CLICKED: "account:general:applecare_coverage_details"
        })
    },
    Os = de.EVAR_93,
    ws = de.EVAR_94,
    Rs = ue.EVENT_210,
    Cs = ue.EVENT_246,
    Is = ue.EVENT_242,
    Ps = [ks.ACCOUNT_LOCALNAV_SIGN_OUT_CLICKED, ks.ACCOUNT_DEVICE_TILE_CLICKED, ks.ACCOUNT_VIEW_SAVED_ITEMS, ks.ACCOUNT_MANAGE_PERSONAL_INFORMATION_CLICKED, ks.ACCOUNT_MANGE_APPLE_ID_CLICKED, ks.ACCOUNT_MANAGE_ORDERS_LINK_CLICKED, ks.ACCOUNT_PRE_ORDER_LINK_CLICKED, ks.ACCOUNT_TRADE_IN_INFO_CLICKED, ks.ACCOUNT_DEVICE_GET_SUPPORT, ks.ACCOUNT_DASHBOARD_TILE_CLICKED];
let Ds = 0;
const Ls = () => (Ds++, Ds);
let Vs;
const Ms = (e = "") => e ? (Vs || (Vs = document.createElement("div")), Vs.innerHTML = e.replace(/</gi, "&lt;"), Vs.innerText) : "",
    xs = [de.EVAR_5],
    $s = (e = {}) => {
        const {
            beacon: t = {}
        } = e, n = { ...t
        };
        return xs.forEach((e => {
            "string" == typeof n[e] && (n[e] = Ms(n[e]))
        })), { ...e,
            beacon: n
        }
    },
    Us = ue.EVENT_500,
    js = {
        EVENT_TRIGGER: ue.SC_ADD,
        PRICE_ELEMENT_SELECTOR: ".current_price"
    },
    Bs = de.EVAR_97,
    Hs = ({
        type: e,
        linkType: t
    }) => e === Dr.EVENT ? `s.tl-${ge}-api` : `s.tl-${t||ge}`,
    Gs = e => {
        try {
            const t = e.dataset.ridRelay;
            return JSON.parse(t)
        } catch (e) {
            return null
        }
    },
    Fs = {
        name: "aw_rid",
        path: "/",
        secure: !0
    },
    Ks = () => Y(Fs.name),
    Ws = ({
        analyticsListId: e,
        listId: t = ""
    } = {}) => Me(e || t).slice(0, 95),
    qs = e => {
        switch (e) {
            case "preorder_full":
            case "announce_full":
                return ue.EVENT_257;
            case "preorder_partial":
            case "announce_partial":
                return ue.EVENT_258;
            default:
                return ue.EVENT_259
        }
    },
    zs = e => `AOS: Covers: ${(e=>e?e.toLowerCase().replace(/[^a-z0-9_\-\s]/g,"").replace(/[\s]+/g," ").slice(0,50).trim():"")(e)}`,
    Ys = (e = {}) => {
        if (e.type !== Dr.PAGE_LOAD) return e;
        const t = Ba([...ga.PAGE_DATA, "coversModeType"]);
        if (!t) return e;
        const n = {
                events: new ft(new yt(qs(t)))
            },
            a = globalThis.window ? .data ? .msg,
            r = Ba(`${ra}.computedChannel`);
        return a && e.beacon[de.PROP_8] === r && (n[de.PROP_8] = zs(a)), zr({
            source: n,
            target: e.beacon
        }), e
    },
    Js = Ot([de.PROP_4, de.PROP_5, de.PROP_6, de.PROP_8, de.PROP_14, de.PROP_20, de.PROP_40, de.EVAR_3, de.EVAR_4, de.EVAR_14, de.EVAR_54]),
    Xs = e => 0 === e.size ? "none" : e.toString(),
    Qs = [{
        expression: /\bW[0-9-]+/,
        value: "WXXXXXXXX"
    }, {
        expression: /\/order\/detail\/.*/i,
        value: "/order/detail"
    }, {
        expression: /\/order\/cancel\/.*/i,
        value: "/order/cancel"
    }, {
        expression: /\/order\/guest\/.*/i,
        value: "/order/guest/******"
    }, {
        expression: /\/order\/applynow\/ep_payments\/.*/i,
        value: "/order/applynow/ep_payments/******"
    }, {
        expression: /\/onMyWay\/.*/i,
        value: "/onMyWay/******"
    }, {
        expression: /\/startPickup\/.*/i,
        value: "/startPickup/******"
    }],
    Zs = (e, {
        expression: t,
        value: n
    }) => e.replace(t, n),
    ec = e => Qs.reduce(Zs, $(e)),
    tc = () => Boolean(Ba("pageDataModel.data.purchaseId")),
    nc = /\bW[0-9-]+/,
    ac = [ue.EVENT_411, ue.EVENT_412, ue.EVENT_413, ue.EVENT_414, ue.EVENT_415, ue.EVENT_416],
    rc = (e, t) => e instanceof ft ? e : t(e),
    oc = () => !1;
let ic = null;
const sc = {
        elementDefault: !0,
        linkTypeDefault: ge
    },
    cc = (e = {}) => {
        const {
            beacon: t,
            element: n,
            linkType: a,
            name: r,
            callback: o
        } = e, i = si();
        i.useBeacon = !0, n && n.href && tc() && (t.linkURL = G(ec(n.href))), i.tl(n || sc.elementDefault, a || sc.linkTypeDefault, Ms(r), t, o)
    },
    lc = (e, t) => {
        const n = e.closest(`[${t}]`);
        return n && n.getAttribute(t)
    },
    dc = [...ga.PAGE_DATA, "buyflow", "entryPointRules"],
    uc = e => {
        Ba(pc) && "string" == typeof e && xa(gc, e)
    },
    pc = [...ga.PAGE_DATA, "preAuth"],
    gc = [...pc, "activationType"],
    mc = [...ga.PAGE_DATA].concat("productsString"),
    fc = () => Ba(mc),
    Ec = () => Pt(fc()),
    yc = e => {
        xa(mc, e)
    },
    bc = e => {
        if (!e) return "";
        const t = Pt(e),
            [n] = t.keys();
        return t.get(n) ? .category || ""
    },
    _c = {
        OmnitureCollection: ft,
        OmnitureItem: ut,
        OmnitureEvent: yt,
        OmnitureVariable: _t,
        OmnitureProduct: St,
        parseItemCollectionString: kt,
        parseItemCollectionArray: Ot,
        parseEventCollectionString: vt,
        parseProductCollectionString: Pt,
        name: "omnitureCollection"
    },
    vc = (e = {}) => {
        if (!e.sku) return !1;
        const t = fc();
        if (null == t || "string" != typeof t) return !1;
        const n = t.split(";");
        return n[0] = e.category || n[0] || "", n[1] = e.sku, yc(n.join(";")), !0
    },
    hc = Z,
    Ac = ne,
    Sc = [" | ", " > "],
    Tc = ({
        product: e = {},
        carrier: t = ""
    }) => {
        const {
            family: n = "",
            color: a = "",
            capacity: r = "",
            purchaseOption: o = ""
        } = e, [i, s] = Sc;
        return `D=pageName+"${i}iPhone PreAuth${i}${[n,t,a,r,o].join(s)}"`
    },
    Nc = (e = {}) => {
        const {
            type: t
        } = e, n = Ba(pc);
        if (!n || t !== Dr.PAGE_LOAD) return e;
        const {
            carrier: a = "",
            activationType: r = "",
            product: o = {}
        } = n, {
            model: i = ""
        } = o, s = {
            [de.EVAR_6]: Tc(n),
            [de.PROP_39]: r ? `${a} - ${r}` : a,
            [de.EVAR_38]: Ac(i)
        };
        return zr({
            source: s,
            target: e.beacon
        }), e
    },
    kc = "30.0.0",
    Oc = {
        persisted: {
            key: oa
        }
    },
    wc = {
        [de.LIST_1]: "D=as_xs",
        [de.LIST_3]: "D=as_tex"
    },
    Rc = {
        [de.REFERRER]: "referrer.current"
    },
    Cc = {
        [de.EVAR_49]: () => Ba("referrer.current") ? "D=r" : null,
        [de.SERVER]: e => (e => e.deferred ? null : e.beacon.server ? e.beacon.server : `as-${kc}`)(e),
        [de.HIER1]: () => `${Ba("pageDataModel.data.prefix")||"aos"}:${Ba("pageDataModel.data.area")||"shop"}`,
        [de.EVENTS]: e => {
            const {
                beacon: t = {},
                deferred: n
            } = e;
            if (n) return null;
            const a = (J(((e = "") => {
                if (!e) return "";
                const {
                    cookieMap: t
                } = window;
                return t && "object" == typeof t && t[e] || e
            })("as_cn")) || "").split("~");
            return 2 === a.length && a.at(1).length > 0 ? (t[de.EVENTS] || new ft).add(new yt("event209")) : t.events || null
        }
    },
    Ic = ga.PAGE_DATA.join("."),
    Pc = `${Ic}.previousPage`,
    Dc = {
        [de.CHANNEL]: "D=h1",
        [de.EVAR_4]: "D=pageName",
        [de.EVAR_54]: "D=g",
        [de.EVAR_97]: "s.t-p",
        [de.PROP_4]: "D=g"
    },
    Lc = {
        [de.EVAR_9]: `${Pc}.loadTime`,
        [de.EVAR_20]: `${Ic}.leadQuoteTime`,
        [de.EVAR_93]: `${Pc}.numberOfClicks`,
        [de.EVAR_94]: `${Pc}.timeToClick`,
        [de.PROP_25]: `${Ic}.referrerType`,
        [de.EVAR_3]: `${ra}.computedCustomStoreName`,
        [de.EVAR_12]: `${ra}.cartId`,
        [de.EVAR_14]: `${Ic}.languageAttribute`,
        [de.PROP_5]: `${Ic}.devicePixelRatio`,
        [de.PROP_8]: `${ra}.computedChannel`,
        [de.PROP_9]: `${Ic}.osVersion`,
        [de.PROP_20]: `${ra}.storeSegmentVariable`,
        [de.PROP_40]: `${ra}.storeFrontId`
    },
    Vc = [(e = {}) => {
        const {
            beacon: t = {}
        } = e, n = (e => Object.keys(e).reduce(((t, n) => {
            const a = n.replace(/^evar/i, "eVar");
            return fe(a) ? (t[a] = e[n], t) : t
        }), {}))(t);
        return n[de.LINK_TRACK_EVENTS] = Hr(n[de.LINK_TRACK_EVENTS], kt), n[de.LINK_TRACK_VARS] = Hr(n[de.LINK_TRACK_VARS], kt), n[de.EVENTS] = Hr(n[de.EVENTS], vt), n[de.PRODUCTS] = Hr(n[de.PRODUCTS], Pt), { ...e,
            beacon: n
        }
    }, (e = {}) => {
        const {
            element: t
        } = e, n = Ba(dc) || [];
        if (0 === n.length) return e;
        const a = t instanceof HTMLElement && t.closest("[data-analytics-region]") ? .dataset ? .analyticsRegion || "",
            r = n.reduce(((e, t) => {
                const [r, o] = t;
                return ((e, t) => null === e || "" === t)(r, e) || ((e, t) => e === t)(r, a) || ((e, t, n) => "" === t && 1 === n.length && null !== e)(r, e, n) ? o : e
            }), "");
        return sr("entryPoint", r, {
            type: "page"
        }), e
    }, (e = {}) => {
        const {
            event: t
        } = e;
        if (Gr.includes(t ? .detail ? .name)) return e.crossDomain = !0, e;
        const n = e.element || t && t.target;
        return n instanceof HTMLElement ? (e.crossDomain = He(n), e) : e
    }, qr, Zr],
    Mc = [e => (Object.entries(wc).forEach((([t, n]) => {
        e.beacon[t] = n
    })), Object.entries(Rc).forEach((([t, n]) => {
        const a = Ba(n);
        a && (e.beacon[t] = a)
    })), Object.entries(Cc).forEach((([t, n]) => {
        const a = n(e);
        a && (e.beacon[t] = a)
    })), e), (e = {}) => {
        const {
            beacon: t = {},
            type: n,
            deferred: a
        } = e;
        (e => {
            e[de.EVENTS].sort(), e[de.PRODUCTS].forEach((e => {
                (e instanceof St || e instanceof Nt) && (e.events.sort(), e.variables.sort())
            }))
        })(t);
        const r = (e => Object.keys(e).reduce(((t, n) => {
            if (!fe(n) || n === de.LINK_TRACK_EVENTS || n === de.LINK_TRACK_VARS) return t;
            let a = e[n] instanceof ft ? e[n].toString() : e[n];
            return a = se(a), null === a || (((e, t) => tc() && e === de.EVAR_1 && nc.test(t))(n, a) && (a = ec(a)), a = G(a), a = a.trim().replace(/\s*\|\s*/g, "|"), t[n] = a), t
        }), {}))(t);
        if (!a && n !== Dr.PAGE_LOAD) {
            const e = (new ft).merge(t[de.LINK_TRACK_EVENTS]).merge(Ot([...t[de.EVENTS].keys()])),
                n = (new ft).merge(Js).merge(t[de.LINK_TRACK_VARS]).merge(Ot(Object.keys(r)));
            r[de.LINK_TRACK_EVENTS] = Xs(e), r[de.LINK_TRACK_VARS] = Xs(n)
        }
        return { ...e,
            beacon: r
        }
    }, (e = {}) => {
        const {
            beacon: t = {},
            element: n,
            deferred: a,
            crossDomain: r,
            callback: o
        } = e;
        if (!a) return e;
        const i = Ba(Ir.PATHS.DEFERRED_BEACON),
            s = { ...i,
                ...t
            };
        ((e = {}, t = {}) => {
            if (t[de.EVENTS] && -1 !== ac.findIndex((e => t[de.EVENTS].includes(e)))) {
                const n = rc(e[de.EVENTS], vt),
                    a = rc(t[de.EVENTS], vt),
                    r = n.merge(a);
                r.sort(), e[de.EVENTS] = r.toString()
            }
        })(s, i);
        const c = si();
        return c && n && (!!(l = n.pathname || n.action) && l.indexOf("shop") < 0 && l.indexOf("search") < 0) && (s[de.EVAR_3] = c[de.EVAR_3], s[de.PROP_20] = c[de.PROP_20]), xa(Ir.PATHS.DEFERRED_BEACON, s), r && kr(), "function" == typeof o && o(), { ...e,
            beacon: {}
        };
        var l
    }, (e = {}) => {
        const {
            type: t,
            deferred: n
        } = e;
        if (n) return e;
        switch (t) {
            case Dr.PAGE_LOAD:
                (({
                    beacon: e,
                    callback: t
                } = {}) => {
                    const n = si();
                    Object.assign(n, e), n.useBeacon = !1, n.trackPageLoad(t)
                })(e);
                break;
            case Dr.USER_INTERACTION:
                cc(e);
                break;
            case Dr.EVENT:
                si().ActivityMap && (ic = si().ActivityMap.link, si().ActivityMap.link = oc), cc(e), ic && si().ActivityMap && (si().ActivityMap.link = ic, ic = null)
        }
        return e
    }],
    xc = {
        default: [No, Nc, (e = {}) => {
            const {
                beacon: t = {},
                type: n,
                element: a
            } = e;
            if (n !== Dr.USER_INTERACTION || !(a instanceof HTMLElement)) return e;
            const r = a.closest(ko);
            if (!r) return e;
            const o = Po({
                element: a,
                parent: r,
                registerPurchaseJourney: !0
            });
            return t[de.PRODUCTS].merge(o), t[de.EVENTS].add(new yt(ue.EVENT_52)).merge(vt(a.dataset.events || r.dataset.events)), e
        }, (e = {}) => {
            const {
                element: t,
                beacon: n,
                deferred: a,
                linkType: r
            } = e;
            if (!(t instanceof HTMLElement)) return e;
            const o = {};
            return pi.forEach((e => {
                (!n[e] || n[e] instanceof ft) && (o[e] = ui({
                    name: e,
                    element: t,
                    deferred: a,
                    linkType: r
                }))
            })), zr({
                target: n,
                source: o
            }), e
        }, Ns, (e = {}) => {
            const {
                beacon: t,
                type: n,
                event: a
            } = e;
            if (!("userInteraction" === n && ((e = null) => !(!e || !e.type) && ((e => ["analytics-form-submit", "submit"].includes(e.type))(e) || (e => "click" === e.type && e.target && null !== e.target.closest("a"))(e)))(a) || (e => Ps.includes(e ? .detail ? .name))(a))) return e;
            const r = (() => {
                const e = (() => {
                        const e = window && window.performance && window.performance.timing && window.performance.timing.domInteractive || null;
                        if (!e) return null;
                        const t = parseFloat(((Date.now() - e) / 1e3).toFixed(2));
                        return t >= 900 || t <= 0 ? null : t
                    })(),
                    t = {
                        [de.EVENTS]: new ft
                    };
                return null !== e ? (t[de.EVENTS].add(new yt(Cs)), t[de.EVENTS].add(new yt(Rs, e)), t[ws] = e) : t[de.EVENTS].add(new yt(Is)), t[Os] = Ds, t
            })();
            return zr({
                target: t,
                source: r
            }), e
        }, $s, (e = {}) => {
            const {
                beacon: t,
                element: n,
                type: a
            } = e;
            if (a === Dr.PAGE_LOAD) return e;
            const r = n || window.event && window.event.target,
                o = si().findLink(r);
            return o && !o.dataset.analyticsTitle && t[de.EVENTS].add(new yt(Us)), e
        }, (e = {}) => {
            const {
                beacon: t = {},
                type: n
            } = e;
            if (n !== Dr.USER_INTERACTION && n !== Dr.EVENT) return e;
            if (0 === t[de.EVENTS].size || 0 === t[de.PRODUCTS].size) return e;
            if (!t[de.EVENTS].has(js.EVENT_TRIGGER)) return e;
            const [a] = t[de.PRODUCTS].values();
            if (a.price) return e;
            const r = document.querySelector(js.PRICE_ELEMENT_SELECTOR);
            if (!r) return e;
            const o = Z(r.textContent);
            return o ? (a.price = o, e) : e
        }, (e = {}) => {
            const {
                beacon: t = {},
                deferred: n,
                linkType: a,
                type: r
            } = e;
            return n || r === Dr.PAGE_LOAD ? e : { ...e,
                beacon: { ...t,
                    [Bs]: Hs({
                        type: r,
                        linkType: a
                    })
                }
            }
        }, e => {
            const {
                element: t,
                event: n
            } = e;
            if (!(t instanceof HTMLElement && t.dataset.ridRelay && n && "click" === n.type)) return e;
            n.preventDefault();
            const {
                beacon: a,
                queryString: r
            } = (e => (({
                queryString: e = "",
                relay: t,
                cookieData: n
            } = {}) => {
                if (!n || !t) return {
                    queryString: e
                };
                const a = ki(n),
                    r = Oi(e),
                    o = {};
                return Object.keys(t).forEach((e => {
                    a[e] && hi(e) && (r.set(t[e], a[e]), o.events = wi(o.events, e), o.eVar17 = Ri(o.eVar17, a[e]))
                })), {
                    queryString: r.toString(),
                    beacon: o
                }
            })({
                cookieData: Ks(),
                queryString: new URL(e.target.href || e.target.dataset.url).search,
                relay: Gs(e.target)
            }))(n);
            return { ...e,
                name: "relay id",
                beacon: a ? zr({
                    target: e.beacon,
                    source: a
                }) : e.beacon,
                deferred: !1,
                callback: () => {
                    const e = new URL(n.target.href || n.target.dataset.url);
                    e.search = r, window.location = e.href
                }
            }
        }, Or, (e = {}) => {
            const {
                element: t
            } = e;
            if (!(t instanceof HTMLElement && t.matches('[data-autom^="chat-with-a-specialist"]'))) return e;
            const n = lc(t, "data-analytics-content-id") || "",
                a = lc(t, "data-analytics-link-region") || lc(t, "data-analytics-region") || "body",
                r = {
                    [de.EVENTS]: new ft(new yt(ue.EVENT_340)),
                    [de.PROP_41]: `D="chat|${a}|${n}|"+pageName`
                };
            return e.deferred = !1, zr({
                target: e.beacon,
                source: r
            }), e
        }, (e = {}) => {
            const {
                element: t
            } = e;
            if (!(t instanceof HTMLElement && (e => Boolean(e.dataset.analyticsListId || e.dataset.listId))(t))) return e;
            const n = {
                [de.EVAR_59]: "list:" + Ws(t.dataset)
            };
            return zr({
                target: e.beacon,
                source: n
            }), e
        }, Ys, (e = {}) => {
            const {
                element: t,
                beacon: n = {}
            } = e;
            if (!(e => {
                    return e && ((t = e.dataset).basePartNumber || t.partNumber) && e.dataset.evar20;
                    var t
                })(t)) return e;
            const a = ga.PAGE_DATA.concat("leadQuote", (e => e.basePartNumber || ne(e.partNumber))(t.dataset)),
                r = Ba(a);
            return r ? { ...e,
                beacon: { ...n,
                    [de.EVAR_20]: r
                }
            } : e
        }],
        pageLoad: [No, Nc, $s, Or, Ys],
        additionalPageLoad: [(e = {}) => {
            const {
                beacon: t = {}
            } = e, n = (() => {
                const e = Object.entries(Lc).reduce(((e, [t, n]) => (e[t] = Ba(n), e)), {});
                return { ...Dc,
                    ...e
                }
            })();
            return { ...e,
                beacon: zr({
                    target: n,
                    source: t
                })
            }
        }, e => {
            const t = Ba("persisted.deferredBeacon");
            return Object.entries(t).forEach((([t, n]) => {
                "events" !== t ? "products" !== t ? e.beacon[t] = n : e.beacon[t].merge(Pt(n)) : e.beacon[t].merge(vt(n))
            })), e
        }, e => (xa("persisted.deferredBeacon", {}), e), e => {
            if (!e.beacon.pageName) return e;
            if (!/^AOS: Checkout/.test(e.beacon.pageName)) return e;
            try {
                const t = window.document.querySelector("#metrics");
                if (!t) return e;
                const n = JSON.parse(t.innerHTML),
                    a = n.data ? .properties ? .eventType;
                if (!a) return e;
                const r = vt(a);
                e.beacon.events.merge(r)
            } catch (e) {
                console.log("[ERROR]", e.message)
            }
            return e
        }, Nc, $s, Or, Ys]
    },
    $c = (e = {}) => {
        if (!Object.values(Dr).includes(e.type)) return e;
        e.event = e.event || window.event, e.event && (e.event.consumedByAnalytics = !0);
        const t = xc[e.pipeline || "default"];
        return [].concat(Vc, t, Mc).reduce(((e, t) => {
            try {
                return t(e)
            } catch (t) {
                return e
            }
        }), e)
    },
    Uc = e => {
        if (!e) return;
        let t = e;
        return tc() && (t = ec(t)), t = G(t), t
    },
    jc = ({
        name: e,
        beacon: t,
        data: n,
        callback: a,
        ...r
    } = {}) => {
        Br() ? e && $c({ ...r,
            beacon: t || n || {},
            type: Dr.USER_INTERACTION,
            name: Uc(e),
            callback: a
        }) : "function" == typeof a && a()
    },
    Bc = (e = {}, t, n) => fe(t) ? ce(e, t, n) : e,
    Hc = {},
    Gc = e => Array.isArray(e) ? e.join(",") : e,
    Fc = (e = {}, t, n) => {
        const {
            part: a = "",
            eVar: r = de.EVAR_5,
            action: o,
            feature: i,
            events: s,
            products: c
        } = e, l = e.node;
        if (!Br() || !("feature" in e) || !("action" in e)) return void("function" == typeof n && n());
        const d = ci({
                page: e.page,
                items: [e.slot, e.feature, a, o]
            }),
            u = Bc({}, r, d);
        if (u[de.EVENTS] = Gc(s), u[de.PRODUCTS] = Gc(c), !t || !(d in Hc)) {
            const e = `${i}|${a}|${o}`,
                t = !1;
            Hc[d] = !0, jc({
                name: e,
                beacon: u,
                element: l,
                deferred: t,
                callback: n
            })
        }
    },
    Kc = (e, t) => {
        Br() && e && "object" == typeof e ? Object.entries(e).forEach((([e, {
            microEvents: n,
            macroEvents: a,
            products: r
        } = {}]) => {
            const o = {};
            Array.isArray(n) && n.forEach((e => ({
                key: t,
                slot: n,
                feature: a,
                value: r
            } = {}) => Bc(e, t, ci({
                items: [n, a, r]
            })))(o)), o[de.EVENTS] = a, o[de.PRODUCTS] = r, jc({
                name: e,
                beacon: o,
                deferred: !1,
                callback: t
            })
        })) : "function" == typeof t && t()
    },
    Wc = () => {
        Ba(Ir.PATHS.COOKIE_DOMAIN) || xa(Ir.PATHS.COOKIE_DOMAIN, window.location.hostname.slice(window.location.hostname.lastIndexOf(".apple") + 1))
    },
    qc = "applestoreunspecified",
    zc = [...Ir.PATHS.CONFIG_OMNITURE, "account"],
    Yc = () => {
        const e = Ba(zc);
        if (!Array.isArray(e)) return qc;
        return e.map((e => e.trim())).filter(Boolean).join(",") || qc
    },
    Jc = e => e && e.indexOf(".com.") > 0 ? 3 : 2,
    Xc = () => {
        if (xr())(({
            accountsString: e,
            appMeasurementSettings: t
        }) => {
            const n = Do();
            window.AppMeasurement = n, Lo.forEach((function(e) {
                window[e.key] = e.value
            }));
            const a = n.getInstance(e);
            Object.assign(a, t), window.s = a;
            const r = [...Uo, ...ii];
            a.doPlugins = e => {
                r.forEach((({
                    config: t
                }) => {
                    "function" == typeof t && t(e)
                }))
            }, r.forEach((({
                implementation: e
            }) => {
                "function" == typeof e && e(a)
            }))
        })((() => {
            const e = Ba(Ir.PATHS.COOKIE_DOMAIN);
            return {
                accountsString: Yc(),
                appMeasurementSettings: {
                    currencyCode: "USD",
                    collectHighEntropyUserAgentHints: !0,
                    cookieDomain: e,
                    cookieDomainPeriods: Jc(e),
                    cookieLifetime: "1800",
                    dc: 112,
                    trackingServer: Ba(Ir.PATHS.TRACKING_SERVER),
                    writeSecureCookies: !0,
                    linkDownloadFileTypes: "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx",
                    linkInternalFilters: "javascript:,epp.apple.com,storeint.apple.com,store.apple.com",
                    linkLeaveQueryString: !1,
                    linkTrackEvents: "None",
                    trackDownloadLinks: !0,
                    trackExternalLinks: !1,
                    forcedLinkTrackingTimeout: 500,
                    useForcedLinkTracking: !0,
                    usePlugins: !0
                }
            }
        })());
        else {
            const e = () => {};
            window.s = {
                t: e,
                tl: e,
                pageName: "disabled",
                disabled: !0
            }
        }
    },
    Qc = "analytics-form-submit",
    Zc = () => {
        if (!Br()) return;
        const e = HTMLFormElement.prototype.submit;
        let t;
        HTMLFormElement.prototype.submit = function(...n) {
            try {
                return t = new Event(Qc, {
                    bubbles: !0,
                    cancelable: !0
                }), this.dispatchEvent(t), e.call(this, ...n)
            } catch (e) {
                t = document.createEvent("Event"), t.initEvent(Qc, !0, !0), t.__preventDefault = t.preventDefault, t.preventDefault = () => {
                    Object.defineProperty(t, "defaultPrevented", {
                        get: () => !0
                    }), t.__preventDefault()
                }
            }
            return this.dispatchEvent(t), e.call(this, ...n)
        }
    },
    el = e => {
        (e => {
            "object" == typeof e && Object.keys(e).length > 0 ? ja({ ...Oc,
                state: {
                    defaultState: e
                }
            }) : ja(Oc), Wc(), Tr();
            const t = Ba("pageDataModel.config.asMetrics.dataMule") || null,
                n = Ba("pageDataModel.config.global.cookieDomain") || null;
            or({
                muleVersion: t,
                cookieDomain: n
            })
        })(e), Xc(), Zc(), qa()
    };
var tl = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        window.dispatchEvent(new CustomEvent("graffiti:state:update", {
            detail: {
                data: e,
                type: t,
                version: "v0"
            }
        }))
    },
    nl = function(e, t) {
        window.dispatchEvent(new CustomEvent("graffiti:event:custom", {
            detail: {
                name: e,
                data: t,
                version: "v0"
            }
        }))
    };
const al = {
        engagementObserver: {},
        onPageEnd: () => {},
        element: null
    },
    rl = e => {
        if (e[0].intersectionRatio <= 0) return;
        const t = {
            [de.EVENTS]: new ft(new yt([ue.EVENT_406]))
        };
        al.onPageEnd({
            beacon: t
        }), al.engagementObserver.disconnect()
    },
    ol = ({
        element: e
    }) => {
        al.engagementObserver = new IntersectionObserver(rl), al.engagementObserver.observe(e)
    };
let il = !1;
const sl = {
        root: null,
        sensitivity: .01,
        engageThreshold: 0,
        disengageThreshold: 0
    },
    cl = {
        sensitivity: {
            min: .01,
            max: 1
        },
        thresholds: {
            min: 0,
            max: 1
        }
    },
    ll = class {
        constructor(e) {
            this.options = { ...sl,
                ...this.getSanitizedOptions(e)
            }, this.observables = new Map, this.observer = new IntersectionObserver(this.observerCallback.bind(this), {
                root: this.options.root,
                threshold: this.getObserverThreshold()
            })
        }
        getSanitizedOptions(e) {
            if ("object" != typeof e) return {};
            const t = cl,
                n = {};
            return (null === e.root || e.root instanceof Element) && (n.root = e.root), e.sensitivity >= t.sensitivity.min && e.sensitivity <= t.sensitivity.max && (n.sensitivity = Number(e.sensitivity.toFixed(2))), e.engageThreshold >= t.thresholds.min && e.engageThreshold <= t.thresholds.max && (n.engageThreshold = Number(e.engageThreshold.toFixed(2))), e.disengageThreshold >= t.thresholds.min && e.disengageThreshold <= t.thresholds.max && (n.disengageThreshold = Number(e.disengageThreshold.toFixed(2))), n
        }
        getObserverThreshold() {
            const e = this.options.sensitivity || .01,
                t = [];
            for (let n = 0; n <= 1; n += e) t.push(Number(n.toFixed(2)));
            return 1 !== t[t.length - 1] && t.push(1), t
        }
        getIntersectionRatio(e) {
            if (!e || !e.isIntersecting) return 0;
            let t = e.intersectionRatio;
            if (e.boundingClientRect.width > e.rootBounds.width || e.boundingClientRect.height > e.rootBounds.height) {
                const n = Math.min(e.boundingClientRect.width, e.rootBounds.width) * Math.min(e.boundingClientRect.height, e.rootBounds.height),
                    a = e.boundingClientRect.width * e.boundingClientRect.height;
                t = n > 0 ? t * a / n : 0
            }
            return t
        }
        observerCallback(e) {
            e.forEach((e => {
                const t = this.observables.get(e.target);
                if (!t) return;
                const n = this.getIntersectionRatio(e);
                t.engaged && (!e.isIntersecting || n <= this.options.disengageThreshold) ? this.disengage(t, e.target) : !t.engaged && n >= this.options.engageThreshold && this.engage(t, e.target)
            }))
        }
        engage(e, t) {
            const n = Date.now(),
                a = new CustomEvent("observableEngaged", {
                    bubbles: !0,
                    detail: {
                        data: e.data,
                        observer: this,
                        time: n - e.time
                    }
                });
            he(t, a), e.engaged = !0, e.time = n
        }
        disengage(e, t) {
            const n = Date.now(),
                a = new CustomEvent("observableDisengaged", {
                    bubbles: !0,
                    detail: {
                        data: e.data,
                        observer: this,
                        time: n - e.time
                    }
                });
            he(t, a), e.engaged = !1, e.time = n
        }
        observeWithData(e, t) {
            e instanceof Element && (this.observables.set(e, {
                data: t,
                engaged: !1,
                time: Date.now()
            }), this.observer.observe(e))
        }
        observe(...e) {
            e.forEach((e => this.observeWithData.bind(this)(e)))
        }
        unobserve(...e) {
            e.forEach((e => {
                e instanceof Element && (this.observer.unobserve(e), this.observables.delete(e))
            }))
        }
        update(e, t, n) {
            if (!(e instanceof Element && t instanceof Element)) return;
            e !== t && this.observer.unobserve(e);
            const a = this.observables.get(e);
            void 0 !== n && (a.data = n), e !== t && (this.observables.set(t, a), this.observables.delete(e), this.observer.observe(t))
        }
        takeRecords() {
            const e = Date.now(),
                t = [];
            return this.observables.forEach(((n, a) => {
                t.push({
                    element: a,
                    engaged: n.engaged,
                    time: e - n.time,
                    data: n.data
                })
            })), t
        }
        getSize() {
            return this.observables.size
        }
        disconnect() {
            this.observer.disconnect(), this.observables.clear()
        }
    },
    dl = "[data-analytics-section],[data-analytics-section-engagement]",
    ul = .33,
    pl = .48,
    gl = 1e3,
    ml = "section engagement",
    fl = de.PROP_34,
    El = de.PROP_35,
    yl = de.PROP_36,
    bl = ue.EVENT_243,
    _l = ue.EVENT_244,
    vl = ue.EVENT_4,
    hl = gl,
    Al = 2,
    Sl = /^mzone:/i,
    Tl = {
        coupling: null,
        config: k,
        trackedSections: null,
        processedSections: null,
        engagementObserver: null,
        onScrollDebounced: null
    },
    Nl = e => {
        e.detail.observer === Tl.engagementObserver && (e.detail.time < Tl.config.ENGAGE_TIME_THRESHOLD || wl({
            section: e.target,
            time: e.detail.time,
            name: e.detail.data.name,
            position: e.detail.data.position
        }))
    },
    kl = () => {
        window.document.body.removeEventListener("observableDisengaged", Nl), window.removeEventListener("scroll", Tl.onScrollDebounced), window.removeEventListener("resize", Tl.onScrollDebounced)
    },
    Ol = "content",
    wl = ({
        section: e,
        name: t,
        time: n,
        position: a
    } = {}) => {
        if (Tl.engagementObserver.unobserve(e), 0 === Tl.engagementObserver.getSize() && kl(), Tl.processedSections.has(t)) return;
        Tl.processedSections.add(t);
        const r = (n / 1e3).toFixed(Tl.config.PRECISION),
            o = new ft(new yt(Tl.config.BEACON_EVENT), new yt(Tl.config.BEACON_EVENT_TIME_ENGAGED, r)),
            i = {
                [Tl.config.BEACON_VAR]: t.toLowerCase(),
                [Tl.config.BEACON_VAR_TIME_ENGAGED]: r,
                [Tl.config.BEACON_VAR_POSITION_NUMBER]: String(a)
            };
        if (Sl.test(t)) {
            const n = (({
                section: e,
                zoneId: t = ""
            } = {}) => {
                if (!e) return null;
                const n = Array.from(e.querySelectorAll('[role="listitem"]')),
                    a = new ft;
                return n.forEach(((e, r) => {
                    const o = e.querySelector("form,a,button"),
                        {
                            key: i,
                            category: s,
                            ruleId: c
                        } = (({
                            element: e,
                            module: t
                        }) => {
                            const n = (({
                                element: e,
                                module: t
                            }) => n => e && e.dataset[n] || t && t.dataset[n] || "")({
                                element: e,
                                module: t
                            });
                            let a = n("basePartNumber") || n("partNumber"),
                                r = n("category");
                            const o = n("ruleId");
                            return "" === a && (a = n("moduleId"), r = Ol), {
                                key: a,
                                ruleId: o,
                                category: r
                            }
                        })({
                            element: o,
                            module: e
                        });
                    if ("" === i) return;
                    const l = `${r+1}/${n.length}`,
                        d = new ft(new _t(de.EVAR_60, t), new _t(de.EVAR_61, c), new _t(de.EVAR_65, l)),
                        u = s === Ol ? new Nt({
                            moduleId: i,
                            variables: d
                        }) : new St({
                            category: s,
                            sku: i,
                            variables: d
                        });
                    a.add(u)
                })), 0 === a.size ? null : a
            })({
                section: e,
                zoneId: t.slice(t.indexOf(":") + 1)
            });
            null !== n && (i[de.PRODUCTS] = n, o.add(new yt(Tl.config.BEACON_EVENT_MERCH_IMPRESSION)))
        }
        i[de.EVENTS] = o.toString(), Tl.coupling.sendUserInteraction({
            name: Tl.config.BEACON_NAME,
            beacon: i
        })
    },
    Rl = () => {
        window.innerHeight + window.pageYOffset < window.document.body.offsetHeight - 2 || Tl.engagementObserver.takeRecords().filter((({
            engaged: e,
            time: t
        }) => e && t >= Tl.config.ENGAGE_TIME_THRESHOLD)).forEach((({
            element: e,
            time: t,
            data: n
        }) => {
            wl({
                section: e,
                name: n.name,
                time: t,
                position: n.position
            })
        }))
    },
    Cl = () => Tl.config.sections ? (e => {
        const t = [];
        if (0 === e.length) return t;
        const n = e.reduce(((e, [t]) => e.concat(t)), []).join(","),
            a = Array.from({
                length: e.length
            }, (() => !1));
        return Array.from(document.querySelectorAll(n)).forEach((n => {
            for (let r = 0; r < e.length; r++) {
                const [o, i] = e[r];
                if (a[r]) continue;
                const s = document.querySelector(o);
                n.isEqualNode(s) && (a[r] = !0, i && t.push({
                    section: s,
                    name: i,
                    position: t.length + 1
                }))
            }
            return null
        })), t
    })(Tl.config.sections) : (e => {
        const t = [],
            n = new Set;
        return [...document.querySelectorAll(e)].forEach((e => {
            const a = Tl.coupling.getSectionName(e);
            a && !n.has(a) && (n.add(a), t.push({
                section: e,
                name: a,
                position: t.length + 1
            }))
        })), t
    })(Tl.config.SELECTOR),
    Il = () => {
        Tl.engagementObserver.disconnect();
        const e = Cl().filter((({
            name: e
        }) => !Tl.processedSections.has(e)));
        e.length ? (window.document.body.addEventListener("observableDisengaged", Nl), window.addEventListener("scroll", Tl.onScrollDebounced), window.addEventListener("resize", Tl.onScrollDebounced), e.forEach((({
            section: e,
            name: t,
            position: n
        }) => {
            Tl.engagementObserver.observeWithData(e, {
                name: t,
                position: n
            })
        })), Tl.trackedSections = e) : kl()
    },
    Pl = () => {
        Tl.engagementObserver.disconnect(), Tl.processedSections.clear()
    },
    Dl = () => {
        Pl(), Il()
    },
    Ll = {
        update: Il,
        pageLoad: () => {
            Dl()
        },
        reset: Dl,
        stop: Pl,
        debug: {
            trackedSections: () => Tl.trackedSections.map((e => ({ ...e
            })))
        }
    };
let Vl = !1;
const Ml = e => jc({ ...e,
        deferred: !1
    }),
    xl = e => e instanceof HTMLElement && e.dataset.analyticsSection,
    $l = (({
        coupling: e,
        config: t
    } = {}) => (Vl || ((({
        coupling: e,
        config: t = {}
    } = {}) => {
        "object" != typeof e || !t.sections && "function" != typeof e.getSectionName || "function" != typeof e.sendUserInteraction ? console.warn("Analytics Section Engagement could not find an interface to work with") : (Tl.coupling = e, Tl.config = { ...Tl.config,
            ...t
        }, Tl.trackedSections = new Set, Tl.processedSections = new Set, Tl.engagementObserver = new ll({
            engageThreshold: Tl.config.ENGAGE_THRESHOLD,
            disengageThreshold: Tl.config.DISENGAGE_THRESHOLD
        }), Tl.onScrollDebounced = Ae(Rl, Tl.config.SCROLL_DEBOUNCE_DELAY))
    })({
        coupling: e,
        config: t
    }), Vl = !0), Ll))((() => {
        let e = {
            coupling: {
                sendUserInteraction: Ml,
                getSectionName: xl
            }
        };
        try {
            const t = document.querySelector("#metrics"),
                n = JSON.parse(t.textContent);
            n.data.sectionEngagement && (e = {
                coupling: {
                    sendUserInteraction: Ml
                },
                config: {
                    sections: n.data.sectionEngagement
                }
            })
        } catch (e) {}
        return e
    })()),
    Ul = () => {
        const e = (({
            queryString: e = "",
            cookieData: t = ""
        } = {}) => {
            const n = ki(t),
                a = Oi(e).get("rid");
            return a && (n[a.slice(0, 3)] = encodeURIComponent(a.slice(4))), (e => {
                const t = Ti(e);
                return Object.keys(t).reduce(((e, n) => "" === e ? Ni(n, t) : `${e}|${Ni(n,t)}`), "")
            })(n)
        })({
            queryString: window.location.search.slice(1),
            cookieData: Ks()
        });
        var t;
        return (t = e) && X(Fs.name, t, { ...Fs,
            domain: Ba([...ga.CONFIG, "global", "cookieDomain"])
        }), e
    },
    jl = e => e.querySelector("form"),
    Bl = e => e && e.dataset && (e.dataset.basePartNumber || e.dataset.partNumber) || "",
    Hl = Bl,
    Gl = (e, t) => e.concat(Array.from(t.querySelectorAll('[data-analytics-type="tile:watch"], .rs-wuipselect-grid-tile')).map((e => ({
        tile: e,
        element: jl(e)
    }))).filter((({
        element: e
    }) => e)).map((({
        tile: e,
        element: n
    }, a, r) => ({
        id: Hl(n),
        parent: e,
        element: n,
        gridParent: t,
        position: `${a+1}/${r.length}`
    })))),
    Fl = [];
let Kl = null;
const Wl = () => {
        clearTimeout(Kl);
        const e = Fl.splice(0, 6);
        if (e.length) {
            const t = {
                [de.EVENTS]: ue.EVENT_4,
                [de.PRODUCTS]: new ft(...e)
            };
            jc({
                name: "watch-grid",
                data: t
            })
        }
    },
    ql = (() => {
        const e = new Map,
            t = new ll({
                engageThreshold: .2,
                disengageThreshold: .2
            });
        return {
            register: (n, a, r) => {
                (t => !e.has(t))(n) ? ((t, n) => {
                    e.set(t, {
                        triggered: !1,
                        data: n
                    })
                })(n, a) : ((t, n) => {
                    e.set(t, { ...e.get(t),
                        data: n
                    })
                })(n, a);
                const o = e.get(n);
                o.triggered || t.observe(r(o.data))
            },
            trigger: (n, a) => {
                const r = e.get(n);
                return r.triggered ? (t.unobserve(a(r.data)), !1) : (e.set(n, { ...r,
                    triggered: !0
                }), t.unobserve(a(r.data)), !0)
            },
            get: t => e.get(t).data,
            stopWatching: () => t.disconnect(),
            isEventFromWatcher: e => !e.detail || !e.detail.observer || e.detail.observer !== t
        }
    })(),
    zl = ({
        parent: e
    }) => e,
    Yl = () => {
        Br() && (Jl(), window.document.body.addEventListener("observableEngaged", (e => {
            if (ql.isEventFromWatcher(e)) return;
            const t = jl(e.target);
            if (!(t && t instanceof HTMLElement)) return;
            const n = Hl(t);
            if (ql.trigger(n, zl)) {
                const e = ql.get(n),
                    t = (({
                        element: e,
                        position: t
                    } = {}) => {
                        const n = Bl(e),
                            a = si(),
                            r = bc(a.products),
                            o = window && window.BUYFLOW_MESSAGES_BOOTSTRAP && window.BUYFLOW_MESSAGES_BOOTSTRAP.acmiEnabled || !1,
                            i = new ft(new _t(de.EVAR_60, "watch grid"), new _t(de.EVAR_65, t || "1/1"));
                        return o && i.add(new _t(de.EVAR_63, "acmi")), new St({
                            category: r,
                            sku: n,
                            variables: i
                        })
                    })({
                        element: e.element,
                        position: e.position
                    });
                (e => {
                    Fl.push(e), Fl.length >= 6 ? Wl() : (clearTimeout(Kl), Kl = setTimeout(Wl, 3e3))
                })(t)
            }
        })))
    },
    Jl = () => {
        Br() && (ql.stopWatching(), Array.from(window.document.querySelectorAll('[data-analytics-type="grid:watch"], .as-watch-grid')).reduce(Gl, []).forEach((e => {
            ql.register(e.id, e, zl)
        })))
    },
    Xl = "shelf interaction",
    Ql = (e, t) => ({
        [de.EVENTS]: t,
        [de.EVAR_6]: `D=pageName+"||${e}||gallery|Swipe"`
    }),
    Zl = ({
        cardsScroller: e,
        lastCard: t,
        shelfName: n
    }) => {
        let a, r = !1;
        e.addEventListener("scroll", (() => {
            r || ((({
                shelfName: e,
                cardsScroller: t,
                lastCard: n
            }) => {
                const a = new IntersectionObserver((([{
                    isIntersecting: t
                }]) => {
                    t && (e => {
                        jc({
                            name: Xl,
                            beacon: Ql(e, ue.EVENT_437)
                        })
                    })(e)
                }), {
                    root: t,
                    threshold: .9
                });
                a.observe(n)
            })({
                cardsScroller: e,
                lastCard: t,
                shelfName: n
            }), r = !0), clearTimeout(a), a = setTimeout((() => (e => jc({
                name: Xl,
                beacon: Ql(e, ue.EVENT_436)
            }))(n)), 200)
        }))
    },
    ed = () => document.querySelectorAll(".rs-cardsshelf:not([data-analytics-shelf-observed=true])").forEach((e => {
        const t = (e => {
            const t = e.querySelector(".rf-cards-scroller-overflow"),
                n = e.querySelector("[data-analytics-region]"),
                a = e.querySelector(".rf-cards-scroller-platter"),
                r = a ? .lastElementChild,
                o = n ? .dataset ? .analyticsRegion;
            if (t && r) return {
                cardsScroller: t,
                lastCard: r,
                shelfName: o
            }
        })(e);
        t && (Zl(t), e.dataset.analyticsShelfObserved = "true")
    })),
    td = e => e.toFixed(0),
    nd = e => {
        if (!e) return {};
        const t = td(e.videoElement.duration),
            n = td(e.videoElement.currentTime),
            a = {
                [de.EVAR_87]: e.key,
                [de.EVAR_91]: t,
                [de.EVAR_92]: n,
                [de.EVENTS]: new ft(new yt(ue.EVENT_69, n), new yt(ue.EVENT_233, t))
            };
        if (e.videoElement.textTracks && e.videoElement.textTracks.length)
            for (const t of e.videoElement.textTracks)
                if ("chapters" === t.kind && "showing" === t.mode && t.activeCues.length) {
                    const [e] = t.activeCues;
                    if (e.text) {
                        a[de.EVAR_151] = e.text;
                        break
                    }
                }
        return a
    },
    ad = [{
        mark: 0,
        event: new yt(ue.EVENT_2)
    }, {
        mark: .1,
        event: new yt(ue.EVENT_73)
    }, {
        mark: .25,
        event: new yt(ue.EVENT_74)
    }, {
        mark: .5,
        event: new yt(ue.EVENT_75)
    }, {
        mark: .75,
        event: new yt(ue.EVENT_76)
    }, {
        mark: .9,
        event: new yt(ue.EVENT_77)
    }, {
        mark: 1,
        event: new yt(ue.EVENT_72)
    }],
    rd = [{
        label: "0",
        from: 0,
        to: .1,
        event: new yt(ue.EVENT_214)
    }, {
        label: "10",
        from: .1,
        to: .25,
        event: new yt(ue.EVENT_215)
    }, {
        label: "25",
        from: .25,
        to: .5,
        event: new yt(ue.EVENT_216)
    }, {
        label: "50",
        from: .5,
        to: .75,
        event: new yt(ue.EVENT_217)
    }, {
        label: "75",
        from: .75,
        to: .9,
        event: new yt(ue.EVENT_218)
    }, {
        label: "90",
        from: .9,
        to: 1,
        event: new yt(ue.EVENT_219)
    }],
    od = () => ({
        active: !0,
        unplayedMilestones: ad.map((({
            mark: e
        }) => e))
    }),
    id = (e, t) => ({ ...e,
        active: t
    }),
    sd = (e, t) => ({ ...e,
        unplayedMilestones: e.unplayedMilestones.filter((e => e !== t))
    }),
    cd = (e = {}) => {
        const {
            currentTime: t,
            duration: n
        } = e;
        return t && n ? t / n : 0
    },
    ld = ({
        videoList: e,
        key: t,
        milestonesPassed: n
    } = {}) => {
        if (!e) return;
        const a = e.get(t);
        a && e.set(t, { ...a,
            state: n.reduce(sd, a.state)
        })
    },
    dd = ({
        video: e,
        percentTime: t
    }) => e.state.unplayedMilestones.filter((e => e <= t)),
    ud = "No key found",
    pd = "Complete",
    gd = ({
        videoList: e,
        coupling: t
    }, n) => {
        const a = t.getVideoId(n.target),
            r = a ? a.toLowerCase() : null;
        if (!r) return ud;
        const o = e.get(r);
        if (!o || o.videoElement.paused) return "No video or playing video found";
        const i = cd(o.videoElement),
            s = dd({
                video: o,
                percentTime: i
            });
        if (0 === s.length) return "No milestone passed";
        const c = nd(o),
            l = (e => e.map((e => ad.find((t => t.mark === e)).event)).filter(((e, t) => 0 === t)))(s);
        c[de.PROP_16] = "video milestone", c[de.EVAR_16] = '"D=c16"';
        let d = `v@m${100*s[0]}: ${o.key}`;
        l[0].key === ue.EVENT_2 && (c[de.PROP_13] = `v@s: ${o.key}`, c[de.PROP_16] = "video plays", c[de.EVAR_92] = "0", c[de.EVENTS].get(ue.EVENT_69).value = "0", d = `v@s: ${o.key}`), c[de.EVENTS].merge(...l), ld({
            videoList: e,
            key: r,
            milestonesPassed: s
        });
        const u = {
            data: c,
            name: d
        };
        return 0 === s[0] ? t.sendUserInteraction(u) : t.sendEvent(u), pd
    },
    md = ({
        videoList: e,
        coupling: t
    }, n) => {
        const a = t.getVideoId(n.target),
            r = a ? a.toLowerCase() : null;
        if (!r) return ud;
        const o = e.get(r),
            i = cd(o.videoElement),
            s = nd(o);
        s[de.PROP_16] = "video seeked", s[de.EVAR_16] = '"D=c16"';
        const c = rd.reduce(((e, {
                label: t,
                from: n,
                to: a,
                event: r
            }) => {
                if (!(i >= n && i <= a)) return e;
                const o = { ...e,
                    [de.EVAR_96]: t
                };
                return o[de.EVENTS].add(r), o
            }), s),
            l = dd({
                video: o,
                percentTime: i
            });
        return ld({
            videoList: e,
            key: r,
            milestonesPassed: l
        }), t.sendUserInteraction({
            name: `v@sk${c[de.EVAR_96]}: ${o.key}`,
            data: c
        }), pd
    },
    fd = ({
        videoList: e,
        coupling: t
    }, n) => {
        const a = t.getVideoId(n.target),
            r = a ? a.toLowerCase() : null;
        if (!r) return ud;
        const o = e.get(r),
            i = ad.find((e => 1 === e.mark)).event,
            s = nd(o);
        return s[de.EVENTS].add(i), s[de.PROP_13] = `v@e: ${o.key}`, s[de.PROP_16] = "video ends", s[de.EVAR_16] = '"D=c16"', t.sendEvent({
            data: s,
            name: `v@e: ${o.key}`
        }), e.set(r, { ...o,
            state: od()
        }), pd
    },
    Ed = ({
        videoList: e,
        config: t
    }) => {
        if (t && t.coupling) return {
            update: () => {
                const {
                    coupling: n
                } = t;
                e.forEach(((t, n) => {
                    t.listeners.forEach((({
                        type: e,
                        fn: n
                    }) => {
                        t.videoElement.removeEventListener(e, n)
                    })), e.set(n, { ...t,
                        state: id(t.state, !1)
                    })
                })), n.getVideos().forEach((t => {
                    const a = t.querySelector("video");
                    if (!a) return;
                    const r = n.getVideoId(a);
                    if (!r || "string" != typeof r) return;
                    const o = r.toLowerCase();
                    e.has(o) ? e.set(o, { ...e.get(o),
                        videoElement: a,
                        state: id(e.get(o).state, !0)
                    }) : e.set(o, {
                        key: o,
                        containerElement: t,
                        videoElement: a,
                        state: od()
                    })
                })), e.forEach(((t, a) => {
                    if (t.state.active) {
                        const r = gd.bind(null, {
                                videoList: e,
                                coupling: n
                            }),
                            o = md.bind(null, {
                                videoList: e,
                                coupling: n
                            }),
                            i = fd.bind(null, {
                                videoList: e,
                                coupling: n
                            }),
                            s = [{
                                type: "timeupdate",
                                fn: r
                            }, {
                                type: "seeked",
                                fn: Ae(o, 500)
                            }, {
                                type: "ended",
                                fn: i
                            }];
                        s.forEach((({
                            type: e,
                            fn: n
                        }) => {
                            t.videoElement.addEventListener(e, n)
                        })), e.set(a, { ...e.get(a),
                            listeners: s
                        })
                    }
                }))
            }
        };
        console.warn("Analytics video could not find an interface to work with")
    },
    yd = ({
        name: e,
        beacon: t,
        data: n,
        callback: a,
        ...r
    } = {}) => {
        Br() ? e && (n || t) && $c({ ...r,
            beacon: t || n,
            type: Dr.EVENT,
            linkType: ge,
            name: e,
            callback: a
        }) : "function" == typeof a && a()
    },
    bd = {
        coupling: {
            sendEvent: yd,
            sendUserInteraction: jc,
            getVideoId: e => e.parentElement.dataset.analyticsId,
            getVideos: () => Array.from(window.document.querySelectorAll("[data-analytics-id]"))
        }
    },
    {
        update: _d
    } = (e => {
        const t = new Map;
        return Ed({
            videoList: t,
            config: e
        })
    })(bd),
    vd = _d,
    hd = ({
        address: e = null,
        deliveryMessage: t = {},
        defaultLocationEnabled: n = null
    } = {}) => e && !(e => {
        for (const t in e)
            if (e.hasOwnProperty(t)) return !1;
        return JSON.stringify(e) === JSON.stringify({})
    })(e) ? "address" : t.geoLocated || t.dudeLocated || t.dudeWarmedForOmniture ? "Warm" : n ? "location=default" : "Cold",
    Ad = " | ",
    Sd = ";;",
    Td = ({
        deliveryOptionMessages: e,
        quote: t = "",
        orderByDeliveryBy: n = ""
    } = {}) => Array.isArray(e) && 0 !== e.length ? e.map((e => e.displayName)).join(Sd) : t || n,
    Nd = ({
        basePartNumber: e = "",
        commitCodeId: t = "",
        addressForEVar20: n = "",
        messageType: a = ""
    } = {}) => {
        return [e, t, n, a].reduce((r = Ad, (e, t, n) => 0 === n ? t : e + r + t), "");
        var r
    },
    kd = ({
        deliveryMessage: e,
        deliveryOptionMessages: t,
        defaultLocationEnabled: n,
        quote: a,
        basePartNumber: r,
        commitCodeId: o,
        messageType: i,
        address: s,
        idl: c,
        orderByDeliveryBy: l
    } = {}) => ({
        action: Td({
            deliveryOptionMessages: t,
            quote: a,
            orderByDeliveryBy: l
        }),
        feature: Nd({
            basePartNumber: r,
            commitCodeId: o,
            messageType: i,
            addressForEVar20: hd({
                address: s,
                deliveryMessage: e,
                defaultLocationEnabled: n
            })
        }),
        basePartNumber: r,
        ...c ? {
            events: "event70"
        } : {}
    }),
    Od = ({
        feature: e,
        action: t,
        basePartNumber: n,
        events: a = null
    } = {}) => {
        const r = `${e}${Ad}${t}`,
            o = `D=pageName+"${Ad}${r}"`,
            i = {
                [de.EVAR_20]: o
            };
        null !== a && (i[de.EVENTS] = a), xa(ga.PAGE_DATA.concat("leadQuote", n), o), ur("beacon", i), pr("api", [{
            type: "leadQuote",
            value: r
        }])
    },
    wd = e => Br() && e ? (Array.isArray(e) ? e : [e]).filter((e => e && "object" == typeof e)).map(kd).map(Od) : [],
    Rd = e => {
        if (!Br() || !e || !e.status) return;
        const {
            status: t
        } = e, n = {
            [de.EVAR_35]: t
        };
        ur("beacon", n), pr("api", [{
            type: "appleCard",
            value: t
        }])
    },
    Cd = ({
        key: e,
        value: t
    } = {}) => {
        Br() && e && t && Object.values(de).includes(e) && (ur("beacon", {
            [e]: t
        }), pr("api", [{
            type: "mvt",
            value: t
        }]))
    },
    Id = ({
        position: e = "",
        deliveryHeader: t = "",
        leadByPickup: n = "",
        deliveryOrderSortBy: a = "",
        fastestShipMethodPriceLabel: r = "",
        cutoffFormat: o = "",
        templateId: i = ""
    } = {}) => {
        if (!Br()) return;
        const s = [e, t, n, a, r, o, i].join("|");
        pr("api", [{
            type: "dude_2",
            value: s
        }])
    },
    Pd = ({
        status: e,
        area: t
    } = {}) => {
        if (!Br() || !e || !t) return;
        const n = {};
        let a = "";
        "displayed" === e ? (a = "displayed", n[de.EVENTS] = "event134") : (a = "not setup", n[de.EVENTS] = "event133");
        const r = `${t}|Apple Pay||${a}`;
        n[de.EVAR_5] = `D=pageName+"|${r}"`, ur("beacon", n), pr("api", [{
            type: "applePay",
            value: r
        }])
    },
    Dd = ({
        state: e = "default",
        inStock: t = null,
        withSetup: n = null
    } = {}) => {
        if (!Br()) return;
        const {
            stateValue: a,
            events: r
        } = (({
            state: e,
            inStock: t,
            withSetup: n
        }) => {
            let a;
            const r = new ft;
            switch (e) {
                case "cold":
                    a = ["cold start"], r.add(new yt("event33"));
                    break;
                case "warm":
                    a = ["warm start", "Dude"], r.add(new yt("event34"));
                    break;
                case "warm-geo":
                    a = ["warm start", "Geolocation"], r.add(new yt("event34"));
                    break;
                default:
                    a = ["default", "Dude"], r.add(new yt("event51"))
            }
            return null !== t && r.add(new yt("event461", t)), null !== n && r.add(new yt("event417", n)), {
                stateValue: a.join("|"),
                events: r.toString()
            }
        })({
            state: e,
            inStock: t,
            withSetup: n
        }), o = {
            [de.EVENTS]: r,
            [de.PROP_37]: `D=pageName+"|${a}"`
        }, i = {
            type: "dude",
            value: a
        };
        ur("beacon", o), pr("api", [i])
    },
    Ld = ({
        area: e,
        name: t,
        current: n,
        previous: a,
        action: r
    }) => {
        const o = {
            [de.PROP_3]: `${e}|${t}|${n}`
        };
        a && (o[de.PROP_2] = `${e}|${t}|${a}`), jc({
            name: `gallery|${r}|${e}|${t}`,
            beacon: o
        })
    },
    Vd = ({
        area: e,
        name: t,
        current: n,
        action: a
    }) => {
        const r = {
            [de.EVAR_6]: `D=pageName+"|${e}|Gallery|${t}|${a}|${n}"`
        };
        jc({
            name: `gallery|${a}|${e}|${t}`,
            beacon: r
        })
    },
    Md = ({
        area: e,
        name: t
    }) => Ld({
        area: e,
        name: t,
        current: "open",
        action: "open"
    }),
    xd = ({
        area: e,
        name: t
    }) => Ld({
        area: e,
        name: t,
        current: "close",
        action: "close"
    }),
    $d = ({
        area: e,
        name: t,
        current: n,
        previous: a,
        total: r,
        legacy: o = !1
    }) => {
        const i = {
            area: e,
            name: t,
            current: `${n}/${r}`,
            action: "view"
        };
        a && (i.previous = `${a}/${r}`), o ? Vd({ ...i,
            action: "swipe"
        }) : Ld(i)
    },
    Ud = e => (document.body.addEventListener("observableEngaged", e), () => {
        document.body.removeEventListener("observableEngaged", e)
    });
let jd = !1;
const Bd = {
        open: Md,
        close: xd,
        view: $d,
        createGallery: ({
            area: e,
            name: t,
            total: n
        }) => {
            let a;
            return {
                open: () => Md({
                    area: e,
                    name: t
                }),
                close: () => xd({
                    area: e,
                    name: t
                }),
                view: r => {
                    const o = {
                        area: e,
                        name: t,
                        current: r,
                        total: n
                    };
                    a && (o.previous = a), $d(o), a = r
                }
            }
        },
        autoTracking: {
            update: () => jd && jd.update(),
            stop: () => jd && jd.stop(),
            reset: () => jd && jd.reset(),
            pageLoad: () => jd && jd.pageLoad(),
            debug: {
                get activeSlides() {
                    return jd && jd.debug.activeSlides
                }
            },
            init: () => {
                jd || (jd = (({
                    gallerySelector: e,
                    getGalleryName: t,
                    area: n
                }) => {
                    const a = new ll({
                            engageThreshold: .6,
                            disengageThreshold: .3
                        }),
                        r = {},
                        o = (({
                            observer: e,
                            activeSlides: t,
                            area: n
                        }) => a => {
                            if (a.detail.observer !== e) return;
                            const {
                                name: r,
                                position: o,
                                total: i
                            } = a.detail.data;
                            "observableEngaged" === a.type && (t[r] && t[r] !== o && Vd({
                                area: n,
                                name: r,
                                current: `${o}/${i}`,
                                previous: `${t[r]}/${i}`,
                                action: "Swipe"
                            }), t[r] = o)
                        })({
                            observer: a,
                            activeSlides: r,
                            area: n
                        });
                    let i = Ud(o);
                    const s = () => {
                            var n;
                            a.disconnect(), (n = e, document.querySelectorAll(n)).forEach((e => {
                                const n = t(e);
                                e.childNodes.forEach(((e, t, r) => {
                                    a.observeWithData(e, {
                                        name: n,
                                        position: t + 1,
                                        total: r.length
                                    })
                                }))
                            }))
                        },
                        c = () => {
                            i(), a.disconnect(), Object.keys(r).forEach((e => {
                                delete r[e]
                            }))
                        },
                        l = () => {
                            c(), i = Ud(o), s()
                        };
                    return s(), {
                        update: s,
                        stop: c,
                        reset: l,
                        pageLoad: l,
                        debug: {
                            get activeSlides() {
                                return JSON.parse(JSON.stringify(r))
                            }
                        }
                    }
                })({
                    gallerySelector: "[data-analytics-gallery]",
                    getGalleryName: e => e.closest("[data-analytics-gallery]").dataset.analyticsGallery,
                    area: Ba("pageDataModel.data.step") || "Step 1"
                }))
            }
        }
    },
    Hd = ({
        message: e,
        name: t = "generic"
    } = {}) => {
        if (!e || "string" != typeof e || !e.trim()) return;
        const n = {
            [de.EVAR_152]: `D=pageName+"|error|${e.replaceAll('"',"'")}"`,
            [de.EVENTS]: new ft(new yt(ue.EVENT_388))
        };
        jc({
            name: `error.${t}`,
            beacon: n
        })
    },
    Gd = {
        EVENT_LIST_SAVE: ue.EVENT_10,
        EVENT_LIST_SAVE_ERROR: ue.EVENT_388
    },
    Fd = e => "string" == typeof e && "" !== Me(e),
    Kd = ({
        listId: e
    } = {}) => {
        if (!Fd(e)) return;
        const t = {
            [de.EVAR_59]: `list:${e}`,
            [de.PROP_3]: 'D=pageName+" | save new list"',
            [de.EVENTS]: new ft(new yt(Gd.EVENT_LIST_SAVE))
        };
        jc({
            name: "takeaway.onListSaved",
            beacon: t
        })
    },
    Wd = ({
        message: e
    } = {}) => Hd({
        message: e,
        name: "takeaway.onListSaveError"
    }),
    qd = ({
        sku: e
    } = {}) => {
        if (!Fd(e)) return;
        const t = {
            [de.EVAR_4]: "D=pageName",
            [de.PROP_3]: `save to all items list | ${e}`
        };
        jc({
            name: "takeaway.onProductSaved",
            beacon: t
        })
    },
    zd = ({
        config: e
    } = {}) => {
        if (!Fd(e)) return;
        const t = {
            [de.PROP_3]: `select configuration | ${e}`
        };
        jc({
            name: "takeaway.onConfigurationSelected",
            beacon: t
        })
    },
    Yd = ({
        configList: e
    } = {}) => {
        if (!Fd(e)) return;
        const t = {
            [de.PROP_3]: `saved configuration | ${e}`
        };
        jc({
            name: "takeaway.onConfigurationsLoaded",
            beacon: t
        })
    },
    Jd = [...ga.PAGE_DATA, "node"],
    Xd = (e, t, n) => {
        const a = `D=pageName+"||${e&&"string"==typeof e?e:""}|${t&&!isNaN(t)?t:""}/${n&&!isNaN(n)?n:""} selected"`,
            r = {};
        "transaction/checkout/standard" === Ba(Jd) ? r[de.EVAR_21] = a : r[de.EVAR_6] = a, jc({
            name: "autocomplete.onItemSelected",
            beacon: r
        })
    },
    Qd = ({
        feature: e,
        currentTab: t,
        previousTab: n
    } = {}) => {
        if (!e || !t) return;
        const a = {
            [de.PROP_3]: `tab click|${e}|${t}`
        };
        n && (a[de.PROP_2] = `tab click|${e}|${n}`), jc({
            name: "api.tab.onTabClick",
            beacon: a
        })
    },
    Zd = (e, t = {}) => {
        if (!(e instanceof HTMLElement)) return;
        const n = (e => {
            const {
                installmentLinkSection: t,
                installmentName: n
            } = e.dataset;
            return n && t ? {
                [de.EVAR_6]: `D=pageName+"|${t}|learn more - ${n}||open modal"`,
                [de.PROP_3]: `"open modal|${n}|${t}|"+pageName`
            } : null
        })(e) || ((e, {
            slot: t = ""
        }) => {
            const n = (e => {
                    const t = e.closest("[data-analytics-region]");
                    return t ? t.dataset.analyticsRegion : null
                })(e) || t,
                {
                    displayName: a = e.text || ""
                } = e.dataset;
            return {
                [de.EVAR_6]: `D=pageName+"|${n}|${a}||Selected"`
            }
        })(e, t);
        jc({
            name: "metrics",
            beacon: n
        })
    },
    eu = e => {
        if (!(e instanceof HTMLElement)) return;
        const {
            overlayName: t
        } = e.dataset;
        jc({
            name: "metrics",
            beacon: {
                [de.EVAR_6]: `D=pageName+"|overlay|${t||""}||close modal"`
            }
        })
    },
    tu = ({
        element: e
    } = {}) => {
        const t = e.dataset.analyticsTitle || "",
            n = {
                [de.EVAR_1]: 'D=pageName+"||GlobalNav|Bag"',
                [de.PROP_3]: t
            };
        jc({
            name: "global nav|bag click",
            element: e,
            beacon: n,
            deferred: !1
        })
    },
    nu = ({
        element: e,
        title: t
    } = {}) => {
        const n = e && e.closest("[data-analytics-region]") || null,
            a = {
                [de.EVENTS]: new ft(new yt(ue.EVENT_316)),
                [de.PROP_3]: t
            };
        n && (a[de.EVAR_30] = n.dataset.analyticsRegion), jc({
            name: "global nav|element engagement",
            beacon: a
        })
    },
    au = Object.freeze({
        TABLET: "tablet",
        WATCH: "watch",
        COMPUTER: "computer",
        PHONE: "smartphone"
    }),
    ru = Object.freeze({
        APPLY_TO_BALANCE: "apply to balance",
        VERIFY_LOAN: "verify loan",
        VERIFY: "verify",
        CONFIRM: "confirm",
        DEVICE: au
    }),
    ou = Object.freeze({
        CLICK: "link",
        BRAND: "brand"
    }),
    iu = Object.freeze({
        HIGHER_THAN_ESTIMATED_LOAN_BALANCE: "event431",
        EQUAL_TO_ESTIMATED_LOAN_BALANCE: "event432",
        LOWER_THAN_ESTIMATED_LOAN_BALANCE: "event433"
    }),
    su = e => "number" == typeof e && !isNaN(e),
    cu = ({
        tiv: e,
        elb: t
    } = {}) => {
        if (!su(e) && !su(t)) return;
        let n;
        n = e > t ? iu.HIGHER_THAN_ESTIMATED_LOAN_BALANCE : e === t ? iu.EQUAL_TO_ESTIMATED_LOAN_BALANCE : iu.LOWER_THAN_ESTIMATED_LOAN_BALANCE;
        const a = new ft(new yt(n));
        jc({
            name: "tradeIn|loadConfirmationDetails",
            beacon: {
                events: a
            }
        })
    },
    lu = (e = "") => {
        jc({
            name: "tradeIn|onLoanVerification",
            beacon: {
                [de.EVAR_6]: `D=pageName+"|loan|verify|link|${e}"`
            }
        })
    },
    du = "trade-in",
    uu = ({
        feature: e = "",
        type: t = "",
        action: n = ""
    } = {}) => {
        const a = [du, e, t, n].join("|"),
            r = {
                [de.EVAR_6]: `D=pageName+"|${a}"`
            };
        jc({
            name: "tradeIn|onSelectionChanged",
            beacon: r
        })
    },
    pu = e => {
        xa(e, Ke({
            url: Ba(e),
            isReferrerUrl: !0
        }))
    },
    gu = [de.PRODUCTS, de.EVAR_6, de.PROP_17, de.PROP_28, de.PROP_64],
    mu = (e = {}) => {
        if (rr(), !Br()) return;
        e.pipeline = "additionalPageLoad", (() => {
            const e = si(),
                t = gu.reduce(((t, n) => ({ ...t,
                    [n]: e[n]
                })), {});
            e.clearVars(), gu.forEach((n => {
                e[n] = t[n]
            }))
        })(), e ? .beacon ? .pageName && (e.beacon.pageName = xe(e.beacon.pageName));
        const {
            window: t = globalThis.window,
            ...n
        } = e;
        (({
            window: e
        }) => {
            xa("referrer.current", Ba("referrer.next") || e.document.referrer), xa("referrer.next", e.location.href), pu("referrer.current"), pu("referrer.next")
        })({
            window: t
        }), Zp(n)
    },
    fu = "pageDataModel.data",
    Eu = `${fu}.search`,
    yu = () => {
        if (!(Ba(Eu) || {}).hasOwnProperty("selectedTab")) return void mu();
        const e = Ba("persisted.deferredBeacon") || {},
            t = Ba(`${Eu}.selectedTab`),
            n = e && e.hasOwnProperty("eVar15"),
            a = `${Eu}.categories.${t}`,
            r = {
                keyword: Ba(`${Eu}.searchTerm`),
                intent: t,
                results: Z(Ba(`${a}.totalCountText`)),
                channelPrefix: Ba(`${fu}.prefix`),
                curatedKit: Ba(`${a}.curated`),
                directLanding: !n
            },
            o = _i(r);
        e.eVar15 && (o.eVar15 = (e.eVar15 || "") + o.eVar15);
        const i = {
            beacon: o
        };
        Object.keys(o).forEach((e => {
            Ha(`persisted.deferredBeacon.${e}`)
        })), mu(i)
    },
    bu = "pageDataModel.data",
    _u = `${bu}.search`,
    vu = () => {
        const e = Ba("persisted.deferredBeacon") || {},
            t = Ba(`${_u}.selectedTab`),
            n = e && e.hasOwnProperty("eVar15"),
            a = `${_u}.categories.${t}`,
            r = {
                keyword: Ba(`${_u}.searchTerm`),
                intent: t,
                results: Z(Ba(`${a}.totalCountText`)),
                channelPrefix: Ba(`${bu}.prefix`),
                curatedKit: Ba(`${a}.curated`),
                directLanding: !n
            },
            o = _i(r);
        if (e.eVar15 && (o.eVar15 = (e.eVar15 || "") + o.eVar15), e.hasOwnProperty("events")) {
            const t = vt(e.events);
            o.events.merge(t)
        }
        e.hasOwnProperty("prop2") && (o.prop2 = e.prop2), e.hasOwnProperty("prop3") && (o.prop3 = e.prop3), e.hasOwnProperty("eVar6") && (o.eVar6 = e.eVar6), Object.keys(o).forEach((e => {
            Ha(`persisted.deferredBeacon.${e}`)
        })), mu({
            beacon: o
        })
    },
    hu = Object.freeze({
        DIMENSION_SCREEN_SIZE: "dimensionScreensize",
        DIMENSION_COLOR: "dimensionColor",
        DIMENSION_CAPACITY: "dimensionCapacity",
        DIMENSION_CONNECTIVITY: "dimensionConnection",
        WATCH_CASES_DIMENSION_CASE_MATERIAL: "watch_cases-dimensionCaseMaterial",
        WATCH_CASES_DIMENSION_CASE_COLOR: "watch_cases-dimensionColor",
        WATCH_CASES_DIMENSION_CASE_SIZE: "watch_cases-dimensionCaseSize",
        WATCH_CASES_DIMENSION_CONNECTION: "watch_cases-dimensionConnection",
        BAND_CATEGORIES: "bandCategories",
        WATCH_BANDS_DIMENSION_BAND_STYLE: "watch_bands-dimensionBandStyle",
        WATCH_BANDS_DIMENSION_BAND_COLOR: "watch_bands-dimensionColor",
        WATCH_BANDS_DIMENSION_BAND_SIZE: "watch_bands-dimensionbandsize",
        VISION_DIMENSION_FIT: "apple_vision_pro-dimensionFit",
        VISION_DIMENSION_HEADBAND_SIZE: "apple_vision_pro-dimensionHeadbandSize",
        VISION_VISION_QUESTIONNAIRE_RESULT: "apple_vision_pro-visionResult",
        VISION_DIMENSION_CAPACITY: "apple_vision_pro_2024-dimensionCapacity",
        TRADE_IN: "tradeIn",
        PAYMENT: "payment",
        APPLE_CARE: "appleCare",
        ENGRAVING: "engraving",
        ACCESSORIES: "accessories",
        CARRIER: "carrierModel",
        ADDTOBAG: "addToBag",
        TRADE_IN_CATEGORY: "tradeInCategory",
        TRADE_IN_QUOTE: "tradeInQuote",
        IUP_TITLE: "iUpTitle",
        PAYMENTGROUP: "paymentGroup",
        IS_EXISTING_IUP_MEMBER: "isExistingIUpMember",
        ACCESSORY_ENGRAVING_REMOVED: "accessoryEngravingRemoved"
    }),
    Au = Object.freeze({
        TRADE_IN: "TradeIn",
        NO_TRADE_IN: "No TradeIn"
    }),
    Su = Object.freeze({
        FULL_PRICE: "fullPrice",
        ACMI: "bfi",
        CARRIER_FINANCE: "cp",
        IUP_ENROLLED: "iup:enrolled",
        IUP_NEW: "ipp",
        IPI: "ipi"
    }),
    Tu = Object.freeze({
        ENGRAVING_TEXT: "typeface | text",
        ENGRAVING_EMOJI: "typeface | emoji",
        ENGRAVING_MIXED: "typeface | mixed",
        ENGRAVING_BUNDLE: "typeface | bundle",
        ENGRAVING_TEXT_ONLY: "text",
        IS_ENGRAVED: !0,
        IS_NOT_ENGRAVED: !1
    }),
    Nu = Object.freeze({
        APPLE_CARE: "AppleCare+",
        NO_APPLE_CARE: "No AppleCare+"
    }),
    ku = [aa, "data", "buyflow"],
    Ou = [aa, "data", "buyflow", "selectionOrder"],
    wu = [aa, "data", "buyflow", "dimensionOrder"],
    Ru = [...ku, "lineOfBusiness"],
    Cu = [...ku, "name"],
    Iu = [...ku, "selections"],
    Pu = [...ku, "lastSelection"],
    Du = [...ku, "lastIUpPayment"],
    Lu = e => t => xa(e, t),
    Vu = e => () => Ba(e) || "",
    Mu = Lu(Iu),
    xu = Lu(Pu),
    $u = Lu(Du),
    Uu = Vu(Ru),
    ju = Vu(Cu),
    Bu = Vu(Ou),
    Hu = Vu(wu),
    Gu = Vu(Iu) || {},
    Fu = Vu(Pu) || "",
    Ku = Vu(Du) || "",
    Wu = (e, t, n) => {
        if ("recycle it" === n && "iphone" === t) return Au.TRADE_IN;
        switch (e) {
            case !0:
                return Au.TRADE_IN;
            case !1:
                return Au.NO_TRADE_IN;
            default:
                return ""
        }
    },
    {
        IUP_NEW: qu,
        IUP_ENROLLED: zu
    } = Su,
    Yu = e => {
        const {
            dimensionScreensize: t,
            dimensionColor: n,
            dimensionCapacity: a,
            carrierModel: r
        } = e;
        return {
            feature: "Step 1",
            part: [t, n, a, r].filter(Boolean).join(" > ").toUpperCase(),
            action: "Selected"
        }
    },
    Ju = " > ",
    Xu = e => "onesize" === e[hu.WATCH_BANDS_DIMENSION_BAND_SIZE],
    Qu = () => {
        const e = Ec(),
            [t] = e.keys();
        return t || ""
    },
    Zu = "|",
    [ep, tp, np] = ["iphone", "ipad", "watch"],
    ap = () => {
        const e = Gu(),
            t = Fu(),
            n = Uu(),
            a = Hu();
        switch (t) {
            case hu.WATCH_CASES_DIMENSION_CASE_MATERIAL:
            case hu.WATCH_CASES_DIMENSION_CASE_COLOR:
            case hu.WATCH_CASES_DIMENSION_CASE_SIZE:
            case hu.WATCH_CASES_DIMENSION_CONNECTION:
            case hu.BAND_CATEGORIES:
            case hu.WATCH_BANDS_DIMENSION_BAND_STYLE:
            case hu.WATCH_BANDS_DIMENSION_BAND_COLOR:
            case hu.WATCH_BANDS_DIMENSION_BAND_SIZE:
                return ((e, t) => {
                    let n = [];
                    switch (t) {
                        case hu.BAND_CATEGORIES:
                        case hu.WATCH_BANDS_DIMENSION_BAND_STYLE:
                        case hu.WATCH_BANDS_DIMENSION_BAND_COLOR:
                        case hu.WATCH_BANDS_DIMENSION_BAND_SIZE:
                            n = (e => {
                                const t = [e[hu.BAND_CATEGORIES] || "", e[hu.WATCH_BANDS_DIMENSION_BAND_STYLE] || "", e[hu.WATCH_BANDS_DIMENSION_BAND_COLOR] || ""];
                                return Xu(e) || t.push(e[hu.WATCH_BANDS_DIMENSION_BAND_SIZE]), t
                            })(e);
                            break;
                        default:
                            n = (e => [e[hu.WATCH_CASES_DIMENSION_CASE_MATERIAL] || "", e[hu.WATCH_CASES_DIMENSION_CASE_COLOR] || "", e[hu.WATCH_CASES_DIMENSION_CASE_SIZE] || "", e[hu.WATCH_CASES_DIMENSION_CONNECTION] || ""])(e)
                    }
                    return {
                        slot: "Step 1",
                        feature: n.filter(Boolean).join(Ju),
                        action: "Selected"
                    }
                })(e, t);
            case hu.VISION_DIMENSION_CAPACITY:
                return (e => ({
                    feature: "Step 1",
                    part: [e[hu.VISION_DIMENSION_FIT], e[hu.VISION_DIMENSION_HEADBAND_SIZE], e[hu.VISION_VISION_QUESTIONNAIRE_RESULT], e[hu.VISION_DIMENSION_CAPACITY]].filter(Boolean).join(Ju).toUpperCase(),
                    action: "Selected"
                }))(e);
            case hu.TRADE_IN:
                return ((e, t) => {
                    const {
                        tradeIn: n,
                        tradeInCategory: a = "",
                        tradeInType: r = "",
                        tradeInAction: o = "",
                        tradeInQuote: i = ""
                    } = e, s = Wu(n);
                    return t === ep ? ((e, t, n) => {
                        const a = ((e, t) => "recycle it" === t ? "recycle" : e ? "trade-in value" : "No")(e, n);
                        return {
                            slot: "trade-in",
                            feature: t,
                            action: a
                        }
                    })(n, a, r) : t === tp && n ? ((e, t, n) => "close" === e ? {
                        slot: "trade-in",
                        feature: "confirm",
                        part: "link",
                        action: "close"
                    } : {
                        slot: "trade-in",
                        feature: t || "tablet",
                        part: "link",
                        action: "recycle it" === n ? n : "confirm trade-in"
                    })(o, a, r) : t === np && n ? (({
                        tradeIn: e,
                        tradeInCategory: t,
                        tradeInQuote: n,
                        tradeInString: a,
                        tradeInType: r,
                        tradeInAction: o
                    }) => null != n && "" !== n ? {
                        slot: "Step 1",
                        feature: `${t} - ${a.toLowerCase()}`,
                        part: "apple result",
                        action: $(n)
                    } : "close" === o ? {
                        slot: "trade-in",
                        feature: "confirm",
                        part: "link",
                        action: "close"
                    } : e && "trade-in" === r ? {
                        slot: "trade-in",
                        feature: t,
                        part: "link",
                        action: "confirm trade-in"
                    } : {
                        feature: "Step 1",
                        part: `${Qu()}|${a}`,
                        action: "Selected"
                    })({
                        tradeIn: n,
                        tradeInCategory: a,
                        tradeInQuote: i,
                        tradeInString: s,
                        tradeInType: r,
                        tradeInAction: o
                    }) : {
                        feature: "Step 1",
                        part: `${Qu()}|${s}`,
                        action: "Selected"
                    }
                })(e, n);
            case hu.PAYMENT:
                return (e => {
                    const {
                        payment: t = "",
                        carrierModel: n = "",
                        paymentGroup: a = "",
                        iUpTitle: r = ""
                    } = e;
                    switch (t) {
                        case Su.FULL_PRICE:
                            return {
                                feature: "Step 1 - purchase options",
                                part: `${n}${Zu}${a}`,
                                action: "Selected"
                            };
                        case Su.ACMI:
                            return {
                                feature: "Step 1 - purchase options",
                                part: `${Zu}${a}${Zu}${t}`,
                                action: "Selected"
                            };
                        case Su.IUP_NEW:
                            return {
                                feature: "Step 1 - purchase options",
                                part: `${Zu}${a}`,
                                action: `${t} > ${r}`
                            };
                        case Su.IUP_ENROLLED:
                            return {
                                feature: "Step 1 - purchase options",
                                part: `${Zu}iup`,
                                action: `ipp > ${r}`
                            };
                        case Su.IPI:
                            return {
                                feature: "Step 1 - purchase options",
                                part: `${n}${Zu}finance${Zu}ipi`,
                                action: "Selected"
                            };
                        case Su.CARRIER_FINANCE:
                            return Yu(e);
                        default:
                            return null
                    }
                })(e);
            case hu.CARRIER:
                return Yu(e);
            case hu.APPLE_CARE:
                return (e => {
                    const {
                        appleCare: t,
                        payment: n
                    } = e, {
                        type: a = "",
                        sku: r = "",
                        appleCareKey: o = "",
                        description: i = "",
                        title: s = ""
                    } = t;
                    if (a === Nu.NO_APPLE_CARE) return {
                        slot: "Step 1",
                        feature: `${a} coverage`,
                        action: "selected"
                    };
                    const c = `selected:${o} - ${i}`.trimEnd();
                    switch (n) {
                        case qu:
                        case zu:
                            return {
                                feature: "Step 1",
                                part: `Add ${s}`,
                                action: "selected"
                            };
                        default:
                            return {
                                feature: "Step 1",
                                part: r,
                                action: c
                            }
                    }
                })(e);
            case hu.ENGRAVING:
                return (e => {
                    const {
                        engraving: t
                    } = e;
                    return t === Tu.IS_NOT_ENGRAVED ? {
                        primary: {
                            feature: `Step 1 - ${Qu()}`,
                            part: "engraving",
                            action: "No Engraving"
                        }
                    } : t === Tu.IS_ENGRAVED ? null : {
                        primary: {
                            feature: `Step 1 - ${Qu()}`,
                            part: "engraving",
                            action: "finish engraving"
                        },
                        secondary: {
                            feature: `Step 1 - ${Qu()}`,
                            part: "engraving",
                            action: t && t.replace(" | ", "|")
                        }
                    }
                })(e);
            case hu.ADDTOBAG:
                return (e => {
                    const {
                        dimensionScreensize: t,
                        dimensionColor: n,
                        dimensionCapacity: a,
                        carrierModel: r,
                        tradeIn: o,
                        payment: i
                    } = e;
                    return {
                        primary: {
                            feature: "Step 1",
                            part: "Add to Bag"
                        },
                        secondary: {
                            feature: "Step 1",
                            part: [t, n, a, r, Wu(o), i].filter(Boolean).join(" > ").toUpperCase(),
                            action: "final"
                        }
                    }
                })(e);
            default:
                return ((e, t) => (e => e && e.length)(e) && t.startsWith("dimension"))(a, t) ? ((e, t) => ({
                    feature: "Step 1",
                    part: t.reduce(((t, n) => e[n] ? t.concat(e[n]) : t), []).join(Ju).toUpperCase(),
                    action: "Selected"
                }))(e, a) : ((e, t = "") => {
                    const {
                        accessories: n = [],
                        accessoryEngravingRemoved: a = ""
                    } = e, r = n.filter((({
                        accessoryKey: e
                    }) => e === t))[0];
                    if (!r) {
                        const e = (e => /keyboard/i.test(e))(o = t) ? {
                            slot: "Step 1",
                            feature: "No keyboard",
                            action: "selected"
                        } : (e => /pencil/i.test(e))(o) ? {
                            slot: "Step 1",
                            feature: "No Apple Pencil",
                            action: "selected"
                        } : (e => /smart_folio/i.test(e))(o) ? {
                            slot: "Step 1",
                            feature: "No Smart Folio",
                            action: "selected"
                        } : null;
                        return a ? {
                            primary: e,
                            secondary: {
                                feature: `Step 1 - ${a}`,
                                part: "engraving",
                                action: "remove engraving"
                            }
                        } : e
                    }
                    var o;
                    const {
                        name: i,
                        accessoryKey: s
                    } = r;
                    return {
                        feature: "Step 1",
                        part: i,
                        action: `selected: add_${s}`
                    }
                })(e, t)
        }
    },
    rp = "onesize",
    op = (e = "", t = "") => t ? e + "_" + t : e,
    ip = (...e) => e.filter(Boolean).join("_").toLowerCase(),
    sp = ({
        productSelections: e,
        lineOfBusiness: t = "",
        buyflowName: n = "",
        productSelectionOrder: a,
        lastIUp: r,
        isAddToBag: o
    }) => {
        const {
            tradeInType: i = ""
        } = e;
        if (!a || !Array.isArray(a)) return;
        const s = a.map((a => {
            const o = e[a];
            switch (a) {
                case hu.DIMENSION_SCREEN_SIZE:
                    return op(n, o).toLowerCase();
                case hu.WATCH_CASES_DIMENSION_CASE_MATERIAL:
                    return ((e = "", t) => {
                        const n = t[hu.WATCH_CASES_DIMENSION_CASE_MATERIAL],
                            a = t[hu.WATCH_CASES_DIMENSION_CASE_COLOR],
                            r = ip(n, a);
                        return op(e, r)
                    })(n, e);
                case hu.VISION_DIMENSION_FIT:
                    return `${n}>${cp(o)}`;
                case hu.WATCH_BANDS_DIMENSION_BAND_COLOR:
                    return (e => {
                        const t = e[hu.WATCH_BANDS_DIMENSION_BAND_STYLE],
                            n = e[hu.WATCH_BANDS_DIMENSION_BAND_COLOR],
                            a = "string" == typeof t && t.split(" ").join("");
                        return ip(a, n)
                    })(e);
                case hu.WATCH_BANDS_DIMENSION_BAND_SIZE:
                    return ((e, t) => t === rp ? void 0 !== e[hu.TRADE_IN] ? rp : "" : t)(e, o);
                case hu.ACCESSORIES:
                    return ((e = []) => e.map((e => e.sku)).map(ne).join(","))(o);
                case hu.TRADE_IN:
                    return Wu(o, t, i).toLowerCase();
                case hu.ENGRAVING:
                    return (e => {
                        switch (e) {
                            case Tu.IS_NOT_ENGRAVED:
                                return "no engraving";
                            case Tu.IS_ENGRAVED:
                            case Tu.ENGRAVING_BUNDLE:
                            case Tu.ENGRAVING_TEXT:
                            case Tu.ENGRAVING_EMOJI:
                            case Tu.ENGRAVING_MIXED:
                            case Tu.ENGRAVING_TEXT_ONLY:
                                return "add engraving";
                            default:
                                return ""
                        }
                    })(o).toLowerCase();
                case hu.APPLE_CARE:
                    return (e => {
                        const {
                            type: t,
                            sku: n
                        } = e || {}, a = ne(n);
                        switch (t) {
                            case Nu.APPLE_CARE:
                                return `applecare:${a}`;
                            case Nu.NO_APPLE_CARE:
                                return "applecare:no";
                            default:
                                return ""
                        }
                    })(o);
                case hu.PAYMENT:
                    return ((e, t) => {
                        let n = e;
                        switch (e === Su.IUP_NEW && (n = t || e), n) {
                            case Su.IUP_NEW:
                                return "iup:new";
                            case Su.IUP_ENROLLED:
                                return "iup:enrolled";
                            default:
                                return cp(n)
                        }
                    })(o, r);
                default:
                    return cp(o)
            }
        })).join(">");
        return o && "vision" === t ? `${t.toLowerCase()}:${s}|final` : `${t.toLowerCase()}:${s}`
    },
    cp = e => "string" == typeof e ? e.toLowerCase() : "",
    lp = e => `D=pageName+"|${[e.slot||"",(e.feature||"").trim(),e.part||"",e.action||""].join("|")}"`,
    dp = H((({
        eventType: e
    }) => ({
        eventType: e,
        lineOfBusiness: Uu(),
        buyflowName: ju(),
        productSelections: Gu(),
        productSelectionOrder: Bu(),
        microEvent: ap(),
        lastSelection: Fu(),
        lastIUp: Ku()
    })), (({
        eventType: e,
        lineOfBusiness: t,
        buyflowName: n,
        productSelections: a,
        productSelectionOrder: r,
        microEvent: o,
        lastSelection: i,
        lastIUp: s
    }) => {
        const c = e,
            l = {};
        if (a && ((e, t) => {
                const n = ![hu.WATCH_CASES_DIMENSION_CASE_MATERIAL, hu.BAND_CATEGORIES, hu.WATCH_BANDS_DIMENSION_BAND_STYLE].includes(e);
                let a = !1;
                switch (e) {
                    case hu.WATCH_CASES_DIMENSION_CASE_MATERIAL:
                        a = t.hasOwnProperty(hu.WATCH_CASES_DIMENSION_CASE_COLOR);
                        break;
                    case hu.WATCH_BANDS_DIMENSION_BAND_STYLE:
                        a = t.hasOwnProperty(hu.WATCH_BANDS_DIMENSION_BAND_COLOR)
                }
                return n || a
            })(i, a) && (l[de.EVAR_45] = sp({
                productSelections: a,
                lineOfBusiness: t,
                buyflowName: n,
                productSelectionOrder: r,
                lastIUp: s
            })), o) {
            const {
                primary: e,
                secondary: t
            } = o;
            switch (i) {
                case hu.APPLE_CARE:
                    l[de.EVAR_5] = lp(o);
                    break;
                case hu.ADDTOBAG:
                case hu.ENGRAVING:
                    l[de.EVAR_5] = lp(e), t && (l[de.EVAR_6] = lp(t));
                    break;
                default:
                    l[de.EVAR_6] = lp(e || o), t && (l[de.EVAR_5] = lp(t))
            }
        }
        return {
            name: c,
            beacon: l
        }
    }), jc),
    {
        IUP_NEW: up,
        IUP_ENROLLED: pp
    } = Su,
    gp = ({
        selection: e,
        currentSelection: t
    } = {}) => {
        e && t && (t === hu.PAYMENT && (e => {
            const {
                payment: t
            } = e;
            t !== up && t !== pp || $u(t)
        })(e), Mu(e), xu(t), dp({
            eventType: "buyflow.onSelectionChanged"
        }))
    },
    mp = ({
        selection: e,
        isAddToBag: t
    }) => sp({
        productSelections: e,
        lineOfBusiness: Uu(),
        buyflowName: ju(),
        productSelectionOrder: Bu(),
        lastIUp: Ku(),
        isAddToBag: t
    }),
    {
        PAYMENT: fp,
        IUP_TITLE: Ep,
        CARRIER: yp
    } = hu,
    bp = e => {
        if (!e || "string" != typeof e) return;
        const [, t = ""] = e.split(" > "), n = { ...Gu(),
            [fp]: Su.IUP_ENROLLED,
            [Ep]: t,
            [yp]: ""
        };
        gp({
            selection: n,
            currentSelection: fp
        })
    },
    _p = e => {
        Br() && e && "string" == typeof e && jc({
            name: "buyflow.onHandoff",
            beacon: {
                [de.EVAR_159]: `${e}`
            }
        })
    },
    vp = [...ga.PAGE_DATA, "products"],
    hp = e => {
        if (!Br()) return;
        const t = Ba(vp);
        if (!t || !Array.isArray(t)) return null;
        for (let n = 0; n < t.length; n++)
            if (t[n].partNumber === e) return t[n] ? .price ? .fullPrice;
        return null
    },
    Ap = [aa, "data", "sba", "lastRecommendationId"],
    Sp = () => Ba(Ap),
    Tp = () => Ha(Ap),
    Np = ({
        date: e
    } = {}) => {
        if (!Br()) return;
        const t = "date interaction",
            n = {
                [de.EVAR_6]: `D=pageName+"|sba|${t}"`,
                [de.PROP_52]: Sp()
            };
        e instanceof Date && (n[de.PROP_63] = String((e => {
            const t = Date.now();
            return (e => {
                if (0 === e) return e;
                const t = Math.ceil(e / 1e3 / 60 / 60 / 24);
                return 0 === t ? Math.abs(0) : t
            })(e.getTime() - t)
        })(e))), jc({
            name: `sba|${t}`,
            beacon: n
        })
    },
    kp = e => null != e && "string" == typeof e,
    Op = ({
        element: e,
        action: t,
        originalPageName: n,
        product: {
            partNumber: a,
            options: r
        } = {}
    } = {}) => {
        a && (({
            partNumber: e,
            options: t
        }) => {
            const n = fc(),
                {
                    watch_cases: a,
                    watch_bands: r
                } = oe(t) && t,
                o = new ft;
            if (o.add(new ut(ne(e))), a && o.add(new ut(ne(a))), r && o.add(new ut(ne(r))), kp(n)) {
                const e = n.split(";");
                e[1] = o.toString("+"), yc(e.join(";"))
            }
        })({
            partNumber: a,
            options: r
        }), (({
            element: e,
            originalPageName: t,
            action: n
        }) => {
            mu({
                name: "sba|onAvailablityBannerClicked",
                element: e,
                beacon: {
                    pageName: `${t}/sba`,
                    events: new ft(new yt("event343")),
                    eVar6: `D=pageName+"|sba|${n}"`
                }
            })
        })({
            element: e,
            originalPageName: n,
            action: t
        })
    },
    [wp, Rp] = ["|", ";;"],
    Cp = e => [e.sku, Array.isArray(e.deliveryDisplayName) ? e.deliveryDisplayName.join(Rp) : e.deliveryDisplayName, e.apuOptionName && `APU: ${e.apuOptionName}`],
    Ip = e => `D=pageName+"${wp}${e}"`,
    Pp = ({
        sku: e,
        deliveryDisplayName: t,
        apuOptionName: n
    }) => {
        const a = Cp({
            sku: e,
            deliveryDisplayName: t,
            apuOptionName: n
        }).join(wp);
        return Ip(a)
    },
    Dp = [...ga.PAGE_DATA, "buyflow", "entryPoint"],
    Lp = ({
        apuOptionName: e = "",
        deliveryDisplayName: t = "",
        isInitialProduct: n = !1,
        product: a = {},
        selectedElement: r
    } = {}) => {
        if (!Br()) return;
        const o = new ft(new yt(ue.EVENT_342), new yt(ue.EVENT_322)),
            i = Ec(),
            s = oe(a) && (e => {
                const t = fc(),
                    n = kp(t) && t.split(";")[1],
                    a = bc(t),
                    r = e.partString,
                    o = e.price ? ee(e.price.replace("_", "."), "") : "",
                    i = e.qty || 1,
                    s = new ft;
                return ((e = "", t = "") => !(!e || !t || 0 !== e.indexOf(t) && 0 !== t.indexOf(e)))(n, r) || s.add(new _t(de.EVAR_66, "sba")), new St({
                    sku: r,
                    category: a,
                    price: o,
                    qty: i,
                    variables: s
                })
            })(a);
        i.merge(s);
        const c = (n ? "initial" : "faster") + " option",
            l = {
                [de.PAGE_NAME]: Ba([aa, "data", "pageName"]),
                [de.EVENTS]: o.toString(),
                [de.PRODUCTS]: i.toString(),
                [de.EVAR_20]: Pp({
                    sku: s.sku,
                    deliveryDisplayName: t,
                    apuOptionName: e
                }),
                [de.EVAR_6]: `D=pageName+"|sba|selected|${c}"`,
                [de.PROP_52]: Sp()
            };
        Ba([aa, "config", "asMetrics", "storedEntryPointEnabled"]) && (l[de.PROP_12] = "warm:sba", xa(Dp, "sba"));
        const d = {
            name: "sba|onProductSelected",
            beacon: l
        };
        r && (d.element = r), mu(d), Tp()
    },
    Vp = ({
        products: e = [],
        storeId: t = !1,
        miles: n = !1
    } = {}) => {
        (({
            products: e = [],
            storeId: t = !1,
            miles: n = !1
        } = {}) => {
            if (!Br()) return;
            const a = {};
            if (e.length > 0) {
                const t = Ec();
                e.forEach((e => {
                    e.sku && t.add(new St(e))
                })), a[de.PRODUCTS] = t, a[de.EVAR_20] = (e => {
                    const t = e.map(Cp).map((e => e.join(wp))).join(";");
                    return Ip(t)
                })(e)
            }
            t && n && (a[de.PROP_64] = `${t}|${n}`), a[de.PROP_52] = Sp(), jc({
                name: "sba|onProductsShown",
                beacon: a
            })
        })({
            products: e.slice(0, 6),
            storeId: t,
            miles: n
        })
    },
    Mp = () => {
        if (!Br()) return;
        const e = {
            [de.EVAR_6]: 'D=pageName+"|sba|show more options"',
            [de.PROP_3]: "sba|footer|show more options",
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|show more options",
            beacon: e
        })
    },
    xp = ({
        recommendationId: e
    } = {}) => {
        Br() && e && (e => {
            xa(Ap, e)
        })(e)
    },
    $p = () => {
        if (!Br()) return;
        const e = {
            [de.EVAR_6]: 'D=pageName+"|sba|filters|reset"',
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|filters|reset",
            beacon: e
        })
    },
    Up = {
        heroiPad: "model",
        heroiPhone: "model",
        watch_bands_dimensionBandColor: "bandcolor",
        watch_bands_dimensionMaterial: "bandtype",
        watch_cases_dimensionColor: "casefinish",
        watch_cases_dimensionConnection: "connectivity"
    },
    jp = e => Up[e] || e,
    Bp = ({
        selection: e = {},
        lastSelection: t = ""
    } = {}) => {
        if (!Br()) return;
        const n = Object.keys(e).reduce(((t, n) => `${t}${jp(n)}=${e[n].toString()};`), "");
        let a = t;
        const r = t.split("=")[0];
        Object.keys(Up).includes(r) && (a = t.replace(r, jp(r)));
        const o = {
            [de.EVAR_6]: `D=pageName+"|Filters||${n}"`,
            [de.PROP_3]: `sba|filter|${a}`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|filter|select",
            beacon: o
        })
    },
    Hp = ({
        action: e = ""
    } = {}) => {
        if (!Br()) return;
        const t = {
            [de.EVAR_6]: `D=pageName+"|Filters||${e}"`,
            [de.PROP_3]: `sba|filter|mow|${e}`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|filters|mow",
            beacon: t
        })
    },
    Gp = ({
        keyName: e = ""
    } = {}) => {
        if (!Br()) return;
        const t = {
            [de.EVAR_6]: `D=pageName+"|Filters||${e}|show more colors"`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|filter|select",
            beacon: t
        })
    },
    Fp = () => {
        if (!Br()) return;
        const e = {
            [de.EVAR_6]: 'D=pageName+"||Step 1 - Link||Delivery options|Selected"',
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|delivery options selected|",
            beacon: e
        })
    },
    Kp = () => {
        if (!Br()) return;
        const e = {
            [de.PROP_37]: 'D=pageName+"||delivery|zipcode|cancel"',
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|delivery options cancel|",
            beacon: e
        })
    },
    Wp = ({
        isGeoLocated: e,
        locationString: t = ""
    } = {}) => {
        if (!Br()) return;
        let n = "" === t ? "cold" : "dude warm";
        e && (n = "geo warm");
        const a = {
            [de.PROP_37]: `D=pageName+"||apply||${n} - dude warm"`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|delivery options updated|",
            beacon: a
        })
    },
    qp = ({
        part: e = "",
        category: t = ""
    } = {}) => {
        if (!Br()) return;
        const n = {
            [de.EVAR_6]: `D=pageName+"|sba|${e}|available at more stores"`,
            [de.PROP_3]: `sba|${t}|available at more stores`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|pickup available",
            beacon: n
        })
    },
    zp = ({
        sortValue: e = ""
    } = {}) => {
        if (!Br()) return;
        let t;
        switch (e) {
            case "shipDate":
                t = "earliest available delivery";
                break;
            case "pickupDate":
                t = "earliest available pickup";
                break;
            default:
                t = "recommended"
        }
        const n = {
            [de.EVAR_6]: `D=pageName+"|sort by|${t}"`,
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|sort by|",
            beacon: n
        })
    },
    Yp = () => {
        if (!Br()) return;
        const e = {
            [de.EVAR_6]: 'D=pageName+"|sba|storeLocator|retail store|selected"',
            [de.PROP_3]: '"sba|store locator|selected"',
            [de.PROP_52]: Sp()
        };
        jc({
            name: "sba|store locator",
            beacon: e
        })
    },
    Jp = ({
        element: e,
        originalPageName: t
    } = {}) => {
        if (!Br()) return;
        const n = {
            beacon: {
                [de.EVAR_6]: 'D=pageName+"|sba|close"',
                [de.PROP_52]: Sp()
            }
        };
        t && (n.beacon[de.PAGE_NAME] = t), e && (n.element = e), mu(n), Tp()
    },
    Xp = [aa, "data", "buyflow", "entryPoint"],
    Qp = () => {
        const e = Ba(Xp);
        Ba([aa, "config", "asMetrics", "storedEntryPointEnabled"]) && e && sr("entryPoint", e, {
            type: "page"
        })
    },
    Zp = ({
        beacon: e,
        data: t,
        ...n
    } = {}) => {
        Br() && (n.hasOwnProperty("pipeline") || (n.pipeline = "pageLoad"), jr() && nl("analytics:pageLoad"), Br(Vr) && $l.pageLoad(), Ul(), Yl(), ed(), vd(), al.element instanceof HTMLElement && (al.engagementObserver.disconnect(), ol({
            element: al.element
        })), Bd.autoTracking.pageLoad(), $c({ ...n,
            beacon: e || t || {},
            type: Dr.PAGE_LOAD
        }), (() => {
            const e = Se()[de.PAGE_NAME];
            null != e && sr("pageName", e, {
                type: "page"
            })
        })(), (() => {
            const e = Se()[de.HIER1];
            null != e && sr("area", e, {
                type: "page"
            })
        })(), Qp())
    },
    eg = e => "" === Me(e),
    tg = ({
        parentSelector: e,
        eventType: t,
        childSelector: n,
        callback: a,
        exactMatch: r
    } = {}) => {
        "function" != typeof a || eg(e) || eg(t) || eg(n) || document.querySelectorAll(e).forEach((e => {
            e.addEventListener(t, (t => {
                if (t.consumedByAnalytics) return;
                const o = t.target;
                if (r) o.matches(n) && (t.dynamicEventBinderTarget = o, a(t));
                else {
                    const r = o.closest(n);
                    e.contains(r) && (t.dynamicEventBinderTarget = r, a(t))
                }
            }))
        }))
    },
    ng = [".rs-account-main a.rs-device-tile-button.as-buttonlink.more", ".rs-account-main a.rs-dashboard-tile-button.more.typography-body-reduced", '.rs-account-main a[data-analytics-title="View Saved Items"]', ".rs-trade-in-info a.icon.icon-after.icon-external", ".rs-orders-tile a.rs-account-link-tile-button.as-buttonlink.more", ".rs-settings a.icon.icon-after.icon-external.rs-settings-external-link"],
    ag = (e, t = {}) => {
        if (ng.some((t => e ? .target ? .matches(t)))) return;
        "click" === e.type && Ls();
        const n = e.dynamicEventBinderTarget.form || e.dynamicEventBinderTarget,
            a = Fe(n) || Ge(n) ? pe : ge,
            r = {
                name: n.href || n.action,
                data: {},
                element: n,
                event: e,
                linkType: a,
                globalTracking: !0,
                ...t
            };
        jc(r)
    },
    rg = (e, t = {}) => {
        if (xi()) return;
        const n = e.dynamicEventBinderTarget,
            a = n.form ? n.form.action : "",
            r = {
                name: `${n.id||n.name} - ${a} - focus`,
                beacon: {},
                element: n,
                event: e,
                globalTracking: !0,
                ...t
            };
        jc(r)
    },
    og = (e, t = {}) => {
        "click" === e.type && Ls();
        const n = e.dynamicEventBinderTarget,
            a = {
                name: n.innerText || "no name",
                data: {},
                element: n,
                event: e,
                globalTracking: !0,
                ...t
            };
        jc(a)
    },
    ig = [...Ir.PATHS.CONFIG_AS_METRICS, "asMetricsFeatures"],
    sg = e => {
        if (!(() => {
                const e = Ba(ig) || [];
                if (0 !== e.length) return e.includes("customEventTranslation")
            })()) return;
        We("graffiti/customEvent").debug(`${e.type}: ${JSON.stringify(e.detail)}`);
        const {
            name: t,
            data: n
        } = e.detail;
        (t !== ks.ACCOUNT_VIEW_SAVED_ITEMS || (jc({
            name: "favorites||see your favorites",
            deferred: !0,
            beacon: {
                [de.EVAR_1]: "AOS: account/home | account tiles | view saved items"
            }
        }), 0)) && (window.aosDataLayer && tl(window.aosDataLayer.get()), nl(t, n))
    };
let cg = !1;
const lg = ({
        beacon: e
    } = {}) => {
        jc({
            name: "endOfPage",
            beacon: e
        })
    },
    dg = () => {
        if (!window.performance || !window.performance.timing) return;
        const e = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
            t = Math.round(e / 100),
            n = si().pageName,
            a = [oa, sa, de.EVAR_9];
        xa(a, `${t} | ${n}`)
    },
    ug = () => {
        window ? .performance && window.performance.timing && (() => {
            const e = window ? .performance ? .timing,
                t = [
                    [e.fetchStart, e.navigationStart, ue.EVENT_220],
                    [e.domainLookupStart, e.fetchStart, ue.EVENT_221],
                    [e.domainLookupEnd, e.domainLookupStart, ue.EVENT_222],
                    [e.connectEnd, e.connectStart, ue.EVENT_223],
                    [e.responseStart, e.connectEnd, ue.EVENT_224],
                    [e.responseEnd, e.responseStart, ue.EVENT_225],
                    [e.domInteractive, e.domLoading, ue.EVENT_226],
                    [e.domContentLoadedEventEnd, e.domInteractive, ue.EVENT_227],
                    [e.domComplete, e.domContentLoadedEventEnd, ue.EVENT_228],
                    [e.loadEventStart, e.domLoading, ue.EVENT_229],
                    [e.loadEventEnd, e.loadEventStart, ue.EVENT_230],
                    [e.loadEventEnd, e.navigationStart, ue.EVENT_231]
                ].reduce(((e, [t, n, a]) => {
                    if (!t || !n) return e;
                    const r = t - n,
                        o = r < 6e4 && r >= 0 ? (r / 1e3).toFixed(3) : 600,
                        i = new yt(a, o);
                    return e.add(i), e
                }), new ft(new yt(ue.EVENT_232))),
                n = {
                    [de.EVENTS]: t.toString()
                };
            ur("beacon", n, {
                type: "page"
            })
        })()
    },
    pg = "ui.analytics.microevent",
    gg = () => {
        Br(Vr) && $l.pageLoad(), Ul(), Yl(), ed(), vd(), cg || ((() => {
            if (!Br()) return;
            const e = "body";
            tg({
                parentSelector: e,
                eventType: "click",
                childSelector: "a:not(.globalnav-link-bag):not(.globalnav-link-search), \n            a.globalnav-link-search[data-analytics-title], button[data-rid-relay]",
                callback: ag
            }), tg({
                parentSelector: e,
                eventType: "click",
                chidlSelector: '[data-analytics-region="filters"] [data-analytics-accordion], [data-analytics-region="filters"] [data-core-accordion-button]',
                callback: og
            }), tg({
                parentSelector: e,
                eventType: "submit",
                childSelector: "form",
                callback: ag
            }), tg({
                parentSelector: e,
                eventType: "analytics-form-submit",
                childSelector: "form",
                callback: ag
            }), tg({
                parentSelector: e,
                eventType: "focusin",
                childSelector: '[data-analytics-region="search"] input[name="search"]',
                exactMatch: !0,
                callback: rg
            }), window.addEventListener("analyticsCustomEvent", sg)
        })(), cg = !0), (({
            element: e,
            onPageEnd: t
        } = {}) => {
            e instanceof HTMLElement && (il || (al.element = e, "function" == typeof t && (al.onPageEnd = t), ol({
                element: e
            }), il = !0))
        })({
            element: document.querySelector(".as-globalfooter"),
            onPageEnd: lg
        }), Bd.autoTracking.init(), ((e = globalThis.window) => {
            e.addEventListener(pg, (e => {
                if (!e.detail || "object" != typeof e.detail) return;
                const t = {
                    [de.EVAR_6]: e.detail.value
                };
                jc({
                    name: pg,
                    beacon: t
                })
            }))
        })()
    },
    mg = () => {
        window.performance.mark("analytics:initialize"), jr() && (tl(Ba()), nl("analytics:initialize")), Br() && (Br("pageLoad") ? Zp() : Qp(), (() => {
            const e = window.performance.getEntriesByType("navigation")[0];
            e && (e.domContentLoadedEventEnd > 0 ? gg() : window.document.addEventListener("DOMContentLoaded", gg), e.loadEventEnd > 0 ? (ug(), dg()) : window.addEventListener("load", (() => {
                setTimeout((() => {
                    ug(), dg()
                }), 0)
            })))
        })())
    },
    fg = () => {
        if (!Br()) return;
        if (document.querySelector(".as-pdp-othersalsobought")) return;
        const e = new ft;
        Array.from(document.querySelectorAll(ko)).filter((e => !e.dataset.hasOwnProperty("analyticsSection"))).forEach((t => e.merge((e => {
            const t = new ft;
            if (!(e instanceof HTMLElement)) return t;
            const n = Array.from(e.querySelectorAll(Oo)).map((e => e.querySelector("a:not(.as-pinwheel-infolink)"))).filter(Boolean).map(((t, n, a) => Po({
                parent: e,
                element: t,
                position: `${n+1}/${a.length}`
            })));
            return t.merge(...n)
        })(t)))), (e => {
            if (!e.size) return !1;
            const t = e.values();
            let n = t.next();
            for (; !n.done;) {
                if ("" !== n.value.sku) return !0;
                n = t.next()
            }
            return !1
        })(e) && jc({
            name: "impressions controller",
            data: {
                [de.PRODUCTS]: e,
                [de.EVENTS]: new ft(new yt(ue.EVENT_4))
            }
        })
    },
    Eg = () => {
        Br() && window.addEventListener("pageshow", fg)
    },
    yg = e => t => t[e],
    bg = yg("algorithm"),
    _g = "data-intersection-observer-key",
    vg = new ft(new yt(ue.EVENT_4), new yt(ue.EVENT_114)),
    hg = "spotlight",
    Ag = "bag-recommended",
    Sg = "pdp-recommended",
    Tg = "olss",
    Ng = "unknown",
    kg = {
        [hg]: {
            type: yg("spotlightType"),
            title: "Product Spotlight"
        },
        [Ag]: {
            type: bg,
            title: "Bag Recommendation"
        },
        [Tg]: {
            type: bg,
            title: "OLSS"
        },
        [Sg]: {
            type: bg,
            title: "PDP Recommendation"
        },
        [Ng]: {
            type: () => "unknown",
            title: "Unknown"
        }
    },
    Og = ({
        type: e = null,
        products: t = [],
        bagProducts: n = []
    } = {}) => {
        const a = kg[e] || kg[Ng],
            r = n.map((({
                part: e
            }) => e)).join(":");
        return new ft(...(t || []).map(((e, n) => new St({
            sku: e.part,
            variables: new ft(new _t(de.EVAR_60, a.title), new _t(de.EVAR_61, a.type(e)), new _t(de.EVAR_65, `${n+1}/${t.length}`), new _t(de.EVAR_69, r))
        }))))
    };
let wg = !1;
const Rg = e => {
        const t = e.target.getAttribute(_g),
            n = Dg(t);
        n && (n.callback(e.target, n.options), n.options.once && (n.done = !0, Ig(n)))
    },
    Cg = (e, t) => {
        t && e && (wg || (document.body.addEventListener("observableEngaged", Rg), wg = !0), t.done = !1, t.element.setAttribute(_g, e), t.observer || (t.observer = new ll({
            engageThreshold: t.options ? t.options.threshold : 1
        })), t.observer.disconnect(), t.observer.observe(t.element))
    },
    Ig = e => {
        e && (e.observer.disconnect(), delete e.observer)
    },
    Pg = {},
    Dg = e => Pg[e],
    Lg = e => {
        const t = Dg(e);
        return Boolean(t && t.done)
    },
    Vg = e => ({
        once: !0,
        threshold: 1,
        ...e
    }),
    Mg = {
        registerProductBlock: ({
            key: e,
            element: t,
            type: n,
            products: a,
            bagProducts: r = []
        }, o = {}) => {
            if (!Br()) return;
            const i = {
                products: Og({
                    type: n,
                    products: a,
                    bagProducts: r
                }),
                events: vg
            };
            ((e, t) => {
                Lg(e) || (Pg[e] = { ...Pg[e],
                    ...t
                }, Cg(e, Dg(e)))
            })(e, {
                element: t,
                callback: () => jc({
                    name: "impression",
                    data: i
                }),
                options: Vg(o)
            })
        },
        productBlockWasSeen: Lg,
        resetProductBlock: Cg,
        unregisterProductBlock: e => {
            Pg[e] && (Ig(Dg(e)), delete Pg[e])
        }
    },
    xg = de.EVAR_5,
    $g = (e, t) => {
        if (!Br() || !t || "string" != typeof t) return;
        const n = t.split("|"),
            a = n.length <= 4 ? t : n.slice(2).join("|"),
            r = {
                [xg]: t.startsWith(Pr) ? t : Pr + t
            };
        jc({
            name: a,
            beacon: r,
            element: e
        })
    },
    Ug = (e = {}) => {
        if (!Br()) return;
        const {
            linkName: t,
            ...n
        } = e;
        $c({
            beacon: n,
            type: Dr.USER_INTERACTION,
            name: Uc(t)
        })
    },
    jg = (e, t, n, a, r) => {
        jc({
            name: t,
            beacon: n,
            element: e,
            deferred: !1,
            linkType: r,
            callback: a
        })
    },
    Bg = () => {
        jr() && nl("analytics:reset"), Br(Vr) && $l.reset(), Bd.autoTracking.reset()
    },
    Hg = [aa, "data", "search"],
    Gg = [...Hg, "searchTerm"],
    Fg = [...Hg, "selectedTab"],
    Kg = [...Hg, "categories"],
    Wg = ({
        data: e = {}
    } = {}) => {
        jr() && nl("analytics:update"), Br(Vr) && $l.update(e), Jl(), ed(), vd(), Bd.autoTracking.update(), e.search && (({
            results: e,
            totalCountText: t,
            selectedTab: n,
            searchTerm: a,
            pageNumber: r,
            numOfPages: o
        } = {}) => {
            const i = e && e[n] ? e[n][`${n}Curated`] : null,
                s = !!i && i.hasResults;
            xa(Gg, a || ""), xa(Fg, n), xa([...Kg, n], {
                pageNumber: r,
                numOfPages: o,
                totalCountText: t,
                curated: s
            })
        })(e.search)
    },
    qg = ["click", "tap", "submit", "analytics-form-submit"],
    zg = ({
        event: e,
        ...t
    } = {}) => {
        const n = We("analytics/trackBrowserEvent");
        try {
            if (!(e => e instanceof Event || window.jQuery && e instanceof window.jQuery.Event)(e)) throw new Error("Missing event or event is not a valid Event object");
            t.name || (t.name = `${(({target:e})=>{const t=e.tagName.toLowerCase();return e.id?`
                $ {
                    t
                }#
                $ {
                    e.id
                }
                `:e.name?`
                $ {
                    t
                }[name = "${e.name}"]
                `:t})(e)} - ${e.type}`), e.dynamicEventBinderTarget = e.target.form || e.target, a = t.element || e.dynamicEventBinderTarget, (Fe(a) || Ge(a)) && (t.linkType = pe), "focusin" === e.type ? rg(e, t) : qg.includes(e.type) ? ag(e, t) : jc({
                event: e,
                ...t
            })
        } catch (e) {
            n.error(e)
        }
        var a
    },
    Yg = [...ga.PAGE_DATA, "coversModeType"],
    Jg = ({
        updateType: e,
        changedValue: t,
        events: n
    }) => {
        const a = `${e} changed`;
        jc({
            name: `${a}||${t}`,
            beacon: {
                [de.EVENTS]: n,
                [de.EVAR_5]: ci({
                    items: ["covers", a, "", t]
                })
            },
            deferred: !1
        })
    },
    Xg = (e, t) => {
        const n = `${t.cv}_${t.cctx}`;
        xa(Yg, n);
        const a = new ft(new yt(qs(n))),
            r = e.cctx !== t.cctx,
            o = e.cv !== t.cv;
        ((e, t, n) => {
            const a = Boolean(t && t.msg),
                r = "preorder" === t.cv && "partial" === t.cctx,
                o = a && r && n,
                i = a && r && e.msg !== t.msg;
            return o || i
        })(e, t, r) ? (({
            message: e,
            events: t
        }) => {
            mu({
                beacon: {
                    [de.PAGE_NAME]: "AOS: Covers Page",
                    [de.PROP_8]: zs(e),
                    [de.EVENTS]: t
                }
            })
        })({
            message: t.msg,
            events: a
        }) : r ? Jg({
            updateType: "context",
            changedValue: t.cctx,
            events: a
        }) : o && Jg({
            updateType: "content",
            changedValue: t.cv,
            events: a
        })
    },
    Qg = (e = [], t = {}) => {
        if (!e.length) return t;
        const [n, ...a] = e;
        if (/\.$/.test(n)) return Qg(a, {});
        if (/^\./.test(n)) {
            const e = n.slice(1);
            return Qg(a, {
                [e]: t
            })
        }
        const [r, o] = n.split("=");
        return t[r] = decodeURIComponent(o), Qg(a, t)
    },
    Zg = e => /^s_sq/.test(e),
    em = e => e.slice(5),
    tm = (e, t) => {
        const [n, a] = t.split("=");
        if ("[[B]]" === n) return !1;
        const r = decodeURIComponent(a).split("&").filter(Boolean);
        return e[n] = Qg(r), e
    },
    nm = (e, t) => {
        const n = window ? .document ? .cookie ? .split("; ").filter(Zg).map(em).map(decodeURIComponent).reduce(tm, {});
        if (!n) return null;
        const a = (r = n, Object.entries(r).map((([e, t]) => {
            const {
                link: n,
                page: a,
                region: r
            } = t ? .c ? .a ? .activitymap || {};
            return {
                [e]: {
                    link: n,
                    page: a,
                    region: r
                }
            }
        })).reduce(((e, t) => Object.assign(e, t)), {}));
        var r;
        if (e) {
            const n = a[e];
            return n ? t ? n[t] || null : n : null
        }
        return { ...a,
            raw: n
        }
    },
    am = "function" == typeof Symbol ? Symbol.for("graffiti") : "__graffiti__",
    rm = Rr(Z, "Use AsMetrics.util.getRawNumberFromString instead"),
    om = Rr(bc, "Use AsMetrics.util.getProductCategory instead"),
    im = {
        getOne: e => {
            const t = Ul();
            return Ci({
                key: e,
                cookieData: t
            })
        },
        sendBeacon: ({
            key: e,
            element: t,
            callback: n,
            defaultCampaign: a
        }) => {
            if (!Br()) return void("function" == typeof n && n());
            const r = {
                keys: [e],
                cookieData: Ks()
            };
            a && (r.defaultCampaigns = {
                [e]: a
            });
            const o = (({
                keys: e,
                cookieData: t,
                defaultCampaigns: n
            }) => {
                const a = ki(t),
                    r = {};
                return Array.isArray(e) && e.forEach((e => {
                    hi(e) && (a[e] ? (r.events = wi(r.events, e), r.eVar17 = Ri(r.eVar17, a[e])) : n && n[e] && (r.events = wi(r.events, e), r.eVar17 = Ri(r.eVar17, n[e])))
                })), r
            })(r);
            jc({
                callback: n,
                data: o,
                element: t,
                name: "relay id"
            })
        }
    },
    sm = Mg;
let cm = null;
const lm = (({
    root: e = globalThis
} = {}) => {
    const t = (({
            root: e,
            selector: t
        }) => {
            let n = {};
            const a = We("analytics/parseServerDataBlock");
            try {
                const a = e.document.querySelector(t);
                a && a.textContent && (n = JSON.parse(a.textContent))
            } catch (e) {
                a.error(e)
            }
            return n
        })({
            root: e,
            selector: "head #metrics"
        }),
        {
            storedAdobeVars: n,
            otherStoredData: a,
            previousPage: r
        } = _n({
            root: e,
            selector: "mk_epub",
            cookieDomain: (o = t, o.config ? .global ? .cookieDomain || "apple.com")
        });
    var o;
    const i = ((e, t) => {
            const n = {};
            return n.current = Ke({
                url: t,
                isReferrerUrl: !0
            }), n.next = Ke({
                url: e,
                isReferrerUrl: !0
            }), n
        })(e.location.href, e.document.referrer),
        s = (({
            root: e,
            serverData: t,
            storedAdobeVars: n,
            previousPage: a
        }) => {
            const r = { ...ea(t ? .config, e.location.host),
                    ...Zn({
                        linkInternalFilters: In(t)
                    })
                },
                o = qn(t, n);
            var i, s;
            return {
                config: r,
                data: Zn({
                    area: vn(t, o ? .area),
                    buyflow: Zn(On(t, a, e.document.referrer, e.location.host)),
                    category: Yn(t),
                    coversModeType: Jn(t),
                    devicePixelRatio: wn(window.devicePixelRatio, window.navigator),
                    eventsString: Pn(t, n, a, o ? .searchEvents),
                    languageAttribute: Rn(t, e.document.documentElement.lang),
                    leadQuoteTime: Cn(t, n, a),
                    mvt1: Vn(t, a),
                    mvt2: Mn(t, n, a),
                    mvt3: xn(t, n, a),
                    osVersion: $n(window.navigator.userAgent),
                    pageName: Un(o ? .pageName, t),
                    pageUrl: jn(t, window.location.href),
                    prefix: Bn(t),
                    previousPage: Zn({ ...Zn(Hn(n)),
                        apisCalled: An(a),
                        apisCalledString: hn(a),
                        appleCard: Sn(a),
                        applePay: Tn(a),
                        area: a ? .area,
                        microEvent3: Dn(a),
                        pageName: a ? .pageName
                    }),
                    products: Xn(t),
                    productsString: Gn(t, n),
                    properties: Zn(Fn(t)),
                    purchaseId: Kn(t),
                    referrerClone: Wn(e.document.referrer),
                    referrerType: (i = e.document.referrer, s = e.location.host, i ? i.match(/(downloads|epp|store|storeint)\.apple\.com/) ? "aos nav" : Nn(i, s) ? "third party" : "other nav or none" : "direct entry"),
                    search: Zn(o ? .search || {}),
                    sectionEngagement: zn(t)
                })
            }
        })({
            root: e,
            serverData: t,
            storedAdobeVars: n,
            previousPage: r
        }),
        c = a.persisted ? .purchaseJourney || {};
    if (n.pj) {
        const [e, t] = n.pj.split("|");
        e && t && (c[e] = t)
    }
    const l = (({
        productsString: e,
        eventsString: t,
        purchaseJourney: n
    }) => {
        const a = Pt(e),
            r = vt(t),
            o = (i = {
                products: a,
                events: r,
                purchaseJourney: n
            }, ta({ ...i,
                triggerEvents: ["event52", "event55", "prodView"],
                newEvent: "event114"
            }));
        var i;
        const s = (e => ta({ ...e,
            triggerEvents: ["scAdd"],
            newEvent: "event115"
        }))({
            products: a,
            events: r,
            purchaseJourney: n
        });
        return o || s ? {
            productsString: a.toString(),
            eventsString: r.toString(),
            removeStored: s
        } : null
    })({
        productsString: s.data.productsString,
        eventsString: s.data.eventsString,
        purchaseJourney: c
    });
    return null !== l && (s.data.productsString = l.productsString, s.data.eventsString = l.eventsString, l.removeStored && delete a.persisted.purchaseJourney), {
        pageDataModel: s,
        referrer: i,
        ...a
    }
})({
    root: globalThis
});
globalThis.asMetrics = ((e = {}) => {
if (!cm) {
    el(e);
    const t = {
        dataLayer: r,
        fireMicroEvent: Fc,
        fireMicroEventCollection: Kc,
        getRawNumberFromString: rm,
        getProductCategory: om,
        ImpressionsController: Eg,
        Mvt: {
            siteCatalystIntegrate: Rr((() => {}), "use asMetrics.mvt({key, value})"),
            activate: Rr((() => {}), "use asMetrics.mvt({key, value})")
        },
        Tracking: M
    };
    cm = { ...t,
        leadQuote: wd,
        dudeState: Dd,
        dude2: Id,
        appleCard: Rd,
        applePay: Pd,
        mvt: Cd,
        sba: V,
        search: D,
        onError: Hd,
        autocomplete: R,
        overlay: C,
        gallery: Bd,
        globalNav: I,
        buyflow: L,
        takeaway: w,
        tradeIn: P,
        initialize: mg,
        impression: sm,
        purchaseJourney: o,
        relay: im,
        reportCustomLink: $g,
        sendUserInteraction: jc,
        sendInteractionBeacon: Ug,
        sendEvent: yd,
        triggerPageHasLoaded: mu,
        trackBrowserEvent: zg,
        reset: Bg,
        update: Wg,
        util: N,
        watchGrid: O,
        debug: {
            dataLayer: r,
            passiveTracker: er,
            activityMap: nm
        },
        [am]: {
            processors: {
                purchaseJourney: Or
            },
            dataLayer: r,
            passiveTracker: {
                set: sr,
                merge: ur,
                append: pr
            }
        },
        preAuth: T,
        covers: x,
        version: kc
    }, window.performance.mark("analytics:init")
}
return cm
})(lm)
})();