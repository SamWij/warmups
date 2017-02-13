console.log("the board js is connected!");


// Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #

var board = " ";
var rowNo = 4;


//outer loop = print for 8 rows
for (var i = 0; i < rowNo; i++) {

//inner loop = print # for 8 rows, print a space on the odd rows.
  for (var x = 0; x < rowNo; x++) {

      if (x%2 === 0) {

        board = "# # # # # # # #";

      } else {

      board = " # # # # # # # #";
      }


  }

    board += "\n"


}
console.log(board);
