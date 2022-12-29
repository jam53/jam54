!function(e,t,n,r){function o(e,t){return(void 0===e?"undefined":(n=e)&&n.constructor===Symbol?"symbol":typeof n)===t;
/*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
var n}function i(e){var t=C.className,n=w._config.classPrefix||"";if(S&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),S?C.className.baseVal=t:C.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)T(e,n)&&s(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=w[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return w;t="function"==typeof t?t():t,1===r.length?w[r[0]]=t:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=t),i([(t&&!1!==t?"":"no-")+r.join("-")]),w._trigger(e,t)}return w}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,t,r,o){var i,s,l,u,f,d="modernizr",c=a("div"),p=((f=n.body)||((f=a(S?"svg":"body")).fake=!0),f);if(parseInt(r,10))for(;r--;)(l=a("div")).id=o?o[r]:d+(r+1),c.appendChild(l);return(i=a("style")).type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=t(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):c.parentNode.removeChild(c),!!s}function u(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var i=t.console;null!==o?r&&(o=o.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function c(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(d(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var i=[];o--;)i.push("("+d(e[o])+":"+n+")");return l("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===u(e,null,"position")}))}return r}function p(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function m(e,t,n,i){function s(){u&&(delete N.style,delete N.modElem)}if(i=!o(i,"undefined")&&i,!o(n,"undefined")){var l=c(e,n);if(!o(l,"undefined"))return l}for(var u,d,m,h,A,v=["modernizr","tspan","samp"];!N.style&&v.length;)u=!0,N.modElem=a(v.shift()),N.style=N.modElem.style;for(m=e.length,d=0;d<m;d++)if(h=e[d],A=N.style[h],f(h,"-")&&(h=p(h)),N.style[h]!==r){if(i||o(n,"undefined"))return s(),"pfx"!==t||h;try{N.style[h]=n}catch(e){}if(N.style[h]!==A)return s(),"pfx"!==t||h}return s(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?m(a,t,r,i):function(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:o(r=t[e[i]],"function")?h(r,n||t):r;return!1}(a=(e+" "+_.join(s+" ")+s).split(" "),t,n)}function v(e,t,n){return A(e,r,r,t,n)}var g=[],y={_version:"3.11.2",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=y,w=new w;var b=[],C=n.documentElement,S="svg"===C.nodeName.toLowerCase(),x="Moz O ms Webkit",_=y._config.usePrefixes?x.toLowerCase().split(" "):[];y._domPrefixes=_;var T,P,k=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=k,T=o(P={}.hasOwnProperty,"undefined")||o(P.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return P.call(e,t)},y._l={},y.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout((function(){w._trigger(e,w[e])}),0)},y._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},w._q.push((function(){y.addTest=s}));var B,E=(B=!("onblur"in C),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=a(t||"div")),!(n=(e="on"+e)in t)&&B&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==r&&(t[e]=r),t.removeAttribute(e)),n)});y.hasEvent=E;var z=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return l("@media "+e+" { #modernizr { position: absolute; } }",(function(e){t="absolute"===u(e,null,"position")})),t}}();y.mq=z,y.prefixedCSSValue=function(e,t){var n=!1,r=a("div").style;if(e in r){var o=_.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+_[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n};var O=y._config.usePrefixes?x.split(" "):[];y._cssomPrefixes=O;var L={elem:a("modernizr")};w._q.push((function(){delete L.elem}));var N={style:L.elem.style};w._q.unshift((function(){delete N.style})),y.testAllProps=A,y.testAllProps=v,y.testProp=function(e,t,n){return m([e],r,t,n)},y.testStyles=l,w.addTest("customelements","customElements"in t),w.addTest("history",(function(){var e=navigator.userAgent;return!!e&&(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&t.history&&"pushState"in t.history}));var j=[""].concat(_);y._domPrefixesAll=j,w.addTest("pointerevents",(function(){for(var e=0,t=j.length;e<t;e++)if(E(j[e]+"pointerdown"))return!0;return!1}));var M=!0;try{t.postMessage({toString:function(){M=!1}},"*")}catch(e){}w.addTest("postmessage",new Boolean("postMessage"in t)),w.addTest("postmessage.structuredclones",M),w.addTest("webgl",(function(){return"WebGLRenderingContext"in t}));var R=!1;try{R="WebSocket"in t&&2===t.WebSocket.CLOSING}catch(e){}w.addTest("websockets",R),w.addTest("cssanimations",v("animationName","a",!0)),function(){w.addTest("csscolumns",(function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e}));for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=v("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||v(n[r])),w.addTest("csscolumns."+e,t)}(),w.addTest("flexbox",v("flexBasis","1px",!0)),w.addTest("picture","HTMLPictureElement"in t),w.addAsyncTest((function(){var e,t,n=a("img"),r="sizes"in n;!r&&"srcset"in n?(e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){s("sizes",2===n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):s("sizes",r)})),w.addTest("srcset","srcset"in a("img")),w.addTest("webworkers","Worker"in t),function(){var e,t,n,r,i,s;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],(t=g[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?w[s[0]]=r:(w[s[0]]&&(!w[s[0]]||w[s[0]]instanceof Boolean)||(w[s[0]]=new Boolean(w[s[0]])),w[s[0]][s[1]]=r),b.push((r?"":"no-")+s.join("-"))}}(),i(b),delete y.addTest,delete y.addAsyncTest;for(var W=0;W<w._q.length;W++)w._q[W]();e.Modernizr=w}(window,window,document);
//# sourceMappingURL=index.9ac8d174.js.map
