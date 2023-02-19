/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let{downloadContentFromMessage}=(await import("@adiwajshing/baileys"));export async function before(e,{isAdmin:a,isBotAdmin:t}){const n=db.data.chats[e.chat];if(!/^[.~#/\$,](read)?viewonce/.test(e.text)&&n.antiviewonce&&!n.isBanned&&"viewOnceMessage"==e.mtype){const a=e.message.viewOnceMessage.message,t=Object.keys(a)[0],n=await downloadContentFromMessage(a[t],"imageMessage"==t?"image":"video");let s=Buffer.from([]);for await(const e of n)s=Buffer.concat([s,e]);if(/video/.test(t))return this.sendFile(e.chat,s,"error.mp4",`${a[t].caption}\n\n*Mensaje multimedia para verse una sola vez, recuperado ✓*\n`,e);if(/image/.test(t))return this.sendFile(e.chat,s,"error.jpg",`${a[t].caption}\n\n*Mensaje multimedia para verse una sola vez, recuperado ✓*\n`,e)}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/