/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{text:t,command:r})=>{if(db.data.sticker=db.data.sticker||{},!e.quoted)return e.reply(`Responda un sticker *${Prefijo+r}*`);if(!e.quoted.fileSha256)return e.reply("Falta hash SHA256(sticker)");if(!t)return e.reply(`Ejemplo de uso:\n\n${Prefijo+r} ${Prefijo}menu\n`);let a=db.data.sticker;const d=e.quoted.fileSha256.toString("base64");if(a[d]&&a[d].locked)return e.reply("No tienes permiso para realizar esta solicitud.");a[d]={text:t,mentionedJid:e.mentionedJid,creator:e.sender,at:+new Date,locked:!1},e.reply("Completado correctamente ✓")};handler.help=["setcmd <texto>"],handler.tags=["herramienta"],handler.command=/^setcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/