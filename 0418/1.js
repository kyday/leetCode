function solution(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      str += "박";
    } else {
      str += "수";
    }
  }

  return str;
}
