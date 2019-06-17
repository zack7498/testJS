
let log = require('single-line-log').stdout;
let i = 0;
console.log(`start`);

setInterval(()=>{
    log(`${i}`);

    i++;
    log.clear();
    console.log(``);

    console.log(`start`);
}, 1000);