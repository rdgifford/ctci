const expect = require('chai').expect;

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 0 0 , 0 1 , 0 2
// 1 0 , 1 1 , 1 2
// 2 0 , 2 1 , 2 2
//
// >>>
//
// 2 0 , 1 0 , 0 0
// 2 1 , 1 1 , 0 1
// 2 2 , 1 2 , 0 2

var rotatedMatrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

// how to you do this in place?
// swap with var like typical swap function

var rotateMatrix = (matrix) => {
  var m = [];
  for (var i = 0, l = matrix.length; i < l; i++) {
    m[i] = [];
    var counter = 0;
    for (var x = matrix[i].length - 1; x >= 0; x--) {
      m[i][counter] = matrix[x][i];
      counter++;
    }
  }
  return m;
}

it('rotateMatrix', () => {
  describe('should rotate 90 degrees clockwise', () => {
    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
  })
})
