/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a})=>{const t=await a.getName(e.sender),n=["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://fb.watch/b7LOc9_LU2/","https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"],o=e.reply(MultiNK.Proces(t));await o;try{const t=await fetchJson(`https://latam-api.vercel.app/api/rand_img?apikey=${MyApiKey}`);a.sendMessage(e.chat,{image:{url:t.randimg},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg"),caption:"💾",contextInfo:{externalAdReply:{body:`${NombreDelBot} 🔥`,thumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),sourceUrl:n[Math.floor(Math.random()*n.length)]}}},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["randimg"],handler.tags=["random"],handler.command=/^randimg$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/