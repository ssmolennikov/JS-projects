const arguments = process.argv.slice(2)

const cube = num => Math.pow(num, 3)

const number = Number(arguments[0])

if (isNaN(number)) {
    console.error("THIS IS NOT A FUCKING NUMBER!")
    process.exit(1)
}

const result = cube(number)

console.log(result)
