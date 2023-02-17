/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";import path,{dirname}from"path";import assert from"assert";import{spawn}from"child_process";import syntaxError from"syntax-error";import{fileURLToPath}from"url";import{createRequire}from"module";import chalk from"chalk";const __filename=fileURLToPath(import.meta.url),__dirname=dirname(__filename),require=createRequire(__dirname);let folders=[".",...Object.keys(require(path.join(__dirname,"./package.json")).directories)],files=[];for(let e of folders)for(let r of fs.readdirSync(e).filter((e=>e.endsWith(".js"))))files.push(path.resolve(path.join(e,r)));for(let e of files){if(e==__filename)continue;console.error(chalk.red("[!] Analizando",e));const r=syntaxError(fs.readFileSync(e,"utf8"),e,{sourceType:"module",allowReturnOutsideFunction:!0,allowAwaitOutsideFunction:!0});r&&assert.ok(r.length<1,e+"\n\n"+r),assert.ok(e),console.log(chalk.green("[✓] Hecho",e,"\n"))}

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/