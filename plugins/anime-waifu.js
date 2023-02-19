/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import fs from"fs";let handler=async(e,{conn:a,command:t})=>{const i=await a.getName(e.sender),r=e.reply(MultiNK.Proces(i));await r;try{const r=await fetch("https://latam-api.vercel.app/api/waifu?apikey="+MyApiKey),n=await r.json();a.sendMessage(e.chat,{image:{url:n.imagen},caption:`┏━⊱ Imagen : ${t}\n┗⊱ Solicitada por : @${e.sender.replace(/@.+/,"")}`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${i} [_>] ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["waifu"],handler.tags=["animeuwu"],handler.command=/^waifu$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/