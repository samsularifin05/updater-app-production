if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),t={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/Bkyg5UEF.css",revision:null},{url:"assets/js/BY4B1hAn.js",revision:null},{url:"assets/js/DcV4keh-.js",revision:null},{url:"index.html",revision:"b978aed7d82045f3730e1de2d9567b52"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"68a36a97c78186017decaac63cc8f5e6"},{url:"icons/logo-192.png",revision:"7767024dba3e855062c90b7c56edb21d"},{url:"icons/logo-512.png",revision:"0f69e33bc33dc89056b551675a5c5760"},{url:"icons/logo-1024.png",revision:"30372fa45e5b29a50e75f9bea3437e54"},{url:"manifest.webmanifest",revision:"e929bc8b0cdca2d1c02d701ecbf22d0d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),self.__WB_DISABLE_DEV_LOGS=!0}));
