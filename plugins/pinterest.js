/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,text:t,args:s})=>{if(!s[0])return e.reply("Que desea buscar en pinterest?");const r=await a.getName(e.sender),n=encodeURIComponent(t),i=e.reply(MultiNK.Bsqd(r));await i;try{const s=await fetchJson(`https://latam-api.vercel.app/api/pinterest?apikey=${MyApiKey}&q=${n}`);if(!s.imagen)return e.reply("[ ! ] Sin resultados");a.sendMessage(e.chat,{image:{url:s.imagen},caption:`*[ PINTEREST-CHAN ] ✓*\n*~> Resultado para* : _${t}_`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${r} => ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["pinterest <busqueda>"],handler.tags=["busqueda"],handler.command=/^pinterest$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/