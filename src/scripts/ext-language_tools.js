ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"], function (e, t, i) {
  "use strict";
  var n = e("./lib/oop"), o = e("./lib/event_emitter").EventEmitter, r = e("./lib/lang"), s = e("./range").Range,
    a = e("./anchor").Anchor, c = e("./keyboard/hash_handler").HashHandler, h = e("./tokenizer").Tokenizer,
    l = s.comparePoints, p = function () {
      this.snippetMap = {}, this.snippetNameMap = {}
    };
  (function () {
    n.implement(this, o), this.getTokenizer = function () {
      function e(e, t, i) {
        return e = e.substr(1), /^\d+$/.test(e) && !i.inFormatString ? [{tabstopId: parseInt(e, 10)}] : [{text: e}]
      }

      function t(e) {
        return "(?:[^\\\\" + e + "]|\\\\.)"
      }

      return p.$tokenizer = new h({
        start: [{
          regex: /:/, onMatch: function (e, t, i) {
            return i.length && i[0].expectIf ? (i[0].expectIf = !1, i[0].elseBranch = i[0], [i[0]]) : ":"
          }
        }, {
          regex: /\\./, onMatch: function (e, t, i) {
            var n = e[1];
            return "}" == n && i.length ? e = n : -1 != "`$\\".indexOf(n) ? e = n : i.inFormatString && ("n" == n ? e = "\n" : "t" == n ? e = "\n" : -1 != "ulULE".indexOf(n) && (e = {
              changeCase: n,
              local: n > "a"
            })), [e]
          }
        }, {
          regex: /}/, onMatch: function (e, t, i) {
            return [i.length ? i.shift() : e]
          }
        }, {regex: /\$(?:\d+|\w+)/, onMatch: e}, {
          regex: /\$\{[\dA-Z_a-z]+/, onMatch: function (t, i, n) {
            var o = e(t.substr(1), i, n);
            return n.unshift(o[0]), o
          }, next: "snippetVar"
        }, {regex: /\n/, token: "newline", merge: !1}],
        snippetVar: [{
          regex: "\\|" + t("\\|") + "*\\|", onMatch: function (e, t, i) {
            i[0].choices = e.slice(1, -1).split(",")
          }, next: "start"
        }, {
          regex: "/(" + t("/") + "+)/(?:(" + t("/") + "*)/)(\\w*):?", onMatch: function (e, t, i) {
            var n = i[0];
            return n.fmtString = e, e = this.splitRegex.exec(e), n.guard = e[1], n.fmt = e[2], n.flag = e[3], ""
          }, next: "start"
        }, {
          regex: "`" + t("`") + "*`", onMatch: function (e, t, i) {
            return i[0].code = e.splice(1, -1), ""
          }, next: "start"
        }, {
          regex: "\\?", onMatch: function (e, t, i) {
            i[0] && (i[0].expectIf = !0)
          }, next: "start"
        }, {regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "start"}],
        formatString: [{regex: "/(" + t("/") + "+)/", token: "regex"}, {
          regex: "", onMatch: function (e, t, i) {
            i.inFormatString = !0
          }, next: "start"
        }]
      }), p.prototype.getTokenizer = function () {
        return p.$tokenizer
      }, p.$tokenizer
    }, this.tokenizeTmSnippet = function (e, t) {
      return this.getTokenizer().getLineTokens(e, t).tokens.map(function (e) {
        return e.value || e
      })
    }, this.$getDefaultValue = function (e, t) {
      if (/^[A-Z]\d+$/.test(t)) {
        var i = t.substr(1);
        return (this.variables[t[0] + "__"] || {})[i]
      }
      if (/^\d+$/.test(t)) return (this.variables.__ || {})[t];
      if (t = t.replace(/^TM_/, ""), e) {
        var n = e.session;
        switch (t) {
          case "CURRENT_WORD":
            var o = n.getWordRange();
          case "SELECTION":
          case "SELECTED_TEXT":
            return n.getTextRange(o);
          case "CURRENT_LINE":
            return n.getLine(e.getCursorPosition().row);
          case "PREV_LINE":
            return n.getLine(e.getCursorPosition().row - 1);
          case "LINE_INDEX":
            return e.getCursorPosition().column;
          case "LINE_NUMBER":
            return e.getCursorPosition().row + 1;
          case "SOFT_TABS":
            return n.getUseSoftTabs() ? "YES" : "NO";
          case "TAB_SIZE":
            return n.getTabSize();
          case "FILENAME":
          case "FILEPATH":
            return "";
          case "FULLNAME":
            return "Ace"
        }
      }
    }, this.variables = {}, this.getVariableValue = function (e, t) {
      return this.variables.hasOwnProperty(t) ? this.variables[t](e, t) || "" : this.$getDefaultValue(e, t) || ""
    }, this.tmStrFormat = function (e, t, i) {
      var n = t.flag || "", o = t.guard;
      o = new RegExp(o, n.replace(/[^gi]/, ""));
      var r = this.tokenizeTmSnippet(t.fmt, "formatString"), s = this, a = e.replace(o, function () {
        s.variables.__ = arguments;
        for (var e = s.resolveVariables(r, i), t = "E", n = 0; n < e.length; n++) {
          var o = e[n];
          if ("object" == typeof o) if (e[n] = "", o.changeCase && o.local) {
            var a = e[n + 1];
            a && "string" == typeof a && ("u" == o.changeCase ? e[n] = a[0].toUpperCase() : e[n] = a[0].toLowerCase(), e[n + 1] = a.substr(1))
          } else o.changeCase && (t = o.changeCase); else "U" == t ? e[n] = o.toUpperCase() : "L" == t && (e[n] = o.toLowerCase())
        }
        return e.join("")
      });
      return this.variables.__ = null, a
    }, this.resolveVariables = function (e, t) {
      function i(t) {
        var i = e.indexOf(t, o + 1);
        -1 != i && (o = i)
      }

      for (var n = [], o = 0; o < e.length; o++) {
        var r = e[o];
        if ("string" == typeof r) n.push(r); else {
          if ("object" != typeof r) continue;
          if (r.skip) i(r); else {
            if (r.processed < o) continue;
            if (r.text) {
              var s = this.getVariableValue(t, r.text);
              s && r.fmtString && (s = this.tmStrFormat(s, r)), r.processed = o, null == r.expectIf ? s && (n.push(s), i(r)) : s ? r.skip = r.elseBranch : i(r)
            } else null != r.tabstopId ? n.push(r) : null != r.changeCase && n.push(r)
          }
        }
      }
      return n
    }, this.insertSnippetForSelection = function (e, t) {
      function i(e) {
        for (var t = [], i = 0; i < e.length; i++) {
          var n = e[i];
          if ("object" == typeof n) {
            if (h[n.tabstopId]) continue;
            var o = e.lastIndexOf(n, i - 1);
            n = t[o] || {tabstopId: n.tabstopId}
          }
          t[i] = n
        }
        return t
      }

      var n = e.getCursorPosition(), o = e.session.getLine(n.row), r = e.session.getTabString(), s = o.match(/^\s*/)[0];
      n.column < s.length && (s = s.slice(0, n.column));
      var a = this.tokenizeTmSnippet(t);
      a = this.resolveVariables(a, e), a = a.map(function (e) {
        return "\n" == e ? e + s : "string" == typeof e ? e.replace(/\t/g, r) : e
      });
      var c = [];
      a.forEach(function (e, t) {
        if ("object" == typeof e) {
          var i = e.tabstopId, n = c[i];
          if (n || (n = c[i] = [], n.index = i, n.value = ""), -1 === n.indexOf(e)) {
            n.push(e);
            var o = a.indexOf(e, t + 1);
            if (-1 !== o) {
              var r = a.slice(t + 1, o), s = r.some(function (e) {
                return "object" == typeof e
              });
              s && !n.value ? n.value = r : !r.length || n.value && "string" == typeof n.value || (n.value = r.join(""))
            }
          }
        }
      }), c.forEach(function (e) {
        e.length = 0
      });
      for (var h = {}, l = 0; l < a.length; l++) {
        var p = a[l];
        if ("object" == typeof p) {
          var u = p.tabstopId, g = a.indexOf(p, l + 1);
          if (h[u]) h[u] === p && (h[u] = null); else {
            var f = c[u], m = "string" == typeof f.value ? [f.value] : i(f.value);
            m.unshift(l + 1, Math.max(0, g - l)), m.push(p), h[u] = p, a.splice.apply(a, m), -1 === f.indexOf(p) && f.push(p)
          }
        }
      }
      var v = 0, b = 0, x = "";
      a.forEach(function (e) {
        "string" == typeof e ? ("\n" === e[0] ? (b = e.length - 1, v++) : b += e.length, x += e) : e.start ? e.end = {
          row: v,
          column: b
        } : e.start = {row: v, column: b}
      });
      var w = e.getSelectionRange(), y = e.session.replace(w, x), T = new d(e),
        S = e.inVirtualSelectionMode && e.selection.index;
      T.addTabstops(c, w.start, y, S)
    }, this.insertSnippet = function (e, t) {
      var i = this;
      return e.inVirtualSelectionMode ? i.insertSnippetForSelection(e, t) : (e.forEachSelection(function () {
        i.insertSnippetForSelection(e, t)
      }, null, {keepOrder: !0}), void (e.tabstopManager && e.tabstopManager.tabNext()))
    }, this.$getScope = function (e) {
      var t = e.session.$mode.$id || "";
      if (t = t.split("/").pop(), "html" === t || "php" === t) {
        "php" !== t || e.session.$mode.inlinePhp || (t = "html");
        var i = e.getCursorPosition(), n = e.session.getState(i.row);
        "object" == typeof n && (n = n[0]), n.substring && ("js-" == n.substring(0, 3) ? t = "javascript" : "css-" == n.substring(0, 4) ? t = "css" : "php-" == n.substring(0, 4) && (t = "php"))
      }
      return t
    }, this.getActiveScopes = function (e) {
      var t = this.$getScope(e), i = [t], n = this.snippetMap;
      return n[t] && n[t].includeScopes && i.push.apply(i, n[t].includeScopes), i.push("_"), i
    }, this.expandWithTab = function (e, t) {
      var i = this, n = e.forEachSelection(function () {
        return i.expandSnippetForSelection(e, t)
      }, null, {keepOrder: !0});
      return n && e.tabstopManager && e.tabstopManager.tabNext(), n
    }, this.expandSnippetForSelection = function (e, t) {
      var i, n = e.getCursorPosition(), o = e.session.getLine(n.row), r = o.substring(0, n.column),
        s = o.substr(n.column), a = this.snippetMap;
      return this.getActiveScopes(e).some(function (e) {
        var t = a[e];
        return t && (i = this.findMatchingSnippet(t, r, s)), !!i
      }, this), i ? t && t.dryRun ? !0 : (e.session.doc.removeInLine(n.row, n.column - i.replaceBefore.length, n.column + i.replaceAfter.length), this.variables.M__ = i.matchBefore, this.variables.T__ = i.matchAfter, this.insertSnippetForSelection(e, i.content), this.variables.M__ = this.variables.T__ = null, !0) : !1
    }, this.findMatchingSnippet = function (e, t, i) {
      for (var n = e.length; n--;) {
        var o = e[n];
        if ((!o.startRe || o.startRe.test(t)) && (!o.endRe || o.endRe.test(i)) && (o.startRe || o.endRe)) return o.matchBefore = o.startRe ? o.startRe.exec(t) : [""], o.matchAfter = o.endRe ? o.endRe.exec(i) : [""], o.replaceBefore = o.triggerRe ? o.triggerRe.exec(t)[0] : "", o.replaceAfter = o.endTriggerRe ? o.endTriggerRe.exec(i)[0] : "", o
      }
    }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function (e, t) {
      function i(e) {
        return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" + e + ")"), e || ""
      }

      function n(e, t, n) {
        return e = i(e), t = i(t), n ? (e = t + e, e && "$" != e[e.length - 1] && (e += "$")) : (e += t, e && "^" != e[0] && (e = "^" + e)), new RegExp(e)
      }

      function o(e) {
        e.scope || (e.scope = t || "_"), t = e.scope, s[t] || (s[t] = [], a[t] = {});
        var i = a[t];
        if (e.name) {
          var o = i[e.name];
          o && c.unregister(o), i[e.name] = e
        }
        s[t].push(e), e.tabTrigger && !e.trigger && (!e.guard && /^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e.trigger = r.escapeRegExp(e.tabTrigger)), e.startRe = n(e.trigger, e.guard, !0), e.triggerRe = new RegExp(e.trigger, "", !0), e.endRe = n(e.endTrigger, e.endGuard, !0), e.endTriggerRe = new RegExp(e.endTrigger, "", !0)
      }

      var s = this.snippetMap, a = this.snippetNameMap, c = this;
      e || (e = []), e && e.content ? o(e) : Array.isArray(e) && e.forEach(o), this._signal("registerSnippets", {scope: t})
    }, this.unregister = function (e, t) {
      function i(e) {
        var i = o[e.scope || t];
        if (i && i[e.name]) {
          delete i[e.name];
          var r = n[e.scope || t], s = r && r.indexOf(e);
          s >= 0 && r.splice(s, 1)
        }
      }

      var n = this.snippetMap, o = this.snippetNameMap;
      e.content ? i(e) : Array.isArray(e) && e.forEach(i)
    }, this.parseSnippetFile = function (e) {
      e = e.replace(/\r/g, "");
      for (var t, i = [], n = {}, o = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm; t = o.exec(e);) {
        if (t[1]) try {
          n = JSON.parse(t[1]), i.push(n)
        } catch (r) {
        }
        if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n), n = {}; else {
          var s = t[2], a = t[3];
          if ("regex" == s) {
            var c = /\/((?:[^\/\\]|\\.)*)|$/g;
            n.guard = c.exec(a)[1], n.trigger = c.exec(a)[1], n.endTrigger = c.exec(a)[1], n.endGuard = c.exec(a)[1]
          } else "snippet" == s ? (n.tabTrigger = a.match(/^\S*/)[0], n.name || (n.name = a)) : n[s] = a
        }
      }
      return i
    }, this.getSnippetByName = function (e, t) {
      var i, n = this.snippetNameMap;
      return this.getActiveScopes(t).some(function (t) {
        var o = n[t];
        return o && (i = o[e]), !!i
      }, this), i
    }
  }).call(p.prototype);
  var d = function (e) {
    return e.tabstopManager ? e.tabstopManager : (e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = r.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), void this.attach(e))
  };
  (function () {
    this.attach = function (e) {
      this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = e, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
    }, this.detach = function () {
      this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null
    }, this.onChange = function (e) {
      var t = e.data.range, i = "r" == e.data.action[0], n = t.start, o = t.end, r = n.row, s = o.row, a = s - r,
        c = o.column - n.column;
      if (i && (a = -a, c = -c), !this.$inChange && i) {
        var h = this.selectedTabstop, p = h && !h.some(function (e) {
          return l(e.start, n) <= 0 && l(e.end, o) >= 0
        });
        if (p) return this.detach()
      }
      for (var d = this.ranges, u = 0; u < d.length; u++) {
        var g = d[u];
        g.end.row < n.row || (i && l(n, g.start) < 0 && l(o, g.end) > 0 ? (this.removeRange(g), u--) : (g.start.row == r && g.start.column > n.column && (g.start.column += c), g.end.row == r && g.end.column >= n.column && (g.end.column += c), g.start.row >= r && (g.start.row += a), g.end.row >= r && (g.end.row += a), l(g.start, g.end) > 0 && this.removeRange(g)))
      }
      d.length || this.detach()
    }, this.updateLinkedFields = function () {
      var e = this.selectedTabstop;
      if (e && e.hasLinkedRanges) {
        this.$inChange = !0;
        for (var i = this.editor.session, n = i.getTextRange(e.firstNonLinked), o = e.length; o--;) {
          var r = e[o];
          if (r.linked) {
            var s = t.snippetManager.tmStrFormat(n, r.original);
            i.replace(r, s)
          }
        }
        this.$inChange = !1
      }
    }, this.onAfterExec = function (e) {
      e.command && !e.command.readOnly && this.updateLinkedFields()
    }, this.onChangeSelection = function () {
      if (this.editor) {
        for (var e = this.editor.selection.lead, t = this.editor.selection.anchor, i = this.editor.selection.isEmpty(), n = this.ranges.length; n--;) if (!this.ranges[n].linked) {
          var o = this.ranges[n].contains(e.row, e.column), r = i || this.ranges[n].contains(t.row, t.column);
          if (o && r) return
        }
        this.detach()
      }
    }, this.onChangeSession = function () {
      this.detach()
    }, this.tabNext = function (e) {
      var t = this.tabstops.length, i = this.index + (e || 1);
      i = Math.min(Math.max(i, 1), t), i == t && (i = 0), this.selectTabstop(i), 0 === i && this.detach()
    }, this.selectTabstop = function (e) {
      this.$openTabstops = null;
      var t = this.tabstops[this.index];
      if (t && this.addTabstopMarkers(t), this.index = e, t = this.tabstops[this.index], t && t.length) {
        if (this.selectedTabstop = t, this.editor.inVirtualSelectionMode) this.editor.selection.setRange(t.firstNonLinked); else {
          var i = this.editor.multiSelect;
          i.toSingleRange(t.firstNonLinked.clone());
          for (var n = t.length; n--;) t.hasLinkedRanges && t[n].linked || i.addRange(t[n].clone(), !0);
          i.ranges[0] && i.addRange(i.ranges[0].clone())
        }
        this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
      }
    }, this.addTabstops = function (e, t, i) {
      if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
        var n = s.fromPoints(i, i);
        f(n.start, t), f(n.end, t), e[0] = [n], e[0].index = 0
      }
      var o = this.index, r = [o + 1, 0], a = this.ranges;
      e.forEach(function (e, i) {
        for (var n = this.$openTabstops[i] || e, o = e.length; o--;) {
          var c = e[o], h = s.fromPoints(c.start, c.end || c.start);
          g(h.start, t), g(h.end, t), h.original = c, h.tabstop = n, a.push(h), n != e ? n.unshift(h) : n[o] = h, c.fmtString ? (h.linked = !0, n.hasLinkedRanges = !0) : n.firstNonLinked || (n.firstNonLinked = h)
        }
        n.firstNonLinked || (n.hasLinkedRanges = !1), n === e && (r.push(n), this.$openTabstops[i] = n), this.addTabstopMarkers(n)
      }, this), r.length > 2 && (this.tabstops.length && r.push(r.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, r))
    }, this.addTabstopMarkers = function (e) {
      var t = this.editor.session;
      e.forEach(function (e) {
        e.markerId || (e.markerId = t.addMarker(e, "ace_snippet-marker", "text"))
      })
    }, this.removeTabstopMarkers = function (e) {
      var t = this.editor.session;
      e.forEach(function (e) {
        t.removeMarker(e.markerId), e.markerId = null
      })
    }, this.removeRange = function (e) {
      var t = e.tabstop.indexOf(e);
      e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges.splice(t, 1), this.editor.session.removeMarker(e.markerId), e.tabstop.length || (t = this.tabstops.indexOf(e.tabstop), -1 != t && this.tabstops.splice(t, 1), this.tabstops.length || this.detach())
    }, this.keyboardHandler = new c, this.keyboardHandler.bindKeys({
      Tab: function (e) {
        t.snippetManager && t.snippetManager.expandWithTab(e) || e.tabstopManager.tabNext(1)
      }, "Shift-Tab": function (e) {
        e.tabstopManager.tabNext(-1)
      }, Esc: function (e) {
        e.tabstopManager.detach()
      }, Return: function (e) {
        return !1
      }
    })
  }).call(d.prototype);
  var u = {};
  u.onChange = a.prototype.onChange, u.setPosition = function (e, t) {
    this.pos.row = e, this.pos.column = t
  }, u.update = function (e, t, i) {
    this.$insertRight = i, this.pos = e, this.onChange(t)
  };
  var g = function (e, t) {
    0 == e.row && (e.column += t.column), e.row += t.row
  }, f = function (e, t) {
    e.row == t.row && (e.column -= t.column), e.row -= t.row
  };
  e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"), t.snippetManager = new p;
  var m = e("./editor").Editor;
  (function () {
    this.insertSnippet = function (e, i) {
      return t.snippetManager.insertSnippet(this, e, i)
    }, this.expandSnippet = function (e) {
      return t.snippetManager.expandWithTab(this, e)
    }
  }).call(m.prototype)
}), ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/edit_session", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], function (e, t, i) {
  "use strict";
  var n = (e("../edit_session").EditSession, e("../virtual_renderer").VirtualRenderer), o = e("../editor").Editor,
    r = e("../range").Range, s = e("../lib/event"), a = e("../lib/lang"), c = e("../lib/dom"), h = function (e) {
      var t = new n(e);
      t.$maxLines = 4;
      var i = new o(t);
      return i.setHighlightActiveLine(!1), i.setShowPrintMargin(!1), i.renderer.setShowGutter(!1), i.renderer.setHighlightGutterLine(!1), i.$mouseHandler.$focusWaitTimout = 0, i.$highlightTagPending = !0, i
    }, l = function (e) {
      var t = c.createElement("div"), i = new h(t);
      e && e.appendChild(t), t.style.display = "none", i.renderer.content.style.cursor = "default", i.renderer.setStyle("ace_autocomplete"), i.setOption("displayIndentGuides", !1), i.setOption("dragDelay", 150);
      var n = function () {
      };
      i.focus = n, i.$isFocused = !0, i.renderer.$cursorLayer.restartTimer = n, i.renderer.$cursorLayer.element.style.opacity = 0, i.renderer.$maxLines = 8, i.renderer.$keepTextAreaAtCursor = !1, i.setHighlightActiveLine(!1), i.session.highlight(""), i.session.$searchHighlight.clazz = "ace_highlight-marker", i.on("mousedown", function (e) {
        var t = e.getDocumentPosition();
        i.selection.moveToPosition(t), p.start.row = p.end.row = t.row, e.stop()
      });
      var o, l = new r(-1, 0, -1, 1 / 0), p = new r(-1, 0, -1, 1 / 0);
      p.id = i.session.addMarker(p, "ace_active-line", "fullLine"), i.setSelectOnHover = function (e) {
        e ? l.id && (i.session.removeMarker(l.id), l.id = null) : l.id = i.session.addMarker(l, "ace_line-hover", "fullLine")
      }, i.setSelectOnHover(!1), i.on("mousemove", function (e) {
        if (!o) return void (o = e);
        if (o.x != e.x || o.y != e.y) {
          o = e, o.scrollTop = i.renderer.scrollTop;
          var t = o.getDocumentPosition().row;
          l.start.row != t && (l.id || i.setRow(t), u(t))
        }
      }), i.renderer.on("beforeRender", function () {
        if (o && -1 != l.start.row) {
          o.$pos = null;
          var e = o.getDocumentPosition().row;
          l.id || i.setRow(e), u(e, !0)
        }
      }), i.renderer.on("afterRender", function () {
        var e = i.getRow(), t = i.renderer.$textLayer, n = t.element.childNodes[e - t.config.firstRow];
        n != t.selectedNode && (t.selectedNode && c.removeCssClass(t.selectedNode, "ace_selected"), t.selectedNode = n, n && c.addCssClass(n, "ace_selected"))
      });
      var d = function () {
        u(-1)
      }, u = function (e, t) {
        e !== l.start.row && (l.start.row = l.end.row = e, t || i.session._emit("changeBackMarker"), i._emit("changeHoverMarker"))
      };
      i.getHoveredRow = function () {
        return l.start.row
      }, s.addListener(i.container, "mouseout", d), i.on("hide", d), i.on("changeSelection", d), i.session.doc.getLength = function () {
        return i.data.length
      }, i.session.doc.getLine = function (e) {
        var t = i.data[e];
        return "string" == typeof t ? t : t && t.value || ""
      };
      var g = i.session.bgTokenizer;
      return g.$tokenizeRow = function (e) {
        var t = i.data[e], n = [];
        if (!t) return n;
        "string" == typeof t && (t = {value: t}), t.caption || (t.caption = t.value || t.name);
        for (var o, r, s = -1, a = 0; a < t.caption.length; a++) r = t.caption[a], o = t.matchMask & 1 << a ? 1 : 0, s !== o ? (n.push({
          type: t.className || "" + (o ? "completion-highlight" : ""),
          value: r
        }), s = o) : n[n.length - 1].value += r;
        if (t.meta) {
          var c = i.renderer.$size.scrollerWidth / i.renderer.layerConfig.characterWidth, h = t.meta;
          h.length + t.caption.length > c - 2 && (h = h.substr(0, c - t.caption.length - 3) + "…"), n.push({
            type: "rightAlignedText",
            value: h
          })
        }
        return n
      }, g.$updateOnChange = n, g.start = n, i.session.$computeWidth = function () {
        return this.screenWidth = 0
      }, i.$blockScrolling = 1 / 0, i.isOpen = !1, i.isTopdown = !1, i.data = [], i.setData = function (e) {
        i.data = e || [], i.setValue(a.stringRepeat("\n", e.length), -1), i.setRow(0)
      }, i.getData = function (e) {
        return i.data[e]
      }, i.getRow = function () {
        return p.start.row
      }, i.setRow = function (e) {
        e = Math.max(-1, Math.min(this.data.length, e)), p.start.row != e && (i.selection.clearSelection(), p.start.row = p.end.row = e || 0, i.session._emit("changeBackMarker"), i.moveCursorTo(e || 0, 0), i.isOpen && i._signal("select"))
      }, i.on("changeSelection", function () {
        i.isOpen && i.setRow(i.selection.lead.row), i.renderer.scrollCursorIntoView()
      }), i.hide = function () {
        this.container.style.display = "none", this._signal("hide"), i.isOpen = !1
      }, i.show = function (e, t, n) {
        var r = this.container, s = window.innerHeight, a = window.innerWidth, c = this.renderer,
          h = c.$maxLines * t * 1.4, l = e.top + this.$borderSize;
        l + h > s - t && !n ? (r.style.top = "", r.style.bottom = s - l + "px", i.isTopdown = !1) : (l += t, r.style.top = l + "px", r.style.bottom = "", i.isTopdown = !0), r.style.display = "", this.renderer.$textLayer.checkForSizeChanges();
        var p = e.left;
        p + r.offsetWidth > a && (p = a - r.offsetWidth), r.style.left = p + "px", this._signal("show"), o = null, i.isOpen = !0
      }, i.getTextLeftOffset = function () {
        return this.$borderSize + this.renderer.$padding + this.$imageSize
      }, i.$imageSize = 0, i.$borderSize = 1, i
    };
  c.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 370px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"), t.AcePopup = l
}), ace.define("ace/autocomplete/util", ["require", "exports", "module"], function (e, t, i) {
  "use strict";
  t.parForEach = function (e, t, i) {
    var n = 0, o = e.length;
    0 === o && i();
    for (var r = 0; o > r; r++) t(e[r], function (e, t) {
      n++, n === o && i(e, t)
    })
  };
  var n = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
  t.retrievePrecedingIdentifier = function (e, t, i) {
    i = i || n;
    for (var o = [], r = t - 1; r >= 0 && i.test(e[r]); r--) o.push(e[r]);
    return o.reverse().join("")
  }, t.retrieveFollowingIdentifier = function (e, t, i) {
    i = i || n;
    for (var o = [], r = t; r < e.length && i.test(e[r]); r++) o.push(e[r]);
    return o
  }
}), ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"], function (e, t, i) {
  "use strict";
  var n = e("./keyboard/hash_handler").HashHandler, o = e("./autocomplete/popup").AcePopup,
    r = e("./autocomplete/util"), s = (e("./lib/event"), e("./lib/lang")), a = e("./lib/dom"),
    c = e("./snippets").snippetManager, h = function () {
      this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new n, this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = s.delayedCall(function () {
        this.updateCompletions(!0)
      }.bind(this)), this.tooltipTimer = s.delayedCall(this.updateDocTooltip.bind(this), 50)
    };
  (function () {
    this.$init = function () {
      return this.popup = new o(document.body || document.documentElement), this.popup.on("click", function (e) {
        this.insertMatch(), e.stop()
      }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup
    }, this.getPopup = function () {
      return this.popup || this.$init()
    }, this.openPopup = function (e, t, i) {
      this.popup || this.$init();
      for (var n = ace.require("ace/mode/python_highlight_rules").Enums, o = ace.require("ace/mode/python_highlight_rules").PythonBuiltInFunctions, r = ace.require("ace/mode/python_highlight_rules").PythonConstants, s = ace.require("ace/mode/python_highlight_rules").PythonKeyWords, a = ace.require("ace/mode/python_highlight_rules").spikeKeywords, c = this.completions.filtered.length; c--;) {
        var h = this.completions.filtered[c];
        switch (h.meta) {
          case "Helper":
            h.className = "editorHelper";
            break;
          case "snippet":
            h.className = "editorTemplate";
            break;
          case "Object":
            h.className = "editorObject";
            break;
          case "Variable":
            h.className = "editorVariable";
            break;
          case "Method":
            h.className = "editorMethod";
            break;
          case "local":
            h.className = "editorVariable";
            break;
          case "keyword":
            h.name && -1 !== n.indexOf(h.name) ? (h.className = "editorEnum", h.meta = "Enum") : h.name && -1 !== o.indexOf(h.name) ? (h.className = "editorKeyword", h.meta = "Keyword") : h.name && -1 !== r.indexOf(h.name) ? (h.className = "editorKeyword", h.meta = "Keyword") : h.name && -1 !== s.indexOf(h.name) ? (h.className = "editorKeyword", h.meta = "Keyword") : h.name && -1 !== a.indexOf(h.name) ? (h.className = "editorSpike", h.meta = "Keyword") : this.completions.filtered.splice(c, 1)
        }
      }
      this.popup.setData(this.completions.filtered), e.keyBinding.addKeyboardHandler(this.keyboardHandler);
      var l = e.renderer;
      if (this.popup.setRow(this.autoSelect ? 0 : -1), i) i && !t && this.detach(); else {
        this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e.getFontSize());
        var p = l.layerConfig.lineHeight, d = l.$cursorLayer.getPixelPosition(this.base, !0);
        d.left -= this.popup.getTextLeftOffset();
        var u = e.container.getBoundingClientRect();
        d.top += u.top - l.layerConfig.offset, d.left += u.left - e.renderer.scrollLeft, d.left += l.$gutterLayer.gutterWidth, this.popup.show(d, p)
      }
    }, this.detach = function () {
      this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null
    }, this.changeListener = function (e) {
      var t = this.editor.selection.lead;
      (t.row != this.base.row || t.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach()
    }, this.blurListener = function (e) {
      var t = document.activeElement, i = this.editor.textInput.getElement();
      t == i || this.popup && t.parentNode == this.popup.container || t == this.tooltipNode || e.relatedTarget == this.tooltipNode || e.relatedTarget == i || this.detach()
    }, this.mousedownListener = function (e) {
      this.detach()
    }, this.mousewheelListener = function (e) {
      this.detach()
    }, this.goTo = function (e) {
      var t = this.popup.getRow(), i = this.popup.session.getLength() - 1;
      switch (e) {
        case "up":
          t = 0 >= t ? i : t - 1;
          break;
        case "down":
          t = t >= i ? -1 : t + 1;
          break;
        case "start":
          t = 0;
          break;
        case "end":
          t = i
      }
      this.popup.setRow(t)
    }, this.insertMatch = function (e) {
      if (e || (e = this.popup.getData(this.popup.getRow())), !e) return !1;
      if (this.completions.filterText) for (var t, i = this.editor.selection.getAllRanges(), n = 0; t = i[n]; n++) t.start.column -= this.completions.filterText.length, this.editor.session.remove(t);
      e.completer && e.completer.insertMatch ? e.snippet ? c.insertSnippet(this.editor, e.snippet) : e.completer.insertMatch(this.editor, e) : e.snippet ? c.insertSnippet(this.editor, e.snippet) : this.editor.execCommand("insertstring", e.value || e), this.detach()
    }, this.commands = {
      Up: function (e) {
        e.completer.goTo("up")
      }, Down: function (e) {
        e.completer.goTo("down")
      }, "Ctrl-Up|Ctrl-Home": function (e) {
        e.completer.goTo("start")
      }, "Ctrl-Down|Ctrl-End": function (e) {
        e.completer.goTo("end")
      }, Esc: function (e) {
        e.completer.detach()
      }, Return: function (e) {
        return e.completer.insertMatch()
      }, "Shift-Return": function (e) {
        e.completer.insertMatch(!0)
      }, Tab: function (e) {
        var t = e.completer.insertMatch();
        return t || e.tabstopManager ? t : void e.completer.goTo("down")
      }, PageUp: function (e) {
        e.completer.popup.gotoPageUp()
      }, PageDown: function (e) {
        e.completer.popup.gotoPageDown()
      }
    }, this.gatherCompletions = function (e, t) {
      var i = e.getSession(), n = e.getCursorPosition(), o = i.getLine(n.row),
        s = r.retrievePrecedingIdentifier(o, n.column);
      this.base = i.doc.createAnchor(n.row, n.column - s.length), this.base.$insertRight = !0;
      var a = [], c = e.completers.length;
      return e.completers.forEach(function (o, h) {
        o.getCompletions(e, i, n, s, function (n, o) {
          !o.length || "keyword" !== o[0].meta && "snippet" !== o[0].meta || (o = o.filter(function (e) {
            for (var t = a.length; t--;) {
              var i = new RegExp("^" + a[t].name + "[()]*$");
              if (i.test(e.name)) return !1
            }
            return !0
          })), n || (a = a.concat(o));
          var s = e.getCursorPosition(), h = i.getLine(s.row);
          t(null, {
            prefix: r.retrievePrecedingIdentifier(h, s.column, o[0] && o[0].identifierRegex),
            matches: a,
            finished: 0 === --c
          })
        })
      }), !0
    }, this.showPopup = function (e) {
      this.editor && this.detach(), this.activated = !0, this.editor = e, e.completer != this && (e.completer && e.completer.detach(), e.completer = this), e.on("changeSelection", this.changeListener), e.on("blur", this.blurListener), e.on("mousedown", this.mousedownListener), e.on("mousewheel", this.mousewheelListener), this.updateCompletions()
    }, this.updateCompletions = function (e) {
      if (e && this.base && this.completions) {
        var t = this.editor.getCursorPosition(), i = this.editor.session.getTextRange({start: this.base, end: t});
        if (i == this.completions.filterText) return;
        return this.completions.setFilter(i), this.completions.filtered.length && (1 != this.completions.filtered.length || this.completions.filtered[0].value != i || this.completions.filtered[0].snippet) ? void this.openPopup(this.editor, i, e) : this.detach()
      }
      var n = this.gatherCompletionsId;
      this.gatherCompletions(this.editor, function (t, i) {
        var o = function () {
          return i.finished ? this.detach() : void 0
        }.bind(this), r = i.prefix, s = i && i.matches;
        if (!s || !s.length) return o();
        if (0 === r.indexOf(i.prefix) && n == this.gatherCompletionsId) {
          this.completions = new l(s), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(r);
          var a = this.completions.filtered;
          return a.length && (1 != a.length || a[0].value != r || a[0].snippet) ? this.autoInsert && 1 == a.length && i.finished ? this.insertMatch(a[0]) : void this.openPopup(this.editor, r, e) : o()
        }
      }.bind(this))
    }, this.cancelContextMenu = function () {
      this.editor.$mouseHandler.cancelContextMenu()
    }, this.updateDocTooltip = function () {
      var e = this.popup, t = e.data, i = t && (t[e.getHoveredRow()] || t[e.getRow()]), n = null;
      return i && this.editor && this.popup.isOpen ? (this.editor.completers.some(function (e) {
        return e.getDocTooltip && (n = e.getDocTooltip(i)), n
      }), n || (n = i), "string" == typeof n && (n = {docText: n}), n && (n.docHTML || n.docText) ? void this.showDocTooltip(n) : this.hideDocTooltip()) : this.hideDocTooltip()
    }, this.showDocTooltip = function (e) {
      this.tooltipNode || (this.tooltipNode = a.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this));
      var t = this.tooltipNode;
      e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t.textContent = e.docText), t.parentNode || document.body.appendChild(t);
      var i = this.popup, n = i.container.getBoundingClientRect();
      t.style.top = i.container.style.top, t.style.bottom = i.container.style.bottom, window.innerWidth - n.right < 320 ? (t.style.right = window.innerWidth - n.left + "px", t.style.left = "") : (t.style.left = n.right + 1 + "px", t.style.right = ""), t.style.display = "block"
    }, this.hideDocTooltip = function () {
      if (this.tooltipTimer.cancel(), this.tooltipNode) {
        var e = this.tooltipNode;
        this.editor.isFocused() || document.activeElement != e || this.editor.focus(), this.tooltipNode = null, e.parentNode && e.parentNode.removeChild(e)
      }
    }
  }).call(h.prototype), h.startCommand = {
    name: "startAutocomplete", exec: function (e) {
      e.completer || (e.completer = new h), e.completer.autoInsert = !1, e.completer.autoSelect = !0, e.completer.showPopup(e), e.completer.cancelContextMenu()
    }, bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
  };
  var l = function (e, t, i) {
    this.all = e, this.filtered = e, this.filterText = t || "", this.exactMatch = !1
  };
  (function () {
    this.setFilter = function (e) {
      if (e.length > this.filterText && 0 === e.lastIndexOf(this.filterText, 0)) var t = this.filtered; else var t = this.all;
      this.filterText = e, t = this.filterCompletions(t, this.filterText), t = t.sort(function (e, t) {
        return t.exactMatch - e.exactMatch || t.score - e.score
      });
      var i = null;
      t = t.filter(function (e) {
        var t = e.snippet || e.caption || e.value;
        return t === i ? !1 : (i = t, !0)
      }), this.filtered = t
    }, this.filterCompletions = function (e, t) {
      var i = [], n = t.toUpperCase(), o = t.toLowerCase();
      e: for (var r, s = 0; r = e[s]; s++) {
        var a = r.value || r.caption || r.snippet;
        if (a) {
          var c, h, l = -1, p = 0, d = 0;
          if (this.exactMatch) {
            if (t !== a.substr(0, t.length)) continue e
          } else for (var u = 0; u < t.length; u++) {
            var g = a.indexOf(o[u], l + 1), f = a.indexOf(n[u], l + 1);
            if (c = g >= 0 && (0 > f || f > g) ? g : f, 0 > c) continue e;
            h = c - l - 1, h > 0 && (-1 === l && (d += 10), d += h), p |= 1 << c, l = c
          }
          r.matchMask = p, r.exactMatch = d ? 0 : 1, r.score = (r.score || 0) - d, i.push(r)
        }
      }
      return i
    }
  }).call(l.prototype), t.Autocomplete = h, t.FilteredList = l
}), ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function (e, t, i) {
  function n(e, t) {
    var i = e.getTextRange(r.fromPoints({row: 0, column: 0}, t));
    return i.split(s).length - 1
  }

  function o(e, t) {
    for (var i = e.doc.getAllLines(), o = i.length, r = []; o--;) {
      var a = e.getTokenAt(o, i[o].length);
      if (a && "comment" !== a.type) {
        var c = i[o].split(s);
        c.forEach(function (t, i, n) {
          "" !== t && -1 === e.getMode().$highlightRules.$keywordList.indexOf(t) && r.push(t)
        })
      }
    }
    var h = n(e.doc, t), l = Object.create(null), p = r[h];
    return r.forEach(function (e, t) {
      if (e && e !== p) {
        var i = Math.abs(h - t), n = r.length - i;
        l[e] ? l[e] = Math.max(n, l[e]) : l[e] = n
      }
    }), l
  }

  var r = e("../range").Range, s = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
  t.getCompletions = function (e, t, i, n, r) {
    var s = o(t, i, n), a = Object.keys(s);
    r(null, a.map(function (e) {
      return {caption: e, value: e, score: s[e], meta: "local"}
    }))
  }
}), ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], function (e, t, i) {
  "use strict";

  function n(e) {
    var t, i = e.getCursorPosition(), n = e.session.getLine(i.row);
    return e.completers.forEach(function (e) {
      e.identifierRegexps && e.identifierRegexps.forEach(function (e) {
        !t && e && (t = c.retrievePrecedingIdentifier(n, i.column, e))
      })
    }), t || c.retrievePrecedingIdentifier(n, i.column)
  }

  var o = e("../snippets").snippetManager, r = e("../autocomplete").Autocomplete, s = e("../config"),
    a = e("../lib/lang"), c = e("../autocomplete/util"), h = e("../autocomplete/text_completer"), l = {
      getCompletions: function (e, t, i, n, o) {
        if (t.$mode.completer) return t.$mode.completer.getCompletions(e, t, i, n, o);
        var r = e.session.getState(i.row), s = t.$mode.getCompletions(r, t, i, n);
        o(null, s)
      }
    }, p = {
      getCompletions: function (e, t, i, n, r) {
        var s = o.snippetMap, a = [];
        o.getActiveScopes(e).forEach(function (e) {
          for (var t = s[e] || [], i = t.length; i--;) {
            var n = t[i], o = n.name || n.tabTrigger;
            o && a.push({
              caption: o,
              snippet: n.content,
              meta: n.tabTrigger && !n.name ? n.tabTrigger + "⇥ " : "snippet",
              type: "snippet",
              className: "editorTemplate"
            })
          }
        }, this), r(null, a)
      }, getDocTooltip: function (e) {
        "snippet" != e.type || e.docHTML || (e.docHTML = ["<b>", a.escapeHTML(e.caption), "</b>", "<hr></hr>", a.escapeHTML(e.snippet)].join(""))
      }
    }, d = [p, h, l];
  t.setCompleters = function (e) {
    d = e || []
  }, t.addCompleter = function (e) {
    d.push(e)
  }, t.textCompleter = h, t.keyWordCompleter = l, t.snippetCompleter = p;
  var u = {
    name: "expandSnippet", exec: function (e) {
      return o.expandWithTab(e)
    }, bindKey: "Tab"
  }, g = function (e, t) {
    f(t.session.$mode)
  }, f = function (e) {
    var t = e.$id;
    o.files || (o.files = {}), m(t), e.modes && e.modes.forEach(f)
  }, m = function (e) {
    if (e && !o.files[e]) {
      var t = e.replace("mode", "snippets");
      o.files[e] = {}, s.loadModule(t, function (t) {
        t && (o.files[e] = t, !t.snippets && t.snippetText && (t.snippets = o.parseSnippetFile(t.snippetText)), o.register(t.snippets || [], t.scope), t.includeScopes && (o.snippetMap[t.scope].includeScopes = t.includeScopes, t.includeScopes.forEach(function (e) {
          m("ace/mode/" + e)
        })))
      })
    }
  }, v = function (e) {
    var t = e.editor, i = (e.args || "", t.completer && t.completer.activated);
    if ("backspace" === e.command.name) i && !n(t) && t.completer.detach(); else if ("insertstring" === e.command.name) {
      var o = n(t);
      o && !i && (t.completer || (t.completer = new r), t.completer.autoInsert = !1, t.completer.showPopup(t))
    }
  }, b = e("../editor").Editor;
  e("../config").defineOptions(b.prototype, "editor", {
    enableBasicAutocompletion: {
      set: function (e) {
        e ? (this.completers || (this.completers = Array.isArray(e) ? e : d), this.commands.addCommand(r.startCommand)) : this.commands.removeCommand(r.startCommand)
      }, value: !1
    }, enableLiveAutocompletion: {
      set: function (e) {
        e ? (this.completers || (this.completers = Array.isArray(e) ? e : d), this.commands.on("afterExec", v)) : this.commands.removeListener("afterExec", v)
      }, value: !1
    }, enableSnippets: {
      set: function (e) {
        e ? (this.commands.addCommand(u), this.on("changeMode", g), g(null, this)) : (this.commands.removeCommand(u), this.off("changeMode", g))
      }, value: !1
    }
  })
}), function () {
  ace.require(["ace/ext/language_tools"], function () {
  })
}();
