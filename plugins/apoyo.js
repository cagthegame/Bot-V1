/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{generateWAMessageFromContent,generateWAMessage}from"@adiwajshing/baileys";import fs from"fs";let handler=async(e,{conn:a})=>{const s=String.fromCharCode(8206).repeat(850);await a.relayMessage(e.chat,{requestPaymentMessage:{noteMessage:{extendedTextMessage:{text:`💻 *Redes sociales* 📲\n\n${s+TusRedesSociales}`,currencyCodeIso4217:"PEN",requestFrom:"0@s.whatsapp.net",expiryTimestamp:8600,amount:1e4,background:fs.readFileSync("./multimedia/imagenes/thx.jpg")}}}},{}),reacMoji(e.chat,a,"❤️",e)};handler.help=["apoyo"],handler.tags=["casual"],handler.command=/^(apoyo|apoyar|donar|donasi|dono)$/i,handler.exp=100;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/