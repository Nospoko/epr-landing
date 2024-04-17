(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4683:function(e,t,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.t.bind(r,8058,23)),Promise.resolve().then(r.bind(r,2177)),Promise.resolve().then(r.t.bind(r,1359,23))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return o}});let n=r(6921),i=r(8630),a=r(1749),l=n._(r(536)),s=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=a.Image},2177:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(3827),i=r(4090),a=r(5250),l=r.n(a),s=r(7447),o=r.n(s),c=r(6128),u=()=>{let[e,t]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{"dark"===localStorage.getItem("theme")&&t(!0)},[]),(0,i.useEffect)(()=>{e?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[e]),(0,n.jsx)("div",{className:"hidden md:flex items-center justify-center",children:(0,n.jsxs)("div",{className:"toggleButton items-center justify-center hidden md:flex md:gap-1.5 dark:bg-neutralLight-neutral10 bg-neutralLight-neutral90 ",onClick:()=>t(!e),children:[e?(0,n.jsx)("div",{className:"bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300",style:{left:"2px"}}):(0,n.jsx)("div",{className:"bg-neutralLight-neutral10 dark:bg-neutralLight-neutral100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300",style:{right:"2px"}}),(0,n.jsx)(o(),{src:e?"/moon.svg":"/sun.svg",width:18,height:18,alt:e?"Moon icon":"Sun icon"})]})})};function d(){let[e,t]=(0,i.useState)(!1),r=()=>{t(!e)};return(0,n.jsxs)("nav",{className:"z-[999] relative flex w-full justify-between  items-center self-stretch border-b border-neutralLight-neutral90 dark:border-neutralDark-neutral90 border-solid p-4 md:px-[2.75rem] xl:px-[5.875rem] dark:bg-neutralDark-neutral100",children:[(0,n.jsx)("div",{className:"flex justify-start p3SB text-neutralLight-neutral10 dark:text-neutralDark-neutral10 gap-5 ",children:(0,n.jsx)(l(),{href:"/",className:"transition-transform duration-500 ease-in-out transform hover:scale-150 hover:rotate-180",children:(0,n.jsx)("div",{className:"flex w-full items-center justify-center transition",children:(0,n.jsx)("p",{className:"text-neutralLight-neutral10 dark:text-neutralDark-neutral10 h5",children:"EPR"})})})}),(0,n.jsxs)("div",{className:"flex w-full flex-wrap items-center justify-end gap-y-1 md:w-[initial] md:flex-nowrap gap-[1.5rem]",children:[(0,n.jsxs)("div",{className:"hidden md:flex items-center justify-center gap-x-2  text-neutralLight-neutral10 dark:text-neutralDark-neutral10 ",children:[(0,n.jsx)(l(),{className:"flex w-full items-center justify-center transition md:p3SB xl:p3 p-2.5 animation",href:"/pianoRoll",children:"Piano for AI"}),(0,n.jsx)(l(),{className:"flex w-full items-center justify-center  transition md:p3SB xl:p3 p-2.5 animation text-nowrap",href:"/customSolutions",children:"Custom Solutions"})]}),(0,n.jsx)(l(),{className:"flex justify-center items-center select-none text-sm px-5 py-2.5 h-10 gap-4 rounded-md border border-neutralLight-neutral40 bg-neutralLight-neutral10 dark:bg-neutralDark-neutral10 text-neutralLight-neutral100 dark:text-neutralDark-neutral100 p3SB animation",href:"/contactUs",children:"Contact us"}),(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:" flex md:hidden items-center justify-center cursor-pointer",onClick:r,children:(0,n.jsx)(o(),{src:"/menu.svg",width:24,height:24,alt:"Hamburger icon",className:"mr-[1rem]"})}),(0,n.jsxs)("div",{className:e?"fixed right-0 top-0 width-[100%] h-[100vh] bg-neutralLight-neutral90 p-10 ease-in duration-500":"fixed right-[-100%] top-0 width-[100%] h-screen bg-neutralLight-neutral90 p-10 ease-in duration-500",children:[(0,n.jsx)("div",{className:"flex w-full items-center justify-end",children:(0,n.jsx)("div",{onClick:r,className:"cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-150",children:(0,n.jsx)(c.oHP,{size:21})})}),(0,n.jsxs)("div",{className:"flex flex-col py-4",children:[(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold",children:"Home"})}),(0,n.jsx)(l(),{href:"/pianoRoll",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold",children:"PianoRoll"})}),(0,n.jsx)(l(),{href:"/customSolutions",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold",children:"Custom Solutions"})}),(0,n.jsx)(l(),{href:"/knowledge",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 cursor-pointer list-none hover:text-blueLight-blue50 transition-transform duration-500 ease-in-out transform hover:scale-110 active:font-semibold",children:"Knowledge"})})]})]})]})]})}function m(){return(0,n.jsx)(d,{})}},1359:function(){},8058:function(e){e.exports={style:{fontFamily:"'__pingFont_664178', '__pingFont_Fallback_664178'"},className:"__className_664178"}},158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(4090),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:i,size:a,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,l),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[259,749,250,971,69,744],function(){return e(e.s=4683)}),_N_E=e.O()}]);