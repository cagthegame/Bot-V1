/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,usedPrefix:t})=>{const n=await a.getName(e.sender),r=global.owner.filter((([e,a])=>e&&a));for(let[t,o]of r){const r="BEGIN:VCARD\nVERSION:3.0\nFN:"+Propietario+"\nORG:Otakus Tecnológicos;\nitem1.TEL;waid=51995386439:+51 995 386 439\nitem1.X-ABLabel:⚡ Creador Principal\nitem2.TEL;waid="+t.replace(/[^0-9]/g,"")+":+"+t.replace(/[^0-9]/g,"")+"\nitem2.X-ABLabel:🤝 Dueño actual\nitem3.EMAIL;type=INTERNET:https://www.paypal.me/teslamelendez\nitem3.X-ABLabel:Email\nitem4.URL;Web:https://latam-api.vercel.app/\nitem4.ADR:;;🇵🇪 Peru;;;;\nitem5.X-ABLabel:How Sexy You Are "+n+"! 7w7r\nEND:VCARD";a.sendMessage(e.chat,{contacts:{displayName:"NeKosmic",contacts:[{vcard:r}]}},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{contactMessage:{displayName:NombreDelBot}}}})}};handler.help=["creador","owner"],handler.tags=["informacion"],handler.command=/^(creador|owner)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/