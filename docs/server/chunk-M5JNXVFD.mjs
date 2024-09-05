import './polyfills.server.mjs';
import{A as k,B as E,C as H,D as T,G as A,K as D,N as I,O as P,P as j,a as v,b as g,c as a,d as h,e as b,f as l,g as x,h as C,i as y,j as S,k as w,l as n,m as r,n as p,o as M,p as s,q as u,r as m,y as F}from"./chunk-D4N4HAI6.mjs";var L=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a({type:t,selectors:[["app-navbar"]],standalone:!0,features:[m],decls:11,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-dark-subtle","py-3","fw-bolder"],[1,"container"],["routerLink","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","home","routerLinkActive","bg-white",1,"nav-link","p-2","rounded-pill"]],template:function(i,d){i&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"Movies"),r(),n(4,"button",3),p(5,"span",4),r(),n(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),s(10,"HOME"),r()()()()()())},dependencies:[I,P]});let e=t;return e})();var O=(()=>{let t=class t{constructor(){this.title="movies"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:2,vars:0,template:function(i,d){i&1&&p(0,"app-navbar")(1,"router-outlet")},dependencies:[D,L]});let e=t;return e})();var R=(()=>{let t=class t{constructor(o){this._HttpClient=o,this.imgPath="https://image.tmdb.org/t/p/w500"}doGet(o){return this._HttpClient.get(o)}};t.\u0275fac=function(i){return new(i||t)(g(k))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function $(e,t){if(e&1&&(n(0,"div",3)(1,"div",4),p(2,"img",5),n(3,"div",6)(4,"h5",7),s(5),r(),n(6,"p",8),s(7),r()()()()),e&2){let c=t.$implicit,o=M();l(2),C("src",o.imgPath+c.poster_path,b),l(3),u(c.title||c.name),l(2),u(c.overview.split(" ").splice(0,15).join(" "))}}var N=(()=>{let t=class t{constructor(o){this._ApiService=o}ngOnInit(){this._ApiService.doGet("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=208fc5b0e7a3cf6254ee3fae0ee7c3e2").subscribe(o=>{this.imgPath=this._ApiService.imgPath,this.listMovies=o.results})}};t.\u0275fac=function(i){return new(i||t)(x(R))},t.\u0275cmp=a({type:t,selectors:[["app-home"]],standalone:!0,features:[m],decls:6,vars:0,consts:[[1,"home","container","my-5","text-dark"],[1,"text-capitalize","text-center","mb-4","h1","fw-bolder"],[1,"row","g-4","text-center"],[1,"col-md-4"],[1,"card"],["alt","movie",1,"card-img-top","w-100",3,"src"],[1,"card-body"],[1,"card-title","fw-bolder"],[1,"card-text"]],template:function(i,d){i&1&&(n(0,"section",0)(1,"h2",1),s(2,"Trending Movies"),r(),n(3,"div",2),S(4,$,8,3,"div",3,y),r()()),i&2&&(l(4),w(d.listMovies))},styles:[".card-title[_ngcontent-%COMP%]{height:50px}.card-text[_ngcontent-%COMP%]{line-height:1.5rem;height:4.5rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}"]});let e=t;return e})();var z=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a({type:t,selectors:[["app-not-found"]],standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"notFound"],[1,"w-100","text-center"],["src","assets/not-found.jpg","alt","Not Found Page "]],template:function(i,d){i&1&&(n(0,"section",0)(1,"div",1),p(2,"img",2),r()())}});let e=t;return e})();var G=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:N,pathMatch:"full",title:"Home"},{path:"**",component:z,pathMatch:"full",title:"NotFound"}];var U={providers:[j(G),T(),h(E)]};var q={providers:[A()]},_=F(U,q);var J=()=>H(O,_),ht=J;export{ht as a};