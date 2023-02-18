/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fetch from"node-fetch";const{getBinaryNodeChild,getBinaryNodeChildren}=(await import("@adiwajshing/baileys")).default;let handler=async(a,{conn:t,text:e,participants:n})=>{const r=n.map((a=>a.id)),i=(await Promise.all(e.split(",").map((a=>a.replace(/[^0-9]/g,""))).filter((a=>a.length>4&&a.length<20&&!r.includes(a+"@s.whatsapp.net"))).map((async a=>[a,await t.onWhatsApp(a+"@s.whatsapp.net")])))).filter((a=>a[1][0]?.exists)).map((a=>a[0]+"@c.us")),l=await t.query({tag:"iq",attrs:{type:"set",xmlns:"w:g2",to:a.chat},content:i.map((a=>({tag:"add",attrs:{},content:[{tag:"participant",attrs:{jid:a}}]})))}),d=await t.profilePictureUrl(a.chat).catch((a=>null)),o=(d?await(await fetch(d)).buffer():Buffer.alloc(0),getBinaryNodeChild(l,"add")),p=getBinaryNodeChildren(o,"participant");for(const e of p.filter((a=>403==a.attrs.error))){const n=e.attrs.jid,r=getBinaryNodeChild(e,"add_request"),i=(r.attrs.code,r.attrs.expiration,`*[ ! ] Error, no se pudo añadir a @${n.split("@")[0]} al grupo*\n\n_Por favor enviale un enlace de invitación manualmente wa.me/${n.split("@")[0]}_\n`);a.reply(i,null,{mentions:t.parseMention(i)})}};handler.help=["add @numero"],handler.tags=["propietario"],handler.command=/^add$/i,handler.owner=!0,handler.group=!0,handler.botAdmin=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/