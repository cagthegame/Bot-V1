/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

const defaultLang=MultiNK.Lengua();let handler=async(e,{args:t,command:a})=>{if(!t||!t[0])return e.reply(`Envie o responda un texto con el comando ${Prefijo+a} <idioma> [texto], ejemplo:\n\n${Prefijo+a} es Hello World\n`);let r=t[0],o=t.slice(1).join(" ");2!==(t[0]||"").length&&(r=defaultLang,o=t.join(" ")),!o&&e.quoted&&e.quoted.text&&(o=e.quoted.text);try{const t=await fetchJson(`https://latam-api.vercel.app/api/traductor?apikey=${MyApiKey}&idioma1=${r||defaultLang}&texto1=${o||"-"}`);e.reply(t.traducido)}catch(t){e.reply(MultiNK.Error0())}};handler.help=["traducir <idioma> [texto]"],handler.tags=["herramienta"],handler.command=/^(traducir|tr|translate)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/