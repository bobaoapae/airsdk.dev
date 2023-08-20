"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[86166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),h=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=h(n),d=i,v=l["".concat(c,".").concat(d)]||l[d]||s[d]||r;return n?o.createElement(v,a(a({ref:t},p),{},{components:n})):o.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:i,a[1]=u;for(var h=2;h<r;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>h});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},a="Touch event handling",u={unversionedId:"development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling",id:"development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling",title:"Touch event handling",description:"Basic touch events are handled the same way you handle other events, like mouse",source:"@site/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling.md",sourceDirName:"development/user-interaction/touch-multitouch-and-gesture-input",slug:"/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-event-handling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Touch support discovery",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-support-discovery"},next:{title:"Touch and drag",permalink:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/touch-and-drag"}},c={},h=[{value:"Touch Event properties",id:"touch-event-properties",level:2},{value:"Touch event phases",id:"touch-event-phases",level:2},{value:"Touch Point ID",id:"touch-point-id",level:3}],p={toc:h},l="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"touch-event-handling"},"Touch event handling"),(0,i.kt)("p",null,"Basic touch events are handled the same way you handle other events, like mouse\nevents, in ActionScript. You can listen for a series of touch events defined by\nthe event type constants in the\n",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/ui/Multitouch.html"},"TouchEvent class"),"."),(0,i.kt)("p",null,"Note: For multiple touch point input (such as touching a device with more than\none finger), the first point of contact dispatches a mouse event and a touch\nevent."),(0,i.kt)("p",null,"To handle a basic touch event:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set your application to handle touch events by setting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"flash.ui.Multitouch.inputMode")," property to\n",(0,i.kt)("inlineCode",{parentName:"p"},"MultitouchInputMode.TOUCH_POINT"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attach an event listener to an instance of a class that inherits properties\nfrom the InteractiveObject class, such as Sprite or TextField.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify the type of touch event to handle.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Call an event handler function to do something in response to the event."))),(0,i.kt)("p",null,"For example, the following code displays a message when the square drawn on\nmySprite is tapped on a touch-enabled screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Multitouch.inputMode=MultitouchInputMode.TOUCH_POINT;\n\nvar mySprite:Sprite = new Sprite();\nvar myTextField:TextField = new TextField();\n\nmySprite.graphics.beginFill(0x336699);\nmySprite.graphics.drawRect(0,0,40,40);\naddChild(mySprite);\n\nmySprite.addEventListener(TouchEvent.TOUCH_TAP, taphandler);\n\nfunction taphandler(evt:TouchEvent): void {\n    myTextField.text = "I\'ve been tapped";\n    myTextField.y = 50;\n    addChild(myTextField);\n}\n')),(0,i.kt)("h2",{id:"touch-event-properties"},"Touch Event properties"),(0,i.kt)("p",null,"When an event occurs, an event object is created. The TouchEvent object contains\ninformation about the location and conditions of the touch event. You can use\nthe properties of the event object to retrieve that information."),(0,i.kt)("p",null,"For example, the following code creates a TouchEvent object ",(0,i.kt)("inlineCode",{parentName:"p"},"evt"),", and then\ndisplays the ",(0,i.kt)("inlineCode",{parentName:"p"},"stageX")," property of the event object (the x-coordinate of the\npoint in the Stage space that the touch occurred) in the text field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Multitouch.inputMode=MultitouchInputMode.TOUCH_POINT;\n\nvar mySprite:Sprite = new Sprite();\nvar myTextField:TextField = new TextField();\n\nmySprite.graphics.beginFill(0x336699);\nmySprite.graphics.drawRect(0,0,40,40);\naddChild(mySprite);\n\nmySprite.addEventListener(TouchEvent.TOUCH_TAP, taphandler);\n\nfunction taphandler(evt:TouchEvent): void {\n    myTextField.text = evt.stageX.toString;\n    myTextField.y = 50;\n    addChild(myTextField);\n}\n")),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/TouchEvent.html"},"TouchEvent"),"\nclass for the properties available through the event object."),(0,i.kt)("p",null,"Note: Not all TouchEvent properties are supported in all runtime environments.\nFor example, not all touch-enabled devices are capable or detecting the amount\nof pressure the user is applying to the touch screen. So, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TouchEvent.pressure")," property is not supported on those devices. Try testing\nfor specific property support to ensure your application works, and see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/user-interaction/touch-multitouch-and-gesture-input/troubleshooting"},"Troubleshooting")," for more information."),(0,i.kt)("h2",{id:"touch-event-phases"},"Touch event phases"),(0,i.kt)("p",null,"Track touch events through various stages over and outside an InteractiveObject\njust as you do for mouse events. And, track touch events through the beginning,\nmiddle, and end of a touch interaction. The TouchEvent class provides values for\nhandling ",(0,i.kt)("inlineCode",{parentName:"p"},"touchBegin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"touchMove"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"touchEnd")," events."),(0,i.kt)("p",null,"For example, you could use ",(0,i.kt)("inlineCode",{parentName:"p"},"touchBegin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"touchMove"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"touchEnd")," events to\ngive the user visual feedback as they touch and move a display object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;\nvar mySprite:Sprite = new Sprite();\nmySprite.graphics.beginFill(0x336699);\nmySprite.graphics.drawRect(0,0,40,40);\naddChild(mySprite);\nvar myTextField:TextField = new TextField();\nmyTextField.width = 200;\nmyTextField.height = 20;\naddChild(myTextField);\n\nmySprite.addEventListener(TouchEvent.TOUCH_BEGIN, onTouchBegin);\nstage.addEventListener(TouchEvent.TOUCH_MOVE, onTouchMove);\nstage.addEventListener(TouchEvent.TOUCH_END, onTouchEnd);\nfunction onTouchBegin(event:TouchEvent) {\n    myTextField.text = "touch begin" + event.touchPointID;\n}\nfunction onTouchMove(event:TouchEvent) {\n    myTextField.text = "touch move" + event.touchPointID;\n}\nfunction onTouchEnd(event:TouchEvent) {\n    myTextField.text = "touch end" + event.touchPointID;\n}\n')),(0,i.kt)("p",null,"Note: The initial touch listener is attached to mySprite, but the listeners for\nmoving and ending the touch event are not. If the users's finger or pointing\ndevices moves ahead of the display object, the Stage continues to listen for the\ntouch event."),(0,i.kt)("h3",{id:"touch-point-id"},"Touch Point ID"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchEvent.touchPointID")," property is an essential part of writing\napplications that respond to touch input. The Flash runtime assigns each point\nof touch a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," value. Whenever an application responds to the\nphases or movement of touch input, check the ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," before handling the\nevent. The touch input dragging methods of the Sprite class use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," property as a parameter so the correct input instance is handled.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," property ensures that an event handler is responding to the\ncorrect touch point. Otherwise, the event handler responds to any instances of\nthe touch event type (such as all ",(0,i.kt)("inlineCode",{parentName:"p"},"touchMove")," events) on the device, producing\nunpredictable behavior. The property is especially important when the user is\ndragging objects."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," property to manage an entire touch sequence. A touch\nsequence has one ",(0,i.kt)("inlineCode",{parentName:"p"},"touchBegin")," event, zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"touchMove")," events, and one\n",(0,i.kt)("inlineCode",{parentName:"p"},"touchEnd")," event that all have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," value."),(0,i.kt)("p",null,"The following example establishes a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"touchMoveID")," to test for the\ncorrect ",(0,i.kt)("inlineCode",{parentName:"p"},"touchPointID")," value before responding to a touch move event. Otherwise,\nother touch input triggers the event handler, too. Notice the listeners for the\nmove and end phases are on the stage, not the display object. The stage listens\nfor the move or end phases in case the user's touch moves beyond the display\nobject boundaries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;\nvar mySprite:Sprite = new Sprite();\nmySprite.graphics.beginFill(0x336699);\nmySprite.graphics.drawRect(0,0,40,40);\naddChild(mySprite);\nvar myTextField:TextField = new TextField();\naddChild(myTextField);\nmyTextField.width = 200;\nmyTextField.height = 20;\nvar touchMoveID:int = 0;\n\nmySprite.addEventListener(TouchEvent.TOUCH_BEGIN, onTouchBegin);\nfunction onTouchBegin(event:TouchEvent) {\n    if(touchMoveID != 0) {\n        myTextField.text = "already moving. ignoring new touch";\n        return;\n    }\n    touchMoveID = event.touchPointID;\n\n    myTextField.text = "touch begin" + event.touchPointID;\n    stage.addEventListener(TouchEvent.TOUCH_MOVE, onTouchMove);\n    stage.addEventListener(TouchEvent.TOUCH_END, onTouchEnd);\n}\nfunction onTouchMove(event:TouchEvent) {\n    if(event.touchPointID != touchMoveID) {\n        myTextField.text = "ignoring unrelated touch";\n        return;\n    }\n    mySprite.x = event.stageX;\n    mySprite.y = event.stageY;\n    myTextField.text = "touch move" + event.touchPointID;\n}\nfunction onTouchEnd(event:TouchEvent) {\n    if(event.touchPointID != touchMoveID) {\n        myTextField.text = "ignoring unrelated touch end";\n        return;\n    }\n    touchMoveID = 0;\n    stage.removeEventListener(TouchEvent.TOUCH_MOVE, onTouchMove);\n    stage.removeEventListener(TouchEvent.TOUCH_END, onTouchEnd);\n    myTextField.text = "touch end" + event.touchPointID;\n}\n')))}s.isMDXComponent=!0}}]);