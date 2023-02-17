/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:r,command:t})=>{if(!r)return a.reply("*A que administrador desea quitarle su puesto?*");if(!r.match(/@/g))return a.reply(`Ejemplo de uso:\n\n${Prefijo+t} @+51995xxx\n`);const n=r.replace(/[^0-9]/g,"")+"@s.whatsapp.net";await e.groupParticipantsUpdate(a.chat,[n],"demote").catch((a=>{console.log(a)})),reacMoji(a.chat,e,"⚔️",a)};handler.help=["quitarpoder @usuario"],handler.tags=["grupos","admins"],handler.command=/^(quitarpoder|degradar|demote|quitaradmin)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/