/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const linkRegex=/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;export async function before(e,{conn:t,isAdmin:a,isBotAdmin:i,usedPrefix:n}){if(e.isBaileys&&e.fromMe)return!0;if(!e.isGroup)return!1;const s=db.data.chats[e.chat],o=(db.data.settings[this.user.jid],e.key.participant),r=e.key.id,c=linkRegex.exec(e.text);if(s.antiLink&&c&&!a){if(i){const t=`https://chat.whatsapp.com/${await this.groupInviteCode(e.chat)}`;if(e.text.includes(t))return e.reply("[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo")}if(!i)return t.sendButton(e.chat,"*[ ! ] Enlace detectado [ ! ]*\n","Por suerte no soy acmin, asi que no puedo hacer nada :v",NombreDelBot,["[ DESACTIVAR ANTILINK ]",n+"apagar antilink"],e);await t.sendMessage(e.chat,{text:`*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${e.sender.split("@")[0]} Adios..._\n`,mentions:[e.sender]}),t.sendMessage(e.chat,{delete:{remoteJid:e.chat,fromMe:!1,id:r,participant:o}}),setTimeout((()=>{t.groupParticipantsUpdate(e.chat,[e.sender],"remove")}),1e3)}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/