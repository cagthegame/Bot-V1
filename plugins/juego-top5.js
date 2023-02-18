/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:t,participants:e,text:a})=>{if(!a)return n.reply("*[ ! ] Que top desea generar?*");if(a.length<3)return n.reply("*[ ! ] El texto es muy corto*");const r=e[Math.floor(Math.random()*e.length)].id.split("@")[0],l=e[Math.floor(Math.random()*e.length)].id.split("@")[0],o=e[Math.floor(Math.random()*e.length)].id.split("@")[0],h=e[Math.floor(Math.random()*e.length)].id.split("@")[0],d=e[Math.floor(Math.random()*e.length)].id.split("@")[0],i=`*[ TOP 5 ${a} ]*\n_Generador_ : ${await t.getName(n.sender)}\n\n✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵\n\n▪︎ @${r} \n\n▪︎ @${l} \n\n▪︎ @${o} \n\n▪︎ @${h} \n\n▪︎ @${d} \n\n✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵\n`;n.reply(i,n.chat,{mentions:t.parseMention(i)})};handler.help=["top5"],handler.tags=["games"],handler.command=/^top5$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/