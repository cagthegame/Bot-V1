/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{generateWAMessageFromContent as t}from"@adiwajshing/baileys";import e from"../lib/database.js";let handler=async(a,{conn:i,participants:o,groupMetadata:n,isBotAdmin:s})=>{let{isBanned:c,welcome:d,detect:A,antiLink:r,antiLink2:l,delete:v,estranjerosnot:I,antifake1:u,antifake2:h,antiTraba:p,simi:D,soloAdmins:X}=e.data.chats[a.chat],{restrict:m,antiPrivado:O,nkNspm:g}=e.data.settings[i.user.jid],b=i.user.id.split(":")[0]+"@s.whatsapp.net",C="@"+i.user.id.split(":")[0];"‎".repeat(850);let T=t(a.chat,{liveLocationMessage:{degreesLatitude:-4.4764769,degreesLongitude:142.4871568,caption:`
*Grupo* : _[ ${n.subject} ]_

*Grupo baneado* : _${c?"[✓]":"[X]"}_

*Bot participante* : ${NombreDelBot}
_${C}_

*Bot Admin?* : _${s?"[✓]":"[X]"}_

*Bot* : _${opts.self?"MODO-PRIVADO [ ! ]":"MODO-PUBLICO [✓]"}_

*Modo Restringido* : _${m?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Modo Solo-Admins* : _${X?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Anti-Privado* : _${O?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Ser Sub-Bot* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_

*Bienvenida* : _${d?"Activo [✓]":"Inactivo [X]"}_

*Antilink* : _${r?"Activo [✓]":"Inactivo [X]"}_

*Antilink 2* : _${l?"Activo [✓]":"Inactivo [X]"}_

*Anti Extranjeros* : _${I?"Activo [✓]":"Inactivo [X]"}_

*No Falsos* : _${u?"Activo [✓]":"Inactivo [X]"}_

*No Falsos 2* : _${h?"Activo [✓]":"Inactivo [X]"}_

*Detecci\xf3n* : _${A?"Activo [✓]":"Inactivo [X]"}_

*Anti Eliminar* : _${v?"Inactivo [X]":"Activo [✓]"}_

*Antitraba* : _${p?"Activo [✓]":"Inactivo [X]"}_

*Chat Bot* : _${D?"Activo [✓]":"Inactivo [X]"}_
`,sequenceNumber:0x5e2b9e7ffcf11,timeOffset:8600,jpegThumbnail:null,contextInfo:{mentionedJid:[b]}}},{quoted:a});await i.relayMessage(a.chat,T.message,{messageId:T.key.id}),reacMoji(a.chat,i,"\uD83E\uDE80",a)};handler.help=["estadobot"],handler.tags=["casual"],handler.command=/^(estadobot)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/