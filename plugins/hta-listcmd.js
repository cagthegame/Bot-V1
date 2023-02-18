/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{conn:n})=>{n.reply(e.chat,`\n*LISTA HASH*\n\n${Object.entries(db.data.sticker).map((([e,n],a)=>`[ ${a+1} ]\n*Identificador*: ${n.locked?`${e} ~(Bloqueado)~`:e}\n*Funcion ejecutable* : ${n.text}`)).join("\n\n")}\n`.trim(),null,{mentions:Object.values(db.data.sticker).map((e=>e.mentionedJid)).reduce(((e,n)=>[...e,...n]),[])})};handler.help=["listcmd"],handler.tags=["herramienta"],handler.command=/^listcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/