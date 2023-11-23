"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[10791],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},f=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(i),c=r,u=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return i?n.createElement(u,s(s({ref:t},f),{},{components:i})):n.createElement(u,s({ref:t},f))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},44785:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const a={},s="Using the AIR file system API",l={unversionedId:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/index",id:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/index",title:"Using the AIR file system API",description:"The Adobe AIR file system API includes the following classes:",source:"@site/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/index.md",sourceDirName:"development/files-and-data/working-with-the-file-system/using-the-air-file-system-api",slug:"/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Working with the file system",permalink:"/docs/development/files-and-data/working-with-the-file-system/"},next:{title:"AIR file basics",permalink:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/air-file-basics"}},o={},p=[],f={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-air-file-system-api"},"Using the AIR file system API"),(0,r.kt)("p",null,"The Adobe AIR file system API includes the following classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FileMode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FileStream"))),(0,r.kt)("p",null,"The file system API lets you do the following (and more):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy, create, delete, and move files and directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get information about files and directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read and write files"))),(0,r.kt)("p",null,"More Help topics"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/air-file-basics"},"AIR file basics")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-file-objects-in-air"},"Working with File objects in AIR")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/getting-file-system-information"},"Getting file system information")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-directories"},"Working with directories")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-files"},"Working with files")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/working-with-storage-volumes"},"Working with storage volumes")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-the-file-system/using-the-air-file-system-api/reading-and-writing-files/"},"Reading and writing files")))}m.isMDXComponent=!0}}]);