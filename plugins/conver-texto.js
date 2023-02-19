/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import cheerio from"cheerio";import axios from"axios";let handler=async(t,{conn:e,text:n})=>{if(!n)return t.reply("Y el texto?");const r=await e.getName(t.sender),o=(encodeURIComponent(n),t.reply(MultiNK.Proces(r)));await o;try{const e=await fuentes(n);let r=`*[_>] Estilos de texto para:* _${n}_\n\n`;for(let t of e)r+=`✍️ *${t.name}* : ${t.result}\n\n`;t.reply(r)}catch(e){t.reply(MultiNK.Error0())}};handler.help=["txtestilo"],handler.tags=["conversor"],handler.command=/^(txtestilo|fuentes)$/i;export default handler;function fuentes(t){return new Promise(((e,n)=>{axios.get("http://qaz.wtf/u/convert.cgi?text="+t).then((({data:t})=>{let n=cheerio.load(t),r=[];n("table > tbody > tr").each((function(t,e){r.push({name:n(e).find("td:nth-child(1) > span").text(),result:n(e).find("td:nth-child(2)").text().trim()})})),e(r)})).catch((t=>n(t)))}))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/