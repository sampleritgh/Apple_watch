(() => {
    "use strict";
    window.Log = e => {
        if (!e) throw new Error("moduleName parameter required for Logger");
        const o = {
            TRACE: 4,
            DEBUG: 3,
            INFO: 2,
            WARN: 1,
            ERROR: 0
        };
        let r, t;
        const n = n => s => {
            if (t = window.sessionStorage.getItem("AS_LOG_LEVEL") || window.AS_LOG_LEVEL || o.ERROR, r = t in o ? o[t] : o.ERROR, o[n] <= r) try {
                let o;
                o = "string" == typeof s || "number" == typeof s || "boolean" == typeof s || "bigint" == typeof s ? {
                    message: s
                } : Array.isArray(s) ? {
                    message: s.toString()
                } : function(e) {
                    const o = {
                        message: e.message,
                        colno: e.colno,
                        lineno: e.lineno,
                        stack: e.stack || e.error && e.error.stack,
                        name: e.name,
                        code: e.code
                    };
                    return { ...e,
                        ...o
                    }
                }(s), (e => {
                    const o = new CustomEvent("echoLogEvent", {
                        detail: e
                    });
                    window.dispatchEvent(o)
                })({ ...o,
                    id: e,
                    type: n.toLowerCase(),
                    currentScriptSrc: document && document.currentScript && document.currentScript.src
                }), console[n.toLowerCase()](s)
            } catch (e) {
                console.error("as-utilities/logger: could not log message", e)
            }
        };
        return {
            error: n("ERROR"),
            warn: n("WARN"),
            info: n("INFO"),
            debug: n("DEBUG"),
            trace: n("TRACE")
        }
    }
})();