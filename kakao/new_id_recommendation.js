const new_id = "...!@BaT#*..y.abcdefghijklm";
// const new_id = "z-+.^.";
// const new_id = "=.=";
// const new_id = "123_.def";
// const new_id = "abcdefghijklmn.p";

console.log(solution(new_id));

function solution(new_id) {
  let first = new_id.toLowerCase();
  let second = first.replace(/[^\w-.]/g, "");
  let three = second.replace(/(\.){2,}/g, ".");
  let four = three.replace(/^(\.)|(\.)$/g, "");
  // let five = four.replace(/\s/g, 'a');
  let five = four;
  if (five === "") five = "a";
  let six = five.length >= 16 ? five.slice(0, 15).replace(/(\.$)/g, "") : five;
  let seven = six;
  if (six.length <= 2) {
    do {
      seven += six.slice(-1);
    } while (seven.length < 3);
  }
  return seven;
}
