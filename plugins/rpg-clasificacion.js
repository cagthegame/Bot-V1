/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";import{areJidsSameUser}from"@adiwajshing/baileys";const leaderboards=["level","exp","limit","nkoins","hierro","oro","diamante","esmeralda","basura","elixir","madera","roca","cuerda","ordinario","singular","mitico","legendario","mascota"];let handler=async(e,{conn:n,args:r,participants:i,command:a})=>{let t=Object.entries(db.data.users).map((([e,n])=>({...n,jid:e})));const o=leaderboards.filter((e=>e&&t.filter((n=>n&&n[e])).length)),s=(r[0]||"").toLowerCase(),m=e=>Math.ceil(t.filter((n=>n&&n[e])).length/25),d=`\nUsar formato *${Prefijo}${a} [tipo] [página]*\nejemplo de uso: \n\n${Prefijo}${a} nkoins 1\n\n📍 Lista de tipos\n${o.map((e=>`\n${rpg.emoticon(e)}${e}\n`.trim())).join("\n")}\n`.trim();if(!o.includes(s))return e.reply(d);const l=isNumber(r[1])?Math.min(Math.max(parseInt(r[1]),0),m(s)):0,p=t.map(toNumber(s)).sort(sort(s)),u=p.map(enumGetKey),c=`\n• *${rpg.emoticon(s)}${s} página de ranking ${l} de ${m(s)}* •\nTú: *${u.indexOf(e.sender)+1}* de *${u.length}*\n\n${p.slice(25*l,25*l+25).map(((e,r)=>`${r+1}. ${i.some((n=>areJidsSameUser(e.jid,n.id)))?`wa.me/${e.jid.split`@`[0]}`:""}(${n.getName(e.jid)}) *${e[s]} ${rpg.emoticon(s)}${s}*`)).join`\n`}\n`.trim();return e.reply(c,null,{mentions:[...u.slice(25*l,25*l+25)].filter((e=>!i.some((n=>areJidsSameUser(e,n.id)))))})};handler.help=["ranking"],handler.tags=["xp"],handler.command=/^ranking$/i;export default handler;function sort(e,n=!0){return e?(...r)=>r[1&n][e]-r[1&!n][e]:(...e)=>e[1&n]-e[1&!n]}function toNumber(e,n=0){return e?(r,i,a)=>({...a[i],[e]:void 0===r[e]?n:r[e]}):e=>void 0===e?n:e}function enumGetKey(e){return e.jid}function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/