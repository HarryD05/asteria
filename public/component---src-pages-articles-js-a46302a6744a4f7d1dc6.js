"use strict";(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[374],{4874:function(e,t,a){var c=a(7294);a(5638);t.Z=function(e){var t=e.Image,a=e.Subject,n=e.Title,i=e.Issue,r=e.Authors,l=e.LinkTo,s=e.IsVideo,o=e.includeAuthor,u=void 0===o||o;return c.createElement("a",{href:l,className:"articlePreview bg"+a+"-light "+(u?"":"noAuthor")},void 0!==i?c.createElement("p",{className:"issue"},i):null,c.createElement("div",{className:"top"},s?c.createElement("p",{className:"video"},"Video"):null,c.createElement("div",{className:"img"},c.createElement("img",{src:"string"==typeof t?t:t.default,alt:"Preview picture for article: "+n}))),c.createElement("div",{className:"articleDetail"},c.createElement("h2",null,n),u?c.createElement("div",{className:"authors"},r.map((function(e){return c.createElement("p",null,e.first_name+" "+e.surname)}))):c.createElement("p",null)))}},5658:function(e,t,a){var c=a(7294);t.Z=function(){return c.createElement("div",{className:"spinner-container"},c.createElement("div",{className:"loading-spinner"}))}},5717:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var c=a(7294),n=a(3088),i=a(4663),r=a(262),l=a(4874),s=a(5638),o=[["2BB760","Biochem"],["9C2111","Physics & Technology"],["BFAA34","Econ & Business"],["C8792C","Humanities"],["622058","Music"],["376B70","Art & Media"],["AF70BD","Literature & Philosophy"],["ACADED","Politics & Philosophy"],["3E5FCA","Maths"]],u=function(){return c.createElement("div",{className:"articleScroller"},o.map((function(e,t){return c.createElement("a",{className:"subject-hover",key:t,href:"#"+e[0],style:{top:140+30*t+"px"}},c.createElement("div",{className:"circle bg"+e[0]}),c.createElement("p",null,""+e[1]))})))},m=a(5658),d=a.p+"static/Biochem-585ce96acd5f78ec83d27f7099970cc9.jpg",f=a.p+"static/Physics and Technology-d8893c133ea0d4e23ba3aae4ce11a0da.jpg",h=a.p+"static/Econ and Business-745c7c70ab6df0f7cf6b9d8e1e114c91.jpg",p=a.p+"static/Humanities-09e1aef9d53b2922bb2f4d48cb03eaaf.jpg",E=a.p+"static/Music-8508a269197661dc41709dd8736e20a5.jpg",g=a.p+"static/Art and Media-58d4ca37e808c4f11ffb2b555f941f79.jpg",b=a.p+"static/Literature and philosophy-fddd11f13d44f9078b7bd49c86870a99.jpg",v=a.p+"static/Politics and Philosophy-424112590f57def65def51a53c66a318.jpg",A=a.p+"static/Mathematics-a0ae5c902127fa241414eef80fdf9411.jpg",y=a(3546),B=a(9667),N=[["2BB760","Biochem",d],["9C2111","Physics & Technology",f],["BFAA34","Econ &  Business",h],["C8792C","Humanities",p],["622058","Music",E],["376B70","Art & Media",g],["AF70BD","Literature & Philosophy",b],["ACADED","Politics & Philosophy",v],["3E5FCA","Maths",A]],j=function(e){var t=e.data,a=(0,c.useState)([]),o=a[0],d=a[1];(0,c.useEffect)((function(){null!=window.localStorage.getItem("hash")?(window.location.hash=window.localStorage.getItem("hash"),window.localStorage.clear()):window.location.hash="subjects"}),[]),(0,c.useEffect)((function(){var e=[],a={};t.allMarkdownRemark.nodes.forEach((function(t){"Article"===(t=t.frontmatter).type?e.push(t):"Profile"===t.type&&(a[t.userID]=t)})),e.forEach((function(e){var t=[];e.userIDs.forEach((function(e){t.push(a[e])})),e.authors=t})),d(e)}),[t]);return c.createElement(c.Fragment,null,c.createElement(n.Z,null),c.createElement("main",{className:"articles"},c.createElement(r.Z,{seo:s.Z.Articles.SEO}),c.createElement(u,null),c.createElement("div",{className:"credits"},c.createElement("a",{className:"bannerCredits",href:"/profiles/y"},c.createElement("img",{src:y.default,alt:"Siddhi Badole"}),c.createElement("p",null,"A huge thanks to banner artist",c.createElement("br",null),"Siddhi Badole"))),c.createElement("div",{id:"subjects"},function(){var e=(0,B.OJ)(o);if(0===e)return c.createElement(m.Z,null);return N.map((function(t,a){return c.createElement("div",{className:"subject",key:a,id:t[0]},function(e,t){return 3===e.length?c.createElement("div",{className:"banner "+(0===t?"top":""),style:{backgroundImage:"url('"+e[2]+"')"}}):c.createElement("h2",null,e[1])}(t,a),c.createElement("div",{className:"previews"},e.map((function(e,a){if(e.Subject===t[0])return c.createElement(l.Z,{key:a,Image:e.Image,Title:e.Title,Issue:e.Issue,Authors:e.Authors,LinkTo:e.LinkTo,Subject:e.Subject,IsVideo:e.IsVideo})}))))}))}())),c.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-articles-js-a46302a6744a4f7d1dc6.js.map