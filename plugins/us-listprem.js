/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{conn:t,args:a,isOwner:i})=>{const m=Object.entries(db.data.users).filter((e=>e[1].premiumTime)).map((([e,t])=>({...t,jid:e}))),n=db.data.users[e.sender].premiumTime,r=db.data.users[e.sender].premium,s=m.map(toNumber("premiumTime")).sort(sort("premiumTime")),d=a[0]&&a[0].length>0?Math.min(100,Math.max(parseInt(a[0]),10)):Math.min(10,s.length);t.sendMessage(e.chat,{text:`\n*[ LISTA - PREMIUM ]*\n\n*🌟 Cliente* : @${e.sender.split`@`[0]}\n${i?"*⏳ Tiempo premium* : ∞":r?`*⏳ Tiempo premium* : _${clockString(n-1*new Date)}._`:"*🚫 Ya no es un usuario premium!"}\n${"\n——————————\n\n"+s.slice(0,d).map((({jid:e,name:a,premiumTime:i,registered:m},n)=>`*⭐ Usuario* : ${m?a:t.getName(e)}\n*⏳ Tiempo premium* : ${i>0?`_${clockString(i-1*new Date)}._`:"🚫 Expirado ---"}`)).join`\n\n`}\n`.trim(),mentions:[e.sender]},{quoted:e}),setTimeout((()=>{db.data.chats[e.chat].deletemedia&&t.deleteMessage(e.chat,key)}),db.data.chats[e.chat].deletemediaTime)};handler.help=["listprem"],handler.tags=["casual"],handler.command=/^(listprem|premlist)$/i;export default handler;function sort(e,t=!0){return e?(...a)=>a[1&t][e]-a[1&!t][e]:(...e)=>e[1&t]-e[1&!t]}function toNumber(e,t=0){return e?(a,i,m)=>({...m[i],[e]:void 0===a[e]?t:a[e]}):e=>void 0===e?t:e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/