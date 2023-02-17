/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,args:s})=>{if(!e.quoted)return e.reply("[ ! ] Responda un sticker!");const t=pickRandom([[10,1e4],[1,1e3],[10,1e4],[100,1e5]]);/sticker/.test(e.quoted.mtype)&&(await a.relayMessage(e.chat,{requestPaymentMessage:{currencyCodeIso4217:"USD",amount1000:priceRand(t[0],t[1]),noteMessage:{stickerMessage:Object.assign({},e.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage)}}},{}),reacMoji(e.chat,a,"⚙️",e))};handler.help=["spago"],handler.tags=["conversor"],handler.command=/^(spago|sprecio|scosto)$/i;export default handler;function priceRand(e,a){return Math.floor(Math.random()*(a-e+1)+e)}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/