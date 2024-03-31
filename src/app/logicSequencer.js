!function (e) {
  function n(r) {
    if (t[r]) return t[r].exports;
    var d = t[r] = {exports: {}, id: r, loaded: !1};
    return e[r].call(d.exports, d, d.exports, n), d.loaded = !0, d.exports
  }

  var t = {};
  return n.m = e, n.c = t, n.p = "/app/", n(0)
}({
  0: function (e, n, t) {
    t(411), window.sequencer = function () {
      function e() {
        for (var e = g("#moduleTable tr"), n = g("#commandHeader th"), t = 0; t < e.length; t++) e[t].children[0].innerHTML = "", e[t].style.backgroundColor = "", g(n[t]).css({
          "min-width": 20,
          width: 20
        }), g(e[t].children[0]).height(32);
        for (var r = g("#stepTable tr"), t = 0; t < r.length; t++) r[t].children[0].innerHTML = "", r[t].children[1].innerHTML = "", r[t].children[2].innerHTML = "", r[t].children[3].innerHTML = "", r[t].children[4].innerHTML = "", r[t].style.backgroundColor = "";
        for (var d = g("#commandTable tr"), t = 0; t < d.length; t++) for (var l = 0; l < d[t].children.length; l++) d[t].children[l].innerHTML = "", g(d[t].children[l]).width(20);
        W.selectedColumn = null, W.selectedCommand = null, W.selectedRow = null
      }

      function n() {
        for (var e = 0; e < W.sequence.columns.length; e++) {
          W.addModule(W.sequence.columns[e]);
          for (var n = 0; n < W.sequence.columns[e].commands.length; n++) W.addCommand(W.sequence.columns[e].commands[n], !0)
        }
        for (var e = 0; e < W.sequence.rows.length; e++) W.addStep(W.sequence.rows[e])
      }

      function t(e) {
        void 0 === e.index && (e.index = W.sequence.columns.length, W.sequence.columns[e.index] = e);
        var n = g(".rotatedTable table tbody td")[e.index], t = document.createElement("td");
        t.innerHTML = e.name, g(n).replaceWith(t)
      }

      function r() {
        var e = s(W.selectedColumn.parentElement), n = document.createElement("tr"),
          t = document.createElement("td");
        n.appendChild(t);
        var r = g(W.selectedColumn.parentElement), a = W.selectedColumn.parentElement.parentElement;
        g(r).remove(), a.appendChild(n), W.sequence.columns.splice(e, 1), W.selectedColumn = null, l(g("#commandHeader thead tr"), e), o(g("#commandTable tbody"), e), c(g("#commandTable tbody")), d(e)
      }

      function d(e) {
        for (var n = 0; n < W.sequence.columns.length; n++) if (W.sequence.columns[n].index > e) {
          W.sequence.columns[n].index -= 1;
          for (var t = 0; t < W.sequence.columns[n].commands.length; t++) W.sequence.columns[n].commands[t] && (W.sequence.columns[n].commands[t].column -= 1)
        }
      }

      function l(e, n) {
        var t = e.children()[n];
        g(t).remove();
        for (var r = e.children(), d = 0; d < r.length; d++) d < n || (r[d].innerHTML = d + 1);
        t = document.createElement("th"), t.innerHTML = "42", e.append(t)
      }

      function o(e, n) {
        for (var t = e.children(), r = 0; r < t.length; r++) {
          var d = t[r].children[n];
          g(d).remove()
        }
      }

      function c(e) {
        for (var n = e.children(), t = 0; t < n.length; t++) {
          var r = document.createElement("td");
          n[t].appendChild(r)
        }
      }

      function a(e, n) {
        if (e) {
          var t = k.children()[e.row], r = t.children[e.column];
          r.innerHTML = e.name;
          var d = g(r).width(), l = g(r).outerWidth();
          g(g("#commandHeader th")[e.column]).css({
            "min-width": d,
            width: d
          }), g(g("#moduleTable td")[e.column]).height(l), n || (W.sequence.columns[e.column].commands[e.row] = e)
        }
      }

      function i(e, n) {
        W.sequence.columns[n].commands[e] = null;
        var t = k.children()[e], r = t.children[n];
        r.innerHTML = "";
        var d = g(r).width(), l = g(r).outerWidth();
        g(g("#commandHeader th")[n]).css({"min-width": d, width: d}), g(g("#moduleTable td")[n]).height(l)
      }

      function m(e) {
        void 0 === e.index && (e.index = W.sequence.rows.length, W.sequence.rows[e.index] = e);
        var n = g("#stepTable tbody").children()[e.index];
        n.children[0].innerHTML = "S" + (e.index + 1), n.children[1].innerHTML = e.step.description, n.children[2].innerHTML = "T" + (e.index + 1), n.children[3].innerHTML = e.transition.description, n.children[4].innerHTML = e.transition.interval
      }

      function u() {
        if (W.selectedRow) {
          var e = W.selectedRow.parentElement.children, n = s(W.selectedRow),
            t = document.createElement("tr");
          t.appendChild(document.createElement("td")), t.appendChild(document.createElement("td")), t.appendChild(document.createElement("td")), t.appendChild(document.createElement("td")), t.appendChild(document.createElement("td")), t.appendChild(document.createElement("td")), W.selectedRow.parentElement.appendChild(t), g(W.selectedRow).remove();
          var r = g("#commandTable tr")[n];
          t = document.createElement("tr");
          for (var d = 0; d < 40; d++) t.appendChild(document.createElement("td"));
          g("#commandTable tbody").append(t), g(r).remove();
          for (var d = 0; d < e.length; d++) e[d].children[5].innerHTML = d + 1;
          W.sequence.rows.splice(n, 1), h(n), f(), p(n)
        }
      }

      function s(e) {
        for (var n = e.parentElement, t = 0; t < n.children.length; t++) if (n.children[t] === e) return t;
        return -1
      }

      function h(e) {
        for (var n = 0; n < W.sequence.columns.length; n++) {
          W.sequence.columns[n].commands.splice(e, 1);
          for (var t = 0; t < W.sequence.columns[n].commands.length; t++) W.sequence.columns[n].commands[t] && W.sequence.columns[n].commands[t].row > e && (W.sequence.columns[n].commands[t].row -= 1)
        }
      }

      function f() {
        for (var e = g("#commandTable tr")[0].children, n = 0; n < e.length; n++) {
          var t = g(e[n]).width(), r = g(e[n]).outerWidth();
          g(g("#commandHeader th")[n]).css({"min-width": t, width: t}), g(g("#moduleTable td")[n]).height(r)
        }
      }

      function p(e) {
        for (var n = g("#stepTable tr"), t = 0; t < W.sequence.rows.length; t++) t < e || (W.sequence.rows[t].index -= 1, n[t].children[0].innerHTML = "S" + (W.sequence.rows[t].index + 1), n[t].children[2].innerHTML = "T" + (W.sequence.rows[t].index + 1))
      }

      var v = sessionStorage.getItem("capturingScreen");
      if (!v && parent.jQuery) {
        if ("undefined" == typeof T) var b = document.getElementsByTagName("body")[0], T = function (e) {
          return parent.jQuery(e, b)
        }, g = T;
        var w = g("#sequencer"), q = w.find(".fixedTable-body div"), C = w.find(".fixedTable-sidebar table"),
          E = w.find(".fixedTable-header .left table"), H = w.find(".content-left table:nth-child(2)");
        g(q).scroll(function () {
          g(C).css("margin-top", -g(q).scrollTop());
          var e = g(q).scrollLeft();
          return g(E).css("margin-left", 0 == e ? -2 : -e), g(H).css("margin-top", 0 == e ? -2 : -e)
        });
        for (var y = w.find(".fixedTable-sidebar table tbody"), x = 0; x < 40; x++) {
          for (var M = document.createElement("tr"), L = 0; L < 6; L++) {
            var R = document.createElement("td");
            5 === L && (R.innerHTML = x + 1), M.appendChild(R)
          }
          y.append(M)
        }
        for (var k = w.find(".fixedTable-body table tbody"), x = 0; x < 40; x++) {
          for (var M = document.createElement("tr"), L = 0; L < 40; L++) {
            var R = document.createElement("td");
            M.appendChild(R)
          }
          k.append(M)
        }
        for (var S = w.find(".rotatedTable table tbody"), x = 0; x < 40; x++) {
          var M = document.createElement("tr"), R = document.createElement("td");
          M.appendChild(R), S.append(M)
        }
        w.find(".rotatedTable table tbody tr").on("click", function (e) {
          var n = null;
          n = "TR" === e.target.nodeName ? e.target.children[0] : e.target;
          for (var t = g(".rotatedTable table tbody td"), r = 0; r < t.length; r++) t[r].style.backgroundColor = "";
          W.selectedColumn = null, W.selectedColumn !== n && n.innerHTML && (n.style.backgroundColor = "#D903FF", W.selectedColumn = n)
        }), w.find(".fixedTable-sidebar table tbody tr").on("click", function (e) {
          var n = null;
          if (n = "TD" === e.target.nodeName ? e.target.parentElement : e.target, W.selectedRow && (W.selectedRow.style.backgroundColor = ""), W.selectedRow && W.selectedRow === n) W.selectedRow = null; else if (n.children[0].innerHTML) {
            n.style.backgroundColor = "aquamarine", W.selectedRow = n;
            var t = s(n);
            W.selectedRow.data = W.sequence.rows[t]
          }
        }), w.find(".fixedTable-body table tbody tr").on("dblclick", function (e) {
          var n = s(e.target.parentElement), t = s(e.target), r = w.find(".rotatedTable table tbody td")[t],
            d = r.innerHTML;
          if (d) {
            var l = W.sequence.columns[t], o = l.commands[n];
            W.parent.selectAction(d, l.id, l.type, n, t, o)
          }
        });
        var W = {
          processCell: null,
          sequence: null,
          selectedColumn: null,
          selectedCommand: null,
          selectedRow: null,
          clear: e,
          load: n,
          addModule: t,
          removeModule: r,
          addCommand: a,
          removeCommand: i,
          addStep: m,
          removeStep: u
        };
        return W
      }
    }()
  }, 411: function (e, n) {
  }
});
//# sourceMappingURL=logicSequencer.f1510285d536a4c35365.bundle.js.map
