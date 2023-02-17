/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";import{xpRange}from"../lib/levelling.js";let handler=async(e,{conn:a,args:n,command:i})=>{const{exp:r,level:t,role:l,lastclaim:o,registered:s,regTime:d}=db.data.users[e.sender],{min:m,xp:c,max:u}=xpRange(t,global.multiplier),g=r-m,p=g<0?`[ ! ] Su XP actual es menor de 0, usted debe ${0-g} XP para continuar subiendo de nivel...`:`(${g} / ${c})`,v=await a.getName(e.sender),$=await a.profilePictureUrl(e.sender).catch((e=>"./multimedia/imagenes/avatar_contact.png"));var b="";t<=2?b="[ - - - - - - - - - - ]":t<=9?b="[# - - - - - - - - - ]":t<=19?b="[## - - - - - - - - ]":t<=29?b="[### - - - - - - - ]":t<=39?b="[#### - - - - - - ]":t<=49?b="[##### - - - - - ]":t<=59?b="[###### - - - - ]":t<=69?b="[####### - - - ]":t<=79?b="[######## - - ]":t<=89?b="[######### - ]":t<=99&&(b="[##########]");const h=`\n┏━━❉ *[ Nivel ]* ❉━━━\n┣⊱ *Usuario* : ${s?"("+v+") ":""} ( @${e.sender.split("@")[0]} )\n┣⊱ *Registrado* : ${s?"Sí ("+new Date(d).toLocaleString()+")":"No"} ${o>0?"\n┣⊱ *Último reclamo :* "+new Date(o).toLocaleString():""}\n┣⊱ *Nombre* : <${v}>\n┣⊱ *XP conseguido asta el momento* : ${p}\n┣⊱ *Su nivel actual es* : ${t} ${c<r-m?`<Ya puedes subir de nivel, use el comando ${Prefijo}subirnivel >`:""}\n┣⊱ *De acuerdo al nivel es* : ${l}\n┣⊱ *Progreso de nivel* : ${b}\n┗━━━━━━━━━━━━━\n\n_Use el comando ${Prefijo}inventario para ver tu inventario RPG_\n`.trim();await a.sendMessage(e.chat,{image:{url:$},caption:h,mentions:a.parseMention(h)},{quoted:e})};handler.help=["minivel"],handler.tags=["xp"],handler.command=/^minivel$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/