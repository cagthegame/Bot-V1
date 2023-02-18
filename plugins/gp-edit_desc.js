/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:d,text:r})=>r?r.length>=513?reply("*[ ! ] Máximo de carácteres 512*"):(await a.groupUpdateDescription(e.chat,r),void reacMoji(e.chat,a,"✍️",e)):e.reply("*[ ! ] Ingrese un texto con el cual se actualizará la descripción del grupo actual*");handler.help=["gpdesc <texto>"],handler.tags=["grupos","admins"],handler.command=/^(gpdesc|descgp|setdesk|setdesc)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/