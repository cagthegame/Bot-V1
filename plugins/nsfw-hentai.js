/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a})=>{const t=await a.getName(e.sender),n=["🥵🔥","😎👌","😈🤙","😏","🌝🤌"],r=e.reply(MultiNK.Proces(t));await r;try{const t=await fetchJson(`https://latam-api.vercel.app/api/hentai?apikey=${MyApiKey}`);a.sendMessage(e.chat,{image:{url:t.hidrogeno},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/nsfw.jpg"),caption:n[Math.floor(Math.random()*n.length)]},{quoted:e})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["hentai"],handler.tags=["premium"],handler.command=/^hentai$/i,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/