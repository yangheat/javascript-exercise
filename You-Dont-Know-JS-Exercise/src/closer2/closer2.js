function toggle() {
  let args = arguments
  let currentIndex = 0

  return function () {
    const result = args[currentIndex]

    if (args.length !== 1 && currentIndex < args.length - 1) {
      currentIndex++
    } else {
      currentIndex = 0
    }

    console.log(result)
  }
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

function solution(...values) {
  let unset = {}
  let cur = unset
  return function next() {
    if (cur !== unset) {
      values.push(cur)
    }
    cur = values.shift()
    return cur
  }
}

function mySolution(...values) {
  let currentValue

  return function next() {
    if (currentValue) {
      values.push(currentValue)
    }

    return (currentValue = values.shift())
  }
}
