"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[22173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),v=o,h=p["".concat(c,".").concat(v)]||p[v]||m[v]||r;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=v;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},14316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={},a="Working with video",d={unversionedId:"development/rich-media-content/working-with-video/index",id:"development/rich-media-content/working-with-video/index",title:"Working with video",description:"Flash video is one of the standout technologies on the Internet. However, the",source:"@site/docs/development/rich-media-content/working-with-video/index.md",sourceDirName:"development/rich-media-content/working-with-video",slug:"/development/rich-media-content/working-with-video/",permalink:"/docs/development/rich-media-content/working-with-video/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-video/index.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Sound example: Podcast Player",permalink:"/docs/development/rich-media-content/working-with-sound/sound-example-podcast-player"},next:{title:"Basics of video",permalink:"/docs/development/rich-media-content/working-with-video/basics-of-video"}},c={},l=[],s={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-video"},"Working with video"),(0,o.kt)("p",null,"Flash video is one of the standout technologies on the Internet. However, the\ntraditional presentation of video\u2014in a rectangular screen with a progress bar\nand control buttons underneath\u2014is only one possible use of video. Through\nActionScript, you have fine-tuned access to and control over video loading,\npresentation, and playback."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/basics-of-video"},"Basics of video")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/understanding-video-formats"},"Understanding video formats")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/understanding-the-video-class"},"Understanding the Video class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/loading-video-files"},"Loading video files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/controlling-video-playback"},"Controlling video playback")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/playing-video-in-full-screen-mode"},"Playing video in full-screen mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/streaming-video-files"},"Streaming video files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/understanding-cue-points"},"Understanding cue points")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/writing-callback-methods-for-metadata-and-cue-points"},"Writing callback methods for metadata and cue points")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/using-cue-points-and-metadata"},"Using cue points and metadata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/monitoring-netstream-activity"},"Monitoring NetStream activity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/advanced-topics-for-video-files"},"Advanced topics for video files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/video-example-video-jukebox"},"Video example: Video Jukebox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class"},"Using the StageVideo class for hardware accelerated presentation"))))}m.isMDXComponent=!0}}]);