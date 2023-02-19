/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{generateWAMessageFromContent}from"@adiwajshing/baileys";import db from"../lib/database.js";let handler=async(e,{conn:a,command:t,text:n})=>{try{const o=encodeURIComponent(n),r=await fetchJson(`https://latam-api.vercel.app/api/ytplay2?apikey=${MyApiKey}&q=${o}`),i=1e3*r.duracion_s,s=db.data.users[e.sender];if(new Date-s.lagnet<i)return e.reply(`_Por favor espere ${clockString(s.lagnet+i-new Date)}antes de realizar otra solicitud_ \n~ᴱˡ ᵗᶦᵉᵐᵖᵒ ᵈᵉ ᵉˢᵖᵉʳᵃ ᵈᵉᵖᵉⁿᵈᵉ ᵈᵉ ˡᵃ ᵈᵘʳᵃᶜᶦᵒ́ⁿ ᵈᵉˡ ᵃᵘᵈᶦᵒ ᵃⁿᵗᵉʳᶦᵒʳᵐᵉⁿᵗᵉ ˢᵒˡᶦᶜᶦᵗᵃᵈᵒ~`);if(!n)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+t} mtc s3rl`);const l=await a.getName(e.sender),d=e.reply(MultiNK.Proces(l));await d;const c=await getBuffer(r.logo),u=generateWAMessageFromContent(e.chat,{extendedTextMessage:{text:`\n*✍️ Título:* ${r.titulo}\n*🎹 Autor:* ${r.autor}\n*🗜️ Tamaño:* ${r.peso+" Aprox."}\n*⏳ Duración:* ${r.duracion}\n\n\n\n _Enviando audio, espere..._\n`.trim(),contextInfo:{externalAdReply:{title:r.titulo,body:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",thumbnail:c,sourceUrl:"https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1"}}}},{quoted:e});await a.relayMessage(e.chat,u.message,{messageId:u.key.id}),s.lagnet=1*new Date,a.sendMessage(e.chat,{audio:{url:decodeURIComponent(r.descarga1)||r.descarga2},mimetype:"audio/mp4",fileName:`${r.titulo}.mp3`},{quoted:e}).catch((a=>{e.reply(`Ocurrio un error, por favor use el comando:\n\n${Prefijo}audio ${n}\n`)}))}catch(a){e.reply(MultiNK.Error0())}};handler.help=["play <texto>"],handler.tags=["servicio"],handler.command=/^play$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/