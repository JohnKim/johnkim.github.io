"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[483],{8396:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(977),a=n(7294),o=n(2403),i=n(4043),l=n(7825),s=n(1597),u=n(5975),c=function(t){var e=t.post,n="dark"===(0,o.If)()[0]?"colors.secondary":"colors.primary";return(0,r.tZ)(i.xu,{mb:4},(0,r.tZ)(s.rU,{to:""+e.slug,sx:function(t){return{textDecoration:"none",fontSize:[2,3,4],color:"text",backgroundImage:"linear-gradient(transparent 40%, "+(0,l.U2)(t,n)+" 40%)",backgroundSize:"auto 180%",transition:"background 0.1s ease-in-out","&:hover":{backgroundPositionY:"100%",color:"heading"}}}},e.title,e.description&&(0,r.tZ)("p",{sx:{my:2,fontSize:[1,1,2]}},e.description)),(0,r.tZ)("p",{sx:{color:"onSurface",mt:1,fontSize:[1,1,2]}},(0,r.tZ)("time",null,e.date)),e.tags&&(0,r.tZ)(a.Fragment,null,(0,r.tZ)(u.Z,{tags:e.tags})))},m=function(t){var e=t.posts,n=t.className,a=void 0===n?"":n;return(0,r.tZ)("section",{sx:{mb:[5,6,7]},className:a},e.map((function(t){return(0,r.tZ)(c,{key:t.slug,post:t})})))}},5975:function(t,e,n){var r=n(977),a=n(4043),o=n(7294),i=n(1597);e.Z=function(t){var e=t.tags;return(0,r.tZ)(o.Fragment,null,e&&e.map((function(t,e){return t&&(0,r.tZ)(o.Fragment,{key:t.slug},!!e&&" ",(0,r.tZ)(i.rU,{sx:function(t){var e;return Object.assign({},null===(e=t.styles)||void 0===e?void 0:e.a)},to:"/tags/"+t.slug},(0,r.tZ)(a.Ct,{sx:{px:3,py:1,mr:2,fontSize:2,backgroundColor:"secondary",letterSpacing:"0.003em",borderRadius:"8px"}},t.name)))})))}},9090:function(t,e,n){n.d(e,{H:function(){return o}});var r=n(7294),a=n(193),o=function(t){var e=t.title,n=t.pathname,o=t.children,i=(0,a.Z)(),l=i.title,s={title:e||l,url:""+i.siteUrl+(n||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,s.title),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:s.title}),r.createElement("meta",{name:"twitter:url",content:s.url}),r.createElement("link",{id:"favicon-icon",rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),o)}},3207:function(t,e,n){n.r(e),n.d(e,{Head:function(){return u}});var r=n(1597),a=n(977),o=n(4043),i=n(9090),l=n(3013),s=n(8396);e.default=function(t){var e=t.data.allMdx.nodes;return(0,a.tZ)(l.Z,null,(0,a.tZ)(o.kC,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,a.tZ)(o.X6,{as:"h1",variant:"styles.h1",sx:{marginY:4}},"Blog"),(0,a.tZ)(r.rU,{sx:function(t){var e;return Object.assign({},null===(e=t.styles)||void 0===e?void 0:e.a,{color:"onSurface",marginY:2})},to:"/tags"},"테그 목록 보기")),(0,a.tZ)(s.Z,{posts:e,sx:{mt:[2,3]}}))};var u=function(t){var e=t.location;return(0,a.tZ)(i.H,{title:"Blog",pathname:e.pathname})}}}]);
//# sourceMappingURL=component---src-templates-blog-template-tsx-0c4ae12639031906ca41.js.map