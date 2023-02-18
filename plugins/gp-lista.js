/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import Connection from"../lib/connection.js";let handler=async(e,{conn:t})=>{let n="";try{for(let[e,r]of Object.entries(Connection.store.chats).filter((([e,t])=>e.endsWith("@g.us")&&t.isChats)))n+=`♻️ ${await t.getName(e)} :\n🔖 _${e} [${r?.metadata?.read_only?"Fuera del grupo":"Dentro del grupo"}]_\n\n`;e.reply(`*Grupos con mayor actividad de ${NombreDelBot} actualmente:*\n\n${n}\n`.trim())}catch(t){e.reply(MultiNK.Error1())}};handler.help=["gplist"],handler.tags=["casual"],handler.command=/^(gplist|listgp|grouplist|listgroups)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/