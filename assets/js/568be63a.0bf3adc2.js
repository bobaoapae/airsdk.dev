"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[99343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:11},i="Accessing raw sound data",s={unversionedId:"development/rich-media-content/working-with-sound/accessing-raw-sound-data",id:"development/rich-media-content/working-with-sound/accessing-raw-sound-data",title:"Accessing raw sound data",description:"The SoundMixer.computeSpectrum() method lets an application read the raw sound",source:"@site/docs/development/rich-media-content/working-with-sound/accessing-raw-sound-data.md",sourceDirName:"development/rich-media-content/working-with-sound",slug:"/development/rich-media-content/working-with-sound/accessing-raw-sound-data",permalink:"/docs/development/rich-media-content/working-with-sound/accessing-raw-sound-data",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-sound/accessing-raw-sound-data.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"mainSidebar",previous:{title:"Working with sound metadata",permalink:"/docs/development/rich-media-content/working-with-sound/working-with-sound-metadata"},next:{title:"Capturing sound input",permalink:"/docs/development/rich-media-content/working-with-sound/capturing-sound-input"}},d={},l=[{value:"Building a simple sound visualizer",id:"building-a-simple-sound-visualizer",level:2}],p={toc:l},u="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accessing-raw-sound-data"},"Accessing raw sound data"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method lets an application read the raw sound\ndata for the waveform that is currently being played. If more than one\nSoundChannel object is currently playing the ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()"),"\nmethod shows the combined sound data of every SoundChannel object mixed\ntogether."),(0,r.kt)("p",null,"The sound data is returned as a ByteArray object containing 512 bytes of data,\neach of which contains a floating point value between -1 and 1. These values\nrepresent the amplitude of the points in the sound waveform being played. The\nvalues are delivered in two groups of 256, the first group for the left stereo\nchannel and the second group for the right stereo channel."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method returns frequency spectrum data rather\nthan waveform data if the ",(0,r.kt)("inlineCode",{parentName:"p"},"FFTMode")," parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". The frequency\nspectrum shows amplitude arranged by sound frequency, from lowest frequency to\nhighest. A Fast Fourier Transform (FFT) is used to convert the waveform data\ninto frequency spectrum data. The resulting frequency spectrum values range from\n0 to roughly 1.414 (the square root of 2)."),(0,r.kt)("p",null,"The following diagram compares the data returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"computeSpectrum()"),"\nmethod when the ",(0,r.kt)("inlineCode",{parentName:"p"},"FFTMode")," parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and when it is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". The sound whose data was used for this diagram contains a loud bass\nsound in the left channel and a drum hit sound in the right channel."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(60111).Z,width:"607",height:"477"})),(0,r.kt)("p",null,"Values returned by the SoundMixer.computeSpectrum() method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A.")," fftMode=true"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B.")," fftMode=false"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"computeSpectrum()")," method can also return data that has been resampled at a\nlower bit rate. Generally, this results in smoother waveform data or frequency\ndata at the expense of detail. The ",(0,r.kt)("inlineCode",{parentName:"p"},"stretchFactor")," parameter controls the rate\nat which the ",(0,r.kt)("inlineCode",{parentName:"p"},"computeSpectrum()")," method data is sampled. When the\n",(0,r.kt)("inlineCode",{parentName:"p"},"stretchFactor")," parameter is set to 0, the default, the sound data is sampled at\na rate of 44.1 kHz. The rate is halved at each successive value of the\nstretchFactor parameter, so a value of 1 specifies a rate of 22.05 kHz, a value\nof 2 specifies a rate of 11.025 kHz, and so on. The ",(0,r.kt)("inlineCode",{parentName:"p"},"computeSpectrum()")," method\nstill returns 256 bytes per stereo channel when a higher ",(0,r.kt)("inlineCode",{parentName:"p"},"stretchFactor")," value\nis used."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method has some limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because sound data from a microphone or from RTMP streams do not pass through\nthe global SoundMixer object, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method will\nnot return data from those sources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If one or more of the sounds being played come from sources outside the\ncurrent content sandbox, security restrictions will cause the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method to throw an error. For more detail about\nthe security limitations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method please\nsee\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/rich-media-content/working-with-sound/security-considerations-when-loading-and-playing-sounds"},"Security considerations when loading and playing sounds"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/security/accessing-loaded-media-as-data"},"Accessing loaded media as data"),"."))),(0,r.kt)("p",null,"However, in an AIR application, content in the application security sandbox\n(content installed with the AIR application) are not restricted by these\nsecurity limitations."),(0,r.kt)("h2",{id:"building-a-simple-sound-visualizer"},"Building a simple sound visualizer"),(0,r.kt)("p",null,"The following example uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method to show a\nchart of the sound waveform that animates with each frame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import flash.display.Graphics;\nimport flash.events.Event;\nimport flash.media.Sound;\nimport flash.media.SoundChannel;\nimport flash.media.SoundMixer;\nimport flash.net.URLRequest;\n\nconst PLOT_HEIGHT:int = 200;\nconst CHANNEL_LENGTH:int = 256;\n\nvar snd:Sound = new Sound();\nvar req:URLRequest = new URLRequest("bigSound.mp3");\nsnd.load(req);\n\nvar channel:SoundChannel;\nchannel = snd.play();\naddEventListener(Event.ENTER_FRAME, onEnterFrame);\nsnd.addEventListener(Event.SOUND_COMPLETE, onPlaybackComplete);\n\nvar bytes:ByteArray = new ByteArray();\n\nfunction onEnterFrame(event:Event):void\n{\n    SoundMixer.computeSpectrum(bytes, false, 0);\n\n    var g:Graphics = this.graphics;\n\n    g.clear();\n    g.lineStyle(0, 0x6600CC);\n    g.beginFill(0x6600CC);\n    g.moveTo(0, PLOT_HEIGHT);\n\n    var n:Number = 0;\n\n    // left channel\n    for (var i:int = 0; i < CHANNEL_LENGTH; i++)\n    {\n        n = (bytes.readFloat() * PLOT_HEIGHT);\n        g.lineTo(i * 2, PLOT_HEIGHT - n);\n    }\n    g.lineTo(CHANNEL_LENGTH * 2, PLOT_HEIGHT);\n    g.endFill();\n\n    // right channel\n    g.lineStyle(0, 0xCC0066);\n    g.beginFill(0xCC0066, 0.5);\n    g.moveTo(CHANNEL_LENGTH * 2, PLOT_HEIGHT);\n\n    for (i = CHANNEL_LENGTH; i > 0; i--)\n    {\n        n = (bytes.readFloat() * PLOT_HEIGHT);\n        g.lineTo(i * 2, PLOT_HEIGHT - n);\n    }\n    g.lineTo(0, PLOT_HEIGHT);\n    g.endFill();\n}\n\nfunction onPlaybackComplete(event:Event)\n{\n    removeEventListener(Event.ENTER_FRAME, onEnterFrame);\n}\n')),(0,r.kt)("p",null,"This example first loads and plays a sound file and then listens for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Event.ENTER_FRAME")," event which will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnterFrame()")," method while\nthe sound plays. The ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnterFrame()")," method starts by calling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SoundMixer.computeSpectrum()")," method, which stores the sound wave data in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"bytes")," ByteArray object."),(0,r.kt)("p",null,"The sound waveform is plotted using the vector drawing API. A ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop cycles\nthrough the first 256 data values, representing the left stereo channel, and\ndraws a line from each point to the next using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics.lineTo()")," method. A\nsecond ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop cycles through the next set of 256 values, plotting them in\nreverse order this time, from right to left. The resulting waveform plots can\nproduce an interesting mirror-image effect, as shown in the following image."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(53371).Z,width:"470",height:"334"})))}c.isMDXComponent=!0},60111:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/so_computeSpectrum_popup-bf67112dcdce2e2e483c6c39e95dade9.png"},53371:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/so_soundVisualizer-654b26300e53f8208e5972b858b591a3.png"}}]);