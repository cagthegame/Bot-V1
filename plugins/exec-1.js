/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import syntaxerror from"syntax-error";import{format}from"util";import{fileURLToPath}from"url";import{dirname}from"path";import{createRequire}from"module";import db from"../lib/database.js";import connection from"../lib/connection.js";const __dirname=dirname(fileURLToPath(import.meta.url)),require=createRequire(__dirname);let handler=async(r,e)=>{let t,{conn:o,usedPrefix:n,noPrefix:a,args:i,groupMetadata:l}=e,c="",s=(/^=/.test(n)?"return ":"")+a,m=1*r.exp;try{let n=15,a={exports:{}},u=new(async()=>{}).constructor("print","m","handler","require","conn","db","store","connection","Array","process","args","groupMetadata","module","exports","argument",s);t=await u.call(o,((...e)=>{if(!(--n<1))return console.log(...e),o.reply(r.chat,format(...e),r)}),r,handler,require,o,db,connection.store,connection,CustomArray,process,i,l,a,a.exports,[o,e])}catch(r){let e=syntaxerror(s,"Execution Function",{allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0,sourceType:"module"});e&&(c="```"+e+"```\n\n"),t=r}finally{o.reply(r.chat,c+format(t),r),r.exp=m}};handler.help=["> ","=> "],handler.tags=["avanzado"],handler.customPrefix=/^=?> /,handler.command=/(?:)/i,handler.owner=!0;export default handler;class CustomArray extends Array{constructor(...r){return"number"==typeof r[0]?super(Math.min(r[0],1e4)):super(...r)}}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/