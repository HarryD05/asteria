/*! For license information please see component---src-components-articles-article-details-js-3610d258dfa3056ec050.js.LICENSE.txt */
(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[886],{3687:function(t,e,r){"use strict";r.r(e);var n=r(5861),o=r(4687),i=r.n(o),a=r(7294),c=r(8130),l=r(262),u=r(5347),s=r(4663),f=r(9667),h={"2BB760":"Biochem","9C2111":"Physics & Technology",BFAA34:"Econ &  Business",C8792C:"Humanities",622058:"Music","376B70":"Art & Media",AF70BD:"Literature & Philosophy",ACADED:"Politics & Philosophy","3E5FCA":"Maths"};e.default=function(t){var e=t.data,r="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",o=(0,a.useState)(null),p=o[0],d=o[1],m=r.slice(r.indexOf("articles")+9);"/"===m[m.length-1]&&(m=m.slice(0,m.length-1));var y=[],v={};(0,a.useEffect)((function(){window.scrollTo(0,0),-1!==window.location.hash.indexOf("#bibliography")&&setTimeout((function(){document.getElementById(window.location.hash.slice(1,13)).scrollIntoView({behavior:"smooth"})}),500)}),[m]),(0,a.useEffect)((function(){(0,n.Z)(i().mark((function t(){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.allMarkdownRemark.nodes.forEach((function(t,e){"Article"===(t=t.frontmatter).type?y.push(Object.assign({},t,{index:e})):"Profile"===t.type&&(v[t.userID]=t)})),y.forEach((function(t){var e=[];t.userIDs.forEach((function(t){e.push(v[t])})),t.authors=e})),r={},n=0;case 4:if(!(n<y.length)){t.next=12;break}if(y[n].slug.slice(10)!==m){t.next=9;break}return y[n].html=e.allMarkdownRemark.nodes[y[n].index].html,r.articles=[y[n]],t.abrupt("break",12);case 9:n++,t.next=4;break;case 12:d((0,f.iR)(r));case 13:case"end":return t.stop()}}),t)})))()}),[m]);return p?a.createElement(a.Fragment,null,a.createElement(l.Z,{seo:Object.assign({},c.Z.ArticleDetails.SEO,{title:"Asteria | "+(0,f.j1)(p),image:(0,f.Se)(p),url:r})}),a.createElement("main",null,a.createElement(u.Z,null),a.createElement("div",{className:"coverImage",style:{backgroundImage:"url('"+("string"==typeof(0,f.Se)(p)?(0,f.Se)(p):(0,f.Se)(p).default)+"')"}}),a.createElement("div",{className:"articleDetails"},a.createElement("a",{className:"subject-hover bg"+(0,f.YS)(p)+"-light",href:"/articles",onClick:function(){window.localStorage.setItem("hash",(0,f.YS)(p))}},a.createElement("p",null,""+h[(0,f.YS)(p)])),a.createElement("div",{className:"top"},a.createElement("div",{className:"authors"},function(){for(var t=[],e=0;e<(0,f.je)(p).length;e++)t.push(a.createElement("div",{className:"author"},a.createElement("a",{className:"authorImg",href:(0,f.fF)(p)[e]},a.createElement("img",{src:"string"==typeof(0,f.py)(p)[e]?(0,f.py)(p)[e]:(0,f.py)(p)[e].default,alt:"Profile picture of "+(0,f.je)(p)[e]})),a.createElement("div",{className:"authorDetails"},a.createElement("a",{className:"name",href:(0,f.fF)(p)[e]},(0,f.je)(p)[e]),a.createElement("br",null),a.createElement("a",{className:"pronouns",href:(0,f.fF)(p)[e]},(0,f.xF)(p)[e]))));return t}()),a.createElement("div",{className:"details"},a.createElement("div",{className:"a"+(0,f.YS)(p)},a.createElement("h1",null,(0,f.j1)(p))),a.createElement("p",null,(0,f.HW)(p)))),a.createElement("div",{className:"content a"+(0,f.YS)(p),dangerouslySetInnerHTML:{__html:(0,f.Fw)(p)}}),function(){var t={URL:(0,f.Bi)(p),Title:(0,f.OL)(p)};if(null!==t.URL)return a.createElement("div",{className:"video_container"},a.createElement("iframe",{src:t.URL,title:t.Title,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}())),a.createElement(s.Z,null)):null}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var p={};function d(){}function m(){}function y(){}var v={};s(v,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&i.call(w,c)&&(v=w);var E=y.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,a,c,l){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=y,s(E,"constructor",y),s(y,"constructor",m),m.displayName=s(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),s(E,u,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-components-articles-article-details-js-3610d258dfa3056ec050.js.map