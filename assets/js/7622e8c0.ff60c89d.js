"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(73992),l=n(18679);const o={title:"Overview",sidebar_position:1},s=void 0,u={unversionedId:"tools/building/ant/index",id:"tools/building/ant/index",title:"Overview",description:"Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other.",source:"@site/docs/tools/building/ant/index.mdx",sourceDirName:"tools/building/ant",slug:"/tools/building/ant/",permalink:"/docs/tools/building/ant/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tools/building/ant/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Device Profiles",permalink:"/docs/building/device-profiles"},next:{title:"Tasks",permalink:"/docs/tools/building/ant/tasks"}},d={},c=[{value:"Installation",id:"installation",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"Manual",id:"manual",level:4},{value:"Manual",id:"manual-1",level:4},{value:"Ant Script Format",id:"ant-script-format",level:3},{value:"Properties File",id:"properties-file",level:3},{value:"Environment",id:"environment",level:3}],p={toc:c},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other."),(0,r.kt)("p",null,"The main usage of Ant is in building Java applications, which fits well with the AIR environment. "),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Firstly check your Java installation, by typing the following in a terminal window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java --version\n")),(0,r.kt)("p",null,"If java is installed it should output the version information to your terminal window. You should have a JDK installed for AIR development so normally this is already available."),(0,r.kt)("p",null,"Next, install Ant."),(0,r.kt)(i.Z,{groupId:"operating-system",defaultValue:"macos",values:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("h4",{id:"homebrew"},"Homebrew"),(0,r.kt)("p",null,"The easiest way to install ant on macOS is to use ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install ant\n")),(0,r.kt)("h4",{id:"manual"},"Manual"),(0,r.kt)("p",null,"To download ANT go to ",(0,r.kt)("a",{parentName:"p",href:"http://ant.apache.org/bindownload.cgi"},"http://ant.apache.org/bindownload.cgi"),". Extract the downloaded file into a location, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/sdks/ant"),".\nThen create an ",(0,r.kt)("inlineCode",{parentName:"p"},"ANT_HOME")," environment variable to this location and add ",(0,r.kt)("inlineCode",{parentName:"p"},"$ANT_HOME/bin")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("p",null,"This is similar to your ",(0,r.kt)("inlineCode",{parentName:"p"},"AIR_HOME")," environment variable and should be set in the same file as you did when ",(0,r.kt)("a",{parentName:"p",href:"/docs/basics/install/macos"},"installing AIR"),",\nby adding the following to either ",(0,r.kt)("inlineCode",{parentName:"p"},"~.zshrc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export ANT_HOME=~/sdks/ant\nexport PATH="${PATH}":"${ANT_HOME}/bin"\n')),(0,r.kt)("p",null,"Once complete, restart your terminal and type ",(0,r.kt)("inlineCode",{parentName:"p"},"ant")," to your terminal to confirm it is available.")),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("h4",{id:"manual-1"},"Manual"),(0,r.kt)("p",null,"To download ANT go to ",(0,r.kt)("a",{parentName:"p",href:"http://ant.apache.org/bindownload.cgi"},"http://ant.apache.org/bindownload.cgi"),". Extract the downloaded file into a location, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\sdks\\ant"),".\nThen create an ",(0,r.kt)("inlineCode",{parentName:"p"},"ANT_HOME")," environment variable to this location and add ",(0,r.kt)("inlineCode",{parentName:"p"},"%ANT_HOME%\\bin")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("p",null,"This is similar to your ",(0,r.kt)("inlineCode",{parentName:"p"},"AIR_HOME")," environment variable and should be set in the same file as you did when ",(0,r.kt)("a",{parentName:"p",href:"/docs/basics/install/windows"},"installing AIR")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open the Environment Variables window by searching for "Edit environment variables" in the search bar:'),(0,r.kt)("li",{parentName:"ol"},"Add a variable called ",(0,r.kt)("inlineCode",{parentName:"li"},"ANT_HOME")," and set it to the location where you extracted ANT (eg ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\sdks\\ant"),")"),(0,r.kt)("li",{parentName:"ol"},"Locate the Path Variable:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it exists, append ",(0,r.kt)("inlineCode",{parentName:"li"},"%ANT_HOME%\\bin")," using ; as a separator (or select edit and add a New entry);"),(0,r.kt)("li",{parentName:"ul"},"If it doesn't exist, create a new variable with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")," and value ",(0,r.kt)("inlineCode",{parentName:"li"},"%ANT_HOME%\\bin"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Close and reopen any active console windows"),(0,r.kt)("li",{parentName:"ol"},"Verify the ant installation by running the following in a command prompt:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ant\n")))),(0,r.kt)("h3",{id:"ant-script-format"},"Ant Script Format"),(0,r.kt)("p",null,"Ant is driven by an XML-based script format that specifies a series of tasks for the build.\nAnt by default looks for a script file called ",(0,r.kt)("inlineCode",{parentName:"p"},"build.xml")," in the current directory.\nA build script should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," as the main node and at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," which contains a series of commands to run through as part of the build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<project name="example" default="main" >\n\n    <target name="main" >\n        \x3c!-- commands here --\x3e\n    </target>\n\n</project>\n')),(0,r.kt)("h3",{id:"properties-file"},"Properties File"),(0,r.kt)("p",null,'Generally it is good practice to define all configuration variables in a "properties" file\nand then include this file in your ant script. '),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="build.config"',title:'"build.config"'},"project.name=MyApplication\nversion=1.0.0\n")),(0,r.kt)("p",null,"Then in your script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="build.xml"',title:'"build.xml"'},'<project name="example" default="main" >\n\n    <property file="build.config" />\n\n    <target name="main" >\n        \x3c!-- commands here --\x3e\n        <echo message="Building ${project.name} v${version}" />\n    </target>\n\n</project>\n')),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"As you have setup your AIR SDK environment variables it is easy to access them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," variables in ant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="build.xml"',title:'"build.xml"'},'<project name="example" default="main" >\n\n    <property environment="env."/>\n\n    <fail unless="env.AIR_HOME" message="AIR_HOME needs to be defined as an environment variable or in the Ant build." />\n    <fail unless="env.AIR_TOOLS" message="AIR_TOOLS needs to be defined as an environment variable or in the Ant build." />\n\n    <property name="air.adt" value="${env.AIR_HOME}/bin/adt" />\n    <property name="air.apm" value="${env.AIR_TOOLS}/apm" />\n\n</project>\n')),(0,r.kt)("p",null,"This allows you to access the AIR build tools and package manager easily based on your current environment."))}b.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),l=n(72957),o=n(16550),s=n(75238),u=n(33609),d=n(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=b({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var h=n(51048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}}}]);