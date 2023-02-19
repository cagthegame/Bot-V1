/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{toAudio}from"../lib/converter.js";import fs from"fs";let handler=async(o,{conn:e,usedPrefix:t,command:a,text:i})=>{const n=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"],d=o.quoted?o.quoted:o,r=(o.quoted?o.quoted:o.msg).mimetype||"";if(!/video|audio/.test(r))return o.reply(`Envie ó Responda un (video/grabación) con el comando:\n\n${t+a}`);const m=await(d.download?.());if(!m)throw"No se pudo descargar el archivo";const p=await toAudio(m,"mp4");if(!p.data)return o.reply("No se pudo convertir a audio");await e.sendMessage(o.chat,{audio:p.data,contextInfo:{externalAdReply:{title:"🎞️ Convertido a audio 🎶",body:".mp3 ✓",previewType:"PHOTO",thumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:n[Math.floor(Math.random()*n.length)]}},mimetype:"audio/mp4",fileName:`${i||"audio"}.mp3`},{quoted:o}),reacMoji(o.chat,e,"⚙️",o)};handler.help=["amp3"],handler.tags=["conversor"],handler.command=/^(amp3|aaudio|tomp3)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/