(this["webpackJsonpmeschain-client"]=this["webpackJsonpmeschain-client"]||[]).push([[0],{162:function(e,t,s){},163:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(49),o=s.n(a),r=s(53),i=s(105),l=s(104),d=s(8),j=s(18),h=s(92),u=s(164),b=s(14),m=s(5),f=s(96),x=s(50),y=s(97),O=s(22),g=s(3);var w=function(){sessionStorage.whoami&&(window.location.hash="#/");var e=Object(n.useState)(""),t=Object(j.a)(e,2),s=t[0],a=t[1],o=Object(n.useState)(1),r=Object(j.a)(o,2),i=r[0],l=r[1];return Object(g.jsx)("div",{className:"main__class",children:Object(g.jsxs)(h.a,{width:"auto",mx:"auto",my:"auto",maxWidth:"420px",bg:"#2c2c2c",color:"white",border:0,p:4,style:{boxShadow:"9px 9px 8px rgb(0 0 0)"},children:[0===i&&Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(u.a,{children:"Log In to Meschain"}),Object(g.jsx)(b.a.p,{children:"If you have your keys with you go ahead and upload them"}),Object(g.jsx)(m.b,{mx:"auto",style:{display:"flex",justifyContent:"center"},children:Object(g.jsx)(f.a,{label:"Your key file",children:Object(g.jsx)(x.a,{type:"file",required:!0,accept:".meschain",placeholder:"Keys",onChange:function(e){var t=e.nativeEvent.srcElement.files[0],s=new FileReader;s.onload=function(e){sessionStorage.setItem("file",e.target.result),sessionStorage.setItem("kind",0),window.location.hash="#/setup"},s.readAsText(t)}})})}),Object(g.jsxs)(b.a.p,{style:{fontStyle:"italic"},children:["Don't have keys? Get new one"," ",Object(g.jsx)(y.a,{title:"Click here to signup",onClick:function(){return l(1)},children:"here."})]})]}),1===i&&Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(u.a,{children:"SignUp for Meschain"}),Object(g.jsx)(b.a.p,{children:"No need for email or mobile. Just enter a name as you like."}),Object(g.jsxs)(m.b,{mx:"auto",children:[Object(g.jsx)(f.a,{label:"Your Name",style:{width:"100%"},children:Object(g.jsx)(x.a,{type:"text",style:{width:"100%"},value:s,onChange:function(e){return a(e.target.value)},placeholder:"eg. Superman"})}),Object(g.jsx)(O.a,{icon:"ArrowForward",iconpos:"right",onClick:function(){sessionStorage.setItem("user",s),sessionStorage.setItem("kind",1),window.location.hash="#/setup"},children:"Lets go"})]}),Object(g.jsxs)(b.a.p,{style:{fontStyle:"italic"},children:["Already have keys? Log In"," ",Object(g.jsx)(y.a,{title:"Click here to login",onClick:function(){return l(0)},children:"here."})]})]})]})})},p=s(165),v=s(167),S=s(169),k=s(168),N=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))};var C=function(e){var t=e.address,s=e.lastText,c=e.name,a=e.handler,o=Object(n.useRef)();return Object(g.jsxs)(m.b,{style:{display:"flex",borderBottom:"1px solid #ded7d7",padding:"10px"},onClick:function(){return a({address:t,blockie:o.current.canvas.toDataURL()})},children:[Object(g.jsx)(p.a,{style:{borderRadius:"50%"},opts:{seed:t,color:N(),bgcolor:N(),spotcolor:N()},ref:o}),Object(g.jsxs)("span",{className:"d-flex flex-column pl-2",children:[Object(g.jsx)(b.a,{fontWeight:"bold",p:0,children:c}),Object(g.jsx)("small",{children:s})]})]})};var I=function(e){var t=e.set,s=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},c=Object(n.useState)(!1),a=Object(j.a)(c,2),o=a[0],r=a[1],i=Object(n.useState)(""),l=Object(j.a)(i,2),d=l[0],h=l[1];return Object(n.useEffect)((function(){window.peer.identity.subscribe((function(e){try{localStorage.setItem(JSON.parse(e).from,e),t(JSON.parse(e).from)}catch(s){}}))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsxs)(m.b,{bg:"#2f3136",p:2,style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(g.jsx)(p.a,{style:{borderRadius:"50%"},opts:{seed:sessionStorage.whoami,color:s(),bgcolor:s(),spotcolor:s()}}),Object(g.jsxs)(u.a.h6,{style:{margin:0},children:["Chats of ",window.user.userInfo.username||"Anonymous"]}),Object(g.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[Object(g.jsx)(O.a.Text,{icon:"Info",icononly:!0,size:"small",title:"Stats for Nerds",mr:2,className:"logsBTN",onClick:function(){r(!o),o?(document.querySelector(".logs").style="",document.querySelector(".chats").style="",document.querySelector(".chats").children[0].style="",document.querySelector(".chats").children[1].style=""):(document.querySelector(".logs").style="display: none",document.querySelector(".chats").style="width: 100%",document.querySelector(".chats").children[0].style="width: 35%",document.querySelector(".chats").children[1].style="width: 65%")},style:{color:"#ffffff"}}),Object(g.jsx)(O.a,{icon:"PowerSettingsNew",size:"small",iconpos:"right",onClick:function(){return window.location.reload()},children:"Log Out"})]})]}),Object(g.jsxs)(m.b,{p:2,bg:"#36393f",children:[Object(g.jsx)(b.a,{fontSize:"1",children:"Your Meschain Address"}),Object(g.jsx)(v.a,{address:sessionStorage.whoami,className:"hideQR"})]}),Object(g.jsx)(m.b,{p:2,bg:"#2f3136",children:Object(g.jsxs)(S.a,{className:"fullWidth",children:[Object(g.jsx)(f.a,{label:"Your Friends Meschain Address",children:Object(g.jsx)(x.a,{type:"text",placeholder:"Ask your friend to share their address",style:{width:"100%"},required:!0,value:d,onChange:function(e){return h(e.target.value)}})}),Object(g.jsx)(O.a,{icon:"Add",icononly:!0,ml:2,onClick:function(e){e.preventDefault();try{localStorage.getItem(d)?t(d):window.peer.privateMSG(void 0,d,"WHO")}catch(s){window.toastProvider.addMessage("Couldn't connect to your friend \ud83d\ude0c",{secondaryMessage:"May be you entered a wrong address or they are offline",colorTheme:"light",variant:"failure"})}h("")}})]})}),Object(g.jsxs)(m.b,{bg:"#46484b",style:{height:"100%",overflowY:"auto"},children:[Object(g.jsx)(C,{name:"Anurag Verma",lastText:"Hi, what's up?",address:"0xa8f3bc6f5cdd3bfa00a538d11bed3ad3ea8c47005df4e0e05b8319d818ece8bf",handler:t}),Object(g.jsx)(C,{name:"Antra Verma",lastText:"Good Night! \ud83d\ude00",address:"0xa984b008e292ef2c2993635f4fbb794b6f3366bc30c845f4581308c31b63fa4f",handler:t})]}),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k.a.Provider,{ref:function(e){return window.toastProvider=e}})})]})},M=s.p+"static/media/nochat.0f4e4e0d.png";var A=function(e){var t=e.message,s=e.time,c=e.sent,a=Object(n.useRef)();return Object(g.jsx)("div",{className:c?"d-flex justify-content-end anim":"d-flex justify-content-start anim",style:{marginBottom:"4px"},ref:a,onClick:function(){a.current.children[0].children[0].classList.contains("d-none")?a.current.style.marginBottom="15px":a.current.style.marginBottom="4px",a.current.children[0].children[0].classList.toggle("d-none")},children:Object(g.jsxs)("div",{className:c?"msg_cotainer":"msg_cotainer_send",children:[t,Object(g.jsx)("span",{className:c?"msg_time d-none":"msg_time_send d-none",children:s})]})})},H=s(166);var F=function(e){var t=e.addr,s=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},a=Object(n.useState)("Anonymous Panda"),o=Object(j.a)(a,2),r=o[0];return o[1],Object(n.useEffect)((function(){console.log("Update"),setTimeout((function(){localStorage.getItem(t.address)}),2500)}),[t.address]),Object(g.jsxs)(c.a.Fragment,{children:[t.blockie&&Object(g.jsx)(H.a,{src:t.blockie,size:"45px"}),!t.blockie&&Object(g.jsx)(p.a,{style:{borderRadius:"50%"},opts:{seed:t.address,color:s(),bgcolor:s(),spotcolor:s()}}),Object(g.jsx)(b.a,{p:2,children:r||"Anonymous Panda"})]})};var L=function(e){var t=e.curr,s=Object(n.useState)(0),a=Object(j.a)(s,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){window.peer.numConnections.subscribe((function(e){return r(e)}))}),[o]),Object(g.jsx)("div",{className:"hideChat",children:Object(g.jsxs)(m.b,{style:{height:"100%"},color:"#ffffff",children:[!t&&Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"inherit"},children:Object(g.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem"},children:[Object(g.jsx)("img",{src:M,width:"200"}),Object(g.jsx)(u.a.h4,{my:1,children:"It's always nice to chat with to someone"}),Object(g.jsx)(b.a,{my:0,children:"Pick a chat from the left menu, or add your friends to start a new chat."}),Object(g.jsxs)(b.a,{my:1,children:["By the way you're currently directly connected to ",Object(g.jsx)("b",{children:o})," users."]}),Object(g.jsxs)("small",{style:{marginTop:"2rem",width:"60%"},children:["All your messages are always end-to-end encrypted to never go to any server. Everything happens on a blockchain powered by people like you. ",Object(g.jsx)("wbr",{})," Meschain is built on top of blockchain where all the users compete to add your new message to the blockchain. Note that once you've sent a message it is for forever no one (not even you) can alter or delete it."]})]})})}),t&&Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(m.b,{bg:"#4a4a4a",p:2,style:{display:"flex",alignItems:"center"},children:Object(g.jsx)(F,{addr:t})}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{class:"card-body msg_card_body",children:[Object(g.jsx)("div",{style:{display:"flex","justify-content":"center",transform:"scale(0.8)"},children:Object(g.jsx)(O.a,{size:"small",mr:3,style:{"background-color":"a7a7ad"},children:"Today"})}),Object(g.jsx)(A,{message:"Hellow!",time:"10:20AM",sent:!0}),Object(g.jsx)(A,{message:"Hellow Lisfgoaif skdhfoisdg sghio!",time:"10:20AM",sent:!1}),Object(g.jsx)(A,{message:"Hellow!",time:"10:20AM",sent:!0}),Object(g.jsx)(A,{message:"Hellow!",time:"10:20AM",sent:!0})]}),Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(g.jsx)(O.a.Outline,{icon:"Attachment",icononly:!0,style:{"border-bottom-right-radius":0,"border-top-right-radius":0,"background-color":"#ffffff","margin-right":0,"margin-left":25}}),Object(g.jsx)(x.a,{type:"text",required:!0,placeholder:"Type your message...",style:{width:"60vw",margin:"5px 0px","border-radius":0}}),Object(g.jsx)(O.a,{icon:"Send",icononly:!0,style:{"margin-right":"30px","border-top-left-radius":0,"border-bottom-left-radius":0}})]})]})]})]})})};var R=function(){var e=Object(n.useState)(void 0),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(g.jsxs)("div",{className:"home",children:[Object(g.jsxs)("div",{className:"chats",children:[Object(g.jsx)(I,{set:c}),Object(g.jsx)(L,{curr:s})]}),Object(g.jsx)("div",{className:"logs"})]})};var T=function(){var e=sessionStorage.kind;return Object(n.useEffect)((function(){if(e||(window.location.hash="#/auth"),"1"===e&&(window.user=new window.User(null,null,sessionStorage.user),sessionStorage.setItem("whoami",window.user.keyHash),window.peer=new window.Peer(window.user.keyHash,window.user.whoami)),"0"===e){var t=sessionStorage.file;t||(window.location.hash="#/auth"),window.user=new window.User(JSON.parse(t).publicKey,JSON.parse(t).secretKey,JSON.parse(t).username),window.peer=new window.Peer(window.user.keyHash,window.user.whoami),window.user.keyHash!==JSON.parse(t).keyHash&&(window.location.hash="#/auth"),sessionStorage.setItem("whoami",window.user.keyHash),window.location.hash="#/"}}),[]),Object(g.jsx)("div",{className:"main__class",children:Object(g.jsxs)(h.a,{width:"auto",mx:"auto",my:"auto",maxWidth:"420px",bg:"#2c2c2c",color:"white",border:0,p:4,style:{boxShadow:"9px 9px 8px rgb(0 0 0)"},children:["1"===e&&Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(u.a,{children:"Hang On"}),Object(g.jsx)(b.a.p,{children:"Download your keys and keep them at a safe private place."}),Object(g.jsxs)(m.b,{style:{display:"flex",justifyContent:"center"},children:[Object(g.jsx)(O.a.Text,{icon:"ArrowForward",iconpos:"right",style:{color:"#ffffff"},onClick:function(){return window.location.hash="#/"},children:"Continue"}),Object(g.jsx)(O.a,{mx:4,onClick:function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(new Blob([JSON.stringify(window.user.userInfo)],{type:"meschain"})),e.download="key.meschain",e.click(),window.URL.revokeObjectURL(e.href)},children:"Download"})]}),Object(g.jsx)(b.a.p,{style:{fontStyle:"italic"},children:"If you loose this key their is no way of accessing your messages again."})]}),"0"===e&&Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(u.a,{children:"Hang On"}),Object(g.jsx)(b.a.p,{children:"Just a moment. We're preparing your chats."}),Object(g.jsx)(b.a.p,{style:{fontStyle:"italic"},children:"You'll be redirected automatically"})]})]})})};function _(e){var t=e.component,s=Object(i.a)(e,["component"]);return Object(g.jsx)(d.b,Object(r.a)(Object(r.a)({},s),{},{render:function(e){return!0===(!!sessionStorage.whoami&&(!!window.user||(sessionStorage.clear(),!1)))?Object(g.jsx)(t,Object(r.a)({},e)):Object(g.jsx)(d.a,{to:{pathname:"/auth",state:{from:e.location}}})}}))}var q=function(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)(d.d,{children:[Object(g.jsx)(d.b,{path:"/auth",component:w}),Object(g.jsx)(d.b,{path:"/setup",component:T}),Object(g.jsx)(_,{path:"/",component:R})]})})};s(162);o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.8564b2a0.chunk.js.map