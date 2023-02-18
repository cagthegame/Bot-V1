/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=async a=>{db.data.chats[a.chat].isBanned=!0,a.reply("Chat baneado correctamente ✓")};handler.help=["banchat"],handler.tags=["propietario"],handler.command=/^(banchat|chatban)$/i,handler.owner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/