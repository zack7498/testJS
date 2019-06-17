let a = undefined;

for(let key in a){
    console.log(`66666`);

}

console.log(`end`);

const delay = (waitSec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, waitSec*1000);
    });
};
