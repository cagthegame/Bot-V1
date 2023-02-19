/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,command:a,text:o})=>{if(!e.quoted&&!o)return e.reply(`Envie o responda un texto, ejemplo de uso:\n\n${Prefijo+a} lenguaje inclusivo\n`);try{const r=a[1].toLowerCase(),n=e.quoted?e.quoted.text:o;await t.sendMessage(e.chat,{text:n.replace(/[aiueo]/g,r).replace(/[AIUEO]/g,r.toUpperCase())},{quoted:e}),reacMoji(e.chat,t,"💅",e)}catch(t){e.reply(MultiNK.Error1())}};handler.help=["taxta | texte | tixti | toxto | tuxtu"],handler.tags=["conversor"],handler.command=/^(taxta|texte|tixti|toxto|tuxtu)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/