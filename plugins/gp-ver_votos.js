/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:o,groupMetadata:a,usedPrefix:e})=>{const t=n.chat;if(o.vote=o.vote?o.vote:{},!(t in o.vote))return n.reply(`*[ ! ] Aun no hay una votaciΓ³n activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${Prefijo}votacion`);const[r,i,l]=o.vote[t],s=`\`\`\`[ VOTOS ACTUALES ]\`\`\`\n\nπ *Razon:* ${r} <=\n\nπ\nβ£π«\nβ£ββ± Votos a favor [β]\n${i.map(((n,o)=>`β£ ${o+1}. @${n.split`@`[0]}`)).join("\n")?i.map(((n,o)=>`β£ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"β£ Aun no hay :v"}\nββββ± Total: ${i.length}\n\nπ\nβ£π₯\nβ£ββ± Votos en contra [X]\n${l.map(((n,o)=>`β£ ${o+1}. @${n.split`@`[0]}`)).join("\n")?l.map(((n,o)=>`β£ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"β£ Aun no hay :v"}\nββββ± Total: ${l.length}\n\nUse el comando ${Prefijo}reiniciarvotos para reiniciar la votacion β`.trim();n.reply(s,null,{mentions:o.parseMention(s)})};handler.help=["vervotos"],handler.tags=["grupos"],handler.command=/^vervotos$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/