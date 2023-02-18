/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,text:t,participants:n,command:r})=>{if(!t)return e.reply(`*[ ! ] Agrege una razon para la ejecución*\nEjemplo: \n\n${Prefijo+r} Hoy muere un random :v\n`);if(t.length<9)return e.reply("*[ ! ] La razon es muy corta*");const i=await a.profilePictureUrl(e.sender,"image").catch((e=>"./multimedia/imagenes/avatar_contact.png"));try{var s=[];n.map((async e=>{s.push(e.id.replace("c.us","s.whatsapp.net"))}));const r=1e4,o=s[Math.floor(Math.random()*s.length)];if(o.startsWith(a.user.id.split(":")[0]))return e.reply("Hoy no muere nadie :D");a.sendMessage(e.chat,{text:`*[ Death Note ]* 📓\n\n┏━⊱ *Seleccinado:* @${o.split("@")[0]}\n┗⊱ *Razón de su ejecucion:* \n${t}\n\n_Tiene ${r%6e4/1e3} segundos para decir sus últimas palabras_\n`,mentions:[o]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:`⚰️@${o.split("@")[0]} 💀`,jpegThumbnail:await miniThumb(await getBuffer(i))}}}}),setTimeout((()=>{setTimeout((()=>{a.groupParticipantsUpdate(e.chat,[o],"remove").catch((a=>{e.reply(MultiNK.Error1())}))}),1e3),a.sendMessage(e.chat,{text:"Press [F]",mentions:[o]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:"C come una manzana* :v🍎",jpegThumbnail:fs.readFileSync("./multimedia/imagenes/press-f.jpg")}}}})}),r)}catch{e.reply("No se pudo usar el DeathNote...")}};handler.help=["deathnote"],handler.tags=["games"],handler.command=/^deathnote$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/