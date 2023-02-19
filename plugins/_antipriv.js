/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";import db from"../lib/database.js";export async function before(e,{conn:i,isAdmin:t,isBotAdmin:s,isOwner:a,isROwner:n}){if(e.isBaileys&&e.fromMe)return!0;if(e.isGroup)return!1;if(!e.message)return!0;db.data.chats[e.chat];return!(db.data.settings[this.user.jid]||{}).antiPrivado||a||n||(await i.sendMessage(e.chat,{text:`*[ ! ] El chat por privado esta prohibido [ ! ]*\nMi dueño por si necesita información : wa.me/${OwnerNum}\n\n_Adios..._`,mentions:[e.sender]},{quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51995386439-1616169743@g.us",inviteCode:"m",groupName:"P",caption:NombreDelBot,jpegThumbnail:fs.readFileSync("./multimedia/imagenes/press-f.jpg")}}}}),setTimeout((()=>{this.updateBlockStatus(e.chat,"block")}),3e3)),!1}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/