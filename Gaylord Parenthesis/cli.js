const index = require('./index.js')

const input = () => Array.from(process.argv).slice(2)

const output = (...args) => console.log(args.join('\n'))

const result = index(...input())

output(result)

// Run via `node cli.js some number of arguments`, the input function receive ('some', 'number', 'of', 'arguments')
