const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const objectID = mongodb.ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'logSpin';
let db = null;
let collection = null;
let count = 0;



function createFakeData() {
  let arrData = [];
  for (let i = 0; i < 100; i++) {
    let obj = {
      '_id': new objectID(),
      'gameID': 1006,
      'roomNO': 3,
      'macNO': 52,
      'spinTime': '2018-09-12T03:22:42.994Z',
      'totalSpin': 7765,
      'uid': 7353,
      'heartMoment': false,
      'heartGold': 0,
      'heartChip': 0,
      'heartGem': 0,
      'totalBet': 6000,
      'totalWin': 0,
      'totalWinChip': 0,
      'codeID': 0,
      'prizeType': -1,
      'happyGold': 0,
      'happyChip': 0,
      'happyGem': 0
    };
    count++;
    arrData.push(obj);
  }
  return arrData;
}

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
  collection = db.collection('logSpin');
  setInterval(() => {
    for (let i = 0; i < 800; i++) {
      collection.insertMany(createFakeData(), (err, result) => {
        console.log(`err :`, err)
      });
    }
  }, 10 * 1000);
});