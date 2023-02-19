/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{spawn}from"child_process";import{format}from"util";let handler=async(e,{conn:o,usedPrefix:a,command:n})=>{if(!global.support.convert&&!global.support.magick&&!global.support.gm)return handler.disabled=!1;if(!e.quoted)return e.reply(`*Respomda una imagen usando el comando* :\n\n${a+n}\n`);const t=e.quoted;if(!/sticker/.test(t.mediaType))return e.reply(`*Respomda una imagen usando el comando* :\n\n${a+n}\n`);{let a=await t.download();if(!a)throw a;if(0==!t.isAnimated)return e.reply("[ ! ] Solo stickers estáticos");let n=[];const[r,...i]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert","webp:-","png:-"],l=spawn(r,i);l.on("error",(o=>e.reply(format(o)))),l.stdout.on("data",(e=>n.push(e))),l.stdin.write(a),l.stdin.end(),l.on("exit",(()=>{o.sendFile(e.chat,Buffer.concat(n),"image.png",NombreDelBot,e),reacMoji(e.chat,o,"⚙️",e)}))}};handler.help=["aimg"],handler.tags=["conversor"],handler.command=/^(aimg|toimg)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/