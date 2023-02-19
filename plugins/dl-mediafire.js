/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{mediafiredl}from"@bochilteam/scraper";let handler=async(e,{conn:i,args:r,command:l})=>{if(!r[0])return e.reply("*[ ! ] Y el Link?*");if(!isUrl(r[0])&&!r[0].includes("https://www.mediafire.com/"))return e.reply("*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_");try{const l=await mediafiredl(r[0]),{url:a,url2:n,filename:t,ext:d,aploud:m,filesize:o,filesizeH:c}=l,s=`\n*Nombre:* ${t}\n*Tamaño:* ${c}\n*Extensión:* ${d}\n*Fecha de subida:* ${m}\n*Tipo de archivo :* ${l.filetype}\n*Url :* ${n}\n`.trim();if(e.reply(s),o>5e4)return e.reply(MultiNK.Error1());await i.sendFile(e.chat,a,t,"",e,null,{mimetype:d,asDocument:!0})}catch(i){e.reply(MultiNK.Error0())}};handler.help=["mediafire <link>"],handler.tags=["servicio"],handler.command=/^mediafire$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/