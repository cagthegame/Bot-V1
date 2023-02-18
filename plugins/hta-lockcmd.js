/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{command:a})=>{if(!e.quoted)return e.reply("Responda un mensaje!");if(!e.quoted.fileSha256)return e.reply("Falta hash SHA256");const n=db.data.sticker,r=e.quoted.fileSha256.toString("hex");if(!(r in n))return e.reply("[ ! ] Hash no encontrado en la base de datos");n[r].locked=!/^un/i.test(a),e.reply("Hecho ✓")};handler.help=["un",""].map((e=>e+"lockcmd")),handler.tags=["herramienta"],handler.command=/^(un)?lockcmd$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/