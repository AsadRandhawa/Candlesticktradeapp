"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[494],{2494:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var s=t(5043),r=t(1688),o=t(2582),l=t(2397),n=t(2127),i=t(2639),c=t(5737),d=t(579);const m=(0,d.jsx)(n.g,{icon:i.pS3}),g=()=>{const[e,a]=(0,s.useState)(!1),[t,n]=(0,s.useState)(""),[i,g]=(0,s.useState)(""),[u,p]=(0,s.useState)(!1),h=(e,a)=>{1===e?n(a):2===e&&g(a)};return e?(0,d.jsx)(r.rd,{to:"/intro"}):(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"d-flex align-items-center auth px-0",children:(0,d.jsx)("div",{className:"row w-100 mx-0",children:(0,d.jsx)("div",{className:"col-lg-4 mx-auto",children:(0,d.jsxs)("div",{className:"card text-left py-5 px-5 px-sm-5",style:{backgroundColor:"#1a1a34"},children:[(0,d.jsx)("h4",{className:"mb-4",children:"Hello! let's get started"}),(0,d.jsx)("h6",{className:"font-weight-light mb-4",children:"Sign in to continue."}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"form-group col-12",children:(0,d.jsx)("input",{type:"email",value:t,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",placeholder:"Email or username",onChange:e=>h(1,e.target.value)})})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"form-group col-12",children:(0,d.jsxs)("div",{className:"input-group",style:{backgroundColor:"rgb(26, 26, 52)"},children:[u?(0,d.jsx)("input",{type:"text",value:i,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>h(2,e.target.value),placeholder:"Password"}):(0,d.jsx)("input",{type:"password",value:i,style:{color:"white",backgroundColor:"rgb(26, 26, 52)"},className:"form-control form-control-lg",onChange:e=>h(2,e.target.value),placeholder:"Password"}),(0,d.jsx)("div",{className:"input-group-prepend",children:(0,d.jsx)("span",{className:"input-group-text",children:(0,d.jsx)("i",{onClick:()=>{p(!u)},style:{cursor:"pointer",zIndex:"1",color:"#d1d1d1"},children:m})})})]})})}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)("button",{onClick:()=>{if(t&&""!==t&&void 0!==t)if(i&&void 0!==i)if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t)){if(t||i){let e={username:"",email:t,pAss:i};l.A.post("/api/users/login",e).then((e=>{"User Not Found"===e.data?c.Ay.warning(e.data):"Password Dont Matched"===e.data?c.Ay.warning("Your account or password is incorrect.If you don't remember your password, Forgot Password now"):"Your period is finished. Please register again"===e.data?c.Ay.warning(e.data):(localStorage.setItem("level",e.data.level),localStorage.setItem("Auth",2),localStorage.setItem("Username",e.data.username),localStorage.setItem("Email",e.data.email),localStorage.setItem("Password",e.data.password),localStorage.setItem("UserId",e.data.userId),localStorage.setItem("FirstName",e.data.firstName),localStorage.setItem("Lastname",e.data.lastname),a(!0),c.Ay.config({top:"60px",duration:2}),c.Ay.success("Successfully login"))}))}}else{let e={username:t,eMail:"",pAss:i};l.A.post("/api/users/login",e).then((e=>{"User Not Found"===e.data||"Password Dont Matched"===e.data||"Your period is finished. Please register again"===e.data?c.Ay.warning(e.data):(localStorage.setItem("level",e.data.level),localStorage.setItem("Auth",2),localStorage.setItem("Username",e.data.username),localStorage.setItem("Password",e.data.password),localStorage.setItem("Email",e.data.email),localStorage.setItem("UserId",e.data.userId),localStorage.setItem("FirstName",e.data.firstName),localStorage.setItem("Lastname",e.data.lastname),a(!0),c.Ay.config({top:"60px",duration:2}),c.Ay.success("Successfully login"))}))}else c.Ay.warning("Invalid password");else c.Ay.warning("Invaild email")},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",children:"SIGN IN"})}),(0,d.jsx)("div",{className:"my-2 d-flex justify-content-between align-items-center",children:(0,d.jsx)(o.N_,{to:"/forget_pass",children:"Forgot password?"})}),(0,d.jsxs)("div",{className:"text-center mt-4 font-weight-light",children:["Don't have an account?"," ",(0,d.jsx)(o.N_,{to:"/register",className:"text-primary",children:"Register"})]})]})})})})})}},2397:(e,a,t)=>{t.d(a,{A:()=>s});const s=t(6213).A.create({baseURL:"https://converg-production-28fb.up.railway.app"})}}]);
//# sourceMappingURL=494.f75ef3bf.chunk.js.map