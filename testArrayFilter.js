let arrTest = [1, 2, 3, '666'];

let arrResult = arrTest.filter((ele)=>{
  if(typeof ele === 'number'){
    return true;
  }
  return false;
})

console.log(arrResult);
