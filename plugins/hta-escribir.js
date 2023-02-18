/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{format}from"util";import{spawn}from"child_process";const fontPath="multimedia/font/Zahraaa.ttf";let handler=async(t,{conn:a,args:n})=>{if(!global.support.convert&&!global.support.magick&&!global.support.gm)return handler.disabled=!0;const e=new Date,o=e.toLocaleDateString(MultiNK.Lengua()),i=e.toLocaleDateString(MultiNK.Lengua(),{weekday:"long"}),r=n.join` `;let l=[];const[s,...p]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert","multimedia/imagenes/hojita.jpg","-font",fontPath,"-size","1024x784","-pointsize","20","-interline-spacing","1","-annotate","+806+78",i,"-font",fontPath,"-size","1024x784","-pointsize","18","-interline-spacing","1","-annotate","+806+102",o,"-font",fontPath,"-size","1024x784","-pointsize","20","-interline-spacing","-7.5","-annotate","+344+142",r,"jpg:-"];spawn(s,p).on("error",(a=>t.reply(format(a)))).on("close",(()=>{a.sendFile(t.chat,Buffer.concat(l),"nulis.jpg","✍️📖",t)})).stdout.on("data",(t=>l.push(t)))};handler.help=["escribir <texto>"],handler.tags=["fabricar"],handler.command=/^escribir$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/