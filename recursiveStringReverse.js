const recursiveStringReverse = (s, reversedString = "", count = 0) => {
    const endIndex = s.length -1;
    if(count < s.length) {
        reversedString =   reversedString + s[endIndex - count]
        count = count + 1;
        return recursiveStringReverse(s, reversedString, count)
    }
    return reversedString;
}


recursiveStringReverse("abc") // bca
 
recursiveStringReverse("abcd") // dcba 

recursiveStringReverse("abcdefg") // gfedcba 
