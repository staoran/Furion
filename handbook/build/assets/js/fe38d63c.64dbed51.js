(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6073],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},227:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var i=t(4034),r=t(9973),a=(t(7294),t(3905)),l={id:"appsettings",title:"1. \u5e94\u7528\u914d\u7f6e",sidebar_label:"1. \u5e94\u7528\u914d\u7f6e"},o={unversionedId:"settings/appsettings",id:"settings/appsettings",isDocsHomePage:!1,title:"1. \u5e94\u7528\u914d\u7f6e",description:"1.1 \u5173\u4e8e\u914d\u7f6e",source:"@site/docs/settings/appsettings.mdx",sourceDirName:"settings",slug:"/settings/appsettings",permalink:"/furion/docs/settings/appsettings",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/settings/appsettings.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1620981798,formattedLastUpdatedAt:"5/14/2021",sidebar_label:"1. \u5e94\u7528\u914d\u7f6e",frontMatter:{id:"appsettings",title:"1. \u5e94\u7528\u914d\u7f6e",sidebar_label:"1. \u5e94\u7528\u914d\u7f6e"},sidebar:"settings",next:{title:"2. \u8de8\u57df\u914d\u7f6e",permalink:"/furion/docs/settings/corsaccessorsettings"}},p=[{value:"1.1 \u5173\u4e8e\u914d\u7f6e",id:"11-\u5173\u4e8e\u914d\u7f6e",children:[]},{value:"1.2 \u914d\u7f6e\u4fe1\u606f",id:"12-\u914d\u7f6e\u4fe1\u606f",children:[]},{value:"1.3 \u914d\u7f6e\u793a\u4f8b",id:"13-\u914d\u7f6e\u793a\u4f8b",children:[]},{value:"1.4 \u7279\u522b\u6ce8\u610f",id:"14-\u7279\u522b\u6ce8\u610f",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"11-\u5173\u4e8e\u914d\u7f6e"},"1.1 \u5173\u4e8e\u914d\u7f6e"),(0,a.kt)("p",null,"\u5e94\u7528\u914d\u7f6e\u6307\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5168\u5c40\u914d\u7f6e\u9009\u9879\u3002"),(0,a.kt)("h2",{id:"12-\u914d\u7f6e\u4fe1\u606f"},"1.2 \u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppSettings"),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InjectMiniProfiler"),"\uff1a\u662f\u5426\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"MiniProfiler"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5173\u95ed Swagger \u5de6\u4e0a\u89d2\u76d1\u542c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EnabledDistributedMemoryCache"),"\uff1a\u662f\u5426\u542f\u7528\u5206\u5e03\u5f0f\u5185\u5b58\u7f13\u5b58\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u542f\u7528\u4e86 Redis \u5efa\u8bae\u5173\u95ed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InjectSpecificationDocument"),"\uff1a\u662f\u5426\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Swagger")," \u6587\u6863\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u53ef\u5173\u95ed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EnabledReferenceAssemblyScan"),"\uff1a\u662f\u5426\u542f\u7528\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"dll")," \u65b9\u5f0f\u6dfb\u52a0\u7684\u5f15\u7528\u7a0b\u5e8f\u96c6\u626b\u63cf\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExternalAssemblies"),"\uff1a\u914d\u7f6e\u5916\u90e8\u7a0b\u5e8f\u96c6\u5b8c\u6574\u8def\u5f84\uff0c\u652f\u6301\u52a8\u6001\u52a0\u8f7d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PrintDbConnectionInfo"),"\uff1a\u662f\u5426\u6253\u5370\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"MiniProfiler")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SupportPackageNamePrefixs"),"\uff1a\u914d\u7f6e\u652f\u6301\u7684\u5305\u524d\u7f00\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EnabledFileProviderSystem"),"\uff1a\u662f\u5426\u542f\u7528\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u8131\u654f\u5904\u7406\u4f9d\u8d56\u6b64\u914d\u7f6e"))))),(0,a.kt)("h2",{id:"13-\u914d\u7f6e\u793a\u4f8b"},"1.3 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AppSettings": {\n    "InjectMiniProfiler": false\n  }\n}\n')),(0,a.kt)("h2",{id:"14-\u7279\u522b\u6ce8\u610f"},"1.4 \u7279\u522b\u6ce8\u610f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u81ea\u52a8\u626b\u63cf ",(0,a.kt)("inlineCode",{parentName:"p"},"*.json")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"*.config.xml")," \u6587\u4ef6\u8f7d\u5165\u914d\u7f6e\u4e2d\uff0c\u5982\u9700\u5ffd\u7565\u4e2a\u522b\u6587\u4ef6\uff0c\u9700\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u914d\u7f6e\u6587\u4ef6\u6839\u8282\u70b9\u4e0b\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"IgnoreConfigurationFiles")," \u8282\u70b9\u5373\u53ef\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"string[]")," \u7c7b\u578b\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "IgnoreConfigurationFiles": ["runtime.json"]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"appsettings.json")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u624d\u6709\u6548")))}u.isMDXComponent=!0}}]);