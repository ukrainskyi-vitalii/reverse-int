module.exports = function reverse (n) {
    const numberString = n.toString();
    let i = numberString.length;
    let result = '';
    while (i > 0) {
        let key = i - 1;
        if (numberString[key] >= 0) {
            result = `${result}${numberString[key]}`;
        }
        
        i--;
    }
    return Number(result);
}