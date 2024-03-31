/*! angular-base64-upload - v0.1.19
* https://github.com/adonespitogo/angular-base64-upload
* Copyright (c) Adones Pitogo <pitogo.adones@gmail.com> [March 13, 2016]
* Licensed MIT */

!function (a, b) {
  "use strict";
  a._arrayBufferToBase64 = function (b) {
    for (var c = "", d = new Uint8Array(b), e = d.byteLength, f = 0; e > f; f++) c += String.fromCharCode(d[f]);
    return a.btoa(c)
  };
  var c = a.angular.module("naif.base64", []);
  c.directive("baseSixtyFourInput", ["$window", "$q", function (a, b) {
    for (var c = {
      onChange: "&",
      onAfterValidate: "&",
      parser: "&"
    }, d = ["onabort", "onerror", "onloadstart", "onloadend", "onprogress", "onload"], e = d.length - 1; e >= 0; e--) {
      var f = d[e];
      c[f] = "&"
    }
    return {
      restrict: "A", require: "ngModel", scope: c, link: function (c, e, f, g) {
        function h() {
          for (var c = t.length - 1; c >= 0; c--) {
            var d = new a.FileReader, e = t[c], f = {}, g = [];
            f.filetype = e.type, f.filename = e.name, f.filesize = e.size, t[c].deferredObj = b.defer(), g.push(t[c].deferredObj.promise), b.all(g).then(n), k(d, e, f), d.readAsArrayBuffer(e)
          }
        }

        function i(a) {
          f.onChange && c.onChange()(a, t)
        }

        function j(a) {
          if (f.onAfterValidate) {
            for (var d = [], e = t.length - 1; e >= 0; e--) d.push(t[e].deferredObj.promise);
            b.all(d).then(function () {
              c.onAfterValidate()(a, u, t)
            })
          }
        }

        function k(a, b, e) {
          for (var g = d.length - 1; g >= 0; g--) {
            var h = d[g];
            f[h] && "onload" !== h && l(h, c[h], a, b, e)
          }
          a.onload = m(a, b, e)
        }

        function l(a, b, c, d, e) {
          c[a] = function (a) {
            b()(a, c, d, t, u, e)
          }
        }

        function m(d, e, g) {
          return function (h) {
            var i, j = h.target.result;
            g.base64 = a._arrayBufferToBase64(j), i = f.parser ? b.when(c.parser()(e, g)) : b.when(g), i.then(function (a) {
              u.push(a), e.deferredObj.resolve()
            }), f.onload && c.onload()(h, d, e, t, u, g)
          }
        }

        function n() {
          var a = f.multiple ? u : u[0];
          g.$setViewValue(a), q(a), r(a), o(a), p(a), s(a)
        }

        function o(a) {
          if (f.maxnum && f.multiple && a) {
            var b = a.length <= parseInt(f.maxnum);
            g.$setValidity("maxnum", b)
          }
          return a
        }

        function p(a) {
          if (f.minnum && f.multiple && a) {
            var b = a.length >= parseInt(f.minnum);
            g.$setValidity("minnum", b)
          }
          return a
        }

        function q(a) {
          var b = !0;
          if (f.maxsize && a) {
            var c = 1e3 * parseFloat(f.maxsize);
            if (f.multiple) for (var d = 0; d < a.length; d++) {
              var e = a[d];
              if (e.filesize > c) {
                b = !1;
                break
              }
            } else b = a.filesize <= c;
            g.$setValidity("maxsize", b)
          }
          return a
        }

        function r(a) {
          var b = !0, c = 1e3 * parseFloat(f.minsize);
          if (f.minsize && a) {
            if (f.multiple) for (var d = 0; d < a.length; d++) {
              var e = a[d];
              if (e.filesize < c) {
                b = !1;
                break
              }
            } else b = a.filesize >= c;
            g.$setValidity("minsize", b)
          }
          return a
        }

        function s(a) {
          var b, c, d, e = !0;
          if (f.accept && (c = f.accept.trim().replace(/[,\s]+/gi, "|").replace(/\./g, "\\.").replace(/\/\*/g, "/.*"), b = new RegExp(c)), f.accept && a) {
            if (f.multiple) for (var h = 0; h < a.length; h++) {
              var i = a[h];
              if (d = "." + i.filename.split(".").pop(), e = b.test(i.filetype) || b.test(d), !e) break
            } else d = "." + a.filename.split(".").pop(), e = b.test(a.filetype) || b.test(d);
            g.$setValidity("accept", e)
          }
          return a
        }

        if (g) {
          var t = [], u = [];
          e.on("change", function (a) {
            a.target.files.length && (u = [], u = angular.copy(u), t = a.target.files, h(), i(a), j(a))
          }), g.$isEmpty = function (a) {
            return !a || (angular.isArray(a) ? 0 === a.length : !a.base64)
          }, c._clearInput = function () {
            e[0].value = ""
          }, c.$watch(function () {
            return g.$viewValue
          }, function (a, b) {
            g.$isEmpty(b) || g.$isEmpty(a) && c._clearInput()
          })
        }
      }
    }
  }])
}(window);
//# sourceMappingURL=angular-base64-upload.min.js.map
