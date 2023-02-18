/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(o,{conn:e,args:a})=>{try{const s=await fetchJson(`https://latam-api.vercel.app/api/covid19?apikey=${MyApiKey}&q=${a[0]?a[0]:"world"}`);if(!s.casos)return o.reply("[ ! ] Sin resultados");e.sendMessage(o.chat,{text:`[ COVID-19 ]\n\n🌁 Lugar: ${a[0]?a[0]:"Mundo"}\n🫁 Casos positivos: ${s.casos}\n🤧 Casos de hoy: ${s.casosDehoy}\n💀 Fallecidos: ${s.muertes}\n⚰️ Fallecidos de hoy: ${s.muertesDehoy}\n🤒 Recuperados: ${s.recuperados}\n😷 En recuperacion: ${s.activo}\n😵 Casos criticos: ${s.critico}\n🫂 Casos por millon: ${s.casosPorMillon}\n☠️ Fallecidos por millon: ${s.muertesPorMillon}\n💉 Total de pruebas: ${s.pruebas}\n🔬 Pruebas por millon: ${s.pruebasPorMillon}`},{quoted:o})}catch(e){o.reply(MultiNK.Error0())}};handler.help=["covid <pais>"],handler.tags=["busqueda"],handler.command=/^(covid|covid19)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/