/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";let handler=async(e,{conn:t,args:a,command:r})=>{const i=/(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!a[0])return e.reply(`Por favor use una URL de github, ejemplo:\n${Prefijo+r} https://github.com/NeKosmic/NK-BOT-MD`);if(a[0].includes("github.com/NeKosmic"))return e.reply("Cuenta de github baneada, por favor use otra URL");if(!i.test(a[0]))return e.reply("[ ! ] URL inválido");const o=await t.getName(e.sender),n=e.reply(MultiNK.Proces(o));await n;let[,c,l]=a[0].match(i)||[];l=l.replace(/.git$/,"");const s=`https://api.github.com/repos/${c}/${l}/zipball`,h=await fetch(s,{method:"head"});if(200!==h.status)return e.reply(MultiNK.Error1());const d=h.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1],m=h.headers.get("content-type");await t.sendMessage(e.chat,{document:{url:s},fileName:d,mimetype:m},{quoted:e}).catch((t=>{e.reply(MultiNK.Error0())}))};handler.help=["gitclone <Link>"],handler.tags=["servicio"],handler.command=/^gitclone$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/