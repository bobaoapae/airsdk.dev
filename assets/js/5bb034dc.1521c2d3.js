"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"windows",sidebar_position:7},l=void 0,a={unversionedId:"building/application-descriptor-files/elements/windows",id:"building/application-descriptor-files/elements/windows",title:"windows",description:"The windows element provides platform-specific settings for applications running on the Windows operating systems. It can contain the following optional elements.",source:"@site/docs/building/application-descriptor-files/elements/windows.md",sourceDirName:"building/application-descriptor-files/elements",slug:"/building/application-descriptor-files/elements/windows",permalink:"/docs/building/application-descriptor-files/elements/windows",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/application-descriptor-files/elements/windows.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"windows",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"macOS",permalink:"/docs/building/application-descriptor-files/elements/macOS"},next:{title:"Application Descriptor File Structure",permalink:"/docs/building/application-descriptor-files/file-structure"}},s={},p=[{value:"Elements",id:"elements",level:2},{value:"<code>UseWebView2</code>",id:"usewebview2",level:3},{value:"<code>maxD3D</code>",id:"maxd3d",level:3},{value:"<code>clipboardFullHTML</code>",id:"clipboardfullhtml",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"windows")," element provides platform-specific settings for applications running on the Windows operating systems. It can contain the following optional elements."),(0,r.kt)("h2",{id:"elements"},"Elements"),(0,r.kt)("h3",{id:"usewebview2"},(0,r.kt)("inlineCode",{parentName:"h3"},"UseWebView2")),(0,r.kt)("p",null,"(optional)"),(0,r.kt)("p",null,"Available: 33.1.1.620"),(0,r.kt)("p",null,'Requests the runtime to try creating a Microsoft Edge "WebView2" component, rather than the IE-based "WebBrowser" control, when a native ',(0,r.kt)("inlineCode",{parentName:"p"},"StageWebView")," element is created."),(0,r.kt)("p",null,"This component will need to be present on an end user's computer before this works: please see Microsoft's information on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section"},"downloading the WebView2 runtime")),(0,r.kt)("h3",{id:"maxd3d"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxD3D")),(0,r.kt)("p",null,"(optional)"),(0,r.kt)("p",null,"Available: 33.1.1.929"),(0,r.kt)("p",null,"Sets a limit on the Direct3D APIs used by the AIR runtime on Windows. If this value is set, it should be an integer value and AIR will not use a Direct3D version higher than this value.\nCurrently this means that to force the runtime to use Direct3D 9, it can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),", and to prevent the runtime from using Direct3D, it can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". The default for new SWFs is Direct3D 11."),(0,r.kt)("h3",{id:"clipboardfullhtml"},(0,r.kt)("inlineCode",{parentName:"h3"},"clipboardFullHTML")),(0,r.kt)("p",null,"(optional)"),(0,r.kt)("p",null,"Available: 50.0.0.1"),(0,r.kt)("p",null,"This setting can be used to retrieve the full Windows clipboard entry for HTML strings. Default behaviour is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," which will only provide the body text of the HTML contents.\nTo ensure the full clipboard contents are retrieved for HTML strings, set the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}u.isMDXComponent=!0}}]);