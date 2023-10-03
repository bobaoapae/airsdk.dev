"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[73923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,c=p["".concat(s,".").concat(m)]||p[m]||A[m]||o;return n?a.createElement(c,r(r({ref:t},g),{},{components:n})):a.createElement(c,r({ref:t},g))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>A,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={},r="Advanced text rendering",l={unversionedId:"development/text/using-the-textfield-class/advanced-text-rendering",id:"development/text/using-the-textfield-class/advanced-text-rendering",title:"Advanced text rendering",description:"ActionScript 3.0 provides a variety of classes in the flash.text package to",source:"@site/docs/development/text/using-the-textfield-class/advanced-text-rendering.md",sourceDirName:"development/text/using-the-textfield-class",slug:"/development/text/using-the-textfield-class/advanced-text-rendering",permalink:"/docs/development/text/using-the-textfield-class/advanced-text-rendering",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/text/using-the-textfield-class/advanced-text-rendering.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Using the TextField class",permalink:"/docs/development/text/using-the-textfield-class/"},next:{title:"Capturing text input",permalink:"/docs/development/text/using-the-textfield-class/capturing-text-input"}},s={},d=[{value:"Using embedded fonts",id:"using-embedded-fonts",level:2},{value:"Embedding a font in Flash",id:"embedding-a-font-in-flash",level:4},{value:"Embedding a font in Flex",id:"embedding-a-font-in-flex",level:4},{value:"Controlling sharpness, thickness, and anti-aliasing",id:"controlling-sharpness-thickness-and-anti-aliasing",level:2}],g={toc:d},p="wrapper";function A(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-text-rendering"},"Advanced text rendering"),(0,i.kt)("p",null,"ActionScript 3.0 provides a variety of classes in the flash.text package to\ncontrol the properties of displayed text, including embedded fonts,\nanti-aliasing settings, alpha channel control, and other specific settings. The\nActionScript 3.0 Reference provides detailed descriptions of these classes and\nproperties, including the CSMSettings, Font, and TextRenderer classes."),(0,i.kt)("h2",{id:"using-embedded-fonts"},"Using embedded fonts"),(0,i.kt)("p",null,"When you specify a specific font for a TextField in your application, Flash\nPlayer or AIR look for a device font (a font that resides on the user's\ncomputer) with the same name. If it doesn't find that font on the system, or if\nthe user has a slightly different version of a font with that name, the text\ndisplay could look very different from what you intend. By default, the text\nappears in a Times Roman font."),(0,i.kt)("p",null,"To make sure the user sees exactly the right font, you can embed that font in\nyour application SWF file. Embedded fonts have a number of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Embedded font characters are anti-aliased, making their edges appear smoother,\nespecially for larger text.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can rotate text that uses embedded fonts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Embedded font text can be made transparent or semitransparent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"kerning")," CSS style with embedded fonts."))),(0,i.kt)("p",null,"The biggest limitation to using embedded fonts is that they increase the file\nsize or download size of your application."),(0,i.kt)("p",null,"The exact method of embedding a font file into your application SWF file varies\naccording to your development environment."),(0,i.kt)("p",null,"Once you have embedded a font you can make sure a TextField uses the correct\nembedded font:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"embedFonts")," property of the TextField to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a TextFormat object, set its ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," property to the name of the\nembedded font, and apply the TextFormat object to the TextField. When\nspecifying an embedded font, the ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," property should only contain a\nsingle name; it cannot use a comma-delimited list of multiple font names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If using CSS styles to set fonts for TextFields or components, set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"font-family")," CSS property to the name of the embedded font. The ",(0,i.kt)("inlineCode",{parentName:"p"},"font-family"),"\nproperty must contain a single name and not a list of names if you want to\nspecify an embedded font."))),(0,i.kt)("h4",{id:"embedding-a-font-in-flash"},"Embedding a font in Flash"),(0,i.kt)("p",null,"Flash Professional lets you embed almost any font you have installed on your\nsystem, including TrueType fonts and Type 1 Postscript fonts."),(0,i.kt)("p",null,"You can embed fonts in an application in many ways, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting the font and style properties of a TextField on the Stage and clicking\nthe Embed Fonts checkbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating and referencing a font symbol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating and using a run-time shared library containing embedded font symbols"))),(0,i.kt)("p",null,'For more details about how to embed fonts in applications, see "Embedded fonts\nfor dynamic or input text fields" in ',(0,i.kt)("em",{parentName:"p"},"Using Flash"),"."),(0,i.kt)("h4",{id:"embedding-a-font-in-flex"},"Embedding a font in Flex"),(0,i.kt)("p",null,"You can embed fonts in a Flex application in many ways, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]")," metadata tag in a script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@font-face")," style declaration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Establish a class for the font and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Embed]")," tag to embed it."))),(0,i.kt)("p",null,'You can only embed TrueType fonts directly in a Flex application. Fonts in other\nformats, such as Type 1 Postscript fonts, can first be embedded in a SWF file\nusing Flash Professional and then that SWF file can be used in your Flex\napplication. For more details about using embedded fonts from SWF files in Flex,\nsee "Embedding fonts from SWF files" in ',(0,i.kt)("em",{parentName:"p"},"Using Flex\xa04"),"."),(0,i.kt)("h2",{id:"controlling-sharpness-thickness-and-anti-aliasing"},"Controlling sharpness, thickness, and anti-aliasing"),(0,i.kt)("p",null,"By default, Flash Player or AIR determines the settings for text display\ncontrols like sharpness, thickness, and anti-aliasing as text resizes, changes\ncolor, or is displayed on various backgrounds. In some cases, like when you have\nvery small or very large text, or text on a variety of unique backgrounds, you\nmight want to maintain control over these settings. You can override Flash\nPlayer or AIR settings using the ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.text.TextRenderer")," class and its\nassociated classes, like the CSMSettings class. These classes give you precise\ncontrol over the rendering quality of embedded text. For more information about\nembedded fonts, see ",(0,i.kt)("a",{parentName:"p",href:"#using-embedded-fonts"},"Using embedded fonts"),"."),(0,i.kt)("p",null,"Note: The ",(0,i.kt)("inlineCode",{parentName:"p"},"flash.text.TextField"),".antiAliasType property must have the value\n",(0,i.kt)("inlineCode",{parentName:"p"},"AntiAliasType.ADVANCED")," in order for you to set the sharpness, thickness, or\nthe gridFitType property, or to use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextRenderer.setAdvancedAntiAliasingTable()")," method."),(0,i.kt)("p",null,"The following example applies custom continuous stroke modulation (CSM)\nproperties and formatting to displayed text using an embedded font called\n",(0,i.kt)("inlineCode",{parentName:"p"},"myFont"),". When the user clicks the displayed text, Flash Player or Adobe AIR\napplies the custom settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var format:TextFormat = new TextFormat();\nformat.color = 0x336699;\nformat.size = 48;\nformat.font = "myFont";\n\nvar myText:TextField = new TextField();\nmyText.embedFonts = true;\nmyText.autoSize = TextFieldAutoSize.LEFT;\nmyText.antiAliasType = AntiAliasType.ADVANCED;\nmyText.defaultTextFormat = format;\nmyText.selectable = false;\nmyText.mouseEnabled = true;\nmyText.text = "Hello World";\naddChild(myText);\nmyText.addEventListener(MouseEvent.CLICK, clickHandler);\n\nfunction clickHandler(event:Event):void\n{\n    var myAntiAliasSettings = new CSMSettings(48, 0.8, -0.8);\n    var myAliasTable:Array = new Array(myAntiAliasSettings);\n    TextRenderer.setAdvancedAntiAliasingTable("myFont", FontStyle.ITALIC, TextColorType.DARK_COLOR, myAliasTable);\n}\n')),(0,i.kt)("p",null,"More Help topics"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93118).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111122163656/https://help.adobe.com/en_US/flash/cs/using/WSb03e830bd6f770ee21a3597d124daee0526-8000.html"},"Embed fonts for consistent text appearance")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72004).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150313235357/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WS2db454920e96a9e51e63e3d11c0bf69084-7fce.html"},"Embedding assets")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72004).Z,width:"16",height:"16"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150325110136/https://help.adobe.com/en_US/Flex/4.0/UsingSDK/WS2db454920e96a9e51e63e3d11c0bf69084-7f9e.html"},"Fonts")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20121122200914/https://www.adobe.com/devnet/flash/quickstart/embedding_fonts.html"},"Peter deHaan: Embedding fonts")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20120622225455/http://divillysausages.com/blog/as3_font_embedding_masterclass"},"Divillysausages.com: AS3 Font embedding masterclass")))}A.isMDXComponent=!0},93118:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8zMC8wNny0OBsAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABuUlEQVQ4jXWSTW4TQRCFv2qPFQeQFQkEEbBiTzZZ+ABIXIALsMx1gliw4xjcABbsYBEJkQ0RSBgU7JDYM+Pueix6xjMmTkul6p/6ef3qWZpMZGZIQu4opc43e99y1/rCQuDZp4+zVfLKgNYAJHCyybTeOzDEdt6N7+0VcmeVfFm5XxkQmgJqzG8wGQ7sFYqRfMZDU6AWRZssoDBiFINguOVYmicKT4n/14eDwydmhsfIZVX589OTr2/uPnj0an4+PUmrso2TRKGmgHoWBgOOTr9M31/MSoFuGRzs7I7uWBhsdJIoPMaMpffnVNcEuQ8hApLlYHX8biJoE0PzkKqK4/3H+7rvfF5cLY9+np3lRuqQCnDPHKhlETBBKkve/p1fvJ6fz4LhIwOPMWulZW+NoFe5HUcsSyxFvx0o1+Osa5K79bmSO8FTujbjVJb4Kmrjrq55qcFeny+5twi6qgZMLv98Gxpx2Bv4i3rxY4xQaPWRpV94SniWrLUK3A1UTeIa8u+gxTQ36L6RUkYwNEaSbc6oB5W2I506h9hI7tiv8VjXs7T2krZ7d+SOAYfAQ+DpFgA3rSUwBb7/AzeaZeLiQNqbAAAAAElFTkSuQmCC"},72004:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFHRFWHRDcmVhdGlvbiBUaW1lADQvNS8wN+R1htQAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzOY1kYDAAAEEXRFWHRYTUw6Y29tLmFkb2JlLnhtcAA8P3hwYWNrZXQgYmVnaW49IiAgICIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjEtYzAzNCA0Ni4yNzI5NzYsIFNhdCBKYW4gMjcgMjAwNyAyMjoxMTo0MSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhhcDpDcmVhdG9yVG9vbD5BZG9iZSBGaXJld29ya3MgQ1MzPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4YXA6Q3JlYXRlRGF0ZT4yMDA3LTA0LTA1VDIwOjA0OjM2WjwveGFwOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4YXA6TW9kaWZ5RGF0ZT4yMDA3LTA0LTA1VDIwOjUyOjA2WjwveGFwOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCdW47vAAABbUlEQVQokY1SsYoCMRCdZBdRK2tLK8F/sNdKLCxUsPED7PcvBEsRhAUbG62s7KwFsfAn1EpnJpvkitHg7R3cvSJMJvMmb/Kier1eFEVRFGmtAcA5Z6211mYfCNv9fh9/QrLOOfgO/8bj8Yi996FrCCT+CUSMpaUxZrVaSb/T6ZQkSWDmtMXMrJSy1nrvl8tlmqYAoLWW28IAsgKAJiJERETpYYzJsqzdbidJgoiDwaDT6RhjmNkYAwAaEYXjnBsOh7vdrl6vbzabRqPR7/e73e56vZZqZgaAmIgAQOTO5/PFYiEK0zQdj8fb7fZ6vQJAeD0teohIVDIzERUKhVarNZvNms1msVgkIsm/ZgiS5F5mHo1Gt9ttOp2ez+fJZEJvAICq1WrBYKWU2JTzIWQul0uMiPL8chCQs0wIr6G995/+h+oQhGoAiBHxV0JYc/8qPh6Ph8MB/oFqtVoul5X3/vl83u/3PwmlUqlSqXwB0IXy0gbtBNUAAAAASUVORK5CYII="}}]);