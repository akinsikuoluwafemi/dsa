// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    let emptyObj = {}

    let max = 0;
    let maxChar = "";

    for(let char of str){
        if(!emptyObj[char]){
            emptyObj[char] = 1;
        }else {
            emptyObj[char]++
        }
    }

    console.log(emptyObj)


    for(let char in emptyObj){
        if(emptyObj[char] > max){
            max = emptyObj[char];
            maxChar = char;
        }
    }
    
    return max;


}

module.exports = maxChar;
