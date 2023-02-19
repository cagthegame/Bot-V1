/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import fs from"fs";let handler=async(e,{conn:a,command:t})=>{const r=await a.getName(e.sender),i=["737000000000000","69000000000","707000000000000000"],n=e.reply(MultiNK.Proces(r));await n;try{const n=await fetch("https://latam-api.vercel.app/api/"+t+"?apikey="+MyApiKey),s=await n.json();a.sendMessage(e.chat,{image:{url:s.imagen},caption:`┏━⊱ Imagen : ${t}\n┗⊱ Solicitada por : @${e.sender.replace(/@.+/,"")}`,fileLength:i[Math.floor(Math.random()*i.length)],mentions:[e.sender]},{ephemeralExpiration:86400,quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${r} [_>] ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["waifu_hd","rostro_4k"],handler.tags=["animeuwu"],handler.command=/^(waifu_hd|rostro_4k)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/