!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],l=0,s=[];l<o.length;l++)a=o[l],C[a]&&s.push(C[a][0]),C[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);s.length;)s.shift()();return D.push.apply(D,c||[]),n()}function n(){for(var e,t=0;t<D.length;t++){for(var n=D[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==C[o]&&(r=!1)}r&&(D.splice(t--,1),e=I(I.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(O[e]&&E[e]){for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--y&&0===v&&P()}}(e,t),r&&r(e,t)};var a,o=!0,i="939535dcc933bb99755d",c=1e4,l={},s=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:k,apply:S,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return a=void 0,t}var d=[],f="idle";function m(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,g,b,y=0,v=0,w={},E={},O={};function j(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,m("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=I.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;E={},w={},O=e.c,b=e.h,m("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in g={},C)x(n);return"prepare"===f&&0===v&&0===y&&P(),t});var t}function x(e){O[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function P(){m("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return S(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(j(n));e.resolve(t)}}function S(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,c=a.chain;if((o=_[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<o.parents.length;l++){var s=o.parents[l],u=_[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),p(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var d={},h=[],y={},v=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in g)if(Object.prototype.hasOwnProperty.call(g,w)){var E;c=j(w);var k=!1,x=!1,P=!1,S="";switch((E=g[w]?u(c):{type:"disposed",moduleId:w}).chain&&(S="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+E.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(k=new Error("Aborted because "+c+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(E),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),P=!0;break;default:throw new Error("Unexception type "+E.type)}if(k)return m("abort"),Promise.reject(k);if(x)for(c in y[c]=g[c],p(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(d[c]||(d[c]=[]),p(d[c],E.outdatedDependencies[c]));P&&(p(h,[E.moduleId]),y[c]=v)}var D,F=[];for(r=0;r<h.length;r++)c=h[r],_[c]&&_[c].hot._selfAccepted&&F.push({module:c,errorHandler:_[c].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete C[e]}(e)});for(var T,A,R=h.slice();R.length>0;)if(c=R.pop(),o=_[c]){var q={},H=o.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(q);for(l[c]=q,o.hot.active=!1,delete _[c],delete d[c],a=0;a<o.children.length;a++){var M=_[o.children[a]];M&&(D=M.parents.indexOf(c))>=0&&M.parents.splice(D,1)}}for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=_[c]))for(A=d[c],a=0;a<A.length;a++)T=A[a],(D=o.children.indexOf(T))>=0&&o.children.splice(D,1);for(c in m("apply"),i=b,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var B=null;for(c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&(o=_[c])){A=d[c];var N=[];for(r=0;r<A.length;r++)if(T=A[r],n=o.hot._acceptedDependencies[T]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[r],error:e}),t.ignoreErrored||B||(B=e)}}}for(r=0;r<F.length;r++){var U=F[r];c=U.module,s=[c];try{I(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||B||(B=n),B||(B=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||B||(B=e)}}return B?(m("fail"),Promise.reject(B)):(m("idle"),new Promise(function(e){e(h)}))}var _={},C={0:0},D=[];function I(t){if(_[t])return _[t].exports;var n=_[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=_[e];if(!t)return I;var n=function(n){return t.hot.active?(_[n]?-1===_[n].parents.indexOf(e)&&_[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),I(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var o in I)Object.prototype.hasOwnProperty.call(I,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&m("prepare"),v++,I.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===f&&(w[e]||x(e),0===v&&0===y&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),I.t(e,-2&t)},n}(t)),n.l=!0,n.exports}I.m=e,I.c=_,I.d=function(e,t,n){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)I.d(n,r,function(t){return e[t]}.bind(null,r));return n},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="/",I.h=function(){return i};var F=window.webpackJsonp=window.webpackJsonp||[],T=F.push.bind(F);F.push=t,F=F.slice();for(var A=0;A<F.length;A++)t(F[A]);var R=T;D.push([237,1]),n()}({237:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(95),i=n(1),c=n.n(i),l=n(247),s=function(e){var t=e.children;return a.a.createElement("main",null,a.a.createElement(l.a,null),t)};s.propTypes={children:c.a.node.isRequired};var u=s,p=n(98),d=n(245),f=n(238),m=n(249),h=n(244),g=function(e){return e=e.toLowerCase().split(/\s/).reduce(function(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}),"".concat(e,"()")},b=n(99),y=n.n(b),v=n(100),w=n.n(v);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=function(e){var t=e.content,n=e.a11y,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["content","a11y"]),i=Object(r.useRef)();return Object(r.useEffect)(function(){new w.a(i.current,{strings:t,typeSpeed:40,backSpeed:20})}),a.a.createElement(a.a.Fragment,null,n.content&&a.a.createElement(f.a,E({},o,{variant:"srOnly"}),n.content),a.a.createElement(f.a,E({},o,{"aria-hidden":!y()(n.content)}),a.a.createElement("span",{ref:i})))};O.propTypes={content:c.a.array.isRequired,a11y:c.a.shape({content:c.a.string})},O.defaultProps={a11y:{content:null}};var j=O,k=n(82),x=n.n(k),P=n(105),S=n.n(P),_=n(103),C=n.n(_),D=n(248),I=n(118);function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T={live:"#FFFFFF",tar:"#000000",energy:"#FF685C",sunrise:"#DA83F6",sunset:"#FBC54C",nature:"#7BE473",ocean:"#58A9F3"};function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}({},{palette:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){F(e,t,n[t])})}return e}({},T,{type:"dark",background:{default:T.tar},text:{primary:T.live}}),sizes:{container:1280},typography:{useNextVariants:!0,fontFamily:["Roboto Mono","monospace"].join(", ")}}),q={mixins:{body:function(e){return{"@global":{body:e}}}}};function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M={standard:R},B=function(e){var t=e.classes,n=e.component,r=e.children,o=e.title,i=e.collapsed;return a.a.createElement(h.a,{maxWidth:i?"xl":"lg",className:t.section},a.a.createElement(d.a,{component:n,container:!0,className:t.sectionContainer,justify:"center",alignItems:"center"},a.a.createElement(d.a,{item:!0,xs:i?"auto":10},o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{component:"h2",className:t.sectionTitle,variant:"h5",content:[g(o)],a11y:{content:o}})),r)))};B.propTypes={classes:c.a.object.isRequired,children:c.a.node.isRequired,collapsed:c.a.bool,title:c.a.string,component:c.a.string},B.defaultProps={collapsed:!1,title:null,component:"section"};var N=x()(function(e){var t=e.palette,n=e.spacing;return{section:{padding:function(e){return e.collapsed&&0}},sectionContainer:{minHeight:"100vh",paddingTop:n(8),paddingBottom:n(8)},sectionTitle:{color:function(e){var n=e.titleCustomColor;return t[n]||t.text.primary},marginBottom:n(5)}}})(B),U=n(246);function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){L(e,t,n[t])})}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var W=function(e){var t=e.classes,n=e.children,r=(e.custom,e.width,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["classes","children","custom","width"]));return a.a.createElement(U.a,J({color:"inherit",underline:"none"},r),a.a.createElement(f.a,{component:"span",className:t.buttonSpecial},a.a.createElement("span",{className:t.buttonSpecialChildren},n)))};W.propTypes={classes:c.a.object.isRequired,children:c.a.node.isRequired};var X=x()(function(e){var t=e.palette,n=e.spacing,r={height:"inherit",width:"inherit"},a=z({},r,{content:'""',border:"1px solid",borderPosition:"inner",position:"absolute",borderColor:function(e){var n=e.custom;return t[n.color]}});return{buttonSpecial:{display:"inline-flex",position:"relative",marginBottom:n(2),width:function(e){return e.width||100},height:function(e){return e.height||50},color:function(e){var n=e.custom;return t[n.color]},backgroundColor:function(e){var n=e.custom;return t[n.background]},"&::before":z({},a,{top:0,zIndex:3}),"&::after":z({},a,{top:7,left:7})},buttonSpecialChildren:z({},r,{display:"inherit",alignItems:"center",justifyContent:"center",position:"inherit",zIndex:2,backgroundColor:function(e){var n=e.custom;return t[n.background]}})}})(W);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G=x()(function(){return{}})(function(e){e.classes;var t=e.children,n={width:e.width,height:e.height,custom:{color:"sunset",background:"tar"}};return a.a.createElement(X,Y({href:"https://www.sympla.com.br/front-in-sampa-2019__413970","aria-label":"Abrir nossa página de inscrição no Sympla.",target:"_blank",rel:"noopener"},n),t)}),K=function(){return a.a.createElement(N,null,a.a.createElement(d.a,{container:!0,direction:"row",justify:"center"},a.a.createElement(d.a,{item:!0,xs:"auto",style:{textAlign:"center"}},a.a.createElement(j,{component:"p",paragraph:!0,variant:"h2",content:["#saveTheDate","Front In Sampa 2019"]}),a.a.createElement(f.a,{component:"p",paragraph:!0,variant:"h5",color:"textSecondary"},"13 de Julho | Centro de Convenções Rebouças, São Paulo"),a.a.createElement(m.a,{mt:5,mb:5},a.a.createElement(f.a,{component:"p",variant:"h2",color:"textSecondary"},a.a.createElement(p.a,{date:new Date("Sat, 13 Jul 2019"),zeroPadTime:2,daysInHours:!0}))),a.a.createElement(G,{width:230},"Faça sua inscrição"))))},Q=n(18),V=n.n(Q);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=x()(function(e){var t=e.palette;return{typography:{color:function(e){var n=e.customColor;return t[n]||t.text.primary}}}})(function(e){var t=e.classes,n=(e.customColor,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["classes","customColor"]));return a.a.createElement(f.a,$({className:t.typography},n))}),ee=n(116),te=function(e){var t=e.number,n=e.prefix,r=e.posfix,o=Object(ee.useCountUp)({end:t,duration:2}).countUp;return a.a.createElement(a.a.Fragment,null,n+o+r)};te.propTypes={number:c.a.number.isRequired,prefix:c.a.string,posfix:c.a.string},te.defaultProps={posfix:"",prefix:""};var ne=x()(function(){})(te),re=[{number:2e3,content:"participantes",color:"energy",a11y:{description:"Mais de 2 mil participantes"}},{number:70,content:"palestrantes",color:"sunrise",a11y:{description:"Mais de 70 palestrantes"}},{number:30,content:"patrocinadores",color:"sunset",a11y:{description:"Mais de 30 patrocinadores"}},{number:70,content:"apoiadores",color:"nature",a11y:{description:"Mais de 70 apoiadores"}}],ae=function(){return a.a.createElement(N,{title:"O evento",titleCustomColor:"sunrise"},a.a.createElement(m.a,{mb:6},a.a.createElement(Z,{component:"p",paragraph:!0,variant:"h5"},"O ",a.a.createElement(m.a,{component:"strong",color:"sunrise",fontWeight:"normal"},"Front In Sampa é o tradicional evento de Front-End")," sediado em São Paulo com 7 edições de sucesso desde 2012. Com o posto de maior do Brasil no seguimento e bem aclamado pelo público da área, trazemos conteúdo de alta qualidade aliado a uma experiência incrível do início ao fim, sempre pensando na inclusão, no aprendizado e na diversão.")),a.a.createElement(Z,{component:"p",paragraph:!0,variant:"h6"},"Desde de 2012, passaram pelo ",a.a.createElement(m.a,{component:"strong",color:"sunrise",fontWeight:"normal"},"Front In Sampa"),":"),a.a.createElement(d.a,{container:!0},re.map(function(e){var t=e.number,n=e.content,r=e.color,o=e.a11y;return a.a.createElement(d.a,{item:!0,xs:12,md:4,key:V()()},a.a.createElement(m.a,{component:"p",mb:4},a.a.createElement(Z,{component:"span",variant:"h6","aria-label":o.description},a.a.createElement(Z,{component:"span",variant:"h4",display:"block",paragraph:!0,customColor:r},a.a.createElement(ne,{number:t,posfix:"+"}))," ",n)))})))},oe=function(e){var t=e.src,n=e.alt,r=e.presentation,o=e.a11y,i=e.width,c=e.height,l=V()();return r?a.a.createElement("img",{src:t,srcSet:"".concat(t," 2x"),alt:"",role:"presentation",width:i,height:c}):a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:t,srcSet:"".concat(t," 2x"),alt:n,"aria-describedby":l,width:i,height:c}),a.a.createElement("span",{id:l},o.description))};oe.propTypes={src:c.a.string.isRequired,alt:c.a.string.isRequired,width:c.a.oneOfType([c.a.string,c.a.number]),height:c.a.oneOfType([c.a.string,c.a.number]),presentation:c.a.bool,a11y:c.a.shape({title:c.a.string,description:c.a.string})},oe.defaultProps={presentation:!1,a11y:null,width:"auto",height:"auto"};var ie=oe,ce=n(117),le=n.n(ce),se=function(e){var t=e.src,n=e.fallback;return a.a.createElement(le.a,{src:t},a.a.createElement(ie,{src:n,alt:"",presentation:!0}))};se.propTypes={src:c.a.string.isRequired,fallback:c.a.string.isRequired};var ue=se,pe=function(e){var t=e.classes,n=e.children;return a.a.createElement("div",{className:t.spot},n)};pe.propTypes={classes:c.a.object.isRequired,children:c.a.node.isRequired};var de=x()(function(e){return{spot:{borderColor:e.palette.background.default,borderStyle:"solid",borderWidth:1,display:"block",height:314,overflow:"hidden",position:"relative",width:"100%","& > img":{height:"auto",left:"50%",position:"relative",transform:"translateX(-50%)",width:"inherit",minHeight:"100%"}}}})(pe),fe=n(70),me=function(e){var t=e.classes,n=e.children;return a.a.createElement("div",{className:t.spotBar,tabIndex:"0",onFocus:function(e){e.target.classList.add("actived")},onBlur:function(e){e.target.classList.remove("actived")},role:"textbox"},a.a.createElement(m.a,{className:t.spotBarContent,padding:3},a.a.createElement("div",null,n)))};me.propTypes={classes:c.a.object.isRequired,children:c.a.node.isRequired};var he=x()(function(e){var t=e.palette;return{spotBar:{cursor:"pointer",height:"inherit",left:0,position:"absolute",top:0,width:"inherit",zIndex:2,"&.actived":{cursor:"default","& > $spotBarContent":{transform:"translateY(0)"}}},spotBarContent:{alignItems:"flex-end",backgroundColor:Object(fe.fade)(t.tar,.8),display:"flex",height:"inherit",left:0,position:"absolute",top:0,transform:"translateY(100%)",transition:"transform .2s",width:"inherit"}}})(me),ge=[{name:"Marina Limeira",occupation:"Software Engineer",description:"Natural de Alagoas, é engenheira no Nubank, contribuiu para projetos da Mozilla Brasil e organizou edições do Rails Girls.",photo:"/assets/images/speaker-marina-limeira.png",social:{twitter:"https://twitter.com/marinalimeira_",github:"https://github.com/marinalimeira",personal:"http://www.marinalimeira.com"}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}},{name:null,description:null,photo:"/assets/images/speaker.jpg",social:{twitter:"/",github:null,personal:null}}],be=function(){return a.a.createElement(N,{collapsed:!0},a.a.createElement(d.a,{container:!0},ge.map(function(e){var t=e.name,n=e.occupation,r=e.description,o=e.photo,i=e.social;return a.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:V()()},a.a.createElement(de,null,a.a.createElement(ie,{src:o,width:342,height:314,alt:"",presentation:!0}),r&&a.a.createElement(he,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(d.a,{container:!0,alignItems:"center",spacing:2},i.twitter&&a.a.createElement(d.a,{item:!0,xs:"auto"},a.a.createElement(U.a,{href:i.twitter,underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ue,{src:"/assets/images/social-media-twitter.svg",fallback:"/assets/images/social-media-twitter.png"}))),i.github&&a.a.createElement(d.a,{item:!0,xs:"auto"},a.a.createElement(U.a,{href:i.github,underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ue,{src:"/assets/images/social-media-github.svg",fallback:"/assets/images/social-media-twitter.png"}))),i.personal&&a.a.createElement(d.a,{item:!0,xs:"auto"},a.a.createElement(U.a,{href:i.personal,underline:"none",target:"_blank",rel:"noopener"},a.a.createElement(ue,{src:"/assets/images/social-media-site.svg",fallback:"/assets/images/social-media-twitter.png"}))))),a.a.createElement(f.a,{component:"h3",variant:"h6"},t),a.a.createElement(f.a,{component:"p",variant:"body2",paragraph:!0},n),a.a.createElement(f.a,{component:"p"},r))))})))},ye=function(){return a.a.createElement(N,null,a.a.createElement(Z,{component:"p",variant:"h4",paragraph:!0},"1 dia, 8 horas de conteúdo, 7 Talks, 2 Lightning Talks, 1 Keynote."),a.a.createElement(Z,{component:"p"},"Programação em breve."))},ve=[{href:"https://twitter.com/frontinsp",icon:{src:"/assets/images/social-media-twitter.svg",fallback:"/assets/images/social-media-twitter.png"},a11y:{description:"Abrir nossa página no Twitter"}},{href:"https://www.instagram.com/frontinsampa/",icon:{src:"/assets/images/social-media-instagram.svg",fallback:"/assets/images/social-media-instagram.png"},a11y:{description:"Abrir nossa página no Instagram"}},{href:"https://www.facebook.com/frontinsampa/",icon:{src:"/assets/images/social-media-facebook.svg",fallback:"/assets/images/social-media-facebook.png"},a11y:{description:"Abrir nossa página no Facebook"}},{href:"https://www.youtube.com/frontinsampa",icon:{src:"/assets/images/social-media-youtube.svg",fallback:"/assets/images/social-media-youtube.png"},a11y:{description:"Abrir nossa página no YouTube"}}],we=function(){return a.a.createElement(N,{component:"footer",title:"Contato",titleCustomColor:"nature"},a.a.createElement(m.a,{mb:4},a.a.createElement(d.a,{container:!0,alignItems:"center",spacing:4},ve.map(function(e){var t=e.href,n=e.icon,r=e.a11y;return a.a.createElement(d.a,{item:!0,xs:"auto",key:V()()},a.a.createElement(U.a,{href:t,target:"_blank",rel:"noopener",underline:"none","aria-label":r.description},a.a.createElement(ue,n)))}))),a.a.createElement(m.a,{mb:4},a.a.createElement(f.a,{component:"p",paragraph:!0,variant:"h3"},"Quer patrocinar, tirar dúvidas ou mandar sugestões?")),a.a.createElement(m.a,{mb:4},a.a.createElement(f.a,{component:"p",paragraph:!0,variant:"h4",style:{wordWrap:"break-word"}},a.a.createElement(U.a,{href:"mailto:contato@frontinsampa.com.br","aria-label":"Abrir e-mail com destinatário contato@frontinsampa.com.br",color:"inherit",underline:"none"},"contato@frontinsampa.com.br"))))},Ee=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null),a.a.createElement(ae,null),a.a.createElement(be,null),a.a.createElement(ye,null),a.a.createElement(we,null))},Oe=function(e){var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=C.a.apply(void 0,[{overrides:{}}].concat(t));return Object(D.a)(Object(I.a)(r))}(q,M[e]);return function(e){return function(n){var r=H({},n);return a.a.createElement(S.a,{theme:t},a.a.createElement(e,r))}}}("standard")(function(){return a.a.createElement(u,null,a.a.createElement(Ee,null))});Object(o.render)(a.a.createElement(Oe,null),document.getElementById("root"))}});