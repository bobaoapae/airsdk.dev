"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[57526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:7.7},o="Working with multiple databases",s={unversionedId:"development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases",id:"development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases",title:"Working with multiple databases",description:"Use the SQLConnection.attach() method to open a connection to an additional",source:"@site/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases.md",sourceDirName:"development/files-and-data/working-with-local-sql-databases-in-air",slug:"/development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-multiple-databases.md",tags:[],version:"current",sidebarPosition:7.7,frontMatter:{sidebar_position:7.7},sidebar:"mainSidebar",previous:{title:"Changing or deleting data",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/changing-or-deleting-data"},next:{title:"Handling database errors",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/handling-database-errors"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-multiple-databases"},"Working with multiple databases"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SQLConnection.attach()")," method to open a connection to an additional\ndatabase on a\n",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLConnection.html"},"SQLConnection"),"\ninstance that already has an open database. You give the attached database a\nname using the name parameter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"attach()")," method call. When writing\nstatements to manipulate that database, you can then use that name in a prefix\n(using the form ",(0,i.kt)("inlineCode",{parentName:"p"},"database-name.table-name"),") to qualify any table names in your\nSQL statements, indicating to the runtime that the table can be found in the\nnamed database."),(0,i.kt)("p",null,"You can execute a single SQL statement that includes tables from multiple\ndatabases that are connected to the same SQLConnection instance. If a\ntransaction is created on the SQLConnection instance, that transaction applies\nto all SQL statements that are executed using the SQLConnection instance. This\nis true regardless of which attached database the statement runs on."),(0,i.kt)("p",null,"Alternatively, you can also create multiple SQLConnection instances in an\napplication, each of which is connected to one or multiple databases. However,\nif you do use multiple connections to the same database keep in mind that a\ndatabase transaction isn't shared across SQLConnection instances. Consequently,\nif you connect to the same database file using multiple SQLConnection instances,\nyou can't rely on both connections' data changes being applied in the expected\nmanner. For example, if two ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," statements are run against the\nsame database through different SQLConnection instances, and an application\nerror occurs after one operation takes place, the database data could be left in\nan intermediate state that would not be reversible and might affect the\nintegrity of the database (and consequently the application)."))}u.isMDXComponent=!0}}]);