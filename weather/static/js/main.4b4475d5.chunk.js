(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/skyClear.68d8c2c9.svg"},function(e,t,a){e.exports=a.p+"static/media/skyClearNight.66944070.svg"},function(e,t,a){e.exports=a.p+"static/media/rain.4f3d1106.svg"},function(e,t,a){e.exports=a.p+"static/media/rainNight.fd453ba5.svg"},function(e,t,a){e.exports=a.p+"static/media/showerRain.2ed277e9.svg"},function(e,t,a){e.exports=a.p+"static/media/fewClouds.f980fc80.svg"},function(e,t,a){e.exports=a.p+"static/media/fewCloudsNight.a9704210.svg"},function(e,t,a){e.exports=a.p+"static/media/clouds.b797a624.svg"},function(e,t,a){e.exports=a.p+"static/media/thunderstorm.13f399bf.svg"},function(e,t,a){e.exports=a.p+"static/media/snow.18a9fdd5.svg"},function(e,t,a){e.exports=a.p+"static/media/mist.1ab10811.svg"},,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),s=(a(24),a(1)),o=(a(25),a(4)),l=a(2),m=a(18),u=r.a.createContext(),d="4b1ca1786a17f5e1dd0cff314c7bd99f",f={units:"metric",location:"Cairo,EG",timeFormat:"12hours",showSeconds:!0,isDarkMode:!1};function h(e){var t=e.label,a=Object(m.a)(e,["label"]);return r.a.createElement("label",{className:"radio"},r.a.createElement("input",Object.assign({type:"radio"},a)),t)}function v(e){localStorage.setItem("settings",JSON.stringify(e))}function g(e){var t=e.children,a=function(e){var t=JSON.parse(localStorage.getItem("settings"));return t||(v(e),e)}(f),c=Object(n.useState)(a),i=Object(s.a)(c,2),o=i[0],l=function(e){return function(t){e(t),v(t)}}(i[1]);return r.a.createElement(u.Provider,{value:{settings:o,updateSettings:l}},t)}var E=function(){var e=Object(n.useContext)(u),t=e.settings,a=e.updateSettings,c=t.units,i=t.location,s=t.timeFormat,m=t.showSeconds;return r.a.createElement("div",null,r.a.createElement("form",{onChange:function(e){return function(e,t,a){var n=e.target.type,r=e.target.name,c="checkbox"===n?e.target.checked:e.target.value;t(Object(l.a)(Object(l.a)({},a),{},Object(o.a)({},r,c)))}(e,a,t)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Location"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",name:"location",type:"text",placeholder:"Weather location",defaultValue:i}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Time format"),r.a.createElement("div",{className:"control"},r.a.createElement(h,{name:"timeFormat",label:"12 Hours (AM/PM)",value:"12hours",defaultChecked:"12hours"===s}),r.a.createElement(h,{name:"timeFormat",label:"24 Hours",value:"24hours",defaultChecked:"24hours"===s}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Units"),r.a.createElement("div",{className:"control"},r.a.createElement(h,{name:"units",label:"C (metric)",value:"metric",defaultChecked:"metric"===c}),r.a.createElement(h,{name:"units",label:"F (imperial)",value:"imperial",defaultChecked:"imperial"===c}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Other options"),r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:"showSeconds",checked:m}),"Show seconds"))),r.a.createElement("button",{onClick:function(e){return function(e,t){e.preventDefault(),t(f)}(e,a)},className:"button"},"Restore to default")))};function b(){var e=Object(n.useContext)(u).settings,t=e.location,a=e.isDarkMode,c="has-text-centered is-family-sans-serif is-size-4".concat(" ",a?"has-text-light":"has-text-dark"),i="footer".concat(a?" has-background-black":"");return r.a.createElement("footer",{className:i},r.a.createElement("div",null,r.a.createElement("h4",{className:c},t)))}function p(e){var t=e.digits,a=e.isDarkMode,n=e.children;return r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:a&&"has-text-white",style:{fontSize:"6rem"}},t," ",n))}function w(e){return(e.getHours()+24)%12||12}function k(e){var t=e.date,a=e.showSeconds,n=e.isDarkMode,c=t.getHours()>=0&&t.getHours()<12?"AM":"PM";return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{digits:w(t),isDarkMode:n}),r.a.createElement(p,{digits:t.getMinutes(),isDarkMode:n}),a&&r.a.createElement(p,{digits:t.getSeconds(),isDarkMode:n}),r.a.createElement(p,{digits:c,isDarkMode:n}))}function N(e){var t=e.date,a=e.showSeconds;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{digits:t.getHours()}),r.a.createElement(p,{digits:t.getMinutes()}),a&&r.a.createElement(p,{digits:t.getSeconds()}))}var x=function(){var e=Object(n.useState)(new Date),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useContext)(u).settings,o=i.timeFormat,l=i.showSeconds,m=i.isDarkMode;return Object(n.useEffect)((function(){var e=setInterval((function(){return c(new Date)}),1e3);return function(){clearInterval(e)}}),[l]),r.a.createElement("section",null,r.a.createElement("div",{className:"columns has-text-centered is-family-sans-serif"},"24hours"===o?r.a.createElement(N,{date:a,showSeconds:l,isDarkMode:m}):r.a.createElement(k,{date:a,showSeconds:l,isDarkMode:m})))};function y(){var e=Object(n.useContext)(u).settings.isDarkMode?"has-text-light":"has-text-dark";return r.a.createElement("section",null,r.a.createElement("div",{className:"has-text-centered is-family-sans-serif is-size-5 mb-3 mt-3"},r.a.createElement("h2",{className:e},(new Date).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))))}function O(e){var t=e.setIsModalShown,a=document.getElementById("settings");return i.a.createPortal(r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("header",{className:"modal-card-head"},r.a.createElement("p",{className:"modal-card-title"},"Settings"),r.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(){return t(!1)}})),r.a.createElement("section",{className:"modal-card-body"},r.a.createElement(E,null)))),a)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M=r.a.createElement("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}),C=function(e){var t=e.svgRef,a=e.title,n=S(e,["svgRef","title"]);return r.a.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,M)},D=r.a.forwardRef((function(e,t){return r.a.createElement(C,j({svgRef:t},e))}));a.p;function I(){return r.a.createElement("button",{className:"button is-dark"},"Dark")}function z(){return r.a.createElement("button",{className:"button is-light"},"Light")}function A(e){var t=e.setIsModalShown,a=Object(n.useContext)(u),c=a.settings,i=a.updateSettings,s=c.isDarkMode,o="navbar".concat(s?" has-background-black":"");return r.a.createElement("nav",{className:o,role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item",style:{cursor:"pointer",fill:"#CCCCCC",width:"4 rem"},onClick:function(){return t(!0)}},r.a.createElement(D,null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"toggleTheme",onClick:function(){return function(e,t){var a=!e.isDarkMode;t(Object(l.a)(Object(l.a)({},e),{},{isDarkMode:a})),document.body.style.backgroundColor=a?"#0A0A0A":"#ffffff"}(c,i)}},s?r.a.createElement(z,null):r.a.createElement(I,null))))))}function P(e,t){var a="https://api.openweathermap.org/data/2.5/".concat(e,"?"),n=Object.entries(t).reduce((function(e,t){return e.concat(t[0],"=",t[1],"&")}),"");return a.concat(n)}function R(e){var t=e.minTemperature,a=e.maxTemperature,n=e.day,c=e.describtion,i=e.icon,s=e.isDarkMode;t=parseInt(t),a=parseInt(a);return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"container is-family-sans-serif has-text-centered"},r.a.createElement("figure",{className:"image is-64x64",style:{margin:"auto"}},r.a.createElement("img",{src:i,alt:c,className:s&&"is-dark-mode"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("h1",{className:"column is-size-4 has-text-weight-medium"},t),r.a.createElement("h1",{className:"column is-size-4 has-text-weight-medium has-text-grey"},a)),r.a.createElement("h3",{className:"has-text-weight-light is-size-3"},n))))}var W=a(6),F=a.n(W),T=a(7),H=a.n(T),B=a(8),L=a.n(B),J=a(9),U=a.n(J),G=a(10),q=a.n(G),_=a(11),V=a.n(_),$=a(12),K=a.n($),Q=a(13),X=a.n(Q),Y=a(14),Z=a.n(Y),ee=a(15),te=a.n(ee),ae=a(16),ne=a.n(ae);function re(){var e=(new Date).getHours();return e>6&&e<20}function ce(e,t,a){return e>=t&&e<a}function ie(e,t){return ce(e,200,300)?Z.a:ce(e,300,500)?re()||t?L.a:U.a:ce(e,500,600)?q.a:ce(e,600,700)?te.a:ce(e,700,800)?ne.a:800===e?re()||t?F.a:H.a:ce(e,801,803)?re()||t?V.a:K.a:X.a}function se(e){var t=e.units,a=e.location,c=e.isDarkMode,i=Object(n.useState)([]),o=Object(s.a)(i,2),l=o[0],m=o[1];return Object(n.useEffect)((function(){var e=P("forecast",{q:a,units:t,appid:d}),n=[];fetch(e).then((function(e){return e.json()})).then((function(e){for(var t=e.list,a=t[0],r=function(e,r){var c=t.find((function(e){return e.dt>=a.dt+r}));c&&n.push(c)},c=0,i=a.dt;c<=4;i=86400*c,c++)r(0,i);m(n)})).catch((function(){}))}),[t,a]),l.map((function(e){return r.a.createElement(R,{key:e.dt,maxTemperature:e.main.temp_max,minTemperature:e.main.temp_min,describtion:e.weather[0].description,icon:ie(e.weather[0].id,!0),day:(t=e.dt,new Date(1e3*t).toLocaleDateString("en-GB",{weekday:"long"})),isDarkMode:c});var t}))}var oe=a(17),le=function e(t,a,n,r){Object(oe.a)(this,e),this.temperature=t,this.description=a,this.icon=n,this.day=r};function me(e){var t=e.units,a=e.location,c=e.isDarkMode,i=Object(n.useState)(new le),o=Object(s.a)(i,2),l=o[0],m=o[1];return Object(n.useEffect)((function(){var e=P("weather",{q:a,units:t,appid:d});fetch(e).then((function(e){return e.json()})).then((function(e){var t=parseInt(e.main.temp),a=e.weather[0].description,n=ie(e.weather[0].id);m(new le(t,a,n,"Now"))})).catch((function(){}))}),[t,a]),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-centered is-family-sans-serif"},r.a.createElement("figure",{className:"image is-128x128 mb-2",style:{margin:"auto"}},r.a.createElement("img",{src:l.icon,alt:l.describtion,className:c&&"is-dark-mode"})),r.a.createElement("h1",{className:"is-size-3 has-text-weight-bold"},l.temperature),r.a.createElement("h3",{className:"has-text-weight-light is-size-2"},l.day)))}function ue(){var e=Object(n.useContext)(u).settings,t=e.units,a=e.location,c=e.isDarkMode,i=a.replace(/\s/g,"");return r.a.createElement("section",null,r.a.createElement("div",{className:"columns is-vcentered is-centered mb-2"},r.a.createElement(me,{units:t,location:i,isDarkMode:c}),r.a.createElement(se,{units:t,location:i,isDarkMode:c})))}var de=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(g,null,r.a.createElement(A,{setIsModalShown:c}),r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(y,null),r.a.createElement(ue,null),r.a.createElement(b,null),a&&r.a.createElement(O,{setIsModalShown:c})))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):he(t,e)}))}}()}],[[19,1,2]]]);
//# sourceMappingURL=main.4b4475d5.chunk.js.map