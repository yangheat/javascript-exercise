module.exports = new_id_recommendation;

function new_id_recommendation(new_id) {
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
