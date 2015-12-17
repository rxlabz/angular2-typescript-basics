/*! @license Firebase v0.0.0 - License: https://www.firebase.com/terms/terms-of-service.html */
(function () {
    var h, aa = this;

    function m(a) {
        return void 0 !== a
    }

    function ba() {
    }

    function ca(a) {
        a.Nb = function () {
            return a.kf ? a.kf : a.kf = new a
        }
    }

    function da(a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }

    function ea(a) {
        return "array" == da(a)
    }

    function fa(a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function p(a) {
        return "string" == typeof a
    }

    function ga(a) {
        return "number" == typeof a
    }

    function ha(a) {
        return "function" == da(a)
    }

    function ia(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return q.apply(null, arguments)
    }

    var la = Date.now || function () {
            return +new Date
        };

    function ma(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Jg = b.prototype;
        a.prototype = new c;
        a.Fg = function (a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    };
    function na(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("Invalid JSON string: " + a);
    }

    function oa() {
        this.Hd = void 0
    }

    function pa(a, b, c) {
        switch (typeof b) {
            case "string":
                qa(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (ea(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)c.push(e), e = b[f], pa(a, a.Hd ? a.Hd.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b)Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), qa(f, c),
                    c.push(":"), pa(a, a.Hd ? a.Hd.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }

    var ra = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, sa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function qa(a, b) {
        b.push('"', a.replace(sa, function (a) {
            if (a in ra)return ra[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return ra[a] = e + b.toString(16)
        }), '"')
    };
    function ta(a) {
        return "undefined" !== typeof JSON && m(JSON.parse) ? JSON.parse(a) : na(a)
    }

    function r(a) {
        if ("undefined" !== typeof JSON && m(JSON.stringify))a = JSON.stringify(a); else {
            var b = [];
            pa(new oa, a, b);
            a = b.join("")
        }
        return a
    };
    function s(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function t(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b))return a[b]
    }

    function ua(a, b) {
        for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function va(a) {
        var b = {};
        ua(a, function (a, d) {
            b[a] = d
        });
        return b
    };
    function wa(a) {
        this.tc = a;
        this.Ed = "firebase:"
    }

    h = wa.prototype;
    h.set = function (a, b) {
        null == b ? this.tc.removeItem(this.Ed + a) : this.tc.setItem(this.Ed + a, r(b))
    };
    h.get = function (a) {
        a = this.tc.getItem(this.Ed + a);
        return null == a ? null : ta(a)
    };
    h.remove = function (a) {
        this.tc.removeItem(this.Ed + a)
    };
    h.lf = !1;
    h.toString = function () {
        return this.tc.toString()
    };
    function xa() {
        this.nc = {}
    }

    xa.prototype.set = function (a, b) {
        null == b ? delete this.nc[a] : this.nc[a] = b
    };
    xa.prototype.get = function (a) {
        return s(this.nc, a) ? this.nc[a] : null
    };
    xa.prototype.remove = function (a) {
        delete this.nc[a]
    };
    xa.prototype.lf = !0;
    function ya(a) {
        try {
            if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
                var b = window[a];
                b.setItem("firebase:sentinel", "cache");
                b.removeItem("firebase:sentinel");
                return new wa(b)
            }
        } catch (c) {
        }
        return new xa
    }

    var za = ya("localStorage"), Aa = ya("sessionStorage");

    function Ba(a, b, c, d, e) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.Ab = b;
        this.tb = c;
        this.Dg = d;
        this.Dd = e || "";
        this.Ma = za.get("host:" + a) || this.host
    }

    function Ca(a, b) {
        b !== a.Ma && (a.Ma = b, "s-" === a.Ma.substr(0, 2) && za.set("host:" + a.host, a.Ma))
    }

    Ba.prototype.toString = function () {
        var a = (this.Ab ? "https://" : "http://") + this.host;
        this.Dd && (a += "<" + this.Dd + ">");
        return a
    };
    function Da() {
        this.Sa = -1
    };
    function Ea() {
        this.Sa = -1;
        this.Sa = 64;
        this.R = [];
        this.be = [];
        this.Ef = [];
        this.Ad = [];
        this.Ad[0] = 128;
        for (var a = 1; a < this.Sa; ++a)this.Ad[a] = 0;
        this.Td = this.Sb = 0;
        this.reset()
    }

    ma(Ea, Da);
    Ea.prototype.reset = function () {
        this.R[0] = 1732584193;
        this.R[1] = 4023233417;
        this.R[2] = 2562383102;
        this.R[3] = 271733878;
        this.R[4] = 3285377520;
        this.Td = this.Sb = 0
    };
    function Fa(a, b, c) {
        c || (c = 0);
        var d = a.Ef;
        if (p(b))for (var e = 0; 16 > e; e++)d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; 16 > e; e++)d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.R[0];
        c = a.R[1];
        for (var g = a.R[2], k = a.R[3], l = a.R[4], n, e = 0; 80 > e; e++)40 > e ? 20 > e ? (f = k ^ c & (g ^ k), n = 1518500249) : (f = c ^ g ^ k, n = 1859775393) : 60 > e ? (f = c & g | k & (c | g), n = 2400959708) : (f = c ^ g ^ k, n = 3395469782), f = (b <<
            5 | b >>> 27) + f + l + n + d[e] & 4294967295, l = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.R[0] = a.R[0] + b & 4294967295;
        a.R[1] = a.R[1] + c & 4294967295;
        a.R[2] = a.R[2] + g & 4294967295;
        a.R[3] = a.R[3] + k & 4294967295;
        a.R[4] = a.R[4] + l & 4294967295
    }

    Ea.prototype.update = function (a, b) {
        m(b) || (b = a.length);
        for (var c = b - this.Sa, d = 0, e = this.be, f = this.Sb; d < b;) {
            if (0 == f)for (; d <= c;)Fa(this, a, d), d += this.Sa;
            if (p(a))for (; d < b;) {
                if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Sa) {
                    Fa(this, e);
                    f = 0;
                    break
                }
            } else for (; d < b;)if (e[f] = a[d], ++f, ++d, f == this.Sa) {
                Fa(this, e);
                f = 0;
                break
            }
        }
        this.Sb = f;
        this.Td += b
    };
    function Ga() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ la()).toString(36)
    };
    var v = Array.prototype, Ha = v.indexOf ? function (a, b, c) {
        return v.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a))return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }, Ia = v.forEach ? function (a, b, c) {
        v.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ja = v.filter ? function (a, b, c) {
        return v.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g = p(a) ?
            a.split("") : a, k = 0; k < d; k++)if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l)
        }
        return e
    }, Ka = v.map ? function (a, b, c) {
        return v.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, La = v.reduce ? function (a, b, c, d) {
        d && (b = q(b, d));
        return v.reduce.call(a, b, c)
    } : function (a, b, c, d) {
        var e = c;
        Ia(a, function (c, g) {
            e = b.call(d, e, c, g, a)
        });
        return e
    }, Ma = v.every ? function (a, b, c) {
        return v.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e =
            p(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c, e[f], f, a))return !1;
        return !0
    };

    function Na(a, b) {
        var c = Oa(a, b, void 0);
        return 0 > c ? null : p(a) ? a.charAt(c) : a[c]
    }

    function Oa(a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return f;
        return -1
    }

    function Pa(a, b) {
        var c = Ha(a, b);
        0 <= c && v.splice.call(a, c, 1)
    }

    function Qa(a, b, c) {
        return 2 >= arguments.length ? v.slice.call(a, b) : v.slice.call(a, b, c)
    }

    function Ra(a, b) {
        a.sort(b || Sa)
    }

    function Sa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Ta;
    a:{
        var Ua = aa.navigator;
        if (Ua) {
            var Va = Ua.userAgent;
            if (Va) {
                Ta = Va;
                break a
            }
        }
        Ta = ""
    }
    function Wa(a) {
        return -1 != Ta.indexOf(a)
    };
    var Xa = Wa("Opera") || Wa("OPR"), Ya = Wa("Trident") || Wa("MSIE"), Za = Wa("Gecko") && -1 == Ta.toLowerCase().indexOf("webkit") && !(Wa("Trident") || Wa("MSIE")), $a = -1 != Ta.toLowerCase().indexOf("webkit");
    (function () {
        var a = "", b;
        if (Xa && aa.opera)return a = aa.opera.version, ha(a) ? a() : a;
        Za ? b = /rv\:([^\);]+)(\)|;)/ : Ya ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $a && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(Ta)) ? a[1] : "");
        return Ya && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
    })();
    var ab = null, bb = null, cb = null;

    function db(a, b) {
        if (!fa(a))throw Error("encodeByteArray takes an array as a parameter");
        eb();
        for (var c = b ? bb : ab, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e], g = e + 1 < a.length, k = g ? a[e + 1] : 0, l = e + 2 < a.length, n = l ? a[e + 2] : 0, u = f >> 2, f = (f & 3) << 4 | k >> 4, k = (k & 15) << 2 | n >> 6, n = n & 63;
            l || (n = 64, g || (k = 64));
            d.push(c[u], c[f], c[k], c[n])
        }
        return d.join("")
    }

    function eb() {
        if (!ab) {
            ab = {};
            bb = {};
            cb = {};
            for (var a = 0; 65 > a; a++)ab[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), bb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), cb[bb[a]] = a
        }
    };
    var fb = function () {
        var a = 1;
        return function () {
            return a++
        }
    }();

    function w(a, b) {
        if (!a)throw gb(b);
    }

    function gb(a) {
        return Error("Firebase INTERNAL ASSERT FAILED:" + a)
    }

    function hb(a) {
        try {
            var b;
            if ("undefined" !== typeof atob)b = atob(a); else {
                eb();
                for (var c = cb, d = [], e = 0; e < a.length;) {
                    var f = c[a.charAt(e++)], g = e < a.length ? c[a.charAt(e)] : 0;
                    ++e;
                    var k = e < a.length ? c[a.charAt(e)] : 64;
                    ++e;
                    var l = e < a.length ? c[a.charAt(e)] : 64;
                    ++e;
                    if (null == f || null == g || null == k || null == l)throw Error();
                    d.push(f << 2 | g >> 4);
                    64 != k && (d.push(g << 4 & 240 | k >> 2), 64 != l && d.push(k << 6 & 192 | l))
                }
                if (8192 > d.length)b = String.fromCharCode.apply(null, d); else {
                    a = "";
                    for (c = 0; c < d.length; c += 8192)a += String.fromCharCode.apply(null, Qa(d, c,
                        c + 8192));
                    b = a
                }
            }
            return b
        } catch (n) {
            ib("base64Decode failed: ", n)
        }
        return null
    }

    function jb(a) {
        var b = kb(a);
        a = new Ea;
        a.update(b);
        var b = [], c = 8 * a.Td;
        56 > a.Sb ? a.update(a.Ad, 56 - a.Sb) : a.update(a.Ad, a.Sa - (a.Sb - 56));
        for (var d = a.Sa - 1; 56 <= d; d--)a.be[d] = c & 255, c /= 256;
        Fa(a, a.be);
        for (d = c = 0; 5 > d; d++)for (var e = 24; 0 <= e; e -= 8)b[c] = a.R[d] >> e & 255, ++c;
        return db(b)
    }

    function lb(a) {
        for (var b = "", c = 0; c < arguments.length; c++)b = fa(arguments[c]) ? b + lb.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + r(arguments[c]) : b + arguments[c], b += " ";
        return b
    }

    var mb = null, nb = !0;

    function ib(a) {
        !0 === nb && (nb = !1, null === mb && !0 === Aa.get("logging_enabled") && ob(!0));
        if (mb) {
            var b = lb.apply(null, arguments);
            mb(b)
        }
    }

    function pb(a) {
        return function () {
            ib(a, arguments)
        }
    }

    function qb(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE INTERNAL ERROR: " + lb.apply(null, arguments);
            "undefined" !== typeof console.error ? console.error(b) : console.log(b)
        }
    }

    function rb(a) {
        var b = lb.apply(null, arguments);
        throw Error("FIREBASE FATAL ERROR: " + b);
    }

    function y(a) {
        if ("undefined" !== typeof console) {
            var b = "FIREBASE WARNING: " + lb.apply(null, arguments);
            "undefined" !== typeof console.warn ? console.warn(b) : console.log(b)
        }
    }

    function sb(a) {
        var b = "", c = "", d = "", e = "", f = !0, g = "https", k = 443;
        if (p(a)) {
            var l = a.indexOf("//");
            0 <= l && (g = a.substring(0, l - 1), a = a.substring(l + 2));
            l = a.indexOf("/");
            -1 === l && (l = a.length);
            b = a.substring(0, l);
            e = "";
            a = a.substring(l).split("/");
            for (l = 0; l < a.length; l++)if (0 < a[l].length) {
                var n = a[l];
                try {
                    n = decodeURIComponent(n.replace(/\+/g, " "))
                } catch (u) {
                }
                e += "/" + n
            }
            a = b.split(".");
            3 === a.length ? (c = a[1], d = a[0].toLowerCase()) : 2 === a.length && (c = a[0]);
            l = b.indexOf(":");
            0 <= l && (f = "https" === g || "wss" === g, k = b.substring(l + 1), isFinite(k) &&
            (k = String(k)), k = p(k) ? /^\s*-?0x/i.test(k) ? parseInt(k, 16) : parseInt(k, 10) : NaN)
        }
        return {host: b, port: k, domain: c, Ag: d, Ab: f, scheme: g, Oc: e}
    }

    function tb(a) {
        return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function ub(a) {
        if ("complete" === document.readyState)a(); else {
            var b = !1, c = function () {
                document.body ? b || (b = !0, a()) : setTimeout(c, Math.floor(10))
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && c()
            }), window.attachEvent("onload", c))
        }
    }

    function vb(a, b) {
        if (a === b)return 0;
        if ("[MIN_NAME]" === a || "[MAX_NAME]" === b)return -1;
        if ("[MIN_NAME]" === b || "[MAX_NAME]" === a)return 1;
        var c = wb(a), d = wb(b);
        return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1
    }

    function xb(a, b) {
        if (b && a in b)return b[a];
        throw Error("Missing required key (" + a + ") in object: " + r(b));
    }

    function yb(a) {
        if ("object" !== typeof a || null === a)return r(a);
        var b = [], c;
        for (c in a)b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++)0 !== d && (c += ","), c += r(b[d]), c += ":", c += yb(a[b[d]]);
        return c + "}"
    }

    function zb(a, b) {
        if (a.length <= b)return [a];
        for (var c = [], d = 0; d < a.length; d += b)d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function Ab(a, b) {
        if (ea(a))for (var c = 0; c < a.length; ++c)b(c, a[c]); else z(a, b)
    }

    function Bb(a) {
        w(!tb(a), "Invalid JSON number");
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; a -= 1)e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; a -= 1)e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8)d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length &&
        (d = "0" + d), c += d;
        return c.toLowerCase()
    }

    var Cb = /^-?\d{1,10}$/;

    function wb(a) {
        return Cb.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null
    }

    function Db(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function () {
                y("Exception was thrown by user callback.", b.stack || "");
                throw b;
            }, Math.floor(0))
        }
    }

    function A(a, b) {
        if (ha(a)) {
            var c = Array.prototype.slice.call(arguments, 1).slice();
            Db(function () {
                a.apply(null, c)
            })
        }
    };
    function Eb(a, b, c, d) {
        this.le = b;
        this.Nd = c;
        this.Fd = d;
        this.jd = a
    }

    Eb.prototype.Qb = function () {
        var a = this.Nd.cc();
        return "value" === this.jd ? a.path : a.parent().path
    };
    Eb.prototype.pe = function () {
        return this.jd
    };
    Eb.prototype.Lb = function () {
        return this.le.Lb(this)
    };
    Eb.prototype.toString = function () {
        return this.Qb().toString() + ":" + this.jd + ":" + r(this.Nd.bf())
    };
    function Fb(a, b, c) {
        this.le = a;
        this.error = b;
        this.path = c
    }

    Fb.prototype.Qb = function () {
        return this.path
    };
    Fb.prototype.pe = function () {
        return "cancel"
    };
    Fb.prototype.Lb = function () {
        return this.le.Lb(this)
    };
    Fb.prototype.toString = function () {
        return this.path.toString() + ":cancel"
    };
    function B(a, b, c, d) {
        this.type = a;
        this.Ha = b;
        this.Ua = c;
        this.De = d;
        this.Fd = void 0
    }

    function Gb(a) {
        return new B(Hb, a)
    }

    var Hb = "value";

    function Ib(a, b, c) {
        this.Hb = a;
        this.kb = b;
        this.mb = c || null
    }

    h = Ib.prototype;
    h.wf = function (a) {
        return "value" === a
    };
    h.createEvent = function (a, b) {
        var c = b.n.g;
        return new Eb("value", this, new C(a.Ha, b.cc(), c))
    };
    h.Lb = function (a) {
        var b = this.mb;
        if ("cancel" === a.pe()) {
            w(this.kb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.kb;
            return function () {
                c.call(b, a.error)
            }
        }
        var d = this.Hb;
        return function () {
            d.call(b, a.Nd)
        }
    };
    h.Ye = function (a, b) {
        return this.kb ? new Fb(this, a, b) : null
    };
    h.matches = function (a) {
        return a instanceof Ib ? a.Hb && this.Hb ? a.Hb === this.Hb && a.mb === this.mb : !0 : !1
    };
    h.hf = function () {
        return null !== this.Hb
    };
    function Jb(a, b, c) {
        this.da = a;
        this.kb = b;
        this.mb = c
    }

    h = Jb.prototype;
    h.wf = function (a) {
        a = "children_added" === a ? "child_added" : a;
        return ("children_removed" === a ? "child_removed" : a) in this.da
    };
    h.Ye = function (a, b) {
        return this.kb ? new Fb(this, a, b) : null
    };
    h.createEvent = function (a, b) {
        w(null != a.Ua, "Child events should have a childName.");
        var c = b.cc().o(a.Ua);
        return new Eb(a.type, this, new C(a.Ha, c, b.n.g), a.Fd)
    };
    h.Lb = function (a) {
        var b = this.mb;
        if ("cancel" === a.pe()) {
            w(this.kb, "Raising a cancel event on a listener with no cancel callback");
            var c = this.kb;
            return function () {
                c.call(b, a.error)
            }
        }
        var d = this.da[a.jd];
        return function () {
            d.call(b, a.Nd, a.Fd)
        }
    };
    h.matches = function (a) {
        if (a instanceof Jb) {
            if (!this.da || !a.da)return !0;
            if (this.mb === a.mb) {
                var b = Kb(a.da);
                if (b === Kb(this.da)) {
                    if (1 === b) {
                        var b = Lb(a.da), c = Lb(this.da);
                        return c === b && (!a.da[b] || !this.da[c] || a.da[b] === this.da[c])
                    }
                    return Mb(this.da, function (b, c) {
                        return a.da[c] === b
                    })
                }
            }
        }
        return !1
    };
    h.hf = function () {
        return null !== this.da
    };
    function kb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, w(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    function D(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        if (e)throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
    }

    function F(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
        }
        return a = a + " failed: " + (d + " argument ")
    }

    function G(a, b, c, d) {
        if ((!d || m(c)) && !ha(c))throw Error(F(a, b, d) + "must be a valid function.");
    }

    function Nb(a, b, c) {
        if (m(c) && (!ia(c) || null === c))throw Error(F(a, b, !0) + "must be a valid context object.");
    };
    var Ob = /[\[\].#$\/\u0000-\u001F\u007F]/, Pb = /[\[\].#$\u0000-\u001F\u007F]/;

    function Qb(a) {
        return p(a) && 0 !== a.length && !Ob.test(a)
    }

    function Rb(a) {
        return null === a || p(a) || ga(a) && !tb(a) || ia(a) && s(a, ".sv")
    }

    function Sb(a, b, c) {
        c && !m(b) || Tb(F(a, 1, c), b)
    }

    function Tb(a, b, c, d) {
        c || (c = 0);
        var e = d || [];
        if (!m(b))throw Error(a + "contains undefined" + Ub(e));
        if (ha(b))throw Error(a + "contains a function" + Ub(e) + " with contents: " + b.toString());
        if (tb(b))throw Error(a + "contains " + b.toString() + Ub(e));
        if (1E3 < c)throw new TypeError(a + "contains a cyclic object value (" + e.slice(0, 100).join(".") + "...)");
        if (p(b) && b.length > 10485760 / 3 && 10485760 < kb(b).length)throw Error(a + "contains a string greater than 10485760 utf8 bytes" + Ub(e) + " ('" + b.substring(0, 50) + "...')");
        if (ia(b)) {
            var f =
                !1, g = !1;
            ua(b, function (b, d) {
                if (".value" === b)f = !0; else if (".priority" !== b && ".sv" !== b && (g = !0, !Qb(b)))throw Error(a + " contains an invalid key (" + b + ")" + Ub(e) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                e.push(b);
                Tb(a, d, c + 1, e);
                e.pop()
            });
            if (f && g)throw Error(a + ' contains ".value" child' + Ub(e) + " in addition to actual children.");
        }
    }

    function Ub(a) {
        return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
    }

    function Vb(a, b) {
        if (!ia(b) || ea(b))throw Error(F(a, 1, !1) + " must be an Object containing the children to replace.");
        if (s(b, ".value"))throw Error(F(a, 1, !1) + ' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');
        Sb(a, b, !1)
    }

    function Wb(a, b, c) {
        if (tb(c))throw Error(F(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!Rb(c))throw Error(F(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
    }

    function Xb(a, b, c) {
        if (!c || m(b))switch (b) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                throw Error(F(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
    }

    function Yb(a, b, c, d) {
        if ((!d || m(c)) && !Qb(c))throw Error(F(a, b, d) + 'was an invalid key: "' + c + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    }

    function Zb(a, b) {
        if (!p(b) || 0 === b.length || Pb.test(b))throw Error(F(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    }

    function $b(a, b) {
        if (".info" === H(b))throw Error(a + " failed: Can't modify data under /.info/");
    }

    function ac(a, b) {
        if (!p(b))throw Error(F(a, 1, !1) + "must be a valid credential (a string).");
    }

    function bc(a, b, c) {
        if (!p(c))throw Error(F(a, b, !1) + "must be a valid string.");
    }

    function I(a, b, c, d) {
        if (!d || m(c))if (!ia(c) || null === c)throw Error(F(a, b, d) + "must be a valid object.");
    }

    function J(a, b, c) {
        if (!ia(b) || null === b || !s(b, c))throw Error(F(a, 1, !1) + 'must contain the key "' + c + '"');
        if (!p(t(b, c)))throw Error(F(a, 1, !1) + 'must contain the key "' + c + '" with type "string"');
    };
    function cc(a) {
        this.g = a
    }

    h = cc.prototype;
    h.C = function (a, b, c, d, e) {
        w(a.Ac(this.g), "A node must be indexed if only a child is updated");
        d = a.K(b);
        if (d.ea(c))return a;
        null != e && (c.e() ? a.Da(b) ? dc(e, new B("child_removed", d, b)) : w(a.M(), "A child remove without an old child only makes sense on a leaf node") : d.e() ? dc(e, new B("child_added", c, b)) : dc(e, new B("child_changed", c, b, d)));
        return a.M() && c.e() ? a : a.P(b, c)
    };
    h.oa = function (a, b, c) {
        null != c && (a.M() || a.U(K, function (a, e) {
            b.Da(a) || dc(c, new B("child_removed", e, a))
        }), b.M() || b.U(K, function (b, e) {
            if (a.Da(b)) {
                var f = a.K(b);
                f.ea(e) || dc(c, new B("child_changed", e, b, f))
            } else dc(c, new B("child_added", e, b))
        }));
        return b.Fb(this.g)
    };
    h.Z = function (a, b) {
        return a.e() ? L : a.Z(b)
    };
    h.ya = function () {
        return !1
    };
    h.Mb = function () {
        return this
    };
    function ec(a) {
        this.re = new cc(a.g);
        this.g = a.g;
        var b;
        a.ia ? (b = fc(a), b = a.g.Ae(gc(a), b)) : b = a.g.Ce();
        this.Vc = b;
        a.qa ? (b = hc(a), a = a.g.Ae(ic(a), b)) : a = a.g.Be();
        this.vc = a
    }

    h = ec.prototype;
    h.matches = function (a) {
        return 0 >= this.g.compare(this.Vc, a) && 0 >= this.g.compare(a, this.vc)
    };
    h.C = function (a, b, c, d, e) {
        this.matches(new M(b, c)) || (c = L);
        return this.re.C(a, b, c, d, e)
    };
    h.oa = function (a, b, c) {
        b.M() && (b = L);
        var d = b.Fb(this.g), d = d.Z(L), e = this;
        b.U(K, function (a, b) {
            e.matches(new M(a, b)) || (d = d.P(a, L))
        });
        return this.re.oa(a, d, c)
    };
    h.Z = function (a) {
        return a
    };
    h.ya = function () {
        return !0
    };
    h.Mb = function () {
        return this.re
    };
    function jc(a, b) {
        return vb(a.name, b.name)
    }

    function kc(a, b) {
        return vb(a, b)
    };
    function lc() {
    }

    var mc = {};

    function nc(a) {
        return q(a.compare, a)
    }

    lc.prototype.jf = function (a, b) {
        return 0 !== this.compare(new M("[MIN_NAME]", a), new M("[MIN_NAME]", b))
    };
    lc.prototype.Ce = function () {
        return oc
    };
    function pc(a) {
        this.Ub = a
    }

    ma(pc, lc);
    h = pc.prototype;
    h.ue = function (a) {
        return !a.K(this.Ub).e()
    };
    h.compare = function (a, b) {
        var c = a.Y.K(this.Ub), d = b.Y.K(this.Ub), c = c.he(d);
        return 0 === c ? vb(a.name, b.name) : c
    };
    h.Ae = function (a, b) {
        var c = N(a), c = L.P(this.Ub, c);
        return new M(b, c)
    };
    h.Be = function () {
        var a = L.P(this.Ub, qc);
        return new M("[MAX_NAME]", a)
    };
    h.toString = function () {
        return this.Ub
    };
    var K = new pc(".priority");

    function rc() {
    }

    ma(rc, lc);
    h = rc.prototype;
    h.compare = function (a, b) {
        return vb(a.name, b.name)
    };
    h.ue = function () {
        throw gb("KeyIndex.isDefinedOn not expected to be called.");
    };
    h.jf = function () {
        return !1
    };
    h.Ce = function () {
        return oc
    };
    h.Be = function () {
        return new M("[MAX_NAME]", L)
    };
    h.Ae = function (a) {
        w(p(a), "KeyIndex indexValue must always be a string.");
        return new M(a, L)
    };
    h.toString = function () {
        return ".key"
    };
    var sc = new rc;

    function tc() {
    }

    tc.prototype.ef = function () {
        return null
    };
    tc.prototype.oe = function () {
        return null
    };
    var uc = new tc;

    function vc(a, b, c) {
        this.Bf = a;
        this.Ia = b;
        this.zd = c
    }

    vc.prototype.ef = function (a) {
        var b = this.Ia.F;
        if (wc(b, a))return b.j().K(a);
        b = null != this.zd ? new xc(this.zd, !0, !1) : this.Ia.u();
        return this.Bf.Ta(a, b)
    };
    vc.prototype.oe = function (a, b, c) {
        var d = null != this.zd ? this.zd : yc(this.Ia);
        a = this.Bf.ce(d, b, 1, c, a);
        return 0 === a.length ? null : a[0]
    };
    function zc() {
        this.Za = {}
    }

    function dc(a, b) {
        var c = b.type, d = b.Ua;
        w("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
        w(".priority" !== d, "Only non-priority child changes can be tracked.");
        var e = t(a.Za, d);
        if (e) {
            var f = e.type;
            if ("child_added" == c && "child_removed" == f)a.Za[d] = new B("child_changed", b.Ha, d, e.Ha); else if ("child_removed" == c && "child_added" == f)delete a.Za[d]; else if ("child_removed" == c && "child_changed" == f)a.Za[d] = new B("child_removed", e.De, d); else if ("child_changed" == c &&
                "child_added" == f)a.Za[d] = new B("child_added", b.Ha, d); else if ("child_changed" == c && "child_changed" == f)a.Za[d] = new B("child_changed", b.Ha, d, e.De); else throw gb("Illegal combination of changes: " + b + " occurred after " + e);
        } else a.Za[d] = b
    };
    function M(a, b) {
        this.name = a;
        this.Y = b
    }

    function Ac(a, b) {
        return new M(a, b)
    };
    function Bc(a) {
        this.ma = new ec(a);
        this.g = a.g;
        w(a.ka, "Only valid if limit has been set");
        this.sa = a.sa;
        this.zb = !("" === a.Eb ? a.ia : "l" === a.Eb)
    }

    h = Bc.prototype;
    h.C = function (a, b, c, d, e) {
        this.ma.matches(new M(b, c)) || (c = L);
        return a.K(b).ea(c) ? a : a.ub() < this.sa ? this.ma.Mb().C(a, b, c, d, e) : Cc(this, a, b, c, d, e)
    };
    h.oa = function (a, b, c) {
        var d;
        if (b.M() || b.e())d = L.Fb(this.g); else if (2 * this.sa < b.ub() && b.Ac(this.g)) {
            d = L.Fb(this.g);
            b = this.zb ? b.Rb(this.ma.vc, this.g) : b.Pb(this.ma.Vc, this.g);
            for (var e = 0; 0 < b.Na.length && e < this.sa;) {
                var f = O(b), g;
                if (g = this.zb ? 0 >= this.g.compare(this.ma.Vc, f) : 0 >= this.g.compare(f, this.ma.vc))d = d.P(f.name, f.Y), e++; else break
            }
        } else {
            d = b.Fb(this.g);
            d = d.Z(L);
            var k, l, n;
            if (this.zb) {
                b = d.gf(this.g);
                k = this.ma.vc;
                l = this.ma.Vc;
                var u = nc(this.g);
                n = function (a, b) {
                    return u(b, a)
                }
            } else b = d.Ob(this.g), k = this.ma.Vc,
                l = this.ma.vc, n = nc(this.g);
            for (var e = 0, x = !1; 0 < b.Na.length;)f = O(b), !x && 0 >= n(k, f) && (x = !0), (g = x && e < this.sa && 0 >= n(f, l)) ? e++ : d = d.P(f.name, L)
        }
        return this.ma.Mb().oa(a, d, c)
    };
    h.Z = function (a) {
        return a
    };
    h.ya = function () {
        return !0
    };
    h.Mb = function () {
        return this.ma.Mb()
    };
    function Cc(a, b, c, d, e, f) {
        var g;
        if (a.zb) {
            var k = nc(a.g);
            g = function (a, b) {
                return k(b, a)
            }
        } else g = nc(a.g);
        w(b.ub() == a.sa, "");
        var l = new M(c, d), n = a.zb ? Dc(b, a.g) : Ec(b, a.g), u = a.ma.matches(l);
        if (b.Da(c)) {
            var x = b.K(c), n = e.oe(a.g, n, a.zb);
            null != n && n.name == c && (n = e.oe(a.g, n, a.zb));
            e = null == n ? 1 : g(n, l);
            if (u && !d.e() && 0 <= e)return null != f && dc(f, new B("child_changed", d, c, x)), b.P(c, d);
            null != f && dc(f, new B("child_removed", x, c));
            b = b.P(c, L);
            return null != n && a.ma.matches(n) ? (null != f && dc(f, new B("child_added", n.Y, n.name)), b.P(n.name,
                n.Y)) : b
        }
        return d.e() ? b : u && 0 <= g(n, l) ? (null != f && (dc(f, new B("child_removed", n.Y, n.name)), dc(f, new B("child_added", d, c))), b.P(c, d).P(n.name, L)) : b
    };
    function Fc() {
        this.uc = this.qa = this.jc = this.ia = this.ka = !1;
        this.sa = 0;
        this.Eb = "";
        this.zc = null;
        this.Wb = "";
        this.yc = null;
        this.Tb = "";
        this.g = K
    }

    var Gc = new Fc;

    function gc(a) {
        w(a.ia, "Only valid if start has been set");
        return a.zc
    }

    function fc(a) {
        w(a.ia, "Only valid if start has been set");
        return a.jc ? a.Wb : "[MIN_NAME]"
    }

    function ic(a) {
        w(a.qa, "Only valid if end has been set");
        return a.yc
    }

    function hc(a) {
        w(a.qa, "Only valid if end has been set");
        return a.uc ? a.Tb : "[MAX_NAME]"
    }

    function Hc(a) {
        var b = new Fc;
        b.ka = a.ka;
        b.sa = a.sa;
        b.ia = a.ia;
        b.zc = a.zc;
        b.jc = a.jc;
        b.Wb = a.Wb;
        b.qa = a.qa;
        b.yc = a.yc;
        b.uc = a.uc;
        b.Tb = a.Tb;
        b.g = a.g;
        return b
    }

    h = Fc.prototype;
    h.xe = function (a) {
        var b = Hc(this);
        b.ka = !0;
        b.sa = a;
        b.Eb = "";
        return b
    };
    h.ye = function (a) {
        var b = Hc(this);
        b.ka = !0;
        b.sa = a;
        b.Eb = "l";
        return b
    };
    h.ze = function (a) {
        var b = Hc(this);
        b.ka = !0;
        b.sa = a;
        b.Eb = "r";
        return b
    };
    h.Od = function (a, b) {
        var c = Hc(this);
        c.ia = !0;
        m(a) || (a = null);
        c.zc = a;
        null != b ? (c.jc = !0, c.Wb = b) : (c.jc = !1, c.Wb = "");
        return c
    };
    h.hd = function (a, b) {
        var c = Hc(this);
        c.qa = !0;
        m(a) || (a = null);
        c.yc = a;
        m(b) ? (c.uc = !0, c.Tb = b) : (c.Ig = !1, c.Tb = "");
        return c
    };
    function Ic(a, b) {
        var c = Hc(a);
        c.g = b;
        return c
    }

    function Jc(a) {
        var b = {};
        a.ia && (b.sp = a.zc, a.jc && (b.sn = a.Wb));
        a.qa && (b.ep = a.yc, a.uc && (b.en = a.Tb));
        if (a.ka) {
            b.l = a.sa;
            var c = a.Eb;
            "" === c && (c = a.ia ? "l" : "r");
            b.vf = c
        }
        a.g !== K && (b.i = a.g.toString());
        return b
    }

    function Kc(a) {
        return !(a.ia || a.qa || a.ka)
    }

    h.toString = function () {
        return r(Jc(this))
    };
    function P(a, b, c, d) {
        this.k = a;
        this.path = b;
        this.n = c;
        this.ac = d
    }

    function Lc(a) {
        var b = null, c = null;
        a.ia && (b = gc(a));
        a.qa && (c = ic(a));
        if (a.g === sc) {
            if (a.ia) {
                if ("[MIN_NAME]" != fc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if (null != b && "string" !== typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
            if (a.qa) {
                if ("[MAX_NAME]" != hc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
                if (null !=
                    c && "string" !== typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
            }
        } else if (a.g === K) {
            if (null != b && !Rb(b) || null != c && !Rb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (w(a.g instanceof pc, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
    }

    function Mc(a) {
        if (a.ia && a.qa && a.ka && (!a.ka || "" === a.Eb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
    }

    function Nc(a, b) {
        if (!0 === a.ac)throw Error(b + ": You can't combine multiple orderBy calls.");
    }

    P.prototype.cc = function () {
        D("Query.ref", 0, 0, arguments.length);
        return new Q(this.k, this.path)
    };
    P.prototype.ref = P.prototype.cc;
    P.prototype.vb = function (a, b, c, d) {
        D("Query.on", 2, 4, arguments.length);
        Xb("Query.on", a, !1);
        G("Query.on", 2, b, !1);
        var e = Oc("Query.on", c, d);
        if ("value" === a)Pc(this.k, this, new Ib(b, e.cancel || null, e.Ka || null)); else {
            var f = {};
            f[a] = b;
            Pc(this.k, this, new Jb(f, e.cancel, e.Ka))
        }
        return b
    };
    P.prototype.on = P.prototype.vb;
    P.prototype.Zb = function (a, b, c) {
        D("Query.off", 0, 3, arguments.length);
        Xb("Query.off", a, !0);
        G("Query.off", 2, b, !0);
        Nb("Query.off", 3, c);
        var d = null, e = null;
        "value" === a ? d = new Ib(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new Jb(e, null, c || null));
        e = this.k;
        d = ".info" === H(this.path) ? e.qd.gb(this, d) : e.N.gb(this, d);
        Qc(e.$, this.path, d)
    };
    P.prototype.off = P.prototype.Zb;
    P.prototype.lg = function (a, b) {
        function c(g) {
            f && (f = !1, e.Zb(a, c), b.call(d.Ka, g))
        }

        D("Query.once", 2, 4, arguments.length);
        Xb("Query.once", a, !1);
        G("Query.once", 2, b, !1);
        var d = Oc("Query.once", arguments[2], arguments[3]), e = this, f = !0;
        this.vb(a, c, function (b) {
            e.Zb(a, c);
            d.cancel && d.cancel.call(d.Ka, b)
        })
    };
    P.prototype.once = P.prototype.lg;
    P.prototype.xe = function (a) {
        y("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");
        D("Query.limit", 1, 1, arguments.length);
        if (!ga(a) || Math.floor(a) !== a || 0 >= a)throw Error("Query.limit: First argument must be a positive integer.");
        if (this.n.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
        var b = this.n.xe(a);
        Mc(b);
        return new P(this.k, this.path, b, this.ac)
    };
    P.prototype.limit = P.prototype.xe;
    P.prototype.ye = function (a) {
        D("Query.limitToFirst", 1, 1, arguments.length);
        if (!ga(a) || Math.floor(a) !== a || 0 >= a)throw Error("Query.limitToFirst: First argument must be a positive integer.");
        if (this.n.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new P(this.k, this.path, this.n.ye(a), this.ac)
    };
    P.prototype.limitToFirst = P.prototype.ye;
    P.prototype.ze = function (a) {
        D("Query.limitToLast", 1, 1, arguments.length);
        if (!ga(a) || Math.floor(a) !== a || 0 >= a)throw Error("Query.limitToLast: First argument must be a positive integer.");
        if (this.n.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new P(this.k, this.path, this.n.ze(a), this.ac)
    };
    P.prototype.limitToLast = P.prototype.ze;
    P.prototype.mg = function (a) {
        D("Query.orderByChild", 1, 1, arguments.length);
        if ("$key" === a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        if ("$priority" === a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        Yb("Query.orderByChild", 1, a, !1);
        Nc(this, "Query.orderByChild");
        var b = Ic(this.n, new pc(a));
        Lc(b);
        return new P(this.k, this.path, b, !0)
    };
    P.prototype.orderByChild = P.prototype.mg;
    P.prototype.ng = function () {
        D("Query.orderByKey", 0, 0, arguments.length);
        Nc(this, "Query.orderByKey");
        var a = Ic(this.n, sc);
        Lc(a);
        return new P(this.k, this.path, a, !0)
    };
    P.prototype.orderByKey = P.prototype.ng;
    P.prototype.og = function () {
        D("Query.orderByPriority", 0, 0, arguments.length);
        Nc(this, "Query.orderByPriority");
        var a = Ic(this.n, K);
        Lc(a);
        return new P(this.k, this.path, a, !0)
    };
    P.prototype.orderByPriority = P.prototype.og;
    P.prototype.Od = function (a, b) {
        D("Query.startAt", 0, 2, arguments.length);
        Sb("Query.startAt", a, !0);
        Yb("Query.startAt", 2, b, !0);
        var c = this.n.Od(a, b);
        Mc(c);
        Lc(c);
        if (this.n.ia)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
        m(a) || (b = a = null);
        return new P(this.k, this.path, c, this.ac)
    };
    P.prototype.startAt = P.prototype.Od;
    P.prototype.hd = function (a, b) {
        D("Query.endAt", 0, 2, arguments.length);
        Sb("Query.endAt", a, !0);
        Yb("Query.endAt", 2, b, !0);
        var c = this.n.hd(a, b);
        Mc(c);
        Lc(c);
        if (this.n.qa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
        return new P(this.k, this.path, c, this.ac)
    };
    P.prototype.endAt = P.prototype.hd;
    P.prototype.Tf = function (a, b) {
        D("Query.equalTo", 1, 2, arguments.length);
        Sb("Query.equalTo", a, !1);
        Yb("Query.equalTo", 2, b, !0);
        if (this.n.ia)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
        if (this.n.qa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
        return this.Od(a, b).hd(a, b)
    };
    P.prototype.equalTo = P.prototype.Tf;
    P.prototype.Fa = function () {
        var a = yb(Jc(this.n));
        return "{}" === a ? "default" : a
    };
    function Oc(a, b, c) {
        var d = {cancel: null, Ka: null};
        if (b && c)d.cancel = b, G(a, 3, d.cancel, !0), d.Ka = c, Nb(a, 4, d.Ka); else if (b)if ("object" === typeof b && null !== b)d.Ka = b; else if ("function" === typeof b)d.cancel = b; else throw Error(F(a, 3, !0) + " must either be a cancel callback or a context object.");
        return d
    };
    function R(a, b) {
        if (1 == arguments.length) {
            this.w = a.split("/");
            for (var c = 0, d = 0; d < this.w.length; d++)0 < this.w[d].length && (this.w[c] = this.w[d], c++);
            this.w.length = c;
            this.ca = 0
        } else this.w = a, this.ca = b
    }

    function H(a) {
        return a.ca >= a.w.length ? null : a.w[a.ca]
    }

    function Rc(a) {
        return a.w.length - a.ca
    }

    function S(a) {
        var b = a.ca;
        b < a.w.length && b++;
        return new R(a.w, b)
    }

    function Sc(a) {
        return a.ca < a.w.length ? a.w[a.w.length - 1] : null
    }

    R.prototype.toString = function () {
        for (var a = "", b = this.ca; b < this.w.length; b++)"" !== this.w[b] && (a += "/" + this.w[b]);
        return a || "/"
    };
    R.prototype.parent = function () {
        if (this.ca >= this.w.length)return null;
        for (var a = [], b = this.ca; b < this.w.length - 1; b++)a.push(this.w[b]);
        return new R(a, 0)
    };
    R.prototype.o = function (a) {
        for (var b = [], c = this.ca; c < this.w.length; c++)b.push(this.w[c]);
        if (a instanceof R)for (c = a.ca; c < a.w.length; c++)b.push(a.w[c]); else for (a = a.split("/"), c = 0; c < a.length; c++)0 < a[c].length && b.push(a[c]);
        return new R(b, 0)
    };
    R.prototype.e = function () {
        return this.ca >= this.w.length
    };
    var T = new R("");

    function U(a, b) {
        var c = H(a);
        if (null === c)return b;
        if (c === H(b))return U(S(a), S(b));
        throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
    }

    R.prototype.ea = function (a) {
        if (Rc(this) !== Rc(a))return !1;
        for (var b = this.ca, c = a.ca; b <= this.w.length; b++, c++)if (this.w[b] !== a.w[c])return !1;
        return !0
    };
    R.prototype.contains = function (a) {
        var b = this.ca, c = a.ca;
        if (Rc(this) > Rc(a))return !1;
        for (; b < this.w.length;) {
            if (this.w[b] !== a.w[c])return !1;
            ++b;
            ++c
        }
        return !0
    };
    function Tc() {
        this.children = {};
        this.bd = 0;
        this.value = null
    }

    function Uc(a, b, c) {
        this.ud = a ? a : "";
        this.Nc = b ? b : null;
        this.A = c ? c : new Tc
    }

    function Vc(a, b) {
        for (var c = b instanceof R ? b : new R(b), d = a, e; null !== (e = H(c));)d = new Uc(e, d, t(d.A.children, e) || new Tc), c = S(c);
        return d
    }

    h = Uc.prototype;
    h.za = function () {
        return this.A.value
    };
    function Wc(a, b) {
        w("undefined" !== typeof b, "Cannot set value to undefined");
        a.A.value = b;
        Xc(a)
    }

    h.clear = function () {
        this.A.value = null;
        this.A.children = {};
        this.A.bd = 0;
        Xc(this)
    };
    h.ld = function () {
        return 0 < this.A.bd
    };
    h.e = function () {
        return null === this.za() && !this.ld()
    };
    h.U = function (a) {
        var b = this;
        z(this.A.children, function (c, d) {
            a(new Uc(d, b, c))
        })
    };
    function Yc(a, b, c, d) {
        c && !d && b(a);
        a.U(function (a) {
            Yc(a, b, !0, d)
        });
        c && d && b(a)
    }

    function Zc(a, b) {
        for (var c = a.parent(); null !== c && !b(c);)c = c.parent()
    }

    h.path = function () {
        return new R(null === this.Nc ? this.ud : this.Nc.path() + "/" + this.ud)
    };
    h.name = function () {
        return this.ud
    };
    h.parent = function () {
        return this.Nc
    };
    function Xc(a) {
        if (null !== a.Nc) {
            var b = a.Nc, c = a.ud, d = a.e(), e = s(b.A.children, c);
            d && e ? (delete b.A.children[c], b.A.bd--, Xc(b)) : d || e || (b.A.children[c] = a.A, b.A.bd++, Xc(b))
        }
    };
    function $c(a, b) {
        this.Ja = a;
        this.ua = b ? b : ad
    }

    h = $c.prototype;
    h.La = function (a, b) {
        return new $c(this.Ja, this.ua.La(a, b, this.Ja).X(null, null, !1, null, null))
    };
    h.remove = function (a) {
        return new $c(this.Ja, this.ua.remove(a, this.Ja).X(null, null, !1, null, null))
    };
    h.get = function (a) {
        for (var b, c = this.ua; !c.e();) {
            b = this.Ja(a, c.key);
            if (0 === b)return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return null
    };
    function bd(a, b) {
        for (var c, d = a.ua, e = null; !d.e();) {
            c = a.Ja(b, d.key);
            if (0 === c) {
                if (d.left.e())return e ? e.key : null;
                for (d = d.left; !d.right.e();)d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
    }

    h.e = function () {
        return this.ua.e()
    };
    h.count = function () {
        return this.ua.count()
    };
    h.Hc = function () {
        return this.ua.Hc()
    };
    h.Xb = function () {
        return this.ua.Xb()
    };
    h.fa = function (a) {
        return this.ua.fa(a)
    };
    h.Ob = function (a) {
        return new cd(this.ua, null, this.Ja, !1, a)
    };
    h.Pb = function (a, b) {
        return new cd(this.ua, a, this.Ja, !1, b)
    };
    h.Rb = function (a, b) {
        return new cd(this.ua, a, this.Ja, !0, b)
    };
    h.gf = function (a) {
        return new cd(this.ua, null, this.Ja, !0, a)
    };
    function cd(a, b, c, d, e) {
        this.Id = e || null;
        this.ve = d;
        this.Na = [];
        for (e = 1; !a.e();)if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e)a = this.ve ? a.left : a.right; else if (0 === e) {
            this.Na.push(a);
            break
        } else this.Na.push(a), a = this.ve ? a.right : a.left
    }

    function O(a) {
        if (0 === a.Na.length)return null;
        var b = a.Na.pop(), c;
        c = a.Id ? a.Id(b.key, b.value) : {key: b.key, value: b.value};
        if (a.ve)for (b = b.left; !b.e();)a.Na.push(b), b = b.right; else for (b = b.right; !b.e();)a.Na.push(b), b = b.left;
        return c
    }

    function dd(a) {
        if (0 === a.Na.length)return null;
        var b;
        b = a.Na;
        b = b[b.length - 1];
        return a.Id ? a.Id(b.key, b.value) : {key: b.key, value: b.value}
    }

    function ed(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = null != c ? c : !0;
        this.left = null != d ? d : ad;
        this.right = null != e ? e : ad
    }

    h = ed.prototype;
    h.X = function (a, b, c, d, e) {
        return new ed(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
    };
    h.count = function () {
        return this.left.count() + 1 + this.right.count()
    };
    h.e = function () {
        return !1
    };
    h.fa = function (a) {
        return this.left.fa(a) || a(this.key, this.value) || this.right.fa(a)
    };
    function gd(a) {
        return a.left.e() ? a : gd(a.left)
    }

    h.Hc = function () {
        return gd(this).key
    };
    h.Xb = function () {
        return this.right.e() ? this.key : this.right.Xb()
    };
    h.La = function (a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.X(null, null, null, e.left.La(a, b, c), null) : 0 === d ? e.X(null, b, null, null, null) : e.X(null, null, null, null, e.right.La(a, b, c));
        return hd(e)
    };
    function id(a) {
        if (a.left.e())return ad;
        a.left.ba() || a.left.left.ba() || (a = jd(a));
        a = a.X(null, null, null, id(a.left), null);
        return hd(a)
    }

    h.remove = function (a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key))c.left.e() || c.left.ba() || c.left.left.ba() || (c = jd(c)), c = c.X(null, null, null, c.left.remove(a, b), null); else {
            c.left.ba() && (c = kd(c));
            c.right.e() || c.right.ba() || c.right.left.ba() || (c = ld(c), c.left.left.ba() && (c = kd(c), c = ld(c)));
            if (0 === b(a, c.key)) {
                if (c.right.e())return ad;
                d = gd(c.right);
                c = c.X(d.key, d.value, null, null, id(c.right))
            }
            c = c.X(null, null, null, null, c.right.remove(a, b))
        }
        return hd(c)
    };
    h.ba = function () {
        return this.color
    };
    function hd(a) {
        a.right.ba() && !a.left.ba() && (a = md(a));
        a.left.ba() && a.left.left.ba() && (a = kd(a));
        a.left.ba() && a.right.ba() && (a = ld(a));
        return a
    }

    function jd(a) {
        a = ld(a);
        a.right.left.ba() && (a = a.X(null, null, null, null, kd(a.right)), a = md(a), a = ld(a));
        return a
    }

    function md(a) {
        return a.right.X(null, null, a.color, a.X(null, null, !0, null, a.right.left), null)
    }

    function kd(a) {
        return a.left.X(null, null, a.color, null, a.X(null, null, !0, a.left.right, null))
    }

    function ld(a) {
        return a.X(null, null, !a.color, a.left.X(null, null, !a.left.color, null, null), a.right.X(null, null, !a.right.color, null, null))
    }

    function nd() {
    }

    h = nd.prototype;
    h.X = function () {
        return this
    };
    h.La = function (a, b) {
        return new ed(a, b, null)
    };
    h.remove = function () {
        return this
    };
    h.count = function () {
        return 0
    };
    h.e = function () {
        return !0
    };
    h.fa = function () {
        return !1
    };
    h.Hc = function () {
        return null
    };
    h.Xb = function () {
        return null
    };
    h.ba = function () {
        return !1
    };
    var ad = new nd;

    function od(a, b) {
        this.D = a;
        w(m(this.D) && null !== this.D, "LeafNode shouldn't be created with null/undefined value.");
        this.ha = b || L;
        pd(this.ha);
        this.sb = null
    }

    h = od.prototype;
    h.M = function () {
        return !0
    };
    h.L = function () {
        return this.ha
    };
    h.Z = function (a) {
        return new od(this.D, a)
    };
    h.K = function (a) {
        return ".priority" === a ? this.ha : L
    };
    h.ra = function (a) {
        return a.e() ? this : ".priority" === H(a) ? this.ha : L
    };
    h.Da = function () {
        return !1
    };
    h.ff = function () {
        return null
    };
    h.P = function (a, b) {
        return ".priority" === a ? this.Z(b) : b.e() && ".priority" !== a ? this : L.P(a, b).Z(this.ha)
    };
    h.C = function (a, b) {
        var c = H(a);
        if (null === c)return b;
        if (b.e() && ".priority" !== c)return this;
        w(".priority" !== c || 1 === Rc(a), ".priority must be the last token in a path");
        return this.P(c, L.C(S(a), b))
    };
    h.e = function () {
        return !1
    };
    h.ub = function () {
        return 0
    };
    h.I = function (a) {
        return a && !this.L().e() ? {".value": this.za(), ".priority": this.L().I()} : this.za()
    };
    h.hash = function () {
        if (null === this.sb) {
            var a = "";
            this.ha.e() || (a += "priority:" + qd(this.ha.I()) + ":");
            var b = typeof this.D, a = a + (b + ":"), a = "number" === b ? a + Bb(this.D) : a + this.D;
            this.sb = jb(a)
        }
        return this.sb
    };
    h.za = function () {
        return this.D
    };
    h.he = function (a) {
        if (a === L)return 1;
        if (a instanceof V)return -1;
        w(a.M(), "Unknown node type");
        var b = typeof a.D, c = typeof this.D, d = Ha(rd, b), e = Ha(rd, c);
        w(0 <= d, "Unknown leaf type: " + b);
        w(0 <= e, "Unknown leaf type: " + c);
        return d === e ? "object" === c ? 0 : this.D < a.D ? -1 : this.D === a.D ? 0 : 1 : e - d
    };
    var rd = ["object", "boolean", "number", "string"];
    od.prototype.Fb = function () {
        return this
    };
    od.prototype.Ac = function () {
        return !0
    };
    od.prototype.ea = function (a) {
        return a === this ? !0 : a.M() ? this.D === a.D && this.ha.ea(a.ha) : !1
    };
    od.prototype.toString = function () {
        return r(this.I(!0))
    };
    function sd(a, b) {
        this.pd = a;
        this.Vb = b
    }

    sd.prototype.get = function (a) {
        var b = t(this.pd, a);
        if (!b)throw Error("No index defined for " + a);
        return b === mc ? null : b
    };
    function td(a, b, c) {
        var d = ud(a.pd, function (d, f) {
            var g = t(a.Vb, f);
            w(g, "Missing index implementation for " + f);
            if (d === mc) {
                if (g.ue(b.Y)) {
                    for (var k = [], l = c.Ob(Ac), n = O(l); n;)n.name != b.name && k.push(n), n = O(l);
                    k.push(b);
                    return vd(k, nc(g))
                }
                return mc
            }
            g = c.get(b.name);
            k = d;
            g && (k = k.remove(new M(b.name, g)));
            return k.La(b, b.Y)
        });
        return new sd(d, a.Vb)
    }

    function wd(a, b, c) {
        var d = ud(a.pd, function (a) {
            if (a === mc)return a;
            var d = c.get(b.name);
            return d ? a.remove(new M(b.name, d)) : a
        });
        return new sd(d, a.Vb)
    }

    var xd = new sd({".priority": mc}, {".priority": K});

    function V(a, b, c) {
        this.m = a;
        (this.ha = b) && pd(this.ha);
        this.ob = c;
        this.sb = null
    }

    h = V.prototype;
    h.M = function () {
        return !1
    };
    h.L = function () {
        return this.ha || L
    };
    h.Z = function (a) {
        return new V(this.m, a, this.ob)
    };
    h.K = function (a) {
        if (".priority" === a)return this.L();
        a = this.m.get(a);
        return null === a ? L : a
    };
    h.ra = function (a) {
        var b = H(a);
        return null === b ? this : this.K(b).ra(S(a))
    };
    h.Da = function (a) {
        return null !== this.m.get(a)
    };
    h.P = function (a, b) {
        w(b, "We should always be passing snapshot nodes");
        if (".priority" === a)return this.Z(b);
        var c = new M(a, b), d;
        b.e() ? (d = this.m.remove(a), c = wd(this.ob, c, this.m)) : (d = this.m.La(a, b), c = td(this.ob, c, this.m));
        return new V(d, this.ha, c)
    };
    h.C = function (a, b) {
        var c = H(a);
        if (null === c)return b;
        w(".priority" !== H(a) || 1 === Rc(a), ".priority must be the last token in a path");
        var d = this.K(c).C(S(a), b);
        return this.P(c, d)
    };
    h.e = function () {
        return this.m.e()
    };
    h.ub = function () {
        return this.m.count()
    };
    var yd = /^(0|[1-9]\d*)$/;
    h = V.prototype;
    h.I = function (a) {
        if (this.e())return null;
        var b = {}, c = 0, d = 0, e = !0;
        this.U(K, function (f, g) {
            b[f] = g.I(a);
            c++;
            e && yd.test(f) ? d = Math.max(d, Number(f)) : e = !1
        });
        if (!a && e && d < 2 * c) {
            var f = [], g;
            for (g in b)f[g] = b[g];
            return f
        }
        a && !this.L().e() && (b[".priority"] = this.L().I());
        return b
    };
    h.hash = function () {
        if (null === this.sb) {
            var a = "";
            this.L().e() || (a += "priority:" + qd(this.L().I()) + ":");
            this.U(K, function (b, c) {
                var d = c.hash();
                "" !== d && (a += ":" + b + ":" + d)
            });
            this.sb = "" === a ? "" : jb(a)
        }
        return this.sb
    };
    h.ff = function (a, b, c) {
        return (c = zd(this, c)) ? (a = bd(c, new M(a, b))) ? a.name : null : bd(this.m, a)
    };
    function Dc(a, b) {
        var c;
        c = (c = zd(a, b)) ? (c = c.Hc()) && c.name : a.m.Hc();
        return c ? new M(c, a.m.get(c)) : null
    }

    function Ec(a, b) {
        var c;
        c = (c = zd(a, b)) ? (c = c.Xb()) && c.name : a.m.Xb();
        return c ? new M(c, a.m.get(c)) : null
    }

    h.U = function (a, b) {
        var c = zd(this, a);
        return c ? c.fa(function (a) {
            return b(a.name, a.Y)
        }) : this.m.fa(b)
    };
    h.Ob = function (a) {
        return this.Pb(a.Ce(), a)
    };
    h.Pb = function (a, b) {
        var c = zd(this, b);
        if (c)return c.Pb(a, function (a) {
            return a
        });
        for (var c = this.m.Pb(a.name, Ac), d = dd(c); null != d && 0 > b.compare(d, a);)O(c), d = dd(c);
        return c
    };
    h.gf = function (a) {
        return this.Rb(a.Be(), a)
    };
    h.Rb = function (a, b) {
        var c = zd(this, b);
        if (c)return c.Rb(a, function (a) {
            return a
        });
        for (var c = this.m.Rb(a.name, Ac), d = dd(c); null != d && 0 < b.compare(d, a);)O(c), d = dd(c);
        return c
    };
    h.he = function (a) {
        return this.e() ? a.e() ? 0 : -1 : a.M() || a.e() ? 1 : a === qc ? -1 : 0
    };
    h.Fb = function (a) {
        if (a === sc || Ad(this.ob.Vb, a.toString()))return this;
        var b = this.ob, c = this.m;
        w(a !== sc, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        for (var d = [], e = !1, c = c.Ob(Ac), f = O(c); f;)e = e || a.ue(f.Y), d.push(f), f = O(c);
        d = e ? vd(d, nc(a)) : mc;
        e = a.toString();
        c = Bd(b.Vb);
        c[e] = a;
        a = Bd(b.pd);
        a[e] = d;
        return new V(this.m, this.ha, new sd(a, c))
    };
    h.Ac = function (a) {
        return a === sc || Ad(this.ob.Vb, a.toString())
    };
    h.ea = function (a) {
        if (a === this)return !0;
        if (a.M())return !1;
        if (this.L().ea(a.L()) && this.m.count() === a.m.count()) {
            var b = this.Ob(K);
            a = a.Ob(K);
            for (var c = O(b), d = O(a); c && d;) {
                if (c.name !== d.name || !c.Y.ea(d.Y))return !1;
                c = O(b);
                d = O(a)
            }
            return null === c && null === d
        }
        return !1
    };
    function zd(a, b) {
        return b === sc ? null : a.ob.get(b.toString())
    }

    h.toString = function () {
        return r(this.I(!0))
    };
    function N(a, b) {
        if (null === a)return L;
        var c = null;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        w(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
        "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a)return new od(a, N(c));
        if (a instanceof Array) {
            var d = L, e = a;
            z(e, function (a, b) {
                if (s(e, b) && "." !== b.substring(0, 1)) {
                    var c = N(a);
                    if (c.M() || !c.e())d =
                        d.P(b, c)
                }
            });
            return d.Z(N(c))
        }
        var f = [], g = !1, k = a;
        ua(k, function (a) {
            if ("string" !== typeof a || "." !== a.substring(0, 1)) {
                var b = N(k[a]);
                b.e() || (g = g || !b.L().e(), f.push(new M(a, b)))
            }
        });
        var l = vd(f, jc, function (a) {
            return a.name
        }, kc);
        if (g) {
            var n = vd(f, nc(K));
            return new V(l, N(c), new sd({".priority": n}, {".priority": K}))
        }
        return new V(l, N(c), xd)
    }

    var Cd = Math.log(2);

    function Dd(a) {
        this.count = parseInt(Math.log(a + 1) / Cd, 10);
        this.$e = this.count - 1;
        this.Nf = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function Ed(a) {
        var b = !(a.Nf & 1 << a.$e);
        a.$e--;
        return b
    }

    function vd(a, b, c, d) {
        function e(b, d) {
            var f = d - b;
            if (0 == f)return null;
            if (1 == f) {
                var n = a[b], u = c ? c(n) : n;
                return new ed(u, n.Y, !1, null, null)
            }
            var n = parseInt(f / 2, 10) + b, f = e(b, n), x = e(n + 1, d), n = a[n], u = c ? c(n) : n;
            return new ed(u, n.Y, !1, f, x)
        }

        a.sort(b);
        var f = function (b) {
            function d(b, g) {
                var k = u - b, x = u;
                u -= b;
                var x = e(k + 1, x), k = a[k], E = c ? c(k) : k, x = new ed(E, k.Y, g, null, x);
                f ? f.left = x : n = x;
                f = x
            }

            for (var f = null, n = null, u = a.length, x = 0; x < b.count; ++x) {
                var E = Ed(b), fd = Math.pow(2, b.count - (x + 1));
                E ? d(fd, !1) : (d(fd, !1), d(fd, !0))
            }
            return n
        }(new Dd(a.length));
        return null !== f ? new $c(d || b, f) : new $c(d || b)
    }

    function qd(a) {
        return "number" === typeof a ? "number:" + Bb(a) : "string:" + a
    }

    function pd(a) {
        if (a.M()) {
            var b = a.I();
            w("string" === typeof b || "number" === typeof b || "object" === typeof b && s(b, ".sv"), "Priority must be a string or number.")
        } else w(a === qc || a.e(), "priority of unexpected type.");
        w(a === qc || a.L().e(), "Priority nodes can't have a priority of their own.")
    }

    var L = new V(new $c(kc), null, xd);

    function Fd() {
        V.call(this, new $c(kc), L, xd)
    }

    ma(Fd, V);
    h = Fd.prototype;
    h.he = function (a) {
        return a === this ? 0 : 1
    };
    h.ea = function (a) {
        return a === this
    };
    h.L = function () {
        throw gb("Why is this called?");
    };
    h.K = function () {
        return L
    };
    h.e = function () {
        return !1
    };
    var qc = new Fd, oc = new M("[MIN_NAME]", L);

    function C(a, b, c) {
        this.A = a;
        this.V = b;
        this.g = c
    }

    C.prototype.I = function () {
        D("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.A.I()
    };
    C.prototype.val = C.prototype.I;
    C.prototype.bf = function () {
        D("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.A.I(!0)
    };
    C.prototype.exportVal = C.prototype.bf;
    C.prototype.Wf = function () {
        D("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
        return !this.A.e()
    };
    C.prototype.exists = C.prototype.Wf;
    C.prototype.o = function (a) {
        D("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        ga(a) && (a = String(a));
        Zb("Firebase.DataSnapshot.child", a);
        var b = new R(a), c = this.V.o(b);
        return new C(this.A.ra(b), c, K)
    };
    C.prototype.child = C.prototype.o;
    C.prototype.Da = function (a) {
        D("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        Zb("Firebase.DataSnapshot.hasChild", a);
        var b = new R(a);
        return !this.A.ra(b).e()
    };
    C.prototype.hasChild = C.prototype.Da;
    C.prototype.L = function () {
        D("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.A.L().I()
    };
    C.prototype.getPriority = C.prototype.L;
    C.prototype.forEach = function (a) {
        D("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        G("Firebase.DataSnapshot.forEach", 1, a, !1);
        if (this.A.M())return !1;
        var b = this;
        return !!this.A.U(this.g, function (c, d) {
            return a(new C(d, b.V.o(c), K))
        })
    };
    C.prototype.forEach = C.prototype.forEach;
    C.prototype.ld = function () {
        D("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.A.M() ? !1 : !this.A.e()
    };
    C.prototype.hasChildren = C.prototype.ld;
    C.prototype.name = function () {
        y("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");
        D("Firebase.DataSnapshot.name", 0, 0, arguments.length);
        return this.key()
    };
    C.prototype.name = C.prototype.name;
    C.prototype.key = function () {
        D("Firebase.DataSnapshot.key", 0, 0, arguments.length);
        return this.V.key()
    };
    C.prototype.key = C.prototype.key;
    C.prototype.ub = function () {
        D("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.A.ub()
    };
    C.prototype.numChildren = C.prototype.ub;
    C.prototype.cc = function () {
        D("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.V
    };
    C.prototype.ref = C.prototype.cc;
    function Gd(a) {
        w(ea(a) && 0 < a.length, "Requires a non-empty array");
        this.Ff = a;
        this.Fc = {}
    }

    Gd.prototype.Vd = function (a, b) {
        for (var c = this.Fc[a] || [], d = 0; d < c.length; d++)c[d].pc.apply(c[d].Ka, Array.prototype.slice.call(arguments, 1))
    };
    Gd.prototype.vb = function (a, b, c) {
        Hd(this, a);
        this.Fc[a] = this.Fc[a] || [];
        this.Fc[a].push({pc: b, Ka: c});
        (a = this.qe(a)) && b.apply(c, a)
    };
    Gd.prototype.Zb = function (a, b, c) {
        Hd(this, a);
        a = this.Fc[a] || [];
        for (var d = 0; d < a.length; d++)if (a[d].pc === b && (!c || c === a[d].Ka)) {
            a.splice(d, 1);
            break
        }
    };
    function Hd(a, b) {
        w(Na(a.Ff, function (a) {
            return a === b
        }), "Unknown event: " + b)
    };
    function Id() {
        Gd.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.lc = !0;
        if (b) {
            var c = this;
            document.addEventListener(b,
                function () {
                    var b = !document[a];
                    b !== c.lc && (c.lc = b, c.Vd("visible", b))
                }, !1)
        }
    }

    ma(Id, Gd);
    ca(Id);
    Id.prototype.qe = function (a) {
        w("visible" === a, "Unknown event type: " + a);
        return [this.lc]
    };
    function Jd() {
        Gd.call(this, ["online"]);
        this.Kc = !0;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function () {
                a.Kc || a.Vd("online", !0);
                a.Kc = !0
            }, !1);
            window.addEventListener("offline", function () {
                a.Kc && a.Vd("online", !1);
                a.Kc = !1
            }, !1)
        }
    }

    ma(Jd, Gd);
    ca(Jd);
    Jd.prototype.qe = function (a) {
        w("online" === a, "Unknown event type: " + a);
        return [this.Kc]
    };
    function z(a, b) {
        for (var c in a)b.call(void 0, a[c], c, a)
    }

    function ud(a, b) {
        var c = {}, d;
        for (d in a)c[d] = b.call(void 0, a[d], d, a);
        return c
    }

    function Mb(a, b) {
        for (var c in a)if (!b.call(void 0, a[c], c, a))return !1;
        return !0
    }

    function Kb(a) {
        var b = 0, c;
        for (c in a)b++;
        return b
    }

    function Lb(a) {
        for (var b in a)return b
    }

    function Kd(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }

    function Ld(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }

    function Ad(a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }

    function Md(a, b, c) {
        for (var d in a)if (b.call(c, a[d], d, a))return d
    }

    function Nd(a, b) {
        var c = Md(a, b, void 0);
        return c && a[c]
    }

    function Od(a) {
        for (var b in a)return !1;
        return !0
    }

    function Pd(a, b) {
        return b in a ? a[b] : void 0
    }

    function Bd(a) {
        var b = {}, c;
        for (c in a)b[c] = a[c];
        return b
    }

    var Qd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Rd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < Qd.length; f++)c = Qd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    function Sd() {
        this.sc = {}
    }

    function Td(a, b, c) {
        m(c) || (c = 1);
        s(a.sc, b) || (a.sc[b] = 0);
        a.sc[b] += c
    }

    Sd.prototype.get = function () {
        return Bd(this.sc)
    };
    function Ud(a) {
        this.Pf = a;
        this.rd = null
    }

    Ud.prototype.get = function () {
        var a = this.Pf.get(), b = Bd(a);
        if (this.rd)for (var c in this.rd)b[c] -= this.rd[c];
        this.rd = a;
        return b
    };
    function Vd(a, b) {
        this.zf = {};
        this.Pd = new Ud(a);
        this.S = b;
        var c = 1E4 + 2E4 * Math.random();
        setTimeout(q(this.tf, this), Math.floor(c))
    }

    Vd.prototype.tf = function () {
        var a = this.Pd.get(), b = {}, c = !1, d;
        for (d in a)0 < a[d] && s(this.zf, d) && (b[d] = a[d], c = !0);
        c && (a = this.S, a.ja && (b = {c: b}, a.f("reportStats", b), a.Ca("s", b)));
        setTimeout(q(this.tf, this), Math.floor(6E5 * Math.random()))
    };
    var Wd = {}, Xd = {};

    function Yd(a) {
        a = a.toString();
        Wd[a] || (Wd[a] = new Sd);
        return Wd[a]
    }

    function Zd(a, b) {
        var c = a.toString();
        Xd[c] || (Xd[c] = b());
        return Xd[c]
    };
    var $d = null;
    "undefined" !== typeof MozWebSocket ? $d = MozWebSocket : "undefined" !== typeof WebSocket && ($d = WebSocket);
    function ae(a, b, c) {
        this.ie = a;
        this.f = pb(this.ie);
        this.frames = this.Bc = null;
        this.ib = this.jb = this.Te = 0;
        this.Ra = Yd(b);
        this.$a = (b.Ab ? "wss://" : "ws://") + b.Ma + "/.ws?v=5";
        "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (this.$a += "&r=f");
        b.host !== b.Ma && (this.$a = this.$a + "&ns=" + b.tb);
        c && (this.$a = this.$a + "&s=" + c)
    }

    var be;
    ae.prototype.open = function (a, b) {
        this.fb = b;
        this.hg = a;
        this.f("Websocket connecting to " + this.$a);
        this.wc = !1;
        za.set("previous_websocket_failure", !0);
        try {
            this.ta = new $d(this.$a)
        } catch (c) {
            this.f("Error instantiating WebSocket.");
            var d = c.message || c.data;
            d && this.f(d);
            this.eb();
            return
        }
        var e = this;
        this.ta.onopen = function () {
            e.f("Websocket connected.");
            e.wc = !0
        };
        this.ta.onclose = function () {
            e.f("Websocket connection was disconnected.");
            e.ta = null;
            e.eb()
        };
        this.ta.onmessage = function (a) {
            if (null !== e.ta)if (a = a.data, e.ib +=
                    a.length, Td(e.Ra, "bytes_received", a.length), ce(e), null !== e.frames)de(e, a); else {
                a:{
                    w(null === e.frames, "We already have a frame buffer");
                    if (6 >= a.length) {
                        var b = Number(a);
                        if (!isNaN(b)) {
                            e.Te = b;
                            e.frames = [];
                            a = null;
                            break a
                        }
                    }
                    e.Te = 1;
                    e.frames = []
                }
                null !== a && de(e, a)
            }
        };
        this.ta.onerror = function (a) {
            e.f("WebSocket error.  Closing connection.");
            (a = a.message || a.data) && e.f(a);
            e.eb()
        }
    };
    ae.prototype.start = function () {
    };
    ae.isAvailable = function () {
        var a = !1;
        if ("undefined" !== typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
        }
        return !a && null !== $d && !be
    };
    ae.responsesRequiredToBeHealthy = 2;
    ae.healthyTimeout = 3E4;
    h = ae.prototype;
    h.sd = function () {
        za.remove("previous_websocket_failure")
    };
    function de(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.Te) {
            var c = a.frames.join("");
            a.frames = null;
            c = ta(c);
            a.hg(c)
        }
    }

    h.send = function (a) {
        ce(this);
        a = r(a);
        this.jb += a.length;
        Td(this.Ra, "bytes_sent", a.length);
        a = zb(a, 16384);
        1 < a.length && this.ta.send(String(a.length));
        for (var b = 0; b < a.length; b++)this.ta.send(a[b])
    };
    h.Uc = function () {
        this.qb = !0;
        this.Bc && (clearInterval(this.Bc), this.Bc = null);
        this.ta && (this.ta.close(), this.ta = null)
    };
    h.eb = function () {
        this.qb || (this.f("WebSocket is closing itself"), this.Uc(), this.fb && (this.fb(this.wc), this.fb = null))
    };
    h.close = function () {
        this.qb || (this.f("WebSocket is being closed"), this.Uc())
    };
    function ce(a) {
        clearInterval(a.Bc);
        a.Bc = setInterval(function () {
            a.ta && a.ta.send("0");
            ce(a)
        }, Math.floor(45E3))
    };
    function ee(a) {
        this.$b = a;
        this.Cd = [];
        this.Jb = 0;
        this.ge = -1;
        this.wb = null
    }

    function fe(a, b, c) {
        a.ge = b;
        a.wb = c;
        a.ge < a.Jb && (a.wb(), a.wb = null)
    }

    function ge(a, b, c) {
        for (a.Cd[b] = c; a.Cd[a.Jb];) {
            var d = a.Cd[a.Jb];
            delete a.Cd[a.Jb];
            for (var e = 0; e < d.length; ++e)if (d[e]) {
                var f = a;
                Db(function () {
                    f.$b(d[e])
                })
            }
            if (a.Jb === a.ge) {
                a.wb && (clearTimeout(a.wb), a.wb(), a.wb = null);
                break
            }
            a.Jb++
        }
    };
    function he() {
        this.set = {}
    }

    h = he.prototype;
    h.add = function (a, b) {
        this.set[a] = null !== b ? b : !0
    };
    h.contains = function (a) {
        return s(this.set, a)
    };
    h.get = function (a) {
        return this.contains(a) ? this.set[a] : void 0
    };
    h.remove = function (a) {
        delete this.set[a]
    };
    h.clear = function () {
        this.set = {}
    };
    h.e = function () {
        return Od(this.set)
    };
    h.count = function () {
        return Kb(this.set)
    };
    function ie(a, b) {
        z(a.set, function (a, d) {
            b(d, a)
        })
    };
    function je(a, b, c) {
        this.ie = a;
        this.f = pb(a);
        this.ib = this.jb = 0;
        this.Ra = Yd(b);
        this.Md = c;
        this.wc = !1;
        this.Zc = function (a) {
            b.host !== b.Ma && (a.ns = b.tb);
            var c = [], f;
            for (f in a)a.hasOwnProperty(f) && c.push(f + "=" + a[f]);
            return (b.Ab ? "https://" : "http://") + b.Ma + "/.lp?" + c.join("&")
        }
    }

    var ke, le;
    je.prototype.open = function (a, b) {
        this.Ze = 0;
        this.ga = b;
        this.mf = new ee(a);
        this.qb = !1;
        var c = this;
        this.lb = setTimeout(function () {
            c.f("Timed out trying to connect.");
            c.eb();
            c.lb = null
        }, Math.floor(3E4));
        ub(function () {
            if (!c.qb) {
                c.Pa = new me(function (a, b, d, k, l) {
                    ne(c, arguments);
                    if (c.Pa)if (c.lb && (clearTimeout(c.lb), c.lb = null), c.wc = !0, "start" == a)c.id = b, c.rf = d; else if ("close" === a)b ? (c.Pa.Kd = !1, fe(c.mf, b, function () {
                        c.eb()
                    })) : c.eb(); else throw Error("Unrecognized command received: " + a);
                }, function (a, b) {
                    ne(c, arguments);
                    ge(c.mf, a, b)
                }, function () {
                    c.eb()
                }, c.Zc);
                var a = {start: "t"};
                a.ser = Math.floor(1E8 * Math.random());
                c.Pa.Wd && (a.cb = c.Pa.Wd);
                a.v = "5";
                c.Md && (a.s = c.Md);
                "undefined" !== typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (a.r = "f");
                a = c.Zc(a);
                c.f("Connecting via long-poll to " + a);
                oe(c.Pa, a, function () {
                })
            }
        })
    };
    je.prototype.start = function () {
        var a = this.Pa, b = this.rf;
        a.cg = this.id;
        a.dg = b;
        for (a.ae = !0; pe(a););
        a = this.id;
        b = this.rf;
        this.Yb = document.createElement("iframe");
        var c = {dframe: "t"};
        c.id = a;
        c.pw = b;
        this.Yb.src = this.Zc(c);
        this.Yb.style.display = "none";
        document.body.appendChild(this.Yb)
    };
    je.isAvailable = function () {
        return !le && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Eg) && (ke || !0)
    };
    h = je.prototype;
    h.sd = function () {
    };
    h.Uc = function () {
        this.qb = !0;
        this.Pa && (this.Pa.close(), this.Pa = null);
        this.Yb && (document.body.removeChild(this.Yb), this.Yb = null);
        this.lb && (clearTimeout(this.lb), this.lb = null)
    };
    h.eb = function () {
        this.qb || (this.f("Longpoll is closing itself"), this.Uc(), this.ga && (this.ga(this.wc), this.ga = null))
    };
    h.close = function () {
        this.qb || (this.f("Longpoll is being closed."), this.Uc())
    };
    h.send = function (a) {
        a = r(a);
        this.jb += a.length;
        Td(this.Ra, "bytes_sent", a.length);
        a = kb(a);
        a = db(a, !0);
        a = zb(a, 1840);
        for (var b = 0; b < a.length; b++) {
            var c = this.Pa;
            c.Pc.push({tg: this.Ze, Bg: a.length, af: a[b]});
            c.ae && pe(c);
            this.Ze++
        }
    };
    function ne(a, b) {
        var c = r(b).length;
        a.ib += c;
        Td(a.Ra, "bytes_received", c)
    }

    function me(a, b, c, d) {
        this.Zc = d;
        this.fb = c;
        this.Ie = new he;
        this.Pc = [];
        this.ke = Math.floor(1E8 * Math.random());
        this.Kd = !0;
        this.Wd = fb();
        window["pLPCommand" + this.Wd] = a;
        window["pRTLPCB" + this.Wd] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || ib("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        a.contentDocument ? a.ab = a.contentDocument : a.contentWindow ? a.ab = a.contentWindow.document : a.document && (a.ab = a.document);
        this.Ba = a;
        a = "";
        this.Ba.src && "javascript:" === this.Ba.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";\x3c/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.Ba.ab.open(), this.Ba.ab.write(a), this.Ba.ab.close()
        } catch (f) {
            ib("frame writing exception"), f.stack && ib(f.stack), ib(f)
        }
    }

    me.prototype.close = function () {
        this.ae = !1;
        if (this.Ba) {
            this.Ba.ab.body.innerHTML = "";
            var a = this;
            setTimeout(function () {
                null !== a.Ba && (document.body.removeChild(a.Ba), a.Ba = null)
            }, Math.floor(0))
        }
        var b = this.fb;
        b && (this.fb = null, b())
    };
    function pe(a) {
        if (a.ae && a.Kd && a.Ie.count() < (0 < a.Pc.length ? 2 : 1)) {
            a.ke++;
            var b = {};
            b.id = a.cg;
            b.pw = a.dg;
            b.ser = a.ke;
            for (var b = a.Zc(b), c = "", d = 0; 0 < a.Pc.length;)if (1870 >= a.Pc[0].af.length + 30 + c.length) {
                var e = a.Pc.shift(), c = c + "&seg" + d + "=" + e.tg + "&ts" + d + "=" + e.Bg + "&d" + d + "=" + e.af;
                d++
            } else break;
            qe(a, b + c, a.ke);
            return !0
        }
        return !1
    }

    function qe(a, b, c) {
        function d() {
            a.Ie.remove(c);
            pe(a)
        }

        a.Ie.add(c);
        var e = setTimeout(d, Math.floor(25E3));
        oe(a, b, function () {
            clearTimeout(e);
            d()
        })
    }

    function oe(a, b, c) {
        setTimeout(function () {
            try {
                if (a.Kd) {
                    var d = a.Ba.ab.createElement("script");
                    d.type = "text/javascript";
                    d.async = !0;
                    d.src = b;
                    d.onload = d.onreadystatechange = function () {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), c())
                    };
                    d.onerror = function () {
                        ib("Long-poll script failed to load: " + b);
                        a.Kd = !1;
                        a.close()
                    };
                    a.Ba.ab.body.appendChild(d)
                }
            } catch (e) {
            }
        }, Math.floor(1))
    };
    function re(a) {
        se(this, a)
    }

    var te = [je, ae];

    function se(a, b) {
        var c = ae && ae.isAvailable(), d = c && !(za.lf || !0 === za.get("previous_websocket_failure"));
        b.Dg && (c || y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
        if (d)a.Xc = [ae]; else {
            var e = a.Xc = [];
            Ab(te, function (a, b) {
                b && b.isAvailable() && e.push(b)
            })
        }
    }

    function ue(a) {
        if (0 < a.Xc.length)return a.Xc[0];
        throw Error("No transports available");
    };
    function ve(a, b, c, d, e, f) {
        this.id = a;
        this.f = pb("c:" + this.id + ":");
        this.$b = c;
        this.Jc = d;
        this.ga = e;
        this.Ge = f;
        this.O = b;
        this.Bd = [];
        this.Xe = 0;
        this.Af = new re(b);
        this.Qa = 0;
        this.f("Connection created");
        we(this)
    }

    function we(a) {
        var b = ue(a.Af);
        a.J = new b("c:" + a.id + ":" + a.Xe++, a.O);
        a.Ke = b.responsesRequiredToBeHealthy || 0;
        var c = xe(a, a.J), d = ye(a, a.J);
        a.Yc = a.J;
        a.Tc = a.J;
        a.B = null;
        a.rb = !1;
        setTimeout(function () {
            a.J && a.J.open(c, d)
        }, Math.floor(0));
        b = b.healthyTimeout || 0;
        0 < b && (a.nd = setTimeout(function () {
            a.nd = null;
            a.rb || (a.J && 102400 < a.J.ib ? (a.f("Connection exceeded healthy timeout but has received " + a.J.ib + " bytes.  Marking connection healthy."), a.rb = !0, a.J.sd()) : a.J && 10240 < a.J.jb ? a.f("Connection exceeded healthy timeout but has sent " +
                a.J.jb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()))
        }, Math.floor(b)))
    }

    function ye(a, b) {
        return function (c) {
            b === a.J ? (a.J = null, c || 0 !== a.Qa ? 1 === a.Qa && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.O.Ma.substr(0, 2) && (za.remove("host:" + a.O.host), a.O.Ma = a.O.host)), a.close()) : b === a.B ? (a.f("Secondary connection lost."), c = a.B, a.B = null, a.Yc !== c && a.Tc !== c || a.close()) : a.f("closing an old connection")
        }
    }

    function xe(a, b) {
        return function (c) {
            if (2 != a.Qa)if (b === a.Tc) {
                var d = xb("t", c);
                c = xb("d", c);
                if ("c" == d) {
                    if (d = xb("t", c), "d" in c)if (c = c.d, "h" === d) {
                        var d = c.ts, e = c.v, f = c.h;
                        a.Md = c.s;
                        Ca(a.O, f);
                        0 == a.Qa && (a.J.start(), ze(a, a.J, d), "5" !== e && y("Protocol version mismatch detected"), c = a.Af, (c = 1 < c.Xc.length ? c.Xc[1] : null) && Ae(a, c))
                    } else if ("n" === d) {
                        a.f("recvd end transmission on primary");
                        a.Tc = a.B;
                        for (c = 0; c < a.Bd.length; ++c)a.xd(a.Bd[c]);
                        a.Bd = [];
                        Be(a)
                    } else"s" === d ? (a.f("Connection shutdown command received. Shutting down..."),
                    a.Ge && (a.Ge(c), a.Ge = null), a.ga = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), Ca(a.O, c), 1 === a.Qa ? a.close() : (Ce(a), we(a))) : "e" === d ? qb("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), De(a), Ee(a)) : qb("Unknown control packet command: " + d)
                } else"d" == d && a.xd(c)
            } else if (b === a.B)if (d = xb("t", c), c = xb("d", c), "c" == d)"t" in c && (c = c.t, "a" === c ? Fe(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.B.close(), a.Yc !== a.B && a.Tc !== a.B || a.close()) : "o" === c && (a.f("got pong on secondary."),
                a.yf--, Fe(a))); else if ("d" == d)a.Bd.push(c); else throw Error("Unknown protocol layer: " + d); else a.f("message on old connection")
        }
    }

    ve.prototype.Ca = function (a) {
        Ge(this, {t: "d", d: a})
    };
    function Be(a) {
        a.Yc === a.B && a.Tc === a.B && (a.f("cleaning up and promoting a connection: " + a.B.ie), a.J = a.B, a.B = null)
    }

    function Fe(a) {
        0 >= a.yf ? (a.f("Secondary connection is healthy."), a.rb = !0, a.B.sd(), a.B.start(), a.f("sending client ack on secondary"), a.B.send({
            t: "c",
            d: {t: "a", d: {}}
        }), a.f("Ending transmission on primary"), a.J.send({
            t: "c",
            d: {t: "n", d: {}}
        }), a.Yc = a.B, Be(a)) : (a.f("sending ping on secondary."), a.B.send({t: "c", d: {t: "p", d: {}}}))
    }

    ve.prototype.xd = function (a) {
        De(this);
        this.$b(a)
    };
    function De(a) {
        a.rb || (a.Ke--, 0 >= a.Ke && (a.f("Primary connection is healthy."), a.rb = !0, a.J.sd()))
    }

    function Ae(a, b) {
        a.B = new b("c:" + a.id + ":" + a.Xe++, a.O, a.Md);
        a.yf = b.responsesRequiredToBeHealthy || 0;
        a.B.open(xe(a, a.B), ye(a, a.B));
        setTimeout(function () {
            a.B && (a.f("Timed out trying to upgrade."), a.B.close())
        }, Math.floor(6E4))
    }

    function ze(a, b, c) {
        a.f("Realtime connection established.");
        a.J = b;
        a.Qa = 1;
        a.Jc && (a.Jc(c), a.Jc = null);
        0 === a.Ke ? (a.f("Primary connection is healthy."), a.rb = !0) : setTimeout(function () {
            Ee(a)
        }, Math.floor(5E3))
    }

    function Ee(a) {
        a.rb || 1 !== a.Qa || (a.f("sending ping on primary."), Ge(a, {t: "c", d: {t: "p", d: {}}}))
    }

    function Ge(a, b) {
        if (1 !== a.Qa)throw"Connection is not connected";
        a.Yc.send(b)
    }

    ve.prototype.close = function () {
        2 !== this.Qa && (this.f("Closing realtime connection."), this.Qa = 2, Ce(this), this.ga && (this.ga(), this.ga = null))
    };
    function Ce(a) {
        a.f("Shutting down all connections");
        a.J && (a.J.close(), a.J = null);
        a.B && (a.B.close(), a.B = null);
        a.nd && (clearTimeout(a.nd), a.nd = null)
    };
    function He(a) {
        var b = {}, c = {}, d = {}, e = "";
        try {
            var f = a.split("."), b = ta(hb(f[0]) || ""), c = ta(hb(f[1]) || ""), e = f[2], d = c.d || {};
            delete c.d
        } catch (g) {
        }
        return {Gg: b, fe: c, data: d, xg: e}
    }

    function Ie(a) {
        a = He(a).fe;
        return "object" === typeof a && a.hasOwnProperty("iat") ? t(a, "iat") : null
    }

    function Je(a) {
        a = He(a);
        var b = a.fe;
        return !!a.xg && !!b && "object" === typeof b && b.hasOwnProperty("iat")
    };
    function Ke(a, b, c, d) {
        this.id = Le++;
        this.f = pb("p:" + this.id + ":");
        this.Cb = !0;
        this.Aa = {};
        this.la = [];
        this.Mc = 0;
        this.Ic = [];
        this.ja = !1;
        this.Wa = 1E3;
        this.td = 3E5;
        this.yd = b;
        this.wd = c;
        this.He = d;
        this.O = a;
        this.Oe = null;
        this.Rc = {};
        this.sg = 0;
        this.Cc = this.we = null;
        Me(this, 0);
        Id.Nb().vb("visible", this.kg, this);
        -1 === a.host.indexOf("fblocal") && Jd.Nb().vb("online", this.ig, this)
    }

    var Le = 0, Ne = 0;
    h = Ke.prototype;
    h.Ca = function (a, b, c) {
        var d = ++this.sg;
        a = {r: d, a: a, b: b};
        this.f(r(a));
        w(this.ja, "sendRequest call when we're not connected not allowed.");
        this.Oa.Ca(a);
        c && (this.Rc[d] = c)
    };
    function Oe(a, b, c, d, e) {
        var f = b.Fa(), g = b.path.toString();
        a.f("Listen called for " + g + " " + f);
        a.Aa[g] = a.Aa[g] || {};
        w(!a.Aa[g][f], "listen() called twice for same path/queryId.");
        b = {H: e, md: c, pg: Jc(b.n), tag: d};
        a.Aa[g][f] = b;
        a.ja && Pe(a, g, f, b)
    }

    function Pe(a, b, c, d) {
        a.f("Listen on " + b + " for " + c);
        var e = {p: b};
        d.tag && (e.q = d.pg, e.t = d.tag);
        e.h = d.md();
        a.Ca("q", e, function (e) {
            if ((a.Aa[b] && a.Aa[b][c]) === d) {
                a.f("listen response", e);
                var g = e.s;
                "ok" !== g && Qe(a, b, c);
                e = e.d;
                d.H && d.H(g, e)
            }
        })
    }

    h.Q = function (a, b, c) {
        this.Ib = {Rf: a, cf: !1, pc: b, ad: c};
        this.f("Authenticating using credential: " + a);
        Re(this);
        (b = 40 == a.length) || (a = He(a).fe, b = "object" === typeof a && !0 === t(a, "admin"));
        b && (this.f("Admin auth credential detected.  Reducing max reconnect time."), this.td = 3E4)
    };
    h.Ue = function (a) {
        delete this.Ib;
        this.ja && this.Ca("unauth", {}, function (b) {
            a(b.s, b.d)
        })
    };
    function Re(a) {
        var b = a.Ib;
        a.ja && b && a.Ca("auth", {cred: b.Rf}, function (c) {
            var d = c.s;
            c = c.d || "error";
            "ok" !== d && a.Ib === b && delete a.Ib;
            b.cf ? "ok" !== d && b.ad && b.ad(d, c) : (b.cf = !0, b.pc && b.pc(d, c))
        })
    }

    function Se(a, b, c, d) {
        a.ja ? Te(a, "o", b, c, d) : a.Ic.push({Oc: b, action: "o", data: c, H: d})
    }

    function Ue(a, b, c, d) {
        a.ja ? Te(a, "om", b, c, d) : a.Ic.push({Oc: b, action: "om", data: c, H: d})
    }

    h.Fe = function (a, b) {
        this.ja ? Te(this, "oc", a, null, b) : this.Ic.push({Oc: a, action: "oc", data: null, H: b})
    };
    function Te(a, b, c, d, e) {
        c = {p: c, d: d};
        a.f("onDisconnect " + b, c);
        a.Ca(b, c, function (a) {
            e && setTimeout(function () {
                e(a.s, a.d)
            }, Math.floor(0))
        })
    }

    h.put = function (a, b, c, d) {
        Ve(this, "p", a, b, c, d)
    };
    function We(a, b, c, d) {
        Ve(a, "m", b, c, d, void 0)
    }

    function Ve(a, b, c, d, e, f) {
        d = {p: c, d: d};
        m(f) && (d.h = f);
        a.la.push({action: b, uf: d, H: e});
        a.Mc++;
        b = a.la.length - 1;
        a.ja ? Xe(a, b) : a.f("Buffering put: " + c)
    }

    function Xe(a, b) {
        var c = a.la[b].action, d = a.la[b].uf, e = a.la[b].H;
        a.la[b].qg = a.ja;
        a.Ca(c, d, function (d) {
            a.f(c + " response", d);
            delete a.la[b];
            a.Mc--;
            0 === a.Mc && (a.la = []);
            e && e(d.s, d.d)
        })
    }

    h.xd = function (a) {
        if ("r" in a) {
            this.f("from server: " + r(a));
            var b = a.r, c = this.Rc[b];
            c && (delete this.Rc[b], c(a.b))
        } else {
            if ("error" in a)throw"A server-side error has occurred: " + a.error;
            "a" in a && (b = a.a, c = a.b, this.f("handleServerMessage", b, c), "d" === b ? this.yd(c.p, c.d, !1, c.t) : "m" === b ? this.yd(c.p, c.d, !0, c.t) : "c" === b ? Ye(this, c.p, c.q) : "ac" === b ? (a = c.s, b = c.d, c = this.Ib, delete this.Ib, c && c.ad && c.ad(a, b)) : "sd" === b ? this.Oe ? this.Oe(c) : "msg" in c && "undefined" !== typeof console && console.log("FIREBASE: " + c.msg.replace("\n",
                    "\nFIREBASE: ")) : qb("Unrecognized action received from server: " + r(b) + "\nAre you using the latest client?"))
        }
    };
    h.Jc = function (a) {
        this.f("connection ready");
        this.ja = !0;
        this.Cc = (new Date).getTime();
        this.He({serverTimeOffset: a - (new Date).getTime()});
        Ze(this);
        this.wd(!0)
    };
    function Me(a, b) {
        w(!a.Oa, "Scheduling a connect when we're already connected/ing?");
        a.Kb && clearTimeout(a.Kb);
        a.Kb = setTimeout(function () {
            a.Kb = null;
            $e(a)
        }, Math.floor(b))
    }

    h.kg = function (a) {
        a && !this.lc && this.Wa === this.td && (this.f("Window became visible.  Reducing delay."), this.Wa = 1E3, this.Oa || Me(this, 0));
        this.lc = a
    };
    h.ig = function (a) {
        a ? (this.f("Browser went online.  Reconnecting."), this.Wa = 1E3, this.Cb = !0, this.Oa || Me(this, 0)) : (this.f("Browser went offline.  Killing connection; don't reconnect."), this.Cb = !1, this.Oa && this.Oa.close())
    };
    h.of = function () {
        this.f("data client disconnected");
        this.ja = !1;
        this.Oa = null;
        for (var a = 0; a < this.la.length; a++) {
            var b = this.la[a];
            b && "h" in b.uf && b.qg && (b.H && b.H("disconnect"), delete this.la[a], this.Mc--)
        }
        0 === this.Mc && (this.la = []);
        if (this.Cb)this.lc ? this.Cc && (3E4 < (new Date).getTime() - this.Cc && (this.Wa = 1E3), this.Cc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Wa = this.td, this.we = (new Date).getTime()), a = Math.max(0, this.Wa - ((new Date).getTime() - this.we)), a *= Math.random(), this.f("Trying to reconnect in " +
            a + "ms"), Me(this, a), this.Wa = Math.min(this.td, 1.3 * this.Wa); else for (var c in this.Rc)delete this.Rc[c];
        this.wd(!1)
    };
    function $e(a) {
        if (a.Cb) {
            a.f("Making a connection attempt");
            a.we = (new Date).getTime();
            a.Cc = null;
            var b = q(a.xd, a), c = q(a.Jc, a), d = q(a.of, a), e = a.id + ":" + Ne++;
            a.Oa = new ve(e, a.O, b, c, d, function (b) {
                y(b + " (" + a.O.toString() + ")");
                a.Cb = !1
            })
        }
    }

    h.pb = function () {
        this.Cb = !1;
        this.Oa ? this.Oa.close() : (this.Kb && (clearTimeout(this.Kb), this.Kb = null), this.ja && this.of())
    };
    h.gc = function () {
        this.Cb = !0;
        this.Wa = 1E3;
        this.Oa || Me(this, 0)
    };
    function Ye(a, b, c) {
        c = c ? Ka(c, function (a) {
            return yb(a)
        }).join("$") : "default";
        (a = Qe(a, b, c)) && a.H && a.H("permission_denied")
    }

    function Qe(a, b, c) {
        b = (new R(b)).toString();
        var d = a.Aa[b][c];
        delete a.Aa[b][c];
        0 === Kb(a.Aa[b]) && delete a.Aa[b];
        return d
    }

    function Ze(a) {
        Re(a);
        z(a.Aa, function (b, d) {
            z(b, function (b, c) {
                Pe(a, d, c, b)
            })
        });
        for (var b = 0; b < a.la.length; b++)a.la[b] && Xe(a, b);
        for (; a.Ic.length;)b = a.Ic.shift(), Te(a, b.action, b.Oc, b.data, b.H)
    };
    function af() {
        this.m = this.D = null
    }

    af.prototype.dc = function (a, b) {
        if (a.e())this.D = b, this.m = null; else if (null !== this.D)this.D = this.D.C(a, b); else {
            null == this.m && (this.m = new he);
            var c = H(a);
            this.m.contains(c) || this.m.add(c, new af);
            c = this.m.get(c);
            a = S(a);
            c.dc(a, b)
        }
    };
    function bf(a, b) {
        if (b.e())return a.D = null, a.m = null, !0;
        if (null !== a.D) {
            if (a.D.M())return !1;
            var c = a.D;
            a.D = null;
            c.U(K, function (b, c) {
                a.dc(new R(b), c)
            });
            return bf(a, b)
        }
        return null !== a.m ? (c = H(b), b = S(b), a.m.contains(c) && bf(a.m.get(c), b) && a.m.remove(c), a.m.e() ? (a.m = null, !0) : !1) : !0
    }

    function cf(a, b, c) {
        null !== a.D ? c(b, a.D) : a.U(function (a, e) {
            var f = new R(b.toString() + "/" + a);
            cf(e, f, c)
        })
    }

    af.prototype.U = function (a) {
        null !== this.m && ie(this.m, function (b, c) {
            a(b, c)
        })
    };
    function df() {
        this.Jd = L
    }

    df.prototype.j = function (a) {
        return this.Jd.ra(a)
    };
    df.prototype.toString = function () {
        return this.Jd.toString()
    };
    function ef() {
        this.nb = []
    }

    function ff(a, b) {
        for (var c = null, d = 0; d < b.length; d++) {
            var e = b[d], f = e.Qb();
            null === c || f.ea(c.Qb()) || (a.nb.push(c), c = null);
            null === c && (c = new gf(f));
            c.add(e)
        }
        c && a.nb.push(c)
    }

    function Qc(a, b, c) {
        ff(a, c);
        hf(a, function (a) {
            return a.ea(b)
        })
    }

    function jf(a, b, c) {
        ff(a, c);
        hf(a, function (a) {
            return a.contains(b) || b.contains(a)
        })
    }

    function hf(a, b) {
        for (var c = !0, d = 0; d < a.nb.length; d++) {
            var e = a.nb[d];
            if (e)if (e = e.Qb(), b(e)) {
                for (var e = a.nb[d], f = 0; f < e.kd.length; f++) {
                    var g = e.kd[f];
                    if (null !== g) {
                        e.kd[f] = null;
                        var k = g.Lb();
                        mb && ib("event: " + g.toString());
                        Db(k)
                    }
                }
                a.nb[d] = null
            } else c = !1
        }
        c && (a.nb = [])
    }

    function gf(a) {
        this.Ea = a;
        this.kd = []
    }

    gf.prototype.add = function (a) {
        this.kd.push(a)
    };
    gf.prototype.Qb = function () {
        return this.Ea
    };
    var kf = "auth.firebase.com";

    function lf(a, b, c) {
        this.cd = a || {};
        this.Ud = b || {};
        this.Xa = c || {};
        this.cd.remember || (this.cd.remember = "default")
    }

    var mf = ["remember", "redirectTo"];

    function nf(a) {
        var b = {}, c = {};
        ua(a || {}, function (a, e) {
            0 <= Ha(mf, a) ? b[a] = e : c[a] = e
        });
        return new lf(b, {}, c)
    };
    var of = {
        NETWORK_ERROR: "Unable to contact the Firebase server.",
        SERVER_ERROR: "An unknown server error occurred.",
        TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.",
        REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.",
        USER_CANCELLED: "The user cancelled authentication."
    };

    function W(a) {
        var b = Error(t(of, a), a);
        b.code = a;
        return b
    };
    function pf() {
        var a = window.opener.frames, b;
        for (b = a.length - 1; 0 <= b; b--)try {
            if (a[b].location.protocol === window.location.protocol && a[b].location.host === window.location.host && "__winchan_relay_frame" === a[b].name)return a[b]
        } catch (c) {
        }
        return null
    }

    function qf(a, b, c) {
        a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1)
    }

    function rf(a, b, c) {
        a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function sf(a) {
        /^https?:\/\//.test(a) || (a = window.location.href);
        var b = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);
        return b ? b[1] : a
    }

    function tf(a) {
        var b = "";
        try {
            a = a.replace("#", "");
            var c = {}, d = a.replace(/^\?/, "").split("&");
            for (a = 0; a < d.length; a++)if (d[a]) {
                var e = d[a].split("=");
                c[e[0]] = e[1]
            }
            c && s(c, "__firebase_request_key") && (b = t(c, "__firebase_request_key"))
        } catch (f) {
        }
        return b
    }

    function uf(a) {
        var b = [], c;
        for (c in a)if (s(a, c)) {
            var d = t(a, c);
            if (ea(d))for (var e = 0; e < d.length; e++)b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[e])); else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(t(a, c)))
        }
        return b ? "&" + b.join("&") : ""
    }

    function vf() {
        var a = sb(kf);
        return a.scheme + "://" + a.host + "/v2"
    };
    function wf() {
        return !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)
    }

    function xf() {
        var a = navigator.userAgent;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            if ((a = a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < a.length)return 8 <= parseFloat(a[1])
        } else if (-1 < a.indexOf("Trident") && (a = a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < a.length)return 8 <= parseFloat(a[1]);
        return !1
    };
    function yf(a) {
        a = a || {};
        a.method || (a.method = "GET");
        a.headers || (a.headers = {});
        a.headers.content_type || (a.headers.content_type = "application/json");
        a.headers.content_type = a.headers.content_type.toLowerCase();
        this.options = a
    }

    yf.prototype.open = function (a, b, c) {
        function d() {
            c && (c(W("REQUEST_INTERRUPTED")), c = null)
        }

        var e = new XMLHttpRequest, f = this.options.method.toUpperCase(), g;
        qf(window, "beforeunload", d);
        e.onreadystatechange = function () {
            if (c && 4 === e.readyState) {
                var a;
                if (200 <= e.status && 300 > e.status) {
                    try {
                        a = ta(e.responseText)
                    } catch (b) {
                    }
                    c(null, a)
                } else 500 <= e.status && 600 > e.status ? c(W("SERVER_ERROR")) : c(W("NETWORK_ERROR"));
                c = null;
                rf(window, "beforeunload", d)
            }
        };
        if ("GET" === f)a += (/\?/.test(a) ? "" : "?") + uf(b), g = null; else {
            var k = this.options.headers.content_type;
            "application/json" === k && (g = r(b));
            "application/x-www-form-urlencoded" === k && (g = uf(b))
        }
        e.open(f, a, !0);
        a = {"X-Requested-With": "XMLHttpRequest", Accept: "application/json;text/plain"};
        Rd(a, this.options.headers);
        for (var l in a)e.setRequestHeader(l, a[l]);
        e.send(g)
    };
    yf.isAvailable = function () {
        return !!window.XMLHttpRequest && "string" === typeof(new XMLHttpRequest).responseType && (!(navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/)) || xf())
    };
    yf.prototype.rc = function () {
        return "json"
    };
    function zf(a) {
        a = a || {};
        this.Sc = Ga() + Ga() + Ga();
        this.pf = a || {}
    }

    zf.prototype.open = function (a, b, c) {
        function d() {
            c && (c(W("USER_CANCELLED")), c = null)
        }

        var e = this, f = sb(kf), g;
        b.requestId = this.Sc;
        b.redirectTo = f.scheme + "://" + f.host + "/blank/page.html";
        a += /\?/.test(a) ? "" : "?";
        a += uf(b);
        (g = window.open(a, "_blank", "location=no")) && ha(g.addEventListener) ? (g.addEventListener("loadstart", function (a) {
            var b;
            if (b = a && a.url)a:{
                var n = a.url;
                try {
                    var u = document.createElement("a");
                    u.href = n;
                    b = u.host === f.host && "/blank/page.html" === u.pathname;
                    break a
                } catch (x) {
                }
                b = !1
            }
            b && (a = tf(a.url), g.removeEventListener("exit",
                d), g.close(), a = new lf(null, null, {
                requestId: e.Sc,
                requestKey: a
            }), e.pf.requestWithCredential("/auth/session", a, c), c = null)
        }), g.addEventListener("exit", d)) : c(W("TRANSPORT_UNAVAILABLE"))
    };
    zf.isAvailable = function () {
        return wf()
    };
    zf.prototype.rc = function () {
        return "redirect"
    };
    function Af(a) {
        a = a || {};
        if (!a.window_features || -1 !== navigator.userAgent.indexOf("Fennec/") || -1 !== navigator.userAgent.indexOf("Firefox/") && -1 !== navigator.userAgent.indexOf("Android"))a.window_features = void 0;
        a.window_name || (a.window_name = "_blank");
        a.relay_url || (a.relay_url = vf() + "/auth/channel");
        this.options = a
    }

    Af.prototype.open = function (a, b, c) {
        function d(a) {
            g && (document.body.removeChild(g), g = void 0);
            u && (u = clearInterval(u));
            rf(window, "message", e);
            rf(window, "unload", d);
            if (n && !a)try {
                n.close()
            } catch (b) {
                k.postMessage("die", l)
            }
            n = k = void 0
        }

        function e(a) {
            if (a.origin === l)try {
                var b = ta(a.data);
                "ready" === b.a ? k.postMessage(x, l) : "error" === b.a ? (d(!1), c && (c(b.d), c = null)) : "response" === b.a && (d(b.forceKeepWindowOpen), c && (c(null, b.d), c = null))
            } catch (e) {
            }
        }

        var f = xf(), g, k, l = sf(a);
        if (l !== sf(this.options.relay_url))c && setTimeout(function () {
                c(Error("invalid arguments: origin of url and relay_url must match"))
            },
            0); else {
            f && (g = document.createElement("iframe"), g.setAttribute("src", this.options.relay_url), g.style.display = "none", g.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(g), k = g.contentWindow);
            a += (/\?/.test(a) ? "" : "?") + uf(b);
            var n = window.open(a, this.options.window_name, this.options.window_features);
            k || (k = n);
            var u = setInterval(function () {
                n && n.closed && (d(!1), c && (c(W("USER_CANCELLED")), c = null))
            }, 500), x = r({a: "request", d: b});
            qf(window, "unload", d);
            qf(window, "message", e)
        }
    };
    Af.isAvailable = function () {
        return "postMessage" in window && !/^file:\//.test(location.href) && !(wf() || navigator.userAgent.match(/Windows Phone/) || window.Windows && /^ms-appx:/.test(location.href) || navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i) || navigator.userAgent.match(/CriOS/) || navigator.userAgent.match(/Twitter for iPhone/) || navigator.userAgent.match(/FBAN\/FBIOS/) || window.navigator.standalone) && !navigator.userAgent.match(/PhantomJS/)
    };
    Af.prototype.rc = function () {
        return "popup"
    };
    function Bf(a) {
        a = a || {};
        a.callback_parameter || (a.callback_parameter = "callback");
        this.options = a;
        window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {}
    }

    Bf.prototype.open = function (a, b, c) {
        function d() {
            c && (c(W("REQUEST_INTERRUPTED")), c = null)
        }

        function e() {
            setTimeout(function () {
                window.__firebase_auth_jsonp[f] = void 0;
                Od(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
                try {
                    var a = document.getElementById(f);
                    a && a.parentNode.removeChild(a)
                } catch (b) {
                }
            }, 1);
            rf(window, "beforeunload", d)
        }

        var f = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
        b[this.options.callback_parameter] = "__firebase_auth_jsonp." + f;
        a += (/\?/.test(a) ? "" : "?") + uf(b);
        qf(window, "beforeunload", d);
        window.__firebase_auth_jsonp[f] = function (a) {
            c && (c(null, a), c = null);
            e()
        };
        Cf(f, a, c)
    };
    function Cf(a, b, c) {
        setTimeout(function () {
            try {
                var d = document.createElement("script");
                d.type = "text/javascript";
                d.id = a;
                d.async = !0;
                d.src = b;
                d.onerror = function () {
                    var b = document.getElementById(a);
                    null !== b && b.parentNode.removeChild(b);
                    c && c(W("NETWORK_ERROR"))
                };
                var e = document.getElementsByTagName("head");
                (e && 0 != e.length ? e[0] : document.documentElement).appendChild(d)
            } catch (f) {
                c && c(W("NETWORK_ERROR"))
            }
        }, 0)
    }

    Bf.isAvailable = function () {
        return !wf()
    };
    Bf.prototype.rc = function () {
        return "json"
    };
    function Df(a, b) {
        this.Je = ["session", a.Dd, a.tb].join(":");
        this.Rd = b
    }

    Df.prototype.set = function (a, b) {
        if (!b)if (this.Rd.length)b = this.Rd[0]; else throw Error("fb.login.SessionManager : No storage options available!");
        b.set(this.Je, a)
    };
    Df.prototype.get = function () {
        var a = Ka(this.Rd, q(this.Zf, this)), a = Ja(a, function (a) {
            return null !== a
        });
        Ra(a, function (a, c) {
            return Ie(c.token) - Ie(a.token)
        });
        return 0 < a.length ? a.shift() : null
    };
    Df.prototype.Zf = function (a) {
        try {
            var b = a.get(this.Je);
            if (b && b.token)return b
        } catch (c) {
        }
        return null
    };
    Df.prototype.clear = function () {
        var a = this;
        Ia(this.Rd, function (b) {
            b.remove(a.Je)
        })
    };
    function Ef(a) {
        a = a || {};
        this.Sc = Ga() + Ga() + Ga();
        this.pf = a || {}
    }

    Ef.prototype.open = function (a, b) {
        Aa.set("redirect_request_id", this.Sc);
        b.requestId = this.Sc;
        b.redirectTo = b.redirectTo || window.location.href;
        a += (/\?/.test(a) ? "" : "?") + uf(b);
        window.location = a
    };
    Ef.isAvailable = function () {
        return !/^file:\//.test(location.href) && !wf()
    };
    Ef.prototype.rc = function () {
        return "redirect"
    };
    function Ff(a, b, c, d) {
        Gd.call(this, ["auth_status"]);
        this.O = a;
        this.We = b;
        this.Cg = c;
        this.Ee = d;
        this.hc = new Df(a, [za, Aa]);
        this.hb = null;
        Gf(this)
    }

    ma(Ff, Gd);
    h = Ff.prototype;
    h.ne = function () {
        return this.hb || null
    };
    function Gf(a) {
        Aa.get("redirect_request_id") && Hf(a);
        var b = a.hc.get();
        b && b.token ? (If(a, b), a.We(b.token, function (c, d) {
            Jf(a, c, d, !1, b.token, b)
        }, function (b, d) {
            Kf(a, "resumeSession()", b, d)
        })) : If(a, null)
    }

    function Lf(a, b, c, d, e, f) {
        "firebaseio-demo.com" === a.O.domain && y("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");
        a.We(b, function (f, k) {
            Jf(a, f, k, !0, b, c, d || {}, e)
        }, function (b, c) {
            Kf(a, "auth()", b, c, f)
        })
    }

    function Mf(a, b) {
        a.hc.clear();
        If(a, null);
        a.Cg(function (a, d) {
            if ("ok" === a)A(b, null); else {
                var e = (a || "error").toUpperCase(), f = e;
                d && (f += ": " + d);
                f = Error(f);
                f.code = e;
                A(b, f)
            }
        })
    }

    function Jf(a, b, c, d, e, f, g, k) {
        "ok" === b ? (d && (b = c.auth, f.auth = b, f.expires = c.expires, f.token = Je(e) ? e : "", c = null, b && s(b, "uid") ? c = t(b, "uid") : s(f, "uid") && (c = t(f, "uid")), f.uid = c, c = "custom", b && s(b, "provider") ? c = t(b, "provider") : s(f, "provider") && (c = t(f, "provider")), f.provider = c, a.hc.clear(), Je(e) && (g = g || {}, c = za, "sessionOnly" === g.remember && (c = Aa), "none" !== g.remember && a.hc.set(f, c)), If(a, f)), A(k, null, f)) : (a.hc.clear(), If(a, null), f = a = (b || "error").toUpperCase(), c && (f += ": " + c), f = Error(f), f.code = a, A(k, f))
    }

    function Kf(a, b, c, d, e) {
        y(b + " was canceled: " + d);
        a.hc.clear();
        If(a, null);
        a = Error(d);
        a.code = c.toUpperCase();
        A(e, a)
    }

    function Nf(a, b, c, d, e) {
        Of(a);
        c = new lf(d || {}, {}, c || {});
        Pf(a, [yf, Bf], "/auth/" + b, c, e)
    }

    function Qf(a, b, c, d) {
        Of(a);
        var e = [Af, zf];
        c = nf(c);
        "anonymous" === b || "password" === b ? setTimeout(function () {
            A(d, W("TRANSPORT_UNAVAILABLE"))
        }, 0) : (c.Ud.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top=" + ("object" === typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" === typeof screen ? .5 * (screen.width - 625) : 0), c.Ud.relay_url = vf() + "/" + a.O.tb + "/auth/channel", c.Ud.requestWithCredential = q(a.fc, a), Pf(a, e, "/auth/" + b, c, d))
    }

    function Hf(a) {
        var b = Aa.get("redirect_request_id");
        if (b) {
            var c = Aa.get("redirect_client_options");
            Aa.remove("redirect_request_id");
            Aa.remove("redirect_client_options");
            var d = [yf, Bf], b = {requestId: b, requestKey: tf(document.location.hash)}, c = new lf(c, {}, b);
            try {
                document.location.hash = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "")
            } catch (e) {
            }
            Pf(a, d, "/auth/session", c)
        }
    }

    h.je = function (a, b) {
        Of(this);
        var c = nf(a);
        c.Xa._method = "POST";
        this.fc("/users", c, function (a, c) {
            a ? A(b, a) : A(b, a, c)
        })
    };
    h.Le = function (a, b) {
        var c = this;
        Of(this);
        var d = "/users/" + encodeURIComponent(a.email), e = nf(a);
        e.Xa._method = "DELETE";
        this.fc(d, e, function (a, d) {
            !a && d && d.uid && c.hb && c.hb.uid && c.hb.uid === d.uid && Mf(c);
            A(b, a)
        })
    };
    h.ee = function (a, b) {
        Of(this);
        var c = "/users/" + encodeURIComponent(a.email) + "/password", d = nf(a);
        d.Xa._method = "PUT";
        d.Xa.password = a.newPassword;
        this.fc(c, d, function (a) {
            A(b, a)
        })
    };
    h.de = function (a, b) {
        Of(this);
        var c = "/users/" + encodeURIComponent(a.oldEmail) + "/email", d = nf(a);
        d.Xa._method = "PUT";
        d.Xa.email = a.newEmail;
        d.Xa.password = a.password;
        this.fc(c, d, function (a) {
            A(b, a)
        })
    };
    h.Me = function (a, b) {
        Of(this);
        var c = "/users/" + encodeURIComponent(a.email) + "/password", d = nf(a);
        d.Xa._method = "POST";
        this.fc(c, d, function (a) {
            A(b, a)
        })
    };
    h.fc = function (a, b, c) {
        Rf(this, [yf, Bf], a, b, c)
    };
    function Pf(a, b, c, d, e) {
        Rf(a, b, c, d, function (b, c) {
            !b && c && c.token && c.uid ? Lf(a, c.token, c, d.cd, function (a, b) {
                a ? A(e, a) : A(e, null, b)
            }) : A(e, b || W("UNKNOWN_ERROR"))
        })
    }

    function Rf(a, b, c, d, e) {
        b = Ja(b, function (a) {
            return "function" === typeof a.isAvailable && a.isAvailable()
        });
        0 === b.length ? setTimeout(function () {
            A(e, W("TRANSPORT_UNAVAILABLE"))
        }, 0) : (b = new (b.shift())(d.Ud), d = va(d.Xa), d.v = "js-0.0.0", d.transport = b.rc(), d.suppress_status_codes = !0, a = vf() + "/" + a.O.tb + c, b.open(a, d, function (a, b) {
            if (a)A(e, a); else if (b && b.error) {
                var c = Error(b.error.message);
                c.code = b.error.code;
                c.details = b.error.details;
                A(e, c)
            } else A(e, null, b)
        }))
    }

    function If(a, b) {
        var c = null !== a.hb || null !== b;
        a.hb = b;
        c && a.Vd("auth_status", b);
        a.Ee(null !== b)
    }

    h.qe = function (a) {
        w("auth_status" === a, 'initial event must be of type "auth_status"');
        return [this.hb]
    };
    function Of(a) {
        var b = a.O;
        if ("firebaseio.com" !== b.domain && "firebaseio-demo.com" !== b.domain && "auth.firebase.com" === kf)throw Error("This custom Firebase server ('" + a.O.domain + "') does not support delegated login.");
    };
    function Sf(a, b) {
        return a && "object" === typeof a ? (w(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function Tf(a, b) {
        var c = new af;
        cf(a, new R(""), function (a, e) {
            c.dc(a, Uf(e, b))
        });
        return c
    }

    function Uf(a, b) {
        var c = a.L().I(), c = Sf(c, b), d;
        if (a.M()) {
            var e = Sf(a.za(), b);
            return e !== a.za() || c !== a.L().I() ? new od(e, N(c)) : a
        }
        d = a;
        c !== a.L().I() && (d = d.Z(new od(c)));
        a.U(K, function (a, c) {
            var e = Uf(c, b);
            e !== c && (d = d.P(a, e))
        });
        return d
    };
    function xc(a, b, c) {
        this.A = a;
        this.aa = b;
        this.xc = c
    }

    function Vf(a) {
        return a.aa
    }

    function wc(a, b) {
        return a.aa && !a.xc || a.A.Da(b)
    }

    xc.prototype.j = function () {
        return this.A
    };
    function Wf(a, b) {
        this.F = a;
        this.Ld = b
    }

    function Xf(a, b, c, d) {
        return new Wf(new xc(b, c, d), a.Ld)
    }

    function Yf(a) {
        return a.F.aa ? a.F.j() : null
    }

    Wf.prototype.u = function () {
        return this.Ld
    };
    function yc(a) {
        return a.Ld.aa ? a.Ld.j() : null
    };
    function Zf(a, b) {
        this.Yd = a;
        this.Of = b
    }

    function $f(a) {
        this.G = a
    }

    $f.prototype.Ya = function (a, b, c, d) {
        var e = new zc, f;
        if (b.type === ag)b.source.me ? c = bg(this, a, b.path, b.Ga, c, d, e) : (w(b.source.df, "Unknown source."), f = b.source.Se, c = cg(this, a, b.path, b.Ga, c, d, f, e)); else if (b.type === dg)b.source.me ? c = eg(this, a, b.path, b.children, c, d, e) : (w(b.source.df, "Unknown source."), f = b.source.Se, c = fg(this, a, b.path, b.children, c, d, f, e)); else if (b.type === gg)if (b.Ne)if (f = b.path, null != c.ic(f))c = a; else {
            b = new vc(c, a, d);
            d = a.F.j();
            if (f.e() || ".priority" === H(f))Vf(a.u()) ? b = c.pa(yc(a)) : (b = a.u().j(),
                w(b instanceof V, "serverChildren would be complete if leaf node"), b = c.oc(b)), b = this.G.oa(d, b, e); else {
                f = H(f);
                var g = c.Ta(f, a.u());
                null == g && wc(a.u(), f) && (g = d.K(f));
                b = null != g ? this.G.C(d, f, g, b, e) : a.F.j().Da(f) ? this.G.C(d, f, L, b, e) : d;
                b.e() && Vf(a.u()) && (d = c.pa(yc(a)), d.M() && (b = this.G.oa(b, d, e)))
            }
            d = Vf(a.u()) || null != c.ic(T);
            c = Xf(a, b, d, this.G.ya())
        } else c = hg(this, a, b.path, c, d, e); else if (b.type === ig)d = b.path, b = a.u(), f = b.j(), g = b.aa || d.e(), c = jg(this, new Wf(a.F, new xc(f, g, b.xc)), d, c, uc, e); else throw gb("Unknown operation type: " +
            b.type);
        e = Kd(e.Za);
        d = c;
        b = d.F;
        b.aa && (f = b.j().M() || b.j().e(), g = Yf(a), (0 < e.length || !a.F.aa || f && !b.j().ea(g) || !b.j().L().ea(g.L())) && e.push(Gb(Yf(d))));
        return new Zf(c, e)
    };
    function jg(a, b, c, d, e, f) {
        var g = b.F;
        if (null != d.ic(c))return b;
        var k;
        if (c.e())w(Vf(b.u()), "If change path is empty, we must have complete server data"), a.G.ya() ? (e = yc(b), d = d.oc(e instanceof V ? e : L)) : d = d.pa(yc(b)), f = a.G.oa(b.F.j(), d, f); else {
            var l = H(c);
            if (".priority" == l)w(1 == Rc(c), "Can't have a priority with additional path components"), f = g.j(), k = b.u().j(), d = d.$c(c, f, k), f = null != d ? a.G.Z(f, d) : g.j(); else {
                var n = S(c);
                wc(g, l) ? (k = b.u().j(), d = d.$c(c, g.j(), k), d = null != d ? g.j().K(l).C(n, d) : g.j().K(l)) : d = d.Ta(l, b.u());
                f = null != d ? a.G.C(g.j(), l, d, e, f) : g.j()
            }
        }
        return Xf(b, f, g.aa || c.e(), a.G.ya())
    }

    function cg(a, b, c, d, e, f, g, k) {
        var l = b.u();
        g = g ? a.G : a.G.Mb();
        if (c.e())d = g.oa(l.j(), d, null); else if (g.ya() && !l.xc)d = l.j().C(c, d), d = g.oa(l.j(), d, null); else {
            var n = H(c);
            if ((c.e() ? !l.aa || l.xc : !wc(l, H(c))) && 1 < Rc(c))return b;
            d = l.j().K(n).C(S(c), d);
            d = ".priority" == n ? g.Z(l.j(), d) : g.C(l.j(), n, d, uc, null)
        }
        l = l.aa || c.e();
        b = new Wf(b.F, new xc(d, l, g.ya()));
        return jg(a, b, c, e, new vc(e, b, f), k)
    }

    function bg(a, b, c, d, e, f, g) {
        var k = b.F;
        e = new vc(e, b, f);
        if (c.e())g = a.G.oa(b.F.j(), d, g), a = Xf(b, g, !0, a.G.ya()); else if (f = H(c), ".priority" === f)g = a.G.Z(b.F.j(), d), a = Xf(b, g, k.aa, k.xc); else {
            var l = S(c);
            c = k.j().K(f);
            if (!l.e()) {
                var n = e.ef(f);
                d = null != n ? ".priority" === Sc(l) && n.ra(l.parent()).e() ? n : n.C(l, d) : L
            }
            c.ea(d) ? a = b : (g = a.G.C(k.j(), f, d, e, g), a = Xf(b, g, k.aa, a.G.ya()))
        }
        return a
    }

    function eg(a, b, c, d, e, f, g) {
        var k = b;
        kg(d, function (d, n) {
            var u = c.o(d);
            wc(b.F, H(u)) && (k = bg(a, k, u, n, e, f, g))
        });
        kg(d, function (d, n) {
            var u = c.o(d);
            wc(b.F, H(u)) || (k = bg(a, k, u, n, e, f, g))
        });
        return k
    }

    function lg(a, b) {
        kg(b, function (b, d) {
            a = a.C(b, d)
        });
        return a
    }

    function fg(a, b, c, d, e, f, g, k) {
        if (b.u().j().e() && !Vf(b.u()))return b;
        var l = b;
        c = c.e() ? d : mg(ng, c, d);
        var n = b.u().j();
        c.children.fa(function (c, d) {
            if (n.Da(c)) {
                var E = b.u().j().K(c), E = lg(E, d);
                l = cg(a, l, new R(c), E, e, f, g, k)
            }
        });
        c.children.fa(function (c, d) {
            var E = !Vf(b.u()) && null == d.value;
            n.Da(c) || E || (E = b.u().j().K(c), E = lg(E, d), l = cg(a, l, new R(c), E, e, f, g, k))
        });
        return l
    }

    function hg(a, b, c, d, e, f) {
        if (null != d.ic(c))return b;
        var g = new vc(d, b, e), k = e = b.F.j();
        if (Vf(b.u())) {
            if (c.e())e = d.pa(yc(b)), k = a.G.oa(b.F.j(), e, f); else if (".priority" === H(c)) {
                var l = d.Ta(H(c), b.u());
                null == l || e.e() || e.L().ea(l) || (k = a.G.Z(e, l))
            } else l = H(c), e = d.Ta(l, b.u()), null != e && (k = a.G.C(b.F.j(), l, e, g, f));
            e = !0
        } else b.F.aa ? (k = e, e = Yf(b), e.M() || e.U(K, function (c) {
            var e = d.Ta(c, b.u());
            null != e && (k = a.G.C(k, c, e, g, f))
        }), e = !0) : (!c.e() && (l = H(c), 1 == Rc(c) || wc(b.F, l)) && (c = d.Ta(l, b.u()), null != c && (k = a.G.C(e, l, c, g, f))),
            e = !1);
        return Xf(b, k, e, a.G.ya())
    };
    function og(a) {
        this.V = a;
        this.g = a.n.g
    }

    function pg(a, b, c, d) {
        var e = [], f = [];
        Ia(b, function (b) {
            "child_changed" === b.type && a.g.jf(b.De, b.Ha) && f.push(new B("child_moved", b.Ha, b.Ua))
        });
        qg(a, e, "child_removed", b, d, c);
        qg(a, e, "child_added", b, d, c);
        qg(a, e, "child_moved", f, d, c);
        qg(a, e, "child_changed", b, d, c);
        qg(a, e, Hb, b, d, c);
        return e
    }

    function qg(a, b, c, d, e, f) {
        d = Ja(d, function (a) {
            return a.type === c
        });
        Ra(d, q(a.Qf, a));
        Ia(d, function (c) {
            var d = rg(a, c, f);
            Ia(e, function (e) {
                e.wf(c.type) && b.push(e.createEvent(d, a.V))
            })
        })
    }

    function rg(a, b, c) {
        "value" !== b.type && "child_removed" !== b.type && (b.Fd = c.ff(b.Ua, b.Ha, a.g));
        return b
    }

    og.prototype.Qf = function (a, b) {
        if (null == a.Ua || null == b.Ua)throw gb("Should only compare child_ events.");
        return this.g.compare(new M(a.Ua, a.Ha), new M(b.Ua, b.Ha))
    };
    function sg(a, b) {
        this.V = a;
        var c = a.n, d = new cc(c.g), c = Kc(c) ? new cc(c.g) : c.ka ? new Bc(c) : new ec(c);
        this.sf = new $f(c);
        var e = b.u(), f = b.F, g = d.oa(L, e.j(), null), k = c.oa(L, f.j(), null);
        this.Ia = new Wf(new xc(k, f.aa, c.ya()), new xc(g, e.aa, d.ya()));
        this.Va = [];
        this.Uf = new og(a)
    }

    function tg(a) {
        return a.V
    }

    h = sg.prototype;
    h.u = function () {
        return this.Ia.u().j()
    };
    h.bb = function (a) {
        var b = yc(this.Ia);
        return b && (Kc(this.V.n) || !a.e() && !b.K(H(a)).e()) ? b.ra(a) : null
    };
    h.e = function () {
        return 0 === this.Va.length
    };
    h.Gb = function (a) {
        this.Va.push(a)
    };
    h.gb = function (a, b) {
        var c = [];
        if (b) {
            w(null == a, "A cancel should cancel all event registrations.");
            var d = this.V.path;
            Ia(this.Va, function (a) {
                (a = a.Ye(b, d)) && c.push(a)
            })
        }
        if (a) {
            for (var e = [], f = 0; f < this.Va.length; ++f) {
                var g = this.Va[f];
                if (!g.matches(a))e.push(g); else if (a.hf()) {
                    e = e.concat(this.Va.slice(f + 1));
                    break
                }
            }
            this.Va = e
        } else this.Va = [];
        return c
    };
    h.Ya = function (a, b, c) {
        a.type === dg && null !== a.source.yb && (w(yc(this.Ia), "We should always have a full cache before handling merges"), w(Yf(this.Ia), "Missing event cache, even though we have a server cache"));
        var d = this.Ia;
        a = this.sf.Ya(d, a, b, c);
        b = this.sf;
        c = a.Yd;
        w(c.F.j().Ac(b.G.g), "Event snap not indexed");
        w(c.u().j().Ac(b.G.g), "Server snap not indexed");
        w(Vf(a.Yd.u()) || !Vf(d.u()), "Once a server snap is complete, it should never go back");
        this.Ia = a.Yd;
        return ug(this, a.Of, a.Yd.F.j(), null)
    };
    function vg(a, b) {
        var c = a.Ia.F, d = [];
        c.j().M() || c.j().U(K, function (a, b) {
            d.push(new B("child_added", b, a))
        });
        c.aa && d.push(Gb(c.j()));
        return ug(a, d, c.j(), b)
    }

    function ug(a, b, c, d) {
        return pg(a.Uf, b, c, d ? [d] : a.Va)
    };
    function wg(a, b) {
        this.value = a;
        this.children = b || xg
    }

    var xg = new $c(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1
    }), ng = new wg(null);

    function yg(a) {
        var b = ng;
        z(a, function (a, d) {
            b = b.set(new R(d), a)
        });
        return b
    }

    h = wg.prototype;
    h.e = function () {
        return null === this.value && this.children.e()
    };
    function zg(a, b, c) {
        if (null != a.value && c(a.value))return {path: T, value: a.value};
        if (b.e())return null;
        var d = H(b);
        a = a.children.get(d);
        return null !== a ? (b = zg(a, S(b), c), null != b ? {path: (new R(d)).o(b.path), value: b.value} : null) : null
    }

    function Ag(a, b) {
        return zg(a, b, function () {
            return !0
        })
    }

    h.subtree = function (a) {
        if (a.e())return this;
        var b = this.children.get(H(a));
        return null !== b ? b.subtree(S(a)) : ng
    };
    h.set = function (a, b) {
        if (a.e())return new wg(b, this.children);
        var c = H(a), d = (this.children.get(c) || ng).set(S(a), b), c = this.children.La(c, d);
        return new wg(this.value, c)
    };
    h.remove = function (a) {
        if (a.e())return this.children.e() ? ng : new wg(null, this.children);
        var b = H(a), c = this.children.get(b);
        return c ? (a = c.remove(S(a)), b = a.e() ? this.children.remove(b) : this.children.La(b, a), null === this.value && b.e() ? ng : new wg(this.value, b)) : this
    };
    h.get = function (a) {
        if (a.e())return this.value;
        var b = this.children.get(H(a));
        return b ? b.get(S(a)) : null
    };
    function mg(a, b, c) {
        if (b.e())return c;
        var d = H(b);
        b = mg(a.children.get(d) || ng, S(b), c);
        d = b.e() ? a.children.remove(d) : a.children.La(d, b);
        return new wg(a.value, d)
    }

    function Bg(a, b) {
        return Cg(a, T, b)
    }

    function Cg(a, b, c) {
        var d = {};
        a.children.fa(function (a, f) {
            d[a] = Cg(f, b.o(a), c)
        });
        return c(b, a.value, d)
    }

    function Dg(a, b, c) {
        return Eg(a, b, T, c)
    }

    function Eg(a, b, c, d) {
        var e = a.value ? d(c, a.value) : !1;
        if (e)return e;
        if (b.e())return null;
        e = H(b);
        return (a = a.children.get(e)) ? Eg(a, S(b), c.o(e), d) : null
    }

    function Fg(a, b, c) {
        if (!b.e()) {
            var d = !0;
            a.value && (d = c(T, a.value));
            !0 === d && (d = H(b), (a = a.children.get(d)) && Gg(a, S(b), T.o(d), c))
        }
    }

    function Gg(a, b, c, d) {
        if (b.e())return a;
        a.value && d(c, a.value);
        var e = H(b);
        return (a = a.children.get(e)) ? Gg(a, S(b), c.o(e), d) : ng
    }

    function kg(a, b) {
        Hg(a, T, b)
    }

    function Hg(a, b, c) {
        a.children.fa(function (a, e) {
            Hg(e, b.o(a), c)
        });
        a.value && c(b, a.value)
    }

    function Ig(a, b) {
        a.children.fa(function (a, d) {
            d.value && b(a, d.value)
        })
    }

    h.toString = function () {
        var a = {};
        kg(this, function (b, c) {
            a[b.toString()] = c.toString()
        });
        return r(a)
    };
    function Jg() {
        this.va = {}
    }

    h = Jg.prototype;
    h.e = function () {
        return Od(this.va)
    };
    h.Ya = function (a, b, c) {
        var d = a.source.yb;
        if (null !== d)return d = t(this.va, d), w(null != d, "SyncTree gave us an op for an invalid query."), d.Ya(a, b, c);
        var e = [];
        z(this.va, function (d) {
            e = e.concat(d.Ya(a, b, c))
        });
        return e
    };
    h.Gb = function (a, b, c, d, e) {
        var f = a.Fa(), g = t(this.va, f);
        if (!g) {
            var g = c.pa(e ? d : null), k = !1;
            g ? k = !0 : (g = d instanceof V ? c.oc(d) : L, k = !1);
            g = new sg(a, new Wf(new xc(g, k, !1), new xc(d, e, !1)));
            this.va[f] = g
        }
        g.Gb(b);
        return vg(g, b)
    };
    h.gb = function (a, b, c) {
        var d = a.Fa(), e = [], f = [], g = null != Kg(this);
        if ("default" === d) {
            var k = this;
            z(this.va, function (a, d) {
                f = f.concat(a.gb(b, c));
                a.e() && (delete k.va[d], Kc(a.V.n) || e.push(a.V))
            })
        } else {
            var l = t(this.va, d);
            l && (f = f.concat(l.gb(b, c)), l.e() && (delete this.va[d], Kc(l.V.n) || e.push(l.V)))
        }
        g && null == Kg(this) && e.push(new Q(a.k, a.path));
        return {rg: e, Vf: f}
    };
    function Lg(a) {
        return Ja(Kd(a.va), function (a) {
            return !Kc(a.V.n)
        })
    }

    h.bb = function (a) {
        var b = null;
        z(this.va, function (c) {
            b = b || c.bb(a)
        });
        return b
    };
    function Mg(a, b) {
        if (Kc(b.n))return Kg(a);
        var c = b.Fa();
        return t(a.va, c)
    }

    function Kg(a) {
        return Nd(a.va, function (a) {
                return Kc(a.V.n)
            }) || null
    };
    function Ng(a) {
        this.W = a
    }

    var Og = new Ng(new wg(null));

    function Pg(a, b, c) {
        if (b.e())return new Ng(new wg(c));
        var d = Ag(a.W, b);
        if (null != d) {
            var e = d.path, d = d.value;
            b = U(e, b);
            d = d.C(b, c);
            return new Ng(a.W.set(e, d))
        }
        a = mg(a.W, b, new wg(c));
        return new Ng(a)
    }

    function Qg(a, b, c) {
        var d = a;
        ua(c, function (a, c) {
            d = Pg(d, b.o(a), c)
        });
        return d
    }

    Ng.prototype.Gd = function (a) {
        if (a.e())return Og;
        a = mg(this.W, a, ng);
        return new Ng(a)
    };
    function Rg(a, b) {
        var c = Ag(a.W, b);
        return null != c ? a.W.get(c.path).ra(U(c.path, b)) : null
    }

    function Sg(a) {
        var b = [], c = a.W.value;
        null != c ? c.M() || c.U(K, function (a, c) {
            b.push(new M(a, c))
        }) : a.W.children.fa(function (a, c) {
            null != c.value && b.push(new M(a, c.value))
        });
        return b
    }

    function Tg(a, b) {
        if (b.e())return a;
        var c = Rg(a, b);
        return null != c ? new Ng(new wg(c)) : new Ng(a.W.subtree(b))
    }

    Ng.prototype.e = function () {
        return this.W.e()
    };
    Ng.prototype.apply = function (a) {
        return Ug(T, this.W, a)
    };
    function Ug(a, b, c) {
        if (null != b.value)return c.C(a, b.value);
        var d = null;
        b.children.fa(function (b, f) {
            ".priority" === b ? (w(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = Ug(a.o(b), f, c)
        });
        c.ra(a).e() || null === d || (c = c.C(a.o(".priority"), d));
        return c
    };
    function Vg() {
        this.T = Og;
        this.wa = [];
        this.Dc = -1
    }

    h = Vg.prototype;
    h.Gd = function (a) {
        var b = Oa(this.wa, function (b) {
            return b.Zd === a
        });
        w(0 <= b, "removeWrite called with nonexistent writeId.");
        var c = this.wa[b];
        this.wa.splice(b, 1);
        for (var d = c.visible, e = !1, f = this.wa.length - 1; d && 0 <= f;) {
            var g = this.wa[f];
            g.visible && (f >= b && Wg(g, c.path) ? d = !1 : c.path.contains(g.path) && (e = !0));
            f--
        }
        if (d) {
            if (e)this.T = Xg(this.wa, Yg, T), this.Dc = 0 < this.wa.length ? this.wa[this.wa.length - 1].Zd : -1; else if (c.Ga)this.T = this.T.Gd(c.path); else {
                var k = this;
                z(c.children, function (a, b) {
                    k.T = k.T.Gd(c.path.o(b))
                })
            }
            return c.path
        }
        return null
    };
    h.pa = function (a, b, c, d) {
        if (c || d) {
            var e = Tg(this.T, a);
            return !d && e.e() ? b : d || null != b || null != Rg(e, T) ? (e = Xg(this.wa, function (b) {
                return (b.visible || d) && (!c || !(0 <= Ha(c, b.Zd))) && (b.path.contains(a) || a.contains(b.path))
            }, a), b = b || L, e.apply(b)) : null
        }
        e = Rg(this.T, a);
        if (null != e)return e;
        e = Tg(this.T, a);
        return e.e() ? b : null != b || null != Rg(e, T) ? (b = b || L, e.apply(b)) : null
    };
    h.oc = function (a, b) {
        var c = L, d = Rg(this.T, a);
        if (d)d.M() || d.U(K, function (a, b) {
            c = c.P(a, b)
        }); else if (b) {
            var e = Tg(this.T, a);
            b.U(K, function (a, b) {
                var d = Tg(e, new R(a)).apply(b);
                c = c.P(a, d)
            });
            Ia(Sg(e), function (a) {
                c = c.P(a.name, a.Y)
            })
        } else e = Tg(this.T, a), Ia(Sg(e), function (a) {
            c = c.P(a.name, a.Y)
        });
        return c
    };
    h.$c = function (a, b, c, d) {
        w(c || d, "Either existingEventSnap or existingServerSnap must exist");
        a = a.o(b);
        if (null != Rg(this.T, a))return null;
        a = Tg(this.T, a);
        return a.e() ? d.ra(b) : a.apply(d.ra(b))
    };
    h.Ta = function (a, b, c) {
        a = a.o(b);
        var d = Rg(this.T, a);
        return null != d ? d : wc(c, b) ? Tg(this.T, a).apply(c.j().K(b)) : null
    };
    h.ic = function (a) {
        return Rg(this.T, a)
    };
    h.ce = function (a, b, c, d, e, f) {
        var g;
        a = Tg(this.T, a);
        g = Rg(a, T);
        if (null == g)if (null != b)g = a.apply(b); else return [];
        g = g.Fb(f);
        if (g.e() || g.M())return [];
        b = [];
        a = nc(f);
        e = e ? g.Rb(c, f) : g.Pb(c, f);
        for (f = O(e); f && b.length < d;)0 !== a(f, c) && b.push(f), f = O(e);
        return b
    };
    function Wg(a, b) {
        return a.Ga ? a.path.contains(b) : !!Md(a.children, function (c, d) {
            return a.path.o(d).contains(b)
        })
    }

    function Yg(a) {
        return a.visible
    }

    function Xg(a, b, c) {
        for (var d = Og, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (b(f)) {
                var g = f.path;
                if (f.Ga)c.contains(g) ? (g = U(c, g), d = Pg(d, g, f.Ga)) : g.contains(c) && (g = U(g, c), d = Pg(d, T, f.Ga.ra(g))); else if (f.children)if (c.contains(g))g = U(c, g), d = Qg(d, g, f.children); else {
                    if (g.contains(c))if (g = U(g, c), g.e())d = Qg(d, T, f.children); else if (f = t(f.children, H(g)))f = f.ra(S(g)), d = Pg(d, T, f)
                } else throw gb("WriteRecord should have .snap or .children");
            }
        }
        return d
    }

    function Zg(a, b) {
        this.Db = a;
        this.W = b
    }

    h = Zg.prototype;
    h.pa = function (a, b, c) {
        return this.W.pa(this.Db, a, b, c)
    };
    h.oc = function (a) {
        return this.W.oc(this.Db, a)
    };
    h.$c = function (a, b, c) {
        return this.W.$c(this.Db, a, b, c)
    };
    h.ic = function (a) {
        return this.W.ic(this.Db.o(a))
    };
    h.ce = function (a, b, c, d, e) {
        return this.W.ce(this.Db, a, b, c, d, e)
    };
    h.Ta = function (a, b) {
        return this.W.Ta(this.Db, a, b)
    };
    h.o = function (a) {
        return new Zg(this.Db.o(a), this.W)
    };
    function $g(a, b, c) {
        this.type = ag;
        this.source = a;
        this.path = b;
        this.Ga = c
    }

    $g.prototype.Lc = function (a) {
        return this.path.e() ? new $g(this.source, T, this.Ga.K(a)) : new $g(this.source, S(this.path), this.Ga)
    };
    $g.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ga.toString() + ")"
    };
    function ah(a, b) {
        this.type = gg;
        this.source = bh;
        this.path = a;
        this.Ne = b
    }

    ah.prototype.Lc = function () {
        return this.path.e() ? this : new ah(S(this.path), this.Ne)
    };
    ah.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Ne + ")"
    };
    function ch(a, b) {
        this.type = ig;
        this.source = a;
        this.path = b
    }

    ch.prototype.Lc = function () {
        return this.path.e() ? new ch(this.source, T) : new ch(this.source, S(this.path))
    };
    ch.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)"
    };
    function dh(a, b, c) {
        this.type = dg;
        this.source = a;
        this.path = b;
        this.children = c
    }

    dh.prototype.Lc = function (a) {
        if (this.path.e())return a = this.children.subtree(new R(a)), a.e() ? null : a.value ? new $g(this.source, T, a.value) : new dh(this.source, T, a);
        w(H(this.path) === a, "Can't get a merge for a child not on the path of the operation");
        return new dh(this.source, S(this.path), this.children)
    };
    dh.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    };
    var ag = 0, dg = 1, gg = 2, ig = 3;

    function eh(a, b, c, d) {
        this.me = a;
        this.df = b;
        this.yb = c;
        this.Se = d;
        w(!d || b, "Tagged queries must be from server.")
    }

    var bh = new eh(!0, !1, null, !1), fh = new eh(!1, !0, null, !1);
    eh.prototype.toString = function () {
        return this.me ? "user" : this.Se ? "server(queryID=" + this.yb + ")" : "server"
    };
    function gh(a) {
        this.na = ng;
        this.xb = new Vg;
        this.Wc = {};
        this.bc = {};
        this.Ec = a
    }

    function hh(a, b, c, d, e) {
        var f = a.xb, g = e;
        w(d > f.Dc, "Stacking an older write on top of newer ones");
        m(g) || (g = !0);
        f.wa.push({path: b, Ga: c, Zd: d, visible: g});
        g && (f.T = Pg(f.T, b, c));
        f.Dc = d;
        return e ? ih(a, new $g(bh, b, c)) : []
    }

    function jh(a, b, c, d) {
        var e = a.xb;
        w(d > e.Dc, "Stacking an older merge on top of newer ones");
        e.wa.push({path: b, children: c, Zd: d, visible: !0});
        e.T = Qg(e.T, b, c);
        e.Dc = d;
        c = yg(c);
        return ih(a, new dh(bh, b, c))
    }

    function kh(a, b, c) {
        c = c || !1;
        b = a.xb.Gd(b);
        return null == b ? [] : ih(a, new ah(b, c))
    }

    function lh(a, b, c) {
        c = yg(c);
        return ih(a, new dh(fh, b, c))
    }

    function mh(a, b, c, d) {
        d = Pd(a.Wc, "_" + d);
        if (null != d) {
            var e = nh(d);
            d = e.path;
            e = e.yb;
            b = U(d, b);
            c = new $g(new eh(!1, !0, e, !0), b, c);
            return oh(a, d, c)
        }
        return []
    }

    function ph(a, b, c, d) {
        if (d = Pd(a.Wc, "_" + d)) {
            var e = nh(d);
            d = e.path;
            e = e.yb;
            b = U(d, b);
            c = yg(c);
            c = new dh(new eh(!1, !0, e, !0), b, c);
            return oh(a, d, c)
        }
        return []
    }

    gh.prototype.Gb = function (a, b) {
        var c = a.path, d = null, e = !1;
        Fg(this.na, c, function (a, b) {
            var f = U(a, c);
            d = b.bb(f);
            e = e || null != Kg(b);
            return !d
        });
        var f = this.na.get(c);
        f ? (e = e || null != Kg(f), d = d || f.bb(T)) : (f = new Jg, this.na = this.na.set(c, f));
        var g;
        null != d ? g = !0 : (g = !1, d = L, Ig(this.na.subtree(c), function (a, b) {
            var c = b.bb(T);
            c && (d = d.P(a, c))
        }));
        var k = null != Mg(f, a);
        if (!k && !Kc(a.n)) {
            var l = qh(a);
            w(!(l in this.bc), "View does not exist, but we have a tag");
            var n = rh++;
            this.bc[l] = n;
            this.Wc["_" + n] = l
        }
        g = f.Gb(a, b, new Zg(c, this.xb),
            d, g);
        k || e || (f = Mg(f, a), g = g.concat(sh(this, a, f)));
        return g
    };
    gh.prototype.gb = function (a, b, c) {
        var d = a.path, e = this.na.get(d), f = [];
        if (e && ("default" === a.Fa() || null != Mg(e, a))) {
            f = e.gb(a, b, c);
            e.e() && (this.na = this.na.remove(d));
            e = f.rg;
            f = f.Vf;
            b = -1 !== Oa(e, function (a) {
                    return Kc(a.n)
                });
            var g = Dg(this.na, d, function (a, b) {
                return null != Kg(b)
            });
            if (b && !g && (d = this.na.subtree(d), !d.e()))for (var d = th(d), k = 0; k < d.length; ++k) {
                var l = d[k], n = l.V, l = uh(this, l);
                this.Ec.Pe(n, vh(this, n), l.md, l.H)
            }
            if (!g && 0 < e.length && !c)if (b)this.Ec.Qd(a, null); else {
                var u = this;
                Ia(e, function (a) {
                    a.Fa();
                    var b = u.bc[qh(a)];
                    u.Ec.Qd(a, b)
                })
            }
            wh(this, e)
        }
        return f
    };
    gh.prototype.pa = function (a, b) {
        var c = this.xb, d = Dg(this.na, a, function (b, c) {
            var d = U(b, a);
            if (d = c.bb(d))return d
        });
        return c.pa(a, d, b, !0)
    };
    function th(a) {
        return Bg(a, function (a, c, d) {
            if (c && null != Kg(c))return [Kg(c)];
            var e = [];
            c && (e = Lg(c));
            z(d, function (a) {
                e = e.concat(a)
            });
            return e
        })
    }

    function wh(a, b) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (!Kc(d.n)) {
                var d = qh(d), e = a.bc[d];
                delete a.bc[d];
                delete a.Wc["_" + e]
            }
        }
    }

    function sh(a, b, c) {
        var d = b.path, e = vh(a, b);
        c = uh(a, c);
        b = a.Ec.Pe(b, e, c.md, c.H);
        d = a.na.subtree(d);
        if (e)w(null == Kg(d.value), "If we're adding a query, it shouldn't be shadowed"); else for (e = Bg(d, function (a, b, c) {
            if (!a.e() && b && null != Kg(b))return [tg(Kg(b))];
            var d = [];
            b && (d = d.concat(Ka(Lg(b), function (a) {
                return a.V
            })));
            z(c, function (a) {
                d = d.concat(a)
            });
            return d
        }), d = 0; d < e.length; ++d)c = e[d], a.Ec.Qd(c, vh(a, c));
        return b
    }

    function uh(a, b) {
        var c = b.V, d = vh(a, c);
        return {
            md: function () {
                return (b.u() || L).hash()
            }, H: function (b, f) {
                if ("ok" === b) {
                    if (f && "object" === typeof f && s(f, "w")) {
                        var g = t(f, "w");
                        ea(g) && 0 <= Ha(g, "no_index") && y("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.n.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance")
                    }
                    if (d) {
                        var k = c.path;
                        if (g = Pd(a.Wc, "_" + d))var l = nh(g), g = l.path, l = l.yb, k = U(g, k), k = new ch(new eh(!1, !0, l, !0), k), g = oh(a, g, k); else g = []
                    } else g = ih(a, new ch(fh,
                        c.path));
                    return g
                }
                g = "Unknown Error";
                "too_big" === b ? g = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? g = "Client doesn't have permission to access the desired data." : "unavailable" == b && (g = "The service is unavailable");
                g = Error(b + ": " + g);
                g.code = b.toUpperCase();
                return a.gb(c, null, g)
            }
        }
    }

    function qh(a) {
        return a.path.toString() + "$" + a.Fa()
    }

    function nh(a) {
        var b = a.indexOf("$");
        w(-1 !== b && b < a.length - 1, "Bad queryKey.");
        return {yb: a.substr(b + 1), path: new R(a.substr(0, b))}
    }

    function vh(a, b) {
        var c = qh(b);
        return t(a.bc, c)
    }

    var rh = 1;

    function oh(a, b, c) {
        var d = a.na.get(b);
        w(d, "Missing sync point for query tag that we're tracking");
        return d.Ya(c, new Zg(b, a.xb), null)
    }

    function ih(a, b) {
        return xh(a, b, a.na, null, new Zg(T, a.xb))
    }

    function xh(a, b, c, d, e) {
        if (b.path.e())return yh(a, b, c, d, e);
        var f = c.get(T);
        null == d && null != f && (d = f.bb(T));
        var g = [], k = H(b.path), l = b.Lc(k);
        if ((c = c.children.get(k)) && l)var n = d ? d.K(k) : null, k = e.o(k), g = g.concat(xh(a, l, c, n, k));
        f && (g = g.concat(f.Ya(b, e, d)));
        return g
    }

    function yh(a, b, c, d, e) {
        var f = c.get(T);
        null == d && null != f && (d = f.bb(T));
        var g = [];
        c.children.fa(function (c, f) {
            var n = d ? d.K(c) : null, u = e.o(c), x = b.Lc(c);
            x && (g = g.concat(yh(a, x, f, n, u)))
        });
        f && (g = g.concat(f.Ya(b, e, d)));
        return g
    };
    function zh(a) {
        this.O = a;
        this.Ra = Yd(a);
        this.$ = new ef;
        this.vd = 1;
        this.S = new Ke(this.O, q(this.yd, this), q(this.wd, this), q(this.He, this));
        this.zg = Zd(a, q(function () {
            return new Vd(this.Ra, this.S)
        }, this));
        this.kc = new Uc;
        this.se = new df;
        var b = this;
        this.qd = new gh({
            Pe: function (a, d, e, f) {
                d = [];
                e = b.se.j(a.path);
                e.e() || (d = ih(b.qd, new $g(fh, a.path, e)), setTimeout(function () {
                    f("ok")
                }, 0));
                return d
            }, Qd: ba
        });
        Ah(this, "connected", !1);
        this.ga = new af;
        this.Q = new Ff(a, q(this.S.Q, this.S), q(this.S.Ue, this.S), q(this.Ee, this));
        this.gd =
            0;
        this.te = null;
        this.N = new gh({
            Pe: function (a, d, e, f) {
                Oe(b.S, a, e, d, function (d, e) {
                    var l = f(d, e);
                    jf(b.$, a.path, l)
                });
                return []
            }, Qd: function (a, d) {
                var e = b.S, f = a.path.toString(), g = a.Fa();
                e.f("Unlisten called for " + f + " " + g);
                if (Qe(e, f, g) && e.ja) {
                    var k = Jc(a.n);
                    e.f("Unlisten on " + f + " for " + g);
                    f = {p: f};
                    d && (f.q = k, f.t = d);
                    e.Ca("n", f)
                }
            }
        })
    }

    h = zh.prototype;
    h.toString = function () {
        return (this.O.Ab ? "https://" : "http://") + this.O.host
    };
    h.name = function () {
        return this.O.tb
    };
    function Bh(a) {
        a = a.se.j(new R(".info/serverTimeOffset")).I() || 0;
        return (new Date).getTime() + a
    }

    function Ch(a) {
        a = a = {timestamp: Bh(a)};
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }

    h.yd = function (a, b, c, d) {
        this.gd++;
        var e = new R(a);
        b = this.te ? this.te(a, b) : b;
        a = [];
        d ? c ? (b = ud(b, function (a) {
            return N(a)
        }), a = ph(this.N, e, b, d)) : (b = N(b), a = mh(this.N, e, b, d)) : c ? (d = ud(b, function (a) {
            return N(a)
        }), a = lh(this.N, e, d)) : (d = N(b), a = ih(this.N, new $g(fh, e, d)));
        d = e;
        0 < a.length && (d = Dh(this, e));
        jf(this.$, d, a)
    };
    h.wd = function (a) {
        Ah(this, "connected", a);
        !1 === a && Eh(this)
    };
    h.He = function (a) {
        var b = this;
        Ab(a, function (a, d) {
            Ah(b, d, a)
        })
    };
    h.Ee = function (a) {
        Ah(this, "authenticated", a)
    };
    function Ah(a, b, c) {
        b = new R("/.info/" + b);
        c = N(c);
        var d = a.se;
        d.Jd = d.Jd.C(b, c);
        c = ih(a.qd, new $g(fh, b, c));
        jf(a.$, b, c)
    }

    h.Bb = function (a, b, c, d) {
        this.f("set", {path: a.toString(), value: b, Hg: c});
        var e = Ch(this);
        b = N(b, c);
        var e = Uf(b, e), f = this.vd++, e = hh(this.N, a, e, f, !0);
        ff(this.$, e);
        var g = this;
        this.S.put(a.toString(), b.I(!0), function (b, c) {
            var e = "ok" === b;
            e || y("set at " + a + " failed: " + b);
            e = kh(g.N, f, !e);
            jf(g.$, a, e);
            Fh(d, b, c)
        });
        e = Gh(this, a);
        Dh(this, e);
        jf(this.$, e, [])
    };
    h.update = function (a, b, c) {
        this.f("update", {path: a.toString(), value: b});
        var d = !0, e = Ch(this), f = {};
        z(b, function (a, b) {
            d = !1;
            var c = N(a);
            f[b] = Uf(c, e)
        });
        if (d)ib("update() called with empty data.  Don't do anything."), Fh(c, "ok"); else {
            var g = this.vd++, k = jh(this.N, a, f, g);
            ff(this.$, k);
            var l = this;
            We(this.S, a.toString(), b, function (b, d) {
                w("ok" === b || "permission_denied" === b, "merge at " + a + " failed.");
                var e = "ok" === b;
                e || y("update at " + a + " failed: " + b);
                var e = kh(l.N, g, !e), f = a;
                0 < e.length && (f = Dh(l, a));
                jf(l.$, f, e);
                Fh(c, b, d)
            });
            b = Gh(this, a);
            Dh(this, b);
            jf(this.$, a, [])
        }
    };
    function Eh(a) {
        a.f("onDisconnectEvents");
        var b = Ch(a), c = [];
        cf(Tf(a.ga, b), T, function (b, e) {
            c = c.concat(ih(a.N, new $g(fh, b, e)));
            var f = Gh(a, b);
            Dh(a, f)
        });
        a.ga = new af;
        jf(a.$, T, c)
    }

    h.Fe = function (a, b) {
        var c = this;
        this.S.Fe(a.toString(), function (d, e) {
            "ok" === d && bf(c.ga, a);
            Fh(b, d, e)
        })
    };
    function Hh(a, b, c, d) {
        var e = N(c);
        Se(a.S, b.toString(), e.I(!0), function (c, g) {
            "ok" === c && a.ga.dc(b, e);
            Fh(d, c, g)
        })
    }

    function Ih(a, b, c, d, e) {
        var f = N(c, d);
        Se(a.S, b.toString(), f.I(!0), function (c, d) {
            "ok" === c && a.ga.dc(b, f);
            Fh(e, c, d)
        })
    }

    function Jh(a, b, c, d) {
        var e = !0, f;
        for (f in c)e = !1;
        e ? (ib("onDisconnect().update() called with empty data.  Don't do anything."), Fh(d, "ok")) : Ue(a.S, b.toString(), c, function (e, f) {
            if ("ok" === e)for (var l in c) {
                var n = N(c[l]);
                a.ga.dc(b.o(l), n)
            }
            Fh(d, e, f)
        })
    }

    function Pc(a, b, c) {
        c = ".info" === H(b.path) ? a.qd.Gb(b, c) : a.N.Gb(b, c);
        Qc(a.$, b.path, c)
    }

    h.pb = function () {
        this.S.pb()
    };
    h.gc = function () {
        this.S.gc()
    };
    h.Qe = function (a) {
        if ("undefined" !== typeof console) {
            a ? (this.Pd || (this.Pd = new Ud(this.Ra)), a = this.Pd.get()) : a = this.Ra.get();
            var b = La(Ld(a), function (a, b) {
                return Math.max(b.length, a)
            }, 0), c;
            for (c in a) {
                for (var d = a[c], e = c.length; e < b + 2; e++)c += " ";
                console.log(c + d)
            }
        }
    };
    h.Re = function (a) {
        Td(this.Ra, a);
        this.zg.zf[a] = !0
    };
    h.f = function (a) {
        ib("r:" + this.S.id + ":", arguments)
    };
    function Fh(a, b, c) {
        a && Db(function () {
            if ("ok" == b)a(null); else {
                var d = (b || "error").toUpperCase(), e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };
    function Kh(a, b, c, d, e) {
        function f() {
        }

        a.f("transaction on " + b);
        var g = new Q(a, b);
        g.vb("value", f);
        c = {
            path: b, update: c, H: d, status: null, qf: fb(), Ve: e, xf: 0, Xd: function () {
                g.Zb("value", f)
            }, $d: null, xa: null, dd: null, ed: null, fd: null
        };
        d = a.N.pa(b, void 0) || L;
        c.dd = d;
        d = c.update(d.I());
        if (m(d)) {
            Tb("transaction failed: Data returned ", d);
            c.status = 1;
            e = Vc(a.kc, b);
            var k = e.za() || [];
            k.push(c);
            Wc(e, k);
            "object" === typeof d && null !== d && s(d, ".priority") ? (k = t(d, ".priority"), w(Rb(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) :
                k = (a.N.pa(b) || L).L().I();
            e = Ch(a);
            d = N(d, k);
            e = Uf(d, e);
            c.ed = d;
            c.fd = e;
            c.xa = a.vd++;
            c = hh(a.N, b, e, c.xa, c.Ve);
            jf(a.$, b, c);
            Lh(a)
        } else c.Xd(), c.ed = null, c.fd = null, c.H && (a = new C(c.dd, new Q(a, c.path), K), c.H(null, !1, a))
    }

    function Lh(a, b) {
        var c = b || a.kc;
        b || Mh(a, c);
        if (null !== c.za()) {
            var d = Nh(a, c);
            w(0 < d.length, "Sending zero length transaction queue");
            Ma(d, function (a) {
                return 1 === a.status
            }) && Oh(a, c.path(), d)
        } else c.ld() && c.U(function (b) {
            Lh(a, b)
        })
    }

    function Oh(a, b, c) {
        for (var d = Ka(c, function (a) {
            return a.xa
        }), e = a.N.pa(b, d) || L, d = e, e = e.hash(), f = 0; f < c.length; f++) {
            var g = c[f];
            w(1 === g.status, "tryToSendTransactionQueue_: items in queue should all be run.");
            g.status = 2;
            g.xf++;
            var k = U(b, g.path), d = d.C(k, g.ed)
        }
        d = d.I(!0);
        a.S.put(b.toString(), d, function (d) {
            a.f("transaction put response", {path: b.toString(), status: d});
            var e = [];
            if ("ok" === d) {
                d = [];
                for (f = 0; f < c.length; f++) {
                    c[f].status = 3;
                    e = e.concat(kh(a.N, c[f].xa));
                    if (c[f].H) {
                        var g = c[f].fd, k = new Q(a, c[f].path);
                        d.push(q(c[f].H,
                            null, null, !0, new C(g, k, K)))
                    }
                    c[f].Xd()
                }
                Mh(a, Vc(a.kc, b));
                Lh(a);
                jf(a.$, b, e);
                for (f = 0; f < d.length; f++)Db(d[f])
            } else {
                if ("datastale" === d)for (f = 0; f < c.length; f++)c[f].status = 4 === c[f].status ? 5 : 1; else for (y("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++)c[f].status = 5, c[f].$d = d;
                Dh(a, b)
            }
        }, e)
    }

    function Dh(a, b) {
        var c = Ph(a, b), d = c.path(), c = Nh(a, c);
        Qh(a, c, d);
        return d
    }

    function Qh(a, b, c) {
        if (0 !== b.length) {
            for (var d = [], e = [], f = Ka(b, function (a) {
                return a.xa
            }), g = 0; g < b.length; g++) {
                var k = b[g], l = U(c, k.path), n = !1, u;
                w(null !== l, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === k.status)n = !0, u = k.$d, e = e.concat(kh(a.N, k.xa, !0)); else if (1 === k.status)if (25 <= k.xf)n = !0, u = "maxretry", e = e.concat(kh(a.N, k.xa, !0)); else {
                    var x = a.N.pa(k.path, f) || L;
                    k.dd = x;
                    var E = b[g].update(x.I());
                    m(E) ? (Tb("transaction failed: Data returned ", E), l = N(E), "object" === typeof E && null != E && s(E,
                        ".priority") || (l = l.Z(x.L())), x = k.xa, E = Ch(a), E = Uf(l, E), k.ed = l, k.fd = E, k.xa = a.vd++, Pa(f, x), e = e.concat(hh(a.N, k.path, E, k.xa, k.Ve)), e = e.concat(kh(a.N, x, !0))) : (n = !0, u = "nodata", e = e.concat(kh(a.N, k.xa, !0)))
                }
                jf(a.$, c, e);
                e = [];
                n && (b[g].status = 3, setTimeout(b[g].Xd, Math.floor(0)), b[g].H && ("nodata" === u ? (k = new Q(a, b[g].path), d.push(q(b[g].H, null, null, !1, new C(b[g].dd, k, K)))) : d.push(q(b[g].H, null, Error(u), !1, null))))
            }
            Mh(a, a.kc);
            for (g = 0; g < d.length; g++)Db(d[g]);
            Lh(a)
        }
    }

    function Ph(a, b) {
        for (var c, d = a.kc; null !== (c = H(b)) && null === d.za();)d = Vc(d, c), b = S(b);
        return d
    }

    function Nh(a, b) {
        var c = [];
        Rh(a, b, c);
        c.sort(function (a, b) {
            return a.qf - b.qf
        });
        return c
    }

    function Rh(a, b, c) {
        var d = b.za();
        if (null !== d)for (var e = 0; e < d.length; e++)c.push(d[e]);
        b.U(function (b) {
            Rh(a, b, c)
        })
    }

    function Mh(a, b) {
        var c = b.za();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++)3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            Wc(b, 0 < c.length ? c : null)
        }
        b.U(function (b) {
            Mh(a, b)
        })
    }

    function Gh(a, b) {
        var c = Ph(a, b).path(), d = Vc(a.kc, b);
        Zc(d, function (b) {
            Sh(a, b)
        });
        Sh(a, d);
        Yc(d, function (b) {
            Sh(a, b)
        });
        return c
    }

    function Sh(a, b) {
        var c = b.za();
        if (null !== c) {
            for (var d = [], e = [], f = -1, g = 0; g < c.length; g++)4 !== c[g].status && (2 === c[g].status ? (w(f === g - 1, "All SENT items should be at beginning of queue."), f = g, c[g].status = 4, c[g].$d = "set") : (w(1 === c[g].status, "Unexpected transaction status in abort"), c[g].Xd(), e = e.concat(kh(a.N, c[g].xa, !0)), c[g].H && d.push(q(c[g].H, null, Error("set"), !1, null))));
            -1 === f ? Wc(b, null) : c.length = f + 1;
            jf(a.$, b.path(), e);
            for (g = 0; g < d.length; g++)Db(d[g])
        }
    };
    function X() {
        this.ec = {}
    }

    ca(X);
    X.prototype.pb = function () {
        for (var a in this.ec)this.ec[a].pb()
    };
    X.prototype.interrupt = X.prototype.pb;
    X.prototype.gc = function () {
        for (var a in this.ec)this.ec[a].gc()
    };
    X.prototype.resume = X.prototype.gc;
    function Th(a) {
        var b = this;
        this.qc = a;
        this.Sd = "*";
        xf() ? this.Gc = this.od = pf() : (this.Gc = window.opener, this.od = window);
        if (!b.Gc)throw"Unable to find relay frame";
        qf(this.od, "message", q(this.$b, this));
        qf(this.od, "message", q(this.nf, this));
        try {
            Uh(this, {a: "ready"})
        } catch (c) {
            qf(this.Gc, "load", function () {
                Uh(b, {a: "ready"})
            })
        }
        qf(window, "unload", q(this.jg, this))
    }

    function Uh(a, b) {
        b = r(b);
        xf() ? a.Gc.doPost(b, a.Sd) : a.Gc.postMessage(b, a.Sd)
    }

    Th.prototype.$b = function (a) {
        var b = this, c;
        try {
            c = ta(a.data)
        } catch (d) {
        }
        c && "request" === c.a && (rf(window, "message", this.$b), this.Sd = a.origin, this.qc && setTimeout(function () {
            b.qc(b.Sd, c.d, function (a, c) {
                b.Mf = !c;
                b.qc = void 0;
                Uh(b, {a: "response", d: a, forceKeepWindowOpen: c})
            })
        }, 0))
    };
    Th.prototype.jg = function () {
        try {
            rf(this.od, "message", this.nf)
        } catch (a) {
        }
        this.qc && (Uh(this, {a: "error", d: "unknown closed window"}), this.qc = void 0);
        try {
            window.close()
        } catch (b) {
        }
    };
    Th.prototype.nf = function (a) {
        if (this.Mf && "die" === a.data)try {
            window.close()
        } catch (b) {
        }
    };
    var Y = {
        Xf: function () {
            ke = be = !0
        }
    };
    Y.forceLongPolling = Y.Xf;
    Y.Yf = function () {
        le = !0
    };
    Y.forceWebSockets = Y.Yf;
    Y.wg = function (a, b) {
        a.k.S.Oe = b
    };
    Y.setSecurityDebugCallback = Y.wg;
    Y.Qe = function (a, b) {
        a.k.Qe(b)
    };
    Y.stats = Y.Qe;
    Y.Re = function (a, b) {
        a.k.Re(b)
    };
    Y.statsIncrementCounter = Y.Re;
    Y.gd = function (a) {
        return a.k.gd
    };
    Y.dataUpdateCount = Y.gd;
    Y.ag = function (a, b) {
        a.k.te = b
    };
    Y.interceptServerData = Y.ag;
    Y.gg = function (a) {
        new Th(a)
    };
    Y.onPopupOpen = Y.gg;
    Y.ug = function (a) {
        kf = a
    };
    Y.setAuthenticationServer = Y.ug;
    function Z(a, b) {
        this.Qc = a;
        this.Ea = b
    }

    Z.prototype.cancel = function (a) {
        D("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        G("Firebase.onDisconnect().cancel", 1, a, !0);
        this.Qc.Fe(this.Ea, a || null)
    };
    Z.prototype.cancel = Z.prototype.cancel;
    Z.prototype.remove = function (a) {
        D("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        $b("Firebase.onDisconnect().remove", this.Ea);
        G("Firebase.onDisconnect().remove", 1, a, !0);
        Hh(this.Qc, this.Ea, null, a)
    };
    Z.prototype.remove = Z.prototype.remove;
    Z.prototype.set = function (a, b) {
        D("Firebase.onDisconnect().set", 1, 2, arguments.length);
        $b("Firebase.onDisconnect().set", this.Ea);
        Sb("Firebase.onDisconnect().set", a, !1);
        G("Firebase.onDisconnect().set", 2, b, !0);
        Hh(this.Qc, this.Ea, a, b)
    };
    Z.prototype.set = Z.prototype.set;
    Z.prototype.Bb = function (a, b, c) {
        D("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        $b("Firebase.onDisconnect().setWithPriority", this.Ea);
        Sb("Firebase.onDisconnect().setWithPriority", a, !1);
        Wb("Firebase.onDisconnect().setWithPriority", 2, b);
        G("Firebase.onDisconnect().setWithPriority", 3, c, !0);
        Ih(this.Qc, this.Ea, a, b, c)
    };
    Z.prototype.setWithPriority = Z.prototype.Bb;
    Z.prototype.update = function (a, b) {
        D("Firebase.onDisconnect().update", 1, 2, arguments.length);
        $b("Firebase.onDisconnect().update", this.Ea);
        if (ea(a)) {
            for (var c = {}, d = 0; d < a.length; ++d)c["" + d] = a[d];
            a = c;
            y("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        Vb("Firebase.onDisconnect().update", a);
        G("Firebase.onDisconnect().update", 2, b, !0);
        Jh(this.Qc,
            this.Ea, a, b)
    };
    Z.prototype.update = Z.prototype.update;
    var $ = {};
    $.mc = Ke;
    $.DataConnection = $.mc;
    Ke.prototype.yg = function (a, b) {
        this.Ca("q", {p: a}, b)
    };
    $.mc.prototype.simpleListen = $.mc.prototype.yg;
    Ke.prototype.Sf = function (a, b) {
        this.Ca("echo", {d: a}, b)
    };
    $.mc.prototype.echo = $.mc.prototype.Sf;
    Ke.prototype.interrupt = Ke.prototype.pb;
    $.Df = ve;
    $.RealTimeConnection = $.Df;
    ve.prototype.sendRequest = ve.prototype.Ca;
    ve.prototype.close = ve.prototype.close;
    $.$f = function (a) {
        var b = Ke.prototype.put;
        Ke.prototype.put = function (c, d, e, f) {
            m(f) && (f = a());
            b.call(this, c, d, e, f)
        };
        return function () {
            Ke.prototype.put = b
        }
    };
    $.hijackHash = $.$f;
    $.Cf = Ba;
    $.ConnectionTarget = $.Cf;
    $.Fa = function (a) {
        return a.Fa()
    };
    $.queryIdentifier = $.Fa;
    $.bg = function (a) {
        return a.k.S.Aa
    };
    $.listens = $.bg;
    var Vh = function () {
        var a = 0, b = [];
        return function (c) {
            var d = c === a;
            a = c;
            for (var e = Array(8), f = 7; 0 <= f; f--)e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
            w(0 === c, "Cannot push at time == 0");
            c = e.join("");
            if (d) {
                for (f = 11; 0 <= f && 63 === b[f]; f--)b[f] = 0;
                b[f]++
            } else for (f = 0; 12 > f; f++)b[f] = Math.floor(64 * Math.random());
            for (f = 0; 12 > f; f++)c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
            w(20 === c.length, "NextPushId: Length should be 20.");
            return c
        }
    }();

    function Q(a, b) {
        var c, d, e;
        if (a instanceof zh)c = a, d = b; else {
            D("new Firebase", 1, 2, arguments.length);
            d = sb(arguments[0]);
            c = d.Ag;
            "firebase" === d.domain && rb(d.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
            c || rb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
            d.Ab || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
            c = new Ba(d.host, d.Ab, c, "ws" === d.scheme || "wss" === d.scheme);
            d = new R(d.Oc);
            e = d.toString();
            var f;
            !(f = !p(c.host) || 0 === c.host.length || !Qb(c.tb)) && (f = 0 !== e.length) && (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), f = !(p(e) && 0 !== e.length && !Pb.test(e)));
            if (f)throw Error(F("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
            if (b)if (b instanceof X)e = b; else if (p(b))e = X.Nb(), c.Dd = b; else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
            else e = X.Nb();
            f = c.toString();
            var g = t(e.ec, f);
            g || (g = new zh(c), e.ec[f] = g);
            c = g
        }
        P.call(this, c, d, Gc, !1)
    }

    ma(Q, P);
    "object" === typeof module && module.exports ? module.exports = Q : "function" == typeof aa.define && aa.define.amd ? aa.define(function () {
        return Q
    }) : aa.Firebase = Q;
    Q.prototype.name = function () {
        y("Firebase.name() being deprecated. Please use Firebase.key() instead.");
        D("Firebase.name", 0, 0, arguments.length);
        return this.key()
    };
    Q.prototype.name = Q.prototype.name;
    Q.prototype.key = function () {
        D("Firebase.key", 0, 0, arguments.length);
        return this.path.e() ? null : Sc(this.path)
    };
    Q.prototype.key = Q.prototype.key;
    Q.prototype.o = function (a) {
        D("Firebase.child", 1, 1, arguments.length);
        if (ga(a))a = String(a); else if (!(a instanceof R))if (null === H(this.path)) {
            var b = a;
            b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
            Zb("Firebase.child", b)
        } else Zb("Firebase.child", a);
        return new Q(this.k, this.path.o(a))
    };
    Q.prototype.child = Q.prototype.o;
    Q.prototype.parent = function () {
        D("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return null === a ? null : new Q(this.k, a)
    };
    Q.prototype.parent = Q.prototype.parent;
    Q.prototype.root = function () {
        D("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; null !== a.parent();)a = a.parent();
        return a
    };
    Q.prototype.root = Q.prototype.root;
    Q.prototype.toString = function () {
        D("Firebase.toString", 0, 0, arguments.length);
        var a;
        if (null === this.parent())a = this.k.toString(); else {
            a = this.parent().toString() + "/";
            var b = this.key();
            a += encodeURIComponent(String(b))
        }
        return a
    };
    Q.prototype.toString = Q.prototype.toString;
    Q.prototype.set = function (a, b) {
        D("Firebase.set", 1, 2, arguments.length);
        $b("Firebase.set", this.path);
        Sb("Firebase.set", a, !1);
        G("Firebase.set", 2, b, !0);
        this.k.Bb(this.path, a, null, b || null)
    };
    Q.prototype.set = Q.prototype.set;
    Q.prototype.update = function (a, b) {
        D("Firebase.update", 1, 2, arguments.length);
        $b("Firebase.update", this.path);
        if (ea(a)) {
            for (var c = {}, d = 0; d < a.length; ++d)c["" + d] = a[d];
            a = c;
            y("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
        }
        Vb("Firebase.update", a);
        G("Firebase.update", 2, b, !0);
        if (s(a, ".priority"))throw Error("update() does not currently support updating .priority.");
        this.k.update(this.path, a, b || null)
    };
    Q.prototype.update = Q.prototype.update;
    Q.prototype.Bb = function (a, b, c) {
        D("Firebase.setWithPriority", 2, 3, arguments.length);
        $b("Firebase.setWithPriority", this.path);
        Sb("Firebase.setWithPriority", a, !1);
        Wb("Firebase.setWithPriority", 2, b);
        G("Firebase.setWithPriority", 3, c, !0);
        if (".length" === this.key() || ".keys" === this.key())throw"Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
        this.k.Bb(this.path, a, b, c || null)
    };
    Q.prototype.setWithPriority = Q.prototype.Bb;
    Q.prototype.remove = function (a) {
        D("Firebase.remove", 0, 1, arguments.length);
        $b("Firebase.remove", this.path);
        G("Firebase.remove", 1, a, !0);
        this.set(null, a)
    };
    Q.prototype.remove = Q.prototype.remove;
    Q.prototype.transaction = function (a, b, c) {
        D("Firebase.transaction", 1, 3, arguments.length);
        $b("Firebase.transaction", this.path);
        G("Firebase.transaction", 1, a, !1);
        G("Firebase.transaction", 2, b, !0);
        if (m(c) && "boolean" != typeof c)throw Error(F("Firebase.transaction", 3, !0) + "must be a boolean.");
        if (".length" === this.key() || ".keys" === this.key())throw"Firebase.transaction failed: " + this.key() + " is a read-only object.";
        "undefined" === typeof c && (c = !0);
        Kh(this.k, this.path, a, b || null, c)
    };
    Q.prototype.transaction = Q.prototype.transaction;
    Q.prototype.vg = function (a, b) {
        D("Firebase.setPriority", 1, 2, arguments.length);
        $b("Firebase.setPriority", this.path);
        Wb("Firebase.setPriority", 1, a);
        G("Firebase.setPriority", 2, b, !0);
        this.k.Bb(this.path.o(".priority"), a, null, b)
    };
    Q.prototype.setPriority = Q.prototype.vg;
    Q.prototype.push = function (a, b) {
        D("Firebase.push", 0, 2, arguments.length);
        $b("Firebase.push", this.path);
        Sb("Firebase.push", a, !0);
        G("Firebase.push", 2, b, !0);
        var c = Bh(this.k), c = Vh(c), c = this.o(c);
        "undefined" !== typeof a && null !== a && c.set(a, b);
        return c
    };
    Q.prototype.push = Q.prototype.push;
    Q.prototype.fb = function () {
        $b("Firebase.onDisconnect", this.path);
        return new Z(this.k, this.path)
    };
    Q.prototype.onDisconnect = Q.prototype.fb;
    Q.prototype.Q = function (a, b, c) {
        y("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");
        D("Firebase.auth", 1, 3, arguments.length);
        ac("Firebase.auth", a);
        G("Firebase.auth", 2, b, !0);
        G("Firebase.auth", 3, b, !0);
        Lf(this.k.Q, a, {}, {remember: "none"}, b, c)
    };
    Q.prototype.auth = Q.prototype.Q;
    Q.prototype.Ue = function (a) {
        D("Firebase.unauth", 0, 1, arguments.length);
        G("Firebase.unauth", 1, a, !0);
        Mf(this.k.Q, a)
    };
    Q.prototype.unauth = Q.prototype.Ue;
    Q.prototype.ne = function () {
        D("Firebase.getAuth", 0, 0, arguments.length);
        return this.k.Q.ne()
    };
    Q.prototype.getAuth = Q.prototype.ne;
    Q.prototype.fg = function (a, b) {
        D("Firebase.onAuth", 1, 2, arguments.length);
        G("Firebase.onAuth", 1, a, !1);
        Nb("Firebase.onAuth", 2, b);
        this.k.Q.vb("auth_status", a, b)
    };
    Q.prototype.onAuth = Q.prototype.fg;
    Q.prototype.eg = function (a, b) {
        D("Firebase.offAuth", 1, 2, arguments.length);
        G("Firebase.offAuth", 1, a, !1);
        Nb("Firebase.offAuth", 2, b);
        this.k.Q.Zb("auth_status", a, b)
    };
    Q.prototype.offAuth = Q.prototype.eg;
    Q.prototype.Hf = function (a, b, c) {
        D("Firebase.authWithCustomToken", 2, 3, arguments.length);
        ac("Firebase.authWithCustomToken", a);
        G("Firebase.authWithCustomToken", 2, b, !1);
        I("Firebase.authWithCustomToken", 3, c, !0);
        Lf(this.k.Q, a, {}, c || {}, b)
    };
    Q.prototype.authWithCustomToken = Q.prototype.Hf;
    Q.prototype.If = function (a, b, c) {
        D("Firebase.authWithOAuthPopup", 2, 3, arguments.length);
        bc("Firebase.authWithOAuthPopup", 1, a);
        G("Firebase.authWithOAuthPopup", 2, b, !1);
        I("Firebase.authWithOAuthPopup", 3, c, !0);
        Qf(this.k.Q, a, c, b)
    };
    Q.prototype.authWithOAuthPopup = Q.prototype.If;
    Q.prototype.Jf = function (a, b, c) {
        D("Firebase.authWithOAuthRedirect", 2, 3, arguments.length);
        bc("Firebase.authWithOAuthRedirect", 1, a);
        G("Firebase.authWithOAuthRedirect", 2, b, !1);
        I("Firebase.authWithOAuthRedirect", 3, c, !0);
        var d = this.k.Q;
        Of(d);
        var e = [Ef], f = nf(c);
        "anonymous" === a || "firebase" === a ? A(b, W("TRANSPORT_UNAVAILABLE")) : (Aa.set("redirect_client_options", f.cd), Pf(d, e, "/auth/" + a, f, b))
    };
    Q.prototype.authWithOAuthRedirect = Q.prototype.Jf;
    Q.prototype.Kf = function (a, b, c, d) {
        D("Firebase.authWithOAuthToken", 3, 4, arguments.length);
        bc("Firebase.authWithOAuthToken", 1, a);
        G("Firebase.authWithOAuthToken", 3, c, !1);
        I("Firebase.authWithOAuthToken", 4, d, !0);
        p(b) ? (bc("Firebase.authWithOAuthToken", 2, b), Nf(this.k.Q, a + "/token", {access_token: b}, d, c)) : (I("Firebase.authWithOAuthToken", 2, b, !1), Nf(this.k.Q, a + "/token", b, d, c))
    };
    Q.prototype.name = Q.prototype.Kf;
    Q.prototype.Gf = function (a, b) {
        D("Firebase.authAnonymously", 1, 2, arguments.length);
        G("Firebase.authAnonymously", 1, a, !1);
        I("Firebase.authAnonymously", 2, b, !0);
        Nf(this.k.Q, "anonymous", {}, b, a)
    };
    Q.prototype.authAnonymously = Q.prototype.Gf;
    Q.prototype.Lf = function (a, b, c) {
        D("Firebase.authWithPassword", 2, 3, arguments.length);
        I("Firebase.authWithPassword", 1, a, !1);
        J("Firebase.authWithPassword", a, "email");
        J("Firebase.authWithPassword", a, "password");
        G("Firebase.authAnonymously", 2, b, !1);
        I("Firebase.authAnonymously", 3, c, !0);
        Nf(this.k.Q, "password", a, c, b)
    };
    Q.prototype.authWithPassword = Q.prototype.Lf;
    Q.prototype.je = function (a, b) {
        D("Firebase.createUser", 2, 2, arguments.length);
        I("Firebase.createUser", 1, a, !1);
        J("Firebase.createUser", a, "email");
        J("Firebase.createUser", a, "password");
        G("Firebase.createUser", 2, b, !1);
        this.k.Q.je(a, b)
    };
    Q.prototype.createUser = Q.prototype.je;
    Q.prototype.Le = function (a, b) {
        D("Firebase.removeUser", 2, 2, arguments.length);
        I("Firebase.removeUser", 1, a, !1);
        J("Firebase.removeUser", a, "email");
        J("Firebase.removeUser", a, "password");
        G("Firebase.removeUser", 2, b, !1);
        this.k.Q.Le(a, b)
    };
    Q.prototype.removeUser = Q.prototype.Le;
    Q.prototype.ee = function (a, b) {
        D("Firebase.changePassword", 2, 2, arguments.length);
        I("Firebase.changePassword", 1, a, !1);
        J("Firebase.changePassword", a, "email");
        J("Firebase.changePassword", a, "oldPassword");
        J("Firebase.changePassword", a, "newPassword");
        G("Firebase.changePassword", 2, b, !1);
        this.k.Q.ee(a, b)
    };
    Q.prototype.changePassword = Q.prototype.ee;
    Q.prototype.de = function (a, b) {
        D("Firebase.changeEmail", 2, 2, arguments.length);
        I("Firebase.changeEmail", 1, a, !1);
        J("Firebase.changeEmail", a, "oldEmail");
        J("Firebase.changeEmail", a, "newEmail");
        J("Firebase.changeEmail", a, "password");
        G("Firebase.changeEmail", 2, b, !1);
        this.k.Q.de(a, b)
    };
    Q.prototype.changeEmail = Q.prototype.de;
    Q.prototype.Me = function (a, b) {
        D("Firebase.resetPassword", 2, 2, arguments.length);
        I("Firebase.resetPassword", 1, a, !1);
        J("Firebase.resetPassword", a, "email");
        G("Firebase.resetPassword", 2, b, !1);
        this.k.Q.Me(a, b)
    };
    Q.prototype.resetPassword = Q.prototype.Me;
    Q.goOffline = function () {
        D("Firebase.goOffline", 0, 0, arguments.length);
        X.Nb().pb()
    };
    Q.goOnline = function () {
        D("Firebase.goOnline", 0, 0, arguments.length);
        X.Nb().gc()
    };
    function ob(a, b) {
        w(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
        !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? mb = q(console.log, console) : "object" === typeof console.log && (mb = function (a) {
            console.log(a)
        })), b && Aa.set("logging_enabled", !0)) : a ? mb = a : (mb = null, Aa.remove("logging_enabled"))
    }

    Q.enableLogging = ob;
    Q.ServerValue = {TIMESTAMP: {".sv": "timestamp"}};
    Q.SDK_VERSION = "0.0.0";
    Q.INTERNAL = Y;
    Q.Context = X;
    Q.TEST_ACCESS = $;
})();