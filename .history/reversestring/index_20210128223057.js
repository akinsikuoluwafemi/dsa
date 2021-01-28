// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const arr = str.split('').reverse().join('')
//     return arr;
// }

// console.log(reverse('femi'))



// function reverse(str) {
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }

//     return reversed;


// }

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}


module.exports = reverse;
