/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(n,{conn:a,participants:e,groupMetadata:i})=>{const t=await a.profilePictureUrl(n.chat,"image").catch((n=>null))||"./multimedia/imagenes/avatar_contact.png",r=e.filter((n=>n.admin)),d=r.map(((n,a)=>`${a+1}. _@${n.id.split("@")[0]}_`)).join("\n"),l=i.owner||r.find((n=>"superadmin"===n.admin))?.id||n.chat.split`-`[0]+"@s.whatsapp.net",p=e.filter((n=>"admin"===n.admin)).length+e.filter((n=>"superadmin"===n.admin)).length,o=String.fromCharCode(8206).repeat(850),s=`\n*Nombre del grupo* : ${i.subject}\n*Creado por* : _${l.split("@")[0],"@"+l.split("@")[0]}_\n*Fecha de creación* : _${formatDate(1e3*i.creation)}_\n*Total de participantes* : _${e.length}_\n*Total de administradores* : _${p}_\n${d}\n*No administradores* : _${e.filter((n=>null===n.admin)).length}_\n*ID del grupo* : _${i.id}_\n*Descripción* : \n${o}\n${i.desc?.toString()||""}\n`.trim();a.sendFile(n.chat,t,"pp.jpg",s,n,!1,{mentions:[...r.map((n=>n.id)),l]})};handler.help=["gpinfo"],handler.tags=["casual"],handler.command=/^(gpinfo|infogp|groupinfo)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/