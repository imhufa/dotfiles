import{H as e,c as g}from"./e412787c9b354f52d337c0d89a7a2afb.js";import"./996869ba6d63f2f6359689debd17c6d1.js";import"./bad6fc33885c3dcbb1ba56439c60597f.js";import"./6d607360b71772a2db5fecf7e66b72f4.js";import"./f6c2ea3b0cc179a4b83702356ba845d1.js";import"./037131c481fa585d02e4fbfce6b00d30.js";import"./b25f058dd0413b28b0729fd121febeca.js";import"./8927cb3a31b28f8a8f7a0cb0bcd7a270.js";let u;function x(e){u=e,u.postMessage({greeting:"hi there content script!"}),u.onMessage.addListener((e=>{console.log("In background script, received message from content script"),console.log(e.greeting)}))}e.Browser().runtime.onMessage.addListener(((t,r,s)=>e.sendMessageListener(t,r,s))),e.Browser().runtime.onMessageExternal.addListener(((t,r,s)=>e.sendMessageListener(t,r,s,!0))),e.Browser().runtime.onConnect.addListener(x);let f=!1;var B=t=>{{let r=!1;"install"==t.reason&&(r=!0),e.clearStorage(r),e.Browser().tabs.query({url:g.extension_dir+"src/html/setup.html"}).then((t=>{t.forEach((t=>{console.log(t),e.Browser().tabs.remove(t.id)}))}))}f||(f=!0,e.settingsBuild(!0).then((r=>{if("update"==t.reason&&e.notUndefined(r,"settings.search_ask_mode")){let t=r.settings;e.Browser().storage.local.set({settings:t})}"install"==t.reason&&e.openPage({url:g.extension_dir+"src/html/setup.html"})})))};e.Browser().runtime.onInstalled.addListener((async e=>B(e))),e.Browser().runtime.onUpdateAvailable.addListener((e=>B(e))),e.Browser().runtime.setUninstallURL(g.site+"/uninstall"),e.Browser().storage.local.set({migrate_test:1}),e.Browser().storage.local.get("uuid_hopekey").then((t=>{if(null==t.uuid_hopekey)return e.uuid(1)})),e.Browser().action.onClicked.addListener((t=>{e.Browser().sidePanel.setPanelBehavior({openPanelOnActionClick:!0}).catch((e=>console.error(e))),e.Browser().sidePanel.setOptions({enabled:!0})})),e.Browser().runtime.onMessage.addListener((t=>{if("action.onCaptureScreen"==t.fn){const{data:r}=t.data,{x:s,y:n,width:a,height:o,windowWidth:i}=r;if(!a||!o)return;e.captureCurrentViewport().then((t=>{fetch(t).then((e=>e.blob())).then((t=>{createImageBitmap(t).then((t=>{const r=t.width/i,d=s*r,c=n*r,l=a*r,g=o*r,u=new OffscreenCanvas(l,g);u.getContext("2d").drawImage(t,d,c,l,g,0,0,l,g),u.convertToBlob().then((t=>{const r=new FileReader;r.readAsDataURL(t),r.onloadend=()=>{const t=r.result;e.Browser().storage.local.set({ai_image_url:t}).then()}}))}))}))})).catch((e=>console.error(e)))}}));