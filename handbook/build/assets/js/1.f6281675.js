(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{215:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var r=n(245);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(246);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var a=n(264);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return a.useAlternatePageUtils}});var i=n(265);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return i.parseCodeBlockTitle}});var u=n(266);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return u.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return u.DEFAULT_SEARCH_TAG}});var s=n(247);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var c=n(270);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var l=n(271);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=n(272);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=n(273);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var p=n(248);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return p.DocsPreferredVersionContextProvider}});var g=n(276);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return g.ThemeClassNames}})},217:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(12),i=n(26),u=n(8);const s=Object(r.createContext)({collectLink:()=>{}});var c=n(10);t.a=function({isNavLink:e,to:t,href:n,activeClassName:l,isActive:f,"data-noBrokenLinkCheck":d,autoAddBaseUrl:p=!0,...g}){var v;const{withBaseUrl:m}=Object(c.b)(),b=Object(r.useContext)(s),h=t||n,y=Object(i.a)(h),P=null==h?void 0:h.replace("pathname://",""),_=void 0!==P?(w=P,p&&(e=>e.startsWith("/"))(w)?m(w):w):void 0;var w;const D=Object(r.useRef)(!1),O=e?a.e:a.c,j=u.a.canUseIntersectionObserver;let S;Object(r.useEffect)(()=>(!j&&y&&null!=_&&window.docusaurus.prefetch(_),()=>{j&&S&&S.disconnect()}),[_,j,y]);const A=null!==(v=null==_?void 0:_.startsWith("#"))&&void 0!==v&&v,V=!_||!y||A;return _&&y&&!A&&!d&&b.collectLink(_),V?o.a.createElement("a",Object.assign({href:_},h&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(O,Object.assign({},g,{onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,n;j&&e&&y&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},S=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())})}),S.observe(t))},to:_||""},e&&{isActive:f,activeClassName:l}))}},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);const a=/{\w+}/g,i="{}";function u(e,t){const n=[],r=e.replace(a,e=>{const r=e.substr(1,e.length-2),a=null==t?void 0:t[r];if(void 0!==a){const e=o.a.isValidElement(a)?a:String(a);return n.push(e),i}return e});return 0===n.length?e:n.every(e=>"string"==typeof e)?r.split(i).reduce((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")},""):r.split(i).reduce((e,t,r)=>[...e,o.a.createElement(o.a.Fragment,{key:r},t,n[r])],[])}function s({children:e,values:t}){return u(e,t)}var c=n(28);function l({id:e,message:t}){var n;return null!==(n=c[null!=e?e:t])&&void 0!==n?n:t}function f({message:e,id:t},n){var r;return u(null!==(r=l({message:e,id:t}))&&void 0!==r?r:e,n)}function d({children:e,id:t,values:n}){var r;const a=null!==(r=l({message:e,id:t}))&&void 0!==r?r:e;return o.a.createElement(s,{values:n},a)}},223:function(e,t,n){try{e.exports=n(267)}catch(r){const t={};e.exports={useAllDocsData:()=>t,useActivePluginAndVersion:()=>{}}}},228:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return a})),n.d(t,"__rest",(function(){return i})),n.d(t,"__decorate",(function(){return u})),n.d(t,"__param",(function(){return s})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return f})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return g})),n.d(t,"__read",(function(){return v})),n.d(t,"__spread",(function(){return m})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__spreadArray",(function(){return h})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return P})),n.d(t,"__asyncDelegator",(function(){return _})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return D})),n.d(t,"__importStar",(function(){return j})),n.d(t,"__importDefault",(function(){return S})),n.d(t,"__classPrivateFieldGet",(function(){return A})),n.d(t,"__classPrivateFieldSet",(function(){return V}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function s(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function h(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function P(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(s,c):l(a[0][2],n)}catch(r){l(a[0][3],r)}var n}function s(e){u("next",e)}function c(e){u("throw",e)}function l(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=g(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return O(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function A(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function V(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(25),i=n(216),u=n(10);function s({title:e,description:t,keywords:n,image:r}){const{image:s}=Object(i.useThemeConfig)(),c=Object(i.useTitleFormatter)(e),l=Object(u.a)(r||s,{absolute:!0});return o.a.createElement(a.a,null,o.a.createElement("title",null,c),o.a.createElement("meta",{property:"og:title",content:c}),t&&o.a.createElement("meta",{name:"description",content:t}),t&&o.a.createElement("meta",{property:"og:description",content:t}),n&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),l&&o.a.createElement("meta",{property:"og:image",content:l}),l&&o.a.createElement("meta",{name:"twitter:image",content:l}),l&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const r=n(228).__importDefault(n(11));t.useThemeConfig=function(){return r.default().siteConfig.themeConfig}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;function r(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(n){return t=n,o||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),o=!0),null}var t}let o=!1;const a={get:()=>null,set:()=>{},del:()=>{}};t.createStorageSlot=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key=${e}.\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=r(null==t?void 0:t.persistence);return null===n?a:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}},t.listStorageKeys=function(e="localStorage"){const t=r(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(223);t.isDocsPluginEnabled=!!r.useAllDocsData},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const r=n(228),o=r.__importStar(n(0)),a=n(245),i=n(247),u=n(223),s=r.__importDefault(n(274));function c({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach(e=>{r[e]=function(e){const r=s.default.read(e,t);return n[e].versions.some(e=>e.name===r)?{preferredVersionName:r}:(s.default.clear(e,t),{preferredVersionName:null})}(e)}),r}function l(){const e=u.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,n=o.useMemo(()=>Object.keys(e),[e]),[r,i]=o.useState(()=>function(e){const t={};return e.forEach(e=>{t[e]={preferredVersionName:null}}),t}(n));o.useEffect(()=>{i(c({allDocsData:e,versionPersistence:t,pluginIds:n}))},[e,t,n]);return[r,o.useMemo(()=>({savePreferredVersion:function(e,n){s.default.save(e,t,n),i(t=>({...t,[e]:{preferredVersionName:n}}))}}),[i])]}const f=o.createContext(null);function d({children:e}){const t=l();return o.default.createElement(f.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return i.isDocsPluginEnabled?o.default.createElement(d,null,e):o.default.createElement(o.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;const r=n(228).__importDefault(n(11)),o=n(23);t.useAlternatePageUtils=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:a}}=r.default(),{pathname:i}=o.useLocation(),u=a===n?e:e.replace(`/${a}/`,"/"),s=i.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?""+u:`${u}${e}/`}(e)}${s}`}}}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;const r=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(r))||void 0===t?void 0:t[2])&&void 0!==n?n:""}},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(23),o=n(268),a=n(269);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs");t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return a.getActivePlugin(n,o,e)};t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return a.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return a.getActiveVersion(n,o)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return a.getActiveDocContext(n,o)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return a.getDocVersionSuggestions(n,o)}},268:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return i}));var r=n(11);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){const t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t="default"){const n=a(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(23);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find(([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map(e=>e.path).join(", ")}`);return a};t.getLatestVersion=e=>e.versions.find(e=>e.isLast);t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter(e=>e!==o),o].find(e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1}))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),a=null==o?void 0:o.docs.find(e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1}));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach(e=>{e.docs.forEach(r=>{r.id===t&&(n[e.name]=r)})}),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:e+"/";return n(e)===n(t)}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const r=n(228).__importDefault(n(11));t.useTitleFormatter=e=>{const{siteConfig:t={}}=r.default(),{title:n,titleDelimiter:o="|"}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;const r=n(228),o=n(0),a=r.__importDefault(n(11)),i=["zero","one","two","few","many","other"];function u(e){return i.filter(t=>e.includes(t))}const s={locale:"en",pluralForms:u(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=a.default();return o.useMemo(()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:u(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale=${e}.\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),s}},[e])}t.usePluralForm=function(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}}(n,t,e)}}},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(248),a=n(223),i=n(275);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=a.useDocsData(e),[n,u]=o.useDocsPreferredVersionContext(),{preferredVersionName:s}=n[e];return{preferredVersion:s?t.versions.find(e=>e.name===s):null,savePreferredVersionName:r.useCallback(t=>{u.savePreferredVersion(e,t)},[u])}},t.useDocsPreferredVersionByPluginId=function(){const e=a.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach(n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find(e=>e.name===o):null}(n)}),r}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(246),o=e=>"docs-preferred-version-"+e,a={save:(e,t,n)=>{r.createStorageSlot(o(e),{persistence:t}).set(n)},read:(e,t)=>r.createStorageSlot(o(e),{persistence:t}).get(),clear:(e,t)=>{r.createStorageSlot(o(e),{persistence:t}).del()}};t.default=a},275:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}}}]);