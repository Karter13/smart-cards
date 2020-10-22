(this["webpackJsonpsmart-cards"]=this["webpackJsonpsmart-cards"]||[]).push([[0],{100:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(99),a(100),a(16)),o=a.n(i),s=a(17),u=a(11),m=a(85),d=a(52),E=a.n(d),v=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"delete"===e.red?"".concat(E.a.button," ").concat(E.a.type):E.a.button,onClick:e.click},e.value))})),p=a(53),b=a.n(p),f=r.a.memo((function(e){return r.a.createElement("div",null,r.a.createElement("input",{className:e.error?"".concat(b.a.input," ").concat(b.a.error):b.a.input,type:"text",autoFocus:!0,value:e.value,onChange:function(t){e.onChange(t.currentTarget.value)},onBlur:e.onBlur}))})),h=a(9),g=a(13),w=a(35),_=a.n(w),O=_.a.create({baseURL:"https://github.com/IgnatZakalinsky/cards-nya-back-2-0/",withCredentials:!0}),S=function(e){return O.post("auth/login",e)},j=function(){return O.delete("auth/me")},R=function(){return O.post("auth/me")},y={user:{},isLoggedIn:!1,error:null},k=function(e){return{type:"login/SET_IS_LOGGED_IN",value:e}},I=function(e){return{type:"login/SET_USER",user:e}},N=function(e){return{type:"login/SET-ERROR",error:e}},T={status:"idle",error:null,isInitialized:!1},P=function(e){return{type:"APP/SET-STATUS",status:e}},C=a(75),L=a.n(C),F=a(76),A=a.n(F),x=function(e){return r.a.createElement("div",{className:L.a.loader},r.a.createElement("img",{src:A.a}))},B=a(77),G=a.n(B),Z=r.a.memo((function(){var e=Object(h.c)((function(e){return e.app.status})),t=Object(h.c)((function(e){return e.auth.isLoggedIn})),a=Object(h.c)((function(e){return e.auth.user})),l=Object(n.useState)("demo input"),c=Object(m.a)(l,2),i=c[0],o=c[1],s=Object(h.b)();Object(n.useEffect)((function(){s((function(e){e(P("loading")),R().then((function(t){t.data?(e(I(t.data)),e(k(!0)),e(P("succeeded"))):(e(k(!1)),e(P("succeeded"))),e({type:"APP/SET-IS-INITIALIZED",isInitialized:!0}),e(P("succeeded"))})).catch((function(){e(P("succeeded"))}))}))}),[s]);var d=Object(n.useCallback)((function(e){o(e)}),[i]),E=Object(n.useCallback)((function(){o("demo input")}),[i]);return"loading"===e?r.a.createElement("div",null,r.a.createElement(x,null)):t?r.a.createElement("div",{className:G.a.container},r.a.createElement("h1",null,"Profile"),r.a.createElement("div",null,"name: ",a.name),r.a.createElement("div",null,"email: ",a.email," "),r.a.createElement("div",null,"avatar: ",a.avatar),r.a.createElement("div",null,"token: ",a.token),r.a.createElement(f,{value:i,onChange:d,onBlur:E}),r.a.createElement(v,{value:"demo",click:function(){return alert("CLICK")}})):r.a.createElement(u.a,{to:"/login"})})),H=a(36),M=a(152),U=a(160),q=a(156),D=a(158),$=a(161),z=a(159),V=a(157),W=a(61),K=a.n(W),J=function(){var e=Object(h.c)((function(e){return e.auth.error})),t=Object(h.c)((function(e){return e.app.status})),a=Object(h.c)((function(e){return e.auth.isLoggedIn})),n=Object(h.b)(),l=Object(H.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.password?e.password.length<=6&&(t.password="password must be more than 6 characters"):t.password="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;n((t=e,function(e){e(P("loading")),S(t).then((function(t){t.data?(e(I(t.data)),e(k(!0)),e(P("succeeded"))):(e(N("error")),e(P("succeeded")))})).catch((function(t){e(N(t.response?t.response.data.error:t.message+", more details in the console")),e(P("succeeded"))}))}))}});return"loading"===t?r.a.createElement(x,null):a?r.a.createElement(u.a,{to:"/"}):r.a.createElement(M.a,{container:!0,justify:"center"},r.a.createElement(M.a,{item:!0,xs:4},e&&r.a.createElement("div",{style:{color:"red"}},e.toString()),r.a.createElement("form",{onSubmit:l.handleSubmit},r.a.createElement(U.a,null,r.a.createElement(q.a,null,r.a.createElement(D.a,Object.assign({label:"Email",margin:"normal"},l.getFieldProps("email"))),l.errors.email?r.a.createElement("div",{style:{color:"red"}},l.errors.email):null,r.a.createElement(D.a,Object.assign({type:"password",label:"Password",margin:"normal"},l.getFieldProps("password"))),l.errors.password?r.a.createElement("div",{style:{color:"red"}},l.errors.password):null,r.a.createElement($.a,{label:"Remember me",control:r.a.createElement(z.a,Object.assign({},l.getFieldProps("rememberMe"),{checked:l.values.rememberMe}))}),r.a.createElement(V.a,{type:"submit",variant:"contained",color:"primary"},"Login")))),r.a.createElement("div",{className:K.a.link},r.a.createElement(s.b,{to:ge,activeClassName:o.a.activeLick},"fogot fassword?")),r.a.createElement("div",{className:K.a.link},r.a.createElement(s.b,{to:he,activeClassName:o.a.activeLick},"register"))))},X=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement(J,null))})),Y=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement(X,null))})),Q=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Y,null))})),ee=_.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),te=function(e,t){return ee.post("auth/register",{email:e,password:t})},ae={isRegistered:!1,isError:!1,isFetching:!1},ne=function(e){return{type:"SET_FETCHING",isFetching:e}},re=a(83),le=a.n(re),ce=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:le.a,alt:"preloader"}))},ie=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=3?t.password="Must be at least 3 characters":e.password.length>100&&(t.password="Must be not more than 100 characters"):t.password="Required",t},oe=r.a.memo((function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.registration.isError})),a=Object(h.c)((function(e){return e.registration.isRegistered})),n=Object(h.c)((function(e){return e.registration.isFetching})),l=Object(H.a)({initialValues:{email:"",password:""},validate:ie,onSubmit:function(t){var a=t.email,n=t.password;e(function(e,t){return function(a){a(ne(!0)),te(e,t).then((function(e){a({type:"REGISTER",isRegistered:!0}),a(ne(!1))})).catch((function(e){a({type:"SET_ERROR",isError:!0}),a(ne(!1))}))}}(a,n))}});return!n||a||t?t&&!n?r.a.createElement("div",null,"Error!"):a&&!n?r.a.createElement(u.a,{to:"login"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Registration"),r.a.createElement("form",{onSubmit:l.handleSubmit},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.email})," ",r.a.createElement("label",{htmlFor:"email"},"Email Address"),l.touched.email&&l.errors.email?r.a.createElement("div",null,l.errors.email):null),r.a.createElement("li",null,r.a.createElement("input",{id:"password",name:"password",type:"password",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.password})," ",r.a.createElement("label",{htmlFor:"password"},"Password"),l.touched.password&&l.errors.password?r.a.createElement("div",null,l.errors.password):null)),r.a.createElement("button",{type:"submit",disabled:!!n},"Submit"))):r.a.createElement(ce,null)})),se=_.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),ue=function(e){return se.post("auth/forgot",{email:e,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">\n                     password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>\n                     link</a></div>"})},me="recover-password/SET_ACCEPTED",de={isAccepted:!1,isError:!1,isFetching:!1},Ee=function(e){return{type:"recover-password/SET_FETCHING",isFetching:e}},ve=function(e){return function(t){t(Ee(!0)),ue(e).then((function(e){t({type:me,isAccepted:!0}),t(Ee(!1))})).catch((function(e){t({type:"recover-password/SET_ERROR",isError:!0}),t(Ee(!1))}))}},pe=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},be=Object(n.memo)((function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.recoverPassword.isError})),a=Object(h.c)((function(e){return e.recoverPassword.isFetching})),n=Object(h.c)((function(e){return e.recoverPassword.isAccepted})),l=Object(H.a)({initialValues:{email:""},validate:pe,onSubmit:function(t){var a=t.email;e(ve(a))}});return!a||n||t?t&&!a?r.a.createElement("div",null,"Error!"):n&&!a?r.a.createElement(u.a,{to:"newPass"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Recover Password"),r.a.createElement("form",{onSubmit:l.handleSubmit},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.email})," ",r.a.createElement("label",{htmlFor:"email"},"Email Address"),l.touched.email&&l.errors.email?r.a.createElement("div",null,l.errors.email):null)),r.a.createElement("button",{type:"submit",disabled:!!a},"Submit"))):r.a.createElement(ce,null)})),fe=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NewPassword"))})),he="/registration",ge="/recoverPassword",we=function(){return r.a.createElement("div",null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(u.b,{path:"/login",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(u.b,{path:he,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(u.b,{path:ge,render:function(){return r.a.createElement(be,null)}}),r.a.createElement(u.b,{path:"/newPass",render:function(){return r.a.createElement(fe,null)}}))},_e=function(){var e=Object(h.c)((function(e){return e.auth.isLoggedIn})),t=Object(h.b)(),a=Object(n.useCallback)((function(){t((function(e){e(P("loading")),j().then((function(t){t.data?(e(k(!1)),e(P("succeeded"))):(e(N("error")),e(P("succeeded")))}))}))}),[e]);return r.a.createElement("div",{className:o.a.nav},r.a.createElement("div",{className:o.a.menu},r.a.createElement("div",{className:o.a.button},e&&r.a.createElement(V.a,{variant:"contained",color:"primary",onClick:a},"Log out")),r.a.createElement("div",{className:o.a.item},r.a.createElement(s.b,{exact:!0,to:"/",activeClassName:o.a.activeLick},"Profile")),r.a.createElement("div",{className:o.a.item},r.a.createElement(s.b,{to:"/login",activeClassName:o.a.activeLick},"Login")),r.a.createElement("div",{className:o.a.item},r.a.createElement(s.b,{to:he,activeClassName:o.a.activeLick},"Registration")),r.a.createElement("div",{className:o.a.item},r.a.createElement(s.b,{to:ge,activeClassName:o.a.activeLick},"RecoverPassword")),r.a.createElement("div",{className:o.a.item},r.a.createElement(s.b,{to:"/newPass",activeClassName:o.a.activeLick},"NewPass"))))},Oe=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement(_e,null),r.a.createElement(we,null))})),Se=a(37),je=a(84),Re=a(50),ye={},ke={},Ie={},Ne=Object(Se.c)({registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":return Object(g.a)({},e,{isRegistered:t.isRegistered});case"SET_ERROR":return Object(g.a)({},e,{isError:t.isError});case"SET_FETCHING":return Object(g.a)({},e,{isFetching:t.isFetching});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_PASSWORD":return Object(Re.a)({},e);default:return e}},recoverPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(g.a)({},e,{isAccepted:t.isAccepted});case"recover-password/SET_ERROR":return Object(g.a)({},e,{isError:t.isError});case"recover-password/SET_FETCHING":return Object(g.a)({},e,{isFetching:t.isFetching});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOGGET_IN":return Object(g.a)({},e);default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE":return Object(Re.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_IS_LOGGED_IN":return Object(g.a)({},e,{isLoggedIn:t.value});case"login/SET_USER":return Object(g.a)({},e,{user:Object(g.a)({},t.user)});case"login/SET-ERROR":return Object(g.a)({},e,{error:t.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(g.a)({},e,{status:t.status});case"APP/SET-ERROR":return Object(g.a)({},e,{error:t.error});case"APP/SET-IS-INITIALIZED":return Object(g.a)({},e,{isInitialized:t.isInitialized});default:return e}}}),Te=Object(Se.d)(Ne,Object(Se.a)(je.a));window.store=Te;var Pe=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(h.a,{store:Te},r.a.createElement("div",null,r.a.createElement(Oe,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,a){e.exports={menu:"Header_menu__65jxK",button:"Header_button__287bi",item:"Header_item__2qKv2",activeLick:"Header_activeLick__1cFc1"}},52:function(e,t,a){e.exports={button:"Button_button__3CMgV",type:"Button_type__NuwvW"}},53:function(e,t,a){e.exports={input:"Input_input__3eGfu",error:"Input_error__1iSZG"}},61:function(e,t,a){e.exports={loginBlock:"LoginForm_loginBlock__3Hd_A",inputBlock:"LoginForm_inputBlock__xysX4",checkboxBlock:"LoginForm_checkboxBlock__1tfzN",link:"LoginForm_link__FsZ_X"}},75:function(e,t,a){e.exports={loader:"Preloader_loader__2pNSR"}},76:function(e,t,a){e.exports=a.p+"static/media/loader.b31e4952.svg"},77:function(e,t,a){e.exports={container:"Profile_container__1VY1m"}},83:function(e,t,a){e.exports=a.p+"static/media/Spin-1s.62e138ae.svg"},94:function(e,t,a){e.exports=a(123)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.dc35a7e3.chunk.js.map