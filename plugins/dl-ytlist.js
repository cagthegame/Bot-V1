/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:t,args:i})=>{if(!i[0])return;if(!isUrl(i[0])&&!i[0].includes("youtube.com"))return;await t.getName(e.sender);const r=[{title:"⏺️ - ⏮️ ⏸️ ⏭️ - 🔀",rows:[{title:"*[ > ] Descargar Audio*",description:"_Opción 1_",rowId:`${Prefijo}ytmp3 ${i[0]}`},{title:"*[ > ] Descargar Audio*",description:"_Opción 2_",rowId:`${Prefijo}yta ${i[0]}`},{title:"*[ > ] Descargar Audio*",description:"_Opción 3_",rowId:`${Prefijo}ytabochi ${i[0]}`}]},{title:"🎦 - ⏮️ ⏸️ ⏭️ - 🔀",rows:[{title:"*[ > ] Descargar Video*",description:"_Opción 1_",rowId:`${Prefijo}ytmp4 ${i[0]}`},{title:"*[ > ] Descargar Video*",description:"_Opción 2_",rowId:`${Prefijo}ytv ${i[0]}`},{title:"*[ > ] Descargar Video*",description:"_Opción 3_",rowId:`${Prefijo}ytvbochi ${i[0]}`}]}];try{await t.sendMessage(e.chat,{text:"┗━━━━━━━━━━━━━━━━━━",footer:"\n"+NombreDelBot,title:`┏━━━━━━━━━━━━━━━━━━\n${i[0]}`,buttonText:" Seleccione una opción ",sections:r},{quoted:e})}catch(t){e.reply(MultiNK.Error0())}};handler.tags=["servicio"],handler.command=/^listytdl$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/