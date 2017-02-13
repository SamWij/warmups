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


var bobResults = [

  {holeNo: 1,
  holeRes: 3},

  {holeNo: 2,
    holeRes: 2},

  {holeNo: 3,
    holeRes: 6},

  {holeNo: 4,
    holeRes: 11},

  {holeNo: 5,
  holeRes: 9},

  {holeNo: 6,
    holeRes: 2},

  {holeNo: 7,
    holeRes: 6},

  {holeNo:  8,
    holeRes: 9},

  {holeNo: 9,
    holeRes: 10}

];


var jimboResults = [

  {Hole1: 5},
  {Hole2: 12},
  {Hole3: 9},
  {Hole4 : 22},
  {Hole5 : 13},
  {Hole6 : 7},
  {Hole7 : 16},
  {Hole8 : 10},
  {Hole9 : 11},

];
var fishResults = [

  {Hole1: 2},
  {Hole2: 2},
  {Hole3: 4},
  {Hole4: 5},
  {Hole5: 4},
  {Hole6: 3},
  {Hole7: 6},
  {Hole8: 4},
  {Hole9: 1},

];;

function totalScores(bobResults, jimboResults, fishResults) {

  for (var i = 0; i < bobResults.length; i++) {

    var bobResultSumArray = [];
    bobResultSumArray.push(bobResults[i].holeRes);


    console.log(bobResultSumArray);
  }

  return bobResultSumArray

}
var bobResultSumArray = totalScores(bobResults, jimboResults, fishResults)
