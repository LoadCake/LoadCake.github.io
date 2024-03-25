import{a0 as _,i as A,G as b,a1 as R,r as x,a2 as L,a3 as T,a4 as B,v as E,a5 as N,l as P,R as w,O as U,a6 as D,a7 as I,a8 as O,h as j,D as S,a9 as F,k as V,P as H}from"./entry.p0Z2JGxR.js";async function q(t,r=_()){const{path:s,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const l=r._preloadPromises=r._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>q(t,r));r._routePreloaded.add(s);const i=e.map(c=>{var a;return(a=c.components)==null?void 0:a.default}).filter(c=>typeof c=="function");for(const c of i){const a=Promise.resolve(c()).catch(()=>{}).finally(()=>l.splice(l.indexOf(a)));l.push(a)}await Promise.all(l)}const z=(...t)=>t.find(r=>r!==void 0),M="noopener noreferrer";function $(t){const r=t.componentName||"NuxtLink",s=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return C(e,t.trailingSlash);const i="path"in e?e.path:l(e).path;return{...e,name:void 0,path:C(i,t.trailingSlash)}};return A({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=_(),c=j(),a=b(()=>{const n=e.to||e.href||"";return s(n,i.resolve)}),d=b(()=>typeof a.value=="string"&&R(a.value,{acceptRelative:!0})),v=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||d.value),y=x(!1),h=x(null),k=n=>{var f;h.value=e.custom?(f=n==null?void 0:n.$el)==null?void 0:f.nextElementSibling:n==null?void 0:n.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Q()){const f=S();let m,o=null;L(()=>{const p=G();T(()=>{m=B(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(o=p.observe(h.value,async()=>{o==null||o(),o=null;const u=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",u).catch(()=>{}),!v.value&&q(a.value,i).catch(()=>{})]),y.value=!0}))})})}),E(()=>{m&&N(m),o==null||o(),o=null})}return()=>{var p,g;if(!v.value){const u={ref:k,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(y.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),P(w("RouterLink"),u,l.default)}const n=typeof a.value=="object"?((p=i.resolve(a.value))==null?void 0:p.href)??null:a.value&&!e.external&&!d.value?s(U(c.app.baseURL,a.value),i.resolve):a.value||null,f=e.target||null,m=e.noRel?null:z(e.rel,t.externalRelAttribute,n?M:"")||null,o=()=>F(n,{replace:e.replace});return e.custom?l.default?l.default({href:n,navigate:o,get route(){if(!n)return;const u=D(n);return{path:u.pathname,fullPath:u.pathname,get query(){return I(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:h,href:n,rel:m,target:f},(g=l.default)==null?void 0:g.call(l))}}})}const X=$(O);function C(t,r){const s=r==="append"?V:H;return R(t)&&!t.startsWith("http")?t:s(t,!0)}function G(){const t=S();if(t._observer)return t._observer;let r=null;const s=new Map,e=(i,c)=>(r||(r=new IntersectionObserver(a=>{for(const d of a){const v=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),s.set(i,c),r.observe(i),()=>{s.delete(i),r.unobserve(i),s.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function Q(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{X as _};
