/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const items={comprar:{limit:{exp:999},elixir:{nkoins:1250},basura:{nkoins:4}},vender:{elixir:{nkoins:125},basura:{nkoins:2}}};let handler=async(e,{command:r,args:o})=>{const a=db.data.users[e.sender],t=Object.fromEntries(Object.entries(items[r.toLowerCase()]).filter((([e])=>e&&e in a))),n=`\nUsar formato *${Prefijo}${r} [artículo] [cantidad]*\nEjemplo de uso: \n\n${Prefijo}${r} elixir 10\n    \n📍Lista de artículos: \n${Object.keys(t).map((e=>{let o=Object.keys(t[e]).find((e=>e in a));return`*-${global.rpg.emoticon(e)}${e}* ${"comprar"==r?"Costo":"Valor"} ${t[e][o]} ${global.rpg.emoticon(o)}${o}`.trim()})).join("\n")}\n`.trim(),i=(o[0]||"").toLowerCase(),s=1*Math.floor(isNumber(o[1])?Math.min(Math.max(parseInt(o[1]),1),Number.MAX_SAFE_INTEGER):1);if(!t[i])return e.reply(n);if("comprar"==r.toLowerCase()){if("limit"==o[0]&&o[1]>global.UsLimitesCmd)return e.reply(`No puedes comprar mas de ${global.UsLimitesCmd} limit, tu límite actual es: ${a.limit}`);let r=Object.keys(t[i]).find((e=>e in a));return a[r]<t[i][r]*s?e.reply(`No tienes suficiente ${global.rpg.emoticon(r)}${r} para comprar *${s}* ${global.rpg.emoticon(i)}${i}. Necesitas *${t[i][r]*s-a[r]}* ${r} para poder comprar`):(a[r]-=t[i][r]*s,a[i]+=s,e.reply(`Tú compraste *${s}* ${global.rpg.emoticon(i)}${i} ✓`))}return a[i]<s?e.reply(`No tienes suficiente *${global.rpg.emoticon(i)}${i}* para vender, tu solo tienes ${a[i]} artículos`):(a[i]-=s,a.nkoins+=t[i].nkoins*s,e.reply(`Vendiste *${s}* ${global.rpg.emoticon(i)}${i} ✓`))};handler.help=["comprar [artículo] [cantidad]","vender <artículo> <cantidad>"],handler.tags=["games"],handler.command=/^(comprar|vender)$/i;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/