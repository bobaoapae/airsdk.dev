"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Animating objects",sidebar_position:7},o=void 0,s={unversionedId:"development/display/display-programming/animating-objects",id:"development/display/display-programming/animating-objects",title:"Animating objects",description:"Animation is the process of making something move, or alternatively, of making something change over time. Scripted animation is a fundamental part of video games, and is often used to add polish and useful interaction clues to other applications.",source:"@site/docs/development/display/display-programming/animating-objects.md",sourceDirName:"development/display/display-programming",slug:"/development/display/display-programming/animating-objects",permalink:"/docs/development/display/display-programming/animating-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/animating-objects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Animating objects",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Masking display objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/masking-display-objects"},next:{title:"Stage orientation",permalink:"/docs/development/display/display-programming/stage-orientation"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Animation is the process of making something move, or alternatively, of making something change over time. Scripted animation is a fundamental part of video games, and is often used to add polish and useful interaction clues to other applications."),(0,i.kt)("p",null,"The fundamental idea behind scripted animation is that a change needs to take place, and that change needs to be divided into increments over time. It\u2019s easy to make something repeat in ActionScript, using a common looping statement. However, a loop will run through all its iterations before updating the display. To create scripted animation, you need to write ActionScript that performs some action repeatedly over time and also updates the screen each time it runs."),(0,i.kt)("p",null,"For example, imagine you want to create a simple animation, such as making a ball travel across the screen. ActionScript includes a simple mechanism that allows you to track the passage of time and update the screen accordingly\u2014meaning you could write code that moves the ball a small amount each time, until it reaches its destination. After each move the screen would update, making the cross-Stage motion visible to the viewer."),(0,i.kt)("p",null,"From a practical standpoint, it makes sense to synchronize scripted animation with the SWF file\u2019s frame rate (in other words, make one animation change each time a new frame displays or would display), since that defines how frequently Flash Player or AIR updates the screen. Each display object has an enterFrame event that is dispatched according to the frame rate of the SWF file\u2014one event per frame. Most developers who create scripted animation use the enterFrame event as a way to create actions that repeat over time. You could write code that listens to the enterFrame event, moving the animated ball a certain amount each frame, and as the screen is updated (each frame), the ball would be redrawn in its new location, creating motion."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Another way to perform an action repeatedly over time is to use the Timer class. A Timer instance triggers an event notification each time a specified amount of time has past. You could write code that performs animation by handling the Timer class\u2019s timer event, setting the time interval to a small one (some fraction of a second). For more information about using the Timer class, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/core-actionscript-classes/working-with-dates-and-times#controlling-time-intervals"},"Controlling time intervals")," .")),(0,i.kt)("p",null,"In the following example, a circle Sprite instance, named ",(0,i.kt)("inlineCode",{parentName:"p"},"circle")," , is created on the Stage. When the user clicks the circle, a scripted animation sequence begins, causing ",(0,i.kt)("inlineCode",{parentName:"p"},"circle")," to fade (its ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," property is decreased) until it is completely transparent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.Sprite;\nimport flash.events.Event;\nimport flash.events.MouseEvent;\n\n// draw a circle and add it to the display list\nvar circle:Sprite = new Sprite();\ncircle.graphics.beginFill(0x990000);\ncircle.graphics.drawCircle(50, 50, 50);\ncircle.graphics.endFill();\naddChild(circle);\n\n// When this animation starts, this function is called every frame.\n// The change made by this function (updated to the screen every\n// frame) is what causes the animation to occur.\nfunction fadeCircle(event:Event):void\n{\n    circle.alpha -= .05;\n\n    if (circle.alpha <= 0)\n    {\n        circle.removeEventListener(Event.ENTER_FRAME, fadeCircle);\n    }\n\n}\n\nfunction startAnimation(event:MouseEvent):void\n{\n    circle.addEventListener(Event.ENTER_FRAME, fadeCircle);\n}\n\ncircle.addEventListener(MouseEvent.CLICK, startAnimation);\n")),(0,i.kt)("p",null,"When the user clicks the circle, the function ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeCircle()")," is subscribed as a listener of the ",(0,i.kt)("inlineCode",{parentName:"p"},"enterFrame")," event, meaning it begins to be called once per frame. That function fades circle by changing its ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," property, so once per frame the circle\u2019s alpha decreases by .05 (5 percent) and the screen is updated. Eventually, when the alpha value is 0 ( circle is completely transparent), the ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeCircle()")," function is removed as an event listener, ending the animation."),(0,i.kt)("p",null,"The same code could be used, for example, to create animated motion instead of fading. By substituting a different property for ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," in the function that is an ",(0,i.kt)("inlineCode",{parentName:"p"},"enterFrame")," event listener, that property will be animated instead. For example, changing this line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"    circle.alpha -= .05;\n")),(0,i.kt)("p",null,"to this code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"    circle.x += 5;\n")),(0,i.kt)("p",null,"will animate the x property, causing the circle to move to the right across the Stage. The condition that ends the animation could be changed to end the animation (that is, unsubscribe the enterFrame listener) when the desired x coordinate is reached."))}m.isMDXComponent=!0}}]);