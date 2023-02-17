/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{command:r,text:a})=>{let n;n=e.isGroup?e.mentionedJid[0]?e.mentionedJid[0]:e.quoted?e.quoted.sender:!!a&&a.replace(/[^0-9]/g,"")+"@s.whatsapp.net":a?a.replace(/[^0-9]/g,"")+"@s.whatsapp.net":e.chat;const d=db.data.users[n];if(!n)return e.reply(`Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${Prefijo+r} @${e.sender.split`@`[0]}`);d.premium=!1,d.premiumTime=0,e.reply(`*${d.name}* dejó de ser premium`)};handler.help=["delprem [@usuario]"],handler.tags=["propietario"],handler.command=/^delprem$/i,handler.group=!0,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/