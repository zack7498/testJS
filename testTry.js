'use strict';

function a(){
  for(let i = 0;i < 10; i++){
    try {
      throw 1
    } catch (error) {
      console.log(error);
    } finally{
      console.log(`world`);
    }
  }
  
  console.log(`hello`);
  
}

a();