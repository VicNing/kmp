const kmp = require('./kmp.js')
const assert = require('assert')

assert.strictEqual(kmp('12345abc789', 'abc'), 5, 'test failed')
assert.strictEqual(kmp('12345abc789', 'qqq'), -1, 'test failed')
assert.strictEqual(kmp('cababad', 'abab'), 1, 'test failed')

console.log('[test]Congrats, test passed!')