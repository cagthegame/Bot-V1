/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a})=>{const n=await a.profilePictureUrl(e.sender,"image").catch((e=>"./multimedia/imagenes/avatar_contact.png"));try{const t=await fetchJson(`https://latam-api.vercel.app/api/ani_frases?apikey=${MyApiKey}`);a.relayMessage(e.chat,{extendedTextMessage:{text:`\n🎴 Anime : ${t.anime}\n🀄 Personaje : ${t.personaje}\n🔖 Frase : ${t.frase}\n`,contextInfo:{mentionedJid:[e.sender],externalAdReply:{thumbnailUrl:n,sourceUrl:"https://vm.tiktok.com/ZMF1heqbV/"}}}},{})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["anifrase"],handler.tags=["animeuwu"],handler.command=/^anifrase$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/