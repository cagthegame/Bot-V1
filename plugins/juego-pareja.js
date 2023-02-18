/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(a,{conn:e,participants:t})=>{const n=`❥ *Pareja formada* : \n\n ┏─━─━─━∞◆∞━─━─━─┓\n@${t[Math.floor(Math.random()*t.length)].id.split("@")[0]} ❤️ @${t[Math.floor(Math.random()*t.length)].id.split("@")[0]} \n ┗─━─━─━∞◆∞━─━─━─┛\n`;setTimeout((()=>{a.reply(n,a.chat,{mentions:e.parseMention(n)})}),500),await e.sendMessage(a.chat,{audio:fs.readFileSync("./multimedia/sonidos/willy.m4a"),fileName:"NoviosXD.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{locationMessage:{name:`Esto fue posible gracias a ${await e.getName(a.sender)}`,jpegThumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg")}}}})};handler.help=["emparejar"],handler.tags=["games"],handler.command=/^emparejar$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/