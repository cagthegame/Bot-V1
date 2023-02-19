/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{tiktokdl,tiktokdlv2}from"@bochilteam/scraper";let handler=async(t,{conn:r,args:i,command:e})=>{if(!i[0])return t.reply("*[ ! ] Y el Link?*");if(!isUrl(i[0]))return t.reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+e} https://vm.tiktok.com/ZMNo7NFT9/`);if(!i[0].includes("tiktok.com"))return t.reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+e} https://vm.tiktok.com/ZMNo7NFT9/`);const n=await r.getName(t.sender),o=t.reply(MultiNK.Proces(n));await o;try{const{author:{nickname:e},video:n,description:o}=await tiktokdl(i[0]).catch((async t=>await tiktokdlv2(i[0]))),a=n.no_watermark_raw||n.no_watermark||n.no_watermark_hd||n.with_watermark;if(!a)return t.reply(MultiNK.Error1());r.sendFile(t.chat,a,"tiktok.mp4",`\n🔥 By ${e}${o?`\n📜*Descripción:* ${o}`:""}\n`.trim(),t)}catch{t.reply(MultiNK.Error0())}};handler.help=["tiktokdl <link>"],handler.tags=["servicio"],handler.command=/^tiktokdl$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/