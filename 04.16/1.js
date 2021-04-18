//카카오 인형뽑기

function solution(board, moves) {
  const newArr = [0];
  let cnt = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        newArr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        if (newArr[newArr.length - 1] === newArr[newArr.length - 2]) {
          newArr.pop();
          newArr.pop();
          cnt += 2;
        }
        break;
      }
    }
  }
  return cnt;
}
