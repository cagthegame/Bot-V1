/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{sticker}from"../lib/sticker.js";import uploadFile from"../lib/uploadFile.js";import uploadImage from"../lib/uploadImage.js";import{webp2png}from"../lib/webp2mp4.js";import moment from"moment-timezone";let handler=async(e,{conn:o,args:n,text:t,command:a,groupMetadata:i})=>{const r=await o.getName(e.sender),l=moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("DD/MM/YY HH:mm:ss"),m=(r||"-").length>4?`🧰 ${r}\n`:"",s=(i.subject||"-").length>9?`\n⚙️ ${i.subject}\n`:"",d=t.length>0?`\n\n"${t}"`:`\n\n⌚ ${l}`;let p=!1;try{let t=e.quoted?e.quoted:e,i=(t.msg||t).mimetype||t.mediaType||"";if(/webp|image|video/g.test(i)){if(/video/g.test(i)&&(t.msg||t).seconds>11)return e.reply("*[ ! ] Máxima duración de vídeo son 10 segundos!*");const n=await(t.download?.());if(!n)return e.reply(`*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 10 segundos máximo_ ✓`);let l;e.reply(MultiNK.Proces(r));try{p=await sticker(n,!1,"",`\n${m}${s}\n🤖 ${NombreDelBot}${d}`),reacMoji(e.chat,o,"⚙️",e)}catch(e){console.error(e)}finally{p||(/webp/g.test(i)?l=await webp2png(n):/video/g.test(i)&&(l=await uploadFile(n)),l&&"string"==typeof l||(l=await uploadImage(n)),p=await sticker(!1,l,"",`\n${m}${s}\n🤖 ${NombreDelBot}${d}`))}}else if(n[0]){if(!isUrl(n[0]))return e.reply("[ ! ] Url inválido, prueba con otro ;3");p=await sticker(!1,n[0],"",`\n${m}${s}\n🤖 ${NombreDelBot}\n\n⌚ ${l}\n\n\n\n\n\n\n\n\n\n\n`)}}catch(e){console.error(e),p||(p=e)}finally{if(!p)return e.reply(`*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 10 segundos máximo_ ✓`);o.sendFile(e.chat,p,"sticker.webp","",e)}};handler.help=["sticker [multimedia/url]"],handler.tags=["conversor"],handler.command=/^s(tic?ker)?(gif)?$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/