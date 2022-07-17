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
  let repoterStatusByMember = {};
  let suspect_info = {};

  repoterStatusByMember = initReportStatusByMember(id_list);

  for (let data of report) {
    const [repoter, suspect] = data.split(" ");

    if (suspect_info[suspect]) {
      // 한 번에 한명만 신고 가능
      if (suspect_info[suspect].repoter.includes(repoter)) continue;

      suspect_info[suspect].count += 1;
      suspect_info[suspect].repoter.push(repoter);
    } else {
      // 첫 신고 당하는 경우
      suspect_info[suspect] = setFirstReport(repoter);
    }

    if (suspect_info[suspect].count >= k) {
      for (data of suspect_info[suspect].repoter) {
        if (repoterStatusByMember[data].includes(suspect)) continue;
        repoterStatusByMember[data].push(suspect);
      }
    }
  }

  return mailReceiveCount(repoterStatusByMember);

  function initReportStatusByMember(id_list) {
    let result = {};

    id_list.forEach((id) => (result[id] = []));

    return result;
  }

  function setFirstReport(repoter) {
    return {
      count: 1,
      repoter: [repoter],
    };
  }

  function mailReceiveCount(repoterStatusByMember) {
    const result = [];

    for (const value of Object.values(repoterStatusByMember)) {
      result.push(value.length);
    }

    return result;
  }
}
