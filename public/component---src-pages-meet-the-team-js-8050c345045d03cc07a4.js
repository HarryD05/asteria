(self.webpackChunkasteria=self.webpackChunkasteria||[]).push([[582],{1588:function(e,n,r){"use strict";r.d(n,{FF:function(){return c},hb:function(){return i},ix:function(){return a},m1:function(){return m},o2:function(){return o},py:function(){return s},tM:function(){return f},wZ:function(){return l},xm:function(){return u}});var t=r(9787),o=function(e){return e&&e.length&&e.map((function(e){return{Image:r(7728)("./"+e.profile_picture),Name:e.first_name+" "+e.surname,Role:e.role,LinkTo:e.slug}}))},a=function(e){return e&&e.profiles&&e.profiles[0]&&{Name:e.profiles[0].first_name+" "+e.profiles[0].surname,Image:r(7728)("./"+e.profiles[0].profile_picture),Role:e.profiles[0].role,School:e.profiles[0].school,Pronouns:e.profiles[0].pronouns,SchoolImage:r(7305)("./"+e.profiles[0].school+".png"),MarkDownContent:(new t.Z).turndown(e.profiles[0].html)}},l=function(e){return null==e?"":e.Name},u=function(e){return null==e?"":e.Pronouns},i=function(e){return null==e?"":e.Role},c=function(e){return null==e?"":e.School},s=function(e){return null==e?"":e.MarkDownContent},m=function(e){return null==e||null===e.Image||void 0===e.Image||""===e.Image?null:e.Image},f=function(e){return null==e||null===e.SchoolImage||void 0===e.SchoolImage||""===e.SchoolImage?null:e.SchoolImage}},4048:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return s}});var t=r(7294),o=r(6025),a=r(5347),l=r(2583),u=r(262),i=function(e){var n=e.Image,r=e.Name,o=e.Role,a=e.LinkTo;return t.createElement("div",{className:"profilePreview"},t.createElement("a",{href:a},t.createElement("img",{src:"string"==typeof n?n:n.default,alt:"profile picture of "+r}),t.createElement("div",{className:"details"},t.createElement("h2",null,r),t.createElement("p",null,o.join(", ")))))},c=r(1588),s=function(e){var n=e.data,r=(0,t.useState)({editor:!0,designer:!0,writer:!0,"co-ordinator":!0}),s=r[0],m=r[1],f=(0,t.useState)([]),p=f[0],d=f[1];(0,t.useEffect)((function(){var e=[];n.allMarkdownRemark.edges.forEach((function(n){n=n.node.frontmatter;var r=!1;Object.keys(s).forEach((function(e){n.role.forEach((function(n){s[e]&&n.toLowerCase()===e&&(r=!0)}))})),r&&e.push(n)})),e.sort((function(e,n){return e.first_name>n.first_name?1:e.first_name===n.first_name?e.surname>n.surname?1:e.surname===n.surname?0:-1:-1})),d(e)}),[s]);var g=function(e){var n,r=e.target.value;m(Object.assign({},s,((n={})[r]=!s[r],n)))},h=function(e){return s[e]?"shown":"hidden"};return t.createElement(t.Fragment,null,t.createElement(a.Z,null),t.createElement("main",{className:"MTT"},t.createElement(u.Z,{seo:o.Z.MeetTheTeam.SEO}),t.createElement("h1",null,"Meet the Team"),t.createElement("div",{className:"selector"},t.createElement("button",{className:h("writer"),onClick:g,value:"writer"},"Writers"),t.createElement("button",{className:h("editor"),onClick:g,value:"editor"},"Editors"),t.createElement("button",{className:h("designer"),onClick:g,value:"designer"},"Designers"),t.createElement("button",{className:h("co-ordinator"),onClick:g,value:"co-ordinator"},"Co-ordinator")),t.createElement("div",{className:"profiles"},p.length>0?(0,c.o2)(p).map((function(e,n){return t.createElement(i,{key:n,Name:e.Name,Role:e.Role,Image:e.Image,LinkTo:e.LinkTo,Subject:e.Subject})})):t.createElement("p",null,"No profiles..."))),t.createElement(l.Z,null))}},7305:function(e,n,r){var t={"./Kendrick School.png":1866,"./Naziyah.png":6311,"./Reading School.png":1053,"./Rujing Li.png":3278,"./blank.png":765,"./placeholder.png":3361};function o(e){var n=a(e);return r(n)}function a(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=a,e.exports=o,o.id=7305}}]);
//# sourceMappingURL=component---src-pages-meet-the-team-js-8050c345045d03cc07a4.js.map