(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[906],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},4663:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(6016),i=r(1710),o=(r.p,r.p+"static/ReadingSchool-78f92b8a0d68e61fb58ea1400b924677.png"),c=r.p+"static/Kendrick-ddb5a22616e7ed772e28ea2f975a79f5.png",s=function(){return n.createElement("div",{className:"footer"},n.createElement("div",{className:"footerContent"},n.createElement("div",{className:"socialMedia"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:a.Z,alt:"Instagram logo"})),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:i.Z,alt:"LinkedIn logo"}))),n.createElement("div",{className:"buttons"},n.createElement("a",{href:"https://forms.office.com/r/T07YM8j0Y0",target:"_blank",rel:"noreferrer"},"Feedback")),n.createElement("div",{className:"contact"},n.createElement("p",null,"Contact us:",n.createElement("br",null),"theasteriamagazine@gmail.com")),n.createElement("div",{className:"schools"},n.createElement("a",{href:"https://www.kendrick.reading.sch.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:c,alt:"Kendrick logo",title:"Kendrick School"})),n.createElement("a",{href:"https://www.reading-school.co.uk/",target:"_blank",rel:"noreferrer"},n.createElement("img",{src:o,alt:"Reading School logo",title:"Reading School"})))),n.createElement("p",{className:"base"},"© 2022 Asteria | All Rights Reserved"))}},5347:function(e,t,r){"use strict";var n=r(7294),a=r(6016),i=r(1710),o=function(e){var t=e.click,r=e.isOpen;return n.createElement("div",{className:"toggle-btn "+(r?"side":"normal"),onClick:t},n.createElement("div",{className:"toggle-btn-line top"}),n.createElement("div",{className:"toggle-btn-line middle"}),n.createElement("div",{className:"toggle-btn-line bottom"}))},c=function(e){var t=e.isOpen,r=e.isDark,o=function(){return r?"invert":"noinvert"};return n.createElement(n.Fragment,null,n.createElement("div",{className:"backdrop "+(t?"show":"hide")}),n.createElement("div",{className:"sideDrawer "+(t?"show":"hide")},n.createElement("div",{className:"pages"},n.createElement("a",{href:"/articles"},"Articles"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About")),n.createElement("div",{className:"social-media"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:o(),src:a.Z,alt:"Instagram logo"})),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:o(),src:i.Z,alt:"LinkedIn logo"})))))};t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],s=(0,n.useState)(!0),l=s[0],u=s[1];(0,n.useEffect)((function(){null==localStorage.getItem("isDark")?window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),u(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),u(!1)):"1"===window.localStorage.getItem("isDark")?(document.body.setAttribute("data-theme","dark"),u(!0)):(document.body.removeAttribute("data-theme"),u(!1))}),[]);var f=function(){return l?"invert":"noinvert"};return n.createElement("div",{className:"navbar"},n.createElement(o,{isOpen:t,click:function(e){r(!t)}}),n.createElement(c,{isDark:l,isOpen:t}),n.createElement("div",{className:"contents"},n.createElement("div",{className:"logo"},n.createElement("a",{href:"/",className:"logo-img"})),n.createElement("div",{className:"pages"},n.createElement("a",{href:"/articles"},"Articles"),n.createElement("a",{href:"/meet-the-team"},"Meet the Team"),n.createElement("a",{href:"/about"},"About")),n.createElement("div",{className:"social-media"},n.createElement("a",{href:"https://www.instagram.com/the_asteria_magazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:f(),src:a.Z,alt:"Instagram logo"})),n.createElement("a",{href:"https://www.linkedin.com/company/theasteriamagazine/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:f(),src:i.Z,alt:"LinkedIn logo"})))),n.createElement("button",{className:"dark-btn",onClick:function(){"0"===localStorage.getItem("isDark")?(window.localStorage.setItem("isDark","1"),document.body.setAttribute("data-theme","dark"),u(!0)):(localStorage.setItem("isDark","0"),document.body.removeAttribute("data-theme"),u(!1))}},n.createElement("div",{className:"icon "+(l?"invert":"noinvert")})),n.createElement("button",{className:"up-btn",onClick:function(){return window.scrollTo(0,0)}},"↑"))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,a,i,o,c=r(7294),s=r(5697),l=r.n(s),u=r(4839),f=r.n(u),m=r(2993),d=r.n(m),p=r(6494),h=r.n(p),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",A="http-equiv",S="innerHTML",k="itemprop",O="name",C="property",N="rel",j="src",I="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",_="encodeSpecialCharacters",x="onChangeClientState",R="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],K="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),r=Q(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},W=function(e){return Q(e,x)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===N&&"canonical"===e[r].toLowerCase()||s===N&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==S&&c!==T&&c!==k||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=h()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;se(v.BODY,n),se(v.HTML,a),ce(f,m);var d={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,o),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(K),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(K):r.getAttribute(K)!==o.join(",")&&r.setAttribute(K,o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(K,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[K]=!0,a=fe(r,n),[c.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[K]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===S||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(v.BASE,t,n),bodyAttributes:me(g,r,n),htmlAttributes:me(b,a,n),link:me(v.LINK,i,n),meta:me(v.META,o,n),noscript:me(v.NOSCRIPT,c,n),script:me(v.SCRIPT,s,n),style:me(v.STYLE,l,n),title:me(v.TITLE,{title:f,titleAttributes:m},n)}},pe=f()((function(e){return{baseTag:G([E,I],e),bodyAttributes:$(g,e),defer:Q(e,L),encode:Q(e,_),htmlAttributes:$(b,e),linkTags:J(v.LINK,[N,E],e),metaTags:J(v.META,[O,w,A,C,k],e),noscriptTags:J(v.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:J(v.SCRIPT,[j,S],e),styleTags:J(v.STYLE,[T],e),title:V(e),titleAttributes:$(y,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),he=(a=pe,o=i=function(e){function t(){return B(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[q({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return q({},a,((t={})[n.type]=o,t.titleAttributes=q({},i),t));case v.BODY:return q({},a,{bodyAttributes:q({},i)});case v.HTML:return q({},a,{htmlAttributes:q({},i)})}return q({},a,((r={})[n.type]=q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=q({},t);return Object.keys(e).forEach((function(t){var n;r=q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(F(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=q({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge="<URL>",be=function(e){var t=e.seo,r=void 0===t?{}:t,n=[],a="Asteria";if(null!==r.title&&void 0!==r.title&&""!==r.title&&(a=r.title,n.push({name:"twitter:title",content:r.title}),n.push({name:"og:title",content:r.title}),n.push({itemprop:"name",content:r.title}),n.push({name:"twitter:card",content:"summary_large_image"}),n.push({name:"og:type",content:"website"}),n.push({name:"og:site_name",content:"Asteria"}),null!==r.description&&void 0!==r.description&&(n.push({name:"description",content:r.description}),n.push({name:"twitter:description",content:r.description}),n.push({name:"og:description",content:r.description}),n.push({itemprop:"description",content:r.description})),null!==r.image&&void 0!==r.image&&(n.push({name:"image",content:ge+r.image}),n.push({name:"og:image",content:ge+r.image}),n.push({name:"twitter:image",content:ge+r.image}),n.push({itemprop:"image",content:ge+r.image})),null!==r.keywords&&void 0!==r.keywords&&n.push({name:"keywords",content:r.keywords}),null!==r.url&&void 0!==r.url)){var i=r.url;"http"!==i.slice(0,4).toLowerCase()&&(i=ge+i),"/"!==i.slice(i.length-1)&&(i+="/"),n.push({name:"twitter:url",content:i}),n.push({name:"og:url",content:i})}return n.length>0?c.createElement(he,{htmlAttributes:{lang:"en"},meta:n,title:a}):null}},8130:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n={Home:{SEO:{title:"Asteria",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:""}},About:{SEO:{title:"Asteria | About",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"about"}},Articles:{SEO:{title:"Asteria | Articles",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"articles"}},MeetTheTeam:{SEO:{title:"Asteria | Meet the Team",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students.",url:"meet-the-team"}},ProfileDetails:{SEO:{title:"Asteria | Profile",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students."}},ArticleDetails:{SEO:{title:"Asteria | Article",description:"Reading School & Kendrick's new STEAM magazine, the hub of STEAM articles from our students."}},SliderArticles:{Articles:["2","12","9","6"]}}},6016:function(e,t,r){"use strict";t.Z=r.p+"static/Instagram-ff9721125ed9d2cea46ec1f6bc46b7b6.png"},1710:function(e,t,r){"use strict";t.Z=r.p+"static/LinkedIn-032cf8a63be2f0f4d42571a0df1c7b87.png"}}]);
//# sourceMappingURL=ba43a62a240a1247603e90291dab9cfc9b9a84a6-023d51dabff35b2ca06a.js.map