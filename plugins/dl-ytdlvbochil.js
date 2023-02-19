/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{youtubedl,youtubedlv2,youtubedlv3}from"@bochilteam/scraper";let handler=async(e,{conn:a,args:t})=>{if(!t[0])return e.reply(`Que desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+command} https://youtu.be/ed-6VSF-GGc`);if(!isUrl(t[0])&&!t[0].includes("youtu"))return reply("*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n");const i=await a.getName(e.sender),o=e.reply(MultiNK.Proces(i));await o;try{const i=(t[1]||"360")+"p",o=t[0],r=await youtubedl(o).catch((async()=>await youtubedlv2(o))).catch((async()=>await youtubedlv3(o))),n=await r.video[i].download(),l=await r.title,u=await r.video[i].fileSizeH;if(u.split("MB")[0]>=50)return e.reply("[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v");await a.sendMessage(e.chat,{video:{url:n},fileName:`${l}.mp4`,mimetype:"video/mp4",caption:`Titulo: ${l}\nTamaño: ${u}\nExtencion: .mp4`},{quoted:e})}catch{await a.reply(e.chat,MultiNK.Error1(),e)}};handler.help=["ytvbochi <link>"],handler.tags=["servicio"],handler.command=/^ytvbochi$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/