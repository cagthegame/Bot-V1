/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{conn:r,text:a})=>{const i=global.owner.filter((([e,r])=>e&&r)),n=db.data.settings[r.user.jid]||{},t=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?r.user.jid:e.sender,d=await r.getName(e.sender);if(!n.restrict)return e.reply("[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!");for(let[n]of i){const i=e.mentionedJid[0]?e.mentionedJid[0]:e.quoted?e.quoted.sender:a.replace(/[^0-9]/g,"")+"@s.whatsapp.net";if(i.startsWith("51995386439"))return e.reply("\nª\n");if(i.startsWith(n))return e.reply("\nª\n");if(i.startsWith(r.user.id.split(":")[0]))return e.reply("Me odias? :,c");isNaN(i.slice(0,-15)&&e.mentionedJid[0]&&a)?(await r.groupParticipantsUpdate(e.chat,[i],"remove"),await delay(1e3),e.reply(`*El participante @${i.slice(0,-15)} fue eliminado del grupo ✓*\n_Accion ejecutada por ${d}_`,null,{mentions:[t]})):e.reply("A que usuario desea eliminar!?\nPor favor etiqueta a uno")}};handler.help=["ban @usuario"],handler.tags=["propietario","grupos"],handler.command=/^(ban|kick|funar|sacar|echar)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;const delay=e=>new Promise((r=>setTimeout(r,e)));

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/