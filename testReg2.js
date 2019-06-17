'use strict';

const OS_REG = {
  'android': /Android*/i,
  'iOS': /iOS*/i,
  'windows': /Windows*/i
};

console.log(`is Android(small letter) :`, OS_REG.android.test(`android`));
console.log(`is Android(normal) :`, OS_REG.android.test(`Android OS 6.0.1`));
console.log(`is iOS(small letter) :`, OS_REG.iOS.test(`ios`));
console.log(`is iOS(normal) :`, OS_REG.iOS.test(`iOS`));
console.log(`is windows(small letter) :`, OS_REG.windows.test(`windows`));
console.log(`is Windows(normal) :`, OS_REG.windows.test(`Windows`));