if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),l={module:{uri:o},exports:t,require:f};i[o]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-83691863.js",revision:null},{url:"assets/index-e0374f9f.css",revision:null},{url:"index.html",revision:"54de24c5e112e316a5169d28d9344ebf"},{url:"registerSW.js",revision:"ff87d6f93429a314ed455d404e5ca15f"},{url:"pwa-64x64.png",revision:"42fe03e610694e65d82f89505de44294"},{url:"pwa-192x192.png",revision:"37782fa150ee92917575135a38a9b126"},{url:"pwa-512x512.png",revision:"c33c97f190a7245d104978052e388baf"},{url:"maskable-icon-512x512.png",revision:"5a2c300784fbfbf2e60bf829963d86ab"},{url:"manifest.webmanifest",revision:"b767e352657553a5e6fea411d1e91807"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
