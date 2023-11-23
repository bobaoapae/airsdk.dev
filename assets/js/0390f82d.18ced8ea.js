"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[23569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1},r="Managing calendar dates and times",s={unversionedId:"development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times",id:"development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times",title:"Managing calendar dates and times",description:"All of the calendar date and time management functions in ActionScript 3.0 are",source:"@site/docs/development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times.md",sourceDirName:"development/core-actionscript-classes/working-with-dates-and-times",slug:"/development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times",permalink:"/docs/development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-dates-and-times/managing-calendar-dates-and-times.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with dates and times",permalink:"/docs/development/core-actionscript-classes/working-with-dates-and-times/"},next:{title:"Controlling time intervals",permalink:"/docs/development/core-actionscript-classes/working-with-dates-and-times/controlling-time-intervals"}},l={},c=[{value:"Creating Date objects",id:"creating-date-objects",level:2},{value:"Getting time unit values",id:"getting-time-unit-values",level:2},{value:"Performing date and time arithmetic",id:"performing-date-and-time-arithmetic",level:2},{value:"Converting between time zones",id:"converting-between-time-zones",level:2},{value:"Adobe recommends",id:"adobe-recommends",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-calendar-dates-and-times"},"Managing calendar dates and times"),(0,i.kt)("p",null,"All of the calendar date and time management functions in ActionScript 3.0 are\nconcentrated in the top-level Date class. The Date class contains methods and\nproperties that let you handle dates and times in either Coordinated Universal\nTime (UTC) or in local time specific to a time zone. UTC is a standard time\ndefinition that is essentially the same as Greenwich Mean Time (GMT)."),(0,i.kt)("h2",{id:"creating-date-objects"},"Creating Date objects"),(0,i.kt)("p",null,"The Date class boasts one of the most versatile constructor methods of all the\ncore classes. You can invoke it four different ways."),(0,i.kt)("p",null,"First, if given no parameters, theDate()` constructor returns a Date object\ncontaining the current date and time, in local time based on your time zone.\nHere's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var now:Date = new Date();\n")),(0,i.kt)("p",null,"Second, if given a single numeric parameter, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor treats\nthat as the number of milliseconds since January 1, 1970, and returns a\ncorresponding Date object. Note that the millisecond value you pass in is\ntreated as milliseconds since January 1, 1970, in UTC. However, the Date object\nshows values in your local time zone, unless you use the UTC-specific methods to\nretrieve and display them. If you create a new Date object using a single\nmilliseconds parameter, make sure you account for the time zone difference\nbetween your local time and UTC. The following statements create a Date object\nset to midnight on the day of January 1, 1970, in UTC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var millisecondsPerDay:int = 1000 * 60 * 60 * 24; \n// gets a Date one day after the start date of 1/1/1970 \nvar startTime:Date = new Date(millisecondsPerDay);\n")),(0,i.kt)("p",null,"Third, you can pass multiple numeric parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor. It\ntreats those parameters as the year, month, day, hour, minute, second, and\nmillisecond, respectively, and returns a corresponding Date object. Those input\nparameters are assumed to be in local time rather than UTC. The following\nstatements get a Date object set to midnight at the start of January 1, 2000, in\nlocal time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var millenium:Date = new Date(2000, 0, 1, 0, 0, 0, 0);\n")),(0,i.kt)("p",null,"Fourth, you can pass a single string parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor. It\nwill try to parse that string into date or time components and then return a\ncorresponding Date object. If you use this approach, it's a good idea to enclose\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor in a ",(0,i.kt)("inlineCode",{parentName:"p"},"try..catch")," block to trap any parsing errors. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor accepts a number of different string formats (which are\nlisted in the\n",(0,i.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),").\nThe following statement initializes a new Date object using a string value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},'var nextDay:Date = new Date("Mon May 1 2006 11:30:00 AM");\n')),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date()")," constructor cannot successfully parse the string parameter, it\nwill not raise an exception. However, the resulting Date object will contain an\ninvalid date value."),(0,i.kt)("h2",{id:"getting-time-unit-values"},"Getting time unit values"),(0,i.kt)("p",null,"You can extract the values for various units of time within a Date object using\nproperties or methods of the Date class. Each of the following properties gives\nyou the value of a time unit in the Date object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fullYear")," property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," property, which is in a numeric format with 0 for January up to 11\nfor December")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," property, which is the calendar number of the day of the month, in\nthe range of 1 to 31")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"day")," property, which is the day of the week in numeric format, with 0\nstanding for Sunday")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hours")," property, in the range of 0 to 23")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"minutes")," property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"seconds")," property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")," property"),(0,i.kt)("p",{parentName:"li"},"In fact, the Date class gives you a number of ways to get each of these\nvalues. For example, you can get the month value of a Date object in four\ndifferent ways:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getMonth()")," method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"monthUTC")," property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getMonthUTC()")," method"),(0,i.kt)("p",{parentName:"li"},"All four ways are essentially equivalent in terms of efficiency, so you can\nuse whichever approach suits your application best."),(0,i.kt)("p",{parentName:"li"},"The properties just listed all represent components of the total date value.\nFor example, the milliseconds property will never be greater than 999, since\nwhen it reaches 1000 the seconds value increases by 1 and the milliseconds\nproperty resets to 0."),(0,i.kt)("p",{parentName:"li"},"If you want to get the value of the Date object in terms of milliseconds since\nJanuary 1, 1970 (UTC), you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getTime()")," method. Its counterpart,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"setTime()")," method, lets you change the value of an existing Date object\nusing milliseconds since January 1, 1970 (UTC)."))),(0,i.kt)("h2",{id:"performing-date-and-time-arithmetic"},"Performing date and time arithmetic"),(0,i.kt)("p",null,"You can perform addition and subtraction on dates and times with the Date class.\nDate values are kept internally in terms of milliseconds, so you should convert\nother values to milliseconds before adding them to or subtracting them from Date\nobjects."),(0,i.kt)("p",null,"If your application will perform a lot of date and time arithmetic, you might\nfind it useful to create constants that hold common time unit values in terms of\nmilliseconds, like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"public static const millisecondsPerMinute:int = 1000 * 60; \npublic static const millisecondsPerHour:int = 1000 * 60 * 60; \npublic static const millisecondsPerDay:int = 1000 * 60 * 60 * 24;\n")),(0,i.kt)("p",null,"Now it is easy to perform date arithmetic using standard time units. The\nfollowing code sets a date value to one hour from the current time using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"getTime()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setTime()")," methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"var oneHourFromNow:Date = new Date(); \noneHourFromNow.setTime(oneHourFromNow.getTime() + millisecondsPerHour);\n")),(0,i.kt)("p",null,"Another way to set a date value is to create a new Date object using a single\nmilliseconds parameter. For example, the following code adds 30 days to one date\nto calculate another:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"// sets the invoice date to today's date \nvar invoiceDate:Date = new Date(); \n \n// adds 30 days to get the due date \nvar dueDate:Date = new Date(invoiceDate.getTime() + (30 * millisecondsPerDay));\n")),(0,i.kt)("p",null,"Next, the ",(0,i.kt)("inlineCode",{parentName:"p"},"millisecondsPerDay")," constant is multiplied by 30 to represent 30\ndays' time and the result is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"invoiceDate")," value and used to set\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"dueDate")," value."),(0,i.kt)("h2",{id:"converting-between-time-zones"},"Converting between time zones"),(0,i.kt)("p",null,"Date and time arithmetic comes in handy when you want to convert dates from one\ntime zone to another. So does the ",(0,i.kt)("inlineCode",{parentName:"p"},"getTimezoneOffset()")," method, which returns\nthe value in minutes by which the Date object's time zone differs from UTC. It\nreturns a value in minutes because not all time zones are set to even-hour\nincrements\u2014some have half-hour offsets from neighboring zones."),(0,i.kt)("p",null,"The following example uses the time zone offset to convert a date from local\ntime to UTC. It does the conversion by first calculating the time zone value in\nmilliseconds and then adjusting the Date value by that amount:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},'// creates a Date in local time \nvar nextDay:Date = new Date("Mon May 1 2006 11:30:00 AM"); \n \n// converts the Date to UTC by adding or subtracting the time zone offset \nvar offsetMilliseconds:Number = nextDay.getTimezoneOffset() * 60 * 1000; \nnextDay.setTime(nextDay.getTime() + offsetMilliseconds);\n')),(0,i.kt)("h2",{id:"adobe-recommends"},"Adobe recommends"),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"-2---1--2-in-math-operations-with-dates-in-actionscript"},(0,i.kt)("a",{parentName:"h3",href:"https://web.archive.org/web/20160404212319/http://www.jabbypanda.com/blog/2011/09/when-2-1-when-doing-math-operations-with-dates-in-actionscript/"},(0,i.kt)("img",{src:n(64029).Z,width:"40",height:"30"})," 2 - 1 = 2 in math operations with dates in ActionScript")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20210301181454/http://jabbypanda.com/blog/"},"JabbyPanda"))))}p.isMDXComponent=!0},64029:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFNThmrq+czNLLKDNnKCtousLGxcavpKmiGyRXBgcXOEWFtLq0wcOwKzWJNzpyOjo3HCRJSEY6nqWRytTVqa23d3RqJSQ3RTk65O3iHSU50tTKSGvKzdHFxMrEAQEBMzyEys3ShYmKhYd8JCUl0tK6h4qm2OHc1NXBnaalw8a7DREnvMO6CREY4+TN4OPUBQom7+7iLjdcZWdc29nE09rFDBMyRVOU5OnavMKpysu7MiMbHSpnHB07IiJMGRAISFq3CwwNfISCKjR6wb20FRs7LDRzLjt81NzT2t675fHykJ2JGSEsExhc3NzMHBtCk5Wd19SzJC5xu7yiQUdHExMzRkVosry7lJOKICpVyc3FFBkzNDIpPT5irre9vMm/eH58EBESIiZTrbGpdG5zvrasOVq7ERIhKjtCM0GSERYqMjedOkWRkI13Pkmmmp+XLjl1GR40ISNCX2FcZ2dlQkpTEhAaFhstKC5dbHJ1QUNCmZqLGh5LEBgjDBZEGRsiko6EFh1BTEtNGAoSEhU6IB5SAQELHBUaPDxFHBwsIyldGy97JyZV7O/dLDE1ysu2HBkTBAsNEhkbtratEgoKKy5UXVpTFBdBBAcFJSlOPk2eHBkdL0KKDw4pGRcqR1itCQgGTUVGgn53Kj2OFxMTBgMCICNaQys3YV5MDhEDFxYzCAYNdGxVVj042NW2XFpw0c6vysOxJ0iVJyxF5OjTMDBiVFyD6uzn/PnoHi6DJyuENS91kZm94erPCx1Mury5xtHNGiUVPFKlnZ+lsbGnIB9etbij0Myxubeij5aP4N/lgZCX2Ni4KB0Zh4uWmZeLkpybmZCRn5mZX2BQLCdYgIN+vczRoZqQKjhvdnuPKDV/6PXZS1Jat8O1vMC4TmCzcHNtFhcS2NvQ8e3kvb3H9vj1P0yyKjAiOSkz3+ruOEeYXGFlExlLGBVCSE9RQDkpUU9S4OPGWlZKPUB9Hh4hJydMQEi11NjL0NXbU1FeV1hQVFpYYmV0W1hdQ0ZPaUZMYF5fHw+3lAAABLRJREFUeNock3lYE0cYh8ckQFbQBA8wiIN2tcq6uPVYLxIdaYi1aGwsaggewWNLGjWJGhATMRIWQUUSwSxi4ioMStLLampPe1h72ltbm7Zqau9We4i1lz2Wfn/MH9/zzjzf9/6eAbs6Zx/qL1eaEnl5/Q0mh8PR3175VOdLu+YX3XAG1A6G0p29Vpu0cqDIvn725YOFisrOA50JeyIxIC/PdNGQqDR7GD4QuqHntboozRNRoKxXHBq+1t5mOHj5O5MjUWnPMxUrtz3x7Li3d0JYGvdnnYjwPMGogY8JF64dbiCYpkLFxBPK+dXdP4T0f8k+n7BnX2Yycu1ExC0ESlwVTcDSSzKPDz8Ne/hlQ54fNGpxnKWgKuPk2NSfC2a8tonniBiq1ag9SuCjSfr0VDOP8ftXX71v8ppmiGDm2IKCaf2OffRkGQkRQdssPo8HGBgo8G2AwUeuLkg999gjmRjB2yPSMk6tgy3v5KtgwBbytLv8ITBATvdgAkxdODInd8KU0fe8hyGZdob/+MuMTDjrDygImqazFU5KB04fWD8/1gPHfDIld8G5c6P3Tp+EdrzxE9561+S9x8qz62I8pb2pZ3XVgL5oV0QRP2ZY2satBalDly4aqyJHkkLZpTuWLliqasCQsLk0Tm0IBGm2W1HPjErfCa/s2Yo71o3OFM8s3JJ+P1KVbUySEAadmiqq1AfcAZpVPMN8vQMmV53s1wIfOp4Nm3+bl/JpyfcpNRAJsDZLy7K+OHBHtH5LFc+3lF+YNuW5D/C6NRjD6yO/Hbw8ZUgNhKLAlfo9ZoUDRJhSCw3xNzOHnkq7d9Ar29dkSiAMbhmSsvDvWskpJvyeJrnJBDjORtHCWw/Pyv5ic/DFfnfXQAwFKFVvgI9BEULkaq8wFxaBHrdRT8OZ/8zEj47ZvPJCF48Q7mr5n43FYrBVFJ0utVluABoLq43A1h8bcKvq3x0ibDkMcW+flj5WOmmvxqlWVwOgd9ps0XCsxx3r64vJ7UdEiMgOLO2LEU7u3+y1sKEmRTGo0Hgpo85CBwSSJGsmvXxcUgSF5jkbXr+yIX3Dvpzf+dLdCoe0jM7itfmUPkbz5vIUWW5u/qIMFRYgOVg2d9jcnAk5+auzorsVxcVFIExQFr/avO2BD+e9ILuVkzE99Ze++eYMW5Evk62aVD70dqOxQimvBo1EWM/6qs2BknfvLMu9NWP6jP24rgH2jhs8YvyFJIQ9KnepTj1RDbJoTms0GikBCitll8aP+Cz9cOvR7Dp4fcmSPyXdIgxGjH6/lgKc1dp4Pq7lpRbeuCp9/Io5XXVHs7Ox0NxslWzDAOEC9TqtBYTD0TBXi6CAYjwu37RydQMfRLGOLkk4FkUpJa2iMiFv14IsJxNmCFoQBTeSUna7ea6RCCAJw31BYo+ysPKrXx98GlRVsXo95aWtfckiPoqEEtDmFaTPJpVo7WL1rFmeZ58Kqpztuoo2TQmKYdzSy93kBKJ7oEYQRIwFESFkjJ83Mow/Dih9HAwc2K6V5m4lOzgjHeC7b5TAgPQcslqRSN2s3+2qomkQDnnicZ2eEax8A9nV6OIRt2wxLV2DEmdFKOhlCw0X9YH/BBgAtrjSfSBJZqYAAAAASUVORK5CYII="}}]);