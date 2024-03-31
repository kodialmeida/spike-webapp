ace.define("ace/mode/python_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (a, b, c) {
  "use strict";
  var d = a("../lib/oop"),
    e = a("./text_highlight_rules").TextHighlightRules,
    f = {
      unit: "S88UnitModel",
      workUnit: "S95WorkUnitModel",
      phase: "PhaseModel",
      em: "EM1Model",
      eu: "EMUnitModel"
    },
    g = function () {
      var a = "and|break|continue|def|elif|else|for|if|in|is|not|or|pass|print|return|while|with|global";
      b.PythonKeyWords = a.split("|");
      var c = "True|False|None|this";
      b.PythonConstants = c.split("|");
      var d = "abs|int|str|print|len|range|float|max|min|slice|round";
      b.PythonBuiltInFunctions = d.split("|");
      var e = "AlarmSeverity|EMParameterType|EngineeringUnits|HazardLevel|HygienicStatus|MaterialHazardClassification|MessageResponse|Mode|OEEStatus|OperatingMode|SecurityArea|SecurityLevel|SILLevel|State|SyncMessage|DockingStatus|TransmitterType|WeighState|StorageRequirements|WeighingMethod|PersonnelQualificationLevel|MaterialType|Condition|Scanner|SingleUseStatus|ValveState|DayOfWeek";
      b.Enums = e.split("|");
      var g = "info|warn|error|opc|randInt|randDouble|sleep|waitFor|findParameter|raiseException|getEnumFromString|getTodaysDate|createDate|createParameter|parseDate|raiseWarning|resetModules",
        h = "getUnits",
        i = "getWorkUnits",
        j = "getProcessParameter|getProcessParameters|getAllProcessParameters|getStepParameter|getStepParameters|getAllStepParameters|getReportParameter|getReportParameters|getAllReportParameters|updateReportParameter|updateStepParameter",
        k = "",
        l = "|getProcessInputParameter|getProcessInputParameters|getAllProcessInputParameters|getProcessOutputParameter|getProcessOutputParameters|getAllProcessOutputParameters|getIntraMaterialParameter|getIntraMaterialParameters|getAllIntraMaterialParameters|getMaterialClass|getMaterialClasses|getMaterialDefinition|getMaterialDefinitions|getMaterialLots|getMaterialSublots|getMaterialSubSublots|createMaterialLot|createMaterialSublot|createMaterialSubSublot|getMaterialBillItem|getMaterialBillItems|updateMaterialBillItem|getEquipmentClass|getEquipmentClasses|getEquipmentDefinition|getEquipmentDefinitions|getPersonnelClass|getPersonnelClasses|getPersonnelDefinition|getPersonnelDefinitions|getHazardType|getHazardTypes",
        m = "addCampaignTrackingRecord",
        n = "",
        o = "transition",
        p = "",
        q = g,
        r = "",
        s = "firstScan",
        t = "firstScan",
        u = "firstScan|phase",
        v = "firstScan",
        w = {
          Interpreter: {
            Helper: g,
            Context: r
          },
          Step: {
            S88: {
              Helper: g.concat("|" + h).concat("|" + j).concat("|" + k).concat("|" + m).concat("|" + n),
              Context: s.concat("|unit")
            },
            S95: {
              Helper: g.concat("|" + i).concat("|" + j).concat("|" + l).concat("|" + m).concat("|" + n),
              Context: s.concat("|workUnit")
            }
          },
          Transition: {
            S88: {
              Helper: g.concat("|" + h).concat("|" + j).concat("|" + k).concat("|" + m).concat("|" + o),
              Context: t.concat("|unit")
            },
            S95: {
              Helper: g.concat("|" + i).concat("|" + j).concat("|" + l).concat("|" + m).concat("|" + o),
              Context: t.concat("|workUnit")
            }
          },
          CFB: {
            S88UnitModel: {
              Helper: q.concat("|" + h),
              Context: v.concat("|unit")
            },
            S95WorkUnitModel: {
              Helper: q.concat("|" + i),
              Context: v.concat("|workUnit")
            },
            EM1Model: {
              Helper: q,
              Context: v.concat("|unit|currentCommand|em")
            },
            EMUnitModel: {
              Helper: q,
              Context: v.concat("|workUnit|currentCommand|eu")
            }
          },
          FM: {
            PhaseModel: {
              S88: {
                Helper: g.concat("|" + h).concat("|" + p),
                Context: u.concat("|unit")
              },
              S95: {
                Helper: g.concat("|" + i).concat("|" + p),
                Context: u.concat("|workUnit")
              }
            }
          },
          EM1Method: {
            Helper: g,
            Context: v.concat("|unit|em")
          },
          EMUnitMethod: {
            Helper: g,
            Context: v.concat("|workUnit|eu")
          },
          Export: {
            Helper: g,
            Context: ""
          },
          Snippet: {
            Helper: g.concat("|" + h).concat("|" + i).concat("|" + j).concat("|" + k).concat("|" + l).concat("|" + m).concat("|" + n).concat("|" + o).concat("|" + q).concat("|" + p),
            Context: r.concat("|unit|workUnit|phase|em|eu|currentCommand|firstScan|transition")
          },
          Editor: {
            Helper: g.concat("|transition"),
            Context: ""
          }
        };
      b.spikeKeywords = ["unit", "workUnit", "phase", "em", "eu", "currentCommand", "firstScan", "transition"];
      var x = "",
        y = "",
        z = ace.$editor.type.split("/"),
        A = z[0],
        B = z[1],
        C = z[2];
      switch (A) {
        case "Interpreter":
          x = w.Interpreter.Helper, y = w.Interpreter.Context;
          break;
        case "Step":
          x = w.Step[B].Helper, y = w.Step[B].Context;
          break;
        case "Transition":
          x = w.Transition[B].Helper, y = w.Transition[B].Context;
          break;
        case "CFB":
          x = w.CFB[C].Helper, y = w.CFB[C].Context;
          break;
        case "FM":
          x = w.FM.PhaseModel[B].Helper, y = w.FM.PhaseModel[B].Context;
          break;
        case "EM1Method":
          x = w.EM1Method.Helper, y = w.EM1Method.Context;
          break;
        case "EMUnitMethod":
          x = w.EMUnitMethod.Helper, y = w.EMUnitMethod.Context;
          break;
        case "Export":
          x = w.Export.Helper, y = w.Export.Context;
          break;
        case "Snippet":
          x = w.Snippet.Helper, y = w.Snippet.Context
          break;
        case "Editor":
          x = w.Editor.Helper, y = w.Editor.Context
          break;
      }
      ace.$editor.editor.context = {};
      for (var D = y.split("|"), E = D.length; E--;) ace.$editor.editor.context[D[E]] = f[D[E]];
      var F = this.createKeywordMapper({
          "invalid.deprecated": "debugger",
          "support.function": d,
          "constant.language": c,
          keyword: a,
          "helper.function": x,
          "enum": e,
          contextSymbols: y
        }, "identifier"),
        G = "(?:r|u|ur|R|U|UR|Ur|uR)?",
        H = "(?:(?:[1-9]\\d*)|(?:0))",
        I = "(?:0[oO]?[0-7]+)",
        J = "(?:0[xX][\\dA-Fa-f]+)",
        K = "(?:0[bB][01]+)",
        L = "(?:" + H + "|" + I + "|" + J + "|" + K + ")",
        M = "(?:[eE][+-]?\\d+)",
        N = "(?:\\.\\d+)",
        O = "(?:\\d+)",
        P = "(?:(?:" + O + "?" + N + ")|(?:" + O + "\\.))",
        Q = "(?:(?:" + P + "|" + O + ")" + M + ")",
        R = "(?:" + Q + "|" + P + ")",
        S = "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";
      this.$rules = {
        start: [{
          token: "comment",
          regex: "#.*$"
        }, {
          token: "string",
          regex: G + '"{3}',
          next: "qqstring3"
        }, {
          token: "string",
          regex: G + '"(?=.)',
          next: "qqstring"
        }, {
          token: "string",
          regex: G + "'{3}",
          next: "qstring3"
        }, {
          token: "string",
          regex: G + "'(?=.)",
          next: "qstring"
        }, {
          token: "constant.numeric",
          regex: "(?:" + R + "|\\d+)[jJ]\\b"
        }, {
          token: "constant.numeric",
          regex: R
        }, {
          token: "constant.numeric",
          regex: L + "[lL]\\b"
        }, {
          token: "constant.numeric",
          regex: L + "\\b"
        }, {
          token: F,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
          token: "keyword.operator",
          regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
          token: "paren.lparen",
          regex: "[\\[\\(\\{]"
        }, {
          token: "paren.rparen",
          regex: "[\\]\\)\\}]"
        }, {
          token: "text",
          regex: "\\s+"
        }],
        qqstring3: [{
          token: "constant.language.escape",
          regex: S
        }, {
          token: "string",
          regex: '"{3}',
          next: "start"
        }, {
          defaultToken: "string"
        }],
        qstring3: [{
          token: "constant.language.escape",
          regex: S
        }, {
          token: "string",
          regex: "'{3}",
          next: "start"
        }, {
          defaultToken: "string"
        }],
        qqstring: [{
          token: "constant.language.escape",
          regex: S
        }, {
          token: "string",
          regex: "\\\\$",
          next: "qqstring"
        }, {
          token: "string",
          regex: '"|$',
          next: "start"
        }, {
          defaultToken: "string"
        }],
        qstring: [{
          token: "constant.language.escape",
          regex: S
        }, {
          token: "string",
          regex: "\\\\$",
          next: "qstring"
        }, {
          token: "string",
          regex: "'|$",
          next: "start"
        }, {
          defaultToken: "string"
        }]
      }
    };
  d.inherits(g, e), b.PythonHighlightRules = g
}), ace.define("ace/mode/folding/pythonic", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function (a, b, c) {
  "use strict";
  var d = a("../../lib/oop"),
    e = a("./fold_mode").FoldMode,
    f = b.FoldMode = function (a) {
      this.foldingStartMarker = new RegExp("([\\[{])(?:\\s*)$|(" + a + ")(?:\\s*)(?:#.*)?$")
    };
  d.inherits(f, e),
    function () {
      this.getFoldWidgetRange = function (a, b, c) {
        var d = a.getLine(c),
          e = d.match(this.foldingStartMarker);
        return e ? e[1] ? this.openingBracketBlock(a, e[1], c, e.index) : e[2] ? this.indentationBlock(a, c, e.index + e[2].length) : this.indentationBlock(a, c) : void 0
      }
    }.call(f.prototype)
}), ace.define("ace/mode/python", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/python_highlight_rules", "ace/mode/folding/pythonic", "ace/range"], function (a, b, c) {
  "use strict";
  var d = a("../lib/oop"),
    e = a("./text").Mode,
    f = a("./python_highlight_rules").PythonHighlightRules,
    g = a("./folding/pythonic").FoldMode,
    h = a("../range").Range,
    i = function () {
      this.HighlightRules = f, this.foldingRules = new g("\\:")
    };
  d.inherits(i, e),
    function () {
      this.lineCommentStart = "#", this.getNextLineIndent = function (a, b, c) {
        var d = this.$getIndent(b),
          e = this.getTokenizer().getLineTokens(b, a),
          f = e.tokens;
        if (f.length && "comment" == f[f.length - 1].type) return d;
        if ("start" == a) {
          var g = b.match(/^.*[\{\(\[\:]\s*$/);
          g && (d += c)
        }
        return d
      };
      var a = {
        pass: 1,
        "return": 1,
        raise: 1,
        "break": 1,
        "continue": 1
      };
      this.checkOutdent = function (b, c, d) {
        if ("\r\n" !== d && "\r" !== d && "\n" !== d) return !1;
        var e = this.getTokenizer().getLineTokens(c.trim(), b).tokens;
        if (!e) return !1;
        do var f = e.pop(); while (f && ("comment" == f.type || "text" == f.type && f.value.match(/^\s+$/)));
        return f ? "keyword" == f.type && a[f.value] : !1
      }, this.autoOutdent = function (a, b, c) {
        c += 1;
        var d = this.$getIndent(b.getLine(c)),
          e = b.getTabString();
        d.slice(-e.length) == e && b.remove(new h(c, d.length - e.length, c, d.length))
      }, this.$id = "ace/mode/python"
    }.call(i.prototype), b.Mode = i
});
