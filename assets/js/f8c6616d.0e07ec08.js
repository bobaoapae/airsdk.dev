"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[34531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2},o="Printing a page",p={unversionedId:"development/client-system-interaction/printing/printing-a-page",id:"development/client-system-interaction/printing/printing-a-page",title:"Printing a page",description:"You use an instance of the PrintJob class to handle printing. To print a basic",source:"@site/docs/development/client-system-interaction/printing/printing-a-page.md",sourceDirName:"development/client-system-interaction/printing",slug:"/development/client-system-interaction/printing/printing-a-page",permalink:"/docs/development/client-system-interaction/printing/printing-a-page",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/printing/printing-a-page.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Basics of printing",permalink:"/docs/development/client-system-interaction/printing/basics-of-printing"},next:{title:"Flash runtime tasks and system printing",permalink:"/docs/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing"}},s={},l=[],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"printing-a-page"},"Printing a page"),(0,i.kt)("p",null,"You use an instance of the PrintJob class to handle printing. To print a basic\npage through Flash Player or AIR, you use these four statements in sequence:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"new PrintJob()"),": Creates a new print job instance of the name you specify.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PrintJob.start()"),": Initiates the printing process for the operating system,\ncalling the print dialog box for the user, and populates the read-only\nproperties of the print job.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PrintJob.addPage()"),": Contains the details about the print job contents,\nincluding the Sprite object (and any children it contains), the size of the\nprint area, and whether the printer prints the image as a vector or bitmap.\nYou can use successive calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"addPage()")," to print multiple sprites over\nseveral pages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PrintJob.send()"),": Sends the pages to the operating system's printer."))),(0,i.kt)("p",null,"So, for example, a simple print job script is (including ",(0,i.kt)("inlineCode",{parentName:"p"},"package"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"class")," statements for compiling):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"package\n{\n    import flash.printing.PrintJob;\n    import flash.display.Sprite;\n\n    public class BasicPrintExample extends Sprite\n    {\n        var myPrintJob:PrintJob = new PrintJob();\n        var mySprite:Sprite = new Sprite();\n\n        public function BasicPrintExample()\n        {\n            myPrintJob.start();\n            myPrintJob.addPage(mySprite);\n            myPrintJob.send();\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Note: This example is intended to show the basic elements of a print job script,\nand does not contain any error handling. To build a script that responds\nproperly to a user canceling a print job, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/client-system-interaction/printing/flash-runtime-tasks-and-system-printing#working-with-exceptions-and-returns"},"Working with exceptions and returns"),"."),(0,i.kt)("p",null,"To clear a PrintJob object's properties for any reason, set the PrintJob\nvariable to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"myPrintJob = null"),")."))}d.isMDXComponent=!0}}]);