(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[823],{7551:function(e,t,n){"use strict";n.d(t,{Bi:function(){return A},Fw:function(){return l},HW:function(){return o},N4:function(){return p},OJ:function(){return r},OL:function(){return f},Se:function(){return s},U2:function(){return m},XY:function(){return h},YS:function(){return u},iR:function(){return i},j1:function(){return c},xF:function(){return d}});var a=n(9787),r=function(e){return e&&e.length&&e.map((function(e){return{Image:n(8968)("./"+e.preview_image),Title:e.title,Subject:e.subject,Author:e.author,LinkTo:e.slug,Issue:e.issue,IsVideo:!!e.video_url}}))},i=function(e,t,r){return void 0===t&&(t=!0),void 0===r&&(r=!0),e&&e.articles&&e.articles[0]&&{Title:e.articles[0].title,Image:n(8968)("./"+e.articles[0].preview_image),Subject:e.articles[0].subject,Description:e.articles[0].description,Author:r?{Name:e.articles[0].author.first_name+" "+e.articles[0].author.surname,LinkTo:e.articles[0].author.slug,Pronouns:e.articles[0].author.pronouns,School:e.articles[0].author.school,Image:n(7728)("./"+e.articles[0].author.profile_picture)}:null,Video:{URL:e.articles[0].video_url,Title:e.articles[0].video_title,IsVideo:!!e.articles[0].video_url},Issue:e.articles[0].issue,LinkTo:e.articles[0].slug,MarkDownContent:t?(new a.Z).turndown(e.articles[0].html):null,ArticleID:t?null:e.articles[0].articleID}},c=function(e){return null==e?"":e.Title},o=function(e){return null==e?"":e.Description},u=function(e){return null==e?"":e.Subject},l=function(e){return null==e?"":e.MarkDownContent},s=function(e){return null==e||null===e.Image||void 0===e.Image||""===e.Image?null:e.Image},A=function(e){return null==e?"":e.Video.URL},f=function(e){return null==e?"":e.Video.Title},m=function(e){return null==e?"":e.Author.Name},d=function(e){return null==e?"":e.Author.Pronouns},h=function(e){return null==e?"":e.Author.LinkTo},p=function(e){return null==e||null===e.Image||void 0===e.Image||""===e.Image?null:e.Author.Image}},4874:function(e,t,n){"use strict";var a=n(7294);n(6025);t.Z=function(e){var t=e.Image,n=e.Subject,r=e.Title,i=e.Author,c=e.LinkTo,o=e.IsVideo,u=e.includeAuthor,l=void 0===u||u;return console.log(o),a.createElement("a",{href:c,className:"articlePreview bg"+n+"-light "+(l?"":"noAuthor")},a.createElement("div",{className:"top"},o?a.createElement("p",null,"Video"):null,a.createElement("div",{className:"img"},a.createElement("img",{src:"string"==typeof t?t:t.default,alt:"Preview picture for article: "+r}))),a.createElement("div",{className:"articleDetail"},a.createElement("h2",null,r),l?a.createElement("p",null,i.first_name+" "+i.surname):a.createElement("p",null)))}},544:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),r=n(5347),i=n(2583),c=n(262),o=n(4874),u=n(6025),l=[["2BB760","Biochem"],["9C2111","Physics & Technology"],["BFAA34","Econ &  Business"],["C8792C","Humanities"],["622058","Music"],["376B70","Art & Media"],["AF70BD","Literature & Philosophy"],["ACADED","Politics & Philosophy"],["3E5FCA","Maths"]],s=function(){return a.createElement("div",{className:"articleScroller"},l.map((function(e,t){return a.createElement("a",{className:"subject-hover",key:t,href:"#"+e[0],style:{top:105+30*t+"px"}},a.createElement("div",{className:"circle bg"+e[0]}),a.createElement("p",null,""+e[1]))})))},A=n.p+"static/Biochem-585ce96acd5f78ec83d27f7099970cc9.jpg",f=n.p+"static/Physics and Technology-d8893c133ea0d4e23ba3aae4ce11a0da.jpg",m=n.p+"static/Econ and Business-745c7c70ab6df0f7cf6b9d8e1e114c91.jpg",d=n.p+"static/Humanities-09e1aef9d53b2922bb2f4d48cb03eaaf.jpg",h=n.p+"static/Music-8508a269197661dc41709dd8736e20a5.jpg",p=n.p+"static/Art and Media-58d4ca37e808c4f11ffb2b555f941f79.jpg",g=n.p+"static/Literature and philosophy-fddd11f13d44f9078b7bd49c86870a99.jpg",I=n.p+"static/Politics and Philosophy-424112590f57def65def51a53c66a318.jpg",C=n.p+"static/Mathematics-a0ae5c902127fa241414eef80fdf9411.jpg",Q=n(7551),E=[["2BB760","Biochem",A],["9C2111","Physics & Technology",f],["BFAA34","Econ &  Business",m],["C8792C","Humanities",d],["622058","Music",h],["376B70","Art & Media",p],["AF70BD","Literature & Philosophy",g],["ACADED","Politics & Philosophy",I],["3E5FCA","Maths",C]],b=function(e){var t=e.data,n=(0,a.useState)([]),l=n[0],A=n[1];(0,a.useEffect)((function(){null!=window.localStorage.getItem("hash")&&(window.location.hash=window.localStorage.getItem("hash"),window.localStorage.clear());var e=[],n={};t.allMarkdownRemark.edges.forEach((function(t){"Article"===(t=t.node.frontmatter).type?e.push(t):n[t.userID]=t})),e.forEach((function(e){e.author=n[e.userID]})),A(e)}),[t]);return a.createElement(a.Fragment,null,a.createElement(r.Z,null),a.createElement("main",{className:"categories"},a.createElement(c.Z,{seo:u.Z.Categories.SEO}),a.createElement(s,null),a.createElement("h1",null,"Categories"),a.createElement("div",{className:"subjects"},function(){var e=(0,Q.OJ)(l);if(0===e)return a.createElement("p",null,"No articles");return E.map((function(t,n){return a.createElement("div",{className:"subject",key:n,id:t[0]},function(e){return 3===e.length?a.createElement("div",{className:"banner",style:{backgroundImage:"url('"+e[2]+"')"}}):a.createElement("h2",null,e[1])}(t),a.createElement("div",{className:"previews"},e.map((function(e,n){if(e.Subject===t[0])return a.createElement(o.Z,{key:n,Image:e.Image,Title:e.Title,Author:e.Author,LinkTo:e.LinkTo,Subject:e.Subject,IsVideo:e.IsVideo})}))))}))}())),a.createElement(i.Z,null))}},4550:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},2535:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/Earendel-c0241509fe11367fbe78f26c6d37d17f.jpg"},4619:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/Facism-3c1584511b776a87732a582b1ddf2d15.jpg"},5487:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/IAPPConcentrationGraph-af1aa44e5f57859ae601418d156d9194.png"},3206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/MathsImg1-08083bfe604a880ba9d2ce4cce83989e.png"},7225:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/Quantum-4a2732bb2499098fe9164b395e1f01b3.jpg"},8968:function(e,t,n){var a={"./BayesRule.png":4550,"./BioChemImg1.png":6987,"./Cardioid.jpg":5807,"./Earendel.jpg":2535,"./Facism.jpg":4619,"./IAPPConcentrationGraph.png":5487,"./MathsImg1.png":3206,"./Quantum.jpg":7225};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=8968}}]);
//# sourceMappingURL=component---src-pages-categories-js-16f18cb82be2e26f25b9.js.map