let jwt = require('jsonwebtoken');
let sSignKey = 'hPO5UmDUV9pKaTzWXsord8QLrhpLtM9W';
let sTokenKey = 'kbIEvYMk0ijHG74ZWSI44Xr6IqcFaNYN';
let cToken = '';

jwt.sign(JSON.stringify({
  'accessToken': '57cfc155b29b7494db37dca2bf782f62cb9a4f8255ac24a67227834e5e591d12c47d96af0bb782f5e352ad1b0b69820cead52608ae55fe40fb742e92b04fbd50',
  "firmID": "test2",
}), sSignKey, {}, (err, token) => {
  cToken = token;
  console.log(cToken);
});
/*
jwt.sign(JSON.stringify({
  'serverToken': 'e524ecdac1cbae3067fdf0c6165be85004ca1717bc5f98b9f76feac53a2ec1b094cd9473c4ac962bdbb618a6ab82e55a',
  "firmID": "test2",
}), sSignKey, {}, (err, token) => {
  cToken = token;
  console.log(cToken);
});*/


/*
jwt.sign(JSON.stringify({
  'accessToken': '57cfc155b29b7494db37dca2bf782f62cb9a4f8255ac24a67227834e5e591d12799f3973f7922aaa3481b0b03ea4ebfd418e454a2c87ff33c7dd09d7ed1b4fe4',
  'firmID': "test2",
  'gold': 36742970,
  'chip': 0,
  'gem': 9912042,
  'level': 3210,eyJhbGciOiJIUzI1NiJ9.eyJzZXJ2ZXJUb2tlbiI6IjZmZGE5NjFkNjg0ZDQ2NzE0ODBiZGQ2YWYzNWVjMDg4MDk4ODY5ZmE0ZDZlMmE1ZGI1YzNhZjE3MTcxYTNlOGYwZjkxMmM2YjBiN2M4Njg4M2M1ZjZjNjcyM2M1OTM3MyIsImZpcm1JRCI6InRlc3QyIn0.8jzx1YReAYz6xRzQ-n8IEbP-6OhGCfenmxeln4aN3WA
  'levelEXP': 70000,
  'totalBetGold': 10000,
  'totalBetChip': 0,
  'totalBetGem': 0,
  'totalWinGold': 1000,
  'totalWinChip': 0,
  'totalWinGem': 10
}), sSignKey, {}, (err, token) => {
  cToken = token;
  console.log(cToken);
  console.log(jwt.decode('eyJhbGciOiJIUzI1NiJ9.eyJlcnJvciI6MCwiZGF0YSI6eyJvcGVuSUQiOiIyMmE2NzMzZDcxNzQ3NDE5MWFhY2NmZjRiYmI1ZDkzYiIsImdvbGQiOjM2NzQzMDIwLCJjaGlwIjowLCJnZW0iOjk5MTIwNDIsImxldmVsIjozMjA0LCJsZXZlbEVYUCI6NjQ4NTB9fQ.OVPm7nYYypsij22Xz6tP0FxpHrwB5cHWVue8k0yr6es', {
    complete: true
  }));

});*/
/*
jwt.verify('eyJhbGciOiJIUzI1NiJ9.eyJlcnJvciI6MCwiZGF0YSI6eyJhY2Nlc3NUb2tlbiI6IjU3Y2ZjMTU1YjI5Yjc0OTRkYjM3ZGNhMmJmNzgyZjYyY2I5YTRmODI1NWFjMjRhNjcyMjc4MzRlNWU1OTFkMTJjNDdkOTZhZjBiYjc4MmY1ZTM1MmFkMWIwYjY5ODIwY2VhZDUyNjA4YWU1NWZlNDBmYjc0MmU5MmIwNGZiZDUwIiwib3BlbklEIjoiMjJhNjczM2Q3MTc0NzQxOTFhYWNjZmY0YmJiNWQ5M2IiLCJnb2xkIjozNjc0Mjk3MCwiY2hpcCI6MCwiZ2VtIjo5OTEyMDQyLCJuaWNrbmFtZSI6IjY2Ni02NjYiLCJsZXZlbCI6MzIxMCwibGV2ZWxFWFAiOjcwMDAwLCJoaWRlQmlnV2luIjpmYWxzZX19.1uK1WzRDXTfX_hizS-pbzVoSkX3Oq2h3XanE0bmxVys', sSignKey, (err, decoder) => {
  console.log(`err: `, err);
  console.log(`decoder: `, decoder);
});*/