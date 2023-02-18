/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:n,args:t})=>{if(!t[0])return e.reply("Que desea buscar en Google?");const o=await a.getName(e.sender),r=encodeURIComponent(n),s=e.reply(MultiNK.Bsqd(o));await s;try{const t=await fetchJson(`https://latam-api.vercel.app/api/google?apikey=${MyApiKey}&q=${r}`);if(!t.busqueda.titulo)return e.reply("[ ! ] Sin resultados");const o=JSON.stringify(t.mas_info),s=t.otras_preguntas.join(", \n- "),i=null==t.mas_info.type;a.sendMessage(e.chat,{image:{url:i?t.busqueda.miniatura:"https://drive.google.com/uc?export=download&id=1YRjJNNItcpPCodIIXrYbVX0hdgufMBLZ"},caption:`〘  *GOOGLE* 〙\n_~> Resultados para : ${n}_\n\n🔖 Titulo: ${t.busqueda.titulo}\n📜 Descripcion: ${t.busqueda.descripcion}\n⛓️ Url: ${t.busqueda.link}\n🖼️ Imagen: ${t.busqueda.imagen}${"\n🔍 Busquedas relacionadas: "+s}\n${i?"":"\n🌐 "+String.fromCharCode(8206).repeat(850)+o}\n`},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["google <busqueda>"],handler.tags=["busqueda"],handler.command=/^google$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/