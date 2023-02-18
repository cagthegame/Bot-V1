/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:n,text:a,participants:t,command:r})=>{if(!a)return e.reply(`*[ ! ] Invente un asunto*\n_Ejemplo:_\n\n${Prefijo+r} es gey?\n`);if(a.length<5)return e.reply("*[ ! ] El asunto es muy corto*");var l=[];t.map((async e=>{l.push(e.id.replace("c.us","s.whatsapp.net"))}));const o=l[Math.floor(Math.random()*l.length)];await n.sendMessage(e.chat,{text:`\n👉 @${o.split("@")[0]}\n`,mentions:[o]},{ephemeralExpiration:86400,quoted:e}),reacMoji(e.chat,n,"🤹‍♂️",e)};handler.help=["quien"],handler.tags=["games"],handler.command=/^quien$/i,handler.limit=!0,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/