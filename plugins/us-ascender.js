/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:e,text:r,command:n})=>{if(!r)return a.reply("*A que participante desea convertirlo en administrador?*");if(!r.match(/@/g))return a.reply(`Ejemplo de uso:\n\n${Prefijo+n} @+51995...\n`);const d=r.replace(/[^0-9]/g,"")+"@s.whatsapp.net";await e.groupParticipantsUpdate(a.chat,[d],"promote").catch((a=>{console.log(a)})),reacMoji(a.chat,e,"⚔️",a)};handler.help=["darpoder @usuario"],handler.tags=["grupos","admins"],handler.command=/^(darpoder|ascender|promote|daradmin)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/