'use strict';

function testParam({
  host = 'abc',
  port = 0
}) {
  console.log(`host :`, host);
  console.log(`port :`, port);


}

testParam(111, '222');