"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[9454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"Configuration files",sidebar_position:4},l=void 0,r={unversionedId:"building/actionscript-compilers/configuration-files",id:"building/actionscript-compilers/configuration-files",title:"Configuration files",description:"You typically specify compilation options both on the command line and with one or more configuration files. The global SDK configuration file contains default values that are used whenever the compilers are run. You can edit this file to suit your own development environment. There are two global configuration files located in the frameworks directory of your SDK installation. The air-config.xml file is used when you run the amxmlc compiler. This file configures the compiler for AIR by including the AIR libraries. The flex-config.xml file is used when you run mxmlc.",source:"@site/docs/building/actionscript-compilers/configuration-files.md",sourceDirName:"building/actionscript-compilers",slug:"/building/actionscript-compilers/configuration-files",permalink:"/docs/building/actionscript-compilers/configuration-files",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/actionscript-compilers/configuration-files.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuration files",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Component compiler (compc)",permalink:"/docs/building/actionscript-compilers/component-compiler"},next:{title:"AIR Debug Launcher (adl)",permalink:"/docs/building/air-debug-launcher"}},p={},s=[{value:"Locating configuration files",id:"locating-configuration-files",level:2},{value:"Configuration file syntax",id:"configuration-file-syntax",level:2},{value:"About the root tag",id:"about-the-root-tag",level:3},{value:"Getting the configuration file tags",id:"getting-the-configuration-file-tags",level:3},{value:"Understanding leaf nodes",id:"understanding-leaf-nodes",level:3},{value:"Using tokens",id:"using-tokens",level:3},{value:"Appending values",id:"appending-values",level:3}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You typically specify compilation options both on the command line and with one or more configuration files. The global SDK configuration file contains default values that are used whenever the compilers are run. You can edit this file to suit your own development environment. There are two global configuration files located in the frameworks directory of your SDK installation. The ",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file is used when you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"amxmlc")," compiler. This file configures the compiler for AIR by including the AIR libraries. The ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml")," file is used when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"mxmlc"),"."),(0,o.kt)("p",null,"The default configuration values are suitable for discovering how Flex and AIR work, but when you embark on a full-scale project examine the available options more closely. You can supply project-specific values for the compiler options in a local configuration file that takes precedence over the global values for a given project."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"No compilation options are used specifically for AIR applications, but you must reference the AIR libraries when compiling an AIR application. Typically, these libraries are referenced in a project-level configuration file, in a file for a build tool such as Ant, or directly on the command line.")),(0,o.kt)("p",null,"You can generate a configuration file with the current settings by using the dump-config option, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mxmlc -dump-config myapp-config.xml\n")),(0,o.kt)("h2",{id:"locating-configuration-files"},"Locating configuration files"),(0,o.kt)("p",null,"You can specify the location of a configuration file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"load-config")," option. The target configuration file can be the default ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file, or it can be a custom configuration file. The following example loads a custom configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compc -load-config=myconfig.xml\n")),(0,o.kt)("p",null,"If you specify the filename with the ",(0,o.kt)("inlineCode",{parentName:"p"},"+=")," operator, your loaded configuration file is used in addition to and not instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compc -load-config+=myconfig.xml\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"mxmlc")," compiler, you can also use a local configuration file. A local configuration file does not require you to point to it on the command line. Rather, AIR examines the same directory as the target file for a configuration file with the same name (one that matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"filename-config.xml")," filename). If it finds a file, it uses it in conjunction with the ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file. You can also specify a configuration file by using the load-config option with the ",(0,o.kt)("inlineCode",{parentName:"p"},"+=")," operator."),(0,o.kt)("p",null,"For example, if your application\u2019s top-level file is called ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApp.mxml"),", the compiler first checks for a ",(0,o.kt)("inlineCode",{parentName:"p"},"MyApp-config.xml")," file for configuration settings. With this feature, you can easily compile multiple applications using different configuration options without changing your command-line options or your ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file. "),(0,o.kt)("p",null,"Options in the local configuration file take precedence over options set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-config.xml"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"air-config.xml")," file. Options set in a configuration file that the load-config option specify take precedence over the local configuration file. Commandline settings take precedence over all configuration file settings."),(0,o.kt)("h2",{id:"configuration-file-syntax"},"Configuration file syntax"),(0,o.kt)("p",null,"You store values in a configuration file in XML blocks, which follow a specific syntax. In general, the tags you use match the command-line options."),(0,o.kt)("h3",{id:"about-the-root-tag"},"About the root tag"),(0,o.kt)("p",null,"The root tag of the default configuration file is ",(0,o.kt)("inlineCode",{parentName:"p"},"<flex-config>"),". If you write a custom configuration file, it must also have this root tag. Compiler configuration files must also have an XML declaration tag, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<flex-config>\n')),(0,o.kt)("p",null,"You must close the ",(0,o.kt)("inlineCode",{parentName:"p"},"<flex-config>")," tag as you would any other XML tag. All compiler configuration files must be closed with the following tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"</flex-config>\n")),(0,o.kt)("p",null,"In general, the second tag in a configuration file is the ",(0,o.kt)("inlineCode",{parentName:"p"},"<compiler>")," tag. This tag wraps most compiler options. However, not all compiler options are set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<compiler>")," block of the configuration file. Tags that you must wrap in the compiler block are prefixed by compiler in the help output (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"compiler.services"),"). If the option uses no dot-notation in the help output (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"include-file"),"), it is a tag at the root level of the configuration file, and the entry appears as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<compiler>\n...\n</compiler>\n<include-file>\n    <name>logo.gif</name>\n    <path>c:/images/logo/logo1.gif</path>\n</include-file>\n")),(0,o.kt)("p",null,"In some cases, options have multiple parent tags, as with the fonts options, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"compiler.fonts.managers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"compiler.fonts.languages"),".language. Other options that require parent tags when added to a configuration file include the ",(0,o.kt)("inlineCode",{parentName:"p"},"frames.frame")," option and the metadata options. The following sections describe methods for determining the syntax."),(0,o.kt)("h3",{id:"getting-the-configuration-file-tags"},"Getting the configuration file tags"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"help list")," option of the command-line compilers to get the configuration file syntax of the compiler options; for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mxmlc -help list advanced\n")),(0,o.kt)("p",null,"The following is the entry for the source-path option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-compiler.source-path [path-element][...]\n")),(0,o.kt)("p",null,"This indicates that in the configuration file, you can have one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"<path-element>")," child tags of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<sourcepath>")," tag, and that ",(0,o.kt)("inlineCode",{parentName:"p"},"<source-path>")," is a child of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<compiler>")," tag. The following example shows how this should appear in the configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<compiler>\n    <source-path>\n        <path-element>.</path-element>\n        <path-element>c:/myclasses/</path-element>\n    </source-path>\n</compiler>\n")),(0,o.kt)("h3",{id:"understanding-leaf-nodes"},"Understanding leaf nodes"),(0,o.kt)("p",null,"The help output uses dot-notation to separate child tags from parent tags, with the right-most entry being known as the leaf node. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"-tag1.tag2")," indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"<tag2>")," should be a child tag of ",(0,o.kt)("inlineCode",{parentName:"p"},"<tag1>"),"."),(0,o.kt)("p",null,"Angle brackets (",(0,o.kt)("inlineCode",{parentName:"p"},"< >"),") or square brackets (",(0,o.kt)("inlineCode",{parentName:"p"},"[ ]"),") that surround an option indicate that the option is a leaf node."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Square")," brackets indicate that there can be a list of one or more parameters for that option."),(0,o.kt)("p",null,"If the leaf node of a tag in the angle bracket is unique, you do not have to specify the parent tags in the configuration file. For example, the help usage shows the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compiler.fonts.managers [manager-class][...]\n")),(0,o.kt)("p",null,"You can specify the value of this option in the configuration file, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<compiler>\n    <fonts>\n        <managers>\n            <manager-class>flash.fonts.JREFontManager</manager-class>\n        </managers>\n    </fonts>\n</compiler>\n")),(0,o.kt)("p",null,"However, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<manager-class>")," leaf node is unique, so you can set the value without specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"<fonts>")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"<managers>")," parent tags, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<compiler>\n    <manager-class>flash.fonts.JREFontManager</manager-class>\n</compiler>\n")),(0,o.kt)("p",null,"If the help output shows multiple options listed in angle brackets, you set the values of these options at the same level inside the configuration file and do not make them child tags of each other. For example, the usage for default-size (",(0,o.kt)("inlineCode",{parentName:"p"},"default-size <width> <height>"),") indicates that the default size of the application is set in a configuration file, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<default-size>\n    <height>height_value</height>\n    <width>width_value</width>\n</default-size>\n")),(0,o.kt)("h3",{id:"using-tokens"},"Using tokens"),(0,o.kt)("p",null,"You can pass custom token values to the compiler using the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+token_name=value\n")),(0,o.kt)("p",null,"In the configuration file, you reference that value using the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${token_name}\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Context")," token in your configuration files to represent the context root of the application. You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"${flexlib}")," token to represent the frameworks directory. This is useful if you set up your own configuration and are not using the default ",(0,o.kt)("inlineCode",{parentName:"p"},"library-path")," settings."),(0,o.kt)("p",null,"The default value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"${flexlib}")," token is ",(0,o.kt)("inlineCode",{parentName:"p"},"application_home\\frameworks"),"."),(0,o.kt)("h3",{id:"appending-values"},"Appending values"),(0,o.kt)("p",null,"In a configuration file, you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"append")," attribute of any tag that takes a list of arguments. Set this attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to indicate that the values should be appended to the option rather than replace it. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Setting the append attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," lets you compound the values of options with multiple configuration files. The following example appends two entries to the library-path option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<library-path append="true">\n    <path-element>/mylibs</path-element>\n    <path-element>/myotherlibs</path-element>\n</library-path>\n')))}f.isMDXComponent=!0}}]);