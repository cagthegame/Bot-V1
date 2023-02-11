/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import a from"fs";let handler=async(e,{conn:p,text:t,command:l,args:r})=>{if(!r[0])return e.reply(`Cual es su b\xfasqueda?`);let i=await p.getName(e.sender),s=encodeURIComponent(t),n=e.reply(MultiNK.Bsqd(i));await n;try{let d=await fetchJson(`https://latam-api.vercel.app/api/wpp?apikey=${MyApiKey}&q=${s}`),m=await fetchJson(`https://latam-api.vercel.app/api/wpp2?apikey=${MyApiKey}&q=${s}`),o=await fetchJson(`https://latam-api.vercel.app/api/wpp3?apikey=${MyApiKey}&q=${s}`);p.sendMessage(e.chat,{image:{url:d.wallpaper||m.wallpaper||o.imagen},caption:`${"┏━⊱ Wallpaper : "+t}${"\n┗⊱  Solicitada por : @"+e.sender.replace(/@.+/,"")}`,mentions:[e.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:a.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${i} => ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(u){e.reply(MultiNK.Error0())}};handler.help=["wallpaper <busqueda>"],handler.tags=["busqueda"],handler.command=/^(wallpaper|wpp|fondo)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/