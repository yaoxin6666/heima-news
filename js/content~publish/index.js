"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[938],{130:(e,t,n)=>{var c=n(285);localStorage.getItem("token")||(location.href="../login/index.html"),(0,c.A)({url:"/v1_0/user/profile"}).then((e=>{const t=e.data.name;document.querySelector(".nick-name").innerHTML=t})),document.querySelector(".quit").addEventListener("click",(e=>{localStorage.clear(),location.href="../login/index.html"}))}}]);