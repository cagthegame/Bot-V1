/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,command:t})=>{const n=await a.getName(e.sender),r=e.reply(MultiNK.Proces(n));await r;try{const r=await fetchJson(`https://latam-api.vercel.app/api/nekonime1?apikey=${MyApiKey}`);a.sendMessage(e.chat,{image:{url:r.imagen},caption:`┏━⊱ Imagen : ${t}\n┗⊱ Solicitada por : @${e.sender.replace(/@.+/,"")}`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${n} [_>] ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["neko"],handler.tags=["animeuwu"],handler.command=/^neko$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/