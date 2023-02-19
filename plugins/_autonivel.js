/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import db from"../lib/database.js";import{canLevelUp}from"../lib/levelling.js";export function before(e){const l=db.data.users[e.sender];if(!l.autolevelup)return!0;const r=1*l.level;for(;canLevelUp(l.level,l.exp,global.multiplier);)l.level++;r!==l.level&&(l.role=global.rpg.role(l.level).name,e.reply(`\nFelicidades, ${this.getName(e.sender)} subiste de nivel!\n♻️ Nivel anterior : ${r}\n🪀 Nivel actual : ${l.level}\n⚔️ Rol : ${l.role}\n\t`.trim()))}export const disabled=!0;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/