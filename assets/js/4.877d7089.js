(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,,,function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(31)("wks"),o=r(24),i=r(9).Symbol,c="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=e},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(11);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){t.exports=!r(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(12),o=r(29),i=r(30),c=Object.defineProperty;n.f=r(13)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(19);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(15),o=r(28);t.exports=r(13)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(9),o=r(14),i=r(18),c=r(22),u=r(17),a=function(t,n,r){var s,f,l,v,p=t&a.F,h=t&a.G,d=t&a.S,_=t&a.P,y=t&a.B,m=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,x=h?o:o[n]||(o[n]={}),g=x.prototype||(x.prototype={});for(s in h&&(r=n),r)l=((f=!p&&m&&void 0!==m[s])?m:r)[s],v=y&&f?u(l,e):_&&"function"==typeof l?u(Function.call,l):l,m&&c(m,s,l,t&a.U),x[s]!=l&&i(x,s,v),_&&g[s]!=l&&(g[s]=l)};e.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(9),o=r(18),i=r(23),c=r(24)("src"),u=Function.toString,a=(""+u).split("toString");r(14).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var s="function"==typeof r;s&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(s&&(i(r,c)||o(r,c,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:u?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports={}},function(t,n,r){var e=r(11),o=r(9).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){t.exports=!r(13)&&!r(16)(function(){return 7!=Object.defineProperty(r(26)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(11);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(14),o=r(9),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(33),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(15).f,o=r(23),i=r(10)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(20),o=r(10)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,r){var e,o,i,c=r(17),u=r(48),a=r(38),s=r(26),f=r(9),l=f.process,v=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,_=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){m.call(t.data)};v&&p||(v=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++_]=function(){u("function"==typeof t?t:Function(t),n)},e(_),_},p=function(t){delete y[t]},"process"==r(20)(l)?e=function(t){l.nextTick(c(m,t,1))}:d&&d.now?e=function(t){d.now(c(m,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=x,e=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(e=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):e="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(c(m,t,1),0)}),t.exports={set:v,clear:p}},function(t,n,r){"use strict";var e=r(19);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}(t)}},function(t,n,r){var e=r(9).document;t.exports=e&&e.documentElement},function(t,n,r){"use strict";var e=r(9),o=r(15),i=r(13),c=r(10)("species");t.exports=function(t){var n=e[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},,function(t,n,r){"use strict";var e,o,i,c,u=r(27),a=r(9),s=r(17),f=r(35),l=r(21),v=r(11),p=r(19),h=r(42),d=r(43),_=r(47),y=r(36).set,m=r(49)(),x=r(37),g=r(50),w=r(51),b=r(52),j=a.TypeError,P=a.process,S=P&&P.versions,E=S&&S.v8||"",O=a.Promise,T="process"==f(P),A=function(){},M=o=x.f,k=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[r(10)("species")]=function(t){t(A,A)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==E.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var n;return!(!v(t)||"function"!=typeof(n=t.then))&&n},F=function(t,n){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var e=t._v,o=1==t._s,i=0,c=function(n){var r,i,c,u=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&D(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&(f.exit(),c=!0)),r===n.promise?s(j("Promise-chain cycle")):(i=C(r))?i.call(r,a,s):a(r)):s(e)}catch(t){f&&!c&&f.exit(),s(t)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){y.call(a,function(){var n,r,e,o=t._v,i=R(t);if(i&&(n=g(function(){T?P.emit("unhandledRejection",o,t):(r=a.onunhandledrejection)?r({promise:t,reason:o}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",o)}),t._h=T||R(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){y.call(a,function(){var n;T?P.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},N=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),F(n,!0))},U=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw j("Promise can't be resolved itself");(n=C(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,s(U,e,1),s(N,e,1))}catch(t){N.call(e,t)}}):(r._v=t,r._s=1,F(r,!1))}catch(t){N.call({_w:r,_d:!1},t)}}};k||(O=function(t){h(this,O,"Promise","_h"),p(t),e.call(this);try{t(s(U,this,1),s(N,this,1))}catch(t){N.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(53)(O.prototype,{then:function(t,n){var r=M(_(this,O));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=T?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&F(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new e;this.promise=t,this.resolve=s(U,t,1),this.reject=s(N,t,1)},x.f=M=function(t){return t===O||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:O}),r(34)(O,"Promise"),r(39)("Promise"),c=r(14).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!k),"Promise",{resolve:function(t){return b(u&&this===c?O:this,t)}}),l(l.S+l.F*!(k&&r(54)(function(t){O.all(t).catch(A)})),"Promise",{all:function(t){var n=this,r=M(n),e=r.resolve,o=r.reject,i=g(function(){var r=[],i=0,c=1;d(t,!1,function(t){var u=i++,a=!1;r.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,r[u]=t,--c||e(r))},o)}),--c||e(r)});return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=M(n),e=r.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return o.e&&e(o.v),r.promise}})},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(17),o=r(44),i=r(45),c=r(12),u=r(32),a=r(46),s={},f={};(n=t.exports=function(t,n,r,l,v){var p,h,d,_,y=v?function(){return t}:a(t),m=e(r,l,n?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=u(t.length);p>x;x++)if((_=n?m(c(h=t[x])[0],h[1]):m(t[x]))===s||_===f)return _}else for(d=y.call(t);!(h=d.next()).done;)if((_=o(d,m,h.value,n))===s||_===f)return _}).BREAK=s,n.RETURN=f},function(t,n,r){var e=r(12);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(25),o=r(10)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){var e=r(35),o=r(10)("iterator"),i=r(25);t.exports=r(14).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(12),o=r(19),i=r(10)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||void 0==(r=e(c)[i])?n:o(r)}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(9),o=r(36).set,i=e.MutationObserver||e.WebKitMutationObserver,c=e.process,u=e.Promise,a="process"==r(20)(c);t.exports=function(){var t,n,r,s=function(){var e,o;for(a&&(e=c.domain)&&e.exit();t;){o=t.fn,t=t.next;try{o()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){c.nextTick(s)};else if(!i||e.navigator&&e.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(s)}}else r=function(){o.call(e,s)};else{var l=!0,v=document.createTextNode("");new i(s).observe(v,{characterData:!0}),r=function(){v.data=l=!l}}return function(e){var o={fn:e,next:void 0};n&&(n.next=o),t||(t=o,r()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){var e=r(9).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var e=r(12),o=r(11),i=r(37);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(22);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){var e=r(10)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],c=i[e]();c.next=function(){return{done:r=!0}},i[e]=function(){return c},t(i)}catch(t){}return r}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(41);var e={props:["slot-key"]},o=r(1),i=Object(o.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[r("h2",{attrs:{id:"ai-challenge-とは"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ai-challenge-とは","aria-hidden":"true"}},[t._v("#")]),t._v(" AI Challenge とは")]),t._v(" "),r("p",[t._v("AI Challenge 2018 は "),r("a",{attrs:{href:"https://www.recruit-jinji.jp/recruitment/code_fes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CODE FESTIVAL"),r("OutboundLink")],1),t._v(" に併設されたゲーム AI プログラミングコンテストです。")]),t._v(" "),r("p",[t._v("ゲーム AI プログラミングコンテストでは、ゲーム（例えば囲碁や将棋など）のコンピュータプレイヤーを操作する AI プログラムを作成し、そのパフォーマンスを競い合います。\nゲームをプレイする感覚でプログラミングを楽しめるため、初学者向けの教材として注目を浴びています。")]),t._v(" "),r("p",[t._v("今回の AI Challenge では、シンプルなルールの 2 人対戦型パズルゲームを出題しています。\nプログラミングを始めたばかりのあなたでも楽しめる内容となっていますので、是非ご参加ください。")]),t._v(" "),r("h2",{attrs:{id:"お知らせ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#お知らせ","aria-hidden":"true"}},[t._v("#")]),t._v(" お知らせ")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("2018/11/03 (土)")]),t._v(" 本サイトを公開しました。")])])])},[],!1,null,null,null);i.options.__file="index.md";n.default=i.exports}]]);