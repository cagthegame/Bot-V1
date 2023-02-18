/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import TicTacToe from"../lib/tictactoe.js";let handler=async(e,{conn:a,command:n,text:t})=>{if(a.game=a.game?a.game:{},Object.values(a.game).find((a=>a.id.startsWith("tictactoe")&&[a.game.playerX,a.game.playerO].includes(e.sender))))return e.reply("Ya estas en una sala activa -.-");if(!t)return e.reply(`*[ ! ] Ingrese un nombre para crear una nueva sala*\nEjemplo de uso:\n\n${Prefijo+n} el nether\n`);const r=Object.values(a.game).find((e=>"WAITING"===e.state&&(!t||e.name===t)));if(r){await e.reply("Rival encontrado!\nᴱˡ ᶦⁿᶦᶜᶦᵃᵈᵒʳ ᵗᶦᵉⁿᵉ ᑫᵘᵉ ᶜᵒᵐᵉⁿᶻᵃʳ ᵉˡ ʲᵘᵉᵍᵒ ᵉˢᶜʳᶦᵇᶦᵉⁿᵈᵒ ᵘⁿ ⁿᵘ́ᵐᵉʳᵒ ᵈᵉ ¹ ᵃˡ ⁹ ᵖᵃʳᵃ ᶜᵒᵐᵉⁿᶻᵃʳ"),r.o=e.chat,r.game.playerO=e.sender,r.state="PLAYING";const n=r.game.render().map((e=>({X:"❌",O:"⭕",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"}[e]))),t=`\nID de sala: ${r.id}\n\n${n.slice(0,3).join("")}\n${n.slice(3,6).join("")}\n${n.slice(6).join("")}\n\n❌ = @${r.game.playerX.split("@")[0]}\n⭕ = @${r.game.playerO.split("@")[0]}\n\n@${r.game.currentTurn.split("@")[0]} tiene que comenzar el juego\n\n~Escriba :~\n\nrendirse\n\n~para darse por vencido~\n`.trim();r.x!==r.o&&await a.sendMessage(r.x,{text:t,mentions:a.parseMention(t)},{quoted:e}),await a.sendMessage(r.o,{text:t,mentions:a.parseMention(t)},{quoted:e})}else r={id:"tictactoe-"+ +new Date,x:e.chat,o:"",game:new TicTacToe(e.sender,"o"),state:"WAITING"},t&&(r.name=t),a.sendButton(e.chat,"*[ ! ] Esperando rival*\n\n_Recompensa para el ganador +4000 de XP_\n",NombreDelBot,null,[["[ ACEPTAR DESAFÍO ]",`${Prefijo+n} ${t}`]],e),a.game[r.id]=r};handler.help=["ttt"],handler.tags=["games"],handler.command=/^ttt$/,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/