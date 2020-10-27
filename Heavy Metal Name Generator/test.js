const index = require('./index.js')
const assert = require('assert')

const it = (desc, fn) => {
  try {
    fn()
    console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`)
  } catch (error) {
    console.log('\n')
    console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`)
    console.error(error)
  }
}

it('should return correct generated name', () => {
  assert.strictEqual(index('Sergey Smolennikov'), 'GUILTY TEMPLE')
  assert.strictEqual(index('Ebomannyi Kozel'), 'HOLY KILL')
  assert.strictEqual(index('Chernozhopyi Blyat'), 'BLACK FURY')
})

// Run test via `node test.js`