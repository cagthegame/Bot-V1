/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,command:t,text:r,args:i})=>{if(!r)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+t} https://youtu.be/vbhVFqYwxLM`);if(!isUrl(i[0])&&!i[0].includes("youtu"))return e.reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const n=await a.getName(e.sender),o=e.reply(MultiNK.Proces(n));await o;const l=encodeURIComponent(r);try{const t=await fetchJson(`https://latam-api.vercel.app/api/ytmp3?apikey=${MyApiKey}&q=${l}`);await getBuffer(t.logo);await a.sendMessage(e.chat,{document:{url:t.descarga},mimetype:"audio/mpeg",fileName:`${t.titulo}.mp3`,jpegThumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg")},{quoted:e}).catch((a=>{e.reply(MultiNK.Error1())}))}catch(a){e.reply(MultiNK.Error0())}};handler.help=["yta <link>"],handler.tags=["servicio"],handler.command=/^yta$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/