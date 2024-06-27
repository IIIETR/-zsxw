import{m as g,v as f,x as _,y as o,N as R,o as $,c as h,a as v,D as w,F as N,d as c,A as j,B as x,_ as C,I as E,t as u,ag as r,O as S,q as b,ai as K}from"./index-Wk3QeAoq.js";const O=Symbol("rowContextKey"),B=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],k=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:B,default:"start"},align:{type:String,values:P}}),A=f({name:"ElRow"}),D=f({...A,props:k,setup(p){const e=p,l=_("row"),a=o(()=>e.gutter);R(O,{gutter:a});const i=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=o(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>($(),h(x(t.tag),{class:N(c(d)),style:j(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var I=C(D,[["__file","row.vue"]]);const H=E(I),L=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),q=f({name:"ElCol"}),F=f({...q,props:L,setup(p){const e=p,{gutter:l}=S(O,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=o(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const n=e[s];b(n)&&(s==="span"?t.push(a.b(`${e[s]}`)):n>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([n,y])=>{t.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>($(),h(x(t.tag),{class:N(c(d)),style:j(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var J=C(F,[["__file","col.vue"]]);const M=E(J);export{H as E,M as a};
