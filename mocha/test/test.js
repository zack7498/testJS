const should = require('should')
const average = require('../average.js')
describe('#average', () => {
  // 測試算出來的平均是不是 2.5
  it('should return the average of array', done => {
    var avg = average([1, 2, 3, 4])
    avg.should.equal(2.5)
    done()
  })
  // 測試有沒有回傳 NaN
  it('should return NaN when array is empty', done => {
    var avg = average([])
    isNaN(avg).should.be.true
    done()
  })
})