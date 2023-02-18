/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import cp,{exec as _exec}from"child_process";import{promisify}from"util";const exec=promisify(_exec).bind(cp);let handler=async(e,{conn:r,isOwner:t,command:a,text:n})=>{if(r.user.jid!=r.user.jid)return;let d;e.reply("_Ejecutando..._");try{d=await exec(a.trimStart()+" "+n.trimEnd())}catch(e){d=e}finally{let{stdout:r,stderr:t}=d;r.trim()&&e.reply(r),t.trim()&&e.reply(t)}};handler.help=["$ "],handler.tags=["avanzado"],handler.customPrefix=/^[$] /,handler.command=new RegExp,handler.owner=!0;export default handler;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/