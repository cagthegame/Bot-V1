/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{sticker}from"../lib/sticker.js";import{stickerLine,stickerTelegram}from"@bochilteam/scraper";let handler=async(e,{conn:n,args:r,usedPrefix:t,command:s})=>{const i=/tele/i.test(s);if(!r[0])return e.reply(`*Este comando es para obtener stickers de ${i?"Telegram":"Line"}*\n\nEjemplo de uso:\n${t+s} anime`);const a=await(i?stickerTelegram:stickerLine)(r[0]);e.reply(`\n*Resultados encontrados para ~${r[0]}~, total:* ${(a[0]?.stickers||a).length}\n_Enviando stickers..._\n`.trim());for(let r of a[0]?.stickers||a){const t=await sticker(!1,r.sticker||r,"",`\n< ${NombreDelBot} >\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[ NeKosmic ]`);await n.sendFile(e.chat,t,"sticker.webp","",e).catch(console.error),await delay(1500)}};handler.help=["telesticker <buscar>","linesticker <buscar>"],handler.tags=["conversor"],handler.command=/^(telesticker|linesticker)$/i,handler.limit=5;export default handler;const delay=e=>new Promise((n=>setTimeout(n,e)));

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/