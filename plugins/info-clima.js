/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fechaC from"../lib/calendario.js";let handler=async(a,{conn:e,args:i})=>{if(!i[0])return a.reply("[ ! ] Introduzca el nombre de la ciudad");try{const r=await fetchJson(`https://latam-api.vercel.app/api/clima?apikey=${MyApiKey}&q=${i[0]}`);await a.reply(`[ CLIMA ]\n\n📆 Fecha: ${fechaC.fechaCompleta}\n🌁 Ciudad: ${r.lugar}\n🗺️ Zona horaria: ${r.zonaHoraria}\n📄 Descripcion: ${await traducIr(encodeURI(r.clima.descripcion))}\n🌡️Temperatura: Minimo ${r.clima.temperatura.minimo}ºC / Maximo ${r.clima.temperatura.maximo}ºC\n🎭 Sensacion: ${r.clima.temperatura.sensacion}\n🏞️ Presion atmosferica: ${r.clima.temperatura.presion}milibares\n💦 Humedad: ${r.clima.temperatura.humedad}%\n👁️ Visibilidad: ${r.clima.visibilidad}msnm\n🌪️ Viento: Velocidad ${r.clima.viento.velocidad}km/h\n☁️ Nubes: ${r.clima.principal}%`),e.sendMessage(a.chat,{caption:"🧿",location:{degreesLatitude:r.latitud,degreesLongitude:r.longitud},mentions:[a.sender]})}catch(e){a.reply(MultiNK.Error0())}};handler.help=["clima <lugar>"],handler.tags=["busqueda"],handler.command=/^(clima|weather)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/