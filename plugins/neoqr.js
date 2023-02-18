/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{exec}from"child_process";let handler=async(e,{conn:n,args:r,command:a})=>{"continuar"===r[0]?(exec("bash neoqr.sh",((n,r)=>{if(n)return e.reply(String(n));r&&e.reply("_Archivo eliminado..._"),e.reply("\n_La sesión actual del bot fue eliminada correctamente, ahora podras generar un nuevo código QR desde la consola para escanear._\n")})),reacMoji(e.chat,n,"♻️",e)):r[0]||e.reply(`\n_Desea generar un nuevo código QR?, para generar un nuevo código QR use el comando_\n\n${Prefijo+a} continuar\n`)};handler.help=["neoqr"],handler.tags=["propietario"],handler.command=/^(neoqr|newqr|nuevoqr)$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/