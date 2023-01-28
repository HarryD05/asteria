/*! For license information please see component---src-components-performances-performance-details-js-9edafdf1e3d853ca0544.js.LICENSE.txt */
(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[391],{1797:function(t,e,r){"use strict";r.r(e);var n=r(5861),o=r(4687),i=r.n(o),a=r(7294),u=r(357),c=r(262),l=r(3088),s=r(2209),f=r(8443);e.default=function(t){var e=t.data,r="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",o=(0,a.useState)(null),h=o[0],p=o[1],m=r.slice(r.indexOf("performances")+13);"/"===m[m.length-1]&&(m=m.slice(0,m.length-1));var d=[],v={};(0,a.useEffect)((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),[m]),(0,a.useEffect)((function(){(0,n.Z)(i().mark((function t(){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.allMarkdownRemark.nodes.forEach((function(t,e){"Performance"===(t=t.frontmatter).type?d.push(Object.assign({},t,{index:e})):"Profile"===t.type&&(v[t.userID]=t)})),d.forEach((function(t){var e=[];t.userIDs.forEach((function(t){e.push(v[t])})),t.authors=e})),r={},n=0;case 4:if(!(n<d.length)){t.next=13;break}if(d[n].slug.slice(14)!==m){t.next=10;break}return console.log("here"),d[n].html=e.allMarkdownRemark.nodes[d[n].index].html,r.performances=[d[n]],t.abrupt("break",13);case 10:n++,t.next=4;break;case 13:p((0,f.Er)(r)),console.log((0,f.Er)(r));case 15:case"end":return t.stop()}}),t)})))()}),[m]);var y=function(){return"string"==typeof(0,f.GY)(h)?(0,f.GY)(h):(0,f.GY)(h).default};return h?a.createElement(a.Fragment,null,a.createElement(c.Z,{seo:Object.assign({},u.Z.PerformanceDetails.SEO,{title:"Asteria | "+(0,f.YT)(h),image:y(),url:r})}),a.createElement("main",null,a.createElement(l.Z,null),a.createElement("div",{className:"coverImage",style:{backgroundImage:"url('"+y()+"')"}}),a.createElement("div",{className:"performanceDetails"},a.createElement("div",{className:"top"},a.createElement("div",{className:"authors"},function(){for(var t=[],e=0;e<(0,f.je)(h).length;e++)t.push(a.createElement("div",{className:"author"},a.createElement("a",{className:"authorImg",href:(0,f.fF)(h)[e]},a.createElement("img",{src:"string"==typeof(0,f.py)(h)[e]?(0,f.py)(h)[e]:(0,f.py)(h)[e].default,alt:"Profile picture of "+(0,f.je)(h)[e]})),a.createElement("div",{className:"authorDetails"},a.createElement("a",{className:"name",href:(0,f.fF)(h)[e]},(0,f.je)(h)[e]),a.createElement("br",null),a.createElement("a",{className:"pronouns",href:(0,f.fF)(h)[e]},(0,f.xF)(h)[e]))));return t}()),a.createElement("div",{className:"details"},a.createElement("h1",null,(0,f.YT)(h)),a.createElement("em",null,(0,f.NT)(h)),a.createElement("p",null,(0,f.ul)(h)))),a.createElement("div",{className:"performanceContent",dangerouslySetInnerHTML:{__html:(0,f.mF)(h)}}))),a.createElement(s.Z,null)):null}},8443:function(t,e,r){"use strict";r.d(e,{Er:function(){return o},GY:function(){return l},L3:function(){return n},NT:function(){return a},YT:function(){return i},fF:function(){return h},je:function(){return s},mF:function(){return c},py:function(){return p},ul:function(){return u},xF:function(){return f}});var n=function(t){return t&&t.length&&t.map((function(t){return{Image:r(4373)("./"+t.preview_image),Title:t.title,Composer:t.composer,Authors:t.authors,LinkTo:t.slug,Issue:t.issue}}))},o=function(t,e){return void 0===e&&(e=!0),t&&t.performances&&t.performances[0]&&{Title:t.performances[0].title,Composer:t.performances[0].composer,Image:r(4373)("./"+t.performances[0].preview_image),Description:t.performances[0].description,Authors:t.performances[0].authors.map((function(t){return{Name:t.first_name+" "+t.surname,LinkTo:t.slug,Pronouns:t.pronouns,School:t.school,Image:r(7728)("./"+t.profile_picture)}})),Issue:t.performances[0].issue,LinkTo:t.performances[0].slug,MarkDownContent:e?t.performances[0].html:null,PerformanceID:e?null:t.performances[0].performanceID}},i=function(t){return null==t?"":t.Title},a=function(t){return null==t?"":t.Composer},u=function(t){return null==t?"":t.Description},c=function(t){return null==t?"":t.MarkDownContent},l=function(t){return null==t||null===t.Image||void 0===t.Image||""===t.Image?null:t.Image},s=function(t){return null==t?"":t.Authors.map((function(t){return t.Name}))},f=function(t){return null==t?"":t.Authors.map((function(t){return t.Pronouns}))},h=function(t){return null==t?"":t.Authors.map((function(t){return t.LinkTo}))},p=function(t){return null==t||null===t.Image||void 0===t.Image||""===t.Image?null:t.Authors.map((function(t){return t.Image}))}},7985:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/SheetMusic-701751d7dc7f05263ea9f04da0e7580f.jpg"},1993:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/netflix-92b7d5cb232cf2373a6dc469fad0831c.jpg"},4373:function(t,e,r){var n={"./SheetMusic.jpg":7985,"./netflix.jpg":1993};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=4373},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=f;var p={};function m(){}function d(){}function v(){}var y={};s(y,u,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(I([])));w&&w!==r&&i.call(w,u)&&(y=w);var x=v.prototype=m.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,a,u,c){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,s(x,"constructor",v),s(v,"constructor",d),d.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(b.prototype),s(b.prototype,c,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),s(x,l,"Generator"),s(x,u,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-components-performances-performance-details-js-9edafdf1e3d853ca0544.js.map