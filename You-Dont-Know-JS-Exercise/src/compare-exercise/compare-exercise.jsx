import { useEffect, useState } from 'react'

export default function CompareExercise() {
  const TIME_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
  const [dayStart, setDayStart] = useState('07:30')
  const [dayEnd, setDayEnd] = useState('17:45')
  const [startTime, setStartTime] = useState('07:30')
  const [durationMinutes, setDurationMinutes] = useState('30')
  const [meeting, setMeeting] = useState()
  const [resultTime, setResultTime] = useState('')

  function convertTimeToMinute(time) {
    if (!time.match(TIME_REGEX)) {
      console.error(`Invalid time to changed to minute: ${time}`)
      return false
    }

    const hour = Number(time.split(':')[0])
    const minute = Number(time.split(':')[1])
    return hour * 60 + minute
  }

  function scheduleMeeting() {
    let meetingStartTimeToMinute
    let dayStartTimeToMinute
    let dayEndTimeToMinute
    let meetingEndTimeToMinite

    try {
      // 회의 시작 시각이 유효하지 않은 경우
      if (!startTime.match(TIME_REGEX)) {
        throw new Error(`Invalid start time: ${startTime}`)
      }

      if (isNaN(durationMinutes)) {
        throw new Error(`Invalid dutrain Minute: ${durationMinutes}`)
      }

      dayStartTimeToMinute = convertTimeToMinute(dayStart)
      meetingStartTimeToMinute = convertTimeToMinute(startTime)
      if (meetingStartTimeToMinute < dayStartTimeToMinute) {
        throw new Error('The meetings starts before work begins.')
      }

      dayEndTimeToMinute = convertTimeToMinute(dayEnd)
      if (meetingStartTimeToMinute > dayEndTimeToMinute) {
        throw new Error('The meetings starts after work ends.')
      }

      meetingEndTimeToMinite =
        meetingStartTimeToMinute + Number(durationMinutes)
      if (meetingEndTimeToMinite > dayEndTimeToMinute) {
        throw new Error('The meetings end after woek ends')
      }

      setResultTime(
        (meetingEndTimeToMinite / 60).toString().padStart(2, 0) +
          ':' +
          (meetingEndTimeToMinite % 60).toString().padStart(2, 0)
      )
      setMeeting(true)
    } catch (err) {
      console.error(err.message)
      setMeeting(false)
    }
  }

  useEffect(() => {
    scheduleMeeting()
  }, [dayStart, dayEnd, startTime, durationMinutes, meeting, resultTime])

  return (
    <div className="flex justify-center h-screen items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">비교 연습하기</h2>

        <div>
          <label
            htmlFor="day_start"
            className="block text-sm font-medium text-gray-700"
          >
            근무 시작 시각
          </label>
          <input
            type="time"
            id="day_start"
            name="day_start"
            defaultValue={dayStart}
            onChange={(e) => setDayStart(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="day_end"
            className="block text-sm font-medium text-gray-700"
          >
            근무 종료 시각
          </label>
          <input
            type="time"
            id="day_end"
            name="day_end"
            defaultValue={dayEnd}
            onChange={(e) => setDayEnd(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="start_time"
            className="block text-sm font-medium text-gray-700"
          >
            회의 시작 시각
          </label>
          <input
            type="time"
            id="start_time"
            name="start_time"
            defaultValue={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="duration_minutes"
            className="block text-sm font-medium text-gray-700"
          >
            회의 지속 시간
          </label>
          <input
            type="number"
            id="duration_minutes"
            name="duration_minutes"
            defaultValue={durationMinutes}
            onChange={(e) => setDurationMinutes(e.target.value)}
            min="1"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-6">
          {meeting ? (
            <div
              className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">회의가 근무 시간 내에 이뤄집니다.</p>
              <p className="text-sm">회의 종료 시간: {resultTime}</p>
            </div>
          ) : (
            <div
              className="bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">회의가 근무 시간 외에 이뤄집니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
