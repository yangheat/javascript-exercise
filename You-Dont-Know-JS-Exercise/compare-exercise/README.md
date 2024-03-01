# 비교 연습하기

- scheduleMeeting()은 "hh:mm: 형태(24시간을 기준으로 시간을 표현하는 문자열)의 회의 시작 시각과 분 단위의 회의 지속 시간을 인수로 받습니다.
- 변수 dayStart와 dayEnd에는 근무 시작 시각과 근무 종료 시각이 할당됩니다.
- scheduleMeeting 함수는 회의가 근무 시간 내에 이뤄질 경우 true를, 그렇지 않다면 false를 반환해야 합니다

## 제공하는 코드 

```javascript
const dayStart = '07:30'
const dayEnd = '17:45'

function scheduleMeeting(startTime, durationMinutes) {
    // ...여기에 코드를 작성하세요...
}

console.log(scheduleMeeting('7:00', 15))  // false
console.log(scheduleMeeting('07:15', 30)) // false
console.log(scheduleMeeting('7:30', 30))  // true
console.log(scheduleMeeting('11:30', 60)) // true
console.log(scheduleMeeting('17:00', 45)) // true
console.log(scheduleMeeting('17:30', 30)) // false
console.log(scheduleMeeting('18:00', 15)) // false
```
