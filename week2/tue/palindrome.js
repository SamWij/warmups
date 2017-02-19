console.log("palindrome.js")


var sentence = "A new order began, a more Roman age bred Rowena."
// "this is not a palindrome!!!,,,???"   "A new order began, a more Roman age bred Rowena."

function palindrome(sentence) {

  var removePunctuation = sentence.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, '');
  var reverseSentence = removePunctuation.split("").reverse().join("");

  console.log(removePunctuation);
  console.log(reverseSentence);

  if (removePunctuation.toLowerCase() === reverseSentence.toLowerCase()) {
    return true;
      } else {
        return false;
      }
}

var isSentencePalindrome = palindrome(sentence);

console.log(isSentencePalindrome);
console.log(sentence);
