/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{unlinkSync,readFileSync}from"fs";import{join}from"path";import{exec}from"child_process";import fs from"fs";let handler=async(e,{conn:a,args:t,__dirname:r,command:o})=>{const n=await a.getName(e.sender);try{const t=e.quoted?e.quoted:e,i=(e.quoted?e.quoted:e.msg).mimetype||"";let d;if(/acelerarvid/.test(o)&&(d=['-filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]"']),/lentovid/.test(o)&&(d=['-filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]"']),/reversavid/.test(o)&&(d=["-vf reverse -af areverse"]),!/video/.test(i))return e.reply(`Envie ó Responda un vídeo, con el comando \n\n${Prefijo+o}\n`);{const i=getRandom(".mp4"),s=join(r,"../tmp/"+i),l=await t.download(!0);exec(`ffmpeg -i ${l} ${d[0]} ${s}`,(async(t,r,i)=>{if(await unlinkSync(l),t)return e.reply(MultiNK.Error1());const d=await readFileSync(s);await a.sendMessage(e.chat,{video:d,caption:`┏━━⊱ ${o} \n┗⊱ By ${n||NombreDelBot}`})})),reacMoji(e.chat,a,"⚙️",e)}}catch(e){throw e}};handler.help=["acelerarvid","lentovid","reversavid"],handler.tags=["conversor"],handler.command=/^(acelerarvid|lentovid|reversavid)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/