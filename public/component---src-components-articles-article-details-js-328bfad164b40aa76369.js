"use strict";(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[886],{3687:function(e,t,a){a.r(t);var l=a(5861),r=a(4687),n=a.n(r),c=a(7294),s=a(5540),i=a(6025),o=a(262),u=a(5347),m=a(2583),f=a(7551),h={"2BB760":"Biochem","9C2111":"Physics & Technology",BFAA34:"Econ &  Business",C8792C:"Humanities",622058:"Music","376B70":"Art & Media",AF70BD:"Literature & Philosophy",ACADED:"Politics & Philosophy","3E5FCA":"Maths"};t.default=function(e){var t=e.data,a="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",r=(0,c.useState)(null),d=r[0],E=r[1],p=a.slice(a.indexOf("articles")+9);"/"===p[p.length-1]&&(p=p.slice(0,p.length-1));var g=[],w={};(0,c.useEffect)((function(){window.scrollTo(0,0)}),[p]),(0,c.useEffect)((function(){(0,l.Z)(n().mark((function e(){var a,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allMarkdownRemark.edges.forEach((function(e,t){"Article"===(e=e.node.frontmatter).type?g.push(Object.assign({},e,{index:t})):w[e.userID]=e})),g.forEach((function(e){var t=[];e.userIDs.forEach((function(e){t.push(w[e])})),e.authors=t})),a={},l=0;case 4:if(!(l<g.length)){e.next=12;break}if(g[l].slug.slice(10)!==p){e.next=9;break}return g[l].html=t.allMarkdownRemark.edges[g[l].index].node.html,a.articles=[g[l]],e.abrupt("break",12);case 9:l++,e.next=4;break;case 12:E((0,f.iR)(a));case 13:case"end":return e.stop()}}),e)})))()}),[p]);return d?c.createElement(c.Fragment,null,c.createElement(o.Z,{seo:Object.assign({},i.Z.ArticleDetails.SEO,{title:"Asteria | "+(0,f.j1)(d),image:(0,f.Se)(d),url:a})}),c.createElement("main",null,c.createElement(u.Z,null),c.createElement("div",{className:"coverImage",style:{backgroundImage:"url('"+("string"==typeof(0,f.Se)(d)?(0,f.Se)(d):(0,f.Se)(d).default)+"')"}}),c.createElement("div",{className:"articleDetails"},c.createElement("a",{className:"subject-hover bg"+(0,f.YS)(d)+"-light",href:"/categories",onClick:function(){window.localStorage.setItem("hash",(0,f.YS)(d))}},c.createElement("p",null,""+h[(0,f.YS)(d)])),c.createElement("div",{className:"top"},c.createElement("div",{className:"authorImages"},function(){for(var e=[],t=0;t<(0,f.je)(d).length;t++)e.push(c.createElement("a",{className:"authorImg",href:(0,f.fF)(d)[t]},c.createElement("img",{src:"string"==typeof(0,f.py)(d)[t]?(0,f.py)(d)[t]:(0,f.py)(d)[t].default,alt:"Profile picture of "+(0,f.je)(d)[t]})));return e}()),c.createElement("div",{className:"details"},c.createElement("h1",null,(0,f.j1)(d)),c.createElement("p",null,(0,f.HW)(d)),function(){for(var e=[],t=0;t<(0,f.je)(d).length;t++)e.push(c.createElement("div",{className:"authorDetails"},c.createElement("a",{className:"name",href:(0,f.fF)(d)[t]},(0,f.je)(d)[t]),c.createElement("br",null),c.createElement("a",{className:"pronouns",href:(0,f.fF)(d)[t]},(0,f.xF)(d)[t])));return e}())),c.createElement(s.Z,{className:"content"},(0,f.Fw)(d)),function(){var e={URL:(0,f.Bi)(d),Title:(0,f.OL)(d)};if(null!==e.URL)return c.createElement("div",{className:"video_container"},c.createElement("iframe",{src:e.URL,title:e.Title,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}())),c.createElement(m.Z,null)):null}}}]);
//# sourceMappingURL=component---src-components-articles-article-details-js-328bfad164b40aa76369.js.map