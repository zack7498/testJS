
function delay(){
  return new Promise((resolve)=>{
    setTimeout(resolve, 1000);
  })
}

async function a(){
  await delay();
  for(let i = 0; i < 10000; i++){
  }
  console.log(`a is finish`);
  return `a`;
}

async function b(){
  console.log(`b ok!`);
  return `b`;
}

Promise.race([a(), b()]).then((resolve)=>{
  console.log(`value :`, value);
  
}, (reject)=>{
  console.log(`reject :`, reject);
});

