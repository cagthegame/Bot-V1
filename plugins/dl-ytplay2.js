/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,command:t,text:n})=>{if(!n)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+t} ideas en 5 minutos`);const o=await a.getName(e.sender),i=e.reply(MultiNK.Bsqd(o));await i;const r=encodeURIComponent(n);try{const t=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${r}`),n=pickRandom([0,1,2]),o=t.resultados[n];if(o.duracion_s>=1800)return e.reply("[ ! ] Sin resultados, vuelva a intentarlo...");const i=[{buttonId:`${Prefijo}listytdl ${o.url}`,buttonText:{displayText:"[ 📥 DESCARGAR ]"},type:1}],l={image:{url:o.imagen},caption:`\n✍️ Titulo : ${o.titulo}\n⚡ Autor : ${o.autor}\n⏰ Duracion : ${o.duracion}\n👀 Vistas : ${o.vistas}\n📆 Fecha de subida : ${o.f_carga}\n📺 Canal : ${o.canal}\n📃 Descripcion : ${o.descripcion||"-"}\n🧬 ID : ${o.id}`.trim(),footer:NombreDelBot+" 🔥",buttons:i,headerType:4};await a.sendMessage(e.chat,l,{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["play2 <texto>"],handler.tags=["busqueda"],handler.command=/^play2$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/