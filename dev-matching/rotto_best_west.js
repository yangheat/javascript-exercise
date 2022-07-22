module.exports = rotto_best_west;

function rotto_best_west(lottos, win_nums) {
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
}
