import{d as p,r as i,t as l,v as a,x as e,y as u,L as o,M as f,N as v,O as x,P as m,Q as _,R as g}from"./CL4pTy-0.js";const k={class:"d-flex flex-column w-100 h-100"},w={class:"d-flex flex-row jcc aic p-3"},y={class:"d-flex flex-row w-100 h-100 jcc aic",style:{perspective:"900px"}},C={class:"page-inner"},B=p({__name:"book",setup(h){const s=i(0),c=i([10,9,8,7,6,5,4,3,2,1]),d=r=>{if(r<=s.value)return"page-flip"};return(r,n)=>(l(),a("div",k,[e("div",w,[e("button",{onClick:n[0]||(n[0]=t=>s.value--)},"last"),e("h1",null,u(o(s)),1),e("button",{onClick:n[1]||(n[1]=t=>s.value++)},"next")]),f(e("input",{type:"range",min:"0",max:"10","onUpdate:modelValue":n[2]||(n[2]=t=>x(s)?s.value=t:null)},null,512),[[v,o(s)]]),e("div",y,[(l(!0),a(m,null,_(o(c),t=>(l(),a("div",{key:t,class:g(["page",d(t)])},[e("div",C,[e("h1",null,u(t),1)])],2))),128))])]))}});export{B as default};