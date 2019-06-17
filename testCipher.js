'use strict'
let crypto = require('crypto');
// 產生一個加密器
let cipher = crypto.createCipheriv('aes256', `tokenKey`, 'AcGy;Ld-agZd`0b8');
// 將加密或解密對象變更為data，並且設定檔案的輸出入編碼格式
let enc = cipher.update(gid, 'ascii', 'hex');
// 返回剩餘的加密或解密內容
enc += cipher.final('hex');
return enc;