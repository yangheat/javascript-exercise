const lottos = [44, 1, 0, 0, 31, 25];
const wins_nums = [31, 10, 45, 1, 6, 19];
// [3, 5]

// const lottos = [0, 0, 0, 0, 0, 0];
// const wins_nums = [38, 19, 20, 40, 15, 25]
// // [1, 6]
// const lottos = [45, 4, 35, 20, 3, 9]
// const wins_nums = [20, 9, 3, 45, 4, 35]
// // [1, 1]
// const lottos = [1, 2, 3, 4, 5, 6]
// const wins_nums = [7, 8, 9, 10, 11, 12]
// // [6, 6]

console.log(solution(lottos, wins_nums));
function solution(lottos, win_nums) {
  // var answer = [];
  let worst = 0;
  let best = 0;
  for (const lotto of lottos) {
    if (lotto === 0) {
      best += 1;
    } else {
      if (win_nums.find((num) => num === lotto)) worst += 1;
    }
  }
  best += worst;
  if (best === 0) best = 1;
  if (worst === 0) worst = 1;
  return [7 - best, 7 - worst];

  // return answer;
}
