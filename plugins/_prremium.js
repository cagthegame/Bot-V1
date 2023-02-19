/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=e=>e;export async function all(e){const a=db.data.users[e.sender];e.chat.endsWith("broadcast")||0!=a.premiumTime&&a.premium&&1*new Date>=a.premiumTime&&(await e.reply("[ ! ] Se acabó tu tiempo premium!\n_ Espero que lo hayas disfrutado :3_\n"),a.premiumTime=0,a.premium=!1)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/