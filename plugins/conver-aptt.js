/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{toPTT}from"../lib/converter.js";import fs from"fs";let handler=async(t,{conn:e,usedPrefix:o,command:a,text:n})=>{const i=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"],d=t.quoted?t.quoted:t,r=(t.quoted?t.quoted:t.msg).mimetype||"";if(!/video|audio/.test(r))return t.reply(`Envie ó Responda un (video/audio grabado) con el comando:\n\n${o+a}`);const p=await(d.download?.());if(!p)throw"No se pudo descargar el archivo";const c=await toPTT(p,"mp4");if(!c.data)return t.reply("No se pudo convertir a audio");await e.sendMessage(t.chat,{audio:c.data,contextInfo:{externalAdReply:{title:"🎤 Convertido a grabación 🎶",body:".ptt ✓",previewType:"PHOTO",thumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:i[Math.floor(Math.random()*i.length)]}},mimetype:"audio/mp4",fileName:`${n||"audio"}.mp3`,ptt:!0},{quoted:t}),reacMoji(t.chat,e,"⚙️",t)};handler.help=["aptt"],handler.tags=["conversor"],handler.command=/^(avn|aptt|tovn|toptt)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/