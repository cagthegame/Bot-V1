/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:n,text:r})=>r?r.length>=26?e.reply("*[ ! ] máximo de carácteres es 25*"):(await a.groupUpdateSubject(e.chat,r),void reacMoji(e.chat,a,"✍️",e)):e.reply("*[ ! ] Ingrese un titulo/nombre/apodo con el cual se actualizará el asunto del grupo actual*");handler.help=["gpname <texto>"],handler.tags=["grupos","admins"],handler.command=/^(gpname|namegp|setname)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/