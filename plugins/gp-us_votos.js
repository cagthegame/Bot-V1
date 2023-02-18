/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:o,command:t})=>{const e=n.chat;if(o.vote=o.vote?o.vote:{},!(e in o.vote))return n.reply(`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${Prefijo}votacion`);if(o.vote[e][1].concat(o.vote[e][2]).includes(n.sender))return n.reply("*[ ! ] No puedes volver a votar*");if(/sivotar/i.test(t)){o.vote[e][1].push(n.sender);var a="👍"}else if(/novotar/i.test(t)){o.vote[e][2].push(n.sender);a="👎"}const[r,i,s]=o.vote[e],v=`\`\`\`[ VOTACIÓN ]\`\`\`\n\n📋 *Razon:* ${r}\n✍️ *Votante:* ${"@"+n.sender.split("@")[0]}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${i.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n")?i.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"┣ Aun no hay :v"}\n┗━━⊱ Total: ${i.length}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n${s.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n")?s.map(((n,o)=>`┣ ${o+1}. @${n.split`@`[0]}`)).join("\n"):"┣ Aun no hay :v"}\n┗━━⊱ Total: ${s.length}`.trim();await o.sendButton(n.chat,v,NombreDelBot+" 🔥",null,[["Si Votar ✔️",`${Prefijo}sivotar`],["No Votar ❌",`${Prefijo}novotar`]],n,{mentions:o.parseMention(v)}),reacMoji(n.chat,o,a,n)};handler.help=["sivotar","novotar"],handler.tags=["grupos"],handler.command=/^(sivotar|novotar)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/