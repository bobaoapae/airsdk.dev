"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[48293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),v=i,g=c["".concat(d,".").concat(v)]||c[v]||h[v]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=v;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},67682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={},r="Using the StageVideo APIs",s={unversionedId:"development/rich-media-content/working-with-video/using-the-stagevideo-apis",id:"development/rich-media-content/working-with-video/using-the-stagevideo-apis",title:"Using the StageVideo APIs",description:"Stage video is a mechanism within the runtime that enhances video playback and",source:"@site/docs/development/rich-media-content/working-with-video/using-the-stagevideo-apis.md",sourceDirName:"development/rich-media-content/working-with-video",slug:"/development/rich-media-content/working-with-video/using-the-stagevideo-apis",permalink:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-apis",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-video/using-the-stagevideo-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Monitoring NetStream events",permalink:"/docs/development/rich-media-content/working-with-video/monitoring-netstream-events"},next:{title:"Working with cameras",permalink:"/docs/development/rich-media-content/working-with-cameras"}},d={},l=[{value:"Stage.stageVideos property",id:"stagestagevideos-property",level:2},{value:"StageVideo events",id:"stagevideo-events",level:2},{value:"Workflow for implementing the StageVideo feature",id:"workflow-for-implementing-the-stagevideo-feature",level:2},{value:"Initializing StageVideo event listeners",id:"initializing-stagevideo-event-listeners",level:2},{value:"Using the StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY event",id:"using-the-stagevideoavailabilityeventstage_video_availability-event",level:2},{value:"Using the StageVideoEvent.RENDER_STATE and VideoEvent.RENDER_STATE events",id:"using-the-stagevideoeventrender_state-and-videoeventrender_state-events",level:2},{value:"Color spaces",id:"color-spaces",level:2}],p={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-stagevideo-apis"},"Using the StageVideo APIs"),(0,i.kt)("p",null,"Stage video is a mechanism within the runtime that enhances video playback and\ndevice performance. The runtime creates and maintains this mechanism; as a\ndeveloper, your role is to configure your application to take advantage of it."),(0,i.kt)("p",null,"To use stage video, you implement a framework of event handlers that detect when\nstage video is and isn't available. When you receive notification that stage\nvideo is available, you retrieve a StageVideo object from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," property. The runtime populates this Vector object with one\nor more StageVideo objects. You can then use one of the provided StageVideo\nobjects, rather than a Video object, to display streaming video."),(0,i.kt)("p",null,"On Flash Player, when you receive notification that stage video is no longer\navailable, switch your video stream back to a Video object."),(0,i.kt)("p",null,"Note: You cannot create StageVideo objects."),(0,i.kt)("h2",{id:"stagestagevideos-property"},"Stage.stageVideos property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," property is a Vector object that gives you access to\nStageVideo instances. This vector can contain up to four StageVideo objects,\ndepending on hardware and system resources. Mobile devices can be limited to\none, or none."),(0,i.kt)("p",null,"When stage video is not available, this vector contains no objects. To avoid run\ntime errors, be sure that you access members of this vector only when the most\nrecent ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailability")," event indicates that stage video is available."),(0,i.kt)("h2",{id:"stagevideo-events"},"StageVideo events"),(0,i.kt)("p",null,"The StageVideo API framework provides the following events:"),(0,i.kt)("p",null,"StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY",(0,i.kt)("br",{parentName:"p"}),"\n","Sent when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," property changes. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.availability")," property indicates either ",(0,i.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"UNAVAILABLE"),". Use this event to determine whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"stageVideos")," property\ncontains any StageVideo objects, rather than directly checking the length of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," vector."),(0,i.kt)("p",null,"StageVideoEvent.RENDER_STATE",(0,i.kt)("br",{parentName:"p"}),"\n","Sent when a NetStream or Camera object has been attached to a StageVideo object\nand is playing. Indicates the type of decoding currently in use: hardware,\nsoftware, or unavailable (nothing is displayed). The event target contains\n",(0,i.kt)("inlineCode",{parentName:"p"},"videoWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"videoHeight")," properties that are safe to use for resizing the\nvideo viewport."),(0,i.kt)("p",null,"Important: Coordinates obtained from the StageVideo target object use Stage\ncoordinates, since they are not part of the standard display list."),(0,i.kt)("p",null,"VideoEvent.RENDER_STATE",(0,i.kt)("br",{parentName:"p"}),"\n","Sent when a Video object is being used. Indicates whether software or hardware\naccelerated decoding is in use. If this event indicates hardware accelerated\ndecoding, switch to a StageVideo object if possible. The Video event target\ncontains ",(0,i.kt)("inlineCode",{parentName:"p"},"videoWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"videoHeight")," properties that are safe to use for\nresizing the video viewport."),(0,i.kt)("h2",{id:"workflow-for-implementing-the-stagevideo-feature"},"Workflow for implementing the StageVideo feature"),(0,i.kt)("p",null,"Follow these top-level steps to implement the StageVideo feature:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY")," event\nto find out when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," vector has changed. See\n",(0,i.kt)("a",{parentName:"p",href:"#using-the-stagevideoavailabilityeventstage_video_availability-event"},"Using the StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY event"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY")," event reports\nthat stage video is available, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," Vector object\nwithin the event handler to access a StageVideo object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attach a NetStream object using ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideo.attachNetStream()")," or attach a\nCamera object using ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideo.attachCamera()"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Play the video using ",(0,i.kt)("inlineCode",{parentName:"p"},"NetStream.play()"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE")," event on the StageVideo object\nto determine the status of playing the video. Receipt of this event also\nindicates that the width and height properties of the video have been\ninitialized or changed. See\n",(0,i.kt)("a",{parentName:"p",href:"#using-the-stagevideoeventrender_state-and-videoeventrender_state-events"},"Using the StageVideoEvent.RENDER_STATE and VideoEvent.RENDER_STATE events"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Listen for the ",(0,i.kt)("inlineCode",{parentName:"p"},"VideoEvent.RENDER_STATE")," event on the Video object. This\nevent provides the same statuses as ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE,")," so you\ncan also use it to determine whether GPU acceleration is available. Receipt\nof this event also indicates that the width and height properties of the\nvideo have been initialized or changed. See\n",(0,i.kt)("a",{parentName:"p",href:"#using-the-stagevideoeventrender_state-and-videoeventrender_state-events"},"Using the StageVideoEvent.RENDER_STATE and VideoEvent.RENDER_STATE events"),"."))),(0,i.kt)("h2",{id:"initializing-stagevideo-event-listeners"},"Initializing StageVideo event listeners"),(0,i.kt)("p",null,"Set up your StageVideoAvailabilityEvent and VideoEvent listeners during\napplication initialization. For example, you can initialize these listeners in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.events.Event.ADDED_TO_STAGE")," event handler. This event guarantees\nthat your application is visible on the stage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class SimpleStageVideo extends Sprite\nprivate var nc:NetConnection;\nprivate var ns:NetStream;\n\npublic function SimpleStageVideo()\n{\n    // Constructor for SimpleStageVideo class\n    // Make sure the app is visible and stage available\n    addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);\n}\n\nprivate function onAddedToStage(event:Event):void\n{\n    //...\n    // Connections\n    nc = new NetConnection();\n    nc.connect(null);\n    ns = new NetStream(nc);\n    ns.addEventListener(NetStatusEvent.NET_STATUS, onNetStatus);\n    ns.client = this;\n\n    // Screen\n    video = new Video();\n    video.smoothing = true;\n\n    // Video Events\n    // the StageVideoEvent.STAGE_VIDEO_STATE informs you whether\n    // StageVideo is available\n    stage.addEventListener(StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY,\n        onStageVideoState);\n    // in case of fallback to Video, listen to the VideoEvent.RENDER_STATE\n    // event to handle resize properly and know about the acceleration mode running\n    video.addEventListener(VideoEvent.RENDER_STATE, videoStateChange);\n    //...\n}\n")),(0,i.kt)("h2",{id:"using-the-stagevideoavailabilityeventstage_video_availability-event"},"Using the StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY event"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY")," handler, decide\nwhether to use a Video or StageVideo object based on the availability of\nStageVideo. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.availability")," property is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailability.AVAILABLE"),", use StageVideo. In this case, you can rely\non the Stage.stageVideos vector to contain one or more StageVideo objects.\nObtain a StageVideo object from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," property and attach the\nNetStream object to it. Because StageVideo objects always appear in the\nbackground, remove any existing Video object (always in the foreground). You\nalso use this event handler to add a listener for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE")," event."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.availability")," property is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailability.UNAVAILABLE"),", do not use StageVideo or access the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.stageVideos")," vector. In this case, attach the NetStream object to a Video\nobject. Finally, add the StageVideo or Video object to the stage and call\n",(0,i.kt)("inlineCode",{parentName:"p"},"NetStream.play()"),"."),(0,i.kt)("p",null,"The following code shows how to handle the\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoAvailabilityEvent.STAGE_VIDEO_AVAILABILITY")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private var sv:StageVideo;\nprivate var video:Video;\n\nprivate function onStageVideoState(event:StageVideoAvailabilityEvent):void\n{\n    // Detect if StageVideo is available and decide what to do in toggleStageVideo\n    toggleStageVideo(event.availability == StageVideoAvailability.AVAILABLE);\n}\n\nprivate function toggleStageVideo(on:Boolean):void\n{\n    // To choose StageVideo attach the NetStream to StageVideo\n    if (on)\n    {\n        stageVideoInUse = true;\n        if ( sv == null )\n        {\n            sv = stage.stageVideos[0];\n            sv.addEventListener(StageVideoEvent.RENDER_STATE, stageVideoStateChange);\n                sv.attachNetStream(ns);\n        }\n\n        if (classicVideoInUse)\n        {\n            // If you use StageVideo, remove from the display list the\n            // Video object to avoid covering the StageVideo object\n            // (which is always in the background)\n            stage.removeChild ( video );\n            classicVideoInUse = false;\n        }\n    }\n    else\n    {\n        // Otherwise attach it to a Video object\n        if (stageVideoInUse)\n            stageVideoInUse = false;\n        classicVideoInUse = true;\n        video.attachNetStream(ns);\n        stage.addChildAt(video, 0);\n    }\n\n    if ( !played )\n    {\n        played = true;\n        ns.play(FILE_NAME);\n    }\n}\n")),(0,i.kt)("p",null,"Important: The first time an application accesses the vector element at\nStage.stageVideos","[","0","]",", the default rect is set to 0,0,0,0, and pan and zoom\nproperties use default values. Always reset these values to your preferred\nsettings. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"videoWidth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"videoHeight")," properties of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VideoEvent.RENDER_STATE")," event target for\ncalculating the video viewport dimensions."),(0,i.kt)("p",null,"Download the full source code for this sample application at\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150228093631/http://www.adobe.com/devnet/flashplayer/articles/stage_video.html"},"Getting Started with Stage Video"),"."),(0,i.kt)("h2",{id:"using-the-stagevideoeventrender_state-and-videoeventrender_state-events"},"Using the StageVideoEvent.RENDER_STATE and VideoEvent.RENDER_STATE events"),(0,i.kt)("p",null,"StageVideo and Video objects send events that inform applications when the\ndisplay environment changes. These events are ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"VideoEvent.RENDER_STATE"),"."),(0,i.kt)("p",null,"A StageVideo or Video object dispatches a render state event when a NetStream\nobject is attached and begins playing. It also sends this event when the display\nenvironment changes; for example, when the video viewport is resized. Use these\nnotifications to reset your viewport to the current ",(0,i.kt)("inlineCode",{parentName:"p"},"videoHeight")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"videoWidth")," values of the event target object."),(0,i.kt)("p",null,"Reported render states include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RENDER_STATUS_UNAVAILABLE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RENDER_STATUS_SOFTWARE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RENDER_STATUS_ACCELERATED")))),(0,i.kt)("p",null,"Render states indicate when hardware accelerated decoding is in use, regardless\nof which class is currently playing video. Check the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.status"),'\nproperty to learn whether the necessary decoding is available. If this property\nis set to "unavailable", the StageVideo object cannot play the video. This\nstatus requires that you immediately reattach the NetStream object to a Video\nobject. Other statuses inform your application of the current rendering\nconditions.'),(0,i.kt)("p",null,"The following table describes the implications of all render status values for\nStageVideoEvent and VideoEvent objects in Flash Player:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"VideoStatus.ACCELERATED"),(0,i.kt)("th",{parentName:"tr",align:null},"VideoStatus.SOFTWARE"),(0,i.kt)("th",{parentName:"tr",align:null},"VideoStatus.UNAVAILABLE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"StageVideoEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Decoding and presentation both occur in hardware. (Best performance.)"),(0,i.kt)("td",{parentName:"tr",align:null},"Presentation in hardware, decoding in software. (Acceptable performance.)"),(0,i.kt)("td",{parentName:"tr",align:null},"No GPU resources are available to handle video, and nothing is displayed. ",(0,i.kt)("strong",{parentName:"td"},"Fall back to a Video object."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VideoEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Presentation in software, decoding in hardware. (Acceptable performance on a modern desktop system only. Degraded full-screen performance.)"),(0,i.kt)("td",{parentName:"tr",align:null},"Presentation in software, decoding in software. (Worst case performance-wise. Degraded full-screen performance.)"),(0,i.kt)("td",{parentName:"tr",align:null},"(N/A)")))),(0,i.kt)("h2",{id:"color-spaces"},"Color spaces"),(0,i.kt)("p",null,"Stage video uses underlying hardware capabilities to support color spaces. SWF\ncontent can provide metadata indicating its preferred color space. However, the\ndevice graphics hardware determines whether that color space can be used. One\ndevice can support several color spaces, while another supports none. If the\nhardware does not support the requested color space, Flash Player attempts to\nfind the closest match among the supported color spaces."),(0,i.kt)("p",null,"To query which color spaces the hardware supports, use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideo.colorSpaces")," property. This property returns the list of supported\ncolor spaces in a String vector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var colorSpace:Vector.<String> = stageVideo.colorSpaces();\n")),(0,i.kt)("p",null,"To learn which color space the currently playing video is using, check the\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.colorSpace")," property. Check this property in your event handler\nfor the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.RENDER_STATE")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var currColorSpace:String;\n\n//StageVideoEvent.RENDER_STATE event handler\nprivate function stageVideoRenderState(event:Object):void\n{\n    //...\n    currColorSpace = (event as StageVideoEvent).colorSpace;\n    //...\n}\n")),(0,i.kt)("p",null,"If Flash Player cannot find a substitute for an unsupported color space, stage\nvideo uses the default color space BT.601. For example, video streams with H.264\nencoding typically use the BT.709 color space. If the device hardware does not\nsupport BT.709, the ",(0,i.kt)("inlineCode",{parentName:"p"},"colorSpace")," property returns ",(0,i.kt)("inlineCode",{parentName:"p"},'"BT601"'),". A\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageVideoEvent.colorSpace")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},'"unknown"')," indicates that the hardware\ndoes not provide a means of querying the color space."),(0,i.kt)("p",null,"If your application deems the current color space unacceptable, you can choose\nto switch from a StageVideo object to a Video object. The Video class supports\nall color spaces through software compositing."))}h.isMDXComponent=!0}}]);