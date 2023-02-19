/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import webp from"node-webpmux";import{randomBytes}from"crypto";import{addExif}from"../lib/sticker.js";let handler=async(t,{conn:e,text:r,command:o})=>{if(!r)return t.reply(`Modo de uso:\n\n${Prefijo+o} The life is a party\n`);const a=encodeURIComponent(r);try{const r=await getBuffer(`https://api.xteam.xyz/attp?file&text=${a}`),o=await addExif(r,"",`[_>] ${NombreDelBot}\n`);e.sendMessage(t.chat,{sticker:o},{quoted:t})}catch(e){t.reply(MultiNK.Error0())}};handler.help=["attp <texto>"],handler.tags=["conversor"],handler.command=/^attp$/i,handler.limit=!0;export default handler;const randomID=t=>randomBytes(Math.ceil(.5*t)).toString("hex").slice(0,t);

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/