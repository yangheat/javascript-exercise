import { useState } from 'react'

export default function CloserExercise() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(3)
  const [errorMessage, setErrorMessage] = useState('')

  let rangeContainStart = range(start)

  function range(start) {
    return function (end) {
      const result = []
      for (let i = start; i <= end; i++) {
        result.push(Number(i))
      }
      return result
    }
  }

  function handleStartChange(e) {
    const value = e.target.value
    if (handleError(value, end)) {
      return
    }
    setStart(value)
  }

  function handleEndChange(e) {
    const value = e.target.value
    if (handleError(start, value)) {
      return
    }
    setEnd(value)
    setErrorMessage('')
  }

  function handleError(start, end) {
    if (start >= end) {
      setErrorMessage('시작은 끝과 같거나 초과할 수 없습니다.')
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
      return true
    }
    return false
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">클로저 연습하기</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="start"
              className="block text-sm font-medium text-gray-700"
            >
              시작
            </label>
            <input
              type="number"
              value={start}
              className="mt-1 p-2 border rounded-md"
              id="start"
              onChange={handleStartChange}
              // onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="end"
              className="block text-sm font-medium text-gray-700"
            >
              끝
            </label>
            <input
              type="number"
              value={end}
              className="mt-1 p-2 border rounded-md"
              id="end"
              onChange={handleEndChange}
              // onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          {errorMessage ? (
            <div
              className="bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-3"
              role="alert"
            >
              <p className="text-sm">{errorMessage}</p>
            </div>
          ) : (
            <div
              className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
              role="alert"
            >
              <p className="text-sm">{rangeContainStart(end).join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
