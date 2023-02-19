/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=function(e,{conn:t,isAdmin:s,isBotAdmin:d}){if(!e.quoted)throw!1;const{isBaileys:a}=e.quoted,i=e.message.extendedTextMessage.contextInfo.participant,n=e.message.extendedTextMessage.contextInfo.stanzaId;if(d&&s)t.sendMessage(e.chat,{delete:{remoteJid:e.chat,fromMe:!1,id:n,participant:i}});else if(s){if(!a)throw!1;t.sendMessage(e.chat,{delete:e.quoted.vM.key})}else{if(!a)throw!1;t.sendMessage(e.chat,{delete:e.quoted.vM.key}),e.limit=1}};handler.help=["suprimir"],handler.tags=["grupos","admins"],handler.command=/^(suprimir|del)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/