"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[93442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||h[m]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},r="Adding PDF content in AIR",l={unversionedId:"development/rich-media-content/adding-pdf-content-in-air",id:"development/rich-media-content/adding-pdf-content-in-air",title:"Adding PDF content in AIR",description:"Applications running in Adobe\xae AIR\xae can render not only SWF and HTML content,",source:"@site/docs/development/rich-media-content/adding-pdf-content-in-air.md",sourceDirName:"development/rich-media-content",slug:"/development/rich-media-content/adding-pdf-content-in-air",permalink:"/docs/development/rich-media-content/adding-pdf-content-in-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/adding-pdf-content-in-air.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Workflow for playing protected content",permalink:"/docs/development/rich-media-content/using-digital-rights-management/workflow-for-playing-protected-content"},next:{title:"User interaction",permalink:"/docs/development/user-interaction/"}},c={},p=[{value:"Detecting PDF Capability",id:"detecting-pdf-capability",level:2},{value:"Loading PDF content",id:"loading-pdf-content",level:2},{value:"Scripting PDF content",id:"scripting-pdf-content",level:2},{value:"HTML-PDF communication basics",id:"html-pdf-communication-basics",level:3},{value:"Scripting PDF content from ActionScript",id:"scripting-pdf-content-from-actionscript",level:3},{value:"Known limitations for PDF content in AIR",id:"known-limitations-for-pdf-content-in-air",level:2}],d={toc:p},s="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-pdf-content-in-air"},"Adding PDF content in AIR"),(0,i.kt)("p",null,"Applications running in Adobe\xae AIR\xae can render not only SWF and HTML content,\nbut also PDF content. AIR applications render PDF content using the HTMLLoader\nclass, the WebKit engine, and the Adobe\xae Reader\xae browser plug-in. In an AIR\napplication, PDF content can either stretch across the full height and width of\nyour application or alternatively as a portion of the interface. The Adobe\nReader browser plug-in controls display of PDF files in an AIR application.\nmodifications to the Reader toolbar interface (such as controls for position,\nanchoring, and visibility) persist in subsequent viewing of PDF files in both\nAIR applications and the browser."),(0,i.kt)("p",null,"Important: To render PDF content in AIR, the user must have Adobe Reader or\nAdobe\xae Acrobat\xae version 8.1 or higher installed."),(0,i.kt)("h2",{id:"detecting-pdf-capability"},"Detecting PDF Capability"),(0,i.kt)("p",null,"If the user does not have Adobe Reader or Adobe Acrobat 8.1 or higher, PDF\ncontent is not displayed in an AIR application. To detect if a user can render\nPDF content, first check the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLLoader.pdfCapability")," property. This property\nis set to one of the following constants of the HTMLPDFCapability class:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constant"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTMLPDFCapability.STATUS_OK"),(0,i.kt)("td",{parentName:"tr",align:null},"A sufficient version (8.1 or greater) of Adobe Reader is detected and PDF content can be loaded into an HTMLLoader object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTMLPDFCapability.ERROR_INSTALLED_READER_NOT_FOUND"),(0,i.kt)("td",{parentName:"tr",align:null},"No version of Adobe Reader is detected. An HTMLLoader object cannot display PDF content.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTMLPDFCapability.ERROR_INSTALLED_READER_TOO_OLD"),(0,i.kt)("td",{parentName:"tr",align:null},"Adobe Reader has been detected, but the version is too old. An HTMLLoader object cannot display PDF content.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTMLPDFCapability.ERROR_PREFERRED_READER_TOO_OLD"),(0,i.kt)("td",{parentName:"tr",align:null},"A sufficient version (8.1 or later) of Adobe Reader is detected, but the version of Adobe Reader that is set up to handle PDF content is older than Reader 8.1. An HTMLLoader object cannot display PDF content.")))),(0,i.kt)("p",null,"On Windows, if Adobe Acrobat or Adobe Reader version 7.x or above is running on\nthe user's system, that version is used even if a later version that supports\nloading PDF is installed. In this case, if the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pdfCapability"),"\nproperty is ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLPDFCapability.STATUS_OK"),", when an AIR application attempts to\nload PDF content, the older version of Acrobat or Reader displays an alert (and\nno exception is thrown in the AIR application). If this is a possible situation\nfor your end users, consider providing them with instructions to close Acrobat\nwhile running your application. You may want to display these instructions if\nthe PDF content does not load within an acceptable time frame."),(0,i.kt)("p",null,"On Linux, AIR looks for Adobe Reader in the PATH exported by the user (if it\ncontains the acroread command) and in the /opt/Adobe/Reader directory."),(0,i.kt)("p",null,"The following code detects whether a user can display PDF content in an AIR\napplication. If the user cannot display PDF, the code traces the error code that\ncorresponds to the HTMLPDFCapability error object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'if(HTMLLoader.pdfCapability == HTMLPDFCapability.STATUS_OK)\n{\n    trace("PDF content can be displayed");\n}\nelse\n{\n    trace("PDF cannot be displayed. Error code:", HTMLLoader.pdfCapability);\n}\n')),(0,i.kt)("h2",{id:"loading-pdf-content"},"Loading PDF content"),(0,i.kt)("p",null,"You can add a PDF to an AIR application by creating an HTMLLoader instance,\nsetting its dimensions, and loading the path of a PDF."),(0,i.kt)("p",null,"The following example loads a PDF from an external site. Replace the URLRequest\nwith the path to an available external PDF."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var request:URLRequest = new URLRequest("http://www.example.com/test.pdf");\npdf = new HTMLLoader();\npdf.height = 800;\npdf.width = 600;\npdf.load(request);\ncontainer.addChild(pdf);\n')),(0,i.kt)("p",null,"You can also load content from file URLs and AIR-specific URL schemes, such as\napp and app-storage. For example, the following code loads the test.pdf file in\nthe PDFs subdirectory of the application directory:"),(0,i.kt)("p",null,"app:/js_api_reference.pdf"),(0,i.kt)("p",null,"For more information on AIR URL schemes, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/networking-and-communication/http-communications/loading-external-data#uri-schemes"},"URI schemes"),"."),(0,i.kt)("h2",{id:"scripting-pdf-content"},"Scripting PDF content"),(0,i.kt)("p",null,"You can use JavaScript to control PDF content just as you can in a web page in\nthe browser."),(0,i.kt)("p",null,"JavaScript extensions to Acrobat provide the following features, among others:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Controlling page navigation and magnification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Processing forms within the document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Controlling multimedia events"))),(0,i.kt)("p",null,"Full details on JavaScript extensions for Adobe Acrobat are provided at the\nAdobe Acrobat Developer Connection at\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20140302020537/https://www.adobe.com/devnet/acrobat/javascript.html"},"JavaScript for Acrobat"),"."),(0,i.kt)("h3",{id:"html-pdf-communication-basics"},"HTML-PDF communication basics"),(0,i.kt)("p",null,"JavaScript in an HTML page can send a message to JavaScript in PDF content by\ncalling the ",(0,i.kt)("inlineCode",{parentName:"p"},"postMessage()")," method of the DOM object representing the PDF\ncontent. For example, consider the following embedded PDF content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<object id="PDFObj" data="test.pdf" type="application/pdf" width="100%" height="100%"/>\n')),(0,i.kt)("p",null,"The following JavaScript code in the containing HTML content sends a message to\nthe JavaScript in the PDF file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pdfObject = document.getElementById("PDFObj");\npdfObject.postMessage(["testMsg", "hello"]);\n')),(0,i.kt)("p",null,"The PDF file can include JavaScript for receiving this message. You can add\nJavaScript code to PDF files in some contexts, including the document-, folder-,\npage-, field-, and batch-level contexts. Only the document-level context, which\ndefines scripts that are evaluated when the PDF document opens, is discussed\nhere."),(0,i.kt)("p",null,"A PDF file can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"messageHandler")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"hostContainer")," object.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"messageHandler")," property is an object that defines handler functions to\nrespond to messages. For example, the following code defines the function to\nhandle messages received by the PDF file from the host container (which is the\nHTML content embedding the PDF file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'this.hostContainer.messageHandler = {onMessage: myOnMessage};\n\nfunction myOnMessage(aMessage)\n{\n    if(aMessage[0] == "testMsg")\n    {\n        app.alert("Test message: " + aMessage[1]);\n    }\n    else\n    {\n        app.alert("Error");\n    }\n}\n')),(0,i.kt)("p",null,"JavaScript code in the HTML page can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"postMessage()")," method of the PDF\nobject contained in the page. Calling this method sends a message (\n",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello from HTML"'),") to the document-level JavaScript in the PDF file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<html>\n<head>\n<title>PDF Test</title>\n<script>\n    function init()\n    {\n        pdfObject = document.getElementById("PDFObj");\n        try\n        {\n            pdfObject.postMessage(["alert", "Hello from HTML"]);\n        }\n        catch (e)\n        {\n            alert( "Error: \\n name = " + e.name + "\\n message = " + e.message );\n        }\n    }\n<\/script>\n</head>\n<body onload=\'init()\'>\n    <object\n        id="PDFObj"\n        data="test.pdf"\n        type="application/pdf"\n        width="100%" height="100%"/>\n</body>\n</html>\n')),(0,i.kt)("p",null,"For a more advanced example, and for information on using Acrobat 8 to add\nJavaScript to a PDF file, see\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150121072654/http://www.adobe.com/devnet/air/flex/quickstart/articles/scripting_pdf.html"},"Cross-scripting PDF content in Adobe AIR"),"."),(0,i.kt)("h3",{id:"scripting-pdf-content-from-actionscript"},"Scripting PDF content from ActionScript"),(0,i.kt)("p",null,"ActionScript code (in SWF content) cannot directly communicate with JavaScript\nin PDF content. However, ActionScript can communicate with the JavaScript in the\nHTML page loaded in an HTMLLoader object that loads PDF content, and that\nJavaScript code can communicate with the JavaScript in the loaded PDF file. For\nmore information, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/"},"Programming HTML and JavaScript in AIR"),"."),(0,i.kt)("h2",{id:"known-limitations-for-pdf-content-in-air"},"Known limitations for PDF content in AIR"),(0,i.kt)("p",null,"PDF content in Adobe AIR has the following limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PDF content does not display in a window (a NativeWindow object) that is\ntransparent (where the ",(0,i.kt)("inlineCode",{parentName:"p"},"transparent")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The display order of a PDF file operates differently than other display\nobjects in an AIR application. Although PDF content clips correctly according\nto HTML display order, it will always sit on top of content in the AIR\napplication's display order.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If certain visual properties of an HTMLLoader object that contains a PDF\ndocument are changed, the PDF document will become invisible. These properties\ninclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"filters"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rotation"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"scaling")," properties. Changing\nthese properties renders the PDF content invisible until the properties are\nreset. The PDF content is also invisible if you change these properties of\ndisplay object containers that contain the HTMLLoader object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PDF content is visible only when the ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMode")," property of the Stage object\nof the NativeWindow object containing the PDF content is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"StageScaleMode.NO_SCALE"),". When it is set to any other value, the PDF content\nis not visible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clicking links to content within the PDF file update the scroll position of\nthe PDF content. Clicking links to content outside the PDF file redirect the\nHTMLLoader object that contains the PDF (even if the target of a link is a new\nwindow).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PDF commenting workflows do not function in AIR."))))}h.isMDXComponent=!0}}]);