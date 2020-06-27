const number = (num) => {
    if (num === 0 || num > 0) {
        return num;
    } else {
        return -num;
    }
}
console.log(number(-1))