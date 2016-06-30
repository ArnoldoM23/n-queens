/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({ n:n });
  var matrix = board.attributes
  var column = 0;
  var row = 0;
  var solution = []
  // function rookSolution(board, index){

  // }
    console.log('line 24',board)
  for (var key in matrix) {
    console.log("line 26", matrix[key])
    if (matrix[i][column] === 0) {
      matrix[i][column] = 1;
      if (!board.hasRowConflictAt(matrix[key]) && board.hasColConflictAt(matrix[key])) {
        board.togglePiece(key, column)
        column++
      }
    }
  };
    //check if there is a piece on the board if there is move on if there isn't an there is NO conflict place a piece
    //change i during the next iteration to move to our next column index and once the end of the board is reached 
    //go back to the first row index and recursively go through the board break the recursion when all possible solutions have
    //been found

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
