/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:o,groupMetadata:a,usedPrefix:e})=>{const t=n.chat;if(o.vote=o.vote?o.vote:{},!(t in o.vote))return n.reply(`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${Prefijo}votacion`);const[r,i,l]=o.vote[t],s=`\`\`\`[ VOTOS ACTUALES ]\`\`\`\n\n📋 *Razon:* ${r} <=\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${i.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n")?i.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"┣ Aun no hay :v"}\n┗━━⊱ Total: ${i.length}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n${l.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n")?l.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"┣ Aun no hay :v"}\n┗━━⊱ Total: ${l.length}\n\nUse el comando ${Prefijo}reiniciarvotos para reiniciar la votacion ✓`.trim();n.reply(s,null,{mentions:o.parseMention(s)})};handler.help=["vervotos"],handler.tags=["grupos"],handler.command=/^vervotos$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/