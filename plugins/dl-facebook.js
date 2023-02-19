/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,command:r,args:i})=>{if(!i[0])return e.reply("Link?");if(!isUrl(i[0]))return e.reply("*[ ! ] Por favor use un Link*");if(!i[0].match(/www.facebook.com|fb.watch/g))return e.reply("*[ ! ] Link inválido*\n_Por favor, use un link de Facebook_\n");const l=await a.getName(e.sender),n=e.reply(MultiNK.Proces(l));await n;try{const r=await fetchJson(`https://latam-api.vercel.app/api/facebookdl?apikey=${MyApiKey}&q=${i[0]}`);a.sendMessage(e.chat,{video:{url:r.video},fileName:"fbsd.mp4",mimetype:"video/mp4"},{quoted:e}).catch((a=>{e.reply(MultiNK.Error1())}))}catch(a){e.reply(MultiNK.Error0())}};handler.help=["fbdl <link>"],handler.tags=["servicio"],handler.command=/^fbdl$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/