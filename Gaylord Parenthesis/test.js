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
  assert.strictEqual(index('()'), true)
  assert.strictEqual(index('(()()()()))((((()()()))(()()()(((()))))))'), true)
  assert.strictEqual(index(')('), false)
  assert.strictEqual(index('()('), false)
  assert.strictEqual(index('()()'), true)
  assert.strictEqual(index(')()'), false)
  assert.strictEqual(index('))(('), false)
  assert.strictEqual(index('( )\t(\r\n)'), true)
})

// Run test via `node test.js`
