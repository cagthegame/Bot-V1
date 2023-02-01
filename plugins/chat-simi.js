/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"node-fetch";let handler=async(e,{text:a,command:t})=>{if(!a)return e.reply("Y el texto ...?");try{let i=await fetchJson(`https://latam-api.vercel.app/api/simisimi?apikey=${MyApiKey}&idioma=${MultiNK.Lengua()}&chat=${encodeURIComponent(a)}`);e.reply(i.respuesta?i.respuesta:"-")}catch(r){e.reply("No hay sistema!")}};handler.help=["simi"].map(e=>e+" <texto>"),handler.tags=[""],handler.command=/^(simi|bot)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/