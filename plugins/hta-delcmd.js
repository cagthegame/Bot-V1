/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{text:r})=>{let t=r;if(e.quoted&&e.quoted.fileSha256&&(t=e.quoted.fileSha256.toString("hex")),!t)return e.reply("No se encontraron hashes!");const a=db.data.sticker;if(a[t]&&a[t].locked)return e.reply("[ ! ] No tienes permiso para eliminar este sticker-cmd");delete a[t],e.reply("Eliminado correctamente ✓")};handler.help=["delcmd <texto>"],handler.tags=["herramienta"],handler.command=/^delcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/