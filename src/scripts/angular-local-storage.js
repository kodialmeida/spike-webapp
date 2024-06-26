/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.2.7 - 2016-03-16
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function (a, b) {
  var c = b.isDefined, d = b.isUndefined, e = b.isNumber, f = b.isObject, g = b.isArray, h = b.extend, i = b.toJson;
  b.module("LocalStorageModule", []).provider("localStorageService", function () {
    this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
      expiry: 30,
      path: "/"
    }, this.notify = {setItem: !0, removeItem: !1}, this.setPrefix = function (a) {
      return this.prefix = a, this
    }, this.setStorageType = function (a) {
      return this.storageType = a, this
    }, this.setStorageCookie = function (a, b) {
      return this.cookie.expiry = a, this.cookie.path = b, this
    }, this.setStorageCookieDomain = function (a) {
      return this.cookie.domain = a, this
    }, this.setNotify = function (a, b) {
      return this.notify = {setItem: a, removeItem: b}, this
    }, this.$get = ["$rootScope", "$window", "$document", "$parse", function (a, b, j, k) {
      var l, m = this, n = m.prefix, o = m.cookie, p = m.notify, q = m.storageType;
      j ? j[0] && (j = j[0]) : j = document, "." !== n.substr(-1) && (n = n ? n + "." : "");
      var r = function (a) {
        return n + a
      }, s = function () {
        try {
          var c = q in b && null !== b[q], d = r("__" + Math.round(1e7 * Math.random()));
          return c && (l = b[q], l.setItem(d, ""), l.removeItem(d)), c
        } catch (e) {
          return q = "cookie", a.$broadcast("LocalStorageModule.notification.error", e.message), !1
        }
      }(), t = function (b, c) {
        if (c = d(c) ? null : i(c), !s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
          key: b,
          newvalue: c,
          storageType: "cookie"
        }), z(b, c);
        try {
          l && l.setItem(r(b), c), p.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
            key: b,
            newvalue: c,
            storageType: m.storageType
          })
        } catch (e) {
          return a.$broadcast("LocalStorageModule.notification.error", e.message), z(b, c)
        }
        return !0
      }, u = function (b) {
        if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), A(b);
        var c = l ? l.getItem(r(b)) : null;
        if (!c || "null" === c) return null;
        try {
          return JSON.parse(c)
        } catch (d) {
          return c
        }
      }, v = function () {
        var b, c;
        for (b = 0; b < arguments.length; b++) if (c = arguments[b], s && "cookie" !== m.storageType) try {
          l.removeItem(r(c)), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
            key: c,
            storageType: m.storageType
          })
        } catch (d) {
          a.$broadcast("LocalStorageModule.notification.error", d.message), B(c)
        } else s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), p.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
          key: c,
          storageType: "cookie"
        }), B(c)
      }, w = function () {
        if (!s) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), [];
        var b = n.length, c = [];
        for (var d in l) if (d.substr(0, b) === n) try {
          c.push(d.substr(b))
        } catch (e) {
          return a.$broadcast("LocalStorageModule.notification.error", e.Description), []
        }
        return c
      }, x = function (b) {
        var c = n ? new RegExp("^" + n) : new RegExp, d = b ? new RegExp(b) : new RegExp;
        if (!s || "cookie" === m.storageType) return s || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), C();
        var e = n.length;
        for (var f in l) if (c.test(f) && d.test(f.substr(e))) try {
          v(f.substr(e))
        } catch (g) {
          return a.$broadcast("LocalStorageModule.notification.error", g.message), C()
        }
        return !0
      }, y = function () {
        try {
          return b.navigator.cookieEnabled || "cookie" in j && (j.cookie.length > 0 || (j.cookie = "test").indexOf.call(j.cookie, "test") > -1)
        } catch (c) {
          return a.$broadcast("LocalStorageModule.notification.error", c.message), !1
        }
      }(), z = function (b, c, h) {
        if (d(c)) return !1;
        if ((g(c) || f(c)) && (c = i(c)), !y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
        try {
          var k = "", l = new Date, m = "";
          if (null === c ? (l.setTime(l.getTime() + -864e5), k = "; expires=" + l.toGMTString(), c = "") : e(h) && 0 !== h ? (l.setTime(l.getTime() + 24 * h * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()) : 0 !== o.expiry && (l.setTime(l.getTime() + 24 * o.expiry * 60 * 60 * 1e3), k = "; expires=" + l.toGMTString()), b) {
            var n = "; path=" + o.path;
            o.domain && (m = "; domain=" + o.domain), j.cookie = r(b) + "=" + encodeURIComponent(c) + k + n + m
          }
        } catch (p) {
          return a.$broadcast("LocalStorageModule.notification.error", p.message), !1
        }
        return !0
      }, A = function (b) {
        if (!y) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), !1;
        for (var c = j.cookie && j.cookie.split(";") || [], d = 0; d < c.length; d++) {
          for (var e = c[d]; " " === e.charAt(0);) e = e.substring(1, e.length);
          if (0 === e.indexOf(r(b) + "=")) {
            var f = decodeURIComponent(e.substring(n.length + b.length + 1, e.length));
            try {
              return JSON.parse(f)
            } catch (g) {
              return f
            }
          }
        }
        return null
      }, B = function (a) {
        z(a, null)
      }, C = function () {
        for (var a = null, b = n.length, c = j.cookie.split(";"), d = 0; d < c.length; d++) {
          for (a = c[d]; " " === a.charAt(0);) a = a.substring(1, a.length);
          var e = a.substring(b, a.indexOf("="));
          B(e)
        }
      }, D = function () {
        return q
      }, E = function (a, b, d, e) {
        e = e || b;
        var g = u(e);
        return null === g && c(d) ? g = d : f(g) && f(d) && (g = h(g, d)), k(b).assign(a, g), a.$watch(b, function (a) {
          t(e, a)
        }, f(a[b]))
      }, F = function () {
        for (var a = 0, c = b[q], d = 0; d < c.length; d++) 0 === c.key(d).indexOf(n) && a++;
        return a
      };
      return {
        isSupported: s,
        getStorageType: D,
        set: t,
        add: t,
        get: u,
        keys: w,
        remove: v,
        clearAll: x,
        bind: E,
        deriveKey: r,
        length: F,
        cookie: {isSupported: y, set: z, add: z, get: A, remove: B, clearAll: C}
      }
    }]
  })
}(window, window.angular);
//# sourceMappingURL=angular-local-storage.min.js.map
