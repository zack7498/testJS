let str = "101011010111111111";

let iTargetMAC = 0;

let arrMacState = str.split(``);
let arrGameThemeInfo = [{
  'macNO': 1,
  'serverID': 'game-1'
},
{
  'macNO': 3,
  'serverID': 'game-1'
},
{
  'macNO': 6,
  'serverID': 'game-1'
}
];
let cGameThemeInfo = {};
arrGameThemeInfo.forEach((macInfo, index) => {
  cGameThemeInfo[macInfo.macNO] = {
    'removeIndex': index,
    'serverID': macInfo.serverID,
    'macNO':macInfo.macNO
  };
});
console.log(`arrMacState`, arrMacState);

if(arrMacState[iTargetMAC] === '1'){
  console.log(`target is `, arrMacState[iTargetMAC]);
  let arrEmptyMacList = arrMacState.map((macState, index)=>({
    'macState': macState,
    'macNO': index
  }))
  .filter((macInfo) => {
    if (macInfo.macState === '0' && cGameThemeInfo[macInfo.macNO]) {
      return true;
    }
    return false;
  }); //過濾掉有人的機台
  console.log(`arrEmptyMacList`, arrEmptyMacList);
  let iNewTargetMAC = arrEmptyMacList[getRandomNum(0, arrEmptyMacList.length)].macNO;
  let cTargetMacInfo = cGameThemeInfo[iNewTargetMAC];
  console.log(`iNewTargetMAC`, iNewTargetMAC);
  console.log(`cTargetMacInfo`, cTargetMacInfo);
  console.log(`remove:`, arrGameThemeInfo.splice(cTargetMacInfo.removeIndex, 1));

  console.log(`arrGameThemeInfo :`, arrGameThemeInfo);

} else {
  console.log(`target is `, arrMacState[iTargetMAC]);

}

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
