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
            emptyObj[char]++
        }
    }

    let max = 0;
    let maxChar = ""

    for(let char in emptyObj){
        if(emptyObj[char] > max){
            max = 
        }
    }
    


}

module.exports = maxChar;
