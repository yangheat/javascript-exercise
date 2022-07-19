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
  let suspect_info = {};

  for (let data of report) {
    const [repoter, suspect] = data.split(" ");

    if (suspect_info[suspect]) {
      // // 한 번에 한명만 신고 가능
      if (suspect_info[suspect].repoter.includes(repoter)) continue;
      // 전과자 신고
      suspect_info[suspect] = reportExConvict(suspect_info[suspect], repoter);
    } else {
      // 처음 신고 당하는 경우
      suspect_info[suspect] = setFirstReport(repoter);
    }
  }

  const repoterStatusByMember = checkBadMember(id_list, suspect_info, k);

  return mailReceiveCount(repoterStatusByMember);

  function initReportStatusByMember(id_list) {
    let result = {};

    id_list.forEach((id) => (result[id] = []));

    return result;
  }

  function reportExConvict(suspect, repoter) {
    const result = [];

    result.count = suspect.count + 1;
    result.repoter = suspect.repoter.concat(repoter);

    return result;
  }

  function setFirstReport(repoter) {
    return {
      count: 1,
      repoter: [repoter],
    };
  }

  function checkBadMember(id_list, suspects, count) {
    let result = initReportStatusByMember(id_list);

    for (const [suspect, info] of Object.entries(suspects)) {
      if (info.count >= count) {
        for (const repoter of info.repoter) {
          if (result[repoter].find((data) => data === suspect)) continue;
          result[repoter].push(suspect);
        }
      }
    }

    return result;
  }

  function mailReceiveCount(repoterStatusByMember) {
    const result = [];

    for (const value of Object.values(repoterStatusByMember)) {
      result.push(value.length);
    }

    return result;
  }
}
