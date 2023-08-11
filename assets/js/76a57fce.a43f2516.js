"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[5568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={title:"iPhone",sidebar_position:4},l=void 0,r={unversionedId:"building/application-descriptor-files/elements/iPhone",id:"building/application-descriptor-files/elements/iPhone",title:"iPhone",description:"The iPhone element provides platform-specific settings for applications running on iOS and tvOS devices including the iPhone and iPad. It can contain the following optional elements.",source:"@site/docs/building/application-descriptor-files/elements/iPhone.md",sourceDirName:"building/application-descriptor-files/elements",slug:"/building/application-descriptor-files/elements/iPhone",permalink:"/docs/building/application-descriptor-files/elements/iPhone",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/application-descriptor-files/elements/iPhone.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"iPhone",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"initialWindow",permalink:"/docs/building/application-descriptor-files/elements/initialWindow"},next:{title:"android",permalink:"/docs/building/application-descriptor-files/elements/android"}},s={},d=[{value:"Elements",id:"elements",level:2},{value:"<code>Entitlements</code>",id:"entitlements",level:3},{value:"Example",id:"example",level:4},{value:"<code>InfoAdditions</code>",id:"infoadditions",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>externalSwfs</code>",id:"externalswfs",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>forceCPURenderModeForDevices</code>",id:"forcecpurendermodefordevices",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>requestedDisplayResolution</code>",id:"requesteddisplayresolution",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>disableCustomKeyboard</code>",id:"disablecustomkeyboard",level:3},{value:"<code>excludeDefaultUsageDescriptions</code>",id:"excludedefaultusagedescriptions",level:3},{value:"Device names",id:"device-names",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"iPhone")," element provides platform-specific settings for applications running on iOS and tvOS devices including the iPhone and iPad. It can contain the following optional elements."),(0,a.kt)("h2",{id:"elements"},"Elements"),(0,a.kt)("h3",{id:"entitlements"},(0,a.kt)("inlineCode",{parentName:"h3"},"Entitlements")),(0,a.kt)("p",null,"iOS uses properties called entitlements to provide application access to additional resources and capabilities. Use the Entitlements element to specify this information in a mobile iOS application."),(0,a.kt)("p",null,"Entitlements are provided as key-value pairs enclosed in a ",(0,a.kt)("inlineCode",{parentName:"p"},"CDATA")," block. For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/bundleresources/entitlements"},"Entitlements documentation")," in the Apple Developer website."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<iPhone>\n    <Entitlements>\n        <![CDATA[\n            <key>aps-environment</key>\n            <string>development</string>\n        ]]>\n    </Entitlements>\n</iPhone>\n")),(0,a.kt)("h3",{id:"infoadditions"},(0,a.kt)("inlineCode",{parentName:"h3"},"InfoAdditions")),(0,a.kt)("p",null,"Allows you to specify additional properties of an iOS application. Properties are provided as key-value pairs enclosed in a ",(0,a.kt)("inlineCode",{parentName:"p"},"CDATA")," block and are injected into the application's ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," file."),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/bundleresources/information_property_list"},"Information Property List documentation")," in the Apple Developer website."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<iPhone>\n    <InfoAdditions>\n        <![CDATA[\n        <key>UIStatusBarStyle</key>\n        <string>UIStatusBarStyleBlackOpaque</string>\n        <key>UIRequiresPersistentWiFi</key>\n        <string>NO</string>\n        ]]>\n    </InfoAdditions>\n</iPhone>\n")),(0,a.kt)("h3",{id:"externalswfs"},(0,a.kt)("inlineCode",{parentName:"h3"},"externalSwfs")),(0,a.kt)("p",null,"Specifies the name of a text file that contains a list of SWFs (one per line) to be configured by ADT for remote hosting. You can minimize your initial application download size by packaging a subset of the SWFs used by your application and loading the remaining (asset-only) external SWFs at runtime using the Loader.load() method. To use this feature, you must package the application such that ADT moves all ActionScript ByteCode (ABC) from the externally loaded SWF files to the main application SWF, leaving a SWF file that contains only assets. This is to conform with the Apple Store\u2019s rule that forbids downloading any code after an application is installed."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<iPhone> \n    <externalSwfs>FileContainingListofSWFs.txt</externalSwfs> \n</iPhone>\n")),(0,a.kt)("h3",{id:"forcecpurendermodefordevices"},(0,a.kt)("inlineCode",{parentName:"h3"},"forceCPURenderModeForDevices")),(0,a.kt)("p",null,"Force CPU render mode for a specified set of devices. This feature effectively lets you selectively enable GPU render mode for the remaining iOS devices.\nYou add this tag as a child of the iPhone tag and specify a space-separated list of device model names to force into CPU mode."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#device-names"},"Device names")," for valid values to use here."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<iPhone> \n    <forceCPURenderModeForDevices>iPad1,1 iPhone1,1 iPhone1,2</forceCPURenderModeForDevices>\n</iPhone>\n")),(0,a.kt)("h3",{id:"requesteddisplayresolution"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestedDisplayResolution")),(0,a.kt)("p",null,"Specifies whether the application desires to use the standard or high resolution on a device with a high-resolution screen.\nWhen set to ",(0,a.kt)("inlineCode",{parentName:"p"},"standard")," (the default), the screen will appear to the application as a standard-resolution screen. When set to ",(0,a.kt)("inlineCode",{parentName:"p"},"high"),", the application can address each high-resolution pixel."),(0,a.kt)("p",null,"For example, on a 640x960 high-resolution iPhone screen, if the setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"standard")," then the full-screen stage dimensions would be 320x480, and each application pixel is rendered using four screen pixels.\nIf the setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"high"),", the full-screen stage dimensions match the device at 640x960."),(0,a.kt)("p",null,"On devices with standard-resolution screens, the stage dimensions match the screen dimensions no matter which setting is used."),(0,a.kt)("p",null,"This element can include an ",(0,a.kt)("inlineCode",{parentName:"p"},"excludeDevices")," attribute to specify a space-separated list of devices for which the setting is not applied: for these devices, the opposite value will apply to that given in the element.\nIn other words, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestedDisplayResolution")," value is ",(0,a.kt)("inlineCode",{parentName:"p"},"high"),", the excluded devices use ",(0,a.kt)("inlineCode",{parentName:"p"},"standard")," resolution. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestedDisplayResolution")," value is ",(0,a.kt)("inlineCode",{parentName:"p"},"standard"),", the excluded devices use ",(0,a.kt)("inlineCode",{parentName:"p"},"high")," resolution."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#device-names"},"Device names")," for valid values to use for the ",(0,a.kt)("inlineCode",{parentName:"p"},"excludeDevices")," attribute."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<iPhone> \n    <requestedDisplayResolution excludeDevices="iPad3 iPad4">high</requestedDisplayResolution>\n</iPhone> \n')),(0,a.kt)("h3",{id:"disablecustomkeyboard"},(0,a.kt)("inlineCode",{parentName:"h3"},"disableCustomKeyboard")),(0,a.kt)("p",null,"Available: 33.1.1.686"),(0,a.kt)("p",null,"If this value is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," it will prevent the use of third party keyboards from being used for text input. This should be set if there are privacy concerns about sensitive text entry."),(0,a.kt)("h3",{id:"excludedefaultusagedescriptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"excludeDefaultUsageDescriptions")),(0,a.kt)("p",null,"Available: 33.1.1.758"),(0,a.kt)("p",null,'This setting can be used to prevent the AIR Developer Tool from generating automatic text fields ("Required by Apple") for the usage descriptions required by iOS for camera/photo and location access.\nIf this is set to ',(0,a.kt)("inlineCode",{parentName:"p"},"true")," then the developer should add their own values into the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoAdditions")," section of the app descriptor file."),(0,a.kt)("h2",{id:"device-names"},"Device names"),(0,a.kt)("p",null,"The names used in ",(0,a.kt)("inlineCode",{parentName:"p"},"excludeDevices")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"forceCPURenderModeForDevices")," are iOS device model names or model name prefixes.\nFor example, the value iPad3,1 refers specifically to a Wi-Fi 3rd-generation iPad (but not GSM or CDMA 3rd-generation iPads).\nAlternatively, the value iPad3 refers to any 3rd-generation iPad."),(0,a.kt)("p",null,"An unofficial list of iOS model names is available as the 'Identifier' column at the ",(0,a.kt)("a",{parentName:"p",href:"https://www.theiphonewiki.com/wiki/Models"},"iPhone wiki Models page"),"."))}u.isMDXComponent=!0}}]);