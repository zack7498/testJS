let accountReg = /[A-Z0-9_-]{4,12}/;

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const VERIFY_CODE_REGEXP = /^[0-9]{4}$/;

console.log(VERIFY_CODE_REGEXP.test("1234"));

console.log(accountReg.test(`----`));



console.log(emailReg.test("zack7498@gmail.com.fdsf.fsfew"));


function replaceString2(msg, replaceString, callback) {
  let sString = JSON.parse(JSON.stringify(msg));
  //sString.replace(/}{/g, '} {');
  //console.log(sString);

  let aReplaceRules = sString.match( /*/\\{[\w]+\\}/*/ /{([^}]*)}/ig); // 儲存{keyword}的變數
  console.log(aReplaceRules);

  let key = aReplaceRules.map((ele) => ele.replace(/[{}]/ig, '')); // 儲存replaceString的key
  console.log(`key`, key);
  let sLength = (aReplaceRules) ? aReplaceRules.length : 0; // 有多少keyWord

  if (!aReplaceRules) {
    return callback(null, sString);
  }

  for (let i = 0; i < sLength; i++) { // 根據{keyword}的數量跑迴圈
    if (replaceString[key[i]] || replaceString[key[i]] === 0) { // 當replaceString有東西時才會做取代字串的動作
      sString = sString.replace(aReplaceRules[i], replaceString[key[i]]);
    }
    if (i === sLength - 1) {
      return callback(null, sString);
    }
  }
};