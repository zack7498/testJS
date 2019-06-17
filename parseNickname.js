
let nicknameList = require('./nickname850.json');
let uid = 10;
let newNickNameList = {};
const fs = require('fs');

nicknameList.forEach(element => {
  for(let objname in element){
    if(element[objname]){
      newNickNameList[uid] = element[objname];
      uid++;
    }

  }
});

fs.writeFileSync('./newNikcnameList.json', JSON.stringify(newNickNameList, null, 2), (err, data)=>console.log(`write OK`));