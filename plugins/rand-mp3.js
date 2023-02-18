/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{toAudio}from"../lib/converter.js";import fs from"fs";let handler=async(e,{conn:t,usedPrefix:a,command:o,text:r})=>{const d=await t.getName(e.sender),i=e.reply(MultiNK.Proces(d));await i;try{const a=await fetchJson(`https://latam-api.vercel.app/api/rand_audio?apikey=${MyApiKey}`);t.sendMessage(e.chat,{audio:{url:a.audio},contextInfo:{externalAdReply:{title:`${d} 🎧`,mediaType:2,thumbnailUrl:"https://drive.google.com/uc?export=download&id=1XtkkVvPK3bkYKsSbZotyeTNSAEoAbodq",previewType:"VIDEO",mediaUrl:"https://youtu.be/Tk9Pitk1_oM"}},fileName:"DjNK.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:e})}catch(t){e.reply(MultiNK.Error0())}};handler.help=["djbot"],handler.tags=["random"],handler.command=/^djbot$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/