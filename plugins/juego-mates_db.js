/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";let handler=t=>t;handler.before=async function(t){if(!/^-?[0-9]+(\.[0-9]+)?$/.test(t.text))return!0;const e=t.chat;if(!(t.quoted&&t.quoted.fromMe&&t.text&&/^¿Cuál es el resultado de/i.test(t.quoted.text)))return!0;if(this.math=this.math?this.math:{},!(e in this.math))return this.sendMessage(t.chat,{text:"La pregunta ya fue resuelta..."},{quoted:t});if(t.quoted.id==this.math[e][0].id){const a=JSON.parse(JSON.stringify(this.math[e][1]));t.text==a.result?(db.data.users[t.sender].exp+=a.bonus,clearTimeout(this.math[e][3]),delete this.math[e],this.sendButton(t.chat,`*Respuesta correcta!*\nAqui tienes tu recompensa:\n+${a.bonus} XP\n`,NombreDelBot,null,[["SIGUIENTE",Prefijo+`mates ${a.mode}`]],t)):0==--this.math[e][2]?(clearTimeout(this.math[e][3]),delete this.math[e],t.reply(`*[ ! ] Se acabo el tiempo*\nRespuesta: *${a.result}*`)):await t.reply(`*Respuesta incorrecta!*\nTe quedan ${this.math[e][2]} oportunidades`)}return!0};export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/