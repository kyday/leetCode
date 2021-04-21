/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers = function (matrix) {
  let colMax = [];
  let rowMin = 0;

  for (let i = 0; i <= matrix[0].length; i++) {
    colMax.push(Math.max(...matrix.map((arr) => arr[i])));
  }

  for (let i = 0; i < matrix.length; i++) {
    rowMin = Math.min(...matrix[i]);

    if (colMax.indexOf(rowMin) > -1) {
      return [rowMin];
    }
  }

  return [];
};
