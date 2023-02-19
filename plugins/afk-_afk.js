/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";export function before(e){const n=db.data.users[e.sender];n.afk>-1&&(e.reply(`📲 *Dejaste de estar AFK después de ${(new Date-n.afk).toTimeString()}*\nBienvenid@ de vuelta!!! :D`.trim()),n.afk=-1,n.afkReason="");const t=[...new Set([...e.mentionedJid||[],...e.quoted?[e.quoted.sender]:[]])];for(let n of t){const t=db.data.users[n];if(!t)continue;const a=t.afk;if(!a||a<0)continue;const o=t.afkReason||"";e.reply(`📴 *El usuario mencionado actualmente esta ausente, tiempo transcurrido ${(new Date-a).toTimeString()}*\n\n┏⊱ *Razon* \n┗━⊱ ${o}\n`.trim())}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/