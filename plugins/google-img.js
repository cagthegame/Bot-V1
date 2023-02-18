/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,text:t,args:n})=>{if(!n[0])return e.reply("Que desea buscar en Google imágenes?");const s=await a.getName(e.sender),r=encodeURIComponent(t),i=e.reply(MultiNK.Bsqd(s));await i;try{const n=await fetchJson(`https://latam-api.vercel.app/api/g_img?apikey=${MyApiKey}&q=${r}`);if(!n.imagen)return e.reply("[ ! ] Sin resultados");a.sendMessage(e.chat,{image:{url:n.imagen},caption:`*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${t}_\n*~> Tamaño* : _${n.ancho} x ${n.altura} PX_`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${s} => ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["imagen <busqueda>"],handler.tags=["busqueda"],handler.command=/^imagen$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/