// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


 function palindrome(str){
     str.split('').every((char,i) => {
         return char === str.length - 1
     })
 }


// function palindrome(str) {
//     let reverseStr = str.split('').reverse().join('')
//     if(reverseStr === str){
//         return true;
//     }else {
//         return false;
//     }
// }

// palindrome('apapa')



module.exports = palindrome;
