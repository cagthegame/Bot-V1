/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(a,{conn:n,groupMetadata:e,text:r,participants:t,isAdmin:o,isOwner:d})=>{const i=t.map((a=>a.id)).filter((a=>a!==n.user.jid));await n.sendMessage(a.chat,{text:`*[ ! ] Invocando a los integrantes del grupo* : ${e.subject}\n*~> Invocador* : _@${a.sender.replace(/@.+/,"")}_\n*~> Mensaje* : _${r||"No hay :v"}_\n${String.fromCharCode(8206).repeat(850)}\n╔═══ஜ۩۞۩ஜ═══╗\n`+i.map((a=>"╠➥ @"+a.replace(/@.+/,""))).join`\n`+"\n╚═══════════\n",mentions:i},{quoted:a}),reacMoji(a.chat,n,"📢",a)};handler.help=["invocar"],handler.tags=["grupos","admins"],handler.command=/^(invocar|todos|tagall)$/i,handler.admin=!0,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/