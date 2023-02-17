/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const rewards={exp:5e4,nkoins:49999,elixir:10,mitico:3,legendario:1},cooldown=2592e6;let handler=async e=>{const a=db.data.users[e.sender];if(new Date-a.lastmonthly<cooldown)return e.reply(`Ya has reclamado tu regalo mensual, siguiente reclamo en *${clockString(a.lastmonthly+cooldown-new Date)}.*`);let n="";for(let e of Object.keys(rewards))e in a&&(a[e]+=rewards[e],n+=`*+${rewards[e]}* ${rpg.emoticon(e)}${e}\n`);e.reply(n),a.lastmonthly=1*new Date};handler.help=["mensual"],handler.tags=["games"],handler.command=/^mensual$/i,handler.cooldown=cooldown;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/