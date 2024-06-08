# 클로저 2

- toggle()에는 인수로 하나 이상의 값을 전달하고, 함수를 반환합니다.
- 반환된 함수는 반복적으로 호출되는 동안 전달받은 값을 순서대로 하나씩 회전합니다.
- toggle()에 값을 전달하지 않는 경우에는 undefined 반환

# 제공되는 코드

```javascript
function toggle(/* ... */) {
  // ...
}

var hello = toggle('hello')
var onOff = toggle('on', 'off')
var speed = toggle('slow', 'medium', 'fast')

hello() // 'hello'
hello() // 'hello'

onOff() // 'on'
onOff() // 'off'
onOff() // 'on'

speed() // 'slow'
speed() // 'medium'
speed() // 'fast'
speed() // 'slow'
```
