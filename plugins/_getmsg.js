/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";export async function all(t){if(!t.chat.endsWith(".net")||t.fromMe||t.key.remoteJid.endsWith("status@broadcast"))return;if(db.data.chats[t.chat].isBanned)return;if(db.data.users[t.sender].banned)return;if(t.isBaileys)return;const a=db.data.msgs;if(!(t.text in a))return;let e=this.serializeM(JSON.parse(JSON.stringify(a[t.text]),((t,a)=>null!==a&&"object"==typeof a&&"type"in a&&"Buffer"===a.type&&"data"in a&&Array.isArray(a.data)?Buffer.from(a.data):a)));await e.copyNForward(t.chat,!0)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/