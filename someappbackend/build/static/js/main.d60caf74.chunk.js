(this.webpackJsonpsomeapp=this.webpackJsonpsomeapp||[]).push([[0],{55:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(12),a=n.n(r),o=n(4),i=n.n(o),u=n(7),l=n(5),j=n(6),d=n.n(j),b="/api/julkaisut",O=null,h={getAll:function(){return d.a.get(b).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},c=d.a.post(b,t,n),e.abrupt("return",c.then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return d.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},setToken:function(e){O="bearer ".concat(e)}},f=(n(55),n(8)),p=n(1),m=function(e){var t=e.posts,n=e.likePost;return Object(p.jsx)("div",{className:"julkaisu",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h1",{className:"user",children:t.user.username}),Object(p.jsx)("div",{className:"contenttext",children:Object(p.jsxs)("p",{children:[t.content," "]})}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(f.c,{className:"likeButton",onClick:n}),t.likes," likes",Object(p.jsx)("button",{className:"viewButton",children:"View"})]})]})})},x=function(e){var t=e.posts,n=e.likePost,c=e.removeJulkaisu;return Object(p.jsx)("div",{className:"julkaisut",children:t.map((function(e){return Object(p.jsx)(m,{likePost:function(){return n(e.id)},removeJulkaisu:function(){return c(e.id)},posts:e},e.id)}))})},v=function(e){var t=e.content,n=e.handleChange,c=e.addJulkaisu,s=e.user,r=e.logOut;return Object(p.jsxs)("div",{className:"formContainer",children:[Object(p.jsxs)("h1",{className:"formHeader",children:["Hi, ",s.username," !"]}),Object(p.jsxs)("form",{className:"formJulkaisu",children:[Object(p.jsx)("textarea",{maxLength:"200",rows:"5",cols:"30",className:"inputForm",type:"text",value:t,onChange:n,placeholder:"Write text here"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"julkaisuButton",onClick:c,children:"Lisaa"}),Object(p.jsx)("button",{className:"logOutButton",onClick:r,children:"log out"})]})]})]})};var g=function(e){var t=e.user,n=e.setUser,s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],o=r[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],d=u[1];return Object(c.useEffect)((function(){h.getAll().then((function(e){o(e)}))}),[]),Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)(v,{content:j,handleChange:function(e){d(e.target.value)},addJulkaisu:function(e){e.preventDefault();var t={content:j,date:(new Date).toISOString(),likes:0};h.create(t).then((function(e){o(a.concat(e)),d("")}))},user:t,logOut:function(e){e.preventDefault(),window.localStorage.removeItem("loggedSomeappUser"),n(null)}}),Object(p.jsx)(x,{posts:a,likePost:function(e){var t=a.find((function(t){return t.id===e}));console.log(t);var n=t.likes+1;console.log(n);var c={content:t.content,date:(new Date).toISOString(),likes:n};h.update(e,c).then((function(e){h.getAll().then((function(e){o(e)}))}))},removeJulkaisu:function(e){h.remove(e).then((function(e){h.getAll().then((function(e){o(e)}))}))}})]})},k=n(18),w=n(19),N=n(31);function S(){function e(e){return Object(p.jsxs)("p",{className:"menuitem",children:[Object(p.jsx)("span",{className:"dropdownIcon",children:e.leftIcon}),e.children,Object(p.jsx)("span",{className:"dropdownIcon",children:e.rightIcon})]})}return Object(p.jsxs)("div",{className:"dropdown",children:[Object(p.jsx)(e,{leftIcon:Object(p.jsx)(k.b,{}),rightIcon:Object(p.jsx)(w.a,{}),children:"Settings"}),Object(p.jsx)(e,{onClick:function(){console.log("Logged out")},leftIcon:Object(p.jsx)(k.a,{}),rightIcon:Object(p.jsx)(w.a,{}),children:"Log out"})]})}function I(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],r=n[1];return Object(p.jsxs)("li",{className:"navitem",children:[Object(p.jsx)("p",{className:"iconbutton",onClick:function(){return r(!s)},children:e.icon}),s?Object(p.jsx)(S,{}):Object(p.jsx)("div",{})]})}function C(e){return Object(p.jsx)("li",{className:"navitem",children:Object(p.jsx)("p",{className:"iconbutton",onClick:e.event,children:e.icon})})}function J(e){return Object(p.jsx)("nav",{className:"nav",children:Object(p.jsx)("ul",{className:"navnav",children:e.children})})}var y=function(){return Object(p.jsxs)(J,{children:[Object(p.jsx)(I,{icon:Object(p.jsx)(f.b,{})}),Object(p.jsx)(C,{icon:Object(p.jsx)(f.a,{}),event:function(){N.animateScroll.scrollToTop()}})]})},U=function(e){var t=e.handleLogin,n=e.password,c=e.username,s=e.setPassword,r=e.setUsername;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Notes"}),Object(p.jsx)("h2",{children:"Login"}),Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsxs)("div",{children:["username",Object(p.jsx)("input",{type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return r(t.value)}})]}),Object(p.jsxs)("div",{children:["password",Object(p.jsx)("input",{type:"password",value:n,name:"Password",onChange:function(e){var t=e.target;return s(t.value)}})]}),Object(p.jsx)("button",{type:"submit",children:"login"})]})]})},L=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var P=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),o=a[0],j=a[1],d=Object(c.useState)(null),b=Object(l.a)(d,2),O=b[0],f=b[1];Object(c.useEffect)((function(){var e=window.localStorage.getItem("loggedSomeappUser");if(e){var t=JSON.parse(e);f(t),h.setToken(t.token)}}),[]);var m=function(){var e=Object(u.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L.login({username:n,password:o});case 4:c=e.sent,window.localStorage.setItem("loggedSomeappUser",JSON.stringify(c)),h.setToken(c.token),f(c),s(""),j(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Wrong credentials");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"App",children:O?Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{}),Object(p.jsx)(g,{user:O,setUser:f})]}):Object(p.jsx)(U,{handleLogin:m,password:o,username:n,setPassword:j,setUsername:s})})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d60caf74.chunk.js.map