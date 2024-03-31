!function (e) {
  function n(r) {
    if (t[r]) return t[r].exports;
    var l = t[r] = {exports: {}, id: r, loaded: !1};
    return e[r].call(l.exports, l, l.exports, n), l.loaded = !0, l.exports
  }

  var t = {};
  return n.m = e, n.c = t, n.p = "/app/", n(0)
}({
  0: function (e, n, t) {
    t(409), window.chart = function () {
      function e(e) {
        z.css("width", window.innerWidth - 697 * e), B.css("height", window.innerHeight - 430 * e), U.css("height", window.innerWidth - 698 * e), P.css("height", window.innerHeight - 413 * e), P.css("width", window.innerWidth - 679 * e)
      }

      function n(n, l, o) {
        e(window.innerWidth < 1400 ? .81 : 1), R.options = n, t(n.rows), r(n.columns), i(n.columns), c(n.rows, n.columns), h(l, o)
      }

      function t(e, n) {
        for (var t = 0; t < e; t++) {
          var r = document.createElement("tr");
          n ? r.setAttribute("data-row", t + n) : r.setAttribute("data-row", t);
          for (var l = 0; l < 7; l++) 0 === l ? r.appendChild(o('<div class="empty-cell"></div>', null)) : 6 === l ? n ? r.appendChild(o(t + 1 + n, null)) : r.appendChild(o(t + 1, null)) : r.appendChild(o(null, null));
          O.appendChild(r)
        }
      }

      function r(e) {
        for (var n = 0; n < e; n++) {
          var t = document.createElement("tr");
          l(t), V.appendChild(t)
        }
      }

      function l(e) {
        for (var n = 0; n < 2; n++) 0 === n ? e.appendChild(o('<div class="empty-cell"></div>', null)) : e.appendChild(o(null, null))
      }

      function i(e) {
        for (var n = 0; n < e; n++) s(n + 1)
      }

      function c(e, n, t) {
        for (var r = 0; r < e; r++) d(r, n, t)
      }

      function o(e, n) {
        var t = document.createElement("td");
        if (e && (t.innerHTML = e), n) for (var r in n) t.setAttribute(r, n[r]);
        return t
      }

      function d(e, n, t) {
        var r = document.createElement("tr");
        t ? r.setAttribute("data-row", e + t) : r.setAttribute("data-row", e);
        for (var l = 0; l < n; l++) {
          var i = o('<div class="empty-cell"></div>', {"data-column": l});
          i.onmouseover = u, i.onmouseout = f, r.appendChild(i)
        }
        S.appendChild(r)
      }

      function a(e) {
        for (var n = 0; n < S.children.length; n++) {
          var t = o('<div class="empty-cell"></div>', {"data-column": e});
          t.onmouseover = u, t.onmouseout = f, S.children[n].appendChild(t)
        }
      }

      function s(e) {
        var n = document.createElement("th");
        n.innerHTML = e, q.children[0].appendChild(n)
      }

      function h(e, n) {
        if (e.cAE_Matrix) {
          for (var t = JSON.parse(e.cAE_Matrix), r = 0, l = 0; l < n.causes.length; l++) t.causes.splice(n.causes[l] - r, 1), t.actions.splice(n.causes[l] - r, 1), r++;
          for (var i = 0, l = 0; l < n.effects.length; l++) {
            t.effects.splice(n.effects[l] - i, 1);
            for (var c = 0; c < t.actions.length; c++) t.actions[c].splice(n.effects[l] - i, 1);
            i++
          }
          for (var l = 0; l < t.causes.length; l++) C(t.causes[l]);
          for (var l = 0; l < t.effects.length; l++) y(t.effects[l]);
          for (var l = 0; l < S.children.length; l++) for (var o = S.children[l], c = 0; c < o.children.length; c++) {
            var e = o.children[c].children[0];
            "DIV" !== e.nodeName && (e.checked = t.actions[l][c])
          }
        }
      }

      function u(e) {
        for (var n = v(e), t = 0; t < n.parentElement.children.length; t++) n.parentElement.children[t].style.backgroundColor = R.options.highlightColour;
        var r = parseInt(n.parentElement.getAttribute("data-row"));
        O.children[r].style.backgroundColor = R.options.highlightColour;
        for (var l = parseInt(n.getAttribute("data-column")), i = 0; i < S.children.length; i++) S.children[i].children[l].style.backgroundColor = R.options.highlightColour;
        V.children[l].style.backgroundColor = R.options.highlightColour, "INPUT" === n.children[0].nodeName && (n.title = A(R.causes[r], R.effects[l]))
      }

      function f(e) {
        for (var n = v(e), t = 0; t < n.parentElement.children.length; t++) n.parentElement.children[t].style.backgroundColor = "";
        var r = parseInt(n.parentElement.getAttribute("data-row"));
        R.selectedCause === r ? O.children[r].style.backgroundColor = "#03EBFF" : O.children[r].style.backgroundColor = "";
        for (var l = parseInt(n.getAttribute("data-column")), i = 0; i < S.children.length; i++) S.children[i].children[l].style.backgroundColor = "";
        R.selectedEffect === l ? V.children[l].style.backgroundColor = "#D903FF" : V.children[l].style.backgroundColor = "", n.title = ""
      }

      function p(e) {
        "TD" === e.target.nodeName && e.target.children.length && "INPUT" === e.target.children[0].nodeName && (e.target.children[0].checked = !e.target.children[0].checked)
      }

      function g(e) {
        null !== R.selectedCause && (O.children[R.selectedCause].style.backgroundColor = "", O.children[R.selectedCause].style.fontWeight = 100);
        var n = parseInt(e.target.parentElement.getAttribute("data-row"));
        R.selectedCause === n ? R.selectedCause = null : (e.target.parentElement.style.backgroundColor = "#03EBFF", e.target.parentElement.style.fontWeight = "bold", R.selectedCause = n)
      }

      function m(e) {
        null !== R.selectedEffect && (V.children[R.selectedEffect].style.backgroundColor = "", V.children[R.selectedEffect].style.fontWeight = 100);
        var n = parseInt(e.target.parentElement.getAttribute("data-row"));
        R.selectedEffect === n ? R.selectedEffect = null : (e.target.parentElement.style.backgroundColor = "#D903FF", e.target.parentElement.style.fontWeight = "bold", R.selectedEffect = n)
      }

      function v(e) {
        return "INPUT" === e.target.nodeName || "DIV" === e.target.nodeName ? e.target.parentElement : e.target
      }

      function C(e) {
        var n = {description: e.description, func: e.func, inputs: e.inputs.slice()},
          t = document.createElement("tr");
        t.onclick = g, t.style.cursor = "pointer";
        var r = n.inputs.map(function (e) {
          return e.nodeId
        }).join("\n"), l = n.inputs.map(function (e) {
          return e.operator
        }).join("\n"), i = n.inputs.map(function (e) {
          return e.value
        }).join("\n"), c = n.inputs.map(function (e) {
          return e.units
        }).join("\n");
        t.appendChild(o(r)), t.appendChild(o(Q[n.func])), t.appendChild(o(l)), t.appendChild(o(i)), t.appendChild(o(c)), t.appendChild(o(n.description)), t.appendChild(o(R.causes.length + 1)), O.children.length !== R.causes.length ? O.replaceChild(t, O.children[R.causes.length]) : (O.appendChild(t), d(R.causes.length, V.children.length)), n.row = R.causes.length, t.setAttribute("data-row", n.row), R.causes.push(n), I(n.row), T(n)
      }

      function w(e) {
        var n = O.children[e.row], t = e.inputs.map(function (e) {
          return e.nodeId
        }).join("\n"), r = e.inputs.map(function (e) {
          return e.operator
        }).join("\n"), l = e.inputs.map(function (e) {
          return e.value
        }).join("\n"), i = e.inputs.map(function (e) {
          return e.units
        }).join("\n");
        n.children[0].innerHTML = t, n.children[1].innerHTML = e.func, n.children[2].innerHTML = r, n.children[3].innerHTML = l, n.children[4].innerHTML = i, n.children[5].innerHTML = e.description;
        for (var c = 0; c < R.causes.length; c++) R.causes[c].row === e.row && (R.causes[c] = {
          description: e.description,
          func: e.func,
          inputs: e.inputs.slice(),
          row: e.row
        });
        T(e)
      }

      function b(e) {
        O.removeChild(O.children[e.row]), S.removeChild(S.children[e.row]), R.causes.splice(e.row, 1);
        for (var n = 0; n < O.children.length; n++) O.children[n].children[6].innerHTML = n + 1, O.children[n].setAttribute("data-row", n), S.children[n].setAttribute("data-row", n), R.causes[n] && (R.causes[n].row = n);
        if (R.selectedCause = null, W - O.children.length > 0) {
          var r = W - O.children.length, l = O.children.length;
          t(r, l), c(r, V.children.length, l)
        }
      }

      function y(e) {
        var n = document.createElement("tr");
        n.onclick = m, n.style.cursor = "pointer", n.appendChild(o(e.opcRequest.objectId + "." + e.action)), n.appendChild(o(e.description)), V.children.length !== R.effects.length ? V.replaceChild(n, V.children[R.effects.length]) : (V.appendChild(n), s(R.effects.length + 1), a(R.effects.length)), e.opcRequest.arguments.length && (n.children[0].title = e.opcRequest.arguments[0].value), e.row = R.effects.length, n.setAttribute("data-row", e.row), R.effects.push(e), N(e.row)
      }

      function E(e) {
        var n = V.children[e.row];
        n.children[1].innerHTML = e.description;
        for (var t = 0; t < R.effects.length; t++) R.effects[t].row === e.row && (R.effects[t] = e);
        e.opcRequest.arguments.length && (V.children[e.row].children[0].title = e.opcRequest.arguments[0].value)
      }

      function k(e) {
        if (V.removeChild(V.children[e.row]), V.children.length < 40) {
          var n = document.createElement("tr");
          l(n), V.appendChild(n)
        }
        R.effects.splice(e.row, 1);
        for (var t = 0; t < S.children.length; t++) if (S.children[t].removeChild(S.children[t].children[e.row]), !(S.children[t].children.length > 40)) {
          var r = o('<div class="empty-cell"></div>', {"data-column": 39});
          r.onmouseover = u, r.onmouseout = f, S.children[t].appendChild(r)
        }
        for (var t = 0; t < V.children.length; t++) V.children[t].setAttribute("data-row", t), R.effects[t] && (R.effects[t].row = t);
        for (var t = 0; t < S.children.length; t++) for (var i = 0; i < S.children[t].children.length; i++) S.children[t].children[i].setAttribute("data-column", i);
        R.selectedEffect = null
      }

      function T(e) {
        1 === e.inputs.length ? S.children[e.row].style.height = "29px" : 2 === e.inputs.length ? S.children[e.row].style.height = "35px" : 3 === e.inputs.length && (S.children[e.row].style.height = "51px")
      }

      function A(e, n) {
        return e.description + " => " + n.description
      }

      function I(e) {
        for (var n = S.children[e], t = 0; t < R.effects.length; t++) {
          if ("DIV" !== n.children[t].children[0].nodeName) return;
          var r = o('<input type="checkbox"/>', {"data-column": t});
          r.onmouseover = u, r.onmouseout = f, r.onclick = p, n.replaceChild(r, n.children[t])
        }
      }

      function N(e) {
        for (var n = 0; n < R.causes.length; n++) {
          if ("DIV" !== S.children[n].children[e].children[0].nodeName) return;
          var t = o('<input type="checkbox"/>', {"data-column": e});
          t.onmouseover = u, t.onmouseout = f, t.onclick = p, S.children[n].replaceChild(t, S.children[n].children[e])
        }
      }

      function x() {
        for (var e = [[]], n = 0; n < S.children.length; n++) for (var t = S.children[n], r = 0; r < t.children.length; r++) {
          var l = t.children[r].children[0];
          e[n] || (e[n] = []), "DIV" === l.nodeName ? e[n][r] = !1 : e[n][r] = l.checked
        }
        return JSON.stringify({causes: R.causes, effects: R.effects, actions: e})
      }

      function H() {
        for (; O.firstChild;) O.removeChild(O.firstChild);
        for (; V.firstChild;) V.removeChild(V.firstChild);
        for (; S.firstChild;) S.removeChild(S.firstChild);
        for (var e = q.children[0].children.length; e-- && e > 6;) q.children[0].removeChild(q.children[0].children[e]);
        R.causes = [], R.effects = [], R.selectedCause = null, R.selectedEffect = null, F = null
      }

      var L = sessionStorage.getItem("capturingScreen");
      if (!L && parent.jQuery) {
        if ("undefined" == typeof j) var M = document.getElementsByTagName("body")[0], j = function (e) {
          return parent.jQuery(e, M)
        }, D = j;
        var F = null, W = 20,
          R = {options: null, causes: [], effects: [], selectedCause: null, selectedEffect: null},
          q = D("#causeHeader table thead")[0], O = D("#causes table tbody")[0],
          V = D("#effectTable tbody")[0], S = D("#actions table tbody")[0], B = D("#causes"),
          P = D("#actions"), U = D("#effectTable tbody"), z = D("#causeHeader"), J = 0;
        P.on("scroll", function (e) {
          J !== D(this).scrollTop() ? (B.scrollTop(D(this).scrollTop()), J = D(this).scrollTop()) : (z.scrollLeft(D(this).scrollLeft()), U.scrollTop(D(this).scrollLeft()))
        });
        var Q = Object.freeze({Null: "", AND: "AND", OR: "OR"});
        return {
          cell: F,
          resize: e,
          init: n,
          addCause: C,
          editCause: w,
          removeCause: b,
          addEffect: y,
          editEffect: E,
          removeEffect: k,
          matrix: R,
          exportMatrix: x,
          clear: H
        }
      }
    }()
  }, 409: function (e, n) {
  }
});
//# sourceMappingURL=causeAndEffect.f1510285d536a4c35365.bundle.js.map