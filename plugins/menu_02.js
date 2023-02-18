/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:i})=>{const n=await i.profilePictureUrl(e.chat,"image").catch((e=>"./multimedia/imagenes/myunivers.jpg"));await i.sendMessage(e.chat,{image:{url:n},jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg"),caption:`\n╔═══════════\n╟{ DESCARGADOR }\n║\n║➣ ${Prefijo}fbdl\n║➣ ${Prefijo}gitclone\n║➣ ${Prefijo}mediafire\n║➣ ${Prefijo}tiktokdl\n║➣ ${Prefijo}yta\n║➣ ${Prefijo}audio\n║➣ ${Prefijo}ytabochi\n║➣ ${Prefijo}ytvbochi\n║➣ ${Prefijo}ytmp3\n║➣ ${Prefijo}ytmp4\n║➣ ${Prefijo}play\n║➣ ${Prefijo}ytv\n╠═══════════\n╟{ BUSCADOR }\n║\n║➣ ${Prefijo}play2\n║➣ ${Prefijo}imagen\n║➣ ${Prefijo}google\n║➣ ${Prefijo}clima\n║➣ ${Prefijo}covid\n║➣ ${Prefijo}github\n║➣ ${Prefijo}tiktok\n║➣ ${Prefijo}pinterest\n║➣ ${Prefijo}playstore\n║➣ ${Prefijo}verip\n║➣ ${Prefijo}wallpaper\n║➣ ${Prefijo}wikipedia\n║➣ ${Prefijo}ytbuscar\n╠═══════════\n╟{ CONVERSOR }\n║\n║➣ ${Prefijo}txtestilo\n║➣ ${Prefijo}emojimix\n║➣ ${Prefijo}attp\n║➣ ${Prefijo}telesticker\n║➣ ${Prefijo}linesticker\n╠═══════════\n╟{ HERRAMIENTAS }\n║\n║➣ ${Prefijo}voz\n║➣ ${Prefijo}fetch\n║➣ ${Prefijo}traducir\n╠═══════════\n╟{ RANDOM }\n║\n║➣ ${Prefijo}nombreninja\n║➣ ${Prefijo}randimg\n║➣ ${Prefijo}djbot\n║➣ ${Prefijo}xd\n║➣ ${Prefijo}comediante\n║➣ ${Prefijo}notif\n║➣ ${Prefijo}tumama\n║➣ ${Prefijo}consejo\n║➣ ${Prefijo}minidatos\n║➣ ${Prefijo}fraseamor\n║➣ ${Prefijo}minombre\n║➣ ${Prefijo}simi\n║➣ ${Prefijo}aichat\n║➣ ${Prefijo}wagrupos\n╚═══════════\n`.trim()},{quoted:e})};handler.help=["randmenu"],handler.command=/^randmenu$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/