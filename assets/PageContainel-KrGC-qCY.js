import"./el-button-UDxPgDzm.js";import{_}from"./plugin-vueexport-helper-x3n3nnut.js";import{m as h,t as m,v as y,x as v,o,z as n,F as r,d as s,D as t,e as c,ak as l,a2 as f,f as d,A as C,_ as S,I as g,c as $,a as u}from"./index-Wk3QeAoq.js";const b=h({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:m([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=y({name:"ElCard"}),k=y({...w,props:b,setup(i){const a=v("card");return(e,p)=>(o(),n("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),n("div",{key:0,class:r(s(a).e("header"))},[t(e.$slots,"header",{},()=>[c(l(e.header),1)])],2)):f("v-if",!0),d("div",{class:r([s(a).e("body"),e.bodyClass]),style:C(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(o(),n("div",{key:1,class:r(s(a).e("footer"))},[t(e.$slots,"footer",{},()=>[c(l(e.footer),1)])],2)):f("v-if",!0)],2))}});var B=S(k,[["__file","card.vue"]]);const N=g(B),P={class:"header"},z={class:"extra"},E={__name:"PageContainel",props:{title:{required:!0,type:String}},setup(i){return(a,e)=>{const p=N;return o(),$(p,{class:"page-container"},{header:u(()=>[d("div",P,[d("span",null,l(i.title),1),d("div",z,[t(a.$slots,"extra",{},void 0,!0)])])]),default:u(()=>[t(a.$slots,"default",{},void 0,!0)]),_:3})}}},D=_(E,[["__scopeId","data-v-22305636"]]);export{D as p};
