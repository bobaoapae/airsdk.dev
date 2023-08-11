"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4536],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Advanced use of the drawing API",sidebar_position:9},o=void 0,s={unversionedId:"development/display/using-the-drawing-api/advanced-use-of-the-drawing-api",id:"development/display/using-the-drawing-api/advanced-use-of-the-drawing-api",title:"Advanced use of the drawing API",description:"Flash Player 10, Adobe AIR 1.5, and later Flash runtimes, support an advanced set of drawing features. The drawing API enhancements for these runtimes expand upon the drawing methods from previous releases so you can establish data sets to generate shapes, alter shapes at runtime, and create three-dimensional effects. The drawing API enhancements consolidate existing methods into alternative commands. These commands leverage vector arrays and enumeration classes to provide data sets for drawing methods. Using vector arrays allows for more complex shapes to render quickly and for developers to change the array values programmatically for dynamic shape rendering at runtime.",source:"@site/docs/development/display/using-the-drawing-api/advanced-use-of-the-drawing-api.md",sourceDirName:"development/display/using-the-drawing-api",slug:"/development/display/using-the-drawing-api/advanced-use-of-the-drawing-api",permalink:"/docs/development/display/using-the-drawing-api/advanced-use-of-the-drawing-api",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/using-the-drawing-api/advanced-use-of-the-drawing-api.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Advanced use of the drawing API",sidebar_position:9},sidebar:"mainSidebar",previous:{title:"Animating with the drawing API",permalink:"/docs/development/display/using-the-drawing-api/animating-with-the-drawing-api"},next:{title:"Overview",permalink:"/docs/development/display/working-with-bitmaps/"}},l={},d=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flash Player 10, Adobe AIR 1.5, and later Flash runtimes, support an advanced set of drawing features. The drawing API enhancements for these runtimes expand upon the drawing methods from previous releases so you can establish data sets to generate shapes, alter shapes at runtime, and create three-dimensional effects. The drawing API enhancements consolidate existing methods into alternative commands. These commands leverage vector arrays and enumeration classes to provide data sets for drawing methods. Using vector arrays allows for more complex shapes to render quickly and for developers to change the array values programmatically for dynamic shape rendering at runtime."),(0,r.kt)("p",null,"The drawing features introduced in Flash Player 10 are described in the following sections: Drawing Paths , Defining winding rules , Using graphics data classes , and About using drawTriangles() ."),(0,r.kt)("p",null,"The following tasks are things you\u2019ll likely want to accomplish using the advanced drawing API in ActionScript:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Vector objects to store data for drawing methods"),(0,r.kt)("li",{parentName:"ul"},"Defining paths for drawing shapes programmatically in a single operation"),(0,r.kt)("li",{parentName:"ul"},"Defining winding rules to determine how overlapping shapes are filled"),(0,r.kt)("li",{parentName:"ul"},"Reading the vector graphics content of a display object, such as to serialize and save the graphics data, to generate a spritesheet at runtime, or to draw a copy of the vector graphics content"),(0,r.kt)("li",{parentName:"ul"},"Using triangles and drawing methods for three-dimensional effects")),(0,r.kt)("h3",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,r.kt)("p",null,"The following reference list contains important terms that you will encounter in this section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vector: An array of values all of the same data type. A Vector object can store an array of values that drawing methods use to construct lines and shapes with a single command. For more information on Vector objects, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/core-actionscript-classes/working-with-arrays"},"Indexed arrays")," ."),(0,r.kt)("li",{parentName:"ul"},"Path: A path is made up of one or more straight or curved segments. The beginning and end of each segment are marked by coordinates, which work like pins holding a wire in place. A path can be closed (for example, a circle), or open, with distinct endpoints (for example, a wavy line)."),(0,r.kt)("li",{parentName:"ul"},"Winding: The direction of a path as interpreted by the renderer; either positive (clockwise) or negative (counter-clockwise)."),(0,r.kt)("li",{parentName:"ul"},"GraphicsStroke: A class for setting the line style. While the term \u201cstroke\u201d isn\u2019t part of the drawing API enhancements, the use of a class to designate a line style with its own fill property is part of the new drawing API. You can dynamically adjust a line\u2019s style using the ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphicsStroke")," class."),(0,r.kt)("li",{parentName:"ul"},"Fill object: Objects created using display classes like ",(0,r.kt)("inlineCode",{parentName:"li"},"flash.display.GraphicsBitmapFill")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"flash.display.GraphicsGradientFill")," that are passed to the drawing command ",(0,r.kt)("inlineCode",{parentName:"li"},"Graphics.drawGraphicsData()")," . Fill objects and the enhanced drawing commands introduce a more object-oriented programming approach to replicating ",(0,r.kt)("inlineCode",{parentName:"li"},"Graphics.beginBitmapFill()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Graphics.beginGradientFill()")," .")))}m.isMDXComponent=!0}}]);