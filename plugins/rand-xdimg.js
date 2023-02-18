/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(a,{conn:e})=>{const t=await e.getName(a.sender),i=a.reply(MultiNK.Proces(t));await i;try{const t=await fetchJson(`https://latam-api.vercel.app/api/xd_img?apikey=${MyApiKey}`);e.sendMessage(a.chat,{image:{url:t.imagen},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg"),caption:"ª"},{quoted:a})}catch(e){a.reply(MultiNK.Error0())}};handler.help=["xd"],handler.tags=["random"],handler.command=/^xd$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/