// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    let emptyObj = {}
    for(let char of str){
        if(!emptyObj[char]){
            emptyObj[char] = 1;
        }else {
            emptyObj[char]
        }
    }


}

module.exports = maxChar;
