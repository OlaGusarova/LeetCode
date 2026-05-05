const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return ''
    function getNod(a, b) {
        while (b > 0) {
            let temp = b
            b = a % b 
            a = temp
        }
        return a
    }
    const nod = getNod(str1.length, str2.length)
    return str1.substring(0, nod)
};

module.exports = gcdOfStrings;