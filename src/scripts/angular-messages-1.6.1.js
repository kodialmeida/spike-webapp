/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, l) {
  'use strict';

  function w() {
    return ["$animate", function (t) {
      return {
        restrict: "AE",
        transclude: "element",
        priority: 1,
        terminal: !0,
        require: "^^ngMessages",
        link: function (u, n, a, c, f) {
          var e = n[0], d, r = a.ngMessage || a.when;
          a = a.ngMessageExp || a.whenExp;
          var k = function (a) {
            d = a ? p(a) ? a : a.split(/[\s,]+/) : null;
            c.reRender()
          };
          a ? (k(u.$eval(a)), u.$watchCollection(a, k)) : k(r);
          var g, s;
          c.register(e, s = {
            test: function (a) {
              var m = d;
              a = m ? p(m) ? 0 <= m.indexOf(a) : m.hasOwnProperty(a) : void 0;
              return a
            }, attach: function () {
              g || f(function (a,
                               m) {
                t.enter(a, null, n);
                g = a;
                var d = g.$$attachId = c.getAttachId();
                g.on("$destroy", function () {
                  g && g.$$attachId === d && (c.deregister(e), s.detach());
                  m.$destroy()
                })
              })
            }, detach: function () {
              if (g) {
                var a = g;
                g = null;
                t.leave(a)
              }
            }
          })
        }
      }
    }]
  }

  var v, p, q, x;
  l.module("ngMessages", [], function () {
    v = l.forEach;
    p = l.isArray;
    q = l.isString;
    x = l.element
  }).directive("ngMessages", ["$animate", function (t) {
    function u(a, c) {
      return q(c) && 0 === c.length || n(a.$eval(c))
    }

    function n(a) {
      return q(a) ? a.length : !!a
    }

    return {
      require: "ngMessages", restrict: "AE", controller: ["$element",
        "$scope", "$attrs", function (a, c, f) {
          function e(a, c) {
            for (var b = c, d = []; b && b !== a;) {
              var h = b.$$ngMessageNode;
              if (h && h.length) return g[h];
              b.childNodes.length && -1 === d.indexOf(b) ? (d.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, d.push(b))
            }
          }

          var d = this, r = 0, k = 0;
          this.getAttachId = function () {
            return k++
          };
          var g = this.messages = {}, s, l;
          this.render = function (m) {
            m = m || {};
            s = !1;
            l = m;
            for (var g = u(c, f.ngMessagesMultiple) || u(c, f.multiple), b = [], e = {}, h = d.head, r = !1, k = 0; null != h;) {
              k++;
              var q = h.message, p = !1;
              r || v(m, function (a, b) {
                !p && n(a) && q.test(b) && !e[b] && (p = e[b] = !0, q.attach())
              });
              p ? r = !g : b.push(q);
              h = h.next
            }
            v(b, function (a) {
              a.detach()
            });
            b.length !== k ? t.setClass(a, "ng-active", "ng-inactive") : t.setClass(a, "ng-inactive", "ng-active")
          };
          c.$watchCollection(f.ngMessages || f["for"], d.render);
          a.on("$destroy", function () {
            v(g, function (a) {
              a.message.detach()
            })
          });
          this.reRender = function () {
            s || (s = !0, c.$evalAsync(function () {
              s && l && d.render(l)
            }))
          };
          this.register = function (c, f) {
            var b = r.toString();
            g[b] = {message: f};
            var k = a[0], h = g[b];
            d.head ? (k = e(k, c)) ? (h.next = k.next, k.next = h) : (h.next = d.head, d.head = h) : d.head = h;
            c.$$ngMessageNode = b;
            r++;
            d.reRender()
          };
          this.deregister = function (c) {
            var f = c.$$ngMessageNode;
            delete c.$$ngMessageNode;
            var b = g[f];
            (c = e(a[0], c)) ? c.next = b.next : d.head = b.next;
            delete g[f];
            d.reRender()
          }
        }]
    }
  }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (l, p, n) {
    function a(a, f) {
      var e = n.$$createComment ? n.$$createComment("ngMessagesInclude", f) : p[0].createComment(" ngMessagesInclude: " +
        f + " "), e = x(e);
      a.after(e);
      a.remove()
    }

    return {
      restrict: "AE", require: "^^ngMessages", link: function (c, f, e) {
        var d = e.ngMessagesInclude || e.src;
        l(d).then(function (e) {
          c.$$destroyed || (q(e) && !e.trim() ? a(f, d) : n(e)(c, function (c) {
            f.after(c);
            a(f, d)
          }))
        })
      }
    }
  }]).directive("ngMessage", w()).directive("ngMessageExp", w())
})(window, window.angular);
//# sourceMappingURL=angular-messages.min.js.map
