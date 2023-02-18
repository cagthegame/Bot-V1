/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:n,text:r,command:a})=>{let t=await n.getName(e.sender),l=[];const o=r.split("|");if(!o[1])return e.reply("*[ ! ] Use el formato*\n\n"+Prefijo+a+" Mensaje|elección1|elección2\n");if(o[12])return e.reply("*Ejemplo de uso correcto* :\n\n"+Prefijo+a+" En este grupo hay mas|hombres|mujeres\n");for(let e=1;e<o.length;e++)l.push([o[e]]);const s=`*📊 Encuesta realizada por* : ${t}\n\n*- Mensaje:* ${r.split("|")[0]}`;return n.sendPoll(e.chat,s,l,e)};handler.help=["encuesta"],handler.tags=["grupos"],handler.command=/^encuesta$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/