(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[343],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},2583:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=r(6016),i=r(1688),a=r(9871),c=r.p+"static/ReadingSchool-78f92b8a0d68e61fb58ea1400b924677.png",s=r.p+"static/Kendrick-ddb5a22616e7ed772e28ea2f975a79f5.png",l=function(){return n.createElement("div",{className:"footer"},n.createElement("div",{className:"footerContent"},n.createElement("div",{className:"socialMedia"},n.createElement("img",{src:o.Z,alt:"Instagram logo"}),n.createElement("img",{src:i.Z,alt:"Twitter logo"}),n.createElement("img",{src:a.Z,alt:"Facebook logo"})),n.createElement("div",{className:"buttons"},n.createElement("button",null,"Contact us"),n.createElement("button",null,"Feedback")),n.createElement("div",{className:"schools"},n.createElement("a",{href:"https://www.kendrick.reading.sch.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:s,alt:"Kendrick logo",title:"Kendrick School"})),n.createElement("a",{href:"https://www.reading-school.co.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:c,alt:"Reading School logo",title:"Reading School"})))),n.createElement("p",null,"© 2022 Asteria | All Rights Reserved"))}},5347:function(e,t,r){"use strict";var n=r(7294),o=r(6016),i=r(1688),a=r(9871),c=function(e){var t=e.click,r=e.isOpen;return n.createElement("div",{className:"toggle-btn "+(r?"side":"normal"),onClick:t},n.createElement("div",{className:"toggle-btn-line top"}),n.createElement("div",{className:"toggle-btn-line middle"}),n.createElement("div",{className:"toggle-btn-line bottom"}))},s=function(e){var t=e.isOpen,r=e.isDark,c=function(){return r?"invert":"noinvert"};return n.createElement(n.Fragment,null,n.createElement("div",{className:"backdrop "+(t?"show":"hide")}),n.createElement("div",{className:"sideDrawer "+(t?"show":"hide")},n.createElement("div",{className:"pages"},n.createElement("a",{href:"/categories"},"Categories"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About")),n.createElement("div",{className:"social-media"},n.createElement("img",{className:c(),src:o.Z,alt:"Instagram logo"}),n.createElement("img",{className:c(),src:i.Z,alt:"Twitter logo"}),n.createElement("img",{className:c(),src:a.Z,alt:"Facebook logo"}))))};t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],l=(0,n.useState)(!0),u=l[0],f=l[1];(0,n.useEffect)((function(){null==localStorage.getItem("isDark")?window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),f(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),f(!1)):"1"===window.localStorage.getItem("isDark")?(document.body.setAttribute("data-theme","dark"),f(!0)):(document.body.removeAttribute("data-theme"),f(!1))}),[]);var d=function(){return u?"invert":"noinvert"};return n.createElement("div",{className:"navbar"},n.createElement(c,{isOpen:t,click:function(e){r(!t)}}),n.createElement(s,{isDark:u,isOpen:t}),n.createElement("div",{className:"contents"},n.createElement("a",{href:"/",className:"logo"}),n.createElement("div",{className:"pages"},n.createElement("a",{href:"/categories"},"Categories"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About")),n.createElement("div",{className:"social-media"},n.createElement("img",{className:d(),src:o.Z,alt:"Instagram logo"}),n.createElement("img",{className:d(),src:i.Z,alt:"Twitter logo"}),n.createElement("img",{className:d(),src:a.Z,alt:"Facebook logo"}))),n.createElement("button",{className:"dark-btn",onClick:function(){"0"===localStorage.getItem("isDark")?(window.localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),f(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),f(!1))}},n.createElement("div",{className:"icon "+(u?"invert":"noinvert")})))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,o,i,a,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),f=r.n(u),d=r(2993),p=r.n(d),m=r(6494),h=r.n(m),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",A="http-equiv",S="innerHTML",k="itemprop",C="name",O="property",P="rel",I="src",j="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",x="onChangeClientState",D="titleTemplate",_=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Z="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),r=Q(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},W=function(e){return Q(e,x)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===P&&"canonical"===e[r].toLowerCase()||s===P&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==S&&c!==w&&c!==k||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;se(v.BODY,n),se(v.HTML,o),ce(f,d);var p={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Z),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(Z):r.getAttribute(Z)!==a.join(",")&&r.setAttribute(Z,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(Z,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Z]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[Z]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===S||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(g,r,n),htmlAttributes:de(b,o,n),link:de(v.LINK,i,n),meta:de(v.META,a,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,s,n),style:de(v.STYLE,l,n),title:de(v.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:G([E,j],e),bodyAttributes:$(g,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:$(b,e),linkTags:J(v.LINK,[P,E],e),metaTags:J(v.META,[C,T,A,O,k],e),noscriptTags:J(v.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:J(v.SCRIPT,[I,S],e),styleTags:J(v.STYLE,[w],e),title:V(e),titleAttributes:$(y,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return K(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[q({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return q({},o,((t={})[n.type]=a,t.titleAttributes=q({},i),t));case v.BODY:return q({},o,{bodyAttributes:q({},i)});case v.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((r={})[n.type]=q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=q({},t);return Object.keys(e).forEach((function(t){var n;r=q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=q({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ge="<URL>",be=function(e){var t=e.seo,r=void 0===t?{}:t,n=[],o="Asteria";if(null!==r.title&&void 0!==r.title&&""!==r.title&&(o=r.title,n.push({name:"twitter:title",content:r.title}),n.push({name:"og:title",content:r.title}),n.push({itemprop:"name",content:r.title}),n.push({name:"twitter:card",content:"summary_large_image"}),n.push({name:"og:type",content:"website"}),n.push({name:"og:site_name",content:"Asteria"}),null!==r.description&&void 0!==r.description&&(n.push({name:"description",content:r.description}),n.push({name:"twitter:description",content:r.description}),n.push({name:"og:description",content:r.description}),n.push({itemprop:"description",content:r.description})),null!==r.image&&void 0!==r.image&&(n.push({name:"image",content:ge+r.image}),n.push({name:"og:image",content:ge+r.image}),n.push({name:"twitter:image",content:ge+r.image}),n.push({itemprop:"image",content:ge+r.image})),null!==r.keywords&&void 0!==r.keywords&&n.push({name:"keywords",content:r.keywords}),null!==r.url&&void 0!==r.url)){var i=r.url;"http"!==i.slice(0,4).toLowerCase()&&(i=ge+i),"/"!==i.slice(i.length-1)&&(i+="/"),n.push({name:"twitter:url",content:i}),n.push({name:"og:url",content:i})}return n.length>0?c.createElement(he,{htmlAttributes:{lang:"en"},meta:n,title:o}):null}},6025:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5807),o=r(6987),i={Home:{SEO:{title:"Asteria",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:""}},About:{SEO:{title:"Asteria | About",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"about"}},Categories:{SEO:{title:"Asteria | Categories",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"categories"}},MeetTheTeam:{SEO:{title:"Asteria | Meet the Team",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"meet-the-team"}},ProfileDetails:{SEO:{title:"Asteria | Profile",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students."}},ArticleDetails:{SEO:{title:"Asteria | Article",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students."}},SliderArticles:{Articles:[{Title:"Cardioid: The heart of Pascal's Limaçon",Description:"Cycloid really has been the fame of the seventeenth century, but more importantly it led to the possibility of a circle moving around or inside another circle. This is when all the possible kinds of curves started to emerge, starting from hypotrochoids to epicycloids to other innumerable curves. Among these, Cardioid is a curve that belongs to Limaçon of Pascal (discovered by Étienne Pascal).",Author:"Siddhi Badole",Image:n.default,ArticleLink:"/articles/8d9520b0-94ba-44c6-97bd-2d5a8e7e45cc",ProfileLink:"/profiles/aa40995c-750c-4a48-b1b0-e7bfb15e4cd4"},{Title:"Effect of IAPP on the proteome of cultured Rin-5F cells",Description:"Islet amyloid polypeptide (IAPP) or amylin deposits can be found in the islets of type 2 diabetes patients. The peptide is suggested to be involved in the etiology of the disease through formation of amyloid deposits and destruction of β islet cells, though the underlying molecular events leading from IAPP deposition to β cell death are still largely unknown.",Author:"Rishabh Luthra",Image:o.default,ArticleLink:"/articles/cb2cd7a4-41f7-4989-ae89-87aeb64803fc",ProfileLink:"/profiles/ba8c2047-d40a-4441-ba57-9a6fb94381f9"}]}}},6987:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/BioChemImg1-507ed5f237a902040f944b9906c9491f.png"},5807:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/Cardioid-154a2f4f38d03799b6b990f9a55a4388.jpg"},9871:function(e,t,r){"use strict";t.Z=r.p+"static/Facebook-68de61096571f4d805198f1837d00fbc.png"},6016:function(e,t,r){"use strict";t.Z=r.p+"static/Instagram-ff9721125ed9d2cea46ec1f6bc46b7b6.png"},1688:function(e,t,r){"use strict";t.Z=r.p+"static/Twitter-303d035cdcac86f4f1f0bc7a3f52b5db.png"}}]);
//# sourceMappingURL=0d8481c108ab85748f26cdcb513bd0e17921a390-7b679950cdaad0fdbd06.js.map