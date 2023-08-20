"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[37255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},o="Convolution filter",l={unversionedId:"development/display/filtering-display-objects/convolution-filter",id:"development/display/filtering-display-objects/convolution-filter",title:"Convolution filter",description:"The ConvolutionFilter class can be used to apply a wide range of imaging",source:"@site/docs/development/display/filtering-display-objects/convolution-filter.md",sourceDirName:"development/display/filtering-display-objects",slug:"/development/display/filtering-display-objects/convolution-filter",permalink:"/docs/development/display/filtering-display-objects/convolution-filter",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/filtering-display-objects/convolution-filter.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Color matrix filter",permalink:"/docs/development/display/filtering-display-objects/color-matrix-filter"},next:{title:"Creating and applying filters",permalink:"/docs/development/display/filtering-display-objects/creating-and-applying-filters"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"convolution-filter"},"Convolution filter"),(0,a.kt)("p",null,"The ConvolutionFilter class can be used to apply a wide range of imaging\ntransformations to BitmapData objects or display objects, such as blurring, edge\ndetection, sharpening, embossing, and beveling."),(0,a.kt)("p",null,"The convolution filter conceptually goes through each pixel in the source image\none by one and determines the final color of that pixel using the value of the\npixel and its surrounding pixels. A matrix, specified as an array of numeric\nvalues, indicates to what degree the value of each particular neighboring pixel\naffects the final resulting value."),(0,a.kt)("p",null,"Consider the most commonly used type of matrix, which is a three by three\nmatrix. The matrix includes nine values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"N    N    N\nN    P    N\nN    N    N\n")),(0,a.kt)("p",null,'When the convolution filter is applied to a certain pixel, it will look at the\ncolor value of the pixel itself ("P" in the example), as well as the values of\nthe surrounding pixels (labeled "N" in the example). However, by setting values\nin the matrix, you specify how much priority certain pixels have in affecting\nthe resulting image.'),(0,a.kt)("p",null,"For example, the following matrix, applied using a convolution filter, will\nleave an image exactly as it was:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0    0    0\n0    1    0\n0    0    0\n")),(0,a.kt)("p",null,"The reason the image is unchanged is because the original pixel's value has a\nrelative strength of 1 in determining the final pixel color, while the\nsurrounding pixels' values have relative strength of 0\u2014meaning their colors\ndon't affect the final image."),(0,a.kt)("p",null,"Similarly, this matrix will cause the pixels of an image to shift one pixel to\nthe left:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0    0    0\n0    0    1\n0    0    0\n")),(0,a.kt)("p",null,"Notice that in this case, the pixel itself has no effect on the final value of\nthe pixel displayed in that location on the final image\u2014only the value of the\npixel to the right is used to determine the pixel's resulting value."),(0,a.kt)("p",null,"In ActionScript, you create the matrix as a combination of an Array instance\ncontaining the values and two properties specifying the number of rows and\ncolumns in the matrix. The following example loads an image and, when the image\nfinishes loading, applies a convolution filter to the image using the matrix in\nthe previous listing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Load an image onto the Stage.\nvar loader:Loader = new Loader();\nvar url:URLRequest = new URLRequest("http://www.helpexamples.com/flash/images/image1.jpg");\nloader.load(url);\nthis.addChild(loader);\n\nfunction applyFilter(event:MouseEvent):void\n{\n    // Create the convolution matrix.\n    var matrix:Array = [0, 0, 0,\n                        0, 0, 1,\n                        0, 0, 0];\n\n    var convolution:ConvolutionFilter = new ConvolutionFilter();\n    convolution.matrixX = 3;\n    convolution.matrixY = 3;\n    convolution.matrix = matrix;\n    convolution.divisor = 1;\n\n    loader.filters = [convolution];\n}\n\nloader.addEventListener(MouseEvent.CLICK, applyFilter);\n')),(0,a.kt)("p",null,"Something that isn't obvious in this code is the effect of using values other\nthan 1 or 0 in the matrix. For example, the same matrix, with the number 8\ninstead of 1 in the right-hand position, performs the same action (shifting the\npixels to the left). In addition, it affects the colors of the image, making\nthem 8 times brighter. This is because the final pixel color values are\ncalculated by multiplying the matrix values by the original pixel colors, adding\nthe values together, and dividing by the value of the filter's ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor"),"\nproperty. Notice that in the example code, the ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor")," property is set to 1.\nAs a general rule, if you want the brightness of the colors to stay about the\nsame as in the original image, you should make the divisor equal to the sum of\nthe matrix values. So with a matrix where the values add up to 8, and a divisor\nof 1, the resulting image is going to be roughly 8 times brighter than the\noriginal image."),(0,a.kt)("p",null,"Although the effect of this matrix isn't very noticeable, other matrix values\ncan be used to create various effects. Here are several standard sets of matrix\nvalues for different effects using a three by three matrix:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Basic blur (divisor 5):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," 0 1 0\n 1 1 1\n 0 1 0\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sharpening (divisor 1):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," 0, -1, 0\n-1, 5, -1\n 0, -1, 0\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edge detection (divisor 1):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," 0, -1, 0\n-1, 4, -1\n 0, -1, 0\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Embossing effect (divisor 1):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," -2, -1, 0\n-1, 1, 1\n 0, 1, 2\n")),(0,a.kt)("p",{parentName:"li"},"Notice that with most of these effects, the divisor is 1. This is because the\nnegative matrix values added to the positive matrix values result in 1 (or 0\nin the case of edge detection, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor")," property's value cannot be\n0)."))))}d.isMDXComponent=!0}}]);