"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2420],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,h=d["".concat(s,".").concat(g)]||d[g]||y[g]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(4137));const o={title:"Panning and scrolling display objects",sidebar_position:3},r=void 0,l={unversionedId:"development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects",id:"development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects",title:"Panning and scrolling display objects",description:"If you have a display object that is too large for the area in which you want it to display it, you can use the scrollRect property to define the viewable area of the display object. In addition, by changing the scrollRect property in response to user input, you can cause the content to pan left and right or scroll up and down.",source:"@site/docs/development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Panning and scrolling display objects",sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Changing position",permalink:"/docs/development/display/display-programming/manipulating-display-objects/changing-position"},next:{title:"Manipulating size and scaling objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects"}},s={},c=[],p={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you have a display object that is too large for the area in which you want it to display it, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property to define the viewable area of the display object. In addition, by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property in response to user input, you can cause the content to pan left and right or scroll up and down."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property is an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," class, which is a class that combines the values needed to define a rectangular area as a single object. To initially define the viewable area of the display object, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," instance and assign it to the display object\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property. Later, to scroll or pan, you read the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property into a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," variable, and change the desired property (for instance, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," instance\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," property to pan or ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," property to scroll). Then you reassign that ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle")," instance to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property to notify the display object of the changed value."),(0,i.kt)("p",null,"For example, the following code defines the viewable area for a ",(0,i.kt)("inlineCode",{parentName:"p"},"TextField")," object named ",(0,i.kt)("inlineCode",{parentName:"p"},"bigText")," that is too tall to fit in the SWF file\u2019s boundaries. When the two buttons named up and down are clicked, they call functions that cause the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TextField")," object to scroll up or down by modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," Rectangle instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},'import flash.events.MouseEvent;\nimport flash.geom.Rectangle;\n\n// Define the initial viewable area of the TextField instance:\n// left: 0, top: 0, width: TextField\'s width, height: 350 pixels.\nbigText.scrollRect = new Rectangle(0, 0, bigText.width, 350);\n\n// Cache the TextField as a bitmap to improve performance.\nbigText.cacheAsBitmap = true;\n\n// called when the "up" button is clicked\nfunction scrollUp(event:MouseEvent):void\n{\n    // Get access to the current scroll rectangle.\n    var rect:Rectangle = bigText.scrollRect;\n    // Decrease the y value of the rectangle by 20, effectively\n    // shifting the rectangle down by 20 pixels.\n    rect.y -= 20;\n    // Reassign the rectangle to the TextField to "apply" the change.\n    bigText.scrollRect = rect;\n}\n\n// called when the "down" button is clicked\nfunction scrollDown(event:MouseEvent):void\n{\n    // Get access to the current scroll rectangle.\n    var rect:Rectangle = bigText.scrollRect;\n    // Increase the y value of the rectangle by 20, effectively\n    // shifting the rectangle up by 20 pixels.\n    rect.y += 20;\n    // Reassign the rectangle to the TextField to "apply" the change.\n    bigText.scrollRect = rect;\n}\n\nup.addEventListener(MouseEvent.CLICK, scrollUp);\ndown.addEventListener(MouseEvent.CLICK, scrollDown);\n')),(0,i.kt)("p",null,"As this example illustrates, when you work with the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollRect")," property of a display object, it\u2019s best to specify that Flash Player or AIR should cache the display object\u2019s content as a bitmap, using the cacheAsBitmap property. When you do so, Flash Player and AIR don\u2019t have to re-draw the entire contents of the display object each time it is scrolled, and can instead use the cached bitmap to render the necessary portion directly to the screen. For details, see ",(0,i.kt)("a",{parentName:"p",href:"caching-display-objects"},"Caching display objects")," ."))}y.isMDXComponent=!0}}]);