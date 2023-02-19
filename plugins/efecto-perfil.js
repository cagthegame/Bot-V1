/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:i,args:r})=>{const o=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?t.user.jid:e.sender,n=await t.getName(e.sender),d=e.reply(MultiNK.Proces(n));if(await d,"its-so-stupid"==a)var s=`&dog=${i||"I%20am%20stupid%20%3Av"}`;else if("youtube-comment"==a)s=`&comment=${i||"Sexy%20Who%20Reads%20It%207w7r"}&username=${n}`;else s="";try{const i="https://some-random-api.ml/canvas/"+a+"?avatar="+encodeURIComponent(await t.profilePictureUrl(o,"image").catch((e=>"https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg")))+s;t.sendMessage(e.chat,{image:{url:i},caption:`*┏━> Efecto de perfil* : _${a}_\n*┗> Solicitado para* : _@${o.replace(/@.+/,"")}_`,mentions:[o]},{quoted:e})}catch(t){e.reply(MultiNK.Error0())}};handler.help=["lolice","horny","blur","gay","triggered","simpcard","pixelate","its-so-stupid","youtube-comment"],handler.tags=["fabricar"],handler.command=/^(lolice|horny|blur|gay|triggered|simpcard|pixelate|its-so-stupid|youtube-comment)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/