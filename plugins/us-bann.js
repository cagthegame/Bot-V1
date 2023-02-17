/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(a,{conn:e,text:r})=>{if(!r)return a.reply("A quien desea banear?");let n;if(n=a.isGroup?a.mentionedJid[0]:a.chat,!n)return a.reply("[ ! ] Por favor etiquete al usuario que desea banear");db.data.users[n].banned=!0,e.reply(a.chat,`Usuario baneado, ${n} ya no podra usar al bot [ ! ]`,a)};handler.help=["banear @usuario"],handler.tags=["propietario"],handler.command=/^banear$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/