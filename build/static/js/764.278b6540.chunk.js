"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[764],{1236:(e,l,t)=>{t.d(l,{A:()=>a});var o=t(5043),r=t(579);class s extends o.Component{renderSwitch(e){switch(e){case"Price":case"Percent":return{borderRadius:6,boxShadow:"0px 1px 20px 1px #434568"};default:return"foo"}}render(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:"button",onClick:this.props.onClick,style:this.renderSwitch(this.props.title),className:"btn btn-outline-info btn-md px-2.5 py-2",children:this.props.value})})}}const a=s},8750:(e,l,t)=>{t.d(l,{A:()=>c});var o=t(5043),r=t(9456),s=t(9577),a=t(1840),n=t(579);const c=e=>{const{currency:l,onCurrencyChange:t,disabled:c}=e,i=(0,r.wA)(),d=e=>{switch(e){case"green":case"input_green":return{color:"#71DD37",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"red":case"input_red":return{color:"#FF3E1D",backgroundColor:"#3F3131",fontSize:12,textAlign:"center",borderRadius:20};case"blue":return{color:"#03C3EC",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"yellow":case"input_yellow":return{color:"#FA8C26",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_white":return{color:"#FCF9F7",backgroundColor:"#313B3F",fontSize:12,textAlign:"center",borderRadius:20};case"input_blue":return{color:"#03C3EC",backgroundColor:"#06324C",fontSize:12,textAlign:"center",borderRadius:20};default:return"foo"}},x=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9","\u20a6","\u20a9","R","\u20a1","\u062f.\u0625"].map(((e,l)=>(0,n.jsx)("option",{value:e,children:e},l)));return(0,o.useEffect)((()=>{i((0,a.sr)(l))}),[l,i]),(0,n.jsx)(n.Fragment,{children:"input_yellow"===e.color||"input_green"===e.color||"input_red"===e.color||"input_white"===e.color||"input_blue"===e.color?(0,n.jsxs)("div",{style:{width:"80%",marginLeft:"10%"},children:[(0,n.jsx)("label",{className:"px-1 ",style:{color:"#FFFFFF"},children:e.title}),"%"===e.val?(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)(s.HG,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:d(e.color).color,backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}),(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)("span",{className:"input-group-text ",style:{fontSize:14,borderRadius:"0px 6px 6px 0px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},children:e.val})})]}):(0,n.jsx)("div",{className:"input-group",children:"m"===e.val?(0,n.jsx)(s.HG,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px 6px 6px 6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)("select",{disabled:c,className:"input-group-text ",onChange:t,style:{appearance:"none",fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:l,children:x})}),(0,n.jsx)(s.HG,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:d(e.color).color,borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name})]})})]}):(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("span",{className:"px-2",style:{color:"#FFFFFF"},children:e.title}),(0,n.jsx)("div",{className:"mt-2",style:{fontSize:13,color:d(e.color).color},children:e.value})]})})}},2224:(e,l,t)=>{t.d(l,{A:()=>c});var o=t(5043),r=t(9577),s=t(9456),a=t(1840),n=t(579);const c=e=>{const{Currency:l}=(0,s.d4)((e=>e.InputValue)),t=(0,s.wA)(),[c,i]=(0,o.useState)(l),d=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9"].map(((e,l)=>(0,n.jsx)("option",{value:e,children:e},l)));(0,o.useEffect)((()=>{t((0,a.sr)(c))}),[c,t]);return(0,n.jsx)(n.Fragment,{children:"input_white"===e.color?(0,n.jsxs)("div",{style:{width:"80%",marginLeft:"10%"},children:[(0,n.jsx)("div",{className:"input-group",children:"m"===e.val?(0,n.jsx)(r.HG,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"6px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)("select",{className:"input-group-text",onChange:e=>{i(e.target.value)},style:{fontSize:14,borderRadius:"6px 0px 0px 6px",color:"#BAC4D1",backgroundColor:"#3B4758",borderColor:"#3B4758"},value:l,children:d})}),(0,n.jsx)(r.HG,{thousandSeparator:!0,onKeyPress:e.onKeyPress,ref:e.ref,value:e.value,style:{color:"white",borderRadius:"0px 6px 6px 0px",backgroundColor:"#3B4758",borderColor:"#3B4758"},className:"form-control","aria-describedby":"basic-addon1",onKeyDown:e.onKeyDown,onChange:e.onChange,name:e.name})]})}),(0,n.jsx)("label",{className:"px-1",style:{color:"#FFFFFF",textAlign:"center",fontSize:"16px"},children:e.title})]}):(0,n.jsxs)("div",{className:"text-center mb-3",children:[(0,n.jsx)("div",{style:{color:"#FFFFFF",textAlign:"center",fontSize:"16px"},children:e.title}),(0,n.jsx)("div",{className:"mt-2",style:{fontSize:14,color:(e=>{switch(e){case"green":return{color:"#71DD37",fontSize:"16px",textAlign:"center",borderRadius:"4px"};case"input_white":return{color:"#FFFFFF",fontSize:14,textAlign:"center"};case"blue":return{color:"#03C3EC",fontSize:"16px",textAlign:"center",borderRadius:"4px"};case"red":return{color:"#FF3E1D",fontSize:"16px",textAlign:"center",borderRadius:"4px"};default:return{color:"#FFFFFF",fontSize:"16px",textAlign:"center"}}})(e.color).color,textAlign:"center"},children:e.value})]})})}},8764:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var o=t(5043),r=t(9456),s=t(1840),a=t(8750),n=t(4713),c=t(1236),i=t(2224),d=t(40),x=t(8098),u=t(579);const m=()=>{const e=(0,r.d4)((e=>e.currency.currency));let l=Intl.NumberFormat("en-US");const[m,h]=(0,o.useState)(2),v=e=>{if(13===e.charCode){h(m<14?m+1:1);const e=document.querySelector(`input[name=CIO${m}]`);null!==e&&e.focus()}},{AAAO1:g,AAAO2:p,EEEO1:A,MMMO1:F,CCCO1:w,EEEO3:j,EEEO2:C,CCCO2:b,IIIO1:y,JJJO1:N,GGGO1:B,Currency:f}=(0,r.d4)((e=>e.InputValue)),P=(0,r.wA)();let z=0===g?"":g;const[S,R]=(0,o.useState)(z);let L=0===p?"":p;const[O,I]=(0,o.useState)(L),[K,X]=(0,o.useState)(0),[M,H]=(0,o.useState)(0);let D=0===A?"":A;const[W,U]=(0,o.useState)(D),[T,E]=(0,o.useState)(F);let Z=0===w?"":w;const[G,k]=(0,o.useState)(Z);let J=0===j?"":j;const[Y,V]=(0,o.useState)(J),[Q,q]=(0,o.useState)(0),[_,$]=(0,o.useState)(0);let ee=0===C?"":C;const[le,te]=(0,o.useState)(ee),[oe,re]=(0,o.useState)(0);let se=0===b?"":b;const[ae,ne]=(0,o.useState)(se),[ce,ie]=(0,o.useState)(0);let de=0===B?"":B;const[xe,ue]=(0,o.useState)(de),[me,he]=(0,o.useState)(0),[ve,ge]=(0,o.useState)(0);let pe=0===y?"":y;const[Ae,Fe]=(0,o.useState)(pe),[we,je]=(0,o.useState)(0);let Ce=0===N?"":N;const[be,ye]=(0,o.useState)(Ce),[Ne,Be]=(0,o.useState)(0),[fe,Pe]=(0,o.useState)(0),[ze,Se]=(0,o.useState)(0),[Re,Le]=(0,o.useState)(0),[Oe,Ie]=(0,o.useState)(0),[Ke,Xe]=(0,o.useState)(0);(0,o.useEffect)((()=>{P((0,s.cT)(S)),P((0,s.Gc)(oe)),P((0,s.Bp)(ce)),P((0,s.uD)(me)),P((0,s.Bf)(_)),P((0,s.IT)(Ke)),P((0,s.XV)(O)),P((0,s.mS)(W)),P((0,s.m)(T)),P((0,s.EI)(Ne)),P((0,s.SJ)(fe)),P((0,s.Lq)(ze)),P((0,s.S4)(Re)),P((0,s.U6)(G)),P((0,s.Ac)(Y)),P((0,s.tA)(le)),P((0,s.$I)(ae)),P((0,s.II)(xe)),P((0,s.k1)(Ae)),P((0,s.PE)(be)),X(.01*S*O&&.01*S*O!==1/0&&.01*S*O!==-1/0?S*O/100:0),H(S/W/T&&S/W/T!==1/0&&S/W/T!==-1/0?S/W/T:0),q(G/(W-Y)/T&&G/(W-Y)/T!==1/0&&G/(W-Y)/T!==-1/0?G/(W-Y)/T:0),$(W*le*T&&W*le*T!==1/0&&W*le*T!==-1/0?W*le*T:0),re(_-Y/W*_&&_-Y/W*_!==1/0&&_-Y/W*_!==-1/0?-_-Y/W*_:0),ie((le*xe-le*W)*T&&(le*xe-le*W)*T!==1/0&&(le*xe-le*W)*T!==-1/0?(le*xe-le*W)*T:0),he(be&&be!==1/0&&be!==-1/0?be:0),ge(_*Ae*.01*-1&&_*Ae*.01*-1!==1/0&&_*Ae*.01*-1!==-1/0?_*Ae*.01*-1:0),je(W*le*be*.01*T&&W*le*be*.01*T!==1/0&&W*le*be*.01*T!==-1/0?W*le*be*T/100*10/10:0),Ie(1*W+W*we/_&&1*W+W*we/_!==1/0&&1*W+W*we/_!==-1/0?(W+W*we/_).toFixed(2):0),Xe(we/G&&we/G!==1/0&&we/G!==-1/0?we/G:0),Be(we/le&&we/le!==1/0&&we/le!==-1/0?(we/le).toFixed(2):0),Pe(Y-W&&Y-W!==1/0&&Y-W!==-1/0?Y-W:0),Se(xe-W&&xe-W!==1/0&&xe-W!==-1/0?xe-W:0),Le(xe-Y&&xe-Y!==1/0&&xe-Y!==-1/0?xe-Y:0)}),[P,S,oe,ce,me,_,Ke,O,W,T,Ne,fe,ze,Re,G,Y,le,ae,xe,Ae,be,we]);const Me=e=>{P((0,d.M)(e.target.value))},He=["$","\xa3","\u0e3f","\u20ac","\xa5","\u20a3","\u20b9","\u20a6","\u20a9","R","\u20a1","\u062f.\u0625"].map(((e,l)=>(0,u.jsx)("option",{value:e,children:e},l))),De={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",fontSize:"16px"},We={backgroundColor:"#27283A",padding:"10px",borderRadius:"8px",marginBottom:"10px"},Ue=[{title:"Projected Loss",value:f+(ve?parseFloat((_*(Ae/100)).toFixed(2)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):parseFloat((0).toFixed(2)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),color:"#FF0000"},{title:"Stop Loss",value:f+parseFloat((W-.01*Ae*W).toFixed(2)).toLocaleString(),color:"#FF0000",marginBottom:"0px"},{title:"Projected Profit",value:f+we.toFixed(2).toLocaleString(),color:"#67C839"},{title:"Take Profit",value:f+(Oe?parseFloat(Oe).toFixed(2).toLocaleString():0),color:"#67C839",marginBottom:"0px"},{title:"Actual Capital",value:f+parseFloat(_.toFixed(2)).toLocaleString(),color:"#ED8638"},{title:"Risk-Reward Ratio",value:parseFloat((we/(_*(Ae/100)-1)).toFixed(2)).toLocaleString()+"x",color:"#9191A6"},{title:"Investment Return",value:me.toFixed(2)+"%",color:"#6FD738",marginBottom:"0px"},{title:"Stop Loss Range",value:f+Math.abs(parseFloat(W-W-.01*Ae*W).toFixed(3).toLocaleString()),color:"#9191A6"},{title:"Profit Taking Range",value:f+(Oe?parseFloat(Oe-W).toFixed(3).toLocaleString():0),color:"#9191A6"},{title:"Trade Range",value:f+parseFloat(Oe-(W-.01*Ae*W).toFixed(3)).toLocaleString(),color:"#9191A6"}],{selectedProduct:Te,selectedOption:Ee,tickerOptions:Ze,data:Ge}=(0,r.d4)((e=>e.data));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"my-4 text-center",children:(0,u.jsx)("h2",{children:"PERCENTILE SIMULATION"})}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-12 col-lg-6 col-xl-3",children:(0,u.jsxs)("div",{className:"flex-fill",style:{borderRadius:"8px"},children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2",backgroundColor:"#27283A",padding:"10px",borderRadius:"8px",marginBottom:"-10px"},children:"Trade Metrics"}),(()=>{let e=[],l=[];return Ue.forEach(((t,o)=>{l.push((0,u.jsxs)("div",{style:{...De,color:"#FFFFFF",textAlign:"left",marginBottom:"0"},children:[(0,u.jsx)("div",{style:{textAlign:"left",width:"100%"},children:t.title}),(0,u.jsx)("div",{style:{textAlign:"right",width:"auto",marginTop:t.centered?"5px":"0",color:t.color},children:t.value})]},o)),t.marginBottom&&(e.push((0,u.jsx)("div",{style:We,children:l},`card-${o}`)),l=[])})),l.length>0&&e.push((0,u.jsx)("div",{style:We,children:l},"card-last")),e})()]})}),(0,u.jsxs)("div",{className:"col-12 col-lg-6 col-xl-3 mt-3 mt-lg-0 flex-column",children:[(0,u.jsx)("div",{className:"card flex-fill",style:{borderRadius:"8px"},children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2"},children:"Portfolio Strength"}),(0,u.jsxs)("div",{className:"row text-center mt-3 gap-5",children:[(0,u.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-6 col-xxl-6",children:(0,u.jsx)(a.A,{color:"green",title:"Risk Per Trade",value:f+" "+l.format(K)})}),(0,u.jsxs)("div",{className:"col-sm-6 col-md-4 col-xl-6 col-xxl-6 my-3 my-sm-0",children:[(0,u.jsx)(a.A,{title:"Select Currency "}),(0,u.jsx)("select",{className:"form-control",value:e,onChange:Me,style:{backgroundColor:"#3B4758",color:"white",fontSize:12,padding:"8px",borderRadius:"5px",width:"auto",display:"inline-block"},children:He})]}),(0,u.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-6 col-xxl-6",children:(0,u.jsx)(a.A,{color:"green",title:"Portfolio Quantity",value:l.format(M.toFixed(2))})})]})]})}),(0,u.jsx)("div",{className:"card flex-fill mt-3",style:{borderRadius:"8px"},children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2"},children:"Portfolio Trade Management"}),(0,u.jsxs)("div",{className:"row mt-3 ",children:[(0,u.jsx)("div",{className:"col-12 col-sm-6",children:(0,u.jsx)(a.A,{currency:e,disabled:!0,onCurrencyChange:Me,value:g,color:"input_yellow",title:"Portfolio Balance",val:"$",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));R(parseFloat(t))},onKeyPress:v,name:"CIO1"})}),(0,u.jsx)("div",{className:"col-12 my-3  my-sm-1 col-sm-6",children:(0,u.jsx)(a.A,{onKeyPress:v,value:p,color:"input_yellow",title:"Portfolio at Risk",val:"%",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));I(parseFloat(t))},name:"CIO2"})}),(0,u.jsx)("div",{className:"col-12 my-sm-1 col-sm-6",children:(0,u.jsx)(a.A,{currency:e,disabled:!0,onCurrencyChange:Me,value:w,onKeyPress:v,color:"input_red",title:"My Risk Tolerance",val:"$",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));k(parseFloat(t))},name:"CIO3"})}),(0,u.jsx)("div",{className:"col-12 my-3 my-sm-1 pt-md-3 pt-lg-4 col-sm-6 ",children:(0,u.jsx)(a.A,{currency:e,disabled:!0,onCurrencyChange:Me,value:b,onKeyPress:v,color:"input_green",title:"Profit Goal",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));ne(parseFloat(t))},val:"$",name:"CIO4"})}),(0,u.jsx)("div",{className:"col-12 col-sm-6 my-sm-1 my-sm-3",children:(0,u.jsxs)("div",{style:{marginLeft:"10%"},children:[(0,u.jsx)(a.A,{title:"Market"}),(0,u.jsxs)("select",{className:"form-control",style:{backgroundColor:"#3B4758",color:"white",fontSize:12,padding:"8px",borderRadius:"5px",width:"90%"},onChange:e=>{P((0,x.yz)(e.target.value))},value:Te,children:[(0,u.jsx)("option",{value:"",children:"Select..."}),Object.keys(Ge).map((e=>(0,u.jsx)("option",{value:e,children:e},e)))]})]})}),(0,u.jsx)("div",{className:"col-12 col-sm-6 my-3 my-sm-1 my-sm-3",children:(0,u.jsxs)("div",{style:{marginLeft:"10%"},children:[(0,u.jsx)(a.A,{title:"Category"}),(0,u.jsxs)("select",{className:"form-control",style:{backgroundColor:"#3B4758",color:"white",fontSize:12,padding:"8px",borderRadius:"5px",width:"90%"},value:Ee,onChange:e=>{P((0,x.qN)(e.target.value)),(e=>{let l=Number(e.replace(/,/g,""));E(parseFloat(l))})(e.target.value)},children:[(0,u.jsx)("option",{value:"",children:"Select..."}),Ze.length>0?Ze.map(((e,l)=>{let[t,o]=e;return(0,u.jsx)("option",{value:o,children:t},l)})):(0,u.jsx)("option",{value:"",children:"No options available"})]})]})})]})]})})]}),(0,u.jsxs)("div",{className:"col-12 col-lg-6 col-xl-3 d-flex mt-3 mt-lg-0 flex-column ",children:[(0,u.jsx)("div",{className:"card flex-fill",style:{borderRadius:"8px"},children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2"},children:"Trade Performance"}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-6",children:[(0,u.jsxs)("h6",{style:{color:"#7071A4"},children:["P/L Per Share"," ",(0,u.jsx)("span",{style:{color:"rgb(103, 200, 57)"},children:f+" "+Ne.toLocaleString()})]}),(0,u.jsxs)("h6",{style:{color:"#7071A4"},children:["Rol"," ",(0,u.jsxs)("span",{style:{color:"#CBCBE2"},children:[me.toFixed(2)," %"]})]})]}),(0,u.jsxs)("div",{className:"col-6",children:[(0,u.jsxs)("h6",{className:"text-right",style:{color:"#7071A4"},children:["Risk Alert"," "]}),(0,u.jsx)("p",{className:"text-right",children:0!==ve&&null!==ve&&0!==G&&null!==G?(0,u.jsxs)(u.Fragment,{children:[Math.abs(ve)>G?(0,u.jsx)("span",{style:{color:"#FF4C4C"},children:"Risk Overexposure!"}):"",Math.abs(ve)<=G?(0,u.jsx)("span",{style:{color:"#00FF00",textAlign:"center"},children:"Safe to Trade!"}):""]}):""})]})]}),(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-sm-12",children:[(0,u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,u.jsx)(n.A,{hideText:!0,nrOfLevels:3,textColor:"#FFFF",colors:["#FF0000","#0A5D00","#0EFF00"],percent:we/(_*(Ae/100)-1)/10,arcsLength:[.19,.3,.51],arcPadding:.05})}),(0,u.jsxs)("h6",{className:"text-center",style:{color:"#CBCBE2"},children:[parseFloat((Math.round(we)/Math.round(_*(Ae/100)-1)).toFixed(2)).toLocaleString(),(0,u.jsx)("span",{style:{fontSize:"20px"},children:" X"})," "]})]})})]})}),(0,u.jsx)("div",{className:"card flex-fill mt-3",style:{borderRadius:"8px"},children:(0,u.jsxs)("div",{className:"card-body d-flex flex-column",children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2"},children:"Percentage Order Simulator"}),(0,u.jsxs)("div",{className:"row mt-3",children:[(0,u.jsx)("div",{className:"col-12 col-sm-6",children:(0,u.jsx)(a.A,{disabled:!0,currency:e,onCurrencyChange:Me,max:1e5,value:A,color:"input_yellow",val:"$",title:"Entry Price",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));U(parseFloat(t))},onKeyPress:v,name:"CIO10"})}),(0,u.jsx)("div",{className:"col-12 col-sm-6",children:(0,u.jsx)(a.A,{max:1e5,value:C,color:"input_blue",title:"Position Size",val:"m",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));te(parseFloat(t))},onKeyPress:v,name:"CIO11"})}),(0,u.jsx)("div",{className:"col-12 col-sm-6",children:(0,u.jsx)(a.A,{max:1e5,value:y,color:"input_red",val:"%",title:"Defined Risk ",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));Fe(parseFloat(t))},onKeyPress:v,name:"CIO12"})}),(0,u.jsx)("div",{className:"col-12 col-sm-6",children:(0,u.jsx)(a.A,{max:1e5,value:N,color:"input_green",val:"%",title:"Profit Target ",onChange:e=>{let l=e.target.value,t=Number(l.replace(/,/g,""));ye(t)},onKeyPress:v,name:"CIO13"})})]}),(0,u.jsxs)("div",{className:"row pt-3 text-center",children:[(0,u.jsx)("div",{className:"col-6",children:(0,u.jsx)(c.A,{color:"input_green",title:"Price",onClick:()=>(Fe(""),void ye("")),value:"Clear data"})}),(0,u.jsx)("div",{className:"col-6 ",children:(0,u.jsx)("div",{className:"d-flex justify-content-center",children:(0,u.jsxs)("div",{className:"d-flex align-items-center pl-2",children:[" ",ve&&G?Math.abs(ve)>G?(0,u.jsx)("span",{style:{color:"#FF4C4C"},children:"\u274c"}):(0,u.jsx)("span",{style:{color:"#00FF00",textAlign:"center"},children:"\u2714"}):null]})})})]})]})})]}),(0,u.jsx)("div",{className:"col-12 col-lg-6 col-xl-3 d-flex mt-3 mt-lg-0",children:(0,u.jsx)("div",{className:"card flex-fill",style:{borderRadius:"8px"},children:(0,u.jsxs)("div",{className:" card-body",children:[(0,u.jsx)("h4",{className:"text-center",style:{color:"#CBCBE2"},children:"My OCO Order"}),(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("div",{className:"col-sm-6",style:{position:"relative"},children:(0,u.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,u.jsx)("img",{src:t(8734),alt:"profile",style:{height:"550px",width:"30%"},className:"profile-pic"})})}),(0,u.jsxs)("div",{className:"col-sm-6 d-flex flex-column mt-2 ",style:{justifyContent:"space-between"},children:[(0,u.jsx)("div",{style:{width:"100%",textAlign:"center"},children:(0,u.jsx)(i.A,{value:f+(Oe?parseFloat(Oe).toFixed(2).toLocaleString():0),color:"green",title:"Sell Price"})}),(0,u.jsx)("div",{style:{width:"100%",textAlign:"center"},children:(0,u.jsx)(i.A,{value:le||0,color:"blue",title:"Quantity"})}),(0,u.jsx)("div",{style:{width:"100%",textAlign:"center",marginBottom:"-38px"},children:(0,u.jsx)(i.A,{value:f+parseFloat((W-.01*Ae*W).toFixed(2)).toLocaleString()||0,color:"red",title:"Stop Price"})})]})]})]})})})]})]})}},8734:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAANFCAYAAADyK0urAAAACXBIWXMAABJ0AAASdAHeZh94AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTA3VDA0OjAxOjAxKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNS0wN1QwODozMDoxNSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0wN1QwODozMDoxNSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjdkMjQ1OC1iMzA4LTNkNDctODcxNS01MDQzYWMwYWQ0OTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MzU1YjNmYy02YWUzLTgwNDctODYzYS0wOGY2ZTllNzViNTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNmMyMWM5Ni05ZGMxLTFkNGMtYWNlYS04NzY0MzM3Mzk3OWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2YzIxYzk2LTlkYzEtMWQ0Yy1hY2VhLTg3NjQzMzczOTc5YSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0wN1QwNDowMTowMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYTY3ZTU3NC0wZmJhLTZiNDUtYTUxZi00MmJlOWQ4OWY2ZWQiIHN0RXZ0OndoZW49IjIwMjMtMDUtMDdUMDQ6MDU6NTIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3ZDI0NTgtYjMwOC0zZDQ3LTg3MTUtNTA0M2FjMGFkNDk2IiBzdEV2dDp3aGVuPSIyMDIzLTA1LTA3VDA4OjMwOjE1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+alMBIwAAECpJREFU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"}}]);
//# sourceMappingURL=764.278b6540.chunk.js.map