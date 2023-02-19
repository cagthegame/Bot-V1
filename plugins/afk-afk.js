/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(a,{text:e,conn:n})=>{const o=db.data.users[a.sender];return e?e.length<10?a.reply("[ ! ] El motivo es muy corto"):(o.afk=+new Date,o.afkReason=e,await n.sendMessage(a.chat,{text:`*Se activo la función AFK exitosamente*\n\n➸ *Usuario*: ${n.getName(a.sender)}\n➸ *Razon*: ${e}`},{quoted:a}),void reacMoji(a.chat,n,"💤",a)):a.reply(`Por favor diga su motivo para irse AFK\nEjemplo de uso : \n${Prefijo}afk iré al baño :v`)};handler.help=["afk [razon]"],handler.tags=["casual"],handler.command=/^afk$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/