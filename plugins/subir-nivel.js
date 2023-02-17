/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{canLevelUp,xpRange}from"../lib/levelling.js";import{levelup}from"../lib/canvas.js";import db from"../lib/database.js";let handler=async(e,{conn:l})=>{const n=db.data.users[e.sender];var a="";if(n.level<=2?a="[ - - - - - - - - - - ]":n.level<=9?a="[# - - - - - - - - - ]":n.level<=19?a="[## - - - - - - - - ]":n.level<=29?a="[### - - - - - - - ]":n.level<=39?a="[#### - - - - - - ]":n.level<=49?a="[##### - - - - - ]":n.level<=59?a="[###### - - - - ]":n.level<=69?a="[####### - - - ]":n.level<=79?a="[######## - - ]":n.level<=89?a="[######### - ]":n.level<=99&&(a="[##########]"),!canLevelUp(n.level,n.exp,global.multiplier)){const{min:l,xp:a,max:r}=xpRange(n.level,global.multiplier),i=n.exp-l,v=i<0?`[ ! ] Su XP actual es menor de 0, usted debe ${0-i} XP para continuar subiendo de nivel...`:`\n🪀 Nivel actual *${n.level} (${n.exp-l}/${a})*\n🔥 Te faltan *${r-n.exp}* de XP para que puedas subir al siguiente nivel\n`;return e.reply(v)}const r=1*n.level;for(;canLevelUp(n.level,n.exp,global.multiplier);)n.level++;if(r!==n.level){n.role=global.rpg.role(n.level).name;const i=`Felicidades! ${l.getName(e.sender)}\nAcabas de subir de nivel`,v=`\`\`\`${a}\`\`\`\n\n♻️ *Nivel anterior* : ${r}\n🪀 *Nuevo nivel* : ${n.level}\n⚔️ *Rol del cliente* : ${n.role}\n📆 *Fecha* : ${(new Date).toLocaleString("es-ES")}\n\n_Cuanto mas interactúes con el bot, mayor será¡ tu nivel_\n`.trim();try{const a=await levelup(i,n.level);l.sendFile(e.chat,a,"levelup.jpg",v,e)}catch(l){e.reply(v)}}};handler.help=["subirnivel"],handler.tags=["xp"],handler.command=/^(subirnivel|levelup)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/