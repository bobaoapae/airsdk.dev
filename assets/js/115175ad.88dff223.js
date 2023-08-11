"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[8103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Assembling and transforming XML objects",sidebar_position:7},i=void 0,s={unversionedId:"development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",id:"development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",title:"Assembling and transforming XML objects",description:"Use the prependChild() method or the appendChild() method to add a property to the beginning or end of an XML object\u2019s list of properties, as the following example shows:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",permalink:"/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Assembling and transforming XML objects",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Initializing XML variables",permalink:"/docs/development/core-actionscript-classes/working-with-xml/initialising-xml-variables"},next:{title:"Traversing XML structures",permalink:"/docs/development/core-actionscript-classes/working-with-xml/traversing-xml-structures"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"prependChild()")," method or the ",(0,a.kt)("inlineCode",{parentName:"p"},"appendChild()")," method to add a property to the beginning or end of an ",(0,a.kt)("inlineCode",{parentName:"p"},"XML")," object\u2019s list of properties, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x1:XML = <p>Line 1</p>\nvar x2:XML = <p>Line 2</p>\nvar x:XML = <body></body>\nx = x.appendChild(x1);\nx = x.appendChild(x2);\nx = x.prependChild(<p>Line 0</p>);\n    // x == <body><p>Line 0</p><p>Line 1</p><p>Line 2</p></body>\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"insertChildBefore()")," method or the ",(0,a.kt)("inlineCode",{parentName:"p"},"insertChildAfter()")," method to add a property before or after a specified property, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x:XML =\n    <body>\n        <p>Paragraph 1</p>\n        <p>Paragraph 2</p>\n    </body>\nvar newNode:XML = <p>Paragraph 1.5</p>\nx = x.insertChildAfter(x.p[0], newNode)\nx = x.insertChildBefore(x.p[2], <p>Paragraph 1.75</p>)\n")),(0,a.kt)("p",null,"As the following example shows, you can also use curly brace operators ( { and } ) to pass data by reference (from other variables) when constructing XML objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var ids:Array = [121, 122, 123];\nvar names:Array = [["Murphy","Pat"], ["Thibaut","Jean"], ["Smith","Vijay"]]\nvar x:XML = new XML("<employeeList></employeeList>");\n\nfor (var i:int = 0; i < 3; i++)\n{\n    var newnode:XML = new XML();\n    newnode =\n        <employee id={ids[i]}>\n            <last>{names[i][0]}</last>\n            <first>{names[i][1]}</first>\n        </employee>;\n\n    x = x.appendChild(newnode)\n}\n')),(0,a.kt)("p",null,"You can assign properties and attributes to an XML object by using the = operator, as in the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var x:XML =\n    <employee>\n        <lastname>Smith</lastname>\n    </employee>\nx.firstname = "Jean";\nx.@id = "239";\n')),(0,a.kt)("p",null,"This sets the XML object x to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<employee id="239">\n    <lastname>Smith</lastname>\n    <firstname>Jean</firstname>\n</employee>\n')),(0,a.kt)("p",null,"You can use the + and += operators to concatenate XMLList objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var x1:XML = <a>test1</a>\nvar x2:XML = <b>test2</b>\nvar xList:XMLList = x1 + x2;\nxList += <c>test3</c>\n")),(0,a.kt)("p",null,"This sets the XMLList object xList to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<a>test1</a>\n<b>test2</b>\n<c>test3</c>\n")))}d.isMDXComponent=!0}}]);