(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(5),d=c(1),s=c(4),o=c.n(s),b=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,i={};return e.forEach((function(t){i[t.id]=t.id===c?"block":"none"})),Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{className:o()({"is-active":t.id===c}),"data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){n(t)}(t)},children:t.title})},t.id)}))})}),e.map((function(t){return Object(b.jsx)("div",{className:"block","data-cy":"tab-content",style:{display:i[t.id]},children:t.content},t.id)}))]})},r=(c(11),c(12),c(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),u=function(){var t=Object(d.useState)(r[0].id),e=Object(a.a)(t,2),c=e[0],n=e[1],i=r.find((function(t){return t.id===c}));return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===i||void 0===i?void 0:i.title)}),Object(b.jsx)(l,{tabs:r,selectedTabId:c,onTabSelected:function(t){t.id!==c&&n(t.id)}})]})};i.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8a28afe3.chunk.js.map