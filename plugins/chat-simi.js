/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import e from"../lib/database.js";let handler=async(a,{text:t,command:r,conn:l})=>{let s=await l.getName(a.sender),i="sk-XRL8VTi1CYcuuVbabZsofT3BlbkFJ9YSDTGK0VMnssFw5xFtx",h="No hay sistema!",n=a.reply(MultiNK.Proces(s));if(e.data.chats[a.chat].soloAdmins){if(t.length<15)return a.reply(`Por favor, sea mas espec\xedfico en su mensaje`);await n;try{let o=await chatBotAI(a.chat,t,i);a.reply(o)}catch(c){a.reply(h)}}else{if(!t)return a.reply("Y el texto ...?");try{let m=await chatBotAI(a.chat,t,i);a.reply(m)}catch(p){a.reply(h)}}};handler.help=["simi"].map(e=>e+" <texto>"),handler.tags=[""],handler.command=/^(simi|bot)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/
