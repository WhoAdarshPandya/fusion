/*! For license information please see main.1140cf3a.chunk.js.LICENSE.txt */
(this.webpackJsonpfyusion=this.webpackJsonpfyusion||[]).push([[0],[,,function(e,t,o){e.exports=o(11)},function(e,t,o){},,,,,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(3);var r=o(0),n=o.n(r),a=o(1),c=o.n(a);function i(e,t){return e(t={exports:{}},t.exports),t.exports}var l="function"===typeof Symbol&&Symbol.for,s=l?Symbol.for("react.element"):60103,u=l?Symbol.for("react.portal"):60106,f=l?Symbol.for("react.fragment"):60107,p=l?Symbol.for("react.strict_mode"):60108,m=l?Symbol.for("react.profiler"):60114,y=l?Symbol.for("react.provider"):60109,d=l?Symbol.for("react.context"):60110,b=l?Symbol.for("react.async_mode"):60111,g=l?Symbol.for("react.concurrent_mode"):60111,E=l?Symbol.for("react.forward_ref"):60112,C=l?Symbol.for("react.suspense"):60113,h=l?Symbol.for("react.suspense_list"):60120,O=l?Symbol.for("react.memo"):60115,v=l?Symbol.for("react.lazy"):60116,S=l?Symbol.for("react.block"):60121,x=l?Symbol.for("react.fundamental"):60117,k=l?Symbol.for("react.responder"):60118,j=l?Symbol.for("react.scope"):60119;function $(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case b:case g:case f:case m:case p:case C:return e;default:switch(e=e&&e.$$typeof){case d:case E:case v:case O:case y:return e;default:return t}}case u:return t}}}function w(e){return $(e)===g}var P={AsyncMode:b,ConcurrentMode:g,ContextConsumer:d,ContextProvider:y,Element:s,ForwardRef:E,Fragment:f,Lazy:v,Memo:O,Portal:u,Profiler:m,StrictMode:p,Suspense:C,isAsyncMode:function(e){return w(e)||$(e)===b},isConcurrentMode:w,isContextConsumer:function(e){return $(e)===d},isContextProvider:function(e){return $(e)===y},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===s},isForwardRef:function(e){return $(e)===E},isFragment:function(e){return $(e)===f},isLazy:function(e){return $(e)===v},isMemo:function(e){return $(e)===O},isPortal:function(e){return $(e)===u},isProfiler:function(e){return $(e)===m},isStrictMode:function(e){return $(e)===p},isSuspense:function(e){return $(e)===C},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===f||e===g||e===m||e===p||e===C||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===O||e.$$typeof===y||e.$$typeof===d||e.$$typeof===E||e.$$typeof===x||e.$$typeof===k||e.$$typeof===j||e.$$typeof===S)},typeOf:$},_=(i((function(e,t){0})),i((function(e){e.exports=P})),Object.getOwnPropertySymbols),R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function z(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}})()&&Object.assign;var N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function M(e,t,o,r,n){}M.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function F(){}function I(){}I.resetWarningCache=F;var W=i((function(e){e.exports=function(){function e(e,t,o,r,n,a){if(a!==N){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:I,resetWarningCache:F};return o.PropTypes=o,o}()})),L={variant:W.oneOf(["contained","outlined"]),color:W.oneOf(["primary","secondary","inherit"]),raised:W.bool,size:W.oneOf(["large","small","medium"]),disableRipple:W.bool,onClick:W.func,textColor:W.string,href:W.string},B={onClick:W.func,color:W.oneOf(["primary","secondary"]),disableRipple:W.bool,size:W.oneOf(["large","small","medium"])},q=function(e){var t=e.color,o=void 0===t?"primary":t,a=e.textColor,c=void 0===a?"textColorWhite":a,i=e.children,l=e.onClick,s=e.disableRipple,u=void 0!==s&&s,f=e.raised,p=void 0!==f&&f,m=e.size,y=void 0===m?"medium":m,d=e.href,b=void 0===d?"":d,g=e.variant,E=void 0===g?"contained":g,C=Object(r.useState)({x:-1,y:-1}),h=C[0],O=C[1],v=Object(r.useState)(!1),S=v[0],x=v[1];return Object(r.useEffect)((function(){-1!==h.x&&-1!==h.y?(x(!0),setTimeout((function(){return x(!1)}),300)):x(!1)}),[h]),Object(r.useEffect)((function(){S||O({x:-1,y:-1})}),[S]),n.a.createElement("button",{className:"ripple-button "+o+" "+c+" "+(p&&"raised")+" "+y+" "+("outlined"===E&&o+"Outlined"),onClick:function(e){var t=e.target.getBoundingClientRect();!u&&O({x:e.clientX-t.left,y:e.clientY-t.top}),l&&l(e)}},S?n.a.createElement("span",{className:"ripple "+c+"Ripple",style:{left:h.x,top:h.y}}):"",n.a.createElement("span",{className:"content"},b?n.a.createElement("a",{href:b,target:b.startsWith("#")?"":"_blank",rel:"noreferrer"},i):i))};q.propTypes=L;var A=function(e){var t=e.children,o=e.size,a=void 0===o?"medium":o,c=e.onClick,i=e.color,l=void 0===i?"":i,s=e.disableRipple,u=void 0!==s&&s,f=Object(r.useState)({x:-1,y:-1}),p=f[0],m=f[1],y=Object(r.useState)(!1),d=y[0],b=y[1];return Object(r.useEffect)((function(){-1!==p.x&&-1!==p.y?(b(!0),setTimeout((function(){return b(!1)}),300)):b(!1)}),[p]),Object(r.useEffect)((function(){d||m({x:-1,y:-1})}),[d]),n.a.createElement("i",{onClick:function(e){var t=e.target.getBoundingClientRect();!u&&m({x:e.clientX-t.left,y:e.clientY-t.top}),c&&c(e)},className:"icon-button "+(l&&l+"Text")+" "+a+"Icon material-icons"},d?n.a.createElement("span",{className:"ripple "+(l&&l+"Ripple"),style:{left:p.x,top:p.y}}):"",n.a.createElement("span",{className:"content"},t))};A.propTypes=B;var Y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(q,{color:"primary",onClick:function(e){console.log(e)}},"primary"),n.a.createElement(q,{color:"secondary",onClick:function(e){console.log(e)}},"secondary"),n.a.createElement(q,{color:"inherit",textColor:"textColorPrimary",onClick:function(e){console.log(e)}},"transparent"),n.a.createElement(q,{color:"inherit",textColor:"textColorPrimary",disableRipple:!0,onClick:function(e){console.log(e)}},"no ripple"),n.a.createElement("br",null),n.a.createElement(q,{onClick:function(e){console.log(e)},raised:!0},"primary raised"),n.a.createElement(q,{raised:!0,color:"secondary",onClick:function(e){console.log(e)}},"secondary raised"),n.a.createElement(q,{raised:!0,color:"inherit",textColor:"textColorSecondary",onClick:function(e){console.log(e)}},"transparent"),n.a.createElement(q,{raised:!0,color:"inherit",textColor:"textColorSecondary",disableRipple:!0,onClick:function(e){console.log(e)}},"no ripple raised"),n.a.createElement("br",null),n.a.createElement(q,{color:"primary",onClick:function(e){console.log(e)},size:"small"},"small"),n.a.createElement(q,{color:"primary",onClick:function(e){console.log(e)},size:"medium"},"medium"),n.a.createElement(q,{color:"primary",onClick:function(e){console.log(e)},size:"large"},"large"),n.a.createElement(q,{color:"primary",href:"https://google.com",onClick:function(e){console.log(e)},size:"large"},"Link"),n.a.createElement("br",null),n.a.createElement(q,{variant:"outlined"},"primary outlined"),n.a.createElement(q,{variant:"outlined",raised:!0},"primary outlined raised"),n.a.createElement(q,{color:"secondary",variant:"outlined"},"secondary outlined"),n.a.createElement(q,{color:"secondary",variant:"outlined",raised:!0},"secondary outlined raised"),n.a.createElement("br",null),n.a.createElement(A,{size:"small"},"photo"),n.a.createElement(A,{size:"large"},"photo"),n.a.createElement(A,{color:"primary"},"delete"),n.a.createElement(A,{color:"secondary",size:"large"},"new_releases"),n.a.createElement("br",null),n.a.createElement(A,null,"library_add"))};o(10);c.a.render(n.a.createElement(Y,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.1140cf3a.chunk.js.map