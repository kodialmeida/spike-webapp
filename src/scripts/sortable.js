/**
 * angular-ui-sortable - This directive allows you to jQueryUI Sortable.
 * @version v0.16.1 - 2016-12-16
 * @link http://angular-ui.github.com
 * @license MIT
 */

!function (a, b, c) {
  "use strict";
  b.module("ui.sortable", []).value("uiSortableConfig", {items: "> [ng-repeat],> [data-ng-repeat],> [x-ng-repeat]"}).directive("uiSortable", ["uiSortableConfig", "$timeout", "$log", function (a, d, e) {
    return {
      require: "?ngModel", scope: {ngModel: "=", uiSortable: "="}, link: function (f, g, h, i) {
        function j(a, b) {
          var c = "function" == typeof a, d = "function" == typeof b;
          return c && d ? function () {
            a.apply(this, arguments), b.apply(this, arguments)
          } : d ? b : a
        }

        function k(a) {
          var b = a.data("ui-sortable");
          return b && "object" == typeof b && "ui-sortable" === b.widgetFullName ? b : null
        }

        function l(b, c) {
          return B[b] ? ("stop" === b && (c = j(c, function () {
            f.$apply()
          }), c = j(c, t)), c = j(B[b], c)) : C[b] && (c = C[b](c)), c || "items" !== b && "ui-model-items" !== b || (c = a.items), c
        }

        function m(a, d, e) {
          function f(a, b) {
            b in z || (z[b] = null)
          }

          b.forEach(B, f);
          var g = null;
          if (d) {
            var h;
            b.forEach(d, function (d, e) {
              if (!(a && e in a)) {
                if (e in A) return void ("ui-floating" === e ? z[e] = "auto" : z[e] = l(e, c));
                h || (h = b.element.ui.sortable().options);
                var f = h[e];
                f = l(e, f), g || (g = {}), g[e] = f, z[e] = f
              }
            })
          }
          return b.forEach(a, function (a, b) {
            return b in A ? ("ui-floating" !== b || a !== !1 && a !== !0 || !e || (e.floating = a), void (z[b] = l(b, a))) : (a = l(b, a), g || (g = {}), g[b] = a, void (z[b] = a))
          }), g
        }

        function n(a) {
          var c = a.sortable("option", "placeholder");
          if (c && c.element && "function" == typeof c.element) {
            var d = c.element();
            return d = b.element(d)
          }
          return null
        }

        function o(a, b) {
          var c = z["ui-model-items"].replace(/[^,]*>/g, ""),
            d = a.find('[class="' + b.attr("class") + '"]:not(' + c + ")");
          return d
        }

        function p(a, b) {
          var c = a.sortable("option", "helper");
          return "clone" === c || "function" == typeof c && b.item.sortable.isCustomHelperUsed()
        }

        function q(a, b, c) {
          var d = null;
          return p(a, b) && "parent" === a.sortable("option", "appendTo") && (d = c.last()), d
        }

        function r(a) {
          return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }

        function s(a, b) {
          for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (d.element[0] === b[0]) return d
          }
        }

        function t(a, b) {
          b.item.sortable._destroy()
        }

        function u(a) {
          return a.parent().find(z["ui-model-items"]).index(a)
        }

        function v() {
          f.$watchCollection("ngModel", function () {
            d(function () {
              k(g) && g.sortable("refresh")
            }, 0, !1)
          }), B.start = function (a, d) {
            if ("auto" === z["ui-floating"]) {
              var e = d.item.siblings(), f = k(b.element(a.target));
              f.floating = r(e)
            }
            var h = u(d.item);
            d.item.sortable = {
              model: i.$modelValue[h],
              index: h,
              source: g,
              sourceList: d.item.parent(),
              sourceModel: i.$modelValue,
              cancel: function () {
                d.item.sortable._isCanceled = !0
              },
              isCanceled: function () {
                return d.item.sortable._isCanceled
              },
              isCustomHelperUsed: function () {
                return !!d.item.sortable._isCustomHelperUsed
              },
              _isCanceled: !1,
              _isCustomHelperUsed: d.item.sortable._isCustomHelperUsed,
              _destroy: function () {
                b.forEach(d.item.sortable, function (a, b) {
                  d.item.sortable[b] = c
                })
              },
              _connectedSortables: [],
              _getElementContext: function (a) {
                return s(this._connectedSortables, a)
              }
            }
          }, B.activate = function (a, b) {
            var c = b.item.sortable.source === g, d = c ? b.item.sortable.sourceList : g,
              e = {element: g, scope: f, isSourceContext: c, savedNodesOrigin: d};
            b.item.sortable._connectedSortables.push(e), y = d.contents();
            var h = n(g);
            if (h && h.length) {
              var i = o(g, h);
              y = y.not(i)
            }
          }, B.update = function (a, b) {
            if (!b.item.sortable.received) {
              b.item.sortable.dropindex = u(b.item);
              var c = b.item.closest("[ui-sortable], [data-ui-sortable], [x-ui-sortable]");
              b.item.sortable.droptarget = c, b.item.sortable.droptargetList = b.item.parent();
              var d = b.item.sortable._getElementContext(c);
              b.item.sortable.droptargetModel = d.scope.ngModel, g.sortable("cancel")
            }
            var e = !b.item.sortable.received && q(g, b, y);
            e && e.length && (y = y.not(e));
            var h = b.item.sortable._getElementContext(g);
            y.appendTo(h.savedNodesOrigin), b.item.sortable.received && (y = null), b.item.sortable.received && !b.item.sortable.isCanceled() && f.$apply(function () {
              i.$modelValue.splice(b.item.sortable.dropindex, 0, b.item.sortable.moved)
            })
          }, B.stop = function (a, c) {
            var d = "dropindex" in c.item.sortable && !c.item.sortable.isCanceled();
            if (d && !c.item.sortable.received) f.$apply(function () {
              i.$modelValue.splice(c.item.sortable.dropindex, 0, i.$modelValue.splice(c.item.sortable.index, 1)[0])
            }); else if (!d && !b.equals(g.contents().toArray(), y.toArray())) {
              var e = q(g, c, y);
              e && e.length && (y = y.not(e));
              var h = c.item.sortable._getElementContext(g);
              y.appendTo(h.savedNodesOrigin)
            }
            y = null
          }, B.receive = function (a, b) {
            b.item.sortable.received = !0
          }, B.remove = function (a, b) {
            "dropindex" in b.item.sortable || (g.sortable("cancel"), b.item.sortable.cancel()), b.item.sortable.isCanceled() || f.$apply(function () {
              b.item.sortable.moved = i.$modelValue.splice(b.item.sortable.index, 1)[0]
            })
          }, C.helper = function (a) {
            return a && "function" == typeof a ? function (d, e) {
              var f = e.sortable, h = u(e);
              e.sortable = {
                model: i.$modelValue[h],
                index: h,
                source: g,
                sourceList: e.parent(),
                sourceModel: i.$modelValue,
                _restore: function () {
                  b.forEach(e.sortable, function (a, b) {
                    e.sortable[b] = c
                  }), e.sortable = f
                }
              };
              var j = a.apply(this, arguments);
              return e.sortable._restore(), e.sortable._isCustomHelperUsed = e !== j, j
            } : a
          }, f.$watchCollection("uiSortable", function (a, b) {
            var c = k(g);
            if (c) {
              var d = m(a, b, c);
              d && g.sortable("option", d)
            }
          }, !0), m(z)
        }

        function w() {
          i ? v() : e.info("ui.sortable: ngModel not provided!", g), g.sortable(z)
        }

        function x() {
          return f.uiSortable && f.uiSortable.disabled ? !1 : (w(), x.cancelWatcher(), x.cancelWatcher = b.noop, !0)
        }

        var y, z = {}, A = {"ui-floating": c, "ui-model-items": a.items},
          B = {receive: null, remove: null, start: null, stop: null, update: null}, C = {helper: null};
        return b.extend(z, A, a, f.uiSortable), b.element.fn && b.element.fn.jquery ? (x.cancelWatcher = b.noop, void (x() || (x.cancelWatcher = f.$watch("uiSortable.disabled", x)))) : void e.error("ui.sortable: jQuery should be included before AngularJS!")
      }
    }
  }])
}(window, window.angular);
