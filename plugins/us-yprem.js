/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(r,{conn:i,text:a,command:n,args:m})=>{let d;d=r.isGroup?r.mentionedJid[0]?r.mentionedJid[0]:!!r.quoted&&r.quoted.sender:r.chat;let o=e.data.users[d];if(!d)return r.reply(`Por favor etiquete o mencion\xe9 a alguien!`);if(a.replace("@"+d.split`@`[0],"").trim(),!m[1])return r.reply(`Por favor indique el n\xfamero de dias`);if(isNaN(m[1]))return r.reply(`Solo n\xfameros!

Ejemplo de uso:
${Prefijo+n} @${r.sender.split`@`[0]} 1`);if(8<=m[1])return r.reply("[ ! ] Maximo 7 dias");var t=864e5*m[1],l=new Date*1;l<o.premiumTime?o.premiumTime+=t:o.premiumTime=l+t,o.premium=!0,r.reply(`*[ USUARIO PREMIUM ]*
🔖 *Nombre:* ${o.name}
📆 *Dias:* ${m[1]} dia(s)
📉 *Tiempo restante:* ${o.premiumTime-l}MS`)};handler.help=["addprem [@usuario] <dias>"],handler.tags=["propietario"],handler.command=/^(addprem)$/i,handler.group=!0,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/