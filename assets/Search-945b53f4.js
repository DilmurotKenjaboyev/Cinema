import{r as p,o as r,c as i,w as m,a as c,u as o,i as d,t as v,k as g,l as f,p as x,m as S,e as k,n as u,f as h,q as y,v as $,s as w,F as A,g as B}from"./index-8a9c129e.js";const b=["src"],q={class:"search__title"},C={__name:"SearchItem",props:{movie:Object},setup(t){return(e,s)=>{const a=p("router-link");return r(),i(a,{to:"/",class:"search__item"},{default:m(()=>[c("img",{src:o(d)+t.movie.poster_path,alt:""},null,8,b),c("h2",q,v(t.movie.title??t.movie.name),1)]),_:1})}}},D=g("search",{state:()=>({searchArr:null,search:""}),actions:{async getSearch(){const e=(await f(`${x}search/multi?api_key=${S}&language=ru-Ru&page=1&include_adult=false&query=${this.search}`)).data.results;this.searchArr=e.filter(s=>s.poster_path!=null)}},getters:{}}),F={class:"search"},I={class:"container"},M={class:"search__box"},R={__name:"SearchInput",setup(t){const e=D();k(()=>e.getSearch());const s=u(()=>e.searchArr),a=u({get:()=>e.search,set:l=>{e.search=l,e.getSearch()}});return(l,_)=>(r(),h("div",F,[c("div",I,[y(c("input",{type:"text",class:"search__input",placeholder:"Найти фильм, сериал...","onUpdate:modelValue":_[0]||(_[0]=n=>w(a)?a.value=n:null)},null,512),[[$,o(a)]]),c("div",M,[(r(!0),h(A,null,B(o(s),n=>(r(),i(C,{key:n.id,movie:n},null,8,["movie"]))),128))])])]))}},j={__name:"Search",setup(t){return(e,s)=>(r(),i(R))}};export{j as default};
