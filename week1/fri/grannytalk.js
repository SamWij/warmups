console.log("connected!");

// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.
// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
// The year will be a random year between 1930 and 1950.
// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."
// bonus: write an additional function 'grandpaTalk' that when called, will call granny
// for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.
// sample output of grandpaTalk:
// NO, NOT SINCE incorrect year // whats that sunny

var question = prompt("Enter a question for Granny");
var year = Math.floor(Math.random() * 20) + 1930;


function grannyTalk () {
var grannyResponse = "";
if (question === "BYE" )
  {
    grannyResponse = "What's that honey, I didn't hear you..";
  }
  else if (question === question.toUpperCase()) {
    // The character is uppercase
    grannyResponse = "NO! NOT SINCE " + year;

  } else if (question === question.toLowerCase()) {
      // The character is lowercase
      grannyResponse = "SPEAK UP SONNY";
  }
  return grannyResponse;
}
grannyTalk(question);
console.log(grannyResponse);
