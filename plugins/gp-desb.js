/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async a=>{db.data.chats[a.chat].isBanned=!1,a.reply("Chat desbaneado correctamente ✓")};handler.help=["unbanchat"],handler.tags=["propietario"],handler.command=/^unbanchat$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/