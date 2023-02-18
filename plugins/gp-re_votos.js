/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:r,isAdmin:n,isOwner:i})=>{if(e.isGroup&&!n&&!i)return dfail("admin",e,r);const a=e.chat;if(r.vote=r.vote?r.vote:{},!(a in r.vote))return e.reply(":v");delete r.vote[a],e.reply("Votacion reiniciada correctamente ✓")};handler.help=["reiniciarvotos"],handler.tags=["admins","grupos"],handler.command=/^reiniciarvotos$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/