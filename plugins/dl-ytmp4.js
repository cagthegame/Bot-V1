/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:n,args:r})=>{if(!n)return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(r[0])&&!r[0].includes("youtu"))return e.reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const o=await t.getName(e.sender),i=e.reply(MultiNK.Proces(o));await i;const l=encodeURIComponent(n);try{const a=await fetchJson(`https://latam-api.vercel.app/api/ytmp4_2?apikey=${MyApiKey}&q=${l}`);t.sendMessage(e.chat,{video:{url:a.descarga},fileName:`${a.titulo}.mp4`,mimetype:"video/mp4",caption:`Titulo: ${a.titulo}\nTamaño: ${a.peso}\nExtencion: .mp4`},{quoted:e}).catch((t=>{e.reply(MultiNK.Error1())}))}catch(t){e.reply(MultiNK.Error0())}};handler.help=["ytmp4 <link>"],handler.tags=["servicio"],handler.command=/^ytmp4$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/