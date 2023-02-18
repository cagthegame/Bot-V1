/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import{tmpdir}from"os";import path,{join}from"path";import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch}from"fs";let handler=async(r,{conn:a,usedPrefix:e,__dirname:n,args:t})=>{a.reply(r.chat,"Carpeta de archivos temporales fue limpiado correctamente ✓",r);const o=[tmpdir(),join(n,"../tmp")],i=[];return o.forEach((r=>readdirSync(r).forEach((a=>i.push(join(r,a)))))),i.map((r=>{statSync(r);unlinkSync(r)}))};handler.help=["cleartmp"],handler.tags=["propietario"],handler.command=/^cleartmp$/i,handler.rowner=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/