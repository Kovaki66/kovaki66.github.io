import{a4 as J,H as D,e as Z,d as ee,a5 as X,a6 as te,a7 as ne,a as o,f as G,F as ae,G as re,c as le,r as N,o as ue,h as x,W as ie,T as oe,E as se,s as P,K as ce,I as de}from"./index.c4c8b28b.js";import{v as fe,Q,b as ve}from"./vm.9abb5d82.js";function ge(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function z(e,t,l,n){l.modifiers.stop===!0&&X(e);const u=l.modifiers.color;let m=l.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),R=te(e),{left:h,top:v,width:L,height:r}=t.getBoundingClientRect(),y=Math.sqrt(L*L+r*r),g=y/2,k=`${(L-y)/2}px`,i=m?k:`${R.left-h-g}px`,b=`${(r-y)/2}px`,B=m?b:`${R.top-v-g}px`;d.className="q-ripple__inner",ne(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${B},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${u?" text-"+u:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const T=()=>{f.remove(),clearTimeout(w)};l.abort.push(T);let w=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,w=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,w=setTimeout(()=>{f.remove(),l.abort.splice(l.abort.indexOf(T),1)},275)},250)},50)}function V(e,{modifiers:t,value:l,arg:n}){const u=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var me=J({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&z(u,e,n,u.qKeyEvent===!0)},keystart:ge(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&D(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&z(u,e,n,!0)},300)};V(n,t),e.__qripple=n,Z(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&V(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ee(t,"main"),delete e._qripple)}});const Y={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},be=Object.keys(Y),he={align:{type:String,validator:e=>be.includes(e)}};function ye(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Y[t]}`})}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ke(e,t){for(const l in t){const n=t[l],u=e[l];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((m,f)=>m!==u[f]))return!1}return!0}function F(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function pe(e,t){return Array.isArray(e)===!0?F(e,t):Array.isArray(t)===!0?F(t,e):e===t}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(pe(e[l],t[l])===!1)return!1;return!0}const xe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Le({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=G(),{props:n,proxy:u,emit:m}=l,f=fe(l),d=o(()=>n.disable!==!0&&n.href!==void 0),R=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>R.value===!0?B(n.to):null),v=o(()=>h.value!==null),L=o(()=>d.value===!0||v.value===!0),r=o(()=>n.type==="a"||L.value===!0?"a":n.tag||e||"div"),y=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:h.value.href,target:n.target}:{}),g=o(()=>{if(v.value===!1)return-1;const{matched:s}=h.value,{length:p}=s,E=s[p-1];if(E===void 0)return-1;const $=u.$route.matched;if($.length===0)return-1;const S=$.findIndex(W.bind(null,E));if(S>-1)return S;const K=H(s[p-2]);return p>1&&H(E)===K&&$[$.length-1].path!==K?$.findIndex(W.bind(null,s[p-2])):S}),k=o(()=>v.value===!0&&g.value!==-1&&ke(u.$route.params,h.value.params)),i=o(()=>k.value===!0&&g.value===u.$route.matched.length-1&&qe(u.$route.params,h.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function B(s){try{return u.$router.resolve(s)}catch{}return null}function T(s,{returnRouterError:p,to:E=n.to,replace:$=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const S=u.$router[$===!0?"replace":"push"](E);return p===!0?S:S.then(()=>{}).catch(()=>{})}function w(s){if(v.value===!0){const p=E=>T(s,E);m("click",s,p),s.defaultPrevented!==!0&&p()}else m("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:L,linkTag:r,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:B,navigateToRouterLink:T,navigateOnClick:w}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ee={xs:8,sm:10,md:14,lg:20,xl:24},Ce=["button","submit","reset"],$e=/[^\s]\/[^\s]/,Re=["flat","outline","push","unelevated"],Se=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Te={...ae,...xe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Re.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...he.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function we(e){const t=re(e,Ee),l=ye(e),{hasRouterLink:n,hasLink:u,linkTag:m,linkAttrs:f,navigateOnClick:d}=Le({fallbackTag:"button"}),R=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in U?U[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),L=o(()=>v.value===!0?e.tabindex||0:-1),r=o(()=>Se(e,"standard")),y=o(()=>{const i={tabindex:L.value};return u.value===!0?Object.assign(i,f.value):Ce.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&$e.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${r.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:R,innerClasses:k,attributes:y,hasLink:u,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=ce;let _=null,A=null,O=null;var _e=le({name:"QBtn",props:{...Te,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=G(),{classes:u,style:m,innerClasses:f,attributes:d,hasLink:R,linkTag:h,navigateOnClick:v,isActionable:L}=we(e),r=N(null),y=N(null);let g=null,k,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),B=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:R.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),T=o(()=>({center:e.round})),w=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(L.value===!0){const a={onClick:E,onKeydown:$,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=S}return a}return{onClick:P}}),p=o(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:m.value,...d.value,...s.value}));function E(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,q),r.value!==null&&r.value.removeEventListener("blur",I,q)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,q),r.value.addEventListener("blur",I,q)}}v(a)}}function $(a){r.value!==null&&(l("keydown",a),D(a,[13,32])===!0&&A!==r.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(r.value.focus(),A=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",C,!0),r.value.addEventListener("blur",C,q)),P(a)))}function S(a){r.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(_!==r.value&&(_!==null&&M(),_=r.value,g=a.target,g.addEventListener("touchcancel",C,q),g.addEventListener("touchend",C,q)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function K(a){r.value!==null&&(a.qSkipRipple=k===!0,l("mousedown",a),a.defaultPrevented!==!0&&O!==r.value&&(O!==null&&M(),O=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",C,q)))}function C(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(A===r.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&de(c),a.cancelBubble===!0&&X(c),r.value.dispatchEvent(c),P(a),a.qKeyEvent=!0}l("keyup",a)}M()}}function M(a){const c=y.value;a!==!0&&(_===r.value||O===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===r.value&&(g!==null&&(g.removeEventListener("touchcancel",C,q),g.removeEventListener("touchend",C,q)),_=g=null),O===r.value&&(document.removeEventListener("mouseup",C,q),O=null),A===r.value&&(document.removeEventListener("keyup",C,!0),r.value!==null&&r.value.removeEventListener("blur",C,q),A=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return ue(()=>{M(!0)}),Object.assign(n,{click:E}),()=>{let a=[];e.icon!==void 0&&a.push(x(Q,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(x("span",{class:"block"},[e.label])),a=ve(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(x(Q,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[x("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(x("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[x("span",{class:"q-btn__progress-indicator fit block",style:w.value})])),c.push(x("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(x(oe,{name:"q-transition--fade"},()=>e.loading===!0?[x("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[x(ie)])]:null)),se(x(h.value,p.value,c),[[me,B.value,void 0,T.value]])}}});export{_e as Q,me as R,Le as a,xe as u};
