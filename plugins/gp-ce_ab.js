/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:n,args:a,text:r,usedPrefix:t,command:o})=>{if("cgpen"==o){if("segundos"==a[1])var s=a[0]+"000";else if("minutos"==a[1])s=a[0]+"0000";else{if("horas"!=a[1])return e.reply(`*En que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${t+o} 10 segundos`);s=a[0]+"00000"}n.sendMessage(e.chat,{text:`*El grupo se cerrará en ${r}*\n_Accion ejecutada por : @${e.sender.replace(/@.+/,"")}_`,mentions:[e.sender]}),setTimeout((()=>{n.groupSettingUpdate(e.chat,"announcement")}),s)}else"agp"==o&&n.groupSettingUpdate(e.chat,"not_announcement")};handler.help=["cgpen <tiempo>","agp"],handler.tags=["grupos","admins"],handler.command=/^(cgpen|agp)$/i,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/