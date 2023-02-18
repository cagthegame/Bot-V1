/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import{format}from"util";let handler=async(e,{text:t,conn:r})=>{if(!/^https?:\/\//.test(t))return e.reply("El parámetro *URL* debe comenzar con http:// ó https:// -.-");const n=await r.getName(e.sender),a=e.reply(MultiNK.Proces(n));await a;const{href:h,origin:l}=new URL(t),o=await fetch(h,{headers:{referer:l}});if(o.headers.get("content-length")>107374182400)throw`Content-Length: ${o.headers.get("content-length")}`;if(!/text|json/.test(o.headers.get("content-type")))return r.sendFile(e.chat,h,"file",t,e);let i=await o.buffer();try{i=format(JSON.parse(i+""))}catch(e){i+=""}finally{e.reply(i.slice(0,65536)+"")}};handler.help=["fetch"],handler.tags=["herramienta"],handler.command=/^fetch$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/