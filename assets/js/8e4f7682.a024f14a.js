"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2628],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={title:"Basics of geometry",sidebar_position:2},i=void 0,s={unversionedId:"development/display/working-with-geometry/basics-of-geometry",id:"development/display/working-with-geometry/basics-of-geometry",title:"Basics of geometry",description:"The flash.geom package contains classes that define geometric objects such as points, rectangles, and transformation matrixes. These classes don\u2019t necessarily provide functionality by themselves; however, they are used to define the properties of objects that are used in other classes.",source:"@site/docs/development/display/working-with-geometry/basics-of-geometry.md",sourceDirName:"development/display/working-with-geometry",slug:"/development/display/working-with-geometry/basics-of-geometry",permalink:"/docs/development/display/working-with-geometry/basics-of-geometry",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-geometry/basics-of-geometry.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basics of geometry",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/development/display/working-with-geometry/"},next:{title:"Using Point objects",permalink:"/docs/development/display/working-with-geometry/using-point-objects"}},c={},l=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flash.geom")," package contains classes that define geometric objects such as points, rectangles, and transformation matrixes. These classes don\u2019t necessarily provide functionality by themselves; however, they are used to define the properties of objects that are used in other classes."),(0,o.kt)("p",null,"All the geometry classes are based around the notion that locations on the screen are represented as a two-dimensional plane. The screen is treated like a flat graph with a horizontal (x) axis and a vertical (y) axis. Any location (or point ) on the screen can be represented as a pair of x and y values\u2014the coordinates of that location."),(0,o.kt)("p",null,"Every display object, including the Stage, has its own coordinate space . The coordinate space is an object\u2019s own graph for plotting the locations of child display objects, drawings, and so on. The origin is at coordinate location 0, 0 (where the x and y-axes meet), and is placed at the upper-left corner of the display object. While this origin location is always true for the Stage, it is not necessarily true for other display objects. Values on the x-axis get bigger going toward the right, and smaller going toward the left. For locations to the left of the origin, the x coordinate is negative. However, contrary to traditional coordinate systems, Flash runtime coordinate values on the y-axis get bigger going down the screen and smaller going up the screen. Values above the origin have a negative y coordinate value). Since the upper-left corner of the Stage is the origin of its coordinate space, most objects on the Stage have an x coordinate greater than 0 and smaller than the Stage width. And the same object has a y coordinate larger than 0 and smaller than the Stage height."),(0,o.kt)("p",null,"You can use Point class instances to represent individual points in a coordinate space. You can create a Rectangle instance to represent a rectangular region in a coordinate space. For advanced users, you can use a Matrix instance to apply multiple or complex transformations to a display object. Many simple transformations, such as rotation, position, and scale changes, can be applied directly to a display object using that object\u2019s properties. For more information on applying transformations using display object properties, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/manipulating-display-objects/"},"Manipulating display objects")," ."),(0,o.kt)("h2",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,o.kt)("p",null,"The following reference list contains important geometry terms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cartesian coordinates")," Coordinates are commonly written as a pair of number (like 5, 12 or 17, -23). The two numbers are the x coordinate and the y coordinate, respectively."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Coordinate space")," The graph of coordinates contained in a display object, on which its child elements are positioned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Origin")," The point in a coordinate space where the x-axis meets the y-axis. This point has the coordinate 0, 0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Point")," A single location in a coordinate space. In the 2-d coordinate system used in ActionScript, the location along the x-axis and the y-axis (the point\u2019s coordinates) define the point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registration")," point In a display object, the origin (0, 0 coordinate) of its coordinate space."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scale")," The size of an object relative to its original size. When used as a verb, to scale an object means to change its size by stretching or shrinking the object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Translate")," To change a point\u2019s coordinates from one coordinate space to another."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transformation")," An adjustment to a visual characteristic of a graphic, such as rotating the object, altering its scale, skewing or distorting its shape, or altering its color."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"X-axis")," The horizontal axis in the 2-d coordinate system used in ActionScript."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Y-axis")," The vertical axis in the 2-d coordinate system used in ActionScript.")))}h.isMDXComponent=!0}}]);