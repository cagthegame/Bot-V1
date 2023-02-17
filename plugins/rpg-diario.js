/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const rewards={exp:9999,nkoins:4999,elixir:5},cooldown=864e5;let handler=async e=>{const a=db.data.users[e.sender];if(new Date-a.lastclaim<864e5)return e.reply(`¡Ya has reclamado tu recompensa diaria!, vuelva después de *${clockString(a.lastclaim+864e5-new Date)}.*`);let r="";for(let e of Object.keys(rewards))e in a&&(a[e]+=rewards[e],r+=`\n*+${rewards[e]}* ${global.rpg.emoticon(e)}${e}\n`);e.reply(r),a.lastclaim=1*new Date};handler.help=["diario"],handler.tags=["games"],handler.command=/^diario$/i,handler.cooldown=864e5;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/