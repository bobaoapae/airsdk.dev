"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"ADT -checkstore",sidebar_label:"checkstore",sidebar_position:5},a=void 0,c={unversionedId:"building/air-developer-tool/commands/checkstore",id:"building/air-developer-tool/commands/checkstore",title:"ADT -checkstore",description:"The -checkstore command lets you check the validity of a keystore. The command uses the following syntax:",source:"@site/docs/building/air-developer-tool/commands/checkstore.md",sourceDirName:"building/air-developer-tool/commands",slug:"/building/air-developer-tool/commands/checkstore",permalink:"/docs/building/air-developer-tool/commands/checkstore",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/commands/checkstore.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"ADT -checkstore",sidebar_label:"checkstore",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"migrate",permalink:"/docs/building/air-developer-tool/commands/migrate"},next:{title:"certificate",permalink:"/docs/building/air-developer-tool/commands/certificate"}},l={},s=[{value:"<code>SIGNING_OPTIONS</code>",id:"signing_options",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-checkstore")," command lets you check the validity of a keystore. The command uses the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"adt -checkstore SIGNING_OPTIONS\n")),(0,o.kt)("h3",{id:"signing_options"},(0,o.kt)("inlineCode",{parentName:"h3"},"SIGNING_OPTIONS")),(0,o.kt)("p",null,"The signing options identifying the keystore to validate. The signing options are fully described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/option-sets/code-signing-options"},"ADT code signing options"),"."))}u.isMDXComponent=!0}}]);