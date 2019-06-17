'use strict';

let arr = [`測試支付3`, `測試支付2`, `測試支付1`]

arr.sort((infoA, infoB) => {
  let iInfoAHeadCode = infoA.charCodeAt(0);
  let iInfoBHeadCode = infoB.charCodeAt(0);
  console.log(`iInfoAHeadCode :`, iInfoAHeadCode);
  console.log(`iInfoBHeadCode :`, iInfoBHeadCode);
  if (iInfoAHeadCode > iInfoBHeadCode) {
    return 1;
  } else if (iInfoAHeadCode < iInfoBHeadCode) {
    return -1;
  }
  let iInfoAEndCode = infoA.charCodeAt(infoA.length - 1);
  let iInfoBEndCode = infoB.charCodeAt(infoB.length - 1);
  console.log(`iInfoAEndCode :`, iInfoAEndCode);
  console.log(`iInfoBEndCode :`, iInfoBEndCode);
  if (iInfoAEndCode > iInfoBEndCode) {
    return 1;
  } else if (iInfoAEndCode < iInfoBEndCode) {
    return -1;
  }
  return 0;
});
console.log(arr);
