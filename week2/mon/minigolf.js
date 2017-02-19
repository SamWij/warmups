console.log("mini golf connected!");

// Bob, Jimbo and Fish love mini golf. But, like all good golfers
// they enjoy the 19th hole the most. Every time they hand in their score
// cards none of the scores are ever totalled. Write a function called totalScores
// in JS that calculates their scores and 'console.logs' the total for the club house.
//
// Extension
//
// Now work out each golfers round compared to the course par.
//
// Par
//
// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5


var bobResults = [3, 2, 6, 11, 9, 2, 6, 9, 10];


var jimboResults = [5,12,9,22,13,7,16,10,11]


var fishResults = [2,2,4,5,4,3,6,4,1];



function totalScores(bobResults, jimboResults, fishResults) {

  var tempResult =0;

    for (var i = 0; i < bobResults.length; i++) {
        tempResult = bobResults[i]

        var sum = tempResult + this.bobResults;
        console.log(sum);

    }
    return sum;



}
var sum = totalScores(bobResults, jimboResults, fishResults)
