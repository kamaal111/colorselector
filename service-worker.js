if(!self.define){let e,o={};const r=(r,l)=>(r=new URL(r+".js",l).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let c={};const n=e=>r(e,i),t={module:{uri:i},exports:c,require:n};o[i]=Promise.all(l.map((e=>t[e]||n(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"color-selector"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/colorselector/css/app.fb839768.css",revision:null},{url:"/colorselector/img/app-store-black.a2e763b8.svg",revision:null},{url:"/colorselector/img/app-store-white.f226bf51.svg",revision:null},{url:"/colorselector/img/iphone-home-screen-dark.61b840f2.png",revision:null},{url:"/colorselector/img/iphone-home-screen-light.de469ff1.png",revision:null},{url:"/colorselector/img/mac-home-screen-dark.e58c5297.png",revision:null},{url:"/colorselector/img/mac-home-screen-light.a0e307a7.png",revision:null},{url:"/colorselector/img/mac-store-black.d3447980.svg",revision:null},{url:"/colorselector/img/mac-store-white.8cb929d9.svg",revision:null},{url:"/colorselector/index.html",revision:"82727600645091d8f8a875019e736885"},{url:"/colorselector/js/app.e646ddeb.js",revision:null},{url:"/colorselector/js/chunk-vendors.d7ac8633.js",revision:null},{url:"/colorselector/manifest.json",revision:"da531a4f71bd4ca671a66d5dc6cb4603"}],{})}));
//# sourceMappingURL=service-worker.js.map
