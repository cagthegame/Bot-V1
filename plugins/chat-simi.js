/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(a,{text:t,command:e,conn:r})=>{const s=await r.getName(a.sender),c="No hay sistema!";if(db.data.chats[a.chat].soloAdmins){if(t.length<15)return a.reply("Por favor, sea mas específico en su mensaje");try{a.reply(MultiNK.Proces(s));const e=await chatBotAI(a.chat,t,"");await a.reply(e)}catch(t){a.reply(c)}}else{if(!t)return a.reply("Y el texto ...?");try{const e=await chatBotAI(a.chat,t,"");a.reply(e)}catch(t){a.reply(c)}}};handler.help=["simi <texto>"],handler.tags=[""],handler.command=/^(simi|bot|aichat)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/