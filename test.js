const arguments = process.argv.slice(2)

// some function
const square = num => Math.pow(num, 2)

const number = Number(arguments[0])

if (isNaN(number)) {
    console.error("THIS IS NOT A FUCKING NUMBER!")
    process.exit(1)
}

const result = square(number)

console.log(result)

