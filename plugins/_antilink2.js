/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";const linkRegex=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;export async function before(e,{conn:t,isAdmin:i,isBotAdmin:a}){if(e.isBaileys&&e.fromMe)return!0;if(!e.isGroup)return!1;const n=db.data.chats[e.chat],r=db.data.settings[this.user.jid]||{},s=e.key.participant,o=e.key.id,c=linkRegex.exec(e.text);if(n.antiLink2&&c&&!i){if(a){const t=`https://chat.whatsapp.com/${await this.groupInviteCode(e.chat)}`;if(e.text.includes(t))return!0}if(await t.sendButton(e.chat,"*[ ! ] Link detectado [ ! ]*\n",""+(a?"":"_Por suerte no soy acmin, asi que no puedo hacer nada unu"),NombreDelBot,["[ DESACTIVAR ANTILINK 2 ]",Prefijo+"apagar antilink2"],e),a&&r.restrict)await t.groupParticipantsUpdate(e.chat,[e.sender],"remove"),t.sendMessage(e.chat,{delete:{remoteJid:e.chat,fromMe:!1,id:o,participant:s}});else if(!r.restrict)return e.reply("[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!")}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/