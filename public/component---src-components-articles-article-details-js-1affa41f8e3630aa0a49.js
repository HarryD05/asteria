"use strict";(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[886],{3687:function(e,t,a){a.r(t);var l=a(5861),r=a(4687),n=a.n(r),c=a(7294),s=(a(5414),a(2506),a(6025)),i=a(9357),o=a(5347),u=a(2583),m=a(9667),f={"2BB760":"Biochem","9C2111":"Physics & Technology",BFAA34:"Econ &  Business",C8792C:"Humanities",622058:"Music","376B70":"Art & Media",AF70BD:"Literature & Philosophy",ACADED:"Politics & Philosophy","3E5FCA":"Maths"};t.default=function(e){var t=e.data,a="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",r=(0,c.useState)(null),h=r[0],d=r[1],E=a.slice(a.indexOf("articles")+9);"/"===E[E.length-1]&&(E=E.slice(0,E.length-1));var p=[],g={};(0,c.useEffect)((function(){window.scrollTo(0,0)}),[E]),(0,c.useEffect)((function(){(0,l.Z)(n().mark((function e(){var a,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allMarkdownRemark.nodes.forEach((function(e,t){"Article"===(e=e.frontmatter).type?p.push(Object.assign({},e,{index:t})):"Profile"===e.type&&(g[e.userID]=e)})),p.forEach((function(e){var t=[];e.userIDs.forEach((function(e){t.push(g[e])})),e.authors=t})),a={},l=0;case 4:if(!(l<p.length)){e.next=12;break}if(p[l].slug.slice(10)!==E){e.next=9;break}return p[l].html=t.allMarkdownRemark.nodes[p[l].index].html,a.articles=[p[l]],e.abrupt("break",12);case 9:l++,e.next=4;break;case 12:d((0,m.iR)(a));case 13:case"end":return e.stop()}}),e)})))()}),[E]);return h?c.createElement(c.Fragment,null,c.createElement(i.Z,{seo:Object.assign({},s.Z.ArticleDetails.SEO,{title:"Asteria | "+(0,m.j1)(h),image:(0,m.Se)(h),url:a})}),c.createElement("main",null,c.createElement(o.Z,null),c.createElement("div",{className:"coverImage",style:{backgroundImage:"url('"+("string"==typeof(0,m.Se)(h)?(0,m.Se)(h):(0,m.Se)(h).default)+"')"}}),c.createElement("div",{className:"articleDetails"},c.createElement("a",{className:"subject-hover bg"+(0,m.YS)(h)+"-light",href:"/categories",onClick:function(){window.localStorage.setItem("hash",(0,m.YS)(h))}},c.createElement("p",null,""+f[(0,m.YS)(h)])),c.createElement("div",{className:"top"},c.createElement("div",{className:"authors"},function(){for(var e=[],t=0;t<(0,m.je)(h).length;t++)e.push(c.createElement("div",{className:"author"},c.createElement("a",{className:"authorImg",href:(0,m.fF)(h)[t]},c.createElement("img",{src:"string"==typeof(0,m.py)(h)[t]?(0,m.py)(h)[t]:(0,m.py)(h)[t].default,alt:"Profile picture of "+(0,m.je)(h)[t]})),c.createElement("div",{className:"authorDetails"},c.createElement("a",{className:"name",href:(0,m.fF)(h)[t]},(0,m.je)(h)[t]),c.createElement("br",null),c.createElement("a",{className:"pronouns",href:(0,m.fF)(h)[t]},(0,m.xF)(h)[t]))));return e}()),c.createElement("div",{className:"details"},c.createElement("h1",null,(0,m.j1)(h)),c.createElement("p",null,(0,m.HW)(h)))),c.createElement("div",{className:"content a"+(0,m.YS)(h),dangerouslySetInnerHTML:{__html:(0,m.Fw)(h)}}),function(){var e={URL:(0,m.Bi)(h),Title:(0,m.OL)(h)};if(null!==e.URL)return c.createElement("div",{className:"video_container"},c.createElement("iframe",{src:e.URL,title:e.Title,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}())),c.createElement(u.Z,null)):null}}}]);
//# sourceMappingURL=component---src-components-articles-article-details-js-1affa41f8e3630aa0a49.js.map