const dayStart = '07:30'
const dayEnd = '17:45'

function scheduleMeeting(startTime, durationMinutes) {
  var [, meetingStartHour, meetingStartMinutes] =
    startTime.match(/^(\d{1,2}):(\d{2})$/) || []

  durationMinutes = Number(durationMinutes)

  if (
    typeof meetingStartHour === 'string' &&
    typeof meetingStartMinutes === 'string'
  ) {
    let durationHours = Math.floor(durationMinutes / 60)
    durationMinutes = durationMinutes - durationHours * 60
    let meetingEndHour = Number(meetingStartHour) + durationHours
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes

    if (meetingEndMinutes >= 60) {
      meetingEndHour = meetingEndHour + 1
      meetingEndMinutes = meetingEndMinutes - 60
    }

    // 비교를 좀 더 쉽게 하기 위해 시각을 나타내는 문자열을 재가공했습니다.
    let meetingStart = `${meetingStartHour.padStart(
      2,
      '0'
    )}:${meetingStartMinutes.padStart(2, '0')}`
    let meetingEnd = `${String(meetingEndHour).padStart(2, '0')}:${String(
      meetingEndMinutes
    ).padStart(2, '0')}`

    // 비교 대상이 모두 문자열이기 때문에 비교는 사전 순으로 일어납니다.
    // 하지만 앞서 문자열을 재가공 했으므로
    // 사전 순으로 비교가 일어나도 시각을 비교할 수 있습니다.
    // 예: '07:15' < '07:30'
    return meetingStart >= dayStart && meetingEnd <= dayEnd
  }

  return false
}
