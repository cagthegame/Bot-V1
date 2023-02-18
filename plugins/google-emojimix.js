/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{sticker}from"../lib/sticker.js";import fetch from"node-fetch";let handler=async(e,{conn:t,text:r,command:o})=>{const n=await t.getName(e.sender);let[i,a]=r.split`+`;if(!i)return e.reply(`Ejemplo de uso : ${Prefijo+o} 🥺+🥵`);if(!a)return e.reply(`Ejemplo de uso : ${Prefijo+o} 🥺+🥵`);const l=e.reply(MultiNK.Proces(n));await l;try{const r=(await(await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(i)}_${encodeURIComponent(a)}`)).json()).results[0].media_formats.png_transparent.url,o=await sticker(!1,r,"",`\n- ${NombreDelBot} -`);t.sendFile(e.chat,o,null,{asSticker:!0},e)}catch(t){e.reply(MultiNK.Error0())}};handler.help=["emojimix"],handler.tags=["conversor"],handler.command=/^emojimix$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/