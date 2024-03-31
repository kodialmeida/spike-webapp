!function () {
  function e(e) {
    var t = i;
    e && (i[e] || (i[e] = {}), t = i[e]), t.define && t.define.packaged || (n.original = t.define, t.define = n, t.define.packaged = !0), t.require && t.require.packaged || (o.original = t.require, t.require = o, t.require.packaged = !0)
  }

  var t = "ace", i = function () {
    return this
  }();
  if (i || "undefined" == typeof window || (i = window), t || "undefined" == typeof requirejs) {
    var n = function (e, t, i) {
      return "string" != typeof e ? void (n.original ? n.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())) : (2 == arguments.length && (i = t), void (n.modules[e] || (n.payloads[e] = i, n.modules[e] = null)))
    };
    n.modules = {}, n.payloads = {};
    var s = function (e, t, i) {
      if ("string" == typeof t) {
        var n = a(e, t);
        if (void 0 != n) return i && i(), n
      } else if ("[object Array]" === Object.prototype.toString.call(t)) {
        for (var s = [], r = 0, l = t.length; l > r; ++r) {
          var h = a(e, t[r]);
          if (void 0 == h && o.original) return;
          s.push(h)
        }
        return i && i.apply(null, s) || !0
      }
    }, o = function (e, t) {
      var i = s("", e, t);
      return void 0 == i && o.original ? o.original.apply(this, arguments) : i
    }, r = function (e, t) {
      if (-1 !== t.indexOf("!")) {
        var i = t.split("!");
        return r(e, i[0]) + "!" + r(e, i[1])
      }
      if ("." == t.charAt(0)) {
        var n = e.split("/").slice(0, -1).join("/");
        for (t = n + "/" + t; -1 !== t.indexOf(".") && s != t;) {
          var s = t;
          t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
        }
      }
      return t
    }, a = function (e, t) {
      t = r(e, t);
      var i = n.modules[t];
      if (!i) {
        if (i = n.payloads[t], "function" == typeof i) {
          var o = {}, a = {id: t, uri: "", exports: o, packaged: !0}, l = function (e, i) {
            return s(t, e, i)
          }, h = i(l, o, a);
          o = h || a.exports, n.modules[t] = o, delete n.payloads[t]
        }
        i = n.modules[t] = o || i
      }
      return i
    };
    e(t)
  }
}(), ace.define("ace/lib/regexp", ["require", "exports", "module"], function (e, t, i) {
  "use strict";

  function n(e) {
    return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
  }

  function s(e, t, i) {
    if (Array.prototype.indexOf) return e.indexOf(t, i);
    for (var n = i || 0; n < e.length; n++) if (e[n] === t) return n;
    return -1
  }

  var o = {
    exec: RegExp.prototype.exec,
    test: RegExp.prototype.test,
    match: String.prototype.match,
    replace: String.prototype.replace,
    split: String.prototype.split
  }, r = void 0 === o.exec.call(/()??/, "")[1], a = function () {
    var e = /^/g;
    return o.test.call(e, ""), !e.lastIndex
  }();
  a && r || (RegExp.prototype.exec = function (e) {
    var t, i, l = o.exec.apply(this, arguments);
    if ("string" == typeof e && l) {
      if (!r && l.length > 1 && s(l, "") > -1 && (i = RegExp(this.source, o.replace.call(n(this), "g", "")), o.replace.call(e.slice(l.index), i, function () {
        for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (l[e] = void 0)
      })), this._xregexp && this._xregexp.captureNames) for (var h = 1; h < l.length; h++) t = this._xregexp.captureNames[h - 1], t && (l[t] = l[h]);
      !a && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
    }
    return l
  }, a || (RegExp.prototype.test = function (e) {
    var t = o.exec.call(this, e);
    return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
  }))
}), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function (e, t, i) {
  function n() {
  }

  function s(e) {
    try {
      return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
    } catch (t) {
    }
  }

  function o(e) {
    return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
  }

  Function.prototype.bind || (Function.prototype.bind = function (e) {
    var t = this;
    if ("function" != typeof t) throw new TypeError("Function.prototype.bind called on incompatible " + t);
    var i = f.call(arguments, 1), s = function () {
      if (this instanceof s) {
        var n = t.apply(this, i.concat(f.call(arguments)));
        return Object(n) === n ? n : this
      }
      return t.apply(e, i.concat(f.call(arguments)))
    };
    return t.prototype && (n.prototype = t.prototype, s.prototype = new n, n.prototype = null), s
  });
  var r, a, l, h, c, u = Function.prototype.call, d = Array.prototype, g = Object.prototype, f = d.slice,
    m = u.bind(g.toString), p = u.bind(g.hasOwnProperty);
  if ((c = p(g, "__defineGetter__")) && (r = u.bind(g.__defineGetter__), a = u.bind(g.__defineSetter__), l = u.bind(g.__lookupGetter__), h = u.bind(g.__lookupSetter__)), 2 != [1, 2].splice(0).length) if (function () {
    function e(e) {
      var t = new Array(e + 2);
      return t[0] = t[1] = 0, t
    }

    var t, i = [];
    return i.splice.apply(i, e(20)), i.splice.apply(i, e(26)), t = i.length, i.splice(5, 0, "XXX"), t + 1 == i.length, t + 1 == i.length ? !0 : void 0
  }()) {
    var A = Array.prototype.splice;
    Array.prototype.splice = function (e, t) {
      return arguments.length ? A.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(f.call(arguments, 2))) : []
    }
  } else Array.prototype.splice = function (e, t) {
    var i = this.length;
    e > 0 ? e > i && (e = i) : void 0 == e ? e = 0 : 0 > e && (e = Math.max(i + e, 0)), i > e + t || (t = i - e);
    var n = this.slice(e, e + t), s = f.call(arguments, 2), o = s.length;
    if (e === i) o && this.push.apply(this, s); else {
      var r = Math.min(t, i - e), a = e + r, l = a + o - r, h = i - a, c = i - r;
      if (a > l) for (var u = 0; h > u; ++u) this[l + u] = this[a + u]; else if (l > a) for (u = h; u--;) this[l + u] = this[a + u];
      if (o && e === c) this.length = c, this.push.apply(this, s); else for (this.length = c + o, u = 0; o > u; ++u) this[e + u] = s[u]
    }
    return n
  };
  Array.isArray || (Array.isArray = function (e) {
    return "[object Array]" == m(e)
  });
  var C = Object("a"), F = "a" != C[0] || !(0 in C);
  if (Array.prototype.forEach || (Array.prototype.forEach = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = arguments[1], s = -1,
      o = i.length >>> 0;
    if ("[object Function]" != m(e)) throw new TypeError;
    for (; ++s < o;) s in i && e.call(n, i[s], s, t)
  }), Array.prototype.map || (Array.prototype.map = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = i.length >>> 0, s = Array(n),
      o = arguments[1];
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    for (var r = 0; n > r; r++) r in i && (s[r] = e.call(o, i[r], r, t));
    return s
  }), Array.prototype.filter || (Array.prototype.filter = function (e) {
    var t, i = O(this), n = F && "[object String]" == m(this) ? this.split("") : i, s = n.length >>> 0, o = [],
      r = arguments[1];
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    for (var a = 0; s > a; a++) a in n && (t = n[a], e.call(r, t, a, i) && o.push(t));
    return o
  }), Array.prototype.every || (Array.prototype.every = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = i.length >>> 0, s = arguments[1];
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    for (var o = 0; n > o; o++) if (o in i && !e.call(s, i[o], o, t)) return !1;
    return !0
  }), Array.prototype.some || (Array.prototype.some = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = i.length >>> 0, s = arguments[1];
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    for (var o = 0; n > o; o++) if (o in i && e.call(s, i[o], o, t)) return !0;
    return !1
  }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = i.length >>> 0;
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    if (!n && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
    var s, o = 0;
    if (arguments.length >= 2) s = arguments[1]; else for (; ;) {
      if (o in i) {
        s = i[o++];
        break
      }
      if (++o >= n) throw new TypeError("reduce of empty array with no initial value")
    }
    for (; n > o; o++) o in i && (s = e.call(void 0, s, i[o], o, t));
    return s
  }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
    var t = O(this), i = F && "[object String]" == m(this) ? this.split("") : t, n = i.length >>> 0;
    if ("[object Function]" != m(e)) throw new TypeError(e + " is not a function");
    if (!n && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
    var s, o = n - 1;
    if (arguments.length >= 2) s = arguments[1]; else for (; ;) {
      if (o in i) {
        s = i[o--];
        break
      }
      if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
    }
    do o in this && (s = e.call(void 0, s, i[o], o, t)); while (o--);
    return s
  }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function (e) {
    var t = F && "[object String]" == m(this) ? this.split("") : O(this), i = t.length >>> 0;
    if (!i) return -1;
    var n = 0;
    for (arguments.length > 1 && (n = o(arguments[1])), n = n >= 0 ? n : Math.max(0, i + n); i > n; n++) if (n in t && t[n] === e) return n;
    return -1
  }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function (e) {
    var t = F && "[object String]" == m(this) ? this.split("") : O(this), i = t.length >>> 0;
    if (!i) return -1;
    var n = i - 1;
    for (arguments.length > 1 && (n = Math.min(n, o(arguments[1]))), n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--) if (n in t && e === t[n]) return n;
    return -1
  }), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
    return e.__proto__ || (e.constructor ? e.constructor.prototype : g)
  }), !Object.getOwnPropertyDescriptor) {
    var v = "Object.getOwnPropertyDescriptor called on a non-object: ";
    Object.getOwnPropertyDescriptor = function (e, t) {
      if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(v + e);
      if (p(e, t)) {
        var i, n, s;
        if (i = {enumerable: !0, configurable: !0}, c) {
          var o = e.__proto__;
          e.__proto__ = g;
          var n = l(e, t), s = h(e, t);
          if (e.__proto__ = o, n || s) return n && (i.get = n), s && (i.set = s), i
        }
        return i.value = e[t], i
      }
    }
  }
  if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
    return Object.keys(e)
  }), !Object.create) {
    var w;
    w = null === Object.prototype.__proto__ ? function () {
      return {__proto__: null}
    } : function () {
      var e = {};
      for (var t in e) e[t] = null;
      return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
    }, Object.create = function (e, t) {
      var i;
      if (null === e) i = w(); else {
        if ("object" != typeof e) throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
        var n = function () {
        };
        n.prototype = e, i = new n, i.__proto__ = e
      }
      return void 0 !== t && Object.defineProperties(i, t), i
    }
  }
  if (Object.defineProperty) {
    var E = s({}), $ = "undefined" == typeof document || s(document.createElement("div"));
    if (!E || !$) var b = Object.defineProperty
  }
  if (!Object.defineProperty || b) {
    var y = "Property description must be an object: ", B = "Object.defineProperty called on non-object: ",
      D = "getters & setters can not be defined on this javascript engine";
    Object.defineProperty = function (e, t, i) {
      if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError(B + e);
      if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError(y + i);
      if (b) try {
        return b.call(Object, e, t, i)
      } catch (n) {
      }
      if (p(i, "value")) if (c && (l(e, t) || h(e, t))) {
        var s = e.__proto__;
        e.__proto__ = g, delete e[t], e[t] = i.value, e.__proto__ = s
      } else e[t] = i.value; else {
        if (!c) throw new TypeError(D);
        p(i, "get") && r(e, t, i.get), p(i, "set") && a(e, t, i.set)
      }
      return e
    }
  }
  Object.defineProperties || (Object.defineProperties = function (e, t) {
    for (var i in t) p(t, i) && Object.defineProperty(e, i, t[i]);
    return e
  }), Object.seal || (Object.seal = function (e) {
    return e
  }), Object.freeze || (Object.freeze = function (e) {
    return e
  });
  try {
    Object.freeze(function () {
    })
  } catch (S) {
    Object.freeze = function (e) {
      return function (t) {
        return "function" == typeof t ? t : e(t)
      }
    }(Object.freeze)
  }
  if (Object.preventExtensions || (Object.preventExtensions = function (e) {
    return e
  }), Object.isSealed || (Object.isSealed = function (e) {
    return !1
  }), Object.isFrozen || (Object.isFrozen = function (e) {
    return !1
  }), Object.isExtensible || (Object.isExtensible = function (e) {
    if (Object(e) === e) throw new TypeError;
    for (var t = ""; p(e, t);) t += "?";
    e[t] = !0;
    var i = p(e, t);
    return delete e[t], i
  }), !Object.keys) {
    var k = !0,
      x = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      L = x.length;
    for (var R in {toString: null}) k = !1;
    Object.keys = function W(e) {
      if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
      var W = [];
      for (var t in e) p(e, t) && W.push(t);
      if (k) for (var i = 0, n = L; n > i; i++) {
        var s = x[i];
        p(e, s) && W.push(s)
      }
      return W
    }
  }
  Date.now || (Date.now = function () {
    return (new Date).getTime()
  });
  var M = "	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff";
  if (!String.prototype.trim || M.trim()) {
    M = "[" + M + "]";
    var T = new RegExp("^" + M + M + "*"), _ = new RegExp(M + M + "*$");
    String.prototype.trim = function () {
      return String(this).replace(T, "").replace(_, "")
    }
  }
  var O = function (e) {
    if (null == e) throw new TypeError("can't convert " + e + " to object");
    return Object(e)
  }
}), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (e, t, i) {
  "use strict";
  e("./regexp"), e("./es5-shim")
}), ace.define("ace/lib/dom", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = "http://www.w3.org/1999/xhtml";
  t.getDocumentHead = function (e) {
    return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
  }, t.createElement = function (e, t) {
    return document.createElementNS ? document.createElementNS(t || n, e) : document.createElement(e)
  }, t.hasCssClass = function (e, t) {
    var i = (e.className || "").split(/\s+/g);
    return -1 !== i.indexOf(t)
  }, t.addCssClass = function (e, i) {
    t.hasCssClass(e, i) || (e.className += " " + i)
  }, t.removeCssClass = function (e, t) {
    for (var i = e.className.split(/\s+/g); ;) {
      var n = i.indexOf(t);
      if (-1 == n) break;
      i.splice(n, 1)
    }
    e.className = i.join(" ")
  }, t.toggleCssClass = function (e, t) {
    for (var i = e.className.split(/\s+/g), n = !0; ;) {
      var s = i.indexOf(t);
      if (-1 == s) break;
      n = !1, i.splice(s, 1)
    }
    return n && i.push(t), e.className = i.join(" "), n
  }, t.setCssClass = function (e, i, n) {
    n ? t.addCssClass(e, i) : t.removeCssClass(e, i)
  }, t.hasCssString = function (e, t) {
    var i, n = 0;
    if (t = t || document, t.createStyleSheet && (i = t.styleSheets)) {
      for (; n < i.length;) if (i[n++].owningElement.id === e) return !0
    } else if (i = t.getElementsByTagName("style")) for (; n < i.length;) if (i[n++].id === e) return !0;
    return !1
  }, t.importCssString = function (e, i, s) {
    if (s = s || document, i && t.hasCssString(i, s)) return null;
    var o;
    s.createStyleSheet ? (o = s.createStyleSheet(), o.cssText = e, i && (o.owningElement.id = i)) : (o = s.createElementNS ? s.createElementNS(n, "style") : s.createElement("style"), o.appendChild(s.createTextNode(e)), i && (o.id = i), t.getDocumentHead(s).appendChild(o))
  }, t.importCssStylsheet = function (e, i) {
    if (i.createStyleSheet) i.createStyleSheet(e); else {
      var n = t.createElement("link");
      n.rel = "stylesheet", n.href = e, t.getDocumentHead(i).appendChild(n)
    }
  }, t.getInnerWidth = function (e) {
    return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
  }, t.getInnerHeight = function (e) {
    return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
  }, "undefined" != typeof document && (void 0 !== window.pageYOffset ? (t.getPageScrollTop = function () {
    return window.pageYOffset
  }, t.getPageScrollLeft = function () {
    return window.pageXOffset
  }) : (t.getPageScrollTop = function () {
    return document.body.scrollTop
  }, t.getPageScrollLeft = function () {
    return document.body.scrollLeft
  }), window.getComputedStyle ? t.computedStyle = function (e, t) {
    return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
  } : t.computedStyle = function (e, t) {
    return t ? e.currentStyle[t] : e.currentStyle
  }, t.scrollbarWidth = function (e) {
    var i = t.createElement("ace_inner");
    i.style.width = "100%", i.style.minWidth = "0px", i.style.height = "200px", i.style.display = "block";
    var n = t.createElement("ace_outer"), s = n.style;
    s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", n.appendChild(i);
    var o = e.documentElement;
    o.appendChild(n);
    var r = i.offsetWidth;
    s.overflow = "scroll";
    var a = i.offsetWidth;
    return r == a && (a = n.clientWidth), o.removeChild(n), r - a
  }, t.setInnerHtml = function (e, t) {
    var i = e.cloneNode(!1);
    return i.innerHTML = t, e.parentNode.replaceChild(i, e), i
  }, "textContent" in document.documentElement ? (t.setInnerText = function (e, t) {
    e.textContent = t
  }, t.getInnerText = function (e) {
    return e.textContent
  }) : (t.setInnerText = function (e, t) {
    e.innerText = t
  }, t.getInnerText = function (e) {
    return e.innerText
  }), t.getParentWindow = function (e) {
    return e.defaultView || e.parentWindow
  })
}), ace.define("ace/lib/oop", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  t.inherits = function (e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    })
  }, t.mixin = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e
  }, t.implement = function (e, i) {
    t.mixin(e, i)
  }
}), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function (e, t, i) {
  "use strict";
  e("./fixoldbrowsers");
  var n = e("./oop"), s = function () {
    var e, t, i = {
      MODIFIER_KEYS: {16: "Shift", 17: "Ctrl", 18: "Alt", 224: "Meta"},
      KEY_MODS: {ctrl: 1, alt: 2, option: 2, shift: 4, "super": 8, meta: 8, command: 8, cmd: 8},
      FUNCTION_KEYS: {
        8: "Backspace",
        9: "Tab",
        13: "Return",
        19: "Pause",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "Print",
        45: "Insert",
        46: "Delete",
        96: "Numpad0",
        97: "Numpad1",
        98: "Numpad2",
        99: "Numpad3",
        100: "Numpad4",
        101: "Numpad5",
        102: "Numpad6",
        103: "Numpad7",
        104: "Numpad8",
        105: "Numpad9",
        "-13": "NumpadEnter",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "Numlock",
        145: "Scrolllock"
      },
      PRINTABLE_KEYS: {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        61: "=",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        107: "+",
        109: "-",
        110: ".",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }
    };
    for (t in i.FUNCTION_KEYS) e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
    for (t in i.PRINTABLE_KEYS) e = i.PRINTABLE_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
    return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i["return"], i.escape = i.esc, i.del = i["delete"], i[173] = "-", function () {
      for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) i.KEY_MODS[t] = e.filter(function (e) {
        return t & i.KEY_MODS[e]
      }).join("-") + "-"
    }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
  }();
  n.mixin(t, s), t.keyCodeToString = function (e) {
    var t = s[e];
    return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
  }
}), ace.define("ace/lib/useragent", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  if (t.OS = {LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS"}, t.getOS = function () {
    return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
  }, "object" == typeof navigator) {
    var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(), s = navigator.userAgent;
    t.isWin = "win" == n, t.isMac = "mac" == n, t.isLinux = "linux" == n, t.isIE = "Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && "Gecko" === window.navigator.product, t.isOldGecko = t.isGecko && parseInt((s.match(/rv\:(\d+)/) || [])[1], 10) < 4, t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(s.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(s.split(" Chrome/")[1]) || void 0, t.isAIR = s.indexOf("AdobeAIR") >= 0, t.isIPad = s.indexOf("iPad") >= 0, t.isTouchPad = s.indexOf("TouchPad") >= 0, t.isChromeOS = s.indexOf(" CrOS ") >= 0
  }
}), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, i) {
  "use strict";

  function n(e, t, i) {
    var n = r(t);
    if (!o.isMac && a) {
      if ((a[91] || a[92]) && (n |= 8), a.altGr) {
        if (3 == (3 & n)) return;
        a.altGr = 0
      }
      if (18 === i || 17 === i) {
        var h = "location" in t ? t.location : t.keyLocation;
        if (17 === i && 1 === h) 1 == a[i] && (l = t.timeStamp); else if (18 === i && 3 === n && 2 === h) {
          var c = t.timestamp - l;
          50 > c && (a.altGr = !0)
        }
      }
    }
    if (i in s.MODIFIER_KEYS && (i = -1), 8 & n && (91 === i || 93 === i) && (i = -1), !n && 13 === i) {
      var h = "location" in t ? t.location : t.keyLocation;
      if (3 === h && (e(t, n, -i), t.defaultPrevented)) return
    }
    if (o.isChromeOS && 8 & n) {
      if (e(t, n, i), t.defaultPrevented) return;
      n &= -9
    }
    return n || i in s.FUNCTION_KEYS || i in s.PRINTABLE_KEYS ? e(t, n, i) : !1
  }

  var s = e("./keys"), o = e("./useragent");
  t.addListener = function (e, t, i) {
    if (e.addEventListener) return e.addEventListener(t, i, !1);
    if (e.attachEvent) {
      var n = function () {
        i.call(e, window.event)
      };
      i._wrapper = n, e.attachEvent("on" + t, n)
    }
  }, t.removeListener = function (e, t, i) {
    return e.removeEventListener ? e.removeEventListener(t, i, !1) : void (e.detachEvent && e.detachEvent("on" + t, i._wrapper || i))
  }, t.stopEvent = function (e) {
    return t.stopPropagation(e), t.preventDefault(e), !1
  }, t.stopPropagation = function (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
  }, t.preventDefault = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
  }, t.getButton = function (e) {
    return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
      1: 0,
      2: 2,
      4: 1
    }[e.button]
  }, t.capture = function (e, i, n) {
    function s(e) {
      i && i(e), n && n(e), t.removeListener(document, "mousemove", i, !0), t.removeListener(document, "mouseup", s, !0), t.removeListener(document, "dragstart", s, !0)
    }

    return t.addListener(document, "mousemove", i, !0), t.addListener(document, "mouseup", s, !0), t.addListener(document, "dragstart", s, !0), s
  }, t.addMouseWheelListener = function (e, i) {
    "onmousewheel" in e ? t.addListener(e, "mousewheel", function (e) {
      var t = 8;
      void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / t), i(e)
    }) : "onwheel" in e ? t.addListener(e, "wheel", function (e) {
      var t = .35;
      switch (e.deltaMode) {
        case e.DOM_DELTA_PIXEL:
          e.wheelX = e.deltaX * t || 0, e.wheelY = e.deltaY * t || 0;
          break;
        case e.DOM_DELTA_LINE:
        case e.DOM_DELTA_PAGE:
          e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0)
      }
      i(e)
    }) : t.addListener(e, "DOMMouseScroll", function (e) {
      e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), i(e)
    })
  }, t.addMultiMouseDownListener = function (e, i, n, s) {
    var r, a, l, h = 0, c = {2: "dblclick", 3: "tripleclick", 4: "quadclick"};
    t.addListener(e, "mousedown", function (e) {
      if (0 !== t.getButton(e) ? h = 0 : e.detail > 1 ? (h++, h > 4 && (h = 1)) : h = 1, o.isIE) {
        var u = Math.abs(e.clientX - r) > 5 || Math.abs(e.clientY - a) > 5;
        (!l || u) && (h = 1), l && clearTimeout(l), l = setTimeout(function () {
          l = null
        }, i[h - 1] || 600), 1 == h && (r = e.clientX, a = e.clientY)
      }
      if (e._clicks = h, n[s]("mousedown", e), h > 4) h = 0; else if (h > 1) return n[s](c[h], e)
    }), o.isOldIE && t.addListener(e, "dblclick", function (e) {
      h = 2, l && clearTimeout(l), l = setTimeout(function () {
        l = null
      }, i[h - 1] || 600), n[s]("mousedown", e), n[s](c[h], e)
    })
  };
  var r = !o.isMac || !o.isOpera || "KeyboardEvent" in window ? function (e) {
    return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
  } : function (e) {
    return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
  };
  t.getModifierString = function (e) {
    return s.KEY_MODS[r(e)]
  };
  var a = null, l = 0;
  if (t.addCommandKeyListener = function (e, i) {
    var s = t.addListener;
    if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
      var r = null;
      s(e, "keydown", function (e) {
        r = e.keyCode
      }), s(e, "keypress", function (e) {
        return n(i, e, r)
      })
    } else {
      var l = null;
      s(e, "keydown", function (e) {
        a[e.keyCode] = (a[e.keyCode] || 0) + 1;
        var t = n(i, e, e.keyCode);
        return l = e.defaultPrevented, t
      }), s(e, "keypress", function (e) {
        l && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), l = null)
      }), s(e, "keyup", function (e) {
        a[e.keyCode] = null
      }), a || (a = Object.create(null), s(window, "focus", function (e) {
        a = Object.create(null)
      }))
    }
  }, window.postMessage && !o.isOldIE) {
    var h = 1;
    t.nextTick = function (e, i) {
      i = i || window;
      var n = "zero-timeout-message-" + h;
      t.addListener(i, "message", function s(o) {
        o.data == n && (t.stopPropagation(o), t.removeListener(i, "message", s), e())
      }), i.postMessage(n, "*")
    }
  }
  t.nextFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame, t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
    setTimeout(e, 17)
  }
}), ace.define("ace/lib/lang", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  t.last = function (e) {
    return e[e.length - 1]
  }, t.stringReverse = function (e) {
    return e.split("").reverse().join("")
  }, t.stringRepeat = function (e, t) {
    for (var i = ""; t > 0;) 1 & t && (i += e), (t >>= 1) && (e += e);
    return i
  };
  var n = /^\s\s*/, s = /\s\s*$/;
  t.stringTrimLeft = function (e) {
    return e.replace(n, "")
  }, t.stringTrimRight = function (e) {
    return e.replace(s, "")
  }, t.copyObject = function (e) {
    var t = {};
    for (var i in e) t[i] = e[i];
    return t
  }, t.copyArray = function (e) {
    for (var t = [], i = 0, n = e.length; n > i; i++) e[i] && "object" == typeof e[i] ? t[i] = this.copyObject(e[i]) : t[i] = e[i];
    return t
  }, t.deepCopy = function (e) {
    if ("object" != typeof e || !e) return e;
    var i = e.constructor;
    if (i === RegExp) return e;
    var n = i();
    for (var s in e) "object" == typeof e[s] ? n[s] = t.deepCopy(e[s]) : n[s] = e[s];
    return n
  }, t.arrayToMap = function (e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = 1;
    return t
  }, t.createMap = function (e) {
    var t = Object.create(null);
    for (var i in e) t[i] = e[i];
    return t
  }, t.arrayRemove = function (e, t) {
    for (var i = 0; i <= e.length; i++) t === e[i] && e.splice(i, 1)
  }, t.escapeRegExp = function (e) {
    return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
  }, t.escapeHTML = function (e) {
    return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
  }, t.getMatchOffsets = function (e, t) {
    var i = [];
    return e.replace(t, function (e) {
      i.push({offset: arguments[arguments.length - 2], length: e.length})
    }), i
  }, t.deferredCall = function (e) {
    var t = null, i = function () {
      t = null, e()
    }, n = function (e) {
      return n.cancel(), t = setTimeout(i, e || 0), n
    };
    return n.schedule = n, n.call = function () {
      return this.cancel(), e(), n
    }, n.cancel = function () {
      return clearTimeout(t), t = null, n
    }, n.isPending = function () {
      return t
    }, n
  }, t.delayedCall = function (e, t) {
    var i = null, n = function () {
      i = null, e()
    }, s = function (e) {
      null == i && (i = setTimeout(n, e || t))
    };
    return s.delay = function (e) {
      i && clearTimeout(i), i = setTimeout(n, e || t)
    }, s.schedule = s, s.call = function () {
      this.cancel(), e()
    }, s.cancel = function () {
      i && clearTimeout(i), i = null
    }, s.isPending = function () {
      return i
    }, s
  }
}), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function (e, t, i) {
  "use strict";
  var n = e("../lib/event"), s = e("../lib/useragent"), o = e("../lib/dom"), r = e("../lib/lang"), a = s.isChrome < 18,
    l = s.isIE, h = function (e, t) {
      function i(e) {
        if (!m) {
          if (m = !0, S) t = 0, i = e ? 0 : u.value.length - 1; else var t = e ? 2 : 1, i = 2;
          try {
            u.setSelectionRange(t, i)
          } catch (n) {
          }
          m = !1
        }
      }

      function h() {
        m || (u.value = d, s.isWebKit && w.schedule())
      }

      function c() {
        clearTimeout(N), N = setTimeout(function () {
          p && (u.style.cssText = p, p = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
        }, s.isOldIE ? 200 : 0)
      }

      var u = o.createElement("textarea");
      u.className = "ace_text-input", s.isTouchPad && u.setAttribute("x-palm-disable-auto-cap", !0), u.setAttribute("wrap", "off"), u.setAttribute("autocorrect", "off"), u.setAttribute("autocapitalize", "off"), u.setAttribute("spellcheck", !1), u.style.opacity = "0", s.isOldIE && (u.style.top = "-1000px"), e.insertBefore(u, e.firstChild);
      var d = "", g = !1, f = !1, m = !1, p = "", A = !0;
      try {
        var C = document.activeElement === u
      } catch (F) {
      }
      n.addListener(u, "blur", function (e) {
        t.onBlur(e), C = !1
      }), n.addListener(u, "focus", function (e) {
        C = !0, t.onFocus(e), i()
      }), this.focus = function () {
        return p ? u.focus() : (u.style.position = "fixed", u.style.top = "-1000px", u.focus(), void setTimeout(function () {
          u.style.position = ""
        }, 0))
      }, this.blur = function () {
        u.blur()
      }, this.isFocused = function () {
        return C
      };
      var v = r.delayedCall(function () {
        C && i(A)
      }), w = r.delayedCall(function () {
        m || (u.value = d, C && i())
      });
      s.isWebKit || t.addEventListener("changeSelection", function () {
        t.selection.isEmpty() != A && (A = !A, v.schedule())
      }), h(), C && t.onFocus();
      var E = function (e) {
        return 0 === e.selectionStart && e.selectionEnd === e.value.length
      };
      if (!u.setSelectionRange && u.createTextRange && (u.setSelectionRange = function (e, t) {
        var i = this.createTextRange();
        i.collapse(!0), i.moveStart("character", e), i.moveEnd("character", t), i.select()
      }, E = function (e) {
        try {
          var t = e.ownerDocument.selection.createRange()
        } catch (i) {
        }
        return t && t.parentElement() == e ? t.text == e.value : !1
      }), s.isOldIE) {
        var $ = !1, b = function (e) {
          if (!$) {
            var t = u.value;
            if (!m && t && t != d) {
              if (e && t == d[0]) return y.schedule();
              x(t), $ = !0, h(), $ = !1
            }
          }
        }, y = r.delayedCall(b);
        n.addListener(u, "propertychange", b);
        var B = {13: 1, 27: 1};
        n.addListener(u, "keyup", function (e) {
          return !m || u.value && !B[e.keyCode] || setTimeout(P, 0), (u.value.charCodeAt(0) || 0) < 129 ? y.call() : void (m ? I() : W())
        }), n.addListener(u, "keydown", function (e) {
          y.schedule(50)
        })
      }
      var D = function (e) {
        g ? g = !1 : E(u) ? (t.selectAll(), i()) : S && i(t.selection.isEmpty())
      }, S = null;
      this.setInputHandler = function (e) {
        S = e
      }, this.getInputHandler = function () {
        return S
      };
      var k = !1, x = function (e) {
        S && (e = S(e), S = null), f ? (i(), e && t.onPaste(e), f = !1) : e == d.charAt(0) ? k ? t.execCommand("del", {source: "ace"}) : t.execCommand("backspace", {source: "ace"}) : (e.substring(0, 2) == d ? e = e.substr(2) : e.charAt(0) == d.charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), k && (k = !1)
      }, L = function (e) {
        if (!m) {
          var t = u.value;
          x(t), h()
        }
      }, R = function (e, t) {
        var i = e.clipboardData || window.clipboardData;
        if (i && !a) {
          var n = l ? "Text" : "text/plain";
          return t ? i.setData(n, t) !== !1 : i.getData(n)
        }
      }, M = function (e, s) {
        var o = t.getCopyText();
        return o ? void (R(e, o) ? (s ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (g = !0, u.value = o, u.select(), setTimeout(function () {
          g = !1, h(), i(), s ? t.onCut() : t.onCopy()
        }))) : n.preventDefault(e)
      }, T = function (e) {
        M(e, !0)
      }, _ = function (e) {
        M(e, !1)
      }, O = function (e) {
        var o = R(e);
        "string" == typeof o ? (o && t.onPaste(o), s.isIE && setTimeout(i), n.preventDefault(e)) : (u.value = "", f = !0)
      };
      n.addCommandKeyListener(u, t.onCommandKey.bind(t)), n.addListener(u, "select", D), n.addListener(u, "input", L), n.addListener(u, "cut", T), n.addListener(u, "copy", _), n.addListener(u, "paste", O), "oncut" in u && "oncopy" in u && "onpaste" in u || n.addListener(e, "keydown", function (e) {
        if ((!s.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
          case 67:
            _(e);
            break;
          case 86:
            O(e);
            break;
          case 88:
            T(e)
        }
      });
      var W = function (e) {
        m || !t.onCompositionStart || t.$readOnly || (m = {}, t.onCompositionStart(), setTimeout(I, 0), t.on("mousedown", P), t.selection.isEmpty() || (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup())
      }, I = function () {
        if (m && t.onCompositionUpdate && !t.$readOnly) {
          var e = u.value.replace(/\x01/g, "");
          if (m.lastValue !== e && (t.onCompositionUpdate(e), m.lastValue && t.undo(), m.lastValue = e, m.lastValue)) {
            var i = t.selection.getRange();
            t.insert(m.lastValue), t.session.markUndoGroup(), m.range = t.selection.getRange(), t.selection.setRange(i), t.selection.clearSelection()
          }
        }
      }, P = function (e) {
        if (t.onCompositionEnd && !t.$readOnly) {
          var i = m;
          m = !1;
          var n = setTimeout(function () {
            n = null;
            var e = u.value.replace(/\x01/g, "");
            m || (e == i.lastValue ? h() : !i.lastValue && e && (h(), x(e)))
          });
          S = function (e) {
            return n && clearTimeout(n), e = e.replace(/\x01/g, ""), e == i.lastValue ? "" : (i.lastValue && n && t.undo(), e)
          }, t.onCompositionEnd(), t.removeListener("mousedown", P), "compositionend" == e.type && i.range && t.selection.setRange(i.range)
        }
      }, H = r.delayedCall(I, 50);
      n.addListener(u, "compositionstart", W), s.isGecko ? n.addListener(u, "text", function () {
        H.schedule()
      }) : (n.addListener(u, "keyup", function () {
        H.schedule()
      }), n.addListener(u, "keydown", function () {
        H.schedule()
      })), n.addListener(u, "compositionend", P), this.getElement = function () {
        return u
      }, this.setReadOnly = function (e) {
        u.readOnly = e
      }, this.onContextMenu = function (e) {
        k = !0, i(t.selection.isEmpty()), t._emit("nativecontextmenu", {target: t, domEvent: e}), this.moveToMouse(e, !0)
      }, this.moveToMouse = function (e, i) {
        if (i || !s.isOldIE) {
          p || (p = u.style.cssText), u.style.cssText = (i ? "z-index:100000;" : "") + "height:" + u.style.height + ";" + (s.isIE ? "opacity:0.1;" : "");
          var r = t.container.getBoundingClientRect(), a = o.computedStyle(t.container),
            l = r.top + (parseInt(a.borderTopWidth) || 0), h = r.left + (parseInt(r.borderLeftWidth) || 0),
            d = r.bottom - l - u.clientHeight - 2, g = function (e) {
              u.style.left = e.clientX - h - 2 + "px", u.style.top = Math.min(e.clientY - l - 2, d) + "px"
            };
          g(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), s.isWin && !s.isOldIE && n.capture(t.container, g, c))
        }
      }, this.onContextMenuClose = c;
      var N, z = function (e) {
        t.textInput.onContextMenu(e), c()
      };
      n.addListener(t.renderer.scroller, "contextmenu", z), n.addListener(u, "contextmenu", z)
    };
  t.TextInput = h
}), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, i) {
  "use strict";

  function n(e) {
    e.$clickSelection = null;
    var t = e.editor;
    t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
    var i = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
    i.forEach(function (t) {
      e[t] = this[t]
    }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
  }

  function s(e, t, i, n) {
    return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
  }

  function o(e, t) {
    if (e.start.row == e.end.row) var i = 2 * t.column - e.start.column - e.end.column; else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) var i = 2 * t.row - e.start.row - e.end.row; else var i = t.column - 4;
    return 0 > i ? {cursor: e.start, anchor: e.end} : {cursor: e.end, anchor: e.start}
  }

  var r = (e("../lib/dom"), e("../lib/event"), e("../lib/useragent"), 0);
  (function () {
    this.onMouseDown = function (e) {
      var t = e.inSelection(), i = e.getDocumentPosition();
      this.mousedownEvent = e;
      var n = this.editor, s = e.getButton();
      if (0 !== s) {
        var o = n.getSelectionRange(), r = o.isEmpty();
        return n.$blockScrolling++, r && n.selection.moveToPosition(i), n.$blockScrolling--, void n.textInput.onContextMenu(e.domEvent)
      }
      return this.mousedownEvent.time = Date.now(), !t || n.isFocused() || (n.focus(), !this.$focusTimout || this.$clickSelection || n.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(i, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e))
    }, this.startSelect = function (e, t) {
      e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
      var i = this.editor;
      i.$blockScrolling++, this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(e) : t || i.selection.moveToPosition(e), t || this.select(), i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(), i.setStyle("ace_selecting"), this.setState("select"), i.$blockScrolling--
    }, this.select = function () {
      var e, t = this.editor, i = t.renderer.screenToTextCoordinates(this.x, this.y);
      if (t.$blockScrolling++, this.$clickSelection) {
        var n = this.$clickSelection.comparePoint(i);
        if (-1 == n) e = this.$clickSelection.end; else if (1 == n) e = this.$clickSelection.start; else {
          var s = o(this.$clickSelection, i);
          i = s.cursor, e = s.anchor
        }
        t.selection.setSelectionAnchor(e.row, e.column)
      }
      t.selection.selectToPosition(i), t.$blockScrolling--, t.renderer.scrollCursorIntoView()
    }, this.extendSelectionBy = function (e) {
      var t, i = this.editor, n = i.renderer.screenToTextCoordinates(this.x, this.y),
        s = i.selection[e](n.row, n.column);
      if (i.$blockScrolling++, this.$clickSelection) {
        var r = this.$clickSelection.comparePoint(s.start), a = this.$clickSelection.comparePoint(s.end);
        if (-1 == r && 0 >= a) t = this.$clickSelection.end, (s.end.row != n.row || s.end.column != n.column) && (n = s.start); else if (1 == a && r >= 0) t = this.$clickSelection.start, (s.start.row != n.row || s.start.column != n.column) && (n = s.end); else if (-1 == r && 1 == a) n = s.end, t = s.start; else {
          var l = o(this.$clickSelection, n);
          n = l.cursor, t = l.anchor
        }
        i.selection.setSelectionAnchor(t.row, t.column)
      }
      i.selection.selectToPosition(n), i.$blockScrolling--, i.renderer.scrollCursorIntoView()
    }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
      this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
    }, this.focusWait = function () {
      var e = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
      (e > r || t - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
    }, this.onDoubleClick = function (e) {
      var t = e.getDocumentPosition(), i = this.editor, n = i.session, s = n.getBracketRange(t);
      s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = i.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = s, this.select()
    }, this.onTripleClick = function (e) {
      var t = e.getDocumentPosition(), i = this.editor;
      this.setState("selectByLines");
      var n = i.getSelectionRange();
      n.isMultiLine() && n.contains(t.row, t.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row), this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(t.row), this.select()
    }, this.onQuadClick = function (e) {
      var t = this.editor;
      t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
    }, this.onMouseWheel = function (e) {
      if (!e.getAccelKey()) {
        e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
        var t = e.domEvent.timeStamp, i = t - (this.$lastScrollTime || 0), n = this.editor,
          s = n.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
        return s || 200 > i ? (this.$lastScrollTime = t, n.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
      }
    }
  }).call(n.prototype), t.DefaultHandlers = n
}), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function (e, t, i) {
  "use strict";

  function n(e) {
    this.isOpen = !1, this.$element = null, this.$parentNode = e
  }

  var s = (e("./lib/oop"), e("./lib/dom"));
  (function () {
    this.$init = function () {
      return this.$element = s.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
    }, this.getElement = function () {
      return this.$element || this.$init()
    }, this.setText = function (e) {
      s.setInnerText(this.getElement(), e)
    }, this.setHtml = function (e) {
      this.getElement().innerHTML = e
    }, this.setPosition = function (e, t) {
      this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
    }, this.setClassName = function (e) {
      s.addCssClass(this.getElement(), e)
    }, this.show = function (e, t, i) {
      null != e && this.setText(e), null != t && null != i && this.setPosition(t, i), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
    }, this.hide = function () {
      this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
    }, this.getHeight = function () {
      return this.getElement().offsetHeight
    }, this.getWidth = function () {
      return this.getElement().offsetWidth
    }
  }).call(n.prototype), t.Tooltip = n
}), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function (e, t, i) {
  "use strict";

  function n(e) {
    function t() {
      var t = u.getDocumentPosition().row, s = l.$annotations[t];
      if (!s) return i();
      var o = r.session.getLength();
      if (t == o) {
        var a = r.renderer.pixelToScreenCoordinates(0, u.y).row, c = u.$pos;
        if (a > r.session.documentToScreenRow(c.row, c.column)) return i()
      }
      if (d != s) if (d = s.text.join("<br/>"), h.setHtml(d), h.show(), r.on("mousewheel", i), e.$tooltipFollowsMouse) n(u); else {
        var g = l.$cells[r.session.documentToScreenRow(t, 0)].element, f = g.getBoundingClientRect(),
          m = h.getElement().style;
        m.left = f.right + "px", m.top = f.bottom + "px"
      }
    }

    function i() {
      c && (c = clearTimeout(c)), d && (h.hide(), d = null, r.removeEventListener("mousewheel", i))
    }

    function n(e) {
      h.setPosition(e.x, e.y)
    }

    var r = e.editor, l = r.renderer.$gutterLayer, h = new s(r.container);
    e.editor.setDefaultHandler("guttermousedown", function (t) {
      if (r.isFocused() && 0 == t.getButton()) {
        var i = l.getRegion(t);
        if ("foldWidgets" != i) {
          var n = t.getDocumentPosition().row, s = r.session.selection;
          if (t.getShiftKey()) s.selectTo(n, 0); else {
            if (2 == t.domEvent.detail) return r.selectAll(), t.preventDefault();
            e.$clickSelection = r.selection.getLineRange(n)
          }
          return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
        }
      }
    });
    var c, u, d;
    e.editor.setDefaultHandler("guttermousemove", function (s) {
      var r = s.domEvent.target || s.domEvent.srcElement;
      return o.hasCssClass(r, "ace_fold-widget") ? i() : (d && e.$tooltipFollowsMouse && n(s), u = s, void (c || (c = setTimeout(function () {
        c = null, u && !e.isMousePressed ? t() : i()
      }, 50))))
    }), a.addListener(r.renderer.$gutter, "mouseout", function (e) {
      u = null, d && !c && (c = setTimeout(function () {
        c = null, i()
      }, 50))
    }), r.on("changeSession", i)
  }

  function s(e) {
    l.call(this, e)
  }

  var o = e("../lib/dom"), r = e("../lib/oop"), a = e("../lib/event"), l = e("../tooltip").Tooltip;
  r.inherits(s, l), function () {
    this.setPosition = function (e, t) {
      var i = window.innerWidth || document.documentElement.clientWidth,
        n = window.innerHeight || document.documentElement.clientHeight, s = this.getWidth(), o = this.getHeight();
      e += 15, t += 15, e + s > i && (e -= e + s - i), t + o > n && (t -= 20 + o), l.prototype.setPosition.call(this, e, t)
    }
  }.call(s.prototype), t.GutterHandler = n
}), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, i) {
  "use strict";
  var n = e("../lib/event"), s = e("../lib/useragent"), o = t.MouseEvent = function (e, t) {
    this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
  };
  (function () {
    this.stopPropagation = function () {
      n.stopPropagation(this.domEvent), this.propagationStopped = !0
    }, this.preventDefault = function () {
      n.preventDefault(this.domEvent), this.defaultPrevented = !0
    }, this.stop = function () {
      this.stopPropagation(), this.preventDefault()
    }, this.getDocumentPosition = function () {
      return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
    }, this.inSelection = function () {
      if (null !== this.$inSelection) return this.$inSelection;
      var e = this.editor, t = e.getSelectionRange();
      if (t.isEmpty()) this.$inSelection = !1; else {
        var i = this.getDocumentPosition();
        this.$inSelection = t.contains(i.row, i.column)
      }
      return this.$inSelection
    }, this.getButton = function () {
      return n.getButton(this.domEvent)
    }, this.getShiftKey = function () {
      return this.domEvent.shiftKey
    }, this.getAccelKey = s.isMac ? function () {
      return this.domEvent.metaKey
    } : function () {
      return this.domEvent.ctrlKey
    }
  }).call(o.prototype)
}), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, i) {
  "use strict";

  function n(e) {
    function t(e, t) {
      var i = Date.now(), n = !t || e.row != t.row, o = !t || e.column != t.column;
      if (!S || n || o) p.$blockScrolling += 1, p.moveCursorToPosition(e), p.$blockScrolling -= 1, S = i, k = {
        x: v,
        y: w
      }; else {
        var r = s(k.x, k.y, v, w);
        r > c ? S = null : i - S >= h && (p.renderer.scrollCursorIntoView(), S = null)
      }
    }

    function i(e, t) {
      var i = Date.now(), n = p.renderer.layerConfig.lineHeight, s = p.renderer.layerConfig.characterWidth,
        o = p.renderer.scroller.getBoundingClientRect(),
        r = {x: {left: v - o.left, right: o.right - v}, y: {top: w - o.top, bottom: o.bottom - w}},
        a = Math.min(r.x.left, r.x.right), h = Math.min(r.y.top, r.y.bottom), c = {row: e.row, column: e.column};
      2 >= a / s && (c.column += r.x.left < r.x.right ? -3 : 2), 1 >= h / n && (c.row += r.y.top < r.y.bottom ? -1 : 1);
      var u = e.row != c.row, d = e.column != c.column, g = !t || e.row != t.row;
      u || d && !g ? D ? i - D >= l && p.renderer.scrollCursorIntoView(c) : D = i : D = null
    }

    function n() {
      var e = b;
      b = p.renderer.screenToTextCoordinates(v, w), t(b, e), i(b, e)
    }

    function u() {
      $ = p.selection.toOrientedRange(), F = p.session.addMarker($, "ace_selection", p.getSelectionStyle()), p.clearSelection(), p.isFocused() && p.renderer.$cursorLayer.setBlinking(!1), clearInterval(E), n(), E = setInterval(n, 20), L = 0, r.addListener(document, "mousemove", g)
    }

    function d() {
      clearInterval(E), p.session.removeMarker(F), F = null, p.$blockScrolling += 1, p.selection.fromOrientedRange($), p.$blockScrolling -= 1, p.isFocused() && !B && p.renderer.$cursorLayer.setBlinking(!p.getReadOnly()), $ = null, b = null, L = 0, D = null, S = null, r.removeListener(document, "mousemove", g)
    }

    function g() {
      null == R && (R = setTimeout(function () {
        null != R && F && d()
      }, 20))
    }

    function f(e) {
      var t = e.types;
      return !t || Array.prototype.some.call(t, function (e) {
        return "text/plain" == e || "Text" == e
      })
    }

    function m(e) {
      var t = ["copy", "copymove", "all", "uninitialized"],
        i = ["move", "copymove", "linkmove", "all", "uninitialized"], n = a.isMac ? e.altKey : e.ctrlKey,
        s = "uninitialized";
      try {
        s = e.dataTransfer.effectAllowed.toLowerCase()
      } catch (e) {
      }
      var o = "none";
      return n && t.indexOf(s) >= 0 ? o = "copy" : i.indexOf(s) >= 0 ? o = "move" : t.indexOf(s) >= 0 && (o = "copy"), o
    }

    var p = e.editor, A = o.createElement("img");
    A.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a.isOpera && (A.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
    var C = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
    C.forEach(function (t) {
      e[t] = this[t]
    }, this), p.addEventListener("mousedown", this.onMouseDown.bind(e));
    var F, v, w, E, $, b, y, B, D, S, k, x = p.container, L = 0;
    this.onDragStart = function (e) {
      if (this.cancelDrag || !x.draggable) {
        var t = this;
        return setTimeout(function () {
          t.startSelect(), t.captureMouse(e)
        }, 0), e.preventDefault()
      }
      $ = p.getSelectionRange();
      var i = e.dataTransfer;
      i.effectAllowed = p.getReadOnly() ? "copy" : "copyMove", a.isOpera && (p.container.appendChild(A), A.scrollTop = 0), i.setDragImage && i.setDragImage(A, 0, 0), a.isOpera && p.container.removeChild(A), i.clearData(), i.setData("Text", p.session.getTextRange()), B = !0, this.setState("drag")
    }, this.onDragEnd = function (e) {
      if (x.draggable = !1, B = !1, this.setState(null), !p.getReadOnly()) {
        var t = e.dataTransfer.dropEffect;
        y || "move" != t || p.session.remove(p.getSelectionRange()), p.renderer.$cursorLayer.setBlinking(!0)
      }
      this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
    }, this.onDragEnter = function (e) {
      return !p.getReadOnly() && f(e.dataTransfer) ? (v = e.clientX, w = e.clientY, F || u(), L++, e.dataTransfer.dropEffect = y = m(e), r.preventDefault(e)) : void 0
    }, this.onDragOver = function (e) {
      return !p.getReadOnly() && f(e.dataTransfer) ? (v = e.clientX, w = e.clientY, F || (u(), L++), null !== R && (R = null), e.dataTransfer.dropEffect = y = m(e), r.preventDefault(e)) : void 0
    }, this.onDragLeave = function (e) {
      return L--, 0 >= L && F ? (d(), y = null, r.preventDefault(e)) : void 0
    }, this.onDrop = function (e) {
      if (b) {
        var t = e.dataTransfer;
        if (B) switch (y) {
          case "move":
            $ = $.contains(b.row, b.column) ? {start: b, end: b} : p.moveText($, b);
            break;
          case "copy":
            $ = p.moveText($, b, !0)
        } else {
          var i = t.getData("Text");
          $ = {start: b, end: p.session.insert(b, i)}, p.focus(), y = null
        }
        return d(), r.preventDefault(e)
      }
    }, r.addListener(x, "dragstart", this.onDragStart.bind(e)), r.addListener(x, "dragend", this.onDragEnd.bind(e)), r.addListener(x, "dragenter", this.onDragEnter.bind(e)), r.addListener(x, "dragover", this.onDragOver.bind(e)), r.addListener(x, "dragleave", this.onDragLeave.bind(e)), r.addListener(x, "drop", this.onDrop.bind(e));
    var R = null
  }

  function s(e, t, i, n) {
    return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
  }

  var o = e("../lib/dom"), r = e("../lib/event"), a = e("../lib/useragent"), l = 200, h = 200, c = 5;
  (function () {
    this.dragWait = function () {
      var e = Date.now() - this.mousedownEvent.time;
      e > this.editor.getDragDelay() && this.startDrag()
    }, this.dragWaitEnd = function () {
      var e = this.editor.container;
      e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
    }, this.dragReadyEnd = function (e) {
      this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
    }, this.startDrag = function () {
      this.cancelDrag = !1;
      var e = this.editor, t = e.container;
      t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
      var i = a.isWin ? "default" : "move";
      e.renderer.setCursorStyle(i), this.setState("dragReady")
    }, this.onMouseDrag = function (e) {
      var t = this.editor.container;
      if (a.isIE && "dragReady" == this.state) {
        var i = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
        i > 3 && t.dragDrop()
      }
      if ("dragWait" === this.state) {
        var i = s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
        i > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
      }
    }, this.onMouseDown = function (e) {
      if (this.$dragEnabled) {
        this.mousedownEvent = e;
        var t = this.editor, i = e.inSelection(), n = e.getButton(), s = e.domEvent.detail || 1;
        if (1 === s && 0 === n && i) {
          if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
          this.mousedownEvent.time = Date.now();
          var o = e.domEvent.target || e.domEvent.srcElement;
          if ("unselectable" in o && (o.unselectable = "on"), t.getDragDelay()) {
            if (a.isWebKit) {
              this.cancelDrag = !0;
              var r = t.container;
              r.draggable = !0
            }
            this.setState("dragWait")
          } else this.startDrag();
          this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
        }
      }
    }
  }).call(n.prototype), t.DragdropHandler = n
}), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (e, t, i) {
  "use strict";
  var n = e("./dom");
  t.get = function (e, t) {
    var i = new XMLHttpRequest;
    i.open("GET", e, !0), i.onreadystatechange = function () {
      4 === i.readyState && t(i.responseText)
    }, i.send(null)
  }, t.loadScript = function (e, t) {
    var i = n.getDocumentHead(), s = document.createElement("script");
    s.src = e, i.appendChild(s), s.onload = s.onreadystatechange = function (e, i) {
      (i || !s.readyState || "loaded" == s.readyState || "complete" == s.readyState) && (s = s.onload = s.onreadystatechange = null, i || t())
    }
  }, t.qualifyURL = function (e) {
    var t = document.createElement("a");
    return t.href = e, t.href
  }
}), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = {}, s = function () {
    this.propagationStopped = !0
  }, o = function () {
    this.defaultPrevented = !0
  };
  n._emit = n._dispatchEvent = function (e, t) {
    this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
    var i = this._eventRegistry[e] || [], n = this._defaultHandlers[e];
    if (i.length || n) {
      "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = s), t.preventDefault || (t.preventDefault = o), i = i.slice();
      for (var r = 0; r < i.length && (i[r](t, this), !t.propagationStopped); r++) ;
      return n && !t.defaultPrevented ? n(t, this) : void 0
    }
  }, n._signal = function (e, t) {
    var i = (this._eventRegistry || {})[e];
    if (i) {
      i = i.slice();
      for (var n = 0; n < i.length; n++) i[n](t, this)
    }
  }, n.once = function (e, t) {
    var i = this;
    t && this.addEventListener(e, function n() {
      i.removeEventListener(e, n), t.apply(null, arguments)
    })
  }, n.setDefaultHandler = function (e, t) {
    var i = this._defaultHandlers;
    if (i || (i = this._defaultHandlers = {_disabled_: {}}), i[e]) {
      var n = i[e], s = i._disabled_[e];
      s || (i._disabled_[e] = s = []), s.push(n);
      var o = s.indexOf(t);
      -1 != o && s.splice(o, 1)
    }
    i[e] = t
  }, n.removeDefaultHandler = function (e, t) {
    var i = this._defaultHandlers;
    if (i) {
      var n = i._disabled_[e];
      if (i[e] == t) {
        i[e];
        n && this.setDefaultHandler(e, n.pop())
      } else if (n) {
        var s = n.indexOf(t);
        -1 != s && n.splice(s, 1)
      }
    }
  }, n.on = n.addEventListener = function (e, t, i) {
    this._eventRegistry = this._eventRegistry || {};
    var n = this._eventRegistry[e];
    return n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n[i ? "unshift" : "push"](t), t
  }, n.off = n.removeListener = n.removeEventListener = function (e, t) {
    this._eventRegistry = this._eventRegistry || {};
    var i = this._eventRegistry[e];
    if (i) {
      var n = i.indexOf(t);
      -1 !== n && i.splice(n, 1)
    }
  }, n.removeAllListeners = function (e) {
    this._eventRegistry && (this._eventRegistry[e] = [])
  }, t.EventEmitter = n
}), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, i) {
  "no use strict";

  function n(e) {
    "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
  }

  function s(e, t) {
    var i = new Error(e);
    i.data = t, "object" == typeof console && console.error && console.error(i), setTimeout(function () {
      throw i
    })
  }

  var o = e("./oop"), r = e("./event_emitter").EventEmitter, a = {
    setOptions: function (e) {
      Object.keys(e).forEach(function (t) {
        this.setOption(t, e[t])
      }, this)
    }, getOptions: function (e) {
      var t = {};
      return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e = Object.keys(this.$options), e.forEach(function (e) {
        t[e] = this.getOption(e)
      }, this), t
    }, setOption: function (e, t) {
      if (this["$" + e] !== t) {
        var i = this.$options[e];
        if (!i) return n('misspelled option "' + e + '"');
        if (i.forwardTo) return this[i.forwardTo] && this[i.forwardTo].setOption(e, t);
        i.handlesSet || (this["$" + e] = t), i && i.set && i.set.call(this, t)
      }
    }, getOption: function (e) {
      var t = this.$options[e];
      return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : n('misspelled option "' + e + '"')
    }
  }, l = function () {
    this.$defaultOptions = {}
  };
  (function () {
    o.implement(this, r), this.defineOptions = function (e, t, i) {
      return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(i).forEach(function (t) {
        var n = i[t];
        "string" == typeof n && (n = {forwardTo: n}), n.name || (n.name = t), e.$options[n.name] = n, "initialValue" in n && (e["$" + n.name] = n.initialValue)
      }), o.implement(e, a), this
    }, this.resetOptions = function (e) {
      Object.keys(e.$options).forEach(function (t) {
        var i = e.$options[t];
        "value" in i && e.setOption(t, i.value)
      })
    }, this.setDefaultValue = function (e, t, i) {
      var n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
      n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) : n[t].value = i)
    }, this.setDefaultValues = function (e, t) {
      Object.keys(t).forEach(function (i) {
        this.setDefaultValue(e, i, t[i])
      }, this)
    }, this.warn = n, this.reportError = s
  }).call(l.prototype), t.AppConfig = l
}), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function (e, t, i) {
  "no use strict";

  function n(n) {
    if (h.packaged = n || e.packaged || i.packaged || l.define && define.packaged, !l.document) return "";
    for (var o = {}, r = "", a = document.currentScript || document._currentScript, c = a && a.ownerDocument || document, u = c.getElementsByTagName("script"), d = 0; d < u.length; d++) {
      var g = u[d], f = g.src || g.getAttribute("src");
      if (f) {
        for (var m = g.attributes, p = 0, A = m.length; A > p; p++) {
          var C = m[p];
          0 === C.name.indexOf("data-ace-") && (o[s(C.name.replace(/^data-ace-/, ""))] = C.value)
        }
        var F = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
        F && (r = F[1])
      }
    }
    r && (o.base = o.base || r, o.packaged = !0), o.basePath = o.base, o.workerPath = o.workerPath || o.base, o.modePath = o.modePath || o.base, o.themePath = o.themePath || o.base, delete o.base;
    for (var v in o) "undefined" != typeof o[v] && t.set(v, o[v])
  }

  function s(e) {
    return e.replace(/-(.)/g, function (e, t) {
      return t.toUpperCase()
    })
  }

  var o = e("./lib/lang"), r = (e("./lib/oop"), e("./lib/net")), a = e("./lib/app_config").AppConfig;
  i.exports = t = new a;
  var l = function () {
      return this
    }(),
    h = {packaged: !1, workerPath: null, modePath: null, themePath: null, basePath: "", suffix: ".js", $moduleUrls: {}};
  t.get = function (e) {
    if (!h.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
    return h[e]
  }, t.set = function (e, t) {
    if (!h.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
    h[e] = t
  }, t.all = function () {
    return o.copyObject(h)
  }, t.moduleUrl = function (e, t) {
    if (h.$moduleUrls[e]) return h.$moduleUrls[e];
    var i = e.split("/");
    t = t || i[i.length - 2] || "";
    var n = "snippets" == t ? "/" : "-", s = i[i.length - 1];
    if ("worker" == t && "-" == n) {
      var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
      s = s.replace(o, "")
    }
    (!s || s == t) && i.length > 1 && (s = i[i.length - 2]);
    var r = h[t + "Path"];
    return null == r ? r = h.basePath : "/" == n && (t = n = ""), r && "/" != r.slice(-1) && (r += "/"), r + t + n + s + this.get("suffix")
  }, t.setModuleUrl = function (e, t) {
    return h.$moduleUrls[e] = t
  }, t.$loading = {}, t.loadModule = function (i, n) {
    var s, o;
    Array.isArray(i) && (o = i[0], i = i[1]);
    try {
      s = e(i)
    } catch (a) {
    }
    if (s && !t.$loading[i]) return n && n(s);
    if (t.$loading[i] || (t.$loading[i] = []), t.$loading[i].push(n), !(t.$loading[i].length > 1)) {
      var l = function () {
        e([i], function (e) {
          t._emit("load.module", {name: i, module: e});
          var n = t.$loading[i];
          t.$loading[i] = null, n.forEach(function (t) {
            t && t(e)
          })
        })
      };
      return t.get("packaged") ? void r.loadScript(t.moduleUrl(i, o), l) : l()
    }
  }, n(!0), t.init = n
}), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function (e, t, i) {
  "use strict";
  var n = e("../lib/event"), s = e("../lib/useragent"), o = e("./default_handlers").DefaultHandlers,
    r = e("./default_gutter_handler").GutterHandler, a = e("./mouse_event").MouseEvent,
    l = e("./dragdrop_handler").DragdropHandler, h = e("../config"), c = function (e) {
      var t = this;
      this.editor = e, new o(this), new r(this), new l(this);
      var i = function (t) {
        document.hasFocus && document.hasFocus() || window.focus(), e.focus()
      }, a = e.renderer.getMouseEventTarget();
      n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener(a, [400, 300, 250], this, "onMouseEvent"), e.renderer.scrollBarV && (n.addMultiMouseDownListener(e.renderer.scrollBarV.inner, [400, 300, 250], this, "onMouseEvent"), n.addMultiMouseDownListener(e.renderer.scrollBarH.inner, [400, 300, 250], this, "onMouseEvent"), s.isIE && (n.addListener(e.renderer.scrollBarV.element, "mousedown", i), n.addListener(e.renderer.scrollBarH.element, "mousedown", i))), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"));
      var h = e.renderer.$gutter;
      n.addListener(h, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(h, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(h, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(h, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(a, "mousedown", i), n.addListener(h, "mousedown", function (t) {
        return e.focus(), n.preventDefault(t)
      }), e.on("mousemove", function (i) {
        if (!t.state && !t.$dragDelay && t.$dragEnabled) {
          var n = e.renderer.screenToTextCoordinates(i.x, i.y), s = e.session.selection.getRange(), o = e.renderer;
          !s.isEmpty() && s.insideStart(n.row, n.column) ? o.setCursorStyle("default") : o.setCursorStyle("")
        }
      })
    };
  (function () {
    this.onMouseEvent = function (e, t) {
      this.editor._emit(e, new a(t, this.editor))
    }, this.onMouseMove = function (e, t) {
      var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
      i && i.length && this.editor._emit(e, new a(t, this.editor))
    }, this.onMouseWheel = function (e, t) {
      var i = new a(t, this.editor);
      i.speed = 2 * this.$scrollSpeed, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this.editor._emit(e, i)
    }, this.setState = function (e) {
      this.state = e
    }, this.captureMouse = function (e, t) {
      this.x = e.x, this.y = e.y, this.isMousePressed = !0;
      var i = this.editor.renderer;
      i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = null);
      var o = this, r = function (e) {
        if (e) {
          if (s.isWebKit && !e.which && o.releaseMouse) return o.releaseMouse();
          o.x = e.clientX, o.y = e.clientY, t && t(e), o.mouseEvent = new a(e, o.editor), o.$mouseMoved = !0
        }
      }, l = function (e) {
        clearInterval(c), h(), o[o.state + "End"] && o[o.state + "End"](e), o.state = "", null == i.$keepTextAreaAtCursor && (i.$keepTextAreaAtCursor = !0, i.$moveTextAreaToCursor()), o.isMousePressed = !1, o.$onCaptureMouseMove = o.releaseMouse = null, e && o.onMouseEvent("mouseup", e)
      }, h = function () {
        o[o.state] && o[o.state](), o.$mouseMoved = !1
      };
      if (s.isOldIE && "dblclick" == e.domEvent.type) return setTimeout(function () {
        l(e)
      });
      o.$onCaptureMouseMove = r, o.releaseMouse = n.capture(this.editor.container, r, l);
      var c = setInterval(h, 20)
    }, this.releaseMouse = null, this.cancelContextMenu = function () {
      var e = function (t) {
        t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && n.stopEvent(t.domEvent))
      }.bind(this);
      setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
    }
  }).call(c.prototype), h.defineOptions(c.prototype, "mouseHandler", {
    scrollSpeed: {initialValue: 2},
    dragDelay: {initialValue: s.isMac ? 150 : 0},
    dragEnabled: {initialValue: !0},
    focusTimout: {initialValue: 0},
    tooltipFollowsMouse: {initialValue: !0}
  }), t.MouseHandler = c
}), ace.define("ace/mouse/fold_handler", ["require", "exports", "module"], function (e, t, i) {
  "use strict";

  function n(e) {
    e.on("click", function (t) {
      var i = t.getDocumentPosition(), n = e.session, s = n.getFoldAt(i.row, i.column, 1);
      s && (t.getAccelKey() ? n.removeFold(s) : n.expandFold(s), t.stop())
    }), e.on("gutterclick", function (t) {
      var i = e.renderer.$gutterLayer.getRegion(t);
      if ("foldWidgets" == i) {
        var n = t.getDocumentPosition().row, s = e.session;
        s.foldWidgets && s.foldWidgets[n] && e.session.onFoldWidgetClick(n, t), e.isFocused() || e.focus(), t.stop()
      }
    }), e.on("gutterdblclick", function (t) {
      var i = e.renderer.$gutterLayer.getRegion(t);
      if ("foldWidgets" == i) {
        var n = t.getDocumentPosition().row, s = e.session, o = s.getParentFoldRangeData(n, !0),
          r = o.range || o.firstRange;
        if (r) {
          n = r.start.row;
          var a = s.getFoldAt(n, s.getLine(n).length, 1);
          a ? s.removeFold(a) : (s.addFold("...", r), e.renderer.scrollCursorIntoView({row: r.start.row, column: 0}))
        }
        t.stop()
      }
    })
  }

  t.FoldHandler = n
}), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (e, t, i) {
  "use strict";
  var n = e("../lib/keys"), s = e("../lib/event"), o = function (e) {
    this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
  };
  (function () {
    this.setDefaultHandler = function (e) {
      this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
    }, this.setKeyboardHandler = function (e) {
      var t = this.$handlers;
      if (t[t.length - 1] != e) {
        for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(t[t.length - 1]);
        this.addKeyboardHandler(e, 1)
      }
    }, this.addKeyboardHandler = function (e, t) {
      if (e) {
        "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
        var i = this.$handlers.indexOf(e);
        -1 != i && this.$handlers.splice(i, 1), void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == i && e.attach && e.attach(this.$editor)
      }
    }, this.removeKeyboardHandler = function (e) {
      var t = this.$handlers.indexOf(e);
      return -1 == t ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
    }, this.getKeyboardHandler = function () {
      return this.$handlers[this.$handlers.length - 1]
    }, this.getStatusText = function () {
      var e = this.$data, t = e.editor;
      return this.$handlers.map(function (i) {
        return i.getStatusText && i.getStatusText(t, e) || ""
      }).filter(Boolean).join(" ")
    }, this.$callKeyboardHandlers = function (e, t, i, n) {
      for (var o, r = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && (o = this.$handlers[l].handleKeyboard(this.$data, e, t, i, n), !(o && o.command && (r = "null" == o.command ? !0 : a.exec(o.command, this.$editor, o.args, n), r && n && -1 != e && 1 != o.passEvent && 1 != o.command.passEvent && s.stopEvent(n), r)));) ;
      return r
    }, this.onCommandKey = function (e, t, i) {
      var s = n.keyCodeToString(i);
      this.$callKeyboardHandlers(t, s, i, e)
    }, this.onTextInput = function (e) {
      var t = this.$callKeyboardHandlers(-1, e);
      t || this.$editor.commands.exec("insertstring", this.$editor, e)
    }
  }).call(o.prototype), t.KeyBinding = o
}), ace.define("ace/range", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = function (e, t) {
    return e.row - t.row || e.column - t.column
  }, s = function (e, t, i, n) {
    this.start = {row: e, column: t}, this.end = {row: i, column: n}
  };
  (function () {
    this.isEqual = function (e) {
      return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
    }, this.toString = function () {
      return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
    }, this.contains = function (e, t) {
      return 0 == this.compare(e, t)
    }, this.compareRange = function (e) {
      var t, i = e.end, n = e.start;
      return t = this.compare(i.row, i.column), 1 == t ? (t = this.compare(n.row, n.column), 1 == t ? 2 : 0 == t ? 1 : 0) : -1 == t ? -2 : (t = this.compare(n.row, n.column), -1 == t ? -1 : 1 == t ? 42 : 0)
    }, this.comparePoint = function (e) {
      return this.compare(e.row, e.column)
    }, this.containsRange = function (e) {
      return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
    }, this.intersects = function (e) {
      var t = this.compareRange(e);
      return -1 == t || 0 == t || 1 == t
    }, this.isEnd = function (e, t) {
      return this.end.row == e && this.end.column == t
    }, this.isStart = function (e, t) {
      return this.start.row == e && this.start.column == t
    }, this.setStart = function (e, t) {
      "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
    }, this.setEnd = function (e, t) {
      "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
    }, this.inside = function (e, t) {
      return 0 == this.compare(e, t) ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1
    }, this.insideStart = function (e, t) {
      return 0 == this.compare(e, t) ? this.isEnd(e, t) ? !1 : !0 : !1
    }, this.insideEnd = function (e, t) {
      return 0 == this.compare(e, t) ? this.isStart(e, t) ? !1 : !0 : !1
    }, this.compare = function (e, t) {
      return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
    }, this.compareStart = function (e, t) {
      return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
    }, this.compareEnd = function (e, t) {
      return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
    }, this.compareInside = function (e, t) {
      return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
    }, this.clipRows = function (e, t) {
      if (this.end.row > t) var i = {row: t + 1, column: 0}; else if (this.end.row < e) var i = {row: e, column: 0};
      if (this.start.row > t) var n = {row: t + 1, column: 0}; else if (this.start.row < e) var n = {row: e, column: 0};
      return s.fromPoints(n || this.start, i || this.end)
    }, this.extend = function (e, t) {
      var i = this.compare(e, t);
      if (0 == i) return this;
      if (-1 == i) var n = {row: e, column: t}; else var o = {row: e, column: t};
      return s.fromPoints(n || this.start, o || this.end)
    }, this.isEmpty = function () {
      return this.start.row === this.end.row && this.start.column === this.end.column
    }, this.isMultiLine = function () {
      return this.start.row !== this.end.row
    }, this.clone = function () {
      return s.fromPoints(this.start, this.end)
    }, this.collapseRows = function () {
      return 0 == this.end.column ? new s(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new s(this.start.row, 0, this.end.row, 0)
    }, this.toScreenRange = function (e) {
      var t = e.documentToScreenPosition(this.start), i = e.documentToScreenPosition(this.end);
      return new s(t.row, t.column, i.row, i.column)
    }, this.moveBy = function (e, t) {
      this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
    }
  }).call(s.prototype), s.fromPoints = function (e, t) {
    return new s(e.row, e.column, t.row, t.column)
  }, s.comparePoints = n, s.comparePoints = function (e, t) {
    return e.row - t.row || e.column - t.column
  }, t.Range = s
}), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/lang"), o = e("./lib/event_emitter").EventEmitter, r = e("./range").Range,
    a = function (e) {
      this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
      var t = this;
      this.lead.on("change", function (e) {
        t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
      }), this.selectionAnchor.on("change", function () {
        t.$isEmpty || t._emit("changeSelection")
      })
    };
  (function () {
    n.implement(this, o), this.isEmpty = function () {
      return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
    }, this.isMultiLine = function () {
      return this.isEmpty() ? !1 : this.getRange().isMultiLine()
    }, this.getCursor = function () {
      return this.lead.getPosition()
    }, this.setSelectionAnchor = function (e, t) {
      this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
    }, this.getSelectionAnchor = function () {
      return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
    }, this.getSelectionLead = function () {
      return this.lead.getPosition()
    }, this.shiftSelection = function (e) {
      if (this.$isEmpty) return void this.moveCursorTo(this.lead.row, this.lead.column + e);
      var t = this.getSelectionAnchor(), i = this.getSelectionLead(), n = this.isBackwards();
      n && 0 === t.column || this.setSelectionAnchor(t.row, t.column + e), (n || 0 !== i.column) && this.$moveSelection(function () {
        this.moveCursorTo(i.row, i.column + e)
      })
    }, this.isBackwards = function () {
      var e = this.anchor, t = this.lead;
      return e.row > t.row || e.row == t.row && e.column > t.column
    }, this.getRange = function () {
      var e = this.anchor, t = this.lead;
      return this.isEmpty() ? r.fromPoints(t, t) : this.isBackwards() ? r.fromPoints(t, e) : r.fromPoints(e, t)
    }, this.clearSelection = function () {
      this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
    }, this.selectAll = function () {
      var e = this.doc.getLength() - 1;
      this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
    }, this.setRange = this.setSelectionRange = function (e, t) {
      t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.getRange().isEmpty() && (this.$isEmpty = !0), this.$desiredColumn = null
    }, this.$moveSelection = function (e) {
      var t = this.lead;
      this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
    }, this.selectTo = function (e, t) {
      this.$moveSelection(function () {
        this.moveCursorTo(e, t)
      })
    }, this.selectToPosition = function (e) {
      this.$moveSelection(function () {
        this.moveCursorToPosition(e)
      })
    }, this.moveTo = function (e, t) {
      this.clearSelection(), this.moveCursorTo(e, t)
    }, this.moveToPosition = function (e) {
      this.clearSelection(), this.moveCursorToPosition(e)
    }, this.selectUp = function () {
      this.$moveSelection(this.moveCursorUp)
    }, this.selectDown = function () {
      this.$moveSelection(this.moveCursorDown)
    }, this.selectRight = function () {
      this.$moveSelection(this.moveCursorRight)
    }, this.selectLeft = function () {
      this.$moveSelection(this.moveCursorLeft)
    }, this.selectLineStart = function () {
      this.$moveSelection(this.moveCursorLineStart)
    }, this.selectLineEnd = function () {
      this.$moveSelection(this.moveCursorLineEnd)
    }, this.selectFileEnd = function () {
      this.$moveSelection(this.moveCursorFileEnd)
    }, this.selectFileStart = function () {
      this.$moveSelection(this.moveCursorFileStart)
    }, this.selectWordRight = function () {
      this.$moveSelection(this.moveCursorWordRight)
    }, this.selectWordLeft = function () {
      this.$moveSelection(this.moveCursorWordLeft)
    }, this.getWordRange = function (e, t) {
      if ("undefined" == typeof t) {
        var i = e || this.lead;
        e = i.row, t = i.column
      }
      return this.session.getWordRange(e, t)
    }, this.selectWord = function () {
      this.setSelectionRange(this.getWordRange())
    }, this.selectAWord = function () {
      var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
      this.setSelectionRange(t)
    }, this.getLineRange = function (e, t) {
      var i, n = "number" == typeof e ? e : this.lead.row, s = this.session.getFoldLine(n);
      return s ? (n = s.start.row, i = s.end.row) : i = n, t === !0 ? new r(n, 0, i, this.session.getLine(i).length) : new r(n, 0, i + 1, 0)
    }, this.selectLine = function () {
      this.setSelectionRange(this.getLineRange())
    }, this.moveCursorUp = function () {
      this.moveCursorBy(-1, 0)
    }, this.moveCursorDown = function () {
      this.moveCursorBy(1, 0)
    }, this.moveCursorLeft = function () {
      var e, t = this.lead.getPosition();
      if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column); else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length); else {
        var i = this.session.getTabSize();
        this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column - i, t.column).split(" ").length - 1 == i ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
      }
    }, this.moveCursorRight = function () {
      var e, t = this.lead.getPosition();
      if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column); else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0); else {
        var i = this.session.getTabSize(), t = this.lead;
        this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column, t.column + i).split(" ").length - 1 == i ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
      }
    }, this.moveCursorLineStart = function () {
      var e = this.lead.row, t = this.lead.column, i = this.session.documentToScreenRow(e, t),
        n = this.session.screenToDocumentPosition(i, 0), s = this.session.getDisplayLine(e, null, n.row, n.column),
        o = s.match(/^\s*/);
      o[0].length == t || this.session.$useEmacsStyleLineStart || (n.column += o[0].length), this.moveCursorToPosition(n)
    }, this.moveCursorLineEnd = function () {
      var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
      if (this.lead.column == t.column) {
        var i = this.session.getLine(t.row);
        if (t.column == i.length) {
          var n = i.search(/\s+$/);
          n > 0 && (t.column = n)
        }
      }
      this.moveCursorTo(t.row, t.column)
    }, this.moveCursorFileEnd = function () {
      var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
      this.moveCursorTo(e, t)
    }, this.moveCursorFileStart = function () {
      this.moveCursorTo(0, 0)
    }, this.moveCursorLongWordRight = function () {
      var e, t = this.lead.row, i = this.lead.column, n = this.doc.getLine(t), s = n.substring(i);
      this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
      var o = this.session.getFoldAt(t, i, 1);
      return o ? void this.moveCursorTo(o.end.row, o.end.column) : ((e = this.session.nonTokenRe.exec(s)) && (i += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, s = n.substring(i)), i >= n.length ? (this.moveCursorTo(t, n.length), this.moveCursorRight(), void (t < this.doc.getLength() - 1 && this.moveCursorWordRight())) : ((e = this.session.tokenRe.exec(s)) && (i += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, i)))
    }, this.moveCursorLongWordLeft = function () {
      var e, t = this.lead.row, i = this.lead.column;
      if (e = this.session.getFoldAt(t, i, -1)) return void this.moveCursorTo(e.start.row, e.start.column);
      var n = this.session.getFoldStringAt(t, i, -1);
      null == n && (n = this.doc.getLine(t).substring(0, i));
      var o, r = s.stringReverse(n);
      return this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, (o = this.session.nonTokenRe.exec(r)) && (i -= this.session.nonTokenRe.lastIndex, r = r.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), 0 >= i ? (this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft())) : ((o = this.session.tokenRe.exec(r)) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, i))
    }, this.$shortWordEndIndex = function (e) {
      var t, i, n = 0, s = /\s/, o = this.session.tokenRe;
      if (o.lastIndex = 0, t = this.session.tokenRe.exec(e)) n = this.session.tokenRe.lastIndex; else {
        for (; (i = e[n]) && s.test(i);) n++;
        if (1 > n) for (o.lastIndex = 0; (i = e[n]) && !o.test(i);) if (o.lastIndex = 0, n++, s.test(i)) {
          if (n > 2) {
            n--;
            break
          }
          for (; (i = e[n]) && s.test(i);) n++;
          if (n > 2) break
        }
      }
      return o.lastIndex = 0, n
    }, this.moveCursorShortWordRight = function () {
      var e = this.lead.row, t = this.lead.column, i = this.doc.getLine(e), n = i.substring(t),
        s = this.session.getFoldAt(e, t, 1);
      if (s) return this.moveCursorTo(s.end.row, s.end.column);
      if (t == i.length) {
        var o = this.doc.getLength();
        do e++, n = this.doc.getLine(e); while (o > e && /^\s*$/.test(n));
        /^\s+/.test(n) || (n = ""), t = 0
      }
      var r = this.$shortWordEndIndex(n);
      this.moveCursorTo(e, t + r)
    }, this.moveCursorShortWordLeft = function () {
      var e, t = this.lead.row, i = this.lead.column;
      if (e = this.session.getFoldAt(t, i, -1)) return this.moveCursorTo(e.start.row, e.start.column);
      var n = this.session.getLine(t).substring(0, i);
      if (0 === i) {
        do t--, n = this.doc.getLine(t); while (t > 0 && /^\s*$/.test(n));
        i = n.length, /\s+$/.test(n) || (n = "")
      }
      var o = s.stringReverse(n), r = this.$shortWordEndIndex(o);
      return this.moveCursorTo(t, i - r)
    }, this.moveCursorWordRight = function () {
      this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
    }, this.moveCursorWordLeft = function () {
      this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
    }, this.moveCursorBy = function (e, t) {
      var i = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
      0 === t && (this.$desiredColumn ? i.column = this.$desiredColumn : this.$desiredColumn = i.column);
      var n = this.session.screenToDocumentPosition(i.row + e, i.column);
      0 !== e && 0 === t && n.row === this.lead.row && n.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[n.row] && n.row++, this.moveCursorTo(n.row, n.column + t, 0 === t)
    }, this.moveCursorToPosition = function (e) {
      this.moveCursorTo(e.row, e.column)
    }, this.moveCursorTo = function (e, t, i) {
      var n = this.session.getFoldAt(e, t, 1);
      n && (e = n.start.row, t = n.start.column), this.$keepDesiredColumnOnChange = !0, this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, i || (this.$desiredColumn = null)
    }, this.moveCursorToScreen = function (e, t, i) {
      var n = this.session.screenToDocumentPosition(e, t);
      this.moveCursorTo(n.row, n.column, i)
    }, this.detach = function () {
      this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
    }, this.fromOrientedRange = function (e) {
      this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
    }, this.toOrientedRange = function (e) {
      var t = this.getRange();
      return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
    }, this.getRangeOfMovements = function (e) {
      var t = this.getCursor();
      try {
        e.call(null, this);
        var i = this.getCursor();
        return r.fromPoints(t, i)
      } catch (n) {
        return r.fromPoints(t, t)
      } finally {
        this.moveCursorToPosition(t)
      }
    }, this.toJSON = function () {
      if (this.rangeCount) var e = this.ranges.map(function (e) {
        var t = e.clone();
        return t.isBackwards = e.cursor == e.start, t
      }); else {
        var e = this.getRange();
        e.isBackwards = this.isBackwards()
      }
      return e
    }, this.fromJSON = function (e) {
      if (void 0 == e.start) {
        if (this.rangeList) {
          this.toSingleRange(e[0]);
          for (var t = e.length; t--;) {
            var i = r.fromPoints(e[t].start, e[t].end);
            e.isBackwards && (i.cursor = i.start), this.addRange(i, !0)
          }
          return
        }
        e = e[0]
      }
      this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
    }, this.isEqual = function (e) {
      if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
      if (!e.length || !this.ranges) return this.getRange().isEqual(e);
      for (var t = this.ranges.length; t--;) if (!this.ranges[t].isEqual(e[t])) return !1;
      return !0
    }
  }).call(a.prototype), t.Selection = a
}), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function (e, t, i) {
  "use strict";
  var n = e("./config"), s = 2e3, o = function (e) {
    this.states = e, this.regExps = {}, this.matchMappings = {};
    for (var t in this.states) {
      for (var i = this.states[t], n = [], s = 0, o = this.matchMappings[t] = {defaultToken: "text"}, r = "g", a = [], l = 0; l < i.length; l++) {
        var h = i[l];
        if (h.defaultToken && (o.defaultToken = h.defaultToken), h.caseInsensitive && (r = "gi"), null != h.regex) {
          h.regex instanceof RegExp && (h.regex = h.regex.toString().slice(1, -1));
          var c = h.regex, u = new RegExp("(?:(" + c + ")|(.))").exec("a").length - 2;
          Array.isArray(h.token) ? 1 == h.token.length || 1 == u ? h.token = h.token[0] : u - 1 != h.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
            rule: h,
            groupCount: u - 1
          }), h.token = h.token[0]) : (h.tokenArray = h.token, h.token = null, h.onMatch = this.$arrayTokens) : "function" != typeof h.token || h.onMatch || (u > 1 ? h.onMatch = this.$applyToken : h.onMatch = h.token), u > 1 && (/\\\d/.test(h.regex) ? c = h.regex.replace(/\\([0-9]+)/g, function (e, t) {
            return "\\" + (parseInt(t, 10) + s + 1)
          }) : (u = 1, c = this.removeCapturingGroups(h.regex)), h.splitRegex || "string" == typeof h.token || a.push(h)), o[s] = l, s += u, n.push(c), h.onMatch || (h.onMatch = null)
        }
      }
      n.length || (o[0] = 0, n.push("$")), a.forEach(function (e) {
        e.splitRegex = this.createSplitterRegexp(e.regex, r)
      }, this), this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)", r)
    }
  };
  (function () {
    this.$setMaxTokenCount = function (e) {
      s = 0 | e
    }, this.$applyToken = function (e) {
      var t = this.splitRegex.exec(e).slice(1), i = this.token.apply(this, t);
      if ("string" == typeof i) return [{type: i, value: e}];
      for (var n = [], s = 0, o = i.length; o > s; s++) t[s] && (n[n.length] = {type: i[s], value: t[s]});
      return n
    }, this.$arrayTokens = function (e) {
      if (!e) return [];
      var t = this.splitRegex.exec(e);
      if (!t) return "text";
      for (var i = [], n = this.tokenArray, s = 0, o = n.length; o > s; s++) t[s + 1] && (i[i.length] = {
        type: n[s],
        value: t[s + 1]
      });
      return i
    }, this.removeCapturingGroups = function (e) {
      var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function (e, t) {
        return t ? "(?:" : e
      });
      return t
    }, this.createSplitterRegexp = function (e, t) {
      if (-1 != e.indexOf("(?=")) {
        var i = 0, n = !1, s = {};
        e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (e, t, o, r, a, l) {
          return n ? n = "]" != a : a ? n = !0 : r ? (i == s.stack && (s.end = l + 1, s.stack = -1), i--) : o && (i++, 1 != o.length && (s.stack = i, s.start = l)), e
        }), null != s.end && /^\)*$/.test(e.substr(s.end)) && (e = e.substring(0, s.start) + e.substr(s.end))
      }
      return new RegExp(e, (t || "").replace("g", ""))
    }, this.getLineTokens = function (e, t) {
      if (t && "string" != typeof t) {
        var i = t.slice(0);
        t = i[0], "#tmp" === t && (i.shift(), t = i.shift())
      } else var i = [];
      var n = t || "start", o = this.states[n];
      o || (n = "start", o = this.states[n]);
      var r = this.matchMappings[n], a = this.regExps[n];
      a.lastIndex = 0;
      for (var l, h = [], c = 0, u = 0, d = {type: null, value: ""}; l = a.exec(e);) {
        var g = r.defaultToken, f = null, m = l[0], p = a.lastIndex;
        if (p - m.length > c) {
          var A = e.substring(c, p - m.length);
          d.type == g ? d.value += A : (d.type && h.push(d), d = {type: g, value: A})
        }
        for (var C = 0; C < l.length - 2; C++) if (void 0 !== l[C + 1]) {
          f = o[r[C]], g = f.onMatch ? f.onMatch(m, n, i) : f.token, f.next && (n = "string" == typeof f.next ? f.next : f.next(n, i), o = this.states[n], o || (this.reportError("state doesn't exist", n), n = "start", o = this.states[n]), r = this.matchMappings[n], c = p, a = this.regExps[n], a.lastIndex = p);
          break
        }
        if (m) if ("string" == typeof g) f && f.merge === !1 || d.type !== g ? (d.type && h.push(d), d = {
          type: g,
          value: m
        }) : d.value += m; else if (g) {
          d.type && h.push(d), d = {type: null, value: ""};
          for (var C = 0; C < g.length; C++) h.push(g[C])
        }
        if (c == e.length) break;
        if (c = p, u++ > s) {
          for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
            startState: t,
            line: e
          }); c < e.length;) d.type && h.push(d), d = {value: e.substring(c, c += 2e3), type: "overflow"};
          n = "start", i = [];
          break
        }
      }
      return d.type && h.push(d), i.length > 1 && i[0] !== n && i.unshift("#tmp", n), {
        tokens: h,
        state: i.length ? i : n
      }
    }, this.reportError = n.reportError
  }).call(o.prototype), t.Tokenizer = o
}), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (e, t, i) {
  "use strict";
  var n = e("../lib/lang"), s = function () {
    this.$rules = {start: [{token: "empty_line", regex: "^$"}, {defaultToken: "text"}]}
  };
  (function () {
    this.addRules = function (e, t) {
      if (t) for (var i in e) {
        for (var n = e[i], s = 0; s < n.length; s++) {
          var o = n[s];
          (o.next || o.onMatch) && ("string" != typeof o.next ? o.nextState && 0 !== o.nextState.indexOf(t) && (o.nextState = t + o.nextState) : 0 !== o.next.indexOf(t) && (o.next = t + o.next))
        }
        this.$rules[t + i] = n
      } else for (var i in e) this.$rules[i] = e[i]
    }, this.getRules = function () {
      return this.$rules
    }, this.embedRules = function (e, t, i, s, o) {
      var r = "function" == typeof e ? (new e).getRules() : e;
      if (s) for (var a = 0; a < s.length; a++) s[a] = t + s[a]; else {
        s = [];
        for (var l in r) s.push(t + l)
      }
      if (this.addRules(r, t), i) for (var h = Array.prototype[o ? "push" : "unshift"], a = 0; a < s.length; a++) h.apply(this.$rules[s[a]], n.deepCopy(i));
      this.$embeds || (this.$embeds = []), this.$embeds.push(t)
    }, this.getEmbeds = function () {
      return this.$embeds
    };
    var e = function (e, t) {
      return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
    }, t = function (e, t) {
      return t.shift(), t.shift() || "start"
    };
    this.normalizeRules = function () {
      function i(o) {
        var r = s[o];
        r.processed = !0;
        for (var a = 0; a < r.length; a++) {
          var l = r[a];
          !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({defaultToken: l.token}, {
            token: l.token + ".end",
            regex: l.end || l.start,
            next: "pop"
          }), l.token = l.token + ".start", l.push = !0);
          var h = l.next || l.push;
          if (h && Array.isArray(h)) {
            var c = l.stateName;
            c || (c = l.token, "string" != typeof c && (c = c[0] || ""), s[c] && (c += n++)), s[c] = h, l.next = c, i(c)
          } else "pop" == h && (l.next = t);
          if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules) for (var u in l.rules) s[u] ? s[u].push && s[u].push.apply(s[u], l.rules[u]) : s[u] = l.rules[u];
          if (l.include || "string" == typeof l) var d = l.include || l, g = s[d]; else Array.isArray(l) && (g = l);
          if (g) {
            var f = [a, 1].concat(g);
            l.noEscape && (f = f.filter(function (e) {
              return !e.next
            })), r.splice.apply(r, f), a--, g = null
          }
          l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
        }
      }

      var n = 0, s = this.$rules;
      Object.keys(s).forEach(i, this)
    }, this.createKeywordMapper = function (e, t, i, n) {
      var s = Object.create(null);
      return Object.keys(e).forEach(function (t) {
        var o = e[t];
        i && (o = o.toLowerCase());
        for (var r = o.split(n || "|"), a = r.length; a--;) s[r[a]] = t
      }), Object.getPrototypeOf(s) && (s.__proto__ = null), this.$keywordList = Object.keys(s), e = null, i ? function (e) {
        return s[e.toLowerCase()] || t
      } : function (e) {
        return s[e] || t
      }
    }, this.getKeywords = function () {
      return this.$keywords
    }
  }).call(s.prototype), t.TextHighlightRules = s
}), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = function () {
    this.$behaviours = {}
  };
  (function () {
    this.add = function (e, t, i) {
      switch (void 0) {
        case this.$behaviours:
          this.$behaviours = {};
        case this.$behaviours[e]:
          this.$behaviours[e] = {}
      }
      this.$behaviours[e][t] = i
    }, this.addBehaviours = function (e) {
      for (var t in e) for (var i in e[t]) this.add(t, i, e[t][i])
    }, this.remove = function (e) {
      this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
    }, this.inherit = function (e, t) {
      if ("function" == typeof e) var i = (new e).getBehaviours(t); else var i = e.getBehaviours(t);
      this.addBehaviours(i)
    }, this.getBehaviours = function (e) {
      if (e) {
        for (var t = {}, i = 0; i < e.length; i++) this.$behaviours[e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
        return t
      }
      return this.$behaviours
    }
  }).call(n.prototype), t.Behaviour = n
}), ace.define("ace/unicode", ["require", "exports", "module"], function (e, t, i) {
  "use strict";

  function n(e) {
    var i = /\w{4}/g;
    for (var n in e) t.packages[n] = e[n].replace(i, "\\u$&")
  }

  t.packages = {}, n({
    L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
    Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
    Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
    Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
    Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
    Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
    M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
    Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
    Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
    Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
    N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
    Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
    Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
    No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
    P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
    Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
    Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
    Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
    Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
    Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
    Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
    Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
    S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
    Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
    Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
    Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
    So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
    Z: "002000A01680180E2000-200A20282029202F205F3000",
    Zs: "002000A01680180E2000-200A202F205F3000",
    Zl: "2028",
    Zp: "2029",
    C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
    Cc: "0000-001F007F-009F",
    Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
    Co: "E000-F8FF",
    Cs: "D800-DFFF",
    Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
  })
}), ace.define("ace/token_iterator", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = function (e, t, i) {
    this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
    var n = e.getTokenAt(t, i);
    this.$tokenIndex = n ? n.index : -1
  };
  (function () {
    this.stepBackward = function () {
      for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
        if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
      }
      return this.$rowTokens[this.$tokenIndex]
    }, this.stepForward = function () {
      this.$tokenIndex += 1;
      for (var e; this.$tokenIndex >= this.$rowTokens.length;) {
        if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
      }
      return this.$rowTokens[this.$tokenIndex]
    }, this.getCurrentToken = function () {
      return this.$rowTokens[this.$tokenIndex]
    }, this.getCurrentTokenRow = function () {
      return this.$row
    }, this.getCurrentTokenColumn = function () {
      var e = this.$rowTokens, t = this.$tokenIndex, i = e[t].start;
      if (void 0 !== i) return i;
      for (i = 0; t > 0;) t -= 1, i += e[t].value.length;
      return i
    }
  }).call(n.prototype), t.TokenIterator = n
}), ace.define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("../tokenizer").Tokenizer, s = e("./text_highlight_rules").TextHighlightRules,
    o = e("./behaviour").Behaviour, r = e("../unicode"), a = e("../lib/lang"), l = e("../token_iterator").TokenIterator,
    h = e("../range").Range, c = function () {
      this.HighlightRules = s, this.$behaviour = new o
    };
  (function () {
    this.tokenRe = new RegExp("^[" + r.packages.L + r.packages.Mn + r.packages.Mc + r.packages.Nd + r.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + r.packages.L + r.packages.Mn + r.packages.Mc + r.packages.Nd + r.packages.Pc + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
      return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules, this.$tokenizer = new n(this.$highlightRules.getRules())), this.$tokenizer
    }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, i, n) {
      function s(e) {
        for (var t = i; n >= t; t++) e(o.getLine(t), t)
      }

      var o = t.doc, r = !0, l = !0, h = 1 / 0, c = t.getTabSize(), u = !1;
      if (this.lineCommentStart) {
        if (Array.isArray(this.lineCommentStart)) var d = this.lineCommentStart.map(a.escapeRegExp).join("|"),
          g = this.lineCommentStart[0]; else var d = a.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart;
        d = new RegExp("^(\\s*)(?:" + d + ") ?"), u = t.getUseSoftTabs();
        var f = function (e, t) {
          var i = e.match(d);
          if (i) {
            var n = i[1].length, s = i[0].length;
            C(e, n, s) || " " != i[0][s - 1] || s--, o.removeInLine(t, n, s)
          }
        }, m = g + " ", p = function (e, t) {
          (!r || /\S/.test(e)) && (C(e, h, h) ? o.insertInLine({row: t, column: h}, m) : o.insertInLine({
            row: t,
            column: h
          }, g))
        }, A = function (e, t) {
          return d.test(e)
        }, C = function (e, t, i) {
          for (var n = 0; t-- && " " == e.charAt(t);) n++;
          if (n % c != 0) return !1;
          for (var n = 0; " " == e.charAt(i++);) n++;
          return c > 2 ? n % c != c - 1 : n % c == 0
        }
      } else {
        if (!this.blockComment) return !1;
        var g = this.blockComment.start, F = this.blockComment.end,
          d = new RegExp("^(\\s*)(?:" + a.escapeRegExp(g) + ")"), v = new RegExp("(?:" + a.escapeRegExp(F) + ")\\s*$"),
          p = function (e, t) {
            A(e, t) || (!r || /\S/.test(e)) && (o.insertInLine({row: t, column: e.length}, F), o.insertInLine({
              row: t,
              column: h
            }, g))
          }, f = function (e, t) {
            var i;
            (i = e.match(v)) && o.removeInLine(t, e.length - i[0].length, e.length), (i = e.match(d)) && o.removeInLine(t, i[1].length, i[0].length)
          }, A = function (e, i) {
            if (d.test(e)) return !0;
            for (var n = t.getTokens(i), s = 0; s < n.length; s++) if ("comment" === n[s].type) return !0
          }
      }
      var w = 1 / 0;
      s(function (e, t) {
        var i = e.search(/\S/);
        -1 !== i ? (h > i && (h = i), l && !A(e, t) && (l = !1)) : w > e.length && (w = e.length)
      }), h == 1 / 0 && (h = w, r = !1, l = !1), u && h % c != 0 && (h = Math.floor(h / c) * c), s(l ? f : p)
    }, this.toggleBlockComment = function (e, t, i, n) {
      var s = this.blockComment;
      if (s) {
        !s.start && s[0] && (s = s[0]);
        var o, r, a = new l(t, n.row, n.column), c = a.getCurrentToken(),
          u = (t.selection, t.selection.toOrientedRange());
        if (c && /comment/.test(c.type)) {
          for (var d, g; c && /comment/.test(c.type);) {
            var f = c.value.indexOf(s.start);
            if (-1 != f) {
              var m = a.getCurrentTokenRow(), p = a.getCurrentTokenColumn() + f;
              d = new h(m, p, m, p + s.start.length);
              break
            }
            c = a.stepBackward()
          }
          for (var a = new l(t, n.row, n.column), c = a.getCurrentToken(); c && /comment/.test(c.type);) {
            var f = c.value.indexOf(s.end);
            if (-1 != f) {
              var m = a.getCurrentTokenRow(), p = a.getCurrentTokenColumn() + f;
              g = new h(m, p, m, p + s.end.length);
              break
            }
            c = a.stepForward()
          }
          g && t.remove(g), d && (t.remove(d), o = d.start.row, r = -s.start.length)
        } else r = s.start.length, o = i.start.row, t.insert(i.end, s.end), t.insert(i.start, s.start);
        u.start.row == o && (u.start.column += r), u.end.row == o && (u.end.column += r), t.selection.fromOrientedRange(u)
      }
    }, this.getNextLineIndent = function (e, t, i) {
      return this.$getIndent(t)
    }, this.checkOutdent = function (e, t, i) {
      return !1
    }, this.autoOutdent = function (e, t, i) {
    }, this.$getIndent = function (e) {
      return e.match(/^\s*/)[0]
    }, this.createWorker = function (e) {
      return null
    }, this.createModeDelegates = function (e) {
      this.$embeds = [], this.$modes = {};
      for (var t in e) e[t] && (this.$embeds.push(t), this.$modes[t] = new e[t]);
      for (var i = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"], t = 0; t < i.length; t++) !function (e) {
        var n = i[t], s = e[n];
        e[i[t]] = function () {
          return this.$delegator(n, arguments, s)
        }
      }(this)
    }, this.$delegator = function (e, t, i) {
      var n = t[0];
      "string" != typeof n && (n = n[0]);
      for (var s = 0; s < this.$embeds.length; s++) if (this.$modes[this.$embeds[s]]) {
        var o = n.split(this.$embeds[s]);
        if (!o[0] && o[1]) {
          t[0] = o[1];
          var r = this.$modes[this.$embeds[s]];
          return r[e].apply(r, t)
        }
      }
      var a = i.apply(this, t);
      return i ? a : void 0
    }, this.transformAction = function (e, t, i, n, s) {
      if (this.$behaviour) {
        var o = this.$behaviour.getBehaviours();
        for (var r in o) if (o[r][t]) {
          var a = o[r][t].apply(this, arguments);
          if (a) return a
        }
      }
    }, this.getKeywords = function (e) {
      if (!this.completionKeywords) {
        var t = this.$tokenizer.rules, i = [];
        for (var n in t) for (var s = t[n], o = 0, r = s.length; r > o; o++) if ("string" == typeof s[o].token) /keyword|support|storage/.test(s[o].token) && i.push(s[o].regex); else if ("object" == typeof s[o].token) for (var a = 0, l = s[o].token.length; l > a; a++) if (/keyword|support|storage/.test(s[o].token[a])) {
          var n = s[o].regex.match(/\(.+?\)/g)[a];
          i.push(n.substr(1, n.length - 2))
        }
        this.completionKeywords = i
      }
      return e ? i.concat(this.$keywordList || []) : this.$keywordList
    }, this.$createKeywordList = function () {
      return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
    }, this.getCompletions = function (e, t, i, n) {
      var s = this.$keywordList || this.$createKeywordList();
      return s.map(function (e) {
        return {name: e, value: e, score: 0, meta: "keyword"}
      })
    }, this.$id = "ace/mode/text"
  }).call(c.prototype), t.Mode = c
}), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = t.Anchor = function (e, t, i) {
    this.$onChange = this.onChange.bind(this), this.attach(e), "undefined" == typeof i ? this.setPosition(t.row, t.column) : this.setPosition(t, i)
  };
  (function () {
    n.implement(this, s), this.getPosition = function () {
      return this.$clipPositionToDocument(this.row, this.column)
    }, this.getDocument = function () {
      return this.document
    }, this.$insertRight = !1, this.onChange = function (e) {
      var t = e.data, i = t.range;
      if ((i.start.row != i.end.row || i.start.row == this.row) && !(i.start.row > this.row || i.start.row == this.row && i.start.column > this.column)) {
        var n = this.row, s = this.column, o = i.start, r = i.end;
        "insertText" === t.action ? o.row === n && o.column <= s ? o.column === s && this.$insertRight || (o.row === r.row ? s += r.column - o.column : (s -= o.column, n += r.row - o.row)) : o.row !== r.row && o.row < n && (n += r.row - o.row) : "insertLines" === t.action ? o.row === n && 0 === s && this.$insertRight || o.row <= n && (n += r.row - o.row) : "removeText" === t.action ? o.row === n && o.column < s ? s = r.column >= s ? o.column : Math.max(0, s - (r.column - o.column)) : o.row !== r.row && o.row < n ? (r.row === n && (s = Math.max(0, s - r.column) + o.column), n -= r.row - o.row) : r.row === n && (n -= r.row - o.row, s = Math.max(0, s - r.column) + o.column) : "removeLines" == t.action && o.row <= n && (r.row <= n ? n -= r.row - o.row : (n = o.row, s = 0)), this.setPosition(n, s, !0)
      }
    }, this.setPosition = function (e, t, i) {
      var n;
      if (n = i ? {
        row: e,
        column: t
      } : this.$clipPositionToDocument(e, t), this.row != n.row || this.column != n.column) {
        var s = {row: this.row, column: this.column};
        this.row = n.row, this.column = n.column, this._signal("change", {old: s, value: n})
      }
    }, this.detach = function () {
      this.document.removeEventListener("change", this.$onChange)
    }, this.attach = function (e) {
      this.document = e || this.document, this.document.on("change", this.$onChange)
    }, this.$clipPositionToDocument = function (e, t) {
      var i = {};
      return e >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1), i.column = this.document.getLine(i.row).length) : 0 > e ? (i.row = 0, i.column = 0) : (i.row = e, i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t))), 0 > t && (i.column = 0), i
    }
  }).call(o.prototype)
}), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = e("./range").Range, r = e("./anchor").Anchor,
    a = function (e) {
      this.$lines = [], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this._insertLines(0, e) : this.insert({
        row: 0,
        column: 0
      }, e)
    };
  (function () {
    n.implement(this, s), this.setValue = function (e) {
      var t = this.getLength();
      this.remove(new o(0, 0, t, this.getLine(t - 1).length)), this.insert({row: 0, column: 0}, e)
    }, this.getValue = function () {
      return this.getAllLines().join(this.getNewLineCharacter())
    }, this.createAnchor = function (e, t) {
      return new r(this, e, t)
    }, 0 === "aaa".split(/a/).length ? this.$split = function (e) {
      return e.replace(/\r\n|\r/g, "\n").split("\n")
    } : this.$split = function (e) {
      return e.split(/\r\n|\r|\n/)
    }, this.$detectNewLine = function (e) {
      var t = e.match(/^.*?(\r\n|\r|\n)/m);
      this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
    }, this.getNewLineCharacter = function () {
      switch (this.$newLineMode) {
        case "windows":
          return "\r\n";
        case "unix":
          return "\n";
        default:
          return this.$autoNewLine || "\n"
      }
    }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
      this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
    }, this.getNewLineMode = function () {
      return this.$newLineMode
    }, this.isNewLine = function (e) {
      return "\r\n" == e || "\r" == e || "\n" == e
    }, this.getLine = function (e) {
      return this.$lines[e] || ""
    }, this.getLines = function (e, t) {
      return this.$lines.slice(e, t + 1)
    }, this.getAllLines = function () {
      return this.getLines(0, this.getLength())
    }, this.getLength = function () {
      return this.$lines.length
    }, this.getTextRange = function (e) {
      if (e.start.row == e.end.row) return this.getLine(e.start.row).substring(e.start.column, e.end.column);
      var t = this.getLines(e.start.row, e.end.row);
      t[0] = (t[0] || "").substring(e.start.column);
      var i = t.length - 1;
      return e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e.end.column)), t.join(this.getNewLineCharacter())
    }, this.$clipPosition = function (e) {
      var t = this.getLength();
      return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : e.row < 0 && (e.row = 0), e
    }, this.insert = function (e, t) {
      if (!t || 0 === t.length) return e;
      e = this.$clipPosition(e), this.getLength() <= 1 && this.$detectNewLine(t);
      var i = this.$split(t), n = i.splice(0, 1)[0], s = 0 == i.length ? null : i.splice(i.length - 1, 1)[0];
      return e = this.insertInLine(e, n), null !== s && (e = this.insertNewLine(e), e = this._insertLines(e.row, i), e = this.insertInLine(e, s || "")), e
    }, this.insertLines = function (e, t) {
      return e >= this.getLength() ? this.insert({
        row: e,
        column: 0
      }, "\n" + t.join("\n")) : this._insertLines(Math.max(e, 0), t)
    }, this._insertLines = function (e, t) {
      if (0 == t.length) return {row: e, column: 0};
      for (; t.length > 2e4;) {
        var i = this._insertLines(e, t.slice(0, 2e4));
        t = t.slice(2e4), e = i.row
      }
      var n = [e, 0];
      n.push.apply(n, t), this.$lines.splice.apply(this.$lines, n);
      var s = new o(e, 0, e + t.length, 0), r = {action: "insertLines", range: s, lines: t};
      return this._signal("change", {data: r}), s.end
    }, this.insertNewLine = function (e) {
      e = this.$clipPosition(e);
      var t = this.$lines[e.row] || "";
      this.$lines[e.row] = t.substring(0, e.column), this.$lines.splice(e.row + 1, 0, t.substring(e.column, t.length));
      var i = {row: e.row + 1, column: 0},
        n = {action: "insertText", range: o.fromPoints(e, i), text: this.getNewLineCharacter()};
      return this._signal("change", {data: n}), i
    }, this.insertInLine = function (e, t) {
      if (0 == t.length) return e;
      var i = this.$lines[e.row] || "";
      this.$lines[e.row] = i.substring(0, e.column) + t + i.substring(e.column);
      var n = {row: e.row, column: e.column + t.length}, s = {action: "insertText", range: o.fromPoints(e, n), text: t};
      return this._signal("change", {data: s}), n
    }, this.remove = function (e) {
      if (e instanceof o || (e = o.fromPoints(e.start, e.end)), e.start = this.$clipPosition(e.start), e.end = this.$clipPosition(e.end), e.isEmpty()) return e.start;
      var t = e.start.row, i = e.end.row;
      if (e.isMultiLine()) {
        var n = 0 == e.start.column ? t : t + 1, s = i - 1;
        e.end.column > 0 && this.removeInLine(i, 0, e.end.column), s >= n && this._removeLines(n, s), n != t && (this.removeInLine(t, e.start.column, this.getLine(t).length), this.removeNewLine(e.start.row))
      } else this.removeInLine(t, e.start.column, e.end.column);
      return e.start
    }, this.removeInLine = function (e, t, i) {
      if (t != i) {
        var n = new o(e, t, e, i), s = this.getLine(e), r = s.substring(t, i),
          a = s.substring(0, t) + s.substring(i, s.length);
        this.$lines.splice(e, 1, a);
        var l = {action: "removeText", range: n, text: r};
        return this._signal("change", {data: l}), n.start
      }
    }, this.removeLines = function (e, t) {
      return 0 > e || t >= this.getLength() ? this.remove(new o(e, 0, t + 1, 0)) : this._removeLines(e, t)
    }, this._removeLines = function (e, t) {
      var i = new o(e, 0, t + 1, 0), n = this.$lines.splice(e, t - e + 1),
        s = {action: "removeLines", range: i, nl: this.getNewLineCharacter(), lines: n};
      return this._signal("change", {data: s}), n
    }, this.removeNewLine = function (e) {
      var t = this.getLine(e), i = this.getLine(e + 1), n = new o(e, t.length, e + 1, 0), s = t + i;
      this.$lines.splice(e, 2, s);
      var r = {action: "removeText", range: n, text: this.getNewLineCharacter()};
      this._signal("change", {data: r})
    }, this.replace = function (e, t) {
      if (e instanceof o || (e = o.fromPoints(e.start, e.end)), 0 == t.length && e.isEmpty()) return e.start;
      if (t == this.getTextRange(e)) return e.end;
      if (this.remove(e), t) var i = this.insert(e.start, t); else i = e.start;
      return i
    }, this.applyDeltas = function (e) {
      for (var t = 0; t < e.length; t++) {
        var i = e[t], n = o.fromPoints(i.range.start, i.range.end);
        "insertLines" == i.action ? this.insertLines(n.start.row, i.lines) : "insertText" == i.action ? this.insert(n.start, i.text) : "removeLines" == i.action ? this._removeLines(n.start.row, n.end.row - 1) : "removeText" == i.action && this.remove(n)
      }
    }, this.revertDeltas = function (e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var i = e[t], n = o.fromPoints(i.range.start, i.range.end);
        "insertLines" == i.action ? this._removeLines(n.start.row, n.end.row - 1) : "insertText" == i.action ? this.remove(n) : "removeLines" == i.action ? this._insertLines(n.start.row, i.lines) : "removeText" == i.action && this.insert(n.start, i.text)
      }
    }, this.indexToPosition = function (e, t) {
      for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = t || 0, o = i.length; o > s; s++) if (e -= i[s].length + n, 0 > e) return {
        row: s,
        column: e + i[s].length + n
      };
      return {row: o - 1, column: i[o - 1].length}
    }, this.positionToIndex = function (e, t) {
      for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = 0, o = Math.min(e.row, i.length), r = t || 0; o > r; ++r) s += i[r].length + n;
      return s + e.column
    }
  }).call(a.prototype), t.Document = a
}), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = function (e, t) {
    this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
    var i = this;
    this.$worker = function () {
      if (i.running) {
        for (var e = new Date, t = i.currentLine, n = -1, s = i.doc; i.lines[t];) t++;
        var o = t, r = s.getLength(), a = 0;
        for (i.running = !1; r > t;) {
          i.$tokenizeRow(t), n = t;
          do t++; while (i.lines[t]);
          if (a++, a % 5 === 0 && new Date - e > 20) {
            i.running = setTimeout(i.$worker, 20);
            break
          }
        }
        i.currentLine = t, n >= o && i.fireUpdateEvent(o, n)
      }
    }
  };
  (function () {
    n.implement(this, s), this.setTokenizer = function (e) {
      this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
    }, this.setDocument = function (e) {
      this.doc = e, this.lines = [], this.states = [], this.stop()
    }, this.fireUpdateEvent = function (e, t) {
      var i = {first: e, last: t};
      this._signal("update", {data: i})
    }, this.start = function (e) {
      this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
    }, this.scheduleStart = function () {
      this.running || (this.running = setTimeout(this.$worker, 700))
    }, this.$updateOnChange = function (e) {
      var t = e.range, i = t.start.row, n = t.end.row - i;
      if (0 === n) this.lines[i] = null; else if ("removeText" == e.action || "removeLines" == e.action) this.lines.splice(i, n + 1, null), this.states.splice(i, n + 1, null); else {
        var s = Array(n + 1);
        s.unshift(i, 1), this.lines.splice.apply(this.lines, s), this.states.splice.apply(this.states, s)
      }
      this.currentLine = Math.min(i, this.currentLine, this.doc.getLength()), this.stop()
    }, this.stop = function () {
      this.running && clearTimeout(this.running), this.running = !1
    }, this.getTokens = function (e) {
      return this.lines[e] || this.$tokenizeRow(e)
    }, this.getState = function (e) {
      return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
    }, this.$tokenizeRow = function (e) {
      var t = this.doc.getLine(e), i = this.states[e - 1], n = this.tokenizer.getLineTokens(t, i, e);
      return this.states[e] + "" != n.state + "" ? (this.states[e] = n.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = n.tokens
    }
  }).call(o.prototype), t.BackgroundTokenizer = o
}), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("./lib/lang"), s = (e("./lib/oop"), e("./range").Range), o = function (e, t, i) {
    this.setRegexp(e), this.clazz = t, this.type = i || "text"
  };
  (function () {
    this.MAX_RANGES = 500, this.setRegexp = function (e) {
      this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
    }, this.update = function (e, t, i, o) {
      if (this.regExp) for (var r = o.firstRow, a = o.lastRow, l = r; a >= l; l++) {
        var h = this.cache[l];
        null == h && (h = n.getMatchOffsets(i.getLine(l), this.regExp), h.length > this.MAX_RANGES && (h = h.slice(0, this.MAX_RANGES)), h = h.map(function (e) {
          return new s(l, e.offset, l, e.offset + e.length)
        }), this.cache[l] = h.length ? h : "");
        for (var c = h.length; c--;) t.drawSingleLineMarker(e, h[c].toScreenRange(i), this.clazz, o)
      }
    }
  }).call(o.prototype), t.SearchHighlight = o
}), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (e, t, i) {
  "use strict";

  function n(e, t) {
    this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
    var i = t[t.length - 1];
    this.range = new s(t[0].start.row, t[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function (e) {
      e.setFoldLine(this)
    }, this)
  }

  var s = e("../range").Range;
  (function () {
    this.shiftRow = function (e) {
      this.start.row += e, this.end.row += e, this.folds.forEach(function (t) {
        t.start.row += e, t.end.row += e
      })
    }, this.addFold = function (e) {
      if (e.sameRow) {
        if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
        this.folds.push(e), this.folds.sort(function (e, t) {
          return -e.range.compareEnd(t.start.row, t.start.column)
        }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
      } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column; else {
        if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
        this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
      }
      e.foldLine = this
    }, this.containsRow = function (e) {
      return e >= this.start.row && e <= this.end.row
    }, this.walk = function (e, t, i) {
      var n, s, o, r = 0, a = this.folds, l = !0;
      null == t && (t = this.end.row, i = this.end.column);
      for (var h = 0; h < a.length; h++) {
        if (n = a[h], s = n.range.compareStart(t, i), -1 == s) return void e(null, t, i, r, l);
        if (o = e(null, n.start.row, n.start.column, r, l), o = !o && e(n.placeholder, n.start.row, n.start.column, r), o || 0 === s) return;
        l = !n.sameRow, r = n.end.column
      }
      e(null, t, i, r, l)
    }, this.getNextFoldTo = function (e, t) {
      for (var i, n, s = 0; s < this.folds.length; s++) {
        if (i = this.folds[s], n = i.range.compareEnd(e, t), -1 == n) return {fold: i, kind: "after"};
        if (0 === n) return {fold: i, kind: "inside"}
      }
      return null
    }, this.addRemoveChars = function (e, t, i) {
      var n, s, o = this.getNextFoldTo(e, t);
      if (o) if (n = o.fold, "inside" == o.kind && n.start.column != t && n.start.row != e) window.console && window.console.log(e, t, n); else if (n.start.row == e) {
        s = this.folds;
        var r = s.indexOf(n);
        for (0 === r && (this.start.column += i), r; r < s.length; r++) {
          if (n = s[r], n.start.column += i, !n.sameRow) return;
          n.end.column += i
        }
        this.end.column += i
      }
    }, this.split = function (e, t) {
      var i = this.getNextFoldTo(e, t);
      if (!i || "inside" == i.kind) return null;
      var s = i.fold, o = this.folds, r = this.foldData, a = o.indexOf(s), l = o[a - 1];
      this.end.row = l.end.row, this.end.column = l.end.column, o = o.splice(a, o.length - a);
      var h = new n(r, o);
      return r.splice(r.indexOf(this) + 1, 0, h), h
    }, this.merge = function (e) {
      for (var t = e.folds, i = 0; i < t.length; i++) this.addFold(t[i]);
      var n = this.foldData;
      n.splice(n.indexOf(e), 1)
    }, this.toString = function () {
      var e = [this.range.toString() + ": ["];
      return this.folds.forEach(function (t) {
        e.push("  " + t.toString())
      }), e.push("]"), e.join("\n")
    }, this.idxToPosition = function (e) {
      for (var t = 0, i = 0; i < this.folds.length; i++) {
        var n = this.folds[i];
        if (e -= n.start.column - t, 0 > e) return {row: n.start.row, column: n.start.column + e};
        if (e -= n.placeholder.length, 0 > e) return n.start;
        t = n.end.column
      }
      return {row: this.end.row, column: this.end.column + e}
    }
  }).call(n.prototype), t.FoldLine = n
}), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("./range").Range, s = n.comparePoints, o = function () {
    this.ranges = []
  };
  (function () {
    this.comparePoints = s, this.pointIndex = function (e, t, i) {
      for (var n = this.ranges, o = i || 0; o < n.length; o++) {
        var r = n[o], a = s(e, r.end);
        if (!(a > 0)) {
          var l = s(e, r.start);
          return 0 === a ? t && 0 !== l ? -o - 2 : o : l > 0 || 0 === l && !t ? o : -o - 1
        }
      }
      return -o - 1
    }, this.add = function (e) {
      var t = !e.isEmpty(), i = this.pointIndex(e.start, t);
      0 > i && (i = -i - 1);
      var n = this.pointIndex(e.end, t, i);
      return 0 > n ? n = -n - 1 : n++, this.ranges.splice(i, n - i, e)
    }, this.addList = function (e) {
      for (var t = [], i = e.length; i--;) t.push.call(t, this.add(e[i]));
      return t
    }, this.substractPoint = function (e) {
      var t = this.pointIndex(e);
      return t >= 0 ? this.ranges.splice(t, 1) : void 0
    }, this.merge = function () {
      var e = [], t = this.ranges;
      t = t.sort(function (e, t) {
        return s(e.start, t.start)
      });
      for (var i, n = t[0], o = 1; o < t.length; o++) {
        i = n, n = t[o];
        var r = s(i.end, n.start);
        0 > r || (0 != r || i.isEmpty() || n.isEmpty()) && (s(i.end, n.end) < 0 && (i.end.row = n.end.row, i.end.column = n.end.column), t.splice(o, 1), e.push(n), n = i, o--)
      }
      return this.ranges = t, e
    }, this.contains = function (e, t) {
      return this.pointIndex({row: e, column: t}) >= 0
    }, this.containsPoint = function (e) {
      return this.pointIndex(e) >= 0
    }, this.rangeAtPoint = function (e) {
      var t = this.pointIndex(e);
      return t >= 0 ? this.ranges[t] : void 0
    }, this.clipRows = function (e, t) {
      var i = this.ranges;
      if (i[0].start.row > t || i[i.length - 1].start.row < e) return [];
      var n = this.pointIndex({row: e, column: 0});
      0 > n && (n = -n - 1);
      var s = this.pointIndex({row: t, column: 0}, n);
      0 > s && (s = -s - 1);
      for (var o = [], r = n; s > r; r++) o.push(i[r]);
      return o
    }, this.removeAll = function () {
      return this.ranges.splice(0, this.ranges.length)
    }, this.attach = function (e) {
      this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
    }, this.detach = function () {
      this.session && (this.session.removeListener("change", this.onChange), this.session = null)
    }, this.$onChange = function (e) {
      var t = e.data.range;
      if ("i" == e.data.action[0]) var i = t.start, n = t.end; else var n = t.start, i = t.end;
      for (var s = i.row, o = n.row, r = o - s, a = -i.column + n.column, l = this.ranges, h = 0, c = l.length; c > h; h++) {
        var u = l[h];
        if (!(u.end.row < s)) {
          if (u.start.row > s) break;
          if (u.start.row == s && u.start.column >= i.column && (u.start.column == i.column && this.$insertRight || (u.start.column += a, u.start.row += r)), u.end.row == s && u.end.column >= i.column) {
            if (u.end.column == i.column && this.$insertRight) continue;
            u.end.column == i.column && a > 0 && c - 1 > h && u.end.column > u.start.column && u.end.column == l[h + 1].start.column && (u.end.column -= a), u.end.column += a, u.end.row += r
          }
        }
      }
      if (0 != r && c > h) for (; c > h; h++) {
        var u = l[h];
        u.start.row += r, u.end.row += r
      }
    }
  }).call(o.prototype), t.RangeList = o
}), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function (e, t, i) {
  "use strict";

  function n(e, t) {
    e.row -= t.row, 0 == e.row && (e.column -= t.column)
  }

  function s(e, t) {
    n(e.start, t), n(e.end, t)
  }

  function o(e, t) {
    0 == e.row && (e.column += t.column), e.row += t.row
  }

  function r(e, t) {
    o(e.start, t), o(e.end, t)
  }

  var a = (e("../range").Range, e("../range_list").RangeList), l = e("../lib/oop"), h = t.Fold = function (e, t) {
    this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
  };
  l.inherits(h, a), function () {
    this.toString = function () {
      return '"' + this.placeholder + '" ' + this.range.toString()
    }, this.setFoldLine = function (e) {
      this.foldLine = e, this.subFolds.forEach(function (t) {
        t.setFoldLine(e)
      })
    }, this.clone = function () {
      var e = this.range.clone(), t = new h(e, this.placeholder);
      return this.subFolds.forEach(function (e) {
        t.subFolds.push(e.clone())
      }), t.collapseChildren = this.collapseChildren, t
    }, this.addSubFold = function (e) {
      if (!this.range.isEqual(e)) {
        if (!this.range.containsRange(e)) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
        s(e, this.start);
        for (var t = e.start.row, i = e.start.column, n = 0, o = -1; n < this.subFolds.length && (o = this.subFolds[n].range.compare(t, i), 1 == o); n++) ;
        var r = this.subFolds[n];
        if (0 == o) return r.addSubFold(e);
        for (var t = e.range.end.row, i = e.range.end.column, a = n, o = -1; a < this.subFolds.length && (o = this.subFolds[a].range.compare(t, i), 1 == o); a++) ;
        this.subFolds[a];
        if (0 == o) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
        this.subFolds.splice(n, a - n, e);
        return e.setFoldLine(this.foldLine), e
      }
    }, this.restoreRange = function (e) {
      return r(e, this.start)
    }
  }.call(h.prototype)
}), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function (e, t, i) {
  "use strict";

  function n() {
    this.getFoldAt = function (e, t, i) {
      var n = this.getFoldLine(e);
      if (!n) return null;
      for (var s = n.folds, o = 0; o < s.length; o++) {
        var r = s[o];
        if (r.range.contains(e, t)) {
          if (1 == i && r.range.isEnd(e, t)) continue;
          if (-1 == i && r.range.isStart(e, t)) continue;
          return r
        }
      }
    }, this.getFoldsInRange = function (e) {
      var t = e.start, i = e.end, n = this.$foldData, s = [];
      t.column += 1, i.column -= 1;
      for (var o = 0; o < n.length; o++) {
        var r = n[o].range.compareRange(e);
        if (2 != r) {
          if (-2 == r) break;
          for (var a = n[o].folds, l = 0; l < a.length; l++) {
            var h = a[l];
            if (r = h.range.compareRange(e), -2 == r) break;
            if (2 != r) {
              if (42 == r) break;
              s.push(h)
            }
          }
        }
      }
      return t.column -= 1, i.column += 1, s
    }, this.getFoldsInRangeList = function (e) {
      if (Array.isArray(e)) {
        var t = [];
        e.forEach(function (e) {
          t = t.concat(this.getFoldsInRange(e))
        }, this)
      } else var t = this.getFoldsInRange(e);
      return t
    }, this.getAllFolds = function () {
      for (var e = [], t = this.$foldData, i = 0; i < t.length; i++) for (var n = 0; n < t[i].folds.length; n++) e.push(t[i].folds[n]);
      return e
    }, this.getFoldStringAt = function (e, t, i, n) {
      if (n = n || this.getFoldLine(e), !n) return null;
      for (var s, o, r = {end: {column: 0}}, a = 0; a < n.folds.length; a++) {
        o = n.folds[a];
        var l = o.range.compareEnd(e, t);
        if (-1 == l) {
          s = this.getLine(o.start.row).substring(r.end.column, o.start.column);
          break
        }
        if (0 === l) return null;
        r = o
      }
      return s || (s = this.getLine(o.start.row).substring(r.end.column)), -1 == i ? s.substring(0, t - r.end.column) : 1 == i ? s.substring(t - r.end.column) : s
    }, this.getFoldLine = function (e, t) {
      var i = this.$foldData, n = 0;
      for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i.length; n++) {
        var s = i[n];
        if (s.start.row <= e && s.end.row >= e) return s;
        if (s.end.row > e) return null
      }
      return null
    }, this.getNextFoldLine = function (e, t) {
      var i = this.$foldData, n = 0;
      for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i.length; n++) {
        var s = i[n];
        if (s.end.row >= e) return s
      }
      return null
    }, this.getFoldedRowCount = function (e, t) {
      for (var i = this.$foldData, n = t - e + 1, s = 0; s < i.length; s++) {
        var o = i[s], r = o.end.row, a = o.start.row;
        if (r >= t) {
          t > a && (a >= e ? n -= t - a : n = 0);
          break
        }
        r >= e && (n -= a >= e ? r - a : r - e + 1)
      }
      return n
    }, this.$addFoldLine = function (e) {
      return this.$foldData.push(e), this.$foldData.sort(function (e, t) {
        return e.start.row - t.start.row
      }), e
    }, this.addFold = function (e, t) {
      var i, n = this.$foldData, s = !1;
      e instanceof r ? i = e : (i = new r(t, e), i.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(i.range);
      var a = i.start.row, l = i.start.column, h = i.end.row, c = i.end.column;
      if (!(h > a || a == h && c - 2 >= l)) throw new Error("The range has to be at least 2 characters width");
      var u = this.getFoldAt(a, l, 1), d = this.getFoldAt(h, c, -1);
      if (u && d == u) return u.addSubFold(i);
      u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(h, c) && this.removeFold(d);
      var g = this.getFoldsInRange(i.range);
      g.length > 0 && (this.removeFolds(g), g.forEach(function (e) {
        i.addSubFold(e)
      }));
      for (var f = 0; f < n.length; f++) {
        var m = n[f];
        if (h == m.start.row) {
          m.addFold(i), s = !0;
          break
        }
        if (a == m.end.row) {
          if (m.addFold(i), s = !0, !i.sameRow) {
            var p = n[f + 1];
            if (p && p.start.row == h) {
              m.merge(p);
              break
            }
          }
          break
        }
        if (h <= m.start.row) break
      }
      return s || (m = this.$addFoldLine(new o(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(m.start.row, m.start.row) : this.$updateRowLengthCache(m.start.row, m.start.row), this.$modified = !0, this._emit("changeFold", {
        data: i,
        action: "add"
      }), i
    }, this.addFolds = function (e) {
      e.forEach(function (e) {
        this.addFold(e)
      }, this)
    }, this.removeFold = function (e) {
      var t = e.foldLine, i = t.start.row, n = t.end.row, s = this.$foldData, o = t.folds;
      if (1 == o.length) s.splice(s.indexOf(t), 1); else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1].end.column; else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t.start.row = o[0].start.row, t.start.column = o[0].start.column; else if (e.sameRow) o.splice(o.indexOf(e), 1); else {
        var r = t.split(e.start.row, e.start.column);
        o = r.folds, o.shift(), r.start.row = o[0].start.row, r.start.column = o[0].start.column
      }
      this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)), this.$modified = !0, this._emit("changeFold", {
        data: e,
        action: "remove"
      })
    }, this.removeFolds = function (e) {
      for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
      t.forEach(function (e) {
        this.removeFold(e)
      }, this), this.$modified = !0
    }, this.expandFold = function (e) {
      this.removeFold(e), e.subFolds.forEach(function (t) {
        e.restoreRange(t), this.addFold(t)
      }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
    }, this.expandFolds = function (e) {
      e.forEach(function (e) {
        this.expandFold(e)
      }, this)
    }, this.unfold = function (e, t) {
      var i, n;
      if (null == e ? (i = new s(0, 0, this.getLength(), 0), t = !0) : i = "number" == typeof e ? new s(e, 0, e, this.getLine(e).length) : "row" in e ? s.fromPoints(e, e) : e, n = this.getFoldsInRangeList(i), t) this.removeFolds(n); else for (var o = n; o.length;) this.expandFolds(o), o = this.getFoldsInRangeList(i);
      return n.length ? n : void 0
    }, this.isRowFolded = function (e, t) {
      return !!this.getFoldLine(e, t)
    }, this.getRowFoldEnd = function (e, t) {
      var i = this.getFoldLine(e, t);
      return i ? i.end.row : e
    }, this.getRowFoldStart = function (e, t) {
      var i = this.getFoldLine(e, t);
      return i ? i.start.row : e
    }, this.getFoldDisplayLine = function (e, t, i, n, s) {
      null == n && (n = e.start.row), null == s && (s = 0), null == t && (t = e.end.row), null == i && (i = this.getLine(t).length);
      var o = this.doc, r = "";
      return e.walk(function (e, t, i, a) {
        if (!(n > t)) {
          if (t == n) {
            if (s > i) return;
            a = Math.max(s, a)
          }
          r += null != e ? e : o.getLine(t).substring(a, i)
        }
      }, t, i), r
    }, this.getDisplayLine = function (e, t, i, n) {
      var s = this.getFoldLine(e);
      if (s) return this.getFoldDisplayLine(s, e, t, i, n);
      var o;
      return o = this.doc.getLine(e), o.substring(n || 0, t || o.length)
    }, this.$cloneFoldData = function () {
      var e = [];
      return e = this.$foldData.map(function (t) {
        var i = t.folds.map(function (e) {
          return e.clone()
        });
        return new o(e, i)
      })
    }, this.toggleFold = function (e) {
      var t, i, n = this.selection, s = n.getRange();
      if (s.isEmpty()) {
        var o = s.start;
        if (t = this.getFoldAt(o.row, o.column)) return void this.expandFold(t);
        (i = this.findMatchingBracket(o)) ? 1 == s.comparePoint(i) ? s.end = i : (s.start = i, s.start.column++, s.end.column--) : (i = this.findMatchingBracket({
          row: o.row,
          column: o.column + 1
        })) ? (1 == s.comparePoint(i) ? s.end = i : s.start = i, s.start.column++) : s = this.getCommentFoldRange(o.row, o.column) || s
      } else {
        var r = this.getFoldsInRange(s);
        if (e && r.length) return void this.expandFolds(r);
        1 == r.length && (t = r[0])
      }
      if (t || (t = this.getFoldAt(s.start.row, s.start.column)), t && t.range.toString() == s.toString()) return void this.expandFold(t);
      var a = "...";
      if (!s.isMultiLine()) {
        if (a = this.getTextRange(s), a.length < 4) return;
        a = a.trim().substring(0, 2) + ".."
      }
      this.addFold(a, s)
    }, this.getCommentFoldRange = function (e, t, i) {
      var n = new a(this, e, t), o = n.getCurrentToken();
      if (o && /^comment|string/.test(o.type)) {
        var r = new s, l = new RegExp(o.type.replace(/\..*/, "\\."));
        if (1 != i) {
          do o = n.stepBackward(); while (o && l.test(o.type));
          n.stepForward()
        }
        if (r.start.row = n.getCurrentTokenRow(), r.start.column = n.getCurrentTokenColumn() + 2, n = new a(this, e, t), -1 != i) {
          do o = n.stepForward(); while (o && l.test(o.type));
          o = n.stepBackward()
        } else o = n.getCurrentToken();
        return r.end.row = n.getCurrentTokenRow(), r.end.column = n.getCurrentTokenColumn() + o.value.length - 2, r
      }
    }, this.foldAll = function (e, t, i) {
      void 0 == i && (i = 1e5);
      var n = this.foldWidgets;
      if (n) {
        t = t || this.getLength(), e = e || 0;
        for (var s = e; t > s; s++) if (null == n[s] && (n[s] = this.getFoldWidget(s)), "start" == n[s]) {
          var o = this.getFoldWidgetRange(s);
          if (o && o.isMultiLine() && o.end.row <= t && o.start.row >= e) {
            s = o.end.row;
            try {
              var r = this.addFold("...", o);
              r && (r.collapseChildren = i)
            } catch (a) {
            }
          }
        }
      }
    }, this.$foldStyles = {
      manual: 1,
      markbegin: 1,
      markbeginend: 1
    }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
      if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
      if (this.$foldStyle != e) {
        this.$foldStyle = e, "manual" == e && this.unfold();
        var t = this.$foldMode;
        this.$setFolding(null), this.$setFolding(t)
      }
    }, this.$setFolding = function (e) {
      if (this.$foldMode != e) {
        if (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._emit("changeAnnotation"), !e || "manual" == this.$foldStyle) return void (this.foldWidgets = null);
        this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)
      }
    }, this.getParentFoldRangeData = function (e, t) {
      var i = this.foldWidgets;
      if (!i || t && i[e]) return {};
      for (var n, s = e - 1; s >= 0;) {
        var o = i[s];
        if (null == o && (o = i[s] = this.getFoldWidget(s)), "start" == o) {
          var r = this.getFoldWidgetRange(s);
          if (n || (n = r), r && r.end.row >= e) break
        }
        s--
      }
      return {range: -1 !== s && r, firstRange: n}
    }, this.onFoldWidgetClick = function (e, t) {
      t = t.domEvent;
      var i = {children: t.shiftKey, all: t.ctrlKey || t.metaKey, siblings: t.altKey}, n = this.$toggleFoldWidget(e, i);
      if (!n) {
        var s = t.target || t.srcElement;
        s && /ace_fold-widget/.test(s.className) && (s.className += " ace_invalid")
      }
    }, this.$toggleFoldWidget = function (e, t) {
      if (this.getFoldWidget) {
        var i = this.getFoldWidget(e), n = this.getLine(e), s = "end" === i ? -1 : 1,
          o = this.getFoldAt(e, -1 === s ? 0 : n.length, s);
        if (o) return void (t.children || t.all ? this.removeFold(o) : this.expandFold(o));
        var r = this.getFoldWidgetRange(e, !0);
        if (r && !r.isMultiLine() && (o = this.getFoldAt(r.start.row, r.start.column, 1), o && r.isEqual(o.range))) return void this.removeFold(o);
        if (t.siblings) {
          var a = this.getParentFoldRangeData(e);
          if (a.range) var l = a.range.start.row + 1, h = a.range.end.row;
          this.foldAll(l, h, t.all ? 1e4 : 0)
        } else t.children ? (h = r ? r.end.row : this.getLength(), this.foldAll(e + 1, h, t.all ? 1e4 : 0)) : r && (t.all && (r.collapseChildren = 1e4), this.addFold("...", r));
        return r
      }
    }, this.toggleFoldWidget = function (e) {
      var t = this.selection.getCursor().row;
      t = this.getRowFoldStart(t);
      var i = this.$toggleFoldWidget(t, {});
      if (!i) {
        var n = this.getParentFoldRangeData(t, !0);
        if (i = n.range || n.firstRange) {
          t = i.start.row;
          var s = this.getFoldAt(t, this.getLine(t).length, 1);
          s ? this.removeFold(s) : this.addFold("...", i)
        }
      }
    }, this.updateFoldWidgets = function (e) {
      var t = e.data, i = t.range, n = i.start.row, s = i.end.row - n;
      if (0 === s) this.foldWidgets[n] = null; else if ("removeText" == t.action || "removeLines" == t.action) this.foldWidgets.splice(n, s + 1, null); else {
        var o = Array(s + 1);
        o.unshift(n, 1), this.foldWidgets.splice.apply(this.foldWidgets, o)
      }
    }, this.tokenizerUpdateFoldWidgets = function (e) {
      var t = e.data;
      t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
    }
  }

  var s = e("../range").Range, o = e("./fold_line").FoldLine, r = e("./fold").Fold,
    a = e("../token_iterator").TokenIterator;
  t.Folding = n
}), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (e, t, i) {
  "use strict";

  function n() {
    this.findMatchingBracket = function (e, t) {
      if (0 == e.column) return null;
      var i = t || this.getLine(e.row).charAt(e.column - 1);
      if ("" == i) return null;
      var n = i.match(/([\(\[\{])|([\)\]\}])/);
      return n ? n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e) : null
    }, this.getBracketRange = function (e) {
      var t, i = this.getLine(e.row), n = !0, s = i.charAt(e.column - 1), r = s && s.match(/([\(\[\{])|([\)\]\}])/);
      if (r || (s = i.charAt(e.column), e = {
        row: e.row,
        column: e.column + 1
      }, r = s && s.match(/([\(\[\{])|([\)\]\}])/), n = !1), !r) return null;
      if (r[1]) {
        var a = this.$findClosingBracket(r[1], e);
        if (!a) return null;
        t = o.fromPoints(e, a), n || (t.end.column++, t.start.column--), t.cursor = t.end
      } else {
        var a = this.$findOpeningBracket(r[2], e);
        if (!a) return null;
        t = o.fromPoints(a, e), n || (t.start.column++, t.end.column--), t.cursor = t.start
      }
      return t
    }, this.$brackets = {
      ")": "(",
      "(": ")",
      "]": "[",
      "[": "]",
      "{": "}",
      "}": "{"
    }, this.$findOpeningBracket = function (e, t, i) {
      var n = this.$brackets[e], o = 1, r = new s(this, t.row, t.column), a = r.getCurrentToken();
      if (a || (a = r.stepForward()), a) {
        i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
        for (var l = t.column - r.getCurrentTokenColumn() - 2, h = a.value; ;) {
          for (; l >= 0;) {
            var c = h.charAt(l);
            if (c == n) {
              if (o -= 1, 0 == o) return {row: r.getCurrentTokenRow(), column: l + r.getCurrentTokenColumn()}
            } else c == e && (o += 1);
            l -= 1
          }
          do a = r.stepBackward(); while (a && !i.test(a.type));
          if (null == a) break;
          h = a.value, l = h.length - 1
        }
        return null
      }
    }, this.$findClosingBracket = function (e, t, i) {
      var n = this.$brackets[e], o = 1, r = new s(this, t.row, t.column), a = r.getCurrentToken();
      if (a || (a = r.stepForward()), a) {
        i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
        for (var l = t.column - r.getCurrentTokenColumn(); ;) {
          for (var h = a.value, c = h.length; c > l;) {
            var u = h.charAt(l);
            if (u == n) {
              if (o -= 1, 0 == o) return {row: r.getCurrentTokenRow(), column: l + r.getCurrentTokenColumn()}
            } else u == e && (o += 1);
            l += 1
          }
          do a = r.stepForward(); while (a && !i.test(a.type));
          if (null == a) break;
          l = 0
        }
        return null
      }
    }
  }

  var s = e("../token_iterator").TokenIterator, o = e("../range").Range;
  t.BracketMatch = n
}), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function (e, t, i) {
  "use strict";

  function n() {
    this.updateDataOnDocChange = function (e) {
      var t, i, n = e.data, s = n.range;
      if (s.end.row != s.start.row) if ("insertText" == n.action ? (t = s.end.row - s.start.row, i = 0 == s.start.column ? s.start.row : s.start.row + 1) : "insertLines" == n.action ? (t = s.end.row - s.start.row, i = s.start.row) : "removeText" == n.action ? (t = s.start.row - s.end.row, i = s.start.row) : "removeLines" == n.action && (t = s.start.row - s.end.row, i = s.start.row), t > 0) {
        var o = Array(t);
        o.unshift(i, 0), this.$breakpoints.splice.apply(this.$breakpoints, o)
      } else if (0 > t) {
        var r = this.$breakpoints.splice(i + 1, -t);
        if (!this.$breakpoints[i]) for (var a in r) if (r[a]) {
          this.$breakpoints[i] = r[a];
          break
        }
      }
    }, this.$init = function () {
      this.doc.on("change", this.updateDataOnDocChange.bind(this))
    }
  }

  var s = e("./lib/oop"), o = e("./lib/lang"), r = e("./config"), a = e("./lib/event_emitter").EventEmitter,
    l = e("./selection").Selection, h = e("./mode/text").Mode, c = e("./range").Range, u = e("./document").Document,
    d = e("./background_tokenizer").BackgroundTokenizer, g = e("./search_highlight").SearchHighlight,
    f = function (e, t) {
      this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.$foldData.toString = function () {
        return this.join("\n")
      }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new u(e)), this.setDocument(e), this.selection = new l(this), r.resetOptions(this), this.setMode(t), r._signal("session", this)
    };
  (function () {
    function e(e) {
      return 4352 > e ? !1 : e >= 4352 && 4447 >= e || e >= 4515 && 4519 >= e || e >= 4602 && 4607 >= e || e >= 9001 && 9002 >= e || e >= 11904 && 11929 >= e || e >= 11931 && 12019 >= e || e >= 12032 && 12245 >= e || e >= 12272 && 12283 >= e || e >= 12288 && 12350 >= e || e >= 12353 && 12438 >= e || e >= 12441 && 12543 >= e || e >= 12549 && 12589 >= e || e >= 12593 && 12686 >= e || e >= 12688 && 12730 >= e || e >= 12736 && 12771 >= e || e >= 12784 && 12830 >= e || e >= 12832 && 12871 >= e || e >= 12880 && 13054 >= e || e >= 13056 && 19903 >= e || e >= 19968 && 42124 >= e || e >= 42128 && 42182 >= e || e >= 43360 && 43388 >= e || e >= 44032 && 55203 >= e || e >= 55216 && 55238 >= e || e >= 55243 && 55291 >= e || e >= 63744 && 64255 >= e || e >= 65040 && 65049 >= e || e >= 65072 && 65106 >= e || e >= 65108 && 65126 >= e || e >= 65128 && 65131 >= e || e >= 65281 && 65376 >= e || e >= 65504 && 65510 >= e
    }

    s.implement(this, a), this.setDocument = function (e) {
      this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
    }, this.getDocument = function () {
      return this.doc
    }, this.$resetRowCache = function (e) {
      if (!e) return this.$docRowCache = [], void (this.$screenRowCache = []);
      var t = this.$docRowCache.length, i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
      t > i && (this.$docRowCache.splice(i, t), this.$screenRowCache.splice(i, t))
    }, this.$getRowCacheIndex = function (e, t) {
      for (var i = 0, n = e.length - 1; n >= i;) {
        var s = i + n >> 1, o = e[s];
        if (t > o) i = s + 1; else {
          if (!(o > t)) return s;
          n = s - 1
        }
      }
      return i - 1
    }, this.resetCaches = function () {
      this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
    }, this.onChangeFold = function (e) {
      var t = e.data;
      this.$resetRowCache(t.start.row)
    }, this.onChange = function (e) {
      var t = e.data;
      this.$modified = !0, this.$resetRowCache(t.range.start.row);
      var i = this.$updateInternalDataOnChange(e);
      this.$fromUndo || !this.$undoManager || t.ignore || (this.$deltasDoc.push(t), i && 0 != i.length && this.$deltasFold.push({
        action: "removeFolds",
        folds: i
      }), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(t), this._signal("change", e)
    }, this.setValue = function (e) {
      this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
    }, this.getValue = this.toString = function () {
      return this.doc.getValue()
    }, this.getSelection = function () {
      return this.selection
    }, this.getState = function (e) {
      return this.bgTokenizer.getState(e)
    }, this.getTokens = function (e) {
      return this.bgTokenizer.getTokens(e)
    }, this.getTokenAt = function (e, t) {
      var i, n = this.bgTokenizer.getTokens(e), s = 0;
      if (null == t) o = n.length - 1, s = this.getLine(e).length; else for (var o = 0; o < n.length && (s += n[o].value.length, !(s >= t)); o++) ;
      return (i = n[o]) ? (i.index = o, i.start = s - i.value.length, i) : null
    }, this.setUndoManager = function (e) {
      if (this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel(), e) {
        var t = this;
        this.$syncInformUndoManager = function () {
          t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({
            group: "fold",
            deltas: t.$deltasFold
          }), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({
            group: "doc",
            deltas: t.$deltasDoc
          }), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({
            action: "aceupdate",
            args: [t.$deltas, t],
            merge: t.mergeUndoDeltas
          }), t.mergeUndoDeltas = !1, t.$deltas = []
        }, this.$informUndoManager = o.delayedCall(this.$syncInformUndoManager)
      }
    }, this.markUndoGroup = function () {
      this.$syncInformUndoManager && this.$syncInformUndoManager()
    }, this.$defaultUndoManager = {
      undo: function () {
      }, redo: function () {
      }, reset: function () {
      }
    }, this.getUndoManager = function () {
      return this.$undoManager || this.$defaultUndoManager
    }, this.getTabString = function () {
      return this.getUseSoftTabs() ? o.stringRepeat(" ", this.getTabSize()) : "	"
    }, this.setUseSoftTabs = function (e) {
      this.setOption("useSoftTabs", e)
    }, this.getUseSoftTabs = function () {
      return this.$useSoftTabs && !this.$mode.$indentWithTabs
    }, this.setTabSize = function (e) {
      this.setOption("tabSize", e)
    }, this.getTabSize = function () {
      return this.$tabSize
    }, this.isTabStop = function (e) {
      return this.$useSoftTabs && e.column % this.$tabSize === 0
    }, this.$overwrite = !1, this.setOverwrite = function (e) {
      this.setOption("overwrite", e)
    }, this.getOverwrite = function () {
      return this.$overwrite
    }, this.toggleOverwrite = function () {
      this.setOverwrite(!this.$overwrite)
    }, this.addGutterDecoration = function (e, t) {
      this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
    }, this.removeGutterDecoration = function (e, t) {
      this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
    }, this.getBreakpoints = function () {
      return this.$breakpoints
    }, this.setBreakpoints = function (e) {
      this.$breakpoints = [];
      for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
      this._signal("changeBreakpoint", {})
    }, this.clearBreakpoints = function () {
      this.$breakpoints = [], this._signal("changeBreakpoint", {})
    }, this.setBreakpoint = function (e, t) {
      void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
    }, this.clearBreakpoint = function (e) {
      delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
    }, this.addMarker = function (e, t, i, n) {
      var s = this.$markerId++,
        o = {range: e, type: i || "line", renderer: "function" == typeof i ? i : null, clazz: t, inFront: !!n, id: s};
      return n ? (this.$frontMarkers[s] = o, this._signal("changeFrontMarker")) : (this.$backMarkers[s] = o, this._signal("changeBackMarker")), s
    }, this.addDynamicMarker = function (e, t) {
      if (e.update) {
        var i = this.$markerId++;
        return e.id = i, e.inFront = !!t, t ? (this.$frontMarkers[i] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = e, this._signal("changeBackMarker")), e
      }
    }, this.removeMarker = function (e) {
      var t = this.$frontMarkers[e] || this.$backMarkers[e];
      if (t) {
        var i = t.inFront ? this.$frontMarkers : this.$backMarkers;
        t && (delete i[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
      }
    }, this.getMarkers = function (e) {
      return e ? this.$frontMarkers : this.$backMarkers
    }, this.highlight = function (e) {
      if (!this.$searchHighlight) {
        var t = new g(null, "ace_selected-word", "text");
        this.$searchHighlight = this.addDynamicMarker(t)
      }
      this.$searchHighlight.setRegexp(e)
    }, this.highlightLines = function (e, t, i, n) {
      "number" != typeof t && (i = t, t = e), i || (i = "ace_step");
      var s = new c(e, 0, t, 1 / 0);
      return s.id = this.addMarker(s, i, "fullLine", n), s
    }, this.setAnnotations = function (e) {
      this.$annotations = e, this._signal("changeAnnotation", {})
    }, this.getAnnotations = function () {
      return this.$annotations || []
    }, this.clearAnnotations = function () {
      this.setAnnotations([])
    }, this.$detectNewLine = function (e) {
      var t = e.match(/^.*?(\r?\n)/m);
      t ? this.$autoNewLine = t[1] : this.$autoNewLine = "\n"
    }, this.getWordRange = function (e, t) {
      var i = this.getLine(e), n = !1;
      if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)), n || (n = !!i.charAt(t).match(this.tokenRe)), n) var s = this.tokenRe; else if (/^\s+$/.test(i.slice(t - 1, t + 1))) var s = /\s/; else var s = this.nonTokenRe;
      var o = t;
      if (o > 0) {
        do o--; while (o >= 0 && i.charAt(o).match(s));
        o++
      }
      for (var r = t; r < i.length && i.charAt(r).match(s);) r++;
      return new c(e, o, e, r)
    }, this.getAWordRange = function (e, t) {
      for (var i = this.getWordRange(e, t), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/);) i.end.column += 1;
      return i
    }, this.setNewLineMode = function (e) {
      this.doc.setNewLineMode(e)
    }, this.getNewLineMode = function () {
      return this.doc.getNewLineMode()
    }, this.setUseWorker = function (e) {
      this.setOption("useWorker", e)
    }, this.getUseWorker = function () {
      return this.$useWorker
    }, this.onReloadTokenizer = function (e) {
      var t = e.data;
      this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
    }, this.$modes = {}, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
      if (e && "object" == typeof e) {
        if (e.getTokenizer) return this.$onChangeMode(e);
        var i = e, n = i.path
      } else n = e || "ace/mode/text";
      return this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new h), this.$modes[n] && !i ? (this.$onChangeMode(this.$modes[n]), void (t && t())) : (this.$modeId = n, r.loadModule(["mode", n], function (e) {
        return this.$modeId !== n ? t && t() : (this.$modes[n] && !i ? this.$onChangeMode(this.$modes[n]) : e && e.Mode && (e = new e.Mode(i), i || (this.$modes[n] = e, e.$id = n), this.$onChangeMode(e)), void (t && t()))
      }.bind(this)), void (this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)))
    }, this.$onChangeMode = function (e, t) {
      if (t || (this.$modeId = e.$id), this.$mode !== e) {
        this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
        var i = e.getTokenizer();
        if (void 0 !== i.addEventListener) {
          var n = this.onReloadTokenizer.bind(this);
          i.addEventListener("update", n)
        }
        if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i); else {
          this.bgTokenizer = new d(i);
          var s = this;
          this.bgTokenizer.addEventListener("update", function (e) {
            s._signal("tokenizerUpdate", e)
          })
        }
        this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
      }
    }, this.$stopWorker = function () {
      this.$worker && (this.$worker.terminate(), this.$worker = null)
    }, this.$startWorker = function () {
      try {
        this.$worker = this.$mode.createWorker(this)
      } catch (e) {
        r.warn("Could not load worker", e), this.$worker = null
      }
    }, this.getMode = function () {
      return this.$mode
    }, this.$scrollTop = 0, this.setScrollTop = function (e) {
      this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
    }, this.getScrollTop = function () {
      return this.$scrollTop
    }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
      this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
    }, this.getScrollLeft = function () {
      return this.$scrollLeft
    }, this.getScreenWidth = function () {
      return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
    }, this.getLineWidgetMaxWidth = function () {
      if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
      var e = 0;
      return this.lineWidgets.forEach(function (t) {
        t && t.screenWidth > e && (e = t.screenWidth)
      }), this.lineWidgetWidth = e
    }, this.$computeWidth = function (e) {
      if (this.$modified || e) {
        if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
        for (var t = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, s = 0, o = this.$foldData[s], r = o ? o.start.row : 1 / 0, a = t.length, l = 0; a > l; l++) {
          if (l > r) {
            if (l = o.end.row + 1, l >= a) break;
            o = this.$foldData[s++], r = o ? o.start.row : 1 / 0
          }
          null == i[l] && (i[l] = this.$getStringScreenWidth(t[l])[0]), i[l] > n && (n = i[l])
        }
        this.screenWidth = n
      }
    }, this.getLine = function (e) {
      return this.doc.getLine(e)
    }, this.getLines = function (e, t) {
      return this.doc.getLines(e, t)
    }, this.getLength = function () {
      return this.doc.getLength()
    }, this.getTextRange = function (e) {
      return this.doc.getTextRange(e || this.selection.getRange())
    }, this.insert = function (e, t) {
      return this.doc.insert(e, t)
    }, this.remove = function (e) {
      return this.doc.remove(e)
    }, this.undoChanges = function (e, t) {
      if (e.length) {
        this.$fromUndo = !0;
        for (var i = null, n = e.length - 1; -1 != n; n--) {
          var s = e[n];
          "doc" == s.group ? (this.doc.revertDeltas(s.deltas), i = this.$getUndoSelection(s.deltas, !0, i)) : s.deltas.forEach(function (e) {
            this.addFolds(e.folds)
          }, this)
        }
        return this.$fromUndo = !1, i && this.$undoSelect && !t && this.selection.setSelectionRange(i), i
      }
    }, this.redoChanges = function (e, t) {
      if (e.length) {
        this.$fromUndo = !0;
        for (var i = null, n = 0; n < e.length; n++) {
          var s = e[n];
          "doc" == s.group && (this.doc.applyDeltas(s.deltas), i = this.$getUndoSelection(s.deltas, !1, i))
        }
        return this.$fromUndo = !1, i && this.$undoSelect && !t && this.selection.setSelectionRange(i), i
      }
    }, this.setUndoSelect = function (e) {
      this.$undoSelect = e
    }, this.$getUndoSelection = function (e, t, i) {
      function n(e) {
        var i = "insertText" === e.action || "insertLines" === e.action;
        return t ? !i : i
      }

      var s, o, r = e[0], a = !1;
      n(r) ? (s = c.fromPoints(r.range.start, r.range.end), a = !0) : (s = c.fromPoints(r.range.start, r.range.start), a = !1);
      for (var l = 1; l < e.length; l++) r = e[l], n(r) ? (o = r.range.start, -1 == s.compare(o.row, o.column) && s.setStart(r.range.start), o = r.range.end, 1 == s.compare(o.row, o.column) && s.setEnd(r.range.end), a = !0) : (o = r.range.start, -1 == s.compare(o.row, o.column) && (s = c.fromPoints(r.range.start, r.range.start)), a = !1);
      if (null != i) {
        0 === c.comparePoints(i.start, s.start) && (i.start.column += s.end.column - s.start.column, i.end.column += s.end.column - s.start.column);
        var h = i.compareRange(s);
        1 == h ? s.setStart(i.start) : -1 == h && s.setEnd(i.end);
      }
      return s
    }, this.replace = function (e, t) {
      return this.doc.replace(e, t)
    }, this.moveText = function (e, t, i) {
      var n = this.getTextRange(e), s = this.getFoldsInRange(e), o = c.fromPoints(t, t);
      if (!i) {
        this.remove(e);
        var r = e.start.row - e.end.row, a = r ? -e.end.column : e.start.column - e.end.column;
        a && (o.start.row == e.end.row && o.start.column > e.end.column && (o.start.column += a), o.end.row == e.end.row && o.end.column > e.end.column && (o.end.column += a)), r && o.start.row >= e.end.row && (o.start.row += r, o.end.row += r)
      }
      if (o.end = this.insert(o.start, n), s.length) {
        var l = e.start, h = o.start, r = h.row - l.row, a = h.column - l.column;
        this.addFolds(s.map(function (e) {
          return e = e.clone(), e.start.row == l.row && (e.start.column += a), e.end.row == l.row && (e.end.column += a), e.start.row += r, e.end.row += r, e
        }))
      }
      return o
    }, this.indentRows = function (e, t, i) {
      i = i.replace(/\t/g, this.getTabString());
      for (var n = e; t >= n; n++) this.insert({row: n, column: 0}, i)
    }, this.outdentRows = function (e) {
      for (var t = e.collapseRows(), i = new c(0, 0, 0, 0), n = this.getTabSize(), s = t.start.row; s <= t.end.row; ++s) {
        var o = this.getLine(s);
        i.start.row = s, i.end.row = s;
        for (var r = 0; n > r && " " == o.charAt(r); ++r) ;
        n > r && "	" == o.charAt(r) ? (i.start.column = r, i.end.column = r + 1) : (i.start.column = 0, i.end.column = r), this.remove(i)
      }
    }, this.$moveLines = function (e, t, i) {
      if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), 0 > i) {
        var n = this.getRowFoldStart(e + i);
        if (0 > n) return 0;
        var s = n - e
      } else if (i > 0) {
        var n = this.getRowFoldEnd(t + i);
        if (n > this.doc.getLength() - 1) return 0;
        var s = n - t
      } else {
        e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);
        var s = t - e + 1
      }
      var o = new c(e, 0, t, Number.MAX_VALUE), r = this.getFoldsInRange(o).map(function (e) {
        return e = e.clone(), e.start.row += s, e.end.row += s, e
      }), a = 0 == i ? this.doc.getLines(e, t) : this.doc.removeLines(e, t);
      return this.doc.insertLines(e + s, a), r.length && this.addFolds(r), s
    }, this.moveLinesUp = function (e, t) {
      return this.$moveLines(e, t, -1)
    }, this.moveLinesDown = function (e, t) {
      return this.$moveLines(e, t, 1)
    }, this.duplicateLines = function (e, t) {
      return this.$moveLines(e, t, 0)
    }, this.$clipRowToDocument = function (e) {
      return Math.max(0, Math.min(e, this.doc.getLength() - 1))
    }, this.$clipColumnToRow = function (e, t) {
      return 0 > t ? 0 : Math.min(this.doc.getLine(e).length, t)
    }, this.$clipPositionToDocument = function (e, t) {
      if (t = Math.max(0, t), 0 > e) e = 0, t = 0; else {
        var i = this.doc.getLength();
        e >= i ? (e = i - 1, t = this.doc.getLine(i - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
      }
      return {row: e, column: t}
    }, this.$clipRangeToDocument = function (e) {
      e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
      var t = this.doc.getLength() - 1;
      return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
    }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
      min: null,
      max: null
    }, this.setUseWrapMode = function (e) {
      if (e != this.$useWrapMode) {
        if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
          var t = this.getLength();
          this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
        }
        this._signal("changeWrapMode")
      }
    }, this.getUseWrapMode = function () {
      return this.$useWrapMode
    }, this.setWrapLimitRange = function (e, t) {
      (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) && (this.$wrapLimitRange = {
        min: e,
        max: t
      }, this.$modified = !0, this.$useWrapMode && this._signal("changeWrapMode"))
    }, this.adjustWrapLimit = function (e, t) {
      var i = this.$wrapLimitRange;
      i.max < 0 && (i = {min: t, max: t});
      var n = this.$constrainWrapLimit(e, i.min, i.max);
      return n != this.$wrapLimit && n > 1 ? (this.$wrapLimit = n, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1
    }, this.$constrainWrapLimit = function (e, t, i) {
      return t && (e = Math.max(t, e)), i && (e = Math.min(i, e)), e
    }, this.getWrapLimit = function () {
      return this.$wrapLimit
    }, this.setWrapLimit = function (e) {
      this.setWrapLimitRange(e, e)
    }, this.getWrapLimitRange = function () {
      return {min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max}
    }, this.$updateInternalDataOnChange = function (e) {
      var t, i = this.$useWrapMode, n = e.data.action, s = e.data.range.start.row, o = e.data.range.end.row,
        r = e.data.range.start, a = e.data.range.end, l = null;
      if (-1 != n.indexOf("Lines") ? (o = "insertLines" == n ? s + e.data.lines.length : s, t = e.data.lines ? e.data.lines.length : o - s) : t = o - s, this.$updating = !0, 0 != t) if (-1 != n.indexOf("remove")) {
        this[i ? "$wrapData" : "$rowLengthCache"].splice(s, t);
        var h = this.$foldData;
        l = this.getFoldsInRange(e.data.range), this.removeFolds(l);
        var c = this.getFoldLine(a.row), u = 0;
        if (c) {
          c.addRemoveChars(a.row, a.column, r.column - a.column), c.shiftRow(-t);
          var d = this.getFoldLine(s);
          d && d !== c && (d.merge(c), c = d), u = h.indexOf(c) + 1
        }
        for (u; u < h.length; u++) {
          var c = h[u];
          c.start.row >= a.row && c.shiftRow(-t)
        }
        o = s
      } else {
        var g = Array(t);
        g.unshift(s, 0);
        var f = i ? this.$wrapData : this.$rowLengthCache;
        f.splice.apply(f, g);
        var h = this.$foldData, c = this.getFoldLine(s), u = 0;
        if (c) {
          var m = c.range.compareInside(r.row, r.column);
          0 == m ? (c = c.split(r.row, r.column), c && (c.shiftRow(t), c.addRemoveChars(o, 0, a.column - r.column))) : -1 == m && (c.addRemoveChars(s, 0, a.column - r.column), c.shiftRow(t)), u = h.indexOf(c) + 1
        }
        for (u; u < h.length; u++) {
          var c = h[u];
          c.start.row >= s && c.shiftRow(t)
        }
      } else {
        t = Math.abs(e.data.range.start.column - e.data.range.end.column), -1 != n.indexOf("remove") && (l = this.getFoldsInRange(e.data.range), this.removeFolds(l), t = -t);
        var c = this.getFoldLine(s);
        c && c.addRemoveChars(s, r.column, t)
      }
      return i && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, i ? this.$updateWrapData(s, o) : this.$updateRowLengthCache(s, o), l
    }, this.$updateRowLengthCache = function (e, t, i) {
      this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
    }, this.$updateWrapData = function (e, t) {
      var i, s, o = this.doc.getAllLines(), r = this.getTabSize(), a = this.$wrapData, h = this.$wrapLimit, c = e;
      for (t = Math.min(t, o.length - 1); t >= c;) s = this.getFoldLine(c, s), s ? (i = [], s.walk(function (e, t, s, r) {
        var a;
        if (null != e) {
          a = this.$getDisplayTokens(e, i.length), a[0] = n;
          for (var h = 1; h < a.length; h++) a[h] = l
        } else a = this.$getDisplayTokens(o[t].substring(r, s), i.length);
        i = i.concat(a)
      }.bind(this), s.end.row, o[s.end.row].length + 1), a[s.start.row] = this.$computeWrapSplits(i, h, r), c = s.end.row + 1) : (i = this.$getDisplayTokens(o[c]), a[c] = this.$computeWrapSplits(i, h, r), c++)
    };
    var t = 1, i = 2, n = 3, l = 4, u = 9, f = 10, m = 11, p = 12;
    this.$computeWrapSplits = function (e, t) {
      function s(t) {
        var i = e.slice(a, t), n = i.length;
        i.join("").replace(/12/g, function () {
          n -= 1
        }).replace(/2/g, function () {
          n -= 1
        }), h += n, o.push(h), a = t
      }

      if (0 == e.length) return [];
      for (var o = [], r = e.length, a = 0, h = 0, c = this.$wrapAsCode; r - a > t;) {
        var d = a + t;
        if (e[d - 1] >= f && e[d] >= f) s(d); else if (e[d] != n && e[d] != l) {
          for (var g = Math.max(d - (c ? 10 : t - (t >> 2)), a - 1); d > g && e[d] < n;) d--;
          if (c) {
            for (; d > g && e[d] < n;) d--;
            for (; d > g && e[d] == u;) d--
          } else for (; d > g && e[d] < f;) d--;
          d > g ? s(++d) : (d = a + t, e[d] == i && d--, s(d))
        } else {
          for (d; d != a - 1 && e[d] != n; d--) ;
          if (d > a) {
            s(d);
            continue
          }
          for (d = a + t; d < e.length && e[d] == l; d++) ;
          if (d == e.length) break;
          s(d)
        }
      }
      return o
    }, this.$getDisplayTokens = function (n, s) {
      var o, r = [];
      s = s || 0;
      for (var a = 0; a < n.length; a++) {
        var l = n.charCodeAt(a);
        if (9 == l) {
          o = this.getScreenTabSize(r.length + s), r.push(m);
          for (var h = 1; o > h; h++) r.push(p)
        } else 32 == l ? r.push(f) : l > 39 && 48 > l || l > 57 && 64 > l ? r.push(u) : l >= 4352 && e(l) ? r.push(t, i) : r.push(t)
      }
      return r
    }, this.$getStringScreenWidth = function (t, i, n) {
      if (0 == i) return [0, 0];
      null == i && (i = 1 / 0), n = n || 0;
      var s, o;
      for (o = 0; o < t.length && (s = t.charCodeAt(o), n += 9 == s ? this.getScreenTabSize(n) : s >= 4352 && e(s) ? 2 : 1, !(n > i)); o++) ;
      return [n, o]
    }, this.lineWidgets = null, this.getRowLength = function (e) {
      if (this.lineWidgets) var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0; else t = 0;
      return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
    }, this.getRowLineCount = function (e) {
      return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
    }, this.getScreenLastRowColumn = function (e) {
      var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
      return this.documentToScreenColumn(t.row, t.column)
    }, this.getDocumentLastRowColumn = function (e, t) {
      var i = this.documentToScreenRow(e, t);
      return this.getScreenLastRowColumn(i)
    }, this.getDocumentLastRowColumnPosition = function (e, t) {
      var i = this.documentToScreenRow(e, t);
      return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
    }, this.getRowSplitData = function (e) {
      return this.$useWrapMode ? this.$wrapData[e] : void 0
    }, this.getScreenTabSize = function (e) {
      return this.$tabSize - e % this.$tabSize
    }, this.screenToDocumentRow = function (e, t) {
      return this.screenToDocumentPosition(e, t).row
    }, this.screenToDocumentColumn = function (e, t) {
      return this.screenToDocumentPosition(e, t).column
    }, this.screenToDocumentPosition = function (e, t) {
      if (0 > e) return {row: 0, column: 0};
      var i, n, s = 0, o = 0, r = 0, a = 0, l = this.$screenRowCache, h = this.$getRowCacheIndex(l, e), c = l.length;
      if (c && h >= 0) var r = l[h], s = this.$docRowCache[h], u = e > l[c - 1]; else var u = !c;
      for (var d = this.getLength() - 1, g = this.getNextFoldLine(s), f = g ? g.start.row : 1 / 0; e >= r && (a = this.getRowLength(s), !(r + a > e || s >= d));) r += a, s++, s > f && (s = g.end.row + 1, g = this.getNextFoldLine(s, g), f = g ? g.start.row : 1 / 0), u && (this.$docRowCache.push(s), this.$screenRowCache.push(r));
      if (g && g.start.row <= s) i = this.getFoldDisplayLine(g), s = g.start.row; else {
        if (e >= r + a || s > d) return {row: d, column: this.getLine(d).length};
        i = this.getLine(s), g = null
      }
      if (this.$useWrapMode) {
        var m = this.$wrapData[s];
        if (m) {
          var p = Math.floor(e - r);
          n = m[p], p > 0 && m.length && (o = m[p - 1] || m[m.length - 1], i = i.substring(o))
        }
      }
      return o += this.$getStringScreenWidth(i, t)[1], this.$useWrapMode && o >= n && (o = n - 1), g ? g.idxToPosition(o) : {
        row: s,
        column: o
      }
    }, this.documentToScreenPosition = function (e, t) {
      if ("undefined" == typeof t) var i = this.$clipPositionToDocument(e.row, e.column); else i = this.$clipPositionToDocument(e, t);
      e = i.row, t = i.column;
      var n = 0, s = null, o = null;
      o = this.getFoldAt(e, t, 1), o && (e = o.start.row, t = o.start.column);
      var r, a = 0, l = this.$docRowCache, h = this.$getRowCacheIndex(l, e), c = l.length;
      if (c && h >= 0) var a = l[h], n = this.$screenRowCache[h], u = e > l[c - 1]; else var u = !c;
      for (var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0; e > a;) {
        if (a >= g) {
          if (r = d.end.row + 1, r > e) break;
          d = this.getNextFoldLine(r, d), g = d ? d.start.row : 1 / 0
        } else r = a + 1;
        n += this.getRowLength(a), a = r, u && (this.$docRowCache.push(a), this.$screenRowCache.push(n))
      }
      var f = "";
      if (d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), s = d.start.row) : (f = this.getLine(e).substring(0, t), s = e), this.$useWrapMode) {
        var m = this.$wrapData[s];
        if (m) {
          for (var p = 0; f.length >= m[p];) n++, p++;
          f = f.substring(m[p - 1] || 0, f.length)
        }
      }
      return {row: n, column: this.$getStringScreenWidth(f)[0]}
    }, this.documentToScreenColumn = function (e, t) {
      return this.documentToScreenPosition(e, t).column
    }, this.documentToScreenRow = function (e, t) {
      return this.documentToScreenPosition(e, t).row
    }, this.getScreenLength = function () {
      var e = 0, t = null;
      if (this.$useWrapMode) for (var i = this.$wrapData.length, n = 0, s = 0, t = this.$foldData[s++], o = t ? t.start.row : 1 / 0; i > n;) {
        var r = this.$wrapData[n];
        e += r ? r.length + 1 : 1, n++, n > o && (n = t.end.row + 1, t = this.$foldData[s++], o = t ? t.start.row : 1 / 0)
      } else {
        e = this.getLength();
        for (var a = this.$foldData, s = 0; s < a.length; s++) t = a[s], e -= t.end.row - t.start.row
      }
      return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
    }, this.$setFontMetrics = function (e) {
    }, this.destroy = function () {
      this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
    }
  }).call(f.prototype), n.call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), r.defineOptions(f.prototype, "session", {
    wrap: {
      set: function (e) {
        if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e) if (this.$wrap = e, e) {
          var t = "number" == typeof e ? e : null;
          this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
        } else this.setUseWrapMode(!1)
      }, get: function () {
        return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
      }, handlesSet: !0
    }, wrapMethod: {
      set: function (e) {
        e = "auto" == e ? "text" != this.$mode.type : "text" != e, e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$modified = !0, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
      }, initialValue: "auto"
    }, firstLineNumber: {
      set: function () {
        this._signal("changeBreakpoint")
      }, initialValue: 1
    }, useWorker: {
      set: function (e) {
        this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
      }, initialValue: !0
    }, useSoftTabs: {initialValue: !0}, tabSize: {
      set: function (e) {
        isNaN(e) || this.$tabSize === e || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
      }, initialValue: 4, handlesSet: !0
    }, overwrite: {
      set: function (e) {
        this._signal("changeOverwrite")
      }, initialValue: !1
    }, newLineMode: {
      set: function (e) {
        this.doc.setNewLineMode(e)
      }, get: function () {
        return this.doc.getNewLineMode()
      }, handlesSet: !0
    }, mode: {
      set: function (e) {
        this.setMode(e)
      }, get: function () {
        return this.$modeId
      }
    }
  }), t.EditSession = f
}), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("./lib/lang"), s = e("./lib/oop"), o = e("./range").Range, r = function () {
    this.$options = {}
  };
  (function () {
    this.set = function (e) {
      return s.mixin(this.$options, e), this
    }, this.getOptions = function () {
      return n.copyObject(this.$options)
    }, this.setOptions = function (e) {
      this.$options = e
    }, this.find = function (e) {
      var t = this.$options, i = this.$matchIterator(e, t);
      if (!i) return !1;
      var n = null;
      return i.forEach(function (e, i, s) {
        if (e.start) n = e; else {
          var r = e.offset + (s || 0);
          if (n = new o(i, r, i, r + e.length), !e.length && t.start && t.start.start && 0 != t.skipCurrent && n.isEqual(t.start)) return n = null, !1
        }
        return !0
      }), n
    }, this.findAll = function (e) {
      var t = this.$options;
      if (!t.needle) return [];
      this.$assembleRegExp(t);
      var i = t.range, s = i ? e.getLines(i.start.row, i.end.row) : e.doc.getAllLines(), r = [], a = t.re;
      if (t.$isMultiLine) {
        var l, h = a.length, c = s.length - h;
        e: for (var u = a.offset || 0; c >= u; u++) {
          for (var d = 0; h > d; d++) if (-1 == s[u + d].search(a[d])) continue e;
          var g = s[u], f = s[u + h - 1], m = g.length - g.match(a[0])[0].length, p = f.match(a[h - 1])[0].length;
          l && l.end.row === u && l.end.column > m || (r.push(l = new o(u, m, u + h - 1, p)), h > 2 && (u = u + h - 2))
        }
      } else for (var A = 0; A < s.length; A++) for (var C = n.getMatchOffsets(s[A], a), d = 0; d < C.length; d++) {
        var F = C[d];
        r.push(new o(A, F.offset, A, F.offset + F.length))
      }
      if (i) {
        for (var v = i.start.column, w = i.start.column, A = 0, d = r.length - 1; d > A && r[A].start.column < v && r[A].start.row == i.start.row;) A++;
        for (; d > A && r[d].end.column > w && r[d].end.row == i.end.row;) d--;
        for (r = r.slice(A, d + 1), A = 0, d = r.length; d > A; A++) r[A].start.row += i.start.row, r[A].end.row += i.start.row
      }
      return r
    }, this.replace = function (e, t) {
      var i = this.$options, n = this.$assembleRegExp(i);
      if (i.$isMultiLine) return t;
      if (n) {
        var s = n.exec(e);
        if (!s || s[0].length != e.length) return null;
        if (t = e.replace(n, t), i.preserveCase) {
          t = t.split("");
          for (var o = Math.min(e.length, e.length); o--;) {
            var r = e[o];
            r && r.toLowerCase() != r ? t[o] = t[o].toUpperCase() : t[o] = t[o].toLowerCase()
          }
          t = t.join("")
        }
        return t
      }
    }, this.$matchIterator = function (e, t) {
      var i = this.$assembleRegExp(t);
      if (!i) return !1;
      var s;
      if (t.$isMultiLine) var r = i.length, a = function (t, n, a) {
        var l = t.search(i[0]);
        if (-1 != l) {
          for (var h = 1; r > h; h++) if (t = e.getLine(n + h), -1 == t.search(i[h])) return;
          var c = t.match(i[r - 1])[0].length, u = new o(n, l, n + r - 1, c);
          return 1 == i.offset ? (u.start.row--, u.start.column = Number.MAX_VALUE) : a && (u.start.column += a), s(u) ? !0 : void 0
        }
      }; else if (t.backwards) var a = function (e, t, o) {
        for (var r = n.getMatchOffsets(e, i), a = r.length - 1; a >= 0; a--) if (s(r[a], t, o)) return !0
      }; else var a = function (e, t, o) {
        for (var r = n.getMatchOffsets(e, i), a = 0; a < r.length; a++) if (s(r[a], t, o)) return !0
      };
      var l = this.$lineIterator(e, t);
      return {
        forEach: function (e) {
          s = e, l.forEach(a)
        }
      }
    }, this.$assembleRegExp = function (e, t) {
      if (e.needle instanceof RegExp) return e.re = e.needle;
      var i = e.needle;
      if (!e.needle) return e.re = !1;
      e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = "\\b" + i + "\\b");
      var s = e.caseSensitive ? "gm" : "gmi";
      if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(i, s);
      try {
        var o = new RegExp(i, s)
      } catch (r) {
        o = !1
      }
      return e.re = o
    }, this.$assembleMultilineRegExp = function (e, t) {
      for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], s = 0; s < i.length; s++) try {
        n.push(new RegExp(i[s], t))
      } catch (o) {
        return !1
      }
      return "" == i[0] ? (n.shift(), n.offset = 1) : n.offset = 0, n
    }, this.$lineIterator = function (e, t) {
      var i = 1 == t.backwards, n = 0 != t.skipCurrent, s = t.range, o = t.start;
      o || (o = s ? s[i ? "end" : "start"] : e.selection.getRange()), o.start && (o = o[n != i ? "end" : "start"]);
      var r = s ? s.start.row : 0, a = s ? s.end.row : e.getLength() - 1, l = i ? function (i) {
        var n = o.row, s = e.getLine(n).substring(0, o.column);
        if (!i(s, n)) {
          for (n--; n >= r; n--) if (i(e.getLine(n), n)) return;
          if (0 != t.wrap) for (n = a, r = o.row; n >= r; n--) if (i(e.getLine(n), n)) return
        }
      } : function (i) {
        var n = o.row, s = e.getLine(n).substr(o.column);
        if (!i(s, n, o.column)) {
          for (n += 1; a >= n; n++) if (i(e.getLine(n), n)) return;
          if (0 != t.wrap) for (n = r, a = o.row; a >= n; n++) if (i(e.getLine(n), n)) return
        }
      };
      return {forEach: l}
    }
  }).call(r.prototype), t.Search = r
}), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, i) {
  "use strict";

  function n(e, t) {
    this.platform = t || (r.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
  }

  function s(e, t) {
    n.call(this, e, t), this.$singleCommand = !1
  }

  var o = e("../lib/keys"), r = e("../lib/useragent"), a = o.KEY_MODS;
  s.prototype = n.prototype, function () {
    this.addCommand = function (e) {
      this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
    }, this.removeCommand = function (e, t) {
      var i = e && ("string" == typeof e ? e : e.name);
      e = this.commands[i], t || delete this.commands[i];
      var n = this.commandKeyBinding;
      for (var s in n) {
        var o = n[s];
        if (o == e) delete n[s]; else if (Array.isArray(o)) {
          var r = o.indexOf(e);
          -1 != r && (o.splice(r, 1), 1 == o.length && (n[s] = o[0]))
        }
      }
    }, this.bindKey = function (e, t, i) {
      return "object" == typeof e && (e = e[this.platform]), e ? "function" == typeof t ? this.addCommand({
        exec: t,
        bindKey: e,
        name: t.name || e
      }) : void e.split("|").forEach(function (e) {
        var n = "";
        if (-1 != e.indexOf(" ")) {
          var s = e.split(/\s+/);
          e = s.pop(), s.forEach(function (e) {
            var t = this.parseKeys(e), i = a[t.hashId] + t.key;
            n += (n ? " " : "") + i, this._addCommandToBinding(n, "chainKeys")
          }, this), n += " "
        }
        var o = this.parseKeys(e), r = a[o.hashId] + o.key;
        this._addCommandToBinding(n + r, t, i)
      }, this) : void 0
    }, this._addCommandToBinding = function (e, t, i) {
      var n, s = this.commandKeyBinding;
      t ? !s[e] || this.$singleCommand ? s[e] = t : (Array.isArray(s[e]) ? -1 != (n = s[e].indexOf(t)) && s[e].splice(n, 1) : s[e] = [s[e]], i || t.isDefault ? s[e].unshift(t) : s[e].push(t)) : delete s[e]
    }, this.addCommands = function (e) {
      e && Object.keys(e).forEach(function (t) {
        var i = e[t];
        if (i) {
          if ("string" == typeof i) return this.bindKey(i, t);
          "function" == typeof i && (i = {exec: i}), "object" == typeof i && (i.name || (i.name = t), this.addCommand(i))
        }
      }, this)
    }, this.removeCommands = function (e) {
      Object.keys(e).forEach(function (t) {
        this.removeCommand(e[t])
      }, this)
    }, this.bindKeys = function (e) {
      Object.keys(e).forEach(function (t) {
        this.bindKey(t, e[t])
      }, this)
    }, this._buildKeyHash = function (e) {
      this.bindKey(e.bindKey, e)
    }, this.parseKeys = function (e) {
      var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (e) {
        return e
      }), i = t.pop(), n = o[i];
      if (o.FUNCTION_KEYS[n]) i = o.FUNCTION_KEYS[n].toLowerCase(); else {
        if (!t.length) return {key: i, hashId: -1};
        if (1 == t.length && "shift" == t[0]) return {key: i.toUpperCase(), hashId: -1}
      }
      for (var s = 0, r = t.length; r--;) {
        var a = o.KEY_MODS[t[r]];
        if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[r] + " in " + e), !1;
        s |= a
      }
      return {key: i, hashId: s}
    }, this.findKeyCommand = function (e, t) {
      var i = a[e] + t;
      return this.commandKeyBinding[i]
    }, this.handleKeyboard = function (e, t, i, n) {
      var s = a[t] + i, o = this.commandKeyBinding[s];
      return e.$keyChain && (e.$keyChain += " " + s, o = this.commandKeyBinding[e.$keyChain] || o), !o || "chainKeys" != o && "chainKeys" != o[o.length - 1] ? (e.$keyChain && n > 0 && (e.$keyChain = ""), {command: o}) : (e.$keyChain = e.$keyChain || s, {command: "null"})
    }
  }.call(n.prototype), t.HashHandler = n, t.MultiHashHandler = s
}), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("../lib/oop"), s = e("../keyboard/hash_handler").MultiHashHandler,
    o = e("../lib/event_emitter").EventEmitter, r = function (e, t) {
      s.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", function (e) {
        return e.command.exec(e.editor, e.args || {})
      })
    };
  n.inherits(r, s), function () {
    n.implement(this, o), this.exec = function (e, t, i) {
      if (Array.isArray(e)) {
        for (var n = e.length; n--;) if (this.exec(e[n], t, i)) return !0;
        return !1
      }
      if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
      if (t && t.$readOnly && !e.readOnly) return !1;
      var s = {editor: t, command: e, args: i};
      return s.returnValue = this._emit("exec", s), this._signal("afterExec", s), s.returnValue === !1 ? !1 : !0
    }, this.toggleRecording = function (e) {
      return this.$inReplay ? void 0 : (e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
        this.macro.push([e.command, e.args])
      }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0))
    }, this.replay = function (e) {
      if (!this.$inReplay && this.macro) {
        if (this.recording) return this.toggleRecording(e);
        try {
          this.$inReplay = !0, this.macro.forEach(function (t) {
            "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
          }, this)
        } finally {
          this.$inReplay = !1
        }
      }
    }, this.trimMacro = function (e) {
      return e.map(function (e) {
        return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
      })
    }
  }.call(r.prototype), t.CommandManager = r
}), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function (e, t, i) {
  "use strict";

  function n(e, t) {
    return {win: e, mac: t}
  }

  var s = e("../lib/lang"), o = e("../config"), r = e("../range").Range;
  t.commands = [{
    name: "showSettingsMenu", bindKey: n("Ctrl-,", "Command-,"), exec: function (e) {
      o.loadModule("ace/ext/settings_menu", function (t) {
        t.init(e), e.showSettingsMenu()
      })
    }, readOnly: !0
  }, {
    name: "goToNextError", bindKey: n("Alt-E", "Ctrl-E"), exec: function (e) {
      o.loadModule("ace/ext/error_marker", function (t) {
        t.showErrorMarker(e, 1)
      })
    }, scrollIntoView: "animate", readOnly: !0
  }, {
    name: "goToPreviousError", bindKey: n("Alt-Shift-E", "Ctrl-Shift-E"), exec: function (e) {
      o.loadModule("ace/ext/error_marker", function (t) {
        t.showErrorMarker(e, -1)
      })
    }, scrollIntoView: "animate", readOnly: !0
  }, {
    name: "selectall", bindKey: n("Ctrl-A", "Command-A"), exec: function (e) {
      e.selectAll()
    }, readOnly: !0
  }, {
    name: "centerselection", bindKey: n(null, "Ctrl-L"), exec: function (e) {
      e.centerSelection()
    }, readOnly: !0
  }, {
    name: "gotoline", bindKey: n("Ctrl-L", "Command-L"), exec: function (e) {
      var t = parseInt(prompt("Enter line number:"), 10);
      isNaN(t) || e.gotoLine(t)
    }, readOnly: !0
  }, {
    name: "fold", bindKey: n("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function (e) {
      e.session.toggleFold(!1)
    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
  }, {
    name: "unfold",
    bindKey: n("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
    exec: function (e) {
      e.session.toggleFold(!0)
    },
    multiSelectAction: "forEach",
    scrollIntoView: "center",
    readOnly: !0
  }, {
    name: "toggleFoldWidget", bindKey: n("F2", "F2"), exec: function (e) {
      e.session.toggleFoldWidget()
    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
  }, {
    name: "toggleParentFoldWidget", bindKey: n("Alt-F2", "Alt-F2"), exec: function (e) {
      e.session.toggleFoldWidget(!0)
    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
  }, {
    name: "foldall", bindKey: n(null, "Ctrl-Command-Option-0"), exec: function (e) {
      e.session.foldAll()
    }, scrollIntoView: "center", readOnly: !0
  }, {
    name: "foldOther", bindKey: n("Alt-0", "Command-Option-0"), exec: function (e) {
      e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
    }, scrollIntoView: "center", readOnly: !0
  }, {
    name: "unfoldall", bindKey: n("Alt-Shift-0", "Command-Option-Shift-0"), exec: function (e) {
      e.session.unfold()
    }, scrollIntoView: "center", readOnly: !0
  }, {
    name: "findnext", bindKey: n("Ctrl-K", "Command-G"), exec: function (e) {
      e.findNext()
    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
  }, {
    name: "findprevious", bindKey: n("Ctrl-Shift-K", "Command-Shift-G"), exec: function (e) {
      e.findPrevious()
    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
  }, {
    name: "selectOrFindNext", bindKey: n("Alt-K", "Ctrl-G"), exec: function (e) {
      e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
    }, readOnly: !0
  }, {
    name: "selectOrFindPrevious", bindKey: n("Alt-Shift-K", "Ctrl-Shift-G"), exec: function (e) {
      e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
    }, readOnly: !0
  }, {
    name: "find", bindKey: n("Ctrl-F", "Command-F"), exec: function (e) {
      o.loadModule("ace/ext/searchbox", function (t) {
        t.Search(e)
      })
    }, readOnly: !0
  }, {
    name: "overwrite", bindKey: "Insert", exec: function (e) {
      e.toggleOverwrite()
    }, readOnly: !0
  }, {
    name: "selecttostart", bindKey: n("Ctrl-Shift-Home", "Command-Shift-Up"), exec: function (e) {
      e.getSelection().selectFileStart()
    }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
  }, {
    name: "gotostart", bindKey: n("Ctrl-Home", "Command-Home|Command-Up"), exec: function (e) {
      e.navigateFileStart()
    }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
  }, {
    name: "selectup", bindKey: n("Shift-Up", "Shift-Up"), exec: function (e) {
      e.getSelection().selectUp()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "golineup", bindKey: n("Up", "Up|Ctrl-P"), exec: function (e, t) {
      e.navigateUp(t.times)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selecttoend", bindKey: n("Ctrl-Shift-End", "Command-Shift-Down"), exec: function (e) {
      e.getSelection().selectFileEnd()
    }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
  }, {
    name: "gotoend", bindKey: n("Ctrl-End", "Command-End|Command-Down"), exec: function (e) {
      e.navigateFileEnd()
    }, multiSelectAction: "forEach", readOnly: !0, scrollIntoView: "animate", aceCommandGroup: "fileJump"
  }, {
    name: "selectdown", bindKey: n("Shift-Down", "Shift-Down"), exec: function (e) {
      e.getSelection().selectDown()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "golinedown", bindKey: n("Down", "Down|Ctrl-N"), exec: function (e, t) {
      e.navigateDown(t.times)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectwordleft", bindKey: n("Ctrl-Shift-Left", "Option-Shift-Left"), exec: function (e) {
      e.getSelection().selectWordLeft()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotowordleft", bindKey: n("Ctrl-Left", "Option-Left"), exec: function (e) {
      e.navigateWordLeft()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selecttolinestart", bindKey: n("Alt-Shift-Left", "Command-Shift-Left"), exec: function (e) {
      e.getSelection().selectLineStart()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotolinestart", bindKey: n("Alt-Left|Home", "Command-Left|Home|Ctrl-A"), exec: function (e) {
      e.navigateLineStart()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectleft", bindKey: n("Shift-Left", "Shift-Left"), exec: function (e) {
      e.getSelection().selectLeft()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotoleft", bindKey: n("Left", "Left|Ctrl-B"), exec: function (e, t) {
      e.navigateLeft(t.times)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectwordright", bindKey: n("Ctrl-Shift-Right", "Option-Shift-Right"), exec: function (e) {
      e.getSelection().selectWordRight()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotowordright", bindKey: n("Ctrl-Right", "Option-Right"), exec: function (e) {
      e.navigateWordRight()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selecttolineend", bindKey: n("Alt-Shift-Right", "Command-Shift-Right"), exec: function (e) {
      e.getSelection().selectLineEnd()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotolineend", bindKey: n("Alt-Right|End", "Command-Right|End|Ctrl-E"), exec: function (e) {
      e.navigateLineEnd()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectright", bindKey: n("Shift-Right", "Shift-Right"), exec: function (e) {
      e.getSelection().selectRight()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "gotoright", bindKey: n("Right", "Right|Ctrl-F"), exec: function (e, t) {
      e.navigateRight(t.times)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectpagedown", bindKey: "Shift-PageDown", exec: function (e) {
      e.selectPageDown()
    }, readOnly: !0
  }, {
    name: "pagedown", bindKey: n(null, "Option-PageDown"), exec: function (e) {
      e.scrollPageDown()
    }, readOnly: !0
  }, {
    name: "gotopagedown", bindKey: n("PageDown", "PageDown|Ctrl-V"), exec: function (e) {
      e.gotoPageDown()
    }, readOnly: !0
  }, {
    name: "selectpageup", bindKey: "Shift-PageUp", exec: function (e) {
      e.selectPageUp()
    }, readOnly: !0
  }, {
    name: "pageup", bindKey: n(null, "Option-PageUp"), exec: function (e) {
      e.scrollPageUp()
    }, readOnly: !0
  }, {
    name: "gotopageup", bindKey: "PageUp", exec: function (e) {
      e.gotoPageUp()
    }, readOnly: !0
  }, {
    name: "scrollup", bindKey: n("Ctrl-Up", null), exec: function (e) {
      e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
    }, readOnly: !0
  }, {
    name: "scrolldown", bindKey: n("Ctrl-Down", null), exec: function (e) {
      e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
    }, readOnly: !0
  }, {
    name: "selectlinestart", bindKey: "Shift-Home", exec: function (e) {
      e.getSelection().selectLineStart()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "selectlineend", bindKey: "Shift-End", exec: function (e) {
      e.getSelection().selectLineEnd()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "togglerecording", bindKey: n("Ctrl-Alt-E", "Command-Option-E"), exec: function (e) {
      e.commands.toggleRecording(e)
    }, readOnly: !0
  }, {
    name: "replaymacro", bindKey: n("Ctrl-Shift-E", "Command-Shift-E"), exec: function (e) {
      e.commands.replay(e)
    }, readOnly: !0
  }, {
    name: "jumptomatching", bindKey: n("Ctrl-P", "Ctrl-P"), exec: function (e) {
      e.jumpToMatching()
    }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
  }, {
    name: "selecttomatching", bindKey: n("Ctrl-Shift-P", "Ctrl-Shift-P"), exec: function (e) {
      e.jumpToMatching(!0)
    }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
  }, {
    name: "expandToMatching", bindKey: n("Ctrl-Shift-M", "Ctrl-Shift-M"), exec: function (e) {
      e.jumpToMatching(!0, !0)
    }, multiSelectAction: "forEach", scrollIntoView: "animate", readOnly: !0
  }, {
    name: "passKeysToBrowser", bindKey: n(null, null), exec: function () {
    }, passEvent: !0, readOnly: !0
  }, {
    name: "cut", exec: function (e) {
      var t = e.getSelectionRange();
      e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
    }, scrollIntoView: "cursor", multiSelectAction: "forEach"
  }, {
    name: "removeline", bindKey: n("Ctrl-D", "Command-D"), exec: function (e) {
      e.removeLines()
    }, scrollIntoView: "cursor", multiSelectAction: "forEachLine"
  }, {
    name: "duplicateSelection", bindKey: n("Ctrl-Shift-D", "Command-Shift-D"), exec: function (e) {
      e.duplicateSelection()
    }, scrollIntoView: "cursor", multiSelectAction: "forEach"
  }, {
    name: "sortlines", bindKey: n("Ctrl-Alt-S", "Command-Alt-S"), exec: function (e) {
      e.sortLines()
    }, scrollIntoView: "selection", multiSelectAction: "forEachLine"
  }, {
    name: "togglecomment", bindKey: n("Ctrl-/", "Command-/"), exec: function (e) {
      e.toggleCommentLines()
    }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
  }, {
    name: "toggleBlockComment", bindKey: n("Ctrl-Shift-/", "Command-Shift-/"), exec: function (e) {
      e.toggleBlockComment()
    }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
  }, {
    name: "modifyNumberUp", bindKey: n("Ctrl-Shift-Up", "Alt-Shift-Up"), exec: function (e) {
      e.modifyNumber(1)
    }, scrollIntoView: "cursor", multiSelectAction: "forEach"
  }, {
    name: "modifyNumberDown", bindKey: n("Ctrl-Shift-Down", "Alt-Shift-Down"), exec: function (e) {
      e.modifyNumber(-1)
    }, scrollIntoView: "cursor", multiSelectAction: "forEach"
  }, {
    name: "replace", bindKey: n("Ctrl-H", "Command-Option-F"), exec: function (e) {
      o.loadModule("ace/ext/searchbox", function (t) {
        t.Search(e, !0)
      })
    }
  }, {
    name: "undo", bindKey: n("Ctrl-Z", "Command-Z"), exec: function (e) {
      e.undo()
    }
  }, {
    name: "redo", bindKey: n("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"), exec: function (e) {
      e.redo()
    }
  }, {
    name: "copylinesup", bindKey: n("Alt-Shift-Up", "Command-Option-Up"), exec: function (e) {
      e.copyLinesUp()
    }, scrollIntoView: "cursor"
  }, {
    name: "movelinesup", bindKey: n("Alt-Up", "Option-Up"), exec: function (e) {
      e.moveLinesUp()
    }, scrollIntoView: "cursor"
  }, {
    name: "copylinesdown", bindKey: n("Alt-Shift-Down", "Command-Option-Down"), exec: function (e) {
      e.copyLinesDown()
    }, scrollIntoView: "cursor"
  }, {
    name: "movelinesdown", bindKey: n("Alt-Down", "Option-Down"), exec: function (e) {
      e.moveLinesDown()
    }, scrollIntoView: "cursor"
  }, {
    name: "del", bindKey: n("Delete", "Delete|Ctrl-D|Shift-Delete"), exec: function (e) {
      e.remove("right")
    }, multiSelectAction: "forEach",
    scrollIntoView: "cursor"
  }, {
    name: "backspace",
    bindKey: n("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
    exec: function (e) {
      e.remove("left")
    },
    multiSelectAction: "forEach",
    scrollIntoView: "cursor"
  }, {
    name: "cut_or_delete", bindKey: n("Shift-Delete", null), exec: function (e) {
      return e.selection.isEmpty() ? void e.remove("left") : !1
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "removetolinestart", bindKey: n("Alt-Backspace", "Command-Backspace"), exec: function (e) {
      e.removeToLineStart()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "removetolineend", bindKey: n("Alt-Delete", "Ctrl-K"), exec: function (e) {
      e.removeToLineEnd()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "removewordleft", bindKey: n("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"), exec: function (e) {
      e.removeWordLeft()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "removewordright", bindKey: n("Ctrl-Delete", "Alt-Delete"), exec: function (e) {
      e.removeWordRight()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "outdent", bindKey: n("Shift-Tab", "Shift-Tab"), exec: function (e) {
      e.blockOutdent()
    }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
  }, {
    name: "indent", bindKey: n("Tab", "Tab"), exec: function (e) {
      e.indent()
    }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
  }, {
    name: "blockoutdent", bindKey: n("Ctrl-[", "Ctrl-["), exec: function (e) {
      e.blockOutdent()
    }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
  }, {
    name: "blockindent", bindKey: n("Ctrl-]", "Ctrl-]"), exec: function (e) {
      e.blockIndent()
    }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
  }, {
    name: "insertstring", exec: function (e, t) {
      e.insert(t)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "inserttext", exec: function (e, t) {
      e.insert(s.stringRepeat(t.text || "", t.times || 1))
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "splitline", bindKey: n(null, "Ctrl-O"), exec: function (e) {
      e.splitLine()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "transposeletters", bindKey: n("Ctrl-T", "Ctrl-T"), exec: function (e) {
      e.transposeLetters()
    }, multiSelectAction: function (e) {
      e.transposeSelections(1)
    }, scrollIntoView: "cursor"
  }, {
    name: "touppercase", bindKey: n("Ctrl-U", "Ctrl-U"), exec: function (e) {
      e.toUpperCase()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "tolowercase", bindKey: n("Ctrl-Shift-U", "Ctrl-Shift-U"), exec: function (e) {
      e.toLowerCase()
    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
  }, {
    name: "expandtoline", bindKey: n("Ctrl-Shift-L", "Command-Shift-L"), exec: function (e) {
      var t = e.selection.getRange();
      t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
  }, {
    name: "joinlines", bindKey: n(null, null), exec: function (e) {
      for (var t = e.selection.isBackwards(), i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), n = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), o = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()), l = a.replace(/\n\s*/, " ").length, h = e.session.doc.getLine(i.row), c = i.row + 1; c <= n.row + 1; c++) {
        var u = s.stringTrimLeft(s.stringTrimRight(e.session.doc.getLine(c)));
        0 !== u.length && (u = " " + u), h += u
      }
      n.row + 1 < e.session.doc.getLength() - 1 && (h += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new r(i.row, 0, n.row + 2, 0), h), l > 0 ? (e.selection.moveCursorTo(i.row, i.column), e.selection.selectTo(i.row, i.column + l)) : (o = e.session.doc.getLine(i.row).length > o ? o + 1 : o, e.selection.moveCursorTo(i.row, o))
    }, multiSelectAction: "forEach", readOnly: !0
  }, {
    name: "invertSelection", bindKey: n(null, null), exec: function (e) {
      var t = e.session.doc.getLength() - 1, i = e.session.doc.getLine(t).length, n = e.selection.rangeList.ranges,
        s = [];
      n.length < 1 && (n = [e.selection.getRange()]);
      for (var o = 0; o < n.length; o++) o == n.length - 1 && (n[o].end.row !== t || n[o].end.column !== i) && s.push(new r(n[o].end.row, n[o].end.column, t, i)), 0 === o ? (0 !== n[o].start.row || 0 !== n[o].start.column) && s.push(new r(0, 0, n[o].start.row, n[o].start.column)) : s.push(new r(n[o - 1].end.row, n[o - 1].end.column, n[o].start.row, n[o].start.column));
      e.exitMultiSelectMode(), e.clearSelection();
      for (var o = 0; o < s.length; o++) e.selection.addRange(s[o], !1)
    }, readOnly: !0, scrollIntoView: "none"
  }]
}), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], function (e, t, i) {
  "use strict";
  e("./lib/fixoldbrowsers");
  var n = e("./lib/oop"), s = e("./lib/dom"), o = e("./lib/lang"), r = e("./lib/useragent"),
    a = e("./keyboard/textinput").TextInput, l = e("./mouse/mouse_handler").MouseHandler,
    h = e("./mouse/fold_handler").FoldHandler, c = e("./keyboard/keybinding").KeyBinding,
    u = e("./edit_session").EditSession, d = e("./search").Search, g = e("./range").Range,
    f = e("./lib/event_emitter").EventEmitter, m = e("./commands/command_manager").CommandManager,
    p = e("./commands/default_commands").commands, A = e("./config"), C = e("./token_iterator").TokenIterator,
    F = function (e, t) {
      var i = e.getContainerElement();
      this.container = i, this.renderer = e, this.commands = new m(r.isMac ? "mac" : "win", p), this.textInput = new a(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.keyBinding = new c(this), this.$mouseHandler = new l(this), new h(this), this.$blockScrolling = 0, this.$search = (new d).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = o.delayedCall(function () {
        this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
      }.bind(this)), this.on("change", function (e, t) {
        t._$emitInputEvent.schedule(31)
      }), this.setSession(t || new u("")), A.resetOptions(this), A._signal("editor", this)
    };
  (function () {
    n.implement(this, f), this.$initOperationListeners = function () {
      this.selections = [], this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = o.delayedCall(this.endOperation.bind(this)), this.on("change", function () {
        this.curOp || this.startOperation(), this.curOp.docChanged = !0
      }.bind(this), !0), this.on("changeSelection", function () {
        this.curOp || this.startOperation(), this.curOp.selectionChanged = !0
      }.bind(this), !0)
    }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
      if (this.curOp) {
        if (!e || this.curOp.command) return;
        this.prevOp = this.curOp
      }
      e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = {
        command: e.command || {},
        args: e.args,
        scrollTop: this.renderer.scrollTop
      }, this.curOp.command.name && void 0 !== this.curOp.command.scrollIntoView && this.$blockScrolling++
    }, this.endOperation = function (e) {
      if (this.curOp) {
        if (e && e.returnValue === !1) return this.curOp = null;
        this._signal("beforeEndOperation");
        var t = this.curOp.command;
        if (t.name && this.$blockScrolling > 0 && this.$blockScrolling--, t && t.scrollIntoView) {
          switch (t.scrollIntoView) {
            case "center":
              this.renderer.scrollCursorIntoView(null, .5);
              break;
            case "animate":
            case "cursor":
              this.renderer.scrollCursorIntoView();
              break;
            case "selectionPart":
              var i = this.selection.getRange(), n = this.renderer.layerConfig;
              (i.start.row >= n.lastRow || i.end.row <= n.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
          }
          "animate" == t.scrollIntoView && this.renderer.animateScrolling(this.curOp.scrollTop)
        }
        this.prevOp = this.curOp, this.curOp = null
      }
    }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
      if (this.$mergeUndoDeltas) {
        var t = this.prevOp, i = this.$mergeableCommands, n = t.command && e.command.name == t.command.name;
        if ("insertstring" == e.command.name) {
          var s = e.args;
          void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), n = n && this.mergeNextCommand && (!/\s/.test(s) || /\s/.test(t.args)), this.mergeNextCommand = !0
        } else n = n && -1 !== i.indexOf(e.command.name);
        "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1), n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
      }
    }, this.setKeyboardHandler = function (e, t) {
      if (e && "string" == typeof e) {
        this.$keybindingId = e;
        var i = this;
        A.loadModule(["keybinding", e], function (n) {
          i.$keybindingId == e && i.keyBinding.setKeyboardHandler(n && n.handler), t && t()
        })
      } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
    }, this.getKeyboardHandler = function () {
      return this.keyBinding.getKeyboardHandler()
    }, this.setSession = function (e) {
      if (this.session != e) {
        var t = this.session;
        if (t) {
          this.session.removeEventListener("change", this.$onDocumentChange), this.session.removeEventListener("changeMode", this.$onChangeMode), this.session.removeEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.session.removeEventListener("changeTabSize", this.$onChangeTabSize), this.session.removeEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.session.removeEventListener("changeWrapMode", this.$onChangeWrapMode), this.session.removeEventListener("onChangeFold", this.$onChangeFold), this.session.removeEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.session.removeEventListener("changeBackMarker", this.$onChangeBackMarker), this.session.removeEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.session.removeEventListener("changeAnnotation", this.$onChangeAnnotation), this.session.removeEventListener("changeOverwrite", this.$onCursorChange), this.session.removeEventListener("changeScrollTop", this.$onScrollTopChange), this.session.removeEventListener("changeScrollLeft", this.$onScrollLeftChange);
          var i = this.session.getSelection();
          i.removeEventListener("changeCursor", this.$onCursorChange), i.removeEventListener("changeSelection", this.$onSelectionChange)
        }
        this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.addEventListener("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.addEventListener("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.addEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.addEventListener("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.addEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.addEventListener("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.addEventListener("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.addEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.addEventListener("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.addEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.addEventListener("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.addEventListener("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.addEventListener("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.addEventListener("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.addEventListener("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.addEventListener("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
          session: e,
          oldSession: t
        }), t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this})
      }
    }, this.getSession = function () {
      return this.session
    }, this.setValue = function (e, t) {
      return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
    }, this.getValue = function () {
      return this.session.getValue()
    }, this.getSelection = function () {
      return this.selection
    }, this.resize = function (e) {
      this.renderer.onResize(e)
    }, this.setTheme = function (e, t) {
      this.renderer.setTheme(e, t)
    }, this.getTheme = function () {
      return this.renderer.getTheme()
    }, this.setStyle = function (e) {
      this.renderer.setStyle(e)
    }, this.unsetStyle = function (e) {
      this.renderer.unsetStyle(e)
    }, this.getFontSize = function () {
      return this.getOption("fontSize") || s.computedStyle(this.container, "fontSize")
    }, this.setFontSize = function (e) {
      this.setOption("fontSize", e)
    }, this.$highlightBrackets = function () {
      if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
        var e = this;
        this.$highlightPending = !0, setTimeout(function () {
          e.$highlightPending = !1;
          var t = e.session;
          if (t && t.bgTokenizer) {
            var i = t.findMatchingBracket(e.getCursorPosition());
            if (i) var n = new g(i.row, i.column, i.row, i.column + 1); else if (t.$mode.getMatching) var n = t.$mode.getMatching(e.session);
            n && (t.$bracketHighlight = t.addMarker(n, "ace_bracket", "text"))
          }
        }, 50)
      }
    }, this.$highlightTags = function () {
      if (!this.$highlightTagPending) {
        var e = this;
        this.$highlightTagPending = !0, setTimeout(function () {
          e.$highlightTagPending = !1;
          var t = e.session;
          if (t && t.bgTokenizer) {
            var i = e.getCursorPosition(), n = new C(e.session, i.row, i.column), s = n.getCurrentToken();
            if (!s || !/\b(?:tag-open|tag-name)/.test(s.type)) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
            if (-1 == s.type.indexOf("tag-open") || (s = n.stepForward())) {
              var o = s.value, r = 0, a = n.stepBackward();
              if ("<" == a.value) {
                do a = s, s = n.stepForward(), s && s.value === o && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? r++ : "</" === a.value && r--); while (s && r >= 0)
              } else {
                do s = a, a = n.stepBackward(), s && s.value === o && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? r++ : "</" === a.value && r--); while (a && 0 >= r);
                n.stepForward()
              }
              if (!s) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
              var l = n.getCurrentTokenRow(), h = n.getCurrentTokenColumn(), c = new g(l, h, l, h + s.value.length);
              t.$tagHighlight && 0 !== c.compareRange(t.$backMarkers[t.$tagHighlight].range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), c && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(c, "ace_bracket", "text"))
            }
          }
        }, 50)
      }
    }, this.focus = function () {
      var e = this;
      setTimeout(function () {
        e.textInput.focus()
      }), this.textInput.focus()
    }, this.isFocused = function () {
      return this.textInput.isFocused()
    }, this.blur = function () {
      this.textInput.blur()
    }, this.onFocus = function (e) {
      this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
    }, this.onBlur = function (e) {
      this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
    }, this.$cursorChange = function () {
      this.renderer.updateCursor()
    }, this.onDocumentChange = function (e) {
      var t, i = e.data, n = i.range;
      t = n.start.row == n.end.row && "insertLines" != i.action && "removeLines" != i.action ? n.end.row : 1 / 0, this.renderer.updateLines(n.start.row, t, this.session.$useWrapMode), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
    }, this.onTokenizerUpdate = function (e) {
      var t = e.data;
      this.renderer.updateLines(t.first, t.last)
    }, this.onScrollTopChange = function () {
      this.renderer.scrollToY(this.session.getScrollTop())
    }, this.onScrollLeftChange = function () {
      this.renderer.scrollToX(this.session.getScrollLeft())
    }, this.onCursorChange = function () {
      this.$cursorChange(), this.$blockScrolling || (A.warn("Automatically scrolling cursor into view after selection change", "this will be disabled in the next version", "set editor.$blockScrolling = Infinity to disable this message"), this.renderer.scrollCursorIntoView()), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
    }, this.$updateHighlightActiveLine = function () {
      var e, t = this.getSession();
      if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null; else if (!t.$highlightLineMarker && e) {
        var i = new g(e.row, e.column, e.row, 1 / 0);
        i.id = t.addMarker(i, "ace_active-line", "screenLine"), t.$highlightLineMarker = i
      } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
    }, this.onSelectionChange = function (e) {
      var t = this.session;
      if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine(); else {
        var i = this.selection.getRange(), n = this.getSelectionStyle();
        t.$selectionMarker = t.addMarker(i, "ace_selection", n)
      }
      var s = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
      this.session.highlight(s), this._signal("changeSelection")
    }, this.$getSelectionHighLightRegexp = function () {
      var e = this.session, t = this.getSelectionRange();
      if (!t.isEmpty() && !t.isMultiLine()) {
        var i = t.start.column - 1, n = t.end.column + 1, s = e.getLine(t.start.row), o = s.length,
          r = s.substring(Math.max(i, 0), Math.min(n, o));
        if (!(i >= 0 && /^[\w\d]/.test(r) || o >= n && /[\w\d]$/.test(r)) && (r = s.substring(t.start.column, t.end.column), /^[\w\d]+$/.test(r))) {
          var a = this.$search.$assembleRegExp({wholeWord: !0, caseSensitive: !0, needle: r});
          return a
        }
      }
    }, this.onChangeFrontMarker = function () {
      this.renderer.updateFrontMarkers()
    }, this.onChangeBackMarker = function () {
      this.renderer.updateBackMarkers()
    }, this.onChangeBreakpoint = function () {
      this.renderer.updateBreakpoints()
    }, this.onChangeAnnotation = function () {
      this.renderer.setAnnotations(this.session.getAnnotations())
    }, this.onChangeMode = function (e) {
      this.renderer.updateText(), this._emit("changeMode", e)
    }, this.onChangeWrapLimit = function () {
      this.renderer.updateFull()
    }, this.onChangeWrapMode = function () {
      this.renderer.onResize(!0)
    }, this.onChangeFold = function () {
      this.$updateHighlightActiveLine(), this.renderer.updateFull()
    }, this.getSelectedText = function () {
      return this.session.getTextRange(this.getSelectionRange())
    }, this.getCopyText = function () {
      var e = this.getSelectedText();
      return this._signal("copy", e), e
    }, this.onCopy = function () {
      this.commands.exec("copy", this)
    }, this.onCut = function () {
      this.commands.exec("cut", this)
    }, this.onPaste = function (e) {
      if (!this.$readOnly) {
        var t = {text: e};
        if (this._signal("paste", t), e = t.text, !this.inMultiSelectMode || this.inVirtualSelectionMode) this.insert(e); else {
          var i = e.split(/\r\n|\r|\n/), n = this.selection.rangeList.ranges;
          if (i.length > n.length || i.length < 2 || !i[1]) return this.commands.exec("insertstring", this, e);
          for (var s = n.length; s--;) {
            var o = n[s];
            o.isEmpty() || this.session.remove(o), this.session.insert(o.start, i[s])
          }
        }
        this.renderer.scrollCursorIntoView()
      }
    }, this.execCommand = function (e, t) {
      return this.commands.exec(e, this, t)
    }, this.insert = function (e, t) {
      var i = this.session, n = i.getMode(), s = this.getCursorPosition();
      if (this.getBehavioursEnabled() && !t) {
        var o = n.transformAction(i.getState(s.row), "insertion", this, i, e);
        o && (e !== o.text && (this.session.mergeUndoDeltas = !1, this.$mergeNextCommand = !1), e = o.text)
      }
      if ("	" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
        if (this.session.getOverwrite()) {
          var r = new g.fromPoints(s, s);
          r.end.column += e.length, this.session.remove(r)
        }
      } else {
        var r = this.getSelectionRange();
        s = this.session.remove(r), this.clearSelection()
      }
      if ("\n" == e || "\r\n" == e) {
        var a = i.getLine(s.row);
        if (s.column > a.search(/\S|$/)) {
          var l = a.substr(s.column).search(/\S|$/);
          i.doc.removeInLine(s.row, s.column, s.column + l)
        }
      }
      this.clearSelection();
      var h = s.column, c = i.getState(s.row), a = i.getLine(s.row), u = n.checkOutdent(c, a, e);
      i.insert(s, e);
      if (o && o.selection && (2 == o.selection.length ? this.selection.setSelectionRange(new g(s.row, h + o.selection[0], s.row, h + o.selection[1])) : this.selection.setSelectionRange(new g(s.row + o.selection[0], o.selection[1], s.row + o.selection[2], o.selection[3]))), i.getDocument().isNewLine(e)) {
        var d = n.getNextLineIndent(c, a.slice(0, s.column), i.getTabString());
        i.insert({row: s.row + 1, column: 0}, d)
      }
      u && n.autoOutdent(c, i, s.row)
    }, this.onTextInput = function (e) {
      this.keyBinding.onTextInput(e)
    }, this.onCommandKey = function (e, t, i) {
      this.keyBinding.onCommandKey(e, t, i)
    }, this.setOverwrite = function (e) {
      this.session.setOverwrite(e)
    }, this.getOverwrite = function () {
      return this.session.getOverwrite()
    }, this.toggleOverwrite = function () {
      this.session.toggleOverwrite()
    }, this.setScrollSpeed = function (e) {
      this.setOption("scrollSpeed", e)
    }, this.getScrollSpeed = function () {
      return this.getOption("scrollSpeed")
    }, this.setDragDelay = function (e) {
      this.setOption("dragDelay", e)
    }, this.getDragDelay = function () {
      return this.getOption("dragDelay")
    }, this.setSelectionStyle = function (e) {
      this.setOption("selectionStyle", e)
    }, this.getSelectionStyle = function () {
      return this.getOption("selectionStyle")
    }, this.setHighlightActiveLine = function (e) {
      this.setOption("highlightActiveLine", e)
    }, this.getHighlightActiveLine = function () {
      return this.getOption("highlightActiveLine")
    }, this.setHighlightGutterLine = function (e) {
      this.setOption("highlightGutterLine", e)
    }, this.getHighlightGutterLine = function () {
      return this.getOption("highlightGutterLine")
    }, this.setHighlightSelectedWord = function (e) {
      this.setOption("highlightSelectedWord", e)
    }, this.getHighlightSelectedWord = function () {
      return this.$highlightSelectedWord
    }, this.setAnimatedScroll = function (e) {
      this.renderer.setAnimatedScroll(e)
    }, this.getAnimatedScroll = function () {
      return this.renderer.getAnimatedScroll()
    }, this.setShowInvisibles = function (e) {
      this.renderer.setShowInvisibles(e)
    }, this.getShowInvisibles = function () {
      return this.renderer.getShowInvisibles()
    }, this.setDisplayIndentGuides = function (e) {
      this.renderer.setDisplayIndentGuides(e)
    }, this.getDisplayIndentGuides = function () {
      return this.renderer.getDisplayIndentGuides()
    }, this.setShowPrintMargin = function (e) {
      this.renderer.setShowPrintMargin(e)
    }, this.getShowPrintMargin = function () {
      return this.renderer.getShowPrintMargin()
    }, this.setPrintMarginColumn = function (e) {
      this.renderer.setPrintMarginColumn(e)
    }, this.getPrintMarginColumn = function () {
      return this.renderer.getPrintMarginColumn()
    }, this.setReadOnly = function (e) {
      this.setOption("readOnly", e)
    }, this.getReadOnly = function () {
      return this.getOption("readOnly")
    }, this.setBehavioursEnabled = function (e) {
      this.setOption("behavioursEnabled", e)
    }, this.getBehavioursEnabled = function () {
      return this.getOption("behavioursEnabled")
    }, this.setWrapBehavioursEnabled = function (e) {
      this.setOption("wrapBehavioursEnabled", e)
    }, this.getWrapBehavioursEnabled = function () {
      return this.getOption("wrapBehavioursEnabled")
    }, this.setShowFoldWidgets = function (e) {
      this.setOption("showFoldWidgets", e)
    }, this.getShowFoldWidgets = function () {
      return this.getOption("showFoldWidgets")
    }, this.setFadeFoldWidgets = function (e) {
      this.setOption("fadeFoldWidgets", e)
    }, this.getFadeFoldWidgets = function () {
      return this.getOption("fadeFoldWidgets")
    }, this.remove = function (e) {
      this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
      var t = this.getSelectionRange();
      if (this.getBehavioursEnabled()) {
        var i = this.session, n = i.getState(t.start.row), s = i.getMode().transformAction(n, "deletion", this, i, t);
        if (0 === t.end.column) {
          var o = i.getTextRange(t);
          if ("\n" == o[o.length - 1]) {
            var r = i.getLine(t.end.row);
            /^\s+$/.test(r) && (t.end.column = r.length)
          }
        }
        s && (t = s)
      }
      this.session.remove(t), this.clearSelection()
    }, this.removeWordRight = function () {
      this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
    }, this.removeWordLeft = function () {
      this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
    }, this.removeToLineStart = function () {
      this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
    }, this.removeToLineEnd = function () {
      this.selection.isEmpty() && this.selection.selectLineEnd();
      var e = this.getSelectionRange();
      e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
    }, this.splitLine = function () {
      this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
      var e = this.getCursorPosition();
      this.insert("\n"), this.moveCursorToPosition(e)
    }, this.transposeLetters = function () {
      if (this.selection.isEmpty()) {
        var e = this.getCursorPosition(), t = e.column;
        if (0 !== t) {
          var i, n, s = this.session.getLine(e.row);
          t < s.length ? (i = s.charAt(t) + s.charAt(t - 1), n = new g(e.row, t - 1, e.row, t + 1)) : (i = s.charAt(t - 1) + s.charAt(t - 2), n = new g(e.row, t - 2, e.row, t)), this.session.replace(n, i)
        }
      }
    }, this.toLowerCase = function () {
      var e = this.getSelectionRange();
      this.selection.isEmpty() && this.selection.selectWord();
      var t = this.getSelectionRange(), i = this.session.getTextRange(t);
      this.session.replace(t, i.toLowerCase()), this.selection.setSelectionRange(e)
    }, this.toUpperCase = function () {
      var e = this.getSelectionRange();
      this.selection.isEmpty() && this.selection.selectWord();
      var t = this.getSelectionRange(), i = this.session.getTextRange(t);
      this.session.replace(t, i.toUpperCase()), this.selection.setSelectionRange(e)
    }, this.indent = function () {
      var e = this.session, t = this.getSelectionRange();
      if (t.start.row < t.end.row) {
        var i = this.$getSelectedRows();
        return void e.indentRows(i.first, i.last, "	")
      }
      if (t.start.column < t.end.column) {
        var n = e.getTextRange(t);
        if (!/^\s+$/.test(n)) {
          var i = this.$getSelectedRows();
          return void e.indentRows(i.first, i.last, "	")
        }
      }
      var s = e.getLine(t.start.row), r = t.start, a = e.getTabSize(), l = e.documentToScreenColumn(r.row, r.column);
      if (this.session.getUseSoftTabs()) var h = a - l % a, c = o.stringRepeat(" ", h); else {
        for (var h = l % a; " " == s[t.start.column] && h;) t.start.column--, h--;
        this.selection.setSelectionRange(t), c = "	"
      }
      return this.insert(c)
    }, this.blockIndent = function () {
      var e = this.$getSelectedRows();
      this.session.indentRows(e.first, e.last, "	")
    }, this.blockOutdent = function () {
      var e = this.session.getSelection();
      this.session.outdentRows(e.getRange())
    }, this.sortLines = function () {
      var e = this.$getSelectedRows(), t = this.session, i = [];
      for (s = e.first; s <= e.last; s++) i.push(t.getLine(s));
      i.sort(function (e, t) {
        return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
      });
      for (var n = new g(0, 0, 0, 0), s = e.first; s <= e.last; s++) {
        var o = t.getLine(s);
        n.start.row = s, n.end.row = s, n.end.column = o.length, t.replace(n, i[s - e.first])
      }
    }, this.toggleCommentLines = function () {
      var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
      this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
    }, this.toggleBlockComment = function () {
      var e = this.getCursorPosition(), t = this.session.getState(e.row), i = this.getSelectionRange();
      this.session.getMode().toggleBlockComment(t, this.session, i, e)
    }, this.getNumberAt = function (e, t) {
      var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
      i.lastIndex = 0;
      for (var n = this.session.getLine(e); i.lastIndex < t;) {
        var s = i.exec(n);
        if (s.index <= t && s.index + s[0].length >= t) {
          var o = {value: s[0], start: s.index, end: s.index + s[0].length};
          return o
        }
      }
      return null
    }, this.modifyNumber = function (e) {
      var t = this.selection.getCursor().row, i = this.selection.getCursor().column, n = new g(t, i - 1, t, i),
        s = this.session.getTextRange(n);
      if (!isNaN(parseFloat(s)) && isFinite(s)) {
        var o = this.getNumberAt(t, i);
        if (o) {
          var r = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end,
            a = o.start + o.value.length - r, l = parseFloat(o.value);
          l *= Math.pow(10, a), e *= r !== o.end && r > i ? Math.pow(10, o.end - i - 1) : Math.pow(10, o.end - i), l += e, l /= Math.pow(10, a);
          var h = l.toFixed(a), c = new g(t, o.start, t, o.end);
          this.session.replace(c, h), this.moveCursorTo(t, Math.max(o.start + 1, i + h.length - o.value.length))
        }
      }
    }, this.removeLines = function () {
      var e, t = this.$getSelectedRows();
      e = 0 === t.first || t.last + 1 < this.session.getLength() ? new g(t.first, 0, t.last + 1, 0) : new g(t.first - 1, this.session.getLine(t.first - 1).length, t.last, this.session.getLine(t.last).length), this.session.remove(e), this.clearSelection()
    }, this.duplicateSelection = function () {
      var e = this.selection, t = this.session, i = e.getRange(), n = e.isBackwards();
      if (i.isEmpty()) {
        var s = i.start.row;
        t.duplicateLines(s, s)
      } else {
        var o = n ? i.start : i.end, r = t.insert(o, t.getTextRange(i), !1);
        i.start = o, i.end = r, e.setSelectionRange(i, n)
      }
    }, this.moveLinesDown = function () {
      this.$moveLines(1, !1)
    }, this.moveLinesUp = function () {
      this.$moveLines(-1, !1)
    }, this.moveText = function (e, t, i) {
      return this.session.moveText(e, t, i)
    }, this.copyLinesUp = function () {
      this.$moveLines(-1, !0)
    }, this.copyLinesDown = function () {
      this.$moveLines(1, !0)
    }, this.$moveLines = function (e, t) {
      var i, n, s = this.selection;
      if (!s.inMultiSelectMode || this.inVirtualSelectionMode) {
        var o = s.toOrientedRange();
        i = this.$getSelectedRows(o), n = this.session.$moveLines(i.first, i.last, t ? 0 : e), t && -1 == e && (n = 0), o.moveBy(n, 0), s.fromOrientedRange(o)
      } else {
        var r = s.rangeList.ranges;
        s.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
        for (var a = 0, l = 0, h = r.length, c = 0; h > c; c++) {
          var u = c;
          r[c].moveBy(a, 0), i = this.$getSelectedRows(r[c]);
          for (var d = i.first, g = i.last; ++c < h;) {
            l && r[c].moveBy(l, 0);
            var f = this.$getSelectedRows(r[c]);
            if (t && f.first != g) break;
            if (!t && f.first > g + 1) break;
            g = f.last
          }
          for (c--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = c + 1); c >= u;) r[u].moveBy(a, 0), u++;
          t || (a = 0), l += a
        }
        s.fromOrientedRange(s.ranges[0]), s.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
      }
    }, this.$getSelectedRows = function (e) {
      return e = (e || this.getSelectionRange()).collapseRows(), {
        first: this.session.getRowFoldStart(e.start.row),
        last: this.session.getRowFoldEnd(e.end.row)
      }
    }, this.onCompositionStart = function (e) {
      this.renderer.showComposition(this.getCursorPosition())
    }, this.onCompositionUpdate = function (e) {
      this.renderer.setCompositionText(e)
    }, this.onCompositionEnd = function () {
      this.renderer.hideComposition()
    }, this.getFirstVisibleRow = function () {
      return this.renderer.getFirstVisibleRow()
    }, this.getLastVisibleRow = function () {
      return this.renderer.getLastVisibleRow()
    }, this.isRowVisible = function (e) {
      return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
    }, this.isRowFullyVisible = function (e) {
      return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
    }, this.$getVisibleRowCount = function () {
      return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
    }, this.$moveByPage = function (e, t) {
      var i = this.renderer, n = this.renderer.layerConfig, s = e * Math.floor(n.height / n.lineHeight);
      this.$blockScrolling++, t === !0 ? this.selection.$moveSelection(function () {
        this.moveCursorBy(s, 0)
      }) : t === !1 && (this.selection.moveCursorBy(s, 0), this.selection.clearSelection()), this.$blockScrolling--;
      var o = i.scrollTop;
      i.scrollBy(0, s * n.lineHeight), null != t && i.scrollCursorIntoView(null, .5), i.animateScrolling(o)
    }, this.selectPageDown = function () {
      this.$moveByPage(1, !0)
    }, this.selectPageUp = function () {
      this.$moveByPage(-1, !0)
    }, this.gotoPageDown = function () {
      this.$moveByPage(1, !1)
    }, this.gotoPageUp = function () {
      this.$moveByPage(-1, !1)
    }, this.scrollPageDown = function () {
      this.$moveByPage(1)
    }, this.scrollPageUp = function () {
      this.$moveByPage(-1)
    }, this.scrollToRow = function (e) {
      this.renderer.scrollToRow(e)
    }, this.scrollToLine = function (e, t, i, n) {
      this.renderer.scrollToLine(e, t, i, n)
    }, this.centerSelection = function () {
      var e = this.getSelectionRange(), t = {
        row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
        column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
      };
      this.renderer.alignCursor(t, .5)
    }, this.getCursorPosition = function () {
      return this.selection.getCursor()
    }, this.getCursorPositionScreen = function () {
      return this.session.documentToScreenPosition(this.getCursorPosition())
    }, this.getSelectionRange = function () {
      return this.selection.getRange()
    }, this.selectAll = function () {
      this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
    }, this.clearSelection = function () {
      this.selection.clearSelection();
    }, this.moveCursorTo = function (e, t) {
      this.selection.moveCursorTo(e, t)
    }, this.moveCursorToPosition = function (e) {
      this.selection.moveCursorToPosition(e)
    }, this.jumpToMatching = function (e, t) {
      var i = this.getCursorPosition(), n = new C(this.session, i.row, i.column), s = n.getCurrentToken(),
        o = s || n.stepForward();
      if (o) {
        var r, a, l = !1, h = {}, c = i.column - o.start,
          u = {")": "(", "(": "(", "]": "[", "[": "[", "{": "{", "}": "{"};
        do {
          if (o.value.match(/[{}()\[\]]/g)) {
            for (; c < o.value.length && !l; c++) if (u[o.value[c]]) switch (a = u[o.value[c]] + "." + o.type.replace("rparen", "lparen"), isNaN(h[a]) && (h[a] = 0), o.value[c]) {
              case "(":
              case "[":
              case "{":
                h[a]++;
                break;
              case ")":
              case "]":
              case "}":
                h[a]--, -1 === h[a] && (r = "bracket", l = !0)
            }
          } else o && -1 !== o.type.indexOf("tag-name") && (isNaN(h[o.value]) && (h[o.value] = 0), "<" === s.value ? h[o.value]++ : "</" === s.value && h[o.value]--, -1 === h[o.value] && (r = "tag", l = !0));
          l || (s = o, o = n.stepForward(), c = 0)
        } while (o && !l);
        if (r) {
          var d, f;
          if ("bracket" === r) d = this.session.getBracketRange(i), d || (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + c - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + c - 1), f = d.start, (t || f.row === i.row && Math.abs(f.column - i.column) < 2) && (d = this.session.getBracketRange(f))); else if ("tag" === r) {
            if (!o || -1 === o.type.indexOf("tag-name")) return;
            var m = o.value;
            if (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2), 0 === d.compare(i.row, i.column)) {
              l = !1;
              do o = s, s = n.stepBackward(), s && (-1 !== s.type.indexOf("tag-close") && d.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1), o.value === m && -1 !== o.type.indexOf("tag-name") && ("<" === s.value ? h[m]++ : "</" === s.value && h[m]--, 0 === h[m] && (l = !0))); while (s && !l)
            }
            o && o.type.indexOf("tag-name") && (f = d.start, f.row == i.row && Math.abs(f.column - i.column) < 2 && (f = d.end))
          }
          f = d && d.cursor || f, f && (e ? d && t ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(f.row, f.column) : this.selection.moveTo(f.row, f.column))
        }
      }
    }, this.gotoLine = function (e, t, i) {
      this.selection.clearSelection(), this.session.unfold({
        row: e - 1,
        column: t || 0
      }), this.$blockScrolling += 1, this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, i)
    }, this.navigateTo = function (e, t) {
      this.selection.moveTo(e, t)
    }, this.navigateUp = function (e) {
      if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
        var t = this.selection.anchor.getPosition();
        return this.moveCursorToPosition(t)
      }
      this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
    }, this.navigateDown = function (e) {
      if (this.selection.isMultiLine() && this.selection.isBackwards()) {
        var t = this.selection.anchor.getPosition();
        return this.moveCursorToPosition(t)
      }
      this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
    }, this.navigateLeft = function (e) {
      if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorLeft(); else {
        var t = this.getSelectionRange().start;
        this.moveCursorToPosition(t)
      }
      this.clearSelection()
    }, this.navigateRight = function (e) {
      if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorRight(); else {
        var t = this.getSelectionRange().end;
        this.moveCursorToPosition(t)
      }
      this.clearSelection()
    }, this.navigateLineStart = function () {
      this.selection.moveCursorLineStart(), this.clearSelection()
    }, this.navigateLineEnd = function () {
      this.selection.moveCursorLineEnd(), this.clearSelection()
    }, this.navigateFileEnd = function () {
      this.selection.moveCursorFileEnd(), this.clearSelection()
    }, this.navigateFileStart = function () {
      this.selection.moveCursorFileStart(), this.clearSelection()
    }, this.navigateWordRight = function () {
      this.selection.moveCursorWordRight(), this.clearSelection()
    }, this.navigateWordLeft = function () {
      this.selection.moveCursorWordLeft(), this.clearSelection()
    }, this.replace = function (e, t) {
      t && this.$search.set(t);
      var i = this.$search.find(this.session), n = 0;
      return i ? (this.$tryReplace(i, e) && (n = 1), null !== i && (this.selection.setSelectionRange(i), this.renderer.scrollSelectionIntoView(i.start, i.end)), n) : n
    }, this.replaceAll = function (e, t) {
      t && this.$search.set(t);
      var i = this.$search.findAll(this.session), n = 0;
      if (!i.length) return n;
      this.$blockScrolling += 1;
      var s = this.getSelectionRange();
      this.selection.moveTo(0, 0);
      for (var o = i.length - 1; o >= 0; --o) this.$tryReplace(i[o], e) && n++;
      return this.selection.setSelectionRange(s), this.$blockScrolling -= 1, n
    }, this.$tryReplace = function (e, t) {
      var i = this.session.getTextRange(e);
      return t = this.$search.replace(i, t), null !== t ? (e.end = this.session.replace(e, t), e) : null
    }, this.getLastSearchOptions = function () {
      return this.$search.getOptions()
    }, this.find = function (e, t, i) {
      t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && n.mixin(t, e);
      var s = this.selection.getRange();
      null == t.needle && (e = this.session.getTextRange(s) || this.$search.$options.needle, e || (s = this.session.getWordRange(s.start.row, s.start.column), e = this.session.getTextRange(s)), this.$search.set({needle: e})), this.$search.set(t), t.start || this.$search.set({start: s});
      var o = this.$search.find(this.session);
      return t.preventScroll ? o : o ? (this.revealRange(o, i), o) : (t.backwards ? s.start = s.end : s.end = s.start, void this.selection.setRange(s))
    }, this.findNext = function (e, t) {
      this.find({skipCurrent: !0, backwards: !1}, e, t)
    }, this.findPrevious = function (e, t) {
      this.find(e, {skipCurrent: !0, backwards: !0}, t)
    }, this.revealRange = function (e, t) {
      this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
      var i = this.renderer.scrollTop;
      this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(i)
    }, this.undo = function () {
      this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
    }, this.redo = function () {
      this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
    }, this.destroy = function () {
      this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
    }, this.setAutoScrollEditorIntoView = function (e) {
      if (e) {
        var t, i = this, n = !1;
        this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
        var s = this.$scrollAnchor;
        s.style.cssText = "position:absolute", this.container.insertBefore(s, this.container.firstChild);
        var o = this.on("changeSelection", function () {
          n = !0
        }), r = this.renderer.on("beforeRender", function () {
          n && (t = i.renderer.container.getBoundingClientRect())
        }), a = this.renderer.on("afterRender", function () {
          if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
            var e = i.renderer, o = e.$cursorLayer.$pixelPos, r = e.layerConfig, a = o.top - r.offset;
            n = o.top >= 0 && a + t.top < 0 ? !0 : o.top < r.height && o.top + t.top + r.lineHeight > window.innerHeight ? !1 : null, null != n && (s.style.top = a + "px", s.style.left = o.left + "px", s.style.height = r.lineHeight + "px", s.scrollIntoView(n)), n = t = null
          }
        });
        this.setAutoScrollEditorIntoView = function (e) {
          e || (delete this.setAutoScrollEditorIntoView, this.removeEventListener("changeSelection", o), this.renderer.removeEventListener("afterRender", a), this.renderer.removeEventListener("beforeRender", r))
        }
      }
    }, this.$resetCursorStyle = function () {
      var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
      t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, s.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
    }
  }).call(F.prototype), A.defineOptions(F.prototype, "editor", {
    selectionStyle: {
      set: function (e) {
        this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
      }, initialValue: "line"
    },
    highlightActiveLine: {
      set: function () {
        this.$updateHighlightActiveLine()
      }, initialValue: !0
    },
    highlightSelectedWord: {
      set: function (e) {
        this.$onSelectionChange()
      }, initialValue: !0
    },
    readOnly: {
      set: function (e) {
        this.$resetCursorStyle()
      }, initialValue: !1
    },
    cursorStyle: {
      set: function (e) {
        this.$resetCursorStyle()
      }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace"
    },
    mergeUndoDeltas: {values: [!1, !0, "always"], initialValue: !0},
    behavioursEnabled: {initialValue: !0},
    wrapBehavioursEnabled: {initialValue: !0},
    autoScrollEditorIntoView: {
      set: function (e) {
        this.setAutoScrollEditorIntoView(e)
      }
    },
    hScrollBarAlwaysVisible: "renderer",
    vScrollBarAlwaysVisible: "renderer",
    highlightGutterLine: "renderer",
    animatedScroll: "renderer",
    showInvisibles: "renderer",
    showPrintMargin: "renderer",
    printMarginColumn: "renderer",
    printMargin: "renderer",
    fadeFoldWidgets: "renderer",
    showFoldWidgets: "renderer",
    showLineNumbers: "renderer",
    showGutter: "renderer",
    displayIndentGuides: "renderer",
    fontSize: "renderer",
    fontFamily: "renderer",
    maxLines: "renderer",
    minLines: "renderer",
    scrollPastEnd: "renderer",
    fixedWidthGutter: "renderer",
    theme: "renderer",
    scrollSpeed: "$mouseHandler",
    dragDelay: "$mouseHandler",
    dragEnabled: "$mouseHandler",
    focusTimout: "$mouseHandler",
    tooltipFollowsMouse: "$mouseHandler",
    firstLineNumber: "session",
    overwrite: "session",
    newLineMode: "session",
    useWorker: "session",
    useSoftTabs: "session",
    tabSize: "session",
    wrap: "session",
    foldStyle: "session",
    mode: "session"
  }), t.Editor = F
}), ace.define("ace/undomanager", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  var n = function () {
    this.reset()
  };
  (function () {
    this.execute = function (e) {
      var t = e.args[0];
      this.$doc = e.args[1], e.merge && this.hasUndo() && (this.dirtyCounter--, t = this.$undoStack.pop().concat(t)), this.$undoStack.push(t), this.$redoStack = [], this.dirtyCounter < 0 && (this.dirtyCounter = NaN), this.dirtyCounter++
    }, this.undo = function (e) {
      var t = this.$undoStack.pop(), i = null;
      return t && (i = this.$doc.undoChanges(t, e), this.$redoStack.push(t), this.dirtyCounter--), i
    }, this.redo = function (e) {
      var t = this.$redoStack.pop(), i = null;
      return t && (i = this.$doc.redoChanges(t, e), this.$undoStack.push(t), this.dirtyCounter++), i
    }, this.reset = function () {
      this.$undoStack = [], this.$redoStack = [], this.dirtyCounter = 0
    }, this.hasUndo = function () {
      return this.$undoStack.length > 0
    }, this.hasRedo = function () {
      return this.$redoStack.length > 0
    }, this.markClean = function () {
      this.dirtyCounter = 0
    }, this.isClean = function () {
      return 0 === this.dirtyCounter
    }
  }).call(n.prototype), t.UndoManager = n
}), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/lang"), r = e("../lib/event_emitter").EventEmitter,
    a = function (e) {
      this.element = n.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$cells = []
    };
  (function () {
    s.implement(this, r), this.setSession = function (e) {
      this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
    }, this.addGutterDecoration = function (e, t) {
      window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
    }, this.removeGutterDecoration = function (e, t) {
      window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
    }, this.setAnnotations = function (e) {
      this.$annotations = [];
      for (var t = 0; t < e.length; t++) {
        var i = e[t], n = i.row, s = this.$annotations[n];
        s || (s = this.$annotations[n] = {text: []});
        var r = i.text;
        r = r ? o.escapeHTML(r) : i.html || "", -1 === s.text.indexOf(r) && s.text.push(r);
        var a = i.type;
        "error" == a ? s.className = " ace_error" : "warning" == a && " ace_error" != s.className ? s.className = " ace_warning" : "info" != a || s.className || (s.className = " ace_info")
      }
    }, this.$updateAnnotations = function (e) {
      if (this.$annotations.length) {
        var t = e.data, i = t.range, n = i.start.row, s = i.end.row - n;
        if (0 === s) ; else if ("removeText" == t.action || "removeLines" == t.action) this.$annotations.splice(n, s + 1, null); else {
          var o = new Array(s + 1);
          o.unshift(n, 1), this.$annotations.splice.apply(this.$annotations, o)
        }
      }
    }, this.update = function (e) {
      for (var t = this.session, i = e.firstRow, s = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), o = t.getNextFoldLine(i), r = o ? o.start.row : 1 / 0, a = this.$showFoldWidgets && t.foldWidgets, l = t.$breakpoints, h = t.$decorations, c = t.$firstLineNumber, u = 0, d = t.gutterRenderer || this.$renderer, g = null, f = -1, m = i; ;) {
        if (m > r && (m = o.end.row + 1, o = t.getNextFoldLine(m, o), r = o ? o.start.row : 1 / 0), m > s) {
          for (; this.$cells.length > f + 1;) g = this.$cells.pop(), this.element.removeChild(g.element);
          break
        }
        g = this.$cells[++f], g || (g = {
          element: null,
          textNode: null,
          foldWidget: null
        }, g.element = n.createElement("div"), g.textNode = document.createTextNode(""), g.element.appendChild(g.textNode), this.element.appendChild(g.element), this.$cells[f] = g);
        var p = "ace_gutter-cell ";
        l[m] && (p += l[m]), h[m] && (p += h[m]), this.$annotations[m] && (p += this.$annotations[m].className), g.element.className != p && (g.element.className = p);
        var A = t.getRowLength(m) * e.lineHeight + "px";
        if (A != g.element.style.height && (g.element.style.height = A), a) {
          var C = a[m];
          null == C && (C = a[m] = t.getFoldWidget(m))
        }
        if (C) {
          g.foldWidget || (g.foldWidget = n.createElement("span"), g.element.appendChild(g.foldWidget));
          var p = "ace_fold-widget ace_" + C;
          p += "start" == C && m == r && m < o.end.row ? " ace_closed" : " ace_open", g.foldWidget.className != p && (g.foldWidget.className = p);
          var A = e.lineHeight + "px";
          g.foldWidget.style.height != A && (g.foldWidget.style.height = A)
        } else g.foldWidget && (g.element.removeChild(g.foldWidget), g.foldWidget = null);
        var F = u = d ? d.getText(t, m) : m + c;
        F != g.textNode.data && (g.textNode.data = F), m++
      }
      this.element.style.height = e.minHeight + "px", (this.$fixedWidth || t.$useWrapMode) && (u = t.getLength() + c);
      var v = d ? d.getWidth(t, u, e) : u.toString().length * e.characterWidth,
        w = this.$padding || this.$computePadding();
      v += w.left + w.right, v === this.gutterWidth || isNaN(v) || (this.gutterWidth = v, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", v))
    }, this.$fixedWidth = !1, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
      this.$renderer = !e && {
        getWidth: function () {
          return ""
        }, getText: function () {
          return ""
        }
      }
    }, this.getShowLineNumbers = function () {
      return this.$showLineNumbers
    }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
      e ? n.addCssClass(this.element, "ace_folding-enabled") : n.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
    }, this.getShowFoldWidgets = function () {
      return this.$showFoldWidgets
    }, this.$computePadding = function () {
      if (!this.element.firstChild) return {left: 0, right: 0};
      var e = n.computedStyle(this.element.firstChild);
      return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e.paddingRight) || 0, this.$padding
    }, this.getRegion = function (e) {
      var t = this.$padding || this.$computePadding(), i = this.element.getBoundingClientRect();
      return e.x < t.left + i.left ? "markers" : this.$showFoldWidgets && e.x > i.right - t.right ? "foldWidgets" : void 0
    }
  }).call(a.prototype), t.Gutter = a
}), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (e, t, i) {
  "use strict";
  var n = e("../range").Range, s = e("../lib/dom"), o = function (e) {
    this.element = s.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
  };
  (function () {
    this.$padding = 0, this.setPadding = function (e) {
      this.$padding = e
    }, this.setSession = function (e) {
      this.session = e
    }, this.setMarkers = function (e) {
      this.markers = e
    }, this.update = function (e) {
      var e = e || this.config;
      if (e) {
        this.config = e;
        var t = [];
        for (var i in this.markers) {
          var n = this.markers[i];
          if (n.range) {
            var s = n.range.clipRows(e.firstRow, e.lastRow);
            if (!s.isEmpty()) if (s = s.toScreenRange(this.session), n.renderer) {
              var o = this.$getTop(s.start.row, e), r = this.$padding + s.start.column * e.characterWidth;
              n.renderer(t, s, r, o, e)
            } else "fullLine" == n.type ? this.drawFullLineMarker(t, s, n.clazz, e) : "screenLine" == n.type ? this.drawScreenLineMarker(t, s, n.clazz, e) : s.isMultiLine() ? "text" == n.type ? this.drawTextMarker(t, s, n.clazz, e) : this.drawMultiLineMarker(t, s, n.clazz, e) : this.drawSingleLineMarker(t, s, n.clazz + " ace_start", e)
          } else n.update(t, this, this.session, e)
        }
        this.element.innerHTML = t.join("")
      }
    }, this.$getTop = function (e, t) {
      return (e - t.firstRowScreen) * t.lineHeight
    }, this.drawTextMarker = function (e, t, i, s, o) {
      var r = t.start.row, a = new n(r, t.start.column, r, this.session.getScreenLastRowColumn(r));
      for (this.drawSingleLineMarker(e, a, i + " ace_start", s, 1, o), r = t.end.row, a = new n(r, 0, r, t.end.column), this.drawSingleLineMarker(e, a, i, s, 0, o), r = t.start.row + 1; r < t.end.row; r++) a.start.row = r, a.end.row = r, a.end.column = this.session.getScreenLastRowColumn(r), this.drawSingleLineMarker(e, a, i, s, 1, o)
    }, this.drawMultiLineMarker = function (e, t, i, n, s) {
      var o = this.$padding, r = n.lineHeight, a = this.$getTop(t.start.row, n),
        l = o + t.start.column * n.characterWidth;
      s = s || "", e.push("<div class='", i, " ace_start' style='", "height:", r, "px;", "right:0;", "top:", a, "px;", "left:", l, "px;", s, "'></div>"), a = this.$getTop(t.end.row, n);
      var h = t.end.column * n.characterWidth;
      e.push("<div class='", i, "' style='", "height:", r, "px;", "width:", h, "px;", "top:", a, "px;", "left:", o, "px;", s, "'></div>"), r = (t.end.row - t.start.row - 1) * n.lineHeight, 0 > r || (a = this.$getTop(t.start.row + 1, n), e.push("<div class='", i, "' style='", "height:", r, "px;", "right:0;", "top:", a, "px;", "left:", o, "px;", s, "'></div>"))
    }, this.drawSingleLineMarker = function (e, t, i, n, s, o) {
      var r = n.lineHeight, a = (t.end.column + (s || 0) - t.start.column) * n.characterWidth,
        l = this.$getTop(t.start.row, n), h = this.$padding + t.start.column * n.characterWidth;
      e.push("<div class='", i, "' style='", "height:", r, "px;", "width:", a, "px;", "top:", l, "px;", "left:", h, "px;", o || "", "'></div>")
    }, this.drawFullLineMarker = function (e, t, i, n, s) {
      var o = this.$getTop(t.start.row, n), r = n.lineHeight;
      t.start.row != t.end.row && (r += this.$getTop(t.end.row, n) - o), e.push("<div class='", i, "' style='", "height:", r, "px;", "top:", o, "px;", "left:0;right:0;", s || "", "'></div>")
    }, this.drawScreenLineMarker = function (e, t, i, n, s) {
      var o = this.$getTop(t.start.row, n), r = n.lineHeight;
      e.push("<div class='", i, "' style='", "height:", r, "px;", "top:", o, "px;", "left:0;right:0;", s || "", "'></div>")
    }
  }).call(o.prototype), t.Marker = o
}), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"),
    r = (e("../lib/useragent"), e("../lib/event_emitter").EventEmitter), a = function (e) {
      this.element = s.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this)
    };
  (function () {
    n.implement(this, r), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "→", this.SPACE_CHAR = "·", this.$padding = 0, this.$updateEolChar = function () {
      var e = "\n" == this.session.doc.getNewLineCharacter() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
      return this.EOL_CHAR != e ? (this.EOL_CHAR = e, !0) : void 0
    }, this.setPadding = function (e) {
      this.$padding = e, this.element.style.padding = "0 " + e + "px"
    }, this.getLineHeight = function () {
      return this.$fontMetrics.$characterSize.height || 0
    }, this.getCharacterWidth = function () {
      return this.$fontMetrics.$characterSize.width || 0
    }, this.$setFontMetrics = function (e) {
      this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
        this._signal("changeCharacterSize", e)
      }.bind(this)), this.$pollSizeChanges()
    }, this.checkForSizeChanges = function () {
      this.$fontMetrics.checkForSizeChanges()
    }, this.$pollSizeChanges = function () {
      return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
    }, this.setSession = function (e) {
      this.session = e, e && this.$computeTabString()
    }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
      return this.showInvisibles == e ? !1 : (this.showInvisibles = e, this.$computeTabString(), !0)
    }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
      return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0)
    }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
      var e = this.session.getTabSize();
      this.tabSize = e;
      for (var t = this.$tabStrings = [0], i = 1; e + 1 > i; i++) this.showInvisibles ? t.push("<span class='ace_invisible ace_invisible_tab'>" + this.TAB_CHAR + o.stringRepeat(" ", i - 1) + "</span>") : t.push(o.stringRepeat(" ", i));
      if (this.displayIndentGuides) {
        this.$indentGuideRe = /\s\S| \t|\t |\s$/;
        var n = "ace_indent-guide", s = "", r = "";
        if (this.showInvisibles) {
          n += " ace_invisible", s = " ace_invisible_space", r = " ace_invisible_tab";
          var a = o.stringRepeat(this.SPACE_CHAR, this.tabSize),
            l = this.TAB_CHAR + o.stringRepeat(" ", this.tabSize - 1)
        } else var a = o.stringRepeat(" ", this.tabSize), l = a;
        this.$tabStrings[" "] = "<span class='" + n + s + "'>" + a + "</span>", this.$tabStrings["	"] = "<span class='" + n + r + "'>" + l + "</span>"
      }
    }, this.updateLines = function (e, t, i) {
      (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e), this.config = e;
      for (var n = Math.max(t, e.firstRow), s = Math.min(i, e.lastRow), o = this.element.childNodes, r = 0, a = e.firstRow; n > a; a++) {
        var l = this.session.getFoldLine(a);
        if (l) {
          if (l.containsRow(n)) {
            n = l.start.row;
            break
          }
          a = l.end.row
        }
        r++
      }
      for (var a = n, l = this.session.getNextFoldLine(a), h = l ? l.start.row : 1 / 0; ;) {
        if (a > h && (a = l.end.row + 1, l = this.session.getNextFoldLine(a, l), h = l ? l.start.row : 1 / 0), a > s) break;
        var c = o[r++];
        if (c) {
          var u = [];
          this.$renderLine(u, a, !this.$useLineGroups(), a == h ? l : !1), c.style.height = e.lineHeight * this.session.getRowLength(a) + "px", c.innerHTML = u.join("")
        }
        a++
      }
    }, this.scrollLines = function (e) {
      var t = this.config;
      if (this.config = e, !t || t.lastRow < e.firstRow) return this.update(e);
      if (e.lastRow < t.firstRow) return this.update(e);
      var i = this.element;
      if (t.firstRow < e.firstRow) for (var n = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); n > 0; n--) i.removeChild(i.firstChild);
      if (t.lastRow > e.lastRow) for (var n = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); n > 0; n--) i.removeChild(i.lastChild);
      if (e.firstRow < t.firstRow) {
        var s = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
        i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s)
      }
      if (e.lastRow > t.lastRow) {
        var s = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
        i.appendChild(s)
      }
    }, this.$renderLinesFragment = function (e, t, i) {
      for (var n = this.element.ownerDocument.createDocumentFragment(), o = t, r = this.session.getNextFoldLine(o), a = r ? r.start.row : 1 / 0; ;) {
        if (o > a && (o = r.end.row + 1, r = this.session.getNextFoldLine(o, r), a = r ? r.start.row : 1 / 0), o > i) break;
        var l = s.createElement("div"), h = [];
        if (this.$renderLine(h, o, !1, o == a ? r : !1), l.innerHTML = h.join(""), this.$useLineGroups()) l.className = "ace_line_group", n.appendChild(l), l.style.height = e.lineHeight * this.session.getRowLength(o) + "px"; else for (; l.firstChild;) n.appendChild(l.firstChild);
        o++
      }
      return n
    }, this.update = function (e) {
      this.config = e;
      for (var t = [], i = e.firstRow, n = e.lastRow, s = i, o = this.session.getNextFoldLine(s), r = o ? o.start.row : 1 / 0; ;) {
        if (s > r && (s = o.end.row + 1, o = this.session.getNextFoldLine(s, o), r = o ? o.start.row : 1 / 0), s > n) break;
        this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(s), "px'>"), this.$renderLine(t, s, !1, s == r ? o : !1), this.$useLineGroups() && t.push("</div>"), s++
      }
      this.element.innerHTML = t.join("")
    }, this.$textToken = {text: !0, rparen: !0, lparen: !0}, this.$renderToken = function (e, t, i, n) {
      var s = this,
        r = /\t|&|<|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
        a = function (e, i, n, r, a) {
          if (i) return s.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + o.stringRepeat(s.SPACE_CHAR, e.length) + "</span>" : e;
          if ("&" == e) return "&#38;";
          if ("<" == e) return "&#60;";
          if ("	" == e) {
            var l = s.session.getScreenTabSize(t + r);
            return t += l - 1, s.$tabStrings[l]
          }
          if ("　" == e) {
            var h = s.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk",
              c = s.showInvisibles ? s.SPACE_CHAR : "";
            return t += 1, "<span class='" + h + "' style='width:" + 2 * s.config.characterWidth + "px'>" + c + "</span>"
          }
          return n ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + s.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + 2 * s.config.characterWidth + "px'>" + e + "</span>")
        }, l = n.replace(r, a);
      if (this.$textToken[i.type]) e.push(l); else {
        var h = "ace_" + i.type.replace(/\./g, " ace_"), c = "";
        "fold" == i.type && (c = " style='width:" + i.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", h, "'", c, ">", l, "</span>")
      }
      return t + n.length
    }, this.renderIndentGuide = function (e, t, i) {
      var n = t.search(this.$indentGuideRe);
      return 0 >= n || n >= i ? t : " " == t[0] ? (n -= n % this.tabSize, e.push(o.stringRepeat(this.$tabStrings[" "], n / this.tabSize)), t.substr(n)) : "	" == t[0] ? (e.push(o.stringRepeat(this.$tabStrings["	"], n)), t.substr(n)) : t
    }, this.$renderWrappedLine = function (e, t, i, n) {
      for (var s = 0, o = 0, r = i[0], a = 0, l = 0; l < t.length; l++) {
        var h = t[l], c = h.value;
        if (0 == l && this.displayIndentGuides) {
          if (s = c.length, c = this.renderIndentGuide(e, c, r), !c) continue;
          s -= c.length
        }
        if (s + c.length < r) a = this.$renderToken(e, a, h, c), s += c.length; else {
          for (; s + c.length >= r;) a = this.$renderToken(e, a, h, c.substring(0, r - s)), c = c.substring(r - s), s = r, n || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), o++, a = 0, r = i[o] || Number.MAX_VALUE;
          0 != c.length && (s += c.length, a = this.$renderToken(e, a, h, c))
        }
      }
    }, this.$renderSimpleLine = function (e, t) {
      var i = 0, n = t[0], s = n.value;
      this.displayIndentGuides && (s = this.renderIndentGuide(e, s)), s && (i = this.$renderToken(e, i, n, s));
      for (var o = 1; o < t.length; o++) n = t[o], s = n.value, i = this.$renderToken(e, i, n, s)
    }, this.$renderLine = function (e, t, i, n) {
      if (n || 0 == n || (n = this.session.getFoldLine(t)), n) var s = this.$getFoldLineTokens(t, n); else var s = this.session.getTokens(t);
      if (i || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>"), s.length) {
        var o = this.session.getRowSplitData(t);
        o && o.length ? this.$renderWrappedLine(e, s, o, i) : this.$renderSimpleLine(e, s)
      }
      this.showInvisibles && (n && (t = n.end.row), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), i || e.push("</div>")
    }, this.$getFoldLineTokens = function (e, t) {
      function i(e, t, i) {
        for (var n = 0, o = 0; o + e[n].value.length < t;) if (o += e[n].value.length, n++, n == e.length) return;
        if (o != t) {
          var r = e[n].value.substring(t - o);
          r.length > i - t && (r = r.substring(0, i - t)), s.push({type: e[n].type, value: r}), o = t + r.length, n += 1
        }
        for (; i > o && n < e.length;) {
          var r = e[n].value;
          r.length + o > i ? s.push({
            type: e[n].type,
            value: r.substring(0, i - o)
          }) : s.push(e[n]), o += r.length, n += 1
        }
      }

      var n = this.session, s = [], o = n.getTokens(e);
      return t.walk(function (e, t, r, a, l) {
        null != e ? s.push({type: "fold", value: e}) : (l && (o = n.getTokens(t)), o.length && i(o, a, r))
      }, t.end.row, this.session.getLine(t.end.row).length), s
    }, this.$useLineGroups = function () {
      return this.session.getUseWrapMode()
    }, this.destroy = function () {
      clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
    }
  }).call(a.prototype), t.Text = a
}), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (e, t, i) {
  "use strict";
  var n, s = e("../lib/dom"), o = function (e) {
    this.element = s.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), void 0 === n && (n = "opacity" in this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), s.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateVisibility.bind(this)
  };
  (function () {
    this.$updateVisibility = function (e) {
      for (var t = this.cursors, i = t.length; i--;) t[i].style.visibility = e ? "" : "hidden"
    }, this.$updateOpacity = function (e) {
      for (var t = this.cursors, i = t.length; i--;) t[i].style.opacity = e ? "" : "0"
    }, this.$padding = 0, this.setPadding = function (e) {
      this.$padding = e
    }, this.setSession = function (e) {
      this.session = e
    }, this.setBlinking = function (e) {
      e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
    }, this.setBlinkInterval = function (e) {
      e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
    }, this.setSmoothBlinking = function (e) {
      e == this.smoothBlinking || n || (this.smoothBlinking = e, s.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = (e ? this.$updateOpacity : this.$updateVisibility).bind(this), this.restartTimer())
    }, this.addCursor = function () {
      var e = s.createElement("div");
      return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
    }, this.removeCursor = function () {
      if (this.cursors.length > 1) {
        var e = this.cursors.pop();
        return e.parentNode.removeChild(e), e
      }
    }, this.hideCursor = function () {
      this.isVisible = !1, s.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
    }, this.showCursor = function () {
      this.isVisible = !0, s.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
    }, this.restartTimer = function () {
      var e = this.$updateCursors;
      if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && s.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) {
        this.smoothBlinking && setTimeout(function () {
          s.addCssClass(this.element, "ace_smooth-blinking")
        }.bind(this));
        var t = function () {
          this.timeoutId = setTimeout(function () {
            e(!1)
          }, .6 * this.blinkInterval)
        }.bind(this);
        this.intervalId = setInterval(function () {
          e(!0), t()
        }, this.blinkInterval), t()
      }
    }, this.getPixelPosition = function (e, t) {
      if (!this.config || !this.session) return {left: 0, top: 0};
      e || (e = this.session.selection.getCursor());
      var i = this.session.documentToScreenPosition(e), n = this.$padding + i.column * this.config.characterWidth,
        s = (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
      return {left: n, top: s}
    }, this.update = function (e) {
      this.config = e;
      var t = this.session.$selectionMarkers, i = 0, n = 0;
      (void 0 === t || 0 === t.length) && (t = [{cursor: null}]);
      for (var i = 0, s = t.length; s > i; i++) {
        var o = this.getPixelPosition(t[i].cursor, !0);
        if (!((o.top > e.height + e.offset || o.top < 0) && i > 1)) {
          var r = (this.cursors[n++] || this.addCursor()).style;
          this.drawCursor ? this.drawCursor(r, o, e, t[i], this.session) : (r.left = o.left + "px", r.top = o.top + "px", r.width = e.characterWidth + "px", r.height = e.lineHeight + "px")
        }
      }
      for (; this.cursors.length > n;) this.removeCursor();
      var a = this.session.getOverwrite();
      this.$setOverwrite(a), this.$pixelPos = o, this.restartTimer()
    }, this.drawCursor = null, this.$setOverwrite = function (e) {
      e != this.overwrite && (this.overwrite = e, e ? s.addCssClass(this.element, "ace_overwrite-cursors") : s.removeCssClass(this.element, "ace_overwrite-cursors"))
    }, this.destroy = function () {
      clearInterval(this.intervalId), clearTimeout(this.timeoutId)
    }
  }).call(o.prototype), t.Cursor = o
}), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/dom"), o = e("./lib/event"), r = e("./lib/event_emitter").EventEmitter,
    a = function (e) {
      this.element = s.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault)
    };
  (function () {
    n.implement(this, r), this.setVisible = function (e) {
      this.element.style.display = e ? "" : "none", this.isVisible = e
    }
  }).call(a.prototype);
  var l = function (e, t) {
    a.call(this, e), this.scrollTop = 0, t.$scrollbarWidth = this.width = s.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
  };
  n.inherits(l, a), function () {
    this.classSuffix = "-v", this.onScroll = function () {
      this.skipEvent || (this.scrollTop = this.element.scrollTop, this._emit("scroll", {data: this.scrollTop})), this.skipEvent = !1
    }, this.getWidth = function () {
      return this.isVisible ? this.width : 0
    }, this.setHeight = function (e) {
      this.element.style.height = e + "px"
    }, this.setInnerHeight = function (e) {
      this.inner.style.height = e + "px"
    }, this.setScrollHeight = function (e) {
      this.inner.style.height = e + "px"
    }, this.setScrollTop = function (e) {
      this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = this.element.scrollTop = e)
    }
  }.call(l.prototype);
  var h = function (e, t) {
    a.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
  };
  n.inherits(h, a), function () {
    this.classSuffix = "-h",
      this.onScroll = function () {
        this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
      }, this.getHeight = function () {
      return this.isVisible ? this.height : 0
    }, this.setWidth = function (e) {
      this.element.style.width = e + "px"
    }, this.setInnerWidth = function (e) {
      this.inner.style.width = e + "px"
    }, this.setScrollWidth = function (e) {
      this.inner.style.width = e + "px"
    }, this.setScrollLeft = function (e) {
      this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
    }
  }.call(h.prototype), t.ScrollBar = l, t.ScrollBarV = l, t.ScrollBarH = h, t.VScrollBar = l, t.HScrollBar = h
}), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (e, t, i) {
  "use strict";
  var n = e("./lib/event"), s = function (e, t) {
    this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
  };
  (function () {
    this.schedule = function (e) {
      if (this.changes = this.changes | e, !this.pending && this.changes) {
        this.pending = !0;
        var t = this;
        n.nextFrame(function () {
          t.pending = !1;
          for (var e; e = t.changes;) t.changes = 0, t.onRender(e)
        }, this.window)
      }
    }
  }).call(s.prototype), t.RenderLoop = s
}), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, i) {
  var n = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"), r = e("../lib/useragent"),
    a = e("../lib/event_emitter").EventEmitter, l = 0, h = t.FontMetrics = function (e, t) {
      this.el = s.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = s.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = s.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), l || this.$testFractionalRect(), this.$measureNode.innerHTML = o.stringRepeat("X", l), this.$characterSize = {
        width: 0,
        height: 0
      }, this.checkForSizeChanges()
    };
  (function () {
    n.implement(this, a), this.$characterSize = {width: 0, height: 0}, this.$testFractionalRect = function () {
      var e = s.createElement("div");
      this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px", document.documentElement.appendChild(e);
      var t = e.getBoundingClientRect().width;
      l = t > 0 && 1 > t ? 50 : 100, e.parentNode.removeChild(e)
    }, this.$setMeasureNodeStyles = function (e, t) {
      e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", r.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
    }, this.checkForSizeChanges = function () {
      var e = this.$measureSizes();
      if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
        this.$measureNode.style.fontWeight = "bold";
        var t = this.$measureSizes();
        this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
      }
    }, this.$pollSizeChanges = function () {
      if (this.$pollSizeChangesTimer) return this.$pollSizeChangesTimer;
      var e = this;
      return this.$pollSizeChangesTimer = setInterval(function () {
        e.checkForSizeChanges()
      }, 500)
    }, this.setPolling = function (e) {
      e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && this.$pollSizeChangesTimer
    }, this.$measureSizes = function () {
      if (50 === l) {
        var e = null;
        try {
          e = this.$measureNode.getBoundingClientRect()
        } catch (t) {
          e = {width: 0, height: 0}
        }
        var i = {height: e.height, width: e.width / l}
      } else var i = {height: this.$measureNode.clientHeight, width: this.$measureNode.clientWidth / l};
      return 0 === i.width || 0 === i.height ? null : i
    }, this.$measureCharWidth = function (e) {
      this.$main.innerHTML = o.stringRepeat(e, l);
      var t = this.$main.getBoundingClientRect();
      return t.width / l
    }, this.getCharacterWidth = function (e) {
      var t = this.charSizes[e];
      return void 0 === t && (this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
    }, this.destroy = function () {
      clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
    }
  }).call(h.prototype)
}), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), s = e("./lib/dom"), o = e("./config"), r = e("./lib/useragent"),
    a = e("./layer/gutter").Gutter, l = e("./layer/marker").Marker, h = e("./layer/text").Text,
    c = e("./layer/cursor").Cursor, u = e("./scrollbar").HScrollBar, d = e("./scrollbar").VScrollBar,
    g = e("./renderloop").RenderLoop, f = e("./layer/font_metrics").FontMetrics,
    m = e("./lib/event_emitter").EventEmitter,
    p = '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}';
  s.importCssString(p, "ace_editor.css");
  var A = function (e, t) {
    var i = this;
    this.container = e || s.createElement("div"), this.$keepTextAreaAtCursor = !r.isOldIE, s.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = s.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.scroller = s.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = s.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new a(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new l(this.content);
    var n = this.$textLayer = new h(this.content);
    this.canvas = n.element, this.$markerFront = new l(this.content), this.$cursorLayer = new c(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new d(this.container, this), this.scrollBarH = new u(this.container, this), this.scrollBarV.addEventListener("scroll", function (e) {
      i.$scrollAnimation || i.session.setScrollTop(e.data - i.scrollMargin.top)
    }), this.scrollBarH.addEventListener("scroll", function (e) {
      i.$scrollAnimation || i.session.setScrollLeft(e.data - i.scrollMargin.left)
    }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
      row: 0,
      column: 0
    }, this.$fontMetrics = new f(this.container, 500), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function (e) {
      i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height), i._signal("changeCharacterSize", e)
    }), this.$size = {
      width: 0,
      height: 0,
      scrollerHeight: 0,
      scrollerWidth: 0,
      $dirty: !0
    }, this.layerConfig = {
      width: 1,
      padding: 0,
      firstRow: 0,
      firstRowScreen: 0,
      lastRow: 0,
      lineHeight: 0,
      characterWidth: 0,
      minHeight: 1,
      maxHeight: 1,
      offset: 0,
      height: 1,
      gutterOffset: 1
    }, this.scrollMargin = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      v: 0,
      h: 0
    }, this.$loop = new g(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._emit("renderer", this)
  };
  (function () {
    this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, m), this.updateCharacterSize = function () {
      this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
    }, this.setSession = function (e) {
      this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
    }, this.updateLines = function (e, t, i) {
      if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
        firstRow: e,
        lastRow: t
      }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
        if (!i) return;
        this.$changedLines.lastRow = this.layerConfig.lastRow
      }
      this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
    }, this.onChangeNewLineMode = function () {
      this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar()
    }, this.onChangeTabSize = function () {
      this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
    }, this.updateText = function () {
      this.$loop.schedule(this.CHANGE_TEXT)
    }, this.updateFull = function (e) {
      e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
    }, this.updateFontSize = function () {
      this.$textLayer.checkForSizeChanges()
    }, this.$changes = 0, this.$updateSizeAsync = function () {
      this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
    }, this.onResize = function (e, t, i, n) {
      if (!(this.resizing > 2)) {
        this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
        var s = this.container;
        n || (n = s.clientHeight || s.scrollHeight), i || (i = s.clientWidth || s.scrollWidth);
        var o = this.$updateCachedSize(e, t, i, n);
        if (!this.$size.scrollerHeight || !i && !n) return this.resizing = 0;
        e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(o | this.$changes, !0) : this.$loop.schedule(o | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
      }
    }, this.$updateCachedSize = function (e, t, i, n) {
      n -= this.$extraHeight || 0;
      var s = 0, o = this.$size,
        r = {width: o.width, height: o.height, scrollerHeight: o.scrollerHeight, scrollerWidth: o.scrollerWidth};
      return n && (e || o.height != n) && (o.height = n, s |= this.CHANGE_SIZE, o.scrollerHeight = o.height, this.$horizScroll && (o.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", s |= this.CHANGE_SCROLL), i && (e || o.width != i) && (s |= this.CHANGE_SIZE, o.width = i, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, this.scrollBarH.element.style.left = this.scroller.style.left = t + "px", o.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth()), this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px", this.scroller.style.bottom = this.scrollBarH.getHeight() + "px", (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (s |= this.CHANGE_FULL)), o.$dirty = !i || !n, s && this._signal("resize", r), s
    }, this.onGutterResize = function () {
      var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
      e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
    }, this.adjustWrapLimit = function () {
      var e = this.$size.scrollerWidth - 2 * this.$padding, t = Math.floor(e / this.characterWidth);
      return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
    }, this.setAnimatedScroll = function (e) {
      this.setOption("animatedScroll", e)
    }, this.getAnimatedScroll = function () {
      return this.$animatedScroll
    }, this.setShowInvisibles = function (e) {
      this.setOption("showInvisibles", e)
    }, this.getShowInvisibles = function () {
      return this.getOption("showInvisibles")
    }, this.getDisplayIndentGuides = function () {
      return this.getOption("displayIndentGuides")
    }, this.setDisplayIndentGuides = function (e) {
      this.setOption("displayIndentGuides", e)
    }, this.setShowPrintMargin = function (e) {
      this.setOption("showPrintMargin", e)
    }, this.getShowPrintMargin = function () {
      return this.getOption("showPrintMargin")
    }, this.setPrintMarginColumn = function (e) {
      this.setOption("printMarginColumn", e)
    }, this.getPrintMarginColumn = function () {
      return this.getOption("printMarginColumn")
    }, this.getShowGutter = function () {
      return this.getOption("showGutter")
    }, this.setShowGutter = function (e) {
      return this.setOption("showGutter", e)
    }, this.getFadeFoldWidgets = function () {
      return this.getOption("fadeFoldWidgets")
    }, this.setFadeFoldWidgets = function (e) {
      this.setOption("fadeFoldWidgets", e)
    }, this.setHighlightGutterLine = function (e) {
      this.setOption("highlightGutterLine", e)
    }, this.getHighlightGutterLine = function () {
      return this.getOption("highlightGutterLine")
    }, this.$updateGutterLineHighlight = function () {
      var e = this.$cursorLayer.$pixelPos, t = this.layerConfig.lineHeight;
      if (this.session.getUseWrapMode()) {
        var i = this.session.selection.getCursor();
        i.column = 0, e = this.$cursorLayer.getPixelPosition(i, !0), t *= this.session.getRowLength(i.row)
      }
      this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = t + "px"
    }, this.$updatePrintMargin = function () {
      if (this.$showPrintMargin || this.$printMarginEl) {
        if (!this.$printMarginEl) {
          var e = s.createElement("div");
          e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = s.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
        }
        var t = this.$printMarginEl.style;
        t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
      }
    }, this.getContainerElement = function () {
      return this.container
    }, this.getMouseEventTarget = function () {
      return this.content
    }, this.getTextAreaContainer = function () {
      return this.container
    }, this.$moveTextAreaToCursor = function () {
      if (this.$keepTextAreaAtCursor) {
        var e = this.layerConfig, t = this.$cursorLayer.$pixelPos.top, i = this.$cursorLayer.$pixelPos.left;
        t -= e.offset;
        var n = this.textarea.style, s = this.lineHeight;
        if (0 > t || t > e.height - s) return void (n.top = n.left = "0");
        var o = this.characterWidth;
        if (this.$composition) {
          var r = this.textarea.value.replace(/^\x01+/, "");
          o *= this.session.$getStringScreenWidth(r)[0] + 2, s += 2
        }
        i -= this.scrollLeft, i > this.$size.scrollerWidth - o && (i = this.$size.scrollerWidth - o), i += this.gutterWidth, n.height = s + "px", n.width = o + "px", n.left = Math.min(i, this.$size.scrollerWidth - o) + "px", n.top = Math.min(t, this.$size.height - s) + "px"
      }
    }, this.getFirstVisibleRow = function () {
      return this.layerConfig.firstRow
    }, this.getFirstFullyVisibleRow = function () {
      return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
    }, this.getLastFullyVisibleRow = function () {
      var e = Math.floor((this.layerConfig.height + this.layerConfig.offset) / this.layerConfig.lineHeight);
      return this.layerConfig.firstRow - 1 + e
    }, this.getLastVisibleRow = function () {
      return this.layerConfig.lastRow
    }, this.$padding = null, this.setPadding = function (e) {
      this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
    }, this.setScrollMargin = function (e, t, i, n) {
      var s = this.scrollMargin;
      s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | n, s.left = 0 | i, s.v = s.top + s.bottom, s.h = s.left + s.right, s.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-s.top), this.updateFull()
    }, this.getHScrollBarAlwaysVisible = function () {
      return this.$hScrollBarAlwaysVisible
    }, this.setHScrollBarAlwaysVisible = function (e) {
      this.setOption("hScrollBarAlwaysVisible", e)
    }, this.getVScrollBarAlwaysVisible = function () {
      return this.$vScrollBarAlwaysVisible
    }, this.setVScrollBarAlwaysVisible = function (e) {
      this.setOption("vScrollBarAlwaysVisible", e)
    }, this.$updateScrollBarV = function () {
      var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
      !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
    }, this.$updateScrollBarH = function () {
      this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
    }, this.$frozen = !1, this.freeze = function () {
      this.$frozen = !0
    }, this.unfreeze = function () {
      this.$frozen = !1
    }, this.$renderChanges = function (e, t) {
      if (this.$changes && (e |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !e && !t) return void (this.$changes |= e);
      if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
      this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender");
      var i = this.layerConfig;
      if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
        if (e |= this.$computeLayerConfig(), i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
          var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
          n > 0 && (this.scrollTop = n, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig())
        }
        i = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = -i.offset + "px", this.content.style.marginTop = -i.offset + "px", this.content.style.width = i.width + 2 * this.$padding + "px", this.content.style.height = i.minHeight + "px"
      }
      return e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL ? (this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void this._signal("afterRender")) : e & this.CHANGE_SCROLL ? (e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), void this._signal("afterRender")) : (e & this.CHANGE_TEXT ? (this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(i), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i), void this._signal("afterRender"))
    }, this.$autosize = function () {
      var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight,
        i = Math.max((this.$minLines || 1) * this.lineHeight, Math.min(t, e)) + this.scrollMargin.v + (this.$extraHeight || 0),
        n = e > t;
      if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
        n != this.$vScroll && (this.$vScroll = n, this.scrollBarV.setVisible(n));
        var s = this.container.clientWidth;
        this.container.style.height = i + "px", this.$updateCachedSize(!0, this.$gutterWidth, s, i), this.desiredHeight = i, this._signal("autosize")
      }
    }, this.$computeLayerConfig = function () {
      this.$maxLines && this.lineHeight > 1 && this.$autosize();
      var e = this.session, t = this.$size, i = t.height <= 2 * this.lineHeight, n = this.session.getScreenLength(),
        s = n * this.lineHeight, o = this.scrollTop % this.lineHeight, r = t.scrollerHeight + this.lineHeight,
        a = this.$getLongestLine(),
        l = !i && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - a - 2 * this.$padding < 0),
        h = this.$horizScroll !== l;
      h && (this.$horizScroll = l, this.scrollBarH.setVisible(l));
      var c = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
      s += c, this.session.setScrollTop(Math.max(-this.scrollMargin.top, Math.min(this.scrollTop, s - t.scrollerHeight + this.scrollMargin.bottom))), this.session.setScrollLeft(Math.max(-this.scrollMargin.left, Math.min(this.scrollLeft, a + 2 * this.$padding - t.scrollerWidth + this.scrollMargin.right)));
      var u = !i && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - s + c < 0 || this.scrollTop),
        d = this.$vScroll !== u;
      d && (this.$vScroll = u, this.scrollBarV.setVisible(u));
      var g, f, m = Math.ceil(r / this.lineHeight) - 1,
        p = Math.max(0, Math.round((this.scrollTop - o) / this.lineHeight)), A = p + m, C = this.lineHeight;
      p = e.screenToDocumentRow(p, 0);
      var F = e.getFoldLine(p);
      F && (p = F.start.row), g = e.documentToScreenRow(p, 0), f = e.getRowLength(p) * C, A = Math.min(e.screenToDocumentRow(A, 0), e.getLength() - 1), r = t.scrollerHeight + e.getRowLength(A) * C + f, o = this.scrollTop - g * C;
      var v = 0;
      return this.layerConfig.width != a && (v = this.CHANGE_H_SCROLL), (h || d) && (v = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), d && (a = this.$getLongestLine())), this.layerConfig = {
        width: a,
        padding: this.$padding,
        firstRow: p,
        firstRowScreen: g,
        lastRow: A,
        lineHeight: C,
        characterWidth: this.characterWidth,
        minHeight: r,
        maxHeight: s,
        offset: o,
        gutterOffset: Math.max(0, Math.ceil((o + t.height - t.scrollerHeight) / C)),
        height: this.$size.scrollerHeight
      }, v
    }, this.$updateLines = function () {
      var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
      this.$changedLines = null;
      var i = this.layerConfig;
      return e > i.lastRow + 1 || t < i.firstRow ? void 0 : t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(i), void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, e, t), !0);
    }, this.$getLongestLine = function () {
      var e = this.session.getScreenWidth();
      return this.showInvisibles && !this.session.$useWrapMode && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
    }, this.updateFrontMarkers = function () {
      this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
    }, this.updateBackMarkers = function () {
      this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
    }, this.addGutterDecoration = function (e, t) {
      this.$gutterLayer.addGutterDecoration(e, t)
    }, this.removeGutterDecoration = function (e, t) {
      this.$gutterLayer.removeGutterDecoration(e, t)
    }, this.updateBreakpoints = function (e) {
      this.$loop.schedule(this.CHANGE_GUTTER)
    }, this.setAnnotations = function (e) {
      this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
    }, this.updateCursor = function () {
      this.$loop.schedule(this.CHANGE_CURSOR)
    }, this.hideCursor = function () {
      this.$cursorLayer.hideCursor()
    }, this.showCursor = function () {
      this.$cursorLayer.showCursor()
    }, this.scrollSelectionIntoView = function (e, t, i) {
      this.scrollCursorIntoView(e, i), this.scrollCursorIntoView(t, i)
    }, this.scrollCursorIntoView = function (e, t, i) {
      if (0 !== this.$size.scrollerHeight) {
        var n = this.$cursorLayer.getPixelPosition(e), s = n.left, o = n.top, r = i && i.top || 0,
          a = i && i.bottom || 0, l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
        l + r > o ? (t && (o -= t * this.$size.scrollerHeight), 0 === o && (o = -this.scrollMargin.top), this.session.setScrollTop(o)) : l + this.$size.scrollerHeight - a < o + this.lineHeight && (t && (o += t * this.$size.scrollerHeight), this.session.setScrollTop(o + this.lineHeight - this.$size.scrollerHeight));
        var h = this.scrollLeft;
        h > s ? (s < this.$padding + 2 * this.layerConfig.characterWidth && (s = -this.scrollMargin.left), this.session.setScrollLeft(s)) : h + this.$size.scrollerWidth < s + this.characterWidth ? this.session.setScrollLeft(Math.round(s + this.characterWidth - this.$size.scrollerWidth)) : h <= this.$padding && s - h < this.characterWidth && this.session.setScrollLeft(0)
      }
    }, this.getScrollTop = function () {
      return this.session.getScrollTop()
    }, this.getScrollLeft = function () {
      return this.session.getScrollLeft()
    }, this.getScrollTopRow = function () {
      return this.scrollTop / this.lineHeight
    }, this.getScrollBottomRow = function () {
      return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
    }, this.scrollToRow = function (e) {
      this.session.setScrollTop(e * this.lineHeight)
    }, this.alignCursor = function (e, t) {
      "number" == typeof e && (e = {row: e, column: 0});
      var i = this.$cursorLayer.getPixelPosition(e), n = this.$size.scrollerHeight - this.lineHeight,
        s = i.top - n * (t || 0);
      return this.session.setScrollTop(s), s
    }, this.STEPS = 8, this.$calcSteps = function (e, t) {
      var i = 0, n = this.STEPS, s = [], o = function (e, t, i) {
        return i * (Math.pow(e - 1, 3) + 1) + t
      };
      for (i = 0; n > i; ++i) s.push(o(i / this.STEPS, e, t - e));
      return s
    }, this.scrollToLine = function (e, t, i, n) {
      var s = this.$cursorLayer.getPixelPosition({row: e, column: 0}), o = s.top;
      t && (o -= this.$size.scrollerHeight / 2);
      var r = this.scrollTop;
      this.session.setScrollTop(o), i !== !1 && this.animateScrolling(r, n)
    }, this.animateScrolling = function (e, t) {
      var i = this.scrollTop;
      if (this.$animatedScroll) {
        var n = this;
        if (e != i) {
          if (this.$scrollAnimation) {
            var s = this.$scrollAnimation.steps;
            if (s.length && (e = s[0], e == i)) return
          }
          var o = n.$calcSteps(e, i);
          this.$scrollAnimation = {
            from: e,
            to: i,
            steps: o
          }, clearInterval(this.$timer), n.session.setScrollTop(o.shift()), n.session.$scrollTop = i, this.$timer = setInterval(function () {
            o.length ? (n.session.setScrollTop(o.shift()), n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1, n.session.setScrollTop(i), i = null) : (n.$timer = clearInterval(n.$timer), n.$scrollAnimation = null, t && t())
          }, 10)
        }
      }
    }, this.scrollToY = function (e) {
      this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
    }, this.scrollToX = function (e) {
      this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
    }, this.scrollTo = function (e, t) {
      this.session.setScrollTop(t), this.session.setScrollLeft(t)
    }, this.scrollBy = function (e, t) {
      t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
    }, this.isScrollableBy = function (e, t) {
      return 0 > t && this.session.getScrollTop() >= 1 - this.scrollMargin.top ? !0 : t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom ? !0 : 0 > e && this.session.getScrollLeft() >= 1 - this.scrollMargin.left ? !0 : e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right ? !0 : void 0
    }, this.pixelToScreenCoordinates = function (e, t) {
      var i = this.scroller.getBoundingClientRect(),
        n = (e + this.scrollLeft - i.left - this.$padding) / this.characterWidth,
        s = Math.floor((t + this.scrollTop - i.top) / this.lineHeight), o = Math.round(n);
      return {row: s, column: o, side: n - o > 0 ? 1 : -1}
    }, this.screenToTextCoordinates = function (e, t) {
      var i = this.scroller.getBoundingClientRect(),
        n = Math.round((e + this.scrollLeft - i.left - this.$padding) / this.characterWidth),
        s = (t + this.scrollTop - i.top) / this.lineHeight;
      return this.session.screenToDocumentPosition(s, Math.max(n, 0))
    }, this.textToScreenCoordinates = function (e, t) {
      var i = this.scroller.getBoundingClientRect(), n = this.session.documentToScreenPosition(e, t),
        s = this.$padding + Math.round(n.column * this.characterWidth), o = n.row * this.lineHeight;
      return {pageX: i.left + s - this.scrollLeft, pageY: i.top + o - this.scrollTop}
    }, this.visualizeFocus = function () {
      s.addCssClass(this.container, "ace_focus")
    }, this.visualizeBlur = function () {
      s.removeCssClass(this.container, "ace_focus")
    }, this.showComposition = function (e) {
      this.$composition || (this.$composition = {
        keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
        cssText: this.textarea.style.cssText
      }), this.$keepTextAreaAtCursor = !0, s.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
    }, this.setCompositionText = function (e) {
      this.$moveTextAreaToCursor()
    }, this.hideComposition = function () {
      this.$composition && (s.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null)
    }, this.setTheme = function (e, t) {
      function i(i) {
        if (n.$themeId != e) return t && t();
        if (i.cssClass) {
          s.importCssString(i.cssText, i.cssClass, n.container.ownerDocument), n.theme && s.removeCssClass(n.container, n.theme.cssClass);
          var o = "padding" in i ? i.padding : "padding" in (n.theme || {}) ? 4 : n.$padding;
          n.$padding && o != n.$padding && n.setPadding(o), n.$theme = i.cssClass, n.theme = i, s.addCssClass(n.container, i.cssClass), s.setCssClass(n.container, "ace_dark", i.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {theme: i}), t && t()
        }
      }

      var n = this;
      if (this.$themeId = e, n._dispatchEvent("themeChange", {theme: e}), e && "string" != typeof e) i(e); else {
        var r = e || this.$options.theme.initialValue;
        o.loadModule(["theme", r], i)
      }
    }, this.getTheme = function () {
      return this.$themeId
    }, this.setStyle = function (e, t) {
      s.setCssClass(this.container, e, t !== !1)
    }, this.unsetStyle = function (e) {
      s.removeCssClass(this.container, e)
    }, this.setCursorStyle = function (e) {
      this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
    }, this.setMouseCursor = function (e) {
      this.scroller.style.cursor = e
    }, this.destroy = function () {
      this.$textLayer.destroy(), this.$cursorLayer.destroy()
    }
  }).call(A.prototype), o.defineOptions(A.prototype, "renderer", {
    animatedScroll: {initialValue: !1}, showInvisibles: {
      set: function (e) {
        this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
      }, initialValue: !1
    }, showPrintMargin: {
      set: function () {
        this.$updatePrintMargin()
      }, initialValue: !0
    }, printMarginColumn: {
      set: function () {
        this.$updatePrintMargin()
      }, initialValue: 80
    }, printMargin: {
      set: function (e) {
        "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
      }, get: function () {
        return this.$showPrintMargin && this.$printMarginColumn
      }
    }, showGutter: {
      set: function (e) {
        this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
      }, initialValue: !0
    }, fadeFoldWidgets: {
      set: function (e) {
        s.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
      }, initialValue: !1
    }, showFoldWidgets: {
      set: function (e) {
        this.$gutterLayer.setShowFoldWidgets(e)
      }, initialValue: !0
    }, showLineNumbers: {
      set: function (e) {
        this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER)
      }, initialValue: !0
    }, displayIndentGuides: {
      set: function (e) {
        this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
      }, initialValue: !0
    }, highlightGutterLine: {
      set: function (e) {
        return this.$gutterLineHighlight ? (this.$gutterLineHighlight.style.display = e ? "" : "none", void (this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight())) : (this.$gutterLineHighlight = s.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", void this.$gutter.appendChild(this.$gutterLineHighlight))
      }, initialValue: !1, value: !0
    }, hScrollBarAlwaysVisible: {
      set: function (e) {
        this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
      }, initialValue: !1
    }, vScrollBarAlwaysVisible: {
      set: function (e) {
        this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
      }, initialValue: !1
    }, fontSize: {
      set: function (e) {
        "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
      }, initialValue: 12
    }, fontFamily: {
      set: function (e) {
        this.container.style.fontFamily = e, this.updateFontSize()
      }
    }, maxLines: {
      set: function (e) {
        this.updateFull()
      }
    }, minLines: {
      set: function (e) {
        this.updateFull()
      }
    }, scrollPastEnd: {
      set: function (e) {
        e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
      }, initialValue: 0, handlesSet: !0
    }, fixedWidthGutter: {
      set: function (e) {
        this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
      }
    }, theme: {
      set: function (e) {
        this.setTheme(e)
      }, get: function () {
        return this.$themeId || this.theme
      }, initialValue: "./theme/textmate", handlesSet: !0
    }
  }), t.VirtualRenderer = A
}), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function (e, t, i) {
  "use strict";
  var n = e("../lib/oop"), s = e("../lib/net"), o = e("../lib/event_emitter").EventEmitter, r = e("../config"),
    a = function (t, i, n, s) {
      if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), r.get("packaged") || !e.toUrl) s = s || r.moduleUrl(i, "worker"); else {
        var o = this.$normalizePath;
        s = s || o(e.toUrl("ace/worker/worker.js", null, "_"));
        var a = {};
        t.forEach(function (t) {
          a[t] = o(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
        })
      }
      try {
        this.$worker = new Worker(s)
      } catch (l) {
        if (!(l instanceof window.DOMException)) throw l;
        var h = this.$workerBlob(s), c = window.URL || window.webkitURL, u = c.createObjectURL(h);
        this.$worker = new Worker(u), c.revokeObjectURL(u)
      }
      this.$worker.postMessage({
        init: !0,
        tlns: a,
        module: i,
        classname: n
      }), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
    };
  (function () {
    n.implement(this, o), this.onMessage = function (e) {
      var t = e.data;
      switch (t.type) {
        case "event":
          this._signal(t.name, {data: t.data});
          break;
        case "call":
          var i = this.callbacks[t.id];
          i && (i(t.data), delete this.callbacks[t.id]);
          break;
        case "error":
          this.reportError(t.data);
          break;
        case "log":
          window.console && console.log && console.log.apply(console, t.data)
      }
    }, this.reportError = function (e) {
      window.console && console.error && console.error(e)
    }, this.$normalizePath = function (e) {
      return s.qualifyURL(e)
    }, this.terminate = function () {
      this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
    }, this.send = function (e, t) {
      this.$worker.postMessage({command: e, args: t})
    }, this.call = function (e, t, i) {
      if (i) {
        var n = this.callbackId++;
        this.callbacks[n] = i, t.push(n)
      }
      this.send(e, t)
    }, this.emit = function (e, t) {
      try {
        this.$worker.postMessage({event: e, data: {data: t.data}})
      } catch (i) {
        console.error(i.stack)
      }
    }, this.attachToDocument = function (e) {
      this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
    }, this.changeListener = function (e) {
      this.deltaQueue ? this.deltaQueue.push(e.data) : (this.deltaQueue = [e.data], setTimeout(this.$sendDeltaQueue, 0))
    }, this.$sendDeltaQueue = function () {
      var e = this.deltaQueue;
      e && (this.deltaQueue = null, e.length > 20 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e}))
    }, this.$workerBlob = function (e) {
      var t = "importScripts('" + s.qualifyURL(e) + "');";
      try {
        return new Blob([t], {type: "application/javascript"})
      } catch (i) {
        var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, o = new n;
        return o.append(t), o.getBlob("application/javascript")
      }
    }
  }).call(a.prototype);
  var l = function (e, t, i) {
    this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
    var n = null, s = !1, a = Object.create(o), l = this;
    this.$worker = {}, this.$worker.terminate = function () {
    }, this.$worker.postMessage = function (e) {
      l.messageBuffer.push(e), n && (s ? setTimeout(h) : h())
    }, this.setEmitSync = function (e) {
      s = e
    };
    var h = function () {
      var e = l.messageBuffer.shift();
      e.command ? n[e.command].apply(n, e.args) : e.event && a._signal(e.event, e.data)
    };
    a.postMessage = function (e) {
      l.onMessage({data: e})
    }, a.callback = function (e, t) {
      this.postMessage({type: "call", id: t, data: e})
    }, a.emit = function (e, t) {
      this.postMessage({type: "event", name: e, data: t})
    }, r.loadModule(["worker", t], function (e) {
      for (n = new e[i](a); l.messageBuffer.length;) h()
    })
  };
  l.prototype = a.prototype, t.UIWorkerClient = l, t.WorkerClient = a
}), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function (e, t, i) {
  "use strict";
  var n = e("./range").Range, s = e("./lib/event_emitter").EventEmitter, o = e("./lib/oop"),
    r = function (e, t, i, n, s, o) {
      var r = this;
      this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = s, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = n, this.$onCursorChange = function () {
        setTimeout(function () {
          r.onCursorChange()
        })
      }, this.$pos = i;
      var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
      this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
    };
  (function () {
    o.implement(this, s), this.setup = function () {
      var e = this, t = this.doc, i = this.session, s = this.$pos;
      this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = t.createAnchor(s.row, s.column), this.markerId = i.addMarker(new n(s.row, s.column, s.row, s.column + this.length), this.mainClass, null, !1), this.pos.on("change", function (t) {
        i.removeMarker(e.markerId), e.markerId = i.addMarker(new n(t.value.row, t.value.column, t.value.row, t.value.column + e.length), e.mainClass, null, !1)
      }), this.others = [], this.$others.forEach(function (i) {
        var n = t.createAnchor(i.row, i.column);
        e.others.push(n)
      }), i.setUndoSelect(!1)
    }, this.showOtherMarkers = function () {
      if (!this.othersActive) {
        var e = this.session, t = this;
        this.othersActive = !0, this.others.forEach(function (i) {
          i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, !1), i.on("change", function (s) {
            e.removeMarker(i.markerId), i.markerId = e.addMarker(new n(s.value.row, s.value.column, s.value.row, s.value.column + t.length), t.othersClass, null, !1)
          })
        })
      }
    }, this.hideOtherMarkers = function () {
      if (this.othersActive) {
        this.othersActive = !1;
        for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
      }
    }, this.onUpdate = function (e) {
      var t = e.data, i = t.range;
      if (i.start.row === i.end.row && i.start.row === this.pos.row && !this.$updating) {
        this.$updating = !0;
        var s = "insertText" === t.action ? i.end.column - i.start.column : i.start.column - i.end.column;
        if (i.start.column >= this.pos.column && i.start.column <= this.pos.column + this.length + 1) {
          var o = i.start.column - this.pos.column;
          if (this.length += s, !this.session.$fromUndo) {
            if ("insertText" === t.action) for (var r = this.others.length - 1; r >= 0; r--) {
              var a = this.others[r], l = {row: a.row, column: a.column + o};
              a.row === i.start.row && i.start.column < a.column && (l.column += s), this.doc.insert(l, t.text)
            } else if ("removeText" === t.action) for (var r = this.others.length - 1; r >= 0; r--) {
              var a = this.others[r], l = {row: a.row, column: a.column + o};
              a.row === i.start.row && i.start.column < a.column && (l.column += s), this.doc.remove(new n(l.row, l.column, l.row, l.column - s))
            }
            i.start.column === this.pos.column && "insertText" === t.action ? setTimeout(function () {
              this.pos.setPosition(this.pos.row, this.pos.column - s);
              for (var e = 0; e < this.others.length; e++) {
                var t = this.others[e], n = {row: t.row, column: t.column - s};
                t.row === i.start.row && i.start.column < t.column && (n.column += s), t.setPosition(n.row, n.column)
              }
            }.bind(this), 0) : i.start.column === this.pos.column && "removeText" === t.action && setTimeout(function () {
              for (var e = 0; e < this.others.length; e++) {
                var t = this.others[e];
                t.row === i.start.row && i.start.column < t.column && t.setPosition(t.row, t.column - s)
              }
            }.bind(this), 0)
          }
          this.pos._emit("change", {value: this.pos});
          for (var r = 0; r < this.others.length; r++) this.others[r]._emit("change", {value: this.others[r]})
        }
        this.$updating = !1
      }
    }, this.onCursorChange = function (e) {
      if (!this.$updating && this.session) {
        var t = this.session.selection.getCursor();
        t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
      }
    }, this.detach = function () {
      this.session.removeMarker(this.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.pos.detach();
      for (var e = 0; e < this.others.length; e++) this.others[e].detach();
      this.session.setUndoSelect(!0), this.session = null
    }, this.cancel = function () {
      if (-1 === this.$undoStackDepth) throw Error("Canceling placeholders only supported with undo manager attached to session.");
      for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; t > i; i++) e.undo(!0);
      this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
    }
  }).call(r.prototype), t.PlaceHolder = r
}), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, i) {
  function n(e, t) {
    return e.row == t.row && e.column == t.column
  }

  function s(e) {
    var t = e.domEvent, i = t.altKey, s = t.shiftKey, a = t.ctrlKey, l = e.getAccelKey(), h = e.getButton();
    if (a && r.isMac && (h = t.button), e.editor.inMultiSelectMode && 2 == h) return void e.editor.textInput.onContextMenu(e.domEvent);
    if (!a && !i && !l) return void (0 === h && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode());
    if (0 === h) {
      var c, u = e.editor, d = u.selection, g = u.inMultiSelectMode, f = e.getDocumentPosition(), m = d.getCursor(),
        p = e.inSelection() || d.isEmpty() && n(f, m), A = e.x, C = e.y, F = function (e) {
          A = e.clientX, C = e.clientY
        }, v = u.session, w = u.renderer.pixelToScreenCoordinates(A, C), E = w;
      if (u.$mouseHandler.$enableJumpToDef) a && i || l && i ? c = "add" : i && (c = "block"); else if (l && !i) {
        if (c = "add", !g && s) return
      } else i && (c = "block");
      if (c && r.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == c) {
        if (!g && p) return;
        if (!g) {
          var $ = d.toOrientedRange();
          u.addSelectionMarker($)
        }
        var b = d.rangeList.rangeAtPoint(f);
        u.$blockScrolling++, u.inVirtualSelectionMode = !0, s && (b = null, $ = d.ranges[0], u.removeSelectionMarker($)), u.once("mouseup", function () {
          var e = d.toOrientedRange();
          b && e.isEmpty() && n(b.cursor, e.cursor) ? d.substractPoint(e.cursor) : (s ? d.substractPoint($.cursor) : $ && (u.removeSelectionMarker($), d.addRange($)), d.addRange(e)), u.$blockScrolling--, u.inVirtualSelectionMode = !1
        })
      } else if ("block" == c) {
        e.stop(), u.inVirtualSelectionMode = !0;
        var y, B = [], D = function () {
          var e = u.renderer.pixelToScreenCoordinates(A, C), t = v.screenToDocumentPosition(e.row, e.column);
          n(E, e) && n(t, d.lead) || (E = e, u.$blockScrolling++, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(B), B = d.rectangularRangeBlock(E, w), u.$mouseHandler.$clickSelection && 1 == B.length && B[0].isEmpty() && (B[0] = u.$mouseHandler.$clickSelection.clone()), B.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers(), u.$blockScrolling--)
        };
        u.$blockScrolling++, g && !l ? d.toSingleRange() : !g && l && (y = d.toOrientedRange(), u.addSelectionMarker(y)), s ? w = v.documentToScreenPosition(d.lead) : d.moveToPosition(f), u.$blockScrolling--, E = {
          row: -1,
          column: -1
        };
        var S = function (e) {
          clearInterval(x), u.removeSelectionMarkers(B), B.length || (B = [d.toOrientedRange()]), u.$blockScrolling++, y && (u.removeSelectionMarker(y), d.toSingleRange(y));
          for (var t = 0; t < B.length; t++) d.addRange(B[t]);
          u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null, u.$blockScrolling--
        }, k = D;
        o.capture(u.container, F, S);
        var x = setInterval(function () {
          k()
        }, 20);
        return e.preventDefault()
      }
    }
  }

  var o = e("../lib/event"), r = e("../lib/useragent");
  t.onMouseDown = s
}), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (e, t, i) {
  t.defaultCommands = [{
    name: "addCursorAbove", exec: function (e) {
      e.selectMoreLines(-1)
    }, bindKey: {win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "addCursorBelow", exec: function (e) {
      e.selectMoreLines(1)
    }, bindKey: {win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "addCursorAboveSkipCurrent", exec: function (e) {
      e.selectMoreLines(-1, !0)
    }, bindKey: {win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "addCursorBelowSkipCurrent", exec: function (e) {
      e.selectMoreLines(1, !0)
    }, bindKey: {win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "selectMoreBefore", exec: function (e) {
      e.selectMore(-1)
    }, bindKey: {win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "selectMoreAfter", exec: function (e) {
      e.selectMore(1)
    }, bindKey: {win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "selectNextBefore", exec: function (e) {
      e.selectMore(-1, !0)
    }, bindKey: {win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "selectNextAfter", exec: function (e) {
      e.selectMore(1, !0)
    }, bindKey: {win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right"}, scrollIntoView: "cursor", readonly: !0
  }, {
    name: "splitIntoLines", exec: function (e) {
      e.multiSelect.splitIntoLines()
    }, bindKey: {win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L"}, readonly: !0
  }, {
    name: "alignCursors", exec: function (e) {
      e.alignCursors()
    }, bindKey: {win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A"}, scrollIntoView: "cursor"
  }, {
    name: "findAll", exec: function (e) {
      e.findAll()
    }, bindKey: {win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G"}, scrollIntoView: "cursor", readonly: !0
  }], t.multiSelectCommands = [{
    name: "singleSelection", bindKey: "esc", exec: function (e) {
      e.exitMultiSelectMode()
    }, scrollIntoView: "cursor", readonly: !0, isAvailable: function (e) {
      return e && e.inMultiSelectMode
    }
  }];
  var n = e("../keyboard/hash_handler").HashHandler;
  t.keyboardHandler = new n(t.multiSelectCommands)
}), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function (e, t, i) {
  function n(e, t, i) {
    return m.$options.wrap = !0, m.$options.needle = t, m.$options.backwards = -1 == i, m.find(e)
  }

  function s(e, t) {
    return e.row == t.row && e.column == t.column
  }

  function o(e) {
    e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", c), e.commands.addCommands(g.defaultCommands), r(e))
  }

  function r(e) {
    function t(t) {
      n && (e.renderer.setMouseCursor(""), n = !1)
    }

    var i = e.textInput.getElement(), n = !1;
    u.addListener(i, "keydown", function (i) {
      18 != i.keyCode || i.ctrlKey || i.shiftKey || i.metaKey ? n && t() : n || (e.renderer.setMouseCursor("crosshair"), n = !0)
    }), u.addListener(i, "keyup", t), u.addListener(i, "blur", t)
  }

  var a = e("./range_list").RangeList, l = e("./range").Range, h = e("./selection").Selection,
    c = e("./mouse/multi_select_handler").onMouseDown, u = e("./lib/event"), d = e("./lib/lang"),
    g = e("./commands/multi_select_commands");
  t.commands = g.defaultCommands.concat(g.multiSelectCommands);
  var f = e("./search").Search, m = new f, p = e("./edit_session").EditSession;
  (function () {
    this.getSelectionMarkers = function () {
      return this.$selectionMarkers
    }
  }).call(p.prototype), function () {
    this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
      if (e) {
        if (!this.inMultiSelectMode && 0 === this.rangeCount) {
          var i = this.toOrientedRange();
          if (this.rangeList.add(i), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
          this.rangeList.removeAll(), this.rangeList.add(i), this.$onAddRange(i)
        }
        e.cursor || (e.cursor = e.end);
        var n = this.rangeList.add(e);
        return this.$onAddRange(e), n.length && this.$onRemoveRange(n), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
      }
    }, this.toSingleRange = function (e) {
      e = e || this.ranges[0];
      var t = this.rangeList.removeAll();
      t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
    }, this.substractPoint = function (e) {
      var t = this.rangeList.substractPoint(e);
      return t ? (this.$onRemoveRange(t), t[0]) : void 0
    }, this.mergeOverlappingRanges = function () {
      var e = this.rangeList.merge();
      e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
    }, this.$onAddRange = function (e) {
      this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
    }, this.$onRemoveRange = function (e) {
      if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
        var t = this.rangeList.ranges.pop();
        e.push(t), this.rangeCount = 0
      }
      for (var i = e.length; i--;) {
        var n = this.ranges.indexOf(e[i]);
        this.ranges.splice(n, 1)
      }
      this._signal("removeRange", {ranges: e}), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
    }, this.$initRangeList = function () {
      this.rangeList || (this.rangeList = new a, this.ranges = [], this.rangeCount = 0)
    }, this.getAllRanges = function () {
      return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
    }, this.splitIntoLines = function () {
      if (this.rangeCount > 1) {
        var e = this.rangeList.ranges, t = e[e.length - 1], i = l.fromPoints(e[0].start, t.end);
        this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
      } else {
        var i = this.getRange(), n = this.isBackwards(), s = i.start.row, o = i.end.row;
        if (s == o) {
          if (n) var r = i.end, a = i.start; else var r = i.start, a = i.end;
          return this.addRange(l.fromPoints(a, a)), void this.addRange(l.fromPoints(r, r))
        }
        var h = [], c = this.getLineRange(s, !0);
        c.start.column = i.start.column, h.push(c);
        for (var u = s + 1; o > u; u++) h.push(this.getLineRange(u, !0));
        c = this.getLineRange(o, !0), c.end.column = i.end.column, h.push(c), h.forEach(this.addRange, this)
      }
    }, this.toggleBlockSelection = function () {
      if (this.rangeCount > 1) {
        var e = this.rangeList.ranges, t = e[e.length - 1], i = l.fromPoints(e[0].start, t.end);
        this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
      } else {
        var n = this.session.documentToScreenPosition(this.selectionLead),
          s = this.session.documentToScreenPosition(this.selectionAnchor), o = this.rectangularRangeBlock(n, s);
        o.forEach(this.addRange, this)
      }
    }, this.rectangularRangeBlock = function (e, t, i) {
      var n = [], o = e.column < t.column;
      if (o) var r = e.column, a = t.column; else var r = t.column, a = e.column;
      var h = e.row < t.row;
      if (h) var c = e.row, u = t.row; else var c = t.row, u = e.row;
      0 > r && (r = 0), 0 > c && (c = 0), c == u && (i = !0);
      for (var d = c; u >= d; d++) {
        var g = l.fromPoints(this.session.screenToDocumentPosition(d, r), this.session.screenToDocumentPosition(d, a));
        if (g.isEmpty()) {
          if (f && s(g.end, f)) break;
          var f = g.end
        }
        g.cursor = o ? g.start : g.end, n.push(g)
      }
      if (h && n.reverse(), !i) {
        for (var m = n.length - 1; n[m].isEmpty() && m > 0;) m--;
        if (m > 0) for (var p = 0; n[p].isEmpty();) p++;
        for (var A = m; A >= p; A--) n[A].isEmpty() && n.splice(A, 1)
      }
      return n
    }
  }.call(h.prototype);
  var A = e("./editor").Editor;
  (function () {
    this.updateSelectionMarkers = function () {
      this.renderer.updateCursor(), this.renderer.updateBackMarkers()
    }, this.addSelectionMarker = function (e) {
      e.cursor || (e.cursor = e.end);
      var t = this.getSelectionStyle();
      return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
    }, this.removeSelectionMarker = function (e) {
      if (e.marker) {
        this.session.removeMarker(e.marker);
        var t = this.session.$selectionMarkers.indexOf(e);
        -1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
      }
    }, this.removeSelectionMarkers = function (e) {
      for (var t = this.session.$selectionMarkers, i = e.length; i--;) {
        var n = e[i];
        if (n.marker) {
          this.session.removeMarker(n.marker);
          var s = t.indexOf(n);
          -1 != s && t.splice(s, 1)
        }
      }
      this.session.selectionMarkerCount = t.length
    }, this.$onAddRange = function (e) {
      this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
    }, this.$onRemoveRange = function (e) {
      this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
    }, this.$onMultiSelect = function (e) {
      this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(g.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
    }, this.$onSingleSelect = function (e) {
      this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(g.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
    }, this.$onMultiSelectExec = function (e) {
      var t = e.command, i = e.editor;
      if (i.multiSelect) {
        if (t.multiSelectAction) "forEach" == t.multiSelectAction ? n = i.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? n = i.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (i.exitMultiSelectMode(), n = t.exec(i, e.args || {})) : n = t.multiSelectAction(i, e.args || {}); else {
          var n = t.exec(i, e.args || {});
          i.multiSelect.addRange(i.multiSelect.toOrientedRange()), i.multiSelect.mergeOverlappingRanges()
        }
        return n
      }
    }, this.forEachSelection = function (e, t, i) {
      if (!this.inVirtualSelectionMode) {
        var n, s = i && i.keepOrder, o = 1 == i || i && i.$byLines, r = this.session, a = this.selection,
          l = a.rangeList, c = (s ? a : l).ranges;
        if (!c.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
        var u = a._eventRegistry;
        a._eventRegistry = {};
        var d = new h(r);
        this.inVirtualSelectionMode = !0;
        for (var g = c.length; g--;) {
          if (o) for (; g > 0 && c[g].start.row == c[g - 1].end.row;) g--;
          d.fromOrientedRange(c[g]), d.index = g, this.selection = r.selection = d;
          var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
          n || void 0 === f || (n = f), d.toOrientedRange(c[g])
        }
        d.detach(), this.selection = r.selection = a, this.inVirtualSelectionMode = !1, a._eventRegistry = u, a.mergeOverlappingRanges();
        var m = this.renderer.$scrollAnimation;
        return this.onCursorChange(), this.onSelectionChange(), m && m.from == m.to && this.renderer.animateScrolling(m.from), n
      }
    }, this.exitMultiSelectMode = function () {
      this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
    }, this.getSelectedText = function () {
      var e = "";
      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        for (var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++) i.push(this.session.getTextRange(t[n]));
        var s = this.session.getDocument().getNewLineCharacter();
        e = i.join(s), e.length == (i.length - 1) * s.length && (e = "")
      } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
      return e
    }, this.$checkMultiselectChange = function (e, t) {
      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        var i = this.multiSelect.ranges[0];
        if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
        var n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
        (n.row != t.row || this.session.$clipPositionToDocument(n.row, n.column).column != t.column) && this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange());
      }
    }, this.findAll = function (e, t, i) {
      if (t = t || {}, t.needle = e || t.needle, void 0 == t.needle) {
        var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
        t.needle = this.session.getTextRange(n)
      }
      this.$search.set(t);
      var s = this.$search.findAll(this.session);
      if (!s.length) return 0;
      this.$blockScrolling += 1;
      var o = this.multiSelect;
      i || o.toSingleRange(s[0]);
      for (var r = s.length; r--;) o.addRange(s[r], !0);
      return n && o.rangeList.rangeAtPoint(n.start) && o.addRange(n, !0), this.$blockScrolling -= 1, s.length
    }, this.selectMoreLines = function (e, t) {
      var i = this.selection.toOrientedRange(), n = i.cursor == i.end,
        s = this.session.documentToScreenPosition(i.cursor);
      this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);
      var o = this.session.screenToDocumentPosition(s.row + e, s.column);
      if (i.isEmpty()) var r = o; else var a = this.session.documentToScreenPosition(n ? i.end : i.start),
        r = this.session.screenToDocumentPosition(a.row + e, a.column);
      if (n) {
        var h = l.fromPoints(o, r);
        h.cursor = h.start
      } else {
        var h = l.fromPoints(r, o);
        h.cursor = h.end
      }
      if (h.desiredColumn = s.column, this.selection.inMultiSelectMode) {
        if (t) var c = i.cursor
      } else this.selection.addRange(i);
      this.selection.addRange(h), c && this.selection.substractPoint(c)
    }, this.transposeSelections = function (e) {
      for (var t = this.session, i = t.multiSelect, n = i.ranges, s = n.length; s--;) {
        var o = n[s];
        if (o.isEmpty()) {
          var r = t.getWordRange(o.start.row, o.start.column);
          o.start.row = r.start.row, o.start.column = r.start.column, o.end.row = r.end.row, o.end.column = r.end.column
        }
      }
      i.mergeOverlappingRanges();
      for (var a = [], s = n.length; s--;) {
        var o = n[s];
        a.unshift(t.getTextRange(o))
      }
      0 > e ? a.unshift(a.pop()) : a.push(a.shift());
      for (var s = n.length; s--;) {
        var o = n[s], r = o.clone();
        t.replace(o, a[s]), o.start.row = r.start.row, o.start.column = r.start.column
      }
    }, this.selectMore = function (e, t, i) {
      var s = this.session, o = s.multiSelect, r = o.toOrientedRange();
      if (!r.isEmpty() || (r = s.getWordRange(r.start.row, r.start.column), r.cursor = -1 == e ? r.start : r.end, this.multiSelect.addRange(r), !i)) {
        var a = s.getTextRange(r), l = n(s, a, e);
        l && (l.cursor = -1 == e ? l.start : l.end, this.$blockScrolling += 1, this.session.unfold(l), this.multiSelect.addRange(l), this.$blockScrolling -= 1, this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(r.cursor)
      }
    }, this.alignCursors = function () {
      var e = this.session, t = e.multiSelect, i = t.ranges, n = -1, s = i.filter(function (e) {
        return e.cursor.row == n ? !0 : void (n = e.cursor.row)
      });
      if (i.length && s.length != i.length - 1) {
        s.forEach(function (e) {
          t.substractPoint(e.cursor)
        });
        var o = 0, r = 1 / 0, a = i.map(function (t) {
          var i = t.cursor, n = e.getLine(i.row), s = n.substr(i.column).search(/\S/g);
          return -1 == s && (s = 0), i.column > o && (o = i.column), r > s && (r = s), s
        });
        i.forEach(function (t, i) {
          var n = t.cursor, s = o - n.column, h = a[i] - r;
          s > h ? e.insert(n, d.stringRepeat(" ", s - h)) : e.remove(new l(n.row, n.column, n.row, n.column - s + h)), t.start.column = t.end.column = o, t.start.row = t.end.row = n.row, t.cursor = t.end
        }), t.fromOrientedRange(i[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
      } else {
        var h = this.selection.getRange(), c = h.start.row, u = h.end.row, g = c == u;
        if (g) {
          var f, m = this.session.getLength();
          do f = this.session.getLine(u); while (/[=:]/.test(f) && ++u < m);
          do f = this.session.getLine(c); while (/[=:]/.test(f) && --c > 0);
          0 > c && (c = 0), u >= m && (u = m - 1)
        }
        var p = this.session.doc.removeLines(c, u);
        p = this.$reAlignText(p, g), this.session.doc.insert({
          row: c,
          column: 0
        }, p.join("\n") + "\n"), g || (h.start.column = 0, h.end.column = p[p.length - 1].length), this.selection.setRange(h)
      }
    }, this.$reAlignText = function (e, t) {
      function i(e) {
        return d.stringRepeat(" ", e)
      }

      function n(e) {
        return e[2] ? i(r) + e[2] + i(a - e[2].length + l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
      }

      function s(e) {
        return e[2] ? i(r + a - e[2].length) + e[2] + i(l, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
      }

      function o(e) {
        return e[2] ? i(r) + e[2] + i(l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
      }

      var r, a, l, h = !0, c = !0;
      return e.map(function (e) {
        var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
        return t ? null == r ? (r = t[1].length, a = t[2].length, l = t[3].length, t) : (r + a + l != t[1].length + t[2].length + t[3].length && (c = !1), r != t[1].length && (h = !1), r > t[1].length && (r = t[1].length), a < t[2].length && (a = t[2].length), l > t[3].length && (l = t[3].length), t) : [e]
      }).map(t ? n : h ? c ? s : n : o)
    }
  }).call(A.prototype), t.onSessionChange = function (e) {
    var t = e.session;
    t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
    var i = e.oldSession;
    i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect.off("removeRange", this.$onRemoveRange), i.multiSelect.off("multiSelect", this.$onMultiSelect), i.multiSelect.off("singleSelect", this.$onSingleSelect), i.multiSelect.lead.off("change", this.$checkMultiselectChange), i.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
  }, t.MultiSelect = o, e("./config").defineOptions(A.prototype, "editor", {
    enableMultiselect: {
      set: function (e) {
        o(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", c)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", c))
      }, value: !0
    }
  })
}), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (e, t, i) {
  "use strict";
  var n = e("../../range").Range, s = t.FoldMode = function () {
  };
  (function () {
    this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, i) {
      var n = e.getLine(i);
      return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
    }, this.getFoldWidgetRange = function (e, t, i) {
      return null
    }, this.indentationBlock = function (e, t, i) {
      var s = /\S/, o = e.getLine(t), r = o.search(s);
      if (-1 != r) {
        for (var a = i || o.length, l = e.getLength(), h = t, c = t; ++t < l;) {
          var u = e.getLine(t).search(s);
          if (-1 != u) {
            if (r >= u) break;
            c = t
          }
        }
        if (c > h) {
          var d = e.getLine(c).length;
          return new n(h, a, c, d)
        }
      }
    }, this.openingBracketBlock = function (e, t, i, s, o) {
      var r = {row: i, column: s + 1}, a = e.$findClosingBracket(t, r, o);
      if (a) {
        var l = e.foldWidgets[a.row];
        return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > r.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(r, a)
      }
    }, this.closingBracketBlock = function (e, t, i, s, o) {
      var r = {row: i, column: s}, a = e.$findOpeningBracket(t, r);
      return a ? (a.column++, r.column--, n.fromPoints(a, r)) : void 0
    }
  }).call(s.prototype)
}), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (e, t, i) {
  "use strict";
  t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
  var n = e("../lib/dom");
  n.importCssString(t.cssText, t.cssClass)
}), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function (e, t, i) {
  "use strict";

  function n(e) {
    this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeEditor", this.$onChangeEditor)
  }

  var s = (e("./lib/oop"), e("./lib/dom"));
  e("./range").Range;
  (function () {
    this.getRowLength = function (e) {
      var t;
      return t = this.lineWidgets ? this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
    }, this.$getWidgetScreenLength = function () {
      var e = 0;
      return this.lineWidgets.forEach(function (t) {
        t && t.rowCount && (e += t.rowCount)
      }), e
    }, this.$onChangeEditor = function (e) {
      this.attach(e.editor)
    }, this.attach = function (e) {
      e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
    }, this.detach = function (e) {
      var t = this.editor;
      if (t) {
        this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
        var i = this.session.lineWidgets;
        i && i.forEach(function (e) {
          e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
        })
      }
    }, this.updateOnChange = function (e) {
      var t = this.session.lineWidgets;
      if (t) {
        var i = e.data, n = i.range, s = n.start.row, o = n.end.row - s;
        if (0 === o) ; else if ("removeText" == i.action || "removeLines" == i.action) {
          var r = t.splice(s + 1, o);
          r.forEach(function (e) {
            e && this.removeLineWidget(e)
          }, this), this.$updateRows()
        } else {
          var a = new Array(o);
          a.unshift(s, 0), t.splice.apply(t, a), this.$updateRows()
        }
      }
    }, this.$updateRows = function () {
      var e = this.session.lineWidgets;
      if (e) {
        var t = !0;
        e.forEach(function (e, i) {
          e && (t = !1, e.row = i)
        }), t && (this.session.lineWidgets = null)
      }
    }, this.addLineWidget = function (e) {
      this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength())), this.session.lineWidgets[e.row] = e;
      var t = this.editor.renderer;
      return e.html && !e.el && (e.el = s.createElement("div"), e.el.innerHTML = e.html), e.el && (s.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), e.pixelHeight || (e.pixelHeight = e.el.offsetHeight), null == e.rowCount && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, t), e
    }, this.removeLineWidget = function (e) {
      if (e._inDocument = !1, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
        e.editor.destroy()
      } catch (t) {
      }
      this.session.lineWidgets && (this.session.lineWidgets[e.row] = void 0), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
    }, this.onWidgetChanged = function (e) {
      this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
    }, this.measureWidgets = function (e, t) {
      var i = this.session._changedWidgets, n = t.layerConfig;
      if (i && i.length) {
        for (var s = 1 / 0, o = 0; o < i.length; o++) {
          var r = i[o];
          r._inDocument || (r._inDocument = !0, t.container.appendChild(r.el)), r.h = r.el.offsetHeight, r.fixedWidth || (r.w = r.el.offsetWidth, r.screenWidth = Math.ceil(r.w / n.characterWidth));
          var a = r.h / n.lineHeight;
          r.coverLine && (a -= this.session.getRowLineCount(r.row), 0 > a && (a = 0)), r.rowCount != a && (r.rowCount = a, r.row < s && (s = r.row))
        }
        s != 1 / 0 && (this.session._emit("changeFold", {data: {start: {row: s}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
      }
    }, this.renderWidgets = function (e, t) {
      var i = t.layerConfig, n = this.session.lineWidgets;
      if (n) {
        for (var s = Math.min(this.firstRow, i.firstRow), o = Math.max(this.lastRow, i.lastRow, n.length); s > 0 && !n[s];) s--;
        this.firstRow = i.firstRow, this.lastRow = i.lastRow, t.$cursorLayer.config = i;
        for (var r = s; o >= r; r++) {
          var a = n[r];
          if (a && a.el) {
            a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
            var l = t.$cursorLayer.getPixelPosition({row: r, column: 0}, !0).top;
            a.coverLine || (l += i.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - i.offset + "px";
            var h = a.coverGutter ? 0 : t.gutterWidth;
            a.fixedWidth || (h -= t.scrollLeft), a.el.style.left = h + "px", a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
          }
        }
      }
    }
  }).call(n.prototype), t.LineWidgets = n
}), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function (e, t, i) {
  "use strict";

  function n(e, t, i) {
    for (var n = 0, s = e.length - 1; s >= n;) {
      var o = n + s >> 1, r = i(t, e[o]);
      if (r > 0) n = o + 1; else {
        if (!(0 > r)) return o;
        s = o - 1
      }
    }
    return -(n + 1)
  }

  function s(e, t, i) {
    var s = e.getAnnotations().sort(a.comparePoints);
    if (s.length) {
      var o = n(s, {row: t, column: -1}, a.comparePoints);
      0 > o && (o = -o - 1), o >= s.length ? o = i > 0 ? 0 : s.length - 1 : 0 === o && 0 > i && (o = s.length - 1);
      var r = s[o];
      if (r && i) {
        if (r.row === t) {
          do r = s[o += i]; while (r && r.row === t);
          if (!r) return s.slice()
        }
        var l = [];
        t = r.row;
        do l[0 > i ? "unshift" : "push"](r), r = s[o += i]; while (r && r.row == t);
        return l.length && l
      }
    }
  }

  var o = e("../line_widgets").LineWidgets, r = e("../lib/dom"), a = e("../range").Range;
  t.showErrorMarker = function (e, t) {
    var i = e.session;
    i.widgetManager || (i.widgetManager = new o(i), i.widgetManager.attach(e));
    var n = e.getCursorPosition(), a = n.row, l = i.lineWidgets && i.lineWidgets[a];
    l ? l.destroy() : a -= t;
    var h, c = s(i, a, t);
    if (c) {
      var u = c[0];
      n.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, n.row = u.row, h = e.renderer.$gutterLayer.$annotations[n.row]
    } else {
      if (l) return;
      h = {text: ["Looks good!"], className: "ace_ok"}
    }
    e.session.unfold(n.row), e.selection.moveToPosition(n);
    var d = {row: n.row, fixedWidth: !0, coverGutter: !0, el: r.createElement("div")},
      g = d.el.appendChild(r.createElement("div")), f = d.el.appendChild(r.createElement("div"));
    f.className = "error_widget_arrow " + h.className;
    var m = e.renderer.$cursorLayer.getPixelPosition(n).left;
    f.style.left = m + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + h.className, g.innerHTML = h.text.join("<br>"), g.appendChild(r.createElement("div"));
    var p = function (e, t, i) {
      return 0 !== t || "esc" !== i && "return" !== i ? void 0 : (d.destroy(), {command: "null"})
    };
    d.destroy = function () {
      e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(p), i.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
    }, e.keyBinding.addKeyboardHandler(p), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: d.el.offsetHeight})
  }, r.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
}), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function (e, t, i) {
  "use strict";
  e("./lib/fixoldbrowsers");
  var n = e("./lib/dom"), s = e("./lib/event"), o = e("./editor").Editor, r = e("./edit_session").EditSession,
    a = e("./undomanager").UndoManager, l = e("./virtual_renderer").VirtualRenderer;
  e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, t.edit = function (e) {
    if ("string" == typeof e) {
      var i = e;
      if (e = document.getElementById(i), !e) throw new Error("ace.edit can't find div #" + i)
    }
    if (e && e.env && e.env.editor instanceof o) return e.env.editor;
    var r = "";
    if (e && /input|textarea/i.test(e.tagName)) {
      var a = e;
      r = a.value, e = n.createElement("pre"), a.parentNode.replaceChild(e, a)
    } else r = n.getInnerText(e), e.innerHTML = "";
    var h = t.createEditSession(r), c = new o(new l(e));
    c.setSession(h);
    var u = {document: h, editor: c, onResize: c.resize.bind(c, null)};
    return a && (u.textarea = a), s.addListener(window, "resize", u.onResize), c.on("destroy", function () {
      s.removeListener(window, "resize", u.onResize), u.editor.container.env = null
    }), c.container.env = c.env = u, c
  }, t.createEditSession = function (e, t) {
    var i = new r(e, t);
    return i.setUndoManager(new a), i
  }, t.EditSession = r, t.UndoManager = a
}), function () {
  ace.require(["ace/ace"], function (e) {
    e && e.config.init(!0), window.ace || (window.ace = e);
    for (var t in e) e.hasOwnProperty(t) && (window.ace[t] = e[t])
  })
}();
