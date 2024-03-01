const report = require("./kakao/report");
test("2022 KAKAO BLIND RECRUITMENT 신고 결과 받기", () => {
  expect(
    report(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
      2
    )
  ).toStrictEqual([2, 1, 1, 0]);
  expect(
    report(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
  ).toStrictEqual([0, 0]);
  expect(
    report(
      ["muzi", "frodo", "apeach", "neo", "con", "ryan"],
      [
        "muzi frodo",
        "apeach frodo",
        "frodo neo",
        "muzi neo",
        "apeach muzi",
        "ryan con",
        "ryan con",
        "ryan con",
        "ryan con",
      ],
      1
    )
  ).toStrictEqual([2, 1, 2, 0, 0, 1]);
});

const rotto_best_west = require("./dev-matching/rotto_best_west");
test("2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위", () => {
  expect(
    rotto_best_west([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
  ).toStrictEqual([3, 5]);
  expect(
    rotto_best_west([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
  ).toStrictEqual([1, 6]);
  expect(
    rotto_best_west([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
  ).toStrictEqual([1, 1]);
  expect(
    rotto_best_west([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])
  ).toStrictEqual([6, 6]);
});

const new_id_recommendation = require("./kakao/new_id_recommendation");
test("2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천", () => {
  expect(new_id_recommendation("...!@BaT#*..y.abcdefghijklm")).toStrictEqual(
    "bat.y.abcdefghi"
  );
  expect(new_id_recommendation("z-+.^.")).toStrictEqual("z--");
  expect(new_id_recommendation("=.=")).toStrictEqual("aaa");
  expect(new_id_recommendation("123_.def")).toStrictEqual("123_.def");
  expect(new_id_recommendation("abcdefghijklmn.p")).toStrictEqual(
    "abcdefghijklmn"
  );
});

const number_string_word = require("./kakao/number_string_word");
test("2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어", () => {
  expect(number_string_word("one4seveneight")).toStrictEqual(1478);
  expect(number_string_word("23four5six7")).toStrictEqual(234567);
  expect(number_string_word("2three45sixseven")).toStrictEqual(234567);
  expect(number_string_word("123")).toStrictEqual(123);
  expect(number_string_word("twotwo")).toStrictEqual(22);
});

const keypad = require("./kakao/keyapd");
test("2020 카카오 인턴십 > 키패드 누르기", () => {
  expect(keypad([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toStrictEqual(
    "LRLLLRLLRRL"
  );
  expect(keypad([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toStrictEqual(
    "LRLLRRLLLRR"
  );
  expect(keypad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")).toStrictEqual(
    "LLRLLRLLRL"
  );
});

const even_and_odd = require('./pratice/even_and_odd');
test("짝수와 홀수", () => {
    expect(even_and_odd(1)).toStrictEqual('Odd');
});

const add_digit = require('./pratice/add_digit');
test('자릿수 더하기', () => {
  expect(add_digit(123)).toStrictEqual(6);
});

const babbling = require('./pratice/babbling')
test('옹알이', () => {
  expect(babbling(["aya", "yee", "u", "maa", "wyeoo"])).toStrictEqual(1)
  expect(babbling(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])).toStrictEqual(3)
})

const bandage = require('./pccp/example1')
test('붕대감기', () => {
  expect(bandage([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])).toStrictEqual(5)
  expect(bandage([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])).toStrictEqual(-1)
  expect(bandage([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])).toStrictEqual(-1)
  expect(bandage([1, 1, 1], 5, [[1, 2], [3, 2]])).toStrictEqual(3)
})