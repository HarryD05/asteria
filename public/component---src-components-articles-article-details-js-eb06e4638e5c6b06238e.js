"use strict";(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[886],{3687:function(e,t,a){a.r(t);var l=a(5861),r=a(4687),n=a.n(r),c=a(7294),s=a(5540),i=a(6025),o=a(262),u=a(5347),m=a(2583),f=a(7551),d={"2BB760":"Biology & Chemistry","9C2111":"Physics & Technology",BFAA34:"Econ &  Business",C8792C:"Humanities",622058:"Music","376B70":"Art & Media",AF70BD:"Literature & Philosophy",CDCEED:"Politics & Philosophy","3E5FCA":"Maths"};t.default=function(e){var t=e.data,a="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",r=(0,c.useState)(null),h=r[0],E=r[1],g=a.slice(a.indexOf("articles")+9);"/"===g[g.length-1]&&(g=g.slice(0,g.length-1));var p=[],w={};(0,c.useEffect)((function(){window.scrollTo(0,0)}),[g]),(0,c.useEffect)((function(){(0,l.Z)(n().mark((function e(){var a,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allMarkdownRemark.edges.forEach((function(e,t){"Article"===(e=e.node.frontmatter).type?p.push(Object.assign({},e,{index:t})):w[e.userID]=e})),p.forEach((function(e){e.author=w[e.userID]})),a={},l=0;case 4:if(!(l<p.length)){e.next=12;break}if(p[l].slug.slice(10)!==g){e.next=9;break}return p[l].html=t.allMarkdownRemark.edges[p[l].index].node.html,a.articles=[p[l]],e.abrupt("break",12);case 9:l++,e.next=4;break;case 12:E((0,f.iR)(a));case 13:case"end":return e.stop()}}),e)})))()}),[g]);return h?c.createElement(c.Fragment,null,c.createElement(o.Z,{seo:Object.assign({},i.Z.ArticleDetails.SEO,{title:"Asteria | "+(0,f.j1)(h),image:(0,f.Se)(h),url:a})}),c.createElement("main",null,c.createElement(u.Z,null),c.createElement("div",{className:"coverImage",style:{backgroundImage:"url('"+("string"==typeof(0,f.Se)(h)?(0,f.Se)(h):(0,f.Se)(h).default)+"')"}}),c.createElement("div",{className:"articleDetails"},c.createElement("a",{className:"subject-hover bg"+(0,f.YS)(h)+"-light",href:"/categories",onClick:function(){window.localStorage.setItem("hash",(0,f.YS)(h))}},c.createElement("p",null,""+d[(0,f.YS)(h)])),c.createElement("div",{className:"top"},c.createElement("a",{className:"authorImg",href:(0,f.XY)(h)},c.createElement("img",{src:"string"==typeof(0,f.N4)(h)?(0,f.N4)(h):(0,f.N4)(h).default,alt:"Profile picture of "+(0,f.U2)(h)})),c.createElement("div",{className:"details"},c.createElement("h1",null,(0,f.j1)(h)),c.createElement("p",null,(0,f.HW)(h)),c.createElement("div",{className:"authorDetails"},c.createElement("a",{className:"name",href:(0,f.XY)(h)},(0,f.U2)(h)),c.createElement("br",null),c.createElement("a",{className:"pronouns",href:(0,f.XY)(h)},(0,f.xF)(h))))),c.createElement(s.Z,{className:"content"},(0,f.Fw)(h)),function(){var e={URL:(0,f.Bi)(h),Title:(0,f.OL)(h)};if(console.log(e),null!==e.URL)return c.createElement("div",{className:"video_container"},c.createElement("iframe",{src:e.URL,title:e.Title,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))}())),c.createElement(m.Z,null)):null}}}]);
//# sourceMappingURL=component---src-components-articles-article-details-js-eb06e4638e5c6b06238e.js.map