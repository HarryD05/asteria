"use strict";(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[823],{4874:function(e,t,a){var c=a(7294);a(6025);t.Z=function(e){var t=e.Image,a=e.Subject,n=e.Title,s=e.Issue,i=e.Authors,r=e.LinkTo,l=e.IsVideo,o=e.includeAuthor,u=void 0===o||o;return c.createElement("a",{href:r,className:"articlePreview bg"+a+"-light "+(u?"":"noAuthor")},void 0!==s?c.createElement("p",{className:"issue"},s):null,c.createElement("div",{className:"top"},l?c.createElement("p",{className:"video"},"Video"):null,c.createElement("div",{className:"img"},c.createElement("img",{src:"string"==typeof t?t:t.default,alt:"Preview picture for article: "+n}))),c.createElement("div",{className:"articleDetail"},c.createElement("h2",null,n),u?c.createElement("div",{className:"authors"},i.map((function(e){return c.createElement("p",null,e.first_name+" "+e.surname)}))):c.createElement("p",null)))}},544:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var c=a(7294),n=a(5347),s=a(2583),i=a(9357),r=a(4874),l=a(6025),o=[["2BB760","Biochem"],["9C2111","Physics & Technology"],["BFAA34","Econ & Business"],["C8792C","Humanities"],["622058","Music"],["376B70","Art & Media"],["AF70BD","Literature & Philosophy"],["ACADED","Politics & Philosophy"],["3E5FCA","Maths"]],u=function(){return c.createElement("div",{className:"articleScroller"},o.map((function(e,t){return c.createElement("a",{className:"subject-hover",key:t,href:"#"+e[0],style:{top:105+30*t+"px"}},c.createElement("div",{className:"circle bg"+e[0]}),c.createElement("p",null,""+e[1]))})))},m=a.p+"static/Biochem-585ce96acd5f78ec83d27f7099970cc9.jpg",d=a.p+"static/Physics and Technology-d8893c133ea0d4e23ba3aae4ce11a0da.jpg",f=a.p+"static/Econ and Business-745c7c70ab6df0f7cf6b9d8e1e114c91.jpg",h=a.p+"static/Humanities-09e1aef9d53b2922bb2f4d48cb03eaaf.jpg",p=a.p+"static/Music-8508a269197661dc41709dd8736e20a5.jpg",E=a.p+"static/Art and Media-58d4ca37e808c4f11ffb2b555f941f79.jpg",g=a.p+"static/Literature and philosophy-fddd11f13d44f9078b7bd49c86870a99.jpg",b=a.p+"static/Politics and Philosophy-424112590f57def65def51a53c66a318.jpg",v=a.p+"static/Mathematics-a0ae5c902127fa241414eef80fdf9411.jpg",A=a(9667),y=[["2BB760","Biochem",m],["9C2111","Physics & Technology",d],["BFAA34","Econ &  Business",f],["C8792C","Humanities",h],["622058","Music",p],["376B70","Art & Media",E],["AF70BD","Literature & Philosophy",g],["ACADED","Politics & Philosophy",b],["3E5FCA","Maths",v]],j=function(e){var t=e.data,a=(0,c.useState)([]),o=a[0],m=a[1];(0,c.useEffect)((function(){null!=window.localStorage.getItem("hash")&&(window.location.hash=window.localStorage.getItem("hash"),window.localStorage.clear());var e=[],a={};t.allMarkdownRemark.nodes.forEach((function(t){"Article"===(t=t.frontmatter).type?e.push(t):"Profile"===t.type&&(a[t.userID]=t)})),e.forEach((function(e){var t=[];e.userIDs.forEach((function(e){t.push(a[e])})),e.authors=t})),m(e)}),[t]);return c.createElement(c.Fragment,null,c.createElement(n.Z,null),c.createElement("main",{className:"categories"},c.createElement(i.Z,{seo:l.Z.Categories.SEO}),c.createElement(u,null),c.createElement("h1",null,"Categories"),c.createElement("div",{className:"subjects"},function(){var e=(0,A.OJ)(o);if(0===e)return c.createElement("p",null,"No articles");return y.map((function(t,a){return c.createElement("div",{className:"subject",key:a,id:t[0]},function(e){return 3===e.length?c.createElement("div",{className:"banner",style:{backgroundImage:"url('"+e[2]+"')"}}):c.createElement("h2",null,e[1])}(t),c.createElement("div",{className:"previews"},e.map((function(e,a){if(e.Subject===t[0])return c.createElement(r.Z,{key:a,Image:e.Image,Title:e.Title,Issue:e.Issue,Authors:e.Authors,LinkTo:e.LinkTo,Subject:e.Subject,IsVideo:e.IsVideo})}))))}))}())),c.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-categories-js-a1bb6dba48d84364db7e.js.map