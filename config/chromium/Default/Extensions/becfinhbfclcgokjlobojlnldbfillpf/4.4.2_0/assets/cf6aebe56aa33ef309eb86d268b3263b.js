import{A as b,_ as w,m as C,C as k}from"./868e2f778520f2da472700481dad9c46.js";import"./f6c2ea3b0cc179a4b83702356ba845d1.js";import{I as d,J as t,b5 as o,U as p,bz as c,bq as g,bm as H,H as _,W as V,Q as x,aT as T,aI as u,A as B}from"./b25f058dd0413b28b0729fd121febeca.js";import{H as r}from"./e412787c9b354f52d337c0d89a7a2afb.js";import{A as f}from"./7edb7b282aee4e8d34ca50bb81fcbd87.js";import"./8927cb3a31b28f8a8f7a0cb0bcd7a270.js";import"./ef6e94b174353d77df2f6d030dd5f4e9.js";import"./bad6fc33885c3dcbb1ba56439c60597f.js";import"./037131c481fa585d02e4fbfce6b00d30.js";import"./996869ba6d63f2f6359689debd17c6d1.js";import"./6d607360b71772a2db5fecf7e66b72f4.js";const A={extends:b,data(){return{pinned:!1,login:!1,openTabId:null,popup_try:0,googlePopUp:(t,a=515,i=580)=>(null!=t&&t.target.setAttribute("disabled","disabled"),r.apiCall("/auth/google/get_url",{},"POST").then((e=>{var o=e.google_auth_uri,r=screen.width/2-a/2,s=screen.height/2-i/2,l=window.open(o,"Google Auth","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+a+", height="+i+", top="+s+", left="+r);return null!=t&&t.target.removeAttribute("disabled"),this.googleLoginCheck(),l}))),googleLoginCheck:()=>{let t=this;null!=this.openTabId?setTimeout((()=>{r.Browser().tabs.get(t.openTabId).then((a=>{-1!==a.url.indexOf("/subscription")?(r.Browser().tabs.remove(t.openTabId),r.uuid(1).then((()=>{t.login=!0,r.Browser().tabs.query({}).then((a=>{a.forEach((a=>{a.url==t.constants.login&&r.Browser().tabs.reload(a.id)}))}))}))):-1!==a.url.indexOf(t.constants.login)?(r.Browser().tabs.remove(t.openTabId),t.googlePopUp()):t.googleLoginCheck()})).catch((a=>{-1!==a.toString().indexOf("No tab")&&(t.openTabId=null,t.googleLoginCheck())}))}),500):r.Browser().tabs.query({}).then((a=>{a.forEach((a=>{-1!==a.url.indexOf("/auth/google/extension&state&scope=email")&&(t.openTabId=a.id),typeof a.pendingUrl<"u"&&-1!==a.pendingUrl.indexOf("/auth/google/extension&state&scope=email")&&(t.openTabId=a.id)})),null==t.openTabId&&(t.popup_try=t.popup_try+1),null==t.openTabId&&t.popup_try>3?t.popup_try=0:setTimeout((()=>{this.googleLoginCheck()}),500)}))},login_type:"register",forms:{email:null,password:null,password1:null,agree:!1}}},created(){this.$watch((()=>this.login),(()=>{1==this.login&&1==this.pinned&&(r.Browser().tabs.query({}).then((t=>{t.forEach((t=>{t.url==this.constants.login&&r.Browser().tabs.reload(t.id)}))})),this.sidebarToggle(!0))})),this.$watch((()=>this.pinned),(()=>{1==this.login&&1==this.pinned&&(r.Browser().tabs.query({}).then((t=>{t.forEach((t=>{t.url==this.constants.login&&r.Browser().tabs.reload(t.id)}))})),this.sidebarToggle(!0))}))},mounted(){window.location.href.toString().endsWith("side-bar-option=true")?this.sidebarToggle(!0):this.sidebarToggle(!1);let t=this,a=setInterval((()=>{r.Browser().action.getUserSettings().then((i=>{1==(i.isOnToolbar??!1)&&(t.pinned=!0,a&&clearInterval(a))})),typeof t.user<"u"&&typeof t.user.email<"u"&&(t.login=!0)}),1e3)}},M="/assets/media/pinit.mp4",L="/assets/media/pin-arrow.svg",S="/assets/media/finish.mp4",I={id:"AiTopiaApp",class:"setup-wizard"},U={key:0,id:"pin-step",class:"ait-w-full ait-h-[var(--ait-height-100)] ait-h-dvh ait-flex ait-items-center ait-justify-center ait-bg-cover ait-bg-no-repeat"},j={class:"ait-relative ait-w-[506px] ait-h-[532px] ait-rounded-[20px] ait-bg-[#f9f9fe] ait-overflow-hidden",style:{"box-shadow":"0px 11px 36px 0px rgba(159, 155, 167, 0.67)"}},q={class:"ait-text-center ait-p-8 ait-pb-4 animate-fade-in"},z={class:"ait-mt-8 ait-mb-5 ait-text-[27px] ait-font-bold ait-text-neutral-700"},E={class:"ait-text-[var(--ait-tab-menu-active-bg-color)]"},O=t("br",null,null,-1),P=t("video",{class:"ait-w-full ait-min-h-[296px] ait-rounded-lg",src:M,autoplay:"",id:"autoplay",muted:"",playsinline:"",loop:""},null,-1),Z={class:"ait-absolute ait-bottom-0 ait-right-8 ait-flex ait-items-center ait-justify-center ait-p-5"},N={class:"ait-fixed",style:{top:"1%",right:"8%"}},W=t("img",{class:"ait-relative ait-left-[50%] ait-translate-x-[-50%] ait-w-[24px] ait-mb-2",src:L},null,-1),$={class:"ait-flex ait-items-center ait-gap-2 ait-text-[var(--ait-tab-menu-active-bg-color)] ait-font-bold"},F=t("svg",{width:"20",height:"20",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.0906 16.2161H29.9245V9.80628C29.9245 9.10094 29.3326 8.67774 28.7406 8.67774H23.1761C23.1761 6.56869 20.5121 4.75 18.2925 4.75C16.073 4.75 13.3674 6.50807 13.3674 8.67774H7.51746C6.77748 8.67774 6.3335 9.10094 6.3335 9.80628V17.3446C6.3335 18.05 6.92548 18.4732 7.51746 18.4732H8.47553C9.80749 18.4732 10.8279 19.4606 10.8279 20.8713C10.8279 22.1409 9.95549 23.2694 8.47553 23.2694H7.51746C6.77748 23.2694 6.3335 23.8337 6.3335 24.398V30.5381C6.3335 31.2435 6.92548 31.6667 7.51746 31.6667H28.5926C29.3326 31.6667 29.7765 31.1024 29.7765 30.5381V26.8432V25.5265H29.9427C32.6066 25.5265 34.8265 23.4105 34.8265 20.8713C34.9745 18.3321 32.7546 16.2161 30.0906 16.2161ZM29.7765 23.2694H30.0906C31.4226 23.2694 32.4586 22.1409 32.4586 20.8713C32.4586 19.4606 31.2746 18.4732 29.9427 18.4732H29.7765V23.2694ZM27.4086 17.8117V17.3446V10.9348H8.70142V16.2161H8.32754C10.9915 16.2161 13.0478 18.3321 13.0478 20.8713C13.0478 23.4105 10.9915 25.5265 8.32754 25.5265H8.70142V29.4096H27.4086V26.8432V17.8117ZM18.251 6.76458C19.502 6.76458 20.7666 7.53866 20.7666 8.67774H15.7356C15.7608 7.42743 17 6.76458 18.251 6.76458Z",fill:"black","fill-opacity":"0.97",stroke:"black","stroke-width":"0.863636"}),t("rect",{x:"15",y:"7",width:"6",height:"2",fill:"black"}),t("rect",{x:"29",y:"18",width:"4",height:"5",fill:"black"})],-1),D={key:1,id:"login-step",class:"ait-w-full ait-h-[var(--ait-height-100)] ait-h-dvh ait-flex ait-items-center ait-justify-center ait-bg-cover ait-bg-no-repeat"},Y={class:"ait-relative ait-w-[506px] ait-h-[660px] ait-rounded-[20px] ait-bg-[#f9f9fe] ait-overflow-hidden",style:{"box-shadow":"rgba(159, 155, 167, 0.67) 0px 11px 36px 0px"}},G={class:"ait-text-[var(--ait-tab-menu-active-bg-color)] ait-animate-fade-in"},J={class:"ait-px-2 ait-pt-6 ait-pb-3 ait-text-center ait-bg-cover"},Q=x('<div class="logo ait-flex ait-justify-center"><span><svg class="ait-w-[50px] ait-flex-initial" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 125 121.7"><circle fill="#01a77d" cx="63.4" cy="61.2" r="57.8"></circle><g fill="#fff"><path d="M46.9 60.5h-.4c-1.9-.2-3.3-1.9-3.1-3.8.6-6.3 4.5-38 17.3-41.2 8.2-2 14.4 7.5 16.5 10.6 1.1 1.6.6 3.8-1 4.9s-3.8.6-4.9-1c-3.5-5.3-6.9-8.2-9-7.7-4.2 1-10 14.8-12 35.1-.2 1.7-1.7 3.1-3.4 3.1zm51.9-4.9c-.5 0-1-.1-1.4-.3-1.8-.8-2.6-2.9-1.8-4.6 2.6-5.8 3.2-10.2 1.7-11.7-3.1-3-17.8-.6-36.1 8.6-1.7.9-3.8.2-4.7-1.6-.9-1.7-.2-3.8 1.6-4.7.3-.2 8.3-4.1 17.4-7.1 13.4-4.5 22.2-4.5 26.7-.2 6.1 5.8 1.4 16.2-.1 19.6-.7 1.3-2 2-3.3 2zM88.2 89.5c-1.8 0-3.3-1.3-3.5-3.1-.2-1.9 1.1-3.7 3.1-3.9 6.3-.7 10.4-2.5 10.9-4.6 1-4.2-8.7-15.6-25.9-26.6-1.6-1-2.1-3.2-1.1-4.8s3.2-2.1 4.8-1.1c.3.2 7.8 5 15.1 11.3 10.7 9.3 15.3 16.7 13.9 22.8-1.9 8.2-13.2 9.5-16.9 10h-.4zm-25.9 18.1c-7.2 0-12.4-8.3-14.2-11.2-1-1.6-.5-3.8 1.1-4.8s3.8-.5 4.8 1.1c3.4 5.4 6.7 8.3 8.8 7.9 4.2-.9 10.3-14.5 12.9-34.8.2-1.9 2-3.3 3.9-3 1.9.2 3.3 2 3 3.9-.8 6.3-5.4 37.9-18.4 40.7-.5.1-1.2.2-1.9.2zm-25-18.1c-5.5 0-9.4-1.3-11.8-4-5.6-6.3-.1-16.3 1.6-19.5.9-1.7 3.1-2.3 4.7-1.4 1.7.9 2.3 3.1 1.4 4.7-3.1 5.6-4 9.9-2.6 11.5 2.9 3.2 17.7 1.9 36.7-5.7a3.57 3.57 0 0 1 4.6 1.9 3.57 3.57 0 0 1-1.9 4.6c-.3.1-8.6 3.5-17.9 5.8-5.9 1.4-10.8 2.1-14.8 2.1zm16.5-12.6c-.6 0-1.2-.2-1.8-.5-.3-.2-7.9-4.8-15.4-10.8-11-8.9-15.8-16.2-14.6-22.3 1.6-8.2 12.9-9.9 16.6-10.5 1.9-.3 3.7 1 4 2.9s-1 3.7-2.9 4c-6.3.9-10.3 2.8-10.7 4.9-1 4.3 9 15.3 26.6 25.8 1.7 1 2.2 3.1 1.2 4.8-.7 1.1-1.8 1.7-3 1.7z"></path><circle cx="63.8" cy="60.5" r="8.4"></circle></g></svg></span></div>',1),R={class:"ait-text-[22px] ait-font-bold ait-text-neutral-900"},K={class:"ait-text-center"},X=["innerHTML"],tt={class:"ait-flex ait-justify-center ait-w-full"},it={class:"ait-flex-row ait-w-full"},et=x('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.68 12.1818C19.68 11.6145 19.6291 11.069 19.5345 10.5454H12V13.64H16.3055C16.12 14.64 15.5564 15.4872 14.7091 16.0545V18.0618H17.2945C18.8073 16.669 19.68 14.6181 19.68 12.1818Z" fill="#4285F4" style="fill:#4285F4!important;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0011 20C14.1611 20 15.972 19.2837 17.2957 18.0618L14.7102 16.0546C13.9939 16.5346 13.0775 16.8182 12.0011 16.8182C9.9175 16.8182 8.15387 15.4109 7.52478 13.52H4.85205V15.5927C6.16841 18.2073 8.87387 20 12.0011 20Z" fill="#34A853" style="fill:#34A853!important;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.52364 13.52C7.36364 13.04 7.27273 12.5272 7.27273 12C7.27273 11.4727 7.36364 10.96 7.52364 10.48V8.40723H4.85091C4.30909 9.48723 4 10.709 4 12C4 13.2909 4.30909 14.5127 4.85091 15.5927L7.52364 13.52Z" fill="#FBBC05" style="fill:#FBBC05!important;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0011 7.18182C13.1757 7.18182 14.2302 7.58545 15.0593 8.37818L17.3539 6.08364C15.9684 4.79273 14.1575 4 12.0011 4C8.87387 4 6.16841 5.79273 4.85205 8.40727L7.52478 10.48C8.15387 8.58909 9.91751 7.18182 12.0011 7.18182Z" fill="#EA4335" style="fill:#EA4335!important;"></path></svg>',1),at={class:"ait-text-[17px] ait-text-white ait-font-bold"},ot={class:"ait-relative ait-w-[70%] ait-h-[1px] ait-mx-auto ait-mt-[20px] ait-mb-[10px] ait-bg-[#e0e0e0]"},st={class:"ait-absolute ait-top-[50%] ait-left-[50%] ait-translate-x-[-50%] ait-translate-y-[-50%] ait-px-3 ait-whitespace-nowrap ait-bg-[#f9f9fe] ait-text-[var(--ait-tab-menu-active-bg-color)] ait-text-center ait-text-sm ait-font-bold"},rt={key:0,class:"ait-flex ait-justify-center data-tab",id:"login"},nt={class:"ait-flex-row ait-w-[320px]"},lt={class:"ait-p-2"},dt={for:"id-login-email",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},pt={class:"ait-p-2"},ct={for:"password",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},ut={class:"ait-flex ait-items-center ait-justify-between ait-p-2"},gt={class:"ait-p-2"},mt=t("span",{id:"login-error",class:"text-danger"},null,-1),ht={class:"ait-text-sm ait-font-light ait-text-gray-500 dark:ait-text-gray-400 ait-p-2"},ft={key:1,class:"ait-flex ait-justify-center data-tab",id:"register"},bt={class:"ait-flex-row ait-w-[320px]"},vt={class:"ait-p-2"},_t={for:"id-signup-email",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},xt={class:"ait-p-2"},yt={for:"id-signup-password",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},wt={class:"ait-p-2"},Ct={for:"id-signup-password2",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},kt={class:"ait-flex ait-items-center ait-justify-center ait-p-2"},Ht=["innerHTML"],Vt={class:"ait-p-2"},Tt=t("span",{id:"register-error",class:"text-danger"},null,-1),Bt={class:"ait-text-sm ait-font-light ait-text-gray-500 ait-p-2"},At={key:2,class:"ait-flex ait-justify-center data-tab",id:"recover"},Mt={class:"ait-flex-row ait-w-[320px] ait-pt-5"},Lt={class:"ait-p-2"},St={for:"id-signup-email",class:"ait-block ait-mb-1 ait-text-sm ait-font-medium ait-text-gray-900"},It={class:"ait-p-2"},Ut=t("span",{id:"recover-form-error",class:"text-danger"},null,-1),jt={class:"ait-text-sm ait-font-light ait-text-gray-500 dark:ait-text-gray-400 ait-p-2"},qt={key:2,id:"finish-step",class:"ait-w-full ait-h-[var(--ait-height-100)] ait-h-dvh ait-flex ait-items-center ait-justify-center ait-bg-cover ait-bg-no-repeat"},zt={class:"ait-relative ait-w-[506px] ait-h-[532px] ait-rounded-[20px] ait-bg-[#f9f9fe] ait-overflow-hidden",style:{"box-shadow":"rgba(159, 155, 167, 0.67) 0px 11px 36px 0px"}},Et={class:"ait-text-center ait-p-8 ait-pb-4 animate-fade-in"},Ot={class:"ait-px-2 ait-pt-6 ait-pb-3 ait-text-center ait-bg-cover"},Pt={class:"ait-text-[19px] ait-font-bold ait-text-neutral-900"},Zt={class:"ait-text-center ait-pb-4 ait-animate-fade-in"},Nt=["innerHTML"],Wt=t("video",{class:"ait-w-full ait-min-h-[296px] ait-rounded-lg",src:S,autoplay:"",id:"autoplay1",muted:"",playsinline:"",loop:""},null,-1),$t={class:"ait-text-[18px] ait-font-bold ait-text-[var(--ait-tab-menu-active-bg-color)]"};function Ft(a,i,e,r,s,l){const n=T("AiSideBar");return u(),d("div",I,[0==s.pinned?(u(),d("div",U,[t("div",j,[t("div",q,[t("div",z,[t("b",E,o(a.__("Pin"))+" "+o(this.constants.app_name),1),p(","),O,p(o(a.__("easier access!")),1)]),P]),t("div",Z,[t("span",{class:"ait-absolute end-5 ait-text-[var(--ait-tab-menu-active-bg-color)] ait-cursor-pointer",onClick:i[0]||(i[0]=t=>{this.pinned=!0})},o(a.__("Skip")),1)])]),t("div",N,[W,t("div",$,[p(o(a.__("Click"))+" ",1),F,p(" "+o(a.__("to pin it")),1)])])])):1==s.pinned&&0==s.login?(u(),d("div",D,[t("div",Y,[t("div",G,[t("header",J,[Q,t("div",R,o(a.__("Welcome to"))+" "+o(this.constants.app_name),1)]),t("div",K,[t("div",{class:"ait-mb-6 ait-px-2 ait-text-xl ait-font-bold ait-text-neutral-900",innerHTML:a.__('Sign in to get <span class="ait-text-[24px] ait-text-[var(--ait-tab-menu-active-bg-color)]">30</span> queries per day')},null,8,X),t("div",tt,[t("div",it,[t("button",{type:"button",class:"ait-rounded-lg ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-bg-green-800 ait-text-white ait-min-w-[70%] ait-max-w-[95%] ait-inline-flex ait-items-center ait-justify-center ait-gap-4",style:{height:"46px"},onClick:i[1]||(i[1]=t=>this.googlePopUp(t))},[et,t("span",at,o(a.__("Log in with Google")),1)])])]),t("div",ot,[t("span",st,o(a.__("OR")),1)]),"login"==this.login_type?(u(),d("div",rt,[t("div",nt,[t("div",lt,[t("label",dt,o(a.__("Your email")),1),c(t("input",{type:"email",name:"email","onUpdate:modelValue":i[2]||(i[2]=t=>this.forms.email=t),required:"",id:"id-login-email",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5",placeholder:"name@company.com"},null,512),[[g,this.forms.email]])]),t("div",pt,[t("label",ct,o(a.__("Password")),1),c(t("input",{type:"password",name:"password","onUpdate:modelValue":i[3]||(i[3]=t=>this.forms.password=t),required:"",id:"password",placeholder:"••••••••",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5"},null,512),[[g,this.forms.password]])]),t("div",ut,[t("a",{href:"#","data-toggle":"recover",onClick:i[4]||(i[4]=t=>this.login_type="recover"),"data-target":"#id-tab-forgot",class:"ait-text-sm ait-font-medium ait-text-[var(--ait-tab-menu-active-bg-color)] hover:ait-underline"},o(a.__("Forgot password?")),1)]),t("div",gt,[t("button",{type:"submit",id:"login-submit",onClick:i[5]||(i[5]=t=>a.Helpers.auth(this,this.forms,this.login_type,t)),class:"ait-w-full ait-text-white ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-bg-green-800 focus:ait-ring-4 focus:ait-outline-none focus:ring-primary-300 ait-font-medium ait-rounded-lg ait-text-sm ait-px-5 ait-py-2.5 ait-text-center"}," Sign in "),mt]),t("p",ht,[p(o(a.__("Don’t have an account yet?"))+" ",1),t("button",{"data-toggle":"register",onClick:i[6]||(i[6]=t=>this.login_type="register"),class:"ait-font-medium ait-text-[var(--ait-tab-menu-active-bg-color)] hover:ait-underline"},o(a.__("Sign up")),1)])])])):"register"==this.login_type||null==this.login_type?(u(),d("div",ft,[t("div",bt,[t("div",vt,[t("label",_t,o(a.__("Your email")),1),c(t("input",{type:"email",name:"email","onUpdate:modelValue":i[7]||(i[7]=t=>this.forms.email=t),required:"",id:"id-signup-email",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5",placeholder:"name@company.com"},null,512),[[g,this.forms.email]])]),t("div",xt,[t("label",yt,o(a.__("Password")),1),c(t("input",{type:"password",name:"password","onUpdate:modelValue":i[8]||(i[8]=t=>this.forms.password=t),required:"",id:"id-signup-password",placeholder:"••••••••",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5"},null,512),[[g,this.forms.password]])]),t("div",wt,[t("label",Ct,o(a.__("Confirm Password")),1),c(t("input",{type:"password",name:"password1","onUpdate:modelValue":i[9]||(i[9]=t=>this.forms.password1=t),required:"",id:"id-signup-password2",placeholder:"••••••••",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5"},null,512),[[g,this.forms.password1]])]),t("div",kt,[c(t("input",{id:"id-agree","aria-describedby":"id-agree",name:"agree",value:"1","onUpdate:modelValue":i[10]||(i[10]=t=>this.forms.agree=t),type:"checkbox",class:"ait-w-4 ait-h-4 ait-border ait-rounded ait-bg-gray-50 focus:ring-3 focus:ring-primary-300",style:{"color-scheme":"none"}},null,512),[[H,this.forms.agree]]),t("label",{for:"id-agree",class:"ait-pl-3 ait-text-gray-900",innerHTML:a.__('I have read and agree to <a target="_blank" href="https://chatgptextension.ai/terms_conditions" class="ait-text-sm ait-font-medium ait-text-[var(--ait-tab-menu-active-bg-color)] hover:ait-underline">terms</a>').replace("chatgptextension.ai",this.constants.domain)},null,8,Ht)]),t("div",Vt,[t("button",{type:"submit",id:"register-submit",onClick:i[11]||(i[11]=t=>a.Helpers.auth(this,this.forms,this.login_type,t)),class:"ait-w-full ait-text-white ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-bg-green-800 focus:ait-ring-4 focus:ait-outline-none focus:ring-primary-300 ait-font-medium ait-rounded-lg ait-text-sm ait-px-5 ait-py-2.5 ait-text-center dark:ait-bg-[var(--ait-tab-menu-active-bg-color)] dark:hover:ait-bg-green-800 dark:focus:ring-primary-800"},o(a.__("Sign up")),1),Tt]),t("p",Bt,[p(o(a.__("Already a member?"))+" ",1),t("button",{"data-toggle":"login",onClick:i[12]||(i[12]=t=>this.login_type="login"),class:"ait-font-medium ait-text-[var(--ait-tab-menu-active-bg-color)] hover:ait-underline"},o(a.__("Login here")),1)])])])):"recover"==this.login_type?(u(),d("div",At,[t("div",Mt,[t("div",Lt,[t("label",St,o(a.__("Enter your email address and we'll send you the instructions:")),1),c(t("input",{type:"email",name:"email",required:"","onUpdate:modelValue":i[13]||(i[13]=t=>this.forms.email=t),id:"id-recover-form-email",class:"ait-bg-gray-50 ait-border ait-text-gray-900 lg:ait-text-sm ait-rounded-lg focus:ring-[var(--ait-tab-menu-active-bg-color)] focus:border-[var(--ait-tab-menu-active-bg-color)] ait-block ait-w-full ait-p-2.5",placeholder:"name@company.com"},null,512),[[g,this.forms.email]])]),t("div",It,[t("button",{type:"submit",id:"recover-form-submit",onClick:i[14]||(i[14]=t=>a.Helpers.auth(this,this.forms,this.login_type,t)),class:"ait-w-full ait-text-white ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-bg-green-800 focus:ait-ring-4 focus:ait-outline-none focus:ring-primary-300 ait-font-medium ait-rounded-lg ait-text-sm ait-px-5 ait-py-2.5 ait-text-center dark:ait-bg-[var(--ait-tab-menu-active-bg-color)] dark:hover:ait-bg-green-800 dark:focus:ring-primary-800"},o(a.__("Send email")),1),Ut]),t("p",jt,[p(o(a.__("Already a member?"))+" ",1),t("button",{"data-toggle":"login",onClick:i[15]||(i[15]=t=>this.login_type="login"),class:"ait-font-medium ait-text-[var(--ait-tab-menu-active-bg-color)] hover:ait-underline dark:ait-text-primary-500"},o(a.__("Login here")),1)])])])):_("",!0)])])])])):1==s.pinned&&1==s.login?(u(),d("div",qt,[t("div",zt,[t("div",Et,[t("header",Ot,[t("div",Pt,o(a.__("Welcome to"))+" "+o(this.constants.app_name),1)]),t("div",Zt,[t("div",{class:"ait-text-[18px] ait-font-bold ait-text-[var(--ait-tab-menu-active-bg-color)]",innerHTML:a.__("You can open and close")+"<br>"+this.constants.app_name},null,8,Nt),Wt,t("div",$t,o(a.__("Start to use now")),1)])])])])):_("",!0),V(n)])}const m=w(A,[["render",Ft]]);r.setSidebar(),m.template=m,m.methods=C,b.components=k,m.extends=b;var y=B(m);if(f){let t=Object.keys(f);t&&t.forEach((t=>{y.component(t,f[t])}))}y.mount("#aitopia");