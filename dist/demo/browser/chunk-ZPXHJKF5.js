import{B as o,L as u,O as c,a as s,b as i,h,k as n}from"./chunk-G2I6LUOS.js";var f=(()=>{class e{constructor(){this.mockUser={id:"1",email:"user@example.com",name:"Demo User",createdAt:new Date().toISOString()},this.authState=new h({user:null,isAuthenticated:!1,loading:!1});let t=localStorage.getItem("user");if(t){let a=JSON.parse(t);this.authState.next({user:a,isAuthenticated:!0,loading:!1})}}get authState$(){return this.authState.asObservable()}get isAuthenticated(){return this.authState.value.isAuthenticated}get currentUser(){return this.authState.value.user}login(t,a){return this.authState.next(i(s({},this.authState.value),{loading:!0})),n(this.mockUser).pipe(o(800),u(r=>{localStorage.setItem("user",JSON.stringify(r)),this.authState.next({user:r,isAuthenticated:!0,loading:!1})}))}register(t,a,r){this.authState.next(i(s({},this.authState.value),{loading:!0}));let d={id:Math.random().toString(36).substring(2,9),email:t,name:r,createdAt:new Date().toISOString()};return n(d).pipe(o(800),u(l=>{localStorage.setItem("user",JSON.stringify(l)),this.authState.next({user:l,isAuthenticated:!0,loading:!1})}))}logout(){localStorage.removeItem("user"),this.authState.next({user:null,isAuthenticated:!1,loading:!1})}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{f as a};
