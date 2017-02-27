console.log("map");

// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually,
// so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below)
// and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

// Sample output:

var treasureFinder = function(map, value) {
  var findVal = value
  for (var i = 0; i < map.length; i++) {

    for (var x = 0; x < map[i].length; x++) {
      var findX = map[i][x].toUpperCase();

      if (findX === findVal) {
        var iLocation = i
        var xLocation = x

      }
    }

  }
  console.log("["+iLocation+", "+xLocation+"]")
}

treasureFinder(map1, "X"); // should return [2, 2];
treasureFinder(holyGrailMap, "G") // should return [4, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];
treasureFinder(holyGrailMap, "V")
