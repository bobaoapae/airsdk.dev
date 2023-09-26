"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[39053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:13},l="Video example: Video Jukebox",r={unversionedId:"development/rich-media-content/working-with-video/video-example-video-jukebox",id:"development/rich-media-content/working-with-video/video-example-video-jukebox",title:"Video example: Video Jukebox",description:"The following example builds a simple video jukebox which dynamically loads a",source:"@site/docs/development/rich-media-content/working-with-video/video-example-video-jukebox.md",sourceDirName:"development/rich-media-content/working-with-video",slug:"/development/rich-media-content/working-with-video/video-example-video-jukebox",permalink:"/docs/development/rich-media-content/working-with-video/video-example-video-jukebox",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-video/video-example-video-jukebox.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"mainSidebar",previous:{title:"Advanced topics for video files",permalink:"/docs/development/rich-media-content/working-with-video/advanced-topics-for-video-files"},next:{title:"Using the StageVideo class for hardware accelerated presentation",permalink:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class"}},d={},s=[{value:"Loading an external video playlist file",id:"loading-an-external-video-playlist-file",level:2},{value:"Creating the user interface",id:"creating-the-user-interface",level:2},{value:"Listening for a video object&#39;s metadata",id:"listening-for-a-video-objects-metadata",level:2},{value:"Dynamically loading a video",id:"dynamically-loading-a-video",level:2},{value:"Controlling the volume of the video",id:"controlling-the-volume-of-the-video",level:2},{value:"Controlling video playback",id:"controlling-video-playback",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"video-example-video-jukebox"},"Video example: Video Jukebox"),(0,i.kt)("p",null,"The following example builds a simple video jukebox which dynamically loads a\nlist of videos to play back in a sequential order. This allows you to build an\napplication that lets a user browse through a series of video tutorials, or\nperhaps specifies which advertisements should be played back before delivering\nthe user's requested video. This example demonstrates the following features of\nActionScript 3.0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updating a playhead based on a video file's playback progress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Listening for and parsing a video file's metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Handling specific codes in a net stream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Loading, playing, pausing, and stopping a dynamically loaded FLV")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resizing a video object on the display list based on the net stream's metadata"))),(0,i.kt)("p",null,"To get the application files for this sample, see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joshtynjala/flash-platform-as3-dev-guide-examples/releases/tag/original"},(0,i.kt)("em",{parentName:"a"},"FlashPlatformAS3DevGuideExamples.zip")),".\nThe Video Jukebox application files can be found in the folder\nSamples/VideoJukebox. The application consists of the following files:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("p",null,"File")),(0,i.kt)("th",null,(0,i.kt)("p",null,"Description")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"VideoJukebox.fla"),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"VideoJukebox.mxml")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The main application file for Flex (MXML) or Flash (FLA)."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"VideoJukebox.as")),(0,i.kt)("td",null,(0,i.kt)("p",null,"The class that provides the main functionality of the application."))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("p",null,"playlist.xml")),(0,i.kt)("td",null,(0,i.kt)("p",null,"A file that lists which video files will be loaded into the video jukebox."))))),(0,i.kt)("h2",{id:"loading-an-external-video-playlist-file"},"Loading an external video playlist file"),(0,i.kt)("p",null,"The external playlist.xml file specifies which videos to load, and the order to\nplay them back in. In order to load the XML file, you need to use a URLLoader\nobject and a URLRequest object, as seen in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"uldr = new URLLoader();\nuldr.addEventListener(Event.COMPLETE, xmlCompleteHandler);\nuldr.load(new URLRequest(PLAYLIST_XML_URL));\n")),(0,i.kt)("p",null,"This code is placed in the VideoJukebox class's constructor so the file is\nloaded before any other code is run. As soon as the XML file has finished\nloading, the ",(0,i.kt)("inlineCode",{parentName:"p"},"xmlCompleteHandler()")," method is called which parses the external\nfile into an XML object, as seen in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function xmlCompleteHandler(event:Event):void\n{\n    playlist = XML(event.target.data);\n    videosXML = playlist.video;\n    main();\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"playlist")," XML object contains the raw XML from the external file, whereas\nthe videos XML is an XMLList object which contains just the video nodes. A\nsample playlist.xml file can be seen in the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<videos>\n    <video url="video/caption_video.flv" />\n    <video url="video/cuepoints.flv" />\n    <video url="video/water.flv" />\n</videos>\n')),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"xmlCompleteHandler()")," method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method which sets\nup the various component instances on the display list, as well as the\nNetConnection and NetStream objects which are used to load the external FLV\nfiles."),(0,i.kt)("h2",{id:"creating-the-user-interface"},"Creating the user interface"),(0,i.kt)("p",null,"To build the user interface you need to drag five Button instances onto the\ndisplay list and give them the following instance names: ",(0,i.kt)("inlineCode",{parentName:"p"},"playButton"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"pauseButton"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stopButton"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"backButton"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"forwardButton"),"."),(0,i.kt)("p",null,"For each of these Button instances, you'll need to assign a handler for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"click")," event, as seen in the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"playButton.addEventListener(MouseEvent.CLICK, buttonClickHandler);\npauseButton.addEventListener(MouseEvent.CLICK, buttonClickHandler);\nstopButton.addEventListener(MouseEvent.CLICK, buttonClickHandler);\nbackButton.addEventListener(MouseEvent.CLICK, buttonClickHandler);\nforwardButton.addEventListener(MouseEvent.CLICK, buttonClickHandler);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonClickHandler()")," method uses a switch statement to determine which\nbutton instance was clicked, as seen in the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function buttonClickHandler(event:MouseEvent):void\n{\n    switch (event.currentTarget)\n    {\n        case playButton:\n            ns.resume();\n            break;\n        case pauseButton:\n            ns.togglePause();\n            break;\n        case stopButton:\n            ns.pause();\n            ns.seek(0);\n            break;\n        case backButton:\n            playPreviousVideo();\n            break;\n        case forwardButton:\n            playNextVideo();\n            break;\n    }\n}\n")),(0,i.kt)("p",null,"Next, add a Slider instance to the display list and give it an instance name of\n",(0,i.kt)("inlineCode",{parentName:"p"},"volumeSlider"),". The following code sets the slider instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"liveDragging"),"\nproperty to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and defines an event listener for the slider instance's\n",(0,i.kt)("inlineCode",{parentName:"p"},"change")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"volumeSlider.value = volumeTransform.volume;\nvolumeSlider.minimum = 0;\nvolumeSlider.maximum = 1;\nvolumeSlider.snapInterval = 0.1;\nvolumeSlider.tickInterval = volumeSlider.snapInterval;\nvolumeSlider.liveDragging = true;\nvolumeSlider.addEventListener(SliderEvent.CHANGE, volumeChangeHandler);\n")),(0,i.kt)("p",null,"Add a ProgressBar instance to the display list and give it an instance name of\n",(0,i.kt)("inlineCode",{parentName:"p"},"positionBar"),". Set its ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," property to manual, as seen in the following\nsnippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"positionBar.mode = ProgressBarMode.MANUAL;\n")),(0,i.kt)("p",null,"Finally add a Label instance to the display list and give it an instance name of\n",(0,i.kt)("inlineCode",{parentName:"p"},"positionLabel"),". This Label instance's value will be set by the timer instance"),(0,i.kt)("h2",{id:"listening-for-a-video-objects-metadata"},"Listening for a video object's metadata"),(0,i.kt)("p",null,"When Flash Player encounters metadata for each of the loaded videos, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"onMetaData()")," callback handler is called on the NetStream object's ",(0,i.kt)("inlineCode",{parentName:"p"},"client"),"\nproperty. The following code initializes an Object and sets up the specified\ncallback handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client = new Object();\nclient.onMetaData = metadataHandler;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadataHandler()")," method copies its data to the meta property defined\nearlier in the code. This allows you to access the metadata for the current\nvideo anytime throughout the entire application. Next, the video object on the\nStage is resized to match the dimensions returned from the metadata. Finally,\nthe positionBar progress bar instance is moved and resized based on the size of\nthe currently playing video. The following code contains the entire\n",(0,i.kt)("inlineCode",{parentName:"p"},"metadataHandler()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function metadataHandler(metadataObj:Object):void\n{\n    meta = metadataObj;\n    vid.width = meta.width;\n    vid.height = meta.height;\n    positionBar.move(vid.x, vid.y + vid.height);\n    positionBar.width = vid.width;\n}\n")),(0,i.kt)("h2",{id:"dynamically-loading-a-video"},"Dynamically loading a video"),(0,i.kt)("p",null,"To dynamically load each of the videos, the application uses a NetConnection and\na NetStream object. The following code creates a NetConnection object and passes\n",(0,i.kt)("inlineCode",{parentName:"p"},"null")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect()")," method. By specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", Flash Player connects to\na video on the local server instead of connecting to a server, such as a Flash\nMedia Server."),(0,i.kt)("p",null,"The following code creates both the NetConnection and NetStream instances,\ndefines an event listener for the ",(0,i.kt)("inlineCode",{parentName:"p"},"netStatus")," event, and assigns the ",(0,i.kt)("inlineCode",{parentName:"p"},"client"),"\nObject to the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nc = new NetConnection();\nnc.connect(null);\n\nns = new NetStream(nc);\nns.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);\nns.client = client;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"netStatusHandler()")," method is called whenever the status of the video is\nchanged. This includes when a video starts or stops playback, is buffering or if\na video stream cannot be found. The following code lists the\n",(0,i.kt)("inlineCode",{parentName:"p"},"netStatusHandler()")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'private function netStatusHandler(event:NetStatusEvent):void\n{\n    try\n    {\n        switch (event.info.code)\n        {\n            case "NetStream.Play.Start":\n                t.start();\n                break;\n            case "NetStream.Play.StreamNotFound":\n            case "NetStream.Play.Stop":\n                t.stop();\n                playNextVideo();\n                break;\n        }\n    }\n    catch (error:TypeError)\n    {\n        // Ignore any errors.\n    }\n}\n')),(0,i.kt)("p",null,'The previous code evaluates the code property of the info object and filters\nwhether the code is "NetStream.Play.Start", "NetStream.Play.StreamNotFound", or\n"NetStream.Play.Stop". All other codes will be ignored. If the net stream is\nstarting the code starts the Timer instance which updates the playhead. If the\nnet stream cannot be found or is stopped, the Timer instance is stopped and the\napplication attempts to play the next video in the playlist.'),(0,i.kt)("p",null,"Every time the Timer executes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"positionBar")," progress bar instance updates\nits current position by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"setProgress()")," method of the ProgressBar\nclass and the ",(0,i.kt)("inlineCode",{parentName:"p"},"positionLabel")," Label instance is updated with the time elapsed\nand total time of the current video."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'private function timerHandler(event:TimerEvent):void\n{\n    try\n    {\n        positionBar.setProgress(ns.time, meta.duration);\n        positionLabel.text = ns.time.toFixed(1) + " of " meta.duration.toFixed(1) + " seconds";\n    }\n    catch (error:Error)\n    {\n        // Ignore this error.\n    }\n}\n')),(0,i.kt)("h2",{id:"controlling-the-volume-of-the-video"},"Controlling the volume of the video"),(0,i.kt)("p",null,"You can control the volume for the dynamically loaded video by setting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"soundTransform")," property on the NetStream object. The video jukebox application\nallows you to modify the volume level by changing the value of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"volumeSlider")," Slider instance. The following code shows how you can change the\nvolume level by assigning the value of the Slider component to a SoundTransform\nobject which is set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"soundTransform")," property on the NetStream object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function volumeChangeHandler(event:SliderEvent):void\n{\n    volumeTransform.volume = event.value;\n    ns.soundTransform = volumeTransform;\n}\n")),(0,i.kt)("h2",{id:"controlling-video-playback"},"Controlling video playback"),(0,i.kt)("p",null,"The rest of the application controls video playback when the video reaches the\nend of the video stream or the user skips to the previous or next video."),(0,i.kt)("p",null,"The following method retrieves the video URL from the XMLList for the currently\nselected index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function getVideo():String\n{\n    return videosXML[idx].@url;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"playVideo()")," method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," method on the NetStream object to\nload the currently selected video:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function playVideo():void\n{\n    var url:String = getVideo();\n    ns.play(url);\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"playPreviousVideo()")," method decrements the current video index, calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"playVideo()")," method to load the new video file and sets the progress bar to\nvisible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function playPreviousVideo():void\n{\n    if (idx > 0)\n    {\n        idx--;\n        playVideo();\n        positionBar.visible = true;\n    }\n}\n")),(0,i.kt)("p",null,"The final method, ",(0,i.kt)("inlineCode",{parentName:"p"},"playNextVideo()"),", increments the video index and calls the\n",(0,i.kt)("inlineCode",{parentName:"p"},"playVideo()")," method. If the current video is the last video in the playlist,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," method is called on the Video object and the progress bar\ninstance's ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"private function playNextVideo():void\n{\n    if (idx < (videosXML.length() - 1))\n    {\n        idx++;\n        playVideo();\n        positionBar.visible = true;\n    }\n    else\n    {\n        idx++;\n        vid.clear();\n        positionBar.visible = false;\n    }\n}\n")))}u.isMDXComponent=!0}}]);