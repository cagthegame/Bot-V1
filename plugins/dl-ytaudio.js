/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:n})=>{if(!n)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+a} mtc s3rl`);const o=await t.getName(e.sender),r=e.reply(MultiNK.Proces(o));await r;const i=encodeURIComponent(n);try{const a=await fetchJson(`https://latam-api.vercel.app/api/ytplay?apikey=${MyApiKey}&q=${i}`),o=await getBuffer(a.logo);await t.sendMessage(e.chat,{text:`π Resultado encontrado para: ${n}\nβοΈ Titulo: ${a.titulo}\nβ³ Duracion: 1:23 ββββββββββββββ ${a.duracion}\nπ Vistas: ${a.vistas}\nπ Autor: ${a.autor}\nπ DescripciΓ³n: ${a.descripcion}\nβοΈ URL: ${a.link}\n\n\`\`\`Enviando audio, espere...\`\`\``},{quoted:e}),t.sendMessage(e.chat,{audio:{url:a.descarga},mimetype:"audio/mpeg",fileName:`${a.titulo}.mp3`,contextInfo:{externalAdReply:{title:`${a.titulo}`,body:"",previewType:"PHOTO",thumbnailUrl:"",thumbnail:o,sourceUrl:a.descarga}}},{quoted:e}).catch((t=>{e.reply(MultiNK.Error1())}))}catch(t){e.reply(MultiNK.Error0())}};handler.help=["audio <texto>"],handler.tags=["servicio"],handler.command=/^audio$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/