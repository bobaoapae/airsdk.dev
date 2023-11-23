"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[10666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),h=a,m=c["".concat(d,".").concat(h)]||c[h]||w[h]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>w,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const o={sidebar_position:2},r="Creating windows",l={unversionedId:"development/client-system-interaction/working-with-air-native-windows/creating-windows",id:"development/client-system-interaction/working-with-air-native-windows/creating-windows",title:"Creating windows",description:"AIR automatically creates the first window for an application, but you can",source:"@site/docs/development/client-system-interaction/working-with-air-native-windows/creating-windows.md",sourceDirName:"development/client-system-interaction/working-with-air-native-windows",slug:"/development/client-system-interaction/working-with-air-native-windows/creating-windows",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/creating-windows",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/working-with-air-native-windows/creating-windows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Basics of native windows in AIR",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/basics-of-native-windows-in-air"},next:{title:"Managing windows",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/managing-windows"}},d={},s=[{value:"Specifying window initialization properties",id:"specifying-window-initialization-properties",level:2},{value:"Creating the initial application window",id:"creating-the-initial-application-window",level:2},{value:"Creating the initial window with ActionScript",id:"creating-the-initial-window-with-actionscript",level:3},{value:"Creating the initial window with Flex",id:"creating-the-initial-window-with-flex",level:3},{value:"Creating a NativeWindow",id:"creating-a-nativewindow",level:2},{value:"Creating an HTML window",id:"creating-an-html-window",level:2},{value:"Creating a mx:Window",id:"creating-a-mxwindow",level:2},{value:"Adding content to a window",id:"adding-content-to-a-window",level:2},{value:"Loading a SWF file or image",id:"loading-a-swf-file-or-image",level:4},{value:"Loading HTML content into a NativeWindow",id:"loading-html-content-into-a-nativewindow",level:4},{value:"Adding SWF content as an overlay on an HTML window",id:"adding-swf-content-as-an-overlay-on-an-html-window",level:4},{value:"Example: Creating a native window",id:"example-creating-a-native-window",level:2}],p={toc:s},c="wrapper";function w(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,i.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-windows"},"Creating windows"),(0,a.kt)("p",null,"AIR automatically creates the first window for an application, but you can\ncreate any additional windows you need. To create a native window, use the\nNativeWindow constructor method."),(0,a.kt)("p",null,"To create an HTML window, either use the HTMLLoader ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," method\nor, from an HTML document, call the JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"window.open()")," method. The\nwindow created is a NativeWindow object whose display list contains an\nHTMLLoader object. The HTMLLoader object interprets and displays the HTML and\nJavaScript content for the window. You can access the properties of the\nunderlying NativeWindow object from JavaScript using the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.nativeWindow"),"\nproperty. (This property is only accessible to code running in the AIR\napplication sandbox.)"),(0,a.kt)("p",null,"When you initialize a window\u2014including the initial application window\u2014you should\nconsider creating the window in the invisible state, loading content or\nexecuting any graphical updates, and then making the window visible. This\nsequence prevents any jarring visual changes from being visible to your users.\nYou can specify that the initial window of your application should be created in\nthe invisible state by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"<visible>false</visible>")," tag in the\napplication descriptor (or by leaving the tag out altogether since ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," is\nthe default value). New NativeWindows are invisible by default. When you create\nan HTML window with the HTMLLoader ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," method, you can set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"visible")," argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Call the NativeWindow ",(0,a.kt)("inlineCode",{parentName:"p"},"activate()")," method or set\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"visible")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to make a window visible."),(0,a.kt)("h2",{id:"specifying-window-initialization-properties"},"Specifying window initialization properties"),(0,a.kt)("p",null,"The initialization properties of a native window cannot be changed after the\ndesktop window is created. These immutable properties and their default values\ninclude:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"systemChrome"),(0,a.kt)("td",{parentName:"tr",align:null},"standard")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"normal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transparent"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner"),(0,a.kt)("td",{parentName:"tr",align:null},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maximizable"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minimizable"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resizable"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))),(0,a.kt)("p",null,"Set the properties for the initial window created by AIR in the application\ndescriptor file. The main window of an AIR application is always type, ",(0,a.kt)("em",{parentName:"p"},"normal"),"\n. (Additional window properties can be specified in the descriptor file, such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),", but these properties can be changed at any\ntime.)"),(0,a.kt)("p",null,"Set the properties for other native and HTML windows created by your application\nusing the NativeWindowInitOptions class. When you create a window, you must pass\na NativeWindowInitOptions object specifying the window properties to either the\nNativeWindow constructor function or the HTMLLoader ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," method."),(0,a.kt)("p",null,"The following code creates a NativeWindowInitOptions object for a utility\nwindow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var options:NativeWindowInitOptions = new NativeWindowInitOptions();\noptions.systemChrome = NativeWindowSystemChrome.STANDARD;\noptions.type = NativeWindowType.UTILITY\noptions.transparent = false;\noptions.resizable = false;\noptions.maximizable = false;\n")),(0,a.kt)("p",null,"Setting ",(0,a.kt)("em",{parentName:"p"},"systemChrome")," to ",(0,a.kt)("em",{parentName:"p"},"standard")," when ",(0,a.kt)("em",{parentName:"p"},"transparent")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," is\n",(0,a.kt)("inlineCode",{parentName:"p"},"lightweight")," ",(0,a.kt)("em",{parentName:"p"},"is not supported.")),(0,a.kt)("p",null,"Note: You cannot set the initialization properties for a window created with the\nJavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"window.open()")," function. You can, however, override how these\nwindows are created by implementing your own HTMLHost class. See\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/scripting-the-air-html-container/defining-browser-like-user-interfaces-for-html-content#handling-javascript-calls-to-windowopen"},"Handling JavaScript calls to window.open()"),"\nfor more information."),(0,a.kt)("p",null,"When you create a window with the Flex mx:Window class, specify the\ninitialization properties on the window object itself, either in the MXML\ndeclaration for the window, or in the code that creates the window. The\nunderlying NativeWindow object is not created until you call the ",(0,a.kt)("inlineCode",{parentName:"p"},"open()"),"\nmethod. Once a window is opened, these initialization properties cannot be\nchanged."),(0,a.kt)("h2",{id:"creating-the-initial-application-window"},"Creating the initial application window"),(0,a.kt)("p",null,"AIR creates the initial application window based on the properties specified in\nthe application descriptor and loads the file referenced in the content element.\nThe content element must reference a SWF file or an HTML file."),(0,a.kt)("p",null,"The initial window can be the main window of your application or it can merely\nserve to launch one or more other windows. You do not have to make it visible at\nall."),(0,a.kt)("h3",{id:"creating-the-initial-window-with-actionscript"},"Creating the initial window with ActionScript"),(0,a.kt)("p",null,"When you create an AIR application using ActionScript, the main class of your\napplication must extend the Sprite class (or a subclass of Sprite). This class\nserves as the main entry point for the application."),(0,a.kt)("p",null,"When your application launches, AIR creates a window, creates an instance of the\nmain class, and adds the instance to the window stage. To access the window, you\ncan listen for the ",(0,a.kt)("inlineCode",{parentName:"p"},"addedToStage")," event and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow")," property\nof the Stage object to get a reference to the NativeWindow object."),(0,a.kt)("p",null,"The following example illustrates the basic skeleton for the main class of an\nAIR application built with ActionScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package\n{\n    import flash.display.NativeWindow;\n    import flash.display.Sprite;\n    import flash.events.Event;\n\n    public class MainClass extends Sprite\n    {\n        private var mainWindow:NativeWindow;\n        public function MainClass(){\n            this.addEventListener(Event.ADDED_TO_STAGE, initialize);\n        }\n\n        private function initialize(event:Event):void{\n            mainWindow = this.stage.nativeWindow;\n            //perform initialization...\n            mainWindow.activate(); //show the window\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Note: Technically, you CAN access the ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow")," property in the constructor\nfunction of the main class. However, this is a special case applying only to the\ninitial application window."),(0,a.kt)("p",null,"When creating an application in Flash Professional, the main document class is\ncreated automatically if you do not create your own in a separate ActionScript\nfile. You can access the NativeWindow object for the initial window using the\nstage ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow")," property. For example, the following code activates the\nmain window in the maximized state (from the timeline):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import flash.display.NativeWindow;\n\nvar mainWindow:NativeWindow = this.stage.nativeWindow;\nmainWindow.maximize();\nmainWindow.activate();\n")),(0,a.kt)("h3",{id:"creating-the-initial-window-with-flex"},"Creating the initial window with Flex"),(0,a.kt)("p",null,"When creating an AIR application with the Flex framework, use the\nmx:WindowedApplication as the root element of your main MXML file. (You can use\nthe mx:Application component, but it does not support all the features available\nin AIR.) The WindowedApplication component serves as the initial entry point for\nthe application."),(0,a.kt)("p",null,"When you launch the application, AIR creates a native window, initializes the\nFlex framework, and adds the WindowedApplication object to the window stage.\nWhen the launch sequence finishes, the WindowedApplication dispatches an\n",(0,a.kt)("inlineCode",{parentName:"p"},"applicationComplete")," event. Access the desktop window object with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow")," property of the WindowedApplication instance."),(0,a.kt)("p",null,"The following example creates a simple WindowedApplication component that sets\nits x and y coordinates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="utf-8"?>\n<mx:WindowedApplication xmlns:mx="https://www.adobe.com/2006/mxml"\n    applicationComplete="placeWindow()">\n    <mx:Script>\n    <![CDATA[\n        private function placeWindow():void{\n            this.nativeWindow.x = 300;\n            this.nativeWindow.y = 300;\n        }\n    ]]>\n    </mx:Script>\n    <mx:Label text="Hello World" horizontalCenter="0" verticalCenter="0"/>\n</mx:WindowedApplication>\n')),(0,a.kt)("h2",{id:"creating-a-nativewindow"},"Creating a NativeWindow"),(0,a.kt)("p",null,"To create a NativeWindow, pass a NativeWindowInitOptions object to the\nNativeWindow constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var options:NativeWindowInitOptions = new NativeWindowInitOptions();\noptions.systemChrome = NativeWindowSystemChrome.STANDARD;\noptions.transparent = false;\nvar newWindow:NativeWindow = new NativeWindow(options);\n")),(0,a.kt)("p",null,"The window is not shown until you set the ",(0,a.kt)("inlineCode",{parentName:"p"},"visible")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or call\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"activate()")," method."),(0,a.kt)("p",null,"Once the window is created, you can initialize its properties and load content\ninto the window using the stage property and Flash display list techniques."),(0,a.kt)("p",null,"In almost all cases, you should set the stage ",(0,a.kt)("inlineCode",{parentName:"p"},"scaleMode")," property of a new\nnative window to ",(0,a.kt)("inlineCode",{parentName:"p"},"noScale")," (use the ",(0,a.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE")," constant). The\nFlash scale modes are designed for situations in which the application author\ndoes not know the aspect ratio of the application display space in advance. The\nscale modes let the author choose the least-bad compromise: clip the content,\nstretch or squash it, or pad it with empty space. Since you control the display\nspace in AIR (the window frame), you can size the window to the content or the\ncontent to the window without compromise."),(0,a.kt)("p",null,"The scale mode for Flex and HTML windows is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"noScale")," automatically."),(0,a.kt)("p",null,"Note: To determine the maximum and minimum window sizes allowed on the current\noperating system, use the following static NativeWindow properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var maxOSSize:Point = NativeWindow.systemMaxSize;\nvar minOSSize:Point = NativeWindow.systemMinSize;\n")),(0,a.kt)("h2",{id:"creating-an-html-window"},"Creating an HTML window"),(0,a.kt)("p",null,"To create an HTML window, you can either call the JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"Window.open()"),"\nmethod, or you can call the AIR HTMLLoader class ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," method."),(0,a.kt)("p",null,"HTML content in any security sandbox can use the standard JavaScript\n",(0,a.kt)("inlineCode",{parentName:"p"},"Window.open()")," method. If the content is running outside the application\nsandbox, the ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," method can only be called in response to user interaction,\nsuch as a mouse click or keypress. When ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," is called, a window with system\nchrome is created to display the content at the specified URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'newWindow = window.open("xmpl.html", "logWindow", "height=600, width=400, top=10, left=10");\n')),(0,a.kt)("p",null,"Note: You can extend the HTMLHost class in ActionScript to customize the window\ncreated with the JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"window.open()")," function. See\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/scripting-the-air-html-container/defining-browser-like-user-interfaces-for-html-content#about-extending-the-htmlhost-class"},"About extending the HTMLHost class"),"."),(0,a.kt)("p",null,"Content in the application security sandbox has access to the more powerful\nmethod of creating windows, ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLLoader.createRootWindow()"),". With this method,\nyou can specify all the creation options for a new window. For example, the\nfollowing JavaScript code creates a lightweight type window without system\nchrome that is 300x400 pixels in size:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var options = new air.NativeWindowInitOptions();\noptions.systemChrome = "none";\noptions.type = "lightweight";\n\nvar windowBounds = new air.Rectangle(200,250,300,400);\nnewHTMLLoader = air.HTMLLoader.createRootWindow(true, options, true, windowBounds);\nnewHTMLLoader.load(new air.URLRequest("xmpl.html"));\n')),(0,a.kt)("p",null,"Note: If the content loaded by a new window is outside the application security\nsandbox, the window object does not have the AIR properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"htmlLoader"),"."),(0,a.kt)("p",null,"If you create a transparent window, then SWF content embedded in the HTML loaded\ninto that window is not always displayed. You must set the ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode")," parameter of\nthe object or embed tag used to reference the SWF file to either ",(0,a.kt)("inlineCode",{parentName:"p"},"opaque")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"transparent"),". The default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),", so, by default, SWF\ncontent is not displayed in transparent windows. PDF content cannot be displayed\nin transparent windows, no matter which ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode")," value is set. (Prior to AIR\n1.5.2, SWF content could not be displayed in transparent windows, either.)"),(0,a.kt)("p",null,"Windows created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," method remain independent from the\nopening window. The ",(0,a.kt)("inlineCode",{parentName:"p"},"parent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"opener")," properties of the JavaScript Window\nobject are ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". The opening window can access the Window object of the new\nwindow using the HTMLLoader reference returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()"),"\nfunction. In the context of the previous example, the statement\n",(0,a.kt)("inlineCode",{parentName:"p"},"newHTMLLoader.window")," would reference the JavaScript Window object of the\ncreated window."),(0,a.kt)("p",null,"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"createRootWindow()")," function can be called from both JavaScript and\nActionScript."),(0,a.kt)("h2",{id:"creating-a-mxwindow"},"Creating a mx:Window"),(0,a.kt)("p",null,"To create a mx:Window, you can create an MXML file using mx:Window as the root\ntag, or you can call the Window class constructor directly."),(0,a.kt)("p",null,"The following example creates and shows a mx:Window by calling the Window\nconstructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var newWindow:Window = new Window();\nnewWindow.systemChrome = NativeWindowSystemChrome.NONE;\nnewWindow.transparent = true;\nnewWindow.title = "New Window";\nnewWindow.width = 200;\nnewWindow.height = 200;\nnewWindow.open(true);\n')),(0,a.kt)("h2",{id:"adding-content-to-a-window"},"Adding content to a window"),(0,a.kt)("p",null,"How you add content to an AIR window depends on the type of window. For example,\nMXML and HTML let you declaratively define the basic content of the window. You\ncan embed resources in the application SWF files or you can load them from\nseparate application files. Flex, Flash, and HTML content can all be created on\nthe fly and added to a window dynamically."),(0,a.kt)("p",null,"When you load SWF content, or HTML content containing JavaScript, you must take\nthe AIR security model into consideration. Any content in the application\nsecurity sandbox, that is, content installed with your application and loadable\nwith the app: URL scheme, has full privileges to access all the AIR APIs. Any\ncontent loaded from outside this sandbox cannot access the AIR APIs. JavaScript\ncontent outside the application sandbox is not able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"nativeWindow"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"htmlLoader")," properties of the JavaScript Window object."),(0,a.kt)("p",null,"To allow safe cross-scripting, you can use a sandbox bridge to provide a limited\ninterface between application content and non-application content. In HTML\ncontent, you can also map pages of your application into a non-application\nsandbox to allow the code on that page to cross-script external content. See\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/"},"AIR security"),"."),(0,a.kt)("h4",{id:"loading-a-swf-file-or-image"},"Loading a SWF file or image"),(0,a.kt)("p",null,"You can load Flash SWF files or images into the display list of a native window\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"flash.display.Loader")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'package\n{\n    import flash.display.Sprite;\n    import flash.events.Event;\n    import flash.net.URLRequest;\n    import flash.display.Loader;\n\n    public class LoadedSWF extends Sprite\n    {\n        public function LoadedSWF(){\n            var loader:Loader = new Loader();\n            loader.load(new URLRequest("visual.swf"));\n            loader.contentLoaderInfo.addEventListener(Event.COMPLETE,loadFlash);\n        }\n\n        private function loadFlash(event:Event):void{\n            addChild(event.target.loader);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Note: Older SWF files created using ActionScript 1 or 2 share global states such\nas class definitions, singletons, and global variables if they are loaded into\nthe same window. If such a SWF file relies on untouched global states to work\ncorrectly, it cannot be loaded more than once into the same window, or loaded\ninto the same window as another SWF file using overlapping class definitions and\nvariables. This content can be loaded into separate windows."),(0,a.kt)("h4",{id:"loading-html-content-into-a-nativewindow"},"Loading HTML content into a NativeWindow"),(0,a.kt)("p",null,"To load HTML content into a NativeWindow, you can either add an HTMLLoader\nobject to the window stage and load the HTML content into the HTMLLoader, or\ncreate a window that already contains an HTMLLoader object by using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLLoader.createRootWindow()")," method. The following example displays HTML\ncontent within a 300 by 500 pixel display area on the stage of a native window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'//newWindow is a NativeWindow instance\nvar htmlView:HTMLLoader = new HTMLLoader();\nhtmlView.width = 300;\nhtmlView.height = 500;\n\n//set the stage so display objects are added to the top-left and not scaled\nnewWindow.stage.align = "TL";\nnewWindow.stage.scaleMode = "noScale";\nnewWindow.stage.addChild( htmlView );\n\n//urlString is the URL of the HTML page to load\nhtmlView.load( new URLRequest(urlString) );\n')),(0,a.kt)("p",null,"To load an HTML page into a Flex application, you can use the Flex HTML\ncomponent."),(0,a.kt)("p",null,"SWF content in an HTML file is not displayed if the window uses transparency\n(that is the ",(0,a.kt)("inlineCode",{parentName:"p"},"transparent")," property of the window is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") unless the ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode"),"\nparameter of the object or embed tag used to reference the SWF file is set to\neither ",(0,a.kt)("inlineCode",{parentName:"p"},"opaque")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transparent"),". Since the default ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode")," value is ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),",\nby default, SWF content is not displayed in a transparent window. PDF content is\nnot displayed in a transparent window no matter what ",(0,a.kt)("inlineCode",{parentName:"p"},"wmode")," value is used."),(0,a.kt)("p",null,"Also, neither SWF nor PDF content is displayed if the HTMLLoader control is\nscaled, rotated, or if the HTMLLoader ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha")," property is set to a value other\nthan 1.0."),(0,a.kt)("h4",{id:"adding-swf-content-as-an-overlay-on-an-html-window"},"Adding SWF content as an overlay on an HTML window"),(0,a.kt)("p",null,"Because HTML windows are contained within a NativeWindow instance, you can add\nFlash display objects both above and below the HTML layer in the display list."),(0,a.kt)("p",null,"To add a display object above the HTML layer, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"addChild()")," method of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"window.nativeWindow.stage")," property. The ",(0,a.kt)("inlineCode",{parentName:"p"},"addChild()")," method adds content\nlayered above any existing content in the window."),(0,a.kt)("p",null,"To add a display object below the HTML layer, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"addChildAt()")," method of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"window.nativeWindow.stage")," property, passing in a value of zero for the\n",(0,a.kt)("inlineCode",{parentName:"p"},"index")," parameter. Placing an object at the zero index moves existing content,\nincluding the HTML display, up one layer and insert the new content at the\nbottom. For content layered underneath the HTML page to be visible, you must set\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"paintsDefaultBackground")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLlLoader")," object to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".\nIn addition, any elements of the page that set a background color, will not be\ntransparent. If, for example, you set a background color for the body element of\nthe page, none of the page will be transparent."),(0,a.kt)("p",null,"The following example illustrates how to add a Flash display objects as overlays\nand underlays to an HTML page. The example creates two simple shape objects,\nadds one below the HTML content and one above. The example also updates the\nshape position based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"enterFrame")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n<head>\n    <title>Bouncers</title>\n    <script src="AIRAliases.js" type="text/javascript"><\/script>\n    <script language="JavaScript" type="text/javascript">\n        air.Shape = window.runtime.flash.display.Shape;\n\n        function Bouncer(radius, color){\n            this.radius = radius;\n            this.color = color;\n\n            //velocity\n            this.vX = -1.3;\n            this.vY = -1;\n\n            //Create a Shape object and draw a circle with its graphics property\n            this.shape = new air.Shape();\n            this.shape.graphics.lineStyle(1,0);\n            this.shape.graphics.beginFill(this.color,.9);\n            this.shape.graphics.drawCircle(0,0,this.radius);\n            this.shape.graphics.endFill();\n\n            //Set the starting position\n            this.shape.x = 100;\n            this.shape.y = 100;\n\n\n            //Moves the sprite by adding (vX,vY) to the current position\n            this.update = function(){\n                this.shape.x += this.vX;\n                this.shape.y += this.vY;\n\n                //Keep the sprite within the window\n                if( this.shape.x - this.radius < 0){\n                    this.vX = -this.vX;\n                }\n                if( this.shape.y - this.radius < 0){\n                    this.vY = -this.vY;\n                }\n                if( this.shape.x  + this.radius > window.nativeWindow.stage.stageWidth){\n                    this.vX = -this.vX;\n                }\n                if( this.shape.y  + this.radius > window.nativeWindow.stage.stageHeight){\n                    this.vY = -this.vY;\n                }\n\n            };\n        }\n\n        function init(){\n            //turn off the default HTML background\n            window.htmlLoader.paintsDefaultBackground = false;\n            var bottom = new Bouncer(60,0xff2233);\n            var top = new Bouncer(30,0x2441ff);\n\n            //listen for the enterFrame event\n            window.htmlLoader.addEventListener("enterFrame",function(evt){\n                bottom.update();\n                top.update();\n            });\n\n            //add the bouncing shapes to the window stage\n            window.nativeWindow.stage.addChildAt(bottom.shape,0);\n            window.nativeWindow.stage.addChild(top.shape);\n        }\n    <\/script>\n</head>\n<body onload="init();">\n    <h1>de Finibus Bonorum et Malorum</h1>\n    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n    et quasi architecto beatae vitae dicta sunt explicabo.</p>\n    <p style="background-color:#FFFF00; color:#660000;">This paragraph has a background color.</p>\n    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias\n    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\n    officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>\n</body>\n</html>\n')),(0,a.kt)("p",null,"This example provides a rudimentary introduction to some advanced techniques\nthat cross over the boundaries between JavaScript and ActionScript in AIR. If\nyour are unfamiliar with using ActionScript display objects, refer to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/"},"Display programming"),"."),(0,a.kt)("h2",{id:"example-creating-a-native-window"},"Example: Creating a native window"),(0,a.kt)("p",null,"The following example illustrates how to create a native window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public function createNativeWindow():void {\n    //create the init options\n    var options:NativeWindowInitOptions = new NativeWindowInitOptions();\n    options.transparent = false;\n    options.systemChrome = NativeWindowSystemChrome.STANDARD;\n    options.type = NativeWindowType.NORMAL;\n\n    //create the window\n    var newWindow:NativeWindow = new NativeWindow(options);\n    newWindow.title = "A title";\n    newWindow.width = 600;\n    newWindow.height = 400;\n\n    newWindow.stage.align = StageAlign.TOP_LEFT;\n    newWindow.stage.scaleMode = StageScaleMode.NO_SCALE;\n\n    //activate and show the new window\n    newWindow.activate();\n}\n')),(0,a.kt)("p",null,"More Help topics"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(72004).Z,width:"16",height:"16"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150519004618/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WSacd9bdd0c5c09f4a-690d4877120e8b878b0-8000.html"},"Using the Flex AIR components")))}w.isMDXComponent=!0},72004:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFHRFWHRDcmVhdGlvbiBUaW1lADQvNS8wN+R1htQAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzOY1kYDAAAEEXRFWHRYTUw6Y29tLmFkb2JlLnhtcAA8P3hwYWNrZXQgYmVnaW49IiAgICIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjEtYzAzNCA0Ni4yNzI5NzYsIFNhdCBKYW4gMjcgMjAwNyAyMjoxMTo0MSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhhcDpDcmVhdG9yVG9vbD5BZG9iZSBGaXJld29ya3MgQ1MzPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4YXA6Q3JlYXRlRGF0ZT4yMDA3LTA0LTA1VDIwOjA0OjM2WjwveGFwOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4YXA6TW9kaWZ5RGF0ZT4yMDA3LTA0LTA1VDIwOjUyOjA2WjwveGFwOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCdW47vAAABbUlEQVQokY1SsYoCMRCdZBdRK2tLK8F/sNdKLCxUsPED7PcvBEsRhAUbG62s7KwFsfAn1EpnJpvkitHg7R3cvSJMJvMmb/Kier1eFEVRFGmtAcA5Z6211mYfCNv9fh9/QrLOOfgO/8bj8Yi996FrCCT+CUSMpaUxZrVaSb/T6ZQkSWDmtMXMrJSy1nrvl8tlmqYAoLWW28IAsgKAJiJERETpYYzJsqzdbidJgoiDwaDT6RhjmNkYAwAaEYXjnBsOh7vdrl6vbzabRqPR7/e73e56vZZqZgaAmIgAQOTO5/PFYiEK0zQdj8fb7fZ6vQJAeD0teohIVDIzERUKhVarNZvNms1msVgkIsm/ZgiS5F5mHo1Gt9ttOp2ez+fJZEJvAICq1WrBYKWU2JTzIWQul0uMiPL8chCQs0wIr6G995/+h+oQhGoAiBHxV0JYc/8qPh6Ph8MB/oFqtVoul5X3/vl83u/3PwmlUqlSqXwB0IXy0gbtBNUAAAAASUVORK5CYII="}}]);