'use strict';

function format(arr){
  return {'value': (arr[0])? arr[0] : 0, 'from': arr};
}

function halfSlice (arr = []){
  const iLength = arr.length;
  const iHalfLen =  Math.floor(iLength / 2);
  let arr1 = arr.slice(0, iHalfLen);
  let arr2 = arr.slice(iHalfLen);
  return [arr1, arr2];
}
2
function softBeforeMerge(arr1, arr2, arr3, arr4){
  let arrSortResult = [];  
  while(arr1.length > 0 || arr2.length > 0 || arr3.length > 0 || arr4.length > 0){
    let firstMaxEle = ( (arr1[0] || 0) > (arr2[0] || 0)) ? format(arr1) :format(arr2);
    //console.log(`arr1[0] :`, arr1[0]);
    //console.log(`arr2[0] :`, arr2[0]);
    let secondMaxEle = ( (arr3[0] || 0) > (arr4[0] || 0))? format(arr3) :format(arr4);
    console.log(`arr1.length :`, arr1.length);
    console.log(`arr2.length :`, arr2.length);
    console.log(`arr3.length :`, arr3.length);
    console.log(`arr4.length :`, arr4.length);
    console.log(`firstMaxEle :`, firstMaxEle);
    console.log(`secondMaxEle :`, secondMaxEle);
    if(firstMaxEle.value > secondMaxEle.value){
//      console.log(`firstMaxEle :`, firstMaxEle);
      arrSortResult.push(firstMaxEle.from.shift());
    } else {
      //console.log(`secondMaxEle :`, secondMaxEle);
      arrSortResult.push(secondMaxEle.from.shift());
    }
    console.log(`arrSortResult :`, arrSortResult);
  }
  console.log(`arrSortResult :`, arrSortResult);
}

let a = [10, 5];
let b = [8, 6];
let c = [9, 4];
let d = [3, 2];

softBeforeMerge(a, b, c, d);