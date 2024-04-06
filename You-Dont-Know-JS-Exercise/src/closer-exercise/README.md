# 클로저 연습하기

- range()는 두 개의 숫자 인자를 받으며, 두 숫자는 각각 원하는 범위의 시작과 끝을 나타냅니다.
- 두 번째 인자가 없는 경우에는 두 번째 인자를 넘길 수 있도록 하는 함수가 반환되어야 합니다.

## 제공하는 코드

```javascript
function range(start, end) {
  // ...여기에 코드를 작성하세요...
}

range(3, 3) // [3]
range(3, 8) // [3, 4, 5, 6, 7, 8]
range(3, 0) // []

var start3 = range(3)
var start4 = range(4)

start3(3) // [3]
start3(8) // [3, 4, 5, 6, 7, 8]
start3(0) // []

start4(6) // [4, 5, 6]
```

## 책에서 제안하는 모범 답안

- model.answer.js 참고
