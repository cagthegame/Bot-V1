/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async($,{conn:n})=>{const e="🍇",d="🍎",a="🍓",s="🔔",i="🍑",c="💰",o="🥝",r="☘️",l="🍌",t="🍋",m=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],u=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],p=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],k=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],g=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],h=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],R=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],b=[`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`],x=`┃  | ${pickRandom([`${e}`,`${d}`,`${a}`,`${s}`,`${i}`,`${c}`,`${o}`,`${r}`,`${l}`,`${t}`])} : ${pickRandom(m)} : ${pickRandom(u)}`,f=`┃  | ${pickRandom(p)} : ${pickRandom(k)} : ${pickRandom(g)}`,q=`┃  | ${pickRandom(h)} : ${pickRandom(R)} : ${pickRandom(b)}`;f.includes("🍇 : 🍇 : 🍇")||f.includes("🍎 : 🍎 : 🍎")||f.includes("🍓 : 🍓 : 🍓")||f.includes("🔔 : 🔔 : 🔔")||f.includes("🍑 : 🍑 : 🍑")||f.includes("💰 : 💰 : 💰")||f.includes("🥝 : 🥝 : 🥝")||f.includes("☘️ : ☘️ : ☘️")||f.includes("🍌 : 🍌 : 🍌")||f.includes("🍋 : 🍋 : 🍋")?(n.sendMessage($.chat,{text:`*Jugador : @${$.sender.replace(/@.+/,"")}*\n*[ Felicidades, ganaste!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${x}*\n*┃ ├────────┤ ┃*\n*${f} <==*\n*┃ ├────────┤ ┃*\n*${q}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Tu recompensa:* \n+50000 de dinero`,mentions:[$.sender]},{quoted:$}),db.data.users[$.sender].nkoins+=5e4):(db.data.users[$.sender].nkoins<11||(db.data.users[$.sender].nkoins-=10),n.sendMessage($.chat,{text:`Jugador : @${$.sender.replace(/@.+/,"")}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${x}\n┃ ├────────┤ ┃\n${f}\n┃ ├────────┤ ┃\n${q}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`,mentions:[$.sender]},{quoted:$}))};handler.help=["tragamoneda"],handler.tags=["games"],handler.command=/^tragamoneda$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/