"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),c=n,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Release 50.2.1.1",authors:["marchbold"],tags:["airsdk","updates"]},s=void 0,o={permalink:"/news/2023/02/22/air-release",source:"@site/news/2023-02-22-air-release.md",title:"Release 50.2.1.1",description:"AIR SDK 50.2.1.1 has been released by Harman.",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:.975,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 50.2.1.1",authors:["marchbold"],tags:["airsdk","updates"]},prevItem:{title:"Release 50.2.2.1",permalink:"/news/2023/03/20/air-release"},nextItem:{title:"Release 33.1.1.929",permalink:"/news/2022/08/05/air-release"}},u={authorsImageUrls:[void 0]},l=[{value:"Features",id:"features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 50.2.1.1")," has been released by Harman.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/50.2.1.1/release-notes/Release_Notes_AIR_SDK_50.2.1.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/50.2.1.1"},"Download"),"  ")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-4357: AIR Android \u2013 adding ",(0,n.kt)("inlineCode",{parentName:"li"},"runtimeInBackgroundThread")," flag to app descriptor"),(0,n.kt)("li",{parentName:"ul"},"AIR-6386: Adding handlers for Developer ID Application certs for .air on macOS"),(0,n.kt)("li",{parentName:"ul"},"AIR-6424: Adding support for TCP_NODELAY via a host name flag"),(0,n.kt)("li",{parentName:"ul"},"AIR-6438: Adding support for content:// URIs on Android"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/956"},"github-956"),": Adding gradle dependencies sections to Android ANEs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2357"},"github-2357"),": Adding 'onRequestPermissionsResult' mechanism for Android ANEs to use"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2369"},"github-2369"),": Adding a package error if the macOS captive runtime is malformed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2417"},"github-2417"),": Building support for Apple tvOS applications"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2435"},"github-2435"),": Adding configuration file 'iPhoneSimulator' entry"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2467"},"github-2467"),": Adding Java FREByteArray setLength method"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2469"},"github-2469"),": Removing default Android INTERNET permission injection")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-5846: Remove A2712Enabler from SDK/runtime"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2208"},"github-2208"),": Allow activation of windows on Linux even if they aren\u2019t owner/owned"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2339"},"github-2339"),": Ensuring Win32 Webview classes move properly between stages"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2372"},"github-2372"),": Adding a default string for ",(0,n.kt)("inlineCode",{parentName:"li"},"NSLocationAlwaysAndWhenInUseUsageDescription")," in IPA info plist file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2375"},"github-2375"),": Fixing framework code resources in IPA signature"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2385"},"github-2385"),": Reverting FDB Worker workaround from - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/399"},"github-399")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2441"},"github-2441"),": Ensuring IPA framework packaging handles universal binaries without armv7")))}d.isMDXComponent=!0}}]);