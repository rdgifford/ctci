const expect = require('chai').expect;

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 0 0 , 0 1 , 0 2 , 0 3
// 1 0 , 1 1 , 1 2 , 1 3
// 2 0 , 2 1 , 2 2 , 2 3
// 3 0 , 3 1 , 3 2 , 3 3
//
// >>>
//
// 3 0 , 2 0 , 1 0 , 0 0
// 3 1 , 2 1 , 1 1 , 0 1
// 3 2 , 2 2 , 1 2 , 0 2
// 3 3 , 2 3 , 1 3 , 0 3

var rotatedMatrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

// how to you do this in place?
// swap with var like typical swap function
// pattern is unique -- run to last element of column or row

// naive solution
// var rotateMatrix = (matrix) => {
//   var m = [];
//   for (var i = 0, l = matrix.length; i < l; i++) {
//     m[i] = [];
//     var counter = 0;
//     for (var x = matrix[i].length - 1; x >= 0; x--) {
//       m[i][counter] = matrix[x][i];
//       counter++;
//     }
//   }
//   return m;
// }

var rotateMatrix = (matrix) => {
  // how do you replace specific parts of the matrix?
  // spin around matrix, swap for each space
  for(var row = 0; row < matrix.length; row++) {
    // run col or row, splice all out & in
    for(var col = 0; col < row.length; col++) {
      matrix[row][col];
    }
  }
}

it('rotateMatrix', () => {
  describe('should rotate 90 degrees clockwise', () => {
    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
  })
})
