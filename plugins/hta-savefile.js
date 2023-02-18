/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";import syntaxError from"syntax-error";import path from"path";import util from"util";const _fs=fs.promises;let handler=async(e,{text:t,command:o,__dirname:r})=>{if(!t)throw`\n*Con que nombre desea guardar el archivo?*\n_Ejemplo de uso_ : \n\n${Prefijo+o} test-plugin.js n`.trim();if(!e.quoted)return e.reply("[_>] Responda un mensaje que contenga una sintaxis correcta...");if(/p(lugin)?/i.test(o)){const o=t.replace(/plugin(s)\//i,"")+(/\.js$/i.test(t)?"":".js"),n=syntaxError(e.quoted.text,o,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});if(n)throw n;const a=path.join(r,o);await _fs.writeFile(a,e.quoted.text),e.reply(`\nEl archivo *${o}* fue guardado correctamente ✓\n\n\`\`\`\n${util.format(e.quoted.text)}\n\`\`\`\n`.trim())}else{if(e.quoted.text&&!e.quoted.mediaMessage&&/\.js/.test(t)){const o=syntaxError(e.quoted.text,t,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});if(o)throw o;await _fs.writeFile(t,e.quoted.text),e.reply(`\nEl archivo *${t}* fue guardado correctamente ✓\n\n\`\`\`\n${util.format(e.quoted.text)}\n\`\`\`\n`.trim())}else{if(!e.quoted.mediaMessage)throw"Not soportado!!!";{const o=await e.quoted.download();await _fs.writeFile(t,o),e.reply(`\nMedios guardados con éxito en *${t}*\n`.trim())}}}};handler.help=["saveplugin <nombre de archivo>"],handler.tags=["propietario","herramienta"],handler.command=/^saveplugin$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/