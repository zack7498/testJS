'use strict';

let time = new Date().getTime();

let localCacheDuraction = 180000;

let timeoffset = localCacheDuraction - (time % localCacheDuraction);
console.log(`timeoffset :`, timeoffset);

console.log(`updateTime :`, timeoffset + localCacheDuraction/2);

