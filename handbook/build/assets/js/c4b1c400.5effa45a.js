(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6931],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4171:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var a=t(4034),i=t(9973),r=(t(7294),t(3905)),l={id:"signalr",title:"24. \u5373\u65f6\u901a\u8baf",sidebar_label:"24. \u5373\u65f6\u901a\u8baf"},s={unversionedId:"signalr",id:"signalr",isDocsHomePage:!1,title:"24. \u5373\u65f6\u901a\u8baf",description:"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",source:"@site/docs/signalr.mdx",sourceDirName:".",slug:"/signalr",permalink:"/furion/docs/signalr",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/signalr.mdx",version:"current",lastUpdatedBy:"happy1836",lastUpdatedAt:1617416029,formattedLastUpdatedAt:"4/3/2021",sidebar_label:"24. \u5373\u65f6\u901a\u8baf",frontMatter:{id:"signalr",title:"24. \u5373\u65f6\u901a\u8baf",sidebar_label:"24. \u5373\u65f6\u901a\u8baf"},sidebar:"docs",previous:{title:"23. JSON \u5e8f\u5217\u5316",permalink:"/furion/docs/json-serialization"},next:{title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",permalink:"/furion/docs/process-service"}},o=[{value:"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",id:"241-\u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf",children:[]},{value:"24.2 \u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f",id:"242-\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f",children:[]},{value:"24.3 \u5173\u4e8e <code>SignalR</code>",id:"243-\u5173\u4e8e-signalr",children:[{value:"24.3.1 \u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd",id:"2431-\u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd",children:[]}]},{value:"24.4 \u6ce8\u518c <code>SignalR</code> \u670d\u52a1",id:"244-\u6ce8\u518c-signalr-\u670d\u52a1",children:[]},{value:"24.5 <code>SignalR</code> \u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668",id:"245-signalr-\u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668",children:[{value:"25.5.1 \u6301\u4e45\u6027\u8fde\u63a5",id:"2551-\u6301\u4e45\u6027\u8fde\u63a5",children:[]},{value:"24.5.2 \u96c6\u7ebf\u5668",id:"2452-\u96c6\u7ebf\u5668",children:[]}]},{value:"24.6 \u96c6\u7ebf\u5668 <code>Hub</code> \u5b9a\u4e49",id:"246-\u96c6\u7ebf\u5668-hub-\u5b9a\u4e49",children:[{value:"24.6.1 \u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f",id:"2461-\u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f",children:[]},{value:"24.6.2 <code>[MapHub]</code> \u914d\u7f6e\u8fde\u63a5\u5730\u5740",id:"2462-maphub-\u914d\u7f6e\u8fde\u63a5\u5730\u5740",children:[]},{value:"24.6.3 <code>Hub</code> \u6ce8\u518c\u66f4\u591a\u914d\u7f6e",id:"2463-hub-\u6ce8\u518c\u66f4\u591a\u914d\u7f6e",children:[]}]},{value:"24.7 \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1",id:"247-\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1",children:[{value:"24.7.1 \u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801",id:"2471-\u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801",children:[]},{value:"24.7.2 \u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef",id:"2472-\u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef",children:[]},{value:"24.7.3 \u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef",id:"2473-\u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef",children:[]},{value:"24.7.4 \u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef",id:"2474-\u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef",children:[]},{value:"24.7.5 \u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef",id:"2475-\u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef",children:[]},{value:"24.7.6 \u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef",id:"2476-\u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef",children:[]},{value:"24.7.7 \u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef",id:"2477-\u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef",children:[]},{value:"24.7.8 \u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef",id:"2478-\u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef",children:[]}]},{value:"24.8 \u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6",id:"248-\u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6",children:[]},{value:"24.9 \u5206\u7ec4\u7ba1\u7406",id:"249-\u5206\u7ec4\u7ba1\u7406",children:[]},{value:"24.10 \u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5 API",id:"2410-\u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5-api",children:[{value:"24.10.1 <code>Javascript</code> \u5ba2\u6237\u7aef",id:"24101-javascript-\u5ba2\u6237\u7aef",children:[]},{value:"24.10.2 <code>Typescript</code> \u5ba2\u6237\u7aef",id:"24102-typescript-\u5ba2\u6237\u7aef",children:[]},{value:"24.10.3 <code>.NET</code> \u5ba2\u6237\u7aef",id:"24103-net-\u5ba2\u6237\u7aef",children:[]},{value:"24.10.4 <code>Java</code> \u5ba2\u6237\u7aef",id:"24104-java-\u5ba2\u6237\u7aef",children:[]}]},{value:"24.11 \u5e38\u89c1\u4f8b\u5b50",id:"2411-\u5e38\u89c1\u4f8b\u5b50",children:[{value:"24.11.1 \u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001",id:"24111-\u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001",children:[]},{value:"24.11.2 \u5b9e\u73b0\u804a\u5929\u529f\u80fd",id:"24112-\u5b9e\u73b0\u804a\u5929\u529f\u80fd",children:[]},{value:"24.11.3 \u5b9e\u73b0 <code>\u4f60\u753b\u6211\u6765\u731c</code>",id:"24113-\u5b9e\u73b0-\u4f60\u753b\u6211\u6765\u731c",children:[]}]},{value:"24.12 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2412-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:o};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"241-\u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf"},"24.1 \u4ec0\u4e48\u662f\u5373\u65f6\u901a\u8baf"),(0,r.kt)("p",null,"\u5373\u65f6\u901a\u8baf\uff08Instant messaging\uff0c\u7b80\u79f0 IM\uff09\u901a\u5e38\u662f\u6307\u4e92\u8054\u7f51\u4e0a\u7528\u4ee5\u8fdb\u884c\u5b9e\u65f6\u901a\u8baf\u7684\u7cfb\u7edf\uff0c\u5141\u8bb8\u4e24\u4eba\u6216\u591a\u4eba\u4f7f\u7528\u7f51\u7edc\u5373\u65f6\u7684\u4f20\u9012\u6587\u5b57\u4fe1\u606f\u3001\u6587\u6863\u3001\u8bed\u97f3\u4e0e\u89c6\u9891\u4ea4\u6d41\u3002"),(0,r.kt)("p",null,"\u5373\u65f6\u901a\u8baf\u4e0d\u540c\u4e8e e-mail \u5728\u4e8e\u5b83\u7684\u4ea4\u8c08\u662f\u5b9e\u65f6\u7684\u3002\u5927\u90e8\u5206\u7684\u5373\u65f6\u901a\u8baf\u670d\u52a1\u63d0\u4f9b\u4e86\u72b6\u6001\u4fe1\u606f\u7684\u7279\u6027 \u2500\u2500 \u663e\u793a\u8054\u7edc\u4eba\u540d\u5355\uff0c\u8054\u7edc\u4eba\u662f\u5426\u5728\u7ebf\u4e0a\u4e0e\u80fd\u5426\u4e0e\u8054\u7edc\u4eba\u4ea4\u8c08\u3002"),(0,r.kt)("p",null,"\u5728\u4e92\u8054\u7f51\u4e0a\u76ee\u524d\u4f7f\u7528\u8f83\u5e7f\u7684\u5373\u65f6\u901a\u8baf\u670d\u52a1\u5305\u62ec Windows Live Messenger\u3001AOL Instant Messenger\u3001skype\u3001Yahoo! Messenger\u3001NET Messenger Service\u3001Jabber\u3001ICQ \u4e0e QQ \u7b49\u3002"),(0,r.kt)("h2",{id:"242-\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f"},"24.2 \u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5373\u65f6\u901a\u8baf\u5e94\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u9700\u8981\u5b9e\u65f6\u4ea4\u4e92\u6d88\u606f\u7684\u90fd\u9700\u8981\u3002\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u804a\u5929\u5de5\u5177\uff1aQQ\u3001WeChat\u3001\u5728\u7ebf\u5ba2\u670d\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u624b\u6e38\u7f51\u6e38\uff1a\u738b\u8005\u8363\u8000\u3001\u9b54\u517d\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u76f4\u64ad\uff1a\u817e\u8baf\u8bfe\u5802\u3001\u6296\u97f3\u76f4\u64ad\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u63a8\u9001\uff1a\u7f8e\u56e2\u3001\u9910\u996e\u4e0b\u5355\u7cfb\u7edf\u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u534f\u540c\u529e\u516c\uff1a\u516c\u53f8\u5185\u90e8\u6587\u4ef6\u5206\u4eab\u3001\u5de5\u4f5c\u5b89\u6392\u3001\u5728\u7ebf\u4f1a\u8bae\u7b49\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u53ea\u662f\u5217\u4e3e\u4e86\u6bd4\u8f83\u5e38\u7528\u7684\u5e94\u7528\u573a\u666f\uff0c\u4f46\u5373\u65f6\u901a\u8baf\u7684\u4f5c\u7528\u8fdc\u4e0d\u6b62\u4e8e\u6b64\u3002"),(0,r.kt)("p",null,"\u6587\u6863\u7d27\u6025\u7f16\u5199\u4e2d\uff0c\u53ef\u4ee5\u5148\u770b\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0"},"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0")),(0,r.kt)("h2",{id:"243-\u5173\u4e8e-signalr"},"24.3 \u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h2"},"SignalR")),(0,r.kt)("p",null,"\u5373\u65f6\u901a\u8baf\u6280\u672f\u5b9e\u73b0\u662f\u590d\u6742\u4e14\u8fc7\u4e8e\u5e95\u5c42\u5316\uff0c\u6240\u4ee5\u5fae\u8f6f\u4e3a\u4e86\u7b80\u5316\u5373\u65f6\u901a\u8baf\u5e94\u7528\u7a0b\u5e8f\uff0c\u5f00\u53d1\u51fa\u4e86\u4e00\u4e2a\u5f3a\u5927\u4e14\u7b80\u6613\u4f7f\u7528\u7684\u901a\u4fe1\u5e93\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR"),"\uff0c\u901a\u8fc7\u8be5\u5e93\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u7c7b\u4f3c QQ\u3001\u5fae\u4fe1\u8fd9\u7c7b IM \u804a\u5929\u5de5\u5177\uff0c\u4e5f\u80fd\u5feb\u901f\u5b9e\u73b0\u6d88\u606f\u63a8\u9001\u3001\u8ba2\u5355\u63a8\u9001\u8fd9\u6837\u7684\u7cfb\u7edf\u3002"),(0,r.kt)("h3",{id:"2431-\u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd"},"24.3.1 \u5fae\u8f6f\u5b98\u65b9\u4ecb\u7ecd"),(0,r.kt)("p",null,"ASP.NET Core SignalR \u662f\u4e00\u79cd\u5f00\u653e\u6e90\u4ee3\u7801\u5e93\uff0c\u53ef\u7b80\u5316\u5c06\u5b9e\u65f6 web \u529f\u80fd\u6dfb\u52a0\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u80fd\u3002 \u5b9e\u65f6 web \u529f\u80fd\u4f7f\u670d\u52a1\u5668\u7aef\u4ee3\u7801\u53ef\u4ee5\u7acb\u5373\u5c06\u5185\u5bb9\u63a8\u9001\u5230\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e SignalR \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ece\u670d\u52a1\u5668\u8fdb\u884c\u9ad8\u9891\u7387\u66f4\u65b0\u7684\u5e94\u7528\u3002 \u793a\u4f8b\u5305\u62ec\u6e38\u620f\u3001\u793e\u4ea4\u7f51\u7edc\u3001\u6295\u7968\u3001\u62cd\u5356\u3001\u5730\u56fe\u548c GPS \u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4eea\u8868\u677f\u548c\u76d1\u89c6\u5e94\u7528\u3002 \u793a\u4f8b\u5305\u62ec\u516c\u53f8\u4eea\u8868\u677f\u3001\u5373\u65f6\u9500\u552e\u66f4\u65b0\u6216\u65c5\u884c\u8b66\u62a5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u534f\u4f5c\u5e94\u7528\u3002 \u534f\u4f5c\u5e94\u7528\u7684\u793a\u4f8b\u5305\u62ec\u767d\u677f\u5e94\u7528\u548c\u56e2\u961f\u4f1a\u8bae\u8f6f\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u901a\u77e5\u7684\u5e94\u7528\u3002 \u793e\u4ea4\u7f51\u7edc\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u804a\u5929\u3001\u6e38\u620f\u3001\u65c5\u884c\u8b66\u62a5\u548c\u5f88\u591a\u5176\u4ed6\u5e94\u7528\u90fd\u9700\u4f7f\u7528\u901a\u77e5\u3002")),(0,r.kt)("p",null,"\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u5df2\u7ecf\u5185\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 5 SDK")," \u4e2d\u3002\u540c\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web\u3001App\u3001Console\u3001Desktop")," \u7b49\u591a\u4e2a\u5e94\u7528\u5e73\u53f0\u3002"),(0,r.kt)("h2",{id:"244-\u6ce8\u518c-signalr-\u670d\u52a1"},"24.4 \u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"h2"},"SignalR")," \u670d\u52a1"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u4efb\u4f55\u670d\u52a1\u529f\u80fd\u90fd\u9700\u8981\u5148\u6ce8\u518c\u540e\u518d\u4f7f\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u4e5f\u4e0d\u4f8b\u5916\u3002\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0\u6ce8\u518c\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,15,22,25}","{1,15,22,25}":!0},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Core\n{\n    public sealed class Startup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u5176\u4ed6\u4ee3\u7801...\n\n            // \u6dfb\u52a0\u5373\u65f6\u901a\u8baf\n            services.AddSignalR();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            // \u5176\u4ed6\u4ee3\u7801...\n\n            app.UseEndpoints(endpoints =>\n            {\n                // \u6ce8\u518c\u96c6\u7ebf\u5668\n                endpoints.MapHubs();\n\n                endpoints.MapControllerRoute(\n                    name: "default",\n                    pattern: "{controller=Home}/{action=Index}/{id?}");\n            });\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"245-signalr-\u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668"},"24.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"SignalR")," \u957f\u8fde\u63a5\u548c\u96c6\u7ebf\u5668"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u5305\u542b\u4e24\u79cd\u7528\u4e8e\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u7684\u6a21\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6301\u4e45\u6027\u8fde\u63a5"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u96c6\u7ebf\u5668")," \u4e2d\u5fc3\u3002"),(0,r.kt)("h3",{id:"2551-\u6301\u4e45\u6027\u8fde\u63a5"},"25.5.1 \u6301\u4e45\u6027\u8fde\u63a5"),(0,r.kt)("p",null,"\u8fde\u63a5\u8868\u793a\u7528\u4e8e\u53d1\u9001\u5355\u63a5\u6536\u65b9\u3001\u5206\u7ec4\u6216\u5e7f\u64ad\u6d88\u606f\u7684\u7b80\u5355\u7ec8\u7ed3\u70b9\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6301\u4e45\u6027\u8fde\u63a5")," (\u5728 .NET \u4ee3\u7801\u4e2d\u7531 PersistentConnection \u7c7b\u8868\u793a) \u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u76f4\u63a5\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u516c\u5f00\u7684\u4f4e\u7ea7\u522b\u901a\u4fe1\u534f\u8bae\u3002 \u4f7f\u7528\u57fa\u4e8e\u8fde\u63a5\u7684 Api \uff08\u5982 Windows Communication Foundation\uff09\u7684\u5f00\u53d1\u4eba\u5458\u5c06\u5bf9\u4f7f\u7528\u8fde\u63a5\u901a\u4fe1\u6a21\u578b\u975e\u5e38\u719f\u6089\u3002"),(0,r.kt)("h3",{id:"2452-\u96c6\u7ebf\u5668"},"24.5.2 \u96c6\u7ebf\u5668"),(0,r.kt)("p",null,"\u96c6\u7ebf\u5668\u662f\u4e00\u79cd\u57fa\u4e8e\u8fde\u63a5 API \u6784\u5efa\u7684\u66f4\u9ad8\u7ea7\u522b\u7ba1\u9053\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b83\u5141\u8bb8\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u76f4\u63a5\u8c03\u7528\u65b9\u6cd5"),"\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u5c31\u50cf\u9b54\u672f\u4e00\u6837\u5904\u7406\u8de8\u673a\u5668\u8fb9\u754c\u7684\u8c03\u5ea6\uff0c\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u50cf\u672c\u5730\u65b9\u6cd5\u4e00\u6837\u8f7b\u677e\u5730\u8c03\u7528\u670d\u52a1\u5668\u4e0a\u7684\u65b9\u6cd5\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002 \u5982\u679c\u5f00\u53d1\u4eba\u5458\u5df2\u4f7f\u7528\u8fdc\u7a0b\u8c03\u7528 \uff08\u5982 .NET \u8fdc\u7a0b\u5904\u7406\uff09\uff0c\u5219\u5c06\u5bf9\u4f7f\u7528\u4e2d\u5fc3\u901a\u4fe1\u6a21\u578b\u975e\u5e38\u719f\u6089\u3002 \u4f7f\u7528\u96c6\u7ebf\u5668\u8fd8\u53ef\u4ee5\u5c06\u5f3a\u7c7b\u578b\u53c2\u6570\u4f20\u9012\u7ed9\u65b9\u6cd5\uff0c\u4ece\u800c\u542f\u7528\u6a21\u578b\u7ed1\u5b9a\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5c0f\u77e5\u8bc6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6301\u4e45\u6027\u8fde\u63a5")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u96c6\u7ebf\u5668\u4e2d\u5fc3")," \u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/signalr/overview/getting-started/introduction-to-signalr#connections-and-hubs"},"SignalR \u5b98\u65b9\u6587\u6863")))),(0,r.kt)("h2",{id:"246-\u96c6\u7ebf\u5668-hub-\u5b9a\u4e49"},"24.6 \u96c6\u7ebf\u5668 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Hub")," \u5b9a\u4e49"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u672c\u7ae0\u8282\u4e2d\u4e3b\u8981\u63a8\u8350\u4f7f\u7528\u96c6\u7ebf\u5668\u901a\u4fe1\u6a21\u578b\u65b9\u5f0f\u3002"),"\u8fd9\u91cc\u4e3b\u8981\u8bf4\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," \u5b9a\u4e49\uff0c\u5982\u679c\u65e0\u6cd5\u7406\u89e3\u8be5\u901a\u4fe1\u6a21\u578b\u7684\u4f5c\u7528\u4e5f\u6ca1\u5173\u7cfb\uff0c\u63a5\u4e0b\u6765\u7684\u4f8b\u5b50\u4f1a\u5e26\u5927\u5bb6\u6162\u6162\u719f\u6089\u5e76\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"2461-\u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f"},"24.6.1 \u4e24\u79cd\u5b9a\u4e49\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5b9a\u4e49\u96c6\u7ebf\u5668\u53ea\u9700\u8981\u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub<TStrongType>")," \u6cdb\u578b\u57fa\u7c7b\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hub")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{9}","{9}":!0},'using Furion.InstantMessaging;\nusing Microsoft.AspNetCore.SignalR;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u804a\u5929\u96c6\u7ebf\u5668\n    /// </summary>\n    public class ChatHub : Hub\n    {\n        // \u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\n        public Task SendMessage(string user, string message)\n        {\n            // \u89e6\u53d1\u5ba2\u6237\u7aef\u5b9a\u4e49\u76d1\u542c\u7684\u65b9\u6cd5\n            return Clients.All.SendAsync("ReceiveMessage", user, message);\n        }\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hub<TStrongType>")," \u7c7b\u578b\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IChatClient\n{\n    Task ReceiveMessage(string user, string message);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},"public class StronglyTypedChatHub : Hub<IChatClient>\n{\n    // \u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u4f9b\u5ba2\u6237\u7aef\u8c03\u7528\n    public async Task SendMessage(string user, string message)\n    {\n        // \u89e6\u53d1\u5ba2\u6237\u7aef\u5b9a\u4e49\u76d1\u542c\u7684\u65b9\u6cd5\n        await Clients.All.ReceiveMessage(user, message);\n    }\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub<IChatClient>")," \u53ef\u4ee5\u5bf9\u5ba2\u6237\u7aef\u65b9\u6cd5\u8fdb\u884c\u7f16\u8bd1\u65f6\u68c0\u67e5\u3002 \u8fd9\u53ef\u4ee5\u9632\u6b62\u7531\u4e8e\u4f7f\u7528\u795e\u5947\u5b57\u7b26\u4e32\u800c\u5bfc\u81f4\u7684\u95ee\u9898\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub<T>")," \u53ea\u80fd\u63d0\u4f9b\u5bf9\u5728\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u7684\u8bbf\u95ee\u3002"),(0,r.kt)("h3",{id:"2462-maphub-\u914d\u7f6e\u8fde\u63a5\u5730\u5740"},"24.6.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"[MapHub]")," \u914d\u7f6e\u8fde\u63a5\u5730\u5740"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u5e93\u4e2d\u8981\u6c42\u6bcf\u4e00\u4e2a\u516c\u5f00\u7684\u96c6\u7ebf\u5668\u90fd\u9700\u8981\u914d\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"[MapHub]")," \u914d\u7f6e\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,11}","{1,11}":!0},'using Furion.InstantMessaging;\nusing Microsoft.AspNetCore.SignalR;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u804a\u5929\u96c6\u7ebf\u5668\n    /// </summary>\n    [MapHub("/hubs/chathub")]\n    public class ChatHub : Hub\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"SignalR")," \u539f\u751f\u914d\u7f6e\u65b9\u5f0f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[MapHub]")," \u65b9\u5f0f\u914d\u7f6e\u96c6\u7ebf\u5668\u5ba2\u6237\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u63d0\u4f9b\u7684\u65b9\u5f0f\uff0c\u5982\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{10}","{10}":!0},'public sealed class Startup : AppStartup\n{\n   // \u5176\u4ed6\u4ee3\u7801\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        // \u5176\u4ed6\u4ee3\u7801...\n        app.UseEndpoints(endpoints =>\n        {\n            // \u6ce8\u518c\u96c6\u7ebf\u5668\n            endpoints.MapHub<ChatHub>("/hubs/chathub");\n        });\n    }\n}\n')))),(0,r.kt)("h3",{id:"2463-hub-\u6ce8\u518c\u66f4\u591a\u914d\u7f6e"},"24.6.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Hub")," \u6ce8\u518c\u66f4\u591a\u914d\u7f6e"),(0,r.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," \u65f6\u914d\u7f6e\u66f4\u591a\u53c2\u6570\uff0c\u6bd4\u5982\u6743\u9650\u3001\u8de8\u57df\u7b49\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," \u6d3e\u751f\u7c7b\u4e2d\u7f16\u5199\u4ee5\u4e0b\u9759\u6001\u65b9\u6cd5\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,8,13,18}","{1,8,13,18}":!0},'using Furion.InstantMessaging;\nusing Microsoft.AspNetCore.SignalR;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace Furion.Core\n{\n    [MapHub("/hubs/chathub")]\n    public class ChatHub : Hub\n    {\n        // \u5176\u4ed6\u4ee3\u7801\n\n        public static void HttpConnectionDispatcherOptionsSettings(HttpConnectionDispatcherOptions options)\n        {\n            // \u914d\u7f6e\n        }\n\n        public static void HubEndpointConventionBuilderSettings(HubEndpointConventionBuilder Builder)\n        {\n            // \u914d\u7f6e\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'app.UseEndpoints(endpoints =>\n{\n    var builder = endpoints.MapHub<ChatHub>("/hubs/chathub", options =>\n       {\n           // \u914d\u7f6e\n       });\n});\n')),(0,r.kt)("h2",{id:"247-\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1"},"24.7 \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u53cc\u5de5\u901a\u4fe1"),(0,r.kt)("h3",{id:"2471-\u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801"},"24.7.1 \u89e6\u53d1\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Clients.All.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n")),(0,r.kt)("h3",{id:"2472-\u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef"},"24.7.2 \u89e6\u53d1\u8c03\u7528\u8005\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Clients.Caller.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n")),(0,r.kt)("h3",{id:"2473-\u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef"},"24.7.3 \u89e6\u53d1\u9664\u4e86\u8c03\u7528\u8005\u4ee5\u5916\u7684\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Clients.Others.\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n")),(0,r.kt)("h3",{id:"2474-\u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef"},"24.7.4 \u89e6\u53d1\u7279\u5b9a\u7528\u6237\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Clients.User("\u7528\u6237").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n')),(0,r.kt)("h3",{id:"2475-\u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef"},"24.7.5 \u89e6\u53d1\u591a\u4e2a\u7528\u6237\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Clients.Users("\u7528\u6237","\u7528\u62372",...).\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n')),(0,r.kt)("h3",{id:"2476-\u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef"},"24.7.6 \u89e6\u53d1\u5206\u7ec4\u5185\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Clients.Group("\u5206\u7ec4").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n')),(0,r.kt)("h3",{id:"2477-\u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef"},"24.7.7 \u89e6\u53d1\u591a\u4e2a\u5206\u7ec4\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Clients.Groups("\u5206\u7ec4","\u5206\u7ec42",...).\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n')),(0,r.kt)("h3",{id:"2478-\u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef"},"24.7.8 \u89e6\u53d1\u5206\u7ec4\u5916\u7684\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'Clients.GroupExcept("\u5206\u7ec4").\u5ba2\u6237\u7aef\u65b9\u6cd5(\u53c2\u6570);\n')),(0,r.kt)("h2",{id:"248-\u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6"},"24.8 \u81ea\u5b9a\u4e49\u7528\u6237\u552f\u4e00\u6807\u8bc6"),(0,r.kt)("h2",{id:"249-\u5206\u7ec4\u7ba1\u7406"},"24.9 \u5206\u7ec4\u7ba1\u7406"),(0,r.kt)("h2",{id:"2410-\u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5-api"},"24.10 \u5404\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5 API"),(0,r.kt)("h3",{id:"24101-javascript-\u5ba2\u6237\u7aef"},"24.10.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Javascript")," \u5ba2\u6237\u7aef"),(0,r.kt)("h3",{id:"24102-typescript-\u5ba2\u6237\u7aef"},"24.10.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Typescript")," \u5ba2\u6237\u7aef"),(0,r.kt)("h3",{id:"24103-net-\u5ba2\u6237\u7aef"},"24.10.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},".NET")," \u5ba2\u6237\u7aef"),(0,r.kt)("h3",{id:"24104-java-\u5ba2\u6237\u7aef"},"24.10.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Java")," \u5ba2\u6237\u7aef"),(0,r.kt)("h2",{id:"2411-\u5e38\u89c1\u4f8b\u5b50"},"24.11 \u5e38\u89c1\u4f8b\u5b50"),(0,r.kt)("h3",{id:"24111-\u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001"},"24.11.1 \u5b9e\u73b0\u6d88\u606f\u5e7f\u64ad\u3001\u63a8\u9001"),(0,r.kt)("p",null,"\u6574\u7406\u4e2d..."),(0,r.kt)("h3",{id:"24112-\u5b9e\u73b0\u804a\u5929\u529f\u80fd"},"24.11.2 \u5b9e\u73b0\u804a\u5929\u529f\u80fd"),(0,r.kt)("p",null,"\u6574\u7406\u4e2d..."),(0,r.kt)("h3",{id:"24113-\u5b9e\u73b0-\u4f60\u753b\u6211\u6765\u731c"},"24.11.3 \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u4f60\u753b\u6211\u6765\u731c")),(0,r.kt)("p",null,"\u6574\u7406\u4e2d..."),(0,r.kt)("h2",{id:"2412-\u53cd\u9988\u4e0e\u5efa\u8bae"},"24.12 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"SignalR")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/signalr/"},"SignalR \u5b98\u65b9\u6587\u6863")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/signalr/introduction?view=aspnetcore-5.0"},"ASP.NET Core SignalR")," \u7ae0\u8282\u3002"))))}d.isMDXComponent=!0}}]);