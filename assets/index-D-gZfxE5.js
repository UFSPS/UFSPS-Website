function YE(a,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const u=Object.getOwnPropertyDescriptor(r,o);u&&Object.defineProperty(a,o,u.get?u:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function ry(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var yh={exports:{}},ll={};var M_;function ZE(){if(M_)return ll;M_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:c,ref:o!==void 0?o:null,props:u}}return ll.Fragment=e,ll.jsx=n,ll.jsxs=n,ll}var E_;function KE(){return E_||(E_=1,yh.exports=ZE()),yh.exports}var K=KE(),Sh={exports:{}},lt={};var b_;function $E(){if(b_)return lt;b_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function y(O,Y,le){this.props=O,this.context=Y,this.refs=x,this.updater=le||E}y.prototype.isReactComponent={},y.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function b(){}b.prototype=y.prototype;function w(O,Y,le){this.props=O,this.context=Y,this.refs=x,this.updater=le||E}var U=w.prototype=new b;U.constructor=w,R(U,y.prototype),U.isPureReactComponent=!0;var B=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function L(O,Y,le){var Re=le.ref;return{$$typeof:a,type:O,key:Y,ref:Re!==void 0?Re:null,props:le}}function te(O,Y){return L(O.type,Y,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return Y[le]})}var ne=/\/+/g;function fe(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,Y,le,Re,Oe){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(re){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case a:case e:xe=!0;break;case g:return xe=O._init,F(xe(O._payload),Y,le,Re,Oe)}}if(xe)return Oe=Oe(O),xe=Re===""?"."+fe(O,0):Re,B(Oe)?(le="",xe!=null&&(le=xe.replace(ne,"$&/")+"/"),F(Oe,Y,le,"",function($e){return $e})):Oe!=null&&(G(Oe)&&(Oe=te(Oe,le+(Oe.key==null||O&&O.key===Oe.key?"":(""+Oe.key).replace(ne,"$&/")+"/")+xe)),Y.push(Oe)),1;xe=0;var Ee=Re===""?".":Re+":";if(B(O))for(var ze=0;ze<O.length;ze++)Re=O[ze],re=Ee+fe(Re,ze),xe+=F(Re,Y,le,re,Oe);else if(ze=S(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(Re=O.next()).done;)Re=Re.value,re=Ee+fe(Re,ze++),xe+=F(Re,Y,le,re,Oe);else if(re==="object"){if(typeof O.then=="function")return F(J(O),Y,le,Re,Oe);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xe}function H(O,Y,le){if(O==null)return O;var Re=[],Oe=0;return F(O,Re,"","",function(re){return Y.call(le,re,Oe++)}),Re}function ue(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Me={map:H,forEach:function(O,Y,le){H(O,function(){Y.apply(this,arguments)},le)},count:function(O){var Y=0;return H(O,function(){Y++}),Y},toArray:function(O){return H(O,function(Y){return Y})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return lt.Activity=_,lt.Children=Me,lt.Component=y,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=w,lt.StrictMode=r,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(O,Y,le){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Re=R({},O.props),Oe=O.key;if(Y!=null)for(re in Y.key!==void 0&&(Oe=""+Y.key),Y)!A.call(Y,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Y.ref===void 0||(Re[re]=Y[re]);var re=arguments.length-2;if(re===1)Re.children=le;else if(1<re){for(var xe=Array(re),Ee=0;Ee<re;Ee++)xe[Ee]=arguments[Ee+2];Re.children=xe}return L(O.type,Oe,Re)},lt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},lt.createElement=function(O,Y,le){var Re,Oe={},re=null;if(Y!=null)for(Re in Y.key!==void 0&&(re=""+Y.key),Y)A.call(Y,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Oe[Re]=Y[Re]);var xe=arguments.length-2;if(xe===1)Oe.children=le;else if(1<xe){for(var Ee=Array(xe),ze=0;ze<xe;ze++)Ee[ze]=arguments[ze+2];Oe.children=Ee}if(O&&O.defaultProps)for(Re in xe=O.defaultProps,xe)Oe[Re]===void 0&&(Oe[Re]=xe[Re]);return L(O,re,Oe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:h,render:O}},lt.isValidElement=G,lt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ue}},lt.memo=function(O,Y){return{$$typeof:m,type:O,compare:Y===void 0?null:Y}},lt.startTransition=function(O){var Y=P.T,le={};P.T=le;try{var Re=O(),Oe=P.S;Oe!==null&&Oe(le,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(I,pe)}catch(re){pe(re)}finally{Y!==null&&le.types!==null&&(Y.types=le.types),P.T=Y}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(O){return P.H.use(O)},lt.useActionState=function(O,Y,le){return P.H.useActionState(O,Y,le)},lt.useCallback=function(O,Y){return P.H.useCallback(O,Y)},lt.useContext=function(O){return P.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,Y){return P.H.useDeferredValue(O,Y)},lt.useEffect=function(O,Y){return P.H.useEffect(O,Y)},lt.useEffectEvent=function(O){return P.H.useEffectEvent(O)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(O,Y,le){return P.H.useImperativeHandle(O,Y,le)},lt.useInsertionEffect=function(O,Y){return P.H.useInsertionEffect(O,Y)},lt.useLayoutEffect=function(O,Y){return P.H.useLayoutEffect(O,Y)},lt.useMemo=function(O,Y){return P.H.useMemo(O,Y)},lt.useOptimistic=function(O,Y){return P.H.useOptimistic(O,Y)},lt.useReducer=function(O,Y,le){return P.H.useReducer(O,Y,le)},lt.useRef=function(O){return P.H.useRef(O)},lt.useState=function(O){return P.H.useState(O)},lt.useSyncExternalStore=function(O,Y,le){return P.H.useSyncExternalStore(O,Y,le)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.3",lt}var T_;function Jc(){return T_||(T_=1,Sh.exports=$E()),Sh.exports}var z=Jc();const Je=ry(z),A_=YE({__proto__:null,default:Je},[z]);var Mh={exports:{}},ul={},Eh={exports:{}},bh={};var R_;function QE(){return R_||(R_=1,(function(a){function e(F,H){var ue=F.length;F.push(H);e:for(;0<ue;){var pe=ue-1>>>1,Me=F[pe];if(0<o(Me,H))F[pe]=H,F[ue]=Me,ue=pe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],ue=F.pop();if(ue!==H){F[0]=ue;e:for(var pe=0,Me=F.length,O=Me>>>1;pe<O;){var Y=2*(pe+1)-1,le=F[Y],Re=Y+1,Oe=F[Re];if(0>o(le,ue))Re<Me&&0>o(Oe,le)?(F[pe]=Oe,F[Re]=ue,pe=Re):(F[pe]=le,F[Y]=ue,pe=Y);else if(Re<Me&&0>o(Oe,ue))F[pe]=Oe,F[Re]=ue,pe=Re;else break e}}return H}function o(F,H){var ue=F.sortIndex-H.sortIndex;return ue!==0?ue:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();a.unstable_now=function(){return c.now()-h}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,R=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var H=n(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=F)r(m),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(m)}}function B(F){if(R=!1,U(F),!E)if(n(p)!==null)E=!0,I||(I=!0,$());else{var H=n(m);H!==null&&J(B,H.startTime-F)}}var I=!1,P=-1,A=5,L=-1;function te(){return x?!0:!(a.unstable_now()-L<A)}function G(){if(x=!1,I){var F=a.unstable_now();L=F;var H=!0;try{e:{E=!1,R&&(R=!1,b(P),P=-1),S=!0;var ue=v;try{t:{for(U(F),_=n(p);_!==null&&!(_.expirationTime>F&&te());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,v=_.priorityLevel;var Me=pe(_.expirationTime<=F);if(F=a.unstable_now(),typeof Me=="function"){_.callback=Me,U(F),H=!0;break t}_===n(p)&&r(p),U(F)}else r(p);_=n(p)}if(_!==null)H=!0;else{var O=n(m);O!==null&&J(B,O.startTime-F),H=!1}}break e}finally{_=null,v=ue,S=!1}H=void 0}}finally{H?$():I=!1}}}var $;if(typeof w=="function")$=function(){w(G)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,fe=ne.port2;ne.port1.onmessage=G,$=function(){fe.postMessage(null)}}else $=function(){y(G,0)};function J(F,H){P=y(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ue=v;v=H;try{return F()}finally{v=ue}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ue=v;v=F;try{return H()}finally{v=ue}},a.unstable_scheduleCallback=function(F,H,ue){var pe=a.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?pe+ue:pe):ue=pe,F){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ue+Me,F={id:g++,callback:H,priorityLevel:F,startTime:ue,expirationTime:Me,sortIndex:-1},ue>pe?(F.sortIndex=ue,e(m,F),n(p)===null&&F===n(m)&&(R?(b(P),P=-1):R=!0,J(B,ue-pe))):(F.sortIndex=Me,e(p,F),E||S||(E=!0,I||(I=!0,$()))),F},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(F){var H=v;return function(){var ue=v;v=H;try{return F.apply(this,arguments)}finally{v=ue}}}})(bh)),bh}var w_;function JE(){return w_||(w_=1,Eh.exports=QE()),Eh.exports}var Th={exports:{}},wn={};var C_;function e1(){if(C_)return wn;C_=1;var a=Jc();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=c.T,g=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=m,r.p=g,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return c.H.useFormState(p,m,g)},wn.useFormStatus=function(){return c.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var D_;function sy(){if(D_)return Th.exports;D_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Th.exports=e1(),Th.exports}var U_;function t1(){if(U_)return ul;U_=1;var a=JE(),e=Jc(),n=sy();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return p(f),t;if(d===l)return p(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var M=!1,C=f.child;C;){if(C===s){M=!0,s=f,l=d;break}if(C===l){M=!0,l=f,s=d;break}C=C.sibling}if(!M){for(C=d.child;C;){if(C===s){M=!0,s=d,l=f;break}if(C===l){M=!0,l=d,s=f;break}C=C.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case w:return t.displayName||"Context";case b:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}var J=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},pe=[],Me=-1;function O(t){return{current:t}}function Y(t){0>Me||(t.current=pe[Me],pe[Me]=null,Me--)}function le(t,i){Me++,pe[Me]=t.current,t.current=i}var Re=O(null),Oe=O(null),re=O(null),xe=O(null);function Ee(t,i){switch(le(re,i),le(Oe,t),le(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Wv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Wv(i),t=jv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Re),le(Re,t)}function ze(){Y(Re),Y(Oe),Y(re)}function $e(t){t.memoizedState!==null&&le(xe,t);var i=Re.current,s=jv(i,t.type);i!==s&&(le(Oe,t),le(Re,s))}function tt(t){Oe.current===t&&(Y(Re),Y(Oe)),xe.current===t&&(Y(xe),al._currentValue=ue)}var en,xt;function gt(t){if(en===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);en=i&&i[1]||"",xt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+xt}var Ut=!1;function ut(t,i){if(!t||Ut)return"";Ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var oe=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){oe=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){oe=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&oe&&typeof de.stack=="string")return[de.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],C=d[1];if(M&&C){var V=M.split(`
`),ae=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ae.length)for(l=V.length-1,f=ae.length-1;1<=l&&0<=f&&V[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ae[f]){var ge=`
`+V[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{Ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function Qt(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return gt("Activity");default:return""}}function k(t){try{var i="",s=null;do i+=Qt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Yt=Object.prototype.hasOwnProperty,bt=a.unstable_scheduleCallback,Ot=a.unstable_cancelCallback,qe=a.unstable_shouldYield,N=a.unstable_requestPaint,T=a.unstable_now,q=a.unstable_getCurrentPriorityLevel,ve=a.unstable_ImmediatePriority,Se=a.unstable_UserBlockingPriority,me=a.unstable_NormalPriority,We=a.unstable_LowPriority,De=a.unstable_IdlePriority,Ke=a.log,nt=a.unstable_setDisableYieldValue,Ae=null,be=null;function Fe(t){if(typeof Ke=="function"&&nt(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ae,t)}catch{}}var Pe=Math.clz32?Math.clz32:j,Ie=Math.log,ft=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Ie(t)/ft|0)|0}var Ce=256,we=262144,Be=4194304;function Te(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=Te(l):(M&=C,M!==0?f=Te(M):s||(s=C&~t,s!==0&&(f=Te(s))))):(C=l&~d,C!==0?f=Te(C):M!==0?f=Te(M):s||(s=l&~t,s!==0&&(f=Te(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Ge(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Tt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Nn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ti(t,i,s,l,f,d){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(s=M&~s;0<s;){var ge=31-Pe(s),ye=1<<ge;C[ge]=0,V[ge]=-1;var oe=ae[ge];if(oe!==null)for(ae[ge]=null,ge=0;ge<oe.length;ge++){var de=oe[ge];de!==null&&(de.lane&=-536870913)}s&=~ye}l!==0&&xo(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(M&~i))}function xo(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function us(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Vl(t,i){var s=i&-i;return s=(s&42)!==0?1:cs(s),(s&(t.suspendedLanes|i))!==0?0:s}function cs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zi(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:m_(t.type))}function ds(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var Ai=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ai,gn="__reactProps$"+Ai,ia="__reactContainer$"+Ai,Va="__reactEvents$"+Ai,kl="__reactListeners$"+Ai,Xl="__reactHandles$"+Ai,Wl="__reactResources$"+Ai,Rr="__reactMarker$"+Ai;function yo(t){delete t[ln],delete t[gn],delete t[Va],delete t[kl],delete t[Xl]}function ka(t){var i=t[ln];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ia]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Jv(t);t!==null;){if(s=t[ln])return s;t=Jv(t)}return i}t=s,s=t.parentNode}return null}function Xa(t){if(t=t[ln]||t[ia]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function wr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function D(t){var i=t[Wl];return i||(i=t[Wl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(t){t[Rr]=!0}var ce=new Set,se={};function ee(t,i){Ue(t,i),Ue(t+"Capture",i)}function Ue(t,i){for(se[t]=i,t=0;t<i.length;t++)ce.add(i[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Le={},je={};function Ze(t){return Yt.call(je,t)?!0:Yt.call(Le,t)?!1:He.test(t)?je[t]=!0:(Le[t]=!0,!1)}function it(t,i,s){if(Ze(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ot(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ve(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,d.call(this,M)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){if(!t._valueTracker){var i=Zt(t)?"checked":"value";t._valueTracker=Kt(t,i,""+t[i])}}function vn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Zt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function st(t){return t.replace(On,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Pn(t,i,s,l,f,d,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+dt(i)):t.value!==""+dt(i)&&(t.value=""+dt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Ri(t,M,dt(i)):s!=null?Ri(t,M,dt(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+dt(C):t.removeAttribute("name")}function Qn(t,i,s,l,f,d,M,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Rt(t);return}s=s!=null?""+dt(s):"",i=i!=null?""+dt(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Rt(t)}function Ri(t,i,s){i==="number"&&Xe(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Jn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+dt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Pt(t,i,s){if(i!=null&&(i=""+dt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+dt(s):""}function un(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(J(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=dt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Rt(t)}function Fn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||cn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function aa(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&wi(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&wi(t,d,i[d])}function hs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),WS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return WS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var vf=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ps=null,ms=null;function Xm(t){var i=Xa(t);if(i&&(t=i.stateNode)){var s=t[gn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Pn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+st(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(r(90));Pn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&vn(l)}break e;case"textarea":Pt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Jn(t,!!s.multiple,i,!1)}}}var xf=!1;function Wm(t,i,s){if(xf)return t(i,s);xf=!0;try{var l=t(i);return l}finally{if(xf=!1,(ps!==null||ms!==null)&&(Nu(),ps&&(i=ps,t=ms,ms=ps=null,Xm(i),t)))for(i=0;i<t.length;i++)Xm(t[i])}}function So(t,i){var s=t.stateNode;if(s===null)return null;var l=s[gn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(sa)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{yf=!1}var Wa=null,Sf=null,ql=null;function jm(){if(ql)return ql;var t,i=Sf,s=i.length,l,f="value"in Wa?Wa.value:Wa.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[d-l];l++);return ql=f.slice(t,1<l?1-l:void 0)}function Yl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function qm(){return!1}function Gn(t){function i(s,l,f,d,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zl:qm,this.isPropagationStopped=qm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),i}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Gn(Cr),Eo=_({},Cr,{view:0,detail:0}),jS=Gn(Eo),Mf,Ef,bo,$l=_({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Mf=t.screenX-bo.screenX,Ef=t.screenY-bo.screenY):Ef=Mf=0,bo=t),Mf)},movementY:function(t){return"movementY"in t?t.movementY:Ef}}),Ym=Gn($l),qS=_({},$l,{dataTransfer:0}),YS=Gn(qS),ZS=_({},Eo,{relatedTarget:0}),bf=Gn(ZS),KS=_({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=Gn(KS),QS=_({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=Gn(QS),eM=_({},Cr,{data:0}),Zm=Gn(eM),tM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=iM[t])?!!i[t]:!1}function Tf(){return aM}var rM=_({},Eo,{key:function(t){if(t.key){var i=tM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sM=Gn(rM),oM=_({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Gn(oM),lM=_({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),uM=Gn(lM),cM=_({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fM=Gn(cM),dM=_({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hM=Gn(dM),pM=_({},Cr,{newState:0,oldState:0}),mM=Gn(pM),gM=[9,13,27,32],Af=sa&&"CompositionEvent"in window,To=null;sa&&"documentMode"in document&&(To=document.documentMode);var vM=sa&&"TextEvent"in window&&!To,$m=sa&&(!Af||To&&8<To&&11>=To),Qm=" ",Jm=!1;function eg(t,i){switch(t){case"keyup":return gM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function _M(t,i){switch(t){case"compositionend":return tg(i);case"keypress":return i.which!==32?null:(Jm=!0,Qm);case"textInput":return t=i.data,t===Qm&&Jm?null:t;default:return null}}function xM(t,i){if(gs)return t==="compositionend"||!Af&&eg(t,i)?(t=jm(),ql=Sf=Wa=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var yM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yM[t.type]:i==="textarea"}function ig(t,i,s,l){ps?ms?ms.push(l):ms=[l]:ps=l,i=Hu(i,"onChange"),0<i.length&&(s=new Kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Ao=null,Ro=null;function SM(t){zv(t,0)}function Ql(t){var i=wr(t);if(vn(i))return t}function ag(t,i){if(t==="change")return i}var rg=!1;if(sa){var Rf;if(sa){var wf="oninput"in document;if(!wf){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),wf=typeof sg.oninput=="function"}Rf=wf}else Rf=!1;rg=Rf&&(!document.documentMode||9<document.documentMode)}function og(){Ao&&(Ao.detachEvent("onpropertychange",lg),Ro=Ao=null)}function lg(t){if(t.propertyName==="value"&&Ql(Ro)){var i=[];ig(i,Ro,t,_f(t)),Wm(SM,i)}}function MM(t,i,s){t==="focusin"?(og(),Ao=i,Ro=s,Ao.attachEvent("onpropertychange",lg)):t==="focusout"&&og()}function EM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Ro)}function bM(t,i){if(t==="click")return Ql(i)}function TM(t,i){if(t==="input"||t==="change")return Ql(i)}function AM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:AM;function wo(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Yt.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,i){var s=ug(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ug(s)}}function fg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Xe(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Xe(t.document)}return i}function Cf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var RM=sa&&"documentMode"in document&&11>=document.documentMode,vs=null,Df=null,Co=null,Uf=!1;function hg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uf||vs==null||vs!==Xe(l)||(l=vs,"selectionStart"in l&&Cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Co&&wo(Co,l)||(Co=l,l=Hu(Df,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=vs)))}function Dr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var _s={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},Lf={},pg={};sa&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ur(t){if(Lf[t])return Lf[t];if(!_s[t])return t;var i=_s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in pg)return Lf[t]=i[s];return t}var mg=Ur("animationend"),gg=Ur("animationiteration"),vg=Ur("animationstart"),wM=Ur("transitionrun"),CM=Ur("transitionstart"),DM=Ur("transitioncancel"),_g=Ur("transitionend"),xg=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Ci(t,i){xg.set(t,i),ee(i,[t])}var Jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],xs=0,Of=0;function eu(){for(var t=xs,i=Of=xs=0;i<t;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var f=ui[i];ui[i++]=null;var d=ui[i];if(ui[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}d!==0&&yg(s,f,d)}}function tu(t,i,s,l){ui[xs++]=t,ui[xs++]=i,ui[xs++]=s,ui[xs++]=l,Of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Pf(t,i,s,l){return tu(t,i,s,l),nu(t)}function Lr(t,i){return tu(t,null,null,i),nu(t)}function yg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Pe(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function nu(t){if(50<$o)throw $o=0,Xd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ys={};function UM(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,s,l){return new UM(t,i,s,l)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,i){var s=t.alternate;return s===null?(s=ti(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Sg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function iu(t,i,s,l,f,d){var M=0;if(l=t,typeof t=="function")Ff(t)&&(M=1);else if(typeof t=="string")M=FE(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ti(31,s,i,f),t.elementType=L,t.lanes=d,t;case R:return Nr(s.children,f,d,i);case x:M=8,f|=24;break;case y:return t=ti(12,s,i,f|2),t.elementType=y,t.lanes=d,t;case B:return t=ti(13,s,i,f),t.elementType=B,t.lanes=d,t;case I:return t=ti(19,s,i,f),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case b:M=9;break e;case U:M=11;break e;case P:M=14;break e;case A:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ti(M,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Nr(t,i,s,l){return t=ti(7,t,l,i),t.lanes=s,t}function If(t,i,s){return t=ti(6,t,null,i),t.lanes=s,t}function Mg(t){var i=ti(18,null,null,0);return i.stateNode=t,i}function Bf(t,i,s){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Eg=new WeakMap;function ci(t,i){if(typeof t=="object"&&t!==null){var s=Eg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:k(i)},Eg.set(t,i),i)}return{value:t,source:i,stack:k(i)}}var Ss=[],Ms=0,au=null,Do=0,fi=[],di=0,ja=null,Hi=1,Gi="";function la(t,i){Ss[Ms++]=Do,Ss[Ms++]=au,au=t,Do=i}function bg(t,i,s){fi[di++]=Hi,fi[di++]=Gi,fi[di++]=ja,ja=t;var l=Hi;t=Gi;var f=32-Pe(l)-1;l&=~(1<<f),s+=1;var d=32-Pe(i)+f;if(30<d){var M=f-f%5;d=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Hi=1<<32-Pe(i)+f|s<<f|l,Gi=d+t}else Hi=1<<d|s<<f|l,Gi=t}function zf(t){t.return!==null&&(la(t,1),bg(t,1,0))}function Hf(t){for(;t===au;)au=Ss[--Ms],Ss[Ms]=null,Do=Ss[--Ms],Ss[Ms]=null;for(;t===ja;)ja=fi[--di],fi[di]=null,Gi=fi[--di],fi[di]=null,Hi=fi[--di],fi[di]=null}function Tg(t,i){fi[di++]=Hi,fi[di++]=Gi,fi[di++]=ja,Hi=i.id,Gi=i.overflow,ja=t}var En=null,jt=null,Mt=!1,qa=null,hi=!1,Gf=Error(r(519));function Ya(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(ci(i,t)),Gf}function Ag(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ln]=t,i[gn]=l,s){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(s=0;s<Jo.length;s++)_t(Jo[s],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_t("invalid",i),Qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_t("invalid",i);break;case"textarea":_t("invalid",i),un(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||kv(i.textContent,s)?(l.popover!=null&&(_t("beforetoggle",i),_t("toggle",i)),l.onScroll!=null&&_t("scroll",i),l.onScrollEnd!=null&&_t("scrollend",i),l.onClick!=null&&(i.onclick=ra),i=!0):i=!1,i||Ya(t,!0)}function Rg(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:En=En.return}}function Es(t){if(t!==En)return!1;if(!Mt)return Rg(t),Mt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||rh(t.type,t.memoizedProps)),s=!s),s&&jt&&Ya(t),Rg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=Qv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=Qv(t)}else i===27?(i=jt,lr(t.type)?(t=ch,ch=null,jt=t):jt=i):jt=En?mi(t.stateNode.nextSibling):null;return!0}function Or(){jt=En=null,Mt=!1}function Vf(){var t=qa;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),qa=null),t}function Uo(t){qa===null?qa=[t]:qa.push(t)}var kf=O(null),Pr=null,ua=null;function Za(t,i,s){le(kf,i._currentValue),i._currentValue=s}function ca(t){t._currentValue=kf.current,Y(kf)}function Xf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Wf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var M=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var V=0;V<i.length;V++)if(C.context===i[V]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),Xf(d.return,s,t),l||(M=null);break e}d=C.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),Xf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function bs(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=f.type;ei(f.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(f===xe.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(al):t=[al])}f=f.return}t!==null&&Wf(i,t,s,l),i.flags|=262144}function ru(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fr(t){Pr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return wg(Pr,t)}function su(t,i){return Pr===null&&Fr(t),wg(t,i)}function wg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ua===null){if(t===null)throw Error(r(308));ua=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ua=ua.next=i;return s}var LM=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},NM=a.unstable_scheduleCallback,OM=a.unstable_NormalPriority,fn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new LM,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&NM(OM,function(){t.controller.abort()})}var No=null,qf=0,Ts=0,As=null;function PM(t,i){if(No===null){var s=No=[];qf=0,Ts=Kd(),As={status:"pending",value:void 0,then:function(l){s.push(l)}}}return qf++,i.then(Cg,Cg),i}function Cg(){if(--qf===0&&No!==null){As!==null&&(As.status="fulfilled");var t=No;No=null,Ts=0,As=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function FM(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Dg=F.S;F.S=function(t,i){hv=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&PM(t,i),Dg!==null&&Dg(t,i)};var Ir=O(null);function Yf(){var t=Ir.current;return t!==null?t:Xt.pooledCache}function ou(t,i){i===null?le(Ir,Ir.current):le(Ir,i.pool)}function Ug(){var t=Yf();return t===null?null:{parent:fn._currentValue,pool:t}}var Rs=Error(r(460)),Zf=Error(r(474)),lu=Error(r(542)),uu={then:function(){}};function Lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ng(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ra,ra),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t;default:if(typeof i.status=="string")i.then(ra,ra);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t}throw zr=i,Rs}}function Br(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(zr=s,Rs):s}}var zr=null;function Og(){if(zr===null)throw Error(r(459));var t=zr;return zr=null,t}function Pg(t){if(t===Rs||t===lu)throw Error(r(483))}var ws=null,Oo=0;function cu(t){var i=Oo;return Oo+=1,ws===null&&(ws=[]),Ng(ws,t,i)}function Po(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function fu(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fg(t){function i(Z,X){if(t){var ie=Z.deletions;ie===null?(Z.deletions=[X],Z.flags|=16):ie.push(X)}}function s(Z,X){if(!t)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function l(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function f(Z,X){return Z=oa(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,ie){return Z.index=ie,t?(ie=Z.alternate,ie!==null?(ie=ie.index,ie<X?(Z.flags|=67108866,X):ie):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,X,ie,_e){return X===null||X.tag!==6?(X=If(ie,Z.mode,_e),X.return=Z,X):(X=f(X,ie),X.return=Z,X)}function V(Z,X,ie,_e){var Qe=ie.type;return Qe===R?ge(Z,X,ie.props.children,_e,ie.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&Br(Qe)===X.type)?(X=f(X,ie.props),Po(X,ie),X.return=Z,X):(X=iu(ie.type,ie.key,ie.props,null,Z.mode,_e),Po(X,ie),X.return=Z,X)}function ae(Z,X,ie,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=Bf(ie,Z.mode,_e),X.return=Z,X):(X=f(X,ie.children||[]),X.return=Z,X)}function ge(Z,X,ie,_e,Qe){return X===null||X.tag!==7?(X=Nr(ie,Z.mode,_e,Qe),X.return=Z,X):(X=f(X,ie),X.return=Z,X)}function ye(Z,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=If(""+X,Z.mode,ie),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ie=iu(X.type,X.key,X.props,null,Z.mode,ie),Po(ie,X),ie.return=Z,ie;case E:return X=Bf(X,Z.mode,ie),X.return=Z,X;case A:return X=Br(X),ye(Z,X,ie)}if(J(X)||$(X))return X=Nr(X,Z.mode,ie,null),X.return=Z,X;if(typeof X.then=="function")return ye(Z,cu(X),ie);if(X.$$typeof===w)return ye(Z,su(Z,X),ie);fu(Z,X)}return null}function oe(Z,X,ie,_e){var Qe=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Qe!==null?null:C(Z,X,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===Qe?V(Z,X,ie,_e):null;case E:return ie.key===Qe?ae(Z,X,ie,_e):null;case A:return ie=Br(ie),oe(Z,X,ie,_e)}if(J(ie)||$(ie))return Qe!==null?null:ge(Z,X,ie,_e,null);if(typeof ie.then=="function")return oe(Z,X,cu(ie),_e);if(ie.$$typeof===w)return oe(Z,X,su(Z,ie),_e);fu(Z,ie)}return null}function de(Z,X,ie,_e,Qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(ie)||null,C(X,Z,""+_e,Qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return Z=Z.get(_e.key===null?ie:_e.key)||null,V(X,Z,_e,Qe);case E:return Z=Z.get(_e.key===null?ie:_e.key)||null,ae(X,Z,_e,Qe);case A:return _e=Br(_e),de(Z,X,ie,_e,Qe)}if(J(_e)||$(_e))return Z=Z.get(ie)||null,ge(X,Z,_e,Qe,null);if(typeof _e.then=="function")return de(Z,X,ie,cu(_e),Qe);if(_e.$$typeof===w)return de(Z,X,ie,su(X,_e),Qe);fu(X,_e)}return null}function ke(Z,X,ie,_e){for(var Qe=null,wt=null,Ye=X,ht=X=0,St=null;Ye!==null&&ht<ie.length;ht++){Ye.index>ht?(St=Ye,Ye=null):St=Ye.sibling;var Ct=oe(Z,Ye,ie[ht],_e);if(Ct===null){Ye===null&&(Ye=St);break}t&&Ye&&Ct.alternate===null&&i(Z,Ye),X=d(Ct,X,ht),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct,Ye=St}if(ht===ie.length)return s(Z,Ye),Mt&&la(Z,ht),Qe;if(Ye===null){for(;ht<ie.length;ht++)Ye=ye(Z,ie[ht],_e),Ye!==null&&(X=d(Ye,X,ht),wt===null?Qe=Ye:wt.sibling=Ye,wt=Ye);return Mt&&la(Z,ht),Qe}for(Ye=l(Ye);ht<ie.length;ht++)St=de(Ye,Z,ht,ie[ht],_e),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?ht:St.key),X=d(St,X,ht),wt===null?Qe=St:wt.sibling=St,wt=St);return t&&Ye.forEach(function(hr){return i(Z,hr)}),Mt&&la(Z,ht),Qe}function et(Z,X,ie,_e){if(ie==null)throw Error(r(151));for(var Qe=null,wt=null,Ye=X,ht=X=0,St=null,Ct=ie.next();Ye!==null&&!Ct.done;ht++,Ct=ie.next()){Ye.index>ht?(St=Ye,Ye=null):St=Ye.sibling;var hr=oe(Z,Ye,Ct.value,_e);if(hr===null){Ye===null&&(Ye=St);break}t&&Ye&&hr.alternate===null&&i(Z,Ye),X=d(hr,X,ht),wt===null?Qe=hr:wt.sibling=hr,wt=hr,Ye=St}if(Ct.done)return s(Z,Ye),Mt&&la(Z,ht),Qe;if(Ye===null){for(;!Ct.done;ht++,Ct=ie.next())Ct=ye(Z,Ct.value,_e),Ct!==null&&(X=d(Ct,X,ht),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return Mt&&la(Z,ht),Qe}for(Ye=l(Ye);!Ct.done;ht++,Ct=ie.next())Ct=de(Ye,Z,ht,Ct.value,_e),Ct!==null&&(t&&Ct.alternate!==null&&Ye.delete(Ct.key===null?ht:Ct.key),X=d(Ct,X,ht),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return t&&Ye.forEach(function(qE){return i(Z,qE)}),Mt&&la(Z,ht),Qe}function kt(Z,X,ie,_e){if(typeof ie=="object"&&ie!==null&&ie.type===R&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var Qe=ie.key;X!==null;){if(X.key===Qe){if(Qe=ie.type,Qe===R){if(X.tag===7){s(Z,X.sibling),_e=f(X,ie.props.children),_e.return=Z,Z=_e;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&Br(Qe)===X.type){s(Z,X.sibling),_e=f(X,ie.props),Po(_e,ie),_e.return=Z,Z=_e;break e}s(Z,X);break}else i(Z,X);X=X.sibling}ie.type===R?(_e=Nr(ie.props.children,Z.mode,_e,ie.key),_e.return=Z,Z=_e):(_e=iu(ie.type,ie.key,ie.props,null,Z.mode,_e),Po(_e,ie),_e.return=Z,Z=_e)}return M(Z);case E:e:{for(Qe=ie.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){s(Z,X.sibling),_e=f(X,ie.children||[]),_e.return=Z,Z=_e;break e}else{s(Z,X);break}else i(Z,X);X=X.sibling}_e=Bf(ie,Z.mode,_e),_e.return=Z,Z=_e}return M(Z);case A:return ie=Br(ie),kt(Z,X,ie,_e)}if(J(ie))return ke(Z,X,ie,_e);if($(ie)){if(Qe=$(ie),typeof Qe!="function")throw Error(r(150));return ie=Qe.call(ie),et(Z,X,ie,_e)}if(typeof ie.then=="function")return kt(Z,X,cu(ie),_e);if(ie.$$typeof===w)return kt(Z,X,su(Z,ie),_e);fu(Z,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,X!==null&&X.tag===6?(s(Z,X.sibling),_e=f(X,ie),_e.return=Z,Z=_e):(s(Z,X),_e=If(ie,Z.mode,_e),_e.return=Z,Z=_e),M(Z)):s(Z,X)}return function(Z,X,ie,_e){try{Oo=0;var Qe=kt(Z,X,ie,_e);return ws=null,Qe}catch(Ye){if(Ye===Rs||Ye===lu)throw Ye;var wt=ti(29,Ye,null,Z.mode);return wt.lanes=_e,wt.return=Z,wt}finally{}}}var Hr=Fg(!0),Ig=Fg(!1),Ka=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=nu(t),yg(t,null,s),i}return tu(t,l,i,s),nu(t)}function Fo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,us(t,s)}}function Qf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Jf=!1;function Io(){if(Jf){var t=As;if(t!==null)throw t}}function Bo(t,i,s,l){Jf=!1;var f=t.updateQueue;Ka=!1;var d=f.firstBaseUpdate,M=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,ae=V.next;V.next=null,M===null?d=ae:M.next=ae,M=V;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==M&&(C===null?ge.firstBaseUpdate=ae:C.next=ae,ge.lastBaseUpdate=V))}if(d!==null){var ye=f.baseState;M=0,ge=ae=V=null,C=d;do{var oe=C.lane&-536870913,de=oe!==C.lane;if(de?(yt&oe)===oe:(l&oe)===oe){oe!==0&&oe===Ts&&(Jf=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ke=t,et=C;oe=i;var kt=s;switch(et.tag){case 1:if(ke=et.payload,typeof ke=="function"){ye=ke.call(kt,ye,oe);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=et.payload,oe=typeof ke=="function"?ke.call(kt,ye,oe):ke,oe==null)break e;ye=_({},ye,oe);break e;case 2:Ka=!0}}oe=C.callback,oe!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[oe]:de.push(oe))}else de={lane:oe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(ae=ge=de,V=ye):ge=ge.next=de,M|=oe;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;de=C,C=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ge===null&&(V=ye),f.baseState=V,f.firstBaseUpdate=ae,f.lastBaseUpdate=ge,d===null&&(f.shared.lanes=0),ir|=M,t.lanes=M,t.memoizedState=ye}}function Bg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function zg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Bg(s[t],i)}var Cs=O(null),du=O(0);function Hg(t,i){t=xa,le(du,t),le(Cs,i),xa=t|i.baseLanes}function ed(){le(du,xa),le(Cs,Cs.current)}function td(){xa=du.current,Y(Cs),Y(du)}var ni=O(null),pi=null;function Ja(t){var i=t.alternate;le(rn,rn.current&1),le(ni,t),pi===null&&(i===null||Cs.current!==null||i.memoizedState!==null)&&(pi=t)}function nd(t){le(rn,rn.current),le(ni,t),pi===null&&(pi=t)}function Gg(t){t.tag===22?(le(rn,rn.current),le(ni,t),pi===null&&(pi=t)):er()}function er(){le(rn,rn.current),le(ni,ni.current)}function ii(t){Y(ni),pi===t&&(pi=null),Y(rn)}var rn=O(0);function hu(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||lh(s)||uh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fa=0,ct=null,Gt=null,dn=null,pu=!1,Ds=!1,Gr=!1,mu=0,zo=0,Us=null,IM=0;function tn(){throw Error(r(321))}function id(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function ad(t,i,s,l,f,d){return fa=d,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?b0:xd,Gr=!1,d=s(l,f),Gr=!1,Ds&&(d=kg(i,s,l,f)),Vg(t),d}function Vg(t){F.H=Vo;var i=Gt!==null&&Gt.next!==null;if(fa=0,dn=Gt=ct=null,pu=!1,zo=0,Us=null,i)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&ru(t)&&(hn=!0))}function kg(t,i,s,l){ct=t;var f=0;do{if(Ds&&(Us=null),zo=0,Ds=!1,25<=f)throw Error(r(301));if(f+=1,dn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=T0,d=i(s,l)}while(Ds);return d}function BM(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?Ho(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),i}function rd(){var t=mu!==0;return mu=0,t}function sd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function od(t){if(pu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}pu=!1}fa=0,dn=Gt=ct=null,Ds=!1,zo=mu=0,Us=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?ct.memoizedState=dn=t:dn=dn.next=t,dn}function sn(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=dn===null?ct.memoizedState:dn.next;if(i!==null)dn=i,Gt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},dn===null?ct.memoizedState=dn=t:dn=dn.next=t}return dn}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var i=zo;return zo+=1,Us===null&&(Us=[]),t=Ng(Us,t,i),i=ct,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?b0:xd),t}function vu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===w)return bn(t)}throw Error(r(438,String(t)))}function ld(t){var i=null,s=ct.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=gu(),ct.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=te;return i.index++,s}function da(t,i){return typeof i=="function"?i(t):i}function _u(t){var i=sn();return ud(i,Gt,t)}function ud(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var M=f.next;f.next=d.next,d.next=M}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=M=null,V=null,ae=i,ge=!1;do{var ye=ae.lane&-536870913;if(ye!==ae.lane?(yt&ye)===ye:(fa&ye)===ye){var oe=ae.revertLane;if(oe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),ye===Ts&&(ge=!0);else if((fa&oe)===oe){ae=ae.next,oe===Ts&&(ge=!0);continue}else ye={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(C=V=ye,M=d):V=V.next=ye,ct.lanes|=oe,ir|=oe;ye=ae.action,Gr&&s(d,ye),d=ae.hasEagerState?ae.eagerState:s(d,ye)}else oe={lane:ye,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(C=V=oe,M=d):V=V.next=oe,ct.lanes|=ye,ir|=ye;ae=ae.next}while(ae!==null&&ae!==i);if(V===null?M=d:V.next=C,!ei(d,t.memoizedState)&&(hn=!0,ge&&(s=As,s!==null)))throw s;t.memoizedState=d,t.baseState=M,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cd(t){var i=sn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do d=t(d,M.action),M=M.next;while(M!==f);ei(d,i.memoizedState)||(hn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Xg(t,i,s){var l=ct,f=sn(),d=Mt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var M=!ei((Gt||f).memoizedState,s);if(M&&(f.memoizedState=s,hn=!0),f=f.queue,hd(qg.bind(null,l,f,t),[t]),f.getSnapshot!==i||M||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Ls(9,{destroy:void 0},jg.bind(null,l,f,s,i),null),Xt===null)throw Error(r(349));d||(fa&127)!==0||Wg(l,i,s)}return s}function Wg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ct.updateQueue,i===null?(i=gu(),ct.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function jg(t,i,s,l){i.value=s,i.getSnapshot=l,Yg(i)&&Zg(t)}function qg(t,i,s){return s(function(){Yg(i)&&Zg(t)})}function Yg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function Zg(t){var i=Lr(t,2);i!==null&&jn(i,t,2)}function fd(t){var i=In();if(typeof t=="function"){var s=t;if(t=s(),Gr){Fe(!0);try{s()}finally{Fe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},i}function Kg(t,i,s,l){return t.baseState=s,ud(t,Gt,typeof l=="function"?l:da)}function zM(t,i,s,l,f){if(Su(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};F.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,$g(i,d)):(d.next=s.next,i.pending=s.next=d)}}function $g(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=F.T,M={};F.T=M;try{var C=s(f,l),V=F.S;V!==null&&V(M,C),Qg(t,i,C)}catch(ae){dd(t,i,ae)}finally{d!==null&&M.types!==null&&(d.types=M.types),F.T=d}}else try{d=s(f,l),Qg(t,i,d)}catch(ae){dd(t,i,ae)}}function Qg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Jg(t,i,l)},function(l){return dd(t,i,l)}):Jg(t,i,s)}function Jg(t,i,s){i.status="fulfilled",i.value=s,e0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$g(t,s)))}function dd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,e0(i),i=i.next;while(i!==l)}t.action=null}function e0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function t0(t,i){return i}function n0(t,i){if(Mt){var s=Xt.formState;if(s!==null){e:{var l=ct;if(Mt){if(jt){t:{for(var f=jt,d=hi;f.nodeType!==8;){if(!d){f=null;break t}if(f=mi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){jt=mi(f.nextSibling),l=f.data==="F!";break e}}Ya(l)}l=!1}l&&(i=s[0])}}return s=In(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:i},s.queue=l,s=S0.bind(null,ct,l),l.dispatch=s,l=fd(!1),d=_d.bind(null,ct,!1,l.queue),l=In(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=zM.bind(null,ct,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function i0(t){var i=sn();return a0(i,Gt,t)}function a0(t,i,s){if(i=ud(t,i,t0)[0],t=_u(da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ho(i)}catch(M){throw M===Rs?lu:M}else l=i;i=sn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(ct.flags|=2048,Ls(9,{destroy:void 0},HM.bind(null,f,s),null)),[l,d,t]}function HM(t,i){t.action=i}function r0(t){var i=sn(),s=Gt;if(s!==null)return a0(i,s,t);sn(),i=i.memoizedState,s=sn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ls(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ct.updateQueue,i===null&&(i=gu(),ct.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function s0(){return sn().memoizedState}function xu(t,i,s,l){var f=In();ct.flags|=t,f.memoizedState=Ls(1|i,{destroy:void 0},s,l===void 0?null:l)}function yu(t,i,s,l){var f=sn();l=l===void 0?null:l;var d=f.memoizedState.inst;Gt!==null&&l!==null&&id(l,Gt.memoizedState.deps)?f.memoizedState=Ls(i,d,s,l):(ct.flags|=t,f.memoizedState=Ls(1|i,d,s,l))}function o0(t,i){xu(8390656,8,t,i)}function hd(t,i){yu(2048,8,t,i)}function GM(t){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=gu(),ct.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function l0(t){var i=sn().memoizedState;return GM({ref:i,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function u0(t,i){return yu(4,2,t,i)}function c0(t,i){return yu(4,4,t,i)}function f0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function d0(t,i,s){s=s!=null?s.concat([t]):null,yu(4,4,f0.bind(null,i,t),s)}function pd(){}function h0(t,i){var s=sn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&id(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function p0(t,i){var s=sn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&id(i,l[1]))return l[0];if(l=t(),Gr){Fe(!0);try{t()}finally{Fe(!1)}}return s.memoizedState=[l,i],l}function md(t,i,s){return s===void 0||(fa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=mv(),ct.lanes|=t,ir|=t,s)}function m0(t,i,s,l){return ei(s,i)?s:Cs.current!==null?(t=md(t,s,l),ei(t,i)||(hn=!0),t):(fa&42)===0||(fa&1073741824)!==0&&(yt&261930)===0?(hn=!0,t.memoizedState=s):(t=mv(),ct.lanes|=t,ir|=t,i)}function g0(t,i,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var M=F.T,C={};F.T=C,_d(t,!1,i,s);try{var V=f(),ae=F.S;if(ae!==null&&ae(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=FM(V,l);Go(t,i,ge,si(t))}else Go(t,i,l,si(t))}catch(ye){Go(t,i,{then:function(){},status:"rejected",reason:ye},si())}finally{H.p=d,M!==null&&C.types!==null&&(M.types=C.types),F.T=M}}function VM(){}function gd(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=v0(t).queue;g0(t,f,i,ue,s===null?VM:function(){return _0(t),s(l)})}function v0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:ue},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _0(t){var i=v0(t);i.next===null&&(i=t.alternate.memoizedState),Go(t,i.next.queue,{},si())}function vd(){return bn(al)}function x0(){return sn().memoizedState}function y0(){return sn().memoizedState}function kM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=si();t=$a(s);var l=Qa(i,t,s);l!==null&&(jn(l,i,s),Fo(l,i,s)),i={cache:jf()},t.payload=i;return}i=i.return}}function XM(t,i,s){var l=si();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Su(t)?M0(i,s):(s=Pf(t,i,s,l),s!==null&&(jn(s,t,l),E0(s,i,l)))}function S0(t,i,s){var l=si();Go(t,i,s,l)}function Go(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Su(t))M0(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,C=d(M,s);if(f.hasEagerState=!0,f.eagerState=C,ei(C,M))return tu(t,i,f,0),Xt===null&&eu(),!1}catch{}finally{}if(s=Pf(t,i,f,l),s!==null)return jn(s,t,l),E0(s,i,l),!0}return!1}function _d(t,i,s,l){if(l={lane:2,revertLane:Kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(i)throw Error(r(479))}else i=Pf(t,s,l,2),i!==null&&jn(i,t,2)}function Su(t){var i=t.alternate;return t===ct||i!==null&&i===ct}function M0(t,i){Ds=pu=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function E0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,us(t,s)}}var Vo={readContext:bn,use:vu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Vo.useEffectEvent=tn;var b0={readContext:bn,use:vu,useCallback:function(t,i){return In().memoizedState=[t,i===void 0?null:i],t},useContext:bn,useEffect:o0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,xu(4194308,4,f0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return xu(4194308,4,t,i)},useInsertionEffect:function(t,i){xu(4,2,t,i)},useMemo:function(t,i){var s=In();i=i===void 0?null:i;var l=t();if(Gr){Fe(!0);try{t()}finally{Fe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=In();if(s!==void 0){var f=s(i);if(Gr){Fe(!0);try{s(i)}finally{Fe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=XM.bind(null,ct,t),[l.memoizedState,t]},useRef:function(t){var i=In();return t={current:t},i.memoizedState=t},useState:function(t){t=fd(t);var i=t.queue,s=S0.bind(null,ct,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:pd,useDeferredValue:function(t,i){var s=In();return md(s,t,i)},useTransition:function(){var t=fd(!1);return t=g0.bind(null,ct,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ct,f=In();if(Mt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Xt===null)throw Error(r(349));(yt&127)!==0||Wg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,o0(qg.bind(null,l,d,t),[t]),l.flags|=2048,Ls(9,{destroy:void 0},jg.bind(null,l,d,s,i),null),s},useId:function(){var t=In(),i=Xt.identifierPrefix;if(Mt){var s=Gi,l=Hi;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=mu++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=IM++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:vd,useFormState:n0,useActionState:n0,useOptimistic:function(t){var i=In();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=_d.bind(null,ct,!0,s),s.dispatch=i,[t,i]},useMemoCache:ld,useCacheRefresh:function(){return In().memoizedState=kM.bind(null,ct)},useEffectEvent:function(t){var i=In(),s={impl:t};return i.memoizedState=s,function(){if((Lt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},xd={readContext:bn,use:vu,useCallback:h0,useContext:bn,useEffect:hd,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:_u,useRef:s0,useState:function(){return _u(da)},useDebugValue:pd,useDeferredValue:function(t,i){var s=sn();return m0(s,Gt.memoizedState,t,i)},useTransition:function(){var t=_u(da)[0],i=sn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:vd,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var s=sn();return Kg(s,Gt,t,i)},useMemoCache:ld,useCacheRefresh:y0};xd.useEffectEvent=l0;var T0={readContext:bn,use:vu,useCallback:h0,useContext:bn,useEffect:hd,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:cd,useRef:s0,useState:function(){return cd(da)},useDebugValue:pd,useDeferredValue:function(t,i){var s=sn();return Gt===null?md(s,t,i):m0(s,Gt.memoizedState,t,i)},useTransition:function(){var t=cd(da)[0],i=sn().memoizedState;return[typeof t=="boolean"?t:Ho(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:vd,useFormState:r0,useActionState:r0,useOptimistic:function(t,i){var s=sn();return Gt!==null?Kg(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ld,useCacheRefresh:y0};T0.useEffectEvent=l0;function yd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Sd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=si(),f=$a(l);f.payload=i,s!=null&&(f.callback=s),i=Qa(t,f,l),i!==null&&(jn(i,t,l),Fo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=si(),f=$a(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Qa(t,f,l),i!==null&&(jn(i,t,l),Fo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=si(),l=$a(s);l.tag=2,i!=null&&(l.callback=i),i=Qa(t,l,s),i!==null&&(jn(i,t,s),Fo(i,t,s))}};function A0(t,i,s,l,f,d,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,M):i.prototype&&i.prototype.isPureReactComponent?!wo(s,l)||!wo(f,d):!0}function R0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Sd.enqueueReplaceState(i,i.state,null)}function Vr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function w0(t){Jl(t)}function C0(t){console.error(t)}function D0(t){Jl(t)}function Mu(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function U0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Md(t,i,s){return s=$a(s),s.tag=3,s.payload={element:null},s.callback=function(){Mu(t,i)},s}function L0(t){return t=$a(t),t.tag=3,t}function N0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){U0(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){U0(i,s,l),typeof f!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function WM(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&bs(i,s,f,!0),s=ni.current,s!==null){switch(s.tag){case 31:case 13:return pi===null?Ou():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===uu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),qd(t,l,f)),!1;case 22:return s.flags|=65536,l===uu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),qd(t,l,f)),!1}throw Error(r(435,s.tag))}return qd(t,l,f),Ou(),!1}if(Mt)return i=ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Gf&&(t=Error(r(422),{cause:l}),Uo(ci(t,s)))):(l!==Gf&&(i=Error(r(423),{cause:l}),Uo(ci(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ci(l,s),f=Md(t.stateNode,l,f),Qf(t,f),nn!==4&&(nn=2)),!1;var d=Error(r(520),{cause:l});if(d=ci(d,s),Ko===null?Ko=[d]:Ko.push(d),nn!==4&&(nn=2),i===null)return!0;l=ci(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Md(s.stateNode,l,t),Qf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ar===null||!ar.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=L0(f),N0(f,t,s,l),Qf(s,f),!1}s=s.return}while(s!==null);return!1}var Ed=Error(r(461)),hn=!1;function Tn(t,i,s,l){i.child=t===null?Ig(i,null,s,l):Hr(i,t.child,s,l)}function O0(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return Fr(i),l=ad(t,i,s,M,d,f),C=rd(),t!==null&&!hn?(sd(t,i,f),ha(t,i,f)):(Mt&&C&&zf(i),i.flags|=1,Tn(t,i,l,f),i.child)}function P0(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!Ff(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,F0(t,i,d,l,f)):(t=iu(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Ud(t,f)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:wo,s(M,l)&&t.ref===i.ref)return ha(t,i,f)}return i.flags|=1,t=oa(d,l),t.ref=i.ref,t.return=i,i.child=t}function F0(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(wo(d,l)&&t.ref===i.ref)if(hn=!1,i.pendingProps=l=d,Ud(t,f))(t.flags&131072)!==0&&(hn=!0);else return i.lanes=t.lanes,ha(t,i,f)}return bd(t,i,s,l,f)}function I0(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return B0(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ou(i,d!==null?d.cachePool:null),d!==null?Hg(i,d):ed(),Gg(i);else return l=i.lanes=536870912,B0(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(ou(i,d.cachePool),Hg(i,d),er(),i.memoizedState=null):(t!==null&&ou(i,null),ed(),er());return Tn(t,i,f,s),i.child}function ko(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function B0(t,i,s,l,f){var d=Yf();return d=d===null?null:{parent:fn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&ou(i,null),ed(),Gg(i),t!==null&&bs(t,i,l,!0),i.childLanes=f,null}function Eu(t,i){return i=Tu({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function z0(t,i,s){return Hr(i,t.child,null,s),t=Eu(i,i.pendingProps),t.flags|=2,ii(i),i.memoizedState=null,t}function jM(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Mt){if(l.mode==="hidden")return t=Eu(i,l),i.lanes=536870912,ko(null,t);if(nd(i),(t=jt)?(t=$v(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=Mg(t),s.return=i,i.child=s,En=i,jt=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return Eu(i,l)}var d=t.memoizedState;if(d!==null){var M=d.dehydrated;if(nd(i),f)if(i.flags&256)i.flags&=-257,i=z0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(hn||bs(t,i,s,!1),f=(s&t.childLanes)!==0,hn||f){if(l=Xt,l!==null&&(M=Vl(l,s),M!==0&&M!==d.retryLane))throw d.retryLane=M,Lr(t,M),jn(l,t,M),Ed;Ou(),i=z0(t,i,s)}else t=d.treeContext,jt=mi(M.nextSibling),En=i,Mt=!0,qa=null,hi=!1,t!==null&&Tg(i,t),i=Eu(i,l),i.flags|=4096;return i}return t=oa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function bu(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function bd(t,i,s,l,f){return Fr(i),s=ad(t,i,s,l,void 0,f),l=rd(),t!==null&&!hn?(sd(t,i,f),ha(t,i,f)):(Mt&&l&&zf(i),i.flags|=1,Tn(t,i,s,f),i.child)}function H0(t,i,s,l,f,d){return Fr(i),i.updateQueue=null,s=kg(i,l,s,f),Vg(t),l=rd(),t!==null&&!hn?(sd(t,i,d),ha(t,i,d)):(Mt&&l&&zf(i),i.flags|=1,Tn(t,i,s,d),i.child)}function G0(t,i,s,l,f){if(Fr(i),i.stateNode===null){var d=ys,M=s.contextType;typeof M=="object"&&M!==null&&(d=bn(M)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Kf(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?bn(M):ys,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(yd(i,s,M,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Sd.enqueueReplaceState(d,d.state,null),Bo(i,l,d,f),Io(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,V=Vr(s,C);d.props=V;var ae=d.context,ge=s.contextType;M=ys,typeof ge=="object"&&ge!==null&&(M=bn(ge));var ye=s.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ae!==M)&&R0(i,d,l,M),Ka=!1;var oe=i.memoizedState;d.state=oe,Bo(i,l,d,f),Io(),ae=i.memoizedState,C||oe!==ae||Ka?(typeof ye=="function"&&(yd(i,s,ye,l),ae=i.memoizedState),(V=Ka||A0(i,s,V,l,oe,ae,M))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ae),d.props=l,d.state=ae,d.context=M,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,$f(t,i),M=i.memoizedProps,ge=Vr(s,M),d.props=ge,ye=i.pendingProps,oe=d.context,ae=s.contextType,V=ys,typeof ae=="object"&&ae!==null&&(V=bn(ae)),C=s.getDerivedStateFromProps,(ae=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==ye||oe!==V)&&R0(i,d,l,V),Ka=!1,oe=i.memoizedState,d.state=oe,Bo(i,l,d,f),Io();var de=i.memoizedState;M!==ye||oe!==de||Ka||t!==null&&t.dependencies!==null&&ru(t.dependencies)?(typeof C=="function"&&(yd(i,s,C,l),de=i.memoizedState),(ge=Ka||A0(i,s,ge,l,oe,de,V)||t!==null&&t.dependencies!==null&&ru(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,de,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,de,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),d.props=l,d.state=de,d.context=V,l=ge):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,bu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Hr(i,t.child,null,f),i.child=Hr(i,null,s,f)):Tn(t,i,s,f),i.memoizedState=d.state,t=i.child):t=ha(t,i,f),t}function V0(t,i,s,l){return Or(),i.flags|=256,Tn(t,i,s,l),i.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(t){return{baseLanes:t,cachePool:Ug()}}function Rd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ri),t}function k0(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Mt){if(f?Ja(i):er(),(t=jt)?(t=$v(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=Mg(t),s.return=i,i.child=s,En=i,jt=null)):t=null,t===null)throw Ya(i);return uh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(er(),f=i.mode,C=Tu({mode:"hidden",children:C},f),l=Nr(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Ad(s),l.childLanes=Rd(t,M,s),i.memoizedState=Td,ko(null,l)):(Ja(i),wd(i,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)i.flags&256?(Ja(i),i.flags&=-257,i=Cd(t,i,s)):i.memoizedState!==null?(er(),i.child=t.child,i.flags|=128,i=null):(er(),C=l.fallback,f=i.mode,l=Tu({mode:"visible",children:l.children},f),C=Nr(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Hr(i,t.child,null,s),l=i.child,l.memoizedState=Ad(s),l.childLanes=Rd(t,M,s),i.memoizedState=Td,i=ko(null,l));else if(Ja(i),uh(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var ae=M.dgst;M=ae,l=Error(r(419)),l.stack="",l.digest=M,Uo({value:l,source:null,stack:null}),i=Cd(t,i,s)}else if(hn||bs(t,i,s,!1),M=(s&t.childLanes)!==0,hn||M){if(M=Xt,M!==null&&(l=Vl(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Lr(t,l),jn(M,t,l),Ed;lh(C)||Ou(),i=Cd(t,i,s)}else lh(C)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,jt=mi(C.nextSibling),En=i,Mt=!0,qa=null,hi=!1,t!==null&&Tg(i,t),i=wd(i,l.children),i.flags|=4096);return i}return f?(er(),C=l.fallback,f=i.mode,V=t.child,ae=V.sibling,l=oa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ae!==null?C=oa(ae,C):(C=Nr(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,ko(null,l),l=i.child,C=t.child.memoizedState,C===null?C=Ad(s):(f=C.cachePool,f!==null?(V=fn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Ug(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Rd(t,M,s),i.memoizedState=Td,ko(t.child,l)):(Ja(i),s=t.child,t=s.sibling,s=oa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function wd(t,i){return i=Tu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Tu(t,i){return t=ti(22,t,null,i),t.lanes=0,t}function Cd(t,i,s){return Hr(i,t.child,null,s),t=wd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function X0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Xf(t.return,i,s)}function Dd(t,i,s,l,f,d){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=d)}function W0(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var M=rn.current,C=(M&2)!==0;if(C?(M=M&1|2,i.flags|=128):M&=1,le(rn,M),Tn(t,i,l,s),l=Mt?Do:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X0(t,s,i);else if(t.tag===19)X0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&hu(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Dd(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&hu(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Dd(i,!0,s,null,d,l);break;case"together":Dd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ha(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ir|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(bs(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=oa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=oa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ru(t)))}function qM(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),Za(i,fn,t.memoizedState.cache),Or();break;case 27:case 5:$e(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,nd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ja(i),i.flags|=128,null):(s&i.child.childLanes)!==0?k0(t,i,s):(Ja(i),t=ha(t,i,s),t!==null?t.sibling:null);Ja(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(bs(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return W0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),le(rn,rn.current),l)break;return null;case 22:return i.lanes=0,I0(t,i,s,i.pendingProps);case 24:Za(i,fn,t.memoizedState.cache)}return ha(t,i,s)}function j0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)hn=!0;else{if(!Ud(t,s)&&(i.flags&128)===0)return hn=!1,qM(t,i,s);hn=(t.flags&131072)!==0}else hn=!1,Mt&&(i.flags&1048576)!==0&&bg(i,Do,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Br(i.elementType),i.type=t,typeof t=="function")Ff(t)?(l=Vr(t,l),i.tag=1,i=G0(null,i,t,l,s)):(i.tag=0,i=bd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===U){i.tag=11,i=O0(null,i,t,l,s);break e}else if(f===P){i.tag=14,i=P0(null,i,t,l,s);break e}}throw i=fe(t)||t,Error(r(306,i,""))}}return i;case 0:return bd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Vr(l,i.pendingProps),G0(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,$f(t,i),Bo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Za(i,fn,l),l!==d.cache&&Wf(i,[fn],s,!0),Io(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=V0(t,i,l,s);break e}else if(l!==f){f=ci(Error(r(424)),i),Uo(f),i=V0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=mi(t.firstChild),En=i,Mt=!0,qa=null,hi=!0,s=Ig(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Or(),l===f){i=ha(t,i,s);break e}Tn(t,i,l,s)}i=i.child}return i;case 26:return bu(t,i),t===null?(s=i_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Mt||(s=i.type,t=i.pendingProps,l=Gu(re.current).createElement(s),l[ln]=i,l[gn]=t,An(l,s,t),W(l),i.stateNode=l):i.memoizedState=i_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return $e(i),t===null&&Mt&&(l=i.stateNode=e_(i.type,i.pendingProps,re.current),En=i,hi=!0,f=jt,lr(i.type)?(ch=f,jt=mi(l.firstChild)):jt=f),Tn(t,i,i.pendingProps.children,s),bu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Mt&&((f=l=jt)&&(l=EE(l,i.type,i.pendingProps,hi),l!==null?(i.stateNode=l,En=i,jt=mi(l.firstChild),hi=!1,f=!0):f=!1),f||Ya(i)),$e(i),f=i.type,d=i.pendingProps,M=t!==null?t.memoizedProps:null,l=d.children,rh(f,d)?l=null:M!==null&&rh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=ad(t,i,BM,null,null,s),al._currentValue=f),bu(t,i),Tn(t,i,l,s),i.child;case 6:return t===null&&Mt&&((t=s=jt)&&(s=bE(s,i.pendingProps,hi),s!==null?(i.stateNode=s,En=i,jt=null,t=!0):t=!1),t||Ya(i)),null;case 13:return k0(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Hr(i,null,l,s):Tn(t,i,l,s),i.child;case 11:return O0(t,i,i.type,i.pendingProps,s);case 7:return Tn(t,i,i.pendingProps,s),i.child;case 8:return Tn(t,i,i.pendingProps.children,s),i.child;case 12:return Tn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Za(i,i.type,l.value),Tn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Fr(i),f=bn(f),l=l(f),i.flags|=1,Tn(t,i,l,s),i.child;case 14:return P0(t,i,i.type,i.pendingProps,s);case 15:return F0(t,i,i.type,i.pendingProps,s);case 19:return W0(t,i,s);case 31:return jM(t,i,s);case 22:return I0(t,i,s,i.pendingProps);case 24:return Fr(i),l=bn(fn),t===null?(f=Yf(),f===null&&(f=Xt,d=jf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Kf(i),Za(i,fn,f)):((t.lanes&s)!==0&&($f(t,i),Bo(i,null,null,s),Io()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Za(i,fn,l)):(l=d.cache,Za(i,fn,l),l!==f.cache&&Wf(i,[fn],s,!0))),Tn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function pa(t){t.flags|=4}function Ld(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(xv())t.flags|=8192;else throw zr=uu,Zf}else t.flags&=-16777217}function q0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!l_(i))if(xv())t.flags|=8192;else throw zr=uu,Zf}function Au(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?It():536870912,t.lanes|=i,Fs|=i)}function Xo(t,i){if(!Mt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function YM(t,i,s){var l=i.pendingProps;switch(Hf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(i),null;case 1:return qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ca(fn),ze(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Es(i)?pa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vf())),qt(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(pa(i),d!==null?(qt(i),q0(i,d)):(qt(i),Ld(i,f,null,l,s))):d?d!==t.memoizedState?(pa(i),qt(i),q0(i,d)):(qt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&pa(i),qt(i),Ld(i,f,t,l,s)),null;case 27:if(tt(i),s=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return qt(i),null}t=Re.current,Es(i)?Ag(i):(t=e_(f,l,s),i.stateNode=t,pa(i))}return qt(i),null;case 5:if(tt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return qt(i),null}if(d=Re.current,Es(i))Ag(i);else{var M=Gu(re.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}d[ln]=i,d[gn]=l;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=d;e:switch(An(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&pa(i)}}return qt(i),Ld(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&pa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=re.current,Es(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=En,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||kv(t.nodeValue,s)),t||Ya(i,!0)}else t=Gu(t).createTextNode(l),t[ln]=i,i.stateNode=t}return qt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Es(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qt(i),t=!1}else s=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ii(i),i):(ii(i),null);if((i.flags&128)!==0)throw Error(r(558))}return qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Es(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qt(i),f=!1}else f=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ii(i),i):(ii(i),null)}return ii(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Au(i,i.updateQueue),qt(i),null);case 4:return ze(),t===null&&eh(i.stateNode.containerInfo),qt(i),null;case 10:return ca(i.type),qt(i),null;case 19:if(Y(rn),l=i.memoizedState,l===null)return qt(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Xo(l,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=hu(t),d!==null){for(i.flags|=128,Xo(l,!1),t=d.updateQueue,i.updateQueue=t,Au(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Sg(s,t),s=s.sibling;return le(rn,rn.current&1|2),Mt&&la(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>Uu&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304)}else{if(!f)if(t=hu(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Au(i,t),Xo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Mt)return qt(i),null}else 2*T()-l.renderingStartTime>Uu&&s!==536870912&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=rn.current,le(rn,f?s&1|2:s&1),Mt&&la(i,l.treeForkCount),t):(qt(i),null);case 22:case 23:return ii(i),td(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(qt(i),i.subtreeFlags&6&&(i.flags|=8192)):qt(i),s=i.updateQueue,s!==null&&Au(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&Y(Ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ca(fn),qt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function ZM(t,i){switch(Hf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ca(fn),ze(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return tt(i),null;case 31:if(i.memoizedState!==null){if(ii(i),i.alternate===null)throw Error(r(340));Or()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ii(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Or()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Y(rn),null;case 4:return ze(),null;case 10:return ca(i.type),null;case 22:case 23:return ii(i),td(),t!==null&&Y(Ir),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ca(fn),null;case 25:return null;default:return null}}function Y0(t,i){switch(Hf(i),i.tag){case 3:ca(fn),ze();break;case 26:case 27:case 5:tt(i);break;case 4:ze();break;case 31:i.memoizedState!==null&&ii(i);break;case 13:ii(i);break;case 19:Y(rn);break;case 10:ca(i.type);break;case 22:case 23:ii(i),td(),t!==null&&Y(Ir);break;case 24:ca(fn)}}function Wo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,M=s.inst;l=d(),M.destroy=l}s=s.next}while(s!==f)}}catch(C){zt(i,i.return,C)}}function tr(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,f=i;var V=s,ae=C;try{ae()}catch(ge){zt(f,V,ge)}}}l=l.next}while(l!==d)}}catch(ge){zt(i,i.return,ge)}}function Z0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{zg(i,s)}catch(l){zt(t,t.return,l)}}}function K0(t,i,s){s.props=Vr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function jo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){zt(t,i,f)}}function Vi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){zt(t,i,f)}else s.current=null}function $0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){zt(t,t.return,f)}}function Nd(t,i,s){try{var l=t.stateNode;vE(l,t.type,s,i),l[gn]=i}catch(f){zt(t,t.return,f)}}function Q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ra));else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Pd(t,i,s),t=t.sibling;t!==null;)Pd(t,i,s),t=t.sibling}function Ru(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&lr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ru(t,i,s),t=t.sibling;t!==null;)Ru(t,i,s),t=t.sibling}function J0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);An(i,l,s),i[ln]=t,i[gn]=s}catch(d){zt(t,t.return,d)}}var ma=!1,pn=!1,Fd=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function KM(t,i){if(t=t.containerInfo,ih=Yu,t=dg(t),Cf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var M=0,C=-1,V=-1,ae=0,ge=0,ye=t,oe=null;t:for(;;){for(var de;ye!==s||f!==0&&ye.nodeType!==3||(C=M+f),ye!==d||l!==0&&ye.nodeType!==3||(V=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(de=ye.firstChild)!==null;)oe=ye,ye=de;for(;;){if(ye===t)break t;if(oe===s&&++ae===f&&(C=M),oe===d&&++ge===l&&(V=M),(de=ye.nextSibling)!==null)break;ye=oe,oe=ye.parentNode}ye=de}s=C===-1||V===-1?null:{start:C,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:t,selectionRange:s},Yu=!1,Sn=i;Sn!==null;)if(i=Sn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Sn=t;else for(;Sn!==null;){switch(i=Sn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var ke=Vr(s.type,f);t=l.getSnapshotBeforeUpdate(ke,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)oh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Sn=t;break}Sn=i.return}}function tv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:va(t,s),l&4&&Wo(5,s);break;case 1:if(va(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){zt(s,s.return,M)}else{var f=Vr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){zt(s,s.return,M)}}l&64&&Z0(s),l&512&&jo(s,s.return);break;case 3:if(va(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{zg(t,i)}catch(M){zt(s,s.return,M)}}break;case 27:i===null&&l&4&&J0(s);case 26:case 5:va(t,s),i===null&&l&4&&$0(s),l&512&&jo(s,s.return);break;case 12:va(t,s);break;case 31:va(t,s),l&4&&av(t,s);break;case 13:va(t,s),l&4&&rv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=rE.bind(null,s),TE(t,s))));break;case 22:if(l=s.memoizedState!==null||ma,!l){i=i!==null&&i.memoizedState!==null||pn,f=ma;var d=pn;ma=l,(pn=i)&&!d?_a(t,s,(s.subtreeFlags&8772)!==0):va(t,s),ma=f,pn=d}break;case 30:break;default:va(t,s)}}function nv(t){var i=t.alternate;i!==null&&(t.alternate=null,nv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&yo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Vn=!1;function ga(t,i,s){for(s=s.child;s!==null;)iv(t,i,s),s=s.sibling}function iv(t,i,s){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ae,s)}catch{}switch(s.tag){case 26:pn||Vi(s,i),ga(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:pn||Vi(s,i);var l=$t,f=Vn;lr(s.type)&&($t=s.stateNode,Vn=!1),ga(t,i,s),tl(s.stateNode),$t=l,Vn=f;break;case 5:pn||Vi(s,i);case 6:if(l=$t,f=Vn,$t=null,ga(t,i,s),$t=l,Vn=f,$t!==null)if(Vn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(d){zt(s,i,d)}else try{$t.removeChild(s.stateNode)}catch(d){zt(s,i,d)}break;case 18:$t!==null&&(Vn?(t=$t,Zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xs(t)):Zv($t,s.stateNode));break;case 4:l=$t,f=Vn,$t=s.stateNode.containerInfo,Vn=!0,ga(t,i,s),$t=l,Vn=f;break;case 0:case 11:case 14:case 15:tr(2,s,i),pn||tr(4,s,i),ga(t,i,s);break;case 1:pn||(Vi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&K0(s,i,l)),ga(t,i,s);break;case 21:ga(t,i,s);break;case 22:pn=(l=pn)||s.memoizedState!==null,ga(t,i,s),pn=l;break;default:ga(t,i,s)}}function av(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(s){zt(i,i.return,s)}}}function rv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(s){zt(i,i.return,s)}}function $M(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ev),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ev),i;default:throw Error(r(435,t.tag))}}function wu(t,i){var s=$M(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=sE.bind(null,t,l);l.then(f,f)}})}function kn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,M=i,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(lr(C.type)){$t=C.stateNode,Vn=!1;break e}break;case 5:$t=C.stateNode,Vn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,Vn=!0;break e}C=C.return}if($t===null)throw Error(r(160));iv(d,M,f),$t=null,Vn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)sv(i,t),i=i.sibling}var Di=null;function sv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(i,t),Xn(t),l&4&&(tr(3,t,t.return),Wo(3,t),tr(5,t,t.return));break;case 1:kn(i,t),Xn(t),l&512&&(pn||s===null||Vi(s,s.return)),l&64&&ma&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Di;if(kn(i,t),Xn(t),l&512&&(pn||s===null||Vi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Rr]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),An(d,l,s),d[ln]=t,W(d),l=d;break e;case"link":var M=s_("link","href",f).get(l+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(d=M[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}d=f.createElement(l),An(d,l,s),f.head.appendChild(d);break;case"meta":if(M=s_("meta","content",f).get(l+(s.content||""))){for(C=0;C<M.length;C++)if(d=M[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}d=f.createElement(l),An(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[ln]=t,W(d),l=d}t.stateNode=l}else o_(f,t.type,t.stateNode);else t.stateNode=r_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?o_(f,t.type,t.stateNode):r_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Nd(t,t.memoizedProps,s.memoizedProps)}break;case 27:kn(i,t),Xn(t),l&512&&(pn||s===null||Vi(s,s.return)),s!==null&&l&4&&Nd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(kn(i,t),Xn(t),l&512&&(pn||s===null||Vi(s,s.return)),t.flags&32){f=t.stateNode;try{Fn(f,"")}catch(ke){zt(t,t.return,ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Nd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Fd=!0);break;case 6:if(kn(i,t),Xn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ke){zt(t,t.return,ke)}}break;case 3:if(Xu=null,f=Di,Di=Vu(i.containerInfo),kn(i,t),Di=f,Xn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(ke){zt(t,t.return,ke)}Fd&&(Fd=!1,ov(t));break;case 4:l=Di,Di=Vu(t.stateNode.containerInfo),kn(i,t),Xn(t),Di=l;break;case 12:kn(i,t),Xn(t);break;case 31:kn(i,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wu(t,l)));break;case 13:kn(i,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Du=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wu(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ae=ma,ge=pn;if(ma=ae||f,pn=ge||V,kn(i,t),pn=ge,ma=ae,Xn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||ma||pn||kr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,f)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var ye=V.memoizedProps.style,oe=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;C.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(ke){zt(V,V.return,ke)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(ke){zt(V,V.return,ke)}}}else if(i.tag===18){if(s===null){V=i;try{var de=V.stateNode;f?Kv(de,!0):Kv(V.stateNode,!1)}catch(ke){zt(V,V.return,ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,wu(t,s))));break;case 19:kn(i,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,wu(t,l)));break;case 30:break;case 21:break;default:kn(i,t),Xn(t)}}function Xn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Q0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Od(t);Ru(t,d,f);break;case 5:var M=s.stateNode;s.flags&32&&(Fn(M,""),s.flags&=-33);var C=Od(t);Ru(t,C,M);break;case 3:case 4:var V=s.stateNode.containerInfo,ae=Od(t);Pd(t,ae,V);break;default:throw Error(r(161))}}catch(ge){zt(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ov(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;ov(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function va(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tv(t,i.alternate,i),i=i.sibling}function kr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:tr(4,i,i.return),kr(i);break;case 1:Vi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&K0(i,i.return,s),kr(i);break;case 27:tl(i.stateNode);case 26:case 5:Vi(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}t=t.sibling}}function _a(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:_a(f,d,s),Wo(4,d);break;case 1:if(_a(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){zt(l,l.return,ae)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Bg(V[f],C)}catch(ae){zt(l,l.return,ae)}}s&&M&64&&Z0(d),jo(d,d.return);break;case 27:J0(d);case 26:case 5:_a(f,d,s),s&&l===null&&M&4&&$0(d),jo(d,d.return);break;case 12:_a(f,d,s);break;case 31:_a(f,d,s),s&&M&4&&av(f,d);break;case 13:_a(f,d,s),s&&M&4&&rv(f,d);break;case 22:d.memoizedState===null&&_a(f,d,s),jo(d,d.return);break;case 30:break;default:_a(f,d,s)}i=i.sibling}}function Id(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Lo(s))}function Bd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t))}function Ui(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lv(t,i,s,l),i=i.sibling}function lv(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ui(t,i,s,l),f&2048&&Wo(9,i);break;case 1:Ui(t,i,s,l);break;case 3:Ui(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t)));break;case 12:if(f&2048){Ui(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,M=d.id,C=d.onPostCommit;typeof C=="function"&&C(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){zt(i,i.return,V)}}else Ui(t,i,s,l);break;case 31:Ui(t,i,s,l);break;case 13:Ui(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Ui(t,i,s,l):qo(t,i):d._visibility&2?Ui(t,i,s,l):(d._visibility|=2,Ns(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Id(M,i);break;case 24:Ui(t,i,s,l),f&2048&&Bd(i.alternate,i);break;default:Ui(t,i,s,l)}}function Ns(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,M=i,C=s,V=l,ae=M.flags;switch(M.tag){case 0:case 11:case 15:Ns(d,M,C,V,f),Wo(8,M);break;case 23:break;case 22:var ge=M.stateNode;M.memoizedState!==null?ge._visibility&2?Ns(d,M,C,V,f):qo(d,M):(ge._visibility|=2,Ns(d,M,C,V,f)),f&&ae&2048&&Id(M.alternate,M);break;case 24:Ns(d,M,C,V,f),f&&ae&2048&&Bd(M.alternate,M);break;default:Ns(d,M,C,V,f)}i=i.sibling}}function qo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:qo(s,l),f&2048&&Id(l.alternate,l);break;case 24:qo(s,l),f&2048&&Bd(l.alternate,l);break;default:qo(s,l)}i=i.sibling}}var Yo=8192;function Os(t,i,s){if(t.subtreeFlags&Yo)for(t=t.child;t!==null;)uv(t,i,s),t=t.sibling}function uv(t,i,s){switch(t.tag){case 26:Os(t,i,s),t.flags&Yo&&t.memoizedState!==null&&IE(s,Di,t.memoizedState,t.memoizedProps);break;case 5:Os(t,i,s);break;case 3:case 4:var l=Di;Di=Vu(t.stateNode.containerInfo),Os(t,i,s),Di=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Yo,Yo=16777216,Os(t,i,s),Yo=l):Os(t,i,s));break;default:Os(t,i,s)}}function cv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,dv(l,t)}cv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fv(t),t=t.sibling}function fv(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&tr(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Cu(t)):Zo(t);break;default:Zo(t)}}function Cu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,dv(l,t)}cv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:tr(8,i,i.return),Cu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Cu(i));break;default:Cu(i)}t=t.sibling}}function dv(t,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:tr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else e:for(s=t;Sn!==null;){l=Sn;var f=l.sibling,d=l.return;if(nv(l),l===s){Sn=null;break e}if(f!==null){f.return=d,Sn=f;break e}Sn=d}}}var QM={getCacheForType:function(t){var i=bn(fn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return bn(fn).controller.signal}},JM=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,vt=null,yt=0,Bt=0,ai=null,nr=!1,Ps=!1,zd=!1,xa=0,nn=0,ir=0,Xr=0,Hd=0,ri=0,Fs=0,Ko=null,Wn=null,Gd=!1,Du=0,hv=0,Uu=1/0,Lu=null,ar=null,_n=0,rr=null,Is=null,ya=0,Vd=0,kd=null,pv=null,$o=0,Xd=null;function si(){return(Lt&2)!==0&&yt!==0?yt&-yt:F.T!==null?Kd():zi()}function mv(){if(ri===0)if((yt&536870912)===0||Mt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function jn(t,i,s){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Bs(t,0),sr(t,yt,ri,!1)),Nn(t,s),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(Xr|=s),nn===4&&sr(t,yt,ri,!1)),ki(t))}function gv(t,i,s){if((Lt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ge(t,i),f=l?nE(t,i):jd(t,i,!0),d=l;do{if(f===0){Ps&&!l&&sr(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!eE(s)){f=jd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var C=t;f=Ko;var V=C.current.memoizedState.isDehydrated;if(V&&(Bs(C,M).flags|=256),M=jd(C,M,!1),M!==2){if(zd&&!V){C.errorRecoveryDisabledLanes|=d,Xr|=d,f=4;break e}d=Wn,Wn=f,d!==null&&(Wn===null?Wn=d:Wn.push.apply(Wn,d))}f=M}if(d=!1,f!==2)continue}}if(f===1){Bs(t,0),sr(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:sr(l,i,ri,!nr);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Du+300-T(),10<f)){if(sr(l,i,ri,!nr),he(l,0,!0)!==0)break e;ya=i,l.timeoutHandle=qv(vv.bind(null,l,s,Wn,Lu,Gd,i,ri,Xr,Fs,nr,d,"Throttled",-0,0),f);break e}vv(l,s,Wn,Lu,Gd,i,ri,Xr,Fs,nr,d,null,-0,0)}}break}while(!0);ki(t)}function vv(t,i,s,l,f,d,M,C,V,ae,ge,ye,oe,de){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},uv(i,d,ye);var ke=(d&62914560)===d?Du-T():(d&4194048)===d?hv-T():0;if(ke=BE(ye,ke),ke!==null){ya=d,t.cancelPendingCommit=ke(Tv.bind(null,t,i,d,s,l,f,M,C,V,ge,ye,null,oe,de)),sr(t,d,M,!ae);return}}Tv(t,i,d,s,l,f,M,C,V)}function eE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ei(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i,s,l){i&=~Hd,i&=~Xr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Pe(f),M=1<<d;l[d]=-1,f&=~M}s!==0&&xo(t,s,i)}function Nu(){return(Lt&6)===0?(Qo(0),!1):!0}function Wd(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,ua=Pr=null,od(t),ws=null,Oo=0,t=vt;for(;t!==null;)Y0(t.alternate,t),t=t.return;vt=null}}function Bs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,yE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ya=0,Wd(),Xt=t,vt=s=oa(t.current,null),yt=i,Bt=0,ai=null,nr=!1,Ps=Ge(t,i),zd=!1,Fs=ri=Hd=Xr=ir=nn=0,Wn=Ko=null,Gd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Pe(l),d=1<<f;i|=t[f],l&=~d}return xa=i,eu(),s}function _v(t,i){ct=null,F.H=Vo,i===Rs||i===lu?(i=Og(),Bt=3):i===Zf?(i=Og(),Bt=4):Bt=i===Ed?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,vt===null&&(nn=1,Mu(t,ci(i,t.current)))}function xv(){var t=ni.current;return t===null?!0:(yt&4194048)===yt?pi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===pi:!1}function yv(){var t=F.H;return F.H=Vo,t===null?Vo:t}function Sv(){var t=F.A;return F.A=QM,t}function Ou(){nn=4,nr||(yt&4194048)!==yt&&ni.current!==null||(Ps=!0),(ir&134217727)===0&&(Xr&134217727)===0||Xt===null||sr(Xt,yt,ri,!1)}function jd(t,i,s){var l=Lt;Lt|=2;var f=yv(),d=Sv();(Xt!==t||yt!==i)&&(Lu=null,Bs(t,i)),i=!1;var M=nn;e:do try{if(Bt!==0&&vt!==null){var C=vt,V=ai;switch(Bt){case 8:Wd(),M=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(i=!0);var ae=Bt;if(Bt=0,ai=null,zs(t,C,V,ae),s&&Ps){M=0;break e}break;default:ae=Bt,Bt=0,ai=null,zs(t,C,V,ae)}}tE(),M=nn;break}catch(ge){_v(t,ge)}while(!0);return i&&t.shellSuspendCounter++,ua=Pr=null,Lt=l,F.H=f,F.A=d,vt===null&&(Xt=null,yt=0,eu()),M}function tE(){for(;vt!==null;)Mv(vt)}function nE(t,i){var s=Lt;Lt|=2;var l=yv(),f=Sv();Xt!==t||yt!==i?(Lu=null,Uu=T()+500,Bs(t,i)):Ps=Ge(t,i);e:do try{if(Bt!==0&&vt!==null){i=vt;var d=ai;t:switch(Bt){case 1:Bt=0,ai=null,zs(t,i,d,1);break;case 2:case 9:if(Lg(d)){Bt=0,ai=null,Ev(i);break}i=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),ki(t)},d.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Lg(d)?(Bt=0,ai=null,Ev(i)):(Bt=0,ai=null,zs(t,i,d,7));break;case 5:var M=null;switch(vt.tag){case 26:M=vt.memoizedState;case 5:case 27:var C=vt;if(M?l_(M):C.stateNode.complete){Bt=0,ai=null;var V=C.sibling;if(V!==null)vt=V;else{var ae=C.return;ae!==null?(vt=ae,Pu(ae)):vt=null}break t}}Bt=0,ai=null,zs(t,i,d,5);break;case 6:Bt=0,ai=null,zs(t,i,d,6);break;case 8:Wd(),nn=6;break e;default:throw Error(r(462))}}iE();break}catch(ge){_v(t,ge)}while(!0);return ua=Pr=null,F.H=l,F.A=f,Lt=s,vt!==null?0:(Xt=null,yt=0,eu(),nn)}function iE(){for(;vt!==null&&!qe();)Mv(vt)}function Mv(t){var i=j0(t.alternate,t,xa);t.memoizedProps=t.pendingProps,i===null?Pu(t):vt=i}function Ev(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=H0(s,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=H0(s,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:od(i);default:Y0(s,i),i=vt=Sg(i,xa),i=j0(s,i,xa)}t.memoizedProps=t.pendingProps,i===null?Pu(t):vt=i}function zs(t,i,s,l){ua=Pr=null,od(i),ws=null,Oo=0;var f=i.return;try{if(WM(t,f,i,s,yt)){nn=1,Mu(t,ci(s,t.current)),vt=null;return}}catch(d){if(f!==null)throw vt=f,d;nn=1,Mu(t,ci(s,t.current)),vt=null;return}i.flags&32768?(Mt||l===1?t=!0:Ps||(yt&536870912)!==0?t=!1:(nr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),bv(i,t)):Pu(i)}function Pu(t){var i=t;do{if((i.flags&32768)!==0){bv(i,nr);return}t=i.return;var s=YM(i.alternate,i,xa);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);nn===0&&(nn=5)}function bv(t,i){do{var s=ZM(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);nn=6,vt=null}function Tv(t,i,s,l,f,d,M,C,V){t.cancelPendingCommit=null;do Fu();while(_n!==0);if((Lt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Of,Ti(t,s,d,M,C,V),t===Xt&&(vt=Xt=null,yt=0),Is=i,rr=t,ya=s,Vd=d,kd=f,pv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oE(me,function(){return Dv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,M=Lt,Lt|=4;try{KM(t,i,s)}finally{Lt=M,H.p=f,F.T=l}}_n=1,Av(),Rv(),wv()}}function Av(){if(_n===1){_n=0;var t=rr,i=Is,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Lt;Lt|=4;try{sv(i,t);var d=ah,M=dg(t.containerInfo),C=d.focusedElem,V=d.selectionRange;if(M!==C&&C&&C.ownerDocument&&fg(C.ownerDocument.documentElement,C)){if(V!==null&&Cf(C)){var ae=V.start,ge=V.end;if(ge===void 0&&(ge=ae),"selectionStart"in C)C.selectionStart=ae,C.selectionEnd=Math.min(ge,C.value.length);else{var ye=C.ownerDocument||document,oe=ye&&ye.defaultView||window;if(oe.getSelection){var de=oe.getSelection(),ke=C.textContent.length,et=Math.min(V.start,ke),kt=V.end===void 0?et:Math.min(V.end,ke);!de.extend&&et>kt&&(M=kt,kt=et,et=M);var Z=cg(C,et),X=cg(C,kt);if(Z&&X&&(de.rangeCount!==1||de.anchorNode!==Z.node||de.anchorOffset!==Z.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var ie=ye.createRange();ie.setStart(Z.node,Z.offset),de.removeAllRanges(),et>kt?(de.addRange(ie),de.extend(X.node,X.offset)):(ie.setEnd(X.node,X.offset),de.addRange(ie))}}}}for(ye=[],de=C;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ye.length;C++){var _e=ye[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Yu=!!ih,ah=ih=null}finally{Lt=f,H.p=l,F.T=s}}t.current=i,_n=2}}function Rv(){if(_n===2){_n=0;var t=rr,i=Is,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Lt;Lt|=4;try{tv(t,i.alternate,i)}finally{Lt=f,H.p=l,F.T=s}}_n=3}}function wv(){if(_n===4||_n===3){_n=0,N();var t=rr,i=Is,s=ya,l=pv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,Is=rr=null,Cv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ar=null),fs(s),i=i.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=H.p,H.p=2,F.T=null;try{for(var d=t.onRecoverableError,M=0;M<l.length;M++){var C=l[M];d(C.value,{componentStack:C.stack})}}finally{F.T=i,H.p=f}}(ya&3)!==0&&Fu(),ki(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Xd?$o++:($o=0,Xd=t):$o=0,Qo(0)}}function Cv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Lo(i)))}function Fu(){return Av(),Rv(),wv(),Dv()}function Dv(){if(_n!==5)return!1;var t=rr,i=Vd;Vd=0;var s=fs(ya),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=kd,kd=null;var d=rr,M=ya;if(_n=0,Is=rr=null,ya=0,(Lt&6)!==0)throw Error(r(331));var C=Lt;if(Lt|=4,fv(d.current),lv(d,d.current,M,s),Lt=C,Qo(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{H.p=f,F.T=l,Cv(t,i)}}function Uv(t,i,s){i=ci(s,i),i=Md(t.stateNode,i,2),t=Qa(t,i,2),t!==null&&(Nn(t,2),ki(t))}function zt(t,i,s){if(t.tag===3)Uv(t,t,s);else for(;i!==null;){if(i.tag===3){Uv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=ci(s,t),s=L0(2),l=Qa(i,s,2),l!==null&&(N0(s,l,i,t),Nn(l,2),ki(l));break}}i=i.return}}function qd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new JM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(zd=!0,f.add(s),t=aE.bind(null,t,i,s),i.then(t,t))}function aE(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Xt===t&&(yt&s)===s&&(nn===4||nn===3&&(yt&62914560)===yt&&300>T()-Du?(Lt&2)===0&&Bs(t,0):Hd|=s,Fs===yt&&(Fs=0)),ki(t)}function Lv(t,i){i===0&&(i=It()),t=Lr(t,i),t!==null&&(Nn(t,i),ki(t))}function rE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Lv(t,s)}function sE(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Lv(t,s)}function oE(t,i){return bt(t,i)}var Iu=null,Hs=null,Yd=!1,Bu=!1,Zd=!1,or=0;function ki(t){t!==Hs&&t.next===null&&(Hs===null?Iu=Hs=t:Hs=Hs.next=t),Bu=!0,Yd||(Yd=!0,uE())}function Qo(t,i){if(!Zd&&Bu){Zd=!0;do for(var s=!1,l=Iu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var M=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=f&~(M&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Fv(l,d))}else d=yt,d=he(l,l===Xt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ge(l,d)||(s=!0,Fv(l,d));l=l.next}while(s);Zd=!1}}function lE(){Nv()}function Nv(){Bu=Yd=!1;var t=0;or!==0&&xE()&&(t=or);for(var i=T(),s=null,l=Iu;l!==null;){var f=l.next,d=Ov(l,i);d===0?(l.next=null,s===null?Iu=f:s.next=f,f===null&&(Hs=s)):(s=l,(t!==0||(d&3)!==0)&&(Bu=!0)),l=f}_n!==0&&_n!==5||Qo(t),or!==0&&(or=0)}function Ov(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var M=31-Pe(d),C=1<<M,V=f[M];V===-1?((C&s)===0||(C&l)!==0)&&(f[M]=at(C,i)):V<=i&&(t.expiredLanes|=C),d&=~C}if(i=Xt,s=yt,s=he(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ge(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ot(l),fs(s)){case 2:case 8:s=Se;break;case 32:s=me;break;case 268435456:s=De;break;default:s=me}return l=Pv.bind(null,t),s=bt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ot(l),t.callbackPriority=2,t.callbackNode=null,2}function Pv(t,i){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Fu()&&t.callbackNode!==s)return null;var l=yt;return l=he(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(gv(t,l,i),Ov(t,T()),t.callbackNode!=null&&t.callbackNode===s?Pv.bind(null,t):null)}function Fv(t,i){if(Fu())return null;gv(t,i,!0)}function uE(){SE(function(){(Lt&6)!==0?bt(ve,lE):Nv()})}function Kd(){if(or===0){var t=Ts;t===0&&(t=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),or=t}return or}function Iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(""+t)}function Bv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function cE(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Iv((f[gn]||null).action),M=l.submitter;M&&(i=(i=M[gn]||null)?Iv(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var C=new Kl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(or!==0){var V=M?Bv(f,M):new FormData(f);gd(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=M?Bv(f,M):new FormData(f),gd(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var $d=0;$d<Nf.length;$d++){var Qd=Nf[$d],fE=Qd.toLowerCase(),dE=Qd[0].toUpperCase()+Qd.slice(1);Ci(fE,"on"+dE)}Ci(mg,"onAnimationEnd"),Ci(gg,"onAnimationIteration"),Ci(vg,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(wM,"onTransitionRun"),Ci(CM,"onTransitionStart"),Ci(DM,"onTransitionCancel"),Ci(_g,"onTransitionEnd"),Ue("onMouseEnter",["mouseout","mouseover"]),Ue("onMouseLeave",["mouseout","mouseover"]),Ue("onPointerEnter",["pointerout","pointerover"]),Ue("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function zv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var M=l.length-1;0<=M;M--){var C=l[M],V=C.instance,ae=C.currentTarget;if(C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ae;try{d(f)}catch(ge){Jl(ge)}f.currentTarget=null,d=V}else for(M=0;M<l.length;M++){if(C=l[M],V=C.instance,ae=C.currentTarget,C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ae;try{d(f)}catch(ge){Jl(ge)}f.currentTarget=null,d=V}}}}function _t(t,i){var s=i[Va];s===void 0&&(s=i[Va]=new Set);var l=t+"__bubble";s.has(l)||(Hv(i,t,2,!1),s.add(l))}function Jd(t,i,s){var l=0;i&&(l|=4),Hv(s,t,l,i)}var zu="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[zu]){t[zu]=!0,ce.forEach(function(s){s!=="selectionchange"&&(hE.has(s)||Jd(s,!1,t),Jd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[zu]||(i[zu]=!0,Jd("selectionchange",!1,i))}}function Hv(t,i,s,l){switch(m_(i)){case 2:var f=GE;break;case 8:f=VE;break;default:f=mh}s=f.bind(null,i,s,t),f=void 0,!yf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function th(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;C!==null;){if(M=ka(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=d=M;continue e}C=C.parentNode}}l=l.return}Wm(function(){var ae=d,ge=_f(s),ye=[];e:{var oe=xg.get(t);if(oe!==void 0){var de=Kl,ke=t;switch(t){case"keypress":if(Yl(s)===0)break e;case"keydown":case"keyup":de=sM;break;case"focusin":ke="focus",de=bf;break;case"focusout":ke="blur",de=bf;break;case"beforeblur":case"afterblur":de=bf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=uM;break;case mg:case gg:case vg:de=$S;break;case _g:de=fM;break;case"scroll":case"scrollend":de=jS;break;case"wheel":de=hM;break;case"copy":case"cut":case"paste":de=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Km;break;case"toggle":case"beforetoggle":de=mM}var et=(i&4)!==0,kt=!et&&(t==="scroll"||t==="scrollend"),Z=et?oe!==null?oe+"Capture":null:oe;et=[];for(var X=ae,ie;X!==null;){var _e=X;if(ie=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ie===null||Z===null||(_e=So(X,Z),_e!=null&&et.push(el(X,_e,ie))),kt)break;X=X.return}0<et.length&&(oe=new de(oe,ke,null,s,ge),ye.push({event:oe,listeners:et}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",oe&&s!==vf&&(ke=s.relatedTarget||s.fromElement)&&(ka(ke)||ke[ia]))break e;if((de||oe)&&(oe=ge.window===ge?ge:(oe=ge.ownerDocument)?oe.defaultView||oe.parentWindow:window,de?(ke=s.relatedTarget||s.toElement,de=ae,ke=ke?ka(ke):null,ke!==null&&(kt=u(ke),et=ke.tag,ke!==kt||et!==5&&et!==27&&et!==6)&&(ke=null)):(de=null,ke=ae),de!==ke)){if(et=Ym,_e="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=Km,_e="onPointerLeave",Z="onPointerEnter",X="pointer"),kt=de==null?oe:wr(de),ie=ke==null?oe:wr(ke),oe=new et(_e,X+"leave",de,s,ge),oe.target=kt,oe.relatedTarget=ie,_e=null,ka(ge)===ae&&(et=new et(Z,X+"enter",ke,s,ge),et.target=ie,et.relatedTarget=kt,_e=et),kt=_e,de&&ke)t:{for(et=pE,Z=de,X=ke,ie=0,_e=Z;_e;_e=et(_e))ie++;_e=0;for(var Qe=X;Qe;Qe=et(Qe))_e++;for(;0<ie-_e;)Z=et(Z),ie--;for(;0<_e-ie;)X=et(X),_e--;for(;ie--;){if(Z===X||X!==null&&Z===X.alternate){et=Z;break t}Z=et(Z),X=et(X)}et=null}else et=null;de!==null&&Gv(ye,oe,de,et,!1),ke!==null&&kt!==null&&Gv(ye,kt,ke,et,!0)}}e:{if(oe=ae?wr(ae):window,de=oe.nodeName&&oe.nodeName.toLowerCase(),de==="select"||de==="input"&&oe.type==="file")var wt=ag;else if(ng(oe))if(rg)wt=TM;else{wt=EM;var Ye=MM}else de=oe.nodeName,!de||de.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ae&&hs(ae.elementType)&&(wt=ag):wt=bM;if(wt&&(wt=wt(t,ae))){ig(ye,wt,s,ge);break e}Ye&&Ye(t,oe,ae),t==="focusout"&&ae&&oe.type==="number"&&ae.memoizedProps.value!=null&&Ri(oe,"number",oe.value)}switch(Ye=ae?wr(ae):window,t){case"focusin":(ng(Ye)||Ye.contentEditable==="true")&&(vs=Ye,Df=ae,Co=null);break;case"focusout":Co=Df=vs=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,hg(ye,s,ge);break;case"selectionchange":if(RM)break;case"keydown":case"keyup":hg(ye,s,ge)}var ht;if(Af)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else gs?eg(t,s)&&(St="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(St="onCompositionStart");St&&($m&&s.locale!=="ko"&&(gs||St!=="onCompositionStart"?St==="onCompositionEnd"&&gs&&(ht=jm()):(Wa=ge,Sf="value"in Wa?Wa.value:Wa.textContent,gs=!0)),Ye=Hu(ae,St),0<Ye.length&&(St=new Zm(St,t,null,s,ge),ye.push({event:St,listeners:Ye}),ht?St.data=ht:(ht=tg(s),ht!==null&&(St.data=ht)))),(ht=vM?_M(t,s):xM(t,s))&&(St=Hu(ae,"onBeforeInput"),0<St.length&&(Ye=new Zm("onBeforeInput","beforeinput",null,s,ge),ye.push({event:Ye,listeners:St}),Ye.data=ht)),cE(ye,t,ae,s,ge)}zv(ye,i)})}function el(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Hu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=So(t,s),f!=null&&l.unshift(el(t,f,d)),f=So(t,i),f!=null&&l.push(el(t,f,d))),t.tag===3)return l;t=t.return}return[]}function pE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gv(t,i,s,l,f){for(var d=i._reactName,M=[];s!==null&&s!==l;){var C=s,V=C.alternate,ae=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||ae===null||(V=ae,f?(ae=So(s,d),ae!=null&&M.unshift(el(s,ae,V))):f||(ae=So(s,d),ae!=null&&M.push(el(s,ae,V)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var mE=/\r\n?/g,gE=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(mE,`
`).replace(gE,"")}function kv(t,i){return i=Vv(i),Vv(t)===i}function Vt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fn(t,""+l);break;case"className":ot(t,"class",l);break;case"tabIndex":ot(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(t,s,l);break;case"style":aa(t,l,d);break;case"data":if(i!=="object"){ot(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=jl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Vt(t,i,"name",f.name,f,null),Vt(t,i,"formEncType",f.formEncType,f,null),Vt(t,i,"formMethod",f.formMethod,f,null),Vt(t,i,"formTarget",f.formTarget,f,null)):(Vt(t,i,"encType",f.encType,f,null),Vt(t,i,"method",f.method,f,null),Vt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=jl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ra);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=jl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":_t("beforetoggle",t),_t("toggle",t),it(t,"popover",l);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":it(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=XS.get(s)||s,it(t,s,l))}}function nh(t,i,s,l,f,d){switch(s){case"style":aa(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Fn(t,l):(typeof l=="number"||typeof l=="bigint")&&Fn(t,""+l);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[gn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):it(t,s,l)}}}function An(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,d,M,s,null)}}f&&Vt(t,i,"srcSet",s.srcSet,s,null),l&&Vt(t,i,"src",s.src,s,null);return;case"input":_t("invalid",t);var C=d=M=f=null,V=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":M=ge;break;case"checked":V=ge;break;case"defaultChecked":ae=ge;break;case"value":d=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:Vt(t,i,l,ge,s,null)}}Qn(t,d,C,V,ae,M,f,!1);return;case"select":_t("invalid",t),l=M=d=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Vt(t,i,f,C,s,null)}i=d,s=M,t.multiple=!!l,i!=null?Jn(t,!!l,i,!1):s!=null&&Jn(t,!!l,s,!0);return;case"textarea":_t("invalid",t),d=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Vt(t,i,M,C,s,null)}un(t,l,f,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,i,V,l,s,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(l=0;l<Jo.length;l++)_t(Jo[l],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,ae,l,s,null)}return;default:if(hs(i)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&nh(t,i,ge,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Vt(t,i,C,l,s,null))}function vE(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,M=null,C=null,V=null,ae=null,ge=null;for(de in s){var ye=s[de];if(s.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":V=ye;default:l.hasOwnProperty(de)||Vt(t,i,de,null,l,ye)}}for(var oe in l){var de=l[oe];if(ye=s[oe],l.hasOwnProperty(oe)&&(de!=null||ye!=null))switch(oe){case"type":d=de;break;case"name":f=de;break;case"checked":ae=de;break;case"defaultChecked":ge=de;break;case"value":M=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==ye&&Vt(t,i,oe,de,l,ye)}}Pn(t,M,C,V,ae,ge,d,f);return;case"select":de=M=C=oe=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":de=V;default:l.hasOwnProperty(d)||Vt(t,i,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":oe=d;break;case"defaultValue":C=d;break;case"multiple":M=d;default:d!==V&&Vt(t,i,f,d,l,V)}i=C,s=M,l=de,oe!=null?Jn(t,!!s,oe,!1):!!l!=!!s&&(i!=null?Jn(t,!!s,i,!0):Jn(t,!!s,s?[]:"",!1));return;case"textarea":de=oe=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(t,i,C,null,l,f)}for(M in l)if(f=l[M],d=s[M],l.hasOwnProperty(M)&&(f!=null||d!=null))switch(M){case"value":oe=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Vt(t,i,M,f,l,d)}Pt(t,oe,de);return;case"option":for(var ke in s)if(oe=s[ke],s.hasOwnProperty(ke)&&oe!=null&&!l.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:Vt(t,i,ke,null,l,oe)}for(V in l)if(oe=l[V],de=s[V],l.hasOwnProperty(V)&&oe!==de&&(oe!=null||de!=null))switch(V){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Vt(t,i,V,oe,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)oe=s[et],s.hasOwnProperty(et)&&oe!=null&&!l.hasOwnProperty(et)&&Vt(t,i,et,null,l,oe);for(ae in l)if(oe=l[ae],de=s[ae],l.hasOwnProperty(ae)&&oe!==de&&(oe!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,i));break;default:Vt(t,i,ae,oe,l,de)}return;default:if(hs(i)){for(var kt in s)oe=s[kt],s.hasOwnProperty(kt)&&oe!==void 0&&!l.hasOwnProperty(kt)&&nh(t,i,kt,void 0,l,oe);for(ge in l)oe=l[ge],de=s[ge],!l.hasOwnProperty(ge)||oe===de||oe===void 0&&de===void 0||nh(t,i,ge,oe,l,de);return}}for(var Z in s)oe=s[Z],s.hasOwnProperty(Z)&&oe!=null&&!l.hasOwnProperty(Z)&&Vt(t,i,Z,null,l,oe);for(ye in l)oe=l[ye],de=s[ye],!l.hasOwnProperty(ye)||oe===de||oe==null&&de==null||Vt(t,i,ye,oe,l,de)}function Xv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _E(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,M=f.initiatorType,C=f.duration;if(d&&C&&Xv(M)){for(M=0,C=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],ae=V.startTime;if(ae>C)break;var ge=V.transferSize,ye=V.initiatorType;ge&&Xv(ye)&&(V=V.responseEnd,M+=ge*(V<C?1:(C-ae)/(V-ae)))}if(--l,i+=8*(d+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function Gu(t){return t.nodeType===9?t:t.ownerDocument}function Wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function rh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=null;function xE(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var qv=typeof setTimeout=="function"?setTimeout:void 0,yE=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(t){return Yv.resolve(null).then(t).catch(ME)}:qv;function ME(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function Zv(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Xs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")tl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,tl(s);for(var d=s.firstChild;d;){var M=d.nextSibling,C=d.nodeName;d[Rr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=M}}else s==="body"&&tl(t.ownerDocument.body);s=f}while(s);Xs(i)}function Kv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function oh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":oh(s),yo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function EE(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Rr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function bE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=mi(t.nextSibling),t===null))return null;return t}function $v(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$?"||t.data==="$~"}function uh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TE(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var ch=null;function Qv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return mi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Jv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function e_(t,i,s){switch(i=Gu(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function tl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);yo(t)}var gi=new Map,t_=new Set;function Vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=H.d;H.d={f:AE,r:RE,D:wE,C:CE,L:DE,m:UE,X:NE,S:LE,M:OE};function AE(){var t=Sa.f(),i=Nu();return t||i}function RE(t){var i=Xa(t);i!==null&&i.tag===5&&i.type==="form"?_0(i):Sa.r(t)}var Gs=typeof document>"u"?null:document;function n_(t,i,s){var l=Gs;if(l&&typeof i=="string"&&i){var f=st(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),t_.has(f)||(t_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),An(i,"link",t),W(i),l.head.appendChild(i)))}}function wE(t){Sa.D(t),n_("dns-prefetch",t,null)}function CE(t,i){Sa.C(t,i),n_("preconnect",t,i)}function DE(t,i,s){Sa.L(t,i,s);var l=Gs;if(l&&t&&i){var f='link[rel="preload"][as="'+st(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+st(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+st(s.imageSizes)+'"]')):f+='[href="'+st(t)+'"]';var d=f;switch(i){case"style":d=Vs(t);break;case"script":d=ks(t)}gi.has(d)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),gi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(nl(d))||i==="script"&&l.querySelector(il(d))||(i=l.createElement("link"),An(i,"link",t),W(i),l.head.appendChild(i)))}}function UE(t,i){Sa.m(t,i);var s=Gs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ks(t)}if(!gi.has(d)&&(t=_({rel:"modulepreload",href:t},i),gi.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(il(d)))return}l=s.createElement("link"),An(l,"link",t),W(l),s.head.appendChild(l)}}}function LE(t,i,s){Sa.S(t,i,s);var l=Gs;if(l&&t){var f=D(l).hoistableStyles,d=Vs(t);i=i||"default";var M=f.get(d);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(nl(d)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=gi.get(d))&&fh(t,s);var V=M=l.createElement("link");W(V),An(V,"link",t),V._p=new Promise(function(ae,ge){V.onload=ae,V.onerror=ge}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ku(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:C},f.set(d,M)}}}function NE(t,i){Sa.X(t,i);var s=Gs;if(s&&t){var l=D(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(il(f)),d||(t=_({src:t,async:!0},i),(i=gi.get(f))&&dh(t,i),d=s.createElement("script"),W(d),An(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function OE(t,i){Sa.M(t,i);var s=Gs;if(s&&t){var l=D(s).hoistableScripts,f=ks(t),d=l.get(f);d||(d=s.querySelector(il(f)),d||(t=_({src:t,async:!0,type:"module"},i),(i=gi.get(f))&&dh(t,i),d=s.createElement("script"),W(d),An(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function i_(t,i,s,l){var f=(f=re.current)?Vu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vs(s.href),s=D(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Vs(s.href);var d=D(f).hoistableStyles,M=d.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,M),(d=f.querySelector(nl(t)))&&!d._p&&(M.instance=d,M.state.loading=5),gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(t,s),d||PE(f,t,s,M.state))),i&&l===null)throw Error(r(528,""));return M}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ks(s),s=D(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vs(t){return'href="'+st(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function a_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function PE(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),An(i,"link",s),W(i),t.head.appendChild(i))}function ks(t){return'[src="'+st(t)+'"]'}function il(t){return"script[async]"+t}function r_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+st(s.href)+'"]');if(l)return i.instance=l,W(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),W(l),An(l,"style",f),ku(l,s.precedence,t),i.instance=l;case"stylesheet":f=Vs(s.href);var d=t.querySelector(nl(f));if(d)return i.state.loading|=4,i.instance=d,W(d),d;l=a_(s),(f=gi.get(f))&&fh(l,f),d=(t.ownerDocument||t).createElement("link"),W(d);var M=d;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),An(d,"link",l),i.state.loading|=4,ku(d,s.precedence,t),i.instance=d;case"script":return d=ks(s.src),(f=t.querySelector(il(d)))?(i.instance=f,W(f),f):(l=s,(f=gi.get(d))&&(l=_({},s),dh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),W(f),An(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ku(l,s.precedence,t));return i.instance}function ku(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function fh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Xu=null;function s_(t,i,s){if(Xu===null){var l=new Map,f=Xu=new Map;f.set(s,l)}else f=Xu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Rr]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=t+M;var C=l.get(M);C?C.push(d):l.set(M,[d])}}return l}function o_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function FE(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function IE(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Vs(l.href),d=i.querySelector(nl(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Wu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,W(d);return}d=i.ownerDocument||i,l=a_(l),(f=gi.get(f))&&fh(l,f),d=d.createElement("link"),W(d);var M=d;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),An(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Wu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var hh=0;function BE(t,i){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&hh===0&&(hh=62500*_E());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>hh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Wu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ju=null;function qu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ju=new Map,i.forEach(zE,t),ju=null,Wu.call(t))}function zE(t,i){if(!(i.state.loading&4)){var s=ju.get(t);if(s)var l=s.get(null);else{s=new Map,ju.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var M=f[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),d=s.get(M)||l,d===l&&s.set(null,f),s.set(M,f),this.count++,l=Wu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var al={$$typeof:w,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function HE(t,i,s,l,f,d,M,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function u_(t,i,s,l,f,d,M,C,V,ae,ge,ye){return t=new HE(t,i,s,M,V,ae,ge,ye,C),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),t.current=d,d.stateNode=t,i=jf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Kf(d),t}function c_(t){return t?(t=ys,t):ys}function f_(t,i,s,l,f,d){f=c_(f),l.context===null?l.context=f:l.pendingContext=f,l=$a(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Qa(t,l,i),s!==null&&(jn(s,t,i),Fo(s,t,i))}function d_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ph(t,i){d_(t,i),(t=t.alternate)&&d_(t,i)}function h_(t){if(t.tag===13||t.tag===31){var i=Lr(t,67108864);i!==null&&jn(i,t,67108864),ph(t,67108864)}}function p_(t){if(t.tag===13||t.tag===31){var i=si();i=cs(i);var s=Lr(t,i);s!==null&&jn(s,t,i),ph(t,i)}}var Yu=!0;function GE(t,i,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=2,mh(t,i,s,l)}finally{H.p=d,F.T=f}}function VE(t,i,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=8,mh(t,i,s,l)}finally{H.p=d,F.T=f}}function mh(t,i,s,l){if(Yu){var f=gh(l);if(f===null)th(t,i,l,Zu,s),g_(t,l);else if(XE(f,t,i,s,l))l.stopPropagation();else if(g_(t,l),i&4&&-1<kE.indexOf(t)){for(;f!==null;){var d=Xa(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Te(d.pendingLanes);if(M!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-Pe(M);C.entanglements[1]|=V,M&=~V}ki(d),(Lt&6)===0&&(Uu=T()+500,Qo(0))}}break;case 31:case 13:C=Lr(d,2),C!==null&&jn(C,d,2),Nu(),ph(d,2)}if(d=gh(l),d===null&&th(t,i,l,Zu,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else th(t,i,l,null,s)}}function gh(t){return t=_f(t),vh(t)}var Zu=null;function vh(t){if(Zu=null,t=ka(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Zu=t,null}function m_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ve:return 2;case Se:return 8;case me:case We:return 32;case De:return 268435456;default:return 32}default:return 32}}var _h=!1,ur=null,cr=null,fr=null,rl=new Map,sl=new Map,dr=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(t,i){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function ol(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Xa(i),i!==null&&h_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function XE(t,i,s,l,f){switch(i){case"focusin":return ur=ol(ur,t,i,s,l,f),!0;case"dragenter":return cr=ol(cr,t,i,s,l,f),!0;case"mouseover":return fr=ol(fr,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return rl.set(d,ol(rl.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,sl.set(d,ol(sl.get(d)||null,t,i,s,l,f)),!0}return!1}function v_(t){var i=ka(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,ds(t.priority,function(){p_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,ds(t.priority,function(){p_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=gh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=Xa(s),i!==null&&h_(i),t.blockedOn=s,!1;i.shift()}return!0}function __(t,i,s){Ku(t)&&s.delete(i)}function WE(){_h=!1,ur!==null&&Ku(ur)&&(ur=null),cr!==null&&Ku(cr)&&(cr=null),fr!==null&&Ku(fr)&&(fr=null),rl.forEach(__),sl.forEach(__)}function $u(t,i){t.blockedOn===i&&(t.blockedOn=null,_h||(_h=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,WE)))}var Qu=null;function x_(t){Qu!==t&&(Qu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(vh(l||s)===null)continue;break}var d=Xa(s);d!==null&&(t.splice(i,3),i-=3,gd(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Xs(t){function i(V){return $u(V,t)}ur!==null&&$u(ur,t),cr!==null&&$u(cr,t),fr!==null&&$u(fr,t),rl.forEach(i),sl.forEach(i);for(var s=0;s<dr.length;s++){var l=dr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<dr.length&&(s=dr[0],s.blockedOn===null);)v_(s),s.blockedOn===null&&dr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],M=f[gn]||null;if(typeof d=="function")M||x_(s);else if(M){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,M=d[gn]||null)C=M.formAction;else if(vh(f)!==null)continue}else C=M.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),x_(s)}}}function y_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function xh(t){this._internalRoot=t}Ju.prototype.render=xh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=si();f_(s,l,t,i,null,null)},Ju.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;f_(t.current,2,null,t,null,null),Nu(),i[ia]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var i=zi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<dr.length&&i!==0&&i<dr[s].priority;s++);dr.splice(s,0,t),s===0&&v_(t)}};var S_=e.version;if(S_!=="19.2.3")throw Error(r(527,S_,"19.2.3"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var jE={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Ae=ec.inject(jE),be=ec}catch{}}return ul.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=w0,d=C0,M=D0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=u_(t,1,!1,null,null,s,l,null,f,d,M,y_),t[ia]=i.current,eh(t),new xh(i)},ul.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=w0,M=C0,C=D0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=u_(t,1,!0,i,s??null,l,f,V,d,M,C,y_),i.context=c_(null),s=i.current,l=si(),l=cs(l),f=$a(l),f.callback=null,Qa(s,f,l),s=l,i.current.lanes=s,Nn(i,s),ki(i),t[ia]=i.current,eh(t),new Ju(i)},ul.version="19.2.3",ul}var L_;function n1(){if(L_)return Mh.exports;L_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Mh.exports=t1(),Mh.exports}var i1=n1();const a1=ry(i1),r1="/assets/SPS_Logo-BCzveip4.png";var N_="popstate";function s1(a={}){function e(r,o){let{pathname:u,search:c,hash:h}=r.location;return gp("",{pathname:u,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:wl(o)}return l1(e,n,null,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Bi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function o1(){return Math.random().toString(36).substring(2,10)}function O_(a,e){return{usr:a.state,key:a.key,idx:e}}function gp(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?ho(e):e,state:n,key:e&&e.key||r||o1()}}function wl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function ho(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function l1(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,c=o.history,h="POP",p=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function _(){h="POP";let x=g(),y=x==null?null:x-m;m=x,p&&p({action:h,location:R.location,delta:y})}function v(x,y){h="PUSH";let b=gp(R.location,x,y);m=g()+1;let w=O_(b,m),U=R.createHref(b);try{c.pushState(w,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(U)}u&&p&&p({action:h,location:R.location,delta:1})}function S(x,y){h="REPLACE";let b=gp(R.location,x,y);m=g();let w=O_(b,m),U=R.createHref(b);c.replaceState(w,"",U),u&&p&&p({action:h,location:R.location,delta:0})}function E(x){return u1(x)}let R={get action(){return h},get location(){return a(o,c)},listen(x){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(N_,_),p=x,()=>{o.removeEventListener(N_,_),p=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let y=E(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:S,go(x){return c.go(x)}};return R}function u1(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:wl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function oy(a,e,n="/"){return c1(a,e,n,!1)}function c1(a,e,n,r){let o=typeof e=="string"?ho(e):e,u=Oa(o.pathname||"/",n);if(u==null)return null;let c=ly(a);f1(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=M1(u);h=y1(c[p],m,r)}return h}function ly(a,e=[],n=[],r="",o=!1){let u=(c,h,p=o,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&p)return;Jt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Da([r,g.relativePath]),v=n.concat(g);c.children&&c.children.length>0&&(Jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),ly(c.children,e,v,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:_1(_,c.index),routesMeta:v})};return a.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))u(c,h);else for(let p of uy(c.path))u(c,h,!0,p)}),e}function uy(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let c=uy(r.join("/")),h=[];return h.push(...c.map(p=>p===""?u:[u,p].join("/"))),o&&h.push(...c),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function f1(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:x1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var d1=/^:[\w-]+$/,h1=3,p1=2,m1=1,g1=10,v1=-2,P_=a=>a==="*";function _1(a,e){let n=a.split("/"),r=n.length;return n.some(P_)&&(r+=v1),e&&(r+=p1),n.filter(o=>!P_(o)).reduce((o,u)=>o+(d1.test(u)?h1:u===""?m1:g1),r)}function x1(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function y1(a,e,n=!1){let{routesMeta:r}=a,o={},u="/",c=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=Hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!_&&m&&n&&!r[r.length-1].route.index&&(_=Hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Da([u,_.pathname]),pathnameBase:A1(Da([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=Da([u,_.pathnameBase]))}return c}function Hc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=S1(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=h[v]||"";c=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[v];return _&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:a}}function S1(a,e=!1,n=!0){Bi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function M1(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Oa(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E1=a=>cy.test(a);function b1(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?ho(a):a,u;if(n)if(E1(n))u=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Bi(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?u=F_(n.substring(1),"/"):u=F_(n,e)}else u=e;return{pathname:u,search:R1(r),hash:w1(o)}}function F_(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ah(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T1(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fy(a){let e=T1(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function dy(a,e,n,r=!1){let o;typeof a=="string"?o=ho(a):(o={...a},Jt(!o.pathname||!o.pathname.includes("?"),Ah("?","pathname","search",o)),Jt(!o.pathname||!o.pathname.includes("#"),Ah("#","pathname","hash",o)),Jt(!o.search||!o.search.includes("#"),Ah("#","search","hash",o)));let u=a===""||o.pathname==="",c=u?"/":o.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!r&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let p=b1(o,h),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Da=a=>a.join("/").replace(/\/\/+/g,"/"),A1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),R1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,w1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,C1=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function D1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function U1(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function py(a,e){let n=a;if(typeof n!="string"||!cy.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(hy)try{let u=new URL(window.location.href),c=n.startsWith("//")?new URL(u.protocol+n):new URL(n),h=Oa(c.pathname,e);c.origin===u.origin&&h!=null?n=h+c.search+c.hash:o=!0}catch{Bi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var my=["POST","PUT","PATCH","DELETE"];new Set(my);var L1=["GET",...my];new Set(L1);var po=z.createContext(null);po.displayName="DataRouter";var ef=z.createContext(null);ef.displayName="DataRouterState";var N1=z.createContext(!1),gy=z.createContext({isTransitioning:!1});gy.displayName="ViewTransition";var O1=z.createContext(new Map);O1.displayName="Fetchers";var P1=z.createContext(null);P1.displayName="Await";var Mi=z.createContext(null);Mi.displayName="Navigation";var Ll=z.createContext(null);Ll.displayName="Location";var Ha=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ha.displayName="Route";var _m=z.createContext(null);_m.displayName="RouteError";var vy="REACT_ROUTER_ERROR",F1="REDIRECT",I1="ROUTE_ERROR_RESPONSE";function B1(a){if(a.startsWith(`${vy}:${F1}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function z1(a){if(a.startsWith(`${vy}:${I1}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new C1(e.status,e.statusText,e.data)}catch{}}function H1(a,{relative:e}={}){Jt(Nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=z.useContext(Mi),{hash:o,pathname:u,search:c}=Ol(a,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:Da([n,u])),r.createHref({pathname:h,search:c,hash:o})}function Nl(){return z.useContext(Ll)!=null}function os(){return Jt(Nl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Ll).location}var _y="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xy(a){z.useContext(Mi).static||z.useLayoutEffect(a)}function G1(){let{isDataRoute:a}=z.useContext(Ha);return a?eb():V1()}function V1(){Jt(Nl(),"useNavigate() may be used only in the context of a <Router> component.");let a=z.useContext(po),{basename:e,navigator:n}=z.useContext(Mi),{matches:r}=z.useContext(Ha),{pathname:o}=os(),u=JSON.stringify(fy(r)),c=z.useRef(!1);return xy(()=>{c.current=!0}),z.useCallback((p,m={})=>{if(Bi(c.current,_y),!c.current)return;if(typeof p=="number"){n.go(p);return}let g=dy(p,JSON.parse(u),o,m.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Da([e,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[e,n,u,o,a])}z.createContext(null);function Ol(a,{relative:e}={}){let{matches:n}=z.useContext(Ha),{pathname:r}=os(),o=JSON.stringify(fy(n));return z.useMemo(()=>dy(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function k1(a,e){return yy(a,e)}function yy(a,e,n,r,o){Jt(Nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=z.useContext(Mi),{matches:c}=z.useContext(Ha),h=c[c.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let b=_&&_.path||"";My(m,!_||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let v=os(),S;if(e){let b=typeof e=="string"?ho(e):e;Jt(g==="/"||b.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${b.pathname}" was given in the \`location\` prop.`),S=b}else S=v;let E=S.pathname||"/",R=E;if(g!=="/"){let b=g.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=oy(a,{pathname:R});Bi(_||x!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Bi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Y1(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},p,b.params),pathname:Da([g,u.encodeLocation?u.encodeLocation(b.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?g:Da([g,u.encodeLocation?u.encodeLocation(b.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathnameBase])})),c,n,r,o);return e&&y?z.createElement(Ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},y):y}function X1(){let a=J1(),e=D1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",a),c=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:u},"ErrorBoundary")," or"," ",z.createElement("code",{style:u},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:o},n):null,c)}var W1=z.createElement(X1,null),Sy=class extends z.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=z1(a.digest);n&&(a=n)}let e=a!==void 0?z.createElement(Ha.Provider,{value:this.props.routeContext},z.createElement(_m.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?z.createElement(j1,{error:a},e):e}};Sy.contextType=N1;var Rh=new WeakMap;function j1({children:a,error:e}){let{basename:n}=z.useContext(Mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=B1(e.digest);if(r){let o=Rh.get(e);if(o)throw o;let u=py(r.location,n);if(hy&&!Rh.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Rh.set(e,c),c}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function q1({routeContext:a,match:e,children:n}){let r=z.useContext(po);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Ha.Provider,{value:a},n)}function Y1(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,c=n?.errors;if(c!=null){let g=u.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);Jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let h=!1,p=-1;if(n)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:v,errors:S}=n,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||E){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let m=n&&r?(g,_)=>{r(g,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:U1(n.matches),errorInfo:_})}:void 0;return u.reduceRight((g,_,v)=>{let S,E=!1,R=null,x=null;n&&(S=c&&_.route.id?c[_.route.id]:void 0,R=_.route.errorElement||W1,h&&(p<0&&v===0?(My("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):p===v&&(E=!0,x=_.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,v+1)),b=()=>{let w;return S?w=R:E?w=x:_.route.Component?w=z.createElement(_.route.Component,null):_.route.element?w=_.route.element:w=g,z.createElement(q1,{match:_,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:w})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?z.createElement(Sy,{location:n.location,revalidation:n.revalidation,component:R,error:S,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:m}):b()},null)}function xm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z1(a){let e=z.useContext(po);return Jt(e,xm(a)),e}function K1(a){let e=z.useContext(ef);return Jt(e,xm(a)),e}function $1(a){let e=z.useContext(Ha);return Jt(e,xm(a)),e}function ym(a){let e=$1(a),n=e.matches[e.matches.length-1];return Jt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function Q1(){return ym("useRouteId")}function J1(){let a=z.useContext(_m),e=K1("useRouteError"),n=ym("useRouteError");return a!==void 0?a:e.errors?.[n]}function eb(){let{router:a}=Z1("useNavigate"),e=ym("useNavigate"),n=z.useRef(!1);return xy(()=>{n.current=!0}),z.useCallback(async(o,u={})=>{Bi(n.current,_y),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...u}))},[a,e])}var I_={};function My(a,e,n){!e&&!I_[a]&&(I_[a]=!0,Bi(!1,n))}z.memo(tb);function tb({routes:a,future:e,state:n,onError:r}){return yy(a,void 0,n,r,e)}function xl(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nb({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:u=!1,unstable_useTransitions:c}){Jt(!Nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),p=z.useMemo(()=>({basename:h,navigator:o,static:u,unstable_useTransitions:c,future:{}}),[h,o,u,c]);typeof n=="string"&&(n=ho(n));let{pathname:m="/",search:g="",hash:_="",state:v=null,key:S="default"}=n,E=z.useMemo(()=>{let R=Oa(m,h);return R==null?null:{location:{pathname:R,search:g,hash:_,state:v,key:S},navigationType:r}},[h,m,g,_,v,S,r]);return Bi(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:z.createElement(Mi.Provider,{value:p},z.createElement(Ll.Provider,{children:e,value:E}))}function ib({children:a,location:e}){return k1(vp(a),e)}function vp(a,e=[]){let n=[];return z.Children.forEach(a,(r,o)=>{if(!z.isValidElement(r))return;let u=[...e,o];if(r.type===z.Fragment){n.push.apply(n,vp(r.props.children,u));return}Jt(r.type===xl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=vp(r.props.children,u)),n.push(c)}),n}var Uc="get",Lc="application/x-www-form-urlencoded";function tf(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function ab(a){return tf(a)&&a.tagName.toLowerCase()==="button"}function rb(a){return tf(a)&&a.tagName.toLowerCase()==="form"}function sb(a){return tf(a)&&a.tagName.toLowerCase()==="input"}function ob(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function lb(a,e){return a.button===0&&(!e||e==="_self")&&!ob(a)}var tc=null;function ub(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var cb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wh(a){return a!=null&&!cb.has(a)?(Bi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lc}"`),null):a}function fb(a,e){let n,r,o,u,c;if(rb(a)){let h=a.getAttribute("action");r=h?Oa(h,e):null,n=a.getAttribute("method")||Uc,o=wh(a.getAttribute("enctype"))||Lc,u=new FormData(a)}else if(ab(a)||sb(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(r=p?Oa(p,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||Uc,o=wh(a.getAttribute("formenctype"))||wh(h.getAttribute("enctype"))||Lc,u=new FormData(h,a),!ub()){let{name:m,type:g,value:_}=a;if(g==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,_)}}else{if(tf(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Uc,r=null,o=Lc,c=a}return u&&o==="text/plain"&&(c=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sm(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function db(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Oa(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function hb(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function mb(a,e,n){let r=await Promise.all(a.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await hb(u,n);return c.links?c.links():[]}return[]}));return xb(r.flat(1).filter(pb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function B_(a,e,n,r,o,u){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>n[m].pathname!==p.pathname||n[m].route.path?.endsWith("*")&&n[m].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):u==="data"?e.filter((p,m)=>{let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function gb(a,e,{includeHydrateFallback:n}={}){return vb(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function vb(a){return[...new Set(a)]}function _b(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function xb(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let u=JSON.stringify(_b(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}function Ey(){let a=z.useContext(po);return Sm(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function yb(){let a=z.useContext(ef);return Sm(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Mm=z.createContext(void 0);Mm.displayName="FrameworkContext";function by(){let a=z.useContext(Mm);return Sm(a,"You must render this element inside a <HydratedRouter> element"),a}function Sb(a,e){let n=z.useContext(Mm),[r,o]=z.useState(!1),[u,c]=z.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,v=z.useRef(null);z.useEffect(()=>{if(a==="render"&&c(!0),a==="viewport"){let R=y=>{y.forEach(b=>{c(b.isIntersecting)})},x=new IntersectionObserver(R,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[a]),z.useEffect(()=>{if(r){let R=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(R)}}},[r]);let S=()=>{o(!0)},E=()=>{o(!1),c(!1)};return n?a!=="intent"?[u,v,{}]:[u,v,{onFocus:cl(h,S),onBlur:cl(p,E),onMouseEnter:cl(m,S),onMouseLeave:cl(g,E),onTouchStart:cl(_,S)}]:[!1,v,{}]}function cl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function Mb({page:a,...e}){let{router:n}=Ey(),r=z.useMemo(()=>oy(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?z.createElement(bb,{page:a,matches:r,...e}):null}function Eb(a){let{manifest:e,routeModules:n}=by(),[r,o]=z.useState([]);return z.useEffect(()=>{let u=!1;return mb(a,e,n).then(c=>{u||o(c)}),()=>{u=!0}},[a,e,n]),r}function bb({page:a,matches:e,...n}){let r=os(),{future:o,manifest:u,routeModules:c}=by(),{basename:h}=Ey(),{loaderData:p,matches:m}=yb(),g=z.useMemo(()=>B_(a,e,m,u,r,"data"),[a,e,m,u,r]),_=z.useMemo(()=>B_(a,e,m,u,r,"assets"),[a,e,m,u,r]),v=z.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let R=new Set,x=!1;if(e.forEach(b=>{let w=u.routes[b.route.id];!w||!w.hasLoader||(!g.some(U=>U.route.id===b.route.id)&&b.route.id in p&&c[b.route.id]?.shouldRevalidate||w.hasClientLoader?x=!0:R.add(b.route.id))}),R.size===0)return[];let y=db(a,h,o.unstable_trailingSlashAwareDataRequests,"data");return x&&R.size>0&&y.searchParams.set("_routes",e.filter(b=>R.has(b.route.id)).map(b=>b.route.id).join(",")),[y.pathname+y.search]},[h,o.unstable_trailingSlashAwareDataRequests,p,r,u,g,e,a,c]),S=z.useMemo(()=>gb(_,u),[_,u]),E=Eb(_);return z.createElement(z.Fragment,null,v.map(R=>z.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...n})),S.map(R=>z.createElement("link",{key:R,rel:"modulepreload",href:R,...n})),E.map(({key:R,link:x})=>z.createElement("link",{key:R,nonce:n.nonce,...x})))}function Tb(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ab&&(window.__reactRouterVersion="7.12.0")}catch{}function Rb({basename:a,children:e,unstable_useTransitions:n,window:r}){let o=z.useRef();o.current==null&&(o.current=s1({window:r,v5Compat:!0}));let u=o.current,[c,h]=z.useState({action:u.action,location:u.location}),p=z.useCallback(m=>{n===!1?h(m):z.startTransition(()=>h(m))},[n]);return z.useLayoutEffect(()=>u.listen(p),[u,p]),z.createElement(nb,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:u,unstable_useTransitions:n})}var Ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gc=z.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:c,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E){let{basename:R,unstable_useTransitions:x}=z.useContext(Mi),y=typeof m=="string"&&Ty.test(m),b=py(m,R);m=b.to;let w=H1(m,{relative:o}),[U,B,I]=Sb(r,S),P=Db(m,{replace:c,state:h,target:p,preventScrollReset:g,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:x});function A(te){e&&e(te),te.defaultPrevented||P(te)}let L=z.createElement("a",{...S,...I,href:b.absoluteURL||w,onClick:b.isExternal||u?e:A,ref:Tb(E,B),target:p,"data-discover":!y&&n==="render"?"true":void 0});return U&&!y?z.createElement(z.Fragment,null,L,z.createElement(Mb,{page:w})):L});Gc.displayName="Link";var Nc=z.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:c,viewTransition:h,children:p,...m},g){let _=Ol(c,{relative:m.relative}),v=os(),S=z.useContext(ef),{navigator:E,basename:R}=z.useContext(Mi),x=S!=null&&Pb(_)&&h===!0,y=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,b=v.pathname,w=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&R&&(w=Oa(w,R)||w);const U=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let B=b===y||!o&&b.startsWith(y)&&b.charAt(U)==="/",I=w!=null&&(w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/"),P={isActive:B,isPending:I,isTransitioning:x},A=B?e:void 0,L;typeof r=="function"?L=r(P):L=[r,B?"active":null,I?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let te=typeof u=="function"?u(P):u;return z.createElement(Gc,{...m,"aria-current":A,className:L,ref:g,style:te,to:c,viewTransition:h},typeof p=="function"?p(P):p)});Nc.displayName="NavLink";var wb=z.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:u,method:c=Uc,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E)=>{let{unstable_useTransitions:R}=z.useContext(Mi),x=Nb(),y=Ob(h,{relative:m}),b=c.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&Ty.test(h),U=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let I=B.nativeEvent.submitter,P=I?.getAttribute("formmethod")||c,A=()=>x(I||B.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:o,state:u,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});R&&n!==!1?z.startTransition(()=>A()):A()};return z.createElement("form",{ref:E,method:b,action:y,onSubmit:r?p:U,...S,"data-discover":!w&&a==="render"?"true":void 0})});wb.displayName="Form";function Cb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(a){let e=z.useContext(po);return Jt(e,Cb(a)),e}function Db(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let m=G1(),g=os(),_=Ol(a,{relative:u});return z.useCallback(v=>{if(lb(v,e)){v.preventDefault();let S=n!==void 0?n:wl(g)===wl(_),E=()=>m(a,{replace:S,state:r,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:h});p?z.startTransition(()=>E()):E()}},[g,m,_,n,r,e,a,o,u,c,h,p])}var Ub=0,Lb=()=>`__${String(++Ub)}__`;function Nb(){let{router:a}=Ay("useSubmit"),{basename:e}=z.useContext(Mi),n=Q1(),r=a.fetch,o=a.navigate;return z.useCallback(async(u,c={})=>{let{action:h,method:p,encType:m,formData:g,body:_}=fb(u,e);if(c.navigate===!1){let v=c.fetcherKey||Lb();await r(v,n,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,o,e,n])}function Ob(a,{relative:e}={}){let{basename:n}=z.useContext(Mi),r=z.useContext(Ha);Jt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={...Ol(a||".",{relative:e})},c=os();if(a==null){u.search=c.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Da([n,u.pathname])),wl(u)}function Pb(a,{relative:e}={}){let n=z.useContext(gy);Jt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ay("useViewTransitionState"),o=Ol(a,{relative:e});if(!n.isTransitioning)return!1;let u=Oa(n.currentLocation.pathname,r)||n.currentLocation.pathname,c=Oa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Hc(o.pathname,c)!=null||Hc(o.pathname,u)!=null}var Fb=sy();const nf=({style:a})=>{const[e,n]=z.useState(!1);return z.useEffect(()=>{const r=()=>{window.scrollY>50?n(!0):n(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),K.jsxs("div",{className:`navbar ${e?"scrolled":""}`,style:a,children:[K.jsx(Gc,{to:"/",children:K.jsxs("div",{className:"logo-section",children:[K.jsx("img",{src:r1,className:"logo"}),K.jsx("div",{className:"logo-div"}),K.jsxs("p",{className:"logo-text",children:[K.jsx("span",{children:"University of Florida"}),K.jsx("br",{}),"IEEE Student Branch"]})]})}),K.jsxs("div",{className:"nav-links",children:[K.jsx(Gc,{to:"/",children:"HOME"}),K.jsx(Nc,{to:"/about",children:"ABOUT"}),K.jsx(Nc,{to:"/research",children:"RESEARCH"}),K.jsx(Nc,{to:"/resources",children:"RESOURCES"})]})]})},Ib="/assets/SPS_Logo_Black-D_xY9jSk.png";var Ry={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z_=Je.createContext&&Je.createContext(Ry),Bb=["attr","size","title"];function zb(a,e){if(a==null)return{};var n=Hb(a,e),r,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(o=0;o<u.length;o++)r=u[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function Hb(a,e){if(a==null)return{};var n={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(e.indexOf(r)>=0)continue;n[r]=a[r]}return n}function Vc(){return Vc=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Vc.apply(this,arguments)}function H_(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),n.push.apply(n,r)}return n}function kc(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?H_(Object(n),!0).forEach(function(r){Gb(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):H_(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function Gb(a,e,n){return e=Vb(e),e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function Vb(a){var e=kb(a,"string");return typeof e=="symbol"?e:e+""}function kb(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function wy(a){return a&&a.map((e,n)=>Je.createElement(e.tag,kc({key:n},e.attr),wy(e.child)))}function Ei(a){return e=>Je.createElement(Xb,Vc({attr:kc({},a.attr)},e),wy(a.child))}function Xb(a){var e=n=>{var{attr:r,size:o,title:u}=a,c=zb(a,Bb),h=o||n.size||"1em",p;return n.className&&(p=n.className),a.className&&(p=(p?p+" ":"")+a.className),Je.createElement("svg",Vc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:p,style:kc(kc({color:a.color||n.color},n.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Je.createElement("title",null,u),a.children)};return z_!==void 0?Je.createElement(z_.Consumer,null,n=>e(n)):e(Ry)}function Wb(a){return Ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"},child:[]}]})(a)}function jb(a){return Ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},child:[]}]})(a)}function qb(a){return Ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},child:[]}]})(a)}function Yb(a){return Ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"},child:[]}]})(a)}function Zb(a){return Ei({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},child:[]}]})(a)}function Kb(a){return Ei({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}const Em=()=>{const a=({href:e,children:n})=>K.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:n});return K.jsx("div",{className:"footer-container",children:K.jsxs("div",{className:"footer-content-container",children:[K.jsx("img",{className:"footer-graphic",src:Ib,alt:"black sps logo"}),K.jsxs("div",{className:"footer-link-container",children:[K.jsx("a",{href:"mailto:ieee.sps.uf@gmail.com",children:K.jsxs("div",{className:"email-link",children:[K.jsx(Kb,{}),K.jsx("p",{children:"ieee.sps.uf@gmail.com"})]})}),K.jsxs("p",{className:"location-text",children:["Artificial Intelligence and Informatics Research Institute ",K.jsx("br",{}),"432 Newell Drive, CISE Bldg E251 ",K.jsx("br",{}),"Gainesville, Florida 32611-5585"]}),K.jsxs("div",{className:"footer-social-links",children:[K.jsx(a,{href:"https://www.instagram.com/uf.sps/",children:K.jsx(jb,{})}),K.jsx(a,{href:"https://discord.gg/6GRymPjgKc",children:K.jsx(Wb,{})}),K.jsx(a,{href:"https://www.linkedin.com/company/ieee-signal-processing-society-uf/",children:K.jsx(qb,{})}),K.jsx(a,{href:"https://x.com/uf_sps",children:K.jsx(Zb,{})}),K.jsx(a,{href:"https://https://linktr.ee/uf.sps",children:K.jsx(Yb,{})})]})]})]})})};const bm="183",$b=0,G_=1,Qb=2,Oc=1,Jb=2,yl=3,Ar=0,Yn=1,Ra=2,Ua=0,ro=1,V_=2,k_=3,X_=4,eT=5,Jr=100,tT=101,nT=102,iT=103,aT=104,rT=200,sT=201,oT=202,lT=203,_p=204,xp=205,uT=206,cT=207,fT=208,dT=209,hT=210,pT=211,mT=212,gT=213,vT=214,yp=0,Sp=1,Mp=2,oo=3,Ep=4,bp=5,Tp=6,Ap=7,Cy=0,_T=1,xT=2,Ki=0,Dy=1,Uy=2,Ly=3,Ny=4,Oy=5,Py=6,Fy=7,Iy=300,rs=301,lo=302,Ch=303,Dh=304,af=306,Rp=1e3,Ca=1001,wp=1002,Rn=1003,yT=1004,nc=1005,Un=1006,Uh=1007,ns=1008,Si=1009,By=1010,zy=1011,Cl=1012,Tm=1013,ea=1014,Yi=1015,Pa=1016,Am=1017,Rm=1018,Dl=1020,Hy=35902,Gy=35899,Vy=1021,ky=1022,Fi=1023,Fa=1026,is=1027,Xy=1028,wm=1029,uo=1030,Cm=1031,Dm=1033,Pc=33776,Fc=33777,Ic=33778,Bc=33779,Cp=35840,Dp=35841,Up=35842,Lp=35843,Np=36196,Op=37492,Pp=37496,Fp=37488,Ip=37489,Bp=37490,zp=37491,Hp=37808,Gp=37809,Vp=37810,kp=37811,Xp=37812,Wp=37813,jp=37814,qp=37815,Yp=37816,Zp=37817,Kp=37818,$p=37819,Qp=37820,Jp=37821,em=36492,tm=36494,nm=36495,im=36283,am=36284,rm=36285,sm=36286,ST=3200,MT=0,ET=1,yr="",xi="srgb",co="srgb-linear",Xc="linear",Ht="srgb",Ws=7680,W_=519,bT=512,TT=513,AT=514,Um=515,RT=516,wT=517,Lm=518,CT=519,j_=35044,q_="300 es",Zi=2e3,Wc=2001;function DT(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function jc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function UT(){const a=jc("canvas");return a.style.display="block",a}const Y_={};function Z_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Wy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Wy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Dt(...a){a=Wy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function qc(...a){const e=a.join(" ");e in Y_||(Y_[e]=!0,rt(...a))}function LT(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const NT={[yp]:Sp,[Mp]:Tp,[Ep]:Ap,[oo]:bp,[Sp]:yp,[Tp]:Mp,[Ap]:Ep,[bp]:oo};class mo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,om=180/Math.PI;function Pl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Et(a,e,n){return Math.max(e,Math.min(n,a))}function OT(a,e){return(a%e+e)%e}function Nh(a,e,n){return(1-n)*a+n*e}function fl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,n=0){Nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class go{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,h){let p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3],v=u[c+0],S=u[c+1],E=u[c+2],R=u[c+3];if(_!==R||p!==v||m!==S||g!==E){let x=p*v+m*S+g*E+_*R;x<0&&(v=-v,S=-S,E=-E,R=-R,x=-x);let y=1-h;if(x<.9995){const b=Math.acos(x),w=Math.sin(b);y=Math.sin(y*b)/w,h=Math.sin(h*b)/w,p=p*y+v*h,m=m*y+S*h,g=g*y+E*h,_=_*y+R*h}else{p=p*y+v*h,m=m*y+S*h,g=g*y+E*h,_=_*y+R*h;const b=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=b,m*=b,g*=b,_*=b}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,c){const h=r[o],p=r[o+1],m=r[o+2],g=r[o+3],_=u[c],v=u[c+1],S=u[c+2],E=u[c+3];return e[n]=h*E+g*_+p*S-m*v,e[n+1]=p*E+g*v+m*_-h*S,e[n+2]=m*E+g*S+h*v-p*_,e[n+3]=g*E-h*_-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(o/2),_=h(u/2),v=p(r/2),S=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(c-o)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(u-m)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(c-o)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+c*h+o*m-u*p,this._y=o*g+c*p+u*h-r*m,this._z=u*g+c*m+r*p-o*h,this._w=c*g-r*h-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,u=-u,c=-c,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(K_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(K_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,h=e.z,p=e.w,m=2*(c*o-h*r),g=2*(h*n-u*o),_=2*(u*r-c*n);return this.x=n+p*m+c*_-h*g,this.y=r+p*g+h*m-u*_,this.z=o+p*_+u*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-r*p,this.z=r*h-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new Q,K_=new go;class pt{constructor(e,n,r,o,u,c,h,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,p,m)}set(e,n,r,o,u,c,h,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],R=o[0],x=o[3],y=o[6],b=o[1],w=o[4],U=o[7],B=o[2],I=o[5],P=o[8];return u[0]=c*R+h*b+p*B,u[3]=c*x+h*w+p*I,u[6]=c*y+h*U+p*P,u[1]=m*R+g*b+_*B,u[4]=m*x+g*w+_*I,u[7]=m*y+g*U+_*P,u[2]=v*R+S*b+E*B,u[5]=v*x+S*w+E*I,u[8]=v*y+S*U+E*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return n*c*g-n*h*m-r*u*g+r*h*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*c-h*m,v=h*p-g*u,S=m*u-c*p,E=n*_+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(o*m-g*r)*R,e[2]=(h*r-o*c)*R,e[3]=v*R,e[4]=(g*n-o*p)*R,e[5]=(o*u-h*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(c*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*h)+c+e,-o*m,o*p,-o*(-m*c+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Ph.makeScale(e,n)),this}rotate(e){return this.premultiply(Ph.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ph.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new pt,$_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const a={enabled:!0,workingColorSpace:co,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ht&&(o.r=La(o.r),o.g=La(o.g),o.b=La(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===yr?Xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[co]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:$_,fromXYZ:Q_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:$_,fromXYZ:Q_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),a}const At=PT();function La(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function so(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let js;class FT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=jc("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=La(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(La(n[r]/255)*255):n[r]=La(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IT=0;class Nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Fh(o[c].image)):u.push(Fh(o[c]))}else u=Fh(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function Fh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?FT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let BT=0;const Ih=new Q;class zn extends mo{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,r=Ca,o=Ca,u=Un,c=ns,h=Fi,p=Si,m=zn.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Pl(),this.name="",this.source=new Nm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rp:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case wp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rp:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case wp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Iy;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],R=p[2],x=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+x)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(m+1)/2,U=(S+1)/2,B=(y+1)/2,I=(g+v)/4,P=(_+R)/4,A=(E+x)/4;return w>U&&w>B?w<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(w),o=I/r,u=P/r):U>B?U<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(U),r=I/o,u=A/o):B<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(B),r=P/u,o=A/u),this.set(r,o,u,n),this}let b=Math.sqrt((x-E)*(x-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(b)<.001&&(b=1),this.x=(x-E)/b,this.y=(_-R)/b,this.z=(v-g)/b,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zT extends mo{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new zn(o),c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Nm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends zT{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class jy extends zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(e,n,r,o,u,c,h,p,m,g,_,v,S,E,R,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,p,m,g,_,v,S,E,R,x)}set(e,n,r,o,u,c,h,p,m,g,_,v,S,E,R,x){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=R,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),u=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=c*g,S=c*_,E=h*g,R=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=S+E*m,n[5]=v-R*m,n[9]=-h*p,n[2]=R-v*m,n[6]=E+S*m,n[10]=c*p}else if(e.order==="YXZ"){const v=p*g,S=p*_,E=m*g,R=m*_;n[0]=v+R*h,n[4]=E*h-S,n[8]=c*m,n[1]=c*_,n[5]=c*g,n[9]=-h,n[2]=S*h-E,n[6]=R+v*h,n[10]=c*p}else if(e.order==="ZXY"){const v=p*g,S=p*_,E=m*g,R=m*_;n[0]=v-R*h,n[4]=-c*_,n[8]=E+S*h,n[1]=S+E*h,n[5]=c*g,n[9]=R-v*h,n[2]=-c*m,n[6]=h,n[10]=c*p}else if(e.order==="ZYX"){const v=c*g,S=c*_,E=h*g,R=h*_;n[0]=p*g,n[4]=E*m-S,n[8]=v*m+R,n[1]=p*_,n[5]=R*m+v,n[9]=S*m-E,n[2]=-m,n[6]=h*p,n[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*m,E=h*p,R=h*m;n[0]=p*g,n[4]=R-v*_,n[8]=E*_+S,n[1]=_,n[5]=c*g,n[9]=-h*g,n[2]=-m*g,n[6]=S*_+E,n[10]=v-R*_}else if(e.order==="XZY"){const v=c*p,S=c*m,E=h*p,R=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=v*_+R,n[5]=c*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GT,e,VT)}lookAt(e,n,r){const o=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),pr.crossVectors(r,oi),pr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),pr.crossVectors(r,oi)),pr.normalize(),ic.crossVectors(oi,pr),o[0]=pr.x,o[4]=ic.x,o[8]=oi.x,o[1]=pr.y,o[5]=ic.y,o[9]=oi.y,o[2]=pr.z,o[6]=ic.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],R=r[6],x=r[10],y=r[14],b=r[3],w=r[7],U=r[11],B=r[15],I=o[0],P=o[4],A=o[8],L=o[12],te=o[1],G=o[5],$=o[9],ne=o[13],fe=o[2],J=o[6],F=o[10],H=o[14],ue=o[3],pe=o[7],Me=o[11],O=o[15];return u[0]=c*I+h*te+p*fe+m*ue,u[4]=c*P+h*G+p*J+m*pe,u[8]=c*A+h*$+p*F+m*Me,u[12]=c*L+h*ne+p*H+m*O,u[1]=g*I+_*te+v*fe+S*ue,u[5]=g*P+_*G+v*J+S*pe,u[9]=g*A+_*$+v*F+S*Me,u[13]=g*L+_*ne+v*H+S*O,u[2]=E*I+R*te+x*fe+y*ue,u[6]=E*P+R*G+x*J+y*pe,u[10]=E*A+R*$+x*F+y*Me,u[14]=E*L+R*ne+x*H+y*O,u[3]=b*I+w*te+U*fe+B*ue,u[7]=b*P+w*G+U*J+B*pe,u[11]=b*A+w*$+U*F+B*Me,u[15]=b*L+w*ne+U*H+B*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],R=e[7],x=e[11],y=e[15],b=p*S-m*v,w=h*S-m*_,U=h*v-p*_,B=c*S-m*g,I=c*v-p*g,P=c*_-h*g;return n*(R*b-x*w+y*U)-r*(E*b-x*B+y*I)+o*(E*w-R*B+y*P)-u*(E*U-R*I+x*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],R=e[13],x=e[14],y=e[15],b=n*h-r*c,w=n*p-o*c,U=n*m-u*c,B=r*p-o*h,I=r*m-u*h,P=o*m-u*p,A=g*R-_*E,L=g*x-v*E,te=g*y-S*E,G=_*x-v*R,$=_*y-S*R,ne=v*y-S*x,fe=b*ne-w*$+U*G+B*te-I*L+P*A;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/fe;return e[0]=(h*ne-p*$+m*G)*J,e[1]=(o*$-r*ne-u*G)*J,e[2]=(R*P-x*I+y*B)*J,e[3]=(v*I-_*P-S*B)*J,e[4]=(p*te-c*ne-m*L)*J,e[5]=(n*ne-o*te+u*L)*J,e[6]=(x*U-E*P-y*w)*J,e[7]=(g*P-v*U+S*w)*J,e[8]=(c*$-h*te+m*A)*J,e[9]=(r*te-n*$-u*A)*J,e[10]=(E*I-R*U+y*b)*J,e[11]=(_*U-g*I-S*b)*J,e[12]=(h*L-c*G-p*A)*J,e[13]=(n*G-r*L+o*A)*J,e[14]=(R*w-E*B-x*b)*J,e[15]=(g*B-_*w+v*b)*J,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,h=e.y,p=e.z,m=u*c,g=u*h;return this.set(m*c+r,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+r,g*p-o*c,0,m*p-o*h,g*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,m=u+u,g=c+c,_=h+h,v=u*m,S=u*g,E=u*_,R=c*g,x=c*_,y=h*_,b=p*m,w=p*g,U=p*_,B=r.x,I=r.y,P=r.z;return o[0]=(1-(R+y))*B,o[1]=(S+U)*B,o[2]=(E-w)*B,o[3]=0,o[4]=(S-U)*I,o[5]=(1-(v+y))*I,o[6]=(x+b)*I,o[7]=0,o[8]=(E+w)*P,o[9]=(x-b)*P,o[10]=(1-(v+R))*P,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinant();if(u===0)return r.set(1,1,1),n.identity(),this;let c=qs.set(o[0],o[1],o[2]).length();const h=qs.set(o[4],o[5],o[6]).length(),p=qs.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Li.copy(this);const m=1/c,g=1/h,_=1/p;return Li.elements[0]*=m,Li.elements[1]*=m,Li.elements[2]*=m,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,n.setFromRotationMatrix(Li),r.x=c,r.y=h,r.z=p,this}makePerspective(e,n,r,o,u,c,h=Zi,p=!1){const m=this.elements,g=2*u/(n-e),_=2*u/(r-o),v=(n+e)/(n-e),S=(r+o)/(r-o);let E,R;if(p)E=u/(c-u),R=c*u/(c-u);else if(h===Zi)E=-(c+u)/(c-u),R=-2*c*u/(c-u);else if(h===Wc)E=-c/(c-u),R=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,c,h=Zi,p=!1){const m=this.elements,g=2/(n-e),_=2/(r-o),v=-(n+e)/(n-e),S=-(r+o)/(r-o);let E,R;if(p)E=1/(c-u),R=c/(c-u);else if(h===Zi)E=-2/(c-u),R=-(c+u)/(c-u);else if(h===Wc)E=-1/(c-u),R=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const qs=new Q,Li=new an,GT=new Q(0,0,0),VT=new Q(1,1,1),pr=new Q,ic=new Q,oi=new Q,J_=new an,ex=new go;class Ia{constructor(e=0,n=0,r=0,o=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],p=o[1],m=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return J_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ex.setFromEuler(this),this.setFromQuaternion(ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class qy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kT=0;const tx=new Q,Ys=new go,Ma=new an,ac=new Q,dl=new Q,XT=new Q,WT=new go,nx=new Q(1,0,0),ix=new Q(0,1,0),ax=new Q(0,0,1),rx={type:"added"},jT={type:"removed"},Zs={type:"childadded",child:null},Bh={type:"childremoved",child:null};class Hn extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new Q,n=new Ia,r=new go,o=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new pt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(nx,e)}rotateY(e){return this.rotateOnAxis(ix,e)}rotateZ(e){return this.rotateOnAxis(ax,e)}translateOnAxis(e,n){return tx.copy(e).applyQuaternion(this.quaternion),this.position.add(tx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nx,e)}translateY(e){return this.translateOnAxis(ix,e)}translateZ(e){return this.translateOnAxis(ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ac.copy(e):ac.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(dl,ac,this.up):Ma.lookAt(ac,dl,this.up),this.quaternion.setFromRotationMatrix(Ma),o&&(Ma.extractRotation(o.matrixWorld),Ys.setFromRotationMatrix(Ma),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rx),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jT),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rx),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,XT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,WT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(e.animations,p))}}if(n){const h=c(e.geometries),p=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Hn.DEFAULT_UP=new Q(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qT={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const x=n.getJointPose(R,r),y=this._getHandJoint(m,R);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(qT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Hh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Ft{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=OT(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Hh(c,u,e+1/3),this.g=Hh(c,u,e),this.b=Hh(c,u,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,n=xi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xi){const r=Yy[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return At.workingToColorSpace(Dn.copy(this),e),Math.round(Et(Dn.r*255,0,255))*65536+Math.round(Et(Dn.g*255,0,255))*256+Math.round(Et(Dn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Dn.copy(this),n);const r=Dn.r,o=Dn.g,u=Dn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let p,m;const g=(h+c)/2;if(h===c)p=0,m=0;else{const _=c-h;switch(m=g<=.5?_/(c+h):_/(2-c-h),c){case r:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-r)/_+2;break;case u:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xi){At.workingToColorSpace(Dn.copy(this),e);const n=Dn.r,r=Dn.g,o=Dn.b;return e!==xi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(sc);const r=Nh(mr.h,sc.h,n),o=Nh(mr.s,sc.s,n),u=Nh(mr.l,sc.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ft;Ft.NAMES=Yy;class YT extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ni=new Q,Ea=new Q,Gh=new Q,ba=new Q,Ks=new Q,$s=new Q,sx=new Q,Vh=new Q,kh=new Q,Xh=new Q,Wh=new on,jh=new on,qh=new on;class Pi{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ni.subVectors(e,n),o.cross(Ni);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ni.subVectors(o,n),Ea.subVectors(r,n),Gh.subVectors(e,n);const c=Ni.dot(Ni),h=Ni.dot(Ea),p=Ni.dot(Gh),m=Ea.dot(Ea),g=Ea.dot(Gh),_=c*m-h*h;if(_===0)return u.set(0,0,0),null;const v=1/_,S=(m*p-h*g)*v,E=(c*g-h*p)*v;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,n,r,o,u,c,h,p){return this.getBarycoord(e,n,r,o,ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ba.x),p.addScaledVector(c,ba.y),p.addScaledVector(h,ba.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return Wh.setScalar(0),jh.setScalar(0),qh.setScalar(0),Wh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,r),qh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Wh,u.x),c.addScaledVector(jh,u.y),c.addScaledVector(qh,u.z),c}static isFrontFacing(e,n,r,o){return Ni.subVectors(r,n),Ea.subVectors(e,n),Ni.cross(Ea).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Ni.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,h;Ks.subVectors(o,r),$s.subVectors(u,r),Vh.subVectors(e,r);const p=Ks.dot(Vh),m=$s.dot(Vh);if(p<=0&&m<=0)return n.copy(r);kh.subVectors(e,o);const g=Ks.dot(kh),_=$s.dot(kh);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(r).addScaledVector(Ks,c);Xh.subVectors(e,u);const S=Ks.dot(Xh),E=$s.dot(Xh);if(E>=0&&S<=E)return n.copy(u);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(r).addScaledVector($s,h);const x=g*E-S*_;if(x<=0&&_-g>=0&&S-E>=0)return sx.subVectors(u,o),h=(_-g)/(_-g+(S-E)),n.copy(o).addScaledVector(sx,h);const y=1/(x+R+v);return c=R*y,h=v*y,n.copy(r).addScaledVector(Ks,c).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fl{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Oi):Oi.fromBufferAttribute(u,c),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),lc.subVectors(this.max,hl),Qs.subVectors(e.a,hl),Js.subVectors(e.b,hl),eo.subVectors(e.c,hl),gr.subVectors(Js,Qs),vr.subVectors(eo,Js),Wr.subVectors(Qs,eo);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!Yh(n,Qs,Js,eo,lc)||(n=[1,0,0,0,1,0,0,0,1],!Yh(n,Qs,Js,eo,lc))?!1:(uc.crossVectors(gr,vr),n=[uc.x,uc.y,uc.z],Yh(n,Qs,Js,eo,lc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Oi=new Q,oc=new Fl,Qs=new Q,Js=new Q,eo=new Q,gr=new Q,vr=new Q,Wr=new Q,hl=new Q,lc=new Q,uc=new Q,jr=new Q;function Yh(a,e,n,r,o){for(let u=0,c=a.length-3;u<=c;u+=3){jr.fromArray(a,u);const h=o.x*Math.abs(jr.x)+o.y*Math.abs(jr.y)+o.z*Math.abs(jr.z),p=e.dot(jr),m=n.dot(jr),g=r.dot(jr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const mn=new Q,cc=new Nt;let ZT=0;class Qi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=j_,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cc.fromBufferAttribute(this,n),cc.applyMatrix3(e),this.setXY(n,cc.x,cc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=fl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fl(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fl(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fl(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array),u=qn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j_&&(e.usage=this.usage),e}}class Zy extends Qi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ky extends Qi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ln extends Qi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const KT=new Fl,pl=new Q,Zh=new Q;class Il{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):KT.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const n=pl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(pl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Zh)),this.expandByPoint(pl.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $T=0;const vi=new an,Kh=new Hn,to=new Q,li=new Fl,ml=new Fl,Mn=new Q;class Kn extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DT(e)?Ky:Zy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,n,r){return vi.makeTranslation(e,n,r),this.applyMatrix4(vi),this}scale(e,n,r){return vi.makeScale(e,n,r),this.applyMatrix4(vi),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ln(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];li.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];ml.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(li.min,ml.min),li.expandByPoint(Mn),Mn.addVectors(li.max,ml.max),li.expandByPoint(Mn)):(li.expandByPoint(ml.min),li.expandByPoint(ml.max))}li.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)Mn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(Mn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Mn.fromBufferAttribute(h,m),p&&(to.fromBufferAttribute(e,m),Mn.add(to)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let A=0;A<r.count;A++)h[A]=new Q,p[A]=new Q;const m=new Q,g=new Q,_=new Q,v=new Nt,S=new Nt,E=new Nt,R=new Q,x=new Q;function y(A,L,te){m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,L),_.fromBufferAttribute(r,te),v.fromBufferAttribute(u,A),S.fromBufferAttribute(u,L),E.fromBufferAttribute(u,te),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[A].add(R),h[L].add(R),h[te].add(R),p[A].add(x),p[L].add(x),p[te].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,L=b.length;A<L;++A){const te=b[A],G=te.start,$=te.count;for(let ne=G,fe=G+$;ne<fe;ne+=3)y(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const w=new Q,U=new Q,B=new Q,I=new Q;function P(A){B.fromBufferAttribute(o,A),I.copy(B);const L=h[A];w.copy(L),w.sub(B.multiplyScalar(B.dot(L))).normalize(),U.crossVectors(I,L);const G=U.dot(p[A])<0?-1:1;c.setXYZW(A,w.x,w.y,w.z,G)}for(let A=0,L=b.length;A<L;++A){const te=b[A],G=te.start,$=te.count;for(let ne=G,fe=G+$;ne<fe;ne+=3)P(e.getX(ne+0)),P(e.getX(ne+1)),P(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new Q,u=new Q,c=new Q,h=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),R=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),c.fromBufferAttribute(n,x),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,x),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let R=0,x=p.length;R<x;R++){h.isInterleavedBufferAttribute?S=p[R]*h.data.stride+h.offset:S=p[R]*g;for(let y=0;y<g;y++)v[E++]=m[S++]}return new Qi(v,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,r);n.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=e(v,r);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let QT=0;class vo extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=ro,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_p,this.blendDst=xp,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_p&&(r.blendSrc=this.blendSrc),this.blendDst!==xp&&(r.blendDst=this.blendDst),this.blendEquation!==Jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Aa=new Q,$h=new Q,fc=new Q,_r=new Q,Qh=new Q,dc=new Q,Jh=new Q;class Om{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Aa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,n),Aa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){$h.copy(e).add(n).multiplyScalar(.5),fc.copy(n).sub(e).normalize(),_r.copy(this.origin).sub($h);const u=e.distanceTo(n)*.5,c=-this.direction.dot(fc),h=_r.dot(this.direction),p=-_r.dot(fc),m=_r.lengthSq(),g=Math.abs(1-c*c);let _,v,S,E;if(g>0)if(_=c*p-h,v=c*h-p,E=u*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,S=_*(_+c*v+2*h)+v*(c*_+v+2*p)+m}else v=u,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-c*u+h)),v=_>0?-u:Math.min(Math.max(-u,-p),u),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(_=Math.max(0,-(c*u+h)),v=_>0?u:Math.min(Math.max(-u,-p),u),S=-_*_+v*(v+2*p)+m);else v=c>0?-u:u,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy($h).addScaledVector(fc,v),S}intersectSphere(e,n){Aa.subVectors(e.center,this.origin);const r=Aa.dot(this.direction),o=Aa.dot(Aa)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,p=r+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),g>=0?(u=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,n,r,o,u){Qh.subVectors(n,e),dc.subVectors(r,e),Jh.crossVectors(Qh,dc);let c=this.direction.dot(Jh),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;_r.subVectors(this.origin,e);const p=h*this.direction.dot(dc.crossVectors(_r,dc));if(p<0)return null;const m=h*this.direction.dot(Qh.cross(_r));if(m<0||p+m>c)return null;const g=-h*_r.dot(Jh);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $y extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ox=new an,qr=new Om,hc=new Il,lx=new Q,pc=new Q,mc=new Q,gc=new Q,ep=new Q,vc=new Q,ux=new Q,_c=new Q;class Ba extends Hn{constructor(e=new Kn,n=new $y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(ep.fromBufferAttribute(_,e),c?vc.addScaledVector(ep,g):vc.addScaledVector(ep.sub(n),g))}n.add(vc)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),qr.copy(e.ray).recast(e.near),!(hc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(hc,lx)===null||qr.origin.distanceToSquared(lx)>(e.far-e.near)**2))&&(ox.copy(u).invert(),qr.copy(e.ray).applyMatrix4(ox),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,R=v.length;E<R;E++){const x=v[E],y=c[x.materialIndex],b=Math.max(x.start,S.start),w=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let U=b,B=w;U<B;U+=3){const I=h.getX(U),P=h.getX(U+1),A=h.getX(U+2);o=xc(this,y,e,r,m,g,_,I,P,A),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let x=E,y=R;x<y;x+=3){const b=h.getX(x),w=h.getX(x+1),U=h.getX(x+2);o=xc(this,c,e,r,m,g,_,b,w,U),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,R=v.length;E<R;E++){const x=v[E],y=c[x.materialIndex],b=Math.max(x.start,S.start),w=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let U=b,B=w;U<B;U+=3){const I=U,P=U+1,A=U+2;o=xc(this,y,e,r,m,g,_,I,P,A),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let x=E,y=R;x<y;x+=3){const b=x,w=x+1,U=x+2;o=xc(this,c,e,r,m,g,_,b,w,U),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function JT(a,e,n,r,o,u,c,h){let p;if(e.side===Yn?p=r.intersectTriangle(c,u,o,!0,h):p=r.intersectTriangle(o,u,c,e.side===Ar,h),p===null)return null;_c.copy(h),_c.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(_c);return m<n.near||m>n.far?null:{distance:m,point:_c.clone(),object:a}}function xc(a,e,n,r,o,u,c,h,p,m){a.getVertexPosition(h,pc),a.getVertexPosition(p,mc),a.getVertexPosition(m,gc);const g=JT(a,e,n,r,pc,mc,gc,ux);if(g){const _=new Q;Pi.getBarycoord(ux,pc,mc,gc,_),o&&(g.uv=Pi.getInterpolatedAttribute(o,h,p,m,_,new Nt)),u&&(g.uv1=Pi.getInterpolatedAttribute(u,h,p,m,_,new Nt)),c&&(g.normal=Pi.getInterpolatedAttribute(c,h,p,m,_,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};Pi.getNormal(pc,mc,gc,v.normal),g.face=v,g.barycoord=_}return g}class eA extends zn{constructor(e=null,n=1,r=1,o,u,c,h,p,m=Rn,g=Rn,_,v){super(null,c,h,p,m,g,o,u,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tp=new Q,tA=new Q,nA=new pt;class $r{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=tp.subVectors(r,n).cross(tA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(tp),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||nA.getNormalMatrix(e),o=this.coplanarPoint(tp).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Il,iA=new Nt(.5,.5),yc=new Q;class Qy{constructor(e=new $r,n=new $r,r=new $r,o=new $r,u=new $r,c=new $r){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Zi,r=!1){const o=this.planes,u=e.elements,c=u[0],h=u[1],p=u[2],m=u[3],g=u[4],_=u[5],v=u[6],S=u[7],E=u[8],R=u[9],x=u[10],y=u[11],b=u[12],w=u[13],U=u[14],B=u[15];if(o[0].setComponents(m-c,S-g,y-E,B-b).normalize(),o[1].setComponents(m+c,S+g,y+E,B+b).normalize(),o[2].setComponents(m+h,S+_,y+R,B+w).normalize(),o[3].setComponents(m-h,S-_,y-R,B-w).normalize(),r)o[4].setComponents(p,v,x,U).normalize(),o[5].setComponents(m-p,S-v,y-x,B-U).normalize();else if(o[4].setComponents(m-p,S-v,y-x,B-U).normalize(),n===Zi)o[5].setComponents(m+p,S+v,y+x,B+U).normalize();else if(n===Wc)o[5].setComponents(p,v,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=iA.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yc.x=o.normal.x>0?e.max.x:e.min.x,yc.y=o.normal.y>0?e.max.y:e.min.y,yc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jy extends vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new Q,Zc=new Q,cx=new an,gl=new Om,Sc=new Il,np=new Q,fx=new Q;class aA extends Hn{constructor(e=new Kn,n=new Jy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,u=n.count;o<u;o++)Yc.fromBufferAttribute(n,o-1),Zc.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new Ln(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(o),Sc.radius+=u,e.ray.intersectsSphere(Sc)===!1)return;cx.copy(o).invert(),gl.copy(e.ray).applyMatrix4(cx);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let R=S,x=E-1;R<x;R+=m){const y=g.getX(R),b=g.getX(R+1),w=Mc(this,e,gl,p,y,b,R);w&&n.push(w)}if(this.isLineLoop){const R=g.getX(E-1),x=g.getX(S),y=Mc(this,e,gl,p,R,x,E-1);y&&n.push(y)}}else{const S=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let R=S,x=E-1;R<x;R+=m){const y=Mc(this,e,gl,p,R,R+1,R);y&&n.push(y)}if(this.isLineLoop){const R=Mc(this,e,gl,p,E-1,S,E-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Mc(a,e,n,r,o,u,c){const h=a.geometry.attributes.position;if(Yc.fromBufferAttribute(h,o),Zc.fromBufferAttribute(h,u),n.distanceSqToSegment(Yc,Zc,np,fx)>r)return;np.applyMatrix4(a.matrixWorld);const m=e.ray.origin.distanceTo(np);if(!(m<e.near||m>e.far))return{distance:m,point:fx.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const dx=new Q,hx=new Q;class rA extends aA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,u=n.count;o<u;o+=2)dx.fromBufferAttribute(n,o),hx.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+dx.distanceTo(hx);e.setAttribute("lineDistance",new Ln(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eS extends vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const px=new an,lm=new Om,Ec=new Il,bc=new Q;class sA extends Hn{constructor(e=new Kn,n=new eS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(o),Ec.radius+=u,e.ray.intersectsSphere(Ec)===!1)return;px.copy(o).invert(),lm.copy(e.ray).applyMatrix4(px);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,_=r.attributes.position;if(m!==null){const v=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=v,R=S;E<R;E++){const x=m.getX(E);bc.fromBufferAttribute(_,x),mx(bc,x,p,o,e,n,this)}}else{const v=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let E=v,R=S;E<R;E++)bc.fromBufferAttribute(_,E),mx(bc,E,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function mx(a,e,n,r,o,u,c){const h=lm.distanceSqToPoint(a);if(h<n){const p=new Q;lm.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class tS extends zn{constructor(e=[],n=rs,r,o,u,c,h,p,m,g){super(e,n,r,o,u,c,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ul extends zn{constructor(e,n,r=ea,o,u,c,h=Rn,p=Rn,m,g=Fa,_=1){if(g!==Fa&&g!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,u,c,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oA extends Ul{constructor(e,n=ea,r=rs,o,u,c=Rn,h=Rn,p,m=Fa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,u,c,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nS extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends Kn{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,c,u,0),E("z","y","x",1,-1,r,n,-e,c,u,1),E("x","z","y",1,1,e,r,n,o,c,2),E("x","z","y",1,-1,e,r,-n,o,c,3),E("x","y","z",1,-1,e,n,r,o,u,4),E("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(_,2));function E(R,x,y,b,w,U,B,I,P,A,L){const te=U/P,G=B/A,$=U/2,ne=B/2,fe=I/2,J=P+1,F=A+1;let H=0,ue=0;const pe=new Q;for(let Me=0;Me<F;Me++){const O=Me*G-ne;for(let Y=0;Y<J;Y++){const le=Y*te-$;pe[R]=le*b,pe[x]=O*w,pe[y]=fe,m.push(pe.x,pe.y,pe.z),pe[R]=0,pe[x]=0,pe[y]=I>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(Y/P),_.push(1-Me/A),H+=1}}for(let Me=0;Me<A;Me++)for(let O=0;O<P;O++){const Y=v+O+J*Me,le=v+O+J*(Me+1),Re=v+(O+1)+J*(Me+1),Oe=v+(O+1)+J*Me;p.push(Y,le,Oe),p.push(le,Re,Oe),ue+=6}h.addGroup(S,ue,L),S+=ue,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pm extends Kn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const u=[],c=[];h(o),m(r),g(),this.setAttribute("position",new Ln(u,3)),this.setAttribute("normal",new Ln(u.slice(),3)),this.setAttribute("uv",new Ln(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(b){const w=new Q,U=new Q,B=new Q;for(let I=0;I<n.length;I+=3)S(n[I+0],w),S(n[I+1],U),S(n[I+2],B),p(w,U,B,b)}function p(b,w,U,B){const I=B+1,P=[];for(let A=0;A<=I;A++){P[A]=[];const L=b.clone().lerp(U,A/I),te=w.clone().lerp(U,A/I),G=I-A;for(let $=0;$<=G;$++)$===0&&A===I?P[A][$]=L:P[A][$]=L.clone().lerp(te,$/G)}for(let A=0;A<I;A++)for(let L=0;L<2*(I-A)-1;L++){const te=Math.floor(L/2);L%2===0?(v(P[A][te+1]),v(P[A+1][te]),v(P[A][te])):(v(P[A][te+1]),v(P[A+1][te+1]),v(P[A+1][te]))}}function m(b){const w=new Q;for(let U=0;U<u.length;U+=3)w.x=u[U+0],w.y=u[U+1],w.z=u[U+2],w.normalize().multiplyScalar(b),u[U+0]=w.x,u[U+1]=w.y,u[U+2]=w.z}function g(){const b=new Q;for(let w=0;w<u.length;w+=3){b.x=u[w+0],b.y=u[w+1],b.z=u[w+2];const U=x(b)/2/Math.PI+.5,B=y(b)/Math.PI+.5;c.push(U,1-B)}E(),_()}function _(){for(let b=0;b<c.length;b+=6){const w=c[b+0],U=c[b+2],B=c[b+4],I=Math.max(w,U,B),P=Math.min(w,U,B);I>.9&&P<.1&&(w<.2&&(c[b+0]+=1),U<.2&&(c[b+2]+=1),B<.2&&(c[b+4]+=1))}}function v(b){u.push(b.x,b.y,b.z)}function S(b,w){const U=b*3;w.x=e[U+0],w.y=e[U+1],w.z=e[U+2]}function E(){const b=new Q,w=new Q,U=new Q,B=new Q,I=new Nt,P=new Nt,A=new Nt;for(let L=0,te=0;L<u.length;L+=9,te+=6){b.set(u[L+0],u[L+1],u[L+2]),w.set(u[L+3],u[L+4],u[L+5]),U.set(u[L+6],u[L+7],u[L+8]),I.set(c[te+0],c[te+1]),P.set(c[te+2],c[te+3]),A.set(c[te+4],c[te+5]),B.copy(b).add(w).add(U).divideScalar(3);const G=x(B);R(I,te+0,b,G),R(P,te+2,w,G),R(A,te+4,U,G)}}function R(b,w,U,B){B<0&&b.x===1&&(c[w]=b.x-1),U.x===0&&U.z===0&&(c[w]=B/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pm(e.vertices,e.indices,e.radius,e.detail)}}class Fm extends Pm{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,u,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Fm(e.radius,e.detail)}}class rf extends Kn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,h=Math.floor(r),p=Math.floor(o),m=h+1,g=p+1,_=e/h,v=n/p,S=[],E=[],R=[],x=[];for(let y=0;y<g;y++){const b=y*v-c;for(let w=0;w<m;w++){const U=w*_-u;E.push(U,-b,0),R.push(0,0,1),x.push(w/h),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let b=0;b<h;b++){const w=b+m*y,U=b+m*(y+1),B=b+1+m*(y+1),I=b+1+m*y;S.push(w,U,I),S.push(U,B,I)}this.setIndex(S),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(R,3)),this.setAttribute("uv",new Ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.width,e.height,e.widthSegments,e.heightSegments)}}class lA extends Kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],r=new Set,o=new Q,u=new Q;if(e.index!==null){const c=e.attributes.position,h=e.index;let p=e.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let m=0,g=p.length;m<g;++m){const _=p[m],v=_.start,S=_.count;for(let E=v,R=v+S;E<R;E+=3)for(let x=0;x<3;x++){const y=h.getX(E+x),b=h.getX(E+(x+1)%3);o.fromBufferAttribute(c,y),u.fromBufferAttribute(c,b),gx(o,u,r)===!0&&(n.push(o.x,o.y,o.z),n.push(u.x,u.y,u.z))}}}else{const c=e.attributes.position;for(let h=0,p=c.count/3;h<p;h++)for(let m=0;m<3;m++){const g=3*h+m,_=3*h+(m+1)%3;o.fromBufferAttribute(c,g),u.fromBufferAttribute(c,_),gx(o,u,r)===!0&&(n.push(o.x,o.y,o.z),n.push(u.x,u.y,u.z))}}this.setAttribute("position",new Ln(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gx(a,e,n){const r=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return n.has(r)===!0||n.has(o)===!0?!1:(n.add(r),n.add(o),!0)}function fo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Bn(a){const e={};for(let n=0;n<a.length;n++){const r=fo(a[n]);for(const o in r)e[o]=r[o]}return e}function uA(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function iS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const cA={clone:fo,merge:Bn};var fA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fA,this.fragmentShader=dA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=uA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class hA extends ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pA extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ST,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mA extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tc=new Q,Ac=new go,Xi=new Q;class aS extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Ac,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Tc,Ac,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Ac,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Q,vx=new Nt,_x=new Nt;class yi extends aS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=om*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return om*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,vx,_x),n.subVectors(_x,vx)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rS extends aS{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=-90,io=1;class gA extends Hn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(no,io,e,n);o.layers=this.layers,this.add(o);const u=new yi(no,io,e,n);u.layers=this.layers,this.add(u);const c=new yi(no,io,e,n);c.layers=this.layers,this.add(c);const h=new yi(no,io,e,n);h.layers=this.layers,this.add(h);const p=new yi(no,io,e,n);p.layers=this.layers,this.add(p);const m=new yi(no,io,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,p]=n;for(const m of n)this.remove(m);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,m,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vA extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xx(a,e,n,r){const o=_A(r);switch(n){case Vy:return a*e;case Xy:return a*e/o.components*o.byteLength;case wm:return a*e/o.components*o.byteLength;case uo:return a*e*2/o.components*o.byteLength;case Cm:return a*e*2/o.components*o.byteLength;case ky:return a*e*3/o.components*o.byteLength;case Fi:return a*e*4/o.components*o.byteLength;case Dm:return a*e*4/o.components*o.byteLength;case Pc:case Fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Bc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Dp:case Lp:return Math.max(a,16)*Math.max(e,8)/4;case Cp:case Up:return Math.max(a,8)*Math.max(e,8)/2;case Np:case Op:case Fp:case Ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pp:case Bp:case zp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Hp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Vp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case kp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Xp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case jp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case qp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case $p:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Qp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Jp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case em:case tm:case nm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case im:case am:return Math.ceil(a/4)*Math.ceil(e/4)*8;case rm:case sm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _A(a){switch(a){case Si:case By:return{byteLength:1,components:1};case Cl:case zy:case Pa:return{byteLength:2,components:1};case Am:case Rm:return{byteLength:2,components:4};case ea:case Tm:case Yi:return{byteLength:4,components:1};case Hy:case Gy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bm}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bm);function sS(){let a=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function xA(a){const e=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=a.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(a.bindBuffer(m,h),_.length===0)a.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],R=_[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const R=_[S];a.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(a.deleteBuffer(p.buffer),e.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:o,remove:u,update:c}}var yA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KA="gl_FragColor = linearToOutputTexel( gl_FragColor );",$A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,n3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:yA,alphahash_pars_fragment:SA,alphamap_fragment:MA,alphamap_pars_fragment:EA,alphatest_fragment:bA,alphatest_pars_fragment:TA,aomap_fragment:AA,aomap_pars_fragment:RA,batching_pars_vertex:wA,batching_vertex:CA,begin_vertex:DA,beginnormal_vertex:UA,bsdfs:LA,iridescence_fragment:NA,bumpmap_pars_fragment:OA,clipping_planes_fragment:PA,clipping_planes_pars_fragment:FA,clipping_planes_pars_vertex:IA,clipping_planes_vertex:BA,color_fragment:zA,color_pars_fragment:HA,color_pars_vertex:GA,color_vertex:VA,common:kA,cube_uv_reflection_fragment:XA,defaultnormal_vertex:WA,displacementmap_pars_vertex:jA,displacementmap_vertex:qA,emissivemap_fragment:YA,emissivemap_pars_fragment:ZA,colorspace_fragment:KA,colorspace_pars_fragment:$A,envmap_fragment:QA,envmap_common_pars_fragment:JA,envmap_pars_fragment:e2,envmap_pars_vertex:t2,envmap_physical_pars_fragment:d2,envmap_vertex:n2,fog_vertex:i2,fog_pars_vertex:a2,fog_fragment:r2,fog_pars_fragment:s2,gradientmap_pars_fragment:o2,lightmap_pars_fragment:l2,lights_lambert_fragment:u2,lights_lambert_pars_fragment:c2,lights_pars_begin:f2,lights_toon_fragment:h2,lights_toon_pars_fragment:p2,lights_phong_fragment:m2,lights_phong_pars_fragment:g2,lights_physical_fragment:v2,lights_physical_pars_fragment:_2,lights_fragment_begin:x2,lights_fragment_maps:y2,lights_fragment_end:S2,logdepthbuf_fragment:M2,logdepthbuf_pars_fragment:E2,logdepthbuf_pars_vertex:b2,logdepthbuf_vertex:T2,map_fragment:A2,map_pars_fragment:R2,map_particle_fragment:w2,map_particle_pars_fragment:C2,metalnessmap_fragment:D2,metalnessmap_pars_fragment:U2,morphinstance_vertex:L2,morphcolor_vertex:N2,morphnormal_vertex:O2,morphtarget_pars_vertex:P2,morphtarget_vertex:F2,normal_fragment_begin:I2,normal_fragment_maps:B2,normal_pars_fragment:z2,normal_pars_vertex:H2,normal_vertex:G2,normalmap_pars_fragment:V2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:X2,clearcoat_pars_fragment:W2,iridescence_pars_fragment:j2,opaque_fragment:q2,packing:Y2,premultiplied_alpha_fragment:Z2,project_vertex:K2,dithering_fragment:$2,dithering_pars_fragment:Q2,roughnessmap_fragment:J2,roughnessmap_pars_fragment:e3,shadowmap_pars_fragment:t3,shadowmap_pars_vertex:n3,shadowmap_vertex:i3,shadowmask_pars_fragment:a3,skinbase_vertex:r3,skinning_pars_vertex:s3,skinning_vertex:o3,skinnormal_vertex:l3,specularmap_fragment:u3,specularmap_pars_fragment:c3,tonemapping_fragment:f3,tonemapping_pars_fragment:d3,transmission_fragment:h3,transmission_pars_fragment:p3,uv_pars_fragment:m3,uv_pars_vertex:g3,uv_vertex:v3,worldpos_vertex:_3,background_vert:x3,background_frag:y3,backgroundCube_vert:S3,backgroundCube_frag:M3,cube_vert:E3,cube_frag:b3,depth_vert:T3,depth_frag:A3,distance_vert:R3,distance_frag:w3,equirect_vert:C3,equirect_frag:D3,linedashed_vert:U3,linedashed_frag:L3,meshbasic_vert:N3,meshbasic_frag:O3,meshlambert_vert:P3,meshlambert_frag:F3,meshmatcap_vert:I3,meshmatcap_frag:B3,meshnormal_vert:z3,meshnormal_frag:H3,meshphong_vert:G3,meshphong_frag:V3,meshphysical_vert:k3,meshphysical_frag:X3,meshtoon_vert:W3,meshtoon_frag:j3,points_vert:q3,points_frag:Y3,shadow_vert:Z3,shadow_frag:K3,sprite_vert:$3,sprite_frag:Q3},Ne={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},qi={basic:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Bn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Bn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Bn([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Bn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Bn([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Bn([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Bn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Bn([Ne.lights,Ne.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};qi.physical={uniforms:Bn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Rc={r:0,b:0,g:0},Zr=new Ia,J3=new an;function eR(a,e,n,r,o,u){const c=new Ft(0);let h=o===!0?0:1,p,m,g=null,_=0,v=null;function S(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const U=b.backgroundBlurriness>0;w=e.get(w,U)}return w}function E(b){let w=!1;const U=S(b);U===null?x(c,h):U&&U.isColor&&(x(U,1),w=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(a.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function R(b,w){const U=S(w);U&&(U.isCubeTexture||U.mapping===af)?(m===void 0&&(m=new Ba(new Bl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:fo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Zr.copy(w.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(J3.makeRotationFromEuler(Zr)),m.material.toneMapped=At.getTransfer(U.colorSpace)!==Ht,(g!==U||_!==U.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,v=a.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new Ba(new rf(2,2),new ta({name:"BackgroundMaterial",uniforms:fo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=At.getTransfer(U.colorSpace)!==Ht,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,g=U,_=U.version,v=a.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function x(b,w){b.getRGB(Rc,iS(a)),n.buffers.color.setClear(Rc.r,Rc.g,Rc.b,w,u)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,w=1){c.set(b),h=w,x(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,x(c,h)},render:E,addToRenderList:R,dispose:y}}function tR(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let u=o,c=!1;function h(G,$,ne,fe,J){let F=!1;const H=_(G,fe,ne,$);u!==H&&(u=H,m(u.object)),F=S(G,fe,ne,J),F&&E(G,fe,ne,J),J!==null&&e.update(J,a.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,U(G,$,ne,fe),J!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return a.createVertexArray()}function m(G){return a.bindVertexArray(G)}function g(G){return a.deleteVertexArray(G)}function _(G,$,ne,fe){const J=fe.wireframe===!0;let F=r[$.id];F===void 0&&(F={},r[$.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let ue=F[H];ue===void 0&&(ue={},F[H]=ue);let pe=ue[ne.id];pe===void 0&&(pe={},ue[ne.id]=pe);let Me=pe[J];return Me===void 0&&(Me=v(p()),pe[J]=Me),Me}function v(G){const $=[],ne=[],fe=[];for(let J=0;J<n;J++)$[J]=0,ne[J]=0,fe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ne,attributeDivisors:fe,object:G,attributes:{},index:null}}function S(G,$,ne,fe){const J=u.attributes,F=$.attributes;let H=0;const ue=ne.getAttributes();for(const pe in ue)if(ue[pe].location>=0){const O=J[pe];let Y=F[pe];if(Y===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;H++}return u.attributesNum!==H||u.index!==fe}function E(G,$,ne,fe){const J={},F=$.attributes;let H=0;const ue=ne.getAttributes();for(const pe in ue)if(ue[pe].location>=0){let O=F[pe];O===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[pe]=Y,H++}u.attributes=J,u.attributesNum=H,u.index=fe}function R(){const G=u.newAttributes;for(let $=0,ne=G.length;$<ne;$++)G[$]=0}function x(G){y(G,0)}function y(G,$){const ne=u.newAttributes,fe=u.enabledAttributes,J=u.attributeDivisors;ne[G]=1,fe[G]===0&&(a.enableVertexAttribArray(G),fe[G]=1),J[G]!==$&&(a.vertexAttribDivisor(G,$),J[G]=$)}function b(){const G=u.newAttributes,$=u.enabledAttributes;for(let ne=0,fe=$.length;ne<fe;ne++)$[ne]!==G[ne]&&(a.disableVertexAttribArray(ne),$[ne]=0)}function w(G,$,ne,fe,J,F,H){H===!0?a.vertexAttribIPointer(G,$,ne,J,F):a.vertexAttribPointer(G,$,ne,fe,J,F)}function U(G,$,ne,fe){R();const J=fe.attributes,F=ne.getAttributes(),H=$.defaultAttributeValues;for(const ue in F){const pe=F[ue];if(pe.location>=0){let Me=J[ue];if(Me===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(Me=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(Me=G.instanceColor)),Me!==void 0){const O=Me.normalized,Y=Me.itemSize,le=e.get(Me);if(le===void 0)continue;const Re=le.buffer,Oe=le.type,re=le.bytesPerElement,xe=Oe===a.INT||Oe===a.UNSIGNED_INT||Me.gpuType===Tm;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,ze=Ee.stride,$e=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let tt=0;tt<pe.locationSize;tt++)y(pe.location+tt,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let tt=0;tt<pe.locationSize;tt++)x(pe.location+tt);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let tt=0;tt<pe.locationSize;tt++)w(pe.location+tt,Y/pe.locationSize,Oe,O,ze*re,($e+Y/pe.locationSize*tt)*re,xe)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<pe.locationSize;Ee++)y(pe.location+Ee,Me.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<pe.locationSize;Ee++)x(pe.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let Ee=0;Ee<pe.locationSize;Ee++)w(pe.location+Ee,Y/pe.locationSize,Oe,O,Y*re,Y/pe.locationSize*Ee*re,xe)}}else if(H!==void 0){const O=H[ue];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(pe.location,O);break;case 3:a.vertexAttrib3fv(pe.location,O);break;case 4:a.vertexAttrib4fv(pe.location,O);break;default:a.vertexAttrib1fv(pe.location,O)}}}}b()}function B(){L();for(const G in r){const $=r[G];for(const ne in $){const fe=$[ne];for(const J in fe){const F=fe[J];for(const H in F)g(F[H].object),delete F[H];delete fe[J]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const ne in $){const fe=$[ne];for(const J in fe){const F=fe[J];for(const H in F)g(F[H].object),delete F[H];delete fe[J]}}delete r[G.id]}function P(G){for(const $ in r){const ne=r[$];for(const fe in ne){const J=ne[fe];if(J[G.id]===void 0)continue;const F=J[G.id];for(const H in F)g(F[H].object),delete F[H];delete J[G.id]}}}function A(G){for(const $ in r){const ne=r[$],fe=G.isInstancedMesh===!0?G.id:0,J=ne[fe];if(J!==void 0){for(const F in J){const H=J[F];for(const ue in H)g(H[ue].object),delete H[ue];delete J[F]}delete ne[fe],Object.keys(ne).length===0&&delete r[$]}}}function L(){te(),c=!0,u!==o&&(u=o,m(u.object))}function te(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:te,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:x,disableUnusedAttributes:b}}function nR(a,e,n){let r;function o(m){r=m}function u(m,g){a.drawArrays(r,m,g),n.update(g,r,1)}function c(m,g,_){_!==0&&(a.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,r,1)}function p(m,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)c(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*v[R];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function iR(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(P){return!(P!==Fi&&r.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const A=P===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Si&&r.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yi&&!A)}function p(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(rt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),w=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:U,maxSamples:B,samples:I}}function aR(a){const e=this;let n=null,r=0,o=!1,u=!1;const c=new $r,h=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,R=_.clipIntersection,x=_.clipShadows,y=a.get(_);if(!o||E===null||E.length===0||u&&!x)u?g(null):m();else{const b=u?0:r,w=b*4;let U=y.clippingState||null;p.value=U,U=g(E,v,w,S);for(let B=0;B!==w;++B)U[B]=n[B];y.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const R=_!==null?_.length:0;let x=null;if(R!==0){if(x=p.value,E!==!0||x===null){const y=S+R*4,b=v.matrixWorldInverse;h.getNormalMatrix(b),(x===null||x.length<y)&&(x=new Float32Array(y));for(let w=0,U=S;w!==R;++w,U+=4)c.copy(_[w]).applyMatrix4(b,h),c.normal.toArray(x,U),x[U+3]=c.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Mr=4,yx=[.125,.215,.35,.446,.526,.582],es=20,rR=256,vl=new rS,Sx=new Ft;let ip=null,ap=0,rp=0,sp=!1;const sR=new Q;class Mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=sR}=u;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,ap,rp),this._renderer.xr.enabled=sp,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pa,format:Fi,colorSpace:co,depthBuffer:!1},o=Ex(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oR(u)),this._blurMaterial=uR(u,e,n),this._ggxMaterial=lR(u,e,n)}return o}_compileMaterial(e){const n=new Ba(new Kn,e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,r,o,u){const p=new yi(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Sx),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new Bl,new $y({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let y=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,y=!0):(x.color.copy(Sx),y=!0);for(let w=0;w<6;w++){const U=w%3;U===0?(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[w],u.y,u.z)):U===1?(p.up.set(0,0,m[w]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[w],u.z)):(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[w]));const B=this._cubeSize;ao(o,U*B,w>2?B:0,B,B),_.setRenderTarget(o),y&&_.render(R,p),_.render(e,p)}_.toneMapping=S,_.autoClear=v,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===rs||e.mapping===lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bx());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;ao(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,vl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[r];h.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),v=0+m*1.25,S=_*v,{_lodMax:E}=this,R=this._sizeLods[r],x=3*R*(r>E-Mr?r-E+Mr:0),y=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=E-n,ao(u,x,y,3*R,2*R),o.setRenderTarget(u),o.render(h,vl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=E-r,ao(e,x,y,3*R,2*R),o.setRenderTarget(e),o.render(h,vl)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,h){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=m;const v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*es-1),R=u/E,x=isFinite(u)?1+Math.floor(g*R):es;x>es&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);const y=[];let b=0;for(let P=0;P<es;++P){const A=P/R,L=Math.exp(-A*A/2);y.push(L),P===0?b+=L:P<x&&(b+=2*L)}for(let P=0;P<y.length;P++)y[P]=y[P]/b;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=c==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-r;const U=this._sizeLods[o],B=3*U*(o>w-Mr?o-w+Mr:0),I=4*(this._cubeSize-U);ao(n,B,I,3*U,2*U),p.setRenderTarget(n),p.render(_,vl)}}function oR(a){const e=[],n=[],r=[];let o=a;const u=a-Mr+1+yx.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);e.push(h);let p=1/h;c>a-Mr?p=yx[c-a+Mr-1]:c===0&&(p=0),n.push(p);const m=1/(h-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,R=3,x=2,y=1,b=new Float32Array(R*E*S),w=new Float32Array(x*E*S),U=new Float32Array(y*E*S);for(let I=0;I<S;I++){const P=I%3*2/3-1,A=I>2?0:-1,L=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];b.set(L,R*E*I),w.set(v,x*E*I);const te=[I,I,I,I,I,I];U.set(te,y*E*I)}const B=new Kn;B.setAttribute("position",new Qi(b,R)),B.setAttribute("uv",new Qi(w,x)),B.setAttribute("faceIndex",new Qi(U,y)),r.push(new Ba(B,null)),o>Mr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Ex(a,e,n){const r=new $i(a,e,n);return r.texture.mapping=af,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function lR(a,e,n){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function uR(a,e,n){const r=new Float32Array(es),o=new Q(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function bx(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Tx(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class oS extends $i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Bl(5,5,5),u=new ta({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ua});u.uniforms.tEquirect.value=n;const c=new Ba(o,u),h=n.minFilter;return n.minFilter===ns&&(n.minFilter=Un),new gA(1,10,this).update(e,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function cR(a){let e=new WeakMap,n=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?c(v):u(v)}function u(v){if(v&&v.isTexture){const S=v.mapping;if(S===Ch||S===Dh)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const R=new oS(E.height);return R.fromEquirectangularTexture(a,v),e.set(v,R),v.addEventListener("dispose",m),h(R.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const S=v.mapping,E=S===Ch||S===Dh,R=S===rs||S===lo;if(E||R){let x=n.get(v);const y=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new Mx(a)),x=E?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),x.texture;if(x!==void 0)return x.texture;{const b=v.image;return E&&b&&b.height>0||R&&b&&p(b)?(r===null&&(r=new Mx(a)),x=E?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),v.addEventListener("dispose",g),x.texture):null}}}return v}function h(v,S){return S===Ch?v.mapping=rs:S===Dh&&(v.mapping=lo),v}function p(v){let S=0;const E=6;for(let R=0;R<E;R++)v[R]!==void 0&&S++;return S===E}function m(v){const S=v.target;S.removeEventListener("dispose",m);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function _(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function fR(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qc("WebGLRenderer: "+r+" extension not supported."),o}}}function dR(a,e,n,r){const o={},u=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(S!==null){const b=S.array;R=S.version;for(let w=0,U=b.length;w<U;w+=3){const B=b[w+0],I=b[w+1],P=b[w+2];v.push(B,I,I,P,P,B)}}else{const b=E.array;R=E.version;for(let w=0,U=b.length/3-1;w<U;w+=3){const B=w+0,I=w+1,P=w+2;v.push(B,I,I,P,P,B)}}const x=new(E.count>=65535?Ky:Zy)(v,1);x.version=R;const y=u.get(_);y&&e.remove(y),u.set(_,x)}function g(_){const v=u.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function hR(a,e,n){let r;function o(v){r=v}let u,c;function h(v){u=v.type,c=v.bytesPerElement}function p(v,S){a.drawElements(r,S,u,v*c),n.update(S,r,1)}function m(v,S,E){E!==0&&(a.drawElementsInstanced(r,S,u,v*c,E),n.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];n.update(x,r,1)}function _(v,S,E,R){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)m(v[y]/c,S[y],R[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,R,0,E);let y=0;for(let b=0;b<E;b++)y+=S[b]*R[b];n.update(y,r,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function pR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function mR(a,e,n){const r=new WeakMap,o=new on;function u(c,h,p){const m=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let te=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",te)};var S=te;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),R===!0&&(U=2),x===!0&&(U=3);let B=h.attributes.position.count*U,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const P=new Float32Array(B*I*4*_),A=new jy(P,B,I,_);A.type=Yi,A.needsUpdate=!0;const L=U*4;for(let G=0;G<_;G++){const $=y[G],ne=b[G],fe=w[G],J=B*I*4*G;for(let F=0;F<$.count;F++){const H=F*L;E===!0&&(o.fromBufferAttribute($,F),P[J+H+0]=o.x,P[J+H+1]=o.y,P[J+H+2]=o.z,P[J+H+3]=0),R===!0&&(o.fromBufferAttribute(ne,F),P[J+H+4]=o.x,P[J+H+5]=o.y,P[J+H+6]=o.z,P[J+H+7]=0),x===!0&&(o.fromBufferAttribute(fe,F),P[J+H+8]=o.x,P[J+H+9]=o.y,P[J+H+10]=o.z,P[J+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:A,size:new Nt(B,I)},r.set(h,v),h.addEventListener("dispose",te)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",c.morphTexture,n);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const R=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(a,"morphTargetBaseInfluence",R),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:u}}function gR(a,e,n,r,o){let u=new WeakMap;function c(m){const g=o.render.frame,_=m.geometry,v=e.get(m,_);if(u.get(v)!==g&&(e.update(v),u.set(v,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==g&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),u.set(m,g))),m.isSkinnedMesh){const S=m.skeleton;u.get(S)!==g&&(S.update(),u.set(S,g))}return v}function h(){u=new WeakMap}function p(m){const g=m.target;g.removeEventListener("dispose",p),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:h}}const vR={[Dy]:"LINEAR_TONE_MAPPING",[Uy]:"REINHARD_TONE_MAPPING",[Ly]:"CINEON_TONE_MAPPING",[Ny]:"ACES_FILMIC_TONE_MAPPING",[Py]:"AGX_TONE_MAPPING",[Fy]:"NEUTRAL_TONE_MAPPING",[Oy]:"CUSTOM_TONE_MAPPING"};function _R(a,e,n,r,o){const u=new $i(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),c=new $i(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new Kn;h.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const p=new hA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Ba(h,p),g=new rS(-1,1,1,-1,0,1);let _=null,v=null,S=!1,E,R=null,x=[],y=!1;this.setSize=function(b,w){u.setSize(b,w),c.setSize(b,w);for(let U=0;U<x.length;U++){const B=x[U];B.setSize&&B.setSize(b,w)}},this.setEffects=function(b){x=b,y=x.length>0&&x[0].isRenderPass===!0;const w=u.width,U=u.height;for(let B=0;B<x.length;B++){const I=x[B];I.setSize&&I.setSize(w,U)}},this.begin=function(b,w){if(S||b.toneMapping===Ki&&x.length===0)return!1;if(R=w,w!==null){const U=w.width,B=w.height;(u.width!==U||u.height!==B)&&this.setSize(U,B)}return y===!1&&b.setRenderTarget(u),E=b.toneMapping,b.toneMapping=Ki,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=E,S=!0;let U=u,B=c;for(let I=0;I<x.length;I++){const P=x[I];if(P.enabled!==!1&&(P.render(b,B,U,w),P.needsSwap!==!1)){const A=U;U=B,B=A}}if(_!==b.outputColorSpace||v!==b.toneMapping){_=b.outputColorSpace,v=b.toneMapping,p.defines={},At.getTransfer(_)===Ht&&(p.defines.SRGB_TRANSFER="");const I=vR[v];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,b.setRenderTarget(R),b.render(m,g),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),c.dispose(),h.dispose(),p.dispose()}}const lS=new zn,um=new Ul(1,1),uS=new jy,cS=new HT,fS=new tS,Ax=[],Rx=[],wx=new Float32Array(16),Cx=new Float32Array(9),Dx=new Float32Array(4);function _o(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=Ax[o];if(u===void 0&&(u=new Float32Array(o),Ax[o]=u),e!==0){r.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=n,a[c].toArray(u,h)}return u}function xn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function yn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function of(a,e){let n=Rx[e];n===void 0&&(n=new Int32Array(e),Rx[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function xR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function yR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2fv(this.addr,e),yn(n,e)}}function SR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;a.uniform3fv(this.addr,e),yn(n,e)}}function MR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4fv(this.addr,e),yn(n,e)}}function ER(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Dx.set(r),a.uniformMatrix2fv(this.addr,!1,Dx),yn(n,r)}}function bR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;Cx.set(r),a.uniformMatrix3fv(this.addr,!1,Cx),yn(n,r)}}function TR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(xn(n,r))return;wx.set(r),a.uniformMatrix4fv(this.addr,!1,wx),yn(n,r)}}function AR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function RR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2iv(this.addr,e),yn(n,e)}}function wR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;a.uniform3iv(this.addr,e),yn(n,e)}}function CR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4iv(this.addr,e),yn(n,e)}}function DR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function UR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;a.uniform2uiv(this.addr,e),yn(n,e)}}function LR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;a.uniform3uiv(this.addr,e),yn(n,e)}}function NR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;a.uniform4uiv(this.addr,e),yn(n,e)}}function OR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(um.compareFunction=n.isReversedDepthBuffer()?Lm:Um,u=um):u=lS,n.setTexture2D(e||u,o)}function PR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||cS,o)}function FR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||fS,o)}function IR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||uS,o)}function BR(a){switch(a){case 5126:return xR;case 35664:return yR;case 35665:return SR;case 35666:return MR;case 35674:return ER;case 35675:return bR;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return wR;case 35669:case 35673:return CR;case 5125:return DR;case 36294:return UR;case 36295:return LR;case 36296:return NR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return IR}}function zR(a,e){a.uniform1fv(this.addr,e)}function HR(a,e){const n=_o(e,this.size,2);a.uniform2fv(this.addr,n)}function GR(a,e){const n=_o(e,this.size,3);a.uniform3fv(this.addr,n)}function VR(a,e){const n=_o(e,this.size,4);a.uniform4fv(this.addr,n)}function kR(a,e){const n=_o(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function XR(a,e){const n=_o(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function WR(a,e){const n=_o(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function jR(a,e){a.uniform1iv(this.addr,e)}function qR(a,e){a.uniform2iv(this.addr,e)}function YR(a,e){a.uniform3iv(this.addr,e)}function ZR(a,e){a.uniform4iv(this.addr,e)}function KR(a,e){a.uniform1uiv(this.addr,e)}function $R(a,e){a.uniform2uiv(this.addr,e)}function QR(a,e){a.uniform3uiv(this.addr,e)}function JR(a,e){a.uniform4uiv(this.addr,e)}function ew(a,e,n){const r=this.cache,o=e.length,u=of(n,o);xn(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));let c;this.type===a.SAMPLER_2D_SHADOW?c=um:c=lS;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||c,u[h])}function tw(a,e,n){const r=this.cache,o=e.length,u=of(n,o);xn(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||cS,u[c])}function nw(a,e,n){const r=this.cache,o=e.length,u=of(n,o);xn(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||fS,u[c])}function iw(a,e,n){const r=this.cache,o=e.length,u=of(n,o);xn(r,u)||(a.uniform1iv(this.addr,u),yn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||uS,u[c])}function aw(a){switch(a){case 5126:return zR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return kR;case 35675:return XR;case 35676:return WR;case 5124:case 35670:return jR;case 35667:case 35671:return qR;case 35668:case 35672:return YR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return $R;case 36295:return QR;case 36296:return JR;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class rw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=BR(n.type)}}class sw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aw(n.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,n[h.id],r)}}}const op=/(\w+)(\])?(\[|\.)?/g;function Ux(a,e){a.seq.push(e),a.map[e.id]=e}function lw(a,e,n){const r=a.name,o=r.length;for(op.lastIndex=0;;){const u=op.exec(r),c=op.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&c+2===o){Ux(n,m===void 0?new rw(h,a,e):new sw(h,a,e));break}else{let _=n.map[h];_===void 0&&(_=new ow(h),Ux(n,_)),n=_}}}class zc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(n,c),p=e.getUniformLocation(n,h.name);lw(h,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Lx(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const uw=37297;let cw=0;function fw(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const Nx=new pt;function dw(a){At._getMatrix(Nx,At.workingColorSpace,a);const e=`mat3( ${Nx.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case Xc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ox(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+fw(a.getShaderSource(e),h)}else return u}function hw(a,e){const n=dw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pw={[Dy]:"Linear",[Uy]:"Reinhard",[Ly]:"Cineon",[Ny]:"ACESFilmic",[Py]:"AgX",[Fy]:"Neutral",[Oy]:"Custom"};function mw(a,e){const n=pw[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wc=new Q;function gw(){At.getLuminanceCoefficients(wc);const a=wc.x.toFixed(4),e=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function _w(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function xw(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),c=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:a.getAttribLocation(e,c),locationSize:h}}return n}function Sl(a){return a!==""}function Px(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(a){return a.replace(yw,Mw)}const Sw=new Map;function Mw(a,e){let n=mt[e];if(n===void 0){const r=Sw.get(e);if(r!==void 0)n=mt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cm(n)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ix(a){return a.replace(Ew,bw)}function bw(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Bx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tw={[Oc]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function Aw(a){return Tw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rw={[rs]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[af]:"ENVMAP_TYPE_CUBE_UV"};function ww(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Rw[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cw={[lo]:"ENVMAP_MODE_REFRACTION"};function Dw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Cw[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Uw={[Cy]:"ENVMAP_BLENDING_MULTIPLY",[_T]:"ENVMAP_BLENDING_MIX",[xT]:"ENVMAP_BLENDING_ADD"};function Lw(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Uw[a.combine]||"ENVMAP_BLENDING_NONE"}function Nw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function Ow(a,e,n,r){const o=a.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=Aw(n),m=ww(n),g=Dw(n),_=Lw(n),v=Nw(n),S=vw(n),E=_w(u),R=o.createProgram();let x,y,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Sl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Sl).join(`
`),y.length>0&&(y+=`
`)):(x=[Bx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),y=[Bx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",n.toneMapping!==Ki?mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,hw("linearToOutputTexel",n.outputColorSpace),gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),c=cm(c),c=Px(c,n),c=Fx(c,n),h=cm(h),h=Px(h,n),h=Fx(h,n),c=Ix(c),h=Ix(h),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=b+x+c,U=b+y+h,B=Lx(o,o.VERTEX_SHADER,w),I=Lx(o,o.FRAGMENT_SHADER,U);o.attachShader(R,B),o.attachShader(R,I),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function P(G){if(a.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",ne=o.getShaderInfoLog(B)||"",fe=o.getShaderInfoLog(I)||"",J=$.trim(),F=ne.trim(),H=fe.trim();let ue=!0,pe=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(ue=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,R,B,I);else{const Me=Ox(o,B,"vertex"),O=Ox(o,I,"fragment");Dt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Me+`
`+O)}else J!==""?rt("WebGLProgram: Program Info Log:",J):(F===""||H==="")&&(pe=!1);pe&&(G.diagnostics={runnable:ue,programLog:J,vertexShader:{log:F,prefix:x},fragmentShader:{log:H,prefix:y}})}o.deleteShader(B),o.deleteShader(I),A=new zc(o,R),L=xw(o,R)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let te=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=o.getProgramParameter(R,uw)),te},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=I,this}let Pw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Iw(e),n.set(e,r)),r}}class Iw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Bw(a,e,n,r,o,u){const c=new qy,h=new Fw,p=new Set,m=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function R(A,L,te,G,$){const ne=G.fog,fe=$.geometry,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=e.get(A.envMap||J,F),ue=H&&H.mapping===af?H.image.height:null,pe=S[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&rt("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const Me=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=Me!==void 0?Me.length:0;let Y=0;fe.morphAttributes.position!==void 0&&(Y=1),fe.morphAttributes.normal!==void 0&&(Y=2),fe.morphAttributes.color!==void 0&&(Y=3);let le,Re,Oe,re;if(pe){const Tt=qi[pe];le=Tt.vertexShader,Re=Tt.fragmentShader}else le=A.vertexShader,Re=A.fragmentShader,h.update(A),Oe=h.getVertexShaderID(A),re=h.getFragmentShaderID(A);const xe=a.getRenderTarget(),Ee=a.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,$e=$.isBatchedMesh===!0,tt=!!A.map,en=!!A.matcap,xt=!!H,gt=!!A.aoMap,Ut=!!A.lightMap,ut=!!A.bumpMap,Qt=!!A.normalMap,k=!!A.displacementMap,Yt=!!A.emissiveMap,bt=!!A.metalnessMap,Ot=!!A.roughnessMap,qe=A.anisotropy>0,N=A.clearcoat>0,T=A.dispersion>0,q=A.iridescence>0,ve=A.sheen>0,Se=A.transmission>0,me=qe&&!!A.anisotropyMap,We=N&&!!A.clearcoatMap,De=N&&!!A.clearcoatNormalMap,Ke=N&&!!A.clearcoatRoughnessMap,nt=q&&!!A.iridescenceMap,Ae=q&&!!A.iridescenceThicknessMap,be=ve&&!!A.sheenColorMap,Fe=ve&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,Ie=!!A.specularColorMap,ft=!!A.specularIntensityMap,j=Se&&!!A.transmissionMap,Ce=Se&&!!A.thicknessMap,we=!!A.gradientMap,Be=!!A.alphaMap,Te=A.alphaTest>0,he=!!A.alphaHash,Ge=!!A.extensions;let at=Ki;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=a.toneMapping);const It={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:le,fragmentShader:Re,defines:A.defines,customVertexShaderID:Oe,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:$e,batchingColor:$e&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,outputColorSpace:xe===null?a.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:co,alphaToCoverage:!!A.alphaToCoverage,map:tt,matcap:en,envMap:xt,envMapMode:xt&&H.mapping,envMapCubeUVHeight:ue,aoMap:gt,lightMap:Ut,bumpMap:ut,normalMap:Qt,displacementMap:k,emissiveMap:Yt,normalMapObjectSpace:Qt&&A.normalMapType===ET,normalMapTangentSpace:Qt&&A.normalMapType===MT,metalnessMap:bt,roughnessMap:Ot,anisotropy:qe,anisotropyMap:me,clearcoat:N,clearcoatMap:We,clearcoatNormalMap:De,clearcoatRoughnessMap:Ke,dispersion:T,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:Ae,sheen:ve,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:ft,transmission:Se,transmissionMap:j,thicknessMap:Ce,gradientMap:we,opaque:A.transparent===!1&&A.blending===ro&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:he,combine:A.combine,mapUv:tt&&E(A.map.channel),aoMapUv:gt&&E(A.aoMap.channel),lightMapUv:Ut&&E(A.lightMap.channel),bumpMapUv:ut&&E(A.bumpMap.channel),normalMapUv:Qt&&E(A.normalMap.channel),displacementMapUv:k&&E(A.displacementMap.channel),emissiveMapUv:Yt&&E(A.emissiveMap.channel),metalnessMapUv:bt&&E(A.metalnessMap.channel),roughnessMapUv:Ot&&E(A.roughnessMap.channel),anisotropyMapUv:me&&E(A.anisotropyMap.channel),clearcoatMapUv:We&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(A.sheenRoughnessMap.channel),specularMapUv:Pe&&E(A.specularMap.channel),specularColorMapUv:Ie&&E(A.specularColorMap.channel),specularIntensityMapUv:ft&&E(A.specularIntensityMap.channel),transmissionMapUv:j&&E(A.transmissionMap.channel),thicknessMapUv:Ce&&E(A.thicknessMap.channel),alphaMapUv:Be&&E(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Qt||qe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!fe.attributes.uv&&(tt||Be),fog:!!ne,useFog:A.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||fe.attributes.normal===void 0&&Qt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ee,skinning:$.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&te.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:tt&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Ht,decodeVideoTextureEmissive:Yt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Ht,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ra,flipSided:A.side===Yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const te in A.defines)L.push(te),L.push(A.defines[te]);return A.isRawShaderMaterial===!1&&(y(L,A),b(L,A),L.push(a.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function y(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function b(A,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),A.push(c.mask)}function w(A){const L=S[A.type];let te;if(L){const G=qi[L];te=cA.clone(G.uniforms)}else te=A.uniforms;return te}function U(A,L){let te=g.get(L);return te!==void 0?++te.usedTimes:(te=new Ow(a,L,A,o),m.push(te),g.set(L,te)),te}function B(A){if(--A.usedTimes===0){const L=m.indexOf(A);m[L]=m[m.length-1],m.pop(),g.delete(A.cacheKey),A.destroy()}}function I(A){h.remove(A)}function P(){h.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:w,acquireProgram:U,releaseProgram:B,releaseShaderCache:I,programs:m,dispose:P}}function zw(){let a=new WeakMap;function e(c){return a.has(c)}function n(c){let h=a.get(c);return h===void 0&&(h={},a.set(c,h)),h}function r(c){a.delete(c)}function o(c,h,p){a.get(c)[h]=p}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function Hw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function zx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hx(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,E,R,x,y){let b=a[e];return b===void 0?(b={id:v.id,object:v,geometry:S,material:E,materialVariant:c(v),groupOrder:R,renderOrder:v.renderOrder,z:x,group:y},a[e]=b):(b.id=v.id,b.object=v,b.geometry=S,b.material=E,b.materialVariant=c(v),b.groupOrder=R,b.renderOrder=v.renderOrder,b.z=x,b.group=y),e++,b}function p(v,S,E,R,x,y){const b=h(v,S,E,R,x,y);E.transmission>0?r.push(b):E.transparent===!0?o.push(b):n.push(b)}function m(v,S,E,R,x,y){const b=h(v,S,E,R,x,y);E.transmission>0?r.unshift(b):E.transparent===!0?o.unshift(b):n.unshift(b)}function g(v,S){n.length>1&&n.sort(v||Hw),r.length>1&&r.sort(S||zx),o.length>1&&o.sort(S||zx)}function _(){for(let v=e,S=a.length;v<S;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:p,unshift:m,finish:_,sort:g}}function Gw(){let a=new WeakMap;function e(r,o){const u=a.get(r);let c;return u===void 0?(c=new Hx,a.set(r,[c])):o>=u.length?(c=new Hx,u.push(c)):c=u[o],c}function n(){a=new WeakMap}return{get:e,dispose:n}}function Vw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Ft};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=n,n}}}function kw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let Xw=0;function Ww(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function jw(a){const e=new Vw,n=kw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,u=new an,c=new an;function h(m){let g=0,_=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,R=0,x=0,y=0,b=0,w=0,U=0,B=0,I=0,P=0;m.sort(Ww);for(let L=0,te=m.length;L<te;L++){const G=m[L],$=G.color,ne=G.intensity,fe=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===uo?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=$.r*ne,_+=$.g*ne,v+=$.b*ne;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],ne);P++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ue=n.get(G);ue.shadowIntensity=H.intensity,ue.shadowBias=H.bias,ue.shadowNormalBias=H.normalBias,ue.shadowRadius=H.radius,ue.shadowMapSize=H.mapSize,r.directionalShadow[S]=ue,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=G.shadow.matrix,b++}r.directional[S]=F,S++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy($).multiplyScalar(ne),F.distance=fe,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[R]=F;const H=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[R]=H.matrix,G.castShadow){const ue=n.get(G);ue.shadowIntensity=H.intensity,ue.shadowBias=H.bias,ue.shadowNormalBias=H.normalBias,ue.shadowRadius=H.radius,ue.shadowMapSize=H.mapSize,r.spotShadow[R]=ue,r.spotShadowMap[R]=J,U++}R++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy($).multiplyScalar(ne),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=F,x++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,ue=n.get(G);ue.shadowIntensity=H.intensity,ue.shadowBias=H.bias,ue.shadowNormalBias=H.normalBias,ue.shadowRadius=H.radius,ue.shadowMapSize=H.mapSize,ue.shadowCameraNear=H.camera.near,ue.shadowCameraFar=H.camera.far,r.pointShadow[E]=ue,r.pointShadowMap[E]=J,r.pointShadowMatrix[E]=G.shadow.matrix,w++}r.point[E]=F,E++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(ne),F.groundColor.copy(G.groundColor).multiplyScalar(ne),r.hemi[y]=F,y++}}x>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==S||A.pointLength!==E||A.spotLength!==R||A.rectAreaLength!==x||A.hemiLength!==y||A.numDirectionalShadows!==b||A.numPointShadows!==w||A.numSpotShadows!==U||A.numSpotMaps!==B||A.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=U+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,A.directionalLength=S,A.pointLength=E,A.spotLength=R,A.rectAreaLength=x,A.hemiLength=y,A.numDirectionalShadows=b,A.numPointShadows=w,A.numSpotShadows=U,A.numSpotMaps=B,A.numLightProbes=P,r.version=Xw++)}function p(m,g){let _=0,v=0,S=0,E=0,R=0;const x=g.matrixWorldInverse;for(let y=0,b=m.length;y<b;y++){const w=m[y];if(w.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),_++}else if(w.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),S++}else if(w.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(x),c.identity(),u.copy(w.matrixWorld),u.premultiply(x),c.extractRotation(u),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(x),v++}else if(w.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(x),R++}}}return{setup:h,setupView:p,state:r}}function Gx(a){const e=new jw(a),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function qw(a){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new Gx(a),e.set(o,[h])):u>=c.length?(h=new Gx(a),c.push(h)):h=c[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kw=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],$w=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Vx=new an,_l=new Q,lp=new Q;function Qw(a,e,n){let r=new Qy;const o=new Nt,u=new Nt,c=new on,h=new pA,p=new mA,m={},g=n.maxTextureSize,_={[Ar]:Yn,[Yn]:Ar,[Ra]:Ra},v=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Yw,fragmentShader:Zw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Kn;E.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ba(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let y=this.type;this.render=function(I,P,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===Jb&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const L=a.getRenderTarget(),te=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),$=a.state;$.setBlending(Ua),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ne=y!==this.type;ne&&P.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(J=>J.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,J=I.length;fe<J;fe++){const F=I[fe],H=F.shadow;if(H===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const ue=H.getFrameExtents();o.multiply(ue),u.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ue.x),o.x=u.x*ue.x,H.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ue.y),o.y=u.y*ue.y,H.mapSize.y=u.y));const pe=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=pe,H.map===null||ne===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===yl){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $i(o.x,o.y,{format:uo,type:Pa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Ul(o.x,o.y,Yi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Fa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else F.isPointLight?(H.map=new oS(o.x),H.map.depthTexture=new oA(o.x,ea)):(H.map=new $i(o.x,o.y),H.map.depthTexture=new Ul(o.x,o.y,ea)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Fa,this.type===Oc?(H.map.depthTexture.compareFunction=pe?Lm:Um,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn);H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Me;O++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,O),a.clear();else{O===0&&(a.setRenderTarget(H.map),a.clear());const Y=H.getViewport(O);c.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(c)}if(F.isPointLight){const Y=H.camera,le=H.matrix,Re=F.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),_l.setFromMatrixPosition(F.matrixWorld),Y.position.copy(_l),lp.copy(Y.position),lp.add(Kw[O]),Y.up.copy($w[O]),Y.lookAt(lp),Y.updateMatrixWorld(),le.makeTranslation(-_l.x,-_l.y,-_l.z),Vx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Vx,Y.coordinateSystem,Y.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),U(P,A,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===yl&&b(H,A),H.needsUpdate=!1}y=this.type,x.needsUpdate=!1,a.setRenderTarget(L,te,G)};function b(I,P){const A=e.update(R);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $i(o.x,o.y,{format:uo,type:Pa})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(P,null,A,v,R,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(P,null,A,S,R,null)}function w(I,P,A,L){let te=null;const G=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)te=G;else if(te=A.isPointLight===!0?p:h,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=te.uuid,ne=P.uuid;let fe=m[$];fe===void 0&&(fe={},m[$]=fe);let J=fe[ne];J===void 0&&(J=te.clone(),fe[ne]=J,P.addEventListener("dispose",B)),te=J}if(te.visible=P.visible,te.wireframe=P.wireframe,L===yl?te.side=P.shadowSide!==null?P.shadowSide:P.side:te.side=P.shadowSide!==null?P.shadowSide:_[P.side],te.alphaMap=P.alphaMap,te.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,te.map=P.map,te.clipShadows=P.clipShadows,te.clippingPlanes=P.clippingPlanes,te.clipIntersection=P.clipIntersection,te.displacementMap=P.displacementMap,te.displacementScale=P.displacementScale,te.displacementBias=P.displacementBias,te.wireframeLinewidth=P.wireframeLinewidth,te.linewidth=P.linewidth,A.isPointLight===!0&&te.isMeshDistanceMaterial===!0){const $=a.properties.get(te);$.light=A}return te}function U(I,P,A,L,te){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&te===yl)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const ne=e.update(I),fe=I.material;if(Array.isArray(fe)){const J=ne.groups;for(let F=0,H=J.length;F<H;F++){const ue=J[F],pe=fe[ue.materialIndex];if(pe&&pe.visible){const Me=w(I,pe,L,te);I.onBeforeShadow(a,I,P,A,ne,Me,ue),a.renderBufferDirect(A,null,ne,Me,I,ue),I.onAfterShadow(a,I,P,A,ne,Me,ue)}}}else if(fe.visible){const J=w(I,fe,L,te);I.onBeforeShadow(a,I,P,A,ne,J,null),a.renderBufferDirect(A,null,ne,J,I,null),I.onAfterShadow(a,I,P,A,ne,J,null)}}const $=I.children;for(let ne=0,fe=$.length;ne<fe;ne++)U($[ne],P,A,L,te)}function B(I){I.target.removeEventListener("dispose",B);for(const A in m){const L=m[A],te=I.target.uuid;te in L&&(L[te].dispose(),delete L[te])}}}function Jw(a,e){function n(){let j=!1;const Ce=new on;let we=null;const Be=new on(0,0,0,0);return{setMask:function(Te){we!==Te&&!j&&(a.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){j=Te},setClear:function(Te,he,Ge,at,It){It===!0&&(Te*=at,he*=at,Ge*=at),Ce.set(Te,he,Ge,at),Be.equals(Ce)===!1&&(a.clearColor(Te,he,Ge,at),Be.copy(Ce))},reset:function(){j=!1,we=null,Be.set(-1,0,0,0)}}}function r(){let j=!1,Ce=!1,we=null,Be=null,Te=null;return{setReversed:function(he){if(Ce!==he){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=he;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return Ce},setTest:function(he){he?xe(a.DEPTH_TEST):Ee(a.DEPTH_TEST)},setMask:function(he){we!==he&&!j&&(a.depthMask(he),we=he)},setFunc:function(he){if(Ce&&(he=NT[he]),Be!==he){switch(he){case yp:a.depthFunc(a.NEVER);break;case Sp:a.depthFunc(a.ALWAYS);break;case Mp:a.depthFunc(a.LESS);break;case oo:a.depthFunc(a.LEQUAL);break;case Ep:a.depthFunc(a.EQUAL);break;case bp:a.depthFunc(a.GEQUAL);break;case Tp:a.depthFunc(a.GREATER);break;case Ap:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=he}},setLocked:function(he){j=he},setClear:function(he){Te!==he&&(Te=he,Ce&&(he=1-he),a.clearDepth(he))},reset:function(){j=!1,we=null,Be=null,Te=null,Ce=!1}}}function o(){let j=!1,Ce=null,we=null,Be=null,Te=null,he=null,Ge=null,at=null,It=null;return{setTest:function(Tt){j||(Tt?xe(a.STENCIL_TEST):Ee(a.STENCIL_TEST))},setMask:function(Tt){Ce!==Tt&&!j&&(a.stencilMask(Tt),Ce=Tt)},setFunc:function(Tt,Nn,Ti){(we!==Tt||Be!==Nn||Te!==Ti)&&(a.stencilFunc(Tt,Nn,Ti),we=Tt,Be=Nn,Te=Ti)},setOp:function(Tt,Nn,Ti){(he!==Tt||Ge!==Nn||at!==Ti)&&(a.stencilOp(Tt,Nn,Ti),he=Tt,Ge=Nn,at=Ti)},setLocked:function(Tt){j=Tt},setClear:function(Tt){It!==Tt&&(a.clearStencil(Tt),It=Tt)},reset:function(){j=!1,Ce=null,we=null,Be=null,Te=null,he=null,Ge=null,at=null,It=null}}}const u=new n,c=new r,h=new o,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,R=!1,x=null,y=null,b=null,w=null,U=null,B=null,I=null,P=new Ft(0,0,0),A=0,L=!1,te=null,G=null,$=null,ne=null,fe=null;const J=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const ue=a.getParameter(a.VERSION);ue.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ue)[1]),F=H>=1):ue.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),F=H>=2);let pe=null,Me={};const O=a.getParameter(a.SCISSOR_BOX),Y=a.getParameter(a.VIEWPORT),le=new on().fromArray(O),Re=new on().fromArray(Y);function Oe(j,Ce,we,Be){const Te=new Uint8Array(4),he=a.createTexture();a.bindTexture(j,he),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ge=0;Ge<we;Ge++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(Ce+Ge,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return he}const re={};re[a.TEXTURE_2D]=Oe(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=Oe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=Oe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=Oe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xe(a.DEPTH_TEST),c.setFunc(oo),ut(!1),Qt(G_),xe(a.CULL_FACE),gt(Ua);function xe(j){g[j]!==!0&&(a.enable(j),g[j]=!0)}function Ee(j){g[j]!==!1&&(a.disable(j),g[j]=!1)}function ze(j,Ce){return _[j]!==Ce?(a.bindFramebuffer(j,Ce),_[j]=Ce,j===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ce),j===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $e(j,Ce){let we=S,Be=!1;if(j){we=v.get(Ce),we===void 0&&(we=[],v.set(Ce,we));const Te=j.textures;if(we.length!==Te.length||we[0]!==a.COLOR_ATTACHMENT0){for(let he=0,Ge=Te.length;he<Ge;he++)we[he]=a.COLOR_ATTACHMENT0+he;we.length=Te.length,Be=!0}}else we[0]!==a.BACK&&(we[0]=a.BACK,Be=!0);Be&&a.drawBuffers(we)}function tt(j){return E!==j?(a.useProgram(j),E=j,!0):!1}const en={[Jr]:a.FUNC_ADD,[tT]:a.FUNC_SUBTRACT,[nT]:a.FUNC_REVERSE_SUBTRACT};en[iT]=a.MIN,en[aT]=a.MAX;const xt={[rT]:a.ZERO,[sT]:a.ONE,[oT]:a.SRC_COLOR,[_p]:a.SRC_ALPHA,[hT]:a.SRC_ALPHA_SATURATE,[fT]:a.DST_COLOR,[uT]:a.DST_ALPHA,[lT]:a.ONE_MINUS_SRC_COLOR,[xp]:a.ONE_MINUS_SRC_ALPHA,[dT]:a.ONE_MINUS_DST_COLOR,[cT]:a.ONE_MINUS_DST_ALPHA,[pT]:a.CONSTANT_COLOR,[mT]:a.ONE_MINUS_CONSTANT_COLOR,[gT]:a.CONSTANT_ALPHA,[vT]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(j,Ce,we,Be,Te,he,Ge,at,It,Tt){if(j===Ua){R===!0&&(Ee(a.BLEND),R=!1);return}if(R===!1&&(xe(a.BLEND),R=!0),j!==eT){if(j!==x||Tt!==L){if((y!==Jr||U!==Jr)&&(a.blendEquation(a.FUNC_ADD),y=Jr,U=Jr),Tt)switch(j){case ro:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case V_:a.blendFunc(a.ONE,a.ONE);break;case k_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case X_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",j);break}else switch(j){case ro:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case V_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case k_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",j);break}b=null,w=null,B=null,I=null,P.set(0,0,0),A=0,x=j,L=Tt}return}Te=Te||Ce,he=he||we,Ge=Ge||Be,(Ce!==y||Te!==U)&&(a.blendEquationSeparate(en[Ce],en[Te]),y=Ce,U=Te),(we!==b||Be!==w||he!==B||Ge!==I)&&(a.blendFuncSeparate(xt[we],xt[Be],xt[he],xt[Ge]),b=we,w=Be,B=he,I=Ge),(at.equals(P)===!1||It!==A)&&(a.blendColor(at.r,at.g,at.b,It),P.copy(at),A=It),x=j,L=!1}function Ut(j,Ce){j.side===Ra?Ee(a.CULL_FACE):xe(a.CULL_FACE);let we=j.side===Yn;Ce&&(we=!we),ut(we),j.blending===ro&&j.transparent===!1?gt(Ua):gt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),u.setMask(j.colorWrite);const Be=j.stencilWrite;h.setTest(Be),Be&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Yt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(a.SAMPLE_ALPHA_TO_COVERAGE):Ee(a.SAMPLE_ALPHA_TO_COVERAGE)}function ut(j){te!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),te=j)}function Qt(j){j!==$b?(xe(a.CULL_FACE),j!==G&&(j===G_?a.cullFace(a.BACK):j===Qb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ee(a.CULL_FACE),G=j}function k(j){j!==$&&(F&&a.lineWidth(j),$=j)}function Yt(j,Ce,we){j?(xe(a.POLYGON_OFFSET_FILL),(ne!==Ce||fe!==we)&&(ne=Ce,fe=we,c.getReversed()&&(Ce=-Ce),a.polygonOffset(Ce,we))):Ee(a.POLYGON_OFFSET_FILL)}function bt(j){j?xe(a.SCISSOR_TEST):Ee(a.SCISSOR_TEST)}function Ot(j){j===void 0&&(j=a.TEXTURE0+J-1),pe!==j&&(a.activeTexture(j),pe=j)}function qe(j,Ce,we){we===void 0&&(pe===null?we=a.TEXTURE0+J-1:we=pe);let Be=Me[we];Be===void 0&&(Be={type:void 0,texture:void 0},Me[we]=Be),(Be.type!==j||Be.texture!==Ce)&&(pe!==we&&(a.activeTexture(we),pe=we),a.bindTexture(j,Ce||re[j]),Be.type=j,Be.texture=Ce)}function N(){const j=Me[pe];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function q(){try{a.compressedTexImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function ve(){try{a.texSubImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Se(){try{a.texSubImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function me(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function We(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function De(){try{a.texStorage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Ke(){try{a.texStorage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function nt(){try{a.texImage2D(...arguments)}catch(j){Dt("WebGLState:",j)}}function Ae(){try{a.texImage3D(...arguments)}catch(j){Dt("WebGLState:",j)}}function be(j){le.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),le.copy(j))}function Fe(j){Re.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function Pe(j,Ce){let we=m.get(Ce);we===void 0&&(we=new WeakMap,m.set(Ce,we));let Be=we.get(j);Be===void 0&&(Be=a.getUniformBlockIndex(Ce,j.name),we.set(j,Be))}function Ie(j,Ce){const Be=m.get(Ce).get(j);p.get(Ce)!==Be&&(a.uniformBlockBinding(Ce,Be,j.__bindingPointIndex),p.set(Ce,Be))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},pe=null,Me={},_={},v=new WeakMap,S=[],E=null,R=!1,x=null,y=null,b=null,w=null,U=null,B=null,I=null,P=new Ft(0,0,0),A=0,L=!1,te=null,G=null,$=null,ne=null,fe=null,le.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:xe,disable:Ee,bindFramebuffer:ze,drawBuffers:$e,useProgram:tt,setBlending:gt,setMaterial:Ut,setFlipSided:ut,setCullFace:Qt,setLineWidth:k,setPolygonOffset:Yt,setScissorTest:bt,activeTexture:Ot,bindTexture:qe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:nt,texImage3D:Ae,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:Ke,texSubImage2D:ve,texSubImage3D:Se,compressedTexSubImage2D:me,compressedTexSubImage3D:We,scissor:be,viewport:Fe,reset:ft}}function eC(a,e,n,r,o,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return S?new OffscreenCanvas(N,T):jc("canvas")}function R(N,T,q){let ve=1;const Se=qe(N);if((Se.width>q||Se.height>q)&&(ve=q/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(ve*Se.width),We=Math.floor(ve*Se.height);_===void 0&&(_=E(me,We));const De=T?E(me,We):_;return De.width=me,De.height=We,De.getContext("2d").drawImage(N,0,0,me,We),rt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+me+"x"+We+")."),De}else return"data"in N&&rt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function x(N){return N.generateMipmaps}function y(N){a.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(N,T,q,ve,Se=!1){if(N!==null){if(a[N]!==void 0)return a[N];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=T;if(T===a.RED&&(q===a.FLOAT&&(me=a.R32F),q===a.HALF_FLOAT&&(me=a.R16F),q===a.UNSIGNED_BYTE&&(me=a.R8)),T===a.RED_INTEGER&&(q===a.UNSIGNED_BYTE&&(me=a.R8UI),q===a.UNSIGNED_SHORT&&(me=a.R16UI),q===a.UNSIGNED_INT&&(me=a.R32UI),q===a.BYTE&&(me=a.R8I),q===a.SHORT&&(me=a.R16I),q===a.INT&&(me=a.R32I)),T===a.RG&&(q===a.FLOAT&&(me=a.RG32F),q===a.HALF_FLOAT&&(me=a.RG16F),q===a.UNSIGNED_BYTE&&(me=a.RG8)),T===a.RG_INTEGER&&(q===a.UNSIGNED_BYTE&&(me=a.RG8UI),q===a.UNSIGNED_SHORT&&(me=a.RG16UI),q===a.UNSIGNED_INT&&(me=a.RG32UI),q===a.BYTE&&(me=a.RG8I),q===a.SHORT&&(me=a.RG16I),q===a.INT&&(me=a.RG32I)),T===a.RGB_INTEGER&&(q===a.UNSIGNED_BYTE&&(me=a.RGB8UI),q===a.UNSIGNED_SHORT&&(me=a.RGB16UI),q===a.UNSIGNED_INT&&(me=a.RGB32UI),q===a.BYTE&&(me=a.RGB8I),q===a.SHORT&&(me=a.RGB16I),q===a.INT&&(me=a.RGB32I)),T===a.RGBA_INTEGER&&(q===a.UNSIGNED_BYTE&&(me=a.RGBA8UI),q===a.UNSIGNED_SHORT&&(me=a.RGBA16UI),q===a.UNSIGNED_INT&&(me=a.RGBA32UI),q===a.BYTE&&(me=a.RGBA8I),q===a.SHORT&&(me=a.RGBA16I),q===a.INT&&(me=a.RGBA32I)),T===a.RGB&&(q===a.UNSIGNED_INT_5_9_9_9_REV&&(me=a.RGB9_E5),q===a.UNSIGNED_INT_10F_11F_11F_REV&&(me=a.R11F_G11F_B10F)),T===a.RGBA){const We=Se?Xc:At.getTransfer(ve);q===a.FLOAT&&(me=a.RGBA32F),q===a.HALF_FLOAT&&(me=a.RGBA16F),q===a.UNSIGNED_BYTE&&(me=We===Ht?a.SRGB8_ALPHA8:a.RGBA8),q===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),q===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function U(N,T){let q;return N?T===null||T===ea||T===Dl?q=a.DEPTH24_STENCIL8:T===Yi?q=a.DEPTH32F_STENCIL8:T===Cl&&(q=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ea||T===Dl?q=a.DEPTH_COMPONENT24:T===Yi?q=a.DEPTH_COMPONENT32F:T===Cl&&(q=a.DEPTH_COMPONENT16),q}function B(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),A(T),T.isVideoTexture&&g.delete(T)}function P(N){const T=N.target;T.removeEventListener("dispose",P),te(T)}function A(N){const T=r.get(N);if(T.__webglInit===void 0)return;const q=N.source,ve=v.get(q);if(ve){const Se=ve[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&L(N),Object.keys(ve).length===0&&v.delete(q)}r.remove(N)}function L(N){const T=r.get(N);a.deleteTexture(T.__webglTexture);const q=N.source,ve=v.get(q);delete ve[T.__cacheKey],c.memory.textures--}function te(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Se=0;Se<T.__webglFramebuffer[ve].length;Se++)a.deleteFramebuffer(T.__webglFramebuffer[ve][Se]);else a.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)a.deleteFramebuffer(T.__webglFramebuffer[ve]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=N.textures;for(let ve=0,Se=q.length;ve<Se;ve++){const me=r.get(q[ve]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),c.memory.textures--),r.remove(q[ve])}r.remove(N)}let G=0;function $(){G=0}function ne(){const N=G;return N>=o.maxTextures&&rt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),G+=1,N}function fe(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function J(N,T){const q=r.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ve=N.image;if(ve===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,q.__webglTexture,a.TEXTURE0+T)}function F(N,T){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){re(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,q.__webglTexture,a.TEXTURE0+T)}function H(N,T){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){re(q,N,T);return}n.bindTexture(a.TEXTURE_3D,q.__webglTexture,a.TEXTURE0+T)}function ue(N,T){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){xe(q,N,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture,a.TEXTURE0+T)}const pe={[Rp]:a.REPEAT,[Ca]:a.CLAMP_TO_EDGE,[wp]:a.MIRRORED_REPEAT},Me={[Rn]:a.NEAREST,[yT]:a.NEAREST_MIPMAP_NEAREST,[nc]:a.NEAREST_MIPMAP_LINEAR,[Un]:a.LINEAR,[Uh]:a.LINEAR_MIPMAP_NEAREST,[ns]:a.LINEAR_MIPMAP_LINEAR},O={[bT]:a.NEVER,[CT]:a.ALWAYS,[TT]:a.LESS,[Um]:a.LEQUAL,[AT]:a.EQUAL,[Lm]:a.GEQUAL,[RT]:a.GREATER,[wT]:a.NOTEQUAL};function Y(N,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Un||T.magFilter===Uh||T.magFilter===nc||T.magFilter===ns||T.minFilter===Un||T.minFilter===Uh||T.minFilter===nc||T.minFilter===ns)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,pe[T.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,pe[T.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,pe[T.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Me[T.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==nc&&T.minFilter!==ns||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const ve=T.source;let Se=v.get(ve);Se===void 0&&(Se={},v.set(ve,Se));const me=fe(T);if(me!==N.__cacheKey){Se[me]===void 0&&(Se[me]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,q=!0),Se[me].usedTimes++;const We=Se[N.__cacheKey];We!==void 0&&(Se[N.__cacheKey].usedTimes--,We.usedTimes===0&&L(T)),N.__cacheKey=me,N.__webglTexture=Se[me].texture}return q}function Re(N,T,q){return Math.floor(Math.floor(N/q)/T)}function Oe(N,T,q,ve){const me=N.updateRanges;if(me.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,q,ve,T.data);else{me.sort((Ae,be)=>Ae.start-be.start);let We=0;for(let Ae=1;Ae<me.length;Ae++){const be=me[We],Fe=me[Ae],Pe=be.start+be.count,Ie=Re(Fe.start,T.width,4),ft=Re(be.start,T.width,4);Fe.start<=Pe+1&&Ie===ft&&Re(Fe.start+Fe.count-1,T.width,4)===Ie?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++We,me[We]=Fe)}me.length=We+1;const De=a.getParameter(a.UNPACK_ROW_LENGTH),Ke=a.getParameter(a.UNPACK_SKIP_PIXELS),nt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Ae=0,be=me.length;Ae<be;Ae++){const Fe=me[Ae],Pe=Math.floor(Fe.start/4),Ie=Math.ceil(Fe.count/4),ft=Pe%T.width,j=Math.floor(Pe/T.width),Ce=Ie,we=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),a.pixelStorei(a.UNPACK_SKIP_ROWS,j),n.texSubImage2D(a.TEXTURE_2D,0,ft,j,Ce,we,q,ve,T.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,De),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,nt)}}function re(N,T,q){let ve=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=a.TEXTURE_3D);const Se=le(N,T),me=T.source;n.bindTexture(ve,N.__webglTexture,a.TEXTURE0+q);const We=r.get(me);if(me.version!==We.__version||Se===!0){n.activeTexture(a.TEXTURE0+q);const De=At.getPrimaries(At.workingColorSpace),Ke=T.colorSpace===yr?null:At.getPrimaries(T.colorSpace),nt=T.colorSpace===yr||De===Ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ae=R(T.image,!1,o.maxTextureSize);Ae=Ot(T,Ae);const be=u.convert(T.format,T.colorSpace),Fe=u.convert(T.type);let Pe=w(T.internalFormat,be,Fe,T.colorSpace,T.isVideoTexture);Y(ve,T);let Ie;const ft=T.mipmaps,j=T.isVideoTexture!==!0,Ce=We.__version===void 0||Se===!0,we=me.dataReady,Be=B(T,Ae);if(T.isDepthTexture)Pe=U(T.format===is,T.type),Ce&&(j?n.texStorage2D(a.TEXTURE_2D,1,Pe,Ae.width,Ae.height):n.texImage2D(a.TEXTURE_2D,0,Pe,Ae.width,Ae.height,0,be,Fe,null));else if(T.isDataTexture)if(ft.length>0){j&&Ce&&n.texStorage2D(a.TEXTURE_2D,Be,Pe,ft[0].width,ft[0].height);for(let Te=0,he=ft.length;Te<he;Te++)Ie=ft[Te],j?we&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,be,Fe,Ie.data):n.texImage2D(a.TEXTURE_2D,Te,Pe,Ie.width,Ie.height,0,be,Fe,Ie.data);T.generateMipmaps=!1}else j?(Ce&&n.texStorage2D(a.TEXTURE_2D,Be,Pe,Ae.width,Ae.height),we&&Oe(T,Ae,be,Fe)):n.texImage2D(a.TEXTURE_2D,0,Pe,Ae.width,Ae.height,0,be,Fe,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){j&&Ce&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,Pe,ft[0].width,ft[0].height,Ae.depth);for(let Te=0,he=ft.length;Te<he;Te++)if(Ie=ft[Te],T.format!==Fi)if(be!==null)if(j){if(we)if(T.layerUpdates.size>0){const Ge=xx(Ie.width,Ie.height,T.format,T.type);for(const at of T.layerUpdates){const It=Ie.data.subarray(at*Ge/Ie.data.BYTES_PER_ELEMENT,(at+1)*Ge/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,at,Ie.width,Ie.height,1,be,It)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,Ae.depth,be,Ie.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,Pe,Ie.width,Ie.height,Ae.depth,0,Ie.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ie.width,Ie.height,Ae.depth,be,Fe,Ie.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Te,Pe,Ie.width,Ie.height,Ae.depth,0,be,Fe,Ie.data)}else{j&&Ce&&n.texStorage2D(a.TEXTURE_2D,Be,Pe,ft[0].width,ft[0].height);for(let Te=0,he=ft.length;Te<he;Te++)Ie=ft[Te],T.format!==Fi?be!==null?j?we&&n.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,be,Ie.data):n.compressedTexImage2D(a.TEXTURE_2D,Te,Pe,Ie.width,Ie.height,0,Ie.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ie.width,Ie.height,be,Fe,Ie.data):n.texImage2D(a.TEXTURE_2D,Te,Pe,Ie.width,Ie.height,0,be,Fe,Ie.data)}else if(T.isDataArrayTexture)if(j){if(Ce&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,Pe,Ae.width,Ae.height,Ae.depth),we)if(T.layerUpdates.size>0){const Te=xx(Ae.width,Ae.height,T.format,T.type);for(const he of T.layerUpdates){const Ge=Ae.data.subarray(he*Te/Ae.data.BYTES_PER_ELEMENT,(he+1)*Te/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,Ae.width,Ae.height,1,be,Fe,Ge)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,be,Fe,Ae.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,Ae.width,Ae.height,Ae.depth,0,be,Fe,Ae.data);else if(T.isData3DTexture)j?(Ce&&n.texStorage3D(a.TEXTURE_3D,Be,Pe,Ae.width,Ae.height,Ae.depth),we&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,be,Fe,Ae.data)):n.texImage3D(a.TEXTURE_3D,0,Pe,Ae.width,Ae.height,Ae.depth,0,be,Fe,Ae.data);else if(T.isFramebufferTexture){if(Ce)if(j)n.texStorage2D(a.TEXTURE_2D,Be,Pe,Ae.width,Ae.height);else{let Te=Ae.width,he=Ae.height;for(let Ge=0;Ge<Be;Ge++)n.texImage2D(a.TEXTURE_2D,Ge,Pe,Te,he,0,be,Fe,null),Te>>=1,he>>=1}}else if(ft.length>0){if(j&&Ce){const Te=qe(ft[0]);n.texStorage2D(a.TEXTURE_2D,Be,Pe,Te.width,Te.height)}for(let Te=0,he=ft.length;Te<he;Te++)Ie=ft[Te],j?we&&n.texSubImage2D(a.TEXTURE_2D,Te,0,0,be,Fe,Ie):n.texImage2D(a.TEXTURE_2D,Te,Pe,be,Fe,Ie);T.generateMipmaps=!1}else if(j){if(Ce){const Te=qe(Ae);n.texStorage2D(a.TEXTURE_2D,Be,Pe,Te.width,Te.height)}we&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,be,Fe,Ae)}else n.texImage2D(a.TEXTURE_2D,0,Pe,be,Fe,Ae);x(T)&&y(ve),We.__version=me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function xe(N,T,q){if(T.image.length!==6)return;const ve=le(N,T),Se=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+q);const me=r.get(Se);if(Se.version!==me.__version||ve===!0){n.activeTexture(a.TEXTURE0+q);const We=At.getPrimaries(At.workingColorSpace),De=T.colorSpace===yr?null:At.getPrimaries(T.colorSpace),Ke=T.colorSpace===yr||We===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const nt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,be=[];for(let he=0;he<6;he++)!nt&&!Ae?be[he]=R(T.image[he],!0,o.maxCubemapSize):be[he]=Ae?T.image[he].image:T.image[he],be[he]=Ot(T,be[he]);const Fe=be[0],Pe=u.convert(T.format,T.colorSpace),Ie=u.convert(T.type),ft=w(T.internalFormat,Pe,Ie,T.colorSpace),j=T.isVideoTexture!==!0,Ce=me.__version===void 0||ve===!0,we=Se.dataReady;let Be=B(T,Fe);Y(a.TEXTURE_CUBE_MAP,T);let Te;if(nt){j&&Ce&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ft,Fe.width,Fe.height);for(let he=0;he<6;he++){Te=be[he].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const at=Te[Ge];T.format!==Fi?Pe!==null?j?we&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,at.width,at.height,Pe,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,ft,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,at.width,at.height,Pe,Ie,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,ft,at.width,at.height,0,Pe,Ie,at.data)}}}else{if(Te=T.mipmaps,j&&Ce){Te.length>0&&Be++;const he=qe(be[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Ae){j?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,be[he].width,be[he].height,Pe,Ie,be[he].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,be[he].width,be[he].height,0,Pe,Ie,be[he].data);for(let Ge=0;Ge<Te.length;Ge++){const It=Te[Ge].image[he].image;j?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,It.width,It.height,Pe,Ie,It.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,ft,It.width,It.height,0,Pe,Ie,It.data)}}else{j?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe,Ie,be[he]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Pe,Ie,be[he]);for(let Ge=0;Ge<Te.length;Ge++){const at=Te[Ge];j?we&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,Pe,Ie,at.image[he]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,ft,Pe,Ie,at.image[he])}}}x(T)&&y(a.TEXTURE_CUBE_MAP),me.__version=Se.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ee(N,T,q,ve,Se,me){const We=u.convert(q.format,q.colorSpace),De=u.convert(q.type),Ke=w(q.internalFormat,We,De,q.colorSpace),nt=r.get(T),Ae=r.get(q);if(Ae.__renderTarget=T,!nt.__hasExternalTextures){const be=Math.max(1,T.width>>me),Fe=Math.max(1,T.height>>me);Se===a.TEXTURE_3D||Se===a.TEXTURE_2D_ARRAY?n.texImage3D(Se,me,Ke,be,Fe,T.depth,0,We,De,null):n.texImage2D(Se,me,Ke,be,Fe,0,We,De,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),Yt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Se,Ae.__webglTexture,0,k(T)):(Se===a.TEXTURE_2D||Se>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Se,Ae.__webglTexture,me),n.bindFramebuffer(a.FRAMEBUFFER,null)}function ze(N,T,q){if(a.bindRenderbuffer(a.RENDERBUFFER,N),T.depthBuffer){const ve=T.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,me=U(T.stencilBuffer,Se),We=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Yt(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),me,T.width,T.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),me,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,me,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,We,a.RENDERBUFFER,N)}else{const ve=T.textures;for(let Se=0;Se<ve.length;Se++){const me=ve[Se],We=u.convert(me.format,me.colorSpace),De=u.convert(me.type),Ke=w(me.internalFormat,We,De,me.colorSpace);Yt(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),Ke,T.width,T.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),Ke,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ke,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $e(N,T,q){const ve=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(T.depthTexture);if(Se.__renderTarget=T,(!Se.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),Se.__webglTexture===void 0){Se.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,Se.__webglTexture),Y(a.TEXTURE_CUBE_MAP,T.depthTexture);const nt=u.convert(T.depthTexture.format),Ae=u.convert(T.depthTexture.type);let be;T.depthTexture.format===Fa?be=a.DEPTH_COMPONENT24:T.depthTexture.format===is&&(be=a.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,T.width,T.height,0,nt,Ae,null)}}else J(T.depthTexture,0);const me=Se.__webglTexture,We=k(T),De=ve?a.TEXTURE_CUBE_MAP_POSITIVE_X+q:a.TEXTURE_2D,Ke=T.depthTexture.format===is?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Fa)Yt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ke,De,me,0,We):a.framebufferTexture2D(a.FRAMEBUFFER,Ke,De,me,0);else if(T.depthTexture.format===is)Yt(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ke,De,me,0,We):a.framebufferTexture2D(a.FRAMEBUFFER,Ke,De,me,0);else throw new Error("Unknown depthTexture format")}function tt(N){const T=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=ve}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let ve=0;ve<6;ve++)$e(T.__webglFramebuffer[ve],N,ve);else{const ve=N.texture.mipmaps;ve&&ve.length>0?$e(T.__webglFramebuffer[0],N,0):$e(T.__webglFramebuffer,N,0)}else if(q){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=a.createRenderbuffer(),ze(T.__webglDepthbuffer[ve],N,!1);else{const Se=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,me)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ze(T.__webglDepthbuffer,N,!1);else{const Se=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,me)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function en(N,T,q){const ve=r.get(N);T!==void 0&&Ee(ve.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),q!==void 0&&tt(N)}function xt(N){const T=N.texture,q=r.get(N),ve=r.get(T);N.addEventListener("dispose",P);const Se=N.textures,me=N.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,c.memory.textures++),me){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let Ke=0;Ke<T.mipmaps.length;Ke++)q.__webglFramebuffer[De][Ke]=a.createFramebuffer()}else q.__webglFramebuffer[De]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)q.__webglFramebuffer[De]=a.createFramebuffer()}else q.__webglFramebuffer=a.createFramebuffer();if(We)for(let De=0,Ke=Se.length;De<Ke;De++){const nt=r.get(Se[De]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),c.memory.textures++)}if(N.samples>0&&Yt(N)===!1){q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let De=0;De<Se.length;De++){const Ke=Se[De];q.__webglColorRenderbuffer[De]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,q.__webglColorRenderbuffer[De]);const nt=u.convert(Ke.format,Ke.colorSpace),Ae=u.convert(Ke.type),be=w(Ke.internalFormat,nt,Ae,Ke.colorSpace,N.isXRRenderTarget===!0),Fe=k(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,be,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,q.__webglColorRenderbuffer[De])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(me){n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),Y(a.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)Ee(q.__webglFramebuffer[De][Ke],N,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ke);else Ee(q.__webglFramebuffer[De],N,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);x(T)&&y(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let De=0,Ke=Se.length;De<Ke;De++){const nt=Se[De],Ae=r.get(nt);let be=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(be,Ae.__webglTexture),Y(be,nt),Ee(q.__webglFramebuffer,N,nt,a.COLOR_ATTACHMENT0+De,be,0),x(nt)&&y(be)}n.unbindTexture()}else{let De=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(De,ve.__webglTexture),Y(De,T),T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)Ee(q.__webglFramebuffer[Ke],N,T,a.COLOR_ATTACHMENT0,De,Ke);else Ee(q.__webglFramebuffer,N,T,a.COLOR_ATTACHMENT0,De,0);x(T)&&y(De),n.unbindTexture()}N.depthBuffer&&tt(N)}function gt(N){const T=N.textures;for(let q=0,ve=T.length;q<ve;q++){const Se=T[q];if(x(Se)){const me=b(N),We=r.get(Se).__webglTexture;n.bindTexture(me,We),y(me),n.unbindTexture()}}}const Ut=[],ut=[];function Qt(N){if(N.samples>0){if(Yt(N)===!1){const T=N.textures,q=N.width,ve=N.height;let Se=a.COLOR_BUFFER_BIT;const me=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,We=r.get(N),De=T.length>1;if(De)for(let nt=0;nt<T.length;nt++)n.bindFramebuffer(a.FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,We.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let nt=0;nt<T.length;nt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=a.STENCIL_BUFFER_BIT)),De){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,We.__webglColorRenderbuffer[nt]);const Ae=r.get(T[nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,q,ve,0,0,q,ve,Se,a.NEAREST),p===!0&&(Ut.length=0,ut.length=0,Ut.push(a.COLOR_ATTACHMENT0+nt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ut.push(me),ut.push(me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ut)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),De)for(let nt=0;nt<T.length;nt++){n.bindFramebuffer(a.FRAMEBUFFER,We.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.RENDERBUFFER,We.__webglColorRenderbuffer[nt]);const Ae=r.get(T[nt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,We.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+nt,a.TEXTURE_2D,Ae,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function k(N){return Math.min(o.maxSamples,N.samples)}function Yt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(N){const T=c.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ot(N,T){const q=N.colorSpace,ve=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==co&&q!==yr&&(At.getTransfer(q)===Ht?(ve!==Fi||Se!==Si)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",q)),T}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=ue,this.rebindTextures=en,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(a,e){function n(r,o=yr){let u;const c=At.getTransfer(o);if(r===Si)return a.UNSIGNED_BYTE;if(r===Am)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Rm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Hy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Gy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===By)return a.BYTE;if(r===zy)return a.SHORT;if(r===Cl)return a.UNSIGNED_SHORT;if(r===Tm)return a.INT;if(r===ea)return a.UNSIGNED_INT;if(r===Yi)return a.FLOAT;if(r===Pa)return a.HALF_FLOAT;if(r===Vy)return a.ALPHA;if(r===ky)return a.RGB;if(r===Fi)return a.RGBA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===is)return a.DEPTH_STENCIL;if(r===Xy)return a.RED;if(r===wm)return a.RED_INTEGER;if(r===uo)return a.RG;if(r===Cm)return a.RG_INTEGER;if(r===Dm)return a.RGBA_INTEGER;if(r===Pc||r===Fc||r===Ic||r===Bc)if(c===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cp||r===Dp||r===Up||r===Lp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Cp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Up)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Np||r===Op||r===Pp||r===Fp||r===Ip||r===Bp||r===zp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Np||r===Op)return c===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Pp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Fp)return u.COMPRESSED_R11_EAC;if(r===Ip)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Bp)return u.COMPRESSED_RG11_EAC;if(r===zp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===jp||r===qp||r===Yp||r===Zp||r===Kp||r===$p||r===Qp||r===Jp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Hp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$p)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===em||r===tm||r===nm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===em)return c===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===im||r===am||r===rm||r===sm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===im)return u.COMPRESSED_RED_RGTC1_EXT;if(r===am)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new nS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ta({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new rf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rC extends mo{constructor(e,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",x=new aC,y={},b=n.getContextAttributes();let w=null,U=null;const B=[],I=[],P=new Nt;let A=null;const L=new yi;L.viewport=new on;const te=new yi;te.viewport=new on;const G=[L,te],$=new vA;let ne=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=B[re];return xe===void 0&&(xe=new zh,B[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=B[re];return xe===void 0&&(xe=new zh,B[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=B[re];return xe===void 0&&(xe=new zh,B[re]=xe),xe.getHandSpace()};function J(re){const xe=I.indexOf(re.inputSource);if(xe===-1)return;const Ee=B[xe];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,m||c),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let re=0;re<B.length;re++){const xe=I[re];xe!==null&&(I[re]=null,B[re].disconnect(xe))}ne=null,fe=null,x.reset();for(const re in y)delete y[re];e.setRenderTarget(w),S=null,v=null,_=null,o=null,U=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){u=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,$e=null;b.depth&&($e=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=b.stencil?is:Fa,ze=b.stencil?Dl:ea);const tt={colorFormat:n.RGBA8,depthFormat:$e,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(tt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new $i(v.textureWidth,v.textureHeight,{format:Fi,type:Si,depthTexture:new Ul(v.textureWidth,v.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $i(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(h),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(re){for(let xe=0;xe<re.removed.length;xe++){const Ee=re.removed[xe],ze=I.indexOf(Ee);ze>=0&&(I[ze]=null,B[ze].disconnect(Ee))}for(let xe=0;xe<re.added.length;xe++){const Ee=re.added[xe];let ze=I.indexOf(Ee);if(ze===-1){for(let tt=0;tt<B.length;tt++)if(tt>=I.length){I.push(Ee),ze=tt;break}else if(I[tt]===null){I[tt]=Ee,ze=tt;break}if(ze===-1)break}const $e=B[ze];$e&&$e.connect(Ee)}}const ue=new Q,pe=new Q;function Me(re,xe,Ee){ue.setFromMatrixPosition(xe.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const ze=ue.distanceTo(pe),$e=xe.projectionMatrix.elements,tt=Ee.projectionMatrix.elements,en=$e[14]/($e[10]-1),xt=$e[14]/($e[10]+1),gt=($e[9]+1)/$e[5],Ut=($e[9]-1)/$e[5],ut=($e[8]-1)/$e[0],Qt=(tt[8]+1)/tt[0],k=en*ut,Yt=en*Qt,bt=ze/(-ut+Qt),Ot=bt*-ut;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ot),re.translateZ(bt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),$e[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const qe=en+bt,N=xt+bt,T=k-Ot,q=Yt+(ze-Ot),ve=gt*xt/N*qe,Se=Ut*xt/N*qe;re.projectionMatrix.makePerspective(T,q,ve,Se,qe,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let xe=re.near,Ee=re.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),$.near=te.near=L.near=xe,$.far=te.far=L.far=Ee,(ne!==$.near||fe!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ne=$.near,fe=$.far),$.layers.mask=re.layers.mask|6,L.layers.mask=$.layers.mask&-5,te.layers.mask=$.layers.mask&-3;const ze=re.parent,$e=$.cameras;O($,ze);for(let tt=0;tt<$e.length;tt++)O($e[tt],ze);$e.length===2?Me($,L,te):$.projectionMatrix.copy(L.projectionMatrix),Y(re,$,ze)};function Y(re,xe,Ee){Ee===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=om*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(re){p=re,v!==null&&(v.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(re){return y[re]};let le=null;function Re(re,xe){if(g=xe.getViewerPose(m||c),E=xe,g!==null){const Ee=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ze=!1;Ee.length!==$.cameras.length&&($.cameras.length=0,ze=!0);for(let xt=0;xt<Ee.length;xt++){const gt=Ee[xt];let Ut=null;if(S!==null)Ut=S.getViewport(gt);else{const Qt=_.getViewSubImage(v,gt);Ut=Qt.viewport,xt===0&&(e.setRenderTargetTextures(U,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(U))}let ut=G[xt];ut===void 0&&(ut=new yi,ut.layers.enable(xt),ut.viewport=new on,G[xt]=ut),ut.matrix.fromArray(gt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(gt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),xt===0&&($.matrix.copy(ut.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ze===!0&&$.cameras.push(ut)}const $e=o.enabledFeatures;if($e&&$e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const xt=_.getDepthInformation(Ee[0]);xt&&xt.isValid&&xt.texture&&x.init(xt,o.renderState)}if($e&&$e.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let xt=0;xt<Ee.length;xt++){const gt=Ee[xt].camera;if(gt){let Ut=y[gt];Ut||(Ut=new nS,y[gt]=Ut);const ut=_.getCameraImage(gt);Ut.sourceTexture=ut}}}}for(let Ee=0;Ee<B.length;Ee++){const ze=I[Ee],$e=B[Ee];ze!==null&&$e!==void 0&&$e.update(ze,xe,m||c)}le&&le(re,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Oe=new sS;Oe.setAnimationLoop(Re),this.setAnimationLoop=function(re){le=re},this.dispose=function(){}}}const Kr=new Ia,sC=new an;function oC(a,e){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,iS(a)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,b,w,U){y.isMeshBasicMaterial?u(x,y):y.isMeshLambertMaterial?(u(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(x,y),_(x,y)):y.isMeshPhongMaterial?(u(x,y),g(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,U)):y.isMeshMatcapMaterial?(u(x,y),E(x,y)):y.isMeshDepthMaterial?u(x,y):y.isMeshDistanceMaterial?(u(x,y),R(x,y)):y.isMeshNormalMaterial?u(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?p(x,y,b,w):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Yn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Yn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const b=e.get(y),w=b.envMap,U=b.envMapRotation;w&&(x.envMap.value=w,Kr.copy(U),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),x.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(Kr)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,b,w){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*b,x.scale.value=w*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,b){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function R(x,y){const b=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function lC(a,e,n,r){let o={},u={},c=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,w){const U=w.program;r.uniformBlockBinding(b,U)}function m(b,w){let U=o[b.id];U===void 0&&(E(b),U=g(b),o[b.id]=U,b.addEventListener("dispose",x));const B=w.program;r.updateUBOMapping(b,B);const I=e.render.frame;u[b.id]!==I&&(v(b),u[b.id]=I)}function g(b){const w=_();b.__bindingPointIndex=w;const U=a.createBuffer(),B=b.__size,I=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,B,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,U),U}function _(){for(let b=0;b<h;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const w=o[b.id],U=b.uniforms,B=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let I=0,P=U.length;I<P;I++){const A=Array.isArray(U[I])?U[I]:[U[I]];for(let L=0,te=A.length;L<te;L++){const G=A[L];if(S(G,I,L,B)===!0){const $=G.__offset,ne=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let J=0;J<ne.length;J++){const F=ne[J],H=R(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,$+fe,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,fe),fe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,$,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(b,w,U,B){const I=b.value,P=w+"_"+U;if(B[P]===void 0)return typeof I=="number"||typeof I=="boolean"?B[P]=I:B[P]=I.clone(),!0;{const A=B[P];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return B[P]=I,!0}else if(A.equals(I)===!1)return A.copy(I),!0}return!1}function E(b){const w=b.uniforms;let U=0;const B=16;for(let P=0,A=w.length;P<A;P++){const L=Array.isArray(w[P])?w[P]:[w[P]];for(let te=0,G=L.length;te<G;te++){const $=L[te],ne=Array.isArray($.value)?$.value:[$.value];for(let fe=0,J=ne.length;fe<J;fe++){const F=ne[fe],H=R(F),ue=U%B,pe=ue%H.boundary,Me=ue+pe;U+=pe,Me!==0&&B-Me<H.storage&&(U+=B-Me),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=H.storage}}}const I=U%B;return I>0&&(U+=B-I),b.__size=U,b.__cache={},this}function R(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",b),w}function x(b){const w=b.target;w.removeEventListener("dispose",x);const U=c.indexOf(w.__bindingPointIndex);c.splice(U,1),a.deleteBuffer(o[w.id]),delete o[w.id],delete u[w.id]}function y(){for(const b in o)a.deleteBuffer(o[b]);c=[],o={},u={}}return{bind:p,update:m,dispose:y}}const uC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function cC(){return Wi===null&&(Wi=new eA(uC,16,16,uo,Pa),Wi.name="DFG_LUT",Wi.minFilter=Un,Wi.magFilter=Un,Wi.wrapS=Ca,Wi.wrapT=Ca,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class fC{constructor(e={}){const{canvas:n=UT(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Si}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const R=S,x=new Set([Dm,Cm,wm]),y=new Set([Si,ea,Cl,Dl,Am,Rm]),b=new Uint32Array(4),w=new Int32Array(4);let U=null,B=null;const I=[],P=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let te=!1;this._outputColorSpace=xi;let G=0,$=0,ne=null,fe=-1,J=null;const F=new on,H=new on;let ue=null;const pe=new Ft(0);let Me=0,O=n.width,Y=n.height,le=1,Re=null,Oe=null;const re=new on(0,0,O,Y),xe=new on(0,0,O,Y);let Ee=!1;const ze=new Qy;let $e=!1,tt=!1;const en=new an,xt=new Q,gt=new on,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Qt(){return ne===null?le:1}let k=r;function Yt(D,W){return n.getContext(D,W)}try{const D={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bm}`),n.addEventListener("webglcontextlost",Ge,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",It,!1),k===null){const W="webgl2";if(k=Yt(W,D),k===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Dt("WebGLRenderer: "+D.message),D}let bt,Ot,qe,N,T,q,ve,Se,me,We,De,Ke,nt,Ae,be,Fe,Pe,Ie,ft,j,Ce,we,Be;function Te(){bt=new fR(k),bt.init(),Ce=new tC(k,bt),Ot=new iR(k,bt,e,Ce),qe=new Jw(k,bt),Ot.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),N=new pR(k),T=new zw,q=new eC(k,bt,qe,T,Ot,Ce,N),ve=new cR(L),Se=new xA(k),we=new tR(k,Se),me=new dR(k,Se,N,we),We=new gR(k,me,Se,we,N),Ie=new mR(k,Ot,q),be=new aR(T),De=new Bw(L,ve,bt,Ot,we,be),Ke=new oC(L,T),nt=new Gw,Ae=new qw(bt),Pe=new eR(L,ve,qe,We,E,p),Fe=new Qw(L,We,Ot),Be=new lC(k,N,Ot,qe),ft=new nR(k,bt,N),j=new hR(k,bt,N),N.programs=De.programs,L.capabilities=Ot,L.extensions=bt,L.properties=T,L.renderLists=nt,L.shadowMap=Fe,L.state=qe,L.info=N}Te(),R!==Si&&(A=new _R(R,n.width,n.height,o,u));const he=new rC(L,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=bt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=bt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(D){D!==void 0&&(le=D,this.setSize(O,Y,!1))},this.getSize=function(D){return D.set(O,Y)},this.setSize=function(D,W,ce=!0){if(he.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,Y=W,n.width=Math.floor(D*le),n.height=Math.floor(W*le),ce===!0&&(n.style.width=D+"px",n.style.height=W+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(O*le,Y*le).floor()},this.setDrawingBufferSize=function(D,W,ce){O=D,Y=W,le=ce,n.width=Math.floor(D*ce),n.height=Math.floor(W*ce),this.setViewport(0,0,D,W)},this.setEffects=function(D){if(R===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let W=0;W<D.length;W++)if(D[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy(re)},this.setViewport=function(D,W,ce,se){D.isVector4?re.set(D.x,D.y,D.z,D.w):re.set(D,W,ce,se),qe.viewport(F.copy(re).multiplyScalar(le).round())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,W,ce,se){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,W,ce,se),qe.scissor(H.copy(xe).multiplyScalar(le).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(D){qe.setScissorTest(Ee=D)},this.setOpaqueSort=function(D){Re=D},this.setTransparentSort=function(D){Oe=D},this.getClearColor=function(D){return D.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(D=!0,W=!0,ce=!0){let se=0;if(D){let ee=!1;if(ne!==null){const Ue=ne.texture.format;ee=x.has(Ue)}if(ee){const Ue=ne.texture.type,He=y.has(Ue),Le=Pe.getClearColor(),je=Pe.getClearAlpha(),Ze=Le.r,it=Le.g,ot=Le.b;He?(b[0]=Ze,b[1]=it,b[2]=ot,b[3]=je,k.clearBufferuiv(k.COLOR,0,b)):(w[0]=Ze,w[1]=it,w[2]=ot,w[3]=je,k.clearBufferiv(k.COLOR,0,w))}else se|=k.COLOR_BUFFER_BIT}W&&(se|=k.DEPTH_BUFFER_BIT),ce&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",It,!1),Pe.dispose(),nt.dispose(),Ae.dispose(),T.dispose(),ve.dispose(),We.dispose(),we.dispose(),Be.dispose(),De.dispose(),he.dispose(),he.removeEventListener("sessionstart",cs),he.removeEventListener("sessionend",fs),zi.stop()};function Ge(D){D.preventDefault(),Z_("WebGLRenderer: Context Lost."),te=!0}function at(){Z_("WebGLRenderer: Context Restored."),te=!1;const D=N.autoReset,W=Fe.enabled,ce=Fe.autoUpdate,se=Fe.needsUpdate,ee=Fe.type;Te(),N.autoReset=D,Fe.enabled=W,Fe.autoUpdate=ce,Fe.needsUpdate=se,Fe.type=ee}function It(D){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Tt(D){const W=D.target;W.removeEventListener("dispose",Tt),Nn(W)}function Nn(D){Ti(D),T.remove(D)}function Ti(D){const W=T.get(D).programs;W!==void 0&&(W.forEach(function(ce){De.releaseProgram(ce)}),D.isShaderMaterial&&De.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,ce,se,ee,Ue){W===null&&(W=Ut);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Le=Wl(D,W,ce,se,ee);qe.setMaterial(se,He);let je=ce.index,Ze=1;if(se.wireframe===!0){if(je=me.getWireframeAttribute(ce),je===void 0)return;Ze=2}const it=ce.drawRange,ot=ce.attributes.position;let Ve=it.start*Ze,dt=(it.start+it.count)*Ze;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Ze),dt=Math.min(dt,(Ue.start+Ue.count)*Ze)),je!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,je.count)):ot!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,ot.count));const Zt=dt-Ve;if(Zt<0||Zt===1/0)return;we.setup(ee,se,Le,ce,je);let Kt,Rt=ft;if(je!==null&&(Kt=Se.get(je),Rt=j,Rt.setIndex(Kt)),ee.isMesh)se.wireframe===!0?(qe.setLineWidth(se.wireframeLinewidth*Qt()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(ee.isLine){let vn=se.linewidth;vn===void 0&&(vn=1),qe.setLineWidth(vn*Qt()),ee.isLineSegments?Rt.setMode(k.LINES):ee.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else ee.isPoints?Rt.setMode(k.POINTS):ee.isSprite&&Rt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)qc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const vn=ee._multiDrawStarts,Xe=ee._multiDrawCounts,On=ee._multiDrawCount,st=je?Se.get(je).bytesPerElement:1,Pn=T.get(se).currentProgram.getUniforms();for(let Qn=0;Qn<On;Qn++)Pn.setValue(k,"_gl_DrawID",Qn),Rt.render(vn[Qn]/st,Xe[Qn])}else if(ee.isInstancedMesh)Rt.renderInstances(Ve,Zt,ee.count);else if(ce.isInstancedBufferGeometry){const vn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Xe=Math.min(ce.instanceCount,vn);Rt.renderInstances(Ve,Zt,Xe)}else Rt.render(Ve,Zt)};function xo(D,W,ce){D.transparent===!0&&D.side===Ra&&D.forceSinglePass===!1?(D.side=Yn,D.needsUpdate=!0,Va(D,W,ce),D.side=Ar,D.needsUpdate=!0,Va(D,W,ce),D.side=Ra):Va(D,W,ce)}this.compile=function(D,W,ce=null){ce===null&&(ce=D),B=Ae.get(ce),B.init(W),P.push(B),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),D!==ce&&D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),B.setupLights();const se=new Set;return D.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Le=Ue[He];xo(Le,ce,ee),se.add(Le)}else xo(Ue,ce,ee),se.add(Ue)}),B=P.pop(),se},this.compileAsync=function(D,W,ce=null){const se=this.compile(D,W,ce);return new Promise(ee=>{function Ue(){if(se.forEach(function(He){T.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){ee(D);return}setTimeout(Ue,10)}bt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let us=null;function Vl(D){us&&us(D)}function cs(){zi.stop()}function fs(){zi.start()}const zi=new sS;zi.setAnimationLoop(Vl),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(D){us=D,he.setAnimationLoop(D),D===null?zi.stop():zi.start()},he.addEventListener("sessionstart",cs),he.addEventListener("sessionend",fs),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(te===!0)return;const ce=he.enabled===!0&&he.isPresenting===!0,se=A!==null&&(ne===null||ce)&&A.begin(L,ne);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),D.isScene===!0&&D.onBeforeRender(L,D,W,ne),B=Ae.get(D,P.length),B.init(W),P.push(B),en.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ze.setFromProjectionMatrix(en,Zi,W.reversedDepth),tt=this.localClippingEnabled,$e=be.init(this.clippingPlanes,tt),U=nt.get(D,I.length),U.init(),I.push(U),he.enabled===!0&&he.isPresenting===!0){const He=L.xr.getDepthSensingMesh();He!==null&&ds(He,W,-1/0,L.sortObjects)}ds(D,W,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(Re,Oe),ut=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ut&&Pe.addToRenderList(U,D),this.info.render.frame++,$e===!0&&be.beginShadows();const ee=B.state.shadowsArray;if(Fe.render(ee,D,W),$e===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&A.hasRenderPass())===!1){const He=U.opaque,Le=U.transmissive;if(B.setupLights(),W.isArrayCamera){const je=W.cameras;if(Le.length>0)for(let Ze=0,it=je.length;Ze<it;Ze++){const ot=je[Ze];ln(He,Le,D,ot)}ut&&Pe.render(D);for(let Ze=0,it=je.length;Ze<it;Ze++){const ot=je[Ze];Ai(U,D,ot,ot.viewport)}}else Le.length>0&&ln(He,Le,D,W),ut&&Pe.render(D),Ai(U,D,W)}ne!==null&&$===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),se&&A.end(L),D.isScene===!0&&D.onAfterRender(L,D,W),we.resetDefaultState(),fe=-1,J=null,P.pop(),P.length>0?(B=P[P.length-1],$e===!0&&be.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function ds(D,W,ce,se){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLight)B.pushLight(D),D.castShadow&&B.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ze.intersectsSprite(D)){se&&gt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(en);const He=We.update(D),Le=D.material;Le.visible&&U.push(D,He,Le,ce,gt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ze.intersectsObject(D))){const He=We.update(D),Le=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),gt.copy(D.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),gt.copy(He.boundingSphere.center)),gt.applyMatrix4(D.matrixWorld).applyMatrix4(en)),Array.isArray(Le)){const je=He.groups;for(let Ze=0,it=je.length;Ze<it;Ze++){const ot=je[Ze],Ve=Le[ot.materialIndex];Ve&&Ve.visible&&U.push(D,He,Ve,ce,gt.z,ot)}}else Le.visible&&U.push(D,He,Le,ce,gt.z,null)}}const Ue=D.children;for(let He=0,Le=Ue.length;He<Le;He++)ds(Ue[He],W,ce,se)}function Ai(D,W,ce,se){const{opaque:ee,transmissive:Ue,transparent:He}=D;B.setupLightsView(ce),$e===!0&&be.setGlobalState(L.clippingPlanes,ce),se&&qe.viewport(F.copy(se)),ee.length>0&&gn(ee,W,ce),Ue.length>0&&gn(Ue,W,ce),He.length>0&&gn(He,W,ce),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function ln(D,W,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[se.id]===void 0){const Ve=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[se.id]=new $i(1,1,{generateMipmaps:!0,type:Ve?Pa:Si,minFilter:ns,samples:Math.max(4,Ot.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ue=B.state.transmissionRenderTarget[se.id],He=se.viewport||F;Ue.setSize(He.z*L.transmissionResolutionScale,He.w*L.transmissionResolutionScale);const Le=L.getRenderTarget(),je=L.getActiveCubeFace(),Ze=L.getActiveMipmapLevel();L.setRenderTarget(Ue),L.getClearColor(pe),Me=L.getClearAlpha(),Me<1&&L.setClearColor(16777215,.5),L.clear(),ut&&Pe.render(ce);const it=L.toneMapping;L.toneMapping=Ki;const ot=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),B.setupLightsView(se),$e===!0&&be.setGlobalState(L.clippingPlanes,se),gn(D,ce,se),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let dt=0,Zt=W.length;dt<Zt;dt++){const Kt=W[dt],{object:Rt,geometry:vn,material:Xe,group:On}=Kt;if(Xe.side===Ra&&Rt.layers.test(se.layers)){const st=Xe.side;Xe.side=Yn,Xe.needsUpdate=!0,ia(Rt,ce,se,vn,Xe,On),Xe.side=st,Xe.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}L.setRenderTarget(Le,je,Ze),L.setClearColor(pe,Me),ot!==void 0&&(se.viewport=ot),L.toneMapping=it}function gn(D,W,ce){const se=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Ue=D.length;ee<Ue;ee++){const He=D[ee],{object:Le,geometry:je,group:Ze}=He;let it=He.material;it.allowOverride===!0&&se!==null&&(it=se),Le.layers.test(ce.layers)&&ia(Le,W,ce,je,it,Ze)}}function ia(D,W,ce,se,ee,Ue){D.onBeforeRender(L,W,ce,se,ee,Ue),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ee.onBeforeRender(L,W,ce,se,D,Ue),ee.transparent===!0&&ee.side===Ra&&ee.forceSinglePass===!1?(ee.side=Yn,ee.needsUpdate=!0,L.renderBufferDirect(ce,W,se,ee,D,Ue),ee.side=Ar,ee.needsUpdate=!0,L.renderBufferDirect(ce,W,se,ee,D,Ue),ee.side=Ra):L.renderBufferDirect(ce,W,se,ee,D,Ue),D.onAfterRender(L,W,ce,se,ee,Ue)}function Va(D,W,ce){W.isScene!==!0&&(W=Ut);const se=T.get(D),ee=B.state.lights,Ue=B.state.shadowsArray,He=ee.state.version,Le=De.getParameters(D,ee.state,Ue,W,ce),je=De.getProgramCacheKey(Le);let Ze=se.programs;se.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?W.environment:null,se.fog=W.fog;const it=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;se.envMap=ve.get(D.envMap||se.environment,it),se.envMapRotation=se.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",Tt),Ze=new Map,se.programs=Ze);let ot=Ze.get(je);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===He)return Xl(D,Le),ot}else Le.uniforms=De.getUniforms(D),D.onBeforeCompile(Le,L),ot=De.acquireProgram(Le,je),Ze.set(je,ot),se.uniforms=Le.uniforms;const Ve=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ve.clippingPlanes=be.uniform),Xl(D,Le),se.needsLights=yo(D),se.lightsStateVersion=He,se.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function kl(D){if(D.uniformsList===null){const W=D.currentProgram.getUniforms();D.uniformsList=zc.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function Xl(D,W){const ce=T.get(D);ce.outputColorSpace=W.outputColorSpace,ce.batching=W.batching,ce.batchingColor=W.batchingColor,ce.instancing=W.instancing,ce.instancingColor=W.instancingColor,ce.instancingMorph=W.instancingMorph,ce.skinning=W.skinning,ce.morphTargets=W.morphTargets,ce.morphNormals=W.morphNormals,ce.morphColors=W.morphColors,ce.morphTargetsCount=W.morphTargetsCount,ce.numClippingPlanes=W.numClippingPlanes,ce.numIntersection=W.numClipIntersection,ce.vertexAlphas=W.vertexAlphas,ce.vertexTangents=W.vertexTangents,ce.toneMapping=W.toneMapping}function Wl(D,W,ce,se,ee){W.isScene!==!0&&(W=Ut),q.resetTextureUnits();const Ue=W.fog,He=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?W.environment:null,Le=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:co,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ze=ve.get(se.envMap||He,je),it=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ot=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ve=!!ce.morphAttributes.position,dt=!!ce.morphAttributes.normal,Zt=!!ce.morphAttributes.color;let Kt=Ki;se.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Kt=L.toneMapping);const Rt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,vn=Rt!==void 0?Rt.length:0,Xe=T.get(se),On=B.state.lights;if($e===!0&&(tt===!0||D!==J)){const cn=D===J&&se.id===fe;be.setState(se,D,cn)}let st=!1;se.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==On.state.version||Xe.outputColorSpace!==Le||ee.isBatchedMesh&&Xe.batching===!1||!ee.isBatchedMesh&&Xe.batching===!0||ee.isBatchedMesh&&Xe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Xe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Xe.instancing===!1||!ee.isInstancedMesh&&Xe.instancing===!0||ee.isSkinnedMesh&&Xe.skinning===!1||!ee.isSkinnedMesh&&Xe.skinning===!0||ee.isInstancedMesh&&Xe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Xe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Xe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Xe.instancingMorph===!1&&ee.morphTexture!==null||Xe.envMap!==Ze||se.fog===!0&&Xe.fog!==Ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==be.numPlanes||Xe.numIntersection!==be.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==ot||Xe.morphTargets!==Ve||Xe.morphNormals!==dt||Xe.morphColors!==Zt||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==vn)&&(st=!0):(st=!0,Xe.__version=se.version);let Pn=Xe.currentProgram;st===!0&&(Pn=Va(se,W,ee));let Qn=!1,Ri=!1,Jn=!1;const Pt=Pn.getUniforms(),un=Xe.uniforms;if(qe.useProgram(Pn.program)&&(Qn=!0,Ri=!0,Jn=!0),se.id!==fe&&(fe=se.id,Ri=!0),Qn||J!==D){qe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Pt.setValue(k,"projectionMatrix",D.projectionMatrix),Pt.setValue(k,"viewMatrix",D.matrixWorldInverse);const wi=Pt.map.cameraPosition;wi!==void 0&&wi.setValue(k,xt.setFromMatrixPosition(D.matrixWorld)),Ot.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),J!==D&&(J=D,Ri=!0,Jn=!0)}if(Xe.needsLights&&(On.state.directionalShadowMap.length>0&&Pt.setValue(k,"directionalShadowMap",On.state.directionalShadowMap,q),On.state.spotShadowMap.length>0&&Pt.setValue(k,"spotShadowMap",On.state.spotShadowMap,q),On.state.pointShadowMap.length>0&&Pt.setValue(k,"pointShadowMap",On.state.pointShadowMap,q)),ee.isSkinnedMesh){Pt.setOptional(k,ee,"bindMatrix"),Pt.setOptional(k,ee,"bindMatrixInverse");const cn=ee.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pt.setValue(k,"boneTexture",cn.boneTexture,q))}ee.isBatchedMesh&&(Pt.setOptional(k,ee,"batchingTexture"),Pt.setValue(k,"batchingTexture",ee._matricesTexture,q),Pt.setOptional(k,ee,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",ee._indirectTexture,q),Pt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",ee._colorsTexture,q));const Fn=ce.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Ie.update(ee,ce,Pn),(Ri||Xe.receiveShadow!==ee.receiveShadow)&&(Xe.receiveShadow=ee.receiveShadow,Pt.setValue(k,"receiveShadow",ee.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=cC()),Ri&&(Pt.setValue(k,"toneMappingExposure",L.toneMappingExposure),Xe.needsLights&&Rr(un,Jn),Ue&&se.fog===!0&&Ke.refreshFogUniforms(un,Ue),Ke.refreshMaterialUniforms(un,se,le,Y,B.state.transmissionRenderTarget[D.id]),zc.upload(k,kl(Xe),un,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(zc.upload(k,kl(Xe),un,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(k,"center",ee.center),Pt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(k,"normalMatrix",ee.normalMatrix),Pt.setValue(k,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const cn=se.uniformsGroups;for(let wi=0,aa=cn.length;wi<aa;wi++){const hs=cn[wi];Be.update(hs,Pn),Be.bind(hs,Pn)}}return Pn}function Rr(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function yo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(D,W,ce){const se=T.get(D);se.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=W,T.get(D.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,W){const ce=T.get(D);ce.__webglFramebuffer=W,ce.__useDefaultFramebuffer=W===void 0};const ka=k.createFramebuffer();this.setRenderTarget=function(D,W=0,ce=0){ne=D,G=W,$=ce;let se=null,ee=!1,Ue=!1;if(D){const Le=T.get(D);if(Le.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(k.FRAMEBUFFER,Le.__webglFramebuffer),F.copy(D.viewport),H.copy(D.scissor),ue=D.scissorTest,qe.viewport(F),qe.scissor(H),qe.setScissorTest(ue),fe=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(D);else if(Le.__hasExternalTextures)q.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const it=D.depthTexture;if(Le.__boundDepthTexture!==it){if(it!==null&&T.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(D)}}const je=D.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ue=!0);const Ze=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?se=Ze[W][ce]:se=Ze[W],ee=!0):D.samples>0&&q.useMultisampledRTT(D)===!1?se=T.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[ce]:se=Ze,F.copy(D.viewport),H.copy(D.scissor),ue=D.scissorTest}else F.copy(re).multiplyScalar(le).floor(),H.copy(xe).multiplyScalar(le).floor(),ue=Ee;if(ce!==0&&(se=ka),qe.bindFramebuffer(k.FRAMEBUFFER,se)&&qe.drawBuffers(D,se),qe.viewport(F),qe.scissor(H),qe.setScissorTest(ue),ee){const Le=T.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ce)}else if(Ue){const Le=W;for(let je=0;je<D.textures.length;je++){const Ze=T.get(D.textures[je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+je,Ze.__webglTexture,ce,Le)}}else if(D!==null&&ce!==0){const Le=T.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Le.__webglTexture,ce)}fe=-1},this.readRenderTargetPixels=function(D,W,ce,se,ee,Ue,He,Le=0){if(!(D&&D.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){qe.bindFramebuffer(k.FRAMEBUFFER,je);try{const Ze=D.textures[Le],it=Ze.format,ot=Ze.type;if(D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),!Ot.textureFormatReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(ot)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-se&&ce>=0&&ce<=D.height-ee&&k.readPixels(W,ce,se,ee,Ce.convert(it),Ce.convert(ot),Ue)}finally{const Ze=ne!==null?T.get(ne).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,W,ce,se,ee,Ue,He,Le=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je)if(W>=0&&W<=D.width-se&&ce>=0&&ce<=D.height-ee){qe.bindFramebuffer(k.FRAMEBUFFER,je);const Ze=D.textures[Le],it=Ze.format,ot=Ze.type;if(D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),!Ot.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),k.readPixels(W,ce,se,ee,Ce.convert(it),Ce.convert(ot),0);const dt=ne!==null?T.get(ne).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,dt);const Zt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await LT(k,Zt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer(Ve),k.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,W=null,ce=0){const se=Math.pow(2,-ce),ee=Math.floor(D.image.width*se),Ue=Math.floor(D.image.height*se),He=W!==null?W.x:0,Le=W!==null?W.y:0;q.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,He,Le,ee,Ue),qe.unbindTexture()};const Xa=k.createFramebuffer(),wr=k.createFramebuffer();this.copyTextureToTexture=function(D,W,ce=null,se=null,ee=0,Ue=0){let He,Le,je,Ze,it,ot,Ve,dt,Zt;const Kt=D.isCompressedTexture?D.mipmaps[Ue]:D.image;if(ce!==null)He=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,it=ce.min.y,ot=ce.isBox3?ce.min.z:0;else{const un=Math.pow(2,-ee);He=Math.floor(Kt.width*un),Le=Math.floor(Kt.height*un),D.isDataArrayTexture?je=Kt.depth:D.isData3DTexture?je=Math.floor(Kt.depth*un):je=1,Ze=0,it=0,ot=0}se!==null?(Ve=se.x,dt=se.y,Zt=se.z):(Ve=0,dt=0,Zt=0);const Rt=Ce.convert(W.format),vn=Ce.convert(W.type);let Xe;W.isData3DTexture?(q.setTexture3D(W,0),Xe=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),Xe=k.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),Xe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const On=k.getParameter(k.UNPACK_ROW_LENGTH),st=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),Qn=k.getParameter(k.UNPACK_SKIP_ROWS),Ri=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Kt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,it),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ot);const Jn=D.isDataArrayTexture||D.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(D.isDepthTexture){const un=T.get(D),Fn=T.get(W),cn=T.get(un.__renderTarget),wi=T.get(Fn.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,cn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let aa=0;aa<je;aa++)Jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(D).__webglTexture,ee,ot+aa),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(W).__webglTexture,Ue,Zt+aa)),k.blitFramebuffer(Ze,it,He,Le,Ve,dt,He,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||D.isRenderTargetTexture||T.has(D)){const un=T.get(D),Fn=T.get(W);qe.bindFramebuffer(k.READ_FRAMEBUFFER,Xa),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,wr);for(let cn=0;cn<je;cn++)Jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ee,ot+cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ee),Pt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fn.__webglTexture,Ue,Zt+cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fn.__webglTexture,Ue),ee!==0?k.blitFramebuffer(Ze,it,He,Le,Ve,dt,He,Le,k.COLOR_BUFFER_BIT,k.NEAREST):Pt?k.copyTexSubImage3D(Xe,Ue,Ve,dt,Zt+cn,Ze,it,He,Le):k.copyTexSubImage2D(Xe,Ue,Ve,dt,Ze,it,He,Le);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pt?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Xe,Ue,Ve,dt,Zt,He,Le,je,Rt,vn,Kt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Xe,Ue,Ve,dt,Zt,He,Le,je,Rt,Kt.data):k.texSubImage3D(Xe,Ue,Ve,dt,Zt,He,Le,je,Rt,vn,Kt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,Ve,dt,He,Le,Rt,vn,Kt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,Ve,dt,Kt.width,Kt.height,Rt,Kt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,Ve,dt,He,Le,Rt,vn,Kt);k.pixelStorei(k.UNPACK_ROW_LENGTH,On),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ri),Ue===0&&W.generateMipmaps&&k.generateMipmap(Xe),qe.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&q.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?q.setTextureCube(D,0):D.isData3DTexture?q.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?q.setTexture2DArray(D,0):q.setTexture2D(D,0),qe.unbindTexture()},this.resetState=function(){G=0,$=0,ne=null,qe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const dC=()=>{const a=z.useRef(null);return z.useEffect(()=>{const e=a.current;if(!e)return;const n=e.clientWidth,r=e.clientHeight,o=new fC({antialias:!0,alpha:!0});o.setPixelRatio(window.devicePixelRatio),o.setSize(n,r),o.setClearColor(0,0),e.appendChild(o.domElement);const u=new YT,c=new yi(45,n/r,.1,100);c.position.set(0,0,6);const h=new Fm(1.8,3),p=h.attributes.position,m=(b,w,U)=>(Math.sin(b*1.7+.3)*Math.cos(w*2.1-.5)+Math.sin(w*1.3+1.1)*Math.cos(U*1.9+.7)+Math.sin(U*2.3-.9)*Math.cos(b*1.5+.2))/3;for(let b=0;b<p.count;b++){const w=p.getX(b),U=p.getY(b),B=p.getZ(b),I=1+m(w,U,B)*.22;p.setXYZ(b,w*I,U*I,B*I)}p.needsUpdate=!0,h.computeVertexNormals();const g=new rA(new lA(h),new Jy({color:10066329,transparent:!0,opacity:.6}));g.position.x=1,u.add(g);const _=[],v=new Set;for(let b=0;b<p.count;b++){const w=`${p.getX(b).toFixed(4)},${p.getY(b).toFixed(4)},${p.getZ(b).toFixed(4)}`;v.has(w)||(v.add(w),_.push(p.getX(b),p.getY(b),p.getZ(b)))}const S=new Kn;S.setAttribute("position",new Ln(_,3));const E=new sA(S,new eS({color:5592405,size:.045,sizeAttenuation:!0}));E.position.x=1,u.add(E);let R;const x=()=>{R=requestAnimationFrame(x),g.rotation.y+=.0018,g.rotation.x+=6e-4,E.rotation.y=g.rotation.y,E.rotation.x=g.rotation.x,o.render(u,c)};x();const y=()=>{const b=e.clientWidth,w=e.clientHeight;c.aspect=b/w,c.updateProjectionMatrix(),o.setSize(b,w)};return window.addEventListener("resize",y),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",y),e.removeChild(o.domElement),o.dispose(),h.dispose()}},[]),K.jsx("div",{ref:a,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})},hC=()=>K.jsxs(K.Fragment,{children:[K.jsx(nf,{style:{background:"transparent"}}),K.jsx("div",{className:"model",children:K.jsx(dC,{})}),K.jsx("div",{className:"section-container",children:K.jsx("main",{className:"front-container",children:K.jsxs("div",{className:"front-content",children:[K.jsxs("h1",{children:["Signal",K.jsx("br",{}),"Processing",K.jsx("br",{}),"Society"]}),K.jsx("p",{children:"For engineers, mathematicians, and scientists. We receive, analyze, process, and transmit signals. Everything in life can be represented by a signal. Explore reality through the digital interface."}),K.jsx("p",{children:"Welcome to the Signal Processing Society."}),K.jsx("a",{href:"https://discord.gg/6GRymPjgKc",children:K.jsx("button",{className:"front-button",children:"Join Discord"})})]})})}),K.jsx(Em,{})]}),pC="/assets/aude-ujzcciN_.png",mC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"})),gC="/assets/gh0st-DieQJI9q.png",vC=Object.freeze(Object.defineProperty({__proto__:null,default:gC},Symbol.toStringTag,{value:"Module"})),_C="/assets/ora-BPew0BgZ.png",xC=Object.freeze(Object.defineProperty({__proto__:null,default:_C},Symbol.toStringTag,{value:"Module"})),yC="/assets/plato-QenDGJcN.png",SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC="/assets/vie-DqTwUBw6.png",EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),bC={President:{name:"Raul Valle",githubLink:"https://github.com/Jibby2k1",linkedinLink:"https://www.linkedin.com/in/raul-valle1/"},"Vice President":{name:"Matheus Kunzler Maldaner",githubLink:"https://github.com/matheusmaldaner",linkedinLink:"https://www.linkedin.com/in/matheusmaldaner/"},"Chief of Operations":{name:"Tiffany Huang",githubLink:"https://github.com/narcistiq",linkedinLink:"https://www.linkedin.com/in/tiffanyhuang1010/"},"Chief of Education":{name:"Awwab Azam",githubLink:"https://github.com/kaddu341",linkedinLink:"https://www.linkedin.com/in/awwab-ali-azam-101a4b257"},"Chief of Networking":{name:"Luke Slaughter",linkedinLink:"http://linkedin.com/in/luke-slaughter"}};function Im({children:a,className:e="",style:n}){return K.jsx("div",{className:`page-container ${e}`,style:n,children:a})}function TC(a){return Ei({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(a)}function AC(a){return Ei({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}const RC=({name:a,position:e,githubLink:n,linkedinLink:r})=>K.jsx("div",{className:"exec-profile-container",children:K.jsxs("div",{className:"profile-content-container",children:[K.jsx("div",{className:"profile-img-container",children:K.jsx("img",{className:"profile-img",src:`/profiles/${a}.jpeg`})}),K.jsxs("div",{className:"profile-info",children:[K.jsxs("div",{className:"name-pos",children:[K.jsx("h3",{children:a}),K.jsx("div",{className:"pos",children:K.jsx("p",{children:e})})]}),K.jsxs("div",{className:"profile-social-links",children:[n&&K.jsx("a",{href:n,target:"_blank",children:K.jsx(TC,{})}),r&&K.jsx("a",{href:r,target:"_blank",children:K.jsx(AC,{})})]})]})]})});function wC(a){return Ei({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(a)}function CC(a){return Ei({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(a)}const DC=({images:a})=>{const[e,n]=z.useState(0),r=()=>{n(c=>c+1===a.length?0:c+1)},o=()=>{n(c=>c-1<0?a.length-1:c-1)},u=c=>{n(c)};return K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"carousel-images",children:[K.jsx("img",{loading:"lazy",src:a[e]},e),K.jsxs("div",{className:"slide_direction",children:[K.jsx("div",{className:"left",onClick:o,children:K.jsx(wC,{})}),K.jsx("div",{className:"right",onClick:r,children:K.jsx(CC,{})})]})]}),K.jsx("div",{className:"carousel-indicator",children:a.map((c,h)=>K.jsx("div",{className:`dot ${e===h?"active-image":""}`,onClick:()=>u(h)},h))})]})},UC=Object.assign({"../assets/research_teams/aude.png":mC,"../assets/research_teams/gh0st.png":vC,"../assets/research_teams/ora.png":xC,"../assets/research_teams/plato.png":SC,"../assets/research_teams/vie.png":EC}),LC=Object.values(UC).map(a=>a.default),NC=()=>K.jsx(K.Fragment,{children:K.jsxs(Im,{className:"wrapper",children:[K.jsx(nf,{}),K.jsxs("div",{className:"about-main-content-container",children:[K.jsxs("div",{className:"about-section-container",children:[K.jsx("h1",{children:"Who we are"}),K.jsxs("div",{className:"about-image-text-container",children:[K.jsxs("div",{className:"about-text",children:[K.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus purus et nulla facilisis, eu fringilla leo sagittis. Nam quis."}),K.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),K.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus purus et nulla facilisis, eu"})]}),K.jsx("div",{className:"about-image",children:K.jsx(DC,{images:LC})})]})]}),K.jsxs("div",{className:"board-section-container",children:[K.jsx("h1",{children:"Executive Board"}),K.jsx("div",{className:"profiles-container",children:Object.entries(bC).map(([a,e])=>K.jsx(RC,{name:e.name,position:a,githubLink:e.githubLink,linkedinLink:e.linkedinLink}))})]})]}),K.jsx(Em,{})]})}),OC={"platos-cave":{title:"Plato's Cave",description:`
            Tooling which helps reviewers read faster by turning papers into 
            structured ‘claims and evidence’ graphs with audit-friendly outputs. 
            Extracts structured nodes (claims, evidence, limitations, etc.) 
            from papers and scores them to support literature review and comparison 
            across a collection.`,img:"/research/PlatoCave.png",imgAlt:"Plato's Cave project logo.",meta:"Tools · language + structure · reproducibility",links:["https://github.com/matheusmaldaner/PlatosCave"],details:{overview:"Reading dozens of papers is slow, partly because the structure is inconsistent. Plato’s Cave uses modern language models to extract a consistent structure (e.g., claims, evidence, limitations) and then runs a scoring pipeline so papers can be compared more systematically.",what_we_built:["A batch pipeline that processes PDFs, extracts structured ‘nodes’ (e.g., claims/evidence), and stores results in machine-readable formats.","Scoring and normalization routines so outputs are comparable across papers.","Run outputs designed for auditing (logs, summaries, and artifacts)."],stack:["Python","Large language model APIs","Experiment logging"]}},gh05t:{title:"GH05T — EEG hardware-to-software pipeline",description:`
            A modular EEG stack (hardware + software) designed for rapid research iteration and a 
            path toward product-grade reliability. End-to-end EEG stack (acquisition → streaming → preprocessing → modeling) 
            is designed so experiments can be run quickly, repeated reliably, and extended over time.`,img:"/research/GH05T.png",imgAlt:"GH05T project logo.",meta:"IEEE SPS @ UF · hardware · neurotech",links:["https://github.com/Keith-Khadar/Gh05t"],details:{overview:"GH05T is a practical research platform: the goal is to reduce friction between an idea (‘can we measure X?’) and an experiment (‘here’s the data and a baseline model’). The project spans hardware, firmware, and software so the full system can be iterated.",what_we_built:["System design for an EEG acquisition-to-analysis workflow.","Software-side ingestion and preprocessing concepts that support multiple experimental protocols.","A roadmap for separating concerns (hardware, firmware, data, modeling) so the project can scale."],stack:["Embedded electronics","Streaming/data pipelines","Python ML tooling"]}},"nano-robotics":{title:"Nano — robotics stack (GH05T interface)",description:`
            A robotics and systems engineering focused on reliable real-time interfaces: 
            sensing, control, and data paths that can connect to GH05T. Building a reliable hardware-to-software 
            interface layer (instrumentation, control, and real-time data paths), 
            with planned integration points for GH05T.`,img:"/research/Nano.png",imgAlt:"Nano project logo.",meta:"IEEE SPS @ UF · robotics · systems",links:[],details:{overview:"Nano is a systems project: the emphasis is on the ‘boring’ parts that make robotics usable in practice—reliable interfaces, timing, and data integrity. It is intentionally designed to connect with biosignal research workflows when appropriate.",what_we_built:["Interface and timing design principles for sensor and actuator loops.","Instrumented data paths so experiments can be logged and analyzed.","Integration planning so robotics components can share infrastructure with other projects."],stack:["Embedded systems","Control + sensing","Data logging"]}},"ares-fitness":{title:"Ares — minimal fitness tracker (speech + recommendations)",description:`
          An intentionally simple workout + nutrition tracker that captures intent 
          via speech and provides lightweight coaching recommendations. "A minimal UI that reduces friction: 
          capture what a user did (often via speech), keep logging consistent, 
          and generate small recommendations that improve adherence over time.`,img:"/research/Ares.png",imgAlt:"Ares project logo.",meta:"IEEE SPS @ UF · app · personalization",links:[],details:{overview:"Most fitness apps fail for simple reasons: too much friction and too much complexity. Ares is an experiment in the opposite direction—capture intent quickly, store the essentials, and provide recommendations that are easy to follow.",what_we_built:["Product concept and interaction model for speech-first logging.","A recommendation framing focused on simple, actionable next steps.","A roadmap that prioritizes consistency over feature breadth."],stack:["App prototyping","Speech-to-text (planned)","Lightweight recommendation logic"]}},"sinbad-wearables":{title:"Sinbad — wearable capture & automation prototyping",description:`
          Personal R&D on wearable capture workflows and automation, designed with privacy, consent, 
          and device-policy compliance in mind. This prototype explores wearable capture workflows and 
          automation for personal content creation, explicitly emphasizing responsible use and compliance with device policies.`,img:"/research/Sinbad.png",imgAlt:"Sinbad project logo.",meta:"IEEE SPS @ UF · wearables · tool",links:[],details:{overview:"Sinbad is a sandbox for exploring what is possible with wearable devices: how capture, indexing, and lightweight automation could work end-to-end. The project is designed to be privacy-conscious and policy-compliant.",what_we_built:["Workflow design for capture → selection → export.","Automation concepts for organizing and surfacing clips.","Guardrails: privacy, consent, and compliance as first-class design constraint"],stack:["Wearable workflow prototyping","Automation scripting (concepts)","Human-in-the-loop review"]}}};function PC(a){return Ei({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},child:[]}]})(a)}function FC(a){return Ei({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"},child:[]}]})(a)}var IC=Object.defineProperty,BC=(a,e,n)=>e in a?IC(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,up=(a,e,n)=>(BC(a,typeof e!="symbol"?e+"":e,n),n);let zC=class{constructor(){up(this,"current",this.detect()),up(this,"handoffState","pending"),up(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Ji=new zC;function zl(a){var e;return Ji.isServer?null:a==null?document:(e=a?.ownerDocument)!=null?e:document}function fm(a){var e,n;return Ji.isServer?null:a==null?document:(n=(e=a?.getRootNode)==null?void 0:e.call(a))!=null?n:document}function dS(a){var e,n;return(n=(e=fm(a))==null?void 0:e.activeElement)!=null?n:null}function HC(a){return dS(a)===a}function lf(a){typeof queueMicrotask=="function"?queueMicrotask(a):Promise.resolve().then(a).catch(e=>setTimeout(()=>{throw e}))}function Ga(){let a=[],e={addEventListener(n,r,o,u){return n.addEventListener(r,o,u),e.add(()=>n.removeEventListener(r,o,u))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return lf(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,o){let u=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:u})})},group(n){let r=Ga();return n(r),this.add(()=>r.dispose())},add(n){return a.includes(n)||a.push(n),()=>{let r=a.indexOf(n);if(r>=0)for(let o of a.splice(r,1))o()}},dispose(){for(let n of a.splice(0))n()}};return e}function uf(){let[a]=z.useState(Ga);return z.useEffect(()=>()=>a.dispose(),[a]),a}let Zn=(a,e)=>{Ji.isServer?z.useEffect(a,e):z.useLayoutEffect(a,e)};function ls(a){let e=z.useRef(a);return Zn(()=>{e.current=a},[a]),e}let Wt=function(a){let e=ls(a);return Je.useCallback((...n)=>e.current(...n),[e])};function Hl(a){return z.useMemo(()=>a,Object.values(a))}let GC=z.createContext(void 0);function VC(){return z.useContext(GC)}function dm(...a){return Array.from(new Set(a.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}function za(a,e,...n){if(a in e){let o=e[a];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,za),r}var Kc=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(Kc||{}),Er=(a=>(a[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a))(Er||{});function bi(){let a=XC();return z.useCallback(e=>kC({mergeRefs:a,...e}),[a])}function kC({ourProps:a,theirProps:e,slot:n,defaultTag:r,features:o,visible:u=!0,name:c,mergeRefs:h}){h=h??WC;let p=hS(e,a);if(u)return Cc(p,n,r,c,h);let m=o??0;if(m&2){let{static:g=!1,..._}=p;if(g)return Cc(_,n,r,c,h)}if(m&1){let{unmount:g=!0,..._}=p;return za(g?0:1,{0(){return null},1(){return Cc({..._,hidden:!0,style:{display:"none"}},n,r,c,h)}})}return Cc(p,n,r,c,h)}function Cc(a,e={},n,r,o){let{as:u=n,children:c,refName:h="ref",...p}=cp(a,["unmount","static"]),m=a.ref!==void 0?{[h]:a.ref}:{},g=typeof c=="function"?c(e):c;"className"in p&&p.className&&typeof p.className=="function"&&(p.className=p.className(e)),p["aria-labelledby"]&&p["aria-labelledby"]===p.id&&(p["aria-labelledby"]=void 0);let _={};if(e){let v=!1,S=[];for(let[E,R]of Object.entries(e))typeof R=="boolean"&&(v=!0),R===!0&&S.push(E.replace(/([A-Z])/g,x=>`-${x.toLowerCase()}`));if(v){_["data-headlessui-state"]=S.join(" ");for(let E of S)_[`data-${E}`]=""}}if(Tl(u)&&(Object.keys(Qr(p)).length>0||Object.keys(Qr(_)).length>0))if(!z.isValidElement(g)||Array.isArray(g)&&g.length>1||qC(g)){if(Object.keys(Qr(p)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(Qr(p)).concat(Object.keys(Qr(_))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=g.props,S=v?.className,E=typeof S=="function"?(...y)=>dm(S(...y),p.className):dm(S,p.className),R=E?{className:E}:{},x=hS(g.props,Qr(cp(p,["ref"])));for(let y in _)y in x&&delete _[y];return z.cloneElement(g,Object.assign({},x,_,m,{ref:o(jC(g),m.ref)},R))}return z.createElement(u,Object.assign({},cp(p,["ref"]),!Tl(u)&&m,!Tl(u)&&_),g)}function XC(){let a=z.useRef([]),e=z.useCallback(n=>{for(let r of a.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return a.current=n,e}}function WC(...a){return a.every(e=>e==null)?void 0:e=>{for(let n of a)n!=null&&(typeof n=="function"?n(e):n.current=e)}}function hS(...a){if(a.length===0)return{};if(a.length===1)return a[0];let e={},n={};for(let r of a)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):e[o]=r[o];if(e.disabled||e["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[o=>{var u;return(u=o?.preventDefault)==null?void 0:u.call(o)}]);for(let r in n)Object.assign(e,{[r](o,...u){let c=n[r];for(let h of c){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;h(o,...u)}}});return e}function $n(a){var e;return Object.assign(z.forwardRef(a),{displayName:(e=a.displayName)!=null?e:a.name})}function Qr(a){let e=Object.assign({},a);for(let n in e)e[n]===void 0&&delete e[n];return e}function cp(a,e=[]){let n=Object.assign({},a);for(let r of e)r in n&&delete n[r];return n}function jC(a){return Je.version.split(".")[0]>="19"?a.props.ref:a.ref}function Tl(a){return a===z.Fragment||a===Symbol.for("react.fragment")}function qC(a){return Tl(a.type)}let YC="span";var $c=(a=>(a[a.None=1]="None",a[a.Focusable=2]="Focusable",a[a.Hidden=4]="Hidden",a))($c||{});function ZC(a,e){var n;let{features:r=1,...o}=a,u={ref:e,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return bi()({ourProps:u,theirProps:o,slot:{},defaultTag:YC,name:"Hidden"})}let hm=$n(ZC);function KC(a){return typeof a!="object"||a===null?!1:"nodeType"in a}function Tr(a){return KC(a)&&"tagName"in a}function ss(a){return Tr(a)&&"accessKey"in a}function br(a){return Tr(a)&&"tabIndex"in a}function $C(a){return Tr(a)&&"style"in a}function QC(a){return ss(a)&&a.nodeName==="IFRAME"}function JC(a){return ss(a)&&a.nodeName==="INPUT"}let pS=Symbol();function eD(a,e=!0){return Object.assign(a,{[pS]:e})}function na(...a){let e=z.useRef(a);z.useEffect(()=>{e.current=a},[a]);let n=Wt(r=>{for(let o of e.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return a.every(r=>r==null||r?.[pS])?void 0:n}let Bm=z.createContext(null);Bm.displayName="DescriptionContext";function mS(){let a=z.useContext(Bm);if(a===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,mS),e}return a}function tD(){let[a,e]=z.useState([]);return[a.length>0?a.join(" "):void 0,z.useMemo(()=>function(n){let r=Wt(u=>(e(c=>[...c,u]),()=>e(c=>{let h=c.slice(),p=h.indexOf(u);return p!==-1&&h.splice(p,1),h}))),o=z.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return Je.createElement(Bm.Provider,{value:o},n.children)},[e])]}let nD="p";function iD(a,e){let n=z.useId(),r=VC(),{id:o=`headlessui-description-${n}`,...u}=a,c=mS(),h=na(e);Zn(()=>c.register(o),[o,c.register]);let p=Hl({...c.slot,disabled:r||!1}),m={ref:h,...c.props,id:o};return bi()({ourProps:m,theirProps:u,slot:p,defaultTag:nD,name:c.name||"Description"})}let aD=$n(iD),gS=Object.assign(aD,{});var vS=(a=>(a.Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a))(vS||{});let rD=z.createContext(()=>{});function sD({value:a,children:e}){return Je.createElement(rD.Provider,{value:a},e)}let _S=class extends Map{constructor(e){super(),this.factory=e}get(e){let n=super.get(e);return n===void 0&&(n=this.factory(e),this.set(e,n)),n}};var oD=Object.defineProperty,lD=(a,e,n)=>e in a?oD(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,uD=(a,e,n)=>(lD(a,e+"",n),n),xS=(a,e,n)=>{if(!e.has(a))throw TypeError("Cannot "+n)},_i=(a,e,n)=>(xS(a,e,"read from private field"),n?n.call(a):e.get(a)),fp=(a,e,n)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,n)},kx=(a,e,n,r)=>(xS(a,e,"write to private field"),e.set(a,n),n),ji,Ml,El;let cD=class{constructor(e){fp(this,ji,{}),fp(this,Ml,new _S(()=>new Set)),fp(this,El,new Set),uD(this,"disposables",Ga()),kx(this,ji,e),Ji.isServer&&this.disposables.microTask(()=>{this.dispose()})}dispose(){this.disposables.dispose()}get state(){return _i(this,ji)}subscribe(e,n){if(Ji.isServer)return()=>{};let r={selector:e,callback:n,current:e(_i(this,ji))};return _i(this,El).add(r),this.disposables.add(()=>{_i(this,El).delete(r)})}on(e,n){return Ji.isServer?()=>{}:(_i(this,Ml).get(e).add(n),this.disposables.add(()=>{_i(this,Ml).get(e).delete(n)}))}send(e){let n=this.reduce(_i(this,ji),e);if(n!==_i(this,ji)){kx(this,ji,n);for(let r of _i(this,El)){let o=r.selector(_i(this,ji));yS(r.current,o)||(r.current=o,r.callback(o))}for(let r of _i(this,Ml).get(e.type))r(_i(this,ji),e)}}};ji=new WeakMap,Ml=new WeakMap,El=new WeakMap;function yS(a,e){return Object.is(a,e)?!0:typeof a!="object"||a===null||typeof e!="object"||e===null?!1:Array.isArray(a)&&Array.isArray(e)?a.length!==e.length?!1:dp(a[Symbol.iterator](),e[Symbol.iterator]()):a instanceof Map&&e instanceof Map||a instanceof Set&&e instanceof Set?a.size!==e.size?!1:dp(a.entries(),e.entries()):Xx(a)&&Xx(e)?dp(Object.entries(a)[Symbol.iterator](),Object.entries(e)[Symbol.iterator]()):!1}function dp(a,e){do{let n=a.next(),r=e.next();if(n.done&&r.done)return!0;if(n.done||r.done||!Object.is(n.value,r.value))return!1}while(!0)}function Xx(a){if(Object.prototype.toString.call(a)!=="[object Object]")return!1;let e=Object.getPrototypeOf(a);return e===null||Object.getPrototypeOf(e)===null}var fD=Object.defineProperty,dD=(a,e,n)=>e in a?fD(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,Wx=(a,e,n)=>(dD(a,typeof e!="symbol"?e+"":e,n),n),hD=(a=>(a[a.Push=0]="Push",a[a.Pop=1]="Pop",a))(hD||{});let pD={0(a,e){let n=e.id,r=a.stack,o=a.stack.indexOf(n);if(o!==-1){let u=a.stack.slice();return u.splice(o,1),u.push(n),r=u,{...a,stack:r}}return{...a,stack:[...a.stack,n]}},1(a,e){let n=e.id,r=a.stack.indexOf(n);if(r===-1)return a;let o=a.stack.slice();return o.splice(r,1),{...a,stack:o}}},mD=class SS extends cD{constructor(){super(...arguments),Wx(this,"actions",{push:e=>this.send({type:0,id:e}),pop:e=>this.send({type:1,id:e})}),Wx(this,"selectors",{isTop:(e,n)=>e.stack[e.stack.length-1]===n,inStack:(e,n)=>e.stack.includes(n)})}static new(){return new SS({stack:[]})}reduce(e,n){return za(n.type,pD,e,n)}};const MS=new _S(()=>mD.new());var hp={exports:{}},pp={};var jx;function gD(){if(jx)return pp;jx=1;var a=Jc();function e(p,m){return p===m&&(p!==0||1/p===1/m)||p!==p&&m!==m}var n=typeof Object.is=="function"?Object.is:e,r=a.useSyncExternalStore,o=a.useRef,u=a.useEffect,c=a.useMemo,h=a.useDebugValue;return pp.useSyncExternalStoreWithSelector=function(p,m,g,_,v){var S=o(null);if(S.current===null){var E={hasValue:!1,value:null};S.current=E}else E=S.current;S=c(function(){function x(B){if(!y){if(y=!0,b=B,B=_(B),v!==void 0&&E.hasValue){var I=E.value;if(v(I,B))return w=I}return w=B}if(I=w,n(b,B))return I;var P=_(B);return v!==void 0&&v(I,P)?(b=B,I):(b=B,w=P)}var y=!1,b,w,U=g===void 0?null:g;return[function(){return x(m())},U===null?void 0:function(){return x(U())}]},[m,g,_,v]);var R=r(p,S[0],S[1]);return u(function(){E.hasValue=!0,E.value=R},[R]),h(R),R},pp}var qx;function vD(){return qx||(qx=1,hp.exports=gD()),hp.exports}var _D=vD();function ES(a,e,n=yS){return _D.useSyncExternalStoreWithSelector(Wt(r=>a.subscribe(xD,r)),Wt(()=>a.state),Wt(()=>a.state),Wt(e),n)}function xD(a){return a}function Gl(a,e){let n=z.useId(),r=MS.get(e),[o,u]=ES(r,z.useCallback(c=>[r.selectors.isTop(c,n),r.selectors.inStack(c,n)],[r,n]));return Zn(()=>{if(a)return r.actions.push(n),()=>r.actions.pop(n)},[r,a,n]),a?u?o:!0:!1}let pm=new Map,Al=new Map;function Yx(a){var e;let n=(e=Al.get(a))!=null?e:0;return Al.set(a,n+1),n!==0?()=>Zx(a):(pm.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0,()=>Zx(a))}function Zx(a){var e;let n=(e=Al.get(a))!=null?e:1;if(n===1?Al.delete(a):Al.set(a,n-1),n!==1)return;let r=pm.get(a);r&&(r["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",r["aria-hidden"]),a.inert=r.inert,pm.delete(a))}function yD(a,{allowed:e,disallowed:n}={}){let r=Gl(a,"inert-others");Zn(()=>{var o,u;if(!r)return;let c=Ga();for(let p of(o=n?.())!=null?o:[])p&&c.add(Yx(p));let h=(u=e?.())!=null?u:[];for(let p of h){if(!p)continue;let m=zl(p);if(!m)continue;let g=p.parentElement;for(;g&&g!==m.body;){for(let _ of g.children)h.some(v=>_.contains(v))||c.add(Yx(_));g=g.parentElement}}return c.dispose},[r,e,n])}function SD(a,e,n){let r=ls(o=>{let u=o.getBoundingClientRect();u.x===0&&u.y===0&&u.width===0&&u.height===0&&n()});z.useEffect(()=>{if(!a)return;let o=e===null?null:ss(e)?e:e.current;if(!o)return;let u=Ga();if(typeof ResizeObserver<"u"){let c=new ResizeObserver(()=>r.current(o));c.observe(o),u.add(()=>c.disconnect())}if(typeof IntersectionObserver<"u"){let c=new IntersectionObserver(()=>r.current(o));c.observe(o),u.add(()=>c.disconnect())}return()=>u.dispose()},[e,r,a])}let Qc=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(a=>`${a}:not([tabindex='-1'])`).join(","),MD=["[data-autofocus]"].map(a=>`${a}:not([tabindex='-1'])`).join(",");var wa=(a=>(a[a.First=1]="First",a[a.Previous=2]="Previous",a[a.Next=4]="Next",a[a.Last=8]="Last",a[a.WrapAround=16]="WrapAround",a[a.NoScroll=32]="NoScroll",a[a.AutoFocus=64]="AutoFocus",a))(wa||{}),mm=(a=>(a[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a))(mm||{}),ED=(a=>(a[a.Previous=-1]="Previous",a[a.Next=1]="Next",a))(ED||{});function bD(a=document.body){return a==null?[]:Array.from(a.querySelectorAll(Qc)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function TD(a=document.body){return a==null?[]:Array.from(a.querySelectorAll(MD)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var bS=(a=>(a[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a))(bS||{});function AD(a,e=0){var n;return a===((n=zl(a))==null?void 0:n.body)?!1:za(e,{0(){return a.matches(Qc)},1(){let r=a;for(;r!==null;){if(r.matches(Qc))return!0;r=r.parentElement}return!1}})}var RD=(a=>(a[a.Keyboard=0]="Keyboard",a[a.Mouse=1]="Mouse",a))(RD||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",a=>{a.metaKey||a.altKey||a.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",a=>{a.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:a.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Na(a){a?.focus({preventScroll:!0})}let wD=["textarea","input"].join(",");function CD(a){var e,n;return(n=(e=a?.matches)==null?void 0:e.call(a,wD))!=null?n:!1}function DD(a,e=n=>n){return a.slice().sort((n,r)=>{let o=e(n),u=e(r);if(o===null||u===null)return 0;let c=o.compareDocumentPosition(u);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Rl(a,e,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(a)?a.length>0?fm(a[0]):document:fm(a),c=Array.isArray(a)?n?DD(a):a:e&64?TD(a):bD(a);o.length>0&&c.length>1&&(c=c.filter(S=>!o.some(E=>E!=null&&"current"in E?E?.current===S:E===S))),r=r??u?.activeElement;let h=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,c.indexOf(r))-1;if(e&4)return Math.max(0,c.indexOf(r))+1;if(e&8)return c.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=e&32?{preventScroll:!0}:{},g=0,_=c.length,v;do{if(g>=_||g+_<=0)return 0;let S=p+g;if(e&16)S=(S+_)%_;else{if(S<0)return 3;if(S>=_)return 1}v=c[S],v?.focus(m),g+=h}while(v!==dS(v));return e&6&&CD(v)&&v.select(),2}function TS(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function UD(){return/Android/gi.test(window.navigator.userAgent)}function Kx(){return TS()||UD()}function Dc(a,e,n,r){let o=ls(n);z.useEffect(()=>{if(!a)return;function u(c){o.current(c)}return document.addEventListener(e,u,r),()=>document.removeEventListener(e,u,r)},[a,e,r])}function AS(a,e,n,r){let o=ls(n);z.useEffect(()=>{if(!a)return;function u(c){o.current(c)}return window.addEventListener(e,u,r),()=>window.removeEventListener(e,u,r)},[a,e,r])}const $x=30;function LD(a,e,n){let r=ls(n),o=z.useCallback(function(h,p){if(h.defaultPrevented)return;let m=p(h);if(m===null||!m.getRootNode().contains(m)||!m.isConnected)return;let g=(function _(v){return typeof v=="function"?_(v()):Array.isArray(v)||v instanceof Set?v:[v]})(e);for(let _ of g)if(_!==null&&(_.contains(m)||h.composed&&h.composedPath().includes(_)))return;return!AD(m,bS.Loose)&&m.tabIndex!==-1&&h.preventDefault(),r.current(h,m)},[r,e]),u=z.useRef(null);Dc(a,"pointerdown",h=>{var p,m;Kx()||(u.current=((m=(p=h.composedPath)==null?void 0:p.call(h))==null?void 0:m[0])||h.target)},!0),Dc(a,"pointerup",h=>{if(Kx()||!u.current)return;let p=u.current;return u.current=null,o(h,()=>p)},!0);let c=z.useRef({x:0,y:0});Dc(a,"touchstart",h=>{c.current.x=h.touches[0].clientX,c.current.y=h.touches[0].clientY},!0),Dc(a,"touchend",h=>{let p={x:h.changedTouches[0].clientX,y:h.changedTouches[0].clientY};if(!(Math.abs(p.x-c.current.x)>=$x||Math.abs(p.y-c.current.y)>=$x))return o(h,()=>br(h.target)?h.target:null)},!0),AS(a,"blur",h=>o(h,()=>QC(window.document.activeElement)?window.document.activeElement:null),!0)}function zm(...a){return z.useMemo(()=>zl(...a),[...a])}function RS(a,e,n,r){let o=ls(n);z.useEffect(()=>{a=a??window;function u(c){o.current(c)}return a.addEventListener(e,u,r),()=>a.removeEventListener(e,u,r)},[a,e,r])}function ND(a){return z.useSyncExternalStore(a.subscribe,a.getSnapshot,a.getSnapshot)}function OD(a,e){let n=a(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...u){let c=e[o].call(n,...u);c&&(n=c,r.forEach(h=>h()))}}}function PD(){let a;return{before({doc:e}){var n;let r=e.documentElement,o=(n=e.defaultView)!=null?n:window;a=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:e,d:n}){let r=e.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),u=Math.max(0,a-o);n.style(r,"paddingRight",`${u}px`)}}}function FD(){return TS()?{before({doc:a,d:e,meta:n}){function r(o){for(let u of n().containers)for(let c of u())if(c.contains(o))return!0;return!1}e.microTask(()=>{var o;if(window.getComputedStyle(a.documentElement).scrollBehavior!=="auto"){let h=Ga();h.style(a.documentElement,"scrollBehavior","auto"),e.add(()=>e.microTask(()=>h.dispose()))}let u=(o=window.scrollY)!=null?o:window.pageYOffset,c=null;e.addEventListener(a,"click",h=>{if(br(h.target))try{let p=h.target.closest("a");if(!p)return;let{hash:m}=new URL(p.href),g=a.querySelector(m);br(g)&&!r(g)&&(c=g)}catch{}},!0),e.group(h=>{e.addEventListener(a,"touchstart",p=>{if(h.dispose(),br(p.target)&&$C(p.target))if(r(p.target)){let m=p.target;for(;m.parentElement&&r(m.parentElement);)m=m.parentElement;h.style(m,"overscrollBehavior","contain")}else h.style(p.target,"touchAction","none")})}),e.addEventListener(a,"touchmove",h=>{if(br(h.target)){if(JC(h.target))return;if(r(h.target)){let p=h.target;for(;p.parentElement&&p.dataset.headlessuiPortal!==""&&!(p.scrollHeight>p.clientHeight||p.scrollWidth>p.clientWidth);)p=p.parentElement;p.dataset.headlessuiPortal===""&&h.preventDefault()}else h.preventDefault()}},{passive:!1}),e.add(()=>{var h;let p=(h=window.scrollY)!=null?h:window.pageYOffset;u!==p&&window.scrollTo(0,u),c&&c.isConnected&&(c.scrollIntoView({block:"nearest"}),c=null)})})}}:{}}function ID(){return{before({doc:a,d:e}){e.style(a.documentElement,"overflow","hidden")}}}function Qx(a){let e={};for(let n of a)Object.assign(e,n(e));return e}let as=OD(()=>new Map,{PUSH(a,e){var n;let r=(n=this.get(a))!=null?n:{doc:a,count:0,d:Ga(),meta:new Set,computedMeta:{}};return r.count++,r.meta.add(e),r.computedMeta=Qx(r.meta),this.set(a,r),this},POP(a,e){let n=this.get(a);return n&&(n.count--,n.meta.delete(e),n.computedMeta=Qx(n.meta)),this},SCROLL_PREVENT(a){let e={doc:a.doc,d:a.d,meta(){return a.computedMeta}},n=[FD(),PD(),ID()];n.forEach(({before:r})=>r?.(e)),n.forEach(({after:r})=>r?.(e))},SCROLL_ALLOW({d:a}){a.dispose()},TEARDOWN({doc:a}){this.delete(a)}});as.subscribe(()=>{let a=as.getSnapshot(),e=new Map;for(let[n]of a)e.set(n,n.documentElement.style.overflow);for(let n of a.values()){let r=e.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&as.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&as.dispatch("TEARDOWN",n)}});function BD(a,e,n=()=>({containers:[]})){let r=ND(as),o=e?r.get(e):void 0,u=o?o.count>0:!1;return Zn(()=>{if(!(!e||!a))return as.dispatch("PUSH",e,n),()=>as.dispatch("POP",e,n)},[a,e]),u}function zD(a,e,n=()=>[document.body]){let r=Gl(a,"scroll-lock");BD(r,e,o=>{var u;return{containers:[...(u=o.containers)!=null?u:[],n]}})}function HD(a=0){let[e,n]=z.useState(a),r=z.useCallback(p=>n(p),[]),o=z.useCallback(p=>n(m=>m|p),[]),u=z.useCallback(p=>(e&p)===p,[e]),c=z.useCallback(p=>n(m=>m&~p),[]),h=z.useCallback(p=>n(m=>m^p),[]);return{flags:e,setFlag:r,addFlag:o,hasFlag:u,removeFlag:c,toggleFlag:h}}var GD={},Jx,ey;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((Jx=process==null?void 0:GD)==null?void 0:Jx.NODE_ENV)==="test"&&typeof((ey=Element?.prototype)==null?void 0:ey.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var VD=(a=>(a[a.None=0]="None",a[a.Closed=1]="Closed",a[a.Enter=2]="Enter",a[a.Leave=4]="Leave",a))(VD||{});function kD(a){let e={};for(let n in a)a[n]===!0&&(e[`data-${n}`]="");return e}function XD(a,e,n,r){let[o,u]=z.useState(n),{hasFlag:c,addFlag:h,removeFlag:p}=HD(a&&o?3:0),m=z.useRef(!1),g=z.useRef(!1),_=uf();return Zn(()=>{var v;if(a){if(n&&u(!0),!e){n&&h(3);return}return(v=r?.start)==null||v.call(r,n),WD(e,{inFlight:m,prepare(){g.current?g.current=!1:g.current=m.current,m.current=!0,!g.current&&(n?(h(3),p(4)):(h(4),p(2)))},run(){g.current?n?(p(3),h(4)):(p(4),h(3)):n?p(1):h(1)},done(){var S;g.current&&YD(e)||(m.current=!1,p(7),n||u(!1),(S=r?.end)==null||S.call(r,n))}})}},[a,n,e,_]),a?[o,{closed:c(1),enter:c(2),leave:c(4),transition:c(2)||c(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function WD(a,{prepare:e,run:n,done:r,inFlight:o}){let u=Ga();return qD(a,{prepare:e,inFlight:o}),u.nextFrame(()=>{n(),u.requestAnimationFrame(()=>{u.add(jD(a,r))})}),u.dispose}function jD(a,e){var n,r;let o=Ga();if(!a)return o.dispose;let u=!1;o.add(()=>{u=!0});let c=(r=(n=a.getAnimations)==null?void 0:n.call(a).filter(h=>h instanceof CSSTransition))!=null?r:[];return c.length===0?(e(),o.dispose):(Promise.allSettled(c.map(h=>h.finished)).then(()=>{u||e()}),o.dispose)}function qD(a,{inFlight:e,prepare:n}){if(e!=null&&e.current){n();return}let r=a.style.transition;a.style.transition="none",n(),a.offsetHeight,a.style.transition=r}function YD(a){var e,n;return((n=(e=a.getAnimations)==null?void 0:e.call(a))!=null?n:[]).some(r=>r instanceof CSSTransition&&r.playState!=="finished")}function Hm(a,e){let n=z.useRef([]),r=Wt(a);z.useEffect(()=>{let o=[...n.current];for(let[u,c]of e.entries())if(n.current[u]!==c){let h=r(e,o);return n.current=e,h}},[r,...e])}let cf=z.createContext(null);cf.displayName="OpenClosedContext";var Ii=(a=>(a[a.Open=1]="Open",a[a.Closed=2]="Closed",a[a.Closing=4]="Closing",a[a.Opening=8]="Opening",a))(Ii||{});function ff(){return z.useContext(cf)}function ZD({value:a,children:e}){return Je.createElement(cf.Provider,{value:a},e)}function KD({children:a}){return Je.createElement(cf.Provider,{value:null},a)}function $D(a){function e(){document.readyState!=="loading"&&(a(),document.removeEventListener("DOMContentLoaded",e))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",e),e())}let Sr=[];$D(()=>{function a(e){if(!br(e.target)||e.target===document.body||Sr[0]===e.target)return;let n=e.target;n=n.closest(Qc),Sr.unshift(n??e.target),Sr=Sr.filter(r=>r!=null&&r.isConnected),Sr.splice(10)}window.addEventListener("click",a,{capture:!0}),window.addEventListener("mousedown",a,{capture:!0}),window.addEventListener("focus",a,{capture:!0}),document.body.addEventListener("click",a,{capture:!0}),document.body.addEventListener("mousedown",a,{capture:!0}),document.body.addEventListener("focus",a,{capture:!0})});function wS(a){let e=Wt(a),n=z.useRef(!1);z.useEffect(()=>(n.current=!1,()=>{n.current=!0,lf(()=>{n.current&&e()})}),[e])}let CS=z.createContext(!1);function QD(){return z.useContext(CS)}function ty(a){return Je.createElement(CS.Provider,{value:a.force},a.children)}function JD(a){let e=QD(),n=z.useContext(US),[r,o]=z.useState(()=>{var u;if(!e&&n!==null)return(u=n.current)!=null?u:null;if(Ji.isServer)return null;let c=a?.getElementById("headlessui-portal-root");if(c)return c;if(a===null)return null;let h=a.createElement("div");return h.setAttribute("id","headlessui-portal-root"),a.body.appendChild(h)});return z.useEffect(()=>{r!==null&&(a!=null&&a.body.contains(r)||a==null||a.body.appendChild(r))},[r,a]),z.useEffect(()=>{e||n!==null&&o(n.current)},[n,o,e]),r}let DS=z.Fragment,eU=$n(function(a,e){let{ownerDocument:n=null,...r}=a,o=z.useRef(null),u=na(eD(v=>{o.current=v}),e),c=zm(o.current),h=n??c,p=JD(h),m=z.useContext(gm),g=uf(),_=bi();return wS(()=>{var v;p&&p.childNodes.length<=0&&((v=p.parentElement)==null||v.removeChild(p))}),p?Fb.createPortal(Je.createElement("div",{"data-headlessui-portal":"",ref:v=>{g.dispose(),m&&v&&g.add(m.register(v))}},_({ourProps:{ref:u},theirProps:r,slot:{},defaultTag:DS,name:"Portal"})),p):null});function tU(a,e){let n=na(e),{enabled:r=!0,ownerDocument:o,...u}=a,c=bi();return r?Je.createElement(eU,{...u,ownerDocument:o,ref:n}):c({ourProps:{ref:n},theirProps:u,slot:{},defaultTag:DS,name:"Portal"})}let nU=z.Fragment,US=z.createContext(null);function iU(a,e){let{target:n,...r}=a,o={ref:na(e)},u=bi();return Je.createElement(US.Provider,{value:n},u({ourProps:o,theirProps:r,defaultTag:nU,name:"Popover.Group"}))}let gm=z.createContext(null);function aU(){let a=z.useContext(gm),e=z.useRef([]),n=Wt(u=>(e.current.push(u),a&&a.register(u),()=>r(u))),r=Wt(u=>{let c=e.current.indexOf(u);c!==-1&&e.current.splice(c,1),a&&a.unregister(u)}),o=z.useMemo(()=>({register:n,unregister:r,portals:e}),[n,r,e]);return[e,z.useMemo(()=>function({children:u}){return Je.createElement(gm.Provider,{value:o},u)},[o])]}let rU=$n(tU),LS=$n(iU),sU=Object.assign(rU,{Group:LS});function oU(a,e=typeof document<"u"?document.defaultView:null,n){let r=Gl(a,"escape");RS(e,"keydown",o=>{r&&(o.defaultPrevented||o.key===vS.Escape&&n(o))})}function lU(){var a;let[e]=z.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=z.useState((a=e?.matches)!=null?a:!1);return Zn(()=>{if(!e)return;function o(u){r(u.matches)}return e.addEventListener("change",o),()=>e.removeEventListener("change",o)},[e]),n}function uU({defaultContainers:a=[],portals:e,mainTreeNode:n}={}){let r=Wt(()=>{var o,u;let c=zl(n),h=[];for(let p of a)p!==null&&(Tr(p)?h.push(p):"current"in p&&Tr(p.current)&&h.push(p.current));if(e!=null&&e.current)for(let p of e.current)h.push(p);for(let p of(o=c?.querySelectorAll("html > *, body > *"))!=null?o:[])p!==document.body&&p!==document.head&&Tr(p)&&p.id!=="headlessui-portal-root"&&(n&&(p.contains(n)||p.contains((u=n?.getRootNode())==null?void 0:u.host))||h.some(m=>p.contains(m))||h.push(p));return h});return{resolveContainers:r,contains:Wt(o=>r().some(u=>u.contains(o)))}}let NS=z.createContext(null);function ny({children:a,node:e}){let[n,r]=z.useState(null),o=OS(e??n);return Je.createElement(NS.Provider,{value:o},a,o===null&&Je.createElement(hm,{features:$c.Hidden,ref:u=>{var c,h;if(u){for(let p of(h=(c=zl(u))==null?void 0:c.querySelectorAll("html > *, body > *"))!=null?h:[])if(p!==document.body&&p!==document.head&&Tr(p)&&p!=null&&p.contains(u)){r(p);break}}}}))}function OS(a=null){var e;return(e=z.useContext(NS))!=null?e:a}function cU(){let a=typeof document>"u";return"useSyncExternalStore"in A_?(e=>e.useSyncExternalStore)(A_)(()=>()=>{},()=>!1,()=>!a):!1}function df(){let a=cU(),[e,n]=z.useState(Ji.isHandoffComplete);return e&&Ji.isHandoffComplete===!1&&n(!1),z.useEffect(()=>{e!==!0&&n(!0)},[e]),z.useEffect(()=>Ji.handoff(),[]),a?!1:e}function Gm(){let a=z.useRef(!1);return Zn(()=>(a.current=!0,()=>{a.current=!1}),[]),a}var bl=(a=>(a[a.Forwards=0]="Forwards",a[a.Backwards=1]="Backwards",a))(bl||{});function fU(){let a=z.useRef(0);return AS(!0,"keydown",e=>{e.key==="Tab"&&(a.current=e.shiftKey?1:0)},!0),a}function PS(a){if(!a)return new Set;if(typeof a=="function")return new Set(a());let e=new Set;for(let n of a.current)Tr(n.current)&&e.add(n.current);return e}let dU="div";var ts=(a=>(a[a.None=0]="None",a[a.InitialFocus=1]="InitialFocus",a[a.TabLock=2]="TabLock",a[a.FocusLock=4]="FocusLock",a[a.RestoreFocus=8]="RestoreFocus",a[a.AutoFocus=16]="AutoFocus",a))(ts||{});function hU(a,e){let n=z.useRef(null),r=na(n,e),{initialFocus:o,initialFocusFallback:u,containers:c,features:h=15,...p}=a;df()||(h=0);let m=zm(n.current);vU(h,{ownerDocument:m});let g=_U(h,{ownerDocument:m,container:n,initialFocus:o,initialFocusFallback:u});xU(h,{ownerDocument:m,container:n,containers:c,previousActiveElement:g});let _=fU(),v=Wt(b=>{if(!ss(n.current))return;let w=n.current;(U=>U())(()=>{za(_.current,{[bl.Forwards]:()=>{Rl(w,wa.First,{skipElements:[b.relatedTarget,u]})},[bl.Backwards]:()=>{Rl(w,wa.Last,{skipElements:[b.relatedTarget,u]})}})})}),S=Gl(!!(h&2),"focus-trap#tab-lock"),E=uf(),R=z.useRef(!1),x={ref:r,onKeyDown(b){b.key=="Tab"&&(R.current=!0,E.requestAnimationFrame(()=>{R.current=!1}))},onBlur(b){if(!(h&4))return;let w=PS(c);ss(n.current)&&w.add(n.current);let U=b.relatedTarget;br(U)&&U.dataset.headlessuiFocusGuard!=="true"&&(FS(w,U)||(R.current?Rl(n.current,za(_.current,{[bl.Forwards]:()=>wa.Next,[bl.Backwards]:()=>wa.Previous})|wa.WrapAround,{relativeTo:b.target}):br(b.target)&&Na(b.target)))}},y=bi();return Je.createElement(Je.Fragment,null,S&&Je.createElement(hm,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:$c.Focusable}),y({ourProps:x,theirProps:p,defaultTag:dU,name:"FocusTrap"}),S&&Je.createElement(hm,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:$c.Focusable}))}let pU=$n(hU),mU=Object.assign(pU,{features:ts});function gU(a=!0){let e=z.useRef(Sr.slice());return Hm(([n],[r])=>{r===!0&&n===!1&&lf(()=>{e.current.splice(0)}),r===!1&&n===!0&&(e.current=Sr.slice())},[a,Sr,e]),Wt(()=>{var n;return(n=e.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function vU(a,{ownerDocument:e}){let n=!!(a&8),r=gU(n);Hm(()=>{n||HC(e?.body)&&Na(r())},[n]),wS(()=>{n&&Na(r())})}function _U(a,{ownerDocument:e,container:n,initialFocus:r,initialFocusFallback:o}){let u=z.useRef(null),c=Gl(!!(a&1),"focus-trap#initial-focus"),h=Gm();return Hm(()=>{if(a===0)return;if(!c){o!=null&&o.current&&Na(o.current);return}let p=n.current;p&&lf(()=>{if(!h.current)return;let m=e?.activeElement;if(r!=null&&r.current){if(r?.current===m){u.current=m;return}}else if(p.contains(m)){u.current=m;return}if(r!=null&&r.current)Na(r.current);else{if(a&16){if(Rl(p,wa.First|wa.AutoFocus)!==mm.Error)return}else if(Rl(p,wa.First)!==mm.Error)return;if(o!=null&&o.current&&(Na(o.current),e?.activeElement===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}u.current=e?.activeElement})},[o,c,a]),u}function xU(a,{ownerDocument:e,container:n,containers:r,previousActiveElement:o}){let u=Gm(),c=!!(a&4);RS(e?.defaultView,"focus",h=>{if(!c||!u.current)return;let p=PS(r);ss(n.current)&&p.add(n.current);let m=o.current;if(!m)return;let g=h.target;ss(g)?FS(p,g)?(o.current=g,Na(g)):(h.preventDefault(),h.stopPropagation(),Na(m)):Na(o.current)},!0)}function FS(a,e){for(let n of a)if(n.contains(e))return!0;return!1}function IS(a){var e;return!!(a.enter||a.enterFrom||a.enterTo||a.leave||a.leaveFrom||a.leaveTo)||!Tl((e=a.as)!=null?e:zS)||Je.Children.count(a.children)===1}let hf=z.createContext(null);hf.displayName="TransitionContext";var yU=(a=>(a.Visible="visible",a.Hidden="hidden",a))(yU||{});function SU(){let a=z.useContext(hf);if(a===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}function MU(){let a=z.useContext(pf);if(a===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}let pf=z.createContext(null);pf.displayName="NestingContext";function mf(a){return"children"in a?mf(a.children):a.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function BS(a,e){let n=ls(a),r=z.useRef([]),o=Gm(),u=uf(),c=Wt((S,E=Er.Hidden)=>{let R=r.current.findIndex(({el:x})=>x===S);R!==-1&&(za(E,{[Er.Unmount](){r.current.splice(R,1)},[Er.Hidden](){r.current[R].state="hidden"}}),u.microTask(()=>{var x;!mf(r)&&o.current&&((x=n.current)==null||x.call(n))}))}),h=Wt(S=>{let E=r.current.find(({el:R})=>R===S);return E?E.state!=="visible"&&(E.state="visible"):r.current.push({el:S,state:"visible"}),()=>c(S,Er.Unmount)}),p=z.useRef([]),m=z.useRef(Promise.resolve()),g=z.useRef({enter:[],leave:[]}),_=Wt((S,E,R)=>{p.current.splice(0),e&&(e.chains.current[E]=e.chains.current[E].filter(([x])=>x!==S)),e?.chains.current[E].push([S,new Promise(x=>{p.current.push(x)})]),e?.chains.current[E].push([S,new Promise(x=>{Promise.all(g.current[E].map(([y,b])=>b)).then(()=>x())})]),E==="enter"?m.current=m.current.then(()=>e?.wait.current).then(()=>R(E)):R(E)}),v=Wt((S,E,R)=>{Promise.all(g.current[E].splice(0).map(([x,y])=>y)).then(()=>{var x;(x=p.current.shift())==null||x()}).then(()=>R(E))});return z.useMemo(()=>({children:r,register:h,unregister:c,onStart:_,onStop:v,wait:m,chains:g}),[h,c,r,_,v,g,m])}let zS=z.Fragment,HS=Kc.RenderStrategy;function EU(a,e){var n,r;let{transition:o=!0,beforeEnter:u,afterEnter:c,beforeLeave:h,afterLeave:p,enter:m,enterFrom:g,enterTo:_,entered:v,leave:S,leaveFrom:E,leaveTo:R,...x}=a,[y,b]=z.useState(null),w=z.useRef(null),U=IS(a),B=na(...U?[w,e,b]:e===null?[]:[e]),I=(n=x.unmount)==null||n?Er.Unmount:Er.Hidden,{show:P,appear:A,initial:L}=SU(),[te,G]=z.useState(P?"visible":"hidden"),$=MU(),{register:ne,unregister:fe}=$;Zn(()=>ne(w),[ne,w]),Zn(()=>{if(I===Er.Hidden&&w.current){if(P&&te!=="visible"){G("visible");return}return za(te,{hidden:()=>fe(w),visible:()=>ne(w)})}},[te,w,ne,fe,P,I]);let J=df();Zn(()=>{if(U&&J&&te==="visible"&&w.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[w,te,J,U]);let F=L&&!A,H=A&&P&&L,ue=z.useRef(!1),pe=BS(()=>{ue.current||(G("hidden"),fe(w))},$),Me=Wt(xe=>{ue.current=!0;let Ee=xe?"enter":"leave";pe.onStart(w,Ee,ze=>{ze==="enter"?u?.():ze==="leave"&&h?.()})}),O=Wt(xe=>{let Ee=xe?"enter":"leave";ue.current=!1,pe.onStop(w,Ee,ze=>{ze==="enter"?c?.():ze==="leave"&&p?.()}),Ee==="leave"&&!mf(pe)&&(G("hidden"),fe(w))});z.useEffect(()=>{U&&o||(Me(P),O(P))},[P,U,o]);let Y=!(!o||!U||!J||F),[,le]=XD(Y,y,P,{start:Me,end:O}),Re=Qr({ref:B,className:((r=dm(x.className,H&&m,H&&g,le.enter&&m,le.enter&&le.closed&&g,le.enter&&!le.closed&&_,le.leave&&S,le.leave&&!le.closed&&E,le.leave&&le.closed&&R,!le.transition&&P&&v))==null?void 0:r.trim())||void 0,...kD(le)}),Oe=0;te==="visible"&&(Oe|=Ii.Open),te==="hidden"&&(Oe|=Ii.Closed),P&&te==="hidden"&&(Oe|=Ii.Opening),!P&&te==="visible"&&(Oe|=Ii.Closing);let re=bi();return Je.createElement(pf.Provider,{value:pe},Je.createElement(ZD,{value:Oe},re({ourProps:Re,theirProps:x,defaultTag:zS,features:HS,visible:te==="visible",name:"Transition.Child"})))}function bU(a,e){let{show:n,appear:r=!1,unmount:o=!0,...u}=a,c=z.useRef(null),h=IS(a),p=na(...h?[c,e]:e===null?[]:[e]);df();let m=ff();if(n===void 0&&m!==null&&(n=(m&Ii.Open)===Ii.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[g,_]=z.useState(n?"visible":"hidden"),v=BS(()=>{n||_("hidden")}),[S,E]=z.useState(!0),R=z.useRef([n]);Zn(()=>{S!==!1&&R.current[R.current.length-1]!==n&&(R.current.push(n),E(!1))},[R,n]);let x=z.useMemo(()=>({show:n,appear:r,initial:S}),[n,r,S]);Zn(()=>{n?_("visible"):!mf(v)&&c.current!==null&&_("hidden")},[n,v]);let y={unmount:o},b=Wt(()=>{var B;S&&E(!1),(B=a.beforeEnter)==null||B.call(a)}),w=Wt(()=>{var B;S&&E(!1),(B=a.beforeLeave)==null||B.call(a)}),U=bi();return Je.createElement(pf.Provider,{value:v},Je.createElement(hf.Provider,{value:x},U({ourProps:{...y,as:z.Fragment,children:Je.createElement(GS,{ref:p,...y,...u,beforeEnter:b,beforeLeave:w})},theirProps:{},defaultTag:z.Fragment,features:HS,visible:g==="visible",name:"Transition"})))}function TU(a,e){let n=z.useContext(hf)!==null,r=ff()!==null;return Je.createElement(Je.Fragment,null,!n&&r?Je.createElement(vm,{ref:e,...a}):Je.createElement(GS,{ref:e,...a}))}let vm=$n(bU),GS=$n(EU),Vm=$n(TU),AU=Object.assign(vm,{Child:Vm,Root:vm});var RU=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(RU||{}),wU=(a=>(a[a.SetTitleId=0]="SetTitleId",a))(wU||{});let CU={0(a,e){return a.titleId===e.id?a:{...a,titleId:e.id}}},km=z.createContext(null);km.displayName="DialogContext";function gf(a){let e=z.useContext(km);if(e===null){let n=new Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,gf),n}return e}function DU(a,e){return za(e.type,CU,a,e)}let iy=$n(function(a,e){let n=z.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:u,initialFocus:c,role:h="dialog",autoFocus:p=!0,__demoMode:m=!1,unmount:g=!1,..._}=a,v=z.useRef(!1);h=(function(){return h==="dialog"||h==="alertdialog"?h:(v.current||(v.current=!0,console.warn(`Invalid role [${h}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")})();let S=ff();o===void 0&&S!==null&&(o=(S&Ii.Open)===Ii.Open);let E=z.useRef(null),R=na(E,e),x=zm(E.current),y=o?0:1,[b,w]=z.useReducer(DU,{titleId:null,descriptionId:null,panelRef:z.createRef()}),U=Wt(()=>u(!1)),B=Wt(le=>w({type:0,id:le})),I=df()?y===0:!1,[P,A]=aU(),L={get current(){var le;return(le=b.panelRef.current)!=null?le:E.current}},te=OS(),{resolveContainers:G}=uU({mainTreeNode:te,portals:P,defaultContainers:[L]}),$=S!==null?(S&Ii.Closing)===Ii.Closing:!1;yD(m||$?!1:I,{allowed:Wt(()=>{var le,Re;return[(Re=(le=E.current)==null?void 0:le.closest("[data-headlessui-portal]"))!=null?Re:null]}),disallowed:Wt(()=>{var le;return[(le=te?.closest("body > *:not(#headlessui-portal-root)"))!=null?le:null]})});let ne=MS.get(null);Zn(()=>{if(I)return ne.actions.push(r),()=>ne.actions.pop(r)},[ne,r,I]);let fe=ES(ne,z.useCallback(le=>ne.selectors.isTop(le,r),[ne,r]));LD(fe,G,le=>{le.preventDefault(),U()}),oU(fe,x?.defaultView,le=>{le.preventDefault(),le.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),U()}),zD(m||$?!1:I,x,G),SD(I,E,U);let[J,F]=tD(),H=z.useMemo(()=>[{dialogState:y,close:U,setTitleId:B,unmount:g},b],[y,U,B,g,b]),ue=Hl({open:y===0}),pe={ref:R,id:r,role:h,tabIndex:-1,"aria-modal":m?void 0:y===0?!0:void 0,"aria-labelledby":b.titleId,"aria-describedby":J,unmount:g},Me=!lU(),O=ts.None;I&&!m&&(O|=ts.RestoreFocus,O|=ts.TabLock,p&&(O|=ts.AutoFocus),Me&&(O|=ts.InitialFocus));let Y=bi();return Je.createElement(KD,null,Je.createElement(ty,{force:!0},Je.createElement(sU,null,Je.createElement(km.Provider,{value:H},Je.createElement(LS,{target:E},Je.createElement(ty,{force:!1},Je.createElement(F,{slot:ue},Je.createElement(A,null,Je.createElement(mU,{initialFocus:c,initialFocusFallback:E,containers:G,features:O},Je.createElement(sD,{value:U},Y({ourProps:pe,theirProps:_,slot:ue,defaultTag:UU,features:LU,visible:y===0,name:"Dialog"})))))))))))}),UU="div",LU=Kc.RenderStrategy|Kc.Static;function NU(a,e){let{transition:n=!1,open:r,...o}=a,u=ff(),c=a.hasOwnProperty("open")||u!==null,h=a.hasOwnProperty("onClose");if(!c&&!h)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!c)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!h)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!u&&typeof a.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a.open}`);if(typeof a.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a.onClose}`);return(r!==void 0||n)&&!o.static?Je.createElement(ny,null,Je.createElement(AU,{show:r,transition:n,unmount:o.unmount},Je.createElement(iy,{ref:e,...o}))):Je.createElement(ny,null,Je.createElement(iy,{ref:e,open:r,...o}))}let OU="div";function PU(a,e){let n=z.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...u}=a,[{dialogState:c,unmount:h},p]=gf("Dialog.Panel"),m=na(e,p.panelRef),g=Hl({open:c===0}),_=Wt(x=>{x.stopPropagation()}),v={ref:m,id:r,onClick:_},S=o?Vm:z.Fragment,E=o?{unmount:h}:{},R=bi();return Je.createElement(S,{...E},R({ourProps:v,theirProps:u,slot:g,defaultTag:OU,name:"Dialog.Panel"}))}let FU="div";function IU(a,e){let{transition:n=!1,...r}=a,[{dialogState:o,unmount:u}]=gf("Dialog.Backdrop"),c=Hl({open:o===0}),h={ref:e,"aria-hidden":!0},p=n?Vm:z.Fragment,m=n?{unmount:u}:{},g=bi();return Je.createElement(p,{...m},g({ourProps:h,theirProps:r,slot:c,defaultTag:FU,name:"Dialog.Backdrop"}))}let BU="h2";function zU(a,e){let n=z.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=a,[{dialogState:u,setTitleId:c}]=gf("Dialog.Title"),h=na(e);z.useEffect(()=>(c(r),()=>c(null)),[r,c]);let p=Hl({open:u===0}),m={ref:h,id:r};return bi()({ourProps:m,theirProps:o,slot:p,defaultTag:BU,name:"Dialog.Title"})}let HU=$n(NU),VS=$n(PU);$n(IU);let kS=$n(zU),GU=Object.assign(HU,{Panel:VS,Title:kS,Description:gS});const VU=({project:a})=>{const[e,n]=z.useState(!1);return K.jsxs("div",{className:"proj-wrapper",children:[K.jsx("div",{className:"proj-img-container",children:K.jsx("img",{src:a.img,alt:`${a.imgAlt} image`})}),K.jsxs("div",{className:"proj-title-container",children:[K.jsxs("div",{className:"proj-title",children:[K.jsx("h3",{children:a.title}),K.jsx("p",{children:a.meta})]}),K.jsxs("div",{onClick:()=>n(!0),className:"proj-rdmore",children:[K.jsx("p",{children:"Read More"}),K.jsx(PC,{})]}),K.jsx(GU,{open:e,onClose:()=>n(!1),className:"dlg",children:K.jsx("div",{className:"proj-dlg-container",children:K.jsxs(VS,{className:"proj-dlg-panel",children:[K.jsxs(kS,{className:"dlg-title-container",children:[a.title,K.jsx(FC,{onClick:()=>n(!1)})]}),K.jsxs(gS,{className:"dlg-desc",children:[a.description,K.jsxs("div",{className:"dlg-ov",children:[K.jsx("h3",{children:"Overview"}),a.details.overview]}),K.jsxs("div",{className:"dlg-whatblt",children:[K.jsx("h3",{children:"What we built"}),K.jsx("ul",{children:a.details.what_we_built.map(r=>K.jsx("li",{children:r}))})]}),K.jsxs("div",{className:"dlg-stack",children:[K.jsx("h3",{children:"Stack"}),K.jsx("ul",{children:a.details.stack.map(r=>K.jsx("li",{children:r}))})]}),a.links&&a.links.length>0&&K.jsxs("div",{className:"dlg-links",children:[K.jsx("h3",{children:"Links"}),K.jsx("ul",{children:a.links?.map(r=>K.jsx("li",{children:K.jsx("a",{href:r,children:r})}))})]})]})]})})})]})]})},kU=()=>K.jsxs(Im,{className:"research-wrapper",children:[K.jsx(nf,{}),K.jsxs("div",{className:"research-main-content-container",children:[K.jsxs("div",{className:"research-main-cont",children:[K.jsx("h1",{children:"Our Research"}),K.jsxs("div",{className:"research-desc",children:[K.jsx("p",{children:"The IEEE Signal Processing Society (SPS) is a professional community for people who work on signals (audio, images, sensors) and the math and software that makes sense of them. At we build student-facing projects that make the ideas tangible: workshops, open-source tooling, and end-to-end prototypes."}),K.jsxs("p",{style:{fontWeight:"600"},children:["Want to contribute? Join our ",K.jsx("a",{href:"https://discord.gg/6GRymPjgKc",target:"_blank",children:"Discord!"})]})]})]}),K.jsx("div",{className:"research-proj-container",children:Object.entries(OC).map(([a,e])=>K.jsx(VU,{project:e}))})]}),K.jsx(Em,{})]}),XU=({selected:a,onSelect:e})=>K.jsxs("div",{className:"switch-wrapper",children:[K.jsx("div",{className:`selection-pill ${a}`}),K.jsx("button",{className:`switch-btn ${a==="upcoming"?"active":""}`,onClick:()=>e("upcoming"),children:"Upcoming"}),K.jsx("button",{className:`switch-btn ${a==="past"?"active":""}`,onClick:()=>e("past"),children:"Past"})]}),WU=({title:a,date:e,time:n,description:r,location:o,index:u=0,image:c})=>K.jsxs("div",{className:"workshop-card",style:{zIndex:100-u,"--card-bg-image":c?`url(${c})`:"none"},children:[K.jsx("h2",{className:"index-number",children:String(u+1).padStart(2,"0")}),K.jsx("h3",{children:a}),K.jsx("p",{className:"workshop-description",children:r}),K.jsxs("div",{className:"workshop-info",children:[K.jsxs("p",{className:"workshop-location",children:[" ",o]}),K.jsxs("div",{className:"workshop-date-time",children:[K.jsx("p",{className:"workshop-date",children:e}),K.jsx("p",{className:"workshop-time",children:n})]})]})]}),mp="/assets/quantum-BrmCATHr.png",ay="/assets/ai_ethics-ujjsg1mU.png",jU="/assets/robotics-7AhL5ytZ.png",qU="/assets/data_science-Dw4ERV1Q.png",YU="/assets/build_transformers_from_the-CYsC9q1A.jpg",ZU="/assets/ever_wondered_why_calculus-DQ4YoHIA.jpg",KU="/assets/how_random_is_random-BnuXg7WZ.jpg",$U="/assets/join_our_physically_interpretable-DAp6Zk9q.jpg",QU="/assets/journal_club_today_come-BjgHbYUy.jpg",JU="/assets/ready_to_turn_noise-Csj0ivwM.jpg",eL="/assets/sps_workshop_series_is-Bmj1SCYY.jpg",tL="/assets/theres_no_better_way-ZR4r94dD.jpg",nL="/assets/this_thursday_join_the-E5RquB7_.jpg",iL="/assets/were_so_back_join-xGyCmHTW.jpg",aL="/assets/workshop_series_tomorrow_originally-B2I2VkoX.jpg",rL="/assets/workshop_this_friday_for-CB8QhZKH.jpg",sL="/assets/workshop_wednesday_10x_your-DawWWqr2.jpg",oL="/assets/your_next_job_is-BTnkByLQ.jpg",lL="/assets/part_2_of_the-Cuy1T6IY.jpg",uL="/assets/join_us_for_an-Bq0YCr2h.jpg",cL="/assets/member_spotlight_fernando_e-BDBg-NFp.jpg",fL="/assets/sps_board_positions_open-Ct-8KHgN.jpg",dL="/assets/jboard_applications_due_today-BbYHaSsy.jpg",hL=[{title:"Machine Learning Basics",location:"UF",date:"January 10, 2026",time:"2:00 PM",description:"An introduction to core machine learning concepts and algorithms. We'll cover supervised and unsupervised learning, model evaluation techniques, and walk through real-world applications in physics and engineering. By the end, you'll know how to select the right algorithm for your dataset and interpret model performance metrics. No prior ML experience required — just bring your laptop and curiosity.",image:mp},{title:"Python for Scientists",location:"UF",date:"January 25, 2026",time:"3:00 PM",description:"Learn how to use Python for scientific computing and research. This workshop covers NumPy, SciPy, and Matplotlib for data analysis, simulation, and visualization of experimental results. We'll also introduce Jupyter notebooks as a workflow tool and show you how to automate repetitive data processing tasks. Perfect for anyone transitioning from MATLAB or starting fresh with Python.",image:ay},{title:"Neural Networks 101",location:"UF",date:"February 8, 2026",time:"1:00 PM",description:"A hands-on workshop covering the fundamentals of neural networks. Build and train your own models from scratch, understand backpropagation, activation functions, and loss optimization. We'll walk through a complete example using PyTorch and discuss common pitfalls like overfitting and vanishing gradients. You'll leave with a working classifier you can extend for your own projects.",image:mp},{title:"Intro to Quantum Computing",location:"UF",date:"March 1, 2026",time:"2:00 PM",description:"A beginner-friendly introduction to quantum computing principles. Explore qubits, superposition, entanglement, and quantum gates while learning how they differ from classical computation. We'll run simple quantum circuits using Qiskit and discuss the current state of quantum hardware. No quantum mechanics background needed — we start from the basics and build up.",image:ay},{title:"Build Transformers from Scratch",location:"UF",date:"October 5, 2025",time:"2:00 PM",description:"Learn to build transformer models from the ground up. We'll implement attention mechanisms, positional encodings, and multi-head attention layers step by step. You'll understand how GPT-style architectures work internally and gain practical experience coding each component. By the end, you'll have a minimal transformer that can process sequential data.",image:YU},{title:"Why Calculus Matters",location:"UF",date:"October 12, 2025",time:"3:00 PM",description:"Ever wondered why calculus is essential in physics? Find out here as we explore derivatives, integrals, and differential equations through real-world physics problems. We'll connect mathematical concepts to motion, electromagnetism, and thermodynamics. Interactive problem-solving sessions will help solidify your understanding of these foundational tools.",image:ZU},{title:"How Random is Random?",location:"UF",date:"October 19, 2025",time:"2:00 PM",description:"Exploring randomness, probability, and stochastic processes. Dive into Monte Carlo methods, Markov chains, and how randomness underpins modern physics simulations. We'll code up random walk simulations and compare computational results with analytical predictions. This workshop bridges the gap between abstract probability theory and practical computational tools.",image:KU},{title:"Physically Interpretable ML",location:"UF",date:"October 26, 2025",time:"1:00 PM",description:"Join our workshop on physically interpretable machine learning models. Learn how to build ML systems that respect physical laws and produce scientifically meaningful predictions. We'll cover physics-informed neural networks (PINNs), symmetry-preserving architectures, and constraint-based training. Ideal for anyone interested in applying ML to scientific research responsibly.",image:$U},{title:"Journal Club",location:"UF",date:"November 2, 2025",time:"3:00 PM",description:"Come discuss the latest research papers with fellow members. This session features papers on condensed matter physics and computational methods in quantum systems. Each presenter gives a brief summary followed by group discussion and critical analysis. It's a great way to stay current with the literature and practice communicating complex ideas.",image:QU},{title:"Turning Noise into Signal",location:"UF",date:"November 9, 2025",time:"2:00 PM",description:"Ready to turn noise into meaningful data? Learn signal processing techniques including Fourier transforms, filtering, and spectral analysis for experimental physics. We'll work with real noisy datasets and apply denoising algorithms to extract clean signals. You'll also learn about windowing functions, sampling theory, and how to avoid common analysis mistakes.",image:JU},{title:"SPS Workshop Series Kickoff",location:"UF",date:"November 16, 2025",time:"2:00 PM",description:"The SPS workshop series is here — join us for the kickoff event. Meet the organizers, preview upcoming topics, and connect with fellow physics enthusiasts. We'll outline the semester's schedule and take suggestions for new workshop ideas. Refreshments will be provided — come hang out and get excited about what's ahead.",image:eL},{title:"Getting Started in Research",location:"UF",date:"November 23, 2025",time:"3:00 PM",description:"There's no better way to start your research journey than this workshop. We'll cover finding advisors, writing proposals, and navigating your first research project. Hear from students who have successfully landed research positions and learn what faculty look for in applicants. We'll also share resources for funding and summer research programs.",image:tL},{title:"Thursday Physics Seminar",location:"UF",date:"November 30, 2025",time:"4:00 PM",description:"This Thursday, join the physics seminar and discussion. Guest speakers will present on particle physics and astrophysics topics followed by an open Q&A. This is a great opportunity to hear about cutting-edge research directly from experts in the field. Attendance counts toward SPS engagement hours for active members.",image:nL},{title:"We're So Back — Welcome Meeting",location:"UF",date:"December 7, 2025",time:"2:00 PM",description:"We're so back! Join us for the welcome-back meeting. Catch up on what's planned for the semester, meet new members, and hear about exciting upcoming events. We'll also hold a brief intro session for anyone new to SPS and explain how to get involved. Stick around after for snacks and socializing with the team.",image:iL},{title:"Workshop Series Recap",location:"UF",date:"December 14, 2025",time:"2:00 PM",description:"A recap of the workshop series — originally planned for tomorrow. Review key takeaways from the semester's workshops and share feedback for future topics. We'll highlight the most popular sessions and discuss what worked well. Your input will directly shape next semester's programming.",image:aL},{title:"Friday Workshop",location:"UF",date:"December 21, 2025",time:"1:00 PM",description:"Workshop this Friday covering hands-on physics demos. Build circuits, measure magnetic fields, and explore optics experiments in an interactive lab setting. All materials are provided — just show up ready to experiment. This is one of our most popular events, so arrive early to grab a spot at a workstation.",image:rL},{title:"10x Your Productivity",location:"UF",date:"January 4, 2026",time:"3:00 PM",description:"Workshop Wednesday — 10x your productivity with these tools and tips. Learn about LaTeX, Git, Jupyter notebooks, and other essential tools for physics students. We'll set up a complete development environment together and walk through common workflows. You'll leave with templates and configurations you can use immediately in your coursework and research.",image:sL},{title:"Your Next Job in Physics",location:"UF",date:"January 11, 2026",time:"2:00 PM",description:"Your next job is closer than you think — career prep workshop. Cover resume building, interview skills, and networking strategies for physics careers in industry and academia. We'll review real job postings and practice tailoring applications to different roles. Alumni panelists will share their career journeys and answer your questions live.",image:oL},{title:"Workshop Part 2",location:"UF",date:"January 18, 2026",time:"2:00 PM",description:"Part 2 of the continuing workshop series. Pick up where we left off and dive deeper into advanced topics with hands-on exercises and group discussions. We'll tackle more complex problems and introduce additional techniques that build on last session's foundations. Collaboration is encouraged — bring a friend and work through challenges together.",image:lL},{title:"Open Lecture Night",location:"UF",date:"January 25, 2026",time:"6:00 PM",description:"Join us for an open lecture night with guest speakers. Faculty and graduate students share their latest research findings across multiple areas of physics. Topics range from condensed matter to cosmology, with something for everyone. Each talk is followed by informal discussion — a perfect chance to explore new research directions.",image:uL},{title:"Member Spotlight: Fernando",location:"UF",date:"February 1, 2026",time:"2:00 PM",description:"Member spotlight featuring Fernando E. and his research. Learn about his work in computational physics and the path that led him to his current projects. Fernando will walk through his day-to-day workflow, share tips for getting started in research, and discuss the challenges he's faced along the way. Q&A session included at the end.",image:cL},{title:"Board Positions Open",location:"UF",date:"February 8, 2026",time:"3:00 PM",description:"SPS board positions are open — learn how to apply. Find out about available roles, responsibilities, and how you can help shape the future of our chapter. Current board members will share their experiences and what they've gained from serving. Applications are straightforward — we'll walk you through the process step by step.",image:fL},{title:"Board Applications Due",location:"UF",date:"February 15, 2026",time:"11:59 PM",description:"Board applications are due today — submit yours! Don't miss the deadline to join the leadership team and make an impact on the SPS community. Positions include president, vice president, treasurer, secretary, and committee chairs. This is your chance to develop leadership skills while contributing to a community you care about.",image:dL},{title:"Advanced AI Ethics",location:"UF",date:"March 15, 2026",time:"3:00 PM",description:"Discussion on ethical considerations in artificial intelligence. Explore bias in algorithms, responsible AI development, and the societal implications of autonomous systems. We'll examine real case studies where AI caused unintended harm and debate potential regulatory frameworks. This session encourages open dialogue — all perspectives are welcome.",image:mp},{title:"Robotics Lab",location:"UF",date:"April 5, 2026",time:"1:00 PM",description:"Hands-on robotics workshop with live demos. Program microcontrollers, assemble sensors, and build a simple autonomous robot during this interactive session. We'll use Arduino boards and provide all components — no prior robotics experience needed. Take home your creation and continue experimenting on your own time.",image:jU},{title:"Data Science Fundamentals",location:"UF",date:"April 20, 2026",time:"4:00 PM",description:"Learn the basics of data analysis and visualization techniques. Work with real datasets using pandas and seaborn to uncover patterns and present findings effectively. We'll cover data cleaning, statistical summaries, and creating publication-quality plots. By the end, you'll have a complete analysis notebook you can adapt for your own data.",image:qU}],pL=()=>{const[a,e]=z.useState("upcoming"),n=hL.filter(r=>{const o=new Date(r.date),u=new Date;return a==="past"?o<u:o>=u}).slice(0,10);return K.jsxs(Im,{className:"resources-wrapper",children:[K.jsx(nf,{}),K.jsxs("div",{className:"workshop-title-container",children:[K.jsx("h1",{children:"Workshops"}),K.jsx(XU,{selected:a,onSelect:e})]}),K.jsx("div",{className:"workshop-cards-container",children:n.map((r,o)=>K.jsx(WU,{index:o,title:r.title,location:r.location,date:r.date,time:r.time,description:r.description,image:r.image},o))})]})},mL=()=>K.jsx(Rb,{children:K.jsxs(ib,{children:[K.jsx(xl,{path:"/",element:K.jsx(hC,{})}),K.jsx(xl,{path:"/about",element:K.jsx(NC,{})}),K.jsx(xl,{path:"/research",element:K.jsx(kU,{})}),K.jsx(xl,{path:"/resources",element:K.jsx(pL,{})})]})});a1.createRoot(document.getElementById("root")).render(K.jsx(Je.StrictMode,{children:K.jsx(mL,{})}));
