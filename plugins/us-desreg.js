/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";import{createHash}from"crypto";let handler=async function(e,{args:r}){if(!r[0])return e.reply("Por favor introduzca su código de registro");const d=db.data.users[e.sender],a=createHash("md5").update(e.sender).digest("hex");if(r[0]!==a)return e.reply("[ ! ] Codigo de registro incorrecto");d.registered=!1,e.reply("[✓] Su registro fue eliminado de la base de datos correctamente 🗑️")};handler.help=["desreg <código de registro>"],handler.tags=["casual"],handler.command=/^(desreg|unreg)$/i,handler.register=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/