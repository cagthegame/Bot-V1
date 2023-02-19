/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{youtubedl,youtubedlv2,youtubedlv3}from"@bochilteam/scraper";let handler=async(e,{conn:a,args:t})=>{if(!t[0])return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+command} https://youtu.be/ed-6VSF-GGc`);if(!isUrl(t[0])&&!t[0].includes("youtu"))return reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const i=await a.getName(e.sender),o=e.reply(MultiNK.Proces(i));await o;try{const i=await youtubedl(t[0]).catch((async()=>await youtubedlv2(t[0]))).catch((async()=>await youtubedlv3(t[0]))),o=await i.audio["128kbps"].download(),r=await i.title;if((await i.audio["128kbps"].fileSizeH).split("MB")[0]>=15)return e.reply("[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v");await a.sendMessage(e.chat,{audio:{url:o},contextInfo:{externalAdReply:{title:`${r}`,body:`${NombreDelBot} 🔥`,previewType:"PHOTO",thumbnailUrl:i.thumbnail,thumbnail:"",sourceUrl:`${o}`}},mimetype:"audio/mp4",fileName:`${r}.mp3`},{quoted:e})}catch{await a.reply(e.chat,MultiNK.Error1(),e)}};handler.help=["ytabochi <link>"],handler.tags=["servicio"],handler.command=/^ytabochi$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/