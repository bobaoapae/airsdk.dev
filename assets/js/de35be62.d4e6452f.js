"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[11709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||y[m]||i;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},o="Working with byte arrays",l={unversionedId:"development/files-and-data/working-with-bytearrays/index",id:"development/files-and-data/working-with-bytearrays/index",title:"Working with byte arrays",description:"The ByteArray class allows you to read from and write to a binary stream of",source:"@site/docs/development/files-and-data/working-with-bytearrays/index.md",sourceDirName:"development/files-and-data/working-with-bytearrays",slug:"/development/files-and-data/working-with-bytearrays/",permalink:"/docs/development/files-and-data/working-with-bytearrays/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-bytearrays/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Working with database data types",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-database-data-types"},next:{title:"Reading and writing a ByteArray",permalink:"/docs/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray"}},s={},d=[],c={toc:d},p="wrapper";function y(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-byte-arrays"},"Working with byte arrays"),(0,n.kt)("p",null,"The ByteArray class allows you to read from and write to a binary stream of\ndata, which is essentially an array of bytes. This class provides a way to\naccess data at the most elemental level. Because computer data consists of\nbytes, or groups of 8 bits, the ability to read data in bytes means that you can\naccess data for which classes and access methods do not exist. The ByteArray\nclass allows you to parse any stream of data, from a bitmap to a stream of data\ntraveling over the network, at the byte level."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"writeObject()")," method allows you to write an object in serialized Action\nMessage Format (AMF) to a ByteArray, while the ",(0,n.kt)("inlineCode",{parentName:"p"},"readObject()")," method allows you\nto read a serialized object from a ByteArray to a variable of the original data\ntype. You can serialize any object except for display objects, which are those\nobjects that can be placed on the display list. You can also assign serialized\nobjects back to custom class instances if the custom class is available to the\nruntime. After converting an object to AMF, you can efficiently transfer it over\na network connection or save it to a file."),(0,n.kt)("p",null,"The sample Adobe\xae AIR\xae application described here reads a .zip file as an\nexample of processing a byte stream, extracting a list of the files that the\n.zip file contains and writing them to the desktop."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray"},"Reading and writing a ByteArray")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/files-and-data/working-with-bytearrays/bytearray-example-reading-a-zip-file"},"ByteArray example: Reading a .zip file"))),(0,n.kt)("p",null,"More Help topics"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(67824).Z,width:"16",height:"16"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/utils/ByteArray.html"},"flash.utils.ByteArray")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(67824).Z,width:"16",height:"16"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/utils/IExternalizable.html"},"flash.utils.IExternalizable")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://opensource.adobe.com/wiki/download/attachments/1114283/amf3_spec_05_05_08.pdf"},"Action Message Format specification")))}y.isMDXComponent=!0},67824:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMDZGOTY2NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwMDZGOTY3NjYxRjExRTBCNDdCQTM5RjAzRkM2RTA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTAwNkY5NjQ2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTAwNkY5NjU2NjFGMTFFMEI0N0JBMzlGMDNGQzZFMDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HYd/mAAABZUlEQVR42oxSOU7EUAy1ZyKQ0o1EkQKJAgrSoKkoOAASHXfgULSUdJyAQ+QII+UMkGSSb7z9JYyQ+JJjO96fjZ+P93T3dAUX1zuALYK+hQBCYL44ZwqL6U748qHO+HZ5QyI9nB1EBWSFiJijcv9hiUE813K1gFWd1ImJ3Cn6eTC5PSZGJDVVx8AKGybC5ChOp8//keVEsETV7AEDz2lxbJC5YxjmduNEqlOwDmb5yTQKgKltEzFWLjGw8knmESxi1A5y6zaKFKLcGbkP28irVLOXHckMMYlh5j1Q0Ujqxh6PYJZpQwnpvKVijSXPqPgWWBsEuDQ4f0IMCq6HQs9Y6RZkzkERL4AElwk9r+8fMJ8SxjtgadQCtNpCuf4C3TUGR2932uYjyfu3jpNMp+dVzcHKfC1F4OoO/n7is3l+f4Xz/S2vEZQGTjhE+Rd9hzUf4031fU9d18F/X13X0DQNtG2LPwIMALHE9dBufo94AAAAAElFTkSuQmCC"}}]);