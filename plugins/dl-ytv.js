/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:t,command:a,text:r,args:i})=>{if(!r)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(i[0])&&!i[0].includes("youtu"))return reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const n=await t.getName(e.sender),l=e.reply(MultiNK.Proces(n));await l;const o=encodeURIComponent(r);try{const a=await fetchJson(`https://latam-api.vercel.app/api/ytmp4?apikey=${MyApiKey}&q=${o}`);await t.sendMessage(e.chat,{document:{url:a.descarga},mimetype:"video/mp4",fileName:`${a.titulo}.mp4`,jpegThumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:e}).catch((t=>{e.reply(MultiNK.Error1())}))}catch(t){e.reply(MultiNK.Error0())}};handler.help=["ytv <link>"],handler.tags=["servicio"],handler.command=/^ytv$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/