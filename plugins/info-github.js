/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:i})=>{try{const n=await fetchJson(`https://latam-api.vercel.app/api/github?apikey=${MyApiKey}&q=${i[0]?i[0]:"NeKosmic"}`),o=(n.nick,i[0].includes("nekosmic")?"[ ! ] Actualmente la cuenta de mi creador principal esta suspendido, puede realizar otra búsqueda en github :D":`[ USUARIO-GITHUB-🐱 ]\n\n🧿 ID: ${n.id}\n⚡ Usuario: < ${n.nick} />\n🔥 Nombre: ${n.nombre}\n🫂 Seguidores: ${n.seguidores}\n🤝 Siguiendo: ${n.siguiendo}\n🧰 Repositorios: ${n.repositorios}\n🏗️ Compañía: ${n.empresa}\n🧑‍💻 Blog: ${n.blog}\n🌎 Ubicación: ${n.ubicacion}\n📈 Fecha de creacion: ${n.fechaDeCreacion}\n📉 Ultima actualizacion: ${n.ultimaActualizacion}\n📜 Biografia: ${n.biografia}`);if(!i[0].includes("nekosmic"))return await a.sendMessage(e.chat,{image:{url:n.imagen},caption:o},{quoted:e});a.sendMessage(e.chat,{image:{url:n.imagen||"./multimedia/imagenes/logo.jpg"},caption:o},{quoted:e}),await a.sendMessage(e.chat,{audio:{url:"https://drive.google.com/uc?export=download&id=1TpopczuzJ4ok0DVP2AvlPoOoAlQ4Byhw"},fileName:"Wowner.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["github <usuario>"],handler.tags=["busqueda"],handler.command=/^(github|githubuser)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/