"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[90658],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),s=l(n),g=a,u=s["".concat(c,".").concat(g)]||s[g]||d[g]||i;return n?r.createElement(u,o(o({ref:e},p),{},{components:n})):r.createElement(u,o({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=g;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=t,m[s]="string"==typeof t?t:a,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41243:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Programming HTML and JavaScript in AIR",m={unversionedId:"development/html-content-in-air/programming-html-and-javascript-in-air/index",id:"development/html-content-in-air/programming-html-and-javascript-in-air/index",title:"Programming HTML and JavaScript in AIR",description:"A number of programming topics are unique to developing Adobe\xae AIR\xae applications",source:"@site/docs/development/html-content-in-air/programming-html-and-javascript-in-air/index.md",sourceDirName:"development/html-content-in-air/programming-html-and-javascript-in-air",slug:"/development/html-content-in-air/programming-html-and-javascript-in-air/",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/html-content-in-air/programming-html-and-javascript-in-air/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"WebKit features not supported in AIR",permalink:"/docs/development/html-content-in-air/about-the-html-environment/webkit-features-not-supported-in-air"},next:{title:"About the HTMLLoader class",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-the-htmlloader-class"}},c={},l=[],p={toc:l},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programming-html-and-javascript-in-air"},"Programming HTML and JavaScript in AIR"),(0,a.kt)("p",null,"A number of programming topics are unique to developing Adobe\xae AIR\xae applications\nwith HTML and JavaScript. The following information is important whether you are\nprogramming an HTML-based AIR application or programming a SWF-based AIR\napplication that runs HTML and JavaScript using the HTMLLoader class (or mx:HTML\nFlex\u2122 component)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-the-htmlloader-class"},"About the HTMLLoader class")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors"},"Avoiding security-related JavaScript errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/accessing-air-api-classes-from-javascript"},"Accessing AIR API classes from JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/about-urls-in-air"},"About URLs in AIR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/making-actionscript-objects-available-to-javascript"},"Making ActionScript objects available to JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/accessing-html-dom-and-javascript-objects-from-actionscript"},"Accessing HTML DOM and JavaScript objects from ActionScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/embedding-swf-content-in-html"},"Embedding SWF content in HTML")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/using-actionscript-libraries-within-an-html-page"},"Using ActionScript libraries within an HTML page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/converting-date-and-regexp-objects"},"Converting Date and RegExp objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/manipulating-an-html-stylesheet-from-actionscript"},"Manipulating an HTML stylesheet from ActionScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/cross-scripting-content-in-different-security-sandboxes"},"Cross-scripting content in different security sandboxes"))))}d.isMDXComponent=!0}}]);