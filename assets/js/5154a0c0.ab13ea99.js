"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[3779],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(4137)),r=n(2097);const i={title:"Windows install",sidebar_position:2,sidebar_label:"Windows"},l=void 0,s={unversionedId:"basics/install/windows",id:"basics/install/windows",title:"Windows install",description:"System Requirements",source:"@site/docs/basics/install/windows.mdx",sourceDirName:"basics/install",slug:"/basics/install/windows",permalink:"/docs/basics/install/windows",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/basics/install/windows.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Windows install",sidebar_position:2,sidebar_label:"Windows"},sidebar:"mainSidebar",previous:{title:"macOS",permalink:"/docs/basics/install/macos"},next:{title:"Linux",permalink:"/docs/basics/install/linux"}},d={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Download the SDK",id:"download-the-sdk",level:2},{value:"Set your Environment",id:"set-your-environment",level:2},{value:"Android setup",id:"android-setup",level:2},{value:"Install Android Studio",id:"install-android-studio",level:3},{value:"Set up your Android device",id:"set-up-your-android-device",level:3},{value:"Java",id:"java",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"To install and run AIR your development environment must meet these minimum requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 7 or later"),(0,o.kt)("li",{parentName:"ul"},"1.3GB free disk space (for the AIR SDK and does not include other tools)"),(0,o.kt)("li",{parentName:"ul"},"A version of Java 8")),(0,o.kt)("h2",{id:"download-the-sdk"},"Download the SDK"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest release bundle of the AIR SDK:")),(0,o.kt)(r.Z,{platform:"windows",mdxType:"AIRSDKDownload"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For older versions see the ",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.harman.com/release_notes"},"SDK releases")," page.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Extract the bundle in the desired location, for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<your-user-name>\\sdks\\air"),".")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Warning: Do not install the AIR SDK in a directory like ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\"),". These directories may require elevated privilages and can affect the operation of the AIR SDK.")),(0,o.kt)("h2",{id:"set-your-environment"},"Set your Environment"),(0,o.kt)("p",null,"Next you will want to add the AIR SDK tools to your path so you can execute the build commands from any console."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Environment Variables"),' window by searching for "Edit environment variables" in the search bar:')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5657).Z,width:"420",height:"296"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"AIR_HOME")," and set it to the location where you extracted the AIR SDK (eg ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<your-user-name>\\sdks\\air"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," Variable:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If it exists, append ",(0,o.kt)("inlineCode",{parentName:"li"},"%AIR_HOME%\\bin")," using ",(0,o.kt)("inlineCode",{parentName:"li"},";")," as a separator (or select edit and add a ",(0,o.kt)("strong",{parentName:"li"},"New")," entry);"),(0,o.kt)("li",{parentName:"ul"},"If it doesn't exist, create a new variable with the name ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," and value ",(0,o.kt)("inlineCode",{parentName:"li"},"%AIR_HOME%\\bin"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close and reopen any active console windows")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the AIR SDK ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory is in your path by running:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo %Path%\n")),(0,o.kt)("p",null,"or if you are using Powershell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$Env:Path\n")),(0,o.kt)("p",null,"Verify you can access the AIR SDK commands by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"where.exe adt\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can check the version of the AIR SDK by running"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"adt -version\n"))),(0,o.kt)("h2",{id:"android-setup"},"Android setup"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"AIR relies on the Android SDK and build tools in order to produce AAB builds and support the latest Android functionality."),(0,o.kt)("p",{parentName:"admonition"},"You can either install the Android SDK directly or we suggest you install Android Studio (which includes the SDK) as this makes the installation process easier and provides additional debugging tools.")),(0,o.kt)("h3",{id:"install-android-studio"},"Install Android Studio"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")),(0,o.kt)("li",{parentName:"ol"},"Start Android studio and run through the setup wizard which will install the latest Android SDK, command line tools and build tools.")),(0,o.kt)("h3",{id:"set-up-your-android-device"},"Set up your Android device"),(0,o.kt)("p",null,"If you have an Android device you intend on debugging with you must make sure you have set up the device for debugging."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In order to debug an application on an Android device you need to enable "Developer Mode" and then enable USB debugging. Detailed process is described in the ',(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/debug/dev-options"},"Android documentation"),"."),(0,o.kt)("li",{parentName:"ol"},"Plug your device into your machine using a cable, and you should receive a prompt on the device to authorise access via the computer;"),(0,o.kt)("li",{parentName:"ol"},"Run the following command and you should see a device listed:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"adt -devices -platform android\n")),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("p",null,"You must make sure you have version 11 of the Java Development Kit installed and that your ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable is set to the JDKs folder."))}m.isMDXComponent=!0},2097:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),o=n(6010);const r="content_gl0L",i="downloadButton_wiAm",l="downloadIcon_vCuq";var s=n(3699);const d="acceptButton_X1Hy";class c extends a.Component{constructor(){super(...arguments),this.acceptButtonClick=()=>{console.log("acceptButtonClick()");const{handleAccept:e}=this.props;e()}}render(){return a.createElement("div",null,a.createElement("div",null,"In order to download the AIR SDK you must accept the"," ",a.createElement("a",{href:"https://airsdk.harman.com/assets/pdfs/HARMAN%20AIR%20SDK%20License%20Agreement.pdf"},"license agreement")),a.createElement("div",null,a.createElement("a",{className:(0,o.Z)("button","button--info","button--lg",d),onClick:this.acceptButtonClick},"Accept")))}}const u=c;class p extends a.Component{constructor(){super(...arguments),this.airAPIURL="https://dcdu3ujoji.execute-api.us-east-1.amazonaws.com/production/releases/latest/urls",this.airDownloadURL="https://airsdk.harman.com",this.state={loading:!0,airsdkurls:[],acceptedLicense:!1},this.handleAccept=()=>{sessionStorage.setItem("acceptedLicense","true"),this.setState({acceptedLicense:!0})},this.downloadURLForPlatform=e=>{var t="AIR_"+(e?"Flex_":"");switch(this.props.platform){case"macos":t+="Mac";break;case"windows":t+="Win";break;case"linux":t+="Linux"}return this.props.platform,this.airDownloadURL+this.state.airsdkurls[t]+"?license="+(this.state.acceptedLicense?"accepted":"denied")}}componentDidMount(){this.state.acceptedLicense="true"===sessionStorage.getItem("acceptedLicense"),fetch(this.airAPIURL).then((e=>e.json())).then((e=>{this.setState({loading:!1,airsdkurls:e})})).catch(console.log)}render(){const e=this.state.acceptedLicense;return a.createElement("div",{className:r},this.state.loading?a.createElement("div",null,"Loading ..."):a.createElement("div",null,e?a.createElement("div",null,a.createElement(s.Z,{className:(0,o.Z)("button","button--info","button--lg",i),to:this.downloadURLForPlatform(!1)},a.createElement("i",null,a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:l,viewBox:"0 0 29.978 29.978"},a.createElement("g",null,a.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),a.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download"),a.createElement(s.Z,{className:(0,o.Z)("button","button--primary","button",i),to:this.downloadURLForPlatform(!0)},a.createElement("i",null,a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:l,viewBox:"0 0 29.978 29.978"},a.createElement("g",null,a.createElement("path",{fill:"currentColor",d:"M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"}),a.createElement("path",{fill:"currentColor",d:"M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"})))),"Download for Flex")):a.createElement(u,{handleAccept:this.handleAccept})))}}const m=p},5657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/windows_install_env_1-9c08174316e84c3d732cbcf81addf564.png"}}]);