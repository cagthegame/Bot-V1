/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async(e,{args:r})=>{if(!r[0])return e.reply("Proporcione una cantidad...");const n=db.data.users[e.sender];if(n.salud>=100)return e.reply("\nTu ❤️salud esta lleno\n".trim());const a=40+4*n.neko;let i=1*Math.max(1,Math.min(Number.MAX_SAFE_INTEGER,isNumber(r[0])&&parseInt(r[0])||Math.round((100-n.salud)/a)));if(n.elixir<i)return e.reply(`\nTu 🥤elixir no es suficiente, tienes *${n.elixir}*\nuse el comando *\n\n${Prefijo}comprar elixir ${i-n.elixir}\n`.trim());n.elixir-=1*i,n.salud+=a*i,e.reply(`\nObtienes *${i}* 🥤elixir(s)\n`.trim())};handler.help=["sanar"],handler.tags=["games"],handler.command=/^sanar$/i;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/