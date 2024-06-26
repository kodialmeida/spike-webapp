/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (s, g) {
  'use strict';

  function H(g) {
    var l = [];
    t(l, A).chars(g);
    return l.join("")
  }

  var B = g.$$minErr("$sanitize"), C, l, D, E, q, A, F, t;
  g.module("ngSanitize", []).provider("$sanitize", function () {
    function k(a, e) {
      var b = {}, c = a.split(","), h;
      for (h = 0; h < c.length; h++) b[e ? q(c[h]) : c[h]] = !0;
      return b
    }

    function I(a) {
      for (var e = {}, b = 0, c = a.length; b < c; b++) {
        var h = a[b];
        e[h.name] = h.value
      }
      return e
    }

    function G(a) {
      return a.replace(/&/g, "&amp;").replace(J, function (a) {
        var b = a.charCodeAt(0);
        a = a.charCodeAt(1);
        return "&#" + (1024 * (b - 55296) +
          (a - 56320) + 65536) + ";"
      }).replace(K, function (a) {
        return "&#" + a.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function x(a) {
      for (; a;) {
        if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, b = 0, c = e.length; b < c; b++) {
          var h = e[b], d = h.name.toLowerCase();
          if ("xmlns:ns1" === d || 0 === d.lastIndexOf("ns1:", 0)) a.removeAttributeNode(h), b--, c--
        }
        (e = a.firstChild) && x(e);
        a = a.nextSibling
      }
    }

    var u = !1;
    this.$get = ["$$sanitizeUri", function (a) {
      u && l(v, w);
      return function (e) {
        var b = [];
        F(e, t(b, function (b, h) {
          return !/^unsafe:/.test(a(b,
            h))
        }));
        return b.join("")
      }
    }];
    this.enableSvg = function (a) {
      return E(a) ? (u = a, this) : u
    };
    C = g.bind;
    l = g.extend;
    D = g.forEach;
    E = g.isDefined;
    q = g.lowercase;
    A = g.noop;
    F = function (a, e) {
      null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);
      f.innerHTML = a;
      var b = 5;
      do {
        if (0 === b) throw B("uinput");
        b--;
        s.document.documentMode && x(f);
        a = f.innerHTML;
        f.innerHTML = a
      } while (a !== f.innerHTML);
      for (b = f.firstChild; b;) {
        switch (b.nodeType) {
          case 1:
            e.start(b.nodeName.toLowerCase(), I(b.attributes));
            break;
          case 3:
            e.chars(b.textContent)
        }
        var c;
        if (!(c =
          b.firstChild) && (1 === b.nodeType && e.end(b.nodeName.toLowerCase()), c = b.nextSibling, !c)) for (; null == c;) {
          b = b.parentNode;
          if (b === f) break;
          c = b.nextSibling;
          1 === b.nodeType && e.end(b.nodeName.toLowerCase())
        }
        b = c
      }
      for (; b = f.firstChild;) f.removeChild(b)
    };
    t = function (a, e) {
      var b = !1, c = C(a, a.push);
      return {
        start: function (a, d) {
          a = q(a);
          !b && z[a] && (b = a);
          b || !0 !== v[a] || (c("<"), c(a), D(d, function (b, d) {
            var f = q(d), g = "img" === a && "src" === f || "background" === f;
            !0 !== m[f] || !0 === n[f] && !e(b, g) || (c(" "), c(d), c('="'), c(G(b)), c('"'))
          }), c(">"))
        },
        end: function (a) {
          a = q(a);
          b || !0 !== v[a] || !0 === y[a] || (c("</"), c(a), c(">"));
          a == b && (b = !1)
        }, chars: function (a) {
          b || c(G(a))
        }
      }
    };
    var J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, K = /([^#-~ |!])/g, y = k("area,br,col,hr,img,wbr"),
      d = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), r = k("rp,rt"), p = l({}, r, d),
      d = l({}, d, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
      r = l({}, r, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      w = k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
      z = k("script,style"), v = l({}, y, d, r, p), n = k("background,cite,href,longdesc,src,xlink:href"),
      p = k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
      r = k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
        !0), m = l({}, n, r, p), f;
    (function (a) {
      if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert"); else throw B("noinert");
      var e = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");
      1 === e.length ? f = e[0] : (e = a.createElement("html"), f = a.createElement("body"), e.appendChild(f), a.appendChild(e))
    })(s)
  });
  g.module("ngSanitize").filter("linky", ["$sanitize", function (k) {
    var l = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      q = /^mailto:/i, x = g.$$minErr("linky"), u = g.isDefined, s = g.isFunction, t = g.isObject, y = g.isString;
    return function (d, g, p) {
      function w(a) {
        a && m.push(H(a))
      }

      function z(a, b) {
        var c, d = v(a);
        m.push("<a ");
        for (c in d) m.push(c + '="' + d[c] + '" ');
        !u(g) || "target" in d || m.push('target="', g, '" ');
        m.push('href="', a.replace(/"/g, "&quot;"), '">');
        w(b);
        m.push("</a>")
      }

      if (null == d || "" === d) return d;
      if (!y(d)) throw x("notstring", d);
      for (var v = s(p) ? p : t(p) ? function () {
        return p
      } : function () {
        return {}
      }, n = d, m = [], f, a; d = n.match(l);) f = d[0], d[2] ||
      d[4] || (f = (d[3] ? "http://" : "mailto:") + f), a = d.index, w(n.substr(0, a)), z(f, d[0].replace(q, "")), n = n.substring(a + d[0].length);
      w(n);
      return k(m.join(""))
    }
  }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
