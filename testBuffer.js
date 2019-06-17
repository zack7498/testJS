let str = JSON.stringify({"hey": "hi"});

//console.log(Buffer.byteLength(str));

const buf = Buffer.from([0x10, 0x01]);


/*console.log(buf.readUInt16BE(0));
console.log(buf.readUInt16LE(0));

console.log(buf.readUInt16BE(0).toString(16));

console.log(buf.readUInt16LE(0).toString(16));

console.log(buf.toJSON(buf));*/

const testStr = '0123456789';

let buff = Buffer.alloc(6);
let date = new Date().getTime();
let date2 = new Date(1531811095656);
console.log(date);
console.log(date2);
console.log(date2.getFullYear());
console.log(date2.getMonth() + 1);
console.log(date2.getDate());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());

let prizeBuffer = Buffer.from([132,
  3,
  0,
  0]
);

console.log(prizeBuffer.readInt32LE());


/*for(let i = 0; i < testStr.length; i++){
  buff.writeUInt8(testStr[i], i);
}*/
//console.log(buff[0]);

