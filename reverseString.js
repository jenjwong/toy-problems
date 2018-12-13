// Example 1:

// Input: "hello"
// Output: "olleh"
// Example 2:

// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"


const reverseString =  (s) => {
    var reversedString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversedString = reversedString + s[i]
    }

    return reversedString;
}


console.log(reverseString("A man, a plan, a canal: Panama")) // expect  "amanaP :lanac a ,nalp a ,nam A"
