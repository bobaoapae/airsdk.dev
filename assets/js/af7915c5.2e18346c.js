"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[23553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),h=r,u=s["".concat(l,".").concat(h)]||s[h]||c[h]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},o="Copying bitmap data",p={unversionedId:"development/display/working-with-bitmaps/copying-bitmap-data",id:"development/display/working-with-bitmaps/copying-bitmap-data",title:"Copying bitmap data",description:"To copy bitmap data from one image to another, you can use several methods:",source:"@site/docs/development/display/working-with-bitmaps/copying-bitmap-data.md",sourceDirName:"development/display/working-with-bitmaps",slug:"/development/display/working-with-bitmaps/copying-bitmap-data",permalink:"/docs/development/display/working-with-bitmaps/copying-bitmap-data",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-bitmaps/copying-bitmap-data.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Compressing bitmap data",permalink:"/docs/development/display/working-with-bitmaps/compressing-bitmap-data"},next:{title:"Making textures with noise functions",permalink:"/docs/development/display/working-with-bitmaps/making-textures-with-noise-functions"}},l={},d=[],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"copying-bitmap-data"},"Copying bitmap data"),(0,r.kt)("p",null,"To copy bitmap data from one image to another, you can use several methods:\n",(0,r.kt)("inlineCode",{parentName:"p"},"clone()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"copyPixels()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"copyChannel()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"draw()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"drawWithQuality()")," (\n",(0,r.kt)("inlineCode",{parentName:"p"},"drawWithQuality")," method available in Flash Player 11.3 and higher; AIR 3.3 and\nhigher)."),(0,r.kt)("p",null,"As its name suggests, the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," method lets you clone, or sample, bitmap\ndata from one BitmapData object to another. When called, the method returns a\nnew BitmapData object that is an exact clone of the original instance it was\ncopied from."),(0,r.kt)("p",null,"The following example clones a copy of an orange (parent) square and places the\nclone beside the original parent square:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import flash.display.Bitmap;\nimport flash.display.BitmapData;\n\nvar myParentSquareBitmap:BitmapData = new BitmapData(100, 100, false, 0x00ff3300);\nvar myClonedChild:BitmapData = myParentSquareBitmap.clone();\n\nvar myParentSquareContainer:Bitmap = new Bitmap(myParentSquareBitmap);\nthis.addChild(myParentSquareContainer);\n\nvar myClonedChildContainer:Bitmap = new Bitmap(myClonedChild);\nthis.addChild(myClonedChildContainer);\nmyClonedChildContainer.x = 110;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"copyPixels()")," method is a quick and easy way of copying pixels from one\nBitmapData object to another. The method takes a rectangular snapshot (defined\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceRect"),' parameter) of the source image and copies it to another\nrectangular area (of equal size). The location of the newly "pasted" rectangle\nis defined within the ',(0,r.kt)("inlineCode",{parentName:"p"},"destPoint")," parameter."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"copyChannel()")," method samples a predefined color channel value (alpha, red,\ngreen, or blue) from a source BitmapData object and copies it into a channel of\na destination BitmapData object. Calling this method does not affect the other\nchannels in the destination BitmapData object."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"draw()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"drawWithQuality()")," methods draw, or render, the graphical\ncontent from a source sprite, movie clip, or other display object on to a new\nbitmap. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"colorTransform"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blendMode"),", and destination\n",(0,r.kt)("inlineCode",{parentName:"p"},"clipRect")," parameters, you can modify the way in which the new bitmap is\nrendered. This method uses the vector renderer in Flash Player and AIR to\ngenerate the data."),(0,r.kt)("p",null,"When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"draw()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"drawWithQuality()")," you pass the source object\n(sprite, movie clip, or other display object) as the first parameter, as\ndemonstrated here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myBitmap.draw(movieClip);\n")),(0,r.kt)("p",null,"If the source object has had any transformations (color, matrix, and so forth)\napplied to it after it was originally loaded, these transformations are not\ncopied across to the new object. If you want to copy the transformations to the\nnew bitmap, then you need to copy the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," property from the\noriginal object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," property of the Bitmap object that uses the\nnew BitmapData object."))}c.isMDXComponent=!0}}]);