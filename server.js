/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import express from"express";import path from"path";import{createServer}from"http";import{Server}from"socket.io";import{toBuffer}from"qrcode";import fetch from"node-fetch";import Helper from"./lib/helper.js";function connect(e,t){let o=global.app=express(),r=global.server=createServer(o),n="invalid";e.ev.on("connection.update",(function({qr:e}){e&&(n=e)})),o.use((async(e,t)=>{t.setHeader("content-type","image/png"),t.end(await toBuffer(n))})),o.use(express.static(path.join(Helper.__dirname(import.meta.url),"views"))),new Server(r).on("connection",(t=>{let{unpipeEmit:o}=pipeEmit(e,t,"conn-");t.once("disconnect",o)})),r.listen(t,(()=>{console.log("Aplicación escuchada en el puerto: ",t),opts.keepalive&&keepAlive()}))}function pipeEmit(e,t,o=""){let r=e.emit;return e.emit=function(e,...n){r.emit(e,...n),t.emit(o+e,...n)},{unpipeEmit(){e.emit=r}}}function keepAlive(){const e=`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;/(\/\/|\.)undefined\./.test(e)||setInterval((()=>{fetch(e).catch(console.error)}),3e5)}export default connect;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/