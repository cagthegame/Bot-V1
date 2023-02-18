/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{areJidsSameUser}from"@adiwajshing/baileys";import fs from"fs";let handler=async(e,{conn:a,args:t,isAdmin:i})=>{const n=e.chat;if(/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(t[0])&&(n=t[0]),!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(n))return global.dfail("group",e,a);const r=await a.groupMetadata(n);if(!r)throw"groupMetadata no esta definido :/";if(!("participants"in r))throw"participants no esta definido :(";const o=r.participants.find((e=>areJidsSameUser(e.id,a.user.id)));if(!o)return e.reply("No estoy en ese grupo :v");if(!o.admin)return global.dfail("botAdmin",e,a);if(!i)return global.dfail("admin",e,a);const s=await a.groupInviteCode(n);a.relayMessage(e.chat,{extendedTextMessage:{text:`\n🪀  https://chat.whatsapp.com/${s}\n`,contextInfo:{mentionedJid:[e.sender],externalAdReply:{mediaType:"VIDEO",mediaUrl:null,title:r.subject,body:null,thumbnail:fs.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:"https://chat.whatsapp.com/"+s}}}},{})};handler.help=["gplink"],handler.tags=["grupos"],handler.command=/^(gplink|linkgp|grouplink|linkgroup)$/i,handler.group=!0,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/