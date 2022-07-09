const tape = require('tape')
const header = require('.')

const ctx = {
  set (type, data) {
    this[type] = data
  }
}

const next = () => Promise.resolve(1)

tape.test('header', (t) => {
  header('foo', 'bar')(ctx, next)
  t.equal(ctx.foo, 'bar')
  t.end()
})
