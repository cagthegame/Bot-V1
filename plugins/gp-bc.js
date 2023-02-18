/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import Connection from"../lib/connection.js";let handler=async(e,{conn:n,command:a,text:t})=>{if(!t)return e.reply("[ ! ] Y el mensaje?");const o=Object.entries(Connection.store.chats).filter((([e,n])=>e.endsWith("@g.us")&&n.isChats&&!n.metadata?.read_only&&!n.metadata?.announce)).map((e=>e[0])),s=e.quoted?e.quoted:e,i=(s.msg||s).mimetype||"",r=/image|video|sticker|audio/.test(i);if(e.reply(`Enviando transmisión a ${o.length} grupo(s), en aproximadamente ${1.5*o.length} segundo(s)`),r){const a=await(s.download?.());for(let e of o)n.sendMessage(e,{image:a,caption:t});e.reply(`Finalizando transmisión a ${o.length} grupo(s) ✓`)}else{for(let e of o)n.sendMessage(e,{text:t});e.reply(`Finalizando transmisión a ${o.length} grupo(s) ✓`)}};handler.help=["bcgc <mensaje>"],handler.tags=["propietario"],handler.command=/^(broadcastgroup|bcgc)$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/