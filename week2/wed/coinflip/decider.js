console.log("decider is connected");

var coin = ["HEADS","TAILS"];
var headCount = 0;
var tailCount = 0;

var coinFlip = function(coin) {

  var i = 0;
  var user = coin[Math.round(Math.random(0,1))];
  for (var counter = 0; counter < 5; counter++) {



    console.log("User chose: "+user);

    var computer = coin[Math.round(Math.random(0,1))]

    console.log("Comp flipped: "+computer);

      if (user === "HEADS" && computer === "HEADS") {
        headCount++
        console.log("Head count : "+ headCount)
      } else if (user === "TAILS" && computer === "TAILS") {
            tailCount++
            console.log("Tail count: "+ tailCount)

      } else {
        console.log("no match")
      }
  }

  if (headCount < tailCount) {
    console.log("THE WINNER IS TAILS")
      } else if (headCount > tailCount) {
        console.log("THE WINNER IS HEADS")
      }
}

coinFlip(coin);
