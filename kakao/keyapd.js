module.exports = keypad;

function keypad(numbers, hand) {
  var answer = "";

  const pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let left_finger = pad[3][0];
  let right_finger = pad[3][2];

  let left_index = [3, 0];
  let right_index = [3, 2];

  numbers.forEach((number) => {
    for (let i = 0; i < pad.length; i++) {
      const j = pad[i].findIndex((data) => data === number);
      if (j === 0) {
        answer += "L";
        left_finger = pad[i][0];
        left_index = [i, j];
      } else if (j === 2) {
        answer += "R";
        right_finger = pad[i][2];
        right_index = [i, j];
      } else if (j === 1) {
        let left_position = Math.abs(
          Math.abs(i - left_index[0]) + Math.abs(j - left_index[1])
        );
        let right_position = Math.abs(
          Math.abs(i - right_index[0]) + Math.abs(j - right_index[1])
        );

        if (left_position < right_position) {
          answer += "L";
          left_finger = pad[i][0];
          left_index = [i, j];
        } else if (left_position > right_position) {
          answer += "R";
          right_finger = pad[i][2];
          right_index = [i, j];
        } else {
          if (hand === "left") {
            answer += "L";
            left_finger = pad[i][0];
            left_index = [i, j];
          } else if (hand === "right") {
            answer += "R";
            right_finger = pad[i][2];
            right_index = [i, j];
          }
        }
      }
    }
  });

  return answer;
}
