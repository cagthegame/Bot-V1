/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:i})=>{const r=await i.profilePictureUrl(e.chat,"image").catch((e=>"./multimedia/imagenes/myunivers.jpg"));await i.sendMessage(e.chat,{image:{url:r},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`\n╔═══════════\n╟{ CREA-LOGOS }\n║\n║☞ ${Prefijo}logo\n║☞ ${Prefijo}lolice\n║☞ ${Prefijo}horny\n║☞ ${Prefijo}blur\n║☞ ${Prefijo}gay\n║☞ ${Prefijo}triggered\n║☞ ${Prefijo}simpcard\n║☞ ${Prefijo}pixelate\n║☞ ${Prefijo}its-so-stupid\n║☞ ${Prefijo}youtube-comment\n║☞ ${Prefijo}escribir\n║☞ ${Prefijo}imgtxt\n╚═══════════\n`.trim()},{quoted:e})};handler.help=["logofabrica"],handler.command=/^logofabrica$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/