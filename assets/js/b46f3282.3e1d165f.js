"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[95273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l="Storing local data",i={unversionedId:"development/files-and-data/storing-local-data/index",id:"development/files-and-data/storing-local-data/index",title:"Storing local data",description:"You use the",source:"@site/docs/development/files-and-data/storing-local-data/index.md",sourceDirName:"development/files-and-data/storing-local-data",slug:"/development/files-and-data/storing-local-data/",permalink:"/docs/development/files-and-data/storing-local-data/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/storing-local-data/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Using the FileReference class",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-filereference-class"},next:{title:"Shared objects",permalink:"/docs/development/files-and-data/storing-local-data/shared-objects"}},s={},c=[],d={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storing-local-data"},"Storing local data"),(0,r.kt)("p",null,"You use the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/net/SharedObject.html"},"SharedObject"),"\nclass to store small amounts of data on the client computer. In Adobe AIR, you\ncan also use the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/EncryptedLocalStore.html"},"EncryptedLocalStore"),"\nclass to store small amounts of privacy-sensitive user data on the local\ncomputer in an AIR application."),(0,r.kt)("p",null,"You can also read and write files on the file system and (in Adobe AIR) access\nlocal database files. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/"},"Working with the file system")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/"},"Working with local SQL databases in AIR"),"."),(0,r.kt)("p",null,"There are a number of security factors that relate to shared objects. For more\ninformation, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/security/shared-objects"},"Shared objects")," in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/security/"},"Security"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/files-and-data/storing-local-data/shared-objects"},"Shared objects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/development/files-and-data/storing-local-data/encrypted-local-storage"},"Encrypted local storage"))))}f.isMDXComponent=!0}}]);