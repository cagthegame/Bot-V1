/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:o,command:a})=>{e.quoted&&e.quoted;const n=(e.quoted?e.quoted:e.msg).mimetype||"";if(!/image|video/.test(n))return e.reply(`Envie ó Responda un video ó imagen con el comando \n\n${Prefijo+a}\n`);try{const a=e.quoted.caption||"[ ! ] No se pudo recuperar un comentario.";await o.sendMessage(e.chat,{text:a},{ephemeralExpiration:86400,quoted:e}),reacMoji(e.chat,o,"🖨️",e)}catch{e.reply(MultiNK.Error1())}};handler.help=["rescom"],handler.tags=["herramienta"],handler.command=/^rescom$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/