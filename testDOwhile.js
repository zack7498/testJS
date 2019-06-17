async function delay(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, interval);
  });
}

let flag = false;

setTimeout(() => {
  flag = true;
}, 10000);

(async () => {
  while (!flag) {
    await delay(1000);
    console.log(new Date());
  }
})()