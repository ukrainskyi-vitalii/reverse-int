module.exports = function reverse (n) {
    const numberString = n.toString();
    let i = numberString.length;
    let result = '';
    while (i > 0) {
        let key = i - 1;
        result = `${numberString[key]}${result}`;
    }
    return Number(result);
}
