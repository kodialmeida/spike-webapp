/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";

  function d(a, b) {
    return R(new (R(function () {
    }, {prototype: a})), b)
  }

  function e(a) {
    return Q(arguments, function (b) {
      b !== a && Q(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b)
      })
    }), a
  }

  function f(a, b) {
    var c = [];
    for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;
      c.push(a.path[d])
    }
    return c
  }

  function g(a) {
    if (Object.keys) return Object.keys(a);
    var b = [];
    return Q(a, function (a, c) {
      b.push(c)
    }), b
  }

  function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
    var c = a.length >>> 0, d = Number(arguments[2]) || 0;
    for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) if (d in a && a[d] === b) return d;
    return -1
  }

  function i(a, b, c, d) {
    var e, i = f(c, d), j = {}, k = [];
    for (var l in i) if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
    return R({}, j, b)
  }

  function j(a, b, c) {
    if (!c) {
      c = [];
      for (var d in a) c.push(d)
    }
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      if (a[f] != b[f]) return !1
    }
    return !0
  }

  function k(a, b) {
    var c = {};
    return Q(a, function (a) {
      c[a] = b[a]
    }), c
  }

  function l(a) {
    var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    return Q(c, function (c) {
      c in a && (b[c] = a[c])
    }), b
  }

  function m(a) {
    var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
    for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
    return b
  }

  function n(a, b) {
    var c = P(a), d = c ? [] : {};
    return Q(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a)
    }), d
  }

  function o(a, b) {
    var c = P(a) ? [] : {};
    return Q(a, function (a, d) {
      c[d] = b(a, d)
    }), c
  }

  function p(a, b) {
    var d = 1, f = 2, i = {}, j = [], k = i, l = R(a.when(i), {$$promises: i, $$values: i});
    this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
          if (s[c] = d, N(a)) q.push(c, [function () {
            return b.get(a)
          }], j); else {
            var e = b.annotate(a);
            Q(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a)
            }), q.push(c, a, e)
          }
          r.pop(), s[c] = f
        }
      }

      function o(a) {
        return O(a) && a.then && a.$$promises
      }

      if (!O(i)) throw new Error("'invocables' must be an object");
      var p = g(i || {}), q = [], r = [], s = {};
      return Q(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
        }

        function i(a) {
          r.$$failure = a, n.reject(a)
        }

        function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a)
          }

          function k() {
            if (!L(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h()
              }, j)
            } catch (a) {
              j(a)
            }
          }

          var l = a.defer(), m = 0;
          Q(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k()
            }, j))
          }), m || k(), s[c] = l.promise
        }

        if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!O(d)) throw new Error("'locals' must be an object")
        } else d = k;
        if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
        } else f = l;
        var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = R({}, d), u = 1 + q.length / 3, v = !1;
        if (L(f.$$failure)) return i(f.$$failure), r;
        f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), R(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        return r
      }
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d)
    }
  }

  function q(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return L(a.template) ? this.fromString(a.template, b) : L(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : L(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
    }, this.fromString = function (a, b) {
      return M(a) ? a(b) : a
    }, this.fromUrl = function (c, d) {
      return M(c) && (c = c(d)), null == c ? null : a.get(c, {
        cache: b,
        headers: {Accept: "text/html"}
      }).then(function (a) {
        return a.data
      })
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || {params: b})
    }
  }

  function r(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];
      if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
      if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
      return p[b] = new U.Param(b, c, d, e), p[b]
    }

    function g(a, b, c, d) {
      var e = ["", ""], f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
      if (!b) return f;
      switch (c) {
        case !1:
          e = ["(", ")" + (d ? "?" : "")];
          break;
        case !0:
          f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
          break;
        default:
          e = ["(" + c + "|", ")?"]
      }
      return f + e[0] + b + e[1]
    }

    function h(e, f) {
      var g, h, i, j, k;
      return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = U.type(h) || d(U.type("string"), {pattern: new RegExp(h, b.caseInsensitive ? "i" : c)})), {
        id: g,
        regexp: h,
        segment: i,
        type: j,
        cfg: k
      }
    }

    b = R({params: {}}, O(b) ? b : {});
    var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", m = 0,
      n = this.segments = [], o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new U.ParamSet, q = [];
    this.source = a;
    for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
    t = a.substring(m);
    var u = t.indexOf("?");
    if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);
      if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
    } else this.sourcePath = a, this.sourceSearch = "";
    l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
  }

  function s(a) {
    R(this, a)
  }

  function t() {
    function a(a) {
      return null != a ? a.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : a
    }

    function e(a) {
      return null != a ? a.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : a
    }

    function f() {
      return {strict: p, caseInsensitive: m}
    }

    function i(a) {
      return M(a) || P(a) && M(a[a.length - 1])
    }

    function j() {
      for (; w.length;) {
        var a = w.shift();
        if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
        b.extend(u[a.name], l.invoke(a.def))
      }
    }

    function k(a) {
      R(this, a || {})
    }

    U = this;
    var l, m = !1, p = !0, q = !1, u = {}, v = !0, w = [], x = {
      string: {
        encode: a, decode: e, is: function (a) {
          return null == a || !L(a) || "string" == typeof a
        }, pattern: /[^\/]*/
      },
      "int": {
        encode: a, decode: function (a) {
          return parseInt(a, 10)
        }, is: function (a) {
          return L(a) && this.decode(a.toString()) === a
        }, pattern: /\d+/
      },
      bool: {
        encode: function (a) {
          return a ? 1 : 0
        }, decode: function (a) {
          return 0 !== parseInt(a, 10)
        }, is: function (a) {
          return a === !0 || a === !1
        }, pattern: /0|1/
      },
      date: {
        encode: function (a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
        },
        decode: function (a) {
          if (this.is(a)) return a;
          var b = this.capture.exec(a);
          return b ? new Date(b[1], b[2] - 1, b[3]) : c
        },
        is: function (a) {
          return a instanceof Date && !isNaN(a.valueOf())
        },
        equals: function (a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
        },
        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
      },
      json: {encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/},
      any: {encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/}
    };
    t.$$getDefaultValue = function (a) {
      if (!i(a.value)) return a.value;
      if (!l) throw new Error("Injectable functions cannot be called at configuration time");
      return l.invoke(a.value)
    }, this.caseInsensitive = function (a) {
      return L(a) && (m = a), m
    }, this.strictMode = function (a) {
      return L(a) && (p = a), p
    }, this.defaultSquashPolicy = function (a) {
      if (!L(a)) return q;
      if (a !== !0 && a !== !1 && !N(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
      return q = a, a
    }, this.compile = function (a, b) {
      return new r(a, R(f(), b))
    }, this.isMatcher = function (a) {
      if (!O(a)) return !1;
      var b = !0;
      return Q(r.prototype, function (c, d) {
        M(c) && (b = b && L(a[d]) && M(a[d]))
      }), b
    }, this.type = function (a, b, c) {
      if (!L(b)) return u[a];
      if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
      return u[a] = new s(R({name: a}, b)), c && (w.push({name: a, def: c}), v || j()), this
    }, Q(x, function (a, b) {
      u[b] = new s(R({name: b}, a))
    }), u = d(u, {}), this.$get = ["$injector", function (a) {
      return l = a, v = !1, j(), Q(x, function (a, b) {
        u[b] || (u[b] = new s(a))
      }), this
    }], this.Param = function (a, d, e, f) {
      function j(a) {
        var b = O(a) ? g(a) : [],
          c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
        return c && (a = {value: a}), a.$$fn = i(a.value) ? a.value : function () {
          return a.value
        }, a
      }

      function k(c, d, e) {
        if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");
        return d ? d : c.type ? b.isString(c.type) ? u[c.type] : c.type instanceof s ? c.type : new s(c.type) : "config" === e ? u.any : u.string
      }

      function m() {
        var b = {array: "search" === f ? "auto" : !1}, c = a.match(/\[\]$/) ? {array: !0} : {};
        return R(b, c, e).array
      }

      function p(a, b) {
        var c = a.squash;
        if (!b || c === !1) return !1;
        if (!L(c) || null == c) return q;
        if (c === !0 || N(c)) return c;
        throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
      }

      function r(a, b, d, e) {
        var f, g, i = [{from: "", to: d || b ? c : ""}, {from: null, to: d || b ? c : ""}];
        return f = P(a.replace) ? a.replace : [], N(e) && f.push({from: e, to: c}), g = o(f, function (a) {
          return a.from
        }), n(i, function (a) {
          return -1 === h(g, a.from)
        }).concat(f)
      }

      function t() {
        if (!l) throw new Error("Injectable functions cannot be called at configuration time");
        var a = l.invoke(e.$$fn);
        if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
        return a
      }

      function v(a) {
        function b(a) {
          return function (b) {
            return b.from === a
          }
        }

        function c(a) {
          var c = o(n(x.replace, b(a)), function (a) {
            return a.to
          });
          return c.length ? c[0] : a
        }

        return a = c(a), L(a) ? x.type.$normalize(a) : t()
      }

      function w() {
        return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}"
      }

      var x = this;
      e = j(e), d = k(e, d, f);
      var y = m();
      d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
      var z = e.value !== c, A = p(e, z), B = r(e, y, z, A);
      R(this, {
        id: a,
        type: d,
        location: f,
        array: y,
        squash: A,
        replace: B,
        isOptional: z,
        value: v,
        dynamic: c,
        config: e,
        toString: w
      })
    }, k.prototype = {
      $$new: function () {
        return d(this, R(new k, {$$parent: this}))
      }, $$keys: function () {
        for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
        return b.reverse(), Q(b, function (b) {
          Q(g(b), function (b) {
            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
          })
        }), a
      }, $$values: function (a) {
        var b = {}, c = this;
        return Q(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d])
        }), b
      }, $$equals: function (a, b) {
        var c = !0, d = this;
        return Q(d.$$keys(), function (e) {
          var f = a && a[e], g = b && b[e];
          d[e].type.equals(f, g) || (c = !1)
        }), c
      }, $$validates: function (a) {
        var d, e, f, g, h, i = this.$$keys();
        for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
          if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
          if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1
        }
        return !0
      }, $$parent: c
    }, this.ParamSet = k
  }

  function u(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
      return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
    }

    function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)]
      })
    }

    function g(a, b, c) {
      if (!c) return !1;
      var d = a.invoke(b, b, {$match: c});
      return L(d) ? d : !0
    }

    function h(d, e, f, g, h) {
      function m(a, b, c) {
        return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a
      }

      function n(a) {
        function b(a) {
          var b = a(f, d);
          return b ? (N(b) && d.replace().url(b), !0) : !1
        }

        if (!a || !a.defaultPrevented) {
          p && d.url() === p;
          p = c;
          var e, g = j.length;
          for (e = 0; g > e; e++) if (b(j[e])) return;
          k && b(k)
        }
      }

      function o() {
        return i = i || e.$on("$locationChangeSuccess", n)
      }

      var p, q = g.baseHref(), r = d.url();
      return l || o(), {
        sync: function () {
          n()
        }, listen: function () {
          return o()
        }, update: function (a) {
          return a ? void (r = d.url()) : void (d.url() !== r && (d.url(r), d.replace()))
        }, push: function (a, b, e) {
          var f = a.format(b || {});
          null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
        }, href: function (c, e, f) {
          if (!c.validates(e)) return null;
          var g = a.html5Mode();
          b.isObject(g) && (g = g.enabled), g = g && h.history;
          var i = c.format(e);
          if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;
          var j = !g && i ? "/" : "", k = d.port();
          return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
        }
      }
    }

    var i, j = [], k = null, l = !1;
    this.rule = function (a) {
      if (!M(a)) throw new Error("'rule' must be a function");
      return j.push(a), this
    }, this.otherwise = function (a) {
      if (N(a)) {
        var b = a;
        a = function () {
          return b
        }
      } else if (!M(a)) throw new Error("'rule' must be a function");
      return k = a, this
    }, this.when = function (a, b) {
      var c, h = N(b);
      if (N(a) && (a = d.compile(a)), !h && !M(b) && !P(b)) throw new Error("invalid 'handler' in when()");
      var i = {
        matcher: function (a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a)
          }]), R(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()))
          }, {prefix: N(a.prefix) ? a.prefix : ""})
        }, regex: function (a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
          return h && (c = b, b = ["$match", function (a) {
            return f(c, a)
          }]), R(function (c, d) {
            return g(c, b, a.exec(d.path()))
          }, {prefix: e(a)})
        }
      }, j = {matcher: d.isMatcher(a), regex: a instanceof RegExp};
      for (var k in j) if (j[k]) return this.rule(i[k](a, b));
      throw new Error("invalid 'what' in when()")
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
  }

  function v(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^")
    }

    function m(a, b) {
      if (!a) return c;
      var d = N(a), e = d ? a : a.name, g = f(e);
      if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");
        b = m(b);
        for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) if ("" !== h[i] || 0 !== i) {
          if ("^" !== h[i]) break;
          if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
          k = k.parent
        } else k = b;
        h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
      }
      var l = z[e];
      return !l || !d && (d || l !== a && l.self !== a) ? c : l
    }

    function n(a, b) {
      A[a] || (A[a] = []), A[a].push(b)
    }

    function p(a) {
      for (var b = A[a] || []; b.length;) q(b.shift())
    }

    function q(b) {
      b = d(b, {
        self: b, resolve: b.resolve || {}, toString: function () {
          return this.name
        }
      });
      var c = b.name;
      if (!N(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
      if (z.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");
      var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : N(b.parent) ? b.parent : O(b.parent) && N(b.parent.name) ? b.parent.name : "";
      if (e && !z[e]) return n(e, b.self);
      for (var f in C) M(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
      return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {inherit: !0, location: !1})
      }]), p(c), b
    }

    function r(a) {
      return a.indexOf("*") > -1
    }

    function s(a) {
      for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
      return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length ? !1 : c.join("") === b.join("")
    }

    function t(a, b) {
      return N(a) && !L(b) ? C[a] : M(b) && N(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this
    }

    function u(a, b) {
      return O(a) ? b = a : b.name = a, q(b), this
    }

    function v(a, e, f, h, l, n, p, q, t) {
      function u(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);
        if (g.defaultPrevented) return p.update(), D;
        if (!g.retry) return null;
        if (f.$retry) return p.update(), E;
        var h = y.transition = e.when(g.retry);
        return h.then(function () {
          return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options))
        }, function () {
          return D
        }), p.update(), h
      }

      function v(a, c, d, g, i, j) {
        function m() {
          var c = [];
          return Q(a.views, function (d, e) {
            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
            g.$template = [function () {
              return f.load(e, {view: d, locals: i.globals, params: n, notify: j.notify}) || ""
            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
              if (M(d.controllerProvider) || P(d.controllerProvider)) {
                var f = b.extend({}, g, i.globals);
                c.$$controller = h.invoke(d.controllerProvider, null, f)
              } else c.$$controller = d.controller;
              c.$$state = a, c.$$controllerAs = d.controllerAs, i[e] = c
            }))
          }), e.all(c).then(function () {
            return i.globals
          })
        }

        var n = d ? c : k(a.params.$$keys(), c), o = {$stateParams: n};
        i.resolve = l.resolve(a.resolve, o, i.resolve, a);
        var p = [i.resolve.then(function (a) {
          i.globals = a
        })];
        return g && p.push(g), e.all(p).then(m).then(function (a) {
          return i
        })
      }

      var A = e.reject(new Error("transition superseded")), C = e.reject(new Error("transition prevented")),
        D = e.reject(new Error("transition aborted")), E = e.reject(new Error("transition failed"));
      return x.locals = {resolve: null, globals: {$stateParams: {}}}, y = {
        params: {},
        current: x.self,
        $current: x,
        transition: null
      }, y.reload = function (a) {
        return y.transitionTo(y.current, n, {reload: a || !0, inherit: !1, notify: !0})
      }, y.go = function (a, b, c) {
        return y.transitionTo(a, b, R({inherit: !0, relative: y.$current}, c))
      }, y.transitionTo = function (b, c, f) {
        c = c || {}, f = R({location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1}, f || {});
        var g, j = y.$current, l = y.params, o = j.path, q = m(b, f.relative), r = c["#"];
        if (!L(q)) {
          var s = {to: b, toParams: c, options: f}, t = u(s, j.self, l, f);
          if (t) return t;
          if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !L(q)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");
            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
          }
        }
        if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
        if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
        c = q.params.$$values(c), b = q;
        var z = b.path, D = 0, F = z[D], G = x.locals, H = [];
        if (f.reload) {
          if (N(f.reload) || O(f.reload)) {
            if (O(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
            var I = f.reload === !0 ? o[0] : m(f.reload);
            if (f.reload && !I) throw new Error("No such reload state '" + (N(f.reload) ? f.reload : f.reload.name) + "'");
            for (; F && F === o[D] && F !== I;) G = H[D] = F.locals, D++, F = z[D]
          }
        } else for (; F && F === o[D] && F.ownParams.$$equals(c, l);) G = H[D] = F.locals, D++, F = z[D];
        if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, S(y.params, n), S(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
          $$avoidResync: !0,
          replace: "replace" === f.location
        }), p.update(!0)), y.transition = null, e.when(y.current);
        if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == y.transition && p.update(), C;
        for (var J = e.when(G), K = D; K < z.length; K++, F = z[K]) G = H[K] = d(G), J = v(F, c, F === b, J, G, f);
        var M = y.transition = J.then(function () {
          var d, e, g;
          if (y.transition !== M) return A;
          for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          for (d = D; d < z.length; d++) e = z[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          return y.transition !== M ? A : (y.$current = b, y.current = b.self, y.params = c, S(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
            $$avoidResync: !0,
            replace: "replace" === f.location
          }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), y.current)
        }, function (d) {
          return y.transition !== M ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d))
        });
        return M
      }, y.is = function (a, b, d) {
        d = R({relative: y.$current}, d || {});
        var e = m(a, d.relative);
        return L(e) ? y.$current !== e ? !1 : b ? j(e.params.$$values(b), n) : !0 : c
      }, y.includes = function (a, b, d) {
        if (d = R({relative: y.$current}, d || {}), N(a) && r(a)) {
          if (!s(a)) return !1;
          a = y.$current.name
        }
        var e = m(a, d.relative);
        return L(e) ? L(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : !0 : !1 : c
      }, y.href = function (a, b, d) {
        d = R({lossy: !0, inherit: !0, absolute: !1, relative: y.$current}, d || {});
        var e = m(a, d.relative);
        if (!L(e)) return null;
        d.inherit && (b = i(n, b || {}, y.$current, e));
        var f = e && d.lossy ? e.navigable : e;
        return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {absolute: d.absolute}) : null
      }, y.get = function (a, b) {
        if (0 === arguments.length) return o(g(z), function (a) {
          return z[a].self
        });
        var c = m(a, b || y.$current);
        return c && c.self ? c.self : null
      }, y
    }

    function w(a, b, c, d, e, f) {
      function g(a, b, c) {
        function d(b) {
          return "search" != a.params[b].location
        }

        var e = a.params.$$keys().filter(d), f = l.apply({}, [a.params].concat(e)), g = new U.ParamSet(f);
        return g.$$equals(b, c)
      }

      return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b)) ? !0 : void 0
    }

    var x, y, z = {}, A = {}, B = "abstract", C = {
      parent: function (a) {
        if (L(a.parent) && a.parent) return m(a.parent);
        var b = /^(.+)\.[^.]+$/.exec(a.name);
        return b ? m(b[1]) : x
      }, data: function (a) {
        return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data
      }, url: function (a) {
        var b = a.url, c = {params: a.params || {}};
        if (N(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
        if (!b || e.isMatcher(b)) return b;
        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
      }, navigable: function (a) {
        return a.url ? a : a.parent ? a.parent.navigable : null
      }, ownParams: function (a) {
        var b = a.url && a.url.params || new U.ParamSet;
        return Q(a.params || {}, function (a, c) {
          b[c] || (b[c] = new U.Param(c, null, a, "config"))
        }), b
      }, params: function (a) {
        var b = l(a.ownParams, a.ownParams.$$keys());
        return a.parent && a.parent.params ? R(a.parent.params.$$new(), b) : new U.ParamSet
      }, views: function (a) {
        var b = {};
        return Q(L(a.views) ? a.views : {"": a}, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
        }), b
      }, path: function (a) {
        return a.parent ? a.parent.path.concat(a) : []
      }, includes: function (a) {
        var b = a.parent ? R({}, a.parent.includes) : {};
        return b[a.name] = !0, b
      }, $delegates: {}
    };
    x = q({
      name: "",
      url: "^",
      views: null,
      "abstract": !0
    }), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
  }

  function w() {
    function a(a, b) {
      return {
        load: function (a, c) {
          var d, e = {template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {}};
          return c = R(e, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d
        }
      }
    }

    this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
  }

  function x() {
    var a = !1;
    this.useAnchorScroll = function () {
      a = !0
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        return c(function () {
          a[0].scrollIntoView()
        }, 0, !1)
      }
    }]
  }

  function y(a, c, d, e) {
    function f() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null
      } : function (a) {
        try {
          return c.get(a)
        } catch (b) {
          return null
        }
      }
    }

    function g(a, c) {
      function d(a) {
        return 1 === V && W >= 4 ? !!j.enabled(a) : 1 === V && W >= 2 ? !!j.enabled() : !!i
      }

      var e = {
        enter: function (a, b, c) {
          b.after(a), c()
        }, leave: function (a, b) {
          a.remove(), b()
        }
      };
      if (a.noanimation) return e;
      if (j) return {
        enter: function (a, c, f) {
          d(a) ? b.version.minor > 2 ? j.enter(a, null, c).then(f) : j.enter(a, null, c, f) : e.enter(a, c, f)
        }, leave: function (a, c) {
          d(a) ? b.version.minor > 2 ? j.leave(a).then(c) : j.leave(a, c) : e.leave(a, c)
        }
      };
      if (i) {
        var f = i && i(c, a);
        return {
          enter: function (a, b, c) {
            f.enter(a, null, b), c()
          }, leave: function (a, b) {
            f.leave(a), b()
          }
        }
      }
      return e
    }

    var h = f(), i = h("$animator"), j = h("$animate"), k = {
      restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function (c, f, h) {
        return function (c, f, i) {
          function j() {
            function a() {
              b && b.remove(), c && c.$destroy()
            }

            var b = l, c = n;
            c && (c._willBeDestroyed = !0), m ? (r.leave(m, function () {
              a(), l = null
            }), l = m) : (a(), l = null), m = null, n = null
          }

          function k(g) {
            var k, l = A(c, i, f, e), s = l && a.$current && a.$current.locals[l];
            if ((g || s !== o) && !c._willBeDestroyed) {
              k = c.$new(), o = a.$current.locals[l], k.$emit("$viewContentLoading", l);
              var t = h(k, function (a) {
                r.enter(a, f, function () {
                  n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                }), j()
              });
              m = t, n = k, n.$emit("$viewContentLoaded", l), n.$eval(p)
            }
          }

          var l, m, n, o, p = i.onload || "", q = i.autoscroll, r = g(i, c);
          c.$on("$stateChangeSuccess", function () {
            k(!1)
          }), k(!0)
        }
      }
    };
    return k
  }

  function z(a, b, c, d) {
    return {
      restrict: "ECA", priority: -400, compile: function (e) {
        var f = e.html();
        return function (e, g, h) {
          var i = c.$current, j = A(e, h, g, d), k = i && i.locals[j];
          if (k) {
            g.data("$uiView", {name: j, state: k.$$state}), g.html(k.$template ? k.$template : f);
            var l = a(g.contents());
            if (k.$$controller) {
              k.$scope = e, k.$element = g;
              var m = b(k.$$controller, k);
              k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
            }
            l(e)
          }
        }
      }
    }
  }

  function A(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
    return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
  }

  function B(a, b) {
    var c, d = a.match(/^\s*({[^}]*})\s*$/);
    if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
    return {state: c[1], paramExpr: c[3] || null}
  }

  function C(a) {
    var b = a.parent().inheritedData("$uiView");
    return b && b.state && b.state.name ? b.state : void 0
  }

  function D(a) {
    var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
      c = "FORM" === a[0].nodeName;
    return {
      attr: c ? "action" : b ? "xlink:href" : "href",
      isAnchor: "A" === a.prop("tagName").toUpperCase(),
      clickable: !c
    }
  }

  function E(a, b, c, d, e) {
    return function (f) {
      var g = f.which || f.button, h = e();
      if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
        var i = c(function () {
          b.go(h.state, h.params, h.options)
        });
        f.preventDefault();
        var j = d.isAnchor && !h.href ? 1 : 0;
        f.preventDefault = function () {
          j-- <= 0 && c.cancel(i)
        }
      }
    }
  }

  function F(a, b) {
    return {relative: C(a) || b.$current, inherit: !0}
  }

  function G(a, c) {
    return {
      restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (d, e, f, g) {
        var h = B(f.uiSref, a.current.name), i = {state: h.state, href: null, params: null}, j = D(e), k = g[1] || g[0];
        i.options = R(F(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
        var l = function (c) {
          c && (i.params = b.copy(c)), i.href = a.href(h.state, i.params, i.options), k && k.$$addStateInfo(h.state, i.params), null !== i.href && f.$set(j.attr, i.href)
        };
        h.paramExpr && (d.$watch(h.paramExpr, function (a) {
          a !== i.params && l(a)
        }, !0), i.params = b.copy(d.$eval(h.paramExpr))), l(), j.clickable && e.bind("click", E(e, a, c, j, function () {
          return i
        }))
      }
    }
  }

  function H(a, b) {
    return {
      restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (c, d, e, f) {
        function g(b) {
          l.state = b[0], l.params = b[1], l.options = b[2], l.href = a.href(l.state, l.params, l.options), i && i.$$addStateInfo(l.state, l.params), l.href && e.$set(h.attr, l.href)
        }

        var h = D(d), i = f[1] || f[0], j = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
          k = "[" + j.map(function (a) {
            return a || "null"
          }).join(", ") + "]", l = {state: null, params: null, options: null, href: null};
        c.$watch(k, g, !0), g(c.$eval(k)), h.clickable && d.bind("click", E(d, a, b, h, function () {
          return l
        }))
      }
    }
  }

  function I(a, b, c) {
    return {
      restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
        function g(b, c, e) {
          var f = a.get(b, C(d)), g = h(b, c);
          p.push({state: f || {name: b}, params: c, hash: g}), q[g] = e
        }

        function h(a, c) {
          if (!N(a)) throw new Error("state should be a string");
          return O(c) ? a + T(c) : (c = b.$eval(c), O(c) ? a + T(c) : a)
        }

        function i() {
          for (var a = 0; a < p.length; a++) l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n)
        }

        function j(a, b) {
          f(function () {
            a.addClass(b)
          })
        }

        function k(a, b) {
          a.removeClass(b)
        }

        function l(b, c) {
          return a.includes(b.name, c)
        }

        function m(b, c) {
          return a.is(b.name, c)
        }

        var n, o, p = [], q = {};
        n = c(e.uiSrefActiveEq || "", !1)(b);
        try {
          o = b.$eval(e.uiSrefActive)
        } catch (r) {
        }
        o = o || c(e.uiSrefActive || "", !1)(b), O(o) && Q(o, function (c, d) {
          if (N(c)) {
            var e = B(c, a.current.name);
            g(e.state, b.$eval(e.paramExpr), d)
          }
        }), this.$$addStateInfo = function (a, b) {
          O(o) && p.length > 0 || (g(a, b, o), i())
        }, b.$on("$stateChangeSuccess", i), i()
      }]
    }
  }

  function J(a) {
    var b = function (b, c) {
      return a.is(b, c)
    };
    return b.$stateful = !0, b
  }

  function K(a) {
    var b = function (b, c, d) {
      return a.includes(b, c, d)
    };
    return b.$stateful = !0, b
  }

  var L = b.isDefined, M = b.isFunction, N = b.isString, O = b.isObject, P = b.isArray, Q = b.forEach, R = b.extend,
    S = b.copy, T = b.toJson;
  b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
  var U;
  r.prototype.concat = function (a, b) {
    var c = {caseInsensitive: U.caseInsensitive(), strict: U.strictMode(), squash: U.defaultSquashPolicy()};
    return new r(this.sourcePath + a + this.sourceSearch, R(c, b), this)
  }, r.prototype.toString = function () {
    return this.source
  }, r.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("")
      }

      function c(a) {
        return a.replace(/\\-/g, "-")
      }

      var d = b(a).split(/-(?!\\)/), e = o(d, b);
      return o(e, c).reverse()
    }

    var d = this.regexp.exec(a);
    if (!d) return null;
    b = b || {};
    var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
    if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
    var l, m;
    for (e = 0; j > e; e++) {
      for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
      m && l.array === !0 && (m = c(m)), L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
    }
    for (; i > e; e++) {
      for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
      L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
    }
    return k
  }, r.prototype.parameters = function (a) {
    return L(a) ? this.params[a] || null : this.$$paramNames
  }, r.prototype.validates = function (a) {
    return this.params.$$validates(a)
  }, r.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    a = a || {};
    var c = this.segments, d = this.parameters(), e = this.params;
    if (!this.validates(a)) return null;
    var f, g = !1, h = c.length - 1, i = d.length, j = c[0];
    for (f = 0; i > f; f++) {
      var k = h > f, l = d[f], m = e[l], n = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), n),
        q = p ? m.squash : !1, r = m.type.encode(n);
      if (k) {
        var s = c[f + 1], t = f + 1 === h;
        if (q === !1) null != r && (j += P(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s; else if (q === !0) {
          var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
          j += s.match(u)[1]
        } else N(q) && (j += q + s);
        t && m.squash === !0 && "/" === j.slice(-1) && (j = j.slice(0, -1))
      } else {
        if (null == r || p && q !== !1) continue;
        if (P(r) || (r = [r]), 0 === r.length) continue;
        r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
      }
    }
    return j
  }, s.prototype.is = function (a, b) {
    return !0
  }, s.prototype.encode = function (a, b) {
    return a
  }, s.prototype.decode = function (a, b) {
    return a
  }, s.prototype.equals = function (a, b) {
    return a == b
  }, s.prototype.$subPattern = function () {
    var a = this.pattern.toString();
    return a.substr(1, a.length - 2)
  }, s.prototype.pattern = /.*/, s.prototype.toString = function () {
    return "{Type:" + this.name + "}"
  }, s.prototype.$normalize = function (a) {
    return this.is(a) ? a : this.decode(a)
  }, s.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments)
        }
      }

      function e(a) {
        return P(a) ? a : L(a) ? [a] : []
      }

      function f(a) {
        switch (a.length) {
          case 0:
            return c;
          case 1:
            return "auto" === b ? a[0] : a;
          default:
            return a
        }
      }

      function g(a) {
        return !a
      }

      function h(a, b) {
        return function (c) {
          if (P(c) && 0 === c.length) return c;
          c = e(c);
          var d = o(c, a);
          return b === !0 ? 0 === n(d, g).length : f(d)
        }
      }

      function i(a) {
        return function (b, c) {
          var d = e(b), f = e(c);
          if (d.length !== f.length) return !1;
          for (var g = 0; g < d.length; g++) if (!a(d[g], f[g])) return !1;
          return !0
        }
      }

      this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
    }

    if (!a) return this;
    if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
    return new d(this, a)
  }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {
  }]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
    return {}
  }).provider("$state", v), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x);
  var V = b.version.major, W = b.version.minor;
  y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), G.$inject = ["$state", "$timeout"], H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", G).directive("uiSrefActive", I).directive("uiSrefActiveEq", I).directive("uiState", H),
    J.$inject = ["$state"], K.$inject = ["$state"], b.module("ui.router.state").filter("isState", J).filter("includedByState", K)
}(window, window.angular);
