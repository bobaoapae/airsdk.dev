"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[99834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),h=r,u=s["".concat(d,".").concat(h)]||s[h]||c[h]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={},i="HTML in AIR",l={unversionedId:"development/html-content-in-air/about-the-html-environment/html-in-air",id:"development/html-content-in-air/about-the-html-environment/html-in-air",title:"HTML in AIR",description:"AIR and WebKit define a couple of non-standard HTML elements and attributes,",source:"@site/docs/development/html-content-in-air/about-the-html-environment/html-in-air.md",sourceDirName:"development/html-content-in-air/about-the-html-environment",slug:"/development/html-content-in-air/about-the-html-environment/html-in-air",permalink:"/docs/development/html-content-in-air/about-the-html-environment/html-in-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/html-content-in-air/about-the-html-environment/html-in-air.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"CSS in AIR",permalink:"/docs/development/html-content-in-air/about-the-html-environment/css-in-air"},next:{title:"JavaScript in AIR",permalink:"/docs/development/html-content-in-air/about-the-html-environment/javascript-in-air"}},d={},m=[{value:"HTML frame and iframe elements",id:"html-frame-and-iframe-elements",level:2},{value:"HTML element event handlers",id:"html-element-event-handlers",level:2},{value:"HTML contentEditable attribute",id:"html-contenteditable-attribute",level:2},{value:"Data: URLs",id:"data-urls",level:2}],p={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html-in-air"},"HTML in AIR"),(0,r.kt)("p",null,"AIR and WebKit define a couple of non-standard HTML elements and attributes,\nincluding:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#html-frame-and-iframe-elements"},"HTML frame and iframe elements")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#html-element-event-handlers"},"HTML element event handlers")),(0,r.kt)("h2",{id:"html-frame-and-iframe-elements"},"HTML frame and iframe elements"),(0,r.kt)("p",null,"AIR adds new attributes to the frame and iframe elements of content in the\napplication sandbox:"),(0,r.kt)("p",null,"sandboxRoot attribute",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"sandboxRoot")," attribute specifies an alternate, non-application domain of\norigin for the file specified by the frame ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," attribute. The file is loaded\ninto the non-application sandbox corresponding to the specified domain. Content\nin the file and content loaded from the specified domain can cross-script each\nother."),(0,r.kt)("p",null,"Important: If you set the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"sandboxRoot")," ",(0,r.kt)("em",{parentName:"p"},"to the base URL of the domain,\nall requests for content from that domain are loaded from the application\ndirectory instead of the remote server (whether that request results from page\nnavigation, from an XMLHttpRequest, or from any other means of loading\ncontent).")),(0,r.kt)("p",null,"documentRoot attribute",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"documentRoot")," attribute specifies the local directory from which to load\nURLs that resolve to files within the location specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"sandboxRoot"),"."),(0,r.kt)("p",null,"When resolving URLs, either in the frame ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," attribute, or in content loaded\ninto the frame, the part of the URL matching the value specified in\n",(0,r.kt)("inlineCode",{parentName:"p"},"sandboxRoot")," is replaced with the value specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"documentRoot"),". Thus, in\nthe following frame tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe src="http://www.example.com/air/child.html"\n        documentRoot="app:/sandbox/"\n        sandboxRoot="http://www.example.com/air/"/>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," is loaded from the ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," subdirectory of the application\ninstallation folder. Relative URLs in ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," are resolved based on\n",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," directory. Note that any files on the remote server at\n",(0,r.kt)("inlineCode",{parentName:"p"},"www.example.com/air")," are not accessible in the frame, since AIR would attempt\nto load them from the app:/sandbox/ directory."),(0,r.kt)("p",null,"allowCrossDomainXHR attribute",(0,r.kt)("br",{parentName:"p"}),"\n","Include ",(0,r.kt)("inlineCode",{parentName:"p"},'allowCrossDomainXHR="allowCrossDomainXHR"')," in the opening frame tag to\nallow content in the frame to make XMLHttpRequests to any remote domain. By\ndefault, non-application content can only make such requests to its own domain\nof origin. There are serious security implications involved in allowing\ncross-domain XHRs. Code in the page is able to exchange data with any domain. If\nmalicious content is somehow injected into the page, any data accessible to code\nin the current sandbox can be compromised. Only enable cross-domain XHRs for\npages that you create and control and only when cross-domain data loading is\ntruly necessary. Also, carefully validate all external data loaded by the page\nto prevent code injection or other forms of attack."),(0,r.kt)("p",null,"Important: If the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowCrossDomainXHR"),' attribute is included in a frame or\niframe element, cross-domain XHRs are enabled (unless the value assigned is "0"\nor starts with the letters "f" or "n"). For example, setting\n',(0,r.kt)("inlineCode",{parentName:"p"},"allowCrossDomainXHR"),' to " ',(0,r.kt)("inlineCode",{parentName:"p"},'deny"')," ",(0,r.kt)("em",{parentName:"p"},"would still enable cross-domain XHRs. Leave\nthe attribute out of the element declaration altogether if you do not want to\nenable cross-domain requests.")),(0,r.kt)("p",null,"ondominitialize attribute",(0,r.kt)("br",{parentName:"p"}),"\n","Specifies an event handler for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dominitialize")," event of a frame. This event\nis an AIR-specific event that fires when the window and document objects of the\nframe have been created, but before any scripts have been parsed or document\nelements created."),(0,r.kt)("p",null,"The frame dispatches the ",(0,r.kt)("inlineCode",{parentName:"p"},"dominitialize")," event early enough in the loading\nsequence that any script in the child page can reference objects, variables, and\nfunctions added to the child document by the ",(0,r.kt)("inlineCode",{parentName:"p"},"dominitialize")," handler. The parent\npage must be in the same sandbox as the child to directly add or access any\nobjects in a child document. However, a parent in the application sandbox can\nestablish a sandbox bridge to communicate with content in a non-application\nsandbox."),(0,r.kt)("p",null,"The following examples illustrate use of the iframe tag in AIR:"),(0,r.kt)("p",null,"Place ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," in a remote sandbox, without mapping to an actual domain on a\nremote server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe src="http://localhost/air/child.html"\n        documentRoot="app:/sandbox/"\n        sandboxRoot="http://localhost/air/"/>\n')),(0,r.kt)("p",null,"Place ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," in a remote sandbox, allowing XMLHttpRequests only to\n",(0,r.kt)("inlineCode",{parentName:"p"},"www.example.com"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe src="http://www.example.com/air/child.html"\n        documentRoot="app:/sandbox/"\n        sandboxRoot="http://www.example.com/air/"/>\n')),(0,r.kt)("p",null,"Place ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," in a remote sandbox, allowing XMLHttpRequests to any remote\ndomain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe src="http://www.example.com/air/child.html"\n        documentRoot="app:/sandbox/"\n        sandboxRoot="http://www.example.com/air/"\n        allowCrossDomainXHR="allowCrossDomainXHR"/>\n')),(0,r.kt)("p",null,"Place ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," in a local-with-file-system sandbox:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<iframe src="file:///templates/child.html"\n        documentRoot="app:/sandbox/"\n        sandboxRoot="app-storage:/templates/"/>\n')),(0,r.kt)("p",null,"Place ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," in a remote sandbox, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dominitialize")," event to\nestablish a sandbox bridge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n<head>\n    <script>\n        var bridgeInterface = {};\n        bridgeInterface.testProperty = "Bridge engaged";\n        function engageBridge(){\n            document.getElementById("sandbox").parentSandboxBridge = bridgeInterface;\n        }\n    <\/script>\n</head>\n<body>\n    <iframe id="sandbox"\n            src="http://www.example.com/air/child.html"\n            documentRoot="app:/"\n            sandboxRoot="http://www.example.com/air/"\n            ondominitialize="engageBridge()"/>\n</body>\n</html>\n')),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"child.html")," document illustrates how child content can access the\nparent sandbox bridge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<head>\n    <script>\n        document.write(window.parentSandboxBridge.testProperty);\n    <\/script>\n</head>\n<body></body>\n</html>\n")),(0,r.kt)("p",null,"For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/cross-scripting-content-in-different-security-sandboxes"},"Cross-scripting content in different security sandboxes"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/html-security-in-adobe-air"},"HTML security in Adobe AIR"),"."),(0,r.kt)("h2",{id:"html-element-event-handlers"},"HTML element event handlers"),(0,r.kt)("p",null,"DOM objects in AIR and WebKit dispatch some events not found in the standard DOM\nevent model. The following table lists the related event attributes you can use\nto specify handlers for these events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Callback attribute name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oncontextmenu"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a context menu is invoked, such as through a right-click or command-click on selected text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oncopy"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a selection in an element is copied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oncut"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a selection in an element is cut.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondominitialize"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when the DOM of a document loaded in a frame or iframe is created, but before any DOM elements are created or scripts parsed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondrag"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when an element is dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondragend"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a drag is released.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondragenter"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a drag gesture enters the bounds of an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondragleave"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a drag gesture leaves the bounds of an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondragover"),(0,r.kt)("td",{parentName:"tr",align:null},"Called continuously while a drag gesture is within the bounds of an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondragstart"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a drag gesture begins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ondrop"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a drag gesture is released while over an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onerror"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when an error occurs while loading an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oninput"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when text is entered into a form element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onpaste"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when an item is pasted into an element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onscroll"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when the content of a scrollable element is scrolled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onselectstart"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a selection begins.")))),(0,r.kt)("h2",{id:"html-contenteditable-attribute"},"HTML contentEditable attribute"),(0,r.kt)("p",null,"You can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentEditable")," attribute to any HTML element to allow users\nto edit the content of the element. For example, the following example HTML code\nsets the entire document as editable, except for first ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n<head/>\n<body contentEditable="true">\n    <h1>de Finibus Bonorum et Malorum</h1>\n    <p contentEditable="false">Sed ut perspiciatis unde omnis iste natus error.</p>\n    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>\n</body>\n</html>\n')),(0,r.kt)("p",null,"Note: If you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"document.designMode")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"on"),", then all elements\nin the document are editable, regardless of the setting of ",(0,r.kt)("inlineCode",{parentName:"p"},"contentEditable")," for\nan individual element. However, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"designMode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"off"),", does not disable\nediting of elements for which ",(0,r.kt)("inlineCode",{parentName:"p"},"contentEditable")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/about-the-html-environment/javascript-in-air#documentdesignmode-property"},"Document.designMode property"),"\nfor additional information."),(0,r.kt)("h2",{id:"data-urls"},"Data: URLs"),(0,r.kt)("p",null,"AIR supports ",(0,r.kt)("inlineCode",{parentName:"p"},"data:")," URLs for the following elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"img")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'input type="image"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSS rules allowing images (such as background-image)"))),(0,r.kt)("p",null,"Data URLs allow you to insert binary image data directly into a CSS or HTML\ndocument as a base64-encoded string. The following example uses a data: URL as a\nrepeating background:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<html>\n<head>\n    <style>\n        body {\n            background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF%2F6cA%2F%2F%2F%2Fgxp3lwAAAAJ0Uk5T%2FwDltzBKAAABF0lEQVR42uzZQQ7CMAxE0e%2F7X5oNCyRocWzPiJbMBZ6qpIljE%2BnwklgKG7kwUjc2IkIaxkY0CPdEsCCasws6ShXBgmBBmEagpXQQLAgWBAuSY2gaKaWPYEGwIEwg0FRmECwIFoQeQjJlhJWUEFazjFDJCkI5WYRWMgjtfEGYyQnCXD4jTCdm1zmngFpBFznwVNi5RPSbwbWnpYr%2BBHi%2FtCTfgPLEPL7jBctAKBRptXJ8M%2BprIuZKu%2BUKcg4YK1PLz7kx4bSqHyPaT4d%2B28OCJJiRBo4FCQsSA0bziT3XubMgYUG6fc5fatmGBQkL0hoJ1IaZMiQsSFiQ8vRscTjlQOI2iHZwtpHuf%2BJAYiOiJSkj8Z%2FIQ4ABANvXGLd3%2BZMrAAAAAElFTkSuQmCC');\n            background-repeat:repeat;\n        }\n    </style>\n</head>\n<body>\n</body>\n</html>\n")),(0,r.kt)("p",null,"When using data: URLS, be aware that extra whitespace is significant. For\nexample, the data string must be entered as a single, unbroken line. Otherwise,\nthe line breaks are treated as part of the data and the image cannot be decoded."))}c.isMDXComponent=!0}}]);