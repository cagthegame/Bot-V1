/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{sticker}from"../lib/sticker.js";let handler=async(e,{conn:a,groupMetadata:t})=>{const i=await a.getName(e.sender),r=e.reply(MultiNK.Proces(i));await r;try{const i=await fetchJson(`https://latam-api.vercel.app/api/randgif_anime?apikey=${MyApiKey}`),r=await sticker(!1,i.gif,t.subject,NombreDelBot);a.sendFile(e.chat,r,null,{asSticker:!0},e)}catch(a){e.reply(MultiNK.Error0())}};handler.help=["snime"],handler.tags=["animeuwu"],handler.command=/^snime$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/