/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:r,args:l})=>{if(!r)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/PPNzvu5RYq4`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const o=await t.getName(e.sender),n=e.reply(MultiNK.Proces(o));await n;const i=encodeURIComponent(r);try{const a=await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=${MyApiKey}&q=${i}`),r=await getBuffer(a.logo);t.sendMessage(e.chat,{audio:{url:a.descarga},contextInfo:{externalAdReply:{title:`${a.titulo}`,body:`${NombreDelBot} 🔥}`,previewType:"PHOTO",thumbnailUrl:"",thumbnail:r,sourceUrl:`${a.descarga}`}},mimetype:"audio/mpeg",fileName:`${a.titulo}.mp3`},{quoted:e}).catch((t=>{e.reply(MultiNK.Error1())}))}catch(t){e.reply(MultiNK.Error0())}};handler.help=["ytmp3 <link>"],handler.tags=["servicio"],handler.command=/^ytmp3$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/