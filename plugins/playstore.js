/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:n,args:r})=>{if(!r[0])return e.reply("Que desea buscar en playstore?");const t=await a.getName(e.sender),i=encodeURIComponent(n),o=e.reply(MultiNK.Bsqd(t));await o;try{const n=await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${i}`);if(!n.titulo)return e.reply("[ ! ] Sin resultados");const r=await traducIr(encodeURI(n.descripcion));a.sendMessage(e.chat,{image:{url:n.imagen||"https://drive.google.com/uc?export=download&id=1YMbAkiUfZUQQ4wDkarsNOA7izzSiylkB"},caption:`🔍 Resultado: ${n.titulo}\n🧬 Identificador: ${n.id}\n⛓️ Link: ${n.link}\n🖼️ Imagen: ${n.imagen}\n✍️ Desarrollador: ${n.desarrollador}\n📜 Descripcion: ${r||n.descripcion}\n💲 Moneda: ${n.moneda}\n🎭 Gratis: ${n.gratis}\n💸 Precio: ${n.precio}\n📈 Puntuacion: ${n.puntuacion}`},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["playstore <busqueda>"],handler.tags=["busqueda"],handler.command=/^playstore$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/