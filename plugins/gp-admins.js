/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:n,participants:e,groupMetadata:d})=>{const l=e.filter((a=>a.admin)).map(((a,n)=>`🛡 [${n+1}] wa.me/${a.id.split("@")[0]}`)).join("\n\n");a.reply(`*Administradores del grupo* : ${d.subject}\n\n*Total* : \n\n${l}\n`)};handler.help=["admins"],handler.tags=["casual"],handler.command=/^admins$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/