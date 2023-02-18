/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(a,{conn:e})=>{const i=await e.profilePictureUrl(a.chat,"image").catch((a=>"./multimedia/imagenes/myunivers.jpg"));await e.sendMessage(a.chat,{image:{url:i},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`\n╔═══════════\n╟{ MENU +18 }\n║\n║㋡ ${Prefijo}hentai\n╚═══════════\n`.trim()},{quoted:a})};handler.help=["labiblia"],handler.command=/^labiblia$/i,handler.group=!0,handler.premium=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/