"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={title:"Overview",sidebar_position:1},s=void 0,a={unversionedId:"development/rich-media-content/using-digital-rights-management/index",id:"development/rich-media-content/using-digital-rights-management/index",title:"Overview",description:"Adobe\xae Access\u2122 is a content protection solution. It lets content owners, distributors, and advertisers realize new sources of revenue by providing seamless access to premium content. Publishers use Adobe Access to encrypt content, create policies, and issue licenses. Adobe Flash Player and Adobe AIR incorporate a DRM library, the Adobe Access module. This module enables the runtime to communicate with the Adobe Access license server and play back protected content. The runtime thus completes the life cycle of content protected by Adobe Access and distributed by Flash Media Server.",source:"@site/docs/development/rich-media-content/using-digital-rights-management/index.md",sourceDirName:"development/rich-media-content/using-digital-rights-management",slug:"/development/rich-media-content/using-digital-rights-management/",permalink:"/docs/development/rich-media-content/using-digital-rights-management/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/using-digital-rights-management/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with cameras",permalink:"/docs/development/rich-media-content/working-with-cameras"},next:{title:"Adding PDF content in AIR",permalink:"/docs/development/rich-media-content/adding-pdf-content-in-air"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adobe\xae Access\u2122 is a content protection solution. It lets content owners, distributors, and advertisers realize new sources of revenue by providing seamless access to premium content. Publishers use Adobe Access to encrypt content, create policies, and issue licenses. Adobe Flash Player and Adobe AIR incorporate a DRM library, the Adobe Access module. This module enables the runtime to communicate with the Adobe Access license server and play back protected content. The runtime thus completes the life cycle of content protected by Adobe Access and distributed by Flash Media Server."),(0,o.kt)("p",null,"With Adobe Access, content providers can provide both free content and premium content. For example, a consumer wants to view a television program without advertisements. The consumer registers and pays the content publisher. The consumer can then enter their user credentials to gain access and play the program without the ads."),(0,o.kt)("p",null,"In another example, a consumer wants to view content offline while traveling with no Internet access. This offline workflow is supported in AIR applications. After registering and paying the publisher for the content, the user can access and download the content and associated AIR application from the publisher\u2019s website. Using the AIR application, the user can view the content offline during the permitted period. The content can also be shared with other devices in the same device group using domains ( New in 3.0 )."),(0,o.kt)("p",null,"Adobe Access also supports anonymous access, which does not require user authentication. For example, a publisher can use anonymous access to distribute ad-supported content. Anonymous access also lets a publisher allow free access to the current content for a specified number of days. The content provider can also specify and restrict the type and version of the player needed for their content."),(0,o.kt)("p",null,"When a user tries to play protected content in Flash Player or Adobe AIR, your application must call the DRM APIs. The DRM APIs initiate the workflow for playback of protected content. The runtime, through the Adobe Access module, contacts the license server. The license server authenticates the user, if necessary, and issues a license to allow playback of protected content. The runtime receives the license and decrypts the content for playback."),(0,o.kt)("p",null,"How to enable your application to play content protected by Adobe Access is described here. It is not necessary to understand how to encrypt content or maintain policies using Adobe Access. However, it is assumed that you are communicating with the Adobe Access license server to authenticate the user and retrieve the license. It is also assumed that you are designing an application to specifically play content protected by Adobe Access."),(0,o.kt)("p",null,"For an overview of Adobe Access, including creating policies, see the documentation included with Adobe Access."))}u.isMDXComponent=!0}}]);