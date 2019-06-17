/*jshint esversion: 6 */
(function() {
  'use strict';
  let request = require('request');
  var crypto = require('crypto');
  let async = require('async');
  let uid = [];
  for(let i = 1; i< 16; i++){
    uid.push(i);
  }
  let host = 'http://52.69.186.197:5010';
  let secret = {
    MerchantID: '19652344123000511190',
    AppID: '387051119053518BZ3m0',
    Key: '86109d44aebd4e7d9bdca76b4cdbc20c'
  };
  let fs = require(`fs`);
  let jsonList = {};

  function httpPosterForm(uri, param, callback) {


    request.post({
      'url': `${host}/Open/GetInfo`,
      'form': param
    }, function(err, response, body) {
      if (err) {
        return callback(err, null);
      } else {
        return callback(0, body);
      }
    });
  }
  console.log(new Date().getTime());

  function createSign(cParams) {
    let cKeys = Object.keys(cParams);
    cKeys.sort((a, b) => {//照字母排序
      let textA = a.toUpperCase();
      let textB = b.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    let sToSign = '';
    cKeys.forEach((key, idx) => {
      if (idx !== 0) {
        sToSign += '&';
      }
      sToSign += `${key}=${cParams[key]}`;
    });
    sToSign += secret.Key;
    return crypto.createHash('md5').update(sToSign).digest("hex").toLowerCase();
  }


  function requestToken(uid, cb) {
    request.get(`${host}/Open/GetToken/${uid}`, (error, response, body) => {
      if (error) {
        cb(err, null);
      } else {
        let cBody = JSON.parse(body);
        console.log(`requestToken`, body);

        if (cBody.Code === 1) {
          cb(0, cBody.Token);
        } else {
          return cb('Code error', cBody.Code);
        }
      }
    });
  }

  function getUser(token, cb) {
    let timeStamp = parseInt(new Date().getTime() / 1000) + 8 * 60 * 60;
    let requestParam = {
      'MerchantID': secret.MerchantID,
      'AppID': secret.AppID,
      'Token': token,
      'Time': timeStamp
    };
    requestParam.Sign = createSign(requestParam);
    console.log(`getUser`, JSON.stringify(requestParam, 0, 2));
    httpPosterForm(`${host}/Open/GetInfo`, requestParam, (err, data) => {
      cb(err, JSON.parse(data));
    });
  }

  function changePoint(openID, accessToken, point, cb) {
    let timeStamp = parseInt(new Date().getTime() / 1000) + 8 * 60 * 60;
    let requestParam = {
      'MerchantID': secret.MerchantID,
      'AppID': secret.AppID,
      'OpenID':openID,
      'AccessToken':accessToken,
      'Point':point,
      'Time': timeStamp
    };
    requestParam.Sign = createSign(requestParam);
    console.log(`changePoint requestParam :`, JSON.stringify(requestParam, 0, 2));
    httpPosterForm(`${host}/Open/Point`, requestParam, (err, data) => {
      cb(err, JSON.parse(data));
    });
  }



  async.eachSeries(uid, (iUid, next)=>{
    requestToken(iUid, (err, token) => {
      if (err) {
        console.log('Err:', err, 'Data:', token);
      } else {
        getUser(token, (err, user) => {

          let addPoint = 999999999;
          jsonList[iUid] = user.OpenID;
          if(user.OpenID == "364c83e36f351d4fb5348c3e4235921e"){
            console.log(`changePoint`, JSON.stringify(user, null, 1));

            changePoint(user.OpenID, user.AccessToken, addPoint, (err, data)=>{
              console.log(`changePoint : `, err);
              console.log(`changePoint:`, data);


            });
          } else {
            return next();
          }

        });
      }
    });
  }, (err)=>{
    console.log(jsonList);
  });

})();
