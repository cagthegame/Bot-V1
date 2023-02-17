/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{conn:a,text:r})=>{if(!r)return e.reply("A quien desea desbanear?");let d;if(d=e.isGroup?e.mentionedJid[0]:e.chat,!d)return e.reply("[ ! ] Por favor etiquete al usuario que desea desbanear");db.data.users[d].banned=!1,a.reply(e.chat,`Usuario desbaneado, ${d} puede volver a usar al bot [✓]`,e)};handler.help=["desbanear @usuario"],handler.tags=["propietario"],handler.command=/^desbanear$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/