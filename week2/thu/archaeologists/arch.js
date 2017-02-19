console.log("archaeologists!");
//output
// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

var mapValue = "A";
var xMarksTheSpot = "X";
var randomValue = getRandomInt(0, columnsOfMap);

function makeFakeMap(rowsOfMap, columnsOfMap) {
var map = [];
console.log("[")
for (var i = 0; i < rowsOfMap; i++) {
  map[i] = [ ];

  console.log("[ "+mapValue+ " , " +mapValue+ " , " +mapValue+ " , " +mapValue+ " , " +mapValue+ " ," +" ], "+"\n")

}
console.log("]")
return map;
}

var map = makeFakeMap(5,5);
