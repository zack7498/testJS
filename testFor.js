function getObj(obj, arrObjPath) {
    let tempObj = obj;
    let iLength = arrObjPath.length;
    for(let i = 0; i < iLength; i++){
        if(tempObj[arrObjPath[i]] === undefined){
            console.log(`[Widget][getObj]Can not found Obj！ obj:${obj}, arrObjPath: ${arrObjPath}, index: ${index}`);
            break;
        } else {
            tempObj = tempObj[arrObjPath[i]];
        }
    }
    return tempObj;
    /*if (obj === undefined) {
        //debug Log
        //console.log(`[Widget][getObj]Can not found Obj！ obj:${obj}, arrObjPath: ${arrObjPath}, index: ${index}`);
        return obj;
    } else if (arrObjPath.length > index) {
        return getObj(obj[arrObjPath[index]], arrObjPath, index + 1);
    }
    return obj;*/
}

let obj = { a : 1, b : 2};

for(let a in obj){
    console.log(a);

}


