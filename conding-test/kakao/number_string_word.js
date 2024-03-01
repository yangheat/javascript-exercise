module.exports = number_string_word;

function number_string_word(s) {
  let answer = s;
  const table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  if (isNaN(Number(s))) {
    for (let i in table) {
      answer = answer.replace(new RegExp(table[i], "g"), i);
    }
  }

  return parseInt(answer);
}
