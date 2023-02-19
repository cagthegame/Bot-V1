/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;let handler=async(e,{conn:a,text:r,isOwner:t,args:n})=>{if(!n[0])return e.reply("Y el enlace de WhatsApp?");let[o,i,l]=r.match(linkRegex)||[];if(!i)return e.reply("[ ! ] Error, El enlace no funciona o es inválido");const s=await a.groupGetInviteInfo(i).catch((e=>{}));try{if(s.size<=MinimoDeUsuarios)return e.reply(`[ ! ] La cantidad mínima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`);const r=await a.groupAcceptInvite(i);l=Math.floor(Math.min(999,Math.max(1,t?isNumber(l)?parseInt(l):0:3))),e.reply(`${NombreDelBot} se unió al grupo ${r} con éxito \n${l?`Durante ${l} Hora(s)`:""}`);let n=db.data.chats[r];n||(n=db.data.chats[r]={}),l&&(n.expired=+new Date+1e3*l*60*60)}catch(a){console.log(a),e.reply(MultiNK.Error1())}};handler.help=["unete <Enlace de grupo>"],handler.tags=["grupos"],handler.command=/^(unete|entrabot|join)$/i,handler.limit=10,handler.group=!0;export default handler;const isNumber=e=>"number"==typeof(e=parseInt(e))&&!isNaN(e);

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/