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
