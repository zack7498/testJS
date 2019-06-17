const cNumberCheck = {
  number: true
};

const GETONLINE_LOCATE = {
  "0": "lobby",
  "1": "gameTheme",
  "2": "slotGame",
  "3": "luckyWheel",
  "4": "thirdPartyTheme",
  "5": "thirdPartyMAC"
};

function isNumber(num) {
  if (isNaN(num)) {
    return false;
  }
  return cNumberCheck[typeof (num)] || false;
}

let arrFakeData = [{
  'locate': 0,
  'id': '0'
}, {
  'locate': 1,
  'id': '1001_0'
}, {
  'locate': 1,
  'id': '1001_2'
}, {
  'locate': 1,
  'id': '1002_0'
}, {
  'locate': 2,
  'id': '1001_0_0'
}, {
  'locate': 2,
  'id': '1003_0_0'
}, {
  'locate': 2,
  'id': '1003_0_0'
}, {
  'locate': 3,
  'id': '7777'
}, {
  'locate': 4,
  'id': 'lacewingtech_RM002'
}, {
  'locate': 5,
  'id': 'lacewingtech_RM002_0'
}, {
  'locate': 5,
  'id': 'lacewingtech_RM001_0'
}];

let result = {
  'totalOnline': 0
};

for (let location of arrFakeData) {
  if (!location) {
    console.log(location);

  }
  let arrLocateID = location.id.split('_');
  let iLocate = location.locate;
  result.totalOnline++;
  let sLocateName = GETONLINE_LOCATE[iLocate];
  let sGameID = arrLocateID[0];
  if (arrLocateID.length === 1) {
    if (!isNumber(result[sLocateName])) {
      result[sLocateName] = 0;
    }
    result[sLocateName]++;
  } else {
    let sRoomNO = arrLocateID[1];
    if (iLocate < 3) { //3以下都是slotMAC
      let sTotalName = `${sLocateName}Total`;
      if (!result[sTotalName]) {
        result[sTotalName] = {};
      }
      if (!result[sTotalName][sRoomNO]) {
        result[sTotalName][sRoomNO] = 0;
      }
      result[sTotalName][sRoomNO]++;
    }
    if (!result[sLocateName]) {
      result[sLocateName] = {};
    }
    if (!result[sLocateName][sGameID]) {
      result[sLocateName][sGameID] = {};
    }
    if (!isNumber(result[sLocateName][sGameID][sRoomNO])) {
      result[sLocateName][sGameID][sRoomNO] = 0;
    }
    result[sLocateName][sGameID][sRoomNO]++;
  }
}

console.log(result);