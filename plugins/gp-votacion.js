/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:o,text:a,isAdmin:e,isOwner:t,command:r,groupMetadata:i})=>{if(n.isGroup&&!e&&!t)return dfail("admin",n,o);o.vote=o.vote?o.vote:{};const v=await o.getName(n.sender),l=n.chat;if(l in o.vote)return n.reply(`*[ ! ] Aun hay una votacion activa en el grupo*\n_Use el comando_ : ${Prefijo}reiniciarvotos _para crear nueva votacion_`);if(!a)return n.reply(`*Ingrese un motivo para la votacion, ejemplo:*\n\n${Prefijo+r} el admin es god?\n`);if(a.length<7)return n.reply("El motivo para la votación es muy corta!");const c=`⚡ ${"@"+n.sender.split("@")[0]} *Comenzó una nueva votacion en el grupo:* ${i.subject}\n\n_Como participar en la votación :_${String.fromCharCode(8206).repeat(850)}\n\n┏⊱   ${Prefijo}sivotar\n┗━⊱  Para dar un voto positivo ✔️\n\n┏⊱   ${Prefijo}novotar \n┗━⊱  Para dar un voto negativo ❌\n\n┏⊱   ${Prefijo}vervotos \n┗━⊱  Para verificar los votos 👀\n\n┏⊱   ${Prefijo}reiniciarvotos \n┗━⊱  Para eliminar una votacion activa ♻️`;await n.reply(c,null,{mentions:o.parseMention(c)}),o.vote[l]=[a,[],[]];const s=`\n\`\`\`[ VOTACIÓN ]\`\`\`\n\n📋 *Razon:* ${o.vote[n.chat][0]}\n👤 *Encuestador:* ${v}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n┋\n┗━━⊱ Total: ${o.vote[n.chat][1].length}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n┋\n┗━━⊱ Total: ${o.vote[n.chat][2].length}`;o.sendButton(n.chat,s,NombreDelBot+" 🔥",null,[["Si Votar ✔️",`${Prefijo}sivotar`],["No Votar ❌",`${Prefijo}novotar`]],n,{mentions:o.parseMention(s)})};handler.help=["votacion [razon]"],handler.tags=["admins","grupos"],handler.command=/^(votacion|votación)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/