/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";import db from"../lib/database.js";const defaultLang=MultiNK.Lengua();export async function before(t){const e=db.data.chats[t.chat];if(e.simi&&!e.isBanned&&!t.fromMe){if(t.text.startsWith(Prefijo))return;if(!t.text)return;const e=await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(t.text)}&lc=${defaultLang}`);if(!e.ok)throw"Simi murió :v";const a=await e.json();return"No sé lo qué estás diciendo. Por favor enseñame."==a.success&&await t.reply("No habla taka taka x'd"),await t.reply(a.success),!0}return!0}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/