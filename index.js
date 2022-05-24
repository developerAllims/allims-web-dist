var Bh=Object.defineProperty,Wh=Object.defineProperties;var Hh=Object.getOwnPropertyDescriptors;var Eo=Object.getOwnPropertySymbols;var zc=Object.prototype.hasOwnProperty,Rc=Object.prototype.propertyIsEnumerable;var Nc=(e,t,n)=>t in e?Bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))zc.call(t,n)&&Nc(e,n,t[n]);if(Eo)for(var n of Eo(t))Rc.call(t,n)&&Nc(e,n,t[n]);return e},te=(e,t)=>Wh(e,Hh(t));var xe=(e,t)=>{var n={};for(var r in e)zc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Eo)for(var r of Eo(e))t.indexOf(r)<0&&Rc.call(e,r)&&(n[r]=e[r]);return n};const Qh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qh();var I={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Gh=Symbol.for("react.portal"),Yh=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Kh=Symbol.for("react.provider"),Jh=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),eg=Symbol.for("react.suspense"),tg=Symbol.for("react.memo"),ng=Symbol.for("react.lazy"),Ic=Symbol.iterator;function rg(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var Pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$f=Object.assign,Ff={};function pi(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Pf}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=pi.prototype;function xu(e,t,n){this.props=e,this.context=t,this.refs=Ff,this.updater=n||Pf}var ku=xu.prototype=new Mf;ku.constructor=xu;$f(ku,pi.prototype);ku.isPureReactComponent=!0;var Dc=Array.isArray,Af=Object.prototype.hasOwnProperty,_u={current:null},jf={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Af.call(t,r)&&!jf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:go,type:e,key:o,ref:l,props:i,_owner:_u.current}}function ig(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Su(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function og(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pc=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?og(""+e.key):t.toString(36)}function qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case go:case Gh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ba(l,0):r,Dc(i)?(n="",e!=null&&(n=e.replace(Pc,"$&/")+"/"),qo(i,t,n,"",function(u){return u})):i!=null&&(Su(i)&&(i=ig(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Pc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Dc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ba(o,a);l+=qo(o,t,n,s,i)}else if(s=rg(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ba(o,a++),l+=qo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Co(e,t,n){if(e==null)return e;var r=[],i=0;return qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},Xo={transition:null},ag={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:_u};pe.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!Su(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=pi;pe.Fragment=Yh;pe.Profiler=Xh;pe.PureComponent=xu;pe.StrictMode=qh;pe.Suspense=eg;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$f({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=_u.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Af.call(t,s)&&!jf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:go,type:e.type,key:i,ref:o,props:r,_owner:l}};pe.createContext=function(e){return e={$$typeof:Jh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kh,_context:e},e.Consumer=e};pe.createElement=Uf;pe.createFactory=function(e){var t=Uf.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:Zh,render:e}};pe.isValidElement=Su;pe.lazy=function(e){return{$$typeof:ng,_payload:{_status:-1,_result:e},_init:lg}};pe.memo=function(e,t){return{$$typeof:tg,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return pt.current.useCallback(e,t)};pe.useContext=function(e){return pt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return pt.current.useEffect(e,t)};pe.useId=function(){return pt.current.useId()};pe.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return pt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};pe.useRef=function(e){return pt.current.useRef(e)};pe.useState=function(e){return pt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return pt.current.useTransition()};pe.version="18.1.0";I.exports=pe;var J=I.exports,cl={},Vf={exports:{}},Nt={},Bf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var O=T.length;T.push(A);e:for(;0<O;){var Z=O-1>>>1,ne=T[Z];if(0<i(ne,A))T[Z]=A,T[O]=ne,O=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],O=T.pop();if(O!==A){T[0]=O;e:for(var Z=0,ne=T.length,ce=ne>>>1;Z<ce;){var ve=2*(Z+1)-1,Oe=T[ve],Me=ve+1,ct=T[Me];if(0>i(Oe,O))Me<ne&&0>i(ct,Oe)?(T[Z]=ct,T[Me]=O,Z=Me):(T[Z]=Oe,T[ve]=O,Z=ve);else if(Me<ne&&0>i(ct,O))T[Z]=ct,T[Me]=O,Z=Me;else break e}}return A}function i(T,A){var O=T.sortIndex-A.sortIndex;return O!==0?O:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,h=null,f=3,w=!1,v=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function g(T){if(k=!1,m(T),!v)if(n(s)!==null)v=!0,B(x);else{var A=n(u);A!==null&&Q(g,A.startTime-T)}}function x(T,A){v=!1,k&&(k=!1,p(E),E=-1),w=!0;var O=f;try{for(m(A),h=n(s);h!==null&&(!(h.expirationTime>A)||T&&!N());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,f=h.priorityLevel;var ne=Z(h.expirationTime<=A);A=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(s)&&r(s),m(A)}else r(s);h=n(s)}if(h!==null)var ce=!0;else{var ve=n(u);ve!==null&&Q(g,ve.startTime-A),ce=!1}return ce}finally{h=null,f=O,w=!1}}var b=!1,_=null,E=-1,M=5,P=-1;function N(){return!(e.unstable_now()-P<M)}function C(){if(_!==null){var T=e.unstable_now();P=T;var A=!0;try{A=_(!0,T)}finally{A?F():(b=!1,_=null)}}else b=!1}var F;if(typeof d=="function")F=function(){d(C)};else if(typeof MessageChannel!="undefined"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=C,F=function(){D.postMessage(null)}}else F=function(){S(C,0)};function B(T){_=T,b||(b=!0,F())}function Q(T,A){E=S(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,B(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var O=f;f=A;try{return T()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=f;f=T;try{return A()}finally{f=O}},e.unstable_scheduleCallback=function(T,A,O){var Z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Z+O:Z):O=Z,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,T={id:c++,callback:A,priorityLevel:T,startTime:O,expirationTime:ne,sortIndex:-1},O>Z?(T.sortIndex=O,t(u,T),n(s)===null&&T===n(u)&&(k?(p(E),E=-1):k=!0,Q(g,O-Z))):(T.sortIndex=ne,t(s,T),v||w||(v=!0,B(x))),T},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(T){var A=f;return function(){var O=f;f=A;try{return T.apply(this,arguments)}finally{f=O}}}})(Wf);Bf.exports=Wf;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=I.exports,Ot=Bf.exports;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qf=new Set,Xi={};function _r(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(Xi[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var _n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),gs=Object.prototype.hasOwnProperty,sg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},Fc={};function ug(e){return gs.call(Fc,e)?!0:gs.call($c,e)?!1:sg.test(e)?Fc[e]=!0:($c[e]=!0,!1)}function cg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dg(e,t,n,r){if(t===null||typeof t=="undefined"||cg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eu=/[\-:]([a-z])/g;function Cu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eu,Cu);Je[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eu,Cu);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eu,Cu);Je[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tu(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dg(t,n,i,r)&&(n=null),r||i===null?ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ln=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Lu=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),Gf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),qf=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,xa;function $i(e){if(xa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xa=t&&t[1]||""}return`
`+xa+e}var ka=!1;function _a(e,t){if(!e||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$i(e):""}function fg(e){switch(e.tag){case 5:return $i(e.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Pr:return"Portal";case ys:return"Profiler";case Lu:return"StrictMode";case vs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yf:return(e.displayName||"Context")+".Consumer";case Gf:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function pg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===Lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mg(e){var t=Xf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=mg(e))}function Kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function dl(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function xs(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jf(e,t){t=t.checked,t!=null&&Tu(e,"checked",t,!1)}function ks(e,t){Jf(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||dl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fi=Array.isArray;function qr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(Fi(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function Zf(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,tp=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hg=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(e){hg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ji[t]=ji[e]})});function np(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ji.hasOwnProperty(e)&&ji[e]?(""+t).trim():t+"px"}function rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=np(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gg=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(e,t){if(t){if(gg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ls=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Xr=null,Kr=null;function Bc(e){if(e=wo(e)){if(typeof Os!="function")throw Error(q(280));var t=e.stateNode;t&&(t=Kl(t),Os(e.stateNode,e.type,t))}}function ip(e){Xr?Kr?Kr.push(e):Kr=[e]:Xr=e}function op(){if(Xr){var e=Xr,t=Kr;if(Kr=Xr=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function lp(e,t){return e(t)}function ap(){}var Sa=!1;function sp(e,t,n){if(Sa)return e(t,n);Sa=!0;try{return lp(e,t,n)}finally{Sa=!1,(Xr!==null||Kr!==null)&&(ap(),op())}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Ns=!1;if(_n)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Ns=!1}function yg(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ui=!1,fl=null,pl=!1,zs=null,vg={onError:function(e){Ui=!0,fl=e}};function wg(e,t,n,r,i,o,l,a,s){Ui=!1,fl=null,yg.apply(vg,arguments)}function bg(e,t,n,r,i,o,l,a,s){if(wg.apply(this,arguments),Ui){if(Ui){var u=fl;Ui=!1,fl=null}else throw Error(q(198));pl||(pl=!0,zs=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function up(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Sr(e)!==e)throw Error(q(188))}function xg(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wc(i),e;if(o===r)return Wc(i),t;o=o.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function cp(e){return e=xg(e),e!==null?dp(e):null}function dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dp(e);if(t!==null)return t;e=e.sibling}return null}var fp=Ot.unstable_scheduleCallback,Hc=Ot.unstable_cancelCallback,kg=Ot.unstable_shouldYield,_g=Ot.unstable_requestPaint,Fe=Ot.unstable_now,Sg=Ot.unstable_getCurrentPriorityLevel,Ru=Ot.unstable_ImmediatePriority,pp=Ot.unstable_UserBlockingPriority,ml=Ot.unstable_NormalPriority,Eg=Ot.unstable_LowPriority,mp=Ot.unstable_IdlePriority,Gl=null,sn=null;function Cg(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Og,Tg=Math.log,Lg=Math.LN2;function Og(e){return e>>>=0,e===0?32:31-(Tg(e)/Lg|0)|0}var No=64,zo=4194304;function Mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Mi(a):(o&=l,o!==0&&(r=Mi(o)))}else l=n&~i,l!==0?r=Mi(l):o!==0&&(r=Mi(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Zt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Zt(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=Ng(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function Ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function Rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var be=0;function gp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yp,Du,vp,wp,bp,Is=!1,Ro=[],Wn=null,Hn=null,Qn=null,Zi=new Map,eo=new Map,An=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wo(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dg(e,t,n,r,i){switch(t){case"focusin":return Wn=bi(Wn,e,t,n,r,i),!0;case"dragenter":return Hn=bi(Hn,e,t,n,r,i),!0;case"mouseover":return Qn=bi(Qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zi.set(o,bi(Zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,eo.set(o,bi(eo.get(o)||null,e,t,n,r,i)),!0}return!1}function xp(e){var t=sr(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=up(n),t!==null){e.blockedOn=t,bp(e.priority,function(){vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ls=r,n.target.dispatchEvent(r),Ls=null}else return t=wo(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){Ko(e)&&n.delete(t)}function Pg(){Is=!1,Wn!==null&&Ko(Wn)&&(Wn=null),Hn!==null&&Ko(Hn)&&(Hn=null),Qn!==null&&Ko(Qn)&&(Qn=null),Zi.forEach(Gc),eo.forEach(Gc)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Pg)))}function to(e){function t(i){return xi(i,e)}if(0<Ro.length){xi(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&xi(Wn,e),Hn!==null&&xi(Hn,e),Qn!==null&&xi(Qn,e),Zi.forEach(t),eo.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)xp(n),n.blockedOn===null&&An.shift()}var Jr=Ln.ReactCurrentBatchConfig,gl=!0;function $g(e,t,n,r){var i=be,o=Jr.transition;Jr.transition=null;try{be=1,Pu(e,t,n,r)}finally{be=i,Jr.transition=o}}function Fg(e,t,n,r){var i=be,o=Jr.transition;Jr.transition=null;try{be=4,Pu(e,t,n,r)}finally{be=i,Jr.transition=o}}function Pu(e,t,n,r){if(gl){var i=Ds(e,t,n,r);if(i===null)Pa(e,t,r,yl,n),Qc(e,r);else if(Dg(i,e,t,n,r))r.stopPropagation();else if(Qc(e,r),t&4&&-1<Ig.indexOf(e)){for(;i!==null;){var o=wo(i);if(o!==null&&yp(o),o=Ds(e,t,n,r),o===null&&Pa(e,t,r,yl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pa(e,t,r,null,n)}}var yl=null;function Ds(e,t,n,r){if(yl=null,e=zu(r),e=sr(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=up(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yl=e,null}function kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sg()){case Ru:return 1;case pp:return 4;case ml:case Eg:return 16;case mp:return 536870912;default:return 16}default:return 16}}var Un=null,$u=null,Jo=null;function _p(){if(Jo)return Jo;var e,t=$u,n=t.length,r,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Jo=i.slice(e,1<r?1-r:void 0)}function Zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Yc(){return!1}function zt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Io:Yc,this.isPropagationStopped=Yc,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=zt(mi),vo=De({},mi,{view:0,detail:0}),Mg=zt(vo),Ca,Ta,ki,Yl=De({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(Ca=e.screenX-ki.screenX,Ta=e.screenY-ki.screenY):Ta=Ca=0,ki=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),qc=zt(Yl),Ag=De({},Yl,{dataTransfer:0}),jg=zt(Ag),Ug=De({},vo,{relatedTarget:0}),La=zt(Ug),Vg=De({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=zt(Vg),Wg=De({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hg=zt(Wg),Qg=De({},mi,{data:0}),Xc=zt(Qg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qg[e])?!!t[e]:!1}function Mu(){return Xg}var Kg=De({},vo,{key:function(e){if(e.key){var t=Gg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jg=zt(Kg),Zg=De({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=zt(Zg),ey=De({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),ty=zt(ey),ny=De({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=zt(ny),iy=De({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=zt(iy),ly=[9,13,27,32],Au=_n&&"CompositionEvent"in window,Vi=null;_n&&"documentMode"in document&&(Vi=document.documentMode);var ay=_n&&"TextEvent"in window&&!Vi,Sp=_n&&(!Au||Vi&&8<Vi&&11>=Vi),Jc=String.fromCharCode(32),Zc=!1;function Ep(e,t){switch(e){case"keyup":return ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function sy(e,t){switch(e){case"compositionend":return Cp(t);case"keypress":return t.which!==32?null:(Zc=!0,Jc);case"textInput":return e=t.data,e===Jc&&Zc?null:e;default:return null}}function uy(e,t){if(Fr)return e==="compositionend"||!Au&&Ep(e,t)?(e=_p(),Jo=$u=Un=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cy[e.type]:t==="textarea"}function Tp(e,t,n,r){ip(r),t=vl(t,"onChange"),0<t.length&&(n=new Fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bi=null,no=null;function dy(e){Mp(e,0)}function ql(e){var t=jr(e);if(Kf(t))return e}function fy(e,t){if(e==="change")return t}var Lp=!1;if(_n){var Oa;if(_n){var Na="oninput"in document;if(!Na){var td=document.createElement("div");td.setAttribute("oninput","return;"),Na=typeof td.oninput=="function"}Oa=Na}else Oa=!1;Lp=Oa&&(!document.documentMode||9<document.documentMode)}function nd(){Bi&&(Bi.detachEvent("onpropertychange",Op),no=Bi=null)}function Op(e){if(e.propertyName==="value"&&ql(no)){var t=[];Tp(t,no,e,zu(e)),sp(dy,t)}}function py(e,t,n){e==="focusin"?(nd(),Bi=t,no=n,Bi.attachEvent("onpropertychange",Op)):e==="focusout"&&nd()}function my(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(no)}function hy(e,t){if(e==="click")return ql(t)}function gy(e,t){if(e==="input"||e==="change")return ql(t)}function yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:yy;function ro(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gs.call(t,i)||!en(e[i],t[i]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zp(){for(var e=window,t=dl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=dl(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vy(e){var t=zp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Np(n.ownerDocument.documentElement,n)){if(r!==null&&ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=id(n,o);var l=id(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wy=_n&&"documentMode"in document&&11>=document.documentMode,Mr=null,Ps=null,Wi=null,$s=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$s||Mr==null||Mr!==dl(r)||(r=Mr,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&ro(Wi,r)||(Wi=r,r=vl(Ps,"onSelect"),0<r.length&&(t=new Fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},za={},Rp={};_n&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Xl(e){if(za[e])return za[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return za[e]=t[n];return e}var Ip=Xl("animationend"),Dp=Xl("animationiteration"),Pp=Xl("animationstart"),$p=Xl("transitionend"),Fp=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){Fp.set(e,t),_r(t,[e])}for(var Ra=0;Ra<ld.length;Ra++){var Ia=ld[Ra],by=Ia.toLowerCase(),xy=Ia[0].toUpperCase()+Ia.slice(1);tr(by,"on"+xy)}tr(Ip,"onAnimationEnd");tr(Dp,"onAnimationIteration");tr(Pp,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr($p,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bg(r,t,void 0,e),e.currentTarget=null}function Mp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=s}}}if(pl)throw e=zs,pl=!1,zs=null,e}function Ee(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var r=e+"__bubble";n.has(r)||(Ap(t,e,2,!1),n.add(r))}function Da(e,t,n){var r=0;t&&(r|=4),Ap(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Po]){e[Po]=!0,Qf.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Da(n,!1,e),Da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,Da("selectionchange",!1,t))}}function Ap(e,t,n,r){switch(kp(t)){case 1:var i=$g;break;case 4:i=Fg;break;default:i=Pu}n=i.bind(null,t,n,e),i=void 0,!Ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pa(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=sr(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}sp(function(){var u=o,c=zu(n),h=[];e:{var f=Fp.get(e);if(f!==void 0){var w=Fu,v=e;switch(e){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":w=Jg;break;case"focusin":v="focus",w=La;break;case"focusout":v="blur",w=La;break;case"beforeblur":case"afterblur":w=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ty;break;case Ip:case Dp:case Pp:w=Bg;break;case $p:w=ry;break;case"scroll":w=Mg;break;case"wheel":w=oy;break;case"copy":case"cut":case"paste":w=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Kc}var k=(t&4)!==0,S=!k&&e==="scroll",p=k?f!==null?f+"Capture":null:f;k=[];for(var d=u,m;d!==null;){m=d;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=Ji(d,p),g!=null&&k.push(oo(d,g,m)))),S)break;d=d.return}0<k.length&&(f=new w(f,v,null,n,c),h.push({event:f,listeners:k}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==Ls&&(v=n.relatedTarget||n.fromElement)&&(sr(v)||v[Sn]))break e;if((w||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?sr(v):null,v!==null&&(S=Sr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(k=qc,g="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Kc,g="onPointerLeave",p="onPointerEnter",d="pointer"),S=w==null?f:jr(w),m=v==null?f:jr(v),f=new k(g,d+"leave",w,n,c),f.target=S,f.relatedTarget=m,g=null,sr(c)===u&&(k=new k(p,d+"enter",v,n,c),k.target=m,k.relatedTarget=S,g=k),S=g,w&&v)t:{for(k=w,p=v,d=0,m=k;m;m=Lr(m))d++;for(m=0,g=p;g;g=Lr(g))m++;for(;0<d-m;)k=Lr(k),d--;for(;0<m-d;)p=Lr(p),m--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Lr(k),p=Lr(p)}k=null}else k=null;w!==null&&sd(h,f,w,k,!1),v!==null&&S!==null&&sd(h,S,v,k,!0)}}e:{if(f=u?jr(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var x=fy;else if(ed(f))if(Lp)x=gy;else{x=my;var b=py}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=hy);if(x&&(x=x(e,u))){Tp(h,x,n,c);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&_s(f,"number",f.value)}switch(b=u?jr(u):window,e){case"focusin":(ed(b)||b.contentEditable==="true")&&(Mr=b,Ps=u,Wi=null);break;case"focusout":Wi=Ps=Mr=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,od(h,n,c);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":od(h,n,c)}var _;if(Au)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fr?Ep(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Sp&&n.locale!=="ko"&&(Fr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fr&&(_=_p()):(Un=c,$u="value"in Un?Un.value:Un.textContent,Fr=!0)),b=vl(u,E),0<b.length&&(E=new Xc(E,e,null,n,c),h.push({event:E,listeners:b}),_?E.data=_:(_=Cp(n),_!==null&&(E.data=_)))),(_=ay?sy(e,n):uy(e,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(c=new Xc("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=_))}Mp(h,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ji(e,n),o!=null&&r.unshift(oo(e,o,i)),o=Ji(e,t),o!=null&&r.push(oo(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Ji(n,o),s!=null&&l.unshift(oo(n,s,a))):i||(s=Ji(n,o),s!=null&&l.push(oo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var _y=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function ud(e){return(typeof e=="string"?e:""+e).replace(_y,`
`).replace(Sy,"")}function $o(e,t,n){if(t=ud(t),ud(e)!==t&&n)throw Error(q(425))}function wl(){}var Fs=null,Ms=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Ey=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof cd!="undefined"?function(e){return cd.resolve(null).then(e).catch(Ty)}:js;function Ty(e){setTimeout(function(){throw e})}function $a(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),ln="__reactFiber$"+hi,lo="__reactProps$"+hi,Sn="__reactContainer$"+hi,Us="__reactEvents$"+hi,Ly="__reactListeners$"+hi,Oy="__reactHandles$"+hi;function sr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dd(e);e!==null;){if(n=e[ln])return n;e=dd(e)}return t}e=n,n=e.parentNode}return null}function wo(e){return e=e[ln]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Kl(e){return e[lo]||null}var Vs=[],Ur=-1;function nr(e){return{current:e}}function Ce(e){0>Ur||(e.current=Vs[Ur],Vs[Ur]=null,Ur--)}function Se(e,t){Ur++,Vs[Ur]=e.current,e.current=t}var Jn={},at=nr(Jn),bt=nr(!1),mr=Jn;function ri(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function bl(){Ce(bt),Ce(at)}function fd(e,t,n){if(at.current!==Jn)throw Error(q(168));Se(at,t),Se(bt,n)}function jp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,pg(e)||"Unknown",i));return De({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,mr=at.current,Se(at,e),Se(bt,bt.current),!0}function pd(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=jp(e,t,mr),r.__reactInternalMemoizedMergedChildContext=e,Ce(bt),Ce(at),Se(at,e)):Ce(bt),Se(bt,n)}var yn=null,Jl=!1,Fa=!1;function Up(e){yn===null?yn=[e]:yn.push(e)}function Ny(e){Jl=!0,Up(e)}function rr(){if(!Fa&&yn!==null){Fa=!0;var e=0,t=be;try{var n=yn;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,Jl=!1}catch(i){throw yn!==null&&(yn=yn.slice(e+1)),fp(Ru,rr),i}finally{be=t,Fa=!1}}return null}var zy=Ln.ReactCurrentBatchConfig;function Yt(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var kl=nr(null),_l=null,Vr=null,Uu=null;function Vu(){Uu=Vr=_l=null}function Bu(e){var t=kl.current;Ce(kl),e._currentValue=t}function Bs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zr(e,t){_l=e,Uu=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(vt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(_l===null)throw Error(q(308));Vr=e,_l.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var Jt=null,Fn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t){var n=e.updateQueue;n!==null&&(n=n.shared,zm(e)?(e=n.interleaved,e===null?(t.next=t,Jt===null?Jt=[n]:Jt.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sl(e,t,n,r){var i=e.updateQueue;Fn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,c=u=s=null,a=o;do{var f=a.lane,w=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,k=a;switch(f=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){h=v.call(w,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,f=typeof v=="function"?v.call(w,h,f):v,f==null)break e;h=De({},h,f);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=w,s=h):c=c.next=w,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yr|=l,e.lanes=l,e.memoizedState=h}}function hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Bp=new Hf.Component().refs;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zl={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=qn(e),o=xn(r,i);o.payload=t,n!=null&&(o.callback=n),Gn(e,o),t=Bt(e,i,r),t!==null&&el(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=qn(e),o=xn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),Gn(e,o),t=Bt(e,i,r),t!==null&&el(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=qn(e),i=xn(n,r);i.tag=2,t!=null&&(i.callback=t),Gn(e,i),t=Bt(e,r,n),t!==null&&el(t,e,r)}};function gd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(i,o):!0}function Wp(e,t,n){var r=!1,i=Jn,o=t.contextType;return typeof o=="object"&&o!==null?o=Wt(o):(i=xt(t)?mr:at.current,r=t.contextTypes,o=(r=r!=null)?ri(e,i):Jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zl.enqueueReplaceState(t,t.state,null)}function Hs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bp,Wu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Wt(o):(o=xt(t)?mr:at.current,i.context=ri(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ws(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zl.enqueueReplaceState(i,i.state,null),Sl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}var Br=[],Wr=0,El=null,Cl=0,Ft=[],Mt=0,hr=null,wn=1,bn="";function or(e,t){Br[Wr++]=Cl,Br[Wr++]=El,El=e,Cl=t}function Hp(e,t,n){Ft[Mt++]=wn,Ft[Mt++]=bn,Ft[Mt++]=hr,hr=e;var r=wn;e=bn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var o=32-Zt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,wn=1<<32-Zt(t)+i|n<<i|r,bn=o+e}else wn=1<<o|n<<i|r,bn=e}function Hu(e){e.return!==null&&(or(e,1),Hp(e,1,0))}function Qu(e){for(;e===El;)El=Br[--Wr],Br[Wr]=null,Cl=Br[--Wr],Br[Wr]=null;for(;e===hr;)hr=Ft[--Mt],Ft[Mt]=null,bn=Ft[--Mt],Ft[Mt]=null,wn=Ft[--Mt],Ft[Mt]=null}var Tt=null,yt=null,Le=!1,Xt=null;function Qp(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,yt=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:wn,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,yt=null,!0):!1;default:return!1}}function Qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gs(e){if(Le){var t=yt;if(t){var n=t;if(!vd(e,t)){if(Qs(e))throw Error(q(418));t=vn(n.nextSibling);var r=Tt;t&&vd(e,t)?Qp(r,n):(e.flags=e.flags&-4097|2,Le=!1,Tt=e)}}else{if(Qs(e))throw Error(q(418));e.flags=e.flags&-4097|2,Le=!1,Tt=e}}}function wd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function _i(e){if(e!==Tt)return!1;if(!Le)return wd(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=yt)){if(Qs(e)){for(e=yt;e;)e=vn(e.nextSibling);throw Error(q(418))}for(;t;)Qp(e,t),t=vn(t.nextSibling)}if(wd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=Tt?vn(e.stateNode.nextSibling):null;return!0}function ii(){yt=Tt=null,Le=!1}function Gu(e){Xt===null?Xt=[e]:Xt.push(e)}function Si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Bp&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bd(e){var t=e._init;return t(e._payload)}function Gp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Zn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,g){return d===null||d.tag!==6?(d=Ba(m,p.mode,g),d.return=p,d):(d=i(d,m),d.return=p,d)}function s(p,d,m,g){var x=m.type;return x===$r?c(p,d,m.props.children,g,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$n&&bd(x)===d.type)?(g=i(d,m.props),g.ref=Si(p,d,m),g.return=p,g):(g=ol(m.type,m.key,m.props,null,p.mode,g),g.ref=Si(p,d,m),g.return=p,g)}function u(p,d,m,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Wa(m,p.mode,g),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,g,x){return d===null||d.tag!==7?(d=fr(m,p.mode,g,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ba(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case To:return m=ol(d.type,d.key,d.props,null,p.mode,m),m.ref=Si(p,null,d),m.return=p,m;case Pr:return d=Wa(d,p.mode,m),d.return=p,d;case $n:var g=d._init;return h(p,g(d._payload),m)}if(Fi(d)||vi(d))return d=fr(d,p.mode,m,null),d.return=p,d;Fo(p,d)}return null}function f(p,d,m,g){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:a(p,d,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case To:return m.key===x?s(p,d,m,g):null;case Pr:return m.key===x?u(p,d,m,g):null;case $n:return x=m._init,f(p,d,x(m._payload),g)}if(Fi(m)||vi(m))return x!==null?null:c(p,d,m,g,null);Fo(p,m)}return null}function w(p,d,m,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,a(d,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case To:return p=p.get(g.key===null?m:g.key)||null,s(d,p,g,x);case Pr:return p=p.get(g.key===null?m:g.key)||null,u(d,p,g,x);case $n:var b=g._init;return w(p,d,m,b(g._payload),x)}if(Fi(g)||vi(g))return p=p.get(m)||null,c(d,p,g,x,null);Fo(d,g)}return null}function v(p,d,m,g){for(var x=null,b=null,_=d,E=d=0,M=null;_!==null&&E<m.length;E++){_.index>E?(M=_,_=null):M=_.sibling;var P=f(p,_,m[E],g);if(P===null){_===null&&(_=M);break}e&&_&&P.alternate===null&&t(p,_),d=o(P,d,E),b===null?x=P:b.sibling=P,b=P,_=M}if(E===m.length)return n(p,_),Le&&or(p,E),x;if(_===null){for(;E<m.length;E++)_=h(p,m[E],g),_!==null&&(d=o(_,d,E),b===null?x=_:b.sibling=_,b=_);return Le&&or(p,E),x}for(_=r(p,_);E<m.length;E++)M=w(_,p,E,m[E],g),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?E:M.key),d=o(M,d,E),b===null?x=M:b.sibling=M,b=M);return e&&_.forEach(function(N){return t(p,N)}),Le&&or(p,E),x}function k(p,d,m,g){var x=vi(m);if(typeof x!="function")throw Error(q(150));if(m=x.call(m),m==null)throw Error(q(151));for(var b=x=null,_=d,E=d=0,M=null,P=m.next();_!==null&&!P.done;E++,P=m.next()){_.index>E?(M=_,_=null):M=_.sibling;var N=f(p,_,P.value,g);if(N===null){_===null&&(_=M);break}e&&_&&N.alternate===null&&t(p,_),d=o(N,d,E),b===null?x=N:b.sibling=N,b=N,_=M}if(P.done)return n(p,_),Le&&or(p,E),x;if(_===null){for(;!P.done;E++,P=m.next())P=h(p,P.value,g),P!==null&&(d=o(P,d,E),b===null?x=P:b.sibling=P,b=P);return Le&&or(p,E),x}for(_=r(p,_);!P.done;E++,P=m.next())P=w(_,p,E,P.value,g),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?E:P.key),d=o(P,d,E),b===null?x=P:b.sibling=P,b=P);return e&&_.forEach(function(C){return t(p,C)}),Le&&or(p,E),x}function S(p,d,m,g){if(typeof m=="object"&&m!==null&&m.type===$r&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case To:e:{for(var x=m.key,b=d;b!==null;){if(b.key===x){if(x=m.type,x===$r){if(b.tag===7){n(p,b.sibling),d=i(b,m.props.children),d.return=p,p=d;break e}}else if(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$n&&bd(x)===b.type){n(p,b.sibling),d=i(b,m.props),d.ref=Si(p,b,m),d.return=p,p=d;break e}n(p,b);break}else t(p,b);b=b.sibling}m.type===$r?(d=fr(m.props.children,p.mode,g,m.key),d.return=p,p=d):(g=ol(m.type,m.key,m.props,null,p.mode,g),g.ref=Si(p,d,m),g.return=p,p=g)}return l(p);case Pr:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Wa(m,p.mode,g),d.return=p,p=d}return l(p);case $n:return b=m._init,S(p,d,b(m._payload),g)}if(Fi(m))return v(p,d,m,g);if(vi(m))return k(p,d,m,g);Fo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Ba(m,p.mode,g),d.return=p,p=d),l(p)):n(p,d)}return S}var oi=Gp(!0),Yp=Gp(!1),bo={},un=nr(bo),ao=nr(bo),so=nr(bo);function ur(e){if(e===bo)throw Error(q(174));return e}function Yu(e,t){switch(Se(so,t),Se(ao,e),Se(un,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Es(t,e)}Ce(un),Se(un,t)}function li(){Ce(un),Ce(ao),Ce(so)}function qp(e){ur(so.current);var t=ur(un.current),n=Es(t,e.type);t!==n&&(Se(ao,e),Se(un,n))}function qu(e){ao.current===e&&(Ce(un),Ce(ao))}var ze=nr(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ma=[];function Xu(){for(var e=0;e<Ma.length;e++)Ma[e]._workInProgressVersionPrimary=null;Ma.length=0}var tl=Ln.ReactCurrentDispatcher,Aa=Ln.ReactCurrentBatchConfig,gr=0,Ie=null,je=null,Qe=null,Ll=!1,Hi=!1,uo=0,Ry=0;function tt(){throw Error(q(321))}function Ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,i,o){if(gr=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?$y:Fy,e=n(r,i),Hi){o=0;do{if(Hi=!1,uo=0,25<=o)throw Error(q(301));o+=1,Qe=je=null,t.updateQueue=null,tl.current=My,e=n(r,i)}while(Hi)}if(tl.current=Ol,t=je!==null&&je.next!==null,gr=0,Qe=je=Ie=null,Ll=!1,t)throw Error(q(300));return e}function Zu(){var e=uo!==0;return uo=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ht(){if(je===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Qe===null?Ie.memoizedState:Qe.next;if(t!==null)Qe=t,je=e;else{if(e===null)throw Error(q(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Qe===null?Ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function co(e,t){return typeof t=="function"?t(e):t}function ja(e){var t=Ht(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if((gr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Ie.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,en(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,yr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ua(e){var t=Ht(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);en(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xp(){}function Kp(e,t){var n=Ie,r=Ht(),i=t(),o=!en(r.memoizedState,i);if(o&&(r.memoizedState=i,vt=!0),r=r.queue,ec(em.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,fo(9,Zp.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(q(349));(gr&30)!==0||Jp(n,t,i)}return i}function Jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,r){t.value=n,t.getSnapshot=r,tm(t)&&Bt(e,1,-1)}function em(e,t,n){return n(function(){tm(t)&&Bt(e,1,-1)})}function tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function xd(e){var t=on();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=Py.bind(null,Ie,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nm(){return Ht().memoizedState}function nl(e,t,n,r){var i=on();Ie.flags|=e,i.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function ea(e,t,n,r){var i=Ht();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&Ku(r,l.deps)){i.memoizedState=fo(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=fo(1|t,n,o,r)}function kd(e,t){return nl(8390656,8,e,t)}function ec(e,t){return ea(2048,8,e,t)}function rm(e,t){return ea(4,2,e,t)}function im(e,t){return ea(4,4,e,t)}function om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lm(e,t,n){return n=n!=null?n.concat([e]):null,ea(4,4,om.bind(null,t,e),n)}function tc(){}function am(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sm(e,t){var n=Ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function um(e,t,n){return(gr&21)===0?(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n):(en(n,t)||(n=hp(),Ie.lanes|=n,yr|=n,e.baseState=!0),t)}function Iy(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{be=n,Aa.transition=r}}function cm(){return Ht().memoizedState}function Dy(e,t,n){var r=qn(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dm(e)?fm(t,n):(pm(e,t,n),n=ft(),e=Bt(e,r,n),e!==null&&mm(e,t,r))}function Py(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dm(e))fm(t,i);else{pm(e,t,i);var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,l))return}catch{}finally{}n=ft(),e=Bt(e,r,n),e!==null&&mm(e,t,r)}}function dm(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function fm(e,t){Hi=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pm(e,t,n){zm(e)?(e=t.interleaved,e===null?(n.next=n,Jt===null?Jt=[t]:Jt.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function mm(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}var Ol={readContext:Wt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},$y={readContext:Wt,useCallback:function(e,t){return on().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:kd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=on();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=on();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dy.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=on();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:tc,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=Iy.bind(null,e[1]),on().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=on();if(Le){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Ve===null)throw Error(q(349));(gr&30)!==0||Jp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kd(em.bind(null,r,o,e),[e]),r.flags|=2048,fo(9,Zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=on(),t=Ve.identifierPrefix;if(Le){var n=bn,r=wn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fy={readContext:Wt,useCallback:am,useContext:Wt,useEffect:ec,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:im,useMemo:sm,useReducer:ja,useRef:nm,useState:function(){return ja(co)},useDebugValue:tc,useDeferredValue:function(e){var t=Ht();return um(t,je.memoizedState,e)},useTransition:function(){var e=ja(co)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Kp,useId:cm,unstable_isNewReconciler:!1},My={readContext:Wt,useCallback:am,useContext:Wt,useEffect:ec,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:im,useMemo:sm,useReducer:Ua,useRef:nm,useState:function(){return Ua(co)},useDebugValue:tc,useDeferredValue:function(e){var t=Ht();return je===null?t.memoizedState=e:um(t,je.memoizedState,e)},useTransition:function(){var e=Ua(co)[0],t=Ht().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Kp,useId:cm,unstable_isNewReconciler:!1};function nc(e,t){try{var n="",r=t;do n+=fg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function hm(e,t,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zl||(zl=!0,ru=r),Ys(e,t)},n}function gm(e,t,n){n=xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ys(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ys(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ay;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jy.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xn(-1,1),t.tag=2,Gn(n,t))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ym,qs,vm,wm;ym=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qs=function(){};vm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ur(un.current);var o=null;switch(n){case"input":i=xs(e,i),r=xs(e,r),o=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),o=[];break;case"textarea":i=Ss(e,i),r=Ss(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}Cs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Ee("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jy(e,t,n){var r=t.pendingProps;switch(Qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return xt(t.type)&&bl(),nt(t),null;case 3:return r=t.stateNode,li(),Ce(bt),Ce(at),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xt!==null&&(lu(Xt),Xt=null))),qs(e,t),nt(t),null;case 5:qu(t);var i=ur(so.current);if(n=t.type,e!==null&&t.stateNode!=null)vm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return nt(t),null}if(e=ur(un.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ln]=t,r[lo]=o,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)Ee(Ai[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Ac(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":Uc(r,o),Ee("invalid",r)}Cs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&$o(r.textContent,a,e),i=["children",""+a]):Xi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Lo(r),jc(r,o,!0);break;case"textarea":Lo(r),Vc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ln]=t,e[lo]=r,ym(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ts(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)Ee(Ai[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":Ac(e,r),i=xs(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Uc(e,r),i=Ss(e,r),Ee("invalid",e);break;default:i=r}Cs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?rp(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&tp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ki(e,s):typeof s=="number"&&Ki(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Ee("scroll",e):s!=null&&Tu(e,o,s,l))}switch(n){case"input":Lo(e),jc(e,r,!1);break;case"textarea":Lo(e),Vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qr(e,!!r.multiple,o,!1):r.defaultValue!=null&&qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)wm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=ur(so.current),ur(un.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[ln]=t,(o=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:$o(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=t,t.stateNode=r}return nt(t),null;case 13:if(Ce(ze),r=t.memoizedState,Le&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0){for(r=yt;r;)r=vn(r.nextSibling);return ii(),t.flags|=98560,t}if(r!==null&&r.dehydrated!==null){if(r=_i(t),e===null){if(!r)throw Error(q(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(q(317));r[ln]=t}else ii(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;return nt(t),null}return Xt!==null&&(lu(Xt),Xt=null),(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?_i(t):n=e.memoizedState!==null,r!==n&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Ue===0&&(Ue=3):sc())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return li(),qs(e,t),e===null&&io(t.stateNode.containerInfo),nt(t),null;case 10:return Bu(t.type._context),nt(t),null;case 17:return xt(t.type)&&bl(),nt(t),null;case 19:if(Ce(ze),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ei(o,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Tl(e),l!==null){for(t.flags|=128,Ei(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(ze,ze.current&1|2),t.child}e=e.sibling}o.tail!==null&&Fe()>ai&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Le)return nt(t),null}else 2*Fe()-o.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,Ei(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Fe(),t.sibling=null,n=ze.current,Se(ze,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ct&1073741824)!==0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}var Uy=Ln.ReactCurrentOwner,vt=!1;function dt(e,t,n,r){t.child=e===null?Yp(t,null,n,r):oi(t,e.child,n,r)}function Cd(e,t,n,r,i){n=n.render;var o=t.ref;return Zr(t,i),r=Ju(e,t,n,r,o,i),n=Zu(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Le&&n&&Hu(t),t.flags|=1,dt(e,t,r,i),t.child)}function Td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bm(e,t,o,r,i)):(e=ol(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(l,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ro(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(vt=!0);else return t.lanes=e.lanes,En(e,t,i)}return Xs(e,t,n,r,i)}function xm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Qr,Ct),Ct|=n;else if((n&1073741824)!==0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Se(Qr,Ct),Ct|=r;else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(Qr,Ct),Ct|=e,null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Se(Qr,Ct),Ct|=r;return dt(e,t,i,n),t.child}function km(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,n,r,i){var o=xt(n)?mr:at.current;return o=ri(t,o),Zr(t,i),n=Ju(e,t,n,r,o,i),r=Zu(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Le&&r&&Hu(t),t.flags|=1,dt(e,t,n,i),t.child)}function Ld(e,t,n,r,i){if(xt(n)){var o=!0;xl(t)}else o=!1;if(Zr(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Wp(t,n,r),Hs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=xt(n)?mr:at.current,u=ri(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&yd(t,l,r,u),Fn=!1;var f=t.memoizedState;l.state=f,Sl(t,r,l,i),s=t.memoizedState,a!==r||f!==s||bt.current||Fn?(typeof c=="function"&&(Ws(t,n,c,r),s=t.memoizedState),(a=Fn||gd(t,n,a,r,f,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Yt(t.type,a),l.props=u,h=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Wt(s):(s=xt(n)?mr:at.current,s=ri(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||f!==s)&&yd(t,l,r,s),Fn=!1,f=t.memoizedState,l.state=f,Sl(t,r,l,i);var v=t.memoizedState;a!==h||f!==v||bt.current||Fn?(typeof w=="function"&&(Ws(t,n,w,r),v=t.memoizedState),(u=Fn||gd(t,n,u,r,f,v,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,o,i)}function Ks(e,t,n,r,i,o){km(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&pd(t,n,!1),En(e,t,o);r=t.stateNode,Uy.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=oi(t,e.child,null,o),t.child=oi(t,null,a,o)):dt(e,t,a,o),t.memoizedState=r.state,i&&pd(t,n,!0),t.child}function _m(e){var t=e.stateNode;t.pendingContext?fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fd(e,t.context,!1),Yu(e,t.containerInfo)}function Od(e,t,n,r,i){return ii(),Gu(i),t.flags|=256,dt(e,t,n,r),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t){return{baseLanes:e.baseLanes|t,cachePool:null,transitions:e.transitions}}function Sm(e,t,n){var r=t.pendingProps,i=ze.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(ze,i&1),e===null)return Gs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Dl(i,r,0,null),e=fr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ao(n),t.memoizedState=Mo,e):Js(t,i));if(i=e.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(l)return t.flags&256?(t.flags&=-257,jo(e,t,n,Error(q(422)))):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Dl({mode:"visible",children:r.children},i,0,null),o=fr(o,i,n,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&oi(t,e.child,null,n),t.child.memoizedState=Ao(n),t.memoizedState=Mo,o);if((t.mode&1)===0)t=jo(e,t,n,null);else if(a.data==="$!")t=jo(e,t,n,Error(q(419)));else if(r=(n&e.childLanes)!==0,vt||r){if(r=Ve,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}r=(o&(r.suspendedLanes|n))!==0?0:o,r!==0&&r!==i.retryLane&&(i.retryLane=r,Bt(e,r,-1))}sc(),t=jo(e,t,n,Error(q(421)))}else a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zy.bind(null,e),a._reactRetry=t,t=null):(n=i.treeContext,yt=vn(a.nextSibling),Tt=t,Le=!0,Xt=null,n!==null&&(Ft[Mt++]=wn,Ft[Mt++]=bn,Ft[Mt++]=hr,wn=n.id,bn=n.overflow,hr=t),t=Js(t,t.pendingProps.children),t.flags|=4096);return t}return o?(r=Rd(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?Ao(n):Nd(i,n),o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r):(n=zd(e,t,r.children,n),t.memoizedState=null,n)}return o?(r=Rd(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?Ao(n):Nd(i,n),o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r):(n=zd(e,t,r.children,n),t.memoizedState=null,n)}function Js(e,t){return t=Dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zd(e,t,n,r){var i=e.child;return e=i.sibling,n=Zn(i,{mode:"visible",children:n}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function Rd(e,t,n,r,i){var o=t.mode;e=e.child;var l=e.sibling,a={mode:"hidden",children:n};return(o&1)===0&&t.child!==e?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=Zn(e,a),n.subtreeFlags=e.subtreeFlags&14680064),l!==null?r=Zn(l,r):(r=fr(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function jo(e,t,n,r){return r!==null&&Gu(r),oi(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bs(e.return,t,n)}function Va(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Em(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=ze.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(ze,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Va(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Tl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Va(t,!0,n,null,o);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vy(e,t,n){switch(t.tag){case 3:_m(t),ii();break;case 5:qp(t);break;case 1:xt(t.type)&&xl(t);break;case 4:Yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(ze,ze.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Sm(e,t,n):(Se(ze,ze.current&1),e=En(e,t,n),e!==null?e.sibling:null);Se(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Em(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,xm(e,t,n)}return En(e,t,n)}function By(e,t){switch(Qu(t),t.tag){case 1:return xt(t.type)&&bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return li(),Ce(bt),Ce(at),Xu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qu(t),null;case 13:if(Ce(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(ze),null;case 4:return li(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Uo=!1,ot=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,re=null;function Hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Zs(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Dd=!1;function Hy(e,t){if(Fs=gl,e=zp(),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,h=e,f=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)f=h,h=w;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=l),f===o&&++c===r&&(s=l),(w=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},gl=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,S=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Yt(t.type,k),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;if(m.nodeType===1)m.textContent="";else if(m.nodeType===9){var g=m.body;g!=null&&(g.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(x){Pe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return v=Dd,Dd=!1,v}function Qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zs(t,n,o)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cm(e){var t=e.alternate;t!==null&&(e.alternate=null,Cm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[lo],delete t[Us],delete t[Ly],delete t[Oy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tm(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var qe=null,qt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)Lm(e,t,n),n=n.sibling}function Lm(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:ot||Hr(n,t);case 6:var r=qe,i=qt;qe=null,Nn(e,t,n),qe=r,qt=i,qe!==null&&(qt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(e=qe,n=n.stateNode,e.nodeType===8?$a(e.parentNode,n):e.nodeType===1&&$a(e,n),to(e)):$a(qe,n.stateNode));break;case 4:r=qe,i=qt,qe=n.stateNode.containerInfo,qt=!0,Nn(e,t,n),qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Zs(n,t,l),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!ot&&(Hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,t,a)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Nn(e,t,n),ot=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function $d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wy),t.forEach(function(r){var i=e0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,qt=!1;break e;case 3:qe=a.stateNode.containerInfo,qt=!0;break e;case 4:qe=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(qe===null)throw Error(q(160));Lm(o,l,i),qe=null,qt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}function Om(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),rn(e),r&4){try{Qi(3,e,e.return),ta(3,e)}catch(v){Pe(e,e.return,v)}try{Qi(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Qt(t,e),rn(e),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(Qt(t,e),rn(e),r&512&&n!==null&&Hr(n,n.return),e.flags&32){var i=e.stateNode;try{Ki(i,"")}catch(v){Pe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jf(i,o),Ts(a,l);var u=Ts(a,o);for(l=0;l<s.length;l+=2){var c=s[l],h=s[l+1];c==="style"?rp(i,h):c==="dangerouslySetInnerHTML"?tp(i,h):c==="children"?Ki(i,h):Tu(i,c,h,u)}switch(a){case"input":ks(i,o);break;case"textarea":Zf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?qr(i,!!o.multiple,w,!1):f!==!!o.multiple&&(o.defaultValue!=null?qr(i,!!o.multiple,o.defaultValue,!0):qr(i,!!o.multiple,o.multiple?[]:"",!1))}i[lo]=o}catch(v){Pe(e,e.return,v)}}break;case 6:if(Qt(t,e),rn(e),r&4){if(e.stateNode===null)throw Error(q(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(v){Pe(e,e.return,v)}}break;case 3:if(Qt(t,e),rn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Qt(t,e),rn(e);break;case 13:Qt(t,e),rn(e),u=e.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(oc=Fe()),r&4&&$d(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(c=ot)||u,Qt(t,e),ot=c):Qt(t,e),rn(e),r&8192){c=e.memoizedState!==null;e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=np("display",l))}catch(v){Pe(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}if(c&&!u&&(e.mode&1)!==0)for(re=e,e=e.child;e!==null;){for(u=re=e;re!==null;){switch(c=re,h=c.child,c.tag){case 0:case 11:case 14:case 15:Qi(4,c,c.return);break;case 1:if(Hr(c,c.return),o=c.stateNode,typeof o.componentWillUnmount=="function"){f=c,w=c.return;try{i=f,o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(v){Pe(f,w,v)}}break;case 5:Hr(c,c.return);break;case 22:if(c.memoizedState!==null){Md(u);continue}}h!==null?(h.return=c,re=h):Md(u)}e=e.sibling}}break;case 19:Qt(t,e),rn(e),r&4&&$d(e);break;case 21:break;default:Qt(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tm(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var o=Pd(e);nu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Pd(e);tu(e,a,l);break;default:throw Error(q(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qy(e,t,n){re=e,Nm(e)}function Nm(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var i=re,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Uo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ot;a=Uo;var u=ot;if(Uo=l,(ot=s)&&!u)for(re=i;re!==null;)l=re,s=l.child,l.tag===22&&l.memoizedState!==null?Ad(i):s!==null?(s.return=l,re=s):Ad(i);for(;o!==null;)re=o,Nm(o),o=o.sibling;re=i,Uo=a,ot=u}Fd(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,re=o):Fd(e)}}function Fd(e){for(;re!==null;){var t=re;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&to(h)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(q(163))}ot||t.flags&512&&eu(t)}catch(f){Pe(t,t.return,f)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function Md(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function Ad(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{eu(t)}catch(s){Pe(t,o,s)}break;case 5:var l=t.return;try{eu(t)}catch(s){Pe(t,l,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){re=null;break}var a=t.sibling;if(a!==null){a.return=t.return,re=a;break}re=t.return}}var Gy=Math.ceil,Nl=Ln.ReactCurrentDispatcher,rc=Ln.ReactCurrentOwner,Vt=Ln.ReactCurrentBatchConfig,he=0,Ve=null,Ae=null,Ke=0,Ct=0,Qr=nr(0),Ue=0,po=null,yr=0,na=0,ic=0,Gi=null,gt=null,oc=0,ai=1/0,hn=null,zl=!1,ru=null,Yn=null,Vo=!1,Vn=null,Rl=0,Yi=0,iu=null,rl=-1,il=0;function ft(){return(he&6)!==0?Fe():rl!==-1?rl:rl=Fe()}function qn(e){return(e.mode&1)===0?1:(he&2)!==0&&Ke!==0?Ke&-Ke:zy.transition!==null?(il===0&&(il=hp()),il):(e=be,e!==0||(e=window.event,e=e===void 0?16:kp(e.type)),e)}function Bt(e,t,n){if(50<Yi)throw Yi=0,iu=null,Error(q(185));var r=ra(e,t);return r===null?null:(yo(r,t,n),((he&2)===0||r!==Ve)&&(r===Ve&&((he&2)===0&&(na|=t),Ue===4&&jn(r,Ke)),kt(r,n),t===1&&he===0&&(e.mode&1)===0&&(ai=Fe()+500,Jl&&rr())),r)}function ra(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function zm(e){return(Ve!==null||Jt!==null)&&(e.mode&1)!==0&&(he&2)===0}function kt(e,t){var n=e.callbackNode;zg(e,t);var r=hl(e,e===Ve?Ke:0);if(r===0)n!==null&&Hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hc(n),t===1)e.tag===0?Ny(jd.bind(null,e)):Up(jd.bind(null,e)),Cy(function(){he===0&&rr()}),n=null;else{switch(gp(r)){case 1:n=Ru;break;case 4:n=pp;break;case 16:n=ml;break;case 536870912:n=mp;break;default:n=ml}n=Am(n,Rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rm(e,t){if(rl=-1,il=0,(he&6)!==0)throw Error(q(327));var n=e.callbackNode;if(ei()&&e.callbackNode!==n)return null;var r=hl(e,e===Ve?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Il(e,r);else{t=r;var i=he;he|=2;var o=Dm();(Ve!==e||Ke!==t)&&(hn=null,ai=Fe()+500,dr(e,t));do try{Xy();break}catch(a){Im(e,a)}while(1);Vu(),Nl.current=o,he=i,Ae!==null?t=0:(Ve=null,Ke=0,t=Ue)}if(t!==0){if(t===2&&(i=Rs(e),i!==0&&(r=i,t=ou(e,i))),t===1)throw n=po,dr(e,0),jn(e,r),kt(e,Fe()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Yy(i)&&(t=Il(e,r),t===2&&(o=Rs(e),o!==0&&(r=o,t=ou(e,o))),t===1))throw n=po,dr(e,0),jn(e,r),kt(e,Fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:lr(e,gt,hn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=oc+500-Fe(),10<t)){if(hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=js(lr.bind(null,e,gt,hn),t);break}lr(e,gt,hn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Zt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gy(r/1960))-r,10<r){e.timeoutHandle=js(lr.bind(null,e,gt,hn),r);break}lr(e,gt,hn);break;case 5:lr(e,gt,hn);break;default:throw Error(q(329))}}}return kt(e,Fe()),e.callbackNode===n?Rm.bind(null,e):null}function ou(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=Il(e,t),e!==2&&(t=gt,gt=n,t!==null&&lu(t)),e}function lu(e){gt===null?gt=e:gt.push.apply(gt,e)}function Yy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!en(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~ic,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),r=1<<n;e[n]=-1,t&=~r}}function jd(e){if((he&6)!==0)throw Error(q(327));ei();var t=hl(e,0);if((t&1)===0)return kt(e,Fe()),null;var n=Il(e,t);if(e.tag!==0&&n===2){var r=Rs(e);r!==0&&(t=r,n=ou(e,r))}if(n===1)throw n=po,dr(e,0),jn(e,t),kt(e,Fe()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,gt,hn),kt(e,Fe()),null}function lc(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(ai=Fe()+500,Jl&&rr())}}function vr(e){Vn!==null&&Vn.tag===0&&(he&6)===0&&ei();var t=he;he|=1;var n=Vt.transition,r=be;try{if(Vt.transition=null,be=1,e)return e()}finally{be=r,Vt.transition=n,he=t,(he&6)===0&&rr()}}function ac(){Ct=Qr.current,Ce(Qr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ey(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:li(),Ce(bt),Ce(at),Xu();break;case 5:qu(r);break;case 4:li();break;case 13:Ce(ze);break;case 19:Ce(ze);break;case 10:Bu(r.type._context);break;case 22:case 23:ac()}n=n.return}if(Ve=e,Ae=e=Zn(e.current,null),Ke=Ct=t,Ue=0,po=null,ic=na=yr=0,gt=Gi=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Jt=null}return e}function Im(e,t){do{var n=Ae;try{if(Vu(),tl.current=Ol,Ll){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(gr=0,Qe=je=Ie=null,Hi=!1,uo=0,rc.current=null,n===null||n.return===null){Ue=1,po=t,Ae=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ke,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Sd(l);if(w!==null){w.flags&=-257,Ed(w,l,a,o,t),w.mode&1&&_d(o,u,t),t=w,s=u;var v=t.updateQueue;if(v===null){var k=new Set;k.add(s),t.updateQueue=k}else v.add(s);break e}else{if((t&1)===0){_d(o,u,t),sc();break e}s=Error(q(426))}}else if(Le&&a.mode&1){var S=Sd(l);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Ed(S,l,a,o,t),Gu(s);break e}}o=s,Ue!==4&&(Ue=2),Gi===null?Gi=[o]:Gi.push(o),s=nc(s,a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=hm(a,s,t);md(a,p);break e;case 1:o=s;var d=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yn===null||!Yn.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=gm(a,o,t);md(a,g);break e}}a=a.return}while(a!==null)}$m(n)}catch(x){t=x,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Dm(){var e=Nl.current;return Nl.current=Ol,e===null?Ol:e}function sc(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ve===null||(yr&268435455)===0&&(na&268435455)===0||jn(Ve,Ke)}function Il(e,t){var n=he;he|=2;var r=Dm();(Ve!==e||Ke!==t)&&(hn=null,dr(e,t));do try{qy();break}catch(i){Im(e,i)}while(1);if(Vu(),he=n,Nl.current=r,Ae!==null)throw Error(q(261));return Ve=null,Ke=0,Ue}function qy(){for(;Ae!==null;)Pm(Ae)}function Xy(){for(;Ae!==null&&!kg();)Pm(Ae)}function Pm(e){var t=Mm(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?$m(e):Ae=t,rc.current=null}function $m(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jy(n,t,Ct),n!==null){Ae=n;return}}else{if(n=By(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function lr(e,t,n){var r=be,i=Vt.transition;try{Vt.transition=null,be=1,Ky(e,t,n,r)}finally{Vt.transition=i,be=r}return null}function Ky(e,t,n,r){do ei();while(Vn!==null);if((he&6)!==0)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rg(e,o),e===Ve&&(Ae=Ve=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vo||(Vo=!0,Am(ml,function(){return ei(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Vt.transition,Vt.transition=null;var l=be;be=1;var a=he;he|=4,rc.current=null,Hy(e,n),Om(n,e),vy(Ms),gl=!!Fs,Ms=Fs=null,e.current=n,Qy(n),_g(),he=a,be=l,Vt.transition=o}else e.current=n;if(Vo&&(Vo=!1,Vn=e,Rl=i),o=e.pendingLanes,o===0&&(Yn=null),Cg(n.stateNode),kt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)r(t[n]);if(zl)throw zl=!1,e=ru,ru=null,e;return(Rl&1)!==0&&e.tag!==0&&ei(),o=e.pendingLanes,(o&1)!==0?e===iu?Yi++:(Yi=0,iu=e):Yi=0,rr(),null}function ei(){if(Vn!==null){var e=gp(Rl),t=Vt.transition,n=be;try{if(Vt.transition=null,be=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,Rl=0,(he&6)!==0)throw Error(q(331));var i=he;for(he|=4,re=e.current;re!==null;){var o=re,l=o.child;if((re.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(re=u;re!==null;){var c=re;switch(c.tag){case 0:case 11:case 15:Qi(8,c,o)}var h=c.child;if(h!==null)h.return=c,re=h;else for(;re!==null;){c=re;var f=c.sibling,w=c.return;if(Cm(c),c===u){re=null;break}if(f!==null){f.return=w,re=f;break}re=w}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}re=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,re=l;else e:for(;re!==null;){if(o=re,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Qi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,re=p;break e}re=o.return}}var d=e.current;for(re=d;re!==null;){l=re;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,re=m;else e:for(l=d;re!==null;){if(a=re,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ta(9,a)}}catch(x){Pe(a,a.return,x)}if(a===l){re=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,re=g;break e}re=a.return}}if(he=i,rr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Gl,e)}catch{}r=!0}return r}finally{be=n,Vt.transition=t}}return!1}function Ud(e,t,n){t=nc(n,t),t=hm(e,t,1),Gn(e,t),t=ft(),e=ra(e,1),e!==null&&(yo(e,1,t),kt(e,t))}function Pe(e,t,n){if(e.tag===3)Ud(e,e,n);else for(;t!==null;){if(t.tag===3){Ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=nc(n,e),e=gm(t,e,1),Gn(t,e),e=ft(),t=ra(t,1),t!==null&&(yo(t,1,e),kt(t,e));break}}t=t.return}}function Jy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ke&n)===n&&(Ue===4||Ue===3&&(Ke&130023424)===Ke&&500>Fe()-oc?dr(e,0):ic|=n),kt(e,t)}function Fm(e,t){t===0&&((e.mode&1)===0?t=1:(t=zo,zo<<=1,(zo&130023424)===0&&(zo=4194304)));var n=ft();e=ra(e,t),e!==null&&(yo(e,t,n),kt(e,n))}function Zy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fm(e,n)}function e0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),Fm(e,n)}var Mm;Mm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)vt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return vt=!1,Vy(e,t,n);vt=(e.flags&131072)!==0}else vt=!1,Le&&(t.flags&1048576)!==0&&Hp(t,Cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var i=ri(t,at.current);Zr(t,n),i=Ju(null,t,r,e,i,n);var o=Zu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(o=!0,xl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wu(t),i.updater=Zl,t.stateNode=i,i._reactInternals=t,Hs(t,r,e,n),t=Ks(null,t,r,!0,o,n)):(t.tag=0,Le&&o&&Hu(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=n0(r),e=Yt(r,e),i){case 0:t=Xs(null,t,r,e,n);break e;case 1:t=Ld(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=Td(null,t,r,Yt(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),Xs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),Ld(e,t,r,i,n);case 3:e:{if(_m(t),e===null)throw Error(q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vp(e,t),Sl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Error(q(423)),t=Od(e,t,r,n,i);break e}else if(r!==i){i=Error(q(424)),t=Od(e,t,r,n,i);break e}else for(yt=vn(t.stateNode.containerInfo.firstChild),Tt=t,Le=!0,Xt=null,n=Yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){t=En(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return qp(t),e===null&&Gs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,As(r,i)?l=null:o!==null&&As(r,o)&&(t.flags|=32),km(e,t),dt(e,t,l,n),t.child;case 6:return e===null&&Gs(t),null;case 13:return Sm(e,t,n);case 4:return Yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),Cd(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Se(kl,r._currentValue),r._currentValue=l,o!==null)if(en(o.value,l)){if(o.children===i.children&&!bt.current){t=En(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=xn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Bs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(q(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Bs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zr(t,n),i=Wt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Yt(r,t.pendingProps),i=Yt(r.type,i),Td(e,t,r,i,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,xt(r)?(e=!0,xl(t)):e=!1,Zr(t,n),Wp(t,r,i),Hs(t,r,i,n),Ks(null,t,r,!0,e,n);case 19:return Em(e,t,n);case 22:return xm(e,t,n)}throw Error(q(156,t.tag))};function Am(e,t){return fp(e,t)}function t0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new t0(e,t,n,r)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n0(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===Nu)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ol(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")uc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $r:return fr(n.children,i,o,t);case Lu:l=8,i|=8;break;case ys:return e=jt(12,n,t,i|2),e.elementType=ys,e.lanes=o,e;case vs:return e=jt(13,n,t,i),e.elementType=vs,e.lanes=o,e;case ws:return e=jt(19,n,t,i),e.elementType=ws,e.lanes=o,e;case qf:return Dl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gf:l=10;break e;case Yf:l=9;break e;case Ou:l=11;break e;case Nu:l=14;break e;case $n:l=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=jt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Dl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=qf,e.lanes=n,e.stateNode={},e}function Ba(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Wa(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,i,o,l,a,s){return e=new r0(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(o),e}function i0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jm(e){if(!e)return Jn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(xt(n))return jp(e,n,t)}return t}function Um(e,t,n,r,i,o,l,a,s){return e=cc(n,r,!0,e,i,o,l,a,s),e.context=jm(null),n=e.current,r=ft(),i=qn(n),o=xn(r,i),o.callback=t!=null?t:null,Gn(n,o),e.current.lanes=i,yo(e,i,r),kt(e,r),e}function ia(e,t,n,r){var i=t.current,o=ft(),l=qn(i);return n=jm(n),t.context===null?t.context=n:t.pendingContext=n,t=xn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Gn(i,t),e=Bt(i,l,o),e!==null&&el(e,i,l),l}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){Vd(e,t),(e=e.alternate)&&Vd(e,t)}function o0(){return null}var Vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}oa.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));ia(e,t,null,null)};oa.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vr(function(){ia(null,e,null,null)}),t[Sn]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=wp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&xp(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function l0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Pl(l);o.call(u)}}var l=Um(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=l,e[Sn]=l.current,io(e.nodeType===8?e.parentNode:e),vr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pl(s);a.call(u)}}var s=cc(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=s,e[Sn]=s.current,io(e.nodeType===8?e.parentNode:e),vr(function(){ia(t,s,n,r)}),s}function aa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Pl(l);a.call(s)}}ia(t,l,e,i)}else l=l0(n,t,e,i,r);return Pl(l)}yp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mi(t.pendingLanes);n!==0&&(Iu(t,n|1),kt(t,Fe()),(he&6)===0&&(ai=Fe()+500,rr()))}break;case 13:var r=ft();vr(function(){return Bt(e,1,r)}),dc(e,1)}};Du=function(e){if(e.tag===13){var t=ft();Bt(e,134217728,t),dc(e,134217728)}};vp=function(e){if(e.tag===13){var t=ft(),n=qn(e);Bt(e,n,t),dc(e,n)}};wp=function(){return be};bp=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};Os=function(e,t,n){switch(t){case"input":if(ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Kl(r);if(!i)throw Error(q(90));Kf(r),ks(r,i)}}}break;case"textarea":Zf(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};lp=lc;ap=vr;var a0={usingClientEntryPoint:!1,Events:[wo,jr,Kl,ip,op,lc]},Ci={findFiberByHostInstance:sr,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},s0={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||o0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Gl=Bo.inject(s0),sn=Bo}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;Nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(q(200));return i0(e,t,null,n)};Nt.createRoot=function(e,t){if(!pc(e))throw Error(q(299));var n=!1,r="",i=Vm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,i),e[Sn]=t.current,io(e.nodeType===8?e.parentNode:e),new fc(t)};Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=cp(t),e=e===null?null:e.stateNode,e};Nt.flushSync=function(e){return vr(e)};Nt.hydrate=function(e,t,n){if(!la(t))throw Error(q(200));return aa(null,e,t,!0,n)};Nt.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Vm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Um(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Sn]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new oa(t)};Nt.render=function(e,t,n){if(!la(t))throw Error(q(200));return aa(null,e,t,!1,n)};Nt.unmountComponentAtNode=function(e){if(!la(e))throw Error(q(40));return e._reactRootContainer?(vr(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};Nt.unstable_batchedUpdates=lc;Nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!la(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return aa(e,t,n,!1,r)};Nt.version="18.1.0-next-22edb9f77-20220426";function Bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bm)}catch(e){console.error(e)}}Bm(),Vf.exports=Nt;var Wd=Vf.exports;cl.createRoot=Wd.createRoot,cl.hydrateRoot=Wd.hydrateRoot;var sa={exports:{}},ua={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=I.exports,c0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,p0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m0={key:!0,ref:!0,__self:!0,__source:!0};function Wm(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)f0.call(t,r)&&!m0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:c0,type:e,key:o,ref:l,props:i,_owner:p0.current}}ua.Fragment=d0;ua.jsx=Wm;ua.jsxs=Wm;sa.exports=ua;const y=sa.exports.jsx,Y=sa.exports.jsxs,Lt=sa.exports.Fragment;var xo=e=>e.type==="checkbox",Gr=e=>e instanceof Date,ht=e=>e==null;const Hm=e=>typeof e=="object";var st=e=>!ht(e)&&!Array.isArray(e)&&Hm(e)&&!Gr(e),h0=e=>st(e)&&e.target?xo(e.target)?e.target.checked:e.target.value:e,g0=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,y0=(e,t)=>e.has(g0(t)),ko=e=>Array.isArray(e)?e.filter(Boolean):[],Re=e=>e===void 0,ie=(e,t,n)=>{if(!t||!st(e))return n;const r=ko(t.split(/[,[\].]+?/)).reduce((i,o)=>ht(i)?i:i[o],e);return Re(r)||r===e?Re(e[t])?n:e[t]:r};const Hd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Kt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},pn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Qm=J.createContext(null),nn=()=>J.useContext(Qm),v0=e=>{const r=e,{children:t}=r,n=xe(r,["children"]);return J.createElement(Qm.Provider,{value:n},e.children)};var w0=(e,t,n,r=!0)=>{const i={};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t[l]!==Kt.all&&(t[l]=!r||Kt.all),n&&(n[l]=!0),e[l]}});return i},Pt=e=>st(e)&&!Object.keys(e).length,b0=(e,t,n)=>{const o=e,{name:r}=o,i=xe(o,["name"]);return Pt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(l=>t[l]===(!n||Kt.all))},Ut=e=>Array.isArray(e)?e:[e];function Gm(e){const t=J.useRef(e);t.current=e,J.useEffect(()=>{const n=i=>{i&&i.unsubscribe()},r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>n(r)},[e.disabled])}var an=e=>typeof e=="string",x0=(e,t,n,r)=>{const i=Array.isArray(e);return an(e)?(r&&t.watch.add(e),ie(n,e)):i?e.map(o=>(r&&t.watch.add(o),ie(n,o))):(r&&(t.watchAll=!0),n)},ca=e=>typeof e=="function",Ym=e=>{for(const t in e)if(ca(e[t]))return!0;return!1},k0=(e,t,n,r,i)=>t?te(L({},n[e]),{types:te(L({},n[e]&&n[e].types?n[e].types:{}),{[r]:i||!0})}):{},mc=e=>/^\w*$/.test(e),qm=e=>ko(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ne(e,t,n){let r=-1;const i=mc(t)?[t]:qm(t),o=i.length,l=o-1;for(;++r<o;){const a=i[r];let s=n;if(r!==l){const u=e[a];s=st(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=s,e=e[a]}return e}const $l=(e,t,n)=>{for(const i of n||Object.keys(e)){const o=ie(e,i);if(o){const r=o,{_f:l}=r,a=xe(r,["_f"]);if(l&&t(l.name)){if(l.ref.focus&&Re(l.ref.focus()))break;if(l.refs){l.refs[0].focus();break}}else st(a)&&$l(a,t)}}};var zn=()=>{const e=typeof performance=="undefined"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(Math.random()*16+e)%16|0;return(t=="x"?n:n&3|8).toString(16)})},Ha=(e,t,n={})=>n.shouldFocus||Re(n.shouldFocus)?n.focusName||`${e}.${Re(n.focusIndex)?t:n.focusIndex}.`:"",au=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));function Qa(e,t){return[...e,...Ut(t)]}function At(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(globalThis.Blob&&e instanceof Blob)t=e;else if(globalThis.FileList&&e instanceof FileList)t=e;else if(n||st(e)){t=n?[]:{};for(const r in e)t[r]=ca(e[r])?e[r]:At(e[r])}else return e;return t}var Ga=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ya(e,t,n){return[...e.slice(0,t),...Ut(n),...e.slice(t)]}var qa=(e,t,n)=>Array.isArray(e)?(Re(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(t,1)[0]),e):[];function Xa(e,t){return[...Ut(t),...Ut(e)]}function _0(e,t){let n=0;const r=[...e];for(const i of t)r.splice(i-n,1),n++;return ko(r).length?r:[]}var Ka=(e,t)=>Re(t)?[]:_0(e,Ut(t).sort((n,r)=>n-r)),Ja=(e,t,n)=>{e[t]=[e[n],e[n]=e[t]][0]};function S0(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Re(e)?r++:e[t[r++]];return e}function it(e,t){const n=mc(t)?[t]:qm(t),r=n.length==1?e:S0(e,n),i=n[n.length-1];let o;r&&delete r[i];for(let l=0;l<n.slice(0,-1).length;l++){let a=-1,s;const u=n.slice(0,-(l+1)),c=u.length-1;for(l>0&&(o=e);++a<u.length;){const h=u[a];s=s?s[h]:e[h],c===a&&(st(s)&&Pt(s)||Array.isArray(s)&&!s.filter(f=>!Re(f)).length)&&(o?delete o[h]:delete e[h]),o=s}}return e}var Qd=(e,t,n)=>(e[t]=n,e);function Xm(e){const t=nn(),{control:n=t.control,name:r,keyName:i="id",shouldUnregister:o}=e,[l,a]=J.useState(n._getFieldArray(r)),s=J.useRef(n._getFieldArray(r).map(zn)),u=J.useRef(l),c=J.useRef(r),h=J.useRef(!1);c.current=r,u.current=l,n._names.array.add(r);const f=J.useCallback(({values:b,name:_})=>{if(_===c.current||!_){const E=ie(b,c.current,[]);a(E),s.current=E.map(zn)}},[]);Gm({callback:f,subject:n._subjects.array});const w=J.useCallback(b=>{h.current=!0,n._updateFieldArray(r,b)},[n,r]),v=(b,_)=>{const E=Ut(At(b)),M=Qa(n._getFieldArray(r),E);n._names.focus=Ha(r,M.length-1,_),s.current=Qa(s.current,E.map(zn)),w(M),a(M),n._updateFieldArray(r,M,Qa,{argA:Ga(b)})},k=(b,_)=>{const E=Ut(At(b)),M=Xa(n._getFieldArray(r),E);n._names.focus=Ha(r,0,_),s.current=Xa(s.current,E.map(zn)),w(M),a(M),n._updateFieldArray(r,M,Xa,{argA:Ga(b)})},S=b=>{const _=Ka(n._getFieldArray(r),b);s.current=Ka(s.current,b),w(_),a(_),n._updateFieldArray(r,_,Ka,{argA:b})},p=(b,_,E)=>{const M=Ut(At(_)),P=Ya(n._getFieldArray(r),b,M);n._names.focus=Ha(r,b,E),s.current=Ya(s.current,b,M.map(zn)),w(P),a(P),n._updateFieldArray(r,P,Ya,{argA:b,argB:Ga(_)})},d=(b,_)=>{const E=n._getFieldArray(r);Ja(E,b,_),Ja(s.current,b,_),w(E),a(E),n._updateFieldArray(r,E,Ja,{argA:b,argB:_},!1)},m=(b,_)=>{const E=n._getFieldArray(r);qa(E,b,_),qa(s.current,b,_),w(E),a(E),n._updateFieldArray(r,E,qa,{argA:b,argB:_},!1)},g=(b,_)=>{const E=At(_),M=Qd(n._getFieldArray(r),b,E);s.current=[...M].map((P,N)=>!P||N===b?zn():s.current[N]),w(M),a([...M]),n._updateFieldArray(r,M,Qd,{argA:b,argB:E},!0,!1)},x=b=>{const _=Ut(At(b));s.current=_.map(zn),w([..._]),a([..._]),n._updateFieldArray(r,[..._],E=>E,{},!0,!1)};return J.useEffect(()=>{n._stateFlags.action=!1,au(r,n._names)&&n._subjects.state.next({}),h.current&&n._executeSchema([r]).then(b=>{const _=ie(b.errors,r),E=ie(n._formState.errors,r);(E?!_&&E.type:_&&_.type)&&(_?Ne(n._formState.errors,r,_):it(n._formState.errors,r),n._subjects.state.next({errors:n._formState.errors}))}),n._subjects.watch.next({name:r,values:n._formValues}),n._names.focus&&$l(n._fields,b=>b.startsWith(n._names.focus)),n._names.focus="",n._proxyFormState.isValid&&n._updateValid()},[l,r,n]),J.useEffect(()=>(!ie(n._formValues,r)&&n._updateFieldArray(r),()=>{(n._options.shouldUnregister||o)&&n.unregister(r)}),[r,n,i,o]),{swap:J.useCallback(d,[w,r,n]),move:J.useCallback(m,[w,r,n]),prepend:J.useCallback(k,[w,r,n]),append:J.useCallback(v,[w,r,n]),remove:J.useCallback(S,[w,r,n]),insert:J.useCallback(p,[w,r,n]),update:J.useCallback(g,[w,r,n]),replace:J.useCallback(x,[w,r,n]),fields:J.useMemo(()=>l.map((b,_)=>te(L({},b),{[i]:s.current[_]||zn()})),[l,i])}}function Za(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Fl=e=>ht(e)||!Hm(e);function Yr(e,t){if(Fl(e)||Fl(t))return e===t;if(Gr(e)&&Gr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(Gr(o)&&Gr(l)||st(o)&&st(l)||Array.isArray(o)&&Array.isArray(l)?!Yr(o,l):o!==l)return!1}}return!0}var Gd=e=>({isOnSubmit:!e||e===Kt.onSubmit,isOnBlur:e===Kt.onBlur,isOnChange:e===Kt.onChange,isOnAll:e===Kt.all,isOnTouch:e===Kt.onTouched}),Ml=e=>typeof e=="boolean",hc=e=>e.type==="file",su=e=>e instanceof HTMLElement,Km=e=>e.type==="select-multiple",gc=e=>e.type==="radio",E0=e=>gc(e)||xo(e),Yd=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",es=e=>su(e)&&e.isConnected;function Al(e,t={}){const n=Array.isArray(e);if(st(e)||n)for(const r in e)Array.isArray(e[r])||st(e[r])&&!Ym(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Al(e[r],t[r])):ht(e[r])||(t[r]=!0);return t}function Jm(e,t,n){const r=Array.isArray(e);if(st(e)||r)for(const i in e)Array.isArray(e[i])||st(e[i])&&!Ym(e[i])?Re(t)||Fl(n[i])?n[i]=Array.isArray(e[i])?Al(e[i],[]):L({},Al(e[i])):Jm(e[i],ht(t)?{}:t[i],n[i]):n[i]=!Yr(e[i],t[i]);return n}var ts=(e,t)=>Jm(e,t,Al(t));const qd={value:!1,isValid:!1},Xd={value:!0,isValid:!0};var Zm=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Re(e[0].attributes.value)?Re(e[0].value)||e[0].value===""?Xd:{value:e[0].value,isValid:!0}:Xd:qd}return qd},eh=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Re(e)?e:t?e===""?NaN:+e:n&&an(e)?new Date(e):r?r(e):e;const Kd={isValid:!1,value:null};var th=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Kd):Kd;function ns(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return hc(t)?t.files:gc(t)?th(e.refs).value:Km(t)?[...t.selectedOptions].map(({value:n})=>n):xo(t)?Zm(e.refs).value:eh(Re(t.value)?e.ref.value:t.value,e)}var C0=(e,t,n,r)=>{const i={};for(const o of e){const l=ie(t,o);l&&Ne(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},jl=e=>e instanceof RegExp,Ti=e=>Re(e)?void 0:jl(e)?e.source:st(e)?jl(e.value)?e.value.source:e.value:e,T0=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Jd(e,t,n){const r=ie(e,n);if(r||mc(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=ie(t,o),a=ie(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var L0=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,O0=(e,t)=>!ko(ie(e,t)).length&&it(e,t),ll=e=>an(e)||J.isValidElement(e);function Zd(e,t,n="validate"){if(ll(e)||Array.isArray(e)&&e.every(ll)||Ml(e)&&!e)return{type:n,message:ll(e)?e:"",ref:t}}var Or=e=>st(e)&&!jl(e)?e:{value:e,message:""},ef=async(e,t,n,r)=>{const{ref:i,refs:o,required:l,maxLength:a,minLength:s,min:u,max:c,pattern:h,validate:f,name:w,valueAsNumber:v,mount:k,disabled:S}=e._f;if(!k||S)return{};const p=o?o[0]:i,d=P=>{r&&p.reportValidity&&(p.setCustomValidity(Ml(P)?"":P||" "),p.reportValidity())},m={},g=gc(i),x=xo(i),b=g||x,_=(v||hc(i))&&!i.value||t===""||Array.isArray(t)&&!t.length,E=k0.bind(null,w,n,m),M=(P,N,C,F=pn.maxLength,z=pn.minLength)=>{const D=P?N:C;m[w]=L({type:P?F:z,message:D,ref:i},E(P?F:z,D))};if(l&&(!b&&(_||ht(t))||Ml(t)&&!t||x&&!Zm(o).isValid||g&&!th(o).isValid)){const{value:P,message:N}=ll(l)?{value:!!l,message:l}:Or(l);if(P&&(m[w]=L({type:pn.required,message:N,ref:p},E(pn.required,N)),!n))return d(N),m}if(!_&&(!ht(u)||!ht(c))){let P,N;const C=Or(c),F=Or(u);if(isNaN(t)){const z=i.valueAsDate||new Date(t);an(C.value)&&(P=z>new Date(C.value)),an(F.value)&&(N=z<new Date(F.value))}else{const z=i.valueAsNumber||+t;ht(C.value)||(P=z>C.value),ht(F.value)||(N=z<F.value)}if((P||N)&&(M(!!P,C.message,F.message,pn.max,pn.min),!n))return d(m[w].message),m}if((a||s)&&!_&&an(t)){const P=Or(a),N=Or(s),C=!ht(P.value)&&t.length>P.value,F=!ht(N.value)&&t.length<N.value;if((C||F)&&(M(C,P.message,N.message),!n))return d(m[w].message),m}if(h&&!_&&an(t)){const{value:P,message:N}=Or(h);if(jl(P)&&!t.match(P)&&(m[w]=L({type:pn.pattern,message:N,ref:i},E(pn.pattern,N)),!n))return d(N),m}if(f){if(ca(f)){const P=await f(t),N=Zd(P,p);if(N&&(m[w]=L(L({},N),E(pn.validate,N.message)),!n))return d(N.message),m}else if(st(f)){let P={};for(const N in f){if(!Pt(P)&&!n)break;const C=Zd(await f[N](t),p,N);C&&(P=L(L({},C),E(N,C.message)),d(C.message),n&&(m[w]=P))}if(!Pt(P)&&(m[w]=L({ref:p},P),!n))return m}}return d(!0),m};const N0={mode:Kt.onSubmit,reValidateMode:Kt.onChange,shouldFocusError:!0};function z0(e={}){let t=L(L({},N0),e),n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},r={},i=At(t.defaultValues)||{},o=t.shouldUnregister?{}:At(i),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},s,u=0,c={};const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:Za(),array:Za(),state:Za()},w=Gd(t.mode),v=Gd(t.reValidateMode),k=t.criteriaMode===Kt.all,S=(R,j)=>(...W)=>{clearTimeout(u),u=window.setTimeout(()=>R(...W),j)},p=async R=>{let j=!1;return h.isValid&&(j=t.resolver?Pt((await _()).errors):await M(r,!0),!R&&j!==n.isValid&&(n.isValid=j,f.state.next({isValid:j}))),j},d=(R,j=[],W,ee,oe=!0,X=!0)=>{if(ee&&W){if(l.action=!0,X&&Array.isArray(ie(r,R))){const V=W(ie(r,R),ee.argA,ee.argB);oe&&Ne(r,R,V)}if(h.errors&&X&&Array.isArray(ie(n.errors,R))){const V=W(ie(n.errors,R),ee.argA,ee.argB);oe&&Ne(n.errors,R,V),O0(n.errors,R)}if(h.touchedFields&&X&&Array.isArray(ie(n.touchedFields,R))){const V=W(ie(n.touchedFields,R),ee.argA,ee.argB);oe&&Ne(n.touchedFields,R,V)}h.dirtyFields&&(n.dirtyFields=ts(i,o)),f.state.next({isDirty:N(R,j),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ne(o,R,j)},m=(R,j)=>(Ne(n.errors,R,j),f.state.next({errors:n.errors})),g=(R,j,W,ee)=>{const oe=ie(r,R);if(oe){const X=ie(o,R,Re(W)?ie(i,R):W);Re(X)||ee&&ee.defaultChecked||j?Ne(o,R,j?X:ns(oe._f)):z(R,X),l.mount&&p()}},x=(R,j,W,ee,oe)=>{let X=!1;const V={name:R},$=ie(n.touchedFields,R);if(h.isDirty){const H=n.isDirty;n.isDirty=V.isDirty=N(),X=H!==V.isDirty}if(h.dirtyFields&&(!W||ee)){const H=ie(n.dirtyFields,R);Yr(ie(i,R),j)?it(n.dirtyFields,R):Ne(n.dirtyFields,R,!0),V.dirtyFields=n.dirtyFields,X=X||H!==ie(n.dirtyFields,R)}return W&&!$&&(Ne(n.touchedFields,R,W),V.touchedFields=n.touchedFields,X=X||h.touchedFields&&$!==W),X&&oe&&f.state.next(V),X?V:{}},b=async(R,j,W,ee,oe)=>{const X=ie(n.errors,j),V=h.isValid&&n.isValid!==W;if(e.delayError&&ee?(s=s||S(m,e.delayError),s(j,ee)):(clearTimeout(u),ee?Ne(n.errors,j,ee):it(n.errors,j)),((ee?!Yr(X,ee):X)||!Pt(oe)||V)&&!R){const $=te(L(L({},oe),V?{isValid:W}:{}),{errors:n.errors,name:j});n=L(L({},n),$),f.state.next($)}c[j]--,h.isValidating&&!Object.values(c).some($=>$)&&(f.state.next({isValidating:!1}),c={})},_=async R=>t.resolver?await t.resolver(L({},o),t.context,C0(R||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation)):{},E=async R=>{const{errors:j}=await _();if(R)for(const W of R){const ee=ie(j,W);ee?Ne(n.errors,W,ee):it(n.errors,W)}else n.errors=j;return j},M=async(R,j,W={valid:!0})=>{for(const oe in R){const X=R[oe];if(X){const ee=X,{_f:V}=ee,$=xe(ee,["_f"]);if(V){const H=await ef(X,ie(o,V.name),k,t.shouldUseNativeValidation);if(H[V.name]&&(W.valid=!1,j))break;j||(H[V.name]?Ne(n.errors,V.name,H[V.name]):it(n.errors,V.name))}$&&await M($,j,W)}}return W.valid},P=()=>{for(const R of a.unMount){const j=ie(r,R);j&&(j._f.refs?j._f.refs.every(W=>!es(W)):!es(j._f.ref))&&ve(R)}a.unMount=new Set},N=(R,j)=>(R&&j&&Ne(o,R,j),!Yr(A(),i)),C=(R,j,W)=>{const ee=L({},l.mount?o:Re(j)?i:an(R)?{[R]:j}:j);return x0(R,a,ee,W)},F=R=>ko(ie(l.mount?o:i,R,e.shouldUnregister?ie(i,R,[]):[])),z=(R,j,W={})=>{const ee=ie(r,R);let oe=j;if(ee){const X=ee._f;X&&(!X.disabled&&Ne(o,R,eh(j,X)),oe=Yd&&su(X.ref)&&ht(j)?"":j,Km(X.ref)?[...X.ref.options].forEach(V=>V.selected=oe.includes(V.value)):X.refs?xo(X.ref)?X.refs.length>1?X.refs.forEach(V=>!V.disabled&&(V.checked=Array.isArray(oe)?!!oe.find($=>$===V.value):oe===V.value)):X.refs[0]&&(X.refs[0].checked=!!oe):X.refs.forEach(V=>V.checked=V.value===oe):hc(X.ref)?X.ref.value="":(X.ref.value=oe,X.ref.type||f.watch.next({name:R})))}(W.shouldDirty||W.shouldTouch)&&x(R,oe,W.shouldTouch,W.shouldDirty,!0),W.shouldValidate&&T(R)},D=(R,j,W)=>{for(const ee in j){const oe=j[ee],X=`${R}.${ee}`,V=ie(r,X);(a.array.has(R)||!Fl(oe)||V&&!V._f)&&!Gr(oe)?D(X,oe,W):z(X,oe,W)}},B=(R,j,W={})=>{const ee=ie(r,R),oe=a.array.has(R),X=At(j);Ne(o,R,X),oe?(f.array.next({name:R,values:o}),(h.isDirty||h.dirtyFields)&&W.shouldDirty&&(n.dirtyFields=ts(i,o),f.state.next({name:R,dirtyFields:n.dirtyFields,isDirty:N(R,X)}))):ee&&!ee._f&&!ht(X)?D(R,X,W):z(R,X,W),au(R,a)&&f.state.next({}),f.watch.next({name:R})},Q=async R=>{const j=R.target;let W=j.name;const ee=ie(r,W);if(ee){let oe,X;const V=j.type?ns(ee._f):h0(R),$=R.type===Hd.BLUR||R.type===Hd.FOCUS_OUT,H=!T0(ee._f)&&!t.resolver&&!ie(n.errors,W)&&!ee._f.deps||L0($,ie(n.touchedFields,W),n.isSubmitted,v,w),G=au(W,a,$);Ne(o,W,V),$?ee._f.onBlur&&ee._f.onBlur(R):ee._f.onChange&&ee._f.onChange(R);const U=x(W,V,$,!1),K=!Pt(U)||G;if(!$&&f.watch.next({name:W,type:R.type}),H)return K&&f.state.next(L({name:W},G?{}:U));if(!$&&G&&f.state.next({}),c[W]=(c[W],1),f.state.next({isValidating:!0}),t.resolver){const{errors:le}=await _([W]),fe=Jd(n.errors,r,W),ge=Jd(le,r,fe.name||W);oe=ge.error,W=ge.name,X=Pt(le)}else oe=(await ef(ee,ie(o,W),k,t.shouldUseNativeValidation))[W],X=await p(!0);ee._f.deps&&T(ee._f.deps),b(!1,W,X,oe,U)}},T=async(R,j={})=>{let W,ee;const oe=Ut(R);if(f.state.next({isValidating:!0}),t.resolver){const X=await E(Re(R)?R:oe);W=Pt(X),ee=R?!oe.some(V=>ie(X,V)):W}else R?(ee=(await Promise.all(oe.map(async X=>{const V=ie(r,X);return await M(V&&V._f?{[X]:V}:V)}))).every(Boolean),!(!ee&&!n.isValid)&&p()):ee=W=await M(r);return f.state.next(te(L(L({},!an(R)||h.isValid&&W!==n.isValid?{}:{name:R}),t.resolver?{isValid:W}:{}),{errors:n.errors,isValidating:!1})),j.shouldFocus&&!ee&&$l(r,X=>ie(n.errors,X),R?oe:a.mount),ee},A=R=>{const j=L(L({},i),l.mount?o:{});return Re(R)?j:an(R)?ie(j,R):R.map(W=>ie(j,W))},O=(R,j)=>({invalid:!!ie((j||n).errors,R),isDirty:!!ie((j||n).dirtyFields,R),isTouched:!!ie((j||n).touchedFields,R),error:ie((j||n).errors,R)}),Z=R=>{R?Ut(R).forEach(j=>it(n.errors,j)):n.errors={},f.state.next({errors:n.errors})},ne=(R,j,W)=>{const ee=(ie(r,R,{_f:{}})._f||{}).ref;Ne(n.errors,R,te(L({},j),{ref:ee})),f.state.next({name:R,errors:n.errors,isValid:!1}),W&&W.shouldFocus&&ee&&ee.focus&&ee.focus()},ce=(R,j)=>ca(R)?f.watch.subscribe({next:W=>R(C(void 0,j),W)}):C(R,j,!0),ve=(R,j={})=>{for(const W of R?Ut(R):a.mount)a.mount.delete(W),a.array.delete(W),ie(r,W)&&(j.keepValue||(it(r,W),it(o,W)),!j.keepError&&it(n.errors,W),!j.keepDirty&&it(n.dirtyFields,W),!j.keepTouched&&it(n.touchedFields,W),!t.shouldUnregister&&!j.keepDefaultValue&&it(i,W));f.watch.next({}),f.state.next(L(L({},n),j.keepDirty?{isDirty:N()}:{})),!j.keepIsValid&&p()},Oe=(R,j={})=>{let W=ie(r,R);const ee=Ml(j.disabled);return Ne(r,R,{_f:L(te(L({},W&&W._f?W._f:{ref:{name:R}}),{name:R,mount:!0}),j)}),a.mount.add(R),W?ee&&Ne(o,R,j.disabled?void 0:ie(o,R,ns(W._f))):g(R,!0,j.value),te(L(L({},ee?{disabled:j.disabled}:{}),t.shouldUseNativeValidation?{required:!!j.required,min:Ti(j.min),max:Ti(j.max),minLength:Ti(j.minLength),maxLength:Ti(j.maxLength),pattern:Ti(j.pattern)}:{}),{name:R,onChange:Q,onBlur:Q,ref:oe=>{if(oe){Oe(R,j),W=ie(r,R);const X=Re(oe.value)&&oe.querySelectorAll&&oe.querySelectorAll("input,select,textarea")[0]||oe,V=E0(X),$=W._f.refs||[];if(V?$.find(H=>H===X):X===W._f.ref)return;Ne(r,R,{_f:L(L({},W._f),V?{refs:[...$.filter(es),X,...Array.isArray(ie(i,R))?[{}]:[]],ref:{type:X.type,name:R}}:{ref:X})}),g(R,!1,void 0,X)}else W=ie(r,R,{}),W._f&&(W._f.mount=!1),(t.shouldUnregister||j.shouldUnregister)&&!(y0(a.array,R)&&l.action)&&a.unMount.add(R)}})};return{control:{register:Oe,unregister:ve,getFieldState:O,_executeSchema:_,_getWatch:C,_getDirty:N,_updateValid:p,_removeUnmounted:P,_updateFieldArray:d,_getFieldArray:F,_subjects:f,_proxyFormState:h,get _fields(){return r},get _formValues(){return o},get _stateFlags(){return l},set _stateFlags(R){l=R},get _defaultValues(){return i},get _names(){return a},set _names(R){a=R},get _formState(){return n},set _formState(R){n=R},get _options(){return t},set _options(R){t=L(L({},t),R)}},trigger:T,register:Oe,handleSubmit:(R,j)=>async W=>{W&&(W.preventDefault&&W.preventDefault(),W.persist&&W.persist());let ee=!0,oe=At(o);f.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:X,values:V}=await _();n.errors=X,oe=V}else await M(r);Pt(n.errors)?(f.state.next({errors:{},isSubmitting:!0}),await R(oe,W)):(j&&await j(L({},n.errors),W),t.shouldFocusError&&$l(r,X=>ie(n.errors,X),a.mount))}catch(X){throw ee=!1,X}finally{n.isSubmitted=!0,f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Pt(n.errors)&&ee,submitCount:n.submitCount+1,errors:n.errors})}},watch:ce,setValue:B,getValues:A,reset:(R,j={})=>{const W=R||i,ee=At(W),oe=R&&!Pt(R)?ee:i;if(j.keepDefaultValues||(i=W),!j.keepValues){if(j.keepDirtyValues)for(const X of a.mount)ie(n.dirtyFields,X)?Ne(oe,X,ie(o,X)):B(X,ie(oe,X));else{if(Yd&&Re(R))for(const X of a.mount){const V=ie(r,X);if(V&&V._f){const $=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;try{su($)&&$.closest("form").reset();break}catch{}}}r={}}o=e.shouldUnregister?j.keepDefaultValues?At(i):{}:ee,f.array.next({values:oe}),f.watch.next({values:oe})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!h.isValid||!!j.keepIsValid,l.watch=!!e.shouldUnregister,f.state.next({submitCount:j.keepSubmitCount?n.submitCount:0,isDirty:j.keepDirty||j.keepDirtyValues?n.isDirty:!!(j.keepDefaultValues&&!Yr(R,i)),isSubmitted:j.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:j.keepDirty||j.keepDirtyValues?n.dirtyFields:j.keepDefaultValues&&R?ts(i,R):{},touchedFields:j.keepTouched?n.touchedFields:{},errors:j.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(R,j={})=>{ie(r,R)&&(Re(j.defaultValue)?B(R,ie(i,R)):(B(R,j.defaultValue),Ne(i,R,j.defaultValue)),j.keepTouched||it(n.touchedFields,R),j.keepDirty||(it(n.dirtyFields,R),n.isDirty=j.defaultValue?N(R,ie(i,R)):N()),j.keepError||(it(n.errors,R),h.isValid&&p()),f.state.next(L({},n)))},clearErrors:Z,unregister:ve,setError:ne,setFocus:(R,j={})=>{const W=ie(r,R)._f,ee=W.refs?W.refs[0]:W.ref;j.shouldSelect?ee.select():ee.focus()},getFieldState:O}}function R0(e={}){const t=J.useRef(),[n,r]=J.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=te(L({},z0(e)),{formState:n});const i=t.current.control,o=J.useCallback(l=>{b0(l,i._proxyFormState,!0)&&(i._formState=L(L({},i._formState),l),r(L({},i._formState)))},[i]);return Gm({subject:i._subjects.state,callback:o}),J.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),t.current.formState=w0(n,i._proxyFormState),t.current}var yc={exports:{}},nh=function(t,n){return function(){for(var i=new Array(arguments.length),o=0;o<i.length;o++)i[o]=arguments[o];return t.apply(n,i)}},I0=nh,vc=Object.prototype.toString,wc=function(e){return function(t){var n=vc.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Er(e){return e=e.toLowerCase(),function(n){return wc(n)===e}}function bc(e){return Array.isArray(e)}function Ul(e){return typeof e=="undefined"}function D0(e){return e!==null&&!Ul(e)&&e.constructor!==null&&!Ul(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var rh=Er("ArrayBuffer");function P0(e){var t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&rh(e.buffer),t}function $0(e){return typeof e=="string"}function F0(e){return typeof e=="number"}function ih(e){return e!==null&&typeof e=="object"}function al(e){if(wc(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var M0=Er("Date"),A0=Er("File"),j0=Er("Blob"),U0=Er("FileList");function xc(e){return vc.call(e)==="[object Function]"}function V0(e){return ih(e)&&xc(e.pipe)}function B0(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||vc.call(e)===t||xc(e.toString)&&e.toString()===t)}var W0=Er("URLSearchParams");function H0(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Q0(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function kc(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),bc(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function uu(){var e={};function t(i,o){al(e[o])&&al(i)?e[o]=uu(e[o],i):al(i)?e[o]=uu({},i):bc(i)?e[o]=i.slice():e[o]=i}for(var n=0,r=arguments.length;n<r;n++)kc(arguments[n],t);return e}function G0(e,t,n){return kc(t,function(i,o){n&&typeof i=="function"?e[o]=I0(i,n):e[o]=i}),e}function Y0(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function q0(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function X0(e,t,n){var r,i,o,l={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)o=r[i],l[o]||(t[o]=e[o],l[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function K0(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function J0(e){if(!e)return null;var t=e.length;if(Ul(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var Z0=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Ze={isArray:bc,isArrayBuffer:rh,isBuffer:D0,isFormData:B0,isArrayBufferView:P0,isString:$0,isNumber:F0,isObject:ih,isPlainObject:al,isUndefined:Ul,isDate:M0,isFile:A0,isBlob:j0,isFunction:xc,isStream:V0,isURLSearchParams:W0,isStandardBrowserEnv:Q0,forEach:kc,merge:uu,extend:G0,trim:H0,stripBOM:Y0,inherits:q0,toFlatObject:X0,kindOf:wc,kindOfTest:Er,endsWith:K0,toArray:J0,isTypedArray:Z0,isFileList:U0},Nr=Ze;function tf(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var oh=function(t,n,r){if(!n)return t;var i;if(r)i=r(n);else if(Nr.isURLSearchParams(n))i=n.toString();else{var o=[];Nr.forEach(n,function(s,u){s===null||typeof s=="undefined"||(Nr.isArray(s)?u=u+"[]":s=[s],Nr.forEach(s,function(h){Nr.isDate(h)?h=h.toISOString():Nr.isObject(h)&&(h=JSON.stringify(h)),o.push(tf(u)+"="+tf(h))}))}),i=o.join("&")}if(i){var l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t},ev=Ze;function da(){this.handlers=[]}da.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};da.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};da.prototype.forEach=function(t){ev.forEach(this.handlers,function(r){r!==null&&t(r)})};var tv=da,nv=Ze,rv=function(t,n){nv.forEach(t,function(i,o){o!==n&&o.toUpperCase()===n.toUpperCase()&&(t[n]=i,delete t[o])})},lh=Ze;function si(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}lh.inherits(si,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ah=si.prototype,sh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){sh[e]={value:e}});Object.defineProperties(si,sh);Object.defineProperty(ah,"isAxiosError",{value:!0});si.from=function(e,t,n,r,i,o){var l=Object.create(ah);return lh.toFlatObject(e,l,function(s){return s!==Error.prototype}),si.call(l,e.message,t,n,r,i),l.name=e.name,o&&Object.assign(l,o),l};var gi=si,uh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gt=Ze;function iv(e,t){t=t||new FormData;var n=[];function r(o){return o===null?"":Gt.isDate(o)?o.toISOString():Gt.isArrayBuffer(o)||Gt.isTypedArray(o)?typeof Blob=="function"?new Blob([o]):Buffer.from(o):o}function i(o,l){if(Gt.isPlainObject(o)||Gt.isArray(o)){if(n.indexOf(o)!==-1)throw Error("Circular reference detected in "+l);n.push(o),Gt.forEach(o,function(s,u){if(!Gt.isUndefined(s)){var c=l?l+"."+u:u,h;if(s&&!l&&typeof s=="object"){if(Gt.endsWith(u,"{}"))s=JSON.stringify(s);else if(Gt.endsWith(u,"[]")&&(h=Gt.toArray(s))){h.forEach(function(f){!Gt.isUndefined(f)&&t.append(c,r(f))});return}}i(s,c)}}),n.pop()}else t.append(l,r(o))}return i(e),t}var ch=iv,rs=gi,ov=function(t,n,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?t(r):n(new rs("Request failed with status code "+r.status,[rs.ERR_BAD_REQUEST,rs.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},Wo=Ze,lv=Wo.isStandardBrowserEnv()?function(){return{write:function(n,r,i,o,l,a){var s=[];s.push(n+"="+encodeURIComponent(r)),Wo.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),Wo.isString(o)&&s.push("path="+o),Wo.isString(l)&&s.push("domain="+l),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),av=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},sv=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},uv=av,cv=sv,dh=function(t,n){return t&&!uv(n)?cv(t,n):n},is=Ze,dv=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],fv=function(t){var n={},r,i,o;return t&&is.forEach(t.split(`
`),function(a){if(o=a.indexOf(":"),r=is.trim(a.substr(0,o)).toLowerCase(),i=is.trim(a.substr(o+1)),r){if(n[r]&&dv.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([i]):n[r]=n[r]?n[r]+", "+i:i}}),n},nf=Ze,pv=nf.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function i(o){var l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){var a=nf.isString(l)?i(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),cu=gi,mv=Ze;function fh(e){cu.call(this,e==null?"canceled":e,cu.ERR_CANCELED),this.name="CanceledError"}mv.inherits(fh,cu,{__CANCEL__:!0});var fa=fh,hv=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""},Li=Ze,gv=ov,yv=lv,vv=oh,wv=dh,bv=fv,xv=pv,kv=uh,mn=gi,_v=fa,Sv=hv,rf=function(t){return new Promise(function(r,i){var o=t.data,l=t.headers,a=t.responseType,s;function u(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}Li.isFormData(o)&&Li.isStandardBrowserEnv()&&delete l["Content-Type"];var c=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",f=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";l.Authorization="Basic "+btoa(h+":"+f)}var w=wv(t.baseURL,t.url);c.open(t.method.toUpperCase(),vv(w,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function v(){if(!!c){var p="getAllResponseHeaders"in c?bv(c.getAllResponseHeaders()):null,d=!a||a==="text"||a==="json"?c.responseText:c.response,m={data:d,status:c.status,statusText:c.statusText,headers:p,config:t,request:c};gv(function(x){r(x),u()},function(x){i(x),u()},m),c=null}}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){!c||(i(new mn("Request aborted",mn.ECONNABORTED,t,c)),c=null)},c.onerror=function(){i(new mn("Network Error",mn.ERR_NETWORK,t,c,c)),c=null},c.ontimeout=function(){var d=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",m=t.transitional||kv;t.timeoutErrorMessage&&(d=t.timeoutErrorMessage),i(new mn(d,m.clarifyTimeoutError?mn.ETIMEDOUT:mn.ECONNABORTED,t,c)),c=null},Li.isStandardBrowserEnv()){var k=(t.withCredentials||xv(w))&&t.xsrfCookieName?yv.read(t.xsrfCookieName):void 0;k&&(l[t.xsrfHeaderName]=k)}"setRequestHeader"in c&&Li.forEach(l,function(d,m){typeof o=="undefined"&&m.toLowerCase()==="content-type"?delete l[m]:c.setRequestHeader(m,d)}),Li.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),a&&a!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",t.onDownloadProgress),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(s=function(p){!c||(i(!p||p&&p.type?new _v:p),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s))),o||(o=null);var S=Sv(w);if(S&&["http","https","file"].indexOf(S)===-1){i(new mn("Unsupported protocol "+S+":",mn.ERR_BAD_REQUEST,t));return}c.send(o)})},Ev=null,He=Ze,of=rv,lf=gi,Cv=uh,Tv=ch,Lv={"Content-Type":"application/x-www-form-urlencoded"};function af(e,t){!He.isUndefined(e)&&He.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Ov(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=rf),e}function Nv(e,t,n){if(He.isString(e))try{return(t||JSON.parse)(e),He.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var pa={transitional:Cv,adapter:Ov(),transformRequest:[function(t,n){if(of(n,"Accept"),of(n,"Content-Type"),He.isFormData(t)||He.isArrayBuffer(t)||He.isBuffer(t)||He.isStream(t)||He.isFile(t)||He.isBlob(t))return t;if(He.isArrayBufferView(t))return t.buffer;if(He.isURLSearchParams(t))return af(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=He.isObject(t),i=n&&n["Content-Type"],o;if((o=He.isFileList(t))||r&&i==="multipart/form-data"){var l=this.env&&this.env.FormData;return Tv(o?{"files[]":t}:t,l&&new l)}else if(r||i==="application/json")return af(n,"application/json"),Nv(t);return t}],transformResponse:[function(t){var n=this.transitional||pa.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,o=!r&&this.responseType==="json";if(o||i&&He.isString(t)&&t.length)try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?lf.from(l,lf.ERR_BAD_RESPONSE,this,null,this.response):l}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ev},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};He.forEach(["delete","get","head"],function(t){pa.headers[t]={}});He.forEach(["post","put","patch"],function(t){pa.headers[t]=He.merge(Lv)});var _c=pa,zv=Ze,Rv=_c,Iv=function(t,n,r){var i=this||Rv;return zv.forEach(r,function(l){t=l.call(i,t,n)}),t},ph=function(t){return!!(t&&t.__CANCEL__)},sf=Ze,os=Iv,Dv=ph,Pv=_c,$v=fa;function ls(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $v}var Fv=function(t){ls(t),t.headers=t.headers||{},t.data=os.call(t,t.data,t.headers,t.transformRequest),t.headers=sf.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),sf.forEach(["delete","get","head","post","put","patch","common"],function(i){delete t.headers[i]});var n=t.adapter||Pv.adapter;return n(t).then(function(i){return ls(t),i.data=os.call(t,i.data,i.headers,t.transformResponse),i},function(i){return Dv(i)||(ls(t),i&&i.response&&(i.response.data=os.call(t,i.response.data,i.response.headers,t.transformResponse))),Promise.reject(i)})},Et=Ze,mh=function(t,n){n=n||{};var r={};function i(c,h){return Et.isPlainObject(c)&&Et.isPlainObject(h)?Et.merge(c,h):Et.isPlainObject(h)?Et.merge({},h):Et.isArray(h)?h.slice():h}function o(c){if(Et.isUndefined(n[c])){if(!Et.isUndefined(t[c]))return i(void 0,t[c])}else return i(t[c],n[c])}function l(c){if(!Et.isUndefined(n[c]))return i(void 0,n[c])}function a(c){if(Et.isUndefined(n[c])){if(!Et.isUndefined(t[c]))return i(void 0,t[c])}else return i(void 0,n[c])}function s(c){if(c in n)return i(t[c],n[c]);if(c in t)return i(void 0,t[c])}var u={url:l,method:l,data:l,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return Et.forEach(Object.keys(t).concat(Object.keys(n)),function(h){var f=u[h]||o,w=f(h);Et.isUndefined(w)&&f!==s||(r[h]=w)}),r},hh={version:"0.27.2"},Mv=hh.version,Mn=gi,Sc={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Sc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var uf={};Sc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+Mv+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return function(o,l,a){if(t===!1)throw new Mn(i(l," has been removed"+(n?" in "+n:"")),Mn.ERR_DEPRECATED);return n&&!uf[l]&&(uf[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,a):!0}};function Av(e,t,n){if(typeof e!="object")throw new Mn("options must be an object",Mn.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],l=t[o];if(l){var a=e[o],s=a===void 0||l(a,o,e);if(s!==!0)throw new Mn("option "+o+" must be "+s,Mn.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Mn("Unknown option "+o,Mn.ERR_BAD_OPTION)}}var jv={assertOptions:Av,validators:Sc},gh=Ze,Uv=oh,cf=tv,df=Fv,ma=mh,Vv=dh,yh=jv,zr=yh.validators;function ui(e){this.defaults=e,this.interceptors={request:new cf,response:new cf}}ui.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ma(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&yh.assertOptions(r,{silentJSONParsing:zr.transitional(zr.boolean),forcedJSONParsing:zr.transitional(zr.boolean),clarifyTimeoutError:zr.transitional(zr.boolean)},!1);var i=[],o=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(o=o&&w.synchronous,i.unshift(w.fulfilled,w.rejected))});var l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});var a;if(!o){var s=[df,void 0];for(Array.prototype.unshift.apply(s,i),s=s.concat(l),a=Promise.resolve(n);s.length;)a=a.then(s.shift(),s.shift());return a}for(var u=n;i.length;){var c=i.shift(),h=i.shift();try{u=c(u)}catch(f){h(f);break}}try{a=df(u)}catch(f){return Promise.reject(f)}for(;l.length;)a=a.then(l.shift(),l.shift());return a};ui.prototype.getUri=function(t){t=ma(this.defaults,t);var n=Vv(t.baseURL,t.url);return Uv(n,t.params,t.paramsSerializer)};gh.forEach(["delete","get","head","options"],function(t){ui.prototype[t]=function(n,r){return this.request(ma(r||{},{method:t,url:n,data:(r||{}).data}))}});gh.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,a){return this.request(ma(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}ui.prototype[t]=n(),ui.prototype[t+"Form"]=n(!0)});var Bv=ui,Wv=fa;function ci(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(i){t=i});var n=this;this.promise.then(function(r){if(!!n._listeners){var i,o=n._listeners.length;for(i=0;i<o;i++)n._listeners[i](r);n._listeners=null}}),this.promise.then=function(r){var i,o=new Promise(function(l){n.subscribe(l),i=l}).then(r);return o.cancel=function(){n.unsubscribe(i)},o},e(function(i){n.reason||(n.reason=new Wv(i),t(n.reason))})}ci.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};ci.prototype.subscribe=function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]};ci.prototype.unsubscribe=function(t){if(!!this._listeners){var n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}};ci.source=function(){var t,n=new ci(function(i){t=i});return{token:n,cancel:t}};var Hv=ci,Qv=function(t){return function(r){return t.apply(null,r)}},Gv=Ze,Yv=function(t){return Gv.isObject(t)&&t.isAxiosError===!0},ff=Ze,qv=nh,sl=Bv,Xv=mh,Kv=_c;function vh(e){var t=new sl(e),n=qv(sl.prototype.request,t);return ff.extend(n,sl.prototype,t),ff.extend(n,t),n.create=function(i){return vh(Xv(e,i))},n}var _t=vh(Kv);_t.Axios=sl;_t.CanceledError=fa;_t.CancelToken=Hv;_t.isCancel=ph;_t.VERSION=hh.version;_t.toFormData=ch;_t.AxiosError=gi;_t.Cancel=_t.CanceledError;_t.all=function(t){return Promise.all(t)};_t.spread=Qv;_t.isAxiosError=Yv;yc.exports=_t;yc.exports.default=_t;var ha=yc.exports;function wh(e){const{route:t=""}=e,n=t.split("/");return y("div",{className:"allims-lib-breadcrumb",children:n&&n.map((r,i)=>i+1<n.length?Y("div",{style:{display:"flex",alignItems:"center"},children:[y("label",{children:r}),y("span",{className:"material-symbols-outlined",children:"chevron_right"})]},r):y("h2",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r},`${r}-text`))})}function yi(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document!="undefined"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}function Rn(e,t){const{bottom:n="=",left:r="=",right:i="=",top:o}=e;return["left"].includes(t)?r==="="?`${o==null?void 0:o.value}${o==null?void 0:o.unit}`:`${r==null?void 0:r.value}${r==null?void 0:r.unit}`:["right"].includes(t)?i==="="?r==="="?`${o==null?void 0:o.value}${o==null?void 0:o.unit}`:`${r==null?void 0:r.value}${r==null?void 0:r.unit}`:`${i==null?void 0:i.value}${i==null?void 0:i.unit}`:["bottom"].includes(t)?n==="="?`${o==null?void 0:o.value}${o==null?void 0:o.unit}`:`${n==null?void 0:n.value}${n==null?void 0:n.unit}`:`${o==null?void 0:o.value}${o==null?void 0:o.unit}`}function rt(e,t,n){const{bottom:r="=",left:i="=",right:o="=",top:l={color:"#fff",round:0,size:0,style:"solid"}}=e;return["left"].includes(t)?i==="="?l[n]:i[n]:["right"].includes(t)?o==="="?i==="="?l[n]:i[n]:o[n]:["bottom"].includes(t)?r==="="?l[n]:r[n]:l[n]}function ut(e,t){var p,d,m,g,x,b,_,E,M,P,N,C,F,z,D,B,Q,T,A,O,Z;const{outline:n,margin:r,padding:i,border:o,size:l,background:a,transparency:s,shadow:u,gap:c,align:h,wrap:f,direction:w,content:v,absolute:k}=e||{};let S={};return t==="text"?S=te(L({},S),{color:v==null?void 0:v.color,textDecoration:`${(p=v==null?void 0:v.line)!=null&&p.under?"underline":""} ${(d=v==null?void 0:v.line)!=null&&d.over?"overline":""} ${(m=v==null?void 0:v.line)!=null&&m.through?"line-through":""}`,fontWeight:100*((v==null?void 0:v.bold)||0),fontFamily:v==null?void 0:v.font,fontSize:`${(g=v==null?void 0:v.size)==null?void 0:g.value}${(x=v==null?void 0:v.size)==null?void 0:x.unit}`,fontStyle:(v==null?void 0:v.italic)&&"italic",textTransform:v==null?void 0:v.transform,display:"flex",alignItems:h==null?void 0:h.vertical,justifyContent:h==null?void 0:h.horizontal,flexWrap:f,overflow:f==="nowrap"?"hidden":"auto",textOverflow:f==="nowrap"&&"ellipsis"}):(n&&(S=te(L({},S),{outlineColor:n==null?void 0:n.color,outlineWidth:n==null?void 0:n.size,outlineStyle:n==null?void 0:n.style})),r&&(S=te(L({},S),{marginTop:Rn(r,"top"),marginLeft:Rn(r,"left"),marginBottom:Rn(r,"bottom"),marginRight:Rn(r,"right")})),i&&(S=te(L({},S),{paddingTop:Rn(i,"top"),paddingLeft:Rn(i,"left"),paddingBottom:Rn(i,"bottom"),paddingRight:Rn(i,"right")})),k&&(S=te(L({},S),{top:k==null?void 0:k.top,bottom:k==null?void 0:k.bottom,left:k==null?void 0:k.left,right:k==null?void 0:k.right})),o&&(S=te(L({},S),{borderTopColor:rt(o,"top","color"),borderLeftColor:rt(o,"left","color"),borderRightColor:rt(o,"right","color"),borderBottomColor:rt(o,"bottom","color"),borderTopWidth:rt(o,"top","size"),borderLeftWidth:rt(o,"left","size"),borderRightWidth:rt(o,"right","size"),borderBottomWidth:rt(o,"bottom","size"),borderTopRightRadius:rt(o,"top","round"),borderTopLeftRadius:rt(o,"left","round"),borderBottomRightRadius:rt(o,"right","round"),borderBottomLeftRadius:rt(o,"bottom","round"),borderTopStyle:rt(o,"top","style"),borderLeftStyle:rt(o,"left","style"),borderRightStyle:rt(o,"right","style"),borderBottomStyle:rt(o,"bottom","style")})),l&&(S=te(L({},S),{width:`${(b=l==null?void 0:l.width)==null?void 0:b.value}${(_=l==null?void 0:l.width)==null?void 0:_.unit}`,height:`${(E=l==null?void 0:l.height)==null?void 0:E.value}${(M=l==null?void 0:l.height)==null?void 0:M.unit}`,minWidth:(P=l.width)==null?void 0:P.min,maxWidth:(N=l.width)==null?void 0:N.max,minHeight:(C=l.height)==null?void 0:C.min,maxHeight:(F=l.height)==null?void 0:F.max})),a&&(S=te(L({},S),{backgroundColor:a==null?void 0:a.color,backgroundImage:`url(${(z=a==null?void 0:a.image)==null?void 0:z.url})`,backgroundPosition:(D=a==null?void 0:a.image)==null?void 0:D.position,backgroundRepeat:(B=a==null?void 0:a.image)==null?void 0:B.repeat,backgroundSize:(Q=a==null?void 0:a.image)==null?void 0:Q.size})),s&&(S=te(L({},S),{opacity:s?1-s/100:1})),u&&(S=te(L({},S),{boxShadow:`${u==null?void 0:u.horizontal} ${u==null?void 0:u.vertical} ${u==null?void 0:u.blur} ${u==null?void 0:u.spread} ${u==null?void 0:u.color}`})),c&&(S=te(L({},S),{rowGap:`${(T=c==null?void 0:c.row)==null?void 0:T.value}${(A=c==null?void 0:c.row)==null?void 0:A.unit}`,columnGap:`${(O=c==null?void 0:c.column)==null?void 0:O.value}${(Z=c==null?void 0:c.column)==null?void 0:Z.unit}`})),w&&(S=te(L({},S),{flexDirection:w})),f&&(S=te(L({},S),{flexWrap:f})),h&&(S=te(L({},S),{alignItems:w!=null&&w.includes("column")?h==null?void 0:h.horizontal:h==null?void 0:h.vertical,justifyContent:w!=null&&w.includes("column")?h==null?void 0:h.vertical:h==null?void 0:h.horizontal}))),S}function Xn(e){let t="";return Object.entries(e).forEach(n=>{n[0]&&n[1]&&(t+=`&${n[0]}=${n[1]}`)}),t}function di(e){const a=e,{id:t,children:n,state:r,styleInLine:i,classInLine:o}=a,l=xe(a,["id","children","state","styleInLine","classInLine"]);return y("button",te(L({id:t,className:`allims-lib-button ${o} `,style:ut(i),"data-state":r},l),{children:n}))}function Xe(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Te(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Be(e){Te(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):(typeof e!="string"&&t!=="[object String]"||typeof console=="undefined"||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function pf(e,t){Te(2,arguments);var n=Be(e),r=Xe(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var i=n.getDate(),o=new Date(n.getTime());o.setMonth(n.getMonth()+r+1,0);var l=o.getDate();return i>=l?o:(n.setFullYear(o.getFullYear(),o.getMonth(),i),n)}function Jv(e,t){Te(2,arguments);var n=Be(e).getTime(),r=Xe(t);return new Date(n+r)}function Zv(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function e1(e){return Te(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function t1(e){if(Te(1,arguments),!e1(e)&&typeof e!="number")return!1;var t=Be(e);return!isNaN(Number(t))}yi(`@charset "UTF-8";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  width: 100vw;
  height: 100vh;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

#root {
  width: 100vw;
  height: 100vh;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

#allims-background-image {
  background-image: url("https://allims-files.s3.sa-east-1.amazonaws.com/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#allims-logo-self {
  background-image: url("https://allims-files.s3.sa-east-1.amazonaws.com/front/allims_black.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

#allims-logo-company {
  background-image: url("https://allims-files.s3.sa-east-1.amazonaws.com/front/allims.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

#allims-profile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
}
#allims-profile-menu header {
  padding: 5px 0;
}
#allims-profile-menu header label {
  color: #949393;
}
#allims-profile-menu div {
  width: 100%;
}
#allims-profile-menu div button {
  min-height: 30px;
  height: 3.5rem;
  width: 100%;
  color: #2e2e2e;
  border-top: 0.5px solid #bababa;
}
button #allims-profile-menu div button {
  border-bottom: 0.5px solid #bababa;
}
#allims-profile-menu footer {
  padding: 5px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 0.5px solid #bababa;
}

.allims-lib-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  outline: none;
  margin: 0;
  padding: 5px;
  border: 0;
  flex-wrap: "nowrap";
  width: 5rem;
  height: 3rem;
  background-color: #fff;
  gap: 0;
  border-radius: 2px;
  font-size: 1rem;
  color: #2e2e2e;
}
.allims-lib-button:hover {
  background-color: #f3f3f3;
  color: #2e2e2e;
}
.allims-lib-button label {
  cursor: pointer;
  text-align: center;
}
.allims-lib-button:disabled {
  color: #949393;
}

.allims-lib-button-link {
  width: auto;
  background-color: transparent;
  color: blue;
}
.allims-lib-button-link:hover {
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
}
.allims-lib-button-link label {
  cursor: pointer;
}

.allims-lib-button-cancel {
  border: 0.5px solid rgb(199, 20, 20);
  color: rgb(199, 20, 20);
}
.allims-lib-button-cancel:hover {
  background-color: rgb(169, 19, 19);
  color: #fff;
}

.allims-lib-button-ok {
  background-color: rgb(61, 165, 13);
  color: #fff;
}
.allims-lib-button-ok:hover {
  background-color: rgb(50, 132, 13);
  color: #fff;
}

.allims-lib-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
  flex-wrap: "nowrap";
  width: 100%;
  height: auto;
  background-color: #fff;
  gap: 0;
}

.allims-lib-input-container-prefix-suffix {
  display: flex;
  align-items: center;
  overflow: hidden;
  outline: none;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  border: none;
  padding: 0 5px;
}
.allims-lib-input-container-prefix-suffix span {
  min-width: 20px;
  width: auto;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.allims-lib-input-container-prefix-suffix span + span {
  min-width: 20px;
  width: auto;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.allims-lib-input {
  display: flex;
  overflow: auto;
  outline: none;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  border: none;
}

.allims-lib-textarea {
  display: flex;
  overflow: auto;
  outline: none;
  width: 100%;
  height: 4.5rem;
  padding: 5px;
}

.allims-lib-input-label {
  position: relative;
  background-color: #fff;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
}
.allims-lib-input-label input, .allims-lib-input-label textarea {
  border-width: 0.5px;
  border-radius: 2px;
  border-style: solid;
  border-color: #bababa;
  padding: 3px 5px;
  color: #2e2e2e;
}
.allims-lib-input-label input:focus, .allims-lib-input-label textarea:focus {
  outline: none;
  border-color: blue;
}
.allims-lib-input-label label {
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  position: absolute;
  top: 0px;
  left: 5px;
  color: #949393;
}
.allims-lib-input-label input:not([value=""]) + label {
  padding-top: 0;
  width: auto;
  height: auto;
  transition: 200ms;
  transform: translateY(calc(-100% + 5px));
  font-size: 0.9rem;
  background-color: inherit;
  color: #949393;
}
.allims-lib-input-label textarea:not([value=""]) + label {
  padding-top: 0;
  width: auto;
  height: auto;
  transition: 200ms;
  transform: translateY(calc(-100% + 5px));
  font-size: 0.9rem;
  background-color: inherit;
  color: #949393;
}
.allims-lib-input-label:focus-within > label {
  padding-top: 0;
  width: auto;
  height: auto;
  transition: 200ms;
  transform: translateY(calc(-100% + 5px));
  font-size: 0.9rem;
  background-color: inherit;
  color: blue !important;
}
.allims-lib-input-label:focus-within ~ button {
  display: block;
}

.allims-lib-input-modal-edit-render button {
  color: #2e2e2e !important;
  display: block !important;
}
.allims-lib-input-modal-edit-render:hover button {
  color: #2e2e2e !important;
  display: block !important;
}

.allims-lib-select {
  position: relative;
  width: 100%;
}

.allims-lib-select-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  font-size: 1rem;
}
.allims-lib-select-input input {
  font-size: 1rem;
  height: 25px;
}
.allims-lib-select-input button {
  display: none;
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #bababa;
}
.allims-lib-select-input:hover button {
  display: block;
}
.allims-lib-select-input:focus button {
  display: block;
}

.allims-lib-select-items {
  position: absolute;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  display: flex;
  top: 25px;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgb(111, 111, 111);
  min-height: 5rem;
  height: auto;
  max-height: 10rem;
  font-size: 1rem;
  overflow: hidden;
}

.allims-lib-select-items-scroll {
  overflow: auto;
  height: 100%;
  width: 100%;
}

.allims-lib-selectitem {
  background-color: transparent;
  outline: none;
  border: none;
  padding: 2px 5px;
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  color: #2e2e2e !important;
}
.allims-lib-selectitem:hover {
  background-color: #f1f1f1;
}

.allims-lib-toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1f2937;
  width: 6rem;
  min-width: 55px;
  height: 100%;
  padding: 1px;
}

.allims-lib-toolbar-button {
  color: #fff;
  height: 5rem;
  min-height: 40px;
  background-color: inherit;
  overflow: hidden;
}
.allims-lib-toolbar-button label {
  font-size: 0.8rem;
}
.allims-lib-toolbar-button:hover {
  background-color: #16202e;
  color: #fff;
}

.allims-lib-toolbar-start {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 5.5rem;
  background-color: transparent;
  border-bottom: 0.5px solid #fff;
}

.allims-lib-toolbar-center {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  background-color: transparent;
  overflow-y: auto;
  overflow-x: hidden;
}

.allims-lib-toolbar-end {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 5.5rem;
  background-color: transparent;
  border-top: 0.5px solid #fff;
}

.allims-lib-toolbar-horizontal {
  width: 100%;
  height: 5rem;
  flex-direction: row;
}

.allims-lib-toolbar-horizontal-area-left {
  flex-direction: row;
  width: auto;
  border: none;
  border-right: 0.5px solid #fff;
}

.allims-lib-toolbar-horizontal-area-center {
  flex-direction: row;
  width: auto;
  border: none;
}

.allims-lib-toolbar-horizontal-area-right {
  flex-direction: row;
  width: auto;
  border: none;
  border-left: 0.5px solid #fff;
}

.allims-lib-toolbar-horizontal-button {
  width: 5rem;
  min-width: 55px;
  height: 100%;
}

.allims-lib-toolbar-button-active {
  background-color: #f1f1f1;
  color: #2e2e2e;
}
.allims-lib-toolbar-button-active:hover {
  background-color: #e0dede;
  color: #2e2e2e;
}

.allims-lib-breadcrumb {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  height: auto;
  width: auto;
}
.allims-lib-breadcrumb label, .allims-lib-breadcrumb span {
  width: auto;
  font-size: 1.2rem;
  color: #949393;
}
.allims-lib-breadcrumb h2 {
  width: auto;
  color: #2e2e2e;
}

.allims-module {
  align-items: flex-start;
}

.allims-module-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.allims-module-main-heading {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #bababa;
}

.allims-module-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
}
.allims-module-actions label {
  font-size: 0.8rem;
}

.allims-lib-toolbar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.allims-lib-toolbar-container-title {
  font-size: 1.5rem;
  width: 100%;
  border-bottom: 0.5px solid #bababa;
  height: 3rem;
}

.allims-lib-dialog {
  position: absolute;
  z-index: 7;
  bottom: 50px;
  left: 50px;
}

.allims-lib-dialog-backdrop {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 6;
}

.allims-lib-popover {
  position: relative;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  overflow: hidden;
}

.allims-lib-switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 3rem;
  padding: 3px !important;
}

.allims-lib-switch-checkbox {
  display: none;
}

.allims-lib-switch {
  content: " ";
  display: block;
  width: 4.5rem;
  height: 100%;
  border-radius: 2px;
  background-color: transparent;
  padding: 1px;
  border: 0.5px solid #bababa;
}

.allims-lib-switch-vertical {
  transform: rotate(270deg);
  width: calc(3rem - 4px);
  height: 1.5rem;
}

.allims-lib-switch-button {
  content: " ";
  display: block;
  left: 0;
  width: calc(2rem - 4px);
  height: calc(2rem - 4px);
  clip-path: margin-box;
  background-color: rgb(199, 205, 196);
  float: left;
}

.allims-lib-switch-button-vertical {
  width: calc(1.5rem - 3px);
  height: calc(1.5rem - 3px);
}

.allims-lib-switch-checkbox:checked + .allims-lib-switch {
  border-color: rgb(61, 165, 13);
}

.allims-lib-switch-checkbox:checked + .allims-lib-switch .allims-lib-switch-button {
  background-color: rgb(61, 165, 13);
  float: right;
}

.allims-lib-modal-backdrop {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}

.allims-lib-modal-definicoes {
  width: 80%;
  height: 70%;
}

.allims-lib-modal {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  min-height: 100px;
  position: static;
}

.allims-lib-modal-cancel-ok {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 100px;
  position: static;
  color: #2e2e2e;
}
.allims-lib-modal-cancel-ok header {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid #bababa;
}
.allims-lib-modal-cancel-ok header label {
  font-size: 1.2rem;
}
.allims-lib-modal-cancel-ok div {
  padding: 5px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.allims-lib-modal-cancel-ok footer {
  padding: 5px;
  border-top: 0.5px solid #bababa;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.allims-lib-modal-cancel-ok footer button {
  min-height: 15px;
  height: 2rem;
}

.allims-lib-input-modal-container {
  position: relative;
  width: 100%;
}

.allims-lib-input-modal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
}
.allims-lib-input-modal button {
  position: absolute;
  right: 2.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: #bababa;
}
.allims-lib-input-modal button + button {
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #bababa;
}

.allims-lib-list {
  overflow-x: hidden;
  overflow-y: auto;
  height: auto;
  max-height: 20rem;
}
.allims-lib-list ul {
  overflow: hidden;
}

.allims-lib-list-item {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2e2e2e;
  width: 100%;
}
.allims-lib-list-item span {
  padding-left: 5px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.allims-lib-list-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.allims-lib-inputlist-items {
  background-color: #fff;
  z-index: 999;
  width: 27rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgb(111, 111, 111);
}
.allims-lib-inputlist-items header {
  background-color: #f1f1f1;
  height: 3rem;
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.allims-lib-inputlist-items footer {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid #bababa;
}

.allims-lib-inputlist-calendar-time {
  display: flex;
  align-items: center;
  justify-content: center;
}

.allims-lib-time {
  height: 21rem;
  width: 8rem;
  display: flex;
  border: 0.5px solid #bababa;
  background-color: #fff;
  flex-direction: column;
}

.allims-lib-time-header {
  width: 100%;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  color: #111;
}
.allims-lib-time-header:hover {
  color: #111;
}

.allims-lib-time-content {
  display: flex;
  height: 18rem;
}

.allims-lib-time-container {
  width: 4rem;
  overflow-y: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 5px;
}
.allims-lib-time-container ol {
  width: 100%;
  text-align: center;
  color: #2e2e2e;
}

.allims-lib-time-container::-webkit-scrollbar {
  width: 0px;
}

.allims-lib-time-item {
  height: 2rem;
  width: 2rem;
  padding: 5px;
  border-radius: 2px;
}
.allims-lib-time-item:hover {
  background-color: #f1f1f1;
  color: #2e2e2e;
  cursor: pointer;
}

.allims-lib-time-item-select {
  background-color: rgb(39, 116, 183);
  color: rgb(255, 255, 255);
}
.allims-lib-time-item-select:hover {
  background-color: rgb(27, 86, 137);
  color: rgb(255, 255, 255);
}

.allims-lib-edit-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.allims-lib-edit-info footer {
  padding: 5px;
  border-top: 0.5px solid #bababa;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.allims-lib-edit-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
  height: calc(100% - 45px);
  width: 100%;
  padding: 1rem;
  overflow: auto;
}

.allims-lib-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: auto;
}

.allims-lib-input-read {
  text-align: center !important;
}

.allims-lib-select-read {
  padding: 0 !important;
}
.allims-lib-select-read button {
  display: none;
}
.allims-lib-select-read:hover {
  background-color: rgb(6, 90, 118) !important;
}

.allims-lib-select-read-input input {
  text-align: center !important;
  border: none !important;
  height: 1.9rem !important;
  font-size: 1rem !important;
}
.allims-lib-select-read-input input:hover {
  background-color: rgb(6, 90, 118) !important;
}
.allims-lib-select-read-input button {
  display: none;
}
.allims-lib-select-read-input:hover button {
  display: block;
  color: #fff;
}

.allims-lib-input-modal-fast-container {
  position: relative;
  width: 100%;
}

.allims-lib-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
}
.allims-lib-input > input {
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
}
.allims-lib-input > button {
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  background-color: rgb(10, 110, 144);
  color: #fff;
}
.allims-lib-input > button:hover {
  background-color: rgb(6, 90, 118);
}

.allims-lib-input-modal-fast-backdrop {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 998;
}

.allims-lib-input-modal-fast-backdrop-dialog {
  background-color: rgba(65, 64, 64, 0.9);
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.allims-lib-input-modal-fast-backdrop-dialog > footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  background-color: #f1f1f1;
  padding: 0 5px;
}
.allims-lib-input-modal-fast-backdrop-dialog > div {
  width: 90%;
  height: 80%;
}

.allims-lib-enter-direction {
  position: absolute;
  top: 50px;
  right: 286px;
  z-index: 999;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 3px 6px -1px #111;
  box-shadow: 0px 3px 6px -1px #111;
}

.allims-lib-input-error {
  border: 0.5px solid red !important;
}

.allims-lib-calendar-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
}

.allims-lib-calendar-selected-button {
  align-items: center;
  border: none;
  border-radius: 9999px;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  height: 2rem;
  width: 2em;
  color: rgb(255, 255, 255);
  background: rgb(37, 99, 235);
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}
.allims-lib-calendar-selected-button:focus {
  border: none;
  outline: none;
  background: rgb(37, 99, 235);
  color: rgb(255, 255, 255);
}
.allims-lib-calendar-selected-button:hover {
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
}

.allims-lib-calendar-day {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-size: 1rem;
  height: 2rem;
  width: 2rem;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}
.allims-lib-calendar-day:hover {
  background-color: #e0dede;
  border-radius: 50%;
}

.allims-lib-calendar-day-selected {
  font-size: 1rem;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.allims-lib-calendar-dayOfWeek {
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
}

.allims-lib-calendar-dayOfWeek-weekDay {
  font-size: 1rem;
  text-align: center;
  color: rgb(31, 41, 55);
}

.allims-lib-calendar {
  display: flex;
  height: 21rem;
  width: 100%;
  min-width: 20rem;
  display: -ms-flexbox;
}

.allims-lib-calendar-shadow {
  width: 100%;
}

.allims-lib-calendar-container {
  border-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 21rem;
  padding: 0.25rem 0.2rem 0.25rem 0.5rem;
  width: 100%;
  background: rgb(255, 255, 255);
}

.allims-lib-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.6rem;
  border-bottom: 0.5px solid #cdcdcd;
}
.allims-lib-calendar-header button, .allims-lib-calendar-header select {
  border: none;
  outline: none;
}

.allims-lib-calendar-header-monthMenu,
.allims-lib-calendar-header-yearMenu {
  appearance: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  height: 2.5rem;
  padding-left: 0.25rem;
  padding-right: 1rem;
  background: rgb(255, 255, 255);
  color: rgb(31, 41, 55);
  -webkit-appearance: none;
  -moz-appearance: none;
}
.allims-lib-calendar-header-monthMenu::after,
.allims-lib-calendar-header-yearMenu::after {
  content: "\u02EF";
  float: right;
  border: none;
  font-family: "FontAwesome";
}
.allims-lib-calendar-header-monthMenu:hover,
.allims-lib-calendar-header-yearMenu:hover {
  cursor: pointer;
}
.allims-lib-calendar-header-monthMenu:hover::after,
.allims-lib-calendar-header-yearMenu:hover::after {
  content: "\u02EF";
  float: right;
  border: none;
  font-family: "FontAwesome";
}

.allims-lib-calendar-header-today {
  appearance: none;
  font-size: 1rem;
  font-weight: bold;
  float: center;
  text-align: center;
  height: 2.5rem;
  padding-right: 1.8rem;
  background: rgb(255, 255, 255);
  color: rgb(31, 41, 55);
  -webkit-appearance: none;
  -moz-appearance: none;
}
.allims-lib-calendar-header-today:hover {
  color: rgb(156, 163, 175);
  cursor: pointer;
}

.allims-lib-calendar-header-arrows {
  display: flex;
  align-items: right;
  float: right;
  font-size: 1rem;
  text-align: right;
  -webkit-box-align: center;
  -ms-flex-align: center;
}

.allims-lib-calendar-header-arrow {
  border: none;
  font-size: 1rem;
  outline: none;
  color: rgb(31, 41, 55);
  background-color: transparent;
}
.allims-lib-calendar-header-arrow:focus {
  outline: none;
  border: none;
  color: rgb(156, 163, 175);
}
.allims-lib-calendar-header-arrow:hover {
  border: none;
  outline: none;
  height: 2.5rem;
  cursor: pointer;
  color: rgb(156, 163, 175);
}

.allims-lib-calendar-agenda {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 5px;
  height: 18rem;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
}

.allims-lib-calendar-table {
  height: 18rem;
  width: 90%;
}`);var n1={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r1=function(e,t,n){var r,i=n1[e];return r=typeof i=="string"?i:t===1?i.one:i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function as(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var i1={date:as({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:as({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:as({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o1={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Oi(e){return function(t,n){var r,i=n||{};if((i.context?String(i.context):"standalone")==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,l=i.width?String(i.width):o;r=e.formattingValues[l]||e.formattingValues[o]}else{var a=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;r=e.values[s]||e.values[a]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Ni(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var l,a=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?a1(s,function(h){return h.test(a)}):l1(s,function(h){return h.test(a)});l=e.valueCallback?e.valueCallback(u):u,l=n.valueCallback?n.valueCallback(l):l;var c=t.slice(a.length);return{value:l,rest:c}}}function l1(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function a1(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var zi,s1={code:"en-US",formatDistance:r1,formatLong:i1,formatRelative:function(e,t,n,r){return o1[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Oi({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Oi({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Oi({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Oi({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Oi({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(zi={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(zi.matchPattern);if(!n)return null;var r=n[0],i=e.match(zi.parsePattern);if(!i)return null;var o=zi.valueCallback?zi.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var l=e.slice(r.length);return{value:o,rest:l}}),era:Ni({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Ni({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ni({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Ni({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Ni({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function u1(e,t){Te(2,arguments);var n=Xe(t);return Jv(e,-n)}function Vl(e){Te(1,arguments);var t=1,n=Be(e),r=n.getUTCDay(),i=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function bh(e){Te(1,arguments);var t=Be(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Vl(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var l=Vl(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function c1(e){Te(1,arguments);var t=bh(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=Vl(n);return r}function Bl(e,t){Te(1,arguments);var n=t||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,o=i==null?0:Xe(i),l=n.weekStartsOn==null?o:Xe(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=Be(e),s=a.getUTCDay(),u=(s<l?7:0)+s-l;return a.setUTCDate(a.getUTCDate()-u),a.setUTCHours(0,0,0,0),a}function xh(e,t){Te(1,arguments);var n=Be(e),r=n.getUTCFullYear(),i=t||{},o=i.locale,l=o&&o.options&&o.options.firstWeekContainsDate,a=l==null?1:Xe(l),s=i.firstWeekContainsDate==null?a:Xe(i.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(r+1,0,s),u.setUTCHours(0,0,0,0);var c=Bl(u,t),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var f=Bl(h,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function d1(e,t){Te(1,arguments);var n=t||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=i==null?1:Xe(i),l=n.firstWeekContainsDate==null?o:Xe(n.firstWeekContainsDate),a=xh(e,t),s=new Date(0);s.setUTCFullYear(a,0,l),s.setUTCHours(0,0,0,0);var u=Bl(s,t);return u}function we(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var In={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return we(t==="yy"?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):we(n+1,2)},d:function(e,t){return we(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return we(e.getUTCHours()%12||12,t.length)},H:function(e,t){return we(e.getUTCHours(),t.length)},m:function(e,t){return we(e.getUTCMinutes(),t.length)},s:function(e,t){return we(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return we(Math.floor(r*Math.pow(10,n-3)),t.length)}},f1="midnight",p1="noon",m1="morning",h1="afternoon",g1="evening",y1="night",v1={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var r=e.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return In.y(e,t)},Y:function(e,t,n,r){var i=xh(e,r),o=i>0?i:1-i;return t==="YY"?we(o%100,2):t==="Yo"?n.ordinalNumber(o,{unit:"year"}):we(o,t.length)},R:function(e,t){return we(bh(e),t.length)},u:function(e,t){return we(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return we(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return we(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return In.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return we(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var i=function(o,l){Te(1,arguments);var a=Be(o),s=Bl(a,l).getTime()-d1(a,l).getTime();return Math.round(s/6048e5)+1}(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):we(i,t.length)},I:function(e,t,n){var r=function(i){Te(1,arguments);var o=Be(i),l=Vl(o).getTime()-c1(o).getTime();return Math.round(l/6048e5)+1}(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):we(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):In.d(e,t)},D:function(e,t,n){var r=function(i){Te(1,arguments);var o=Be(i),l=o.getTime();o.setUTCMonth(0,1),o.setUTCHours(0,0,0,0);var a=o.getTime(),s=l-a;return Math.floor(s/864e5)+1}(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):we(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var i=e.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return we(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var i=e.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return we(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return we(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,i=e.getUTCHours();switch(r=i===12?p1:i===0?f1:i/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,i=e.getUTCHours();switch(r=i>=17?g1:i>=12?h1:i>=4?m1:y1,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return In.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):In.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):we(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):we(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):In.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):In.s(e,t)},S:function(e,t){return In.S(e,t)},X:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return hf(i);case"XXXX":case"XX":return ar(i);default:return ar(i,":")}},x:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return hf(i);case"xxxx":case"xx":return ar(i);default:return ar(i,":")}},O:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+mf(i,":");default:return"GMT"+ar(i,":")}},z:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+mf(i,":");default:return"GMT"+ar(i,":")}},t:function(e,t,n,r){var i=r._originalDate||e;return we(Math.floor(i.getTime()/1e3),t.length)},T:function(e,t,n,r){return we((r._originalDate||e).getTime(),t.length)}};function mf(e,t){var n=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var l=t||"";return n+String(i)+l+we(o,2)}function hf(e,t){return e%60==0?(e>0?"-":"+")+we(Math.abs(e)/60,2):ar(e,t)}function ar(e,t){var n=t||"",r=e>0?"-":"+",i=Math.abs(e);return r+we(Math.floor(i/60),2)+n+we(i%60,2)}var w1=v1;function gf(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function yf(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var b1={p:yf,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return gf(e,t);switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",gf(i,t)).replace("{{time}}",yf(o,t))}},x1=b1,k1=["D","DD"],_1=["YY","YYYY"];function S1(e){return k1.indexOf(e)!==-1}function E1(e){return _1.indexOf(e)!==-1}function vf(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var C1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,T1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L1=/^'([^]*?)'?$/,O1=/''/g,N1=/[a-zA-Z]/;function wr(e,t,n){Te(2,arguments);var r=String(t),i=n||{},o=i.locale||s1,l=o.options&&o.options.firstWeekContainsDate,a=l==null?1:Xe(l),s=i.firstWeekContainsDate==null?a:Xe(i.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=o.options&&o.options.weekStartsOn,c=u==null?0:Xe(u),h=i.weekStartsOn==null?c:Xe(i.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var f=Be(e);if(!t1(f))throw new RangeError("Invalid time value");var w=Zv(f),v=u1(f,w),k={firstWeekContainsDate:s,weekStartsOn:h,locale:o,_originalDate:f},S=r.match(T1).map(function(p){var d=p[0];return d==="p"||d==="P"?(0,x1[d])(p,o.formatLong,k):p}).join("").match(C1).map(function(p){if(p==="''")return"'";var d=p[0];if(d==="'")return z1(p);var m=w1[d];if(m)return!i.useAdditionalWeekYearTokens&&E1(p)&&vf(p,t,e),!i.useAdditionalDayOfYearTokens&&S1(p)&&vf(p,t,e),m(v,p,o.localize,k);if(d.match(N1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");return p}).join("");return S}function z1(e){return e.match(L1)[1].replace(O1,"'")}function mo(e){Te(1,arguments);var t=Be(e),n=t.getDate();return n}function du(e){Te(1,arguments);var t=Be(e),n=t.getHours();return n}function fu(e){Te(1,arguments);var t=Be(e),n=t.getMinutes();return n}function Dn(e){Te(1,arguments);var t=Be(e),n=t.getMonth();return n}function wf(e){Te(1,arguments);var t=Be(e),n=t.getSeconds();return n}function Pn(e){return Te(1,arguments),Be(e).getFullYear()}const R1=e=>{const{day:t,isActive:n,handleSelectedDate:r,isMonth:i}=e;return y("td",n?{children:y("div",{className:"allims-lib-calendar-selected",onClick:()=>{r(t)},children:y("button",{role:"link",className:"allims-lib-calendar-selected-button",children:mo(t)})})}:{children:y("div",{className:"allims-lib-calendar-day",onClick:()=>{r(t)},children:y("p",{className:"allims-lib-calendar-day-selected",children:mo(t)})})})},I1=e=>{const{day:t}=e;return y("th",{children:y("div",{className:"allims-lib-calendar-dayOfWeek",children:y("p",{className:"allims-lib-calendar-dayOfWeek-weekDay",children:t})})})},D1=e=>{const{week:t,currentDate:n,handleSelectedDate:r}=e;return y("tr",{children:t.map((i,o)=>y(R1,{isActive:n===i,isMonth:wr(n,"MM")===wr(i,"MM"),day:i,handleSelectedDate:r},`${o}`))})},ss=["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],P1=[{value:"Janeiro",id:1},{value:"Fevereiro",id:2},{value:"Mar\xE7o",id:3},{value:"Abril",id:4},{value:"Maio",id:5},{value:"Junho",id:6},{value:"Julho",id:7},{value:"Agosto",id:8},{value:"Setembro",id:9},{value:"Outubro",id:10},{value:"Novembro",id:11},{value:"Dezembro",id:12}],$1=["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"];let us=!0;function kh(e){const{isRange:t=!1,onChangeDate:n=()=>{}}=e,[r,i]=I.exports.useState([]);I.exports.useState(new Date);const[o,l]=I.exports.useState(new Date);function a(u){l(u)}function s(u,c){const h=function(v,k){Te(1,arguments);var S=k||{},p=S.locale,d=p&&p.options&&p.options.weekStartsOn,m=d==null?0:Xe(d),g=S.weekStartsOn==null?m:Xe(S.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=Be(v),b=x.getDay(),_=(b<g?7:0)+b-g;return x.setDate(x.getDate()-_),x.setHours(0,0,0,0),x}(new Date(u,c,1),{weekStartsOn:0}),f=[];let w=h;Array.from({length:6}).forEach(()=>{const v=[];Array.from({length:7}).forEach(()=>{v.push(w),w=function(k,S){Te(2,arguments);var p=Be(k),d=Xe(S);return isNaN(d)?new Date(NaN):(d&&p.setDate(p.getDate()+d),p)}(w,1)}),f.push(v)}),i(f)}return I.exports.useEffect(()=>{us?us=!1:n(o)},[o]),I.exports.useEffect(()=>(s(Pn(o),Dn(o)),()=>{us=!0}),[]),y("div",{className:"allims-lib-calendar",children:y("div",{className:"allims-lib-calendar-shadow",children:Y("div",{className:"allims-lib-calendar-container",children:[Y("div",{className:"allims-lib-calendar-header",children:[Y("div",{children:[y("span",{children:y("select",{className:"allims-lib-calendar-header-monthMenu",value:wr(o,"M"),onChange:function(u){const c=new Date(Pn(o),+u.target.value-1,mo(o),du(o),fu(o),wf(o));l(c),s(Pn(c),Dn(c))},children:P1.map(u=>y("option",{value:u.id,children:u.value},u.id))})}),y("span",{children:y("select",{className:"allims-lib-calendar-header-yearMenu",value:wr(o,"y"),onChange:function(u){const c=new Date(+u.target.value,Dn(o),mo(o),du(o),fu(o),wf(o));l(c),s(Pn(c),Dn(c))},children:$1.map(u=>y("option",{children:u},u))})})]}),y("button",{type:"button",className:"allims-lib-calendar-header-today",onClick:function(){const u=new Date;l(u),s(Pn(u),Dn(u))},children:"Hoje"}),Y("div",{className:"allims-lib-calendar-header-arrows",children:[y("button",{"aria-label":"calendar backward",className:"allims-lib-calendar-header-arrow",type:"button",onClick:function(){const u=function(c,h){Te(2,arguments);var f=Xe(h);return pf(c,-f)}(o,1);l(u),s(Pn(u),Dn(u))},children:Y("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-left",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),y("polyline",{points:"15 6 9 12 15 18"})]})}),y("button",{"aria-label":"calendar forward",className:"allims-lib-calendar-header-arrow",type:"button",onClick:function(){const u=pf(o,1);l(u),s(Pn(u),Dn(u))},children:Y("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler  icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[y("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),y("polyline",{points:"9 6 15 12 9 18"})]})})]})]}),y("div",{className:"allims-lib-calendar-agenda",children:Y("table",{className:"allims-lib-calendar-table",children:[y("thead",{children:y("tr",{children:ss==null?void 0:ss.map((u,c)=>y(I1,{day:u},`week-${c}`))})}),y("tbody",{children:r==null?void 0:r.map((u,c)=>y(D1,{currentDate:o,week:u,handleSelectedDate:a},`month-${c}`))})]})})]})})})}function tn(e){const{children:t,id:n,htmlFor:r,classInLine:i,styleInLine:o}=e;return y("label",{id:n,htmlFor:r,className:i,style:te(L({},ut(o,"text")),{overflow:"hidden"}),children:t})}const se=I.exports.forwardRef((e,t)=>{const p=e,{children:n,id:r,field:i,role:o="none",state:l="normal",content:a,type:s="visual",classInLine:u,styleInLine:c,onSubmit:h=()=>{},onError:f,getValues:w}=p,v=xe(p,["children","id","field","role","state","content","type","classInLine","styleInLine","onSubmit","onError","getValues"]);if(s==="form"){let x=function(_){g(_)},b=function(){return d.getValues()};var k=x,S=b;const d=R0(),m=d.handleSubmit(h);async function g(_){var E;if(w){const M=await w(i||r,_),P=d.getValues();(E=Object.keys(P))==null||E.forEach(N=>{typeof P[N]=="object"?Array.isArray(P[N])?d.setValue(N,[]):d.setValue(N,{}):d.setValue(N,"")}),d.reset(M)}}return I.exports.useEffect(()=>{g()},[]),I.exports.useImperativeHandle(t,()=>({handleResetForm:x,submit(){m()},getData:b}),[x,r,i,b]),y(v0,te(L({},d),{children:y("form",te(L({id:i,role:o,className:`allims-lib-frame ${u}`,style:te(L({},ut(c)),{position:"relative"}),"data-state":l,"data-field":i,onSubmit:m},v),{children:n||y(tn,{id:`${r}-text`,field:`${i}-text`,styleInLine:{content:a,align:c==null?void 0:c.align,wrap:c==null?void 0:c.wrap},children:a==null?void 0:a.value})}))}))}return y("div",{id:r,role:o,className:`allims-lib-frame ${u}`,style:ut(c),"data-state":l,children:n||y(tn,{id:`${r}-text`,field:`${i}-text`,styleInLine:{content:a,align:c==null?void 0:c.align,wrap:c==null?void 0:c.wrap},children:a==null?void 0:a.value})})}),_o="http://allims.dyndns.info:5000",F1="ArrowLeft",M1="ArrowRight",A1="ArrowUp",j1="ArrowDown",U1="Enter",V1="Tab",B1="Escape",Ri=ha.create(),W1={"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Accept:"application/json"};async function Cn(e){var r,i,o,l,a,s;const{url:t,body:n={}}=e;Ri.defaults.timeout=3e4,window.origin.includes("localhost")?Ri.defaults.baseURL=_o:Ri.defaults.baseURL=window.origin,Ri.defaults.headers.common.Authorization=((r=window.sessionStorage.getItem("@allims_token"))==null?void 0:r.replaceAll('"',""))||"";try{const u=await Ri.put(t,n,{headers:W1});return{success:!0,data:u.data.data,message:((i=u.data)==null?void 0:i.warn)||null}}catch(u){return u!=null&&u.response?{success:!1,data:null,message:((l=(o=u==null?void 0:u.response)==null?void 0:o.data)==null?void 0:l.error)||((s=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:s.warn)||"Erro, verifique com o suporte!"}:(console.error("Error",u),{success:!1,data:null,message:"Lamentamos, houve um erro, verifique com o suporte!"})}}function _h(e,t){const[n,r]=I.exports.useState(e);return I.exports.useEffect(()=>{const i=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(i)}},[e,t]),n}const Ec=(e,t)=>{I.exports.useEffect(()=>{const n=r=>{const i=e==null?void 0:e.current;i&&!i.contains((r==null?void 0:r.target)||null)&&t(r)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])};function cn(){return y("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Y("div",{className:"allims-lib-lds-ring",children:[y("div",{}),y("div",{}),y("div",{}),y("div",{})]})})}yi(`.allims-lib-lds-ring {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
}

.allims-lib-lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3.5px solid #1f2937;
    border-radius: 50%;
    animation: allims-lib-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1f2937 transparent transparent transparent;
}

.allims-lib-lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.allims-lib-lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.allims-lib-lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes allims-lib-lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`);yi(`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  width: 100vw;
  height: 100vh;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

#root {
  width: 100vw;
  height: 100vh;
}

.container-grid {
  background-color: #fff;
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  font-size: 1rem;
  font-weight: 400;
  color: #2e2e2e;
  width: 100%;
  height: calc(100% - 25px);
}

.container-grid-columns {
  position: absolute;
  z-index: 1;
  display: grid;
  grid-gap: 1px;
  width: 100%;
}

.grid-group {
  background-color: #ededed;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
}
.grid-group div {
  display: grid;
}

.grid-column {
  background-color: #ededed;
  color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
}
.grid-column span {
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
}
.grid-column div {
  display: flex;
  align-items: center;
}
.grid-column div svg {
  margin-left: 5px;
  display: none;
  border-radius: 50%;
  cursor: pointer;
}
.grid-column div svg:hover {
  background-color: #cdcdcd;
}
.grid-column:hover div svg {
  display: flex;
}

.grid-column-not-move {
  cursor: default;
}

.grid-column-check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-column-resized {
  width: 10px;
  height: 25px;
  cursor: col-resize;
}

.grid-column-not-resized {
  width: 15px;
  height: 25px;
  cursor: default;
}

.showColumn {
  display: flex !important;
}

.container-grid-rows {
  margin-top: 25px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.container-virtual {
  position: relative;
}

.container-grid-row {
  position: absolute;
  width: 100%;
  display: grid;
  grid-gap: 1px;
}
.container-grid-row:nth-child(even) {
  background-color: #ffffff;
  color: #2e2e2e;
}
.container-grid-row:nth-child(odd) {
  background-color: #f6f6f6;
  color: #2e2e2e;
}

.container-grid-row-select {
  color: #f1f1f1;
}
.container-grid-row-select:nth-child(even) {
  background-color: rgb(10, 110, 144);
  color: #f1f1f1;
}
.container-grid-row-select:nth-child(odd) {
  background-color: rgb(10, 110, 144);
  color: #f1f1f1;
}

.grid-row {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0 5px;
}
.grid-row span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.grid-row:hover {
  background-color: #e4e4e4;
  color: #111111;
}
.grid-row:focus {
  border: 1px solid rgb(6, 90, 118);
  border-radius: 0;
}

.grid-row-select:hover {
  background-color: rgb(6, 90, 118);
  color: #f1f1f1;
}

.container-grid-filter {
  position: absolute;
  z-index: 1;
  display: grid;
  grid-gap: 1px;
  width: 100%;
}

.grid-filter {
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #cdcdcd;
}
.grid-filter select {
  width: 90px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.grid-filter button {
  flex: 1;
  border: none;
  outline: none;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  padding: 2px;
}

.grid-filter-modal-open {
  width: 100%;
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 1;
  background-color: #808080;
  color: #f1f1f1;
  -webkit-box-shadow: 0px 3px 6px -1px #111;
  box-shadow: 0px 3px 6px -1px #111;
  border-radius: 5px;
}
.grid-filter-modal-open ul {
  height: 200px;
  list-style-type: none;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 2px;
  background-color: #f1f1f1;
}
.grid-filter-modal-open ul li {
  display: flex;
  align-items: center;
  padding: 3px;
  color: #111;
}
.grid-filter-modal-open ul li input {
  width: 13px;
  height: 13px;
}
.grid-filter-modal-open ul li span {
  flex: 1;
}
.grid-filter-modal-open div {
  display: flex;
  align-items: center;
  padding: 5px;
}
.grid-filter-modal-open div input {
  width: 13px;
  height: 13px;
}
.grid-filter-modal-open div span {
  text-align: center;
  flex: 1;
}

.grid-filter-modal-close {
  display: none;
}

.grid-filter-input-search {
  flex: 1;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 11px 5px;
}

.grid-filter-input {
  flex: 1;
  border: none;
  outline: none;
  height: 20px;
  margin-right: 5px;
  border-radius: 5px;
  padding: 2px;
}

.skeleton-loading {
  width: 100%;
  height: 80%;
  display: block;
  background-image: linear-gradient(90deg, rgba(241, 241, 241, 0) 0, rgba(241, 241, 241, 0.2) 20%, rgba(231, 231, 231, 0.5) 60%, rgba(241, 241, 241, 0));
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
}

@keyframes shine {
  to {
    background-position: 100% 0, 0 0;
  }
}
.container-grid-edit {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.lds-ring {
  /* display: inline-block; */
  z-index: 9999;
  position: absolute;
  top: 35vh;
  left: 35vw;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--primary);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--primary) transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`);const H1=({css:e})=>Y("div",{className:"lds-ring",style:e,children:[y("div",{}),y("div",{}),y("div",{}),y("div",{})]});let Ho=null,bf=0;const Sh=I.exports.forwardRef((e,t)=>{const{field:n,isLoading:r,columns:i=[],total:o=0,isSelect:l=!1,denseRow:a=!0,limit:s=100,disabledHeader:u=!1,keyField:c,nextRows:h=()=>{},translateX:f,onFocusedRow:w=()=>{},onSelectRows:v,onSelectRowsKeys:k,onLoadedData:S}=e,{control:p}=nn(),{fields:d}=Xm({name:n,control:p,keyName:"idData"}),m=a?25:50,g=J.useRef(null),x=J.useRef(null),b=Math.trunc(1e3/m)+10,[_,E]=J.useState(""),[M,P]=J.useState(()=>i.filter(V=>!(V!=null&&V.hidden)).map(V=>V)),[N,C]=J.useState(!1),[F,z]=J.useState(0),[D,B]=J.useState({start:0,end:b}),[Q,T]=J.useState({}),[A,O]=J.useState({limit:b,offset:0}),Z=J.useCallback(()=>d,[d]),ne=J.useCallback(()=>M,[M]),ce=J.useCallback(()=>D,[D]),ve=J.useCallback(()=>Q,[Q]),Oe=J.useCallback(()=>A,[A]),Me=J.useCallback(()=>d?d.filter(V=>V&&V.checked).map(V=>V):[],[d]),ct=J.useCallback(()=>d?d.filter(V=>V&&V.checked).map(V=>V[c]):[],[d,c]),On=J.useCallback(V=>{const $=(d==null?void 0:d.filter(H=>H&&H[c]==V)[0])||{};w($),T($)},[c,d,w,T]),ir=J.useCallback(({nameTemplate:V,width:$,cols:H})=>{const G=_.split(" ");let U="";l&&(U="50px"),H.forEach((K,le)=>{K.field===V&&$>0?U+=` ${$}px`:G[le+1]&&G[le+1].indexOf("minmax")<0?U+=` ${+G[le+1].slice(0,-2)}px`:U+=K!=null&&K.width?` ${K.width}px`:` minmax(${K&&K.minWidth?K.minWidth+"px":"120px"},${K&&K.maxWidth?K.maxWidth+"px":"1fr"})`}),E(U)},[l,M,_,i]),R=J.useCallback(()=>{const V=Math.ceil(o/b);bf=g.current.scrollTop;const $=Math.trunc(g.current.scrollTop/m),H=$+b;let G=Math.floor($/b),U=Math.ceil(H/b);G<1&&(G=1),U>V&&(U=V);const K=b*(G-1);return{startIndex:$,endIndex:H,newLimit:b*U-1-K+1,newOffset:K}},[b,o,g,m]),j=J.useCallback(()=>{if(g.current){C(!0);const{startIndex:V,endIndex:$,newLimit:H,newOffset:G}=R();B({start:V,end:$}),Ho&&clearTimeout(Ho),Ho=setTimeout(()=>{O({limit:H,offset:G}),h(H,G)},300),C(!1)}},[g,s,bf,m,Ho,D,b,o,d]),W=J.useCallback(V=>{const $=JSON.parse(JSON.stringify(V.currentTarget.dataset)),H=(d==null?void 0:d.filter(G=>G&&G[c]==$.row)[0])||{};w(H),T(H)},[c,d,w,T]),ee=J.useCallback(V=>{z(V),x.current.scrollLeft=V},[z,x]);J.useEffect(()=>{v&&v(d?d.filter(V=>V&&V.checked).map(V=>V):[]),k&&k(d?d.filter(V=>V&&V.checked).map(V=>V[c]):[]),S&&S()},[d]),J.useEffect(()=>{const V=i.filter($=>!($!=null&&$.hidden)).map($=>$);P(V),ir({nameTemplate:"",width:0,cols:V})},[i]),J.useEffect(()=>()=>{E(""),P([]),C(!1),z(0),B({start:0,end:b}),T({}),O({limit:b,offset:0})},[]);const oe=J.useMemo(()=>(({columns:V,gridTemplate:$,translateX:H})=>y("div",{className:"container-grid-columns",style:{gridTemplateColumns:$,height:24},children:V.reduce((G,U)=>{var K=G.findIndex(le=>le.group==(U==null?void 0:U.dataGroup));return K<0&&(K=G.length,G.push({group:U.dataGroup,list:[]})),G[K].list.push(U),G},[]).map((G,U)=>{const K=[];return G.list.forEach((le,fe)=>{K.push(Y("div",{className:"grid-column grid-column-not-move","data-column-name":le.field,children:[y("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:H?H(`grid.column.${le.constant||le.field}`):le.title||le.field,children:H?H(`grid.column.${le.constant||le.field}`):le.title||le.field}),y("div",{children:y("div",{className:"grid-column-not-resized"})})]},`r${le.field}`))}),G.group?Y("div",{className:"grid-group",children:[y("span",{children:"Sample Status"}),y("div",{style:{gridTemplateColumns:`repeat(${K.length}, 1fr)`},children:K})]},`${U}`):K})}))({columns:M,heightRow:m,gridTemplate:_,translateX:f}),[i,M,d,m,_]),X=J.useMemo(()=>(({keyField:V,refView:$,isLoading:H,colLeft:G,columns:U,data:K,heightRow:le,rowsVisible:fe,onScrollPos:ge,onClick:me,rowFocus:$e,gridTemplate:ue,onScrollHorizontal:We})=>{const Rt=ae=>{var et,It,Ge,Dt;switch(ae.preventDefault(),ae.stopPropagation(),ae.code){case"Enter":case"Space":me(ae);break;case"ArrowDown":$.current.offsetHeight+$.current.scrollTop-ae.target.offsetHeight*+ae.target.dataset.rowIndex<=130&&$.current.scroll({top:$.current.scrollTop+ae.target.offsetHeight+10,behavior:"smooth"});const St=+`${+ae.target.dataset.rowIndex+1}${ae.target.dataset.colIndex}`;(et=document.querySelector(`[tabindex = '${St}']`))==null||et.focus();break;case"ArrowUp":$.current.offsetHeight+$.current.scrollTop-ae.target.offsetHeight*+ae.target.dataset.rowIndex>=130&&$.current.scroll({top:$.current.scrollTop-ae.target.offsetHeight-10,behavior:"smooth"});const fn=+`${+ae.target.dataset.rowIndex-1}${ae.target.dataset.colIndex}`;(It=document.querySelector(`[tabindex = '${fn}']`))==null||It.focus();break;case"ArrowLeft":const Tr=+`${ae.target.dataset.rowIndex}${+ae.target.dataset.colIndex-1}`;(Ge=document.querySelector(`[tabindex = '${Tr}']`))==null||Ge.focus();break;case"ArrowRight":$.current.scrollWidth-$.current.parentElement.clientWidth+ae.target.offsetWidth>=ae.target.offsetLeft&&We(ae.target.offsetLeft-ae.target.offsetWidth);const Vh=+`${ae.target.dataset.rowIndex}${+ae.target.dataset.colIndex+1}`;(Dt=document.querySelector(`[tabindex = '${Vh}']`))==null||Dt.focus()}};return y("div",{className:"container-grid-rows ",ref:$,onScroll:ge,style:{width:G>0?G:"100%"},children:H?y(cn,{}):y("div",{className:"container-virtual",style:{height:K.length*le},children:K&&K.map((ae,et)=>{if(et>=fe.start&&et<=fe.end){const It=[];return U.reduce((Ge,Dt)=>{var St=Ge.findIndex(fn=>fn.group==Dt.dataGroup);return St<0&&(St=Ge.length,Ge.push({group:Dt.dataGroup,list:[]})),Ge[St].list.push(Dt),Ge},[]).forEach((Ge,Dt)=>{const St=[];Ge.list.forEach((fn,Tr)=>{St.push(y("div",{id:`${et+5}${Tr}`,tabIndex:+`${et+5}${Tr}`,className:$e&&$e[V]&&ae&&ae[V]&&$e[V]==ae[V]?"grid-row grid-row-select":"grid-row",title:ae&&ae[fn.field]||"",style:{height:le-1},"data-row-index":et+5,"data-col-index":Tr,onKeyDown:Rt,"data-row":ae&&ae[V],children:ae&&ae[fn.field]||!H?y("span",{children:ae&&ae[fn.field]||""}):y("span",{className:"skeleton-loading"})},`p${Tr}`))}),Ge.group?It.push(y("div",{className:"grid-group",children:y("div",{style:{gridTemplateColumns:`repeat(${St.length}, 1fr)`},children:St},`temp${Dt}`)},`${Dt}`)):It.push(St)}),y("div",{className:$e&&$e[V]&&ae&&ae[V]&&$e[V]==ae[V]?"container-grid-row container-grid-row-select":"container-grid-row",style:{top:le*et,gridTemplateColumns:ue},onClick:me,tabIndex:-1,"data-row":ae&&ae[V],children:It},`${et}`)}return y(Lt,{})})})})})({keyField:c,refView:g,isLoading:r||N,colLeft:F,columns:M,data:d,heightRow:m,rowsVisible:D,onScrollPos:j,onClick:W,rowFocus:Q,gridTemplate:_,onScrollHorizontal:ee}),[c,g,N,r,l,F,i,M,d,m,D,j,W,Q,_,ee]);return J.useImperativeHandle(t,()=>({getData:Z,getColumns:ne,getRowFocus:ve,getRowsVisible:ce,getRowsSelected:Me,getRowsSelectedKeys:ct,getOffset:Oe,setRowFocus:On}),[Z,ne,ve,ce,Me,ct,Oe,On,d]),_.length?Y("div",{className:"container-grid-edit",children:[Y("section",{ref:x,className:"container-grid",onScroll:V=>z(V.target&&V.target.offsetWidth+V.target.scrollLeft),children:[!u&&oe,X]}),Y("footer",{className:"allims-lib-grid-edit-footer",children:[y("div",{children:Y("span",{children:["Total: ",o||(d==null?void 0:d.length)]})}),y("div",{})]})]}):y("section",{className:"container-grid",onScroll:V=>{z(V.target&&V.target.offsetWidth+V.target.scrollLeft)},children:y(H1,{})})});function Eh(e){const s=e,{position:t="icon-top",id:n,field:r,text:i,icon:o,styleInLine:l}=s,a=xe(s,["position","id","field","text","icon","styleInLine"]);return Y("div",{style:{display:"flex",flexDirection:t==="icon-top"?"column":t==="icon-bottom"?"column-reverse":t==="icon-left"?"row":"row-reverse",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[y(tn,{htmlFor:n,id:`${n}-icon`,field:`${r}-icon`,styleInLine:{content:o,align:l==null?void 0:l.align,wrap:l==null?void 0:l.wrap},classInLine:o?"material-symbols-outlined ":"",children:o==null?void 0:o.value}),y(tn,{htmlFor:n,id:`${n}-text`,field:`${r}-text`,styleInLine:{content:i,align:l==null?void 0:l.align,wrap:l==null?void 0:l.wrap},children:i==null?void 0:i.value})]})}function dn(e){var F,z;const C=e,{id:t,field:n,title:r,type:i="text",validations:o,classInLine:l,styleInLine:a,frontRow:s,frontCol:u,backStyles:c,backConfigs:h,backData:f,read:w=!1,readOnly:v=!1,disabled:k=!1,isGrid:S=!1,onBlur:p,onClick:d,cellFocus:m}=C,g=xe(C,["id","field","title","type","validations","classInLine","styleInLine","frontRow","frontCol","backStyles","backConfigs","backData","read","readOnly","disabled","isGrid","onBlur","onClick","cellFocus"]),{register:x,getValues:b,getFieldState:_}=nn(),[E]=I.exports.useState(b(n)),M=_(n);let P=l||"";S&&(w?P+=" allims-lib-input-read ":v||(P+=" allims-lib-input-editable "),M!=null&&M.error&&(P+=" allims-lib-input-error "));let N={"data-frontCol":u,"data-frontRow":s};return f&&((F=Object.keys(f))==null||F.forEach(D=>{N=te(L({},N),{[`data-${D}`]:f[D]})})),y("input",te(L(L(L({id:t,type:i,className:`allims-lib-input ${P}`,style:ut(a),title:r||E,readOnly:w||v,disabled:k,"data-datatype":h==null?void 0:h.dataType},N),g),x(n,o)),{onBlur:p,onClick:d,"data-init-value":String(E||""),"data-error":((z=M==null?void 0:M.error)==null?void 0:z.message)||""}))}function ga(e){const r=e,{title:t}=r,n=xe(r,["title"]);return Y("div",{style:ut(n.styleInLine),className:"allims-lib-input-label",children:[y(dn,te(L({},n),{type:"text"})),y(tn,{htmlFor:n.id,id:`${n.id}-text`,field:`${n.field}-text`,children:t})]})}function ke(e){return y(di,te(L({},e),{children:y(Eh,L({},e))}))}function Q1(e){const{position:t,item:n,onClickItem:r,isActive:i}=e;return y(ke,{id:n.id,field:n.field,classInLine:`allims-lib-toolbar-button ${t==="horizontal"?"allims-lib-toolbar-horizontal-button":""} ${i?" allims-lib-toolbar-button-active ":""}`,icon:{value:n.icon,size:{value:2.5,unit:"rem"}},text:{value:n.acronym||n.title},tooltip:{value:n.title},onClick:()=>r(n)},n.id)}function Rr(e){const{id:t,items:n,position:r="vertical",handleItem:i,classInLine:o="allims-lib-toolbar-center",itemSelected:l}=e;return y(se,{id:t,classInLine:o,children:n&&n.map(a=>y(Q1,{position:r,item:a,onClickItem:i,isActive:(l==null?void 0:l.id)===a.id},a.id))})}function ho(e){const{position:t="vertical",items:n,itemsStart:r,itemsEnd:i,handleItem:o,defaultItem:l}=e,[a,s]=I.exports.useState({});function u(c){s(c),o(c)}return I.exports.useEffect(()=>(l&&s(l),()=>{s({})}),[l]),Y(se,t==="vertical"?{id:"toolbar-background",classInLine:"allims-lib-toolbar",children:[r&&r.length>0&&y(Rr,{items:r,classInLine:"allims-lib-toolbar-start",handleItem:u,id:"tool-start",field:"tool-start",position:t,itemSelected:a}),y(Rr,{items:n,classInLine:"allims-lib-toolbar-center",handleItem:u,id:"tool-center",field:"tool-center",position:t,itemSelected:a}),i&&i.length>0&&y(Rr,{items:i,classInLine:"allims-lib-toolbar-end",handleItem:u,id:"tool-end",field:"tool-end",position:t,itemSelected:a})]}:{id:"toolbar-background",classInLine:"allims-lib-toolbar allims-lib-toolbar-horizontal",children:[r&&r.length>0&&y(Rr,{items:r,classInLine:"allims-lib-toolbar-start allims-lib-toolbar-horizontal-area-left",handleItem:u,id:"tool-start",field:"tool-start",position:t,itemSelected:a}),y(Rr,{items:n,classInLine:"allims-lib-toolbar-center allims-lib-toolbar-horizontal-area-center",handleItem:u,id:"tool-center",field:"tool-center",position:t,itemSelected:a}),i&&i.length>0&&y(Rr,{items:i,classInLine:"allims-lib-toolbar-end allims-lib-toolbar-horizontal-area-right",handleItem:u,id:"tool-end",field:"tool-end",position:t,itemSelected:a})]})}function br(e){const{header:t,footer:n,children:r,id:i,field:o,classInLine:l,isOpen:a=!1,handleClose:s,styleInLine:u,customHeight:c}=e;function h(f){f.preventDefault(),f.stopPropagation()}return a?y("div",{className:"allims-lib-modal-backdrop",onClick:s,children:Y("dialog",{id:i,className:`allims-lib-modal ${l}`,open:a,style:u,children:[y("header",{onClick:h,children:t}),y("div",{onClick:h,style:{height:c},children:r}),y("footer",{onClick:h,children:n})]})}):y(Lt,{})}const G1=Array.from({length:24}).map((e,t)=>t),Y1=Array.from({length:60}).map((e,t)=>t);function q1(e){const{handleTime:t}=e,[n,r]=I.exports.useState({hour:0,min:0});function i(o){r(o),t(o)}return Y("div",{className:"allims-lib-time",children:[Y("div",{className:"allims-lib-time-header",children:[y("span",{children:"Hora"}),y("span",{children:"Minuto"})]}),Y("div",{className:"allims-lib-time-content",children:[y("ul",{className:"allims-lib-time-container",children:G1.map(o=>y("ol",{className:"allims-lib-time-item "+(n.hour===o?" allims-lib-time-item-select":""),onClick:()=>i(te(L({},n),{hour:o})),children:o},o))}),y("ul",{className:"allims-lib-time-container",children:Y1.map(o=>y("ol",{className:"allims-lib-time-item "+(n.min===o?" allims-lib-time-item-select":""),onClick:()=>i(te(L({},n),{min:o})),children:o},o))})]})]})}function Cr(e){const t=xe(e,[]);return y(dn,L({type:"hidden"},t))}function pu(e){const b=e,{id:t,field:n,title:r,classInLine:i,styleInLine:o,isGrid:l,read:a,backData:s}=b,u=xe(b,["id","field","title","classInLine","styleInLine","isGrid","read","backData"]),{setValue:c,getFieldState:h}=nn(),f=h(n),w=I.exports.useRef(null),[v,k]=I.exports.useState(()=>{const _=new Date;return _.setHours(0,0),_}),[S,p]=I.exports.useState(()=>{const _=new Date;return _.setHours(0,0),_}),[d,m]=I.exports.useState(!1);function g(_){m(_||!d)}Ec(w,()=>m(!1));let x=i||"";return l&&(x+=a?" allims-lib-input-read ":" allims-lib-input-editable ",f!=null&&f.error&&(x+=" allims-lib-input-error ")),Y("div",{id:`${t}-input-date-time`,className:`allims-lib-select ${x}`,style:ut(o),"data-state":s==null?void 0:s.state,children:[Y("div",{className:l?" allims-lib-input-modal-fast  ":" allims-lib-select-input ",children:[Y("div",{style:ut(o),className:l?"  ":"allims-lib-input-label",children:[y(dn,L({field:`${n}Content`,id:`${t}-content`,readOnly:!0,backData:s},u)),r&&y(tn,{htmlFor:t,id:t,field:`${n}-text`,children:r})]}),y(Cr,{id:`${t}-input`,field:n}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>g(),children:"calendar_month"})]}),y(br,{field:"",id:"",isOpen:d,handleClose:g,children:Y("div",{className:"allims-lib-inputlist-items",children:[Y("div",{className:"allims-lib-inputlist-calendar-time",children:[y(kh,{onChangeDate:function(_){const E=new Date(_);E.setHours(0,0),k(E)},defaultDate:new Date(v||"")}),y(q1,{handleTime:_=>{const E=new Date(S);E.setHours(_.hour,_.min),p(E)},id:t,field:t})]}),Y("footer",{children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:()=>(k(""),void g(!1))}),y(ke,{id:"ok",field:"ok",type:"submit",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:()=>{const _=new Date(Pn(v),Dn(v),mo(v),du(S),fu(S));var E;E={value:wr(_,"yyyy-MM-dd HH:mm:ss"),content:wr(_,"dd/MM/yyyy HH:mm")},c(n,E.value),c(`${n}Content`,E.content),g()}})]})]})})]})}var cs,X1=new Uint8Array(16);function K1(){if(!cs&&!(cs=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return cs(X1)}var J1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Z1(e){return typeof e=="string"&&J1.test(e)}for(var Ye=[],ds=0;ds<256;++ds)Ye.push((ds+256).toString(16).substr(1));function Ch(e,t,n){var r=(e=e||{}).random||(e.rng||K1)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=(Ye[o[l+0]]+Ye[o[l+1]]+Ye[o[l+2]]+Ye[o[l+3]]+"-"+Ye[o[l+4]]+Ye[o[l+5]]+"-"+Ye[o[l+6]]+Ye[o[l+7]]+"-"+Ye[o[l+8]]+Ye[o[l+9]]+"-"+Ye[o[l+10]]+Ye[o[l+11]]+Ye[o[l+12]]+Ye[o[l+13]]+Ye[o[l+14]]+Ye[o[l+15]]).toLowerCase();if(!Z1(a))throw TypeError("Stringified UUID is invalid");return a}(r)}const Ii=ha.create(),ew={"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Accept:"application/json"};async function lt(e){var n,r,i,o,l,a;const{url:t}=e;Ii.defaults.timeout=3e4,window.origin.includes("localhost")?Ii.defaults.baseURL=_o:Ii.defaults.baseURL=window.origin,Ii.defaults.headers.common.Authorization=((n=window.sessionStorage.getItem("@allims_token"))==null?void 0:n.replaceAll('"',""))||"";try{const s=await Ii.get(t,{headers:ew});return{success:!0,data:s.data.data,message:((r=s.data)==null?void 0:r.warn)||null}}catch(s){return s!=null&&s.response?{success:!1,data:null,message:((o=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:o.error)||((a=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:a.warn)||"Erro, verifique com o suporte!"}:(console.error("Error",s),{success:!1,data:null,message:"Lamentamos, houve um erro, verifique com o suporte!"})}}const tw=e=>{const u=e,{id:t,field:n,read:r,isOpen:i,toggleOpen:o,isGrid:l}=u,a=xe(u,["id","field","read","isOpen","toggleOpen","isGrid"]);let s="";return l?s+="allims-lib-input-modal-fast-container allims-lib-grid-edit-container  allims-lib-grid-edit-cell  ":r&&(s+=" allims-lib-select-read-input  "),Y("div",{className:`allims-lib-select-input ${s}`,style:{height:l?"25px":""},children:[l?y(dn,L({id:t,field:`${n}Content`,readOnly:!0,read:r,styleInLine:{padding:{left:{value:5,unit:"px"}}},isGrid:l},a)):y(ga,L({id:`${t}-content`,field:`${n}Content`,readOnly:!0,read:r},a)),y(Cr,{id:t,field:n}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>o(),children:i?"expand_less":"expand_more"})]})},nw=e=>{const{idData:t,value:n,content:r,handleSelectItem:i}=e;return y("button",{"data-iddata":t,"data-value":n,className:"allims-lib-selectitem",onClick:()=>i(e),children:r||n})};function Th(e){var m;const d=e,{id:t,field:n,classInLine:r,styleInLine:i,handleSaveCell:o,getItems:l,isLoading:a,items:s}=d,u=xe(d,["id","field","classInLine","styleInLine","handleSaveCell","getItems","isLoading","items"]),c=I.exports.useRef(null),{setValue:h,getFieldState:f}=nn(),w=f(n),[v,k]=I.exports.useState(!1);function S(){k(!v)}async function p(g){h(n,g.value),h(`${n}Content`,g.content),o(te(L(L({},g),u),{id:t})),S()}return Ec(c,()=>k(!1)),I.exports.useEffect(()=>{v&&l&&l()},[v]),Y("div",{id:t,ref:c,className:`allims-lib-select   ${r} ${(m=w==null?void 0:w.error)!=null&&m.message?"allims-lib-input-error ":""}`,style:ut(i),children:[y(tw,L({field:n,id:t,handleClean:function(){h(n,"")},isOpen:v,toggleOpen:S},u)),v&&y("div",{className:"allims-lib-select-items ",children:y("div",{className:"allims-lib-select-items-scroll",children:a?y(cn,{}):s&&s.map(g=>y(nw,te(L({},g),{handleSelectItem:p}),g.idData))})})]})}function Lh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Lh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Bn(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Lh(e))&&(r&&(r+=" "),r+=t);return r}function Wl(e){return typeof e=="number"&&!isNaN(e)}function Di(e){return typeof e=="boolean"}function xr(e){return typeof e=="string"}function wt(e){return typeof e=="function"}function ul(e){return xr(e)||wt(e)?e:null}function fs(e){return e===0||e}function ps(e){return I.exports.isValidElement(e)||xr(e)||wt(e)||Wl(e)}const Oh={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},gn={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function xf(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const $t={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}};function rw(e){const[,t]=I.exports.useReducer(w=>w+1,0),[n,r]=I.exports.useState([]),i=I.exports.useRef(null),o=I.exports.useRef(new Map).current,l=w=>n.indexOf(w)!==-1,a=I.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:w=>o.get(w)}).current;function s(w){let{containerId:v}=w;const{limit:k}=a.props;!k||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(w){r(v=>fs(w)?v.filter(k=>k!==w):[])}function c(){const{toastContent:w,toastProps:v,staleId:k}=a.queue.shift();f(w,v,k)}function h(w,v){let C=v,{delay:k,staleId:S}=C,p=xe(C,["delay","staleId"]);if(!ps(w)||function(F){return!i.current||a.props.enableMultiContainer&&F.containerId!==a.props.containerId||o.has(F.toastId)&&F.updateId==null}(p))return;const{toastId:d,updateId:m,data:g}=p,{props:x}=a,b=()=>u(d),_=m==null;_&&a.count++;const E={toastId:d,updateId:m,containerId:p.containerId,isLoading:p.isLoading,theme:p.theme||x.theme,icon:p.icon!=null?p.icon:x.icon,isIn:!1,key:p.key||a.toastKey++,type:p.type,closeToast:b,closeButton:p.closeButton,rtl:x.rtl,position:p.position||x.position,transition:p.transition||x.transition,className:ul(p.className||x.toastClassName),bodyClassName:ul(p.bodyClassName||x.bodyClassName),style:p.style||x.toastStyle,bodyStyle:p.bodyStyle||x.bodyStyle,onClick:p.onClick||x.onClick,pauseOnHover:Di(p.pauseOnHover)?p.pauseOnHover:x.pauseOnHover,pauseOnFocusLoss:Di(p.pauseOnFocusLoss)?p.pauseOnFocusLoss:x.pauseOnFocusLoss,draggable:Di(p.draggable)?p.draggable:x.draggable,draggablePercent:p.draggablePercent||x.draggablePercent,draggableDirection:p.draggableDirection||x.draggableDirection,closeOnClick:Di(p.closeOnClick)?p.closeOnClick:x.closeOnClick,progressClassName:ul(p.progressClassName||x.progressClassName),progressStyle:p.progressStyle||x.progressStyle,autoClose:!p.isLoading&&(M=p.autoClose,P=x.autoClose,M===!1||Wl(M)&&M>0?M:P),hideProgressBar:Di(p.hideProgressBar)?p.hideProgressBar:x.hideProgressBar,progress:p.progress,role:p.role||x.role,deleteToast(){const F=xf(o.get(d),"removed");o.delete(d),$t.emit(4,F);const z=a.queue.length;if(a.count=fs(d)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),z>0){const D=fs(d)?1:a.props.limit;if(z===1||D===1)a.displayedToast++,c();else{const B=D>z?z:D;a.displayedToast=B;for(let Q=0;Q<B;Q++)c()}}else t()}};var M,P;wt(p.onOpen)&&(E.onOpen=p.onOpen),wt(p.onClose)&&(E.onClose=p.onClose),E.closeButton=x.closeButton,p.closeButton===!1||ps(p.closeButton)?E.closeButton=p.closeButton:p.closeButton===!0&&(E.closeButton=!ps(x.closeButton)||x.closeButton);let N=w;I.exports.isValidElement(w)&&!xr(w.type)?N=I.exports.cloneElement(w,{closeToast:b,toastProps:E,data:g}):wt(w)&&(N=w({closeToast:b,toastProps:E,data:g})),x.limit&&x.limit>0&&a.count>x.limit&&_?a.queue.push({toastContent:N,toastProps:E,staleId:S}):Wl(k)?setTimeout(()=>{f(N,E,S)},k):f(N,E,S)}function f(w,v,k){const{toastId:S}=v;k&&o.delete(k);const p={content:w,props:v};o.set(S,p),r(d=>[...d,S].filter(m=>m!==k)),$t.emit(4,xf(p,p.props.updateId==null?"added":"updated"))}return I.exports.useEffect(()=>(a.containerId=e.containerId,$t.cancelEmit(3).on(0,h).on(1,w=>i.current&&u(w)).on(5,s).emit(2,a),()=>$t.emit(3,a)),[]),I.exports.useEffect(()=>{a.props=e,a.isToastActive=l,a.displayedToast=n.length}),{getToastToRender:function(w){const v=new Map,k=Array.from(o.values());return e.newestOnTop&&k.reverse(),k.forEach(S=>{const{position:p}=S.props;v.has(p)||v.set(p,[]),v.get(p).push(S)}),Array.from(v,S=>w(S[0],S[1]))},containerRef:i,isToastActive:l}}function kf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _f(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function iw(e){const[t,n]=I.exports.useState(!1),[r,i]=I.exports.useState(!1),o=I.exports.useRef(null),l=I.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=I.exports.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:f}=e;function w(g){if(e.draggable){l.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),document.addEventListener("touchmove",p),document.addEventListener("touchend",d);const x=o.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=x.getBoundingClientRect(),x.style.transition="",l.x=kf(g.nativeEvent),l.y=_f(g.nativeEvent),e.draggableDirection==="x"?(l.start=l.x,l.removalDistance=x.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=x.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(){if(l.boundingRect){const{top:g,bottom:x,left:b,right:_}=l.boundingRect;e.pauseOnHover&&l.x>=b&&l.x<=_&&l.y>=g&&l.y<=x?S():k()}}function k(){n(!0)}function S(){n(!1)}function p(g){const x=o.current;l.canDrag&&x&&(l.didMove=!0,t&&S(),l.x=kf(g),l.y=_f(g),l.delta=e.draggableDirection==="x"?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),x.style.transform="translate"+e.draggableDirection+"("+l.delta+"px)",x.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function d(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",d);const g=o.current;if(l.canDrag&&l.didMove&&g){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return i(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform="translate"+e.draggableDirection+"(0)",g.style.opacity="1"}}I.exports.useEffect(()=>{a.current=e}),I.exports.useEffect(()=>(o.current&&o.current.addEventListener("d",k,{once:!0}),wt(e.onOpen)&&e.onOpen(I.exports.isValidElement(e.children)&&e.children.props),()=>{const g=a.current;wt(g.onClose)&&g.onClose(I.exports.isValidElement(g.children)&&g.children.props)}),[]),I.exports.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",k),window.addEventListener("blur",S)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",k),window.removeEventListener("blur",S))}),[e.pauseOnFocusLoss]);const m={onMouseDown:w,onTouchStart:w,onMouseUp:v,onTouchEnd:v};return s&&u&&(m.onMouseEnter=S,m.onMouseLeave=k),f&&(m.onClick=g=>{h&&h(g),l.canCloseOnClick&&c()}),{playToast:k,pauseToast:S,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:m}}function Nh(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return J.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},J.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},J.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function zh(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:o,className:l,style:a,controlledProgress:s,progress:u,rtl:c,isIn:h,theme:f}=e;const w=te(L({},a),{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:o?0:1});s&&(w.transform="scaleX("+u+")");const v=Bn("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+i,{"Toastify__progress-bar--rtl":c}),k=wt(l)?l({rtl:c,type:i,defaultClassName:v}):Bn(v,l);return J.createElement("div",{role:"progressbar","aria-hidden":o?"true":"false","aria-label":"notification timer",className:k,style:w,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{h&&r()}})}zh.defaultProps={type:gn.DEFAULT,hide:!1};const Qo=e=>{let i=e,{theme:t,type:n}=i,r=xe(i,["theme","type"]);return J.createElement("svg",L({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")"},r))},Sf={info:function(e){return J.createElement(Qo,L({},e),J.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return J.createElement(Qo,L({},e),J.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return J.createElement(Qo,L({},e),J.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return J.createElement(Qo,L({},e),J.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return J.createElement("div",{className:"Toastify__spinner"})}},ow=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=iw(e),{closeButton:o,children:l,autoClose:a,onClick:s,type:u,hideProgressBar:c,closeToast:h,transition:f,position:w,className:v,style:k,bodyClassName:S,bodyStyle:p,progressClassName:d,progressStyle:m,updateId:g,role:x,progress:b,rtl:_,toastId:E,deleteToast:M,isIn:P,isLoading:N,icon:C,theme:F}=e,z=Bn("Toastify__toast","Toastify__toast-theme--"+F,"Toastify__toast--"+u,{"Toastify__toast--rtl":_}),D=wt(v)?v({rtl:_,position:w,type:u,defaultClassName:z}):Bn(z,v),B=!!b,Q=Sf[u],T={theme:F,type:u};let A=Q&&Q(T);return C===!1?A=void 0:wt(C)?A=C(T):J.isValidElement(C)?A=J.cloneElement(C,T):xr(C)?A=C:N&&(A=Sf.spinner()),J.createElement(f,{isIn:P,done:M,position:w,preventExitTransition:n,nodeRef:r},J.createElement("div",te(L({id:E,onClick:s,className:D},i),{style:k,ref:r}),J.createElement("div",te(L({},P&&{role:x}),{className:wt(S)?S({type:u}):Bn("Toastify__toast-body",S),style:p}),A&&J.createElement("div",{className:Bn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},A),J.createElement("div",null,l)),function(O){if(!O)return;const Z={closeToast:h,type:u,theme:F};return wt(O)?O(Z):J.isValidElement(O)?J.cloneElement(O,Z):void 0}(o),(a||B)&&J.createElement(zh,te(L({},g&&!B?{key:"pb-"+g}:{}),{rtl:_,theme:F,delay:a,isRunning:t,isIn:P,closeToast:h,hide:c,type:u,style:m,className:d,controlledProgress:B,progress:b}))))},lw=function(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(l){let{children:a,position:s,preventExitTransition:u,done:c,nodeRef:h,isIn:f}=l;const w=r?t+"--"+s:t,v=r?n+"--"+s:n,k=I.exports.useRef(),S=I.exports.useRef(0);function p(m){if(m.target!==h.current)return;const g=h.current;g.dispatchEvent(new Event("d")),g.removeEventListener("animationend",p),g.removeEventListener("animationcancel",p),S.current===0&&m.type!=="animationcancel"&&(g.className=k.current)}function d(){const m=h.current;m.removeEventListener("animationend",d),i?function(g,x,b){b===void 0&&(b=300);const{scrollHeight:_,style:E}=g;requestAnimationFrame(()=>{E.minHeight="initial",E.height=_+"px",E.transition="all "+b+"ms",requestAnimationFrame(()=>{E.height="0",E.padding="0",E.margin="0",setTimeout(x,b)})})}(m,c,o):c()}return I.exports.useLayoutEffect(()=>{(function(){const m=h.current;k.current=m.className,m.className+=" "+w,m.addEventListener("animationend",p),m.addEventListener("animationcancel",p)})()},[]),I.exports.useEffect(()=>{f||(u?d():function(){S.current=1;const m=h.current;m.className+=" "+v,m.addEventListener("animationend",d)}())},[f]),J.createElement(J.Fragment,null,a)}}({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),mu=I.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=rw(e),{className:o,style:l,rtl:a,containerId:s}=e;function u(c){const h=Bn("Toastify__toast-container","Toastify__toast-container--"+c,{"Toastify__toast-container--rtl":a});return wt(o)?o({position:c,rtl:a,defaultClassName:h}):Bn(h,ul(o))}return I.exports.useEffect(()=>{t&&(t.current=r.current)},[]),J.createElement("div",{ref:r,className:"Toastify",id:s},n((c,h)=>{const f=h.length?L({},l):te(L({},l),{pointerEvents:"none"});return J.createElement("div",{className:u(c),style:f,key:"container-"+c},h.map((w,v)=>{let{content:k,props:S}=w;return J.createElement(ow,te(L({},S),{isIn:i(S.toastId),style:{"--nth":v+1,"--len":h.length},key:"toast-"+S.key,closeButton:S.closeButton===!0?Nh:S.closeButton}),k)}))}))});mu.displayName="ToastContainer",mu.defaultProps={position:Oh.TOP_RIGHT,transition:lw,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Nh,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ms,Ir=new Map,hu=[];function Rh(){return Math.random().toString(36).substring(2,9)}function aw(e){return e&&(xr(e.toastId)||Wl(e.toastId))?e.toastId:Rh()}function qi(e,t){return Ir.size>0?$t.emit(0,e,t):hu.push({content:e,options:t}),t.toastId}function Hl(e,t){return te(L({},t),{type:t&&t.type||e,toastId:aw(t)})}function Go(e){return(t,n)=>qi(t,Hl(e,n))}function ye(e,t){return qi(e,Hl(gn.DEFAULT,t))}ye.loading=(e,t)=>qi(e,Hl(gn.DEFAULT,L({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t))),ye.promise=function(e,t,n){let r,{pending:i,error:o,success:l}=t;i&&(r=xr(i)?ye.loading(i,n):ye.loading(i.render,L(L({},n),i)));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},s=(c,h,f)=>{if(h==null)return void ye.dismiss(r);const w=te(L(L({type:c},a),n),{data:f}),v=xr(h)?{render:h}:h;return r?ye.update(r,L(L({},w),v)):ye(v.render,L(L({},w),v)),f},u=wt(e)?e():e;return u.then(c=>s("success",l,c)).catch(c=>s("error",o,c)),u},ye.success=Go(gn.SUCCESS),ye.info=Go(gn.INFO),ye.error=Go(gn.ERROR),ye.warning=Go(gn.WARNING),ye.warn=ye.warning,ye.dark=(e,t)=>qi(e,Hl(gn.DEFAULT,L({theme:"dark"},t))),ye.dismiss=e=>$t.emit(1,e),ye.clearWaitingQueue=function(e){return e===void 0&&(e={}),$t.emit(5,e)},ye.isActive=e=>{let t=!1;return Ir.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},ye.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const l=Ir.get(o||ms);return l?l.getToast(r):null}(e,t);if(n){const{props:r,content:i}=n,o=te(L(L({},r),t),{toastId:t.toastId||e,updateId:Rh()});o.toastId!==e&&(o.staleId=e);const l=o.render||i;delete o.render,qi(l,o)}},0)},ye.done=e=>{ye.update(e,{progress:1})},ye.onChange=e=>($t.on(4,e),()=>{$t.off(4,e)}),ye.POSITION=Oh,ye.TYPE=gn,$t.on(2,e=>{ms=e.containerId||e,Ir.set(ms,e),hu.forEach(t=>{$t.emit(0,t.content,t.options)}),hu=[]}).on(3,e=>{Ir.delete(e.containerId||e),Ir.size===0&&$t.off(0).off(1).off(5)});yi(`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;
  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
  position: fixed;
  padding: 4px;
  width: var(--toastify-toast-width);
  box-sizing: border-box;
  color: #fff;
}
.Toastify__toast-container--top-left {
  top: 1em;
  left: 1em;
}
.Toastify__toast-container--top-center {
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
}
.Toastify__toast-container--top-right {
  top: 1em;
  right: 1em;
}
.Toastify__toast-container--bottom-left {
  bottom: 1em;
  left: 1em;
}
.Toastify__toast-container--bottom-center {
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
}
.Toastify__toast-container--bottom-right {
  bottom: 1em;
  right: 1em;
}

@media only screen and (max-width : 480px) {
  .Toastify__toast-container {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0;
  }
  .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
    top: 0;
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {
    bottom: 0;
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: 0;
    left: initial;
  }
}
.Toastify__toast {
  position: relative;
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  max-height: var(--toastify-toast-max-height);
  overflow: hidden;
  font-family: var(--toastify-font-family);
  cursor: pointer;
  direction: ltr;
}
.Toastify__toast--rtl {
  direction: rtl;
}
.Toastify__toast-body {
  margin: auto 0;
  -ms-flex: 1 1 auto;
      flex: 1 1 auto;
  padding: 6px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
}
.Toastify__toast-body > div:last-child {
  -ms-flex: 1;
      flex: 1;
}
.Toastify__toast-icon {
  -webkit-margin-end: 10px;
          margin-inline-end: 10px;
  width: 20px;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  display: -ms-flexbox;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.7s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

@media only screen and (max-width : 480px) {
  .Toastify__toast {
    margin-bottom: 0;
    border-radius: 0;
  }
}
.f {
  --y: calc(var(--len) - var(--nth));
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  transform: translate3d(0, calc(var(--y) * -40%), 0) scale(calc(1 - 0.05 * var(--y)));
  transition: all 0.3s;
  min-height: 80px;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}
.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}
.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}
.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}
.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}
.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}
.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}
.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}
.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}
.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}
.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  -ms-flex-item-align: start;
      align-self: flex-start;
}
.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}
.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}
.Toastify__close-button:hover, .Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: var(--toastify-z-index);
  opacity: 0.7;
  transform-origin: left;
}
.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}
.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}
.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}
@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes Toastify__bounceInLeft {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}
@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes Toastify__bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }
  40%, 45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes Toastify__bounceInDown {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}
@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0);
  }
  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}
.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}
.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}
.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}
.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}
.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}
.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}
.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}
@keyframes Toastify__flipOut {
  from {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, 0, 0);
  }
}
@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, 0, 0);
  }
}
@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}
@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}
.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}
.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}
.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}
.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
}
.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
}
.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
}
.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`);const fi={autoClose:1e3,position:"top-right",pauseOnFocusLoss:!0,theme:"light",closeButton:!0},Ef={},Cf={autoClose:7e3},sw={autoClose:4e3},uw={autoClose:4e3},cw=()=>y(mu,{}),er=e=>ye.loading(e||"Validando dados..."),_e=(e,t)=>{t?ye.update(t,L(L({render:e||"Erro",type:"error",isLoading:!1},fi),Cf)):ye.error(e||"Erro",L(L({},fi),Cf))},dw=(e,t)=>{t?ye.update(t,L(L({render:e||"Success",type:"success",isLoading:!1},fi),Ef)):ye.success(e||"Success",L(L({},fi),Ef))},de=(e,t)=>{t?ye.update(t,L(L({render:e,type:"warning",isLoading:!1},fi),uw)):ye.warning(e,L(L({},fi),sw))},kn=e=>{ye.update(e,{render:y(Lt,{}),type:"success",isLoading:!1,position:"top-right",autoClose:1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};function fw(e){const x=e,{id:t,field:n,title:r,classInLine:i,styleInLine:o,read:l,state:a,isGrid:s,backData:u,backStyle:c,backConfigs:h,url:f,handleSaveCell:w,dependencies:v}=x,k=xe(x,["id","field","title","classInLine","styleInLine","read","state","isGrid","backData","backStyle","backConfigs","url","handleSaveCell","dependencies"]),{getValues:S}=nn(),[p,d]=I.exports.useState([]),[m,g]=I.exports.useState(!1);return y(Th,L({id:t,field:n,styleInLine:o,items:p,title:r,getItems:async function(){var E;g(!0);let b=f;s?b+=Xn(u):v==null||v.forEach(M=>{b+=`&${M}=${S(M)}`});const _=await lt({url:b});if(_!=null&&_.success){_!=null&&_.message&&de(_.message);const M=((E=_==null?void 0:_.data)==null?void 0:E.map(P=>({idData:Ch(),checked:!1,value:P.id,content:P.name})))||[];d(M)}else _e(_==null?void 0:_.message);g(!1)},isLoading:m,isGrid:s,backConfigs:h,backData:u,handleSaveCell:w},k))}var So={exports:{}};So.exports=function(e){return function(t){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(i,o,l){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:l})},r.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(l,a,function(s){return i[s]}.bind(null,a));return l},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=9)}([function(t,n){t.exports=e},function(t,n,r){t.exports=r(13)()},function(t,n,r){r.d(n,"a",function(){return l});var i=r(0);r(11);const o=a=>(a%2==0?2:3)+"px",l=a=>{const{dragging:s,pixelSize:u,color:c="silver",hoverColor:h="gray",dragColor:f="black"}=a,w={"--default-splitter-line-margin":(v=u,Math.max(0,Math.floor(v/2)-1)+"px"),"--default-splitter-line-size":o(u),"--default-splitter-line-color":s?f:c,"--default-splitter-line-hover-color":s?f:h};var v;return i.createElement("div",{className:"default-splitter",style:w},i.createElement("div",{className:"line"}))}},function(t,n,r){var i,o=function(){return i===void 0&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},l=function(){var d={};return function(m){if(d[m]===void 0){var g=document.querySelector(m);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch{g=null}d[m]=g}return d[m]}}(),a=[];function s(d){for(var m=-1,g=0;g<a.length;g++)if(a[g].identifier===d){m=g;break}return m}function u(d,m){for(var g={},x=[],b=0;b<d.length;b++){var _=d[b],E=m.base?_[0]+m.base:_[0],M=g[E]||0,P="".concat(E," ").concat(M);g[E]=M+1;var N=s(P),C={css:_[1],media:_[2],sourceMap:_[3]};N!==-1?(a[N].references++,a[N].updater(C)):a.push({identifier:P,updater:p(C,m),references:1}),x.push(P)}return x}function c(d){var m=document.createElement("style"),g=d.attributes||{};if(g.nonce===void 0){var x=r.nc;x&&(g.nonce=x)}if(Object.keys(g).forEach(function(_){m.setAttribute(_,g[_])}),typeof d.insert=="function")d.insert(m);else{var b=l(d.insert||"head");if(!b)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");b.appendChild(m)}return m}var h,f=(h=[],function(d,m){return h[d]=m,h.filter(Boolean).join(`
`)});function w(d,m,g,x){var b=g?"":x.media?"@media ".concat(x.media," {").concat(x.css,"}"):x.css;if(d.styleSheet)d.styleSheet.cssText=f(m,b);else{var _=document.createTextNode(b),E=d.childNodes;E[m]&&d.removeChild(E[m]),E.length?d.insertBefore(_,E[m]):d.appendChild(_)}}function v(d,m,g){var x=g.css,b=g.media,_=g.sourceMap;if(b?d.setAttribute("media",b):d.removeAttribute("media"),_&&typeof btoa!="undefined"&&(x+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),d.styleSheet)d.styleSheet.cssText=x;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(x))}}var k=null,S=0;function p(d,m){var g,x,b;if(m.singleton){var _=S++;g=k||(k=c(m)),x=w.bind(null,g,_,!1),b=w.bind(null,g,_,!0)}else g=c(m),x=v.bind(null,g,m),b=function(){(function(E){if(E.parentNode===null)return!1;E.parentNode.removeChild(E)})(g)};return x(d),function(E){if(E){if(E.css===d.css&&E.media===d.media&&E.sourceMap===d.sourceMap)return;x(d=E)}else b()}}t.exports=function(d,m){(m=m||{}).singleton||typeof m.singleton=="boolean"||(m.singleton=o());var g=u(d=d||[],m);return function(x){if(x=x||[],Object.prototype.toString.call(x)==="[object Array]"){for(var b=0;b<g.length;b++){var _=s(g[b]);a[_].references--}for(var E=u(x,m),M=0;M<g.length;M++){var P=s(g[M]);a[P].references===0&&(a[P].updater(),a.splice(P,1))}g=E}}}},function(t,n,r){t.exports=function(i){var o=[];return o.toString=function(){return this.map(function(l){var a=function(s,u){var c,h,f,w=s[1]||"",v=s[3];if(!v)return w;if(u&&typeof btoa=="function"){var k=(c=v,h=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(h),"/*# ".concat(f," */")),S=v.sources.map(function(p){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(p," */")});return[w].concat(S).concat([k]).join(`
`)}return[w].join(`
`)}(l,i);return l[2]?"@media ".concat(l[2]," {").concat(a,"}"):a}).join("")},o.i=function(l,a,s){typeof l=="string"&&(l=[[null,l,""]]);var u={};if(s)for(var c=0;c<this.length;c++){var h=this[c][0];h!=null&&(u[h]=!0)}for(var f=0;f<l.length;f++){var w=[].concat(l[f]);s&&u[w[0]]||(a&&(w[2]?w[2]="".concat(a," and ").concat(w[2]):w[2]=a),o.push(w))}},o}},function(t,n){},function(t,n,r){r.d(n,"a",function(){return g});var i=r(0);function o(){return(o=Object.assign||function(x){for(var b=1;b<arguments.length;b++){var _=arguments[b];for(var E in _)Object.prototype.hasOwnProperty.call(_,E)&&(x[E]=_[E])}return x}).apply(this,arguments)}var l=r(7),a=r(1),s=r.n(a),u=r(8),c=["client","offset","scroll","bounds","margin"];function h(x){var b=[];return c.forEach(function(_){x[_]&&b.push(_)}),b}function f(x,b){var _={};if(b.indexOf("client")>-1&&(_.client={top:x.clientTop,left:x.clientLeft,width:x.clientWidth,height:x.clientHeight}),b.indexOf("offset")>-1&&(_.offset={top:x.offsetTop,left:x.offsetLeft,width:x.offsetWidth,height:x.offsetHeight}),b.indexOf("scroll")>-1&&(_.scroll={top:x.scrollTop,left:x.scrollLeft,width:x.scrollWidth,height:x.scrollHeight}),b.indexOf("bounds")>-1){var E=x.getBoundingClientRect();_.bounds={top:E.top,right:E.right,bottom:E.bottom,left:E.left,width:E.width,height:E.height}}if(b.indexOf("margin")>-1){var M=getComputedStyle(x);_.margin={top:M?parseInt(M.marginTop):0,right:M?parseInt(M.marginRight):0,bottom:M?parseInt(M.marginBottom):0,left:M?parseInt(M.marginLeft):0}}return _}function w(x){return x&&x.ownerDocument&&x.ownerDocument.defaultView||window}var v,k,S,p=(v=function(x){var b=x.measure,_=x.measureRef,E=x.contentRect;return(0,x.children)({measure:b,measureRef:_,contentRect:E})},S=k=function(x){var b,_;function E(){for(var P,N=arguments.length,C=new Array(N),F=0;F<N;F++)C[F]=arguments[F];return(P=x.call.apply(x,[this].concat(C))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},P._animationFrameID=null,P._resizeObserver=null,P._node=null,P._window=null,P.measure=function(z){var D=f(P._node,h(P.props));z&&(D.entry=z[0].contentRect),P._animationFrameID=P._window.requestAnimationFrame(function(){P._resizeObserver!==null&&(P.setState({contentRect:D}),typeof P.props.onResize=="function"&&P.props.onResize(D))})},P._handleRef=function(z){P._resizeObserver!==null&&P._node!==null&&P._resizeObserver.unobserve(P._node),P._node=z,P._window=w(P._node);var D=P.props.innerRef;D&&(typeof D=="function"?D(P._node):D.current=P._node),P._resizeObserver!==null&&P._node!==null&&P._resizeObserver.observe(P._node)},P}_=x,(b=E).prototype=Object.create(_.prototype),b.prototype.constructor=b,l(b,_);var M=E.prototype;return M.componentDidMount=function(){this._resizeObserver=this._window!==null&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new u.a(this.measure),this._node!==null&&(this._resizeObserver.observe(this._node),typeof this.props.onResize=="function"&&this.props.onResize(f(this._node,h(this.props))))},M.componentWillUnmount=function(){this._window!==null&&this._window.cancelAnimationFrame(this._animationFrameID),this._resizeObserver!==null&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},M.render=function(){var P=this.props,N=(P.innerRef,P.onResize,function(C,F){if(C==null)return{};var z,D,B={},Q=Object.keys(C);for(D=0;D<Q.length;D++)z=Q[D],F.indexOf(z)>=0||(B[z]=C[z]);return B}(P,["innerRef","onResize"]));return Object(i.createElement)(v,o({},N,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},E}(i.Component),k.propTypes={client:s.a.bool,offset:s.a.bool,scroll:s.a.bool,bounds:s.a.bool,margin:s.a.bool,innerRef:s.a.oneOfType([s.a.object,s.a.func]),onResize:s.a.func},S);p.displayName="Measure",p.propTypes.children=s.a.func;var d=p,m=r(2);r(16);const g=x=>{const{horizontal:b=!1,initialPrimarySize:_="50%",minPrimarySize:E="0px",minSecondarySize:M="0px",splitterSize:P="7px",renderSplitter:N,resetOnDoubleClick:C=!1,defaultSplitterColors:F={color:"silver",hover:"gray",drag:"black"},onSplitChanged:z,onMeasuredSizesChanged:D}=x,[B,Q]=i.useState({height:0,width:0}),[T,A]=i.useState({height:0,width:0}),[O,Z]=i.useState({height:0,width:0}),ne=i.useMemo(()=>b?B.height:B.width,[b,B]),ce=i.useMemo(()=>b?T.height:T.width,[b,T]),ve=i.useMemo(()=>b?O.height:O.width,[b,O]),[Oe,Me]=i.useState(void 0),[ct,On]=i.useState(0),[ir,R]=i.useState(0),[j,W]=i.useState(!1);i.useEffect(()=>{z&&z(Oe!==void 0?Oe+"%":_)},[Oe,_]),i.useEffect(()=>{D&&D({primary:ce,splitter:ve,secondary:ne-(ce+ve)})},[b,ne,ce,ve]);const ee=ue=>{ue.bounds&&A({height:ue.bounds.height,width:ue.bounds.width})},oe=ue=>{ue.bounds&&Z({height:ue.bounds.height,width:ue.bounds.width})},X=ue=>{ue.currentTarget.setPointerCapture(ue.pointerId),On(b?ue.clientY:ue.clientX),R(ce),W(!0)},V=ue=>{if(ue.currentTarget.hasPointerCapture(ue.pointerId)){const We=b?ue.clientY:ue.clientX,Rt=ir+(We-ct),ae=Math.max(0,Math.min(Rt,ne));Me(ae/ne*100)}},$=ue=>{ue.currentTarget.releasePointerCapture(ue.pointerId),W(!1)},H=()=>{C&&Me(void 0)},G=i.Children.toArray(x.children),U=G.length>0?G[0]:i.createElement("div",null),K=G.length>1?G[1]:i.createElement("div",null),le={primary:Oe!==void 0?Oe+"%":_,minPrimary:E!=null?E:"0px",minSecondary:M!=null?M:"0px"},fe={pixelSize:ve,horizontal:b,dragging:j},ge=N!=null?N:()=>i.createElement(m.a,Object.assign({},fe,{color:j?F.drag:F.color,hoverColor:j?F.drag:F.hover})),me=b?"split-container horizontal":"split-container vertical",$e={"--react-split-min-primary":le.minPrimary,"--react-split-min-secondary":le.minSecondary,"--react-split-primary":le.primary,"--react-split-splitter":P};return i.createElement(d,{bounds:!0,onResize:ue=>{ue.bounds&&Q({height:ue.bounds.height,width:ue.bounds.width})}},({measureRef:ue})=>i.createElement("div",{className:"react-split",ref:ue},i.createElement("div",{className:me,style:$e},i.createElement("div",{className:"primary"},i.createElement(d,{bounds:!0,onResize:ee},({measureRef:We})=>i.createElement("div",{className:"full-content",ref:We},U))),i.createElement("div",{className:"splitter",tabIndex:-1,onPointerDown:X,onPointerUp:$,onPointerMove:V,onDoubleClick:H},i.createElement(d,{bounds:!0,onResize:oe},({measureRef:We})=>i.createElement("div",{className:"full-content",ref:We},ge(fe)))),i.createElement("div",{className:"secondary"},i.createElement("div",{className:"full-content"},K)))))}},function(t,n){function r(i,o){return t.exports=r=Object.setPrototypeOf||function(l,a){return l.__proto__=a,l},t.exports.default=t.exports,t.exports.__esModule=!0,r(i,o)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,n,r){(function(i){var o=function(){if(typeof Map!="undefined")return Map;function N(C,F){var z=-1;return C.some(function(D,B){return D[0]===F&&(z=B,!0)}),z}return function(){function C(){this.__entries__=[]}return Object.defineProperty(C.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),C.prototype.get=function(F){var z=N(this.__entries__,F),D=this.__entries__[z];return D&&D[1]},C.prototype.set=function(F,z){var D=N(this.__entries__,F);~D?this.__entries__[D][1]=z:this.__entries__.push([F,z])},C.prototype.delete=function(F){var z=this.__entries__,D=N(z,F);~D&&z.splice(D,1)},C.prototype.has=function(F){return!!~N(this.__entries__,F)},C.prototype.clear=function(){this.__entries__.splice(0)},C.prototype.forEach=function(F,z){z===void 0&&(z=null);for(var D=0,B=this.__entries__;D<B.length;D++){var Q=B[D];F.call(z,Q[1],Q[0])}},C}()}(),l=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,a=i!==void 0&&i.Math===Math?i:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")(),s=typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(a):function(N){return setTimeout(function(){return N(Date.now())},1e3/60)},u=["top","right","bottom","left","width","height","size","weight"],c=typeof MutationObserver!="undefined",h=function(){function N(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(C,F){var z=!1,D=!1,B=0;function Q(){z&&(z=!1,C()),D&&A()}function T(){s(Q)}function A(){var O=Date.now();if(z){if(O-B<2)return;D=!0}else z=!0,D=!1,setTimeout(T,F);B=O}return A}(this.refresh.bind(this),20)}return N.prototype.addObserver=function(C){~this.observers_.indexOf(C)||this.observers_.push(C),this.connected_||this.connect_()},N.prototype.removeObserver=function(C){var F=this.observers_,z=F.indexOf(C);~z&&F.splice(z,1),!F.length&&this.connected_&&this.disconnect_()},N.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},N.prototype.updateObservers_=function(){var C=this.observers_.filter(function(F){return F.gatherActive(),F.hasActive()});return C.forEach(function(F){return F.broadcastActive()}),C.length>0},N.prototype.connect_=function(){l&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},N.prototype.disconnect_=function(){l&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},N.prototype.onTransitionEnd_=function(C){var F=C.propertyName,z=F===void 0?"":F;u.some(function(D){return!!~z.indexOf(D)})&&this.refresh()},N.getInstance=function(){return this.instance_||(this.instance_=new N),this.instance_},N.instance_=null,N}(),f=function(N,C){for(var F=0,z=Object.keys(C);F<z.length;F++){var D=z[F];Object.defineProperty(N,D,{value:C[D],enumerable:!1,writable:!1,configurable:!0})}return N},w=function(N){return N&&N.ownerDocument&&N.ownerDocument.defaultView||a},v=g(0,0,0,0);function k(N){return parseFloat(N)||0}function S(N){for(var C=[],F=1;F<arguments.length;F++)C[F-1]=arguments[F];return C.reduce(function(z,D){return z+k(N["border-"+D+"-width"])},0)}function p(N){var C=N.clientWidth,F=N.clientHeight;if(!C&&!F)return v;var z=w(N).getComputedStyle(N),D=function(ne){for(var ce={},ve=0,Oe=["top","right","bottom","left"];ve<Oe.length;ve++){var Me=Oe[ve],ct=ne["padding-"+Me];ce[Me]=k(ct)}return ce}(z),B=D.left+D.right,Q=D.top+D.bottom,T=k(z.width),A=k(z.height);if(z.boxSizing==="border-box"&&(Math.round(T+B)!==C&&(T-=S(z,"left","right")+B),Math.round(A+Q)!==F&&(A-=S(z,"top","bottom")+Q)),!function(ne){return ne===w(ne).document.documentElement}(N)){var O=Math.round(T+B)-C,Z=Math.round(A+Q)-F;Math.abs(O)!==1&&(T-=O),Math.abs(Z)!==1&&(A-=Z)}return g(D.left,D.top,T,A)}var d=typeof SVGGraphicsElement!="undefined"?function(N){return N instanceof w(N).SVGGraphicsElement}:function(N){return N instanceof w(N).SVGElement&&typeof N.getBBox=="function"};function m(N){return l?d(N)?function(C){var F=C.getBBox();return g(0,0,F.width,F.height)}(N):p(N):v}function g(N,C,F,z){return{x:N,y:C,width:F,height:z}}var x=function(){function N(C){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=C}return N.prototype.isActive=function(){var C=m(this.target);return this.contentRect_=C,C.width!==this.broadcastWidth||C.height!==this.broadcastHeight},N.prototype.broadcastRect=function(){var C=this.contentRect_;return this.broadcastWidth=C.width,this.broadcastHeight=C.height,C},N}(),b=function(N,C){var F,z,D,B,Q,T,A,O=(z=(F=C).x,D=F.y,B=F.width,Q=F.height,T=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,A=Object.create(T.prototype),f(A,{x:z,y:D,width:B,height:Q,top:D,right:z+B,bottom:Q+D,left:z}),A);f(this,{target:N,contentRect:O})},_=function(){function N(C,F,z){if(this.activeObservations_=[],this.observations_=new o,typeof C!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=C,this.controller_=F,this.callbackCtx_=z}return N.prototype.observe=function(C){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element!="undefined"&&Element instanceof Object){if(!(C instanceof w(C).Element))throw new TypeError('parameter 1 is not of type "Element".');var F=this.observations_;F.has(C)||(F.set(C,new x(C)),this.controller_.addObserver(this),this.controller_.refresh())}},N.prototype.unobserve=function(C){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(typeof Element!="undefined"&&Element instanceof Object){if(!(C instanceof w(C).Element))throw new TypeError('parameter 1 is not of type "Element".');var F=this.observations_;F.has(C)&&(F.delete(C),F.size||this.controller_.removeObserver(this))}},N.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},N.prototype.gatherActive=function(){var C=this;this.clearActive(),this.observations_.forEach(function(F){F.isActive()&&C.activeObservations_.push(F)})},N.prototype.broadcastActive=function(){if(this.hasActive()){var C=this.callbackCtx_,F=this.activeObservations_.map(function(z){return new b(z.target,z.broadcastRect())});this.callback_.call(C,F,C),this.clearActive()}},N.prototype.clearActive=function(){this.activeObservations_.splice(0)},N.prototype.hasActive=function(){return this.activeObservations_.length>0},N}(),E=typeof WeakMap!="undefined"?new WeakMap:new o,M=function N(C){if(!(this instanceof N))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var F=h.getInstance(),z=new _(C,F,this);E.set(this,z)};["observe","unobserve","disconnect"].forEach(function(N){M.prototype[N]=function(){var C;return(C=E.get(this))[N].apply(C,arguments)}});var P=a.ResizeObserver!==void 0?a.ResizeObserver:M;n.a=P}).call(this,r(15))},function(t,n,r){t.exports=r(10)},function(t,n,r){r.r(n);var i=r(2);r.d(n,"DefaultSplitter",function(){return i.a});var o=r(5);for(var l in o)["default","DefaultSplitter"].indexOf(l)<0&&function(s){r.d(n,s,function(){return o[s]})}(l);var a=r(6);r.d(n,"Split",function(){return a.a})},function(t,n,r){var i=r(3),o=r(12);typeof(o=o.__esModule?o.default:o)=="string"&&(o=[[t.i,o,""]]),i(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},function(t,n,r){(n=r(4)(!1)).push([t.i,`\r
/* The default splitter within a react-split */\r
.react-split > .split-container > .splitter .default-splitter {\r
  box-sizing: border-box;\r
  height: 100%;\r
  outline: none;\r
  overflow: hidden;\r
  user-select: none;\r
  width: 100%;\r
  --default-splitter-line-color: silver;\r
  --default-splitter-line-hover-color: black;\r
  --default-splitter-line-margin: 2px;\r
  --default-splitter-line-size: 3px;\r
}\r
\r
.react-split > .split-container.horizontal > .splitter .default-splitter {\r
  cursor: row-resize;\r
}\r
\r
.react-split > .split-container.vertical > .splitter .default-splitter {\r
  cursor: col-resize;\r
}\r
\r
/* The thin line within a default splitter hit area */\r
.react-split > .split-container > .splitter .default-splitter > .line {\r
  background: var(--default-splitter-line-color);\r
}\r
\r
.react-split > .split-container > .splitter .default-splitter:hover > .line {\r
  background: var(--default-splitter-line-hover-color);\r
}\r
\r
.react-split > .split-container.horizontal > .splitter .default-splitter > .line {\r
  height: var(--default-splitter-line-size);\r
  width: 100%;\r
  margin-top: var(--default-splitter-line-margin);\r
  margin-left: 0;\r
}\r
\r
.react-split > .split-container.vertical > .splitter .default-splitter > .line {\r
  height: 100%;\r
  width: var(--default-splitter-line-size);\r
  margin-top: 0;\r
  margin-left: var(--default-splitter-line-margin);\r
}`,""]),t.exports=n},function(t,n,r){var i=r(14);function o(){}function l(){}l.resetWarningCache=o,t.exports=function(){function a(c,h,f,w,v,k){if(k!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function s(){return a}a.isRequired=a;var u={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:l,resetWarningCache:o};return u.PropTypes=u,u}},function(t,n,r){t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch{typeof window=="object"&&(r=window)}t.exports=r},function(t,n,r){var i=r(3),o=r(17);typeof(o=o.__esModule?o.default:o)=="string"&&(o=[[t.i,o,""]]),i(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},function(t,n,r){(n=r(4)(!1)).push([t.i,`/* The top-level element of the splitter*/\r
.react-split {\r
  width: 100%;\r
  height: 100%;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
  --react-split-min-primary: 0;\r
  --react-split-min-secondary: 0;\r
  --react-split-primary: 50%;\r
  --react-split-splitter: 7px;\r
}\r
\r
/* The container for the primary pane, splitter, and secondary pane.*/\r
.react-split > .split-container {\r
  width: 100%;\r
  height: 100%;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
  display: grid;\r
}\r
\r
/* When the container is splitting horizontally */\r
.react-split > .split-container.horizontal {\r
  grid-template-columns: 1fr;\r
  grid-template-rows: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);\r
  grid-template-areas: "primary" "split" "secondary";\r
}\r
\r
/* When the container is splitting vertical */\r
.react-split > .split-container.vertical {\r
  grid-template-columns: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);\r
  grid-template-rows: 1fr;\r
  grid-template-areas: "primary split secondary";\r
}\r
\r
/* The primary pane. This is either the left or top depending on the split type */\r
.react-split > .split-container > .primary {\r
  grid-area: primary;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
}\r
\r
.react-split > .split-container.horizontal > .primary {\r
  height: auto;\r
  width: 100%;\r
}\r
\r
.react-split > .split-container.vertical > .primary {\r
  height: 100%;\r
  width: auto;\r
}\r
\r
/* The splitter between panes. */\r
.react-split > .split-container > .splitter {\r
  grid-area: split;\r
  background: transparent;\r
  user-select: none;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
}\r
\r
.react-split > .split-container.horizontal > .splitter {\r
  height: auto;\r
  width: 100%;\r
  cursor: row-resize;\r
}\r
\r
.react-split > .split-container.vertical > .splitter {\r
  height: 100%;\r
  width: auto;\r
  cursor: col-resize;\r
}\r
\r
/* The secondary pane. This is either the right or bottom depending on the split type */\r
.react-split > .split-container >.secondary {\r
  grid-area: secondary;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
}\r
\r
.react-split > .split-container.horizontal > .secondary {\r
  height: auto;\r
  width: 100%;\r
}\r
\r
.react-split > .split-container.vertical > .secondary {\r
  height: 100%;\r
  width: auto;\r
}\r
\r
/* The content within the primary pane, splitter, or secondary pane.*/\r
.react-split .full-content {\r
  width: 100%;\r
  height: 100%;\r
  box-sizing: border-box;\r
  outline: none;\r
  overflow: hidden;\r
}\r
`,""]),t.exports=n}])}(J);var gu={},Ih={};(function(e){function t(c){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(c)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(c,h){if(!h&&c&&c.__esModule)return c;if(c===null||t(c)!=="object"&&typeof c!="function")return{default:c};var f=i(h);if(f&&f.has(c))return f.get(c);var w={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in c)if(k!=="default"&&Object.prototype.hasOwnProperty.call(c,k)){var S=v?Object.getOwnPropertyDescriptor(c,k):null;S&&(S.get||S.set)?Object.defineProperty(w,k,S):w[k]=c[k]}return w.default=c,f&&f.set(c,w),w}(J),r=["dispose","reject","resolve"];function i(c){if(typeof WeakMap!="function")return null;var h=new WeakMap,f=new WeakMap;return(i=function(w){return w?f:h})(c)}function o(){return o=Object.assign||function(c){for(var h=1;h<arguments.length;h++){var f=arguments[h];for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(c[w]=f[w])}return c},o.apply(this,arguments)}function l(c,h){return function(f){if(Array.isArray(f))return f}(c)||function(f,w){var v=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(v!=null){var k,S,p=[],d=!0,m=!1;try{for(v=v.call(f);!(d=(k=v.next()).done)&&(p.push(k.value),!w||p.length!==w);d=!0);}catch(g){m=!0,S=g}finally{try{d||v.return==null||v.return()}finally{if(m)throw S}}return p}}(c,h)||function(f,w){if(!!f){if(typeof f=="string")return a(f,w);var v=Object.prototype.toString.call(f).slice(8,-1);if(v==="Object"&&f.constructor&&(v=f.constructor.name),v==="Map"||v==="Set")return Array.from(f);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return a(f,w)}}(c,h)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function a(c,h){(h==null||h>c.length)&&(h=c.length);for(var f=0,w=new Array(h);f<h;f++)w[f]=c[f];return w}function s(c,h){if(c==null)return{};var f,w,v=function(S,p){if(S==null)return{};var d,m,g={},x=Object.keys(S);for(m=0;m<x.length;m++)d=x[m],p.indexOf(d)>=0||(g[d]=S[d]);return g}(c,h);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(c);for(w=0;w<k.length;w++)f=k[w],h.indexOf(f)>=0||Object.prototype.propertyIsEnumerable.call(c,f)&&(v[f]=c[f])}return v}var u=function(c){return function(h){var f=h.dispose,w=h.reject,v=h.resolve,k=s(h,r),S=l((0,n.useState)(!0),2),p=S[0],d=S[1];return n.default.createElement(c,o({cancel:function(m){d(!1),w(m)},dismiss:function(){d(!1),f()},proceed:function(m){d(!1),v(m)},show:p},k))}};e.default=u})(Ih);var Tf={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,n=(t=J)&&t.__esModule?t:{default:t},r=cl;function i(){return i=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(l[u]=s[u])}return l},i.apply(this,arguments)}var o=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,s=arguments.length>2?arguments[2]:void 0;return function(u){var c=(s||document.body).appendChild(document.createElement("div")),h=(0,r.createRoot)(c),f=new Promise(function(v,k){try{h.render(n.default.createElement(l,i({reject:k,resolve:v,dispose:w},u)))}catch(S){throw console.error(S),S}});function w(){setTimeout(function(){h.unmount(),setTimeout(function(){c&&c.parentNode&&c.parentNode.removeChild(c)})},a)}return f.then(function(v){return w(),v},function(v){return w(),Promise.reject(v)})}};e.default=o})(Tf),function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"confirmable",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"createConfirmation",{enumerable:!0,get:function(){return n.default}});var t=r(Ih),n=r(Tf);function r(i){return i&&i.__esModule?i:{default:i}}}(gu);yi(`.allims-lib-modal-confirmation {
  height: 13rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}
.allims-lib-modal-confirmation div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.allims-lib-modal-confirmation footer {
  width: 100%;
}
.allims-lib-modal-confirmation footer div {
  border-top: 0.5px solid #cdcdcd;
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.allims-lib-modal-confirmation footer div button {
  background-color: transparent;
  border: 0.5px solid red;
  color: red;
}
.allims-lib-modal-confirmation footer div button:hover {
  background-color: rgb(253, 237, 237);
}
.allims-lib-modal-confirmation footer div button + button {
  border: none;
  background-color: green;
  color: white;
}
.allims-lib-modal-confirmation footer div button + button:hover {
  background-color: rgb(1, 148, 1);
  color: white;
}`);const pw=({okLabel:e="Sim",cancelLabel:t="N\xE3o",title:n="Confirma\xE7\xE3o",confirmation:r,show:i,proceed:o})=>y(br,{field:"modalConfirmation",id:"modalConfirmation",classInLine:"allims-lib-modal-confirmation",isOpen:i,handleClose:()=>o(!1),footer:Y("div",{children:[y(di,{type:"button",onClick:()=>o(!1),field:"",id:"",children:t}),y(di,{type:"button",onClick:()=>o(!0),field:"",id:"",classInLine:"",children:e})]}),children:y("h3",{children:r})});function hs(e,t="Sim",n="N\xE3o",r={}){return gu.createConfirmation(gu.confirmable(pw))(L({confirmation:e,proceedLabel:t,cancelLabel:n},r))}function mw(e){const{id:t,field:n,onClick:r}=e,[i,o]=I.exports.useState(!1),[l,a]=I.exports.useState({direction:"down",icon:"south"});function s(){o(!i)}function u(c,h){a({direction:c,icon:h}),r(c),s()}return Y("div",{className:"allims-lib-enter-direction-container",children:[y(ke,{field:n,id:t,icon:{value:l.icon,size:{value:2,unit:"rem"}},text:{value:"Enter"},styleInLine:{size:{width:{value:48,unit:"px",min:48},height:{value:40,unit:"px"}}},onClick:()=>s()}),i&&Y("div",{className:"allims-lib-enter-direction",children:[y(ke,{field:`${n}Up`,id:"up",icon:{value:"north",size:{value:2,unit:"rem"}},text:{value:"Cima"},onClick:()=>u("up","north")}),y(ke,{field:`${n}Down`,id:"down",icon:{value:"south",size:{value:2,unit:"rem"}},text:{value:"Baixo"},onClick:()=>u("down","south")}),y(ke,{field:`${n}Left`,id:"left",icon:{value:"west",size:{value:2,unit:"rem"}},text:{value:"Esquerda"},onClick:()=>u("left","west")}),y(ke,{field:`${n}Right`,id:"right",icon:{value:"east",size:{value:2,unit:"rem"}},text:{value:"Direita"},onClick:()=>u("right","east")}),y(ke,{field:`${n}Block`,id:"block",icon:{value:"block",size:{value:2,unit:"rem"}},text:{value:"Est\xE1tico"},onClick:()=>u("block","block")})]})]})}function Lf(e){const E=e,{id:t,field:n,title:r,state:i,content:o,tooltip:l,type:a="text",empty:s,config:u,validations:c,items:h=[],classInLine:f,styleInLine:w,read:v=!1,isGrid:k}=E,S=xe(E,["id","field","title","state","content","tooltip","type","empty","config","validations","items","classInLine","styleInLine","read","isGrid"]),{setValue:p}=nn(),[d,m]=I.exports.useState(new Date),[g,x]=I.exports.useState(!1),b=I.exports.useRef(null);function _(M){x(M||!g)}return Ec(b,()=>x(!1)),Y("div",te(L({id:t,className:"allims-lib-select",style:ut(w),ref:b},S),{children:[Y("div",{className:"allims-lib-select-input",children:[y(ga,{id:`${t}-content`,field:`${n}Content`,title:r,read:v,isGrid:k}),y(Cr,{id:`${t}-value`,field:`${n}Content`}),y("button",{type:"button",className:"material-symbols-outlined",onClick:function(){p(n,""),p(`${n}Content`,"")},children:y(Lt,s?{children:"close"}:{})}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>_(),children:"calendar_month"})]}),g&&Y("div",{className:"allims-lib-inputlist-items",children:[y("div",{className:"allims-lib-inputlist-calendar-time",children:y(kh,{onChangeDate:m,defaultDate:new Date(d||"")})}),Y("footer",{children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:()=>(m(""),void _(!1))}),y(ke,{id:"ok",field:"ok",type:"submit",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:()=>{return M={value:d,content:wr(new Date(d||""),"dd/MM/yyyy")},p(n,M.value),p(`${n}Content`,M.content),void _();var M}})]})]})]}))}function hw(e){const{isMult:t,checked:n,idData:r,value:i,content:o,handleItem:l,handleCheck:a}=e;return Y("ol",{className:"allims-lib-list-item",onClick:()=>l&&l({idData:r,value:i,content:o}),children:[t?y("input",{id:r,type:"checkbox",checked:n,onChange:s=>a&&a({idData:r,content:o,value:i,checked:s.target.checked})}):y("div",{}),y("span",{children:o}),y("div",{})]})}function gw(e){const{items:t,isMult:n=!1,handleItem:r,total:i}=e,o=I.exports.useRef(null),[l,a]=I.exports.useState(t);return I.exports.useEffect(()=>{a(t)},[t]),y("div",{className:"allims-lib-list",ref:o,children:y("ul",{style:{height:23*i},children:l&&l.map(s=>y(hw,L({isMult:n,handleItem:r,handleCheck:r},s),s.idData))})})}function Of(e){const T=e,{id:t,field:n,title:r,state:i,content:o,tooltip:l,type:a="text",empty:s,isMult:u=!1,config:c,validations:h,styleInLine:f,url:w,dependencies:v,classInLine:k,isSearch:S=!1,limit:p,rowId:d,colId:m,cellId:g,isGrid:x,backData:b,backConfigs:_}=T,E=xe(T,["id","field","title","state","content","tooltip","type","empty","isMult","config","validations","styleInLine","url","dependencies","classInLine","isSearch","limit","rowId","colId","cellId","isGrid","backData","backConfigs"]),{setValue:M,getValues:P}=nn(),[N,C]=I.exports.useState(!1),[F,z]=I.exports.useState([]),[D,B]=I.exports.useState([]);function Q(A){C(A||!N)}return I.exports.useEffect(()=>{N&&async function(){var Z;let A=w;b?A+=Xn(b):v==null||v.forEach(ne=>{const ce=P(ne);ce&&(A+=`&${ne}=${ce}`)});const O=await lt({url:A});if(O!=null&&O.success){O!=null&&O.message&&de(O.message);const ne=((Z=O==null?void 0:O.data)==null?void 0:Z.map(ce=>({idData:Ch(),checked:!1,value:ce.id,content:ce.name})))||[];z(ne)}else _e(O==null?void 0:O.message)}()},[N]),Y("div",te(L({id:t,className:"allims-lib-select",style:ut(f)},E),{children:[Y("div",{className:"allims-lib-select-input",children:[Y("div",{style:ut(f),className:"allims-lib-input-label",children:[y(dn,{field:`${n}Content`,id:`${t}-content`,readOnly:!0}),y(tn,{htmlFor:t,id:`${t}-text`,field:n,children:r})]}),y(Cr,{id:`${t}-input`,field:n}),y("button",{type:"button",className:"material-symbols-outlined",onClick:function(){M(`${n}Content`,""),M(n,"")},children:y(Lt,s?{children:"close"}:{})}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>Q(),children:N?"expand_less":"expand_more"})]}),N&&Y("div",{className:"allims-lib-inputlist-items",children:[u&&Y("header",{children:[y("input",{type:"checkbox",onChange:function(A){const O=F?F.map(Z=>te(L({},Z),{checked:A.target.checked})):[];z(O)}}),y("span",{children:"Nome"}),y("div",{})]}),y(gw,{items:F,isMult:u,handleItem:A=>u?function(O){const Z=F?F.map(ce=>ce.idData===O.idData?te(L({},ce),{checked:O.checked}):ce):[];z(Z);const ne=Z.filter(ce=>ce.checked);B(ne),M(`${n}Content`,ne.length),M(n,JSON.stringify(ne))}(A):function(O){M(`${n}Content`,O.content),M(n,O.value),Q()}(A),total:F.length}),u&&Y("footer",{children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:()=>Q(!1)}),y(ke,{id:"ok",field:"ok",type:"submit",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:()=>Q(!1)})]})]})]}))}const yw=[{idData:"",value:"",content:"-"},{idData:"false",value:"false",content:"N\xE3o"},{idData:"true",value:"true",content:"Sim"}],vw=[{idData:"false",value:"false",content:"N\xE3o"},{idData:"true",value:"true",content:"Sim"}];function ww(e){const r=e,{empty:t}=r,n=xe(r,["empty"]);return y(Th,L({items:t?yw:vw,empty:t},n))}const Dh=I.exports.forwardRef((e,t)=>{const{route:n,id:r,field:i,actions:o,navigate:l,getDefaultValues:a,onFocusRow:s,columns:u,isLoading:c=!1}=e,h=I.exports.useRef(null),[f,w]=I.exports.useState({});function v(){var S;(S=h.current)==null||S.handleResetForm()}function k(S){switch(S.fieldType){case"refresh":v();break;case"redirect":(async function(p){var d,m;if(p!=null&&p.redirect)if(Object.keys(f).length){let g={};(m=(d=p.redirect)==null?void 0:d.fields)==null||m.forEach(_=>{g=te(L({},g),{[_]:f[_]})});const{success:x,message:b}=await Cn({url:`/api/safe/data/filters?field=${p.redirect.field}`,body:g});x?(b&&de(b),l&&l(p.redirect.route)):_e(b)}else de("\xC9 necess\xE1rio selecionar uma linha");else de("Nao h\xE1 configuracao para redirect")})(S)}}return I.exports.useImperativeHandle(t,()=>({handleRefreshFast:v}),[v]),Y(se,{id:r,field:i,classInLine:"allims-module-main",type:"form",styleInLine:{size:{height:{value:100,unit:"%"}}},getValues:a,ref:h,children:[Y(se,{id:"heading",role:"heading",classInLine:"allims-module-main-heading",children:[y(wh,{route:n}),y(se,{id:"actions",classInLine:"allims-module-actions",children:o&&(o==null?void 0:o.map(S=>y(ke,{id:S.id,field:S.field,icon:{value:S.icon,size:{value:2,unit:"rem"}},text:{value:S.title},styleInLine:{size:{width:{value:48,unit:"px",min:48},height:{value:40,unit:"px"}}},onClick:()=>k(S)},S.id)))})]}),y(se,{id:"mainGrid",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y(Sh,{id:`${r}Grid`,field:`${i}Grid`,columns:u,isLoading:c,onFocusedRow:function(S){w(S),s&&s(S)},keyField:"id"})})]})});function yu(e){var D,B,Q;const z=e,{id:t,field:n,title:r,classInLine:i,styleInLine:o,read:l,state:a,isGrid:s,backData:u,backStyle:c,backConfigs:h}=z,f=xe(z,["id","field","title","classInLine","styleInLine","read","state","isGrid","backData","backStyle","backConfigs"]),w=I.exports.useRef(null),{setValue:v,setError:k,getFieldState:S}=nn(),p=S(n),[d,m]=I.exports.useState(!1),[g,x]=I.exports.useState({actions:[],filters:[],main:{},tools:[]}),[b,_]=I.exports.useState({}),[E,M]=I.exports.useState({}),[P,N]=I.exports.useState({width:55,size:0}),[C,F]=I.exports.useState({show:!1,item:{field:"",id:"",icon:"",title:""}});return I.exports.useEffect(()=>{d&&async function(){const T=`/api/safe/engine/form?field=${h.field}`,{data:A,success:O,message:Z}=await lt({url:T});O?(Z&&de(Z),x(A)):_e(Z)}()},[d]),Y(Lt,{children:[y("div",{id:`${t}-input-modal-fast`,className:`allims-lib-input-modal-fast-container ${i} ${(D=p==null?void 0:p.error)!=null&&D.message?"allims-lib-input-error ":""}`,style:ut(o),"data-state":a,children:Y("div",{className:"allims-lib-input-modal-fast "+(r?" allims-lib-input-label allims-lib-input-modal-edit-render ":""),"data-state":a,children:[y(dn,L({id:t,field:`${n}Content`,readOnly:!0,read:l,isGrid:s,backData:u,backStyle:c,backConfigs:h},f)),y(Cr,{id:`${t}-input-hidden`,field:n}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>{m(!d)},children:"search"}),r&&y(tn,{id:`${t}-inp`,field:n,children:r})]})}),((Q=(B=g==null?void 0:g.main)==null?void 0:B.field)==null?void 0:Q.length)>0&&y(br,{handleClose:()=>m(!1),isOpen:d,id:"modal",field:"modal",classInLine:"allims-lib-input-modal-fast-backdrop-dialog",children:Y(So.exports.Split,{initialPrimarySize:"100%",minSecondarySize:`${P.width}px`,splitterSize:`${P.size}px`,children:[Y(se,{id:"listModal",classInLine:"allims-module",styleInLine:{direction:"column",size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(Dh,{columns:g.main.fields[0].columns,id:g.main.id,field:g.main.field,route:g.main.title,onFocusRow:_,getDefaultValues:async function(T){let A=`/api/safe/data/grid?field=${T}`;A+=Xn(u),A+=Xn(E);const{data:O,success:Z,message:ne}=await lt({url:A});return Z?(ne&&de(ne),{[`${T}Grid`]:O}):(_e(ne),{})},actions:g.actions,ref:w}),Y(se,{id:"footerModal",styleInLine:{direction:"row",size:{width:{value:100,unit:"%"},height:{value:5,unit:"rem"}},background:{color:"#f1f1f1"},align:{horizontal:"space-between"},padding:{left:{value:5,unit:"px"}}},children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:function(){x({}),m(!1)}}),y(ke,{field:"ok",id:"ok",type:"button",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:async function(){if(b!=null&&b.error)return void de(b.error);const T=er();let A={value:b.id,valueContent:b.name};if(Object.keys(u).forEach(O=>{A=te(L({},A),{[O]:u[O]})}),n.includes("entradaDeDadosDefinicoesGrid"))v(n,b.id),v(`${n}Content`,b.name),kn(T),m(!1);else{const{success:O,message:Z}=await Cn({url:"/api/safe/data/cells?field=entradaDeDadosLista&action=edit",body:[A]});O?(v(n,b.id),v(`${n}Content`,b.name),Z?de(Z,T):kn(T),m(!1)):_e(Z,T)}}})]})]}),Y(se,{id:"toolbar",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(ho,{items:g.tools,handleItem:function(T){C.item.id!==T.id?(F({item:T,show:!0}),N({width:350,size:7})):(F({show:!1,item:{id:"",field:"",icon:"",title:""}}),N({width:55,size:0}))}}),C.show&&Y(se,{id:"toolbar-container",classInLine:"allims-lib-toolbar-container",children:[y(se,{id:"toolbar-container-title",classInLine:"allims-lib-toolbar-container-title",content:{value:C.item.title}}),y(se,{id:"toolbar-container-content",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y(ya,{getValues:async function(T,A){return E},id:C.item.id,field:C.item.field,params:{},getFields:async function(T){return{main:{id:T,field:T,fields:g.filters,formType:"register"}}},onCancel:async function(T){M({}),setTimeout(()=>{var A;(A=w.current)==null||A.handleRefreshFast()},300)},onSubmit:async function(T,A){M(T),setTimeout(()=>{var O;(O=w.current)==null||O.handleRefreshFast()},300)}})})]})]})]})})]})}function bw(e){const r=e,{title:t}=r,n=xe(r,["title"]);return Y("div",{style:ut(n.styleInLine),className:"allims-lib-input-label",children:[y(dn,te(L({},n),{type:"number"})),y(tn,{htmlFor:n.id,id:`${n.id}-text`,field:`${n.field}-text`,children:t})]})}function Ph(e){const p=e,{id:t,field:n,title:r,fieldType:i="text",dependencies:o,columns:l,empty:a=!0,readOnly:s=!1,data:u,form:c,module:h,rowId:f="",colId:w="",cellId:v="",configs:k}=p,S=xe(p,["id","field","title","fieldType","dependencies","columns","empty","readOnly","data","form","module","rowId","colId","cellId","configs"]);return["select"].includes(i)?y(Of,L({id:t,field:n,title:r,url:`/api/safe/data/select?field=${n}`,dependencies:o||[],readOnly:s,rowId:f,colId:w,cellId:v},S)):["select"].includes(k==null?void 0:k.dataType)?y(Of,L({id:t,field:n,title:r,url:`/api/safe/data/select?field=${k.field}`,dependencies:o||[],readOnly:s,backConfigs:k,backData:u},S)):["modalEdit"].includes(i)?y(wu,{id:t,field:n,module:h||"",title:r,form:c||"",dependencies:o||[],readOnly:s,rowId:f,colId:w,cellId:v}):["modalEdit"].includes(k==null?void 0:k.dataType)?y(wu,L({id:t,field:n,title:r,isGrid:!0,backConfigs:k,backData:u},S)):["modalFast"].includes(i)?y(yu,L({id:t,field:n,module:h||"",title:r,form:c||"",dependencies:o||[],readOnly:s,rowId:f,colId:w,cellId:v},S)):["modalFast"].includes(k==null?void 0:k.dataType)?y(yu,L({id:t,field:n,title:r,isGrid:!0,backConfigs:k,backData:u},S)):["listBoolean"].includes(i)||["listBoolean"].includes(k==null?void 0:k.dataType)?y(ww,L({id:t,field:n,title:r,empty:a,readOnly:s},S)):["gridEdit"].includes(i)||["gridEdit"].includes(k==null?void 0:k.dataType)?y($h,L({id:t,field:n},S)):["gridFast"].includes(i)||["gridFast"].includes(k==null?void 0:k.dataType)?y(Sh,L({id:t,field:n,columns:l,isLoading:!1,keyField:"id"},S)):["hidden"].includes(i)?y(Cr,{id:t,field:n}):["date"].includes(i)?y(Lf,{id:t,field:n,title:r,readOnly:s}):["date"].includes(k==null?void 0:k.dataType)?y(Lf,L({id:t,field:n,title:r,readOnly:s},S)):["datetime"].includes(i)?y(pu,{id:n,field:n,title:r,readOnly:s}):["datetime"].includes(k==null?void 0:k.dataType)?y(pu,L({id:n,field:n,title:r,readOnly:s},S)):["number"].includes(i)?y(bw,{id:n,field:n,title:r,readOnly:s}):y(ga,{id:n,field:n,title:r,readOnly:s})}function vu(e){var h;const{id:t,field:n,items:r,isLoading:i=!1,params:o,onSubmit:l,onCancel:a,getValues:s}=e,u=I.exports.useRef(null);I.exports.useEffect(()=>{var f;o&&Object.keys(o).length&&((f=u.current)==null||f.handleResetForm())},[o]);let c={paddingLeft:"",paddingRight:"",paddingBottom:""};return r&&((h=r==null?void 0:r.filter(f=>["gridEdit","gridFast"].includes((f==null?void 0:f.fieldType)||"")))==null?void 0:h.length)&&(r==null?void 0:r.length)===1&&(c={paddingLeft:0,paddingRight:0,paddingBottom:0}),Y(se,{id:t,field:n,type:"form",classInLine:"allims-lib-edit-info",getValues:s,onSubmit:f=>{l&&l(f,n)},ref:u,children:[y("div",{className:"allims-lib-edit-container",style:L({},c),children:i?y(cn,{}):r&&r.map(f=>y(Ph,L({},f),f.field))}),Y("footer",{children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:t.toLowerCase().includes("filtro")?"Limpar":"Cancelar"},onClick:()=>async function(){var w;let f={};r&&r.forEach(v=>{f=te(L({},f),{[v.field]:null})}),a&&await a(n,f),(w=u.current)==null||w.handleResetForm()}()}),y(ke,{id:"ok",field:"ok",type:"button",classInLine:"allims-lib-button-ok",text:{value:t.toLowerCase().includes("filtro")?"Filtrar":"Salvar"},onClick:()=>{var f;return(f=u.current)==null?void 0:f.submit()},styleInLine:{background:{color:t.toLowerCase().includes("filtro")?"#0d58a5":""}}})]})]})}function xw(e){var u;const{id:t,field:n,items:r,isLoading:i=!1,getDefaultValues:o,params:l}=e,a=I.exports.useRef(null);I.exports.useEffect(()=>{var c,h;l&&((c=Object.keys(l))==null?void 0:c.length)&&((h=a.current)==null||h.handleResetForm())},[l]);let s={paddingLeft:"",paddingRight:"",paddingBottom:""};return r&&((u=r==null?void 0:r.filter(c=>["gridEdit","gridFast"].includes(c.fieldType||"")))==null?void 0:u.length)&&(r==null?void 0:r.length)===1&&(s={paddingLeft:0,paddingRight:0,paddingBottom:0}),y(se,{id:t,field:n,type:"form",classInLine:"allims-lib-edit-info",getValues:o,ref:a,children:y("div",{className:"allims-lib-info-container",style:L({},s),children:i?y(cn,{}):r&&r.map(c=>y(Ph,te(L({},c),{readOnly:!0}),c.field))})})}function ya(e){var f,w;const{field:t,id:n,params:r,getFields:i,getValues:o,onSubmit:l,onCancel:a}=e,[s,u]=I.exports.useState({}),[c,h]=I.exports.useState(!1);return I.exports.useEffect(()=>(async function(){h(!0);const v=await i(t);u(v),h(!1)}(),()=>{u({})}),[n]),s&&Object.keys(s).length?["register"].includes((f=s==null?void 0:s.main)==null?void 0:f.formType)?y(vu,{id:s.main.id,field:s.main.field,items:s.main.fields,params:r,isLoading:c,getValues:async v=>{h(!0);const k=await o(v,s.main.dependencies);return h(!1),k},onSubmit:l,onCancel:a}):["info"].includes((w=s==null?void 0:s.main)==null?void 0:w.formType)?y(xw,{id:s.main.id,field:s.main.field,items:s.main.fields,params:r,isLoading:c,getDefaultValues:async v=>{h(!0);const k=await o(v,s.main.dependencies);return h(!1),k}}):y("p",{children:"Nao Implementado"}):y(cn,{})}function kw(e){const{field:t,isOpen:n,toggleOpen:r}=e,i=I.exports.useRef(null),[o,l]=I.exports.useState({actions:[],filters:[],main:{},tools:[]}),[a,s]=I.exports.useState({}),[u,c]=I.exports.useState({}),[h,f]=I.exports.useState({width:55,size:0}),[w,v]=I.exports.useState({show:!1,item:{field:"",id:"",icon:"",title:""}});return I.exports.useEffect(()=>{(async function(){const k=`/api/safe/engine/form?field=${t}`,{data:S,success:p,message:d}=await lt({url:k});p?(d&&de(d),l(S)):_e(d)})()},[n]),y(br,{handleClose:()=>r(),isOpen:n,id:"modal",field:"modal",classInLine:"allims-lib-input-modal-fast-backdrop-dialog",children:Y(So.exports.Split,{initialPrimarySize:"100%",minSecondarySize:`${h.width}px`,splitterSize:`${h.size}px`,children:[Y(se,{id:"listModal",classInLine:"allims-module",styleInLine:{direction:"column",size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[o.main.field?y(Cc,{route:o.main.title,id:o.main.id,field:o.main.field,getDefaultValues:async function(k,S){let p=`/api/safe/data/grid?field=${k}`;S&&(p+=`&action=${S}`),p+=Xn(u);const{data:d,success:m,message:g}=await lt({url:p});return m?(g&&de(g),{[`${k}Grid`]:d}):(_e(g),null)},onCellFocus:s,actions:o.actions,ref:i,isForm:!0}):y(cn,{}),Y(se,{id:"footerModal",styleInLine:{direction:"row",size:{width:{value:100,unit:"%"},height:{value:5,unit:"rem"}},background:{color:"#f1f1f1"},align:{horizontal:"space-between"},padding:{left:{value:5,unit:"px"}}},children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:function(){l({}),r()}}),y(ke,{field:"ok",id:"ok",type:"button",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:async function(){var x;const k=er(),S=(x=i.current)==null?void 0:x.getDataEdit();let p=`/api/safe/data/grid?field=${o.main.field}`;const{data:d,success:m,message:g}=await Cn({url:p,body:S[`${o.main.field}Grid`]});m?(l({}),g?de(g,k):kn(k),r()):_e(g,k)}})]})]}),Y(se,{id:"toolbar",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(ho,{items:o.tools,handleItem:function(k){w.item.id!==k.id?(v({item:k,show:!0}),f({width:350,size:7})):(v({show:!1,item:{id:"",field:"",icon:"",title:""}}),f({width:55,size:0}))}}),w.show&&Y(se,{id:"toolbar-container",classInLine:"allims-lib-toolbar-container",children:[y(se,{id:"toolbar-container-title",classInLine:"allims-lib-toolbar-container-title",content:{value:w.item.title}}),y(se,{id:"toolbar-container-content",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y(ya,{getValues:async function(k,S){return u},id:w.item.id,field:w.item.field,params:{},getFields:async function(k){return{main:{id:k,field:k,fields:o.filters,formType:"register"}}},onCancel:async function(k){c({}),setTimeout(()=>{var S;(S=i.current)==null||S.handleRefreshEdit()},300)},onSubmit:async function(k,S){c(k),setTimeout(()=>{var p;(p=i.current)==null||p.handleRefreshEdit()},300)}})})]})]})]})})}const Cc=I.exports.forwardRef((e,t)=>{const{route:n,id:r,field:i,isLoading:o=!1,actions:l,getDefaultValues:a,onCellFocus:s,isForm:u=!1}=e,[c,h]=I.exports.useState("down"),[f,w]=I.exports.useState({show:!1,items:[],field:"",title:""}),[v,k]=I.exports.useState({show:!1,field:""}),[S,p]=I.exports.useState({show:!1,items:[],field:"",title:"",cells:[]}),[d,m]=I.exports.useState(!1),[g,x]=I.exports.useState(""),b=I.exports.useRef(null),_=I.exports.useRef(null);function E(){var C;return(C=_.current)==null?void 0:C.getData()}function M(){var C;(C=_.current)==null||C.handleResetForm()}function P(C){var F;switch(C.fieldType){case"pivot":(F=b.current)==null||F.togglePivot();break;case"refresh":M();break;case"fill":(async function(z){var D;await hs("Deseja preencher?")&&((D=_.current)==null||D.handleResetForm(z.fieldType))})(C);break;case"redirect":case"multEdit":case"multDelete":case"add":(function(z){de(z.field," n\xE3o implementado")})(C);break;case"edit":(async function(z){var B;const D=await((B=b.current)==null?void 0:B.getCellsSelected());D!=null&&D.success&&p({show:!0,field:i,title:"Editar",items:D.fields,cells:D.data})})();break;case"deleteMemory":(async function(z){var B,Q,T;const D=await((B=b.current)==null?void 0:B.getCellsSelected(!1));if((D==null?void 0:D.success)&&await hs("Deseja apagar?")){const A=[];(Q=D==null?void 0:D.data)==null||Q.forEach(O=>{const Z=te(L({},O),{value:null,valueContent:null});A.push(Z)}),(T=b.current)==null||T.setGridValues(A)}})();break;case"deleteApi":(async function(z){var B,Q,T;const D=await((B=b.current)==null?void 0:B.getCellsSelected(!1));if((D==null?void 0:D.success)&&await hs("Deseja apagar?")){const A=[];(Q=D==null?void 0:D.data)==null||Q.forEach(ne=>{const ce=te(L({},ne),{value:null,valueContent:null});A.push(ce)});const{success:O,data:Z}=await N(A,z.fieldType);O&&((T=b.current)==null||T.setGridValues(Z))}})(C);break;case"enable":(async function(z){var B,Q;const D=await((B=b.current)==null?void 0:B.getCellsSelected());if(D!=null&&D.success){const{success:T,data:A}=await N(D.data,z.fieldType);T&&((Q=b.current)==null||Q.setGridValues(A,z.fieldType))}})(C);break;case"disable":(async function(z){var B,Q;const D=await((B=b.current)==null?void 0:B.getCellsSelected());if(D!=null&&D.success){const{success:T,data:A}=await N(D.data,z.fieldType);T&&((Q=b.current)==null||Q.setGridValues(A,z.fieldType))}})(C);break;case"copy":(async function(z){var D;try{const B=await((D=b.current)==null?void 0:D.getCellsSelected());if(B!=null&&B.success){const Q=B.data.map(T=>({ruleId:T.ruleid,value:T.value,valueContent:T.valueContent}));x(JSON.stringify(Q))}}catch(B){console.error("Write",B)}})();break;case"pasteMemory":(async function(z){var D,B,Q;try{const T=JSON.parse(g),A=await((D=b.current)==null?void 0:D.getCellsSelected(!1)),O=[],Z=[];A.data.forEach(ne=>{ne.ruleid===T[0].ruleId?O.push(te(L({},ne),{value:T[0].value,valueContent:T[0].valueContent})):Z.push(te(L({},ne),{error:"Regras diferentes"}))}),(B=b.current)==null||B.setGridValues(O),(Q=b.current)==null||Q.setGridValues(Z)}catch(T){console.error("Read",T)}})();break;case"pasteApi":(async function(z){var D,B,Q;try{const T=JSON.parse(g),A=await((D=b.current)==null?void 0:D.getCellsSelected(!1)),O=[],Z=[];if(A.data.forEach(ne=>{ne.ruleid===T[0].ruleId?O.push(te(L({},ne),{value:T[0].value,valueContent:T[0].valueContent})):Z.push(te(L({},ne),{error:"Regras diferentes"}))}),O.length){const{data:ne}=await N(O,"edit");(B=b.current)==null||B.setGridValues(ne)}(Q=b.current)==null||Q.setGridValues(Z)}catch(T){console.error("Read",T)}})();break;case"modalForm":(async function(z){k({field:"entradaDeDadosDefinicoes",show:!0})})();break;default:console.warn("Action nao implementada!")}}async function N(C,F){const z=function(T){const A=[];return T.forEach(O=>{const Z={dataType:(O==null?void 0:O.dataType)||(O==null?void 0:O.datatype),dependencies:O==null?void 0:O.dependencies,field:O==null?void 0:O.field,max:O==null?void 0:O.max,min:O==null?void 0:O.min,multiSelectOptions:O==null?void 0:O.multiSelectOptions,required:O==null?void 0:O.required,selectOptions:(O==null?void 0:O.selectOptions)||(O==null?void 0:O.selectoptions),varType:(O==null?void 0:O.varType)||(O==null?void 0:O.vartype),colId:O.colId||O.colid,cellId:O.cellId||O.cellid,rowId:O.rowId||O.rowid,idVariable:O.idVariable||O.idvariable,ruleId:O.ruleId||O.ruleid,state:O.state,type:O.type,value:O.value,valueContent:O.valueContent||O.valuecontent||null,nameField:O.nameField||O.namefield};A.push(Z)}),A}(C),{success:D,message:B,data:Q}=await Cn({url:`/api/safe/data/cells?field=${i}&action=${F}`,body:z});return D?(B&&de(B),{success:D,data:Q}):(_e(B),{success:D,data:null})}return I.exports.useImperativeHandle(t,()=>({handleRefreshEdit:M,getDataEdit:E}),[M,E]),Y(Lt,{children:[Y(se,{id:r,field:i,classInLine:"allims-module-main",type:"form",styleInLine:{size:{height:{value:100,unit:"%"}}},getValues:a,ref:_,children:[Y(se,{id:"heading",role:"heading",classInLine:"allims-module-main-heading",children:[y(wh,{route:n}),y(se,{id:"actions",classInLine:"allims-module-actions",children:l&&(l==null?void 0:l.map(C=>C.fieldType==="enterDirection"?y(mw,{id:C.id,field:C.field,onClick:F=>function(z){h(z)}(F)},C.id):y(ke,{id:C.id,field:C.field,icon:{value:C.icon,size:{value:2,unit:"rem"}},text:{value:(C==null?void 0:C.acronym)||C.title},styleInLine:{size:{width:{value:48,unit:"px",min:48},height:{value:40,unit:"px"}}},onClick:()=>P(C)},C.id)))})]}),y(se,{id:"mainGrid",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y($h,{isLoading:o||d,id:`${r}Grid`,field:`${i}Grid`,ref:b,enterDirection:c,onCellFocus:s,isForm:u})})]}),y(br,{handleClose:()=>w({show:!1,field:"",items:[],title:""}),isOpen:f.show,id:"modal",field:"modal",header:y(se,{id:"modalTitle",styleInLine:{direction:"row",size:{width:{value:100,unit:"%"},height:{value:3,unit:"rem"}},align:{horizontal:"center"},padding:{left:{value:5,unit:"px"}}},children:y("h2",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.title})}),classInLine:"allims-lib-modal-definicoes",customHeight:"100%",children:y(vu,{id:r,field:f.field,items:f.items,params:{},getValues:async function(C){m(!0);const{data:F,success:z,message:D}=await lt({url:`/api/safe/data/form?field=${C}&module=${i}`});if(z)return D&&de(D),m(!1),F;_e(D),m(!1)},onSubmit:C=>async function(F,z){const D=er(),{success:B,message:Q}=await Cn({url:`/api/safe/data/form?field=${z}&module=${i}`,body:F});B?(Q?de(Q,D):kn(D),w({show:!1,field:"",items:[],title:""})):_e(Q,D)}(C,f.field),onCancel:async function(C){w({show:!1,field:"",items:[],title:""})}})}),y(br,{handleClose:()=>p({show:!1,field:"",items:[],title:"",cells:[]}),isOpen:S.show,id:"modalEdit",field:"modalEdit",header:y(se,{id:"modalTitle",styleInLine:{direction:"row",size:{width:{value:100,unit:"%"},height:{value:3,unit:"rem"}},align:{horizontal:"center"},padding:{left:{value:5,unit:"px"}}},children:y("h2",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:S.title})}),classInLine:S.field!=="entradaDeDados"?"allims-lib-modal-definicoes":"",customHeight:S.field!=="entradaDeDados"?"100%":S.title==="Editar"?"140px":"",children:y(vu,{id:r,field:S.field,items:S.items,params:{},getValues:async function(C){},onSubmit:C=>async function(F,z,D){var O;const B=er(),Q=[];D==null||D.forEach(Z=>{const ne=L(L({},Z),F);Q.push(ne)});const{success:T,data:A}=await N(Q,"edit");T?(kn(B),(O=b.current)==null||O.setGridValues(A),p({show:!1,items:[],field:"",title:"",cells:[]})):kn(B)}(C,S.field,S.cells),onCancel:async function(C){p({show:!1,field:"",items:[],title:"",cells:[]})}})}),v.show&&y(kw,{field:v.field,toggleOpen:()=>k({field:"",show:!1}),isOpen:v.show})]})});function wu(e){var D,B,Q;const z=e,{id:t,field:n,title:r,classInLine:i,styleInLine:o,read:l,state:a,isGrid:s,backData:u,backStyle:c,backConfigs:h}=z,f=xe(z,["id","field","title","classInLine","styleInLine","read","state","isGrid","backData","backStyle","backConfigs"]),w=I.exports.useRef(null),{setValue:v,setError:k,getFieldState:S}=nn(),p=S(n),[d,m]=I.exports.useState(!1),[g,x]=I.exports.useState({actions:[],filters:[],main:{},tools:[]}),[b,_]=I.exports.useState({}),[E,M]=I.exports.useState({}),[P,N]=I.exports.useState({width:55,size:0}),[C,F]=I.exports.useState({show:!1,item:{field:"",id:"",icon:"",title:""}});return I.exports.useEffect(()=>{d&&async function(){const T=`/api/safe/engine/form?field=${h.field}`,{data:A,success:O,message:Z}=await lt({url:T});O?(Z&&de(Z),x(A)):_e(Z)}()},[d]),Y(Lt,{children:[y("div",{id:`${t}-input-modal-edit`,className:`allims-lib-input-modal-fast-container ${i} ${(D=p==null?void 0:p.error)!=null&&D.message?"allims-lib-input-error ":""}`,style:ut(o),"data-state":a,children:Y("div",{className:"allims-lib-input-modal-fast "+(r?" allims-lib-input-label allims-lib-input-modal-edit-render ":""),"data-state":a,children:[y(dn,L({id:t,field:`${n}Content`,readOnly:!0,read:l,isGrid:s,backData:u,backStyle:c,backConfigs:h},f)),y(Cr,{id:`${t}-input-hidden`,field:n}),y("button",{type:"button",className:"material-symbols-outlined",onClick:()=>{m(!d)},children:"search"}),r&&y(tn,{id:`${t}-inp`,field:n,children:r})]})}),((Q=(B=g==null?void 0:g.main)==null?void 0:B.field)==null?void 0:Q.length)>0&&y(br,{handleClose:()=>m(!1),isOpen:d,id:"modal",field:"modal",classInLine:"allims-lib-input-modal-fast-backdrop-dialog",children:Y(So.exports.Split,{initialPrimarySize:"100%",minSecondarySize:`${P.width}px`,splitterSize:`${P.size}px`,children:[Y(se,{id:"listModal",classInLine:"allims-module",styleInLine:{direction:"column",size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(Cc,{route:g.main.title,id:g.main.id,field:g.main.field,getDefaultValues:async function(T){let A=`/api/safe/data/grid?field=${T}`;A+=Xn(u),A+=Xn(E);const{data:O,success:Z,message:ne}=await lt({url:A});return Z?(ne&&de(ne),{[`${T}Grid`]:O}):(_e(ne),null)},onCellFocus:_,actions:g.actions,ref:w,isForm:!0}),Y(se,{id:"footerModal",styleInLine:{direction:"row",size:{width:{value:100,unit:"%"},height:{value:5,unit:"rem"}},background:{color:"#f1f1f1"},align:{horizontal:"space-between"},padding:{left:{value:5,unit:"px"}}},children:[y(ke,{id:"cancel",field:"cancel",type:"button",classInLine:"allims-lib-button-cancel",text:{value:"Cancelar"},onClick:function(){x({}),m(!1)}}),y(ke,{field:"ok",id:"ok",type:"button",classInLine:"allims-lib-button-ok",text:{value:"Ok"},onClick:async function(){var ve;const T=er(),A=(ve=w.current)==null?void 0:ve.getDataEdit();let O=`/api/safe/data/grid?field=${g.main.field}`;O+=Xn(u);const{data:Z,success:ne,message:ce}=await Cn({url:O,body:A[`${g.main.field}Grid`]});ne?(x({}),v(n,Z.value),v(`${n}Content`,Z.valueContent),ce?de(ce,T):kn(T),m(!1)):_e(ce,T)}})]})]}),Y(se,{id:"toolbar",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(ho,{items:g.tools,handleItem:function(T){C.item.id!==T.id?(F({item:T,show:!0}),N({width:350,size:7})):(F({show:!1,item:{id:"",field:"",icon:"",title:""}}),N({width:55,size:0}))}}),C.show&&Y(se,{id:"toolbar-container",classInLine:"allims-lib-toolbar-container",children:[y(se,{id:"toolbar-container-title",classInLine:"allims-lib-toolbar-container-title",content:{value:C.item.title}}),y(se,{id:"toolbar-container-content",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y(ya,{getValues:async function(T,A){return E},id:C.item.id,field:C.item.field,params:{},getFields:async function(T){return{main:{id:T,field:T,fields:g.filters,formType:"register"}}},onCancel:async function(T){M({}),setTimeout(()=>{var A;(A=w.current)==null||A.handleRefreshEdit()},300)},onSubmit:async function(T,A){M(T),setTimeout(()=>{var O;(O=w.current)==null||O.handleRefreshEdit()},300)}})})]})]})]})})]})}yi(`.allims-lib-grid-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.allims-lib-grid-edit {
  width: 100%;
  height: 100%;
  min-height: 10rem;
  overflow: auto;
  font-size: 1rem;
}

.allims-lib-grid-edit-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.allims-lib-grid-edit-scroll {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.allims-lib-grid-edit-scroll-pivot {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #1c1c1c;
}

.allims-lib-grid-edit-table {
  position: sticky;
  z-index: 4;
  background-color: #e3e3e3;
}

.allims-lib-grid-edit-column {
  position: sticky;
  z-index: 3;
  background-color: #e3e3e3;
}

.allims-lib-grid-edit-row {
  position: sticky;
  z-index: 2;
  background-color: #e3e3e3;
}
.allims-lib-grid-edit-row:focus {
  background-color: #0a6e90;
  color: #fff;
}
.allims-lib-grid-edit-row:hover {
  border: 0.5px solid #0a6e90;
}

.allims-lib-grid-edit-cell {
  background-color: #ffffff;
}
.allims-lib-grid-edit-cell:focus {
  background-color: #0a6e90;
  color: #fff;
}
.allims-lib-grid-edit-cell:hover {
  cursor: pointer !important;
  border: 0.5px solid #0a6e90;
}
.allims-lib-grid-edit-cell:hover input {
  height: 24px;
  cursor: pointer !important;
  border-radius: 0 !important;
}

.allims-lib-grid-edit-container {
  padding: 0 0.5rem;
  margin: 0;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.allims-lib-grid-edit-container:focus {
  text-align: left;
}

.allims-lib-input-modal-fast {
  width: 100%;
  height: 25px;
  display: flex;
  position: relative;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
}
.allims-lib-input-modal-fast input {
  font-size: 1rem;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-wrap: nowrap;
}
.allims-lib-input-modal-fast button {
  display: none;
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #1c1c1c;
}
.allims-lib-input-modal-fast:hover input {
  padding-right: 15px;
}
.allims-lib-input-modal-fast:hover button {
  display: block;
  color: #cdcdcd;
}

.allims-lib-grid-edit-container {
  padding: 0;
}

.allims-lib-grid-edit-cell-focus {
  background-color: #0a6e90 !important;
  color: #fff;
  height: 25px !important;
}
.allims-lib-grid-edit-cell-focus input {
  background-color: #0a6e90;
  color: #fff;
  border-radius: 0;
  height: 24px !important;
}
.allims-lib-grid-edit-cell-focus button {
  color: #cdcdcd;
}

.allims-lib-grid-edit-cell-range {
  background-color: #0a6e90 !important;
  color: #fff;
}

.allims-lib-grid-edit-row-focus {
  background-color: #0a6e90;
  color: #fff;
}

.allims-lib-grid-edit-cell-hover {
  border: 0.5px solid #0a6e90;
}

.allims-lib-grid-edit-actions-buttons {
  display: flex;
  align-items: center;
  z-index: 999;
  position: absolute;
  height: 25px;
}
.allims-lib-grid-edit-actions-buttons button {
  outline: none;
  border: none;
  background-color: transparent;
  color: #cdcdcd;
  font-size: 15px;
}

.allims-lib-grid-edit-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  background-color: #e3e3e3;
  padding: 0 5px;
  color: #606060;
}
.allims-lib-grid-edit-footer div span {
  margin-right: 5px;
}
.allims-lib-grid-edit-footer div span + span {
  margin-left: 5px;
}

.allims-lib-input-editable {
  background-color: #f5f5f5 !important;
  border: 0.5px solid rgb(10, 110, 144);
  color: #1c1c1c !important;
  padding: 0 5px !important;
}

[data-state=disabled] {
  background-color: #c8c8c8 !important;
}
[data-state=disabled] button {
  display: none !important;
}
[data-state=disabled]:hover {
  background-color: #c8c8c8 !important;
  color: #1c1c1c !important;
}
[data-state=disabled]:hover button {
  display: none !important;
}

[data-state=empty] {
  background-color: #969696 !important;
}
[data-state=empty] button {
  display: none !important;
}
[data-state=empty]:hover {
  background-color: #969696 !important;
  color: #1c1c1c !important;
}
[data-state=empty]:hover button {
  display: none !important;
}

.allims-lib-input-disabled-select {
  background-color: #d4d4d4 !important;
  height: 25px !important;
}
.allims-lib-input-disabled-select input {
  background-color: #d4d4d4 !important;
  border-radius: 0;
}
.allims-lib-input-disabled-select:hover {
  background-color: #c0bebe !important;
  color: #1c1c1c !important;
}`);function _w(e){const u=e,{id:t,field:n,value:r,backData:i,backConfigs:o,isEdit:l,handleSaveCell:a}=u,s=xe(u,["id","field","value","backData","backConfigs","isEdit","handleSaveCell"]);return["select"].includes(o.dataType)?y(fw,L({id:t,field:`${n}.value`,backConfigs:o,backData:i,read:(i==null?void 0:i.state)==="disabled"||!l,isGrid:!0,url:`/api/safe/data/select?field=${o.field}`,handleSaveCell:a},s)):["modalEdit"].includes(o==null?void 0:o.dataType)?y(wu,L({id:t,field:`${n}.value`,backConfigs:o,backData:i,read:(i==null?void 0:i.state)==="disabled"||!l,isGrid:!0},s)):["modalFast"].includes(o==null?void 0:o.dataType)?y(yu,L({id:t,field:`${n}.value`,backConfigs:o,backData:i,read:(i==null?void 0:i.state)==="disabled"||!l,isGrid:!0},s)):["dateTime"].includes(o.dataType)?y(pu,L({id:t,field:`${n}.value`,backConfigs:o,backData:i,read:i.state==="disabled"||!l,isGrid:!0},s)):y(dn,L({id:t,field:`${n}.value`,read:(i==null?void 0:i.state)==="disabled"||!l,isGrid:!0,backConfigs:o,backData:i},s))}function Sw(e){const v=e,{field:t,backData:n,frontRow:r,frontCol:i,invertGrid:o,value:l,type:a,styles:s,header:u,fixedLeft:c,onClickColumn:h}=v,f=xe(v,["field","backData","frontRow","frontCol","invertGrid","value","type","styles","header","fixedLeft","onClickColumn"]);let w="";if(w+=u?a==="table"?" allims-lib-grid-edit-table ":" allims-lib-grid-edit-column ":c>=0?" allims-lib-grid-edit-row ":" allims-lib-grid-edit-cell ",["table","column"].includes(a)){let k={"data-frontCol":i,"data-frontRow":r};return n&&Object.keys(n).forEach(S=>{k=te(L({},k),{[`data-${S}`]:n[S]})}),Y("div",te(L({id:`${t}-${r}-${i}`,className:`allims-lib-grid-edit-container ${w} `,style:{width:(s==null?void 0:s.width)||100,height:25,top:!o&&["table","row"].includes(a)?25*(i+1)-25:0,left:o?c:0},"data-type":a||"",title:String(l),onClick:h},k),{children:[y("span",{title:String(l),className:"allims-lib-grid-edit-label",children:l}),y("div",{className:""})]}))}return y(_w,L({id:`${t}-${r}-${i}`,field:`${t}.${r}.${i}`,classInLine:`allims-lib-grid-edit-container ${w}`,styleInLine:{size:{width:{value:(s==null?void 0:s.width)||0,unit:"px"},height:{value:25,unit:"px"}},absolute:{top:!o&&["table","row"].includes(a)?25*(i+1)-25:0,left:o?c:0}},frontRow:r,frontCol:i,backData:n,type:a,value:l,state:a==="row"?"disabled":n==null?void 0:n.state},f))}function Ew(e){var s;const a=e,{frontRow:t,column:n,row:r,widthRow:i,cellEdit:o}=a,l=xe(a,["frontRow","column","row","widthRow","cellEdit"]);return y(Lt,{children:(s=Object.keys(r))==null?void 0:s.map((u,c)=>{var h,f,w,v,k,S,p,d,m;return y(Sw,L({value:(h=r[u])==null?void 0:h.value,type:(f=r[u])==null?void 0:f.type,backStyles:L(L({},(w=n[u])==null?void 0:w.styles),(v=r[u])==null?void 0:v.styles),backConfigs:L(L({},(k=n[u])==null?void 0:k.configs),(S=r[u])==null?void 0:S.configs),backData:L(L({},(p=n[u])==null?void 0:p.data),(d=r[u])==null?void 0:d.data),frontRow:t,frontCol:c,styles:{width:i[c]},header:t===0,fixedLeft:["row","table"].includes((m=r[u])==null?void 0:m.type)?i[c-1]||0:-1,isEdit:o.frontRow===t&&o.frontCol===c},l),`${t}-${c}`)})})}const Cw=I.exports.forwardRef((e,t)=>{var j,W,ee,oe,X,V;const{field:n,keyName:r="id",isLoading:i=!1,onCellFocus:o,enterDirection:l,isForm:a=!1}=e,{control:s,watch:u,setError:c,clearErrors:h,setValue:f,getValues:w}=nn(),[v,k]=I.exports.useState([]),[S,p]=I.exports.useState(!1),{fields:d,update:m}=Xm({name:n,control:s,keyName:r}),[g,x]=I.exports.useState(!0),[b,_]=I.exports.useState({}),[E,M]=I.exports.useState({}),P=_h(b,500);function N($){var H,G;try{["disabled","empty"].includes(((G=(H=$.target)==null?void 0:H.dataset)==null?void 0:G.state)||"")?$.target.classList.add("allims-lib-input-disabled-select"):$.target.classList.add("allims-lib-grid-last-focus")}catch(U){console.error("Error Focus",U)}}function C($){try{const H=$.target,{frontrow:G=0,frontcol:U=0,rowid:K="",colid:le="",cellid:fe="",state:ge="",initValue:me=""}=H.dataset;switch($.key){case"Alt":case"Control":case"Shift":break;case V1:$.preventDefault();break;case F1:Q(g?+G:+G-1,g?+U-1:+U);break;case M1:Q(g?+G:+G+1,g?+U+1:+U);break;case A1:Q(g?+G-1:+G,g?+U:+U-1);break;case j1:Q(g?+G+1:+G,g?+U:+U+1);break;case U1:$.preventDefault(),l==="left"?Q(g?+G:+G-1,g?+U-1:+U):l==="right"?Q(g?+G:+G+1,g?+U+1:+U):l==="up"?Q(g?+G-1:+G,g?+U:+U-1):l==="down"&&Q(g?+G+1:+G,g?+U:+U+1);break;case B1:const $e=[],ue=v[+G];Object.keys(ue).forEach(We=>{$e.push(ue[We])}),$e[+U].value=me,m(1,$e),H.value=me,M({});break;default:ce({field:H.name,value:"",frontRow:Number(G),frontCol:Number(U),rowId:K,colId:le,cellId:fe,state:ge})}}catch(H){console.error("Error KeyDown",H)}}function F($){try{const H=$.target,{frontrow:G=0,frontcol:U=0,rowid:K="",colid:le="",cellid:fe="",state:ge=""}=H.dataset;ce({field:H.name,value:"",indexX:Number(G),indexY:Number(U),rowId:K,colId:le,cellId:fe,state:ge})}catch(H){console.error("Error Double Click",H)}}function z($){try{if($.target.tagName.toLowerCase().includes("input")){const H=$.target;if($.altKey||$.ctrlKey)ne(H);else if($.shiftKey){const G=document.getElementsByClassName("allims-lib-grid-last-focus")[0],{frontrow:U=0,frontcol:K=0}=G.dataset,{frontrow:le=0,frontcol:fe=0}=H.dataset;if(+fe>=+K)for(let ge=+K;ge<=+fe;ge++)for(let me=+U;me<=+le;me++)document.getElementById(`${n}-${me}-${ge}`).classList.add("allims-lib-grid-edit-cell-range")}else{const{frontrow:G=0,frontcol:U=0,rowid:K="",colid:le="",cellid:fe="",state:ge=""}=H.dataset;Z(),ne(H),_({field:H.name,indexX:Number(G),indexY:Number(U),rowId:K,colId:le,cellId:fe,state:ge,value:u(H.name),error:H.dataset.error}),H!=null&&H.select&&H.select(),G==E.frontRow&&U==E.frontCol||M({})}(function(G){var U;try{const K=document.getElementsByClassName("allims-lib-grid-last-focus");Array.from(K).forEach(le=>{le.classList.remove("allims-lib-grid-last-focus")}),["disabled","empty"].includes(((U=G==null?void 0:G.dataset)==null?void 0:U.state)||"")?G.classList.add("allims-lib-input-disabled-last-select"):G.classList.add("allims-lib-grid-last-focus")}catch(K){console.error("Error cleanCellLastFocus ",K)}})(H)}}catch(H){console.error("Error Click",H)}}function D($){try{$.altKey||$.shiftKey||$.ctrlKey||Z();let H=$.target;["span"].includes(H.tagName.toLowerCase())&&(H=H.parentElement);const{frontcol:G=0,type:U}=H.dataset;if(U==="table")return;for(let K=1;K<=v.length-1;K++){const le=document.getElementById(`${n}-${K}-${G}`);le&&B(le)}}catch(H){console.error("Error Click Column",H)}}function B($){$.tagName.toLowerCase().includes("div")&&($==null?void 0:$.firstElementChild)?B($.firstElementChild):$.classList.add("allims-lib-grid-edit-cell-range")}function Q($,H){var K,le,fe;const G=`${n}-${$}-${H}`,U=document.getElementById(G);(U==null?void 0:U.tagName)==="DIV"?(fe=(le=(K=U.firstChild)==null?void 0:K.firstChild)==null?void 0:le.firstChild)==null||fe.focus():(U==null||U.scrollIntoView(),U==null||U.focus())}async function T($){var H,G;try{if(n==="entradaDeDadosListaGrid"){const U=$.target;if(U.dataset.initValue!="null"&&U.value!=U.dataset.initValue&&!["disabled","empty"].includes(((H=U.dataset)==null?void 0:H.state)||"")&&!["modalFast","modalEdit"].includes(((G=U.dataset)==null?void 0:G.datatype)||"")){U.dataset.initValue=U.value;const K={value:U.value,rowId:U.dataset.rowid,cellId:U.dataset.cellid,colId:U.dataset.colid};await O(K,U)}}$.target.dataset.initValue=$.target.value}catch(U){console.error("Error Blur",U)}}async function A($){const H=document.getElementById($.field);await O({value:$.value,valueContent:$.content,cellId:$["data-cellid"],colId:$["data-colid"],rowId:$["data-rowid"]},H)}async function O($,H){if(!a){const{data:G,success:U,message:K}=await Cn({url:"/api/safe/data/cells?field=entradaDeDadosLista&action=edit",body:[$]});U?(K&&de(K),function(le,fe){le.forEach(ge=>{ge.error?c(fe.name,{message:ge.error}):h(fe.name)})}(G,H)):_e(K)}}function Z(){try{const $=document.getElementsByClassName("allims-lib-grid-edit-cell-focus");Array.from($).forEach(U=>{U.classList.remove("allims-lib-grid-edit-cell-focus")});const H=document.getElementsByClassName("allims-lib-grid-edit-cell-range");Array.from(H).forEach(U=>{U.classList.remove("allims-lib-grid-edit-cell-range")});const G=document.getElementsByClassName("allims-lib-input-disabled-select");Array.from(G).forEach(U=>{U.classList.remove("allims-lib-input-disabled-select")})}catch($){console.error("Error cleanCellSelect ",$)}}function ne($){var H,G,U,K,le,fe,ge,me,$e,ue,We,Rt,ae,et,It,Ge,Dt,St;try{(G=(H=$.parentElement)==null?void 0:H.className)!=null&&G.includes("label")?["disabled","empty"].includes(((le=(K=(U=$.parentElement)==null?void 0:U.parentElement)==null?void 0:K.parentElement)==null?void 0:le.dataset.state)||"")?$.classList.add("allims-lib-input-disabled-select"):(me=(ge=(fe=$.parentElement)==null?void 0:fe.parentElement)==null?void 0:ge.parentElement)==null||me.classList.add("allims-lib-grid-edit-cell-focus"):(ue=($e=$.parentElement)==null?void 0:$e.className)!=null&&ue.includes("switch")?["disabled","empty"].includes(((We=$.parentElement)==null?void 0:We.dataset.state)||"")?$.classList.add("allims-lib-input-disabled-select"):(Rt=$.parentElement)==null||Rt.classList.add("allims-lib-grid-edit-cell-focus"):(et=(ae=$.parentElement)==null?void 0:ae.className)!=null&&et.includes("modal")?["disabled","empty"].includes(((Ge=(It=$.parentElement)==null?void 0:It.parentElement)==null?void 0:Ge.dataset.state)||"")?$.classList.add("allims-lib-input-disabled-select"):(St=(Dt=$.parentElement)==null?void 0:Dt.parentElement)==null||St.classList.add("allims-lib-grid-edit-cell-focus"):["disabled","empty"].includes(($==null?void 0:$.dataset.state)||"")?$.classList.add("allims-lib-input-disabled-select"):$.classList.add("allims-lib-grid-edit-cell-focus")}catch(fn){console.error("Error addClassFocus ",fn)}}function ce($){M($)}async function ve($,H){if(H.tagName.toLowerCase().includes("div")&&(H==null?void 0:H.firstElementChild))return await ve($,H.firstElementChild);{const{frontrow:G=0,frontcol:U=0}=H.dataset,K=v[+G][+U];return te(L(L({},H.dataset),K),{nameField:`${$}.${G}.${U}`,field:`${$}.${G}.${U}.value`})}}async function Oe($,H){const G=Array.from(H);return await Promise.all(G.map(async U=>await ve($,U)))}function Me(){const $=[],H=u(n);H&&(H==null||H.forEach(G=>{let U={};Object.keys(G).forEach(K=>{U=te(L({},U),{[K]:G[K]})}),$.push(U)})),k($)}const ct=I.exports.useCallback(()=>{x(!g)},[g,d]),On=I.exports.useCallback(()=>b,[b,d]),ir=I.exports.useCallback(async($=!0)=>{var fe;const H=document.getElementsByClassName("allims-lib-grid-edit-cell-range"),G=document.getElementsByClassName("allims-lib-grid-edit-cell-focus"),U=document.getElementsByClassName("allims-lib-input-disabled-select");let K=[];if(H!=null&&H.length)K=await Oe(n,H);else if(G!=null&&G.length)K=await Oe(n,G);else{if(!(U!=null&&U.length))return de("Selecione ao menos uma c\xE9lula"),{success:!1,fields:[],data:[]};K=await Oe(n,U)}if(K.length&&K.filter(ge=>{var me;return(ge==null?void 0:ge.ruleid)!==((me=K[0])==null?void 0:me.ruleid)}).length>0&&$)return de("Regras diferentes!"),{success:!1,fields:[],data:[]};let le={};return Object.keys(v[0]).forEach(ge=>{var $e,ue,We,Rt,ae,et,It,Ge;const me=v[0][ge]||{};K[0]&&(($e=me==null?void 0:me.data)==null?void 0:$e.colField)&&me.data.colField===K[0].colfield&&(le={configs:L(L({},me==null?void 0:me.configs),(ue=K[0])==null?void 0:ue.configs),data:L(L({},me==null?void 0:me.data),(We=K[0])==null?void 0:We.data),styles:me==null?void 0:me.styles,value:(Rt=K[0])==null?void 0:Rt.value,valueContent:(ae=K[0])==null?void 0:ae.valueContent,field:"value",frontCol:(et=K[0])==null?void 0:et.frontcol,frontRow:(It=K[0])==null?void 0:It.frontrow,nameField:(Ge=K[0])==null?void 0:Ge.nameField,title:"Valor"})}),Object.keys(le).length?(fe=le==null?void 0:le.configs)!=null&&fe.batchEdit?{success:!0,fields:[le],data:K}:(de("N\xE3o \xE9 permitido edi\xE7\xE3o em lote!"),{success:!1,fields:[],data:[]}):(de("Campo n\xE3o localizado!"),{success:!1,fields:[],data:[]})},[v,d]),R=I.exports.useCallback(($,H)=>{let G=!1;$.forEach(U=>{if(U.error)c(U.field,{message:U.error});else if(H==="disable"||H==="enable"){const K=u(U.nameField);f(U.nameField,te(L({},K),{data:te(L({},K.data),{state:U.state})})),h(U.field),f(U.field,U.value),U.hasOwnProperty("valueContent")&&f(`${U.field}Content`,U.valueContent),G=!0}else h(U.field),f(U.field,U.value),U.hasOwnProperty("valueContent")&&f(`${U.field}Content`,U.valueContent)}),G&&p(!0),Z()},[v,d]);if(I.exports.useEffect(()=>{o&&o(b)},[P]),I.exports.useEffect(()=>{S&&(Me(),p(!1))},[S]),I.exports.useEffect(()=>(Me(),()=>{k([])}),[d]),I.exports.useImperativeHandle(t,()=>({togglePivot:ct,getCellFocus:On,getCellsSelected:ir,setGridValues:R}),[ct,On,ir,v,R,d]),i)return y("div",{className:"allims-lib-grid-container",children:y(cn,{})});if(v!=null&&v.length){let $={};const H=v[0];let G=0;const U=g?25*(v.length-1):25*Object.keys(H).length,K=((W=(j=H[0])==null?void 0:j.styles)==null?void 0:W.maxWidth)||((oe=(ee=H[0])==null?void 0:ee.styles)==null?void 0:oe.width)||((V=(X=H[0])==null?void 0:X.styles)==null?void 0:V.minWidth)||100;return Array.from({length:v.length}).forEach(()=>{G+=K}),Object.keys(H).forEach((le,fe)=>{$=te(L({},$),{[fe]:K})}),G-=K,g&&(G=0,$={},Object.keys(H).forEach((le,fe)=>{var me,$e,ue,We,Rt,ae;const ge=(($e=(me=H[le])==null?void 0:me.styles)==null?void 0:$e.width)||((We=(ue=H[le])==null?void 0:ue.styles)==null?void 0:We.maxWidth)||((ae=(Rt=H[le])==null?void 0:Rt.styles)==null?void 0:ae.minWidth)||100;G+=ge,$=te(L({},$),{[fe]:ge})})),Y("div",{className:"allims-lib-grid-container",children:[y("div",{className:"allims-lib-grid-edit",children:y("div",{className:g?" allims-lib-grid-edit-scroll ":" allims-lib-grid-edit-scroll-pivot ",style:{width:G,height:U},children:v&&(v==null?void 0:v.map((le,fe)=>y(Ew,{frontRow:fe,invertGrid:g,field:n,row:le,column:H,widthRow:$,cellFocus:b,cellEdit:E,onFocus:N,onKeyDown:C,onBlur:T,onDoubleClick:F,onClick:z,onClickColumn:D,handleSaveCell:A},`index-${fe}`)))})}),Y("footer",{className:"allims-lib-grid-edit-footer",children:[Y("div",{children:[Y("span",{children:["Total: ",(v==null?void 0:v.length)-1]}),"|",Y("span",{children:["Valor: ",b.value||y(Lt,{children:"(vazio)"})]}),(b==null?void 0:b.error)&&Y(Lt,{children:["| ",Y("span",{children:["Erro: ",b.error]})]}),(b==null?void 0:b.legend)&&Y(Lt,{children:["| ",Y("span",{children:["Legenda: ",b.legend]})]})]}),y("div",{})]})]})}return y("div",{className:"allims-lib-grid-container",children:y("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:y("h3",{children:"Sem dados!"})})})});var $h=Cw;function Tw(e){const{items:t,handleItem:n,handleSupport:r,handleHelp:i,handleInfo:o,handleUser:l,handleLogo:a,isLoading:s=!1}=e;return y(se,{id:"allims-background-image",styleInLine:{size:{width:{value:100,unit:"%"},height:{value:100,unit:"%"}},padding:{top:{value:10,unit:"%"}}},children:Y(se,{id:"menu",styleInLine:{direction:"column",align:{vertical:"space-between",horizontal:"center"},background:{color:"#fff"},size:{width:{value:100,unit:"%",max:800},height:{value:100,unit:"%"}},border:{top:{round:5}},transparency:10,padding:{top:{value:5,unit:"%"}}},children:[y(se,{id:"title",role:"heading",content:{value:"Menu",size:{value:1.5,unit:"rem"},transform:"uppercase"},styleInLine:{size:{height:{value:3,unit:"rem"}}}}),y(se,{id:"main",styleInLine:{size:{height:{value:100,unit:"%"}},align:{vertical:"start",horizontal:"space-around"},wrap:"wrap"},children:s?y(cn,{}):t&&t.map(u=>{var c;return y(ke,{id:u.id,field:u.field,icon:{value:u.icon,size:{value:5,unit:"rem"}},text:{value:u.title,size:{value:1,unit:"rem"}},styleInLine:{size:{height:{value:10,unit:"rem"},width:{value:10,unit:"rem"}},margin:{top:{value:5,unit:"px"}}},disabled:!((c=u==null?void 0:u.route)!=null&&c.length),onClick:()=>n(u)},u.id)})}),Y(se,{id:"footer",styleInLine:{size:{height:{value:5,unit:"rem"}},align:{horizontal:"space-between",vertical:"center"}},children:[Y(se,{id:"footer-left",styleInLine:{size:{height:{value:100,unit:"%"}},align:{horizontal:"start",vertical:"center"}},children:[y(ke,{id:"support",field:"support",icon:{value:"support_agent",size:{value:3,unit:"rem"}},text:{value:"Suporte",size:{value:.7,unit:"rem"}},styleInLine:{size:{height:{value:100,unit:"%"}}},onClick:r}),y(ke,{id:"help",field:"help",icon:{value:"help",size:{value:3,unit:"rem"}},text:{value:"Ajuda",size:{value:.7,unit:"rem"}},styleInLine:{size:{height:{value:100,unit:"%"}}},onClick:i}),y(ke,{id:"info",field:"info",icon:{value:"info",size:{value:3,unit:"rem"}},text:{value:"Informa\xE7\xF5es",size:{value:.7,unit:"rem"}},styleInLine:{size:{height:{value:100,unit:"%"}}},onClick:o}),y(ke,{id:"user",field:"user",icon:{value:"account_circle",size:{value:3,unit:"rem"}},text:{value:"Perfil",size:{value:.7,unit:"rem"}},styleInLine:{size:{height:{value:100,unit:"%"}}},onClick:l})]}),y(se,{id:"footer-right",styleInLine:{size:{height:{value:100,unit:"%"}},align:{horizontal:"end",vertical:"center"}},children:y(di,{id:"allims-logo-self",field:"allims-logo-self",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:6,unit:"rem"}}},onClick:a})})]})]})})}function Lw(e){const{onSubmit:t,onForgot:n,onError:r=()=>{},version:i="1.00.00"}=e;return y(se,{id:"allims-background-image",styleInLine:{direction:"column-reverse",size:{width:{value:100,unit:"%"},height:{value:100,unit:"%"}},align:{vertical:"start",horizontal:"start"},border:{top:{round:0,size:0}}},children:Y(se,{id:"background",styleInLine:{direction:"column",background:{color:"hsl(0, 100%, 100%)"},transparency:10,size:{width:{value:40,unit:"%",max:300,min:150},height:{value:100,unit:"%"}},gap:{row:{value:15,unit:"px"}},border:{top:{round:0,size:0}},padding:{left:{value:1,unit:"rem"}},align:{vertical:"start",horizontal:"start"}},type:"form",onSubmit:t,onError:r,children:[y(se,{id:"version",content:{value:`v${i}`,color:"#cdcdcd"},styleInLine:{direction:"row-reverse",align:{vertical:"center",horizontal:"end"},size:{width:{value:100,unit:"%"},height:{value:20,unit:"px"}},border:{top:{round:0,size:0}}}}),y(se,{id:"allims-logo-company",styleInLine:{size:{width:{value:100,unit:"%"},height:{value:20,unit:"%"}},border:{top:{round:0,size:0}}}}),y(ga,{id:"user",title:"Usu\xE1rio",validations:{required:!0},field:"user"}),y(Rw,{id:"password",title:"Senha",validations:{required:!0},field:"password"}),y(di,{id:"submit-loginid",field:"submit-login",type:"submit",styleInLine:{background:{color:"blue"},size:{width:{value:100,unit:"%"}}},children:y("span",{style:{color:"#fff"},children:"Entrar"})}),y(zw,{id:"forgot",field:"forgot",type:"button",onClick:function(){},text:{value:"Esqueceu a senha?",size:{value:10,unit:"px"}},styleInLine:{size:{height:{value:2.5,unit:"rem"}}}})]})})}const Ow=[{id:"menu",field:"menu",icon:"menu",title:"Menu",type:"button"}];let Yo=!0;function Nw(e){const{id:t,field:n,menuItems:r,toolItems:i,children:o,handleMenu:l,getToolFields:a,getToolValues:s,onSubmiTool:u,onCancelTool:c,routeParams:h,paramsTool:f}=e,w=_h(h,1e3),[v,k]=I.exports.useState({}),[S,p]=I.exports.useState({primary:"calc(100% - 55px)",secondary:55,size:0}),[d,m]=I.exports.useState({show:!1,item:{field:"",icon:"",id:"",title:"",type:""}});return I.exports.useEffect(()=>{(h==null?void 0:h.route)&&Yo&&(async function(g){g.substring(g.indexOf("?")+1,g.length).split("&").forEach((x,b)=>{setTimeout(()=>{const _=x.split("=")[0],E=x.split("=")[1],M=document.getElementById(E);if(M)switch(_){case"click":M.click();break;case"focus":M.focus()}},2e3*b)})}(h.route),Yo=!1)},[w]),I.exports.useEffect(()=>{if(n){const g=r==null?void 0:r.find(x=>x.field===n);g&&k(g),Yo=!0}return()=>{k({}),p({primary:"calc(100% - 55px)",secondary:55,size:0}),m({show:!1,item:{id:"",icon:"",title:"",field:"",type:""}}),Yo=!1}},[n]),Y(se,{id:"allims-module",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(ho,{itemsStart:Ow,items:r,itemsEnd:[],handleItem:function(g){p({primary:"calc(100% - 55px)",secondary:55,size:0}),m({show:!1,item:{field:"",icon:"",id:"",title:"",type:""}}),l(g)},defaultItem:v}),y(se,{id:"module",classInLine:"allims-module",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:Y(So.exports.Split,{initialPrimarySize:"100%",minPrimarySize:S.primary,minSecondarySize:`${S.secondary}px`,splitterSize:`${S.size}px`,children:[o,Y(se,{id:"toolbar",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:[y(ho,{items:i,handleItem:function(g){d.item.id!==g.id?(m({item:g,show:!0}),p({primary:"",secondary:350,size:7})):(m({show:!1,item:{field:"",icon:"",id:"",title:"",type:""}}),p({primary:"calc(100% - 55px)",secondary:55,size:0}))}}),d.show&&Y(se,{id:"toolbar-container",classInLine:"allims-lib-toolbar-container",children:[y(se,{id:"toolbar-container-title",classInLine:"allims-lib-toolbar-container-title",content:{value:d.item.title}}),y(se,{id:"toolbar-container-content",styleInLine:{size:{height:{value:100,unit:"%"}}},children:y(ya,{field:d.item.field,id:d.item.id,params:f,getFields:a,getValues:s,onSubmit:u,onCancel:c})})]})]})]})})]})}function zw(e){return y(di,te(L({},e),{classInLine:"allims-lib-button-link",children:y(Eh,L({},e))}))}function Rw(e){const r=e,{title:t}=r,n=xe(r,["title"]);return Y("div",{style:ut(n.styleInLine),className:"allims-lib-input-label",children:[y(dn,te(L({},n),{type:"password"})),y(tn,{htmlFor:n.id,id:`${n.id}-text`,field:`${n.field}-text`,children:t})]})}const Pi=ha.create(),Iw={"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Accept:"application/json"};async function Fh(e){var r,i,o,l,a,s;const{url:t,body:n}=e;Pi.defaults.timeout=3e4,window.origin.includes("localhost")?Pi.defaults.baseURL=_o:Pi.defaults.baseURL=window.origin,Pi.defaults.headers.common.Authorization=((r=window.sessionStorage.getItem("@allims_token"))==null?void 0:r.replaceAll('"',""))||"";try{const u=await Pi.post(t,n,{headers:Iw});return{success:!0,data:u.data.data,message:((i=u.data)==null?void 0:i.warn)||null}}catch(u){return u!=null&&u.response?{success:!1,data:null,message:((l=(o=u==null?void 0:u.response)==null?void 0:o.data)==null?void 0:l.error)||((s=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:s.warn)||"Erro, verifique com o suporte!"}:(console.error("Error",u),{success:!1,data:null,message:"Lamentamos, houve um erro, verifique com o suporte!"})}}const ti=ha.create();async function Dw(e){const{url:t,login:n,password:r,dialect:i="pt-BR"}=e;ti.defaults.timeout=3e4,window.origin.includes("localhost")?ti.defaults.baseURL=_o:ti.defaults.baseURL=window.origin;const{data:o,success:l,message:a}=await Fh({url:t,body:{login:n,password:r,dialect:i}});return l?(window.sessionStorage.setItem("@allims_token",o==null?void 0:o.token),window.localStorage.setItem("@allims_dialect",i),{token:o.token,logged:!0}):{token:"",logged:!1,message:a}}async function Pw(e){const{url:t,login:n,dialect:r="pt-BR"}=e;ti.defaults.timeout=3e4,window.origin.includes("localhost")?ti.defaults.baseURL=_o:ti.defaults.baseURL=window.origin;const{success:i}=await Fh({url:t,body:{login:n,dialect:r}});return!!i}function Ql(){return Ql=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ql.apply(this,arguments)}var cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cr||(cr={}));var Nf=function(e){return e};function $w(e){e===void 0&&(e={});var t=e,n=t.initialEntries,r=n===void 0?["/"]:n,i=t.initialIndex,o=r.map(function(m){var g=Nf(Ql({pathname:"/",search:"",hash:"",state:null,key:If()},typeof m=="string"?kr(m):m));return g}),l=zf(i==null?o.length-1:i,0,o.length-1),a=cr.Pop,s=o[l],u=Rf(),c=Rf();function h(m){return typeof m=="string"?m:Fw(m)}function f(m,g){return g===void 0&&(g=null),Nf(Ql({pathname:s.pathname,search:"",hash:""},typeof m=="string"?kr(m):m,{state:g,key:If()}))}function w(m,g,x){return!c.length||(c.call({action:m,location:g,retry:x}),!1)}function v(m,g){a=m,s=g,u.call({action:a,location:s})}function k(m,g){var x=cr.Push,b=f(m,g);function _(){k(m,g)}w(x,b,_)&&(l+=1,o.splice(l,o.length,b),v(x,b))}function S(m,g){var x=cr.Replace,b=f(m,g);function _(){S(m,g)}w(x,b,_)&&(o[l]=b,v(x,b))}function p(m){var g=zf(l+m,0,o.length-1),x=cr.Pop,b=o[g];function _(){p(m)}w(x,b,_)&&(l=g,v(x,b))}var d={get index(){return l},get action(){return a},get location(){return s},createHref:h,push:k,replace:S,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(g){return u.push(g)},block:function(g){return c.push(g)}};return d}function zf(e,t,n){return Math.min(Math.max(e,t),n)}function Rf(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function If(){return Math.random().toString(36).substr(2,8)}function Fw(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,l=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function kr(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Mh=I.exports.createContext(null),Tc=I.exports.createContext(null),va=I.exports.createContext({outlet:null,matches:[]});function Tn(e,t){if(!e)throw new Error(t)}function Mw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,i=jh(r.pathname||"/",n);if(i==null)return null;let o=Ah(e);Aw(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=Yw(o[a],i);return l}function Ah(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||Tn(!1),l.relativePath=l.relativePath.slice(r.length));let a=pr([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(i.index===!0&&Tn(!1),Ah(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Qw(a,i.index),routesMeta:s})}),t}function Aw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jw=/^:\w+$/,Uw=3,Vw=2,Bw=1,Ww=10,Hw=-2,Df=e=>e==="*";function Qw(e,t){let n=e.split("/"),r=n.length;return n.some(Df)&&(r+=Hw),t&&(r+=Vw),n.filter(i=>!Df(i)).reduce((i,o)=>i+(jw.test(o)?Uw:o===""?Bw:Ww),r)}function Gw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Yw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=qw({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;o.push({params:r,pathname:pr([i,c.pathname]),pathnameBase:Uh(pr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=pr([i,c.pathnameBase]))}return o}function qw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Kw(a[h]||""),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Xw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Kw(e,t){try{return decodeURIComponent(e)}catch{return e}}function Jw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:Zw(n,t):t,search:tb(r),hash:nb(i)}}function Zw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eb(e,t,n){let r=typeof e=="string"?kr(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let s=i.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}o=a>=0?t[a]:"/"}let l=Jw(r,o);return i&&i!=="/"&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function jh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),Uh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wa(){return I.exports.useContext(Tc)!=null}function Lc(){return wa()||Tn(!1),I.exports.useContext(Tc).location}function Oc(){wa()||Tn(!1);let{basename:e,navigator:t}=I.exports.useContext(Mh),{matches:n}=I.exports.useContext(va),{pathname:r}=Lc(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=I.exports.useRef(!1);return I.exports.useEffect(()=>{o.current=!0}),I.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=eb(a,JSON.parse(i),r);e!=="/"&&(u.pathname=pr([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,i,r])}function rb(){let{matches:e}=I.exports.useContext(va),t=e[e.length-1];return t?t.params:{}}function ib(e,t){wa()||Tn(!1);let{matches:n}=I.exports.useContext(va),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let l=Lc(),a;if(t){var s;let f=typeof t=="string"?kr(t):t;o==="/"||((s=f.pathname)==null?void 0:s.startsWith(o))||Tn(!1),a=f}else a=l;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",h=Mw(e,{pathname:c});return ob(h&&h.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:pr([o,f.pathname]),pathnameBase:f.pathnameBase==="/"?o:pr([o,f.pathnameBase])})),n)}function ob(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>I.exports.createElement(va.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function lb(e){let{basename:t,children:n,initialEntries:r,initialIndex:i}=e,o=I.exports.useRef();o.current==null&&(o.current=$w({initialEntries:r,initialIndex:i}));let l=o.current,[a,s]=I.exports.useState({action:l.action,location:l.location});return I.exports.useLayoutEffect(()=>l.listen(s),[l]),I.exports.createElement(ab,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}function Dr(e){Tn(!1)}function ab(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:o,static:l=!1}=e;wa()&&Tn(!1);let a=Uh(t),s=I.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:w="default"}=r,v=I.exports.useMemo(()=>{let k=jh(u,a);return k==null?null:{pathname:k,search:c,hash:h,state:f,key:w}},[a,u,c,h,f,w]);return v==null?null:I.exports.createElement(Mh.Provider,{value:s},I.exports.createElement(Tc.Provider,{children:n,value:{location:v,navigationType:i}}))}function sb(e){let{children:t,location:n}=e;return ib(bu(t),n)}function bu(e){let t=[];return I.exports.Children.forEach(e,n=>{if(!I.exports.isValidElement(n))return;if(n.type===I.exports.Fragment){t.push.apply(t,bu(n.props.children));return}n.type!==Dr&&Tn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=bu(n.props.children)),t.push(r)}),t}const ub=I.exports.createContext({});function cb({children:e}){const[t,n]=I.exports.useState({}),r=i=>{n(o=>L(L({},o),i))};return y(ub.Provider,{value:{formsData:t,setFormsValues:r},children:e})}function db(){const e=Oc(),[t,n]=I.exports.useState([]),[r,i]=I.exports.useState(!1);async function o(){i(!0);const{data:f,success:w,message:v}=await lt({url:"/api/safe/engine/menu"});w?(v&&de(v),setTimeout(()=>{n(f)},500)):_e(v),i(!1)}function l(f){f!=null&&f.route.length?e(`/module${f.route}`):de("Modulo n\xE3o est\xE1 dispon\xEDvel no momento!")}function a(){de("N\xE3o est\xE1 dispon\xEDvel no momento!")}function s(){de("N\xE3o est\xE1 dispon\xEDvel no momento!")}function u(){de("N\xE3o est\xE1 dispon\xEDvel no momento!")}function c(){de("N\xE3o est\xE1 dispon\xEDvel no momento!")}function h(){window.open("https://www.allims.com.br/")}return I.exports.useEffect(()=>(o(),()=>{n([]),i(!1)}),[]),t.length?y(Tw,{items:t,handleItem:l,handleHelp:a,handleInfo:s,handleSupport:u,handleUser:c,isLoading:r,handleLogo:h}):y(cn,{})}const fb="allims-web-2",pb="1.00.17",mb={dev:"vite",build:"tsc && vite build",preview:"vite preview",clean:"rm -rf node_modules && rm *.lock && rm -rf dist"},hb={"@developerAllims/allims-lib2":"../allims-lib-2",axios:"^0.27.2",react:"^18.0.0","react-dom":"^18.0.0","react-hook-form":"^7.30.0","react-router-dom":"^6.3.0"},gb={"@types/axios":"^0.14.0","@types/react":"^18.0.0","@types/react-dom":"^18.0.0","@vitejs/plugin-react":"^1.3.0",typescript:"^4.6.3",vite:"^2.9.7"};var yb={name:fb,private:!0,version:pb,scripts:mb,dependencies:hb,devDependencies:gb};function vb(){const e=window.sessionStorage.getItem("@allims_token"),t=Oc();async function n(i){const{user:o,password:l}=i,a=er("Validando dados..."),{logged:s,message:u}=await Dw({login:o,password:l,url:"/api/auth/login"});s?(dw("Sucesso, redirecionando...",a),t("/landing")):_e(u,a)}async function r(i){const{user:o}=i;await Pw({login:o,url:"/api/auth/forgot"})}return I.exports.useEffect(()=>{e&&t("/landing")},[]),y(Lw,{onSubmit:n,onForgot:r,version:yb.version})}function wb(){var P,N,C,F;const e=I.exports.useRef(null),t=I.exports.useRef(null),[n,r]=I.exports.useState([]),[i,o]=I.exports.useState({}),[l,a]=I.exports.useState({}),[s,u]=I.exports.useState(!1),c=rb(),h=Lc(),f=Oc();async function w(z){u(!0);const{data:D,success:B,message:Q}=await lt({url:`/api/safe/engine/menu?module=${z}`});B?(Q&&de(Q),r(D)):_e(Q),u(!1)}async function v(z){f(`/module${z}`)}async function k(z){u(!0);const{data:D,success:B,message:Q}=await lt({url:`/api/safe/engine/form?field=${z}&menu=analitico`});B?(Q&&de(Q),o(L({field:z},D))):_e(Q),u(!1)}async function S(z){u(!0);const{data:D,success:B,message:Q}=await lt({url:`/api/safe/data/grid?field=${z}`});return B?(Q&&de(Q),u(!1),{[`${z}Grid`]:D}):(_e(Q),u(!1),{[`${z}Grid`]:[]})}async function p(z,D){if(z.toLowerCase().includes("filtro")){const{data:B,success:Q,message:T}=await lt({url:`/api/safe/data/filters?field=${z}`});return Q?(T&&de(T),B):(_e(T),{})}else{let B=l,Q=`/api/safe/data/form?field=${z}`,T=!1;if((B==null?void 0:B.state)==="disabled"||(B==null?void 0:B.state)==="empty"||(B==null?void 0:B.cellId)===""?T=!0:Q+=`&rowId=${B.rowId}&colId=${B.colId}&cellId=${B.cellId}`,T)return{};const{data:A,success:O,message:Z}=await lt({url:Q});return O?(Z&&de(Z),Array.isArray(A)&&A.length===0?{}:A):(_e(Z),{})}}async function d(z){const{data:D,success:B,message:Q}=await lt({url:`/api/safe/engine/form?field=${z}`});return B?(Q&&de(Q),D):(_e(Q),{})}function m(z){a(z)}function g(z){}function x(z){(z==null?void 0:z.field)==="menu"?f("/landing"):f(`/module${z.route}`)}async function b(z,D){if(D.toLowerCase().includes("filtro"))await _(D,z);else{const B=er(),{success:Q,message:T}=await Cn({url:"/api/safe/data/form?field=entradaDeDadosDefinicoes",body:z});Q?(T?de(T,B):kn(B),E()):_e(T,B)}}async function _(z,D){const B=er(),{success:Q,message:T}=await Cn({url:`/api/safe/data/filters?field=${z}`,body:D});Q?(T?de(T,B):kn(B),await E()):_e(T,B)}async function E(){var z,D,B,Q;((z=i==null?void 0:i.main)==null?void 0:z.formType)==="gridEdit"?(D=e.current)==null||D.handleRefreshEdit():((B=i==null?void 0:i.main)==null?void 0:B.formType)==="gridFast"?(Q=t.current)==null||Q.handleRefreshFast():console.warn("handleRefresh")}async function M(z,D){z.toLowerCase().includes("filtro")&&await _(z,D)}return I.exports.useEffect(()=>{E()},[i.field]),I.exports.useEffect(()=>{c!=null&&c.form&&k(c.form)},[c.form]),I.exports.useEffect(()=>(w("analitico"),()=>{r([])}),[]),(P=Object.keys(n))!=null&&P.length?y(Nw,{menuItems:n,toolItems:(i==null?void 0:i.tools)||[],handleMenu:x,getToolValues:p,getToolFields:d,field:i.field,id:i.id,onSubmiTool:b,onCancelTool:M,routeParams:{route:h.search},paramsTool:l,children:(C=(N=i==null?void 0:i.main)==null?void 0:N.field)!=null&&C.length?((F=i==null?void 0:i.main)==null?void 0:F.formType)==="gridEdit"?y(Cc,{route:i.main.breadcrumb,id:i.main.fields[0].id,field:i.main.fields[0].field,getDefaultValues:S,onCellFocus:m,actions:i.actions,ref:e,isLoading:s}):y(Dh,{route:i.main.breadcrumb,columns:(i==null?void 0:i.main.fields[0].columns)||[],id:i.main.fields[0].id,field:i.main.fields[0].field,getDefaultValues:S,onFocusRow:g,actions:i==null?void 0:i.actions,ref:t,navigate:v,isLoading:s}):y(se,{name:"dashboard",styleInLine:{size:{height:{value:100,unit:"%"},width:{value:100,unit:"%"}}},children:Y("h2",{children:["Dashboard ",c.module," ",c.form]})})}):y(cn,{})}function bb(){return y("p",{children:"NotFound"})}function xb(){return y("p",{children:"Reset"})}function kb(){return Y(sb,{children:[y(Dr,{path:"/",element:y(vb,{})}),y(Dr,{path:"/reset",element:y(xb,{})}),y(Dr,{path:"/landing",element:y(db,{})}),y(Dr,{path:"/module/:module/:form",element:y(wb,{})}),y(Dr,{path:"*",element:y(bb,{})})]})}function _b(){return Y(Lt,{children:[y(cb,{children:y(lb,{children:y(kb,{})})}),y(cw,{})]})}cl.createRoot(document.getElementById("root")).render(y(J.StrictMode,{children:y(_b,{})}));
