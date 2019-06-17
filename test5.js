/*-
let nickname = require('./nicknameList.json');
let obj = {};
let iLength = nickname.length;
let fs = require('fs');



for(let i = 0; i < iLength; i++){
  let uid = i + 1;
  obj[uid] = nickname[i][0];
}
fs.writeFileSync(`./nicknameList_back.json`, JSON.stringify(obj, null, 2));*/
const aaa = {};
console.log(`${aaa.bbb || 'jojo'}`);
