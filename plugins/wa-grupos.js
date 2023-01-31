/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:t})=>{let r=await a.profilePictureUrl(e.chat,"image").catch(e=>null)||"./multimedia/imagenes/avatar_contact.png",l=await a.getName(e.sender);try{let p=await fetchJson(`https://latam-api.vercel.app/api/gpwa?apikey=${MyApiKey}`);a.relayMessage(e.chat,{extendedTextMessage:{text:p.enlaces+`
${"‎".repeat(850)}ᴺᴼᵀᴬ" ˢᶦ ᵉⁿ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉˢᵗᵃ́ ᵖʳᵒʰᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦʳ ᵉⁿˡᵃᶜᵉˢ• ᴰᵉ ˢᵉʳ ⁿᵉᶜᵉˢᵃʳᶦᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᶦᵉⁿᵉⁿ ᵗᵒᵈᵒ ᵉˡ ᵈᵉʳᵉᶜʰᵒ ᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃˡ ᵇᵒᵗ ⁻`,contextInfo:{externalAdReply:{title:`${l} Quieres agregar tu grupo :D?`,body:"Toca aqui ;3",previewType:"PHOTO",thumbnailUrl:"",thumbnail:await getBuffer(r),sourceUrl:"https://api.whatsapp.com/send?phone=51995386439&text=Wenasss!%0ADeseo%20agregar%20mi%20grupo%20al%20comando%20del%20bot%0AAsunto%20del%20grupo%3A%20%0ALink%3A%20"}}}},{})}catch(n){e.reply(MultiNK.Error0())}};handler.help=["wagrupos"],handler.tags=[""],handler.command=/^(wagrupos|gruposwa|grupos)$/i,handler.limit=2;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/