function add_digit(n){
    let answer = 0;
    [...n.toString()].forEach(number => answer += parseInt(number));

    return answer;
}

module.exports = add_digit;