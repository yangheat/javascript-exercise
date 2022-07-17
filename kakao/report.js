const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
console.log(solution(id_list, report, k));

function solution(id_list, report, k) {
  const answer = [];
  let result = {};
  let suspect_info = {};

  id_list.forEach((id) => (result[id] = []));

  // k가 1인 경우.. 다른 사용자가 신고헀을 때 메일 받을 필요는 없음..
  for (let data of report) {
    const [repoter, suspect] = data.split(" ");

    if (suspect_info[suspect]) {
      // 한 번에 한명만 신고 가능
      if (suspect_info[suspect].repoter.includes(repoter)) continue;

      suspect_info[suspect].count += 1;
      suspect_info[suspect].repoter.push(repoter);
    } else {
      suspect_info[suspect] = {
        count: 1,
        repoter: [repoter],
      };
    }

    if (suspect_info[suspect].count >= k) {
      for (data of suspect_info[suspect].repoter) {
        if (result[data].includes(suspect)) continue;
        result[data].push(suspect);
      }
    }
  }

  for (const value of Object.values(result)) {
    answer.push(value.length);
  }

  return answer;
}
