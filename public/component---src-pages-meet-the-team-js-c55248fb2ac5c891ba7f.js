(self.webpackChunksteam_project=self.webpackChunksteam_project||[]).push([[582],{5632:function(e,n,t){"use strict";t.d(n,{FF:function(){return c},hb:function(){return i},ix:function(){return l},m1:function(){return f},o2:function(){return o},py:function(){return s},wZ:function(){return a},xm:function(){return u}});var r=t(9787),o=function(e){return e&&e.length&&e.map((function(e){return{Image:t(7728)("./"+e.profile_picture).default,Name:e.first_name+" "+e.surname,Role:e.role,LinkTo:e.slug}}))},l=function(e){return e&&e.profiles&&e.profiles[0]&&{Name:e.profiles[0].first_name+" "+e.profiles[0].surname,Image:t(7728)("./"+e.profiles[0].profile_picture),Role:e.profiles[0].role,School:e.profiles[0].school,Pronouns:e.profiles[0].pronouns,MarkDownContent:(new r.Z).turndown(e.profiles[0].html)}},a=function(e){return null==e?"":e.Name},u=function(e){return null==e?"":e.Pronouns},i=function(e){return null==e?"":e.Role},c=function(e){return null==e?"":e.School},s=function(e){return null==e?"":e.MarkDownContent},f=function(e){return null==e||null===e.Image||void 0===e.Image||""===e.Image?null:e.Image.default}},7575:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(7294),o=t(9232),l=t(8879),a=t(262),u=function(e){var n=e.Image,t=e.Name,o=e.Role,l=e.LinkTo;return r.createElement("div",{className:"profilePreview"},r.createElement("a",{href:l},r.createElement("img",{src:n,alt:"profile picture of "+t}),r.createElement("div",{className:"details"},r.createElement("h2",null,t),r.createElement("p",null,o))))},i=t(5632),c=function(e){var n=e.data,t=r.useState({editor:!0,designer:!0,writer:!0}),c=t[0],s=t[1],f=r.useState([]),m=f[0],d=f[1];(0,r.useEffect)((function(){var e=[];n.allMarkdownRemark.edges.forEach((function(n){n=n.node.frontmatter;var t=!1;Object.keys(c).forEach((function(e){c[e]&&n.role.toLowerCase()===e&&(t=!0)})),t&&e.push(n)})),d(e)}),[c]);var p=function(e){var n,t=e.target.value;s(Object.assign({},c,((n={})[t]=!c[t],n)))},g=function(e){return c[e]?"shown":"hidden"};return r.createElement(r.Fragment,null,r.createElement(l.Z,null),r.createElement("main",{className:"MTT"},r.createElement(a.Z,{seo:o.Z.MeetTheTeam.SEO}),r.createElement("h1",null,"Meet the Team"),r.createElement("div",{className:"selector"},r.createElement("button",{className:g("writer"),onClick:p,value:"writer"},"Writers"),r.createElement("button",{className:g("editor"),onClick:p,value:"editor"},"Editors"),r.createElement("button",{className:g("designer"),onClick:p,value:"designer"},"Designers")),r.createElement("div",{className:"profiles"},m.length>0?(0,i.o2)(m).map((function(e,n){return r.createElement(u,{key:n,Name:e.Name,Role:e.Role,Image:e.Image,LinkTo:e.LinkTo,Subject:e.Subject})})):r.createElement("p",null,"No profiles..."))))}},9676:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/PlaceholderProfilePicture1-966d052389d7b445a6d7ff2008497b70.jpg"},6057:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/PlaceholderProfilePicture2-ba1636afb49dae819a9e8940ba80e4fe.jpg"},7728:function(e,n,t){var r={"./PlaceholderProfilePicture1.jpg":9676,"./PlaceholderProfilePicture2.jpg":6057};function o(e){var n=l(e);return t(n)}function l(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=l,e.exports=o,o.id=7728}}]);
//# sourceMappingURL=component---src-pages-meet-the-team-js-c55248fb2ac5c891ba7f.js.map