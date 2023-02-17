/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{addExif}from"../lib/sticker.js";let handler=async(n,{conn:e,text:r,command:t})=>{if(!n.quoted)return n.reply("Responda un sticker!");const a=["──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█","───▄▄▄\n─▄▀░▄░▀▄\n─█░█▄▀░█\n─█░▀▄▄▀█▄█▄▀\n▄▄█▄▄▄▄███▀","──────▄▀─\n─█▀▀▀█▀█─\n──▀▄░▄▀──\n────█────\n──▄▄█▄▄──","──────────▄\n────────▄██\n─▄▀██▀█▀█▀███▀\n▀▀▀▀▀████▀▀▀\n──────▀██","▀▀▀▀█▀▀▀▀\n─▄▀█▀▀█──────▄\n█▄▄█▄▄██████▀\n▀▀█▀▀▀█▀▀\n─▀▀▀▀▀▀▀","───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█"];let o=!1;try{let[i,l]=r.split`|`,d=n.quoted.mimetype||"";if(!/webp/.test(d))return n.reply(`Envie ó Responda un sticker con el comando ${Prefijo+t}`);let c=await n.quoted.download();if(!c)return n.reply("Responda un sticker!");o=await addExif(c,i||"",l||(i?"":`\n- [ ${NombreDelBot} ] -\n\n\n${pickRandom(a)}`))}catch(n){console.error(n),Buffer.isBuffer(n)&&(o=n)}finally{if(!o)throw"[!] La conversión falló";e.sendFile(n.chat,o,"wm.webp","",n,!1,{asSticker:!0})}};handler.help=["robar <paquete>|<autor>"],handler.tags=["herramienta"],handler.command=/^robar$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/