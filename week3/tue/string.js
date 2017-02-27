console.log("string .js!");


// // Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
// //
// Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

var string1 = "xyaabbbccccdefww";

var string2 = "xxxxyyyyabklmopq";

var newString = [];

var string1Array = string1.split("").sort();
var string2Array =string2.split("").sort();
var stringMerge = string1Array.concat( string2Array );



for (var i = 0; i < stringMerge.length; i++) {
  if(newString.indexOf(stringMerge[i]) == -1){

          newString.push(stringMerge[i]);
          }
  }
  console.log("string 1: " + string1);
  console.log("string 2: " + string2);
  console.log(newString.join(" "));
