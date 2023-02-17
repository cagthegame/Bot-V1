/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{format as t}from"util";let{default:{Image:e}}=await import("node-webpmux");let handler=async e=>{if(!e.quoted)return e.reply("[ ! ] Responda un sticker!");if(/sticker/.test(e.quoted.mtype)){let t=new Image;await t.load(await e.quoted.download()),e.reply(format(JSON.parse(t.exif.slice(22).toString())))}};handler.help=["getexif"],handler.tags=["conversor"],handler.command=/^getexif$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/