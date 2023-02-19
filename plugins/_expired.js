/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";export async function all(e){if(!e.isGroup)return;const a=db.data.chats[e.chat];if(!a.expired)return!0;+new Date>a.expired&&(await this.reply(e.chat,"Expiro el tiempo para quedarme en el grupo\n\nC va epicamente*"),await this.groupLeave(e.chat),a.expired=null)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/