"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[95623],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var s=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),d=function(e){var a=s.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return s.createElement(l.Provider,{value:a},e.children)},h="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(t),u=r,p=h["".concat(l,".").concat(u)]||h[u]||y[u]||n;return t?s.createElement(p,i(i({ref:a},c),{},{components:t})):s.createElement(p,i({ref:a},c))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<n;d++)i[d]=t[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20423:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(87462),r=(t(67294),t(3905));const n={sidebar_position:4},i="Multidimensional arrays",o={unversionedId:"development/core-actionscript-classes/working-with-arrays/multidimensional-arrays",id:"development/core-actionscript-classes/working-with-arrays/multidimensional-arrays",title:"Multidimensional arrays",description:"Multidimensional arrays contain other arrays as elements. For example, consider",source:"@site/docs/development/core-actionscript-classes/working-with-arrays/multidimensional-arrays.md",sourceDirName:"development/core-actionscript-classes/working-with-arrays",slug:"/development/core-actionscript-classes/working-with-arrays/multidimensional-arrays",permalink:"/docs/development/core-actionscript-classes/working-with-arrays/multidimensional-arrays",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-arrays/multidimensional-arrays.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Associative arrays",permalink:"/docs/development/core-actionscript-classes/working-with-arrays/associative-arrays"},next:{title:"Cloning arrays",permalink:"/docs/development/core-actionscript-classes/working-with-arrays/cloning-arrays"}},l={},d=[{value:"Two indexed arrays",id:"two-indexed-arrays",level:2},{value:"Associative array with an indexed array",id:"associative-array-with-an-indexed-array",level:2}],c={toc:d},h="wrapper";function y(e){let{components:a,...t}=e;return(0,r.kt)(h,(0,s.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multidimensional-arrays"},"Multidimensional arrays"),(0,r.kt)("p",null,"Multidimensional arrays contain other arrays as elements. For example, consider\na list of tasks that is stored as an indexed array of strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var tasks:Array = ["wash dishes", "take out trash"];\n')),(0,r.kt)("p",null,"If you want to store a separate list of tasks for each day of the week, you can\ncreate a multidimensional array with one element for each day of the week. Each\nelement contains an indexed array, similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks")," array, that stores the\nlist of tasks. You can use any combination of indexed or associative arrays in\nmultidimensional arrays. The examples in the following sections use either two\nindexed arrays or an associative array of indexed arrays. You might want to try\nthe other combinations as exercises."),(0,r.kt)("h2",{id:"two-indexed-arrays"},"Two indexed arrays"),(0,r.kt)("p",null,"When you use two indexed arrays, you can visualize the result as a table or\nspreadsheet. The elements of the first array represent the rows of the table,\nwhile the elements of the second array represent the columns."),(0,r.kt)("p",null,"For example, the following multidimensional array uses two indexed arrays to\ntrack task lists for each day of the week. The first array, ",(0,r.kt)("inlineCode",{parentName:"p"},"masterTaskList"),", is\ncreated using the Array class constructor. Each element of the array represents\na day of the week, with index 0 representing Monday, and index 6 representing\nSunday. These elements can be thought of as the rows in the table. You can\ncreate each day's task list by assigning an array literal to each of the seven\nelements that you create in the ",(0,r.kt)("inlineCode",{parentName:"p"},"masterTaskList")," array. The array literals\nrepresent the columns in the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var masterTaskList:Array = new Array();\nmasterTaskList[0] = ["wash dishes", "take out trash"];\nmasterTaskList[1] = ["wash dishes", "pay bills"];\nmasterTaskList[2] = ["wash dishes", "dentist", "wash dog"];\nmasterTaskList[3] = ["wash dishes"];\nmasterTaskList[4] = ["wash dishes", "clean house"];\nmasterTaskList[5] = ["wash dishes", "wash car", "pay rent"];\nmasterTaskList[6] = ["mow lawn", "fix chair"];\n')),(0,r.kt)("p",null,"You can access individual items on any of the task lists using the array access\n(",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") operator. The first set of brackets represents the day of the week, and\nthe second set of brackets represents the task list for that day. For example,\nto retrieve the second task from Wednesday's list, first use index 2 for\nWednesday, and then use index 1 for the second task in the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"trace(masterTaskList[2][1]); // output: dentist\n")),(0,r.kt)("p",null,"To retrieve the first task from Sunday's list, use index 6 for Sunday and index\n0 for the first task on the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"trace(masterTaskList[6][0]); // output: mow lawn\n")),(0,r.kt)("h2",{id:"associative-array-with-an-indexed-array"},"Associative array with an indexed array"),(0,r.kt)("p",null,"To make the individual arrays easier to access, you can use an associative array\nfor the days of the week and an indexed array for the task lists. Using an\nassociative array allows you to use dot syntax when referring to a particular\nday of the week, but at the cost of extra run-time processing to access each\nelement of the associative array. The following example uses an associative\narray as the basis of a task list, with a key and value pair for each day of the\nweek:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var masterTaskList:Object = new Object();\nmasterTaskList["Monday"] = ["wash dishes", "take out trash"];\nmasterTaskList["Tuesday"] = ["wash dishes", "pay bills"];\nmasterTaskList["Wednesday"] = ["wash dishes", "dentist", "wash dog"];\nmasterTaskList["Thursday"] = ["wash dishes"];\nmasterTaskList["Friday"] = ["wash dishes", "clean house"];\nmasterTaskList["Saturday"] = ["wash dishes", "wash car", "pay rent"];\nmasterTaskList["Sunday"] = ["mow lawn", "fix chair"];\n')),(0,r.kt)("p",null,"Dot syntax makes the code more readable by making it possible to avoid multiple\nsets of brackets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"trace(masterTaskList.Wednesday[1]); // output: dentist\ntrace(masterTaskList.Sunday[0]);// output: mow lawn\n")),(0,r.kt)("p",null,"You can iterate through the task list using a ",(0,r.kt)("inlineCode",{parentName:"p"},"for..in")," loop, but you must use\nthe array access (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") operator instead of dot syntax to access the value\nassociated with each key. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"masterTaskList")," is an associative array, the\nelements are not necessarily retrieved in the order that you may expect, as the\nfollowing example shows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for (var day:String in masterTaskList)\n{\n    trace(day + ": " + masterTaskList[day])\n}\n/* output:\nSunday: mow lawn,fix chair\nWednesday: wash dishes,dentist,wash dog\nFriday: wash dishes,clean house\nThursday: wash dishes\nMonday: wash dishes,take out trash\nSaturday: wash dishes,wash car,pay rent\nTuesday: wash dishes,pay bills\n*/\n')))}y.isMDXComponent=!0}}]);