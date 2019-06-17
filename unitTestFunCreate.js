
/*let ttt = function(){
  this.b = 2;
}

ttt.prototype.a = function a(){

  function b(){
    let a = 1
    let b = 2
    let c = 1
    let d = 1
  }

  function c(){
    let a = 1
    let b = 2
    let c = 1
    let d = 1
  }

  function d(){
    let a = 1
    let b = 2
    let c = 1
    let d = 1
  }

  function e(){
    let a = 1
    let b = 2
    let c = 1
    let d = 1
  }
}*/

function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o 參考 o2
  o2.a = o; // o2 參考 o

  return 'azerty';
}

while (true) {
  f();
}