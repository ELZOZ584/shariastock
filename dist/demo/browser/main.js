import"./chunk-B2COKLLR.js";import{a as L,c as E,d as I,e as U,f as T,g as D,h as j,i as V}from"./chunk-MCPEIG4C.js";import{a as m}from"./chunk-ZPXHJKF5.js";import{$ as f,Ca as s,Db as A,Gb as H,Ha as h,Na as l,O as w,Oa as S,Pa as i,Qa as o,Ra as C,Sa as _,T as u,Ta as v,Ua as M,Va as p,Wa as d,_ as g,bb as a,db as y,ra as O,sa as k,ua as c,va as b}from"./chunk-G2I6LUOS.js";function G(t,P){t&1&&(_(0),i(1,"li")(2,"a",5),a(3,"Login"),o()(),i(4,"li")(5,"a",6),a(6,"Sign Up"),o()(),v())}function $(t,P){if(t&1){let e=M();i(0,"div",11)(1,"a",12),a(2,"Profile"),o(),i(3,"a",13),a(4,"Portfolio"),o(),i(5,"a",14),p("click",function(){g(e);let r=d(2);return f(r.logout())}),a(6,"Logout"),o()()}}function q(t,P){if(t&1){let e=M();_(0),i(1,"li",7)(2,"a",8),p("click",function(){g(e);let r=d();return f(r.toggleUserMenu())}),a(3),i(4,"span",9),a(5,"\u25BC"),o()(),h(6,$,7,0,"div",10),o(),v()}if(t&2){let e=d();c(3),y(" ",(e.user==null?null:e.user.name)||"User"," "),c(3),l("ngIf",e.showUserMenu)}}var F=(()=>{class t{constructor(e){this.authService=e,this.isAuthenticated=!1,this.user=null,this.showUserMenu=!1,this.scrolled=!1}ngOnInit(){this.authService.authState$.subscribe(e=>{this.isAuthenticated=e.isAuthenticated,this.user=e.user})}onWindowScroll(){this.scrolled=window.scrollY>50}toggleUserMenu(){this.showUserMenu=!this.showUserMenu}onDocumentClick(e){!e.target.closest(".user-menu")&&this.showUserMenu&&(this.showUserMenu=!1)}logout(){this.authService.logout(),this.showUserMenu=!1}static{this.\u0275fac=function(n){return new(n||t)(b(m))}}static{this.\u0275cmp=s({type:t,selectors:[["app-header"]],hostBindings:function(n,r){n&1&&p("scroll",function(){return r.onWindowScroll()},!1,O)("click",function(N){return r.onDocumentClick(N)},!1,k)},decls:15,vars:4,consts:[[1,"container"],[1,"logo"],["routerLink","/search","routerLinkActive","active"],["routerLink","/news","routerLinkActive","active"],[4,"ngIf"],["routerLink","/login","routerLinkActive","active"],["routerLink","/signup","routerLinkActive","active",1,"signup-btn"],[1,"user-menu"],[1,"user-toggle",3,"click"],[1,"arrow-down"],["class","dropdown-menu",4,"ngIf"],[1,"dropdown-menu"],["routerLink","/profile"],["routerLink","/portfolio"],[3,"click"]],template:function(n,r){n&1&&(i(0,"header")(1,"div",0)(2,"div",1)(3,"h1"),a(4,"ShariaStock AI"),o()(),i(5,"nav")(6,"ul")(7,"li")(8,"a",2),a(9,"Search"),o()(),i(10,"li")(11,"a",3),a(12,"News"),o()(),h(13,G,7,0,"ng-container",4)(14,q,7,2,"ng-container",4),o()()()()),n&2&&(S("scrolled",r.scrolled),c(13),l("ngIf",!r.isAuthenticated),c(),l("ngIf",r.isAuthenticated))},dependencies:[U,T,H,A],styles:['header[_ngcontent-%COMP%]{background-color:var(--primary-color);color:#fff;padding:15px 0;position:fixed;top:0;width:100%;z-index:1000;box-shadow:var(--shadow);transition:all .3s ease}header.scrolled[_ngcontent-%COMP%]{padding:10px 0;background-color:#2c3e50f2;box-shadow:0 4px 10px #0003}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;margin:0;position:relative;overflow:hidden}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--secondary-color);transition:width .3s ease}.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover:after{width:100%}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;align-items:center;margin:0;padding:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:500;transition:all .3s ease;cursor:pointer;position:relative;padding:5px 0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--secondary-color);transition:width .3s ease}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after{width:100%}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--secondary-color)}.signup-btn[_ngcontent-%COMP%]{background-color:var(--secondary-color);padding:8px 16px!important;border-radius:4px;color:#fff;transition:all .3s ease;display:inline-block}.signup-btn[_ngcontent-%COMP%]:hover{background-color:#219653;color:#fff;transform:translateY(-2px);box-shadow:0 4px 8px #0000001a}.signup-btn[_ngcontent-%COMP%]:active{transform:translateY(0)}.user-menu[_ngcontent-%COMP%]{position:relative}.user-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px 10px!important}.arrow-down[_ngcontent-%COMP%]{font-size:10px;margin-left:5px;transition:transform .3s ease}.user-toggle[_ngcontent-%COMP%]:hover   .arrow-down[_ngcontent-%COMP%]{transform:rotate(180deg)}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;background-color:#fff;border-radius:4px;box-shadow:0 2px 10px #0000001a;width:150px;margin-top:10px;z-index:1001;animation:_ngcontent-%COMP%_dropdownFade .3s ease forwards}@keyframes _ngcontent-%COMP%_dropdownFade{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:10px 15px!important;color:#333!important;border-bottom:1px solid #eee;transition:all .2s ease}.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-bottom:none}.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f8f9fa;color:var(--primary-color)!important;padding-left:20px!important}']})}}return t})();var R=(()=>{class t{constructor(){this.title="ShariaStock AI"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=s({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"header-space"],[1,"container"]],template:function(n,r){n&1&&(C(0,"app-header")(1,"div",0),i(2,"main",1),C(3,"router-outlet"),o())},dependencies:[E,F],encapsulation:2})}}return t})();var x=(()=>{class t{constructor(e,n){this.authService=e,this.router=n}canActivate(){return this.authService.isAuthenticated?!0:(this.router.navigate(["/login"]),!1)}static{this.\u0275fac=function(n){return new(n||t)(u(m),u(I))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Y=[{path:"",redirectTo:"search",pathMatch:"full"},{path:"search",loadComponent:()=>import("./chunk-E2CSYYGH.js").then(t=>t.SearchComponent)},{path:"news",loadComponent:()=>import("./chunk-EEA3VYJZ.js").then(t=>t.NewsComponent)},{path:"stock/:id",loadComponent:()=>import("./chunk-ME4LXMZY.js").then(t=>t.StockDetailComponent)},{path:"login",loadComponent:()=>import("./chunk-AUXAQHYX.js").then(t=>t.LoginComponent)},{path:"signup",loadComponent:()=>import("./chunk-OYZ3NQZO.js").then(t=>t.SignupComponent)},{path:"profile",loadComponent:()=>import("./chunk-3QWGLLAQ.js").then(t=>t.ProfileComponent),canActivate:[x]},{path:"portfolio",loadComponent:()=>import("./chunk-BSJVJYB4.js").then(t=>t.PortfolioComponent),canActivate:[x]},{path:"**",redirectTo:"search"}];L(R,{providers:[j(Y,V(D))]}).catch(t=>console.error(t));
