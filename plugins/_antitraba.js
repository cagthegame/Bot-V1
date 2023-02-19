/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";import db from"../lib/database.js";export async function before(e,{conn:t,isAdmin:a,isBotAdmin:i,usedPrefix:n}){if(e.isBaileys&&e.fromMe)return!0;if(!e.isGroup)return!1;const r=db.data.chats[e.chat],s=db.data.settings[this.user.jid]||{},o=e.key.participant,d=e.key.id,c=await t.getName(e.sender),m={key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616969743@g.us",inviteCode:"m",groupName:"P",caption:NombreDelBot,jpegThumbnail:fs.readFileSync("./multimedia/imagenes/mylogo.jpg")}}},u="\n".repeat(400);if(r.antiTraba&&e.text.length>1200){if(a)return t.sendMessage(e.chat,{text:`El administrador @${e.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`,mentions:[e.sender]},{quoted:m});if(await t.sendButton(e.chat,"*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n",""+(i?"":`${u}\nNo soy administrador, no puedo hacer nada :/`),NombreDelBot,["[ DESACTIVAR ANTI TRABAS ]",n+"apagar antitraba"],m),i&&s.restrict)t.sendMessage(e.chat,{delete:{remoteJid:e.chat,fromMe:!1,id:d,participant:o}}),setTimeout((()=>{t.groupParticipantsUpdate(e.chat,[e.sender],"remove")}),500),setTimeout((()=>{t.sendMessage(e.chat,{text:`Marcar el chat como leido ✓\n${u}\n=> El número : wa.me/${e.sender.split("@")[0]}\n=> Alias : ${c}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`,mentions:[e.sender]},{quoted:m})}),1e3);else if(!s.restrict)return e.reply("[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!")}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/