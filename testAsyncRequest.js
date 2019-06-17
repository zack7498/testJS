let asyncRequest = require('request-promise-native');

const uri = `https://webservice.islot777.com:3080/prefab/getGameInfo`;

(async()=>{

  try {
    let cResult = await asyncRequest.post(uri, {});
  console.log(JSON.parse(cResult, null, 2));
  } catch (
  error) {
    console.log(`is Error :`, error);
  }
  
  

})();