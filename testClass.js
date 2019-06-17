class Test {
  constructor() {
    this.a = 'a';
    this.b = 'b';
  }
  prop(name) {
    return this[name];
  }
}

let a = new Test();

let b = (name) => a.prop(name);

console.log(b('b'));