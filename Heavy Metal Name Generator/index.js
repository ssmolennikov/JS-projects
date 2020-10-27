const generator = (...input) => {
    const [name, surname] = validate(input.join(' '))

    const firstWord = getWordByName(name)
    const secondWord = getWordBySurname(surname)
    return firstWord + ' ' + secondWord
}

const validate = (input) => {
    const items = input.split(' ')
    if (items.length !== 2) {
        throw new Error('Count arguments must be = 2')
    }
    return items
    // const name = items[0]
    // const surname = items[1]
    // return [name, surname]
}

const getWordByName = (name) => {
    const letter = name[0].toLowerCase()
    const map = {
        a: 'RANCID',
        b: 'INSANE',
        c: 'BLACK',
        d: 'IRON',
        e: 'HOLY',
        f: 'RABID',
        g: 'BLOODY',
        h: 'SATAN\'S',
        i: 'BASTARD',
        j: 'FORSAKEN',
        k: 'HELL\'S',
        l: 'FORBIDDEN',
        m: 'DARK',
        n: 'FRANTIC',
        o: 'DEVIL\'S',
        p: 'EVIL',
        q: 'INNER',
        r: 'BLEEDING',
        s: 'GUILTY',
        t: 'WITCH\'S',
        u: 'HEAVY',
        v: 'ILLEGAL',
        w: 'FALLEN',
        x: 'SINISTER',
        y: 'CRAZY',
        z: 'TROUBLED',
    }
    return map[letter]
}

const getWordBySurname = (surname) => {
    const letter = surname[0].toLowerCase()
    const map = {
        a: 'EMPIRE',
        b: 'FURY',
        c: 'RAGE',
        d: 'ZOMBIES',
        e: 'SIN',
        f: 'WARRIORS',
        g: 'ANGELS',
        h: 'DEATH',
        i: 'ANARCHY',
        j: 'HENCHMEN',
        k: 'KILL',
        l: 'VENGEANCE',
        m: 'TENDENCIES',
        n: 'MAGIC',
        o: 'SOLDIER',
        p: 'GODS',
        q: 'GOBLIN',
        r: 'SPAWN',
        s: 'TEMPLE',
        t: 'REALM',
        u: 'HATE',
        v: 'SLAVES',
        w: 'THORN',
        x: 'ABYSS',
        y: 'FIRE',
        z: 'SECRETS',
    }
    return map[letter]
}

module.exports = generator

// Example of main function for run test
// Run test via `node test.js`
