/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{execSync as r}from"child_process";let handler=async a=>{var t=r("git remote set-url origin https://github.com/NeKosmic/NK-BOT-MD.git && git pull");a.reply(t.toString())};handler.help=["actualizarbot"],handler.tags=["propietario"],handler.command=/^(actualizarbot|actualizar|update)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/