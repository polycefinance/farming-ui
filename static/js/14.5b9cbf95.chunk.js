(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[14],{778:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,a,r,i,s,o,j,b,u,l,O,d,x=n(68),p=n(0),f=n(3),h=n(43),m=n(741),g=n(112),v=n(4),w=n.n(v),y=n(15),S=n(28),k=n(75),z=n(11),B=n.n(z),C=n(752),E=n(16),P=n(35),R=n(38),F=n(71),N=n(751),T=n(133),L=function(){var e=Object(p.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(k.m)().account,r=Object(T.a)().fastRefresh;return Object(p.useEffect)((function(){a&&function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N.a.map((function(e){return{address:Object(R.d)(),name:"pendingCsi",params:[e.pid,a]}})),e.next=3,Object(P.a)(F,t);case 3:n=e.sent,r=N.a.map((function(e,t){return Object(E.a)(Object(E.a)({},e),{},{balance:new B.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},H=n(753),$=n(763),A=n(13),D=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object($.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(p.useRef)(o);return Object(p.useEffect)((function(){j.current(t)}),[t,j]),Object(A.jsxs)(h.B,{bold:!0,fontSize:a,children:[r,s]})},Q=function(e){var t=e.earningsSum,n=Object(m.a)();return Object(k.m)().account?Object(A.jsx)(D,{value:t}):Object(A.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},W=function(e){var t=e.cakeBalance,n=Object(m.a)();return Object(k.m)().account?Object(A.jsx)(D,{value:t,fontSize:"24px"}):Object(A.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},J=n(111),M=n(295),U=n(90),V=n(754),Y=function(e){var t=Object(p.useState)(new B.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(k.m)(),i=r.account,s=r.ethereum,o=Object(T.a)().fastRefresh;return Object(p.useEffect)((function(){i&&s&&function(){var t=Object(y.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(V.b)(s,e,i);case 2:n=t.sent,a(new B.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},q=function(){var e=Object(p.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(k.m)().account,r=Object(T.a)().fastRefresh;return Object(p.useEffect)((function(){a&&function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N.a.map((function(e){return{address:Object(R.d)(),name:"pendingCsi",params:[e.pid,a]}})),e.next=3,Object(P.a)(F,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},G=n(742),I=Object(f.e)(h.h)(c||(c=Object(x.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),K=f.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),X=f.e.img(r||(r=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Z=f.e.div(i||(i=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),_=f.e.div(s||(s=Object(x.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(p.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(k.m)().account,r=Object(m.a)(),i=L(),s=Object(G.a)(Y(Object(R.a)())),o=Object(J.f)().toNumber(),j=q().reduce((function(e,t){return e+new B.a(t).div(new B.a(10).pow(18)).toNumber()}),0),b=i.filter((function(e){return e.balance.toNumber()>0})),u=Object(C.a)(b.map((function(e){return e.pid}))).onReward,l=Object(p.useCallback)(Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]);return Object(A.jsx)(I,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(A.jsx)(X,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(A.jsxs)(K,{children:[Object(A.jsx)(Z,{children:r(544,"Polyce to Harvest")}),Object(A.jsx)(Q,{earningsSum:j}),Object(A.jsxs)(Z,{children:["~$",(o*j).toFixed(2)]})]}),Object(A.jsxs)(K,{children:[Object(A.jsx)(Z,{children:r(546,"Polyce in Wallet")}),Object(A.jsx)(W,{cakeBalance:s}),Object(A.jsxs)(Z,{children:["~$",(o*s).toFixed(2)]})]}),Object(A.jsx)(_,{children:a?Object(A.jsx)(h.d,{id:"harvest-all",disabled:b.length<=0||n,onClick:l,fullWidth:!0,children:n?r(548,"Collecting Polyce"):r(999,"Harvest all (".concat(b.length,")"))}):Object(A.jsx)(H.a,{fullWidth:!0})})]})})},te=n(749),ne=Object(f.e)(h.h)(o||(o=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=f.e.div(j||(j=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(m.a)(),t=function(){var e=Object(T.a)().slowRefresh,t=Object(p.useState)(),n=Object(S.a)(t,2),c=n[0],a=n[1];return Object(p.useEffect)((function(){function e(){return(e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(U.a)(M,Object(R.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(p.useState)(new B.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(T.a)().slowRefresh;return Object(p.useEffect)((function(){!function(){var e=Object(y.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(U.a)(M,Object(R.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(R.a)()),c=Object(J.c)(),a=Object(J.f)(),r=t?t.minus(n):new te.a(0),i=Object(G.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].eggPerBlock&&(o=new te.a(c[0].eggPerBlock).div(new te.a(10).pow(18)).toNumber()),Object(A.jsx)(ne,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:"Polyce Stats"}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(A.jsx)(D,{fontSize:"14px",value:Object(G.a)(s),decimals:0,prefix:"$"})]}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(A.jsx)(D,{fontSize:"14px",value:Object(G.a)(t),decimals:0})]}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(A.jsx)(D,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(A.jsx)(D,{fontSize:"14px",value:i,decimals:0})]}),Object(A.jsxs)(ce,{children:[Object(A.jsx)(h.B,{fontSize:"14px",children:e(540,"New Polyce/block")}),Object(A.jsx)(h.B,{bold:!0,fontSize:"14px",children:o})]})]})})},re=Object(f.e)(h.h)(b||(b=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(m.a)(),t=Object(J.g)();return Object(A.jsx)(re,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(D,{value:t.toNumber(),prefix:"$",decimals:2}),Object(A.jsx)(h.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(775),oe=Object(f.e)(h.h)(u||(u=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(f.e.div(l||(l=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)();return Object(A.jsx)(oe,{children:Object(A.jsxs)(h.i,{children:[Object(A.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(A.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"PolyceFinance"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),be=f.e.div(O||(O=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ue=Object(f.e)(h.b)(d||(d=Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){Object(m.a)();return Object(A.jsxs)(g.a,{children:[Object(A.jsx)(be,{children:Object(A.jsxs)(h.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:[Object(A.jsx)("img",{src:"/images/egg/banner.png",alt:"lottery bunny",style:{height:"68px",marginTop:"36px",marginRight:"20px"}}),Object(A.jsx)("div",{style:{display:"inline-block",float:"right",marginTop:"41px",letterSpacing:"5px",fontSize:"52px",color:"#EAE2FC"},children:"POLYCE"})]})}),Object(A.jsx)("div",{children:Object(A.jsxs)(ue,{children:[Object(A.jsx)(ee,{}),Object(A.jsx)(je,{}),Object(A.jsx)(ae,{}),Object(A.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=14.5b9cbf95.chunk.js.map