"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[50597],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=r,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return t?n.createElement(u,o(o({ref:a},d),{},{components:t})):n.createElement(u,o({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},82004:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={sidebar_position:3},o="Working with cameras",s={unversionedId:"development/rich-media-content/working-with-cameras",id:"development/rich-media-content/working-with-cameras",title:"Working with cameras",description:"A camera attached to a user's computer can serve as a source of video data that",source:"@site/docs/development/rich-media-content/working-with-cameras.md",sourceDirName:"development/rich-media-content",slug:"/development/rich-media-content/working-with-cameras",permalink:"/docs/development/rich-media-content/working-with-cameras",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-cameras.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Using the StageVideo APIs",permalink:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-apis"},next:{title:"Using digital rights management",permalink:"/docs/development/rich-media-content/using-digital-rights-management/"}},c={},l=[{value:"Understanding the Camera class",id:"understanding-the-camera-class",level:2},{value:"Displaying camera content on screen",id:"displaying-camera-content-on-screen",level:2},{value:"Designing your camera application",id:"designing-your-camera-application",level:2},{value:"Connecting to a user&#39;s camera",id:"connecting-to-a-users-camera",level:2},{value:"Verifying that cameras are installed",id:"verifying-that-cameras-are-installed",level:2},{value:"Mobile device cameras",id:"mobile-device-cameras",level:4},{value:"Detecting permissions for camera access",id:"detecting-permissions-for-camera-access",level:2},{value:"Maximizing camera video quality",id:"maximizing-camera-video-quality",level:2},{value:"Monitoring camera status",id:"monitoring-camera-status",level:2}],d={toc:l},m="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-cameras"},"Working with cameras"),(0,r.kt)("p",null,"A camera attached to a user's computer can serve as a source of video data that\nyou can display and manipulate using ActionScript. The\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/media/Camera.html"},"Camera"),"\nclass is the mechanism built into ActionScript for working with a computer or\ndevice camera."),(0,r.kt)("p",null,"On mobile devices, you can also use the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/media/CameraUI.html"},"CameraUI"),"\nclass. The CameraUI class launches a separate camera application to allow the\nuser to capture a still image or video. When the user is finished, your\napplication can access the image or video through a\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/media/MediaPromise.html"},"MediaPromise"),"\nobject."),(0,r.kt)("h2",{id:"understanding-the-camera-class"},"Understanding the Camera class"),(0,r.kt)("p",null,"The Camera object allows you to connect to the user's local camera and broadcast\nthe video either locally (back to the user) or remotely to a server (such as\nFlash Media Server)."),(0,r.kt)("p",null,"Using the Camera class, you can access the following kinds of information about\nthe user's camera:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Which cameras installed on the user's computer or device are available")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Whether a camera is installed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Whether Flash Player is allowed or denied access to the user's camera")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Which camera is currently active")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The width and height of the video being captured"))),(0,r.kt)("p",null,"The Camera class includes several useful methods and properties for working with\ncamera objects. For example, the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.names")," property contains an\narray of camera names currently installed on the user's computer. You can also\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property to display the name of the currently active camera."),(0,r.kt)("p",null,"Note: When streaming camera video across the network, you should always handle\nnetwork interruptions. Network interruptions can occur for many reasons,\nparticularly on mobile devices."),(0,r.kt)("h2",{id:"displaying-camera-content-on-screen"},"Displaying camera content on screen"),(0,r.kt)("p",null,"Connecting to a camera can require less code than using the NetConnection and\nNetStream classes to load a video. The camera class can also quickly become\ntricky because with Flash Player, you need a user's permission to connect to\ntheir camera before you can access it."),(0,r.kt)("p",null,"The following code demonstrates how you can use the Camera class to connect to a\nuser's local camera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var cam:Camera = Camera.getCamera();\nvar vid:Video = new Video();\nvid.attachCamera(cam);\naddChild(vid);\n")),(0,r.kt)("p",null,"Note: The Camera class does not have a constructor method. In order to create a\nnew Camera instance you use the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.getCamera()")," method."),(0,r.kt)("h2",{id:"designing-your-camera-application"},"Designing your camera application"),(0,r.kt)("p",null,"When writing an application that connects to a user's camera, you need to\naccount for the following in your code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check if the user has a camera currently installed. Handle the case where no\ncamera is available.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Flash Player only, check if the user has explicitly allowed access to the\ncamera. For security reasons the player displays the Flash Player Settings\ndialog which lets the user allow or deny access to their camera. This prevents\nFlash Player from connecting to a user's camera and broadcasting a video\nstream without their permission. If a user clicks allow, your application can\nconnect to the user's camera. If the user clicks deny, your application will\nbe unable to access the user's camera. Your applications should always handle\nboth cases gracefully.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For AIR only, check whether the Camera class is supported for the device\nprofiles supported by your application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Camera class is not supported in mobile browsers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Camera class is not supported in mobile AIR apps that use the GPU\nrendering mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On mobile devices, only one camera can be active at a time."))),(0,r.kt)("h2",{id:"connecting-to-a-users-camera"},"Connecting to a user's camera"),(0,r.kt)("p",null,"The first step when connecting to a user's camera is to create a new camera\ninstance by creating a variable of type Camera and initializing it to the return\nvalue of the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.getCamera()")," method."),(0,r.kt)("p",null,"The next step is to create a new video object and attach the Camera object to\nit."),(0,r.kt)("p",null,"The third step is to add the video object to the display list. You need to\nperform steps 2 and 3 because the Camera class does not extend the DisplayObject\nclass so it cannot be added directly to the display list. To display the\ncamera's captured video, you create a new video object and call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"attachCamera()")," method."),(0,r.kt)("p",null,"The following code shows these three steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var cam:Camera = Camera.getCamera();\nvar vid:Video = new Video();\nvid.attachCamera(cam);\naddChild(vid);\n")),(0,r.kt)("p",null,"Note that if a user does not have a camera installed, the application does not\ndisplay anything."),(0,r.kt)("p",null,"In real life, you need to perform additional steps for your application. See\n",(0,r.kt)("a",{parentName:"p",href:"#verifying-that-cameras-are-installed"},"Verifying that cameras are installed"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"#detecting-permissions-for-camera-access"},"Detecting permissions for camera access"),"\nfor further information."),(0,r.kt)("h2",{id:"verifying-that-cameras-are-installed"},"Verifying that cameras are installed"),(0,r.kt)("p",null,"Before you attempt to use any methods or properties on a camera instance, you'll\nwant to verify that the user has a camera installed. There are two ways to check\nwhether the user has a camera installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.names")," property which contains an array of camera\nnames which are available. Typically this array will have one or fewer\nstrings, as most users will not likely have more than one camera installed at\na time. The following code demonstrates how you could check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.names"),"\nproperty to see if the user has any available cameras:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'if (Camera.names.length > 0)\n{\n    trace("User has at least one camera installed.");\n    var cam:Camera = Camera.getCamera(); // Get default camera.\n}\nelse\n{\n    trace("User has no cameras installed.");\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the return value of the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.getCamera()")," method. If no\ncameras are available or installed, this method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", otherwise it\nreturns a reference to a Camera object. The following code demonstrates how\nyou could check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Camera.getCamera()")," method to see if the user has any\navailable cameras:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'var cam:Camera = Camera.getCamera();\nif (cam == null)\n{\n    trace("User has no cameras installed.");\n}\nelse\n{\n    trace("User has at least 1 camera installed.");\n}\n')))),(0,r.kt)("p",null,"Since the Camera class doesn't extend the DisplayObject class, it cannot be\ndirectly added to the display list using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addChild()")," method. In order to\ndisplay the camera's captured video, you need to create a new Video object and\ncall the ",(0,r.kt)("inlineCode",{parentName:"p"},"attachCamera()")," method on the Video instance."),(0,r.kt)("p",null,"This snippet shows how you can attach the camera if one exists; if not, the\napplication simply displays nothing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var cam:Camera = Camera.getCamera();\nif (cam != null)\n{\n    var vid:Video = new Video();\n    vid.attachCamera(cam);\n    addChild(vid);\n}\n")),(0,r.kt)("h4",{id:"mobile-device-cameras"},"Mobile device cameras"),(0,r.kt)("p",null,"The Camera class is not supported in the Flash Player runtime in mobile\nbrowsers."),(0,r.kt)("p",null,"In AIR applications on mobile devices you can access the camera or cameras on\nthe device. On mobile devices, you can use both the front- and the back-facing\ncamera, but only one camera output can be displayed at any given time.\n(Attaching a second camera will detach the first.) The front-facing camera is\nhorizontally mirrored on iOS, on Android, it is not."),(0,r.kt)("h2",{id:"detecting-permissions-for-camera-access"},"Detecting permissions for camera access"),(0,r.kt)("p",null,"In the AIR application sandbox, the application can access any camera without\nthe user's permission. On Android, however, the application must specify the\nAndroid CAMERA permission in the application descriptor."),(0,r.kt)("p",null,"Before Flash Player can display a camera's output, the user must explicitly\nallow Flash Player to access the camera. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"attachCamera()")," method gets\ncalled Flash Player displays the Flash Player Settings dialog box which prompts\nthe user to either allow or deny Flash Player access to the camera and\nmicrophone. If the user clicks the Allow button, Flash Player displays the\ncamera's output in the Video instance on the Stage. If the user clicks the Deny\nbutton, Flash Player is unable to connect to the camera and the Video object\ndoes not display anything."),(0,r.kt)("p",null,"If you want to detect whether the user allowed Flash Player access to the\ncamera, you can listen for the camera's ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," event ( ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusEvent.STATUS"),"),\nas seen in the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var cam:Camera = Camera.getCamera();\nif (cam != null)\n{\n    cam.addEventListener(StatusEvent.STATUS, statusHandler);\n    var vid:Video = new Video();\n    vid.attachCamera(cam);\n    addChild(vid);\n}\nfunction statusHandler(event:StatusEvent):void\n{\n    // This event gets dispatched when the user clicks the "Allow" or "Deny"\n    // button in the Flash Player Settings dialog box.\n    trace(event.code); // "Camera.Muted" or "Camera.Unmuted"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"statusHandler()")," function gets called as soon as the user clicks either\nAllow or Deny. You can detect which button the user clicked, using one of two\nmethods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"statusHandler()"),' function contains a code\nproperty which contains the string "Camera.Muted" or "Camera.Unmuted". If the\nvalue is "Camera.Muted" the user clicked the Deny button and Flash Player is\nunable to access the camera. You can see an example of this in the following\nsnippet:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'function statusHandler(event:StatusEvent):void\n{\n    switch (event.code)\n    {\n      case "Camera.Muted":\n          trace("User clicked Deny.");\n            break;\n        case "Camera.Unmuted":\n            trace("User clicked Accept.");\n            break;\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Camera class contains a read-only property named ",(0,r.kt)("inlineCode",{parentName:"p"},"muted")," which specifies\nwhether the user has denied access to the camera ( ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") or allowed access (\n",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") in the Flash Player Privacy panel. You can see an example of this in\nthe following snippet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'function statusHandler(event:StatusEvent):void\n{\n    if (cam.muted)\n    {\n        trace("User clicked Deny.");\n    }\n    else\n    {\n        trace("User clicked Accept.");\n    }\n}\n')))),(0,r.kt)("p",null,"By checking for the status event to be dispatched, you can write code that\nhandles the user accepting or denying access to the camera and clean up\nappropriately. For example, if the user clicks the Deny button, you could\ndisplay a message to the user stating that they need to click Allow if they want\nto participate in a video chat, or you could instead make sure the Video object\non the display list is deleted to free up system resources."),(0,r.kt)("p",null,"In AIR, a Camera object does not dispatch status events since permission to use\nthe camera is not dynamic."),(0,r.kt)("h2",{id:"maximizing-camera-video-quality"},"Maximizing camera video quality"),(0,r.kt)("p",null,"By default, new instances of the Video class are 320 pixels wide by 240 pixels\nhigh. In order to maximize video quality you should always ensure that your\nvideo object matches the same dimensions as the video being returned by the\ncamera object. You can get the camera object's width and height by using the\nCamera class's ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," properties, you can then set the video\nobject's ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," properties to match the camera objects dimensions,\nor you can pass the camera's width and height to the Video class's constructor\nmethod, as seen in the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var cam:Camera = Camera.getCamera();\nif (cam != null)\n{\n    var vid:Video = new Video(cam.width, cam.height);\n    vid.attachCamera(cam);\n    addChild(vid);\n}\n")),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCamera()")," method returns a reference to a camera object (or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\nif no cameras are available) you can access the camera's methods and properties\neven if the user denies access to their camera. This allows you to set the size\nof the video instance using the camera's native height and width."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var vid:Video;\nvar cam:Camera = Camera.getCamera();\n\nif (cam == null)\n{\n    trace("Unable to locate available cameras.");\n}\nelse\n{\n    trace("Found camera: " + cam.name);\n    cam.addEventListener(StatusEvent.STATUS, statusHandler);\n    vid = new Video();\n    vid.attachCamera(cam);\n}\nfunction statusHandler(event:StatusEvent):void\n{\n    if (cam.muted)\n    {\n        trace("Unable to connect to active camera.");\n    }\n    else\n    {\n        // Resize Video object to match camera settings and\n        // add the video to the display list.\n        vid.width = cam.width;\n        vid.height = cam.height;\n        addChild(vid);\n    }\n    // Remove the status event listener.\n    cam.removeEventListener(StatusEvent.STATUS, statusHandler);\n}\n')),(0,r.kt)("p",null,"For information about full-screen mode, see the full-screen mode section under\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties"},"Setting Stage properties"),"."),(0,r.kt)("h2",{id:"monitoring-camera-status"},"Monitoring camera status"),(0,r.kt)("p",null,"The camera class contains several properties which allow you to monitor the\nCamera object's current status. For example, the following code displays several\nof the camera's properties using a Timer object and a text field instance on the\ndisplay list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var vid:Video;\nvar cam:Camera = Camera.getCamera();\nvar tf:TextField = new TextField();\ntf.x = 300;\ntf.autoSize = TextFieldAutoSize.LEFT;\naddChild(tf);\n\nif (cam != null)\n{\n    cam.addEventListener(StatusEvent.STATUS, statusHandler);\n    vid = new Video();\n    vid.attachCamera(cam);\n}\nfunction statusHandler(event:StatusEvent):void\n{\n    if (!cam.muted)\n    {\n        vid.width = cam.width;\n        vid.height = cam.height;\n        addChild(vid);\n        t.start();\n    }\n    cam.removeEventListener(StatusEvent.STATUS, statusHandler);\n}\n\nvar t:Timer = new Timer(100);\nt.addEventListener(TimerEvent.TIMER, timerHandler);\nfunction timerHandler(event:TimerEvent):void\n{\n    tf.text = "";\n    tf.appendText("activityLevel: " + cam.activityLevel + "\\n");\n    tf.appendText("bandwidth: " + cam.bandwidth + "\\n");\n    tf.appendText("currentFPS: " + cam.currentFPS + "\\n");\n    tf.appendText("fps: " + cam.fps + "\\n");\n    tf.appendText("keyFrameInterval: " + cam.keyFrameInterval + "\\n");\n    tf.appendText("loopback: " + cam.loopback + "\\n");\n    tf.appendText("motionLevel: " + cam.motionLevel + "\\n");\n    tf.appendText("motionTimeout: " + cam.motionTimeout + "\\n");\n    tf.appendText("quality: " + cam.quality + "\\n");\n}\n')),(0,r.kt)("p",null,"Every 1/10 of a second (100 milliseconds) the Timer object's ",(0,r.kt)("inlineCode",{parentName:"p"},"timer")," event is\ndispatched and the ",(0,r.kt)("inlineCode",{parentName:"p"},"timerHandler()")," function updates the text field on the\ndisplay list."),(0,r.kt)("p",null,"More Help topics"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20160424032356/http://blogs.adobe.com/cantrell/archives/2011/02/how-to-use-cameraui-in-a-cross-platform-way.html"},"Christian Cantrell: How to use CameraUI in a Cross-platform Way")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20160316185243/http://www.riagora.com/2010/07/android-air-and-the-camera/"},"Micha\xebl CHAIZE: Android, AIR and the Camera")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20160315102228/http://coenraets.org/blog/2010/08/multi-user-video-tic-tac-toe-for-android/"},"Christophe Coenraets: Multi-User Video Tic-Tac-Toe")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20120710014226/http://www.flashmobileblog.com/2010/10/14/facebook-connect-with-air-on-android/"},"Mark Doherty: Android Radar app (source)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20120119025225/http://www.gotoandlearn.com/play.php?id=124"},"Lee Brimelow: How to access the camera on Android devices")))}p.isMDXComponent=!0}}]);