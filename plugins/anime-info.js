/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:n,command:i})=>{if(!n)return e.reply(`Que anime desea buscar?, ejemplo de uso:\n\n${Prefijo+i} nichijou\n`);const r=await a.getName(e.sender),o=e.reply(MultiNK.Bsqd(r));await o;const t=encodeURIComponent(n);try{const n=(await fetchJson(`https://api.jikan.moe/v4/anime?q=${t}`)).data[0],i=n.images.jpg.image_url?n.images.webp.image_url:n.images.jpg.large_image_url?n.images.webp.large_image_url:"https://drive.google.com/uc?export=download&id=1XUu0nNH12JI-iyGOQdPRkHsgtp3DO0eu",r=`[ ${n.title} - Comun ], [ ${n.title_english} - Ingles ], [ ${n.title_japanese} - Japonés ]`;try{var s=`*🔥 Productora:* ${n.producers[0].name||"-"}\n*🪀 Licenciado por:* ${n.licensors[0].name||"-"}\n*🌟 Estudio:* ${n.studios[0].name||"-"}`}catch{s=""}try{var d=`*📺 Trailer:* ${n.trailer.url||"Url no encontrado!"}`}catch{d=""}await a.sendMessage(e.chat,{image:{url:i},caption:`\n*🧬 ID:* ${n.mal_id}\n*✍️ Títulos:* ${r}\n*🪄 Tipo:* ${n.type}\n*🧩 Genero:* ${n.source}\n*🗃️ Episodio:* ${n.episodes}\n*🎭 Estado:* ${await traducIr(encodeURI(n.status))}\n*⌚ Duración:* ${await traducIr(encodeURI(n.duration))}\n*♻️ Clasificación:* ${await traducIr(encodeURI(n.rating))}\n*📈 Puntaje:* ${n.score}\n*👍 Calificado por:* ${n.scored_by}\n*🔖 Rango:* ${n.rank}\n*⚡ Popularidad:* ${n.popularity}\n*👥 Miembros:* ${n.members}\n*❤️ Favoritos:* ${n.favorites}\n*📜 Sinopsis:* ${await traducIr(encodeURI(n.synopsis))}\n${s}\n${d}\n`.trim()},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["infoanime"],handler.tags=["animeuwu"],handler.command=/^infoanime$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/