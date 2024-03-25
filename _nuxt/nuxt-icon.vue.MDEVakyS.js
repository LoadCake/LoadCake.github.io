import{i as m,r as p,aa as f,q as d,o as h,c as v,Z as E,u as _,A as n}from"./entry.p0Z2JGxR.js";const I=["innerHTML"],x=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,r=p("");let c=!1;async function l(){try{const s=await Object.assign({"/assets/icons/github.svg":()=>n(()=>import("./github.DzOBmGWr.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/linkedin.svg":()=>n(()=>import("./linkedin.i1IeTeqq.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/mastodon.svg":()=>n(()=>import("./mastodon.NGLacPtM.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();s.includes("stroke")&&(c=!0),r.value=s}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=f(()=>l()),await o,a(),d(l),(e,s)=>(h(),v("span",{class:E(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":_(c)&&!e.filled}]),innerHTML:_(r)},null,10,I))}});export{x as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
