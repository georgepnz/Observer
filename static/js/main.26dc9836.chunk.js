(this.webpackJsonpgetfeedback=this.webpackJsonpgetfeedback||[]).push([[0],{20:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(14),a=n.n(i),o=(n(56),n(4)),s=(n(20),n(41),n(79)),l=n(35),u=n.n(l),d=n(12),j=n.n(d),h=n(18),b=n(13),f=n(16),m=function(){function e(t,n,c){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];Object(b.a)(this,e),this.roomId=void 0,this.id=void 0,this.likes=void 0,this.text=void 0,this.roomId=t,this.id=c,this.text=n,this.likes=r}return Object(f.a)(e,[{key:"like",value:function(e){this.likes.push(e)}},{key:"unlike",value:function(e){this.likes=this.likes.filter((function(t,n,c){return t!==e}))}},{key:"getNLikes",value:function(){return this.likes.length}},{key:"hasAlreadyLiked",value:function(e){return this.likes.includes(e)}},{key:"toString",value:function(){return this.text}}]),e}(),O=function e(t,n,c,r){Object(b.a)(this,e),this.name=void 0,this.pin=void 0,this.creator=void 0,this.id=void 0,this.name=t,this.pin=n,this.creator=c,this.id=r},p="room.powellnz.com";function x(){return(x=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Map,e.next=3,fetch("https://".concat(p,":9000/get-items"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})});case 3:return c=e.sent,e.next=6,c.json().then((function(e){for(var t=0;t<e.length;t++){var c=e[t],r=c.text,i=c._id,a=c.likes,o=c.room;n.set(i,new m(o,r,i,a))}}));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(h.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(p,":9000/add-item"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomId:t,text:n})});case 2:return c=e.sent,r="",e.next=6,c.json().then((function(e){return r=e._id}));case 6:return e.abrupt("return",new m(t,n,r));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(p,":9000/update-item"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(p,":9000/add-room"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,creator:n})});case 2:return c=e.sent,e.abrupt("return",c.json().then((function(e){var t=e.name,n=e.pin,c=e.creator,r=e._id;return new O(t,n,c,r)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(p,":9000/get-room"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:t})});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){var t=e.name,n=e.pin,c=e.creator,r=e._id;return new O(t,n,c,r)})).catch((function(){return Promise.reject()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(42);var w=n(1);function S(e){return Object(w.jsx)("div",{className:"header",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"column leftColumn",children:[e.logo,Object(w.jsx)("h3",{children:"PIN: "+e.roomPin})]}),Object(w.jsx)("div",{className:"column middleColumn",children:Object(w.jsx)("h1",{children:e.title})}),Object(w.jsx)("div",{className:"column rightColumn",children:Object(w.jsx)("h3",{children:"Poll started by "+e.originalPosterName})})]})})}n(59);function C(e){return Object(w.jsx)("div",{className:"addButton",onClick:e.onClick,children:Object(w.jsx)("p",{className:"addButtonText noselect",children:"Post a new message..."})})}var L=n(44),P=n(80),R=n(39),T=(n(61),n(36)),U=n(37);function E(e){var t=e.isLiked,n=e.likes,c=e.onLike,r=e.onUnlike;return Object(w.jsx)("div",{className:"like-button",children:Object(w.jsxs)("div",{className:"side-by-side",children:[Object(w.jsx)("p",{className:"likes-text noselect",children:n}),t?Object(w.jsx)(T.a,{icon:U.a,onClick:function(){t&&r()}}):Object(w.jsx)(T.a,{icon:U.b,onClick:function(){t||c()}})]})})}function A(e,t,n){n/=100;var c=t*Math.min(n,1-n)/100,r=function(t){var r=(t+e/30)%12,i=n-c*Math.max(Math.min(r-3,9-r,1),-1);return Math.round(255*i).toString(16).padStart(2,"0")};return"#".concat(r(0)).concat(r(8)).concat(r(4))}function I(e,t,n){var c=t>=10?t:10;return 0===n?A(e,0,95):n<=c?A(e,n/c*53,95-n/c*18):A(e,53,77)}var M=function(e,t){return R.a.create({card:{backgroundColor:I(115,e,t),textAlign:"left",borderRadius:"10px",marginTop:"30px",marginRight:"15px",marginLeft:"15px",padding:"20px",border:"none"}})};function J(e){var t=e.maxLikes,n=e.item,i=e.onLike,a=e.onUnlike,s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1],j=r.a.useContext(Z);return u&&d(!1),Object(w.jsxs)(P.a,{className:Object(R.b)(M(t,n.getNLikes()).card),children:[Object(w.jsx)(P.a.Body,{children:n.text}),Object(w.jsx)(E,{isLiked:n.hasAlreadyLiked(j),likes:n.getNLikes(),onLike:function(){null!==n.id?i(n.id):alert("Error syncing with database. Please refresh and try again."),d(!0)},onUnlike:function(){null!==n.id?a(n.id):alert("Error syncing with database. Please refresh and try again.")}})]})}var B={default:3,1100:3,700:2,500:1};function _(e){return Object(w.jsx)(L.a,{breakpointCols:B,className:"grid",columnClassName:"my-masonry-grid_column",children:e.messages.map((function(t){return Object(w.jsx)(J,{maxLikes:e.maxLikes,item:t,onLike:e.onClick,onUnlike:e.onUnlike},t.id)}))})}var F=n(78),D=(n(67),n(50));function H(e){var t=e.show,n=e.onClickPositive,r=e.handleClose,i=Object(c.useRef)(null);function a(){return null!==i.current&&0===i.current.value.trim().length}return Object(c.useEffect)((function(){if(t)return null!==i.current?i.current.focus():void 0}),[t,i]),Object(w.jsxs)(F.a,{show:t,onHide:r,dialogClassName:"modalsp",children:[Object(w.jsxs)(F.a.Header,{children:[Object(w.jsx)("button",{type:"button",className:"btn","aria-label":"Accept",disabled:a(),onClick:function(){null!==i.current&&(n(i.current.value),r())},children:Object(w.jsx)("i",{className:"fa fa-check","aria-hidden":"true"})}),Object(w.jsx)("button",{type:"button",className:"btn","aria-label":"Close",disabled:a(),onClick:r,children:Object(w.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]}),Object(w.jsx)(F.a.Body,{children:Object(w.jsx)(D.a,{ref:i,placeholder:"Type something here...",maxLength:750,autoFocus:!0})})]})}var W=n(7),z=(n(68),n.p+"static/media/logo.cb0112e6.svg"),V=function(){var e=Object(W.d)();return Object(w.jsxs)("div",{className:"clickable",onClick:function(){var t=new URLSearchParams;e.push({search:t.toString()}),window.location.reload()},children:[Object(w.jsx)("img",{className:"logo",src:z,alt:"logo"}),Object(w.jsx)("p",{className:"logo-text",children:"bserver"})]})},X=(n(71),n(81));function Y(e){var t=e.room,n=Object(c.useState)(new Map),i=Object(o.a)(n,2),a=i[0],s=i[1],l=Object(c.useState)(!1),u=Object(o.a)(l,2),d=u[0],j=u[1],h=Object(c.useState)(!1),b=Object(o.a)(h,2),f=b[0],m=b[1],O=Object(c.useState)(0),p=Object(o.a)(O,2),k=p[0],N=p[1],y=Object(c.useState)(""),L=Object(o.a)(y,2),P=L[0],R=L[1],T=Object(c.useRef)(null),U=r.a.useContext(Z);function E(){(function(e){return x.apply(this,arguments)})(t.id).then((function(e){s(e);var t=Array.from(e.values());t.sort((function(e,t){return e.getNLikes()-t.getNLikes()})),t.length>0&&N(t[0].getNLikes())}))}return f&&(m(!1),E()),Object(c.useEffect)((function(){E()}),[]),Object(c.useEffect)((function(){null!==T.current&&""!==P&&(T.current.click(),URL.revokeObjectURL(P)),R("")}),[P]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(S,{logo:Object(w.jsx)(V,{}),roomPin:t.pin,title:t.name,originalPosterName:t.creator}),Object(w.jsx)(C,{onClick:function(){j(!0)}}),Object(w.jsx)(X.a,{className:"download-button",onClick:function(){var e=JSON.stringify(Array.from(a.values()).map((function(e){return{text:e.text,likes:e.getNLikes()}}))),t=new Blob([e]),n=URL.createObjectURL(t);R(n)},variant:"secondary",children:"EXPORT"}),Object(w.jsx)("a",{className:"hidden",download:"Observer_export.txt",href:P,ref:T,children:"Downloader"}),Object(w.jsx)(_,{maxLikes:k,messages:Array.from(a.values()).reverse(),onClick:function(e){var t=a.get(e);null!=t&&(t.like(U),console.log(t),g(t).then((function(e){m(!0)})))},onUnlike:function(e){var t=a.get(e);null!=t&&(t.unlike(U),console.log(t),g(t).then((function(e){m(!0)})))}}),Object(w.jsx)(H,{show:d,onClickPositive:function(e){(function(e,t){return v.apply(this,arguments)})(t.id,e).then((function(e){var t=a;t.set(e.id,e),s(t),m(!0)})).catch((function(){alert("Sorry, item couldn't be added to the database. Please refresh and try again.")}))},handleClose:function(){j(!1)}})]})}n(72),n(73);function q(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null);return Object(w.jsx)("div",{className:"login-selector",children:Object(w.jsxs)("div",{className:"login-selector-inner",children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsxs)("h2",{children:["Welcome to ",Object(w.jsx)("input",{ref:t,placeholder:"Room Name"})]}),Object(w.jsxs)("h3",{className:"h3-separate",children:["Created by ",Object(w.jsx)("input",{ref:n,placeholder:"Your Name"})]})]}),Object(w.jsx)(X.a,{variant:"success",className:"pin-button go-button",onClick:function(){null!==t.current&&null!==n.current&&t.current.value.trim().length>0&&n.current.value.trim().length>0&&e.onSelect(t.current.value,n.current.value)},children:"CREATE ROOM"})]})})}n(74);function G(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],a=r[1];function s(){a(!0),setTimeout((function(){return a(!1)}),600)}return Object(w.jsx)("div",{className:"login-selector",children:Object(w.jsxs)("div",{className:"login-selector-inner",children:[Object(w.jsx)("h2",{children:"Enter your room code below:"}),Object(w.jsx)("input",{ref:t,className:"room-code-input",placeholder:"0123456789",maxLength:10}),Object(w.jsx)("div",{children:Object(w.jsx)(X.a,{variant:"success",className:i?"pin-button go-button shake-button":"pin-button go-button",onClick:function(){if(null!=t.current){var n=parseInt(t.current.value);if(!isNaN(n))return void e.onSelect(n,s)}s()},children:"ENTER"})}),Object(w.jsx)("p",{className:"new-room-text",children:"Or, start a new room"}),Object(w.jsx)("div",{children:Object(w.jsx)(X.a,{className:"pin-button",variant:"outline-secondary",onClick:e.onNewRoom,children:"NEW ROOM"})})]})})}function K(e){var t=Object(c.useRef)(null);return Object(w.jsxs)("div",{className:"login-noscroll",children:[Object(w.jsx)("div",{className:"header-no-color",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"column leftColumn",children:Object(w.jsx)(V,{})})})}),Object(w.jsx)("div",{className:"login-container",children:Object(w.jsx)(G,{onSelect:e.onSelect,onNewRoom:function(){null!=t.current&&t.current.scrollIntoView({behavior:"smooth"})}})}),Object(w.jsx)("div",{ref:t,className:"login-container",children:Object(w.jsx)(q,{onSelect:function(t,n){(function(e,t){return N.apply(this,arguments)})(t,n).then((function(t){e.onSelect(t.pin,(function(){}))}))}})})]})}var Q=n(34);var Z=r.a.createContext($());function $(){var e="uuid",t=u.a.get(e);if(null===t||void 0===t){var n=Object(s.a)();return u.a.set(e,n),n}return t}function ee(){return Object(w.jsx)(Q.a,{children:Object(w.jsx)(te,{})})}function te(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),a=Object(o.a)(i,2),s=a[0],l=a[1],u=Object(W.d)();function d(e,t){(function(e){return y.apply(this,arguments)})(e).then((function(t){var n=new URLSearchParams;n.append("id",String(e)),u.push({search:n.toString()}),l(t),r(!0)})).catch((function(){t()}))}var j=new URLSearchParams(Object(W.e)().search).get("id");return j&&!n&&(console.log("room: "+j),d(parseInt(j),(function(){var e=new URLSearchParams;u.push({search:e.toString()}),window.location.reload()}))),Object(w.jsx)(Z.Provider,{value:$(),children:n&&null!==s?Object(w.jsx)(Y,{room:s}):Object(w.jsx)(K,{onSelect:d})})}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[75,1,2]]]);
//# sourceMappingURL=main.26dc9836.chunk.js.map