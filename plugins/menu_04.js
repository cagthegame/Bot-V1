/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:i})=>{const n=await i.profilePictureUrl(e.chat,"image").catch((e=>"./multimedia/imagenes/myunivers.jpg"));await i.sendMessage(e.chat,{image:{url:n},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`\n╔═══════════\n╟{ ANIME }\n║\n║圆 ${Prefijo}anifrase\n║圆 ${Prefijo}waifu_hd\n║圆 ${Prefijo}rostro_4k\n║圆 ${Prefijo}infoanime\n║圆 ${Prefijo}neko\n║圆 ${Prefijo}snime\n║圆 ${Prefijo}waifu\n╚═══════════\n`.trim()},{quoted:e})};handler.help=["mianime"],handler.command=/^mianime$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/