const dayStart = '07:30'
const dayEnd = '17:45'
const TIME_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

function convertTimeToMinute(time) {
  if (!time.match(TIME_REGEX)) {
    console.error(`Invalid time to changed to minute: ${time}`)
    return false
  }

  const hour = Number(time.split(':')[0])
  const minute = Number(time.split(':')[1])
  return hour * 60 + minute
}

function scheduleMeeting(startTime, durationMinutes) {
  let meetingStartTimeToMinute
  let dayStartTimeToMinute
  let dayEndTimeToMinute
  let meetingEndTimeToMinite

  // 회의 시작 시각이 유효하지 않은 경우
  if (!startTime.match(TIME_REGEX)) {
    console.error(`Invalid start time: ${startTime}`)
    return false
  }

  if (isNaN(durationMinutes)) {
    console.error(`Invalid dutrain Minute: ${durationMinutes}`)
    return false
  }

  meetingStartTimeToMinute = convertTimeToMinute(startTime)
  dayStartTimeToMinute = convertTimeToMinute(dayStart)
  if (meetingStartTimeToMinute < dayStartTimeToMinute) {
    console.error('The meetings starts before work begins.')
    return false
  }

  dayEndTimeToMinute = convertTimeToMinute(dayEnd)
  if (meetingStartTimeToMinute > dayEndTimeToMinute) {
    console.error('The meetings starts after work ends.')
    return false
  }

  meetingEndTimeToMinite = meetingStartTimeToMinute + Number(durationMinutes)
  if (meetingEndTimeToMinite > dayEndTimeToMinute) {
    console.error('The meetings end after woek ends')
    return false
  }

  return true
}

document.addEventListener('submit', (event) => {
  const formElement = event.tartget
  const result = scheduleMeeting(
    formElement.startTime.value,
    formElement.durationMinutes.value
  )

  document.querySelector('label').app
})

console.log(scheduleMeeting('7:00', 15)) // false
console.log(scheduleMeeting('07:15', 30)) // false
console.log(scheduleMeeting('7:30', 30)) // true
console.log(scheduleMeeting('11:30', 60)) // true
console.log(scheduleMeeting('17:00', 45)) // true
console.log(scheduleMeeting('17:30', 30)) // false
console.log(scheduleMeeting('18:00', 15)) // false
